import React from 'react';
import { Helmet } from 'react-helmet-async';
import { 
  Wifi, 
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

const FiveGImplementationPage: React.FC = () => {
  const features = [
    {
      icon: Zap,
      title: 'Ultra-Fast Speeds',
      description: 'Deploy 5G networks with speeds up to 10 Gbps for next-generation applications.',
      benefits: ['10 Gbps peak speeds', '1 Gbps average speeds', 'Low latency', 'High capacity']
    },
    {
      icon: Globe,
      title: 'Global Coverage',
      description: 'Comprehensive 5G network deployment across multiple countries and regions.',
      benefits: ['Multi-country deployment', 'Urban & rural coverage', 'Seamless roaming', 'Global standards']
    },
    {
      icon: Database,
      title: 'Network Slicing',
      description: 'Create virtual networks tailored for specific applications and use cases.',
      benefits: ['Custom network slices', 'QoS guarantees', 'Resource isolation', 'Flexible deployment']
    },
    {
      icon: Shield,
      title: 'Enhanced Security',
      description: 'Advanced security features designed for 5G networks and IoT applications.',
      benefits: ['End-to-end encryption', 'Identity management', 'Threat detection', 'Privacy protection']
    }
  ];

  const useCases = [
    {
      title: 'Smart Cities',
      description: '5G-powered smart city infrastructure for traffic management and public services.',
      icon: Globe
    },
    {
      title: 'Industrial IoT',
      description: 'High-speed connectivity for manufacturing automation and industrial applications.',
      icon: Settings
    },
    {
      title: 'Autonomous Vehicles',
      description: 'Ultra-low latency connectivity for autonomous vehicle communication and control.',
      icon: Smartphone
    },
    {
      title: 'AR/VR Applications',
      description: 'High-bandwidth 5G for immersive augmented and virtual reality experiences.',
      icon: Activity
    },
    {
      title: 'Telemedicine',
      description: 'Real-time medical consultations and remote surgery with 5G connectivity.',
      icon: BarChart
    },
    {
      title: 'Edge Computing',
      description: '5G edge computing for real-time data processing and decision making.',
      icon: Server
    }
  ];

  return (
    <>
      <Helmet>
        <title>5G Network Implementation - Zion Tech Group</title>
        <meta name="description" content="Complete 5G network implementation services including infrastructure deployment, network slicing, and IoT connectivity solutions." />
        <meta name="keywords" content="5G implementation, 5G networks, network deployment, IoT connectivity, smart cities, edge computing" />
        <link rel="canonical" href="https://ziontechgroup.com/5g-implementation" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
        {/* Hero Section */}
        <section className="relative py-20 px-4 overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(0,255,255,0.1)_0%,transparent_50%)] animate-pulse" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(139,92,246,0.1)_0%,transparent_50%)] animate-pulse" style={{ animationDelay: '1s' }} />
          
          <div className="max-w-7xl mx-auto relative">
            <div className="text-center mb-16">
              <div className="inline-flex items-center space-x-2 bg-cyan-500/10 text-cyan-400 px-4 py-2 rounded-full text-sm font-medium mb-6">
                <Wifi className="w-4 h-4" />
                <span>Next-Generation Networks</span>
              </div>
              
              <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 cyber-text">
                5G Network
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500">
                  Implementation
                </span>
              </h1>
              
              <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8 leading-relaxed">
                Deploy next-generation 5G networks with ultra-fast speeds, low latency, and massive connectivity. 
                Transform your infrastructure with cutting-edge 5G technology.
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
                <div className="text-4xl font-bold text-cyan-400 mb-2">10 Gbps</div>
                <div className="text-gray-300">Peak Speeds</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-purple-400 mb-2">&lt; 1ms</div>
                <div className="text-gray-300">Ultra-Low Latency</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-pink-400 mb-2">1M+</div>
                <div className="text-gray-300">Devices per km²</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-green-400 mb-2">99.9%</div>
                <div className="text-gray-300">Reliability</div>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-6">
                Advanced 5G Capabilities
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Our 5G implementation provides the speed, capacity, and reliability for next-generation applications.
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
                5G Use Cases & Applications
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                From smart cities to autonomous vehicles, 5G enables the next generation of connected applications.
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

        {/* Implementation Process */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="bg-gradient-to-r from-slate-800 to-slate-700 rounded-2xl p-12">
              <div className="text-center mb-12">
                <h2 className="text-4xl font-bold text-white mb-6">
                  5G Implementation Process
                </h2>
                <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                  Our proven methodology ensures successful 5G network deployment and optimization.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                <div className="text-center">
                  <div className="w-16 h-16 bg-cyan-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Settings className="w-8 h-8 text-cyan-400" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-2">Planning & Design</h3>
                  <p className="text-gray-300">Network architecture design and coverage planning</p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-purple-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Server className="w-8 h-8 text-purple-400" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-2">Infrastructure</h3>
                  <p className="text-gray-300">Core network and RAN infrastructure deployment</p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-pink-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <BarChart className="w-8 h-8 text-pink-400" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-2">Testing & Optimization</h3>
                  <p className="text-gray-300">Performance testing and network optimization</p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <CheckCircle className="w-8 h-8 text-green-400" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-2">Launch & Support</h3>
                  <p className="text-gray-300">Network launch and ongoing support services</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold text-white mb-6">
              Ready to Deploy 5G?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Join the 5G revolution with our comprehensive implementation services. 
              Get ahead of the competition with next-generation connectivity.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="neon-button hover:scale-105 hover:shadow-lg hover:shadow-cyan-500/25 inline-flex items-center">
                Start Planning
                <Zap className="w-4 h-4 ml-2" />
              </button>
              <button className="px-8 py-4 border border-cyan-400 text-cyan-400 rounded-lg hover:bg-cyan-400/10 transition-all">
                Contact Experts
              </button>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default FiveGImplementationPage;