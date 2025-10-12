import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

interface ContentPromotionBannerProps {
  className?: string;
}

const ContentPromotionBanner: React.FC<ContentPromotionBannerProps> = ({ className = '' }) => {
  return (
    <div className={`bg-gradient-to-r from-purple-500/10 to-cyan-500/10 rounded-xl p-8 border border-purple-400/20 ${className}`}>
      <div className="text-center">
        <h3 className="text-2xl font-bold text-white mb-4">
          Special Promotion Available
        </h3>
        <p className="text-gray-300 mb-6">
          Get 20% off on all our AI solutions this month. Limited time offer!
        </p>
        <Link
          to="/contact"
          className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center mx-auto w-fit"
        >
          Contact Us
          <ArrowRight className="w-5 h-5 ml-2" />
        </Link>
      </div>
    </div>
  );
};

export default ContentPromotionBanner;