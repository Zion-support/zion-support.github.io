import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle, Sparkles } from 'lucide-react';
import { useState } from 'react';

export default function PricingPage() {
  const [billingCycle, setBillingCycle] = useState('monthly');

  const CheckCircleIcon = CheckCircle;
  const SparklesIcon = Sparkles;

  const basicFeatures = [
    'Basic AI integration',
    'Standard support',
    'Core functionality'
  ];

  const proFeatures = [
    'Advanced AI features',
    'Priority support',
    'Custom integrations'
  ];

  const enterpriseFeatures = [
    'Full AI suite',
    '24/7 dedicated support',
    'Custom development'
  ];

  const popularServices = [
    { id: 1, name: 'AI Solutions', price: 99, shortDescription: 'Advanced AI solutions', route: '/ai-solutions', demoUrl: '/demo/ai-solutions' },
    { id: 2, name: 'Cloud Services', price: 149, shortDescription: 'Scalable cloud infrastructure', route: '/cloud-solutions', demoUrl: '/demo/cloud-solutions' },
    { id: 3, name: 'Data Analytics', price: 199, shortDescription: 'Comprehensive data analytics', route: '/data-analytics', demoUrl: '/demo/data-analytics' }
  ];

  const getServicePricing = (service: any) => {
    return billingCycle === 'monthly' ? service.price : service.price * 12 * 0.9;
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
            Professional pricing solutions for modern businesses.
          </p>
        </div>

        {/* Billing Toggle */}
        <div className="flex justify-center mb-12">
          <div className="bg-slate-800/50 backdrop-blur-sm rounded-lg p-1 border border-slate-700">
            <button
              onClick={() => setBillingCycle('monthly')}
              className={`px-6 py-2 rounded-md transition-all duration-300 ${
                billingCycle === 'monthly'
                  ? 'bg-cyan-500 text-white'
                  : 'text-gray-300 hover:text-white'
              }`}
            >
              Monthly
            </button>
            <button
              onClick={() => setBillingCycle('yearly')}
              className={`px-6 py-2 rounded-md transition-all duration-300 ${
                billingCycle === 'yearly'
                  ? 'bg-cyan-500 text-white'
                  : 'text-gray-300 hover:text-white'
              }`}
            >
              Yearly
            </button>
          </div>
        </div>

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {/* Basic Plan */}
          <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-8 border border-slate-700">
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold text-white mb-2">Basic</h3>
              <div className="text-4xl font-bold text-cyan-400 mb-2">
                ${billingCycle === 'yearly' ? '99' : '9'}/month
              </div>
              <p className="text-gray-400">Perfect for small businesses</p>
            </div>
            
            <ul className="space-y-4 mb-8">
              {basicFeatures.map((feature, index) => (
                <li key={index} className="flex items-center text-gray-300">
                  <CheckCircleIcon className="w-5 h-5 text-green-400 mr-3" />
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
            
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold text-white mb-2">Pro</h3>
              <div className="text-4xl font-bold text-cyan-400 mb-2">
                ${billingCycle === 'yearly' ? '199' : '19'}/month
              </div>
              <p className="text-gray-400">Perfect for growing businesses</p>
            </div>
            
            <ul className="space-y-4 mb-8">
              {proFeatures.map((feature, index) => (
                <li key={index} className="flex items-center text-gray-300">
                  <CheckCircleIcon className="w-5 h-5 text-green-400 mr-3" />
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
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold text-white mb-2">Enterprise</h3>
              <div className="text-4xl font-bold text-cyan-400 mb-2">
                Custom
              </div>
              <p className="text-gray-400">Perfect for large organizations</p>
            </div>
            
            <ul className="space-y-4 mb-8">
              {enterpriseFeatures.map((feature, index) => (
                <li key={index} className="flex items-center text-gray-300">
                  <CheckCircleIcon className="w-5 h-5 text-green-400 mr-3" />
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
                <h3 className="text-xl font-semibold text-white mb-2">{service.name}</h3>
                <div className="text-2xl font-bold text-cyan-400 mb-4">
                  ${getServicePricing(service)}
                </div>
                <p className="text-gray-300 mb-4">Professional {service.name.toLowerCase()} solution</p>
                <Link
                  to="/contact"
                  className="inline-flex items-center text-cyan-400 hover:text-cyan-300 transition-colors"
                >
                  Learn More
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Link>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Ready to get started?
          </h2>
          <p className="text-lg text-gray-300 mb-8">
            Contact us for a custom quote tailored to your needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              to="/contact" 
              className="glass-card hover-lift px-8 py-4 text-lg font-semibold text-cyan-400 border-cyan-400/30"
            >
              Get Custom Quote
              <SparklesIcon className="ml-2 h-5 w-5 inline" />
            </Link>
          </div>

          <div className="mt-8 text-sm text-gray-400">
            <p>📞 <a href="tel:+13024640950" className="text-cyan-400 hover:text-cyan-300">+1 302 464 0950</a></p>
            <p>✉️ <a href="mailto:kleber@ziontechgroup.com" className="text-cyan-400 hover:text-cyan-300">kleber@ziontechgroup.com</a></p>
          </div>
        </div>
      </div>
    </div>
  );
}