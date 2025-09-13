import React from 'react';
import SEO from '../../components/SEO';
import EnhancedServiceShowcase2025 from '../../components/EnhancedServiceShowcase2025';
import Link from 'next/link';
import { ArrowRight, Brain, Zap, Users, Rocket, Star, TrendingUp, Shield } from 'lucide-react';

export default function AIInnovationShowcase2025() {
  return (
    <>
      <SEO
        title="AI Innovation Showcase 2025 - Zion Tech Group"
        description="Discover our cutting-edge AI innovations and revolutionary technologies that are transforming industries in 2025. Explore autonomous systems, quantum AI, and next-generation solutions."
        keywords="AI innovation 2025, artificial intelligence showcase, autonomous systems, quantum AI, AI transformation, cutting-edge technology"
        url="/ai-innovation-showcase-2025"
      />
      
      <div className="min-h-screen bg-white">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-purple-900 via-blue-900 to-indigo-900 text-white py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <div className="inline-flex items-center bg-gradient-to-r from-purple-500 to-blue-500 text-white px-6 py-3 rounded-full text-sm font-semibold mb-6 animate-pulse">
                <Brain className="w-4 h-4 mr-2" />
                AI INNOVATION SHOWCASE 2025
              </div>
              
              <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
                The Future of
                <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent block">
                  AI is Here
                </span>
              </h1>
              
              <p className="text-xl md:text-2xl text-purple-200 mb-8 max-w-4xl mx-auto leading-relaxed">
                Experience the most advanced AI innovations of 2025. From autonomous systems to quantum-enhanced intelligence, 
                we're revolutionizing how businesses operate and compete in the digital age.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link 
                  href="#services"
                  className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 transform hover:scale-105 shadow-2xl flex items-center group"
                >
                  Explore Innovations
                  <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                </Link>
                
                <Link 
                  href="/contact"
                  className="bg-white/20 backdrop-blur-sm border border-white/30 hover:bg-white/30 text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 flex items-center"
                >
                  Schedule Demo
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Innovation Stats */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="text-4xl md:text-5xl font-bold text-purple-600 mb-2">500+</div>
                <div className="text-gray-600 text-sm">AI Innovations</div>
              </div>
              
              <div className="text-center">
                <div className="text-4xl md:text-5xl font-bold text-blue-600 mb-2">150+</div>
                <div className="text-gray-600 text-sm">Enterprise Clients</div>
              </div>
              
              <div className="text-center">
                <div className="text-4xl md:text-5xl font-bold text-indigo-600 mb-2">99.9%</div>
                <div className="text-gray-600 text-sm">Uptime Guarantee</div>
              </div>
              
              <div className="text-center">
                <div className="text-4xl md:text-5xl font-bold text-cyan-600 mb-2">24/7</div>
                <div className="text-gray-600 text-sm">AI Support</div>
              </div>
            </div>
          </div>
        </section>

        {/* Key Innovations */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                Revolutionary AI Innovations
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Our breakthrough technologies are setting new standards for artificial intelligence and transforming industries worldwide.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow">
                <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-blue-500 rounded-xl flex items-center justify-center mb-6">
                  <Brain className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">Autonomous AI Systems</h3>
                <p className="text-gray-600 mb-4">
                  Self-evolving AI systems with 99.9% reliability and autonomous decision-making capabilities.
                </p>
                <div className="flex items-center text-sm text-purple-600 font-semibold">
                  <TrendingUp className="w-4 h-4 mr-1" />
                  +1200% ROI
                </div>
              </div>

              <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow">
                <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-xl flex items-center justify-center mb-6">
                  <Zap className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">Quantum AI Processing</h3>
                <p className="text-gray-600 mb-4">
                  Quantum-enhanced algorithms delivering 1000x performance improvements for complex computations.
                </p>
                <div className="flex items-center text-sm text-blue-600 font-semibold">
                  <TrendingUp className="w-4 h-4 mr-1" />
                  +1000x Speed
                </div>
              </div>

              <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow">
                <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-emerald-500 rounded-xl flex items-center justify-center mb-6">
                  <Users className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">AI Agent Orchestration</h3>
                <p className="text-gray-600 mb-4">
                  Intelligent multi-agent coordination systems for enterprise-scale AI deployments.
                </p>
                <div className="flex items-center text-sm text-green-600 font-semibold">
                  <TrendingUp className="w-4 h-4 mr-1" />
                  +500% Efficiency
                </div>
              </div>

              <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow">
                <div className="w-16 h-16 bg-gradient-to-r from-orange-500 to-red-500 rounded-xl flex items-center justify-center mb-6">
                  <Rocket className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">Edge AI Computing</h3>
                <p className="text-gray-600 mb-4">
                  Ultra-fast edge computing solutions with real-time processing and minimal latency.
                </p>
                <div className="flex items-center text-sm text-orange-600 font-semibold">
                  <TrendingUp className="w-4 h-4 mr-1" />
                  +90% Speed
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Enhanced Services Showcase */}
        <section id="services">
          <EnhancedServiceShowcase2025 />
        </section>

        {/* Technology Comparison */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                Our AI vs Traditional Solutions
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                See how our revolutionary AI innovations compare to traditional solutions in the market.
              </p>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full bg-white rounded-2xl shadow-xl overflow-hidden">
                <thead className="bg-gradient-to-r from-purple-600 to-blue-600 text-white">
                  <tr>
                    <th className="px-6 py-4 text-left font-semibold">Feature</th>
                    <th className="px-6 py-4 text-center font-semibold">Traditional AI</th>
                    <th className="px-6 py-4 text-center font-semibold">Our AI Innovation</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  <tr>
                    <td className="px-6 py-4 font-medium text-gray-900">Processing Speed</td>
                    <td className="px-6 py-4 text-center text-gray-600">Standard</td>
                    <td className="px-6 py-4 text-center text-green-600 font-semibold">1000x Faster</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 font-medium text-gray-900">Autonomy Level</td>
                    <td className="px-6 py-4 text-center text-gray-600">Semi-Automated</td>
                    <td className="px-6 py-4 text-center text-green-600 font-semibold">Fully Autonomous</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 font-medium text-gray-900">Reliability</td>
                    <td className="px-6 py-4 text-center text-gray-600">95-98%</td>
                    <td className="px-6 py-4 text-center text-green-600 font-semibold">99.9%</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 font-medium text-gray-900">Scalability</td>
                    <td className="px-6 py-4 text-center text-gray-600">Limited</td>
                    <td className="px-6 py-4 text-center text-green-600 font-semibold">Unlimited</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 font-medium text-gray-900">ROI Potential</td>
                    <td className="px-6 py-4 text-center text-gray-600">100-200%</td>
                    <td className="px-6 py-4 text-center text-green-600 font-semibold">500-1200%</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-20 bg-gradient-to-r from-purple-900 via-blue-900 to-indigo-900 text-white">
          <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Ready to Experience the Future?
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Don't let your competitors get ahead. Be among the first to experience revolutionary AI technology that will transform your business.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href="/contact"
                className="bg-white text-purple-600 hover:bg-gray-100 px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 flex items-center justify-center group"
              >
                Schedule Demo
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
              
              <Link 
                href="/services"
                className="border border-white/30 hover:bg-white/10 px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 flex items-center justify-center"
              >
                View All Services
              </Link>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}