import React from 'react';
import { CheckCircle, ArrowRight, Cloud, Shield, Database, Zap, Users, DollarSign } from 'lucide-react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';

const CloudServicesPage: React.FC = () => {
  const cloudServices = [
    {
      icon: <Cloud className="w-8 h-8 text-blue-500" />,
      title: 'Cloud Migration',
      description: 'Seamlessly migrate your infrastructure to AWS, Azure, or Google Cloud with zero downtime.',
      features: ['Zero-downtime migration', 'Cost optimization', 'Security compliance', 'Performance monitoring'],
      pricing: 'Starting at $2,500',
      link: '/cloud-migration',
      popular: true
    },
    {
      icon: <Shield className="w-8 h-8 text-red-500" />,
      title: 'Cloud Security',
      description: 'Comprehensive cloud security solutions to protect your data and applications.',
      features: ['Identity management', 'Data encryption', 'Threat detection', 'Compliance auditing'],
      pricing: 'Starting at $1,200/month',
      link: '/cloud-security',
      popular: false
    },
    {
      icon: <Database className="w-8 h-8 text-green-500" />,
      title: 'Cloud Database',
      description: 'Managed database services with automated backups and scaling.',
      features: ['Auto-scaling', 'Automated backups', 'High availability', 'Performance tuning'],
      pricing: 'Starting at $800/month',
      link: '/cloud-database',
      popular: false
    },
    {
      icon: <Zap className="w-8 h-8 text-purple-500" />,
      title: 'Cloud DevOps',
      description: 'CI/CD pipelines and infrastructure as code for efficient deployments.',
      features: ['CI/CD pipelines', 'Infrastructure as Code', 'Monitoring', 'Auto-scaling'],
      pricing: 'Starting at $1,500/month',
      link: '/cloud-devops',
      popular: true
    },
    {
      icon: <Users className="w-8 h-8 text-yellow-500" />,
      title: 'Cloud Support',
      description: '24/7 cloud support and monitoring to ensure optimal performance.',
      features: ['24/7 monitoring', 'Proactive support', 'Performance optimization', 'Cost management'],
      pricing: 'Starting at $600/month',
      link: '/cloud-support',
      popular: false
    },
    {
      icon: <DollarSign className="w-8 h-8 text-indigo-500" />,
      title: 'Cost Optimization',
      description: 'Optimize your cloud spending with intelligent cost management solutions.',
      features: ['Cost analysis', 'Resource optimization', 'Budget alerts', 'Usage monitoring'],
      pricing: 'Starting at $400/month',
      link: '/cloud-cost-optimization',
      popular: false
    }
  ];

  const benefits = [
    {
      icon: <CheckCircle className="w-6 h-6 text-green-500" />,
      title: 'Scalability',
      description: 'Scale your infrastructure up or down based on demand automatically.'
    },
    {
      icon: <CheckCircle className="w-6 h-6 text-green-500" />,
      title: 'Reliability',
      description: '99.9% uptime guarantee with redundant systems and failover protection.'
    },
    {
      icon: <CheckCircle className="w-6 h-6 text-green-500" />,
      title: 'Security',
      description: 'Enterprise-grade security with encryption and compliance standards.'
    },
    {
      icon: <CheckCircle className="w-6 h-6 text-green-500" />,
      title: 'Cost Effective',
      description: 'Pay only for what you use with flexible pricing models.'
    }
  ];

  const processSteps = [
    {
      step: '01',
      title: 'Assessment',
      description: 'Analyze your current infrastructure and cloud readiness.'
    },
    {
      step: '02',
      title: 'Strategy',
      description: 'Develop a comprehensive cloud migration and optimization strategy.'
    },
    {
      step: '03',
      title: 'Migration',
      description: 'Execute the migration with minimal downtime and maximum efficiency.'
    },
    {
      step: '04',
      title: 'Optimization',
      description: 'Continuously optimize performance, security, and costs.'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
        <title>Cloud Services - Zion Tech Group</title>
        <meta name="description" content="Professional cloud services including migration, infrastructure setup, security, and optimization. Transform your business with our cloud expertise." />
        <meta name="keywords" content="cloud services, cloud migration, AWS, Azure, Google Cloud, cloud security, cloud optimization" />
      </Helmet>
      
      {/* Hero Section */}
      <section className="pt-20 px-4 py-20">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Cloud Services
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
              Professional cloud services including migration, infrastructure setup, security, and optimization. Transform your business with our cloud expertise.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                to="/contact" 
                className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300 flex items-center justify-center"
              >
                Get Started
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
        </div>
      </section>

      {/* Cloud Services Grid */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Our Cloud Solutions</h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Comprehensive cloud services designed to accelerate your digital transformation
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {cloudServices.map((service, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20 hover:bg-white/15 transition-all duration-300 relative">
                {service.popular && (
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                    <div className="bg-gradient-to-r from-yellow-400 to-orange-500 text-white px-4 py-1 rounded-full text-sm font-semibold">
                      Popular
                    </div>
                  </div>
                )}
                <div className="mb-6">{service.icon}</div>
                <h3 className="text-xl font-semibold text-white mb-4">{service.title}</h3>
                <p className="text-gray-300 mb-6">{service.description}</p>
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm text-gray-300">
                      <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <div className="flex items-center justify-between mb-6">
                  <span className="text-2xl font-bold text-white">{service.pricing}</span>
                  <Link 
                    to={service.link}
                    className="text-blue-400 hover:text-blue-300 font-semibold transition-colors"
                  >
                    Learn More
                    <ArrowRight className="w-4 h-4 ml-1 inline" />
                  </Link>
                </div>
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
              Experience the benefits of professional cloud solutions
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20 text-center">
                <div className="mb-4 flex justify-center">{benefit.icon}</div>
                <h3 className="text-xl font-semibold text-white mb-4">{benefit.title}</h3>
                <p className="text-gray-300 text-sm">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Our Cloud Service Process</h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              A proven methodology for successful cloud implementation
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {processSteps.map((step, index) => (
              <div key={index} className="text-center">
                <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <span className="text-white font-bold text-lg">{step.step}</span>
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">{step.title}</h3>
                <p className="text-gray-300 text-sm">{step.description}</p>
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
                Let's discuss how our cloud services can help you achieve your business goals and drive innovation.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link 
                  to="/contact" 
                  className="bg-white text-purple-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
                >
                  Get Free Consultation
                </Link>
                <Link 
                  to="/services" 
                  className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition-colors"
                >
                  View All Services
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
