import React, { useMemo } from "react";
import { Link } from "react-router-dom";
import { 
  Linkedin, 
  Twitter, 
  Github, 
  Mail, 
  Phone, 
  MapPin, 
  Zap, 
  Brain, 
  Settings, 
  Rocket,
  Shield,
  Cloud,
  Globe,
  Database,
  Code,
  Smartphone,
  Heart,
  Home,
  Building
} from "lucide-react";

const EnhancedFooter = React.memo(() => {
  const currentYear = new Date().getFullYear();

  const socialLinks = useMemo(() => [
    {
      name: "Twitter",
      url: "https://twitter.com/ziontechgroup",
      icon: <Twitter className="w-5 h-5" />,
    },
    {
      name: "LinkedIn",
      url: "https://linkedin.com/company/ziontechgroup",
      icon: <Linkedin className="w-5 h-5" />,
    },
    {
      name: "GitHub",
      url: "https://github.com/ziontechgroup",
      icon: <Github className="w-5 h-5" />,
    },
  ], []);

  const aiServices = useMemo(() => [
    { name: "AI Analytics Dashboard", path: "/ai-analytics-dashboard" },
    { name: "AI Content Generation", path: "/ai-content-generation" },
    { name: "AI Customer Support", path: "/ai-customer-support" },
    { name: "AI Cybersecurity", path: "/ai-cybersecurity" },
    { name: "AI Business Intelligence", path: "/ai-business-intelligence" },
    { name: "AI Healthcare", path: "/ai-healthcare" }
  ], []);

  const microSAAS = useMemo(() => [
    { name: "Zion Analytics Pro", path: "/zion-analytics-pro" },
    { name: "Zion Security Shield", path: "/zion-security-shield" },
    { name: "Zion Cloud Vault", path: "/zion-cloud-vault" },
    { name: "Zion AI Crypto Trader", path: "/zion-ai-crypto-trader" },
    { name: "Zion AI Health Monitor", path: "/zion-ai-health-monitor" },
    { name: "Zion AI Smart Home", path: "/zion-ai-smart-home" }
  ], []);

  const itServices = useMemo(() => [
    { name: "Cloud Infrastructure", path: "/cloud-infrastructure" },
    { name: "Cybersecurity Solutions", path: "/cybersecurity-solutions" },
    { name: "Web Development", path: "/web-development" },
    { name: "Mobile Development", path: "/mobile-development" },
    { name: "5G Solutions", path: "/5g-solutions" },
    { name: "Blockchain Development", path: "/blockchain-development" }
  ], []);

  const companyLinks = useMemo(() => [
    { name: "About Us", path: "/about" },
    { name: "Careers", path: "/careers" },
    { name: "Case Studies", path: "/case-studies" },
    { name: "Blog", path: "/blog" },
    { name: "Contact", path: "/contact" }
  ], []);

  const supportLinks = useMemo(() => [
    { name: "Help Center", path: "/support" },
    { name: "Pricing", path: "/pricing" },
    { name: "Consultation", path: "/consultation" },
    { name: "Demo", path: "/demo" },
    { name: "Tutorials", path: "/tutorials" }
  ], []);

  const legalLinks = useMemo(() => [
    { name: "Privacy Policy", path: "/privacy" },
    { name: "Terms of Service", path: "/terms" },
    { name: "Cookie Policy", path: "/cookies" },
    { name: "Sitemap", path: "/sitemap" }
  ], []);

  return (
    <footer className="bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white quantum-field-advanced">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8 mb-12">
          {/* Company Info */}
          <div className="lg:col-span-2 space-y-6">
            <div className="flex items-center space-x-3">
              <div className="w-12 h-12 bg-gradient-to-r from-purple-600 to-pink-600 rounded-xl flex items-center justify-center group hover:scale-110 transition-transform duration-300">
                <span className="text-white font-bold text-2xl">Z</span>
              </div>
              <span className="text-2xl font-bold neon-text-purple">Zion Tech Group</span>
            </div>
            <p className="text-gray-300 text-sm max-w-md leading-relaxed">
              Leading provider of AI-powered solutions, 5G implementation, and enterprise IT services. 
              We help businesses transform with cutting-edge technology and innovative solutions.
            </p>
            
            {/* Contact Information */}
            <div className="space-y-3">
              <div className="flex items-center space-x-3 text-gray-300">
                <Phone className="w-4 h-4 text-purple-400" />
                <span className="text-sm">+1 302 464 0950</span>
              </div>
              <div className="flex items-center space-x-3 text-gray-300">
                <Mail className="w-4 h-4 text-purple-400" />
                <span className="text-sm">kleber@ziontechgroup.com</span>
              </div>
              <div className="flex items-center space-x-3 text-gray-300">
                <MapPin className="w-4 h-4 text-purple-400" />
                <span className="text-sm">364 E Main St STE 1008<br />Middletown DE 19709</span>
              </div>
            </div>

            <div className="flex space-x-4">
              {socialLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-purple-300 transition-all duration-300 hover:scale-110"
                  aria-label={link.name}
                >
                  {link.icon}
                </a>
              ))}
            </div>
          </div>

          {/* AI Services */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <Brain className="w-5 h-5 text-purple-400" />
              <h4 className="text-lg font-semibold neon-text-purple">AI Services</h4>
            </div>
            <ul className="space-y-2">
              {aiServices.map((service) => (
                <li key={service.name}>
                  <Link
                    to={service.path}
                    className="text-gray-300 hover:text-purple-300 transition-colors text-sm"
                  >
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Micro SAAS */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <Zap className="w-5 h-5 text-purple-400" />
              <h4 className="text-lg font-semibold neon-text-purple">Micro SAAS</h4>
            </div>
            <ul className="space-y-2">
              {microSAAS.map((service) => (
                <li key={service.name}>
                  <Link
                    to={service.path}
                    className="text-gray-300 hover:text-purple-300 transition-colors text-sm"
                  >
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* IT Services */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <Settings className="w-5 h-5 text-purple-400" />
              <h4 className="text-lg font-semibold neon-text-purple">IT Services</h4>
            </div>
            <ul className="space-y-2">
              {itServices.map((service) => (
                <li key={service.name}>
                  <Link
                    to={service.path}
                    className="text-gray-300 hover:text-purple-300 transition-colors text-sm"
                  >
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company & Support */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <Building className="w-5 h-5 text-purple-400" />
              <h4 className="text-lg font-semibold neon-text-purple">Company</h4>
            </div>
            <ul className="space-y-2">
              {companyLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.path}
                    className="text-gray-300 hover:text-purple-300 transition-colors text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
            
            <div className="mt-6">
              <div className="flex items-center space-x-2 mb-4">
                <Rocket className="w-5 h-5 text-purple-400" />
                <h4 className="text-lg font-semibold neon-text-purple">Support</h4>
              </div>
              <ul className="space-y-2">
                {supportLinks.map((link) => (
                  <li key={link.name}>
                    <Link
                      to={link.path}
                      className="text-gray-300 hover:text-purple-300 transition-colors text-sm"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Newsletter Signup */}
        <div className="bg-gradient-to-r from-purple-800/30 to-pink-800/30 rounded-2xl p-8 mb-12 border border-purple-500/20">
          <div className="max-w-2xl mx-auto text-center">
            <h3 className="text-2xl font-bold mb-4 neon-text-purple">Stay Updated</h3>
            <p className="text-gray-300 mb-6">
              Get the latest updates on AI innovations, new services, and technology trends.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 bg-slate-800 border border-purple-500/30 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20"
              />
              <button className="btn-quantum px-6 py-3">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="border-t border-purple-500/20 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center space-x-4 mb-4 md:mb-0">
              <p className="text-gray-400 text-sm">
                © {currentYear} Zion Tech Group. All rights reserved.
              </p>
              <span className="text-gray-600">•</span>
              <p className="text-gray-400 text-sm">
                Made with ❤️ for the future
              </p>
            </div>
            <div className="flex flex-wrap justify-center md:justify-end gap-6">
              {legalLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  className="text-gray-400 hover:text-purple-300 transition-colors text-sm"
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
});

EnhancedFooter.displayName = 'EnhancedFooter';

export default EnhancedFooter;