'use client';
import React from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { Server, Shield, Settings, Monitor, CheckCircle, ArrowRight, Star, Users, Award, Zap } from 'lucide-react';

const SystemAdminPage: React.FC = () => {
  const features = [
    {
      icon: Server,
      title: 'Server Management',
      description: 'Comprehensive server administration including monitoring, maintenance, and optimization.'
    },
    {
      icon: Shield,
      title: 'Security Administration',
      description: 'Implement and maintain security policies, access controls, and threat protection.'
    },
    {
      icon: Settings,
      title: 'System Configuration',
      description: 'Configure and optimize system settings for maximum performance and reliability.'
    },
    {
      icon: Monitor,
      title: 'Performance Monitoring',
      description: 'Real-time monitoring of system performance, resources, and health metrics.'
    }
  ];

  const services = [
    {
      title: 'Windows Server Administration',
      description: 'Complete Windows Server management including Active Directory, Exchange, and SQL Server.',
      icon: '🪟'
    },
    {
      title: 'Linux System Administration',
      description: 'Ubuntu, CentOS, RHEL, and other Linux distributions management and optimization.',
      icon: '🐧'
    },
    {
      title: 'Cloud Infrastructure',
      description: 'AWS, Azure, and Google Cloud platform administration and migration services.',
      icon: '☁️'
    },
    {
      title: 'Database Administration',
      description: 'SQL Server, MySQL, PostgreSQL, and Oracle database management and optimization.',
      icon: '🗄️'
    },
    {
      title: 'Network Administration',
      description: 'Cisco, Juniper, and other network equipment configuration and management.',
      icon: '🌐'
    },
    {
      title: 'Backup & Recovery',
      description: 'Comprehensive backup strategies and disaster recovery planning and implementation.',
      icon: '💾'
    }
  ];

  const benefits = [
    'Ensure 99.9% system uptime and reliability',
    'Reduce system maintenance costs by 40%',
    'Improve security posture and compliance',
    'Optimize system performance and efficiency',
    'Provide 24/7 monitoring and support',
    'Scale infrastructure as business grows'
  ];

  return (
    <>
      <Navigation />
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
        <section className="relative py-20 px-4">
          <div className="container mx-auto max-w-7xl">
            <div className="text-center mb-16">
              <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 neon-text">
                System Administration
              </h1>
              <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
                Expert system administration services to keep your infrastructure running smoothly. 
                From server management to security, we ensure optimal performance and reliability.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="cyber-button px-8 py-4 text-lg">
                  Get Started
                  <ArrowRight className="w-5 h-5 ml-2" />
                </button>
                <button className="border border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg hover:bg-cyan-400/10 transition-colors">
                  Request Quote
                </button>
              </div>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
              <div className="text-center">
                <div className="text-4xl font-bold text-cyan-400 mb-2">99.9%</div>
                <div className="text-gray-300">Uptime Guarantee</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-cyan-400 mb-2">40%</div>
                <div className="text-gray-300">Cost Reduction</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-cyan-400 mb-2">24/7</div>
                <div className="text-gray-300">Monitoring</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-cyan-400 mb-2">15min</div>
                <div className="text-gray-300">Response Time</div>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 px-4">
          <div className="container mx-auto max-w-7xl">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-6">Comprehensive System Administration</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Our certified system administrators provide expert management of your IT infrastructure 
                with proactive monitoring and maintenance.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {features.map((feature, index) => (
                <div key={index} className="bg-slate-800/50 rounded-xl p-6 hover:bg-slate-800/70 transition-colors">
                  <div className="w-12 h-12 bg-cyan-500/20 rounded-lg flex items-center justify-center mb-4">
                    <feature.icon className="w-6 h-6 text-cyan-400" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
                  <p className="text-gray-300">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="py-20 px-4 bg-slate-800/30">
          <div className="container mx-auto max-w-7xl">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-6">System Administration Services</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                From Windows to Linux, cloud to on-premise, we provide comprehensive 
                system administration across all platforms and technologies.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((service, index) => (
                <div key={index} className="bg-slate-900/50 rounded-xl p-6 hover:bg-slate-900/70 transition-colors">
                  <div className="text-4xl mb-4">{service.icon}</div>
                  <h3 className="text-xl font-semibold text-white mb-3">{service.title}</h3>
                  <p className="text-gray-300">{service.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-20 px-4">
          <div className="container mx-auto max-w-7xl">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div>
                <h2 className="text-4xl font-bold text-white mb-6">Why Choose Our System Administration?</h2>
                <p className="text-xl text-gray-300 mb-8">
                  Our experienced system administrators deliver reliable, secure, and efficient 
                  infrastructure management that keeps your business running smoothly.
                </p>
                <div className="space-y-4">
                  {benefits.map((benefit, index) => (
                    <div key={index} className="flex items-center space-x-3">
                      <CheckCircle className="w-6 h-6 text-cyan-400 flex-shrink-0" />
                      <span className="text-gray-300">{benefit}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="bg-gradient-to-br from-cyan-500/20 to-purple-500/20 rounded-2xl p-8">
                <h3 className="text-2xl font-bold text-white mb-6">Service Level Agreement</h3>
                <div className="space-y-4">
                  <div className="flex justify-between">
                    <span className="text-gray-300">Uptime Guarantee:</span>
                    <span className="text-green-400 font-semibold">99.9%</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-300">Response Time:</span>
                    <span className="text-green-400 font-semibold">15 minutes</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-300">Resolution Time:</span>
                    <span className="text-green-400 font-semibold">4 hours</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-300">Support Coverage:</span>
                    <span className="text-green-400 font-semibold">24/7/365</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4 bg-gradient-to-r from-cyan-600/20 to-purple-600/20">
          <div className="container mx-auto max-w-4xl text-center">
            <h2 className="text-4xl font-bold text-white mb-6">Keep Your Systems Running Smoothly</h2>
            <p className="text-xl text-gray-300 mb-8">
              Partner with our expert system administrators for reliable, secure, and efficient infrastructure management.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="cyber-button px-8 py-4 text-lg">
                Get Started
                <ArrowRight className="w-5 h-5 ml-2" />
              </button>
              <button className="border border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg hover:bg-cyan-400/10 transition-colors">
                Schedule Consultation
              </button>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </>
  );
};

export default SystemAdminPage;