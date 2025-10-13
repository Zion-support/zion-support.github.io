import React from 'react';

interface UltimateBusinessIntelligence2025BannerProps {
  className?: string;
}

export default function UltimateBusinessIntelligence2025Banner({ className = '' }: UltimateBusinessIntelligence2025BannerProps) {
  return (
    <div className={`bg-gradient-to-r from-blue-600 to-purple-600 text-white p-6 rounded-lg ${className}`}>
      <h2 className="text-2xl font-bold mb-2">Ultimate Business Intelligence 2025</h2>
      <p className="text-lg opacity-90">
        Transform your business with cutting-edge AI analytics and insights
      </p>
    </div>
  );
}
