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
        { label: "AI HR & Recruitment", path: "/services/ai-hr-recruitment" },
        { label: "AI Legal Tech", path: "/services/ai-legal-tech" },
        { label: "AI Healthcare Analytics", path: "/services/ai-healthcare-analytics" },
        { label: "Blockchain Solutions", path: "/services/blockchain-solutions" },
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
      url: 'https://www.youtube.com/@ziontechgroup', 
      icon: '📺',
      fallback: 'https://youtube.com'
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

  const handleContactClick = (type: 'phone' | 'email') => {
    if (type === 'phone') {
      window.location.href = `tel:+13024640950`;
    } else {
      window.location.href = `mailto:kleber@ziontechgroup.com`;
    }
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

          {/* Additional Links */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-white">Legal & Support</h4>
            <div className="flex flex-wrap gap-4 text-sm text-gray-400">
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
              <Link to="/sitemap" className="hover:text-cyan-400 transition-colors duration-200">
                Sitemap
              </Link>
              <Link to="/help" className="hover:text-cyan-400 transition-colors duration-200">
                Help Center
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="border-t border-gray-800 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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
        </div>
      </div>
    </footer>
  );
}