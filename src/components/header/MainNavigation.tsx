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
  Palette as PaletteIcon
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
    <nav className={cn("hidden md:flex items-center space-x-8", className)}>
      <NavLink 
        to="/" 
        className={({ isActive }) => 
          cn("text-sm font-medium transition-all duration-200 hover:text-cyan-400 relative", 
            isActive ? "text-cyan-400" : "text-gray-300"
          )
        }
      >
        {({ isActive }) => (
          <>
            Home
            {isActive && (
              <div className="absolute -bottom-1 left-0 w-full h-0.5 bg-cyan-400 rounded-full" />
            )}
          </>
        )}
      </NavLink>
      
      {/* Services Dropdown */}
      <div className="relative group">
        <button 
          onMouseEnter={() => setIsServicesOpen(true)} 
          onMouseLeave={() => setIsServicesOpen(false)} 
          className="flex items-center space-x-1 text-sm font-medium transition-all duration-200 hover:text-cyan-400 text-gray-300 group-hover:text-cyan-400"
        >
          <Zap className="w-4 h-4"/>
          <span>Services</span>
          <ChevronDown className="w-3 h-3 transition-transform duration-200 group-hover:rotate-180"/>
        </button>
        {isServicesOpen && (
          <div 
            onMouseEnter={() => setIsServicesOpen(true)} 
            onMouseLeave={() => setIsServicesOpen(false)} 
            className="absolute top-full left-0 mt-2 w-96 bg-slate-800/95 border border-slate-700/50 rounded-xl shadow-2xl shadow-slate-900/50 z-50 backdrop-blur-md"
          >
            <div className="p-6">
              <div className="grid grid-cols-2 gap-6">
                <div>
                  <h4 className="text-cyan-400 font-semibold mb-4 flex items-center">
                    <Zap className="w-4 h-4 mr-2"/>
                    AI & Machine Learning
                  </h4>
                  <div className="space-y-2">
                    <Link to="/ai-services" className="block text-gray-300 hover:text-cyan-400 transition-colors text-sm">
                      AI Solutions
                    </Link>
                    <Link to="/services/ai-autonomous-business" className="block text-gray-300 hover:text-cyan-400 transition-colors text-sm">
                      Autonomous Business
                    </Link>
                    <Link to="/services/ai-cybersecurity" className="block text-gray-300 hover:text-cyan-400 transition-colors text-sm">
                      AI Cybersecurity
                    </Link>
                  </div>
                </div>
                <div>
                  <h4 className="text-cyan-400 font-semibold mb-4 flex items-center">
                    <Shield className="w-4 h-4 mr-2"/>
                    Security & Infrastructure
                  </h4>
                  <div className="space-y-2">
                    <Link to="/services/cybersecurity" className="block text-gray-300 hover:text-cyan-400 transition-colors text-sm">
                      Cybersecurity
                    </Link>
                    <Link to="/services/cloud-devops" className="block text-gray-300 hover:text-cyan-400 transition-colors text-sm">
                      Cloud & DevOps
                    </Link>
                    <Link to="/services/it-infrastructure" className="block text-gray-300 hover:text-cyan-400 transition-colors text-sm">
                      IT Infrastructure
                    </Link>
                  </div>
                </div>
              </div>
              <div className="mt-6 pt-4 border-t border-slate-700/50">
                <Link 
                  to="/services" 
                  className="text-cyan-400 hover:text-cyan-300 transition-colors text-sm font-medium"
                >
                  View All Services →
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
          className="flex items-center space-x-1 text-sm font-medium transition-all duration-200 hover:text-cyan-400 text-gray-300 group-hover:text-cyan-400"
        >
          <Target className="w-4 h-4"/>
          <span>Solutions</span>
          <ChevronDown className="w-3 h-3 transition-transform duration-200 group-hover:rotate-180"/>
        </button>
        {isSolutionsOpen && (
          <div 
            onMouseEnter={() => setIsSolutionsOpen(true)} 
            onMouseLeave={() => setIsSolutionsOpen(false)} 
            className="absolute top-full left-0 mt-2 w-80 bg-slate-800/95 border border-slate-700/50 rounded-xl shadow-2xl shadow-slate-900/50 z-50 backdrop-blur-md"
          >
            <div className="p-6">
              <div className="space-y-3">
                <Link to="/solutions/healthcare" className="block text-gray-300 hover:text-cyan-400 transition-colors text-sm">
                  Healthcare Solutions
                </Link>
                <Link to="/solutions/financial" className="block text-gray-300 hover:text-cyan-400 transition-colors text-sm">
                  Financial Solutions
                </Link>
                <Link to="/solutions/manufacturing" className="block text-gray-300 hover:text-cyan-400 transition-colors text-sm">
                  Manufacturing Solutions
                </Link>
                <Link to="/solutions/government" className="block text-gray-300 hover:text-cyan-400 transition-colors text-sm">
                  Government Solutions
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
          className="flex items-center space-x-1 text-sm font-medium transition-all duration-200 hover:text-cyan-400 text-gray-300 group-hover:text-cyan-400"
        >
          <Building2 className="w-4 h-4"/>
          <span>Company</span>
          <ChevronDown className="w-3 h-3 transition-transform duration-200 group-hover:rotate-180"/>
        </button>
        {isCompanyOpen && (
          <div 
            onMouseEnter={() => setIsCompanyOpen(true)} 
            onMouseLeave={() => setIsCompanyOpen(false)} 
            className="absolute top-full left-0 mt-2 w-64 bg-slate-800/95 border border-slate-700/50 rounded-xl shadow-2xl shadow-slate-900/50 z-50 backdrop-blur-md"
          >
            <div className="p-6">
              <div className="space-y-3">
                <Link to="/about" className="block text-gray-300 hover:text-cyan-400 transition-colors text-sm">
                  About Us
                </Link>
                <Link to="/leadership" className="block text-gray-300 hover:text-cyan-400 transition-colors text-sm">
                  Leadership
                </Link>
                <Link to="/careers" className="block text-gray-300 hover:text-cyan-400 transition-colors text-sm">
                  Careers
                </Link>
                <Link to="/partners" className="block text-gray-300 hover:text-cyan-400 transition-colors text-sm">
                  Partners
                </Link>
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
          className="flex items-center space-x-1 text-sm font-medium transition-all duration-200 hover:text-cyan-400 text-gray-300 group-hover:text-cyan-400"
        >
          <FileText className="w-4 h-4"/>
          <span>Resources</span>
          <ChevronDown className="w-3 h-3 transition-transform duration-200 group-hover:rotate-180"/>
        </button>
        {isResourcesOpen && (
          <div 
            onMouseEnter={() => setIsResourcesOpen(true)} 
            onMouseLeave={() => setIsResourcesOpen(false)} 
            className="absolute top-full left-0 mt-2 w-64 bg-slate-800/95 border border-slate-700/50 rounded-xl shadow-2xl shadow-slate-900/50 z-50 backdrop-blur-md"
          >
            <div className="p-6">
              <div className="space-y-3">
                <Link to="/blog" className="block text-gray-300 hover:text-cyan-400 transition-colors text-sm">
                  Blog
                </Link>
                <Link to="/case-studies" className="block text-gray-300 hover:text-cyan-400 transition-colors text-sm">
                  Case Studies
                </Link>
                <Link to="/white-papers" className="block text-gray-300 hover:text-cyan-400 transition-colors text-sm">
                  White Papers
                </Link>
                <Link to="/webinars" className="block text-gray-300 hover:text-cyan-400 transition-colors text-sm">
                  Webinars
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Contact Link */}
      <Link 
        to="/contact" 
        className="text-sm font-medium transition-all duration-200 hover:text-cyan-400 text-gray-300"
      >
        Contact
      </Link>

      {/* CTA Button */}
      <Link
        to="/get-started"
        className="px-4 py-2 bg-gradient-to-r from-cyan-500 to-blue-600 text-white text-sm font-medium rounded-lg hover:from-cyan-600 hover:to-blue-700 transition-all duration-200 transform hover:scale-105 shadow-lg hover:shadow-cyan-500/25"
      >
        Get Started
      </Link>
    </nav>
  );
}
