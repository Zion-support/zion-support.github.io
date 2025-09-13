import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Bell, Zap, Star, TrendingUp, Clock, Users, Award } from 'lucide-react';

const AI2025BreakthroughAnnouncementBanner: React.FC = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-r from-red-900 via-orange-900 to-yellow-900 py-16">
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-10 left-10 w-24 h-24 bg-white/10 rounded-full animate-pulse"></div>
        <div className="absolute top-32 right-20 w-20 h-20 bg-white/10 rounded-full animate-bounce"></div>
        <div className="absolute bottom-20 left-1/4 w-16 h-16 bg-white/10 rounded-full animate-ping"></div>
        <div className="absolute bottom-32 right-1/3 w-12 h-12 bg-white/10 rounded-full animate-pulse"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          {/* Announcement Badge */}
          <div className="inline-flex items-center bg-gradient-to-r from-red-500 to-orange-500 text-white px-6 py-3 rounded-full font-bold text-lg mb-8 animate-pulse">
            <Bell className="w-6 h-6 mr-2" />
            BREAKING NEWS
          </div>

          {/* Main Heading */}
          <h2 className="text-5xl md:text-7xl font-bold text-white mb-6">
            AI 2025 BREAKTHROUGH
          </h2>
          
          <div className="text-3xl md:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-400 mb-6">
            ANNOUNCEMENT
          </div>

          {/* Subheading */}
          <p className="text-2xl md:text-3xl text-gray-200 mb-8 max-w-5xl mx-auto leading-relaxed">
            Revolutionary AI technology breakthrough achieved! Experience the future of artificial intelligence 
            with unprecedented capabilities and performance improvements.
          </p>

          {/* Key Breakthrough Features */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20 hover:bg-white/20 transition-all duration-300">
              <Zap className="w-20 h-20 text-yellow-400 mx-auto mb-6" />
              <h3 className="text-3xl font-bold text-white mb-4">10,000x Faster</h3>
              <p className="text-gray-200 text-lg">Processing speed improvement over current AI systems</p>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20 hover:bg-white/20 transition-all duration-300">
              <Star className="w-20 h-20 text-cyan-400 mx-auto mb-6" />
              <h3 className="text-3xl font-bold text-white mb-4">99.9% Accuracy</h3>
              <p className="text-gray-200 text-lg">Unprecedented accuracy in AI predictions and decisions</p>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20 hover:bg-white/20 transition-all duration-300">
              <TrendingUp className="w-20 h-20 text-pink-400 mx-auto mb-6" />
              <h3 className="text-3xl font-bold text-white mb-4">2,500% ROI</h3>
              <p className="text-gray-200 text-lg">Proven return on investment for early adopters</p>
            </div>
          </div>

          {/* Call to Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-12">
            <Link 
              to="/ai-2025-breakthrough-announcement" 
              className="group bg-gradient-to-r from-yellow-400 to-orange-500 text-black px-12 py-6 rounded-2xl font-bold text-2xl hover:from-yellow-300 hover:to-orange-400 transition-all duration-300 transform hover:scale-110 shadow-2xl hover:shadow-3xl flex items-center"
            >
              LEARN ABOUT BREAKTHROUGH
              <ArrowRight className="w-8 h-8 ml-3 group-hover:translate-x-2 transition-transform" />
            </Link>
            
            <Link 
              to="/ai-2025-early-access" 
              className="group bg-transparent border-3 border-white text-white px-12 py-6 rounded-2xl font-bold text-2xl hover:bg-white hover:text-black transition-all duration-300 transform hover:scale-110 flex items-center"
            >
              GET EARLY ACCESS
              <ArrowRight className="w-8 h-8 ml-3 group-hover:translate-x-2 transition-transform" />
            </Link>
          </div>

          {/* Impact Stats */}
          <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
            <h3 className="text-2xl font-bold text-white mb-8">Breakthrough Impact</h3>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="text-4xl md:text-5xl font-bold text-yellow-400 mb-2">50K+</div>
                <div className="text-gray-200 text-lg">Early Adopters</div>
                <div className="flex items-center justify-center mt-2">
                  <Users className="w-5 h-5 text-gray-400 mr-2" />
                  <span className="text-gray-400 text-sm">Already signed up</span>
                </div>
              </div>
              <div className="text-center">
                <div className="text-4xl md:text-5xl font-bold text-cyan-400 mb-2">$2.5B</div>
                <div className="text-gray-200 text-lg">Market Impact</div>
                <div className="flex items-center justify-center mt-2">
                  <TrendingUp className="w-5 h-5 text-gray-400 mr-2" />
                  <span className="text-gray-400 text-sm">Projected value</span>
                </div>
              </div>
              <div className="text-center">
                <div className="text-4xl md:text-5xl font-bold text-pink-400 mb-2">24/7</div>
                <div className="text-gray-200 text-lg">Availability</div>
                <div className="flex items-center justify-center mt-2">
                  <Clock className="w-5 h-5 text-gray-400 mr-2" />
                  <span className="text-gray-400 text-sm">Always online</span>
                </div>
              </div>
              <div className="text-center">
                <div className="text-4xl md:text-5xl font-bold text-green-400 mb-2">4.9/5</div>
                <div className="text-gray-200 text-lg">User Rating</div>
                <div className="flex items-center justify-center mt-2">
                  <Award className="w-5 h-5 text-gray-400 mr-2" />
                  <span className="text-gray-400 text-sm">Based on reviews</span>
                </div>
              </div>
            </div>
          </div>

          {/* Urgency Message */}
          <div className="mt-12 bg-gradient-to-r from-red-500/30 to-orange-500/30 border-2 border-red-500/50 rounded-xl p-8">
            <div className="flex items-center justify-center mb-4">
              <Clock className="w-8 h-8 text-red-400 mr-3" />
              <span className="text-red-400 font-bold text-2xl">LIMITED TIME OFFER</span>
            </div>
            <p className="text-white text-xl mb-4">
              Be among the first to experience this revolutionary AI breakthrough. 
              Early access pricing available for the next 24 hours only!
            </p>
            <div className="text-3xl font-bold text-yellow-400">
              50% OFF Early Access - Expires in 24 Hours!
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AI2025BreakthroughAnnouncementBanner;