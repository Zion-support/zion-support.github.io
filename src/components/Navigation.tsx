<<<<<<< HEAD
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ChevronDown, Phone, Mail, MapPin, Menu, X, Brain, Cloud, Shield, Code, BarChart, Users, Zap, ArrowRight, Sparkles, Globe, Database, Settings, Target, MessageSquare, Eye, Cpu, Lock, BarChart3, FileText, Search, Bot, Palette, Camera, Music, Video, Gamepad2, ShoppingCart, CreditCard, Building, Factory, Car, Plane, Ship, Train, Home, Heart, Stethoscope, GraduationCap, Briefcase, Wrench, Hammer, Paintbrush, Scissors, BookOpen, Calculator, Calendar, Clock3, Compass, Navigation as NavIcon, PieChart, TrendingDown, Activity, Zap as Lightning, Target as Crosshair, Shield as Security, Users as People, Star as StarIcon, CheckCircle, ArrowRight as Arrow, Phone as PhoneIcon, Mail as MailIcon, MapPin as Location, Truck, Smartphone, TrendingUp, Check } from 'lucide-react';
;
const Navigation: React.FC = () => {;
const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [isAIOpen, setIsAIOpen] = useState(false);
  const [isITOpen, setIsITOpen] = useState(false);
  const [isSpecializedOpen, setIsSpecializedOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {;
const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
;
const closeAllMenus = () => {
    setIsMenuOpen(false);
    setIsServicesOpen(false);
    setIsAIOpen(false);
    setIsITOpen(false);
    setIsSpecializedOpen(false);
  };
;
const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    if (isMenuOpen) {
      closeAllMenus();
    }
  };
;
const toggleServices = () => {
    setIsServicesOpen(!isServicesOpen);
    if (isServicesOpen) {
      setIsAIOpen(false);
      setIsITOpen(false);
      setIsSpecializedOpen(false);
    }
  };
;
const toggleAI = () => {
    setIsAIOpen(!isAIOpen);
    if (isAIOpen) {
      setIsITOpen(false);
      setIsSpecializedOpen(false);
    }
  };
;
const toggleIT = () => {
    setIsITOpen(!isITOpen);
    if (isITOpen) {
      setIsAIOpen(false);
      setIsSpecializedOpen(false);
    }
  };
;
const toggleSpecialized = () => {
    setIsSpecializedOpen(!isSpecializedOpen);
    if (isSpecializedOpen) {
      setIsAIOpen(false);
      setIsITOpen(false);
    }
  };
;
const microSAASServices = [
    { name: 'AI Project Manager', href: '/ai-project-manager', icon: BarChart },
    { name: 'AI Writing Assistant', href: '/ai-writing-assistant', icon: FileText },
    { name: 'AI CRM Intelligence', href: '/ai-crm', icon: Users },
    { name: 'AI Healthcare Assistant', href: '/ai-healthcare', icon: Heart },
    { name: 'AI Fintech Analyzer', href: '/ai-fintech', icon: CreditCard },
    { name: 'AI Mobile App Builder', href: '/ai-mobile-app-development', icon: Smartphone },
    { name: 'AI Cybersecurity Shield', href: '/ai-cybersecurity', icon: Shield },
    { name: 'AI Marketing Automation', href: '/ai-marketing', icon: Target },
    { name: 'AI Task Manager Pro', href: '/task-manager-pro', icon: Check },
    { name: 'AI Expense Tracker', href: '/expense-tracker', icon: Calculator },
    { name: 'AI Chatbot Builder', href: '/ai-chatbot-builder', icon: Bot },
    { name: 'AI Data Analytics Pro', href: '/ai-data-analytics', icon: BarChart3 },
    { name: 'AI Social Media Manager', href: '/ai-social-media-manager', icon: MessageSquare },
    { name: 'AI Email Marketing', href: '/ai-email-marketing', icon: Mail },
    { name: 'AI Customer Support Bot', href: '/ai-customer-support-bot', icon: Bot },
    { name: 'AI Code Review Assistant', href: '/ai-code-generation', icon: Code },
    { name: 'AI Content Generator', href: '/ai-content-generation', icon: FileText },
    { name: 'AI Lead Generation', href: '/ai-lead-generation', icon: Target },
    { name: 'AI Document Processor', href: '/ai-document-processing', icon: FileText },
    { name: 'AI SEO Optimizer', href: '/ai-seo-optimizer', icon: Search },
    { name: 'AI E-commerce Assistant', href: '/ai-ecommerce-solutions', icon: ShoppingCart },
    { name: 'AI Financial Analyzer', href: '/ai-financial-analyzer', icon: Calculator },
    { name: 'AI Video Generator Pro', href: '/ai-video-generation', icon: Video },
    { name: 'AI Voice Cloning Studio', href: '/ai-voice-cloning', icon: Music },
    { name: 'AI Music Composer', href: '/ai-music-composition', icon: Music },
    { name: 'AI Fashion Designer', href: '/ai-fashion-design', icon: Palette },
    { name: 'AI Fitness Coach', href: '/ai-fitness-coach', icon: Heart },
    { name: 'AI Workflow Automation', href: '/ai-workflow-automation', icon: Settings },
    { name: 'AI Sales Automation', href: '/ai-sales-automation', icon: Target },
    { name: 'AI Data Visualization', href: '/ai-data-visualization', icon: BarChart },
    { name: 'AI 3D Generation Studio', href: '/ai-3d-generation', icon: Camera }
  ];
;
const aiServices = [
    { name: 'Machine Learning Solutions', href: '/machine-learning', icon: Brain },
    { name: 'AI Business Intelligence', href: '/ai-business-intelligence', icon: BarChart },
    { name: 'AI Supply Chain Optimization', href: '/ai-supply-chain', icon: Globe },
    { name: 'AI Quality Assurance', href: '/ai-quality-assurance', icon: Shield },
    { name: 'AI Human Resources', href: '/ai-hr', icon: Users },
    { name: 'AI Legal Assistant', href: '/ai-legal', icon: FileText },
    { name: 'AI Real Estate Analytics', href: '/ai-real-estate', icon: Home },
    { name: 'AI Manufacturing Intelligence', href: '/ai-manufacturing', icon: Factory },
    { name: 'AI Transportation & Logistics', href: '/ai-transportation', icon: Truck },
    { name: 'AI Education Platform', href: '/ai-education', icon: GraduationCap },
    { name: 'AI Energy Management', href: '/ai-energy', icon: Zap },
    { name: 'AI Insurance Analytics', href: '/ai-insurance', icon: Shield },
    { name: 'Natural Language Processing', href: '/nlp', icon: MessageSquare },
    { name: 'Computer Vision', href: '/computer-vision', icon: Eye },
    { name: 'AI Automation', href: '/ai-automation', icon: Zap },
    { name: 'Quantum AI Computing', href: '/quantum-ai', icon: Cpu },
    { name: 'AI Cybersecurity', href: '/ai-cybersecurity', icon: Shield },
    { name: 'AI Healthcare Solutions', href: '/ai-healthcare', icon: Stethoscope },
    { name: 'AI Fintech Solutions', href: '/ai-fintech', icon: CreditCard },
    { name: 'AI Mobile App Development', href: '/ai-mobile-app-development', icon: Smartphone },
    { name: 'AI CRM Solutions', href: '/ai-crm', icon: Users },
    { name: 'AI Email Assistant', href: '/ai-email-assistant', icon: Mail },
    { name: 'AI Scheduler Pro', href: '/ai-scheduler', icon: Calendar }
  ];
;
const itServices = [
    { name: 'Cloud Services', href: '/cloud-services', icon: Cloud },
    { name: 'Enterprise Security Solutions', href: '/enterprise-security', icon: Shield },
    { name: 'IT Infrastructure Management', href: '/it-infrastructure', icon: Settings },
    { name: 'Data Center Solutions', href: '/data-center', icon: Database },
    { name: 'Network Security & Firewall', href: '/network-security', icon: Lock },
    { name: 'IT Consulting & Strategy', href: '/it-consulting', icon: Briefcase },
    { name: 'Managed IT Services', href: '/managed-it', icon: Users },
    { name: 'Cloud Security & Compliance', href: '/cloud-security', icon: Shield },
    { name: 'IT Asset Management', href: '/it-asset-management', icon: BarChart },
    { name: 'Backup & Disaster Recovery', href: '/backup-recovery', icon: Database },
    { name: 'IT Training & Support', href: '/it-training', icon: GraduationCap },
    { name: 'IT Performance Optimization', href: '/it-performance', icon: Zap },
    { name: 'Cybersecurity', href: '/cybersecurity', icon: Shield },
    { name: 'DevOps & CI/CD', href: '/devops', icon: Settings },
    { name: 'Database Services', href: '/database-services', icon: Database },
    { name: 'Network Infrastructure', href: '/network-infrastructure', icon: Globe },
    { name: 'IT Support & Helpdesk', href: '/it-support', icon: Users },
    { name: 'Cloud Migration', href: '/cloud-migration', icon: Cloud },
    { name: 'Compliance & Governance', href: '/compliance', icon: FileText },
    { name: 'Developer Tools', href: '/developer-tools', icon: Code },
    { name: 'Marketing Tools', href: '/marketing-tools', icon: Target },
    { name: 'Productivity Solutions', href: '/productivity', icon: BarChart }
  ];
;
const specializedServices = [
    { name: 'Quantum Computing', href: '/quantum-computing', icon: Cpu },
    { name: 'Autonomous Systems', href: '/autonomous-systems', icon: Settings },
    { name: 'Blockchain & Web3', href: '/blockchain', icon: Lock },
    { name: 'IoT & Edge Computing', href: '/iot-edge', icon: Globe },
    { name: 'Business Intelligence', href: '/business-intelligence', icon: BarChart },
    { name: 'Robotics Solutions', href: '/robotics', icon: Settings },
    { name: 'Enterprise Solutions', href: '/enterprise', icon: Building },
    { name: 'Analytics Tools', href: '/analytics-tools', icon: BarChart3 },
    { name: 'Business Apps', href: '/business-apps', icon: Briefcase },
    { name: 'Expense Tracker Pro', href: '/expense-tracker', icon: Calculator },
    { name: 'Task Manager Pro', href: '/task-manager-pro', icon: CheckCircle },
    { name: 'Smart Analytics', href: '/smart-analytics', icon: TrendingUp }
  ];
=======
import React from 'react';

interface NavigationProps {
  className?: string;
  children?: React.ReactNode;
}
>>>>>>> cursor/fix-errors-and-merge-to-main-54ad

const Navigation: React.FC<NavigationProps> = ({ className = '', children }) => {
  return (
<<<<<<< HEAD
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-slate-900/95 backdrop-blur-md border-b border-cyan-400/20' : 'bg-transparent'
    }`}>
      <div className="container mx-auto px-4"></div>"
        <div className="flex items-center justify-between h-16"></div>
          {/* Logo */}"
          <a href="/" className="flex items-center space-x-2" onClick={closeAllMenus}>"
            <div className="w-8 h-8 bg-gradient-to-br from-cyan-400 to-purple-600 rounded-lg flex items-center justify-center"></div>"
              <Brain className="w-5 h-5 text-white" />
            </div>"
            <span className="text-xl font-bold text-white neon-text">Zion Tech Group</span>
          </a>

          {/* Desktop Navigation */}"
          <div className="hidden lg:flex items-center space-x-8"></div>"
            <div className="relative group"></div>
              <button
                onClick={toggleServices}"
                className="flex items-center space-x-1 text-white hover:text-cyan-400 transition-colors"
              >
                <span>Services</span>
                <ChevronDown className={`w-4 h-4 transition-transform ${isServicesOpen ? 'rotate-180' : ''}`} />
              </button>
              
              {isServicesOpen && ("
                <div className="absolute top-full left-0 mt-2 w-[800px] bg-slate-900/95 backdrop-blur-md border border-cyan-400/20 rounded-lg shadow-xl p-6"></div>"
                  <div className="grid grid-cols-3 gap-6"></div>
                    <div></div>"
                      <h3 className="text-cyan-400 font-semibold mb-3 flex items-center">"
                        <Zap className="w-4 h-4 mr-2" />
                        Micro SAAS
                      </h3>"
                      <div className="space-y-2"></div>)
                        {microSAASServices.slice(0, 6).map((service) => (
                          <a key={service.name}
                            href={service.href}"
                            className="flex items-center space-x-2 text-sm text-gray-300 hover:text-cyan-400 transition-colors"
                            onClick={closeAllMenus}
                          >"
                            <service.icon className="w-3 h-3" />
                            <span>{service.name}</span>
                          </a>)
                        ))}
                      </div>
                    </div>
                    <div></div>"
                      <h3 className="text-cyan-400 font-semibold mb-3 flex items-center">"
                        <Brain className="w-4 h-4 mr-2" />
                        AI Services
                      </h3>"
                      <div className="space-y-2"></div>
                        {aiServices.slice(0, 6).map((service) => (
                          <a key={service.name}
                            href={service.href}"
                            className="flex items-center space-x-2 text-sm text-gray-300 hover:text-cyan-400 transition-colors"
                            onClick={closeAllMenus}
                          >"
                            <service.icon className="w-3 h-3" />
                            <span>{service.name}</span>
                          </a>)
                        ))}
                      </div>
                    </div>
                    <div></div>"
                      <h3 className="text-cyan-400 font-semibold mb-3 flex items-center">"
                        <Settings className="w-4 h-4 mr-2" />
                        IT Services
                      </h3>"
                      <div className="space-y-2"></div>
                        {itServices.slice(0, 6).map((service) => (
                          <a
                            key={service.name}
                            href={service.href}"
                            className="flex items-center space-x-2 text-sm text-gray-300 hover:text-cyan-400 transition-colors"
                            onClick={closeAllMenus}
                          >"
                            <service.icon className="w-3 h-3" />
                            <span>{service.name}</span>
                          </a>)
                        ))}
                      </div>
                    </div>
                  </div>"
                  <div className="mt-4 pt-4 border-t border-gray-700"></div>"
                    <div className="grid grid-cols-2 gap-4"></div>
                      <a"
                        href="/services""
                        className="flex items-center justify-center space-x-2 text-cyan-400 hover:text-white transition-colors"
                        onClick={closeAllMenus}
                      >
                        <span>View All Services</span>"
                        <ArrowRight className="w-4 h-4" />
                      </a>
                      <a"
                        href="/specialized-services""
                        className="flex items-center justify-center space-x-2 text-purple-400 hover:text-white transition-colors"
                        onClick={closeAllMenus}
                      >
                        <span>Specialized Solutions</span>"
                        <ArrowRight className="w-4 h-4" />
                      </a>
                    </div>
                  </div>
                </div>
              )}
            </div>
"
            <Link to="/about" className="text-white hover:text-cyan-400 transition-colors">
              About
            </Link>"
            <Link to="/blog" className="text-white hover:text-cyan-400 transition-colors">
              Blog
            </Link>"
            <Link to="/case-studies" className="text-white hover:text-cyan-400 transition-colors">
              Case Studies
            </Link>"
            <Link to="/pricing" className="text-white hover:text-cyan-400 transition-colors">
              Pricing
            </Link>"
            <Link to="/contact" className="text-white hover:text-cyan-400 transition-colors">
              Contact
            </Link>
            "
            <div className="flex items-center space-x-4"></div>
              <a"
                href="tel:+13024640950""
                className="flex items-center space-x-2 text-cyan-400 hover:text-white transition-colors"
              >"
                <Phone className="w-4 h-4" />"
                <span className="hidden sm:inline">+1 302 464 0950</span>
              </a>"
              <a href="/contact""
                className="cyber-button px-4 py-2 text-sm"
              >
                Get Started
              </a>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMenu}"
            className="lg:hidden text-white hover:text-cyan-400 transition-colors"
          >"
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && ("
          <div className="lg:hidden bg-slate-900/95 backdrop-blur-md border-t border-cyan-400/20"></div>"
            <div className="px-4 py-6 space-y-4"></div>
              <div></div>
                <button
                  onClick={toggleServices}"
                  className="flex items-center justify-between w-full text-white hover:text-cyan-400 transition-colors"
                >
                  <span>Services</span>
                  <ChevronDown className={`w-4 h-4 transition-transform ${isServicesOpen ? 'rotate-180' : ''}`} />
                </button>
                
                {isServicesOpen && ("
                  <div className="mt-4 pl-4 space-y-3"></div>
                    <div></div>"
                      <h4 className="text-cyan-400 font-semibold mb-2">Micro SAAS</h4>"
                      <div className="space-y-2"></div>)
                        {microSAASServices.slice(0, 4).map((service) => (
                          <a key={service.name}
                            href={service.href}"
                            className="block text-sm text-gray-300 hover:text-cyan-400 transition-colors"
                            onClick={closeAllMenus}
                          >
                            {service.name}
                          </a>)
                        ))}
                      </div>
                    </div>
                    <div></div>"
                      <h4 className="text-cyan-400 font-semibold mb-2">AI Services</h4>"
                      <div className="space-y-2"></div>
                        {aiServices.slice(0, 4).map((service) => (
                          <a key={service.name}
                            href={service.href}"
                            className="block text-sm text-gray-300 hover:text-cyan-400 transition-colors"
                            onClick={closeAllMenus}
                          >
                            {service.name}
                          </a>)
                        ))}
                      </div>
                    </div>"
                    <a href="/services""
                      className="block text-cyan-400 hover:text-white transition-colors"
                      onClick={closeAllMenus}
                    >
                      View All Services →
                    </a>
                  </div>
                )}
              </div>
"
              <Link to="/about" className="block text-white hover:text-cyan-400 transition-colors" onClick={closeAllMenus}>
                About
              </Link>"
              <Link to="/blog" className="block text-white hover:text-cyan-400 transition-colors" onClick={closeAllMenus}>
                Blog
              </Link>"
              <Link to="/case-studies" className="block text-white hover:text-cyan-400 transition-colors" onClick={closeAllMenus}>
                Case Studies
              </Link>"
              <Link to="/pricing" className="block text-white hover:text-cyan-400 transition-colors" onClick={closeAllMenus}>
                Pricing
              </Link>"
              <Link to="/contact" className="block text-white hover:text-cyan-400 transition-colors" onClick={closeAllMenus}>
                Contact
              </Link>
              "
              <div className="pt-4 border-t border-gray-700"></div>
                <a"
                  href="tel:+13024640950""
                  className="flex items-center space-x-2 text-cyan-400 hover:text-white transition-colors mb-4"
                >"
                  <Phone className="w-4 h-4" />
                  <span>+1 302 464 0950</span>
                </a>"
                <a href="/contact""
                  className="block cyber-button px-4 py-2 text-center"
                  onClick={closeAllMenus}
                >
                  Get Started
                </a>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
=======
    <div className={`navigation ${className}`}>
      {children}
    </div>
>>>>>>> cursor/fix-errors-and-merge-to-main-54ad
  );
};
;
export default Navigation;"
