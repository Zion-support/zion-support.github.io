'use client';

import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const toggleDropdown = (dropdown: string) => {
    setOpenDropdown(openDropdown === dropdown ? null : dropdown);
  };

  return (
    <header className="border-b border-gray-200 sticky top-0 z-50 bg-white shadow-sm">
      <nav className="flex items-center justify-between px-4 py-3 max-w-6xl mx-auto">
        <Link to="/" className="font-bold text-lg text-gray-900 hover:text-blue-600 transition-colors flex items-center">
          <span className="text-blue-600 mr-2 text-xl">🚀</span>
          Zion Tech Group
        </Link>
        
        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center gap-6">
          {/* Services Dropdown */}
          <div className="relative group">
            <button 
              className="text-gray-700 hover:text-blue-600 transition-colors flex items-center gap-1 font-medium"
              onMouseEnter={() => setOpenDropdown('services')}
              onMouseLeave={() => setOpenDropdown(null)}
            >
              Services
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            <div className={`absolute top-full left-0 mt-2 w-[500px] bg-white rounded-lg shadow-lg border border-gray-200 transition-all duration-200 z-50 ${
              openDropdown === 'services' ? 'opacity-100 visible' : 'opacity-0 invisible'
            }`}>
              <div className="py-3">
                <div className="px-4 py-2 text-xs font-semibold text-gray-500 uppercase tracking-wide">Featured Services</div>
                <Link to="/services/ai-content-optimization-platform" className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600">
                  AI Content Optimization Platform
                </Link>
                <Link to="/services/micro-saas/ai-lead-scoring-api" className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600">
                  AI Lead Scoring API
                </Link>
                <Link to="/services/ai-financial-forecasting-suite" className="block px-4 py-2 text-sm text-gray-700 hover:bg-green-50 hover:text-green-600">
                  AI Financial Forecasting Suite
                </Link>
                <Link to="/services/smart-inventory-management-saas" className="block px-4 py-2 text-sm text-gray-700 hover:bg-purple-50 hover:text-purple-600">
                  Smart Inventory Management SaaS
                </Link>
                <Link to="/services/ai-powered-crm-automation" className="block px-4 py-2 text-sm text-gray-700 hover:bg-orange-50 hover:text-orange-600">
                  AI-Powered CRM Automation
                </Link>
                <Link to="/services/cloud-native-devops-platform" className="block px-4 py-2 text-sm text-gray-700 hover:bg-indigo-50 hover:text-indigo-600">
                  Cloud-Native DevOps Platform
                </Link>
                <Link to="/services/ai-cybersecurity-automation-suite" className="block px-4 py-2 text-sm text-gray-700 hover:bg-red-50 hover:text-red-600">
                  AI Cybersecurity Automation Suite
                </Link>
                <Link to="/services/ai-sales-copilot" className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600">
                  AI Sales Copilot
                </Link>
                <Link to="/services/data-quality-observability" className="block px-4 py-2 text-sm text-gray-700 hover:bg-green-50 hover:text-green-600">
                  Data Quality & Observability
                </Link>
                <Link to="/services/finops-cost-optimizer" className="block px-4 py-2 text-sm text-gray-700 hover:bg-indigo-50 hover:text-indigo-600">
                  FinOps Cost Optimizer
                </Link>
                <div className="border-t border-gray-100 my-2"></div>
                <div className="px-4 py-2 text-xs font-semibold text-gray-500 uppercase tracking-wide">Industry Solutions</div>
                <Link to="/services/manufacturing-ai-platform" className="block px-4 py-2 text-sm text-gray-700 hover:bg-green-50 hover:text-green-600">
                  Manufacturing AI Platform
                </Link>
                <Link to="/services/supply-chain-intelligence" className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600">
                  Supply Chain Intelligence
                </Link>
                <Link to="/services/ai-autonomous-operations" className="block px-4 py-2 text-sm text-gray-700 hover:bg-purple-50 hover:text-purple-600">
                  Autonomous Operations
                </Link>
                <div className="border-t border-gray-100 my-2"></div>
                <div className="px-4 py-2 text-xs font-semibold text-gray-500 uppercase tracking-wide">New AI-Powered Solutions</div>
                <Link to="/services/ai-content-optimization-suite" className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600">
                  AI Content Optimization Suite
                </Link>
                <Link to="/services/ai-workflow-automation-platform" className="block px-4 py-2 text-sm text-gray-700 hover:bg-green-50 hover:text-green-600">
                  AI Workflow Automation Platform
                </Link>
                <Link to="/services/it-services/ai-observability-platform" className="block px-4 py-2 text-sm text-gray-700 hover:bg-indigo-50 hover:text-indigo-600">
                  AI Observability Platform
                </Link>
                <Link to="/services/ai-governance-risk-compliance" className="block px-4 py-2 text-sm text-gray-700 hover:bg-emerald-50 hover:text-emerald-600">
                  AI Governance, Risk & Compliance
                </Link>
                <Link to="/services/ai-customer-insights-platform" className="block px-4 py-2 text-sm text-gray-700 hover:bg-purple-50 hover:text-purple-600">
                  AI Customer Insights Platform
                </Link>
                <Link to="/services/ai-financial-analysis-platform" className="block px-4 py-2 text-sm text-gray-700 hover:bg-orange-50 hover:text-orange-600">
                  AI Financial Analysis Platform
                </Link>
                <Link to="/services/genai-rag-platform" className="block px-4 py-2 text-sm text-gray-700 hover:bg-purple-50 hover:text-purple-600">
                  Enterprise RAG & GenAI Platform
                </Link>
                <Link to="/services/ai-marketing-studio" className="block px-4 py-2 text-sm text-gray-700 hover:bg-rose-50 hover:text-rose-600">
                  AI Marketing Studio
                </Link>
                <Link to="/services/ai-project-management-platform" className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600">
                  AI Project Management Platform
                </Link>
                <Link to="/services/smart-invoice-processing" className="block px-4 py-2 text-sm text-gray-700 hover:bg-green-50 hover:text-green-600">
                  Smart Invoice Processing System
                </Link>
                <Link to="/services/ai-customer-onboarding" className="block px-4 py-2 text-sm text-gray-700 hover:bg-purple-50 hover:text-purple-600">
                  AI Customer Onboarding Platform
                </Link>
                <Link to="/services/intelligent-expense-management" className="block px-4 py-2 text-sm text-gray-700 hover:bg-orange-50 hover:text-orange-600">
                  Intelligent Expense Management
                </Link>
                <Link to="/services/ai-lead-generation-engine" className="block px-4 py-2 text-sm text-gray-700 hover:bg-indigo-50 hover:text-indigo-600">
                  AI Lead Generation Engine
                </Link>
                <div className="border-t border-gray-100 my-2"></div>
                <div className="px-4 py-2 text-xs font-semibold text-gray-500 uppercase tracking-wide">Specialized Solutions</div>
                <Link to="/services/ai-business-intelligence-2025" className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600">
                  Business Intelligence
                </Link>
                <div className="border-t border-gray-100 my-2"></div>
                <div className="px-4 py-2 text-xs font-semibold text-gray-500 uppercase tracking-wide">IT Security Services</div>
                <Link to="/services/cybersecurity-risk-assessment" className="block px-4 py-2 text-sm text-gray-700 hover:bg-red-50 hover:text-red-600">
                  Cybersecurity Risk Assessment
                </Link>
                <Link to="/services/ai-cybersecurity-2025" className="block px-4 py-2 text-sm text-gray-700 hover:bg-red-50 hover:text-red-600">
                  AI Cybersecurity Solutions
                </Link>
                <Link to="/services/it-services" className="block px-4 py-2 text-sm text-gray-700 hover:bg-green-50 hover:text-green-600">
                  IT Services & Solutions
                </Link>
                <div className="border-t border-gray-100 my-2"></div>
                <Link to="/services" className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600 font-medium">
                  View All Services →
                </Link>
              </div>
            </div>
          </div>
          
          {/* Solutions Dropdown */}
          <div className="relative group">
            <button 
              className="text-gray-700 hover:text-blue-600 transition-colors flex items-center gap-1 font-medium"
              onMouseEnter={() => setOpenDropdown('solutions')}
              onMouseLeave={() => setOpenDropdown(null)}
            >
              Solutions
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            <div className={`absolute top-full left-0 mt-2 w-64 bg-white rounded-lg shadow-lg border border-gray-200 transition-all duration-200 z-50 ${
              openDropdown === 'solutions' ? 'opacity-100 visible' : 'opacity-0 invisible'
            }`}>
              <div className="py-3">
                <Link to="/solutions" className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600">
                  All Solutions
                </Link>
                <Link to="/enterprise" className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600">
                  Enterprise Solutions
                </Link>
                <Link to="/services/ai-quantum-computing-2026" className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600">
                  Quantum Computing
                </Link>
                <Link to="/services/ai-autonomous-operations-2026" className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600">
                  AI Operations 2026
                </Link>
              </div>
            </div>
          </div>

          {/* Resources Dropdown */}
          <div className="relative group">
            <button 
              className="text-gray-700 hover:text-blue-600 transition-colors flex items-center gap-1 font-medium"
              onMouseEnter={() => setOpenDropdown('resources')}
              onMouseLeave={() => setOpenDropdown(null)}
            >
              Resources
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            <div className={`absolute top-full left-0 mt-2 w-64 bg-white rounded-lg shadow-lg border border-gray-200 transition-all duration-200 z-50 ${
              openDropdown === 'resources' ? 'opacity-100 visible' : 'opacity-0 invisible'
            }`}>
              <div className="py-3">
                <Link to="/blog" className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600">
                  Blog & Insights
                </Link>
                <Link to="/case-studies" className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600">
                  Case Studies
                </Link>
                <Link to="/guides" className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600">
                  Implementation Guides
                </Link>
                <Link to="/content-hub" className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600">
                  Content Hub
                </Link>
              </div>
            </div>
          </div>

          <Link to="/about" className="text-gray-700 hover:text-blue-600 transition-colors">About</Link>
          <Link to="/portfolio" className="text-gray-700 hover:text-blue-600 transition-colors">Portfolio</Link>
          <Link to="/contact" className="text-gray-700 hover:text-blue-600 transition-colors">Contact</Link>
          
          {/* Featured Success Stories */}
          <div className="relative group">
            <button 
              className="text-gray-700 hover:text-blue-600 transition-colors flex items-center gap-1 font-medium"
              onMouseEnter={() => setOpenDropdown('success')}
              onMouseLeave={() => setOpenDropdown(null)}
            >
              Success Stories
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            <div className={`absolute top-full left-0 mt-2 w-80 bg-white rounded-lg shadow-lg border border-gray-200 transition-all duration-200 z-50 ${
              openDropdown === 'success' ? 'opacity-100 visible' : 'opacity-0 invisible'
            }`}>
              <div className="py-3">
                <div className="px-4 py-2 text-xs font-semibold text-gray-500 uppercase tracking-wide">Featured Breakthroughs</div>
                <Link href="/blog/ai-2026-november-quantum-superintelligence-breakthrough" className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600 flex items-center gap-2">
                  November 2026 Quantum AI
                  <span className="bg-gradient-to-r from-purple-500 to-indigo-500 text-white px-2 py-1 rounded-full text-xs font-semibold">
                    $500B ROI
                  </span>
                </Link>
                <Link href="/blog/ai-2026-august-quantum-consciousness-revolution" className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600 flex items-center gap-2">
                  August 2026 Quantum Consciousness
                  <span className="bg-gradient-to-r from-cyan-500 to-blue-500 text-white px-2 py-1 rounded-full text-xs font-semibold">
                    $50B SUCCESS
                  </span>
                </Link>
                <Link href="/blog/ai-2026-july-mega-breakthrough-revolution" className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600 flex items-center gap-2">
                  July 2026 Mega Breakthrough
                  <span className="bg-gradient-to-r from-purple-500 to-indigo-500 text-white px-2 py-1 rounded-full text-xs font-semibold">
                    $25.3B SUCCESS
                  </span>
                </Link>
                <div className="border-t border-gray-100 my-2"></div>
                <Link to="/case-studies" className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600 font-medium">
                  View All Case Studies →
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Mobile Menu Button */}
        <button 
          className="lg:hidden p-2" 
          aria-label="Toggle menu"
          onClick={toggleMobileMenu}
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {isMobileMenuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </nav>

      {/* Mobile Menu */}
      <div className={`lg:hidden transition-all duration-300 ease-in-out ${
        isMobileMenuOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'
      } overflow-hidden`}>
        <div className="bg-white border-t border-gray-200 shadow-lg">
          <div className="px-4 py-4 space-y-4">
            {/* Mobile Services Section */}
            <div>
              <button 
                className="flex items-center justify-between w-full text-left font-medium text-gray-700 hover:text-blue-600"
                onClick={() => toggleDropdown('mobile-services')}
              >
                Services
                <svg className={`w-4 h-4 transition-transform ${openDropdown === 'mobile-services' ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {openDropdown === 'mobile-services' && (
                <div className="mt-2 pl-4 space-y-2">
                  <div className="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-2">Core Services</div>
                  <Link to="/services/ai-services" className="block text-sm text-gray-600 hover:text-blue-600">AI Services</Link>
                  <Link to="/services/micro-saas" className="block text-sm text-gray-600 hover:text-blue-600">Micro SaaS</Link>
                  <Link to="/services/it-services" className="block text-sm text-gray-600 hover:text-blue-600">IT Services</Link>
                  <div className="border-t border-gray-200 my-2"></div>
                  <div className="text-xs font-semibold text-gray-500 uppercase tracking-wide">New AI Solutions</div>
                  <Link to="/services/ai-content-optimization-suite" className="block text-sm text-gray-600 hover:text-blue-600">AI Content Suite</Link>
                  <Link to="/services/ai-workflow-automation-platform" className="block text-sm text-gray-600 hover:text-blue-600">Workflow Automation</Link>
                  <Link to="/services/ai-customer-insights-platform" className="block text-sm text-gray-600 hover:text-blue-600">Customer Insights</Link>
                  <Link to="/services/ai-financial-analysis-platform" className="block text-sm text-gray-600 hover:text-blue-600">Financial Analysis</Link>
                  <div className="border-t border-gray-200 my-2"></div>
                  <Link to="/services/manufacturing-ai-platform" className="block text-sm text-gray-600 hover:text-blue-600">Manufacturing AI</Link>
                  <Link to="/services/supply-chain-intelligence" className="block text-sm text-gray-600 hover:text-blue-600">Supply Chain</Link>
                  <Link to="/services" className="block text-sm text-gray-600 hover:text-blue-600">View All Services</Link>
                </div>
              )}
            </div>

            {/* Mobile Solutions Section */}
            <div>
              <button 
                className="flex items-center justify-between w-full text-left font-medium text-gray-700 hover:text-blue-600"
                onClick={() => toggleDropdown('mobile-solutions')}
              >
                Solutions
                <svg className={`w-4 h-4 transition-transform ${openDropdown === 'mobile-solutions' ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {openDropdown === 'mobile-solutions' && (
                <div className="mt-2 pl-4 space-y-2">
                  <Link to="/solutions" className="block text-sm text-gray-600 hover:text-blue-600">All Solutions</Link>
                  <Link to="/enterprise" className="block text-sm text-gray-600 hover:text-blue-600">Enterprise Solutions</Link>
                  <Link to="/services/ai-quantum-computing-2026" className="block text-sm text-gray-600 hover:text-blue-600">Quantum Computing</Link>
                </div>
              )}
            </div>

            {/* Mobile Resources Section */}
            <div>
              <button 
                className="flex items-center justify-between w-full text-left font-medium text-gray-700 hover:text-blue-600"
                onClick={() => toggleDropdown('mobile-resources')}
              >
                Resources
                <svg className={`w-4 h-4 transition-transform ${openDropdown === 'mobile-resources' ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {openDropdown === 'mobile-resources' && (
                <div className="mt-2 pl-4 space-y-2">
                  <Link to="/blog" className="block text-sm text-gray-600 hover:text-blue-600">Blog & Insights</Link>
                  <Link to="/case-studies" className="block text-sm text-gray-600 hover:text-blue-600">Case Studies</Link>
                  <Link to="/guides" className="block text-sm text-gray-600 hover:text-blue-600">Implementation Guides</Link>
                  <Link to="/content-hub" className="block text-sm text-gray-600 hover:text-blue-600">Content Hub</Link>
                </div>
              )}
            </div>

            {/* Direct Links */}
            <Link to="/about" className="block font-medium text-gray-700 hover:text-blue-600">About</Link>
            <Link to="/portfolio" className="block font-medium text-gray-700 hover:text-blue-600">Portfolio</Link>
            <Link to="/contact" className="block font-medium text-gray-700 hover:text-blue-600">Contact</Link>
            
            {/* Success Stories */}
            <div>
              <button 
                className="flex items-center justify-between w-full text-left font-medium text-gray-700 hover:text-blue-600"
                onClick={() => toggleDropdown('mobile-success')}
              >
                Success Stories
                <svg className={`w-4 h-4 transition-transform ${openDropdown === 'mobile-success' ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {openDropdown === 'mobile-success' && (
                <div className="mt-2 pl-4 space-y-2">
                  <Link to="/blog/ai-2026-november-quantum-superintelligence-breakthrough" className="block text-sm text-gray-600 hover:text-blue-600">Quantum AI Breakthrough</Link>
                  <Link to="/blog/ai-2026-august-quantum-consciousness-revolution" className="block text-sm text-gray-600 hover:text-blue-600">Quantum Consciousness</Link>
                  <Link to="/blog/ai-2026-july-mega-breakthrough-revolution" className="block text-sm text-gray-600 hover:text-blue-600">Mega Breakthrough</Link>
                  <Link to="/case-studies" className="block text-sm text-gray-600 hover:text-blue-600">All Case Studies</Link>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

export function Footer() {
  return (
    <footer className="border-t border-gray-200 mt-16 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-6 py-12">
        {/* Contact Information Banner */}
        <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl p-8 text-white mb-12">
          <h3 className="text-2xl font-bold text-center mb-6">Ready to Transform Your Business?</h3>
          <div className="grid md:grid-cols-3 gap-6 text-center">
            <div className="flex flex-col items-center">
              <svg className="w-8 h-8 mb-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              <h4 className="font-bold mb-2">Call Us</h4>
              <a href="tel:+13024640950" className="text-lg font-semibold hover:underline">
                +1 302 464 0950
              </a>
            </div>
            <div className="flex flex-col items-center">
              <svg className="w-8 h-8 mb-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              <h4 className="font-bold mb-2">Email Us</h4>
              <a href="mailto:kleber@ziontechgroup.com" className="text-lg font-semibold hover:underline">
                kleber@ziontechgroup.com
              </a>
            </div>
            <div className="flex flex-col items-center">
              <svg className="w-8 h-8 mb-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              <h4 className="font-bold mb-2">Visit Us</h4>
              <div className="text-lg font-semibold">
                364 E Main St STE 1008<br />
                Middletown DE 19709
              </div>
            </div>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Services */}
          <div>
            <h3 className="font-semibold text-gray-900 mb-3">Featured Services</h3>
            <div className="space-y-2">
              <Link href="/services" className="block text-gray-600 hover:text-blue-600 transition-colors">All Services</Link>
              <Link href="/services/ai-services" className="block text-gray-600 hover:text-blue-600 transition-colors">AI Services</Link>
              <Link href="/services/micro-saas" className="block text-gray-600 hover:text-blue-600 transition-colors">Micro SaaS</Link>
              <Link href="/services/it-services" className="block text-gray-600 hover:text-blue-600 transition-colors">IT Services</Link>
              <div className="border-t border-gray-200 my-2"></div>
              <div className="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-1">New AI Solutions</div>
              <Link href="/services/ai-content-optimization-suite" className="block text-gray-600 hover:text-blue-600 transition-colors">AI Content Suite</Link>
              <Link href="/services/ai-workflow-automation-platform" className="block text-gray-600 hover:text-blue-600 transition-colors">Workflow Automation</Link>
              <Link href="/services/ai-customer-insights-platform" className="block text-gray-600 hover:text-blue-600 transition-colors">Customer Insights</Link>
              <Link href="/services/ai-financial-analysis-platform" className="block text-gray-600 hover:text-blue-600 transition-colors">Financial Analysis</Link>
            </div>
          </div>
          
          {/* Solutions */}
          <div>
            <h3 className="font-semibold text-gray-900 mb-3">Solutions</h3>
            <div className="space-y-2">
              <Link href="/solutions" className="block text-gray-600 hover:text-blue-600 transition-colors">All Solutions</Link>
              <Link href="/enterprise" className="block text-gray-600 hover:text-blue-600 transition-colors">Enterprise Solutions</Link>
              <Link href="/services/ai-quantum-computing-2026" className="block text-gray-600 hover:text-blue-600 transition-colors">⚛️ Quantum Computing</Link>
              <Link href="/services/ai-autonomous-operations-2026" className="block text-gray-600 hover:text-blue-600 transition-colors">🤖 AI Operations</Link>
              <Link href="/case-studies" className="block text-gray-600 hover:text-blue-600 transition-colors">📊 Case Studies</Link>
            </div>
          </div>

          {/* Resources */}
          <div>
            <h3 className="font-semibold text-gray-900 mb-3">Resources</h3>
            <div className="space-y-2">
              <Link href="/blog" className="block text-gray-600 hover:text-blue-600 transition-colors">📚 Blog & Insights</Link>
              <Link href="/guides" className="block text-gray-600 hover:text-blue-600 transition-colors">📖 Implementation Guides</Link>
              <Link href="/content-hub" className="block text-gray-600 hover:text-blue-600 transition-colors">🎯 Content Hub</Link>
              <Link href="/blog/ai-2026-november-quantum-superintelligence-breakthrough" className="block text-gray-600 hover:text-blue-600 transition-colors">
                🚀 Latest Breakthrough
              </Link>
            </div>
          </div>

          {/* Company & Contact */}
          <div>
            <h3 className="font-semibold text-gray-900 mb-4 text-lg">Company</h3>
            <div className="space-y-3 mb-6">
              <Link href="/about" className="block text-gray-600 hover:text-blue-600 transition-colors">
                About Us
              </Link>
              <Link href="/portfolio" className="block text-gray-600 hover:text-blue-600 transition-colors">
                Portfolio
              </Link>
              <Link href="/contact" className="block text-gray-600 hover:text-blue-600 transition-colors">
                Contact
              </Link>
              <Link href="/privacy" className="block text-gray-600 hover:text-blue-600 transition-colors">
                Privacy Policy
              </Link>
              <Link href="/terms" className="block text-gray-600 hover:text-blue-600 transition-colors">
                Terms of Service
              </Link>
              <Link href="/security" className="block text-gray-600 hover:text-blue-600 transition-colors">
                Security
              </Link>
            </div>
            
            {/* Contact Info */}
            <div className="space-y-3">
              <div className="flex items-center">
                <svg className="w-5 h-5 text-gray-400 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <a href="tel:+13024640950" className="text-gray-600 hover:text-blue-600 transition-colors">
                  +1 302 464 0950
                </a>
              </div>
              <div className="flex items-center">
                <svg className="w-5 h-5 text-gray-400 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <a href="mailto:kleber@ziontechgroup.com" className="text-gray-600 hover:text-blue-600 transition-colors">
                  kleber@ziontechgroup.com
                </a>
              </div>
              <div className="flex items-start">
                <svg className="w-5 h-5 text-gray-400 mr-3 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <div className="text-gray-600">
                  <div>364 E Main St STE 1008</div>
                  <div>Middletown DE 19709</div>
                </div>
              </div>
            </div>
            
            {/* Social Media */}
            <div className="mt-4">
              <h4 className="font-medium text-gray-900 mb-2">Follow Us</h4>
              <div className="flex space-x-3">
                <a href="#" className="text-gray-400 hover:text-blue-600 transition-colors">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/>
                  </svg>
                </a>
                <a href="#" className="text-gray-400 hover:text-blue-600 transition-colors">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                </a>
                <a href="#" className="text-gray-400 hover:text-blue-600 transition-colors">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.174-.105-.949-.199-2.403.041-3.439.219-.937 1.406-5.957 1.406-5.957s-.359-.72-.359-1.781c0-1.663.967-2.911 2.168-2.911 1.024 0 1.518.769 1.518 1.688 0 1.029-.653 2.567-.992 3.992-.285 1.193.6 2.165 1.775 2.165 2.128 0 3.768-2.245 3.768-5.487 0-2.861-2.063-4.869-5.008-4.869-3.41 0-5.409 2.562-5.409 5.199 0 1.033.394 2.143.889 2.741.099.12.112.225.085.345-.09.375-.293 1.199-.334 1.363-.053.225-.172.271-.402.165-1.495-.69-2.433-2.878-2.433-4.646 0-3.776 2.748-7.252 7.92-7.252 4.158 0 7.392 2.967 7.392 6.923 0 4.135-2.607 7.462-6.233 7.462-1.214 0-2.357-.629-2.746-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146C9.57 23.812 10.763 24.009 12.017 24.009c6.624 0 11.99-5.367 11.99-11.988C24.007 5.367 18.641.001.012.001z"/>
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="border-t border-gray-200 mt-6 pt-4 text-xs text-gray-500 text-center">
          © {new Date().getFullYear()} Zion Tech Group. All rights reserved.
        </div>
      </div>
    </footer>
  );
}