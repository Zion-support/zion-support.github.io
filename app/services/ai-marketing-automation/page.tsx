import React from 'react';

export const metadata = {
  title: 'AI Marketing Automation | Zion Tech Group',
  description: 'Professional AI marketing automation services for your business needs.',
  keywords: 'ai-marketing-automation, services, business, technology'
};

export default function AIMarketingAutomationPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-gray-900 mb-6">
            AI Marketing Automation
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Transform your marketing with AI-powered automation that delivers personalized experiences, 
            optimizes campaigns, and drives measurable results.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Key Features</h2>
            <ul className="space-y-4">
              <li className="flex items-start">
                <span className="text-green-500 text-xl mr-3">✓</span>
                <span className="text-gray-700">AI-powered customer segmentation and targeting</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-500 text-xl mr-3">✓</span>
                <span className="text-gray-700">Automated email marketing campaigns</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-500 text-xl mr-3">✓</span>
                <span className="text-gray-700">Social media content generation and scheduling</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-500 text-xl mr-3">✓</span>
                <span className="text-gray-700">Predictive analytics for campaign optimization</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-500 text-xl mr-3">✓</span>
                <span className="text-gray-700">Multi-channel marketing orchestration</span>
              </li>
            </ul>
          </div>
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Benefits</h2>
            <ul className="space-y-4">
              <li className="flex items-start">
                <span className="text-blue-500 text-xl mr-3">→</span>
                <span className="text-gray-700">Increase marketing ROI by up to 300%</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-500 text-xl mr-3">→</span>
                <span className="text-gray-700">Reduce manual work by 80%</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-500 text-xl mr-3">→</span>
                <span className="text-gray-700">Improve customer engagement by 150%</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-500 text-xl mr-3">→</span>
                <span className="text-gray-700">Scale campaigns across multiple channels</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-500 text-xl mr-3">→</span>
                <span className="text-gray-700">Real-time performance optimization</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Pricing Plans</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="bg-white rounded-lg shadow-lg p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Starter</h3>
              <div className="text-4xl font-bold text-blue-600 mb-6">$299/month</div>
              <ul className="space-y-3 mb-8">
                <li>Up to 10,000 contacts</li>
                <li>5 automated campaigns</li>
                <li>Basic AI content generation</li>
                <li>Email support</li>
              </ul>
              <button className="w-full bg-blue-600 text-white py-3 px-6 rounded-lg hover:bg-blue-700 transition-colors">
                Get Started
              </button>
            </div>
            <div className="bg-white rounded-lg shadow-lg p-8 border-2 border-blue-600">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Professional</h3>
              <div className="text-4xl font-bold text-blue-600 mb-6">$799/month</div>
              <ul className="space-y-3 mb-8">
                <li>Up to 50,000 contacts</li>
                <li>Unlimited campaigns</li>
                <li>Advanced AI features</li>
                <li>Multi-channel automation</li>
                <li>Priority support</li>
              </ul>
              <button className="w-full bg-blue-600 text-white py-3 px-6 rounded-lg hover:bg-blue-700 transition-colors">
                Get Started
              </button>
            </div>
            <div className="bg-white rounded-lg shadow-lg p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Enterprise</h3>
              <div className="text-4xl font-bold text-blue-600 mb-6">Custom</div>
              <ul className="space-y-3 mb-8">
                <li>Unlimited contacts</li>
                <li>Custom integrations</li>
                <li>Dedicated account manager</li>
                <li>24/7 support</li>
                <li>Custom AI models</li>
              </ul>
              <button className="w-full bg-blue-600 text-white py-3 px-6 rounded-lg hover:bg-blue-700 transition-colors">
                Contact Sales
              </button>
            </div>
          </div>
        </div>

        <div className="mt-16 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Ready to Transform Your Marketing?</h2>
          <p className="text-lg text-gray-600 mb-8">
            Contact our team to discuss your marketing automation needs and get a free consultation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:+13024640950"
              className="bg-green-600 text-white py-3 px-8 rounded-lg hover:bg-green-700 transition-colors"
            >
              Call +1 302 464 0950
            </a>
            <a
              href="mailto:kleber@ziontechgroup.com"
              className="bg-blue-600 text-white py-3 px-8 rounded-lg hover:bg-blue-700 transition-colors"
            >
              Email Us
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
