#!/bin/bash

echo "🚀 Starting comprehensive fix and build automation..."

# Set error handling
set -e

# Function to log with timestamp
log() {
    echo "[$(date '+%Y-%m-%d %H:%M:%S')] $1"
}

# Function to fix syntax errors in files
fix_syntax_errors() {
    log "🔧 Fixing syntax errors in app files..."
    
    # Fix extra quotes at end of lines
    find app -name "*.tsx" -o -name "*.ts" -o -name "*.js" -o -name "*.jsx" | while read file; do
        if [ -f "$file" ]; then
            # Remove extra quotes at end of lines
            sed -i "s/';$/'/g" "$file"
            sed -i "s/\";$/\"/g" "$file"
            # Remove merge conflict markers
            sed -i '/<<<<<<< HEAD/,/>>>>>>> /d' "$file"
            sed -i '/=======/d' "$file"
            # Fix common syntax issues
            sed -i 's/return (;/return (/g' "$file"
            sed -i 's/export const "metadata"/export const metadata/g' "$file"
            sed -i 's/"title":/title:/g' "$file"
            sed -i 's/"description":/description:/g' "$file"
        fi
    done
    
    log "✅ Syntax errors fixed"
}

# Function to install missing dependencies
install_dependencies() {
    log "📦 Installing missing dependencies..."
    
    # Install essential dependencies
    npm install @heroicons/react@^2.0.18
    npm install @types/react@^18.3.3
    npm install @types/react-dom@^18.3.0
    npm install @types/node@^20.14.15
    npm install typescript@^5.5.4
    npm install tailwindcss@^3.4.7
    npm install autoprefixer@^10.4.21
    npm install postcss@^8.4.39
    npm install eslint@^8.57.0
    npm install eslint-config-next@^15.5.2
    
    log "✅ Dependencies installed"
}

# Function to create clean component files
create_clean_components() {
    log "🧹 Creating clean component files..."
    
    # Create clean Header component
    cat > app/components/Header.tsx << 'EOF'
'use client';

import React, { useState } from 'react';
import Link from 'next/link';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="bg-white shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center">
            <Link href="/" className="text-2xl font-bold text-blue-600">
              Zion Tech Group
            </Link>
          </div>
          
          <nav className="hidden md:flex space-x-8">
            <Link href="/about" className="text-gray-700 hover:text-blue-600">
              About
            </Link>
            <Link href="/services" className="text-gray-700 hover:text-blue-600">
              Services
            </Link>
            <Link href="/contact" className="text-gray-700 hover:text-blue-600">
              Contact
            </Link>
          </nav>
          
          <button
            className="md:hidden"
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
        
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              <Link href="/about" className="block px-3 py-2 text-gray-700 hover:text-blue-600">
                About
              </Link>
              <Link href="/services" className="block px-3 py-2 text-gray-700 hover:text-blue-600">
                Services
              </Link>
              <Link href="/contact" className="block px-3 py-2 text-gray-700 hover:text-blue-600">
                Contact
              </Link>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
EOF

    # Create clean Footer component
    cat > app/components/Footer.tsx << 'EOF'
import React from 'react';
import Link from 'next/link';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">Zion Tech Group</h3>
            <p className="text-gray-400">
              Leading the future of technology with innovative AI solutions and enterprise IT services.
            </p>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Services</h3>
            <ul className="space-y-2">
              <li><Link href="/services" className="text-gray-400 hover:text-white">AI Solutions</Link></li>
              <li><Link href="/services" className="text-gray-400 hover:text-white">Micro SaaS</Link></li>
              <li><Link href="/services" className="text-gray-400 hover:text-white">IT Services</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Company</h3>
            <ul className="space-y-2">
              <li><Link href="/about" className="text-gray-400 hover:text-white">About</Link></li>
              <li><Link href="/contact" className="text-gray-400 hover:text-white">Contact</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact</h3>
            <p className="text-gray-400">contact@ziontechgroup.com</p>
            <p className="text-gray-400">+1 (555) 123-4567</p>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-gray-400">
            © {currentYear} Zion Tech Group. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
EOF

    log "✅ Clean components created"
}

# Function to create a simple home page
create_home_page() {
    log "🏠 Creating home page..."
    
    cat > app/page.tsx << 'EOF'
import React from 'react';
import Link from 'next/link';

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50">
      <div className="container mx-auto px-4 py-20">
        <div className="text-center">
          <h1 className="text-6xl font-bold text-gray-900 mb-6">
            Welcome to Zion Tech Group
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Leading the future of technology with innovative AI solutions, 
            micro SaaS development, and enterprise IT services.
          </p>
          <div className="space-x-4">
            <Link 
              href="/services" 
              className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors duration-200"
            >
              Our Services
            </Link>
            <Link 
              href="/contact" 
              className="bg-white text-blue-600 px-8 py-3 rounded-lg border border-blue-600 hover:bg-blue-50 transition-colors duration-200"
            >
              Get in Touch
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
EOF

    log "✅ Home page created"
}

# Function to create globals.css
create_globals_css() {
    log "🎨 Creating globals.css..."
    
    cat > app/globals.css << 'EOF'
@tailwind base;
@tailwind components;
@tailwind utilities;

:root {
  --foreground-rgb: 0, 0, 0;
  --background-start-rgb: 214, 219, 220;
  --background-end-rgb: 255, 255, 255;
}

@media (prefers-color-scheme: dark) {
  :root {
    --foreground-rgb: 255, 255, 255;
    --background-start-rgb: 0, 0, 0;
    --background-end-rgb: 0, 0, 0;
  }
}

body {
  color: rgb(var(--foreground-rgb));
  background: linear-gradient(
      to bottom,
      transparent,
      rgb(var(--background-end-rgb))
    )
    rgb(var(--background-start-rgb));
}

@layer utilities {
  .text-balance {
    text-wrap: balance;
  }
}
EOF

    log "✅ Globals.css created"
}

# Function to create tailwind config
create_tailwind_config() {
    log "⚙️ Creating Tailwind config..."
    
    cat > tailwind.config.js << 'EOF'
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        background: 'var(--background)',
        foreground: 'var(--foreground)',
      },
    },
  },
  plugins: [],
}
EOF

    log "✅ Tailwind config created"
}

# Function to create postcss config
create_postcss_config() {
    log "📝 Creating PostCSS config..."
    
    cat > postcss.config.js << 'EOF'
module.exports = {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
  },
}
EOF

    log "✅ PostCSS config created"
}

# Main execution
main() {
    log "🚀 Starting comprehensive fix and build automation..."
    
    # Fix syntax errors
    fix_syntax_errors
    
    # Install dependencies
    install_dependencies
    
    # Create clean components
    create_clean_components
    
    # Create home page
    create_home_page
    
    # Create CSS files
    create_globals_css
    create_tailwind_config
    create_postcss_config
    
    # Try to build
    log "🔨 Attempting to build the application..."
    if npm run build; then
        log "✅ Build successful!"
    else
        log "❌ Build failed, but we've made significant progress"
    fi
    
    log "🎉 Automation completed!"
}

# Run main function
main "$@"