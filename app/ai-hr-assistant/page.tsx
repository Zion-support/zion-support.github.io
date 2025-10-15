'use client';
import React, { useState } from 'react';
import SEOHead from '../components/SEOHead';
import { 
  CheckCircleIcon, 
  UserGroupIcon, 
  ChartBarIcon, 
  DocumentTextIcon,
  CalendarIcon,
  CogIcon,
  ArrowRightIcon,
  StarIcon,
  BoltIcon,
  ShieldCheckIcon,
  EnvelopeIcon,
  GlobeAltIcon
} from '@heroicons/react/24/outline';

const AIHRAssistantPage: React.FC = () => {
  const [activeTab, setActiveTab] = useState('overview');

  const features = [
    {
      icon: BoltIcon,
      title: 'AI-Powered Recruitment',
      description: 'Automatically screen resumes, conduct initial interviews, and match candidates to job requirements using advanced AI algorithms.',
      benefits: ['75% faster hiring process', '90% candidate match accuracy', 'Reduced bias in recruitment']
    },
    {
      icon: UserGroupIcon,
      title: 'Employee Analytics',
      description: 'Monitor employee performance, engagement, and satisfaction with AI-driven insights and predictive analytics.',
      benefits: ['Performance optimization', 'Early warning systems', 'Retention prediction']
    },
    {
      icon: DocumentTextIcon,
      title: 'Automated Documentation',
      description: 'Generate HR documents, contracts, and reports automatically with AI-powered document creation and management.',
      benefits: ['90% time savings', 'Compliance automation', 'Error reduction']
    },
    {
      icon: ShieldCheckIcon,
      title: 'Compliance Management',
      description: 'Ensure HR compliance with labor laws, regulations, and company policies using AI-powered monitoring and alerts.',
      benefits: ['Legal compliance', 'Risk mitigation', 'Audit preparation']
    }
  ];

  const pricingPlans = [
    {
      name: 'Small Business',
      price: '$79',
      period: '/month',
      description: 'Perfect for companies with 1-50 employees',
      features: [
        'Up to 50 employees',
        'Basic AI features',
        'Recruitment tools',
        'Basic analytics',
        'Email support',
        'Document generation'
      ],
      popular: false
    },
    {
      name: 'Professional',
      price: '$199',
      period: '/month',
      description: 'Ideal for growing companies',
      features: [
        'Up to 200 employees',
        'Advanced AI features',
        'Full recruitment suite',
        'Advanced analytics',
        'Priority support',
        'API access',
        'Custom workflows',
        'Integration tools'
      ],
      popular: true
    },
    {
      name: 'Enterprise',
      price: '$499',
      period: '/month',
      description: 'For large organizations',
      features: [
        'Unlimited employees',
        'Custom AI training',
        'Dedicated support',
        'On-premise deployment',
        'Advanced security',
        'Custom integrations',
        'SLA guarantee',
        'White-label solution'
      ],
      popular: false
    }
  ];

  const testimonials = [
    {
      name: 'Jennifer Adams',
      role: 'HR Director, TechCorp',
      content: 'This AI HR assistant transformed our recruitment process. We now hire 3x faster with better quality candidates.',
      rating: 5
    },
    {
      name: 'Michael Torres',
      role: 'CEO, StartupXYZ',
      content: 'The employee analytics helped us reduce turnover by 40%. The insights are incredibly valuable.',
      rating: 5
    },
    {
      name: 'Sarah Kim',
      role: 'People Operations, GrowthCo',
      content: 'Automated documentation saved us 20 hours per week. The compliance features are outstanding.',
      rating: 5
    }
  ];

  const useCases = [
    {
      title: 'Recruitment & Hiring',
      description: 'Streamline the entire hiring process from job posting to candidate onboarding with AI automation.',
      icon: UserGroupIcon
    },
    {
      title: 'Performance Management',
      description: 'Monitor and optimize employee performance with AI-driven insights and recommendations.',
      icon: ChartBarIcon
    },
    {
      title: 'Employee Engagement',
      description: 'Track and improve employee satisfaction and engagement with predictive analytics.',
      icon: GlobeAltIcon
    },
    {
      title: 'Compliance & Legal',
      description: 'Ensure HR compliance and manage legal requirements with automated monitoring and alerts.',
      icon: ShieldCheckIcon
    }
  ];

  const modules = [
    {
      title: 'Recruitment AI',
      description: 'Automated resume screening, candidate matching, and interview scheduling',
      icon: UserGroupIcon
    },
    {
      title: 'Performance Analytics',
      description: 'Employee performance tracking, goal setting, and progress monitoring',
      icon: ChartBarIcon
    },
    {
      title: 'Document Management',
      description: 'Automated contract generation, policy management, and compliance tracking',
      icon: DocumentTextIcon
    },
    {
      title: 'Employee Onboarding',
      description: 'Streamlined onboarding process with automated workflows and checklists',
      icon: CogIcon
    },
    {
      title: 'Benefits Administration',
      description: 'Automated benefits enrollment, management, and employee self-service',
      icon: ShieldCheckIcon
    },
    {
      title: 'Time & Attendance',
      description: 'Smart time tracking, attendance monitoring, and leave management',
      icon: CalendarIcon
    }
  ];

  return (
    <>
      <SEOHead 
        title="AI HR Assistant - Zion Tech Group"
        description="Revolutionary AI-powered HR management platform that automates recruitment, performance management, and employee engagement. Transform your HR operations today."
        keywords="AI HR assistant, HR automation, recruitment AI, employee management, HR analytics, performance tracking, HR software"
        canonicalUrl="https://ziontechgroup.com/ai-hr-assistant"
      />
      
      <div className="min-h-screen bg-slate-900 text-white">
        {/* Hero Section */}
        <section className="relative overflow-hidden min-h-screen flex items-center">
          <div className="absolute inset-0 bg-gradient-to-br from-teal-900/30 via-slate-900 to-emerald-900/30"></div>
          <div className="absolute inset-0 cyber-grid opacity-20"></div>
          
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32 w-full">
            <div className="text-center">
              <div className="relative inline-block mb-6">
                <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold holographic leading-tight neon-text">
                  AI HR Assistant
                </h1>
                <div className="absolute -inset-1 bg-gradient-to-r from-teal-600 via-emerald-600 to-cyan-600 rounded-lg blur opacity-30 animate-pulse"></div>
              </div>
              <p className="text-lg sm:text-xl lg:text-2xl text-gray-300 mb-8 lg:mb-12 max-w-4xl mx-auto leading-relaxed px-4">
                Revolutionize your HR operations with AI-powered recruitment, performance management, and employee engagement tools. 
                <br className="hidden sm:block" />
                <span className="text-cyan-400 font-semibold">Contact us at +1 302 464 0950 or kleber@ziontechgroup.com</span>
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12 lg:mb-16 px-4">
                <button className="relative group cyber-button px-6 sm:px-8 py-3 sm:py-4 text-sm sm:text-base shadow-lg shadow-teal-500/25 hover:shadow-teal-500/40">
                  <span className="relative z-10 flex items-center">
                    Start Free Trial
                    <ArrowRightIcon className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </span>
                </button>
                <button className="border-2 border-teal-400 text-teal-300 px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-semibold hover:bg-teal-400 hover:text-white transition-all duration-300 text-sm sm:text-base hover:shadow-lg hover:shadow-teal-400/25 neon-border-animated">
                  Watch Demo
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-16 sm:py-20 bg-slate-800/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12 sm:mb-16">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6">
                Powerful <span className="bg-gradient-to-r from-teal-400 to-emerald-400 bg-clip-text text-transparent">AI Features</span>
              </h2>
              <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto px-4">
                Harness the power of artificial intelligence to automate and optimize your HR operations.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
              {features.map((feature, index) => (
                <div key={index} className="group relative bg-slate-800/50 p-6 sm:p-8 rounded-xl border border-slate-700 hover:border-teal-500 transition-all duration-300 hover:transform hover:scale-105 hover:shadow-xl hover:shadow-teal-500/20">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-teal-500 to-emerald-500 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform">
                      <feature.icon className="w-6 h-6 text-white" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-white mb-3 group-hover:text-teal-300 transition-colors">
                        {feature.title}
                      </h3>
                      <p className="text-gray-400 mb-4 group-hover:text-gray-300 transition-colors">
                        {feature.description}
                      </p>
                      <ul className="space-y-2">
                        {feature.benefits.map((benefit, idx) => (
                          <li key={idx} className="flex items-center text-sm text-gray-300">
                            <CheckCircleIcon className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                            {benefit}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Modules Section */}
        <section className="py-16 sm:py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12 sm:mb-16">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6">
                Complete <span className="bg-gradient-to-r from-emerald-400 to-teal-400 bg-clip-text text-transparent">HR Suite</span>
              </h2>
              <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto px-4">
                Everything you need to manage your human resources in one integrated platform.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {modules.map((module, index) => (
                <div key={index} className="group relative bg-slate-800/50 p-6 rounded-xl border border-slate-700 hover:border-emerald-500 transition-all duration-300 hover:transform hover:scale-105 hover:shadow-xl hover:shadow-emerald-500/20">
                  <div className="w-12 h-12 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                    <module.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-lg font-bold text-white mb-3 group-hover:text-emerald-300 transition-colors">
                    {module.title}
                  </h3>
                  <p className="text-gray-400 text-sm group-hover:text-gray-300 transition-colors">
                    {module.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Use Cases Section */}
        <section className="py-16 sm:py-20 bg-slate-800/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12 sm:mb-16">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6">
                Perfect for <span className="bg-gradient-to-r from-cyan-400 to-teal-400 bg-clip-text text-transparent">Every HR Team</span>
              </h2>
              <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto px-4">
                From small startups to large enterprises, our AI HR assistant adapts to your organization's needs.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {useCases.map((useCase, index) => (
                <div key={index} className="group relative bg-slate-800/50 p-6 rounded-xl border border-slate-700 hover:border-cyan-500 transition-all duration-300 hover:transform hover:scale-105 hover:shadow-xl hover:shadow-cyan-500/20">
                  <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-teal-500 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                    <useCase.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-lg font-bold text-white mb-3 group-hover:text-cyan-300 transition-colors">
                    {useCase.title}
                  </h3>
                  <p className="text-gray-400 text-sm group-hover:text-gray-300 transition-colors">
                    {useCase.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section className="py-16 sm:py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12 sm:mb-16">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6">
                Simple <span className="bg-gradient-to-r from-teal-400 to-emerald-400 bg-clip-text text-transparent">Pricing</span>
              </h2>
              <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto px-4">
                Choose the perfect plan for your organization. All plans include our core AI features and 24/7 support.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {pricingPlans.map((plan, index) => (
                <div key={index} className={`relative bg-slate-800/50 p-6 sm:p-8 rounded-xl border transition-all duration-300 hover:transform hover:scale-105 hover:shadow-xl ${
                  plan.popular 
                    ? 'border-teal-500 shadow-teal-500/20' 
                    : 'border-slate-700 hover:border-teal-500'
                }`}>
                  {plan.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <span className="bg-gradient-to-r from-teal-500 to-emerald-500 text-white px-4 py-1 rounded-full text-sm font-semibold">
                        Most Popular
                      </span>
                    </div>
                  )}
                  
                  <div className="text-center mb-6">
                    <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                    <p className="text-gray-400 mb-4">{plan.description}</p>
                    <div className="flex items-baseline justify-center">
                      <span className="text-4xl font-bold text-teal-400">{plan.price}</span>
                      <span className="text-gray-400 ml-1">{plan.period}</span>
                    </div>
                  </div>
                  
                  <ul className="space-y-3 mb-8">
                    {plan.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-gray-300">
                        <CheckCircleIcon className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  
                  <button className={`w-full py-3 px-4 rounded-lg font-semibold transition-all duration-300 ${
                    plan.popular
                      ? 'bg-gradient-to-r from-teal-600 to-emerald-600 text-white hover:from-teal-700 hover:to-emerald-700'
                      : 'border-2 border-teal-400 text-teal-300 hover:bg-teal-400 hover:text-white'
                  }`}>
                    {plan.popular ? 'Start Free Trial' : 'Get Started'}
                  </button>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="py-16 sm:py-20 bg-slate-800/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12 sm:mb-16">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6">
                What Our <span className="bg-gradient-to-r from-teal-400 to-emerald-400 bg-clip-text text-transparent">Customers Say</span>
              </h2>
              <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto px-4">
                Join thousands of HR teams who have transformed their operations with our AI-powered platform.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                <div key={index} className="bg-slate-800/50 p-6 rounded-xl border border-slate-700 hover:border-teal-500 transition-all duration-300">
                  <div className="flex items-center mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <StarIcon key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <p className="text-gray-300 mb-4 italic">"{testimonial.content}"</p>
                  <div>
                    <p className="font-semibold text-white">{testimonial.name}</p>
                    <p className="text-sm text-gray-400">{testimonial.role}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="relative py-16 sm:py-20 bg-gradient-to-r from-teal-900/40 via-slate-900 to-emerald-900/40 overflow-hidden">
          <div className="absolute top-10 left-10 w-64 h-64 bg-teal-500/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-10 right-10 w-80 h-80 bg-emerald-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
          
          <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8 relative z-10">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6 bg-gradient-to-r from-teal-400 to-emerald-400 bg-clip-text text-transparent">
              Ready to Transform Your HR Operations?
            </h2>
            <p className="text-lg sm:text-xl text-gray-300 mb-6 sm:mb-8">
              Start your free 14-day trial today. No credit card required. Experience the power of AI-driven HR management.
              <br className="hidden sm:block" />
              <span className="text-cyan-400 font-semibold">Get in touch: +1 302 464 0950 | kleber@ziontechgroup.com</span>
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="relative group bg-gradient-to-r from-teal-600 to-emerald-600 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-semibold hover:from-teal-700 hover:to-emerald-700 transition-all duration-300 transform hover:scale-105 text-sm sm:text-base shadow-lg shadow-teal-500/25">
                <span className="relative z-10 flex items-center">
                  Start Free Trial
                  <ArrowRightIcon className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </span>
              </button>
              <a href="tel:+13024640950" className="border-2 border-white text-white hover:bg-white hover:text-slate-900 px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-semibold transition-all duration-300 text-sm sm:text-base hover:shadow-lg hover:shadow-white/25">
                Call Now
              </a>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default AIHRAssistantPage;