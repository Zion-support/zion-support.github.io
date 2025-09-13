import React from 'react';
import Link from 'next/link';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Revolutionary Content Showcase 2025 - Zion Tech Group',
  description: 'Explore our comprehensive collection of revolutionary AI content, breakthrough technologies, and success stories from 2025.',
  keywords: 'AI content, revolutionary technology, breakthrough, 2025, showcase, Zion Tech Group',
  openGraph: {
    title: 'Revolutionary Content Showcase 2025',
    description: 'Comprehensive collection of revolutionary AI content and technologies.',
    type: 'website',
  },
};

export default function RevolutionaryContentShowcase2025() {
  const contentCategories = [
    {
      title: 'AI 2025 Breakthroughs',
      description: 'Revolutionary AI technologies delivering unprecedented results',
      items: [
        {
          title: 'AI 2025 Ultimate Breakthrough Revolution',
          description: 'Experience the most revolutionary AI breakthrough of 2025, delivering 2,500-5,000% ROI',
          href: '/ai-2025-ultimate-breakthrough-revolution',
          badge: 'BREAKTHROUGH',
          color: 'from-red-500 to-pink-500'
        },
        {
          title: 'Synthetic Intelligence Revolution',
          description: 'Advanced AI systems that think, learn, and adapt with human-like intelligence',
          href: '/blog/ai-2025-synthetic-intelligence-revolution',
          badge: 'REVOLUTIONARY',
          color: 'from-purple-500 to-indigo-500'
        },
        {
          title: 'Quantum Computing Solutions',
          description: 'Revolutionary quantum processors solving complex problems 10,000x faster',
          href: '/quantum-computing-solutions-2025',
          badge: 'BREAKTHROUGH',
          color: 'from-blue-500 to-cyan-500'
        }
      ]
    },
    {
      title: 'AI 2026-2030 Future',
      description: 'Next-generation AI technologies and predictions',
      items: [
        {
          title: 'AI 2026 Quantum-Neural Fusion',
          description: 'Revolutionary quantum-neural fusion technology delivering 15,000% ROI',
          href: '/ai-2026-quantum-neural-fusion-breakthrough',
          badge: 'FUTURE',
          color: 'from-cyan-500 to-purple-500'
        },
        {
          title: 'AI 2027 Future Predictions',
          description: 'Comprehensive predictions for AI development in 2027',
          href: '/ai-2027-future-predictions-revolutionary',
          badge: 'PREDICTIONS',
          color: 'from-green-500 to-teal-500'
        },
        {
          title: 'AI 2030 Transcendent Intelligence',
          description: 'The future of AI with transcendent intelligence capabilities',
          href: '/ai-2030-transcendent-intelligence',
          badge: 'TRANSCENDENT',
          color: 'from-orange-500 to-red-500'
        }
      ]
    },
    {
      title: 'Success Stories',
      description: 'Real-world implementations and results',
      items: [
        {
          title: 'Global Enterprise Transformation',
          description: 'Fortune 500 company achieves 10,000% ROI with AI implementation',
          href: '/case-studies/ai-2025-global-transformation-breakthrough',
          badge: 'SUCCESS',
          color: 'from-green-500 to-emerald-500'
        },
        {
          title: 'Manufacturing Revolution',
          description: 'Leading manufacturer increases efficiency by 99.9% with autonomous operations',
          href: '/case-studies/ai-2025-manufacturing-transformation',
          badge: 'SUCCESS',
          color: 'from-blue-500 to-indigo-500'
        },
        {
          title: 'Healthcare Breakthrough',
          description: 'Major hospital system achieves 95% patient recovery rates',
          href: '/case-studies/ai-2025-healthcare-breakthrough',
          badge: 'SUCCESS',
          color: 'from-pink-500 to-rose-500'
        }
      ]
    },
    {
      title: 'Resources & Tools',
      description: 'Implementation guides and tools for AI adoption',
      items: [
        {
          title: 'AI Implementation Guide 2025',
          description: 'Comprehensive guide for implementing AI solutions in your organization',
          href: '/resources/ai-2025-implementation-guide',
          badge: 'GUIDE',
          color: 'from-purple-500 to-pink-500'
        },
        {
          title: 'ROI Calculator 2025',
          description: 'Calculate the potential ROI of AI implementation for your business',
          href: '/tools/ai-2025-roi-calculator',
          badge: 'TOOL',
          color: 'from-yellow-500 to-orange-500'
        },
        {
          title: 'Quantum Readiness Assessment',
          description: 'Assess your organization\'s readiness for quantum computing adoption',
          href: '/tools/quantum-readiness-assessment',
          badge: 'ASSESSMENT',
          color: 'from-cyan-500 to-blue-500'
        }
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 text-white">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-blue-600/20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="text-center">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
              Revolutionary Content Showcase 2025
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-gray-300 max-w-4xl mx-auto">
              Explore our comprehensive collection of revolutionary AI content, breakthrough technologies, 
              and success stories that are transforming industries worldwide.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href="#content-categories"
                className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white font-bold py-4 px-8 rounded-lg text-lg transition-all duration-300 transform hover:scale-105"
              >
                Explore Content
              </Link>
              <Link 
                href="/contact"
                className="border-2 border-white text-white hover:bg-white hover:text-purple-900 font-bold py-4 px-8 rounded-lg text-lg transition-all duration-300"
              >
                Get Started
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Content Categories Section */}
      <section id="content-categories" className="py-20 bg-black/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {contentCategories.map((category, categoryIndex) => (
            <div key={categoryIndex} className="mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-center mb-8 bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
                {category.title}
              </h2>
              <p className="text-xl text-center text-gray-300 mb-12 max-w-3xl mx-auto">
                {category.description}
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {category.items.map((item, itemIndex) => (
                  <div 
                    key={itemIndex}
                    className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 p-8 rounded-xl border border-gray-700/50 hover:border-purple-500/50 transition-all duration-300 transform hover:scale-105"
                  >
                    <div className="flex items-center justify-between mb-4">
                      <span className={`bg-gradient-to-r ${item.color} text-white px-3 py-1 rounded-full text-sm font-semibold`}>
                        {item.badge}
                      </span>
                    </div>
                    
                    <h3 className="text-xl font-bold mb-4 text-white">
                      {item.title}
                    </h3>
                    
                    <p className="text-gray-300 mb-6">
                      {item.description}
                    </p>
                    
                    <Link 
                      href={item.href}
                      className={`bg-gradient-to-r ${item.color} hover:opacity-90 text-white font-bold py-3 px-6 rounded-lg text-sm transition-all duration-300 inline-block`}
                    >
                      Learn More →
                    </Link>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Featured Content Section */}
      <section className="py-20 bg-gradient-to-r from-purple-900/30 to-blue-900/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent">
            Featured Content
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-gradient-to-br from-purple-800/50 to-blue-800/50 p-8 rounded-xl border border-purple-500/30">
              <h3 className="text-2xl font-bold mb-4 text-purple-300">Latest Breakthroughs</h3>
              <p className="text-gray-300 mb-6">
                Stay updated with the latest AI breakthroughs and revolutionary technologies 
                that are changing the world.
              </p>
              <Link 
                href="/blog"
                className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white font-bold py-3 px-6 rounded-lg transition-all duration-300"
              >
                Read Latest Articles
              </Link>
            </div>

            <div className="bg-gradient-to-br from-green-800/50 to-emerald-800/50 p-8 rounded-xl border border-green-500/30">
              <h3 className="text-2xl font-bold mb-4 text-green-300">Success Stories</h3>
              <p className="text-gray-300 mb-6">
                Discover how companies are achieving unprecedented success with our 
                AI solutions and technologies.
              </p>
              <Link 
                href="/case-studies"
                className="bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 text-white font-bold py-3 px-6 rounded-lg transition-all duration-300"
              >
                View Success Stories
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-20 bg-gradient-to-r from-purple-600 to-blue-600">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl mb-8 text-purple-100">
            Join thousands of companies already transforming their operations with our 
            revolutionary AI technologies and solutions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/contact"
              className="bg-white text-purple-600 hover:bg-gray-100 font-bold py-4 px-8 rounded-lg text-lg transition-all duration-300 transform hover:scale-105"
            >
              Start Your Transformation
            </Link>
            <Link 
              href="/resources"
              className="border-2 border-white text-white hover:bg-white hover:text-purple-600 font-bold py-4 px-8 rounded-lg text-lg transition-all duration-300"
            >
              Explore Resources
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black/50 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <p className="text-gray-400 mb-4">
              © 2025 Zion Tech Group. All rights reserved.
            </p>
            <div className="flex justify-center space-x-6">
              <Link href="/" className="text-gray-400 hover:text-white transition-colors">
                Home
              </Link>
              <Link href="/contact" className="text-gray-400 hover:text-white transition-colors">
                Contact
              </Link>
              <Link href="/privacy" className="text-gray-400 hover:text-white transition-colors">
                Privacy
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}