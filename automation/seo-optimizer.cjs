#!/usr/bin/env node
=======
>>>>>>> ed23a41deefdd5db733dc5d1577e62259b173127
const { execSync } = require('child_process');
>>>>>>> origin/main
const fs = require('fs');
const path = require('path');

// Run if called directly
if (require.main === module) {
  const optimizer = new SEOOptimizer();
  optimizer.start().catch(console.error);
}

module.exports = SEOOptimizer;
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-c7b5
=======

// Run SEO optimization
const optimizer = new SEOOptimizer();
optimizer.optimizeSEO().catch(console.error);
>>>>>>> origin/main
=======
>>>>>>> origin/automation-improvements-final
>>>>>>> ed23a41deefdd5db733dc5d1577e62259b173127
