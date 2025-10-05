import React from 'react';

interface ComprehensivePromoBannerProps {
  variant?: 'hero' | 'compact' | 'featured';
  showCount?: number;
  className?: string;
}

const ComprehensivePromoBanner: React.FC<ComprehensivePromoBannerProps> = ({ 
  variant = 'hero',
  showCount = 3,
  className = ''
}) => {
  return (
    <div className={`bg-gradient-to-r from-blue-600 to-purple-700 text-white p-8 rounded-lg shadow-lg ${className}`}>
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold mb-4">
          Comprehensive Promotional Banner
        </h2>
        <p className="text-lg mb-6">
          Discover our latest offerings and innovations.
        </p>
        <div className="grid md:grid-cols-3 gap-6">
          {Array.from({ length: showCount }, (_, i) => (
            <div key={i} className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-2">Feature {i + 1}</h3>
              <p className="text-gray-200">Description of feature {i + 1}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ComprehensivePromoBanner;