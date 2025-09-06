import React from 'react';
import Link from 'next/link';
import FeatureCard from '../../../components/FeatureCard';
import TestimonialCard from '../../../components/TestimonialCard';
import PricingTier from '../../../components/PricingTier';

export const metadata = {
  title: 'AI-Powered CRM | Zion Tech Group',
  description: 'Revolutionary AI-powered CRM platform that automates customer interactions, predicts sales opportunities, and delivers personalized experiences at scale.',
  keywords: 'AI CRM, customer relationship management, sales automation, lead scoring, customer insights, AI-powered sales'
};

export default function AIPoweredCRMPage() {
  return (
    <div className="space-y-16">
      {/* Hero Section */}
      <section className="text-center py-16 bg-gradient-to-br from-blue-50 to-indigo-100 rounded-lg">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
          AI-Powered CRM
        </h1>
        <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
          Transform your customer relationships with our AI-powered CRM platform.
          Automate interactions, predict opportunities, and deliver personalized
          experiences at scale.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/contact"
            className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
          >
            Get Started
          </Link>
          <Link
            href="#demo"
            className="border border-blue-600 text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors"
          >
            Watch Demo
          </Link>
        </div>
      </section>

      {/* Key Features */}
      <section className="py-12">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">AI-Powered Features</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Leverage cutting-edge AI technology to automate and optimize your sales processes.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200">
            <div className="text-3xl mb-4">🎯</div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Intelligent Lead Scoring</h3>
            <p className="text-gray-600 mb-4">AI-powered lead qualification with 95% accuracy</p>
            <ul className="space-y-2">
              <li className="flex items-start">
                <span className="text-green-500 mr-2">✓</span>
                <span className="text-sm text-gray-600">Predictive customer lifetime value analysis</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-500 mr-2">✓</span>
                <span className="text-sm text-gray-600">Automated lead nurturing sequences</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-500 mr-2">✓</span>
                <span className="text-sm text-gray-600">Real-time conversion probability scoring</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-500 mr-2">✓</span>
                <span className="text-sm text-gray-600">Behavioral pattern recognition</span>
              </li>
            </ul>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200">
            <div className="text-3xl mb-4">🤖</div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Smart Sales Automation</h3>
            <p className="text-gray-600 mb-4">Automated follow-up sequences based on behavior</p>
            <ul className="space-y-2">
              <li className="flex items-start">
                <span className="text-green-500 mr-2">✓</span>
                <span className="text-sm text-gray-600">AI-generated personalized email campaigns</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-500 mr-2">✓</span>
                <span className="text-sm text-gray-600">Intelligent meeting scheduling and reminders</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-500 mr-2">✓</span>
                <span className="text-sm text-gray-600">Dynamic pricing optimization</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-500 mr-2">✓</span>
                <span className="text-sm text-gray-600">Automated task assignment</span>
              </li>
            </ul>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200">
            <div className="text-3xl mb-4">📊</div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Predictive Analytics</h3>
            <p className="text-gray-600 mb-4">Advanced forecasting with machine learning</p>
            <ul className="space-y-2">
              <li className="flex items-start">
                <span className="text-green-500 mr-2">✓</span>
                <span className="text-sm text-gray-600">Churn prediction and prevention strategies</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-500 mr-2">✓</span>
                <span className="text-sm text-gray-600">Revenue optimization recommendations</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-500 mr-2">✓</span>
                <span className="text-sm text-gray-600">Customer segmentation and targeting</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-500 mr-2">✓</span>
                <span className="text-sm text-gray-600">Sales pipeline forecasting</span>
              </li>
            </ul>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200">
            <div className="text-3xl mb-4">💡</div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Sales Intelligence</h3>
            <p className="text-gray-600 mb-4">Real-time customer insights and behavior tracking</p>
            <ul className="space-y-2">
              <li className="flex items-start">
                <span className="text-green-500 mr-2">✓</span>
                <span className="text-sm text-gray-600">Competitive analysis and market intelligence</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-500 mr-2">✓</span>
                <span className="text-sm text-gray-600">Performance analytics and reporting</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-500 mr-2">✓</span>
                <span className="text-sm text-gray-600">Custom dashboard and KPI monitoring</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-500 mr-2">✓</span>
                <span className="text-sm text-gray-600">AI-powered sales coaching</span>
              </li>
            </ul>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200">
            <div className="text-3xl mb-4">🔄</div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Workflow Automation</h3>
            <p className="text-gray-600 mb-4">Streamline repetitive tasks and processes</p>
            <ul className="space-y-2">
              <li className="flex items-start">
                <span className="text-green-500 mr-2">✓</span>
                <span className="text-sm text-gray-600">Automated data entry and updates</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-500 mr-2">✓</span>
                <span className="text-sm text-gray-600">Smart document generation</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-500 mr-2">✓</span>
                <span className="text-sm text-gray-600">Integration with existing tools</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-500 mr-2">✓</span>
                <span className="text-sm text-gray-600">Custom workflow creation</span>
              </li>
            </ul>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200">
            <div className="text-3xl mb-4">📱</div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Mobile-First Design</h3>
            <p className="text-gray-600 mb-4">Access your CRM anywhere, anytime</p>
            <ul className="space-y-2">
              <li className="flex items-start">
                <span className="text-green-500 mr-2">✓</span>
                <span className="text-sm text-gray-600">Native mobile applications</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-500 mr-2">✓</span>
                <span className="text-sm text-gray-600">Offline data synchronization</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-500 mr-2">✓</span>
                <span className="text-sm text-gray-600">Push notifications and alerts</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-500 mr-2">✓</span>
                <span className="text-sm text-gray-600">Voice-to-text data entry</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="py-12 bg-gray-50 rounded-lg">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Flexible Pricing Plans</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Choose the plan that fits your business needs. All plans include our core AI features.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          <div className="bg-white p-8 rounded-lg shadow-lg border border-gray-200">
            <h3 className="text-2xl font-bold text-gray-900 mb-2">Starter</h3>
            <div className="mb-4">
              <span className="text-4xl font-bold text-gray-900">$99</span>
              <span className="text-gray-600">/month</span>
            </div>
            <p className="text-gray-600 mb-6">Perfect for small teams getting started with AI CRM</p>
            <ul className="space-y-3 mb-8">
              <li className="flex items-start">
                <span className="text-green-500 mr-2">✓</span>
                <span className="text-gray-600">Up to 1,000 contacts</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-500 mr-2">✓</span>
                <span className="text-gray-600">Basic AI lead scoring</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-500 mr-2">✓</span>
                <span className="text-gray-600">Email automation</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-500 mr-2">✓</span>
                <span className="text-gray-600">Standard support</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-500 mr-2">✓</span>
                <span className="text-gray-600">Mobile app access</span>
              </li>
            </ul>
            <button className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors">
              Get Started
            </button>
          </div>
          <div className="bg-white p-8 rounded-lg shadow-lg border-2 border-blue-600 relative">
            <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
              <span className="bg-blue-600 text-white px-4 py-1 rounded-full text-sm font-semibold">Most Popular</span>
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-2">Professional</h3>
            <div className="mb-4">
              <span className="text-4xl font-bold text-gray-900">$299</span>
              <span className="text-gray-600">/month</span>
            </div>
            <p className="text-gray-600 mb-6">Ideal for growing businesses with advanced needs</p>
            <ul className="space-y-3 mb-8">
              <li className="flex items-start">
                <span className="text-green-500 mr-2">✓</span>
                <span className="text-gray-600">Up to 10,000 contacts</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-500 mr-2">✓</span>
                <span className="text-gray-600">Advanced AI analytics</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-500 mr-2">✓</span>
                <span className="text-gray-600">Custom workflows</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-500 mr-2">✓</span>
                <span className="text-gray-600">Priority support</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-500 mr-2">✓</span>
                <span className="text-gray-600">API access</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-500 mr-2">✓</span>
                <span className="text-gray-600">Advanced reporting</span>
              </li>
            </ul>
            <button className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors">
              Get Started
            </button>
          </div>
          <div className="bg-white p-8 rounded-lg shadow-lg border border-gray-200">
            <h3 className="text-2xl font-bold text-gray-900 mb-2">Enterprise</h3>
            <div className="mb-4">
              <span className="text-4xl font-bold text-gray-900">$999</span>
              <span className="text-gray-600">/month</span>
            </div>
            <p className="text-gray-600 mb-6">Complete solution for large organizations</p>
            <ul className="space-y-3 mb-8">
              <li className="flex items-start">
                <span className="text-green-500 mr-2">✓</span>
                <span className="text-gray-600">Unlimited contacts</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-500 mr-2">✓</span>
                <span className="text-gray-600">Full AI suite</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-500 mr-2">✓</span>
                <span className="text-gray-600">Custom integrations</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-500 mr-2">✓</span>
                <span className="text-gray-600">Dedicated support</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-500 mr-2">✓</span>
                <span className="text-gray-600">White-label options</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-500 mr-2">✓</span>
                <span className="text-gray-600">Advanced security</span>
              </li>
            </ul>
            <button className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors">
              Contact Sales
            </button>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-12">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">What Our Clients Say</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            See how AI-powered CRM has transformed businesses across industries.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200">
            <blockquote className="text-gray-600 mb-4">
              "The AI lead scoring has increased our conversion rates by 40%. It's like having a sales expert working 24/7."
            </blockquote>
            <div>
              <p className="font-semibold text-gray-900">Sarah Johnson</p>
              <p className="text-sm text-gray-500">Sales Director, TechCorp Solutions</p>
            </div>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200">
            <blockquote className="text-gray-600 mb-4">
              "The predictive analytics helped us identify high-value prospects we would have missed. ROI increased by 300%."
            </blockquote>
            <div>
              <p className="font-semibold text-gray-900">Michael Chen</p>
              <p className="text-sm text-gray-500">VP of Sales, GrowthTech Inc</p>
            </div>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200">
            <blockquote className="text-gray-600 mb-4">
              "Automation features saved us 20 hours per week. Our team can now focus on building relationships instead of data entry."
            </blockquote>
            <div>
              <p className="font-semibold text-gray-900">Emily Rodriguez</p>
              <p className="text-sm text-gray-500">Sales Manager, InnovateLabs</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-12 bg-blue-600 rounded-lg text-white text-center">
        <h2 className="text-3xl font-bold mb-4">
          Ready to Transform Your Sales Process?
        </h2>
        <p className="text-xl mb-8 max-w-2xl mx-auto">
          Join thousands of businesses using our AI-powered CRM to boost sales and accelerate growth.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="tel:+13024640950"
            className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
          >
            Call +1 302 464 0950
          </a>
          <a
            href="mailto:kleber@ziontechgroup.com?subject=AI CRM Demo Request"
            className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors"
          >
            Get Free Demo
          </a>
        </div>
        <div className="mt-8 text-sm">
          <p>📍 364 E Main St STE 1008, Middletown DE 19709</p>
          <p>📧 kleber@ziontechgroup.com | 📞 +1 302 464 0950</p>
        </div>
      </section>
    </div>
  );
}
