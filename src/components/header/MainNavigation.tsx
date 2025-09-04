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
  Rocket,
  Server,
  Cloud,
  Lock,
  Workflow,
  Database,
  MessageCircle,
  CheckCircle,
  ArrowRight,
  ExternalLink,
  Handshake,
  Monitor,
  GraduationCap,
  Lightbulb,
  Code,
  Activity,
  Target,
  DollarSign,
  Globe,
  Cpu,
  Layers
} from 'lucide-react';

interface MainNavigationProps {
  className?: string;
}

export function MainNavigation({ className = '' }: MainNavigationProps) {
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [isSolutionsOpen, setIsSolutionsOpen] = useState(false);
  const [isCompanyOpen, setIsCompanyOpen] = useState(false);

  return (
    <nav className={`flex items-center space-x-8 ${className}`}>
      {/* Home */}
      <Link 
        to="/" 
        className="text-sm font-medium text-white hover:text-blue-400 transition-colors"
      >
        Home
      </Link>

      {/* Services Dropdown */}
      <div className="relative group">
        <button
          onMouseEnter={() => setIsServicesOpen(true)}
          onMouseLeave={() => setIsServicesOpen(false)}
          className="flex items-center space-x-1 text-sm font-medium text-white hover:text-blue-400 transition-colors"
        >
          <Zap className="w-4 h-4" />
          <span>Services</span>
          <ChevronDown className="w-3 h-3" />
        </button>
        
        {isServicesOpen && (
          <div 
            onMouseEnter={() => setIsServicesOpen(true)} 
            onMouseLeave={() => setIsServicesOpen(false)}
            className="absolute top-full left-0 mt-2 w-[800px] bg-gray-900 border border-gray-700 rounded-lg shadow-2xl z-50"
          >
            <div className="p-6">
              <div className="grid grid-cols-4 gap-6">
                {/* Micro SaaS Services */}
                <div>
                  <h4 className="text-blue-400 font-semibold mb-4 flex items-center">
                    <Rocket className="w-4 h-4 mr-2" />
                    Micro SaaS
                  </h4>
                  <ul className="space-y-3 text-sm">
                    <li>
                      <Link to="/services/ai-content-studio-pro" className="text-gray-300 hover:text-blue-400 transition-colors flex items-center">
                        <FileText className="w-3 h-3 mr-2" />
                        AI Content Studio Pro
                      </Link>
                    </li>
                    <li>
                      <Link to="/services/ai-email-orchestrator" className="text-gray-300 hover:text-blue-400 transition-colors flex items-center">
                        <MessageCircle className="w-3 h-3 mr-2" />
                        AI Email Orchestrator
                      </Link>
                    </li>
                    <li>
                      <Link to="/services/ai-project-orchestrator" className="text-gray-300 hover:text-blue-400 transition-colors flex items-center">
                        <Workflow className="w-3 h-3 mr-2" />
                        AI Project Orchestrator
                      </Link>
                    </li>
                    <li>
                      <Link to="/services/ai-customer-support-copilot" className="text-gray-300 hover:text-blue-400 transition-colors flex items-center">
                        <Users className="w-3 h-3 mr-2" />
                        AI Customer Support
                      </Link>
                    </li>
                    <li>
                      <Link to="/services/document-automation-studio" className="text-gray-300 hover:text-blue-400 transition-colors flex items-center">
                        <FileText className="w-3 h-3 mr-2" />
                        Document Automation
                      </Link>
                    </li>
                  </ul>
                </div>

                {/* AI Services */}
                <div>
                  <h4 className="text-blue-400 font-semibold mb-4 flex items-center">
                    <Brain className="w-4 h-4 mr-2" />
                    AI Services
                  </h4>
                  <ul className="space-y-3 text-sm">
                    <li>
                      <Link to="/services/ai-financial-analytics-pro" className="text-gray-300 hover:text-blue-400 transition-colors flex items-center">
                        <BarChart3 className="w-3 h-3 mr-2" />
                        AI Financial Analytics
                      </Link>
                    </li>
                    <li>
                      <Link to="/services/quantum-optimization-suite" className="text-gray-300 hover:text-blue-400 transition-colors flex items-center">
                        <Cpu className="w-3 h-3 mr-2" />
                        Quantum Optimization
                      </Link>
                    </li>
                    <li>
                      <Link to="/services/rag-knowledge-base" className="text-gray-300 hover:text-blue-400 transition-colors flex items-center">
                        <Database className="w-3 h-3 mr-2" />
                        RAG Knowledge Base
                      </Link>
                    </li>
                    <li>
                      <Link to="/services/ai-agent-automation" className="text-gray-300 hover:text-blue-400 transition-colors flex items-center">
                        <Activity className="w-3 h-3 mr-2" />
                        AI Agent Automation
                      </Link>
                    </li>
                    <li>
                      <Link to="/services/fine-tuning-and-evals" className="text-gray-300 hover:text-blue-400 transition-colors flex items-center">
                        <Target className="w-3 h-3 mr-2" />
                        Model Fine-tuning
                      </Link>
                    </li>
                  </ul>
                </div>

                {/* IT Services */}
                <div>
                  <h4 className="text-blue-400 font-semibold mb-4 flex items-center">
                    <Shield className="w-4 h-4 mr-2" />
                    IT Services
                  </h4>
                  <ul className="space-y-3 text-sm">
                    <li>
                      <Link to="/services/ai-cybersecurity-suite" className="text-gray-300 hover:text-blue-400 transition-colors flex items-center">
                        <Lock className="w-3 h-3 mr-2" />
                        AI Cybersecurity Suite
                      </Link>
                    </li>
                    <li>
                      <Link to="/services/enterprise-blockchain-platform" className="text-gray-300 hover:text-blue-400 transition-colors flex items-center">
                        <Layers className="w-3 h-3 mr-2" />
                        Enterprise Blockchain
                      </Link>
                    </li>
                    <li>
                      <Link to="/services/ai-edge-computing-platform" className="text-gray-300 hover:text-blue-400 transition-colors flex items-center">
                        <Monitor className="w-3 h-3 mr-2" />
                        AI Edge Computing
                      </Link>
                    </li>
                    <li>
                      <Link to="/services/cloud-cost-optimization" className="text-gray-300 hover:text-blue-400 transition-colors flex items-center">
                        <Cloud className="w-3 h-3 mr-2" />
                        Cloud Cost Optimization
                      </Link>
                    </li>
                    <li>
                      <Link to="/services/managed-kubernetes" className="text-gray-300 hover:text-blue-400 transition-colors flex items-center">
                        <Server className="w-3 h-3 mr-2" />
                        Managed Kubernetes
                      </Link>
                    </li>
                  </ul>
                </div>

                {/* Specialized Services */}
                <div>
                  <h4 className="text-blue-400 font-semibold mb-4 flex items-center">
                    <Globe className="w-4 h-4 mr-2" />
                    Specialized
                  </h4>
                  <ul className="space-y-3 text-sm">
                    <li>
                      <Link to="/services/data-engineering-analytics" className="text-gray-300 hover:text-blue-400 transition-colors flex items-center">
                        <Database className="w-3 h-3 mr-2" />
                        Data Engineering
                      </Link>
                    </li>
                    <li>
                      <Link to="/services/security-assessments-and-pentest" className="text-gray-300 hover:text-blue-400 transition-colors flex items-center">
                        <Shield className="w-3 h-3 mr-2" />
                        Security Assessments
                      </Link>
                    </li>
                    <li>
                      <Link to="/services/lead-enrichment-api" className="text-gray-300 hover:text-blue-400 transition-colors flex items-center">
                        <Users className="w-3 h-3 mr-2" />
                        Lead Enrichment API
                      </Link>
                    </li>
                    <li>
                      <Link to="/services/seo-change-tracker" className="text-gray-300 hover:text-blue-400 transition-colors flex items-center">
                        <TrendingUp className="w-3 h-3 mr-2" />
                        SEO Change Tracker
                      </Link>
                    </li>
                    <li>
                      <Link to="/services" className="text-blue-400 hover:text-blue-300 transition-colors flex items-center font-medium">
                        View All Services
                        <ArrowRight className="w-3 h-3 ml-1" />
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
              
              <div className="mt-6 pt-4 border-t border-gray-700">
                <div className="flex items-center justify-between">
                  <div className="text-sm text-gray-400">
                    <strong className="text-white">Contact:</strong> +1 302 464 0950 | kleber@ziontechgroup.com
                  </div>
                  <Link 
                    to="/request-quote" 
                    className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors flex items-center"
                  >
                    Get Custom Quote
                    <ArrowRight className="w-4 h-4 ml-2" />
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
          className="flex items-center space-x-1 text-sm font-medium text-white hover:text-blue-400 transition-colors"
        >
          <Brain className="w-4 h-4" />
          <span>Solutions</span>
          <ChevronDown className="w-3 h-3" />
        </button>
        
        {isSolutionsOpen && (
          <div 
            onMouseEnter={() => setIsSolutionsOpen(true)}
            onMouseLeave={() => setIsSolutionsOpen(false)}
            className="absolute top-full left-0 mt-2 w-80 bg-gray-900 border border-gray-700 rounded-lg shadow-2xl z-50"
          >
            <div className="p-6">
              <div className="grid grid-cols-2 gap-6">
                {/* Industry Solutions */}
                <div>
                  <h4 className="text-blue-400 font-semibold mb-4 flex items-center">
                    <Building2 className="w-4 h-4 mr-2" />
                    Industries
                  </h4>
                  <ul className="space-y-3 text-sm">
                    <li>
                      <Link to="/solutions/healthcare" className="text-gray-300 hover:text-blue-400 transition-colors">
                        Healthcare & Life Sciences
                      </Link>
                    </li>
                    <li>
                      <Link to="/solutions/finance" className="text-gray-300 hover:text-blue-400 transition-colors">
                        Financial Services
                      </Link>
                    </li>
                    <li>
                      <Link to="/solutions/manufacturing" className="text-gray-300 hover:text-blue-400 transition-colors">
                        Manufacturing
                      </Link>
                    </li>
                    <li>
                      <Link to="/solutions/retail" className="text-gray-300 hover:text-blue-400 transition-colors">
                        Retail & E-commerce
                      </Link>
                    </li>
                    <li>
                      <Link to="/solutions/education" className="text-gray-300 hover:text-blue-400 transition-colors">
                        Education
                      </Link>
                    </li>
                  </ul>
                </div>

                {/* Technology Solutions */}
                <div>
                  <h4 className="text-blue-400 font-semibold mb-4 flex items-center">
                    <Code className="w-4 h-4 mr-2" />
                    Technologies
                  </h4>
                  <ul className="space-y-3 text-sm">
                    <li>
                      <Link to="/solutions/ai" className="text-gray-300 hover:text-blue-400 transition-colors">
                        AI & Machine Learning
                      </Link>
                    </li>
                    <li>
                      <Link to="/solutions/quantum" className="text-gray-300 hover:text-blue-400 transition-colors">
                        Quantum Computing
                      </Link>
                    </li>
                    <li>
                      <Link to="/solutions/blockchain" className="text-gray-300 hover:text-blue-400 transition-colors">
                        Blockchain & DeFi
                      </Link>
                    </li>
                    <li>
                      <Link to="/solutions/iot" className="text-gray-300 hover:text-blue-400 transition-colors">
                        IoT & Edge Computing
                      </Link>
                    </li>
                    <li>
                      <Link to="/solutions/cybersecurity" className="text-gray-300 hover:text-blue-400 transition-colors">
                        Cybersecurity
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
              
              <div className="mt-6 pt-4 border-t border-gray-700">
                <Link 
                  to="/solutions" 
                  className="text-blue-400 hover:text-blue-300 transition-colors text-sm font-medium flex items-center justify-center"
                >
                  Explore All Solutions
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
          className="flex items-center space-x-1 text-sm font-medium text-white hover:text-blue-400 transition-colors"
        >
          <Building2 className="w-4 h-4" />
          <span>Company</span>
          <ChevronDown className="w-3 h-3" />
        </button>
        
        {isCompanyOpen && (
          <div 
            onMouseEnter={() => setIsCompanyOpen(true)}
            onMouseLeave={() => setIsCompanyOpen(false)}
            className="absolute top-full left-0 mt-2 w-64 bg-gray-900 border border-gray-700 rounded-lg shadow-2xl z-50"
          >
            <div className="p-6">
              <ul className="space-y-3 text-sm">
                <li>
                  <Link to="/about" className="text-gray-300 hover:text-blue-400 transition-colors">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link to="/team" className="text-gray-300 hover:text-blue-400 transition-colors">
                    Our Team
                  </Link>
                </li>
                <li>
                  <Link to="/careers" className="text-gray-300 hover:text-blue-400 transition-colors">
                    Careers
                  </Link>
                </li>
                <li>
                  <Link to="/news" className="text-gray-300 hover:text-blue-400 transition-colors">
                    News & Updates
                  </Link>
                </li>
                <li>
                  <Link to="/partners" className="text-gray-300 hover:text-blue-400 transition-colors">
                    Partners
                  </Link>
                </li>
                <li>
                  <Link to="/contact" className="text-gray-300 hover:text-blue-400 transition-colors">
                    Contact Us
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
        className="text-sm font-medium text-white hover:text-blue-400 transition-colors"
      >
        Resources
      </Link>

      {/* Blog */}
      <Link 
        to="/blog" 
        className="text-sm font-medium text-white hover:text-blue-400 transition-colors"
      >
        Blog
      </Link>

      {/* Pricing */}
      <Link 
        to="/pricing" 
        className="text-sm font-medium text-white hover:text-blue-400 transition-colors"
      >
        Pricing
      </Link>
    </nav>
  );
}

export default MainNavigation;