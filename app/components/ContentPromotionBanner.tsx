'use client';
import React from 'react';
import { Star, ArrowRight } from 'lucide-react';

const ContentPromotionBanner: React.FC = () => {
  return (
    <div className="bg-gradient-to-r from-cyan-600 via-purple-600 to-pink-600 text-white py-4 relative overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0 bg-gradient-to-r from-cyan-600/20 via-purple-600/20 to-pink-600/20 animate-pulse"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col sm:flex-row items-center justify-center text-center sm:text-left">
          <div className="flex items-center space-x-2 mb-2 sm:mb-0">
            <Star className="w-5 h-5 animate-pulse" />
            <span className="font-semibold text-sm sm:text-base">
              <span className="sr-only">Screen reader: </span>New AI Solutions Available
            </span>
            <Star className="w-4 h-4 text-yellow-300 animate-bounce" />
          </div>
          
          <div className="flex items-center space-x-4 ml-0 sm:ml-6">
            <span className="text-sm sm:text-base">
              <span className="sr-only">Screen reader: </span>
              Transform your business with cutting-edge AI technology</h3>
              <p className="text-white/80 text-sm">{feature.description}</p>
            </div>
          ))}
        </div>

        {/* Benefits List */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <div>
            <h3 className="text-2xl font-bold text-white mb-6">Why Choose Zion Tech Group?</h3>
            <ul className="space-y-3">
              {benefits.slice(0, 4).map((benefit, index) => (
                <li key={index} className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-green-300 flex-shrink-0" />
                  <span className="text-white/90">{benefit}</span>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-2xl font-bold text-white mb-6">Additional Benefits</h3>
            <ul className="space-y-3">
              {benefits.slice(4).map((benefit, index) => (
                <li key={index} className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-green-300 flex-shrink-0" />
                  <span className="text-white/90">{benefit}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* CTA Buttons */}
        <div className="text-center">
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-purple-600 py-4 px-8 rounded-lg font-bold text-lg hover:bg-gray-100 transition-colors duration-200 flex items-center justify-center gap-2">
              <Zap className="w-5 h-5" />
              Get Started Today
              <ArrowRight className="w-5 h-5" />
            </button>
            <button className="border-2 border-white text-white py-4 px-8 rounded-lg font-bold text-lg hover:bg-white/10 transition-colors duration-200">
              Learn More
            </button>
          </div>
          <p className="text-white/80 text-sm mt-4">
            Free consultation • No commitment • 30-day money-back guarantee
          </p>
        </div>
=======
    <div className="bg-gradient-to-r from-cyan-600 via-purple-600 to-pink-600 text-white py-4 relative overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0 bg-gradient-to-r from-cyan-600/20 via-purple-600/20 to-pink-600/20 animate-pulse"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col sm:flex-row items-center justify-center text-center sm:text-left">
          <div className="flex items-center space-x-2 mb-2 sm:mb-0">
            <Star className="w-5 h-5 animate-pulse" />
            <span className="font-semibold text-sm sm:text-base">
              <span className="sr-only">Screen reader: </span>New AI Solutions Available
            </span>
            <Star className="w-4 h-4 text-yellow-300 animate-bounce" />
          </div>
          
          <div className="flex items-center space-x-4 ml-0 sm:ml-6">
            <span className="text-sm sm:text-base">
              <span className="sr-only">Screen reader: </span>
              Transform your business with cutting-edge AI technology
            </span>
            <a
              href="/services"
              className="flex items-center space-x-1 bg-white/20 hover:bg-white/30 px-3 py-1 rounded-full text-sm font-medium transition-all duration-300 hover:scale-105"
            >
              <span><span className="sr-only">Screen reader: </span>Learn More</span>
              <ArrowRight className="w-3 h-3" />
            </a>
          </div>
        </div>
>>>>>>> main
      </div>
    </div>
  );
};

export default ContentPromotionBanner;
