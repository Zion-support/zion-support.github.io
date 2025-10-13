import React, { useMemo } from "react";
import { Link } from "react-router-dom";
import { Linkedin, Twitter, Github, Mail, Phone, MapPin, ArrowRight, Star, Zap, Shield, Cloud, Brain, Globe } from "lucide-react";

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
    <footer className="bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-cyan-500/10 to-purple-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-br from-purple-500/10 to-pink-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 relative z-10">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8 mb-12">
          {/* Company Info */}
          <div className="lg:col-span-2 space-y-6">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-xl flex items-center justify-center shadow-lg">
                <span className="text-white font-bold text-xl">Z</span>
              </div>
              <div>
                <span className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">Zion Tech Group</span>
                <p className="text-cyan-400 text-sm font-medium">Advanced AI & IT Solutions</p>
              </div>
            </div>
            <p className="text-gray-300 text-sm max-w-md leading-relaxed">
              Leading provider of AI-powered solutions, micro SAAS, IT services, and 5G implementation. 
              We help businesses transform with cutting-edge technology and innovative solutions.
            </p>
            
            {/* Contact Information */}
            <div className="space-y-3">
              <div className="flex items-center space-x-3 text-gray-300">
                <Mail className="w-4 h-4 text-cyan-400" />
                <span className="text-sm">kleber@ziontechgroup.com</span>
              </div>
              <div className="flex items-center space-x-3 text-gray-300">
                <Phone className="w-4 h-4 text-cyan-400" />
                <span className="text-sm">+1 302 464 0950</span>
              </div>
              <div className="flex items-start space-x-3 text-gray-300">
                <MapPin className="w-4 h-4 text-cyan-400 mt-0.5" />
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
                  className="w-10 h-10 bg-white/10 backdrop-blur-sm rounded-lg flex items-center justify-center text-gray-400 hover:text-cyan-400 hover:bg-cyan-500/20 transition-all duration-300 hover:scale-110"
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
              <Brain className="w-5 h-5 text-cyan-400" />
              <h4 className="text-lg font-semibold text-cyan-400">AI Services</h4>
            </div>
            <ul className="space-y-2">
              <li>
                <Link
                  to="/ai-services"
                  className="text-gray-300 hover:text-cyan-400 transition-colors text-sm flex items-center group"
                >
                  <ArrowRight className="w-3 h-3 mr-2 opacity-0 group-hover:opacity-100 transition-opacity" />
                  AI Services Overview
                </Link>
              </li>
              <li>
                <Link
                  to="/ai-analytics"
                  className="text-gray-300 hover:text-cyan-400 transition-colors text-sm flex items-center group"
                >
                  <ArrowRight className="w-3 h-3 mr-2 opacity-0 group-hover:opacity-100 transition-opacity" />
                  AI Analytics
                </Link>
              </li>
              <li>
                <Link
                  to="/ai-automation"
                  className="text-gray-300 hover:text-cyan-400 transition-colors text-sm flex items-center group"
                >
                  <ArrowRight className="w-3 h-3 mr-2 opacity-0 group-hover:opacity-100 transition-opacity" />
                  AI Automation
                </Link>
              </li>
              <li>
                <Link
                  to="/ai-content-generation"
                  className="text-gray-300 hover:text-cyan-400 transition-colors text-sm flex items-center group"
                >
                  <ArrowRight className="w-3 h-3 mr-2 opacity-0 group-hover:opacity-100 transition-opacity" />
                  AI Content Generation
                </Link>
              </li>
              <li>
                <Link
                  to="/ai-customer-service"
                  className="text-gray-300 hover:text-cyan-400 transition-colors text-sm flex items-center group"
                >
                  <ArrowRight className="w-3 h-3 mr-2 opacity-0 group-hover:opacity-100 transition-opacity" />
                  AI Customer Service
                </Link>
              </li>
              <li>
                <Link
                  to="/ai-cybersecurity"
                  className="text-gray-300 hover:text-cyan-400 transition-colors text-sm flex items-center group"
                >
                  <ArrowRight className="w-3 h-3 mr-2 opacity-0 group-hover:opacity-100 transition-opacity" />
                  AI Cybersecurity
                </Link>
              </li>
            </ul>
          </div>

          {/* IT Services */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <Shield className="w-5 h-5 text-green-400" />
              <h4 className="text-lg font-semibold text-green-400">IT Services</h4>
            </div>
            <ul className="space-y-2">
              <li>
                <Link
                  to="/it-services"
                  className="text-gray-300 hover:text-green-400 transition-colors text-sm flex items-center group"
                >
                  <ArrowRight className="w-3 h-3 mr-2 opacity-0 group-hover:opacity-100 transition-opacity" />
                  IT Services Overview
                </Link>
              </li>
              <li>
                <Link
                  to="/cloud-infrastructure"
                  className="text-gray-300 hover:text-green-400 transition-colors text-sm flex items-center group"
                >
                  <ArrowRight className="w-3 h-3 mr-2 opacity-0 group-hover:opacity-100 transition-opacity" />
                  Cloud Infrastructure
                </Link>
              </li>
              <li>
                <Link
                  to="/cybersecurity-solutions"
                  className="text-gray-300 hover:text-green-400 transition-colors text-sm flex items-center group"
                >
                  <ArrowRight className="w-3 h-3 mr-2 opacity-0 group-hover:opacity-100 transition-opacity" />
                  Cybersecurity Solutions
                </Link>
              </li>
              <li>
                <Link
                  to="/web-development"
                  className="text-gray-300 hover:text-green-400 transition-colors text-sm flex items-center group"
                >
                  <ArrowRight className="w-3 h-3 mr-2 opacity-0 group-hover:opacity-100 transition-opacity" />
                  Web Development
                </Link>
              </li>
              <li>
                <Link
                  to="/mobile-development"
                  className="text-gray-300 hover:text-green-400 transition-colors text-sm flex items-center group"
                >
                  <ArrowRight className="w-3 h-3 mr-2 opacity-0 group-hover:opacity-100 transition-opacity" />
                  Mobile Development
                </Link>
              </li>
              <li>
                <Link
                  to="/database-management"
                  className="text-gray-300 hover:text-green-400 transition-colors text-sm flex items-center group"
                >
                  <ArrowRight className="w-3 h-3 mr-2 opacity-0 group-hover:opacity-100 transition-opacity" />
                  Database Management
                </Link>
              </li>
            </ul>
          </div>

          {/* Micro SAAS */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <Zap className="w-5 h-5 text-purple-400" />
              <h4 className="text-lg font-semibold text-purple-400">Micro SAAS</h4>
            </div>
            <ul className="space-y-2">
              <li>
                <Link
                  to="/micro-saas"
                  className="text-gray-300 hover:text-purple-400 transition-colors text-sm flex items-center group"
                >
                  <ArrowRight className="w-3 h-3 mr-2 opacity-0 group-hover:opacity-100 transition-opacity" />
                  Micro SAAS Overview
                </Link>
              </li>
              <li>
                <Link
                  to="/zion-analytics-pro"
                  className="text-gray-300 hover:text-purple-400 transition-colors text-sm flex items-center group"
                >
                  <Star className="w-3 h-3 mr-2 text-yellow-400" />
                  Zion Analytics Pro
                </Link>
              </li>
              <li>
                <Link
                  to="/zion-security-shield"
                  className="text-gray-300 hover:text-purple-400 transition-colors text-sm flex items-center group"
                >
                  <Star className="w-3 h-3 mr-2 text-yellow-400" />
                  Zion Security Shield
                </Link>
              </li>
              <li>
                <Link
                  to="/zion-cloud-vault"
                  className="text-gray-300 hover:text-purple-400 transition-colors text-sm flex items-center group"
                >
                  <ArrowRight className="w-3 h-3 mr-2 opacity-0 group-hover:opacity-100 transition-opacity" />
                  Zion Cloud Vault
                </Link>
              </li>
              <li>
                <Link
                  to="/zion-ai-chatbot-builder"
                  className="text-gray-300 hover:text-purple-400 transition-colors text-sm flex items-center group"
                >
                  <Star className="w-3 h-3 mr-2 text-yellow-400" />
                  AI Chatbot Builder
                </Link>
              </li>
              <li>
                <Link
                  to="/zion-code-assistant"
                  className="text-gray-300 hover:text-purple-400 transition-colors text-sm flex items-center group"
                >
                  <ArrowRight className="w-3 h-3 mr-2 opacity-0 group-hover:opacity-100 transition-opacity" />
                  Code Assistant
                </Link>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <Globe className="w-5 h-5 text-white" />
              <h4 className="text-lg font-semibold text-white">Company</h4>
            </div>
            <ul className="space-y-2">
              <li>
                <Link
                  to="/about"
                  className="text-gray-300 hover:text-white transition-colors text-sm flex items-center group"
                >
                  <ArrowRight className="w-3 h-3 mr-2 opacity-0 group-hover:opacity-100 transition-opacity" />
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  to="/careers"
                  className="text-gray-300 hover:text-white transition-colors text-sm flex items-center group"
                >
                  <ArrowRight className="w-3 h-3 mr-2 opacity-0 group-hover:opacity-100 transition-opacity" />
                  Careers
                </Link>
              </li>
              <li>
                <Link
                  to="/case-studies"
                  className="text-gray-300 hover:text-white transition-colors text-sm flex items-center group"
                >
                  <ArrowRight className="w-3 h-3 mr-2 opacity-0 group-hover:opacity-100 transition-opacity" />
                  Case Studies
                </Link>
              </li>
              <li>
                <Link
                  to="/blog"
                  className="text-gray-300 hover:text-white transition-colors text-sm flex items-center group"
                >
                  <ArrowRight className="w-3 h-3 mr-2 opacity-0 group-hover:opacity-100 transition-opacity" />
                  Blog
                </Link>
              </li>
            </ul>
          </div>

          {/* Support & Resources */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <Cloud className="w-5 h-5 text-cyan-400" />
              <h4 className="text-lg font-semibold text-cyan-400">Support & Resources</h4>
            </div>
            <ul className="space-y-2">
              <li>
                <Link
                  to="/contact"
                  className="text-gray-300 hover:text-cyan-400 transition-colors text-sm flex items-center group"
                >
                  <ArrowRight className="w-3 h-3 mr-2 opacity-0 group-hover:opacity-100 transition-opacity" />
                  Contact Us
                </Link>
              </li>
              <li>
                <Link
                  to="/support"
                  className="text-gray-300 hover:text-cyan-400 transition-colors text-sm flex items-center group"
                >
                  <ArrowRight className="w-3 h-3 mr-2 opacity-0 group-hover:opacity-100 transition-opacity" />
                  Help Center
                </Link>
              </li>
              <li>
                <Link
                  to="/pricing"
                  className="text-gray-300 hover:text-cyan-400 transition-colors text-sm flex items-center group"
                >
                  <ArrowRight className="w-3 h-3 mr-2 opacity-0 group-hover:opacity-100 transition-opacity" />
                  Pricing
                </Link>
              </li>
              <li>
                <Link
                  to="/tutorials"
                  className="text-gray-300 hover:text-cyan-400 transition-colors text-sm flex items-center group"
                >
                  <ArrowRight className="w-3 h-3 mr-2 opacity-0 group-hover:opacity-100 transition-opacity" />
                  Tutorials
                </Link>
              </li>
              <li>
                <Link
                  to="/demo"
                  className="text-gray-300 hover:text-cyan-400 transition-colors text-sm flex items-center group"
                >
                  <ArrowRight className="w-3 h-3 mr-2 opacity-0 group-hover:opacity-100 transition-opacity" />
                  Demo
                </Link>
              </li>
              <li>
                <Link
                  to="/sitemap"
                  className="text-gray-300 hover:text-cyan-400 transition-colors text-sm flex items-center group"
                >
                  <ArrowRight className="w-3 h-3 mr-2 opacity-0 group-hover:opacity-100 transition-opacity" />
                  Sitemap
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Newsletter Signup */}
        <div className="bg-gradient-to-r from-cyan-500/10 to-purple-500/10 rounded-2xl p-8 mb-12 border border-cyan-500/20">
          <div className="text-center">
            <h3 className="text-2xl font-bold text-white mb-2">Stay Updated</h3>
            <p className="text-gray-300 mb-6">Get the latest updates on our AI and IT solutions</p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded-lg bg-white/10 border border-cyan-500/30 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
              />
              <button className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-6 py-3 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center group">
                Subscribe
                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="border-t border-cyan-500/20 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex flex-col md:flex-row items-center space-y-2 md:space-y-0 md:space-x-6">
              <p className="text-gray-300 text-sm">
                © {currentYear} Zion Tech Group. All rights reserved.
              </p>
              <div className="flex items-center space-x-2 text-sm text-gray-400">
                <span>Made with</span>
                <span className="text-red-400">♥</span>
                <span>in Delaware, USA</span>
              </div>
            </div>
            <div className="flex flex-wrap justify-center md:justify-end space-x-6 mt-4 md:mt-0">
              <Link
                to="/privacy"
                className="text-gray-400 hover:text-cyan-400 transition-colors text-sm"
              >
                Privacy Policy
              </Link>
              <Link
                to="/terms"
                className="text-gray-400 hover:text-cyan-400 transition-colors text-sm"
              >
                Terms of Service
              </Link>
              <Link
                to="/cookies"
                className="text-gray-400 hover:text-cyan-400 transition-colors text-sm"
              >
                Cookie Policy
              </Link>
              <Link
                to="/accessibility"
                className="text-gray-400 hover:text-cyan-400 transition-colors text-sm"
              >
                Accessibility
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