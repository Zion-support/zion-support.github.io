#!/usr/bin/env node

import fs from 'fs';
import path from 'path';
import { execSync } from 'child_process';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

console.log('🔧 Starting remaining components fix...');

// Function to fix specific files
function fixFile(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    const originalContent = content;
    
    // Fix API route
    if (filePath.includes('/api/analytics/route.ts')) {
      content = `import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  try {
    const event = await request.json();
    
    // Log the event (in production, you would send this to your analytics service)
    console.log('Analytics Event:', {
      ...event,
      timestamp: new Date().toISOString(),
      userAgent: request.headers.get('user-agent'),
      ip: request.headers.get('x-forwarded-for') || request.headers.get('x-real-ip')
    });
    
    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Analytics error:', error);
    return NextResponse.json({ error: 'Failed to process analytics event' }, { status: 500 });
  }
}`;
    }
    
    // Fix Footer component
    if (filePath.includes('/components/Footer.tsx')) {
      content = `import React from 'react';
import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">Z</span>
              </div>
              <span className="text-white font-bold text-xl">Zion Tech Group</span>
            </div>
            <p className="text-gray-300">
              Leading provider of AI and IT solutions, empowering businesses with cutting-edge technology and innovative digital transformation services.
            </p>
          </div>
          
          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link href="/about" className="text-gray-300 hover:text-white">About</Link></li>
              <li><Link href="/contact" className="text-gray-300 hover:text-white">Contact</Link></li>
              <li><Link href="/services" className="text-gray-300 hover:text-white">Services</Link></li>
            </ul>
          </div>
          
          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact</h3>
            <div className="space-y-2 text-gray-300">
              <p>Email: info@ziontechgroup.com</p>
              <p>Phone: +1 (555) 123-4567</p>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; 2024 Zion Tech Group. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
`;
    }
    
    // Fix Navigation component
    if (filePath.includes('/components/Navigation.tsx')) {
      content = `import React, { useState } from 'react';
import Link from 'next/link';

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white shadow-lg fixed w-full top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-xl">Z</span>
            </div>
            <span className="text-xl font-bold text-gray-900">Zion Tech Group</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link href="/about" className="text-gray-700 hover:text-blue-600">About</Link>
            <Link href="/services" className="text-gray-700 hover:text-blue-600">Services</Link>
            <Link href="/contact" className="text-gray-700 hover:text-blue-600">Contact</Link>
            <Link href="/contact" className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700">
              Get Started
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-700 hover:text-blue-600"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white border-t">
              <Link href="/about" className="block px-3 py-2 text-gray-700 hover:text-blue-600">About</Link>
              <Link href="/services" className="block px-3 py-2 text-gray-700 hover:text-blue-600">Services</Link>
              <Link href="/contact" className="block px-3 py-2 text-gray-700 hover:text-blue-600">Contact</Link>
              <Link href="/contact" className="block px-3 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
                Get Started
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
`;
    }
    
    // Fix error.tsx
    if (filePath.includes('/error.tsx')) {
      content = `'use client';

import React from 'react';
import Link from 'next/link';

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="max-w-md w-full bg-white shadow-lg rounded-lg p-6 text-center">
        <h1 className="text-2xl font-bold text-gray-900 mb-4">Something went wrong!</h1>
        <p className="text-gray-600 mb-6">
          We apologize for the inconvenience. Please try again or contact support if the problem persists.
        </p>
        <div className="space-x-4">
          <button
            onClick={reset}
            className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700"
          >
            Try again
          </button>
          <Link
            href="/"
            className="bg-gray-200 text-gray-800 px-4 py-2 rounded-lg hover:bg-gray-300"
          >
            Go home
          </Link>
        </div>
      </div>
    </div>
  );
}
`;
    }
    
    // Fix global-error.tsx
    if (filePath.includes('/global-error.tsx')) {
      content = `'use client';

import React from 'react';
import Link from 'next/link';

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <html>
      <body>
        <div className="min-h-screen flex items-center justify-center bg-gray-50">
          <div className="max-w-md w-full bg-white shadow-lg rounded-lg p-6 text-center">
            <h1 className="text-2xl font-bold text-gray-900 mb-4">Something went wrong!</h1>
            <p className="text-gray-600 mb-6">
              We apologize for the inconvenience. Please try again or contact support if the problem persists.
            </p>
            <div className="space-x-4">
              <button
                onClick={reset}
                className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700"
              >
                Try again
              </button>
              <Link
                href="/"
                className="bg-gray-200 text-gray-800 px-4 py-2 rounded-lg hover:bg-gray-300"
              >
                Go home
              </Link>
            </div>
          </div>
        </div>
      </body>
    </html>
  );
}
`;
    }
    
    // Only write if content changed
    if (content !== originalContent) {
      fs.writeFileSync(filePath, content, 'utf8');
      console.log(`✅ Fixed: ${filePath}`);
      return true;
    }
    
    return false;
  } catch (error) {
    console.error(`❌ Error processing ${filePath}:`, error.message);
    return false;
  }
}

// Files to fix
const filesToFix = [
  '/workspace/app/api/analytics/route.ts',
  '/workspace/app/components/Footer.tsx',
  '/workspace/app/components/Navigation.tsx',
  '/workspace/app/error.tsx',
  '/workspace/app/global-error.tsx'
];

console.log(`📁 Fixing ${filesToFix.length} files...`);

let fixedCount = 0;
for (const file of filesToFix) {
  if (fixFile(file)) {
    fixedCount++;
  }
}

console.log(`🎉 Fixed ${fixedCount} files`);

// Try to build after fixes
console.log('🔨 Attempting build...');
try {
  execSync('npm run build', { stdio: 'inherit' });
  console.log('✅ Build successful!');
} catch (error) {
  console.log('⚠️ Build still has issues, continuing with fixes...');
}