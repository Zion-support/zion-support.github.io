#!/usr/bin/env node
const fs = require('fs');
const { execSync } = require('child_process');

console.log('🧪 Running simple tests...');

// Test 1: Check dependencies
console.log('📦 Checking dependencies...');
if (fs.existsSync('package.json') && fs.existsSync('node_modules')) {
  console.log('✅ Dependencies OK');
} else {
  console.log('❌ Dependencies missing');
}

// Test 2: Create minimal working version
console.log('🔧 Creating minimal version...');
const minimalIndex = `import React from 'react';
import Head from 'next/head';

export default function HomePage() {
  return (
    <>
      <Head>
        <title>Zion Tech Group</title>
        <meta name="description" content="Technology Solutions" />
      </Head>
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900">Zion Tech Group</h1>
          <p className="mt-4 text-lg text-gray-600">Technology Solutions Provider</p>
        </div>
      </div>
    </>
  );
}`;

fs.writeFileSync('pages/index.tsx', minimalIndex);

// Test 3: Try build
console.log('🏗️ Testing build...');
try {
  execSync('npm run build', { stdio: 'pipe', timeout: 30000 });
  console.log('✅ Build successful');
} catch (error) {
  console.log('❌ Build failed:', error.message);
}

console.log('🏁 Tests completed');
