import React from 'react';
import Head from 'next/head';
import { CheckCircle } from 'lucide-react';

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

  const cloudFeatures = [
    {
      title: 'AI-Powered Optimization',
      description: 'Continuous optimization using machine learning algorithms',
      icon: <Zap className="w-8 h-8 text-blue-600" />
    },
    {
      title: 'Enterprise Security',
      description: 'Bank-level security with compliance automation',
      icon: <Shield className="w-8 h-8 text-red-600" />
    },
    {
      title: '24/7 Monitoring',
      description: 'Round-the-clock monitoring and support',
      icon: <Clock className="w-8 h-8 text-green-600" />
    },
    {
      title: 'Cost Transparency',
      description: 'Real-time cost tracking and optimization',
      icon: <TrendingUp className="w-8 h-8 text-purple-600" />
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
      <Head>
        <title>AI Cloud Infrastructure Services | Zion Tech Group</title>
        <meta name="description" content="Advanced AI-powered cloud infrastructure services including migration, optimization, security, and monitoring. Transform your cloud operations with intelligent automation." />
        <meta name="keywords" content="cloud infrastructure, cloud migration, cloud optimization, DevOps, cloud security, multi-cloud, AWS, Azure, GCP" />
      </Head>

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-r from-blue-600 to-indigo-700 text-white py-20">
        <div className="absolute inset-0 bg-black opacity-20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              AI Cloud Infrastructure
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-blue-100 max-w-3xl mx-auto">
              Transform your cloud operations with AI-powered infrastructure services that optimize costs, enhance security, and improve performance
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="tel:+13024640950"
                className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors inline-flex items-center"
              >
                📞 +1 302 464 0950
              </a>
              <a 
                href="mailto:kleber@ziontechgroup.com"
                className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors"
              >
                ✉️ Get Cloud Assessment
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Cloud Providers */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Multi-Cloud Expertise
            </h2>
            <p className="text-xl text-gray-600">
              We work with all major cloud providers to give you the best solution
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
            {cloudProviders.map((provider, index) => (
              <div key={index} className="text-center">
                <div className="bg-gray-100 rounded-lg p-6 h-24 flex items-center justify-center">
                  <span className="text-lg font-semibold text-gray-700">{provider.logo}</span>
                </div>
                <p className="mt-2 text-sm text-gray-600">{provider.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Cloud Services
            </h2>
            <p className="text-xl text-gray-600">
              Comprehensive AI-powered cloud infrastructure solutions
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {cloudServices.map((service, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow border border-gray-100">
                <div className="text-4xl mb-4">{service.icon}</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{service.title}</h3>
                <p className="text-gray-600 mb-4">{service.description}</p>
                
                <div className="mb-4">
                  <span className="text-2xl font-bold text-blue-600">{service.price}</span>
                  <span className="text-sm text-gray-500 ml-2">Market: {service.marketPrice}</span>
                </div>
                
                <div className="mb-4">
                  <span className="inline-block bg-blue-100 text-blue-800 text-xs font-semibold px-2 py-1 rounded">
                    {service.category}
                  </span>
                </div>
                
                <ul className="space-y-2 mb-6">
                  {service.features.slice(0, 4).map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm text-gray-600">
                      <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
                
                <div className="space-y-2 mb-6">
                  <h4 className="font-semibold text-gray-900">Key Benefits:</h4>
                  {service.benefits.slice(0, 2).map((benefit, benefitIndex) => (
                    <p key={benefitIndex} className="text-sm text-green-600">✓ {benefit}</p>
                  ))}
                </div>
                
                <a 
                  href="/contact"
                  className="w-full bg-blue-600 text-white py-2 px-4 rounded-lg font-semibold hover:bg-blue-700 transition-colors inline-flex items-center justify-center"
                >
                  Get Started
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why Choose Our Cloud Services?
            </h2>
            <p className="text-xl text-gray-600">
              AI-powered optimization with enterprise-grade security and reliability
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {cloudFeatures.map((feature, index) => (
              <div key={index} className="text-center">
                <div className="flex justify-center mb-4">
                  {feature.icon}
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Proven Results
            </h2>
            <p className="text-xl text-gray-600">
              Our clients achieve significant improvements in cloud performance and costs
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="bg-white rounded-lg p-8 text-center shadow-lg">
              <div className="text-4xl font-bold text-blue-600 mb-2">40%</div>
              <div className="text-gray-600">Average Cost Reduction</div>
            </div>
            <div className="bg-white rounded-lg p-8 text-center shadow-lg">
              <div className="text-4xl font-bold text-green-600 mb-2">99.9%</div>
              <div className="text-gray-600">Uptime Guarantee</div>
            </div>
            <div className="bg-white rounded-lg p-8 text-center shadow-lg">
              <div className="text-4xl font-bold text-purple-600 mb-2">70%</div>
              <div className="text-gray-600">Faster Migration</div>
            </div>
            <div className="bg-white rounded-lg p-8 text-center shadow-lg">
              <div className="text-4xl font-bold text-orange-600 mb-2">24/7</div>
              <div className="text-gray-600">Support Available</div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-indigo-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Optimize Your Cloud?
          </h2>
          <p className="text-xl mb-8 text-blue-100">
            Get a free cloud assessment and discover how much you can save
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="tel:+13024640950"
              className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors inline-flex items-center"
            >
              📞 +1 302 464 0950
            </a>
            <a 
              href="mailto:kleber@ziontechgroup.com"
              className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors"
            >
              ✉️ kleber@ziontechgroup.com
            </a>
          </div>
          <div className="mt-8 text-sm text-blue-200">
            <p>📍 364 E Main St STE 1008, Middletown DE 19709</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AICloudInfrastructurePage;