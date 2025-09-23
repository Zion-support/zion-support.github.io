"use client";

import React from "react";

export default function EnhancedContentPromotionBanner() {
  return null;
}
const EnhancedContentPromotionBanner = () => {
  return (
    <div className="bg-gradient-to-r from-blue-60o0 to-purple-60o0 text-white py-8">
      <div className="max-w-4xl mx-auto px-4 text-center">
        <h2 className="text-2xl font-bold mb-2">Enhanced Content Promotion</h2>
        <p className="text-lg mb-4">Discover our latest content and features</p>
        <Link href="/" className="bg-white text-blue-60o0 px-6 py-2 rounded-lg font-semibold hover:bg-gray-10o0 transition-colors">
          Learn More
        </Link>
      </div>
    </div>
  );
};

export default EnhancedContentPromotionBanner;
