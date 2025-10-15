import React from 'react';
import SEOHead from '../components/SEOHead';

const AIFraudDetectionPage: React.FC = () => {
  return (
    <>
      <SEOHead
        title="AI Fraud Detection - Zion Tech Group"
        description="Advanced AI-powered fraud detection system. Protect your business from fraudulent transactions, identity theft, and suspicious activities with real-time monitoring."
        keywords="AI fraud detection, fraud prevention, transaction monitoring, identity verification, risk assessment, security AI"
        canonicalUrl="https://ziontechgroup.com/ai-fraud-detection"
      />
      
      <div className="min-h-screen bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-gray-900 mb-6">AI Fraud Detection System</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Protect your business with advanced AI-powered fraud detection. Real-time monitoring, risk assessment, and automated prevention to safeguard your transactions and users.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Detection Capabilities</h2>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <div className="flex-shrink-0 w-6 h-6 bg-red-100 rounded-full flex items-center justify-center mt-1">
                    <svg className="w-3 h-3 text-red-600" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div className="ml-3">
                    <h3 className="text-lg font-semibold text-gray-900">Real-Time Monitoring</h3>
                    <p className="text-gray-600">Continuous monitoring of transactions and user behavior patterns</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="flex-shrink-0 w-6 h-6 bg-red-100 rounded-full flex items-center justify-center mt-1">
                    <svg className="w-3 h-3 text-red-600" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div className="ml-3">
                    <h3 className="text-lg font-semibold text-gray-900">Machine Learning Models</h3>
                    <p className="text-gray-600">Advanced ML algorithms that learn and adapt to new fraud patterns</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="flex-shrink-0 w-6 h-6 bg-red-100 rounded-full flex items-center justify-center mt-1">
                    <svg className="w-3 h-3 text-red-600" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div className="ml-3">
                    <h3 className="text-lg font-semibold text-gray-900">Identity Verification</h3>
                    <p className="text-gray-600">Multi-factor authentication and identity verification systems</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="flex-shrink-0 w-6 h-6 bg-red-100 rounded-full flex items-center justify-center mt-1">
                    <svg className="w-3 h-3 text-red-600" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div className="ml-3">
                    <h3 className="text-lg font-semibold text-gray-900">Risk Scoring</h3>
                    <p className="text-gray-600">Comprehensive risk assessment with detailed scoring and recommendations</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="flex-shrink-0 w-6 h-6 bg-red-100 rounded-full flex items-center justify-center mt-1">
                    <svg className="w-3 h-3 text-red-600" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div className="ml-3">
                    <h3 className="text-lg font-semibold text-gray-900">Automated Response</h3>
                    <p className="text-gray-600">Automated blocking, flagging, and alert systems for suspicious activities</p>
                  </div>
                </li>
              </ul>
            </div>
            
            <div className="bg-gray-50 p-8 rounded-lg">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Pricing Plans</h3>
              <div className="space-y-4">
                <div className="border border-gray-200 rounded-lg p-4">
                  <h4 className="text-lg font-semibold text-gray-900">Basic Protection</h4>
                  <p className="text-3xl font-bold text-red-600">$99<span className="text-lg text-gray-600">/month</span></p>
                  <ul className="mt-4 space-y-2 text-sm text-gray-600">
                    <li>• Up to 10,000 transactions/month</li>
                    <li>• Basic fraud detection</li>
                    <li>• Email alerts</li>
                    <li>• Standard reporting</li>
                    <li>• Email support</li>
                  </ul>
                </div>
                <div className="border border-red-500 rounded-lg p-4 bg-red-50">
                  <h4 className="text-lg font-semibold text-gray-900">Advanced Security</h4>
                  <p className="text-3xl font-bold text-red-600">$299<span className="text-lg text-gray-600">/month</span></p>
                  <ul className="mt-4 space-y-2 text-sm text-gray-600">
                    <li>• Up to 100,000 transactions/month</li>
                    <li>• Advanced ML detection</li>
                    <li>• Real-time monitoring</li>
                    <li>• Custom rules engine</li>
                    <li>• API integration</li>
                    <li>• Priority support</li>
                  </ul>
                </div>
                <div className="border border-gray-200 rounded-lg p-4">
                  <h4 className="text-lg font-semibold text-gray-900">Enterprise Shield</h4>
                  <p className="text-3xl font-bold text-red-600">$799<span className="text-lg text-gray-600">/month</span></p>
                  <ul className="mt-4 space-y-2 text-sm text-gray-600">
                    <li>• Unlimited transactions</li>
                    <li>• Full AI capabilities</li>
                    <li>• Custom ML models</li>
                    <li>• 24/7 monitoring</li>
                    <li>• Dedicated support</li>
                    <li>• Compliance reporting</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-red-50 rounded-lg p-8 text-center">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Protect Your Business from Fraud</h2>
            <p className="text-gray-600 mb-6">Advanced AI-powered fraud detection to keep your business secure.</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="/contact" className="bg-red-600 text-white px-8 py-3 rounded-lg hover:bg-red-700 transition-colors">
                Get Security Assessment
              </a>
              <a href="mailto:kleber@ziontechgroup.com" className="border border-red-600 text-red-600 px-8 py-3 rounded-lg hover:bg-red-50 transition-colors">
                Email: kleber@ziontechgroup.com
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AIFraudDetectionPage;