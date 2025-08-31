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
  BarChart3 
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
          cn(
            "text-sm font-medium transition-colors hover:text-primary", 
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
            className="absolute top-full left-0 mt-2 w-80 bg-zion-blue-dark border border-zion-purple/30 rounded-lg shadow-2xl shadow-zion-purple/20 z-50"
          >
            <div className="p-4">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <h4 className="text-zion-cyan font-semibold mb-3 flex items-center">
                    <Zap className="w-4 h-4 mr-2"/>
                    AI Services
                  </h4>
                  <ul className="space-y-2 text-sm">
                    <li><Link to="/services/ai-supply-chain-optimization" className="text-zion-slate-light hover:text-zion-cyan transition-colors">AI Supply Chain</Link></li>
                    <li><Link to="/services/ai-cybersecurity-platform" className="text-zion-slate-light hover:text-zion-cyan transition-colors">AI Cybersecurity</Link></li>
                    <li><Link to="/services/ai-healthcare-platform" className="text-zion-slate-light hover:text-zion-cyan transition-colors">AI Healthcare</Link></li>
                    <li><Link to="/services/ai-quantum-hybrid-platform" className="text-zion-slate-light hover:text-zion-cyan transition-colors">AI Quantum Hybrid</Link></li>
                    <li><Link to="/services/ai-quantum-neural-network-platform" className="text-zion-slate-light hover:text-zion-cyan transition-colors">Quantum Neural Network</Link></li>
                    <li><Link to="/services/ai-autonomous-business-operations-platform" className="text-zion-slate-light hover:text-zion-cyan transition-colors">Autonomous Operations</Link></li>
                    <li><Link to="/services/ai-customer-experience-analytics-platform" className="text-zion-slate-light hover:text-zion-cyan transition-colors">Customer Analytics</Link></li>
                    <li><Link to="/services/ai-business-intelligence" className="text-zion-slate-light hover:text-zion-cyan transition-colors">AI Business Intelligence</Link></li>
                  </ul>
                </div>
                <div>
                  <h4 className="text-zion-cyan font-semibold mb-3 flex items-center">
                    <HardDrive className="w-4 h-4 mr-2"/>
                    IT Services
                  </h4>
                  <ul className="space-y-2 text-sm">
                    <li><Link to="/services/cybersecurity" className="text-zion-slate-light hover:text-zion-cyan transition-colors">Cybersecurity</Link></li>
                    <li><Link to="/services/cloud-devops" className="text-zion-slate-light hover:text-zion-cyan transition-colors">Cloud & DevOps</Link></li>
                    <li><Link to="/services/digital-transformation" className="text-zion-slate-light hover:text-zion-cyan transition-colors">Digital Transformation</Link></li>
                    <li><Link to="/services/it-consulting" className="text-zion-slate-light hover:text-zion-cyan transition-colors">IT Consulting</Link></li>
                    <li><Link to="/services/blockchain-enterprise-solutions" className="text-zion-slate-light hover:text-zion-cyan transition-colors">Blockchain Solutions</Link></li>
                    <li><Link to="/services/iot-edge" className="text-zion-slate-light hover:text-zion-cyan transition-colors">IoT & Edge Computing</Link></li>
                  </ul>
                </div>
              </div>
              <div className="mt-4 pt-4 border-t border-zion-purple/30">
                <Link 
                  to="/services" 
                  className="text-zion-cyan hover:text-zion-cyan-light transition-colors text-sm font-medium"
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
            <div className="p-4">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <h4 className="text-zion-cyan font-semibold mb-3 flex items-center">
                    <Building2 className="w-4 h-4 mr-2"/>
                    Industry Solutions
                  </h4>
                  <ul className="space-y-2 text-sm">
                    <li><Link to="/solutions/healthcare" className="text-zion-slate-light hover:text-zion-cyan transition-colors">Healthcare</Link></li>
                    <li><Link to="/solutions/financial" className="text-zion-slate-light hover:text-zion-cyan transition-colors">Financial</Link></li>
                    <li><Link to="/solutions/manufacturing" className="text-zion-slate-light hover:text-zion-cyan transition-colors">Manufacturing</Link></li>
                    <li><Link to="/solutions/government" className="text-zion-slate-light hover:text-zion-cyan transition-colors">Government</Link></li>
                    <li><Link to="/solutions/retail" className="text-zion-slate-light hover:text-zion-cyan transition-colors">Retail</Link></li>
                  </ul>
                </div>
                <div>
                  <h4 className="text-zion-cyan font-semibold mb-3 flex items-center">
                    <TrendingUp className="w-4 h-4 mr-2"/>
                    Technology
                  </h4>
                  <ul className="space-y-2 text-sm">
                    <li><Link to="/solutions/quantum-edge-computing" className="text-zion-slate-light hover:text-zion-cyan transition-colors">Quantum Edge Computing</Link></li>
                    <li><Link to="/solutions/ai-autonomous-business" className="text-zion-slate-light hover:text-zion-cyan transition-colors">AI Autonomous Business</Link></li>
                    <li><Link to="/solutions/blockchain-web3" className="text-zion-slate-light hover:text-zion-cyan transition-colors">Blockchain & Web3</Link></li>
                    <li><Link to="/solutions/iot-edge-computing" className="text-zion-slate-light hover:text-zion-cyan transition-colors">IoT Edge Computing</Link></li>
                    <li><Link to="/solutions/space-tech" className="text-zion-slate-light hover:text-zion-cyan transition-colors">Space Technology</Link></li>
                  </ul>
                </div>
              </div>
              <div className="mt-4 pt-4 border-t border-zion-purple/30">
                <Link 
                  to="/solutions" 
                  className="text-zion-cyan hover:text-zion-cyan-light transition-colors text-sm font-medium"
                >
                  View All Solutions →
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
          <Building2 className="w-4 h-4"/>
          <span>Company</span>
          <ChevronDown className="w-3 h-3"/>
        </button>
        {isCompanyOpen && (
          <div 
            onMouseEnter={() => setIsCompanyOpen(true)} 
            onMouseLeave={() => setIsCompanyOpen(false)} 
            className="absolute top-full left-0 mt-2 w-48 bg-zion-blue-dark border border-zion-purple/30 rounded-lg shadow-2xl shadow-zion-purple/20 z-50"
          >
            <div className="p-4">
              <ul className="space-y-2 text-sm">
                <li><Link to="/about" className="text-zion-slate-light hover:text-zion-cyan transition-colors">About Us</Link></li>
                <li><Link to="/leadership" className="text-zion-slate-light hover:text-zion-cyan transition-colors">Leadership</Link></li>
                <li><Link to="/careers" className="text-zion-slate-light hover:text-zion-cyan transition-colors">Careers</Link></li>
                <li><Link to="/partners" className="text-zion-slate-light hover:text-zion-cyan transition-colors">Partners</Link></li>
                <li><Link to="/news" className="text-zion-slate-light hover:text-zion-cyan transition-colors">News</Link></li>
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
          <FileText className="w-4 h-4"/>
          <span>Resources</span>
          <ChevronDown className="w-3 h-3"/>
        </button>
        {isResourcesOpen && (
          <div 
            onMouseEnter={() => setIsResourcesOpen(true)} 
            onMouseLeave={() => setIsResourcesOpen(false)} 
            className="absolute top-full left-0 mt-2 w-48 bg-zion-blue-dark border border-zion-purple/30 rounded-lg shadow-2xl shadow-zion-purple/20 z-50"
          >
            <div className="p-4">
              <ul className="space-y-2 text-sm">
                <li><Link to="/blog" className="text-zion-slate-light hover:text-zion-cyan transition-colors">Blog</Link></li>
                <li><Link to="/documentation" className="text-zion-slate-light hover:text-zion-cyan transition-colors">Documentation</Link></li>
                <li><Link to="/white-papers" className="text-zion-slate-light hover:text-zion-cyan transition-colors">White Papers</Link></li>
                <li><Link to="/webinars" className="text-zion-slate-light hover:text-zion-cyan transition-colors">Webinars</Link></li>
                <li><Link to="/training" className="text-zion-slate-light hover:text-zion-cyan transition-colors">Training</Link></li>
                <li><Link to="/research-development" className="text-zion-slate-light hover:text-zion-cyan transition-colors">Research & Development</Link></li>
                <li><Link to="/case-studies" className="text-zion-slate-light hover:text-zion-cyan transition-colors">Case Studies</Link></li>
              </ul>
            </div>
          </div>
        )}
      </div>

      <NavLink 
        to="/pricing" 
        className={({ isActive }) => 
          cn(
            "text-sm font-medium transition-colors hover:text-primary", 
            isActive ? "text-zion-cyan" : "text-muted-foreground"
          )
        }
      >
        Pricing
      </NavLink>

      <NavLink 
        to="/help" 
        className={({ isActive }) => 
          cn(
            "text-sm font-medium transition-colors hover:text-primary", 
            isActive ? "text-zion-cyan" : "text-muted-foreground"
          )
        }
      >
        Help
      </NavLink>

      {/* Get Started Button */}
      <Link 
        to="/contact" 
        className="bg-gradient-to-r from-zion-cyan to-zion-purple text-white px-4 py-2 rounded-lg text-sm font-medium hover:from-zion-cyan-light hover:to-zion-purple-light transition-all duration-300"
      >
        Get Started
      </Link>
    </nav>
  );
}
