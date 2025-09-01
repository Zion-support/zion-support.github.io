import React, { useState } from 'react';
import { Link } from 'react-router-dom';
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
  Eye,
  Lock,
  Cloud,
  Server,
  Rocket,
  Globe,
  Target,
  Lightbulb
} from 'lucide-react';

export function MainNavigation({ className }: { className?: string }) {
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [isSolutionsOpen, setIsSolutionsOpen] = useState(false);
  const [isCompanyOpen, setIsCompanyOpen] = useState(false);

  return (
    <nav className={`flex items-center space-x-8 ${className}`}>
      {/* Services Dropdown */}
      <div className="relative group">
        <button
          onMouseEnter={() => setIsServicesOpen(true)}
          onMouseLeave={() => setIsServicesOpen(false)}
          className="flex items-center space-x-1 text-sm font-medium text-zion-slate-light hover:text-white transition-colors"
        >
          <Zap className="w-4 h-4" />
          <span>Services</span>
          <ChevronDown className="w-3 h-3" />
        </button>
        {isServicesOpen && (
          <div
            onMouseEnter={() => setIsServicesOpen(true)}
            onMouseLeave={() => setIsServicesOpen(false)}
            className="absolute top-full left-0 mt-2 w-[800px] bg-zion-slate-dark border border-zion-purple/30 rounded-lg shadow-2xl shadow-zion-purple/20 z-50"
          >
            <div className="p-6">
              <div className="grid grid-cols-4 gap-6">
                {/* AI & Machine Learning */}
                <div>
                  <h4 className="text-zion-cyan font-semibold mb-3 flex items-center">
                    <Brain className="w-4 h-4 mr-2" />
                    AI & Machine Learning
                  </h4>
                  <ul className="space-y-2 text-sm">
                    <li>
                      <Link to="/services/ai-autonomous-business-intelligence" className="text-zion-slate-light hover:text-zion-cyan transition-colors">
                        AI Business Intelligence
                      </Link>
                    </li>
                    <li>
                      <Link to="/services/ai-cybersecurity-threat-intelligence" className="text-zion-slate-light hover:text-zion-cyan transition-colors">
                        AI Cybersecurity
                      </Link>
                    </li>
                    <li>
                      <Link to="/services/ai-customer-support-automation" className="text-zion-slate-light hover:text-zion-cyan transition-colors">
                        AI Customer Support
                      </Link>
                    </li>
                    <li>
                      <Link to="/services/ai-project-management-platform" className="text-zion-slate-light hover:text-zion-cyan transition-colors">
                        AI Project Management
                      </Link>
                    </li>
                  </ul>
                </div>

                {/* Quantum Computing */}
                <div>
                  <h4 className="text-zion-cyan font-semibold mb-3 flex items-center">
                    <Atom className="w-4 h-4 mr-2" />
                    Quantum Computing
                  </h4>
                  <ul className="space-y-2 text-sm">
                    <li>
                      <Link to="/services/quantum-ai-hybrid-platform" className="text-zion-slate-light hover:text-zion-cyan transition-colors">
                        Quantum AI Hybrid
                      </Link>
                    </li>
                    <li>
                      <Link to="/services/quantum-computing-as-a-service" className="text-zion-slate-light hover:text-zion-cyan transition-colors">
                        Quantum as a Service
                      </Link>
                    </li>
                    <li>
                      <Link to="/services/quantum-machine-learning" className="text-zion-slate-light hover:text-zion-cyan transition-colors">
                        Quantum ML
                      </Link>
                    </li>
                    <li>
                      <Link to="/services/quantum-ai-trading-platform" className="text-zion-slate-light hover:text-zion-cyan transition-colors">
                        Quantum Trading
                      </Link>
                    </li>
                  </ul>
                </div>

                {/* IT Infrastructure */}
                <div>
                  <h4 className="text-zion-cyan font-semibold mb-3 flex items-center">
                    <Server className="w-4 h-4 mr-2" />
                    IT Infrastructure
                  </h4>
                  <ul className="space-y-2 text-sm">
                    <li>
                      <Link to="/services/cloud-devops" className="text-zion-slate-light hover:text-zion-cyan transition-colors">
                        Cloud & DevOps
                      </Link>
                    </li>
                    <li>
                      <Link to="/services/it-infrastructure-management" className="text-zion-slate-light hover:text-zion-cyan transition-colors">
                        Infrastructure Management
                      </Link>
                    </li>
                    <li>
                      <Link to="/services/cybersecurity" className="text-zion-slate-light hover:text-zion-cyan transition-colors">
                        Cybersecurity
                      </Link>
                    </li>
                    <li>
                      <Link to="/services/digital-transformation" className="text-zion-slate-light hover:text-zion-cyan transition-colors">
                        Digital Transformation
                      </Link>
                    </li>
                  </ul>
                </div>

                {/* Micro SAAS Solutions */}
                <div>
                  <h4 className="text-zion-cyan font-semibold mb-3 flex items-center">
                    <Building2 className="w-4 h-4 mr-2" />
                    Micro SAAS
                  </h4>
                  <ul className="space-y-2 text-sm">
                    <li>
                      <Link to="/services/micro-crm" className="text-zion-slate-light hover:text-zion-cyan transition-colors">
                        Micro CRM
                      </Link>
                    </li>
                    <li>
                      <Link to="/services/micro-saas-solutions" className="text-zion-slate-light hover:text-zion-cyan transition-colors">
                        SAAS Platform
                      </Link>
                    </li>
                    <li>
                      <Link to="/services/helpdesk" className="text-zion-slate-light hover:text-zion-cyan transition-colors">
                        Helpdesk Platform
                      </Link>
                    </li>
                    <li>
                      <Link to="/services/website-analytics" className="text-zion-slate-light hover:text-zion-cyan transition-colors">
                        Website Analytics
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="mt-6 pt-4 border-t border-zion-purple/20">
                <Link
                  to="/services"
                  className="text-zion-cyan hover:text-zion-cyan-light transition-colors text-sm font-medium flex items-center justify-center"
                >
                  View All Services
                  <TrendingUp className="w-4 h-4 ml-2" />
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
          className="flex items-center space-x-1 text-sm font-medium text-zion-slate-light hover:text-white transition-colors"
        >
          <Target className="w-4 h-4" />
          <span>Solutions</span>
          <ChevronDown className="w-3 h-3" />
        </button>
        {isSolutionsOpen && (
          <div
            onMouseEnter={() => setIsSolutionsOpen(true)}
            onMouseLeave={() => setIsSolutionsOpen(false)}
            className="absolute top-full left-0 mt-2 w-80 bg-zion-slate-dark border border-zion-purple/30 rounded-lg shadow-2xl shadow-zion-purple/20 z-50"
          >
            <div className="p-4">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <h4 className="text-zion-cyan font-semibold mb-3 flex items-center">
                    <Users className="w-4 h-4 mr-2" />
                    Talent
                  </h4>
                  <ul className="space-y-2 text-sm">
                    <li>
                      <Link to="/talent" className="text-zion-slate-light hover:text-zion-cyan transition-colors">
                        Find Experts
                      </Link>
                    </li>
                    <li>
                      <Link to="/zion-hire-ai" className="text-zion-slate-light hover:text-zion-cyan transition-colors">
                        AI Hiring
                      </Link>
                    </li>
                    <li>
                      <Link to="/talent" className="text-zion-slate-light hover:text-zion-cyan transition-colors">
                        Skill Matching
                      </Link>
                    </li>
                    <li>
                      <Link to="/talent" className="text-zion-slate-light hover:text-zion-cyan transition-colors">
                        Project Teams
                      </Link>
                    </li>
                  </ul>
                </div>
                <div>
                  <h4 className="text-zion-cyan font-semibold mb-3 flex items-center">
                    <HardDrive className="w-4 h-4 mr-2" />
                    Resources
                  </h4>
                  <ul className="space-y-2 text-sm">
                    <li>
                      <Link to="/enterprise" className="text-zion-slate-light hover:text-zion-cyan transition-colors">
                        Enterprise Solutions
                      </Link>
                    </li>
                    <li>
                      <Link to="/solutions" className="text-zion-slate-light hover:text-zion-cyan transition-colors">
                        Industry Solutions
                      </Link>
                    </li>
                    <li>
                      <Link to="/case-studies" className="text-zion-slate-light hover:text-zion-cyan transition-colors">
                        Case Studies
                      </Link>
                    </li>
                    <li>
                      <Link to="/marketplace" className="text-zion-slate-light hover:text-zion-cyan transition-colors">
                        Marketplace
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="mt-4 pt-4 border-t border-zion-purple/20">
                <Link
                  to="/request-quote"
                  className="text-zion-cyan hover:text-zion-cyan-light transition-colors text-sm font-medium flex items-center justify-center"
                >
                  Get Custom Quote
                  <TrendingUp className="w-4 h-4 ml-2" />
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
          className="flex items-center space-x-1 text-sm font-medium text-zion-slate-light hover:text-white transition-colors"
        >
          <Building2 className="w-4 h-4" />
          <span>Company</span>
          <ChevronDown className="w-3 h-3" />
        </button>
        {isCompanyOpen && (
          <div
            onMouseEnter={() => setIsCompanyOpen(true)}
            onMouseLeave={() => setIsCompanyOpen(false)}
            className="absolute top-full left-0 mt-2 w-64 bg-zion-slate-dark border border-zion-purple/30 rounded-lg shadow-2xl shadow-zion-purple/20 z-50"
          >
            <div className="p-4">
              <ul className="space-y-2 text-sm">
                <li>
                  <Link to="/about" className="text-zion-slate-light hover:text-zion-cyan transition-colors">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link to="/team" className="text-zion-slate-light hover:text-zion-cyan transition-colors">
                    Our Team
                  </Link>
                </li>
                <li>
                  <Link to="/careers" className="text-zion-slate-light hover:text-zion-cyan transition-colors">
                    Careers
                  </Link>
                </li>
                <li>
                  <Link to="/news" className="text-zion-slate-light hover:text-zion-cyan transition-colors">
                    News
                  </Link>
                </li>
                <li>
                  <Link to="/events" className="text-zion-slate-light hover:text-zion-cyan transition-colors">
                    Events
                  </Link>
                </li>
                <li>
                  <Link to="/partners" className="text-zion-slate-light hover:text-zion-cyan transition-colors">
                    Partners
                  </Link>
                </li>
                <li>
                  <Link to="/contact" className="text-zion-slate-light hover:text-zion-cyan transition-colors">
                    Contact
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        )}
      </div>

      {/* Direct Links */}
      <Link to="/pricing" className="text-sm font-medium text-zion-slate-light hover:text-white transition-colors">
        Pricing
      </Link>
      <Link to="/blog" className="text-sm font-medium text-zion-slate-light hover:text-white transition-colors">
        Blog
      </Link>
      <Link to="/help" className="text-sm font-medium text-zion-slate-light hover:text-white transition-colors">
        Support
      </Link>
    </nav>
  );
} 