import React, { useMemo } from "react";
import { Link } from "react-router-dom";
import { Linkedin, Twitter, Github, Mail, Phone, MapPin, ArrowRight, Sparkles, Zap } from "lucide-react";

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

  const contactInfo = useMemo(() => [
    {
      icon: <Mail className="w-5 h-5" />,
      label: "Email",
      value: "kleber@ziontechgroup.com",
      link: "mailto:kleber@ziontechgroup.com"
    },
    {
      icon: <Phone className="w-5 h-5" />,
      label: "Phone",
      value: "+1 302 464 0950",
      link: "tel:+13024640950"
    },
    {
      icon: <MapPin className="w-5 h-5" />,
      label: "Address",
      value: "364 E Main St STE 1008\nMiddletown DE 19709",
      link: "https://maps.google.com/?q=364+E+Main+St+STE+1008+Middletown+DE+19709"
    }
  ], []);

  return (
    <footer className="relative bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-cyan-500/10 to-purple-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-br from-purple-500/10 to-pink-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-br from-blue-500/5 to-cyan-500/5 rounded-full blur-3xl animate-pulse delay-500"></div>
      </div>

      {/* Holographic Grid Overlay */}
      <div className="absolute inset-0 holographic-grid opacity-20"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8 mb-12">
          {/* Company Info */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-gradient-to-r from-cyan-500 via-purple-500 to-pink-500 rounded-lg flex items-center justify-center relative overflow-hidden">
                <span className="text-white font-bold text-xl relative z-10">Z</span>
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 opacity-0 hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              <span className="text-2xl font-bold bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                Zion Tech Group
              </span>
            </div>
            <p className="text-gray-300 text-sm max-w-md leading-relaxed">
              Leading provider of AI-powered solutions, 5G implementation, and enterprise IT services. 
              We help businesses transform with cutting-edge technology and innovative solutions.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-cyan-400 transition-all duration-300 hover:scale-110 p-2 rounded-lg hover:bg-cyan-500/10"
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
              <li>
                <Link
                  to="/ai-analytics"
                  className="text-gray-300 hover:text-cyan-400 transition-colors duration-300 hover:translate-x-1 inline-block"
                >
                  AI Analytics
                </Link>
              </li>
              <li>
                <Link
                  to="/ai-automation"
                  className="text-gray-300 hover:text-cyan-400 transition-colors duration-300 hover:translate-x-1 inline-block"
                >
                  AI Automation
                </Link>
              </li>
              <li>
                <Link
                  to="/ai-content-generation"
                  className="text-gray-300 hover:text-cyan-400 transition-colors duration-300 hover:translate-x-1 inline-block"
                >
                  AI Content Generation
                </Link>
              </li>
              <li>
                <Link
                  to="/ai-customer-service"
                  className="text-gray-300 hover:text-cyan-400 transition-colors duration-300 hover:translate-x-1 inline-block"
                >
                  AI Customer Service
                </Link>
              </li>
              <li>
                <Link
                  to="/ai-marketing"
                  className="text-gray-300 hover:text-cyan-400 transition-colors duration-300 hover:translate-x-1 inline-block"
                >
                  AI Marketing
                </Link>
              </li>
            </ul>
          </div>

          {/* Micro SAAS */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-purple-400">Micro SAAS</h4>
            <ul className="space-y-2">
              <li>
                <Link
                  to="/zion-ai-video-generator"
                  className="text-gray-300 hover:text-purple-400 transition-colors duration-300 hover:translate-x-1 inline-block"
                >
                  AI Video Generator
                </Link>
              </li>
              <li>
                <Link
                  to="/zion-ai-code-reviewer"
                  className="text-gray-300 hover:text-purple-400 transition-colors duration-300 hover:translate-x-1 inline-block"
                >
                  AI Code Reviewer
                </Link>
              </li>
              <li>
                <Link
                  to="/zion-ai-translator-pro"
                  className="text-gray-300 hover:text-purple-400 transition-colors duration-300 hover:translate-x-1 inline-block"
                >
                  AI Translator Pro
                </Link>
              </li>
              <li>
                <Link
                  to="/zion-ai-voice-cloner"
                  className="text-gray-300 hover:text-purple-400 transition-colors duration-300 hover:translate-x-1 inline-block"
                >
                  AI Voice Cloner
                </Link>
              </li>
              <li>
                <Link
                  to="/zion-analytics-pro"
                  className="text-gray-300 hover:text-purple-400 transition-colors duration-300 hover:translate-x-1 inline-block"
                >
                  Analytics Pro
                </Link>
              </li>
            </ul>
          </div>

          {/* IT Services */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-green-400">IT Services</h4>
            <ul className="space-y-2">
              <li>
                <Link
                  to="/cloud-infrastructure"
                  className="text-gray-300 hover:text-green-400 transition-colors duration-300 hover:translate-x-1 inline-block"
                >
                  Cloud Infrastructure
                </Link>
              </li>
              <li>
                <Link
                  to="/cybersecurity-solutions"
                  className="text-gray-300 hover:text-green-400 transition-colors duration-300 hover:translate-x-1 inline-block"
                >
                  Cybersecurity
                </Link>
              </li>
              <li>
                <Link
                  to="/web-development"
                  className="text-gray-300 hover:text-green-400 transition-colors duration-300 hover:translate-x-1 inline-block"
                >
                  Web Development
                </Link>
              </li>
              <li>
                <Link
                  to="/mobile-development"
                  className="text-gray-300 hover:text-green-400 transition-colors duration-300 hover:translate-x-1 inline-block"
                >
                  Mobile Development
                </Link>
              </li>
              <li>
                <Link
                  to="/data-analytics"
                  className="text-gray-300 hover:text-green-400 transition-colors duration-300 hover:translate-x-1 inline-block"
                >
                  Data Analytics
                </Link>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-pink-400">Company</h4>
            <ul className="space-y-2">
              <li>
                <Link
                  to="/about"
                  className="text-gray-300 hover:text-pink-400 transition-colors duration-300 hover:translate-x-1 inline-block"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  to="/careers"
                  className="text-gray-300 hover:text-pink-400 transition-colors duration-300 hover:translate-x-1 inline-block"
                >
                  Careers
                </Link>
              </li>
              <li>
                <Link
                  to="/case-studies"
                  className="text-gray-300 hover:text-pink-400 transition-colors duration-300 hover:translate-x-1 inline-block"
                >
                  Case Studies
                </Link>
              </li>
              <li>
                <Link
                  to="/blog"
                  className="text-gray-300 hover:text-pink-400 transition-colors duration-300 hover:translate-x-1 inline-block"
                >
                  Blog
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="text-gray-300 hover:text-pink-400 transition-colors duration-300 hover:translate-x-1 inline-block"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Contact Information */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12 p-6 bg-white/5 backdrop-blur-sm rounded-xl border border-white/10">
          {contactInfo.map((contact, index) => (
            <div key={index} className="text-center group">
              <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-lg flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-transform duration-300">
                {contact.icon}
              </div>
              <h3 className="text-white font-semibold mb-2">{contact.label}</h3>
              <a
                href={contact.link}
                className="text-cyan-400 hover:text-cyan-300 transition-colors duration-300 text-sm whitespace-pre-line"
              >
                {contact.value}
              </a>
            </div>
          ))}
        </div>

        {/* Newsletter Signup */}
        <div className="mb-12 p-8 bg-gradient-to-r from-cyan-500/10 to-purple-500/10 rounded-xl border border-cyan-500/20">
          <div className="text-center">
            <h3 className="text-2xl font-bold text-white mb-4">
              Stay Updated with Latest AI Innovations
            </h3>
            <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
              Get the latest updates on AI technology, new micro SAAS solutions, and industry insights delivered to your inbox.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
              />
              <button className="bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-600 hover:to-purple-700 px-6 py-3 rounded-lg font-semibold transition-all duration-300 flex items-center justify-center group">
                Subscribe
                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="border-t border-gray-700 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm mb-4 md:mb-0">
              © {currentYear} Zion Tech Group. All rights reserved.
            </p>
            <div className="flex flex-wrap justify-center md:justify-end gap-6">
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
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
});

EnhancedFooter.displayName = 'EnhancedFooter';

export default EnhancedFooter;