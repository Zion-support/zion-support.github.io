'use client';
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { CheckCircle, ArrowRight, Phone, Mail, MapPin, Zap, Shield, Brain, Globe, Cloud, Server, Database } from 'lucide-react';

const CloudServicesPage: React.FC = () => {
  const features = [
    {
      icon: Cloud,
      title: 'Cloud Migration',
      description: 'Seamless migration to cloud platforms with zero downtime and enhanced performance'
    },
    {
      icon: Server,
      title: 'Infrastructure as Code',
      description: 'Automated infrastructure management with scalable and reliable cloud resources'
    },
    {
      icon: Database,
      title: 'Database Management',
      description: 'Optimized database solutions with high availability and performance monitoring'
    },
    {
      icon: Shield,
      title: 'Cloud Security',
      description: 'Comprehensive security measures to protect your cloud infrastructure and data'
    }
  ];

  const services = [
    {
      title: 'AWS Cloud Solutions',
      description: 'Complete Amazon Web Services implementation and optimization',
      features: ['EC2, S3, RDS setup', 'Auto-scaling configuration', 'Cost optimization', 'Security compliance']
    },
    {
      title: 'Azure Cloud Services',
      description: 'Microsoft Azure cloud platform deployment and management',
      features: ['Virtual machines', 'Azure SQL Database', 'Active Directory integration', 'Backup solutions']
    },
    {
      title: 'Google Cloud Platform',
      description: 'Google Cloud infrastructure and data analytics solutions',
      features: ['Compute Engine', 'BigQuery analytics', 'Kubernetes orchestration', 'AI/ML services']
    },
    {
      title: 'Multi-Cloud Strategy',
      description: 'Hybrid and multi-cloud solutions for maximum flexibility',
      features: ['Cross-cloud migration', 'Disaster recovery', 'Load balancing', 'Cost management']
    }
  ];

  const benefits = [
    'Reduced infrastructure costs by up to 40%',
    'Improved scalability and flexibility',
    'Enhanced security and compliance',
    '24/7 monitoring and support',
    'Automated backup and disaster recovery',
    'Easy integration with existing systems',
    'Cost-effective pricing plans',
    'Proven track record of success'
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
        <title>Cloud Services - Zion Tech Group | Cloud Solutions</title>
        <meta name="description" content="Professional cloud services by Zion Tech Group. AWS, Azure, GCP solutions for your business." />
        <meta name="keywords" content="cloud services, AWS, Azure, GCP, cloud migration, infrastructure, Zion Tech Group" />
      </Helmet>

      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                Cloud Services
              </span>
              <br />
              <span className="text-white">Solutions</span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Transform your business with our comprehensive cloud solutions. 
              Migrate, optimize, and scale your infrastructure with confidence.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center">
                Get Started
                <ArrowRight className="ml-2 h-5 w-5" />
              </button>
              <button className="border border-cyan-400 text-cyan-400 px-8 py-3 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300">
                Learn More
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-white mb-4">
              Why Choose Our Cloud Services
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our cloud solutions deliver unmatched performance, security, and scalability.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="text-center">
                <div className="bg-gradient-to-br from-cyan-400/20 to-purple-400/20 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <feature.icon className="w-8 h-8 text-cyan-400" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">{feature.title}</h3>
                <p className="text-gray-300">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 px-4 bg-slate-800/30">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-white mb-4">
              Our Cloud Services
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Experience the power of our comprehensive cloud solutions for your business.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-xl p-6 hover:border-cyan-400/50 transition-all duration-300">
                <h3 className="text-xl font-bold text-white mb-3">{service.title}</h3>
                <p className="text-gray-300 mb-4">{service.description}</p>
                <ul className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center gap-2 text-sm text-gray-300">
                      <CheckCircle className="w-4 h-4 text-cyan-400 flex-shrink-0" />
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
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-white mb-4">
              Benefits of Our Cloud Solutions
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Discover how our cloud services can transform your business operations.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-2xl font-semibold text-white mb-6">Key Benefits</h3>
              <ul className="space-y-4">
                {benefits.map((benefit, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-cyan-400 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-300">{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-gradient-to-br from-cyan-400/10 to-purple-400/10 rounded-xl p-8">
              <h3 className="text-2xl font-semibold text-white mb-6">Why Choose Us</h3>
              <p className="text-gray-300 mb-6">
                With years of experience in cloud technologies, we provide expert guidance 
                and support to help you make the most of your cloud investment. Our team 
                of certified professionals ensures seamless migration and optimal performance.
              </p>
              <div className="flex items-center gap-4 text-sm text-gray-400">
                <div className="flex items-center gap-2">
                  <Shield className="w-4 h-4" />
                  <span>Certified Experts</span>
                </div>
                <div className="flex items-center gap-2">
                  <Zap className="w-4 h-4" />
                  <span>24/7 Support</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-white mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Contact our experts to discuss your cloud needs and get a customized solution.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-gradient-to-r from-cyan-400 to-purple-400 text-slate-900 font-semibold py-3 px-8 rounded-lg hover:from-cyan-300 hover:to-purple-300 transition-all duration-200 flex items-center justify-center gap-2">
              Start Your Cloud Journey
              <ArrowRight className="w-5 h-5" />
            </button>
            <button className="border border-cyan-400 text-cyan-400 font-semibold py-3 px-8 rounded-lg hover:bg-cyan-400 hover:text-slate-900 transition-all duration-200">
              Schedule Consultation
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CloudServicesPage;