import React, { useState } from 'react';
import { Mail, ArrowRight, Star, TrendingUp, Zap } from 'lucide-react';

export default function EnhancedNewsletterSignup() {
  const [email, setEmail] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    setIsLoading(false);
    setIsSubscribed(true);
  };

  return (
    <div className="w-full bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 text-white overflow-hidden relative">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-blue-600/10 via-purple-600/10 to-pink-600/10"></div>
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>
      
      <div className="relative max-w-6xl mx-auto px-4 py-20">
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-6 py-3 rounded-full bg-gradient-to-r from-yellow-400 to-orange-500 text-black text-sm font-bold mb-8">
            <Mail className="w-5 h-5 mr-2" />
            STAY AHEAD WITH AI INNOVATION
          </div>
          
          <h2 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
            Get Exclusive Access to
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 to-orange-400">
              Revolutionary AI Content
            </span>
          </h2>
          
          <p className="text-xl md:text-2xl text-blue-100 mb-12 max-w-4xl mx-auto leading-relaxed">
            Join 50,000+ executives and innovators who receive cutting-edge AI insights, 
            breakthrough case studies, and exclusive content before anyone else.
          </p>
        </div>
        
        {!isSubscribed ? (
          <div className="max-w-2xl mx-auto">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="flex flex-col sm:flex-row gap-4">
                <div className="flex-1">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email address"
                    className="w-full px-6 py-4 rounded-xl bg-white/10 backdrop-blur-sm border border-white/20 text-white placeholder-blue-200 focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:border-transparent"
                    required
                  />
                </div>
                <button
                  type="submit"
                  disabled={isLoading}
                  className="bg-gradient-to-r from-yellow-400 to-orange-500 text-black px-8 py-4 rounded-xl font-bold text-lg hover:from-yellow-500 hover:to-orange-600 transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-1 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isLoading ? (
                    <div className="flex items-center">
                      <div className="w-5 h-5 border-2 border-black border-t-transparent rounded-full animate-spin mr-2"></div>
                      Subscribing...
                    </div>
                  ) : (
                    <div className="flex items-center">
                      Subscribe Now <ArrowRight className="w-5 h-5 ml-2" />
                    </div>
                  )}
                </button>
              </div>
            </form>
            
            {/* Benefits */}
            <div className="grid md:grid-cols-3 gap-6 mt-12">
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-green-400 to-blue-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <Star className="w-8 h-8 text-black" />
                </div>
                <h3 className="text-lg font-bold text-white mb-2">Exclusive Content</h3>
                <p className="text-blue-200 text-sm">Get access to premium AI insights and case studies before public release</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-purple-400 to-pink-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <TrendingUp className="w-8 h-8 text-black" />
                </div>
                <h3 className="text-lg font-bold text-white mb-2">Weekly Insights</h3>
                <p className="text-blue-200 text-sm">Receive curated AI trends, innovations, and business opportunities</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-orange-400 to-red-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <Zap className="w-8 h-8 text-black" />
                </div>
                <h3 className="text-lg font-bold text-white mb-2">Actionable Intelligence</h3>
                <p className="text-blue-200 text-sm">Practical strategies and implementation guides for AI transformation</p>
              </div>
            </div>
            
            {/* Trust Indicators */}
            <div className="text-center mt-12">
              <p className="text-blue-200 text-sm mb-4">Trusted by industry leaders</p>
              <div className="flex flex-wrap justify-center items-center gap-8 text-blue-300">
                <div className="flex items-center">
                  <Star className="w-4 h-4 text-yellow-400 mr-2" />
                  <span className="text-sm">50,000+ Subscribers</span>
                </div>
                <div className="flex items-center">
                  <TrendingUp className="w-4 h-4 text-green-400 mr-2" />
                  <span className="text-sm">95% Satisfaction Rate</span>
                </div>
                <div className="flex items-center">
                  <Zap className="w-4 h-4 text-purple-400 mr-2" />
                  <span className="text-sm">Zero Spam Promise</span>
                </div>
              </div>
            </div>
          </div>
        ) : (
          <div className="max-w-2xl mx-auto text-center">
            <div className="bg-gradient-to-r from-green-500 to-blue-600 rounded-3xl p-12">
              <div className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-6">
                <Mail className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-3xl font-bold text-white mb-4">Welcome to the AI Revolution!</h3>
              <p className="text-xl text-blue-100 mb-6">
                You're now part of an exclusive community of AI innovators and business leaders.
              </p>
              <p className="text-blue-200">
                Check your email for a confirmation link and your first exclusive AI insights.
              </p>
            </div>
          </div>
        )}
        
        {/* Content Recommendations */}
        <div className="mt-20">
          <h3 className="text-3xl font-bold text-center text-white mb-12">
            Don't Miss These Game-Changing Resources
          </h3>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-2xl p-6 hover:bg-white/15 transition-all group">
              <div className="w-12 h-12 bg-gradient-to-r from-green-400 to-blue-500 rounded-xl flex items-center justify-center mb-4">
                <TrendingUp className="w-6 h-6 text-black" />
              </div>
              <h4 className="text-xl font-bold text-white mb-3">Autonomous Enterprise Guide</h4>
              <p className="text-blue-200 text-sm mb-4">
                Learn how to achieve 95% automation and $25M+ ROI with autonomous AI systems.
              </p>
              <a href="/blog/ai-autonomous-enterprise-2026" className="text-yellow-300 hover:text-yellow-200 font-semibold group-hover:translate-x-1 transition-transform inline-flex items-center">
                Read Guide <ArrowRight className="w-4 h-4 ml-1" />
              </a>
            </div>
            
            <div className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-2xl p-6 hover:bg-white/15 transition-all group">
              <div className="w-12 h-12 bg-gradient-to-r from-purple-400 to-pink-500 rounded-xl flex items-center justify-center mb-4">
                <Zap className="w-6 h-6 text-black" />
              </div>
              <h4 className="text-xl font-bold text-white mb-3">Quantum AI Optimization</h4>
              <p className="text-blue-200 text-sm mb-4">
                Discover how quantum computing delivers 1000x performance improvements.
              </p>
              <a href="/blog/ai-quantum-optimization-2026" className="text-yellow-300 hover:text-yellow-200 font-semibold group-hover:translate-x-1 transition-transform inline-flex items-center">
                Read Guide <ArrowRight className="w-4 h-4 ml-1" />
              </a>
            </div>
            
            <div className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-2xl p-6 hover:bg-white/15 transition-all group">
              <div className="w-12 h-12 bg-gradient-to-r from-orange-400 to-red-500 rounded-xl flex items-center justify-center mb-4">
                <Star className="w-6 h-6 text-black" />
              </div>
              <h4 className="text-xl font-bold text-white mb-3">Success Stories</h4>
              <p className="text-blue-200 text-sm mb-4">
                Real case studies showing how companies achieved extraordinary AI results.
              </p>
              <a href="/case-studies/ai-autonomous-enterprise-success-2026" className="text-yellow-300 hover:text-yellow-200 font-semibold group-hover:translate-x-1 transition-transform inline-flex items-center">
                Read Stories <ArrowRight className="w-4 h-4 ml-1" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}