import React from 'react';
import Link from 'next/link';

const NewContent2025UltimateBanner: React.FC = () => {
  return (
    <section className="bg-gradient-to-br from-emerald-900 via-teal-900 to-cyan-900 text-white py-20 relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-full bg-[url('data:image/svg+xml,%3Csvg width="80" height="80" viewBox="0 0 80 80" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%23ffffff" fill-opacity="0.05"%3E%3Cpath d="M40 40c0-22.091-17.909-40-40-40v40h40z"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] animate-pulse"></div>
        <div className="absolute top-0 right-0 w-full h-full bg-[url('data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%23ffffff" fill-opacity="0.03"%3E%3Ccircle cx="30" cy="30" r="1.5"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] animate-bounce"></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center mb-16">
          <div className="inline-flex items-center bg-gradient-to-r from-emerald-500 via-teal-500 to-cyan-500 rounded-full px-8 py-3 mb-8">
            <span className="text-lg font-bold">🚀 NEW CONTENT 2025 - ULTIMATE COLLECTION</span>
          </div>
          
          <h2 className="text-5xl md:text-7xl font-bold mb-8 bg-gradient-to-r from-white via-emerald-200 to-cyan-200 bg-clip-text text-transparent leading-tight">
            Revolutionary AI Content
          </h2>
          
          <p className="text-2xl md:text-3xl opacity-90 mb-12 max-w-5xl mx-auto leading-relaxed">
            Discover our latest comprehensive guides, case studies, and resources covering 
            Edge Computing, Blockchain Integration, IoT Revolution, and real-world success stories.
          </p>
        </div>

        {/* New Content Showcase Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          {/* Edge Computing Guide */}
          <div className="bg-gradient-to-br from-emerald-800 to-teal-800 rounded-2xl p-8 border border-emerald-400 border-opacity-30">
            <div className="text-5xl mb-6 text-center">⚡</div>
            <h3 className="text-2xl font-bold mb-4 text-center">Edge Computing Revolution</h3>
            <ul className="space-y-3 text-emerald-100">
              <li className="flex items-center">
                <span className="text-green-400 mr-3">✓</span>
                500%+ ROI within 12 months
              </li>
              <li className="flex items-center">
                <span className="text-green-400 mr-3">✓</span>
                90% latency reduction
              </li>
              <li className="flex items-center">
                <span className="text-green-400 mr-3">✓</span>
                Real-time processing
              </li>
              <li className="flex items-center">
                <span className="text-green-400 mr-3">✓</span>
                Enterprise implementation guide
              </li>
            </ul>
            <div className="mt-6 text-center">
              <Link 
                href="/blog/ai-2025-edge-computing-revolution-ultimate-guide"
                className="inline-flex items-center bg-gradient-to-r from-emerald-500 to-teal-500 text-white px-6 py-3 rounded-lg font-semibold hover:from-emerald-600 hover:to-teal-600 transition-all duration-300 transform hover:scale-105"
              >
                Read Full Guide →
              </Link>
            </div>
          </div>

          {/* Blockchain Integration Guide */}
          <div className="bg-gradient-to-br from-teal-800 to-cyan-800 rounded-2xl p-8 border border-teal-400 border-opacity-30">
            <div className="text-5xl mb-6 text-center">🔗</div>
            <h3 className="text-2xl font-bold mb-4 text-center">Blockchain Integration</h3>
            <ul className="space-y-3 text-teal-100">
              <li className="flex items-center">
                <span className="text-green-400 mr-3">✓</span>
                600%+ ROI within 12 months
              </li>
              <li className="flex items-center">
                <span className="text-green-400 mr-3">✓</span>
                89% cost reduction
              </li>
              <li className="flex items-center">
                <span className="text-green-400 mr-3">✓</span>
                Smart contract automation
              </li>
              <li className="flex items-center">
                <span className="text-green-400 mr-3">✓</span>
                Enterprise security solutions
              </li>
            </ul>
            <div className="mt-6 text-center">
              <Link 
                href="/blog/ai-2025-blockchain-integration-enterprise-guide"
                className="inline-flex items-center bg-gradient-to-r from-teal-500 to-cyan-500 text-white px-6 py-3 rounded-lg font-semibold hover:from-teal-600 hover:to-cyan-600 transition-all duration-300 transform hover:scale-105"
              >
                Read Full Guide →
              </Link>
            </div>
          </div>

          {/* IoT Revolution Guide */}
          <div className="bg-gradient-to-br from-cyan-800 to-blue-800 rounded-2xl p-8 border border-cyan-400 border-opacity-30">
            <div className="text-5xl mb-6 text-center">🌐</div>
            <h3 className="text-2xl font-bold mb-4 text-center">IoT Revolution</h3>
            <ul className="space-y-3 text-cyan-100">
              <li className="flex items-center">
                <span className="text-green-400 mr-3">✓</span>
                700%+ ROI within 12 months
              </li>
              <li className="flex items-center">
                <span className="text-green-400 mr-3">✓</span>
                95% efficiency improvement
              </li>
              <li className="flex items-center">
                <span className="text-green-400 mr-3">✓</span>
                Smart device management
              </li>
              <li className="flex items-center">
                <span className="text-green-400 mr-3">✓</span>
                Connected automation
              </li>
            </ul>
            <div className="mt-6 text-center">
              <Link 
                href="/blog/ai-2025-iot-revolution-smart-enterprise-guide"
                className="inline-flex items-center bg-gradient-to-r from-cyan-500 to-blue-500 text-white px-6 py-3 rounded-lg font-semibold hover:from-cyan-600 hover:to-blue-600 transition-all duration-300 transform hover:scale-105"
              >
                Read Full Guide →
              </Link>
            </div>
          </div>
        </div>

        {/* Case Studies Section */}
        <div className="bg-gradient-to-r from-emerald-800 to-cyan-800 rounded-2xl p-8 mb-16">
          <div className="text-center mb-8">
            <h3 className="text-3xl font-bold mb-4">Real-World Success Stories</h3>
            <p className="text-xl opacity-90">Discover how leading enterprises achieved exceptional results with our AI solutions</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white bg-opacity-10 rounded-xl p-6">
              <h4 className="text-xl font-bold mb-3">Global Manufacturing Giant</h4>
              <ul className="space-y-2 text-emerald-100">
                <li>• 500% ROI within 18 months</li>
                <li>• $50M annual savings</li>
                <li>• 95% efficiency improvement</li>
                <li>• Industry leadership position</li>
              </ul>
              <div className="mt-4">
                <Link 
                  href="/case-studies/global-manufacturing-ai-transformation"
                  className="text-emerald-300 hover:text-emerald-200 font-semibold"
                >
                  Read Full Case Study →
                </Link>
              </div>
            </div>
            
            <div className="bg-white bg-opacity-10 rounded-xl p-6">
              <h4 className="text-xl font-bold mb-3">Financial Services Leader</h4>
              <ul className="space-y-2 text-emerald-100">
                <li>• 600% ROI within 20 months</li>
                <li>• $75M annual savings</li>
                <li>• 98% customer satisfaction</li>
                <li>• Market leadership position</li>
              </ul>
              <div className="mt-4">
                <Link 
                  href="/case-studies/financial-services-ai-revolution"
                  className="text-emerald-300 hover:text-emerald-200 font-semibold"
                >
                  Read Full Case Study →
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Resources Section */}
        <div className="text-center">
          <h3 className="text-3xl font-bold mb-8">Free Implementation Resources</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="bg-gradient-to-r from-emerald-700 to-teal-700 rounded-xl p-6">
              <h4 className="text-xl font-bold mb-3">AI Transformation Checklist</h4>
              <p className="text-emerald-100 mb-4">Complete step-by-step guide for successful AI implementation</p>
              <Link 
                href="/resources/ai-transformation-checklist-2025"
                className="inline-flex items-center bg-white text-emerald-700 px-6 py-3 rounded-lg font-semibold hover:bg-emerald-50 transition-all duration-300"
              >
                Download Free Guide →
              </Link>
            </div>
            
            <div className="bg-gradient-to-r from-teal-700 to-cyan-700 rounded-xl p-6">
              <h4 className="text-xl font-bold mb-3">Expert Consultation</h4>
              <p className="text-teal-100 mb-4">Get personalized guidance for your AI transformation journey</p>
              <Link 
                href="/contact"
                className="inline-flex items-center bg-white text-teal-700 px-6 py-3 rounded-lg font-semibold hover:bg-teal-50 transition-all duration-300"
              >
                Schedule Consultation →
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NewContent2025UltimateBanner;