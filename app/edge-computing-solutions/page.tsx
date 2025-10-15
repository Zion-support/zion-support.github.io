'use client';
import React from 'react';
import SEOHead from '../components/SEOHead';
import { 
  CloudIcon, 
  CheckCircleIcon, 
  ArrowRightIcon,
  CpuChipIcon,
  SparklesIcon,
  RocketLaunchIcon,
  ShieldCheckIcon,
  ClockIcon,
  UserGroupIcon,
  ChartBarIcon,
  BoltIcon,
  CogIcon,
  EyeIcon,
  AdjustmentsHorizontalIcon,
  SignalIcon,
  DevicePhoneMobileIcon
} from '@heroicons/react/24/outline';

const EdgeComputingSolutionsPage: React.FC = () => {
  const features = [
    {
      icon: CloudIcon,
      title: 'Edge Infrastructure',
      description: 'Deploy and manage edge computing infrastructure with automatic scaling and failover',
      stats: '99.99% uptime'
    },
    {
      icon: SignalIcon,
      title: 'Low Latency Processing',
      description: 'Process data at the edge with ultra-low latency for real-time applications',
      stats: '< 5ms latency'
    },
    {
      icon: CpuChipIcon,
      title: 'AI at the Edge',
      description: 'Run AI models directly on edge devices for instant decision making',
      stats: 'Real-time AI inference'
    },
    {
      icon: ShieldCheckIcon,
      title: 'Edge Security',
      description: 'Secure edge computing with advanced encryption and threat detection',
      stats: 'Military-grade security'
    },
    {
      icon: DevicePhoneMobileIcon,
      title: 'IoT Integration',
      description: 'Connect and manage millions of IoT devices with edge computing',
      stats: '10M+ devices supported'
    },
    {
      icon: ChartBarIcon,
      title: 'Edge Analytics',
      description: 'Analyze data at the edge for instant insights and decision making',
      stats: 'Real-time analytics'
    }
  ];

  const pricingPlans = [
    {
      name: 'Starter',
      price: '$299',
      period: '/month',
      description: 'Perfect for small deployments',
      features: [
        '5 edge nodes',
        'Basic edge processing',
        'Standard security',
        'Email support',
        'Web dashboard',
        'Basic monitoring'
      ],
      popular: false,
      gradient: 'from-green-500 to-cyan-500'
    },
    {
      name: 'Professional',
      price: '$999',
      period: '/month',
      description: 'Ideal for medium enterprises',
      features: [
        '25 edge nodes',
        'Advanced edge processing',
        'AI at the edge',
        'Priority support',
        'API access',
        'Advanced monitoring',
        'Custom integrations',
        'Edge analytics'
      ],
      popular: true,
      gradient: 'from-blue-500 to-purple-500'
    },
    {
      name: 'Enterprise',
      price: '$4,999',
      period: '/month',
      description: 'For large organizations',
      features: [
        'Unlimited edge nodes',
        'Full edge capabilities',
        'Custom AI models',
        '24/7 dedicated support',
        'On-premise deployment',
        'SLA guarantee',
        'White-label solution',
        'Advanced security'
      ],
      popular: false,
      gradient: 'from-purple-500 to-pink-500'
    }
  ];

  const useCases = [
    {
      title: 'Smart Cities',
      description: 'Enable real-time traffic management, environmental monitoring, and public safety systems.',
      icon: SignalIcon
    },
    {
      title: 'Industrial IoT',
      description: 'Monitor and control industrial equipment with real-time processing and analytics.',
      icon: CogIcon
    },
    {
      title: 'Autonomous Vehicles',
      description: 'Process sensor data and make split-second decisions for autonomous driving.',
      icon: DevicePhoneMobileIcon
    },
    {
      title: 'Healthcare',
      description: 'Enable real-time patient monitoring and medical device management.',
      icon: ShieldCheckIcon
    }
  ];

  const testimonials = [
    {
      name: 'David Kim',
      role: 'CTO',
      company: 'SmartCity Corp',
      content: 'Zion Edge Computing has transformed our smart city infrastructure. We can now process data in real-time and make instant decisions.',
      rating: 5
    },
    {
      name: 'Maria Rodriguez',
      role: 'IoT Director',
      company: 'Industrial Solutions',
      content: 'The edge AI capabilities are incredible. We can run complex models on our devices without cloud connectivity.',
      rating: 5
    },
    {
      name: 'James Wilson',
      role: 'Head of Technology',
      company: 'AutoTech',
      content: 'Edge computing has enabled our autonomous vehicles to make real-time decisions. The latency improvements are game-changing.',
      rating: 5
    }
  ];

  return (
    <>
      <SEOHead 
        title="Edge Computing Solutions - Zion Tech Group"
        description="Advanced edge computing solutions for IoT, AI, and real-time processing with ultra-low latency and high performance."
        keywords="edge computing, IoT, real-time processing, low latency, edge AI, smart cities, industrial IoT"
      />
      
      <div className="min-h-screen bg-slate-900 text-white">
        {/* Hero Section */}
        <section className="relative overflow-hidden min-h-screen flex items-center">
          <div className="absolute inset-0 bg-gradient-to-br from-green-900/30 via-slate-900 to-blue-900/30"></div>
          <div className="absolute inset-0 cyber-grid opacity-20"></div>
          
          {/* Floating Particles */}
          <div className="floating-particles">
            {[...Array(20)].map((_, i) => (
              <div key={i} className="particle" style={{
                left: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 15}s`,
                animationDuration: `${15 + Math.random() * 10}s`
              }}></div>
            ))}
          </div>
          
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32 w-full">
            <div className="text-center">
              <div className="relative inline-block mb-6">
                <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold holographic leading-tight neon-text">
                  Edge Computing Solutions
                </h1>
                <div className="absolute -inset-1 bg-gradient-to-r from-green-600 via-blue-600 to-purple-600 rounded-lg blur opacity-30 animate-pulse"></div>
              </div>
              <p className="text-lg sm:text-xl lg:text-2xl text-gray-300 mb-8 lg:mb-12 max-w-4xl mx-auto leading-relaxed px-4">
                Bring computing power to the edge with ultra-low latency processing, AI inference, and real-time analytics. 
                Perfect for IoT, smart cities, and autonomous systems.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12 lg:mb-16 px-4">
                <button className="relative group cyber-button px-6 sm:px-8 py-3 sm:py-4 text-sm sm:text-base shadow-lg shadow-green-500/25 hover:shadow-green-500/40">
                  <span className="relative z-10 flex items-center">
                    Start Free Trial
                    <ArrowRightIcon className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </span>
                </button>
                <button className="border-2 border-green-400 text-green-300 px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-semibold hover:bg-green-400 hover:text-white transition-all duration-300 text-sm sm:text-base hover:shadow-lg hover:shadow-green-400/25 neon-border-animated">
                  Schedule Demo
                </button>
              </div>
              
              {/* Stats */}
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8 max-w-4xl mx-auto px-4">
                <div className="text-center p-4 bg-slate-800/30 rounded-lg backdrop-blur-sm hover:bg-slate-700/30 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-green-500/10">
                  <div className="text-2xl sm:text-3xl lg:text-4xl font-bold text-green-400 mb-1 lg:mb-2">5ms</div>
                  <div className="text-gray-300 text-xs sm:text-sm lg:text-base">Ultra-Low Latency</div>
                </div>
                <div className="text-center p-4 bg-slate-800/30 rounded-lg backdrop-blur-sm hover:bg-slate-700/30 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-blue-500/10">
                  <div className="text-2xl sm:text-3xl lg:text-4xl font-bold text-blue-400 mb-1 lg:mb-2">99.99%</div>
                  <div className="text-gray-300 text-xs sm:text-sm lg:text-base">Uptime</div>
                </div>
                <div className="text-center p-4 bg-slate-800/30 rounded-lg backdrop-blur-sm hover:bg-slate-700/30 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-purple-500/10">
                  <div className="text-2xl sm:text-3xl lg:text-4xl font-bold text-purple-400 mb-1 lg:mb-2">10M+</div>
                  <div className="text-gray-300 text-xs sm:text-sm lg:text-base">IoT Devices</div>
                </div>
                <div className="text-center p-4 bg-slate-800/30 rounded-lg backdrop-blur-sm hover:bg-slate-700/30 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-cyan-500/10">
                  <div className="text-2xl sm:text-3xl lg:text-4xl font-bold text-cyan-400 mb-1 lg:mb-2">50+</div>
                  <div className="text-gray-300 text-xs sm:text-sm lg:text-base">Edge Locations</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-16 sm:py-20 bg-slate-800/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12 sm:mb-16">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6">
                Edge <span className="bg-gradient-to-r from-green-400 to-blue-400 bg-clip-text text-transparent">Capabilities</span>
              </h2>
              <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto px-4">
                Powerful edge computing features designed for real-time processing and ultra-low latency.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <div key={index} className="group holographic-card p-6 hover:scale-105 transition-all duration-300 hover:shadow-xl hover:shadow-green-500/20">
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-blue-500 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform neon-border-animated">
                      <feature.icon className="w-6 h-6 text-white" />
                    </div>
                    <span className="text-sm text-green-400 font-medium neon-text">{feature.stats}</span>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2 group-hover:text-green-300 transition-colors">
                    {feature.title}
                  </h3>
                  <p className="text-gray-400 mb-4 text-sm">
                    {feature.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Use Cases Section */}
        <section className="py-16 sm:py-20 bg-slate-800/30 relative overflow-hidden">
          <div className="absolute inset-0 cyber-grid opacity-20"></div>
          
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="text-center mb-12 sm:mb-16">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6">
                Edge <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">Applications</span>
              </h2>
              <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto px-4">
                From smart cities to autonomous vehicles, edge computing is transforming industries.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {useCases.map((useCase, index) => (
                <div key={index} className="group holographic-card p-6 hover:scale-105 transition-all duration-300 hover:shadow-xl hover:shadow-blue-500/20 text-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform neon-border-animated">
                    <useCase.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2 group-hover:text-blue-300 transition-colors">
                    {useCase.title}
                  </h3>
                  <p className="text-gray-400 text-sm">
                    {useCase.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section className="py-16 sm:py-20 bg-slate-800/30 relative overflow-hidden">
          <div className="absolute inset-0 cyber-grid opacity-20"></div>
          
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="text-center mb-12 sm:mb-16">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6">
                Edge <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">Pricing</span>
              </h2>
              <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto px-4">
                Choose the perfect edge computing plan for your needs. All plans include our core edge capabilities.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {pricingPlans.map((plan, index) => (
                <div key={index} className={`group relative ${plan.popular ? 'scale-105' : ''} holographic-card p-8 hover:scale-105 transition-all duration-300 hover:shadow-xl hover:shadow-purple-500/20`}>
                  {plan.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <span className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-4 py-2 rounded-full text-sm font-semibold neon-glow">
                        Most Popular
                      </span>
                    </div>
                  )}
                  
                  <div className="text-center mb-6">
                    <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                    <p className="text-gray-400 mb-4">{plan.description}</p>
                    <div className="flex items-baseline justify-center">
                      <span className="text-4xl font-bold text-white">{plan.price}</span>
                      <span className="text-gray-400 ml-1">{plan.period}</span>
                    </div>
                  </div>
                  
                  <ul className="space-y-3 mb-8">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-gray-300">
                        <CheckCircleIcon className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                        <span className="text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <button className={`w-full py-3 px-6 rounded-lg font-semibold transition-all duration-300 hover:scale-105 ${
                    plan.popular 
                      ? 'bg-gradient-to-r from-purple-500 to-pink-500 text-white shadow-lg shadow-purple-500/25' 
                      : 'border-2 border-purple-400 text-purple-300 hover:bg-purple-400 hover:text-white'
                  }`}>
                    Get Started
                  </button>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="py-16 sm:py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12 sm:mb-16">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6">
                What Our <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">Clients Say</span>
              </h2>
              <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto px-4">
                Join leading organizations who have transformed their operations with edge computing.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                <div key={index} className="holographic-card p-6 hover:scale-105 transition-all duration-300 hover:shadow-xl hover:shadow-cyan-500/20">
                  <div className="flex items-center mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <svg key={i} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                  <p className="text-gray-300 mb-4 italic">"{testimonial.content}"</p>
                  <div>
                    <div className="font-semibold text-white">{testimonial.name}</div>
                    <div className="text-sm text-gray-400">{testimonial.role} at {testimonial.company}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="relative py-16 sm:py-20 bg-gradient-to-r from-green-900/40 via-slate-900 to-blue-900/40 overflow-hidden">
          <div className="absolute top-10 left-10 w-64 h-64 bg-green-500/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-10 right-10 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
          
          <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8 relative z-10">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6 bg-gradient-to-r from-green-400 to-blue-400 bg-clip-text text-transparent">
              Ready to Go Edge?
            </h2>
            <p className="text-lg sm:text-xl text-gray-300 mb-6 sm:mb-8">
              Start your edge computing journey today and unlock real-time processing capabilities.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="relative group bg-gradient-to-r from-green-600 to-blue-600 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-semibold hover:from-green-700 hover:to-blue-700 transition-all duration-300 transform hover:scale-105 text-sm sm:text-base shadow-lg shadow-green-500/25">
                <span className="relative z-10 flex items-center">
                  Start Free Trial
                  <ArrowRightIcon className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </span>
              </button>
              <button className="border-2 border-white text-white hover:bg-white hover:text-slate-900 px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-semibold transition-all duration-300 text-sm sm:text-base hover:shadow-lg hover:shadow-white/25">
                Contact Sales
              </button>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default EdgeComputingSolutionsPage;