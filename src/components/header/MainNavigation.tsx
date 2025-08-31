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
  ExternalLink,
  ArrowRight,
  Handshake,
  Truck,
  Briefcase,
  Factory,
  Heart,
  ShieldCheck,
  Layers,
  Headphones,
  GraduationCap,
  BookOpen,
  Award,
  Sparkles,
  TrendingDown,
  Calendar
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
          <div className="absolute top-full left-0 mt-3 w-[900px] bg-gradient-to-br from-zion-blue-dark via-zion-slate-dark to-zion-blue-dark border border-zion-purple/30 rounded-2xl shadow-2xl shadow-zion-purple/20 z-50 backdrop-blur-sm">
            <div className="p-8">
              <div className="grid grid-cols-4 gap-6">
                {/* AI & Automation Column */}
                <div className="space-y-4">
                  <div className="flex items-center space-x-3 pb-3 border-b border-zion-purple/20">
                    <div className="p-2 bg-zion-cyan/20 rounded-lg">
                      <Brain className="w-5 h-5 text-zion-cyan"/>
                    </div>
                    <h4 className="text-zion-cyan font-bold text-lg">AI & Automation</h4>
                  </div>
                  <ul className="space-y-2">
                    <li>
                      <Link to="/services/ai-business-intelligence-dashboard" className="group flex items-center justify-between p-2 rounded-lg hover:bg-zion-purple/10 transition-all duration-300">
                        <div className="flex items-center space-x-2">
                          <BarChart3 className="w-3 h-3 text-zion-cyan" />
                          <span className="text-zion-slate-light group-hover:text-white transition-colors text-sm">AI BI Dashboard</span>
                        </div>
                      </Link>
                    </li>
                    <li>
                      <Link to="/services/ai-customer-support-automation" className="group flex items-center justify-between p-2 rounded-lg hover:bg-zion-purple/10 transition-all duration-300">
                        <div className="flex items-center space-x-2">
                          <MessageCircle className="w-3 h-3 text-zion-cyan" />
                          <span className="text-zion-slate-light group-hover:text-white transition-colors text-sm">AI Support Automation</span>
                        </div>
                      </Link>
                    </li>
                    <li>
                      <Link to="/services/ai-project-management-platform" className="group flex items-center justify-between p-2 rounded-lg hover:bg-zion-purple/10 transition-all duration-300">
                        <div className="flex items-center space-x-2">
                          <Workflow className="w-3 h-3 text-zion-cyan" />
                          <span className="text-zion-slate-light group-hover:text-white transition-colors text-sm">AI Project Management</span>
                        </div>
                      </Link>
                    </li>
                    <li>
                      <Link to="/services/ai-marketing-automation-platform" className="group flex items-center justify-between p-2 rounded-lg hover:bg-zion-purple/10 transition-all duration-300">
                        <div className="flex items-center space-x-2">
                          <TrendingUp className="w-3 h-3 text-zion-cyan" />
                          <span className="text-zion-slate-light group-hover:text-white transition-colors text-sm">AI Marketing Automation</span>
                        </div>
                      </Link>
                    </li>
                    <li>
                      <Link to="/services/ai-enterprise-automation-platform" className="group flex items-center justify-between p-2 rounded-lg hover:bg-zion-purple/10 transition-all duration-300">
                        <div className="flex items-center space-x-2">
                          <Building2 className="w-3 h-3 text-zion-cyan" />
                          <span className="text-zion-slate-light group-hover:text-white transition-colors text-sm">Enterprise Automation</span>
                        </div>
                      </Link>
                    </li>
                    <li>
                      <Link to="/services/ai-workflow-orchestrator" className="group flex items-center justify-between p-2 rounded-lg hover:bg-zion-purple/10 transition-all duration-300">
                        <div className="flex items-center space-x-2">
                          <Workflow className="w-3 h-3 text-zion-cyan" />
                          <span className="text-zion-slate-light group-hover:text-white transition-colors text-sm">Workflow Orchestrator</span>
                        </div>
                      </Link>
                    </li>
                  </ul>
                </div>

                {/* Cloud & Infrastructure Column */}
                <div className="space-y-4">
                  <div className="flex items-center space-x-3 pb-3 border-b border-zion-purple/20">
                    <div className="p-2 bg-zion-purple/20 rounded-lg">
                      <Cloud className="w-5 h-5 text-zion-purple"/>
                    </div>
                    <h4 className="text-zion-purple font-bold text-lg">Cloud & Infrastructure</h4>
                  </div>
                  <ul className="space-y-2">
                    <li>
                      <Link to="/services/cloud-devops" className="group flex items-center justify-between p-2 rounded-lg hover:bg-zion-purple/10 transition-all duration-300">
                        <div className="flex items-center space-x-2">
                          <Cloud className="w-3 h-3 text-zion-purple" />
                          <span className="text-zion-slate-light group-hover:text-white transition-colors text-sm">Cloud & DevOps</span>
                        </div>
                      </Link>
                    </li>
                    <li>
                      <Link to="/services/it-infrastructure-management" className="group flex items-center justify-between p-2 rounded-lg hover:bg-zion-purple/10 transition-all duration-300">
                        <div className="flex items-center space-x-2">
                          <Server className="w-3 h-3 text-zion-purple" />
                          <span className="text-zion-slate-light group-hover:text-white transition-colors text-sm">Infrastructure Management</span>
                        </div>
                      </Link>
                    </li>
                    <li>
                      <Link to="/services/cybersecurity" className="group flex items-center justify-between p-2 rounded-lg hover:bg-zion-purple/10 transition-all duration-300">
                        <div className="flex items-center space-x-2">
                          <Shield className="w-3 h-3 text-zion-purple" />
                          <span className="text-zion-slate-light group-hover:text-white transition-colors text-sm">Cybersecurity</span>
                        </div>
                      </Link>
                    </li>
                    <li>
                      <Link to="/services/blockchain-enterprise-solutions" className="group flex items-center justify-between p-2 rounded-lg hover:bg-zion-purple/10 transition-all duration-300">
                        <div className="flex items-center space-x-2">
                          <Network className="w-3 h-3 text-zion-purple" />
                          <span className="text-zion-slate-light group-hover:text-white transition-colors text-sm">Blockchain Solutions</span>
                        </div>
                      </Link>
                    </li>
                    <li>
                      <Link to="/services/quantum-edge-computing-solutions" className="group flex items-center justify-between p-2 rounded-lg hover:bg-zion-purple/10 transition-all duration-300">
                        <div className="flex items-center space-x-2">
                          <Atom className="w-3 h-3 text-zion-purple" />
                          <span className="text-zion-slate-light group-hover:text-white transition-colors text-sm">Quantum Edge Computing</span>
                        </div>
                      </Link>
                    </li>
                    <li>
                      <Link to="/services/cloud-finops-optimizer" className="group flex items-center justify-between p-2 rounded-lg hover:bg-zion-purple/10 transition-all duration-300">
                        <div className="flex items-center space-x-2">
                          <DollarSign className="w-3 h-3 text-zion-purple" />
                          <span className="text-zion-slate-light group-hover:text-white transition-colors text-sm">Cloud FinOps</span>
                        </div>
                      </Link>
                    </li>
                  </ul>
                </div>

                {/* Specialized AI Services Column */}
                <div className="space-y-4">
                  <div className="flex items-center space-x-3 pb-3 border-b border-zion-purple/20">
                    <div className="p-2 bg-zion-cyan/20 rounded-lg">
                      <Sparkles className="w-5 h-5 text-zion-cyan"/>
                    </div>
                    <h4 className="text-zion-cyan font-bold text-lg">Specialized AI</h4>
                  </div>
                  <ul className="space-y-2">
                    <li>
                      <Link to="/services/ai-financial-trading-platform" className="group flex items-center justify-between p-2 rounded-lg hover:bg-zion-purple/10 transition-all duration-300">
                        <div className="flex items-center space-x-2">
                          <TrendingUp className="w-3 h-3 text-zion-cyan" />
                          <span className="text-zion-slate-light group-hover:text-white transition-colors text-sm">AI Financial Trading</span>
                        </div>
                      </Link>
                    </li>
                    <li>
                      <Link to="/services/ai-healthcare-analytics-platform" className="group flex items-center justify-between p-2 rounded-lg hover:bg-zion-purple/10 transition-all duration-300">
                        <div className="flex items-center space-x-2">
                          <Heart className="w-3 h-3 text-zion-cyan" />
                          <span className="text-zion-slate-light group-hover:text-white transition-colors text-sm">AI Healthcare Analytics</span>
                        </div>
                      </Link>
                    </li>
                    <li>
                      <Link to="/services/ai-legal-document-automation-platform" className="group flex items-center justify-between p-2 rounded-lg hover:bg-zion-purple/10 transition-all duration-300">
                        <div className="flex items-center space-x-2">
                          <FileText className="w-3 h-3 text-zion-cyan" />
                          <span className="text-zion-slate-light group-hover:text-white transition-colors text-sm">AI Legal Automation</span>
                        </div>
                      </Link>
                    </li>
                    <li>
                      <Link to="/services/ai-supply-chain-optimization-platform" className="group flex items-center justify-between p-2 rounded-lg hover:bg-zion-purple/10 transition-all duration-300">
                        <div className="flex items-center space-x-2">
                          <Truck className="w-3 h-3 text-zion-cyan" />
                          <span className="text-zion-slate-light group-hover:text-white transition-colors text-sm">AI Supply Chain</span>
                        </div>
                      </Link>
                    </li>
                    <li>
                      <Link to="/services/ai-hr-platform" className="group flex items-center justify-between p-2 rounded-lg hover:bg-zion-purple/10 transition-all duration-300">
                        <div className="flex items-center space-x-2">
                          <Users className="w-3 h-3 text-zion-cyan" />
                          <span className="text-zion-slate-light group-hover:text-white transition-colors text-sm">AI HR Platform</span>
                        </div>
                      </Link>
                    </li>
                    <li>
                      <Link to="/services/ai-autonomous-research-assistant" className="group flex items-center justify-between p-2 rounded-lg hover:bg-zion-purple/10 transition-all duration-300">
                        <div className="flex items-center space-x-2">
                          <Search className="w-3 h-3 text-zion-cyan" />
                          <span className="text-zion-slate-light group-hover:text-white transition-colors text-sm">AI Research Assistant</span>
                        </div>
                      </Link>
                    </li>
                  </ul>
                </div>

                {/* Emerging Technologies Column */}
                <div className="space-y-4">
                  <div className="flex items-center space-x-3 pb-3 border-b border-zion-purple/20">
                    <div className="p-2 bg-zion-purple/20 rounded-lg">
                      <Rocket className="w-5 h-5 text-zion-purple"/>
                    </div>
                    <h4 className="text-zion-purple font-bold text-lg">Emerging Tech</h4>
                  </div>
                  <ul className="space-y-2">
                    <li>
                      <Link to="/services/ai-space-technology-platform" className="group flex items-center justify-between p-2 rounded-lg hover:bg-zion-purple/10 transition-all duration-300">
                        <div className="flex items-center space-x-2">
                          <Satellite className="w-3 h-3 text-zion-purple" />
                          <span className="text-zion-slate-light group-hover:text-white transition-colors text-sm">AI Space Technology</span>
                        </div>
                      </Link>
                    </li>
                    <li>
                      <Link to="/services/ai-quantum-computing-solutions" className="group flex items-center justify-between p-2 rounded-lg hover:bg-zion-purple/10 transition-all duration-300">
                        <div className="flex items-center space-x-2">
                          <Atom className="w-3 h-3 text-zion-purple" />
                          <span className="text-zion-slate-light group-hover:text-white transition-colors text-sm">Quantum Computing</span>
                        </div>
                      </Link>
                    </li>
                    <li>
                      <Link to="/services/ai-autonomous-logistics-platform" className="group flex items-center justify-between p-2 rounded-lg hover:bg-zion-purple/10 transition-all duration-300">
                        <div className="flex items-center space-x-2">
                          <Truck className="w-3 h-3 text-zion-purple" />
                          <span className="text-zion-slate-light group-hover:text-white transition-colors text-sm">Autonomous Logistics</span>
                        </div>
                      </Link>
                    </li>
                    <li>
                      <Link to="/services/ai-powered-seo" className="group flex items-center justify-between p-2 rounded-lg hover:bg-zion-purple/10 transition-all duration-300">
                        <div className="flex items-center space-x-2">
                          <Search className="w-3 h-3 text-zion-purple" />
                          <span className="text-zion-slate-light group-hover:text-white transition-colors text-sm">AI-Powered SEO</span>
                        </div>
                      </Link>
                    </li>
                    <li>
                      <Link to="/services/micro-saas-solutions-comprehensive" className="group flex items-center justify-between p-2 rounded-lg hover:bg-zion-purple/10 transition-all duration-300">
                        <div className="flex items-center space-x-2">
                          <Layers className="w-3 h-3 text-zion-purple" />
                          <span className="text-zion-slate-light group-hover:text-white transition-colors text-sm">Micro SaaS Solutions</span>
                        </div>
                      </Link>
                    </li>
                    <li>
                      <Link to="/innovative-services-showcase-2026" className="group flex items-center justify-between p-2 rounded-lg hover:bg-zion-purple/10 transition-all duration-300">
                        <div className="flex items-center space-x-2">
                          <Star className="w-3 h-3 text-zion-purple" />
                          <span className="text-zion-slate-light group-hover:text-white transition-colors text-sm">2026 Innovation Showcase</span>
                        </div>
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
                    to="/comprehensive-services-showcase-2025" 
                    className="flex items-center space-x-2 text-zion-purple hover:text-zion-purple-light transition-colors font-medium group"
                  >
                    <span>2025 Services Showcase</span>
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
          <div className="absolute top-full left-0 mt-3 w-96 bg-gradient-to-br from-zion-blue-dark via-zion-slate-dark to-zion-blue-dark border border-zion-purple/30 rounded-2xl shadow-2xl shadow-zion-purple/20 z-50 backdrop-blur-sm">
            <div className="p-6">
              <div className="space-y-4">
                <div className="flex items-center space-x-3 pb-3 border-b border-zion-purple/20">
                  <div className="p-2 bg-zion-cyan/20 rounded-lg">
                    <Target className="w-5 h-5 text-zion-cyan"/>
                  </div>
                  <h4 className="text-zion-cyan font-bold text-lg">Industry Solutions</h4>
                </div>
                <div className="grid grid-cols-2 gap-3">
                  <Link to="/solutions/healthcare" className="group flex items-center space-x-3 p-3 rounded-lg hover:bg-zion-purple/10 transition-all duration-300">
                    <Heart className="w-4 h-4 text-zion-cyan" />
                    <span className="text-zion-slate-light group-hover:text-white transition-colors">Healthcare</span>
                  </Link>
                  <Link to="/solutions/financial" className="group flex items-center space-x-3 p-3 rounded-lg hover:bg-zion-purple/10 transition-all duration-300">
                    <DollarSign className="w-4 h-4 text-zion-cyan" />
                    <span className="text-zion-slate-light group-hover:text-white transition-colors">Financial</span>
                  </Link>
                  <Link to="/solutions/manufacturing" className="group flex items-center space-x-3 p-3 rounded-lg hover:bg-zion-purple/10 transition-all duration-300">
                    <Factory className="w-4 h-4 text-zion-cyan" />
                    <span className="text-zion-slate-light group-hover:text-white transition-colors">Manufacturing</span>
                  </Link>
                  <Link to="/solutions/government" className="group flex items-center space-x-3 p-3 rounded-lg hover:bg-zion-purple/10 transition-all duration-300">
                    <Building2 className="w-4 h-4 text-zion-cyan" />
                    <span className="text-zion-slate-light group-hover:text-white transition-colors">Government</span>
                  </Link>
                  <Link to="/solutions/retail" className="group flex items-center space-x-3 p-3 rounded-lg hover:bg-zion-purple/10 transition-all duration-300">
                    <Briefcase className="w-4 h-4 text-zion-cyan" />
                    <span className="text-zion-slate-light group-hover:text-white transition-colors">Retail</span>
                  </Link>
                  <Link to="/enterprise" className="group flex items-center space-x-3 p-3 rounded-lg hover:bg-zion-purple/10 transition-all duration-300">
                    <Building2 className="w-4 h-4 text-zion-cyan" />
                    <span className="text-zion-slate-light group-hover:text-white transition-colors">Enterprise</span>
                  </Link>
                </div>
                <div className="pt-4 border-t border-zion-purple/20">
                  <Link 
                    to="/solutions" 
                    className="flex items-center justify-between w-full p-3 rounded-lg hover:bg-zion-purple/10 transition-all duration-300 group"
                  >
                    <span className="text-zion-cyan font-medium">View All Solutions</span>
                    <ArrowRight className="w-4 h-4 text-zion-cyan group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
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
          <div className="absolute top-full left-0 mt-3 w-72 bg-gradient-to-br from-zion-blue-dark via-zion-slate-dark to-zion-blue-dark border border-zion-purple/30 rounded-2xl shadow-2xl shadow-zion-purple/20 z-50 backdrop-blur-sm">
            <div className="p-6">
              <div className="space-y-4">
                <div className="flex items-center space-x-3 pb-3 border-b border-zion-purple/20">
                  <div className="p-2 bg-zion-purple/20 rounded-lg">
                    <Building2 className="w-5 h-5 text-zion-purple"/>
                  </div>
                  <h4 className="text-zion-purple font-bold text-lg">About Zion Tech</h4>
                </div>
                <ul className="space-y-2">
                  <li>
                    <Link to="/about" className="group flex items-center justify-between p-3 rounded-lg hover:bg-zion-purple/10 transition-all duration-300">
                      <div className="flex items-center space-x-3">
                        <Users2 className="w-4 h-4 text-zion-purple" />
                        <span className="text-zion-slate-light group-hover:text-white transition-colors">About Us</span>
                      </div>
                    </Link>
                  </li>
                  <li>
                    <Link to="/leadership" className="group flex items-center justify-between p-3 rounded-lg hover:bg-zion-purple/10 transition-all duration-300">
                      <div className="flex items-center space-x-3">
                        <Award className="w-4 h-4 text-zion-purple" />
                        <span className="text-zion-slate-light group-hover:text-white transition-colors">Leadership</span>
                      </div>
                    </Link>
                  </li>
                  <li>
                    <Link to="/careers" className="group flex items-center justify-between p-3 rounded-lg hover:bg-zion-purple/10 transition-all duration-300">
                      <div className="flex items-center space-x-3">
                        <Users className="w-4 h-4 text-zion-purple" />
                        <span className="text-zion-slate-light group-hover:text-white transition-colors">Careers</span>
                      </div>
                    </Link>
                  </li>
                  <li>
                    <Link to="/partners" className="group flex items-center justify-between p-3 rounded-lg hover:bg-zion-purple/10 transition-all duration-300">
                      <div className="flex items-center space-x-3">
                        <Handshake className="w-4 h-4 text-zion-purple" />
                        <span className="text-zion-slate-light group-hover:text-white transition-colors">Partners</span>
                      </div>
                    </Link>
                  </li>
                  <li>
                    <Link to="/news" className="group flex items-center justify-between p-3 rounded-lg hover:bg-zion-purple/10 transition-all duration-300">
                      <div className="flex items-center space-x-3">
                        <FileText className="w-4 h-4 text-zion-purple" />
                        <span className="text-zion-slate-light group-hover:text-white transition-colors">News & Press</span>
                      </div>
                    </Link>
                  </li>
                  <li>
                    <Link to="/events" className="group flex items-center justify-between p-3 rounded-lg hover:bg-zion-purple/10 transition-all duration-300">
                      <div className="flex items-center space-x-3">
                        <Calendar className="w-4 h-4 text-zion-purple" />
                        <span className="text-zion-slate-light group-hover:text-white transition-colors">Events</span>
                      </div>
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
                    <BookOpen className="w-5 h-5 text-zion-cyan"/>
                  </div>
                  <h4 className="text-zion-cyan font-bold text-lg">Knowledge Hub</h4>
                </div>
                <div className="grid grid-cols-2 gap-2">
                  <Link to="/blog" className="group flex items-center space-x-2 p-3 rounded-lg hover:bg-zion-purple/10 transition-all duration-300">
                    <FileText className="w-4 h-4 text-zion-cyan" />
                    <span className="text-zion-slate-light group-hover:text-white transition-colors text-sm">Blog</span>
                  </Link>
                  <Link to="/docs" className="group flex items-center space-x-2 p-3 rounded-lg hover:bg-zion-purple/10 transition-all duration-300">
                    <BookOpen className="w-4 h-4 text-zion-cyan" />
                    <span className="text-zion-slate-light group-hover:text-white transition-colors text-sm">Documentation</span>
                  </Link>
                  <Link to="/webinars" className="group flex items-center space-x-2 p-3 rounded-lg hover:bg-zion-purple/10 transition-all duration-300">
                    <Monitor className="w-4 h-4 text-zion-cyan" />
                    <span className="text-zion-slate-light group-hover:text-white transition-colors text-sm">Webinars</span>
                  </Link>
                  <Link to="/white-papers" className="group flex items-center space-x-2 p-3 rounded-lg hover:bg-zion-purple/10 transition-all duration-300">
                    <FileText className="w-4 h-4 text-zion-cyan" />
                    <span className="text-zion-slate-light group-hover:text-white transition-colors text-sm">White Papers</span>
                  </Link>
                  <Link to="/case-studies" className="group flex items-center space-x-2 p-3 rounded-lg hover:bg-zion-purple/10 transition-all duration-300">
                    <BarChart className="w-4 h-4 text-zion-cyan" />
                    <span className="text-zion-slate-light group-hover:text-white transition-colors text-sm">Case Studies</span>
                  </Link>
                  <Link to="/training" className="group flex items-center space-x-2 p-3 rounded-lg hover:bg-zion-purple/10 transition-all duration-300">
                    <GraduationCap className="w-4 h-4 text-zion-cyan" />
                    <span className="text-zion-slate-light group-hover:text-white transition-colors text-sm">Training</span>
                  </Link>
                </div>
                <div className="pt-4 border-t border-zion-purple/20">
                  <Link to="/help" className="group flex items-center justify-between w-full p-3 rounded-lg hover:bg-zion-purple/10 transition-all duration-300">
                    <div className="flex items-center space-x-3">
                      <Headphones className="w-4 h-4 text-zion-cyan" />
                      <span className="text-zion-cyan font-medium">Help & Support</span>
                    </div>
                    <ArrowRight className="w-4 h-4 text-zion-cyan group-hover:translate-x-1 transition-transform" />
                  </Link>
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
    </nav>
  );
}
