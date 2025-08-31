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
  BookOpen
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
              className="absolute top-full left-0 mt-2 w-[1200px] bg-zion-blue-dark border border-zion-purple/30 rounded-lg shadow-2xl shadow-zion-purple/20 z-50"
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
                        <Link to="/ai-services" className="text-zion-slate-light hover:text-zion-cyan transition-colors flex items-center group">
                          <Brain className="w-3 h-3 mr-2" />
                          AI Services Overview
                        </Link>
                      </li>
                      <li>
                        <Link to="/services/ai-autonomous-business-manager" className="text-zion-slate-light hover:text-zion-cyan transition-colors flex items-center">
                          <Brain className="w-3 h-3 mr-2" />
                          AI Business Manager
                        </Link>
                      </li>
                      <li>
                        <Link to="/services/ai-business-intelligence-dashboard" className="text-zion-slate-light hover:text-zion-cyan transition-colors flex items-center group">
                          <TrendingUp className="w-4 h-4 mr-3 group-hover:scale-110 transition-transform" />
                          <span>AI Business Intelligence</span>
                        </Link>
                      </li>
                      <li>
                        <Link to="/services/ai-enterprise-resource-planning" className="text-zion-slate-light hover:text-zion-cyan transition-colors flex items-center group">
                          <Database className="w-4 h-4 mr-3 group-hover:scale-110 transition-transform" />
                          <span>AI Enterprise Resource Planning</span>
                        </Link>
                      </li>
                      <li>
                        <Link to="/services/ai-workflow-orchestrator" className="text-zion-slate-light hover:text-zion-cyan transition-colors flex items-center group">
                          <Workflow className="w-4 h-4 mr-3 group-hover:scale-110 transition-transform" />
                          <span>AI Workflow Orchestrator</span>
                        </Link>
                      </li>
                      <li>
                        <Link to="/services/ai-project-management-platform" className="text-zion-slate-light hover:text-zion-cyan transition-colors flex items-center group">
                          <Target className="w-4 h-4 mr-3 group-hover:scale-110 transition-transform" />
                          <span>AI Project Management</span>
                        </Link>
                      </li>
                      <li>
                        <Link to="/services/ai-marketing-automation-platform" className="text-zion-slate-light hover:text-zion-cyan transition-colors flex items-center group">
                          <TrendingUp className="w-4 h-4 mr-3 group-hover:scale-110 transition-transform" />
                          <span>AI Marketing Automation</span>
                        </Link>
                      </li>
                      <li>
                        <Link to="/services/ai-customer-support-automation" className="text-zion-slate-light hover:text-zion-cyan transition-colors flex items-center group">
                          <MessageCircle className="w-4 h-4 mr-3 group-hover:scale-110 transition-transform" />
                          <span>AI Customer Support</span>
                        </Link>
                      </li>
                      <li>
                        <Link to="/services/ai-hr-platform" className="text-zion-slate-light hover:text-zion-cyan transition-colors flex items-center group">
                          <Users className="w-4 h-4 mr-3 group-hover:scale-110 transition-transform" />
                          <span>AI HR Platform</span>
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
                        <Link to="/it-services" className="text-zion-slate-light hover:text-zion-cyan transition-colors flex items-center">
                          <Server className="w-3 h-3 mr-2" />
                          IT Services Overview
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
                        <Link to="/services/ai-cybersecurity-platform" className="text-zion-slate-light hover:text-zion-cyan transition-colors flex items-center group">
                          <Lock className="w-4 h-4 mr-3 group-hover:scale-110 transition-transform" />
                          <span>AI Cybersecurity Platform</span>
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
                          <Cpu className="w-4 h-4 mr-3 group-hover:scale-110 transition-transform" />
                          <span>Quantum Edge Computing</span>
                        </Link>
                      </li>
                    </ul>
                  </div>

                  {/* Micro SaaS & Specialized Column */}
                  <div className="space-y-4">
                    <div className="flex items-center space-x-3 pb-3 border-b border-zion-purple/20">
                      <div className="p-2 bg-zion-blue/20 rounded-lg">
                        <Code className="w-5 h-5 text-zion-blue"/>
                      </div>
                      <h4 className="text-zion-blue font-bold text-lg">Micro SaaS & Specialized</h4>
                    </div>
                    <ul className="space-y-3">
                      <li>
                        <Link to="/micro-saas" className="text-zion-slate-light hover:text-zion-cyan transition-colors flex items-center">
                          <Code className="w-3 h-3 mr-2" />
                          Micro SaaS Overview
                        </Link>
                      </li>
                      <li>
                        <Link to="/services/micro-saas-solutions-comprehensive" className="text-zion-slate-light hover:text-zion-cyan transition-colors flex items-center">
                          <Code className="w-3 h-3 mr-2" />
                          Comprehensive Solutions
                        </Link>
                      </li>
                      <li>
                        <Link to="/services/blockchain-enterprise-solutions" className="text-zion-slate-light hover:text-zion-cyan transition-colors flex items-center">
                          <Atom className="w-3 h-3 mr-2" />
                          Blockchain Solutions
                        </Link>
                      </li>
                      <li>
                        <Link to="/services/ai-financial-trading-platform" className="text-zion-slate-light hover:text-zion-cyan transition-colors flex items-center group">
                          <DollarSign className="w-4 h-4 mr-3 group-hover:scale-110 transition-transform" />
                          <span>AI Financial Trading</span>
                        </Link>
                      </li>
                      <li>
                        <Link to="/services/ai-sales-copilot" className="text-zion-slate-light hover:text-zion-cyan transition-colors flex items-center group">
                          <Target className="w-4 h-4 mr-3 group-hover:scale-110 transition-transform" />
                          <span>AI Sales Copilot</span>
                        </Link>
                      </li>
                      <li>
                        <Link to="/services/ai-compliance-assistant" className="text-zion-slate-light hover:text-zion-cyan transition-colors flex items-center group">
                          <Scale className="w-4 h-4 mr-3 group-hover:scale-110 transition-transform" />
                          <span>AI Compliance Assistant</span>
                        </Link>
                      </li>
                      <li>
                        <Link to="/services/cloud-finops-optimizer" className="text-zion-slate-light hover:text-zion-cyan transition-colors flex items-center group">
                          <Cloud className="w-4 h-4 mr-3 group-hover:scale-110 transition-transform" />
                          <span>Cloud FinOps Optimizer</span>
                        </Link>
                      </li>
                    </ul>
                  </div>

                  {/* Healthcare & Specialized Industries Column */}
                  <div className="space-y-4">
                    <div className="flex items-center space-x-3 pb-3 border-b border-zion-purple/20">
                      <div className="p-2 bg-zion-green/20 rounded-lg">
                        <Heart className="w-5 h-5 text-zion-green"/>
                      </div>
                      <h4 className="text-zion-green font-bold text-lg">Healthcare & Industries</h4>
                    </div>
                    <ul className="space-y-3">
                      <li>
                        <Link to="/services/ai-healthcare-platform" className="text-zion-slate-light hover:text-zion-cyan transition-colors flex items-center">
                          <Heart className="w-3 h-3 mr-2" />
                          AI Healthcare Platform
                        </Link>
                      </li>
                      <li>
                        <Link to="/services/ai-healthcare-analytics-platform" className="text-zion-slate-light hover:text-zion-cyan transition-colors flex items-center">
                          <BarChart3 className="w-3 h-3 mr-2" />
                          Healthcare Analytics
                        </Link>
                      </li>
                      <li>
                        <Link to="/services/ai-autonomous-legal-research-platform" className="text-zion-slate-light hover:text-zion-cyan transition-colors flex items-center">
                          <FileText className="w-3 h-3 mr-2" />
                          AI Legal Research
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
                          <Building2 className="w-3 h-3 mr-2" />
                          Real Estate Analytics
                        </Link>
                      </li>
                      <li>
                        <Link to="/services/ai-supply-chain-optimization-enhanced" className="text-zion-slate-light hover:text-zion-cyan transition-colors flex items-center">
                          <Truck className="w-3 h-3 mr-2" />
                          Supply Chain Optimization
                        </Link>
                      </li>
                      <li>
                        <Link to="/services/ai-space-technology-platform" className="text-zion-slate-light hover:text-zion-cyan transition-colors flex items-center">
                          <Satellite className="w-3 h-3 mr-2" />
                          Space Technology
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="mt-8 pt-6 border-t border-zion-purple/30">
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    <Link 
                      to="/comprehensive-services-showcase-2025" 
                      className="inline-flex items-center text-zion-cyan hover:text-zion-cyan-light transition-colors font-medium"
                    >
                      <span>All Services 2025</span>
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </Link>
                    <Link to="/innovative-services-showcase-2032" className="text-zion-purple hover:text-zion-purple-light transition-colors text-sm font-medium flex items-center justify-center">
                      Innovation 2032
                      <Rocket className="w-4 h-4 ml-2"/>
                    </Link>
                    <Link to="/innovative-services-showcase-2026" className="text-zion-purple hover:text-zion-purple-light transition-colors text-sm font-medium flex items-center justify-center">
                      Innovation 2026
                      <Rocket className="w-4 h-4 ml-2"/>
                    </Link>
                    <Link to="/pricing" className="text-zion-cyan hover:text-zion-cyan-light transition-colors text-sm font-medium flex items-center justify-center">
                      Pricing
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
              className="absolute top-full left-0 mt-2 w-96 bg-zion-blue-dark border border-zion-purple/30 rounded-lg shadow-2xl shadow-zion-purple/20 z-50"
            >
              <div className="p-6">
                <div className="space-y-4">
                  <div className="flex items-center space-x-3 pb-3 border-b border-zion-purple/20">
                    <div className="p-2 bg-zion-cyan/20 rounded-lg">
                      <Target className="w-5 h-5 text-zion-cyan"/>
                    </div>
                    <h4 className="text-zion-cyan font-bold text-lg">Industry Solutions</h4>
                  </div>
                  <div className="grid grid-cols-2 gap-3">
                    <Link to="/solutions/enterprise" className="group flex items-center justify-between p-3 rounded-lg hover:bg-zion-purple/10 transition-all duration-300">
                      <div className="flex items-center space-x-3">
                        <Building2 className="w-4 h-4 text-zion-cyan" />
                        <span className="text-zion-slate-light group-hover:text-white transition-colors text-sm">Enterprise</span>
                      </div>
                    </Link>
                    <Link to="/solutions/healthcare" className="group flex items-center justify-between p-3 rounded-lg hover:bg-zion-purple/10 transition-all duration-300">
                      <div className="flex items-center space-x-3">
                        <Heart className="w-4 h-4 text-zion-cyan" />
                        <span className="text-zion-slate-light group-hover:text-white transition-colors text-sm">Healthcare</span>
                      </div>
                    </Link>
                    <Link to="/solutions/financial" className="group flex items-center justify-between p-3 rounded-lg hover:bg-zion-purple/10 transition-all duration-300">
                      <div className="flex items-center space-x-3">
                        <DollarSign className="w-4 h-4 text-zion-cyan" />
                        <span className="text-zion-slate-light group-hover:text-white transition-colors text-sm">Financial</span>
                      </div>
                    </Link>
                    <Link to="/solutions/manufacturing" className="group flex items-center justify-between p-3 rounded-lg hover:bg-zion-purple/10 transition-all duration-300">
                      <div className="flex items-center space-x-3">
                        <Cog className="w-4 h-4 text-zion-cyan" />
                        <span className="text-zion-slate-light group-hover:text-white transition-colors text-sm">Manufacturing</span>
                      </div>
                    </Link>
                    <Link to="/solutions/government" className="group flex items-center justify-between p-3 rounded-lg hover:bg-zion-purple/10 transition-all duration-300">
                      <div className="flex items-center space-x-3">
                        <Scale className="w-4 h-4 text-zion-cyan" />
                        <span className="text-zion-slate-light group-hover:text-white transition-colors text-sm">Government</span>
                      </div>
                    </Link>
                    <Link to="/solutions/retail" className="group flex items-center justify-between p-3 rounded-lg hover:bg-zion-purple/10 transition-all duration-300">
                      <div className="flex items-center space-x-3">
                        <ShoppingCart className="w-4 h-4 text-zion-cyan" />
                        <span className="text-zion-slate-light group-hover:text-white transition-colors text-sm">Retail</span>
                      </div>
                    </Link>
                  </div>
                  <div className="pt-4 border-t border-zion-purple/20">
                    <h5 className="text-zion-purple font-semibold mb-3">Technology Solutions</h5>
                    <div className="grid grid-cols-1 gap-2">
                      <Link to="/solutions/quantum-edge-computing" className="group flex items-center p-2 rounded-lg hover:bg-zion-purple/10 transition-all duration-300">
                        <Atom className="w-4 h-4 text-zion-cyan mr-3" />
                        <span className="text-zion-slate-light group-hover:text-white transition-colors text-sm">Quantum Edge Computing</span>
                      </Link>
                      <Link to="/solutions/blockchain-web3" className="group flex items-center p-2 rounded-lg hover:bg-zion-purple/10 transition-all duration-300">
                        <Database className="w-4 h-4 text-zion-cyan mr-3" />
                        <span className="text-zion-slate-light group-hover:text-white transition-colors text-sm">Blockchain & Web3</span>
                      </Link>
                      <Link to="/solutions/iot-edge-computing" className="group flex items-center p-2 rounded-lg hover:bg-zion-purple/10 transition-all duration-300">
                        <Network className="w-4 h-4 text-zion-cyan mr-3" />
                        <span className="text-zion-slate-light group-hover:text-white transition-colors text-sm">IoT Edge Computing</span>
                      </Link>
                      <Link to="/solutions/space-tech" className="group flex items-center p-2 rounded-lg hover:bg-zion-purple/10 transition-all duration-300">
                        <Satellite className="w-4 h-4 text-zion-cyan mr-3" />
                        <span className="text-zion-slate-light group-hover:text-white transition-colors text-sm">Space Technology</span>
                      </Link>
                    </div>
                  </div>
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
                      <Link to="/leadership" className="group flex items-center justify-between p-3 rounded-lg hover:bg-zion-purple/10 transition-all duration-300">
                        <div className="flex items-center space-x-3">
                          <Star className="w-4 h-4 text-zion-cyan" />
                          <span className="text-zion-slate-light group-hover:text-white transition-colors">Leadership</span>
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
                    <li>
                      <Link to="/partners" className="group flex items-center justify-between p-3 rounded-lg hover:bg-zion-purple/10 transition-all duration-300">
                        <div className="flex items-center space-x-3">
                          <Handshake className="w-4 h-4 text-zion-cyan" />
                          <span className="text-zion-slate-light group-hover:text-white transition-colors">Partners</span>
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
              className="absolute top-full left-0 mt-2 w-80 bg-zion-blue-dark border border-zion-purple/30 rounded-lg shadow-2xl shadow-zion-purple/20 z-50"
            >
              <div className="p-6">
                <div className="space-y-4">
                  <div className="flex items-center space-x-3 pb-3 border-b border-zion-purple/20">
                    <div className="p-2 bg-zion-cyan/20 rounded-lg">
                      <FileText className="w-5 h-5 text-zion-cyan"/>
                    </div>
                    <h4 className="text-zion-cyan font-bold text-lg">Knowledge Hub</h4>
                  </div>
                  <div className="grid grid-cols-2 gap-3">
                    <Link to="/blog" className="group flex items-center p-3 rounded-lg hover:bg-zion-purple/10 transition-all duration-300">
                      <FileText className="w-4 h-4 text-zion-cyan mr-3" />
                      <span className="text-zion-slate-light group-hover:text-white transition-colors text-sm">Blog & Insights</span>
                    </Link>
                    <Link to="/docs" className="group flex items-center p-3 rounded-lg hover:bg-zion-purple/10 transition-all duration-300">
                      <BookOpen className="w-4 h-4 text-zion-cyan mr-3" />
                      <span className="text-zion-slate-light group-hover:text-white transition-colors text-sm">Documentation</span>
                    </Link>
                    <Link to="/white-papers" className="group flex items-center p-3 rounded-lg hover:bg-zion-purple/10 transition-all duration-300">
                      <FileText className="w-4 h-4 text-zion-cyan mr-3" />
                      <span className="text-zion-slate-light group-hover:text-white transition-colors text-sm">White Papers</span>
                    </Link>
                    <Link to="/webinars" className="group flex items-center p-3 rounded-lg hover:bg-zion-purple/10 transition-all duration-300">
                      <Video className="w-4 h-4 text-zion-cyan mr-3" />
                      <span className="text-zion-slate-light group-hover:text-white transition-colors text-sm">Webinars</span>
                    </Link>
                    <Link to="/training" className="group flex items-center p-3 rounded-lg hover:bg-zion-purple/10 transition-all duration-300">
                      <GraduationCap className="w-4 h-4 text-zion-cyan mr-3" />
                      <span className="text-zion-slate-light group-hover:text-white transition-colors text-sm">Training</span>
                    </Link>
                    <Link to="/research" className="group flex items-center p-3 rounded-lg hover:bg-zion-purple/10 transition-all duration-300">
                      <Lightbulb className="w-4 h-4 text-zion-cyan mr-3" />
                      <span className="text-zion-slate-light group-hover:text-white transition-colors text-sm">Research</span>
                    </Link>
                    <Link to="/case-studies" className="group flex items-center p-3 rounded-lg hover:bg-zion-purple/10 transition-all duration-300">
                      <BarChart className="w-4 h-4 text-zion-cyan mr-3" />
                      <span className="text-zion-slate-light group-hover:text-white transition-colors text-sm">Case Studies</span>
                    </Link>
                    <Link to="/help" className="group flex items-center p-3 rounded-lg hover:bg-zion-purple/10 transition-all duration-300">
                      <HelpCircle className="w-4 h-4 text-zion-cyan mr-3" />
                      <span className="text-zion-slate-light group-hover:text-white transition-colors text-sm">Help Center</span>
                    </Link>
                  </div>
                  <div className="pt-4 border-t border-zion-purple/20">
                    <h5 className="text-zion-purple font-semibold mb-3">Innovation Showcases</h5>
                    <div className="space-y-2">
                      <Link to="/innovative-services-showcase-2025" className="group flex items-center p-2 rounded-lg hover:bg-zion-purple/10 transition-all duration-300">
                        <Rocket className="w-4 h-4 text-zion-cyan mr-3" />
                        <span className="text-zion-slate-light group-hover:text-white transition-colors text-sm">Innovation 2025</span>
                      </Link>
                      <Link to="/innovative-services-showcase-2032" className="group flex items-center p-2 rounded-lg hover:bg-zion-purple/10 transition-all duration-300">
                        <Rocket className="w-4 h-4 text-zion-cyan mr-3" />
                        <span className="text-zion-slate-light group-hover:text-white transition-colors text-sm">Innovation 2032</span>
                      </Link>
                      <Link to="/pricing-guide" className="group flex items-center p-2 rounded-lg hover:bg-zion-purple/10 transition-all duration-300">
                        <DollarSign className="w-4 h-4 text-zion-cyan mr-3" />
                        <span className="text-zion-slate-light group-hover:text-white transition-colors text-sm">Pricing Guide</span>
                      </Link>
                    </div>
                  </div>
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
                      to="/ai-services" 
                      className="block px-3 py-2 rounded-md text-sm text-muted-foreground hover:text-zion-cyan hover:bg-zion-cyan/5 transition-colors"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      AI Services Overview
                    </Link>
                    <Link 
                      to="/services/ai-autonomous-business-manager" 
                      className="block px-3 py-2 rounded-md text-sm text-muted-foreground hover:text-zion-cyan hover:bg-zion-cyan/5 transition-colors"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      AI Business Manager
                    </Link>
                    <Link 
                      to="/services/ai-business-intelligence-dashboard" 
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
                      to="/services/ai-cybersecurity-platform" 
                      className="block px-3 py-2 rounded-md text-sm text-muted-foreground hover:text-zion-cyan hover:bg-zion-cyan/5 transition-colors"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      AI Cybersecurity Platform
                    </Link>
                    <Link 
                      to="/services/digital-transformation" 
                      className="block px-3 py-2 rounded-md text-sm text-muted-foreground hover:text-zion-cyan hover:bg-zion-cyan/5 transition-colors"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      Digital Transformation
                    </Link>
                    <Link 
                      to="/services/quantum-edge-computing-solutions" 
                      className="block px-3 py-2 rounded-md text-sm text-muted-foreground hover:text-zion-cyan hover:bg-zion-cyan/5 transition-colors"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      Quantum Edge Computing
                    </Link>
                    <Link 
                      to="/micro-saas" 
                      className="block px-3 py-2 rounded-md text-sm text-muted-foreground hover:text-zion-cyan hover:bg-zion-cyan/5 transition-colors"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      Micro SaaS Overview
                    </Link>
                    <Link 
                      to="/services/micro-saas-solutions-comprehensive" 
                      className="block px-3 py-2 rounded-md text-sm text-muted-foreground hover:text-zion-cyan hover:bg-zion-cyan/5 transition-colors"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      Comprehensive Solutions
                    </Link>
                    <Link 
                      to="/services/blockchain-enterprise-solutions" 
                      className="block px-3 py-2 rounded-md text-sm text-muted-foreground hover:text-zion-cyan hover:bg-zion-cyan/5 transition-colors"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      Blockchain Solutions
                    </Link>
                    <Link 
                      to="/services/ai-financial-trading-platform" 
                      className="block px-3 py-2 rounded-md text-sm text-muted-foreground hover:text-zion-cyan hover:bg-zion-cyan/5 transition-colors"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      AI Financial Trading
                    </Link>
                    <Link 
                      to="/services/ai-sales-copilot" 
                      className="block px-3 py-2 rounded-md text-sm text-muted-foreground hover:text-zion-cyan hover:bg-zion-cyan/5 transition-colors"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      AI Sales Copilot
                    </Link>
                    <Link 
                      to="/services/ai-compliance-assistant" 
                      className="block px-3 py-2 rounded-md text-sm text-muted-foreground hover:text-zion-cyan hover:bg-zion-cyan/5 transition-colors"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      AI Compliance Assistant
                    </Link>
                    <Link 
                      to="/services/cloud-finops-optimizer" 
                      className="block px-3 py-2 rounded-md text-sm text-muted-foreground hover:text-zion-cyan hover:bg-zion-cyan/5 transition-colors"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      Cloud FinOps Optimizer
                    </Link>
                    <Link 
                      to="/services/ai-healthcare-platform" 
                      className="block px-3 py-2 rounded-md text-sm text-muted-foreground hover:text-zion-cyan hover:bg-zion-cyan/5 transition-colors"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      AI Healthcare Platform
                    </Link>
                    <Link 
                      to="/services/ai-healthcare-analytics-platform" 
                      className="block px-3 py-2 rounded-md text-sm text-muted-foreground hover:text-zion-cyan hover:bg-zion-cyan/5 transition-colors"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      Healthcare Analytics
                    </Link>
                    <Link 
                      to="/services/ai-autonomous-legal-research-platform" 
                      className="block px-3 py-2 rounded-md text-sm text-muted-foreground hover:text-zion-cyan hover:bg-zion-cyan/5 transition-colors"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      AI Legal Research
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
                      Real Estate Analytics
                    </Link>
                    <Link 
                      to="/services/ai-supply-chain-optimization-enhanced" 
                      className="block px-3 py-2 rounded-md text-sm text-muted-foreground hover:text-zion-cyan hover:bg-zion-cyan/5 transition-colors"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      Supply Chain Optimization
                    </Link>
                    <Link 
                      to="/services/ai-space-technology-platform" 
                      className="block px-3 py-2 rounded-md text-sm text-muted-foreground hover:text-zion-cyan hover:bg-zion-cyan/5 transition-colors"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      Space Technology
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
                    <Link 
                      to="/solutions/financial" 
                      className="block px-3 py-2 rounded-md text-sm text-muted-foreground hover:text-zion-cyan hover:bg-zion-cyan/5 transition-colors"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      Financial
                    </Link>
                    <Link 
                      to="/solutions/manufacturing" 
                      className="block px-3 py-2 rounded-md text-sm text-muted-foreground hover:text-zion-cyan hover:bg-zion-cyan/5 transition-colors"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      Manufacturing
                    </Link>
                    <Link 
                      to="/solutions/government" 
                      className="block px-3 py-2 rounded-md text-sm text-muted-foreground hover:text-zion-cyan hover:bg-zion-cyan/5 transition-colors"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      Government
                    </Link>
                    <Link 
                      to="/solutions/retail" 
                      className="block px-3 py-2 rounded-md text-sm text-muted-foreground hover:text-zion-cyan hover:bg-zion-cyan/5 transition-colors"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      Retail
                    </Link>
                    <Link 
                      to="/solutions/quantum-edge-computing" 
                      className="block px-3 py-2 rounded-md text-sm text-muted-foreground hover:text-zion-cyan hover:bg-zion-cyan/5 transition-colors"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      Quantum Edge Computing
                    </Link>
                    <Link 
                      to="/solutions/blockchain-web3" 
                      className="block px-3 py-2 rounded-md text-sm text-muted-foreground hover:text-zion-cyan hover:bg-zion-cyan/5 transition-colors"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      Blockchain & Web3
                    </Link>
                    <Link 
                      to="/solutions/iot-edge-computing" 
                      className="block px-3 py-2 rounded-md text-sm text-muted-foreground hover:text-zion-cyan hover:bg-zion-cyan/5 transition-colors"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      IoT Edge Computing
                    </Link>
                    <Link 
                      to="/solutions/space-tech" 
                      className="block px-3 py-2 rounded-md text-sm text-muted-foreground hover:text-zion-cyan hover:bg-zion-cyan/5 transition-colors"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      Space Technology
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
                      to="/leadership" 
                      className="block px-3 py-2 rounded-md text-sm text-muted-foreground hover:text-zion-cyan hover:bg-zion-cyan/5 transition-colors"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      Leadership
                    </Link>
                    <Link 
                      to="/careers" 
                      className="block px-3 py-2 rounded-md text-sm text-muted-foreground hover:text-zion-cyan hover:bg-zion-cyan/5 transition-colors"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      Careers
                    </Link>
                    <Link 
                      to="/partners" 
                      className="block px-3 py-2 rounded-md text-sm text-muted-foreground hover:text-zion-cyan hover:bg-zion-cyan/5 transition-colors"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      Partners
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
                      to="/research" 
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
                      to="/help" 
                      className="block px-3 py-2 rounded-md text-sm text-muted-foreground hover:text-zion-cyan hover:bg-zion-cyan/5 transition-colors"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      Help Center
                    </Link>
                    <Link 
                      to="/innovative-services-showcase-2025" 
                      className="block px-3 py-2 rounded-md text-sm text-muted-foreground hover:text-zion-cyan hover:bg-zion-cyan/5 transition-colors"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      Innovation 2025
                    </Link>
                    <Link 
                      to="/innovative-services-showcase-2032" 
                      className="block px-3 py-2 rounded-md text-sm text-muted-foreground hover:text-zion-cyan hover:bg-zion-cyan/5 transition-colors"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      Innovation 2032
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
