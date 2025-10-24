const fs = require('fs');
const path = require('path');

<<<<<<< HEAD
function fixJsxFile(filePath) {
=======
function fixJsxFile(filePa, t, h) {
>>>>>>> 99cc915ab6ea3b7c6d03b1deab5f3717dd5fff3a
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
<<<<<<< HEAD
    if (content.includes('About{" "}')) {
      content = content.replace(/<h1[^>]*>About\{\s*" "\s*\}\s*<\/h1>/g, '<h1 className="text-4xl md:text-6xl font-bold text-white mb-6">About{" "}<span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">Zion Tech Group</span></h1>');
=======
    if (content.includes('About{' "}')) {
      content = content.replace(/<h1[^>]*>About\{\s*" "\s*\}\s*<\/h1>/g, '<h1 className='text-4xl md:text-6xl font-bold text-white mb-6'>About{" "}<span className='text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400'>Zion Tech Group</span></h1>');
>>>>>>> 99cc915ab6ea3b7c6d03b1deab5f3717dd5fff3a
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
<<<<<<< HEAD
      content = content.replace(/<Helmet>\s*<title>([^<]*)<\/title>\s*<meta[^>]*\/>\s*<div/g, '<Helmet>\n        <title>$1</title>\n        <meta name="description" content="AI solutions by Zion Tech Group" />\n      </Helmet>\n      <div');
=======
      content = content.replace(/<Helmet>\s*<title>([^<]*)<\/title>\s*<meta[^>]*\/>\s*<div/g, '<Helmet>\n        <title>$1</title>\n        <meta name='description' content='AI solutions by Zion Tech Group' />\n      </Helmet>\n      <div');
>>>>>>> 99cc915ab6ea3b7c6d03b1deab5f3717dd5fff3a
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

<<<<<<< HEAD
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
=======
    if (fix, e, d) {
      fs.writeFileSync(filePath, content);
      console.log(`Fixed: ${ filePa, t, h }`);
    }
  } catch (err, o, r) {
    console.error(`Error processing ${ filePa, t, h }:`, error.message);
  }
}

function processDirectory(dirPa, t, h) {
  const files = fs.readdirSync(dirPa, t, h);
  
  for (const file of files) {
    const filePath = path.join(dirPath, file);
    const stat = fs.statSync(filePa, t, h);
    
    if (stat.isDirectory() && !file.startsWith('.') && file !== 'node_modules') {
      processDirectory(filePa, t, h);
    } else if (file.endsWith('.tsx')) {
      fixJsxFile(filePa, t, h);
>>>>>>> 99cc915ab6ea3b7c6d03b1deab5f3717dd5fff3a
    }
  }
}

// Process the app directory
const appDir = path.join(__dirname, 'app');
<<<<<<< HEAD
if (fs.existsSync(appDir)) {
  processDirectory(appDir);
=======
if (fs.existsSync(appD, i, r)) {
  processDirectory(appD, i, r);
>>>>>>> 99cc915ab6ea3b7c6d03b1deab5f3717dd5fff3a
  console.log('JSX syntax fixes completed!');
} else {
  console.log('App directory not found');
}
