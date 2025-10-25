<<<<<<< HEAD
'use client';
import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import EnhancedFooter from '/components/EnhancedFooter';

export default function HomePage() {
  return (
    <div>
      <Head>
        <title>Zion Tech Group - AI & Technology Solutions</title>
        <meta name="description" content="Professional services by Zion Tech Group." />
      </Head>
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">
          <h1 className="text-4xl font-bold text-white mb-6">
            Zion Tech Group - AI & Technology Solutions
          </h1>
          <p className="text-lg text-gray-300 mb-8">
            AI and technology solutions for your business. Transform your operations with cutting-edge AI services. services coming soon.
          </p>
          <Link 
            href="/contact" 
            className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 transition-colors duration-200"
          >
            Contact Us
            <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </div>
      </div>
      <EnhancedFooter />
    </div>
  );
}
=======
'use client'
import React from 'react'
import Navigation from './components/Navigation'
import Footer from './components/Footer'
import { Shield, Zap, Users, ArrowRight } from 'lucide-react';

import React from 'react';
import Link from 'next/link';
import { ArrowRightIcon, SparklesIcon, CpuChipIcon, CloudIcon, ShieldCheckIcon } from '@heroicons/react/24/outline';

const AppPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Navigation */}
      <nav className="relative z-10 px-6 py-4">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <SparklesIcon className="h-8 w-8 text-purple-400" />
            <span className="text-2xl font-bold text-white">Zion Tech Group</span>
          </div>
          <div className="hidden md:flex space-x-8">
            <Link href="/about" className="text-gray-300 hover:text-white transition-colors">About</Link>
            <Link href="/ai-services" className="text-gray-300 hover:text-white transition-colors">AI Services</Link>
            <Link href="/it-services" className="text-gray-300 hover:text-white transition-colors">IT Services</Link>
            <Link href="/contact" className="text-gray-300 hover:text-white transition-colors">Contact</Link>
          </div>
        </div>
      </nav>

      <main>
        {/* Hero Section */}
        <section className="relative py-20 px-4 overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(147,51,234,0.3)_0%,transparent_50%)] animate-pulse" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(59,130,246,0.3)_0%,transparent_50%)] animate-pulse" style={{ animationDelay: '1s' }} />
          <div className="relative max-w-7xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Transform Your Business with
              <span className="block bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
                AI-Powered Solutions
              </span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Leading technology solutions provider helping businesses transform their digital infrastructure 
              with cutting-edge AI, cloud architecture, and innovative development services.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href="/contact" 
                className="inline-flex items-center px-8 py-3 bg-purple-600 hover:bg-purple-700 text-white font-semibold rounded-lg transition-colors"
              >
                Get Started
                <ArrowRightIcon className="ml-2 h-5 w-5" />
              </Link>
              <Link 
                href="/ai-services" 
                className="inline-flex items-center px-8 py-3 border border-purple-400 text-purple-400 hover:bg-purple-400 hover:text-white font-semibold rounded-lg transition-colors"
              >
                Explore AI Services
              </Link>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="py-20 px-4 bg-slate-800/50">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Our Core Services</h2>
              <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                Comprehensive technology solutions designed to accelerate your digital transformation
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-slate-800/50 p-8 rounded-xl border border-slate-700 hover:border-purple-500 transition-colors">
                <CpuChipIcon className="h-12 w-12 text-purple-400 mb-4" />
                <h3 className="text-xl font-semibold text-white mb-3">AI Solutions</h3>
                <p className="text-gray-300 mb-4">
                  Advanced artificial intelligence services including machine learning, natural language processing, 
                  and computer vision to automate and optimize your business processes.
                </p>
                <Link href="/ai-services" className="text-purple-400 hover:text-purple-300 font-medium">
                  Learn More →
                </Link>
              </div>
              
              <div className="bg-slate-800/50 p-8 rounded-xl border border-slate-700 hover:border-blue-500 transition-colors">
                <CloudIcon className="h-12 w-12 text-blue-400 mb-4" />
                <h3 className="text-xl font-semibold text-white mb-3">Cloud Architecture</h3>
                <p className="text-gray-300 mb-4">
                  Scalable cloud infrastructure solutions with AWS, Azure, and Google Cloud to ensure 
                  high availability, security, and performance for your applications.
                </p>
                <Link href="/it-services" className="text-blue-400 hover:text-blue-300 font-medium">
                  Learn More →
                </Link>
              </div>
              
              <div className="bg-slate-800/50 p-8 rounded-xl border border-slate-700 hover:border-green-500 transition-colors">
                <ShieldCheckIcon className="h-12 w-12 text-green-400 mb-4" />
                <h3 className="text-xl font-semibold text-white mb-3">Cybersecurity</h3>
                <p className="text-gray-300 mb-4">
                  Comprehensive security solutions to protect your digital assets with advanced threat detection, 
                  encryption, and compliance management.
                </p>
                <Link href="/cybersecurity" className="text-green-400 hover:text-green-300 font-medium">
                  Learn More →
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Let's discuss how our AI and technology solutions can drive your success.
            </p>
            <Link 
              href="/contact" 
              className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white font-semibold rounded-lg transition-all transform hover:scale-105"
            >
              Start Your Project Today
              <ArrowRightIcon className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-slate-900 border-t border-slate-700 py-12 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <SparklesIcon className="h-6 w-6 text-purple-400" />
                <span className="text-xl font-bold text-white">Zion Tech Group</span>
              </div>
              <p className="text-gray-400">
                Leading technology solutions provider transforming businesses with AI and innovation.
              </p>
            </div>
            
            <div>
              <h3 className="text-white font-semibold mb-4">Services</h3>
              <ul className="space-y-2">
                <li><Link href="/ai-services" className="text-gray-400 hover:text-white transition-colors">AI Solutions</Link></li>
                <li><Link href="/it-services" className="text-gray-400 hover:text-white transition-colors">IT Services</Link></li>
                <li><Link href="/cloud-solutions" className="text-gray-400 hover:text-white transition-colors">Cloud Solutions</Link></li>
                <li><Link href="/cybersecurity" className="text-gray-400 hover:text-white transition-colors">Cybersecurity</Link></li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-white font-semibold mb-4">Company</h3>
              <ul className="space-y-2">
                <li><Link href="/about" className="text-gray-400 hover:text-white transition-colors">About Us</Link></li>
                <li><Link href="/team" className="text-gray-400 hover:text-white transition-colors">Our Team</Link></li>
                <li><Link href="/careers" className="text-gray-400 hover:text-white transition-colors">Careers</Link></li>
                <li><Link href="/contact" className="text-gray-400 hover:text-white transition-colors">Contact</Link></li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-white font-semibold mb-4">Resources</h3>
              <ul className="space-y-2">
                <li><Link href="/blog" className="text-gray-400 hover:text-white transition-colors">Blog</Link></li>
                <li><Link href="/docs" className="text-gray-400 hover:text-white transition-colors">Documentation</Link></li>
                <li><Link href="/help" className="text-gray-400 hover:text-white transition-colors">Help Center</Link></li>
                <li><Link href="/support" className="text-gray-400 hover:text-white transition-colors">Support</Link></li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-slate-700 mt-8 pt-8 text-center">
            <p className="text-gray-400">
              © 2024 Zion Tech Group. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default AppPage;
>>>>>>> origin/main
