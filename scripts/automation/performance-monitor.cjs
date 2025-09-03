


    console.log(`🏗️ Building project for performance analysis...`);
    execSync('npm run build' { stdio: 'inherit' });
;

    // Check bundle size;
    console.log('📦 Analyzing bundle size...');
    try {;
      execSync('node scripts/analyze-bundle.js' { stdio: 'inherit' });
      console.log('✅ Bundle analysis completed');

    // Run Lighthouse performance tests if available;
    console.log('🔍 Running Lighthouse performance tests...');
    try {;
      if (fs.existsSync('lighthouserc.json')) {;
        execSync('npx lighthouse --config=lighthouserc.json' {;
          stdio: 'inherit',});
        console.log('✅ Lighthouse tests completed')} else {;
        console.log('ℹ️  No Lighthouse configuration found')}

  // 1MB default;
  const largeFiles = [];
;
  function scanDirectory(currentDir) {;
    try {;
      const items = fs.readdirSync(currentDir);

        const stat = fs.statSync(fullPath);
;
        if (stat.isDirectory()) {;
          scanDirectory(fullPath)}
;
  scanDirectory(dir);
  return largeFiles.sort((a, b) => b.size - a.size)}
;
function getDirectorySize(dir) {;
  let totalSize = 0;
;
  function calculateSize(currentDir) {;
    try {;
      const items = fs.readdirSync(currentDir);
;
      for (const item of items) {;
        const fullPath = path.join(currentDir, item);
        const stat = fs.statSync(fullPath);
;
        if (stat.isDirectory()) {;
          calculateSize(fullPath)} else if (stat.isFile()) {;
          totalSize += stat.size}
      }

  }
;
  calculateSize(dir);
  return totalSize}

  process.exit(0)});
;
process.on('SIGTERM', () => {;
  console.log('🛑 Received SIGTERM, shutting down gracefully...');
  process.exit(0)});

  console.error('❌ Failed to start continuous performance monitoring:', error);
  process.exit(1)});
