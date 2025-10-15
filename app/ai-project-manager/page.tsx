'use client';
import React from 'react';
import SEOHead from '../components/SEOHead';
import { 
  CheckCircleIcon, 
  ArrowRightIcon,
  ChartBarIcon,
  UserGroupIcon,
  ClockIcon,
  CogIcon,
  ShieldCheckIcon,
  CurrencyDollarIcon,
  StarIcon,
  RocketLaunchIcon
} from '@heroicons/react/24/outline';

const AIProjectManagerPage: React.FC = () => {
  const features = [
    {
      icon: ChartBarIcon,
      title: 'AI-Powered Planning',
      description: 'Intelligent project planning with predictive analytics and resource optimization',
      benefits: ['40% faster project delivery', '95% accuracy in timeline predictions', 'Real-time risk assessment']
    },
    {
      icon: UserGroupIcon,
      title: 'Smart Team Management',
      description: 'AI-driven team allocation and workload balancing for maximum productivity',
      benefits: ['30% increase in team efficiency', 'Automated skill matching', 'Dynamic resource allocation']
    },
    {
      icon: ClockIcon,
      title: 'Real-time Tracking',
      description: 'Advanced time tracking with AI insights and automated progress reporting',
      benefits: ['Live project dashboards', 'Automated status updates', 'Predictive deadline alerts']
    },
    {
      icon: CogIcon,
      title: 'Workflow Automation',
      description: 'Intelligent automation of repetitive tasks and project workflows',
      benefits: ['50% reduction in manual work', 'Smart task prioritization', 'Automated approvals']
    },
    {
      icon: ShieldCheckIcon,
      title: 'Risk Management',
      description: 'AI-powered risk detection and mitigation strategies',
      benefits: ['Early warning system', 'Automated risk mitigation', 'Compliance monitoring']
    },
    {
      icon: RocketLaunchIcon,
      title: 'Performance Analytics',
      description: 'Advanced analytics and insights to optimize project performance',
      benefits: ['ROI tracking', 'Performance metrics', 'Success prediction']
    }
  ];

  const pricingPlans = [
    {
      name: 'Starter',
      price: '$49',
      period: '/month',
      description: 'Perfect for small teams and simple projects',
      features: [
        'Up to 5 projects',
        '10 team members',
        'Basic AI planning',
        'Standard reporting',
        'Email support',
        'Mobile app access'
      ],
      popular: false,
      cta: 'Start Free Trial'
    },
    {
      name: 'Professional',
      price: '$149',
      period: '/month',
      description: 'Ideal for growing teams and complex projects',
      features: [
        'Unlimited projects',
        '50 team members',
        'Advanced AI features',
        'Custom reporting',
        'Priority support',
        'API access',
        'Integrations',
        'Advanced analytics'
      ],
      popular: true,
      cta: 'Start Free Trial'
    },
    {
      name: 'Enterprise',
      price: '$399',
      period: '/month',
      description: 'For large organizations with advanced needs',
      features: [
        'Everything in Professional',
        'Unlimited team members',
        'Custom AI models',
        'White-label solution',
        'Dedicated support',
        'Custom integrations',
        'Advanced security',
        'SLA guarantee'
      ],
      popular: false,
      cta: 'Contact Sales'
    }
  ];

  const testimonials = [
    {
      name: 'Sarah Johnson',
      role: 'Project Director',
      company: 'TechCorp Solutions',
      content: 'AI Project Manager has revolutionized how we handle complex projects. The AI predictions are incredibly accurate and have saved us countless hours.',
      rating: 5
    },
    {
      name: 'Michael Chen',
      role: 'CTO',
      company: 'InnovateLabs',
      content: 'The automation features are game-changing. We\'ve seen a 40% improvement in project delivery times since implementing this solution.',
      rating: 5
    },
    {
      name: 'Emily Rodriguez',
      role: 'Operations Manager',
      company: 'Global Dynamics',
      content: 'The risk management capabilities are outstanding. We can now predict and prevent issues before they impact our projects.',
      rating: 5
    }
  ];

  return (
    <>
      <SEOHead 
        title="AI Project Manager - Intelligent Project Management Solution | Zion Tech Group"
        description="Transform your project management with AI-powered planning, team optimization, and real-time analytics. Increase productivity by 40% with our intelligent project management platform."
        keywords="AI project management, project planning, team management, workflow automation, project analytics, productivity tools"
      />
      
      <div className="min-h-screen bg-slate-900 text-white">
        {/* Hero Section */}
        <section className="relative overflow-hidden min-h-screen flex items-center">
          <div className="absolute inset-0 bg-gradient-to-br from-purple-900/30 via-slate-900 to-cyan-900/30"></div>
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
                  AI Project Manager
                </h1>
                <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 via-pink-600 to-cyan-600 rounded-lg blur opacity-30 animate-pulse"></div>
              </div>
              <p className="text-lg sm:text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed">
                Intelligent project management powered by AI. Plan, execute, and optimize your projects with unprecedented efficiency and accuracy.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
                <button className="relative group cyber-button px-8 py-4 text-lg shadow-lg shadow-purple-500/25 hover:shadow-purple-500/40">
                  <span className="relative z-10 flex items-center">
                    Start Free Trial
                    <ArrowRightIcon className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                  </span>
                </button>
                <button className="border-2 border-purple-400 text-purple-300 px-8 py-4 rounded-lg font-semibold hover:bg-purple-400 hover:text-white transition-all duration-300 text-lg hover:shadow-lg hover:shadow-purple-400/25 neon-border-animated">
                  Watch Demo
                </button>
              </div>
              
              {/* Key Stats */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 max-w-4xl mx-auto">
                <div className="text-center p-4 bg-slate-800/30 rounded-lg backdrop-blur-sm">
                  <div className="text-2xl sm:text-3xl font-bold text-purple-400 mb-1">40%</div>
                  <div className="text-gray-300 text-sm">Faster Delivery</div>
                </div>
                <div className="text-center p-4 bg-slate-800/30 rounded-lg backdrop-blur-sm">
                  <div className="text-2xl sm:text-3xl font-bold text-cyan-400 mb-1">95%</div>
                  <div className="text-gray-300 text-sm">Accuracy Rate</div>
                </div>
                <div className="text-center p-4 bg-slate-800/30 rounded-lg backdrop-blur-sm">
                  <div className="text-2xl sm:text-3xl font-bold text-pink-400 mb-1">50%</div>
                  <div className="text-gray-300 text-sm">Less Manual Work</div>
                </div>
                <div className="text-center p-4 bg-slate-800/30 rounded-lg backdrop-blur-sm">
                  <div className="text-2xl sm:text-3xl font-bold text-green-400 mb-1">30%</div>
                  <div className="text-gray-300 text-sm">Team Efficiency</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 bg-slate-800/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
                Powerful <span className="bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">AI Features</span>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Harness the power of artificial intelligence to transform your project management workflow
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <div key={index} className="group holographic-card p-8 hover:scale-105 transition-all duration-300 hover:shadow-xl hover:shadow-purple-500/20">
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform neon-border-animated">
                      <feature.icon className="w-8 h-8 text-white" />
                    </div>
                    <span className="text-sm text-purple-400 font-medium neon-text">AI Powered</span>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-4 group-hover:text-purple-300 transition-colors">
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
                Simple <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">Pricing</span>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Choose the perfect plan for your team size and project complexity
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {pricingPlans.map((plan, index) => (
                <div key={index} className={`relative group holographic-card p-8 hover:scale-105 transition-all duration-300 ${
                  plan.popular ? 'ring-2 ring-purple-500 shadow-xl shadow-purple-500/20' : ''
                }`}>
                  {plan.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <span className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-4 py-2 rounded-full text-sm font-semibold">
                        Most Popular
                      </span>
                    </div>
                  )}
                  
                  <div className="text-center mb-8">
                    <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                    <p className="text-gray-400 mb-4">{plan.description}</p>
                    <div className="flex items-baseline justify-center">
                      <span className="text-4xl font-bold text-purple-400">{plan.price}</span>
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
                      ? 'bg-gradient-to-r from-purple-600 to-pink-600 text-white hover:from-purple-700 hover:to-pink-700 shadow-lg shadow-purple-500/25' 
                      : 'border-2 border-purple-400 text-purple-300 hover:bg-purple-400 hover:text-white neon-border-animated'
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
                What Our <span className="bg-gradient-to-r from-pink-400 to-purple-400 bg-clip-text text-transparent">Customers</span> Say
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Join thousands of teams who have transformed their project management with AI
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
                    <div className="text-sm text-purple-400">{testimonial.company}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="relative py-20 bg-gradient-to-r from-purple-900/40 via-slate-900 to-cyan-900/40 overflow-hidden">
          <div className="absolute top-10 left-10 w-64 h-64 bg-purple-500/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-10 right-10 w-80 h-80 bg-cyan-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
          
          <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8 relative z-10">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
              Ready to Transform Your Project Management?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Start your free trial today and experience the future of project management
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="relative group bg-gradient-to-r from-purple-600 to-cyan-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-purple-700 hover:to-cyan-700 transition-all duration-300 transform hover:scale-105 text-lg shadow-lg shadow-purple-500/25">
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

export default AIProjectManagerPage;