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

  const handleSocialLink = (link: any) => {
    try {
      window.open(link.url, '_blank', 'noopener,noreferrer');
    } catch (error) {
      // Fallback to generic URL
      window.open(link.fallback, '_blank', 'noopener,noreferrer');
    }
  };

  return (
    <footer className="futuristic-footer relative">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-cyan-400 to-transparent opacity-50"></div>
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-cyan-500/10 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-purple-500/10 rounded-full blur-3xl"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {footerSections.map((section, index) => (
            <div key={section.title} className="space-y-4">
              <div className="flex items-center space-x-2">
                <section.icon className="w-5 h-5 text-cyan-400" />
                <h3 className="text-lg font-semibold text-white neon-text neon-cyan">
                  {section.title}
                </h3>
              </div>
              <div className="space-y-2">
                {section.links.map((link) => (
                  <Link
                    key={link.label}
                    to={link.path}
                    className="block text-gray-300 hover:text-cyan-400 transition-colors duration-200 group"
                  >
                    <div className="text-sm font-medium group-hover:translate-x-1 transition-transform duration-200">
                      {link.label}
                    </div>
                    {link.description && (
                      <div className="text-xs text-gray-500 mt-1 group-hover:text-gray-400 transition-colors duration-200">
                        {link.description}
                      </div>
                    )}
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Contact Information & Social Links */}
        <div className="border-t border-cyan-500/20 pt-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Contact Information */}
            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-white neon-text neon-cyan">
                Get In Touch
              </h3>
              <div className="space-y-3">
                <div className="flex items-center space-x-3 text-gray-300">
                  <Phone className="w-5 h-5 text-cyan-400" />
                  <a 
                    href="tel:+13024640950" 
                    className="hover:text-cyan-400 transition-colors duration-200"
                  >
                    +1 (302) 464-0950
                  </a>
                </div>
                <div className="flex items-center space-x-3 text-gray-300">
                  <Mail className="w-5 h-5 text-cyan-400" />
                  <a 
                    href="mailto:kleber@ziontechgroup.com" 
                    className="hover:text-cyan-400 transition-colors duration-200"
                  >
                    kleber@ziontechgroup.com
                  </a>
                </div>
                <div className="flex items-start space-x-3 text-gray-300">
                  <MapPin className="w-5 h-5 text-cyan-400 mt-0.5" />
                  <div>
                    <div>364 E Main St STE 1008</div>
                    <div>Middletown, DE 19709</div>
                    <div>United States</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Social Links & Newsletter */}
            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-white neon-text neon-cyan">
                Connect With Us
              </h3>
              <div className="space-y-4">
                {/* Social Media Links */}
                <div>
                  <p className="text-sm text-gray-400 mb-3">Follow us on social media</p>
                  <div className="flex flex-wrap gap-3">
                    {socialLinks.map((link) => (
                      <button
                        key={link.name}
                        onClick={() => handleSocialLink(link)}
                        className="p-2 bg-gray-800/50 hover:bg-cyan-500/20 rounded-lg transition-all duration-200 group"
                        title={`Follow us on ${link.name}`}
                      >
                        <span className="text-lg group-hover:scale-110 transition-transform duration-200">
                          {link.icon}
                        </span>
                      </button>
                    ))}
                  </div>
                </div>

                {/* Newsletter Signup */}
                <div className="space-y-3">
                  <p className="text-sm text-gray-400">Stay updated with our latest insights</p>
                  <div className="flex space-x-2">
                    <input
                      type="email"
                      placeholder="Enter your email"
                      className="flex-1 futuristic-input text-sm"
                    />
                    <button className="futuristic-btn px-4 py-2 text-sm">
                      Subscribe
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-cyan-500/20 pt-8 mt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            {/* Company Info */}
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 bg-gradient-to-br from-cyan-400 to-purple-600 rounded-lg flex items-center justify-center">
                <Brain className="w-5 h-5 text-white" />
              </div>
              <div>
                <div className="text-white font-semibold">Zion Tech Group</div>
                <div className="text-sm text-gray-400">AI-Powered Technology Solutions</div>
              </div>
            </div>

            {/* Copyright & Links */}
            <div className="flex flex-col md:flex-row items-center space-y-2 md:space-y-0 md:space-x-6 text-sm text-gray-400">
              <div>© {currentYear} Zion Tech Group. All rights reserved.</div>
              <div className="flex space-x-4">
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

        {/* Additional Information */}
        <div className="mt-8 pt-6 border-t border-cyan-500/10">
          <div className="text-center text-xs text-gray-500 space-y-2">
            <p>
              Zion Tech Group is a leading provider of AI-powered technology solutions, 
              specializing in quantum computing, cybersecurity, and enterprise digital transformation.
            </p>
            <p>
              Our services help businesses leverage cutting-edge technology to drive innovation, 
              improve efficiency, and achieve sustainable growth in the digital age.
            </p>
            <div className="flex justify-center items-center space-x-4 mt-4">
              <span className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                <span>99.9% Uptime</span>
              </span>
              <span className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-blue-400 rounded-full animate-pulse"></div>
                <span>24/7 Support</span>
              </span>
              <span className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-purple-400 rounded-full animate-pulse"></div>
                <span>ISO 27001 Certified</span>
              </span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}