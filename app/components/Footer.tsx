import React, { useMemo } from "react";
import { Link } from "react-router-dom";
import { Linkedin, Twitter, Github, Mail, Phone, MapPin, ArrowRight } from "lucide-react";

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
    { name: "AI Customer Support", path: "/ai-customer-support" },
    { name: "AI Cybersecurity Monitor", path: "/ai-cybersecurity-monitor" },
    { name: "AI Business Intelligence", path: "/ai-business-intelligence" }
  ], []);

  const microSAAS = useMemo(() => [
    { name: "Zion Analytics Pro", path: "/zion-analytics-pro" },
    { name: "Zion Security Shield", path: "/zion-security-shield" },
    { name: "Zion Cloud Vault", path: "/zion-cloud-vault" },
    { name: "Zion Content Studio", path: "/zion-content-studio" },
    { name: "Zion Project Master", path: "/zion-project-master" },
    { name: "Zion AI Code Assistant Pro", path: "/zion-ai-code-assistant-pro" },
    { name: "Zion AI Marketing Automation Pro", path: "/zion-ai-marketing-automation-pro" }
  ], []);

  const itServices = useMemo(() => [
    { name: "Cloud Infrastructure", path: "/cloud-infrastructure" },
    { name: "Cybersecurity Solutions", path: "/cybersecurity-solutions" },
    { name: "Web Development", path: "/web-development" },
    { name: "Mobile Development", path: "/mobile-development" },
    { name: "Database Management", path: "/database-management" }
  ], []);

  const fiveGServices = useMemo(() => [
    { name: "5G Data Analytics", path: "/5g-data-analytics" },
    { name: "5G Edge Computing", path: "/5g-edge-computing" },
    { name: "5G Smart City Solutions", path: "/5g-smart-city-solutions" },
    { name: "5G Private Networks", path: "/5g-private-networks" },
    { name: "5G IoT Solutions", path: "/5g-iot-solutions" }
  ], []);

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8 mb-12">
          {/* Company Info */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">Z</span>
              </div>
              <span className="text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">Zion Tech Group</span>
            </div>
            <p className="text-gray-400 text-sm max-w-md">
              Leading provider of AI-powered solutions, 5G implementation, and enterprise IT services. 
              We help businesses transform with cutting-edge technology and innovative solutions.
            </p>
            
            {/* Contact Information */}
            <div className="space-y-2">
              <div className="flex items-center space-x-2 text-gray-400 text-sm">
                <Phone className="w-4 h-4" />
                <span>+1 302 464 0950</span>
              </div>
              <div className="flex items-center space-x-2 text-gray-400 text-sm">
                <Mail className="w-4 h-4" />
                <span>kleber@ziontechgroup.com</span>
              </div>
              <div className="flex items-start space-x-2 text-gray-400 text-sm">
                <MapPin className="w-4 h-4 mt-0.5" />
                <span>364 E Main St STE 1008<br />Middletown DE 19709</span>
              </div>
            </div>

            <div className="flex space-x-4">
              {socialLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-cyan-400 transition-colors"
                  aria-label={link.name}
                >
                  {link.icon}
                </a>
              ))}
            </div>
          </div>

          {/* AI Services */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-cyan-400">AI Services</h4>
            <ul className="space-y-2">
              {aiServices.map((service) => (
                <li key={service.name}>
                  <Link
                    to={service.path}
                    className="text-gray-400 hover:text-cyan-400 transition-colors text-sm flex items-center group"
                  >
                    <ArrowRight className="w-3 h-3 mr-2 opacity-0 group-hover:opacity-100 transition-opacity" />
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Micro SAAS */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-purple-400">Micro SAAS</h4>
            <ul className="space-y-2">
              {microSAAS.map((service) => (
                <li key={service.name}>
                  <Link
                    to={service.path}
                    className="text-gray-400 hover:text-purple-400 transition-colors text-sm flex items-center group"
                  >
                    <ArrowRight className="w-3 h-3 mr-2 opacity-0 group-hover:opacity-100 transition-opacity" />
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* IT Services */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-green-400">IT Services</h4>
            <ul className="space-y-2">
              {itServices.map((service) => (
                <li key={service.name}>
                  <Link
                    to={service.path}
                    className="text-gray-400 hover:text-green-400 transition-colors text-sm flex items-center group"
                  >
                    <ArrowRight className="w-3 h-3 mr-2 opacity-0 group-hover:opacity-100 transition-opacity" />
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* 5G Solutions */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-orange-400">5G Solutions</h4>
            <ul className="space-y-2">
              {fiveGServices.map((service) => (
                <li key={service.name}>
                  <Link
                    to={service.path}
                    className="text-gray-400 hover:text-orange-400 transition-colors text-sm flex items-center group"
                  >
                    <ArrowRight className="w-3 h-3 mr-2 opacity-0 group-hover:opacity-100 transition-opacity" />
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Company & Support Links */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div>
            <h4 className="text-lg font-semibold mb-4 text-white">Company</h4>
            <ul className="space-y-2">
              <li>
                <Link
                  to="/about"
                  className="text-gray-400 hover:text-white transition-colors text-sm"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  to="/careers"
                  className="text-gray-400 hover:text-white transition-colors text-sm"
                >
                  Careers
                </Link>
              </li>
              <li>
                <Link
                  to="/case-studies"
                  className="text-gray-400 hover:text-white transition-colors text-sm"
                >
                  Case Studies
                </Link>
              </li>
              <li>
                <Link
                  to="/blog"
                  className="text-gray-400 hover:text-white transition-colors text-sm"
                >
                  Blog
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4 text-white">Support</h4>
            <ul className="space-y-2">
              <li>
                <Link
                  to="/contact"
                  className="text-gray-400 hover:text-white transition-colors text-sm"
                >
                  Contact
                </Link>
              </li>
              <li>
                <Link
                  to="/support"
                  className="text-gray-400 hover:text-white transition-colors text-sm"
                >
                  Help Center
                </Link>
              </li>
              <li>
                <Link
                  to="/pricing"
                  className="text-gray-400 hover:text-white transition-colors text-sm"
                >
                  Pricing
                </Link>
              </li>
              <li>
                <Link
                  to="/consultation"
                  className="text-gray-400 hover:text-white transition-colors text-sm"
                >
                  Free Consultation
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4 text-white">Resources</h4>
            <ul className="space-y-2">
              <li>
                <Link
                  to="/tutorials"
                  className="text-gray-400 hover:text-white transition-colors text-sm"
                >
                  Tutorials
                </Link>
              </li>
              <li>
                <Link
                  to="/demo"
                  className="text-gray-400 hover:text-white transition-colors text-sm"
                >
                  Demo
                </Link>
              </li>
              <li>
                <Link
                  to="/sitemap"
                  className="text-gray-400 hover:text-white transition-colors text-sm"
                >
                  Sitemap
                </Link>
              </li>
              <li>
                <a
                  href="https://ziontechgroup.com"
                  className="text-gray-400 hover:text-white transition-colors text-sm"
                >
                  Visit Website
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Newsletter Signup */}
        <div className="bg-gradient-to-r from-cyan-500/10 to-purple-600/10 rounded-lg p-6 mb-8">
          <div className="text-center">
            <h3 className="text-xl font-semibold text-white mb-2">Stay Updated</h3>
            <p className="text-gray-400 text-sm mb-4">
              Get the latest news and updates about our AI and IT solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-2 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-2 rounded-lg bg-white/10 border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500"
              />
              <button className="bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-600 hover:to-purple-700 text-white px-6 py-2 rounded-lg font-semibold transition-all duration-300 flex items-center justify-center">
                Subscribe
                <ArrowRight className="w-4 h-4 ml-2" />
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © {currentYear} Zion Tech Group. All rights reserved.
            </p>
            <div className="flex flex-wrap gap-6 mt-4 md:mt-0">
              <Link
                to="/privacy"
                className="text-gray-400 hover:text-white transition-colors text-sm"
              >
                Privacy Policy
              </Link>
              <Link
                to="/terms"
                className="text-gray-400 hover:text-white transition-colors text-sm"
              >
                Terms of Service
              </Link>
              <Link
                to="/cookies"
                className="text-gray-400 hover:text-white transition-colors text-sm"
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