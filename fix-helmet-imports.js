import fs from 'fs';
import path from 'path';

function updateFile(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    
    // Replace react-helmet-async imports with next/head
    content = content.replace(
      /import { Helmet } from 'react-helmet-async';/g,
      "import Head from 'next/head';"
    );
    content = content.replace(
      /import { Helmet } from "react-helmet-async";/g,
      'import Head from "next/head";'
    );
    
    // Replace Helmet tags with Head tags
    content = content.replace(/<Helmet>/g, '<Head>');
    content = content.replace(/<\/Helmet>/g, '</Head>');
    
    // Write the updated content back to the file
    fs.writeFileSync(filePath, content);
    console.log(`Updated: ${filePath}`);
  } catch (error) {
    console.error(`Error updating ${filePath}:`, error.message);
  }
}

function findAndUpdateFiles(dir) {
  const files = fs.readdirSync(dir);
  
  for (const file of files) {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);
    
    if (stat.isDirectory()) {
      // Skip certain directories
      if (!['node_modules', '.next', 'dist', 'corrupted-src-backup', 'backup', 'ai-pages-disabled'].includes(file)) {
        findAndUpdateFiles(filePath);
      }
    } else if (file.endsWith('.tsx') || file.endsWith('.ts')) {
      // Check if file contains react-helmet-async
      const content = fs.readFileSync(filePath, 'utf8');
      if (content.includes('react-helmet-async') || content.includes('<Helmet>')) {
        updateFile(filePath);
      }
    }
  }
}

// Start from the app directory
findAndUpdateFiles('./app');
console.log('Helmet imports updated successfully!');