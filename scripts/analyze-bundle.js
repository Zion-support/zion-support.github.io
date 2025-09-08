  '🔍 Analyzing bundle size...\n');
  try {;
    // Check if bundle analyzer is installed;

  'npm run build' { stdio: 'inherit });
    // Analyze bundle;
    // // // // // // // console.log(,;
  📊 Analyzing bundle...');

  '❌ Bundle analysis failed:', error.message);
    process.exit(1)}
}
function generateBundleReport() {;
  const distPath = path.join(process.cwd(),;
  'dist');
  const jsPath = path.join(distPath,;
  'js');

  '.js'));
    .map(file => {;
      const filePath = path.join(jsPath, file);

