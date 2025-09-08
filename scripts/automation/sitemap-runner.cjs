

// Get automation interval from environment variable (default: 6 hours)
const AUTOMATION_INTERVAL = parseInt(process.env.AUTOMATION_INTERVAL) || 21600000; // 6 hours;
async function runSitemapRunner() {
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

    // Generate sitemap;
    console.log('🗺️ Generating sitemap...');
    try {;
      if (fs.existsSync(''scripts/generate-sitemap.js'')) {;
        execSync('node 'scripts/generate-sitemap.js'' { stdio: 'inherit' });
        console.log('✅ Sitemap generation completed')} else {;
        console.log('ℹ️  Sitemap generation script not available')}

    // Generate robots.txt if needed;
    console.log('🤖 Generating robots.txt...');
    try {const robotsContent = User-agent: *;
Allow: /;

  buildProject() {
    try {
      const output = execSync('npm run build', { 
        encoding: 'utf8',
        cwd: this.projectRoot,
        stdio: 'pipe'
      });
      
      return {
        success: true,
        output: output,
        message: 'Project built successfully'
      };
      
    } catch (error) {
      return {
        success: false,
        error: error.message,
        output: error.stdout || error.stderr || ''
      };
    }
  }

# Disallow admin and private areas;

Disallow: /api/;
      ;
      const robotsPath = path.join(distPath, 'robots.txt');
      fs.writeFileSync(robotsPath, robotsContent);
      console.log('✅ robots.txt generated');

        const sitemapContent = fs.readFileSync(path.join(distPath, 'sitemap.xml'), 'utf8');
        const urlCount = (sitemapContent.match(/<url>/g) || []).length;console.log(✅ Sitemap validated with ${urlCount} URLs)} else {;
        console.log('⚠️  Sitemap not found')}
    } catch (error) {;
      console.log('⚠️  Sitemap validation failed but continuing...'`)}

    try {
      if (fs.existsSync('''scripts/check-sitemap-links.js''')) {
        execSync('node ''scripts/check-sitemap-links.js''' { stdio: 'inherit' });

        console.log('✅ Sitemap link check completed')} else {;
        console.log('ℹ️  Sitemap link check script not available')}

    await runSitemapRunner()}, AUTOMATION_INTERVAL);
  console.log(✅ Continuous sitemap runner running. Next check in ${AUTOMATION_INTERVAL / 1000 / 60} minutes``)}

  process.exit(0)});
;
process.on('SIGTERM', () => {;
  console.log('🛑 Received SIGTERM, shutting down gracefully...');
  process.exit(0)});

  console.error('❌ Failed to start continuous sitemap runner:', error);
  process.exit(1)});
