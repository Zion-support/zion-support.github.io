import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowUp } from 'lucide-react';

export function Footer() {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleContactClick = (type: 'phone' | 'email') => {
    if (type === 'phone') {
      window.open('tel:+13024640950');
    } else if (type === 'email') {
      window.open('mailto:kleber@ziontechgroup.com');
    }
  };

  const handleSocialLinkClick = (link: any, e: React.MouseEvent) => {
    try {
      // Try to open the link
      window.open(link.url, '_blank', 'noopener,noreferrer');
    } catch (error) {
      console.error(`Error opening ${link.name}:`, error);
      // Fallback to a generic URL if the specific one fails
      if (link.fallback) {
        window.open(link.fallback, '_blank', 'noopener,noreferrer');
      }
    }
  };

  const contactInfo = {
    phone: "+1 302 464 0950",
    email: "kleber@ziontechgroup.com",
    address: "Zion Tech Group, Delaware, United States"
  };

  const footerSections = [
    {
      title: "AI & Micro SAAS",
      links: [
        { label: "AI Content Hub Pro", path: "/services/ai-content-hub-pro" },
        { label: "AI Customer Service Automation", path: "/services/ai-customer-service-automation" },
        { label: "AI Sales Intelligence Platform", path: "/services/ai-sales-intelligence-platform" },
        { label: "AI Fintech Platform", path: "/services/ai-fintech-platform" },
        { label: "AI Healthcare Technology", path: "/services/ai-healthcare-tech-platform" },
        { label: "AI & Autonomous Systems", path: "/services/ai-autonomous-systems" },
        { label: "AI Research Assistant", path: "/ai-autonomous-research-assistant" },
        { label: "Quantum Enterprise Platform", path: "/services/quantum-enterprise-platform" },
        { label: "Autonomous Business Platform", path: "/autonomous-business-operations-platform" },
        { label: "AI Asset Management", path: "/ai-powered-it-asset-management" },
        { label: "Quantum Technology", path: "/services/quantum-technology" },
        { label: "IT Infrastructure", path: "/services/it-infrastructure" },
        { label: "Micro SAAS Solutions", path: "/services/micro-saas-solutions" },
        { label: "Cybersecurity", path: "/services/cybersecurity" },
        { label: "SOC2 Compliance Automation", path: "/soc2-compliance-automation" },
        { label: "Industry Solutions", path: "/services/industry-solutions" }
      ]
    },
    {
      title: "Specialized IT Services",
      links: [
        { label: "Cloud Cost Optimization", path: "/services/cloud-cost-optimization-finops" },
        { label: "DevOps Automation Platform", path: "/services/devops-automation-cicd-platform" },
        { label: "Data Analytics Platform", path: "/services/data-analytics-business-intelligence" },
        { label: "IoT & Edge Computing", path: "/services/iot-edge-computing-platform" },
        { label: "API Management Platform", path: "/services/api-management-integration-platform" },
        { label: "Advanced Cybersecurity", path: "/services/advanced-cybersecurity-platform" },
        { label: "5G Enterprise Networks", path: "/services/5g-enterprise-network-solutions" }
      ]
    },
    {
      title: "Solutions",
      links: [
        { label: "Enterprise Solutions", path: "/solutions/enterprise" },
        { label: "Healthcare Solutions", path: "/solutions/healthcare" },
        { label: "Financial Solutions", path: "/solutions/financial" },
        { label: "Manufacturing Solutions", path: "/solutions/manufacturing" },
        { label: "Retail Solutions", path: "/solutions/retail" },
        { label: "Government Solutions", path: "/solutions/government" },
        { label: "Business Intelligence", path: "/services/business-intelligence" },
        { label: "Marketing Automation", path: "/services/ai-marketing" },
        { label: "HR & Recruitment", path: "/services/ai-hr" },
        { label: "Legal Tech", path: "/services/ai-legal" }
      ]
    },
    {
      title: "Emerging Tech",
      links: [
        { label: "Quantum Computing", path: "/emerging-tech" },
        { label: "Blockchain & DeFi", path: "/emerging-tech" },
        { label: "IoT & Edge Computing", path: "/emerging-tech" },
        { label: "Extended Reality (XR)", path: "/emerging-tech" },
        { label: "5G & Networks", path: "/emerging-tech" },
        { label: "Green Technology", path: "/emerging-tech" },
        { label: "Digital Twins", path: "/emerging-tech" }
      ]
    },
    {
      title: "Company",
      links: [
        { label: "About Us", path: "/about" },
        { label: "Our Mission", path: "/mission" },
        { label: "Team", path: "/team" },
        { label: "Pricing", path: "/pricing" },
        { label: "Careers", path: "/careers" },
        { label: "Partner", path: "/partners" },
        { label: "Contact", path: "/contact" },
        { label: "Blog", path: "/blog" }
      ]
    },
    {
      title: "Resources",
      links: [
        { label: "Blog & Articles", path: "/blog" },
        { label: "Case Studies", path: "/case-studies" },
        { label: "Help Center", path: "/help" },
        { label: "Documentation", path: "/docs" },
        { label: "Support Center", path: "/support" }
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

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8 mb-12">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <div className="mb-6">
              <h3 className="text-2xl font-bold text-white mb-4">
                Zion Tech Group
              </h3>
              <p className="text-gray-300 mb-6 leading-relaxed">
                Leading provider of AI-powered technology solutions, quantum computing, 
                cybersecurity, and enterprise digital transformation services.
              </p>
              
              {/* Contact Information */}
              <div className="space-y-3">
                <button
                  onClick={() => handleContactClick('phone')}
                  className="flex items-center text-gray-300 hover:text-cyan-400 transition-colors duration-200"
                >
                  <span className="mr-3">📞</span>
                  {contactInfo.phone}
                </button>
                <button
                  onClick={() => handleContactClick('email')}
                  className="flex items-center text-gray-300 hover:text-cyan-400 transition-colors duration-200"
                >
                  <span className="mr-3">✉️</span>
                  {contactInfo.email}
                </button>
                <div className="flex items-start text-gray-300">
                  <span className="mr-3 mt-1">📍</span>
                  <span className="text-sm">{contactInfo.address}</span>
                </div>
              </div>
            </div>
          </div>

          {/* Footer Sections */}
          {footerSections.map((section) => (
            <div key={section.title}>
              <h4 className="text-lg font-semibold text-white mb-4">{section.title}</h4>
              <ul className="space-y-2">
                {section.links.map((link) => (
                  <li key={link.label}>
                    <Link
                      to={link.path}
                      className="text-gray-400 hover:text-cyan-400 transition-colors duration-200 text-sm"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-700/50 py-8">
          <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
            {/* Copyright */}
            <div className="text-gray-400 text-sm">
              © {currentYear} Zion Tech Group. All rights reserved.
            </div>

            {/* Social Links */}
            <div className="flex items-center space-x-4">
              {socialLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.url}
                  onClick={(e) => handleSocialLinkClick(link, e)}
                  className="p-2 text-gray-400 hover:text-cyan-400 hover:bg-cyan-400/10 rounded-md transition-all duration-200"
                  title={link.name}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span className="text-lg">{link.icon}</span>
                </a>
              ))}
            </div>
          </div>

          {/* Additional Links */}
          <div className="flex flex-wrap items-center justify-center space-x-6 mt-6 text-sm text-gray-500">
            <Link to="/privacy" className="hover:text-cyan-400 transition-colors duration-200">
              Privacy Policy
            </Link>
            <Link to="/terms" className="hover:text-cyan-400 transition-colors duration-200">
              Terms of Service
            </Link>
            <Link to="/cookies" className="hover:text-cyan-400 transition-colors duration-200">
              Cookie Policy
            </Link>
            <Link to="/accessibility" className="hover:text-cyan-400 transition-colors duration-200">
              Accessibility
            </Link>
          </div>
        </div>
      </div>

      {/* Scroll to Top Button */}
      <motion.button
        onClick={scrollToTop}
        className="fixed bottom-8 right-8 w-12 h-12 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-110 z-40"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        aria-label="Scroll to top"
      >
        <ArrowUp className="h-6 w-6 mx-auto" />
      </motion.button>
    </footer>
  );
}
