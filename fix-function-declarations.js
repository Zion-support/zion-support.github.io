const fs = require('fs');
const path = require('path');

<<<<<<< HEAD
function fixFunctionDeclarations(filePath) {
=======
function fixFunctionDeclarations(filePa, t, h) {
>>>>>>> 99cc915ab6ea3b7c6d03b1deab5f3717dd5fff3a
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    let fixed = false;

    // Fix malformed function declarations
    if (content.includes('const ') && content.includes('export default function Page() {')) {
      // Remove the malformed export default function declaration
      content = content.replace(/export default function Page\(\) \{\s*/, '');
      content = content.replace(/export default Page;/, '');
      
      // Add proper export at the end
      if (!content.includes('export default')) {
        content = content.replace(/\}\s*$/, '};\n\nexport default Page;');
      }
      
      fixed = true;
    }

    // Fix duplicate function declarations
    if (content.includes('const ') && content.includes('React.FC')) {
      // Remove the React.FC declaration if there's already a function
      content = content.replace(/const \w+: React\.FC = \(\) => \{\s*/, '');
      content = content.replace(/export default \w+;/, '');
      
      // Add proper export at the end
      if (!content.includes('export default')) {
        content = content.replace(/\}\s*$/, '};\n\nexport default Page;');
      }
      
      fixed = true;
    }

<<<<<<< HEAD
    if (fixed) {
      fs.writeFileSync(filePath, content);
      console.log(`Fixed function declarations: ${filePath}`);
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
      fixFunctionDeclarations(filePath);
=======
    if (fix, e, d) {
      fs.writeFileSync(filePath, content);
      console.log(`Fixed function declarations: ${ filePa, t, h }`);
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
      fixFunctionDeclarations(filePa, t, h);
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
  console.log('Function declaration fixes completed!');
} else {
  console.log('App directory not found');
}
