'use client';
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { CheckCircle, Star, ArrowRight, Zap } from 'lucide-react';
const PricingPage: React.FC = () => {
const plans = [
    {
      name: 'Starter',
      price: '$2,999',
      period: '/month',
      description: 'Perfect for small businesses getting started with AI and IT solutions',
      features: [
        'Basic AI Integration (1-2 AI models)',
        'Cloud Infrastructure Setup (AWS/Azure)',
        'Email Support (48-hour response)',
        'Monthly Performance Reports',
        'Basic Analytics Dashboard',
        'Up to 5 users',
        'Standard Security Features',
        'Basic Training (2 hours)',
        '99.5% Uptime SLA'
      ],
      popular: false,
      category: 'AI & IT Starter'
    },
    {
      name: 'Professional',
      price: '$7,999',
      period: '/month',
      description: 'Ideal for growing companies with advanced AI and IT needs',
      features: [
        'Advanced AI Solutions (3-5 AI models)',
        'Custom Development (up to 40 hours/month)',
        'Priority Support (24-hour response)',
        'Weekly Performance Reports',
        'Advanced Analytics & BI Dashboard',
        'API Access & Integration',
        'Up to 25 users',
        'Advanced Security & Compliance',
        'Comprehensive Training (8 hours)',
        '99.9% Uptime SLA',
        'Dedicated Account Manager'
      ],
      popular: true,
      category: 'AI & IT Professional'
    },
    {
      name: 'Enterprise',
      price: 'Custom',
      period: '',
      description: 'Tailored solutions for large organizations with complex requirements',
      features: [
        'Unlimited AI Models & Custom Solutions',
        'Dedicated Development Team',
        '24/7 Premium Support',
        'Real-time Monitoring & Alerts',
        'Custom Integrations & APIs',
        'White-label Options',
        'Unlimited Users',
        'Enterprise Security & Compliance',
        'On-site Training & Workshops',
        '99.99% Uptime SLA',
        'Dedicated Success Manager',
        'Custom SLA Terms'
      ],
      popular: false,
      category: 'AI & IT Enterprise'
    }
  ]
  ;

const servicePricing = [
    {
      category: 'AI Services',
      services: [
        { name: 'AI Strategy & Consulting', price: '$5,000/month', description: 'Strategic AI planning and implementation' },
        { name: 'Machine Learning Development', price: '$15,000/project', description: 'Custom ML model development' },
        { name: 'Natural Language Processing', price: '$8,000/project', description: 'NLP and chatbot solutions' },
        { name: 'Computer Vision Solutions', price: '$12,000/project', description: 'Image and video analysis' },
        { name: 'AI Automation & RPA', price: '$3,500/month', description: 'Process automation solutions' }
      ]
    },
    {
      category: 'IT Services',
      services: [
        { name: 'Cloud Infrastructure', price: '$2,500/month', description: 'AWS, Azure, GCP management' },
        { name: 'DevOps & CI/CD', price: '$3,000/month', description: 'Automation and deployment pipelines' },
        { name: 'Cybersecurity', price: '$4,000/month', description: 'Security monitoring and compliance' },
        { name: 'Managed IT Services', price: '$2,200/month', description: '24/7 IT support and management' },
        { name: 'Database Management', price: '$1,800/month', description: 'Database optimization and maintenance' }
      ]
    },
    {
      category: 'Micro SaaS',
      services: [
        { name: 'Business Intelligence Dashboard', price: '$89/month', description: 'Advanced analytics platform' },
        { name: 'AI Customer Support Suite', price: '$149/month', description: 'Complete customer support solution' },
        { name: 'Email Marketing Automation', price: '$99/month', description: 'AI-powered email marketing' },
        { name: 'Project Management Suite', price: '$119/month', description: 'AI-powered project management' },
        { name: 'Lead Generation Engine', price: '$179/month', description: 'AI-powered lead generation' }
      ]
    }
  ];

return (
    <React.Fragment>
      <Helmet></Helmet>
        <title>Pricing - Zion Tech Group | Transparent AI & IT Pricing</title>
        <meta name="description" content="Transparent pricing for AI and IT solutions. Choose from Starter, Professional, or Enterprise plans. Custom solutions available. Get started today." /></meta>
        <meta name="keywords" content="AI pricing, IT services pricing, cloud solutions cost, enterprise AI pricing, custom development pricing" /></meta>
        <meta property="og:title" content="Pricing - Zion Tech Group" /></meta>
        <meta property="og:description" content="Transparent pricing for AI and IT solutions" /></meta>
        <meta property="og:type" content="website" /></meta>
        <meta property="og:url" content="https://ziontechgroup.com/pricing" />
      </meta>
<div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900"></div>
        <section className="py-20 px-4"></section>
          <div className="max-w-7xl mx-auto"></div>
            <div className="text-center mb-16"></div>
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                Transparent Pricing
  </
              <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
                Choose the perfect plan for your business needs. All plans include our core AI and IT services.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {pricingPlans.map((plan, index) => (</div>
                <div
                  key={index}
                  className={`relative bg-white/10 backdrop-blur-sm rounded-2xl p-8 ${
                    plan.popular ? 'ring-2 ring-purple-400 scale-105' : ''
                  }`}
                >
                  {plan.popular && (</div>
                    <div className="bg-gradient-to-r from-cyan-500 to-purple-500 text-white text-sm font-semibold py-2 px-4 rounded-full text-center mb-6">
                      Most Popular
  </
                  )}
                  <h3 className="text-2xl font-bold text-white mb-4">{plan.name}</h3>
                  <p className="text-gray-300 mb-6">{plan.description}</p>
                  <div className="mb-6"></div>
                    <span className="text-4xl font-bold text-white">${plan.price}</span>
                    <span className="text-gray-400 ml-2">/month</span>
                  </div>
                  <ul className="space-y-3 mb-8">
                    {plan.features.map((feature, featureIndex) => (</ul>
                      <li key={featureIndex} className="flex items-start"></li>
                        <CheckCircle className="w-5 h-5 text-green-400 mr-3 mt-0.5 flex-shrink-0" /></CheckCircle>
                        <span className="text-gray-300">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <button className={`w-full py-3 rounded-lg font-semibold transition-all duration-300 ${
                    plan.popular
                      ? 'bg-gradient-to-r from-cyan-500 to-purple-500 text-white hover:from-cyan-600 hover:to-purple-600'
                      : 'bg-white/10 text-white hover:bg-white/20'
                  }`}>
                    {plan.popular ? 'Get Started' : 'Choose Plan'}
                  </button>
                </div>
              ))}
            </div>
            <div className="text-center mt-16"></div>
              <h2 className="text-3xl font-bold text-white mb-4">Need a Custom Solution?</h2>
              <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
                We offer tailored AI and IT solutions for enterprise clients. Contact us for a personalized quote.
              </p>
              <button className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-500 text-white font-semibold rounded-full hover:from-cyan-600 hover:to-purple-600 transition-all duration-300">
                Contact Sales;
  </
            </div>
          </div>
        </section>
      </div>
      <div className;

export default PricingPage
  </Link>
  </div>
  </button>
  </h1>
  </div></React.Fragment>
}
