import React from 'react';
import { CheckCircle, ArrowRight, Zap, Shield, Globe, Cloud, Database, Code, Smartphone, Brain, Cpu, DollarSign, Star, Users, Clock, Server, Wifi, Lock, Settings, BarChart3, FileText } from 'lucide-react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';

const CloudServicesPage: React.FC = () => {
  const cloudServices = [
    {
      icon: <Cloud className="w-8 h-8 text-blue-500" />,
      title: 'Cloud Migration Services',
      description: 'Complete cloud migration solutions to move your applications and data to the cloud securely and efficiently.',
      features: [
        'Cloud readiness assessment',
        'Migration strategy and planning',
        'Application modernization',
        'Data migration and synchronization',
        'Cloud security implementation',
        'Performance optimization',
        'Cost optimization',
        'Post-migration support'
      ],
      pricing: {
        assessment: '$2,500',
        migration: 'Starting at $15,000',
        optimization: '$1,200/month',
        support: '$800/month'
      },
      benefits: ['Reduce infrastructure costs by 40%', 'Improve scalability and flexibility', 'Enhance security posture', 'Enable remote work capabilities'],
      useCases: ['Data center migration', 'Application modernization', 'Hybrid cloud setup', 'Cloud cost optimization'],
      link: '/cloud-migration'
    },
    {
      icon: <Shield className="w-8 h-8 text-green-500" />,
      title: 'Cloud Security Solutions',
      description: 'Comprehensive cloud security services to protect your cloud infrastructure and data.',
      features: [
        'Cloud security assessment',
        'Identity and access management (IAM)',
        'Data encryption and key management',
        'Network security and firewalls',
        'Security monitoring and logging',
        'Compliance management (SOC2, GDPR)',
        'Incident response planning',
        'Security training and awareness'
      ],
      pricing: {
        assessment: '$3,000',
        implementation: 'Starting at $8,000',
        monitoring: '$1,500/month',
        management: '$1,200/month'
      },
      benefits: ['Protect against cloud threats', 'Ensure compliance requirements', 'Reduce security risks', 'Maintain data privacy'],
      useCases: ['Security audits', 'Threat protection', 'Compliance management', 'Data protection'],
      link: '/cloud-security'
    },
    {
      icon: <Database className="w-8 h-8 text-purple-500" />,
      title: 'Cloud Database Services',
      description: 'Managed database services for optimal performance, scalability, and reliability in the cloud.',
      features: [
        'Database migration and setup',
        'Performance tuning and optimization',
        'Automated backups and recovery',
        'High availability and failover',
        'Database monitoring and alerting',
        'Security and compliance',
        'Scaling and capacity planning',
        '24/7 database support'
      ],
      pricing: {
        setup: '$2,000',
        migration: 'Starting at $5,000',
        management: '$1,000/month',
        support: '$600/month'
      },
      benefits: ['Optimize database performance', 'Ensure data availability', 'Automate maintenance tasks', 'Scale with business growth'],
      useCases: ['Database migration', 'Performance optimization', 'High availability setup', 'Backup and recovery'],
      link: '/cloud-database'
    },
    {
      icon: <Server className="w-8 h-8 text-orange-500" />,
      title: 'Cloud Infrastructure Management',
      description: 'Complete cloud infrastructure management including servers, storage, and networking.',
      features: [
        'Infrastructure as Code (IaC)',
        'Auto-scaling and load balancing',
        'Resource monitoring and optimization',
        'Disaster recovery planning',
        'Cost optimization and governance',
        'Security and compliance',
        'Performance monitoring',
        '24/7 infrastructure support'
      ],
      pricing: {
        setup: '$3,000',
        management: '$2,000/month',
        optimization: '$1,500/month',
        support: '$1,000/month'
      },
      benefits: ['Ensure infrastructure reliability', 'Optimize resource utilization', 'Reduce operational costs', 'Improve performance'],
      useCases: ['Infrastructure setup', 'Resource optimization', 'Cost management', 'Performance monitoring'],
      link: '/cloud-infrastructure'
    },
    {
      icon: <Code className="w-8 h-8 text-cyan-500" />,
      title: 'Cloud Application Development',
      description: 'Cloud-native application development using modern technologies and best practices.',
      features: [
        'Cloud-native architecture design',
        'Microservices development',
        'Container orchestration (Kubernetes)',
        'Serverless application development',
        'API development and management',
        'CI/CD pipeline setup',
        'Performance optimization',
        'Security implementation'
      ],
      pricing: {
        consultation: '$1,500',
        development: '$150/hour',
        maintenance: '$2,000/month',
        support: '$1,200/month'
      },
      benefits: ['Build scalable applications', 'Reduce development time', 'Improve application performance', 'Enable rapid deployment'],
      useCases: ['Cloud applications', 'Microservices architecture', 'Serverless development', 'API development'],
      link: '/cloud-development'
    },
    {
      icon: <BarChart3 className="w-8 h-8 text-yellow-500" />,
      title: 'Cloud Analytics & BI',
      description: 'Cloud-based analytics and business intelligence solutions for data-driven decision making.',
      features: [
        'Data warehouse design and setup',
        'ETL/ELT pipeline development',
        'Real-time analytics dashboards',
        'Machine learning integration',
        'Data visualization and reporting',
        'Self-service analytics',
        'Data governance and quality',
        'Performance optimization'
      ],
      pricing: {
        setup: '$5,000',
        implementation: 'Starting at $12,000',
        maintenance: '$1,800/month',
        support: '$1,000/month'
      },
      benefits: ['Make data-driven decisions', 'Improve business insights', 'Automate reporting processes', 'Scale analytics with growth'],
      useCases: ['Business intelligence', 'Data analytics', 'Reporting automation', 'Machine learning'],
      link: '/cloud-analytics'
    },
    {
      icon: <Wifi className="w-8 h-8 text-indigo-500" />,
      title: 'Multi-Cloud Solutions',
      description: 'Multi-cloud strategy and management to leverage the best of different cloud providers.',
      features: [
        'Multi-cloud strategy planning',
        'Cloud provider evaluation',
        'Cross-cloud data synchronization',
        'Unified management platform',
        'Cost optimization across clouds',
        'Disaster recovery planning',
        'Security and compliance',
        'Performance monitoring'
      ],
      pricing: {
        strategy: '$4,000',
        implementation: 'Starting at $20,000',
        management: '$2,500/month',
        optimization: '$1,800/month'
      },
      benefits: ['Avoid vendor lock-in', 'Optimize costs across providers', 'Improve reliability', 'Leverage best-of-breed services'],
      useCases: ['Multi-cloud strategy', 'Vendor diversification', 'Cost optimization', 'Risk mitigation'],
      link: '/multi-cloud'
    },
    {
      icon: <Lock className="w-8 h-8 text-red-500" />,
      title: 'Cloud Backup & Disaster Recovery',
      description: 'Comprehensive backup and disaster recovery solutions to protect your critical data and applications.',
      features: [
        'Automated backup scheduling',
        'Cross-region backup replication',
        'Point-in-time recovery',
        'Disaster recovery testing',
        'RTO/RPO optimization',
        'Backup monitoring and alerting',
        'Compliance and audit trails',
        '24/7 recovery support'
      ],
      pricing: {
        setup: '$2,000',
        implementation: 'Starting at $8,000',
        management: '$1,200/month',
        support: '$800/month'
      },
      benefits: ['Protect critical data', 'Minimize downtime', 'Ensure business continuity', 'Meet compliance requirements'],
      useCases: ['Data backup', 'Disaster recovery', 'Business continuity', 'Compliance management'],
      link: '/cloud-backup'
    }
  ];

  const stats = [
    { number: '99.9%', label: 'Uptime Guarantee' },
    { number: '40%', label: 'Cost Reduction' },
    { number: '50+', label: 'Cloud Certifications' },
    { number: '24/7', label: 'Support Available' }
  ];

  const cloudProviders = [
    'Amazon Web Services (AWS)',
    'Microsoft Azure',
    'Google Cloud Platform (GCP)',
    'IBM Cloud',
    'Oracle Cloud',
    'Alibaba Cloud',
    'DigitalOcean',
    'Vultr'
  ];

  const benefits = [
    {
      icon: <Zap className="w-6 h-6 text-yellow-500" />,
      title: 'Scalability',
      description: 'Scale resources up or down based on demand'
    },
    {
      icon: <DollarSign className="w-6 h-6 text-green-500" />,
      title: 'Cost Efficiency',
      description: 'Pay only for what you use with flexible pricing'
    },
    {
      icon: <Shield className="w-6 h-6 text-blue-500" />,
      title: 'Security',
      description: 'Enterprise-grade security and compliance'
    },
    {
      icon: <Globe className="w-6 h-6 text-purple-500" />,
      title: 'Global Reach',
      description: 'Deploy applications worldwide with low latency'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
        <title>Cloud Services - Zion Tech Group</title>
        <meta name="description" content="Comprehensive cloud services including migration, security, infrastructure management, and application development. Transform your business with cloud technology." />
        <meta name="keywords" content="cloud services, cloud migration, cloud security, cloud infrastructure, aws, azure, gcp" />
      </Helmet>
      
      {/* Hero Section */}
      <section className="pt-20 px-4 py-12 sm:py-16 lg:py-20">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
              Cloud Services & Solutions
            </h1>
            <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto mb-8 px-4">
              Transform your business with comprehensive cloud services. From migration to management, 
              we provide end-to-end cloud solutions to accelerate your digital transformation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                to="/contact" 
                className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300 flex items-center justify-center"
              >
                Get Cloud Consultation
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
              <Link 
                to="/cloud-assessment" 
                className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition-colors"
              >
                Free Cloud Assessment
              </Link>
            </div>
          </div>

          {/* Stats Section */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-8 mb-20">
            {stats.map((stat, index) => (
              <div key={index} className="text-center px-2">
                <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-2">{stat.number}</div>
                <div className="text-gray-300 text-xs sm:text-sm">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-12 sm:py-16 lg:py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4 px-4">Why Choose Cloud?</h2>
            <p className="text-lg sm:text-xl text-gray-300 max-w-2xl mx-auto px-4">
              Experience the benefits of cloud technology
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 mb-20">
            {benefits.map((benefit, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 text-center border border-white/20 hover:bg-white/15 transition-all duration-300">
                <div className="mb-4 flex justify-center">{benefit.icon}</div>
                <h3 className="text-lg font-semibold text-white mb-3">{benefit.title}</h3>
                <p className="text-gray-300 text-sm">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Cloud Services Grid */}
      <section className="py-12 sm:py-16 lg:py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4 px-4">Our Cloud Service Portfolio</h2>
            <p className="text-lg sm:text-xl text-gray-300 max-w-2xl mx-auto px-4">
              Comprehensive cloud solutions to power your digital transformation
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-20">
            {cloudServices.map((service, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20 hover:bg-white/15 transition-all duration-300 group">
                <div className="mb-4 group-hover:scale-110 transition-transform duration-300">{service.icon}</div>
                <h3 className="text-xl font-semibold text-white mb-4 group-hover:text-purple-300 transition-colors">{service.title}</h3>
                <p className="text-gray-300 mb-6">{service.description}</p>
                
                {/* Features */}
                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-white mb-3">Key Features:</h4>
                  <ul className="space-y-2">
                    {service.features.slice(0, 4).map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-sm text-gray-300">
                        <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Pricing */}
                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-white mb-3">Pricing:</h4>
                  <div className="space-y-2">
                    {Object.entries(service.pricing).map(([key, value], priceIndex) => (
                      <div key={priceIndex} className="flex justify-between text-sm">
                        <span className="text-gray-300 capitalize">{key.replace('_', ' ')}:</span>
                        <span className="text-white font-medium">{value}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Use Cases */}
                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-white mb-3">Use Cases:</h4>
                  <div className="flex flex-wrap gap-2">
                    {service.useCases.map((useCase, useCaseIndex) => (
                      <span key={useCaseIndex} className="bg-white/10 text-gray-300 px-2 py-1 rounded text-xs">
                        {useCase}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="mt-6 flex items-center text-blue-400 group-hover:text-blue-300 transition-colors">
                  <Link to={service.link} className="flex items-center">
                    Learn More
                    <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Cloud Providers Section */}
      <section className="py-12 sm:py-16 lg:py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4 px-4">Cloud Providers We Work With</h2>
            <p className="text-lg sm:text-xl text-gray-300 max-w-2xl mx-auto px-4">
              We have expertise across all major cloud platforms
            </p>
          </div>
          
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6 mb-16">
            {cloudProviders.map((provider, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-lg rounded-xl p-6 text-center border border-white/20 hover:bg-white/15 transition-all duration-300">
                <h3 className="text-white font-semibold text-sm">{provider}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 sm:py-16 lg:py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <div className="bg-gradient-to-r from-purple-600 to-pink-600 rounded-3xl p-6 sm:p-8 lg:p-12">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4 px-4">Ready to Move to the Cloud?</h2>
              <p className="text-lg sm:text-xl text-white/90 mb-8 max-w-2xl mx-auto px-4">
                Let's discuss how cloud services can transform your business and drive innovation.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link 
                  to="/contact" 
                  className="bg-white text-purple-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
                >
                  Get Cloud Consultation
                </Link>
                <Link 
                  to="/cloud-assessment" 
                  className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition-colors"
                >
                  Free Cloud Assessment
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CloudServicesPage;