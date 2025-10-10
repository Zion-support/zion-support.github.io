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

const IoTPlatformPage: React.FC = () => {
  const features = [
    {
      icon: Wifi,
      title: 'Device Connectivity',
      description: 'Connect and manage millions of IoT devices with our scalable connectivity platform.',
      benefits: ['Multi-protocol support', 'Device management', 'Remote provisioning', 'OTA updates']
    },
    {
      icon: Database,
      title: 'Data Processing',
      description: 'Real-time data ingestion, processing, and analytics for IoT applications.',
      benefits: ['Stream processing', 'Data normalization', 'Real-time analytics', 'Historical analysis']
    },
    {
      icon: Cloud,
      title: 'Cloud Integration',
      description: 'Seamless integration with cloud platforms and enterprise systems.',
      benefits: ['Cloud-native architecture', 'Auto-scaling', 'Global deployment', 'API integration']
    },
    {
      icon: Shield,
      title: 'Security & Compliance',
      description: 'End-to-end security for IoT devices, data, and communications.',
      benefits: ['Device authentication', 'Data encryption', 'Access control', 'Compliance ready']
    }
  ];

  const useCases = [
    {
      title: 'Smart Manufacturing',
      description: 'Industrial IoT solutions for predictive maintenance and process optimization.',
      icon: Settings
    },
    {
      title: 'Smart Cities',
      description: 'Urban IoT infrastructure for traffic management and environmental monitoring.',
      icon: Globe
    },
    {
      title: 'Agriculture',
      description: 'Precision farming with IoT sensors for crop monitoring and irrigation control.',
      icon: Activity
    },
    {
      title: 'Healthcare',
      description: 'Medical IoT devices for patient monitoring and remote healthcare delivery.',
      icon: Smartphone
    },
    {
      title: 'Energy Management',
      description: 'Smart grid and energy monitoring solutions for utilities and consumers.',
      icon: BarChart
    },
    {
      title: 'Fleet Management',
      description: 'Vehicle tracking and management solutions for transportation companies.',
      icon: Network
    }
  ];

  return (
    <>
      <Helmet>
        <title>IoT Platform Development - Zion Tech Group</title>
        <meta name="description" content="Comprehensive IoT platform development services including device connectivity, data processing, and cloud integration for smart applications." />
        <meta name="keywords" content="IoT platform, IoT development, smart devices, IoT connectivity, industrial IoT, smart cities" />
        <link rel="canonical" href="https://ziontechgroup.com/iot-platform" />
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
                <span>Connected World Solutions</span>
              </div>
              
              <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 cyber-text">
                IoT Platform
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500">
                  Development
                </span>
              </h1>
              
              <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8 leading-relaxed">
                Build comprehensive IoT platforms that connect, manage, and analyze data from millions of devices. 
                From smart cities to industrial automation, we create the foundation for connected solutions.
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
                <div className="text-4xl font-bold text-cyan-400 mb-2">10M+</div>
                <div className="text-gray-300">Devices Supported</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-purple-400 mb-2">99.9%</div>
                <div className="text-gray-300">Uptime Guarantee</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-pink-400 mb-2">50+</div>
                <div className="text-gray-300">Protocols Supported</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-green-400 mb-2">Global</div>
                <div className="text-gray-300">Cloud Coverage</div>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-6">
                Comprehensive IoT Platform
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Our IoT platform provides everything you need to build, deploy, and scale connected applications.
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
                IoT Use Cases & Applications
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                From smart manufacturing to connected cities, our IoT platform powers the future of connectivity.
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

        {/* Platform Architecture */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="bg-gradient-to-r from-slate-800 to-slate-700 rounded-2xl p-12">
              <div className="text-center mb-12">
                <h2 className="text-4xl font-bold text-white mb-6">
                  IoT Platform Architecture
                </h2>
                <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                  Our scalable, cloud-native architecture ensures reliable IoT operations at any scale.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                <div className="text-center">
                  <div className="w-16 h-16 bg-cyan-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Wifi className="w-8 h-8 text-cyan-400" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-2">Device Layer</h3>
                  <p className="text-gray-300">IoT devices, sensors, and edge gateways</p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-purple-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Network className="w-8 h-8 text-purple-400" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-2">Connectivity</h3>
                  <p className="text-gray-300">Multi-protocol connectivity and device management</p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-pink-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Database className="w-8 h-8 text-pink-400" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-2">Data Processing</h3>
                  <p className="text-gray-300">Real-time data ingestion, processing, and analytics</p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Cloud className="w-8 h-8 text-green-400" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-2">Applications</h3>
                  <p className="text-gray-300">Business applications and user interfaces</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold text-white mb-6">
              Ready to Build Your IoT Platform?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Join thousands of companies already using our IoT platform to create 
              innovative connected solutions and drive digital transformation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="neon-button hover:scale-105 hover:shadow-lg hover:shadow-cyan-500/25 inline-flex items-center">
                Start Building
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

export default IoTPlatformPage;