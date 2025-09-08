import React from 'react';
import { NavLink } from "react-router-dom";
import { ChevronDown, Zap, Brain, Shield, Users, HardDrive, TrendingUp, Building2, FileText, HelpCircle, BarChart3, Globe, Cpu, Database, Cloud, Lock, Target, Rocket, Lightbulb } from 'lucide-react';

export function MainNavigation({ className }) {
    return (
      <nav className={cn("hidden md:flex items-center space-x-6", className)}>
        <NavLink to="/" className={({ isActive }) => cn("text-sm font-medium transition-colors hover:text-primary", isActive ? "text-zion-cyan" : "text-muted-foreground")}>
          Home
        </NavLink>
        
        {/* Services Dropdown */}
        <div className="relative group">
          <button 
            onMouseEnter={() => setIsServicesOpen(true)} 
            onMouseLeave={() => setIsServicesOpen(false)} 
            className="absolute top-full left-0 mt-2 w-96 bg-zion-blue-dark border border-zion-purple/30 rounded-lg shadow-2xl shadow-zion-purple/20 z-50"
          >
            <div className="p-4">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <h4 className="text-zion-cyan font-semibold mb-3 flex items-center">
                    <Zap className="w-4 h-4 mr-2"/>
                    AI Services
                  </h4>
                  <ul className="space-y-2 text-sm">
                    <li><Link to="/ai-services" className="text-zion-slate-light hover:text-zion-cyan transition-colors">AI Services Overview</Link></li>
                    <li><Link to="/ai-solutions" className="text-zion-slate-light hover:text-zion-cyan transition-colors">AI Solutions</Link></li>
                    <li><Link to="/services/ai-supply-chain-optimization" className="text-zion-slate-light hover:text-zion-cyan transition-colors">Supply Chain AI</Link></li>
                    <li><Link to="/services/ai-cybersecurity-platform" className="text-zion-slate-light hover:text-zion-cyan transition-colors">AI Cybersecurity</Link></li>
                    <li><Link to="/services/ai-healthcare-platform" className="text-zion-slate-light hover:text-zion-cyan transition-colors">AI Healthcare</Link></li>
                    <li><Link to="/services/ai-quantum-hybrid-platform" className="text-zion-slate-light hover:text-zion-cyan transition-colors">Quantum AI</Link></li>
                  </ul>
                </div>
                <div className="mt-8 pt-6 border-t border-zion-purple/30">
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    <Link 
                      to="/comprehensive-services-showcase-2025" 
                      className="inline-flex items-center text-zion-cyan hover:text-zion-cyan-light transition-colors font-medium"
                    >
                      <span>View All Services</span>
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </Link>
                    <Link to="/innovative-services-showcase-2032" className="text-zion-purple hover:text-zion-purple-light transition-colors text-sm font-medium flex items-center justify-center">
                      Innovation Showcase 2032
                      <Rocket className="w-4 h-4 ml-2"/>
                    </Link>
                    <Link to="/innovative-services-showcase-2026" className="text-zion-purple hover:text-zion-purple-light transition-colors text-sm font-medium flex items-center justify-center">
                      Innovation Showcase 2026
                      <Rocket className="w-4 h-4 ml-2"/>
                    </Link>
                    <Link to="/comprehensive-pricing-guide-2032" className="text-zion-cyan hover:text-zion-cyan-light transition-colors text-sm font-medium flex items-center justify-center">
                      Pricing Guide 2032
                      <DollarSign className="w-4 h-4 ml-2"/>
                    </Link>
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
            </div>
          )}
        </div>

        {/* Company Dropdown */}
        <div className="relative group">
          <button 
            onMouseEnter={() => setIsCompanyOpen(true)} 
            onMouseLeave={() => setIsCompanyOpen(false)} 
            className="flex items-center space-x-2 text-sm font-medium transition-colors hover:text-primary text-muted-foreground px-3 py-2 rounded-md hover:bg-zion-cyan/5"
          >
            <Building2 className="w-4 h-4"/>
            <span>Company</span>
            <ChevronDown className="w-3 h-3 transition-transform group-hover:rotate-180"/>
          </button>
          {isCompanyOpen && (
            <div 
              onMouseEnter={() => setIsCompanyOpen(true)} 
              onMouseLeave={() => setIsCompanyOpen(false)} 
              className="absolute top-full left-0 mt-2 w-64 bg-zion-blue-dark border border-zion-purple/30 rounded-xl shadow-2xl shadow-zion-purple/20 z-50 backdrop-blur-sm"
            >
              <div className="p-6">
                <ul className="space-y-3 text-sm">
                  <li>
                    <Link to="/about" className="text-zion-slate-light hover:text-zion-cyan transition-colors flex items-center group">
                      <Users className="w-4 h-4 mr-3 group-hover:scale-110 transition-transform" />
                      <span>About Us</span>
                    </Link>
                  </li>
                  <li>
                    <Link to="/leadership" className="text-zion-slate-light hover:text-zion-cyan transition-colors flex items-center group">
                      <Star className="w-4 h-4 mr-3 group-hover:scale-110 transition-transform" />
                      <span>Leadership</span>
                    </Link>
                  </li>
                  <li>
                    <Link to="/careers" className="text-zion-slate-light hover:text-zion-cyan transition-colors flex items-center group">
                      <Rocket className="w-4 h-4 mr-3 group-hover:scale-110 transition-transform" />
                      <span>Careers</span>
                    </Link>
                  </li>
                  <li>
                    <Link to="/news" className="text-zion-slate-light hover:text-zion-cyan transition-colors flex items-center group">
                      <FileText className="w-4 h-4 mr-3 group-hover:scale-110 transition-transform" />
                      <span>News</span>
                    </Link>
                  </li>
                  <li>
                    <Link to="/events" className="text-zion-slate-light hover:text-zion-cyan transition-colors flex items-center group">
                      <Calendar className="w-4 h-4 mr-3 group-hover:scale-110 transition-transform" />
                      <span>Events</span>
                    </Link>
                  </li>
                  <li>
                    <Link to="/partners" className="text-zion-slate-light hover:text-zion-cyan transition-colors flex items-center group">
                      <Handshake className="w-4 h-4 mr-3 group-hover:scale-110 transition-transform" />
                      <span>Partners</span>
                    </Link>
                  </li>
                  <li>
                    <Link to="/contact" className="text-zion-slate-light hover:text-zion-cyan transition-colors flex items-center group">
                      <MessageCircle className="w-4 h-4 mr-3 group-hover:scale-110 transition-transform" />
                      <span>Contact</span>
                    </Link>
                  </li>
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
                  <div>
                    <h4 className="text-zion-cyan font-semibold mb-4">Documentation</h4>
                    <ul className="space-y-3 text-sm">
                      <li>
                        <Link to="/docs" className="text-zion-slate-light hover:text-zion-cyan transition-colors flex items-center group">
                          <Code className="w-4 h-4 mr-3 group-hover:scale-110 transition-transform" />
                          <span>API Docs</span>
                        </Link>
                      </li>
                      <li>
                        <Link to="/case-studies" className="text-zion-slate-light hover:text-zion-cyan transition-colors flex items-center group">
                          <BarChart className="w-4 h-4 mr-3 group-hover:scale-110 transition-transform" />
                          <span>Case Studies</span>
                        </Link>
                      </li>
                      <li>
                        <Link to="/white-papers" className="text-zion-slate-light hover:text-zion-cyan transition-colors flex items-center group">
                          <FileText className="w-4 h-4 mr-3 group-hover:scale-110 transition-transform" />
                          <span>White Papers</span>
                        </Link>
                      </li>
                      <li>
                        <Link to="/help" className="text-zion-slate-light hover:text-zion-cyan transition-colors flex items-center group">
                          <HelpCircle className="w-4 h-4 mr-3 group-hover:scale-110 transition-transform" />
                          <span>Help Center</span>
                        </Link>
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="text-zion-cyan font-semibold mb-4">Support & Tools</h4>
                    <ul className="space-y-3 text-sm">
                      <li>
                        <Link to="/support" className="text-zion-slate-light hover:text-zion-cyan transition-colors flex items-center group">
                          <Headphones className="w-4 h-4 mr-3 group-hover:scale-110 transition-transform" />
                          <span>Support Center</span>
                        </Link>
                      </li>
                      <li>
                        <Link to="/sitemap" className="text-zion-slate-light hover:text-zion-cyan transition-colors flex items-center group">
                          <Layers className="w-4 h-4 mr-3 group-hover:scale-110 transition-transform" />
                          <span>Sitemap</span>
                        </Link>
                      </li>
                      <li>
                        <Link to="/accessibility" className="text-zion-slate-light hover:text-zion-cyan transition-colors flex items-center group">
                          <Users className="w-4 h-4 mr-3 group-hover:scale-110 transition-transform" />
                          <span>Accessibility</span>
                        </Link>
                      </li>
                      <li>
                        <Link to="/security" className="text-zion-slate-light hover:text-zion-cyan transition-colors flex items-center group">
                          <Shield className="w-4 h-4 mr-3 group-hover:scale-110 transition-transform" />
                          <span>Security</span>
                        </Link>
                      </li>
                    </ul>
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
