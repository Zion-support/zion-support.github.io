'use client';
import React from 'react';
import SEOHead from '../components/SEOHead';
import { 
  CloudIcon, 
  ArrowUpIcon, 
  ShieldCheckIcon, 
  CheckCircleIcon,
  ArrowRightIcon,
  ClockIcon,
  CpuChipIcon,
  DocumentTextIcon,
  SparklesIcon,
  BoltIcon,
  CogIcon,
  ServerIcon
} from '@heroicons/react/24/outline';

const CloudMigrationPage: React.FC = () => {
  const features = [
    {
      icon: CloudIcon,
      title: 'Multi-Cloud Strategy',
      description: 'Comprehensive cloud migration strategy across AWS, Azure, and Google Cloud.',
      price: '$299/mo'
    },
    {
      icon: ArrowUpIcon,
      title: 'Zero-Downtime Migration',
      description: 'Seamless migration with zero business disruption and minimal downtime.',
      price: '$499/mo'
    },
    {
      icon: ShieldCheckIcon,
      title: 'Security Assessment',
      description: 'Complete security audit and compliance validation during migration.',
      price: '$399/mo'
    },
    {
      icon: CpuChipIcon,
      title: 'Performance Optimization',
      description: 'Optimize applications for cloud-native performance and scalability.',
      price: '$349/mo'
    },
    {
      icon: DocumentTextIcon,
      title: 'Migration Planning',
      description: 'Detailed migration roadmap with risk assessment and timeline.',
      price: '$199/mo'
    },
    {
      icon: ServerIcon,
      title: 'Infrastructure as Code',
      description: 'Automated infrastructure provisioning using IaC best practices.',
      price: '$249/mo'
    }
  ];

  const pricingPlans = [
    {
      name: 'Assessment',
      price: '$2,999',
      period: 'one-time',
      description: 'Perfect for small to medium businesses',
      features: [
        'Cloud Readiness Assessment',
        'Migration Strategy Planning',
        'Cost Analysis & Optimization',
        'Security Review',
        'Timeline & Roadmap',
        'Risk Assessment'
      ],
      popular: false
    },
    {
      name: 'Migration',
      price: '$9,999',
      period: 'one-time',
      description: 'Ideal for medium to large enterprises',
      features: [
        'Everything in Assessment',
        'Complete Migration Execution',
        'Zero-Downtime Migration',
        'Performance Optimization',
        'Security Implementation',
        'Post-Migration Support (30 days)',
        'Training & Documentation',
        'Monitoring Setup'
      ],
      popular: true
    },
    {
      name: 'Enterprise',
      price: 'Custom',
      period: 'quote',
      description: 'For large organizations with complex needs',
      features: [
        'Everything in Migration',
        'Multi-Cloud Strategy',
        'Custom Integration Development',
        'Dedicated Migration Team',
        'Extended Support (90 days)',
        'Custom Training Programs',
        'Ongoing Optimization',
        '24/7 Support'
      ],
      popular: false
    }
  ];

  const benefits = [
    'Reduce infrastructure costs by 40%',
    'Improve scalability and performance',
    'Enhance security and compliance',
    'Enable remote work capabilities',
    'Reduce maintenance overhead',
    'Future-proof your technology stack'
  ];

  return (
    <>
      <SEOHead 
        title="Cloud Migration Services - Zion Tech Group"
        description="Professional cloud migration services with zero-downtime migration, security assessment, and performance optimization. Migrate to AWS, Azure, or Google Cloud!"
        keywords="cloud migration, AWS migration, Azure migration, Google Cloud migration, cloud services, infrastructure migration"
      />
      
      <div className="min-h-screen bg-slate-900 text-white">
        {/* Hero Section */}
        <section className="relative overflow-hidden py-20 lg:py-32">
          <div className="absolute inset-0 bg-gradient-to-br from-blue-900/30 via-slate-900 to-cyan-900/30"></div>
          <div className="absolute inset-0 opacity-30" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%239C92AC' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
          }}></div>
          
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <div className="inline-flex items-center bg-blue-500/10 rounded-full px-4 py-2 mb-6">
                <CloudIcon className="w-5 h-5 text-blue-400 mr-2" />
                <span className="text-blue-300 text-sm font-medium">Cloud Migration Services</span>
              </div>
              
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
                <span className="bg-gradient-to-r from-blue-400 via-cyan-400 to-purple-400 bg-clip-text text-transparent">
                  Cloud Migration Services
                </span>
              </h1>
              
              <p className="text-lg sm:text-xl text-gray-300 mb-8 max-w-4xl mx-auto">
                Seamlessly migrate your infrastructure to the cloud with our expert migration services. 
                Zero-downtime migration, security assessment, and performance optimization included.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
                <button className="bg-gradient-to-r from-blue-600 to-cyan-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-blue-700 hover:to-cyan-700 transition-all duration-300 transform hover:scale-105 shadow-lg shadow-blue-500/25">
                  Get Free Assessment
                </button>
                <button className="border-2 border-blue-400 text-blue-300 px-8 py-4 rounded-lg font-semibold hover:bg-blue-400 hover:text-white transition-all duration-300">
                  View Case Studies
                </button>
              </div>
              
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 max-w-4xl mx-auto">
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-400 mb-2">40%</div>
                  <div className="text-gray-300 text-sm">Cost Reduction</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-400 mb-2">Zero</div>
                  <div className="text-gray-300 text-sm">Downtime</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-400 mb-2">100+</div>
                  <div className="text-gray-300 text-sm">Successful Migrations</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-400 mb-2">24/7</div>
                  <div className="text-gray-300 text-sm">Support</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-20 bg-slate-800/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
                Why Choose <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">Our Migration Services</span>?
              </h2>
              <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto">
                Transform your infrastructure with our proven cloud migration expertise.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-start space-x-4 p-6 bg-slate-800/50 rounded-lg hover:bg-slate-700/50 transition-all duration-300 group">
                  <CheckCircleIcon className="w-6 h-6 text-blue-400 flex-shrink-0 mt-1 group-hover:scale-110 transition-transform" />
                  <span className="text-gray-300 group-hover:text-white transition-colors">{benefit}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
                Our <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">Migration Services</span>
              </h2>
              <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto">
                Comprehensive cloud migration solutions tailored to your business needs.
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
                  <p className="text-gray-400 mb-4 group-hover:text-gray-300 transition-colors">
                    {feature.description}
                  </p>
                  <div className="text-2xl font-bold text-blue-400">
                    {feature.price}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section className="py-20 bg-slate-800/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
                Choose Your <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">Migration Plan</span>
              </h2>
              <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto">
                Flexible pricing plans designed to meet your migration requirements.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {pricingPlans.map((plan, index) => (
                <div key={index} className={`relative bg-slate-800/50 p-8 rounded-xl border transition-all duration-300 hover:transform hover:scale-105 hover:shadow-xl ${
                  plan.popular 
                    ? 'border-blue-500 shadow-blue-500/20' 
                    : 'border-slate-700 hover:border-blue-500'
                }`}>
                  {plan.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <span className="bg-gradient-to-r from-blue-600 to-cyan-600 text-white px-4 py-2 rounded-full text-sm font-semibold">
                        Most Popular
                      </span>
                    </div>
                  )}
                  
                  <div className="text-center mb-8">
                    <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                    <p className="text-gray-400 mb-4">{plan.description}</p>
                    <div className="flex items-baseline justify-center">
                      <span className="text-5xl font-bold text-blue-400">{plan.price}</span>
                      <span className="text-gray-400 ml-2">{plan.period}</span>
                    </div>
                  </div>
                  
                  <ul className="space-y-4 mb-8">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center">
                        <CheckCircleIcon className="w-5 h-5 text-blue-400 mr-3 flex-shrink-0" />
                        <span className="text-gray-300">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <button className={`w-full py-3 px-6 rounded-lg font-semibold transition-all duration-300 ${
                    plan.popular
                      ? 'bg-gradient-to-r from-blue-600 to-cyan-600 text-white hover:from-blue-700 hover:to-cyan-700'
                      : 'border-2 border-blue-400 text-blue-300 hover:bg-blue-400 hover:text-white'
                  }`}>
                    {plan.popular ? 'Get Started' : 'Contact Sales'}
                  </button>
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
            <p className="text-lg sm:text-xl text-gray-300 mb-8">
              Join hundreds of businesses already using our cloud migration services to modernize their infrastructure.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-blue-600 to-cyan-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-blue-700 hover:to-cyan-700 transition-all duration-300 transform hover:scale-105">
                Get Free Assessment
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

export default CloudMigrationPage;