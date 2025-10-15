'use client';
import React from 'react';
import SEOHead from '../components/SEOHead';
import { 
  CheckCircleIcon, 
  ArrowRightIcon,
  ChatBubbleLeftRightIcon,
  UserGroupIcon,
  ClockIcon,
  CogIcon,
  ShieldCheckIcon,
  CurrencyDollarIcon,
  StarIcon,
  RocketLaunchIcon,
  HeartIcon,
  LightBulbIcon
} from '@heroicons/react/24/outline';

const AICustomerSupportProPage: React.FC = () => {
  const features = [
    {
      icon: ChatBubbleLeftRightIcon,
      title: 'AI-Powered Chatbots',
      description: 'Intelligent chatbots that understand context and provide instant, accurate responses',
      benefits: ['95% accuracy in responses', '24/7 availability', 'Multi-language support', 'Context-aware conversations']
    },
    {
      icon: UserGroupIcon,
      title: 'Smart Ticket Routing',
      description: 'AI automatically routes tickets to the right agent based on expertise and workload',
      benefits: ['50% faster resolution', 'Reduced agent workload', 'Improved customer satisfaction', 'Intelligent prioritization']
    },
    {
      icon: ClockIcon,
      title: 'Real-time Analytics',
      description: 'Live dashboards with customer sentiment analysis and performance metrics',
      benefits: ['Real-time insights', 'Sentiment tracking', 'Performance monitoring', 'Predictive analytics']
    },
    {
      icon: CogIcon,
      title: 'Workflow Automation',
      description: 'Automate repetitive tasks and streamline support processes',
      benefits: ['80% reduction in manual work', 'Faster response times', 'Consistent service quality', 'Automated escalations']
    },
    {
      icon: ShieldCheckIcon,
      title: 'Advanced Security',
      description: 'Enterprise-grade security with data encryption and compliance features',
      benefits: ['End-to-end encryption', 'GDPR compliance', 'SOC 2 certified', 'Regular security audits']
    },
    {
      icon: LightBulbIcon,
      title: 'Knowledge Management',
      description: 'AI-powered knowledge base that learns and improves from every interaction',
      benefits: ['Self-learning system', 'Dynamic content updates', 'Smart search', 'Knowledge sharing']
    }
  ];

  const pricingPlans = [
    {
      name: 'Starter',
      price: '$99',
      period: '/month',
      description: 'Perfect for small businesses starting with AI support',
      features: [
        'Up to 1,000 conversations/month',
        'Basic AI chatbot',
        'Email support',
        'Standard integrations',
        'Basic analytics',
        '5 team members'
      ],
      popular: false,
      cta: 'Start Free Trial'
    },
    {
      name: 'Professional',
      price: '$299',
      period: '/month',
      description: 'Ideal for growing businesses with higher support volumes',
      features: [
        'Up to 10,000 conversations/month',
        'Advanced AI features',
        'Priority support',
        'Advanced integrations',
        'Real-time analytics',
        'Unlimited team members',
        'Custom workflows',
        'API access'
      ],
      popular: true,
      cta: 'Start Free Trial'
    },
    {
      name: 'Enterprise',
      price: '$799',
      period: '/month',
      description: 'For large organizations with complex support needs',
      features: [
        'Unlimited conversations',
        'Custom AI models',
        'Dedicated support',
        'White-label solution',
        'Advanced security',
        'Custom integrations',
        'SLA guarantee',
        'Training & onboarding'
      ],
      popular: false,
      cta: 'Contact Sales'
    }
  ];

  const testimonials = [
    {
      name: 'Jennifer Martinez',
      role: 'Customer Success Director',
      company: 'CloudTech Solutions',
      content: 'Our customer satisfaction scores increased by 45% after implementing AI Customer Support Pro. The AI understands our customers better than we ever could.',
      rating: 5
    },
    {
      name: 'David Thompson',
      role: 'VP of Operations',
      company: 'RetailMax',
      content: 'The automation features have reduced our support team\'s workload by 60% while improving response times. It\'s been a game-changer for our business.',
      rating: 5
    },
    {
      name: 'Lisa Chen',
      role: 'Head of Customer Experience',
      company: 'FinanceFlow',
      content: 'The real-time analytics help us understand our customers better. We can now predict issues before they become problems.',
      rating: 5
    }
  ];

  const stats = [
    { number: '95%', label: 'Customer Satisfaction' },
    { number: '60%', label: 'Faster Resolution' },
    { number: '24/7', label: 'Availability' },
    { number: '50+', label: 'Languages Supported' },
    { number: '99.9%', label: 'Uptime Guarantee' },
    { number: '10K+', label: 'Happy Customers' }
  ];

  return (
    <>
      <SEOHead 
        title="AI Customer Support Pro - Intelligent Customer Service Solution | Zion Tech Group"
        description="Revolutionize your customer support with AI-powered chatbots, smart ticket routing, and real-time analytics. Increase satisfaction by 95% with our intelligent support platform."
        keywords="AI customer support, chatbot, customer service, ticket routing, support automation, customer satisfaction"
      />
      
      <div className="min-h-screen bg-slate-900 text-white">
        {/* Hero Section */}
        <section className="relative overflow-hidden min-h-screen flex items-center">
          <div className="absolute inset-0 bg-gradient-to-br from-blue-900/30 via-slate-900 to-green-900/30"></div>
          <div className="absolute inset-0 cyber-grid-enhanced opacity-20"></div>
          
          {/* Quantum Particles */}
          <div className="quantum-particles">
            {[...Array(30)].map((_, i) => (
              <div key={i} className="quantum-particle" style={{
                left: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 20}s`,
                animationDuration: `${20 + Math.random() * 10}s`
              }}></div>
            ))}
          </div>
          
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32 w-full">
            <div className="text-center">
              <div className="relative inline-block mb-6">
                <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold holographic leading-tight neon-text">
                  AI Customer Support Pro
                </h1>
                <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 via-green-600 to-cyan-600 rounded-lg blur opacity-30 animate-pulse"></div>
              </div>
              <p className="text-lg sm:text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed">
                Transform your customer support with AI-powered chatbots, smart automation, and real-time analytics. Deliver exceptional customer experiences 24/7.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
                <button className="relative group cyber-button px-8 py-4 text-lg shadow-lg shadow-blue-500/25 hover:shadow-blue-500/40">
                  <span className="relative z-10 flex items-center">
                    Start Free Trial
                    <ArrowRightIcon className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                  </span>
                </button>
                <button className="border-2 border-blue-400 text-blue-300 px-8 py-4 rounded-lg font-semibold hover:bg-blue-400 hover:text-white transition-all duration-300 text-lg hover:shadow-lg hover:shadow-blue-400/25 neon-border-animated">
                  Watch Demo
                </button>
              </div>
              
              {/* Key Stats */}
              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 max-w-6xl mx-auto">
                {stats.map((stat, index) => (
                  <div key={index} className="text-center p-4 bg-slate-800/30 rounded-lg backdrop-blur-sm hover:bg-slate-700/30 transition-all duration-300 hover:scale-105">
                    <div className="text-2xl sm:text-3xl font-bold text-blue-400 mb-1">{stat.number}</div>
                    <div className="text-gray-300 text-sm">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 bg-slate-800/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
                Powerful <span className="bg-gradient-to-r from-blue-400 to-green-400 bg-clip-text text-transparent">AI Features</span>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Harness the power of artificial intelligence to deliver exceptional customer support experiences
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <div key={index} className="group holographic-card p-8 hover:scale-105 transition-all duration-300 hover:shadow-xl hover:shadow-blue-500/20">
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-green-500 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform neon-border-animated">
                      <feature.icon className="w-8 h-8 text-white" />
                    </div>
                    <span className="text-sm text-blue-400 font-medium neon-text">AI Powered</span>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-4 group-hover:text-blue-300 transition-colors">
                    {feature.title}
                  </h3>
                  <p className="text-gray-400 mb-6 group-hover:text-gray-300 transition-colors">
                    {feature.description}
                  </p>
                  <ul className="space-y-2">
                    {feature.benefits.map((benefit, idx) => (
                      <li key={idx} className="flex items-center text-sm text-gray-300">
                        <CheckCircleIcon className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                        <span>{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
                Simple <span className="bg-gradient-to-r from-green-400 to-blue-400 bg-clip-text text-transparent">Pricing</span>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Choose the perfect plan for your support team and customer volume
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {pricingPlans.map((plan, index) => (
                <div key={index} className={`relative group holographic-card p-8 hover:scale-105 transition-all duration-300 ${
                  plan.popular ? 'ring-2 ring-blue-500 shadow-xl shadow-blue-500/20' : ''
                }`}>
                  {plan.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <span className="bg-gradient-to-r from-blue-500 to-green-500 text-white px-4 py-2 rounded-full text-sm font-semibold">
                        Most Popular
                      </span>
                    </div>
                  )}
                  
                  <div className="text-center mb-8">
                    <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                    <p className="text-gray-400 mb-4">{plan.description}</p>
                    <div className="flex items-baseline justify-center">
                      <span className="text-4xl font-bold text-blue-400">{plan.price}</span>
                      <span className="text-gray-400 ml-1">{plan.period}</span>
                    </div>
                  </div>
                  
                  <ul className="space-y-4 mb-8">
                    {plan.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-gray-300">
                        <CheckCircleIcon className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <button className={`w-full py-3 px-6 rounded-lg font-semibold transition-all duration-300 ${
                    plan.popular 
                      ? 'bg-gradient-to-r from-blue-600 to-green-600 text-white hover:from-blue-700 hover:to-green-700 shadow-lg shadow-blue-500/25' 
                      : 'border-2 border-blue-400 text-blue-300 hover:bg-blue-400 hover:text-white neon-border-animated'
                  }`}>
                    {plan.cta}
                  </button>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="py-20 bg-slate-800/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
                What Our <span className="bg-gradient-to-r from-green-400 to-blue-400 bg-clip-text text-transparent">Customers</span> Say
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Join thousands of businesses delivering exceptional customer support with AI
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                <div key={index} className="holographic-card p-8 hover:scale-105 transition-all duration-300">
                  <div className="flex items-center mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <StarIcon key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <p className="text-gray-300 mb-6 italic">"{testimonial.content}"</p>
                  <div className="border-t border-gray-700 pt-4">
                    <div className="font-semibold text-white">{testimonial.name}</div>
                    <div className="text-sm text-gray-400">{testimonial.role}</div>
                    <div className="text-sm text-blue-400">{testimonial.company}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="relative py-20 bg-gradient-to-r from-blue-900/40 via-slate-900 to-green-900/40 overflow-hidden">
          <div className="absolute top-10 left-10 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-10 right-10 w-80 h-80 bg-green-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
          
          <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8 relative z-10">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-green-400 bg-clip-text text-transparent">
              Ready to Transform Your Customer Support?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Start your free trial today and experience the future of customer support
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="relative group bg-gradient-to-r from-blue-600 to-green-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-blue-700 hover:to-green-700 transition-all duration-300 transform hover:scale-105 text-lg shadow-lg shadow-blue-500/25">
                <span className="relative z-10 flex items-center">
                  Start Free Trial
                  <ArrowRightIcon className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                </span>
              </button>
              <button className="border-2 border-white text-white hover:bg-white hover:text-slate-900 px-8 py-4 rounded-lg font-semibold transition-all duration-300 text-lg hover:shadow-lg hover:shadow-white/25">
                Schedule Demo
              </button>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default AICustomerSupportProPage;