import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
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
                    <li><Link to="/enterprise" className="text-zion-slate-light hover:text-zion-cyan transition-colors">Enterprise Solutions</Link></li>
                  </ul>
                </div>
                <div>
                  <h4 className="text-zion-cyan font-semibold mb-3 flex items-center">
                    <Brain className="w-4 h-4 mr-2"/>
                    AI & Automation
                  </h4>
                  <ul className="space-y-3 text-sm">
                    <li>
                      <Link to="/services/ai-enterprise-automation-platform" className="text-zion-slate-light hover:text-zion-cyan transition-colors flex items-center">
                        <Brain className="w-3 h-3 mr-2" />
                        AI Enterprise Automation
                      </Link>
                    </li>
                    <li>
                      <Link to="/services/ai-enterprise-intelligence-platform" className="text-zion-slate-light hover:text-zion-cyan transition-colors flex items-center">
                        <Brain className="w-3 h-3 mr-2" />
                        AI Enterprise Intelligence
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
                      <Link to="/services/ai-quantum-neural-network-platform" className="text-zion-slate-light hover:text-zion-cyan transition-colors flex items-center">
                        <Atom className="w-3 h-3 mr-2" />
                        Quantum Neural Networks
                      </Link>
                    </li>
                    <li>
                      <Link to="/services/ai-supply-chain-optimization" className="text-zion-slate-light hover:text-zion-cyan transition-colors flex items-center">
                        <Workflow className="w-3 h-3 mr-2" />
                        Supply Chain AI
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
                        AI Compliance Assistant
                      </Link>
                    </li>
                    <li>
                      <Link to="/services/ai-content-creation-studio" className="text-zion-slate-light hover:text-zion-cyan transition-colors flex items-center">
                        <PenTool className="w-3 h-3 mr-2" />
                        AI Content Studio
                      </Link>
                    </li>
                  </ul>
                </div>

                {/* IT & Infrastructure Services */}
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
                      <Link to="/services/ai-quantum-computing-solutions" className="text-zion-slate-light hover:text-zion-cyan transition-colors flex items-center">
                        <Atom className="w-3 h-3 mr-2" />
                        Quantum Computing
                      </Link>
                    </li>
                    <li>
                      <Link to="/services/edge-computing-solutions" className="text-zion-slate-light hover:text-zion-cyan transition-colors flex items-center">
                        <Cpu className="w-3 h-3 mr-2" />
                        Edge Computing
                      </Link>
                    </li>
                    <li>
                      <Link to="/services/blockchain-enterprise-solutions" className="text-zion-slate-light hover:text-zion-cyan transition-colors flex items-center">
                        <Network className="w-3 h-3 mr-2" />
                        Blockchain Solutions
                      </Link>
                    </li>
                    <li>
                      <Link to="/services/iot-edge" className="text-zion-slate-light hover:text-zion-cyan transition-colors flex items-center">
                        <Wifi className="w-3 h-3 mr-2" />
                        IoT & Edge Computing
                      </Link>
                    </li>
                    <li>
                      <Link to="/services/digital-transformation" className="text-zion-slate-light hover:text-zion-cyan transition-colors flex items-center">
                        <Rocket className="w-3 h-3 mr-2" />
                        Digital Transformation
                      </Link>
                    </li>
                    <li>
                      <Link to="/services/cloud-finops-optimizer" className="text-zion-slate-light hover:text-zion-cyan transition-colors flex items-center">
                        <Cloud className="w-3 h-3 mr-2" />
                        Cloud FinOps
                      </Link>
                    </li>
                  </ul>
                </div>

                {/* Specialized AI Services Column */}
                <div className="space-y-4">
                  <div className="flex items-center space-x-3 pb-3 border-b border-zion-purple/20">
                    <div className="p-2 bg-zion-cyan/20 rounded-lg">
                      <Sparkles className="w-5 h-5 text-zion-cyan"/>
                    </div>
                    <h4 className="text-zion-cyan font-bold text-lg">Specialized AI</h4>
                  </div>
                  <ul className="space-y-2">
                    <li>
                      <Link to="/services/ai-financial-trading-platform" className="group flex items-center justify-between p-2 rounded-lg hover:bg-zion-purple/10 transition-all duration-300">
                        <div className="flex items-center space-x-2">
                          <TrendingUp className="w-3 h-3 text-zion-cyan" />
                          <span className="text-zion-slate-light group-hover:text-white transition-colors text-sm">AI Financial Trading</span>
                        </div>
                      </Link>
                    </li>
                    <li>
                      <Link to="/services/ai-healthcare-analytics-platform" className="group flex items-center justify-between p-2 rounded-lg hover:bg-zion-purple/10 transition-all duration-300">
                        <div className="flex items-center space-x-2">
                          <Heart className="w-3 h-3 text-zion-cyan" />
                          <span className="text-zion-slate-light group-hover:text-white transition-colors text-sm">AI Healthcare Analytics</span>
                        </div>
                      </Link>
                    </li>
                    <li>
                      <Link to="/services/ai-legal-document-automation-platform" className="group flex items-center justify-between p-2 rounded-lg hover:bg-zion-purple/10 transition-all duration-300">
                        <div className="flex items-center space-x-2">
                          <FileText className="w-3 h-3 text-zion-cyan" />
                          <span className="text-zion-slate-light group-hover:text-white transition-colors text-sm">AI Legal Automation</span>
                        </div>
                      </Link>
                    </li>
                    <li>
                      <Link to="/services/ai-supply-chain-optimization-platform" className="group flex items-center justify-between p-2 rounded-lg hover:bg-zion-purple/10 transition-all duration-300">
                        <div className="flex items-center space-x-2">
                          <Truck className="w-3 h-3 text-zion-cyan" />
                          <span className="text-zion-slate-light group-hover:text-white transition-colors text-sm">Supply Chain AI</span>
                        </div>
                      </Link>
                    </li>
                    <li>
                      <Link to="/services/ai-space-technology-platform" className="group flex items-center justify-between p-2 rounded-lg hover:bg-zion-purple/10 transition-all duration-300">
                        <div className="flex items-center space-x-2">
                          <Satellite className="w-3 h-3 text-zion-cyan" />
                          <span className="text-zion-slate-light group-hover:text-white transition-colors text-sm">Space Technology AI</span>
                        </div>
                      </Link>
                    </li>
                    <li>
                      <Link to="/services/ai-cybersecurity-threat-intelligence" className="group flex items-center justify-between p-2 rounded-lg hover:bg-zion-purple/10 transition-all duration-300">
                        <div className="flex items-center space-x-2">
                          <Shield className="w-3 h-3 text-zion-cyan" />
                          <span className="text-zion-slate-light group-hover:text-white transition-colors text-sm">AI Cybersecurity</span>
                        </div>
                      </Link>
                    </li>
                  </ul>
                </div>

                {/* Emerging Technology Services */}
                <div>
                  <h4 className="text-zion-cyan font-semibold mb-4 flex items-center">
                    <Rocket className="w-4 h-4 mr-2"/>
                    Emerging Tech
                  </h4>
                  <ul className="space-y-3 text-sm">
                    <li>
                      <Link to="/services/ai-quantum-computing-solutions" className="group flex items-center justify-between p-2 rounded-lg hover:bg-zion-purple/10 transition-all duration-300">
                        <div className="flex items-center space-x-2">
                          <Atom className="w-3 h-3 text-zion-purple" />
                          <span className="text-zion-slate-light group-hover:text-white transition-colors text-sm">Quantum Computing</span>
                        </div>
                      </Link>
                    </li>
                    <li>
                      <Link to="/services/ai-powered-seo" className="group flex items-center justify-between p-2 rounded-lg hover:bg-zion-purple/10 transition-all duration-300">
                        <div className="flex items-center space-x-2">
                          <Search className="w-3 h-3 text-zion-purple" />
                          <span className="text-zion-slate-light group-hover:text-white transition-colors text-sm">AI-Powered SEO</span>
                        </div>
                      </Link>
                    </li>
                    <li>
                      <Link to="/services/micro-saas-solutions-comprehensive" className="group flex items-center justify-between p-2 rounded-lg hover:bg-zion-purple/10 transition-all duration-300">
                        <div className="flex items-center space-x-2">
                          <Layers className="w-3 h-3 text-zion-purple" />
                          <span className="text-zion-slate-light group-hover:text-white transition-colors text-sm">Micro SaaS Solutions</span>
                        </div>
                      </Link>
                    </li>
                    <li>
                      <Link to="/services/digital-transformation" className="group flex items-center justify-between p-2 rounded-lg hover:bg-zion-purple/10 transition-all duration-300">
                        <div className="flex items-center space-x-2">
                          <Sparkles className="w-3 h-3 text-zion-purple" />
                          <span className="text-zion-slate-light group-hover:text-white transition-colors text-sm">Digital Transformation</span>
                        </div>
                      </Link>
                    </li>
                    <li>
                      <Link to="/emerging-tech" className="group flex items-center justify-between p-2 rounded-lg hover:bg-zion-purple/10 transition-all duration-300">
                        <div className="flex items-center space-x-2">
                          <Rocket className="w-3 h-3 text-zion-purple" />
                          <span className="text-zion-slate-light group-hover:text-white transition-colors text-sm">Emerging Technologies</span>
                        </div>
                      </Link>
                    </li>
                    <li>
                      <Link to="/research" className="group flex items-center justify-between p-2 rounded-lg hover:bg-zion-purple/10 transition-all duration-300">
                        <div className="flex items-center space-x-2">
                          <Lightbulb className="w-3 h-3 text-zion-purple" />
                          <span className="text-zion-slate-light group-hover:text-white transition-colors text-sm">Research & Development</span>
                        </div>
                      </Link>
                    </li>
                  </ul>
                </div>
                <div>
                  <h4 className="text-zion-cyan font-semibold mb-3 flex items-center">
                    <Zap className="w-4 h-4 mr-2"/>
                    Emerging Tech
                  </h4>
                  <ul className="space-y-2 text-sm">
                    <li><Link to="/quantum-computing" className="text-zion-slate-light hover:text-zion-cyan transition-colors">Quantum Computing</Link></li>
                    <li><Link to="/blockchain" className="text-zion-slate-light hover:text-zion-cyan transition-colors">Blockchain</Link></li>
                    <li><Link to="/digital-transformation" className="text-zion-slate-light hover:text-zion-cyan transition-colors">Digital Transformation</Link></li>
                    <li><Link to="/enterprise" className="text-zion-slate-light hover:text-zion-cyan transition-colors">Enterprise Solutions</Link></li>
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
                    Enterprise
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
                    Innovation
                  </h4>
                  <ul className="space-y-2 text-sm">
                    <li><Link to="/solutions" className="text-zion-slate-light hover:text-zion-cyan transition-colors">Industry Solutions</Link></li>
                    <li><Link to="/case-studies" className="text-zion-slate-light hover:text-zion-cyan transition-colors">Case Studies</Link></li>
                    <li><Link to="/marketplace" className="text-zion-slate-light hover:text-zion-cyan transition-colors">Marketplace</Link></li>
                  </ul>
                </div>
              </div>
              <div className="mt-6 pt-6 border-t border-zion-purple/20">
                <Link to="/enterprise" className="text-zion-cyan hover:text-zion-cyan-light transition-colors text-sm font-medium flex items-center justify-center">
                  Enterprise Solutions
                  <Building2 className="w-4 h-4 ml-2"/>
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
