const fs = require('fs');
const path = require('path');

function fixJsxFile(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    let fixed = false;

    // Fix malformed JSX structure
    if (content.includes('{/* Hero Section */}</div>')) {
      content = content.replace(/\{\/\* Hero Section \*\/\}\s*<\/div>\s*<section/g, '>{/* Hero Section */}\n        <section');
      content = content.replace(/\{\/\* Hero Section \*\/\}\s*<\/div>\s*<div/g, '>{/* Hero Section */}\n        <div');
      content = content.replace(/\{\/\* Hero Section \*\/\}\s*<\/div>\s*<Navigation/g, '>{/* Hero Section */}\n        <Navigation');
      fixed = true;
    }

    // Fix malformed h1 tags
    if (content.includes('About{' "}')) {
      content = content.replace(/<h1[^>]*>About\{\s*" "\s*\}\s*<\/h1>/g, '<h1 className='text-4xl md:text-6xl font-bold text-white mb-6'>About{" "}<span className='text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400'>Zion Tech Group</span></h1>');
      fixed = true;
    }

    // Fix malformed button tags
    if (content.includes('</button>button>')) {
      content = content.replace(/<\/button>\s*button>/g, '</button>');
      fixed = true;
    }

    // Fix malformed span tags
    if (content.includes('</span>span>')) {
      content = content.replace(/<\/span>\s*span>/g, '</span>');
      fixed = true;
    }

    // Fix missing closing tags for Helmet
    if (content.includes('<Helmet>') && !content.includes('</Helmet>')) {
      content = content.replace(/<Helmet>\s*<title>([^<]*)<\/title>\s*<meta[^>]*\/>\s*<div/g, '<Helmet>\n        <title>$1</title>\n        <meta name='description' content='AI solutions by Zion Tech Group' />\n      </Helmet>\n      <div');
      fixed = true;
    }

    // Fix malformed return statements
    if (content.includes('return (') && content.includes('<><Head>')) {
      content = content.replace(/return\s*\(\s*<>\s*<Head>/g, 'return (\n    <>\n      <Head>');
      fixed = true;
    }

    if (content.includes('return (') && content.includes('<><Helmet>')) {
      content = content.replace(/return\s*\(\s*<>\s*<Helmet>/g, 'return (\n    <>\n      <Helmet>');
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
  console.log('JSX syntax fixes completed!');
} else {
  console.log('App directory not found');
}
