import React from 'react';
import SEOHead from '../components/SEOHead';
import { 
  CheckCircleIcon, 
  CloudIcon, 
  BoltIcon, 
  ShieldCheckIcon,
  SparklesIcon,
  ArrowRightIcon,
  PhoneIcon,
  EnvelopeIcon,
  GlobeAltIcon,
  ClockIcon,
  CurrencyDollarIcon,
  ChartBarIcon
} from '@heroicons/react/24/outline';

const EdgeComputingSolutionsPage: React.FC = () => {
  const features = [
    'Real-time data processing',
    'Ultra-low latency computing',
    'Distributed edge infrastructure',
    'IoT device management',
    'Edge AI and ML processing',
    '5G network optimization',
    'Edge security solutions',
    'Autonomous vehicle support',
    'Smart city infrastructure',
    'Edge cloud integration'
  ];

  const benefits = [
    '90% reduction in latency',
    '50% improvement in performance',
    'Real-time data processing',
    'Enhanced security',
    'Cost-effective scaling',
    'Future-ready infrastructure'
  ];

  const pricing = [
    {
      plan: 'Edge Starter',
      price: '$2,000',
      period: '/month',
      description: 'Perfect for small deployments',
      features: [
        'Up to 10 edge nodes',
        'Basic edge processing',
        'Email support',
        'Standard monitoring',
        'Basic security'
      ]
    },
    {
      plan: 'Edge Professional',
      price: '$5,000',
      period: '/month',
      description: 'Ideal for growing businesses',
      features: [
        'Up to 100 edge nodes',
        'Advanced edge AI',
        'Priority support',
        'Real-time monitoring',
        'Advanced security',
        'Custom integrations',
        'API access'
      ],
      popular: true
    },
    {
      plan: 'Edge Enterprise',
      price: '$15,000',
      period: '/month',
      description: 'For large organizations',
      features: [
        'Unlimited edge nodes',
        'Full edge capabilities',
        '24/7 support',
        'White-label options',
        'Custom integrations',
        'Dedicated edge team',
        'SLA guarantee',
        'Advanced analytics'
      ]
    }
  ];

  return (
    <>
      <SEOHead 
        title="Edge Computing Solutions - Zion Tech Group"
        description="Revolutionary edge computing solutions with ultra-low latency, real-time processing, and distributed infrastructure. Reduce latency by 90% and improve performance by 50%."
        keywords="edge computing, IoT solutions, real-time processing, low latency computing, distributed infrastructure, 5G optimization, smart cities"
        canonicalUrl="https://ziontechgroup.com/edge-computing-solutions"
      />
      
      <div className="min-h-screen bg-slate-900 text-white">
        {/* Hero Section */}
        <section className="relative overflow-hidden py-20 lg:py-32">
          <div className="absolute inset-0 bg-gradient-to-br from-blue-900/30 via-slate-900 to-cyan-900/30"></div>
          <div className="absolute inset-0 cyber-grid opacity-20"></div>
          
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 mb-6">
                <SparklesIcon className="w-5 h-5 text-blue-400 mr-2" />
                <span className="text-blue-300 font-medium">Next-Generation Edge Technology</span>
              </div>
              
              <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold mb-6 holographic leading-tight">
                Edge Computing Solutions
              </h1>
              
              <p className="text-lg sm:text-xl lg:text-2xl text-gray-300 mb-8 lg:mb-12 max-w-4xl mx-auto leading-relaxed">
                Transform your infrastructure with edge computing solutions that bring processing closer to data sources. 
                <span className="text-blue-400 font-semibold"> Reduce latency by 90% and improve performance by 50%.</span>
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
                <a 
                  href="#pricing"
                  className="relative group cyber-button px-8 py-4 text-lg shadow-lg shadow-blue-500/25 hover:shadow-blue-500/40"
                >
                  <span className="relative z-10 flex items-center">
                    Explore Edge Solutions
                    <ArrowRightIcon className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                  </span>
                </a>
                <a 
                  href="#demo"
                  className="border-2 border-blue-400 text-blue-300 px-8 py-4 rounded-lg font-semibold hover:bg-blue-400 hover:text-white transition-all duration-300 text-lg hover:shadow-lg hover:shadow-blue-400/25"
                >
                  Watch Demo
                </a>
              </div>
              
              {/* Stats */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
                <div className="text-center p-4 bg-slate-800/30 rounded-lg backdrop-blur-sm">
                  <div className="text-2xl lg:text-3xl font-bold text-blue-400 mb-1">90%</div>
                  <div className="text-gray-300 text-sm">Latency Reduction</div>
                </div>
                <div className="text-center p-4 bg-slate-800/30 rounded-lg backdrop-blur-sm">
                  <div className="text-2xl lg:text-3xl font-bold text-cyan-400 mb-1">50%</div>
                  <div className="text-gray-300 text-sm">Performance Boost</div>
                </div>
                <div className="text-center p-4 bg-slate-800/30 rounded-lg backdrop-blur-sm">
                  <div className="text-2xl lg:text-3xl font-bold text-green-400 mb-1">Real-time</div>
                  <div className="text-gray-300 text-sm">Data Processing</div>
                </div>
                <div className="text-center p-4 bg-slate-800/30 rounded-lg backdrop-blur-sm">
                  <div className="text-2xl lg:text-3xl font-bold text-purple-400 mb-1">5G</div>
                  <div className="text-gray-300 text-sm">Optimized</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 bg-slate-800/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
                Powerful <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">Edge Features</span>
              </h2>
              <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto">
                Experience the power of edge computing with our advanced solutions and cutting-edge technology.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <div key={index} className="group p-6 bg-slate-800/50 rounded-xl border border-slate-700 hover:border-blue-500 transition-all duration-300 hover:transform hover:scale-105 hover:shadow-xl hover:shadow-blue-500/20">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform">
                      <CloudIcon className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-xl font-semibold text-white ml-4 group-hover:text-blue-300 transition-colors">
                      {feature}
                    </h3>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
                Why Choose <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">Edge Computing Solutions</span>?
              </h2>
              <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto">
                Stay ahead of the competition with edge computing technology that provides real-time processing and ultra-low latency.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {benefits.map((benefit, index) => (
                <div key={index} className="text-center p-6">
                  <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full flex items-center justify-center mx-auto mb-4">
                    <BoltIcon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">{benefit}</h3>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section id="pricing" className="py-20 bg-slate-800/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
                Advanced <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">Edge Pricing</span>
              </h2>
              <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto">
                Choose the perfect edge computing solution for your organization's needs and infrastructure requirements.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {pricing.map((plan, index) => (
                <div key={index} className={`relative p-8 rounded-2xl ${
                  plan.popular 
                    ? 'bg-gradient-to-br from-blue-900/50 to-cyan-900/50 border-2 border-blue-500 shadow-xl shadow-blue-500/25' 
                    : 'bg-slate-800/50 border border-slate-700'
                }`}>
                  {plan.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <span className="bg-gradient-to-r from-blue-500 to-cyan-500 text-white px-6 py-2 rounded-full text-sm font-semibold">
                        Most Popular
                      </span>
                    </div>
                  )}
                  
                  <div className="text-center mb-8">
                    <h3 className="text-2xl font-bold text-white mb-2">{plan.plan}</h3>
                    <div className="text-4xl font-bold text-blue-400 mb-2">
                      {plan.price}<span className="text-lg text-gray-400">{plan.period}</span>
                    </div>
                    <p className="text-gray-300">{plan.description}</p>
                  </div>
                  
                  <ul className="space-y-4 mb-8">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-gray-300">
                        <CheckCircleIcon className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  
                  <a 
                    href="/contact"
                    className={`w-full py-3 rounded-lg font-semibold text-center block transition-all duration-300 ${
                      plan.popular
                        ? 'bg-gradient-to-r from-blue-600 to-cyan-600 text-white hover:from-blue-700 hover:to-cyan-700'
                        : 'bg-slate-700 text-white hover:bg-slate-600'
                    }`}
                  >
                    Get Started
                  </a>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
                Ready to <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">Embrace</span> Edge Computing?
              </h2>
              <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto">
                Join the edge computing revolution and transform your infrastructure with our cutting-edge solutions.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
              <div className="text-center p-6 bg-slate-800/50 rounded-xl border border-slate-700">
                <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <PhoneIcon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">Call Us</h3>
                <p className="text-cyan-400 font-semibold text-lg">+1 302 464 0950</p>
                <p className="text-gray-400 text-sm mt-2">Available 24/7 for support</p>
              </div>
              
              <div className="text-center p-6 bg-slate-800/50 rounded-xl border border-slate-700">
                <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <EnvelopeIcon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">Email Us</h3>
                <p className="text-purple-400 font-semibold text-lg">kleber@ziontechgroup.com</p>
                <p className="text-gray-400 text-sm mt-2">Quick response guaranteed</p>
              </div>
              
              <div className="text-center p-6 bg-slate-800/50 rounded-xl border border-slate-700">
                <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <GlobeAltIcon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">Visit Us</h3>
                <p className="text-green-400 font-semibold text-lg">ziontechgroup.com</p>
                <p className="text-gray-400 text-sm mt-2">364 E Main St STE 1008, Middletown DE 19709</p>
              </div>
            </div>
            
            <div className="text-center">
              <a 
                href="/contact"
                className="relative group bg-gradient-to-r from-blue-600 to-cyan-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-blue-700 hover:to-cyan-700 transition-all duration-300 transform hover:scale-105 text-lg shadow-lg shadow-blue-500/25"
              >
                <span className="relative z-10 flex items-center">
                  Explore Edge Solutions Today
                  <ArrowRightIcon className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                </span>
              </a>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default EdgeComputingSolutionsPage;