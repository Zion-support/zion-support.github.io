'use client';
import React from 'react';
import { CheckCircle, Zap, Shield, Clock } from 'lucide-react';

const AICloudInfrastructurePage: React.FC = () => {
  const cloudServices = [
    {
      title: 'AI-Powered Cloud Migration',
      description: 'Intelligent cloud migration service that analyzes your infrastructure and automates the migration process with zero downtime.',
      icon: '☁️',
      price: '$2,999/month',
      features: [
        'Automated infrastructure analysis',
        'Zero-downtime migration',
        'Cost optimization recommendations',
        'Security compliance',
        'Performance monitoring',
        'Disaster recovery setup',
        '24/7 support',
        'Migration rollback capability'
      ],
      benefits: [
        'Reduce migration time by 70%',
        'Lower cloud costs by 40%',
        'Ensure 99.9% uptime',
        'Eliminate migration risks'
      ],
      marketPrice: '$5,000-10,000/month',
      category: 'Cloud Migration',
      technologies: ['AWS', 'Azure', 'GCP', 'Terraform', 'Kubernetes', 'Docker'],
      compliance: ['SOC 2', 'ISO 27001', 'HIPAA', 'PCI DSS']
    },
    {
      title: 'AI Cloud Cost Optimization',
      description: 'Intelligent cloud cost management platform that continuously monitors and optimizes your cloud spending using AI algorithms.',
      icon: '💰',
      price: '$899/month',
      features: [
        'Real-time cost monitoring',
        'Automated resource scaling',
        'Waste detection and elimination',
        'Reserved instance optimization',
        'Cost forecasting',
        'Budget alerts',
        'Multi-cloud support',
        'ROI tracking'
      ],
      benefits: [
        'Reduce cloud costs by 35%',
        'Eliminate waste spending',
        'Improve resource utilization',
        'Predict future costs'
      ],
      marketPrice: '$1,500-3,000/month',
      category: 'Cost Optimization',
      technologies: ['AWS Cost Explorer', 'Azure Cost Management', 'Python', 'Machine Learning', 'APIs'],
      compliance: ['SOC 2', 'ISO 27001']
    },
    {
      title: 'AI DevOps Automation Platform',
      description: 'Comprehensive DevOps automation with AI-powered CI/CD pipelines, infrastructure as code, and automated testing.',
      icon: '🔄',
      price: '$1,499/month',
      features: [
        'AI-powered CI/CD pipelines',
        'Infrastructure as Code',
        'Automated testing',
        'Security scanning',
        'Performance monitoring',
        'Auto-scaling',
        'Blue-green deployments',
        'Rollback automation'
      ],
      benefits: [
        'Deploy 10x faster',
        'Reduce deployment failures by 90%',
        'Improve code quality',
        'Scale automatically'
      ],
      marketPrice: '$2,500-5,000/month',
      category: 'DevOps',
      technologies: ['Jenkins', 'GitLab CI', 'Docker', 'Kubernetes', 'Terraform', 'Ansible'],
      compliance: ['SOC 2', 'ISO 27001', 'PCI DSS']
    },
    {
      title: 'AI Cloud Security Management',
      description: 'Advanced cloud security platform with AI-powered threat detection, compliance monitoring, and automated security responses.',
      icon: '🔒',
      price: '$1,799/month',
      features: [
        'AI threat detection',
        'Compliance monitoring',
        'Security posture management',
        'Vulnerability scanning',
        'Access control automation',
        'Incident response',
        'Security reporting',
        'Multi-cloud security'
      ],
      benefits: [
        'Prevent 99% of security breaches',
        'Ensure compliance automatically',
        'Reduce security costs by 50%',
        'Improve security posture'
      ],
      marketPrice: '$3,000-6,000/month',
      category: 'Cloud Security',
      technologies: ['AWS Security', 'Azure Security', 'GCP Security', 'SIEM', 'Machine Learning'],
      compliance: ['SOC 2', 'ISO 27001', 'HIPAA', 'PCI DSS', 'FedRAMP']
    },
    {
      title: 'AI Cloud Monitoring & Analytics',
      description: 'Intelligent cloud monitoring platform with predictive analytics, anomaly detection, and automated alerting.',
      icon: '📊',
      price: '$1,299/month',
      features: [
        'Real-time monitoring',
        'Predictive analytics',
        'Anomaly detection',
        'Automated alerting',
        'Performance optimization',
        'Capacity planning',
        'Custom dashboards',
        'Historical analysis'
      ],
      benefits: [
        'Prevent outages proactively',
        'Optimize performance',
        'Reduce monitoring costs',
        'Improve reliability'
      ],
      marketPrice: '$2,000-4,000/month',
      category: 'Monitoring',
      technologies: ['Prometheus', 'Grafana', 'ELK Stack', 'Machine Learning', 'Python', 'APIs'],
      compliance: ['SOC 2', 'ISO 27001']
    },
    {
      title: 'AI Multi-Cloud Management',
      description: 'Unified multi-cloud management platform with AI-powered workload optimization and cross-cloud orchestration.',
      icon: '🌐',
      price: '$2,499/month',
      features: [
        'Multi-cloud visibility',
        'Workload optimization',
        'Cross-cloud orchestration',
        'Cost optimization',
        'Security management',
        'Compliance monitoring',
        'Disaster recovery',
        'Vendor management'
      ],
      benefits: [
        'Optimize across all clouds',
        'Reduce vendor lock-in',
        'Improve resilience',
        'Lower total cost of ownership'
      ],
      marketPrice: '$4,000-8,000/month',
      category: 'Multi-Cloud',
      technologies: ['Kubernetes', 'Terraform', 'Ansible', 'Python', 'Machine Learning', 'APIs'],
      compliance: ['SOC 2', 'ISO 27001', 'HIPAA', 'PCI DSS']
    }
  ];

  const benefits = [
    'Reduce infrastructure costs by 40%',
    'Improve performance by 60%',
    'Increase reliability by 95%',
    'Lower operational overhead by 50%',
    'Enable global scalability',
    'Automate infrastructure management',
    'Enhance security and compliance',
    'Optimize resource utilization'
  ];

  const useCases = [
    {
      title: 'Enterprise Migration',
      description: 'Migrate enterprise applications to cloud with AI-powered optimization',
      icon: '🏢'
    },
    {
      title: 'E-commerce Platforms',
      description: 'Scale e-commerce platforms with intelligent cloud infrastructure',
      icon: '🛒'
    },
    {
      title: 'Data Analytics',
      description: 'Build scalable data analytics platforms in the cloud',
      icon: '📊'
    },
    {
      title: 'IoT Applications',
      description: 'Support IoT applications with edge computing and cloud infrastructure',
      icon: '📡'
    },
    {
      title: 'Mobile Apps',
      description: 'Power mobile applications with scalable cloud backend services',
      icon: '📱'
    },
    {
      title: 'AI/ML Workloads',
      description: 'Run AI and machine learning workloads on optimized cloud infrastructure',
      icon: '🤖'
    }
  ];

  const cloudProviders = [
    { name: 'Amazon Web Services', logo: 'AWS' },
    { name: 'Microsoft Azure', logo: 'Azure' },
    { name: 'Google Cloud Platform', logo: 'GCP' },
    { name: 'IBM Cloud', logo: 'IBM' },
    { name: 'Oracle Cloud', logo: 'Oracle' },
    { name: 'Alibaba Cloud', logo: 'Alibaba' }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-r from-blue-600 to-indigo-700 text-white py-20">
        <div className="absolute inset-0 bg-black opacity-20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              AI Cloud Infrastructure
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
              Advanced AI-powered ai cloud infrastructure solution for modern businesses.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-pink-500 to-blue-600 hover:from-pink-600 hover:to-blue-700 text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105">
                Get Started
              </button>
              <button className="border border-pink-400 text-pink-400 hover:bg-pink-400 hover:text-white font-bold py-4 px-8 rounded-lg transition-all duration-300">
                View Demo
              </button>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 px-4">
        </section>
                <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300">
                  <div className="inline-flex items-center justify-center w-12 h-12 bg-gradient-to-r from-sky-500 to-blue-500 rounded-lg mb-4">
                    <feature.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
                  <p className="text-gray-300 mb-4">{feature.description}</p>
                  <ul className="space-y-2">
                    {feature.benefits.map((benefit, benefitIndex) => (
                      <li key={benefitIndex} className="flex items-center text-sm text-gray-300">
                        <CheckCircle className="w-4 h-4 text-sky-400 mr-2 flex-shrink-0" />
                        {benefit}
                      </li>
                    ))}
                  </ul>
                  <h3 className="text-xl font-bold text-white mb-4">{feature.title}</h3>
                  <p className="text-gray-300 mb-4">{feature.description}</p>
                  {feature.benefits && (
                    <ul className="space-y-2">
                      {feature.benefits.map((benefit, idx) => (
                        <li key={idx} className="flex items-center text-sm text-gray-400">
                          <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                          {benefit}
                        </li>
                      ))}
                    </ul>
                  </div>
        </section>

        {/* Use Cases Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white/5">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Applications & Use Cases
              </h2>
              <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                From startups to enterprises, our AI Cloud Infrastructure serves diverse needs
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {useCases.map((useCase, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 text-center">
                  <div className="text-4xl mb-4">{useCase.icon}</div>
                  <h3 className="text-xl font-semibold text-white mb-3">{useCase.title}</h3>
                  <p className="text-gray-300">{useCase.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Why Choose Our AI Cloud Infrastructure?
              </h2>
              <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                Experience the future of cloud computing with our revolutionary AI technology
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {benefits.map((benefit, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 text-center">
                  <div className="inline-flex items-center justify-center w-12 h-12 bg-gradient-to-r from-sky-500 to-blue-500 rounded-lg mb-4">
                    <CheckCircle className="w-6 h-6 text-white" />
                  </div>
                  <p className="text-white font-medium">{benefit}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">

        {/* Benefits Section */}
        <section className="py-20 px-4">
        </section>
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Why Choose Our Solution?
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Proven results that drive business growth and efficiency
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {benefits.map((benefit, index) => (
                <div key={index} className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 hover:bg-white/10 transition-all duration-300 group">
                  <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-blue-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                    <CheckCircle className="w-8 h-8 text-white" />
                  </div>
                  <p className="text-lg text-white font-medium">{benefit}</p>
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
                <p className="text-gray-300 mb-4">{feature.description}</p>
                <ul className="space-y-2">
                  {feature.benefits.map((benefit, benefitIndex) => (
                    <li key={benefitIndex} className="flex items-center text-sm text-gray-400">
                      <CheckCircle className="w-4 h-4 text-blue-400 mr-2 flex-shrink-0" />
                      {benefit}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

{/* CTA Section */}
        <section className="py-20 px-4">
        </section>
          <div className="max-w-4xl mx-auto text-center">
            <div className="bg-white/5 backdrop-blur-sm rounded-3xl p-12">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Ready to Get Started?
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Contact our experts to discuss your requirements and get started today.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-gradient-to-r from-pink-500 to-blue-600 hover:from-pink-600 hover:to-blue-700 text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105">
                  Contact Us
                </button>
                <button className="border border-pink-400 text-pink-400 hover:bg-pink-400 hover:text-white font-bold py-4 px-8 rounded-lg transition-all duration-300">
                  Learn More
                </button>
              ))
            </div>
          </div>
        </section>
      </div>
