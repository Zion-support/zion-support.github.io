'use client';
import React from 'react';
import { Eye, Zap, Target, Brain, ArrowRight, CheckCircle, Star, Users, Shield, Clock } from 'lucide-react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

const ARVRSolutionsPage: React.FC = () => {
  const features = [
    {
      icon: Eye,
      title: 'Immersive Experiences',
      description: 'Create stunning AR/VR experiences that engage users and provide realistic virtual environments.',
      benefits: ['3D modeling', 'Real-time rendering', 'Interactive design']
    },
    {
      icon: Zap,
      title: 'Cross-Platform Development',
      description: 'Build applications that work seamlessly across multiple AR/VR platforms and devices.',
      benefits: ['Multi-platform support', 'Device optimization', 'Universal compatibility']
    },
    {
      icon: Target,
      title: 'Enterprise Solutions',
      description: 'Custom AR/VR solutions for training, simulation, and business applications.',
      benefits: ['Training simulations', 'Virtual meetings', 'Data visualization']
    },
    {
      icon: Brain,
      title: 'AI Integration',
      description: 'Combine AR/VR with artificial intelligence for intelligent and adaptive experiences.',
      benefits: ['AI-powered interactions', 'Smart object recognition', 'Predictive analytics']
    }
  ];

  const applications = [
    {
      title: 'Virtual Training',
      description: 'Immersive training simulations for employees and students.',
      icon: Users
    },
    {
      title: 'Virtual Meetings',
      description: 'Next-generation virtual meeting and collaboration spaces.',
      icon: Target
    },
    {
      title: 'Product Visualization',
      description: '3D product showcases and virtual showrooms.',
      icon: Eye
    },
    {
      title: 'Gaming & Entertainment',
      description: 'Interactive games and entertainment experiences.',
      icon: Zap
    }
  ];

  const stats = [
    { number: '50+', label: 'Projects Delivered' },
    { number: '95%', label: 'User Satisfaction' },
    { number: '10+', label: 'Platforms Supported' },
    { number: '24/7', label: 'Technical Support' }
  ];

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-20 pb-16 bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
              AR/VR Solutions
            </h1>
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              Immerse your audience in cutting-edge augmented and virtual reality experiences. 
              Our AR/VR solutions transform how people interact with digital content and each other.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="cyber-button inline-flex items-center">
                Get Started <ArrowRight className="ml-2 w-4 h-4" />
              </button>
              <button className="px-8 py-3 border border-cyan-400 text-cyan-400 rounded-lg hover:bg-cyan-400 hover:text-gray-900 transition-all">
                View Demo
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-gray-800">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl font-bold text-cyan-400 mb-2">{stat.number}</div>
                <div className="text-gray-300">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Immersive Technology Features</h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Our AR/VR solutions leverage the latest technology to create engaging, 
              interactive experiences that captivate users and drive business results.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12">
            {features.map((feature, index) => (
              <div key={index} className="cyber-card p-8">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-purple-600 to-blue-600 rounded-lg flex items-center justify-center mr-4">
                    <feature.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold">{feature.title}</h3>
                </div>
                <p className="text-gray-300 mb-6">{feature.description}</p>
                <ul className="space-y-2">
                  {feature.benefits.map((benefit, benefitIndex) => (
                    <li key={benefitIndex} className="flex items-center text-gray-300">
                      <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                      {benefit}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Applications Section */}
      <section className="py-20 bg-gray-800">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">AR/VR Applications</h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Discover the diverse applications of AR/VR technology across industries and use cases.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {applications.map((application, index) => (
              <div key={index} className="cyber-card p-6 text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-cyan-600 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <application.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-3">{application.title}</h3>
                <p className="text-gray-400">{application.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-purple-600 to-blue-600">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">Step Into the Future</h2>
          <p className="text-xl mb-8 text-purple-100">
            Ready to create immersive experiences that engage and inspire your audience?
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-purple-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-all">
              Start Project
            </button>
            <button className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-purple-600 transition-all">
              View Portfolio
            </button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ARVRSolutionsPage;