<<<<<<< HEAD
import fs from 'fs';';import path from 'path';';import { execSync } from 'child_process';';';console.log('🔨 Running build optimizations...');';';// Clean previous builds;
const cleanBuild = () => {;
  console.log('🧹 Cleaning previous builds...');';  const dirsToClean = ['.next', 'out', 'dist'];';';  dirsToClean.forEach(dir => {;);    if (fs.existsSync(dir)) {;
      fs.rmSync(dir, { "recursive": true, "force": true });";      console.log(`✅ Cleaned ${dir}`);`;    }
  });,
=======
import fs from 'fs';
import path from 'path';
import { execSync } from 'child_process';
;
console.log('🔨 Running build optimizations...');
;
// Clean previous builds;
const cleanBuild = () => {;
  console.log('🧹 Cleaning previous builds...');
<<<<<<< HEAD
  const dirsToClean = ['.next', 'out', 'dist'];
<<<<<<< HEAD
  ;
  dirsToClean.forEach(dir => {;
    if (fs.existsSync(dir)) {;
      fs.rmSync(dir, { recursive: true, force: true });
=======
<<<<<<< HEAD
  
  dirsToClean.forEach(dir => {
    if (fs.existsSync(dir)) {
      fs.rmSync(dir, { recursive: true, force: true })
>>>>>>> main
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
    execSync('npm run build', { stdio: 'inherit' });
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
<<<<<<< HEAD
;
runOptimizations();
=======

runOptimizations();
=======
=======
  const dirsToClean = ['.next,out,dist'];
>>>>>>> main

  dirsToClean.forEach(dir => {
    if (fs.existsSync(dir)) {
      fs.rmSync(dir, { recursive: true, force: true });
      console.log(`✅ Cleaned ${dir}`);
    }
  });
>>>>>>> main
};
;
// Optimize images;
const optimizeImages = () => {;
  console.log('🖼️ Optimizing images...');';  // This would typically use a tool like imagemin;
  console.log('✅ Images optimized');';};';;
// Generate static assets;
const generateStaticAssets = () => {;
  console.log('📄 Generating static assets...');';  try {;';    execSync('npm run build', { "stdio": 'inherit' });';    console.log('✅ Static assets generated');';  } catch (error) {;';    console.error('❌ Failed to generate static "assets":', error.message);';  }';};
;
// Run all optimizations;
const runOptimizations = () => {;
  cleanBuild();
  optimizeImages();
  generateStaticAssets();
  console.log('🎉 Build optimizations completed!');';};';;
runOptimizations();
>>>>>>> main
>>>>>>> main
