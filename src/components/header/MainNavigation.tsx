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
  Layout
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
              className="absolute top-full left-0 mt-2 w-[900px] bg-zion-blue-dark border border-zion-purple/30 rounded-xl shadow-2xl shadow-zion-purple/20 z-50 backdrop-blur-sm"
            >
              <div className="p-8">
                <div className="grid grid-cols-3 gap-8">
                  <div>
                    <h4 className="text-zion-cyan font-semibold mb-6 flex items-center text-lg">
                      <Brain className="w-5 h-5 mr-3"/>
                      AI & Automation
                    </h4>
                    <ul className="space-y-3 text-sm">
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
                        <Link to="/services/ai-customer-experience-analytics-platform" className="text-zion-slate-light hover:text-zion-cyan transition-colors flex items-center group">
                          <Users className="w-4 h-4 mr-3 group-hover:scale-110 transition-transform" />
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
                          <Settings className="w-4 h-4 mr-3 group-hover:scale-110 transition-transform" />
                          <span>AI Enterprise Automation</span>
                        </Link>
                      </li>
                      <li>
                        <Link to="/services/ai-data-analytics-platform" className="text-zion-slate-light hover:text-zion-cyan transition-colors flex items-center group">
                          <BarChart className="w-4 h-4 mr-3 group-hover:scale-110 transition-transform" />
                          <span>AI Data Analytics</span>
                        </Link>
                      </li>
                      <li>
                        <Link to="/services/ai-business-intelligence-dashboard" className="text-zion-slate-light hover:text-zion-cyan transition-colors flex items-center group">
                          <TrendingUp className="w-4 h-4 mr-3 group-hover:scale-110 transition-transform" />
                          <span>AI Business Intelligence</span>
                        </Link>
                      </li>
                      <li>
                        <Link to="/services/ai-workflow-orchestrator" className="text-zion-slate-light hover:text-zion-cyan transition-colors flex items-center group">
                          <Workflow className="w-4 h-4 mr-3 group-hover:scale-110 transition-transform" />
                          <span>AI Workflow Orchestrator</span>
                        </Link>
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="text-zion-cyan font-semibold mb-6 flex items-center text-lg">
                      <Server className="w-5 h-5 mr-3"/>
                      Cloud & Infrastructure
                    </h4>
                    <ul className="space-y-3 text-sm">
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
                      <li>
                        <Link to="/services/ai-cybersecurity-platform" className="text-zion-slate-light hover:text-zion-cyan transition-colors flex items-center group">
                          <Shield className="w-4 h-4 mr-3 group-hover:scale-110 transition-transform" />
                          <span>AI Cybersecurity Platform</span>
                        </Link>
                      </li>
                      <li>
                        <Link to="/services/blockchain-enterprise-solutions" className="text-zion-slate-light hover:text-zion-cyan transition-colors flex items-center group">
                          <Network className="w-4 h-4 mr-3 group-hover:scale-110 transition-transform" />
                          <span>Blockchain Enterprise</span>
                        </Link>
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="text-zion-cyan font-semibold mb-6 flex items-center text-lg">
                      <Building2 className="w-5 h-5 mr-3"/>
                      Specialized Solutions
                    </h4>
                    <ul className="space-y-3 text-sm">
                      <li>
                        <Link to="/services/micro-saas-solutions-comprehensive" className="text-zion-slate-light hover:text-zion-cyan transition-colors flex items-center group">
                          <Code className="w-4 h-4 mr-3 group-hover:scale-110 transition-transform" />
                          <span>Micro SaaS Solutions</span>
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
                      <li>
                        <Link to="/services/ai-healthcare-analytics-platform" className="text-zion-slate-light hover:text-zion-cyan transition-colors flex items-center group">
                          <Activity className="w-4 h-4 mr-3 group-hover:scale-110 transition-transform" />
                          <span>AI Healthcare Analytics</span>
                        </Link>
                      </li>
                      <li>
                        <Link to="/services/ai-financial-trading-platform" className="text-zion-slate-light hover:text-zion-cyan transition-colors flex items-center group">
                          <TrendingUp className="w-4 h-4 mr-3 group-hover:scale-110 transition-transform" />
                          <span>AI Financial Trading</span>
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
                </div>
                <div className="mt-8 pt-6 border-t border-zion-purple/30">
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    <Link 
                      to="/services" 
                      className="inline-flex items-center text-zion-cyan hover:text-zion-cyan-light transition-colors font-medium"
                    >
                      <span>View All Services</span>
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </Link>
                    <Link to="/innovative-services-showcase-2026" className="text-zion-purple hover:text-zion-purple-light transition-colors text-sm font-medium flex items-center justify-center">
                      Innovation Showcase 2026
                      <Rocket className="w-4 h-4 ml-2"/>
                    </Link>
                    <Link to="/innovative-services-showcase-2032" className="text-zion-purple hover:text-zion-purple-light transition-colors text-sm font-medium flex items-center justify-center">
                      Innovation Showcase 2032
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
                <div className="grid grid-cols-1 gap-6">
                  <div>
                    <h4 className="text-zion-cyan font-semibold mb-4 text-lg">Industry Solutions</h4>
                    <ul className="space-y-3 text-sm">
                      <li>
                        <Link to="/solutions/healthcare" className="text-zion-slate-light hover:text-zion-cyan transition-colors flex items-center group">
                          <Activity className="w-4 h-4 mr-3 group-hover:scale-110 transition-transform" />
                          <span>Healthcare Solutions</span>
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
                          <Factory className="w-4 h-4 mr-3 group-hover:scale-110 transition-transform" />
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
                          <span>Government & Public Sector</span>
                        </Link>
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="text-zion-cyan font-semibold mb-4 text-lg">Technology Solutions</h4>
                    <ul className="space-y-3 text-sm">
                      <li>
                        <Link to="/solutions/quantum-edge-computing" className="text-zion-slate-light hover:text-zion-cyan transition-colors flex items-center group">
                          <Atom className="w-4 h-4 mr-3 group-hover:scale-110 transition-transform" />
                          <span>Quantum Edge Computing</span>
                        </Link>
                      </li>
                      <li>
                        <Link to="/solutions/ai-autonomous-business" className="text-zion-slate-light hover:text-zion-cyan transition-colors flex items-center group">
                          <Brain className="w-4 h-4 mr-3 group-hover:scale-110 transition-transform" />
                          <span>AI Autonomous Business</span>
                        </Link>
                      </li>
                      <li>
                        <Link to="/solutions/blockchain-web3" className="text-zion-slate-light hover:text-zion-cyan transition-colors flex items-center group">
                          <Network className="w-4 h-4 mr-3 group-hover:scale-110 transition-transform" />
                          <span>Blockchain & Web3</span>
                        </Link>
                      </li>
                      <li>
                        <Link to="/solutions/iot-edge-computing" className="text-zion-slate-light hover:text-zion-cyan transition-colors flex items-center group">
                          <Smartphone className="w-4 h-4 mr-3 group-hover:scale-110 transition-transform" />
                          <span>IoT Edge Computing</span>
                        </Link>
                      </li>
                      <li>
                        <Link to="/solutions/space-tech" className="text-zion-slate-light hover:text-zion-cyan transition-colors flex items-center group">
                          <Satellite className="w-4 h-4 mr-3 group-hover:scale-110 transition-transform" />
                          <span>Space Technology</span>
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="mt-6 pt-4 border-t border-zion-purple/30">
                  <Link 
                    to="/solutions" 
                    className="inline-flex items-center text-zion-cyan hover:text-zion-cyan-light transition-colors font-medium"
                  >
                    <span>View All Solutions</span>
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Link>
                </div>
              </div>
            )}
          </div>
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
                      <Award className="w-4 h-4 mr-3 group-hover:scale-110 transition-transform" />
                      <span>Leadership</span>
                    </Link>
                  </li>
                  <li>
                    <Link to="/careers" className="text-zion-slate-light hover:text-zion-cyan transition-colors flex items-center group">
                      <Briefcase className="w-4 h-4 mr-3 group-hover:scale-110 transition-transform" />
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
                      <Phone className="w-4 h-4 mr-3 group-hover:scale-110 transition-transform" />
                      <span>Contact</span>
                    </Link>
                  </li>
                </ul>
              </div>
            )}
          </div>
        </div>

        {/* Resources Dropdown */}
        <div className="relative group">
          <button 
            onMouseEnter={() => setIsResourcesOpen(true)} 
            onMouseLeave={() => setIsResourcesOpen(false)} 
            className="flex items-center space-x-2 text-sm font-medium transition-colors hover:text-primary text-muted-foreground px-3 py-2 rounded-md hover:bg-zion-cyan/5"
          >
            <BookOpen className="w-4 h-4"/>
            <span>Resources</span>
            <ChevronDown className="w-3 h-3 transition-transform group-hover:rotate-180"/>
          </button>
          {isResourcesOpen && (
            <div 
              onMouseEnter={() => setIsResourcesOpen(true)} 
              onMouseLeave={() => setIsResourcesOpen(false)} 
              className="absolute top-full left-0 mt-2 w-72 bg-zion-blue-dark border border-zion-purple/30 rounded-xl shadow-2xl shadow-zion-purple/20 z-50 backdrop-blur-sm"
            >
              <div className="p-6">
                <div className="grid grid-cols-1 gap-4">
                  <div>
                    <h4 className="text-zion-cyan font-semibold mb-3 text-sm">Learning & Insights</h4>
                    <ul className="space-y-2 text-sm">
                      <li>
                        <Link to="/blog" className="text-zion-slate-light hover:text-zion-cyan transition-colors flex items-center group">
                          <PenTool className="w-4 h-4 mr-3 group-hover:scale-110 transition-transform" />
                          <span>Blog</span>
                        </Link>
                      </li>
                      <li>
                        <Link to="/case-studies" className="text-zion-slate-light hover:text-zion-cyan transition-colors flex items-center group">
                          <FileText className="w-4 h-4 mr-3 group-hover:scale-110 transition-transform" />
                          <span>Case Studies</span>
                        </Link>
                      </li>
                      <li>
                        <Link to="/white-papers" className="text-zion-slate-light hover:text-zion-cyan transition-colors flex items-center group">
                          <BookOpen className="w-4 h-4 mr-3 group-hover:scale-110 transition-transform" />
                          <span>White Papers</span>
                        </Link>
                      </li>
                      <li>
                        <Link to="/research-development" className="text-zion-slate-light hover:text-zion-cyan transition-colors flex items-center group">
                          <Lightbulb className="w-4 h-4 mr-3 group-hover:scale-110 transition-transform" />
                          <span>Research & Development</span>
                        </Link>
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="text-zion-cyan font-semibold mb-3 text-sm">Training & Support</h4>
                    <ul className="space-y-2 text-sm">
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
                        <Link to="/docs" className="text-zion-slate-light hover:text-zion-cyan transition-colors flex items-center group">
                          <Layout className="w-4 h-4 mr-3 group-hover:scale-110 transition-transform" />
                          <span>Documentation</span>
                        </Link>
                      </li>
                      <li>
                        <Link to="/help" className="text-zion-slate-light hover:text-zion-cyan transition-colors flex items-center group">
                          <HelpCircle className="w-4 h-4 mr-3 group-hover:scale-110 transition-transform" />
                          <span>Help Center</span>
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="mt-4 pt-4 border-t border-zion-purple/30">
                  <Link 
                    to="/innovative-services-hub" 
                    className="inline-flex items-center text-zion-purple hover:text-zion-purple-light transition-colors font-medium text-sm"
                  >
                    <span>Innovation Hub</span>
                    <Rocket className="w-4 h-4 ml-2" />
                  </Link>
                </div>
              </div>
            )}
          </div>
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
        <NavLink 
          to="/support" 
          className={({ isActive }) => 
            cn("text-sm font-medium transition-colors hover:text-primary px-3 py-2 rounded-md", 
              isActive ? "text-zion-cyan bg-zion-cyan/10" : "text-muted-foreground hover:text-zion-cyan hover:bg-zion-cyan/5"
            )
          }
        >
          Support
        </NavLink>
      </nav>

      {/* Mobile Menu Toggle */}
      <div className="lg:hidden">
        <button
          onClick={toggleMobileMenu}
          className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
          aria-expanded="false"
        >
          <span className="sr-only">Open main menu</span>
          {isMobileMenuOpen ? (
            <X className="block h-6 w-6" aria-hidden="true" />
          ) : (
            <Menu className="block h-6 w-6" aria-hidden="true" />
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden">
          <div className="fixed inset-0 z-50 bg-black bg-opacity-50">
            <div className="fixed inset-y-0 right-0 w-full max-w-sm bg-gray-900 shadow-xl">
              <div className="flex items-center justify-between px-4 py-6">
                <h2 className="text-lg font-medium text-white">Menu</h2>
                <button
                  onClick={toggleMobileMenu}
                  className="rounded-md p-2 text-gray-400 hover:text-white hover:bg-gray-700"
                >
                  <X className="h-6 w-6" />
                </button>
              </div>
              <div className="px-4 py-6 space-y-4">
                <Link to="/" className="block px-3 py-2 text-base font-medium text-gray-300 hover:text-white hover:bg-gray-700 rounded-md">
                  Home
                </Link>
                <Link to="/services" className="block px-3 py-2 text-base font-medium text-gray-300 hover:text-white hover:bg-gray-700 rounded-md">
                  Services
                </Link>
                <Link to="/solutions" className="block px-3 py-2 text-base font-medium text-gray-300 hover:text-white hover:bg-gray-700 rounded-md">
                  Solutions
                </Link>
                <Link to="/about" className="block px-3 py-2 text-base font-medium text-gray-300 hover:text-white hover:bg-gray-700 rounded-md">
                  About
                </Link>
                <Link to="/contact" className="block px-3 py-2 text-base font-medium text-gray-300 hover:text-white hover:bg-gray-700 rounded-md">
                  Contact
                </Link>
                <Link to="/pricing" className="block px-3 py-2 text-base font-medium text-gray-300 hover:text-white hover:bg-gray-700 rounded-md">
                  Pricing
                </Link>
                <Link to="/support" className="block px-3 py-2 text-base font-medium text-gray-300 hover:text-white hover:bg-gray-700 rounded-md">
                  Support
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
