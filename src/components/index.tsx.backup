import React, { useState, useEffect } from 'react';
import Head from 'next/head';
import { 
  ArrowRight, Brain, Shield, Rocket, Cpu, Database, Atom, Target, Star, 
  Sparkles, Zap, Users, Award, Clock, CheckCircle, Globe, Code, Server,
  ChevronRight, ExternalLink, TrendingUp, BarChart3, Cloud, Network
} from 'lucide-react';
import EnhancedNavigation from '../components/EnhancedNavigation';
import EnhancedFooter from '../components/EnhancedFooter';
import EnhancedContactForm from '../components/EnhancedContactForm';
import EnhancedServicesShowcase from '../components/EnhancedServicesShowcase';
import EnhancedTestimonialsSection from '../components/EnhancedTestimonialsSection';
export default function HomePage() {
  const [currentFeature, setCurrentFeature] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  useEffect(() => {
    setIsVisible(true);
    // Auto-rotate features
    const interval = setInterval(() => {
      setCurrentFeature((prev) => (prev + 1) % 6);
    }, 5000);
    return () => clearInterval(interval);
  }, []);
  const features = [
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
  const services = [
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
  const stats = [
    { number: "500+", label: "Projects Delivered", icon: CheckCircle },
    { number: "50+", label: "Enterprise Clients", icon: Users },
    { number: "99.9%", label: "Uptime Guarantee", icon: Shield },
    { number: "24/7", label: "Support Available", icon: Clock }
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
      <EnhancedNavigation />
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center px-6 py-20">
        {/* Animated Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(59,130,246,0.1),transparent_50%)]" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(168,85,247,0.1),transparent_50%)]" />
        <div className="relative z-10 text-center max-w-6xl mx-auto">
          <div
            className="mb-8"
          >
            <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-white via-blue-100 to-cyan-100 bg-clip-text text-transparent mb-6">
              Zion Tech Group
            <p className="text-xl md:text-2xl text-white/80 max-w-3xl mx-auto leading-relaxed">
              Leading-edge technology solutions and autonomous innovation platform
          <div
            className="mb-12"
          >
            <p className="text-lg text-white/70 max-w-2xl mx-auto mb-8">
              Empowering businesses with cutting-edge AI, quantum computing, cybersecurity, 
              and digital transformation solutions that drive innovation and growth.
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="#services"
                className="px-8 py-4 bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 rounded-full font-semibold text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-2xl flex items-center justify-center gap-2"
              >
                Explore Services
                <ArrowRight className="w-5 h-5" />
              <a
                href="mailto:kleber@ziontechgroup.com"
                className="px-8 py-4 border border-white/20 hover:border-white/40 rounded-full font-semibold text-lg transition-all duration-300 transform hover:scale-105 backdrop-blur-sm bg-white/5 hover:bg-white/10"
              >
                Schedule Consultation
        {/* Floating Elements */}
        <div className="absolute inset-0 pointer-events-none">
          <div
            className="absolute top-20 left-20 w-2 h-2 bg-cyan-400 rounded-full opacity-60"
          />
          <div
            className="absolute top-40 right-20 w-3 h-3 bg-purple-400 rounded-full opacity-60"
          />
          <div
            className="absolute bottom-40 left-1/4 w-2 h-2 bg-blue-400 rounded-full opacity-60"
          />
      {/* Features Section */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-white to-blue-100 bg-clip-text text-transparent">
              Revolutionary Technology Solutions
            <p className="text-xl text-white/70 max-w-3xl mx-auto">
              Discover our cutting-edge services that are transforming industries and driving the future of technology
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div
                key={service.title}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="group relative p-8 rounded-2xl border border-white/10 bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-xl hover:border-cyan-400/30 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-white/0 via-cyan-400/5 to-white/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl" />
                <div className="relative z-10">
                  <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${service.color} p-4 mb-6 flex items-center justify-center`}>
                    <service.icon className="w-8 h-8 text-white" />
                  <h3 className="text-xl font-bold mb-4 text-white">{service.title}</h3>
                  <p className="text-white/70 leading-relaxed">{service.description}</p>
                  <div className="mt-6 flex items-center text-cyan-400 group-hover:text-cyan-300 transition-colors duration-300">
                    <span className="text-sm font-medium">Learn More</span>
                    <ChevronRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
            ))}
      {/* Stats Section */}
      <section className="py-20 px-6 bg-gradient-to-r from-white/5 to-white/10">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div
                key={stat.label}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-cyan-500 to-blue-500 p-4 mx-auto mb-4 flex items-center justify-center">
                  <stat.icon className="w-8 h-8 text-white" />
                <div className="text-3xl md:text-4xl font-bold text-white mb-2">{stat.number}</div>
                <div className="text-white/70">{stat.label}</div>
            ))}
      {/* Enhanced Services Showcase */}
      <div id="services">
        <EnhancedServicesShowcase />
      {/* Enhanced Testimonials Section */}
      <EnhancedTestimonialsSection />
      {/* Latest Updates Section */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-white to-blue-100 bg-clip-text text-transparent">
              Latest Autonomous Updates
            <p className="text-xl text-white/70 max-w-3xl mx-auto">
              Stay updated with our latest innovations and autonomous system developments
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <a href="/reports/updates/update-2025-08-15-0508" className="group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-6 backdrop-blur-xl hover:border-cyan-400/30 transition-all duration-300 transform hover:scale-105">
              <div className="pointer-events-none absolute -inset-px -z-10 bg-gradient-to-r from-fuchsia-500/0 via-cyan-400/10 to-fuchsia-500/0 opacity-0 blur-2xl transition-opacity group-hover:opacity-100" />
              <h3 className="text-lg font-semibold text-white">Autonomous Update — 2025: 08: 15: 0508</h3>
              <p className="mt-1 text-sm text-white/75">Freshly published by autonomous agents.</p>
              <div className="mt-3 inline-flex items-center gap-1 text-xs text-cyan-300/90 group-hover:text-cyan-200 transition-colors duration-300">
                Open <span aria-hidden>→</span>
            <a href="/reports/updates/update-2025-08-15-0507" className="group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-6 backdrop-blur-xl hover:border-cyan-400/30 transition-all duration-300 transform hover:scale-105">
              <div className="pointer-events-none absolute -inset-px -z-10 bg-gradient-to-r from-fuchsia-500/0 via-cyan-400/10 to-fuchsia-500/0 opacity-0 blur-2xl transition-opacity group-hover:opacity-100" />
              <h3 className="text-lg font-semibold text-white">Autonomous Update — 2025: 08: 15: 0507</h3>
              <p className="mt-1 text-sm text-white/75">Freshly published by autonomous agents.</p>
              <div className="mt-3 inline-flex items-center gap-1 text-xs text-cyan-300/90 group-hover:text-cyan-200 transition-colors duration-300">
                Open <span aria-hidden>→</span>
            <a href="/reports/updates/update-2025-08-15-0457" className="group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-6 backdrop-blur-xl hover:border-cyan-400/30 transition-all duration-300 transform hover:scale-105">
              <div className="pointer-events-none absolute -inset-px -z-10 bg-gradient-to-r from-fuchsia-500/0 via-cyan-400/10 to-fuchsia-500/0 opacity-0 blur-2xl transition-opacity group-hover:opacity-100" />
              <h3 className="text-lg font-semibold text-white">Autonomous Update — 2025: 08: 15: 0457</h3>
              <p className="mt-1 text-sm text-white/75">Freshly published by autonomous agents.</p>
              <div className="mt-3 inline-flex items-center gap-1 text-xs text-cyan-300/90 group-hover:text-cyan-200 transition-colors duration-300">
                Open <span aria-hidden>→</span>
      {/* Contact Form Section */}
      <section className="py-20 px-6 bg-gradient-to-r from-white/5 to-white/10">
        <div className="max-w-7xl mx-auto">
          <div
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-white to-blue-100 bg-clip-text text-transparent">
              Ready to Get Started?
            <p className="text-xl text-white/70 max-w-3xl mx-auto">
              Let's discuss your project and explore how our cutting-edge technology solutions can transform your business
          <EnhancedContactForm />
      <EnhancedFooter />
  );
}
