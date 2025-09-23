import React from 'react';
import { Link } from 'react-router-dom';

export default function MicroSaaSServices(props: any) {
  const offerings = [
    {
      name: 'AI Email Responder',
      price: 'From $199/mo',
      link: 'https://ziontechgroup.com/services/ai-email-responder',
      features: ['Gmail/Outlook integration', 'Intent detection', 'Auto-drafts with approval', 'CRM sync']
    },
    {
      name: 'Affiliate Attribution Hub',
      price: 'From $149/mo',
      link: 'https://ziontechgroup.com/services/affiliate-attribution',
      features: ['Link generation', 'Cross-device attribution', 'Fraud protection', 'Payout workflows']
    },
    {
      name: 'Event Management Dashboard',
      price: 'From $129/mo',
      link: 'https://ziontechgroup.com/services/event-dashboard',
      features: ['Ticketing', 'Schedule builder', 'Check-in app', 'Feedback forms']
    },
    {
      name: 'Returns & RMA for E‑commerce',
      price: 'From $179/mo',
      link: 'https://ziontechgroup.com/services/returns-automation',
      features: ['Self-serve portal', 'Label generation', 'Warehouse updates', 'Refund automation']
    }
  ];

  return (
    <div className="min-h-screen bg-white py-16">
      <div className="max-w-6xl mx-auto px-4">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">Micro SaaS Services</h1>
        <p className="text-gray-600 mb-10">Launch-ready, hosted tools tailored to a single problem with fast ROI.</p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
          {offerings.map((item) => (
            <div key={item.name} className="border rounded-xl p-6 hover:shadow-lg transition">
              <div className="flex items-center justify-between mb-3">
                <h3 className="text-xl font-semibold">{item.name}</h3>
                <span className="text-blue-600 font-medium">{item.price}</span>
              </div>
              <ul className="list-disc pl-5 text-gray-600 space-y-1 mb-4">
                {item.features.map((f) => (<li key={f}>{f}</li>))}
              </ul>
              <a href={item.link} className="text-blue-600 hover:underline" target="_blank" rel="noreferrer">Learn more</a>
            </div>
          ))}
        </div>

        <div className="mt-10">
          <Link to="/contact" className="inline-block bg-blue-600 text-white px-6 py-3 rounded-md">Talk to an expert</Link>
        </div>
      </div>
    </div>
  );
}

// Additional showcase (non-exported) retained for future expansion
import { Cpu, Check, Phone, Mail, ArrowRight, Target, Zap, Layers } from 'lucide-react';

function MicroSaaSShowcase(props: any) {
  const features = [
    'AI-powered business process automation',
    'Custom micro SaaS application development',
    'API integration and third-party connections',
    'Real-time analytics and reporting dashboards',
    'Scalable cloud infrastructure management',
    'Automated workflow optimization',
    'Multi-tenant architecture support',
    'Advanced security and compliance features',
    'Mobile-responsive design and PWA support',
    'Continuous deployment and monitoring'
  ];

  const benefits = [
    'Reduce operational costs by 50%',
    'Increase productivity by 70%',
    'Improve business efficiency by 60%',
    'Scale operations without proportional cost increase',
    'Enhance customer experience and satisfaction',
    'Accelerate time-to-market for new features'
  ];

  const useCases = [
    'Small & Medium Businesses',
    'Startups & Entrepreneurs',
    'E-commerce & Retail',
    'Professional Services',
    'Healthcare & Medical',
    'Real Estate',
    'Education & Training',
    'Non-profit Organizations'
  ];

  const microSaaSSolutions = [
    {
      name: 'AI Content Creation Studio',
      description: 'Generate high-quality content at scale with AI-powered tools',
      price: 'From $99/mo',
      features: ['Blog posts', 'Social media content', 'Email campaigns', 'SEO optimization']
    },
    {
      name: 'Email Automation Platform',
      description: 'Automate email marketing campaigns with intelligent sequences',
      price: 'From $49/mo',
      features: ['Lead nurturing', 'Behavioral triggers', 'A/B testing', 'Analytics']
    },
    {
      name: 'Customer Support System',
      description: 'AI-powered customer support with chatbots and ticketing',
      price: 'From $79/mo',
      features: ['Live chat', 'Ticket management', 'Knowledge base', 'Analytics']
    },
    {
      name: 'Event Management Platform',
      description: 'Complete event planning and management solution',
      price: 'From $99/mo',
      features: ['Registration', 'Ticketing', 'Analytics', 'Mobile app']
    },
    {
      name: 'Project Management Tool',
      description: 'Streamline project workflows with AI-powered insights',
      price: 'From $29/mo',
      features: ['Task management', 'Team collaboration', 'Time tracking', 'Reporting']
    },
    {
      name: 'Inventory Management System',
      description: 'Optimize inventory with predictive analytics and automation',
      price: 'From $149/mo',
      features: ['Stock tracking', 'Demand forecasting', 'Automated reordering', 'Analytics']
    }
  ];

  const pricing = [
    {
      name: 'Starter',
      price: '$199/mo',
      details: [
        '1 micro SaaS application',
        'Basic features and integrations',
        'Email support',
        'Standard analytics',
        'Up to 1,000 users'
      ]
    },
    {
      name: 'Professional',
      price: '$499/mo',
      details: [
        'Up to 3 micro SaaS applications',
        'Advanced features and customizations',
        'Priority support',
        'Advanced analytics',
        'Up to 10,000 users',
        'API access'
      ]
    },
    {
      name: 'Enterprise',
      price: '$1,299/mo',
      details: [
        'Unlimited applications',
        'Custom development and integrations',
        '24/7 dedicated support',
        'White-label solutions',
        'Unlimited users',
        'Advanced security features'
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <section className="bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 py-20 text-center">
        <div className="max-w-5xl mx-auto px-6">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-white/10 text-white mb-6">
            <Cpu className="w-4 h-4 mr-2"  />
            Micro SaaS Solutions
          </div>
          <h1 className="text-4xl md: tex t-6xl font-bold text-white mb-4">Micro SaaS Platform</h1>
          <p className="text-indigo-100 text-xl">
            Build, deploy, and scale specialized software solutions that solve specific business problems efficiently.
          </p>
        </div>
      </section>

      <section className="py-16 max-w-6xl mx-auto px-6">
        <div className="grid md: gri d-cols-2 gap-10">
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Advanced Micro SaaS Features</h2>
            <ul className="space-y-3">
              {features.map((feature, index) => (
                <li key={index} className="flex items-start">
                  <Check className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0"  />
                  <span className="text-gray-700">{feature}</span>
                </li>
              ))}
            </ul>
            <div className="mt-6 text-sm text-gray-600">
              Built with enterprise-grade security, GDPR compliance, and 99.9% uptime SLA.
            </div>
          </div>
          <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-lg">
            <h3 className="text-2xl font-semibold text-gray-900 mb-4">Competitive Pricing</h3>
            <div className="space-y-4">
              {pricing.map((tier, index) => (
                <div key={index} className="rounded-lg p-4 border border-gray-200 hover: borde r-indigo-300 transition-colors">
                  <div className="flex justify-between items-center mb-2">
                    <div className="text-lg font-semibold">{tier.name}</div>
                    <div className="text-2xl font-bold text-indigo-600">{tier.price}</div>
                  </div>
                  <ul className="text-sm text-gray-600 space-y-1">
                    {tier.details.map((detail, detailIndex) => (
                      <li key={detailIndex} className="flex items-center">
                        <Check className="w-3 h-3 text-green-500 mr-2 flex-shrink-0"  />
                        {detail}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
            <div className="mt-6 flex flex-wrap gap-3">
              <a href="/contact" className="px-5 py-3 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors inline-flex items-center">
                Start Free Trial <ArrowRight className="w-4 h-4 ml-2"  />
              </a>
              <a href="/demo" className="px-5 py-3 border border-indigo-600 text-indigo-600 rounded-lg hover:bg-indigo-50 transition-colors inline-flex items-center">
                Schedule Demo <Phone className="w-4 h-4 ml-2"  />
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">Our Micro SaaS Solutions</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {microSaaSSolutions.map((solution, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
                <div className="flex items-center mb-4">
                  <Layers className="w-6 h-6 text-indigo-600 mr-3"  />
                  <h3 className="text-lg font-semibold text-gray-900">{solution.name}</h3>
                </div>
                <p className="text-gray-600 mb-4">{solution.description}</p>
                <div className="text-lg font-bold text-indigo-600 mb-4">{solution.price}</div>
                <ul className="space-y-2">
                  {solution.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm text-gray-600">
                      <Check className="w-3 h-3 text-green-500 mr-2 flex-shrink-0"  />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">Key Benefits</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-sm">
                <div className="flex items-center mb-3">
                  <Zap className="w-6 h-6 text-indigo-600 mr-3"  />
                  <h3 className="text-lg font-semibold text-gray-900">Performance</h3>
                </div>
                <p className="text-gray-600">{benefit}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">Industries We Serve</h2>
          <div className="grid md: gri d-cols-2 lg: gri d-cols-4 gap-6">
            {useCases.map((industry, index) => (
              <div key={index} className="bg-white border border-gray-200 rounded-lg p-6 hover: shado w-md transition-shadow">
                <div className="flex items-center mb-3">
                  <Target className="w-5 h-5 text-indigo-600 mr-3"  />
                  <h3 className="text-lg font-semibold text-gray-900">{industry}</h3>
                </div>
                <p className="text-gray-600">Micro SaaS solutions tailored for {industry.toLowerCase()}.</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-indigo-600">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Ready to Build Your Micro SaaS Solution?</h2>
          <p className="text-indigo-100 text-xl mb-8">
            Start creating specialized software solutions that solve specific business problems efficiently.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="/contact" className="px-8 py-3 bg-white text-indigo-600 rounded-lg hover:bg-gray-100 transition-colors inline-flex items-center">
              Get Started <ArrowRight className="w-4 h-4 ml-2"  />
            </a>
            <a href="/demo" className="px-8 py-3 border border-white text-white rounded-lg hover:bg-white/10 transition-colors inline-flex items-center">
              Schedule Demo <Mail className="w-4 h-4 ml-2"  />
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}