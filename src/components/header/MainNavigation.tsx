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
  Calendar,
  PenTool,
  Briefcase
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
    <nav className={cn("hidden lg:flex items-center space-x-8", className)}>
      {/* Home */}
      <NavLink 
        to="/" 
        className={({ isActive }) => 
          cn("text-sm font-medium transition-colors hover:text-primary px-3 py-2 rounded-md", 
            isActive ? "text-zion-cyan bg-zion-cyan/10" : "text-muted-foreground hover:text-zion-cyan hover:bg-zion-cyan/5"
          )
        }
      >
        <Home className="w-4 h-4 inline mr-2" />
        Home
      </NavLink>
      
      {/* Services Dropdown */}
      <div className="relative group">
        <button 
          onMouseEnter={() => setIsServicesOpen(true)} 
          onMouseLeave={() => setIsServicesOpen(false)} 
          className="flex items-center space-x-1 text-sm font-medium transition-colors hover:text-primary text-muted-foreground hover:text-zion-cyan"
        >
          <Zap className="w-4 h-4" />
          <span>Services</span>
          <ChevronDown className="w-3 h-3" />
        </button>
        
        {isServicesOpen && (
          <div className="absolute top-full left-0 mt-2 w-80 bg-zion-slate-dark border border-zion-purple/20 rounded-lg shadow-xl z-50">
            <div className="p-4 grid grid-cols-2 gap-4">
              {/* AI & Automation */}
              <div>
                <h3 className="text-zion-cyan font-semibold text-sm mb-3 flex items-center">
                  <Brain className="w-4 h-4 mr-2" />
                  AI & Automation
                </h3>
                <div className="space-y-2">
                  <Link to="/services/ai-business-intelligence-dashboard" className="block text-sm text-zion-slate-light hover:text-zion-cyan transition-colors">
                    AI Business Intelligence
                  </Link>
                  <Link to="/services/ai-customer-support-automation" className="block text-sm text-zion-slate-light hover:text-zion-cyan transition-colors">
                    AI Customer Support
                  </Link>
                  <Link to="/services/ai-marketing-automation-platform" className="block text-sm text-zion-slate-light hover:text-zion-cyan transition-colors">
                    AI Marketing Automation
                  </Link>
                  <Link to="/services/ai-workflow-orchestrator" className="block text-sm text-zion-slate-light hover:text-zion-cyan transition-colors">
                    AI Workflow Orchestrator
                  </Link>
                  <Link to="/services/ai-enterprise-intelligence-platform" className="block text-sm text-zion-slate-light hover:text-zion-cyan transition-colors">
                    AI Enterprise Intelligence
                  </Link>
                </div>
              </div>
              
              {/* Cloud & Infrastructure */}
              <div>
                <h3 className="text-zion-cyan font-semibold text-sm mb-3 flex items-center">
                  <Cloud className="w-4 h-4 mr-2" />
                  Cloud & Infrastructure
                </h3>
                <div className="space-y-2">
                  <Link to="/services/cloud-devops" className="block text-sm text-zion-slate-light hover:text-zion-cyan transition-colors">
                    Cloud & DevOps
                  </Link>
                  <Link to="/services/it-infrastructure-management" className="block text-sm text-zion-slate-light hover:text-zion-cyan transition-colors">
                    IT Infrastructure
                  </Link>
                  <Link to="/services/cybersecurity" className="block text-sm text-zion-slate-light hover:text-zion-cyan transition-colors">
                    Cybersecurity
                  </Link>
                  <Link to="/services/quantum-edge-computing-solutions" className="block text-sm text-zion-slate-light hover:text-zion-cyan transition-colors">
                    Quantum Edge Computing
                  </Link>
                </div>
              </div>
            </div>
            <div className="border-t border-zion-purple/20 p-4">
              <Link to="/services" className="text-zion-cyan hover:text-zion-cyan/80 text-sm font-medium flex items-center">
                View All Services
                <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
            </div>
          </div>
        )}
      </div>

      {/* Solutions Dropdown */}
      <div className="relative group">
        <button 
          onMouseEnter={() => setIsSolutionsOpen(true)} 
          onMouseLeave={() => setIsSolutionsOpen(false)} 
          className="flex items-center space-x-1 text-sm font-medium transition-colors hover:text-primary text-muted-foreground hover:text-zion-cyan"
        >
          <Target className="w-4 h-4" />
          <span>Solutions</span>
          <ChevronDown className="w-3 h-3" />
        </button>
        
        {isSolutionsOpen && (
          <div className="absolute top-full left-0 mt-2 w-64 bg-zion-slate-dark border border-zion-purple/20 rounded-lg shadow-xl z-50">
            <div className="p-4 space-y-3">
              <Link to="/solutions/healthcare" className="block text-sm text-zion-slate-light hover:text-zion-cyan transition-colors flex items-center">
                <Heart className="w-4 h-4 mr-2" />
                Healthcare
              </Link>
              <Link to="/solutions/financial" className="block text-sm text-zion-slate-light hover:text-zion-cyan transition-colors flex items-center">
                <DollarSign className="w-4 h-4 mr-2" />
                Financial Services
              </Link>
              <Link to="/solutions/manufacturing" className="block text-sm text-zion-slate-light hover:text-zion-cyan transition-colors flex items-center">
                <Building2 className="w-4 h-4 mr-2" />
                Manufacturing
              </Link>
              <Link to="/solutions/retail" className="block text-sm text-zion-slate-light hover:text-zion-cyan transition-colors flex items-center">
                <ShoppingCart className="w-4 h-4 mr-2" />
                Retail
              </Link>
            </div>
            <div className="border-t border-zion-purple/20 p-4">
              <Link to="/solutions" className="text-zion-cyan hover:text-zion-cyan/80 text-sm font-medium flex items-center">
                View All Solutions
                <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
            </div>
          </div>
        )}
      </div>

      {/* Company Dropdown */}
      <div className="relative group">
        <button 
          onMouseEnter={() => setIsCompanyOpen(true)} 
          onMouseLeave={() => setIsCompanyOpen(false)} 
          className="flex items-center space-x-1 text-sm font-medium transition-colors hover:text-primary text-muted-foreground hover:text-zion-cyan"
        >
          <Building2 className="w-4 h-4" />
          <span>Company</span>
          <ChevronDown className="w-3 h-3" />
        </button>
        
        {isCompanyOpen && (
          <div className="absolute top-full left-0 mt-2 w-64 bg-zion-slate-dark border border-zion-purple/20 rounded-lg shadow-xl z-50">
            <div className="p-4 space-y-3">
              <Link to="/about" className="block text-sm text-zion-slate-light hover:text-zion-cyan transition-colors">
                About Us
              </Link>
              <Link to="/leadership" className="block text-sm text-zion-slate-light hover:text-zion-cyan transition-colors">
                Leadership
              </Link>
              <Link to="/careers" className="block text-sm text-zion-slate-light hover:text-zion-cyan transition-colors">
                Careers
              </Link>
              <Link to="/partners" className="block text-sm text-zion-slate-light hover:text-zion-cyan transition-colors">
                Partners
              </Link>
              <Link to="/news" className="block text-sm text-zion-slate-light hover:text-zion-cyan transition-colors">
                News
              </Link>
            </div>
          </div>
        )}
      </div>

      {/* Resources Dropdown */}
      <div className="relative group">
        <button 
          onMouseEnter={() => setIsResourcesOpen(true)} 
          onMouseLeave={() => setIsResourcesOpen(false)} 
          className="flex items-center space-x-1 text-sm font-medium transition-colors hover:text-primary text-muted-foreground hover:text-zion-cyan"
        >
          <BookOpen className="w-4 h-4" />
          <span>Resources</span>
          <ChevronDown className="w-3 h-3" />
        </button>
        
        {isResourcesOpen && (
          <div className="absolute top-full left-0 mt-2 w-64 bg-zion-slate-dark border border-zion-purple/20 rounded-lg shadow-xl z-50">
            <div className="p-4 space-y-3">
              <Link to="/blog" className="block text-sm text-zion-slate-light hover:text-zion-cyan transition-colors">
                Blog
              </Link>
              <Link to="/docs" className="block text-sm text-zion-slate-light hover:text-zion-cyan transition-colors">
                Documentation
              </Link>
              <Link to="/white-papers" className="block text-sm text-zion-slate-light hover:text-zion-cyan transition-colors">
                White Papers
              </Link>
              <Link to="/webinars" className="block text-sm text-zion-slate-light hover:text-zion-cyan transition-colors">
                Webinars
              </Link>
              <Link to="/training" className="block text-sm text-zion-slate-light hover:text-zion-cyan transition-colors">
                Training
              </Link>
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
        <MessageCircle className="w-4 h-4 inline mr-2" />
        Contact
      </NavLink>
    </nav>
  );
}


