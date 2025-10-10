'use client';
import React from 'react';
import { Helmet } from 'react-helmet-async';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { CheckCircle, Zap, Cpu, Wifi, Shield, BarChart, ArrowRight } from 'lucide-react';

const IoTPlatformPage: React.FC = () => {
  const features = [
    {
      icon: Cpu,
      title: 'Device Management',
      description: 'Comprehensive IoT device management and monitoring platform.',
      benefits: ['Device provisioning', 'Remote updates', 'Health monitoring']
    },
    {
      icon: Wifi,
      title: 'Connectivity Solutions',
      description: 'Secure and reliable connectivity for IoT devices across various protocols.',
      benefits: ['Multiple protocols', 'Secure connections', 'Global coverage']
    },
    {
      icon: BarChart,
      title: 'Data Analytics',
      description: 'Real-time analytics and insights from IoT device data.',
      benefits: ['Real-time processing', 'Predictive analytics', 'Custom dashboards']
    },
    {
      icon: Shield,
      title: 'Security & Compliance',
      description: 'Enterprise-grade security for IoT devices and data.',
      benefits: ['Device authentication', 'Data encryption', 'Compliance ready']
    },
    {
      icon: Zap,
      title: 'Edge Computing',
      description: 'Process data at the edge for faster response times and reduced latency.',
      benefits: ['Low latency', 'Offline capability', 'Reduced bandwidth']
    },
    {
      icon: BarChart,
      title: 'Integration APIs',
      description: 'Easy integration with existing systems and third-party services.',
      benefits: ['REST APIs', 'Webhooks', 'SDK support']
    }
  ];

  const benefits = [
    'Reduce operational costs by 50%',
    'Improve device uptime by 95%',
    'Enable real-time monitoring',
    'Scale to millions of devices',
    'Ensure data security',
    'Accelerate time to market'
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
        <title>IoT Platform Solutions | Zion Tech Group</title>
        <meta name="description" content="Comprehensive IoT platform solutions. Device management, connectivity, analytics, and security for IoT deployments at scale." />
        <meta name="keywords" content="IoT platform, device management, IoT connectivity, IoT analytics, edge computing, Zion Tech Group" />
      </Helmet>

      <Navigation />

      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
                IoT Platform
              </span>
              <br />
              <span className="text-white">Solutions</span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Build, deploy, and manage IoT solutions at scale with our comprehensive platform. 
              Connect, monitor, and analyze your devices with enterprise-grade security.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-purple-500 to-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-purple-600 hover:to-blue-700 transition-all duration-300 flex items-center">
                Get Started
                <ArrowRight className="ml-2 h-5 w-5" />
              </button>
              <button className="border border-purple-400 text-purple-400 hover:bg-purple-400 hover:text-white font-bold py-4 px-8 rounded-lg transition-all duration-300">
                Learn More
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              IoT Platform Capabilities
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our IoT platform provides everything you need to build, deploy, 
              and manage IoT solutions at enterprise scale.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300">
                <div className="flex items-center mb-4">
                  <feature.icon className="h-8 w-8 text-purple-400 mr-3" />
                  <h3 className="text-xl font-semibold text-white">{feature.title}</h3>
                </div>
                <p className="text-gray-300 mb-4">{feature.description}</p>
                <ul className="space-y-2">
                  {feature.benefits.map((benefit, benefitIndex) => (
                    <li key={benefitIndex} className="flex items-center text-sm text-gray-300">
                      <CheckCircle className="h-4 w-4 text-green-400 mr-2 flex-shrink-0" />
                      {benefit}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 px-4 bg-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Why Choose Our IoT Platform?
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Built for scale, security, and performance to support your IoT initiatives 
              from prototype to production.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefits.map((benefit, index) => (
              <div key={index} className="flex items-center bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20">
                <CheckCircle className="h-6 w-6 text-green-400 mr-3 flex-shrink-0" />
                <span className="text-white font-medium">{benefit}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Build Your IoT Solution?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Let our IoT experts help you design and deploy a scalable, 
            secure IoT platform for your business needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-gradient-to-r from-purple-500 to-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-purple-600 hover:to-blue-700 transition-all duration-300">
              Schedule Consultation
            </button>
              <button className="border border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-gray-900 transition-all duration-300">
              Download Guide
            </button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default IoTPlatformPage;