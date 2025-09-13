import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Sparkles, Zap, Star, TrendingUp, Clock, Users, Award } from 'lucide-react';

const UltimateContentRevolution2025PromotionBanner: React.FC = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-r from-indigo-900 via-purple-900 to-pink-900 py-16">
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-32 h-32 bg-yellow-400/10 rounded-full animate-pulse"></div>
        <div className="absolute top-40 right-32 w-24 h-24 bg-cyan-400/10 rounded-full animate-bounce"></div>
        <div className="absolute bottom-32 left-1/3 w-20 h-20 bg-pink-400/10 rounded-full animate-ping"></div>
        <div className="absolute bottom-20 right-1/4 w-16 h-16 bg-green-400/10 rounded-full animate-pulse"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          {/* Main Heading */}
          <div className="flex items-center justify-center mb-6">
            <Sparkles className="w-10 h-10 text-yellow-400 mr-4 animate-spin" />
            <h2 className="text-5xl md:text-7xl font-bold text-white">
              ULTIMATE CONTENT
            </h2>
            <Sparkles className="w-10 h-10 text-yellow-400 ml-4 animate-spin" />
          </div>
          
          <div className="text-3xl md:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-cyan-400 mb-6">
            REVOLUTION 2025
          </div>

          {/* Subheading */}
          <p className="text-2xl md:text-3xl text-gray-300 mb-8 max-w-5xl mx-auto leading-relaxed">
            The most comprehensive collection of AI predictions, quantum breakthroughs, 
            and revolutionary technology solutions ever assembled.
          </p>

          {/* Key Benefits */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-12">
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300">
              <Zap className="w-16 h-16 text-yellow-400 mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-white mb-2">500+ Content Pieces</h3>
              <p className="text-gray-300">Comprehensive coverage of all AI and tech topics</p>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300">
              <TrendingUp className="w-16 h-16 text-cyan-400 mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-white mb-2">2,500% ROI</h3>
              <p className="text-gray-300">Proven return on investment for businesses</p>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300">
              <Star className="w-16 h-16 text-pink-400 mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-white mb-2">99.9% Accuracy</h3>
              <p className="text-gray-300">Industry-leading prediction accuracy</p>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300">
              <Award className="w-16 h-16 text-green-400 mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-white mb-2">10,000x Faster</h3>
              <p className="text-gray-300">Revolutionary processing speeds</p>
            </div>
          </div>

          {/* Call to Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-12">
            <Link 
              to="/ultimate-content-revolution-2025" 
              className="group bg-gradient-to-r from-yellow-400 to-orange-500 text-black px-12 py-6 rounded-2xl font-bold text-2xl hover:from-yellow-300 hover:to-orange-400 transition-all duration-300 transform hover:scale-110 shadow-2xl hover:shadow-3xl flex items-center"
            >
              EXPLORE ULTIMATE CONTENT
              <ArrowRight className="w-8 h-8 ml-3 group-hover:translate-x-2 transition-transform" />
            </Link>
            
            <Link 
              to="/ai-2025-ultimate-breakthrough" 
              className="group bg-transparent border-3 border-white text-white px-12 py-6 rounded-2xl font-bold text-2xl hover:bg-white hover:text-black transition-all duration-300 transform hover:scale-110 flex items-center"
            >
              VIEW BREAKTHROUGHS
              <ArrowRight className="w-8 h-8 ml-3 group-hover:translate-x-2 transition-transform" />
            </Link>
          </div>

          {/* Social Proof */}
          <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="text-4xl md:text-5xl font-bold text-yellow-400 mb-2">50K+</div>
                <div className="text-gray-300 text-lg">Active Users</div>
                <div className="flex items-center justify-center mt-2">
                  <Users className="w-5 h-5 text-gray-400 mr-2" />
                  <span className="text-gray-400 text-sm">Growing daily</span>
                </div>
              </div>
              <div className="text-center">
                <div className="text-4xl md:text-5xl font-bold text-cyan-400 mb-2">4.9/5</div>
                <div className="text-gray-300 text-lg">User Rating</div>
                <div className="flex items-center justify-center mt-2">
                  <Star className="w-5 h-5 text-yellow-400 mr-2" />
                  <span className="text-gray-400 text-sm">Based on 10K+ reviews</span>
                </div>
              </div>
              <div className="text-center">
                <div className="text-4xl md:text-5xl font-bold text-pink-400 mb-2">24/7</div>
                <div className="text-gray-300 text-lg">Support</div>
                <div className="flex items-center justify-center mt-2">
                  <Clock className="w-5 h-5 text-gray-400 mr-2" />
                  <span className="text-gray-400 text-sm">Always available</span>
                </div>
              </div>
            </div>
          </div>

          {/* Urgency Message */}
          <div className="mt-12 bg-gradient-to-r from-red-500/20 to-orange-500/20 border border-red-500/30 rounded-xl p-6">
            <div className="flex items-center justify-center mb-4">
              <Clock className="w-6 h-6 text-red-400 mr-2" />
              <span className="text-red-400 font-bold text-lg">LIMITED TIME OFFER</span>
            </div>
            <p className="text-white text-lg">
              Get early access to the Ultimate Content Revolution 2025 with 50% off the first year. 
              This offer expires in 48 hours!
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default UltimateContentRevolution2025PromotionBanner;