import React from 'react';
import { Helmet } from 'react-helmet-async';
import { 
  Cpu, 
  Zap, 
  Globe, 
  Smartphone, 
  CheckCircle, 
  AlertTriangle,
  Database,
  Cloud,
  Activity,
  Settings,
  BarChart,
  Shield,
  Network,
  Server
} from 'lucide-react';

const EdgeComputingPage: React.FC = () => {
  const features = [
    {
      icon: Zap,
      title: 'Ultra-Low Latency',
      description: 'Process data at the edge for sub-millisecond response times and real-time applications.',
      benefits: ['< 1ms latency', 'Real-time processing', 'Instant decisions', 'High-frequency trading']
    },
    {
      icon: Globe,
      title: 'Global Edge Network',
      description: 'Deploy applications across our global edge network for optimal performance worldwide.',
      benefits: ['200+ locations', 'Global coverage', 'Local processing', 'Reduced bandwidth costs']
    },
    {
      icon: Database,
      title: 'Edge Data Processing',
      description: 'Process and analyze data locally before sending to the cloud, reducing costs and improving privacy.',
      benefits: ['Local analytics', 'Data filtering', 'Bandwidth optimization', 'Privacy compliance']
    },
    {
      icon: Shield,
      title: 'Edge Security',
      description: 'Comprehensive security at the edge with encryption, authentication, and threat detection.',
      benefits: ['End-to-end encryption', 'Zero-trust security', 'Threat detection', 'Compliance ready']
    }
  ];

  const useCases = [
    {
      title: 'IoT Applications',
      description: 'Real-time processing of IoT sensor data for smart cities and industrial automation.',
      icon: Activity
    },
    {
      title: 'Content Delivery',
      description: 'Ultra-fast content delivery for media, gaming, and web applications.',
      icon: Globe
    },
    {
      title: 'Autonomous Vehicles',
      description: 'Low-latency processing for autonomous vehicle decision making and safety systems.',
      icon: Smartphone
    },
    {
      title: 'AR/VR Applications',
      description: 'High-performance edge computing for immersive augmented and virtual reality experiences.',
      icon: Settings
    },
    {
      title: 'Financial Trading',
      description: 'Ultra-low latency trading systems for high-frequency and algorithmic trading.',
      icon: BarChart
    },
    {
      title: 'Manufacturing',
      description: 'Real-time monitoring and control systems for smart manufacturing and Industry 4.0.',
      icon: Server
    }
  ];

  return (
    <>
      <Helmet>
        <title>Edge Computing Solutions - Zion Tech Group</title>
        <meta name="description" content="Ultra-low latency edge computing solutions for IoT, real-time applications, and global content delivery. Process data closer to users for better performance." />
        <meta name="keywords" content="edge computing, low latency, IoT, content delivery, real-time processing, global edge network" />
        <link rel="canonical" href="https://ziontechgroup.com/edge-computing" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
        {/* Hero Section */}
        <section className="relative py-20 px-4 overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(0,255,255,0.1)_0%,transparent_50%)] animate-pulse" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(139,92,246,0.1)_0%,transparent_50%)] animate-pulse" style={{ animationDelay: '1s' }} />
          
          <div className="max-w-7xl mx-auto relative">
            <div className="text-center mb-16">
              <div className="inline-flex items-center space-x-2 bg-cyan-500/10 text-cyan-400 px-4 py-2 rounded-full text-sm font-medium mb-6">
                <Cpu className="w-4 h-4" />
                <span>Ultra-Low Latency Computing</span>
              </div>
              
              <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 cyber-text">
                Edge Computing
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500">
                  Solutions
                </span>
              </h1>
              
              <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8 leading-relaxed">
                Process data at the edge for ultra-low latency, real-time applications, and global performance. 
                Deploy closer to users for better speed, security, and efficiency.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="neon-button hover:scale-105 hover:shadow-lg hover:shadow-cyan-500/25 inline-flex items-center">
                  Get Started
                  <Zap className="w-4 h-4 ml-2" />
                </button>
                <button className="px-8 py-4 border border-cyan-400 text-cyan-400 rounded-lg hover:bg-cyan-400/10 transition-all">
                  View Demo
                </button>
              </div>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-16">
              <div className="text-center">
                <div className="text-4xl font-bold text-cyan-400 mb-2">&lt; 1ms</div>
                <div className="text-gray-300">Ultra-Low Latency</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-purple-400 mb-2">200+</div>
                <div className="text-gray-300">Edge Locations</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-pink-400 mb-2">99.99%</div>
                <div className="text-gray-300">Uptime Guarantee</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-green-400 mb-2">Global</div>
                <div className="text-gray-300">Coverage</div>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-6">
                Powerful Edge Capabilities
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Our edge computing platform provides the performance and reliability you need for modern applications.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
              {features.map((feature, index) => (
                <div key={index} className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-8 border border-slate-700 hover:border-cyan-400/50 transition-all">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-cyan-500/20 rounded-lg flex items-center justify-center flex-shrink-0">
                      <feature.icon className="w-6 h-6 text-cyan-400" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
                      <p className="text-gray-300 mb-4">{feature.description}</p>
                      <ul className="space-y-2">
                        {feature.benefits.map((benefit, benefitIndex) => (
                          <li key={benefitIndex} className="flex items-center text-sm text-gray-400">
                            <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                            {benefit}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Use Cases Grid */}
        <section className="py-20 px-4 bg-slate-800/30">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-6">
                Edge Computing Use Cases
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                From IoT to autonomous vehicles, edge computing powers the next generation of applications.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {useCases.map((useCase, index) => (
                <div key={index} className="bg-slate-900/50 backdrop-blur-sm rounded-xl p-6 border border-slate-700 hover:border-cyan-400/50 transition-all group">
                  <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                    <useCase.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-3">{useCase.title}</h3>
                  <p className="text-gray-300 text-sm">{useCase.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Architecture Section */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="bg-gradient-to-r from-slate-800 to-slate-700 rounded-2xl p-12">
              <div className="text-center mb-12">
                <h2 className="text-4xl font-bold text-white mb-6">
                  Edge Computing Architecture
                </h2>
                <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                  Our distributed edge architecture ensures optimal performance and reliability.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="text-center">
                  <div className="w-16 h-16 bg-cyan-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Cloud className="w-8 h-8 text-cyan-400" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-2">Cloud Core</h3>
                  <p className="text-gray-300">Centralized management and data processing in the cloud</p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-purple-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Network className="w-8 h-8 text-purple-400" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-2">Edge Network</h3>
                  <p className="text-gray-300">Distributed edge nodes for local processing and caching</p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-pink-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Smartphone className="w-8 h-8 text-pink-400" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-2">End Devices</h3>
                  <p className="text-gray-300">IoT devices, mobile apps, and user endpoints</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold text-white mb-6">
              Ready to Deploy at the Edge?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Join thousands of companies already using our edge computing platform 
              to deliver faster, more reliable applications to users worldwide.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="neon-button hover:scale-105 hover:shadow-lg hover:shadow-cyan-500/25 inline-flex items-center">
                Start Free Trial
                <Zap className="w-4 h-4 ml-2" />
              </button>
              <button className="px-8 py-4 border border-cyan-400 text-cyan-400 rounded-lg hover:bg-cyan-400/10 transition-all">
                Contact Sales
              </button>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default EdgeComputingPage;