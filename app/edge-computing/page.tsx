import React from 'react';
import { Helmet } from 'react-helmet-async';
import { 
  Cpu, 
  Wifi, 
  Zap, 
  Globe, 
  CheckCircle, 
  ArrowRight,
  Server,
  Database,
  Network,
  Monitor,
  Settings,
  AlertTriangle,
  TrendingUp,
  Users,
  Shield,
  BarChart3
} from 'lucide-react';

const EdgeComputingPage: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>Edge Computing Infrastructure - Zion Tech Group</title>
        <meta name="description" content="Distributed computing infrastructure for IoT, low-latency applications, and real-time processing at the edge of your network." />
        <meta name="keywords" content="edge computing, IoT infrastructure, low latency, distributed computing, real-time processing, edge analytics" />
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
                <span>Edge Computing Infrastructure</span>
              </div>
              
              <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
                Distributed Computing
                <span className="block bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
                  at the Edge
                </span>
              </h1>
              
              <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
                Deploy powerful computing resources closer to your data sources with our edge computing 
                infrastructure. Reduce latency, improve performance, and enable real-time processing.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-600 hover:to-purple-700 text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-cyan-500/25 inline-flex items-center">
                  Get Started
                  <ArrowRight className="w-5 h-5 ml-2" />
                </button>
                <button className="border border-cyan-400 text-cyan-400 hover:bg-cyan-400/10 font-bold py-4 px-8 rounded-lg transition-all duration-300 inline-flex items-center">
                  View Demo
                </button>
              </div>
            </div>

            {/* Key Metrics */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-16">
              <div className="bg-slate-800/50 backdrop-blur-sm border border-cyan-400/20 rounded-xl p-6 text-center">
                <div className="text-3xl font-bold text-cyan-400 mb-2">&lt;5ms</div>
                <div className="text-gray-300">Latency</div>
              </div>
              <div className="bg-slate-800/50 backdrop-blur-sm border border-purple-400/20 rounded-xl p-6 text-center">
                <div className="text-3xl font-bold text-purple-400 mb-2">99.9%</div>
                <div className="text-gray-300">Uptime</div>
              </div>
              <div className="bg-slate-800/50 backdrop-blur-sm border border-pink-400/20 rounded-xl p-6 text-center">
                <div className="text-3xl font-bold text-pink-400 mb-2">50+</div>
                <div className="text-gray-300">Edge Locations</div>
              </div>
              <div className="bg-slate-800/50 backdrop-blur-sm border border-green-400/20 rounded-xl p-6 text-center">
                <div className="text-3xl font-bold text-green-400 mb-2">24/7</div>
                <div className="text-gray-300">Monitoring</div>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Edge Computing Features
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Comprehensive edge computing solutions designed to bring processing power 
                closer to your data sources for optimal performance and reliability.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-slate-800/50 backdrop-blur-sm border border-cyan-400/20 rounded-xl p-8 hover:border-cyan-400/40 transition-all duration-300">
                <div className="w-12 h-12 bg-cyan-500/20 rounded-lg flex items-center justify-center mb-6">
                  <Zap className="w-6 h-6 text-cyan-400" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-4">Ultra-Low Latency</h3>
                <p className="text-gray-300 mb-4">
                  Process data locally at the edge for sub-5ms response times and real-time applications.
                </p>
                <ul className="space-y-2 text-sm text-gray-400">
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                    Local data processing
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                    Real-time analytics
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                    Instant decision making
                  </li>
                </ul>
              </div>

              <div className="bg-slate-800/50 backdrop-blur-sm border border-purple-400/20 rounded-xl p-8 hover:border-purple-400/40 transition-all duration-300">
                <div className="w-12 h-12 bg-purple-500/20 rounded-lg flex items-center justify-center mb-6">
                  <Globe className="w-6 h-6 text-purple-400" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-4">Global Edge Network</h3>
                <p className="text-gray-300 mb-4">
                  Deploy across our global network of edge locations for worldwide coverage and performance.
                </p>
                <ul className="space-y-2 text-sm text-gray-400">
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                    50+ edge locations
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                    Global CDN integration
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                    Automatic failover
                  </li>
                </ul>
              </div>

              <div className="bg-slate-800/50 backdrop-blur-sm border border-pink-400/20 rounded-xl p-8 hover:border-pink-400/40 transition-all duration-300">
                <div className="w-12 h-12 bg-pink-500/20 rounded-lg flex items-center justify-center mb-6">
                  <Wifi className="w-6 h-6 text-pink-400" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-4">IoT Integration</h3>
                <p className="text-gray-300 mb-4">
                  Seamlessly connect and process data from IoT devices and sensors at the edge.
                </p>
                <ul className="space-y-2 text-sm text-gray-400">
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                    Device management
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                    Data aggregation
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                    Protocol support
                  </li>
                </ul>
              </div>

              <div className="bg-slate-800/50 backdrop-blur-sm border border-green-400/20 rounded-xl p-8 hover:border-green-400/40 transition-all duration-300">
                <div className="w-12 h-12 bg-green-500/20 rounded-lg flex items-center justify-center mb-6">
                  <BarChart3 className="w-6 h-6 text-green-400" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-4">Edge Analytics</h3>
                <p className="text-gray-300 mb-4">
                  Run advanced analytics and machine learning models directly at the edge.
                </p>
                <ul className="space-y-2 text-sm text-gray-400">
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                    Real-time ML inference
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                    Data preprocessing
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                    Pattern recognition
                  </li>
                </ul>
              </div>

              <div className="bg-slate-800/50 backdrop-blur-sm border border-blue-400/20 rounded-xl p-8 hover:border-blue-400/40 transition-all duration-300">
                <div className="w-12 h-12 bg-blue-500/20 rounded-lg flex items-center justify-center mb-6">
                  <Shield className="w-6 h-6 text-blue-400" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-4">Edge Security</h3>
                <p className="text-gray-300 mb-4">
                  Comprehensive security measures to protect your edge infrastructure and data.
                </p>
                <ul className="space-y-2 text-sm text-gray-400">
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                    End-to-end encryption
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                    Access control
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                    Threat detection
                  </li>
                </ul>
              </div>

              <div className="bg-slate-800/50 backdrop-blur-sm border border-yellow-400/20 rounded-xl p-8 hover:border-yellow-400/40 transition-all duration-300">
                <div className="w-12 h-12 bg-yellow-500/20 rounded-lg flex items-center justify-center mb-6">
                  <Settings className="w-6 h-6 text-yellow-400" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-4">Auto-Scaling</h3>
                <p className="text-gray-300 mb-4">
                  Automatically scale edge resources based on demand and workload requirements.
                </p>
                <ul className="space-y-2 text-sm text-gray-400">
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                    Dynamic scaling
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                    Load balancing
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                    Resource optimization
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Use Cases Section */}
        <section className="py-20 px-4 bg-slate-800/30">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Edge Computing Use Cases
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Discover how edge computing can transform your business across various industries and applications.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-slate-800/50 backdrop-blur-sm border border-cyan-400/20 rounded-xl p-8">
                <h3 className="text-xl font-semibold text-white mb-4">Autonomous Vehicles</h3>
                <p className="text-gray-300 mb-4">
                  Real-time processing for autonomous vehicle decision making and safety systems.
                </p>
                <ul className="space-y-2 text-sm text-gray-400">
                  <li>• Object detection and recognition</li>
                  <li>• Path planning and navigation</li>
                  <li>• Collision avoidance systems</li>
                </ul>
              </div>

              <div className="bg-slate-800/50 backdrop-blur-sm border border-purple-400/20 rounded-xl p-8">
                <h3 className="text-xl font-semibold text-white mb-4">Smart Manufacturing</h3>
                <p className="text-gray-300 mb-4">
                  Industrial IoT and real-time monitoring for smart factory operations.
                </p>
                <ul className="space-y-2 text-sm text-gray-400">
                  <li>• Predictive maintenance</li>
                  <li>• Quality control systems</li>
                  <li>• Production optimization</li>
                </ul>
              </div>

              <div className="bg-slate-800/50 backdrop-blur-sm border border-pink-400/20 rounded-xl p-8">
                <h3 className="text-xl font-semibold text-white mb-4">AR/VR Applications</h3>
                <p className="text-gray-300 mb-4">
                  Low-latency processing for immersive augmented and virtual reality experiences.
                </p>
                <ul className="space-y-2 text-sm text-gray-400">
                  <li>• Real-time rendering</li>
                  <li>• Motion tracking</li>
                  <li>• Spatial computing</li>
                </ul>
              </div>

              <div className="bg-slate-800/50 backdrop-blur-sm border border-green-400/20 rounded-xl p-8">
                <h3 className="text-xl font-semibold text-white mb-4">Smart Cities</h3>
                <p className="text-gray-300 mb-4">
                  Urban infrastructure monitoring and management with edge computing.
                </p>
                <ul className="space-y-2 text-sm text-gray-400">
                  <li>• Traffic management</li>
                  <li>• Environmental monitoring</li>
                  <li>• Public safety systems</li>
                </ul>
              </div>

              <div className="bg-slate-800/50 backdrop-blur-sm border border-blue-400/20 rounded-xl p-8">
                <h3 className="text-xl font-semibold text-white mb-4">Healthcare IoT</h3>
                <p className="text-gray-300 mb-4">
                  Real-time patient monitoring and medical device data processing.
                </p>
                <ul className="space-y-2 text-sm text-gray-400">
                  <li>• Vital signs monitoring</li>
                  <li>• Emergency response</li>
                  <li>• Telemedicine support</li>
                </ul>
              </div>

              <div className="bg-slate-800/50 backdrop-blur-sm border border-yellow-400/20 rounded-xl p-8">
                <h3 className="text-xl font-semibold text-white mb-4">Retail Analytics</h3>
                <p className="text-gray-300 mb-4">
                  Real-time customer analytics and personalized shopping experiences.
                </p>
                <ul className="space-y-2 text-sm text-gray-400">
                  <li>• Customer behavior analysis</li>
                  <li>• Inventory management</li>
                  <li>• Personalized recommendations</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Deploy Edge Computing Today
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Transform your applications with edge computing infrastructure. Reduce latency, 
              improve performance, and enable real-time processing capabilities.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-600 hover:to-purple-700 text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-cyan-500/25 inline-flex items-center">
                Start Edge Deployment
                <ArrowRight className="w-5 h-5 ml-2" />
              </button>
              <button className="border border-cyan-400 text-cyan-400 hover:bg-cyan-400/10 font-bold py-4 px-8 rounded-lg transition-all duration-300 inline-flex items-center">
                Download Edge Guide
              </button>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default EdgeComputingPage;