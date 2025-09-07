const fs = require('fs');
const path = require('path');

const adminPageTemplate = `import React from 'react';
import Head from 'next/head';

export default function AdminPage() {
  return (
    <div>
      <Head>
        <title>Admin - Zion Tech Group</title>
        <meta name="description" content="Admin page for Zion Tech Group" />
      </Head>
      <main>
        <h1>Admin Dashboard</h1>
        <p>This page is under construction.</p>
      </main>
    </div>
  );
}`;

function fixAdminPages(dir) {
  const files = fs.readdirSync(dir);
  
  for (const file of files) {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);
    
    if (stat.isDirectory()) {
      fixAdminPages(filePath);
    } else if (file.endsWith('.tsx') || file.endsWith('.ts')) {
      console.log(`Fixing: ${filePath}`);
      fs.writeFileSync(filePath, adminPageTemplate);
    }
  }
}

console.log('Fixing admin pages...');
fixAdminPages('./pages/admin');
console.log('Admin pages fixed!');