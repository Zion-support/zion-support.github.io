import React, { useMemo } from "react";
import { Link } from "react-router-dom";
import { 
  Mail, 
  Phone, 
  MapPin, 
  Globe, 
  ArrowRight, 
  Star, 
  Users, 
  Award, 
  BarChart3, 
  Cloud, 
  Sparkles,
  Zap,
  Shield,
  Brain,
  Network,
  Code,
  Database,
  Cpu,
  FileText,
  TrendingUp,
  Package,
  Heart,
  Receipt,
  Clock,
  Monitor,
  Smartphone
} from "lucide-react";

const Footer: React.FC = () => {
  const currentYear = useMemo(() => new Date().getFullYear(), []);

  const footerLinks = useMemo(() => ({
    services: [
      { name: "AI Solutions", path: "/ai-services" },
      { name: "IT Services", path: "/services" },
      { name: "Micro SAAS", path: "/micro-saas" },
      { name: "5G Solutions", path: "/5g-solutions" },
      { name: "Cloud Infrastructure", path: "/cloud-infrastructure" },
      { name: "Cybersecurity", path: "/cybersecurity-solutions" }
    ],
    company: [
      { name: "About Us", path: "/about" },
      { name: "Contact", path: "/contact" },
      { name: "Blog", path: "/blog" },
      { name: "Privacy Policy", path: "/privacy" },
      { name: "Terms of Service", path: "/terms" }
    ],
    aiServices: [
      { name: "AI Analytics", path: "/ai-analytics" },
      { name: "AI Automation", path: "/ai-automation" },
      { name: "AI Content Generation", path: "/ai-content-generation" },
      { name: "AI Customer Service", path: "/ai-customer-service" },
      { name: "AI Data Analytics", path: "/ai-data-analytics" },
      { name: "AI Marketing", path: "/ai-marketing" }
    ],
    microSaas: [
      { name: "Zion Analytics Pro", path: "/zion-analytics-pro" },
      { name: "Zion Security Shield", path: "/zion-security-shield" },
      { name: "Zion Cloud Vault", path: "/zion-cloud-vault" },
      { name: "Zion Content Studio", path: "/zion-content-studio" }
    ]
  }), []);

  const socialLinks = useMemo(() => [
    { name: "Twitter", href: "https://twitter.com/ziontechgroup", icon: <Globe className="w-5 h-5" /> },
    { name: "LinkedIn", href: "https://linkedin.com/company/ziontechgroup", icon: <Users className="w-5 h-5" /> },
    { name: "Email", href: "mailto:kleber@ziontechgroup.com", icon: <Mail className="w-5 h-5" /> }
  ], []);

  return (
    <footer className="bg-gradient-to-r from-slate-900 via-purple-900 to-slate-900 border-t border-cyan-500/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-lg flex items-center justify-center">
                <Zap className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold text-white">Zion Tech Group</span>
            </div>
            <p className="text-gray-300 mb-6 max-w-md leading-relaxed">
              Leading provider of AI-powered solutions, cybersecurity, cloud infrastructure, 
              and digital transformation services. We help businesses scale, secure, and innovate.
            </p>
            
            {/* Contact Info */}
            <div className="space-y-3">
              <div className="flex items-center space-x-3 text-gray-300">
                <Mail className="w-4 h-4 text-cyan-400" />
                <span className="text-sm">kleber@ziontechgroup.com</span>
              </div>
              <div className="flex items-center space-x-3 text-gray-300">
                <Phone className="w-4 h-4 text-cyan-400" />
                <span className="text-sm">+1 (302) 464-0950</span>
              </div>
              <div className="flex items-center space-x-3 text-gray-300">
                <MapPin className="w-4 h-4 text-cyan-400" />
                <span className="text-sm">364 E Main St STE 1008, Middletown, DE 19709</span>
              </div>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Services</h3>
            <ul className="space-y-2">
              {footerLinks.services.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.path}
                    className="text-gray-300 hover:text-cyan-400 transition-colors duration-300 text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* AI Services */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">AI Services</h3>
            <ul className="space-y-2">
              {footerLinks.aiServices.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.path}
                    className="text-gray-300 hover:text-cyan-400 transition-colors duration-300 text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Micro SAAS */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Micro SAAS</h3>
            <ul className="space-y-2">
              {footerLinks.microSaas.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.path}
                    className="text-gray-300 hover:text-cyan-400 transition-colors duration-300 text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-12 pt-8 border-t border-gray-700">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-gray-400 text-sm">
              © {currentYear} Zion Tech Group. All rights reserved.
            </div>
            
            {/* Social Links */}
            <div className="flex space-x-4">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-cyan-400 transition-colors duration-300"
                  aria-label={social.name}
                >
                  {social.icon}
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