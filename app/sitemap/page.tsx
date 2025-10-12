'use client';
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { ArrowRight, Home, Brain, Cloud, Shield, Code, BarChart, Users, Zap, Cpu, Target, Globe, FileText, Calendar, Phone, Mail, MapPin, Clock, CheckCircle, Star, TrendingUp, Rocket, Lightbulb, Monitor, Server, CircuitBoard, Atom, Satellite, Wrench, PieChart, LineChart, Activity, Eye, Search, Filter, Download, Upload, Share, Timer, Battery, Wifi2, Signal, Bluetooth, Camera, Mic, Headphones, Speaker, Volume2, VolumeX, Play, Pause, SkipForward, SkipBack, Repeat, Shuffle, Heart, ThumbsUp, ThumbsDown, Bookmark, Flag, AlertTriangle, Info, HelpCircle, Plus, Minus, Edit, Trash2, Save, Copy, Paste, Cut, Undo, Redo, RefreshCw, RotateCcw, RotateCw, Move, Maximize, Minimize, Square, Circle, Triangle, Hexagon, Octagon, Pentagon, Star2, Heart2, Smile, Frown, Meh, Laugh, Angry, Surprised, Confused, Wink, Kiss, Tongue, Package, DollarSign, MessageCircle, Heart, Eye, Mic, ShoppingCart, Database, Settings, Wifi, Box, Link, BookOpen } from 'lucide-react';

const SitemapPage: React.FC = () => {
  const mainPages = [
    { name: 'Home', url: '/', icon: Home, description: 'Main homepage' },
    { name: 'About', url: '/about', icon: Users, description: 'About our company' },
    { name: 'Services', url: '/services', icon: Code, description: 'Our services overview' },
    { name: 'Contact', url: '/contact', icon: Phone, description: 'Contact information' },
    { name: 'Pricing', url: '/pricing', icon: DollarSign, description: 'Pricing plans' },
    { name: 'Blog', url: '/blog', icon: FileText, description: 'Latest blog posts' },
    { name: 'Case Studies', url: '/case-studies', icon: BarChart, description: 'Success stories' },
    { name: 'Careers', url: '/careers', icon: Users, description: 'Job opportunities' },
    { name: 'Team', url: '/team', icon: Users, description: 'Our team members' },
    { name: 'Partners', url: '/partners', icon: Globe, description: 'Our partners' },
    { name: 'Support', url: '/support', icon: HelpCircle, description: 'Customer support' },
    { name: 'Status', url: '/status', icon: Activity, description: 'Service status' },
    { name: 'FAQ', url: '/faq', icon: HelpCircle, description: 'Frequently asked questions' },
    { name: 'Documentation', url: '/docs', icon: FileText, description: 'Technical documentation' },
    { name: 'API Reference', url: '/api-docs', icon: Code, description: 'API documentation' },
    { name: 'Tutorials', url: '/tutorials', icon: BookOpen, description: 'Learning resources' },
    { name: 'Community', url: '/community', icon: Users, description: 'Community forum' },
    { name: 'Demo', url: '/demo', icon: Play, description: 'Interactive demos' },
    { name: 'Consultation', url: '/consultation', icon: Calendar, description: 'Free consultation' },
    { name: 'Compliance', url: '/compliance', icon: Shield, description: 'Compliance information' }
  ];

  const aiServices = [
    { name: 'AI Services', url: '/ai-services', icon: Brain, description: 'AI services overview' },
    { name: 'AI Analytics', url: '/ai-analytics', icon: BarChart, description: 'AI-powered analytics' },
    { name: 'AI Automation', url: '/ai-automation', icon: Zap, description: 'Process automation' },
    { name: 'AI Chatbot Builder', url: '/ai-chatbot-builder', icon: MessageCircle, description: 'AI chatbot creation' },
    { name: 'AI Cybersecurity', url: '/ai-cybersecurity', icon: Shield, description: 'AI security solutions' },
    { name: 'AI CRM', url: '/ai-crm', icon: Users, description: 'AI customer relationship management' },
    { name: 'AI Data Analytics', url: '/ai-data-analytics', icon: BarChart, description: 'Data analysis with AI' },
    { name: 'AI Healthcare', url: '/ai-healthcare', icon: Heart, description: 'Healthcare AI solutions' },
    { name: 'AI Financial Services', url: '/ai-financial-services', icon: DollarSign, description: 'Financial AI services' },
    { name: 'AI Computer Vision', url: '/ai-computer-vision', icon: Eye, description: 'Computer vision solutions' },
    { name: 'AI Voice Solutions', url: '/ai-voice-solutions', icon: Mic, description: 'Voice AI technology' },
    { name: 'AI E-commerce Solutions', url: '/ai-ecommerce-solutions', icon: ShoppingCart, description: 'E-commerce AI' }
  ];

  const itServices = [
    { name: 'IT Services', url: '/it-services', icon: Server, description: 'IT services overview' },
    { name: 'Cloud Infrastructure', url: '/cloud-infrastructure', icon: Cloud, description: 'Cloud solutions' },
    { name: 'Cybersecurity Solutions', url: '/cybersecurity-solutions', icon: Shield, description: 'Security services' },
    { name: 'Web Development', url: '/web-development', icon: Globe, description: 'Web applications' },
    { name: 'Mobile Development', url: '/mobile-development', icon: Smartphone, description: 'Mobile apps' },
    { name: 'API Development', url: '/api-development', icon: Code, description: 'API solutions' },
    { name: 'Database Management', url: '/database-management', icon: Database, description: 'Database services' },
    { name: 'DevOps & CI/CD', url: '/devops-cicd', icon: Settings, description: 'DevOps automation' },
    { name: 'IT Support', url: '/it-support', icon: Monitor, description: 'Technical support' },
    { name: 'Data Analytics & BI', url: '/data-analytics-bi', icon: BarChart, description: 'Business intelligence' },
    { name: 'Custom Software', url: '/custom-software', icon: Code, description: 'Custom development' },
    { name: 'Network Infrastructure', url: '/network-infrastructure', icon: Wifi, description: 'Network solutions' }
  ];

  const microSaas = [
    { name: 'Micro SAAS', url: '/micro-saas', icon: Cpu, description: 'Micro SAAS overview' },
    { name: 'Zion Analytics Pro', url: '/zion-analytics-pro', icon: BarChart, description: 'Business intelligence platform' },
    { name: 'Zion Chat AI', url: '/zion-chat-ai', icon: MessageCircle, description: 'AI customer support' },
    { name: 'Zion Security Shield', url: '/zion-security-shield', icon: Shield, description: 'Cybersecurity monitoring' },
    { name: 'Zion Cloud Vault', url: '/zion-cloud-vault', icon: Cloud, description: 'Cloud backup solution' },
    { name: 'Zion Content Studio', url: '/zion-content-studio', icon: FileText, description: 'AI content creation' },
    { name: 'Zion CRM Intelligence', url: '/zion-crm-intelligence', icon: Users, description: 'AI-enhanced CRM' },
    { name: 'Zion Data Sync', url: '/zion-data-sync', icon: Database, description: 'Data integration platform' }
  ];

  const emergingTech = [
    { name: '5G Implementation', url: '/5g-implementation', icon: Zap, description: '5G technology solutions' },
    { name: 'AI 3D Generation', url: '/ai-3d-generation', icon: Box, description: '3D content creation' },
    { name: 'AI Holographic Workspace', url: '/ai-holographic-workspace', icon: Monitor, description: 'Immersive work environments' },
    { name: 'AI Autonomous Systems', url: '/ai-autonomous-systems', icon: Cpu, description: 'Self-operating systems' },
    { name: 'AI Blockchain Solutions', url: '/ai-blockchain-solutions', icon: Link, description: 'Decentralized AI' },
    { name: 'Quantum Computing', url: '/quantum-computing', icon: Atom, description: 'Quantum processing' },
    { name: 'AR/VR Solutions', url: '/ar-vr-solutions', icon: Monitor, description: 'Immersive experiences' },
    { name: 'IoT Integration', url: '/iot-integration', icon: Wifi, description: 'Internet of Things' },
    { name: 'Machine Learning', url: '/machine-learning', icon: Brain, description: 'ML algorithms' }
  ];

  return (
    <>
      <Helmet>
        <title>Sitemap - Zion Tech Group</title>
        <meta name="description" content="Complete sitemap of Zion Tech Group website. Find all our pages, services, and resources." />
        <meta name="keywords" content="sitemap, website map, navigation, pages, services, AI, IT, solutions" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <main className="container mx-auto px-4 py-16 pt-24">
          {/* Hero Section */}
          <section className="text-center mb-16">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              Site Map
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
              Navigate through all our pages, services, and resources. Find exactly what you're looking for.
            </p>
          </section>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Main Pages */}
            <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/10">
              <h2 className="text-2xl font-bold text-white mb-6 flex items-center">
                <Home className="w-6 h-6 mr-3 text-cyan-400" />
                Main Pages
              </h2>
              <div className="grid grid-cols-1 gap-4">
                {mainPages.map((page, index) => (
                  <Link
                    key={index}
                    to={page.url}
                    className="flex items-center space-x-4 p-4 rounded-xl hover:bg-cyan-500/10 transition-all duration-300 group"
                  >
                    <div className="w-10 h-10 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform">
                      <page.icon className="w-5 h-5 text-white" />
                    </div>
                    <div className="flex-1">
                      <div className="text-white font-semibold group-hover:text-cyan-300 transition-colors">
                        {page.name}
                      </div>
                      <div className="text-sm text-gray-400 group-hover:text-gray-300">
                        {page.description}
                      </div>
                    </div>
                    <ArrowRight className="w-4 h-4 text-gray-400 group-hover:text-cyan-400 ml-auto group-hover:translate-x-1 transition-all" />
                  </Link>
                ))}
              </div>
            </div>

            {/* AI Services */}
            <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/10">
              <h2 className="text-2xl font-bold text-white mb-6 flex items-center">
                <Brain className="w-6 h-6 mr-3 text-purple-400" />
                AI Services
              </h2>
              <div className="grid grid-cols-1 gap-4 max-h-96 overflow-y-auto custom-scrollbar">
                {aiServices.map((service, index) => (
                  <Link
                    key={index}
                    to={service.url}
                    className="flex items-center space-x-4 p-4 rounded-xl hover:bg-purple-500/10 transition-all duration-300 group"
                  >
                    <div className="w-10 h-10 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform">
                      <service.icon className="w-5 h-5 text-white" />
                    </div>
                    <div className="flex-1">
                      <div className="text-white font-semibold group-hover:text-purple-300 transition-colors">
                        {service.name}
                      </div>
                      <div className="text-sm text-gray-400 group-hover:text-gray-300">
                        {service.description}
                      </div>
                    </div>
                    <ArrowRight className="w-4 h-4 text-gray-400 group-hover:text-purple-400 ml-auto group-hover:translate-x-1 transition-all" />
                  </Link>
                ))}
              </div>
            </div>

            {/* IT Services */}
            <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/10">
              <h2 className="text-2xl font-bold text-white mb-6 flex items-center">
                <Cloud className="w-6 h-6 mr-3 text-green-400" />
                IT Services
              </h2>
              <div className="grid grid-cols-1 gap-4 max-h-96 overflow-y-auto custom-scrollbar">
                {itServices.map((service, index) => (
                  <Link
                    key={index}
                    to={service.url}
                    className="flex items-center space-x-4 p-4 rounded-xl hover:bg-green-500/10 transition-all duration-300 group"
                  >
                    <div className="w-10 h-10 bg-gradient-to-r from-green-500 to-emerald-500 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform">
                      <service.icon className="w-5 h-5 text-white" />
                    </div>
                    <div className="flex-1">
                      <div className="text-white font-semibold group-hover:text-green-300 transition-colors">
                        {service.name}
                      </div>
                      <div className="text-sm text-gray-400 group-hover:text-gray-300">
                        {service.description}
                      </div>
                    </div>
                    <ArrowRight className="w-4 h-4 text-gray-400 group-hover:text-green-400 ml-auto group-hover:translate-x-1 transition-all" />
                  </Link>
                ))}
              </div>
            </div>

            {/* Micro SAAS */}
            <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/10">
              <h2 className="text-2xl font-bold text-white mb-6 flex items-center">
                <Cpu className="w-6 h-6 mr-3 text-orange-400" />
                Micro SAAS
              </h2>
              <div className="grid grid-cols-1 gap-4 max-h-96 overflow-y-auto custom-scrollbar">
                {microSaas.map((service, index) => (
                  <Link
                    key={index}
                    to={service.url}
                    className="flex items-center space-x-4 p-4 rounded-xl hover:bg-orange-500/10 transition-all duration-300 group"
                  >
                    <div className="w-10 h-10 bg-gradient-to-r from-orange-500 to-red-500 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform">
                      <service.icon className="w-5 h-5 text-white" />
                    </div>
                    <div className="flex-1">
                      <div className="text-white font-semibold group-hover:text-orange-300 transition-colors">
                        {service.name}
                      </div>
                      <div className="text-sm text-gray-400 group-hover:text-gray-300">
                        {service.description}
                      </div>
                    </div>
                    <ArrowRight className="w-4 h-4 text-gray-400 group-hover:text-orange-400 ml-auto group-hover:translate-x-1 transition-all" />
                  </Link>
                ))}
              </div>
            </div>

            {/* Emerging Technologies */}
            <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/10 lg:col-span-2">
              <h2 className="text-2xl font-bold text-white mb-6 flex items-center">
                <Rocket className="w-6 h-6 mr-3 text-cyan-400" />
                Emerging Technologies
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {emergingTech.map((tech, index) => (
                  <Link
                    key={index}
                    to={tech.url}
                    className="flex items-center space-x-4 p-4 rounded-xl hover:bg-cyan-500/10 transition-all duration-300 group"
                  >
                    <div className="w-10 h-10 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform">
                      <tech.icon className="w-5 h-5 text-white" />
                    </div>
                    <div className="flex-1">
                      <div className="text-white font-semibold group-hover:text-cyan-300 transition-colors">
                        {tech.name}
                      </div>
                      <div className="text-sm text-gray-400 group-hover:text-gray-300">
                        {tech.description}
                      </div>
                    </div>
                    <ArrowRight className="w-4 h-4 text-gray-400 group-hover:text-cyan-400 ml-auto group-hover:translate-x-1 transition-all" />
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </main>
      </div>
    </>
  );
};

export default SitemapPage;
