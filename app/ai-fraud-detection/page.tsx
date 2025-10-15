import React, { memo, useMemo } from 'react';
import SEOHead from '../components/SEOHead';

const AIFraudDetectionPage: React.FC = memo(() => {
  const structuredData = useMemo(() => ({
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "name": "Zion AI Fraud Detection",
    "description": "Advanced AI-powered fraud detection system for real-time transaction monitoring and risk assessment",
    "url": "https://ziontechgroup.com/ai-fraud-detection",
    "applicationCategory": "BusinessApplication",
    "operatingSystem": "Web, API",
    "offers": {
      "@type": "Offer",
      "price": "299",
      "priceCurrency": "USD",
      "priceValidUntil": "2025-12-31"
    }
  }), []);

  return (
    <>
      <SEOHead
        title="AI Fraud Detection System - Zion Tech Group"
        description="Advanced AI-powered fraud detection system with real-time monitoring, machine learning algorithms, and comprehensive risk assessment for financial transactions."
        keywords="AI fraud detection, machine learning, risk assessment, transaction monitoring, financial security, fraud prevention"
        canonicalUrl="https://ziontechgroup.com/ai-fraud-detection"
        structuredData={structuredData}
      />
      
      <div className="min-h-screen bg-gradient-to-br from-red-50 to-orange-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              AI Fraud Detection System
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Protect your business with advanced AI-powered fraud detection that analyzes transactions in real-time, 
              identifies suspicious patterns, and prevents fraudulent activities before they impact your bottom line.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="mailto:kleber@ziontechgroup.com?subject=AI Fraud Detection Demo Request" 
                 className="bg-red-600 text-white px-8 py-3 rounded-lg hover:bg-red-700 transition-colors text-center">
                Request Demo
              </a>
              <a href="tel:+13024640950" 
                 className="border border-red-600 text-red-600 px-8 py-3 rounded-lg hover:bg-red-50 transition-colors text-center">
                Call Now: +1 302 464 0950
              </a>
            </div>
          </div>

          <div className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">Key Features</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Real-time Analysis</h3>
                <p className="text-gray-600">
                  Monitor transactions in real-time with sub-second response times and instant fraud alerts.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Machine Learning Models</h3>
                <p className="text-gray-600">
                  Advanced ML algorithms that continuously learn and adapt to new fraud patterns and threats.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Multi-layer Security</h3>
                <p className="text-gray-600">
                  Comprehensive security layers including behavioral analysis, device fingerprinting, and geolocation tracking.
                </p>
              </div>
            </div>
          </div>

          <div className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">Pricing Plans</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white p-8 rounded-lg shadow-md">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Starter</h3>
                <div className="text-4xl font-bold text-red-600 mb-6">$299<span className="text-lg text-gray-500">/month</span></div>
                <ul className="space-y-4 mb-8">
                  <li className="flex items-center">
                    <svg className="w-5 h-5 text-green-500 mr-3" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    Up to 10,000 transactions/month
                  </li>
                  <li className="flex items-center">
                    <svg className="w-5 h-5 text-green-500 mr-3" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    Real-time fraud detection
                  </li>
                  <li className="flex items-center">
                    <svg className="w-5 h-5 text-green-500 mr-3" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    Basic reporting dashboard
                  </li>
                </ul>
                <a href="mailto:kleber@ziontechgroup.com?subject=Starter Plan - AI Fraud Detection" 
                   className="w-full bg-red-600 text-white py-3 px-6 rounded-lg hover:bg-red-700 transition-colors text-center block">
                  Get Started
                </a>
              </div>
              
              <div className="bg-white p-8 rounded-lg shadow-md border-2 border-red-500 relative">
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="bg-red-500 text-white px-4 py-1 rounded-full text-sm font-medium">Most Popular</span>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Professional</h3>
                <div className="text-4xl font-bold text-red-600 mb-6">$799<span className="text-lg text-gray-500">/month</span></div>
                <ul className="space-y-4 mb-8">
                  <li className="flex items-center">
                    <svg className="w-5 h-5 text-green-500 mr-3" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    Up to 100,000 transactions/month
                  </li>
                  <li className="flex items-center">
                    <svg className="w-5 h-5 text-green-500 mr-3" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    Advanced ML models
                  </li>
                  <li className="flex items-center">
                    <svg className="w-5 h-5 text-green-500 mr-3" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    Custom risk rules
                  </li>
                </ul>
                <a href="mailto:kleber@ziontechgroup.com?subject=Professional Plan - AI Fraud Detection" 
                   className="w-full bg-red-600 text-white py-3 px-6 rounded-lg hover:bg-red-700 transition-colors text-center block">
                  Get Started
                </a>
              </div>
              
              <div className="bg-white p-8 rounded-lg shadow-md">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Enterprise</h3>
                <div className="text-4xl font-bold text-red-600 mb-6">Custom</div>
                <ul className="space-y-4 mb-8">
                  <li className="flex items-center">
                    <svg className="w-5 h-5 text-green-500 mr-3" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    Unlimited transactions
                  </li>
                  <li className="flex items-center">
                    <svg className="w-5 h-5 text-green-500 mr-3" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    Custom ML model training
                  </li>
                  <li className="flex items-center">
                    <svg className="w-5 h-5 text-green-500 mr-3" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    White-label solution
                  </li>
                </ul>
                <a href="mailto:kleber@ziontechgroup.com?subject=Enterprise Plan - AI Fraud Detection" 
                   className="w-full bg-gray-800 text-white py-3 px-6 rounded-lg hover:bg-gray-900 transition-colors text-center block">
                  Contact Sales
                </a>
              </div>
            </div>
          </div>

          <div className="text-center bg-red-600 text-white py-16 rounded-lg">
            <h2 className="text-3xl font-bold mb-4">Ready to Protect Your Business?</h2>
            <p className="text-xl mb-8">Get started with our AI fraud detection system today and secure your transactions.</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="mailto:kleber@ziontechgroup.com?subject=AI Fraud Detection Demo Request" 
                 className="bg-white text-red-600 px-8 py-3 rounded-lg hover:bg-gray-100 transition-colors">
                Request Demo
              </a>
              <a href="tel:+13024640950" 
                 className="border border-white text-white px-8 py-3 rounded-lg hover:bg-red-700 transition-colors">
                Call: +1 302 464 0950
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
});

AIFraudDetectionPage.displayName = 'AIFraudDetectionPage';

export default AIFraudDetectionPage;
