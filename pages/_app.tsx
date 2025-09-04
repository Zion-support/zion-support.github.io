import type { AppProps } from 'next/app';
import Head from 'next/head';
import Link from 'next/link';
import { useState } from 'react';
import '../styles/globals.css';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Zion Tech Group - Innovative Micro SaaS, AI & IT Solutions</title>
        <meta name="description" content="Leading provider of micro SaaS products, AI services, and IT solutions. 340+ innovative services including quantum computing, AI automation, blockchain, and enterprise solutions." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      
      <div className="min-h-screen bg-slate-50">
        <Header />
        <main>
          <Component {...pageProps} />
        </main>
        <Footer />
      </div>
    </>
  );
}

function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-slate-900/95 backdrop-blur-md border-b border-white/10">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex-shrink-0">
            <span className="text-xl font-bold bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">
              Zion Tech Group
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex gap-1 flex-wrap items-center">
            <Link href="/" className="text-white px-3 py-2 rounded-md text-sm font-medium hover:bg-slate-800 transition-colors">
              Home
            </Link>
            <Link href="/services" className="text-white px-3 py-2 rounded-md text-sm font-medium hover:bg-slate-800 transition-colors">
              Services
            </Link>
            <Link href="/solutions" className="text-white px-3 py-2 rounded-md text-sm font-medium hover:bg-slate-800 transition-colors">
              Solutions
            </Link>
            <Link href="/about" className="text-white px-3 py-2 rounded-md text-sm font-medium hover:bg-slate-800 transition-colors">
              About
            </Link>
            <Link href="/contact" className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md text-sm font-medium transition-colors">
              Contact
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden bg-none border-none text-white text-2xl cursor-pointer"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle mobile menu"
          >
            {mobileMenuOpen ? '✕' : '☰'}
          </button>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-slate-800/50 backdrop-blur-sm rounded-lg mt-2">
              <Link href="/" className="block text-white px-3 py-2 rounded-md text-base font-medium hover:bg-slate-700 transition-colors" onClick={() => setMobileMenuOpen(false)}>
                Home
              </Link>
              <Link href="/services" className="block text-white px-3 py-2 rounded-md text-base font-medium hover:bg-slate-700 transition-colors" onClick={() => setMobileMenuOpen(false)}>
                Services
              </Link>
              <Link href="/solutions" className="block text-white px-3 py-2 rounded-md text-base font-medium hover:bg-slate-700 transition-colors" onClick={() => setMobileMenuOpen(false)}>
                Solutions
              </Link>
              <Link href="/about" className="block text-white px-3 py-2 rounded-md text-base font-medium hover:bg-slate-700 transition-colors" onClick={() => setMobileMenuOpen(false)}>
                About
              </Link>
              <Link href="/contact" className="block bg-blue-600 hover:bg-blue-700 text-white px-3 py-2 rounded-md text-base font-medium transition-colors" onClick={() => setMobileMenuOpen(false)}>
                Contact
              </Link>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}

function Footer() {
  return (
    <footer className="bg-slate-900 text-white mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="text-xl font-bold bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">
              Zion Tech Group
            </div>
            <p className="text-slate-300 text-sm">
              Transforming businesses through innovative AI, quantum computing, and cutting-edge technology solutions.
            </p>
            <div className="space-y-2 text-sm text-slate-300">
              <div>📞 <a href="tel:+13024640950" className="text-blue-400 hover:text-blue-300">+1 302 464 0950</a></div>
              <div>✉️ <a href="mailto:kleber@ziontechgroup.com" className="text-blue-400 hover:text-blue-300">kleber@ziontechgroup.com</a></div>
              <div>📍 364 E Main St STE 1008, Middletown DE 19709</div>
              <div>🌐 <a href="https://ziontechgroup.com" className="text-blue-400 hover:text-blue-300">ziontechgroup.com</a></div>
            </div>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Services</h3>
            <div className="space-y-2 text-sm text-slate-300">
              <Link href="/ai-services" className="block hover:text-white transition-colors">AI Services</Link>
              <Link href="/cloud-devops" className="block hover:text-white transition-colors">Cloud DevOps</Link>
              <Link href="/cybersecurity" className="block hover:text-white transition-colors">Cybersecurity</Link>
              <Link href="/quantum-computing" className="block hover:text-white transition-colors">Quantum Computing</Link>
              <Link href="/micro-saas" className="block hover:text-white transition-colors">Micro SaaS</Link>
            </div>
          </div>

          {/* Company */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Company</h3>
            <div className="space-y-2 text-sm text-slate-300">
              <Link href="/about" className="block hover:text-white transition-colors">About Us</Link>
              <Link href="/team" className="block hover:text-white transition-colors">Team</Link>
              <Link href="/careers" className="block hover:text-white transition-colors">Careers</Link>
              <Link href="/blog" className="block hover:text-white transition-colors">Blog</Link>
              <Link href="/news" className="block hover:text-white transition-colors">News</Link>
            </div>
          </div>

          {/* Support */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Support</h3>
            <div className="space-y-2 text-sm text-slate-300">
              <Link href="/contact" className="block hover:text-white transition-colors">Contact</Link>
              <Link href="/help" className="block hover:text-white transition-colors">Help Center</Link>
              <Link href="/faq" className="block hover:text-white transition-colors">FAQ</Link>
              <Link href="/docs" className="block hover:text-white transition-colors">Documentation</Link>
              <Link href="/status" className="block hover:text-white transition-colors">Status</Link>
            </div>
          </div>
        </div>

        <div className="border-t border-slate-700 mt-8 pt-8 text-center text-sm text-slate-400">
          <p>&copy; 2024 Zion Tech Group. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

export default MyApp;