import React, { useMemo } from "react";
import { Link } from "react-router-dom";
import { Linkedin, Twitter, Github, Mail, Phone, MapPin, ArrowRight, Zap, Shield, Cloud, Brain, Rocket, Cpu, Globe } from "lucide-react";

const Footer = React.memo(() => {
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
    { name: "AI Cybersecurity Suite", path: "/ai-cybersecurity-suite" },
    { name: "AI Code Assistant", path: "/ai-code-assistant" },
    { name: "AI Customer Support", path: "/ai-customer-support" },
    { name: "AI Business Intelligence", path: "/ai-business-intelligence" }
  ], []);

  const itServices = useMemo(() => [
    { name: "Cloud Infrastructure", path: "/cloud-infrastructure" },
    { name: "Cybersecurity Solutions", path: "/cybersecurity-solutions" },
    { name: "Web Development", path: "/web-development" },
    { name: "Mobile Development", path: "/mobile-development" },
    { name: "Database Management", path: "/database-management" },
    { name: "5G Solutions", path: "/5g-solutions" }
  ], []);

  const microSAAS = useMemo(() => [
    { name: "Zion Analytics Pro", path: "/zion-analytics-pro" },
    { name: "Zion Security Shield", path: "/zion-security-shield" },
    { name: "Zion Cloud Vault", path: "/zion-cloud-vault" },
    { name: "Zion Content Studio", path: "/zion-content-studio" },
    { name: "Zion Project Master", path: "/zion-project-master" },
    { name: "Zion Workflow Automation", path: "/zion-workflow-automation" }
  ], []);

  return (
    <footer className="relative bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white overflow-hidden">
      {/* Futuristic Background Effects */}
      <div className="absolute inset-0 holographic-grid opacity-20"></div>
      <div className="absolute inset-0 quantum-field opacity-30"></div>
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8 mb-12">
          {/* Company Info */}
          <div className="lg:col-span-2 space-y-6">
            <div className="flex items-center space-x-3">
              <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-xl flex items-center justify-center neon-glow">
                <span className="text-white font-bold text-xl">Z</span>
              </div>
              <div>
                <span className="text-2xl font-bold text-cyberpunk neon-advanced">ZION TECH GROUP</span>
                <p className="text-cyan-400 text-sm font-medium">Advanced AI & IT Solutions</p>
              </div>
            </div>
            <p className="text-gray-300 text-sm max-w-md leading-relaxed">
              Leading provider of AI-powered solutions, 5G implementation, and enterprise IT services. 
              We help businesses transform with cutting-edge technology and innovative solutions.
            </p>
            
            {/* Contact Information */}
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-cyan-400" />
                <a href="tel:+13024640950" className="text-gray-300 hover:text-cyan-400 transition-colors">
                  +1 302 464 0950
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-cyan-400" />
                <a href="mailto:kleber@ziontechgroup.com" className="text-gray-300 hover:text-cyan-400 transition-colors">
                  kleber@ziontechgroup.com
                </a>
              </div>
              <div className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-cyan-400 mt-0.5" />
                <span className="text-gray-300 text-sm">
                  364 E Main St STE 1008<br />
                  Middletown DE 19709
                </span>
              </div>
            </div>

            <div className="flex space-x-4">
              {socialLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-cyan-400 transition-colors p-2 rounded-lg hover:bg-white/10"
                  aria-label={link.name}
                >
                  {link.icon}
                </a>
              ))}
            </div>
          </div>

          {/* AI Services */}
          <div>
            <h4 className="text-lg font-semibold mb-4 flex items-center space-x-2">
              <Brain className="w-5 h-5 text-cyan-400" />
              <span>AI Services</span>
            </h4>
            <ul className="space-y-2">
              {aiServices.map((service) => (
                <li key={service.name}>
                  <Link
                    to={service.path}
                    className="text-gray-300 hover:text-cyan-400 transition-colors text-sm flex items-center space-x-2 group"
                  >
                    <ArrowRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                    <span>{service.name}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* IT Services */}
          <div>
            <h4 className="text-lg font-semibold mb-4 flex items-center space-x-2">
              <Cpu className="w-5 h-5 text-cyan-400" />
              <span>IT Services</span>
            </h4>
            <ul className="space-y-2">
              {itServices.map((service) => (
                <li key={service.name}>
                  <Link
                    to={service.path}
                    className="text-gray-300 hover:text-cyan-400 transition-colors text-sm flex items-center space-x-2 group"
                  >
                    <ArrowRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                    <span>{service.name}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Micro SAAS */}
          <div>
            <h4 className="text-lg font-semibold mb-4 flex items-center space-x-2">
              <Rocket className="w-5 h-5 text-cyan-400" />
              <span>Micro SAAS</span>
            </h4>
            <ul className="space-y-2">
              {microSAAS.map((service) => (
                <li key={service.name}>
                  <Link
                    to={service.path}
                    className="text-gray-300 hover:text-cyan-400 transition-colors text-sm flex items-center space-x-2 group"
                  >
                    <ArrowRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                    <span>{service.name}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-lg font-semibold mb-4 flex items-center space-x-2">
              <Globe className="w-5 h-5 text-cyan-400" />
              <span>Company</span>
            </h4>
            <ul className="space-y-2">
              <li>
                <Link
                  to="/about"
                  className="text-gray-300 hover:text-cyan-400 transition-colors text-sm flex items-center space-x-2 group"
                >
                  <ArrowRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                  <span>About Us</span>
                </Link>
              </li>
              <li>
                <Link
                  to="/careers"
                  className="text-gray-300 hover:text-cyan-400 transition-colors text-sm flex items-center space-x-2 group"
                >
                  <ArrowRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                  <span>Careers</span>
                </Link>
              </li>
              <li>
                <Link
                  to="/case-studies"
                  className="text-gray-300 hover:text-cyan-400 transition-colors text-sm flex items-center space-x-2 group"
                >
                  <ArrowRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                  <span>Case Studies</span>
                </Link>
              </li>
              <li>
                <Link
                  to="/blog"
                  className="text-gray-300 hover:text-cyan-400 transition-colors text-sm flex items-center space-x-2 group"
                >
                  <ArrowRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                  <span>Blog</span>
                </Link>
              </li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4 className="text-lg font-semibold mb-4 flex items-center space-x-2">
              <Shield className="w-5 h-5 text-cyan-400" />
              <span>Support</span>
            </h4>
            <ul className="space-y-2">
              <li>
                <Link
                  to="/contact"
                  className="text-gray-300 hover:text-cyan-400 transition-colors text-sm flex items-center space-x-2 group"
                >
                  <ArrowRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                  <span>Contact</span>
                </Link>
              </li>
              <li>
                <Link
                  to="/support"
                  className="text-gray-300 hover:text-cyan-400 transition-colors text-sm flex items-center space-x-2 group"
                >
                  <ArrowRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                  <span>Help Center</span>
                </Link>
              </li>
              <li>
                <Link
                  to="/pricing"
                  className="text-gray-300 hover:text-cyan-400 transition-colors text-sm flex items-center space-x-2 group"
                >
                  <ArrowRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                  <span>Pricing</span>
                </Link>
              </li>
              <li>
                <Link
                  to="/consultation"
                  className="text-gray-300 hover:text-cyan-400 transition-colors text-sm flex items-center space-x-2 group"
                >
                  <ArrowRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                  <span>Consultation</span>
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="border-t border-cyan-500/30 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-300 text-sm">
              © {currentYear} Zion Tech Group. All rights reserved. | 
              <span className="text-cyan-400 ml-1">Advanced AI & IT Solutions</span>
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <Link
                to="/privacy"
                className="text-gray-300 hover:text-cyan-400 transition-colors text-sm"
              >
                Privacy Policy
              </Link>
              <Link
                to="/terms"
                className="text-gray-300 hover:text-cyan-400 transition-colors text-sm"
              >
                Terms of Service
              </Link>
              <Link
                to="/cookies"
                className="text-gray-300 hover:text-cyan-400 transition-colors text-sm"
              >
                Cookie Policy
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
});

Footer.displayName = 'Footer';

export default Footer;