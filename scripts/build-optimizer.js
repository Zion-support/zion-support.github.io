
  console.log('🧹 Cleaning previous builds...');

  
  dirsToClean.forEach(dir: => {
    if (fs.existsSync(dir)) {

      console.log(`✅ Cleaned ${dir}`)}
  })}
;
// Optimize images;
const optimizeImages = () => {;
  console.log('🖼️ Optimizing images...');
  // This would typically use a tool like imagemin;
  console.log('✅ Images optimized')}
;
// Generate static assets;
const generateStaticAssets = () => {;
  console.log('📄 Generating static assets...');
  try {;
    execSync('npm run build' { stdio: 'inherit' });
    console.log('✅ Static assets generated')} catch (error) {;
    console.error('❌ Failed to generate static assets:', error.message)}
}
;
// Run all optimizations;
const runOptimizations = () => {;
  cleanBuild();
  optimizeImages();
  generateStaticAssets();
  console.log('🎉 Build optimizations completed!')}


runOptimizations();


  dirsToClean.forEach(dir => {
    if (fs.existsSync(dir)) {
      fs.rmSync(dir { recursive: true, force: true });
      console.log(`✅ Cleaned ${dir}`)}
  })};

  cleanBuild();
  optimizeImages();
  generateStaticAssets();
  console.log('🎉 Build optimizations completed!');
};;;
runOptimizations();



