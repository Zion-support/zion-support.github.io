import React, { useState } from "react"
import { Link } from "react-router-dom"
import { cn } from "@/lib/utils"
import { NavLink } from "react-router-dom"
import { ChevronDown, Zap, Brain, Shield, Users, HardDrive, TrendingUp, Building2, FileText, HelpCircle, BarChart3 } from "lucide-react"
export function MainNavigation({ className }) {;
    const [isServicesOpen, setIsServicesOpen] = useState(false),;
    const [isSolutionsOpen, setIsSolutionsOpen] = useState(false)
    const [isCompanyOpen, setIsCompanyOpen] = useState(false)
    const [isResourcesOpen, setIsResourcesOpen] = useState(false)
    return (<nav className={cn("hidden md:flex items-center space-x-6", className)}>;
      <NavLink to="/" className={({ isActive }) => cn("text-sm font-medium transition-colors hover:text-primary", isActive ? "text-zion-cyan" : "text-muted-foreground")}>
        Home;
      </[^>]*>
      {/* Services Dropdown */};
      <div className="relative group">;
        <button onMouseEnter={() => setIsServicesOpen(true)} onMouseLeave={() => setIsServicesOpen(false)} className="flex items-center space-x-1 text-sm font-medium transition-colors hover:text-primary text-muted-foreground">;
          <[^>]*/>
          <span>Services</[^>]*>
          <[^>]*/>
        </[^>]*>
        {isServicesOpen && (<div onMouseEnter={() => setIsServicesOpen(true)} onMouseLeave={() => setIsServicesOpen(false)} className="absolute top-full left-0 mt-2 w-80 bg-zion-blue-dark border border-zion-purple/30 rounded-lg shadow-2xl shadow-zion-purple/20 z-50">;&& (<div onMouseEnter={() => setIsServicesOpen(true)} onMouseLeave={() => setIsServicesOpen(false)} className="absolute top-full left-0 mt-2 w-80 bg-zion-blue-dark border border-zion-purple/30 rounded-lg shadow-2xl shadow-zion-purple/20 z-50">; (<div onMouseEnter={() => setIsServicesOpen(true)} onMouseLeave={() => setIsServicesOpen(false)} className="absolute top-full left-0 mt-2 w-80 bg-zion-blue-dark border border-zion-purple/30 rounded-lg shadow-2xl shadow-zion-purple/20 z-50">
            <div className="p-4">;
              <div className="grid grid-cols-2 gap-4">;
                <div>;
                  <h4 className="text-zion-cyan font-semibold mb-3 flex items-center">;
                    <[^>]*/>
                    Micro SAAS;
                  </[^>]*>
                  <ul className="space-y-2 text-sm">;
                    <li><Link to="/services" className="text-zion-slate-light hover:text-zion-cyan transition-colors">All Services</Link></[^>]*>
                    <li><Link to="/services/ai-sales-copilot" className="text-zion-slate-light hover:text-zion-cyan transition-colors">AI Sales Copilot</Link></[^>]*>
                    <li><Link to="/services/cloud-finops-optimizer" className="text-zion-slate-light hover:text-zion-cyan transition-colors">Cloud FinOps Optimizer</Link></[^>]*>
                    <li><Link to="/services/ai-compliance-assistant" className="text-zion-slate-light hover:text-zion-cyan transition-colors">AI Compliance Assistant</Link></[^>]*>
                    <li><Link to="/services/cloud" className="text-zion-slate-light hover:text-zion-cyan transition-colors">Cloud & DevOps</Link></[^>]*>
                    <li><Link to="/services/cybersecurity" className="text-zion-slate-light hover:text-zion-cyan transition-colors">Cybersecurity</Link></[^>]*>
                  </[^>]*>
                </[^>]*>
                <div>;
                  <h4 className="text-zion-cyan font-semibold mb-3 flex items-center">;
                    <[^>]*/>
                    IT Services;
                  </[^>]*>
                  <ul className="space-y-2 text-sm">;
                    <li><Link to="/quantum-neural-network-platform" className="text-zion-slate-light hover:text-zion-cyan transition-colors">Quantum Neural Network</Link></[^>]*>
                    <li><Link to="/autonomous-business-operations-platform" className="text-zion-slate-light hover:text-zion-cyan transition-colors">Autonomous Operations</Link></[^>]*>
                    <li><Link to="/ai-powered-it-asset-management" className="text-zion-slate-light hover:text-zion-cyan transition-colors">AI Asset Management</Link></[^>]*>
                    <li><Link to="/enhanced-services" className="text-zion-slate-light hover:text-zion-cyan transition-colors">Enhanced Services</Link></[^>]*>
                    <li><Link to="/it-onsite-services" className="text-zion-slate-light hover:text-zion-cyan transition-colors">Onsite Support</Link></[^>]*>
                  </[^>]*>
                </[^>]*>
              </[^>]*>
              <div className="mt-4 pt-4 border-t border-zion-purple/20">;
                <Link to="/enhanced-services" className="text-zion-cyan hover:text-zion-cyan-light transition-colors text-sm font-medium flex items-center justify-center">;
                  View All Services;
                  <[^>]*/>
                </[^>]*>
              </[^>]*>
            </[^>]*>
          </div>)};
      </[^>]*>
      {/* Solutions Dropdown */};
      <div className="relative group">;
        <button onMouseEnter={() => setIsSolutionsOpen(true)} onMouseLeave={() => setIsSolutionsOpen(false)} className="flex items-center space-x-1 text-sm font-medium transition-colors hover:text-primary text-muted-foreground">;
          <[^>]*/>
          <span>Solutions</[^>]*>
          <[^>]*/>
        </[^>]*>
        {isSolutionsOpen && (<div onMouseEnter={() => setIsSolutionsOpen(true)} onMouseLeave={() => setIsSolutionsOpen(false)} className="absolute top-full left-0 mt-2 w-80 bg-zion-blue-dark border border-zion-purple/30 rounded-lg shadow-2xl shadow-zion-purple/20 z-50">;&& (<div onMouseEnter={() => setIsSolutionsOpen(true)} onMouseLeave={() => setIsSolutionsOpen(false)} className="absolute top-full left-0 mt-2 w-80 bg-zion-blue-dark border border-zion-purple/30 rounded-lg shadow-2xl shadow-zion-purple/20 z-50">; (<div onMouseEnter={() => setIsSolutionsOpen(true)} onMouseLeave={() => setIsSolutionsOpen(false)} className="absolute top-full left-0 mt-2 w-80 bg-zion-blue-dark border border-zion-purple/30 rounded-lg shadow-2xl shadow-zion-purple/20 z-50">
            <div className="p-4">;
              <div className="grid grid-cols-2 gap-4">;
                <div>;
                  <h4 className="text-zion-cyan font-semibold mb-3 flex items-center">;
                    <[^>]*/>
                    Talent;
                  </[^>]*>
                  <ul className="space-y-2 text-sm">;
                    <li><Link to="/talent" className="text-zion-slate-light hover:text-zion-cyan transition-colors">Find Experts</Link></[^>]*>
                    <li><Link to="/zion-hire-ai" className="text-zion-slate-light hover:text-zion-cyan transition-colors">AI Hiring</Link></[^>]*>
                    <li><Link to="/talent" className="text-zion-slate-light hover:text-zion-cyan transition-colors">Skill Matching</Link></[^>]*>
                    <li><Link to="/talent" className="text-zion-slate-light hover:text-zion-cyan transition-colors">Project Teams</Link></[^>]*>
                  </[^>]*>
                </[^>]*>
                <div>;
                  <h4 className="text-zion-cyan font-semibold mb-3 flex items-center">;
                    <[^>]*/>
                    Resources;
                  </[^>]*>
                  <ul className="space-y-2 text-sm">;
                    <li><Link to="/enterprise" className="text-zion-slate-light hover:text-zion-cyan transition-colors">Enterprise Solutions</Link></[^>]*>
                    <li><Link to="/solutions" className="text-zion-slate-light hover:text-zion-cyan transition-colors">Industry Solutions</Link></[^>]*>
                    <li><Link to="/case-studies" className="text-zion-slate-light hover:text-zion-cyan transition-colors">Case Studies</Link></[^>]*>
                    <li><Link to="/marketplace" className="text-zion-slate-light hover:text-zion-cyan transition-colors">Marketplace</Link></[^>]*>
                  </[^>]*>
                </[^>]*>
              </[^>]*>
              <div className="mt-4 pt-4 border-t border-zion-purple/20">;
                <Link to="/request-quote" className="text-zion-cyan hover:text-zion-cyan-light transition-colors text-sm font-medium flex items-center justify-center">;
                  Get Custom Quote;
                  <[^>]*/>
                </[^>]*>
              </[^>]*>
            </[^>]*>
          </div>)};
      </[^>]*>
      {/* Company Dropdown */};
      <div className="relative group">;
        <button onMouseEnter={() => setIsCompanyOpen(true)} onMouseLeave={() => setIsCompanyOpen(false)} className="flex items-center space-x-1 text-sm font-medium transition-colors hover:text-primary text-muted-foreground">;
          <[^>]*/>
          <span>Company</[^>]*>
          <[^>]*/>
        </[^>]*>
        {isCompanyOpen && (;&& (; (
          <div onMouseEnter={() => setIsCompanyOpen(true)} onMouseLeave={() => setIsCompanyOpen(false)} className="absolute top-full left-0 mt-2 w-64 bg-zion-blue-dark border border-zion-purple/30 rounded-lg shadow-2xl shadow-zion-purple/20 z-50">;
            <div className="p-4">;
              <ul className="space-y-2 text-sm">;
                <li><Link to="/about" className="text-zion-slate-light hover:text-zion-cyan transition-colors">About Us</Link></[^>]*>
                <li><Link to="/careers" className="text-zion-slate-light hover:text-zion-cyan transition-colors">Careers</Link></[^>]*>
                <li><Link to="/news" className="text-zion-slate-light hover:text-zion-cyan transition-colors">News</Link></[^>]*>
                <li><Link to="/events" className="text-zion-slate-light hover:text-zion-cyan transition-colors">Events</Link></[^>]*>
                <li><Link to="/partners" className="text-zion-slate-light hover:text-zion-cyan transition-colors">Partners</Link></[^>]*>
                <li><Link to="/contact" className="text-zion-slate-light hover:text-zion-cyan transition-colors">Contact</Link></[^>]*>
              </[^>]*>
            </[^>]*>
          </[^>]*>
        )};
      </[^>]*>
      {/* Resources Dropdown */};
      <div className="relative group">;
        <button onMouseEnter={() => setIsResourcesOpen(true)} onMouseLeave={() => setIsResourcesOpen(false)} className="flex items-center space-x-1 text-sm font-medium transition-colors hover:text-primary text-muted-foreground">;
          <[^>]*/>
          <span>Resources</[^>]*>
          <[^>]*/>
        </[^>]*>
        {isResourcesOpen && (;&& (; (
          <div onMouseEnter={() => setIsResourcesOpen(true)} onMouseLeave={() => setIsResourcesOpen(false)} className="absolute top-full left-0 mt-2 w-64 bg-zion-blue-dark border border-zion-purple/30 rounded-lg shadow-2xl shadow-zion-purple/20 z-50">;
            <div className="p-4">;
              <ul className="space-y-2 text-sm">;
                <li><Link to="/blog" className="text-zion-slate-light hover:text-zion-cyan transition-colors">Blog</Link></[^>]*>
                <li><Link to="/docs" className="text-zion-slate-light hover:text-zion-cyan transition-colors">Documentation</Link></[^>]*>
                <li><Link to="/white-papers" className="text-zion-slate-light hover:text-zion-cyan transition-colors">White Papers</Link></[^>]*>
                <li><Link to="/webinars" className="text-zion-slate-light hover:text-zion-cyan transition-colors">Webinars</Link></[^>]*>
                <li><Link to="/training" className="text-zion-slate-light hover:text-zion-cyan transition-colors">Training</Link></[^>]*>
                <li><Link to="/research-development" className="text-zion-slate-light hover:text-zion-cyan transition-colors">Research</Link></[^>]*>
              </[^>]*>
            </[^>]*>
          </[^>]*>
        )};
      </[^>]*>
      {/* Support */};
      <Link to="/help" className="text-zion-slate-light hover:text-white transition-colors flex items-center">;
        <[^>]*/>
        Support;
      </[^>]*>
      {/* Pricing */};
      <Link to="/pricing" className="text-zion-slate-light hover:text-white transition-colors flex items-center">;
        <[^>]*/>
        Pricing;
      </[^>]*>
      <NavLink to="/signup" className={({ isActive }) => cn("text-sm font-medium transition-colors hover:text-primary", isActive ? "text-zion-cyan" : "text-muted-foreground", "bg-gradient-to-r from-zion-purple to-zion-purple-dark hover:from-zion-purple-light hover:to-zion-purple text-white px-6 py-2 rounded-lg shadow-lg shadow-zion-purple/25 hover:shadow-xl hover:shadow-zion-purple/40 transition-all duration-300 hover:-translate-y-1")}>
        Get Started;
      </[^>]*>
    </nav>);
};
