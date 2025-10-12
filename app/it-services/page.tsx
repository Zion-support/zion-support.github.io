import React from 'react';
import { CheckCircle, ArrowRight, Shield, Cloud, Code, Database, Smartphone, Globe, Cpu, Zap } from 'lucide-react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

const ITServicesPage: React.FC = () => {
  const itServices = [
    {
      icon: <Cloud className="w-12 h-12 text-blue-500" />,
      title: 'Cloud Migration & Management',
      description: 'Seamlessly migrate your infrastructure to the cloud with our expert cloud migration services.',
      features: [
        'AWS, Azure, GCP expertise',
        'Zero-downtime migration',
        'Cost optimization',
        'Security compliance',
        '24/7 monitoring',
        'Disaster recovery'
      ],
      pricing: 'Starting at $2,500/month',
      popular: true
    },
    {
      icon: <Shield className="w-12 h-12 text-green-500" />,
      title: 'Cybersecurity Solutions',
      description: 'Protect your business with comprehensive cybersecurity services and threat protection.',
      features: [
        'Security audits',
        'Penetration testing',
        'Firewall management',
        'Incident response',
        'Compliance consulting',
        'Security training'
      ],
      pricing: 'Starting at $1,800/month',
      popular: false
    },
    {
      icon: <Code className="w-12 h-12 text-purple-500" />,
      title: 'Custom Software Development',
      description: 'Build tailored software solutions that meet your specific business requirements.',
      features: [
        'Web applications',
        'Mobile apps',
        'API development',
        'Database design',
        'Integration services',
        'Maintenance & support'
      ],
      pricing: 'Starting at $150/hour',
      popular: true
    },
    {
      icon: <Database className="w-12 h-12 text-orange-500" />,
      title: 'Data Analytics & BI',
      description: 'Transform your data into actionable insights with advanced analytics and business intelligence.',
      features: [
        'Data warehousing',
        'ETL processes',
        'Dashboard creation',
        'Predictive analytics',
        'Real-time reporting',
        'Data visualization'
      ],
      pricing: 'Starting at $2,000/month',
      popular: false
    },
    {
      icon: <Smartphone className="w-12 h-12 text-pink-500" />,
      title: 'Mobile App Development',
      description: 'Create powerful mobile applications for iOS and Android platforms.',
      features: [
        'Native development',
        'Cross-platform apps',
        'UI/UX design',
        'App store deployment',
        'Push notifications',
        'Analytics integration'
      ],
      pricing: 'Starting at $5,000/project',
      popular: false
    },
    {
      icon: <Globe className="w-12 h-12 text-cyan-500" />,
      title: 'DevOps & CI/CD',
      description: 'Streamline your development process with modern DevOps practices and automation.',
      features: [
        'CI/CD pipeline setup',
        'Container orchestration',
        'Infrastructure as code',
        'Monitoring & logging',
        'Performance optimization',
        'Team training'
      ],
      pricing: 'Starting at $3,000/month',
      popular: true
    }
  ];

  const stats = [
    { number: '500+', label: 'Projects Delivered' },
    { number: '99.9%', label: 'Uptime Guarantee' },
    { number: '24/7', label: 'Support Available' },
    { number: '50+', label: 'Expert Engineers' }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      <Helmet>
        <title>IT Services - Zion Tech Group</title>
        <meta name="description" content="Professional IT services including cloud migration, cybersecurity, custom development, and DevOps solutions." />
        <meta name="keywords" content="IT services, cloud migration, cybersecurity, software development, DevOps, data analytics" />
      </Helmet>
      
      <Navigation />
      
      <main className="pt-20">
        {/* Hero Section */}
        <section className="pt-20 px-4 py-12 sm:py-16 lg:py-20">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
                Professional IT Services
              </h1>
              <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto mb-8 px-4">
                Comprehensive IT solutions to accelerate your digital transformation and drive business growth.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  to="/contact"
                  className="inline-flex items-center px-8 py-4 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors"
                >
                  Get Free Consultation
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Link>
                <Link 
                  to="/ai-services" 
                  className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition-colors"
                >
                  Explore AI Services
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

            {/* IT Services Grid */}
            <div className="mb-20">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white text-center mb-12">
                Our IT Services
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {itServices.map((service, index) => (
                  <div key={index} className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 hover:bg-white/20 transition-all duration-300 group">
                    <div className="flex items-center justify-between mb-6">
                      <div className="p-3 bg-white/10 rounded-xl">
                        {service.icon}
                      </div>
                      {service.popular && (
                        <span className="bg-blue-500 text-white text-xs font-semibold px-3 py-1 rounded-full">
                          Popular
                        </span>
                      )}
                    </div>
                    
                    <h3 className="text-xl font-bold text-white mb-4 group-hover:text-blue-300 transition-colors">
                      {service.title}
                    </h3>
                    
                    <p className="text-gray-300 mb-6 leading-relaxed">
                      {service.description}
                    </p>
                    
                    <ul className="space-y-3 mb-8">
                      {service.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center text-gray-300">
                          <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                          <span className="text-sm">{feature}</span>
                        </li>
                      ))}
                    </ul>
                    
                    <div className="flex items-center justify-between mb-6">
                      <span className="text-2xl font-bold text-white">{service.pricing}</span>
                      <Link
                        to="/contact"
                        className="text-blue-400 hover:text-blue-300 font-semibold flex items-center group"
                      >
                        Learn More
                        <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                      </Link>
                    </div>
                    
                    <Link
                      to="/contact"
                      className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold py-3 px-6 rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-300 text-center block"
                    >
                      Get Started
                    </Link>
                  </div>
                ))}
              </div>
            </div>

            {/* CTA Section */}
            <div className="text-center bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 sm:p-12">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-6">
                Ready to Modernize Your IT Infrastructure?
              </h2>
              <p className="text-lg text-blue-100 mb-8 max-w-2xl mx-auto">
                Let our expert team help you transform your technology stack and accelerate your digital journey.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  to="/contact"
                  className="bg-white text-blue-600 font-semibold px-8 py-4 rounded-lg hover:bg-gray-100 transition-colors"
                >
                  Start Your IT Transformation
                </Link>
                <Link
                  to="/ai-services"
                  className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition-colors"
                >
                  Explore AI Solutions
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default ITServicesPage;