import React from 'react';
import Head from 'next/head';
// import Link from 'next/link'; // Replaced with regular anchor tags for React compatibility

interface LayoutProps {
  children: React.ReactNode;
  title?: string;
  description?: string;
}

export default function Layout({ children, title = 'Zion Tech Group', description = 'Autonomous, cloud-native app with self-running automations' }: LayoutProps) {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      
      <header className="bg-slate-900/50 backdrop-blur-xl border-b border-white/10 sticky top-0 z-50">
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <a href="/" className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">
              Zion Tech
            </a>
            
            <div className="hidden md:flex space-x-8">
              <a href="/about" className="text-white/70 hover:text-white transition-colors">
                About
              </a>
              <a href="/services" className="text-white/70 hover:text-white transition-colors">
                Services
              </a>
              <a href="/resources" className="text-white/70 hover:text-white transition-colors">
                Resources
              </a>
              <a href="/blog" className="text-white/70 hover:text-white transition-colors">
                Blog
              </a>
              <a href="/contact" className="text-white/70 hover:text-white transition-colors">
                Contact
              </a>
            </div>
          </div>
        </nav>
      </header>
      
      <main className="min-h-screen">
        {children}
      </main>
      
      <footer className="bg-slate-900/50 backdrop-blur-xl border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-lg font-semibold text-white mb-4">Zion Tech Group</h3>
              <p className="text-white/70">
                Autonomous, cloud-native app with self-running automations.
              </p>
            </div>
            
            <div>
              <h4 className="text-white font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2">
                <li><a href="/about" className="text-white/70 hover:text-white transition-colors">About</a></li>
                <li><a href="/services" className="text-white/70 hover:text-white transition-colors">Services</a></li>
                <li><a href="/resources" className="text-white/70 hover:text-white transition-colors">Resources</a></li>
                <li><a href="/blog" className="text-white/70 hover:text-white transition-colors">Blog</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-white font-semibold mb-4">Support</h4>
              <ul className="space-y-2">
                <li><a href="/contact" className="text-white/70 hover:text-white transition-colors">Contact</a></li>
                <li><a href="/privacy" className="text-white/70 hover:text-white transition-colors">Privacy</a></li>
                <li><a href="https://github.com/Zion-Holdings/zion.app" className="text-white/70 hover:text-white transition-colors">GitHub</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-white font-semibold mb-4">Connect</h4>
              <p className="text-white/70 mb-4">
                Stay updated with our latest innovations and automations.
              </p>
              <a 
                href="/contact" 
                className="inline-block px-4 py-2 bg-gradient-to-r from-cyan-500 to-purple-500 text-white rounded-lg hover:from-cyan-600 hover:to-purple-600 transition-all duration-200"
              >
                Get Started
              </a>
            </div>
          </div>
          
          <div className="border-t border-white/10 mt-8 pt-8 text-center">
            <p className="text-white/50">
              © 2025 Zion Tech Group. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </>
  );
}
