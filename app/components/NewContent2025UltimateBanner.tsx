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
import { ArrowRight, Star, TrendingUp, Users, Zap, ArrowRight } from 'lucide-react';

const NewContent2025UltimateBanner = () => {
  return (
    <section className="bg-gradient-to-r from-purple-900 via-blue-900 to-indigo-900 text-white py-16 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-blue-600 transform rotate-12 scale-150"></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-12">
          <div className="inline-flex items-center bg-white bg-opacity-20 rounded-full px-6 py-2 mb-6">
            <span className="text-sm font-medium">🚀 NEW CONTENT 2025</span>
          </div>
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            Revolutionary AI Content
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-400">
              Now Available
            </span>
          </h2>
          <p className="text-xl md:text-2xl opacity-90 mb-8 max-w-4xl mx-auto leading-relaxed">
            Discover cutting-edge AI insights, enterprise solutions, and transformative technologies 
            that are reshaping industries in 2025. Get exclusive access to our latest content.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {/* Data Analytics Revolution */}
          <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-xl p-8 border border-white border-opacity-20">
            <div className="text-4xl mb-4">📊</div>
            <h3 className="text-2xl font-bold mb-4">Data Analytics Revolution</h3>
            <p className="text-gray-200 mb-6">
              Transform your data into actionable intelligence with AI-powered analytics. 
              Achieve 500%+ ROI through advanced business intelligence solutions.
            </p>
            <div className="space-y-2 mb-6">
              <div className="flex items-center text-sm">
                <span className="w-2 h-2 bg-green-400 rounded-full mr-3"></span>
                <span>500%+ ROI Potential</span>
              </div>
              <div className="flex items-center text-sm">
                <span className="w-2 h-2 bg-blue-400 rounded-full mr-3"></span>
                <span>Real-Time Analytics</span>
              </div>
              <div className="flex items-center text-sm">
                <span className="w-2 h-2 bg-purple-400 rounded-full mr-3"></span>
                <span>Predictive Intelligence</span>
              </div>
            <div className="flex items-center text-sm text-green-400 mb-4">
              <TrendingUp className="w-4 h-4 mr-2" />
              <span>400% Average ROI Achieved</span>
            </div>
            <Link 
              href="/blog/ai-2025-data-analytics-revolution-enterprise-intelligence"
              className="inline-flex items-center bg-gradient-to-r from-green-500 to-blue-500 text-white px-6 py-3 rounded-lg font-semibold hover:from-green-600 hover:to-blue-600 transition-all duration-300 transform hover:scale-105"
            >
              Read Full Guide →
            </Link>
          </div>

          {/* Blockchain Integration */}
          <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-xl p-8 border border-white border-opacity-20">
            <div className="text-4xl mb-4">⛓️</div>
            <h3 className="text-2xl font-bold mb-4">Blockchain Integration</h3>
            <p className="text-gray-200 mb-6">
              Revolutionize your business with AI-powered blockchain solutions. 
              Achieve 600%+ ROI through intelligent decentralized systems.
            </p>
            <div className="space-y-2 mb-6">
              <div className="flex items-center text-sm">
                <span className="w-2 h-2 bg-green-400 rounded-full mr-3"></span>
                <span>600%+ ROI Potential</span>
              </div>
              <div className="flex items-center text-sm">
                <span className="w-2 h-2 bg-blue-400 rounded-full mr-3"></span>
                <span>Smart Contracts</span>
              </div>
              <div className="flex items-center text-sm">
                <span className="w-2 h-2 bg-purple-400 rounded-full mr-3"></span>
                <span>Decentralized Systems</span>
              </div>
            </div>
            <Link 
              href="/blog/ai-2025-blockchain-integration-revolution-enterprise-solutions"
              className="inline-flex items-center bg-gradient-to-r from-blue-500 to-purple-500 text-white px-6 py-3 rounded-lg font-semibold hover:from-blue-600 hover:to-purple-600 transition-all duration-300 transform hover:scale-105"
            >
              Explore Solutions →
            </Link>
          </div>

          {/* IoT Integration */}
          <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-xl p-8 border border-white border-opacity-20">
            <div className="text-4xl mb-4">🌐</div>
            <h3 className="text-2xl font-bold mb-4">IoT Integration</h3>
            <p className="text-gray-200 mb-6">
              Transform your enterprise with AI-powered IoT solutions. 
              Achieve 700%+ ROI through intelligent smart system automation.
            </p>
            <div className="space-y-2 mb-6">
              <div className="flex items-center text-sm">
                <span className="w-2 h-2 bg-green-400 rounded-full mr-3"></span>
                <span>700%+ ROI Potential</span>
              </div>
              <div className="flex items-center text-sm">
                <span className="w-2 h-2 bg-blue-400 rounded-full mr-3"></span>
                <span>Smart Systems</span>
              </div>
              <div className="flex items-center text-sm">
                <span className="w-2 h-2 bg-purple-400 rounded-full mr-3"></span>
                <span>Predictive Maintenance</span>
              </div>
            </div>
            <Link 
              href="/blog/ai-2025-iot-integration-revolution-smart-enterprise-systems"
              className="inline-flex items-center bg-gradient-to-r from-purple-500 to-pink-500 text-white px-6 py-3 rounded-lg font-semibold hover:from-purple-600 hover:to-pink-600 transition-all duration-300 transform hover:scale-105"
            >
              Learn More →
            </Link>
          </div>
        </div>

        {/* Additional Resources */}
        <div className="bg-white bg-opacity-5 backdrop-blur-sm rounded-xl p-8 border border-white border-opacity-20">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-2xl font-bold mb-4">Success Stories & Resources</h3>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-yellow-400 rounded-full mt-2"></div>
                  <div>
                    <h4 className="font-semibold">Enterprise Transformation Case Study</h4>
                    <p className="text-sm text-gray-300">500% ROI achieved in 18 months</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-yellow-400 rounded-full mt-2"></div>
                  <div>
                    <h4 className="font-semibold">Complete Implementation Guide</h4>
                    <p className="text-sm text-gray-300">Step-by-step enterprise roadmap</p>
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
        {/* Implementation Checklist */}
        <div className="bg-white bg-opacity-15 backdrop-blur-sm rounded-2xl p-8 border border-white border-opacity-20">
          <div className="flex items-center justify-between mb-6">
            <div>
              <h3 className="text-2xl font-bold mb-2">🎯 AI Implementation Checklist 2025</h3>
              <p className="text-gray-200">
                The definitive step-by-step guide to AI success. Don't miss any critical steps.
              </p>
            </div>
            <div className="flex flex-col justify-center">
              <div className="text-center">
                <div className="text-3xl font-bold text-yellow-400 mb-2">500+</div>
                <div className="text-gray-300 mb-4">Successful Implementations</div>
                <div className="text-3xl font-bold text-green-400 mb-2">400%+</div>
                <div className="text-gray-300 mb-6">Average ROI</div>
                <Link 
                  href="/case-studies"
                  className="inline-flex items-center bg-gradient-to-r from-yellow-500 to-orange-500 text-white px-8 py-3 rounded-lg font-semibold hover:from-yellow-600 hover:to-orange-600 transition-all duration-300 transform hover:scale-105"
                >
                  View All Resources →
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-12">
          <p className="text-lg text-gray-300 mb-6">
            Ready to transform your business with cutting-edge AI solutions?
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="bg-gradient-to-r from-green-500 to-blue-500 text-white px-8 py-4 rounded-lg font-semibold hover:from-green-600 hover:to-blue-600 transition-all duration-300 transform hover:scale-105"
            >
              Get Started Today
            </Link>
            <Link
              href="/services"
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-purple-900 transition-all duration-300"
            >
              Explore Services
            </Link>
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
        {/* Trust Indicators */}
        <div className="mt-12 text-center">
          <p className="text-gray-300 mb-4">Trusted by leading organizations worldwide</p>
          <div className="flex flex-wrap justify-center items-center gap-8 opacity-60">
            <div className="text-2xl font-bold">Fortune 500</div>
            <div className="text-2xl font-bold">Enterprise</div>
            <div className="text-2xl font-bold">Startups</div>
            <div className="text-2xl font-bold">Government</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NewContent2025UltimateBanner;