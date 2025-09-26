import React from 'react';

interface NewServicesShowcase2025Props {
  className?: string;
}

const NewServicesShowcase2025: React.FC<NewServicesShowcase2025Props> = ({ className = '' }) => {
  return (
    <div className={`ewservicesshowcase2025 ${className}`}>
      <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white p-6 rounded-lg">
        <h3 className="text-xl font-bold mb-2">🚀 NewServicesShowcase2025</h3>
        <p className="text-sm opacity-90">
          Advanced AI-powered component for enhanced user experience and business automation.
        </p>
      </div>
    </div>
  );
};

export default NewServicesShowcase2025;