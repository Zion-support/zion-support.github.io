import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  ArrowRight, Brain, Shield, Rocket, Cpu, Database, Atom, Target, Star, 
  Sparkles, Zap, Users, Award, Clock, CheckCircle, Globe, Code, Server,
  ChevronRight, ExternalLink, TrendingUp, BarChart3, Cloud, Network
} from 'lucide-react';
import EnhancedNavigation from '../components/EnhancedNavigation';
import EnhancedFooter from '../components/EnhancedFooter';
import EnhancedContactForm from '../components/EnhancedContactForm';
import SEOHead from '../components/SEOHead';
import { ToastContainer, useToast } from '../components/ui/Toast';
import { Service, Feature, Stat, UpdateItem } from '../types';

export default function HomePage() {
  const [currentFeature, setCurrentFeature] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const { toasts, removeToast } = useToast();

  useEffect(() => {
    setIsVisible(true);
    
    // Auto-rotate features
    const interval = setInterval(() => {
      setCurrentFeature((prev) => (prev + 1) % 6);
    }, 5000);
    
    return () => clearInterval(interval);
  }, []);

  const features: Feature[] = [
    {
      icon: Brain,
      title: "AI Autonomous Ecosystem",
      description: "Revolutionary autonomous AI solutions that adapt and evolve",
      color: "from-purple-500 to-pink-500"
    },
    {
      icon: Atom,
      title: "Quantum AI Neural Networks",
      description: "Quantum-powered AI with advanced consciousness capabilities",
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: Shield,
      title: "Quantum Cybersecurity",
      description: "Quantum-resistant security with AI-powered threat detection",
      color: "from-red-500 to-orange-500"
    },
    {
      icon: Rocket,
      title: "Space Resource Intelligence",
      description: "AI-powered space resource discovery and optimization",
      color: "from-indigo-500 to-purple-500"
    },
    {
      icon: Cpu,
      title: "Autonomous DevOps",
      description: "AI-powered DevOps optimization and automation",
      color: "from-emerald-500 to-teal-500"
    },
    {
      icon: Database,
      title: "Edge Computing Orchestration",
      description: "Advanced edge computing optimization platform",
      color: "from-yellow-500 to-orange-500"
    }
  ];

  const services: Service[] = [
    {
      title: "AI & Machine Learning",
      description: "Custom AI solutions, neural networks, and autonomous systems",
      icon: Brain,
      color: "from-purple-500 to-pink-500"
    },
    {
      title: "Quantum Computing",
      description: "Quantum algorithms, cryptography, and quantum AI integration",
      icon: Atom,
      color: "from-blue-500 to-cyan-500"
    },
    {
      title: "Cybersecurity",
      description: "Advanced threat detection, quantum-resistant encryption",
      icon: Shield,
      color: "from-red-500 to-orange-500"
    },
    {
      title: "Cloud Infrastructure",
      description: "Scalable cloud solutions, edge computing, and DevOps",
      icon: Cloud,
      color: "from-emerald-500 to-teal-500"
    },
    {
      title: "Data Analytics",
      description: "Big data processing, predictive analytics, and insights",
      icon: BarChart3,
      color: "from-indigo-500 to-purple-500"
    },
    {
      title: "Digital Transformation",
      description: "End-to-end digital transformation and modernization",
      icon: Rocket,
      color: "from-yellow-500 to-orange-500"
    }
  ];

  const stats: Stat[] = [
    { number: "500+", label: "Projects Delivered", icon: CheckCircle },
    { number: "50+", label: "Enterprise Clients", icon: Users },
    { number: "99.9%", label: "Uptime Guarantee", icon: Shield },
    { number: "24/7", label: "Support Available", icon: Clock }
  ];

  const updates: UpdateItem[] = [
    {
      title: "Autonomous Update — 2025: 08: 15: 0508",
      href: "/reports/updates/update-2025-08-15-0508",
      description: "Freshly published by autonomous agents.",
      date: "2025-08-15"
    },
    {
      title: "Autonomous Update — 2025: 08: 15: 0507",
      href: "/reports/updates/update-2025-08-15-0507",
      description: "Freshly published by autonomous agents.",
      date: "2025-08-15"
    },
    {
      title: "Autonomous Update — 2025: 08: 15: 0457",
      href: "/reports/updates/update-2025-08-15-0457",
      description: "Freshly published by autonomous agents.",
      date: "2025-08-15"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 text-white overflow-hidden">
      <Head>
        <title>Zion Tech Group — AI-Powered Cloud Automation & Autonomous Deployment Platform</title>
        <meta name="description" content="Zion Tech Group delivers AI-powered cloud automation and autonomous deployment solutions. Automate content generation and infrastructure updates with intelligent agents that work 24/7." />
        <meta property="og:title" content="Zion Tech Group — AI-Powered Cloud Automation Platform" />
        <meta property="og:description" content="AI-powered cloud automation and autonomous deployment solutions. Automate content generation and infrastructure updates with intelligent agents." />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="keywords" content="AI automation, cloud automation, autonomous deployment, content generation, infrastructure optimization, AI agents" />
        <link rel="canonical" href="https://ziontechgroup.com" />
      </Head>

      <EnhancedNavigation />

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center px-6 py-20">
        {/* Animated Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(59,130,246,0.1),transparent_50%)]" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(168,85,247,0.1),transparent_50%)]" />
        </div>

        <div className="relative z-10 text-center max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 30 }}
            transition={{ duration: 0.8 }}
            className="mb-8"
          >
            <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-white via-blue-100 to-cyan-100 bg-clip-text text-transparent mb-6">
              Zion Tech Group
            </h1>
            <p className="text-xl md:text-2xl text-white/80 max-w-3xl mx-auto leading-relaxed">
              AI-powered cloud automation and autonomous deployment platform
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 30 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mb-12"
          >
            {/* Clear Tagline */}
            <div className="mb-8">
              <h2 className="text-2xl md:text-3xl font-bold text-cyan-400 mb-4">
                Autonomous Cloud Automations
              </h2>
              <p className="text-lg text-white/90 max-w-2xl mx-auto mb-6">
                AI-powered deployment of updates across your cloud infrastructure
              </p>
              <p className="text-base text-white/70 max-w-3xl mx-auto">
                Automate content generation and deployment effortlessly with self-improving, cloud-native agents that continuously optimize your systems.
              </p>
            </div>

            {/* How It Works Section */}
            <div className="mb-8 p-6 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm">
              <h3 className="text-lg font-semibold text-white mb-4">How It Works</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
                <div className="flex flex-col items-center text-center">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-r from-blue-500 to-cyan-500 flex items-center justify-center mb-2">
                    <Brain className="w-6 h-6 text-white" />
                  </div>
                  <h4 className="font-medium text-white mb-1">AI Analysis</h4>
                  <p className="text-white/70">Intelligent agents analyze your infrastructure and identify optimization opportunities</p>
                </div>
                <div className="flex flex-col items-center text-center">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 flex items-center justify-center mb-2">
                    <Rocket className="w-6 h-6 text-white" />
                  </div>
                  <h4 className="font-medium text-white mb-1">Automated Deployment</h4>
                  <p className="text-white/70">Updates are automatically generated, tested, and deployed to your cloud environment</p>
                </div>
                <div className="flex flex-col items-center text-center">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-r from-emerald-500 to-teal-500 flex items-center justify-center mb-2">
                    <Shield className="w-6 h-6 text-white" />
                  </div>
                  <h4 className="font-medium text-white mb-1">Continuous Monitoring</h4>
                  <p className="text-white/70">24/7 oversight with safety guardrails and real-time performance optimization</p>
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-4 bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 rounded-full font-semibold text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-2xl flex items-center justify-center gap-2">
                Get Started
                <ArrowRight className="w-5 h-5" />
              </button>
              <button className="px-8 py-4 border border-white/20 hover:border-white/40 rounded-full font-semibold text-lg transition-all duration-300 transform hover:scale-105 backdrop-blur-sm bg-white/5 hover:bg-white/10">
                Learn More
              </button>
            </div>
          </div>
        </nav>

        {/* Floating Elements */}
        <div className="absolute inset-0 pointer-events-none">
          <motion.div
            animate={{ y: [0, -20, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            className="absolute top-20 left-20 w-2 h-2 bg-cyan-400 rounded-full opacity-60"
          />
          <motion.div
            animate={{ y: [0, 20, 0] }}
            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
            className="absolute top-40 right-20 w-3 h-3 bg-purple-400 rounded-full opacity-60"
          />
          <motion.div
            animate={{ y: [0, -15, 0] }}
            transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
            className="absolute bottom-40 left-1/4 w-2 h-2 bg-blue-400 rounded-full opacity-60"
          />
        </div>
      </section>

      {/* Autonomous Capabilities Section */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-white to-blue-100 bg-clip-text text-transparent">
              Autonomous Intelligence at Work
            </h2>
            <p className="text-xl text-white/70 max-w-3xl mx-auto">
              Our AI agents work 24/7 to continuously improve your cloud infrastructure and applications
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h3 className="text-2xl font-bold text-white mb-6">How Autonomous Agents Work</h3>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-r from-blue-500 to-cyan-500 flex items-center justify-center flex-shrink-0">
                    <Brain className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-white mb-2">Continuous Analysis</h4>
                    <p className="text-white/70">AI agents constantly monitor your systems, analyzing performance, security, and optimization opportunities in real-time.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 flex items-center justify-center flex-shrink-0">
                    <Code className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-white mb-2">Intelligent Code Generation</h4>
                    <p className="text-white/70">Automatically generate, test, and deploy code improvements, bug fixes, and performance optimizations.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-r from-emerald-500 to-teal-500 flex items-center justify-center flex-shrink-0">
                    <Server className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-white mb-2">Seamless Deployment</h4>
                    <p className="text-white/70">Zero-downtime deployments with automatic rollback capabilities and comprehensive testing before production.</p>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="p-8 rounded-2xl border border-white/10 bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-xl">
                <h4 className="text-xl font-bold text-white mb-4">Real-Time Benefits</h4>
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-emerald-400 flex-shrink-0" />
                    <span className="text-white/80">24/7 system monitoring and optimization</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-emerald-400 flex-shrink-0" />
                    <span className="text-white/80">Automatic security updates and patches</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-emerald-400 flex-shrink-0" />
                    <span className="text-white/80">Performance improvements without human intervention</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-emerald-400 flex-shrink-0" />
                    <span className="text-white/80">Continuous content generation and SEO optimization</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-emerald-400 flex-shrink-0" />
                    <span className="text-white/80">Proactive issue detection and resolution</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-white to-blue-100 bg-clip-text text-transparent">
              Revolutionary Technology Solutions
            </h2>
            <p className="text-xl text-white/70 max-w-3xl mx-auto">
              Discover our cutting-edge services that are transforming industries and driving the future of technology
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group relative p-8 rounded-2xl border border-white/10 bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-xl hover:border-cyan-400/30 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-white/0 via-cyan-400/5 to-white/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl" />
                <div className="relative z-10">
                  <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${service.color} p-4 mb-6 flex items-center justify-center`}>
                    <service.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold mb-4 text-white">{service.title}</h3>
                  <p className="text-white/70 leading-relaxed mb-4">{service.description}</p>
                  
                  {/* Price */}
                  <div className="mb-4">
                    <span className="text-2xl font-bold text-cyan-400">{service.price}</span>
                  </div>
                  
                  {/* Features */}
                  <div className="mb-6">
                    <h4 className="text-white font-semibold mb-2 text-sm">Key Features:</h4>
                    <div className="space-y-1">
                      {service.features.map((feature, idx) => (
                        <div key={idx} className="flex items-center gap-2 text-xs text-white/70">
                          <CheckCircle className="w-3 h-3 text-cyan-400 flex-shrink-0" />
                          <span>{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </main>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Latest Updates Section */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-white to-blue-100 bg-clip-text text-transparent">
              Latest Autonomous Updates
            </h2>
            <p className="text-xl text-white/70 max-w-3xl mx-auto">
              Stay updated with our latest innovations and autonomous system developments
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {updates.map((update, index) => (
              <motion.a
                key={update.href}
                href={update.href}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-6 backdrop-blur-xl hover:border-cyan-400/30 transition-all duration-300 transform hover:scale-105"
              >
                <div className="pointer-events-none absolute -inset-px -z-10 bg-gradient-to-r from-fuchsia-500/0 via-cyan-400/10 to-fuchsia-500/0 opacity-0 blur-2xl transition-opacity group-hover:opacity-100" />
                <h3 className="text-lg font-semibold text-white">{update.title}</h3>
                <p className="mt-1 text-sm text-white/75">{update.description}</p>
                <div className="mt-3 inline-flex items-center gap-1 text-xs text-cyan-300/90 group-hover:text-cyan-200 transition-colors duration-300">
                  Open <span aria-hidden>→</span>
                </div>
              </motion.a>
            ))}
          </div>
        </div>

        {/* Features Section */}
        <div className="py-12 bg-black/20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="lg:text-center">
              <h2 className="text-base text-purple-400 font-semibold tracking-wide uppercase">Technology</h2>
              <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-white sm:text-4xl">
                Next-Generation Solutions
              </p>
              <p className="mt-4 max-w-2xl text-xl text-gray-300 lg:mx-auto">
                Our cutting-edge technology stack delivers unprecedented performance and capabilities.
              </p>
            </div>

            <div className="mt-10">
              <div className="space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10">
                <div className="relative">
                  <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-purple-500 text-white">
                    <Brain className="h-6 w-6" />
                  </div>
                  <p className="ml-16 text-lg leading-6 font-medium text-white">Quantum AI Intelligence</p>
                  <p className="mt-2 ml-16 text-base text-gray-300">
                    Revolutionary quantum computing algorithms that solve complex problems in seconds, not years.
                  </p>
                </div>

                <div className="relative">
                  <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-purple-500 text-white">
                    <Zap className="h-6 w-6" />
                  </div>
                  <p className="ml-16 text-lg leading-6 font-medium text-white">Autonomous Systems</p>
                  <p className="mt-2 ml-16 text-base text-gray-300">
                    Self-learning, self-optimizing systems that continuously improve and adapt to changing environments.
                  </p>
                </div>

                <div className="relative">
                  <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-purple-500 text-white">
                    <Shield className="h-6 w-6" />
                  </div>
                  <p className="ml-16 text-lg leading-6 font-medium text-white">Advanced Security</p>
                  <p className="mt-2 ml-16 text-base text-gray-300">
                    Quantum-resistant encryption and AI-powered threat detection for unparalleled security.
                  </p>
                </div>

                <div className="relative">
                  <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-purple-500 text-white">
                    <Globe className="h-6 w-6" />
                  </div>
                  <p className="ml-16 text-lg leading-6 font-medium text-white">Global Scale</p>
                  <p className="mt-2 ml-16 text-base text-gray-300">
                    Distributed quantum networks that operate seamlessly across continents and time zones.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

      <EnhancedFooter />

      {/* Toast Container */}
      <ToastContainer toasts={toasts} onRemove={removeToast} />
    </div>
  );
}
