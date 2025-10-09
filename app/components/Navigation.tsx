'use client';
import React, { useState, useEffect } from 'react';
import { Phone, Mail, MapPin, Home, Settings, Brain, Cpu, BarChart, MessageSquare, PieChart, Bot, Code, Video, Mic, Zap, TrendingUp, FileText, DollarSign, Stethoscope, GraduationCap, Truck, Scale, Wheat, Plane, Calendar, Utensils, Hammer, Factory, ShoppingCart, Building, Package, Megaphone, Users, Eye, Cube, Shield, Lock, Globe, Car, Briefcase, Database, Smartphone, Gamepad2 } from 'lucide-react';

const Navigation: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navigationItems = [
    { name: 'Home', href: '/', icon: Home },
    { name: 'Services', href: '/services', icon: Settings },
    { name: 'AI Solutions', href: '/ai-solutions', icon: Brain },
    { name: 'IT Services', href: '/it-services', icon: Cpu },
    { name: 'Contact', href: '/contact', icon: Phone },
  ];

  const microSAASServices = [
    { name: 'AI Project Manager', href: '/ai-project-manager', icon: BarChart },
    { name: 'AI Social Media Manager', href: '/ai-social-media-manager', icon: MessageSquare },
    { name: 'AI Analytics Dashboard', href: '/ai-analytics', icon: PieChart },
    { name: 'AI Email Marketing', href: '/ai-email-marketing', icon: Mail },
    { name: 'AI Customer Support Bot', href: '/ai-customer-support-bot', icon: Bot },
    { name: 'AI Code Review Assistant', href: '/ai-code-generation', icon: Code },
    { name: 'AI Video Generator', href: '/ai-video-generation', icon: Video },
    { name: 'AI Voice Cloning', href: '/ai-voice-cloning', icon: Mic },
    { name: 'AI Workflow Automation', href: '/ai-workflow-automation', icon: Zap },
    { name: 'AI Sales Automation', href: '/ai-sales-automation', icon: TrendingUp },
    { name: 'AI Content Writer', href: '/ai-content-writer', icon: FileText },
    { name: 'AI Financial Advisor', href: '/ai-financial-advisor', icon: DollarSign },
    { name: 'AI Real Estate Assistant', href: '/ai-real-estate-assistant', icon: Home },
    { name: 'AI Healthcare Assistant', href: '/ai-healthcare-assistant', icon: Stethoscope },
    { name: 'AI Education Platform', href: '/ai-education-platform', icon: GraduationCap },
    { name: 'AI Supply Chain Optimizer', href: '/ai-supply-chain-optimizer', icon: Truck },
    { name: 'AI Energy Management', href: '/ai-energy-management', icon: Zap },
    { name: 'AI Legal Document Analyzer', href: '/ai-legal-analyzer', icon: Scale },
    { name: 'AI Agriculture Assistant', href: '/ai-agriculture-assistant', icon: Wheat },
    { name: 'AI Travel Planner', href: '/ai-travel-planner', icon: Plane },
    { name: 'AI Event Management', href: '/ai-event-management', icon: Calendar },
    { name: 'AI Restaurant Manager', href: '/ai-restaurant-manager', icon: Utensils },
    { name: 'AI Fleet Management', href: '/ai-fleet-management', icon: Truck },
    { name: 'AI Insurance Assistant', href: '/ai-insurance-assistant', icon: Shield },
    { name: 'AI Construction Manager', href: '/ai-construction-manager', icon: Hammer },
    { name: 'AI Manufacturing Optimizer', href: '/ai-manufacturing-optimizer', icon: Factory },
    { name: 'AI Retail Analytics', href: '/ai-retail-analytics', icon: ShoppingCart },
    { name: 'AI Banking Assistant', href: '/ai-banking-assistant', icon: Building },
    { name: 'AI Logistics Optimizer', href: '/ai-logistics-optimizer', icon: Package },
    { name: 'AI Marketing Automation', href: '/ai-marketing-automation', icon: Megaphone },
    { name: 'AI Customer Analytics', href: '/ai-customer-analytics', icon: Users },
  ];

  const aiServices = [
    { name: 'Machine Learning', href: '/ai-ml', icon: Brain },
    { name: 'Natural Language Processing', href: '/ai-nlp', icon: MessageSquare },
    { name: 'Computer Vision', href: '/ai-vision', icon: Eye },
    { name: 'AI Automation', href: '/ai-automation', icon: Zap },
    { name: 'AI Data Visualization', href: '/ai-data-visualization', icon: BarChart },
    { name: 'AI 3D Generation', href: '/ai-3d-generation', icon: Cube },
    { name: 'AI Voice Synthesis', href: '/ai-voice-synthesis', icon: Mic },
    { name: 'AI Fraud Detection', href: '/ai-fraud-detection', icon: Shield },
    { name: 'AI Quantum Computing', href: '/ai-quantum-computing', icon: Cpu },
    { name: 'AI Autonomous Systems', href: '/ai-autonomous-systems', icon: Car },
    { name: 'AI Edge Computing', href: '/ai-edge-computing', icon: Cpu },
    { name: 'AI Blockchain Solutions', href: '/ai-blockchain-solutions', icon: Lock },
    { name: 'AI Metaverse Development', href: '/ai-metaverse-development', icon: Cube },
    { name: 'AI Climate Solutions', href: '/ai-climate-solutions', icon: Globe },
    { name: 'AI Space Technology', href: '/ai-space-technology', icon: Plane },
    { name: 'AI Neuroscience', href: '/ai-neuroscience', icon: Brain },
    { name: 'AI Biotechnology', href: '/ai-biotechnology', icon: Stethoscope },
    { name: 'AI Cybersecurity Advanced', href: '/ai-cybersecurity-advanced', icon: Shield },
    { name: 'AI Digital Twin', href: '/ai-digital-twin', icon: Settings },
    { name: 'AI Conversational AI', href: '/ai-conversational-ai', icon: MessageSquare },
  ];

  const itServices = [
    { name: 'Cloud Migration', href: '/cloud-migration', icon: Cloud },
    { name: 'IT Consulting', href: '/it-consulting', icon: Settings },
    { name: 'Cybersecurity', href: '/cybersecurity', icon: Shield },
    { name: 'DevOps & CI/CD', href: '/devops', icon: Settings },
    { name: 'Database Services', href: '/database', icon: Database },
    { name: 'Mobile App Development', href: '/mobile-development', icon: Smartphone },
    { name: 'Web Development', href: '/web-development', icon: Code },
    { name: 'Blockchain Solutions', href: '/blockchain', icon: Lock },
    { name: 'Quantum Computing Infrastructure', href: '/quantum-computing-infrastructure', icon: Cpu },
    { name: '5G & Edge Computing', href: '/5g-edge-computing', icon: Globe },
    { name: 'Autonomous Systems Integration', href: '/autonomous-systems-integration', icon: Car },
    { name: 'Metaverse Development Platform', href: '/metaverse-development-platform', icon: Cube },
    { name: 'AI Infrastructure & MLOps', href: '/ai-infrastructure-mlops', icon: Brain },
    { name: 'Digital Transformation Consulting', href: '/digital-transformation-consulting', icon: Briefcase },
    { name: 'Cloud-Native Development', href: '/cloud-native-development', icon: Cloud },
    { name: 'Data Engineering & Analytics', href: '/data-engineering-analytics', icon: Database },
    { name: 'IoT & Smart City Solutions', href: '/iot-smart-city-solutions', icon: Cpu },
    { name: 'Augmented & Virtual Reality', href: '/augmented-virtual-reality', icon: Eye },
    { name: 'High-Performance Computing', href: '/high-performance-computing', icon: Cpu },
    { name: 'Green IT & Sustainability', href: '/green-it-sustainability', icon: Globe },
    { name: 'Space Technology Solutions', href: '/space-technology-solutions', icon: Plane },
    { name: 'Biotechnology IT Solutions', href: '/biotechnology-it-solutions', icon: Stethoscope },
    { name: 'Financial Technology Solutions', href: '/financial-technology-solutions', icon: DollarSign },
    { name: 'Gaming & Entertainment Technology', href: '/gaming-entertainment-technology', icon: Gamepad2 },
    { name: 'Educational Technology Solutions', href: '/educational-technology-solutions', icon: GraduationCap },
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled 
        ? 'bg-slate-900/95 backdrop-blur-md border-b border-cyan-400/20' 
        : 'bg-transparent'
    }`}>
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-gradient-to-r from-cyan-400 to-purple-500 rounded-lg flex items-center justify-center">
              <Brain className="w-6 h-6 text-white" />
            </div>
            <span className="text-xl font-bold text-white neon-text">Zion Tech Group</span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {navigationItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-gray-300 hover:text-cyan-400 transition-colors duration-300 flex items-center space-x-1 group"
              >
                <item.icon className="w-4 h-4 group-hover:scale-110 transition-transform duration-300" />
                <span>{item.name}</span>
              </a>
            ))}
            
            {/* Services Dropdown */}
            <div className="relative group">
              <button className="text-gray-300 hover:text-cyan-400 transition-colors duration-300 flex items-center space-x-1">
                <Settings className="w-4 h-4" />
                <span>Services</span>
                <svg className="w-4 h-4 ml-1 group-hover:rotate-180 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              
              {/* Dropdown Menu */}
              <div className="absolute top-full left-0 mt-2 w-96 bg-slate-800/95 backdrop-blur-md rounded-lg shadow-xl border border-cyan-400/20 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
                <div className="p-4">
                  <div className="grid grid-cols-1 gap-4">
                    {/* Micro SAAS Services */}
                    <div>
                      <h3 className="text-cyan-400 font-semibold mb-2 text-sm">Micro SAAS Solutions</h3>
                      <div className="grid grid-cols-1 gap-1">
                        {microSAASServices.slice(0, 4).map((service) => (
                          <a
                            key={service.name}
                            href={service.href}
                            className="flex items-center space-x-2 text-gray-300 hover:text-cyan-400 transition-colors duration-200 py-1 px-2 rounded hover:bg-slate-700/50"
                          >
                            <service.icon className="w-3 h-3" />
                            <span className="text-xs">{service.name}</span>
                          </a>
                        ))}
                      </div>
                    </div>
                    
                    {/* AI Services */}
                    <div>
                      <h3 className="text-purple-400 font-semibold mb-2 text-sm">AI Services</h3>
                      <div className="grid grid-cols-1 gap-1">
                        {aiServices.slice(0, 4).map((service) => (
                          <a
                            key={service.name}
                            href={service.href}
                            className="flex items-center space-x-2 text-gray-300 hover:text-purple-400 transition-colors duration-200 py-1 px-2 rounded hover:bg-slate-700/50"
                          >
                            <service.icon className="w-3 h-3" />
                            <span className="text-xs">{service.name}</span>
                          </a>
                        ))}
                      </div>
                    </div>
                    
                    {/* IT Services */}
                    <div>
                      <h3 className="text-green-400 font-semibold mb-2 text-sm">IT Services</h3>
                      <div className="grid grid-cols-1 gap-1">
                        {itServices.map((service) => (
                          <a
                            key={service.name}
                            href={service.href}
                            className="flex items-center space-x-2 text-gray-300 hover:text-green-400 transition-colors duration-200 py-1 px-2 rounded hover:bg-slate-700/50"
                          >
                            <service.icon className="w-3 h-3" />
                            <span className="text-xs">{service.name}</span>
                          </a>
                        ))}
                      </div>
                    </div>
                  </div>
                  
                  <div className="mt-4 pt-4 border-t border-gray-600">
                    <a
                      href="/services"
                      className="block text-center text-cyan-400 hover:text-cyan-300 transition-colors duration-200 text-sm font-medium"
                    >
                      View All Services →
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Button */}
          <div className="hidden lg:flex items-center space-x-4">
            <a
              href="tel:+13024640950"
              className="flex items-center space-x-2 bg-cyan-600 hover:bg-cyan-700 text-white px-4 py-2 rounded-lg transition-all duration-300 hover:scale-105"
            >
              <Phone className="w-4 h-4" />
              <span>Call Now</span>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden text-gray-300 hover:text-cyan-400 transition-colors duration-300"
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="lg:hidden bg-slate-800/95 backdrop-blur-md border-t border-cyan-400/20">
            <div className="px-4 py-6 space-y-4">
              {navigationItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="flex items-center space-x-3 text-gray-300 hover:text-cyan-400 transition-colors duration-300 py-2"
                  onClick={() => setIsOpen(false)}
                >
                  <item.icon className="w-5 h-5" />
                  <span>{item.name}</span>
                </a>
              ))}
              
              {/* Mobile Services Section */}
              <div className="pt-4 border-t border-gray-600">
                <h3 className="text-cyan-400 font-semibold mb-3">Micro SAAS Solutions</h3>
                <div className="grid grid-cols-1 gap-2">
                  {microSAASServices.slice(0, 6).map((service) => (
                    <a
                      key={service.name}
                      href={service.href}
                      className="flex items-center space-x-2 text-gray-300 hover:text-cyan-400 transition-colors duration-200 py-1 px-2 rounded hover:bg-slate-700/50"
                      onClick={() => setIsOpen(false)}
                    >
                      <service.icon className="w-4 h-4" />
                      <span className="text-sm">{service.name}</span>
                    </a>
                  ))}
                </div>
              </div>
              
              <div className="pt-4 border-t border-gray-600">
                <h3 className="text-purple-400 font-semibold mb-3">AI Services</h3>
                <div className="grid grid-cols-1 gap-2">
                  {aiServices.slice(0, 4).map((service) => (
                    <a
                      key={service.name}
                      href={service.href}
                      className="flex items-center space-x-2 text-gray-300 hover:text-purple-400 transition-colors duration-200 py-1 px-2 rounded hover:bg-slate-700/50"
                      onClick={() => setIsOpen(false)}
                    >
                      <service.icon className="w-4 h-4" />
                      <span className="text-sm">{service.name}</span>
                    </a>
                  ))}
                </div>
              </div>
              
              <div className="pt-4 border-t border-gray-600">
                <h3 className="text-green-400 font-semibold mb-3">IT Services</h3>
                <div className="grid grid-cols-1 gap-2">
                  {itServices.map((service) => (
                    <a
                      key={service.name}
                      href={service.href}
                      className="flex items-center space-x-2 text-gray-300 hover:text-green-400 transition-colors duration-200 py-1 px-2 rounded hover:bg-slate-700/50"
                      onClick={() => setIsOpen(false)}
                    >
                      <service.icon className="w-4 h-4" />
                      <span className="text-sm">{service.name}</span>
                    </a>
                  ))}
                </div>
              </div>
              
              <div className="pt-4 border-t border-gray-600">
                <a
                  href="tel:+13024640950"
                  className="flex items-center justify-center space-x-2 bg-cyan-600 hover:bg-cyan-700 text-white px-4 py-3 rounded-lg transition-all duration-300"
                  onClick={() => setIsOpen(false)}
                >
                  <Phone className="w-5 h-5" />
                  <span>Call +1 302 464 0950</span>
                </a>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
