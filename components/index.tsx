import React, {_useState, _useEffect} from 'react';
import Head from 'next/head';
import {_ArrowRight, _Brain, _Shield, _Rocket, _Cpu, _Database, _Atom, _Target, _Star, _Sparkles, _Zap, _Users, _Award, _Clock, _CheckCircle, _Globe, _Code, _Server, _ChevronRight, _ExternalLink, _TrendingUp, _BarChart3, _Cloud, _Network} from 'lucide-react';
import EnhancedNavigation from '../components/EnhancedNavigation';
import EnhancedFooter from '../components/EnhancedFooter';
import EnhancedContactForm from '../components/EnhancedContactForm';
import EnhancedServicesShowcase from '../components/EnhancedServicesShowcase';
import EnhancedTestimonialsSection from '../components/EnhancedTestimonialsSection';

export default function HomePage() {_const [currentFeature, _setCurrentFeature] = useState(0);
  const [isVisible, _setIsVisible] = useState(false);

  useEffect__(() => {
    setIsVisible(true);
    
    // Auto-rotate features
    const _interval = setInterval__(() => {
      setCurrentFeature(_(prev) => (prev + 1) % 6);}, 5000);
    
    return () => clearInterval(interval);
  }, []);

  const _features = [
    {_icon: Brain, _title: "AI Autonomous Ecosystem", _description: "Revolutionary autonomous AI solutions that adapt and evolve", _color: "from-purple-500 to-pink-500"},
    {_icon: Atom, _title: "Quantum AI Neural Networks", _description: "Quantum-powered AI with advanced consciousness capabilities", _color: "from-blue-500 to-cyan-500"},
    {_icon: Shield, _title: "Quantum Cybersecurity", _description: "Quantum-resistant security with AI-powered threat detection", _color: "from-red-500 to-orange-500"},
    {_icon: Rocket, _title: "Space Resource Intelligence", _description: "AI-powered space resource discovery and optimization", _color: "from-indigo-500 to-purple-500"},
    {_icon: Cpu, _title: "Autonomous DevOps", _description: "AI-powered DevOps optimization and automation", _color: "from-emerald-500 to-teal-500"},
    {_icon: Database, _title: "Edge Computing Orchestration", _description: "Advanced edge computing optimization platform", _color: "from-yellow-500 to-orange-500"}
  ];

  const _services = [
    {_title: "AI & Machine Learning", _description: "Custom AI solutions, _neural networks, _and autonomous systems", _icon: Brain, _color: "from-purple-500 to-pink-500"},
    {_title: "Quantum Computing", _description: "Quantum algorithms, _cryptography, _and quantum AI integration", _icon: Atom, _color: "from-blue-500 to-cyan-500"},
    {_title: "Cybersecurity", _description: "Advanced threat detection, _quantum-resistant encryption", _icon: Shield, _color: "from-red-500 to-orange-500"},
    {_title: "Cloud Infrastructure", _description: "Scalable cloud solutions, _edge computing, _and DevOps", _icon: Cloud, _color: "from-emerald-500 to-teal-500"},
    {_title: "Data Analytics", _description: "Big data processing, _predictive analytics, _and insights", _icon: BarChart3, _color: "from-indigo-500 to-purple-500"},
    {_title: "Digital Transformation", _description: "End-to-end digital transformation and modernization", _icon: Rocket, _color: "from-yellow-500 to-orange-500"}
  ];

  const _stats = [
    {_number: "500+", _label: "Projects Delivered", _icon: CheckCircle},
    {_number: "50+", _label: "Enterprise Clients", _icon: Users},
    {_number: "99.9%", _label: "Uptime Guarantee", _icon: Shield},
    {_number: "24/7", _label: "Support Available", _icon: Clock}
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 text-white overflow-hidden">
      <Head>
        <title>Zion Tech Group — Leading-Edge Technology Solutions & Autonomous Innovation Platform</title>
        <meta name="description" content="Zion Tech Group delivers cutting-edge AI, quantum computing, cybersecurity, and digital transformation solutions. Leading the future of autonomous innovation." />
        <meta property="og:title" content="Zion Tech Group — Leading-Edge Technology Solutions" />
        <meta property="og:description" content="Cutting-edge AI, quantum computing, cybersecurity, and digital transformation solutions. Leading the future of autonomous innovation." />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="keywords" content="AI, quantum computing, cybersecurity, digital transformation, autonomous systems, technology solutions" />
        <link rel="canonical" href="https://ziontechgroup.com" />
      </Head>

      <EnhancedNavigation />

      {_/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center px-6 py-20">
        {_/* Animated Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(59,130,246,0.1),transparent_50%)]" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(168,85,247,0.1),transparent_50%)]" />
        </div>

        <div className="relative z-10 text-center max-w-6xl mx-auto">
          <motion.div
            initial={_{ opacity: 0, _y: 30}}
            animate={_{ opacity: isVisible ? 1 : 0, _y: isVisible ? 0 : 30}}
            transition={_{ duration: 0.8}}
            className="mb-8"
          >
            <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-white via-blue-100 to-cyan-100 bg-clip-text text-transparent mb-6">
              Zion Tech Group
            </h1>
            <p className="text-xl md:text-2xl text-white/80 max-w-3xl mx-auto leading-relaxed">
              Leading-edge technology solutions and autonomous innovation platform
            </p>
          </motion.div>

          <motion.div
            initial={_{ opacity: 0, _y: 30}}
            animate={_{ opacity: isVisible ? 1 : 0, _y: isVisible ? 0 : 30}}
            transition={_{ duration: 0.8, _delay: 0.2}}
            className="mb-12"
          >
            <p className="text-lg text-white/70 max-w-2xl mx-auto mb-8">
              Empowering businesses with cutting-edge AI, quantum computing, cybersecurity, 
              and digital transformation solutions that drive innovation and growth.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="#services"
                className="px-8 py-4 bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 rounded-full font-semibold text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-2xl flex items-center justify-center gap-2"
              >
                Explore Services
                <ArrowRight className="w-5 h-5" />
              </a>
              <a
                href="mailto:kleber@ziontechgroup.com"
                className="px-8 py-4 border border-white/20 hover:border-white/40 rounded-full font-semibold text-lg transition-all duration-300 transform hover:scale-105 backdrop-blur-sm bg-white/5 hover:bg-white/10"
              >
                Schedule Consultation
              </a>
            </div>
          </motion.div>
        </div>

        {_/* Floating Elements */}
        <div className="absolute inset-0 pointer-events-none">
          <motion.div
            animate={_{ y: [0, _-20, _0]}}
            transition={_{ duration: 6, _repeat: Infinity, _ease: "easeInOut"}}
            className="absolute top-20 left-20 w-2 h-2 bg-cyan-400 rounded-full opacity-60"
          />
          <motion.div
            animate={_{ y: [0, _20, _0]}}
            transition={_{ duration: 8, _repeat: Infinity, _ease: "easeInOut"}}
            className="absolute top-40 right-20 w-3 h-3 bg-purple-400 rounded-full opacity-60"
          />
          <motion.div
            animate={_{ y: [0, _-15, _0]}}
            transition={_{ duration: 7, _repeat: Infinity, _ease: "easeInOut"}}
            className="absolute bottom-40 left-1/4 w-2 h-2 bg-blue-400 rounded-full opacity-60"
          />
        </div>
      </section>

      {_/* Features Section */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={_{ opacity: 0, _y: 30}}
            whileInView={_{ opacity: 1, _y: 0}}
            transition={_{ duration: 0.8}}
            viewport={_{ once: true}}
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
            {_services.map(_(service, _index) => (
              <motion.div
                key={service.title}
                initial={_{ opacity: 0, _y: 30}}
                whileInView={_{ opacity: 1, _y: 0}}
                transition={_{ duration: 0.6, _delay: index * 0.1}}
                viewport={_{ once: true}}
                className="group relative p-8 rounded-2xl border border-white/10 bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-xl hover:border-cyan-400/30 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-white/0 via-cyan-400/5 to-white/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl" />
                <div className="relative z-10">
                  <div className={_`w-16 h-16 rounded-2xl bg-gradient-to-br ${service.color} p-4 mb-6 flex items-center justify-center`}>
                    <service.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold mb-4 text-white">{_service.title}</h3>
                  <p className="text-white/70 leading-relaxed">{_service.description}</p>
                  <div className="mt-6 flex items-center text-cyan-400 group-hover:text-cyan-300 transition-colors duration-300">
                    <span className="text-sm font-medium">Learn More</span>
                    <ChevronRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {_/* Stats Section */}
      <section className="py-20 px-6 bg-gradient-to-r from-white/5 to-white/10">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {_stats.map(_(stat, _index) => (
              <motion.div
                key={stat.label}
                initial={_{ opacity: 0, _scale: 0.8}}
                whileInView={_{ opacity: 1, _scale: 1}}
                transition={_{ duration: 0.6, _delay: index * 0.1}}
                viewport={_{ once: true}}
                className="text-center"
              >
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-cyan-500 to-blue-500 p-4 mx-auto mb-4 flex items-center justify-center">
                  <stat.icon className="w-8 h-8 text-white" />
                </div>
                <div className="text-3xl md:text-4xl font-bold text-white mb-2">{_stat.number}</div>
                <div className="text-white/70">{_stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {_/* Enhanced Services Showcase */}
      <div id="services">
        <EnhancedServicesShowcase />
      </div>

      {_/* Enhanced Testimonials Section */}
      <EnhancedTestimonialsSection />

      {_/* Latest Updates Section */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={_{ opacity: 0, _y: 30}}
            whileInView={_{ opacity: 1, _y: 0}}
            transition={_{ duration: 0.8}}
            viewport={_{ once: true}}
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
            <a href="/reports/updates/update-2025-08-15-0508" className="group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-6 backdrop-blur-xl hover:border-cyan-400/30 transition-all duration-300 transform hover:scale-105">
              <div className="pointer-events-none absolute -inset-px -z-10 bg-gradient-to-r from-fuchsia-500/0 via-cyan-400/10 to-fuchsia-500/0 opacity-0 blur-2xl transition-opacity group-hover:opacity-100" />
              <h3 className="text-lg font-semibold text-white">Autonomous Update — 2025: 08: 15: 0508</h3>
              <p className="mt-1 text-sm text-white/75">Freshly published by autonomous agents.</p>
              <div className="mt-3 inline-flex items-center gap-1 text-xs text-cyan-300/90 group-hover:text-cyan-200 transition-colors duration-300">
                Open <span aria-hidden>→</span>
              </div>
            </a>
            <a href="/reports/updates/update-2025-08-15-0507" className="group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-6 backdrop-blur-xl hover:border-cyan-400/30 transition-all duration-300 transform hover:scale-105">
              <div className="pointer-events-none absolute -inset-px -z-10 bg-gradient-to-r from-fuchsia-500/0 via-cyan-400/10 to-fuchsia-500/0 opacity-0 blur-2xl transition-opacity group-hover:opacity-100" />
              <h3 className="text-lg font-semibold text-white">Autonomous Update — 2025: 08: 15: 0507</h3>
              <p className="mt-1 text-sm text-white/75">Freshly published by autonomous agents.</p>
              <div className="mt-3 inline-flex items-center gap-1 text-xs text-cyan-300/90 group-hover:text-cyan-200 transition-colors duration-300">
                Open <span aria-hidden>→</span>
              </div>
            </a>
            <a href="/reports/updates/update-2025-08-15-0457" className="group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-6 backdrop-blur-xl hover:border-cyan-400/30 transition-all duration-300 transform hover:scale-105">
              <div className="pointer-events-none absolute -inset-px -z-10 bg-gradient-to-r from-fuchsia-500/0 via-cyan-400/10 to-fuchsia-500/0 opacity-0 blur-2xl transition-opacity group-hover:opacity-100" />
              <h3 className="text-lg font-semibold text-white">Autonomous Update — 2025: 08: 15: 0457</h3>
              <p className="mt-1 text-sm text-white/75">Freshly published by autonomous agents.</p>
              <div className="mt-3 inline-flex items-center gap-1 text-xs text-cyan-300/90 group-hover:text-cyan-200 transition-colors duration-300">
                Open <span aria-hidden>→</span>
              </div>
            </a>
          </div>
        </div>
      </section>

      {_/* Contact Form Section */}
      <section className="py-20 px-6 bg-gradient-to-r from-white/5 to-white/10">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={_{ opacity: 0, _y: 30}}
            whileInView={_{ opacity: 1, _y: 0}}
            transition={_{ duration: 0.8}}
            viewport={_{ once: true}}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-white to-blue-100 bg-clip-text text-transparent">
              Ready to Get Started?
            </h2>
            <p className="text-xl text-white/70 max-w-3xl mx-auto">
              Let's discuss your project and explore how our cutting-edge technology solutions can transform your business
            </p>
          </motion.div>

          <EnhancedContactForm />
        </div>
      </section>

      <EnhancedFooter />
    </div>
  );
}
