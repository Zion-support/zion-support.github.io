'use client';
import React from 'react';
import SEOHead from '../components/SEOHead';
import { 
  UserGroupIcon, 
  CheckCircleIcon, 
  ClockIcon, 
  ChartBarIcon,
  DocumentTextIcon,
  ShieldCheckIcon,
  CogIcon,
  ArrowRightIcon,
  StarIcon,
  HeartIcon
} from '@heroicons/react/24/outline';

const AIHRAssistantProPage: React.FC = () => {
  const features = [
    {
      icon: UserGroupIcon,
      title: 'Intelligent Recruitment',
      description: 'AI-powered candidate screening and matching based on job requirements and cultural fit.',
      benefits: ['Smart candidate matching', 'Bias-free screening', 'Faster hiring process']
    },
    {
      icon: DocumentTextIcon,
      title: 'Automated Onboarding',
      description: 'Streamlined onboarding process with automated document generation and task assignments.',
      benefits: ['Automated workflows', 'Document generation', 'Task management']
    },
    {
      icon: ChartBarIcon,
      title: 'Performance Analytics',
      description: 'Comprehensive analytics on employee performance, engagement, and development needs.',
      benefits: ['Performance insights', 'Engagement tracking', 'Development planning']
    },
    {
      icon: ClockIcon,
      title: 'Time & Attendance',
      description: 'Smart time tracking with automated attendance management and leave balance calculations.',
      benefits: ['Automated tracking', 'Leave management', 'Overtime calculations']
    },
    {
      icon: ShieldCheckIcon,
      title: 'Compliance Management',
      description: 'Automated compliance tracking and reporting to ensure HR policies are followed.',
      benefits: ['Policy compliance', 'Automated reporting', 'Risk management']
    },
    {
      icon: CogIcon,
      title: 'Workflow Automation',
      description: 'Automate repetitive HR tasks and streamline processes for maximum efficiency.',
      benefits: ['Process automation', 'Efficiency gains', 'Reduced workload']
    }
  ];

  const pricingTiers = [
    {
      name: 'Starter',
      price: '$149',
      period: '/month',
      description: 'Perfect for small teams',
      features: [
        'Up to 25 employees',
        'Basic HR features',
        'Email support',
        'Standard templates',
        'Basic analytics'
      ],
      popular: false
    },
    {
      name: 'Professional',
      price: '$299',
      period: '/month',
      description: 'Ideal for growing businesses',
      features: [
        'Up to 100 employees',
        'Advanced AI features',
        'Priority support',
        'Custom workflows',
        'Advanced analytics',
        'API access',
        'Integrations'
      ],
      popular: true
    },
    {
      name: 'Enterprise',
      price: '$599',
      period: '/month',
      description: 'For large organizations',
      features: [
        'Unlimited employees',
        'Custom AI models',
        'Dedicated support',
        'White-label options',
        'Advanced security',
        'Custom development',
        '24/7 phone support'
      ],
      popular: false
    }
  ];

  const testimonials = [
    {
      name: 'Amanda Foster',
      role: 'HR Director',
      company: 'PeopleFirst Corp',
      content: 'AI HR Assistant Pro transformed our recruitment process. We found the right candidates 60% faster with better cultural fit.',
      rating: 5
    },
    {
      name: 'David Lee',
      role: 'VP of People',
      company: 'TechGrowth Inc',
      content: 'The automated onboarding process saves us hours every week. New employees are productive from day one.',
      rating: 5
    },
    {
      name: 'Sarah Johnson',
      role: 'CHRO',
      company: 'Global Enterprises',
      content: 'The performance analytics help us identify top performers and development opportunities. Our retention rate improved by 40%.',
      rating: 5
    }
  ];

  return (
    <>
      <SEOHead 
        title="AI HR Assistant Pro - Intelligent Human Resources Management | Zion Tech Group"
        description="Transform your HR operations with AI HR Assistant Pro. Features intelligent recruitment, automated onboarding, performance analytics, and compliance management. Start your free trial today."
        keywords="HR management, AI recruitment, employee onboarding, performance analytics, HR automation, human resources software, talent management"
      />
      
      <div className="min-h-screen bg-slate-900 text-white">
        {/* Hero Section */}
        <section className="relative overflow-hidden py-20 lg:py-32">
          <div className="absolute inset-0 bg-gradient-to-br from-rose-900/30 via-slate-900 to-pink-900/30"></div>
          <div className="absolute inset-0 opacity-30" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23f43f5e' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
          }}></div>
          
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-rose-500/10 border border-rose-500/20 text-rose-400 text-sm font-medium mb-6">
                <UserGroupIcon className="w-4 h-4 mr-2" />
                AI-Powered Human Resources
              </div>
              
              <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold mb-6">
                <span className="bg-gradient-to-r from-rose-400 via-pink-400 to-purple-400 bg-clip-text text-transparent">
                  AI HR Assistant Pro
                </span>
              </h1>
              
              <p className="text-xl sm:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
                Revolutionize your HR operations with AI-powered recruitment, automated onboarding, and intelligent 
                performance analytics. Streamline your entire HR workflow and improve employee satisfaction.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
                <button className="bg-gradient-to-r from-rose-500 to-pink-500 hover:from-rose-600 hover:to-pink-600 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg shadow-rose-500/25">
                  Start Free Trial
                </button>
                <button className="border-2 border-rose-400 text-rose-300 hover:bg-rose-400 hover:text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300">
                  Watch Demo
                </button>
              </div>
              
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 max-w-4xl mx-auto">
                <div className="text-center">
                  <div className="text-3xl font-bold text-rose-400 mb-2">60%</div>
                  <div className="text-gray-300">Faster Hiring</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-rose-400 mb-2">40%</div>
                  <div className="text-gray-300">Better Retention</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-rose-400 mb-2">75%</div>
                  <div className="text-gray-300">Time Savings</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-rose-400 mb-2">95%</div>
                  <div className="text-gray-300">Accuracy</div>
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
                Powerful <span className="bg-gradient-to-r from-rose-400 to-pink-400 bg-clip-text text-transparent">HR Features</span>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Leverage cutting-edge AI technology to transform your human resources operations.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <div key={index} className="group bg-slate-800/50 p-8 rounded-xl border border-slate-700 hover:border-rose-500 transition-all duration-300 hover:transform hover:scale-105 hover:shadow-xl hover:shadow-rose-500/20">
                  <div className="w-16 h-16 bg-gradient-to-r from-rose-500 to-pink-500 rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                    <feature.icon className="w-8 h-8 text-white" />
                  </div>
                  
                  <h3 className="text-xl font-bold text-white mb-4 group-hover:text-rose-300 transition-colors">
                    {feature.title}
                  </h3>
                  
                  <p className="text-gray-400 mb-6 group-hover:text-gray-300 transition-colors">
                    {feature.description}
                  </p>
                  
                  <div className="space-y-2">
                    {feature.benefits.map((benefit, benefitIndex) => (
                      <div key={benefitIndex} className="flex items-center text-sm text-gray-300">
                        <CheckCircleIcon className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                        <span>{benefit}</span>
                      </div>
                    ))}
                  </div>
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
                Choose Your <span className="bg-gradient-to-r from-rose-400 to-pink-400 bg-clip-text text-transparent">Plan</span>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Flexible pricing options designed to scale with your organization size.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {pricingTiers.map((tier, index) => (
                <div key={index} className={`relative bg-slate-800/50 p-8 rounded-xl border transition-all duration-300 hover:transform hover:scale-105 ${
                  tier.popular 
                    ? 'border-rose-500 shadow-xl shadow-rose-500/20' 
                    : 'border-slate-700 hover:border-rose-500'
                }`}>
                  {tier.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <span className="bg-gradient-to-r from-rose-500 to-pink-500 text-white px-4 py-2 rounded-full text-sm font-semibold">
                        Most Popular
                      </span>
                    </div>
                  )}
                  
                  <div className="text-center mb-8">
                    <h3 className="text-2xl font-bold text-white mb-2">{tier.name}</h3>
                    <p className="text-gray-400 mb-4">{tier.description}</p>
                    <div className="flex items-baseline justify-center">
                      <span className="text-4xl font-bold text-rose-400">{tier.price}</span>
                      <span className="text-gray-400 ml-1">{tier.period}</span>
                    </div>
                  </div>
                  
                  <ul className="space-y-4 mb-8">
                    {tier.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-gray-300">
                        <CheckCircleIcon className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <button className={`w-full py-3 rounded-lg font-semibold transition-all duration-300 ${
                    tier.popular
                      ? 'bg-gradient-to-r from-rose-500 to-pink-500 hover:from-rose-600 hover:to-pink-600 text-white'
                      : 'border-2 border-rose-400 text-rose-300 hover:bg-rose-400 hover:text-white'
                  }`}>
                    {tier.popular ? 'Start Free Trial' : 'Get Started'}
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
                What Our <span className="bg-gradient-to-r from-rose-400 to-pink-400 bg-clip-text text-transparent">Customers Say</span>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Join thousands of organizations who have transformed their HR with AI HR Assistant Pro.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                <div key={index} className="bg-slate-800/50 p-6 rounded-xl border border-slate-700 hover:border-rose-500 transition-all duration-300">
                  <div className="flex items-center mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <StarIcon key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  
                  <p className="text-gray-300 mb-6 italic">"{testimonial.content}"</p>
                  
                  <div>
                    <div className="font-semibold text-white">{testimonial.name}</div>
                    <div className="text-sm text-gray-400">{testimonial.role}, {testimonial.company}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-rose-900/40 via-slate-900 to-pink-900/40">
          <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 bg-gradient-to-r from-rose-400 to-pink-400 bg-clip-text text-transparent">
              Ready to Transform Your HR Operations?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Start your free 14-day trial today. No credit card required.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-rose-500 to-pink-500 hover:from-rose-600 hover:to-pink-600 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg shadow-rose-500/25">
                Start Free Trial
              </button>
              <button className="border-2 border-white text-white hover:bg-white hover:text-slate-900 px-8 py-4 rounded-lg font-semibold transition-all duration-300">
                Contact Sales
              </button>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default AIHRAssistantProPage;