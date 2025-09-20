import React from 'react';
import { Metadata } from 'next';
import Link from 'next/link';
import SEO from './components/SEO';
import UltimateAI2025BreakthroughBanner from './components/UltimateAI2025BreakthroughBanner';
import AI2025UltimateContentShowcase from './components/AI2025UltimateContentShowcase';
import RevolutionaryAI2025Showcase from './components/RevolutionaryAI2025Showcase';
import UltimateAITransformation2025Banner from './components/UltimateAITransformation2025Banner';
import UltimateSuccess2025Banner from './components/UltimateSuccess2025Banner';
import ContactForm from './components/ContactForm';
import Testimonials from './components/Testimonials';
import TechnologyStack from './components/TechnologyStack';

export const metadata: Metadata = {
  title: 'Zion Tech Group - Revolutionary AI Solutions & Business Transformation',
  description: 'Leading provider of AI-powered business solutions, automation, analytics, and digital transformation. Transform your business with cutting-edge AI technologies.',
  keywords: [
    'AI solutions',
    'business transformation',
    'artificial intelligence',
    'automation',
    'analytics',
    'digital transformation',
    'machine learning',
    'quantum computing',
    'neural networks'
  ],
  openGraph: {
    title: 'Zion Tech Group - Revolutionary AI Solutions',
    description: 'Transform your business with cutting-edge AI technologies and automation solutions.',
    type: 'website',
    url: 'https://ziontechgroup.com',
  },
};

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <SEO
        title="Zion Tech Group - Revolutionary AI Solutions & Business Transformation"
        description="Leading provider of AI-powered business solutions, automation, analytics, and digital transformation. Transform your business with cutting-edge AI technologies."
        keywords="AI solutions, business transformation, artificial intelligence, automation, analytics, digital transformation, machine learning, quantum computing, neural networks"
        url="/"
      />
      
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900">
        <div className="container mx-auto px-4 py-20 text-center">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            Revolutionary AI Solutions
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-gray-300 max-w-4xl mx-auto">
            Transform your business with cutting-edge artificial intelligence, automation, and analytics. 
            Achieve unprecedented growth and efficiency with our advanced AI technologies.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-semibold transition-colors"
            >
              Get Started Today
            </Link>
            <Link
              href="/services"
              className="border border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-white px-8 py-4 rounded-lg font-semibold transition-colors"
            >
              Explore Solutions
            </Link>
          </div>
        </div>
      </section>

      {/* AI Breakthrough Banner */}
      <UltimateAI2025BreakthroughBanner />

      {/* Content Showcase */}
      <AI2025UltimateContentShowcase />

      {/* Revolutionary AI Showcase */}
      <RevolutionaryAI2025Showcase />

      {/* AI Transformation Banner */}
      <UltimateAITransformation2025Banner />

      {/* Success Stories */}
      <UltimateSuccess2025Banner />

      {/* Technology Stack */}
      <section className="py-20 bg-gray-800">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12">Our Technology Stack</h2>
          <TechnologyStack />
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-gray-900">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12">What Our Clients Say</h2>
          <Testimonials />
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-gradient-to-r from-purple-900 to-blue-900">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold text-center mb-8">Ready to Transform Your Business?</h2>
            <p className="text-xl text-center mb-12 text-gray-300">
              Get in touch with our AI experts and discover how we can help you achieve unprecedented growth.
            </p>
            <ContactForm />
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4">Zion Tech Group</h3>
              <p className="text-gray-400">
                Leading provider of AI-powered business solutions and digital transformation.
              </p>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Services</h4>
              <ul className="space-y-2 text-gray-400">
                <li><Link href="/ai-solutions" className="hover:text-white">AI Solutions</Link></li>
                <li><Link href="/automation" className="hover:text-white">Automation</Link></li>
                <li><Link href="/analytics" className="hover:text-white">Analytics</Link></li>
                <li><Link href="/consulting" className="hover:text-white">Consulting</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Resources</h4>
              <ul className="space-y-2 text-gray-400">
                <li><Link href="/blog" className="hover:text-white">Blog</Link></li>
                <li><Link href="/case-studies" className="hover:text-white">Case Studies</Link></li>
                <li><Link href="/tools" className="hover:text-white">Tools</Link></li>
                <li><Link href="/whitepapers" className="hover:text-white">Whitepapers</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Contact</h4>
              <ul className="space-y-2 text-gray-400">
                <li>Email: info@ziontechgroup.com</li>
                <li>Phone: +1 (555) 123-4567</li>
                <li>Address: 123 AI Street, Tech City, TC 12345</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2025 Zion Tech Group. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}