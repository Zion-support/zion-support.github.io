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
  Factory,
  Heart,
  Briefcase,
  Award,
  BookOpen,
  Layers,
  Sparkles,
  CheckCircle,
  ExternalLink,
  Calendar,
  Truck,
  Bot,
  Headphones
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
              <div className="grid grid-cols-4 gap-8">
                <div>
                  <h4 className="text-zion-cyan font-semibold mb-6 flex items-center text-lg">
                    <Brain className="w-5 h-5 mr-3"/>
                    AI & Automation
                  </h4>
                  <ul className="space-y-4 text-sm">
                    <li>
                      <Link to="/services/ai-autonomous-business-operations-platform" className="text-zion-slate-light hover:text-zion-cyan transition-colors flex items-center group">
                        <Bot className="w-4 h-4 mr-3 group-hover:scale-110 transition-transform" />
                        <span>AI Business Operations</span>
                      </Link>
                    </li>
                    <li>
                      <Link to="/services/ai-customer-experience-analytics-platform" className="text-zion-slate-light hover:text-zion-cyan transition-colors flex items-center group">
                        <BarChart3 className="w-4 h-4 mr-3 group-hover:scale-110 transition-transform" />
                        <span>Customer Analytics</span>
                      </Link>
                    </li>
                    <li>
                      <Link to="/services/ai-project-management-platform" className="text-zion-slate-light hover:text-zion-cyan transition-colors flex items-center group">
                        <Workflow className="w-4 h-4 mr-3 group-hover:scale-110 transition-transform" />
                        <span>Project Management</span>
                      </Link>
                    </li>
                    <li>
                      <Link to="/services/ai-business-intelligence-dashboard" className="text-zion-slate-light hover:text-zion-cyan transition-colors flex items-center group">
                        <TrendingUp className="w-4 h-4 mr-3 group-hover:scale-110 transition-transform" />
                        <span>Business Intelligence</span>
                      </Link>
                    </li>
                    <li>
                      <Link to="/services/ai-marketing-automation-platform" className="text-zion-slate-light hover:text-zion-cyan transition-colors flex items-center group">
                        <Target className="w-4 h-4 mr-3 group-hover:scale-110 transition-transform" />
                        <span>Marketing Automation</span>
                      </Link>
                    </li>
                    <li>
                      <Link to="/services/ai-hr-platform" className="text-zion-slate-light hover:text-zion-cyan transition-colors flex items-center group">
                        <Users className="w-4 h-4 mr-3 group-hover:scale-110 transition-transform" />
                        <span>HR Platform</span>
                      </Link>
                    </li>
                  </ul>
                </div>
                <div>
                  <h4 className="text-zion-cyan font-semibold mb-6 flex items-center text-lg">
                    <Cloud className="w-5 h-5 mr-3"/>
                    Cloud & Infrastructure
                  </h4>
                  <ul className="space-y-4 text-sm">
                    <li>
                      <Link to="/services/quantum-edge-computing-solutions" className="text-zion-slate-light hover:text-zion-cyan transition-colors flex items-center group">
                        <Atom className="w-4 h-4 mr-3 group-hover:scale-110 transition-transform" />
                        <span>Quantum Edge Computing</span>
                      </Link>
                    </li>
                    <li>
                      <Link to="/services/cloud-finops-optimizer" className="text-zion-slate-light hover:text-zion-cyan transition-colors flex items-center group">
                        <DollarSign className="w-4 h-4 mr-3 group-hover:scale-110 transition-transform" />
                        <span>Cloud FinOps</span>
                      </Link>
                    </li>
                    <li>
                      <Link to="/services/it-infrastructure-management" className="text-zion-slate-light hover:text-zion-cyan transition-colors flex items-center group">
                        <Server className="w-4 h-4 mr-3 group-hover:scale-110 transition-transform" />
                        <span>Infrastructure Management</span>
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
                        <Sparkles className="w-4 h-4 mr-3 group-hover:scale-110 transition-transform" />
                        <span>Digital Transformation</span>
                      </Link>
                    </li>
                    <li>
                      <Link to="/services/blockchain-enterprise-solutions" className="text-zion-slate-light hover:text-zion-cyan transition-colors flex items-center group">
                        <Network className="w-4 h-4 mr-3 group-hover:scale-110 transition-transform" />
                        <span>Blockchain Solutions</span>
                      </Link>
                    </li>
                  </ul>
                </div>
                <div>
                  <h4 className="text-zion-cyan font-semibold mb-6 flex items-center text-lg">
                    <Layers className="w-5 h-5 mr-3"/>
                    Micro SaaS
                  </h4>
                  <ul className="space-y-4 text-sm">
                    <li>
                      <Link to="/services/ai-sales-copilot" className="text-zion-slate-light hover:text-zion-cyan transition-colors flex items-center group">
                        <TrendingUp className="w-4 h-4 mr-3 group-hover:scale-110 transition-transform" />
                        <span>AI Sales Copilot</span>
                      </Link>
                    </li>
                    <li>
                      <Link to="/services/ai-customer-support-automation" className="text-zion-slate-light hover:text-zion-cyan transition-colors flex items-center group">
                        <MessageCircle className="w-4 h-4 mr-3 group-hover:scale-110 transition-transform" />
                        <span>Customer Support AI</span>
                      </Link>
                    </li>
                    <li>
                      <Link to="/services/ai-compliance-assistant" className="text-zion-slate-light hover:text-zion-cyan transition-colors flex items-center group">
                        <CheckCircle className="w-4 h-4 mr-3 group-hover:scale-110 transition-transform" />
                        <span>Compliance Assistant</span>
                      </Link>
                    </li>
                    <li>
                      <Link to="/services/ai-workflow-orchestrator" className="text-zion-slate-light hover:text-zion-cyan transition-colors flex items-center group">
                        <Workflow className="w-4 h-4 mr-3 group-hover:scale-110 transition-transform" />
                        <span>Workflow Orchestrator</span>
                      </Link>
                    </li>
                    <li>
                      <Link to="/services/ai-predictive-maintenance" className="text-zion-slate-light hover:text-zion-cyan transition-colors flex items-center group">
                        <Settings className="w-4 h-4 mr-3 group-hover:scale-110 transition-transform" />
                        <span>Predictive Maintenance</span>
                      </Link>
                    </li>
                    <li>
                      <Link to="/micro-saas" className="text-zion-slate-light hover:text-zion-cyan transition-colors flex items-center group">
                        <Code className="w-4 h-4 mr-3 group-hover:scale-110 transition-transform" />
                        <span>All Micro SaaS</span>
                      </Link>
                    </li>
                  </ul>
                </div>
                <div>
                  <h4 className="text-zion-cyan font-semibold mb-6 flex items-center text-lg">
                    <Rocket className="w-5 h-5 mr-3"/>
                    Emerging Tech
                  </h4>
                  <ul className="space-y-4 text-sm">
                    <li>
                      <Link to="/services/ai-space-technology-platform" className="text-zion-slate-light hover:text-zion-cyan transition-colors flex items-center group">
                        <Satellite className="w-4 h-4 mr-3 group-hover:scale-110 transition-transform" />
                        <span>Space Technology</span>
                      </Link>
                    </li>
                    <li>
                      <Link to="/services/ai-autonomous-logistics-platform" className="text-zion-slate-light hover:text-zion-cyan transition-colors flex items-center group">
                        <Truck className="w-4 h-4 mr-3 group-hover:scale-110 transition-transform" />
                        <span>Autonomous Logistics</span>
                      </Link>
                    </li>
                    <li>
                      <Link to="/services/ai-powered-seo" className="text-zion-slate-light hover:text-zion-cyan transition-colors flex items-center group">
                        <Search className="w-4 h-4 mr-3 group-hover:scale-110 transition-transform" />
                        <span>AI-Powered SEO</span>
                      </Link>
                    </li>
                    <li>
                      <Link to="/services/ai-healthcare-platform" className="text-zion-slate-light hover:text-zion-cyan transition-colors flex items-center group">
                        <Heart className="w-4 h-4 mr-3 group-hover:scale-110 transition-transform" />
                        <span>Healthcare Platform</span>
                      </Link>
                    </li>
                    <li>
                      <Link to="/services/ai-legal-document-automation-platform" className="text-zion-slate-light hover:text-zion-cyan transition-colors flex items-center group">
                        <FileText className="w-4 h-4 mr-3 group-hover:scale-110 transition-transform" />
                        <span>Legal Automation</span>
                      </Link>
                    </li>
                    <li>
                      <Link to="/emerging-tech" className="text-zion-slate-light hover:text-zion-cyan transition-colors flex items-center group">
                        <Lightbulb className="w-4 h-4 mr-3 group-hover:scale-110 transition-transform" />
                        <span>All Emerging Tech</span>
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
                    <span>All Services</span>
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Link>
                  <Link to="/comprehensive-services-showcase-2025" className="text-zion-purple hover:text-zion-purple-light transition-colors text-sm font-medium flex items-center">
                    2025 Showcase
                    <Star className="w-4 h-4 ml-2"/>
                  </Link>
                  <Link to="/innovative-services-showcase-2026" className="text-zion-purple hover:text-zion-purple-light transition-colors text-sm font-medium flex items-center">
                    2026 Innovation
                    <Rocket className="w-4 h-4 ml-2"/>
                  </Link>
                  <Link to="/request-quote" className="text-zion-cyan hover:text-zion-cyan-light transition-colors text-sm font-medium flex items-center">
                    Get Quote
                    <ExternalLink className="w-4 h-4 ml-2"/>
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
            className="absolute top-full left-0 mt-2 w-[600px] bg-zion-blue-dark border border-zion-purple/30 rounded-xl shadow-2xl shadow-zion-purple/20 z-50 backdrop-blur-sm"
          >
            <div className="p-6">
              <div className="grid grid-cols-2 gap-8">
                <div>
                  <h4 className="text-zion-cyan font-semibold mb-4 text-lg">Industry Solutions</h4>
                  <ul className="space-y-3 text-sm">
                    <li>
                      <Link to="/solutions/healthcare" className="text-zion-slate-light hover:text-zion-cyan transition-colors flex items-center group">
                        <Heart className="w-4 h-4 mr-3 group-hover:scale-110 transition-transform" />
                        <span>Healthcare & Medical</span>
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
                        <span>Government & Public</span>
                      </Link>
                    </li>
                  </ul>
                </div>
                <div>
                  <h4 className="text-zion-cyan font-semibold mb-4 text-lg">Enterprise Solutions</h4>
                  <ul className="space-y-3 text-sm">
                    <li>
                      <Link to="/digital-transformation" className="text-zion-slate-light hover:text-zion-cyan transition-colors flex items-center group">
                        <Sparkles className="w-4 h-4 mr-3 group-hover:scale-110 transition-transform" />
                        <span>Digital Transformation</span>
                      </Link>
                    </li>
                    <li>
                      <Link to="/cloud-solutions" className="text-zion-slate-light hover:text-zion-cyan transition-colors flex items-center group">
                        <Cloud className="w-4 h-4 mr-3 group-hover:scale-110 transition-transform" />
                        <span>Cloud Solutions</span>
                      </Link>
                    </li>
                    <li>
                      <Link to="/enterprise" className="text-zion-slate-light hover:text-zion-cyan transition-colors flex items-center group">
                        <Building2 className="w-4 h-4 mr-3 group-hover:scale-110 transition-transform" />
                        <span>Enterprise Platform</span>
                      </Link>
                    </li>
                    <li>
                      <Link to="/industry-solutions" className="text-zion-slate-light hover:text-zion-cyan transition-colors flex items-center group">
                        <Target className="w-4 h-4 mr-3 group-hover:scale-110 transition-transform" />
                        <span>Industry Overview</span>
                      </Link>
                    </li>
                    <li>
                      <Link to="/solutions" className="text-zion-slate-light hover:text-zion-cyan transition-colors flex items-center group">
                        <ArrowRight className="w-4 h-4 mr-3 group-hover:scale-110 transition-transform" />
                        <span>All Solutions</span>
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
                    <span>Leadership Team</span>
                  </Link>
                </li>
                <li>
                  <Link to="/careers" className="text-zion-slate-light hover:text-zion-cyan transition-colors flex items-center group">
                    <Briefcase className="w-4 h-4 mr-3 group-hover:scale-110 transition-transform" />
                    <span>Careers & Jobs</span>
                  </Link>
                </li>
                <li>
                  <Link to="/partners" className="text-zion-slate-light hover:text-zion-cyan transition-colors flex items-center group">
                    <Handshake className="w-4 h-4 mr-3 group-hover:scale-110 transition-transform" />
                    <span>Partners & Alliances</span>
                  </Link>
                </li>
                <li>
                  <Link to="/news" className="text-zion-slate-light hover:text-zion-cyan transition-colors flex items-center group">
                    <FileText className="w-4 h-4 mr-3 group-hover:scale-110 transition-transform" />
                    <span>News & Press</span>
                  </Link>
                </li>
                <li>
                  <Link to="/events" className="text-zion-slate-light hover:text-zion-cyan transition-colors flex items-center group">
                    <Calendar className="w-4 h-4 mr-3 group-hover:scale-110 transition-transform" />
                    <span>Events & Webinars</span>
                  </Link>
                </li>
                <li>
                  <Link to="/contact" className="text-zion-slate-light hover:text-zion-cyan transition-colors flex items-center group">
                    <MessageCircle className="w-4 h-4 mr-3 group-hover:scale-110 transition-transform" />
                    <span>Contact Us</span>
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
          <BookOpen className="w-4 h-4"/>
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
                  <h4 className="text-zion-cyan font-semibold mb-4">Learning & Content</h4>
                  <ul className="space-y-3 text-sm">
                    <li>
                      <Link to="/blog" className="text-zion-slate-light hover:text-zion-cyan transition-colors flex items-center group">
                        <FileText className="w-4 h-4 mr-3 group-hover:scale-110 transition-transform" />
                        <span>Blog & Insights</span>
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
                        <span>Training & Certification</span>
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
                <div>
                  <h4 className="text-zion-cyan font-semibold mb-4">Support & Research</h4>
                  <ul className="space-y-3 text-sm">
                    <li>
                      <Link to="/docs" className="text-zion-slate-light hover:text-zion-cyan transition-colors flex items-center group">
                        <Code className="w-4 h-4 mr-3 group-hover:scale-110 transition-transform" />
                        <span>API Documentation</span>
                      </Link>
                    </li>
                    <li>
                      <Link to="/case-studies" className="text-zion-slate-light hover:text-zion-cyan transition-colors flex items-center group">
                        <BarChart className="w-4 h-4 mr-3 group-hover:scale-110 transition-transform" />
                        <span>Case Studies</span>
                      </Link>
                    </li>
                    <li>
                      <Link to="/research-development" className="text-zion-slate-light hover:text-zion-cyan transition-colors flex items-center group">
                        <Lightbulb className="w-4 h-4 mr-3 group-hover:scale-110 transition-transform" />
                        <span>Research & Development</span>
                      </Link>
                    </li>
                    <li>
                      <Link to="/help" className="text-zion-slate-light hover:text-zion-cyan transition-colors flex items-center group">
                        <Headphones className="w-4 h-4 mr-3 group-hover:scale-110 transition-transform" />
                        <span>Help & Support</span>
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
  );
}
