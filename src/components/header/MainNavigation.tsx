import React, { useState } from 'react';
import { Link  } from 'react-router-dom.ts';
import { cn  } from '@/lib/utils';
import { NavLink  } from 'react-router-dom.ts';
import { ChevronDown, Zap, Brain, Shield, Users, HardDrive, TrendingUp  } from 'lucide-react';
export function MainNavigation(...args[]):  {
    const [isServicesOpen, setIsServicesOpen] = useState(false);
    const [isSolutionsOpen, setIsSolutionsOpen] = useState(false);
    return (<nav className={cn("hidden md:flex items-center space-x-6", className)}>
      <NavLink to="/" className={({ isActive }) => cn("text-sm font-medium transition-colors hover:text-primary", isActive ? "text-zion-cyan" : "text-muted-foreground")}>
        Home
      </NavLink>
      {/* Services Dropdown */}
      <div className="relative group">
        <button onMouseEnter={() => setIsServicesOpen(true)} onMouseLeave={() => setIsServicesOpen(false)} className="flex items-center space-x-1 text-sm font-medium transition-colors hover:text-primary text-muted-foreground">
          <Zap className="w-4 h-4"/>
          <span>Services</span>
          <ChevronDown className="w-3 h-3"/>
        </button>
        {isServicesOpen && (<div onMouseEnter={() => setIsServicesOpen(true)} onMouseLeave={() => setIsServicesOpen(false)} className="absolute top-full left-0 mt-2 w-80 bg-zion-blue-dark border border-zion-purple/30 rounded-lg shadow-2xl shadow-zion-purple/20 z-50">
            <div className="p-4">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <h4 className="text-zion-cyan font-semibold mb-4 flex items-center">
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
              </div>
              
              {/* Bottom Links */}
              <div className="mt-6 pt-6 border-t border-zion-purple/20">
                <div className="grid grid-cols-4 gap-4">
                  <Link to="/services" className="text-zion-cyan hover:text-zion-cyan-light transition-colors text-sm font-medium flex items-center justify-center">
                    View All Services
                    <TrendingUp className="w-4 h-4 ml-2"/>
                  </Link>
                  <Link to="/innovative-services-showcase-2026" className="text-zion-purple hover:text-zion-purple-light transition-colors text-sm font-medium flex items-center justify-center">
                    Innovation Showcase 2026
                    <Rocket className="w-4 h-4 ml-2"/>
                  </Link>
                  <Link to="/comprehensive-services-showcase-2025" className="text-zion-cyan hover:text-zion-cyan-light transition-colors text-sm font-medium flex items-center justify-center">
                    Comprehensive Showcase 2025
                    <Star className="w-4 h-4 ml-2"/>
                  </Link>
                  <Link to="/request-quote" className="text-zion-purple hover:text-zion-purple-light transition-colors text-sm font-medium flex items-center justify-center">
                    Get Custom Quote
                    <DollarSign className="w-4 h-4 ml-2"/>
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
            className="flex items-center space-x-2 text-sm font-medium transition-colors hover:text-primary text-muted-foreground px-3 py-2 rounded-md hover:bg-zion-cyan/5"
          >
            <div className="p-4">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <h4 className="text-zion-cyan font-semibold mb-3 flex items-center">
                    <Users className="w-4 h-4 mr-2"/>
                    Enterprise
                  </h4>
                  <ul className="space-y-2 text-sm">
                    <li><Link to="/enterprise" className="text-zion-slate-light hover:text-zion-cyan transition-colors">Enterprise Solutions</Link></li>
                    <li><Link to="/industry-solutions" className="text-zion-slate-light hover:text-zion-cyan transition-colors">Industry Solutions</Link></li>
                    <li><Link to="/digital-transformation" className="text-zion-slate-light hover:text-zion-cyan transition-colors">Digital Transformation</Link></li>
                    <li><Link to="/cloud-solutions" className="text-zion-slate-light hover:text-zion-cyan transition-colors">Cloud Solutions</Link></li>
                  </ul>
                </div>
                <div>
                  <h4 className="text-zion-cyan font-semibold mb-3 flex items-center">
                    <HardDrive className="w-4 h-4 mr-2"/>
                    Innovation
                  </h4>
                  <ul className="space-y-2 text-sm">
                    <li><Link to="/emerging-tech" className="text-zion-slate-light hover:text-zion-cyan transition-colors">Emerging Tech</Link></li>
                    <li><Link to="/quantum-computing" className="text-zion-slate-light hover:text-zion-cyan transition-colors">Quantum Computing</Link></li>
                    <li><Link to="/blockchain-solutions" className="text-zion-slate-light hover:text-zion-cyan transition-colors">Blockchain</Link></li>
                    <li><Link to="/iot-solutions" className="text-zion-slate-light hover:text-zion-cyan transition-colors">IoT Solutions</Link></li>
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
          )}
        </div>

        {/* Resources Dropdown */}
        <div className="relative group">
          <button 
            onMouseEnter={() => setIsResourcesOpen(true)} 
            onMouseLeave={() => setIsResourcesOpen(false)} 
            className="flex items-center space-x-2 text-sm font-medium transition-colors hover:text-primary text-muted-foreground px-3 py-2 rounded-md hover:bg-zion-cyan/5"
          >
            <FileText className="w-4 h-4"/>
            <span>Resources</span>
            <ChevronDown className="w-3 h-3 transition-transform group-hover:rotate-180"/>
          </button>
          {isResourcesOpen && (
            <div 
              onMouseEnter={() => setIsResourcesOpen(true)} 
              onMouseLeave={() => setIsResourcesOpen(false)} 
              className="absolute top-full left-0 mt-2 w-[600px] bg-zion-blue-dark border border-zion-purple/30 rounded-xl shadow-2xl shadow-zion-purple/20 z-50 backdrop-blur-sm"
            >
              <div className="p-6">
                <div className="grid grid-cols-3 gap-6">
                  <div>
                    <h4 className="text-zion-cyan font-semibold mb-4">Learning</h4>
                    <ul className="space-y-3 text-sm">
                      <li>
                        <Link to="/blog" className="text-zion-slate-light hover:text-zion-cyan transition-colors flex items-center group">
                          <FileText className="w-4 h-4 mr-3 group-hover:scale-110 transition-transform" />
                          <span>Blog</span>
                        </Link>
                      </li>
                      <li>
                        <Link to="/webinars" className="text-zion-slate-light hover:text-zion-cyan transition-colors flex items-center group">
                          <Video className="w-4 h-4 mr-3 group-hover:scale-110 transition-transform" />
                          <span>Webinars</span>
                        </Link>
                      </li>
                      <li>
                        <Link to="/training" className="text-zion-slate-light hover:text-zion-cyan transition-colors flex items-center group">
                          <GraduationCap className="w-4 h-4 mr-3 group-hover:scale-110 transition-transform" />
                          <span>Training</span>
                        </Link>
                      </li>
                      <li>
                        <Link to="/research-development" className="text-zion-slate-light hover:text-zion-cyan transition-colors flex items-center group">
                          <Lightbulb className="w-4 h-4 mr-3 group-hover:scale-110 transition-transform" />
                          <span>Research & Development</span>
                        </Link>
                      </li>
                    </ul>
                  </div>
                  <h4 className="text-zion-cyan font-bold text-lg">Industry Solutions</h4>
                </div>
                <div className="grid grid-cols-2 gap-3">
                  <Link to="/solutions/healthcare" className="group flex items-center space-x-3 p-3 rounded-lg hover:bg-zion-purple/10 transition-all duration-300">
                    <Heart className="w-4 h-4 text-zion-cyan" />
                    <span className="text-zion-slate-light group-hover:text-white transition-colors">Healthcare</span>
                  </Link>
                  <Link to="/solutions/financial" className="group flex items-center space-x-3 p-3 rounded-lg hover:bg-zion-purple/10 transition-all duration-300">
                    <DollarSign className="w-4 h-4 text-zion-cyan" />
                    <span className="text-zion-slate-light group-hover:text-white transition-colors">Financial</span>
                  </Link>
                  <Link to="/solutions/manufacturing" className="group flex items-center space-x-3 p-3 rounded-lg hover:bg-zion-purple/10 transition-all duration-300">
                    <Factory className="w-4 h-4 text-zion-cyan" />
                    <span className="text-zion-slate-light group-hover:text-white transition-colors">Manufacturing</span>
                  </Link>
                  <Link to="/solutions/government" className="group flex items-center space-x-3 p-3 rounded-lg hover:bg-zion-purple/10 transition-all duration-300">
                    <Building2 className="w-4 h-4 text-zion-cyan" />
                    <span className="text-zion-slate-light group-hover:text-white transition-colors">Government</span>
                  </Link>
                  <Link to="/solutions/retail" className="group flex items-center space-x-3 p-3 rounded-lg hover:bg-zion-purple/10 transition-all duration-300">
                    <Briefcase className="w-4 h-4 text-zion-cyan" />
                    <span className="text-zion-slate-light group-hover:text-white transition-colors">Retail</span>
                  </Link>
                  <Link to="/enterprise" className="group flex items-center space-x-3 p-3 rounded-lg hover:bg-zion-purple/10 transition-all duration-300">
                    <Building2 className="w-4 h-4 text-zion-cyan" />
                    <span className="text-zion-slate-light group-hover:text-white transition-colors">Enterprise</span>
                  </Link>
                </div>
                <div className="pt-4 border-t border-zion-purple/20">
                  <Link 
                    to="/solutions" 
                    className="flex items-center justify-between w-full p-3 rounded-lg hover:bg-zion-purple/10 transition-all duration-300 group"
                  >
                    <span className="text-zion-cyan font-medium">View All Solutions</span>
                    <ArrowRight className="w-4 h-4 text-zion-cyan group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Research Link - NEW */}
      <NavLink 
        to="/research" 
        className={({ isActive }) => 
          cn("text-sm font-medium transition-all duration-300 hover:text-zion-cyan hover:scale-105", 
            isActive ? "text-zion-cyan font-semibold" : "text-zion-slate-light"
          )
        }
      >
        Research
      </NavLink>

      {/* Company Dropdown */}
      <div className="relative navigation-dropdown">
        <button 
          onClick={() => handleDropdownToggle('company')}
          className={cn(
            "flex items-center space-x-2 text-sm font-medium transition-all duration-300 hover:text-zion-cyan group",
            isCompanyOpen ? "text-zion-cyan" : "text-zion-slate-light"
          )}
        >
          <Building2 className={cn("w-4 h-4 transition-transform duration-300", isCompanyOpen ? "scale-110" : "")}/>
          <span>Company</span>
          <ChevronDown className={cn("w-3 h-3 transition-transform duration-300", isCompanyOpen ? "rotate-180" : "")}/>
        </button>
        {isCompanyOpen && (
          <div className="absolute top-full left-0 mt-3 w-72 bg-gradient-to-br from-zion-blue-dark via-zion-slate-dark to-zion-blue-dark border border-zion-purple/30 rounded-2xl shadow-2xl shadow-zion-purple/20 z-50 backdrop-blur-sm">
            <div className="p-6">
              <div className="space-y-4">
                <div className="flex items-center space-x-3 pb-3 border-b border-zion-purple/20">
                  <div className="p-2 bg-zion-purple/20 rounded-lg">
                    <Building2 className="w-5 h-5 text-zion-purple"/>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Pricing Link */}
        <NavLink 
          to="/pricing" 
          className={({ isActive }) => 
            cn("text-sm font-medium transition-colors hover:text-primary px-3 py-2 rounded-md", 
              isActive ? "text-zion-cyan bg-zion-cyan/10" : "text-muted-foreground hover:text-zion-cyan hover:bg-zion-cyan/5"
            )
          }
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
                <li><Link to="/blog" className="text-zion-slate-light hover:text-zion-cyan transition-colors">Blog</Link></li>
                <li><Link to="/documentation" className="text-zion-slate-light hover:text-zion-cyan transition-colors">Documentation</Link></li>
                <li><Link to="/white-papers" className="text-zion-slate-light hover:text-zion-cyan transition-colors">White Papers</Link></li>
                <li><Link to="/webinars" className="text-zion-slate-light hover:text-zion-cyan transition-colors">Webinars</Link></li>
                <li><Link to="/training" className="text-zion-slate-light hover:text-zion-cyan transition-colors">Training</Link></li>
                <li><Link to="/research-development" className="text-zion-slate-light hover:text-zion-cyan transition-colors">Research</Link></li>
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
        to="/contact" 
        className={({ isActive }) => 
          cn("text-sm font-medium transition-colors hover:text-primary", 
             isActive ? "text-zion-cyan" : "text-muted-foreground",
             "bg-gradient-to-r from-zion-purple to-zion-purple-dark hover:from-zion-purple-light hover:to-zion-purple text-white px-6 py-2 rounded-lg shadow-lg shadow-zion-purple/25 hover:shadow-xl hover:shadow-zion-purple/40 transition-all duration-300 hover:-translate-y-1")
        }
      >
        Get Started
      </NavLink>
    </nav>
  );
}
