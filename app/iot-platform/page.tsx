'use client';
import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Wifi, Cpu, Shield, BarChart, Zap, ArrowRight, CheckCircle, Star, Users, Clock, TrendingUp, Database, Code, Smartphone, Settings, Lock, Globe, Home } from 'lucide-react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import SEOOptimizer from '../components/SEOOptimizer';

const IoTPlatformPage: React.FC = () => {
  const [selectedUseCase, setSelectedUseCase] = useState('smart-home');

  const useCases = [
    {
      id: 'smart-home',
      title: 'Smart Home',
      description: 'Connected home devices for automation and energy management',
      icon: Home,
      benefits: ['Energy efficiency', 'Automation', 'Remote control', 'Cost savings']
    },
    {
      id: 'industrial',
      title: 'Industrial IoT',
      description: 'Manufacturing and industrial automation solutions',
      icon: Cpu,
      benefits: ['Predictive maintenance', 'Process optimization', 'Quality control', 'Safety monitoring']
    },
    {
      id: 'agriculture',
      title: 'Smart Agriculture',
      description: 'Precision farming and crop monitoring systems',
      icon: Globe,
      benefits: ['Crop monitoring', 'Resource optimization', 'Yield prediction', 'Environmental control']
    },
    {
      id: 'healthcare',
      title: 'Healthcare IoT',
      description: 'Medical devices and patient monitoring systems',
      icon: Shield,
      benefits: ['Patient monitoring', 'Health tracking', 'Emergency alerts', 'Data analytics']
    }
  ];

  const capabilities = [
    {
      icon: Wifi,
      title: 'Device Connectivity',
      description: 'Secure connectivity for all types of IoT devices'
    },
    {
      icon: Database,
      title: 'Data Management',
      description: 'Real-time data collection, processing, and storage'
    },
    {
      icon: Code,
      title: 'API Integration',
      description: 'Seamless integration with existing systems and applications'
    },
    {
      icon: Smartphone,
      title: 'Mobile Apps',
      description: 'Mobile applications for device control and monitoring'
    },
    {
      icon: Settings,
      title: 'Device Management',
      description: 'Centralized management of all connected devices'
    },
    {
      icon: Globe,
      title: 'Global Deployment',
      description: 'Deploy and manage devices across multiple locations'
    }
  ];

  const benefits = [
    {
      icon: Zap,
      title: 'Real-time Monitoring',
      description: 'Monitor devices and data in real-time for better decisions'
    },
    {
      icon: TrendingUp,
      title: 'Improved Efficiency',
      description: 'Optimize operations and reduce costs by up to 40%'
    },
    {
      icon: Shield,
      title: 'Enhanced Security',
      description: 'End-to-end security for all connected devices and data'
    },
    {
      icon: Users,
      title: 'Better User Experience',
      description: 'Intuitive interfaces and seamless device interactions'
    }
  ];

  const stats = [
    { number: '99.9%', label: 'Uptime Guarantee', icon: Shield },
    { number: '50ms', label: 'Average Latency', icon: Zap },
    { number: '40%', label: 'Cost Reduction', icon: TrendingUp },
    { number: '24/7', label: 'Device Monitoring', icon: Clock }
  ];

  const selectedUseCaseData = useCases.find(useCase => useCase.id === selectedUseCase);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-violet-900">
      <SEOOptimizer
        title="IoT Platform Solutions - Zion Tech Group"
        description="Build and deploy IoT solutions with our comprehensive platform. Device connectivity, data management, and analytics for smart devices."
        keywords="IoT platform, Internet of Things, smart devices, device connectivity, data management, Zion Tech Group"
      />
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
            IoT <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">Platform</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
            Build and deploy IoT solutions with our comprehensive platform. Device connectivity, data management, and analytics for smart devices.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-gradient-to-r from-purple-500 to-blue-600 hover:from-purple-600 hover:to-blue-700 text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105">
              Get Started
              <ArrowRight className="inline-block ml-2 w-5 h-5" />
            </button>
            <button className="border border-purple-400 text-purple-400 hover:bg-purple-400 hover:text-white font-bold py-4 px-8 rounded-lg transition-all duration-300">
              View Demo
            </button>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-blue-600 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <stat.icon className="w-8 h-8 text-white" />
                </div>
                <div className="text-3xl font-bold text-white mb-2">{stat.number}</div>
                <div className="text-gray-300">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">IoT Use Cases</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Discover how IoT can transform your business across different industries.
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Use Case List */}
            <div className="space-y-4">
              {useCases.map((useCase) => (
                <div
                  key={useCase.id}
                  onClick={() => setSelectedUseCase(useCase.id)}
                  className={`p-6 rounded-xl cursor-pointer transition-all duration-300 ${
                    selectedUseCase === useCase.id
                      ? 'bg-purple-500/20 border-purple-500 border-2'
                      : 'bg-white/5 border border-white/10 hover:bg-white/10'
                  }`}
                >
                  <div className="flex items-center space-x-4">
                    <div className={`w-12 h-12 rounded-lg flex items-center justify-center ${
                      selectedUseCase === useCase.id
                        ? 'bg-purple-500'
                        : 'bg-gradient-to-r from-purple-500 to-blue-600'
                    }`}>
                      <useCase.icon className="w-6 h-6 text-white" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-lg font-semibold text-white mb-1">{useCase.title}</h3>
                      <p className="text-gray-300 text-sm">{useCase.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Use Case Details */}
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-8">
              <div className="text-center mb-6">
                <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-blue-600 rounded-lg mx-auto mb-4 flex items-center justify-center">
                  <selectedUseCaseData?.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-2">
                  {selectedUseCaseData?.title}
                </h3>
                <p className="text-gray-300">{selectedUseCaseData?.description}</p>
              </div>

              <div className="space-y-4">
                <h4 className="text-lg font-semibold text-white mb-3">Key Benefits:</h4>
                <ul className="space-y-2">
                  {selectedUseCaseData?.benefits.map((benefit, index) => (
                    <li key={index} className="flex items-center space-x-3">
                      <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
                      <span className="text-gray-300">{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Capabilities Section */}
      <section className="py-20 px-4 bg-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Platform Capabilities</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Comprehensive IoT platform capabilities for all your connected device needs.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {capabilities.map((capability, index) => (
              <div key={index} className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 text-center hover:bg-white/10 transition-all duration-300">
                <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-blue-600 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <capability.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{capability.title}</h3>
                <p className="text-gray-300">{capability.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Why Choose Our IoT Platform?</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Transform your business with our comprehensive IoT solutions.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 text-center hover:bg-white/10 transition-all duration-300">
                <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-blue-600 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <benefit.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{benefit.title}</h3>
                <p className="text-gray-300">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Architecture Section */}
      <section className="py-20 px-4 bg-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">IoT Platform Architecture</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our proven architecture ensures scalability, security, and performance.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: 'Device Layer',
                description: 'Connect and manage all types of IoT devices',
                features: ['Device onboarding', 'Firmware updates', 'Remote configuration', 'Health monitoring']
              },
              {
                title: 'Connectivity Layer',
                description: 'Secure communication between devices and platform',
                features: ['Multiple protocols', 'Data encryption', 'Message queuing', 'Load balancing']
              },
              {
                title: 'Application Layer',
                description: 'Business logic and user interfaces',
                features: ['Data analytics', 'User dashboards', 'API management', 'Third-party integrations']
              }
            ].map((layer, index) => (
              <div key={index} className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6">
                <h3 className="text-xl font-semibold text-white mb-4">{layer.title}</h3>
                <p className="text-gray-300 mb-4">{layer.description}</p>
                <ul className="space-y-2">
                  {layer.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center space-x-2">
                      <CheckCircle className="w-4 h-4 text-green-400 flex-shrink-0" />
                      <span className="text-gray-300 text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Ready to Build Your IoT Solution?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Let's discuss how our IoT platform can help you connect devices and unlock new opportunities.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-gradient-to-r from-purple-500 to-blue-600 hover:from-purple-600 hover:to-blue-700 text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105">
              Get Free Consultation
              <ArrowRight className="inline-block ml-2 w-5 h-5" />
            </button>
            <button className="border border-purple-400 text-purple-400 hover:bg-purple-400 hover:text-white font-bold py-4 px-8 rounded-lg transition-all duration-300">
              Schedule Demo
            </button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default IoTPlatformPage;