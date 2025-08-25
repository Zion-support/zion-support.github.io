import React from 'react';
import { Link } from 'react-router-dom';
import { Wifi, Zap, Shield, BarChart3, Globe, Users, Database, Settings, Network, Server, ArrowRight } from 'lucide-react';

const FiveGEnterpriseNetwork: React.FC = () => {
  const features = [
    {
      icon: Wifi,
      title: "Enterprise-Grade 5G Network",
      description: "Dedicated 5G network infrastructure designed specifically for enterprise needs."
    },
    {
      icon: Network,
      title: "Network Slicing",
      description: "Custom network slices for different business applications and security requirements."
    },
    {
      icon: Shield,
      title: "Private Network Security",
      description: "Isolated network segments with enterprise-grade security and compliance."
    },
    {
      icon: BarChart3,
      title: "Network Analytics",
      description: "Real-time network performance monitoring and predictive analytics."
    },
    {
      icon: Server,
      title: "Edge Computing Integration",
      description: "Seamless integration with edge computing for low-latency applications."
    },
    {
      icon: Users,
      title: "Multi-Tenant Support",
      description: "Support for multiple business units with isolated network segments."
    }
  ];

  const useCases = [
    {
      title: "Smart Manufacturing",
      description: "5G-powered IoT networks for industrial automation and real-time monitoring."
    },
    {
      title: "Healthcare Networks",
      description: "Secure 5G networks for telemedicine and remote patient monitoring."
    },
    {
      title: "Financial Services",
      description: "Ultra-low latency networks for high-frequency trading and financial applications."
    },
    {
      title: "Transportation & Logistics",
      description: "Connected vehicle networks and smart logistics management."
    },
    {
      title: "Retail & Hospitality",
      description: "Enhanced customer experiences with AR/VR and smart retail solutions."
    },
    {
      title: "Government & Defense",
      description: "Secure, reliable networks for critical government operations."
    }
  ];

  const benefits = [
    {
      metric: "99.99%",
      label: "Network Uptime",
      description: "Enterprise-grade reliability and availability"
    },
    {
      metric: "1ms",
      label: "Ultra-Low Latency",
      description: "Near-instantaneous response times"
    },
    {
      metric: "10Gbps",
      label: "Peak Speeds",
      description: "Lightning-fast data transfer capabilities"
    },
    {
      metric: "1000+",
      label: "Connected Devices",
      description: "Massive IoT device support per network slice"
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
              <Wifi className="w-4 h-4 mr-2" />
              5G Enterprise Network
            </div>
            <h1 className="text-5xl lg:text-7xl font-bold bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent mb-6">
              Enterprise 5G Network
              <br />
              <span className="text-white">Infrastructure</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
              Build your own private 5G network infrastructure with enterprise-grade security, 
              reliability, and performance. Deploy custom network slices for different business applications.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white font-semibold rounded-lg transition-all duration-300 transform hover:scale-105"
              >
                Get Started
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
              Enterprise Network Features
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Advanced 5G network capabilities designed for enterprise requirements
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

      {/* Use Cases Section */}
      <section className="py-20 bg-gray-900/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">
              Industry Use Cases
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Transform your industry with dedicated 5G network infrastructure
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {useCases.map((useCase, index) => (
              <div
                key={index}
                className="bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 rounded-xl p-6 hover:border-cyan-500/50 transition-all duration-300"
              >
                <h3 className="text-xl font-semibold text-white mb-3">
                  {useCase.title}
                </h3>
                <p className="text-gray-400">
                  {useCase.description}
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
              Network Performance Benefits
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Unlock the full potential of 5G technology for your enterprise
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
            Ready to Build Your Enterprise 5G Network?
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Contact our network infrastructure experts to design and deploy your custom 5G enterprise network.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white font-semibold rounded-lg transition-all duration-300 transform hover:scale-105"
            >
              Start Your Network Project
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

export default FiveGEnterpriseNetwork;