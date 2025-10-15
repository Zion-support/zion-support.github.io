import React from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { 
  RocketLaunchIcon,
  CpuChipIcon,
  ChartBarIcon,
  CogIcon,
  ArrowRightIcon,
  CheckCircleIcon,
  StarIcon,
  UserGroupIcon,
  CloudIcon,
  ShieldCheckIcon,
  DocumentTextIcon,
  PhoneIcon,
  GlobeAltIcon,
  CurrencyDollarIcon,
  ClockIcon
} from '@heroicons/react/24/outline';

const MicroSaaSPage: React.FC = () => {
  const microSaasServices = [
    {
      icon: RocketLaunchIcon,
      title: 'AI Accounting Assistant',
      description: 'Automated bookkeeping and financial analysis for small to medium businesses.',
      price: '$29/mo',
      features: ['Automated Invoice Processing', 'Real-time Expense Tracking', 'Tax Preparation', 'Financial Reports'],
      popular: true
    },
    {
      icon: CpuChipIcon,
      title: 'AI Content Moderation Pro',
      description: 'Advanced content filtering and moderation for online platforms.',
      price: '$49/mo',
      features: ['Real-time Content Monitoring', 'Multi-language Support', 'Image & Video Analysis', 'Custom Rules'],
      popular: false
    },
    {
      icon: ChartBarIcon,
      title: 'AI Climate Solutions Pro',
      description: 'Environmental monitoring and sustainability tracking for businesses.',
      price: '$79/mo',
      features: ['Carbon Footprint Analysis', 'Sustainability Reporting', 'Compliance Monitoring', 'Green Initiatives'],
      popular: true
    },
    {
      icon: GlobeAltIcon,
      title: 'AI Agricultural Intelligence',
      description: 'Smart farming solutions for crop optimization and yield prediction.',
      price: '$99/mo',
      features: ['Crop Health Monitoring', 'Weather Analysis', 'Yield Prediction', 'Resource Optimization'],
      popular: false
    },
    {
      icon: UserGroupIcon,
      title: 'AI Business Intelligence Pro',
      description: 'Advanced analytics and insights for data-driven decision making.',
      price: '$149/mo',
      features: ['Predictive Analytics', 'Custom Dashboards', 'Real-time Insights', 'Automated Reports'],
      popular: true
    },
    {
      icon: CogIcon,
      title: 'AI Code Assistant Pro',
      description: 'AI-powered coding assistant for developers and teams.',
      price: '$199/mo',
      features: ['Code Generation', 'Bug Detection', 'Code Review', 'Documentation'],
      popular: false
    }
  ];

  const features = [
    'Easy Setup & Integration',
    'Scalable Architecture',
    '24/7 Support',
    'Regular Updates',
    'API Access',
    'Custom Branding'
  ];

  const benefits = [
    {
      icon: ClockIcon,
      title: 'Quick Deployment',
      description: 'Get up and running in minutes, not months'
    },
    {
      icon: CurrencyDollarIcon,
      title: 'Cost Effective',
      description: 'Affordable pricing with no hidden fees'
    },
    {
      icon: ShieldCheckIcon,
      title: 'Secure & Reliable',
      description: 'Enterprise-grade security and 99.9% uptime'
    },
    {
      icon: ChartBarIcon,
      title: 'Scalable Growth',
      description: 'Grows with your business needs'
    }
  ];

  const stats = [
    { number: '50+', label: 'Micro SAAS Solutions' },
    { number: '1000+', label: 'Active Users' },
    { number: '99.9%', label: 'Uptime SLA' },
    { number: '24/7', label: 'Support Available' }
  ];

  return (
    <>
      <Helmet>
        <title>Micro SAAS Solutions - Zion Tech Group</title>
        <meta name="description" content="Powerful, affordable micro software-as-a-service solutions designed for modern businesses. AI-powered tools that scale with your growth." />
        <meta name="keywords" content="micro SAAS, software as a service, AI tools, business automation, affordable software, cloud solutions" />
      </Helmet>
      
      <div className="min-h-screen bg-slate-900 text-white">
        {/* Hero Section */}
        <section className="relative py-20 lg:py-32">
          <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 to-cyan-900/20"></div>
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-5xl lg:text-7xl font-bold mb-8 bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
                Micro SAAS Solutions
              </h1>
              <p className="text-xl lg:text-2xl text-gray-300 mb-12 max-w-4xl mx-auto leading-relaxed">
                Powerful, affordable micro software-as-a-service solutions designed for modern businesses. 
                Get enterprise-grade tools without the enterprise complexity.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  to="/contact"
                  className="bg-gradient-to-r from-purple-600 to-cyan-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-purple-700 hover:to-cyan-700 transition-all duration-300 transform hover:scale-105"
                >
                  Start Free Trial
                </Link>
                <Link
                  to="/pricing"
                  className="border-2 border-purple-400 text-purple-300 px-8 py-4 rounded-lg font-semibold hover:bg-purple-400 hover:text-white transition-all duration-300"
                >
                  View Pricing
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-20 bg-slate-800/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-4xl lg:text-5xl font-bold text-purple-400 mb-2">
                    {stat.number}
                  </div>
                  <div className="text-gray-300 text-lg">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Micro SAAS Services Section */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl lg:text-5xl font-bold mb-6">
                Our <span className="bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">Micro SAAS Solutions</span>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Choose from our comprehensive suite of AI-powered micro SAAS solutions designed to solve specific business challenges.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {microSaasServices.map((service, index) => (
                <div key={index} className={`bg-slate-800/50 p-8 rounded-xl border transition-all duration-300 group relative ${
                  service.popular ? 'border-purple-500 ring-2 ring-purple-500/20' : 'border-slate-700 hover:border-purple-500'
                }`}>
                  {service.popular && (
                    <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                      <span className="bg-gradient-to-r from-purple-500 to-cyan-500 text-white px-4 py-1 rounded-full text-sm font-semibold">
                        Most Popular
                      </span>
                    </div>
                  )}
                  
                  <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                    <service.icon className="w-8 h-8 text-white" />
                  </div>
                  
                  <h3 className="text-2xl font-semibold mb-4 text-white group-hover:text-purple-300 transition-colors">
                    {service.title}
                  </h3>
                  
                  <p className="text-gray-400 mb-6 group-hover:text-gray-300 transition-colors">
                    {service.description}
                  </p>
                  
                  <div className="mb-6">
                    <div className="text-3xl font-bold text-purple-400 mb-2">{service.price}</div>
                    <div className="text-gray-400 text-sm">per month</div>
                  </div>
                  
                  <ul className="space-y-2 mb-8">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-sm text-gray-400">
                        <CheckCircleIcon className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  
                  <div className="space-y-3">
                    <Link
                      to="/contact"
                      className="block w-full bg-gradient-to-r from-purple-500 to-cyan-500 hover:from-purple-600 hover:to-cyan-600 text-white text-center py-3 rounded-lg font-semibold transition-all duration-300 hover:scale-105"
                    >
                      Start Free Trial
                    </Link>
                    <Link
                      to={`/micro-saas/${service.title.toLowerCase().replace(/\s+/g, '-')}`}
                      className="block w-full border-2 border-purple-500 text-purple-400 hover:bg-purple-500 hover:text-white text-center py-3 rounded-lg font-semibold transition-all duration-300"
                    >
                      Learn More
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-20 bg-slate-800/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl lg:text-5xl font-bold mb-6">
                Why Choose Our <span className="bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">Micro SAAS Solutions</span>?
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Our micro SAAS solutions are designed to provide maximum value with minimal complexity.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {benefits.map((benefit, index) => (
                <div key={index} className="text-center group">
                  <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-lg flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                    <benefit.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold mb-4 text-white group-hover:text-purple-300 transition-colors">
                    {benefit.title}
                  </h3>
                  <p className="text-gray-400 group-hover:text-gray-300 transition-colors">
                    {benefit.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl lg:text-5xl font-bold mb-6">
                What's <span className="bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">Included</span>?
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Every micro SAAS solution comes with these powerful features and benefits.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {features.map((feature, index) => (
                <div key={index} className="flex items-center space-x-4 p-6 bg-slate-800/50 rounded-lg hover:bg-slate-700/50 transition-colors group">
                  <CheckCircleIcon className="w-6 h-6 text-green-400 flex-shrink-0 group-hover:scale-110 transition-transform" />
                  <span className="text-gray-300 font-medium group-hover:text-white transition-colors">{feature}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-purple-900/30 to-cyan-900/30">
          <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
            <h2 className="text-4xl lg:text-5xl font-bold mb-6">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Start your free trial today and experience the power of our micro SAAS solutions. 
              No credit card required, cancel anytime.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="bg-gradient-to-r from-purple-600 to-cyan-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-purple-700 hover:to-cyan-700 transition-all duration-300 transform hover:scale-105"
              >
                Start Free Trial
              </Link>
              <Link
                to="/demo"
                className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-slate-900 transition-all duration-300"
              >
                Schedule Demo
              </Link>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default MicroSaaSPage;