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
  Truck,
  Factory
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
              className="absolute top-full left-0 mt-2 w-[1000px] bg-zion-blue-dark border border-zion-purple/30 rounded-xl shadow-2xl shadow-zion-purple/20 z-50 backdrop-blur-sm"
            >
              <div className="p-8">
                <div className="grid grid-cols-4 gap-8">
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
                  
                  {/* Additional AI Services */}
                  <ul className="space-y-3">
                    <li>
                      <Link to="/services/ai-business-intelligence-dashboard" className="group flex items-center justify-between p-3 rounded-lg hover:bg-zion-purple/10 transition-all duration-300">
                        <div className="flex items-center space-x-3">
                          <BarChart3 className="w-4 h-4 text-zion-cyan" />
                          <span className="text-zion-slate-light group-hover:text-white transition-colors">AI BI Dashboard</span>
                        </div>
                        <ArrowRight className="w-4 h-4 text-zion-purple/50 group-hover:text-zion-cyan transition-all duration-300 opacity-0 group-hover:opacity-100 transform translate-x-2 group-hover:translate-x-0" />
                      </Link>
                    </li>
                    <li>
                      <Link to="/services/ai-customer-support-automation" className="group flex items-center justify-between p-3 rounded-lg hover:bg-zion-purple/10 transition-all duration-300">
                        <div className="flex items-center space-x-3">
                          <MessageCircle className="w-4 h-4 text-zion-cyan" />
                          <span className="text-zion-slate-light group-hover:text-white transition-colors">AI Support Automation</span>
                        </div>
                        <ArrowRight className="w-4 h-4 text-zion-purple/50 group-hover:text-zion-cyan transition-all duration-300 opacity-0 group-hover:opacity-100 transform translate-x-2 group-hover:translate-x-0" />
                      </Link>
                    </li>
                    <li>
                      <Link to="/services/ai-project-management-platform" className="group flex items-center justify-between p-3 rounded-lg hover:bg-zion-purple/10 transition-all duration-300">
                        <div className="flex items-center space-x-3">
                          <Workflow className="w-4 h-4 text-zion-cyan" />
                          <span className="text-zion-slate-light group-hover:text-white transition-colors">AI Project Management</span>
                        </div>
                        <ArrowRight className="w-4 h-4 text-zion-purple/50 group-hover:text-zion-cyan transition-all duration-300 opacity-0 group-hover:opacity-100 transform translate-x-2 group-hover:translate-x-0" />
                      </Link>
                    </li>
                    <li>
                      <Link to="/services/ai-marketing-automation-platform" className="group flex items-center justify-between p-3 rounded-lg hover:bg-zion-purple/10 transition-all duration-300">
                        <div className="flex items-center space-x-3">
                          <TrendingUp className="w-4 h-4 text-zion-cyan" />
                          <span className="text-zion-slate-light group-hover:text-white transition-colors">AI Marketing Automation</span>
                        </div>
                        <ArrowRight className="w-4 h-4 text-zion-purple/50 group-hover:text-zion-cyan transition-all duration-300 opacity-0 group-hover:opacity-100 transform translate-x-2 group-hover:translate-x-0" />
                      </Link>
                    </li>
                    <li>
                      <Link to="/services/ai-enterprise-automation-platform" className="group flex items-center justify-between p-3 rounded-lg hover:bg-zion-purple/10 transition-all duration-300">
                        <div className="flex items-center space-x-3">
                          <Brain className="w-4 h-4 text-zion-cyan" />
                          <span className="text-zion-slate-light group-hover:text-white transition-colors">AI Enterprise Automation</span>
                        </div>
                        <ArrowRight className="w-4 h-4 text-zion-purple/50 group-hover:text-zion-cyan transition-all duration-300 opacity-0 group-hover:opacity-100 transform translate-x-2 group-hover:translate-x-0" />
                      </Link>
                    </li>
                    <li>
                      <Link to="/services/ai-autonomous-logistics-platform" className="group flex items-center justify-between p-3 rounded-lg hover:bg-zion-purple/10 transition-all duration-300">
                        <div className="flex items-center space-x-3">
                          <Truck className="w-4 h-4 text-zion-cyan" />
                          <span className="text-zion-slate-light group-hover:text-white transition-colors">AI Autonomous Logistics</span>
                        </div>
                        <ArrowRight className="w-4 h-4 text-zion-purple/50 group-hover:text-zion-cyan transition-all duration-300 opacity-0 group-hover:opacity-100 transform translate-x-2 group-hover:translate-x-0" />
                      </Link>
                    </li>
                    <li>
                      <Link to="/services/ai-space-technology-platform" className="group flex items-center justify-between p-3 rounded-lg hover:bg-zion-purple/10 transition-all duration-300">
                        <div className="flex items-center space-x-3">
                          <Satellite className="w-4 h-4 text-zion-cyan" />
                          <span className="text-zion-slate-light group-hover:text-white transition-colors">AI Space Technology</span>
                        </div>
                        <ArrowRight className="w-4 h-4 text-zion-purple/50 group-hover:text-zion-cyan transition-all duration-300 opacity-0 group-hover:opacity-100 transform translate-x-2 group-hover:translate-x-0" />
                      </Link>
                    </li>
                    <li>
                      <Link to="/services/ai-enterprise-resource-planning" className="group flex items-center justify-between p-3 rounded-lg hover:bg-zion-purple/10 transition-all duration-300">
                        <div className="flex items-center space-x-3">
                          <Database className="w-4 h-4 text-zion-cyan" />
                          <span className="text-zion-slate-light group-hover:text-white transition-colors">AI ERP Platform</span>
                        </div>
                        <ArrowRight className="w-4 h-4 text-zion-purple/50 group-hover:text-zion-cyan transition-all duration-300 opacity-0 group-hover:opacity-100 transform translate-x-2 group-hover:translate-x-0" />
                      </Link>
                    </li>
                    <li>
                      <Link to="/services/ai-quantum-computing-solutions" className="group flex items-center justify-between p-3 rounded-lg hover:bg-zion-purple/10 transition-all duration-300">
                        <div className="flex items-center space-x-3">
                          <Atom className="w-4 h-4 text-zion-cyan" />
                          <span className="text-zion-slate-light group-hover:text-white transition-colors">AI Quantum Computing</span>
                        </div>
                        <ArrowRight className="w-4 h-4 text-zion-purple/50 group-hover:text-zion-cyan transition-all duration-300 opacity-0 group-hover:opacity-100 transform translate-x-2 group-hover:translate-x-0" />
                      </Link>
                    </li>
                    <li>
                      <Link to="/services/ai-autonomous-manufacturing-platform" className="group flex items-center justify-between p-3 rounded-lg hover:bg-zion-purple/10 transition-all duration-300">
                        <div className="flex items-center space-x-3">
                          <Factory className="w-4 h-4 text-zion-cyan" />
                          <span className="text-zion-slate-light group-hover:text-white transition-colors">AI Manufacturing</span>
                        </div>
                        <ArrowRight className="w-4 h-4 text-zion-purple/50 group-hover:text-zion-cyan transition-all duration-300 opacity-0 group-hover:opacity-100 transform translate-x-2 group-hover:translate-x-0" />
                      </Link>
                    </li>
                  </ul>
                </div>

                {/* IT & Infrastructure Column */}
                <div className="space-y-4">
                  <div className="flex items-center space-x-3 pb-3 border-b border-zion-purple/20">
                    <div className="p-2 bg-zion-purple/20 rounded-lg">
                      <Server className="w-5 h-5 text-zion-purple"/>
                    </div>
                    <h4 className="text-zion-purple font-bold text-lg">IT & Infrastructure</h4>
                  </div>
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
                      Micro SaaS & Specialized
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
                  <div>
                    <h4 className="text-zion-cyan font-semibold mb-6 flex items-center text-lg">
                      <Scale className="w-5 h-5 mr-3"/>
                      Legal & Education
                    </h4>
                    <ul className="space-y-4 text-sm">
                      <li>
                        <Link to="/services/ai-autonomous-legal-research-platform" className="text-zion-slate-light hover:text-zion-cyan transition-colors flex items-center group">
                          <Scale className="w-4 h-4 mr-3 group-hover:scale-110 transition-transform" />
                          <span>AI Legal Research Platform</span>
                        </Link>
                      </li>
                      <li>
                        <Link to="/services/ai-educational-content-creation-platform" className="text-zion-slate-light hover:text-zion-cyan transition-colors flex items-center group">
                          <BookOpen className="w-4 h-4 mr-3 group-hover:scale-110 transition-transform" />
                          <span>AI Educational Content</span>
                        </Link>
                      </li>
                      <li>
                        <Link to="/services/ai-real-estate-investment-analytics-platform" className="text-zion-slate-light hover:text-zion-cyan transition-colors flex items-center group">
                          <Home className="w-4 h-4 mr-3 group-hover:scale-110 transition-transform" />
                          <span>AI Real Estate Analytics</span>
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
          </div>
        )}
      </div>

      {/* Company Dropdown */}
      <div className="relative group">
        <button
          onMouseEnter={() => setIsCompanyOpen(true)}
          onMouseLeave={() => setIsCompanyOpen(false)}
          className="flex items-center space-x-1 text-sm font-medium transition-colors hover:text-primary text-muted-foreground"
        >
          <Building2 className="w-4 h-4" />
          <span>Company</span>
          <ChevronDown className="w-3 h-3" />
        </button>
        {isCompanyOpen && (
          <div
            onMouseEnter={() => setIsCompanyOpen(true)}
            onMouseLeave={() => setIsCompanyOpen(false)}
            className="absolute top-full left-0 mt-2 w-64 bg-zion-blue-dark border border-zion-purple/30 rounded-lg shadow-2xl shadow-zion-purple/20 z-50"
          >
            <div className="p-6">
              <ul className="space-y-3 text-sm">
                <li>
                  <Link to="/about" className="text-zion-slate-light hover:text-zion-cyan transition-colors flex items-center">
                    <Users className="w-3 h-3 mr-2" />
                    About Us
                  </Link>
                </li>
                <li>
                  <Link to="/leadership" className="text-zion-slate-light hover:text-zion-cyan transition-colors flex items-center">
                    <Star className="w-3 h-3 mr-2" />
                    Leadership
                  </Link>
                </li>
                <li>
                  <Link to="/careers" className="text-zion-slate-light hover:text-zion-cyan transition-colors flex items-center">
                    <Rocket className="w-3 h-3 mr-2" />
                    Careers
                  </Link>
                </li>
                <li>
                  <Link to="/news" className="text-zion-slate-light hover:text-zion-cyan transition-colors flex items-center">
                    <FileText className="w-3 h-3 mr-2" />
                    News
                  </Link>
                </li>
                <li>
                  <Link to="/events" className="text-zion-slate-light hover:text-zion-cyan transition-colors flex items-center">
                    <Calendar className="w-3 h-3 mr-2" />
                    Events
                  </Link>
                </li>
                <li>
                  <Link to="/partners" className="text-zion-slate-light hover:text-zion-cyan transition-colors flex items-center">
                    <Handshake className="w-3 h-3 mr-2" />
                    Partners
                  </Link>
                </li>
                <li>
                  <Link to="/contact" className="text-zion-slate-light hover:text-zion-cyan transition-colors flex items-center">
                    <Phone className="w-3 h-3 mr-2" />
                    Contact
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
          className="flex items-center space-x-1 text-sm font-medium transition-colors hover:text-primary text-muted-foreground"
        >
          <FileText className="w-4 h-4" />
          <span>Resources</span>
          <ChevronDown className="w-3 h-3" />
        </button>
        {isResourcesOpen && (
          <div
            onMouseEnter={() => setIsResourcesOpen(true)}
            onMouseLeave={() => setIsResourcesOpen(false)}
            className="absolute top-full left-0 mt-2 w-64 bg-zion-blue-dark border border-zion-purple/30 rounded-lg shadow-2xl shadow-zion-purple/20 z-50"
          >
            <div className="p-6">
              <ul className="space-y-3 text-sm">
                <li>
                  <Link to="/blog" className="text-zion-slate-light hover:text-zion-cyan transition-colors flex items-center">
                    <FileText className="w-3 h-3 mr-2" />
                    Blog
                  </Link>
                </li>
                <li>
                  <Link to="/docs" className="text-zion-slate-light hover:text-zion-cyan transition-colors flex items-center">
                    <BookOpen className="w-3 h-3 mr-2" />
                    Documentation
                  </Link>
                </li>
                <li>
                  <Link to="/help" className="text-zion-slate-light hover:text-zion-cyan transition-colors flex items-center">
                    <HelpCircle className="w-3 h-3 mr-2" />
                    Help Center
                  </Link>
                </li>
                <li>
                  <Link to="/white-papers" className="text-zion-slate-light hover:text-zion-cyan transition-colors flex items-center">
                    <FileText className="w-3 h-3 mr-2" />
                    White Papers
                  </Link>
                </li>
                <li>
                  <Link to="/webinars" className="text-zion-slate-light hover:text-zion-cyan transition-colors flex items-center">
                    <Video className="w-3 h-3 mr-2" />
                    Webinars
                  </Link>
                </li>
                <li>
                  <Link to="/training" className="text-zion-slate-light hover:text-zion-cyan transition-colors flex items-center">
                    <GraduationCap className="w-3 h-3 mr-2" />
                    Training
                  </Link>
                </li>
                <li>
                  <Link to="/research-development" className="text-zion-slate-light hover:text-zion-cyan transition-colors flex items-center">
                    <Lightbulb className="w-3 h-3 mr-2" />
                    Research
                  </Link>
                </li>
                <li>
                  <Link to="/case-studies" className="text-zion-slate-light hover:text-zion-cyan transition-colors flex items-center">
                    <FileText className="w-3 h-3 mr-2" />
                    Case Studies
                  </Link>
                </li>
                <li>
                  <Link to="/marketplace" className="text-zion-slate-light hover:text-zion-cyan transition-colors flex items-center">
                    <ShoppingCart className="w-3 h-3 mr-2" />
                    Marketplace
                  </Link>
                </li>
                <li>
                  <Link to="/request-quote" className="text-zion-slate-light hover:text-zion-cyan transition-colors flex items-center">
                    <DollarSign className="w-3 h-3 mr-2" />
                    Request Quote
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        )}
      </div>

      {/* Support */}
      <Link to="/support" className="text-zion-slate-light hover:text-white transition-colors flex items-center">
        <HelpCircle className="w-4 h-4 mr-1" />
        Support
      </Link>

      {/* Pricing */}
      <Link to="/pricing" className="text-zion-slate-light hover:text-white transition-colors flex items-center">
        <BarChart3 className="w-4 h-4 mr-1" />
        Pricing
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
  );
}
  );
}

// Missing icon components
const ShoppingCart = ({ className }: { className?: string }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4m0 0L7 13m0 0l-2.5 5M7 13l2.5 5m6-5v6a2 2 0 01-2 2H9a2 2 0 01-2-2v-6m8 0V9a2 2 0 00-2-2H9a2 2 0 00-2 2v4.01" />
  </svg>
);

const Calendar = ({ className }: { className?: string }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
  </svg>
);

const Handshake = ({ className }: { className?: string }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
  </svg>
);

const BookOpen = ({ className }: { className?: string }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
  </svg>
);

const Video = ({ className }: { className?: string }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
  </svg>
);

const GraduationCap = ({ className }: { className?: string }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5z" />
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
  </svg>
);
