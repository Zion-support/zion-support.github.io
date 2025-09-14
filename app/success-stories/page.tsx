import React from 'react';
import SEO from '../../components/SEO';
import Link from 'next/link';
import { ArrowRight, TrendingUp, Users, Zap, Star, Award } from 'lucide-react';

export default function SuccessStories() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-white to-blue-50">
      <SEO
        title="Success Stories - Real-World AI & Technology Implementations | Zion Tech Group"
        description="Discover how our AI solutions, quantum computing, and technology services have transformed businesses worldwide."
        keywords="success stories, case studies, AI implementation, technology transformation, business results, ROI"
        url="/success-stories"
      />
      
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-r from-green-600 via-blue-600 to-indigo-600 overflow-hidden">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center text-white">
            <div className="inline-flex items-center px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full text-sm font-medium mb-6">
              <Award className="w-4 h-4 mr-2" />
              SUCCESS STORIES
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
              Real-World
              <span className="block bg-gradient-to-r from-yellow-300 to-cyan-300 bg-clip-text text-transparent">
                Transformations
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl text-blue-100 mb-10 leading-relaxed">
              Discover how our cutting-edge AI solutions and technology services have delivered measurable results for businesses worldwide.
            </p>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent mb-2">
                500+
              </div>
              <div className="text-gray-600 font-medium">Projects Completed</div>
            </div>
            
            <div>
              <div className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent mb-2">
                95%
              </div>
              <div className="text-gray-600 font-medium">Client Satisfaction</div>
            </div>
            
            <div>
              <div className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent mb-2">
                300%
              </div>
              <div className="text-gray-600 font-medium">Average ROI</div>
            </div>
            
            <div>
              <div className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent mb-2">
                50+
              </div>
              <div className="text-gray-600 font-medium">Countries Served</div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Success Stories */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Featured Success Stories
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Real implementations that showcase the transformative power of our AI and technology solutions.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Case Study 1 */}
            <div className="bg-white rounded-2xl p-8 shadow-xl border border-gray-100 hover:shadow-2xl transition-all duration-300">
              <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-green-100 to-blue-100 rounded-full text-sm font-medium text-green-800 mb-6">
                <TrendingUp className="w-4 h-4 mr-2" />
                FINANCIAL SERVICES
              </div>
              
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Global Investment Bank: 400% ROI
              </h3>
              
              <p className="text-gray-600 mb-6 leading-relaxed">
                Implemented AI-powered business process automation to streamline trading operations and risk management systems.
              </p>
              
              <div className="grid grid-cols-2 gap-4 mb-6">
                <div className="text-center">
                  <div className="text-2xl font-bold text-green-600 mb-1">400%</div>
                  <div className="text-xs text-gray-600">ROI Increase</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-blue-600 mb-1">60%</div>
                  <div className="text-xs text-gray-600">Cost Reduction</div>
                </div>
              </div>
              
              <Link 
                href="/contact"
                className="inline-flex items-center text-green-600 font-semibold hover:text-green-700 transition-colors"
              >
                Learn How
                <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
            </div>

            {/* Case Study 2 */}
            <div className="bg-white rounded-2xl p-8 shadow-xl border border-gray-100 hover:shadow-2xl transition-all duration-300">
              <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-purple-100 to-indigo-100 rounded-full text-sm font-medium text-purple-800 mb-6">
                <Zap className="w-4 h-4 mr-2" />
                HEALTHCARE
              </div>
              
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Pharma Company: 85% Faster Discovery
              </h3>
              
              <p className="text-gray-600 mb-6 leading-relaxed">
                Leveraged quantum drug discovery platform to accelerate research and development processes.
              </p>
              
              <div className="grid grid-cols-2 gap-4 mb-6">
                <div className="text-center">
                  <div className="text-2xl font-bold text-purple-600 mb-1">85%</div>
                  <div className="text-xs text-gray-600">Faster Discovery</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-indigo-600 mb-1">60%</div>
                  <div className="text-xs text-gray-600">Cost Savings</div>
                </div>
              </div>
              
              <Link 
                href="/contact"
                className="inline-flex items-center text-purple-600 font-semibold hover:text-purple-700 transition-colors"
              >
                See Results
                <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
            </div>

            {/* Case Study 3 */}
            <div className="bg-white rounded-2xl p-8 shadow-xl border border-gray-100 hover:shadow-2xl transition-all duration-300">
              <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-cyan-100 to-blue-100 rounded-full text-sm font-medium text-cyan-800 mb-6">
                <Users className="w-4 h-4 mr-2" />
                E-COMMERCE
              </div>
              
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                E-commerce Platform: 250% Growth
              </h3>
              
              <p className="text-gray-600 mb-6 leading-relaxed">
                Implemented AI customer behavior analytics to personalize experiences and optimize conversion rates.
              </p>
              
              <div className="grid grid-cols-2 gap-4 mb-6">
                <div className="text-center">
                  <div className="text-2xl font-bold text-cyan-600 mb-1">250%</div>
                  <div className="text-xs text-gray-600">Revenue Growth</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-blue-600 mb-1">35%</div>
                  <div className="text-xs text-gray-600">Retention Increase</div>
                </div>
              </div>
              
              <Link 
                href="/contact"
                className="inline-flex items-center text-cyan-600 font-semibold hover:text-cyan-700 transition-colors"
              >
                Discover How
                <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-green-600 via-blue-600 to-indigo-600">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-4xl mx-auto text-white">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Ready to Write Your Success Story?
            </h2>
            <p className="text-xl text-blue-100 mb-10 leading-relaxed">
              Join hundreds of successful businesses that have transformed their operations with our cutting-edge AI and technology solutions.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href="/contact"
                className="inline-flex items-center px-10 py-5 bg-white text-blue-600 font-bold text-lg rounded-xl hover:bg-blue-50 transition-colors"
              >
                Start Your Transformation
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
              
              <Link 
                href="/ai-innovation-hub-2025"
                className="inline-flex items-center px-10 py-5 border-2 border-white text-white font-bold text-lg rounded-xl hover:bg-white/10 transition-colors"
              >
                Explore Solutions
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}