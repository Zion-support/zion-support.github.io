#!/usr/bin/env node

/**
 * Frontend Content Advertiser AI
 * Continuously advertises ALL frontend app content across social media platforms
 * Works autonomously and as fast as possible
 */

const fs = require('fs');
const path = require('path');
const axios = require('axios');

class FrontendContentAdvertiser {
  constructor() {
    this.logFile = path.join(__dirname, 'logs', 'frontend-advertiser.log');
    this.dataDir = path.join(__dirname, 'data');
    this.pagesFile = path.join(this.dataDir, 'frontend-pages.json');
    this.postHistoryFile = path.join(this.dataDir, 'advertisement-history.json');
    this.appDir = path.join(process.cwd(), 'app');
    this.baseUrl = 'https://ziontechgroup.com';
    
    this.ensureDirectories();
    this.platforms = this.initializePlatforms();
    this.postTemplates = this.loadPostTemplates();
    this.pages = this.loadPages();
    this.postHistory = this.loadPostHistory();
    
    // Performance settings - ultra-fast mode
    this.minDelay = parseInt(process.env.MIN_DELAY_MS) || 5000; // 5 seconds minimum between posts
    this.maxDelay = parseInt(process.env.MAX_DELAY_MS) || 30000; // 30 seconds maximum
    this.batchSize = parseInt(process.env.BATCH_SIZE) || 10; // Post 10 pages per cycle
    this.parallelPosts = parseInt(process.env.PARALLEL_POSTS) || 3; // Post to 3 platforms simultaneously
  }

  ensureDirectories() {
    const dirs = [
      path.dirname(this.logFile),
      this.dataDir
    ];
    
    dirs.forEach(dir => {
      if (!fs.existsSync(dir)) {
        fs.mkdirSync(dir, { recursive: true });
      }
    });
  }

  log(message, level = 'INFO') {
    const timestamp = new Date().toISOString();
    const logEntry = `[${timestamp}] [${level}] ${message}\n`;
    console.log(`[${level}] ${message}`);
    fs.appendFileSync(this.logFile, logEntry);
  }

  initializePlatforms() {
    return {
      linkedin: {
        name: 'LinkedIn',
        apiUrl: 'https://api.linkedin.com/v2',
        enabled: !!(process.env.LINKEDIN_ACCESS_TOKEN && process.env.LINKEDIN_URN),
        maxLength: 3000,
        hashtags: ['#AI', '#Automation', '#TechInnovation', '#DigitalTransformation', '#ZionTechGroup', '#BusinessIntelligence']
      },
      instagram: {
        name: 'Instagram',
        apiUrl: 'https://graph.instagram.com',
        enabled: !!(process.env.IG_ACCESS_TOKEN && process.env.IG_USER_ID),
        maxLength: 2200,
        hashtags: ['#AI', '#Automation', '#TechInnovation', '#DigitalTransformation', '#ZionTechGroup']
      },
      twitter: {
        name: 'Twitter',
        apiUrl: 'https://api.twitter.com/2',
        enabled: !!process.env.TWITTER_ACCESS_TOKEN,
        maxLength: 280,
        hashtags: ['#AI', '#Automation', '#Tech', '#Innovation', '#ZionTech']
      }
    };
  }

  loadPostTemplates() {
    return [
      {
        template: "🚀 Discover {title} - {description} Perfect for businesses looking to {benefit}. Explore now: {url} {hashtags}",
        extractors: {
          benefit: ['transform operations', 'boost efficiency', 'scale faster', 'reduce costs', 'improve productivity']
        }
      },
      {
        template: "✨ Introducing {title} - {description} Get started today and see how AI can {benefit} your business. Learn more: {url} {hashtags}",
        extractors: {
          benefit: ['revolutionize your workflow', 'optimize your processes', 'accelerate growth', 'drive innovation']
        }
      },
      {
        template: "💡 New at Zion Tech Group: {title} - {description} Transform your business with cutting-edge AI technology. Visit: {url} {hashtags}",
        extractors: {
          benefit: ['unlock new possibilities', 'gain competitive advantage', 'achieve digital transformation']
        }
      },
      {
        template: "🎯 {title} by Zion Tech Group - {description} Experience the power of AI automation. Start your journey: {url} {hashtags}",
        extractors: {
          benefit: ['streamline operations', 'enhance decision-making', 'maximize ROI']
        }
      },
      {
        template: "🔥 {title} - {description} Join thousands of businesses already using our AI solutions. Get started: {url} {hashtags}",
        extractors: {
          benefit: ['succeed with AI', 'leverage automation', 'future-proof your business']
        }
      },
      {
        template: "⚡ Check out {title} - {description} Built with advanced AI to help you {benefit}. Explore: {url} {hashtags}",
        extractors: {
          benefit: ['succeed faster', 'work smarter', 'grow efficiently']
        }
      }
    ];
  }

  async scanFrontendPages() {
    this.log('🔍 Scanning frontend pages...');
    const pages = [];
    
    const scanDirectory = (dir, basePath = '') => {
      const entries = fs.readdirSync(dir, { withFileTypes: true });
      
      for (const entry of entries) {
        const fullPath = path.join(dir, entry.name);
        const relativePath = path.join(basePath, entry.name);
        
        if (entry.isDirectory()) {
          scanDirectory(fullPath, relativePath);
        } else if (entry.name === 'page.tsx' || entry.name === 'page.js') {
          const pageUrl = relativePath.replace(/\/page\.(tsx|js)$/, '').replace(/\\/g, '/');
          const route = pageUrl || '/';
          
          try {
            const content = fs.readFileSync(fullPath, 'utf8');
            const metadata = this.extractMetadata(content, route);
            
            if (metadata.title && metadata.description) {
              pages.push({
                route,
                url: `${this.baseUrl}${route === '/' ? '' : route}`,
                title: metadata.title,
                description: metadata.description,
                keywords: metadata.keywords || [],
                filePath: fullPath,
                lastScanned: new Date().toISOString()
              });
            }
          } catch (error) {
            this.log(`Error scanning ${fullPath}: ${error.message}`, 'WARNING');
          }
        }
      }
    };
    
    scanDirectory(this.appDir);
    
    this.log(`✅ Found ${pages.length} pages with metadata`);
    return pages;
  }

  extractMetadata(content, route) {
    const metadata = {
      title: '',
      description: '',
      keywords: []
    };
    
    // Extract metadata export - handle both TypeScript and JavaScript formats
    const metadataMatch = content.match(/export\s+(const\s+)?metadata\s*[:=]\s*({[\s\S]*?});/);
    if (metadataMatch) {
      const metadataStr = metadataMatch[2] || metadataMatch[0];
      
      // Extract title - handle single quotes, double quotes, and template literals
      const titleMatch = metadataStr.match(/title\s*[:=]\s*['"`]([^'"`]+)['"`]/);
      if (titleMatch) {
        metadata.title = titleMatch[1];
      }
      
      // Extract description
      const descMatch = metadataStr.match(/description\s*[:=]\s*['"`]([^'"`]+)['"`]/);
      if (descMatch) {
        metadata.description = descMatch[1];
      }
      
      // Extract keywords array
      const keywordsMatch = metadataStr.match(/keywords\s*[:=]\s*\[([^\]]+)\]/);
      if (keywordsMatch) {
        metadata.keywords = keywordsMatch[1].split(',').map(k => k.trim().replace(/['"`]/g, ''));
      }
    }
    
    // Fallback: Extract from h1 or page title
    if (!metadata.title) {
      const h1Match = content.match(/<h1[^>]*>([^<]+)<\/h1>/);
      if (h1Match) {
        metadata.title = h1Match[1].trim();
      } else {
        // Generate title from route
        metadata.title = route.split('/').filter(Boolean).map(part => 
          part.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ')
        ).join(' - ') || 'Zion Tech Group';
      }
    }
    
    // Fallback: Generate description
    if (!metadata.description) {
      metadata.description = `Discover ${metadata.title} - Advanced AI solutions by Zion Tech Group`;
    }
    
    return metadata;
  }

  loadPages() {
    if (fs.existsSync(this.pagesFile)) {
      try {
        const data = JSON.parse(fs.readFileSync(this.pagesFile, 'utf8'));
        // Check if pages are stale (older than 24 hours)
        const lastScan = data.lastScan ? new Date(data.lastScan) : null;
        const hoursSinceScan = lastScan ? (Date.now() - lastScan.getTime()) / (1000 * 60 * 60) : 24;
        
        if (hoursSinceScan < 24 && data.pages && data.pages.length > 0) {
          this.log(`📋 Loaded ${data.pages.length} pages from cache`);
          return data.pages;
        }
      } catch (error) {
        this.log(`Error loading pages cache: ${error.message}`, 'WARNING');
      }
    }
    
    return [];
  }

  async refreshPages() {
    const pages = await this.scanFrontendPages();
    fs.writeFileSync(this.pagesFile, JSON.stringify({
      pages,
      lastScan: new Date().toISOString(),
      totalPages: pages.length
    }, null, 2));
    this.pages = pages;
    return pages;
  }

  loadPostHistory() {
    if (fs.existsSync(this.postHistoryFile)) {
      try {
        return JSON.parse(fs.readFileSync(this.postHistoryFile, 'utf8'));
      } catch (error) {
        this.log(`Error loading post history: ${error.message}`, 'WARNING');
      }
    }
    
    return {
      posts: [],
      lastPosted: {},
      statistics: {
        totalPosts: 0,
        byPlatform: {},
        byPage: {}
      }
    };
  }

  savePostHistory() {
    fs.writeFileSync(this.postHistoryFile, JSON.stringify(this.postHistory, null, 2));
  }

  generatePostContent(page) {
    const template = this.postTemplates[Math.floor(Math.random() * this.postTemplates.length)];
    const benefit = template.extractors.benefit 
      ? template.extractors.benefit[Math.floor(Math.random() * template.extractors.benefit.length)]
      : 'transform your business';
    
    // Select platform-specific hashtags
    const enabledPlatforms = Object.keys(this.platforms).filter(p => this.platforms[p].enabled);
    const platform = enabledPlatforms[Math.floor(Math.random() * enabledPlatforms.length)];
    const hashtags = this.platforms[platform]?.hashtags.slice(0, 3).join(' ') || '#AI #Automation #TechInnovation';
    
    let content = template.template
      .replace(/{title}/g, page.title)
      .replace(/{description}/g, page.description.substring(0, 150))
      .replace(/{benefit}/g, benefit)
      .replace(/{url}/g, page.url)
      .replace(/{hashtags}/g, hashtags);
    
    // Ensure content fits platform limits
    const maxLength = this.platforms[platform]?.maxLength || 280;
    if (content.length > maxLength) {
      const overflow = content.length - maxLength + 20; // 20 chars buffer
      content = content.replace(page.description.substring(0, overflow), '');
    }
    
    return {
      content: content.trim(),
      platform,
      page: page.route
    };
  }

  async postToLinkedIn(content) {
    if (!this.platforms.linkedin.enabled) {
      return { success: false, reason: 'LinkedIn not enabled' };
    }

    try {
      const response = await axios.post(
        `${this.platforms.linkedin.apiUrl}/ugcPosts`,
        {
          author: `urn:li:person:${process.env.LINKEDIN_URN}`,
          lifecycleState: 'PUBLISHED',
          specificContent: {
            'com.linkedin.ugc.ShareContent': {
              shareCommentary: {
                text: content
              },
              shareMediaCategory: 'NONE'
            }
          },
          visibility: {
            'com.linkedin.ugc.MemberNetworkVisibility': 'PUBLIC'
          }
        },
        {
          headers: {
            'Authorization': `Bearer ${process.env.LINKEDIN_ACCESS_TOKEN}`,
            'Content-Type': 'application/json',
            'X-Restli-Protocol-Version': '2.0.0'
          },
          timeout: 10000
        }
      );

      return { success: true, postId: response.data.id };
    } catch (error) {
      this.log(`LinkedIn post failed: ${error.message}`, 'ERROR');
      return { success: false, reason: error.message };
    }
  }

  async postToInstagram(content) {
    if (!this.platforms.instagram.enabled) {
      return { success: false, reason: 'Instagram not enabled' };
    }

    try {
      // Instagram requires image, create a simple text-based image URL
      const imageUrl = `https://via.placeholder.com/1080x1080/667eea/ffffff?text=${encodeURIComponent(content.substring(0, 50))}`;
      
      const response = await axios.post(
        `${this.platforms.instagram.apiUrl}/v1.0/${process.env.IG_USER_ID}/media`,
        {
          image_url: imageUrl,
          caption: content
        },
        {
          headers: {
            'Authorization': `Bearer ${process.env.IG_ACCESS_TOKEN}`,
            'Content-Type': 'application/json'
          },
          timeout: 10000
        }
      );

      return { success: true, postId: response.data.id };
    } catch (error) {
      this.log(`Instagram post failed: ${error.message}`, 'ERROR');
      return { success: false, reason: error.message };
    }
  }

  async postToTwitter(content) {
    if (!this.platforms.twitter.enabled) {
      return { success: false, reason: 'Twitter not enabled' };
    }

    try {
      const response = await axios.post(
        `${this.platforms.twitter.apiUrl}/tweets`,
        {
          text: content
        },
        {
          headers: {
            'Authorization': `Bearer ${process.env.TWITTER_ACCESS_TOKEN}`,
            'Content-Type': 'application/json'
          },
          timeout: 10000
        }
      );

      return { success: true, postId: response.data.data?.id };
    } catch (error) {
      this.log(`Twitter post failed: ${error.message}`, 'ERROR');
      return { success: false, reason: error.message };
    }
  }

  async postToPlatform(platform, content) {
    switch (platform) {
      case 'linkedin':
        return await this.postToLinkedIn(content);
      case 'instagram':
        return await this.postToInstagram(content);
      case 'twitter':
        return await this.postToTwitter(content);
      default:
        return { success: false, reason: 'Unknown platform' };
    }
  }

  getNextPagesToAdvertise() {
    // Get pages that haven't been posted recently
    const now = Date.now();
    const minHoursBetweenPosts = 12; // Don't repost same page within 12 hours
    
    const eligiblePages = this.pages.filter(page => {
      const lastPosted = this.postHistory.lastPosted[page.route];
      if (!lastPosted) return true;
      
      const hoursSincePost = (now - new Date(lastPosted).getTime()) / (1000 * 60 * 60);
      return hoursSincePost >= minHoursBetweenPosts;
    });
    
    // If all pages were posted recently, prioritize least recently posted
    if (eligiblePages.length === 0) {
      return this.pages
        .map(page => ({
          ...page,
          lastPosted: this.postHistory.lastPosted[page.route] || 0
        }))
        .sort((a, b) => (a.lastPosted || 0) - (b.lastPosted || 0))
        .slice(0, this.batchSize);
    }
    
    // Randomize and return batch
    return eligiblePages
      .sort(() => Math.random() - 0.5)
      .slice(0, this.batchSize);
  }

  async advertisePages() {
    const pagesToAdvertise = this.getNextPagesToAdvertise();
    
    if (pagesToAdvertise.length === 0) {
      this.log('⏸️  No pages to advertise at this time');
      return;
    }
    
    this.log(`📢 Advertising ${pagesToAdvertise.length} pages...`);
    
    const enabledPlatforms = Object.keys(this.platforms).filter(p => this.platforms[p].enabled);
    
    if (enabledPlatforms.length === 0) {
      this.log('⚠️  No platforms enabled. Set environment variables for LinkedIn, Instagram, or Twitter.', 'WARNING');
      return;
    }
    
    // Process pages in parallel batches
    for (const page of pagesToAdvertise) {
      const postContent = this.generatePostContent(page);
      const platform = postContent.platform;
      
      // Post to the selected platform
      const result = await this.postToPlatform(platform, postContent.content);
      
      if (result.success) {
        // Update history
        this.postHistory.posts.push({
          page: page.route,
          platform,
          content: postContent.content,
          postId: result.postId,
          timestamp: new Date().toISOString()
        });
        
        this.postHistory.lastPosted[page.route] = new Date().toISOString();
        
        // Update statistics
        this.postHistory.statistics.totalPosts++;
        this.postHistory.statistics.byPlatform[platform] = 
          (this.postHistory.statistics.byPlatform[platform] || 0) + 1;
        this.postHistory.statistics.byPage[page.route] = 
          (this.postHistory.statistics.byPage[page.route] || 0) + 1;
        
        this.savePostHistory();
        
        this.log(`✅ Posted ${page.title} to ${platform} (${result.postId})`);
      } else {
        this.log(`❌ Failed to post ${page.title} to ${platform}: ${result.reason}`, 'ERROR');
      }
      
      // Dynamic delay based on success/failure
      const delay = result.success ? this.minDelay : this.maxDelay;
      await new Promise(resolve => setTimeout(resolve, delay));
    }
    
    this.log(`📊 Total posts: ${this.postHistory.statistics.totalPosts} | Pages advertised: ${Object.keys(this.postHistory.lastPosted).length}/${this.pages.length}`);
  }

  async startContinuousAdvertising() {
    this.log('🚀 Starting Frontend Content Advertiser AI');
    this.log(`📋 Total pages: ${this.pages.length}`);
    this.log(`⚡ Speed: ${this.minDelay}ms - ${this.maxDelay}ms between posts`);
    this.log(`📦 Batch size: ${this.batchSize} pages per cycle`);
    
    // Refresh pages on startup
    if (this.pages.length === 0) {
      this.log('🔄 Refreshing page list...');
      await this.refreshPages();
    }
    
    // Refresh pages every 6 hours
    setInterval(async () => {
      this.log('🔄 Refreshing page list...');
      await this.refreshPages();
    }, 6 * 60 * 60 * 1000);
    
    // Continuous advertising loop
    const advertiseLoop = async () => {
      try {
        await this.advertisePages();
        
        // Continue immediately (no delay between cycles for maximum speed)
        setImmediate(advertiseLoop);
      } catch (error) {
        this.log(`Error in advertising loop: ${error.message}`, 'ERROR');
        // Retry after short delay on error
        setTimeout(advertiseLoop, 5000);
      }
    };
    
    // Start the loop
    advertiseLoop();
  }
}

// CLI interface
if (require.main === module) {
  const advertiser = new FrontendContentAdvertiser();
  const command = process.argv[2] || 'start';

  switch (command) {
    case 'start':
      advertiser.startContinuousAdvertising();
      break;
    case 'scan':
      advertiser.refreshPages().then(() => {
        console.log(`Scanned ${advertiser.pages.length} pages`);
        process.exit(0);
      });
      break;
    case 'stats':
      console.log('📊 Advertisement Statistics:');
      console.log(JSON.stringify(advertiser.postHistory.statistics, null, 2));
      process.exit(0);
      break;
    default:
      console.log('Available commands:');
      console.log('  start - Start continuous advertising');
      console.log('  scan  - Scan and refresh page list');
      console.log('  stats - Show advertisement statistics');
  }
}

module.exports = FrontendContentAdvertiser;

