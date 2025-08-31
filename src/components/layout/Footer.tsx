import React from 'react';
import { Link } from 'react-router-dom';
import {
  Phone,
  Mail,
  MapPin,
  Globe,
  Linkedin,
  Twitter,
  Facebook,
  Instagram,
  Youtube,
  Github,
  ArrowRight,
  Zap,
  Brain,
  Shield,
  Cloud,
  Users,
  Building2,
  FileText,
  HelpCircle,
  BarChart,
  Settings,
  Palette,
  Rocket,
  Target,
  Handshake,
  Lightbulb,
  Cpu,
  Leaf,
  Gamepad2,
  Coins,
  Satellite,
  Activity,
  MessageCircle,
  Search,
  ShoppingCart,
  Globe2,
  Network,
  Smartphone,
  Lock,
  Wifi,
  Database,
  Truck,
  Calendar,
  Clock,
  CreditCard,
  Headphones,
  Monitor
} from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const footerSections = [
    {
      title: "AI Solutions",
      links: [
        { name: "AI Services Overview", href: "/ai-services" },
        { name: "Innovative AI Services", href: "/innovative-ai-services-2025" },
        { name: "AI Business Intelligence", href: "/services/ai-business-intelligence" },
        { name: "AI Cybersecurity Suite", href: "/services/ai-cybersecurity-suite" },
        { name: "AI Marketing Automation", href: "/services/ai-marketing-automation" },
        { name: "AI Content Optimizer", href: "/services/ai-content-optimizer-pro" },
        { name: "AI Project Management", href: "/services/ai-project-management-platform" }
      ]
    },
    {
      title: "Micro SAAS",
      links: [
        { name: "Micro SAAS Overview", href: "/micro-saas" },
        { name: "Solutions Showcase", href: "/micro-saas-solutions-showcase-2025" },
        { name: "Cloud FinOps Optimizer", href: "/services/finops-advisor" },
        { name: "SOC2 Compliance", href: "/services/soc2-compliance-automation" },
        { name: "AI Customer Support", href: "/services/ai-customer-support-automation" },
        { name: "AI Workflow Automation", href: "/services/ai-workflow-automation" },
        { name: "Vendor Risk Management", href: "/services/vendor-risk-management" }
      ]
    },
    {
      title: "IT Services",
      links: [
        { name: "IT Services Overview", href: "/it-services" },
        { name: "Cloud & DevOps", href: "/services/cloud-devops" },
        { name: "Cybersecurity", href: "/services/cybersecurity" },
        { name: "Quantum Computing", href: "/services/quantum-computing-solutions" },
        { name: "IoT Edge Computing", href: "/services/ai-iot-edge-computing-platform" },
        { name: "Digital Transformation", href: "/services/digital-transformation" },
        { name: "Onsite Support", href: "/it-onsite-services" }
      ]
    },
    {
      title: "Industry Solutions",
      links: [
        { name: "Healthcare Solutions", href: "/services/ai-healthcare-analytics-platform" },
        { name: "Financial Services", href: "/services/ai-financial-trading-platform" },
        { name: "Manufacturing IoT", href: "/services/ai-iot-edge-computing-platform" },
        { name: "Retail Intelligence", href: "/services/ai-business-intelligence" },
        { name: "Supply Chain AI", href: "/services/ai-supply-chain-optimization" },
        { name: "Green IT Solutions", href: "/services/green-it" },
        { name: "Space Technology", href: "/services/space-tech" }
      ]
    }
  ];

  const companyLinks = [
    { name: "About Us", href: "/about" },
    { name: "Our Team", href: "/team" },
    { name: "Careers", href: "/careers" },
    { name: "News & Updates", href: "/news" },
    { name: "Case Studies", href: "/case-studies" },
    { name: "Partnerships", href: "/partnerships" }
  ];

  const supportLinks = [
    { name: "Help Center", href: "/help" },
    { name: "Documentation", href: "/docs" },
    { name: "API Reference", href: "/api" },
    { name: "Status Page", href: "/status" },
    { name: "Contact Support", href: "/contact" },
    { name: "Training Resources", href: "/training" }
  ];

  const legalLinks = [
    { name: "Privacy Policy", href: "/privacy" },
    { name: "Terms of Service", href: "/terms" },
    { name: "Cookie Policy", href: "/cookies" },
    { name: "GDPR Compliance", href: "/gdpr" },
    { name: "Security Policy", href: "/security" },
    { name: "Accessibility", href: "/accessibility" }
  ];

  const socialLinks = [
    { name: "LinkedIn", href: "https://linkedin.com/company/ziontechgroup", icon: Linkedin },
    { name: "Twitter", href: "https://twitter.com/ziontechgroup", icon: Twitter },
    { name: "Facebook", href: "https://facebook.com/ziontechgroup", icon: Facebook },
    { name: "Instagram", href: "https://instagram.com/ziontechgroup", icon: Instagram },
    { name: "YouTube", href: "https://youtube.com/ziontechgroup", icon: Youtube },
    { name: "GitHub", href: "https://github.com/ziontechgroup", icon: Github }
  ];

  return (
    <footer className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 border-t border-slate-700/50">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <div className="flex items-center mb-6">
              <div className="w-10 h-10 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-lg flex items-center justify-center mr-3">
                <Zap className="w-6 h-6 text-white" />
              </div>
              <span className="text-2xl font-bold text-white">Zion Tech Group</span>
            </div>
            <p className="text-slate-300 mb-6 leading-relaxed">
              Leading provider of innovative AI solutions, micro SAAS services, and cutting-edge technology solutions. 
              Transforming businesses through intelligent automation and digital innovation.
            </p>
            
            {/* Contact Info */}
            <div className="space-y-3">
              <div className="flex items-center text-slate-300">
                <Phone className="w-4 h-4 mr-3 text-cyan-400" />
                <span>+1 302 464 0950</span>
              </div>
              <div className="flex items-center text-slate-300">
                <Mail className="w-4 h-4 mr-3 text-cyan-400" />
                <span>kleber@ziontechgroup.com</span>
              </div>
              <div className="flex items-start text-slate-300">
                <MapPin className="w-4 h-4 mr-3 mt-1 text-cyan-400 flex-shrink-0" />
                <span>364 E Main St STE 1008<br />Middletown DE 19709</span>
              </div>
            </div>
          </div>

          {/* Service Categories */}
          {footerSections.map((section, index) => (
            <div key={section.title}>
              <h3 className="text-lg font-semibold text-white mb-4">{section.title}</h3>
              <ul className="space-y-2">
                {section.links.map((link) => (
                  <li key={link.name}>
                    <Link
                      to={link.href}
                      className="text-slate-300 hover:text-cyan-400 transition-colors duration-200 text-sm"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Additional Links */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12 pt-8 border-t border-slate-700/50">
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Company</h3>
            <ul className="space-y-2">
              {companyLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.href}
                    className="text-slate-300 hover:text-cyan-400 transition-colors duration-200 text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Support</h3>
            <ul className="space-y-2">
              {supportLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.href}
                    className="text-slate-300 hover:text-cyan-400 transition-colors duration-200 text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Legal</h3>
            <ul className="space-y-2">
              {legalLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.href}
                    className="text-slate-300 hover:text-cyan-400 transition-colors duration-200 text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Newsletter Signup */}
        <div className="mt-12 pt-8 border-t border-slate-700/50">
          <div className="bg-gradient-to-r from-slate-800/50 to-slate-700/50 rounded-2xl p-8 border border-slate-600/30">
            <div className="text-center">
              <h3 className="text-2xl font-bold text-white mb-4">
                Stay Updated with Zion Tech Group
              </h3>
              <p className="text-slate-300 mb-6 max-w-2xl mx-auto">
                Get the latest insights on AI technology, industry trends, and exclusive updates about our innovative solutions.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                <input
                  type="email"
                  placeholder="Enter your email address"
                  className="flex-1 px-4 py-3 bg-slate-700/50 border border-slate-600/30 rounded-lg text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                />
                <button className="px-6 py-3 bg-gradient-to-r from-cyan-500 to-purple-500 text-white font-semibold rounded-lg hover:from-cyan-600 hover:to-purple-600 transition-all duration-200 flex items-center justify-center">
                  Subscribe
                  <ArrowRight className="w-4 h-4 ml-2" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="border-t border-slate-700/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            {/* Copyright */}
            <div className="text-slate-400 text-sm">
              © {currentYear} Zion Tech Group. All rights reserved.
            </div>

            {/* Social Links */}
            <div className="flex items-center space-x-4">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-slate-700/50 hover:bg-cyan-500/20 border border-slate-600/30 hover:border-cyan-500/50 rounded-lg flex items-center justify-center text-slate-300 hover:text-cyan-400 transition-all duration-200"
                  aria-label={social.name}
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;