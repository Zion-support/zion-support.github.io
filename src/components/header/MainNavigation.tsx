<<<<<<< HEAD
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
=======
<<<<<<< HEAD
=======
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
<<<<<<< HEAD
=======
import { cn } from '@/src/src/lib/utils';
import { NavLink } from "react-router-dom";
>>>>>>> main
>>>>>>> main
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
<<<<<<< HEAD
  Rocket,
  Server,
  Cloud,
  Lock,
  Workflow,
  Database,
  MessageCircle,
  CheckCircle,
  ArrowRight,
  ExternalLink,
  Handshake,
  Monitor,
  GraduationCap,
  Lightbulb,
  Code,
  Activity,
  Target
} from 'lucide-react';

interface MainNavigationProps {
  className?: string;
}

export function MainNavigation({ className = '' }: MainNavigationProps) {
=======
<<<<<<< HEAD
  Cloud,
  Rocket,
  Heart,
  Globe,
  Cpu,
  Lock,
  Star,
  Workflow,
  MessageCircle,
  Target,
  ShoppingCart,
  Settings,
  Atom,
  Database,
  Smartphone,
  Truck,
  Factory,
  Home,
  Leaf,
  Satellite
} from 'lucide-react';

export function MainNavigation({ className = '' }: { className?: string }) {
>>>>>>> main
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [isSolutionsOpen, setIsSolutionsOpen] = useState(false);
  const [isCompanyOpen, setIsCompanyOpen] = useState(false);

  return (
    <nav className={`flex items-center space-x-8 ${className}`}>
      {/* Home */}
      <Link 
        to="/" 
<<<<<<< HEAD
        className="text-sm font-medium text-zion-slate-light hover:text-zion-cyan transition-colors"
=======
        className="text-sm font-medium text-zion-slate-light hover:text-white transition-colors"
>>>>>>> main
      >
        Home
      </Link>

      {/* Services Dropdown */}
      <div className="relative group">
        <button
          onMouseEnter={() => setIsServicesOpen(true)}
          onMouseLeave={() => setIsServicesOpen(false)}
<<<<<<< HEAD
          className="flex items-center space-x-1 text-sm font-medium text-zion-slate-light hover:text-zion-cyan transition-colors"
=======
          className="flex items-center space-x-1 text-sm font-medium text-zion-slate-light hover:text-white transition-colors"
=======
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
>>>>>>> main
>>>>>>> main
        >
          <Zap className="w-4 h-4" />
          <span>Services</span>
          <ChevronDown className="w-3 h-3" />
        </button>
        
        {isServicesOpen && (
<<<<<<< HEAD
          <div 
            onMouseEnter={() => setIsServicesOpen(true)} 
            onMouseLeave={() => setIsServicesOpen(false)}
            className="absolute top-full left-0 mt-2 w-96 bg-zion-blue-dark border border-zion-purple/30 rounded-lg shadow-2xl shadow-zion-purple/20 z-50"
          >
            <div className="p-4">
              <div className="grid grid-cols-3 gap-4">
                <div>
                  <h4 className="text-zion-cyan font-semibold mb-3 flex items-center">
                    <Rocket className="w-4 h-4 mr-2" />
                    Micro SAAS
                  </h4>
                  <ul className="space-y-2 text-sm">
                    <li>
                      <Link to="/services" className="text-zion-slate-light hover:text-zion-cyan transition-colors">
                        All Services
                      </Link>
                    </li>
=======
<<<<<<< HEAD
          <div 
            onMouseEnter={() => setIsServicesOpen(true)}
            onMouseLeave={() => setIsServicesOpen(false)}
            className="absolute top-full left-0 mt-2 w-[800px] bg-zion-blue-dark border border-zion-purple/30 rounded-lg shadow-2xl shadow-zion-purple/20 z-50"
          >
            <div className="p-6">
              <div className="grid grid-cols-4 gap-6">
                {/* Micro SAAS */}
                <div>
                  <h4 className="text-zion-cyan font-semibold mb-3 flex items-center">
                    <Zap className="w-4 h-4 mr-2" />
                    Micro SAAS
                  </h4>
                  <ul className="space-y-2 text-sm">
                                         <li>
                       <Link to="/services" className="text-zion-slate-light hover:text-zion-cyan transition-colors">
                         All Services
                       </Link>
                     </li>
                     <li>
                       <Link to="/enhanced-services-showcase-2025" className="text-zion-slate-light hover:text-zion-cyan transition-colors">
                         Enhanced Services 2025
                       </Link>
                     </li>
>>>>>>> main
                    <li>
                      <Link to="/services/ai-sales-copilot" className="text-zion-slate-light hover:text-zion-cyan transition-colors">
                        AI Sales Copilot
                      </Link>
                    </li>
                    <li>
                      <Link to="/services/cloud-finops-optimizer" className="text-zion-slate-light hover:text-zion-cyan transition-colors">
                        Cloud FinOps Optimizer
                      </Link>
                    </li>
                    <li>
                      <Link to="/services/ai-compliance-assistant" className="text-zion-slate-light hover:text-zion-cyan transition-colors">
                        AI Compliance Assistant
                      </Link>
                    </li>
                    <li>
                      <Link to="/services/ai-business-intelligence" className="text-zion-slate-light hover:text-zion-cyan transition-colors">
                        AI Business Intelligence
                      </Link>
                    </li>
                    <li>
                      <Link to="/services/ai-customer-support-automation" className="text-zion-slate-light hover:text-zion-cyan transition-colors">
                        AI Customer Support
                      </Link>
                    </li>
                  </ul>
                </div>
<<<<<<< HEAD
                
=======

                {/* IT Services */}
>>>>>>> main
                <div>
                  <h4 className="text-zion-cyan font-semibold mb-3 flex items-center">
                    <Shield className="w-4 h-4 mr-2" />
                    IT Services
                  </h4>
                  <ul className="space-y-2 text-sm">
                    <li>
<<<<<<< HEAD
                      <Link to="/services/quantum-neural-network-platform" className="text-zion-slate-light hover:text-zion-cyan transition-colors">
=======
                      <Link to="/services/quantum-neural-network" className="text-zion-slate-light hover:text-zion-cyan transition-colors">
>>>>>>> main
                        Quantum Neural Network
                      </Link>
                    </li>
                    <li>
<<<<<<< HEAD
                      <Link to="/services/autonomous-business-operations-platform" className="text-zion-slate-light hover:text-zion-cyan transition-colors">
=======
                      <Link to="/services/autonomous-business-operations" className="text-zion-slate-light hover:text-zion-cyan transition-colors">
>>>>>>> main
                        Autonomous Operations
                      </Link>
                    </li>
                    <li>
                      <Link to="/services/ai-powered-it-asset-management" className="text-zion-slate-light hover:text-zion-cyan transition-colors">
                        AI Asset Management
                      </Link>
                    </li>
                    <li>
<<<<<<< HEAD
                      <Link to="/services/enhanced-services" className="text-zion-slate-light hover:text-zion-cyan transition-colors">
                        Enhanced Services
                      </Link>
                    </li>
                    <li>
                      <Link to="/services/it-onsite-services" className="text-zion-slate-light hover:text-zion-cyan transition-colors">
                        Onsite Support
                      </Link>
                    </li>
                    <li>
=======
>>>>>>> main
                      <Link to="/services/cloud-devops" className="text-zion-slate-light hover:text-zion-cyan transition-colors">
                        Cloud & DevOps
                      </Link>
                    </li>
<<<<<<< HEAD
                  </ul>
                </div>
                
=======
                    <li>
                      <Link to="/services/cybersecurity-suite" className="text-zion-slate-light hover:text-zion-cyan transition-colors">
                        Cybersecurity Suite
                      </Link>
                    </li>
                  </ul>
                </div>

                {/* AI Solutions */}
>>>>>>> main
                <div>
                  <h4 className="text-zion-cyan font-semibold mb-3 flex items-center">
                    <Brain className="w-4 h-4 mr-2" />
                    AI Solutions
                  </h4>
                  <ul className="space-y-2 text-sm">
                    <li>
<<<<<<< HEAD
                      <Link to="/services/ai-services" className="text-zion-slate-light hover:text-zion-cyan transition-colors">
=======
                      <Link to="/ai-services" className="text-zion-slate-light hover:text-zion-cyan transition-colors">
>>>>>>> main
                        AI Services
                      </Link>
                    </li>
                    <li>
<<<<<<< HEAD
                      <Link to="/services/ai-solutions" className="text-zion-slate-light hover:text-zion-cyan transition-colors">
=======
                      <Link to="/ai-solutions" className="text-zion-slate-light hover:text-zion-cyan transition-colors">
>>>>>>> main
                        AI Solutions
                      </Link>
                    </li>
                    <li>
                      <Link to="/services/ai-cybersecurity-platform" className="text-zion-slate-light hover:text-zion-cyan transition-colors">
                        AI Cybersecurity
                      </Link>
                    </li>
                    <li>
                      <Link to="/services/ai-healthcare-platform" className="text-zion-slate-light hover:text-zion-cyan transition-colors">
                        AI Healthcare
                      </Link>
                    </li>
                    <li>
                      <Link to="/services/ai-supply-chain-optimization" className="text-zion-slate-light hover:text-zion-cyan transition-colors">
                        AI Supply Chain
                      </Link>
                    </li>
<<<<<<< HEAD
                    <li>
                      <Link to="/services/ai-quantum-hybrid-platform" className="text-zion-slate-light hover:text-zion-cyan transition-colors">
                        AI Quantum Hybrid
=======
                  </ul>
                </div>

                {/* Emerging Tech */}
                <div>
                  <h4 className="text-zion-cyan font-semibold mb-3 flex items-center">
                    <Rocket className="w-4 h-4 mr-2" />
                    Emerging Tech
                  </h4>
                  <ul className="space-y-2 text-sm">
                    <li>
                      <Link to="/services/quantum-computing" className="text-zion-slate-light hover:text-zion-cyan transition-colors">
                        Quantum Computing
                      </Link>
                    </li>
                    <li>
                      <Link to="/services/blockchain-solutions" className="text-zion-slate-light hover:text-zion-cyan transition-colors">
                        Blockchain Solutions
                      </Link>
                    </li>
                    <li>
                      <Link to="/services/space-technology" className="text-zion-slate-light hover:text-zion-cyan transition-colors">
                        Space Technology
                      </Link>
                    </li>
                    <li>
                      <Link to="/services/sustainability-tech" className="text-zion-slate-light hover:text-zion-cyan transition-colors">
                        Sustainability Tech
>>>>>>> main
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
              
<<<<<<< HEAD
              <div className="mt-4 pt-4 border-t border-zion-purple/20">
=======
              <div className="mt-6 pt-4 border-t border-zion-purple/20">
>>>>>>> main
                <Link 
                  to="/services" 
                  className="text-zion-cyan hover:text-zion-cyan-light transition-colors text-sm font-medium flex items-center justify-center"
                >
                  View All Services
                  <TrendingUp className="w-4 h-4 ml-2" />
                </Link>
              </div>
            </div>
<<<<<<< HEAD
=======
=======
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
>>>>>>> main
>>>>>>> main
          </div>
        )}
      </div>

      {/* Solutions Dropdown */}
      <div className="relative group">
<<<<<<< HEAD
        <button
          onMouseEnter={() => setIsSolutionsOpen(true)}
          onMouseLeave={() => setIsSolutionsOpen(false)}
          className="flex items-center space-x-1 text-sm font-medium text-zion-slate-light hover:text-zion-cyan transition-colors"
        >
          <Brain className="w-4 h-4" />
=======
<<<<<<< HEAD
        <button
          onMouseEnter={() => setIsSolutionsOpen(true)}
          onMouseLeave={() => setIsSolutionsOpen(false)}
          className="flex items-center space-x-1 text-sm font-medium text-zion-slate-light hover:text-white transition-colors"
        >
          <Brain className="w-4 h-4" />
=======
        <button 
          onMouseEnter={() => setIsSolutionsOpen(true)} 
          onMouseLeave={() => setIsSolutionsOpen(false)} 
          className="flex items-center space-x-1 text-sm font-medium transition-colors hover:text-primary text-muted-foreground hover:text-zion-cyan"
        >
          <Target className="w-4 h-4" />
>>>>>>> main
>>>>>>> main
          <span>Solutions</span>
          <ChevronDown className="w-3 h-3" />
        </button>
        
        {isSolutionsOpen && (
<<<<<<< HEAD
          <div 
            onMouseEnter={() => setIsSolutionsOpen(true)} 
=======
<<<<<<< HEAD
          <div 
            onMouseEnter={() => setIsSolutionsOpen(true)}
>>>>>>> main
            onMouseLeave={() => setIsSolutionsOpen(false)}
            className="absolute top-full left-0 mt-2 w-80 bg-zion-blue-dark border border-zion-purple/30 rounded-lg shadow-2xl shadow-zion-purple/20 z-50"
          >
            <div className="p-4">
              <div className="grid grid-cols-2 gap-4">
<<<<<<< HEAD
=======
                {/* Talent */}
>>>>>>> main
                <div>
                  <h4 className="text-zion-cyan font-semibold mb-3 flex items-center">
                    <Users className="w-4 h-4 mr-2" />
                    Talent
                  </h4>
                  <ul className="space-y-2 text-sm">
                    <li>
                      <Link to="/talent" className="text-zion-slate-light hover:text-zion-cyan transition-colors">
                        Find Experts
                      </Link>
                    </li>
                    <li>
                      <Link to="/zion-hire-ai" className="text-zion-slate-light hover:text-zion-cyan transition-colors">
                        AI Hiring
                      </Link>
                    </li>
                    <li>
                      <Link to="/talent" className="text-zion-slate-light hover:text-zion-cyan transition-colors">
                        Skill Matching
                      </Link>
                    </li>
                    <li>
                      <Link to="/talent" className="text-zion-slate-light hover:text-zion-cyan transition-colors">
                        Project Teams
                      </Link>
                    </li>
                  </ul>
                </div>
<<<<<<< HEAD
                
=======

                {/* Resources */}
>>>>>>> main
                <div>
                  <h4 className="text-zion-cyan font-semibold mb-3 flex items-center">
                    <HardDrive className="w-4 h-4 mr-2" />
                    Resources
                  </h4>
                  <ul className="space-y-2 text-sm">
                    <li>
                      <Link to="/enterprise" className="text-zion-slate-light hover:text-zion-cyan transition-colors">
                        Enterprise Solutions
                      </Link>
                    </li>
                    <li>
                      <Link to="/solutions" className="text-zion-slate-light hover:text-zion-cyan transition-colors">
                        Industry Solutions
                      </Link>
                    </li>
                    <li>
                      <Link to="/case-studies" className="text-zion-slate-light hover:text-zion-cyan transition-colors">
                        Case Studies
                      </Link>
                    </li>
                    <li>
                      <Link to="/marketplace" className="text-zion-slate-light hover:text-zion-cyan transition-colors">
                        Marketplace
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
              
              <div className="mt-4 pt-4 border-t border-zion-purple/20">
                <Link 
                  to="/request-quote" 
                  className="text-zion-cyan hover:text-zion-cyan-light transition-colors text-sm font-medium flex items-center justify-center"
                >
                  Get Custom Quote
                  <TrendingUp className="w-4 h-4 ml-2" />
                </Link>
              </div>
<<<<<<< HEAD
=======
=======
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
>>>>>>> main
>>>>>>> main
            </div>
          </div>
        )}
      </div>

      {/* Company Dropdown */}
      <div className="relative group">
<<<<<<< HEAD
        <button
          onMouseEnter={() => setIsCompanyOpen(true)}
          onMouseLeave={() => setIsCompanyOpen(false)}
          className="flex items-center space-x-1 text-sm font-medium text-zion-slate-light hover:text-zion-cyan transition-colors"
=======
<<<<<<< HEAD
        <button
          onMouseEnter={() => setIsCompanyOpen(true)}
          onMouseLeave={() => setIsCompanyOpen(false)}
          className="flex items-center space-x-1 text-sm font-medium text-zion-slate-light hover:text-white transition-colors"
=======
        <button 
          onMouseEnter={() => setIsCompanyOpen(true)} 
          onMouseLeave={() => setIsCompanyOpen(false)} 
          className="flex items-center space-x-1 text-sm font-medium transition-colors hover:text-primary text-muted-foreground hover:text-zion-cyan"
>>>>>>> main
>>>>>>> main
        >
          <Building2 className="w-4 h-4" />
          <span>Company</span>
          <ChevronDown className="w-3 h-3" />
        </button>
        
        {isCompanyOpen && (
<<<<<<< HEAD
          <div 
            onMouseEnter={() => setIsCompanyOpen(true)} 
=======
<<<<<<< HEAD
          <div 
            onMouseEnter={() => setIsCompanyOpen(true)}
>>>>>>> main
            onMouseLeave={() => setIsCompanyOpen(false)}
            className="absolute top-full left-0 mt-2 w-64 bg-zion-blue-dark border border-zion-purple/30 rounded-lg shadow-2xl shadow-zion-purple/20 z-50"
          >
            <div className="p-4">
              <ul className="space-y-2 text-sm">
                <li>
                  <Link to="/about" className="text-zion-slate-light hover:text-zion-cyan transition-colors">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link to="/team" className="text-zion-slate-light hover:text-zion-cyan transition-colors">
                    Our Team
                  </Link>
                </li>
                <li>
                  <Link to="/careers" className="text-zion-slate-light hover:text-zion-cyan transition-colors">
                    Careers
                  </Link>
                </li>
                <li>
                  <Link to="/news" className="text-zion-slate-light hover:text-zion-cyan transition-colors">
                    News
                  </Link>
                </li>
                <li>
                  <Link to="/events" className="text-zion-slate-light hover:text-zion-cyan transition-colors">
                    Events
                  </Link>
                </li>
                <li>
                  <Link to="/partners" className="text-zion-slate-light hover:text-zion-cyan transition-colors">
                    Partners
                  </Link>
                </li>
                <li>
                  <Link to="/contact" className="text-zion-slate-light hover:text-zion-cyan transition-colors">
                    Contact
                  </Link>
                </li>
              </ul>
<<<<<<< HEAD
=======
=======
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
>>>>>>> main
>>>>>>> main
            </div>
          </div>
        )}
      </div>

<<<<<<< HEAD
      {/* Resources */}
      <Link 
        to="/resources" 
        className="text-sm font-medium text-zion-slate-light hover:text-zion-cyan transition-colors"
=======
<<<<<<< HEAD
      {/* Resources */}
      <Link 
        to="/resources" 
        className="text-sm font-medium text-zion-slate-light hover:text-white transition-colors"
>>>>>>> main
      >
        Resources
      </Link>

<<<<<<< HEAD
      {/* Blog */}
      <Link 
        to="/blog" 
        className="text-sm font-medium text-zion-slate-light hover:text-zion-cyan transition-colors"
      >
        Blog
      </Link>

      {/* Contact */}
      <Link 
        to="/contact" 
        className="text-sm font-medium text-zion-slate-light hover:text-zion-cyan transition-colors"
      >
        Contact
      </Link>
    </nav>
  );
} 
=======
      {/* Pricing */}
      <Link 
        to="/pricing" 
        className="text-sm font-medium text-zion-slate-light hover:text-white transition-colors"
      >
        Pricing
      </Link>
    </nav>
  );
} 
=======
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
          <div className="absolute top-full left-0 mt-2 w-80 bg-zion-slate-dark border border-zion-purple/20 rounded-lg shadow-xl z-50">
            <div className="p-4 grid grid-cols-2 gap-4">
              {/* Learning & Documentation */}
              <div>
                <h3 className="text-zion-cyan font-semibold text-sm mb-3 flex items-center">
                  <BookOpen className="w-4 h-4 mr-2" />
                  Learning
                </h3>
                <div className="space-y-2">
                  <Link to="/blog" className="block text-sm text-zion-slate-light hover:text-zion-cyan transition-colors">
                    Blog
                  </Link>
                  <Link to="/documentation" className="block text-sm text-zion-slate-light hover:text-zion-cyan transition-colors">
                    Documentation
                  </Link>
                  <Link to="/training" className="block text-sm text-zion-slate-light hover:text-zion-cyan transition-colors">
                    Training
                  </Link>
                  <Link to="/webinars" className="block text-sm text-zion-slate-light hover:text-zion-cyan transition-colors">
                    Webinars
                  </Link>
                </div>
              </div>
              
              {/* Research & Support */}
              <div>
                <h3 className="text-zion-cyan font-semibold text-sm mb-3 flex items-center">
                  <FileText className="w-4 h-4 mr-2" />
                  Research & Support
                </h3>
                <div className="space-y-2">
                  <Link to="/white-papers" className="block text-sm text-zion-slate-light hover:text-zion-cyan transition-colors">
                    White Papers
                  </Link>
                  <Link to="/case-studies" className="block text-sm text-zion-slate-light hover:text-zion-cyan transition-colors">
                    Case Studies
                  </Link>
                  <Link to="/help-center" className="block text-sm text-zion-slate-light hover:text-zion-cyan transition-colors">
                    Help Center
                  </Link>
                  <Link to="/faq" className="block text-sm text-zion-slate-light hover:text-zion-cyan transition-colors">
                    FAQ
                  </Link>
                </div>
              </div>
            </div>
            <div className="border-t border-zion-purple/20 p-4">
              <Link to="/resources" className="text-zion-cyan hover:text-zion-cyan/80 text-sm font-medium flex items-center">
                View All Resources
                <ArrowRight className="w-4 h-4 ml-2" />
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


>>>>>>> main
>>>>>>> main
>>>>>>> main
