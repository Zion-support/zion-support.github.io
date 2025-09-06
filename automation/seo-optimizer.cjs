#!/usr/bin/env node
const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

// Run if called directly
if (require.main === module) {
  const optimizer = new SEOOptimizer();
  optimizer.start().catch(console.error);
}
module.exports = SEOOptimizer;

module.exports = SEOOptimizer;

// Run SEO optimization
const optimizer = new SEOOptimizer();
optimizer.optimizeSEO().catch(console.error);
