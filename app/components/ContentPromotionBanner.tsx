import React from 'react';
import { Star, Zap, Award, TrendingUp } from 'lucide-react';

const ContentPromotionBanner: React.FC = () => {
  return (
    <div className="bg-gradient-to-r from-cyan-500/10 to-purple-500/10 border-b border-cyan-400/20 py-4">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between space-y-2 md:space-y-0">
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-2">
              <Star className="w-4 h-4 text-yellow-400" />
              <span className="text-sm text-white font-medium">50+ Successful Projects</span>
            </div>
            <div className="flex items-center space-x-2">
              <Zap className="w-4 h-4 text-cyan-400" />
              <span className="text-sm text-white font-medium">300% Average ROI</span>
            </div>
            <div className="flex items-center space-x-2">
              <Award className="w-4 h-4 text-purple-400" />
              <span className="text-sm text-white font-medium">99.9% Uptime Guarantee</span>
            </div>
          </div>
          <div className="flex items-center space-x-2">
            <TrendingUp className="w-4 h-4 text-green-400" />
            <span className="text-sm text-cyan-400 font-medium">
              🎉 New: AI-Powered Business Intelligence Platform - Get 30% off your first month!
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContentPromotionBanner;