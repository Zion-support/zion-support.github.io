import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { 
  Brain, 
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
  ChevronRight
} from 'lucide-react';

export default function AIInnovationHub2025() {
  const aiServices = [
    {
      icon: <Brain className="w-8 h-8 text-cyan-400" />,
      title: "Autonomous AI Business Operations",
      description: "Revolutionary AI systems that manage entire business processes autonomously, from customer service to supply chain optimization.",
      features: ["24/7 Autonomous Operations", "Self-Learning Algorithms", "Real-time Decision Making", "Cost Reduction up to 70%"],
      price: "$2,999/month",
      marketPrice: "$5,000-15,000/month"
    },
    {
      icon: <Zap className="w-8 h-8 text-purple-400" />,
      title: "Quantum-Enhanced AI Processing",
      description: "Next-generation AI processing powered by quantum computing principles for unprecedented speed and accuracy.",
      features: ["Quantum Algorithm Integration", "Exponential Processing Power", "Advanced Pattern Recognition", "Future-Proof Technology"],
      price: "$4,999/month",
      marketPrice: "$8,000-25,000/month"
    },
    {
      icon: <Shield className="w-8 h-8 text-green-400" />,
      title: "AI-Powered Cybersecurity Intelligence",
      description: "Advanced AI systems that predict and prevent cyber threats before they occur, with autonomous response capabilities.",
      features: ["Predictive Threat Detection", "Autonomous Incident Response", "Zero-Trust Architecture", "99.9% Threat Prevention"],
      price: "$3,499/month",
      marketPrice: "$6,000-18,000/month"
    },
    {
      icon: <Cloud className="w-8 h-8 text-blue-400" />,
      title: "Neural Cloud Infrastructure",
      description: "Self-evolving cloud infrastructure that adapts and optimizes itself based on usage patterns and performance metrics.",
      features: ["Self-Optimizing Infrastructure", "Neural Network Management", "Predictive Scaling", "Intelligent Resource Allocation"],
      price: "$2,499/month",
      marketPrice: "$4,000-12,000/month"
    }
  ];

  const testimonials = [
    {
      name: "Dr. Sarah Chen",
      company: "TechVision Corp",
      role: "Chief AI Officer",
      content: "Zion Tech Group's autonomous AI systems have revolutionized our operations. We've seen a 300% increase in efficiency and 85% reduction in operational costs.",
      rating: 5,
      image: "/api/placeholder/60/60"
    },
    {
      name: "Marcus Rodriguez",
      company: "Future Dynamics",
      role: "CTO",
      content: "The quantum-enhanced AI processing capabilities are game-changing. We're solving complex problems in minutes that used to take days.",
      rating: 5,
      image: "/api/placeholder/60/60"
    },
    {
      name: "Dr. Emily Watson",
      company: "CyberSecure Solutions",
      role: "Security Director",
      content: "Their AI cybersecurity intelligence prevented three major attacks before they could impact our systems. Absolutely incredible technology.",
      rating: 5,
      image: "/api/placeholder/60/60"
    }
  ];

  const stats = [
    { number: "500+", label: "AI Models Deployed" },
    { number: "99.7%", label: "Accuracy Rate" },
    { number: "85%", label: "Cost Reduction" },
    { number: "24/7", label: "Autonomous Operations" }
  ];

  return (
    <>
      <Head>
        <title>AI Innovation Hub 2025 - Zion Tech Group | Revolutionary AI Solutions</title>
        <meta name="description" content="Discover the future of AI with Zion Tech Group's revolutionary AI Innovation Hub 2025. Autonomous business operations, quantum-enhanced processing, and neural cloud infrastructure." />
        <meta name="keywords" content="AI innovation, autonomous AI, quantum AI, neural networks, machine learning, AI business solutions" />
        <meta property="og:title" content="AI Innovation Hub 2025 - Revolutionary AI Solutions" />
        <meta property="og:description" content="Transform your business with cutting-edge AI technology including autonomous operations and quantum-enhanced processing." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://ziontechgroup.com/ai-innovation-hub-2025" />
      </Head>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Navigation */}
        <nav className="relative z-50 px-6 py-4">
          <div className="max-w-7xl mx-auto flex items-center justify-between">
            <Link href="/" className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
                <Zap className="w-5 h-5 text-white" />
              </div>
              <span className="text-2xl font-bold text-white">Zion Tech Group</span>
            </Link>
            <div className="hidden md:flex items-center space-x-8">
              <Link href="/" className="text-white hover:text-blue-300 transition-colors">Home</Link>
              <Link href="/services" className="text-white hover:text-blue-300 transition-colors">Services</Link>
              <Link href="/about" className="text-white hover:text-blue-300 transition-colors">About</Link>
              <Link href="/contact" className="text-white hover:text-blue-300 transition-colors">Contact</Link>
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
                <Brain className="w-4 h-4 mr-2" />
                AI Innovation Hub 2025
              </div>
              <h1 className="text-5xl lg:text-7xl font-bold text-white mb-6">
                The Future of AI is
                <span className="block bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                  Here Today
                </span>
              </h1>
              <p className="text-xl lg:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
                Experience revolutionary AI technology that transforms businesses through autonomous operations, 
                quantum-enhanced processing, and neural cloud infrastructure. Be among the first to harness 
                the power of next-generation artificial intelligence.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/contact" className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-cyan-600 to-purple-600 hover:from-cyan-700 hover:to-purple-700 text-white font-semibold rounded-lg transition-all duration-300 transform hover:scale-105">
                  Start AI Transformation
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
                <Link href="#services" className="inline-flex items-center px-8 py-4 border border-white/20 text-white hover:bg-white/10 font-semibold rounded-lg transition-all duration-300">
                  Explore AI Services
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

        {/* AI Services Section */}
        <section id="services" className="px-6 py-20">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
                Revolutionary AI Solutions
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Cutting-edge AI technology that redefines what's possible in business automation, 
                processing power, and intelligent systems.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {aiServices.map((service, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.2 }}
                  className="relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-8 backdrop-blur-xl hover:border-cyan-400/30 transition-all duration-300 group"
                >
                  <div className="pointer-events-none absolute -inset-px -z-10 bg-gradient-to-r from-cyan-500/0 via-purple-400/10 to-cyan-500/0 opacity-0 blur-2xl transition-opacity group-hover:opacity-100" />
                  
                  <div className="flex items-center mb-6">
                    <div className="p-3 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 rounded-xl mr-4">
                      {service.icon}
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-white mb-2">{service.title}</h3>
                      <div className="flex items-center gap-4">
                        <span className="text-2xl font-bold text-cyan-400">{service.price}</span>
                        <span className="text-sm text-gray-400 line-through">{service.marketPrice}</span>
                      </div>
                    </div>
                  </div>

                  <p className="text-gray-300 mb-6 text-lg leading-relaxed">
                    {service.description}
                  </p>

                  <div className="space-y-3 mb-8">
                    {service.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center">
                        <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                        <span className="text-gray-300">{feature}</span>
                      </div>
                    ))}
                  </div>

                  <Link href="/contact" className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-cyan-600 to-purple-600 hover:from-cyan-700 hover:to-purple-700 text-white font-semibold rounded-lg transition-all duration-300">
                    Get Started
                    <ArrowRight className="ml-2 w-4 h-4" />
                  </Link>
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
                Trusted by AI Leaders
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Industry experts and technology leaders choose Zion Tech Group for their AI transformation journey.
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
                Ready to Transform Your Business with AI?
              </h2>
              <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
                Join the AI revolution and be among the first to experience the power of autonomous business operations, 
                quantum-enhanced processing, and neural cloud infrastructure.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/contact" className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-cyan-600 to-purple-600 hover:from-cyan-700 hover:to-purple-700 text-white font-semibold rounded-lg transition-all duration-300 transform hover:scale-105">
                  Start Your AI Journey
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
              <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
                <Zap className="w-5 h-5 text-white" />
              </div>
              <span className="text-2xl font-bold text-white">Zion Tech Group</span>
            </div>
            <p className="text-gray-400 mb-4">
              Pioneering the future of AI technology and business transformation.
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