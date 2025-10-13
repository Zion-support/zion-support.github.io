import React, { useMemo } from "react";
import { Link } from "react-router-dom";
import { Linkedin, Twitter, Github } from "lucide-react";

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

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-7 gap-8 mb-12">
          {/* Company Info */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">Z</span>
              </div>
              <span className="text-xl font-bold">Zion Tech Group</span>
            </div>
            <p className="text-gray-400 text-sm max-w-md">
              Leading provider of AI-powered solutions, 5G implementation, and enterprise IT services. 
              We help businesses transform with cutting-edge technology and innovative solutions.
            </p>
            <div className="space-y-2 text-sm text-gray-400">
              <p><strong className="text-white">Email:</strong> kleber@ziontechgroup.com</p>
              <p><strong className="text-white">Phone:</strong> +1 302 464 0950</p>
              <p><strong className="text-white">Address:</strong> 364 E Main St STE 1008<br />Middletown DE 19709</p>
            </div>
            <div className="flex space-x-4">
              {socialLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white transition-colors"
                  aria-label={link.name}
                >
                  {link.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Services</h4>
            <ul className="space-y-2">
              <li>
                <Link
                  to="/ai-services"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  AI Services
                </Link>
              </li>
              <li>
                <Link
                  to="/services"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  IT Services
                </Link>
              </li>
              <li>
                <Link
                  to="/micro-saas"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Micro SAAS
                </Link>
              </li>
              <li>
                <Link
                  to="/5g-solutions"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  5G Solutions
                </Link>
              </li>
              <li>
                <Link
                  to="/cloud-infrastructure"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Cloud Infrastructure
                </Link>
              </li>
              <li>
                <Link
                  to="/cybersecurity-solutions"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Cybersecurity
                </Link>
              </li>
            </ul>
          </div>

          {/* Micro SAAS Solutions */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Micro SAAS</h4>
            <ul className="space-y-2">
              <li>
                <Link
                  to="/zion-analytics-pro"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Zion Analytics Pro
                </Link>
              </li>
              <li>
                <Link
                  to="/zion-ai-sales-optimizer"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  AI Sales Optimizer
                </Link>
              </li>
              <li>
                <Link
                  to="/zion-smart-inventory"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Smart Inventory
                </Link>
              </li>
              <li>
                <Link
                  to="/zion-ai-content-studio"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  AI Content Studio
                </Link>
              </li>
              <li>
                <Link
                  to="/zion-security-shield"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Security Shield
                </Link>
              </li>
              <li>
                <Link
                  to="/zion-cloud-vault"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Cloud Vault
                </Link>
              </li>
            </ul>
          </div>

          {/* AI Services */}
          <div>
            <h4 className="text-lg font-semibold mb-4">AI Services</h4>
            <ul className="space-y-2">
              <li>
                <Link
                  to="/ai-analytics"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  AI Analytics
                </Link>
              </li>
              <li>
                <Link
                  to="/ai-automation"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  AI Automation
                </Link>
              </li>
              <li>
                <Link
                  to="/ai-content-generation"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Content Generation
                </Link>
              </li>
              <li>
                <Link
                  to="/ai-customer-service"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Customer Service
                </Link>
              </li>
              <li>
                <Link
                  to="/ai-marketing"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  AI Marketing
                </Link>
              </li>
              <li>
                <Link
                  to="/ai-business-intelligence"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Business Intelligence
                </Link>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Company</h4>
            <ul className="space-y-2">
              <li>
                <Link
                  to="/about"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  to="/careers"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Careers
                </Link>
              </li>
              <li>
                <Link
                  to="/case-studies"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Case Studies
                </Link>
              </li>
              <li>
                <Link
                  to="/blog"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Blog
                </Link>
              </li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Support</h4>
            <ul className="space-y-2">
              <li>
                <Link
                  to="/contact"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Contact
                </Link>
              </li>
              <li>
                <Link
                  to="/support"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Help Center
                </Link>
              </li>
              <li>
                <Link
                  to="/pricing"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Pricing
                </Link>
              </li>
              <li>
                <Link
                  to="/consultation"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Consultation
                </Link>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Resources</h4>
            <ul className="space-y-2">
              <li>
                <Link
                  to="/blog"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Blog
                </Link>
              </li>
              <li>
                <Link
                  to="/tutorials"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Tutorials
                </Link>
              </li>
              <li>
                <Link
                  to="/demo"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Demo
                </Link>
              </li>
              <li>
                <Link
                  to="/sitemap"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Sitemap
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © {currentYear} Zion Tech Group. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
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