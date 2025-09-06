import React from 'react';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About | Zion Tech Group',
  description: 'Learn about Zion Tech Group\'s mission to deliver enterprise-grade AI, micro SaaS, and IT solutions that drive real business results.',
  keywords: 'about, company, mission, AI solutions, micro SaaS, IT services, enterprise technology'
};

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            About Zion Tech Group
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Pioneering the future of technology through innovative solutions and exceptional service.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          <div className="bg-slate-800 p-8 rounded-lg">
            <h2 className="text-2xl font-bold text-white mb-6">Our Mission</h2>
            <p className="text-gray-300 mb-6">
              We are dedicated to transforming businesses through cutting-edge AI, micro SaaS solutions, 
              and comprehensive IT services. Our mission is to make advanced technology accessible and 
              practical for companies of all sizes.
            </p>
            <p className="text-gray-300">
              By combining deep technical expertise with a client-first approach, we deliver solutions 
              that not only meet today's challenges but position our clients for tomorrow's opportunities.
            </p>
          </div>

          <div className="bg-slate-800 p-8 rounded-lg">
            <h2 className="text-2xl font-bold text-white mb-6">Our Vision</h2>
            <p className="text-gray-300 mb-6">
              To be the leading provider of AI-powered business solutions, enabling organizations to 
              achieve unprecedented efficiency, innovation, and growth through technology.
            </p>
            <p className="text-gray-300">
              We envision a future where every business, regardless of size, can leverage the power of 
              artificial intelligence and modern technology to compete and thrive in the digital economy.
            </p>
          </div>
        </div>

        <div className="bg-slate-800 p-8 rounded-lg mb-16">
          <h2 className="text-2xl font-bold text-white mb-6 text-center">Our Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🚀</span>
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Innovation</h3>
              <p className="text-gray-300">We constantly push the boundaries of what's possible with technology.</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🤝</span>
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Partnership</h3>
              <p className="text-gray-300">We work closely with our clients as trusted technology partners.</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">⭐</span>
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Excellence</h3>
              <p className="text-gray-300">We deliver exceptional quality in everything we do.</p>
            </div>
          </div>
        </div>

        <div className="text-center">
          <h2 className="text-3xl font-bold text-white mb-6">Ready to Work With Us?</h2>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Let's discuss how our expertise can help transform your business and drive real results.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/contact"
              className="bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
            >
              Get in Touch
            </a>
            <a
              href="/services"
              className="border border-blue-600 text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-blue-50 transition-colors"
            >
              View Our Services
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}