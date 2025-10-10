'use client';
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Smartphone, Code, Zap, Shield, Users, BarChart, CheckCircle, ArrowRight, Globe, Database, Cloud, Wifi } from 'lucide-react';

export default function AIMobileDevelopmentPage() {
  const features = [
    {
      icon: Smartphone,
      title: 'Cross-Platform Development',
      description: 'Native iOS and Android apps with shared codebase for faster development'
    },
    {
      icon: Code,
      title: 'AI-Powered Development',
      description: 'Intelligent code generation and optimization using advanced AI tools'
    },
    {
      icon: Zap,
      title: 'High Performance',
      description: 'Optimized apps with lightning-fast performance and smooth user experience'
    },
    {
      icon: Shield,
      title: 'Enterprise Security',
      description: 'Bank-level security with encryption and secure authentication'
    }
  ];

  const services = [
    {
      title: 'Native Mobile Apps',
      description: 'Custom iOS and Android applications built with latest technologies',
      icon: Smartphone
    },
    {
      title: 'React Native Development',
      description: 'Cross-platform mobile apps using React Native framework',
      icon: Code
    },
    {
      title: 'Flutter Development',
      description: 'Beautiful, fast mobile apps using Google\'s Flutter framework',
      icon: Zap
    },
    {
      title: 'Progressive Web Apps',
      description: 'Web applications that work like native mobile apps',
      icon: Globe
    },
    {
      title: 'Mobile Backend Services',
      description: 'Scalable backend infrastructure for mobile applications',
      icon: Cloud
    },
    {
      title: 'App Store Optimization',
      description: 'Complete ASO strategy to maximize app visibility and downloads',
      icon: BarChart
    }
  ];

  const technologies = [
    'React Native', 'Flutter', 'Swift', 'Kotlin', 'JavaScript', 'TypeScript',
    'Node.js', 'Firebase', 'AWS', 'Google Cloud', 'MongoDB', 'PostgreSQL'
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
        <title>AI Mobile Development - Zion Tech Group</title>
        <meta name="description" content="Professional mobile app development services with AI-powered tools. iOS, Android, React Native, and Flutter development." />
      </Helmet>

      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 to-purple-500/20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              AI Mobile Development
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Cutting-edge mobile applications powered by AI for iOS, Android, and cross-platform development
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-cyan-500 to-purple-500 text-white px-8 py-3 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-600 transition-all duration-300">
                Start Your Project
              </button>
              <button className="border border-cyan-500 text-cyan-400 px-8 py-3 rounded-lg font-semibold hover:bg-cyan-500/10 transition-all duration-300">
                View Portfolio
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Why Choose Our Mobile Development?
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              We combine AI-powered development tools with expert craftsmanship to deliver exceptional mobile experiences
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-white/10 hover:border-cyan-500/50 transition-all duration-300">
                <div className="flex items-center mb-4">
                  <feature.icon className="w-8 h-8 text-cyan-400 mr-3" />
                  <h3 className="text-xl font-semibold text-white">{feature.title}</h3>
                </div>
                <p className="text-gray-300">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Services Section */}
      <div className="py-20 bg-slate-800/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Our Mobile Development Services
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              End-to-end mobile app development from concept to deployment
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-white/10 hover:border-blue-500/50 transition-all duration-300 group">
                <div className="flex items-center mb-4">
                  <service.icon className="w-8 h-8 text-blue-400 mr-3 group-hover:text-blue-300" />
                  <h3 className="text-xl font-semibold text-white">{service.title}</h3>
                </div>
                <p className="text-gray-300 mb-4">{service.description}</p>
                <div className="flex items-center text-blue-400 group-hover:text-blue-300">
                  <span className="text-sm font-medium">Learn More</span>
                  <ArrowRight className="w-4 h-4 ml-2" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Technologies Section */}
      <div className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Technologies We Use
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Modern technologies and frameworks for building exceptional mobile applications
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {technologies.map((tech, index) => (
              <div key={index} className="bg-slate-800/50 backdrop-blur-sm rounded-lg p-4 text-center border border-white/10 hover:border-cyan-500/50 transition-all duration-300">
                <span className="text-white font-medium">{tech}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="py-20 bg-slate-800/30">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Build Your Mobile App?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Let's discuss your mobile app idea and create something amazing together
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-gradient-to-r from-cyan-500 to-purple-500 text-white px-8 py-3 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-600 transition-all duration-300">
              Get Free Consultation
            </button>
            <button className="border border-cyan-500 text-cyan-400 px-8 py-3 rounded-lg font-semibold hover:bg-cyan-500/10 transition-all duration-300">
              View Our Work
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}