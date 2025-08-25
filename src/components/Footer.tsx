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
  Target as TargetIcon,
  Building2,
  Users,
  Globe,
  BookOpen,
  MessageCircle,
  FileText,
  Star,
  CheckCircle,
  Play,
  Download
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
        { label: "Agentic RAG Helpdesk", path: "/agentic-rag-helpdesk" },
        { label: "Quantum Neural Networks", path: "/quantum-neural-network-platform" },
        { label: "Autonomous Business Platform", path: "/autonomous-business-operations-platform" },
        { label: "AI Asset Management", path: "/ai-powered-it-asset-management" },
        { label: "Quantum Technology", path: "/services/quantum-technology" },
        { label: "IT Infrastructure", path: "/services/it-infrastructure" },
        { label: "Micro SAAS Solutions", path: "/services/micro-saas-solutions" },
        { label: "Cybersecurity", path: "/services/cybersecurity" },
        { label: "SOC2 Compliance Automation", path: "/soc2-compliance-automation" },
        { label: "Industry Solutions", path: "/services/industry-solutions" },
        { label: "AI Business Intelligence", path: "/services#ai-bi" },
        { label: "Cloud & Infrastructure", path: "/services#cloud" },
        { label: "5G Enterprise Solutions", path: "/5g-enterprise-solutions" },
        { label: "Blockchain Solutions", path: "/services#blockchain" },
        { label: "IoT & Edge Computing", path: "/services#iot" }
      ]
    },
    {
      title: "Solutions & Industries",
      icon: Target,
      color: "from-blue-500 to-cyan-500",
      links: [
        { label: "Enterprise Solutions", path: "/solutions/enterprise" },
        { label: "Healthcare Solutions", path: "/solutions/healthcare" },
        { label: "Financial Solutions", path: "/solutions/financial" },
        { label: "Manufacturing Solutions", path: "/solutions/manufacturing" },
        { label: "Retail Solutions", path: "/solutions/retail" },
        { label: "Government Solutions", path: "/solutions/government" },
        { label: "Business Intelligence", path: "/services/business-intelligence" },
        { label: "Marketing Automation", path: "/services#ai-marketing" },
        { label: "HR & Recruitment", path: "/services#ai-hr" },
        { label: "Legal Tech", path: "/services#ai-legal" },
        { label: "Affiliate Attribution Hub", path: "/affiliate-attribution-hub" },
        { label: "Quantum Financial Trading", path: "/quantum-financial-trading" },
        { label: "Space Technology", path: "/space-tech" },
        { label: "Research & Development", path: "/research-development" }
      ]
    },
    {
      title: "Company & Resources",
      icon: Building2,
      color: "from-green-500 to-emerald-500",
      links: [
        { label: "About Us", path: "/about" },
        { label: "Our Mission", path: "/mission" },
        { label: "Team", path: "/team" },
        { label: "Pricing", path: "/pricing" },
        { label: "Careers", path: "/careers" },
        { label: "Partners", path: "/partners" },
        { label: "Contact", path: "/contact" },
        { label: "Case Studies", path: "/case-studies" },
        { label: "Accessibility Auditor", path: "/accessibility-auditor" },
        { label: "Blog", path: "/blog" },
        { label: "News", path: "/news" },
        { label: "Webinars", path: "/webinars" },
        { label: "White Papers", path: "/white-papers" },
        { label: "Testimonials", path: "/testimonials" }
      ]
    },
    {
      title: "Support & Help",
      icon: MessageCircle,
      color: "from-indigo-500 to-purple-500",
      links: [
        { label: "Help Center", path: "/help" },
        { label: "Documentation", path: "/docs" },
        { label: "FAQ", path: "/faq" },
        { label: "Contact Support", path: "/support" },
        { label: "Status Page", path: "/status" },
        { label: "Privacy Policy", path: "/privacy" },
        { label: "Terms of Service", path: "/terms" },
        { label: "Cookie Policy", path: "/cookies" },
        { label: "Accessibility", path: "/accessibility" },
        { label: "Sitemap", path: "/sitemap" }
      ]
    }
  ];

  const quickLinks = [
    { label: "Get Started", path: "/contact", icon: Rocket },
    { label: "View Services", path: "/services", icon: Sparkles },
    { label: "Request Demo", path: "/demo", icon: Play },
    { label: "Download Brochure", path: "/brochure", icon: Download }
  ];

  const socialLinks = [
    { 
      icon: Linkedin, 
      href: "https://linkedin.com/company/ziontechgroup", 
      label: "LinkedIn",
      color: "hover:bg-blue-600"
    },
    { 
      icon: Twitter, 
      href: "https://twitter.com/ziontechgroup", 
      label: "Twitter",
      color: "hover:bg-blue-400"
    },
    { 
      icon: Github, 
      href: "https://github.com/ziontechgroup", 
      label: "GitHub",
      color: "hover:bg-gray-700"
    },
    { 
      icon: Youtube, 
      href: "https://youtube.com/@ziontechgroup", 
      label: "YouTube",
      color: "hover:bg-red-600"
    }
  ];

  const contactInfo = [
    { 
      icon: Phone, 
      text: "+1 302 464 0950", 
      href: "tel:+13024640950",
      label: "Phone"
    },
    { 
      icon: Mail, 
      text: "kleber@ziontechgroup.com", 
      href: "mailto:kleber@ziontechgroup.com",
      label: "Email"
    },
    { 
      icon: MapPin, 
      text: "364 E Main St STE 1008 Middletown DE 19709", 
      href: "#",
      label: "Address"
    }
  ];

  const newsletterSignup = {
    title: "Stay Updated",
    description: "Get the latest insights on AI, quantum technology, and cybersecurity delivered to your inbox.",
    placeholder: "Enter your email address",
    buttonText: "Subscribe",
    benefits: [
      "Weekly industry insights",
      "Exclusive content",
      "Early access to webinars",
      "Product updates"
    ]
  };

  return (
    <footer className="bg-gray-900 border-t border-gray-800">
      {/* Main Footer Content */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {footerSections.map((section, index) => (
            <div key={index} className="space-y-4">
              <div className="flex items-center space-x-3">
                <div className={`w-10 h-10 bg-gradient-to-br ${section.color} rounded-lg flex items-center justify-center`}>
                  <section.icon className="w-5 h-5 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-white">{section.title}</h3>
              </div>
              <ul className="space-y-2">
                {section.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <Link
                      to={link.path}
                      className="text-gray-400 hover:text-cyan-400 transition-colors duration-300 text-sm hover:underline"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Newsletter Signup */}
        <div className="border-t border-gray-800 pt-12 mb-12">
          <div className="max-w-4xl mx-auto text-center">
            <div className="flex items-center justify-center space-x-3 mb-4">
              <div className="w-12 h-12 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-xl flex items-center justify-center">
                <Mail className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-white">{newsletterSignup.title}</h3>
            </div>
            <p className="text-gray-300 mb-6 max-w-2xl mx-auto">{newsletterSignup.description}</p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto mb-6">
              <input
                type="email"
                placeholder={newsletterSignup.placeholder}
                className="flex-1 px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
              />
              <button className="px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-lg hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105">
                {newsletterSignup.buttonText}
              </button>
            </div>
            
            <div className="flex flex-wrap justify-center gap-4 text-sm text-gray-400">
              {newsletterSignup.benefits.map((benefit, index) => (
                <div key={index} className="flex items-center space-x-2">
                  <CheckCircle className="w-4 h-4 text-cyan-400" />
                  <span>{benefit}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Quick Links & Contact */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 border-t border-gray-800 pt-12">
          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Quick Actions</h4>
            <div className="grid grid-cols-2 gap-3">
              {quickLinks.map((link, index) => (
                <Link
                  key={index}
                  to={link.path}
                  className="flex items-center space-x-2 p-3 bg-gray-800/50 rounded-lg hover:bg-gray-800 transition-all duration-300 group"
                >
                  <link.icon className="w-4 h-4 text-cyan-400 group-hover:scale-110 transition-transform duration-300" />
                  <span className="text-gray-300 group-hover:text-white text-sm font-medium">{link.label}</span>
                </Link>
              ))}
            </div>
          </div>

          {/* Contact Information */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Contact Information</h4>
            <div className="space-y-3">
              {contactInfo.map((contact, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <div className="w-8 h-8 bg-gray-800 rounded-lg flex items-center justify-center flex-shrink-0">
                    <contact.icon className="w-4 h-4 text-cyan-400" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-400">{contact.label}</p>
                    <a
                      href={contact.href}
                      className="text-gray-300 hover:text-cyan-400 transition-colors duration-300 text-sm"
                    >
                      {contact.text}
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Social Links */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Follow Us</h4>
            <div className="flex space-x-3">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center text-gray-400 hover:text-white transition-all duration-300 ${social.color}`}
                  aria-label={social.label}
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
            
            <div className="mt-6">
              <h5 className="text-sm font-semibold text-gray-400 mb-2">Trust & Security</h5>
              <div className="flex items-center space-x-2">
                <Shield className="w-4 h-4 text-green-400" />
                <span className="text-xs text-gray-500">SOC2 Compliant</span>
                <Lock className="w-4 h-4 text-blue-400" />
                <span className="text-xs text-gray-500">ISO 27001</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="border-t border-gray-800 bg-gray-950">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
            {/* Copyright & Company Info */}
            <div className="flex flex-col md:flex-row items-center space-y-2 md:space-y-0 md:space-x-6">
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-gradient-to-br from-cyan-400 to-blue-600 rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-sm">Z</span>
                </div>
                <span className="text-white font-semibold">Zion Tech Group</span>
              </div>
              <span className="text-gray-400 text-sm">
                © {currentYear} All rights reserved.
              </span>
            </div>

            {/* Legal Links */}
            <div className="flex flex-wrap items-center space-x-6 text-sm">
              <Link
                to="/privacy"
                className="text-gray-400 hover:text-cyan-400 transition-colors duration-300"
              >
                Privacy Policy
              </Link>
              <Link
                to="/terms"
                className="text-gray-400 hover:text-cyan-400 transition-colors duration-300"
              >
                Terms of Service
              </Link>
              <Link
                to="/cookies"
                className="text-gray-400 hover:text-cyan-400 transition-colors duration-300"
              >
                Cookie Policy
              </Link>
              <Link
                to="/accessibility"
                className="text-gray-400 hover:text-cyan-400 transition-colors duration-300"
              >
                Accessibility
              </Link>
            </div>
          </div>

          {/* Additional Info */}
          <div className="mt-4 pt-4 border-t border-gray-800 text-center">
            <p className="text-gray-500 text-xs">
              Zion Tech Group is a leading provider of AI-powered solutions, quantum technology, and cybersecurity services. 
              Transforming businesses through innovative technology solutions.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}