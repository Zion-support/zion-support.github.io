import React from 'react';
import SEOHead from '../components/SEOHead';
import { 
  CloudIcon, 
  ServerIcon, 
  CpuChipIcon, 
  ShieldCheckIcon,
  CheckCircleIcon,
  ArrowRightIcon,
  SparklesIcon,
  ChartBarIcon,
  ClockIcon,
  UserGroupIcon,
  DocumentTextIcon,
  CogIcon
} from '@heroicons/react/24/outline';

const CloudSolutionsPage: React.FC = () => {
  const services = [
    {
      icon: CloudIcon,
      title: 'Cloud Migration',
      description: 'Seamless migration of your applications and data to the cloud with zero downtime.',
      features: ['Zero Downtime Migration', 'Data Security', 'Performance Optimization', 'Cost Reduction'],
      pricing: 'Starting at $2,999/mo',
      popular: true
    },
    {
      icon: ServerIcon,
      title: 'Cloud Infrastructure',
      description: 'Scalable and secure cloud infrastructure designed for your business needs.',
      features: ['Auto-scaling', 'Load Balancing', 'High Availability', 'Disaster Recovery'],
      pricing: 'Starting at $1,999/mo',
      popular: false
    },
    {
      icon: ShieldCheckIcon,
      title: 'Cloud Security',
      description: 'Comprehensive security solutions to protect your cloud environment.',
      features: ['Identity Management', 'Data Encryption', 'Access Controls', 'Compliance'],
      pricing: 'Starting at $1,499/mo',
      popular: false
    },
    {
      icon: CpuChipIcon,
      title: 'Cloud Optimization',
      description: 'Optimize your cloud resources for maximum performance and cost efficiency.',
      features: ['Cost Analysis', 'Performance Tuning', 'Resource Right-sizing', 'Monitoring'],
      pricing: 'Starting at $999/mo',
      popular: false
    },
    {
      icon: ChartBarIcon,
      title: 'Cloud Analytics',
      description: 'Advanced analytics and monitoring for your cloud infrastructure.',
      features: ['Real-time Monitoring', 'Predictive Analytics', 'Custom Dashboards', 'Alerting'],
      pricing: 'Starting at $1,299/mo',
      popular: false
    },
    {
      icon: CogIcon,
      title: 'Cloud DevOps',
      description: 'DevOps solutions for continuous integration and deployment in the cloud.',
      features: ['CI/CD Pipelines', 'Container Orchestration', 'Infrastructure as Code', 'Automation'],
      pricing: 'Starting at $2,499/mo',
      popular: false
    }
  ];

  const platforms = [
    {
      name: 'Amazon Web Services (AWS)',
      description: 'Comprehensive cloud platform with global reach',
      features: ['EC2, S3, Lambda', 'Global Infrastructure', 'AI/ML Services', 'Enterprise Support']
    },
    {
      name: 'Microsoft Azure',
      description: 'Hybrid cloud platform with enterprise integration',
      features: ['Virtual Machines', 'Azure Active Directory', 'Office 365 Integration', 'Hybrid Cloud']
    },
    {
      name: 'Google Cloud Platform (GCP)',
      description: 'Data and AI-focused cloud platform',
      features: ['BigQuery', 'AI/ML APIs', 'Kubernetes Engine', 'Data Analytics']
    }
  ];

  const benefits = [
    {
      icon: ClockIcon,
      title: 'Faster Deployment',
      description: 'Deploy applications and services in minutes instead of weeks'
    },
    {
      icon: ChartBarIcon,
      title: 'Scalability',
      description: 'Scale resources up or down based on demand automatically'
    },
    {
      icon: ShieldCheckIcon,
      title: 'Security',
      description: 'Enterprise-grade security with built-in compliance features'
    },
    {
      icon: CogIcon,
      title: 'Cost Efficiency',
      description: 'Pay only for what you use with flexible pricing models'
    }
  ];

  const stats = [
    { number: '99.9%', label: 'Uptime Guarantee' },
    { number: '24/7', label: 'Monitoring' },
    { number: '50+', label: 'Cloud Services' },
    { number: '100+', label: 'Successful Migrations' },
    { number: '40%', label: 'Average Cost Savings' },
    { number: '15min', label: 'Average Response Time' }
  ];

  return (
    <>
      <SEOHead
        title="Cloud Solutions - Scalable Cloud Infrastructure | Zion Tech Group"
        description="Comprehensive cloud solutions including migration, infrastructure, security, and optimization. AWS, Azure, and GCP expertise with 99.9% uptime guarantee."
        keywords="cloud solutions, cloud migration, AWS, Azure, GCP, cloud infrastructure, cloud security, DevOps, scalability"
        canonicalUrl="https://ziontechgroup.com/cloud-solutions"
      />
      
      <div className="min-h-screen bg-slate-900 text-white">
        {/* Hero Section */}
        <section className="relative overflow-hidden py-20 lg:py-32">
          <div className="absolute inset-0 bg-gradient-to-br from-blue-900/30 via-slate-900 to-cyan-900/30"></div>
          <div className="absolute inset-0 cyber-grid opacity-20"></div>
          
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 mb-6">
                <CloudIcon className="w-5 h-5 text-blue-400 mr-2" />
                <span className="text-blue-300 text-sm font-medium">Scalable Cloud Solutions</span>
              </div>
              
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
                <span className="bg-gradient-to-r from-blue-400 via-cyan-400 to-teal-400 bg-clip-text text-transparent holographic">
                  Cloud Solutions
                </span>
              </h1>
              
              <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
                Transform your business with scalable cloud infrastructure. Expert migration, optimization, 
                and management services for AWS, Azure, and Google Cloud Platform.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
                <button className="bg-gradient-to-r from-blue-600 to-cyan-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-blue-700 hover:to-cyan-700 transition-all duration-300 transform hover:scale-105 shadow-lg shadow-blue-500/25">
                  Get Cloud Assessment
                </button>
                <button className="border-2 border-blue-400 text-blue-300 px-8 py-4 rounded-lg font-semibold hover:bg-blue-400 hover:text-white transition-all duration-300">
                  View Case Studies
                </button>
              </div>
              
              <div className="grid grid-cols-2 lg:grid-cols-6 gap-6 max-w-4xl mx-auto">
                {stats.map((stat, index) => (
                  <div key={index} className="text-center">
                    <div className="text-3xl font-bold text-blue-400 mb-2 neon-text">{stat.number}</div>
                    <div className="text-gray-300 text-sm">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="py-20 bg-slate-800/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
                Our <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">Cloud Services</span>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Comprehensive cloud solutions designed to accelerate your digital transformation and drive business growth.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((service, index) => (
                <div key={index} className={`group holographic-card p-8 hover:scale-105 transition-all duration-300 hover:shadow-xl ${
                  service.popular ? 'border-blue-500 shadow-blue-500/20' : 'border-slate-700 hover:border-blue-500 hover:shadow-blue-500/20'
                }`}>
                  {service.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <span className="bg-gradient-to-r from-blue-500 to-cyan-500 text-white px-4 py-2 rounded-full text-sm font-semibold">
                        Most Popular
                      </span>
                    </div>
                  )}
                  
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform neon-border-animated">
                      <service.icon className="w-8 h-8 text-white" />
                    </div>
                    <span className="text-sm text-blue-400 font-medium neon-text">{service.pricing}</span>
                  </div>
                  
                  <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-blue-300 transition-colors">
                    {service.title}
                  </h3>
                  
                  <p className="text-gray-400 mb-6">
                    {service.description}
                  </p>
                  
                  <ul className="space-y-3 mb-8">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-gray-300">
                        <CheckCircleIcon className="w-5 h-5 text-green-400 mr-3" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <button className="w-full cyber-button py-3 rounded-lg font-semibold transition-all duration-300 hover:scale-105">
                    Learn More
                  </button>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Cloud Platforms Section */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
                <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">Cloud Platforms</span> We Support
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                We work with all major cloud providers to deliver the best solution for your business needs.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {platforms.map((platform, index) => (
                <div key={index} className="bg-slate-800/50 p-8 rounded-xl border border-slate-700 hover:border-blue-500 transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-blue-500/20">
                  <h3 className="text-2xl font-bold text-white mb-4">{platform.name}</h3>
                  <p className="text-gray-400 mb-6">{platform.description}</p>
                  
                  <ul className="space-y-3">
                    {platform.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-gray-300">
                        <CheckCircleIcon className="w-5 h-5 text-blue-400 mr-3" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-20 bg-slate-800/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
                Why Choose <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">Cloud Solutions</span>?
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Discover the benefits of moving your business to the cloud.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {benefits.map((benefit, index) => (
                <div key={index} className="text-center group">
                  <div className="w-20 h-20 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform neon-border-animated">
                    <benefit.icon className="w-10 h-10 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-blue-300 transition-colors">
                    {benefit.title}
                  </h3>
                  <p className="text-gray-400">
                    {benefit.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Migration Process Section */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
                Our <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">Migration Process</span>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                A proven methodology for successful cloud migration with minimal disruption.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              {[
                {
                  step: '01',
                  title: 'Assessment',
                  description: 'Evaluate current infrastructure and identify migration requirements',
                  icon: DocumentTextIcon
                },
                {
                  step: '02',
                  title: 'Planning',
                  description: 'Create detailed migration strategy and timeline',
                  icon: ChartBarIcon
                },
                {
                  step: '03',
                  title: 'Migration',
                  description: 'Execute migration with zero downtime and data integrity',
                  icon: CloudIcon
                },
                {
                  step: '04',
                  title: 'Optimization',
                  description: 'Fine-tune performance and optimize costs',
                  icon: CogIcon
                }
              ].map((step, index) => (
                <div key={index} className="text-center group">
                  <div className="relative mb-6">
                    <div className="w-20 h-20 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full flex items-center justify-center mx-auto group-hover:scale-110 transition-transform neon-border-animated">
                      <step.icon className="w-10 h-10 text-white" />
                    </div>
                    <div className="absolute -top-2 -right-2 w-8 h-8 bg-cyan-500 rounded-full flex items-center justify-center text-white font-bold text-sm">
                      {step.step}
                    </div>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-blue-300 transition-colors">
                    {step.title}
                  </h3>
                  <p className="text-gray-400">
                    {step.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-blue-900/40 via-slate-900 to-cyan-900/40">
          <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
              Ready to Move to the Cloud?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Let's discuss how our cloud solutions can transform your business infrastructure.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-blue-600 to-cyan-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-blue-700 hover:to-cyan-700 transition-all duration-300 transform hover:scale-105 shadow-lg shadow-blue-500/25">
                Get Cloud Assessment
              </button>
              <button className="border-2 border-white text-white hover:bg-white hover:text-slate-900 px-8 py-4 rounded-lg font-semibold transition-all duration-300">
                Contact Cloud Team
              </button>
            </div>
            <div className="mt-8 text-sm text-gray-400">
              <p>📞 <strong>Phone:</strong> +1 302 464 0950</p>
              <p>✉️ <strong>Email:</strong> kleber@ziontechgroup.com</p>
              <p>📍 <strong>Address:</strong> 364 E Main St STE 1008, Middletown DE 19709</p>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default CloudSolutionsPage;