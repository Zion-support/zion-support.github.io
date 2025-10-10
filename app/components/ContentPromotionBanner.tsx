'use client';
import React from 'react';
import { Zap, Shield, Star, Users, ArrowRight } from 'lucide-react';

const ContentPromotionBanner: React.FC = () => {
  return (
    <div className="bg-gradient-to-r from-cyan-500/10 to-purple-500/10 border-b border-cyan-500/20 py-4">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="flex items-center space-x-4 mb-4 md:mb-0">
            <div className="flex items-center space-x-2">
              <Zap className="w-5 h-5 text-cyan-400" />
              <span className="text-white font-semibold">New AI Solutions Available</span>
            </div>
            <div className="hidden md:flex items-center space-x-4 text-sm text-gray-300">
              <div className="flex items-center space-x-1">
                <Shield className="w-4 h-4 text-green-400" />
                <span>Enterprise Security</span>
              </div>
              <div className="flex items-center space-x-1">
                <Star className="w-4 h-4 text-yellow-400" />
                <span>5-Star Rated</span>
              </div>
              <div className="flex items-center space-x-1">
                <Users className="w-4 h-4 text-blue-400" />
                <span>500+ Clients</span>
              </div>
            </div>
          </div>
          
          <div className="flex items-center space-x-4">
            <a
              href="/consultation"
              className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-6 py-2 rounded-lg font-semibold hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 flex items-center space-x-2"
            >
              <span>Get Free Consultation</span>
              <ArrowRight className="w-4 h-4" />
            </a>
            <a
              href="tel:+13024640950"
              className="text-cyan-400 hover:text-cyan-300 transition-colors font-medium"
            >
              (302) 464-0950
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContentPromotionBanner;