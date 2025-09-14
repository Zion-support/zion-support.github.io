import React from 'react';
import Link from 'next/link';
import { BookOpen, FileText, Users, Zap, ArrowRight, CheckCircle, Star, TrendingUp } from 'lucide-react';

const NewContent2025PromotionBanner = () => {
  return (
    <section className="bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 text-white py-20 relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-blue-600/20 to-purple-600/20"></div>
        <div className="absolute top-10 left-10 w-72 h-72 bg-white/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-pink-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center bg-white bg-opacity-20 rounded-full px-6 py-3 mb-6 backdrop-blur-sm">
            <Zap className="w-5 h-5 mr-2 text-yellow-400 animate-pulse" />
            <span className="text-sm font-bold">NEW 2025 CONTENT RELEASE</span>
          </div>
          
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            Revolutionary AI Content
            <span className="block bg-gradient-to-r from-yellow-400 to-pink-400 bg-clip-text text-transparent">
              Just Released
            </span>
          </h2>
          
          <p className="text-xl md:text-2xl opacity-90 mb-8 max-w-4xl mx-auto leading-relaxed">
            Get exclusive access to our latest AI transformation resources, featuring real-world success stories, 
            proven implementation strategies, and actionable insights from industry experts.
          </p>
        </div>

        {/* Content Showcase */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          {/* Left Column - Featured Content */}
          <div className="space-y-8">
            <div className="bg-white bg-opacity-10 backdrop-blur-lg rounded-2xl p-8 border border-white border-opacity-20 hover:bg-opacity-20 transition-all duration-300 group">
              <div className="flex items-start mb-6">
                <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl flex items-center justify-center mr-6 flex-shrink-0">
                  <BookOpen className="w-8 h-8 text-white" />
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-white mb-2">AI Transformation 2025: Complete Guide</h3>
                  <p className="text-blue-200 text-sm mb-4">15 min read • Comprehensive Guide</p>
                  <p className="text-gray-200 leading-relaxed">
                    The ultimate roadmap for AI transformation in 2025. Learn proven strategies, implementation frameworks, 
                    and real-world success stories that will revolutionize your business.
                  </p>
                </div>
              </div>
              
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-6">
                  <div className="flex items-center text-green-400">
                    <CheckCircle className="w-5 h-5 mr-2" />
                    <span className="font-semibold">340% ROI</span>
                  </div>
                  <div className="flex items-center text-yellow-400">
                    <Star className="w-5 h-5 mr-2" />
                    <span className="font-semibold">4.9/5 Rating</span>
                  </div>
                  <div className="flex items-center text-blue-400">
                    <TrendingUp className="w-5 h-5 mr-2" />
                    <span className="font-semibold">Trending</span>
                  </div>
                </div>
                <Link 
                  href="/blog/ai-transformation-2025-complete-guide"
                  className="bg-gradient-to-r from-yellow-400 to-orange-500 text-black px-6 py-3 rounded-lg font-bold hover:from-yellow-500 hover:to-orange-600 transition-all duration-300 transform hover:scale-105 group-hover:translate-x-1"
                >
                  Read Now
                  <ArrowRight className="w-4 h-4 ml-2 inline" />
                </Link>
              </div>
            </div>

            <div className="bg-white bg-opacity-10 backdrop-blur-lg rounded-2xl p-8 border border-white border-opacity-20 hover:bg-opacity-20 transition-all duration-300 group">
              <div className="flex items-start mb-6">
                <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-emerald-500 rounded-xl flex items-center justify-center mr-6 flex-shrink-0">
                  <Users className="w-8 h-8 text-white" />
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-white mb-2">Enterprise Success Case Study</h3>
                  <p className="text-blue-200 text-sm mb-4">12 min read • Fortune 500 Success</p>
                  <p className="text-gray-200 leading-relaxed">
                    Discover how a Fortune 500 company achieved 340% ROI in just 6 months. Real results, 
                    proven strategies, and actionable insights you can implement today.
                  </p>
                </div>
              </div>
              
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-6">
                  <div className="flex items-center text-green-400">
                    <CheckCircle className="w-5 h-5 mr-2" />
                    <span className="font-semibold">$50M Value</span>
                  </div>
                  <div className="flex items-center text-yellow-400">
                    <Star className="w-5 h-5 mr-2" />
                    <span className="font-semibold">4.8/5 Rating</span>
                  </div>
                  <div className="flex items-center text-purple-400">
                    <FileText className="w-5 h-5 mr-2" />
                    <span className="font-semibold">Case Study</span>
                  </div>
                </div>
                <Link 
                  href="/case-studies/ai-transformation-enterprise-success-2025"
                  className="bg-gradient-to-r from-green-400 to-emerald-500 text-white px-6 py-3 rounded-lg font-bold hover:from-green-500 hover:to-emerald-600 transition-all duration-300 transform hover:scale-105 group-hover:translate-x-1"
                >
                  View Case Study
                  <ArrowRight className="w-4 h-4 ml-2 inline" />
                </Link>
              </div>
            </div>
          </div>

          {/* Right Column - Implementation Checklist */}
          <div className="bg-white bg-opacity-10 backdrop-blur-lg rounded-2xl p-8 border border-white border-opacity-20 hover:bg-opacity-20 transition-all duration-300 group">
            <div className="text-center mb-8">
              <div className="w-20 h-20 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <FileText className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-3xl font-bold text-white mb-4">AI Implementation Checklist 2025</h3>
              <p className="text-blue-200 text-lg mb-6">Your Complete Guide to Success</p>
              <p className="text-gray-200 leading-relaxed text-lg">
                The ultimate checklist for AI implementation in 2025. Ensure nothing is missed with our comprehensive 
                150+ point checklist covering strategy, technology, and execution.
              </p>
            </div>

            <div className="space-y-4 mb-8">
              <div className="flex items-center text-green-400">
                <CheckCircle className="w-5 h-5 mr-3" />
                <span className="text-white font-medium">150+ Implementation Checkpoints</span>
              </div>
              <div className="flex items-center text-green-400">
                <CheckCircle className="w-5 h-5 mr-3" />
                <span className="text-white font-medium">Strategic Planning Framework</span>
              </div>
              <div className="flex items-center text-green-400">
                <CheckCircle className="w-5 h-5 mr-3" />
                <span className="text-white font-medium">Technology Implementation Guide</span>
              </div>
              <div className="flex items-center text-green-400">
                <CheckCircle className="w-5 h-5 mr-3" />
                <span className="text-white font-medium">Risk Management Strategies</span>
              </div>
              <div className="flex items-center text-green-400">
                <CheckCircle className="w-5 h-5 mr-3" />
                <span className="text-white font-medium">Success Measurement KPIs</span>
              </div>
            </div>

            <div className="text-center">
              <div className="flex items-center justify-center space-x-6 mb-6">
                <div className="text-center">
                  <div className="text-2xl font-bold text-yellow-400">150+</div>
                  <div className="text-gray-300 text-sm">Checkpoints</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-green-400">20 min</div>
                  <div className="text-gray-300 text-sm">Read Time</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-blue-400">4.9/5</div>
                  <div className="text-gray-300 text-sm">Rating</div>
                </div>
              </div>
              
              <Link 
                href="/resources/ai-implementation-checklist-2025"
                className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-8 py-4 rounded-lg font-bold text-lg hover:from-blue-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 inline-flex items-center"
              >
                Download Checklist
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom CTA Section */}
        <div className="text-center bg-white bg-opacity-10 backdrop-blur-lg rounded-2xl p-12 border border-white border-opacity-20">
          <h3 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Transform Your Business with AI?
          </h3>
          <p className="text-xl text-gray-200 mb-8 max-w-3xl mx-auto">
            Join thousands of professionals who have successfully implemented AI using our proven resources and methodologies.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/resources"
              className="bg-gradient-to-r from-yellow-400 to-orange-500 text-black px-8 py-4 rounded-lg font-bold text-lg hover:from-yellow-500 hover:to-orange-600 transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              Explore All Resources
            </Link>
            <Link
              href="/contact"
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-white hover:text-purple-900 transition-all duration-300 transform hover:scale-105"
            >
              Get Expert Consultation
            </Link>
          </div>
          
          <p className="text-gray-300 mt-6 text-lg">
            🚀 Limited time: Get exclusive access to our premium AI resources
          </p>
        </div>
      </div>
    </section>
  );
};

export default NewContent2025PromotionBanner;