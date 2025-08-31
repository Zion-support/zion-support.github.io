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
  ShoppingCart,
  Calendar,
  Handshake,
  BookOpen,
  Video,
  GraduationCap,
  PenTool,
  FileText as FileTextIcon,
  Briefcase,
  Globe as GlobeIcon,
  Users as UsersIcon,
  Building as BuildingIcon,
  Shield as ShieldIcon,
  Zap as ZapIcon2,
  Brain as BrainIcon,
  Server as ServerIcon,
  Cloud as CloudIcon,
  Lock as LockIcon,
  BarChart as BarChartIcon,
  Cpu as CpuIcon,
  Workflow as WorkflowIcon,
  Database as DatabaseIcon,
  Target as TargetIcon,
  Rocket as RocketIcon,
  Lightbulb as LightbulbIcon,
  Code as CodeIcon,
  Monitor as MonitorIcon,
  Smartphone as SmartphoneIcon,
  Network as NetworkIcon,
  Wifi as WifiIcon,
  Activity as ActivityIcon,
  Eye as EyeIcon,
  Search as SearchIcon,
  Settings as SettingsIcon,
  Palette as PaletteIcon2,
  Phone as PhoneIcon,
  Mail as MailIcon,
  MapPin as MapPinIcon,
  Clock as ClockIcon,
  DollarSign as DollarSignIcon,
  Atom as AtomIcon,
  Leaf as LeafIcon,
  Gamepad2 as GamepadIcon,
  Coins as CoinsIcon,
  Satellite as SatelliteIcon,
  MessageCircle as MessageCircleIcon,
  Star as StarIcon,
  Users2 as Users2Icon,
  Cog as CogIcon
} from 'lucide-react';

interface MainNavigationProps {
  className?: string;
}

export function MainNavigation({ className }: MainNavigationProps) {
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [isSolutionsOpen, setIsSolutionsOpen] = useState(false);
  const [isCompanyOpen, setIsCompanyOpen] = useState(false);
  const [isResourcesOpen, setIsResourcesOpen] = useState(false);

  return (
    <nav className={cn("hidden md:flex items-center space-x-6", className)}>
      <NavLink 
        to="/" 
        className={({ isActive }) => 
          cn("text-sm font-medium transition-colors hover:text-primary", 
            isActive ? "text-zion-cyan" : "text-muted-foreground"
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
          <Zap className="w-4 h-4"/>
          <span>Services</span>
          <ChevronDown className="w-3 h-3"/>
        </button>
        {isServicesOpen && (
          <div 
            onMouseEnter={() => setIsServicesOpen(true)} 
            onMouseLeave={() => setIsServicesOpen(false)} 
            className="absolute top-full left-0 mt-2 w-[800px] bg-zion-blue-dark border border-zion-purple/30 rounded-lg shadow-2xl shadow-zion-purple/20 z-50"
          >
            <div className="p-6">
              <div className="grid grid-cols-3 gap-6">
                {/* AI & Automation Services */}
                <div>
                  <h4 className="text-zion-cyan font-semibold mb-4 flex items-center">
                    <Brain className="w-4 h-4 mr-2"/>
                    AI & Automation
                  </h4>
                  <ul className="space-y-3 text-sm">
                    <li>
                      <Link to="/services/ai-enterprise-automation-platform" className="text-zion-slate-light hover:text-zion-cyan transition-colors flex items-center">
                        <Brain className="w-3 h-3 mr-2" />
                        AI Enterprise Automation
                      </Link>
                    </li>
                    <li>
                      <Link to="/services/ai-enterprise-intelligence-platform" className="text-zion-slate-light hover:text-zion-cyan transition-colors flex items-center">
                        <Brain className="w-3 h-3 mr-2" />
                        AI Enterprise Intelligence
                      </Link>
                    </li>
                    <li>
                      <Link to="/services/ai-data-analytics-platform" className="text-zion-slate-light hover:text-zion-cyan transition-colors flex items-center">
                        <BarChart3 className="w-3 h-3 mr-2" />
                        AI Data Analytics
                      </Link>
                    </li>
                    <li>
                      <Link to="/services/ai-business-intelligence" className="text-zion-slate-light hover:text-zion-cyan transition-colors flex items-center">
                        <TrendingUp className="w-3 h-3 mr-2" />
                        AI Business Intelligence
                      </Link>
                    </li>
                    <li>
                      <Link to="/services/ai-cybersecurity-platform" className="text-zion-slate-light hover:text-zion-cyan transition-colors flex items-center">
                        <Shield className="w-3 h-3 mr-2" />
                        AI Cybersecurity
                      </Link>
                    </li>
                    <li>
                      <Link to="/services/ai-autonomous-research-assistant" className="text-zion-slate-light hover:text-zion-cyan transition-colors flex items-center">
                        <Brain className="w-3 h-3 mr-2" />
                        AI Research Assistant
                      </Link>
                    </li>
                    <li>
                      <Link to="/services/ai-financial-trading-platform" className="text-zion-slate-light hover:text-zion-cyan transition-colors flex items-center">
                        <TrendingUp className="w-3 h-3 mr-2" />
                        AI Trading Platform
                      </Link>
                    </li>
                    <li>
                      <Link to="/services/ai-healthcare-platform" className="text-zion-slate-light hover:text-zion-cyan transition-colors flex items-center">
                        <Brain className="w-3 h-3 mr-2" />
                        AI Healthcare
                      </Link>
                    </li>
                    <li>
                      <Link to="/services/ai-quantum-hybrid-platform" className="text-zion-slate-light hover:text-zion-cyan transition-colors flex items-center">
                        <Atom className="w-3 h-3 mr-2" />
                        Quantum AI Platform
                      </Link>
                    </li>
                    <li>
                      <Link to="/services/ai-quantum-neural-network-platform" className="text-zion-slate-light hover:text-zion-cyan transition-colors flex items-center">
                        <Atom className="w-3 h-3 mr-2" />
                        Quantum Neural Networks
                      </Link>
                    </li>
                    <li>
                      <Link to="/services/ai-supply-chain-optimization" className="text-zion-slate-light hover:text-zion-cyan transition-colors flex items-center">
                        <Workflow className="w-3 h-3 mr-2" />
                        Supply Chain AI
                      </Link>
                    </li>
                    <li>
                      <Link to="/services/ai-sales-copilot" className="text-zion-slate-light hover:text-zion-cyan transition-colors flex items-center">
                        <TrendingUp className="w-3 h-3 mr-2" />
                        AI Sales Copilot
                      </Link>
                    </li>
                    <li>
                      <Link to="/services/ai-compliance-assistant" className="text-zion-slate-light hover:text-zion-cyan transition-colors flex items-center">
                        <Shield className="w-3 h-3 mr-2" />
                        AI Compliance Assistant
                      </Link>
                    </li>
                    <li>
                      <Link to="/services/ai-content-creation-studio" className="text-zion-slate-light hover:text-zion-cyan transition-colors flex items-center">
                        <PenTool className="w-3 h-3 mr-2" />
                        AI Content Studio
                      </Link>
                    </li>
                  </ul>
                </div>

                {/* IT & Infrastructure Services */}
                <div>
                  <h4 className="text-zion-cyan font-semibold mb-4 flex items-center">
                    <Server className="w-4 h-4 mr-2"/>
                    IT & Infrastructure
                  </h4>
                  <ul className="space-y-3 text-sm">
                    <li>
                      <Link to="/services/it-infrastructure-management" className="text-zion-slate-light hover:text-zion-cyan transition-colors flex items-center">
                        <Server className="w-3 h-3 mr-2" />
                        Infrastructure Management
                      </Link>
                    </li>
                    <li>
                      <Link to="/services/cloud-devops" className="text-zion-slate-light hover:text-zion-cyan transition-colors flex items-center">
                        <Cloud className="w-3 h-3 mr-2" />
                        Cloud & DevOps
                      </Link>
                    </li>
                    <li>
                      <Link to="/services/cybersecurity" className="text-zion-slate-light hover:text-zion-cyan transition-colors flex items-center">
                        <Lock className="w-3 h-3 mr-2" />
                        Cybersecurity
                      </Link>
                    </li>
                    <li>
                      <Link to="/services/quantum-computing-solutions" className="text-zion-slate-light hover:text-zion-cyan transition-colors flex items-center">
                        <Atom className="w-3 h-3 mr-2" />
                        Quantum Computing
                      </Link>
                    </li>
                    <li>
                      <Link to="/services/edge-computing-solutions" className="text-zion-slate-light hover:text-zion-cyan transition-colors flex items-center">
                        <Cpu className="w-3 h-3 mr-2" />
                        Edge Computing
                      </Link>
                    </li>
                    <li>
                      <Link to="/services/blockchain-enterprise-solutions" className="text-zion-slate-light hover:text-zion-cyan transition-colors flex items-center">
                        <Network className="w-3 h-3 mr-2" />
                        Blockchain Solutions
                      </Link>
                    </li>
                    <li>
                      <Link to="/services/iot-edge" className="text-zion-slate-light hover:text-zion-cyan transition-colors flex items-center">
                        <Wifi className="w-3 h-3 mr-2" />
                        IoT & Edge Computing
                      </Link>
                    </li>
                    <li>
                      <Link to="/services/digital-transformation" className="text-zion-slate-light hover:text-zion-cyan transition-colors flex items-center">
                        <Rocket className="w-3 h-3 mr-2" />
                        Digital Transformation
                      </Link>
                    </li>
                    <li>
                      <Link to="/services/cloud-finops-optimizer" className="text-zion-slate-light hover:text-zion-cyan transition-colors flex items-center">
                        <Cloud className="w-3 h-3 mr-2" />
                        Cloud FinOps
                      </Link>
                    </li>
                  </ul>
                </div>

                {/* Micro SaaS & Specialized Services */}
                <div>
                  <h4 className="text-zion-cyan font-semibold mb-4 flex items-center">
                    <Zap className="w-4 h-4 mr-2"/>
                    Micro SaaS & Specialized
                  </h4>
                  <ul className="space-y-3 text-sm">
                    <li>
                      <Link to="/services/micro-saas-solutions-comprehensive" className="text-zion-slate-light hover:text-zion-cyan transition-colors flex items-center">
                        <Zap className="w-3 h-3 mr-2" />
                        All Micro SaaS
                      </Link>
                    </li>
                    <li>
                      <Link to="/services/ai-customer-support-automation" className="text-zion-slate-light hover:text-zion-cyan transition-colors flex items-center">
                        <MessageCircle className="w-3 h-3 mr-2" />
                        AI Support Automation
                      </Link>
                    </li>
                    <li>
                      <Link to="/services/ai-workflow-orchestrator" className="text-zion-slate-light hover:text-zion-cyan transition-colors flex items-center">
                        <Workflow className="w-3 h-3 mr-2" />
                        AI Workflow Orchestrator
                      </Link>
                    </li>
                    <li>
                      <Link to="/services/ai-project-management-platform" className="text-zion-slate-light hover:text-zion-cyan transition-colors flex items-center">
                        <Calendar className="w-3 h-3 mr-2" />
                        AI Project Management
                      </Link>
                    </li>
                    <li>
                      <Link to="/services/ai-marketing-automation" className="text-zion-slate-light hover:text-zion-cyan transition-colors flex items-center">
                        <TrendingUp className="w-3 h-3 mr-2" />
                        AI Marketing Automation
                      </Link>
                    </li>
                    <li>
                      <Link to="/services/ai-predictive-maintenance" className="text-zion-slate-light hover:text-zion-cyan transition-colors flex items-center">
                        <Activity className="w-3 h-3 mr-2" />
                        AI Predictive Maintenance
                      </Link>
                    </li>
                    <li>
                      <Link to="/services/ai-hr-platform" className="text-zion-slate-light hover:text-zion-cyan transition-colors flex items-center">
                        <Users className="w-3 h-3 mr-2" />
                        AI HR Platform
                      </Link>
                    </li>
                    <li>
                      <Link to="/services/ai-financial-trading-risk-management" className="text-zion-slate-light hover:text-zion-cyan transition-colors flex items-center">
                        <Shield className="w-3 h-3 mr-2" />
                        AI Financial Risk Management
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
              
              {/* Bottom Links */}
              <div className="mt-6 pt-6 border-t border-zion-purple/20">
                <div className="grid grid-cols-3 gap-4">
                  <Link to="/services" className="text-zion-cyan hover:text-zion-cyan-light transition-colors text-sm font-medium flex items-center justify-center">
                    View All Services
                    <TrendingUp className="w-4 h-4 ml-2"/>
                  </Link>
                  <Link to="/innovative-services-showcase-2026" className="text-zion-purple hover:text-zion-purple-light transition-colors text-sm font-medium flex items-center justify-center">
                    Innovation Showcase 2026
                    <Rocket className="w-4 h-4 ml-2"/>
                  </Link>
                  <Link to="/comprehensive-services-showcase-2025" className="text-zion-cyan hover:text-zion-cyan-light transition-colors text-sm font-medium flex items-center justify-center">
                    Comprehensive Showcase 2025
                    <Star className="w-4 h-4 ml-2"/>
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
          <Brain className="w-4 h-4"/>
          <span>Solutions</span>
          <ChevronDown className="w-3 h-3"/>
        </button>
        {isSolutionsOpen && (
          <div 
            onMouseEnter={() => setIsSolutionsOpen(true)} 
            onMouseLeave={() => setIsSolutionsOpen(false)} 
            className="absolute top-full left-0 mt-2 w-80 bg-zion-blue-dark border border-zion-purple/30 rounded-lg shadow-2xl shadow-zion-purple/20 z-50"
          >
            <div className="p-6">
              <div className="grid grid-cols-2 gap-6">
                <div>
                  <h4 className="text-zion-cyan font-semibold mb-4 flex items-center">
                    <Users className="w-4 h-4 mr-2"/>
                    Industry Solutions
                  </h4>
                  <ul className="space-y-3 text-sm">
                    <li>
                      <Link to="/solutions/healthcare" className="text-zion-slate-light hover:text-zion-cyan transition-colors flex items-center">
                        <Shield className="w-3 h-3 mr-2" />
                        Healthcare
                      </Link>
                    </li>
                    <li>
                      <Link to="/solutions/financial" className="text-zion-slate-light hover:text-zion-cyan transition-colors flex items-center">
                        <DollarSign className="w-3 h-3 mr-2" />
                        Financial
                      </Link>
                    </li>
                    <li>
                      <Link to="/solutions/manufacturing" className="text-zion-slate-light hover:text-zion-cyan transition-colors flex items-center">
                        <Cog className="w-3 h-3 mr-2" />
                        Manufacturing
                      </Link>
                    </li>
                    <li>
                      <Link to="/solutions/government" className="text-zion-slate-light hover:text-zion-cyan transition-colors flex items-center">
                        <Building2 className="w-3 h-3 mr-2" />
                        Government
                      </Link>
                    </li>
                    <li>
                      <Link to="/solutions/retail" className="text-zion-slate-light hover:text-zion-cyan transition-colors flex items-center">
                        <ShoppingCart className="w-3 h-3 mr-2" />
                        Retail
                      </Link>
                    </li>
                  </ul>
                </div>
                <div>
                  <h4 className="text-zion-cyan font-semibold mb-4 flex items-center">
                    <HardDrive className="w-4 h-4 mr-2"/>
                    Technology Solutions
                  </h4>
                  <ul className="space-y-3 text-sm">
                    <li>
                      <Link to="/solutions/quantum-edge-computing" className="text-zion-slate-light hover:text-zion-cyan transition-colors flex items-center">
                        <Atom className="w-3 h-3 mr-2" />
                        Quantum Edge Computing
                      </Link>
                    </li>
                    <li>
                      <Link to="/solutions/ai-autonomous-business" className="text-zion-slate-light hover:text-zion-cyan transition-colors flex items-center">
                        <Brain className="w-3 h-3 mr-2" />
                        AI Autonomous Business
                      </Link>
                    </li>
                    <li>
                      <Link to="/solutions/blockchain-web3" className="text-zion-slate-light hover:text-zion-cyan transition-colors flex items-center">
                        <Network className="w-3 h-3 mr-2" />
                        Blockchain & Web3
                      </Link>
                    </li>
                    <li>
                      <Link to="/solutions/iot-edge-computing" className="text-zion-slate-light hover:text-zion-cyan transition-colors flex items-center">
                        <Wifi className="w-3 h-3 mr-2" />
                        IoT Edge Computing
                      </Link>
                    </li>
                    <li>
                      <Link to="/solutions/space-tech" className="text-zion-slate-light hover:text-zion-cyan transition-colors flex items-center">
                        <Satellite className="w-3 h-3 mr-2" />
                        Space Technology
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="mt-6 pt-6 border-t border-zion-purple/20">
                <Link to="/request-quote" className="text-zion-cyan hover:text-zion-cyan-light transition-colors text-sm font-medium flex items-center justify-center">
                  Get Custom Quote
                  <TrendingUp className="w-4 h-4 ml-2"/>
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
              </ul>
            </div>
          </div>
        )}
      </div>

      {/* Support */}
      <Link to="/help" className="text-zion-slate-light hover:text-white transition-colors flex items-center">
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


