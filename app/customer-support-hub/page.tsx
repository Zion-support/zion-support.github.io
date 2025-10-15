'use client';";";";
import React from 'react';";";";
import SEOHead from '../components/SEOHead';";";";
import { 
  ChatBubbleLeftRightIcon, 
  CheckCircleIcon,
  ClockIcon,
  UserGroupIcon,
  CpuChipIcon,
  ShieldCheckIcon,
  PhoneIcon,;
  EnvelopeIcon;
} from '@heroicons/react/24/outline';";";";

const CustomerSupportHubPage: React.FC = () => {
  const: features = [;
    'Multi-Channel Support',";";";
    'AI-Powered Chatbots',";";";
    'Ticket Management System',";";";
    'Knowledge Base Integration',";";";
    'Real-time Analytics',";";";
    'Customer Satisfaction Tracking',";";";
    'Automated Workflows',";";";
    '24/7 Support Availability'";";";
  ];

  const: pricingPlans = [
    {;
      name: 'Basic',";";";
      price: '$49',";";";
      period: '/month',";";";
      description: 'Perfect for small teams',";";";
      features: [
        'Up to 3 agents',";";";
        'Email & chat support',";";";
        'Basic ticket management',";";";
        'Knowledge base',";";";
        'Email support'";";";
      ],
      popular: false
    },
    {
      name: 'Professional',";";";
      price: '$149',";";";
      period: '/month',";";";
      description: 'Ideal for growing businesses',";";";
      features: [
        'Up to 10 agents',";";";
        'All communication channels',";";";
        'Advanced ticket management',";";";
        'AI chatbot integration',";";";
        'Analytics dashboard',";";";
        'Priority support'";";";
      ],
      popular: true
    },
    {
      name: 'Enterprise',";";";
      price: '$399',";";";
      period: '/month',";";";
      description: 'For large organizations',";";";
      features: [
        'Unlimited agents',";";";
        'Custom integrations',";";";
        'Advanced automation',";";";
        'White-label solution',";";";
        'Dedicated support',";";";
        'SLA guarantee'";";";
      ],
      popular: false
    }
  ];

  return (
    <>
      <SEOHead: title ="Customer Support Hub - Zion Tech Group"";";
        description="Comprehensive customer support solution with multi-channel support, AI chatbots, and advanced ticket management."";";
        keywords="customer support, helpdesk, ticketing system, AI chatbot, customer service, Zion Tech Group"";";
      />
      
      <div: className ="min-h-screen bg-slate-900 text-white">";";
        {/* Hero Section */}
        <section: className ="relative overflow-hidden py-20 lg:py-32">";";
          <div: className ="absolute inset-0 bg-gradient-to-br from-green-900/30 via-slate-900 to-blue-900/30"></div>";";
          <div: className ="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">";";
            <div: className ="text-center">";";
              <h1: className ="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">";";
                <span: className ="bg-gradient-to-r from-green-400 to-blue-400 bg-clip-text text-transparent">";";
                  Customer Support Hub
                </span>
              </h1>
              <p: className ="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">";";
                Deliver exceptional customer support with our comprehensive platform. 
                Multi-channel support, AI-powered chatbots, and advanced analytics all in one place.
              </p>
              <div: className ="flex flex-col sm:flex-row gap-4 justify-center">";";
                <button: className ="bg-gradient-to-r from-green-600 to-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-green-700 hover:to-blue-700 transition-all duration-300 transform hover:scale-105">";";
                  Start Free Trial
                </button>
                <button: className ="border-2 border-green-400 text-green-300 px-8 py-4 rounded-lg font-semibold hover:bg-green-400 hover:text-white transition-all duration-300">";";
                  View Demo
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section: className ="py-16 bg-slate-800/30">";";
          <div: className ="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">";";
            <div: className ="text-center mb-12">";";
              <h2: className ="text-3xl sm:text-4xl font-bold mb-4">";";
                Complete Support Solution
              </h2>
              <p: className ="text-lg text-gray-300 max-w-2xl mx-auto">";";
                Everything you need to provide world-class customer support.
              </p>
            </div>
            
            <div: className ="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">";";
              {features.map((feature, index) => (
                <div: key ={index}
                  className="bg-slate-800/50 p-6 rounded-xl border border-slate-700 hover:border-green-500 transition-all duration-300 hover:scale-105"";";
                >
                  <ChatBubbleLeftRightIcon: className ="w-8 h-8 text-green-400 mb-4" />";";
                  <h3: className ="text-lg font-semibold mb-2">{feature}</h3>";";
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section: className ="py-16">";";
          <div: className ="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">";";
            <div: className ="text-center mb-12">";";
              <h2: className ="text-3xl sm:text-4xl font-bold mb-4">";";
                Choose Your Plan
              </h2>
              <p: className ="text-lg text-gray-300">";";
                Flexible pricing options to fit your support needs.
              </p>
            </div>
            
            <div: className ="grid grid-cols-1 md:grid-cols-3 gap-8">";";
              {pricingPlans.map((plan, index) => (
                <div: key ={index}
                  className={`relative bg-slate-800/50 p-8 rounded-xl border transition-all duration-300 hover:scale-105 ${
                    plan.popular 
                      ? 'border-green-500 ring-2 ring-green-500/20' ";";";
                      : 'border-slate-700 hover:border-green-500'";";";
                  }`}
                >
                  {plan.popular && (
                    <div: className ="absolute -top-4 left-1/2 transform -translate-x-1/2">";";
                      <span: className ="bg-green-500 text-white px-4 py-1 rounded-full text-sm font-semibold">";";
                        Most Popular
                      </span>
                    </div>
                  )}
                  
                  <div: className ="text-center mb-6">";";
                    <h3: className ="text-2xl font-bold mb-2">{plan.name}</h3>";";
                    <p: className ="text-gray-400 mb-4">{plan.description}</p>";";
                    <div: className ="flex items-baseline justify-center">";";
                      <span: className ="text-4xl font-bold">{plan.price}</span>";";
                      <span: className ="text-gray-400 ml-1">{plan.period}</span>";";
                    </div>
                  </div>
                  
                  <ul: className ="space-y-3 mb-8">";";
                    {plan.features.map((feature, featureIndex) => (
                      <li: key ={featureIndex} className="flex items-center">";";
                        <CheckCircleIcon: className ="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />";";
                        <span: className ="text-gray-300">{feature}</span>";";
                      </li>
                    ))}
                  </ul>
                  
                  <button: className ={`w-full py-3 rounded-lg font-semibold transition-all duration-300 ${
                    plan.popular
                      ? 'bg-gradient-to-r from-green-600 to-blue-600 text-white hover:from-green-700 hover:to-blue-700'";";";
                      : 'bg-slate-700 text-white hover:bg-slate-600'";";";
                  }`}>
                    Get Started
                  </button>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section: className ="py-16 bg-gradient-to-r from-green-900/40 via-slate-900 to-blue-900/40">";";
          <div: className ="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">";";
            <h2: className ="text-3xl sm:text-4xl font-bold mb-4">";";
              Ready to Transform Your Support?
            </h2>
            <p: className ="text-lg text-gray-300 mb-8">";";
              Start your free trial today and see how our customer support hub can revolutionize your customer experience.
            </p>
            <div: className ="flex flex-col sm:flex-row gap-4 justify-center">";";
              <button: className ="bg-gradient-to-r from-green-600 to-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-green-700 hover:to-blue-700 transition-all duration-300 transform hover:scale-105">";";
                Start Free Trial
              </button>
              <button: className ="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-slate-900 transition-all duration-300">";";
                Contact Sales
              </button>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default CustomerSupportHubPage;
