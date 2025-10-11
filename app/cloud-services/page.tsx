import React from 'react';
import { CheckCircle, Cloud, Shield, Zap, Database, ArrowRight, Users, Clock } from 'lucide-react';
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
      duration: '2-4 weeks'
    },
    {
      icon: <Shield className="w-8 h-8 text-green-500" />,
      title: 'Cloud Security',
      description: 'Comprehensive security solutions to protect your cloud infrastructure and data.',
      features: ['Security assessment', 'Compliance management', 'Threat monitoring', 'Incident response'],
      pricing: 'Starting at $1,500/month',
      duration: 'Ongoing'
    },
    {
      icon: <Zap className="w-8 h-8 text-purple-500" />,
      title: 'Cloud Optimization',
      description: 'Optimize your cloud resources for maximum performance and cost efficiency.',
      features: ['Resource optimization', 'Cost analysis', 'Auto-scaling', 'Performance tuning'],
      pricing: 'Starting at $1,000/month',
      duration: 'Ongoing'
    },
    {
      icon: <Database className="w-8 h-8 text-orange-500" />,
      title: 'Cloud Database',
      description: 'Managed database services with high availability and automatic backups.',
      features: ['High availability', 'Automatic backups', 'Scaling', 'Monitoring'],
      pricing: 'Starting at $800/month',
      duration: 'Ongoing'
    }
  ];

  const benefits = [
    {
      title: 'Scalability',
      description: 'Scale your infrastructure up or down based on demand',
      icon: <Zap className="w-6 h-6 text-blue-500" />
    },
    {
      title: 'Cost Efficiency',
      description: 'Reduce infrastructure costs by up to 40%',
      icon: <Database className="w-6 h-6 text-green-500" />
    },
    {
      title: 'Reliability',
      description: '99.9% uptime guarantee with redundant systems',
      icon: <Shield className="w-6 h-6 text-purple-500" />
    },
    {
      title: 'Security',
      description: 'Enterprise-grade security and compliance',
      icon: <Cloud className="w-6 h-6 text-red-500" />
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
        <title>Cloud Services - Zion Tech Group</title>
        <meta name="description" content="Comprehensive cloud services including migration, security, optimization, and database management. Expert cloud solutions for modern businesses." />
        <meta name="keywords" content="cloud services, cloud migration, cloud security, cloud optimization, AWS, Azure, Google Cloud" />
      </Helmet>
      
      <main className="pt-20 px-4 py-20">
        <div className="max-w-7xl mx-auto">
          {/* Hero Section */}
          <div className="text-center mb-20">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Cloud Services
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
              Transform your business with comprehensive cloud solutions. From migration to optimization, 
              we help you leverage the full power of cloud computing.
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
                to="/services" 
                className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition-colors"
              >
                View All Services
              </Link>
            </div>
          </div>

          {/* Benefits Section */}
          <div className="mb-20">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Why Choose Our Cloud Services?</h2>
              <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                Experience the benefits of cloud computing with our expert solutions
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

          {/* Cloud Services Grid */}
          <div className="mb-20">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Our Cloud Services</h2>
              <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                Comprehensive cloud solutions tailored to your business needs
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {cloudServices.map((service, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20 hover:bg-white/15 transition-all duration-300">
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
                  
                  <div className="flex justify-between items-center">
                    <span className="text-2xl font-bold text-white">{service.pricing}</span>
                    <span className="text-sm text-gray-400">{service.duration}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* CTA Section */}
          <div className="text-center">
            <div className="bg-gradient-to-r from-purple-600 to-pink-600 rounded-3xl p-12">
              <h2 className="text-4xl font-bold text-white mb-4">Ready to Move to the Cloud?</h2>
              <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
                Let's discuss how our cloud services can transform your business operations and drive growth.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link 
                  to="/contact" 
                  className="bg-white text-purple-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
                >
                  Start Your Cloud Journey
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
        </div>
      </main>
    </div>
  );
};

export default CloudServicesPage;
