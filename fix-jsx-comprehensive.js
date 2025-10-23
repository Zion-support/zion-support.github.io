const fs = require('fs');
const path = require('path');

function fixJsxFile(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    let fixed = false;

    // Fix malformed JSX structure with >{/* Hero Section */}
    if (content.includes('>{/* Hero Section */}')) {
      content = content.replace(/>\{\/\* Hero Section \*\/\}/g, '>{/* Hero Section */}');
      content = content.replace(/<div[^>]*>\{\/\* Hero Section \*\/\}/g, '<div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">');
      fixed = true;
    }

    // Fix malformed closing tags
    content = content.replace(/<\/h1>h1>/g, '</h1>');
    content = content.replace(/<\/p>p>/g, '</p>');
    content = content.replace(/<\/button>button>/g, '</button>');
    content = content.replace(/<\/span>span>/g, '</span>');
    content = content.replace(/<\/div>div>/g, '</div>');

    // Fix malformed JSX expressions
    content = content.replace(/\{features\.map\(\(feature, index\) => \(<\/div>/g, '{features.map((feature, index) => (');
    content = content.replace(/\{benefits\.map\(\(benefit, index\) => \(<\/div>/g, '{benefits.map((benefit, index) => (');
    content = content.replace(/\{team\.map\(\(member, index\) => \(<\/div>/g, '{team.map((member, index) => (');

    // Fix malformed return statements
    if (content.includes('return (') && content.includes('<><Head>')) {
      content = content.replace(/return\s*\(\s*<>\s*<Head>/g, 'return (\n    <>\n      <Head>');
      fixed = true;
    }

    if (content.includes('return (') && content.includes('<><Helmet>')) {
      content = content.replace(/return\s*\(\s*<>\s*<Helmet>/g, 'return (\n    <>\n      <Helmet>');
      fixed = true;
    }

    // Fix missing function declarations
    if (content.includes('const features = [') && !content.includes('export default function')) {
      content = content.replace(/const features = \[/, 'export default function Page() {\n  const features = [');
      content = content.replace(/export default Page;/, '}');
      fixed = true;
    }

    if (content.includes('const benefits = [') && !content.includes('export default function')) {
      content = content.replace(/const benefits = \[/, 'export default function Page() {\n  const benefits = [');
      content = content.replace(/export default Page;/, '}');
      fixed = true;
    }

    if (fixed) {
      fs.writeFileSync(filePath, content);
      console.log(`Fixed: ${filePath}`);
    }
  } catch (error) {
    console.error(`Error processing ${filePath}:`, error.message);
  }
}

function processDirectory(dirPath) {
  const files = fs.readdirSync(dirPath);
  
  for (const file of files) {
    const filePath = path.join(dirPath, file);
    const stat = fs.statSync(filePath);
    
    if (stat.isDirectory() && !file.startsWith('.') && file !== 'node_modules') {
      processDirectory(filePath);
    } else if (file.endsWith('.tsx')) {
      fixJsxFile(filePath);
    }
  }
}

// Process the app directory
const appDir = path.join(__dirname, 'app');
if (fs.existsSync(appDir)) {
  processDirectory(appDir);
  console.log('Comprehensive JSX fixes completed!');
} else {
  console.log('App directory not found');
}
