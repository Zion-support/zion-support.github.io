import React from 'react';
import { Link } from 'react-router-dom';
import { Wifi, Zap, Shield, BarChart3, Globe, Users, Database, Settings, Network, Server, ArrowRight, TrendingUp, Activity, Gauge } from 'lucide-react';

const FiveGNetworkOptimization: React.FC = () => {
  const features = [
    {
      icon: TrendingUp,
      title: "Performance Optimization",
      description: "Advanced algorithms to maximize network throughput and minimize latency."
    },
    {
      icon: Activity,
      title: "Real-time Monitoring",
      description: "Continuous network performance monitoring with instant alerting and response."
    },
    {
      icon: Gauge,
      title: "Bandwidth Management",
      description: "Intelligent bandwidth allocation and traffic prioritization for optimal performance."
    },
    {
      icon: BarChart3,
      title: "Analytics & Insights",
      description: "Deep network analytics to identify bottlenecks and optimization opportunities."
    },
    {
      icon: Shield,
      title: "Security Optimization",
      description: "Enhanced security protocols without compromising network performance."
    },
    {
      icon: Network,
      title: "Load Balancing",
      description: "Intelligent traffic distribution across network resources for optimal utilization."
    }
  ];

  const optimizationTechniques = [
    {
      title: "Network Slicing",
      description: "Custom network segments optimized for specific application requirements."
    },
    {
      title: "Edge Computing",
      description: "Distributed computing to reduce latency and improve response times."
    },
    {
      title: "AI-Powered Routing",
      description: "Machine learning algorithms for intelligent traffic routing and optimization."
    },
    {
      title: "Quality of Service",
      description: "Priority-based traffic management for critical applications."
    },
    {
      title: "Spectrum Optimization",
      description: "Dynamic spectrum allocation for maximum efficiency and coverage."
    },
    {
      title: "Interference Management",
      description: "Advanced techniques to minimize network interference and improve signal quality."
    }
  ];

  const benefits = [
    {
      metric: "40%",
      label: "Performance Boost",
      description: "Significant improvement in network speed and reliability"
    },
    {
      metric: "60%",
      label: "Latency Reduction",
      description: "Dramatically reduced response times for applications"
    },
    {
      metric: "80%",
      label: "Efficiency Gain",
      description: "Better resource utilization and cost optimization"
    },
    {
      metric: "99.9%",
      label: "Uptime",
      description: "Enhanced network reliability and availability"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-blue-900 text-white">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 quantum-particles"></div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="mb-8">
            <div className="inline-flex items-center px-4 py-2 bg-cyan-500/20 border border-cyan-500/50 rounded-full text-cyan-400 text-sm font-medium mb-6">
              <Gauge className="w-4 h-4 mr-2" />
              5G Network Optimization
            </div>
            <h1 className="text-5xl lg:text-7xl font-bold bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent mb-6">
              5G Network
              <br />
              <span className="text-white">Optimization</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
              Maximize your 5G network performance with advanced optimization techniques, 
              AI-powered analytics, and intelligent traffic management solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white font-semibold rounded-lg transition-all duration-300 transform hover:scale-105"
              >
                Optimize Your Network
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
              <Link
                to="/services"
                className="inline-flex items-center px-8 py-4 border border-cyan-500/50 text-cyan-400 hover:bg-cyan-500/10 font-semibold rounded-lg transition-all duration-300"
              >
                Learn More
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">
              Optimization Features
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Advanced tools and techniques to maximize your 5G network performance
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 rounded-xl p-6 hover:border-cyan-500/50 transition-all duration-300"
              >
                <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-lg flex items-center justify-center mb-4">
                  <feature.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">
                  {feature.title}
                </h3>
                <p className="text-gray-400">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Optimization Techniques Section */}
      <section className="py-20 bg-gray-900/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">
              Advanced Optimization Techniques
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Cutting-edge methods to enhance your 5G network performance
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {optimizationTechniques.map((technique, index) => (
              <div
                key={index}
                className="bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 rounded-xl p-6 hover:border-cyan-500/50 transition-all duration-300"
              >
                <h3 className="text-xl font-semibold text-white mb-3">
                  {technique.title}
                </h3>
                <p className="text-gray-400">
                  {technique.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">
              Performance Improvements
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Measurable results from our network optimization services
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className="text-center bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 rounded-xl p-6 hover:border-cyan-500/50 transition-all duration-300"
              >
                <div className="text-4xl font-bold text-cyan-400 mb-2">
                  {benefit.metric}
                </div>
                <div className="text-lg font-semibold text-white mb-2">
                  {benefit.label}
                </div>
                <p className="text-gray-400 text-sm">
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-cyan-500/10 to-blue-500/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Ready to Optimize Your 5G Network?
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Our network optimization experts can help you achieve maximum performance from your 5G infrastructure.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white font-semibold rounded-lg transition-all duration-300 transform hover:scale-105"
            >
              Start Optimization
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
            <Link
              to="/services"
              className="inline-flex items-center px-8 py-4 border border-cyan-500/50 text-cyan-400 hover:bg-cyan-500/10 font-semibold rounded-lg transition-all duration-300"
            >
              View All Services
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default FiveGNetworkOptimization;