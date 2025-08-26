import { Link } from 'react-router-dom';
import { 
  Phone, 
  Mail, 
  MapPin, 
  Linkedin, 
  Twitter, 
  Github, 
  Youtube, 
  Facebook, 
  Instagram,
  Globe,
  Shield,
  Brain,
  Cpu,
  Rocket,
  Building,
  Users,
  Target,
  Zap,
  Database,
  Network
} from 'lucide-react';

export function Footer() {
  const currentYear = new Date().getFullYear();

  const footerSections = [
    {
      title: "AI & Technology Services",
      icon: Brain,
      links: [
        { name: "AI Solutions", href: "/ai-solutions" },
        { name: "AI Agent Orchestrator", href: "/ai-agent-orchestrator" },
        { name: "AI Analytics Copilot", href: "/ai-analytics-copilot" },
        { name: "Quantum Technology", href: "/quantum-technology" },
        { name: "Quantum Neural Network Platform", href: "/quantum-neural-network-platform" },
        { name: "Cloud & DevOps", href: "/cloud-devops" },
        { name: "Enterprise Solutions", href: "/enterprise-solutions" },
        { name: "Micro SAAS", href: "/micro-saas" }
      ]
    },
    {
      title: "Infrastructure & Security",
      icon: Shield,
      links: [
        { name: "Cybersecurity", href: "/services/cybersecurity" },
        { name: "Advanced Cybersecurity Suite", href: "/advanced-cybersecurity-suite" },
        { name: "SOC2 Compliance Automation", href: "/soc2-compliance-automation" },
        { name: "5G Enterprise Solutions", href: "/5g-enterprise-solutions" },
        { name: "5G Network Optimization", href: "/5g-network-optimization" },
        { name: "IT Infrastructure", href: "/services/it-infrastructure" },
        { name: "AI-Powered IT Asset Management", href: "/ai-powered-it-asset-management" },
        { name: "Network Infrastructure", href: "/services/network-infrastructure" }
      ]
    },
    {
      title: "Company",
      icon: Building,
      links: [
        { name: "About Us", href: "/about" },
        { name: "Our Team", href: "/team" },
        { name: "Mission", href: "/mission" },
        { name: "Careers", href: "/careers" },
        { name: "Partners", href: "/partners" },
        { name: "News & Blog", href: "/news" },
        { name: "Case Studies", href: "/case-studies" },
        { name: "Contact", href: "/contact" }
      ]
    },
    {
      title: "Resources & Support",
      icon: Users,
      links: [
        { name: "Documentation", href: "/docs" },
        { name: "Help Center", href: "/help" },
        { name: "Community", href: "/community" },
        { name: "Webinars", href: "/webinars" },
        { name: "White Papers", href: "/white-papers" },
        { name: "FAQ", href: "/faq" },
        { name: "Support", href: "/support" },
        { name: "Events", href: "/events" }
      ]
    }
  ];

  // Fixed social media links with proper URLs
  const socialLinks = [
    { 
      name: 'LinkedIn', 
      url: 'https://linkedin.com/company/ziontechgroup', 
      icon: Linkedin,
      fallback: 'https://linkedin.com'
    },
    { 
      name: 'Twitter', 
      url: 'https://twitter.com/ziontechgroup', 
      icon: Twitter,
      fallback: 'https://twitter.com'
    },
    { 
      name: 'GitHub', 
      url: 'https://github.com/Zion-Holdings', 
      icon: Github,
      fallback: 'https://github.com'
    },
    { 
      name: 'YouTube', 
      url: 'https://youtube.com/@ziontechgroup', 
      icon: Youtube,
      fallback: 'https://youtube.com'
    },
    { 
      name: 'Facebook', 
      url: 'https://facebook.com/ziontechgroup', 
      icon: Facebook,
      fallback: 'https://facebook.com'
    },
    { 
      name: 'Instagram', 
      url: 'https://instagram.com/ziontechgroup', 
      icon: Instagram,
      fallback: 'https://instagram.com'
    }
  ];

  const quickLinks = [
    { label: "Pricing", path: "/pricing" },
    { label: "Contact", path: "/contact" },
    { label: "Support", path: "/help" },
    { label: "Privacy Policy", path: "/privacy" },
    { label: "Terms of Service", path: "/terms" },
    { label: "Cookie Policy", path: "/cookies" }
  ];

  return (
    <footer className="bg-black text-white">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <div className="flex items-center space-x-2 mb-6">
              <div className="w-10 h-10 bg-gradient-to-br from-cyan-500 to-purple-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-xl">Z</span>
              </div>
              <div>
                <h3 className="text-xl font-bold text-white">Zion Tech Group</h3>
                <p className="text-sm text-gray-400">AI-Powered Innovation</p>
              </div>
            </div>
            
            <p className="text-gray-400 text-sm mb-6 leading-relaxed">
              Leading provider of AI-powered technology solutions, quantum computing, cybersecurity, and enterprise digital transformation services.
            </p>

            {/* Contact Information */}
            <div className="space-y-3 mb-6">
              <div className="flex items-center space-x-3 text-sm text-gray-300">
                <Phone className="w-4 h-4 text-cyan-500" />
                <a href="tel:+13024640950" className="hover:text-cyan-400 transition-colors">
                  +1 (302) 464-0950
                </a>
              </div>
              <div className="flex items-center space-x-3 text-sm text-gray-300">
                <Mail className="w-4 h-4 text-cyan-500" />
                <a href="mailto:kleber@ziontechgroup.com" className="hover:text-cyan-400 transition-colors">
                  kleber@ziontechgroup.com
                </a>
              </div>
              <div className="flex items-start space-x-3 text-sm text-gray-300">
                <MapPin className="w-4 h-4 text-cyan-500 mt-0.5" />
                <span>
                  364 E Main St STE 1008<br />
                  Middletown DE 19709
                </span>
              </div>
            </div>

            {/* Social Media Links */}
            <div className="flex space-x-4">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-gray-800 hover:bg-cyan-600 rounded-lg flex items-center justify-center transition-all duration-200 transform hover:scale-110"
                  title={social.name}
                >
                  <social.icon className="w-5 h-5 text-gray-300" />
                </a>
              ))}
            </div>
          </div>

          {/* Footer Sections */}
          {footerSections.map((section) => (
            <div key={section.title} className="space-y-4">
              <div className="flex items-center space-x-2">
                <section.icon className="w-5 h-5 text-cyan-500" />
                <h3 className="text-lg font-semibold text-white">{section.title}</h3>
              </div>
              <ul className="space-y-2">
                {section.links.map((link) => (
                  <li key={link.label}>
                    <Link
                      to={link.path}
                      className="text-gray-400 hover:text-cyan-400 text-sm transition-colors duration-200"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Quick Links Row */}
        <div className="mt-12 pt-8 border-t border-gray-800">
          <div className="flex flex-wrap justify-center gap-6">
            {quickLinks.map((link) => (
              <Link
                key={link.label}
                to={link.path}
                className="text-gray-400 hover:text-cyan-400 text-sm transition-colors duration-200"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-sm text-gray-400">
              © {currentYear} Zion Tech Group. All rights reserved.
            </div>
            <div className="flex items-center space-x-6 text-sm text-gray-400">
              <span>Made with ❤️ in Delaware</span>
              <span>•</span>
              <span>AI-Powered Technology</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}