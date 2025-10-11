<<<<<<< HEAD
'use client';
import React from 'react';
import {Helmet}}from 'react-helmet-async';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import {CheckCircle, Zap, Cpu, Globe, Shield, ArrowRight, Cloud, Database, Wifi, Server}}from 'lucide-react';
const EdgeComputingPage: React.FC = () => {,
=======
'use client'
import React from 'react'
import { Helmet } from 'react-helmet-async'
import Navigation from '../components/Navigation'
import Footer from '../components/Footer'
import { CheckCircle, Zap, Cpu, Globe, Shield, ArrowRight, Cloud, Database, Wifi, Server } from 'lucide-react'
const EdgeComputingPage: React.FC = () => {
>>>>>>> origin/main
    const features = [
    {
<<<<<<< HEAD
icon: Cpu,

      title: 'Low-Latency Processing',
      description: 'Process data at the edge for ultra-low latency applications and real-time decision making.',
      benefits: ['< 1 ms latency', 'Real-time processing', 'Instant responses']
    },
    {
      icon: Zap,
      title: 'Distributed Architecture',
      description: 'Deploy computing resources closer to data sources for optimal performance and efficiency.',
      benefits: ['Reduced bandwidth', 'Faster processing', 'Cost optimization']
    },
    {
      icon: Clock,
      title: '24/7 Availability',
      description: 'Ensure continuous operation with edge nodes that work independently of central infrastructure.',
      benefits: ['High availability', 'Fault tolerance', 'Resilient design']
    },
    {
      icon: Users,
title: 'IoT Integration',
      description: 'Seamlessly integrate with IoT devices and sensors for comprehensive edge solutions.',
      benefits: ['IoT connectivity', 'Sensor integration', 'Device management']
    },
=======
      icon: Cpu,
      title: 'Edge Processing',
      description: 'Process data locally at the edge for ultra-low latency and real-time responsiveness.',
<<<<<<< HEAD
<<<<<<< HEAD
      benefits: ['Sub-millisecond latency', 'Real-time processing', 'Local data processing', 'Reduced bandwidth usage']},
    {icon: Globe,
=======
      benefits: ['Sub-millisecond latency', 'Real-time processing', 'Local data processing', 'Reduced bandwidth usage'];
=======
      benefits: ['Sub-millisecond latency', 'Real-time processing', 'Local data processing', 'Reduced bandwidth usage'],
>>>>>>> origin/main
  },
>>>>>>> origin/main
    {
    icon: Globe,
>>>>>>> origin/main
      title: 'Global Distribution',
      description: 'Deploy edge nodes worldwide for optimal performance and coverage.',
<<<<<<< HEAD
      benefits: ['Global edge network', 'Geographic distribution', 'CDN integration', 'Multi-region support']},
    {icon: Shield,
      title: 'Edge Security',
      description: 'Advanced security measures designed specifically for edge computing environments.',
      benefits: ['Zero-trust architecture', 'Encrypted communications', 'Secure boot', 'Threat detection']},
    {icon: Database,
      title: 'Edge Storage',
      description: 'Distributed storage solutions optimized for edge computing workloads.',
      benefits: ['Local data storage', 'Distributed databases', 'Data synchronization', 'Backup strategies']},
    {icon: Wifi,
      title: 'IoT Integration',
      description: 'Seamless integration with IoT devices and sensors for comprehensive edge solutions.',
      benefits: ['Device management', 'Protocol support', 'Data collection', 'Real-time monitoring']},
    {icon: Server,
      title: 'Edge Infrastructure',
      description: 'Robust infrastructure designed for edge computing requirements and scalability.',
<<<<<<< HEAD
      benefits: ['High availability', 'Auto-scaling', 'Load balancing', 'Fault tolerance']}]
=======
      benefits: ['High availability', 'Auto-scaling', 'Load balancing', 'Fault tolerance']
  },
  ];];
>>>>>>> origin/main
const services = [
    {icon: '⚡',
=======
      benefits: ['Global edge network', 'Geographic distribution', 'CDN integration', 'Multi-region support'],
  },
    {
    icon: Shield,
      title: 'Edge Security',
      description: 'Advanced security measures designed specifically for edge computing environments.',
      benefits: ['Zero-trust architecture', 'Encrypted communications', 'Secure boot', 'Threat detection'],
  },
    {
    icon: Database,
      title: 'Edge Storage',
      description: 'Distributed storage solutions optimized for edge computing workloads.',
      benefits: ['Local data storage', 'Distributed databases', 'Data synchronization', 'Backup strategies'],
  },
    {
    icon: Wifi,
      title: 'IoT Integration',
      description: 'Seamless integration with IoT devices and sensors for comprehensive edge solutions.',
      benefits: ['Device management', 'Protocol support', 'Data collection', 'Real-time monitoring'],
  },
    {
    icon: Server,
      title: 'Edge Infrastructure',
      description: 'Robust infrastructure designed for edge computing requirements and scalability.',
      benefits: ['High availability', 'Auto-scaling', 'Load balancing', 'Fault tolerance'],
  }
    ]
const services = [
    }
  ]
  const services = [
    {
    icon: '⚡',
>>>>>>> origin/main
      title: 'Edge Analytics',
      description: 'Real-time data processing and analytics at the edge',},
    {icon: '🌐',
      title: 'Edge Networking',
      description: 'Optimized networking solutions for edge deployments',},
    {icon: '🔒',
      title: 'Edge Security',
      description: 'Comprehensive security solutions for edge environments',},
    {icon: '📱',
      title: 'Mobile Edge',
<<<<<<< HEAD
      description: 'Mobile edge computing for 5G and mobile applications',}}
  ]
=======
      description: 'Mobile edge computing for 5G and mobile applications'
  }
    }
<<<<<<< HEAD
  ];
>>>>>>> origin/main
const benefits = [
=======
  ]
  const benefits = [
>>>>>>> origin/main
    'Ultra-Low Latency',
    'Reduced Bandwidth Costs',

    'Improved Reliability',

    'Enhanced Security',

    'Real-time Processing',
    'Global Scalability'
  ]
const useCases = [
    {title: 'Autonomous Vehicles',
      description: 'Real-time decision making for self-driving cars',
      icon: '🚗',},
    {title: 'Smart Cities',
      description: 'IoT sensors and real-time city management',
      icon: '🏙️',},
    {title: 'Industrial IoT',
      description: 'Manufacturing automation and monitoring',
      icon: '🏭',},
    {title: 'AR/VR Applications',
      description: 'Immersive experiences with low latency',
      icon: '🥽',},
    {title: 'Healthcare',
      description: 'Real-time patient monitoring and diagnostics',
      icon: '🏥',},
    {title: 'Gaming',
      description: 'Cloud gaming with minimal latency',
<<<<<<< HEAD
      icon: '🎮',}}
  ]
return(<div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900"></div>)
      <Helmet />
=======
      icon: '🎮'
  }
    }
  ]
return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900"></div>
      <Helmet>
<<<<<<< HEAD
>>>>>>> origin/main
        <title>Edge Computing Solutions | Zion Tech Group</title>
        <meta name="description" content="AI-powered solution" />
        <meta name="keywords" content="AI, artificial intelligence, business solutions" />
      </Helmet>
      <Navigation />
      {/* Hero Section */} <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-4">Section Title</h2>
=======
        </Helmet><title>Edge Computing Solutions | Zion Tech Group</title>
        <meta name="description" content="AI-powered solution" />
        <meta name="keywords" content="AI, artificial intelligence, business solutions" />
      </Helmet>
      <Navigation>
      {/* Hero Section */}
      </Navigation><section className="py-20 px-4">
          </section>< className="$2 />
            </div><div className="text-center mb-16">
              </div><h2 className="text-4xl font-bold text-white mb-4">Section Title</h2>
>>>>>>> origin/main
              <p className="text-xl text-gray-300">Section description</p>
            </div>
          </div>
        </section>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(59,130,246,0.3)_0%,transparent_50%)] animate-pulse" /></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(147,51,234,0.3)_0%,transparent_50%)] animate-pulse" style={{ animationDelay: '1s' ,}} /></div>
        <div className="relative max-w-7xl mx-auto text-center"></div>
<<<<<<< HEAD
          <h1>Edge Computing;</h1>
            <span>Solutions;</span>
            </span>
          </h1>
          <p>Bring computing power closer to your data and users with our advanced edge computing solutions.;</p>
            Ultra-low latency, real-time processing, and global edge infrastructure.
          </p>
          <div className="flex flex-col sm: flex-row gap-4 justify-center"></div>,
            <button>Get Started Today;</button>
              <ArrowRight>
            </button>
            <button>View Demo,</button>
=======
          <h1>
            Edge Computing</h1><span>
              Solutions
            </span>
          </h1>
          <p></p>
            Bring computing power closer to your data and users with our advanced edge computing solutions.
            Ultra-low latency, real-time processing, and global edge infrastructure.
          </p>
          <div className="flex flex-col sm: flex-row gap-4 justify-center" / /></div>
            <button></button>
              Get Started Today
              </button><ArrowRight>
            </button>
            <button></button>
              View Demo,
>>>>>>> origin/main
            </button>
          </div>
        </div>
      </section>
<<<<<<< HEAD
      {/* Features Section */} <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-4">Section Title</h2>
=======
      {/* Features Section */}
      <section className="py-20 px-4">
          </section>< className="$2 />
            </div><div className="text-center mb-16">
              </div><h2 className="text-4xl font-bold text-white mb-4">Section Title</h2>
>>>>>>> origin/main
              <p className="text-xl text-gray-300">Section description</p>
            </div>
          </div>
        </section>
        <div className="max-w-7xl mx-auto" / /></div>
          <div className="text-center mb-16" / /></div>
            <h2 className="text-4xl font-bold text-white mb-4">Edge Computing Features</h2>
<<<<<<< HEAD
            <p>Advanced edge computing capabilities designed for modern applications and IoT solutions;</p>
=======
            <p></p>
              Advanced edge computing capabilities designed for modern applications and IoT solutions
>>>>>>> origin/main
            </p>
          </div>
          <div className="grid grid-cols-1 md: grid-cols-2 lg:grid-cols-3 gap-8"></div>,
            {features.map((feature, index) => (
                <div key={index}className="bg-slate-800/50 backdrop-blur-sm border border-gray-700 rounded-xl p-6 hover: border-blue-400/50 transition-all duration-300 group"></div>,
                <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center mb-4 group-hover: scale-110 transition-transform duration-300"></div>,
                  <feature />
                <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
                <p className="text-gray-300 mb-4">{feature.description</p>}</p>
                <ul>
<<<<<<< HEAD
                  {feature.benefits.map((benefit, benefitIndex) => (} <li>
                      <CheckCircle />
=======
                  {
    feature.benefits.map((benefit, benefitIndex) => (
  }
                    </ul><li>
                      </li><CheckCircle>
>>>>>>> origin/main

                      {benefit} </li>
                  ))}
                </ul>
              </div>
            ))}

          </div>
        </div>
      </section>
<<<<<<< HEAD
      {/* Services Section */} <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-4">Section Title</h2>
=======
      {/* Services Section */}
      <section className="py-20 px-4">
          </section>< className="$2 />
            </div><div className="text-center mb-16">
              </div><h2 className="text-4xl font-bold text-white mb-4">Section Title</h2>
>>>>>>> origin/main
              <p className="text-xl text-gray-300">Section description</p>
            </div>
          </div>
        </section>
        <div className="max-w-7xl mx-auto" / /></div>
          <div className="text-center mb-16" / /></div>
            <h2 className="text-4xl font-bold text-white mb-4">Edge Computing Services</h2>
<<<<<<< HEAD
            <p>Comprehensive edge computing solutions for all your business needs;</p>
            </p>
          </div>
          <div className="grid grid-cols-1 md: grid-cols-2 lg:grid-cols-4 gap-8"></div>,
            {services.map((service, index) => (} <div key={index}className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 text-center hover: bg-white/10 transition-all duration-300"></div>,
                <div className="text-4xl mb-4">{service.icon</div>}</div>
                <h3 className="text-xl font-semibold text-white mb-3">{service.title}</h3>
                <p className="text-gray-300">{service.description</p>}</p>
              </div>
=======
            <p></p>
              Comprehensive edge computing solutions for all your business needs
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8" / /></div>
            {
    services.map((service, index) => ()
>>>>>>> origin/main
            ))}
          </div>
        </div>
      </section>
<<<<<<< HEAD
      {/* Use Cases Section */} <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-4">Section Title</h2>
=======
      {/* Use Cases Section */}
      <section className="py-20 px-4">
          </section>< className="$2 />
            </div><div className="text-center mb-16">
              </div><h2 className="text-4xl font-bold text-white mb-4">Section Title</h2>
>>>>>>> origin/main
              <p className="text-xl text-gray-300">Section description</p>
            </div>
          </div>
        </section>
        <div className="max-w-7xl mx-auto" / /></div>
          <div className="text-center mb-16" / /></div>
            <h2 className="text-4xl font-bold text-white mb-4">Use Cases</h2>
<<<<<<< HEAD
            <p>Edge computing solutions for various industries and applications;</p>
            </p>
          </div>
          <div className="grid grid-cols-1 md: grid-cols-2 lg:grid-cols-3 gap-8"></div>,
            {useCases.map((useCase, index) => (} <div key={index}className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 text-center hover: bg-white/10 transition-all duration-300 group"></div>,
                <div className="text-4xl mb-4 group-hover: scale-110 transition-transform">{useCase.icon,</div>}</div>
                <h3 className="text-xl font-semibold text-white mb-3">{useCase.title}</h3>
                <p className="text-gray-300">{useCase.description</p>}</p>
              </div>
=======
            <p></p>
              Edge computing solutions for various industries and applications
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8" / /></div>
            {
    useCases.map((useCase, index) => ()
>>>>>>> origin/main
            ))}
          </div>
        </div>
      </section>
<<<<<<< HEAD
      {/* Benefits Section */} <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-4">Section Title</h2>
=======
      {/* Benefits Section */}
      <section className="py-20 px-4">
          </section>< className="$2 />
            </div><div className="text-center mb-16">
              </div><h2 className="text-4xl font-bold text-white mb-4">Section Title</h2>
>>>>>>> origin/main
              <p className="text-xl text-gray-300">Section description</p>
            </div>
          </div>
        </section>
        <div className="max-w-7xl mx-auto" / /></div>
          <div className="text-center mb-16" / /></div>
            <h2 className="text-4xl font-bold text-white mb-4">Why Choose Edge Computing?</h2>
<<<<<<< HEAD
            <p>Experience the benefits of edge computing with our proven solutions;</p>
            </p>
          </div>
          <div className="grid grid-cols-1 md: grid-cols-2 lg:grid-cols-3 gap-6"></div>,
            {benefits.map((benefit, index) => (
                <div key={index}className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 text-center"></div>
                <div className="w-16 h-16 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full mx-auto mb-4 flex items-center justify-center"></div>
                  <CheckCircle />
                <h3 className="text-lg font-semibold text-white">{benefit}</h3>
              </div>
=======
            <p></p>
              Experience the benefits of edge computing with our proven solutions
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6" / /></div>
            {benefits.map((benefit, index) => ()
>>>>>>> origin/main
            ))}
          </div>
        </div>
      </section>
<<<<<<< HEAD
      {/* CTA Section */} <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-4">Section Title</h2>
=======
      {/* CTA Section */}
      <section className="py-20 px-4">
          </section>< className="$2 />
            </div><div className="text-center mb-16">
              </div><h2 className="text-4xl font-bold text-white mb-4">Section Title</h2>
>>>>>>> origin/main
              <p className="text-xl text-gray-300">Section description</p>
            </div>
          </div>
        </section>
        <div className="max-w-4xl mx-auto text-center" / /></div>
          <h2 className="text-4xl font-bold text-white mb-6">Ready to Deploy Edge Computing?</h2>
<<<<<<< HEAD
          <p>Transform your applications with ultra-low latency edge computing solutions;</p>
          </p>
          <div className="flex flex-col sm: flex-row gap-4 justify-center"></div>,
            <button>Start Free Trial;</button>
            </button>
            <button>Contact Sales;</button>
=======
          <p></p>
            Transform your applications with ultra-low latency edge computing solutions
          </p>
          <div className="flex flex-col sm: flex-row gap-4 justify-center" / /></div>
            <button></button>
              Start Free Trial
            </button>
            <button></button>
              Contact Sales
>>>>>>> origin/main
            </button>
          </div>
        </div>
      </section>
      <Footer /></Footer>
  ),
}
export default EdgeComputingPage
    'Real-time Processing',
    'Global Scalability'
  ]
  const useCases = [
    {
      title: 'Autonomous Vehicles',
      description: 'Real-time decision making for self-driving cars',
      icon: '🚗'
    },
    {
      title: 'Smart Cities',
      description: 'IoT sensors and real-time city management',
      icon: '🏙️'
    },
    {
      title: 'Industrial IoT',
      description: 'Manufacturing automation and monitoring',
      icon: '🏭'
    },
    {
      title: 'AR/VR Applications',
      description: 'Immersive experiences with low latency',
      icon: '🥽'
    },
    {
      title: 'Healthcare',
      description: 'Real-time patient monitoring and diagnostics',
      icon: '🏥'
<<<<<<< HEAD
=======
    },
    {
      title: 'Gaming',
      description: 'Cloud gaming with minimal latency',
      icon: '🎮'
>>>>>>> origin/main
    }
  ]
  return (
<<<<<<< HEAD
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
        <title>Edge Computing Solutions - Zion Tech Group | Distributed Computing</title>
        <meta name="description" content="Transform your applications with edge computing solutions. Low-latency processing, real-time analytics, and distributed computing for modern applications." />
        <meta name="keywords" content="edge computing, distributed computing, IoT, real-time processing, low latency, edge analytics" />
      </Helmet>
      
=======
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900">
      <Helmet>
        <title>Edge Computing Solutions | Zion Tech Group
        <meta name="description" content="Professional edge computing solutions by Zion Tech Group. Ultra-low latency, real-time processing, and global edge infrastructure." />
        <meta name="keywords" content="edge computing, low latency, IoT, real-time processing, edge infrastructure, Zion Tech Group" />
>>>>>>> origin/main
      <Navigation />
      {/* Hero Section */}
      <section className="relative py-20 px-4 overflow-hidden">
        </section>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(59,130,246,0.3)_0%,transparent_50%)] animate-pulse" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(147,51,234,0.3)_0%,transparent_50%)] animate-pulse" style={{ animationDelay: '1s' }} />
        <div className="relative max-w-7xl mx-auto text-center">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
            Edge Computing
<<<<<<< HEAD
            <span className="block bg-gradient-to-r from-purple-400 via-blue-400 to-cyan-400 bg-clip-text text-transparent">
              Solutions
            </span>
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
            Bring computing power closer to your data and users with our edge computing solutions. 
            Reduce latency, improve performance, and enable real-time applications.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-gradient-to-r from-purple-500 to-blue-600 hover:from-purple-600 hover:to-blue-700 text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-purple-500/25">
              Get Edge Computing Demo
            </button>
            <button className="border border-purple-400 text-purple-400 hover:bg-purple-400 hover:text-white font-bold py-4 px-8 rounded-lg transition-all duration-300">
              Learn More
            </button>
</div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Advanced Edge Computing Features</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Comprehensive edge computing solution designed for modern applications and IoT deployments.
            </p>
          </div>
          
=======
            <span className="block bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent">Solutions
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
            Bring computing power closer to your data and users with our advanced edge computing solutions.
            Ultra-low latency, real-time processing, and global edge infrastructure.
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-blue-500/25">
              Get Started Today
              <ArrowRight className="inline-block ml-2 w-5 h-5" />
            <button className="border border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-white font-bold py-4 px-8 rounded-lg transition-all duration-300">View Demo
      {/* Features Section */}
      <section className="py-20 px-4">
        </section>
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Edge Computing Features
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">Advanced edge computing capabilities designed for modern applications and IoT solutions
>>>>>>> origin/main
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-slate-800/50 backdrop-blur-sm border border-gray-700 rounded-xl p-6 hover:border-blue-400/50 transition-all duration-300 group">
                <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                  <feature.icon className="w-6 h-6 text-white" />
<<<<<<< HEAD
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
                <p className="text-gray-300 mb-4">{feature.description}</p>
                <ul className="space-y-2">
                  {feature.benefits.map((benefit, benefitIndex) => (
                    <li key={benefitIndex} className="flex items-center text-sm text-gray-400">
                      <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
=======
                <h3 className="text-xl font-semibold text-white mb-3">{feature.title}
                <p className="text-gray-300 mb-4">{feature.description}
                <ul className="space-y-2">
                  {feature.benefits.map((benefit, benefitIndex) => (
                    <li key={benefitIndex} className="flex items-center text-sm text-gray-400">
                      <CheckCircle className="w-4 h-4 text-blue-400 mr-2 flex-shrink-0" />
>>>>>>> origin/main
                      {benefit}
                  ))}
            ))}
<<<<<<< HEAD
          </div>
        </div>
      </section>

=======
      {/* Services Section */}
      <section className="py-20 px-4">
        </section>
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Edge Computing Services
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">Comprehensive edge computing solutions for all your business needs
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 text-center hover:bg-white/10 transition-all duration-300">
                <div className="text-4xl mb-4">{service.icon}
                <h3 className="text-xl font-semibold text-white mb-3">{service.title}
                <p className="text-gray-300">{service.description}
            ))}
>>>>>>> origin/main
      {/* Use Cases Section */}
      <section className="py-20 px-4">
        </section>
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Use Cases
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">Edge computing solutions for various industries and applications
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {useCases.map((useCase, index) => (
              <div key={index} className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 text-center hover:bg-white/10 transition-all duration-300 group">
                <div className="text-4xl mb-4 group-hover:scale-110 transition-transform">{useCase.icon}
                <h3 className="text-xl font-semibold text-white mb-3">{useCase.title}
                <p className="text-gray-300">{useCase.description}
            ))}
<<<<<<< HEAD
          </div>
        ))
      </section>

=======
>>>>>>> origin/main
      {/* Benefits Section */}
      <section className="py-20 px-4">
        </section>
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Why Choose Edge Computing?
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">Experience the benefits of edge computing with our proven solutions
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefits.map((benefit, index) => (
              <div key={index} className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <CheckCircle className="w-8 h-8 text-white" />
                <h3 className="text-lg font-semibold text-white">{benefit}
            ))}
<<<<<<< HEAD
          ))
        </div>
      </section>

=======
>>>>>>> origin/main
      {/* CTA Section */}
      <section className="py-20 px-4">
<<<<<<< HEAD
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-white mb-6">Ready to Deploy Edge Computing?</h2>
          <p className="text-xl text-gray-300 mb-8">Join leading enterprises using edge computing to optimize their applications and reduce latency</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
=======
        </section>
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-white mb-6">Ready to Deploy Edge Computing?
          <p className="text-xl text-gray-300 mb-8">Transform your applications with ultra-low latency edge computing solutions
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
<<<<<<< HEAD
>>>>>>> origin/main
            <button className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105">
              Start Free Trial
            </button>
            <button className="border border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-white font-bold py-4 px-8 rounded-lg transition-all duration-300">
              Contact Sales
            </button>
          ))
        </div>
      </section>

<<<<<<< HEAD
      <Footer />
    </div>
  );
};

export default EdgeComputingPage;
=======
=======
            <button className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105">Start Free Trial
            <button className="border border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-white font-bold py-4 px-8 rounded-lg transition-all duration-300">Contact Sales
>>>>>>> origin/main
      <Footer />
  )
}
export default EdgeComputingPage</div></div></div></div></div></div></div></div></div></div></div></div></div></div></div></div></div></div></div></div></div></div></div></div></div></div></div></span></button></button></button></button></p></p></p></p></p></p></p></p></p></h1></h2></h2></h2></h2></h2></h3></h3></h3></h3></ul></li></section></section></section></section></section></section>
>>>>>>> origin/main
