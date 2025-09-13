import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { 
  Atom, 
  Zap, 
  Shield, 
  Brain, 
  ArrowRight,
  CheckCircle,
  Star,
  Users,
  TrendingUp,
  Award,
  Globe,
  ChevronRight,
  Cpu,
  Database,
  Lock,
  Gauge
} from 'lucide-react';

export default function QuantumComputingSolutions2025() {
  const quantumServices = [
    {
      icon: <Atom className="w-8 h-8 text-cyan-400" />,
      title: "Quantum Financial Risk Assessment",
      description: "Advanced quantum algorithms for real-time portfolio optimization and risk analysis with unprecedented accuracy and speed.",
      features: ["Quantum Risk Modeling", "Real-time Portfolio Optimization", "Market Prediction Algorithms", "85% Accuracy Improvement"],
      price: "$3,499/month",
      marketPrice: "$8,000-25,000/month",
      applications: ["Investment Banks", "Hedge Funds", "Asset Management", "Insurance Companies"]
    },
    {
      icon: <Lock className="w-8 h-8 text-purple-400" />,
      title: "Quantum Cryptography Platform",
      description: "Unbreakable encryption using quantum key distribution for secure communications and data protection.",
      features: ["Quantum Key Distribution", "Unbreakable Encryption", "Real-time Secure Communication", "Future-Proof Security"],
      price: "$4,999/month",
      marketPrice: "$12,000-35,000/month",
      applications: ["Government Agencies", "Financial Institutions", "Healthcare Organizations", "Defense Contractors"]
    },
    {
      icon: <Brain className="w-8 h-8 text-green-400" />,
      title: "Quantum Drug Discovery Platform",
      description: "Revolutionary quantum molecular modeling for accelerated drug discovery and pharmaceutical research.",
      features: ["Quantum Molecular Modeling", "Drug Interaction Prediction", "Toxicity Assessment", "10x Faster Discovery"],
      price: "$6,999/month",
      marketPrice: "$15,000-50,000/month",
      applications: ["Pharmaceutical Companies", "Biotechnology Firms", "Research Institutions", "Medical Device Companies"]
    },
    {
      icon: <Gauge className="w-8 h-8 text-blue-400" />,
      title: "Quantum Supply Chain Optimization",
      description: "Advanced quantum algorithms for complex supply chain optimization and logistics management.",
      features: ["Quantum Optimization Algorithms", "Multi-variable Optimization", "Real-time Route Planning", "40% Cost Reduction"],
      price: "$2,999/month",
      marketPrice: "$6,000-18,000/month",
      applications: ["Manufacturing", "Retail Chains", "Logistics Companies", "E-commerce Platforms"]
    }
  ];

  const quantumCapabilities = [
    {
      icon: <Cpu className="w-6 h-6 text-cyan-400" />,
      title: "Quantum Processing Power",
      description: "Exponential computational speed for complex problem solving"
    },
    {
      icon: <Database className="w-6 h-6 text-purple-400" />,
      title: "Quantum Data Analysis",
      description: "Advanced pattern recognition and data correlation"
    },
    {
      icon: <Shield className="w-6 h-6 text-green-400" />,
      title: "Quantum Security",
      description: "Unbreakable encryption and secure communications"
    },
    {
      icon: <TrendingUp className="w-6 h-6 text-blue-400" />,
      title: "Quantum Optimization",
      description: "Optimal solutions for complex multi-variable problems"
    }
  ];

  const testimonials = [
    {
      name: "Dr. James Mitchell",
      company: "Quantum Finance Corp",
      role: "Chief Quantum Officer",
      content: "Zion Tech Group's quantum financial risk assessment has revolutionized our portfolio management. We've achieved 85% better accuracy in risk prediction and 40% higher returns.",
      rating: 5,
      image: "/api/placeholder/60/60"
    },
    {
      name: "Dr. Maria Santos",
      company: "BioQuantum Labs",
      role: "Research Director",
      content: "The quantum drug discovery platform has accelerated our research by 10x. We've identified promising compounds in months instead of years.",
      rating: 5,
      image: "/api/placeholder/60/60"
    },
    {
      name: "Robert Chen",
      company: "SecureComm Solutions",
      role: "Security Director",
      content: "Quantum cryptography provides unprecedented security. Our communications are now truly unbreakable, giving us complete peace of mind.",
      rating: 5,
      image: "/api/placeholder/60/60"
    }
  ];

  const stats = [
    { number: "10x", label: "Faster Processing" },
    { number: "99.9%", label: "Security Guarantee" },
    { number: "85%", label: "Accuracy Improvement" },
    { number: "40%", label: "Cost Reduction" }
  ];

  return (
    <>
      <Head>
        <title>Quantum Computing Solutions 2025 - Zion Tech Group | Revolutionary Quantum Technology</title>
        <meta name="description" content="Experience the future with Zion Tech Group's quantum computing solutions. Quantum financial risk assessment, cryptography, drug discovery, and supply chain optimization." />
        <meta name="keywords" content="quantum computing, quantum cryptography, quantum algorithms, quantum optimization, quantum security, quantum finance" />
        <meta property="og:title" content="Quantum Computing Solutions 2025 - Revolutionary Quantum Technology" />
        <meta property="og:description" content="Transform your business with cutting-edge quantum computing technology for finance, security, research, and optimization." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://ziontechgroup.com/quantum-computing-solutions-2025" />
      </Head>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-indigo-900 to-slate-900">
        {/* Navigation */}
        <nav className="relative z-50 px-6 py-4">
          <div className="max-w-7xl mx-auto flex items-center justify-between">
            <Link href="/" className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-lg flex items-center justify-center">
                <Atom className="w-5 h-5 text-white" />
              </div>
              <span className="text-2xl font-bold text-white">Zion Tech Group</span>
            </Link>
            <div className="hidden md:flex items-center space-x-8">
              <Link href="/" className="text-white hover:text-cyan-300 transition-colors">Home</Link>
              <Link href="/services" className="text-white hover:text-cyan-300 transition-colors">Services</Link>
              <Link href="/about" className="text-white hover:text-cyan-300 transition-colors">About</Link>
              <Link href="/contact" className="text-white hover:text-cyan-300 transition-colors">Contact</Link>
            </div>
            <Link href="/contact" className="px-4 py-2 text-white border border-white/20 rounded-lg hover:bg-white/10 transition-colors">
              Get Started
            </Link>
          </div>
        </nav>

        {/* Hero Section */}
        <section className="relative px-6 py-20 lg:py-32">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center"
            >
              <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-cyan-500/20 to-indigo-500/20 border border-cyan-400/30 rounded-full text-cyan-300 text-sm font-medium mb-6">
                <Atom className="w-4 h-4 mr-2" />
                Quantum Computing Solutions 2025
              </div>
              <h1 className="text-5xl lg:text-7xl font-bold text-white mb-6">
                Harness the Power of
                <span className="block bg-gradient-to-r from-cyan-400 to-indigo-400 bg-clip-text text-transparent">
                  Quantum Computing
                </span>
              </h1>
              <p className="text-xl lg:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
                Experience revolutionary quantum computing solutions that solve complex problems with unprecedented speed and accuracy. 
                From financial risk assessment to drug discovery, quantum technology transforms industries.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/contact" className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-cyan-600 to-indigo-600 hover:from-cyan-700 hover:to-indigo-700 text-white font-semibold rounded-lg transition-all duration-300 transform hover:scale-105">
                  Start Quantum Journey
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
                <Link href="#services" className="inline-flex items-center px-8 py-4 border border-white/20 text-white hover:bg-white/10 font-semibold rounded-lg transition-all duration-300">
                  Explore Quantum Services
                  <ChevronRight className="ml-2 w-5 h-5" />
                </Link>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="px-6 py-16">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="grid grid-cols-2 lg:grid-cols-4 gap-8"
            >
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-4xl lg:text-5xl font-bold text-white mb-2">
                    {stat.number}
                  </div>
                  <div className="text-gray-300 text-lg">
                    {stat.label}
                  </div>
                </div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Quantum Capabilities Section */}
        <section className="px-6 py-20">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
                Quantum Computing Capabilities
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Revolutionary quantum technology that redefines computational possibilities and transforms industries.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
              {quantumCapabilities.map((capability, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.2 }}
                  className="text-center"
                >
                  <div className="inline-flex p-4 bg-gradient-to-r from-cyan-500/20 to-indigo-500/20 rounded-2xl mb-4">
                    {capability.icon}
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">{capability.title}</h3>
                  <p className="text-gray-300">{capability.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Quantum Services Section */}
        <section id="services" className="px-6 py-20">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
                Quantum Computing Solutions
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Cutting-edge quantum technology solutions that solve complex problems across multiple industries 
                with unprecedented speed and accuracy.
              </p>
            </motion.div>

            <div className="space-y-12">
              {quantumServices.map((service, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.2 }}
                  className="relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-8 backdrop-blur-xl hover:border-cyan-400/30 transition-all duration-300 group"
                >
                  <div className="pointer-events-none absolute -inset-px -z-10 bg-gradient-to-r from-cyan-500/0 via-indigo-400/10 to-cyan-500/0 opacity-0 blur-2xl transition-opacity group-hover:opacity-100" />
                  
                  <div className="flex flex-col lg:flex-row items-start lg:items-center gap-8">
                    <div className="flex-shrink-0">
                      <div className="p-4 bg-gradient-to-r from-cyan-500/20 to-indigo-500/20 rounded-2xl mb-4">
                        {service.icon}
                      </div>
                    </div>
                    
                    <div className="flex-grow">
                      <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-4">
                        <h3 className="text-3xl font-bold text-white mb-2 lg:mb-0">{service.title}</h3>
                        <div className="flex items-center gap-4">
                          <span className="text-2xl font-bold text-cyan-400">{service.price}</span>
                          <span className="text-sm text-gray-400 line-through">{service.marketPrice}</span>
                        </div>
                      </div>

                      <p className="text-gray-300 mb-6 text-lg leading-relaxed">
                        {service.description}
                      </p>

                      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                        <div>
                          <h4 className="text-white font-semibold mb-3">Key Features</h4>
                          <div className="space-y-2">
                            {service.features.map((feature, featureIndex) => (
                              <div key={featureIndex} className="flex items-center">
                                <CheckCircle className="w-4 h-4 text-green-400 mr-3 flex-shrink-0" />
                                <span className="text-gray-300 text-sm">{feature}</span>
                              </div>
                            ))}
                          </div>
                        </div>
                        
                        <div>
                          <h4 className="text-white font-semibold mb-3">Ideal For</h4>
                          <div className="space-y-2">
                            {service.applications.map((application, appIndex) => (
                              <div key={appIndex} className="flex items-center">
                                <Star className="w-4 h-4 text-yellow-400 mr-3 flex-shrink-0" />
                                <span className="text-gray-300 text-sm">{application}</span>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>

                      <div className="mt-6">
                        <Link href="/contact" className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-cyan-600 to-indigo-600 hover:from-cyan-700 hover:to-indigo-700 text-white font-semibold rounded-lg transition-all duration-300">
                          Get Started
                          <ArrowRight className="ml-2 w-4 h-4" />
                        </Link>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="px-6 py-20">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
                Trusted by Quantum Leaders
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Industry pioneers and research leaders choose Zion Tech Group for their quantum computing needs.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.2 }}
                  className="relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-8 backdrop-blur-xl"
                >
                  <div className="flex items-center mb-4">
                    <div className="flex text-yellow-400">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="w-5 h-5 fill-current" />
                      ))}
                    </div>
                  </div>
                  
                  <p className="text-gray-300 mb-6 text-lg leading-relaxed">
                    "{testimonial.content}"
                  </p>
                  
                  <div className="flex items-center">
                    <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-indigo-600 rounded-full flex items-center justify-center text-white font-bold mr-4">
                      {testimonial.name.charAt(0)}
                    </div>
                    <div>
                      <div className="text-white font-semibold">{testimonial.name}</div>
                      <div className="text-gray-400">{testimonial.role}</div>
                      <div className="text-cyan-400 text-sm">{testimonial.company}</div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="px-6 py-20">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="relative overflow-hidden rounded-3xl border border-cyan-400/30 bg-gradient-to-r from-cyan-500/20 to-indigo-500/20 p-12 backdrop-blur-xl"
            >
              <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
                Ready to Experience Quantum Computing?
              </h2>
              <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
                Join the quantum revolution and be among the first to harness the power of quantum computing 
                for your business transformation.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/contact" className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-cyan-600 to-indigo-600 hover:from-cyan-700 hover:to-indigo-700 text-white font-semibold rounded-lg transition-all duration-300 transform hover:scale-105">
                  Start Quantum Transformation
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
                <Link href="/services" className="inline-flex items-center px-8 py-4 border border-white/20 text-white hover:bg-white/10 font-semibold rounded-lg transition-all duration-300">
                  Explore All Services
                  <ChevronRight className="ml-2 w-5 h-5" />
                </Link>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Footer */}
        <footer className="px-6 py-12 border-t border-white/10">
          <div className="max-w-7xl mx-auto text-center">
            <div className="flex items-center justify-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-gradient-to-r from-cyan-500 to-indigo-600 rounded-lg flex items-center justify-center">
                <Atom className="w-5 h-5 text-white" />
              </div>
              <span className="text-2xl font-bold text-white">Zion Tech Group</span>
            </div>
            <p className="text-gray-400 mb-4">
              Pioneering the future of quantum computing and business transformation.
            </p>
            <div className="flex justify-center space-x-6">
              <Link href="/contact" className="text-gray-400 hover:text-white transition-colors">Contact</Link>
              <Link href="/about" className="text-gray-400 hover:text-white transition-colors">About</Link>
              <Link href="/services" className="text-gray-400 hover:text-white transition-colors">Services</Link>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
}