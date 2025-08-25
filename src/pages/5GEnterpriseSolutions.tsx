import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Network, 
  Zap, 
  Shield, 
  Globe, 
  Cpu, 
  BarChart3, 
  Users, 
  Building,
  ArrowRight,
  CheckCircle,
  Star,
  Rocket,
  Cloud,
  Lock,
  Wifi,
  Smartphone,
  Server,
  Database
} from 'lucide-react';

const FiveGEnterpriseSolutions: React.FC = () => {
  const features = [
    {
      icon: Zap,
      title: "Ultra-Fast Connectivity",
      description: "Lightning-fast 5G speeds up to 10 Gbps for seamless enterprise operations"
    },
    {
      icon: Shield,
      title: "Enterprise-Grade Security",
      description: "Advanced security protocols and encryption for sensitive business data"
    },
    {
      icon: Globe,
      title: "Global Coverage",
      description: "Worldwide 5G network coverage with seamless roaming capabilities"
    },
    {
      icon: Cpu,
      title: "Low Latency",
      description: "Ultra-low latency (<1ms) for real-time applications and IoT devices"
    },
    {
      icon: Users,
      title: "Massive IoT Support",
      description: "Support for millions of connected devices per square kilometer"
    },
    {
      icon: Building,
      title: "Enterprise Integration",
      description: "Seamless integration with existing enterprise infrastructure and systems"
    }
  ];

  const solutions = [
    {
      title: "5G Private Networks",
      description: "Dedicated 5G networks for enterprise campuses, factories, and offices",
      features: ["Custom network slicing", "Enhanced security", "Predictable performance", "Full control"]
    },
    {
      title: "5G Edge Computing",
      description: "Distributed computing infrastructure at the network edge for faster processing",
      features: ["Reduced latency", "Bandwidth optimization", "Real-time analytics", "Local processing"]
    },
    {
      title: "5G IoT Platforms",
      description: "Comprehensive IoT management with 5G connectivity",
      features: ["Device management", "Data analytics", "Automation", "Scalability"]
    },
    {
      title: "5G Network Optimization",
      description: "AI-powered network optimization for maximum performance and efficiency",
      features: ["Predictive maintenance", "Traffic optimization", "Resource allocation", "Performance monitoring"]
    }
  ];

  const benefits = [
    "10x faster data transfer speeds",
    "99.9% network reliability",
    "50% reduction in operational costs",
    "Real-time data processing",
    "Enhanced mobile workforce productivity",
    "Future-proof technology infrastructure"
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-blue-900 text-white">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <div className="flex items-center justify-center mb-6">
              <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-2xl flex items-center justify-center mr-4">
                <Network className="w-8 h-8 text-white" />
              </div>
              <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                5G Enterprise Solutions
              </h1>
            </div>
            <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto mb-8">
              Transform your enterprise with cutting-edge 5G technology. Experience ultra-fast connectivity, 
              ultra-low latency, and massive IoT support for the next generation of business operations.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-lg text-white font-semibold hover:from-cyan-600 hover:to-blue-700 transition-all duration-200 transform hover:scale-105"
              >
                Get Started
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
              <Link
                to="/services/5g-network-optimization"
                className="inline-flex items-center px-8 py-4 border border-cyan-500 text-cyan-400 rounded-lg font-semibold hover:bg-cyan-500 hover:text-white transition-all duration-200"
              >
                Learn More
              </Link>
            </div>
          </div>
        </div>
        
        {/* Background Elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-20 left-10 w-72 h-72 bg-cyan-500/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"></div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Why Choose 5G for Your Enterprise?
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Our 5G solutions deliver unprecedented performance, security, and scalability for modern enterprises
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-xl p-6 hover:border-cyan-500/50 transition-all duration-300 group"
              >
                <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                  <feature.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
                <p className="text-gray-400">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Solutions Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-800/20">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Comprehensive 5G Solutions
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              From private networks to edge computing, we provide end-to-end 5G solutions for enterprises
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {solutions.map((solution, index) => (
              <div
                key={index}
                className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-xl p-8 hover:border-cyan-500/50 transition-all duration-300"
              >
                <h3 className="text-2xl font-semibold text-white mb-4">{solution.title}</h3>
                <p className="text-gray-400 mb-6">{solution.description}</p>
                <ul className="space-y-3">
                  {solution.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-gray-300">
                      <CheckCircle className="w-5 h-5 text-cyan-400 mr-3 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Enterprise Benefits
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Discover how 5G technology can revolutionize your business operations
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className="flex items-center p-4 bg-gray-800/30 rounded-lg border border-gray-700"
              >
                <Star className="w-6 h-6 text-cyan-400 mr-3 flex-shrink-0" />
                <span className="text-gray-300">{benefit}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-gradient-to-r from-cyan-500/10 to-blue-500/10 border border-cyan-500/20 rounded-2xl p-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Transform Your Enterprise with 5G?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Join the future of enterprise connectivity. Our experts are ready to help you implement 
              cutting-edge 5G solutions that will drive your business forward.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-lg text-white font-semibold hover:from-cyan-600 hover:to-blue-700 transition-all duration-200 transform hover:scale-105"
              >
                Schedule Consultation
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
              <Link
                to="/services/5g-network-optimization"
                className="inline-flex items-center px-8 py-4 border border-cyan-500 text-cyan-400 rounded-lg font-semibold hover:bg-cyan-500 hover:text-white transition-all duration-200"
              >
                View Network Solutions
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default FiveGEnterpriseSolutions;