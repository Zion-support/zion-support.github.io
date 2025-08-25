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
  Sparkles,
  Shield,
  Zap,
  Brain,
  Cloud,
  Lock,
  Cpu,
  Database,
  Network,
  Code,
  BarChart3,
  Target,
  Lightbulb,
  Rocket,
  Clock,
  Heart,
  Eye,
  Target as TargetIcon
} from 'lucide-react';

export function Footer() {
  const currentYear = new Date().getFullYear();

  const footerSections = [
    {
      title: "AI & Technology Services",
      icon: Brain,
      color: "from-purple-500 to-pink-500",
      links: [
        { label: "AI & Autonomous Systems", path: "/services/ai-autonomous-systems" },
        { label: "AI Research Assistant", path: "/ai-autonomous-research-assistant" },
        { label: "Quantum Neural Networks", path: "/quantum-neural-network-platform" },
        { label: "Autonomous Business Platform", path: "/autonomous-business-operations-platform" },
        { label: "AI Asset Management", path: "/ai-powered-it-asset-management" },
        { label: "Quantum Technology", path: "/services/quantum-technology" },
        { label: "IT Infrastructure", path: "/services/it-infrastructure" },
        { label: "Micro SAAS Solutions", path: "/services/micro-saas-solutions" },
        { label: "Cybersecurity", path: "/services/cybersecurity" },
        { label: "SOC2 Compliance Automation", path: "/soc2-compliance-automation" },
        { label: "Industry Solutions", path: "/services/industry-solutions" },
        { label: "AI & Machine Learning", path: "/services/ai-autonomous-systems" },
        { label: "Cloud & Infrastructure", path: "/cloud-devops" },
        { label: "5G Enterprise Solutions", path: "/5g-enterprise-solutions" },
        { label: "Blockchain Solutions", path: "/services/blockchain-solutions" },
        { label: "IoT & Edge Computing", path: "/services/iot-platforms" }
      ]
    },
    {
      title: "Solutions & Industries",
      icon: Target,
      color: "from-blue-500 to-cyan-500",
      links: [
        { label: "Enterprise Solutions", path: "/solutions/enterprise" },
        { label: "Healthcare Solutions", path: "/solutions/healthcare" },
        { label: "Financial Solutions", path: "/services/financial-services" },
        { label: "Manufacturing Solutions", path: "/services/manufacturing-intelligence" },
        { label: "Retail Solutions", path: "/services/retail-technology" },
        { label: "Government Solutions", path: "/services/government-solutions" },
        { label: "Business Intelligence", path: "/services/ai-business-intelligence" },
        { label: "Marketing Automation", path: "/services/ai-marketing-automation" },
        { label: "HR & Recruitment", path: "/services/ai-hr-recruitment" },
        { label: "Legal Tech", path: "/services/ai-legal-tech" }
      ]
    },
    {
      title: "Emerging Technologies",
      icon: Rocket,
      color: "from-purple-500 to-violet-500",
      links: [
        { label: "Quantum Computing", path: "/services/quantum-technology" },
        { label: "Blockchain & DeFi", path: "/services/blockchain-solutions" },
        { label: "IoT & Edge Computing", path: "/services/iot-platforms" },
        { label: "Extended Reality (XR)", path: "/services/ar-vr-solutions" },
        { label: "5G & Networks", path: "/5g-enterprise-solutions" },
        { label: "Green Technology", path: "/services/green-technology" },
        { label: "Digital Twins", path: "/services/digital-twins" }
      ]
    },
    {
      title: "Company & Resources",
      icon: Shield,
      color: "from-green-500 to-emerald-500",
      links: [
        { label: "About Us", path: "/about" },
        { label: "Our Mission", path: "/mission" },
        { label: "Team", path: "/team" },
        { label: "Pricing", path: "/pricing" },
        { label: "Careers", path: "/careers" },
        { label: "Partners", path: "/partners" },
        { label: "Contact", path: "/contact" },
        { label: "Blog", path: "/blog" },
        { label: "News", path: "/news" },
        { label: "Case Studies", path: "/case-studies" },
        { label: "White Papers", path: "/white-papers" },
        { label: "Webinars", path: "/webinars" },
        { label: "Events", path: "/events" },
        { label: "Help Center", path: "/help" },
        { label: "Documentation", path: "/docs" }
      ]
    }
  ];

  const quickLinks = [
    { label: "Services Overview", path: "/services" },
    { label: "Solutions", path: "/solutions/enterprise" },
    { label: "AI Matcher", path: "/ai-matcher" },
    { label: "Talent Directory", path: "/talent-directory" },
    { label: "Emerging Tech", path: "/emerging-tech" },
    { label: "Request Quote", path: "/request-quote" },
    { label: "Support", path: "/help" }
  ];

  const legalLinks = [
    { label: "Privacy Policy", path: "/privacy" },
    { label: "Terms of Service", path: "/terms" },
    { label: "Cookie Policy", path: "/cookies" },
    { label: "Dispute Management", path: "/dispute-management" }
  ];

  const socialLinks = [
    { 
      icon: Linkedin, 
      href: 'https://www.linkedin.com/company/ziontechgroup', 
      label: 'LinkedIn',
      color: 'hover:text-blue-500'
    },
    { 
      icon: Twitter, 
      href: 'https://twitter.com/ziontechgroup', 
      label: 'Twitter',
      color: 'hover:text-blue-400'
    },
    { 
      name: 'GitHub', 
      url: 'https://github.com/ziontechgroup', 
      icon: Github,
      fallback: 'https://github.com',
      color: 'hover:bg-gray-600/20 hover:text-gray-400'
    },
    { 
      icon: Youtube, 
      href: 'https://www.youtube.com/@ziontechgroup', 
      label: 'YouTube',
      color: 'hover:text-red-500'
    }
  ];

  const contactInfo = [
    { 
      icon: Phone, 
      text: '+1 302 464 0950', 
      href: 'tel:+13024640950',
      label: 'Call us'
    },
    { 
      icon: Mail, 
      text: 'kleber@ziontechgroup.com', 
      href: 'mailto:kleber@ziontechgroup.com',
      label: 'Email us'
    },
    { 
      icon: MapPin, 
      text: '364 E Main St STE 1008 Middletown DE 19709', 
      href: '#',
      label: 'Visit us'
    }
  ];

  return (
    <footer className="bg-black text-white">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {footerSections.map((section, idx) => (
            <div key={idx} className="space-y-4">
              <div className="flex items-center space-x-3">
                <div className={`w-10 h-10 rounded-lg bg-gradient-to-r ${section.color} flex items-center justify-center`}>
                  <section.icon className="w-5 h-5 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-white">{section.title}</h3>
              </div>
              <div className="space-y-2">
                {section.links.map((link, linkIdx) => (
                  <Link
                    key={linkIdx}
                    to={link.path}
                    className="block text-sm text-gray-400 hover:text-cyan-400 transition-colors duration-200 hover:translate-x-1 transform"
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Quick Links & Contact */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 py-8 border-t border-gray-800">
          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-white">Quick Links</h4>
            <div className="space-y-2">
              {quickLinks.map((link, idx) => (
                <Link
                  key={idx}
                  to={link.path}
                  className="block text-sm text-gray-400 hover:text-cyan-400 transition-colors duration-200"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Contact Information */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-white">Contact Information</h4>
            <div className="space-y-3">
              {contactInfo.map((info, idx) => (
                <div key={idx} className="flex items-start space-x-3">
                  <div className="w-5 h-5 text-cyan-400 mt-0.5">
                    <info.icon className="w-5 h-5" />
                  </div>
                  <div>
                    <a
                      href={info.href}
                      className="block text-sm text-gray-400 hover:text-cyan-400 transition-colors duration-200"
                      aria-label={info.label}
                    >
                      {info.text}
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Newsletter & Social */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-white">Stay Connected</h4>
            <p className="text-sm text-gray-400 mb-4">
              Get the latest updates on AI technology and industry insights.
            </p>
            
            {/* Newsletter Signup */}
            <form className="space-y-3">
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
              />
              <button
                type="submit"
                className="w-full px-4 py-2 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-medium rounded-lg hover:from-cyan-600 hover:to-blue-700 transition-all duration-200 flex items-center justify-center space-x-2"
              >
                <span>Subscribe</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </form>

            {/* Social Links */}
            <div className="flex space-x-4 pt-4">
              {socialLinks.map((social, idx) => (
                <a
                  key={idx}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center text-gray-400 transition-all duration-200 hover:bg-gray-700 ${social.color}`}
                  aria-label={social.label}
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="pt-8 border-t border-gray-800">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            {/* Company Info */}
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">Z</span>
              </div>
              <div>
                <div className="text-white font-semibold">Zion Tech Group</div>
                <div className="text-sm text-gray-400">AI & Technology Solutions</div>
              </div>
            </div>

            {/* Legal Links */}
            <div className="flex flex-wrap justify-center space-x-6 text-sm text-gray-400">
              {legalLinks.map((link, idx) => (
                <Link
                  key={idx}
                  to={link.path}
                  className="hover:text-cyan-400 transition-colors duration-200"
                >
                  {link.label}
                </Link>
              ))}
            </div>

            {/* Copyright */}
            <div className="text-sm text-gray-400 text-center md:text-right">
              © {currentYear} Zion Tech Group. All rights reserved.
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="bg-gray-900 py-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-2 md:space-y-0">
            <div className="text-xs text-gray-500">
              Empowering businesses with cutting-edge AI and technology solutions
            </div>
            <div className="flex items-center space-x-4 text-xs text-gray-500">
              <span>Made with ❤️ by Zion Tech Group</span>
              <span>•</span>
              <span>Powered by AI</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}