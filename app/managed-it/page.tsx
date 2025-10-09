'use client';
import React from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { Shield, Monitor, Clock, Users, CheckCircle, ArrowRight, Star, Award, BarChart, Zap } from 'lucide-react';

const ManagedITPage: React.FC = () => {
  const features = [
    {
      icon: Shield,
      title: '24/7 Security Monitoring',
      description: 'Round-the-clock security monitoring and threat detection to protect your business.'
    },
    {
      icon: Monitor,
      title: 'Proactive Monitoring',
      description: 'Continuous monitoring of systems, networks, and applications to prevent issues.'
    },
    {
      icon: Clock,
      title: 'Rapid Response',
      description: 'Quick response times with guaranteed service level agreements and resolution times.'
    },
    {
      icon: Users,
      title: 'Dedicated Team',
      description: 'Access to a team of certified IT professionals dedicated to your success.'
    }
  ];

  const services = [
    {
      title: 'Help Desk Support',
      description: '24/7 technical support for all your IT needs and user issues.',
      icon: '🎧'
    },
    {
      title: 'Network Management',
      description: 'Complete network administration, monitoring, and optimization services.',
      icon: '🌐'
    },
    {
      title: 'Server Management',
      description: 'Comprehensive server administration, maintenance, and performance optimization.',
      icon: '🖥️'
    },
    {
      title: 'Security Services',
      description: 'Cybersecurity monitoring, threat detection, and incident response.',
      icon: '🔒'
    },
    {
      title: 'Backup & Recovery',
      description: 'Automated backup solutions and disaster recovery planning.',
      icon: '💾'
    },
    {
      title: 'Software Management',
      description: 'Software licensing, updates, and patch management across all systems.',
      icon: '📦'
    }
  ];

  const benefits = [
    'Reduce IT costs by up to 40%',
    'Improve system reliability and uptime',
    'Enhance security posture and compliance',
    'Scale IT resources as business grows',
    'Access to latest technology and expertise',
    'Focus on core business activities'
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
                Managed IT Services
              </h1>
              <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
                Complete IT management solutions to keep your business running smoothly. 
                From 24/7 monitoring to proactive maintenance, we handle all your IT needs.
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
                <div className="text-gray-300">Uptime SLA</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-cyan-400 mb-2">40%</div>
                <div className="text-gray-300">Cost Reduction</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-cyan-400 mb-2">15min</div>
                <div className="text-gray-300">Response Time</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-cyan-400 mb-2">24/7</div>
                <div className="text-gray-300">Support</div>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 px-4">
          <div className="container mx-auto max-w-7xl">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-6">Comprehensive Managed IT</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Our managed IT services provide complete coverage of your technology infrastructure 
                with proactive monitoring, maintenance, and support.
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
              <h2 className="text-4xl font-bold text-white mb-6">Managed IT Services</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                From help desk support to security management, we provide comprehensive 
                IT services to keep your business running smoothly.
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
                <h2 className="text-4xl font-bold text-white mb-6">Why Choose Our Managed IT?</h2>
                <p className="text-xl text-gray-300 mb-8">
                  Our managed IT services deliver reliable, secure, and cost-effective 
                  technology management that allows you to focus on your core business.
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
            <h2 className="text-4xl font-bold text-white mb-6">Focus on Your Business, Not IT</h2>
            <p className="text-xl text-gray-300 mb-8">
              Let us handle your IT infrastructure so you can focus on growing your business.
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

export default ManagedITPage;