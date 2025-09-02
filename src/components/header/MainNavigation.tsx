import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ChevronDown, Zap, Brain, Shield, Users, HardDrive, TrendingUp, Building2, FileText, HelpCircle, BarChart3 } from 'lucide-react';

export function MainNavigation({ className = '' }) {
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [isSolutionsOpen, setIsSolutionsOpen] = useState(false);
  const [isCompanyOpen, setIsCompanyOpen] = useState(false);

  return (
    <nav className={`flex items-center space-x-8 ${className}`}>
      {/* Home */}
      <Link
        to="/"
        className="text-sm font-medium text-zion-slate-light hover:text-zion-cyan transition-colors"
      >
        Home
      </Link>

      {/* Services Dropdown */}
      <div className="relative group">
        <button
          onMouseEnter={() => setIsServicesOpen(true)}
          onMouseLeave={() => setIsServicesOpen(false)}
          className="flex items-center space-x-1 text-sm font-medium text-zion-slate-light hover:text-zion-cyan transition-colors"
        >
          <Zap className="w-4 h-4" />
          <span>Services</span>
          <ChevronDown className="w-3 h-3" />
        </button>
        
        {isServicesOpen && (
          <div
            onMouseEnter={() => setIsServicesOpen(true)}
            onMouseLeave={() => setIsServicesOpen(false)}
            className="absolute top-full left-0 mt-2 w-96 bg-zion-blue-dark border border-zion-purple/30 rounded-lg shadow-2xl shadow-zion-purple/20 z-50"
          >
            <div className="p-4">
              <div className="grid grid-cols-3 gap-4">
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
                      <Link to="/services#saas" className="text-zion-slate-light hover:text-zion-cyan transition-colors">
                        AI Email Responder
                      </Link>
                    </li>
                    <li>
                      <Link to="/services#saas" className="text-zion-slate-light hover:text-zion-cyan transition-colors">
                        E-Commerce Returns
                      </Link>
                    </li>
                    <li>
                      <Link to="/services#saas" className="text-zion-slate-light hover:text-zion-cyan transition-colors">
                        Mobile Survey Platform
                      </Link>
                    </li>
                    <li>
                      <Link to="/services#saas" className="text-zion-slate-light hover:text-zion-cyan transition-colors">
                        Workflow Automation
                      </Link>
                    </li>
                    <li>
                      <Link to="/services#saas" className="text-zion-slate-light hover:text-zion-cyan transition-colors">
                        Project Management Suite
                      </Link>
                    </li>
                    <li>
                      <Link to="/services#saas" className="text-zion-slate-light hover:text-zion-cyan transition-colors">
                        Customer Feedback Intelligence
                      </Link>
                    </li>
                    <li>
                      <Link to="/services#saas" className="text-zion-slate-light hover:text-zion-cyan transition-colors">
                        Compliance Copilot
                      </Link>
                    </li>
                  </ul>
                </div>
                
                <div>
                  <h4 className="text-zion-cyan font-semibold mb-3 flex items-center">
                    <Shield className="w-4 h-4 mr-2" />
                    IT Services
                  </h4>
                  <ul className="space-y-2 text-sm">
                    <li>
                      <Link to="/services#cloud" className="text-zion-slate-light hover:text-zion-cyan transition-colors">
                        Cloud Platforms
                      </Link>
                    </li>
                    <li>
                      <Link to="/services#cybersecurity" className="text-zion-slate-light hover:text-zion-cyan transition-colors">
                        Cybersecurity
                      </Link>
                    </li>
                    <li>
                      <Link to="/services" className="text-zion-slate-light hover:text-zion-cyan transition-colors">
                        FinOps & Cost Optimization
                      </Link>
                    </li>
                    <li>
                      <Link to="/services" className="text-zion-slate-light hover:text-zion-cyan transition-colors">
                        SOC-as-a-Service
                      </Link>
                    </li>
                    <li>
                      <Link to="/services" className="text-zion-slate-light hover:text-zion-cyan transition-colors">
                        DevOps Automation
                      </Link>
                    </li>
                    <li>
                      <Link to="/services" className="text-zion-slate-light hover:text-zion-cyan transition-colors">
                        Digital Transformation
                      </Link>
                    </li>
                    <li>
                      <Link to="/services" className="text-zion-slate-light hover:text-zion-cyan transition-colors">
                        Infrastructure Monitoring
                      </Link>
                    </li>
                    <li>
                      <Link to="/services" className="text-zion-slate-light hover:text-zion-cyan transition-colors">
                        Fractional CTO Advisory
                      </Link>
                    </li>
                  </ul>
                </div>
                
                <div>
                  <h4 className="text-zion-cyan font-semibold mb-3 flex items-center">
                    <Brain className="w-4 h-4 mr-2" />
                    AI Solutions
                  </h4>
                  <ul className="space-y-2 text-sm">
                    <li>
                      <Link to="/services#ai" className="text-zion-slate-light hover:text-zion-cyan transition-colors">
                        AI Autonomous Systems
                      </Link>
                    </li>
                    <li>
                      <Link to="/services" className="text-zion-slate-light hover:text-zion-cyan transition-colors">
                        Revenue AI Agents
                      </Link>
                    </li>
                    <li>
                      <Link to="/services" className="text-zion-slate-light hover:text-zion-cyan transition-colors">
                        AI Business Intelligence
                      </Link>
                    </li>
                    <li>
                      <Link to="/services" className="text-zion-slate-light hover:text-zion-cyan transition-colors">
                        Document Processing
                      </Link>
                    </li>
                    <li>
                      <Link to="/services" className="text-zion-slate-light hover:text-zion-cyan transition-colors">
                        AI Test Automation
                      </Link>
                    </li>
                    <li>
                      <Link to="/services" className="text-zion-slate-light hover:text-zion-cyan transition-colors">
                        AI Content Creation
                      </Link>
                    </li>
                    <li>
                      <Link to="/services" className="text-zion-slate-light hover:text-zion-cyan transition-colors">
                        Healthcare Scheduler
                      </Link>
                    </li>
                    <li>
                      <Link to="/services" className="text-zion-slate-light hover:text-zion-cyan transition-colors">
                        AI SEO Optimizer
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
              
              <div className="mt-4 pt-4 border-t border-zion-purple/20">
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
          className="flex items-center space-x-1 text-sm font-medium text-zion-slate-light hover:text-zion-cyan transition-colors"
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
          className="flex items-center space-x-1 text-sm font-medium text-zion-slate-light hover:text-zion-cyan transition-colors"
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
        className="text-sm font-medium text-zion-slate-light hover:text-zion-cyan transition-colors"
      >
        Resources
      </Link>

      {/* Blog */}
      <Link
        to="/blog"
        className="text-sm font-medium text-zion-slate-light hover:text-zion-cyan transition-colors"
      >
        Blog
      </Link>

      {/* Pricing */}
      <Link
        to="/pricing"
        className="text-sm font-medium text-zion-slate-light hover:text-zion-cyan transition-colors"
      >
        Pricing
      </Link>
    </nav>
  );
}