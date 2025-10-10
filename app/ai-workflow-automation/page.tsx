'use client';
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { CheckCircle, ArrowRight, Phone, Mail, MapPin, Zap, Shield, Brain, Globe } from 'lucide-react';

const PagePage: React.FC = () => {
  const features = [
    {
      icon: Brain,
      title: 'AI-Powered Solutions',
      description: 'Advanced AI technology to transform your business operations and improve efficiency'
    },
    {
      icon: Zap,
      title: 'High Performance',
      description: 'Lightning-fast processing and real-time analytics for optimal results'
    },
    {
      icon: Workflow,
      title: 'Intelligent Process Automation',
      description: 'AI-powered workflow automation that learns from your processes and optimizes them automatically.',
      benefits: ['90% time savings', 'Error reduction', 'Process optimization']
    },
    {
      icon: Zap,
      title: '500+ Integrations',
      description: 'Connect with 500+ popular business tools and platforms for seamless automation.',
      benefits: ['Wide compatibility', 'Easy setup', 'Unified workflow']
    },
    {
      icon: Clock,
      title: 'Real-time Monitoring',
      description: 'Monitor workflow performance in real-time with detailed analytics and insights.',
      benefits: ['Live tracking', 'Performance metrics', 'Instant alerts']
    },
    {
      icon: Users,
      title: 'Team Collaboration',
      description: 'Enable seamless collaboration with role-based access and approval workflows.',
      benefits: ['Role management', 'Approval chains', 'Team coordination']
    },
    {
      icon: Shield,
      title: 'Enterprise Security',
      description: 'Bank-level security with encryption and compliance standards'
    },
    {
      icon: Globe,
      title: 'Global Reach',
      description: 'Worldwide deployment and support for international businesses'
      icon: BarChart,
      title: 'Analytics & Reporting',
      description: 'Comprehensive analytics to track workflow performance and identify optimization opportunities.',
      benefits: ['Performance insights', 'ROI tracking', 'Optimization suggestions']
    }
  ];

  const pricingPlans = [
    {
      name: 'Starter'
      price: '$99',
      period: '/month',
      description: 'Perfect for small teams',
      features: [,
        'Up to 10 workflows',
        'Basic integrations',
        'Standard templates',
        'Email support',
        'Basic analytics'
      ],
      popular: false,
    },
    {
      name: 'Professional'
      price: '$299',
      period: '/month',
      description: 'Ideal for growing businesses',
      features: [,
        'Up to 100 workflows',
        '500+ integrations',
        'Custom templates',
        'Priority support',
        'Advanced analytics',
        'Team collaboration',
        'API access'
      ],
      popular: true,
    },
    {
      name: 'Enterprise'
      price: '$799',
      period: '/month',
      description: 'For large organizations',
      features: [,
        'Unlimited workflows',
        'All integrations',
        'White-label options',
        '24/7 dedicated support',
        'Custom integrations',
        'Advanced security',
        'SLA guarantee'
      ],
      popular: false,
    }
  ];

  const benefits = [
    'Advanced AI technology integration',
    'Real-time processing and analytics',
    'Enterprise-grade security and compliance',
    'Scalable and flexible solutions',
    '24/7 technical support',
    'Easy integration with existing systems',
    'Cost-effective pricing plans',
    'Proven track record of success'
    {
      icon: Clock,
      title: 'Save 20+ Hours/Week',
      description: 'Automate repetitive tasks and focus on high-value activities'},
    {
      icon: Zap,
      title: '90% Process Efficiency',
      description: 'Dramatically improve process efficiency with intelligent automation'},
    {
      icon: Users,
      title: 'Better Team Coordination',
      description: 'Streamline team workflows and improve collaboration'},
    {
      icon: Star,
      title: 'Scalable Solutions',
      description: 'Scale your automation as your business grows'}
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
        <title>Page | Zion Tech Group</title>
        <meta name="description" content="Professional Page services by Zion Tech Group. Advanced AI and IT solutions for your business." />
        <meta name="keywords" content="page, AI solutions, IT services, Zion Tech Group, page" />
      </Helmet>

      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
                Page
              </span>
              <br />
              <span className="text-white">Solutions</span>
        <main className="container mx-auto px-4 py-16 pt-24">{/* Hero Section */}</main>
          <section className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 neon-text">AI Workflow Automation</h1><p className="text-xl text-cyan-400 mb-8 font-medium">Automate any business process with intelligent workflows</p><p className="text-lg text-gray-300 max-w-4xl mx-auto mb-8">Transform your business operations with AI-powered workflow automation that learns,</p>
              adapts, and optimizes your processes for maximum efficiency and productivity.</p>
        canonicalUrl="https: //ziontechgroup.com/ai-workflow-automation"
      />)
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 cyber-grid neural-network-bg">)</div>
        <Navigation />)
        <main className="container mx-auto px-4 py-16 pt-24">),
          {/* Hero Section */}
          <section className="text-center mb-16">
            <h1 className="text-4xl md: text-6xl font-bold text-white mb-6 neon-text">
              AI Workflow Automation;</h1>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Transform your business with our advanced page solutions. 
              Powered by cutting-edge AI technology and industry expertise.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-purple-500 to-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-purple-600 hover:to-blue-700 transition-all duration-300 flex items-center">
                Get Started
                <ArrowRight className="ml-2 h-5 w-5" />
              </button>
              <button className="border border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-gray-900 transition-all duration-300">
                Learn More
              </button>
            <div className="flex flex-col sm: flex-row gap-4 justify-center"></div>
              <a;
            <div className="flex flex-col sm:flex-row gap-4 justify-center"></section>
              <a
                href="tel:+13024640950"
                className="cyber-button w-full sm:w-auto text-center"
              >📞 Call: (302) 464-0950<a
                href="mailto:kleber@ziontechgroup.com"
                className="border-2 border-cyan-400 text-cyan-400 px-8 py-3 rounded-lg font-semibold hover:bg-cyan-400 hover:text-white transition-all duration-300 w-full sm:w-auto text-center"
              >✉️ Get Quote</a>
              >
                📞 Call: (302) 464-0950;
              </a>
              <a;
                href="mailto:kleber@ziontechgroup.com"
                className="border-2 border-cyan-400 text-cyan-400 px-8 py-3 rounded-lg font-semibold hover:bg-cyan-400 hover:text-white transition-all duration-300 w-full sm:w-auto text-center"
              >
                ✉️ Get Quote;
              </a>
            </div>,
          </section>,
,
          {/* Features Section */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-white mb-12 text-center neon-text">Key Features<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">{features.map((feature, index) => (</div>
                <div key={index} className="cyber-card hologram-card p-6 hover:scale-105 transition-all duration-300"></div>
                  <feature.icon className="w-12 h-12 text-cyan-400 mb-4" />
                  <h3 className="text-xl font-semibold text-white mb-3">{feature.title}<p className="text-gray-300 mb-4">{feature.description}<ul className="space-y-2">{feature.benefits.map((benefit, benefitIndex) => (</ul>
            <h2 className="text-3xl font-bold text-white mb-12 text-center neon-text">
              Key Features;
            </h2>
            <div className="grid grid-cols-1 md: grid-cols-2 lg:grid-cols-3 gap-8">,
              {features.map((feature, index) => (</div>
                <div key={index} className="cyber-card hologram-card p-6 hover: scale-105 transition-all duration-300">,</div>
                  <feature.icon className="w-12 h-12 text-cyan-400 mb-4" />,
                  <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
                  <p className="text-gray-300 mb-4">{feature.description}</p>
                  <ul className="space-y-2">
                    {feature.benefits.map((benefit, benefitIndex) => (
            <h2 className="text-3xl font-bold text-white mb-12 text-center neon-text">Key Features</h2><div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">{features.map((feature, index) => (</section>
                <div key={index} className="cyber-card hologram-card p-6 hover:scale-105 transition-all duration-300"></div>
                  <feature.icon className="w-12 h-12 text-cyan-400 mb-4" />
                  <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3><p className="text-gray-300 mb-4">{feature.description}</p><ul className="space-y-2">{feature.benefits.map((benefit, benefitIndex) => (</ul>
                      <li key={benefitIndex} className="flex items-center text-sm text-cyan-400">
                        <CheckCircle className="w-4 h-4 mr-2" >{benefit}</CheckCircle>
                      </CheckCircle>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Why Choose Our Page?
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our page solutions deliver unmatched performance, security, and scalability.
            </p>
          </div>
          {/* Pricing Section */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-white mb-12 text-center neon-text">Pricing Plans<div className="grid grid-cols-1 md:grid-cols-3 gap-8">{pricingPlans.map((plan, index) => (<div key={index} className={`cyber-card hologram-card p-8 relative ${plan.popular ? 'ring-2 ring-cyan-400' : ''}`}>{plan.popular && (</div>
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2"></div>
            <h2 className="text-3xl font-bold text-white mb-12 text-center neon-text">Pricing Plans</h2><div className="grid grid-cols-1 md:grid-cols-3 gap-8">{pricingPlans.map((plan, index) => (</section><div key={index} className={`cyber-card hologram-card p-8 relative ${plan.popular ? 'ring-2 ring-cyan-400' : ''}`}>{plan.popular && (</div>
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2"></div>
                      <span className="bg-cyan-400 text-black px-4 py-1 rounded-full text-sm font-bold">Most Popular</span>
            <h2 className="text-3xl font-bold text-white mb-12 text-center neon-text">
              Pricing Plans;
            </h2>
            <div className="grid grid-cols-1 md: grid-cols-3 gap-8">,
              {pricingPlans.map((plan, index) => (</div>
                <div key={index} className={`cyber-card hologram-card p-8 relative ${plan.popular ? 'ring-2 ring-cyan-400' : ''}`}>
                  {plan.popular && (</div>
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2"></div>
                      <span className="bg-cyan-400 text-black px-4 py-1 rounded-full text-sm font-bold">
                        Most Popular;
                      </span>
                    </div>
                  )}
                  <div className="text-center mb-6"></div>
                    <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3><p className="text-gray-400 mb-4">{plan.description}</p>
                    <div className="flex items-baseline justify-center"></div>
                      <span className="text-4xl font-bold text-cyan-400">{plan.price}</span><span className="text-gray-400 ml-1">{plan.period}</span><ul className="space-y-3 mb-8">{plan.features.map((feature, featureIndex) => (</ul>
                      <li key={featureIndex} className="flex items-center text-gray-300">
                        <CheckCircle className="w-5 h-5 text-cyan-400 mr-3 flex-shrink-0" >{feature}</CheckCircle>
                      </CheckCircle>
                    ))}
                  <a
                    href="mailto:kleber@ziontechgroup.com"
                    className={`w-full block text-center py-3 px-6 rounded-lg font-semibold transition-all duration-300 ${
                      plan.popular
                        ? 'bg-cyan-400 text-black hover:bg-cyan-300'
                        : 'border-2 border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-white'
                    }`}
                  >Get Started</a>
                  </ul>
                  <a;
                    href="mailto: kleber@ziontechgroup.com",
                    className={`w-full block text-center py-3 px-6 rounded-lg font-semibold transition-all duration-300 ${,
                      plan.popular;
                        ? 'bg-cyan-400 text-black hover:bg-cyan-300'}
                        : 'border-2 border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-white'}
                    }`}
                  >
                    Get Started;
                  </a>
                </div>
              ))}
            </div>
          </section>

          {/* Benefits Section */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-white mb-12 text-center neon-text">Why Choose Our AI Workflow Automation?<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">{benefits.map((benefit, index) => (</div>
            <h2 className="text-3xl font-bold text-white mb-12 text-center neon-text">
              Why Choose Our AI Workflow Automation?
            </h2>
            <div className="grid grid-cols-1 md: grid-cols-2 lg:grid-cols-4 gap-8">,
              {benefits.map((benefit, index) => (</div>
                <div key={index} className="text-center"></div>
            <h2 className="text-3xl font-bold text-white mb-12 text-center neon-text">Why Choose Our AI Workflow Automation?</h2><div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">{benefits.map((benefit, index) => (</section>
                <div key={index} className="text-center"></div>
                  <benefit.icon className="w-16 h-16 text-cyan-400 mx-auto mb-4" />
                  <h3 className="text-xl font-semibold text-white mb-3">{benefit.title}</h3><p className="text-gray-300">{benefit.description}</p>
                </div>
              ))}
            </div>
          </section>

          {/* CTA Section */}
          <section className="text-center bg-gradient-to-r from-cyan-500/10 to-purple-500/10 rounded-xl p-12 border border-cyan-500/20">
            <h2 className="text-3xl font-bold text-white mb-6 neon-text">Ready to Automate Your Workflows?<p className="text-gray-300 mb-8 max-w-2xl mx-auto">Get started with our AI workflow automation platform today. Contact us for a free consultation</p>
            <h2 className="text-3xl font-bold text-white mb-6 neon-text">Ready to Automate Your Workflows?</h2><p className="text-gray-300 mb-8 max-w-2xl mx-auto">Get started with our AI workflow automation platform today. Contact us for a free consultation</p>
              and custom implementation plan.</p>
            <h2 className="text-3xl font-bold text-white mb-6 neon-text">
              Ready to Automate Your Workflows?
            </h2>
            <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
              Get started with our AI workflow automation platform today. Contact us for a free consultation;
              and custom implementation plan.
            </p>
            <div className="flex flex-col sm: flex-row gap-4 justify-center"></div>
              <a;
            <div className="flex flex-col sm:flex-row gap-4 justify-center"></section>
              <a
                href="tel:+13024640950"
                className="cyber-button w-full sm:w-auto text-center"
              >📞 Call: (302) 464-0950<a
                href="mailto:kleber@ziontechgroup.com"
                className="border-2 border-cyan-400 text-cyan-400 px-8 py-3 rounded-lg font-semibold hover:bg-cyan-400 hover:text-white transition-all duration-300 w-full sm:w-auto text-center"
              >✉️ Email Us</a>
              >
                📞 Call: (302) 464-0950;
              </a>
              <a;
                href="mailto:kleber@ziontechgroup.com"
                className="border-2 border-cyan-400 text-cyan-400 px-8 py-3 rounded-lg font-semibold hover:bg-cyan-400 hover:text-white transition-all duration-300 w-full sm:w-auto text-center"
              >
                ✉️ Email Us;
              </a>
            </div>
          </section>
        </main>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300">
                <div className="flex items-center justify-center w-12 h-12 bg-gradient-to-r from-purple-500 to-blue-600 rounded-lg mb-4">
                  <feature.icon className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
                <p className="text-gray-300">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Key Benefits
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Experience the power of our page solutions for your business.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {benefits.map((benefit, index) => (
              <div key={index} className="flex items-start space-x-3">
                <CheckCircle className="h-6 w-6 text-purple-400 mt-1 flex-shrink-0" />
                <p className="text-gray-300 text-lg">{benefit}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-gradient-to-r from-purple-600 to-blue-600 rounded-2xl p-8 md:p-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Ready to Get Started?
            </h2>
            <p className="text-xl text-purple-100 mb-8">
              Contact our experts to discuss your page needs and get a customized solution.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-purple-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-300 flex items-center justify-center">
                <Phone className="mr-2 h-5 w-5" />
                Call Now
              </button>
              <button className="border border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-purple-600 transition-all duration-300 flex items-center justify-center">
                <Mail className="mr-2 h-5 w-5" />
                Email Us
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PagePage;
