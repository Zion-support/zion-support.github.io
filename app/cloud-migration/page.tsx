'use client';
import React from 'react';
import SEOHead from '../components/SEOHead';
import { 
  CloudIcon, 
  CheckCircleIcon, 
  ClockIcon, 
  ArrowPathIcon,
  ShieldCheckIcon,
  ChartBarIcon,
  CogIcon,
  ArrowRightIcon,
  StarIcon,
  ServerIcon
} from '@heroicons/react/24/outline';

const CloudMigrationPage: React.FC = () => {
  const features = [
    {
      icon: CloudIcon,
      title: 'Seamless Migration',
      description: 'Smooth migration to cloud platforms with zero downtime and minimal disruption to your business.',
      benefits: ['Zero downtime', 'Minimal disruption', 'Smooth transition']
    },
    {
      icon: ArrowPathIcon,
      title: 'Multi-Cloud Strategy',
      description: 'Support for all major cloud providers including AWS, Azure, and Google Cloud Platform.',
      benefits: ['Multi-cloud support', 'Vendor flexibility', 'Best-of-breed solutions']
    },
    {
      icon: ShieldCheckIcon,
      title: 'Security First',
      description: 'Enterprise-grade security measures throughout the migration process and beyond.',
      benefits: ['End-to-end security', 'Compliance ready', 'Data protection']
    },
    {
      icon: ChartBarIcon,
      title: 'Cost Optimization',
      description: 'Intelligent cost analysis and optimization to reduce cloud spending by up to 40%.',
      benefits: ['Cost reduction', 'Resource optimization', 'Budget management']
    },
    {
      icon: ClockIcon,
      title: '24/7 Support',
      description: 'Round-the-clock support during and after migration to ensure smooth operations.',
      benefits: ['24/7 availability', 'Expert support', 'Rapid response']
    },
    {
      icon: CogIcon,
      title: 'Automated Processes',
      description: 'Automated migration tools and processes to ensure consistency and reduce errors.',
      benefits: ['Process automation', 'Error reduction', 'Consistent results']
    }
  ];

  const pricingTiers = [
    {
      name: 'Assessment',
      price: '$2,999',
      period: 'one-time',
      description: 'Perfect for evaluation',
      features: [
        'Cloud readiness assessment',
        'Migration strategy planning',
        'Cost analysis report',
        'Security evaluation',
        'Timeline estimation'
      ],
      popular: false
    },
    {
      name: 'Standard Migration',
      price: '$9,999',
      period: 'one-time',
      description: 'Ideal for small to medium businesses',
      features: [
        'Complete migration service',
        'Data transfer and setup',
        'Security configuration',
        'Performance optimization',
        '30 days support',
        'Training sessions',
        'Documentation'
      ],
      popular: true
    },
    {
      name: 'Enterprise Migration',
      price: 'Custom',
      period: 'quote',
      description: 'For large organizations',
      features: [
        'Everything in Standard',
        'Custom migration strategy',
        'Dedicated migration team',
        'Advanced security setup',
        '90 days support',
        'Custom integrations',
        'Ongoing optimization'
      ],
      popular: false
    }
  ];

  const testimonials = [
    {
      name: 'Jennifer Lee',
      role: 'CTO',
      company: 'TechFlow Solutions',
      content: 'Cloud Migration reduced our infrastructure costs by 45% while improving performance significantly.',
      rating: 5
    },
    {
      name: 'Michael Chen',
      role: 'IT Director',
      company: 'Global Dynamics',
      content: 'The migration was seamless with zero downtime. Our team was impressed with the professionalism.',
      rating: 5
    },
    {
      name: 'Sarah Williams',
      role: 'Operations Manager',
      company: 'InnovateCorp',
      content: 'The cost optimization features helped us save thousands monthly. ROI was achieved in just 3 months.',
      rating: 5
    }
  ];

  return (
    <>
      <SEOHead 
        title="Cloud Migration - Seamless Cloud Transition | Zion Tech Group"
        description="Migrate to the cloud seamlessly with our Cloud Migration service. Features zero downtime migration, multi-cloud support, security-first approach, and cost optimization. Get your free assessment today."
        keywords="cloud migration, AWS migration, Azure migration, Google Cloud migration, cloud transition, infrastructure migration, cloud consulting"
      />
      
      <div className="min-h-screen bg-slate-900 text-white">
        {/* Hero Section */}
        <section className="relative overflow-hidden py-20 lg:py-32">
          <div className="absolute inset-0 bg-gradient-to-br from-blue-900/30 via-slate-900 to-cyan-900/30"></div>
          <div className="absolute inset-0 opacity-30" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%2300f5ff' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
          }}></div>
          
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-sm font-medium mb-6">
                <CloudIcon className="w-4 h-4 mr-2" />
                Seamless Cloud Transition
              </div>
              
              <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold mb-6">
                <span className="bg-gradient-to-r from-blue-400 via-cyan-400 to-purple-400 bg-clip-text text-transparent">
                  Cloud Migration
                </span>
              </h1>
              
              <p className="text-xl sm:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
                Migrate to the cloud seamlessly with zero downtime and maximum security. 
                Reduce infrastructure costs by 45% while improving performance and scalability.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
                <button className="bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg shadow-blue-500/25">
                  Get Free Assessment
                </button>
                <button className="border-2 border-blue-400 text-blue-300 hover:bg-blue-400 hover:text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300">
                  View Case Studies
                </button>
              </div>
              
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 max-w-4xl mx-auto">
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-400 mb-2">45%</div>
                  <div className="text-gray-300">Cost Reduction</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-400 mb-2">Zero</div>
                  <div className="text-gray-300">Downtime</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-400 mb-2">3x</div>
                  <div className="text-gray-300">Performance Boost</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-400 mb-2">24/7</div>
                  <div className="text-gray-300">Support</div>
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
                Comprehensive <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">Migration Services</span>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                End-to-end cloud migration solutions designed for businesses of all sizes.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <div key={index} className="group bg-slate-800/50 p-8 rounded-xl border border-slate-700 hover:border-blue-500 transition-all duration-300 hover:transform hover:scale-105 hover:shadow-xl hover:shadow-blue-500/20">
                  <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                    <feature.icon className="w-8 h-8 text-white" />
                  </div>
                  
                  <h3 className="text-xl font-bold text-white mb-4 group-hover:text-blue-300 transition-colors">
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
                Choose Your <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">Migration Plan</span>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Flexible pricing options designed to meet your migration needs and budget.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {pricingTiers.map((tier, index) => (
                <div key={index} className={`relative bg-slate-800/50 p-8 rounded-xl border transition-all duration-300 hover:transform hover:scale-105 ${
                  tier.popular 
                    ? 'border-blue-500 shadow-xl shadow-blue-500/20' 
                    : 'border-slate-700 hover:border-blue-500'
                }`}>
                  {tier.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <span className="bg-gradient-to-r from-blue-500 to-cyan-500 text-white px-4 py-2 rounded-full text-sm font-semibold">
                        Most Popular
                      </span>
                    </div>
                  )}
                  
                  <div className="text-center mb-8">
                    <h3 className="text-2xl font-bold text-white mb-2">{tier.name}</h3>
                    <p className="text-gray-400 mb-4">{tier.description}</p>
                    <div className="flex items-baseline justify-center">
                      <span className="text-4xl font-bold text-blue-400">{tier.price}</span>
                      <span className="text-gray-400 ml-1">/{tier.period}</span>
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
                      ? 'bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 text-white'
                      : 'border-2 border-blue-400 text-blue-300 hover:bg-blue-400 hover:text-white'
                  }`}>
                    {tier.popular ? 'Get Started' : tier.name === 'Enterprise Migration' ? 'Contact Sales' : 'Get Started'}
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
                What Our <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">Customers Say</span>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Join hundreds of businesses who have successfully migrated to the cloud with us.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                <div key={index} className="bg-slate-800/50 p-6 rounded-xl border border-slate-700 hover:border-blue-500 transition-all duration-300">
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
        <section className="py-20 bg-gradient-to-r from-blue-900/40 via-slate-900 to-cyan-900/40">
          <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
              Ready to Migrate to the Cloud?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Get your free cloud readiness assessment today. No commitment required.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg shadow-blue-500/25">
                Get Free Assessment
              </button>
              <button className="border-2 border-white text-white hover:bg-white hover:text-slate-900 px-8 py-4 rounded-lg font-semibold transition-all duration-300">
                Contact Migration Expert
              </button>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default CloudMigrationPage;