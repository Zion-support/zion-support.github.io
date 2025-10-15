'use client';
import React from 'react';
import SEOHead from '../components/SEOHead';
import { Link } from 'react-router-dom';
import { 
  CheckCircleIcon, 
  StarIcon, 
  PhoneIcon, 
  EnvelopeIcon, 
  MapPinIcon,
  CurrencyDollarIcon,
  SparklesIcon,
  ShieldCheckIcon,
  ClockIcon,
  UserGroupIcon,
  CogIcon
} from '@heroicons/react/24/outline';

const PricingPage: React.FC = () => {
  const mainPlans = [
    {
      name: 'Starter',
      price: '$299',
      period: '/month',
      description: 'Perfect for small businesses getting started with AI',
      features: [
        'Up to 3 AI tools',
        'Basic AI consultation',
        'Email support',
        'Monthly reports',
        'Basic analytics',
        'Up to 5 team members'
      ],
      popular: false,
      color: 'from-purple-500 to-pink-500'
    },
    {
      name: 'Professional',
      price: '$799',
      period: '/month',
      description: 'Ideal for growing businesses with advanced AI needs',
      features: [
        'Up to 10 AI tools',
        'Advanced AI solutions',
        'Priority support',
        'Weekly reports',
        'Custom integrations',
        'Advanced analytics',
        'API access',
        'Up to 25 team members'
      ],
      popular: true,
      color: 'from-blue-500 to-cyan-500'
    },
    {
      name: 'Enterprise',
      price: 'Custom',
      period: '/month',
      description: 'Tailored solutions for large organizations',
      features: [
        'Unlimited AI tools',
        'Full AI transformation',
        '24/7 support',
        'Real-time monitoring',
        'Dedicated team',
        'White-label solutions',
        'SLA guarantee',
        'Unlimited team members'
      ],
      popular: false,
      color: 'from-green-500 to-emerald-500'
    }
  ];

  const aiServices = [
    { name: 'AI Project Manager Pro', price: '$99', description: 'Intelligent project management with AI' },
    { name: 'AI Customer Support Chatbot', price: '$149', description: '24/7 AI-powered customer support' },
    { name: 'AI Analytics Dashboard', price: '$199', description: 'Advanced analytics with AI insights' },
    { name: 'AI Email Marketing Automation', price: '$149', description: 'AI-powered email marketing campaigns' },
    { name: 'AI Chatbot Builder Pro', price: '$199', description: 'Advanced conversational AI' },
    { name: 'AI Document Analyzer Pro', price: '$149', description: 'Intelligent document processing' },
    { name: 'AI Sales Predictor Pro', price: '$299', description: 'Advanced sales forecasting' },
    { name: 'AI Financial Forecaster Pro', price: '$399', description: 'Comprehensive financial forecasting' },
    { name: 'AI Customer Sentiment Tracker', price: '$199', description: 'Real-time sentiment analysis' },
    { name: 'AI Meeting Transcriber Pro', price: '$99', description: 'Advanced meeting transcription' },
    { name: 'AI Customer Churn Predictor', price: '$249', description: 'Predict and prevent churn' },
    { name: 'AI Content Moderator Pro', price: '$199', description: 'Automated content moderation' }
  ];

  const microSaasServices = [
    { name: 'Task Manager Pro', price: '$29', description: 'AI-powered task management' },
    { name: 'Smart Expense Tracker Pro', price: '$19', description: 'AI-powered expense tracking' },
    { name: 'Lead Generator Pro', price: '$99', description: 'AI-powered lead generation' },
    { name: 'Time Tracker Pro', price: '$39', description: 'Comprehensive time tracking' },
    { name: 'Invoice Generator Pro', price: '$29', description: 'Professional invoice generation' },
    { name: 'CRM Pro', price: '$49', description: 'AI-powered customer management' },
    { name: 'Analytics Dashboard Pro', price: '$79', description: 'Business analytics and reporting' },
    { name: 'Form Builder Pro', price: '$39', description: 'Advanced form builder' },
    { name: 'Survey Builder Pro', price: '$49', description: 'Professional survey creation' }
  ];

  const itServices = [
    { name: 'Cloud Infrastructure', price: '$1,000', description: 'Scalable cloud solutions' },
    { name: 'DevOps Automation', price: '$2,000', description: 'CI/CD pipelines and automation' },
    { name: 'API Development', price: '$3,000', description: 'Comprehensive API development' },
    { name: 'Data Engineering', price: '$4,000', description: 'ETL and data solutions' },
    { name: 'Blockchain Solutions', price: '$8,000', description: 'Web3 and blockchain development' },
    { name: 'IoT Solutions', price: '$5,000', description: 'IoT and edge computing' },
    { name: 'Security Audit', price: '$3,000', description: 'Security assessment and testing' },
    { name: 'Web Development', price: '$3,000', description: 'Modern web development' },
    { name: 'Mobile Development', price: '$5,000', description: 'Native and cross-platform apps' }
  ];

  return (
    <>
      <SEOHead 
        title="Pricing - Zion Tech Group | Transparent AI & IT Solutions Pricing"
        description="Transparent pricing for our AI and IT services. Choose the perfect plan for your business needs with flexible options and no hidden fees."
        keywords="AI pricing, IT services pricing, cloud pricing, AI tools pricing, business solutions pricing"
      />
      
      <div className="min-h-screen bg-slate-900 text-white">
        {/* Hero Section */}
        <section className="relative py-20 bg-gradient-to-br from-purple-900/30 via-slate-900 to-cyan-900/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-2xl mb-6">
                <CurrencyDollarIcon className="w-8 h-8 text-white" />
              </div>
              <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent mb-6">
                Transparent Pricing
              </h1>
              <p className="text-xl text-gray-300 max-w-4xl mx-auto mb-8">
                Choose the perfect plan for your business needs. All plans include our core AI and IT services 
                with no hidden fees or long-term contracts.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
                <div className="text-center p-4 bg-slate-800/50 rounded-lg backdrop-blur-sm border border-slate-700">
                  <div className="text-2xl font-bold text-purple-400 flex items-center justify-center mb-2">
                    <PhoneIcon className="w-6 h-6 mr-2" />
                    +1 302 464 0950
                  </div>
                  <div className="text-sm text-gray-400">Call us for custom pricing</div>
                </div>
                <div className="text-center p-4 bg-slate-800/50 rounded-lg backdrop-blur-sm border border-slate-700">
                  <div className="text-2xl font-bold text-cyan-400 flex items-center justify-center mb-2">
                    <EnvelopeIcon className="w-6 h-6 mr-2" />
                    kleber@ziontechgroup.com
                  </div>
                  <div className="text-sm text-gray-400">Email for enterprise quotes</div>
                </div>
                <div className="text-center p-4 bg-slate-800/50 rounded-lg backdrop-blur-sm border border-slate-700">
                  <div className="text-2xl font-bold text-green-400 flex items-center justify-center mb-2">
                    <MapPinIcon className="w-6 h-6 mr-2" />
                    Middletown, DE
                  </div>
                  <div className="text-sm text-gray-400">Visit our office</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Main Pricing Plans */}
        <section className="py-16 bg-slate-800/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl font-bold mb-4">
                Main <span className="bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">Plans</span>
              </h2>
              <p className="text-lg text-gray-300 max-w-2xl mx-auto">
                Choose the plan that fits your business size and needs
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {mainPlans.map((plan, index) => (
                <div key={index} className={`relative bg-slate-800/50 rounded-2xl p-8 border backdrop-blur-sm transition-all duration-300 hover:scale-105 ${
                  plan.popular 
                    ? 'border-purple-500 shadow-xl shadow-purple-500/20' 
                    : 'border-slate-700 hover:border-purple-400'
                }`}>
                  {plan.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <span className="bg-gradient-to-r from-purple-500 to-cyan-500 text-white px-6 py-2 rounded-full text-sm font-semibold flex items-center">
                        <StarIcon className="w-4 h-4 mr-1" />
                        Most Popular
                      </span>
                    </div>
                  )}
                  
                  <div className="text-center mb-6">
                    <h3 className="text-2xl font-semibold text-white mb-4">{plan.name}</h3>
                    <div className="text-4xl font-bold text-purple-400 mb-2">
                      {plan.price}<span className="text-lg text-gray-400">{plan.period}</span>
                    </div>
                    <p className="text-gray-300">{plan.description}</p>
                  </div>
                  
                  <ul className="space-y-3 mb-8">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-gray-300">
                        <CheckCircleIcon className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <Link 
                    to="/contact" 
                    className={`w-full py-3 rounded-lg font-semibold text-center block transition-all duration-300 ${
                      plan.popular
                        ? 'bg-gradient-to-r from-purple-600 to-cyan-600 hover:from-purple-700 hover:to-cyan-700 text-white'
                        : 'bg-gradient-to-r from-slate-600 to-slate-700 hover:from-slate-500 hover:to-slate-600 text-white'
                    }`}
                  >
                    {plan.name === 'Enterprise' ? 'Contact Sales' : 'Get Started'}
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* AI Services Pricing */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl font-bold mb-4">
                AI Services <span className="bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">Pricing</span>
              </h2>
              <p className="text-lg text-gray-300 max-w-2xl mx-auto">
                Individual AI tools and services with transparent pricing
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {aiServices.map((service, index) => (
                <div key={index} className="bg-slate-800/50 rounded-xl p-6 border border-slate-700 hover:border-purple-500 transition-all duration-300 hover:scale-105 backdrop-blur-sm">
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-10 h-10 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center">
                      <SparklesIcon className="w-5 h-5 text-white" />
                    </div>
                    <span className="text-2xl font-bold text-purple-400">{service.price}</span>
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-2">{service.name}</h3>
                  <p className="text-gray-400 text-sm">{service.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Micro SaaS Pricing */}
        <section className="py-16 bg-slate-800/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl font-bold mb-4">
                Micro SaaS <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">Solutions</span>
              </h2>
              <p className="text-lg text-gray-300 max-w-2xl mx-auto">
                Affordable micro software solutions for specific business needs
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {microSaasServices.map((service, index) => (
                <div key={index} className="bg-slate-800/50 rounded-xl p-6 border border-slate-700 hover:border-cyan-500 transition-all duration-300 hover:scale-105 backdrop-blur-sm">
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-10 h-10 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-lg flex items-center justify-center">
                      <CogIcon className="w-5 h-5 text-white" />
                    </div>
                    <span className="text-2xl font-bold text-cyan-400">{service.price}</span>
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-2">{service.name}</h3>
                  <p className="text-gray-400 text-sm">{service.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* IT Solutions Pricing */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl font-bold mb-4">
                IT Solutions <span className="bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent">Pricing</span>
              </h2>
              <p className="text-lg text-gray-300 max-w-2xl mx-auto">
                Comprehensive IT services and infrastructure solutions
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {itServices.map((service, index) => (
                <div key={index} className="bg-slate-800/50 rounded-xl p-6 border border-slate-700 hover:border-green-500 transition-all duration-300 hover:scale-105 backdrop-blur-sm">
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-10 h-10 bg-gradient-to-r from-green-500 to-emerald-500 rounded-lg flex items-center justify-center">
                      <ShieldCheckIcon className="w-5 h-5 text-white" />
                    </div>
                    <span className="text-2xl font-bold text-green-400">{service.price}</span>
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-2">{service.name}</h3>
                  <p className="text-gray-400 text-sm">{service.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-16 bg-slate-800/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl font-bold mb-4">
                Frequently Asked <span className="bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">Questions</span>
              </h2>
              <p className="text-lg text-gray-300 max-w-2xl mx-auto">
                Common questions about our pricing and services
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-slate-800/50 rounded-xl p-6 border border-slate-700 backdrop-blur-sm">
                <h3 className="text-lg font-semibold text-white mb-3 flex items-center">
                  <ClockIcon className="w-5 h-5 mr-2 text-purple-400" />
                  Can I change my plan anytime?
                </h3>
                <p className="text-gray-300">Yes, you can upgrade or downgrade your plan at any time. Changes take effect immediately and we'll prorate any differences.</p>
              </div>
              
              <div className="bg-slate-800/50 rounded-xl p-6 border border-slate-700 backdrop-blur-sm">
                <h3 className="text-lg font-semibold text-white mb-3 flex items-center">
                  <SparklesIcon className="w-5 h-5 mr-2 text-cyan-400" />
                  Is there a free trial?
                </h3>
                <p className="text-gray-300">Yes, we offer a 14-day free trial for all our plans with no credit card required. Experience our AI tools risk-free.</p>
              </div>
              
              <div className="bg-slate-800/50 rounded-xl p-6 border border-slate-700 backdrop-blur-sm">
                <h3 className="text-lg font-semibold text-white mb-3 flex items-center">
                  <CurrencyDollarIcon className="w-5 h-5 mr-2 text-green-400" />
                  What payment methods do you accept?
                </h3>
                <p className="text-gray-300">We accept all major credit cards, PayPal, and bank transfers for enterprise plans. All payments are secure and encrypted.</p>
              </div>
              
              <div className="bg-slate-800/50 rounded-xl p-6 border border-slate-700 backdrop-blur-sm">
                <h3 className="text-lg font-semibold text-white mb-3 flex items-center">
                  <UserGroupIcon className="w-5 h-5 mr-2 text-purple-400" />
                  Do you offer custom pricing?
                </h3>
                <p className="text-gray-300">Yes, we offer custom pricing for enterprise clients with specific requirements. Contact our sales team for a personalized quote.</p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-gradient-to-r from-purple-900/40 via-slate-900 to-cyan-900/40">
          <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4 bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
              Ready to Transform Your Business?
            </h2>
            <p className="text-lg text-gray-300 mb-8">
              Choose the perfect plan for your business and start transforming with AI today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
              <Link to="/contact" className="bg-gradient-to-r from-purple-600 to-cyan-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-purple-700 hover:to-cyan-700 transition-all duration-300 transform hover:scale-105">
                Start Free Trial
              </Link>
              <Link to="/contact" className="border-2 border-white text-white hover:bg-white hover:text-slate-900 px-8 py-4 rounded-lg font-semibold transition-all duration-300">
                Contact Sales
              </Link>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-sm text-gray-300">
              <div className="flex items-center justify-center">
                <PhoneIcon className="w-4 h-4 mr-2 text-purple-400" />
                <span><strong>Phone:</strong> +1 302 464 0950</span>
              </div>
              <div className="flex items-center justify-center">
                <EnvelopeIcon className="w-4 h-4 mr-2 text-cyan-400" />
                <span><strong>Email:</strong> kleber@ziontechgroup.com</span>
              </div>
              <div className="flex items-center justify-center">
                <MapPinIcon className="w-4 h-4 mr-2 text-green-400" />
                <span><strong>Address:</strong> 364 E Main St STE 1008, Middletown DE 19709</span>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default PricingPage;