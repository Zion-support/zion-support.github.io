import { Link } from 'react-router-dom';
import { 
  Mail, 
  Phone, 
  MapPin, 
  ExternalLink,
  ArrowRight,
  Heart,
  Shield,
  Zap,
  Brain,
  Users,
  Globe,
  Rocket
} from 'lucide-react';

export function Footer() {
  const currentYear = new Date().getFullYear();

  const footerSections = [
    {
      title: "AI & Micro SAAS",
      icon: Brain,
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
      title: "Solutions",
      icon: Users,
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
      title: "Emerging Tech",
      icon: Rocket,
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
      icon: Globe,
      links: [
        { label: "About Us", path: "/about" },
        { label: "Our Mission", path: "/mission" },
        { label: "Team", path: "/team" },
        { label: "Leadership", path: "/leadership" },
        { label: "Partners", path: "/partners" },
        { label: "Contact", path: "/contact" },
        { label: "Blog", path: "/blog" }
      ]
    },
    {
      title: "Resources",
      icon: Zap,
      links: [
        { label: "Blog & Articles", path: "/blog" },
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

  // Enhanced social media links with proper error handling and fallbacks
  const socialLinks = [
    { 
      name: 'LinkedIn', 
      url: 'https://www.linkedin.com/company/zion-tech-group', 
      icon: '💼',
      fallback: 'https://linkedin.com',
      description: 'Follow us on LinkedIn'
    },
    { 
      name: 'Twitter', 
      url: 'https://twitter.com/ziontechgroup', 
      icon: '🐦',
      fallback: 'https://twitter.com',
      description: 'Follow us on Twitter'
    },
    { 
      name: 'GitHub', 
      url: 'https://github.com/Zion-Holdings', 
      icon: '💻',
      fallback: 'https://github.com',
      description: 'Check out our open source projects'
    },
    { 
      name: 'YouTube', 
      url: 'https://youtube.com/@ziontechgroup', 
      icon: '📺',
      fallback: 'https://youtube.com',
      description: 'Watch our latest videos'
    },
    { 
      name: 'Facebook', 
      url: 'https://facebook.com/ziontechgroup', 
      icon: '📘',
      fallback: 'https://facebook.com',
      description: 'Like us on Facebook'
    },
    { 
      name: 'Instagram', 
      url: 'https://instagram.com/ziontechgroup', 
      icon: '📷',
      fallback: 'https://instagram.com',
      description: 'Follow us on Instagram'
    }
  ];

  const contactInfo = [
    {
      icon: Mail,
      label: 'Email',
      value: 'kleber@ziontechgroup.com',
      href: 'mailto:kleber@ziontechgroup.com',
      description: 'Send us an email'
    },
    {
      icon: Phone,
      label: 'Phone',
      value: '+1 (302) 464-0950',
      href: 'tel:+13024640950',
      description: 'Call us directly'
    },
    {
      icon: MapPin,
      label: 'Location',
      value: 'United States',
      href: '#',
      description: 'Serving clients globally'
    }
  ];

  const handleSocialLinkClick = (socialLink: any, e: React.MouseEvent) => {
    try {
      // Try to open the primary URL
      window.open(socialLink.url, '_blank', 'noopener,noreferrer');
    } catch (error) {
      console.warn(`Failed to open ${socialLink.name}, trying fallback`);
      // Fallback to generic URL if primary fails
      window.open(socialLink.fallback, '_blank', 'noopener,noreferrer');
    }
  };

  return (
    <footer className="bg-zion-blue-dark border-t border-zion-cyan/20">
      {/* Main Footer Content */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-12 h-12 bg-gradient-to-br from-zion-cyan to-zion-purple rounded-xl flex items-center justify-center">
                <span className="text-white font-bold text-xl">Z</span>
              </div>
              <div>
                <h3 className="text-xl font-bold text-white">Zion Tech Group</h3>
                <p className="text-zion-cyan text-sm">AI-Powered Innovation</p>
              </div>
            </div>
            <p className="text-gray-400 mb-6 leading-relaxed">
              Leading provider of AI-powered technology solutions, quantum computing, 
              cybersecurity, and enterprise digital transformation services. 
              Transform your business with cutting-edge technology.
            </p>
            
            {/* Contact Information */}
            <div className="space-y-4">
              {contactInfo.map((contact) => (
                <div key={contact.label} className="flex items-center space-x-3">
                  <contact.icon className="w-5 h-5 text-zion-cyan flex-shrink-0" />
                  <div>
                    <p className="text-sm text-gray-400">{contact.label}</p>
                    <a 
                      href={contact.href}
                      className="text-white hover:text-zion-cyan transition-colors duration-200 text-sm"
                      title={contact.description}
                    >
                      {contact.value}
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Footer Sections */}
          {footerSections.map((section) => (
            <div key={section.title} className="space-y-4">
              <div className="flex items-center space-x-2 mb-4">
                <section.icon className="w-5 h-5 text-zion-cyan" />
                <h4 className="text-white font-semibold">{section.title}</h4>
              </div>
              <ul className="space-y-2">
                {section.links.map((link) => (
                  <li key={link.label}>
                    <Link
                      to={link.path}
                      className="text-gray-400 hover:text-zion-cyan transition-colors duration-200 text-sm hover:underline"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Newsletter Section */}
        <div className="mt-16 pt-8 border-t border-zion-cyan/20">
          <div className="max-w-2xl mx-auto text-center">
            <h3 className="text-2xl font-bold text-white mb-4">
              Stay Updated with Zion Tech Group
            </h3>
            <p className="text-gray-400 mb-6">
              Get the latest insights on AI, emerging technologies, and industry trends delivered to your inbox.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email address"
                className="flex-1 px-4 py-3 bg-white/10 border border-zion-cyan/30 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-zion-cyan/50 focus:border-zion-cyan/50 backdrop-blur-sm"
              />
              <button className="px-6 py-3 bg-gradient-to-r from-zion-cyan to-zion-purple text-white rounded-lg hover:shadow-lg hover:shadow-zion-cyan/25 transition-all duration-300 transform hover:scale-105 flex items-center justify-center space-x-2">
                <span>Subscribe</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="border-t border-zion-cyan/20 bg-zion-blue-darker">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
            {/* Copyright */}
            <div className="flex items-center space-x-2 text-gray-400 text-sm">
              <span>© {currentYear} Zion Tech Group. All rights reserved.</span>
              <span className="hidden sm:inline">•</span>
              <span className="hidden sm:inline">Made with</span>
              <Heart className="w-4 h-4 text-red-500 hidden sm:inline" />
              <span className="hidden sm:inline">for innovation</span>
            </div>

            {/* Social Links */}
            <div className="flex items-center space-x-4">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.url}
                  onClick={(e) => handleSocialLinkClick(social, e)}
                  className="group relative p-2 text-gray-400 hover:text-zion-cyan transition-colors duration-200"
                  title={social.description}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span className="text-lg group-hover:scale-110 transition-transform duration-200">
                    {social.icon}
                  </span>
                  <span className="sr-only">{social.name}</span>
                </a>
              ))}
            </div>

            {/* Legal Links */}
            <div className="flex items-center space-x-6 text-sm">
              <Link to="/privacy" className="text-gray-400 hover:text-zion-cyan transition-colors duration-200">
                Privacy Policy
              </Link>
              <Link to="/terms" className="text-gray-400 hover:text-zion-cyan transition-colors duration-200">
                Terms of Service
              </Link>
              <Link to="/cookies" className="text-gray-400 hover:text-zion-cyan transition-colors duration-200">
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