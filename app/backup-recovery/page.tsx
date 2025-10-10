// Preload hint: react
// Preload hint: react
'use client';
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { CheckCircle, ArrowRight, Phone, Mail, MapPin, Zap, Shield, Brain, Globe, Database, Clock, ShieldCheck } from 'lucide-react';

const BackupRecoveryPage: React.FC = React.memo((props) => {
  const features = [
    {
<<<<<<< HEAD
      icon: Shield,
      title: 'Secure Backup Solutions',
      description: 'Advanced encryption and secure storage for your critical business data'
    },
    {
      icon: Zap,
      title: 'Fast Recovery',
      description: 'Lightning-fast data recovery with minimal downtime for your business'
    },
    {
      icon: Brain,
      title: 'AI-Powered Monitoring',
      description: 'Intelligent monitoring and automated backup scheduling'
    },
    {
      icon: Globe,
      title: 'Global Redundancy',
      description: 'Worldwide backup storage with multiple redundancy layers'
=======
      icon: Database,
      title: 'Automated Backups',
      description: 'Automated backup solutions with intelligent scheduling and monitoring'
    },
    {
      icon: Clock,
      title: 'Fast Recovery',
      description: 'Quick data recovery with minimal downtime and maximum efficiency'
    },
    {
      icon: ShieldCheck,
      title: 'Data Security',
      description: 'Bank-level security with encryption and compliance standards'
    },
    {
      icon: Globe,
      title: 'Cloud Integration',
      description: 'Seamless cloud backup and recovery across multiple platforms'
>>>>>>> cursor/fix-errors-and-merge-to-main-46ce
    }
  ];

  const benefits = [
<<<<<<< HEAD
    'Advanced data protection and encryption',
    'Real-time backup monitoring and alerts',
=======
    'Automated backup scheduling',
    'Real-time data protection',
>>>>>>> cursor/fix-errors-and-merge-to-main-46ce
    'Enterprise-grade security and compliance',
    'Scalable and flexible backup solutions',
    '24/7 technical support',
    'Easy integration with existing systems',
    'Cost-effective pricing plans',
    'Proven track record of success'
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
        <title>Backup & Recovery | Zion Tech Group</title>
        <meta name="description" content="Professional Backup & Recovery services by Zion Tech Group. Advanced AI and IT solutions for your business." />
<<<<<<< HEAD
        <meta name="keywords" content="backup recovery, data protection, IT services, Zion Tech Group, disaster recovery" />
      </Helmet>

      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-white mb-6">
=======
        <meta name="keywords" content="backup recovery, data protection, disaster recovery, AI solutions, IT services, Zion Tech Group" />
      </Helmet>

      {/* Hero Section */}
      <section className="relative py-20 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
>>>>>>> cursor/fix-errors-and-merge-to-main-46ce
            Backup & Recovery
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Transform your business with our advanced backup and recovery solutions. 
            Powered by cutting-edge AI technology and industry expertise.
          </p>
<<<<<<< HEAD
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Our backup solutions deliver unmatched performance, security, and scalability.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {features.map((feature, index) => (
            <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center hover:bg-white/20 transition-all duration-300">
              <feature.icon className="h-12 w-12 text-purple-400 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
              <p className="text-gray-300">{feature.description}</p>
            </div>
          ))}
        </div>

        <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 mb-16">
          <h2 className="text-3xl font-bold text-white text-center mb-8">
            Why Choose Our Backup & Recovery Solutions?
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            {benefits.map((benefit, index) => (
              <div key={index} className="flex items-center space-x-3">
                <CheckCircle className="h-6 w-6 text-green-400 flex-shrink-0" />
                <span className="text-gray-300">{benefit}</span>
              </div>
            ))}
=======
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Why Choose Our Backup & Recovery?
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our backup and recovery solutions deliver unmatched performance, security, and scalability.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10">
                <feature.icon className="w-12 h-12 text-purple-400 mb-4" />
                <h3 className="text-xl font-semibold text-white mb-2">{feature.title}</h3>
                <p className="text-gray-300">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 px-4 bg-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Key Benefits
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Experience the power of our backup and recovery solutions for your business.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {benefits.map((benefit, index) => (
              <div key={index} className="flex items-center space-x-3">
                <CheckCircle className="w-6 h-6 text-green-400 flex-shrink-0" />
                <span className="text-gray-300">{benefit}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-purple-100 mb-8">
            Contact our experts to discuss your backup and recovery needs and get a customized solution.
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
>>>>>>> cursor/fix-errors-and-merge-to-main-46ce
          </div>
        </div>

        <div className="text-center">
          <h2 className="text-3xl font-bold text-white mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-purple-100 mb-8">
            Contact our experts to discuss your backup and recovery needs and get a customized solution.
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
      </div>
    </div>
  );
};

export default BackupRecoveryPage;