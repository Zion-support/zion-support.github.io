import React, { useState } from 'react';,"});,"})
import { Link } from 'react-router-dom';,"});,"})
import { ChevronDown, Zap, Brain, Shield, Users, HardDrive, TrendingUp, Building2, FileText, HelpCircle, BarChart3 } from 'lucide-react';,"});,"})
;,"});,"})
export function MainNavigation({ className = '' }) {;,"});,"})
  const [isServicesOpen, setIsServicesOpen] = useState(false);,"});,"})
  const [isSolutionsOpen, setIsSolutionsOpen] = useState(false);,"});,"})
  const [isCompanyOpen, setIsCompanyOpen] = useState(false);,"});,"})
;,"});,"})
  return (;,"});,"})
    <nav className={`flex items-center space-x-8 ${className}`}>;,"});,"})
      {/* Home */}"});,"})
      <Link;,"});,"})
        to="/";,"});,"})
        className="text-sm font-medium text-zion-slate-light hover:text-zion-cyan transition-colors";,"});,"})
      >;,"});,"})
        Home;,"});,"})
      </Link>;,"});,"})
      {/* Services Dropdown */}"});,"})
      <div className="relative group">;,"});,"})
        <button;,"});,"})
          onMouseEnter={() => setIsServicesOpen(true)}"});,"})
          onMouseLeave={() => setIsServicesOpen(false)}"});,"})
          className="flex items-center space-x-1 text-sm font-medium text-zion-slate-light hover:text-zion-cyan transition-colors";,"});,"})
        >;,"});,"})
          <Zap className="w-4 h-4" />;,"});,"})
          <span>Services</span>;,"});,"})
          <ChevronDown className="w-3 h-3" />;,"});,"})
        </button>;,"});,"})
        {isServicesOpen && (;,"});,"})
          <div;,"});,"})
            onMouseEnter={() => setIsServicesOpen(true)}"});,"})
            onMouseLeave={() => setIsServicesOpen(false)}"});,"})
            className="absolute top-full left-0 mt-2 w-96 bg-zion-blue-dark border border-zion-purple/30 rounded-lg shadow-2xl shadow-zion-purple/20 z-50";,"});,"})
          >;,"});,"})
            <div className="p-4">;,"});,"})
              <div className="grid grid-cols-3 gap-4">;,"});,"})
                <div>;,"});,"})
                  <h4 className="text-zion-cyan font-semibold mb-3 flex items-center">;,"});,"})
                    <Zap className="w-4 h-4 mr-2" />;,"});,"})
                    Micro SAAS;,"});,"})
                  </h4>;,"});,"})
                  <ul className="space-y-2 text-sm">;,"});,"})
                    <li>;,"});,"})
                      <Link to="/services" className="text-zion-slate-light hover:text-zion-cyan transition-colors">;,"});,"})
                        All Services;,"});,"})
                      </Link>;,"});,"})
                    </li>;,"});,"})
                    <li>;,"});,"})
                      <Link to="/services/ai-sales-copilot" className="text-zion-slate-light hover:text-zion-cyan transition-colors">;,"});,"})
                        AI Sales Copilot;,"});,"})
                      </Link>;,"});,"})
                    </li>;,"});,"})
                    <li>;,"});,"})
                      <Link to="/services/cloud-finops-optimizer" className="text-zion-slate-light hover:text-zion-cyan transition-colors">;,"});,"})
                        Cloud FinOps Optimizer;,"});,"})
                      </Link>;,"});,"})
                    </li>;,"});,"})
                    <li>;,"});,"})
                      <Link to="/services/ai-compliance-assistant" className="text-zion-slate-light hover:text-zion-cyan transition-colors">;,"});,"})
                        AI Compliance Assistant;,"});,"})
                      </Link>;,"});,"})
                    </li>;,"});,"})
                    <li>;,"});,"})
                      <Link to="/services/ai-business-intelligence" className="text-zion-slate-light hover:text-zion-cyan transition-colors">;,"});,"})
                        AI Business Intelligence;,"});,"})
                      </Link>;,"});,"})
                    </li>;,"});,"})
                    <li>;,"});,"})
                      <Link to="/services/ai-customer-support-automation" className="text-zion-slate-light hover:text-zion-cyan transition-colors">;,"});,"})
                        AI Customer Support;,"});,"})
                      </Link>;,"});,"})
                    </li>;,"});,"})
                    <li>;,"});,"})
                      <Link to="/services/ai-content-generator" className="text-zion-slate-light hover:text-zion-cyan transition-colors">;,"});,"})
                        AI Content Generator;,"});,"})
                      </Link>;,"});,"})
                    </li>;,"});,"})
                    <li>;,"});,"})
                      <Link to="/services/smart-inventory-management" className="text-zion-slate-light hover:text-zion-cyan transition-colors">;,"});,"})
                        Smart Inventory Management;,"});,"})
                      </Link>;,"});,"})
                    </li>;,"});,"})
                  </ul>;,"});,"})
                </div>;,"});,"})
                <div>;,"});,"})
                  <h4 className="text-zion-cyan font-semibold mb-3 flex items-center">;,"});,"})
                    <Shield className="w-4 h-4 mr-2" />;,"});,"})
                    IT Services;,"});,"})
                  </h4>;,"});,"})
                  <ul className="space-y-2 text-sm">;,"});,"})
                    <li>;,"});,"})
                      <Link to="/services/quantum-computing" className="text-zion-slate-light hover:text-zion-cyan transition-colors">;,"});,"})
                        Quantum Computing;,"});,"})
                      </Link>;,"});,"})
                    </li>;,"});,"})
                    <li>;,"});,"})
                      <Link to="/services/cloud-devops" className="text-zion-slate-light hover:text-zion-cyan transition-colors">;,"});,"})
                        Cloud & DevOps;,"});,"})
                      </Link>;,"});,"})
                    </li>;,"});,"})
                    <li>;,"});,"})
                      <Link to="/services/cybersecurity" className="text-zion-slate-light hover:text-zion-cyan transition-colors">;,"});,"})
                        Cybersecurity;,"});,"})
                      </Link>;,"});,"})
                    </li>;,"});,"})
                    <li>;,"});,"})
                      <Link to="/services/cloud-migration-services" className="text-zion-slate-light hover:text-zion-cyan transition-colors">;,"});,"})
                        Cloud Migration Services;,"});,"})
                      </Link>;,"});,"})
                    </li>;,"});,"})
                    <li>;,"});,"})
                      <Link to="/services/digital-transformation" className="text-zion-slate-light hover:text-zion-cyan transition-colors">;,"});,"})
                        Digital Transformation;,"});,"})
                      </Link>;,"});,"})
                    </li>;,"});,"})
                    <li>;,"});,"})
                      <Link to="/services/healthcare-tech" className="text-zion-slate-light hover:text-zion-cyan transition-colors">;,"});,"})
                        Healthcare Tech;,"});,"})
                      </Link>;,"});,"})
                    </li>;,"});,"})
                    <li>;,"});,"})
                      <Link to="/services/iot-edge-computing" className="text-zion-slate-light hover:text-zion-cyan transition-colors">;,"});,"})
                        IoT & Edge Computing;,"});,"})
                      </Link>;,"});,"})
                    </li>;,"});,"})
                  </ul>;,"});,"})
                </div>;,"});,"})
                <div>;,"});,"})
                  <h4 className="text-zion-cyan font-semibold mb-3 flex items-center">;,"});,"})
                    <Brain className="w-4 h-4 mr-2" />;,"});,"})
                    AI Solutions;,"});,"})
                  </h4>;,"});,"})
                  <ul className="space-y-2 text-sm">;,"});,"})
                    <li>;,"});,"})
                      <Link to="/services/ai-services" className="text-zion-slate-light hover:text-zion-cyan transition-colors">;,"});,"})
                        AI Services;,"});,"})
                      </Link>;,"});,"})
                    </li>;,"});,"})
                    <li>;,"});,"})
                      <Link to="/services/ai-solutions" className="text-zion-slate-light hover:text-zion-cyan transition-colors">;,"});,"})
                        AI Solutions;,"});,"})
                      </Link>;,"});,"})
                    </li>;,"});,"})
                    <li>;,"});,"})
                      <Link to="/services/ai-cybersecurity" className="text-zion-slate-light hover:text-zion-cyan transition-colors">;,"});,"})
                        AI Cybersecurity;,"});,"})
                      </Link>;,"});,"})
                    </li>;,"});,"})
                    <li>;,"});,"})
                      <Link to="/services/ai-healthcare-platform" className="text-zion-slate-light hover:text-zion-cyan transition-colors">;,"});,"})
                        AI Healthcare;,"});,"})
                      </Link>;,"});,"})
                    </li>;,"});,"})
                    <li>;,"});,"})
                      <Link to="/services/ai-supply-chain-optimization" className="text-zion-slate-light hover:text-zion-cyan transition-colors">;,"});,"})
                        AI Supply Chain;,"});,"})
                      </Link>;,"});,"})
                    </li>;,"});,"})
                    <li>;,"});,"})
                      <Link to="/services/ai-quantum-hybrid-platform" className="text-zion-slate-light hover:text-zion-cyan transition-colors">;,"});,"})
                        AI Quantum Hybrid;,"});,"})
                      </Link>;,"});,"})
                    </li>;,"});,"})
                  </ul>;,"});,"})
                </div>;,"});,"})
              </div>;,"});,"})
              <div className="mt-4 pt-4 border-t border-zion-purple/20">;,"});,"})
                <Link;,"});,"})
                  to="/services";,"});,"})
                  className="text-zion-cyan hover:text-zion-cyan-light transition-colors text-sm font-medium flex items-center justify-center";,"});,"})
                >;,"});,"})
                  View All Services;,"});,"})
                  <TrendingUp className="w-4 h-4 ml-2" />;,"});,"})
                </Link>;,"});,"})
              </div>;,"});,"})
            </div>;,"});,"})
          </div>;,"});,"})
        )}"});,"})
      </div>;,"});,"})
      {/* Solutions Dropdown */}"});,"})
      <div className="relative group">;,"});,"})
        <button;,"});,"})
          onMouseEnter={() => setIsSolutionsOpen(true)}"});,"})
          onMouseLeave={() => setIsSolutionsOpen(false)}"});,"})
          className="flex items-center space-x-1 text-sm font-medium text-zion-slate-light hover:text-zion-cyan transition-colors";,"});,"})
        >;,"});,"})
          <Brain className="w-4 h-4" />;,"});,"})
          <span>Solutions</span>;,"});,"})
          <ChevronDown className="w-3 h-3" />;,"});,"})
        </button>;,"});,"})
        {isSolutionsOpen && (;,"});,"})
          <div;,"});,"})
            onMouseEnter={() => setIsSolutionsOpen(true)}"});,"})
            onMouseLeave={() => setIsSolutionsOpen(false)}"});,"})
            className="absolute top-full left-0 mt-2 w-80 bg-zion-blue-dark border border-zion-purple/30 rounded-lg shadow-2xl shadow-zion-purple/20 z-50";,"});,"})
          >;,"});,"})
            <div className="p-4">;,"});,"})
              <div className="grid grid-cols-2 gap-4">;,"});,"})
                <div>;,"});,"})
                  <h4 className="text-zion-cyan font-semibold mb-3 flex items-center">;,"});,"})
                    <Users className="w-4 h-4 mr-2" />;,"});,"})
                    Talent;,"});,"})
                  </h4>;,"});,"})
                  <ul className="space-y-2 text-sm">;,"});,"})
                    <li>;,"});,"})
                      <Link to="/talent" className="text-zion-slate-light hover:text-zion-cyan transition-colors">;,"});,"})
                        Find Experts;,"});,"})
                      </Link>;,"});,"})
                    </li>;,"});,"})
                    <li>;,"});,"})
                      <Link to="/zion-hire-ai" className="text-zion-slate-light hover:text-zion-cyan transition-colors">;,"});,"})
                        AI Hiring;,"});,"})
                      </Link>;,"});,"})
                    </li>;,"});,"})
                    <li>;,"});,"})
                      <Link to="/talent" className="text-zion-slate-light hover:text-zion-cyan transition-colors">;,"});,"})
                        Skill Matching;,"});,"})
                      </Link>;,"});,"})
                    </li>;,"});,"})
                    <li>;,"});,"})
                      <Link to="/talent" className="text-zion-slate-light hover:text-zion-cyan transition-colors">;,"});,"})
                        Project Teams;,"});,"})
                      </Link>;,"});,"})
                    </li>;,"});,"})
                  </ul>;,"});,"})
                </div>;,"});,"})
                <div>;,"});,"})
                  <h4 className="text-zion-cyan font-semibold mb-3 flex items-center">;,"});,"})
                    <HardDrive className="w-4 h-4 mr-2" />;,"});,"})
                    Resources;,"});,"})
                  </h4>;,"});,"})
                  <ul className="space-y-2 text-sm">;,"});,"})
                    <li>;,"});,"})
                      <Link to="/enterprise" className="text-zion-slate-light hover:text-zion-cyan transition-colors">;,"});,"})
                        Enterprise Solutions;,"});,"})
                      </Link>;,"});,"})
                    </li>;,"});,"})
                    <li>;,"});,"})
                      <Link to="/solutions" className="text-zion-slate-light hover:text-zion-cyan transition-colors">;,"});,"})
                        Industry Solutions;,"});,"})
                      </Link>;,"});,"})
                    </li>;,"});,"})
                    <li>;,"});,"})
                      <Link to="/case-studies" className="text-zion-slate-light hover:text-zion-cyan transition-colors">;,"});,"})
                        Case Studies;,"});,"})
                      </Link>;,"});,"})
                    </li>;,"});,"})
                    <li>;,"});,"})
                      <Link to="/marketplace" className="text-zion-slate-light hover:text-zion-cyan transition-colors">;,"});,"})
                        Marketplace;,"});,"})
                      </Link>;,"});,"})
                    </li>;,"});,"})
                  </ul>;,"});,"})
                </div>;,"});,"})
              </div>;,"});,"})
              <div className="mt-4 pt-4 border-t border-zion-purple/20">;,"});,"})
                <Link;,"});,"})
                  to="/request-quote";,"});,"})
                  className="text-zion-cyan hover:text-zion-cyan-light transition-colors text-sm font-medium flex items-center justify-center";,"});,"})
                >;,"});,"})
                  Get Custom Quote;,"});,"})
                  <TrendingUp className="w-4 h-4 ml-2" />;,"});,"})
                </Link>;,"});,"})
              </div>;,"});,"})
            </div>;,"});,"})
          </div>;,"});,"})
        )}"});,"})
      </div>;,"});,"})
      {/* Company Dropdown */}"});,"})
      <div className="relative group">;,"});,"})
        <button;,"});,"})
          onMouseEnter={() => setIsCompanyOpen(true)}"});,"})
          onMouseLeave={() => setIsCompanyOpen(false)}"});,"})
          className="flex items-center space-x-1 text-sm font-medium text-zion-slate-light hover:text-zion-cyan transition-colors";,"});,"})
        >;,"});,"})
          <Building2 className="w-4 h-4" />;,"});,"})
          <span>Company</span>;,"});,"})
          <ChevronDown className="w-3 h-3" />;,"});,"})
        </button>;,"});,"})
        {isCompanyOpen && (;,"});,"})
          <div;,"});,"})
            onMouseEnter={() => setIsCompanyOpen(true)}"});,"})
            onMouseLeave={() => setIsCompanyOpen(false)}"});,"})
            className="absolute top-full left-0 mt-2 w-64 bg-zion-blue-dark border border-zion-purple/30 rounded-lg shadow-2xl shadow-zion-purple/20 z-50";,"});,"})
          >;,"});,"})
            <div className="p-4">;,"});,"})
              <ul className="space-y-2 text-sm">;,"});,"})
                <li>;,"});,"})
                  <Link to="/about" className="text-zion-slate-light hover:text-zion-cyan transition-colors">;,"});,"})
                    About Us;,"});,"})
                  </Link>;,"});,"})
                </li>;,"});,"})
                <li>;,"});,"})
                  <Link to="/team" className="text-zion-slate-light hover:text-zion-cyan transition-colors">;,"});,"})
                    Our Team;,"});,"})
                  </Link>;,"});,"})
                </li>;,"});,"})
                <li>;,"});,"})
                  <Link to="/careers" className="text-zion-slate-light hover:text-zion-cyan transition-colors">;,"});,"})
                    Careers;,"});,"})
                  </Link>;,"});,"})
                </li>;,"});,"})
                <li>;,"});,"})
                  <Link to="/news" className="text-zion-slate-light hover:text-zion-cyan transition-colors">;,"});,"})
                    News;,"});,"})
                  </Link>;,"});,"})
                </li>;,"});,"})
                <li>;,"});,"})
                  <Link to="/events" className="text-zion-slate-light hover:text-zion-cyan transition-colors">;,"});,"})
                    Events;,"});,"})
                  </Link>;,"});,"})
                </li>;,"});,"})
                <li>;,"});,"})
                  <Link to="/partners" className="text-zion-slate-light hover:text-zion-cyan transition-colors">;,"});,"})
                    Partners;,"});,"})
                  </Link>;,"});,"})
                </li>;,"});,"})
                <li>;,"});,"})
                  <Link to="/contact" className="text-zion-slate-light hover:text-zion-cyan transition-colors">;,"});,"})
                    Contact;,"});,"})
                  </Link>;,"});,"})
                </li>;,"});,"})
              </ul>;,"});,"})
            </div>;,"});,"})
          </div>;,"});,"})
        )}"});,"})
      </div>;,"});,"})
      {/* Resources */}"});,"})
      <Link;,"});,"})
        to="/resources";,"});,"})
        className="text-sm font-medium text-zion-slate-light hover:text-zion-cyan transition-colors";,"});,"})
      >;,"});,"})
        Resources;,"});,"})
      </Link>;,"});,"})
      {/* Blog */}"});,"})
      <Link;,"});,"})
        to="/blog";,"});,"})
        className="text-sm font-medium text-zion-slate-light hover:text-zion-cyan transition-colors";,"});,"})
      >;,"});,"})
        Blog;,"});,"})
      </Link>;,"});,"})
      {/* Pricing */}"});,"})
      <Link;,"});,"})
        to="/pricing";,"});,"})
        className="text-sm font-medium text-zion-slate-light hover:text-zion-cyan transition-colors";,"});,"})
      >;,"});,"})
        Pricing;,"});,"})
      </Link>;,"});,"})
    </nav>;,"});,"})
  );,"});,"})
}"});,"})


export function MainNavigation({ className = '' }) {



  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [isSolutionsOpen, setIsSolutionsOpen] = useState(false);
  const [isCompanyOpen, setIsCompanyOpen] = useState(false);
  return(;
    <nav className={`flex items-center space-x-8 ${className}`}>;
      {/* Home */}
      <Link;
        to='/';
        className='text-sm font-medium text-zion-slate-light hover:text-zion-cyan transition-colors'>;
        Home;
      </Link>;
      {/* Services Dropdown */}
      <div className='relative group'>;
        <button;
          onMouseEnter={() => setIsServicesOpen(true)}
          onMouseLeave={() => setIsServicesOpen(false)}
          className='flex items-center space-x-1 text-sm font-medium text-zion-slate-light hover:text-zion-cyan transition-colors';
        >;
          <Zap className='w-4 h-4' />;
          <span>Services</span>;
          <ChevronDown className='w-3 h-3' />;
        </button>;
        {isServicesOpen && (;
          <div;
            onMouseEnter={() => setIsServicesOpen(true)}
            onMouseLeave={() => setIsServicesOpen(false)}
            className='absolute top-full left-0 mt-2 w-96 bg-zion-blue-dark border border-zion-purple/30 rounded-lg shadow-2xl shadow-zion-purple/20 z-50';
          >;
            <div className='p-4'>;
              <div className='grid grid-cols-3 gap-4'>;
                <div>;
                  <h4 className='text-zion-cyan font-semibold mb-3 flex items-center'>;
                    <Zap className='w-4 h-4 mr-2' />;
                    Micro SAAS;
                  </h4>;
                  <ul className='space-y-2 text-sm'>;
                    <li>;
                      <Link to='/services' className='text-zion-slate-light hover:text-zion-cyan transition-colors'>;
                        All Services;
                      </Link>;
                    </li>;
                    <li>;
                      <Link to='/services/ai-sales-copilot' className='text-zion-slate-light hover:text-zion-cyan transition-colors'>;
                        AI Sales Copilot;
                      </Link>;
                    </li>;
                    <li>;
                      <Link to='/services/cloud-finops-optimizer' className='text-zion-slate-light hover:text-zion-cyan transition-colors'>;
                        Cloud FinOps Optimizer;
                      </Link>;
                    </li>;
                    <li>;
                      <Link to='/services/ai-compliance-assistant' className='text-zion-slate-light hover:text-zion-cyan transition-colors'>;
                        AI Compliance Assistant;
                      </Link>;
                    </li>;
                    <li>;
                      <Link to='/services/ai-business-intelligence' className='text-zion-slate-light hover:text-zion-cyan transition-colors'>;
                        AI Business Intelligence;
                      </Link>;
                    </li>;
                    <li>;
                      <Link to='/services/ai-customer-support-automation' className='text-zion-slate-light hover:text-zion-cyan transition-colors'>;
                        AI Customer Support;
                      </Link>;
                    </li>;
                    <li>;
                      <Link to='/services/ai-content-generator' className='text-zion-slate-light hover:text-zion-cyan transition-colors'>;
                        AI Content Generator;
                      </Link>;
                    </li>;
                    <li>;
                      <Link to='/services/smart-inventory-management' className='text-zion-slate-light hover:text-zion-cyan transition-colors'>;
                        Smart Inventory Management;
                      </Link>;
                    </li>;
                  </ul>;
                </div>;
                <div>;
                  <h4 className='text-zion-cyan font-semibold mb-3 flex items-center'>;
                    <Shield className='w-4 h-4 mr-2' />;
                    IT Services;
                  </h4>;
                  <ul className='space-y-2 text-sm'>;
                    <li>;
                      <Link to='/services/quantum-computing' className='text-zion-slate-light hover:text-zion-cyan transition-colors'>;
                        Quantum Computing;
                      </Link>;
                    </li>;
                    <li>;
                      <Link to='/services/cloud-devops' className='text-zion-slate-light hover:text-zion-cyan transition-colors'>;
                        Cloud & DevOps;
                      </Link>;
                    </li>;
                    <li>;
                      <Link to='/services/cybersecurity' className='text-zion-slate-light hover:text-zion-cyan transition-colors'>;
                        Cybersecurity;
                      </Link>;
                    </li>;
                    <li>;
                      <Link to='/services/cloud-migration-services' className='text-zion-slate-light hover:text-zion-cyan transition-colors'>;
                        Cloud Migration Services;
                      </Link>;
                    </li>;
                    <li>;
                      <Link to='/services/digital-transformation' className='text-zion-slate-light hover:text-zion-cyan transition-colors'>;
                        Digital Transformation;
                      </Link>;
                    </li>;
                    <li>;
                      <Link to='/services/healthcare-tech' className='text-zion-slate-light hover:text-zion-cyan transition-colors'>;
                        Healthcare Tech;
                      </Link>;
                    </li>;
                    <li>;
                      <Link to='/services/iot-edge-computing' className='text-zion-slate-light hover:text-zion-cyan transition-colors'>;
                        IoT & Edge Computing;
                      </Link>;
                    </li>;
                  </ul>;
                </div>;
                <div>;
                  <h4 className='text-zion-cyan font-semibold mb-3 flex items-center'>;
                    <Brain className='w-4 h-4 mr-2' />;
                    AI Solutions;
                  </h4>;
                  <ul className='space-y-2 text-sm'>;
                    <li>;
                      <Link to='/services/ai-services' className='text-zion-slate-light hover:text-zion-cyan transition-colors'>;
                        AI Services;
                      </Link>;
                    </li>;
                    <li>;
                      <Link to='/services/ai-solutions' className='text-zion-slate-light hover:text-zion-cyan transition-colors'>;
                        AI Solutions;
                      </Link>;
                    </li>;
                    <li>;
                      <Link to='/services/ai-cybersecurity' className='text-zion-slate-light hover:text-zion-cyan transition-colors'>;
                        AI Cybersecurity;
                      </Link>;
                    </li>;
                    <li>;
                      <Link to='/services/ai-healthcare-platform' className='text-zion-slate-light hover:text-zion-cyan transition-colors'>;
                        AI Healthcare;
                      </Link>;
                    </li>;
                    <li>;
                      <Link to='/services/ai-supply-chain-optimization' className='text-zion-slate-light hover:text-zion-cyan transition-colors'>;
                        AI Supply Chain;
                      </Link>;
                    </li>;
                    <li>;
                      <Link to='/services/ai-quantum-hybrid-platform' className='text-zion-slate-light hover:text-zion-cyan transition-colors'>;
                        AI Quantum Hybrid;
                      </Link>;
                    </li>;
                  </ul>;
                </div>;
              </div>;
              <div className='mt-4 pt-4 border-t border-zion-purple/20'>;
                <Link;
                  to='/services';
                  className='text-zion-cyan hover:text-zion-cyan-light transition-colors text-sm font-medium flex items-center justify-center'>;
                  View All Services;
                  <TrendingUp className='w-4 h-4 ml-2' />;
                </Link>;
              </div>;
            </div>;
          </div>;
      </Link>
      {/* Services Dropdown */}
      <div className=&apos;relative group&apos;>&apos';
        <button;
          onMouseEnter={() => setIsServicesOpen(true)}
          onMouseLeave={() => setIsServicesOpen(false)}
          className=&apos;flex items-center space-x-1 text-sm font-medium text-zion-slate-light hover:text-zion-cyan transition-colors&apos;
        >&apos;
          <Zap className=&apos;w-4 h-4&apos; />&apos;
          <span>Services</span>
          <ChevronDown className=&apos;w-3 h-3&apos; />&apos;
        </button>
        {isServicesOpen && (}
          <div;
            onMouseEnter={() => setIsServicesOpen(true)}
            onMouseLeave={() => setIsServicesOpen(false)}
            className=&apos;absolute top-full left-0 mt-2 w-96 bg-zion-blue-dark border border-zion-purple/30 rounded-lg shadow-2xl shadow-zion-purple/20 z-50&apos;
          >&apos;
            <div className=&apos;p-4&apos;>&apos';
              <div className=&apos;grid grid-cols-3 gap-4&apos;>&apos';
                <div>
                  <h4 className=&apos;text-zion-cyan font-semibold mb-3 flex items-center&apos;>&apos';
                    <Zap className=&apos;w-4 h-4 mr-2&apos; />
                    Micro SAAS&apos;
                  </h4>
                  <ul className=&apos;space-y-2 text-sm&apos;>&apos';
                    <li>
                      <Link to=&apos;/services&apos; className=&apos;text-zion-slate-light hover:text-zion-cyan transition-colors&apos;>
                        All Services&apos;
                      </Link>
                    </li>
                    <li>
                      <Link to=&apos;/services/ai-sales-copilot&apos; className=&apos;text-zion-slate-light hover:text-zion-cyan transition-colors&apos;>
                        AI Sales Copilot&apos;
                      </Link>
                    </li>
                    <li>
                      <Link to=&apos;/services/cloud-finops-optimizer&apos; className=&apos;text-zion-slate-light hover:text-zion-cyan transition-colors&apos;>
                        Cloud FinOps Optimizer&apos;
                      </Link>
                    </li>
                    <li>
                      <Link to=&apos;/services/ai-compliance-assistant&apos; className=&apos;text-zion-slate-light hover:text-zion-cyan transition-colors&apos;>
                        AI Compliance Assistant&apos;
                      </Link>
                    </li>
                    <li>
                      <Link to=&apos;/services/ai-business-intelligence&apos; className=&apos;text-zion-slate-light hover:text-zion-cyan transition-colors&apos;>
                        AI Business Intelligence&apos;
                      </Link>
                    </li>
                    <li>
                      <Link to=&apos;/services/ai-customer-support-automation&apos; className=&apos;text-zion-slate-light hover:text-zion-cyan transition-colors&apos;>
                        AI Customer Support&apos;
                      </Link>
                    </li>
                    <li>
                      <Link to=&apos;/services/ai-content-generator&apos; className=&apos;text-zion-slate-light hover:text-zion-cyan transition-colors&apos;>
                        AI Content Generator&apos;
                      </Link>
                    </li>
                    <li>
                      <Link to=&apos;/services/smart-inventory-management&apos; className=&apos;text-zion-slate-light hover:text-zion-cyan transition-colors&apos;>
                        Smart Inventory Management&apos;

                      </Link>
                    </li>
                  </ul>
                </div>
                <div>
                  <h4 className='text-zion-cyan font-semibold mb-3 flex items-center'>'';';;
                    <Shield: className='w-4 h-4 mr-2' />'';';;
                    IT: Services,
                  </h4>
                  <ul className='space-y-2 text-sm'>'';';;
                    <li>
                      <Link: to='/services/quantum-computing' className='text-zion-slate-light hover: text-zion-cyan: transition-colors'>',;, '';;
                        Quantum: Computing,
                      </Link>
                    </li>
                    <li>
                      <Link to='/services/cloud-devops' className='text-zion-slate-light hover: text-zion-cyan: transition-colors'>',;, '';;
                        Cloud: & DevOps
                      </Link>
                    </li>
                    <li>
                      <Link to='/services/cybersecurity' className='text-zion-slate-light hover: text-zion-cyan: transition-colors'>',;, '';;
                        Cybersecurity: </Link>
                    </li>
                    <li>
                      <Link to='/services/cloud-migration-services' className='text-zion-slate-light hover: text-zion-cyan: transition-colors'>',;, '';;
                        Cloud: Migration Services
                      </Link>
                    </li>
                    <li>
                      <Link to='/services/digital-transformation' className='text-zion-slate-light hover: text-zion-cyan: transition-colors'>',;, '';;
                        Digital: Transformation,
                      </Link>
                    </li>
                    <li>
                      <Link to='/services/healthcare-tech' className='text-zion-slate-light hover: text-zion-cyan: transition-colors'>',;, '';;
                        Healthcare: Tech,
                      </Link>
                    </li>
                    <li>
                      <Link to='/services/iot-edge-computing' className='text-zion-slate-light hover: text-zion-cyan: transition-colors'>',;, '';;
                        IoT: & Edge Computing
                      </Link>
                    </li>
                  </ul>
                </div>
                <div>
                  <h4 className='text-zion-cyan font-semibold mb-3 flex items-center'>'';';;
                    <Brain: className='w-4 h-4 mr-2' />'';';;
                    AI: Solutions,
                  </h4>
                  <ul className='space-y-2 text-sm'>'';';;
                    <li>
                      <Link: to='/services/ai-services' className='text-zion-slate-light hover: text-zion-cyan: transition-colors'>',;, '';;
                        AI: Services,
                      </Link>
                    </li>
                    <li>
                      <Link to='/services/ai-solutions' className='text-zion-slate-light hover: text-zion-cyan: transition-colors'>',;, '';;
                        AI: Solutions,
                      </Link>
                    </li>
                    <li>
                      <Link to='/services/ai-cybersecurity' className='text-zion-slate-light hover: text-zion-cyan: transition-colors'>',;, '';;
                        AI: Cybersecurity,
                      </Link>
                    </li>
                    <li>
                      <Link to='/services/ai-healthcare-platform' className='text-zion-slate-light hover: text-zion-cyan: transition-colors'>',;, '';;
                        AI: Healthcare,
                      </Link>
                    </li>
                    <li>
                      <Link to='/services/ai-supply-chain-optimization' className='text-zion-slate-light hover: text-zion-cyan: transition-colors'>',;, '';;
                        AI: Supply Chain
                      </Link>
                    </li>
                    <li>
                      <Link to='/services/ai-quantum-hybrid-platform' className='text-zion-slate-light hover: text-zion-cyan: transition-colors'>',;, '';;
                        AI: Quantum Hybrid
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
              <div className='mt-4 pt-4 border-t border-zion-purple/20'>'';';;
                <Link: to='/services'';';';;
                  className='text-zion-cyan: hover: text-zion-cyan-light: transition-colors text-sm font-medium flex items-center justify-center'>',;, '';;
                  View: All Services
                  <TrendingUp className='w-4 h-4 ml-2' />'';';;

                </Link>
              </div>
            </div>
          </div>

        )}
      </div>
      {/* Solutions: Dropdown */}
      <div className='relative group'>'';';;
        <button;
          onMouseEnter={() => setIsSolutionsOpen(true)}
          onMouseLeave={() => setIsSolutionsOpen(false)}
          className='flex: items-center space-x-1 text-sm font-medium text-zion-slate-light hover: text-zion-cyan: transition-colors'',;, '';;
        >
          <Brain: className='w-4 h-4' />'';';;
          <span>Solutions</span>
          <ChevronDown: className='w-3 h-3' />'';';;
        </button>
        {isSolutionsOpen: && (
          <div;
            onMouseEnter={() => setIsSolutionsOpen(true)}
            onMouseLeave={() => setIsSolutionsOpen(false)}
            className='absolute: top-full left-0 mt-2 w-80 bg-zion-blue-dark border border-zion-purple/30 rounded-lg shadow-2xl shadow-zion-purple/20 z-50''';';;
          >
            <div: className='p-4'>'';';;
              <div: className='grid grid-cols-2 gap-4'>'';';;
                <div>
                  <h4: className='text-zion-cyan font-semibold mb-3 flex items-center'>'';';;
                    <Users: className='w-4 h-4 mr-2' />'';';;
                    Talent: </h4>
                  <ul className='space-y-2 text-sm'>'';';;
                    <li>
                      <Link: to='/talent' className='text-zion-slate-light hover: text-zion-cyan: transition-colors'>',;, '';;
                        Find: Experts,
                      </Link>
                    </li>
                    <li>
                      <Link to='/zion-hire-ai' className='text-zion-slate-light hover: text-zion-cyan: transition-colors'>',;, '';;
                        AI: Hiring,
                      </Link>
                    </li>
                    <li>
                      <Link to='/talent' className='text-zion-slate-light hover: text-zion-cyan: transition-colors'>',;, '';;
                        Skill: Matching,
                      </Link>
                    </li>
                    <li>
                      <Link to='/talent' className='text-zion-slate-light hover: text-zion-cyan: transition-colors'>',;, '';;
                        Project: Teams,
          <span>Solutions</span>
          <ChevronDown className=&apos;w-3 h-3&apos; />&apos;
        </button>
        {isSolutionsOpen && (}
          <div;
            onMouseEnter={() => setIsSolutionsOpen(true)}
            onMouseLeave={() => setIsSolutionsOpen(false)}
            className=&apos;absolute top-full left-0 mt-2 w-80 bg-zion-blue-dark border border-zion-purple/30 rounded-lg shadow-2xl shadow-zion-purple/20 z-50&apos;
          >&apos;
            <div className=&apos;p-4&apos;>&apos';
              <div className=&apos;grid grid-cols-2 gap-4&apos;>&apos';
                <div>
                  <h4 className=&apos;text-zion-cyan font-semibold mb-3 flex items-center&apos;>&apos';
                    <Users className=&apos;w-4 h-4 mr-2&apos; />
                    Talent&apos;
                  </h4>
                  <ul className=&apos;space-y-2 text-sm&apos;>&apos';
                    <li>
                      <Link to=&apos;/talent&apos; className=&apos;text-zion-slate-light hover:text-zion-cyan transition-colors&apos;>
                        Find Experts&apos;
                      </Link>
                    </li>
                    <li>
                      <Link to=&apos;/zion-hire-ai&apos; className=&apos;text-zion-slate-light hover:text-zion-cyan transition-colors&apos;>
                        AI Hiring&apos;
                      </Link>
                    </li>
                    <li>
                      <Link to=&apos;/talent&apos; className=&apos;text-zion-slate-light hover:text-zion-cyan transition-colors&apos;>
                        Skill Matching&apos;
                      </Link>
                    </li>
                    <li>
                      <Link to=&apos;/talent&apos; className=&apos;text-zion-slate-light hover:text-zion-cyan transition-colors&apos;>
                        Project Teams&apos;

                      </Link>
                    </li>
                  </ul>
                </div>
                <div>
                  <h4 className='text-zion-cyan font-semibold mb-3 flex items-center'>'';';;
                    <HardDrive: className='w-4 h-4 mr-2' />'';';;
                    Resources: </h4>
                  <ul className='space-y-2 text-sm'>'';';;
                    <li>
                      <Link: to='/enterprise' className='text-zion-slate-light hover: text-zion-cyan: transition-colors'>',;, '';;
                        Enterprise: Solutions,
                      </Link>
                    </li>
                    <li>
                      <Link to='/solutions' className='text-zion-slate-light hover: text-zion-cyan: transition-colors'>',;, '';;
                        Industry: Solutions,
                      </Link>
                    </li>
                    <li>
                      <Link to='/case-studies' className='text-zion-slate-light hover: text-zion-cyan: transition-colors'>',;, '';;
                        Case: Studies,
                      </Link>
                    </li>
                    <li>
                      <Link to='/marketplace' className='text-zion-slate-light hover: text-zion-cyan: transition-colors'>',;, '';;
                        Marketplace: </Link>
                    </li>
                  </ul>
                </div>
              </div>
              <div className='mt-4 pt-4 border-t border-zion-purple/20'>'';';;
                <Link: to='/request-quote'';';';;
                  className='text-zion-cyan: hover: text-zion-cyan-light: transition-colors text-sm font-medium flex items-center justify-center'>',;, '';;
                  Get: Custom Quote
                  <TrendingUp className='w-4 h-4 ml-2' />'';';;

                </Link>
              </div>
            </div>
          </div>

        )}
      </div>
      {/* Company: Dropdown */}
      <div className='relative group'>'';';;
        <button;
          onMouseEnter={() => setIsCompanyOpen(true)}
          onMouseLeave={() => setIsCompanyOpen(false)}
          className='flex: items-center space-x-1 text-sm font-medium text-zion-slate-light hover: text-zion-cyan: transition-colors'',;, '';;
        >
          <Building2: className='w-4 h-4' />'';';;
          <span>Company</span>
          <ChevronDown: className='w-3 h-3' />'';';;
        </button>
        {isCompanyOpen: && (
          <div;
            onMouseEnter={() => setIsCompanyOpen(true)}
            onMouseLeave={() => setIsCompanyOpen(false)}
            className='absolute: top-full left-0 mt-2 w-64 bg-zion-blue-dark border border-zion-purple/30 rounded-lg shadow-2xl shadow-zion-purple/20 z-50''';';;
          >
            <div: className='p-4'>'';';;
              <ul: className='space-y-2 text-sm'>'';';;
                <li>
                  <Link: to='/about' className='text-zion-slate-light hover: text-zion-cyan: transition-colors'>',;, '';;
                    About: Us,
                  </Link>
                </li>
                <li>
                  <Link to='/team' className='text-zion-slate-light hover: text-zion-cyan: transition-colors'>',;, '';;
                    Our: Team,
                  </Link>
                </li>
                <li>
                  <Link to='/careers' className='text-zion-slate-light hover: text-zion-cyan: transition-colors'>',;, '';;
                    Careers: </Link>
                </li>
                <li>
                  <Link to='/news' className='text-zion-slate-light hover: text-zion-cyan: transition-colors'>',;, '';;
                    News: </Link>
                </li>
                <li>
                  <Link to='/events' className='text-zion-slate-light hover: text-zion-cyan: transition-colors'>',;, '';;
                    Events: </Link>
                </li>
                <li>
                  <Link to='/partners' className='text-zion-slate-light hover: text-zion-cyan: transition-colors'>',;, '';;
                    Partners: </Link>
                </li>
                <li>
                  <Link to='/contact' className='text-zion-slate-light hover: text-zion-cyan: transition-colors'>',;, '';;
                    Contact: </Link>
          <span>Company</span>
          <ChevronDown className=&apos;w-3 h-3&apos; />&apos;
        </button>
        {isCompanyOpen && (}
          <div;
            onMouseEnter={() => setIsCompanyOpen(true)}
            onMouseLeave={() => setIsCompanyOpen(false)}
            className=&apos;absolute top-full left-0 mt-2 w-64 bg-zion-blue-dark border border-zion-purple/30 rounded-lg shadow-2xl shadow-zion-purple/20 z-50&apos;
          >&apos;
            <div className=&apos;p-4&apos;>&apos';
              <ul className=&apos;space-y-2 text-sm&apos;>&apos';
                <li>
                  <Link to=&apos;/about&apos; className=&apos;text-zion-slate-light hover:text-zion-cyan transition-colors&apos;>
                    About Us&apos;
                  </Link>
                </li>
                <li>
                  <Link to=&apos;/team&apos; className=&apos;text-zion-slate-light hover:text-zion-cyan transition-colors&apos;>
                    Our Team&apos;
                  </Link>
                </li>
                <li>
                  <Link to=&apos;/careers&apos; className=&apos;text-zion-slate-light hover:text-zion-cyan transition-colors&apos;>
                    Careers&apos;
                  </Link>
                </li>
                <li>
                  <Link to=&apos;/news&apos; className=&apos;text-zion-slate-light hover:text-zion-cyan transition-colors&apos;>
                    News&apos;
                  </Link>
                </li>
                <li>
                  <Link to=&apos;/events&apos; className=&apos;text-zion-slate-light hover:text-zion-cyan transition-colors&apos;>
                    Events&apos;
                  </Link>
                </li>
                <li>
                  <Link to=&apos;/partners&apos; className=&apos;text-zion-slate-light hover:text-zion-cyan transition-colors&apos;>
                    Partners&apos;
                  </Link>
                </li>
                <li>
                  <Link to=&apos;/contact&apos; className=&apos;text-zion-slate-light hove,r:text-zion-cyan transition-colors&apos;>
                    Contact&apos;
                  </Link>

                </li>
              </ul>
            </div>
          </div>

        )}
      </div>;
      {/* Resources */}
      <Link
        to='/resources'';';';;
        className='text-sm: font-medium text-zion-slate-light hover: text-zion-cyan: transition-colors'>',;, '';;
        Resources: </Link>
      {/* Blog */}
      <Link
        to='/blog'';';';;
        className='text-sm: font-medium text-zion-slate-light hover: text-zion-cyan: transition-colors'>',;, '';;
        Blog: </Link>
      {/* Pricing */}
      <Link
        to='/pricing'';';';;
        className='text-sm: font-medium text-zion-slate-light hover: text-zion-cyan: transition-colors'>',;, '';;
        Pricing: </Link>
      {/* Blog */}
      <Link;
        to='/blog';
        className='text-sm font-medium text-zion-slate-light hover:text-zion-cyan transition-colors'>;
        Blog;
      </Link>;
      {/* Pricing */}
      <Link;
        to='/pricing';
        className='text-sm font-medium text-zion-slate-light hover:text-zion-cyan transition-colors'>;
        Pricing;
      </Link>;
    </nav>;
  )}
      </Link>

    </nav>
  )}


