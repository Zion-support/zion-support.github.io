import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Settings, 
  BarChart3, 
  Zap, 
  Shield, 
  Target, 
  ArrowRight,
  CheckCircle,
  Star,
  TrendingUp,
  Cpu,
  Wifi,
  Globe
} from 'lucide-react';

export default function FiveGNetworkOptimization() {
  const optimizationFeatures = [
    {
      icon: Settings,
      title: "Performance Tuning",
      description: "Advanced algorithms to optimize network performance and reduce latency"
    },
    {
      icon: BarChart3,
      title: "Real-time Analytics",
      description: "Live monitoring and analytics for network performance optimization"
    },
    {
      icon: Zap,
      title: "Dynamic Routing",
      description: "Intelligent routing that adapts to network conditions in real-time"
    },
    {
      icon: Shield,
      title: "Security Optimization",
      description: "Enhanced security protocols without compromising performance"
    },
    {
      icon: Target,
      title: "Load Balancing",
      description: "Intelligent distribution of network traffic across optimal paths"
    },
    {
      icon: Cpu,
      title: "Edge Computing",
      description: "Optimized edge computing for reduced latency and improved performance"
    }
  ];

  const benefits = [
    "Up to 40% improvement in network performance",
    "Reduced latency by 60% through optimization",
    "99.9% network availability with intelligent failover",
    "Real-time traffic analysis and optimization",
    "Automated network configuration management",
    "Predictive maintenance and issue prevention"
  ];

  const optimizationAreas = [
    {
      title: "Bandwidth Management",
      description: "Intelligent bandwidth allocation and traffic shaping",
      icon: Wifi
    },
    {
      title: "Latency Reduction",
      description: "Advanced routing and edge computing optimization",
      icon: Zap
    },
    {
      title: "Traffic Analysis",
      description: "Real-time monitoring and intelligent traffic management",
      icon: BarChart3
    },
    {
      title: "Security Enhancement",
      description: "Optimized security protocols and threat detection",
      icon: Shield
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-blue-900 text-white">
      {/* Hero Section */}
      <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <div className="mb-8">
            <Settings className="w-20 h-20 text-cyan-400 mx-auto mb-6" />
            <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
              5G Network Optimization
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
              Maximize your 5G network performance with our advanced optimization solutions. 
              Achieve peak efficiency, reduced latency, and superior user experience.
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link
              to="/contact"
              className="bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-600 hover:to-purple-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-105 flex items-center gap-2"
            >
              Optimize Your Network
              <ArrowRight className="w-5 h-5" />
            </Link>
            <Link
              to="/pricing"
              className="border-2 border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-black px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300"
            >
              View Pricing
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
              Advanced Optimization Features
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our comprehensive optimization suite provides everything you need to 
              maximize your 5G network performance and efficiency.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {optimizationFeatures.map((feature, index) => (
              <div key={index} className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700 hover:border-cyan-400 transition-all duration-300 hover:transform hover:scale-105">
                <feature.icon className="w-12 h-12 text-cyan-400 mb-4" />
                <h3 className="text-xl font-semibold mb-3 text-white">{feature.title}</h3>
                <p className="text-gray-300">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-800/30">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
              Performance Improvements You Can Expect
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our optimization solutions deliver measurable improvements across all 
              key network performance metrics.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {benefits.map((benefit, index) => (
              <div key={index} className="flex items-start gap-4">
                <CheckCircle className="w-6 h-6 text-green-400 mt-1 flex-shrink-0" />
                <p className="text-gray-300 text-lg">{benefit}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Optimization Areas Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
              Key Optimization Areas
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              We focus on the most critical aspects of network performance to 
              deliver maximum optimization benefits.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {optimizationAreas.map((area, index) => (
              <div key={index} className="text-center">
                <div className="bg-gradient-to-br from-cyan-500/20 to-purple-500/20 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4">
                  <area.icon className="w-10 h-10 text-cyan-400" />
                </div>
                <h3 className="text-xl font-semibold mb-3 text-white">{area.title}</h3>
                <p className="text-gray-300">{area.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Performance Metrics Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-800/30">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
              Measurable Performance Improvements
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Track your network optimization progress with real-time metrics and analytics.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-gradient-to-br from-green-500/20 to-cyan-500/20 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4">
                <TrendingUp className="w-10 h-10 text-green-400" />
              </div>
              <h3 className="text-3xl font-bold text-green-400 mb-2">40%</h3>
              <p className="text-gray-300">Performance Increase</p>
            </div>
            <div className="text-center">
              <div className="bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4">
                <Zap className="w-10 h-10 text-blue-400" />
              </div>
              <h3 className="text-3xl font-bold text-blue-400 mb-2">60%</h3>
              <p className="text-gray-300">Latency Reduction</p>
            </div>
            <div className="text-center">
              <div className="bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4">
                <Globe className="w-10 h-10 text-purple-400" />
              </div>
              <h3 className="text-3xl font-bold text-purple-400 mb-2">99.9%</h3>
              <p className="text-gray-300">Uptime</p>
            </div>
            <div className="text-center">
              <div className="bg-gradient-to-br from-yellow-500/20 to-orange-500/20 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4">
                <Target className="w-10 h-10 text-yellow-400" />
              </div>
              <h3 className="text-3xl font-bold text-yellow-400 mb-2">50%</h3>
              <p className="text-gray-300">Efficiency Gain</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-gradient-to-r from-cyan-500/10 to-purple-500/10 rounded-2xl p-12 border border-cyan-400/30">
            <Star className="w-16 h-16 text-cyan-400 mx-auto mb-6" />
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
              Ready to Optimize Your 5G Network?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Experience the full potential of your 5G infrastructure with our 
              advanced optimization solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-600 hover:to-purple-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-105"
              >
                Start Optimization
              </Link>
              <Link
                to="/case-studies"
                className="border-2 border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-black px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300"
              >
                View Results
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}