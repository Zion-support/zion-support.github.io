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
  Globe,
  TrendingUp,
  Rocket,
  Building2,
  FileText,
  HelpCircle,
  Settings,
  BarChart3
} from "lucide-react";

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
            className="absolute top-full left-0 mt-2 w-96 bg-zion-blue-dark border border-zion-purple/30 rounded-lg shadow-2xl shadow-zion-purple/20 z-50"
          >
            <div className="p-6">
              <div className="grid grid-cols-2 gap-6">
                <div>
                  <h4 className="text-zion-cyan font-semibold mb-3 flex items-center">
                    <Rocket className="w-4 h-4 mr-2" />
                    Core Services
                  </h4>
                  <ul className="space-y-2 text-sm">
                    <li><Link to="/services/ai" className="text-zion-slate-light hover:text-zion-cyan transition-colors">AI Solutions</Link></li>
                    <li><Link to="/services/cloud" className="text-zion-slate-light hover:text-zion-cyan transition-colors">Cloud & DevOps</Link></li>
                    <li><Link to="/services/cybersecurity" className="text-zion-slate-light hover:text-zion-cyan transition-colors">Cybersecurity</Link></li>
                    <li><Link to="/services/infrastructure" className="text-zion-slate-light hover:text-zion-cyan transition-colors">IT Infrastructure</Link></li>
                    <li><Link to="/services/transformation" className="text-zion-slate-light hover:text-zion-cyan transition-colors">Digital Transformation</Link></li>
                    <li><Link to="/services/consulting" className="text-zion-slate-light hover:text-zion-cyan transition-colors">Consulting</Link></li>
                  </ul>
                </div>
                <div>
                  <h4 className="text-zion-cyan font-semibold mb-3 flex items-center">
                    <Shield className="w-4 h-4 mr-2" />
                    Advanced Solutions
                  </h4>
                  <ul className="space-y-2 text-sm">
                    <li><Link to="/services/quantum" className="text-zion-slate-light hover:text-zion-cyan transition-colors">Quantum Computing</Link></li>
                    <li><Link to="/services/blockchain" className="text-zion-slate-light hover:text-zion-cyan transition-colors">Blockchain & Web3</Link></li>
                    <li><Link to="/services/iot" className="text-zion-slate-light hover:text-zion-cyan transition-colors">IoT & Edge Computing</Link></li>
                    <li><Link to="/services/healthcare" className="text-zion-slate-light hover:text-zion-cyan transition-colors">Healthcare AI</Link></li>
                    <li><Link to="/services/fintech" className="text-zion-slate-light hover:text-zion-cyan transition-colors">FinTech Solutions</Link></li>
                    <li><Link to="/services/manufacturing" className="text-zion-slate-light hover:text-zion-cyan transition-colors">Smart Manufacturing</Link></li>
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
              <ul className="space-y-2 text-sm">
                <li><Link to="/solutions/enterprise" className="text-zion-slate-light hover:text-zion-cyan transition-colors">Enterprise Solutions</Link></li>
                <li><Link to="/solutions/smb" className="text-zion-slate-light hover:text-zion-cyan transition-colors">SMB Solutions</Link></li>
                <li><Link to="/solutions/startup" className="text-zion-slate-light hover:text-zion-cyan transition-colors">Startup Accelerator</Link></li>
                <li><Link to="/solutions/industry" className="text-zion-slate-light hover:text-zion-cyan transition-colors">Industry-Specific</Link></li>
                <li><Link to="/solutions/custom" className="text-zion-slate-light hover:text-zion-cyan transition-colors">Custom Development</Link></li>
              </ul>
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
            className="absolute top-full left-0 mt-2 w-64 bg-zion-blue-dark border border-zion-purple/30 rounded-lg shadow-2xl shadow-zion-purple/20 z-50"
          >
            <div className="p-4">
              <ul className="space-y-2 text-sm">
                <li><Link to="/about" className="text-zion-slate-light hover:text-zion-cyan transition-colors">About Us</Link></li>
                <li><Link to="/team" className="text-zion-slate-light hover:text-zion-cyan transition-colors">Our Team</Link></li>
                <li><Link to="/careers" className="text-zion-slate-light hover:text-zion-cyan transition-colors">Careers</Link></li>
                <li><Link to="/partners" className="text-zion-slate-light hover:text-zion-cyan transition-colors">Partners</Link></li>
                <li><Link to="/news" className="text-zion-slate-light hover:text-zion-cyan transition-colors">News & Updates</Link></li>
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
            className="absolute top-full left-0 mt-2 w-72 bg-zion-blue-dark border border-zion-purple/30 rounded-lg shadow-2xl shadow-zion-purple/20 z-50"
          >
            <div className="p-4">
              <ul className="space-y-2 text-sm">
                <li><Link to="/blog" className="text-zion-slate-light hover:text-zion-cyan transition-colors">Blog & Insights</Link></li>
                <li><Link to="/case-studies" className="text-zion-slate-light hover:text-zion-cyan transition-colors">Case Studies</Link></li>
                <li><Link to="/whitepapers" className="text-zion-slate-light hover:text-zion-cyan transition-colors">Whitepapers</Link></li>
                <li><Link to="/webinars" className="text-zion-slate-light hover:text-zion-cyan transition-colors">Webinars</Link></li>
                <li><Link to="/documentation" className="text-zion-slate-light hover:text-zion-cyan transition-colors">Documentation</Link></li>
                <li><Link to="/support" className="text-zion-slate-light hover:text-zion-cyan transition-colors">Support Center</Link></li>
              </ul>
            </div>
          </div>
        )}
      </div>

      {/* Contact */}
      <NavLink
        to="/contact"
        className={({ isActive }) =>
          cn(
            "text-sm font-medium transition-colors hover:text-primary",
            isActive ? "text-zion-cyan" : "text-muted-foreground"
          )
        }
      >
        Contact
      </NavLink>
    </nav>
  );
}
