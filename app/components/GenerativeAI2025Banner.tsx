import React from 'react';
import Link from 'next/link';

const GenerativeAI2025Banner = () => {
  return (
    <section className="relative bg-gradient-to-r from-indigo-900 via-purple-900 to-pink-900 text-white py-16 overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-0 animate-pulse" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Cpath d='M50 50c0-27.614-22.386-50-50-50v100c27.614 0 50-22.386 50-50z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }} />
      </div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="inline-flex items-center bg-white bg-opacity-20 rounded-full px-6 py-2 mb-6">
            <span className="text-sm font-medium">🤖 GENERATIVE AI REVOLUTION 2025</span>
          </div>
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            Generative AI Enterprise Revolution
          </h2>
          <p className="text-xl md:text-2xl opacity-90 mb-8 max-w-4xl mx-auto leading-relaxed">
            Transform your business with <span className="text-yellow-400 font-bold">340% average ROI</span> through strategic generative AI implementation. 
            The future of enterprise is AI-powered.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Features */}
          <div className="space-y-8">
            <div className="bg-white bg-opacity-10 rounded-xl p-6 backdrop-blur-sm">
              <h3 className="text-2xl font-bold mb-4 text-yellow-400">Revolutionary Capabilities</h3>
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="bg-green-500 rounded-full p-1 mr-4 mt-1">
                    <div className="w-2 h-2 bg-white rounded-full"></div>
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg">Autonomous Content Generation</h4>
                    <p className="text-sm opacity-80">Dynamic marketing content that adapts to audience preferences</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="bg-blue-500 rounded-full p-1 mr-4 mt-1">
                    <div className="w-2 h-2 bg-white rounded-full"></div>
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg">Intelligent Process Automation</h4>
                    <p className="text-sm opacity-80">Smart workflows that learn and optimize continuously</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="bg-purple-500 rounded-full p-1 mr-4 mt-1">
                    <div className="w-2 h-2 bg-white rounded-full"></div>
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg">Advanced Customer Experience</h4>
                    <p className="text-sm opacity-80">Conversational AI that understands context and emotion</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="bg-white bg-opacity-10 rounded-lg p-4 text-center backdrop-blur-sm">
                <div className="text-2xl font-bold text-green-400">67%</div>
                <div className="text-sm opacity-80">Content Creation Time Reduction</div>
              </div>
              <div className="bg-white bg-opacity-10 rounded-lg p-4 text-center backdrop-blur-sm">
                <div className="text-2xl font-bold text-blue-400">89%</div>
                <div className="text-sm opacity-80">Customer Service Improvement</div>
              </div>
            </div>
          </div>

          {/* Right Column - CTA */}
          <div className="space-y-6">
            <div className="bg-white bg-opacity-10 rounded-xl p-8 backdrop-blur-sm">
              <h3 className="text-2xl font-bold mb-4">Start Your AI Transformation</h3>
              <p className="text-lg mb-6 opacity-90">
                Join thousands of enterprises already transforming their operations with generative AI.
              </p>
              
              <div className="space-y-4">
                <Link
                  href="/blog/ai-2025-generative-ai-enterprise-revolution-ultimate-breakthrough"
                  className="block w-full bg-gradient-to-r from-pink-500 to-purple-500 text-white px-8 py-4 rounded-lg font-bold text-center hover:from-pink-400 hover:to-purple-400 transition-all duration-300 transform hover:scale-105"
                >
                  Read Complete Guide
                </Link>
                
                <Link
                  href="/services/ai-automation"
                  className="block w-full border-2 border-white text-white px-8 py-4 rounded-lg font-bold text-center hover:bg-white hover:text-purple-900 transition-all duration-300"
                >
                  Explore AI Solutions
                </Link>
                
                <Link
                  href="/contact"
                  className="block w-full bg-white bg-opacity-20 text-white px-8 py-4 rounded-lg font-bold text-center hover:bg-opacity-30 transition-all duration-300"
                >
                  Get Free Consultation
                </Link>
              </div>
            </div>

            <div className="bg-gradient-to-r from-yellow-400 to-orange-400 text-black rounded-lg p-4 text-center">
              <p className="font-bold text-lg">Limited Time Offer</p>
              <p className="text-sm">Free AI Readiness Assessment - $5,000 Value</p>
            </div>
          </div>
        </div>

        {/* Bottom Features */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center">
            <div className="bg-white bg-opacity-10 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 backdrop-blur-sm">
              <span className="text-2xl">🎯</span>
            </div>
            <h4 className="text-lg font-semibold mb-2">Targeted Implementation</h4>
            <p className="text-sm opacity-80">Custom AI solutions tailored to your specific business needs</p>
          </div>
          <div className="text-center">
            <div className="bg-white bg-opacity-10 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 backdrop-blur-sm">
              <span className="text-2xl">⚡</span>
            </div>
            <h4 className="text-lg font-semibold mb-2">Rapid Deployment</h4>
            <p className="text-sm opacity-80">Quick implementation with measurable results in weeks, not months</p>
          </div>
          <div className="text-center">
            <div className="bg-white bg-opacity-10 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 backdrop-blur-sm">
              <span className="text-2xl">🛡️</span>
            </div>
            <h4 className="text-lg font-semibold mb-2">Enterprise Security</h4>
            <p className="text-sm opacity-80">Bank-level security with comprehensive compliance and governance</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GenerativeAI2025Banner;