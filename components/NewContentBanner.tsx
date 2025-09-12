import React from 'react';
import Link from 'next/link';

interface NewContentBannerProps {
  variant?: 'default' | 'featured' | 'urgent';
  className?: string;
}

export default function NewContentBanner({ 
  variant = 'default', 
  className = '' 
}: NewContentBannerProps) {
  const getVariantStyles = () => {
    switch (variant) {
      case 'featured':
        return {
          container: 'bg-gradient-to-r from-purple-600 via-pink-600 to-red-600',
          text: 'text-white',
          button: 'bg-white text-purple-600 hover:bg-gray-100',
          buttonSecondary: 'border-2 border-white text-white hover:bg-white hover:text-purple-600'
        };
      case 'urgent':
        return {
          container: 'bg-gradient-to-r from-red-600 to-orange-600',
          text: 'text-white',
          button: 'bg-white text-red-600 hover:bg-gray-100',
          buttonSecondary: 'border-2 border-white text-white hover:bg-white hover:text-red-600'
        };
      default:
        return {
          container: 'bg-gradient-to-r from-blue-600 to-indigo-600',
          text: 'text-white',
          button: 'bg-white text-blue-600 hover:bg-gray-100',
          buttonSecondary: 'border-2 border-white text-white hover:bg-white hover:text-blue-600'
        };
    }
  };

  const styles = getVariantStyles();

  return (
    <section className={`py-12 ${styles.container} ${className}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <div className="inline-flex items-center bg-white bg-opacity-20 rounded-full px-6 py-2 mb-6">
            <span className="text-sm font-medium text-white">
              🚀 JUST PUBLISHED - NEW CONTENT
            </span>
          </div>
          
          <h2 className={`text-4xl md:text-5xl font-bold mb-6 ${styles.text}`}>
            Revolutionary AI Content Just Released
          </h2>
          
          <p className={`text-xl md:text-2xl mb-8 max-w-4xl mx-auto leading-relaxed ${styles.text} opacity-90`}>
            Discover the latest AI transformation strategies, real-world case studies, and implementation guides that are helping businesses achieve 300% growth and 95% customer satisfaction.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-lg p-6">
              <div className="text-3xl font-bold text-white mb-2">300%</div>
              <div className="text-sm text-white opacity-90">Revenue Growth</div>
            </div>
            <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-lg p-6">
              <div className="text-3xl font-bold text-white mb-2">95%</div>
              <div className="text-sm text-white opacity-90">Customer Satisfaction</div>
            </div>
            <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-lg p-6">
              <div className="text-3xl font-bold text-white mb-2">80%</div>
              <div className="text-sm text-white opacity-90">Cost Reduction</div>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <Link
              href="/blog/ai-enterprise-transformation-2025"
              className={`${styles.button} px-10 py-4 rounded-lg font-semibold transition-colors text-lg shadow-lg`}
            >
              📚 Read Enterprise Guide
            </Link>
            <Link
              href="/blog/ai-customer-experience-revolution-2025"
              className={`${styles.buttonSecondary} px-10 py-4 rounded-lg font-semibold transition-colors text-lg`}
            >
              🎯 CX Revolution Guide
            </Link>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/case-studies/ai-retail-transformation-success-2025"
              className={`${styles.buttonSecondary} px-8 py-3 rounded-lg font-semibold transition-colors`}
            >
              📊 View Success Stories
            </Link>
            <Link
              href="/resources"
              className={`${styles.buttonSecondary} px-8 py-3 rounded-lg font-semibold transition-colors`}
            >
              📋 Download Resources
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}