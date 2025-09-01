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
  Cloud,
  Rocket,
  Heart,
  Globe,
  Cpu,
  Lock,
  Star,
  Workflow,
  MessageCircle,
  Target,
  ShoppingCart,
  Settings,
  Atom,
  Database,
  Smartphone,
  Truck,
  Factory,
  Home,
  Leaf,
  Satellite
} from 'lucide-react';

export function MainNavigation({ className = '' }: { className?: string }) {
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [isSolutionsOpen, setIsSolutionsOpen] = useState(false);
  const [isCompanyOpen, setIsCompanyOpen] = useState(false);

  return (
    <nav className={`flex items-center space-x-8 ${className}`}>
      {/* Home */}
      <Link 
        to="/" 
        className="text-sm font-medium text-zion-slate-light hover:text-white transition-colors"
      >
        Home
      </Link>

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
            className="absolute top-full left-0 mt-2 w-[800px] bg-zion-blue-dark border border-zion-purple/30 rounded-lg shadow-2xl shadow-zion-purple/20 z-50"
          >
            <div className="p-6">
              <div className="grid grid-cols-4 gap-6">
                {/* Micro SAAS */}
                <div>
                  <h4 className="text-zion-cyan font-semibold mb-3 flex items-center">
                    <Zap className="w-4 h-4 mr-2" />
                    Micro SAAS
                  </h4>
                  <ul className="space-y-2 text-sm">
                                         <li>
                       <Link to="/services" className="text-zion-slate-light hover:text-zion-cyan transition-colors">
                         All Services
                       </Link>
                     </li>
                     <li>
                       <Link to="/enhanced-services-showcase-2025" className="text-zion-slate-light hover:text-zion-cyan transition-colors">
                         Enhanced Services 2025
                       </Link>
                     </li>
                    <li>
                      <Link to="/services/ai-sales-copilot" className="text-zion-slate-light hover:text-zion-cyan transition-colors">
                        AI Sales Copilot
                      </Link>
                    </li>
                    <li>
                      <Link to="/services/cloud-finops-optimizer" className="text-zion-slate-light hover:text-zion-cyan transition-colors">
                        Cloud FinOps Optimizer
                      </Link>
                    </li>
                    <li>
                      <Link to="/services/ai-compliance-assistant" className="text-zion-slate-light hover:text-zion-cyan transition-colors">
                        AI Compliance Assistant
                      </Link>
                    </li>
                    <li>
                      <Link to="/services/ai-business-intelligence" className="text-zion-slate-light hover:text-zion-cyan transition-colors">
                        AI Business Intelligence
                      </Link>
                    </li>
                    <li>
                      <Link to="/services/ai-customer-support-automation" className="text-zion-slate-light hover:text-zion-cyan transition-colors">
                        AI Customer Support
                      </Link>
                    </li>
                  </ul>
                </div>

                {/* IT Services */}
                <div>
                  <h4 className="text-zion-cyan font-semibold mb-3 flex items-center">
                    <Shield className="w-4 h-4 mr-2" />
                    IT Services
                  </h4>
                  <ul className="space-y-2 text-sm">
                    <li>
                      <Link to="/services/quantum-neural-network" className="text-zion-slate-light hover:text-zion-cyan transition-colors">
                        Quantum Neural Network
                      </Link>
                    </li>
                    <li>
                      <Link to="/services/autonomous-business-operations" className="text-zion-slate-light hover:text-zion-cyan transition-colors">
                        Autonomous Operations
                      </Link>
                    </li>
                    <li>
                      <Link to="/services/ai-powered-it-asset-management" className="text-zion-slate-light hover:text-zion-cyan transition-colors">
                        AI Asset Management
                      </Link>
                    </li>
                    <li>
                      <Link to="/services/cloud-devops" className="text-zion-slate-light hover:text-zion-cyan transition-colors">
                        Cloud & DevOps
                      </Link>
                    </li>
                    <li>
                      <Link to="/services/cybersecurity-suite" className="text-zion-slate-light hover:text-zion-cyan transition-colors">
                        Cybersecurity Suite
                      </Link>
                    </li>
                  </ul>
                </div>

                {/* AI Solutions */}
                <div>
                  <h4 className="text-zion-cyan font-semibold mb-3 flex items-center">
                    <Brain className="w-4 h-4 mr-2" />
                    AI Solutions
                  </h4>
                  <ul className="space-y-2 text-sm">
                    <li>
                      <Link to="/ai-services" className="text-zion-slate-light hover:text-zion-cyan transition-colors">
                        AI Services
                      </Link>
                    </li>
                    <li>
                      <Link to="/ai-solutions" className="text-zion-slate-light hover:text-zion-cyan transition-colors">
                        AI Solutions
                      </Link>
                    </li>
                    <li>
                      <Link to="/services/ai-cybersecurity-platform" className="text-zion-slate-light hover:text-zion-cyan transition-colors">
                        AI Cybersecurity
                      </Link>
                    </li>
                    <li>
                      <Link to="/services/ai-healthcare-platform" className="text-zion-slate-light hover:text-zion-cyan transition-colors">
                        AI Healthcare
                      </Link>
                    </li>
                    <li>
                      <Link to="/services/ai-supply-chain-optimization" className="text-zion-slate-light hover:text-zion-cyan transition-colors">
                        AI Supply Chain
                      </Link>
                    </li>
                  </ul>
                </div>

                {/* Emerging Tech */}
                <div>
                  <h4 className="text-zion-cyan font-semibold mb-3 flex items-center">
                    <Rocket className="w-4 h-4 mr-2" />
                    Emerging Tech
                  </h4>
                  <ul className="space-y-2 text-sm">
                    <li>
                      <Link to="/services/quantum-computing" className="text-zion-slate-light hover:text-zion-cyan transition-colors">
                        Quantum Computing
                      </Link>
                    </li>
                    <li>
                      <Link to="/services/blockchain-solutions" className="text-zion-slate-light hover:text-zion-cyan transition-colors">
                        Blockchain Solutions
                      </Link>
                    </li>
                    <li>
                      <Link to="/services/space-technology" className="text-zion-slate-light hover:text-zion-cyan transition-colors">
                        Space Technology
                      </Link>
                    </li>
                    <li>
                      <Link to="/services/sustainability-tech" className="text-zion-slate-light hover:text-zion-cyan transition-colors">
                        Sustainability Tech
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
          <Brain className="w-4 h-4" />
          <span>Solutions</span>
          <ChevronDown className="w-3 h-3" />
        </button>
        
        {isSolutionsOpen && (
          <div 
            onMouseEnter={() => setIsSolutionsOpen(true)}
            onMouseLeave={() => setIsSolutionsOpen(false)}
            className="absolute top-full left-0 mt-2 w-80 bg-zion-blue-dark border border-zion-purple/30 rounded-lg shadow-2xl shadow-zion-purple/20 z-50"
          >
            <div className="p-4">
              <div className="grid grid-cols-2 gap-4">
                {/* Talent */}
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

                {/* Resources */}
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
            className="absolute top-full left-0 mt-2 w-64 bg-zion-blue-dark border border-zion-purple/30 rounded-lg shadow-2xl shadow-zion-purple/20 z-50"
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

      {/* Resources */}
      <Link 
        to="/resources" 
        className="text-sm font-medium text-zion-slate-light hover:text-white transition-colors"
      >
        Resources
      </Link>

      {/* Pricing */}
      <Link 
        to="/pricing" 
        className="text-sm font-medium text-zion-slate-light hover:text-white transition-colors"
      >
        Pricing
      </Link>
    </nav>
  );
} 