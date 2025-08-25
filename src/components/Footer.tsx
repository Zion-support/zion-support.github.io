import { Link } from 'react-router-dom';

export function Footer() {
  const currentYear = new Date().getFullYear();

  const footerSections = [
    {
      title: "AI & Technology Services",
      links: [
        { label: "AI & Autonomous Systems", path: "/services/ai-autonomous-systems" },
        { label: "AI Research Assistant", path: "/ai-autonomous-research-assistant" },
        { label: "Quantum Neural Networks", path: "/quantum-neural-network-platform" },
        { label: "Autonomous Business Platform", path: "/autonomous-business-operations-platform" },
        { label: "AI Asset Management", path: "/ai-powered-it-asset-management" },
        { label: "Quantum Technology", path: "/services/quantum-technology" },
        { label: "AI Business Intelligence", path: "/services/ai-business-intelligence" },
        { label: "AI Marketing Automation", path: "/services/ai-marketing-automation" },
        { label: "AI HR & Recruitment", path: "/services/ai-hr-recruitment" },
        { label: "AI Legal Tech", path: "/services/ai-legal-tech" },
        { label: "AI Healthcare Analytics", path: "/services/ai-healthcare-analytics" }
      ]
    },
    {
      title: "Infrastructure & Security",
      links: [
        { label: "IT Infrastructure", path: "/services/it-infrastructure" },
        { label: "Cloud DevOps", path: "/cloud-devops" },
        { label: "Cybersecurity", path: "/services/cybersecurity" },
        { label: "SOC2 Compliance Automation", path: "/soc2-compliance-automation" },
        { label: "5G Enterprise Solutions", path: "/5g-enterprise-solutions" },
        { label: "Network Infrastructure", path: "/services/network-infrastructure" },
        { label: "Managed IT Services", path: "/services/managed-it-services" },
        { label: "DevOps Automation", path: "/services/devops-automation" },
        { label: "Cloud Migration", path: "/services/cloud-migration" },
        { label: "Security Assessment", path: "/services/security-assessment" },
        { label: "Threat Detection", path: "/services/threat-detection" }
      ]
    },
    {
      title: "Industry Solutions",
      links: [
        { label: "Enterprise Solutions", path: "/solutions/enterprise" },
        { label: "Healthcare Solutions", path: "/solutions/healthcare" },
        { label: "Financial Solutions", path: "/solutions/financial" },
        { label: "Manufacturing Solutions", path: "/solutions/manufacturing" },
        { label: "Retail Solutions", path: "/solutions/retail" },
        { label: "Government Solutions", path: "/solutions/government" },
        { label: "Micro SAAS Solutions", path: "/services/micro-saas-solutions" },
        { label: "Digital Transformation", path: "/digital-transformation" },
        { label: "Industry Solutions", path: "/services/industry-solutions" },
        { label: "Innovative Services", path: "/services/innovative-new-services" }
      ]
    },
    {
      title: "Emerging Technologies",
      links: [
        { label: "Quantum Computing", path: "/emerging-tech" },
        { label: "Blockchain Solutions", path: "/services/blockchain-solutions" },
        { label: "IoT Platforms", path: "/services/iot-platforms" },
        { label: "AR/VR Solutions", path: "/services/ar-vr-solutions" },
        { label: "5G & Networks", path: "/emerging-tech" },
        { label: "Green Technology", path: "/services/green-it" },
        { label: "Digital Twins", path: "/services/digital-twins" },
        { label: "Space Technology", path: "/services/space-tech" },
        { label: "Biotechnology", path: "/services/biotech-solutions" },
        { label: "Climate Technology", path: "/services/climate-tech" }
      ]
    },
    {
      title: "Company & Resources",
      links: [
        { label: "About Us", path: "/about" },
        { label: "Our Mission", path: "/mission" },
        { label: "Team", path: "/team" },
        { label: "Careers", path: "/careers" },
        { label: "Partners", path: "/partners" },
        { label: "Contact", path: "/contact" },
        { label: "Blog", path: "/blog" },
        { label: "News", path: "/news" },
        { label: "Case Studies", path: "/case-studies" },
        { label: "Help Center", path: "/help" },
        { label: "Documentation", path: "/docs" },
        { label: "Support Center", path: "/support" }
      ]
    }
  ];

  // Fixed social media links with proper URLs and error handling
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
      url: 'https://youtube.com/@ziontechgroup', 
      icon: '📺',
      fallback: 'https://youtube.com'
    }
  ];

  // Fixed contact information
  const contactInfo = {
    phone: '+1 302 464 0950',
    email: 'kleber@ziontechgroup.com',
    address: '364 E Main St STE 1008 Middletown DE 19709'
  };

  const handleSocialLinkClick = (social: typeof socialLinks[0]) => {
    try {
      // Try the primary URL first
      window.open(social.url, '_blank', 'noopener,noreferrer');
    } catch (error) {
      // Fallback to the fallback URL if available
      if (social.fallback) {
        window.open(social.fallback, '_blank', 'noopener,noreferrer');
      }
    }
  };

  return (
    <footer className="bg-gradient-to-br from-gray-900 via-black to-blue-900 text-white">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-12 h-12 bg-gradient-to-br from-cyan-400 to-purple-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-2xl">Z</span>
              </div>
              <div>
                <h3 className="text-xl font-bold text-white">Zion Tech Group</h3>
                <p className="text-sm text-cyan-400">AI-Powered Innovation</p>
              </div>
            </div>
            
            <p className="text-gray-300 mb-6 leading-relaxed">
              Leading provider of AI-powered technology solutions, quantum computing, 
              cybersecurity, and enterprise digital transformation services.
            </p>

            {/* Contact Information */}
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <span className="text-cyan-400">📞</span>
                <a 
                  href={`tel:${contactInfo.phone.replace(/\s/g, '')}`}
                  className="text-gray-300 hover:text-cyan-400 transition-colors duration-200"
                >
                  {contactInfo.phone}
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <span className="text-cyan-400">✉️</span>
                <a 
                  href={`mailto:${contactInfo.email}`}
                  className="text-gray-300 hover:text-cyan-400 transition-colors duration-200"
                >
                  {contactInfo.email}
                </a>
              </div>
              <div className="flex items-start space-x-3">
                <span className="text-cyan-400">📍</span>
                <span className="text-gray-300 text-sm">{contactInfo.address}</span>
              </div>
            </div>
          </div>

          {/* Footer Sections */}
          {footerSections.map((section, index) => (
            <div key={section.title} className="space-y-4">
              <h4 className="text-lg font-semibold text-white border-b border-cyan-500/30 pb-2">
                {section.title}
              </h4>
              <ul className="space-y-2">
                {section.links.map((link) => (
                  <li key={link.path}>
                    <Link
                      to={link.path}
                      className="text-gray-300 hover:text-cyan-400 transition-colors duration-200 text-sm block py-1"
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
        <div className="border-t border-gray-700 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            {/* Copyright */}
            <div className="text-gray-400 text-sm">
              © {currentYear} Zion Tech Group. All rights reserved.
            </div>

            {/* Legal Links */}
            <div className="flex items-center space-x-6 text-sm">
              <Link to="/privacy" className="text-gray-400 hover:text-cyan-400 transition-colors duration-200">
                Privacy Policy
              </Link>
              <Link to="/terms" className="text-gray-400 hover:text-cyan-400 transition-colors duration-200">
                Terms of Service
              </Link>
              <Link to="/cookies" className="text-gray-400 hover:text-cyan-400 transition-colors duration-200">
                Cookie Policy
              </Link>
            </div>

            {/* Social Links */}
            <div className="flex items-center space-x-4">
              {socialLinks.map((social) => (
                <button
                  key={social.name}
                  onClick={() => handleSocialLinkClick(social)}
                  className="w-10 h-10 bg-gray-800 hover:bg-cyan-600 rounded-lg flex items-center justify-center transition-all duration-200 group"
                  title={social.name}
                >
                  <span className="text-lg group-hover:scale-110 transition-transform duration-200">
                    {social.icon}
                  </span>
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Newsletter Signup */}
      <div className="bg-gradient-to-r from-cyan-600/20 to-purple-600/20 border-t border-cyan-500/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="text-center">
            <h3 className="text-xl font-semibold text-white mb-2">
              Stay Updated with Latest Tech Trends
            </h3>
            <p className="text-gray-300 mb-6">
              Get insights on AI, quantum computing, and emerging technologies delivered to your inbox.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 bg-white/10 border border-cyan-500/30 rounded-lg text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
              />
              <button className="px-6 py-3 bg-gradient-to-r from-cyan-500 to-purple-600 text-white rounded-lg hover:from-cyan-600 hover:to-purple-700 transition-all duration-200 font-medium">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}