import React from 'react';
import { Star, Zap, ArrowRight } from 'lucide-react';

const ContentPromotionBanner: React.FC = () => {
  return (
    <section className="py-4 px-4 bg-gradient-to-r from-cyan-500 to-blue-600">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col sm:flex-row items-center justify-between text-center sm:text-left">
          <div className="flex items-center mb-4 sm:mb-0">
            <Star className="w-5 h-5 text-yellow-300 mr-2" />
            <span className="text-white font-semibold">
              New: AI-Powered Business Solutions Now Available
            </span>
          </div>
          <a
            href="/ai-services"
            className="inline-flex items-center text-white hover:text-cyan-100 transition-colors font-medium"
          >
            Learn More
            <ArrowRight className="w-4 h-4 ml-1" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default ContentPromotionBanner;
