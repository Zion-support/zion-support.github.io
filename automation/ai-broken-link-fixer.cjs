#!/usr/bin/env node

/**
 * AI Broken Link Fixer Agent (ABLFA)
 * 
 * An advanced autonomous AI system that continuously scans, detects, and fixes
 * broken links (internal and external) throughout the codebase.
 * 
 * Features:
 * - Scans all files for links (href, Link components, etc.)
 * - Validates internal links against actual file structure
 * - Checks external links for accessibility
 * - Auto-fixes broken internal links
 * - Reports broken external links
 * - Continuously monitors and fixes
 * - Autonomous operation with auto-commit
 * 
 * @author AI Development Team
 * @license MIT
 */

const fs = require('fs').promises;
const path = require('path');
const { execSync } = require('child_process');
const http = require('http');
const https = require('https');

// Configuration
const CONFIG = {
  rootDir: process.cwd(),
  logsDir: path.join(process.cwd(), 'automation', 'logs'),
  reportsDir: path.join(process.cwd(), 'automation', 'reports'),
  dataDir: path.join(process.cwd(), 'automation', 'data'),
  
  // Continuous operation settings - OPTIMIZED FOR MAXIMUM SPEED
  continuous: process.env.CONTINUOUS_MODE !== 'false', // Default to true
  intervalSeconds: parseInt(process.env.INTERVAL_SECONDS || '15', 10), // ⚡ ULTRA-FAST: Run every 15 seconds
  intervalMinutes: parseInt(process.env.INTERVAL_MINUTES || '0', 10), // Fallback to minutes if seconds not set
  
  // Auto-commit settings - FULLY AUTONOMOUS
  autoCommit: process.env.AUTO_COMMIT !== 'false',
  autoPush: process.env.AUTO_PUSH !== 'false',
  
  // Link checking settings - OPTIMIZED FOR MAXIMUM SPEED
  maxLinksPerRun: parseInt(process.env.MAX_LINKS_PER_RUN || '500', 10), // Increased to 500 for maximum speed
  checkExternalLinks: process.env.CHECK_EXTERNAL !== 'false', // Default true
  externalTimeout: parseInt(process.env.EXTERNAL_TIMEOUT || '3000', 10), // Reduced to 3 seconds for faster checks
  maxConcurrentChecks: parseInt(process.env.MAX_CONCURRENT_CHECKS || '50', 10), // Increased to 50 concurrent checks
  parallelProcessing: process.env.PARALLEL_PROCESSING !== 'false', // Enable parallel processing
  maxConcurrentFiles: parseInt(process.env.MAX_CONCURRENT_FILES || '20', 10), // Process 20 files concurrently
  
  // File patterns to scan
  scanPatterns: [
    '**/*.tsx',
    '**/*.ts',
    '**/*.jsx',
    '**/*.js',
    '**/*.md',
    '**/*.html',
  ],
  
  // Directories to exclude
  excludeDirs: [
    'node_modules',
    '.next',
    '.git',
    'dist',
    'build',
    'coverage',
    '.cache',
    'automation/logs',
    'automation/reports',
    'automation/data',
  ],
  
  // External link history (track repeated failures)
  externalLinkHistoryFile: path.join(process.cwd(), 'automation', 'data', 'external-link-history.json'),

  // Base URL for internal link validation
  baseUrl: process.env.BASE_URL || 'https://ziontechgroup.com',
  
  // GitHub settings
  repository: 'https://github.com/Zion-Holdings/zion.app',
  canonicalUrl: 'https://ziontechgroup.com',
};

// Logger utility
class Logger {
  constructor(logFile) {
    this.logFile = logFile;
  }
  
  async log(level, message, data = null) {
    const timestamp = new Date().toISOString();
    const logEntry = {
      timestamp,
      level,
      message,
      data,
    };
    
    const logLine = `[${timestamp}] [${level.toUpperCase()}] ${message}${data ? ' ' + JSON.stringify(data) : ''}\n`;
    
    console.log(logLine.trim());
    
    try {
      await fs.appendFile(this.logFile, logLine);
    } catch (err) {
      console.error('Failed to write to log file:', err);
    }
  }
  
  info(message, data) { return this.log('info', message, data); }
  warn(message, data) { return this.log('warn', message, data); }
  error(message, data) { return this.log('error', message, data); }
  success(message, data) { return this.log('success', message, data); }
  debug(message, data) { return this.log('debug', message, data); }
}

// Ensure directories exist
async function ensureDirectories() {
  const dirs = [CONFIG.logsDir, CONFIG.reportsDir, CONFIG.dataDir];
  for (const dir of dirs) {
    try {
      await fs.mkdir(dir, { recursive: true });
    } catch (err) {
      // Directory might already exist
    }
  }
}

// Execute command safely
function execCommand(command, options = {}) {
  try {
    const result = execSync(command, {
      cwd: CONFIG.rootDir,
      encoding: 'utf8',
      stdio: options.silent ? 'pipe' : 'inherit',
      maxBuffer: 10 * 1024 * 1024, // 10MB
      ...options,
    });
    return { success: true, output: result };
  } catch (error) {
    return { success: false, error: error.message, output: error.stdout || error.stderr };
  }
}

// File Scanner
class FileScanner {
  constructor(logger) {
    this.logger = logger;
    this.fileCache = new Map();
  }
  
  async getAllFiles() {
    const files = [];
    const scanDirs = ['app', 'src', 'components', 'pages', 'public'];
    
    for (const dir of scanDirs) {
      const dirPath = path.join(CONFIG.rootDir, dir);
      try {
        await this.scanDirectory(dirPath, files);
      } catch (err) {
        // Directory might not exist
      }
    }
    
    return files;
  }
  
  async scanDirectory(dirPath, files) {
    const entries = await fs.readdir(dirPath, { withFileTypes: true });
    
    for (const entry of entries) {
      const fullPath = path.join(dirPath, entry.name);
      const relativePath = path.relative(CONFIG.rootDir, fullPath);
      
      // Skip excluded directories
      if (CONFIG.excludeDirs.some(excluded => relativePath.includes(excluded))) {
        continue;
      }
      
      if (entry.isDirectory()) {
        await this.scanDirectory(fullPath, files);
      } else if (entry.isFile()) {
        const ext = path.extname(entry.name);
        if (['.tsx', '.ts', '.jsx', '.js', '.md', '.html'].includes(ext)) {
          files.push(fullPath);
        }
      }
    }
  }
  
  async readFile(filePath) {
    if (this.fileCache.has(filePath)) {
      return this.fileCache.get(filePath);
    }
    
    try {
      const content = await fs.readFile(filePath, 'utf8');
      this.fileCache.set(filePath, content);
      return content;
    } catch (err) {
      return null;
    }
  }
}

// Link Extractor
class LinkExtractor {
  constructor(logger) {
    this.logger = logger;
  }
  
  extractLinks(content, filePath) {
    const links = [];
    
    // Pattern 1: href="..." or href='...'
    const hrefPattern = /href=["']([^"']+)["']/g;
    let match;
    while ((match = hrefPattern.exec(content)) !== null) {
      links.push({
        url: match[1],
        type: 'href',
        line: this.getLineNumber(content, match.index),
        file: filePath,
      });
    }
    
    // Pattern 2: Link component with href prop
    const linkComponentPattern = /<Link[^>]+href=["']([^"']+)["'][^>]*>/g;
    while ((match = linkComponentPattern.exec(content)) !== null) {
      links.push({
        url: match[1],
        type: 'Link',
        line: this.getLineNumber(content, match.index),
        file: filePath,
      });
    }
    
    // Pattern 3: router.push(...) or router.replace(...)
    const routerPattern = /router\.(push|replace)\(["']([^"']+)["']\)/g;
    while ((match = routerPattern.exec(content)) !== null) {
      links.push({
        url: match[2],
        type: 'router',
        line: this.getLineNumber(content, match.index),
        file: filePath,
      });
    }
    
    // Pattern 4: navigate(...) calls
    const navigatePattern = /navigate\(["']([^"']+)["']\)/g;
    while ((match = navigatePattern.exec(content)) !== null) {
      links.push({
        url: match[1],
        type: 'navigate',
        line: this.getLineNumber(content, match.index),
        file: filePath,
      });
    }
    
    // Pattern 5: Markdown links [text](url)
    const markdownPattern = /\[([^\]]+)\]\(([^)]+)\)/g;
    while ((match = markdownPattern.exec(content)) !== null) {
      links.push({
        url: match[2],
        type: 'markdown',
        line: this.getLineNumber(content, match.index),
        file: filePath,
      });
    }
    
    return links;
  }
  
  getLineNumber(content, index) {
    return content.substring(0, index).split('\n').length;
  }
  
  isInternalLink(url) {
    // Skip anchors, mailto, tel, javascript, etc.
    if (url.startsWith('#') || url.startsWith('mailto:') || url.startsWith('tel:') || 
        url.startsWith('javascript:') || url.startsWith('data:') || url.startsWith('blob:')) {
      return false;
    }
    
    // Internal if starts with / or is relative
    return url.startsWith('/') || (!url.includes('://') && !url.startsWith('//'));
  }
  
  normalizeInternalLink(url) {
    // Remove query params and hash for validation
    const cleanUrl = url.split('?')[0].split('#')[0];
    
    // Ensure starts with /
    if (!cleanUrl.startsWith('/')) {
      return '/' + cleanUrl;
    }
    
    return cleanUrl;
  }
}

// Link Validator
class LinkValidator {
  constructor(logger) {
    this.logger = logger;
    this.pageCache = new Set();
    this.validatedExternalLinks = new Map();
  }
  
  async buildPageCache() {
    await this.logger.debug('Building page cache...');
    
    // Scan app directory for pages
    const appDir = path.join(CONFIG.rootDir, 'app');
    try {
      await this.scanForPages(appDir, '');
    } catch (err) {
      // app directory might not exist
    }
    
    // Scan pages directory if exists (Pages Router fallback)
    const pagesDir = path.join(CONFIG.rootDir, 'pages');
    try {
      await this.scanForPages(pagesDir, '');
    } catch (err) {
      // pages directory might not exist
    }
    
    await this.logger.debug(`Page cache built: ${this.pageCache.size} pages found`);
  }
  
  async scanForPages(dirPath, routePrefix) {
    try {
      const entries = await fs.readdir(dirPath, { withFileTypes: true });
      
      for (const entry of entries) {
        const fullPath = path.join(dirPath, entry.name);
        const name = entry.name;
        
        if (entry.isDirectory()) {
          // Recursively scan subdirectories
          const newPrefix = routePrefix + '/' + name;
          await this.scanForPages(fullPath, newPrefix);
        } else if (name === 'page.tsx' || name === 'page.ts' || name === 'index.tsx' || name === 'index.ts') {
          // This is a page
          const route = routePrefix || '/';
          this.pageCache.add(route);
          this.pageCache.add(route + '/'); // Also add trailing slash version
        } else if (name.endsWith('.tsx') || name.endsWith('.ts')) {
          // File-based route (without page.tsx)
          const routeName = name.replace(/\.(tsx|ts)$/, '');
          const route = routePrefix + '/' + routeName;
          this.pageCache.add(route);
          this.pageCache.add(route + '/');
        }
      }
    } catch (err) {
      // Directory might not exist or be inaccessible
    }
  }
  
  async validateInternalLink(url, filePath) {
    const normalized = new LinkExtractor(this.logger).normalizeInternalLink(url);
    
    // Check if it's in our page cache
    if (this.pageCache.has(normalized)) {
      return { valid: true, reason: 'page_exists' };
    }
    
    // Check if it's a public asset
    if (normalized.startsWith('/_next/') || normalized.startsWith('/static/') || 
        normalized.startsWith('/images/') || normalized.startsWith('/favicon')) {
      return { valid: true, reason: 'public_asset' };
    }
    
    // Check if file exists in public directory
    const publicPath = path.join(CONFIG.rootDir, 'public', normalized);
    try {
      const stat = await fs.stat(publicPath);
      if (stat.isFile() || stat.isDirectory()) {
        return { valid: true, reason: 'public_file_exists' };
      }
    } catch (err) {
      // File doesn't exist
    }
    
    // Try to find the page file
    const possiblePaths = [
      path.join(CONFIG.rootDir, 'app', normalized, 'page.tsx'),
      path.join(CONFIG.rootDir, 'app', normalized, 'page.ts'),
      path.join(CONFIG.rootDir, 'app', normalized + '.tsx'),
      path.join(CONFIG.rootDir, 'app', normalized + '.ts'),
      path.join(CONFIG.rootDir, 'pages', normalized, 'index.tsx'),
      path.join(CONFIG.rootDir, 'pages', normalized, 'index.ts'),
    ];
    
    for (const possiblePath of possiblePaths) {
      try {
        await fs.access(possiblePath);
        // Found it, add to cache
        this.pageCache.add(normalized);
        return { valid: true, reason: 'file_exists' };
      } catch (err) {
        // Continue checking
      }
    }
    
    return { valid: false, reason: 'not_found', normalized };
  }
  
  async validateExternalLink(url) {
    // Check cache first
    if (this.validatedExternalLinks.has(url)) {
      return this.validatedExternalLinks.get(url);
    }
    
    if (!CONFIG.checkExternalLinks) {
      return { valid: true, reason: 'external_check_disabled' };
    }
    
    // Same-page anchors are valid; skip HTTP check
    if (url.startsWith('#')) {
      const result = { valid: true, reason: 'same_page_anchor' };
      this.validatedExternalLinks.set(url, result);
      return result;
    }
    
    // Allowlisted resource domains (often don't support HEAD or return 4xx for HEAD)
    const allowlistedHosts = ['fonts.googleapis.com', 'fonts.gstatic.com'];
    try {
      const u = new URL(url);
      if (allowlistedHosts.some((h) => u.hostname === h || u.hostname.endsWith('.' + h))) {
        const result = { valid: true, reason: 'resource_domain_allowlist' };
        this.validatedExternalLinks.set(url, result);
        return result;
      }
    } catch {
      // invalid URL, continue to normal check
    }
    
    try {
      const urlObj = new URL(url);
      const isHttps = urlObj.protocol === 'https:';
      const client = isHttps ? https : http;
      
      const result = await new Promise((resolve) => {
        const timeout = setTimeout(() => {
          resolve({ valid: false, reason: 'timeout' });
        }, CONFIG.externalTimeout);
        
        const req = client.get(url, { 
          method: 'HEAD',
          timeout: CONFIG.externalTimeout,
          headers: {
            'User-Agent': 'Mozilla/5.0 (compatible; AI-Link-Checker/1.0)',
          },
        }, (res) => {
          clearTimeout(timeout);
          const statusCode = res.statusCode || 0;
          resolve({
            valid: statusCode >= 200 && statusCode < 400,
            reason: statusCode >= 200 && statusCode < 400 ? 'accessible' : `status_${statusCode}`,
            statusCode,
          });
        });
        
        req.on('error', () => {
          clearTimeout(timeout);
          resolve({ valid: false, reason: 'network_error' });
        });
        
        req.setTimeout(CONFIG.externalTimeout, () => {
          clearTimeout(timeout);
          req.destroy();
          resolve({ valid: false, reason: 'timeout' });
        });
      });
      
      // Cache result
      this.validatedExternalLinks.set(url, result);
      return result;
    } catch (err) {
      return { valid: false, reason: 'invalid_url', error: err.message };
    }
  }
}

// Link Fixer
class LinkFixer {
  constructor(logger) {
    this.logger = logger;
    this.fixedCount = 0;
  }
  
  async fixBrokenLink(link, validation, suggestions = []) {
    if (validation.valid) {
      return { fixed: false, reason: 'already_valid' };
    }
    
    // Only fix internal links automatically
    const extractor = new LinkExtractor(this.logger);
    if (!extractor.isInternalLink(link.url)) {
      return { fixed: false, reason: 'external_link', needsManualFix: true };
    }
    
    // Try to find a suggested fix
    if (suggestions.length > 0) {
      const bestSuggestion = suggestions[0];
      await this.logger.info(`Fixing broken link: ${link.url} -> ${bestSuggestion}`, {
        file: link.file,
        line: link.line,
      });
      
      try {
        const content = await fs.readFile(link.file, 'utf8');
        const lines = content.split('\n');
        const lineIndex = link.line - 1;
        
        if (lineIndex >= 0 && lineIndex < lines.length) {
          // Replace the broken link with the suggested fix
          const oldLine = lines[lineIndex];
          const newLine = oldLine.replace(
            new RegExp(link.url.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'), 'g'),
            bestSuggestion
          );
          
          if (oldLine !== newLine) {
            lines[lineIndex] = newLine;
            await fs.writeFile(link.file, lines.join('\n'), 'utf8');
            this.fixedCount++;
            return { fixed: true, oldUrl: link.url, newUrl: bestSuggestion };
          }
        }
      } catch (err) {
        await this.logger.error(`Failed to fix link in ${link.file}`, { error: err.message });
        return { fixed: false, reason: 'write_error', error: err.message };
      }
    }
    
    return { fixed: false, reason: 'no_suggestion' };
  }
  
  async findSuggestions(brokenLink) {
    const suggestions = [];
    const normalized = new LinkExtractor(this.logger).normalizeInternalLink(brokenLink.url);
    
    // Try common fixes
    const possibleFixes = [
      normalized.toLowerCase(),
      normalized.replace(/_/g, '-'),
      normalized.replace(/-/g, '_'),
      normalized.replace(/\/$/, ''),
      normalized + '/',
    ];
    
    // Check each suggestion
    for (const fix of possibleFixes) {
      try {
        const possiblePaths = [
          path.join(CONFIG.rootDir, 'app', fix, 'page.tsx'),
          path.join(CONFIG.rootDir, 'app', fix + '.tsx'),
        ];
        
        for (const possiblePath of possiblePaths) {
          try {
            await fs.access(possiblePath);
            suggestions.push(fix);
            break;
          } catch (err) {
            // Continue
          }
        }
      } catch (err) {
        // Continue
      }
    }
    
    return suggestions;
  }
}

// Link Scanner Engine
class LinkScannerEngine {
  constructor(logger) {
    this.logger = logger;
    this.fileScanner = new FileScanner(logger);
    this.linkExtractor = new LinkExtractor(logger);
    this.linkValidator = new LinkValidator(logger);
    this.linkFixer = new LinkFixer(logger);
  }
  
  async scan() {
    await this.logger.info('🔍 Starting comprehensive link scan...');
    
    // Build page cache first
    await this.linkValidator.buildPageCache();
    
    // Get all files
    const files = await this.fileScanner.getAllFiles();
    await this.logger.info(`📁 Scanning ${files.length} files for links...`);
    
    const allLinks = [];
    const brokenLinks = [];
    
    // Extract links from all files - PARALLEL PROCESSING for MAXIMUM SPEED
    const fileBatch = files.slice(0, CONFIG.maxLinksPerRun);
    
    if (CONFIG.parallelProcessing && CONFIG.maxConcurrentFiles > 1) {
    // Process files in parallel batches for maximum speed
    const batches = [];
    for (let i = 0; i < fileBatch.length; i += CONFIG.maxConcurrentFiles) {
      batches.push(fileBatch.slice(i, i + CONFIG.maxConcurrentFiles));
    }
    
    for (const batch of batches) {
      const batchPromises = batch.map(async (file) => {
        try {
          const content = await this.fileScanner.readFile(file);
          if (!content) return [];
          const raw = this.linkExtractor.extractLinks(content, file);
          // Skip anchor-only, mailto, tel, javascript - no need to validate
          return raw.filter((link) => {
            const u = link.url.trim();
            if (u.startsWith('#') || u.startsWith('mailto:') || u.startsWith('tel:') || u.startsWith('javascript:') || u.startsWith('data:')) return false;
            return true;
          });
        } catch (err) {
          await this.logger.warn(`Failed to read file: ${file}`, { error: err.message });
          return [];
        }
      });
      
      const batchResults = await Promise.all(batchPromises);
      allLinks.push(...batchResults.flat());
    }
  } else {
      // Sequential processing (fallback)
      for (const file of fileBatch) {
        try {
          const content = await this.fileScanner.readFile(file);
          if (!content) continue;
          const raw = this.linkExtractor.extractLinks(content, file);
          for (const link of raw) {
            const u = link.url.trim();
            if (u.startsWith('#') || u.startsWith('mailto:') || u.startsWith('tel:') || u.startsWith('javascript:') || u.startsWith('data:')) continue;
            allLinks.push(link);
          }
        } catch (err) {
          await this.logger.warn(`Failed to read file: ${file}`, { error: err.message });
        }
      }
    }
    
    await this.logger.info(`🔗 Found ${allLinks.length} links to validate...`);
    
    // Validate links - PARALLEL PROCESSING for MAXIMUM SPEED
    if (CONFIG.parallelProcessing && CONFIG.maxConcurrentChecks > 1) {
      // Process validation in parallel batches
      const validationBatches = [];
      for (let i = 0; i < allLinks.length; i += CONFIG.maxConcurrentChecks) {
        validationBatches.push(allLinks.slice(i, i + CONFIG.maxConcurrentChecks));
      }
      
      for (const batch of validationBatches) {
        const batchPromises = batch.map(async (link) => {
          try {
            if (this.linkExtractor.isInternalLink(link.url)) {
              const validation = await this.linkValidator.validateInternalLink(link.url, link.file);
              if (!validation.valid) {
                return {
                  ...link,
                  validation,
                  type: 'internal',
                };
              }
            } else {
              // External link
              const validation = await this.linkValidator.validateExternalLink(link.url);
              if (!validation.valid) {
                return {
                  ...link,
                  validation,
                  type: 'external',
                };
              }
            }
            return null;
          } catch (err) {
            await this.logger.warn(`Failed to validate link: ${link.url}`, { error: err.message });
            return null;
          }
        });
        
        const batchResults = await Promise.all(batchPromises);
        brokenLinks.push(...batchResults.filter(r => r !== null));
      }
    } else {
      // Sequential processing (fallback)
      for (const link of allLinks) {
        try {
          if (this.linkExtractor.isInternalLink(link.url)) {
            const validation = await this.linkValidator.validateInternalLink(link.url, link.file);
            if (!validation.valid) {
              brokenLinks.push({
                ...link,
                validation,
                type: 'internal',
              });
            }
          } else {
            // External link
            const validation = await this.linkValidator.validateExternalLink(link.url);
            if (!validation.valid) {
              brokenLinks.push({
                ...link,
                validation,
                type: 'external',
              });
            }
          }
        } catch (err) {
          await this.logger.warn(`Failed to validate link: ${link.url}`, { error: err.message });
        }
      }
    }
    
    await this.logger.info(`❌ Found ${brokenLinks.length} broken links`);
    
    return {
      totalLinks: allLinks.length,
      brokenLinks,
      allLinks,
    };
  }
  
  async fixBrokenLinks(brokenLinks) {
    await this.logger.info('🔧 Starting to fix broken links...');
    
    const fixResults = [];
    
    for (const brokenLink of brokenLinks) {
      if (brokenLink.type === 'internal') {
        // Try to find suggestions
        const suggestions = await this.linkFixer.findSuggestions(brokenLink);
        const fixResult = await this.linkFixer.fixBrokenLink(brokenLink, brokenLink.validation, suggestions);
        fixResults.push({
          link: brokenLink,
          fixResult,
        });
      } else {
        // External links - just report
        fixResults.push({
          link: brokenLink,
          fixResult: { fixed: false, reason: 'external_link' },
        });
      }
    }
    
    const fixedCount = fixResults.filter(r => r.fixResult.fixed).length;
    await this.logger.success(`✅ Fixed ${fixedCount} broken links`);
    
    return fixResults;
  }
}

// Git Integration
class GitManager {
  constructor(logger) {
    this.logger = logger;
  }
  
  async hasChanges() {
    const result = execCommand('git status --porcelain', { silent: true });
    return result.success && result.output.trim().length > 0;
  }
  
  async commitAndPush(message, changes = []) {
    if (!CONFIG.autoCommit) {
      await this.logger.info('Auto-commit disabled, skipping commit');
      return { success: false, message: 'Auto-commit disabled' };
    }
    
    try {
      if (!(await this.hasChanges())) {
        await this.logger.info('No changes to commit');
        return { success: true, message: 'No changes' };
      }
      
      // Stage all changes
      execCommand('git add .');
      
      // Create commit message
      const commitMsg = `🔗 AI Broken Link Fixer: ${message}

${changes.length > 0 ? 'Fixed Links:\n' + changes.map(c => `- ${c}`).join('\n') : ''}

Automated by AI Broken Link Fixer Agent
Timestamp: ${new Date().toISOString()}`;
      
      // Commit
      execCommand(`git commit -m "${commitMsg.replace(/"/g, '\\"')}"`);
      await this.logger.success('✅ Changes committed');
      
      // Push if enabled
      if (CONFIG.autoPush) {
        const pushResult = execCommand('git push origin main');
        if (pushResult.success) {
          await this.logger.success('✅ Changes pushed to main');
          return { success: true, message: 'Committed and pushed' };
        } else {
          await this.logger.warn('⚠️  Failed to push changes');
          return { success: false, message: 'Commit succeeded, push failed' };
        }
      }
      
      return { success: true, message: 'Committed (push disabled)' };
    } catch (error) {
      await this.logger.error('Failed to commit changes', { error: error.message });
      return { success: false, error: error.message };
    }
  }
}

// External link history helpers (track repeated failures over time)
async function loadExternalLinkHistory() {
  try {
    const data = await fs.readFile(CONFIG.externalLinkHistoryFile, 'utf8');
    return JSON.parse(data);
  } catch {
    return {};
  }
}

async function saveExternalLinkHistory(history) {
  const dir = path.dirname(CONFIG.externalLinkHistoryFile);
  await fs.mkdir(dir, { recursive: true });
  await fs.writeFile(CONFIG.externalLinkHistoryFile, JSON.stringify(history, null, 2));
}

// Report Generator
class ReportGenerator {
  constructor(logger) {
    this.logger = logger;
  }
  
  async generateReport(scanResults, fixResults, runtime) {
    const brokenExternal = scanResults.brokenLinks.filter(l => l.type === 'external');
    const history = await loadExternalLinkHistory();
    const now = new Date().toISOString();

    // Only record real external URLs in history (skip anchors, mailto, etc.)
    const isRealExternal = (url) => {
      const u = (url || '').trim();
      return u && !u.startsWith('#') && !u.startsWith('mailto:') && !u.startsWith('tel:') && (u.startsWith('http://') || u.startsWith('https://') || u.includes('://'));
    };

    for (const link of brokenExternal) {
      const url = link.url;
      if (!isRealExternal(url)) continue;
      const entry = history[url] || { failureCount: 0, lastCheck: null, lastFailure: null };
      entry.failureCount = (entry.failureCount || 0) + 1;
      entry.lastCheck = now;
      entry.lastFailure = now;
      entry.reason = link.validation.reason;
      history[url] = entry;
    }

    const repeatedFailures = Object.entries(history)
      .filter(([, v]) => (v.failureCount || 0) >= 2)
      .map(([url, v]) => ({ url, failureCount: v.failureCount, lastFailure: v.lastFailure }))
      .sort((a, b) => (b.failureCount || 0) - (a.failureCount || 0));

    await saveExternalLinkHistory(history);

    const report = {
      metadata: {
        timestamp: now,
        version: '1.0.0',
        runtime: runtime,
        repository: CONFIG.repository,
      },
      scan: {
        totalLinks: scanResults.totalLinks,
        brokenLinks: scanResults.brokenLinks.length,
        internalBroken: scanResults.brokenLinks.filter(l => l.type === 'internal').length,
        externalBroken: brokenExternal.length,
      },
      repeatedExternalFailures: repeatedFailures,
      fixes: {
        attempted: fixResults.length,
        successful: fixResults.filter(f => f.fixResult.fixed).length,
        failed: fixResults.filter(f => !f.fixResult.fixed).length,
        details: fixResults.map(f => ({
          url: f.link.url,
          file: f.link.file,
          line: f.link.line,
          fixed: f.fixResult.fixed,
          reason: f.fixResult.reason,
          newUrl: f.fixResult.newUrl,
        })),
      },
      brokenLinks: scanResults.brokenLinks.map(link => ({
        url: link.url,
        file: link.file,
        line: link.line,
        type: link.type,
        reason: link.validation.reason,
      })),
    };

    if (repeatedFailures.length > 0) {
      await this.logger.warn(`External links with repeated failures: ${repeatedFailures.length}`, {
        urls: repeatedFailures.slice(0, 5).map((r) => r.url),
      });
    }

    // Save report
    const reportPath = path.join(CONFIG.reportsDir, `broken-link-fixer-report-${Date.now()}.json`);
    await fs.writeFile(reportPath, JSON.stringify(report, null, 2));
    await this.logger.success(`📊 Report saved to ${reportPath}`);
    
    // Also save as latest
    const latestPath = path.join(CONFIG.reportsDir, 'broken-link-fixer-latest-report.json');
    await fs.writeFile(latestPath, JSON.stringify(report, null, 2));
    
    return report;
  }
}

// Main Agent Class
class AIBrokenLinkFixerAgent {
  constructor() {
    const logFile = path.join(CONFIG.logsDir, 'ai-broken-link-fixer.log');
    this.logger = new Logger(logFile);
    this.linkScanner = new LinkScannerEngine(this.logger);
    this.gitManager = new GitManager(this.logger);
    this.reportGenerator = new ReportGenerator(this.logger);
    this.isRunning = false;
  }
  
  async run() {
    const startTime = Date.now();
    
    await this.logger.info('⚡ AI Broken Link Fixer Agent starting (ULTRA-FAST MODE)...');
    await this.logger.info(`⚡ Configuration: ${CONFIG.intervalMinutes}min interval, max ${CONFIG.maxLinksPerRun} links/run`);
    
    try {
      // Step 1: Scan for broken links
      const scanResults = await this.linkScanner.scan();
      await this.logger.info(`⚡ Found ${scanResults.brokenLinks.length} broken links out of ${scanResults.totalLinks} total`);
      
      // Step 2: Fix broken links
      let fixResults = [];
      if (scanResults.brokenLinks.length > 0) {
        fixResults = await this.linkScanner.fixBrokenLinks(scanResults.brokenLinks);
        const fixedCount = fixResults.filter(r => r.fixResult.fixed).length;
        await this.logger.info(`⚡ Fixed ${fixedCount} broken links`);
      } else {
        await this.logger.success('✅ No broken links found!');
      }
      
      // Step 3: Commit and push changes
      const fixedLinks = fixResults.filter(r => r.fixResult.fixed).map(r => r.link.url);
      
      if (fixedLinks.length > 0) {
        const gitResult = await this.gitManager.commitAndPush(
          `Fixed ${fixedLinks.length} broken links`,
          fixedLinks
        );
        
        if (gitResult.success) {
          await this.logger.success(`✅ Changes committed and pushed successfully`);
        }
      } else {
        await this.logger.info('⚡ No changes to commit');
      }
      
      // Step 4: Generate report
      const runtime = Date.now() - startTime;
      const report = await this.reportGenerator.generateReport(scanResults, fixResults, runtime);
      
      await this.logger.success(`⚡ Run complete in ${(runtime / 1000).toFixed(1)}s`);
      await this.logger.success(`📊 Broken Links: ${report.scan.brokenLinks}, Fixed: ${report.fixes.successful}`);
      
      return report;
    } catch (error) {
      await this.logger.error('❌ Agent run failed', { error: error.message, stack: error.stack });
      throw error;
    }
  }
  
  async runContinuously() {
    this.isRunning = true;
    await this.logger.info('🚀 Starting ULTRA-FAST continuous operation mode...');
    const interval = CONFIG.intervalSeconds > 0 ? CONFIG.intervalSeconds : CONFIG.intervalMinutes * 60;
    await this.logger.info(`⚡ Running every ${interval} seconds for MAXIMUM SPEED`);
    await this.logger.info('🤖 Fully autonomous mode - auto-commit and auto-push enabled');
    await this.logger.info(`⚡ Max ${CONFIG.maxLinksPerRun} links/run, ${CONFIG.maxConcurrentChecks} concurrent checks`);
    
    while (this.isRunning) {
      try {
        const startTime = Date.now();
        await this.run();
        const runtime = Date.now() - startTime;
        
        // Calculate wait time (ensure minimum 5 seconds between runs for MAXIMUM SPEED)
        const intervalMs = interval * 1000;
        const waitMs = Math.max(
          intervalMs - runtime,
          5000 // Minimum 5 seconds between runs for MAXIMUM SPEED
        );
        
        await this.logger.info(`⚡ Run completed in ${(runtime / 1000).toFixed(1)}s, next run in ${(waitMs / 1000).toFixed(1)}s`);
        await new Promise(resolve => setTimeout(resolve, waitMs));
      } catch (error) {
        await this.logger.error('Error in continuous loop', { error: error.message });
        // Ultra-fast retry on error - wait only 2 seconds before retrying
        await new Promise(resolve => setTimeout(resolve, 2000));
      }
    }
  }
  
  stop() {
    this.isRunning = false;
    this.logger.info('🛑 Stopping continuous operation...');
  }
}

// CLI Interface
async function main() {
  await ensureDirectories();
  
  const agent = new AIBrokenLinkFixerAgent();
  
  const args = process.argv.slice(2);
  const command = args[0] || 'continuous'; // Default to continuous
  
  switch (command) {
    case 'run':
      await agent.run();
      break;
    
    case 'continuous':
    case 'start':
    case '':
      await agent.runContinuously();
      break;
    
    case 'scan':
      const scanResults = await agent.linkScanner.scan();
      console.log(JSON.stringify(scanResults, null, 2));
      break;
    
    default:
      console.log(`
AI Broken Link Fixer Agent (ABLFA)

Usage:
  node ai-broken-link-fixer.cjs [command]

Commands:
  run         Run one link check and fix cycle
  continuous  Run continuously with periodic intervals (DEFAULT)
  start       Alias for continuous
  scan        Scan only (no fixes)

Environment Variables:
  CONTINUOUS_MODE=true       Enable continuous mode (default: true)
  INTERVAL_SECONDS=15        Seconds between runs (default: 15 - ULTRA-FAST)
  INTERVAL_MINUTES=0         Minutes between runs (fallback if seconds not set)
  AUTO_COMMIT=true          Auto-commit changes (default: true)
  AUTO_PUSH=true            Auto-push to main (default: true)
  MAX_LINKS_PER_RUN=500     Max links to check per cycle (default: 500 - MAXIMUM SPEED)
  CHECK_EXTERNAL=true       Check external links (default: true)
  EXTERNAL_TIMEOUT=3000     External link timeout in ms (default: 3000 - FAST)
  MAX_CONCURRENT_CHECKS=50  Max concurrent checks (default: 50 - MAXIMUM SPEED)
  PARALLEL_PROCESSING=true  Enable parallel processing (default: true)
  MAX_CONCURRENT_FILES=20   Max concurrent file processing (default: 20)

Examples:
  node ai-broken-link-fixer.cjs          # Starts continuous mode automatically (15s intervals)
  node ai-broken-link-fixer.cjs continuous  # Explicit continuous mode
  node ai-broken-link-fixer.cjs run      # Single run
  INTERVAL_SECONDS=10 node ai-broken-link-fixer.cjs  # Ultra-fast 10-second intervals
  MAX_LINKS_PER_RUN=1000 node ai-broken-link-fixer.cjs  # Process 1000 links per run
  AUTO_PUSH=false node ai-broken-link-fixer.cjs  # Test mode (no push)
      `);
  }
}

// Handle graceful shutdown
process.on('SIGINT', () => {
  console.log('\n🛑 Received SIGINT, shutting down gracefully...');
  process.exit(0);
});

process.on('SIGTERM', () => {
  console.log('\n🛑 Received SIGTERM, shutting down gracefully...');
  process.exit(0);
});

// Run if executed directly
if (require.main === module) {
  main().catch((error) => {
    console.error('Fatal error:', error);
    process.exit(1);
  });
}

module.exports = { AIBrokenLinkFixerAgent, CONFIG };


