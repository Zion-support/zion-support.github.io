'use client';

import React from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import {CheckCircle, Zap, Cpu, Globe, Shield, ArrowRight, Cloud, Database, Wifi, Server} from 'lucide-react';
const EdgeComputingPage: React.FC = () => {
    const features = [
    {
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
    {
      icon: Globe},
    {
      icon: Globe,
      title: 'Global Distribution',
      description: 'Deploy edge nodes worldwide for optimal performance and coverage.',
    },
    {
      icon: Shield,
      title: 'Edge Security',
      description: 'Advanced security measures designed specifically for edge computing environments.',
    },
    {
      icon: Database,
      title: 'Edge Storage',
      description: 'Distributed storage solutions optimized for edge computing workloads.',
      benefits: ['High availability', 'Auto-scaling', 'Load balancing', 'Fault tolerance']
    },
    {
      icon: Wifi,
      title: 'IoT Integration',
      description: 'Seamless integration with IoT devices and sensors for comprehensive edge solutions.',
      benefits: ['Real-time processing', 'Device management', 'Data analytics', 'Security']
    },
    {
      icon: Server,
      title: 'Edge Infrastructure',
      description: 'Robust infrastructure designed for edge computing requirements and scalability.',
      benefits: ['High availability', 'Auto-scaling', 'Load balancing', 'Fault tolerance']
    }
  ]
const services = [
    {
      icon: '⚡',
      title: 'Edge Computing',
      description: 'High-performance computing at the edge for real-time processing.',
      benefits: ['Low latency', 'High availability', 'Scalability', 'Cost efficiency']
    },
    {
      icon: Shield,
      title: 'Edge Security',
      description: 'Advanced security measures designed specifically for edge computing environments.',
      benefits: ['Threat detection', 'Data encryption', 'Access control', 'Compliance']
    },
    {
      icon: Database,
      title: 'Edge Storage',
      description: 'Distributed storage solutions optimized for edge computing workloads.',
      benefits: ['High performance', 'Low latency', 'Scalability', 'Reliability']
    },
    {
      icon: Wifi,
      title: 'IoT Integration',
      description: 'Seamless integration with IoT devices and sensors for comprehensive edge solutions.',
      benefits: ['Real-time processing', 'Device management', 'Data analytics', 'Security']
    },
    {
      icon: Server,
      title: 'Edge Infrastructure',
      description: 'Robust infrastructure designed for edge computing requirements and scalability.',
      benefits: ['High availability', 'Auto-scaling', 'Load balancing', 'Fault tolerance']
    }
  ];
  
  const services = [
    {
      icon: '⚡',
      title: 'Edge Analytics',
      description: 'Real-time data processing and analytics at the edge',
      benefits: ['Real-time processing', 'Data analytics', 'Performance', 'Scalability']
    },
    {
      icon: '🌐',
      title: 'Edge Networking',
      description: 'Optimized networking solutions for edge deployments',
      benefits: ['Low latency', 'High bandwidth', 'Reliability', 'Security']
    },
    {
      icon: '🔒',
      title: 'Edge Security',
      description: 'Comprehensive security solutions for edge environments'},
    {
      icon: '📱',
      title: 'Mobile Edge',
      description: 'Seamless integration with CI/CD pipelines and DevOps tools for streamlined operations.'
    }
  ];
  const benefits = [
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
      icon: '🚗'},
    {title: 'Smart Cities',
      description: 'IoT sensors and real-time city management',
      icon: '🏙️'},
    {title: 'Industrial IoT',
      description: 'Manufacturing automation and monitoring',
      icon: '🏭'},
    {title: 'AR/VR Applications',
      description: 'Immersive experiences with low latency',
      icon: '🥽'},
    {title: 'Healthcare',
      description: 'Real-time patient monitoring and diagnostics',
      icon: '🏥'},
    {title: 'Gaming',
      description: 'Cloud gaming with minimal latency',
      icon: '🎮',
      benefits: ['Low latency', 'High performance', 'Scalability', 'Reliability']
    }
  ];
  
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900">
      <Helmet>
        <title>Edge Computing Solutions | Zion Tech Group</title>
        <meta name="description" content="Advanced edge computing solutions powered by AI" />
        <meta name="keywords" content="edge computing, AI, artificial intelligence, business solutions" />
      </Helmet>
      <Navigation />
      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Edge Computing Solutions</h2>
            <p className="text-xl text-gray-300">Advanced edge computing solutions for modern businesses</p>
          </div>
        </div>
      </section>
            {benefits.map((benefit, index) => (
              <div key={index} className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <CheckCircle className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-white">{benefit}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default EdgeComputingPage;
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases Section */}
      <section className="py-20 px-4">
        <div className="max-w-7 xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4 xl font-boldtext-whitemb-4">Use Cases
            <p className="text-xl text-gray-300 max-w-3 xl mx-auto">Edge computing solutions for various industries and applications
          <div className="gridgrid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {useCases.map((useCase, index) => (
              <div key={index} className="bg-white/5 backdrop-blur-smborderborder-white/10 rounded-xl p-6 text-center hover:bg-white/10 transition-all duration-300 group">
                <div className="text-4 xlmb-4 group-hover:scale-110 transition-transform">{useCase.icon}
                <h3 className="text-xlfont-semiboldtext-whitemb-3">{useCase.title}
                <p className="text-gray-300">{useCase.description}
            ))}
          </div>
        ))
      </section>

      {/* Benefits Section */}
      <section className="py-20 px-4">
        <div className="max-w-7 xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4 xl font-boldtext-whitemb-4">Why Choose Edge Computing?
            <p className="text-xl text-gray-300 max-w-3 xl mx-auto">Experience the benefits of edge computing with our proven solutions
          <div className="gridgrid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefits.map((benefit, index) => (
              <div key={index} className="bg-white/5 backdrop-blur-smborderborder-white/10 rounded-xl p-6 text-center">
                <div className="w-16 h-16 bg-gradient-to-rfrom-blue-400 to-purple-500 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <CheckCircle className="w-8 h-8 text-white" />
                <h3 className="text-lgfont-semiboldtext-white">{benefit}
            ))}
          ))
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4">
        <div className="max-w-4 xlmx-autotext-center">
          <h2 className="text-4 xl font-boldtext-whitemb-6">Ready to Deploy Edge Computing?</h2>
          <p className="text-xltext-gray-300 mb-8">Join leading enterprises using edge computing to optimize their applications and reduce latency</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-gradient-to-rfrom-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105">
              Start Free Trial
            </button>
            <button className="borderborder-blue-400 text-blue-400 hover:bg-blue-400 hover:text-white font-bold py-4 px-8 rounded-lg transition-all duration-300">
              Contact Sales
            </button>
          ))
        </div>
      </section>

      <Footer />
    </div>
  )};

export default EdgeComputingPage;
      <Footer />
  )
}
export default EdgeComputingPage</div></div></div></div></div></div></div></div></div></div></div></div></div></div></span></button></button></button></button></p></p></p></p></p></p></p></p></p></h1></h2></h2></h2></h2></h2></h3></h3></h3></h3></ul></li></section></section></section></section></section></section>
