'use client';
import React from 'react';
import SEOHead from '../components/SEOHead';
import { 
  CloudIcon, 
  ServerIcon,
  CheckCircleIcon,
  ArrowRightIcon,
  StarIcon,
  CurrencyDollarIcon,
  ClockIcon,
  SparklesIcon,
  CpuChipIcon,
  EyeIcon,
  CodeBracketIcon,
  DevicePhoneMobileIcon,
  CircleStackIcon,
  SignalIcon,
  RocketLaunchIcon,
  ChartBarIcon
} from '@heroicons/react/24/outline';

const CloudSolutionsPage: React.FC = () => {
  const services = [
    {
      icon: CloudIcon,
      title: 'Cloud Migration',
      description: 'Seamless migration to AWS, Azure, or Google Cloud with zero downtime and minimal disruption.',
      features: ['Zero-downtime migration', 'Data integrity assurance', 'Performance optimization', 'Cost reduction'],
      pricing: 'Starting at $5,999/migration',
      popular: true
    },
    {
      icon: ServerIcon,
      title: 'Cloud Infrastructure',
      description: 'Scalable and secure cloud infrastructure designed for high availability and performance.',
      features: ['Auto-scaling', 'Load balancing', 'Disaster recovery', '24/7 monitoring'],
      pricing: 'Starting at $2,999/mo',
      popular: false
    },
    {
      icon: CpuChipIcon,
      title: 'Cloud Security',
      description: 'Comprehensive security solutions for cloud environments including compliance and monitoring.',
      features: ['Identity management', 'Data encryption', 'Compliance audits', 'Threat detection'],
      pricing: 'Starting at $1,999/mo',
      popular: false
    },
    {
      icon: ChartBarIcon,
      title: 'Cloud Analytics',
      description: 'Advanced analytics and monitoring solutions to optimize cloud performance and costs.',
      features: ['Performance monitoring', 'Cost optimization', 'Usage analytics', 'Predictive scaling'],
      pricing: 'Starting at $999/mo',
      popular: false
    }
  ];

  const platforms = [
    { name: 'Amazon Web Services', description: 'Comprehensive AWS solutions and optimization', icon: '☁️', color: 'orange' },
    { name: 'Microsoft Azure', description: 'Enterprise-grade Azure cloud services', icon: '🔷', color: 'blue' },
    { name: 'Google Cloud Platform', description: 'Advanced GCP solutions and AI integration', icon: '🌐', color: 'green' },
    { name: 'Multi-Cloud', description: 'Hybrid and multi-cloud strategies', icon: '🔀', color: 'purple' }
  ];

  const benefits = [
    { title: 'Cost Reduction', description: 'Reduce infrastructure costs by up to 40%', icon: '💰' },
    { title: 'Scalability', description: 'Scale resources based on demand', icon: '📈' },
    { title: 'Reliability', description: '99.9% uptime guarantee', icon: '⚡' },
    { title: 'Security', description: 'Enterprise-grade security and compliance', icon: '🔒' },
    { title: 'Performance', description: 'Optimized performance and speed', icon: '🚀' },
    { title: 'Support', description: '24/7 expert support and monitoring', icon: '🛠️' }
  ];

  const stats = [
    { number: '99.9%', label: 'Uptime Guarantee' },
    { number: '40%', label: 'Cost Reduction' },
    { number: '24/7', label: 'Monitoring' },
    { number: '3x', label: 'Performance Boost' },
    { number: '100+', label: 'Cloud Projects' },
    { number: '50+', label: 'Certified Experts' }
  ];

  return (
    <>
      <SEOHead 
        title="Cloud Solutions - AWS, Azure, GCP Services | Zion Tech Group"
        description="Comprehensive cloud solutions including migration, infrastructure, security, and analytics. Expert AWS, Azure, and Google Cloud services with 99.9% uptime guarantee."
        keywords="cloud solutions, AWS, Azure, Google Cloud, cloud migration, cloud infrastructure, cloud security, cloud consulting"
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
                <span className="text-blue-300 text-sm font-medium">Cloud Solutions</span>
              </div>
              
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
                <span className="bg-gradient-to-r from-blue-400 via-cyan-400 to-teal-400 bg-clip-text text-transparent holographic">
                  Cloud Solutions
                </span>
              </h1>
              
              <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
                Transform your business with comprehensive cloud solutions. AWS, Azure, and Google Cloud expertise with 99.9% uptime guarantee and 24/7 support.
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
                End-to-end cloud solutions designed to accelerate your digital transformation and drive business growth.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
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

        {/* Platforms Section */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
                <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">Cloud Platforms</span>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                We work with all major cloud platforms to provide the best solution for your needs.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {platforms.map((platform, index) => (
                <div key={index} className="group bg-slate-800/50 p-6 rounded-lg border border-slate-700 hover:border-blue-500 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-blue-500/20">
                  <div className="text-center">
                    <div className="text-4xl mb-4">{platform.icon}</div>
                    <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-blue-300 transition-colors">
                      {platform.name}
                    </h3>
                    <p className="text-gray-400 text-sm">
                      {platform.description}
                    </p>
                  </div>
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
                Why Choose Our <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">Cloud Solutions</span>?
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Experience the benefits of cloud transformation with our expert solutions.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {benefits.map((benefit, index) => (
                <div key={index} className="group bg-slate-800/50 p-6 rounded-lg border border-slate-700 hover:border-blue-500 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-blue-500/20">
                  <div className="text-center">
                    <div className="text-4xl mb-4">{benefit.icon}</div>
                    <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-blue-300 transition-colors">
                      {benefit.title}
                    </h3>
                    <p className="text-gray-400 text-sm">
                      {benefit.description}
                    </p>
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
              Ready to Move to the Cloud?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Let our cloud experts help you migrate and optimize your infrastructure for maximum performance and cost savings.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-blue-600 to-cyan-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-blue-700 hover:to-cyan-700 transition-all duration-300 transform hover:scale-105 shadow-lg shadow-blue-500/25">
                Get Cloud Assessment
              </button>
              <button className="border-2 border-white text-white hover:bg-white hover:text-slate-900 px-8 py-4 rounded-lg font-semibold transition-all duration-300">
                Contact Cloud Team
              </button>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default CloudSolutionsPage;