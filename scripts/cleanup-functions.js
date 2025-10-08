#!/usr/bin/env node

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Essential functions that should be kept
const essentialFunctions = [
  'test-function.js', // Keep for testing
  'scheduled-nudges.ts', // Keep for scheduled tasks
];

// Functions that are clearly test/development and can be removed
const functionsToRemove = [
  // AI and automation functions (most are test/development)
  'ai-changelog-',
  'ai-trends-',
  'ai-innovator',
  'ai-issue-labeler',
  'ai-alt-text-',
  'ai_changelog_',
  'ai_trends_',
  
  // Autonomous functions (test/development)
  'autonomous-',
  'autonomous_',
  
  // Audit and analysis functions (test/development)
  'a11y-',
  'a11y_',
  'accessibility-',
  'audit-',
  'audit_',
  'canonical-',
  'canonical_',
  'code-',
  'code_',
  'component-',
  'component_',
  'content-',
  'content_',
  'docs-',
  'docs_',
  'performance-',
  'performance_',
  'seo-',
  'seo_',
  'security-',
  'security_',
  
  // Cron functions (test/development)
  'cron-',
  
  // Frontend functions (test/development)
  'front-',
  'front_',
  'frontend-',
  'frontpage-',
  'frontpage_',
  'home-',
  'home_',
  'homepage-',
  
  // Optimization functions (test/development)
  'optimize-',
  'optimize_',
  'perf-',
  'perf_',
  'ultrafast-',
  'ultrafast_',
  'hyper-',
  'hyper_',
  'fast-',
  'fast_',
  
  // Report functions (test/development)
  'report-',
  'report_',
  'runner-',
  'runner_',
  'scheduler-',
  'scheduler_',
  
  // Other test/development functions
  'auto-',
  'auto_',
  'adaptive-',
  'adaptive_',
  'cache-',
  'edge-',
  'guardian-',
  'innovation-',
  'innovation_',
  'knowledge-',
  'knowledge_',
  'link-',
  'media-',
  'meta-',
  'newsroom-',
  'newsroom_',
  'og-',
  'og_',
  'orphan-',
  'revenue-',
  'revenue_',
  'roadmap-',
  'roadmap_',
  'robots-',
  'robots_',
  'sitemap-',
  'sitemap_',
  'smart-',
  'stale-',
  'stale_',
  'structured-',
  'tech-',
  'todo-',
  'todo_',
  'topic-',
  'topic_',
  'topics-',
  'topics_',
  'trigger-',
  'trigger_',
  'ui-',
  'unused-',
  'unused_',
  'user-',
  'ux-',
  'venture-',
  'venture_',
];

const functionsDir = path.join(process.cwd(), 'netlify', 'functions');

function shouldRemoveFunction(filename) {
  // Keep essential functions
  if (essentialFunctions.includes(filename)) {
    return false;
  }
  
  // Remove functions that match any of the patterns
  return functionsToRemove.some(pattern => filename.includes(pattern));
}

function cleanupFunctions() {
  if (!fs.existsSync(functionsDir)) {
    console.log('Functions directory does not exist');
    return;
  }

  const files = fs.readdirSync(functionsDir);
  let removedCount = 0;
  let keptCount = 0;

  console.log('Starting function cleanup...');
  console.log(`Found ${files.length} functions`);

  files.forEach(file => {
    if (file.endsWith('.js') || file.endsWith('.ts')) {
      if (shouldRemoveFunction(file)) {
        const filePath = path.join(functionsDir, file);
        try {
          fs.unlinkSync(filePath);
          console.log(`Removed: ${file}`);
          removedCount++;
        } catch (error) {
          console.error(`Error removing ${file}:`, error.message);
        }
      } else {
        console.log(`Kept: ${file}`);
        keptCount++;
      }
    }
  });

  console.log(`\nCleanup complete:`);
  console.log(`- Removed: ${removedCount} functions`);
  console.log(`- Kept: ${keptCount} functions`);
}

// Run the cleanup
cleanupFunctions();