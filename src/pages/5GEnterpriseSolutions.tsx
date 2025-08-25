import React from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { 
  SignalIcon, 
  CpuChipIcon, 
  GlobeAltIcon, 
  RocketLaunchIcon,
  ChartBarIcon,
  ShieldCheckIcon,
  CogIcon,
  LightBulbIcon
} from '@heroicons/react/24/outline';

const FiveGEnterpriseSolutions: React.FC = () => {
  const features = [
    {
      icon: SignalIcon,
      title: "Ultra-Fast Connectivity",
      description: "Lightning-fast 5G networks with speeds up to 10 Gbps for enterprise applications and real-time operations."
    },
    {
      icon: CpuChipIcon,
      title: "Low Latency",
      description: "Ultra-low latency of less than 1ms enabling real-time applications like autonomous vehicles and remote surgery."
    },
    {
      icon: GlobeAltIcon,
      title: "Massive IoT Support",
      description: "Support for millions of connected devices per square kilometer for comprehensive IoT deployments."
    },
    {
      icon: RocketLaunchIcon,
      title: "Network Slicing",
      description: "Customized network segments for different enterprise applications with guaranteed performance."
    },
    {
      icon: ChartBarIcon,
      title: "Advanced Analytics",
      description: "Real-time network analytics and performance monitoring for optimal enterprise operations."
    },
    {
      icon: ShieldCheckIcon,
      title: "Enhanced Security",
      description: "Enterprise-grade security with advanced encryption and threat protection for 5G networks."
    }
  ];

  const benefits = [
    "Increase network speed by 100x compared to 4G",
    "Reduce latency to under 1ms for real-time applications",
    "Support up to 1 million devices per square kilometer",
    "Enable autonomous operations and remote control",
    "Improve operational efficiency by 300%",
    "Reduce infrastructure costs by 40%"
  ];

  const useCases = [
    {
      title: "Smart Manufacturing",
      description: "5G-powered smart factories with real-time monitoring, autonomous robots, and predictive maintenance."
    },
    {
      title: "Autonomous Vehicles",
      description: "Connected autonomous vehicles with real-time communication and ultra-low latency control systems."
    },
    {
      title: "Remote Healthcare",
      description: "Telemedicine and remote surgery with real-time high-definition video and haptic feedback."
    },
    {
      title: "Smart Cities",
      description: "Intelligent city infrastructure with connected sensors, traffic management, and public safety systems."
    }
  ];

  const networkMetrics = [
    {
      metric: "Peak Data Rate",
      value: "10 Gbps",
      description: "Maximum download speed"
    },
    {
      metric: "Latency",
      value: "<1ms",
      description: "Network response time"
    },
    {
      metric: "Device Density",
      value: "1M/km²",
      description: "Connected devices per area"
    },
    {
      metric: "Mobility",
      value: "500 km/h",
      description: "Maximum movement speed support"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-blue-900 text-white">
      <Helmet>
        <title>5G Enterprise Solutions - Zion Tech Group</title>
        <meta name="description" content="Revolutionary 5G enterprise solutions with ultra-fast connectivity, low latency, and massive IoT support. Transform your business with next-generation network technology." />
        <meta name="keywords" content="5G enterprise, 5G solutions, network infrastructure, IoT connectivity, low latency, enterprise networking" />
        <link rel="canonical" href="https://ziontechgroup.com/5g-enterprise-solutions" />
      </Helmet>

      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent mb-6">
              5G Enterprise Solutions
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto mb-8">
              Next-generation 5G networks designed for enterprise transformation with ultra-fast 
              connectivity, ultra-low latency, and massive IoT support for the future of business.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white font-semibold py-3 px-8 rounded-lg transition-all duration-300 transform hover:scale-105">
                Start Network Assessment
              </button>
              <button className="border border-cyan-500 text-cyan-400 hover:bg-cyan-500 hover:text-white font-semibold py-3 px-8 rounded-lg transition-all duration-300">
                View Demo
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-4">
              Revolutionary 5G Capabilities
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our 5G enterprise solutions combine cutting-edge network technology with 
              advanced enterprise features to deliver unprecedented connectivity and performance.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700 hover:border-cyan-500 transition-all duration-300"
              >
                <feature.icon className="w-12 h-12 text-cyan-400 mb-4" />
                <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
                <p className="text-gray-300">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-800/30">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-4">
              Transform Your Network Infrastructure
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Experience unprecedented network performance and capabilities with our 5G 
              enterprise solutions that enable the future of business.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h3 className="text-2xl font-semibold text-white mb-6">Key Benefits</h3>
              <ul className="space-y-4">
                {benefits.map((benefit, index) => (
                  <li key={index} className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-cyan-400 rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-gray-300">{benefit}</span>
                  </li>
                ))}
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="bg-gradient-to-br from-cyan-500/20 to-blue-600/20 rounded-xl p-8 border border-cyan-500/30"
            >
              <h3 className="text-2xl font-semibold text-white mb-6">Network Performance</h3>
              <div className="space-y-4">
                {networkMetrics.map((metric, index) => (
                  <div key={index} className="flex justify-between items-center">
                    <span className="text-gray-300">{metric.metric}</span>
                    <span className="text-cyan-400 font-semibold">{metric.value}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Use Cases Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-4">
              Industry Applications
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              From smart manufacturing to autonomous vehicles, our 5G enterprise solutions 
              enable revolutionary applications across all industries.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {useCases.map((useCase, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700 hover:border-cyan-500 transition-all duration-300"
              >
                <h3 className="text-xl font-semibold text-white mb-3">{useCase.title}</h3>
                <p className="text-gray-300">{useCase.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Technology Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-800/30">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-4">
              Advanced 5G Technology
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Built on the latest 5G standards and technologies for maximum performance, 
              reliability, and future-proof enterprise solutions.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center"
            >
              <CogIcon className="w-16 h-16 text-cyan-400 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-white mb-3">Network Slicing</h3>
              <p className="text-gray-300">Customized network segments for different enterprise applications</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-center"
            >
              <LightBulbIcon className="w-16 h-16 text-blue-400 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-white mb-3">Edge Computing</h3>
              <p className="text-gray-300">Distributed computing for ultra-low latency applications</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-center"
            >
              <ShieldCheckIcon className="w-16 h-16 text-green-400 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-white mb-3">Security & Privacy</h3>
              <p className="text-gray-300">Enterprise-grade security with advanced encryption</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-cyan-600/20 to-blue-600/20">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl font-bold text-white mb-6">
              Ready for 5G Transformation?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Transform your enterprise with 5G technology that enables the future of 
              business with unprecedented speed, connectivity, and capabilities.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white font-semibold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105">
                Get Started Today
              </button>
              <button className="border border-cyan-500 text-cyan-400 hover:bg-cyan-500 hover:text-white font-semibold py-4 px-8 rounded-lg transition-all duration-300">
                Schedule Consultation
              </button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default FiveGEnterpriseSolutions;