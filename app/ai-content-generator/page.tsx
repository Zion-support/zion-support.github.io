'use client';

import React from 'react';
import Link from 'next/link';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

export default function AIContentGeneratorPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Navigation />
      
      <main className="relative z-10 py-20 px-4">
        <div className="max-w-7xl mx-auto">
          {/* Hero Section */}
          <section className="text-center mb-16">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6 quantum-gradient">
              AI Content Generator Pro
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Generate high-quality content, articles, and marketing copy using advanced AI models. 
              Perfect for blogs, social media, emails, and more.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <div className="cyber-card px-6 py-3 text-white">
                <span className="text-2xl font-bold text-cyan-400">$29</span>
                <span className="text-gray-400 ml-2">/month</span>
              </div>
              <a 
                href="tel:+13024640950" 
                className="quantum-card px-6 py-3 text-white hover:text-cyan-400 transition-all duration-300"
              >
                📞 Call Now: +1 (302) 464-0950
              </a>
            </div>
          </section>

          {/* Features Section */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-white mb-8 text-center quantum-gradient">
              Powerful Features
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                {
                  icon: '🤖',
                  title: 'Advanced AI Models',
                  description: 'Powered by GPT-4, Claude, and other cutting-edge AI models for superior content quality'
                },
                {
                  icon: '📝',
                  title: '50+ Content Templates',
                  description: 'Blog posts, social media, emails, product descriptions, and more'
                },
                {
                  icon: '🔍',
                  title: 'SEO Optimization',
                  description: 'Built-in SEO tools to help your content rank higher in search results'
                },
                {
                  icon: '🌍',
                  title: 'Multi-language Support',
                  description: 'Generate content in 25+ languages with native-level quality'
                },
                {
                  icon: '⚡',
                  title: 'Unlimited Generation',
                  description: 'No limits on content generation - create as much as you need'
                },
                {
                  icon: '📊',
                  title: 'Analytics Dashboard',
                  description: 'Track performance and optimize your content strategy'
                }
              ].map((feature, index) => (
                <div key={index} className="quantum-card p-6 hover:scale-105 transition-all duration-300">
                  <div className="text-4xl mb-4">{feature.icon}</div>
                  <h3 className="text-xl font-bold text-white mb-3">{feature.title}</h3>
                  <p className="text-gray-300">{feature.description}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Use Cases Section */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-white mb-8 text-center quantum-gradient">
              Perfect For
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="cyber-card p-8">
                <h3 className="text-2xl font-bold text-white mb-4">Content Marketers</h3>
                <ul className="space-y-3 text-gray-300">
                  <li className="flex items-center">
                    <span className="text-green-400 mr-3">✓</span>
                    Blog posts and articles
                  </li>
                  <li className="flex items-center">
                    <span className="text-green-400 mr-3">✓</span>
                    Social media content
                  </li>
                  <li className="flex items-center">
                    <span className="text-green-400 mr-3">✓</span>
                    Email marketing campaigns
                  </li>
                  <li className="flex items-center">
                    <span className="text-green-400 mr-3">✓</span>
                    Product descriptions
                  </li>
                </ul>
              </div>
              <div className="cyber-card p-8">
                <h3 className="text-2xl font-bold text-white mb-4">Business Owners</h3>
                <ul className="space-y-3 text-gray-300">
                  <li className="flex items-center">
                    <span className="text-green-400 mr-3">✓</span>
                    Website content
                  </li>
                  <li className="flex items-center">
                    <span className="text-green-400 mr-3">✓</span>
                    Marketing materials
                  </li>
                  <li className="flex items-center">
                    <span className="text-green-400 mr-3">✓</span>
                    Press releases
                  </li>
                  <li className="flex items-center">
                    <span className="text-green-400 mr-3">✓</span>
                    Ad copy
                  </li>
                </ul>
              </div>
            </div>
          </section>

          {/* Pricing Section */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-white mb-8 text-center quantum-gradient">
              Simple Pricing
            </h2>
            <div className="max-w-4xl mx-auto">
              <div className="hologram-card p-8 text-center">
                <h3 className="text-2xl font-bold text-white mb-4">Pro Plan</h3>
                <div className="text-5xl font-bold text-cyan-400 mb-4">$29<span className="text-xl text-gray-400">/month</span></div>
                <ul className="space-y-3 text-gray-300 mb-8">
                  <li className="flex items-center justify-center">
                    <span className="text-green-400 mr-3">✓</span>
                    Unlimited content generation
                  </li>
                  <li className="flex items-center justify-center">
                    <span className="text-green-400 mr-3">✓</span>
                    50+ content templates
                  </li>
                  <li className="flex items-center justify-center">
                    <span className="text-green-400 mr-3">✓</span>
                    SEO optimization tools
                  </li>
                  <li className="flex items-center justify-center">
                    <span className="text-green-400 mr-3">✓</span>
                    Multi-language support
                  </li>
                  <li className="flex items-center justify-center">
                    <span className="text-green-400 mr-3">✓</span>
                    Analytics dashboard
                  </li>
                  <li className="flex items-center justify-center">
                    <span className="text-green-400 mr-3">✓</span>
                    24/7 support
                  </li>
                </ul>
                <a 
                  href="tel:+13024640950" 
                  className="quantum-card px-8 py-4 text-white hover:text-cyan-400 transition-all duration-300 inline-block"
                >
                  Get Started Now
                </a>
              </div>
            </div>
          </section>

          {/* Contact Section */}
          <section className="text-center">
            <h2 className="text-3xl font-bold text-white mb-8 quantum-gradient">
              Ready to Transform Your Content?
            </h2>
            <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
              Join thousands of businesses already using AI Content Generator Pro to create 
              high-quality content at scale.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a 
                href="tel:+13024640950" 
                className="cyber-card px-8 py-4 text-white hover:text-cyan-400 transition-all duration-300"
              >
                📞 Call: +1 (302) 464-0950
              </a>
              <a 
                href="mailto:kleber@ziontechgroup.com" 
                className="quantum-card px-8 py-4 text-white hover:text-cyan-400 transition-all duration-300"
              >
                ✉️ Email: kleber@ziontechgroup.com
              </a>
            </div>
          </section>
        </div>
      </main>

      <Footer />
    </div>
  );
}