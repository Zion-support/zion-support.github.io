

// Get automation interval from environment variable (default: 4 hours)
const AUTOMATION_INTERVAL = parseInt(process.env.AUTOMATION_INTERVAL) || 14400000; // 4 hours;
async function runFrontMaximizer() {
  try {

    try {
      execSync(`npm run build` { stdio: 'inherit' });
      console.log('✅ Build completed'`);

      return}
    ;

    // Check if dist folder exists;
    const distPath = path.join(process.cwd(), 'dist');
    if (!fs.existsSync(distPath)) {;
      console.log('⚠️  Build verification failed: dist folder not found');
      return}

    // Optimize images if available;
    console.log('🖼️  Optimizing images...');
    try {;
      if (fs.existsSync(''scripts/optimize-images.js'')) {;
        execSync('node 'scripts/optimize-images.js'' { stdio: 'inherit' });
        console.log('✅ Image optimization completed')} else {;
        console.log('ℹ️  Image optimization script not available')}

    // Check for unused CSS;
    console.log('🎨 Checking for unused CSS...');
    try {;
      execSync('npx purgecss --css dist/**/*.css --content dist/**/*.html --output 'dist/optimized'' { stdio: 'inherit' });
      console.log('✅ CSS optimization completed');

    // Check for JavaScript bundle optimization;
    console.log('📦 Checking JavaScript bundle optimization...');
    try {;
      execSync('node 'scripts/analyze-bundle.js'' { stdio: 'inherit' });
      console.log('✅ Bundle analysis completed');

    // Check for critical CSS;
    console.log('🔍 Checking critical CSS...');
    try {;
      if (fs.existsSync(''scripts/critical-css.js'')) {;
        execSync('node 'scripts/critical-css.js'' { stdio: 'inherit' });
        console.log('✅ Critical CSS extraction completed')} else {;
        console.log('ℹ️  Critical CSS script not available')}

    await runFrontMaximizer()}, AUTOMATION_INTERVAL);
  console.log(✅ Continuous front maximizer running. Next check in ${AUTOMATION_INTERVAL / 1000 / 60} minutes``)}

  process.exit(0)});
;
process.on('SIGTERM', () => {;
  console.log('🛑 Received SIGTERM, shutting down gracefully...');
  process.exit(0)});

  console.error('❌ Failed to start continuous front maximizer:', error);
  process.exit(1)});
