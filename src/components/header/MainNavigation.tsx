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
  Zap as ZapIcon,
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
  Palette as PaletteIcon,
  Menu,
  X,
  ArrowRight,
  Video,
  GraduationCap,
  Handshake,
  ShoppingCart,
  ChevronRight,
  Calendar,
  Award,
  BookOpen,
  Layers,
  Factory,
  HeartHandshake,
  Briefcase,
  PenTool,
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
>>>>>>> b1ff6b8dd0c2bbded9177f8d69b0280f7fb2a968
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
                      <li>
                        <Link to="/services/ai-business-intelligence" className="text-zion-slate-light hover:text-zion-cyan transition-colors flex items-center group">
                          <TrendingUp className="w-4 h-4 mr-3 group-hover:scale-110 transition-transform" />
                          <span>AI Business Intelligence</span>
                        </Link>
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="text-zion-cyan font-semibold mb-6 flex items-center text-lg">
                      <Server className="w-5 h-5 mr-3"/>
                      IT & Infrastructure
                    </h4>
                    <ul className="space-y-4 text-sm">
                      <li>
                        <Link to="/services/quantum-edge-computing-solutions" className="text-zion-slate-light hover:text-zion-cyan transition-colors flex items-center group">
                          <Atom className="w-4 h-4 mr-3 group-hover:scale-110 transition-transform" />
                          <span>Quantum Edge Computing</span>
                        </Link>
                      </li>
                      <li>
                        <Link to="/services/it-infrastructure-management" className="text-zion-slate-light hover:text-zion-cyan transition-colors flex items-center group">
                          <Server className="w-4 h-4 mr-3 group-hover:scale-110 transition-transform" />
                          <span>Infrastructure Management</span>
                        </Link>
                      </li>
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
                        <Link to="/services/digital-transformation" className="text-zion-slate-light hover:text-zion-cyan transition-colors flex items-center group">
                          <Rocket className="w-4 h-4 mr-3 group-hover:scale-110 transition-transform" />
                          <span>Digital Transformation</span>
                        </Link>
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="text-zion-cyan font-semibold mb-6 flex items-center text-lg">
                      <Building2 className="w-5 h-5 mr-3"/>
                      Micro SaaS
                    </h4>
                    <ul className="space-y-4 text-sm">
                      <li>
                        <Link to="/services/micro-saas-solutions-comprehensive" className="text-zion-slate-light hover:text-zion-cyan transition-colors flex items-center group">
                          <Code className="w-4 h-4 mr-3 group-hover:scale-110 transition-transform" />
                          <span>Comprehensive Solutions</span>
                        </Link>
                      </li>
                      <li>
                        <Link to="/services/ai-sales-copilot" className="text-zion-slate-light hover:text-zion-cyan transition-colors flex items-center group">
                          <TrendingUp className="w-4 h-4 mr-3 group-hover:scale-110 transition-transform" />
                          <span>AI Sales Copilot</span>
                        </Link>
                      </li>
                      <li>
                        <Link to="/services/cloud-finops-optimizer" className="text-zion-slate-light hover:text-zion-cyan transition-colors flex items-center group">
                          <DollarSign className="w-4 h-4 mr-3 group-hover:scale-110 transition-transform" />
                          <span>Cloud FinOps Optimizer</span>
                        </Link>
                      </li>
                      <li>
                        <Link to="/services/ai-compliance-assistant" className="text-zion-slate-light hover:text-zion-cyan transition-colors flex items-center group">
                          <Shield className="w-4 h-4 mr-3 group-hover:scale-110 transition-transform" />
                          <span>AI Compliance Assistant</span>
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="mt-8 pt-6 border-t border-zion-purple/30">
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                    <Link 
                      to="/comprehensive-services-showcase-2025" 
                      className="inline-flex items-center text-zion-cyan hover:text-zion-cyan-light transition-colors font-medium"
                    >
                      <span>View All Services</span>
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </Link>
                    <Link to="/innovative-services-showcase-2032" className="text-zion-purple hover:text-zion-purple-light transition-colors text-sm font-medium flex items-center justify-center">
                      Innovation Showcase 2032
                      <Rocket className="w-4 h-4 ml-2"/>
                    </Link>
                    <Link to="/innovative-services-showcase-2026" className="text-zion-purple hover:text-zion-purple-light transition-colors text-sm font-medium flex items-center justify-center">
                      Innovation Showcase 2026
                      <Rocket className="w-4 h-4 ml-2"/>
                    </Link>
                    <Link to="/comprehensive-pricing-guide-2032" className="text-zion-cyan hover:text-zion-cyan-light transition-colors text-sm font-medium flex items-center justify-center">
                      Pricing Guide 2032
                      <DollarSign className="w-4 h-4 ml-2"/>
                    </Link>
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
              className="absolute top-full left-0 mt-2 w-80 bg-zion-blue-dark border border-zion-purple/30 rounded-xl shadow-2xl shadow-zion-purple/20 z-50 backdrop-blur-sm"
            >
              <div className="p-6">
                <h4 className="text-zion-cyan font-semibold mb-4 text-lg">Industry Solutions</h4>
                <ul className="space-y-3 text-sm">
                  <li>
                    <Link to="/solutions/healthcare" className="text-zion-slate-light hover:text-zion-cyan transition-colors flex items-center group">
                      <Activity className="w-4 h-4 mr-3 group-hover:scale-110 transition-transform" />
                      <span>Healthcare</span>
                    </Link>
                  </li>
                  <li>
                    <Link to="/solutions/financial" className="text-zion-slate-light hover:text-zion-cyan transition-colors flex items-center group">
                      <DollarSign className="w-4 h-4 mr-3 group-hover:scale-110 transition-transform" />
                      <span>Financial Services</span>
                    </Link>
                  </li>
                  <li>
                    <Link to="/solutions/manufacturing" className="text-zion-slate-light hover:text-zion-cyan transition-colors flex items-center group">
                      <Cog className="w-4 h-4 mr-3 group-hover:scale-110 transition-transform" />
                      <span>Manufacturing</span>
                    </Link>
                  </li>
                  <li>
                    <Link to="/solutions/retail" className="text-zion-slate-light hover:text-zion-cyan transition-colors flex items-center group">
                      <ShoppingCart className="w-4 h-4 mr-3 group-hover:scale-110 transition-transform" />
                      <span>Retail & E-commerce</span>
                    </Link>
                  </li>
                  <li>
                    <Link to="/solutions/government" className="text-zion-slate-light hover:text-zion-cyan transition-colors flex items-center group">
                      <Building2 className="w-4 h-4 mr-3 group-hover:scale-110 transition-transform" />
                      <span>Government</span>
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
                <ul className="space-y-3 text-sm">
                  <li>
                    <Link to="/about" className="text-zion-slate-light hover:text-zion-cyan transition-colors flex items-center group">
                      <Users className="w-4 h-4 mr-3 group-hover:scale-110 transition-transform" />
                      <span>About Us</span>
                    </Link>
                  </li>
                  <li>
                    <Link to="/leadership" className="text-zion-slate-light hover:text-zion-cyan transition-colors flex items-center group">
                      <Star className="w-4 h-4 mr-3 group-hover:scale-110 transition-transform" />
                      <span>Leadership</span>
                    </Link>
                  </li>
                  <li>
                    <Link to="/careers" className="text-zion-slate-light hover:text-zion-cyan transition-colors flex items-center group">
                      <Rocket className="w-4 h-4 mr-3 group-hover:scale-110 transition-transform" />
                      <span>Careers</span>
                    </Link>
                  </li>
                  <li>
                    <Link to="/news" className="text-zion-slate-light hover:text-zion-cyan transition-colors flex items-center group">
                      <FileText className="w-4 h-4 mr-3 group-hover:scale-110 transition-transform" />
                      <span>News</span>
                    </Link>
                  </li>
                  <li>
                    <Link to="/events" className="text-zion-slate-light hover:text-zion-cyan transition-colors flex items-center group">
                      <Calendar className="w-4 h-4 mr-3 group-hover:scale-110 transition-transform" />
                      <span>Events</span>
                    </Link>
                  </li>
                  <li>
                    <Link to="/partners" className="text-zion-slate-light hover:text-zion-cyan transition-colors flex items-center group">
                      <Handshake className="w-4 h-4 mr-3 group-hover:scale-110 transition-transform" />
                      <span>Partners</span>
                    </Link>
                  </li>
                  <li>
                    <Link to="/contact" className="text-zion-slate-light hover:text-zion-cyan transition-colors flex items-center group">
                      <MessageCircle className="w-4 h-4 mr-3 group-hover:scale-110 transition-transform" />
                      <span>Contact</span>
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
              className="absolute top-full left-0 mt-2 w-80 bg-zion-blue-dark border border-zion-purple/30 rounded-xl shadow-2xl shadow-zion-purple/20 z-50 backdrop-blur-sm"
            >
              <div className="p-6">
                <div className="grid grid-cols-2 gap-6">
                  <div>
                    <h4 className="text-zion-cyan font-semibold mb-4">Learning</h4>
                    <ul className="space-y-3 text-sm">
                      <li>
                        <Link to="/blog" className="text-zion-slate-light hover:text-zion-cyan transition-colors flex items-center group">
                          <FileText className="w-4 h-4 mr-3 group-hover:scale-110 transition-transform" />
                          <span>Blog</span>
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
                    </ul>
                  </div>
                  <div>
                    <h4 className="text-zion-cyan font-semibold mb-4">Documentation</h4>
                    <ul className="space-y-3 text-sm">
                      <li>
                        <Link to="/docs" className="text-zion-slate-light hover:text-zion-cyan transition-colors flex items-center group">
                          <Code className="w-4 h-4 mr-3 group-hover:scale-110 transition-transform" />
                          <span>API Docs</span>
                        </Link>
                      </li>
                      <li>
                        <Link to="/case-studies" className="text-zion-slate-light hover:text-zion-cyan transition-colors flex items-center group">
                          <BarChart className="w-4 h-4 mr-3 group-hover:scale-110 transition-transform" />
                          <span>Case Studies</span>
                        </Link>
                      </li>
                      <li>
                        <Link to="/white-papers" className="text-zion-slate-light hover:text-zion-cyan transition-colors flex items-center group">
                          <FileText className="w-4 h-4 mr-3 group-hover:scale-110 transition-transform" />
                          <span>White Papers</span>
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Pricing Link */}
        <NavLink 
          to="/pricing" 
          className={({ isActive }) => 
            cn("text-sm font-medium transition-colors hover:text-primary px-3 py-2 rounded-md", 
              isActive ? "text-zion-cyan bg-zion-cyan/10" : "text-muted-foreground hover:text-zion-cyan hover:bg-zion-cyan/5"
            )
          }
        >
          Pricing
        </NavLink>

        {/* Support Link */}
        <Link to="/support" className="text-zion-slate-light hover:text-white transition-colors flex items-center px-3 py-2 rounded-md hover:bg-zion-cyan/5">
          <HelpCircle className="w-4 h-4 mr-2" />
          Support
        </Link>

        {/* Get Started Button */}
        <NavLink 
          to="/signup" 
          className={({ isActive }) => 
            cn("text-sm font-medium transition-colors hover:text-primary", 
              isActive ? "text-zion-cyan" : "text-muted-foreground",
              "bg-gradient-to-r from-zion-purple to-zion-purple-dark hover:from-zion-purple-light hover:to-zion-purple text-white px-6 py-2 rounded-lg shadow-lg shadow-zion-purple/25 hover:shadow-xl hover:shadow-zion-purple/40 transition-all duration-300 hover:-translate-y-1"
            )
          }
        >
          Get Started
        </NavLink>
      </nav>

      {/* Mobile Menu Button */}
      <button
        onClick={toggleMobileMenu}
        className="lg:hidden p-2 text-muted-foreground hover:text-zion-cyan transition-colors"
        aria-label="Toggle mobile menu"
      >
        {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
      </button>

      {/* Mobile Navigation */}
      {isMobileMenuOpen && (
        <div className="lg:hidden absolute top-full left-0 right-0 bg-zion-blue-dark border-b border-zion-purple/30 shadow-2xl z-50">
          <div className="p-6 space-y-6">
            {/* Mobile Services Section */}
            <div>
              <h4 className="text-zion-cyan font-semibold mb-4 flex items-center">
                <Zap className="w-5 h-5 mr-3"/>
                Services
              </h4>
              <div className="grid grid-cols-1 gap-3">
                <Link 
                  to="/services/ai-autonomous-business-operations-platform" 
                  className="text-zion-slate-light hover:text-zion-cyan transition-colors flex items-center p-3 rounded-lg hover:bg-zion-cyan/5"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  <Brain className="w-4 h-4 mr-3" />
                  <span>AI Autonomous Business Operations</span>
                </Link>
                <Link 
                  to="/services/ai-customer-experience-analytics-platform" 
                  className="text-zion-slate-light hover:text-zion-cyan transition-colors flex items-center p-3 rounded-lg hover:bg-zion-cyan/5"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  <BarChart3 className="w-4 h-4 mr-3" />
                  <span>AI Customer Experience Analytics</span>
                </Link>
                <Link 
                  to="/services/quantum-edge-computing-solutions" 
                  className="text-zion-slate-light hover:text-zion-cyan transition-colors flex items-center p-3 rounded-lg hover:bg-zion-cyan/5"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  <Atom className="w-4 h-4 mr-3" />
                  <span>Quantum Edge Computing</span>
                </Link>
                <Link 
                  to="/comprehensive-services-showcase-2025" 
                  className="text-zion-cyan hover:text-zion-cyan-light transition-colors flex items-center p-3 rounded-lg hover:bg-zion-cyan/5 font-medium"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  <span>View All Services →</span>
                </Link>
              </div>
            </div>

            {/* Mobile Company Section */}
            <div>
              <h4 className="text-zion-cyan font-semibold mb-4 flex items-center">
                <Building2 className="w-5 h-5 mr-3"/>
                Company
              </h4>
              <div className="space-y-3">
                <Link 
                  to="/about" 
                  className="text-zion-slate-light hover:text-zion-cyan transition-colors flex items-center p-3 rounded-lg hover:bg-zion-cyan/5"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  <Users className="w-4 h-4 mr-3" />
                  <span>About Us</span>
                </Link>
                <Link 
                  to="/contact" 
                  className="text-zion-slate-light hover:text-zion-cyan transition-colors flex items-center p-3 rounded-lg hover:bg-zion-cyan/5"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  <MessageCircle className="w-4 h-4 mr-3" />
                  <span>Contact</span>
                </Link>
                <Link 
                  to="/pricing" 
                  className="text-zion-slate-light hover:text-zion-cyan transition-colors flex items-center p-3 rounded-lg hover:bg-zion-cyan/5"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  <DollarSign className="w-4 h-4 mr-3" />
                  <span>Pricing</span>
                </Link>
              </div>
            </div>

            {/* Mobile Resources Section */}
            <div>
              <h4 className="text-zion-cyan font-semibold mb-4 flex items-center">
                <FileText className="w-5 h-5 mr-3"/>
                Resources
              </h4>
              <div className="space-y-3">
                <Link 
                  to="/blog" 
                  className="text-zion-slate-light hover:text-zion-cyan transition-colors flex items-center p-3 rounded-lg hover:bg-zion-cyan/5"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  <FileText className="w-4 h-4 mr-3" />
                  <span>Blog</span>
                </Link>
                <Link 
                  to="/help" 
                  className="text-zion-slate-light hover:text-zion-cyan transition-colors flex items-center p-3 rounded-lg hover:bg-zion-cyan/5"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  <HelpCircle className="w-4 h-4 mr-3" />
                  <span>Help Center</span>
                </Link>
                <Link 
                  to="/support" 
                  className="text-zion-slate-light hover:text-zion-cyan transition-colors flex items-center p-3 rounded-lg hover:bg-zion-cyan/5"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  <MessageCircle className="w-4 h-4 mr-3" />
                  <span>Support</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
