import React from 'react';

const PromotionalBanner: React.FC = () => {
  return (
    <div>
      <div
        className="relative overflow-hidden"
        style={{
          background: `linear-gradient(135deg, ${banners[currentBanner].gradient.split(' ').join(', ')})`,
          backgroundImage: banners[currentBanner].bgPattern
        }}
      >
        {/* Close Button */}
        <button
          onClick={closeBanner}
          className="absolute top-4 right-4 z-20 text-white/80 hover:text-white transition-colors"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        {/* Banner Content */}
        <div className="relative z-10 container mx-auto px-4 py-6">
          <div className="flex items-center justify-between">
            <div className="flex-1">
              <div
                key={currentBanner}
                className="text-white"
              >
                <h2 className="text-2xl md:text-3xl font-bold mb-2">
                  {banners[currentBanner].title}
                </h2>
                <p className="text-lg opacity-90">
                  {banners[currentBanner].subtitle}
                </p>
              </div>
            </div>
            
            <div className="flex items-center space-x-4">
              <a
                href={banners[currentBanner].link}
                className="bg-white text-gray-900 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-300 whitespace-nowrap"
              >
                {banners[currentBanner].cta}
              </a>
              
              {/* Banner Indicators */}
              <div className="flex space-x-2">
                {banners.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentBanner(index)}
                    className={`w-2 h-2 rounded-full transition-all duration-300 ${
                      index === currentBanner ? 'bg-white' : 'bg-white/30'
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Animated Background Elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute -top-10 -left-10 w-20 h-20 bg-white/10 rounded-full animate-pulse"></div>
          <div className="absolute top-1/2 -right-10 w-16 h-16 bg-white/10 rounded-full animate-pulse" style={{ animationDelay: '1s' }}></div>
          <div className="absolute bottom-0 left-1/4 w-12 h-12 bg-white/10 rounded-full animate-pulse" style={{ animationDelay: '2s' }}></div>
        </div>
      </div>
    </div>
  );
};

export default PromotionalBanner;