// import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle, TrendingUp, DollarSign, Users, Clock } from 'lucide-react';

const Fortune100SuccessStoryBanner: React.FC = () => {
  return (
    <div className="relative overflow-hidden bg-gradient-to-br from-green-900 via-emerald-800 to-teal-900 text-white">
      <div className="absolute inset-0 bg-black opacity-20"></div>
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center mb-12">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-green-600 text-sm font-medium mb-6">
            <CheckCircle className="w-4 h-4 mr-2" />
            FORTUNE 100 SUCCESS STORY
          </div>
          
          <h2 className="text-4xl lg:text-6xl font-bold leading-tight mb-6">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-300 to-emerald-300">
              $2.3 Billion
            </span>
            <br />
            Value Created in 18 Months
          </h2>
          
          <p className="text-xl text-green-100 leading-relaxed max-w-3xl mx-auto">
            Discover how a Fortune 100 conglomerate transformed operations across manufacturing, 
            logistics, and customer service using our proven AI implementation framework.
          </p>
        </div>
        
        {/* Key Metrics Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 text-center">
            <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
              <DollarSign className="w-8 h-8" />
            </div>
            <div className="text-3xl font-bold text-green-300 mb-2">$2.3B</div>
            <div className="text-green-200">Total Value Created</div>
            <div className="text-sm text-green-300 mt-2">2,300% ROI</div>
          </div>
          
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 text-center">
            <div className="w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
              <TrendingUp className="w-8 h-8" />
            </div>
            <div className="text-3xl font-bold text-blue-300 mb-2">98%</div>
            <div className="text-blue-200">Response Time Improvement</div>
            <div className="text-sm text-blue-300 mt-2">48 hours → 12 minutes</div>
          </div>
          
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 text-center">
            <div className="w-16 h-16 bg-purple-500 rounded-full flex items-center justify-center mx-auto mb-4">
              <Users className="w-8 h-8" />
            </div>
            <div className="text-3xl font-bold text-purple-300 mb-2">4.7/5</div>
            <div className="text-purple-200">Customer Satisfaction</div>
            <div className="text-sm text-purple-300 mt-2">47% improvement</div>
          </div>
          
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 text-center">
            <div className="w-16 h-16 bg-orange-500 rounded-full flex items-center justify-center mx-auto mb-4">
              <Clock className="w-8 h-8" />
            </div>
            <div className="text-3xl font-bold text-orange-300 mb-2">18</div>
            <div className="text-orange-200">Months to Full Deployment</div>
            <div className="text-sm text-orange-300 mt-2">4.2 month payback</div>
          </div>
        </div>
        
        {/* Transformation Areas */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-12">
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-green-300">Transformation Areas</h3>
            
            <div className="space-y-4">
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-8 h-8 bg-green-500 rounded-full flex items-center justify-center mt-1">
                  <CheckCircle className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-semibold text-lg">Customer Service AI</h4>
                  <p className="text-green-200 text-sm">73% of inquiries handled automatically, 98% faster response times</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-8 h-8 bg-green-500 rounded-full flex items-center justify-center mt-1">
                  <CheckCircle className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-semibold text-lg">Predictive Maintenance</h4>
                  <p className="text-green-200 text-sm">73% reduction in equipment downtime, $57M in maintenance savings</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-8 h-8 bg-green-500 rounded-full flex items-center justify-center mt-1">
                  <CheckCircle className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-semibold text-lg">Supply Chain Optimization</h4>
                  <p className="text-green-200 text-sm">$340M inventory cost reduction, 94% demand forecast accuracy</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-8 h-8 bg-green-500 rounded-full flex items-center justify-center mt-1">
                  <CheckCircle className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-semibold text-lg">Financial Risk Management</h4>
                  <p className="text-green-200 text-sm">94% fraud detection accuracy, $23M compliance cost reduction</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20">
            <h3 className="text-2xl font-bold text-green-300 mb-6">Key Success Factors</h3>
            
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                <span className="text-green-100">Executive sponsorship and C-level commitment</span>
              </div>
              
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                <span className="text-green-100">Cross-functional team collaboration</span>
              </div>
              
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                <span className="text-green-100">Phased implementation approach</span>
              </div>
              
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                <span className="text-green-100">Comprehensive change management</span>
              </div>
              
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                <span className="text-green-100">Strategic vendor partnership</span>
              </div>
              
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                <span className="text-green-100">Continuous performance optimization</span>
              </div>
            </div>
            
            <div className="mt-8 p-4 bg-green-600/20 rounded-lg border border-green-400/30">
              <p className="text-sm text-green-200">
                <strong>Result:</strong> The company achieved industry leadership in AI innovation 
                and positioned itself for continued growth in the AI-driven economy.
              </p>
            </div>
          </div>
        </div>
        
        {/* Call to Action */}
        <div className="text-center">
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link to="/case-studies/fortune-100-ai-transformation-2025-2-3-billion-success"
              className="inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-green-500 to-emerald-500 hover:from-green-600 hover:to-emerald-600 text-white font-semibold rounded-lg transition-all duration-200 transform hover:scale-105 shadow-lg hover:shadow-xl"
            >
              Read Full Case Study
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
            
            <Link to="/blog/ai-2025-january-15-practical-ai-implementation-roadmap"
              className="inline-flex items-center justify-center px-8 py-4 bg-transparent border-2 border-white hover:bg-white hover:text-green-900 text-white font-semibold rounded-lg transition-all duration-200"
            >
              View Implementation Roadmap
            </Link>
          </div>
          
          <p className="text-green-200 text-sm mt-4">
            Ready to achieve similar results? Get your personalized AI transformation consultation.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Fortune100SuccessStoryBanner;