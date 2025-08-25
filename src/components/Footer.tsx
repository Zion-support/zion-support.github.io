import React from "react";
import { Link } from "react-router-dom";

export function Footer() {
  const currentYear = new Date().getFullYear();

  const footerSections = [
    {
      title: "AI & Autonomous Systems",
      links: [
        { label: "AI Autonomous Business Manager", path: "/ai-autonomous-business-manager" },
        { label: "AI Autonomous Research Assistant", path: "/ai-autonomous-research-assistant" },
        { label: "AI Autonomous Decision Engine", path: "/ai-autonomous-decision-engine" },
        { label: "AI Autonomous Code Review", path: "/ai-autonomous-code-review" },
        { label: "AI Autonomous Creative Director", path: "/ai-autonomous-creative-director" },
        { label: "AI Autonomous Data", path: "/ai-autonomous-data" },
        { label: "AI Autonomous Research", path: "/ai-autonomous-research" },
        { label: "AI Autonomous Systems Platform", path: "/ai-autonomous-systems-platform" },
        { label: "AI Autonomous DevOps", path: "/ai-autonomous-devops" },
        { label: "AI Autonomous Education Professor", path: "/ai-autonomous-education-professor" },
        { label: "AI Autonomous Healthcare Physician", path: "/ai-autonomous-healthcare-physician" },
        { label: "AI Autonomous Learning System", path: "/ai-autonomous-learning-system" },
        { label: "AI Autonomous Legal Counsel", path: "/ai-autonomous-legal-counsel" },
        { label: "AI Autonomous Logistics", path: "/ai-autonomous-logistics" },
        { label: "AI Autonomous Manufacturing", path: "/ai-autonomous-manufacturing" },
        { label: "AI Autonomous Robotics", path: "/ai-autonomous-robotics" },
        { label: "AI Autonomous Scientific Researcher", path: "/ai-autonomous-scientific-researcher" },
        { label: "AI Autonomous Security", path: "/ai-autonomous-security" },
        { label: "AI Autonomous Testing", path: "/ai-autonomous-testing" },
        { label: "AI Autonomous Vehicle Platform", path: "/ai-autonomous-vehicle-platform" },
        { label: "AI Autonomous Vehicles", path: "/ai-autonomous-vehicles" },
        { label: "AI Autonomous Venture Capitalist", path: "/ai-autonomous-venture-capitalist" }
      ]
    },
    {
      title: "AI Specialized Solutions",
      links: [
        { label: "AI Biomedical Research", path: "/ai-biomedical-research" },
        { label: "AI Biotech Drug Discovery", path: "/ai-biotech-drug-discovery" },
        { label: "AI Blockchain Analytics", path: "/ai-blockchain-analytics" },
        { label: "AI Blockchain Governance", path: "/ai-blockchain-governance" },
        { label: "AI Brain Computer Interface", path: "/ai-brain-computer-interface" },
        { label: "AI Brain Interface", path: "/ai-brain-interface" },
        { label: "AI Brand Personality Generator", path: "/ai-brand-personality-generator" },
        { label: "AI Business Intelligence Elite", path: "/ai-business-intelligence-elite" },
        { label: "AI Business Intelligence Pro", path: "/ai-business-intelligence-pro" },
        { label: "AI Business Intelligence Suite", path: "/ai-business-intelligence-suite" },
        { label: "AI Business Intelligence", path: "/ai-business-intelligence" },
        { label: "AI Climate Prediction Engine", path: "/ai-climate-prediction-engine" },
        { label: "AI Climate Prediction Platform", path: "/ai-climate-prediction-platform" },
        { label: "AI Climate Prediction", path: "/ai-climate-prediction" },
        { label: "AI Code Generation Enterprise", path: "/ai-code-generation-enterprise" },
        { label: "AI Code Review Copilot", path: "/ai-code-review-copilot" },
        { label: "AI Code Review", path: "/ai-code-review" },
        { label: "AI Compliance Automation", path: "/ai-compliance-automation" },
        { label: "AI Computer Vision Platform", path: "/ai-computer-vision-platform" },
        { label: "AI Consciousness Evolution", path: "/ai-consciousness-evolution" },
        { label: "AI Consciousness Evolution Platform", path: "/ai-consciousness-evolution-platform" },
        { label: "AI Consciousness Simulation Platform", path: "/ai-consciousness-simulation-platform" },
        { label: "AI Consciousness Simulation", path: "/ai-consciousness-simulation" },
        { label: "AI Consciousness Simulator", path: "/ai-consciousness-simulator" },
        { label: "AI Content Creation Revolution", path: "/ai-content-creation-revolution" },
        { label: "AI Content Creation", path: "/ai-content-creation" },
        { label: "AI Content Factory", path: "/ai-content-factory" },
        { label: "AI Content Generation Automation", path: "/ai-content-generation-automation" },
        { label: "AI Content Generation Pro", path: "/ai-content-generation-pro" },
        { label: "AI Content Generator", path: "/ai-content-generator" },
        { label: "AI Content Marketing Automation", path: "/ai-content-marketing-automation" },
        { label: "AI Content Personalization Engine", path: "/ai-content-personalization-engine" },
        { label: "AI Creativity Studio", path: "/ai-creativity-studio" },
        { label: "AI Market Research", path: "/ai-market-research" },
        { label: "AI Powered Enterprise Security", path: "/ai-powered-enterprise-security" },
        { label: "AI Workflow Automation", path: "/ai-workflow-automation" }
      ]
    },
    {
      title: "Core Services",
      links: [
        { label: "AI & Autonomous Systems", path: "/services/ai-autonomous-systems" },
        { label: "Cybersecurity", path: "/services/cybersecurity" },
        { label: "Advanced Cybersecurity Suite", path: "/advanced-cybersecurity-suite" },
        { label: "IT Infrastructure", path: "/services/it-infrastructure" },
        { label: "Quantum Technology", path: "/services/quantum-technology" },
        { label: "Quantum Neural Network Platform", path: "/quantum-neural-network-platform" },
        { label: "Micro SAAS Solutions", path: "/services/micro-saas-solutions" },
        { label: "Industry Solutions", path: "/services/industry-solutions" },
        { label: "Accessibility Auditor", path: "/accessibility-auditor" },
        { label: "Affiliate Attribution Hub", path: "/affiliate-attribution-hub" },
        { label: "SOC2 Compliance Automation", path: "/soc2-compliance-automation" },
        { label: "5G Enterprise Solutions", path: "/5g-enterprise-solutions" },
        { label: "Autonomous Business Operations Platform", path: "/autonomous-business-operations-platform" },
        { label: "AI Powered IT Asset Management", path: "/ai-powered-it-asset-management" }
      ]
    },
    {
      title: "Solutions & Industries",
      links: [
        { label: "Enterprise Solutions", path: "/solutions/enterprise" },
        { label: "Healthcare Solutions", path: "/solutions/healthcare" },
        { label: "Financial Solutions", path: "/solutions/financial" },
        { label: "Manufacturing Solutions", path: "/solutions/manufacturing" },
        { label: "Retail Solutions", path: "/solutions/retail" },
        { label: "Government Solutions", path: "/solutions/government" },
        { label: "Space Technology", path: "/space-tech" },
        { label: "Research & Development", path: "/research-development" },
        { label: "Quantum Cloud Infrastructure", path: "/quantum-cloud-infrastructure" },
        { label: "Quantum Financial Trading", path: "/quantum-financial-trading" },
        { label: "Quantum Services", path: "/quantum-services" }
      ]
    },
    {
      title: "Company & Resources",
      links: [
        { label: "About Us", path: "/about" },
        { label: "Our Mission", path: "/mission" },
        { label: "Team", path: "/team" },
        { label: "Leadership", path: "/leadership" },
        { label: "Partners", path: "/partners" },
        { label: "Careers", path: "/careers" },
        { label: "Case Studies", path: "/case-studies" },
        { label: "Testimonials", path: "/testimonials" },
        { label: "News", path: "/news" },
        { label: "Blog", path: "/blog" },
        { label: "Events", path: "/events" },
        { label: "Webinars", path: "/webinars" },
        { label: "White Papers", path: "/white-papers" },
        { label: "Documentation", path: "/docs" },
        { label: "Help Center", path: "/help" },
        { label: "Support", path: "/support" },
        { label: "FAQ", path: "/faq" },
        { label: "Marketplace", path: "/marketplace" },
        { label: "Community", path: "/community" },
        { label: "Pricing", path: "/pricing" },
        { label: "Contact", path: "/contact" }
      ]
    }
  ];

  // Fixed social media links with proper error handling
  const socialLinks = [
    { 
      name: 'LinkedIn', 
      url: 'https://www.linkedin.com/company/zion-tech-group', 
      icon: '💼',
      fallback: 'https://linkedin.com'
    },
    { 
      name: 'Twitter', 
      url: 'https://twitter.com/ziontechgroup', 
      icon: '🐦',
      fallback: 'https://twitter.com'
    },
    { 
      name: 'GitHub', 
      url: 'https://github.com/Zion-Holdings', 
      icon: '💻',
      fallback: 'https://github.com'
    },
    { 
      name: 'YouTube', 
      url: 'https://youtube.com/@ziontechgroup', 
      icon: '📺',
      fallback: 'https://youtube.com'
    },
    { 
      name: 'Facebook', 
      url: 'https://facebook.com/ziontechgroup', 
      icon: '📘',
      fallback: 'https://facebook.com'
    },
    { 
      name: 'Instagram', 
      url: 'https://instagram.com/ziontechgroup', 
      icon: '📷',
      fallback: 'https://instagram.com'
    }
  ];

  const contactInfo = {
    phone: '+1 302 464 0950',
    email: 'kleber@ziontechgroup.com',
    address: '364 E Main St STE 1008, Middletown DE 19709'
  };

  const handleSocialLinkClick = (link: typeof socialLinks[0], e: React.MouseEvent) => {
    e.preventDefault();
    
    // Try to open the primary URL first
    const newWindow = window.open(link.url, '_blank', 'noopener,noreferrer');
    
    // If the window fails to open, try the fallback
    if (!newWindow) {
      window.open(link.fallback, '_blank', 'noopener,noreferrer');
    }
  };

  const handleContactClick = (type: 'phone' | 'email') => {
    if (type === 'phone') {
      window.location.href = `tel:${contactInfo.phone.replace(/\s/g, '')}`;
    } else {
      window.location.href = `mailto:${contactInfo.email}`;
    }
  };

  return (
    <footer className="bg-zion-slate text-white py-12">
      <div className="relative container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8 mb-8">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <div className="mb-4">
              <span className="text-2xl font-bold bg-gradient-to-r from-zion-cyan via-zion-purple-light to-zion-purple bg-clip-text text-transparent">ZION</span>
            </div>
            <p className="text-zion-slate-light text-sm leading-relaxed mb-4">
              Empowering businesses with cutting-edge AI solutions and innovative technology services. 
              Transform your digital future with Zion Tech Group.
            </p>
            
            {/* Contact Information */}
            <div className="space-y-2 mb-4">
              <div className="flex items-center space-x-2 text-sm">
                <span className="text-zion-cyan">📞</span>
                <button 
                  onClick={() => handleContactClick('phone')}
                  className="text-zion-slate-light hover:text-zion-cyan transition-colors"
                >
                  {contactInfo.phone}
                </button>
              </div>
              <div className="flex items-center space-x-2 text-sm">
                <span className="text-zion-cyan">✉️</span>
                <button 
                  onClick={() => handleContactClick('email')}
                  className="text-zion-slate-light hover:text-zion-cyan transition-colors"
                >
                  {contactInfo.email}
                </button>
              </div>
              <div className="flex items-start space-x-2 text-sm">
                <span className="text-zion-cyan mt-1">📍</span>
                <span className="text-zion-slate-light">{contactInfo.address}</span>
              </div>
            </div>

            {/* Social Media Links */}
            <div className="flex flex-wrap gap-2">
              {socialLinks.map((link) => (
                <button
                  key={link.name}
                  onClick={(e) => handleSocialLinkClick(link, e)}
                  className="text-zion-slate-light hover:text-zion-cyan transition-colors text-lg"
                  title={link.name}
                >
                  {link.icon}
                </button>
              ))}
            </div>
          </div>

          {/* Footer Sections */}
          {footerSections.map((section) => (
            <div key={section.title}>
              <h3 className="text-white font-semibold mb-4 text-lg">{section.title}</h3>
              <ul className="space-y-2">
                {section.links.map((link) => (
                  <li key={link.path}>
                    <Link 
                      to={link.path} 
                      className="text-zion-slate-light hover:text-zion-cyan transition-colors text-sm"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Footer */}
        <div className="pt-8 border-t border-zion-blue-light">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-zion-slate-light text-sm">
              © {currentYear} Zion Tech Group. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <Link to="/privacy" className="text-zion-slate-light hover:text-zion-cyan text-sm transition-colors">
                Privacy Policy
              </Link>
              <Link to="/terms" className="text-zion-slate-light hover:text-zion-cyan text-sm transition-colors">
                Terms of Service
              </Link>
              <Link to="/cookies" className="text-zion-slate-light hover:text-zion-cyan text-sm transition-colors">
                Cookie Policy
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;