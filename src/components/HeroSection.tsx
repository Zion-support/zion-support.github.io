
import React from 'react';

interface HeroSectionProps {
  isLoaded: boolean;
  isVisible: boolean;
  onPhoneClick: () => void;
}

const HeroSection: React.FC<HeroSectionProps> = ({ isLoaded, isVisible, onPhoneClick }) => {
  return (
    <section
      className={`text-center mb-16 transition-all duration-1000 cyber-scan-line ${
        isLoaded && isVisible 
          ? 'opacity-100 translate-y-0' 
          : 'opacity-0 translate-y-8'
      }`}
      aria-labelledby="hero-heading"
    >
      <div className="max-w-6xl mx-auto">
        <h1 
          id="hero-heading" 
          className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 holographic-text cyber-text glitch"
          data-text="Zion Tech Group"
        >
          Zion Tech Group
        </h1>
        <p className="text-xl md:text-2xl text-cyan-400 mb-8 font-medium cyber-glow neon-text" role="doc-subtitle">
          Advanced AI and IT Solutions
        </p>
        <p className="text-base sm:text-lg md:text-xl text-gray-300 max-w-4xl mx-auto mb-8 leading-relaxed">
          Leading provider of enterprise AI solutions, quantum computing, autonomous systems, and digital transformation services.
          Transform your business with our cutting-edge technology and achieve unprecedented growth.
        </p>
        
        {/* Key Benefits */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6 max-w-7xl mx-auto mb-12">
          <div className="cyber-card hologram-card p-4 sm:p-6 hover:scale-105 transition-all duration-300">
            <div className="text-2xl sm:text-3xl mb-3">🚀</div>
            <h3 className="font-bold text-white mb-3 text-base sm:text-lg">AI-Powered Solutions</h3>
            <p className="text-xs sm:text-sm text-gray-300 leading-relaxed">Transform your business with cutting-edge artificial intelligence, machine learning, and automation technologies</p>
          </div>
          <div className="cyber-card hologram-card p-4 sm:p-6 hover:scale-105 transition-all duration-300">
            <div className="text-2xl sm:text-3xl mb-3">⚡</div>
            <h3 className="font-bold text-white mb-3 text-base sm:text-lg">Proven Results</h3>
            <p className="text-xs sm:text-sm text-gray-300 leading-relaxed">Delivering $50M+ annual savings, 95% process automation, and 300% ROI for enterprise clients</p>
          </div>
          <div className="cyber-card hologram-card p-4 sm:p-6 hover:scale-105 transition-all duration-300">
            <div className="text-2xl sm:text-3xl mb-3">🔒</div>
            <h3 className="font-bold text-white mb-3 text-base sm:text-lg">Enterprise Security</h3>
            <p className="text-xs sm:text-sm text-gray-300 leading-relaxed">Bank-level security and compliance for your critical data and infrastructure</p>
          </div>
          <div className="cyber-card hologram-card p-4 sm:p-6 hover:scale-105 transition-all duration-300 sm:col-span-2 lg:col-span-1 xl:col-span-1">
            <div className="text-2xl sm:text-3xl mb-3">🌐</div>
            <h3 className="font-bold text-white mb-3 text-base sm:text-lg">Global Reach</h3>
            <p className="text-xs sm:text-sm text-gray-300 leading-relaxed">Serving clients worldwide with 24/7 support and multi-language capabilities</p>
          </div>
        </div>
        
        {/* CTA Buttons */}
        <div className="mt-12 flex flex-col sm:flex-row gap-4 justify-center items-center">
          <a
            href="tel:+13024640950"
            onClick={onPhoneClick}
            className="cyber-button w-full sm:w-auto text-center"
            aria-label="Call us at (302) 464-0950"
          >
            📞 Call: (302) 464-0950
          </a>
          <a 
            href="/contact"
            className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-indigo-600 transition-all duration-300"
          >
            Get Free Consultation
          </a>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;