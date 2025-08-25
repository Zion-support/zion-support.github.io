import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, Zap, Shield, Users, TrendingUp, Globe, Lock, CheckCircle, Star, Cpu, Database, Building2, Network, Server, Monitor, Rocket, Code, Settings, Wifi, Signal, Smartphone, Cloud } from 'lucide-react';
import { SEO } from '@/components/SEO';

const FiveGEnterpriseSolutions = () => {
  const solutions = [
    {
      title: "Private 5G Networks",
      description: "Custom private 5G infrastructure for enterprise environments with complete control and security.",
      icon: Network,
      features: ["Dedicated spectrum", "On-premises deployment", "Ultra-low latency", "Guaranteed bandwidth"],
      color: "from-purple-500 to-pink-500"
    },
    {
      title: "Edge Computing Integration",
      description: "Combine 5G connectivity with edge computing for real-time data processing and AI applications.",
      icon: Server,
      features: ["Multi-access edge computing", "Real-time analytics", "AI at the edge", "Distributed processing"],
      color: "from-blue-500 to-cyan-500"
    },
    {
      title: "IoT and Industrial Automation",
      description: "Enable massive IoT deployments with 5G for smart factories and industrial automation.",
      icon: Settings,
      features: ["Massive machine-type communications", "Critical communications", "Industrial IoT", "Remote control"],
      color: "from-green-500 to-emerald-500"
    },
    {
      title: "AR/VR and Mixed Reality",
      description: "Power immersive experiences with 5G's high bandwidth and low latency capabilities.",
      icon: Monitor,
      features: ["Ultra-HD streaming", "Real-time rendering", "Collaborative environments", "Remote training"],
      color: "from-orange-500 to-red-500"
    },
    {
      title: "Network Slicing",
      description: "Create customized network slices for different enterprise applications and use cases.",
      icon: Wifi,
      features: ["Dedicated virtual networks", "Service level agreements", "Quality of service", "Resource allocation"],
      color: "from-indigo-500 to-purple-500"
    },
    {
      title: "Security and Compliance",
      description: "Enterprise-grade security features built into 5G networks for data protection and compliance.",
      icon: Shield,
      features: ["End-to-end encryption", "Network authentication", "Zero trust architecture", "Compliance frameworks"],
      color: "from-yellow-500 to-orange-500"
    }
  ];

  const industries = [
    {
      name: "Manufacturing",
      description: "Smart factories with connected machinery and real-time monitoring",
      icon: Building2,
      applications: ["Predictive maintenance", "Quality control", "Supply chain optimization", "Digital twins"]
    },
    {
      name: "Healthcare",
      description: "Remote patient monitoring and telemedicine applications",
      icon: Users,
      applications: ["Remote surgery", "Patient monitoring", "Medical IoT", "Emergency response"]
    },
    {
      name: "Transportation",
      description: "Connected vehicles and intelligent transportation systems",
      icon: Rocket,
      applications: ["Autonomous vehicles", "Traffic management", "Fleet tracking", "Smart logistics"]
    },
    {
      name: "Energy",
      description: "Smart grid management and renewable energy optimization",
      icon: Zap,
      applications: ["Grid monitoring", "Energy trading", "Predictive analytics", "Asset management"]
    }
  ];

  const benefits = [
    { icon: Signal, title: "Ultra-Low Latency", description: "Sub-millisecond response times for mission-critical applications" },
    { icon: Wifi, title: "High Bandwidth", description: "Multi-gigabit speeds for data-intensive operations" },
    { icon: Network, title: "Massive Connectivity", description: "Connect millions of devices per square kilometer" },
    { icon: Shield, title: "Enhanced Security", description: "Built-in security features and encryption protocols" },
    { icon: Cloud, title: "Edge Computing", description: "Process data closer to the source for faster insights" },
    { icon: Settings, title: "Network Flexibility", description: "Configurable network slices for different use cases" }
  ];

  return (
    <>
      <SEO 
        title="5G Enterprise Solutions | Next-Generation Connectivity"
        description="Transform your business with Zion Tech Group's 5G enterprise solutions. Private networks, edge computing, IoT integration, and industrial automation."
        keywords="5G enterprise, private 5G networks, edge computing, industrial automation, network slicing, 5G security"
      />
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900">
        {/* Hero Section */}
        <motion.section 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="relative pt-20 pb-16 px-4 sm:px-6 lg:px-8"
        >
          <div className="max-w-7xl mx-auto">
            <div className="text-center">
              <motion.div
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.2 }}
                className="inline-flex items-center px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-300 text-sm font-medium mb-8"
              >
                <Signal className="w-4 h-4 mr-2" />
                Next-Generation Enterprise Connectivity
              </motion.div>
              
              <motion.h1 
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.3 }}
                className="text-4xl md:text-6xl font-bold text-white mb-6"
              >
                5G Enterprise
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
                  Solutions
                </span>
              </motion.h1>
              
              <motion.p 
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.4 }}
                className="text-xl text-gray-300 mb-12 max-w-3xl mx-auto"
              >
                Transform your business operations with cutting-edge 5G technology. From private networks to edge computing integration, unlock unprecedented connectivity and performance.
              </motion.p>
              
              <motion.div 
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.5 }}
                className="flex flex-col sm:flex-row gap-4 justify-center"
              >
                <Link 
                  to="/contact"
                  className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-200 transform hover:scale-105"
                >
                  Get Started
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
                <Link 
                  to="/demo"
                  className="inline-flex items-center px-8 py-4 border border-gray-300 text-gray-300 font-semibold rounded-lg hover:bg-white/10 transition-all duration-200"
                >
                  Request Demo
                </Link>
              </motion.div>
            </div>
          </div>
        </motion.section>

        {/* Solutions Grid */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Comprehensive 5G Solutions
              </h2>
              <p className="text-gray-300 text-lg max-w-3xl mx-auto">
                Our enterprise 5G solutions are designed to meet the unique needs of modern businesses
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {solutions.map((solution, index) => {
                const Icon = solution.icon;
                return (
                  <motion.div
                    key={solution.title}
                    initial={{ y: 20, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{ delay: index * 0.1, duration: 0.8 }}
                    viewport={{ once: true }}
                    className="bg-white/5 backdrop-blur-sm rounded-xl p-8 border border-white/10 hover:border-white/20 transition-all duration-300 group"
                  >
                    <div className={`inline-flex p-3 rounded-lg bg-gradient-to-r ${solution.color} mb-6`}>
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-white mb-4">{solution.title}</h3>
                    <p className="text-gray-300 mb-6">{solution.description}</p>
                    <ul className="space-y-2">
                      {solution.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center text-sm text-gray-300">
                          <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-black/20">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                5G Enterprise Benefits
              </h2>
              <p className="text-gray-300 text-lg max-w-3xl mx-auto">
                Discover the transformative advantages of 5G technology for your business
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {benefits.map((benefit, index) => {
                const Icon = benefit.icon;
                return (
                  <motion.div
                    key={benefit.title}
                    initial={{ y: 20, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{ delay: index * 0.1, duration: 0.8 }}
                    viewport={{ once: true }}
                    className="text-center"
                  >
                    <div className="inline-flex p-4 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 mb-6">
                      <Icon className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-white mb-4">{benefit.title}</h3>
                    <p className="text-gray-300">{benefit.description}</p>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Industry Applications */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Industry Applications
              </h2>
              <p className="text-gray-300 text-lg max-w-3xl mx-auto">
                5G technology is transforming industries across the board
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {industries.map((industry, index) => {
                const Icon = industry.icon;
                return (
                  <motion.div
                    key={industry.name}
                    initial={{ y: 20, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{ delay: index * 0.1, duration: 0.8 }}
                    viewport={{ once: true }}
                    className="bg-white/5 backdrop-blur-sm rounded-xl p-8 border border-white/10"
                  >
                    <div className="flex items-center mb-6">
                      <div className="inline-flex p-3 rounded-lg bg-gradient-to-r from-blue-500 to-purple-500 mr-4">
                        <Icon className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-white">{industry.name}</h3>
                        <p className="text-gray-300">{industry.description}</p>
                      </div>
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                      {industry.applications.map((app, idx) => (
                        <div key={idx} className="flex items-center text-sm text-gray-300">
                          <Star className="w-4 h-4 text-yellow-400 mr-2 flex-shrink-0" />
                          {app}
                        </div>
                      ))}
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-blue-600 to-purple-600">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Ready to Transform Your Business with 5G?
              </h2>
              <p className="text-xl text-blue-100 mb-8">
                Contact our experts to discuss your 5G enterprise solution requirements
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link 
                  to="/contact"
                  className="inline-flex items-center px-8 py-4 bg-white text-blue-600 font-semibold rounded-lg hover:bg-gray-100 transition-all duration-200 transform hover:scale-105"
                >
                  Contact Our Experts
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
                <Link 
                  to="/pricing"
                  className="inline-flex items-center px-8 py-4 border border-white text-white font-semibold rounded-lg hover:bg-white/10 transition-all duration-200"
                >
                  View Pricing
                </Link>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </>
  );
};

export default FiveGEnterpriseSolutions;