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
    <nav className={cn("hidden md:flex items-center space-x-6", className)}>
      <NavLink 
        to="/" 
        className={({ isActive }) => 
          cn("text-sm font-medium transition-all duration-200 hover:text-cyan-400 hover:scale-105", 
            isActive ? "text-cyan-400" : "text-zinc-300"
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
          className="flex items-center space-x-1 text-sm font-medium transition-all duration-200 hover:text-cyan-400 hover:scale-105 text-zinc-300 group"
        >
          <Zap className="w-4 h-4 group-hover:text-cyan-400 transition-colors duration-200"/>
          <span>Services</span>
          <ChevronDown className="w-3 h-3 group-hover:text-cyan-400 transition-colors duration-200"/>
        </button>
        {isServicesOpen && (
          <div 
            onMouseEnter={() => setIsServicesOpen(true)} 
            onMouseLeave={() => setIsServicesOpen(false)} 
            className="absolute top-full left-0 mt-2 w-96 bg-slate-800/95 backdrop-blur-sm border border-slate-600/50 rounded-xl shadow-2xl shadow-black/50 z-50 transform transition-all duration-200"
          >
            <div className="p-6">
              <div className="grid grid-cols-2 gap-6">
                <div>
                  <h4 className="text-zion-cyan font-semibold mb-4 flex items-center">
                    <Zap className="w-4 h-4 mr-2"/>
                    AI & Automation
                  </h4>
                  <ul className="space-y-3 text-sm">
                    <li>
                      <Link to="/services/ai-enterprise-automation-platform" className="text-zinc-300 hover:text-cyan-400 transition-all duration-200 flex items-center group">
                        <Brain className="w-3 h-3 mr-2 group-hover:text-cyan-400 transition-colors duration-200" />
                        AI Enterprise Automation
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
                      <Link to="/services/ai-enterprise-intelligence-platform" className="text-zion-slate-light hover:text-zion-cyan transition-colors flex items-center">
                        <BarChart3 className="w-3 h-3 mr-2" />
                        AI Enterprise Intelligence
                      </Link>
                    </li>
                    <li>
                      <Link to="/services/quantum-ai-cybersecurity-platform" className="text-zion-slate-light hover:text-zion-cyan transition-colors flex items-center">
                        <Shield className="w-3 h-3 mr-2" />
                        Quantum AI Cybersecurity
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
                      <Link to="/services/ai-supply-chain-optimization" className="text-zion-slate-light hover:text-zion-cyan transition-colors flex items-center">
                        <Workflow className="w-3 h-3 mr-2" />
                        Supply Chain AI
                      </Link>
                    </li>
                    <li>
                      <Link to="/services/blockchain-enterprise-solutions" className="text-zion-slate-light hover:text-zion-cyan transition-colors flex items-center">
                        <Network className="w-3 h-3 mr-2" />
                        Blockchain Solutions
                      </Link>
                    </li>
                    {/* New Innovative Services 2026 */}
                    <li>
                      <Link to="/services/ai-powered-customer-churn-predictor" className="text-zion-slate-light hover:text-zion-cyan transition-colors flex items-center">
                        <TrendingUp className="w-3 h-3 mr-2" />
                        AI Churn Predictor
                      </Link>
                    </li>
                    <li>
                      <Link to="/services/ai-powered-invoice-automation" className="text-zion-slate-light hover:text-zion-cyan transition-colors flex items-center">
                        <FileText className="w-3 h-3 mr-2" />
                        AI Invoice Automation
                      </Link>
                    </li>
                    <li>
                      <Link to="/services/ai-powered-legal-document-analyzer" className="text-zion-slate-light hover:text-zion-cyan transition-colors flex items-center">
                        <FileText className="w-3 h-3 mr-2" />
                        AI Legal Analyzer
                      </Link>
                    </li>
                    <li>
                      <Link to="/services/ai-powered-hr-recruitment-assistant" className="text-zion-slate-light hover:text-zion-cyan transition-colors flex items-center">
                        <Users className="w-3 h-3 mr-2" />
                        AI HR Assistant
                      </Link>
                    </li>
                    <li>
                      <Link to="/services/ai-powered-marketing-automation" className="text-zion-slate-light hover:text-zion-cyan transition-colors flex items-center">
                        <TrendingUp className="w-3 h-3 mr-2" />
                        AI Marketing Automation
                      </Link>
                    </li>
                    {/* Additional services from remote branch */}
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
                    {/* New Innovative Services 2026 */}
                    <li>
                      <Link to="/services/ai-powered-customer-churn-predictor" className="text-zion-slate-light hover:text-zion-cyan transition-colors flex items-center">
                        <TrendingUp className="w-3 h-3 mr-2" />
                        AI Churn Predictor
                      </Link>
                    </li>
                    <li>
                      <Link to="/services/ai-powered-invoice-automation" className="text-zion-slate-light hover:text-zion-cyan transition-colors flex items-center">
                        <FileText className="w-3 h-3 mr-2" />
                        AI Invoice Automation
                      </Link>
                    </li>
                    <li>
                      <Link to="/services/ai-powered-legal-document-analyzer" className="text-zion-slate-light hover:text-zion-cyan transition-colors flex items-center">
                        <FileText className="w-3 h-3 mr-2" />
                        AI Legal Analyzer
                      </Link>
                    </li>
                    <li>
                      <Link to="/services/ai-powered-hr-recruitment-assistant" className="text-zion-slate-light hover:text-zion-cyan transition-colors flex items-center">
                        <Users className="w-3 h-3 mr-2" />
                        AI HR Assistant
                      </Link>
                    </li>
                    <li>
                      <Link to="/services/ai-powered-marketing-automation" className="text-zion-slate-light hover:text-zion-cyan transition-colors flex items-center">
                        <TrendingUp className="w-3 h-3 mr-2" />
                        AI Marketing Automation
                      </Link>
                    </li>
                  </ul>
                </div>
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
                      <Link to="/services/blockchain-enterprise-solutions" className="text-zion-slate-light hover:text-zion-cyan transition-colors flex items-center">
                        <Network className="w-3 h-3 mr-2" />
                        Blockchain Solutions
                      </Link>
                    </li>
                    {/* Additional services from remote branch */}
                    <li>
                      <Link to="/services/cloud-finops-optimizer" className="text-zion-slate-light hover:text-zion-cyan transition-colors flex items-center">
                        <DollarSign className="w-3 h-3 mr-2" />
                        Cloud FinOps Optimizer
                      </Link>
                    </li>
                    <li>
                      <Link to="/services/it-infrastructure" className="text-zion-slate-light hover:text-zion-cyan transition-colors flex items-center">
                        <Server className="w-3 h-3 mr-2" />
                        IT Infrastructure
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="mt-6 pt-6 border-t border-zion-purple/20">
                <div className="grid grid-cols-1 gap-3">
                  <Link to="/services" className="text-zion-cyan hover:text-zion-cyan-light transition-colors text-sm font-medium flex items-center justify-center">
                    View All Services
                    <TrendingUp className="w-4 h-4 ml-2"/>
                  </Link>
                  <Link to="/innovative-micro-saas-showcase-2026" className="text-zion-cyan hover:text-zion-cyan-light transition-colors text-sm font-medium flex items-center justify-center">
                    New 2026 Services
                    <Rocket className="w-4 h-4 ml-2"/>
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
                    Micro SaaS
                  </h4>
                  <ul className="space-y-3 text-sm">
                    <li>
                      <Link to="/services/micro-saas-solutions-comprehensive" className="text-zion-slate-light hover:text-zion-cyan transition-colors flex items-center">
                        <Zap className="w-3 h-3 mr-2" />
                        All Micro SaaS
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
                        AI Compliance
                      </Link>
                    </li>
                    <li>
                      <Link to="/services/ai-customer-support-automation" className="text-zion-slate-light hover:text-zion-cyan transition-colors flex items-center">
                        <MessageCircle className="w-3 h-3 mr-2" />
                        AI Support
                      </Link>
                    </li>
                    <li>
                      <Link to="/services/ai-hr-management-platform" className="text-zion-slate-light hover:text-zion-cyan transition-colors flex items-center">
                        <Users className="w-3 h-3 mr-2" />
                        AI HR Management
                      </Link>
                    </li>
                    {/* Additional solutions from remote branch */}
                    <li>
                      <Link to="/talent" className="text-zion-slate-light hover:text-zion-cyan transition-colors flex items-center">
                        <Users2 className="w-3 h-3 mr-2" />
                        Find Experts
                      </Link>
                    </li>
                    <li>
                      <Link to="/services/interview-assessment-ai" className="text-zion-slate-light hover:text-zion-cyan transition-colors flex items-center">
                        <Brain className="w-3 h-3 mr-2" />
                        AI Hiring
                      </Link>
                    </li>
                  </ul>
                </div>
                <div>
                  <h4 className="text-zion-cyan font-semibold mb-4 flex items-center">
                    <HardDrive className="w-4 h-4 mr-2"/>
                    Enterprise
                  </h4>
                  <ul className="space-y-3 text-sm">
                    <li>
                      <Link to="/enterprise" className="text-zion-slate-light hover:text-zion-cyan transition-colors flex items-center">
                        <Building2 className="w-3 h-3 mr-2" />
                        Enterprise Solutions
                      </Link>
                    </li>
                    <li>
                      <Link to="/solutions" className="text-zion-slate-light hover:text-zion-cyan transition-colors flex items-center">
                        <Target className="w-3 h-3 mr-2" />
                        Industry Solutions
                      </Link>
                    </li>
                    <li>
                      <Link to="/case-studies" className="text-zion-slate-light hover:text-zion-cyan transition-colors flex items-center">
                        <FileText className="w-3 h-3 mr-2" />
                        Case Studies
                      </Link>
                    </li>
                    <li>
                      <Link to="/marketplace" className="text-zion-slate-light hover:text-zion-cyan transition-colors flex items-center">
                        <ShoppingCart className="w-3 h-3 mr-2" />
                        Marketplace
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
                  <Link to="/innovative-services-showcase-2025" className="text-zion-slate-light hover:text-zion-cyan transition-colors flex items-center">
                    <Rocket className="w-3 h-3 mr-2" />
                    Innovative Services 2025
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

// Missing icon components
const ShoppingCart = ({ className }: { className?: string }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4m0 0L7 13m0 0l-2.5 5M7 13l2.5 5m6-5v6a2 2 0 01-2 2H9a2 2 0 01-2-2v-6m8 0V9a2 2 0 00-2-2H9a2 2 0 00-2 2v4.01" />
  </svg>
);

const Calendar = ({ className }: { className?: string }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
  </svg>
);

const Handshake = ({ className }: { className?: string }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
  </svg>
);

const BookOpen = ({ className }: { className?: string }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
  </svg>
);

const Video = ({ className }: { className?: string }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
  </svg>
);

const GraduationCap = ({ className }: { className?: string }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5z" />
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
  </svg>
);
