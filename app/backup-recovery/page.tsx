'use client';
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { CheckCircle, ArrowRight, Phone, Mail, MapPin, Zap, Shield, Brain, Globe, Database, Clock, Cloud } from 'lucide-react';

const BackupRecoveryPage: React.FC = () => {
  const features = [
    {
      icon: Database,
      title: 'Automated Backups',
      description: 'Automated backup solutions that ensure your data is always protected and up-to-date'
    },
    {
      icon: Clock,
      title: 'Real-time Recovery',
      description: 'Fast recovery times with minimal data loss to keep your business running'
    },
    {
      icon: Shield,
      title: 'Enterprise Security',
      description: 'Bank-level security with encryption and compliance standards for your data'
    },
    {
      icon: Cloud,
      title: 'Cloud Storage',
      description: 'Secure cloud storage solutions with global redundancy and accessibility'
    }
  ];

  const benefits = [
    'Automated backup scheduling',
    'Real-time data protection',
    'Enterprise-grade security and compliance',
    'Scalable and flexible solutions',
    '24/7 technical support',
    'Easy integration with existing systems',
    'Cost-effective pricing plans',
    'Proven track record of success'
  ];

  const services = [
    {
      title: 'Data Backup Services',
      description: 'Comprehensive backup solutions for all your critical data',
      price: 'Starting at $99/month',
      features: ['Automated backups', 'Multiple storage locations', 'Encryption', 'Monitoring']
    },
    {
      title: 'Disaster Recovery',
      description: 'Complete disaster recovery planning and implementation',
      price: 'Starting at $299/month',
      features: ['Recovery planning', 'Testing', 'Documentation', 'Support']
    },
    {
      title: 'Cloud Migration',
      description: 'Seamless migration of your data to secure cloud platforms',
      price: 'Starting at $199/month',
      features: ['Migration planning', 'Data transfer', 'Validation', 'Optimization']
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
        <title>Backup & Recovery Services | Zion Tech Group</title>
        <meta name="description" content="Professional backup and recovery services by Zion Tech Group. Protect your data with automated backups and disaster recovery solutions." />
        <meta name="keywords" content="backup recovery, data protection, disaster recovery, cloud backup, Zion Tech Group" />
      </Helmet>

      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
            Backup & Recovery Services
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Protect your critical data with our comprehensive backup and recovery solutions. 
            Ensure business continuity with automated backups and disaster recovery planning.
          </p>
        </div>
      </section>

      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center">
                <feature.icon className="w-12 h-12 text-purple-400 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-white mb-2">{feature.title}</h3>
                <p className="text-gray-300">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 px-4 bg-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-white mb-6">
              Our Backup & Recovery Services
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Comprehensive data protection solutions designed for modern businesses
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
                <h3 className="text-xl font-semibold text-white mb-3">{service.title}</h3>
                <p className="text-gray-300 mb-4">{service.description}</p>
                <div className="text-2xl font-bold text-purple-400 mb-4">{service.price}</div>
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm text-gray-300">
                      <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <button className="w-full bg-purple-600 hover:bg-purple-700 text-white font-semibold py-2 px-4 rounded-lg transition-colors">
                  Learn More
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-white mb-6">
              Why Choose Our Backup Solutions?
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Experience the benefits of our comprehensive data protection services
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-4">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-center space-x-3">
                  <CheckCircle className="w-6 h-6 text-green-400 flex-shrink-0" />
                  <span className="text-gray-300">{benefit}</span>
                </div>
              ))}
            </div>
            <div className="bg-gradient-to-r from-purple-600 to-blue-600 rounded-xl p-8">
              <h3 className="text-2xl font-bold text-white mb-4">Get Started Today</h3>
              <p className="text-purple-100 mb-6">
                Contact our experts to discuss your backup and recovery needs and get a customized solution.
              </p>
              <button className="bg-white text-purple-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-300 flex items-center">
                Contact Us
                <ArrowRight className="ml-2 h-5 w-5" />
              </button>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Ready to Protect Your Data?
          </h2>
          <p className="text-xl text-purple-100 mb-8">
            Don't wait for a disaster. Get started with our backup and recovery solutions today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-purple-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-300 flex items-center justify-center">
              <Phone className="mr-2 h-5 w-5" />
              Call Now
            </button>
            <button className="border border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-purple-600 transition-all duration-300 flex items-center justify-center">
              <Mail className="mr-2 h-5 w-5" />
              Email Us
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default BackupRecoveryPage;