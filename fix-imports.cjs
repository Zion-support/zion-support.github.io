#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const glob = require('glob');

// Find all TypeScript/JavaScript files in the app directory
const files = glob.sync('app/**/*.{ts,tsx,js,jsx}', { cwd: __dirname });

console.log(`Found ${files.length} files to process...`);

let fixedCount = 0;

files.forEach(file => {
  const filePath = path.join(__dirname, file);
  let content = fs.readFileSync(filePath, 'utf8');
  let modified = false;

  // Fix Next.js imports
  if (content.includes("import Link from 'next/link'")) {
    content = content.replace("import Link from 'next/link'", "import { Link } from 'react-router-dom'");
    modified = true;
  }

  if (content.includes("import { Link } from 'next/link'")) {
    content = content.replace("import { Link } from 'next/link'", "import { Link } from 'react-router-dom'");
    modified = true;
  }

  // Fix SEO imports
  if (content.includes("import SEO from '../../../components/SEO'")) {
    content = content.replace("import SEO from '../../../components/SEO'", "import SEO from '../../components/SEO'");
    modified = true;
  }

  if (content.includes("import SEO from '../../components/SEO'")) {
    content = content.replace("import SEO from '../../components/SEO'", "import SEO from '../../components/SEO'");
    modified = true;
  }

  if (content.includes("import SEO from '../components/SEO'")) {
    content = content.replace("import SEO from '../components/SEO'", "import SEO from '../../components/SEO'");
    modified = true;
  }

  // Fix Next.js Image imports
  if (content.includes("import Image from 'next/image'")) {
    content = content.replace("import Image from 'next/image'", "import { Image } from 'react-bootstrap'");
    modified = true;
  }

  // Fix Next.js Head imports
  if (content.includes("import Head from 'next/head'")) {
    content = content.replace("import Head from 'next/head'", "import { Helmet } from 'react-helmet-async'");
    modified = true;
  }

  if (modified) {
    fs.writeFileSync(filePath, content);
    console.log(`✅ Fixed imports in: ${file}`);
    fixedCount++;
  }
});

console.log(`\n🎉 Fixed imports in ${fixedCount} files!`);