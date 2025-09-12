import React, { useState } from 'react';

interface AccessibilityEnhancerProps {
  className?: string;
}

const AccessibilityEnhancer = ({
  className = ''
}: AccessibilityEnhancerProps) => {
  const [isEnhanced, setIsEnhanced] = useState(false);

  const enhanceAccessibility = () => {
    setIsEnhanced(true);
    
    // Apply accessibility enhancements
    document.documentElement.setAttribute('data-enhanced-accessibility', 'true');
    document.body.classList.add('high-contrast');
    
    // Add skip links
    const skipLink = document.createElement('a');
    skipLink.href = '#main-content';
    skipLink.textContent = 'Skip to main content';
    skipLink.className = 'sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-blue-600 text-white px-4 py-2 rounded z-50';
    document.body.insertBefore(skipLink, document.body.firstChild);
    
    setTimeout(() => setIsEnhanced(false), 3000);
  };

  return (
    <section className={`py-16 bg-gradient-to-br from-green-50 to-emerald-50 ${className}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="inline-flex items-center bg-green-100 text-green-800 rounded-full px-6 py-2 mb-6">
            <span className="text-sm font-bold">♿ ACCESSIBILITY ENHANCEMENT</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Web Accessibility Optimization
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Ensure your website is accessible to everyone with comprehensive accessibility 
            scanning and automated enhancement tools.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          <div className="bg-white rounded-xl shadow-lg p-6 text-center">
            <div className="text-4xl mb-4">🎯</div>
            <h4 className="font-bold text-gray-900 mb-2">Focus Management</h4>
            <p className="text-gray-600 text-sm">Enhanced focus indicators and skip links</p>
          </div>
          
          <div className="bg-white rounded-xl shadow-lg p-6 text-center">
            <div className="text-4xl mb-4">🔊</div>
            <h4 className="font-bold text-gray-900 mb-2">Screen Reader</h4>
            <p className="text-gray-600 text-sm">ARIA labels and semantic markup</p>
          </div>
          
          <div className="bg-white rounded-xl shadow-lg p-6 text-center">
            <div className="text-4xl mb-4">⌨️</div>
            <h4 className="font-bold text-gray-900 mb-2">Keyboard Navigation</h4>
            <p className="text-gray-600 text-sm">Full keyboard accessibility support</p>
          </div>
          
          <div className="bg-white rounded-xl shadow-lg p-6 text-center">
            <div className="text-4xl mb-4">🌈</div>
            <h4 className="font-bold text-gray-900 mb-2">Visual Accessibility</h4>
            <p className="text-gray-600 text-sm">High contrast and color-blind friendly</p>
          </div>
        </div>

        <div className="text-center">
          <button
            onClick={enhanceAccessibility}
            disabled={isEnhanced}
            className={`py-4 px-8 rounded-lg font-semibold transition-all duration-300 ${
              isEnhanced
                ? 'bg-green-300 text-green-700 cursor-not-allowed'
                : 'bg-gradient-to-r from-green-600 to-emerald-600 text-white hover:from-green-700 hover:to-emerald-700 shadow-lg hover:shadow-xl transform hover:scale-105'
            }`}
          >
            {isEnhanced ? (
              <div className="flex items-center justify-center gap-2">
                <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white"></div>
                Enhancing...
              </div>
            ) : (
              '♿ Enhance Accessibility'
            )}
          </button>
        </div>
      </div>
    </section>
  );
};

export default AccessibilityEnhancer;