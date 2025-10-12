import React from 'react';
import { CheckCircle, ArrowRight, Cloud, Shield, Code, Database, Smartphone, DollarSign, Clock, Users, Server, Network, Settings } from 'lucide-react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

const ItServicesPage: React.FC = () => {
  const itServices = [
    {
      icon: <Cloud className="w-8 h-8 text-blue-500" />,
      title: 'Cloud Migration',
      description: 'Seamlessly migrate your infrastructure to the cloud with zero downtime and enhanced security.',
      features: ['AWS/Azure/GCP migration', 'Zero downtime migration', 'Cost optimization', 'Security compliance'],
      pricing: 'Starting at $2,500',
      duration: '2-4 weeks'
    },
    {
      icon: <Shield className="w-8 h-8 text-red-500" />,
      title: 'Cybersecurity Solutions',
      description: 'Comprehensive security solutions to protect your business from evolving cyber threats.',
      features: ['Security audits', 'Penetration testing', 'Compliance management', '24/7 monitoring'],
      pricing: 'Starting at $1,800',
      duration: '1-3 weeks'
    },
    {
      icon: <Code className="w-8 h-8 text-green-500" />,
      title: 'Custom Development',
      description: 'Tailored software solutions built to meet your specific business requirements.',
      features: ['Web applications', 'Mobile apps', 'API development', 'Database design'],
      pricing: 'Starting at $3,000',
      duration: '4-12 weeks'
    },
    {
      icon: <Database className="w-8 h-8 text-purple-500" />,
      title: 'Data Analytics',
      description: 'Transform your data into actionable insights with advanced analytics solutions.',
      features: ['Data visualization', 'Predictive analytics', 'Business intelligence', 'Real-time reporting'],
      pricing: 'Starting at $2,200',
      duration: '3-6 weeks'
    },
    {
      icon: <Server className="w-8 h-8 text-orange-500" />,
      title: 'DevOps & CI/CD',
      description: 'Streamline your development and deployment processes with modern DevOps practices.',
      features: ['CI/CD pipelines', 'Infrastructure as code', 'Monitoring & logging', 'Automated testing'],
      pricing: 'Starting at $2,000',
      duration: '2-4 weeks'
    },
    {
      icon: <Network className="w-8 h-8 text-cyan-500" />,
      title: 'Network Solutions',
      description: 'Design and implement robust network infrastructure for optimal performance.',
      features: ['Network design', 'Security implementation', 'Performance optimization', '24/7 support'],
      pricing: 'Starting at $1,500',
      duration: '1-3 weeks'
    }
  ];

  const benefits = [
    {
      icon: <DollarSign className="w-6 h-6 text-green-500" />,
      title: 'Cost Reduction',
      description: 'Reduce operational costs by up to 40% with optimized IT infrastructure.'
    },
    {
      icon: <Clock className="w-6 h-6 text-blue-500" />,
      title: 'Faster Deployment',
      description: 'Deploy solutions 3x faster with our streamlined development process.'
    },
    {
      icon: <Shield className="w-6 h-6 text-red-500" />,
      title: 'Enhanced Security',
      description: 'Bank-level security with 99.9% uptime and advanced threat protection.'
    },
    {
      icon: <Users className="w-6 h-6 text-purple-500" />,
      title: 'Expert Support',
      description: '24/7 technical support from certified IT professionals.'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
        <title>IT Services - Zion Tech Group</title>
        <meta name="description" content="Comprehensive IT services including cloud migration, cybersecurity, custom development, and data analytics. Transform your business with our expert IT solutions." />
        <meta name="keywords" content="IT services, cloud migration, cybersecurity, custom development, data analytics, DevOps, network solutions" />
      </Helmet>
      
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(147,51,234,0.3)_0%,transparent_50%)] animate-pulse" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(59,130,246,0.3)_0%,transparent_50%)] animate-pulse" style={{ animationDelay: '1s' }} />
        
        <div className="relative max-w-7xl mx-auto text-center">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
            Professional
            <br />
            <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              IT Services
            </span>
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
            Transform your business with comprehensive IT solutions. From cloud migration to cybersecurity, 
            we deliver enterprise-grade technology services that drive growth and efficiency.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-blue-600 hover:to-purple-700 transition-all duration-300 flex items-center">
              Get Started
              <ArrowRight className="ml-2 h-5 w-5" />
            </button>
            <button className="border border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-gray-900 transition-all duration-300">
              Schedule Consultation
            </button>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Our IT Services
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Comprehensive technology solutions designed to accelerate your digital transformation.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {itServices.map((service, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 group">
                <div className="flex items-center justify-center w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg mb-4 group-hover:scale-110 transition-transform">
                  {service.icon}
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{service.title}</h3>
                <p className="text-gray-300 mb-4">{service.description}</p>
                
                <div className="space-y-2 mb-4">
                  {service.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center text-sm text-gray-300">
                      <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                      {feature}
                    </div>
                  ))}
                </div>
                
                <div className="flex justify-between items-center text-sm text-gray-300 mb-4">
                  <span className="font-semibold text-green-400">{service.pricing}</span>
                  <span>{service.duration}</span>
                </div>
                
                <button className="w-full bg-gradient-to-r from-blue-500 to-purple-600 text-white py-2 px-4 rounded-lg font-semibold hover:from-blue-600 hover:to-purple-700 transition-all duration-300">
                  Learn More
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Why Choose Our IT Services?
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              We combine cutting-edge technology with industry expertise to deliver exceptional results.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="text-center">
                <div className="flex items-center justify-center w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full mx-auto mb-4">
                  {benefit.icon}
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{benefit.title}</h3>
                <p className="text-gray-300">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-12 border border-white/20 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Transform Your IT Infrastructure?
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Let's discuss how our IT services can help you achieve your technology goals.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-blue-600 hover:to-purple-700 transition-all duration-300">
                Get Started Today
              </button>
              <button className="border border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-gray-900 transition-all duration-300">
                Schedule Consultation
              </button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ItServicesPage;