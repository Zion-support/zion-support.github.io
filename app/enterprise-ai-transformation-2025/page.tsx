import React from 'react';
import Link from 'next/link';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Enterprise AI Transformation 2025 - Complete Business Revolution',
  description: 'Comprehensive enterprise AI transformation solutions. Complete business revolution with AI-powered systems, digital transformation, and intelligent automation for Fortune 500 companies.',
  keywords: ['Enterprise AI', 'Business Transformation', 'Digital Transformation', 'Fortune 500', 'AI Enterprise', 'Business Revolution'],
  openGraph: {
    title: 'Enterprise AI Transformation 2025 - Complete Business Revolution',
    description: 'Comprehensive enterprise AI transformation solutions for Fortune 500 companies.',
    images: ['/og-enterprise-ai-transformation-2025.png'],
  },
};

export default function EnterpriseAITransformation2025() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-gray-50 to-zinc-50">
      {/* Hero Section */}
      <section className="relative py-20 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-slate-600/10 to-gray-600/10"></div>
        <div className="max-w-7xl mx-auto text-center relative z-10">
          <div className="inline-flex items-center px-6 py-3 rounded-full bg-gradient-to-r from-slate-500 to-gray-500 text-white text-sm font-semibold mb-6 animate-pulse">
            🏢 ENTERPRISE AI 2025
          </div>
          <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-6">
            Enterprise AI
            <span className="block bg-gradient-to-r from-slate-600 to-gray-600 bg-clip-text text-transparent">
              Transformation 2025
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-4xl mx-auto">
            Revolutionize your enterprise with comprehensive AI transformation solutions. 
            Complete business overhaul with intelligent systems, autonomous operations, 
            and data-driven decision making that delivers unprecedented competitive advantage.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="#transformation-solutions" 
              className="px-8 py-4 bg-gradient-to-r from-slate-600 to-gray-600 text-white rounded-lg font-semibold hover:shadow-lg transition-all duration-300 transform hover:scale-105"
            >
              Explore Transformation Solutions
            </Link>
            <Link 
              href="#enterprise-case-studies" 
              className="px-8 py-4 border-2 border-slate-600 text-slate-600 rounded-lg font-semibold hover:bg-slate-600 hover:text-white transition-all duration-300"
            >
              View Enterprise Success Stories
            </Link>
          </div>
        </div>
      </section>

      {/* Transformation Solutions */}
      <section id="transformation-solutions" className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Enterprise AI Transformation Solutions
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive AI solutions designed for large-scale enterprise transformation
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Digital Transformation Platform */}
            <div className="bg-gradient-to-br from-slate-50 to-gray-50 rounded-2xl p-8 hover:shadow-xl transition-all duration-300 transform hover:scale-105">
              <div className="text-4xl mb-4">🔄</div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Digital Transformation Platform</h3>
              <p className="text-gray-600 mb-6">
                Complete digital transformation solution that modernizes legacy systems and integrates AI across all business functions.
              </p>
              <div className="bg-white rounded-lg p-4 mb-6">
                <div className="h-32 bg-gradient-to-r from-slate-200 to-gray-200 rounded-lg flex items-center justify-center">
                  <span className="text-gray-500">Transformation Demo</span>
                </div>
              </div>
              <div className="space-y-2 mb-6">
                <div className="flex justify-between text-sm">
                  <span>Implementation Time:</span>
                  <span className="font-semibold text-slate-600">6-12 Months</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span>ROI:</span>
                  <span className="font-semibold text-gray-600">2000%</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span>Efficiency Gain:</span>
                  <span className="font-semibold text-green-600">400%</span>
                </div>
              </div>
              <Link 
                href="/demos/digital-transformation" 
                className="inline-block w-full text-center px-6 py-3 bg-slate-600 text-white rounded-lg font-semibold hover:bg-slate-700 transition-colors"
              >
                View Transformation Demo
              </Link>
            </div>

            {/* Enterprise AI Suite */}
            <div className="bg-gradient-to-br from-gray-50 to-zinc-50 rounded-2xl p-8 hover:shadow-xl transition-all duration-300 transform hover:scale-105">
              <div className="text-4xl mb-4">🧠</div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Enterprise AI Suite</h3>
              <p className="text-gray-600 mb-6">
                Comprehensive AI platform with machine learning, natural language processing, and predictive analytics.
              </p>
              <div className="bg-white rounded-lg p-4 mb-6">
                <div className="h-32 bg-gradient-to-r from-gray-200 to-zinc-200 rounded-lg flex items-center justify-center">
                  <span className="text-gray-500">AI Suite Demo</span>
                </div>
              </div>
              <div className="space-y-2 mb-6">
                <div className="flex justify-between text-sm">
                  <span>AI Models:</span>
                  <span className="font-semibold text-gray-600">1000+</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span>Data Processing:</span>
                  <span className="font-semibold text-zinc-600">1TB/s</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span>Accuracy:</span>
                  <span className="font-semibold text-green-600">99.9%</span>
                </div>
              </div>
              <Link 
                href="/demos/enterprise-ai-suite" 
                className="inline-block w-full text-center px-6 py-3 bg-gray-600 text-white rounded-lg font-semibold hover:bg-gray-700 transition-colors"
              >
                Try AI Suite
              </Link>
            </div>

            {/* Intelligent Automation */}
            <div className="bg-gradient-to-br from-zinc-50 to-stone-50 rounded-2xl p-8 hover:shadow-xl transition-all duration-300 transform hover:scale-105">
              <div className="text-4xl mb-4">⚙️</div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Intelligent Automation</h3>
              <p className="text-gray-600 mb-6">
                Advanced automation systems that handle complex business processes with intelligent decision making.
              </p>
              <div className="bg-white rounded-lg p-4 mb-6">
                <div className="h-32 bg-gradient-to-r from-zinc-200 to-stone-200 rounded-lg flex items-center justify-center">
                  <span className="text-gray-500">Automation Demo</span>
                </div>
              </div>
              <div className="space-y-2 mb-6">
                <div className="flex justify-between text-sm">
                  <span>Process Coverage:</span>
                  <span className="font-semibold text-zinc-600">95%</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span>Cost Reduction:</span>
                  <span className="font-semibold text-stone-600">80%</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span>Error Rate:</span>
                  <span className="font-semibold text-green-600">0.01%</span>
                </div>
              </div>
              <Link 
                href="/demos/intelligent-automation" 
                className="inline-block w-full text-center px-6 py-3 bg-zinc-600 text-white rounded-lg font-semibold hover:bg-zinc-700 transition-colors"
              >
                Try Automation Demo
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Enterprise Case Studies */}
      <section id="enterprise-case-studies" className="py-20 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Fortune 500 Success Stories
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Real-world transformations delivering extraordinary results for leading enterprises
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Fortune 100 Manufacturing */}
            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300">
              <div className="flex items-center mb-6">
                <div className="text-3xl mr-4">🏭</div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-900">Fortune 100 Manufacturing</h3>
                  <p className="text-gray-600">Complete Enterprise AI Transformation</p>
                </div>
              </div>
              <div className="bg-gradient-to-r from-slate-100 to-gray-100 rounded-lg p-4 mb-6">
                <div className="text-3xl font-bold text-slate-600">$2.5B Revenue Increase</div>
                <div className="text-slate-700">in first year post-transformation</div>
              </div>
              <p className="text-gray-600 mb-6">
                Implemented comprehensive AI transformation across all manufacturing operations, 
                supply chain, and customer service, resulting in unprecedented growth and efficiency.
              </p>
              <div className="flex flex-wrap gap-2 mb-6">
                <span className="px-3 py-1 bg-slate-100 text-slate-800 rounded-full text-sm">Supply Chain AI</span>
                <span className="px-3 py-1 bg-gray-100 text-gray-800 rounded-full text-sm">Predictive Maintenance</span>
                <span className="px-3 py-1 bg-zinc-100 text-zinc-800 rounded-full text-sm">Customer Intelligence</span>
              </div>
              <Link 
                href="/case-studies/fortune-100-manufacturing-transformation" 
                className="inline-block px-6 py-3 bg-slate-600 text-white rounded-lg font-semibold hover:bg-slate-700 transition-colors"
              >
                Read Full Case Study
              </Link>
            </div>

            {/* Global Financial Services */}
            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300">
              <div className="flex items-center mb-6">
                <div className="text-3xl mr-4">🏦</div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-900">Global Financial Services</h3>
                  <p className="text-gray-600">AI-Powered Financial Revolution</p>
                </div>
              </div>
              <div className="bg-gradient-to-r from-gray-100 to-zinc-100 rounded-lg p-4 mb-6">
                <div className="text-3xl font-bold text-gray-600">$5.8B Cost Savings</div>
                <div className="text-gray-700">through AI automation</div>
              </div>
              <p className="text-gray-600 mb-6">
                Deployed enterprise-wide AI systems for risk management, fraud detection, 
                and automated trading, revolutionizing their entire financial operations.
              </p>
              <div className="flex flex-wrap gap-2 mb-6">
                <span className="px-3 py-1 bg-gray-100 text-gray-800 rounded-full text-sm">Risk Management</span>
                <span className="px-3 py-1 bg-zinc-100 text-zinc-800 rounded-full text-sm">Fraud Detection</span>
                <span className="px-3 py-1 bg-stone-100 text-stone-800 rounded-full text-sm">Automated Trading</span>
              </div>
              <Link 
                href="/case-studies/global-financial-ai-transformation" 
                className="inline-block px-6 py-3 bg-gray-600 text-white rounded-lg font-semibold hover:bg-gray-700 transition-colors"
              >
                Read Full Case Study
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Enterprise Capabilities */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Enterprise AI Capabilities
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive AI capabilities designed for enterprise-scale transformation
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: '🔄', title: 'Digital Transformation', desc: 'Complete modernization of legacy systems' },
              { icon: '🧠', title: 'Enterprise AI', desc: 'Scalable AI solutions for large organizations' },
              { icon: '⚙️', title: 'Intelligent Automation', desc: 'Advanced process automation and optimization' },
              { icon: '📊', title: 'Data Intelligence', desc: 'Advanced analytics and business intelligence' },
            ].map((capability, index) => (
              <div key={index} className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-xl p-6 text-center hover:shadow-lg transition-all duration-300">
                <div className="text-4xl mb-4">{capability.icon}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{capability.title}</h3>
                <p className="text-gray-600">{capability.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-slate-600 to-gray-600">
        <div className="max-w-4xl mx-auto text-center text-white">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Ready for Enterprise AI Transformation?
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Join Fortune 500 companies in revolutionizing their business with comprehensive AI transformation solutions
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/contact" 
              className="px-8 py-4 bg-white text-slate-600 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-300 transform hover:scale-105"
            >
              Start Enterprise Transformation
            </Link>
            <Link 
              href="/enterprise-ai-transformation-guide-2025" 
              className="px-8 py-4 border-2 border-white text-white rounded-lg font-semibold hover:bg-white hover:text-slate-600 transition-all duration-300"
            >
              Download Enterprise Guide
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}