import React from 'react';
import { CheckCircle, ArrowRight, Server, Shield, Cloud, Database, Code, Users } from 'lucide-react';
import SEOHead from '../components/SEOHead';
import { Link } from 'react-router-dom';

const ITServicesPage: React.FC = () => {
  const itServices = [
    {
      icon: <Cloud className="w-8 h-8 text-blue-500" />,
      title: 'Cloud Migration & Management',
      description: 'Seamlessly migrate your infrastructure to the cloud with zero downtime and enhanced performance.',
      features: ['AWS, Azure, GCP expertise', 'Zero-downtime migration', 'Cost optimization', '24/7 monitoring'],
      pricing: 'Starting at $99/month',
      link: '/cloud-services',
      popular: true
    },
    {
      icon: <Shield className="w-8 h-8 text-green-500" />,
      title: 'Cybersecurity Solutions',
      description: 'Protect your digital assets with comprehensive security solutions and compliance management.',
      features: ['Threat detection', 'Vulnerability assessment', 'Compliance management', 'Security training'],
      pricing: 'Starting at $149/month',
      link: '/cybersecurity',
      popular: true
    },
    {
      icon: <Database className="w-8 h-8 text-purple-500" />,
      title: 'Database Management',
      description: 'Optimize and maintain your databases for maximum performance and reliability.',
      features: ['Performance tuning', 'Backup & recovery', 'Security hardening', 'Migration services'],
      pricing: 'Starting at $79/month',
      link: '/database-services',
      popular: false
    },
    {
      icon: <Code className="w-8 h-8 text-orange-500" />,
      title: 'DevOps & CI/CD',
      description: 'Streamline your development process with automated deployment and continuous integration.',
      features: ['CI/CD pipelines', 'Infrastructure as Code', 'Monitoring & alerting', 'Container orchestration'],
      pricing: 'Starting at $129/month',
      link: '/devops',
      popular: false
    },
    {
      icon: <Server className="w-8 h-8 text-red-500" />,
      title: 'Infrastructure Management',
      description: 'Comprehensive IT infrastructure management and optimization services.',
      features: ['Server management', 'Network optimization', 'Disaster recovery', 'Capacity planning'],
      pricing: 'Starting at $199/month',
      link: '/infrastructure',
      popular: false
    },
    {
      icon: <Users className="w-8 h-8 text-cyan-500" />,
      title: 'IT Consulting',
      description: 'Strategic IT consulting to align technology with your business objectives.',
      features: ['Technology strategy', 'Digital transformation', 'Process optimization', 'Vendor management'],
      pricing: 'Starting at $179/month',
      link: '/it-consulting',
      popular: true
    }
  ];

  const benefits = [
    {
      icon: <CheckCircle className="w-6 h-6 text-green-500" />,
      text: '24/7 expert support and monitoring'
    },
    {
      icon: <CheckCircle className="w-6 h-6 text-green-500" />,
      text: 'Proactive maintenance and updates'
    },
    {
      icon: <CheckCircle className="w-6 h-6 text-green-500" />,
      text: 'Scalable solutions that grow with your business'
    },
    {
      icon: <CheckCircle className="w-6 h-6 text-green-500" />,
      text: 'Industry-leading security and compliance'
    },
    {
      icon: <CheckCircle className="w-6 h-6 text-green-500" />,
      text: 'Cost-effective solutions and optimization'
    },
    {
      icon: <CheckCircle className="w-6 h-6 text-green-500" />,
      text: 'Custom solutions tailored to your needs'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <SEOHead 
        title="IT Services - Zion Tech Group"
        description="Comprehensive IT services including cloud migration, cybersecurity, DevOps, database management, and infrastructure solutions."
        keywords="IT services, cloud migration, cybersecurity, DevOps, database management, infrastructure, IT consulting"
      />
      
      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Comprehensive <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">IT Services</span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Transform your IT infrastructure with our comprehensive technology services designed to optimize performance, enhance security, and drive business growth.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="bg-gradient-to-r from-blue-600 to-cyan-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-blue-700 hover:to-cyan-700 transition-all duration-300 flex items-center justify-center"
              >
                Get Started
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
              <Link
                to="/contact"
                className="border border-blue-400 text-blue-400 px-8 py-3 rounded-lg font-semibold hover:bg-blue-400 hover:text-white transition-all duration-300"
              >
                Schedule Consultation
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our IT Service Portfolio
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              End-to-end IT solutions designed to meet your business requirements and drive digital transformation
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {itServices.map((service, index) => (
              <div
                key={index}
                className={`bg-white rounded-xl p-8 shadow-lg border-2 transition-all duration-300 hover:shadow-xl hover:-translate-y-1 ${
                  service.popular ? 'border-blue-500 relative' : 'border-gray-200'
                }`}
              >
                {service.popular && (
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gradient-to-r from-blue-600 to-cyan-600 text-white px-4 py-1 rounded-full text-sm font-semibold">
                      Most Popular
                    </span>
                  </div>
                )}
                
                <div className="mb-6">
                  {service.icon}
                </div>
                
                <h3 className="text-xl font-bold text-gray-900 mb-4">{service.title}</h3>
                <p className="text-gray-600 mb-6">{service.description}</p>
                
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm text-gray-600">
                      <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
                
                <div className="mb-6">
                  <p className="text-2xl font-bold text-gray-900">{service.pricing}</p>
                </div>
                
                <Link
                  to={service.link}
                  className="w-full bg-gradient-to-r from-blue-600 to-cyan-600 text-white px-6 py-3 rounded-lg font-semibold hover:from-blue-700 hover:to-cyan-700 transition-all duration-300 flex items-center justify-center"
                >
                  Learn More
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-100">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why Choose Our IT Services?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We deliver IT solutions that enhance performance, security, and business value
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="flex items-start space-x-4">
                <div className="flex-shrink-0">
                  {benefit.icon}
                </div>
                <p className="text-gray-700 text-lg">{benefit.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-gradient-to-r from-blue-600 to-cyan-600 rounded-2xl p-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Ready to Transform Your IT Infrastructure?
            </h2>
            <p className="text-xl text-blue-100 mb-8">
              Join hundreds of businesses already using our IT services to optimize performance and drive growth
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-300 transform hover:scale-105"
              >
                Start Your IT Transformation
              </Link>
              <Link
                to="/contact"
                className="border border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-all duration-300"
              >
                Schedule Assessment
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ITServicesPage;