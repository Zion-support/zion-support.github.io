>>>>>>> origin/cursor/fix-errors-and-merge-to-main-6be4
=======
import React, { useState } from 'react';
import { X, ArrowRight } from 'lucide-react';

export const ContentPromotionBanner: React.FC = () => {
  const [isVisible, setIsVisible] = useState(true);

  if (!isVisible) return null;

  return (
    <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-3 px-4 relative">
      <div className="container mx-auto flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <div className="flex items-center space-x-2">
            <span className="font-semibold">New:</span>
            <span>Check out our latest AI solutions and 5G services!</span>
          </div>
          <a 
            href="/services" 
            className="flex items-center space-x-1 hover:underline transition-colors"
          >
            <span>Learn More</span>
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>
        <button
          onClick={() => setIsVisible(false)}
          className="text-white hover:text-gray-200 transition-colors"
          aria-label="Close banner"
        >
          <X className="w-5 h-5" />
        </button>
      </div>
    </div>
  );
};
