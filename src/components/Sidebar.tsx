import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ChevronDownIcon, ChevronRightIcon } from '@heroicons/react/24/outline';

interface SidebarSectionProps {
  title: string;
  children: React.ReactNode;
  defaultOpen?: boolean;
}

const SidebarSection: React.FC<SidebarSectionProps> = ({ title, children, defaultOpen = false }) => {
  const [isOpen, setIsOpen] = useState(defaultOpen);
  
  return (
    <div className="border-b border-gray-700">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center justify-between px-4 py-3 text-left text-gray-300 hover:text-white hover:bg-gray-800 transition-colors duration-200"
      >
        <span className="font-medium">{title}</span>
        {isOpen ? (
          <ChevronDownIcon className="h-4 w-4" />
        ) : (
          <ChevronRightIcon className="h-4 w-4" />
        )}
      </button>
      {isOpen && (
        <div className="bg-gray-800/50">
          {children}
        </div>
      )}
    </div>
  );
};

interface SidebarLinkProps {
  to: string;
  children: React.ReactNode;
  isActive?: boolean;
}

const SidebarLink: React.FC<SidebarLinkProps> = ({ to, children, isActive }) => (
  <Link
    to={to}
    className={`block px-6 py-2 text-sm text-gray-300 hover:text-white hover:bg-gray-700 transition-colors duration-200 ${
      isActive ? 'text-blue-400 bg-blue-900/20 border-r-2 border-blue-400' : ''
    }`}
  >
    {children}
  </Link>
);

const Sidebar: React.FC = () => {
  const location = useLocation();
  
  const isActive = (path: string) => location.pathname === path;

  return (
    <aside className="fixed left-0 top-16 h-screen w-64 bg-slate-800/95 backdrop-blur-lg border-r border-white/10 overflow-y-auto z-40">
      <div className="p-4">
        <h2 className="text-lg font-semibold text-white mb-4">Navigation</h2>
        
        {/* Main Pages */}
        <SidebarSection title="Main Pages" defaultOpen={true}>
          <SidebarLink to="/" isActive={isActive('/')}>
            Home
          </SidebarLink>
          <SidebarLink to="/about" isActive={isActive('/about')}>
            About
          </SidebarLink>
          <SidebarLink to="/services" isActive={isActive('/services')}>
            Services Overview
          </SidebarLink>
          <SidebarLink to="/services-showcase" isActive={isActive('/services-showcase')}>
            Services Showcase
          </SidebarLink>
          <SidebarLink to="/contact" isActive={isActive('/contact')}>
            Contact
          </SidebarLink>
          <SidebarLink to="/blog" isActive={isActive('/blog')}>
            Blog
          </SidebarLink>
        </SidebarSection>

        {/* AI & Technology Services */}
        <SidebarSection title="AI & Technology Services">
          <SidebarLink to="/ai-autonomous-business-manager" isActive={isActive('/ai-autonomous-business-manager')}>
            AI Autonomous Business Manager
          </SidebarLink>
          <SidebarLink to="/ai-autonomous-research-assistant" isActive={isActive('/ai-autonomous-research-assistant')}>
            AI Research Assistant
          </SidebarLink>
          <SidebarLink to="/ai-autonomous-systems-platform" isActive={isActive('/ai-autonomous-systems-platform')}>
            AI Systems Platform
          </SidebarLink>
          <SidebarLink to="/ai-business-intelligence-suite" isActive={isActive('/ai-business-intelligence-suite')}>
            AI Business Intelligence
          </SidebarLink>
          <SidebarLink to="/ai-content-generator" isActive={isActive('/ai-content-generator')}>
            AI Content Generator
          </SidebarLink>
          <SidebarLink to="/ai-code-review" isActive={isActive('/ai-code-review')}>
            AI Code Review
          </SidebarLink>
          <SidebarLink to="/ai-autonomous-decision-engine" isActive={isActive('/ai-autonomous-decision-engine')}>
            AI Decision Engine
          </SidebarLink>
          <SidebarLink to="/ai-autonomous-ecosystem" isActive={isActive('/ai-autonomous-ecosystem')}>
            AI Ecosystem
          </SidebarLink>
          <SidebarLink to="/ai-autonomous-business-operations" isActive={isActive('/ai-autonomous-business-operations')}>
            AI Business Operations
          </SidebarLink>
          <SidebarLink to="/ai-autonomous-business-process-automation" isActive={isActive('/ai-autonomous-business-process-automation')}>
            AI Process Automation
          </SidebarLink>
          <SidebarLink to="/ai-autonomous-creative-director" isActive={isActive('/ai-autonomous-creative-director')}>
            AI Creative Director
          </SidebarLink>
          <SidebarLink to="/ai-autonomous-data" isActive={isActive('/ai-autonomous-data')}>
            AI Data Management
          </SidebarLink>
          <SidebarLink to="/ai-autonomous-devops" isActive={isActive('/ai-autonomous-devops')}>
            AI DevOps
          </SidebarLink>
          <SidebarLink to="/ai-autonomous-education-professor" isActive={isActive('/ai-autonomous-education-professor')}>
            AI Education
          </SidebarLink>
          <SidebarLink to="/ai-autonomous-healthcare-physician" isActive={isActive('/ai-autonomous-healthcare-physician')}>
            AI Healthcare
          </SidebarLink>
          <SidebarLink to="/ai-autonomous-legal-counsel" isActive={isActive('/ai-autonomous-legal-counsel')}>
            AI Legal Counsel
          </SidebarLink>
          <SidebarLink to="/ai-autonomous-logistics" isActive={isActive('/ai-autonomous-logistics')}>
            AI Logistics
          </SidebarLink>
          <SidebarLink to="/ai-autonomous-manufacturing" isActive={isActive('/ai-autonomous-manufacturing')}>
            AI Manufacturing
          </SidebarLink>
          <SidebarLink to="/ai-autonomous-robotics" isActive={isActive('/ai-autonomous-robotics')}>
            AI Robotics
          </SidebarLink>
          <SidebarLink to="/ai-autonomous-security" isActive={isActive('/ai-autonomous-security')}>
            AI Security
          </SidebarLink>
          <SidebarLink to="/ai-autonomous-testing" isActive={isActive('/ai-autonomous-testing')}>
            AI Testing
          </SidebarLink>
          <SidebarLink to="/ai-autonomous-vehicle-platform" isActive={isActive('/ai-autonomous-vehicle-platform')}>
            AI Vehicle Platform
          </SidebarLink>
          <SidebarLink to="/ai-autonomous-vehicles" isActive={isActive('/ai-autonomous-vehicles')}>
            AI Vehicles
          </SidebarLink>
          <SidebarLink to="/ai-biomedical-research" isActive={isActive('/ai-biomedical-research')}>
            AI Biomedical Research
          </SidebarLink>
          <SidebarLink to="/ai-biotech-drug-discovery" isActive={isActive('/ai-biotech-drug-discovery')}>
            AI Drug Discovery
          </SidebarLink>
          <SidebarLink to="/ai-blockchain-analytics" isActive={isActive('/ai-blockchain-analytics')}>
            AI Blockchain Analytics
          </SidebarLink>
          <SidebarLink to="/ai-brain-computer-interface" isActive={isActive('/ai-brain-computer-interface')}>
            AI Brain Interface
          </SidebarLink>
          <SidebarLink to="/ai-climate-prediction" isActive={isActive('/ai-climate-prediction')}>
            AI Climate Prediction
          </SidebarLink>
          <SidebarLink to="/ai-computer-vision-platform" isActive={isActive('/ai-computer-vision-platform')}>
            AI Computer Vision
          </SidebarLink>
          <SidebarLink to="/ai-consciousness-evolution" isActive={isActive('/ai-consciousness-evolution')}>
            AI Consciousness
          </SidebarLink>
          <SidebarLink to="/ai-content-creation" isActive={isActive('/ai-content-creation')}>
            AI Content Creation
          </SidebarLink>
          <SidebarLink to="/ai-content-factory" isActive={isActive('/ai-content-factory')}>
            AI Content Factory
          </SidebarLink>
          <SidebarLink to="/ai-content-marketing-automation" isActive={isActive('/ai-content-marketing-automation')}>
            AI Marketing Automation
          </SidebarLink>
          <SidebarLink to="/ai-creativity-studio" isActive={isActive('/ai-creativity-studio')}>
            AI Creativity Studio
          </SidebarLink>
          <SidebarLink to="/ai-market-research" isActive={isActive('/ai-market-research')}>
            AI Market Research
          </SidebarLink>
          <SidebarLink to="/ai-powered-enterprise-security" isActive={isActive('/ai-powered-enterprise-security')}>
            AI Enterprise Security
          </SidebarLink>
        </SidebarSection>

        {/* Advanced Services */}
        <SidebarSection title="Advanced Services">
          <SidebarLink to="/advanced-ai-automation-services" isActive={isActive('/advanced-ai-automation-services')}>
            Advanced AI Automation
          </SidebarLink>
          <SidebarLink to="/advanced-cybersecurity-suite" isActive={isActive('/advanced-cybersecurity-suite')}>
            Advanced Cybersecurity
          </SidebarLink>
          <SidebarLink to="/advanced-it-infrastructure-services" isActive={isActive('/advanced-it-infrastructure-services')}>
            Advanced IT Infrastructure
          </SidebarLink>
          <SidebarLink to="/advanced-research-automation" isActive={isActive('/advanced-research-automation')}>
            Advanced Research Automation
          </SidebarLink>
          <SidebarLink to="/affiliate-attribution-hub" isActive={isActive('/affiliate-attribution-hub')}>
            Affiliate Attribution Hub
          </SidebarLink>
          <SidebarLink to="/agentic-rag" isActive={isActive('/agentic-rag')}>
            Agentic RAG
          </SidebarLink>
          <SidebarLink to="/agentic-rag-helpdesk" isActive={isActive('/agentic-rag-helpdesk')}>
            Agentic RAG Helpdesk
          </SidebarLink>
          <SidebarLink to="/agentic-sales-outreach" isActive={isActive('/agentic-sales-outreach')}>
            Agentic Sales Outreach
          </SidebarLink>
          <SidebarLink to="/accessibility-auditor" isActive={isActive('/accessibility-auditor')}>
            Accessibility Auditor
          </SidebarLink>
          <SidebarLink to="/accessibility-scanner" isActive={isActive('/accessibility-scanner')}>
            Accessibility Scanner
          </SidebarLink>
          <SidebarLink to="/soc2-compliance-automation" isActive={isActive('/soc2-compliance-automation')}>
            SOC2 Compliance Automation
          </SidebarLink>
        </SidebarSection>

        {/* 5G & Network Services */}
        <SidebarSection title="5G & Network Services">
          <SidebarLink to="/5g-enterprise-network" isActive={isActive('/5g-enterprise-network')}>
            5G Enterprise Network
          </SidebarLink>
          <SidebarLink to="/5g-enterprise-solutions" isActive={isActive('/5g-enterprise-solutions')}>
            5G Enterprise Solutions
          </SidebarLink>
          <SidebarLink to="/5g-network-optimization" isActive={isActive('/5g-network-optimization')}>
            5G Network Optimization
          </SidebarLink>
          <SidebarLink to="/5g-private-network-solutions" isActive={isActive('/5g-private-network-solutions')}>
            5G Private Network Solutions
          </SidebarLink>
        </SidebarSection>

        {/* Quantum & Advanced Tech */}
        <SidebarSection title="Quantum & Advanced Tech">
          <SidebarLink to="/quantum-neural-network-platform" isActive={isActive('/quantum-neural-network-platform')}>
            Quantum Neural Network Platform
          </SidebarLink>
          <SidebarLink to="/quantum-edge-computing-platform" isActive={isActive('/quantum-edge-computing-platform')}>
            Quantum Edge Computing
          </SidebarLink>
          <SidebarLink to="/quantum-technology" isActive={isActive('/quantum-technology')}>
            Quantum Technology
          </SidebarLink>
          <SidebarLink to="/quantum-cloud-infrastructure" isActive={isActive('/quantum-cloud-infrastructure')}>
            Quantum Cloud Infrastructure
          </SidebarLink>
          <SidebarLink to="/quantum-financial-trading" isActive={isActive('/quantum-financial-trading')}>
            Quantum Financial Trading
          </SidebarLink>
          <SidebarLink to="/quantum-services" isActive={isActive('/quantum-services')}>
            Quantum Services
          </SidebarLink>
        </SidebarSection>

        {/* Infrastructure & Operations */}
        <SidebarSection title="Infrastructure & Operations">
          <SidebarLink to="/autonomous-business-operations-platform" isActive={isActive('/autonomous-business-operations-platform')}>
            Autonomous Business Operations Platform
          </SidebarLink>
          <SidebarLink to="/autonomous-devops-platform" isActive={isActive('/autonomous-devops-platform')}>
            Autonomous DevOps Platform
          </SidebarLink>
          <SidebarLink to="/ai-powered-it-asset-management" isActive={isActive('/ai-powered-it-asset-management')}>
            AI-Powered IT Asset Management
          </SidebarLink>
          <SidebarLink to="/it-onsite-services" isActive={isActive('/it-onsite-services')}>
            IT Onsite Services
          </SidebarLink>
          <SidebarLink to="/it-services" isActive={isActive('/it-services')}>
            IT Services
          </SidebarLink>
          <SidebarLink to="/iot-services" isActive={isActive('/iot-services')}>
            IoT Services
          </SidebarLink>
          <SidebarLink to="/mobile-services" isActive={isActive('/mobile-services')}>
            Mobile Services
          </SidebarLink>
          <SidebarLink to="/green-it" isActive={isActive('/green-it')}>
            Green IT
          </SidebarLink>
          <SidebarLink to="/space-tech" isActive={isActive('/space-tech')}>
            Space Tech
          </SidebarLink>
        </SidebarSection>

        {/* Business Solutions */}
        <SidebarSection title="Business Solutions">
          <SidebarLink to="/micro-saas" isActive={isActive('/micro-saas')}>
            Micro SaaS
          </SidebarLink>
          <SidebarLink to="/industry-solutions" isActive={isActive('/industry-solutions')}>
            Industry Solutions
          </SidebarLink>
          <SidebarLink to="/manufacturing-solutions" isActive={isActive('/manufacturing-solutions')}>
            Manufacturing Solutions
          </SidebarLink>
          <SidebarLink to="/marketplace" isActive={isActive('/marketplace')}>
            Marketplace
          </SidebarLink>
          <SidebarLink to="/enterprise-it" isActive={isActive('/enterprise-it')}>
            Enterprise IT
          </SidebarLink>
        </SidebarSection>

        {/* Support & Resources */}
        <SidebarSection title="Support & Resources">
          <SidebarLink to="/help-center" isActive={isActive('/help-center')}>
            Help Center
          </SidebarLink>
          <SidebarLink to="/support" isActive={isActive('/support')}>
            Support
          </SidebarLink>
          <SidebarLink to="/tutorials" isActive={isActive('/tutorials')}>
            Tutorials
          </SidebarLink>
          <SidebarLink to="/webinars" isActive={isActive('/webinars')}>
            Webinars
          </SidebarLink>
          <SidebarLink to="/white-papers" isActive={isActive('/white-papers')}>
            White Papers
          </SidebarLink>
          <SidebarLink to="/news" isActive={isActive('/news')}>
            News
          </SidebarLink>
          <SidebarLink to="/events" isActive={isActive('/events')}>
            Events
          </SidebarLink>
          <SidebarLink to="/case-studies" isActive={isActive('/case-studies')}>
            Case Studies
          </SidebarLink>
          <SidebarLink to="/research-development" isActive={isActive('/research-development')}>
            Research & Development
          </SidebarLink>
        </SidebarSection>

        {/* Company Pages */}
        <SidebarSection title="Company">
          <SidebarLink to="/team" isActive={isActive('/team')}>
            Team
          </SidebarLink>
          <SidebarLink to="/leadership" isActive={isActive('/leadership')}>
            Leadership
          </SidebarLink>
          <SidebarLink to="/partners" isActive={isActive('/partners')}>
            Partners
          </SidebarLink>
          <SidebarLink to="/careers" isActive={isActive('/careers')}>
            Careers
          </SidebarLink>
          <SidebarLink to="/pricing" isActive={isActive('/pricing')}>
            Pricing
          </SidebarLink>
        </SidebarSection>

        {/* Legal & Resources */}
        <SidebarSection title="Legal & Resources">
          <SidebarLink to="/privacy" isActive={isActive('/privacy')}>
            Privacy Policy
          </SidebarLink>
          <SidebarLink to="/terms" isActive={isActive('/terms')}>
            Terms of Service
          </SidebarLink>
          <SidebarLink to="/cookies" isActive={isActive('/cookies')}>
            Cookies
          </SidebarLink>
          <SidebarLink to="/sitemap" isActive={isActive('/sitemap')}>
            Sitemap
          </SidebarLink>
        </SidebarSection>

        {/* Special Solutions */}
        <SidebarSection title="Special Solutions">
          <SidebarLink to="/zero-trust-network-architecture" isActive={isActive('/zero-trust-network-architecture')}>
            Zero Trust Network Architecture
          </SidebarLink>
          <SidebarLink to="/service-innovation-hub" isActive={isActive('/service-innovation-hub')}>
            Service Innovation Hub
          </SidebarLink>
          <SidebarLink to="/service-portfolio-dashboard" isActive={isActive('/service-portfolio-dashboard')}>
            Service Portfolio Dashboard
          </SidebarLink>
          <SidebarLink to="/service-recommendations" isActive={isActive('/service-recommendations')}>
            Service Recommendations
          </SidebarLink>
          <SidebarLink to="/service-comparison" isActive={isActive('/service-comparison')}>
            Service Comparison
          </SidebarLink>
        </SidebarSection>
      </div>
    </aside>
  );
};

export default Sidebar;