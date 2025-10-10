'use client';

import React from 'react';
import { ArrowRight, CheckCircle, Eye, Zap, Globe, Shield, Clock, BarChart, Users, Settings, Brain, Activity, Video, Headphones, Smartphone } from 'lucide-react';
import Navigation from '../../components/Navigation';
import Footer from '../../components/Footer';

const ARVRPlatformPage: React.FC = () => {
  const features = [
    {
      icon: Eye,
      title: "Immersive Experiences",
      description: "Create stunning AR/VR experiences with advanced 3D rendering and spatial computing"
    },
    {
      icon: Zap,
      title: "Real-time Rendering",
      description: "High-performance rendering engine optimized for smooth 60fps+ experiences"
    },
    {
      icon: Globe,
      title: "Cross-Platform",
      description: "Deploy across VR headsets, AR glasses, mobile devices, and web browsers"
    },
    {
      icon: Shield,
      title: "Secure & Private",
      description: "Enterprise-grade security with data privacy and user protection"
    },
    {
      icon: Clock,
      title: "Low Latency",
      description: "Ultra-low latency tracking and rendering for natural interactions"
    },
    {
      icon: BarChart,
      title: "Analytics Dashboard",
      description: "Comprehensive analytics and user behavior insights"
    }
  ];

  const useCases = [
    {
      title: "Virtual Training",
      description: "Immersive training simulations for healthcare, manufacturing, and education",
      icon: "🎓"
    },
    {
      title: "Remote Collaboration",
      description: "Virtual meeting spaces with shared 3D environments",
      icon: "🤝"
    },
    {
      title: "Product Visualization",
      description: "Interactive 3D product demos and virtual showrooms",
      icon: "🛍️"
    },
    {
      title: "Gaming & Entertainment",
      description: "Next-generation gaming experiences and virtual entertainment",
      icon: "🎮"
    }
  ];

  const platforms = [
    {
      name: "Meta Quest",
      icon: "🥽",
      supported: true
    },
    {
      name: "Apple Vision Pro",
      icon: "👁️",
      supported: true
    },
    {
      name: "HTC Vive",
      icon: "🎯",
      supported: true
    },
    {
      name: "Microsoft HoloLens",
      icon: "🔮",
      supported: true
    },
    {
      name: "iOS ARKit",
      icon: "📱",
      supported: true
    },
    {
      name: "Android ARCore",
      icon: "🤖",
      supported: true
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%239C92AC" fill-opacity="0.1"%3E%3Ccircle cx="30" cy="30" r="2"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-20"></div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
            AR/VR Development Platform
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
            Build immersive AR/VR experiences with advanced rendering, motion tracking, and haptic feedback. 
            Create the future of digital interaction.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
            <button className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-semibold py-4 px-8 rounded-xl hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 flex items-center">
              Start Building
              <ArrowRight className="w-5 h-5 ml-2" />
            </button>
            <button className="border-2 border-cyan-400 text-cyan-400 font-semibold py-4 px-8 rounded-xl hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300">
              View Demo
            </button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-cyan-400 mb-2">60+</div>
              <div className="text-gray-400">FPS Rendering</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-purple-400 mb-2">&lt;20ms</div>
              <div className="text-gray-400">Latency</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-pink-400 mb-2">6</div>
              <div className="text-gray-400">Platforms</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-green-400 mb-2">99.9%</div>
              <div className="text-gray-400">Uptime</div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-5xl font-bold text-white mb-6">Platform Features</h2>
            <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
              Advanced AR/VR development tools and capabilities for creating immersive experiences.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-slate-800/50 backdrop-blur-sm border border-cyan-400/20 rounded-xl p-8 hover:border-cyan-400/40 transition-all duration-300">
                <div className="text-center mb-6">
                  <div className="w-16 h-16 bg-gradient-to-r from-cyan-400 to-purple-600 rounded-xl flex items-center justify-center mx-auto mb-4">
                    <feature.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">{feature.title}</h3>
                  <p className="text-gray-300 leading-relaxed">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases Section */}
      <section className="py-24 bg-gradient-to-r from-purple-900/20 to-blue-900/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Industry Applications
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Transform your industry with immersive AR/VR solutions.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {useCases.map((useCase, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20">
                <div className="flex items-start space-x-4">
                  <div className="text-4xl">{useCase.icon}</div>
                  <div>
                    <h3 className="text-xl font-bold text-white mb-3">{useCase.title}</h3>
                    <p className="text-gray-300 leading-relaxed">{useCase.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Platform Support Section */}
      <section className="py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Supported Platforms
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Deploy your AR/VR experiences across all major platforms and devices.
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {platforms.map((platform, index) => (
              <div key={index} className="bg-slate-800/50 backdrop-blur-sm border border-gray-600 rounded-xl p-6 text-center hover:border-cyan-400/40 transition-all duration-300">
                <div className="text-4xl mb-4">{platform.icon}</div>
                <h3 className="text-white font-semibold mb-2">{platform.name}</h3>
                <div className="flex items-center justify-center">
                  <CheckCircle className="w-5 h-5 text-green-400 mr-2" />
                  <span className="text-green-400 text-sm">Supported</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-24 bg-gradient-to-r from-purple-900/20 to-blue-900/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Development Plans
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Choose the perfect plan for your AR/VR development needs.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-slate-800/50 backdrop-blur-sm border border-gray-600 rounded-xl p-8">
              <h3 className="text-2xl font-bold text-white mb-4">Developer</h3>
              <div className="text-4xl font-bold text-cyan-400 mb-6">$3,200/mo</div>
              <ul className="space-y-4 mb-8">
                <li className="flex items-center text-gray-300">
                  <CheckCircle className="w-5 h-5 text-cyan-400 mr-3" />
                  Basic AR/VR tools
                </li>
                <li className="flex items-center text-gray-300">
                  <CheckCircle className="w-5 h-5 text-cyan-400 mr-3" />
                  Up to 5 projects
                </li>
                <li className="flex items-center text-gray-300">
                  <CheckCircle className="w-5 h-5 text-cyan-400 mr-3" />
                  Standard support
                </li>
                <li className="flex items-center text-gray-300">
                  <CheckCircle className="w-5 h-5 text-cyan-400 mr-3" />
                  Community access
                </li>
              </ul>
              <button className="w-full bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-semibold py-3 px-6 rounded-lg hover:from-cyan-600 hover:to-purple-700 transition-all">
                Get Started
              </button>
            </div>

            <div className="bg-slate-800/50 backdrop-blur-sm border border-cyan-400 rounded-xl p-8 relative">
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                <span className="bg-gradient-to-r from-cyan-400 to-purple-600 text-white text-sm font-bold px-4 py-2 rounded-full">
                  Most Popular
                </span>
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Professional</h3>
              <div className="text-4xl font-bold text-cyan-400 mb-6">$6,500/mo</div>
              <ul className="space-y-4 mb-8">
                <li className="flex items-center text-gray-300">
                  <CheckCircle className="w-5 h-5 text-cyan-400 mr-3" />
                  Advanced AR/VR tools
                </li>
                <li className="flex items-center text-gray-300">
                  <CheckCircle className="w-5 h-5 text-cyan-400 mr-3" />
                  Unlimited projects
                </li>
                <li className="flex items-center text-gray-300">
                  <CheckCircle className="w-5 h-5 text-cyan-400 mr-3" />
                  Priority support
                </li>
                <li className="flex items-center text-gray-300">
                  <CheckCircle className="w-5 h-5 text-cyan-400 mr-3" />
                  Analytics dashboard
                </li>
                <li className="flex items-center text-gray-300">
                  <CheckCircle className="w-5 h-5 text-cyan-400 mr-3" />
                  Custom integrations
                </li>
              </ul>
              <button className="w-full bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-semibold py-3 px-6 rounded-lg hover:from-cyan-600 hover:to-purple-700 transition-all">
                Get Started
              </button>
            </div>

            <div className="bg-slate-800/50 backdrop-blur-sm border border-gray-600 rounded-xl p-8">
              <h3 className="text-2xl font-bold text-white mb-4">Enterprise</h3>
              <div className="text-4xl font-bold text-cyan-400 mb-6">Custom</div>
              <ul className="space-y-4 mb-8">
                <li className="flex items-center text-gray-300">
                  <CheckCircle className="w-5 h-5 text-cyan-400 mr-3" />
                  Full platform access
                </li>
                <li className="flex items-center text-gray-300">
                  <CheckCircle className="w-5 h-5 text-cyan-400 mr-3" />
                  White-label solutions
                </li>
                <li className="flex items-center text-gray-300">
                  <CheckCircle className="w-5 h-5 text-cyan-400 mr-3" />
                  Dedicated support
                </li>
                <li className="flex items-center text-gray-300">
                  <CheckCircle className="w-5 h-5 text-cyan-400 mr-3" />
                  SLA guarantees
                </li>
                <li className="flex items-center text-gray-300">
                  <CheckCircle className="w-5 h-5 text-cyan-400 mr-3" />
                  Custom development
                </li>
              </ul>
              <button className="w-full bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-semibold py-3 px-6 rounded-lg hover:from-cyan-600 hover:to-purple-700 transition-all">
                Contact Sales
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-r from-cyan-500/10 to-purple-500/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">
            Ready to Build the Future?
          </h2>
          <p className="text-xl text-gray-300 mb-12 max-w-4xl mx-auto leading-relaxed">
            Start creating immersive AR/VR experiences today. Get started with our development platform.
          </p>
          
          <button className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-semibold py-4 px-8 rounded-xl hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105">
            Start Building Now
          </button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ARVRPlatformPage;