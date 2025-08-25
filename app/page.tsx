'use client';

import React, { useState } from 'react';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { Sidebar } from './components/Sidebar';
import { Button } from './components/ui/button';
import { 
  Rocket, 
  Zap, 
  Globe, 
  Shield, 
  Users, 
  TrendingUp,
  ArrowRight,
  Star,
  CheckCircle,
  Lightbulb,
  Brain,
  Cpu,
  Cloud,
  Database,
  Network,
  Eye,
  Leaf,
  Heart,
  Calendar,
  ShoppingCart,
  Building,
  Factory,
  Store,
  Car,
  Plane,
  Ship,
  Home,
  Hospital,
  GraduationCap,
  FileText,
  BarChart3,
  CreditCard,
  MessageSquare,
  Camera,
  Video,
  Music,
  BookOpen,
  Target,
  PieChart,
  Activity,
  Bot,
  Settings,
  Truck
} from 'lucide-react';

export default function Home() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className="min-h-screen bg-black text-white relative overflow-hidden">
      {/* Header */}
      <Header />
      
      {/* Sidebar */}
      <Sidebar isOpen={isSidebarOpen} onClose={() => setIsSidebarOpen(false)} />
      
      {/* Main content */}
      <div className="relative z-10 pt-20 lg:pt-24">
        {/* Hero Section */}
        <section className="relative min-h-screen flex items-center justify-center px-4">
          <div className="text-center max-w-6xl mx-auto">
            <div className="mb-8">
              <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full text-white text-sm font-medium mb-4">
                <Rocket className="w-4 h-4 mr-2" />
                Welcome to 2029
              </div>
            </div>
            
            <h1 className="text-6xl md:text-8xl font-bold mb-6 bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              Zion Tech Group
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
              Pioneering the future of technology with cutting-edge solutions, 
              quantum computing, and AI-driven innovation for tomorrow's challenges.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-gradient-to-r from-cyan-500 to-purple-500 hover:from-cyan-600 hover:to-purple-600 text-white border-0 px-8 py-3 text-lg">
                <Zap className="w-5 h-5 mr-2" />
                Explore Our Solutions
              </Button>
              <Button size="lg" variant="outline" className="border-cyan-500 text-cyan-400 hover:bg-cyan-500 hover:text-white px-8 py-3 text-lg">
                <Globe className="w-5 h-5 mr-2" />
                Learn More
              </Button>
            </div>
          </div>
        </section>

        {/* Features Grid */}
        <section className="py-20 px-4 relative">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                Revolutionary Technologies
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Discover the cutting-edge innovations that are reshaping industries and transforming the world.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Quantum Computing */}
              <div className="bg-black/20 backdrop-blur-sm border-cyan-500/20 hover:border-cyan-500/40 transition-all duration-300 hover:scale-105 rounded-xl p-6">
                <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-lg flex items-center justify-center mb-4">
                  <Cpu className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-cyan-400 text-xl font-semibold mb-2">Quantum Computing</h3>
                <p className="text-gray-300 mb-4">
                  Next-generation quantum processors solving complex problems in seconds.
                </p>
                <p className="text-gray-400 mb-4">
                  Our quantum computing platform delivers unprecedented computational power for scientific research, cryptography, and AI training.
                </p>
                <Button variant="ghost" className="text-cyan-400 hover:text-cyan-300 p-0">
                  Learn More <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </div>

              {/* AI & Machine Learning */}
              <div className="bg-black/20 backdrop-blur-sm border-purple-500/20 hover:border-purple-500/40 transition-all duration-300 hover:scale-105 rounded-xl p-6">
                <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center mb-4">
                  <Brain className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-purple-400 text-xl font-semibold mb-2">AI & Machine Learning</h3>
                <p className="text-gray-300 mb-4">
                  Advanced neural networks and deep learning algorithms.
                </p>
                <p className="text-gray-400 mb-4">
                  Transform your business with intelligent automation, predictive analytics, and autonomous decision-making systems.
                </p>
                <Button variant="ghost" className="text-purple-400 hover:text-purple-300 p-0">
                  Learn More <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </div>

              {/* Cloud & DevOps */}
              <div className="bg-black/20 backdrop-blur-sm border-green-500/20 hover:border-green-500/40 transition-all duration-300 hover:scale-105 rounded-xl p-6">
                <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-blue-500 rounded-lg flex items-center justify-center mb-4">
                  <Cloud className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-green-400 text-xl font-semibold mb-2">Cloud & DevOps</h3>
                <p className="text-gray-300 mb-4">
                  Scalable cloud infrastructure and automated deployment.
                </p>
                <p className="text-gray-400 mb-4">
                  Streamline your development workflow with modern DevOps practices and cloud-native solutions.
                </p>
                <Button variant="ghost" className="text-green-400 hover:text-green-300 p-0">
                  Learn More <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </div>

              {/* Cybersecurity */}
              <div className="bg-black/20 backdrop-blur-sm border-red-500/20 hover:border-red-500/40 transition-all duration-300 hover:scale-105 rounded-xl p-6">
                <div className="w-12 h-12 bg-gradient-to-r from-red-500 to-orange-500 rounded-lg flex items-center justify-center mb-4">
                  <Shield className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-red-400 text-xl font-semibold mb-2">Cybersecurity</h3>
                <p className="text-gray-300 mb-4">
                  Advanced security and compliance solutions.
                </p>
                <p className="text-gray-400 mb-4">
                  Protect your digital assets with cutting-edge security technologies and comprehensive compliance frameworks.
                </p>
                <Button variant="ghost" className="text-red-400 hover:text-red-300 p-0">
                  Learn More <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </div>

              {/* Blockchain Solutions */}
              <div className="bg-black/20 backdrop-blur-sm border-blue-500/20 hover:border-blue-500/40 transition-all duration-300 hover:scale-105 rounded-xl p-6">
                <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-lg flex items-center justify-center mb-4">
                  <Database className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-blue-400 text-xl font-semibold mb-2">Blockchain Solutions</h3>
                <p className="text-gray-300 mb-4">
                  Distributed ledger and smart contract platforms.
                </p>
                <p className="text-gray-400 mb-4">
                  Build trust and transparency with blockchain technology for secure transactions and decentralized applications.
                </p>
                <Button variant="ghost" className="text-blue-400 hover:text-blue-300 p-0">
                  Learn More <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </div>

              {/* IoT & Edge Computing */}
              <div className="bg-black/20 backdrop-blur-sm border-yellow-500/20 hover:border-yellow-500/40 transition-all duration-300 hover:scale-105 rounded-xl p-6">
                <div className="w-12 h-12 bg-gradient-to-r from-yellow-500 to-orange-500 rounded-lg flex items-center justify-center mb-4">
                  <Network className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-yellow-400 text-xl font-semibold mb-2">IoT & Edge Computing</h3>
                <p className="text-gray-300 mb-4">
                  Connected devices and real-time processing.
                </p>
                <p className="text-gray-400 mb-4">
                  Enable smart cities, connected vehicles, and industrial automation with IoT and edge computing solutions.
                </p>
                <Button variant="ghost" className="text-yellow-400 hover:text-yellow-300 p-0">
                  Learn More <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Industry Solutions */}
        <section className="py-20 px-4 relative bg-gradient-to-b from-black to-gray-900">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-green-400 to-blue-400 bg-clip-text text-transparent">
                Industry Solutions
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Tailored technology solutions for every industry, driving innovation and digital transformation.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Healthcare */}
              <div className="bg-white/5 backdrop-blur-sm border-green-500/20 hover:border-green-500/40 transition-all duration-300 hover:scale-105 rounded-xl p-6">
                <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-emerald-500 rounded-lg flex items-center justify-center mb-4">
                  <Hospital className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-green-400 text-xl font-semibold mb-2">Healthcare</h3>
                <p className="text-gray-300 mb-4">
                  Digital health solutions and medical AI.
                </p>
                <p className="text-gray-400 mb-4">
                  Revolutionize patient care with AI-powered diagnostics, telemedicine platforms, and health analytics.
                </p>
                <Button variant="ghost" className="text-green-400 hover:text-green-300 p-0">
                  Learn More <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </div>

              {/* Fintech */}
              <div className="bg-white/5 backdrop-blur-sm border-blue-500/20 hover:border-blue-500/40 transition-all duration-300 hover:scale-105 rounded-xl p-6">
                <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-lg flex items-center justify-center mb-4">
                  <CreditCard className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-blue-400 text-xl font-semibold mb-2">Fintech</h3>
                <p className="text-gray-300 mb-4">
                  Financial technology and digital banking.
                </p>
                <p className="text-gray-400 mb-4">
                  Transform financial services with blockchain, AI-powered trading, and secure payment solutions.
                </p>
                <Button variant="ghost" className="text-blue-400 hover:text-blue-300 p-0">
                  Learn More <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </div>

              {/* Education */}
              <div className="bg-white/5 backdrop-blur-sm border-purple-500/20 hover:border-purple-500/40 transition-all duration-300 hover:scale-105 rounded-xl p-6">
                <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center mb-4">
                  <GraduationCap className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-purple-400 text-xl font-semibold mb-2">Education</h3>
                <p className="text-gray-300 mb-4">
                  EdTech platforms and learning systems.
                </p>
                <p className="text-gray-400 mb-4">
                  Empower learners with AI-driven personalized education, virtual classrooms, and adaptive learning platforms.
                </p>
                <Button variant="ghost" className="text-purple-400 hover:text-purple-300 p-0">
                  Learn More <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </div>

              {/* Manufacturing */}
              <div className="bg-white/5 backdrop-blur-sm border-orange-500/20 hover:border-orange-500/40 transition-all duration-300 hover:scale-105 rounded-xl p-6">
                <div className="w-12 h-12 bg-gradient-to-r from-orange-500 to-red-500 rounded-lg flex items-center justify-center mb-4">
                  <Factory className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-orange-400 text-xl font-semibold mb-2">Manufacturing</h3>
                <p className="text-gray-300 mb-4">
                  Industry 4.0 and smart manufacturing.
                </p>
                <p className="text-gray-400 mb-4">
                  Optimize production with IoT sensors, predictive maintenance, and AI-powered quality control.
                </p>
                <Button variant="ghost" className="text-orange-400 hover:text-orange-300 p-0">
                  Learn More <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </div>

              {/* Retail */}
              <div className="bg-white/5 backdrop-blur-sm border-pink-500/20 hover:border-pink-500/40 transition-all duration-300 hover:scale-105 rounded-xl p-6">
                <div className="w-12 h-12 bg-gradient-to-r from-pink-500 to-rose-500 rounded-lg flex items-center justify-center mb-4">
                  <Store className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-pink-400 text-xl font-semibold mb-2">Retail</h3>
                <p className="text-gray-300 mb-4">
                  E-commerce and omnichannel solutions.
                </p>
                <p className="text-gray-400 mb-4">
                  Create seamless shopping experiences with AI-powered recommendations and inventory management.
                </p>
                <Button variant="ghost" className="text-pink-400 hover:text-pink-300 p-0">
                  Learn More <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </div>

              {/* Government */}
              <div className="bg-white/5 backdrop-blur-sm border-indigo-500/20 hover:border-indigo-500/40 transition-all duration-300 hover:scale-105 rounded-xl p-6">
                <div className="w-12 h-12 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-lg flex items-center justify-center mb-4">
                  <Building className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-indigo-400 text-xl font-semibold mb-2">Government</h3>
                <p className="text-gray-300 mb-4">
                  Public sector technology solutions.
                </p>
                <p className="text-gray-400 mb-4">
                  Modernize government services with secure, scalable, and citizen-centric digital platforms.
                </p>
                <Button variant="ghost" className="text-indigo-400 hover:text-indigo-300 p-0">
                  Learn More <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4 relative">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Join the future of technology with Zion Tech Group. Let's build something extraordinary together.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-gradient-to-r from-cyan-500 to-purple-500 hover:from-cyan-600 hover:to-purple-600 text-white border-0 px-8 py-3 text-lg">
                <MessageSquare className="w-5 h-5 mr-2" />
                Get Started Today
              </Button>
              <Button size="lg" variant="outline" className="border-cyan-500 text-cyan-400 hover:bg-cyan-500 hover:text-white px-8 py-3 text-lg">
                <Rocket className="w-5 h-5 mr-2" />
                Request Demo
              </Button>
            </div>
          </div>
        </section>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
}