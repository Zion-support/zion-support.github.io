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
  Heart,
  Scale,
  Home,
  BookOpen,
  Edit3,
  TrendingDown
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
            className="flex items-center space-x-1 text-sm font-medium transition-colors hover:text-primary text-muted-foreground"
          >
            <Zap className="w-4 h-4" />
            <span>Services</span>
            <ChevronDown className="w-3 h-3" />
          </button>
          {isServicesOpen && (
            <div
              onMouseEnter={() => setIsServicesOpen(true)}
              onMouseLeave={() => setIsServicesOpen(false)}
              className="absolute top-full left-0 mt-2 w-[1000px] bg-zion-blue-dark border border-zion-purple/30 rounded-lg shadow-2xl shadow-zion-purple/20 z-50"
            >
              <div className="p-6">
                <div className="grid grid-cols-4 gap-8">
                  {/* AI & Automation Column */}
                  <div className="space-y-4">
                    <div className="flex items-center space-x-3 pb-3 border-b border-zion-purple/20">
                      <div className="p-2 bg-zion-cyan/20 rounded-lg">
                        <Brain className="w-5 h-5 text-zion-cyan"/>
                      </div>
                      <h4 className="text-zion-cyan font-bold text-lg">AI & Automation</h4>
                    </div>
                    <ul className="space-y-3">
                      <li>
                        <Link to="/services/ai-autonomous-business-manager" className="text-zion-slate-light hover:text-zion-cyan transition-colors flex items-center">
                          <Brain className="w-3 h-3 mr-2" />
                          AI Autonomous Business Manager
                        </Link>
                      </li>
                      <li>
                        <Link to="/services/ai-business-intelligence" className="text-zion-slate-light hover:text-zion-cyan transition-colors flex items-center">
                          <TrendingUp className="w-3 h-3 mr-2" />
                          AI Business Intelligence
                        </Link>
                      </li>
                      <li>
                        <Link to="/services/ai-enterprise-resource-planning" className="text-zion-slate-light hover:text-zion-cyan transition-colors flex items-center group">
                          <Database className="w-4 h-4 mr-3 group-hover:scale-110 transition-transform" />
                          <span>AI Enterprise Resource Planning</span>
                        </Link>
                      </li>
                      <li>
                        <Link to="/services/ai-autonomous-manufacturing-platform" className="text-zion-slate-light hover:text-zion-cyan transition-colors flex items-center group">
                          <Cpu className="w-4 h-4 mr-3 group-hover:scale-110 transition-transform" />
                          <span>AI Autonomous Manufacturing</span>
                        </Link>
                      </li>
                      <li>
                        <Link to="/services/ai-autonomous-logistics-platform" className="text-zion-slate-light hover:text-zion-cyan transition-colors flex items-center group">
                          <Truck className="w-4 h-4 mr-3 group-hover:scale-110 transition-transform" />
                          <span>AI Autonomous Logistics</span>
                        </Link>
                      </li>
                      <li>
                        <Link to="/services/ai-business-intelligence" className="text-zion-slate-light hover:text-zion-cyan transition-colors flex items-center group">
                          <TrendingUp className="w-4 h-4 mr-3 group-hover:scale-110 transition-transform" />
                          <span>AI Business Intelligence</span>
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
                        <Link to="/services/ai-content-optimizer-pro" className="text-zion-slate-light hover:text-zion-cyan transition-colors flex items-center group">
                          <Edit3 className="w-4 h-4 mr-3 group-hover:scale-110 transition-transform" />
                          <span>AI Content Optimizer Pro</span>
                        </Link>
                      </li>
                      <li>
                        <Link to="/services/ai-powered-customer-churn-predictor" className="text-zion-slate-light hover:text-zion-cyan transition-colors flex items-center group">
                          <TrendingDown className="w-4 h-4 mr-3 group-hover:scale-110 transition-transform" />
                          <span>AI Customer Churn Predictor</span>
                        </Link>
                      </li>
                      <li>
                        <Link to="/services/ai-iot-edge-computing-platform" className="text-zion-slate-light hover:text-zion-cyan transition-colors flex items-center group">
                          <Cpu className="w-4 h-4 mr-3 group-hover:scale-110 transition-transform" />
                          <span>AI IoT Edge Computing</span>
                        </Link>
                      </li>
                      <li>
                        <Link to="/services/ai-autonomous-financial-advisor-platform" className="text-zion-slate-light hover:text-zion-cyan transition-colors flex items-center group">
                          <DollarSign className="w-4 h-4 mr-3 group-hover:scale-110 transition-transform" />
                          <span>AI Financial Advisor</span>
                        </Link>
                      </li>
                      <li>
                        <Link to="/services/ai-autonomous-supply-chain-intelligence" className="text-zion-slate-light hover:text-zion-cyan transition-colors flex items-center group">
                          <BarChart3 className="w-4 h-4 mr-3 group-hover:scale-110 transition-transform" />
                          <span>AI Supply Chain Intelligence</span>
                        </Link>
                      </li>
                      <li>
                        <Link to="/services/ai-quantum-neural-network-platform" className="text-zion-slate-light hover:text-zion-cyan transition-colors flex items-center group">
                          <Atom className="w-4 h-4 mr-3 group-hover:scale-110 transition-transform" />
                          <span>AI Quantum Neural Network</span>
                        </Link>
                      </li>
                      <li>
                        <Link to="/services/quantum-edge-computing-solutions" className="text-zion-slate-light hover:text-zion-cyan transition-colors flex items-center group">
                          <Cpu className="w-4 h-4 mr-3 group-hover:scale-110 transition-transform" />
                          <span>Quantum Edge Computing Solutions</span>
                        </Link>
                      </li>
                      <li>
                        <Link to="/services/ai-space-technology-platform" className="text-zion-slate-light hover:text-zion-cyan transition-colors flex items-center group">
                          <Satellite className="w-4 h-4 mr-3 group-hover:scale-110 transition-transform" />
                          <span>AI Space Technology</span>
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

                  {/* IT & Infrastructure Column */}
                  <div className="space-y-4">
                    <div className="flex items-center space-x-3 pb-3 border-b border-zion-purple/20">
                      <div className="p-2 bg-zion-purple/20 rounded-lg">
                        <Server className="w-5 h-5 text-zion-purple"/>
                      </div>
                      <h4 className="text-zion-purple font-bold text-lg">IT & Infrastructure</h4>
                    </div>
                    <ul className="space-y-3">
                      <li>
                        <Link to="/services/cloud-devops" className="text-zion-slate-light hover:text-zion-cyan transition-colors flex items-center">
                          <Cloud className="w-3 h-3 mr-2" />
                          Cloud & DevOps
                        </Link>
                      </li>
                      <li>
                        <Link to="/services/cybersecurity" className="text-zion-slate-light hover:text-zion-cyan transition-colors flex items-center">
                          <Shield className="w-3 h-3 mr-2" />
                          Cybersecurity
                        </Link>
                      </li>
                      <li>
                        <Link to="/services/ai-autonomous-cybersecurity-intelligence" className="text-zion-slate-light hover:text-zion-cyan transition-colors flex items-center">
                          <Brain className="w-3 h-3 mr-2" />
                          AI Cybersecurity Intelligence
                        </Link>
                      </li>
                    </ul>
                  </div>

                  {/* Micro SaaS & Specialized Column */}
                  <div className="space-y-4">
                    <div className="flex items-center space-x-3 pb-3 border-b border-zion-purple/20">
                      <div className="p-2 bg-zion-blue/20 rounded-lg">
                        <Building2 className="w-5 h-5 text-zion-blue"/>
                      </div>
                      <h4 className="text-zion-blue font-bold text-lg">Micro SaaS & Specialized</h4>
                    </div>
                    <ul className="space-y-3">
                      <li>
                        <Link to="/services/micro-saas-solutions" className="text-zion-slate-light hover:text-zion-cyan transition-colors flex items-center">
                          <Code className="w-3 h-3 mr-2" />
                          Micro SaaS Solutions
                        </Link>
                      </li>
                      <li>
                        <Link to="/services/blockchain" className="text-zion-slate-light hover:text-zion-cyan transition-colors flex items-center">
                          <Atom className="w-3 h-3 mr-2" />
                          Blockchain Solutions
                        </Link>
                      </li>
                    </ul>
                  </div>

                  {/* Legal & Education Column */}
                  <div className="space-y-4">
                    <div className="flex items-center space-x-3 pb-3 border-b border-zion-purple/20">
                      <div className="p-2 bg-zion-green/20 rounded-lg">
                        <GraduationCap className="w-5 h-5 text-zion-green"/>
                      </div>
                      <h4 className="text-zion-green font-bold text-lg">Legal & Education</h4>
                    </div>
                    <ul className="space-y-3">
                      <li>
                        <Link to="/services/ai-autonomous-legal-research-platform" className="text-zion-slate-light hover:text-zion-cyan transition-colors flex items-center">
                          <FileText className="w-3 h-3 mr-2" />
                          AI Legal Research Platform
                        </Link>
                      </li>
                      <li>
                        <Link to="/services/ai-educational-content-creation-platform" className="text-zion-slate-light hover:text-zion-cyan transition-colors flex items-center">
                          <GraduationCap className="w-3 h-3 mr-2" />
                          AI Educational Content
                        </Link>
                      </li>
                      <li>
                        <Link to="/services/ai-real-estate-investment-analytics-platform" className="text-zion-slate-light hover:text-zion-cyan transition-colors flex items-center">
                          <BarChart3 className="w-3 h-3 mr-2" />
                          AI Real Estate Analytics
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
                    <Link to="/comprehensive-pricing-guide-2032" className="text-zion-cyan hover:text-zion-cyan-light transition-colors text-sm font-medium flex items-center justify-center">
                      Comprehensive Pricing Guide 2032
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
            className="flex items-center space-x-1 text-sm font-medium transition-colors hover:text-primary text-muted-foreground"
          >
            <Target className="w-4 h-4" />
            <span>Solutions</span>
            <ChevronDown className="w-3 h-3" />
          </button>
          {isSolutionsOpen && (
            <div
              onMouseEnter={() => setIsSolutionsOpen(true)}
              onMouseLeave={() => setIsSolutionsOpen(false)}
              className="absolute top-full left-0 mt-2 w-80 bg-zion-blue-dark border border-zion-purple/30 rounded-lg shadow-2xl shadow-zion-purple/20 z-50"
            >
              <div className="p-6">
                <div className="space-y-4">
                  <div className="flex items-center space-x-3 pb-3 border-b border-zion-purple/20">
                    <div className="p-2 bg-zion-cyan/20 rounded-lg">
                      <Target className="w-5 h-5 text-zion-cyan"/>
                    </div>
                    <h4 className="text-zion-cyan font-bold text-lg">Industry Solutions</h4>
                  </div>
                  <ul className="space-y-3">
                    <li>
                      <Link to="/solutions/enterprise" className="group flex items-center justify-between p-3 rounded-lg hover:bg-zion-purple/10 transition-all duration-300">
                        <div className="flex items-center space-x-3">
                          <Building2 className="w-4 h-4 text-zion-cyan" />
                          <span className="text-zion-slate-light group-hover:text-white transition-colors">Enterprise</span>
                        </div>
                        <ArrowRight className="w-4 h-4 text-zion-purple/50 group-hover:text-zion-cyan transition-all duration-300 opacity-0 group-hover:opacity-100 transform translate-x-2 group-hover:translate-x-0" />
                      </Link>
                    </li>
                    <li>
                      <Link to="/solutions/healthcare" className="group flex items-center justify-between p-3 rounded-lg hover:bg-zion-purple/10 transition-all duration-300">
                        <div className="flex items-center space-x-3">
                          <Heart className="w-4 h-4 text-zion-cyan" />
                          <span className="text-zion-slate-light group-hover:text-white transition-colors">Healthcare</span>
                        </div>
                        <ArrowRight className="w-4 h-4 text-zion-purple/50 group-hover:text-zion-cyan transition-all duration-300 opacity-0 group-hover:opacity-100 transform translate-x-2 group-hover:translate-x-0" />
                      </Link>
                    </li>
                  </ul>
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
                <div className="space-y-4">
                  <div className="flex items-center space-x-3 pb-3 border-b border-zion-purple/20">
                    <div className="p-2 bg-zion-cyan/20 rounded-lg">
                      <Building2 className="w-5 h-5 text-zion-cyan"/>
                    </div>
                    <h4 className="text-zion-cyan font-bold text-lg">About Zion Tech</h4>
                  </div>
                  <ul className="space-y-3">
                    <li>
                      <Link to="/about" className="group flex items-center justify-between p-3 rounded-lg hover:bg-zion-purple/10 transition-all duration-300">
                        <div className="flex items-center space-x-3">
                          <Users className="w-4 h-4 text-zion-cyan" />
                          <span className="text-zion-slate-light group-hover:text-white transition-colors">About Us</span>
                        </div>
                        <ArrowRight className="w-4 h-4 text-zion-purple/50 group-hover:text-zion-cyan transition-all duration-300 opacity-0 group-hover:opacity-100 transform translate-x-2 group-hover:translate-x-0" />
                      </Link>
                    </li>
                    <li>
                      <Link to="/careers" className="group flex items-center justify-between p-3 rounded-lg hover:bg-zion-purple/10 transition-all duration-300">
                        <div className="flex items-center space-x-3">
                          <Users2 className="w-4 h-4 text-zion-cyan" />
                          <span className="text-zion-slate-light group-hover:text-white transition-colors">Careers</span>
                        </div>
                        <ArrowRight className="w-4 h-4 text-zion-purple/50 group-hover:text-zion-cyan transition-all duration-300 opacity-0 group-hover:opacity-100 transform translate-x-2 group-hover:translate-x-0" />
                      </Link>
                    </li>
                  </ul>
                </div>
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
                <div className="space-y-4">
                  <div className="flex items-center space-x-3 pb-3 border-b border-zion-purple/20">
                    <div className="p-2 bg-zion-cyan/20 rounded-lg">
                      <FileText className="w-5 h-5 text-zion-cyan"/>
                    </div>
                    <h4 className="text-zion-cyan font-bold text-lg">Knowledge Hub</h4>
                  </div>
                  <ul className="space-y-3">
                    <li>
                      <Link to="/blog" className="group flex items-center justify-between p-3 rounded-lg hover:bg-zion-purple/10 transition-all duration-300">
                        <div className="flex items-center space-x-3">
                          <FileText className="w-4 h-4 text-zion-cyan" />
                          <span className="text-zion-slate-light group-hover:text-white transition-colors">Blog & Insights</span>
                        </div>
                        <ArrowRight className="w-4 h-4 text-zion-purple/50 group-hover:text-zion-cyan transition-all duration-300 opacity-0 group-hover:opacity-100 transform translate-x-2 group-hover:translate-x-0" />
                      </Link>
                    </li>
                    <li>
                      <Link to="/docs" className="group flex items-center justify-between p-3 rounded-lg hover:bg-zion-purple/10 transition-all duration-300">
                        <div className="flex items-center space-x-3">
                          <BookOpen className="w-4 h-4 text-zion-cyan" />
                          <span className="text-zion-slate-light group-hover:text-white transition-colors">Documentation</span>
                        </div>
                        <ArrowRight className="w-4 h-4 text-zion-purple/50 group-hover:text-zion-cyan transition-all duration-300 opacity-0 group-hover:opacity-100 transform translate-x-2 group-hover:translate-x-0" />
                      </Link>
                    </li>
                    <li>
                      <Link to="/white-papers" className="group flex items-center justify-between p-3 rounded-lg hover:bg-zion-purple/10 transition-all duration-300">
                        <div className="flex items-center space-x-3">
                          <FileText className="w-4 h-4 text-zion-cyan" />
                          <span className="text-zion-slate-light group-hover:text-white transition-colors">White Papers</span>
                        </div>
                        <ArrowRight className="w-4 h-4 text-zion-purple/50 group-hover:text-zion-cyan transition-all duration-300 opacity-0 group-hover:opacity-100 transform translate-x-2 group-hover:translate-x-0" />
                      </Link>
                    </li>
                    <li>
                      <Link to="/webinars" className="group flex items-center justify-between p-3 rounded-lg hover:bg-zion-purple/10 transition-all duration-300">
                        <div className="flex items-center space-x-3">
                          <Monitor className="w-4 h-4 text-zion-cyan" />
                          <span className="text-zion-slate-light group-hover:text-white transition-colors">Webinars</span>
                        </div>
                        <ArrowRight className="w-4 h-4 text-zion-purple/50 group-hover:text-zion-cyan transition-all duration-300 opacity-0 group-hover:opacity-100 transform translate-x-2 group-hover:translate-x-0" />
                      </Link>
                    </li>
                    <li>
                      <Link to="/training" className="group flex items-center justify-between p-3 rounded-lg hover:bg-zion-purple/10 transition-all duration-300">
                        <div className="flex items-center space-x-3">
                          <GraduationCap className="w-4 h-4 text-zion-cyan" />
                          <span className="text-zion-slate-light group-hover:text-white transition-colors">Training</span>
                        </div>
                        <ArrowRight className="w-4 h-4 text-zion-purple/50 group-hover:text-zion-cyan transition-all duration-300 opacity-0 group-hover:opacity-100 transform translate-x-2 group-hover:translate-x-0" />
                      </Link>
                    </li>
                    <li>
                      <Link to="/research-development" className="group flex items-center justify-between p-3 rounded-lg hover:bg-zion-purple/10 transition-all duration-300">
                        <div className="flex items-center space-x-3">
                          <Lightbulb className="w-4 h-4 text-zion-cyan" />
                          <span className="text-zion-slate-light group-hover:text-white transition-colors">Research</span>
                        </div>
                        <ArrowRight className="w-4 h-4 text-zion-purple/50 group-hover:text-zion-cyan transition-all duration-300 opacity-0 group-hover:opacity-100 transform translate-x-2 group-hover:translate-x-0" />
                      </Link>
                    </li>
                    <li>
                      <Link to="/case-studies" className="group flex items-center justify-between p-3 rounded-lg hover:bg-zion-purple/10 transition-all duration-300">
                        <div className="flex items-center space-x-3">
                          <BarChart className="w-4 h-4 text-zion-cyan" />
                          <span className="text-zion-slate-light group-hover:text-white transition-colors">Case Studies</span>
                        </div>
                        <ArrowRight className="w-4 h-4 text-zion-purple/50 group-hover:text-zion-cyan transition-all duration-300 opacity-0 group-hover:opacity-100 transform translate-x-2 group-hover:translate-x-0" />
                      </Link>
                    </li>
                    <li>
                      <Link to="/innovative-services-showcase-2025" className="group flex items-center justify-between p-3 rounded-lg hover:bg-zion-purple/10 transition-all duration-300">
                        <div className="flex items-center space-x-3">
                          <Rocket className="w-4 h-4 text-zion-cyan" />
                          <span className="text-zion-slate-light group-hover:text-white transition-colors">Innovative Services 2025</span>
                        </div>
                        <ArrowRight className="w-4 h-4 text-zion-purple/50 group-hover:text-zion-cyan transition-all duration-300 opacity-0 group-hover:opacity-100 transform translate-x-2 group-hover:translate-x-0" />
                      </Link>
                    </li>
                    <li>
                      <Link to="/pricing-guide" className="group flex items-center justify-between p-3 rounded-lg hover:bg-zion-purple/10 transition-all duration-300">
                        <div className="flex items-center space-x-3">
                          <DollarSign className="w-4 h-4 text-zion-cyan" />
                          <span className="text-zion-slate-light group-hover:text-white transition-colors">Pricing Guide</span>
                        </div>
                        <ArrowRight className="w-4 h-4 text-zion-purple/50 group-hover:text-zion-cyan transition-all duration-300 opacity-0 group-hover:opacity-100 transform translate-x-2 group-hover:translate-x-0" />
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Contact Link */}
        <NavLink 
          to="/contact" 
          className={({ isActive }) => 
            cn("text-sm font-medium transition-colors hover:text-primary px-3 py-2 rounded-md", 
              isActive ? "text-zion-cyan bg-zion-cyan/10" : "text-muted-foreground hover:text-zion-cyan hover:bg-zion-cyan/5"
            )
          }
        >
          Contact
        </NavLink>
      </nav>

      {/* Mobile Navigation */}
      <div className="lg:hidden">
        <button
          onClick={toggleMobileMenu}
          className="p-2 text-muted-foreground hover:text-primary transition-colors"
        >
          {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
        
        {isMobileMenuOpen && (
          <div className="absolute top-full left-0 right-0 bg-zion-blue-dark border-t border-zion-purple/30 shadow-2xl shadow-zion-purple/20 z-50">
            <div className="p-4 space-y-2">
              <NavLink 
                to="/" 
                className={({ isActive }) => 
                  cn("block px-3 py-2 rounded-md text-sm font-medium transition-colors", 
                    isActive ? "text-zion-cyan bg-zion-cyan/10" : "text-muted-foreground hover:text-zion-cyan hover:bg-zion-cyan/5"
                  )
                }
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Home
              </NavLink>
              
              <div className="space-y-2">
                <button
                  onClick={() => setIsServicesOpen(!isServicesOpen)}
                  className="flex items-center justify-between w-full px-3 py-2 rounded-md text-sm font-medium text-muted-foreground hover:text-zion-cyan hover:bg-zion-cyan/5 transition-colors"
                >
                  <span>Services</span>
                  <ChevronDown className={`w-4 h-4 transition-transform ${isServicesOpen ? 'rotate-180' : ''}`} />
                </button>
                
                {isServicesOpen && (
                  <div className="pl-4 space-y-1">
                    <Link 
                      to="/services/ai-autonomous-business-manager" 
                      className="block px-3 py-2 rounded-md text-sm text-muted-foreground hover:text-zion-cyan hover:bg-zion-cyan/5 transition-colors"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      AI Autonomous Business Manager
                    </Link>
                    <Link 
                      to="/services/ai-business-intelligence" 
                      className="block px-3 py-2 rounded-md text-sm text-muted-foreground hover:text-zion-cyan hover:bg-zion-cyan/5 transition-colors"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      AI Business Intelligence
                    </Link>
                    <Link 
                      to="/services/cloud-devops" 
                      className="block px-3 py-2 rounded-md text-sm text-muted-foreground hover:text-zion-cyan hover:bg-zion-cyan/5 transition-colors"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      Cloud & DevOps
                    </Link>
                    <Link 
                      to="/services/cybersecurity" 
                      className="block px-3 py-2 rounded-md text-sm text-muted-foreground hover:text-zion-cyan hover:bg-zion-cyan/5 transition-colors"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      Cybersecurity
                    </Link>
                    <Link 
                      to="/services/micro-saas-solutions" 
                      className="block px-3 py-2 rounded-md text-sm text-muted-foreground hover:text-zion-cyan hover:bg-zion-cyan/5 transition-colors"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      Micro SaaS Solutions
                    </Link>
                    <Link 
                      to="/services/blockchain" 
                      className="block px-3 py-2 rounded-md text-sm text-muted-foreground hover:text-zion-cyan hover:bg-zion-cyan/5 transition-colors"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      Blockchain Solutions
                    </Link>
                    <Link 
                      to="/services/ai-autonomous-legal-research-platform" 
                      className="block px-3 py-2 rounded-md text-sm text-muted-foreground hover:text-zion-cyan hover:bg-zion-cyan/5 transition-colors"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      AI Legal Research Platform
                    </Link>
                    <Link 
                      to="/services/ai-educational-content-creation-platform" 
                      className="block px-3 py-2 rounded-md text-sm text-muted-foreground hover:text-zion-cyan hover:bg-zion-cyan/5 transition-colors"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      AI Educational Content
                    </Link>
                    <Link 
                      to="/services/ai-real-estate-investment-analytics-platform" 
                      className="block px-3 py-2 rounded-md text-sm text-muted-foreground hover:text-zion-cyan hover:bg-zion-cyan/5 transition-colors"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      AI Real Estate Analytics
                    </Link>
                    <Link 
                      to="/services/ai-content-optimizer-pro" 
                      className="block px-3 py-2 rounded-md text-sm text-muted-foreground hover:text-zion-cyan hover:bg-zion-cyan/5 transition-colors"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      AI Content Optimizer Pro
                    </Link>
                    <Link 
                      to="/services/ai-powered-customer-churn-predictor" 
                      className="block px-3 py-2 rounded-md text-sm text-muted-foreground hover:text-zion-cyan hover:bg-zion-cyan/5 transition-colors"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      AI Customer Churn Predictor
                    </Link>
                    <Link 
                      to="/services/ai-iot-edge-computing-platform" 
                      className="block px-3 py-2 rounded-md text-sm text-muted-foreground hover:text-zion-cyan hover:bg-zion-cyan/5 transition-colors"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      AI IoT Edge Computing
                    </Link>
                  </div>
                )}
              </div>
              
              <div className="space-y-2">
                <button
                  onClick={() => setIsSolutionsOpen(!isSolutionsOpen)}
                  className="flex items-center justify-between w-full px-3 py-2 rounded-md text-sm font-medium text-muted-foreground hover:text-zion-cyan hover:bg-zion-cyan/5 transition-colors"
                >
                  <span>Solutions</span>
                  <ChevronDown className={`w-4 h-4 transition-transform ${isSolutionsOpen ? 'rotate-180' : ''}`} />
                </button>
                
                {isSolutionsOpen && (
                  <div className="pl-4 space-y-1">
                    <Link 
                      to="/solutions/enterprise" 
                      className="block px-3 py-2 rounded-md text-sm text-muted-foreground hover:text-zion-cyan hover:bg-zion-cyan/5 transition-colors"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      Enterprise
                    </Link>
                    <Link 
                      to="/solutions/healthcare" 
                      className="block px-3 py-2 rounded-md text-sm text-muted-foreground hover:text-zion-cyan hover:bg-zion-cyan/5 transition-colors"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      Healthcare
                    </Link>
                  </div>
                )}
              </div>
              
              <div className="space-y-2">
                <button
                  onClick={() => setIsCompanyOpen(!isCompanyOpen)}
                  className="flex items-center justify-between w-full px-3 py-2 rounded-md text-sm font-medium text-muted-foreground hover:text-zion-cyan hover:bg-zion-cyan/5 transition-colors"
                >
                  <span>Company</span>
                  <ChevronDown className={`w-4 h-4 transition-transform ${isCompanyOpen ? 'rotate-180' : ''}`} />
                </button>
                
                {isCompanyOpen && (
                  <div className="pl-4 space-y-1">
                    <Link 
                      to="/about" 
                      className="block px-3 py-2 rounded-md text-sm text-muted-foreground hover:text-zion-cyan hover:bg-zion-cyan/5 transition-colors"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      About Us
                    </Link>
                    <Link 
                      to="/careers" 
                      className="block px-3 py-2 rounded-md text-sm text-muted-foreground hover:text-zion-cyan hover:bg-zion-cyan/5 transition-colors"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      Careers
                    </Link>
                  </div>
                )}
              </div>
              
              <div className="space-y-2">
                <button
                  onClick={() => setIsResourcesOpen(!isResourcesOpen)}
                  className="flex items-center justify-between w-full px-3 py-2 rounded-md text-sm font-medium text-muted-foreground hover:text-zion-cyan hover:bg-zion-cyan/5 transition-colors"
                >
                  <span>Resources</span>
                  <ChevronDown className={`w-4 h-4 transition-transform ${isResourcesOpen ? 'rotate-180' : ''}`} />
                </button>
                
                {isResourcesOpen && (
                  <div className="pl-4 space-y-1">
                    <Link 
                      to="/blog" 
                      className="block px-3 py-2 rounded-md text-sm text-muted-foreground hover:text-zion-cyan hover:bg-zion-cyan/5 transition-colors"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      Blog & Insights
                    </Link>
                    <Link 
                      to="/docs" 
                      className="block px-3 py-2 rounded-md text-sm text-muted-foreground hover:text-zion-cyan hover:bg-zion-cyan/5 transition-colors"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      Documentation
                    </Link>
                    <Link 
                      to="/white-papers" 
                      className="block px-3 py-2 rounded-md text-sm text-muted-foreground hover:text-zion-cyan hover:bg-zion-cyan/5 transition-colors"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      White Papers
                    </Link>
                    <Link 
                      to="/webinars" 
                      className="block px-3 py-2 rounded-md text-sm text-muted-foreground hover:text-zion-cyan hover:bg-zion-cyan/5 transition-colors"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      Webinars
                    </Link>
                    <Link 
                      to="/training" 
                      className="block px-3 py-2 rounded-md text-sm text-muted-foreground hover:text-zion-cyan hover:bg-zion-cyan/5 transition-colors"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      Training
                    </Link>
                    <Link 
                      to="/research-development" 
                      className="block px-3 py-2 rounded-md text-sm text-muted-foreground hover:text-zion-cyan hover:bg-zion-cyan/5 transition-colors"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      Research
                    </Link>
                    <Link 
                      to="/case-studies" 
                      className="block px-3 py-2 rounded-md text-sm text-muted-foreground hover:text-zion-cyan hover:bg-zion-cyan/5 transition-colors"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      Case Studies
                    </Link>
                    <Link 
                      to="/innovative-services-showcase-2025" 
                      className="block px-3 py-2 rounded-md text-sm text-muted-foreground hover:text-zion-cyan hover:bg-zion-cyan/5 transition-colors"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      Innovative Services 2025
                    </Link>
                    <Link 
                      to="/pricing-guide" 
                      className="block px-3 py-2 rounded-md text-sm text-muted-foreground hover:text-zion-cyan hover:bg-zion-cyan/5 transition-colors"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      Pricing Guide
                    </Link>
                  </div>
                )}
              </div>
              
              <NavLink 
                to="/contact" 
                className={({ isActive }) => 
                  cn("block px-3 py-2 rounded-md text-sm font-medium transition-colors", 
                    isActive ? "text-zion-cyan bg-zion-cyan/10" : "text-muted-foreground hover:text-zion-cyan hover:bg-zion-cyan/5"
                  )
                }
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Contact
              </NavLink>
            </div>
          </div>
        )}
      </div>
    </>
  );
}
