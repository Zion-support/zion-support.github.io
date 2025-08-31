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
  Atom,
  Heart,
  DollarSign,
  Cpu,
  Lock,
  Cloud,
  Leaf,
  Rocket,
  Globe,
  Target,
  Server,
  MessageCircle,
  ShoppingCart,
  Clock,
  Smartphone
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
            className="absolute top-full left-0 mt-2 w-[800px] bg-zion-blue-dark border border-zion-purple/30 rounded-lg shadow-2xl shadow-zion-purple/20 z-50"
          >
            <div className="p-6">
              <div className="grid grid-cols-3 gap-6">
                {/* AI & Machine Learning */}
                <div>
                  <h4 className="text-zion-cyan font-semibold mb-3 flex items-center">
                    <Brain className="w-4 h-4 mr-2"/>
                    AI & Machine Learning
                  </h4>
                  <ul className="space-y-2 text-sm">
                    <li><Link to="/services/ai-autonomous-research-assistant" className="text-zion-slate-light hover:text-zion-cyan transition-colors">AI Research Assistant</Link></li>
                    <li><Link to="/services/ai-cybersecurity-platform" className="text-zion-slate-light hover:text-zion-cyan transition-colors">AI Cybersecurity</Link></li>
                    <li><Link to="/services/ai-healthcare-platform" className="text-zion-slate-light hover:text-zion-cyan transition-colors">AI Healthcare</Link></li>
                    <li><Link to="/services/ai-supply-chain-optimization" className="text-zion-slate-light hover:text-zion-cyan transition-colors">Supply Chain AI</Link></li>
                    <li><Link to="/services/ai-customer-experience-analytics" className="text-zion-slate-light hover:text-zion-cyan transition-colors">Customer Analytics</Link></li>
                    <li><Link to="/services/ai-project-management-platform" className="text-zion-slate-light hover:text-zion-cyan transition-colors">Project Management</Link></li>
                    <li><Link to="/services/ai-workflow-automation" className="text-zion-slate-light hover:text-zion-cyan transition-colors">Workflow Automation</Link></li>
                    <li><Link to="/services/ai-content-optimizer-pro" className="text-zion-slate-light hover:text-zion-cyan transition-colors">Content Optimizer</Link></li>
                    <li><Link to="/services/ai-devops-automation-platform" className="text-zion-slate-light hover:text-zion-cyan transition-colors">DevOps Automation</Link></li>
                    <li><Link to="/services/ai-auto-email-responder" className="text-zion-slate-light hover:text-zion-cyan transition-colors">Email Automation</Link></li>
                  </ul>
                </div>

                {/* Quantum Computing */}
                <div>
                  <h4 className="text-zion-cyan font-semibold mb-3 flex items-center">
                    <Atom className="w-4 h-4 mr-2"/>
                    Quantum Computing
                  </h4>
                  <ul className="space-y-2 text-sm">
                    <li><Link to="/services/ai-quantum-hybrid-platform" className="text-zion-slate-light hover:text-zion-cyan transition-colors">Quantum AI Platform</Link></li>
                    <li><Link to="/services/ai-quantum-neural-network-platform" className="text-zion-slate-light hover:text-zion-cyan transition-colors">Quantum Neural Network</Link></li>
                    <li><Link to="/services/quantum-computing-solutions" className="text-zion-slate-light hover:text-zion-cyan transition-colors">Quantum Solutions</Link></li>
                  </ul>

                  <h4 className="text-zion-cyan font-semibold mb-3 mt-6 flex items-center">
                    <Shield className="w-4 h-4 mr-2"/>
                    Cybersecurity
                  </h4>
                  <ul className="space-y-2 text-sm">
                    <li><Link to="/services/cybersecurity" className="text-zion-slate-light hover:text-zion-cyan transition-colors">Security Solutions</Link></li>
                    <li><Link to="/services/ai-cybersecurity-threat-detection" className="text-zion-slate-light hover:text-zion-cyan transition-colors">Threat Detection</Link></li>
                    <li><Link to="/services/incident-response-platform" className="text-zion-slate-light hover:text-zion-cyan transition-colors">Incident Response</Link></li>
                    <li><Link to="/services/zero-trust-network-architecture" className="text-zion-slate-light hover:text-zion-cyan transition-colors">Zero Trust</Link></li>
                  </ul>
                </div>

                {/* IT & Infrastructure */}
                <div>
                  <h4 className="text-zion-cyan font-semibold mb-3 flex items-center">
                    <Server className="w-4 h-4 mr-2"/>
                    IT & Infrastructure
                  </h4>
                  <ul className="space-y-2 text-sm">
                    <li><Link to="/services/cloud-devops" className="text-zion-slate-light hover:text-zion-cyan transition-colors">Cloud & DevOps</Link></li>
                    <li><Link to="/services/it-infrastructure" className="text-zion-slate-light hover:text-zion-cyan transition-colors">IT Infrastructure</Link></li>
                    <li><Link to="/services/network-infrastructure" className="text-zion-slate-light hover:text-zion-cyan transition-colors">Network Solutions</Link></li>
                    <li><Link to="/services/it-onsite-services" className="text-zion-slate-light hover:text-zion-cyan transition-colors">Onsite Support</Link></li>
                    <li><Link to="/services/ai-iot-edge-computing-platform" className="text-zion-slate-light hover:text-zion-cyan transition-colors">IoT Edge Computing</Link></li>
                  </ul>

                  <h4 className="text-zion-cyan font-semibold mb-3 mt-6 flex items-center">
                    <Cloud className="w-4 h-4 mr-2"/>
                    Micro SaaS
                  </h4>
                  <ul className="space-y-2 text-sm">
                    <li><Link to="/services/micro-crm" className="text-zion-slate-light hover:text-zion-cyan transition-colors">Micro CRM</Link></li>
                    <li><Link to="/services/employee-scheduling-saas" className="text-zion-slate-light hover:text-zion-cyan transition-colors">Employee Scheduling</Link></li>
                    <li><Link to="/services/returns-management-saas" className="text-zion-slate-light hover:text-zion-cyan transition-colors">Returns Management</Link></li>
                    <li><Link to="/services/mobile-survey" className="text-zion-slate-light hover:text-zion-cyan transition-colors">Mobile Survey</Link></li>
                  </ul>
                </div>
              </div>

              {/* Bottom Section */}
              <div className="mt-6 pt-6 border-t border-zion-purple/20">
                <div className="grid grid-cols-2 gap-6">
                  <div>
                    <h5 className="text-zion-cyan font-medium mb-2">Specialized Solutions</h5>
                    <div className="flex flex-wrap gap-2 text-xs">
                      <Link to="/services/healthcare-tech" className="text-zion-slate-light hover:text-zion-cyan transition-colors">Healthcare Tech</Link>
                      <span className="text-zion-purple">•</span>
                      <Link to="/services/ai-financial-trading-platform" className="text-zion-slate-light hover:text-zion-cyan transition-colors">Financial Trading</Link>
                      <span className="text-zion-purple">•</span>
                      <Link to="/services/green-it-solutions" className="text-zion-slate-light hover:text-zion-cyan transition-colors">Green IT</Link>
                      <span className="text-zion-purple">•</span>
                      <Link to="/services/blockchain-enterprise-solutions" className="text-zion-slate-light hover:text-zion-cyan transition-colors">Blockchain</Link>
                    </div>
                  </div>
                  <div className="text-right">
                    <Link 
                      to="/comprehensive-services-showcase-2025" 
                      className="text-zion-cyan hover:text-zion-cyan-light transition-colors text-sm font-medium flex items-center justify-end"
                    >
                      View All Services
                      <ChevronDown className="w-3 h-3 ml-1 rotate-[-90deg]" />
                    </Link>
                  </div>
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
          <Target className="w-4 h-4"/>
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
              <div className="space-y-4">
                <div>
                  <h4 className="text-zion-cyan font-semibold mb-3 flex items-center">
                    <Building2 className="w-4 h-4 mr-2"/>
                    Industry Solutions
                  </h4>
                  <ul className="space-y-2 text-sm">
                    <li><Link to="/industry-solutions" className="text-zion-slate-light hover:text-zion-cyan transition-colors">All Industries</Link></li>
                    <li><Link to="/solutions/healthcare" className="text-zion-slate-light hover:text-zion-cyan transition-colors">Healthcare</Link></li>
                    <li><Link to="/solutions/financial" className="text-zion-slate-light hover:text-zion-cyan transition-colors">Financial Services</Link></li>
                    <li><Link to="/solutions/manufacturing" className="text-zion-slate-light hover:text-zion-cyan transition-colors">Manufacturing</Link></li>
                    <li><Link to="/solutions/retail" className="text-zion-slate-light hover:text-zion-cyan transition-colors">Retail & E-commerce</Link></li>
                    <li><Link to="/solutions/transportation" className="text-zion-slate-light hover:text-zion-cyan transition-colors">Transportation</Link></li>
                    <li><Link to="/solutions/education" className="text-zion-slate-light hover:text-zion-cyan transition-colors">Education</Link></li>
                  </ul>
                </div>
                <div>
                  <h4 className="text-zion-cyan font-semibold mb-3 flex items-center">
                    <Rocket className="w-4 h-4 mr-2"/>
                    Digital Transformation
                  </h4>
                  <ul className="space-y-2 text-sm">
                    <li><Link to="/digital-transformation" className="text-zion-slate-light hover:text-zion-cyan transition-colors">Transformation Services</Link></li>
                    <li><Link to="/enterprise" className="text-zion-slate-light hover:text-zion-cyan transition-colors">Enterprise Solutions</Link></li>
                    <li><Link to="/cloud-solutions" className="text-zion-slate-light hover:text-zion-cyan transition-colors">Cloud Solutions</Link></li>
                    <li><Link to="/emerging-tech" className="text-zion-slate-light hover:text-zion-cyan transition-colors">Emerging Tech</Link></li>
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
                <li><Link to="/about/team" className="text-zion-slate-light hover:text-zion-cyan transition-colors">Our Team</Link></li>
                <li><Link to="/about/story" className="text-zion-slate-light hover:text-zion-cyan transition-colors">Our Story</Link></li>
                <li><Link to="/careers" className="text-zion-slate-light hover:text-zion-cyan transition-colors">Careers</Link></li>
                <li><Link to="/partners" className="text-zion-slate-light hover:text-zion-cyan transition-colors">Partners</Link></li>
                <li><Link to="/news" className="text-zion-slate-light hover:text-zion-cyan transition-colors">News</Link></li>
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
          <FileText className="w-4 h-4"/>
          <span>Resources</span>
          <ChevronDown className="w-3 h-3"/>
        </button>
        {isResourcesOpen && (
          <div 
            onMouseEnter={() => setIsResourcesOpen(true)} 
            onMouseLeave={() => setIsResourcesOpen(false)} 
            className="absolute top-full left-0 mt-2 w-80 bg-zion-blue-dark border border-zion-purple/30 rounded-lg shadow-2xl shadow-zion-purple/20 z-50"
          >
            <div className="p-4">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <h4 className="text-zion-cyan font-semibold mb-3">Content</h4>
                  <ul className="space-y-2 text-sm">
                    <li><Link to="/blog" className="text-zion-slate-light hover:text-zion-cyan transition-colors">Blog</Link></li>
                    <li><Link to="/case-studies" className="text-zion-slate-light hover:text-zion-cyan transition-colors">Case Studies</Link></li>
                    <li><Link to="/white-papers" className="text-zion-slate-light hover:text-zion-cyan transition-colors">White Papers</Link></li>
                    <li><Link to="/webinars" className="text-zion-slate-light hover:text-zion-cyan transition-colors">Webinars</Link></li>
                  </ul>
                </div>
                <div>
                  <h4 className="text-zion-cyan font-semibold mb-3">Support</h4>
                  <ul className="space-y-2 text-sm">
                    <li><Link to="/docs" className="text-zion-slate-light hover:text-zion-cyan transition-colors">Documentation</Link></li>
                    <li><Link to="/help-center" className="text-zion-slate-light hover:text-zion-cyan transition-colors">Help Center</Link></li>
                    <li><Link to="/training" className="text-zion-slate-light hover:text-zion-cyan transition-colors">Training</Link></li>
                    <li><Link to="/research-development" className="text-zion-slate-light hover:text-zion-cyan transition-colors">R&D</Link></li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Showcase Pages */}
      <NavLink 
        to="/comprehensive-services-showcase-2025" 
        className={({ isActive }) => 
          cn(
            "text-sm font-medium transition-colors hover:text-primary", 
            isActive ? "text-zion-cyan" : "text-muted-foreground"
          )
        }
      >
        Showcase 2025
      </NavLink>

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
