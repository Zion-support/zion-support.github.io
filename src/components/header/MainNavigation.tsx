import React, { useState, useEffect } from 'react';
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
  PenTool,
  ExternalLink,
  ArrowRight,
  Handshake,
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
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  // Close dropdowns when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (!(event.target as Element).closest('.navigation-dropdown')) {
        setActiveDropdown(null);
        setIsServicesOpen(false);
        setIsSolutionsOpen(false);
        setIsCompanyOpen(false);
        setIsResourcesOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleDropdownToggle = (dropdown: string) => {
    if (activeDropdown === dropdown) {
      setActiveDropdown(null);
      setIsServicesOpen(false);
      setIsSolutionsOpen(false);
      setIsCompanyOpen(false);
      setIsResourcesOpen(false);
    } else {
      setActiveDropdown(dropdown);
      setIsServicesOpen(dropdown === 'services');
      setIsSolutionsOpen(dropdown === 'solutions');
      setIsCompanyOpen(dropdown === 'company');
      setIsResourcesOpen(dropdown === 'resources');
    }
  };

  return (
    <nav className={cn("hidden lg:flex items-center space-x-8", className)}>
      <NavLink 
        to="/" 
        className={({ isActive }) => 
          cn("text-sm font-medium transition-all duration-300 hover:text-zion-cyan hover:scale-105", 
            isActive ? "text-zion-cyan font-semibold" : "text-zion-slate-light"
          )
        }
      >
        Home
      </NavLink>
      
      {/* Services Dropdown */}
      <div className="relative navigation-dropdown">
        <button 
          onClick={() => handleDropdownToggle('services')}
          className={cn(
            "flex items-center space-x-2 text-sm font-medium transition-all duration-300 hover:text-zion-cyan group",
            isServicesOpen ? "text-zion-cyan" : "text-zion-slate-light"
          )}
        >
          <Zap className={cn("w-4 h-4 transition-transform duration-300", isServicesOpen ? "rotate-12" : "")}/>
          <span>Services</span>
          <ChevronDown className={cn("w-3 h-3 transition-transform duration-300", isServicesOpen ? "rotate-180" : "")}/>
        </button>
        {isServicesOpen && (
          <div className="absolute top-full left-0 mt-3 w-[800px] bg-gradient-to-br from-zion-blue-dark via-zion-slate-dark to-zion-blue-dark border border-zion-purple/30 rounded-2xl shadow-2xl shadow-zion-purple/20 z-50 backdrop-blur-sm">
            <div className="p-8">
              <div className="grid grid-cols-3 gap-8">
                {/* AI & Automation Column */}
                <div className="space-y-4">
                  <div className="flex items-center space-x-3 pb-3 border-b border-zion-purple/20">
                    <div className="p-2 bg-zion-cyan/20 rounded-lg">
                      <Zap className="w-5 h-5 text-zion-cyan"/>
                    </div>
                    <h4 className="text-zion-cyan font-bold text-lg">AI & Automation</h4>
                  </div>
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
                      <Link to="/services/ai-legal-document-automation-platform" className="group flex items-center justify-between p-3 rounded-lg hover:bg-zion-purple/10 transition-all duration-300">
                        <div className="flex items-center space-x-3">
                          <FileText className="w-4 h-4 text-zion-cyan" />
                          <span className="text-zion-slate-light group-hover:text-white transition-colors">AI Legal Document Automation</span>
                        </div>
                        <ArrowRight className="w-4 h-4 text-zion-purple/50 group-hover:text-zion-cyan transition-all duration-300 opacity-0 group-hover:opacity-100 transform translate-x-2 group-hover:translate-x-0" />
                      </Link>
                    </li>
                    <li>
                      <Link to="/services/ai-content-creation-studio" className="group flex items-center justify-between p-3 rounded-lg hover:bg-zion-purple/10 transition-all duration-300">
                        <div className="flex items-center space-x-3">
                          <PenTool className="w-4 h-4 text-zion-cyan" />
                          <span className="text-zion-slate-light group-hover:text-white transition-colors">AI Content Creation Studio</span>
                        </div>
                        <ArrowRight className="w-4 h-4 text-zion-purple/50 group-hover:text-zion-cyan transition-all duration-300 opacity-0 group-hover:opacity-100 transform translate-x-2 group-hover:translate-x-0" />
                      </Link>
                    </li>
                    <li>
                      <Link to="/services/ai-customer-experience-analytics-platform" className="group flex items-center justify-between p-3 rounded-lg hover:bg-zion-purple/10 transition-all duration-300">
                        <div className="flex items-center space-x-3">
                          <BarChart3 className="w-4 h-4 text-zion-cyan" />
                          <span className="text-zion-slate-light group-hover:text-white transition-colors">AI Customer Experience Analytics</span>
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
                  <ul className="space-y-3">
                    <li>
                      <Link to="/services/it-infrastructure-management" className="group flex items-center justify-between p-3 rounded-lg hover:bg-zion-purple/10 transition-all duration-300">
                        <div className="flex items-center space-x-3">
                          <Server className="w-4 h-4 text-zion-purple" />
                          <span className="text-zion-slate-light group-hover:text-white transition-colors">Infrastructure Management</span>
                        </div>
                        <ArrowRight className="w-4 h-4 text-zion-purple/50 group-hover:text-zion-purple transition-all duration-300 opacity-0 group-hover:opacity-100 transform translate-x-2 group-hover:translate-x-0" />
                      </Link>
                    </li>
                    <li>
                      <Link to="/services/cloud-devops" className="group flex items-center justify-between p-3 rounded-lg hover:bg-zion-purple/10 transition-all duration-300">
                        <div className="flex items-center space-x-3">
                          <Cloud className="w-4 h-4 text-zion-purple" />
                          <span className="text-zion-slate-light group-hover:text-white transition-colors">Cloud & DevOps</span>
                        </div>
                        <ArrowRight className="w-4 h-4 text-zion-purple/50 group-hover:text-zion-purple transition-all duration-300 opacity-0 group-hover:opacity-100 transform translate-x-2 group-hover:translate-x-0" />
                      </Link>
                    </li>
                    <li>
                      <Link to="/services/cybersecurity" className="group flex items-center justify-between p-3 rounded-lg hover:bg-zion-purple/10 transition-all duration-300">
                        <div className="flex items-center space-x-3">
                          <Shield className="w-4 h-4 text-zion-purple" />
                          <span className="text-zion-slate-light group-hover:text-white transition-colors">Cybersecurity</span>
                        </div>
                        <ArrowRight className="w-4 h-4 text-zion-purple/50 group-hover:text-zion-purple transition-all duration-300 opacity-0 group-hover:opacity-100 transform translate-x-2 group-hover:translate-x-0" />
                      </Link>
                    </li>
                    <li>
                      <Link to="/services/blockchain-enterprise-solutions" className="group flex items-center justify-between p-3 rounded-lg hover:bg-zion-purple/10 transition-all duration-300">
                        <div className="flex items-center space-x-3">
                          <Network className="w-4 h-4 text-zion-purple" />
                          <span className="text-zion-slate-light group-hover:text-white transition-colors">Blockchain Solutions</span>
                        </div>
                        <ArrowRight className="w-4 h-4 text-zion-purple/50 group-hover:text-zion-purple transition-all duration-300 opacity-0 group-hover:opacity-100 transform translate-x-2 group-hover:translate-x-0" />
                      </Link>
                    </li>
                  </ul>
                </div>

                {/* Micro SaaS Column */}
                <div className="space-y-4">
                  <div className="flex items-center space-x-3 pb-3 border-b border-zion-purple/20">
                    <div className="p-2 bg-zion-cyan/20 rounded-lg">
                      <Rocket className="w-5 h-5 text-zion-cyan"/>
                    </div>
                    <h4 className="text-zion-cyan font-bold text-lg">Micro SaaS</h4>
                  </div>
                  <ul className="space-y-3">
                    <li>
                      <Link to="/services/micro-saas-solutions-comprehensive" className="group flex items-center justify-between p-3 rounded-lg hover:bg-zion-purple/10 transition-all duration-300">
                        <div className="flex items-center space-x-3">
                          <Rocket className="w-4 h-4 text-zion-cyan" />
                          <span className="text-zion-slate-light group-hover:text-white transition-colors">Comprehensive Solutions</span>
                        </div>
                        <ArrowRight className="w-4 h-4 text-zion-purple/50 group-hover:text-zion-cyan transition-all duration-300 opacity-0 group-hover:opacity-100 transform translate-x-2 group-hover:translate-x-0" />
                      </Link>
                    </li>
                    <li>
                      <Link to="/services/ai-customer-success-automation" className="group flex items-center justify-between p-3 rounded-lg hover:bg-zion-purple/10 transition-all duration-300">
                        <div className="flex items-center space-x-3">
                          <Users className="w-4 h-4 text-zion-cyan" />
                          <span className="text-zion-slate-light group-hover:text-white transition-colors">Customer Success AI</span>
                        </div>
                        <ArrowRight className="w-4 h-4 text-zion-purple/50 group-hover:text-zion-cyan transition-all duration-300 opacity-0 group-hover:opacity-100 transform translate-x-2 group-hover:translate-x-0" />
                      </Link>
                    </li>
                    <li>
                      <Link to="/services/ai-financial-risk-management-enhanced" className="group flex items-center justify-between p-3 rounded-lg hover:bg-zion-purple/10 transition-all duration-300">
                        <div className="flex items-center space-x-3">
                          <Shield className="w-4 h-4 text-zion-cyan" />
                          <span className="text-zion-slate-light group-hover:text-white transition-colors">Financial Risk Management</span>
                        </div>
                        <ArrowRight className="w-4 h-4 text-zion-purple/50 group-hover:text-zion-cyan transition-all duration-300 opacity-0 group-hover:opacity-100 transform translate-x-2 group-hover:translate-x-0" />
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
              
              {/* View All Services Button */}
              <div className="mt-8 pt-6 border-t border-zion-purple/20">
                <div className="flex items-center justify-between">
                  <Link 
                    to="/services" 
                    className="flex items-center space-x-2 text-zion-cyan hover:text-zion-cyan-light transition-colors font-medium group"
                  >
                    <span>View All Services</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </Link>
                  <Link 
                    to="/innovative-services-showcase-2032" 
                    className="flex items-center space-x-2 text-zion-purple hover:text-zion-purple-light transition-colors font-medium group"
                  >
                    <span>2032 Innovation Showcase</span>
                    <ExternalLink className="w-4 h-4 group-hover:scale-110 transition-transform" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Solutions Dropdown */}
      <div className="relative navigation-dropdown">
        <button 
          onClick={() => handleDropdownToggle('solutions')}
          className={cn(
            "flex items-center space-x-2 text-sm font-medium transition-all duration-300 hover:text-zion-cyan group",
            isSolutionsOpen ? "text-zion-cyan" : "text-zion-slate-light"
          )}
        >
          <Target className={cn("w-4 h-4 transition-transform duration-300", isSolutionsOpen ? "scale-110" : "")}/>
          <span>Solutions</span>
          <ChevronDown className={cn("w-3 h-3 transition-transform duration-300", isSolutionsOpen ? "rotate-180" : "")}/>
        </button>
        {isSolutionsOpen && (
          <div className="absolute top-full left-0 mt-3 w-80 bg-gradient-to-br from-zion-blue-dark via-zion-slate-dark to-zion-blue-dark border border-zion-purple/30 rounded-2xl shadow-2xl shadow-zion-purple/20 z-50 backdrop-blur-sm">
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
                    <Link to="/solutions/healthcare" className="group flex items-center justify-between p-3 rounded-lg hover:bg-zion-purple/10 transition-all duration-300">
                      <div className="flex items-center space-x-3">
                        <Users className="w-4 h-4 text-zion-cyan" />
                        <span className="text-zion-slate-light group-hover:text-white transition-colors">Healthcare</span>
                      </div>
                      <ArrowRight className="w-4 h-4 text-zion-purple/50 group-hover:text-zion-cyan transition-all duration-300 opacity-0 group-hover:opacity-100 transform translate-x-2 group-hover:translate-x-0" />
                    </Link>
                  </li>
                  <li>
                    <Link to="/solutions/financial" className="group flex items-center justify-between p-3 rounded-lg hover:bg-zion-purple/10 transition-all duration-300">
                      <div className="flex items-center space-x-3">
                        <DollarSign className="w-4 h-4 text-zion-cyan" />
                        <span className="text-zion-slate-light group-hover:text-white transition-colors">Financial Services</span>
                      </div>
                      <ArrowRight className="w-4 h-4 text-zion-purple/50 group-hover:text-zion-cyan transition-all duration-300 opacity-0 group-hover:opacity-100 transform translate-x-2 group-hover:translate-x-0" />
                    </Link>
                  </li>
                  <li>
                    <Link to="/solutions/manufacturing" className="group flex items-center justify-between p-3 rounded-lg hover:bg-zion-purple/10 transition-all duration-300">
                      <div className="flex items-center space-x-3">
                        <Cog className="w-4 h-4 text-zion-cyan" />
                        <span className="text-zion-slate-light group-hover:text-white transition-colors">Manufacturing</span>
                      </div>
                      <ArrowRight className="w-4 h-4 text-zion-purple/50 group-hover:text-zion-cyan transition-all duration-300 opacity-0 group-hover:opacity-100 transform translate-x-2 group-hover:translate-x-0" />
                    </Link>
                  </li>
                  <li>
                    <Link to="/solutions/government" className="group flex items-center justify-between p-3 rounded-lg hover:bg-zion-purple/10 transition-all duration-300">
                      <div className="flex items-center space-x-3">
                        <Building2 className="w-4 h-4 text-zion-cyan" />
                        <span className="text-zion-slate-light group-hover:text-white transition-colors">Government</span>
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
      <div className="relative navigation-dropdown">
        <button 
          onClick={() => handleDropdownToggle('company')}
          className={cn(
            "flex items-center space-x-2 text-sm font-medium transition-all duration-300 hover:text-zion-cyan group",
            isCompanyOpen ? "text-zion-cyan" : "text-zion-slate-light"
          )}
        >
          <Building2 className={cn("w-4 h-4 transition-transform duration-300", isCompanyOpen ? "scale-110" : "")}/>
          <span>Company</span>
          <ChevronDown className={cn("w-3 h-3 transition-transform duration-300", isCompanyOpen ? "rotate-180" : "")}/>
        </button>
        {isCompanyOpen && (
          <div className="absolute top-full left-0 mt-3 w-64 bg-gradient-to-br from-zion-blue-dark via-zion-slate-dark to-zion-blue-dark border border-zion-purple/30 rounded-2xl shadow-2xl shadow-zion-purple/20 z-50 backdrop-blur-sm">
            <div className="p-6">
              <div className="space-y-4">
                <div className="flex items-center space-x-3 pb-3 border-b border-zion-purple/20">
                  <div className="p-2 bg-zion-purple/20 rounded-lg">
                    <Building2 className="w-5 h-5 text-zion-purple"/>
                  </div>
                  <h4 className="text-zion-purple font-bold text-lg">About Zion Tech</h4>
                </div>
                <ul className="space-y-3">
                  <li>
                    <Link to="/about" className="group flex items-center justify-between p-3 rounded-lg hover:bg-zion-purple/10 transition-all duration-300">
                      <div className="flex items-center space-x-3">
                        <Users2 className="w-4 h-4 text-zion-purple" />
                        <span className="text-zion-slate-light group-hover:text-white transition-colors">About Us</span>
                      </div>
                      <ArrowRight className="w-4 h-4 text-zion-purple/50 group-hover:text-zion-purple transition-all duration-300 opacity-0 group-hover:opacity-100 transform translate-x-2 group-hover:translate-x-0" />
                    </Link>
                  </li>
                  <li>
                    <Link to="/careers" className="group flex items-center justify-between p-3 rounded-lg hover:bg-zion-purple/10 transition-all duration-300">
                      <div className="flex items-center space-x-3">
                        <Users className="w-4 h-4 text-zion-purple" />
                        <span className="text-zion-slate-light group-hover:text-white transition-colors">Careers</span>
                      </div>
                      <ArrowRight className="w-4 h-4 text-zion-purple/50 group-hover:text-zion-purple transition-all duration-300 opacity-0 group-hover:opacity-100 transform translate-x-2 group-hover:translate-x-0" />
                    </Link>
                  </li>
                  <li>
                    <Link to="/partners" className="group flex items-center justify-between p-3 rounded-lg hover:bg-zion-purple/10 transition-all duration-300">
                      <div className="flex items-center space-x-3">
                        <Handshake className="w-4 h-4 text-zion-purple" />
                        <span className="text-zion-slate-light group-hover:text-white transition-colors">Partners</span>
                      </div>
                      <ArrowRight className="w-4 h-4 text-zion-purple/50 group-hover:text-zion-purple transition-all duration-300 opacity-0 group-hover:opacity-100 transform translate-x-2 group-hover:translate-x-0" />
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Resources Dropdown */}
      <div className="relative navigation-dropdown">
        <button 
          onClick={() => handleDropdownToggle('resources')}
          className={cn(
            "flex items-center space-x-2 text-sm font-medium transition-all duration-300 hover:text-zion-cyan group",
            isResourcesOpen ? "text-zion-cyan" : "text-zion-slate-light"
          )}
        >
          <FileText className={cn("w-4 h-4 transition-transform duration-300", isResourcesOpen ? "scale-110" : "")}/>
          <span>Resources</span>
          <ChevronDown className={cn("w-3 h-3 transition-transform duration-300", isResourcesOpen ? "rotate-180" : "")}/>
        </button>
        {isResourcesOpen && (
          <div className="absolute top-full left-0 mt-3 w-80 bg-gradient-to-br from-zion-blue-dark via-zion-slate-dark to-zion-blue-dark border border-zion-purple/30 rounded-2xl shadow-2xl shadow-zion-purple/20 z-50 backdrop-blur-sm">
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
>>>>>>> origin/clean-enhancement-branch
            </div>
          </div>
        )}
      </div>

      {/* Direct Links */}
      <NavLink 
        to="/pricing" 
        className={({ isActive }) => 
          cn("text-sm font-medium transition-all duration-300 hover:text-zion-cyan hover:scale-105", 
            isActive ? "text-zion-cyan font-semibold" : "text-zion-slate-light"
          )
        }
      >
        Pricing
      </NavLink>

      <NavLink 
        to="/contact" 
        className={({ isActive }) => 
          cn("text-sm font-medium transition-all duration-300 hover:text-zion-cyan hover:scale-105", 
            isActive ? "text-zion-cyan font-semibold" : "text-zion-slate-light"
          )
        }
      >
        Contact
      </NavLink>

      {/* CTA Button */}
      <Link
        to="/get-started"
        className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-zion-cyan to-zion-blue text-white text-sm font-medium rounded-lg hover:from-zion-cyan-light hover:to-zion-blue-light transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-zion-cyan/25"
      >
        Get Started
        <ArrowRight className="w-4 h-4 ml-2" />
      </Link>
    </nav>
  );
}
