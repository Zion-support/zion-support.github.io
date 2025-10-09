'use client';
import React from 'react';
const AIWorkflowAutomationPage: React.FC = () => {
  const features = [
    {
      icon: Zap,
      title: 'Intelligent Process Automation',
      description: 'AI-powered automation that learns from your workflows and optimizes them continuously.',
      benefits: ['Process Learning', 'Automatic Optimization', 'Exception Handling', 'Performance Monitoring']
    },
    {
      icon: Settings,
      title: 'Workflow Designer',
      description: 'Visual workflow designer that allows you to create complex automation workflows without coding.',
      benefits: ['Drag & Drop Interface', 'Visual Logic Builder', 'Template Library', 'Testing Tools']
    },
    {
      icon: Clock,
      title: 'Real-time Monitoring',
      description: 'Monitor your automated workflows in real-time with detailed analytics and performance metrics.',
      benefits: ['Live Monitoring', 'Performance Metrics', 'Error Tracking', 'Alert System']
    },
    {
      icon: Users,
      title: 'Team Collaboration',
      description: 'Collaborate with your team on workflow design and management with role-based access control.',
      benefits: ['Role-based Access', 'Team Collaboration', 'Version Control', 'Approval Workflows']
    }
  ];

  const pricingPlans = [
    {
      name: 'Starter',
      price: '$399/month',
      description: 'Perfect for small teams',
      features: ['Up to 10 workflows', 'Basic automation', 'Email support', 'Standard templates']
    },
    {
      name: 'Professional',
      price: '$799/month',
      description: 'Ideal for growing businesses',
      features: ['Up to 50 workflows', 'Advanced AI features', 'Priority support', 'API access', 'Custom integrations']
    },
    {
      name: 'Enterprise',
      price: '$1,599/month',
      description: 'For large organizations',
      features: ['Unlimited workflows', 'Custom development', 'Advanced analytics', '24/7 support', 'Dedicated account manager']
    }
  ];

  const stats = [
    { number: '80%', label: 'Time Savings' },
    { number: '95%', label: 'Accuracy' },
    { number: '50+', label: 'Workflow Types' },
    { number: '24/7', label: 'Automation' }
  ];

  return (
    <>
      <SEOOptimizer
        title="AI Workflow Automation Solutions - Zion Tech Group"
        description="Streamline your business processes with AI-powered workflow automation. Reduce manual work by 80% and increase efficiency with intelligent automation."
        keywords={['AI workflow automation', 'business process automation', 'workflow management', 'process optimization', 'automation tools']}
        canonicalUrl="https://ziontechgroup.com/ai-workflow-automation"
      />
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <Navigation />
        <main className="pt-16">
          {/* Hero Section */}
          <section className="container mx-auto px-4 py-16 text-center">
            <div className="max-w-4xl mx-auto">
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 neon-text">
                AI Workflow Automation
              </h1>
              <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                Streamline your business processes with AI-powered workflow automation. 
                Reduce manual work by 80% and increase efficiency with intelligent automation.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="tel:+13024640950"
                  className="cyber-button flex items-center justify-center space-x-2"
                >
                  <Phone className="w-5 h-5" />
                  <span>Get Started</span>
                </a>
                <a
                  href="mailto:info@ziontechgroup.com"
                  className="cyber-button-secondary flex items-center justify-center space-x-2"
                >
                  <Mail className="w-5 h-5" />
                  <span>Learn More</span>
                </a>
              </div>
            </div>
          </section>
          {/* Features Section */}
          <section className="mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12 neon-text">
              Key Features
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {features.map((feature, index) => (
                <div key={index} className="cyber-card p-6 text-center hover:scale-105 transition-all duration-300">
                  <feature.icon className="w-12 h-12 text-cyan-400 mx-auto mb-4" />
                  <h3 className="text-xl font-bold text-white mb-3">{feature.title}</h3>
                  <p className="text-gray-300 mb-4">{feature.description}</p>
                  <ul className="space-y-2">
                    {feature.benefits.map((benefit, benefitIndex) => (
                      <li key={benefitIndex} className="flex items-center text-sm text-gray-300">
                        <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </section>
          {/* Pricing Section */}
          <section className="mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12 neon-text">
              Pricing Plans
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {pricing.map((plan, index) => (
                <div key={index} className={`cyber-card p-8 ${index === 1 ? 'ring-2 ring-cyan-400' : ''}`}>
                  {index === 1 && (
                    <div className="text-center mb-4">
                      <span className="bg-cyan-400 text-slate-900 px-4 py-1 rounded-full text-sm font-semibold">
                        Most Popular
                      </span>
                    </div>
                  )}
                  <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                  <p className="text-gray-300 mb-4">{plan.description}</p>
                  <div className="text-4xl font-bold text-cyan-400 mb-6">{plan.price}</div>
                  <ul className="space-y-3 mb-8">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-gray-300">
                        <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <a
                    href={`mailto:kleber@ziontechgroup.com?subject=Interest in ${plan.name} Plan`}
                    className="cyber-button w-full text-center block"
                  >
                    Get Started
                  </a>
                </div>
              ))}
            </div>
          </section>
          {/* CTA Section */}
          <section className="text-center bg-gradient-to-r from-purple-600 to-blue-600 rounded-lg p-8 cyber-card">
            <h2 className="text-3xl font-bold text-white mb-4">
              Ready to Automate Your Workflows?
            </h2>
            <p className="text-xl text-purple-100 mb-8">
              Contact us today to learn how AI workflow automation can transform your business processes.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:+13024640950"
                className="bg-white text-purple-600 px-8 py-3 rounded-lg font-medium hover:bg-gray-100 transition-colors"
              >
                Call (302) 464-0950
              </a>
              <a
                href="mailto:kleber@ziontechgroup.com"
                className="bg-transparent border-2 border-white text-white px-8 py-3 rounded-lg font-medium hover:bg-white hover:text-purple-600 transition-colors"
              >
                Email Us
              </a>
            </div>
          </section>
        </main>
        <Footer />
      </div>
    </>
  );
};

export default AIWorkflowAutomationPage;
