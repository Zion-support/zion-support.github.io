import React from 'react';
import { Link } from 'react-router-dom';
import { Brain, Shield, Cpu, Rocket, Globe, Zap, Mail, Phone, MapPin, ExternalLink } from 'lucide-react';

export function Footer() {
  const currentYear = new Date().getFullYear();

  const footerSections = [
    {
      title: "AI & Micro SAAS Services",
      icon: Brain,
      links: [
        { label: "AI & Autonomous Systems", path: "/services/ai-autonomous-systems", description: "Intelligent automation solutions" },
        { label: "AI Research Assistant", path: "/ai-autonomous-research-assistant", description: "Autonomous research platform" },
        { label: "Quantum Neural Networks", path: "/quantum-neural-network-platform", description: "Quantum AI training" },
        { label: "Autonomous Business Platform", path: "/autonomous-business-operations-platform", description: "Self-optimizing operations" },
        { label: "AI Asset Management", path: "/ai-powered-it-asset-management", description: "Intelligent IT asset tracking" },
        { label: "Quantum Technology", path: "/services/quantum-technology", description: "Quantum computing solutions" },
        { label: "IT Infrastructure", path: "/services/it-infrastructure", description: "Modern infrastructure services" },
        { label: "Micro SAAS Solutions", path: "/services/micro-saas-solutions", description: "Specialized business applications" },
        { label: "Cybersecurity", path: "/services/cybersecurity", description: "Advanced security solutions" },
        { label: "SOC2 Compliance Automation", path: "/soc2-compliance-automation", description: "Automated compliance" },
        { label: "Industry Solutions", path: "/services/industry-solutions", description: "Sector-specific solutions" },
        { label: "AI & Machine Learning", path: "/services#ai-ml", description: "ML and AI services" },
        { label: "Cloud & Infrastructure", path: "/services#cloud", description: "Cloud optimization" },
        { label: "5G Enterprise Solutions", path: "/5g-enterprise-solutions", description: "Next-gen networking" },
        { label: "Blockchain Solutions", path: "/services#blockchain", description: "Distributed ledger tech" },
        { label: "IoT & Edge Computing", path: "/services#iot", description: "Connected device solutions" }
      ]
    },
    {
      title: "Enterprise Solutions",
      icon: Rocket,
      links: [
        { label: "Enterprise Solutions", path: "/solutions/enterprise", description: "Large-scale business solutions" },
        { label: "Healthcare Solutions", path: "/solutions/healthcare", description: "Medical technology solutions" },
        { label: "Financial Solutions", path: "/solutions/financial", description: "Fintech and banking solutions" },
        { label: "Manufacturing Solutions", path: "/solutions/manufacturing", description: "Industry 4.0 solutions" },
        { label: "Retail Solutions", path: "/solutions/retail", description: "E-commerce and retail tech" },
        { label: "Government Solutions", path: "/solutions/government", description: "Public sector technology" },
        { label: "Business Intelligence", path: "/services/business-intelligence", description: "Data-driven insights" },
        { label: "Marketing Automation", path: "/services/ai-marketing", description: "AI-powered marketing" },
        { label: "HR & Recruitment", path: "/services/ai-hr", description: "Human resources automation" },
        { label: "Legal Tech", path: "/services/ai-legal", description: "Legal technology solutions" }
      ]
    },
    {
      title: "Emerging Technologies",
      icon: Zap,
      links: [
        { label: "Quantum Computing", path: "/emerging-tech", description: "Quantum computational power" },
        { label: "Blockchain & DeFi", path: "/emerging-tech", description: "Decentralized finance" },
        { label: "IoT & Edge Computing", path: "/emerging-tech", description: "Internet of Things" },
        { label: "Extended Reality (XR)", path: "/emerging-tech", description: "AR/VR solutions" },
        { label: "5G & Networks", path: "/emerging-tech", description: "Next-generation networking" },
        { label: "Green Technology", path: "/emerging-tech", description: "Sustainable tech solutions" },
        { label: "Digital Twins", path: "/emerging-tech", description: "Virtual replicas" }
      ]
    },
    {
      title: "Company & Resources",
      icon: Globe,
      links: [
        { label: "About Us", path: "/about", description: "Our story and mission" },
        { label: "Our Mission", path: "/mission", description: "What drives us forward" },
        { label: "Team", path: "/team", description: "Meet our experts" },
        { label: "Pricing", path: "/pricing", description: "Service plans and pricing" },
        { label: "Careers", path: "/careers", description: "Join our team" },
        { label: "Partners", path: "/partners", description: "Strategic partnerships" },
        { label: "Contact", path: "/contact", description: "Get in touch" },
        { label: "Blog", path: "/blog", description: "Industry insights" },
        { label: "Case Studies", path: "/case-studies", description: "Success stories" },
        { label: "Help Center", path: "/help", description: "Support resources" },
        { label: "Documentation", path: "/docs", description: "Technical documentation" },
        { label: "Support Center", path: "/support", description: "Customer support" }
      ]
    }
  ];

  // Fixed social media links with proper error handling
  const socialLinks = [
    { 
      name: 'LinkedIn', 
      url: 'https://www.linkedin.com/company/ziontechgroup', 
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
      url: 'https://github.com/ziontechgroup', 
      icon: '💻',
      fallback: 'https://github.com'
    },
    { 
      name: 'YouTube', 
      url: 'https://www.youtube.com/@ziontechgroup', 
      icon: '📺',
      fallback: 'https://youtube.com'
    }
  ];

  const handleSocialLinkClick = (link: any) => {
    try {
      // Try to open the primary URL
      window.open(link.url, '_blank', 'noopener,noreferrer');
    } catch (error) {
      console.warn(`Failed to open ${link.name} link:`, error);
      // Fallback to the fallback URL
      try {
        window.open(link.fallback, '_blank', 'noopener,noreferrer');
      } catch (fallbackError) {
        console.error(`Failed to open fallback for ${link.name}:`, fallbackError);
      }
    }
  };

  return (
    <footer className="bg-black text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {footerSections.map((section, index) => {
            const Icon = section.icon;
            return (
              <div key={index} className="space-y-4">
                <div className="flex items-center space-x-2">
                  <div className="w-8 h-8 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-lg flex items-center justify-center">
                    <Icon className="w-4 h-4 text-white" />
                  </div>
                  <h3 className="text-lg font-semibold text-white">{section.title}</h3>
                </div>
                <div className="space-y-2">
                  {section.links.map((link, linkIndex) => (
                    <Link
                      key={linkIndex}
                      to={link.path}
                      className="block text-sm text-gray-400 hover:text-cyan-400 transition-colors duration-200 group"
                      title={link.description}
                    >
                      <span className="group-hover:translate-x-1 transition-transform duration-200 inline-block">
                        {link.label}
                      </span>
                    </Link>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        {/* Contact & Social Section */}
        <div className="border-t border-gray-800 pt-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Company Info */}
            <div className="space-y-4">
              <div className="flex items-center space-x-2">
                <div className="w-10 h-10 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-xl">Z</span>
                </div>
                <span className="text-xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                  Zion Tech Group
                </span>
              </div>
              <p className="text-gray-400 text-sm max-w-md">
                Transforming businesses with cutting-edge AI, quantum computing, and autonomous solutions. 
                We're building the future of technology, one innovation at a time.
              </p>
            </div>

            {/* Contact Information */}
            <div className="space-y-4">
              <h4 className="text-lg font-semibold text-white">Contact Information</h4>
              <div className="space-y-3 text-sm text-gray-400">
                <div className="flex items-center space-x-3">
                  <Phone className="w-4 h-4 text-cyan-400" />
                  <span>+1 (302) 464-0950</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Mail className="w-4 h-4 text-cyan-400" />
                  <span>info@ziontechgroup.com</span>
                </div>
                <div className="flex items-center space-x-3">
                  <MapPin className="w-4 h-4 text-cyan-400" />
                  <span>Wilmington, DE, USA</span>
                </div>
              </div>
            </div>

            {/* Social Media */}
            <div className="space-y-4">
              <h4 className="text-lg font-semibold text-white">Follow Us</h4>
              <div className="flex space-x-4">
                {socialLinks.map((link, index) => (
                  <button
                    key={index}
                    onClick={() => handleSocialLinkClick(link)}
                    className="w-10 h-10 bg-gray-800 hover:bg-cyan-500/20 border border-gray-700 hover:border-cyan-500/50 rounded-lg flex items-center justify-center text-lg transition-all duration-300 hover:scale-110"
                    title={link.name}
                  >
                    {link.icon}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-sm text-gray-400">
              © {currentYear} Zion Tech Group. All rights reserved.
            </div>
            <div className="flex space-x-6 text-sm text-gray-400">
              <Link to="/privacy" className="hover:text-cyan-400 transition-colors duration-200">
                Privacy Policy
              </Link>
              <Link to="/terms" className="hover:text-cyan-400 transition-colors duration-200">
                Terms of Service
              </Link>
              <Link to="/cookies" className="hover:text-cyan-400 transition-colors duration-200">
                Cookie Policy
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}