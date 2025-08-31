import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { cn } from "@/lib/utils";
import { NavLink } from "react-router-dom";
import { 
  ChevronDown, 
  Zap, 
  Brain, 
  Shield, 
  Users, 
  HardDrive, 
  TrendingUp, 
  Building2, 
  FileText, 
  HelpCircle, 
  BarChart3,
  Server,
  Cloud,
  Lock,
  BarChart,
  Cpu,
  Workflow,
  Database,
  Globe,
  Target,
  Rocket,
  Lightbulb,
  Code,
  Monitor,
  Smartphone,
  Network,
  Wifi,
  Activity,
  Eye,
  Search,
  Settings,
  Palette,
  Phone,
  Mail,
  MapPin,
  Clock,
  DollarSign,
  Atom,
  Leaf,
  Gamepad2,
  Coins,
  Satellite,
  MessageCircle,
  Star,
  Users2,
  Cog,
  ShoppingCart,
  Calendar,
  Handshake,
  BookOpen,
  Video,
  GraduationCap,
  PenTool,
  Briefcase,
  Menu,
  X,
  ArrowRight,
  ChevronRight,
  Award,
  Layers,
  Factory,
  HeartHandshake,
  Layout,
  Truck
} from 'lucide-react';

interface MainNavigationProps {
  className?: string;
}

export function MainNavigation({ className }: MainNavigationProps) {
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [isSolutionsOpen, setIsSolutionsOpen] = useState(false);
  const [isCompanyOpen, setIsCompanyOpen] = useState(false);
  const [isResourcesOpen, setIsResourcesOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);

  return (
    <>
      {/* Desktop Navigation */}
      <nav className={cn("hidden lg:flex items-center space-x-8", className)}>
        <NavLink 
          to="/" 
          className={({ isActive }) => 
            cn("text-sm font-medium transition-colors hover:text-primary px-3 py-2 rounded-md", 
              isActive ? "text-zion-cyan bg-zion-cyan/10" : "text-muted-foreground hover:text-zion-cyan hover:bg-zion-cyan/5"
            )
          }
        >
          Home
        </NavLink>
        
        {/* Services Dropdown */}
        <div className="relative group">
          <button 
            onMouseEnter={() => setIsServicesOpen(true)} 
            onMouseLeave={() => setIsServicesOpen(false)} 
            className="flex items-center space-x-2 text-sm font-medium transition-colors hover:text-primary text-muted-foreground px-3 py-2 rounded-md hover:bg-zion-cyan/5"
          >
            <Zap className="w-4 h-4"/>
            <span>Services</span>
            <ChevronDown className="w-3 h-3 transition-transform group-hover:rotate-180"/>
          </button>
          {isServicesOpen && (
            <div 
              onMouseEnter={() => setIsServicesOpen(true)} 
              onMouseLeave={() => setIsServicesOpen(false)} 
              className="absolute top-full left-0 mt-2 w-[800px] bg-zion-blue-dark border border-zion-purple/30 rounded-xl shadow-2xl shadow-zion-purple/20 z-50 backdrop-blur-sm"
            >
              <div className="p-8">
                <div className="grid grid-cols-3 gap-8">
                  {/* AI & Automation Services */}
                  <div>
                    <h4 className="text-zion-cyan font-semibold mb-6 flex items-center text-lg">
                      <Zap className="w-5 h-5 mr-3"/>
                      AI & Automation
                    </h4>
                    <ul className="space-y-4 text-sm">
                      <li>
                        <Link to="/services/ai-autonomous-business-operations-platform" className="text-zion-slate-light hover:text-zion-cyan transition-colors flex items-center group">
                          <Brain className="w-4 h-4 mr-3 group-hover:scale-110 transition-transform" />
                          <span>AI Autonomous Business Operations</span>
                        </Link>
                      </li>
                      <li>
                        <Link to="/services/ai-enterprise-intelligence-platform" className="text-zion-slate-light hover:text-zion-cyan transition-colors flex items-center group">
                          <BarChart3 className="w-4 h-4 mr-3 group-hover:scale-110 transition-transform" />
                          <span>AI Enterprise Intelligence</span>
                        </Link>
                      </li>
                      <li>
                        <Link to="/services/ai-autonomous-logistics-platform" className="text-zion-slate-light hover:text-zion-cyan transition-colors flex items-center group">
                          <Truck className="w-4 h-4 mr-3 group-hover:scale-110 transition-transform" />
                          <span>AI Autonomous Logistics</span>
                        </Link>
                      </li>
                      <li>
                        <Link to="/services/ai-powered-seo" className="text-zion-slate-light hover:text-zion-cyan transition-colors flex items-center group">
                          <Search className="w-4 h-4 mr-3 group-hover:scale-110 transition-transform" />
                          <span>AI-Powered SEO</span>
                        </Link>
                      </li>
                      <li>
                        <Link to="/services/ai-customer-experience-analytics-platform" className="text-zion-slate-light hover:text-zion-cyan transition-colors flex items-center group">
                          <BarChart3 className="w-4 h-4 mr-3 group-hover:scale-110 transition-transform" />
                          <span>AI Customer Experience Analytics</span>
                        </Link>
                      </li>
                      <li>
                        <Link to="/services/ai-project-management-platform" className="text-zion-slate-light hover:text-zion-cyan transition-colors flex items-center group">
                          <Workflow className="w-4 h-4 mr-3 group-hover:scale-110 transition-transform" />
                          <span>AI Project Management</span>
                        </Link>
                      </li>
                      <li>
                        <Link to="/services/ai-enterprise-automation-platform" className="text-zion-slate-light hover:text-zion-cyan transition-colors flex items-center group">
                          <Brain className="w-4 h-4 mr-3 group-hover:scale-110 transition-transform" />
                          <span>AI Enterprise Automation</span>
                        </Link>
                      </li>
                      <li>
                        <Link to="/services/ai-data-analytics-platform" className="text-zion-slate-light hover:text-zion-cyan transition-colors flex items-center group">
                          <BarChart3 className="w-4 h-4 mr-3 group-hover:scale-110 transition-transform" />
                          <span>AI Data Analytics</span>
                        </Link>
                      </li>
                    </ul>
                  </div>

                  {/* IT Infrastructure Services */}
                  <div>
                    <h4 className="text-zion-cyan font-semibold mb-6 flex items-center text-lg">
                      <Server className="w-5 h-5 mr-3"/>
                      IT Infrastructure
                    </h4>
                    <ul className="space-y-4 text-sm">
                      <li>
                        <Link to="/services/cloud-devops" className="text-zion-slate-light hover:text-zion-cyan transition-colors flex items-center group">
                          <Cloud className="w-4 h-4 mr-3 group-hover:scale-110 transition-transform" />
                          <span>Cloud & DevOps</span>
                        </Link>
                      </li>
                      <li>
                        <Link to="/services/cybersecurity" className="text-zion-slate-light hover:text-zion-cyan transition-colors flex items-center group">
                          <Shield className="w-4 h-4 mr-3 group-hover:scale-110 transition-transform" />
                          <span>Cybersecurity</span>
                        </Link>
                      </li>
                      <li>
                        <Link to="/services/it-infrastructure" className="text-zion-slate-light hover:text-zion-cyan transition-colors flex items-center group">
                          <HardDrive className="w-4 h-4 mr-3 group-hover:scale-110 transition-transform" />
                          <span>IT Infrastructure</span>
                        </Link>
                      </li>
                      <li>
                        <Link to="/services/digital-transformation" className="text-zion-slate-light hover:text-zion-cyan transition-colors flex items-center group">
                          <Rocket className="w-4 h-4 mr-3 group-hover:scale-110 transition-transform" />
                          <span>Digital Transformation</span>
                        </Link>
                      </li>
                      <li>
                        <Link to="/services/quantum-edge-computing-solutions" className="text-zion-slate-light hover:text-zion-cyan transition-colors flex items-center group">
                          <Atom className="w-4 h-4 mr-3 group-hover:scale-110 transition-transform" />
                          <span>Quantum Edge Computing</span>
                        </Link>
                      </li>
                    </ul>
                  </div>

                  {/* Micro SAAS Services */}
                  <div>
                    <h4 className="text-zion-cyan font-semibold mb-6 flex items-center text-lg">
                      <Building2 className="w-5 h-5 mr-3"/>
                      Micro SAAS
                    </h4>
                    <ul className="space-y-4 text-sm">
                      <li>
                        <Link to="/services/micro-saas-solutions" className="text-zion-slate-light hover:text-zion-cyan transition-colors flex items-center group">
                          <Code className="w-4 h-4 mr-3 group-hover:scale-110 transition-transform" />
                          <span>Micro SAAS Solutions</span>
                        </Link>
                      </li>
                      <li>
                        <Link to="/services/ai-content-creation-studio" className="text-zion-slate-light hover:text-zion-cyan transition-colors flex items-center group">
                          <PenTool className="w-4 h-4 mr-3 group-hover:scale-110 transition-transform" />
                          <span>AI Content Creation</span>
                        </Link>
                      </li>
                      <li>
                        <Link to="/services/ai-cybersecurity-suite" className="text-zion-slate-light hover:text-zion-cyan transition-colors flex items-center group">
                          <Lock className="w-4 h-4 mr-3 group-hover:scale-110 transition-transform" />
                          <span>AI Cybersecurity Suite</span>
                        </Link>
                      </li>
                      <li>
                        <Link to="/services/ai-enterprise-orchestrator" className="text-zion-slate-light hover:text-zion-cyan transition-colors flex items-center group">
                          <Workflow className="w-4 h-4 mr-3 group-hover:scale-110 transition-transform" />
                          <span>AI Enterprise Orchestrator</span>
                        </Link>
                      </li>
                      <li>
                        <Link to="/services/ai-hr-management-platform" className="text-zion-slate-light hover:text-zion-cyan transition-colors flex items-center group">
                          <Users className="w-4 h-4 mr-3 group-hover:scale-110 transition-transform" />
                          <span>AI HR Management</span>
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Solutions Dropdown */}
        <div className="relative group">
          <button 
            onMouseEnter={() => setIsSolutionsOpen(true)} 
            onMouseLeave={() => setIsSolutionsOpen(false)} 
            className="flex items-center space-x-2 text-sm font-medium transition-colors hover:text-primary text-muted-foreground px-3 py-2 rounded-md hover:bg-zion-cyan/5"
          >
            <Target className="w-4 h-4"/>
            <span>Solutions</span>
            <ChevronDown className="w-3 h-3 transition-transform group-hover:rotate-180"/>
          </button>
          {isSolutionsOpen && (
            <div 
              onMouseEnter={() => setIsSolutionsOpen(true)} 
              onMouseLeave={() => setIsSolutionsOpen(false)} 
              className="absolute top-full left-0 mt-2 w-96 bg-zion-blue-dark border border-zion-purple/30 rounded-xl shadow-2xl shadow-zion-purple/20 z-50 backdrop-blur-sm"
            >
              <div className="p-6">
                <ul className="space-y-4 text-sm">
                  <li>
                    <Link to="/solutions/healthcare" className="text-zion-slate-light hover:text-zion-cyan transition-colors flex items-center group">
                      <HeartHandshake className="w-4 h-4 mr-3 group-hover:scale-110 transition-transform" />
                      <span>Healthcare Solutions</span>
                    </Link>
                  </li>
                  <li>
                    <Link to="/solutions/financial" className="text-zion-slate-light hover:text-zion-cyan transition-colors flex items-center group">
                      <DollarSign className="w-4 h-4 mr-3 group-hover:scale-110 transition-transform" />
                      <span>Financial Solutions</span>
                    </Link>
                  </li>
                  <li>
                    <Link to="/solutions/manufacturing" className="text-zion-slate-light hover:text-zion-cyan transition-colors flex items-center group">
                      <Factory className="w-4 h-4 mr-3 group-hover:scale-110 transition-transform" />
                      <span>Manufacturing Solutions</span>
                    </Link>
                  </li>
                  <li>
                    <Link to="/solutions/government" className="text-zion-slate-light hover:text-zion-cyan transition-colors flex items-center group">
                      <Building2 className="w-4 h-4 mr-3 group-hover:scale-110 transition-transform" />
                      <span>Government Solutions</span>
                    </Link>
                  </li>
                  <li>
                    <Link to="/solutions/retail" className="text-zion-slate-light hover:text-zion-cyan transition-colors flex items-center group">
                      <ShoppingCart className="w-4 h-4 mr-3 group-hover:scale-110 transition-transform" />
                      <span>Retail Solutions</span>
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          )}
        </div>

        {/* Company Dropdown */}
        <div className="relative group">
          <button 
            onMouseEnter={() => setIsCompanyOpen(true)} 
            onMouseLeave={() => setIsCompanyOpen(false)} 
            className="flex items-center space-x-2 text-sm font-medium transition-colors hover:text-primary text-muted-foreground px-3 py-2 rounded-md hover:bg-zion-cyan/5"
          >
            <Building2 className="w-4 h-4"/>
            <span>Company</span>
            <ChevronDown className="w-3 h-3 transition-transform group-hover:rotate-180"/>
          </button>
          {isCompanyOpen && (
            <div 
              onMouseEnter={() => setIsCompanyOpen(true)} 
              onMouseLeave={() => setIsCompanyOpen(false)} 
              className="absolute top-full left-0 mt-2 w-64 bg-zion-blue-dark border border-zion-purple/30 rounded-xl shadow-2xl shadow-zion-purple/20 z-50 backdrop-blur-sm"
            >
              <div className="p-6">
                <ul className="space-y-4 text-sm">
                  <li>
                    <Link to="/about" className="text-zion-slate-light hover:text-zion-cyan transition-colors flex items-center group">
                      <Users className="w-4 h-4 mr-3 group-hover:scale-110 transition-transform" />
                      <span>About Us</span>
                    </Link>
                  </li>
                  <li>
                    <Link to="/contact" className="text-zion-slate-light hover:text-zion-cyan transition-colors flex items-center group">
                      <Mail className="w-4 h-4 mr-3 group-hover:scale-110 transition-transform" />
                      <span>Contact</span>
                    </Link>
                  </li>
                  <li>
                    <Link to="/partners" className="text-zion-slate-light hover:text-zion-cyan transition-colors flex items-center group">
                      <Handshake className="w-4 h-4 mr-3 group-hover:scale-110 transition-transform" />
                      <span>Partners</span>
                    </Link>
                  </li>
                  <li>
                    <Link to="/careers" className="text-zion-slate-light hover:text-zion-cyan transition-colors flex items-center group">
                      <Briefcase className="w-4 h-4 mr-3 group-hover:scale-110 transition-transform" />
                      <span>Careers</span>
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          )}
        </div>

        {/* Resources Dropdown */}
        <div className="relative group">
          <button 
            onMouseEnter={() => setIsResourcesOpen(true)} 
            onMouseLeave={() => setIsResourcesOpen(false)} 
            className="flex items-center space-x-2 text-sm font-medium transition-colors hover:text-primary text-muted-foreground px-3 py-2 rounded-md hover:bg-zion-cyan/5"
          >
            <FileText className="w-4 h-4"/>
            <span>Resources</span>
            <ChevronDown className="w-3 h-3 transition-transform group-hover:rotate-180"/>
          </button>
          {isResourcesOpen && (
            <div 
              onMouseEnter={() => setIsResourcesOpen(true)} 
              onMouseLeave={() => setIsResourcesOpen(false)} 
              className="absolute top-full left-0 mt-2 w-64 bg-zion-blue-dark border border-zion-purple/30 rounded-xl shadow-2xl shadow-zion-purple/20 z-50 backdrop-blur-sm"
            >
              <div className="p-6">
                <ul className="space-y-4 text-sm">
                  <li>
                    <Link to="/blog" className="text-zion-slate-light hover:text-zion-cyan transition-colors flex items-center group">
                      <BookOpen className="w-4 h-4 mr-3 group-hover:scale-110 transition-transform" />
                      <span>Blog</span>
                    </Link>
                  </li>
                  <li>
                    <Link to="/documentation" className="text-zion-slate-light hover:text-zion-cyan transition-colors flex items-center group">
                      <FileText className="w-4 h-4 mr-3 group-hover:scale-110 transition-transform" />
                      <span>Documentation</span>
                    </Link>
                  </li>
                  <li>
                    <Link to="/webinars" className="text-zion-slate-light hover:text-zion-cyan transition-colors flex items-center group">
                      <Video className="w-4 h-4 mr-3 group-hover:scale-110 transition-transform" />
                      <span>Webinars</span>
                    </Link>
                  </li>
                  <li>
                    <Link to="/training" className="text-zion-slate-light hover:text-zion-cyan transition-colors flex items-center group">
                      <GraduationCap className="w-4 h-4 mr-3 group-hover:scale-110 transition-transform" />
                      <span>Training</span>
                    </Link>
                  </li>
                  <li>
                    <Link to="/support" className="text-zion-slate-light hover:text-zion-cyan transition-colors flex items-center group">
                      <HelpCircle className="w-4 h-4 mr-3 group-hover:scale-110 transition-transform" />
                      <span>Support</span>
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          )}
        </div>

        {/* Contact Info */}
        <div className="flex items-center space-x-4">
          <a 
            href="tel:+13024640950" 
            className="flex items-center space-x-2 text-sm text-zion-cyan hover:text-zion-cyan-light transition-colors"
          >
            <Phone className="w-4 h-4" />
            <span>+1 302 464 0950</span>
          </a>
          <a 
            href="mailto:kleber@ziontechgroup.com" 
            className="flex items-center space-x-2 text-sm text-zion-cyan hover:text-zion-cyan-light transition-colors"
          >
            <Mail className="w-4 h-4" />
            <span>kleber@ziontechgroup.com</span>
          </a>
        </div>

        {/* Get Started Button */}
        <NavLink 
          to="/contact" 
          className={({ isActive }) => 
            cn(
              "text-sm font-medium transition-all duration-300 hover:-translate-y-1",
              isActive ? "text-zion-cyan" : "text-muted-foreground",
              "bg-gradient-to-r from-zion-purple to-zion-purple-dark hover:from-zion-purple-light hover:to-zion-purple text-white px-6 py-2 rounded-lg shadow-lg shadow-zion-purple/25 hover:shadow-xl hover:shadow-zion-purple/40 transition-all duration-300 hover:-translate-y-1"
            )
          }
        >
          Get Started
        </NavLink>
      </nav>
      
      {/* Mobile Menu */}
      <div className="lg:hidden">
        <button
          onClick={toggleMobileMenu}
          className="p-2 rounded-md text-muted-foreground hover:text-zion-cyan hover:bg-zion-cyan/5"
        >
          {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
        
        {isMobileMenuOpen && (
          <div className="absolute top-full left-0 right-0 mt-2 bg-zion-blue-dark border border-zion-purple/30 rounded-xl shadow-2xl shadow-zion-purple/20 z-50 backdrop-blur-sm">
            <div className="p-6 space-y-4">
              <NavLink 
                to="/" 
                className={({ isActive }) => 
                  cn("block text-sm font-medium transition-colors px-3 py-2 rounded-md", 
                    isActive ? "text-zion-cyan bg-zion-cyan/10" : "text-muted-foreground hover:text-zion-cyan hover:bg-zion-cyan/5"
                  )
                }
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Home
              </NavLink>
              
              {/* Mobile Services Menu */}
              <div>
                <button 
                  onClick={() => setIsServicesOpen(!isServicesOpen)} 
                  className="flex items-center justify-between w-full text-sm font-medium transition-colors hover:text-primary text-muted-foreground px-3 py-2 rounded-md hover:bg-zion-cyan/5"
                >
                  <span className="flex items-center">
                    <Zap className="w-4 h-4 mr-2"/>
                    Services
                  </span>
                  <ChevronRight className={cn("w-4 h-4 transition-transform", isServicesOpen ? "rotate-90" : "")} />
                </button>
                
                {isServicesOpen && (
                  <div className="ml-4 mt-2 space-y-2">
                    <Link to="/services/ai-autonomous-business-operations-platform" className="block text-sm text-zion-slate-light hover:text-zion-cyan transition-colors px-3 py-2 rounded-md hover:bg-zion-cyan/5">
                      AI Autonomous Business Operations
                    </Link>
                    <Link to="/services/ai-enterprise-intelligence-platform" className="block text-sm text-zion-slate-light hover:text-zion-cyan transition-colors px-3 py-2 rounded-md hover:bg-zion-cyan/5">
                      AI Enterprise Intelligence
                    </Link>
                    <Link to="/services/ai-autonomous-logistics-platform" className="block text-sm text-zion-slate-light hover:text-zion-cyan transition-colors px-3 py-2 rounded-md hover:bg-zion-cyan/5">
                      AI Autonomous Logistics
                    </Link>
                    <Link to="/services/ai-powered-seo" className="block text-sm text-zion-slate-light hover:text-zion-cyan transition-colors px-3 py-2 rounded-md hover:bg-zion-cyan/5">
                      AI-Powered SEO
                    </Link>
                    <Link to="/services/ai-customer-experience-analytics-platform" className="block text-sm text-zion-slate-light hover:text-zion-cyan transition-colors px-3 py-2 rounded-md hover:bg-zion-cyan/5">
                      AI Customer Experience Analytics
                    </Link>
                    <Link to="/services/ai-project-management-platform" className="block text-sm text-zion-slate-light hover:text-zion-cyan transition-colors px-3 py-2 rounded-md hover:bg-zion-cyan/5">
                      AI Project Management
                    </Link>
                    <Link to="/services/ai-enterprise-automation-platform" className="block text-sm text-zion-slate-light hover:text-zion-cyan transition-colors px-3 py-2 rounded-md hover:bg-zion-cyan/5">
                      AI Enterprise Automation
                    </Link>
                    <Link to="/services/ai-data-analytics-platform" className="block text-sm text-zion-slate-light hover:text-zion-cyan transition-colors px-3 py-2 rounded-md hover:bg-zion-cyan/5">
                      AI Data Analytics
                    </Link>
                  </div>
                )}
              </div>

              {/* Mobile Solutions Menu */}
              <div>
                <button 
                  onClick={() => setIsSolutionsOpen(!isSolutionsOpen)} 
                  className="flex items-center justify-between w-full text-sm font-medium transition-colors hover:text-primary text-muted-foreground px-3 py-2 rounded-md hover:bg-zion-cyan/5"
                >
                  <span className="flex items-center">
                    <Target className="w-4 h-4 mr-2"/>
                    Solutions
                  </span>
                  <ChevronRight className={cn("w-4 h-4 transition-transform", isSolutionsOpen ? "rotate-90" : "")} />
                </button>
                
                {isSolutionsOpen && (
                  <div className="ml-4 mt-2 space-y-2">
                    <Link to="/solutions/healthcare" className="block text-sm text-zion-slate-light hover:text-zion-cyan transition-colors px-3 py-2 rounded-md hover:bg-zion-cyan/5">
                      Healthcare Solutions
                    </Link>
                    <Link to="/solutions/financial" className="block text-sm text-zion-slate-light hover:text-zion-cyan transition-colors px-3 py-2 rounded-md hover:bg-zion-cyan/5">
                      Financial Solutions
                    </Link>
                    <Link to="/solutions/manufacturing" className="block text-sm text-zion-slate-light hover:text-zion-cyan transition-colors px-3 py-2 rounded-md hover:bg-zion-cyan/5">
                      Manufacturing Solutions
                    </Link>
                    <Link to="/solutions/government" className="block text-sm text-zion-slate-light hover:text-zion-cyan transition-colors px-3 py-2 rounded-md hover:bg-zion-cyan/5">
                      Government Solutions
                    </Link>
                    <Link to="/solutions/retail" className="block text-sm text-zion-slate-light hover:text-zion-cyan transition-colors px-3 py-2 rounded-md hover:bg-zion-cyan/5">
                      Retail Solutions
                    </Link>
                  </div>
                )}
              </div>

              {/* Mobile Company Menu */}
              <div>
                <button 
                  onClick={() => setIsCompanyOpen(!isCompanyOpen)} 
                  className="flex items-center justify-between w-full text-sm font-medium transition-colors hover:text-primary text-muted-foreground px-3 py-2 rounded-md hover:bg-zion-cyan/5"
                >
                  <span className="flex items-center">
                    <Building2 className="w-4 h-4 mr-2"/>
                    Company
                  </span>
                  <ChevronRight className={cn("w-4 h-4 transition-transform", isCompanyOpen ? "rotate-90" : "")} />
                </button>
                
                {isCompanyOpen && (
                  <div className="ml-4 mt-2 space-y-2">
                    <Link to="/about" className="block text-sm text-zion-slate-light hover:text-zion-cyan transition-colors px-3 py-2 rounded-md hover:bg-zion-cyan/5">
                      About Us
                    </Link>
                    <Link to="/contact" className="block text-sm text-zion-slate-light hover:text-zion-cyan transition-colors px-3 py-2 rounded-md hover:bg-zion-cyan/5">
                      Contact
                    </Link>
                    <Link to="/partners" className="block text-sm text-zion-slate-light hover:text-zion-cyan transition-colors px-3 py-2 rounded-md hover:bg-zion-cyan/5">
                      Partners
                    </Link>
                    <Link to="/careers" className="block text-sm text-zion-slate-light hover:text-zion-cyan transition-colors px-3 py-2 rounded-md hover:bg-zion-cyan/5">
                      Careers
                    </Link>
                  </div>
                )}
              </div>

              {/* Mobile Resources Menu */}
              <div>
                <button 
                  onClick={() => setIsResourcesOpen(!isResourcesOpen)} 
                  className="flex items-center justify-between w-full text-sm font-medium transition-colors hover:text-primary text-muted-foreground px-3 py-2 rounded-md hover:bg-zion-cyan/5"
                >
                  <span className="flex items-center">
                    <FileText className="w-4 h-4 mr-2"/>
                    Resources
                  </span>
                  <ChevronRight className={cn("w-4 h-4 transition-transform", isResourcesOpen ? "rotate-90" : "")} />
                </button>
                
                {isResourcesOpen && (
                  <div className="ml-4 mt-2 space-y-2">
                    <Link to="/blog" className="block text-sm text-zion-slate-light hover:text-zion-cyan transition-colors px-3 py-2 rounded-md hover:bg-zion-cyan/5">
                      Blog
                    </Link>
                    <Link to="/documentation" className="block text-sm text-zion-slate-light hover:text-zion-cyan transition-colors px-3 py-2 rounded-md hover:bg-zion-cyan/5">
                      Documentation
                    </Link>
                    <Link to="/webinars" className="block text-sm text-zion-slate-light hover:text-zion-cyan transition-colors px-3 py-2 rounded-md hover:bg-zion-cyan/5">
                      Webinars
                    </Link>
                    <Link to="/training" className="block text-sm text-zion-slate-light hover:text-zion-cyan transition-colors px-3 py-2 rounded-md hover:bg-zion-cyan/5">
                      Training
                    </Link>
                    <Link to="/support" className="block text-sm text-zion-slate-light hover:text-zion-cyan transition-colors px-3 py-2 rounded-md hover:bg-zion-cyan/5">
                      Support
                    </Link>
                  </div>
                )}
              </div>

              {/* Mobile Contact Info */}
              <div className="pt-4 border-t border-zion-purple/20">
                <div className="space-y-3">
                  <a 
                    href="tel:+13024640950" 
                    className="flex items-center space-x-3 text-sm text-zion-cyan hover:text-zion-cyan-light transition-colors"
                  >
                    <Phone className="w-4 h-4" />
                    <span>+1 302 464 0950</span>
                  </a>
                  <a 
                    href="mailto:kleber@ziontechgroup.com" 
                    className="flex items-center space-x-3 text-sm text-zion-cyan hover:text-zion-cyan-light transition-colors"
                  >
                    <Mail className="w-4 h-4" />
                    <span>kleber@ziontechgroup.com</span>
                  </a>
                </div>
              </div>

              {/* Mobile Get Started Button */}
              <div className="pt-4">
                <Link 
                  to="/contact" 
                  className="block w-full text-center bg-gradient-to-r from-zion-purple to-zion-purple-dark hover:from-zion-purple-light hover:to-zion-purple text-white px-6 py-3 rounded-lg shadow-lg shadow-zion-purple/25 hover:shadow-xl hover:shadow-zion-purple/40 transition-all duration-300"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Get Started
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
}


