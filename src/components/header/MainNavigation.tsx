import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { cn } from "@/lib/utils";
import { NavLink } from "react-router-dom";
import { ChevronDown, Zap, Brain, Shield, Users, HardDrive, TrendingUp, Building2, FileText, HelpCircle, BarChart3 } from 'lucide-react';

export function MainNavigation({ className }) {
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [isSolutionsOpen, setIsSolutionsOpen] = useState(false);
  const [isCompanyOpen, setIsCompanyOpen] = useState(false);
  const [isResourcesOpen, setIsResourcesOpen] = useState(false);

  return (
    <nav className={cn("hidden md:flex items-center space-x-6", className)}>
      <NavLink 
        to="/" 
        className={({ isActive }) => cn("text-sm font-medium transition-colors hover:text-primary", isActive ? "text-zion-cyan" : "text-muted-foreground")}
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
                    Micro SAAS
                  </h4>
                  <ul className="space-y-2 text-sm">
                    <li><Link to="/services" className="text-zion-slate-light hover:text-zion-cyan transition-colors">All Services</Link></li>
                    <li><Link to="/micro-saas" className="text-zion-slate-light hover:text-zion-cyan transition-colors">Micro SAAS Platform</Link></li>
                    <li><Link to="/ai-services" className="text-zion-slate-light hover:text-zion-cyan transition-colors">AI Services</Link></li>
                    <li><Link to="/it-services" className="text-zion-slate-light hover:text-zion-cyan transition-colors">IT Services</Link></li>
                  </ul>
                </div>
                <div>
                  <h4 className="text-zion-cyan font-semibold mb-3 flex items-center">
                    <Shield className="w-4 h-4 mr-2"/>
                    IT Services
                  </h4>
                  <ul className="space-y-2 text-sm">
                    <li><Link to="/it-services" className="text-zion-slate-light hover:text-zion-cyan transition-colors">IT Services</Link></li>
                    <li><Link to="/enhanced-services" className="text-zion-slate-light hover:text-zion-cyan transition-colors">Enhanced Services</Link></li>
                    <li><Link to="/it-onsite-services" className="text-zion-slate-light hover:text-zion-cyan transition-colors">Onsite Support</Link></li>
                  </ul>
                </div>
              </div>
              <div className="mt-4 pt-4 border-t border-zion-purple/20">
                <Link to="/services" className="text-zion-cyan hover:text-zion-cyan-light transition-colors text-sm font-medium flex items-center justify-center">
                  View All Services
                  <TrendingUp className="w-4 h-4 ml-2"/>
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
                    <Users className="w-4 h-4 mr-2"/>
                    Talent
                  </h4>
                  <ul className="space-y-2 text-sm">
                    <li><Link to="/talent" className="text-zion-slate-light hover:text-zion-cyan transition-colors">Find Experts</Link></li>
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
            <div className="p-4">
              <ul className="space-y-2 text-sm">
                <li><Link to="/about" className="text-zion-slate-light hover:text-zion-cyan transition-colors">About Us</Link></li>
                <li><Link to="/careers" className="text-zion-slate-light hover:text-zion-cyan transition-colors">Careers</Link></li>
                <li><Link to="/news" className="text-zion-slate-light hover:text-zion-cyan transition-colors">News</Link></li>
                <li><Link to="/partners" className="text-zion-slate-light hover:text-zion-cyan transition-colors">Partners</Link></li>
                <li><Link to="/contact" className="text-zion-slate-light hover:text-zion-cyan transition-colors">Contact</Link></li>
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
            <div className="p-4">
              <ul className="space-y-2 text-sm">
                <li><Link to="/white-papers" className="text-zion-slate-light hover:text-zion-cyan transition-colors">White Papers</Link></li>
                <li><Link to="/webinars" className="text-zion-slate-light hover:text-zion-cyan transition-colors">Webinars</Link></li>
                <li><Link to="/help" className="text-zion-slate-light hover:text-zion-cyan transition-colors">Help Center</Link></li>
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
      
      {/* Get Started */}
      <NavLink 
        to="/signup" 
        className={({ isActive }) => cn(
          "text-sm font-medium transition-colors hover:text-primary",
          isActive ? "text-zion-cyan" : "text-muted-foreground",
          "bg-gradient-to-r from-zion-purple to-zion-purple-dark hover:from-zion-purple-light hover:to-zion-purple text-white px-6 py-2 rounded-lg shadow-lg shadow-zion-purple/25 hover:shadow-xl hover:shadow-zion-purple/40 transition-all duration-300 hover:-translate-y-1"
        )}
      >
        Get Started
      </NavLink>
    </nav>
  );
}
