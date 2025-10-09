'use client';
import React from 'react';
const AISalesAutomationPage: React.FC = () => {
  const features = [
    {
      icon: Brain,
      title: 'AI Lead Scoring',
      description: 'Intelligent lead scoring using machine learning to identify high-value prospects and prioritize sales efforts.',
      benefits: ['95% accuracy', 'Real-time scoring', 'Behavioral analysis']
    },
    {
      icon: Target,
      title: 'Automated Outreach',
      description: 'AI-powered email sequences, follow-ups, and personalized messaging that converts prospects into customers.',
      benefits: ['3x higher open rates', 'Personalized content', 'Perfect timing']
    },
    {
      icon: Users,
      title: 'CRM Integration',
      description: 'Seamless integration with popular CRMs like Salesforce, HubSpot, and Pipedrive for unified sales management.',
      benefits: ['One-click sync', 'Real-time updates', 'Unified pipeline']
    },
    {
      icon: BarChart,
      title: 'Sales Analytics',
      description: 'Advanced analytics and reporting to track performance, identify trends, and optimize sales strategies.',
      benefits: ['Real-time insights', 'Predictive analytics', 'ROI tracking']
    },
    {
      icon: Zap,
      title: 'Workflow Automation',
      description: 'Automate repetitive sales tasks, follow-ups, and administrative work to focus on closing deals.',
      benefits: ['80% time savings', 'Consistent processes', 'Error reduction']
    },
    {
      icon: Shield,
      title: 'Compliance & Security',
      description: 'Built-in compliance with GDPR, CAN-SPAM, and other regulations to protect your business and customers.',
      benefits: ['Legal compliance', 'Data protection', 'Audit trails']
    }
  ];
  const pricingPlans = [
    {
      name: 'Starter',
      price: '$299',
      period: '/month',
      description: 'Perfect for small sales teams',
      features: [
        'Up to 1,000 leads/month',
        'Basic AI lead scoring',
        'Email automation',
        'CRM integration',
        'Standard analytics',
        'Email support'
      ],
      popular: false
    },
    {
      name: 'Professional',
      price: '$799',
      period: '/month',
      description: 'Ideal for growing sales teams',
      features: [
        'Up to 10,000 leads/month',
        'Advanced AI algorithms',
        'Multi-channel automation',
        'Advanced CRM features',
        'Custom reporting',
        'Priority support',
        'A/B testing'
      ],
      popular: true
    },
    {
      name: 'Enterprise',
      price: '$1,999',
      period: '/month',
      description: 'For large sales organizations',
      features: [
        'Unlimited leads',
        'Custom AI models',
        'All channels + voice',
        'Custom integrations',
        'Real-time dashboard',
        'Dedicated account manager',
        'Custom development',
        'SLA guarantee'
      ],
      popular: false
    }
  ];
    {
      title: 'B2B Lead Generation',
      description: "Automatically identify and score high-value B2B prospects using AI-powered analysis of company data, website behavior, and engagement patterns.";
      icon: Building
    },
    {
      title: 'E-commerce Upselling',
      description: 'Intelligent product recommendations and automated follow-up sequences to increase average order value and customer lifetime value.',
      icon: ShoppingCart
    },
    {
      title: 'SaaS Trial Conversion',
      description: 'Automated onboarding sequences and personalized engagement to convert free trial users into paying customers.',
      icon: Cloud
    },
    {
      title: 'Real Estate Lead Nurturing',
      description: 'AI-powered lead nurturing for real estate agents with automated follow-ups, market updates, and personalized property recommendations.',
      icon: Home
    }
  ];
                  }`}
                >
                  {plan.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <span className="bg-cyan-400 text-slate-900 px-4 py-1 rounded-full text-sm font-bold">
                        Most Popular
                      </span>
                    </div>
                  )}
                  <div className="text-center mb-6">
                    <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                    <p className="text-gray-400 mb-4">{plan.description}</p>
                    <div className="flex items-baseline justify-center">
                      <span className="text-4xl font-bold text-cyan-400">{plan.price}</span>
                      <span className="text-gray-400 ml-1">{plan.period}</span>
                    </div>
                  </div>
                  <ul className="space-y-3 mb-8">
                    {plan.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center space-x-3">
                        <CheckCircle className="w-5 h-5 text-cyan-400 flex-shrink-0" />
                        <span className="text-gray-300">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <a
                    href="tel:+13024640950"
                    className={`w-full block text-center py-3 px-6 rounded-lg font-medium transition-all duration-300 ${
                      plan.popular
                        ? 'bg-cyan-400 text-slate-900 hover:bg-cyan-300'
                        : 'bg-slate-700 text-white hover:bg-slate-600'
                    }`}
                  >
                    Get Started
                  </a>
                </div>
              ))}
            </div>
          </section>

          {/* CTA Section */}
          <section className="container mx-auto px-4 py-16 text-center">
            <div className="cyber-card p-12 max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 neon-text">
                Ready to 3x Your Sales Performance?
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Join 1,000+ sales teams already using our AI automation platform
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="tel:+13024640950"
                  className="cyber-button flex items-center justify-center space-x-2"
                >
                  <Phone className="w-5 h-5" />
                  <span>Call (302) 464-0950</span>
                </a>
                <a
                  href="mailto:kleber@ziontechgroup.com"
                  className="cyber-button flex items-center justify-center space-x-2"
                  style={{background: 'linear-gradient(45deg, #8b5cf6, #ec4899)'}}
                >
                  <Mail className="w-5 h-5" />
                  <span>Schedule Demo</span>
                </a>
              </div>
  );
};
export default AISalesAutomationPage;