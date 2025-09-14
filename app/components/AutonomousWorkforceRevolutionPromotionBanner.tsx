import React from 'react';
import Link from 'next/link';
import { ArrowRight, Zap, TrendingUp, Users, CheckCircle } from 'lucide-react';

export default function AutonomousWorkforceRevolutionPromotionBanner() {
  return (
    <div className="relative bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-black/10">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20"></div>
        <div className="absolute top-0 left-0 w-full h-full bg-[url('data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%23ffffff" fill-opacity="0.05"%3E%3Ccircle cx="30" cy="30" r="2"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-20"></div>
      </div>
      
      <div className="relative z-10 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            {/* Content */}
            <div className="text-white">
              <div className="inline-flex items-center px-3 py-1 rounded-full bg-white/20 text-white text-sm font-medium mb-4">
                <Zap className="w-4 h-4 mr-2" />
                Revolutionary AI 2025 Breakthrough
              </div>
              
              <h2 className="text-3xl md:text-4xl font-bold mb-4 leading-tight">
                Next-Generation
                <span className="block text-yellow-300">Autonomous Workforce</span>
                Revolution is Here!
              </h2>
              
              <p className="text-lg text-blue-100 mb-6 leading-relaxed">
                Discover how AI 2025's revolutionary autonomous workforce delivers 99.9% operational efficiency 
                and generates 5,000% ROI for enterprise operations. See the Fortune 500 success story.
              </p>
              
              {/* Key Metrics */}
              <div className="grid grid-cols-2 gap-4 mb-6">
                <div className="bg-white/10 rounded-lg p-3 backdrop-blur-sm">
                  <div className="text-2xl font-bold text-yellow-300">5,000%</div>
                  <div className="text-sm text-blue-100">ROI Achieved</div>
                </div>
                <div className="bg-white/10 rounded-lg p-3 backdrop-blur-sm">
                  <div className="text-2xl font-bold text-green-300">99.9%</div>
                  <div className="text-sm text-blue-100">Efficiency</div>
                </div>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-3">
                <Link 
                  href="/blog/ai-2025-next-generation-autonomous-workforce-revolution"
                  className="inline-flex items-center px-6 py-3 bg-white text-blue-600 font-semibold rounded-lg hover:bg-blue-50 transition-all duration-300 transform hover:scale-105 shadow-lg"
                >
                  Read the Blog Post
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Link>
                <Link 
                  href="/case-studies/ai-2025-autonomous-workforce-transformation-success"
                  className="inline-flex items-center px-6 py-3 bg-transparent text-white font-semibold rounded-lg border-2 border-white/30 hover:bg-white/10 transition-all duration-300"
                >
                  View Success Story
                </Link>
              </div>
            </div>
            
            {/* Visual Elements */}
            <div className="relative">
              <div className="bg-white/10 rounded-2xl p-8 backdrop-blur-sm border border-white/20">
                <div className="text-center">
                  <div className="w-20 h-20 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full mx-auto mb-4 flex items-center justify-center">
                    <Users className="w-10 h-10 text-white" />
                  </div>
                  
                  <h3 className="text-xl font-bold text-white mb-4">Revolutionary Impact</h3>
                  
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="text-blue-100">Fortune 500 Success</span>
                      <CheckCircle className="w-5 h-5 text-green-400" />
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-blue-100">$2.5B Cost Savings</span>
                      <TrendingUp className="w-5 h-5 text-green-400" />
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-blue-100">6 Months Implementation</span>
                      <Zap className="w-5 h-5 text-yellow-400" />
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-blue-100">200+ Facilities</span>
                      <Users className="w-5 h-5 text-blue-400" />
                    </div>
                  </div>
                  
                  <div className="mt-6 pt-4 border-t border-white/20">
                    <div className="text-2xl font-bold text-yellow-300 mb-1">5,000% ROI</div>
                    <div className="text-sm text-blue-100">Average Return on Investment</div>
                  </div>
                </div>
              </div>
              
              {/* Floating Elements */}
              <div className="absolute -top-4 -right-4 w-8 h-8 bg-yellow-400 rounded-full animate-pulse"></div>
              <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-green-400 rounded-full animate-pulse delay-1000"></div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Bottom Wave */}
      <div className="absolute bottom-0 left-0 w-full">
        <svg className="w-full h-8 text-white" viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z" fill="currentColor"></path>
        </svg>
      </div>
    </div>
  );
}