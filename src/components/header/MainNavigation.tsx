import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { cn } from "@/lib/utils";
import { NavLink } from "react-router-dom";
<<<<<<< HEAD
import { ChevronDown, Zap, Brain, Shield, Users, HardDrive, TrendingUp, Building2, FileText, HelpCircle, BarChart3 } from "lucide-react";
export function MainNavigation({ className }) {
    const [isServicesOpen, setIsServicesOpen] = useState(false);
    const [isSolutionsOpen, setIsSolutionsOpen] = useState(false);
    const [isCompanyOpen, setIsCompanyOpen] = useState(false);
    const [isResourcesOpen, setIsResourcesOpen] = useState(false);
    return (<nav className={cn("hidden md:flex items-center space-x-6", className)}>
      <NavLink to="/" className={({ isActive }) => cn("text-sm font-medium transition-colors hover:text-primary", isActive ? "text-zion-cyan" : "text-muted-foreground")}>
=======
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
>>>>>>> origin/clean-merge-website-fixes
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
<<<<<<< HEAD
        {isServicesOpen && (<div onMouseEnter={() => setIsServicesOpen(true)} onMouseLeave={() => setIsServicesOpen(false)} className="absolute top-full left-0 mt-2 w-80 bg-zion-blue-dark border border-zion-purple/30 rounded-lg shadow-2xl shadow-zion-purple/20 z-50">
            <div className="p-4">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <h4 className="text-zion-cyan font-semibold mb-3 flex items-center">
                    <Zap className="w-4 h-4 mr-2"/>
                    Micro SAAS
=======
        
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
>>>>>>> origin/clean-merge-website-fixes
                  </h4>
                  <ul className="space-y-2 text-sm">
                    <li><Link to="/services" className="text-zion-slate-light hover:text-zion-cyan transition-colors">All Services</Link></li>
                    <li><Link to="/services/ai-sales-copilot" className="text-zion-slate-light hover:text-zion-cyan transition-colors">AI Sales Copilot</Link></li>
                    <li><Link to="/services/cloud-finops-optimizer" className="text-zion-slate-light hover:text-zion-cyan transition-colors">Cloud FinOps Optimizer</Link></li>
                    <li><Link to="/services/ai-compliance-assistant" className="text-zion-slate-light hover:text-zion-cyan transition-colors">AI Compliance Assistant</Link></li>
                    <li><Link to="/services/cloud" className="text-zion-slate-light hover:text-zion-cyan transition-colors">Cloud & DevOps</Link></li>
                    <li><Link to="/services/cybersecurity" className="text-zion-slate-light hover:text-zion-cyan transition-colors">Cybersecurity</Link></li>
                  </ul>
                </div>
                <div>
                  <h4 className="text-zion-cyan font-semibold mb-3 flex items-center">
<<<<<<< HEAD
                    <Shield className="w-4 h-4 mr-2"/>
                    IT Services
=======
                    <Shield className="w-4 h-4 mr-2" />
                    Advanced Solutions
>>>>>>> origin/clean-merge-website-fixes
                  </h4>
                  <ul className="space-y-2 text-sm">
                    <li><Link to="/services/quantum" className="text-zion-slate-light hover:text-zion-cyan transition-colors">Quantum Computing</Link></li>
                    <li><Link to="/services/blockchain" className="text-zion-slate-light hover:text-zion-cyan transition-colors">Blockchain</Link></li>
                    <li><Link to="/services/iot" className="text-zion-slate-light hover:text-zion-cyan transition-colors">IoT & Edge</Link></li>
                    <li><Link to="/services/robotics" className="text-zion-slate-light hover:text-zion-cyan transition-colors">Robotics & Automation</Link></li>
                    <li><Link to="/services/metaverse" className="text-zion-slate-light hover:text-zion-cyan transition-colors">Metaverse</Link></li>
                    <li><Link to="/services/space-tech" className="text-zion-slate-light hover:text-zion-cyan transition-colors">Space Technology</Link></li>
                  </ul>
                </div>
              </div>
<<<<<<< HEAD
              <div className="mt-4 pt-4 border-t border-zion-purple/20">
                <Link to="/enhanced-services" className="text-zion-cyan hover:text-zion-cyan-light transition-colors text-sm font-medium flex items-center justify-center">
                  View All Services
                  <TrendingUp className="w-4 h-4 ml-2"/>
                </Link>
              </div>
=======
>>>>>>> origin/clean-merge-website-fixes
            </div>
          </div>
        )}
      </div>
<<<<<<< HEAD
=======

>>>>>>> origin/clean-merge-website-fixes
      {/* Solutions Dropdown */}
      <div className="relative group">
        <button 
          onMouseEnter={() => setIsSolutionsOpen(true)} 
          onMouseLeave={() => setIsSolutionsOpen(false)} 
          className="flex items-center space-x-1 text-sm font-medium transition-colors hover:text-primary text-muted-foreground"
        >
          <Building2 className="w-4 h-4"/>
          <span>Solutions</span>
          <ChevronDown className="w-3 h-3"/>
        </button>
<<<<<<< HEAD
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
=======
        
        {isSolutionsOpen && (
          <div
            onMouseEnter={() => setIsSolutionsOpen(true)}
            onMouseLeave={() => setIsSolutionsOpen(false)}
            className="absolute top-full left-0 mt-2 w-80 bg-zion-blue-dark border border-zion-purple/30 rounded-lg shadow-2xl shadow-zion-purple/20 z-50"
          >
            <div className="p-4">
              <ul className="space-y-2 text-sm">
                <li><Link to="/solutions/enterprise" className="text-zion-slate-light hover:text-zion-cyan transition-colors">Enterprise</Link></li>
                <li><Link to="/solutions/healthcare" className="text-zion-slate-light hover:text-zion-cyan transition-colors">Healthcare</Link></li>
                <li><Link to="/solutions/financial" className="text-zion-slate-light hover:text-zion-cyan transition-colors">Financial Services</Link></li>
                <li><Link to="/solutions/manufacturing" className="text-zion-slate-light hover:text-zion-cyan transition-colors">Manufacturing</Link></li>
                <li><Link to="/solutions/retail" className="text-zion-slate-light hover:text-zion-cyan transition-colors">Retail</Link></li>
                <li><Link to="/solutions/government" className="text-zion-slate-light hover:text-zion-cyan transition-colors">Government</Link></li>
              </ul>
>>>>>>> origin/clean-merge-website-fixes
            </div>
          </div>
        )}
      </div>
      {/* Company Dropdown */}
      <div className="relative group">
<<<<<<< HEAD
        <button onMouseEnter={() => setIsCompanyOpen(true)} onMouseLeave={() => setIsCompanyOpen(false)} className="flex items-center space-x-1 text-sm font-medium transition-colors hover:text-primary text-muted-foreground">
          <Building2 className="w-4 h-4" />
=======
        <button 
          onMouseEnter={() => setIsCompanyOpen(true)} 
          onMouseLeave={() => setIsCompanyOpen(false)} 
          className="flex items-center space-x-1 text-sm font-medium transition-colors hover:text-primary text-muted-foreground"
        >
          <Building2 className="w-4 h-4"/>
>>>>>>> origin/clean-merge-website-fixes
          <span>Company</span>
          <ChevronDown className="w-3 h-3"/>
        </button>
        {isCompanyOpen && (
          <div onMouseEnter={() => setIsCompanyOpen(true)} onMouseLeave={() => setIsCompanyOpen(false)} className="absolute top-full left-0 mt-2 w-64 bg-zion-blue-dark border border-zion-purple/30 rounded-lg shadow-2xl shadow-zion-purple/20 z-50">
            <div className="p-4">
              <ul className="space-y-2 text-sm">
                <li><Link to="/about" className="text-zion-slate-light hover:text-zion-cyan transition-colors">About Us</Link></li>
                <li><Link to="/leadership" className="text-zion-slate-light hover:text-zion-cyan transition-colors">Leadership</Link></li>
                <li><Link to="/careers" className="text-zion-slate-light hover:text-zion-cyan transition-colors">Careers</Link></li>
                <li><Link to="/partners" className="text-zion-slate-light hover:text-zion-cyan transition-colors">Partners</Link></li>
                <li><Link to="/news" className="text-zion-slate-light hover:text-zion-cyan transition-colors">News</Link></li>
                <li><Link to="/case-studies" className="text-zion-slate-light hover:text-zion-cyan transition-colors">Case Studies</Link></li>
              </ul>
            </div>
          </div>
        )}
      </div>
      {/* Resources Dropdown */}
      <div className="relative group">
<<<<<<< HEAD
        <button onMouseEnter={() => setIsResourcesOpen(true)} onMouseLeave={() => setIsResourcesOpen(false)} className="flex items-center space-x-1 text-sm font-medium transition-colors hover:text-primary text-muted-foreground">
          <FileText className="w-4 h-4" />
=======
        <button 
          onMouseEnter={() => setIsResourcesOpen(true)} 
          onMouseLeave={() => setIsResourcesOpen(false)} 
          className="flex items-center space-x-1 text-sm font-medium transition-colors hover:text-primary text-muted-foreground"
        >
          <FileText className="w-4 h-4"/>
>>>>>>> origin/clean-merge-website-fixes
          <span>Resources</span>
          <ChevronDown className="w-3 h-3"/>
        </button>
        {isResourcesOpen && (
<<<<<<< HEAD
          <div onMouseEnter={() => setIsResourcesOpen(true)} onMouseLeave={() => setIsResourcesOpen(false)} className="absolute top-full left-0 mt-2 w-64 bg-zion-blue-dark border border-zion-purple/30 rounded-lg shadow-2xl shadow-zion-purple/20 z-50">
=======
          <div
            onMouseEnter={() => setIsResourcesOpen(true)}
            onMouseLeave={() => setIsResourcesOpen(false)}
            className="absolute top-full left-0 mt-2 w-80 bg-zion-blue-dark border border-zion-purple/30 rounded-lg shadow-2xl shadow-zion-purple/20 z-50"
          >
>>>>>>> origin/clean-merge-website-fixes
            <div className="p-4">
              <ul className="space-y-2 text-sm">
                <li><Link to="/blog" className="text-zion-slate-light hover:text-zion-cyan transition-colors">Blog</Link></li>
                <li><Link to="/docs" className="text-zion-slate-light hover:text-zion-cyan transition-colors">Documentation</Link></li>
                <li><Link to="/api" className="text-zion-slate-light hover:text-zion-cyan transition-colors">API Reference</Link></li>
                <li><Link to="/training" className="text-zion-slate-light hover:text-zion-cyan transition-colors">Training</Link></li>
                <li><Link to="/webinars" className="text-zion-slate-light hover:text-zion-cyan transition-colors">Webinars</Link></li>
                <li><Link to="/white-papers" className="text-zion-slate-light hover:text-zion-cyan transition-colors">White Papers</Link></li>
                <li><Link to="/research" className="text-zion-slate-light hover:text-zion-cyan transition-colors">Research</Link></li>
              </ul>
            </div>
          </div>
        )}
      </div>
<<<<<<< HEAD
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
=======

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
>>>>>>> origin/clean-merge-website-fixes
      </NavLink>
    </nav>
  );
}
