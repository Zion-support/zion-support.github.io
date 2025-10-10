'use client';
import React from 'react';

const ContentPromotionBanner: React.FC = () => {
  return (
    <div className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white py-4">
      <div className="container mx-auto px-4 text-center">
        <p className="text-sm font-medium">
          🚀 New: AI Voice Assistant Platform - Starting at $299/month | 
          <a href="/ai-voice-assistant" className="underline ml-2 hover:text-cyan-200">
            Learn More
          </a>
        </p>
      </div>
    </div>
  );
};

export default ContentPromotionBanner;