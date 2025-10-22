import { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { 
  ArrowRight, 
  CheckCircle, 
  Rocket, 
  Sparkles 
} from 'lucide-react';

export default function PricingPage() {
  const [billingCycle, setBillingCycle] = useState<'monthly' | 'yearly'>('monthly');

  const basicFeatures = [
    'Basic AI Solutions',
    'Email Support',
    'Standard Performance',
    'Basic Analytics',
    'Mobile Responsive'
  ];

  const proFeatures = [
    'Advanced AI Solutions',
    'Priority Support',
    'High Performance',
    'Advanced Analytics',
    'Custom Integrations',
    'API Access'
  ];

  const enterpriseFeatures = [
    'Enterprise AI Solutions',
    '24/7 Dedicated Support',
    'Maximum Performance',
    'Custom Analytics',
    'White-label Solutions',
    'Custom Development',
    'SLA Guarantee'
  ];

  const popularServices = [
    { name: 'AI Chatbot', price: { monthly: 99, yearly: 999 } },
    { name: 'AI Content Generator', price: { monthly: 149, yearly: 1499 } },
    { name: 'AI Analytics', price: { monthly: 199, yearly: 1999 } }
  ];

  const getServicePricing = (service: any) => {
    return billingCycle === 'monthly' ? service.price.monthly : service.price.yearly;
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
        <title>Pricing | Zion Tech Group</title>
        <meta name="description" content="Professional pricing solutions for modern businesses." />
      </Helmet>
      
      <div className="container mx-auto px-4 py-20">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400 mb-6">
            Pricing
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Choose the perfect plan for your business needs
          </p>
        </div>

        {/* Billing Toggle */}
        <div className="flex justify-center mb-12">
          <div className="bg-slate-800 rounded-lg p-1">
            <button
              onClick={() => setBillingCycle('monthly')}
              className={`px-6 py-2 rounded-md transition-all ${
                billingCycle === 'monthly'
                  ? 'bg-cyan-500 text-white'
                  : 'text-gray-300 hover:text-white'
              }`}
            >
              Monthly
            </button>
            <button
              onClick={() => setBillingCycle('yearly')}
              className={`px-6 py-2 rounded-md transition-all ${
                billingCycle === 'yearly'
                  ? 'bg-cyan-500 text-white'
                  : 'text-gray-300 hover:text-white'
              }`}
            >
              Yearly (Save 20%)
            </button>
          </div>
        </div>

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {/* Basic Plan */}
          <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-8 border border-slate-700">
            <h3 className="text-2xl font-bold text-white mb-4">Basic</h3>
            <div className="mb-6">
              <span className="text-4xl font-bold text-cyan-400">
                ${billingCycle === 'monthly' ? '99' : '79'}
              </span>
              <span className="text-gray-400">/{billingCycle === 'monthly' ? 'month' : 'month'}</span>
            </div>
            <ul className="space-y-3 mb-8">
              {basicFeatures.map((feature, index) => (
                <li key={index} className="flex items-center text-gray-300">
                  <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                  {feature}
                </li>
              ))}
            </ul>
            <Link
              to="/contact"
              className="w-full bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-semibold py-3 px-6 rounded-lg hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 text-center block"
            >
              Get Started
            </Link>
          </div>

          {/* Pro Plan */}
          <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-8 border border-cyan-500 relative">
            <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
              <span className="bg-cyan-500 text-white px-4 py-1 rounded-full text-sm font-semibold">
                Most Popular
              </span>
            </div>
            <h3 className="text-2xl font-bold text-white mb-4">Pro</h3>
            <div className="mb-6">
              <span className="text-4xl font-bold text-cyan-400">
                ${billingCycle === 'monthly' ? '199' : '159'}
              </span>
              <span className="text-gray-400">/{billingCycle === 'monthly' ? 'month' : 'month'}</span>
            </div>
            <ul className="space-y-3 mb-8">
              {proFeatures.map((feature, index) => (
                <li key={index} className="flex items-center text-gray-300">
                  <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                  {feature}
                </li>
              ))}
            </ul>
            <Link
              to="/contact"
              className="w-full bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-semibold py-3 px-6 rounded-lg hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 text-center block"
            >
              Get Started
            </Link>
          </div>

          {/* Enterprise Plan */}
          <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-8 border border-slate-700">
            <h3 className="text-2xl font-bold text-white mb-4">Enterprise</h3>
            <div className="mb-6">
              <span className="text-4xl font-bold text-cyan-400">Custom</span>
            </div>
            <ul className="space-y-3 mb-8">
              {enterpriseFeatures.map((feature, index) => (
                <li key={index} className="flex items-center text-gray-300">
                  <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                  {feature}
                </li>
              ))}
            </ul>
            <Link
              to="/contact"
              className="w-full bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-semibold py-3 px-6 rounded-lg hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 text-center block"
            >
              Contact Sales
            </Link>
          </div>
        </div>

        {/* Popular Services */}
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-white mb-8">Popular Services</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {popularServices.map((service, index) => (
              <div key={index} className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-slate-700">
                <h3 className="text-xl font-semibold text-white mb-4">{service.name}</h3>
                <div className="text-2xl font-bold text-cyan-400 mb-4">
                  ${getServicePricing(service)}
                </div>
                <Link
                  to="/contact"
                  className="text-cyan-400 hover:text-cyan-300 transition-colors"
                >
                  Learn More <ArrowRight className="inline w-4 h-4 ml-1" />
                </Link>
              </div>
            ))}
          </div>
        </div>

        {/* FAQ Section */}
        <div className="text-center">
          <h2 className="text-3xl font-bold text-white mb-8">Frequently Asked Questions</h2>
          <div className="max-w-3xl mx-auto space-y-6">
            <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-slate-700">
              <h3 className="text-xl font-semibold text-white mb-3">What's included in each plan?</h3>
              <p className="text-gray-300">
                Each plan includes different levels of AI solutions, support, and features. 
                Check the feature lists above for detailed information.
              </p>
            </div>
            <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-slate-700">
              <h3 className="text-xl font-semibold text-white mb-3">Can I change plans later?</h3>
              <p className="text-gray-300">
                Yes, you can upgrade or downgrade your plan at any time. 
                Changes will be reflected in your next billing cycle.
              </p>
            </div>
            <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-slate-700">
              <h3 className="text-xl font-semibold text-white mb-3">Do you offer custom solutions?</h3>
              <p className="text-gray-300">
                Yes, our Enterprise plan includes custom development and white-label solutions. 
                Contact our sales team for more information.
              </p>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-cyan-500/10 to-purple-600/10 rounded-xl p-8 border border-cyan-500/20">
            <Rocket className="w-12 h-12 text-cyan-400 mx-auto mb-4" />
            <h2 className="text-2xl font-bold text-white mb-4">Ready to Get Started?</h2>
            <p className="text-gray-300 mb-6">
              Join thousands of businesses already using our AI solutions
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-semibold rounded-lg hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 group"
              >
                Get Started Today
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                to="/demo"
                className="inline-flex items-center px-8 py-4 border border-cyan-400 text-cyan-400 font-semibold rounded-lg hover:bg-cyan-400/10 transition-all duration-300"
              >
                <Sparkles className="mr-2 w-5 h-5" />
                View Demo
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}