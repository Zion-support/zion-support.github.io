import React from 'react';
import SEOHead from '../components/SEOHead';

const AILeadScoringPage: React.FC = () => {
  return (
    <>
      <SEOHead
        title="AI Lead Scoring - Zion Tech Group"
        description="Intelligent lead scoring with AI. Automatically score and prioritize leads based on behavior, demographics, and engagement patterns to maximize conversion rates."
        keywords="AI lead scoring, lead qualification, sales automation, lead prioritization, conversion optimization, sales intelligence"
        canonical="https://ziontechgroup.com/ai-lead-scoring"
      />
      
      <div className="min-h-screen bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-gray-900 mb-6">AI Lead Scoring System</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Automatically score and prioritize leads with AI-powered analysis. Identify high-value prospects, optimize sales efforts, and increase conversion rates with intelligent lead qualification.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Scoring Features</h2>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <div className="flex-shrink-0 w-6 h-6 bg-orange-100 rounded-full flex items-center justify-center mt-1">
                    <svg className="w-3 h-3 text-orange-600" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div className="ml-3">
                    <h3 className="text-lg font-semibold text-gray-900">Behavioral Analysis</h3>
                    <p className="text-gray-600">Track and analyze user behavior patterns to predict buying intent</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="flex-shrink-0 w-6 h-6 bg-orange-100 rounded-full flex items-center justify-center mt-1">
                    <svg className="w-3 h-3 text-orange-600" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div className="ml-3">
                    <h3 className="text-lg font-semibold text-gray-900">Demographic Scoring</h3>
                    <p className="text-gray-600">Evaluate leads based on company size, industry, and role fit</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="flex-shrink-0 w-6 h-6 bg-orange-100 rounded-full flex items-center justify-center mt-1">
                    <svg className="w-3 h-3 text-orange-600" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div className="ml-3">
                    <h3 className="text-lg font-semibold text-gray-900">Engagement Tracking</h3>
                    <p className="text-gray-600">Monitor email opens, website visits, and content interactions</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="flex-shrink-0 w-6 h-6 bg-orange-100 rounded-full flex items-center justify-center mt-1">
                    <svg className="w-3 h-3 text-orange-600" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div className="ml-3">
                    <h3 className="text-lg font-semibold text-gray-900">Predictive Modeling</h3>
                    <p className="text-gray-600">Machine learning models that improve scoring accuracy over time</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="flex-shrink-0 w-6 h-6 bg-orange-100 rounded-full flex items-center justify-center mt-1">
                    <svg className="w-3 h-3 text-orange-600" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div className="ml-3">
                    <h3 className="text-lg font-semibold text-gray-900">Real-Time Updates</h3>
                    <p className="text-gray-600">Dynamic scoring that updates as lead behavior changes</p>
                  </div>
                </li>
              </ul>
            </div>
            
            <div className="bg-gray-50 p-8 rounded-lg">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Pricing Plans</h3>
              <div className="space-y-4">
                <div className="border border-gray-200 rounded-lg p-4">
                  <h4 className="text-lg font-semibold text-gray-900">Starter</h4>
                  <p className="text-3xl font-bold text-orange-600">$79<span className="text-lg text-gray-600">/month</span></p>
                  <ul className="mt-4 space-y-2 text-sm text-gray-600">
                    <li>• Up to 1,000 leads/month</li>
                    <li>• Basic scoring models</li>
                    <li>• Email integration</li>
                    <li>• Standard reporting</li>
                    <li>• Email support</li>
                  </ul>
                </div>
                <div className="border border-orange-500 rounded-lg p-4 bg-orange-50">
                  <h4 className="text-lg font-semibold text-gray-900">Professional</h4>
                  <p className="text-3xl font-bold text-orange-600">$199<span className="text-lg text-gray-600">/month</span></p>
                  <ul className="mt-4 space-y-2 text-sm text-gray-600">
                    <li>• Up to 10,000 leads/month</li>
                    <li>• Advanced AI models</li>
                    <li>• CRM integration</li>
                    <li>• Custom scoring rules</li>
                    <li>• API access</li>
                    <li>• Priority support</li>
                  </ul>
                </div>
                <div className="border border-gray-200 rounded-lg p-4">
                  <h4 className="text-lg font-semibold text-gray-900">Enterprise</h4>
                  <p className="text-3xl font-bold text-orange-600">$499<span className="text-lg text-gray-600">/month</span></p>
                  <ul className="mt-4 space-y-2 text-sm text-gray-600">
                    <li>• Unlimited leads</li>
                    <li>• Custom AI training</li>
                    <li>• Multi-channel tracking</li>
                    <li>• Advanced analytics</li>
                    <li>• 24/7 support</li>
                    <li>• White-label options</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-orange-50 rounded-lg p-8 text-center">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Start Scoring Leads Intelligently</h2>
            <p className="text-gray-600 mb-6">Maximize your sales efficiency with AI-powered lead scoring.</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="/contact" className="bg-orange-600 text-white px-8 py-3 rounded-lg hover:bg-orange-700 transition-colors">
                Get Free Analysis
              </a>
              <a href="mailto:kleber@ziontechgroup.com" className="border border-orange-600 text-orange-600 px-8 py-3 rounded-lg hover:bg-orange-50 transition-colors">
                Email: kleber@ziontechgroup.com
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AILeadScoringPage;