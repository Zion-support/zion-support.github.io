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
  Microscope,
  Flask,
  TestTube,
  Beaker,
  Dna,
  Pill,
  Stethoscope,
  Car,
  Plane,
  Ship,
  Train,
  Building,
  Factory,
  Warehouse,
  Store,
  Bank,
  CreditCard,
  PiggyBank,
  ChartLine,
  PieChart,
  TrendingDown,
  AlertTriangle,
  CheckCircle,
  Clock,
  Calendar,
  UserCheck,
  UserPlus,
  UserMinus,
  UserX,
  UserCog,
  UserEdit,
  UserSearch,
  UserVoice,
  UserHeart,
  UserStar,
  UserCheckCircle,
  UserPlusCircle,
  UserMinusCircle,
  UserXCircle,
  UserCogCircle,
  UserEditCircle,
  UserSearchCircle,
  UserVoiceCircle,
  UserHeartCircle,
  UserStarCircle,
  Briefcase,
  PenTool,
  Calculator
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
              className="absolute top-full left-0 mt-2 w-[1400px] bg-zion-blue-dark border border-zion-purple/30 rounded-lg shadow-2xl shadow-zion-purple/20 z-50"
            >
              <div className="p-6">
                <div className="grid grid-cols-5 gap-8">
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
                      <li>
                        <Link to="/services/ai-autonomous-logistics-platform" className="text-zion-slate-light hover:text-zion-cyan transition-colors flex items-center group">
                          <Truck className="w-4 h-4 mr-3 group-hover:scale-110 transition-transform" />
                          <span>AI Autonomous Logistics</span>
                        </Link>
                      </li>
                      <li>
                        <Link to="/services/ai-autonomous-financial-advisor-platform" className="text-zion-slate-light hover:text-zion-cyan transition-colors flex items-center group">
                          <Brain className="w-4 h-4 mr-3 group-hover:scale-110 transition-transform" />
                          <span>AI Autonomous Financial Advisor</span>
                        </Link>
                      </li>
                      <li>
                        <Link to="/services/ai-autonomous-healthcare-diagnostics-platform" className="text-zion-slate-light hover:text-zion-cyan transition-colors flex items-center group">
                          <Heart className="w-4 h-4 mr-3 group-hover:scale-110 transition-transform" />
                          <span>AI Autonomous Healthcare Diagnostics</span>
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
                        <Link to="/services/blockchain-enterprise-solutions" className="text-zion-slate-light hover:text-zion-cyan transition-colors flex items-center group">
                          <Network className="w-4 h-4 mr-3 group-hover:scale-110 transition-transform" />
                          <span>Blockchain Solutions</span>
                        </Link>
                      </li>
                      <li>
                        <Link to="/services/quantum-computing" className="text-zion-slate-light hover:text-zion-cyan transition-colors flex items-center group">
                          <Atom className="w-4 h-4 mr-3 group-hover:scale-110 transition-transform" />
                          <span>Quantum Computing</span>
                        </Link>
                      </li>
                      <li>
                        <Link to="/services/iot-edge-computing" className="text-zion-slate-light hover:text-zion-cyan transition-colors flex items-center group">
                          <Wifi className="w-4 h-4 mr-3 group-hover:scale-110 transition-transform" />
                          <span>IoT & Edge Computing</span>
                        </Link>
                      </li>
                    </ul>
                  </div>

                  {/* Micro SaaS Solutions Column */}
                  <div className="space-y-4">
                    <div className="flex items-center space-x-3 pb-3 border-b border-zion-purple/20">
                      <div className="p-2 bg-zion-blue/20 rounded-lg">
                        <Rocket className="w-5 h-5 text-zion-blue"/>
                      </div>
                      <h4 className="text-zion-blue font-bold text-lg">Micro SaaS</h4>
                    </div>
                    <ul className="space-y-3">
                      <li>
                        <Link to="/micro-saas" className="text-zion-slate-light hover:text-zion-cyan transition-colors flex items-center">
                          <Rocket className="w-3 h-3 mr-2" />
                          Micro SaaS Overview
                        </Link>
                      </li>
                      <li>
                        <Link to="/services/ai-customer-success-automation" className="text-zion-slate-light hover:text-zion-cyan transition-colors flex items-center group">
                          <UserCheck className="w-4 h-4 mr-3 group-hover:scale-110 transition-transform" />
                          <span>Customer Success Automation</span>
                        </Link>
                      </li>
                      <li>
                        <Link to="/services/ai-supply-chain-optimization-enhanced" className="text-zion-slate-light hover:text-zion-cyan transition-colors flex items-center group">
                          <Truck className="w-4 h-4 mr-3 group-hover:scale-110 transition-transform" />
                          <span>Supply Chain Optimization</span>
                        </Link>
                      </li>
                      <li>
                        <Link to="/services/ai-financial-risk-management-enhanced" className="text-zion-slate-light hover:text-zion-cyan transition-colors flex items-center group">
                          <Shield className="w-4 h-4 mr-3 group-hover:scale-110 transition-transform" />
                          <span>Financial Risk Management</span>
                        </Link>
                      </li>
                      <li>
                        <Link to="/services/ai-healthcare-analytics-platform" className="text-zion-slate-light hover:text-zion-cyan transition-colors flex items-center group">
                          <Heart className="w-4 h-4 mr-3 group-hover:scale-110 transition-transform" />
                          <span>Healthcare Analytics</span>
                        </Link>
                      </li>
                      <li>
                        <Link to="/services/ai-legal-document-automation-platform" className="text-zion-slate-light hover:text-zion-cyan transition-colors flex items-center group">
                          <FileText className="w-4 h-4 mr-3 group-hover:scale-110 transition-transform" />
                          <span>Legal Document Automation</span>
                        </Link>
                      </li>
                      <li>
                        <Link to="/services/ai-autonomous-legal-research-platform" className="text-zion-slate-light hover:text-zion-cyan transition-colors flex items-center group">
                          <Search className="w-4 h-4 mr-3 group-hover:scale-110 transition-transform" />
                          <span>AI Legal Research Platform</span>
                        </Link>
                      </li>
                      <li>
                        <Link to="/services/ai-sustainability-management-platform" className="text-zion-slate-light hover:text-zion-cyan transition-colors flex items-center group">
                          <Leaf className="w-4 h-4 mr-3 group-hover:scale-110 transition-transform" />
                          <span>AI Sustainability Management</span>
                        </Link>
                      </li>
                    </ul>
                  </div>

                  {/* Industry Solutions Column */}
                  <div className="space-y-4">
                    <div className="flex items-center space-x-3 pb-3 border-b border-zion-purple/20">
                      <div className="p-2 bg-zion-green/20 rounded-lg">
                        <Building2 className="w-5 h-5 text-zion-green"/>
                      </div>
                      <h4 className="text-zion-green font-bold text-lg">Industry Solutions</h4>
                    </div>
                    <ul className="space-y-3">
                      <li>
                        <Link to="/solutions/enterprise" className="text-zion-slate-light hover:text-zion-cyan transition-colors flex items-center">
                          <Building2 className="w-3 h-3 mr-2" />
                          Enterprise Solutions
                        </Link>
                      </li>
                      <li>
                        <Link to="/solutions/healthcare" className="text-zion-slate-light hover:text-zion-cyan transition-colors flex items-center group">
                          <Heart className="w-4 h-4 mr-3 group-hover:scale-110 transition-transform" />
                          <span>Healthcare</span>
                        </Link>
                      </li>
                      <li>
                        <Link to="/solutions/financial" className="text-zion-slate-light hover:text-zion-cyan transition-colors flex items-center group">
                          <Bank className="w-4 h-4 mr-3 group-hover:scale-110 transition-transform" />
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
                          <Store className="w-4 h-4 mr-3 group-hover:scale-110 transition-transform" />
                          <span>Retail & E-commerce</span>
                        </Link>
                      </li>
                      <li>
                        <Link to="/solutions/transportation" className="text-zion-slate-light hover:text-zion-cyan transition-colors flex items-center group">
                          <Truck className="w-4 h-4 mr-3 group-hover:scale-110 transition-transform" />
                          <span>Transportation & Logistics</span>
                        </Link>
                      </li>
                    </ul>
                  </div>

                  {/* Research & Development Column */}
                  <div className="space-y-4">
                    <div className="flex items-center space-x-3 pb-3 border-b border-zion-purple/20">
                      <div className="p-2 bg-zion-orange/20 rounded-lg">
                        <Flask className="w-5 h-5 text-zion-orange"/>
                      </div>
                      <h4 className="text-zion-orange font-bold text-lg">R&D & Innovation</h4>
                    </div>
                    <ul className="space-y-3">
                      <li>
                        <Link to="/research" className="text-zion-slate-light hover:text-zion-cyan transition-colors flex items-center">
                          <Flask className="w-3 h-3 mr-2" />
                          Research Overview
                        </Link>
                      </li>
                      <li>
                        <Link to="/research-development" className="text-zion-slate-light hover:text-zion-cyan transition-colors flex items-center group">
                          <Microscope className="w-4 h-4 mr-3 group-hover:scale-110 transition-transform" />
                          <span>R&D Projects</span>
                        </Link>
                      </li>
                      <li>
                        <Link to="/services/ai-space-technology-platform" className="text-zion-slate-light hover:text-zion-cyan transition-colors flex items-center group">
                          <Satellite className="w-4 h-4 mr-3 group-hover:scale-110 transition-transform" />
                          <span>Space Technology</span>
                        </Link>
                      </li>
                      <li>
                        <Link to="/services/ai-quantum-computing-solutions" className="text-zion-slate-light hover:text-zion-cyan transition-colors flex items-center group">
                          <Atom className="w-4 h-4 mr-3 group-hover:scale-110 transition-transform" />
                          <span>Quantum Computing</span>
                        </Link>
                      </li>
                      <li>
                        <Link to="/services/ai-carbon-footprint-management-platform" className="text-zion-slate-light hover:text-zion-cyan transition-colors flex items-center group">
                          <Leaf className="w-4 h-4 mr-3 group-hover:scale-110 transition-transform" />
                          <span>Sustainability Tech</span>
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
              className="absolute top-full left-0 mt-2 w-[800px] bg-zion-blue-dark border border-zion-purple/30 rounded-lg shadow-2xl shadow-zion-purple/20 z-50"
            >
              <div className="p-6">
                <div className="grid grid-cols-3 gap-8">
                  {/* Enterprise Solutions */}
                  <div className="space-y-4">
                    <div className="flex items-center space-x-3 pb-3 border-b border-zion-purple/20">
                      <div className="p-2 bg-zion-cyan/20 rounded-lg">
                        <Building2 className="w-5 h-5 text-zion-cyan"/>
                      </div>
                      <h4 className="text-zion-cyan font-bold text-lg">Enterprise</h4>
                    </div>
                    <ul className="space-y-3">
                      <li>
                        <Link to="/solutions/enterprise" className="text-zion-slate-light hover:text-zion-cyan transition-colors flex items-center group">
                          <Building2 className="w-4 h-4 mr-3 group-hover:scale-110 transition-transform" />
                          <span>Enterprise Solutions</span>
                        </Link>
                      </li>
                      <li>
                        <Link to="/solutions/digital-transformation" className="text-zion-slate-light hover:text-zion-cyan transition-colors flex items-center group">
                          <Rocket className="w-4 h-4 mr-3 group-hover:scale-110 transition-transform" />
                          <span>Digital Transformation</span>
                        </Link>
                      </li>
                      <li>
                        <Link to="/solutions/cloud-migration" className="text-zion-slate-light hover:text-zion-cyan transition-colors flex items-center group">
                          <Cloud className="w-4 h-4 mr-3 group-hover:scale-110 transition-transform" />
                          <span>Cloud Migration</span>
                        </Link>
                      </li>
                      <li>
                        <Link to="/solutions/cybersecurity" className="text-zion-slate-light hover:text-zion-cyan transition-colors flex items-center group">
                          <Shield className="w-4 h-4 mr-3 group-hover:scale-110 transition-transform" />
                          <span>Cybersecurity</span>
                        </Link>
                      </li>
                    </ul>
                  </div>

                  {/* Industry Solutions */}
                  <div className="space-y-4">
                    <div className="flex items-center space-x-3 pb-3 border-b border-zion-purple/20">
                      <div className="p-2 bg-zion-purple/20 rounded-lg">
                        <Factory className="w-5 h-5 text-zion-purple"/>
                      </div>
                      <h4 className="text-zion-purple font-bold text-lg">Industries</h4>
                    </div>
                    <ul className="space-y-3">
                      <li>
                        <Link to="/solutions/healthcare" className="text-zion-slate-light hover:text-zion-cyan transition-colors flex items-center group">
                          <Heart className="w-4 h-4 mr-3 group-hover:scale-110 transition-transform" />
                          <span>Healthcare</span>
                        </Link>
                      </li>
                      <li>
                        <Link to="/solutions/financial" className="text-zion-slate-light hover:text-zion-cyan transition-colors flex items-center group">
                          <Bank className="w-4 h-4 mr-3 group-hover:scale-110 transition-transform" />
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
                          <Store className="w-4 h-4 mr-3 group-hover:scale-110 transition-transform" />
                          <span>Retail & E-commerce</span>
                        </Link>
                      </li>
                    </ul>
                  </div>

                  {/* Technology Solutions */}
                  <div className="space-y-4">
                    <div className="flex items-center space-x-3 pb-3 border-b border-zion-purple/20">
                      <div className="p-2 bg-zion-blue/20 rounded-lg">
                        <Cpu className="w-5 h-5 text-zion-blue"/>
                      </div>
                      <h4 className="text-zion-blue font-bold text-lg">Technologies</h4>
                    </div>
                    <ul className="space-y-3">
                      <li>
                        <Link to="/solutions/ai" className="text-zion-slate-light hover:text-zion-cyan transition-colors flex items-center group">
                          <Brain className="w-4 h-4 mr-3 group-hover:scale-110 transition-transform" />
                          <span>AI & Machine Learning</span>
                        </Link>
                      </li>
                      <li>
                        <Link to="/solutions/blockchain" className="text-zion-slate-light hover:text-zion-cyan transition-colors flex items-center group">
                          <Network className="w-4 h-4 mr-3 group-hover:scale-110 transition-transform" />
                          <span>Blockchain & Web3</span>
                        </Link>
                      </li>
                      <li>
                        <Link to="/solutions/quantum" className="text-zion-slate-light hover:text-zion-cyan transition-colors flex items-center group">
                          <Atom className="w-4 h-4 mr-3 group-hover:scale-110 transition-transform" />
                          <span>Quantum Computing</span>
                        </Link>
                      </li>
                      <li>
                        <Link to="/solutions/iot" className="text-zion-slate-light hover:text-zion-cyan transition-colors flex items-center group">
                          <Wifi className="w-4 h-4 mr-3 group-hover:scale-110 transition-transform" />
                          <span>IoT & Edge Computing</span>
                        </Link>
                      </li>
                    </ul>
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
              className="absolute top-full left-0 mt-2 w-[600px] bg-zion-blue-dark border border-zion-purple/30 rounded-lg shadow-2xl shadow-zion-purple/20 z-50"
            >
              <div className="p-6">
                <div className="grid grid-cols-2 gap-8">
                  {/* About & Team */}
                  <div className="space-y-4">
                    <div className="flex items-center space-x-3 pb-3 border-b border-zion-purple/20">
                      <div className="p-2 bg-zion-cyan/20 rounded-lg">
                        <Users className="w-5 h-5 text-zion-cyan"/>
                      </div>
                      <h4 className="text-zion-cyan font-bold text-lg">About & Team</h4>
                    </div>
                    <ul className="space-y-3">
                      <li>
                        <Link to="/about" className="text-zion-slate-light hover:text-zion-cyan transition-colors flex items-center group">
                          <Building2 className="w-4 h-4 mr-3 group-hover:scale-110 transition-transform" />
                          <span>About Us</span>
                        </Link>
                      </li>
                      <li>
                        <Link to="/team" className="text-zion-slate-light hover:text-zion-cyan transition-colors flex items-center group">
                          <Users className="w-4 h-4 mr-3 group-hover:scale-110 transition-transform" />
                          <span>Our Team</span>
                        </Link>
                      </li>
                      <li>
                        <Link to="/careers" className="text-zion-slate-light hover:text-zion-cyan transition-colors flex items-center group">
                          <Briefcase className="w-4 h-4 mr-3 group-hover:scale-110 transition-transform" />
                          <span>Careers</span>
                        </Link>
                      </li>
                      <li>
                        <Link to="/contact" className="text-zion-slate-light hover:text-zion-cyan transition-colors flex items-center group">
                          <Phone className="w-4 h-4 mr-3 group-hover:scale-110 transition-transform" />
                          <span>Contact Us</span>
                        </Link>
                      </li>
                    </ul>
                  </div>

                  {/* Business & Partners */}
                  <div className="space-y-4">
                    <div className="flex items-center space-x-3 pb-3 border-b border-zion-purple/20">
                      <div className="p-2 bg-zion-purple/20 rounded-lg">
                        <Handshake className="w-5 h-5 text-zion-purple"/>
                      </div>
                      <h4 className="text-zion-purple font-bold text-lg">Business</h4>
                    </div>
                    <ul className="space-y-3">
                      <li>
                        <Link to="/partners" className="text-zion-slate-light hover:text-zion-cyan transition-colors flex items-center group">
                          <Handshake className="w-4 h-4 mr-3 group-hover:scale-110 transition-transform" />
                          <span>Partners</span>
                        </Link>
                      </li>
                      <li>
                        <Link to="/investors" className="text-zion-slate-light hover:text-zion-cyan transition-colors flex items-center group">
                          <DollarSign className="w-4 h-4 mr-3 group-hover:scale-110 transition-transform" />
                          <span>Investors</span>
                        </Link>
                      </li>
                      <li>
                        <Link to="/press" className="text-zion-slate-light hover:text-zion-cyan transition-colors flex items-center group">
                          <FileText className="w-4 h-4 mr-3 group-hover:scale-110 transition-transform" />
                          <span>Press & Media</span>
                        </Link>
                      </li>
                      <li>
                        <Link to="/legal" className="text-zion-slate-light hover:text-zion-cyan transition-colors flex items-center group">
                          <Scale className="w-4 h-4 mr-3 group-hover:scale-110 transition-transform" />
                          <span>Legal</span>
                        </Link>
                      </li>
                    </ul>
                  </div>
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
            <BookOpen className="w-4 h-4" />
            <span>Resources</span>
            <ChevronDown className="w-3 h-3" />
          </button>
          {isResourcesOpen && (
            <div
              onMouseEnter={() => setIsResourcesOpen(true)}
              onMouseLeave={() => setIsResourcesOpen(false)}
              className="absolute top-full left-0 mt-2 w-[800px] bg-zion-blue-dark border border-zion-purple/30 rounded-lg shadow-2xl shadow-zion-purple/20 z-50"
            >
              <div className="p-6">
                <div className="grid grid-cols-3 gap-8">
                  {/* Learning & Training */}
                  <div className="space-y-4">
                    <div className="flex items-center space-x-3 pb-3 border-b border-zion-purple/20">
                      <div className="p-2 bg-zion-cyan/20 rounded-lg">
                        <GraduationCap className="w-5 h-5 text-zion-cyan"/>
                      </div>
                      <h4 className="text-zion-cyan font-bold text-lg">Learning</h4>
                    </div>
                    <ul className="space-y-3">
                      <li>
                        <Link to="/training" className="text-zion-slate-light hover:text-zion-cyan transition-colors flex items-center group">
                          <GraduationCap className="w-4 h-4 mr-3 group-hover:scale-110 transition-transform" />
                          <span>Training Programs</span>
                        </Link>
                      </li>
                      <li>
                        <Link to="/webinars" className="text-zion-slate-light hover:text-zion-cyan transition-colors flex items-center group">
                          <Video className="w-4 h-4 mr-3 group-hover:scale-110 transition-transform" />
                          <span>Webinars</span>
                        </Link>
                      </li>
                      <li>
                        <Link to="/white-papers" className="text-zion-slate-light hover:text-zion-cyan transition-colors flex items-center group">
                          <FileText className="w-4 h-4 mr-3 group-hover:scale-110 transition-transform" />
                          <span>White Papers</span>
                        </Link>
                      </li>
                      <li>
                        <Link to="/research" className="text-zion-slate-light hover:text-zion-cyan transition-colors flex items-center group">
                          <Flask className="w-4 h-4 mr-3 group-hover:scale-110 transition-transform" />
                          <span>Research</span>
                        </Link>
                      </li>
                    </ul>
                  </div>

                  {/* Documentation & Support */}
                  <div className="space-y-4">
                    <div className="flex items-center space-x-3 pb-3 border-b border-zion-purple/20">
                      <div className="p-2 bg-zion-purple/20 rounded-lg">
                        <FileText className="w-5 h-5 text-zion-purple"/>
                      </div>
                      <h4 className="text-zion-purple font-bold text-lg">Documentation</h4>
                    </div>
                    <ul className="space-y-3">
                      <li>
                        <Link to="/docs" className="text-zion-slate-light hover:text-zion-cyan transition-colors flex items-center group">
                          <FileText className="w-4 h-4 mr-3 group-hover:scale-110 transition-transform" />
                          <span>API Documentation</span>
                        </Link>
                      </li>
                      <li>
                        <Link to="/help" className="text-zion-slate-light hover:text-zion-cyan transition-colors flex items-center group">
                          <HelpCircle className="w-4 h-4 mr-3 group-hover:scale-110 transition-transform" />
                          <span>Help Center</span>
                        </Link>
                      </li>
                      <li>
                        <Link to="/community" className="text-zion-slate-light hover:text-zion-cyan transition-colors flex items-center group">
                          <Users2 className="w-4 h-4 mr-3 group-hover:scale-110 transition-transform" />
                          <span>Community</span>
                        </Link>
                      </li>
                      <li>
                        <Link to="/blog" className="text-zion-slate-light hover:text-zion-cyan transition-colors flex items-center group">
                          <PenTool className="w-4 h-4 mr-3 group-hover:scale-110 transition-transform" />
                          <span>Blog</span>
                        </Link>
                      </li>
                    </ul>
                  </div>

                  {/* Tools & Calculators */}
                  <div className="space-y-4">
                    <div className="flex items-center space-x-3 pb-3 border-b border-zion-purple/20">
                      <div className="p-2 bg-zion-blue/20 rounded-lg">
                        <Settings className="w-5 h-5 text-zion-blue"/>
                      </div>
                      <h4 className="text-zion-blue font-bold text-lg">Tools</h4>
                    </div>
                    <ul className="space-y-3">
                      <li>
                        <Link to="/tools/roi-calculator" className="text-zion-slate-light hover:text-zion-cyan transition-colors flex items-center group">
                          <Calculator className="w-4 h-4 mr-3 group-hover:scale-110 transition-transform" />
                          <span>ROI Calculator</span>
                        </Link>
                      </li>
                      <li>
                        <Link to="/tools/security-assessment" className="text-zion-slate-light hover:text-zion-cyan transition-colors flex items-center group">
                          <Shield className="w-4 h-4 mr-3 group-hover:scale-110 transition-transform" />
                          <span>Security Assessment</span>
                        </Link>
                      </li>
                      <li>
                        <Link to="/tools/performance-monitor" className="text-zion-slate-light hover:text-zion-cyan transition-colors flex items-center group">
                          <Activity className="w-4 h-4 mr-3 group-hover:scale-110 transition-transform" />
                          <span>Performance Monitor</span>
                        </Link>
                      </li>
                      <li>
                        <Link to="/tools/ai-demo" className="text-zion-slate-light hover:text-zion-cyan transition-colors flex items-center group">
                          <Brain className="w-4 h-4 mr-3 group-hover:scale-110 transition-transform" />
                          <span>AI Demo</span>
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Direct Links */}
        <NavLink 
          to="/pricing" 
          className={({ isActive }) => 
            cn("text-sm font-medium transition-colors hover:text-primary px-3 py-2 rounded-md", 
              isActive ? "text-zion-cyan bg-zion-cyan/10" : "text-muted-foreground hover:text-zion-cyan hover:bg-zion-cyan/5"
            )
          }
        >
          <DollarSign className="w-4 h-4 inline mr-2" />
          Pricing
        </NavLink>

        <NavLink 
          to="/contact" 
          className={({ isActive }) => 
            cn("text-sm font-medium transition-colors hover:text-primary px-3 py-2 rounded-md", 
              isActive ? "text-zion-cyan bg-zion-cyan/10" : "text-muted-foreground hover:text-zion-cyan hover:bg-zion-cyan/5"
            )
          }
        >
          <Phone className="w-4 h-4 inline mr-2" />
          Contact
        </NavLink>
      </nav>

      {/* Mobile Navigation */}
      <div className="lg:hidden">
        <button
          onClick={toggleMobileMenu}
          className="flex items-center space-x-2 text-sm font-medium text-muted-foreground hover:text-primary"
        >
          <Menu className="w-5 h-5" />
          <span>Menu</span>
        </button>
        
        {isMobileMenuOpen && (
          <div className="absolute top-full left-0 right-0 mt-2 bg-zion-blue-dark border border-zion-purple/30 rounded-lg shadow-2xl shadow-zion-purple/20 z-50">
            <div className="p-4 space-y-4">
              {/* Mobile Menu Items */}
              <div className="space-y-2">
                <Link to="/" className="block px-4 py-2 text-zion-slate-light hover:text-zion-cyan hover:bg-zion-cyan/5 rounded-md transition-colors">
                  <Home className="w-4 h-4 inline mr-3" />
                  Home
                </Link>
                
                <div className="px-4 py-2">
                  <div className="text-zion-cyan font-semibold mb-2">Services</div>
                  <div className="space-y-1 ml-4">
                    <Link to="/ai-services" className="block py-1 text-zion-slate-light hover:text-zion-cyan transition-colors">
                      AI & Automation
                    </Link>
                    <Link to="/it-services" className="block py-1 text-zion-slate-light hover:text-zion-cyan transition-colors">
                      IT & Infrastructure
                    </Link>
                    <Link to="/micro-saas" className="block py-1 text-zion-slate-light hover:text-zion-cyan transition-colors">
                      Micro SaaS
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
                </div>
                
                <div className="px-4 py-2">
                  <div className="text-zion-cyan font-semibold mb-2">Solutions</div>
                  <div className="space-y-1 ml-4">
                    <Link to="/solutions/enterprise" className="block py-1 text-zion-slate-light hover:text-zion-cyan transition-colors">
                      Enterprise
                    </Link>
                    <Link to="/solutions/healthcare" className="block py-1 text-zion-slate-light hover:text-zion-cyan transition-colors">
                      Healthcare
                    </Link>
                    <Link to="/solutions/financial" className="block py-1 text-zion-slate-light hover:text-zion-cyan transition-colors">
                      Financial
                    </Link>
                  </div>
                </div>
                
                <Link to="/about" className="block px-4 py-2 text-zion-slate-light hover:text-zion-cyan hover:bg-zion-cyan/5 rounded-md transition-colors">
                  <Building2 className="w-4 h-4 inline mr-3" />
                  About
                </Link>
                
                <Link to="/pricing" className="block px-4 py-2 text-zion-slate-light hover:text-zion-cyan hover:bg-zion-cyan/5 rounded-md transition-colors">
                  <DollarSign className="w-4 h-4 inline mr-3" />
                  Pricing
                </Link>
                
                <Link to="/contact" className="block px-4 py-2 text-zion-slate-light hover:text-zion-cyan hover:bg-zion-cyan/5 rounded-md transition-colors">
                  <Phone className="w-4 h-4 inline mr-3" />
                  Contact
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
      <NavLink to="/" className={({ isActive }) => cn("text-sm font-medium transition-colors hover:text-primary", isActive ? "text-zion-cyan" : "text-muted-foreground")}>
        Home
      </NavLink>
      {/* Services Dropdown */}
      <div className="relative group">
        <button onMouseEnter={() => setIsServicesOpen(true)} onMouseLeave={() => setIsServicesOpen(false)} className="flex items-center space-x-1 text-sm font-medium transition-colors hover:text-primary text-muted-foreground">
          <Zap className="w-4 h-4"/>
          <span>Services</span>
          <ChevronDown className="w-3 h-3"/>
        </button>
        {isServicesOpen && (<div onMouseEnter={() => setIsServicesOpen(true)} onMouseLeave={() => setIsServicesOpen(false)} className="absolute top-full left-0 mt-2 w-96 bg-zion-blue-dark border border-zion-purple/30 rounded-lg shadow-2xl shadow-zion-purple/20 z-50">
            <div className="p-4">
              <div className="grid grid-cols-3 gap-4">
                <div>
                  <h4 className="text-zion-cyan font-semibold mb-3 flex items-center">
                    <Brain className="w-4 h-4 mr-2"/>
                    AI Solutions
                  </h4>
                  <ul className="space-y-2 text-sm">
                    <li><Link to="/ai-services" className="text-zion-slate-light hover:text-zion-cyan transition-colors">AI Services Overview</Link></li>
                    <li><Link to="/innovative-ai-services-2025" className="text-zion-slate-light hover:text-zion-cyan transition-colors">Innovative AI Services</Link></li>
                    <li><Link to="/services/ai-business-intelligence" className="text-zion-slate-light hover:text-zion-cyan transition-colors">AI Business Intelligence</Link></li>
                    <li><Link to="/services/ai-cybersecurity-suite" className="text-zion-slate-light hover:text-zion-cyan transition-colors">AI Cybersecurity</Link></li>
                    <li><Link to="/services/ai-marketing-automation" className="text-zion-slate-light hover:text-zion-cyan transition-colors">AI Marketing</Link></li>
                  </ul>
                </div>
                <div>
                  <h4 className="text-zion-cyan font-semibold mb-3 flex items-center">
                    <Zap className="w-4 h-4 mr-2"/>
                    Micro SAAS
                  </h4>
                  <ul className="space-y-2 text-sm">
                    <li><Link to="/micro-saas" className="text-zion-slate-light hover:text-zion-cyan transition-colors">Micro SAAS Overview</Link></li>
                    <li><Link to="/micro-saas-solutions-showcase-2025" className="text-zion-slate-light hover:text-zion-cyan transition-colors">Solutions Showcase</Link></li>
                    <li><Link to="/services/ai-project-management-platform" className="text-zion-slate-light hover:text-zion-cyan transition-colors">AI Project Manager</Link></li>
                    <li><Link to="/services/finops-advisor" className="text-zion-slate-light hover:text-zion-cyan transition-colors">Cloud FinOps</Link></li>
                    <li><Link to="/services/soc2-compliance-automation" className="text-zion-slate-light hover:text-zion-cyan transition-colors">SOC2 Compliance</Link></li>
                  </ul>
                </div>
                <div>
                  <h4 className="text-zion-cyan font-semibold mb-3 flex items-center">
                    <Shield className="w-4 h-4 mr-2"/>
                    IT Services
                  </h4>
                  <ul className="space-y-2 text-sm">
                    <li><Link to="/it-services" className="text-zion-slate-light hover:text-zion-cyan transition-colors">IT Services Overview</Link></li>
                    <li><Link to="/services/cloud-devops" className="text-zion-slate-light hover:text-zion-cyan transition-colors">Cloud & DevOps</Link></li>
                    <li><Link to="/services/cybersecurity" className="text-zion-slate-light hover:text-zion-cyan transition-colors">Cybersecurity</Link></li>
                    <li><Link to="/services/quantum-computing-solutions" className="text-zion-slate-light hover:text-zion-cyan transition-colors">Quantum Computing</Link></li>
                    <li><Link to="/it-onsite-services" className="text-zion-slate-light hover:text-zion-cyan transition-colors">Onsite Support</Link></li>
                  </ul>
                </div>
              </div>
              <div className="mt-4 pt-4 border-t border-zion-purple/20">
                <Link to="/comprehensive-services-overview-2025" className="text-zion-cyan hover:text-zion-cyan-light transition-colors text-sm font-medium flex items-center justify-center">
                  View All Services
                  <TrendingUp className="w-4 h-4 ml-2"/>
                </Link>
              </div>
            </div>
          </div>)}
      </div>
      {/* Solutions Dropdown */}
      <div className="relative group">
        <button onMouseEnter={() => setIsSolutionsOpen(true)} onMouseLeave={() => setIsSolutionsOpen(false)} className="flex items-center space-x-1 text-sm font-medium transition-colors hover:text-primary text-muted-foreground">
          <Brain className="w-4 h-4"/>
          <span>Solutions</span>
          <ChevronDown className="w-3 h-3"/>
        </button>
        {isSolutionsOpen && (<div onMouseEnter={() => setIsSolutionsOpen(true)} onMouseLeave={() => setIsSolutionsOpen(false)} className="absolute top-full left-0 mt-2 w-80 bg-zion-blue-dark border border-zion-purple/30 rounded-lg shadow-2xl shadow-zion-purple/20 z-50">
            <div className="p-4">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <h4 className="text-zion-cyan font-semibold mb-3 flex items-center">
                    <Users className="w-4 h-4 mr-2"/>
                    Talent
                  </h4>
                  <ul className="space-y-2 text-sm">
                    <li><Link to="/talent" className="text-zion-slate-light hover:text-zion-cyan transition-colors">Find Experts</Link></li>
                    <li><Link to="/zion-hire-ai" className="text-zion-slate-light hover:text-zion-cyan transition-colors">AI Hiring</Link></li>
                    <li><Link to="/talent" className="text-zion-slate-light hover:text-zion-cyan transition-colors">Skill Matching</Link></li>
                    <li><Link to="/talent" className="text-zion-slate-light hover:text-zion-cyan transition-colors">Project Teams</Link></li>
                  </ul>
                </div>
                <div>
                  <h4 className="text-zion-cyan font-semibold mb-3 flex items-center">
                    <HardDrive className="w-4 h-4 mr-2"/>
                    Resources
                  </h4>
                  <ul className="space-y-2 text-sm">
                    <li><Link to="/enterprise" className="text-zion-slate-light hover:text-zion-cyan transition-colors">Enterprise Solutions</Link></li>
                    <li><Link to="/solutions" className="text-zion-slate-light hover:text-zion-cyan transition-colors">Industry Solutions</Link></li>
                    <li><Link to="/case-studies" className="text-zion-slate-light hover:text-zion-cyan transition-colors">Case Studies</Link></li>
                    <li><Link to="/marketplace" className="text-zion-slate-light hover:text-zion-cyan transition-colors">Marketplace</Link></li>
                  </ul>
                </div>
              </div>
              <div className="mt-4 pt-4 border-t border-zion-purple/20">
                <Link to="/request-quote" className="text-zion-cyan hover:text-zion-cyan-light transition-colors text-sm font-medium flex items-center justify-center">
                  Get Custom Quote
                  <TrendingUp className="w-4 h-4 ml-2"/>
                </Link>
              </div>
            </div>
          </div>)}
      </div>
      {/* Comp Dropdown */}
      <div className="relative group">
        <button
          onMouseEnter={() => setIsCompOpen(true)}
          onMouseLeave={() => setIsCompOpen(false)}
          className="flex items-center space-x-1 text-sm font-medium transition-colors hover:text-primary text-muted-foreground"
        >
          <Building2 className="w-4 h-4" />
          <span>Company</span>
          <ChevronDown className="w-3 h-3" />
        </button>
        {isCompOpen && (
          <div
            onMouseEnter={() => setIsCompOpen(true)}
            onMouseLeave={() => setIsCompOpen(false)}
            className="absolute top-full left-0 mt-2 w-64 bg-zion-blue-dark border border-zion-purple/30 rounded-lg shadow-2xl shadow-zion-purple/20 z-50"
          >
            <div className="p-4">
              <ul className="space-y-2 text-sm">
                <li><Link to="/about" className="text-zion-slate-light hover:text-zion-cyan transition-colors">About Us</Link></li>
                <li><Link to="/careers" className="text-zion-slate-light hover:text-zion-cyan transition-colors">Careers</Link></li>
                <li><Link to="/news" className="text-zion-slate-light hover:text-zion-cyan transition-colors">News</Link></li>
                <li><Link to="/events" className="text-zion-slate-light hover:text-zion-cyan transition-colors">Events</Link></li>
                <li><Link to="/partners" className="text-zion-slate-light hover:text-zion-cyan transition-colors">Partners</Link></li>
                <li><Link to="/contact" className="text-zion-slate-light hover:text-zion-cyan transition-colors">Contact</Link></li>
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
            <div className="p-4">
              <ul className="space-y-2 text-sm">
                <li><Link to="/blog" className="text-zion-slate-light hover:text-zion-cyan transition-colors">Blog</Link></li>
                <li><Link to="/docs" className="text-zion-slate-light hover:text-zion-cyan transition-colors">Documentation</Link></li>
                <li><Link to="/white-papers" className="text-zion-slate-light hover:text-zion-cyan transition-colors">White Papers</Link></li>
                <li><Link to="/webinars" className="text-zion-slate-light hover:text-zion-cyan transition-colors">Webinars</Link></li>
                <li><Link to="/training" className="text-zion-slate-light hover:text-zion-cyan transition-colors">Training</Link></li>
                <li><Link to="/research-development" className="text-zion-slate-light hover:text-zion-cyan transition-colors">Research</Link></li>
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
      <NavLink to="/signup" className={({ isActive }) => cn("text-sm font-medium transition-colors hover:text-primary", isActive ? "text-zion-cyan" : "text-muted-foreground", "bg-gradient-to-r from-zion-purple to-zion-purple-dark hover:from-zion-purple-light hover:to-zion-purple text-white px-6 py-2 rounded-lg shadow-lg shadow-zion-purple/25 hover:shadow-xl hover:shadow-zion-purple/40 transition-all duration-300 hover:-translate-y-1")}>
        Get Started
      </NavLink>
    </nav>)};
}
