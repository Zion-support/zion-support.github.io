<<<<<<< HEAD
import React from 'react';
import Head from 'next/head';
<<<<<<< HEAD
import Link from 'next/link';

export default function ComponentLibraryPage() {
  return (
    <>
      <Head>
        <title>Component Library — Zion Tech Group</title>
        <meta name="description" content="Reusable UI components and design system for building modern web applications with Zion Tech Group." />
        <meta property="og:title" content="Component Library — Zion Tech Group" />
        <meta property="og:description" content="Reusable UI components and design system for building modern web applications with Zion Tech Group." />
      </Head>
      
      <div className="min-h-screen bg-gradient-to-br from-indigo-950 via-purple-950 to-slate-950 text-white">
        <main className="container mx-auto px-6 py-12">
          {/* Header */}
          <div className="mb-12">
            <Link href="/" className="inline-flex items-center text-cyan-400 hover:text-cyan-300 mb-8">
              <span className="mr-2">←</span>
              Back to Home
            </Link>
            <h1 className="text-4xl font-bold mb-4">Component Library</h1>
            <p className="text-xl text-white/80">Build beautiful, consistent interfaces with our reusable UI components</p>
          </div>

          {/* Component Library Overview */}
          <section className="mb-12">
            <div className="bg-gradient-to-r from-purple-500/10 to-fuchsia-500/10 border border-purple-400/30 rounded-xl p-8">
              <h2 className="text-2xl font-semibold mb-4 text-purple-400">Design System Overview</h2>
              <p className="text-white/80 mb-4">
                Our component library provides a comprehensive set of reusable UI components built with modern design principles, 
                accessibility in mind, and consistent styling. Each component is thoroughly tested, documented, and optimized for performance.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mt-6">
                <div className="text-center">
                  <div className="text-2xl font-bold text-purple-400">50+</div>
                  <div className="text-white/70">Components</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-fuchsia-400">100%</div>
                  <div className="text-white/70">Accessible</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-cyan-400">TypeScript</div>
                  <div className="text-white/70">Supported</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-green-400">Dark/Light</div>
                  <div className="text-white/70">Themes</div>
                </div>
              </div>
            </div>
          </section>

          {/* Component Categories */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold mb-8 text-center">Component Categories</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="bg-white/5 border border-white/10 rounded-xl p-6 hover:border-purple-400/30 transition-all">
                <div className="w-12 h-12 bg-purple-400/20 rounded-lg flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 10h16M4 14h16M4 18h16" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-2">Layout Components</h3>
                <p className="text-white/70">Grid systems, containers, and layout utilities for responsive design.</p>
                <div className="mt-4">
                  <span className="inline-block bg-purple-400/20 text-purple-400 text-xs px-2 py-1 rounded mr-2">Grid</span>
                  <span className="inline-block bg-purple-400/20 text-purple-400 text-xs px-2 py-1 rounded mr-2">Container</span>
                  <span className="inline-block bg-purple-400/20 text-purple-400 text-xs px-2 py-1 rounded">Stack</span>
                </div>
              </div>

              <div className="bg-white/5 border border-white/10 rounded-xl p-6 hover:border-fuchsia-400/30 transition-all">
                <div className="w-12 h-12 bg-fuchsia-400/20 rounded-lg flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-fuchsia-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 15l-2 5L9 9l11 4-5 2zm0 0l5 5M7.188 2.239l.777 2.389M2.05 4.282l2.393-.777M13.95 4.282l-2.393-.777M7.172 2.239l-.777-2.389M4.282 7.172l2.389.777M2.05 13.95l-.777-2.393M4.282 2.05l2.393.777M13.95 2.05l2.393.777M7.172 7.172l-.777 2.389" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-2">Interactive Elements</h3>
                <p className="text-white/70">Buttons, forms, modals, and other interactive components.</p>
                <div className="mt-4">
                  <span className="inline-block bg-fuchsia-400/20 text-fuchsia-400 text-xs px-2 py-1 rounded mr-2">Button</span>
                  <span className="inline-block bg-fuchsia-400/20 text-fuchsia-400 text-xs px-2 py-1 rounded mr-2">Form</span>
                  <span className="inline-block bg-fuchsia-400/20 text-fuchsia-400 text-xs px-2 py-1 rounded">Modal</span>
                </div>
              </div>

              <div className="bg-white/5 border border-white/10 rounded-xl p-6 hover:border-cyan-400/30 transition-all">
                <div className="w-12 h-12 bg-cyan-400/20 rounded-lg flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-2">Data Display</h3>
                <p className="text-white/70">Tables, cards, lists, and data visualization components.</p>
                <div className="mt-4">
                  <span className="inline-block bg-cyan-400/20 text-cyan-400 text-xs px-2 py-1 rounded mr-2">Table</span>
                  <span className="inline-block bg-cyan-400/20 text-cyan-400 text-xs px-2 py-1 rounded mr-2">Card</span>
                  <span className="inline-block bg-cyan-400/20 text-cyan-400 text-xs px-2 py-1 rounded">Chart</span>
                </div>
              </div>

              <div className="bg-white/5 border border-white/10 rounded-xl p-6 hover:border-green-400/30 transition-all">
                <div className="w-12 h-12 bg-green-400/20 rounded-lg flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-2">Feedback Components</h3>
                <p className="text-white/70">Alerts, notifications, progress indicators, and status messages.</p>
                <div className="mt-4">
                  <span className="inline-block bg-green-400/20 text-green-400 text-xs px-2 py-1 rounded mr-2">Alert</span>
                  <span className="inline-block bg-green-400/20 text-green-400 text-xs px-2 py-1 rounded mr-2">Toast</span>
                  <span className="inline-block bg-green-400/20 text-green-400 text-xs px-2 py-1 rounded">Progress</span>
                </div>
              </div>

              <div className="bg-white/5 border border-white/10 rounded-xl p-6 hover:border-yellow-400/30 transition-all">
                <div className="w-12 h-12 bg-yellow-400/20 rounded-lg flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-yellow-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485-7.071 7.071a2 2 0 01-2.828 0L2.343 15.343a2 2 0 010-2.828l5.657-5.657z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-2">Navigation</h3>
                <p className="text-white/70">Menus, breadcrumbs, pagination, and navigation components.</p>
                <div className="mt-4">
                  <span className="inline-block bg-yellow-400/20 text-yellow-400 text-xs px-2 py-1 rounded mr-2">Menu</span>
                  <span className="inline-block bg-yellow-400/20 text-yellow-400 text-xs px-2 py-1 rounded mr-2">Breadcrumb</span>
                  <span className="inline-block bg-yellow-400/20 text-yellow-400 text-xs px-2 py-1 rounded">Pagination</span>
                </div>
              </div>

              <div className="bg-white/5 border border-white/10 rounded-xl p-6 hover:border-red-400/30 transition-all">
                <div className="w-12 h-12 bg-red-400/20 rounded-lg flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-red-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 100 4m0-4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 100 4m0-4v2m0-6V4" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-2">Utility Components</h3>
                <p className="text-white/70">Spinners, skeletons, dividers, and other utility components.</p>
                <div className="mt-4">
                  <span className="inline-block bg-red-400/20 text-red-400 text-xs px-2 py-1 rounded mr-2">Spinner</span>
                  <span className="inline-block bg-red-400/20 text-red-400 text-xs px-2 py-1 rounded mr-2">Skeleton</span>
                  <span className="inline-block bg-red-400/20 text-red-400 text-xs px-2 py-1 rounded">Divider</span>
                </div>
              </div>
            </div>
          </section>

          {/* Component Examples */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold mb-8 text-center">Component Examples</h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div className="bg-white/5 border border-white/10 rounded-xl p-6">
                <h3 className="text-xl font-semibold mb-4 text-purple-400">Button Components</h3>
                <div className="space-y-4">
                  <button className="px-6 py-3 bg-cyan-400 hover:bg-cyan-300 text-black font-semibold rounded-lg transition-all duration-200 hover:scale-105">
                    Primary Button
                  </button>
                  <button className="px-6 py-3 border border-fuchsia-400 text-fuchsia-400 hover:bg-fuchsia-400 hover:text-black font-semibold rounded-lg transition-all duration-200">
                    Secondary Button
                  </button>
                  <button className="px-6 py-3 bg-gradient-to-r from-purple-400 to-fuchsia-400 text-white font-semibold rounded-lg transition-all duration-200 hover:from-purple-500 hover:to-fuchsia-500">
                    Gradient Button
                  </button>
                </div>
              </div>

              <div className="bg-white/5 border border-white/10 rounded-xl p-6">
                <h3 className="text-xl font-semibold mb-4 text-fuchsia-400">Card Components</h3>
                <div className="space-y-4">
                  <div className="bg-white/10 border border-white/20 rounded-lg p-4 hover:border-cyan-400/30 transition-all">
                    <h4 className="font-semibold mb-2">Feature Card</h4>
                    <p className="text-white/70 text-sm">This is a sample feature card with hover effects and proper spacing.</p>
                  </div>
                  <div className="bg-gradient-to-r from-blue-500/10 to-cyan-500/10 border border-blue-400/30 rounded-lg p-4">
                    <h4 className="font-semibold mb-2 text-blue-400">Gradient Card</h4>
                    <p className="text-white/70 text-sm">A card with gradient background and colored accent elements.</p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Design Tokens */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold mb-8 text-center">Design Tokens</h2>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              <div className="bg-white/5 border border-white/10 rounded-xl p-6">
                <h3 className="text-xl font-semibold mb-4 text-cyan-400">Color Palette</h3>
                <div className="space-y-3">
                  <div className="flex items-center space-x-3">
                    <div className="w-6 h-6 bg-cyan-400 rounded"></div>
                    <span className="text-white/70">Cyan 400</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-6 h-6 bg-fuchsia-400 rounded"></div>
                    <span className="text-white/70">Fuchsia 400</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-6 h-6 bg-purple-400 rounded"></div>
                    <span className="text-white/70">Purple 400</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-6 h-6 bg-green-400 rounded"></div>
                    <span className="text-white/70">Green 400</span>
                  </div>
                </div>
              </div>

              <div className="bg-white/5 border border-white/10 rounded-xl p-6">
                <h3 className="text-xl font-semibold mb-4 text-fuchsia-400">Typography</h3>
                <div className="space-y-3">
                  <div className="text-4xl font-bold">Heading 1</div>
                  <div className="text-2xl font-semibold">Heading 2</div>
                  <div className="text-lg font-medium">Body Large</div>
                  <div className="text-sm">Body Small</div>
                </div>
              </div>

              <div className="bg-white/5 border border-white/10 rounded-xl p-6">
                <h3 className="text-xl font-semibold mb-4 text-green-400">Spacing</h3>
                <div className="space-y-3">
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-green-400 rounded"></div>
                    <span className="text-white/70">4px (1rem)</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-3 h-3 bg-green-400 rounded"></div>
                    <span className="text-white/70">8px (2rem)</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-4 h-4 bg-green-400 rounded"></div>
                    <span className="text-white/70">16px (4rem)</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-5 h-5 bg-green-400 rounded"></div>
                    <span className="text-white/70">24px (6rem)</span>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Installation and Usage */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold mb-8 text-center">Installation and Usage</h2>
            <div className="bg-white/5 border border-white/10 rounded-xl p-8">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-xl font-semibold mb-4 text-cyan-400">Installation</h3>
                  <div className="bg-black/20 p-4 rounded-lg">
                    <code className="text-cyan-400">npm install @zion-tech/components</code><br/>
                    <code className="text-cyan-400"># or</code><br/>
                    <code className="text-cyan-400">yarn add @zion-tech/components</code>
                  </div>
                </div>

                <div>
                  <h3 className="text-xl font-semibold mb-4 text-fuchsia-400">Basic Usage</h3>
                  <div className="bg-black/20 p-4 rounded-lg">
                    <pre className="text-sm text-white/80">
{`import { Button, Card } from '@zion-tech/components';

function App() {
  return (
    <Card>
      <Button variant="primary">
        Click me
      </Button>
    </Card>
  );
}`}
                    </pre>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Resources and Support */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold mb-8 text-center">Resources and Support</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-white/5 border border-white/10 rounded-xl p-6 text-center">
                <h3 className="text-xl font-semibold mb-2 text-cyan-400">Documentation</h3>
                <p className="text-white/70 mb-4">Comprehensive component documentation with examples</p>
                <Link href="/docs" className="text-cyan-400 hover:text-cyan-300">View Docs →</Link>
              </div>
              <div className="bg-white/5 border border-white/10 rounded-xl p-6 text-center">
                <h3 className="text-xl font-semibold mb-2 text-fuchsia-400">Storybook</h3>
                <p className="text-white/70 mb-4">Interactive component playground and testing</p>
                <Link href="/storybook" className="text-fuchsia-400 hover:text-fuchsia-300">Open Storybook →</Link>
              </div>
              <div className="bg-white/5 border border-white/10 rounded-xl p-6 text-center">
                <h3 className="text-xl font-semibold mb-2 text-green-400">GitHub</h3>
                <p className="text-white/70 mb-4">Source code, issues, and contributions</p>
                <Link href="https://github.com/zion-tech/components" className="text-green-400 hover:text-green-300">View on GitHub →</Link>
              </div>
            </div>
          </section>

          {/* Navigation */}
          <div className="mt-12 text-center">
            <Link href="/contact" className="px-6 py-3 bg-purple-400 hover:bg-purple-300 text-black font-semibold rounded-lg transition-colors mr-4">
              Get Components
            </Link>
            <Link href="/services" className="px-6 py-3 border border-purple-400 text-purple-400 hover:bg-purple-400 hover:text-black font-semibold rounded-lg transition-colors">
              View Services
            </Link>
          </div>
        </main>
      </div>
    </>
  );
}
=======

const ComponentLibrary = () => {
  return (
    <>
      <Head>
        <title>Component Library - Zion.app</title>
        <meta name="description" content="Explore our comprehensive component library for building Zion.app interfaces" />
        <meta name="keywords" content="components, UI, library, Zion, design system" />
      </Head>
      
      <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 text-white">
        <div className="container mx-auto px-4 py-8">
          <div className="max-w-6xl mx-auto">
            <header className="text-center mb-12">
              <h1 className="text-5xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                Component Library
              </h1>
              <p className="text-xl text-gray-300">
                Building blocks for creating beautiful Zion.app interfaces
              </p>
            </header>

            <div className="grid gap-8">
              {/* Navigation Components */}
              <section className="bg-gray-800/50 rounded-lg p-6 border border-gray-700">
                <h2 className="text-2xl font-semibold mb-6 text-blue-400">Navigation Components</h2>
                
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="bg-gray-700/50 p-4 rounded">
                    <h3 className="font-medium text-green-400 mb-3">Navbar</h3>
                    <div className="bg-gray-900 p-3 rounded mb-3">
                      <nav className="flex items-center justify-between">
                        <div className="text-blue-400 font-bold">Zion.app</div>
                        <div className="flex space-x-4 text-sm">
                          <a href="#" className="hover:text-blue-400">Home</a>
                          <a href="#" className="hover:text-blue-400">Services</a>
                          <a href="#" className="hover:text-blue-400">About</a>
                          <a href="#" className="hover:text-blue-400">Contact</a>
                        </div>
                      </nav>
                    </div>
                    <p className="text-sm text-gray-300">Responsive navigation bar with logo and menu items</p>
                  </div>

                  <div className="bg-gray-700/50 p-4 rounded">
                    <h3 className="font-medium text-green-400 mb-3">Sidebar</h3>
                    <div className="bg-gray-900 p-3 rounded mb-3">
                      <div className="w-48 h-32 bg-gray-800 rounded flex flex-col">
                        <div className="p-3 border-b border-gray-700">Menu</div>
                        <div className="p-2 hover:bg-gray-700 cursor-pointer">Dashboard</div>
                        <div className="p-2 hover:bg-gray-700 cursor-pointer">Projects</div>
                        <div className="p-2 hover:bg-gray-700 cursor-pointer">Settings</div>
                      </div>
                    </div>
                    <p className="text-sm text-gray-300">Collapsible sidebar navigation component</p>
                  </div>

                  <div className="bg-gray-700/50 p-4 rounded">
                    <h3 className="font-medium text-green-400 mb-3">Breadcrumbs</h3>
                    <div className="bg-gray-900 p-3 rounded mb-3">
                      <nav className="text-sm">
                        <ol className="flex items-center space-x-2">
                          <li><a href="#" className="text-blue-400 hover:text-blue-300">Home</a></li>
                          <li className="text-gray-500">/</li>
                          <li><a href="#" className="text-blue-400 hover:text-blue-300">Services</a></li>
                          <li className="text-gray-500">/</li>
                          <li className="text-gray-300">Component Library</li>
                        </ol>
                      </nav>
                    </div>
                    <p className="text-sm text-gray-300">Breadcrumb navigation for deep page hierarchies</p>
                  </div>

                  <div className="bg-gray-700/50 p-4 rounded">
                    <h3 className="font-medium text-green-400 mb-3">Pagination</h3>
                    <div className="bg-gray-900 p-3 rounded mb-3">
                      <div className="flex items-center space-x-2">
                        <button className="px-3 py-1 bg-gray-700 hover:bg-gray-600 rounded">Previous</button>
                        <button className="px-3 py-1 bg-blue-600 rounded">1</button>
                        <button className="px-3 py-1 bg-gray-700 hover:bg-gray-600 rounded">2</button>
                        <button className="px-3 py-1 bg-gray-700 hover:bg-gray-600 rounded">3</button>
                        <button className="px-3 py-1 bg-gray-700 hover:bg-gray-600 rounded">Next</button>
                      </div>
                    </div>
                    <p className="text-sm text-gray-300">Page navigation for large datasets</p>
                  </div>
                </div>
              </section>

              {/* Form Components */}
              <section className="bg-gray-800/50 rounded-lg p-6 border border-gray-700">
                <h2 className="text-2xl font-semibold mb-6 text-blue-400">Form Components</h2>
                
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="bg-gray-700/50 p-4 rounded">
                    <h3 className="font-medium text-green-400 mb-3">Input Fields</h3>
                    <div className="bg-gray-900 p-3 rounded mb-3 space-y-3">
                      <input 
                        type="text" 
                        placeholder="Enter your name" 
                        className="w-full px-3 py-2 bg-gray-800 border border-gray-600 rounded focus:border-blue-500 focus:outline-none"
                      />
                      <input 
                        type="email" 
                        placeholder="Enter your email" 
                        className="w-full px-3 py-2 bg-gray-800 border border-gray-600 rounded focus:border-blue-500 focus:outline-none"
                      />
                    </div>
                    <p className="text-sm text-gray-300">Styled input fields with focus states</p>
                  </div>

                  <div className="bg-gray-700/50 p-4 rounded">
                    <h3 className="font-medium text-green-400 mb-3">Buttons</h3>
                    <div className="bg-gray-900 p-3 rounded mb-3 space-x-3">
                      <button className="px-4 py-2 bg-blue-600 hover:bg-blue-700 rounded transition-colors">
                        Primary
                      </button>
                      <button className="px-4 py-2 bg-gray-600 hover:bg-gray-700 rounded transition-colors">
                        Secondary
                      </button>
                      <button className="px-4 py-2 bg-red-600 hover:bg-red-700 rounded transition-colors">
                        Danger
                      </button>
                    </div>
                    <p className="text-sm text-gray-300">Various button styles for different actions</p>
                  </div>

                  <div className="bg-gray-700/50 p-4 rounded">
                    <h3 className="font-medium text-green-400 mb-3">Select Dropdown</h3>
                    <div className="bg-gray-900 p-3 rounded mb-3">
                      <select className="w-full px-3 py-2 bg-gray-800 border border-gray-600 rounded focus:border-blue-500 focus:outline-none">
                        <option>Choose an option</option>
                        <option>Option 1</option>
                        <option>Option 2</option>
                        <option>Option 3</option>
                      </select>
                    </div>
                    <p className="text-sm text-gray-300">Custom styled dropdown select component</p>
                  </div>

                  <div className="bg-gray-700/50 p-4 rounded">
                    <h3 className="font-medium text-green-400 mb-3">Checkbox & Radio</h3>
                    <div className="bg-gray-900 p-3 rounded mb-3 space-y-2">
                      <label className="flex items-center space-x-2">
                        <input type="checkbox" className="text-blue-600" />
                        <span>Accept terms</span>
                      </label>
                      <label className="flex items-center space-x-2">
                        <input type="radio" name="option" className="text-blue-600" />
                        <span>Option A</span>
                      </label>
                    </div>
                    <p className="text-sm text-gray-300">Form controls for user selections</p>
                  </div>
                </div>
              </section>

              {/* Data Display Components */}
              <section className="bg-gray-800/50 rounded-lg p-6 border border-gray-700">
                <h2 className="text-2xl font-semibold mb-6 text-blue-400">Data Display Components</h2>
                
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="bg-gray-700/50 p-4 rounded">
                    <h3 className="font-medium text-green-400 mb-3">Cards</h3>
                    <div className="bg-gray-900 p-3 rounded mb-3">
                      <div className="bg-gray-800 p-4 rounded border border-gray-700">
                        <h4 className="font-medium text-white mb-2">Service Title</h4>
                        <p className="text-gray-300 text-sm mb-3">Description of the service goes here.</p>
                        <button className="px-3 py-1 bg-blue-600 hover:bg-blue-700 rounded text-sm">
                          Learn More
                        </button>
                      </div>
                    </div>
                    <p className="text-sm text-gray-300">Content containers with consistent styling</p>
                  </div>

                  <div className="bg-gray-700/50 p-4 rounded">
                    <h3 className="font-medium text-green-400 mb-3">Tables</h3>
                    <div className="bg-gray-900 p-3 rounded mb-3">
                      <table className="w-full text-sm">
                        <thead>
                          <tr className="border-b border-gray-600">
                            <th className="text-left p-2">Name</th>
                            <th className="text-left p-2">Status</th>
                            <th className="text-left p-2">Actions</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr className="border-b border-gray-700">
                            <td className="p-2">Project A</td>
                            <td className="p-2 text-green-400">Active</td>
                            <td className="p-2">
                              <button className="text-blue-400 hover:text-blue-300">Edit</button>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                    <p className="text-sm text-gray-300">Data tables for structured information</p>
                  </div>

                  <div className="bg-gray-700/50 p-4 rounded">
                    <h3 className="font-medium text-green-400 mb-3">Progress Bars</h3>
                    <div className="bg-gray-900 p-3 rounded mb-3 space-y-3">
                      <div className="w-full bg-gray-700 rounded-full h-2">
                        <div className="bg-blue-600 h-2 rounded-full" style={{width: '75%'}}></div>
                      </div>
                      <div className="text-sm text-gray-300">75% Complete</div>
                    </div>
                    <p className="text-sm text-gray-300">Visual progress indicators</p>
                  </div>

                  <div className="bg-gray-700/50 p-4 rounded">
                    <h3 className="font-medium text-green-400 mb-3">Badges</h3>
                    <div className="bg-gray-900 p-3 rounded mb-3 space-x-2">
                      <span className="px-2 py-1 bg-green-600 text-white text-xs rounded-full">Success</span>
                      <span className="px-2 py-1 bg-yellow-600 text-white text-xs rounded-full">Warning</span>
                      <span className="px-2 py-1 bg-red-600 text-white text-xs rounded-full">Error</span>
                    </div>
                    <p className="text-sm text-gray-300">Status indicators and labels</p>
                  </div>
                </div>
              </section>

              {/* Feedback Components */}
              <section className="bg-gray-800/50 rounded-lg p-6 border border-gray-700">
                <h2 className="text-2xl font-semibold mb-6 text-blue-400">Feedback Components</h2>
                
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="bg-gray-700/50 p-4 rounded">
                    <h3 className="font-medium text-green-400 mb-3">Alerts</h3>
                    <div className="bg-gray-900 p-3 rounded mb-3 space-y-3">
                      <div className="p-3 bg-green-900/50 border border-green-600 rounded text-green-300">
                        Success! Your action was completed.
                      </div>
                      <div className="p-3 bg-yellow-900/50 border border-yellow-600 rounded text-yellow-300">
                        Warning: Please check your input.
                      </div>
                      <div className="p-3 bg-red-900/50 border border-red-600 rounded text-red-300">
                        Error: Something went wrong.
                      </div>
                    </div>
                    <p className="text-sm text-gray-300">User feedback messages</p>
                  </div>

                  <div className="bg-gray-700/50 p-4 rounded">
                    <h3 className="font-medium text-green-400 mb-3">Modals</h3>
                    <div className="bg-gray-900 p-3 rounded mb-3">
                      <div className="bg-gray-800 p-4 rounded border border-gray-700">
                        <h4 className="font-medium text-white mb-2">Confirm Action</h4>
                        <p className="text-gray-300 text-sm mb-3">Are you sure you want to proceed?</p>
                        <div className="flex space-x-2">
                          <button className="px-3 py-1 bg-gray-600 hover:bg-gray-700 rounded text-sm">Cancel</button>
                          <button className="px-3 py-1 bg-blue-600 hover:bg-blue-700 rounded text-sm">Confirm</button>
                        </div>
                      </div>
                    </div>
                    <p className="text-sm text-gray-300">Overlay dialogs for user interactions</p>
                  </div>

                  <div className="bg-gray-700/50 p-4 rounded">
                    <h3 className="font-medium text-green-400 mb-3">Tooltips</h3>
                    <div className="bg-gray-900 p-3 rounded mb-3">
                      <div className="relative inline-block">
                        <button className="px-3 py-1 bg-blue-600 rounded">Hover me</button>
                        <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-2 py-1 bg-gray-800 text-white text-xs rounded">
                          This is a tooltip
                        </div>
                      </div>
                    </div>
                    <p className="text-sm text-gray-300">Contextual help information</p>
                  </div>

                  <div className="bg-gray-700/50 p-4 rounded">
                    <h3 className="font-medium text-green-400 mb-3">Loading States</h3>
                    <div className="bg-gray-900 p-3 rounded mb-3">
                      <div className="flex items-center space-x-2">
                        <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-blue-400"></div>
                        <span className="text-sm text-gray-300">Loading...</span>
                      </div>
                    </div>
                    <p className="text-sm text-gray-300">Loading indicators and spinners</p>
                  </div>
                </div>
              </section>

              {/* Layout Components */}
              <section className="bg-gray-800/50 rounded-lg p-6 border border-gray-700">
                <h2 className="text-2xl font-semibold mb-6 text-blue-400">Layout Components</h2>
                
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="bg-gray-700/50 p-4 rounded">
                    <h3 className="font-medium text-green-400 mb-3">Grid System</h3>
                    <div className="bg-gray-900 p-3 rounded mb-3">
                      <div className="grid grid-cols-3 gap-2">
                        <div className="h-8 bg-blue-600 rounded"></div>
                        <div className="h-8 bg-green-600 rounded"></div>
                        <div className="h-8 bg-purple-600 rounded"></div>
                        <div className="h-8 bg-yellow-600 rounded"></div>
                        <div className="h-8 bg-red-600 rounded"></div>
                        <div className="h-8 bg-indigo-600 rounded"></div>
                      </div>
                    </div>
                    <p className="text-sm text-gray-300">Responsive grid layout system</p>
                  </div>

                  <div className="bg-gray-700/50 p-4 rounded">
                    <h3 className="font-medium text-green-400 mb-3">Container</h3>
                    <div className="bg-gray-900 p-3 rounded mb-3">
                      <div className="max-w-4xl mx-auto p-4 border border-gray-600 rounded">
                        <p className="text-center text-gray-300">Centered container with max width</p>
                      </div>
                    </div>
                    <p className="text-sm text-gray-300">Content width constraints</p>
                  </div>

                  <div className="bg-gray-700/50 p-4 rounded">
                    <h3 className="font-medium text-green-400 mb-3">Divider</h3>
                    <div className="bg-gray-900 p-3 rounded mb-3">
                      <div className="space-y-4">
                        <p className="text-gray-300">Content above</p>
                        <hr className="border-gray-600" />
                        <p className="text-gray-300">Content below</p>
                      </div>
                    </div>
                    <p className="text-sm text-gray-300">Visual content separators</p>
                  </div>

                  <div className="bg-gray-700/50 p-4 rounded">
                    <h3 className="font-medium text-green-400 mb-3">Spacer</h3>
                    <div className="bg-gray-900 p-3 rounded mb-3">
                      <div className="space-y-4">
                        <div className="h-4 bg-blue-600 rounded"></div>
                        <div className="h-8"></div>
                        <div className="h-4 bg-green-600 rounded"></div>
                      </div>
                    </div>
                    <p className="text-sm text-gray-300">Consistent spacing utilities</p>
                  </div>
                </div>
              </section>

              {/* Usage Guidelines */}
              <section className="bg-gray-800/50 rounded-lg p-6 border border-gray-700">
                <h2 className="text-2xl font-semibold mb-6 text-blue-400">Usage Guidelines</h2>
                
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="bg-gray-700/50 p-4 rounded">
                    <h3 className="font-medium text-green-400 mb-3">Installation</h3>
                    <div className="bg-gray-900 p-3 rounded mb-3">
                      <code className="text-sm text-green-400">
                        npm install @zion/components
                      </code>
                    </div>
                    <p className="text-sm text-gray-300">Install the component library package</p>
                  </div>

                  <div className="bg-gray-700/50 p-4 rounded">
                    <h3 className="font-medium text-green-400 mb-3">Import</h3>
                    <div className="bg-gray-900 p-3 rounded mb-3">
                      <code className="text-sm text-green-400">
                        import {"{ Button, Card }"} from '@zion/components'
                      </code>
                    </div>
                    <p className="text-sm text-gray-300">Import components as needed</p>
                  </div>

                  <div className="bg-gray-700/50 p-4 rounded">
                    <h3 className="font-medium text-green-400 mb-3">Customization</h3>
                    <p className="text-sm text-gray-300">
                      All components support Tailwind CSS classes for easy customization and theming.
                    </p>
                  </div>

                  <div className="bg-gray-700/50 p-4 rounded">
                    <h3 className="font-medium text-green-400 mb-3">Accessibility</h3>
                    <p className="text-sm text-gray-300">
                      Components follow WCAG 2.1 guidelines and include proper ARIA labels and keyboard navigation.
                    </p>
                  </div>
                </div>
              </section>

              {/* Get Started */}
              <section className="bg-gray-800/50 rounded-lg p-6 border border-gray-700 text-center">
                <h2 className="text-2xl font-semibold mb-4 text-blue-400">Ready to Get Started?</h2>
                <p className="text-gray-300 mb-6">
                  Explore our components and start building amazing interfaces with Zion.app
                </p>
                <div className="space-x-4">
                  <a 
                    href="/contact" 
                    className="inline-block bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg transition-colors"
                  >
                    Contact Us
                  </a>
                  <a 
                    href="https://github.com/Zion-Holdings/zion.app" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-block bg-gray-600 hover:bg-gray-700 text-white px-6 py-3 rounded-lg transition-colors"
                  >
                    View on GitHub
                  </a>
                </div>
              </section>
=======
import React, { useState } from 'react';
import Head from 'next/head';
import Link from 'next/link';

const ComponentLibrary: React.FC = () => {
  const [activeTab, setActiveTab] = useState('buttons');

  const components = {
    buttons: [
      { name: 'Primary Button', className: 'bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-medium transition-colors' },
      { name: 'Secondary Button', className: 'bg-gray-200 hover:bg-gray-300 text-gray-800 px-6 py-3 rounded-lg font-medium transition-colors' },
      { name: 'Success Button', className: 'bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-lg font-medium transition-colors' },
      { name: 'Danger Button', className: 'bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded-lg font-medium transition-colors' },
      { name: 'Outline Button', className: 'border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white px-6 py-3 rounded-lg font-medium transition-colors' }
    ],
    cards: [
      { name: 'Basic Card', className: 'bg-white rounded-lg shadow-md p-6 border border-gray-200' },
      { name: 'Elevated Card', className: 'bg-white rounded-lg shadow-xl p-6 transform hover:scale-105 transition-transform' },
      { name: 'Colored Card', className: 'bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-lg p-6' },
      { name: 'Bordered Card', className: 'bg-white rounded-lg border-2 border-blue-200 p-6' }
    ],
    forms: [
      { name: 'Text Input', className: 'w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent' },
      { name: 'Select Dropdown', className: 'w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent' },
      { name: 'Checkbox', className: 'w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500' },
      { name: 'Radio Button', className: 'w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500' }
    ],
    alerts: [
      { name: 'Info Alert', className: 'bg-blue-100 border border-blue-400 text-blue-700 px-4 py-3 rounded' },
      { name: 'Success Alert', className: 'bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded' },
      { name: 'Warning Alert', className: 'bg-yellow-100 border border-yellow-400 text-yellow-700 px-4 py-3 rounded' },
      { name: 'Error Alert', className: 'bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded' }
    ]
  };

  const tabs = [
    { id: 'buttons', label: 'Buttons', icon: '🔘' },
    { id: 'cards', label: 'Cards', icon: '🃏' },
    { id: 'forms', label: 'Form Elements', icon: '📝' },
    { id: 'alerts', label: 'Alerts', icon: '⚠️' }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50">
      <Head>
        <title>Component Library - bolt.new.zion.app</title>
        <meta name="description" content="Comprehensive component library showcasing all UI components and design patterns" />
        <meta name="keywords" content="components, UI, design system, library, bolt.new.zion.app" />
      </Head>

      <div className="container mx-auto px-4 py-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              Component Library
            </h1>
            <p className="text-xl text-gray-600">
              Explore our comprehensive collection of reusable UI components and design patterns
            </p>
            <div className="mt-4">
              <Link href="/" className="text-blue-600 hover:text-blue-800 underline">
                ← Back to Home
              </Link>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
            <h2 className="text-2xl font-semibold text-gray-800 mb-6">Design Principles</h2>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="text-3xl mb-3">🎨</div>
                <h3 className="text-lg font-medium text-gray-800 mb-2">Consistent</h3>
                <p className="text-gray-600">Uniform design language across all components</p>
              </div>
              <div className="text-center">
                <div className="text-3xl mb-3">♿</div>
                <h3 className="text-lg font-medium text-gray-800 mb-2">Accessible</h3>
                <p className="text-gray-600">Built with WCAG guidelines in mind</p>
              </div>
              <div className="text-center">
                <div className="text-3xl mb-3">📱</div>
                <h3 className="text-lg font-medium text-gray-800 mb-2">Responsive</h3>
                <p className="text-gray-600">Works seamlessly on all device sizes</p>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
            <div className="flex flex-wrap gap-2 mb-6">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                    activeTab === tab.id
                      ? 'bg-blue-600 text-white'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  <span className="mr-2">{tab.icon}</span>
                  {tab.label}
                </button>
              ))}
            </div>

            <div className="space-y-8">
              {Object.entries(components).map(([category, items]) => (
                <div key={category} className={activeTab === category ? 'block' : 'hidden'}>
                  <h3 className="text-xl font-semibold text-gray-800 mb-4 capitalize">
                    {category}
                  </h3>
                  <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {items.map((component, index) => (
                      <div key={index} className="border border-gray-200 rounded-lg p-6">
                        <h4 className="text-lg font-medium text-gray-700 mb-3">
                          {component.name}
                        </h4>
                        <div className="mb-4">
                          <button className={component.className}>
                            {component.name.includes('Button') ? 'Button Text' : 
                             component.name.includes('Card') ? 'Card Content' :
                             component.name.includes('Input') ? 'Input text' :
                             component.name.includes('Select') ? 'Select option' :
                             component.name.includes('Checkbox') ? 'Checkbox' :
                             component.name.includes('Radio') ? 'Radio' :
                             component.name.includes('Alert') ? 'Alert message' : 'Component'}
                          </button>
                        </div>
                        <div>
                          <h5 className="text-sm font-medium text-gray-600 mb-2">CSS Classes:</h5>
                          <code className="bg-gray-100 px-2 py-1 rounded text-xs font-mono break-all">
                            {component.className}
                          </code>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-lg p-8">
            <h2 className="text-2xl font-semibold text-gray-800 mb-6">Usage Guidelines</h2>
            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-medium text-gray-700 mb-2">Copy & Paste</h3>
                <p className="text-gray-600">
                  Simply copy the CSS classes from any component and apply them to your HTML elements.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-medium text-gray-700 mb-2">Customization</h3>
                <p className="text-gray-600">
                  Modify the classes to match your design requirements while maintaining consistency.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-medium text-gray-700 mb-2">Accessibility</h3>
                <p className="text-gray-600">
                  All components include proper ARIA labels and keyboard navigation support.
                </p>
              </div>
>>>>>>> origin/cursor/update-content-and-fix-links-5397
            </div>
          </div>
        </div>
      </div>
<<<<<<< HEAD
    </>
  );
};

export default ComponentLibrary;
>>>>>>> origin/cursor/update-content-and-fix-links-32b9
=======
    </div>
  );
};

export default ComponentLibrary;
>>>>>>> origin/cursor/update-content-and-fix-links-5397
