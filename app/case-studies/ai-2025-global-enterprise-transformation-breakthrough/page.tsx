import React from 'react';
import Link from 'next/link';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'AI 2025 Global Enterprise Transformation - 1,200% ROI Success Story',
  description: 'Discover how a Fortune 500 company achieved 1,200% ROI through AI 2025 implementation, transforming their global operations with synthetic intelligence and autonomous systems.',
  keywords: [
    'AI 2025 case study',
    '1,200% ROI',
    'enterprise transformation',
    'Fortune 500 success',
    'global operations',
    'synthetic intelligence',
    'autonomous systems',
    'business transformation',
    'AI implementation',
    'success story'
  ],
  openGraph: {
    title: 'AI 2025 Global Enterprise Transformation - 1,200% ROI Success',
    description: 'Fortune 500 company achieves 1,200% ROI through revolutionary AI 2025 implementation across global operations.',
    type: 'article',
    images: ['/og-enterprise-transformation.png']
  }
};

export default function AI2025GlobalEnterpriseTransformationBreakthrough() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 text-white">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-green-600/20 to-blue-600/20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="text-center">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-green-500/20 border border-green-500/30 mb-8">
              <span className="text-green-400 font-semibold text-sm uppercase tracking-wider">
                🏆 SUCCESS STORY
              </span>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold mb-8 bg-gradient-to-r from-green-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">
              Global Enterprise Transformation
            </h1>
            
            <p className="text-2xl md:text-3xl font-semibold mb-4 text-blue-200">
              Fortune 500 Company Achieves
            </p>
            
            <div className="text-6xl md:text-8xl font-black mb-8 bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent">
              1,200% ROI
            </div>
            
            <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto mb-12">
              Through revolutionary AI 2025 implementation across global operations, 
              transforming manufacturing, supply chain, and customer experience.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="#case-study"
                className="bg-gradient-to-r from-green-500 to-blue-500 text-white px-8 py-4 rounded-lg font-semibold hover:from-green-600 hover:to-blue-600 transition-all duration-300 transform hover:scale-105"
              >
                Read Full Case Study
              </Link>
              <Link
                href="/contact"
                className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-slate-900 transition-all duration-300"
              >
                Start Your Transformation
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Company Overview */}
      <div className="py-20 bg-black/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Company Overview
              </h2>
              <div className="space-y-4 text-gray-300">
                <p className="text-lg">
                  <strong className="text-white">Industry:</strong> Global Manufacturing & Technology
                </p>
                <p className="text-lg">
                  <strong className="text-white">Size:</strong> 150,000+ employees across 47 countries
                </p>
                <p className="text-lg">
                  <strong className="text-white">Revenue:</strong> $45+ billion annually
                </p>
                <p className="text-lg">
                  <strong className="text-white">Challenge:</strong> Legacy systems, operational inefficiencies, 
                  and manual processes across global operations
                </p>
              </div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
              <h3 className="text-2xl font-bold text-white mb-6">Key Metrics</h3>
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-green-400 mb-2">1,200%</div>
                  <div className="text-sm text-gray-300">ROI Achieved</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-400 mb-2">$2.1B</div>
                  <div className="text-sm text-gray-300">Cost Savings</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-purple-400 mb-2">85%</div>
                  <div className="text-sm text-gray-300">Efficiency Gain</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-yellow-400 mb-2">18</div>
                  <div className="text-sm text-gray-300">Months</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Challenge Section */}
      <div className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              The Challenge
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              A global manufacturing giant faced critical operational challenges 
              that threatened their market position and growth potential.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-red-500/10 border border-red-500/30 rounded-xl p-6">
              <div className="text-4xl mb-4">⚠️</div>
              <h3 className="text-xl font-bold text-white mb-4">Legacy Systems</h3>
              <p className="text-gray-300">
                Outdated technology infrastructure causing bottlenecks and 
                limiting scalability across 47 countries.
              </p>
            </div>
            
            <div className="bg-orange-500/10 border border-orange-500/30 rounded-xl p-6">
              <div className="text-4xl mb-4">📊</div>
              <h3 className="text-xl font-bold text-white mb-4">Manual Processes</h3>
              <p className="text-gray-300">
                Heavy reliance on manual data processing and decision-making, 
                leading to errors and delays.
              </p>
            </div>
            
            <div className="bg-yellow-500/10 border border-yellow-500/30 rounded-xl p-6">
              <div className="text-4xl mb-4">🌍</div>
              <h3 className="text-xl font-bold text-white mb-4">Global Complexity</h3>
              <p className="text-gray-300">
                Managing operations across multiple time zones, languages, 
                and regulatory environments.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Solution Section */}
      <div className="py-20 bg-black/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              The AI 2025 Solution
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Comprehensive AI implementation across all business functions, 
              leveraging cutting-edge synthetic intelligence and autonomous systems.
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="space-y-8">
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
                <h3 className="text-2xl font-bold text-white mb-4">🤖 Autonomous Manufacturing</h3>
                <p className="text-gray-300 mb-4">
                  Implemented AI-powered production lines with predictive maintenance, 
                  quality control, and real-time optimization.
                </p>
                <ul className="space-y-2 text-gray-300">
                  <li>• 95% reduction in production downtime</li>
                  <li>• 40% increase in product quality</li>
                  <li>• 60% reduction in waste</li>
                </ul>
              </div>
              
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
                <h3 className="text-2xl font-bold text-white mb-4">🧠 Intelligent Supply Chain</h3>
                <p className="text-gray-300 mb-4">
                  AI-driven demand forecasting, inventory optimization, 
                  and automated logistics management.
                </p>
                <ul className="space-y-2 text-gray-300">
                  <li>• 70% improvement in demand accuracy</li>
                  <li>• 50% reduction in inventory costs</li>
                  <li>• 80% faster delivery times</li>
                </ul>
              </div>
            </div>
            
            <div className="space-y-8">
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
                <h3 className="text-2xl font-bold text-white mb-4">💬 AI Customer Experience</h3>
                <p className="text-gray-300 mb-4">
                  Deployed conversational AI and personalized customer service 
                  across all touchpoints.
                </p>
                <ul className="space-y-2 text-gray-300">
                  <li>• 90% customer satisfaction rate</li>
                  <li>• 75% reduction in response time</li>
                  <li>• 65% increase in customer retention</li>
                </ul>
              </div>
              
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
                <h3 className="text-2xl font-bold text-white mb-4">📈 Predictive Analytics</h3>
                <p className="text-gray-300 mb-4">
                  Advanced machine learning models for business intelligence, 
                  risk management, and strategic planning.
                </p>
                <ul className="space-y-2 text-gray-300">
                  <li>• 85% improvement in forecasting accuracy</li>
                  <li>• 90% reduction in risk exposure</li>
                  <li>• 95% faster decision-making</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Results Section */}
      <div className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Outstanding Results
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              The AI 2025 implementation delivered unprecedented results, 
              transforming every aspect of the business.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            <div className="text-center bg-gradient-to-br from-green-500/20 to-emerald-500/20 rounded-xl p-8 border border-green-500/30">
              <div className="text-5xl font-bold text-green-400 mb-4">1,200%</div>
              <div className="text-xl font-semibold text-white mb-2">ROI</div>
              <div className="text-gray-300">Return on Investment</div>
            </div>
            
            <div className="text-center bg-gradient-to-br from-blue-500/20 to-cyan-500/20 rounded-xl p-8 border border-blue-500/30">
              <div className="text-5xl font-bold text-blue-400 mb-4">$2.1B</div>
              <div className="text-xl font-semibold text-white mb-2">Savings</div>
              <div className="text-gray-300">Annual Cost Reduction</div>
            </div>
            
            <div className="text-center bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-xl p-8 border border-purple-500/30">
              <div className="text-5xl font-bold text-purple-400 mb-4">85%</div>
              <div className="text-xl font-semibold text-white mb-2">Efficiency</div>
              <div className="text-gray-300">Operational Improvement</div>
            </div>
            
            <div className="text-center bg-gradient-to-br from-yellow-500/20 to-orange-500/20 rounded-xl p-8 border border-yellow-500/30">
              <div className="text-5xl font-bold text-yellow-400 mb-4">18</div>
              <div className="text-xl font-semibold text-white mb-2">Months</div>
              <div className="text-gray-300">Implementation Time</div>
            </div>
          </div>
          
          <div className="bg-gradient-to-r from-green-500/10 to-blue-500/10 rounded-2xl p-8 border border-green-500/30">
            <h3 className="text-2xl font-bold text-white mb-6 text-center">
              Key Success Factors
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h4 className="text-lg font-semibold text-white mb-4">Technical Excellence</h4>
                <ul className="space-y-2 text-gray-300">
                  <li>• Cutting-edge AI algorithms and models</li>
                  <li>• Seamless integration with existing systems</li>
                  <li>• Scalable cloud infrastructure</li>
                  <li>• Real-time data processing capabilities</li>
                </ul>
              </div>
              <div>
                <h4 className="text-lg font-semibold text-white mb-4">Change Management</h4>
                <ul className="space-y-2 text-gray-300">
                  <li>• Comprehensive training programs</li>
                  <li>• Gradual rollout across departments</li>
                  <li>• Strong leadership support</li>
                  <li>• Continuous monitoring and optimization</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="py-20 bg-gradient-to-r from-green-600 to-blue-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl text-gray-200 mb-8 max-w-3xl mx-auto">
            Join the AI revolution and achieve similar results for your organization. 
            Our expert team is ready to help you implement AI 2025 solutions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="bg-white text-green-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-300"
            >
              Start Your AI Journey
            </Link>
            <Link
              href="/case-studies"
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-green-600 transition-colors duration-300"
            >
              View More Case Studies
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}