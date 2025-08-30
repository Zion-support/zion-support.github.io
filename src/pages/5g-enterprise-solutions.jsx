import React from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { Wifi, Zap, Shield, BarChart3, Network, Users, Globe, GitFork, Target, Rocket, Lock, Cpu, Settings } from 'lucide-react';
const FiveGEnterpriseSolutions = () => {
    const features = [
        {
            icon: Wifi,
            title: "Ultra-Fast Connectivity",
            description: "Lightning-fast 5G network speeds for enterprise applications"
        },
        {
            icon: Zap,
            title: "Low Latency",
            description: "Ultra-low latency for real-time applications and IoT devices"
        },
        {
            icon: Shield,
            title: "Enhanced Security",
            description: "Advanced security protocols for enterprise-grade protection"
        },
        {
            icon: BarChart3,
            title: "Network Slicing",
            description: "Customized network segments for different business needs"
        },
        {
            icon: Network,
            title: "Edge Computing",
            description: "Distributed computing at the network edge for faster processing"
        },
        {
            icon: Users,
            title: "Massive IoT Support",
            description: "Support for thousands of connected devices simultaneously"
        }
    ];
    const solutions = [
        {
            title: "Smart Manufacturing",
            description: "Enable Industry 4.0 with real-time monitoring and automation",
            applications: ["Predictive Maintenance", "Quality Control", "Supply Chain Optimization"]
        },
        {
            title: "Healthcare Innovation",
            description: "Transform healthcare delivery with connected medical devices",
            applications: ["Remote Monitoring", "Telemedicine", "Medical IoT"]
        },
        {
            title: "Autonomous Vehicles",
            description: "Power the future of transportation with reliable connectivity",
            applications: ["Vehicle-to-Everything", "Fleet Management", "Safety Systems"]
        },
        {
            title: "Smart Cities",
            description: "Build intelligent urban infrastructure and services",
            applications: ["Traffic Management", "Energy Grids", "Public Safety"]
        }
    ];
    const benefits = [
        {
            icon: Rocket,
            title: "10x Faster Speeds",
            description: "Achieve unprecedented network performance"
        },
        {
            icon: Target,
            title: "Improved Efficiency",
            description: "Streamline operations with real-time connectivity"
        },
        {
            icon: Globe,
            title: "Global Reach",
            description: "Connect your enterprise worldwide"
        }
    ];
    return (<div className="min-h-screen bg-gradient-to-br from-slate-900 via-teal-900 to-slate-900">
      <Helmet>
        <title>5G Enterprise Solutions - Zion Tech Group</title>
        <meta name="description" content="Revolutionary 5G enterprise solutions for ultra-fast connectivity, low latency, and massive IoT support across all industries."/>
        <meta name="keywords" content="5G enterprise, 5G solutions, enterprise connectivity, IoT, network slicing, Zion Tech Group"/>
      </Helmet>

      {/* Hero Section */}
      <section className="relative overflow-hidden py-20">
        <div className="absolute inset-0 bg-gradient-to-r from-teal-600/20 to-blue-600/20"></div>
        <div className="relative container mx-auto px-4 text-center">
          <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="text-5xl md:text-7xl font-bold text-white mb-6">
            5G Enterprise
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-blue-400">
              Solutions
            </span>
          </motion.h1>
          <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.2 }} className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
            Transform your enterprise with next-generation 5G connectivity. 
            Experience ultra-fast speeds, ultra-low latency, and massive IoT support.
          </motion.p>
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.4 }} className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-gradient-to-r from-teal-600 to-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-teal-700 hover:to-blue-700 transition-all duration-300 transform hover:scale-105">
              Start Free Trial
            </button>
            <button className="border border-white/30 text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition-all duration-300">
              Schedule Demo
            </button>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-black/20">
        <div className="container mx-auto px-4">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">
              5G Technology Features
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Revolutionary 5G capabilities for enterprise transformation
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (<motion.div key={index} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: index * 0.1 }} className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 hover:border-white/20 transition-all duration-300">
                <div className="w-12 h-12 bg-gradient-to-r from-teal-500 to-blue-500 rounded-lg flex items-center justify-center mb-4">
                  <feature.icon className="w-6 h-6 text-white"/>
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
                <p className="text-gray-300">{feature.description}</p>
              </motion.div>))}
          </div>
        </div>
      </section>

      {/* Solutions Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">
              Industry Solutions
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Transform industries with 5G-powered enterprise solutions
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {solutions.map((solution, index) => (<motion.div key={index} initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.8, delay: index * 0.2 }} className="bg-gradient-to-r from-teal-600/10 to-blue-600/10 rounded-xl p-8 border border-teal-500/20">
                <h3 className="text-2xl font-semibold text-white mb-4">{solution.title}</h3>
                <p className="text-gray-300 text-lg mb-6">{solution.description}</p>
                <ul className="space-y-2">
                  {solution.applications.map((app, appIndex) => (<li key={appIndex} className="flex items-center text-gray-300">
                      <div className="w-2 h-2 bg-teal-400 rounded-full mr-3"></div>
                      {app}
                    </li>))}
                </ul>
              </motion.div>))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-gradient-to-r from-teal-600/20 to-blue-600/20">
        <div className="container mx-auto px-4">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">
              Enterprise Benefits
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Transform your business with 5G technology advantages
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (<motion.div key={index} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: index * 0.1 }} className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-teal-500 to-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <benefit.icon className="w-8 h-8 text-white"/>
                </div>
                <h3 className="text-2xl font-semibold text-white mb-3">{benefit.title}</h3>
                <p className="text-gray-300">{benefit.description}</p>
              </motion.div>))}
          </div>
        </div>
      </section>

      {/* Technology Stack Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">
              5G Technology Stack
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Comprehensive 5G infrastructure and enterprise solutions
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
            { icon: Network, name: "Core Network", description: "5G core infrastructure" },
            { icon: Cpu, name: "Edge Computing", description: "Distributed edge nodes" },
            { icon: Lock, name: "Security Layer", description: "Enterprise-grade security" },
            { icon: GitFork, name: "Management", description: "Network orchestration" }
        ].map((tech, index) => (<motion.div key={index} initial={{ opacity: 0, scale: 0.8 }} whileInView={{ opacity: 1, scale: 1 }} transition={{ duration: 0.8, delay: index * 0.1 }} className="text-center">
                <div className="w-20 h-20 bg-gradient-to-r from-teal-500/20 to-blue-500/20 rounded-xl flex items-center justify-center mx-auto mb-4 border border-teal-500/30">
                  <tech.icon className="w-10 h-10 text-teal-400"/>
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">{tech.name}</h3>
                <p className="text-gray-300 text-sm">{tech.description}</p>
              </motion.div>))}
          </div>
        </div>
      </section>

      {/* Implementation Process Section */}
      <section className="py-20 bg-gradient-to-r from-teal-600/20 to-blue-600/20">
        <div className="container mx-auto px-4">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">
              Implementation Process
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Seamless 5G deployment for your enterprise
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
            { icon: Target, title: "Assessment", description: "Evaluate current infrastructure and requirements" },
            { icon: Settings, title: "Planning", description: "Design 5G network architecture and deployment strategy" },
            { icon: Wifi, title: "Deployment", description: "Install and configure 5G infrastructure" },
            { icon: BarChart3, title: "Optimization", description: "Monitor performance and optimize network" }
        ].map((step, index) => (<motion.div key={index} initial={{ opacity: 0, scale: 0.8 }} whileInView={{ opacity: 1, scale: 1 }} transition={{ duration: 0.8, delay: index * 0.2 }} className="text-center">
                <div className="w-20 h-20 bg-gradient-to-r from-teal-500/20 to-blue-500/20 rounded-xl flex items-center justify-center mx-auto mb-4 border border-teal-500/30">
                  <step.icon className="w-10 h-10 text-teal-400"/>
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">{step.title}</h3>
                <p className="text-gray-300 text-sm">{step.description}</p>
              </motion.div>))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <h2 className="text-4xl font-bold text-white mb-6">
              Ready to Transform with 5G?
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Join leading enterprises leveraging 5G for competitive advantage
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-teal-900 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-300">
                Get Started Now
              </button>
              <button className="border border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition-all duration-300">
                Contact Sales
              </button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>);
};
export default FiveGEnterpriseSolutions;
