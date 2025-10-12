import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { X } from 'lucide-react';

interface ContentPromotionBannerProps {
  onClose?: () => void;
}

export default function ContentPromotionBanner({ onClose }: ContentPromotionBannerProps) {
  return (
    <>
      <Helmet>
        <title>Special Offer - Zion Tech Group</title>
        <meta name="description" content="Limited time offer on our AI and IT solutions. Get started today!" />
      </Helmet>
      
      <div className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white py-3 px-4 relative">
        <div className="container mx-auto flex items-center justify-between">
          <div className="flex-1 text-center">
            <p className="text-sm font-medium">
              🚀 <strong>Limited Time Offer:</strong> Get 20% off your first AI consultation. 
              <Link to="/contact" className="underline hover:no-underline ml-1">
                Book now
              </Link>
            </p>
          </div>
          
          {onClose && (
            <button
              onClick={onClose}
              className="ml-4 p-1 hover:bg-white/20 rounded-full transition-colors"
              aria-label="Close banner"
            >
              <X className="w-4 h-4" />
            </button>
          )}
        </div>
      </div>
    </>
  );
}