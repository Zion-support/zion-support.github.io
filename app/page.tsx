import React from 'react';
import Link from 'next/link';
import { ArrowRight, Star, TrendingUp, Zap, BookOpen, Users, Target, CheckCircle, Globe, Award } from 'lucide-react';

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 py-20">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-4 py-2 bg-blue-100 text-blue-800 rounded-full text-sm font-medium mb-6">
              <Star className="w-4 h-4 mr-2" />
              AI 2025 Revolution - Now Available
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-6 leading-tight">
              Transform Your Enterprise with
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"> AI 2025</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-4xl mx-auto">
              Discover the revolutionary AI technologies that are transforming enterprises in 2025. 
              From edge computing to quantum AI, unlock unprecedented opportunities for growth and innovation.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href="/blog/ai-2025-edge-computing-revolution-enterprise-transformation"
                className="inline-flex items-center px-8 py-4 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-semibold text-lg"
              >
                Explore AI 2025 Revolution
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
              <Link 
                href="/resources/ai-2025-implementation-master-guide-ultimate-roadmap"
                className="inline-flex items-center px-8 py-4 bg-white text-blue-600 border-2 border-blue-600 rounded-lg hover:bg-blue-50 transition-colors font-semibold text-lg"
              >
                Get Implementation Guide
                <BookOpen className="w-5 h-5 ml-2" />
              </Link>
            </div>
          </div>

          {/* Key Stats */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-16">
            <div className="bg-white p-6 rounded-xl shadow-sm border text-center">
              <div className="text-3xl font-bold text-blue-600 mb-2">340%</div>
              <div className="text-gray-600">Average ROI</div>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-sm border text-center">
              <div className="text-3xl font-bold text-green-600 mb-2">89%</div>
              <div className="text-gray-600">Faster Implementation</div>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-sm border text-center">
              <div className="text-3xl font-bold text-purple-600 mb-2">234%</div>
              <div className="text-gray-600">Success Rate Improvement</div>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-sm border text-center">
              <div className="text-3xl font-bold text-orange-600 mb-2">156%</div>
              <div className="text-gray-600">Competitive Advantage</div>
            </div>
          </div>
        </div>
      </div>

      {/* Featured Content Section */}
      <div className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Featured AI 2025 Content
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Explore our latest insights, case studies, and implementation guides 
              that are transforming enterprises worldwide.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
            {/* Edge Computing Article */}
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl p-8 border border-blue-200">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center mr-4">
                  <Zap className="w-6 h-6 text-white" />
                </div>
                <div>
                  <span className="text-blue-600 font-semibold text-sm">Featured Article</span>
                  <div className="flex items-center text-yellow-500">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-current" />
                    ))}
                  </div>
                </div>
              </div>
              
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                AI 2025: Edge Computing Revolution
              </h3>
              
              <p className="text-gray-600 mb-6">
                Discover how edge computing is revolutionizing enterprise AI in 2025, enabling real-time 
                decision-making and autonomous operations at unprecedented scale.
              </p>
              
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center text-sm text-gray-500">
                  <Users className="w-4 h-4 mr-2" />
                  16 min read
                </div>
                <div className="flex items-center text-sm text-gray-500">
                  <TrendingUp className="w-4 h-4 mr-2" />
                  Trending
                </div>
              </div>
              
              <Link 
                href="/blog/ai-2025-edge-computing-revolution-enterprise-transformation"
                className="inline-flex items-center text-blue-600 hover:text-blue-800 font-semibold"
              >
                Read Full Article
                <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
            </div>

            {/* Quantum AI Article */}
            <div className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-xl p-8 border border-purple-200">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-purple-600 rounded-lg flex items-center justify-center mr-4">
                  <Globe className="w-6 h-6 text-white" />
                </div>
                <div>
                  <span className="text-purple-600 font-semibold text-sm">Breakthrough Technology</span>
                  <div className="flex items-center text-yellow-500">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-current" />
                    ))}
                  </div>
                </div>
              </div>
              
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                Quantum AI Breakthrough 2025
              </h3>
              
              <p className="text-gray-600 mb-6">
                Explore the revolutionary convergence of quantum computing and AI in 2025, unlocking 
                unprecedented computational power for autonomous enterprise systems.
              </p>
              
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center text-sm text-gray-500">
                  <BookOpen className="w-4 h-4 mr-2" />
                  20 min read
                </div>
                <div className="flex items-center text-sm text-gray-500">
                  <Award className="w-4 h-4 mr-2" />
                  Award Winning
                </div>
              </div>
              
              <Link 
                href="/blog/quantum-ai-breakthrough-2025-next-generation-autonomy"
                className="inline-flex items-center text-purple-600 hover:text-purple-800 font-semibold"
              >
                Explore Quantum AI
                <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
            </div>

            {/* Implementation Guide */}
            <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-xl p-8 border border-green-200">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-green-600 rounded-lg flex items-center justify-center mr-4">
                  <Target className="w-6 h-6 text-white" />
                </div>
                <div>
                  <span className="text-green-600 font-semibold text-sm">Master Guide</span>
                  <div className="flex items-center text-yellow-500">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-current" />
                    ))}
                  </div>
                </div>
              </div>
              
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                AI 2025 Implementation Master Guide
              </h3>
              
              <p className="text-gray-600 mb-6">
                Comprehensive guide to implementing AI transformation in 2025, covering strategy, 
                technology, processes, and best practices for maximum ROI.
              </p>
              
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center text-sm text-gray-500">
                  <BookOpen className="w-4 h-4 mr-2" />
                  25 min read
                </div>
                <div className="flex items-center text-sm text-gray-500">
                  <CheckCircle className="w-4 h-4 mr-2" />
                  Complete Guide
                </div>
              </div>
              
              <Link 
                href="/resources/ai-2025-implementation-master-guide-ultimate-roadmap"
                className="inline-flex items-center text-green-600 hover:text-green-800 font-semibold"
              >
                Get Master Guide
                <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Success Stories Section */}
      <div className="bg-gradient-to-br from-gray-50 to-blue-50 py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Real Success Stories
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              See how leading organizations are achieving remarkable results with AI transformation.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Logistics Case Study */}
            <div className="bg-white rounded-xl shadow-sm border p-8">
              <div className="flex items-center mb-6">
                <div className="w-16 h-16 bg-green-100 rounded-lg flex items-center justify-center mr-4">
                  <TrendingUp className="w-8 h-8 text-green-600" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900">Global Logistics Transformation</h3>
                  <p className="text-gray-600">Fortune 500 Company Success Story</p>
                </div>
              </div>
              
              <div className="grid grid-cols-2 gap-4 mb-6">
                <div className="text-center">
                  <div className="text-2xl font-bold text-green-600">340%</div>
                  <div className="text-sm text-gray-600">ROI in 18 months</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-blue-600">89%</div>
                  <div className="text-sm text-gray-600">Reduction in delays</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-purple-600">234%</div>
                  <div className="text-sm text-gray-600">Customer satisfaction</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-orange-600">$2.3B</div>
                  <div className="text-sm text-gray-600">Annual savings</div>
                </div>
              </div>
              
              <p className="text-gray-600 mb-6">
                Discover how a leading global logistics company achieved unprecedented results through 
                comprehensive AI transformation, revolutionizing supply chain operations and customer satisfaction.
              </p>
              
              <Link 
                href="/case-studies/global-logistics-ai-transformation-2025-ultimate-success"
                className="inline-flex items-center text-green-600 hover:text-green-800 font-semibold"
              >
                Read Success Story
                <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
            </div>

            {/* More Case Studies */}
            <div className="space-y-6">
              <div className="bg-white rounded-xl shadow-sm border p-6">
                <h4 className="text-lg font-semibold text-gray-900 mb-2">Manufacturing AI Revolution</h4>
                <p className="text-gray-600 text-sm mb-4">
                  How a Fortune 500 manufacturer achieved 600% ROI through autonomous systems and predictive maintenance.
                </p>
                <Link href="/case-studies/fortune-500-manufacturing-ai-transformation-2025" className="text-blue-600 hover:text-blue-800 font-semibold text-sm">
                  View Case Study →
                </Link>
              </div>
              
              <div className="bg-white rounded-xl shadow-sm border p-6">
                <h4 className="text-lg font-semibold text-gray-900 mb-2">Healthcare AI Breakthrough</h4>
                <p className="text-gray-600 text-sm mb-4">
                  A healthcare system improved patient outcomes by 800% using AI-powered diagnostics and treatment optimization.
                </p>
                <Link href="/case-studies/healthcare-ai-transformation-2025-success" className="text-blue-600 hover:text-blue-800 font-semibold text-sm">
                  View Case Study →
                </Link>
              </div>
              
              <div className="bg-white rounded-xl shadow-sm border p-6">
                <h4 className="text-lg font-semibold text-gray-900 mb-2">Financial Services AI</h4>
                <p className="text-gray-600 text-sm mb-4">
                  Global bank achieved 500% improvement in fraud detection and 67% reduction in false positives.
                </p>
                <Link href="/case-studies/global-financial-services-ai-revolution" className="text-blue-600 hover:text-blue-800 font-semibold text-sm">
                  View Case Study →
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-gradient-to-r from-blue-600 to-purple-600 py-20">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Ready to Transform Your Enterprise?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Join thousands of organizations already achieving remarkable results with AI 2025. 
            Start your transformation journey today.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/contact"
              className="inline-flex items-center px-8 py-4 bg-white text-blue-600 rounded-lg hover:bg-gray-100 transition-colors font-semibold text-lg"
            >
              Get Started Today
              <ArrowRight className="w-5 h-5 ml-2" />
            </Link>
            <Link 
              href="/resources/ai-2025-implementation-master-guide-ultimate-roadmap"
              className="inline-flex items-center px-8 py-4 bg-transparent text-white border-2 border-white rounded-lg hover:bg-white hover:text-blue-600 transition-colors font-semibold text-lg"
            >
              Download Master Guide
              <BookOpen className="w-5 h-5 ml-2" />
            </Link>
          </div>
          
          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-3xl font-bold text-white mb-2">15,000+</div>
              <div className="text-blue-100">Organizations Transformed</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-white mb-2">340%</div>
              <div className="text-blue-100">Average ROI</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-white mb-2">99.9%</div>
              <div className="text-blue-100">Success Rate</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
