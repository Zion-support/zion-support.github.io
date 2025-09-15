import React from 'react';
import Link from 'next/link';

const UltimatePromotionBanner2026 = () => {
  return (
    <section className="bg-gradient-to-r from-yellow-400 via-orange-500 to-red-500 text-white py-16 relative overflow-hidden">
      <div className="absolute inset-0 bg-black opacity-20"></div>
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="inline-flex items-center bg-white bg-opacity-20 rounded-full px-8 py-3 mb-6">
            <span className="text-sm font-medium">🔥 LIMITED TIME OFFER</span>
          </div>
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            Ultimate AI Package 2026
          </h2>
          <p className="text-xl md:text-2xl opacity-90 mb-8 max-w-4xl mx-auto leading-relaxed">
            Get access to ALL our AI solutionscontentand tools for one incredible price. 
            Save 70% on the complete package - Limited time only!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <div className="text-6xl font-bold text-yellow-200">$997</div>
            <div className="text-2xl opacity-75 line-through">$3,297</div>
            <div className="bg-red-600 text-white px-4 py-2 rounded-full font-bold">
              70% OFF
            </div>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
            <Link
              href="/ultimate-package-2026"
              className="bg-white text-orange-600 px-10 py-4 rounded-xl font-bold text-lg hover:bg-gray-100 transition-all duration-300 transform hover:scale-105"
            >
              Get Ultimate Package
            </Link>
            <Link
              href="/ultimate-package/details"
              className="border-2 border-white text-white px-10 py-4 rounded-xl font-bold text-lg hover:bg-white hover:text-orange-600 transition-all duration-300 transform hover:scale-105"
            >
              View Package Details
            </Link>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
          <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-xl p-6 text-center">
            <div className="text-4xl mb-4">📚</div>
            <h3 className="text-xl font-bold mb-3">Complete Content Library</h3>
            <p className="opacity-90">
              Access to 500+ AI tutorialsguidesand case studies
            </p>
          </div>
          <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-xl p-6 text-center">
            <div className="text-4xl mb-4">🛠️</div>
            <h3 className="text-xl font-bold mb-3">All AI Tools & Platforms</h3>
            <p className="opacity-90">
              Unlimited access to all our AI development tools and platforms
            </p>
          </div>
          <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-xl p-6 text-center">
            <div className="text-4xl mb-4">👥</div>
            <h3 className="text-xl font-bold mb-3">Premium Support</h3>
            <p className="opacity-90">
              24/7 priority support and exclusive community access
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default UltimatePromotionBanner2026;