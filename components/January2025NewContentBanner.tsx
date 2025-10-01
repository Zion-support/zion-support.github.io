import React from 'react';
import Link from 'next/link';
import { ArrowRight, TrendingUp, Users, DollarSign, Clock } from 'lucide-react';

const January2025NewContentBanner: React.FC = () => {
  return (
    <div className="relative overflow-hidden bg-gradient-to-r from-blue-900 via-blue-800 to-indigo-900 text-white">
      <div className="absolute inset-0 bg-black opacity-20"></div>
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Content */}
          <div className="space-y-8">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-blue-600 text-sm font-medium">
              <span className="w-2 h-2 bg-green-400 rounded-full mr-2 animate-pulse"></span>
              NEW JANUARY 2025 CONTENT
            </div>
            
            <h2 className="text-4xl lg:text-5xl font-bold leading-tight">
              Master AI Implementation with Our
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-300 to-indigo-300">
                {" "}Complete Roadmap
              </span>
            </h2>
            
            <p className="text-xl text-blue-100 leading-relaxed">
              Discover the proven framework that has delivered <strong>$2.3 billion</strong> in enterprise value. 
              Learn from real Fortune 100 success stories and avoid common pitfalls that cause 73% of AI projects to fail.
            </p>
            
            <div className="grid grid-cols-2 gap-6">
              <div className="flex items-center space-x-3">
                <div className="flex-shrink-0 w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center">
                  <TrendingUp className="w-5 h-5" />
                </div>
                <div>
                  <p className="font-semibold">2,300% ROI</p>
                  <p className="text-sm text-blue-200">Proven Results</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-3">
                <div className="flex-shrink-0 w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center">
                  <Users className="w-5 h-5" />
                </div>
                <div>
                  <p className="font-semibold">500+ Enterprises</p>
                  <p className="text-sm text-blue-200">Successfully Transformed</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-3">
                <div className="flex-shrink-0 w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center">
                  <DollarSign className="w-5 h-5" />
                </div>
                <div>
                  <p className="font-semibold">$2.3B Value</p>
                  <p className="text-sm text-blue-200">Created for Clients</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-3">
                <div className="flex-shrink-0 w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center">
                  <Clock className="w-5 h-5" />
                </div>
                <div>
                  <p className="font-semibold">18 Months</p>
                  <p className="text-sm text-blue-200">Average Timeline</p>
                </div>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Link 
                href="/blog/ai-2025-january-15-practical-ai-implementation-roadmap"
                className="inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-blue-500 to-indigo-500 hover:from-blue-600 hover:to-indigo-600 text-white font-semibold rounded-lg transition-all duration-200 transform hover:scale-105 shadow-lg hover:shadow-xl"
              >
                Read Complete Roadmap
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
              
              <Link 
                href="/case-studies/fortune-100-ai-transformation-2025-2-3-billion-success"
                className="inline-flex items-center justify-center px-8 py-4 bg-transparent border-2 border-white hover:bg-white hover:text-blue-900 text-white font-semibold rounded-lg transition-all duration-200"
              >
                View Success Story
              </Link>
            </div>
          </div>
          
          {/* Right Column - Visual Elements */}
          <div className="relative">
            <div className="relative z-10 bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
              <div className="space-y-6">
                <div className="flex items-center justify-between">
                  <h3 className="text-2xl font-bold">Implementation Phases</h3>
                  <div className="text-sm text-blue-200">18 Month Journey</div>
                </div>
                
                <div className="space-y-4">
                  <div className="flex items-center space-x-4">
                    <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center text-sm font-bold">1</div>
                    <div>
                      <p className="font-semibold">Strategic Foundation</p>
                      <p className="text-sm text-blue-200">Weeks 1-4: Planning & Assessment</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-4">
                    <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center text-sm font-bold">2</div>
                    <div>
                      <p className="font-semibold">Technical Architecture</p>
                      <p className="text-sm text-blue-200">Weeks 5-8: Platform Selection</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-4">
                    <div className="w-8 h-8 bg-purple-500 rounded-full flex items-center justify-center text-sm font-bold">3</div>
                    <div>
                      <p className="font-semibold">Pilot Implementation</p>
                      <p className="text-sm text-blue-200">Weeks 9-16: Proof of Concept</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-4">
                    <div className="w-8 h-8 bg-orange-500 rounded-full flex items-center justify-center text-sm font-bold">4</div>
                    <div>
                      <p className="font-semibold">Full-Scale Deployment</p>
                      <p className="text-sm text-blue-200">Weeks 17-24: Rollout</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-4">
                    <div className="w-8 h-8 bg-red-500 rounded-full flex items-center justify-center text-sm font-bold">5</div>
                    <div>
                      <p className="font-semibold">Scale & Innovation</p>
                      <p className="text-sm text-blue-200">Weeks 25+: Optimization</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Floating Elements */}
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-gradient-to-br from-blue-400 to-indigo-400 rounded-full opacity-20 animate-pulse"></div>
            <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-gradient-to-br from-purple-400 to-pink-400 rounded-full opacity-20 animate-pulse delay-1000"></div>
          </div>
        </div>
      </div>
      
      {/* Bottom Wave */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg className="w-full h-12 text-white" viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z" opacity=".25" fill="currentColor"></path>
          <path d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z" opacity=".5" fill="currentColor"></path>
          <path d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z" fill="currentColor"></path>
        </svg>
      </div>
    </div>
  );
};

export default January2025NewContentBanner;