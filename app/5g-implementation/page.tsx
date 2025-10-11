'use client'
import React from 'react'
import { Helmet } from 'react-helmet-async';
import { Wifi, BarChart, CheckCircle, Brain, Target, TrendingUp, FileText, Zap, Shield, ArrowRight, PieChart } from 'lucide-react';
import Navigation from '../components/Navigation'
import Footer from '../components/Footer'

const FiveGImplementationPage: React.FC = () => {

  const features = [
    {
      icon: Wifi,
      title: 'Ultra-Low Latency',
      description: 'Achieve sub-millisecond latency for real-time applications and critical operations.',
      benefits: ['< 1ms latency', 'Real-time processing', 'Critical operations support', 'Edge computing ready']
    },
    {
      icon: BarChart,
      title: 'High-Speed Connectivity',
      description: 'Experience blazing-fast speeds up to 10 Gbps for seamless data transfer.',
      benefits: ['Up to 10 Gbps speeds', 'Massive data transfer', '4K/8K streaming', 'Cloud integration']
    },
    {
      icon: Brain,
      title: 'AI-Powered Optimization',
      description: 'Intelligent network management with AI-driven performance optimization.',
      benefits: ['Smart routing', 'Predictive maintenance', 'Load balancing', 'Performance analytics']
    },
    {
      icon: Target,
      title: 'Massive IoT Support',
      description: 'Connect millions of devices with enhanced capacity and efficiency.',
      benefits: ['1M+ devices per km²', 'Low power consumption', 'Extended battery life', 'Smart city ready']
    },
    {
      icon: Shield,
      title: 'Enhanced Security',
      description: 'Advanced security protocols and encryption for secure communications.',
      benefits: ['End-to-end encryption', 'Network slicing', 'Zero-trust architecture', 'Compliance ready']
    },
    {
      icon: Zap,
      title: 'Edge Computing',
      description: 'Process data closer to the source for faster response times.',
      benefits: ['Reduced latency', 'Bandwidth optimization', 'Real-time analytics', 'Local processing']
    }
  ];

  const useCases = [
    {
      title: 'Smart Manufacturing',
      description: 'Real-time monitoring and control of industrial processes.',
      icon: Target,
      benefits: ['Predictive maintenance', 'Quality control', 'Supply chain optimization', 'Worker safety']
    },
    {
      title: 'Autonomous Vehicles',
      description: 'Ultra-reliable communication for self-driving cars.',
      icon: CheckCircle,
      benefits: ['Vehicle-to-vehicle communication', 'Traffic optimization', 'Safety systems', 'Route planning']
    },
    {
      title: 'Healthcare',
      description: 'Remote surgery and telemedicine applications.',
      icon: Brain,
      benefits: ['Remote surgery', 'Telemedicine', 'Patient monitoring', 'Medical imaging']
    },
    {
      title: 'Smart Cities',
      description: 'Connected infrastructure for urban management.',
      icon: PieChart,
      benefits: ['Traffic management', 'Energy optimization', 'Public safety', 'Environmental monitoring']
    }
  ];

  const values = [
    {
      step: '01',
      title: 'Network Assessment',
      description: 'Comprehensive analysis of current infrastructure and requirements.',
      details: ['Site surveys', 'Coverage analysis', 'Capacity planning', 'Security audit']
    },
    {
      step: '02',
      title: 'Infrastructure Design',
      description: 'Custom 5G network architecture tailored to your needs.',
      details: ['Core network design', 'RAN planning', 'Backhaul solutions', 'Edge computing setup']
    },
    {
      step: '03',
      title: 'Deployment',
      description: 'Professional installation and configuration of 5G equipment.',
      details: ['Equipment installation', 'Network configuration', 'Testing and validation', 'Performance tuning']
    },
    {
      step: '04',
      title: 'Optimization',
      description: 'Continuous monitoring and optimization for peak performance.',
      details: ['Performance monitoring', 'Network optimization', 'Capacity management', 'Security updates']
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Helmet>
        <title>5G Implementation - Zion Tech Group</title>
        <meta name="description" content="Complete 5G network implementation services with ultra-low latency, high-speed connectivity, and advanced features for modern applications and IoT ecosystems." />
        <meta name="keywords" content="5G implementation, network infrastructure, ultra-low latency, high-speed connectivity, IoT, smart cities, edge computing" />
      </Helmet>
      <Navigation />
      
      <main $1>
        {/* Hero Section */}
      </main>
          </div>
        <section className="relative py-20 px-4 overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(59,130,246,0.3)_0%,transparent_50%)] animate-pulse" style={{ animationDelay: '1s' }} />
          <div className="relative max-w-7xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              5G Network <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">Implementation</span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Complete 5G network implementation services with ultra-low latency, high-speed connectivity, and advanced features for modern applications and IoT ecosystems.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-blue-500 to-purple-500 text-white px-8 py-3 rounded-lg font-semibold hover:from-blue-600 hover:to-purple-600 transition-all duration-300 flex items-center justify-center">
                Get Started
                <ArrowRight className="w-5 h-5 ml-2" />
              </button>
              <button className="border border-cyan-400 text-cyan-400 px-8 py-3 rounded-lg font-semibold hover:bg-cyan-400 hover:text-white transition-all duration-300">
                Learn More
              </button>
            </div>
          </div>
        </section>
            {/* Features Section */}
          </div>
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 2>
                  Advanced 5G Features
                </h2>
              </h2>
              <p Unlock the full potential of 5G technology with our comprehensive implementation services.>
                  $2
                </p>
              </p>
            </div>
            <div $1>
            {features.map((feature, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
                  <feature.icon className="w-12 h-12 text-purple-400 mb-4" />
                  <h3 3>
            {feature.title}
          </div>
                </h3>
                  </h3>
                  <p {feature.description}>
                  $2
                </p>
                  </p>
                  <ul $1>
            {feature.benefits.map((benefit, idx) => (
                      <li key={idx} className="flex items-center text-sm text-gray-300">
                        <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
            {benefit}
          </div>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>
            {/* Use Cases Section */}
          </div>
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white/5">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 2>
                  Real-World Applications
                </h2>
              </h2>
              <p Discover how 5G technology transforms industries and enables new possibilities.>
                  $2
                </p>
              </p>
            </div>
            <div $1>
            {useCases.map((useCase, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
                  <useCase.icon className="w-12 h-12 text-blue-400 mb-4" />
                  <h3 3>
            {useCase.title}
          </div>
                </h3>
                  </h3>
                  <p {useCase.description}>
                  $2
                </p>
                  </p>
                  <ul $1>
            {useCase.benefits.map((benefit, idx) => (
                      <li key={idx} className="flex items-center text-sm text-gray-300">
                        <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
            {benefit}
          </div>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>
            {/* Process Section */}
          </div>
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 2>
                  Our Implementation Process
                </h2>
              </h2>
              <p A systematic approach to deploying 5G networks that ensures success and optimal performance.>
                  $2
                </p>
              </p>
            </div>
            <div $1>
            {values.map((value, index) => (
                <div key={index} className="text-center">
                  <div $1>
            {value.step}
          </div>
          </div>
                  </div>
                  <h3 3>
            {value.title}
          </div>
                </h3>
                  </h3>
                  <p {value.description}>
                  $2
                </p>
                  </p>
                  <ul $1>
            {value.details.map((detail, idx) => (
                      <li key={idx} className="flex items-center justify-center">
                        <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
            {detail}
          </div>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>
            {/* CTA Section */}
          </div>
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-purple-600 to-blue-600">
          <div className="max-w-4xl mx-auto text-center">
            <h2 2>
                  Ready to Transform Your Network?
                </h2>
            </h2>
            <p Get started with our 5G implementation services and unlock the full potential of next-generation connectivity.>
                  $2
                </p>
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button Start Your Project
                >
                  <ArrowRight className="w-5 h-5 ml-2" />
                </button>
              <button $2>
                  $2
                </button>
                </button>
              </button>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default FiveGImplementationPage;