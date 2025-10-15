'use client';
import React from 'react';
import SEOHead from '../components/SEOHead';
import { 
  CheckCircleIcon, 
  ArrowRightIcon,
  CogIcon,
  RocketLaunchIcon,
  ClockIcon,
  ShieldCheckIcon,
  CurrencyDollarIcon,
  StarIcon,
  ChartBarIcon,
  LightBulbIcon,
  UserGroupIcon
} from '@heroicons/react/24/outline';

const AIWorkflowAutomatorProPage: React.FC = () => {
  const features = [
    {
      icon: CogIcon,
      title: 'Intelligent Automation',
      description: 'AI-powered workflow automation that learns and adapts to your business processes',
      benefits: ['90% reduction in manual tasks', 'Self-learning algorithms', 'Process optimization', 'Error-free execution']
    },
    {
      icon: RocketLaunchIcon,
      title: 'Rapid Deployment',
      description: 'Deploy complex workflows in minutes with our drag-and-drop interface',
      benefits: ['No-code workflow builder', 'Pre-built templates', 'Quick deployment', 'Instant testing']
    },
    {
      icon: ClockIcon,
      title: 'Real-time Monitoring',
      description: 'Monitor workflow performance with live dashboards and analytics',
      benefits: ['Live performance metrics', 'Real-time alerts', 'Process visibility', 'Performance optimization']
    },
    {
      icon: ChartBarIcon,
      title: 'Advanced Analytics',
      description: 'Deep insights into workflow efficiency and business process optimization',
      benefits: ['Process analytics', 'Efficiency metrics', 'Bottleneck identification', 'ROI tracking']
    },
    {
      icon: ShieldCheckIcon,
      title: 'Enterprise Security',
      description: 'Bank-level security with compliance features for enterprise environments',
      benefits: ['End-to-end encryption', 'Audit trails', 'Compliance ready', 'Role-based access']
    },
    {
      icon: LightBulbIcon,
      title: 'Smart Recommendations',
      description: 'AI suggests workflow improvements and optimization opportunities',
      benefits: ['Process optimization', 'Efficiency suggestions', 'Best practices', 'Continuous improvement']
    }
  ];

  const pricingPlans = [
    {
      name: 'Starter',
      price: '$199',
      period: '/month',
      description: 'Perfect for small teams starting with workflow automation',
      features: [
        'Up to 10 workflows',
        'Basic automation features',
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
      price: '$499',
      period: '/month',
      description: 'Ideal for growing businesses with complex automation needs',
      features: [
        'Up to 100 workflows',
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
      price: '$1,299',
      period: '/month',
      description: 'For large organizations with enterprise-scale automation requirements',
      features: [
        'Unlimited workflows',
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
      name: 'Robert Kim',
      role: 'Operations Director',
      company: 'ManufacturingPro',
      content: 'AI Workflow Automator Pro has transformed our manufacturing processes. We\'ve reduced manual work by 85% and increased efficiency by 60%.',
      rating: 5
    },
    {
      name: 'Amanda Foster',
      role: 'VP of Operations',
      company: 'RetailChain',
      content: 'The automation capabilities are incredible. We can now handle 3x more orders with the same team size. The ROI was immediate.',
      rating: 5
    },
    {
      name: 'James Wilson',
      role: 'CTO',
      company: 'TechStartup',
      content: 'The AI recommendations have helped us optimize our processes continuously. It\'s like having a process improvement expert on our team.',
      rating: 5
    }
  ];

  const stats = [
    { number: '90%', label: 'Manual Work Reduction' },
    { number: '60%', label: 'Efficiency Increase' },
    { number: '85%', label: 'Process Accuracy' },
    { number: '3x', label: 'Faster Execution' },
    { number: '99.9%', label: 'Uptime Guarantee' },
    { number: '500+', label: 'Pre-built Templates' }
  ];

  return (
    <>
      <SEOHead 
        title="AI Workflow Automator Pro - Intelligent Business Process Automation | Zion Tech Group"
        description="Automate your business processes with AI-powered workflow automation. Reduce manual work by 90% and increase efficiency by 60% with our intelligent automation platform."
        keywords="workflow automation, business process automation, AI automation, process optimization, workflow management, business efficiency"
      />
      
      <div className="min-h-screen bg-slate-900 text-white">
        {/* Hero Section */}
        <section className="relative overflow-hidden min-h-screen flex items-center">
          <div className="absolute inset-0 bg-gradient-to-br from-orange-900/30 via-slate-900 to-red-900/30"></div>
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
                  AI Workflow Automator Pro
                </h1>
                <div className="absolute -inset-1 bg-gradient-to-r from-orange-600 via-red-600 to-pink-600 rounded-lg blur opacity-30 animate-pulse"></div>
              </div>
              <p className="text-lg sm:text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed">
                Automate your business processes with AI-powered workflow automation. Reduce manual work by 90% and increase efficiency with intelligent process optimization.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
                <button className="relative group cyber-button px-8 py-4 text-lg shadow-lg shadow-orange-500/25 hover:shadow-orange-500/40">
                  <span className="relative z-10 flex items-center">
                    Start Free Trial
                    <ArrowRightIcon className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                  </span>
                </button>
                <button className="border-2 border-orange-400 text-orange-300 px-8 py-4 rounded-lg font-semibold hover:bg-orange-400 hover:text-white transition-all duration-300 text-lg hover:shadow-lg hover:shadow-orange-400/25 neon-border-animated">
                  Watch Demo
                </button>
              </div>
              
              {/* Key Stats */}
              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 max-w-6xl mx-auto">
                {stats.map((stat, index) => (
                  <div key={index} className="text-center p-4 bg-slate-800/30 rounded-lg backdrop-blur-sm hover:bg-slate-700/30 transition-all duration-300 hover:scale-105">
                    <div className="text-2xl sm:text-3xl font-bold text-orange-400 mb-1">{stat.number}</div>
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
                Powerful <span className="bg-gradient-to-r from-orange-400 to-red-400 bg-clip-text text-transparent">Automation Features</span>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Harness the power of AI to automate and optimize your business processes
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <div key={index} className="group holographic-card p-8 hover:scale-105 transition-all duration-300 hover:shadow-xl hover:shadow-orange-500/20">
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-16 h-16 bg-gradient-to-r from-orange-500 to-red-500 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform neon-border-animated">
                      <feature.icon className="w-8 h-8 text-white" />
                    </div>
                    <span className="text-sm text-orange-400 font-medium neon-text">AI Powered</span>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-4 group-hover:text-orange-300 transition-colors">
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
                Simple <span className="bg-gradient-to-r from-red-400 to-orange-400 bg-clip-text text-transparent">Pricing</span>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Choose the perfect plan for your automation needs and team size
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {pricingPlans.map((plan, index) => (
                <div key={index} className={`relative group holographic-card p-8 hover:scale-105 transition-all duration-300 ${
                  plan.popular ? 'ring-2 ring-orange-500 shadow-xl shadow-orange-500/20' : ''
                }`}>
                  {plan.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <span className="bg-gradient-to-r from-orange-500 to-red-500 text-white px-4 py-2 rounded-full text-sm font-semibold">
                        Most Popular
                      </span>
                    </div>
                  )}
                  
                  <div className="text-center mb-8">
                    <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                    <p className="text-gray-400 mb-4">{plan.description}</p>
                    <div className="flex items-baseline justify-center">
                      <span className="text-4xl font-bold text-orange-400">{plan.price}</span>
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
                      ? 'bg-gradient-to-r from-orange-600 to-red-600 text-white hover:from-orange-700 hover:to-red-700 shadow-lg shadow-orange-500/25' 
                      : 'border-2 border-orange-400 text-orange-300 hover:bg-orange-400 hover:text-white neon-border-animated'
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
                What Our <span className="bg-gradient-to-r from-red-400 to-orange-400 bg-clip-text text-transparent">Customers</span> Say
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Join thousands of businesses automating their processes with AI
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
                    <div className="text-sm text-orange-400">{testimonial.company}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="relative py-20 bg-gradient-to-r from-orange-900/40 via-slate-900 to-red-900/40 overflow-hidden">
          <div className="absolute top-10 left-10 w-64 h-64 bg-orange-500/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-10 right-10 w-80 h-80 bg-red-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
          
          <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8 relative z-10">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 bg-gradient-to-r from-orange-400 to-red-400 bg-clip-text text-transparent">
              Ready to Automate Your Business Processes?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Start your free trial today and experience the power of AI workflow automation
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="relative group bg-gradient-to-r from-orange-600 to-red-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-orange-700 hover:to-red-700 transition-all duration-300 transform hover:scale-105 text-lg shadow-lg shadow-orange-500/25">
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

export default AIWorkflowAutomatorProPage;