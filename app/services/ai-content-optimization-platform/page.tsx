// import React from 'react';
import { Metadata } from 'next';
import { Link } from 'react-router-dom';

export const metadata: Metadata = {
  title: 'AI Content Optimization Platform - Zion Tech Group',
  description: 'Transform your content strategy with AI-powered optimization. Boost SEO rankings, engagement rates, and conversion with intelligent content analysis and recommendations.',
  keywords: 'AI content optimization, SEO automation, content marketing AI, content analysis, marketing automation',
  robots: {
    index: true,
    follow: true,
  },
};

export default function AIContentOptimizationPlatform() {
  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">AI Content Optimization Platform</h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Revolutionize your content strategy with AI-powered optimization. Boost SEO rankings, 
          engagement rates, and conversions with intelligent content analysis and recommendations.
        </p>
      </div>

      {/* Pricing Section */}
      <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-lg p-8 mb-12">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Transparent Pricing</h2>
          <p className="text-lg text-gray-600">Choose the plan that fits your content needs</p>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Starter</h3>
            <div className="text-3xl font-bold text-blue-600 mb-4">$99/month</div>
            <ul className="space-y-2 text-gray-600">
              <li>✓ 1,000 content analyses/month</li>
              <li>✓ Basic SEO optimization</li>
              <li>✓ Keyword suggestions</li>
              <li>✓ Email support</li>
            </ul>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg border-2 border-blue-500">
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Professional</h3>
            <div className="text-3xl font-bold text-blue-600 mb-4">$299/month</div>
            <ul className="space-y-2 text-gray-600">
              <li>✓ 10,000 content analyses/month</li>
              <li>✓ Advanced AI optimization</li>
              <li>✓ Competitor analysis</li>
              <li>✓ Content calendar integration</li>
              <li>✓ Priority support</li>
            </ul>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Enterprise</h3>
            <div className="text-3xl font-bold text-blue-600 mb-4">Custom</div>
            <ul className="space-y-2 text-gray-600">
              <li>✓ Unlimited analyses</li>
              <li>✓ Custom AI models</li>
              <li>✓ White-label solution</li>
              <li>✓ Dedicated account manager</li>
              <li>✓ 24/7 phone support</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
        <div className="bg-white p-6 rounded-lg shadow-lg border border-gray-200">
          <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
            <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </div>
          <h3 className="text-xl font-semibold text-gray-900 mb-3">AI-Powered SEO Analysis</h3>
          <p className="text-gray-600 mb-4">
            Advanced machine learning algorithms analyze your content for SEO opportunities, 
            keyword density, and ranking potential.
          </p>
          <div className="text-sm text-green-600 font-medium">✓ 40% average SEO improvement</div>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-lg border border-gray-200">
          <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
            <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
            </svg>
          </div>
          <h3 className="text-xl font-semibold text-gray-900 mb-3">Engagement Optimization</h3>
          <p className="text-gray-600 mb-4">
            AI analyzes reader behavior patterns to suggest content improvements that increase 
            engagement and reduce bounce rates.
          </p>
          <div className="text-sm text-green-600 font-medium">✓ 60% higher engagement rates</div>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-lg border border-gray-200">
          <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
            <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
            </svg>
          </div>
          <h3 className="text-xl font-semibold text-gray-900 mb-3">Content Intelligence</h3>
          <p className="text-gray-600 mb-4">
            Real-time content performance tracking with predictive analytics to optimize 
            future content strategies.
          </p>
          <div className="text-sm text-green-600 font-medium">✓ 85% accuracy in predictions</div>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-lg border border-gray-200">
          <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mb-4">
            <svg className="w-6 h-6 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 100 4m0-4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 100 4m0-4v2m0-6V4" />
            </svg>
          </div>
          <h3 className="text-xl font-semibold text-gray-900 mb-3">Automated Optimization</h3>
          <p className="text-gray-600 mb-4">
            AI automatically suggests and implements content improvements, saving hours 
            of manual optimization work.
          </p>
          <div className="text-sm text-green-600 font-medium">✓ 70% time savings</div>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-lg border border-gray-200">
          <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center mb-4">
            <svg className="w-6 h-6 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
            </svg>
          </div>
          <h3 className="text-xl font-semibold text-gray-900 mb-3">Competitor Analysis</h3>
          <p className="text-gray-600 mb-4">
            Monitor competitor content strategies and identify opportunities to outperform 
            them in search rankings.
          </p>
          <div className="text-sm text-green-600 font-medium">✓ Competitive advantage insights</div>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-lg border border-gray-200">
          <div className="w-12 h-12 bg-teal-100 rounded-lg flex items-center justify-center mb-4">
            <svg className="w-6 h-6 text-teal-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
          </div>
          <h3 className="text-xl font-semibold text-gray-900 mb-3">Content Calendar Integration</h3>
          <p className="text-gray-600 mb-4">
            Seamlessly integrate with popular content management systems and calendar 
            tools for streamlined workflow.
          </p>
          <div className="text-sm text-green-600 font-medium">✓ 50+ platform integrations</div>
        </div>
      </div>

      {/* Benefits Section */}
      <div className="bg-gray-50 rounded-lg p-8 mb-12">
        <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Why Choose Our AI Content Platform?</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-xl font-semibold text-gray-900 mb-4">Proven Results</h3>
            <ul className="space-y-3 text-gray-600">
              <li className="flex items-center">
                <span className="text-green-500 mr-2">✓</span>
                Average 40% improvement in SEO rankings
              </li>
              <li className="flex items-center">
                <span className="text-green-500 mr-2">✓</span>
                60% increase in content engagement rates
              </li>
              <li className="flex items-center">
                <span className="text-green-500 mr-2">✓</span>
                70% reduction in content optimization time
              </li>
              <li className="flex items-center">
                <span className="text-green-500 mr-2">✓</span>
                85% accuracy in content performance predictions
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-semibold text-gray-900 mb-4">Enterprise Features</h3>
            <ul className="space-y-3 text-gray-600">
              <li className="flex items-center">
                <span className="text-blue-500 mr-2">✓</span>
                Advanced AI models trained on millions of content pieces
              </li>
              <li className="flex items-center">
                <span className="text-blue-500 mr-2">✓</span>
                Real-time optimization recommendations
              </li>
              <li className="flex items-center">
                <span className="text-blue-500 mr-2">✓</span>
                Custom AI training for industry-specific content
              </li>
              <li className="flex items-center">
                <span className="text-blue-500 mr-2">✓</span>
                White-label solutions for agencies
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Contact Section */}
      <div className="text-center bg-blue-50 rounded-lg p-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Ready to Transform Your Content Strategy?</h2>
        <p className="text-lg text-gray-600 mb-6">
          Join 500+ companies already using our AI Content Optimization Platform to boost their content performance.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link to="/contact" 
            className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
          >
            Start Free Trial
          </Link>
          <Link to="tel:+13024640950" 
            className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold border border-blue-600 hover:bg-blue-50 transition-colors"
          >
            Call +1 302 464 0950
          </Link>
        </div>
        <p className="text-sm text-gray-500 mt-4">
          Email: <a href="mailto:kleber@ziontechgroup.com" className="text-blue-600 hover:underline">kleber@ziontechgroup.com</a>
        </p>
      </div>
    </div>
  );
}