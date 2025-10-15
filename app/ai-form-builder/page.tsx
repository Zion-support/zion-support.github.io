import React from 'react';
import SEOHead from '../components/SEOHead';

const AIFormBuilderPage: React.FC = () => {
  return (
    <>
      <SEOHead
        title="AI Form Builder - Zion Tech Group"
        description="Create intelligent forms with AI-powered features. Build smart forms that adapt, validate, and provide real-time assistance to users."
        keywords="AI form builder, smart forms, intelligent forms, form automation, dynamic forms, form validation"
        canonicalUrl="https://ziontechgroup.com/ai-form-builder"
      />
      
      <div className="min-h-screen bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-gray-900 mb-6">AI Form Builder</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Create intelligent, adaptive forms that provide real-time assistance, smart validation, and personalized user experiences. Build forms that think and respond to user needs.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">AI-Powered Features</h2>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <div className="flex-shrink-0 w-6 h-6 bg-purple-100 rounded-full flex items-center justify-center mt-1">
                    <svg className="w-3 h-3 text-purple-600" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div className="ml-3">
                    <h3 className="text-lg font-semibold text-gray-900">Smart Field Suggestions</h3>
                    <p className="text-gray-600">AI suggests relevant fields based on form purpose and user behavior</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="flex-shrink-0 w-6 h-6 bg-purple-100 rounded-full flex items-center justify-center mt-1">
                    <svg className="w-3 h-3 text-purple-600" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div className="ml-3">
                    <h3 className="text-lg font-semibold text-gray-900">Intelligent Validation</h3>
                    <p className="text-gray-600">Real-time validation with helpful error messages and suggestions</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="flex-shrink-0 w-6 h-6 bg-purple-100 rounded-full flex items-center justify-center mt-1">
                    <svg className="w-3 h-3 text-purple-600" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div className="ml-3">
                    <h3 className="text-lg font-semibold text-gray-900">Adaptive Forms</h3>
                    <p className="text-gray-600">Forms that adapt and show/hide fields based on user responses</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="flex-shrink-0 w-6 h-6 bg-purple-100 rounded-full flex items-center justify-center mt-1">
                    <svg className="w-3 h-3 text-purple-600" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div className="ml-3">
                    <h3 className="text-lg font-semibold text-gray-900">Auto-Complete & Suggestions</h3>
                    <p className="text-gray-600">Smart auto-complete and field suggestions based on context</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="flex-shrink-0 w-6 h-6 bg-purple-100 rounded-full flex items-center justify-center mt-1">
                    <svg className="w-3 h-3 text-purple-600" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div className="ml-3">
                    <h3 className="text-lg font-semibold text-gray-900">Analytics & Insights</h3>
                    <p className="text-gray-600">Detailed analytics on form performance and user behavior</p>
                  </div>
                </li>
              </ul>
            </div>
            
            <div className="bg-gray-50 p-8 rounded-lg">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Pricing</h3>
              <div className="space-y-4">
                <div className="border border-gray-200 rounded-lg p-4">
                  <h4 className="text-lg font-semibold text-gray-900">Starter</h4>
                  <p className="text-3xl font-bold text-purple-600">$19<span className="text-lg text-gray-600">/month</span></p>
                  <ul className="mt-4 space-y-2 text-sm text-gray-600">
                    <li>• Up to 5 forms</li>
                    <li>• 1,000 submissions/month</li>
                    <li>• Basic AI features</li>
                    <li>• Standard templates</li>
                    <li>• Email support</li>
                  </ul>
                </div>
                <div className="border border-purple-500 rounded-lg p-4 bg-purple-50">
                  <h4 className="text-lg font-semibold text-gray-900">Professional</h4>
                  <p className="text-3xl font-bold text-purple-600">$79<span className="text-lg text-gray-600">/month</span></p>
                  <ul className="mt-4 space-y-2 text-sm text-gray-600">
                    <li>• Up to 25 forms</li>
                    <li>• 10,000 submissions/month</li>
                    <li>• Advanced AI features</li>
                    <li>• Custom templates</li>
                    <li>• API access</li>
                    <li>• Priority support</li>
                  </ul>
                </div>
                <div className="border border-gray-200 rounded-lg p-4">
                  <h4 className="text-lg font-semibold text-gray-900">Enterprise</h4>
                  <p className="text-3xl font-bold text-purple-600">$199<span className="text-lg text-gray-600">/month</span></p>
                  <ul className="mt-4 space-y-2 text-sm text-gray-600">
                    <li>• Unlimited forms</li>
                    <li>• Unlimited submissions</li>
                    <li>• Full AI capabilities</li>
                    <li>• White-label options</li>
                    <li>• Custom integrations</li>
                    <li>• 24/7 support</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-purple-50 rounded-lg p-8 text-center">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Build Intelligent Forms Today</h2>
            <p className="text-gray-600 mb-6">Create forms that adapt, learn, and provide better user experiences.</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="/contact" className="bg-purple-600 text-white px-8 py-3 rounded-lg hover:bg-purple-700 transition-colors">
                Start Building Free
              </a>
              <a href="tel:+13024640950" className="border border-purple-600 text-purple-600 px-8 py-3 rounded-lg hover:bg-purple-50 transition-colors">
                Call: +1 (302) 464-0950
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AIFormBuilderPage;