'use client';
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { Box, Users, Zap, CheckCircle, ArrowRight, Star, Award, Brain, BarChart, Target, Settings, Smartphone, Globe, Database, Server, Mail, Phone, MapPin, Eye, Layers, Monitor, Camera, Video, Mic, Headphones, Wifi, Bluetooth, Battery, Cpu, MemoryStick, HardDrive } from 'lucide-react';

const AiHolographicWorkspacePage: React.FC = () => {
  const features = [
    {
      icon: <Box className="w-8 h-8 text-cyan-400" />,
      title: '3D Holographic Displays',
      description: 'Immersive 3D holographic interfaces for enhanced productivity and collaboration',
      benefits: ['360° viewing angles', 'Gesture controls', 'Multi-user support', 'Real-time rendering']
    },
    {
      icon: <Users className="w-8 h-8 text-purple-400" />,
      title: 'Virtual Collaboration',
      description: 'AI-powered virtual meeting spaces with holographic avatars and shared workspaces',
      benefits: ['Holographic avatars', 'Shared 3D spaces', 'Real-time interaction', 'Spatial audio']
    },
    {
      icon: <Zap className="w-8 h-8 text-green-400" />,
      title: 'AI-Powered Interface',
      description: 'Intelligent holographic interface that adapts to user behavior and preferences',
      benefits: ['Adaptive layouts', 'Voice commands', 'Eye tracking', 'Predictive actions']
    },
    {
      icon: <Eye className="w-8 h-8 text-red-400" />,
      title: 'Mixed Reality Integration',
      description: 'Seamless integration with AR/VR devices for complete immersive experience',
      benefits: ['AR overlay', 'VR compatibility', 'Hand tracking', 'Spatial mapping']
    }
  ];

  const workspaceFeatures = [
    {
      title: 'Holographic Design Studio',
      description: '3D design and modeling in immersive holographic environment',
      price: '$2,999/month',
      features: ['3D modeling tools', 'Holographic preview', 'Collaborative design', 'Real-time rendering']
    },
    {
      title: 'Virtual Conference Room',
      description: 'Holographic meeting spaces for remote collaboration',
      price: '$1,999/month',
      features: ['Holographic avatars', 'Shared whiteboards', 'Document sharing', 'Recording capabilities']
    },
    {
      title: 'Training Simulator',
      description: 'Immersive training environments for complex procedures',
      price: '$3,999/month',
      features: ['Realistic simulations', 'Haptic feedback', 'Progress tracking', 'Multi-user training']
    },
    {
      title: 'Data Visualization Hub',
      description: 'Interactive 3D data visualization and analytics',
      price: '$2,499/month',
      features: ['3D charts', 'Interactive dashboards', 'Real-time updates', 'Collaborative analysis']
    }
  ];

  const stats = [
    { number: '500+', label: 'Holographic Workspaces', icon: <Box className="w-6 h-6 text-cyan-400" /> },
    { number: '95%', label: 'User Satisfaction', icon: <Star className="w-6 h-6 text-green-400" /> },
    { number: '10x', label: 'Productivity Increase', icon: <Zap className="w-6 h-6 text-purple-400" /> },
    { number: '24/7', label: 'AI Support', icon: <Brain className="w-6 h-6 text-red-400" /> }
  ];

  return (
    <>
      <Helmet>
        <title>AI Holographic Workspace - Zion Tech Group | Immersive 3D Collaboration Platform</title>
        <meta name="description" content="Revolutionize your workspace with AI-powered holographic technology. 3D displays, virtual collaboration, mixed reality integration, and immersive productivity tools." />
        <meta name="keywords" content="holographic workspace, 3D collaboration, mixed reality, virtual workspace, AI interface, immersive technology" />
        <link rel="canonical" href="https://ziontechgroup.com/ai-holographic-workspace" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-indigo-900 to-slate-900">
        {/* Hero Section */}
        <section className="relative py-20 px-4 overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(99,102,241,0.4)_0%,transparent_50%)] animate-pulse" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(168,85,247,0.4)_0%,transparent_50%)] animate-pulse" style={{ animationDelay: '1s' }} />
          
          <div className="relative max-w-7xl mx-auto text-center">
            <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-indigo-500/20 to-purple-500/20 text-indigo-400 px-6 py-3 rounded-full text-sm font-medium mb-8 border border-indigo-400/30">
              <Box className="w-4 h-4" />
              <span>Holographic Technology</span>
            </div>
            
            <h1 className="text-4xl sm:text-6xl md:text-7xl font-bold text-white mb-8 leading-tight">
              AI Holographic{' '}
              <span className="bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                Workspace
              </span>
            </h1>
            
            <p className="text-lg sm:text-xl md:text-2xl text-gray-300 mb-12 max-w-4xl mx-auto leading-relaxed">
              Step into the future of work with AI-powered holographic workspaces. Immersive 3D collaboration, 
              virtual meetings, and mixed reality integration that transforms how teams work together.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Link 
                to="/contact" 
                className="group bg-gradient-to-r from-indigo-500 to-purple-600 text-white px-10 py-4 rounded-xl font-semibold hover:from-indigo-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center space-x-2 shadow-lg shadow-indigo-500/25 hover:shadow-indigo-500/40 transform hover:scale-105"
              >
                <span>Experience the Future</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link 
                to="/demo" 
                className="group border-2 border-indigo-400 text-indigo-400 px-10 py-4 rounded-xl font-semibold hover:bg-indigo-400 hover:text-gray-900 transition-all duration-300 flex items-center justify-center space-x-2 backdrop-blur-sm"
              >
                <span>View Holographic Demo</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-20 px-4 relative">
          <div className="absolute inset-0 bg-gradient-to-r from-indigo-500/5 to-purple-500/5" />
          <div className="relative max-w-7xl mx-auto">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <div key={index} className="text-center bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:bg-white/10 transition-all duration-300">
                  <div className="flex justify-center mb-4">
                    {stat.icon}
                  </div>
                  <div className="text-3xl md:text-4xl font-bold text-white mb-2">
                    {stat.number}
                  </div>
                  <div className="text-gray-300 text-sm">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 px-4 relative">
          <div className="relative max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Immersive <span className="bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">Features</span>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Revolutionary holographic technology that transforms how you work and collaborate
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {features.map((feature, index) => (
                <div key={index} className="group bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-indigo-500/10">
                  <div className="flex items-center justify-center w-16 h-16 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-2xl mb-6 group-hover:scale-110 transition-transform duration-300">
                    {feature.icon}
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-indigo-400 transition-colors">
                    {feature.title}
                  </h3>
                  <p className="text-gray-300 mb-6 leading-relaxed">
                    {feature.description}
                  </p>
                  <div className="space-y-2">
                    {feature.benefits.map((benefit, benefitIndex) => (
                      <div key={benefitIndex} className="flex items-center space-x-2 text-gray-400 text-sm">
                        <CheckCircle className="w-4 h-4 text-green-400" />
                        <span>{benefit}</span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Workspace Features Section */}
        <section className="py-20 px-4 relative">
          <div className="relative max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Holographic <span className="bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">Workspaces</span>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Specialized holographic environments for different business needs
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {workspaceFeatures.map((workspace, index) => (
                <div key={index} className="group bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-indigo-500/10">
                  <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-indigo-400 transition-colors">
                    {workspace.title}
                  </h3>
                  <p className="text-gray-300 mb-6 leading-relaxed">
                    {workspace.description}
                  </p>
                  <div className="text-3xl font-bold text-indigo-400 mb-6">
                    {workspace.price}
                  </div>
                  <div className="space-y-3 mb-6">
                    {workspace.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center space-x-2 text-gray-300 text-sm">
                        <CheckCircle className="w-4 h-4 text-green-400" />
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>
                  <Link 
                    to="/contact"
                    className="w-full block text-center py-3 px-6 bg-gradient-to-r from-indigo-500 to-purple-600 text-white rounded-lg font-semibold hover:from-indigo-600 hover:to-purple-700 transition-all duration-300"
                  >
                    Get Started
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="bg-gradient-to-r from-indigo-900/50 to-purple-900/50 backdrop-blur-sm border border-indigo-500/20 rounded-2xl p-12 text-center relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-indigo-500/5 to-purple-500/5"></div>
              <div className="relative z-10">
                <h2 className="text-4xl font-bold text-white mb-6">
                  Ready to Work in the Future?
                </h2>
                <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
                  Transform your workspace with cutting-edge holographic technology that revolutionizes collaboration and productivity.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link 
                    to="/contact"
                    className="bg-gradient-to-r from-indigo-500 to-purple-500 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:from-indigo-600 hover:to-purple-600 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-indigo-500/25"
                  >
                    Experience Holographic Workspace
                  </Link>
                  <a
                    href="tel:+13024640950"
                    className="border border-indigo-500 text-indigo-400 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-indigo-500/10 transition-all duration-300 transform hover:scale-105"
                  >
                    Call +1 302 464 0950
                  </a>
                </div>
                <div className="mt-8 text-gray-400">
                  <p>Email: kleber@ziontechgroup.com</p>
                  <p>Address: 364 E Main St STE 1008, Middletown DE 19709</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default AiHolographicWorkspacePage;