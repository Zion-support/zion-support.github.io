import React from 'react';
import { Link } from 'react-router-dom';


export function EnhancedFuturisticFooter(props: any) {
  const year = new Date().getFullYear();
  return (
    <footer style="{{{ borderTop: '1px solid #e5e7eb'; background: '#fafafa'; marginTop: 48}}"}>
      <div style="{{{ display: 'grid'; gridTemplateColumns: 'repeat(3; gap: 16; padding: '24px 16px'; maxWidth: 1100; margin: '0 auto'}}"}>
        <section>
          <h2 style="{{{ fontSize: 14; color: '#6b7280'; margin: '0 0 8px'}}"}>Company</h2>
          <nav aria-label="Company">
            <Link to="/about" style="{{{ display: 'block'; color: '#374151'}}"}>About</Link>
            <Link to="/careers" style="{{{ display: 'block'; color: '#374151'}}"}>Careers</Link>
            <Link to="/contact" style="{{{ display: 'block'; color: '#374151'}}"}>Contact</Link>
          </nav>
        </section>
        <section>
          <h2 style="{{{ fontSize: 14; color: '#6b7280'; margin: '0 0 8px'}}"}>Services</h2>
          <nav aria-label="Services">
            <Link to="/services" style="{{{ display: 'block'; color: '#374151'}}"}>All Services</Link>
            <Link to="/services/ai-services" style="{{{ display: 'block'; color: '#374151'}}"}>AI Services</Link>
            <Link to="/services/it-services" style="{{{ display: 'block'; color: '#374151'}}"}>IT Services</Link>
            <Link to="/services/micro-saas" style="{{{ display: 'block'; color: '#374151'}}"}>Micro SaaS</Link>
          </nav>
        </section>
        <section>
          <h2 style="{{{ fontSize: 14; color: '#6b7280'; margin: '0 0 8px'}}"}>Solutions</h2>
          <nav aria-label="Solutions">
            <Link to="/solutions" style="{{{ display: 'block'; color: '#374151'}}"}>Overview</Link>
            <Link to="/solutions/enterprise" style="{{{ display: 'block'; color: '#374151'}}"}>Enterprise</Link>
          </nav>
        </section>
      </div>
      <div style="{{{ padding: '12px 16px'; borderTop: '1px solid #e5e7eb'; color: '#6b7280'; textAlign: 'center'}}"}>© {year} Zion Tech Group</div>
    </footer>
  );
}

export default EnhancedFuturisticFooter;
    
    
    {
      title: 'Revolutionary 2030 Services',
      featured: true,
      links: [
        { name: 'Revolutionary Services 2030', href: '/revolutionary-services-2030', featured: true },

        { name: 'Quantum AI Trading Platform', href: '/services/quantum-ai-trading', featured: true },
        { name: 'Neural Interface Platform', href: '/services/neural-interface', featured: true },
        { name: 'Holographic Workspace Platform', href: '/services/holographic-workspace', featured: true },
        { name: 'BioDigital Twin Platform', href: '/services/biodigital-twin', featured: true },
        { name: 'Space Debris Tracking System', href: '/services/space-debris-tracking', featured: true },
        { name: 'AI Ethics Guardian Platform', href: '/services/ai-ethics-guardian', featured: true },
        { name: 'Metaverse Builder Platform', href: '/services/metaverse-builder', featured: true },
        { name: 'AI Autonomous Operations', href: '/revolutionary-services-2030#ai-autonomous-business-operations-2030' },
        { name: 'Quantum AI Cybersecurity', href: '/revolutionary-services-2030#quantum-ai-cybersecurity-2030' },
        { name: 'AI Content Creation Studio', href: '/revolutionary-services-2030#ai-content-creation-studio-2030' }
      ]
    },
    {

      title: 'AI & Analytics Services',
      featured: true,
      links: [
        { name: 'AI Enterprise Orchestrator', href: '/services/ai-enterprise-orchestrator' },
        { name: 'AI Business Intelligence', href: '/services/ai-business-intelligence' },
        { name: 'AI Sales Copilot', href: '/services/ai-sales-copilot' },
        { name: 'AI Compliance Assistant', href: '/services/ai-compliance-assistant' },
        { name: 'AI Workflow Orchestrator', href: '/services/ai-workflow-orchestrator' },
        { name: 'AI Customer Success Platform', href: '/services/ai-customer-success-platform' },
        { name: 'AI Data Governance', href: '/services/ai-data-governance' },
        { name: 'AI Healthcare Analytics', href: '/services/ai-healthcare-analytics' },
        { name: 'AI Project Management Platform', href: '/services/ai-project-management-platform' },
        { name: 'AI Cybersecurity Threat Detection', href: '/services/ai-cybersecurity-threat-detection' },
        { name: 'AI Financial Trading Platform', href: '/services/ai-financial-trading-platform' },
        { name: 'AI Healthcare Analytics Platform', href: '/services/ai-healthcare-analytics-platform' },
        { name: 'AI Auto Email Responder', href: '/services/ai-auto-email-responder' },
        { name: 'LLM Content Studio', href: '/services/llm-content-studio' }
      ]
    },
    {
      title: 'Infrastructure & Security',
      featured: true,
      links: [
        { name: 'Cloud & DevOps', href: '/services/cloud-devops', featured: true },
        { name: 'Digital Twin Solutions', href: '/services/digital-twin', featured: true },
        { name: 'IT Infrastructure', href: '/services/it-infrastructure', featured: true },
        { name: 'Data Analytics', href: '/services/data-analytics', featured: true },
        { name: 'Cybersecurity Solutions', href: '/services/ai-cybersecurity-suite', featured: true },
        { name: 'Zero Trust Security', href: '/services/zero-trust-network-architecture', featured: true },
        { name: 'AI Ethics & Governance', href: '/services/ai-cybersecurity-suite', featured: true },
        { name: 'IoT & Edge Computing', href: '/services/iot-edge', featured: true },
        { name: 'Quantum Computing', href: '/services/quantum-computing', featured: true },
        { name: 'Green IT Solutions', href: '/services/sustainability', featured: true }
      ]
    },
    {
      title: 'Industry Solutions',
      featured: false,
      links: [
        { name: 'Healthcare Solutions', href: '/solutions#healthcare', featured: false },
        { name: 'Financial Services', href: '/solutions#financial', featured: false },
        { name: 'Legal Services', href: '/solutions#legal', featured: false },
        { name: 'Research & Academia', href: '/research-development', featured: false },
        { name: 'Manufacturing', href: '/solutions#manufacturing', featured: false },
        { name: 'Retail & E-commerce', href: '/solutions#retail', featured: false },
        { name: 'Government & Public Sector', href: '/solutions#government', featured: false },
        { name: 'Energy & Sustainability', href: '/solutions#energy', featured: false },
        { name: 'Space & Aerospace', href: '/services/space-tech', featured: false },
        { name: 'Education & Training', href: '/training', featured: false }
      ]
    },
    {
      title: 'Business Solutions',
      featured: true,
      links: [
        { name: 'AI Compliance Copilot', href: '/services/ai-compliance-copilot' },
        { name: 'Zero Trust Architecture', href: '/services/zero-trust-network-architecture' },
        { name: 'AI Cybersecurity Suite', href: '/services/ai-cybersecurity-suite' },
        { name: 'AI Cybersecurity Threat Detection', href: '/services/ai-cybersecurity-threat-detection' },
        { name: 'Quantum AI Platform', href: '/services/quantum-ai-platform' },
        { name: 'AI Healthcare Analytics', href: '/services/ai-healthcare-analytics' },
        { name: 'Edge Computing Platform', href: '/services/edge-computing-platform' },
        { name: 'Blockchain Solutions', href: '/services/blockchain-enterprise-solutions' },
        { name: 'Space Technology', href: '/services/space-tech' },
        { name: 'Micro SaaS Products', href: '/services/micro-saas-solutions', featured: true },
        { name: 'Enterprise Solutions', href: '/solutions', featured: true },
        { name: 'AI Workflow Automation', href: '/services/ai-workflow-orchestrator', featured: true },
        { name: 'AI Project Management', href: '/services/ai-project-management-platform', featured: true },
        { name: 'AI Marketing Automation', href: '/services/ai-marketing-automation', featured: true },
        { name: 'AI HR & Recruitment', href: '/services/ai-hr-platform', featured: true },
        { name: 'AI Supply Chain', href: '/services/ai-supply-chain-optimization', featured: true },
        { name: 'AI Quality Assurance', href: '/services/ai-predictive-maintenance', featured: true },
        { name: 'AI Sales Intelligence', href: '/services/ai-marketing-automation', featured: true },
        { name: 'AI Innovation Management', href: '/services/ai-workflow-orchestrator', featured: true }
      ]
    },
    {
      title: 'Emerging Technologies',
      featured: true,
      links: [
        { name: 'Quantum Computing', href: '/services/quantum-computing', featured: true },
        { name: 'IoT Edge Computing', href: '/services/iot-edge-computing', featured: true },
        { name: 'Digital Twin Platform', href: '/services/digital-twin', featured: true },
        { name: 'Space Technology', href: '/services/space-tech', featured: true },
        { name: 'Sustainable Technology', href: '/services/sustainable-technology', featured: true },
        { name: 'Blockchain & Web3', href: '/services/blockchain-web3', featured: true },
        { name: 'Autonomous Systems', href: '/services/autonomous-systems', featured: true },
        { name: 'Neural Interfaces', href: '/services/neural-interface', featured: true },
        { name: 'Holographic Computing', href: '/services/holographic-workspace', featured: true },
        { name: 'BioDigital Twins', href: '/services/biodigital-twin', featured: true }
      ]
    },
    {
      title: 'Infrastructure & DevOps',
      featured: false,
      links: [
        { name: 'Comprehensive Pricing 2027', href: '/comprehensive-pricing-guide-2027', featured: true },
        { name: 'Pricing Guide 2030', href: '/comprehensive-pricing-guide-2030', featured: true },
        { name: 'Blog & Insights', href: '/blog', featured: false },
        { name: 'FAQ & Help Center', href: '/faq', featured: false },
        { name: 'Documentation', href: '/docs', featured: false },
        { name: 'Developer Portal', href: '/developers', featured: false },
        { name: 'Training & Certification', href: '/training', featured: false },
        { name: 'Community Forum', href: '/community', featured: false },
        { name: 'Success Stories', href: '/case-studies', featured: false },
        { name: 'White Papers', href: '/white-papers', featured: false }
      ]
    },
    {
      title: 'Company & Support',
      featured: false,
      links: [
        { name: 'About Zion Tech Group', href: '/about', featured: false },
        { name: 'Our Team', href: '/team', featured: false },
        { name: 'Careers', href: '/careers', featured: false },
        { name: 'Partners', href: '/partners', featured: false },
        { name: 'Request Quote', href: '/request-quote', featured: true },
        { name: 'Schedule Demo', href: '/demo', featured: false },
        { name: 'Partnerships', href: '/partners', featured: false },
        { name: 'Press & Media', href: '/press', featured: false },
        { name: 'Legal & Privacy', href: '/legal', featured: false },
        { name: 'Support Center', href: '/support', featured: false }
      ]
    }
  ];
}
