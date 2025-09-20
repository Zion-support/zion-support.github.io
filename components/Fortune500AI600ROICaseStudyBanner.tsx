<<<<<<< HEAD
=======
import React from 'react';
import Link from 'next/link';
import { ArrowRight, TrendingUp, DollarSign, Users, Award, Target } from 'lucide-react';

export default function Fortune500AI600ROICaseStudyBanner() {
  return (
    <section className="relative bg-gradient-to-br from-emerald-900 via-teal-900 to-cyan-900 text-white py-20 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-black/20">
        <div className="absolute inset-0 bg-gradient-to-r from-emerald-600/10 to-cyan-600/10"></div>
        <div className="absolute top-0 left-0 w-full h-full bg-[url('data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%239C92AC" fill-opacity="0.1"%3E%3Ccircle cx="30" cy="30" r="2"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-30"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          {/* Badge */}
          <div className="inline-flex items-center bg-gradient-to-r from-emerald-500 to-cyan-500 rounded-full px-6 py-2 mb-6">
            <Award className="w-5 h-5 mr-2" />
            <span className="text-sm font-semibold">CASE STUDY</span>
          </div>

          {/* Main Heading */}
          <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
            Fortune 500 AI Transformation
            <span className="block bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent">
              600% ROI in 18 Months
            </span>
          </h1>

          {/* Subheading */}
          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed">
            Discover how a Fortune 500 manufacturing company achieved $130M+ annual benefits 
            through comprehensive AI transformation across all business units.
          </p>

          {/* Key Stats */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-12 max-w-5xl mx-auto">
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
              <TrendingUp className="w-8 h-8 text-green-400 mx-auto mb-3" />
              <h3 className="font-bold text-2xl mb-2">600%</h3>
              <p className="text-gray-300 text-sm">ROI Achieved</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
              <DollarSign className="w-8 h-8 text-yellow-400 mx-auto mb-3" />
              <h3 className="font-bold text-2xl mb-2">$130M</h3>
              <p className="text-gray-300 text-sm">Annual Benefits</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
              <Users className="w-8 h-8 text-blue-400 mx-auto mb-3" />
              <h3 className="font-bold text-2xl mb-2">15,000</h3>
              <p className="text-gray-300 text-sm">Employees Impacted</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
              <Target className="w-8 h-8 text-purple-400 mx-auto mb-3" />
              <h3 className="font-bold text-2xl mb-2">18</h3>
              <p className="text-gray-300 text-sm">Months Timeline</p>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/content/case-studies/fortune-500-ai-transformation-600-roi-case-study"
              className="inline-flex items-center bg-gradient-to-r from-emerald-500 to-cyan-500 hover:from-emerald-600 hover:to-cyan-600 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              Read Full Case Study
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
            <Link
              href="/services/ai-transformation"
              className="inline-flex items-center border-2 border-white text-white hover:bg-white hover:text-emerald-900 px-8 py-4 rounded-lg font-semibold transition-all duration-300"
            >
              Start Your Transformation
            </Link>
          </div>
        </div>

        {/* Results Overview */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Transformation Results */}
          <div className="space-y-8">
            <h2 className="text-3xl font-bold mb-6">Transformation Results</h2>
            
            <div className="space-y-6">
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
                <div className="flex items-center justify-between mb-3">
                  <h3 className="text-lg font-semibold">Cost Savings</h3>
                  <span className="text-2xl font-bold text-green-400">$52M</span>
                </div>
                <p className="text-gray-300 text-sm">Annual savings through automation and optimization</p>
              </div>

              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
                <div className="flex items-center justify-between mb-3">
                  <h3 className="text-lg font-semibold">Revenue Growth</h3>
                  <span className="text-2xl font-bold text-blue-400">$78M</span>
                </div>
                <p className="text-gray-300 text-sm">New capabilities and improved customer satisfaction</p>
              </div>

              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
                <div className="flex items-center justify-between mb-3">
                  <h3 className="text-lg font-semibold">Quality Improvement</h3>
                  <span className="text-2xl font-bold text-purple-400">95%</span>
                </div>
                <p className="text-gray-300 text-sm">Reduction in defect rates through AI quality control</p>
              </div>

              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
                <div className="flex items-center justify-between mb-3">
                  <h3 className="text-lg font-semibold">Customer Satisfaction</h3>
                  <span className="text-2xl font-bold text-yellow-400">96%</span>
                </div>
                <p className="text-gray-300 text-sm">Improved from 72% through AI-enhanced service</p>
              </div>
            </div>
          </div>

          {/* Right Column - Implementation Timeline */}
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
            <h2 className="text-3xl font-bold mb-6">Implementation Timeline</h2>
            
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-full flex items-center justify-center">
                  <span className="text-white font-bold">1-6</span>
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-2">Foundation Phase</h3>
                  <p className="text-gray-300 text-sm mb-2">Strategic planning, infrastructure setup, pilot projects</p>
                  <div className="text-xs text-gray-400">• Cloud migration • Data lake implementation • Security framework</div>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-r from-teal-500 to-cyan-500 rounded-full flex items-center justify-center">
                  <span className="text-white font-bold">7-12</span>
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-2">Implementation Phase</h3>
                  <p className="text-gray-300 text-sm mb-2">Production deployment across all business units</p>
                  <div className="text-xs text-gray-400">• Manufacturing AI • Supply chain optimization • Customer service automation</div>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full flex items-center justify-center">
                  <span className="text-white font-bold">13-18</span>
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-2">Optimization Phase</h3>
                  <p className="text-gray-300 text-sm mb-2">Advanced AI capabilities and continuous improvement</p>
                  <div className="text-xs text-gray-400">• Autonomous decision making • Cross-department integration • Advanced analytics</div>
                </div>
              </div>
            </div>

            <div className="mt-8 p-4 bg-gradient-to-r from-green-500/20 to-blue-500/20 rounded-lg border border-green-500/30">
              <div className="text-center">
                <div className="text-3xl font-bold text-green-400 mb-2">600% ROI</div>
                <div className="text-gray-300">Achieved within 18 months</div>
              </div>
            </div>
          </div>
        </div>

        {/* Key Technologies */}
        <div className="mt-16">
          <h2 className="text-3xl font-bold text-center mb-8">Key Technologies Implemented</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 text-center border border-white/20">
              <div className="text-2xl mb-2">🤖</div>
              <h3 className="font-semibold">Machine Learning</h3>
              <p className="text-gray-300 text-sm">Predictive models for maintenance and forecasting</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 text-center border border-white/20">
              <div className="text-2xl mb-2">👁️</div>
              <h3 className="font-semibold">Computer Vision</h3>
              <p className="text-gray-300 text-sm">Automated quality control and inspection</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 text-center border border-white/20">
              <div className="text-2xl mb-2">💬</div>
              <h3 className="font-semibold">NLP Chatbots</h3>
              <p className="text-gray-300 text-sm">Intelligent customer service automation</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 text-center border border-white/20">
              <div className="text-2xl mb-2">🔄</div>
              <h3 className="font-semibold">Process Automation</h3>
              <p className="text-gray-300 text-sm">Workflow optimization and RPA</p>
            </div>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <p className="text-gray-300 mb-6">
            Ready to achieve similar results for your organization?
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center bg-white text-emerald-900 hover:bg-gray-100 px-8 py-3 rounded-lg font-semibold transition-colors"
          >
            Schedule Strategy Session
            <ArrowRight className="ml-2 w-5 h-5" />
          </Link>
        </div>
      </div>
    </section>
  );
}
>>>>>>> 9de841a86934bc4a418b22e98c02b56496dc2aa9
