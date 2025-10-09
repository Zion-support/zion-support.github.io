'use client';
import React, { useCallback, useState, useEffect, Suspense, lazy, memo } from 'react';
import { 
  Phone, Mail, MapPin, Clock, Star, Zap, Shield, Globe, Brain, Cpu, Target, BarChart, 
  MessageSquare, Eye, Sparkles, ArrowRight, CheckCircle, TrendingUp, Users, Award, 
  Lock, Database, Cloud, Code, Smartphone, Settings, FileText, Search, Bot, Palette, 
  Camera, Music, Video, Gamepad2, ShoppingCart, CreditCard, Building, Factory, Car, 
  Plane, Ship, Train, Home, Heart, Stethoscope, GraduationCap, Briefcase, Wrench, 
  Hammer, Paintbrush, Scissors, BookOpen, Calculator, Calendar, Clock3, Compass, 
  Navigation, PieChart, TrendingDown, Activity, Atom, Rocket, Microscope, Layers, 
  Server, Network, HardDrive, Wifi, Monitor, Keyboard, Mouse, Headphones, Printer, 
  Scanner, Router, Switch, Firewall, Antivirus, Backup, Recovery, Migration, 
  Integration, Consulting, Support, Maintenance, Upgrade, Security, Compliance, 
  Audit, Training, Documentation, Testing, Quality, Performance, Scalability, 
  Reliability, Availability, Monitoring, Alerting, Logging, Analytics, Reporting, 
  Dashboard, API, SDK, Framework, Library, Tool, Platform, Service, Solution, 
  Product, Technology, Innovation, Digital, Transformation, Automation, 
  Optimization, Efficiency, Productivity, Growth, Success, Future, Next, 
  Generation, Advanced, Cutting, Edge, State, Art, Revolutionary, Breakthrough, 
  Game, Changing, Disruptive, Innovative, Intelligent, Smart, AI, ML, Deep, 
  Learning, Neural, Network, Algorithm, Model, Data, Science, Analytics, Big, 
  Data, Cloud, Computing, Edge, Computing, Quantum, Computing, Blockchain, 
  Cryptocurrency, NFT, Metaverse, AR, VR, IoT, Cybersecurity, Privacy, 
  GDPR, Compliance, Regulatory, Standards, Best, Practices, Methodology, Process, 
  Workflow, Pipeline, Architecture, Design, Pattern, Framework, Methodology, Agile, 
  DevOps, CI, CD, Microservices, Serverless, Container, Kubernetes, Docker, AWS, 
  Azure, GCP, IBM, Oracle, Salesforce, Microsoft, Google, Amazon, Apple, Facebook, 
  Meta, Twitter, LinkedIn, Instagram, TikTok, YouTube, Netflix, Spotify, Uber, 
  Airbnb, Tesla, SpaceX, OpenAI, Anthropic, Google, DeepMind, NVIDIA, Intel, AMD, 
  Qualcomm, ARM, Apple, Samsung, Huawei, Xiaomi, OnePlus, Sony, LG, Dell, HP, 
  Lenovo, Asus, Acer, MSI, Razer, Logitech, Corsair, SteelSeries, HyperX, Kingston, 
  Samsung, WD, Seagate, Crucial, G.Skill, ASUS, Gigabyte, MSI, EVGA, Zotac, 
  Sapphire, PowerColor, XFX, ASRock, Biostar, ECS, Foxconn, Supermicro, Tyan, 
  Intel, AMD, NVIDIA, Qualcomm, MediaTek, Broadcom, Marvell, Realtek, Atheros, 
  Ralink 
} from 'lucide-react';
import Navigation from './components/Navigation';
import Footer from './components/Footer';
import PerformanceOptimizer from './components/PerformanceOptimizer';
import SEOOptimizer from './components/SEOOptimizer';
import AccessibilityEnhancer from './components/AccessibilityEnhancer';
import Analytics from './components/Analytics';
import SecurityEnhancer from './components/SecurityEnhancer';
import { initializePerformanceOptimizations } from './utils/performanceOptimizations';

// Dynamically import heavy components for better performance
const ContentPromotionBanner = lazy(() => import('./components/ContentPromotionBanner'));
const ContentCarousel = lazy(() => import('./components/ContentCarousel'));
const DynamicContentShowcase = lazy(() => import('./components/DynamicContentShowcase'));
const ContentStatistics = lazy(() => import('./components/ContentStatistics'));

const HomePage: React.FC = memo(() => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Initialize performance optimizations
    initializePerformanceOptimizations();
    
    // Set loaded state
    setIsLoaded(true);
    setIsVisible(true);
  }, []);

  const handleScroll = useCallback(() => {
    const scrolled = window.scrollY;
    const parallax = scrolled * 0.5;
    const hero = document.getElementById('hero');
    if (hero) {
      hero.style.transform = `translateY(${parallax}px)`;
    }
  }, []);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [handleScroll]);

  if (!isLoaded) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-slate-900">
        <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-cyan-400"></div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-900 text-white overflow-x-hidden">
      <PerformanceOptimizer />
      <SEOOptimizer />
      <AccessibilityEnhancer />
      <Analytics />
      <SecurityEnhancer />
      
      <Navigation />

      {/* Hero Section with Futuristic Design */}
      <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/20 via-purple-500/20 to-pink-500/20 animate-pulse"></div>
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width=\"60\" height=\"60\" viewBox=\"0 0 60 60\" xmlns=\"http://www.w3.org/2000/svg\"%3E%3Cg fill=\"none\" fill-rule=\"evenodd\"%3E%3Cg fill=\"%23ffffff\" fill-opacity=\"0.05\"%3E%3Ccircle cx=\"30\" cy=\"30\" r=\"2\"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-30"></div>
        
        {/* Neon Grid Overlay */}
        <div className="absolute inset-0" style={{
          backgroundImage: `
            linear-gradient(rgba(0, 255, 255, 0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(0, 255, 255, 0.1) 1px, transparent 1px)
          `,
          backgroundSize: '50px 50px'
        }}></div>

        {/* Floating Elements */}
        <div className="absolute top-20 left-10 w-20 h-20 bg-cyan-400/20 rounded-full blur-xl animate-bounce"></div>
        <div className="absolute top-40 right-20 w-32 h-32 bg-purple-400/20 rounded-full blur-xl animate-pulse"></div>
        <div className="absolute bottom-40 left-1/4 w-24 h-24 bg-pink-400/20 rounded-full blur-xl animate-ping"></div>

        <div className="relative z-10 text-center px-4 max-w-6xl mx-auto">
          <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <h1 className="text-6xl md:text-8xl font-bold mb-6 bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent neon-text">
              Zion Tech Group
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-gray-300 max-w-4xl mx-auto leading-relaxed">
              Pioneering the Future of AI and IT Solutions
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a
                href="/contact"
                className="cyber-button px-8 py-4 text-lg font-semibold"
              >
                Get Started Today
              </a>
              <a
                href="/services"
                className="border-2 border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300"
              >
                Explore Services
              </a>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ArrowRight className="w-6 h-6 text-cyan-400 rotate-90" />
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
              Our Services
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Comprehensive AI and IT solutions designed to transform your business
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* AI Services */}
            <div className="bg-slate-800/50 backdrop-blur-sm border border-cyan-400/20 rounded-xl p-8 hover:border-cyan-400/40 transition-all duration-300 group">
              <div className="w-16 h-16 bg-gradient-to-br from-cyan-400 to-purple-600 rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <Brain className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-white">AI Solutions</h3>
              <p className="text-gray-300 mb-6">
                Cutting-edge artificial intelligence solutions to automate and optimize your business processes.
              </p>
              <a href="/ai-services" className="text-cyan-400 hover:text-cyan-300 font-semibold flex items-center">
                Learn More <ArrowRight className="w-4 h-4 ml-2" />
              </a>
            </div>

            {/* IT Services */}
            <div className="bg-slate-800/50 backdrop-blur-sm border border-purple-400/20 rounded-xl p-8 hover:border-purple-400/40 transition-all duration-300 group">
              <div className="w-16 h-16 bg-gradient-to-br from-purple-400 to-pink-600 rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <Settings className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-white">IT Services</h3>
              <p className="text-gray-300 mb-6">
                Complete IT infrastructure management and support to keep your business running smoothly.
              </p>
              <a href="/it-services" className="text-purple-400 hover:text-purple-300 font-semibold flex items-center">
                Learn More <ArrowRight className="w-4 h-4 ml-2" />
              </a>
            </div>

            {/* Specialized Solutions */}
            <div className="bg-slate-800/50 backdrop-blur-sm border border-pink-400/20 rounded-xl p-8 hover:border-pink-400/40 transition-all duration-300 group">
              <div className="w-16 h-16 bg-gradient-to-br from-pink-400 to-red-600 rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <Rocket className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-white">Specialized Solutions</h3>
              <p className="text-gray-300 mb-6">
                Custom solutions for unique business challenges including blockchain, IoT, and quantum computing.
              </p>
              <a href="/specialized-services" className="text-pink-400 hover:text-pink-300 font-semibold flex items-center">
                Learn More <ArrowRight className="w-4 h-4 ml-2" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-slate-800/50 to-slate-900/50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Contact us today to discuss how our AI and IT solutions can help your business grow.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a
              href="tel:+13024640950"
              className="flex items-center space-x-2 bg-cyan-600 hover:bg-cyan-700 text-white px-8 py-4 rounded-lg font-semibold transition-colors duration-300"
            >
              <Phone className="w-5 h-5" />
              <span>+1 (302) 464-0950</span>
            </a>
            <a
              href="mailto:info@ziontechgroup.com"
              className="flex items-center space-x-2 border-2 border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300"
            >
              <Mail className="w-5 h-5" />
              <span>info@ziontechgroup.com</span>
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
});

HomePage.displayName = 'HomePage';

export default HomePage;