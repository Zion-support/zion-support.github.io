import React from 'react';
import { CheckCircle, ArrowRight, Cloud, Server, Database, Shield, Zap, Users, Clock, DollarSign, Globe, BarChart } from 'lucide-react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';

const CloudServicesPage: React.FC = () => {
  const cloudServices = [
    {
      icon: <Cloud className="w-8 h-8 text-blue-500" />,
      title: 'Cloud Migration',
      description: 'Seamless migration to AWS, Azure, or Google Cloud with zero downtime and enhanced security.',
      features: ['Zero-downtime migration', 'Cost optimization', 'Security compliance', 'Performance monitoring', '24/7 support'],
      pricing: 'Starting at $2,500',
      popular: true,
      category: 'Migration'
    },
    {
      icon: <Server className="w-8 h-8 text-green-500" />,
      title: 'Cloud Infrastructure',
      description: 'Complete cloud infrastructure setup, management, and optimization for your business needs.',
      features: ['Infrastructure as Code', 'Auto-scaling', 'Load balancing', 'Disaster recovery', 'Monitoring & alerts'],
      pricing: 'Starting at $399/month',
      popular: false,
      category: 'Infrastructure'
    },
    {
      icon: <Database className="w-8 h-8 text-purple-500" />,
      title: 'Cloud Database Services',
      description: 'Managed database solutions with automated backups, scaling, and security.',
      features: ['Automated backups', 'Auto-scaling', 'Security hardening', 'Performance tuning', 'Multi-region replication'],
      pricing: 'Starting at $199/month',
      popular: false,
      category: 'Database'
    },
    {
      icon: <Shield className="w-8 h-8 text-red-500" />,
      title: 'Cloud Security',
      description: 'Comprehensive cloud security solutions to protect your data and applications.',
      features: ['Identity management', 'Data encryption', 'Threat detection', 'Compliance monitoring', 'Security audits'],
      pricing: 'Starting at $299/month',
      popular: true,
      category: 'Security'
    },
    {
      icon: <Zap className="w-8 h-8 text-orange-500" />,
      title: 'DevOps & CI/CD',
      description: 'Automated deployment pipelines and DevOps practices for faster, more reliable releases.',
      features: ['CI/CD pipelines', 'Container orchestration', 'Infrastructure automation', 'Monitoring & logging', 'Deployment automation'],
      pricing: 'Starting at $349/month',
      popular: false,
      category: 'DevOps'
    },
    {
      icon: <BarChart className="w-8 h-8 text-yellow-500" />,
      title: 'Cloud Analytics',
      description: 'Big data analytics and business intelligence solutions in the cloud.',
      features: ['Data warehousing', 'Real-time analytics', 'Machine learning', 'Data visualization', 'Predictive analytics'],
      pricing: 'Starting at $449/month',
      popular: false,
      category: 'Analytics'
    }
  ];

  const cloudProviders = [
    {
      name: 'Amazon Web Services',
      description: 'Comprehensive cloud services with global reach and enterprise-grade security.',
      features: ['EC2, S3, RDS', 'Lambda functions', 'CloudFront CDN', 'Route 53 DNS'],
      logo: 'AWS'
    },
    {
      name: 'Microsoft Azure',
      description: 'Hybrid cloud solutions with seamless integration with Microsoft products.',
      features: ['Virtual Machines', 'Azure SQL', 'Active Directory', 'Power BI'],
      logo: 'Azure'
    },
    {
      name: 'Google Cloud Platform',
      description: 'AI and machine learning focused cloud services with advanced analytics.',
      features: ['Compute Engine', 'BigQuery', 'AI Platform', 'Cloud Functions'],
      logo: 'GCP'
    }
  ];

  const stats = [
    { number: '500+', label: 'Cloud Migrations' },
    { number: '99.9%', label: 'Uptime SLA' },
    { number: '50%', label: 'Cost Savings' },
    { number: '24/7', label: 'Monitoring' }
  ];

  const benefits = [
    {
      icon: <Globe className="w-12 h-12 text-blue-500" />,
      title: 'Global Scale',
      description: 'Deploy your applications worldwide with our global cloud infrastructure.'
    },
    {
      icon: <Zap className="w-12 h-12 text-green-500" />,
      title: 'Auto-Scaling',
      description: 'Automatically scale resources based on demand to optimize costs and performance.'
    },
    {
      icon: <Shield className="w-12 h-12 text-purple-500" />,
      title: 'Enterprise Security',
      description: 'Bank-level security with encryption, compliance, and advanced threat protection.'
    },
    {
      icon: <DollarSign className="w-12 h-12 text-orange-500" />,
      title: 'Cost Optimization',
      description: 'Reduce cloud costs by up to 50% with our optimization strategies.'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
        <title>Cloud Services - Zion Tech Group</title>
        <meta name="description" content="Comprehensive cloud services including migration, infrastructure management, security, and DevOps. Expert solutions for AWS, Azure, and Google Cloud." />
        <meta name="keywords" content="cloud services, cloud migration, AWS, Azure, Google Cloud, cloud infrastructure, DevOps, cloud security" />
      </Helmet>
      
      {/* Hero Section */}
      <section className="pt-20 px-4 py-20">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Cloud Services & Solutions
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
              Transform your business with comprehensive cloud solutions. From migration to management, we help you leverage the power of the cloud.
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
                to="/about" 
                className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition-colors"
              >
                Learn More
              </Link>
            </div>
          </div>

          {/* Stats Section */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-20">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-white mb-2">{stat.number}</div>
                <div className="text-gray-300 text-sm">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Cloud Providers */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Cloud Providers We Support</h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              We work with all major cloud providers to give you the best solution
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
            {cloudProviders.map((provider, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20 hover:bg-white/15 transition-all duration-300">
                <div className="text-center mb-6">
                  <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-white font-bold text-lg">{provider.logo}</span>
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-2">{provider.name}</h3>
                  <p className="text-gray-300 text-sm">{provider.description}</p>
                </div>
                <ul className="space-y-2">
                  {provider.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm text-gray-300">
                      <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Our Cloud Services</h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Comprehensive cloud solutions tailored to your business needs
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
            {cloudServices.map((service, index) => (
              <div key={index} className={`bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20 hover:bg-white/15 transition-all duration-300 relative ${service.popular ? 'ring-2 ring-purple-500' : ''}`}>
                {service.popular && (
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-4 py-1 rounded-full text-sm font-semibold">
                      Popular
                    </span>
                  </div>
                )}
                <div className="mb-4">{service.icon}</div>
                <div className="mb-2">
                  <span className="bg-blue-500/20 text-blue-300 px-3 py-1 rounded-full text-sm font-medium">
                    {service.category}
                  </span>
                </div>
                <h3 className="text-xl font-semibold text-white mb-4">{service.title}</h3>
                <p className="text-gray-300 mb-6">{service.description}</p>
                <div className="mb-6">
                  <div className="text-2xl font-bold text-white mb-2">{service.pricing}</div>
                  <div className="text-gray-400 text-sm">one-time or monthly</div>
                </div>
                <ul className="space-y-2 mb-8">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm text-gray-300">
                      <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <Link 
                  to="/contact"
                  className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-3 rounded-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300 flex items-center justify-center"
                >
                  Get Quote
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Why Choose Our Cloud Services?</h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Built with modern technology and designed for maximum efficiency
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20 text-center">
                <div className="mb-4 flex justify-center">{benefit.icon}</div>
                <h3 className="text-xl font-semibold text-white mb-4">{benefit.title}</h3>
                <p className="text-gray-300">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <div className="bg-gradient-to-r from-purple-600 to-pink-600 rounded-3xl p-12">
              <h2 className="text-4xl font-bold text-white mb-4">Ready to Move to the Cloud?</h2>
              <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
                Get a free cloud assessment and discover how cloud services can transform your business.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link 
                  to="/contact" 
                  className="bg-white text-purple-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
                >
                  Get Free Assessment
                </Link>
                <Link 
                  to="/about" 
                  className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition-colors"
                >
                  Learn About Us
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
