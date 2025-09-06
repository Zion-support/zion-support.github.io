import React from 'react';
import Link from 'next/link';

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
          <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="text-3xl mb-4">🎯</div>
            <h3 className="text-xl font-semibold text-gray-900 mb-3">Intelligent Lead Scoring</h3>
            <p className="text-gray-600 mb-4">AI-powered lead qualification with 95% accuracy</p>
            <ul className="space-y-2">
              <li className="text-sm text-gray-600 flex items-center">
                <span className="w-1.5 h-1.5 bg-blue-500 rounded-full mr-2"></span>
                Predictive customer lifetime value analysis
              </li>
              <li className="text-sm text-gray-600 flex items-center">
                <span className="w-1.5 h-1.5 bg-blue-500 rounded-full mr-2"></span>
                Automated lead nurturing sequences
              </li>
              <li className="text-sm text-gray-600 flex items-center">
                <span className="w-1.5 h-1.5 bg-blue-500 rounded-full mr-2"></span>
                Real-time conversion probability scoring
              </li>
              <li className="text-sm text-gray-600 flex items-center">
                <span className="w-1.5 h-1.5 bg-blue-500 rounded-full mr-2"></span>
                Behavioral pattern recognition
              </li>
            </ul>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="text-3xl mb-4">🤖</div>
            <h3 className="text-xl font-semibold text-gray-900 mb-3">Smart Sales Automation</h3>
            <p className="text-gray-600 mb-4">Automated follow-up sequences based on behavior</p>
            <ul className="space-y-2">
              <li className="text-sm text-gray-600 flex items-center">
                <span className="w-1.5 h-1.5 bg-blue-500 rounded-full mr-2"></span>
                AI-generated personalized email campaigns
              </li>
              <li className="text-sm text-gray-600 flex items-center">
                <span className="w-1.5 h-1.5 bg-blue-500 rounded-full mr-2"></span>
                Intelligent meeting scheduling and reminders
              </li>
              <li className="text-sm text-gray-600 flex items-center">
                <span className="w-1.5 h-1.5 bg-blue-500 rounded-full mr-2"></span>
                Dynamic pricing optimization
              </li>
              <li className="text-sm text-gray-600 flex items-center">
                <span className="w-1.5 h-1.5 bg-blue-500 rounded-full mr-2"></span>
                Automated task assignment
              </li>
            </ul>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="text-3xl mb-4">📊</div>
            <h3 className="text-xl font-semibold text-gray-900 mb-3">Predictive Analytics</h3>
            <p className="text-gray-600 mb-4">Advanced forecasting with machine learning</p>
            <ul className="space-y-2">
              <li className="text-sm text-gray-600 flex items-center">
                <span className="w-1.5 h-1.5 bg-blue-500 rounded-full mr-2"></span>
                Churn prediction and prevention strategies
              </li>
              <li className="text-sm text-gray-600 flex items-center">
                <span className="w-1.5 h-1.5 bg-blue-500 rounded-full mr-2"></span>
                Revenue optimization recommendations
              </li>
              <li className="text-sm text-gray-600 flex items-center">
                <span className="w-1.5 h-1.5 bg-blue-500 rounded-full mr-2"></span>
                Customer segmentation and targeting
              </li>
              <li className="text-sm text-gray-600 flex items-center">
                <span className="w-1.5 h-1.5 bg-blue-500 rounded-full mr-2"></span>
                Sales pipeline forecasting
              </li>
            </ul>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="text-3xl mb-4">💡</div>
            <h3 className="text-xl font-semibold text-gray-900 mb-3">Sales Intelligence</h3>
            <p className="text-gray-600 mb-4">Real-time customer insights and behavior tracking</p>
            <ul className="space-y-2">
              <li className="text-sm text-gray-600 flex items-center">
                <span className="w-1.5 h-1.5 bg-blue-500 rounded-full mr-2"></span>
                Competitive analysis and market intelligence
              </li>
              <li className="text-sm text-gray-600 flex items-center">
                <span className="w-1.5 h-1.5 bg-blue-500 rounded-full mr-2"></span>
                Performance analytics and reporting
              </li>
              <li className="text-sm text-gray-600 flex items-center">
                <span className="w-1.5 h-1.5 bg-blue-500 rounded-full mr-2"></span>
                Custom dashboard and KPI monitoring
              </li>
              <li className="text-sm text-gray-600 flex items-center">
                <span className="w-1.5 h-1.5 bg-blue-500 rounded-full mr-2"></span>
                AI-powered sales coaching
              </li>
            </ul>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="text-3xl mb-4">🔄</div>
            <h3 className="text-xl font-semibold text-gray-900 mb-3">Workflow Automation</h3>
            <p className="text-gray-600 mb-4">Streamline repetitive tasks and processes</p>
            <ul className="space-y-2">
              <li className="text-sm text-gray-600 flex items-center">
                <span className="w-1.5 h-1.5 bg-blue-500 rounded-full mr-2"></span>
                Automated data entry and updates
              </li>
              <li className="text-sm text-gray-600 flex items-center">
                <span className="w-1.5 h-1.5 bg-blue-500 rounded-full mr-2"></span>
                Smart document generation
              </li>
              <li className="text-sm text-gray-600 flex items-center">
                <span className="w-1.5 h-1.5 bg-blue-500 rounded-full mr-2"></span>
                Integration with existing tools
              </li>
              <li className="text-sm text-gray-600 flex items-center">
                <span className="w-1.5 h-1.5 bg-blue-500 rounded-full mr-2"></span>
                Custom workflow creation
              </li>
            </ul>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="text-3xl mb-4">📱</div>
            <h3 className="text-xl font-semibold text-gray-900 mb-3">Mobile-First Design</h3>
            <p className="text-gray-600 mb-4">Access your CRM anywhere, anytime</p>
            <ul className="space-y-2">
              <li className="text-sm text-gray-600 flex items-center">
                <span className="w-1.5 h-1.5 bg-blue-500 rounded-full mr-2"></span>
                Native mobile applications
              </li>
              <li className="text-sm text-gray-600 flex items-center">
                <span className="w-1.5 h-1.5 bg-blue-500 rounded-full mr-2"></span>
                Offline data synchronization
              </li>
              <li className="text-sm text-gray-600 flex items-center">
                <span className="w-1.5 h-1.5 bg-blue-500 rounded-full mr-2"></span>
                Push notifications and alerts
              </li>
              <li className="text-sm text-gray-600 flex items-center">
                <span className="w-1.5 h-1.5 bg-blue-500 rounded-full mr-2"></span>
                Voice-to-text data entry
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
          <div className="bg-white p-8 rounded-lg shadow-md border border-gray-200">
            <h3 className="text-2xl font-bold text-gray-900 mb-2">Starter</h3>
            <div className="text-3xl font-bold text-blue-600 mb-2">$99<span className="text-lg text-gray-500">/month</span></div>
            <p className="text-gray-600 mb-6">Perfect for small teams getting started with AI CRM</p>
            <ul className="space-y-3 mb-8">
              <li className="flex items-center text-gray-600">
                <span className="w-5 h-5 bg-green-100 text-green-600 rounded-full flex items-center justify-center text-sm mr-3">✓</span>
                Up to 1,000 contacts
              </li>
              <li className="flex items-center text-gray-600">
                <span className="w-5 h-5 bg-green-100 text-green-600 rounded-full flex items-center justify-center text-sm mr-3">✓</span>
                Basic AI lead scoring
              </li>
              <li className="flex items-center text-gray-600">
                <span className="w-5 h-5 bg-green-100 text-green-600 rounded-full flex items-center justify-center text-sm mr-3">✓</span>
                Email automation
              </li>
              <li className="flex items-center text-gray-600">
                <span className="w-5 h-5 bg-green-100 text-green-600 rounded-full flex items-center justify-center text-sm mr-3">✓</span>
                Standard support
              </li>
              <li className="flex items-center text-gray-600">
                <span className="w-5 h-5 bg-green-100 text-green-600 rounded-full flex items-center justify-center text-sm mr-3">✓</span>
                Mobile app access
              </li>
            </ul>
            <Link href="/contact" className="block w-full text-center bg-blue-600 text-white py-3 px-6 rounded-lg font-semibold hover:bg-blue-700 transition-colors">
              Get Started
            </Link>
          </div>
          
          <div className="bg-white p-8 rounded-lg shadow-lg border-2 border-blue-500 relative">
            <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-blue-500 text-white px-4 py-1 rounded-full text-sm font-semibold">
              Most Popular
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-2">Professional</h3>
            <div className="text-3xl font-bold text-blue-600 mb-2">$299<span className="text-lg text-gray-500">/month</span></div>
            <p className="text-gray-600 mb-6">Ideal for growing businesses with advanced needs</p>
            <ul className="space-y-3 mb-8">
              <li className="flex items-center text-gray-600">
                <span className="w-5 h-5 bg-green-100 text-green-600 rounded-full flex items-center justify-center text-sm mr-3">✓</span>
                Up to 10,000 contacts
              </li>
              <li className="flex items-center text-gray-600">
                <span className="w-5 h-5 bg-green-100 text-green-600 rounded-full flex items-center justify-center text-sm mr-3">✓</span>
                Advanced AI analytics
              </li>
              <li className="flex items-center text-gray-600">
                <span className="w-5 h-5 bg-green-100 text-green-600 rounded-full flex items-center justify-center text-sm mr-3">✓</span>
                Custom workflows
              </li>
              <li className="flex items-center text-gray-600">
                <span className="w-5 h-5 bg-green-100 text-green-600 rounded-full flex items-center justify-center text-sm mr-3">✓</span>
                Priority support
              </li>
              <li className="flex items-center text-gray-600">
                <span className="w-5 h-5 bg-green-100 text-green-600 rounded-full flex items-center justify-center text-sm mr-3">✓</span>
                API access
              </li>
              <li className="flex items-center text-gray-600">
                <span className="w-5 h-5 bg-green-100 text-green-600 rounded-full flex items-center justify-center text-sm mr-3">✓</span>
                Advanced reporting
              </li>
            </ul>
            <Link href="/contact" className="block w-full text-center bg-blue-600 text-white py-3 px-6 rounded-lg font-semibold hover:bg-blue-700 transition-colors">
              Get Started
            </Link>
          </div>
          
          <div className="bg-white p-8 rounded-lg shadow-md border border-gray-200">
            <h3 className="text-2xl font-bold text-gray-900 mb-2">Enterprise</h3>
            <div className="text-3xl font-bold text-blue-600 mb-2">$999<span className="text-lg text-gray-500">/month</span></div>
            <p className="text-gray-600 mb-6">Complete solution for large organizations</p>
            <ul className="space-y-3 mb-8">
              <li className="flex items-center text-gray-600">
                <span className="w-5 h-5 bg-green-100 text-green-600 rounded-full flex items-center justify-center text-sm mr-3">✓</span>
                Unlimited contacts
              </li>
              <li className="flex items-center text-gray-600">
                <span className="w-5 h-5 bg-green-100 text-green-600 rounded-full flex items-center justify-center text-sm mr-3">✓</span>
                Full AI suite
              </li>
              <li className="flex items-center text-gray-600">
                <span className="w-5 h-5 bg-green-100 text-green-600 rounded-full flex items-center justify-center text-sm mr-3">✓</span>
                Custom integrations
              </li>
              <li className="flex items-center text-gray-600">
                <span className="w-5 h-5 bg-green-100 text-green-600 rounded-full flex items-center justify-center text-sm mr-3">✓</span>
                Dedicated support
              </li>
              <li className="flex items-center text-gray-600">
                <span className="w-5 h-5 bg-green-100 text-green-600 rounded-full flex items-center justify-center text-sm mr-3">✓</span>
                White-label options
              </li>
              <li className="flex items-center text-gray-600">
                <span className="w-5 h-5 bg-green-100 text-green-600 rounded-full flex items-center justify-center text-sm mr-3">✓</span>
                Advanced security
              </li>
            </ul>
            <Link href="/contact" className="block w-full text-center bg-blue-600 text-white py-3 px-6 rounded-lg font-semibold hover:bg-blue-700 transition-colors">
              Get Started
            </Link>
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
          <div className="bg-white p-6 rounded-lg shadow-md">
            <p className="text-gray-600 mb-4 italic">
              "The AI lead scoring has increased our conversion rates by 40%. It's like having a sales expert working 24/7."
            </p>
            <div>
              <p className="font-semibold text-gray-900">Sarah Johnson</p>
              <p className="text-sm text-gray-500">Sales Director, TechCorp Solutions</p>
            </div>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <p className="text-gray-600 mb-4 italic">
              "The predictive analytics helped us identify high-value prospects we would have missed. ROI increased by 300%."
            </p>
            <div>
              <p className="font-semibold text-gray-900">Michael Chen</p>
              <p className="text-sm text-gray-500">VP of Sales, GrowthTech Inc</p>
            </div>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <p className="text-gray-600 mb-4 italic">
              "Automation features saved us 20 hours per week. Our team can now focus on building relationships instead of data entry."
            </p>
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
