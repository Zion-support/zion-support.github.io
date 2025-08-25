import { Link } from 'react-router-dom';
import { 
  Linkedin, 
  Twitter, 
  Github, 
  Youtube, 
  Mail, 
  Phone, 
  MapPin,
  ArrowRight,
  Heart
} from 'lucide-react';

export function Footer() {
  const currentYear = new Date().getFullYear();

  const footerSections = [
    {
      title: "AI & Technology",
      links: [
        { label: "AI Solutions", path: "/ai-solutions" },
        { label: "AI Autonomous Systems", path: "/services/ai-autonomous-systems" },
        { label: "Machine Learning", path: "/services/ai-autonomous-systems" },
        { label: "AI Business Intelligence", path: "/ai-solutions" },
        { label: "AI Workflow Automation", path: "/services/ai-workflow-automation" },
        { label: "AI Customer Experience", path: "/services/ai-customer-experience-platform" }
      ]
    },
    {
      title: "Services",
      links: [
        { label: "Cloud & DevOps", path: "/services/it-infrastructure" },
        { label: "Cybersecurity", path: "/services/cybersecurity" },
        { label: "IT Infrastructure", path: "/services/it-infrastructure" },
        { label: "Micro-SaaS Solutions", path: "/services/micro-saas-solutions" },
        { label: "Digital Transformation", path: "/digital-transformation" },
        { label: "Enterprise Solutions", path: "/solutions/enterprise" }
      ]
    },
    {
      title: "Solutions",
      links: [
        { label: "Healthcare Solutions", path: "/solutions/healthcare" },
        { label: "Financial Services", path: "/quantum-financial-trading" },
        { label: "Manufacturing", path: "/services/ai-autonomous-systems" },
        { label: "Blockchain Solutions", path: "/services/blockchain-supply-chain-transparency" },
        { label: "Quantum Technology", path: "/services/quantum-technology" },
        { label: "5G Enterprise", path: "/5g-enterprise-solutions" }
      ]
    },
    {
      title: "Company",
      links: [
        { label: "About Us", path: "/about" },
        { label: "Our Mission", path: "/mission" },
        { label: "Team", path: "/team" },
        { label: "Careers", path: "/careers" },
        { label: "Partners", path: "/partners" },
        { label: "Contact", path: "/contact" }
      ]
    },
    {
      title: "Resources",
      links: [
        { label: "Case Studies", path: "/case-studies" },
        { label: "Help Center", path: "/help" },
        { label: "AI Solution Matcher", path: "/ai-matcher" },
        { label: "Talent Directory", path: "/talent-directory" },
        { label: "Emerging Tech", path: "/emerging-tech" },
        { label: "Services Showcase", path: "/services-showcase" }
      ]
    }
  ];

  const socialLinks = [
    { 
      name: 'LinkedIn', 
      url: 'https://www.linkedin.com/company/ziontechgroup', 
      icon: Linkedin,
      color: 'hover:text-blue-600'
    },
    { 
      name: 'Twitter', 
      url: 'https://twitter.com/ziontechgroup', 
      icon: Twitter,
      color: 'hover:text-blue-400'
    },
    { 
      name: 'GitHub', 
      url: 'https://github.com/ziontechgroup', 
      icon: Github,
      color: 'hover:text-gray-600'
    },
    { 
      name: 'YouTube', 
      url: 'https://www.youtube.com/@ziontechgroup', 
      icon: Youtube,
      color: 'hover:text-red-600'
    }
  ];

  const contactInfo = [
    {
      icon: Phone,
      label: 'Phone',
      value: '+1 (302) 464-0950',
      href: 'tel:+13024640950'
    },
    {
      icon: Mail,
      label: 'Email',
      value: 'kleber@ziontechgroup.com',
      href: 'mailto:kleber@ziontechgroup.com'
    },
    {
      icon: MapPin,
      label: 'Location',
      value: 'Delaware, United States',
      href: '#'
    }
  ];

  return (
    <footer className="bg-gradient-to-br from-gray-900 via-black to-blue-900 text-gray-300">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-12 h-12 bg-gradient-to-br from-cyan-400 to-blue-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-2xl">Z</span>
              </div>
              <div>
                <h3 className="text-xl font-bold bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">
                  Zion Tech Group
                </h3>
                <p className="text-sm text-gray-400">AI-Powered Technology Solutions</p>
              </div>
            </div>
            
            <p className="text-gray-400 mb-6 leading-relaxed">
              Leading provider of AI-powered technology solutions, quantum computing, cybersecurity, 
              and enterprise digital transformation services. Transform your business with cutting-edge technology.
            </p>

            {/* Contact Information */}
            <div className="space-y-3">
              {contactInfo.map((contact) => (
                <a
                  key={contact.label}
                  href={contact.href}
                  className="flex items-center space-x-3 text-gray-400 hover:text-cyan-400 transition-colors duration-200 group"
                >
                  <contact.icon className="w-4 h-4 text-cyan-400 group-hover:scale-110 transition-transform duration-200" />
                  <div>
                    <p className="text-xs text-gray-500 uppercase tracking-wide">{contact.label}</p>
                    <p className="text-sm">{contact.value}</p>
                  </div>
                </a>
              ))}
            </div>

            {/* Social Links */}
            <div className="flex items-center space-x-3 mt-6">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`p-3 rounded-lg bg-gray-800/50 hover:bg-gray-700/70 transition-all duration-200 ${social.color} hover:scale-110`}
                  aria-label={`Visit our ${social.name} page`}
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Footer Sections */}
          {footerSections.map((section) => (
            <div key={section.title}>
              <h4 className="text-white font-semibold mb-4 text-lg">{section.title}</h4>
              <ul className="space-y-3">
                {section.links.map((link) => (
                  <li key={link.label}>
                    <Link
                      to={link.path}
                      className="flex items-center space-x-2 text-gray-400 hover:text-cyan-400 transition-colors duration-200 group"
                    >
                      <ArrowRight className="w-3 h-3 text-gray-600 group-hover:text-cyan-400 transition-colors duration-200" />
                      <span className="text-sm">{link.label}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Newsletter Section */}
        <div className="mt-16 pt-8 border-t border-gray-800">
          <div className="max-w-2xl mx-auto text-center">
            <h3 className="text-2xl font-bold text-white mb-4">
              Stay Updated with Zion Tech Group
            </h3>
            <p className="text-gray-400 mb-6">
              Get the latest insights on AI technology, industry trends, and company updates delivered to your inbox.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email address"
                className="flex-1 px-4 py-3 bg-gray-800/50 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
              />
              <button className="px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white font-medium rounded-lg transition-all duration-200 hover:scale-105 hover:shadow-lg hover:shadow-cyan-500/25">
                Subscribe
              </button>
            </div>
            <p className="text-xs text-gray-500 mt-3">
              We respect your privacy. Unsubscribe at any time.
            </p>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="flex items-center space-x-2 text-gray-400">
              <span>© {currentYear} Zion Tech Group. All rights reserved.</span>
              <span className="hidden sm:inline">•</span>
              <span className="hidden sm:inline">Made with</span>
              <Heart className="w-4 h-4 text-red-500" />
              <span className="hidden sm:inline">in Delaware</span>
            </div>
            
            <div className="flex items-center space-x-6 text-sm text-gray-400">
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