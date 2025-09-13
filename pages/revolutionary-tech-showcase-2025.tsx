import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { 
  Brain, 
  Atom, 
  Bot, 
  Zap, 
  Shield, 
  Cloud, 
  ArrowRight,
  CheckCircle,
  Star,
  Users,
  TrendingUp,
  Award,
  Globe,
  ChevronRight,
  Sparkles,
  Cpu,
  Database,
  Lock,
  Gauge,
  Settings,
  BarChart3,
  Target,
  Clock
} from 'lucide-react';

export default function RevolutionaryTechShowcase2025() {
  const techCategories = [
    {
      icon: <Brain className="w-8 h-8 text-cyan-400" />,
      title: "AI Innovation Hub 2025",
      description: "Revolutionary AI solutions with autonomous operations and quantum-enhanced processing",
      link: "/ai-innovation-hub-2025",
      services: [
        "Autonomous AI Business Operations - $2,999/month",
        "Quantum-Enhanced AI Processing - $4,999/month", 
        "AI-Powered Cybersecurity Intelligence - $3,499/month",
        "Neural Cloud Infrastructure - $2,499/month"
      ],
      benefits: ["300% Efficiency Increase", "85% Cost Reduction", "99.7% Accuracy Rate", "24/7 Operations"],
      color: "from-cyan-500 to-blue-500"
    },
    {
      icon: <Atom className="w-8 h-8 text-purple-400" />,
      title: "Quantum Computing Solutions",
      description: "Cutting-edge quantum technology for finance, security, research, and optimization",
      link: "/quantum-computing-solutions-2025",
      services: [
        "Quantum Financial Risk Assessment - $3,499/month",
        "Quantum Cryptography Platform - $4,999/month",
        "Quantum Drug Discovery Platform - $6,999/month", 
        "Quantum Supply Chain Optimization - $2,999/month"
      ],
      benefits: ["10x Faster Processing", "99.9% Security Guarantee", "85% Accuracy Improvement", "40% Cost Reduction"],
      color: "from-purple-500 to-indigo-500"
    },
    {
      icon: <Bot className="w-8 h-8 text-green-400" />,
      title: "Autonomous Business Operations",
      description: "Self-managing AI systems that run your business automatically with intelligent automation",
      link: "/autonomous-business-operations-2025",
      services: [
        "Autonomous Customer Service AI - $1,999/month",
        "Autonomous Business Intelligence - $2,499/month",
        "Autonomous Process Optimization - $3,499/month",
        "Autonomous Sales & Marketing - $2,999/month"
      ],
      benefits: ["85% Cost Reduction", "90% Productivity Increase", "95% Process Automation", "24/7 Operations"],
      color: "from-green-500 to-emerald-500"
    }
  ];

  const allServices = [
    {
      category: "AI Innovation",
      name: "Autonomous AI Business Operations",
      price: "$2,999/month",
      description: "Revolutionary AI systems that manage entire business processes autonomously",
      features: ["24/7 Autonomous Operations", "Self-Learning Algorithms", "Real-time Decision Making"],
      link: "/ai-innovation-hub-2025"
    },
    {
      category: "Quantum Computing", 
      name: "Quantum Financial Risk Assessment",
      price: "$3,499/month",
      description: "Advanced quantum algorithms for real-time portfolio optimization and risk analysis",
      features: ["Quantum Risk Modeling", "Real-time Portfolio Optimization", "Market Prediction Algorithms"],
      link: "/quantum-computing-solutions-2025"
    },
    {
      category: "Autonomous Operations",
      name: "Autonomous Customer Service AI", 
      price: "$1,999/month",
      description: "Intelligent AI systems that handle customer inquiries with human-level understanding",
      features: ["24/7 Autonomous Support", "Natural Language Processing", "Emotional Intelligence"],
      link: "/autonomous-business-operations-2025"
    },
    {
      category: "AI Innovation",
      name: "Quantum-Enhanced AI Processing",
      price: "$4,999/month", 
      description: "Next-generation AI processing powered by quantum computing principles",
      features: ["Quantum Algorithm Integration", "Exponential Processing Power", "Advanced Pattern Recognition"],
      link: "/ai-innovation-hub-2025"
    },
    {
      category: "Quantum Computing",
      name: "Quantum Cryptography Platform",
      price: "$4,999/month",
      description: "Unbreakable encryption using quantum key distribution for secure communications",
      features: ["Quantum Key Distribution", "Unbreakable Encryption", "Real-time Secure Communication"],
      link: "/quantum-computing-solutions-2025"
    },
    {
      category: "Autonomous Operations", 
      name: "Autonomous Business Intelligence",
      price: "$2,499/month",
      description: "Self-evolving analytics systems that continuously analyze data and make recommendations",
      features: ["Real-time Data Analysis", "Predictive Insights", "Automated Reporting"],
      link: "/autonomous-business-operations-2025"
    }
  ];

  const testimonials = [
    {
      name: "Dr. Sarah Chen",
      company: "TechVision Corp", 
      role: "Chief AI Officer",
      content: "Zion Tech Group's revolutionary technology solutions have transformed our entire operation. The combination of AI innovation, quantum computing, and autonomous operations is game-changing.",
      rating: 5
    },
    {
      name: "Marcus Rodriguez",
      company: "Future Dynamics",
      role: "CTO", 
      content: "We've implemented all three technology categories and the results are incredible. 300% efficiency increase, 85% cost reduction, and our operations now run themselves.",
      rating: 5
    },
    {
      name: "Dr. Emily Watson",
      company: "CyberSecure Solutions",
      role: "Security Director",
      content: "The quantum cryptography and AI cybersecurity solutions provide unprecedented protection. Our systems are now truly future-proof and autonomous.",
      rating: 5
    }
  ];

  return (
    <>
      <Head>
        <title>Revolutionary Tech Showcase 2025 - Zion Tech Group | AI, Quantum & Autonomous Solutions</title>
        <meta name="description" content="Discover Zion Tech Group's revolutionary technology showcase 2025. Explore AI innovation hub, quantum computing solutions, and autonomous business operations transforming industries." />
        <meta name="keywords" content="revolutionary technology, AI innovation, quantum computing, autonomous operations, business transformation, tech showcase 2025" />
        <meta property="og:title" content="Revolutionary Tech Showcase 2025 - AI, Quantum & Autonomous Solutions" />
        <meta property="og:description" content="Experience the future of technology with our revolutionary AI, quantum computing, and autonomous business solutions." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://ziontechgroup.com/revolutionary-tech-showcase-2025" />
      </Head>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Navigation */}
        <nav className="relative z-50 px-6 py-4">
          <div className="max-w-7xl mx-auto flex items-center justify-between">
            <Link href="/" className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-lg flex items-center justify-center">
                <Sparkles className="w-5 h-5 text-white" />
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
              <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 border border-cyan-400/30 rounded-full text-cyan-300 text-sm font-medium mb-6">
                <Sparkles className="w-4 h-4 mr-2" />
                Revolutionary Tech Showcase 2025
              </div>
              <h1 className="text-5xl lg:text-7xl font-bold text-white mb-6">
                Experience the Future of
                <span className="block bg-gradient-to-r from-cyan-400 via-purple-400 to-green-400 bg-clip-text text-transparent">
                  Technology
                </span>
              </h1>
              <p className="text-xl lg:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
                Discover our revolutionary technology solutions that are transforming industries worldwide. 
                From AI innovation and quantum computing to autonomous business operations - the future is here today.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/contact" className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-cyan-600 to-purple-600 hover:from-cyan-700 hover:to-purple-700 text-white font-semibold rounded-lg transition-all duration-300 transform hover:scale-105">
                  Start Your Transformation
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
                <Link href="#categories" className="inline-flex items-center px-8 py-4 border border-white/20 text-white hover:bg-white/10 font-semibold rounded-lg transition-all duration-300">
                  Explore Technologies
                  <ChevronRight className="ml-2 w-5 h-5" />
                </Link>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Technology Categories */}
        <section id="categories" className="px-6 py-20">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
                Revolutionary Technology Categories
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Three groundbreaking technology categories that are reshaping the future of business and innovation.
              </p>
            </motion.div>

            <div className="space-y-12">
              {techCategories.map((category, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.3 }}
                  className="relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl p-8 lg:p-12"
                >
                  <div className="flex flex-col lg:flex-row items-start lg:items-center gap-8">
                    <div className="flex-shrink-0">
                      <div className="p-6 bg-gradient-to-r from-white/10 to-white/5 rounded-2xl mb-6">
                        {category.icon}
                      </div>
                    </div>
                    
                    <div className="flex-grow">
                      <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-6">
                        <h3 className="text-4xl font-bold text-white mb-4 lg:mb-0">{category.title}</h3>
                        <Link href={category.link} className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-cyan-600 to-purple-600 hover:from-cyan-700 hover:to-purple-700 text-white font-semibold rounded-lg transition-all duration-300">
                          Explore Now
                          <ArrowRight className="ml-2 w-4 h-4" />
                        </Link>
                      </div>

                      <p className="text-gray-300 mb-8 text-xl leading-relaxed">
                        {category.description}
                      </p>

                      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                        <div>
                          <h4 className="text-white font-semibold mb-4 text-lg">Featured Services</h4>
                          <div className="space-y-3">
                            {category.services.map((service, serviceIndex) => (
                              <div key={serviceIndex} className="flex items-start">
                                <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0 mt-0.5" />
                                <span className="text-gray-300">{service}</span>
                              </div>
                            ))}
                          </div>
                        </div>
                        
                        <div>
                          <h4 className="text-white font-semibold mb-4 text-lg">Key Benefits</h4>
                          <div className="space-y-3">
                            {category.benefits.map((benefit, benefitIndex) => (
                              <div key={benefitIndex} className="flex items-start">
                                <TrendingUp className="w-5 h-5 text-cyan-400 mr-3 flex-shrink-0 mt-0.5" />
                                <span className="text-gray-300">{benefit}</span>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* All Services Grid */}
        <section className="px-6 py-20">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
                Complete Service Portfolio
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Comprehensive technology solutions across all categories, designed to transform your business operations.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {allServices.map((service, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  className="relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl hover:border-cyan-400/30 transition-all duration-300 group"
                >
                  <div className="pointer-events-none absolute -inset-px -z-10 bg-gradient-to-r from-cyan-500/0 via-purple-400/10 to-green-500/0 opacity-0 blur-2xl transition-opacity group-hover:opacity-100" />
                  
                  <div className="p-6">
                    <div className="flex items-center justify-between mb-4">
                      <span className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-medium ${
                        service.category === 'AI Innovation' ? 'bg-cyan-500/20 text-cyan-300' :
                        service.category === 'Quantum Computing' ? 'bg-purple-500/20 text-purple-300' :
                        'bg-green-500/20 text-green-300'
                      }`}>
                        {service.category}
                      </span>
                      <span className="text-2xl font-bold text-white">{service.price}</span>
                    </div>

                    <h3 className="text-xl font-bold text-white mb-3 group-hover:text-cyan-300 transition-colors">
                      {service.name}
                    </h3>

                    <p className="text-gray-300 mb-4 text-sm leading-relaxed">
                      {service.description}
                    </p>

                    <div className="space-y-2 mb-6">
                      {service.features.map((feature, featureIndex) => (
                        <div key={featureIndex} className="flex items-center">
                          <CheckCircle className="w-4 h-4 text-green-400 mr-3 flex-shrink-0" />
                          <span className="text-gray-300 text-sm">{feature}</span>
                        </div>
                      ))}
                    </div>

                    <Link href={service.link} className="inline-flex items-center w-full justify-center px-4 py-2 bg-gradient-to-r from-cyan-600 to-purple-600 hover:from-cyan-700 hover:to-purple-700 text-white font-semibold rounded-lg transition-all duration-300">
                      Learn More
                      <ChevronRight className="ml-2 w-4 h-4" />
                    </Link>
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
                Trusted by Industry Leaders
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Technology pioneers and business leaders choose Zion Tech Group for their revolutionary transformation.
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
                    <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-full flex items-center justify-center text-white font-bold mr-4">
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
              className="relative overflow-hidden rounded-3xl border border-cyan-400/30 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 p-12 backdrop-blur-xl"
            >
              <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
                Ready to Experience the Future?
              </h2>
              <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
                Join the technology revolution and transform your business with our revolutionary AI, quantum computing, and autonomous solutions.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/contact" className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-cyan-600 to-purple-600 hover:from-cyan-700 hover:to-purple-700 text-white font-semibold rounded-lg transition-all duration-300 transform hover:scale-105">
                  Start Your Journey
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
                <Link href="/services" className="inline-flex items-center px-8 py-4 border border-white/20 text-white hover:bg-white/10 font-semibold rounded-lg transition-all duration-300">
                  View All Services
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
              <div className="w-8 h-8 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-lg flex items-center justify-center">
                <Sparkles className="w-5 h-5 text-white" />
              </div>
              <span className="text-2xl font-bold text-white">Zion Tech Group</span>
            </div>
            <p className="text-gray-400 mb-4">
              Pioneering the future of technology with revolutionary AI, quantum computing, and autonomous solutions.
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