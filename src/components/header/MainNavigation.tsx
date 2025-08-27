import React, { useState } from 'react';
import Link from 'next/link';
import { cn } from "@/lib/utils";
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
      <Link
        href="/"
        className="text-sm font-medium transition-colors hover:text-primary text-muted-foreground hover:text-zion-cyan"
      >
        Home
      </Link>
      
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
                    <li><Link href="/services/ai" className="text-zion-slate-light hover:text-zion-cyan transition-colors">AI Solutions</Link></li>
                    <li><Link href="/services/cloud" className="text-zion-slate-light hover:text-zion-cyan transition-colors">Cloud & DevOps</Link></li>
                    <li><Link href="/services/cybersecurity" className="text-zion-slate-light hover:text-zion-cyan transition-colors">Cybersecurity</Link></li>
                    <li><Link href="/services/infrastructure" className="text-zion-slate-light hover:text-zion-cyan transition-colors">IT Infrastructure</Link></li>
                    <li><Link href="/services/transformation" className="text-zion-slate-light hover:text-zion-cyan transition-colors">Digital Transformation</Link></li>
                    <li><Link href="/services/consulting" className="text-zion-slate-light hover:text-zion-cyan transition-colors">Consulting</Link></li>
                  </ul>
                </div>
                <div>
                  <h4 className="text-zion-cyan font-semibold mb-3 flex items-center">
                    <Shield className="w-4 h-4 mr-2" />
                    Advanced Solutions
                  </h4>
                  <ul className="space-y-2 text-sm">
                    <li><Link href="/services/quantum" className="text-zion-slate-light hover:text-zion-cyan transition-colors">Quantum Computing</Link></li>
                    <li><Link href="/services/blockchain" className="text-zion-slate-light hover:text-zion-cyan transition-colors">Blockchain</Link></li>
                    <li><Link href="/services/5g" className="text-zion-slate-light hover:text-zion-cyan transition-colors">5G Solutions</Link></li>
                    <li><Link href="/services/iot" className="text-zion-slate-light hover:text-zion-cyan transition-colors">IoT & Edge</Link></li>
                    <li><Link href="/services/space" className="text-zion-slate-light hover:text-zion-cyan transition-colors">Space Tech</Link></li>
                    <li><Link href="/services/micro-saas" className="text-zion-slate-light hover:text-zion-cyan transition-colors">Micro SAAS</Link></li>
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
                <li><Link href="/solutions/enterprise" className="text-zion-slate-light hover:text-zion-cyan transition-colors">Enterprise</Link></li>
                <li><Link href="/solutions/healthcare" className="text-zion-slate-light hover:text-zion-cyan transition-colors">Healthcare</Link></li>
                <li><Link href="/solutions/financial" className="text-zion-slate-light hover:text-zion-cyan transition-colors">Financial Services</Link></li>
                <li><Link href="/solutions/manufacturing" className="text-zion-slate-light hover:text-zion-cyan transition-colors">Manufacturing</Link></li>
                <li><Link href="/solutions/retail" className="text-zion-slate-light hover:text-zion-cyan transition-colors">Retail & E-commerce</Link></li>
                <li><Link href="/solutions/government" className="text-zion-slate-light hover:text-zion-cyan transition-colors">Government</Link></li>
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
                <li><Link href="/about" className="text-zion-slate-light hover:text-zion-cyan transition-colors">About Us</Link></li>
                <li><Link href="/leadership" className="text-zion-slate-light hover:text-zion-cyan transition-colors">Leadership</Link></li>
                <li><Link href="/careers" className="text-zion-slate-light hover:text-zion-cyan transition-colors">Careers</Link></li>
                <li><Link href="/partners" className="text-zion-slate-light hover:text-zion-cyan transition-colors">Partners</Link></li>
                <li><Link href="/news" className="text-zion-slate-light hover:text-zion-cyan transition-colors">News</Link></li>
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
            className="absolute top-full left-0 mt-2 w-64 bg-zion-blue-dark border border-zion-purple/30 rounded-lg shadow-2xl shadow-zion-purple/20 z-50"
          >
            <div className="p-4">
              <ul className="space-y-2 text-sm">
                <li><Link href="/blog" className="text-zion-slate-light hover:text-zion-cyan transition-colors">Blog</Link></li>
                <li><Link href="/documentation" className="text-zion-slate-light hover:text-zion-cyan transition-colors">Documentation</Link></li>
                <li><Link href="/api-docs" className="text-zion-slate-light hover:text-zion-cyan transition-colors">API Reference</Link></li>
                <li><Link href="/case-studies" className="text-zion-slate-light hover:text-zion-cyan transition-colors">Case Studies</Link></li>
                <li><Link href="/webinars" className="text-zion-slate-light hover:text-zion-cyan transition-colors">Webinars</Link></li>
                <li><Link href="/help-center" className="text-zion-slate-light hover:text-zion-cyan transition-colors">Help Center</Link></li>
              </ul>
            </div>
          </div>
        )}
      </div>

      <Link
        href="/pricing"
        className="text-sm font-medium transition-colors hover:text-primary text-muted-foreground hover:text-zion-cyan"
      >
        Pricing
      </Link>

      <Link
        href="/contact"
        className="text-sm font-medium transition-colors hover:text-primary text-muted-foreground hover:text-zion-cyan"
      >
        Contact
      </Link>
    </nav>
  );
}
