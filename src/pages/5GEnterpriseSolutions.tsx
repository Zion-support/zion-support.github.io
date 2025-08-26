import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  Network, 
  Zap, 
  Shield, 
  Cpu, 
  Database, 
  Globe, 
  Rocket, 
  Target,
  BarChart3,
  Users,
  Clock,
  CheckCircle,
  ArrowRight,
  Star,
  Building,
  Cloud,
  Server,
  Workflow,
  Settings,
  Wifi,
  Signal,
  Smartphone,
  Monitor,
  Phone,
  Mail,
  MapPin,
  TrendingUp,
  Eye,
  Heart,
  DollarSign,
  ShoppingCart,
  Palette,
  Users2,
  Briefcase
} from 'lucide-react';

const FiveGEnterpriseSolutions = () => {
  const solutions = [
    {
      icon: Network,
      title: "5G Network Infrastructure",
      description: "End-to-end 5G network solutions for enterprise deployment",
      features: [
        "Core network architecture",
        "Radio access network (RAN)",
        "Network slicing capabilities",
        "Edge computing integration"
      ],
      benefits: [
        "Ultra-low latency (1-10ms)",
        "High bandwidth (up to 10 Gbps)",
        "Massive IoT connectivity",
        "Network reliability 99.999%"
      ]
    },
    {
      icon: Shield,
      title: "5G Security Solutions",
      description: "Comprehensive security framework for 5G enterprise networks",
      features: [
        "Zero-trust security model",
        "Advanced threat detection",
        "Encryption at rest and in transit",
        "Compliance frameworks (NIST, ISO)"
      ],
      benefits: [
        "Protection against cyber threats",
        "Regulatory compliance",
        "Secure data transmission",
        "Identity and access management"
      ]
    },
    {
      icon: Cpu,
      title: "Edge Computing Platform",
      description: "Distributed computing infrastructure for real-time processing",
      features: [
        "Multi-access edge computing (MEC)",
        "AI/ML inference at the edge",
        "Real-time data processing",
        "Scalable edge nodes"
      ],
      benefits: [
        "Reduced latency",
        "Bandwidth optimization",
        "Local data processing",
        "Cost-effective scaling"
      ]
    },
    {
      icon: Database,
      title: "Data Analytics & Insights",
      description: "Advanced analytics for 5G network optimization",
      features: [
        "Real-time network monitoring",
        "Predictive maintenance",
        "Performance analytics",
        "Business intelligence dashboards"
      ],
      benefits: [
        "Proactive issue resolution",
        "Optimized network performance",
        "Data-driven decisions",
        "ROI optimization"
      ]
    }
  ];

  const useCases = [
    {
      icon: Building,
      title: "Smart Manufacturing",
      description: "Industrial IoT and automation with 5G connectivity",
      benefits: [
        "Real-time production monitoring",
        "Predictive maintenance",
        "Quality control automation",
        "Supply chain optimization"
      ]
    },
    {
      icon: Globe,
      title: "Smart Cities",
      description: "Urban infrastructure management and citizen services",
      benefits: [
        "Traffic management systems",
        "Environmental monitoring",
        "Public safety networks",
        "Smart utility management"
      ]
    },
    {
      icon: Users,
      title: "Remote Work & Collaboration",
      description: "High-performance connectivity for distributed teams",
      benefits: [
        "4K/8K video conferencing",
        "Virtual reality collaboration",
        "Cloud application access",
        "Seamless mobility"
      ]
    },
    {
      icon: Rocket,
      title: "Autonomous Vehicles",
      description: "Connected and autonomous transportation systems",
      benefits: [
        "Vehicle-to-everything (V2X) communication",
        "Real-time traffic updates",
        "Safety-critical applications",
        "Fleet management optimization"
      ]
    }
  ];

  const industries = [
    {
      name: "Healthcare",
      icon: Heart,
      applications: [
        "Telemedicine and remote surgery",
        "Medical device connectivity",
        "Patient monitoring systems",
        "Healthcare data analytics"
      ]
    },
    {
      name: "Finance",
      icon: DollarSign,
      applications: [
        "High-frequency trading",
        "Secure financial transactions",
        "Real-time risk assessment",
        "Digital banking services"
      ]
    },
    {
      name: "Education",
      icon: Users2,
      applications: [
        "Virtual and augmented reality learning",
        "Remote education platforms",
        "Collaborative learning tools",
        "Educational content delivery"
      ]
    },
    {
      name: "Retail",
      icon: ShoppingCart,
      applications: [
        "Smart inventory management",
        "Customer experience optimization",
        "Supply chain visibility",
        "Personalized marketing"
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 text-white">
      {/* Hero Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              5G Enterprise
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">
                {" "}Solutions
              </span>
            </h1>
            <p className="text-xl text-gray-300 max-w-4xl mx-auto">
              Transform your business with next-generation 5G technology. Our enterprise solutions 
              deliver ultra-fast connectivity, ultra-low latency, and massive IoT capabilities 
              to power the future of digital transformation.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Key Benefits */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h2 className="text-3xl font-bold text-white mb-4">Why Choose 5G for Enterprise?</h2>
            <p className="text-lg text-gray-300">Unlock unprecedented opportunities with 5G technology</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <motion.div
              className="text-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Zap className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Ultra-Fast Speed</h3>
              <p className="text-gray-300">Up to 10 Gbps download speeds for lightning-fast data transfer</p>
            </motion.div>

            <motion.div
              className="text-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-emerald-500 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Clock className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Ultra-Low Latency</h3>
              <p className="text-gray-300">1-10ms latency for real-time applications and critical operations</p>
            </motion.div>

            <motion.div
              className="text-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
            >
              <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Network className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Massive Connectivity</h3>
              <p className="text-gray-300">Support for up to 1 million devices per square kilometer</p>
            </motion.div>

            <motion.div
              className="text-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              <div className="w-16 h-16 bg-gradient-to-r from-orange-500 to-red-500 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Shield className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Enhanced Security</h3>
              <p className="text-gray-300">Advanced encryption and security protocols for enterprise-grade protection</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Solutions Grid */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white/5">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.7 }}
          >
            <h2 className="text-3xl font-bold text-white mb-4">Enterprise 5G Solutions</h2>
            <p className="text-lg text-gray-300">Comprehensive solutions tailored for enterprise needs</p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {solutions.map((solution, index) => (
              <motion.div
                key={solution.title}
                className="bg-white/10 backdrop-blur-lg rounded-xl p-8 border border-white/20 hover:border-white/40 transition-all duration-300"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.8 + (index * 0.1) }}
                whileHover={{ y: -5 }}
              >
                <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-lg flex items-center justify-center mb-6">
                  <solution.icon className="h-8 w-8 text-white" />
                </div>
                
                <h3 className="text-2xl font-bold text-white mb-4">{solution.title}</h3>
                <p className="text-gray-300 mb-6">{solution.description}</p>
                
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="text-lg font-semibold text-blue-400 mb-3">Key Features</h4>
                    <ul className="space-y-2">
                      {solution.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="text-gray-300 text-sm flex items-start">
                          <CheckCircle className="w-4 h-4 text-green-400 mr-2 mt-0.5 flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div>
                    <h4 className="text-lg font-semibold text-cyan-400 mb-3">Benefits</h4>
                    <ul className="space-y-2">
                      {solution.benefits.map((benefit, benefitIndex) => (
                        <li key={benefitIndex} className="text-gray-300 text-sm flex items-start">
                          <Star className="w-4 h-4 text-yellow-400 mr-2 mt-0.5 flex-shrink-0" />
                          {benefit}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.2 }}
          >
            <h2 className="text-3xl font-bold text-white mb-4">5G Use Cases</h2>
            <p className="text-lg text-gray-300">Discover how 5G is transforming industries</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {useCases.map((useCase, index) => (
              <motion.div
                key={useCase.title}
                className="bg-white/5 backdrop-blur-lg rounded-xl p-6 border border-white/10 hover:border-white/20 transition-all duration-300 text-center"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 1.3 + (index * 0.1) }}
                whileHover={{ y: -5 }}
              >
                <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <useCase.icon className="h-8 w-8 text-white" />
                </div>
                
                <h3 className="text-xl font-bold text-white mb-3">{useCase.title}</h3>
                <p className="text-gray-300 mb-4">{useCase.description}</p>
                
                <ul className="text-left space-y-2">
                  {useCase.benefits.map((benefit, benefitIndex) => (
                    <li key={benefitIndex} className="text-gray-400 text-sm flex items-start">
                      <div className="w-2 h-2 bg-blue-400 rounded-full mt-2 mr-2 flex-shrink-0"></div>
                      {benefit}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Industries */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white/5">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.6 }}
          >
            <h2 className="text-3xl font-bold text-white mb-4">Industry Applications</h2>
            <p className="text-lg text-gray-300">5G solutions across diverse industry verticals</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {industries.map((industry, index) => (
              <motion.div
                key={industry.name}
                className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20 hover:border-white/40 transition-all duration-300"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 1.7 + (index * 0.1) }}
                whileHover={{ y: -5 }}
              >
                <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <industry.icon className="h-8 w-8 text-white" />
                </div>
                
                <h3 className="text-xl font-bold text-white mb-4 text-center">{industry.name}</h3>
                
                <ul className="space-y-2">
                  {industry.applications.map((application, appIndex) => (
                    <li key={appIndex} className="text-gray-300 text-sm flex items-start">
                      <div className="w-2 h-2 bg-blue-400 rounded-full mt-2 mr-2 flex-shrink-0"></div>
                      {application}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 2.0 }}
          >
            <h2 className="text-4xl font-bold text-white mb-6">Ready to Transform Your Business with 5G?</h2>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Join the 5G revolution and unlock new possibilities for your enterprise. 
              Our expert team is ready to help you implement cutting-edge 5G solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                to="/contact"
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-600 to-cyan-600 text-white font-semibold rounded-lg hover:from-blue-700 hover:to-cyan-700 transition-all duration-300"
              >
                Get Started
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
              <Link 
                to="/5g-resources"
                className="inline-flex items-center px-8 py-4 border-2 border-white/20 text-white font-semibold rounded-lg hover:bg-white/10 transition-all duration-300"
              >
                Learn More
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default FiveGEnterpriseSolutions;