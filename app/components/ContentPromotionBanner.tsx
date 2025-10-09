import React from 'react';
const ContentPromotionBanner: React.FC = () => {
  return (
    <section className="py-16 px-4">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl font-bold text-white mb-4">
          Transform Your Business Today
        </h2>
        <p className="text-gray-300 mb-8">
          Join thousands of companies already using our AI solutions to drive growth and innovation.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button className="bg-cyan-600 hover:bg-cyan-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors">
            Get Started
          </button>
          <button className="border-2 border-cyan-600 text-cyan-400 hover:bg-cyan-600 hover:text-white px-8 py-3 rounded-lg font-semibold transition-colors">
            Learn More
          </button>
        </div>
      </div>
    </section>
  );
};
export default ContentPromotionBanner;
=======

const ContentPromotionBanner: React.FC = () => {
  return (
    <div className="bg-gradient-to-r from-purple-600 to-blue-600 text-white py-3 px-4">
      <div className="container mx-auto text-center">
        <p className="text-sm font-medium">
          🚀 <strong>New:</strong> AI-Powered Business Intelligence Dashboard - 
          <a href="/business-intelligence" className="underline hover:no-underline ml-1">
            Learn More →
          </a>
        </p>
      </div>
    </div>
  );
};

export default ContentPromotionBanner;
>>>>>>> cursor/enhance-app-with-new-services-and-futuristic-design-8b7d
