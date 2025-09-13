import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Brain, Zap, TrendingUp, Clock, Users } from 'lucide-react';

const AI2026_2030BreakthroughContentPromotionBanner: React.FC = () => {
  const stats = [
    { icon: Brain, value: "10,000x", label: "Processing Speed" },
    { icon: Zap, value: "99.9%", label: "Accuracy Rate" },
    { icon: TrendingUp, value: "2,500%", label: "Average ROI" },
    { icon: Users, value: "50,000+", label: "Companies Served" }
  ];

  return (
    <section className="py-16 bg-gradient-to-r from-blue-900 via-purple-900 to-indigo-900 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%23ffffff" fill-opacity="0.05"%3E%3Ccircle cx="30" cy="30" r="2"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-20"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center mb-12">
          {/* Badge */}
          <div className="inline-flex items-center bg-gradient-to-r from-yellow-400 to-orange-500 text-black px-6 py-2 rounded-full text-sm font-bold mb-6">
            <Clock className="w-4 h-4 mr-2" />
            Limited Time: AI 2026-2030 Breakthrough Content
          </div>

          {/* Main Heading */}
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Revolutionary AI Breakthroughs
            <span className="block bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              2026-2030
            </span>
          </h2>

          {/* Subheading */}
          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed">
            Discover the future of artificial intelligence with our comprehensive showcase of breakthrough technologies that will transform industries and redefine what's possible.
          </p>

          {/* Key Benefits */}
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            <span className="bg-white/10 backdrop-blur-sm text-white px-4 py-2 rounded-full text-sm font-semibold border border-white/20">
              Quantum-Neural Fusion
            </span>
            <span className="bg-white/10 backdrop-blur-sm text-white px-4 py-2 rounded-full text-sm font-semibold border border-white/20">
              Autonomous Decision Systems
            </span>
            <span className="bg-white/10 backdrop-blur-sm text-white px-4 py-2 rounded-full text-sm font-semibold border border-white/20">
              Predictive Intelligence
            </span>
            <span className="bg-white/10 backdrop-blur-sm text-white px-4 py-2 rounded-full text-sm font-semibold border border-white/20">
              Neural Interface Technology
            </span>
          </div>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
          {stats.map((stat, index) => {
            const IconComponent = stat.icon;
            return (
              <div key={index} className="text-center">
                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 hover:border-white/40 transition-all duration-300">
                  <div className="bg-gradient-to-r from-blue-500 to-purple-500 w-12 h-12 rounded-xl flex items-center justify-center mx-auto mb-4">
                    <IconComponent className="w-6 h-6 text-white" />
                  </div>
                  <div className="text-2xl md:text-3xl font-bold text-white mb-2">
                    {stat.value}
                  </div>
                  <div className="text-sm text-gray-300">
                    {stat.label}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* CTA Section */}
        <div className="bg-white/5 backdrop-blur-lg rounded-3xl p-8 md:p-12 border border-white/20">
          <div className="text-center">
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
              Don't Miss the AI Revolution
            </h3>
            <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
              Get exclusive access to our comprehensive AI 2026-2030 breakthrough content, including detailed implementation guides, case studies, and ROI calculators.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
              <Link
                to="/ai-2026-2030-breakthroughs"
                className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold py-4 px-8 rounded-xl transition-all duration-300 flex items-center justify-center group shadow-lg hover:shadow-xl"
              >
                Explore Breakthrough Content
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                to="/contact"
                className="bg-white/10 hover:bg-white/20 text-white font-semibold py-4 px-8 rounded-xl transition-all duration-300 border border-white/30 flex items-center justify-center"
              >
                Schedule Consultation
              </Link>
            </div>

            {/* Trust Indicators */}
            <div className="flex flex-wrap justify-center items-center gap-6 text-sm text-gray-400">
              <div className="flex items-center">
                <div className="w-2 h-2 bg-green-400 rounded-full mr-2"></div>
                Free Access
              </div>
              <div className="flex items-center">
                <div className="w-2 h-2 bg-blue-400 rounded-full mr-2"></div>
                Updated Weekly
              </div>
              <div className="flex items-center">
                <div className="w-2 h-2 bg-purple-400 rounded-full mr-2"></div>
                Expert Insights
              </div>
              <div className="flex items-center">
                <div className="w-2 h-2 bg-orange-400 rounded-full mr-2"></div>
                ROI Guaranteed
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Text */}
        <div className="text-center mt-8">
          <p className="text-gray-400 text-sm">
            Join 50,000+ industry leaders who trust Zion Tech Group for cutting-edge AI solutions
          </p>
        </div>
      </div>
    </section>
  );
};

export default AI2026_2030BreakthroughContentPromotionBanner;