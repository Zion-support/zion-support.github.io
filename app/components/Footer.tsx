import React, { useMemo } from "react";
import { Link } from "react-router-dom";
import { 
  Linkedin, 
  Twitter, 
  Github, 
  Mail, 
  Phone, 
  MapPin, 
  Clock, 
  ArrowRight,
  Brain,
  Shield,
  Zap,
  Globe,
  BarChart3,
  Cloud,
  Code,
  Database,
  Users,
  Award,
  Star,
  Monitor
} from "lucide-react";
import FuturisticButton from "./FuturisticButton";

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

  const quickLinks = useMemo(() => [
    { name: "About Us", href: "/about" },
    { name: "Services", href: "/services" },
    { name: "Case Studies", href: "/case-studies" },
    { name: "Blog", href: "/blog" },
    { name: "Careers", href: "/careers" },
    { name: "Contact", href: "/contact" },
  ], []);

  const aiServices = useMemo(() => [
    { name: "AI Analytics", href: "/ai-analytics" },
    { name: "AI Content Generation", href: "/ai-content-generation" },
    { name: "AI Cybersecurity", href: "/ai-cybersecurity" },
    { name: "AI Customer Support", href: "/ai-customer-support" },
    { name: "AI Healthcare", href: "/ai-healthcare" },
    { name: "AI Marketing", href: "/ai-marketing" },
  ], []);

  const fiveGServices = useMemo(() => [
    { name: "5G Implementation", href: "/5g-implementation" },
    { name: "5G Data Analytics", href: "/5g-data-analytics" },
    { name: "5G Edge Computing", href: "/5g-edge-computing" },
    { name: "5G IoT Solutions", href: "/5g-iot-solutions" },
    { name: "5G Mobile Applications", href: "/5g-mobile-applications" },
    { name: "5G Smart City", href: "/5g-smart-city-solutions" },
  ], []);

  const itServices = useMemo(() => [
    { name: "Cloud Infrastructure", href: "/services" },
    { name: "Cybersecurity", href: "/ai-cybersecurity" },
    { name: "Data Analytics", href: "/ai-data-analytics" },
    { name: "Mobile Development", href: "/ai-mobile-app-development" },
    { name: "Project Management", href: "/ai-project-management" },
    { name: "Quality Assurance", href: "/ai-quality-assurance" },
  ], []);

  const contactInfo = useMemo(() => [
    {
      icon: <Mail className="w-5 h-5 text-cyan-400" />,
      text: "info@ziontechgroup.com",
      href: "mailto:info@ziontechgroup.com"
    },
    {
      icon: <Phone className="w-5 h-5 text-cyan-400" />,
      text: "+1 (302) 464-0950",
      href: "tel:+13024640950"
    },
    {
      icon: <MapPin className="w-5 h-5 text-cyan-400" />,
      text: "364 E Main St STE 1008, Middletown, DE 19709",
      href: "https://maps.google.com/?q=364+E+Main+St+STE+1008+Middletown+DE+19709"
    },
    {
      icon: <Clock className="w-5 h-5 text-cyan-400" />,
      text: "24/7 Support Available",
      href: "/support"
    }
  ], []);

  return (
    <footer className="bg-slate-900/95 backdrop-blur-md border-t border-cyan-500/20 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-cyan-500/10 via-purple-500/10 to-pink-500/10"></div>
      </div>
      
      <div className="relative z-10">
        {/* Main Footer Content */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
            {/* Company Info */}
            <div className="lg:col-span-1">
              <div className="flex items-center space-x-2 mb-6">
                <div className="w-10 h-10 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-lg flex items-center justify-center">
                  <Brain className="w-6 h-6 text-white" />
                </div>
                <span className="text-2xl font-bold text-white">Zion Tech</span>
              </div>
              <p className="text-gray-300 mb-6 max-w-sm">
                Leading provider of AI-powered solutions, 5G technology, and comprehensive IT services 
                for modern businesses worldwide.
              </p>
              <div className="flex space-x-4">
                {socialLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 bg-slate-800/50 hover:bg-cyan-500/20 rounded-lg flex items-center justify-center text-gray-400 hover:text-cyan-400 transition-all duration-300"
                    aria-label={link.name}
                  >
                    {link.icon}
                  </a>
                ))}
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="text-lg font-semibold text-white mb-6 flex items-center">
                <Globe className="w-5 h-5 mr-2 text-cyan-400" />
                Quick Links
              </h3>
              <ul className="space-y-3">
                {quickLinks.map((link) => (
                  <li key={link.name}>
                    <Link
                      to={link.href}
                      className="text-gray-300 hover:text-cyan-400 transition-colors duration-300 flex items-center group"
                    >
                      <ArrowRight className="w-4 h-4 mr-2 opacity-0 group-hover:opacity-100 transition-opacity" />
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* AI Services */}
            <div>
              <h3 className="text-lg font-semibold text-white mb-6 flex items-center">
                <Brain className="w-5 h-5 mr-2 text-cyan-400" />
                AI Services
              </h3>
              <ul className="space-y-3">
                {aiServices.map((service) => (
                  <li key={service.name}>
                    <Link
                      to={service.href}
                      className="text-gray-300 hover:text-cyan-400 transition-colors duration-300 flex items-center group"
                    >
                      <ArrowRight className="w-4 h-4 mr-2 opacity-0 group-hover:opacity-100 transition-opacity" />
                      {service.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* 5G Services */}
            <div>
              <h3 className="text-lg font-semibold text-white mb-6 flex items-center">
                <Zap className="w-5 h-5 mr-2 text-cyan-400" />
                5G Services
              </h3>
              <ul className="space-y-3">
                {fiveGServices.map((service) => (
                  <li key={service.name}>
                    <Link
                      to={service.href}
                      className="text-gray-300 hover:text-cyan-400 transition-colors duration-300 flex items-center group"
                    >
                      <ArrowRight className="w-4 h-4 mr-2 opacity-0 group-hover:opacity-100 transition-opacity" />
                      {service.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* IT Services */}
            <div>
              <h3 className="text-lg font-semibold text-white mb-6 flex items-center">
                <Shield className="w-5 h-5 mr-2 text-cyan-400" />
                IT Services
              </h3>
              <ul className="space-y-3">
                {itServices.map((service) => (
                  <li key={service.name}>
                    <Link
                      to={service.href}
                      className="text-gray-300 hover:text-cyan-400 transition-colors duration-300 flex items-center group"
                    >
                      <ArrowRight className="w-4 h-4 mr-2 opacity-0 group-hover:opacity-100 transition-opacity" />
                      {service.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Contact Information */}
          <div className="mt-12 pt-8 border-t border-slate-700/50">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {contactInfo.map((info, index) => (
                <div key={index} className="flex items-center space-x-3">
                  {info.icon}
                  <a
                    href={info.href}
                    className="text-gray-300 hover:text-cyan-400 transition-colors duration-300"
                  >
                    {info.text}
                  </a>
                </div>
              ))}
            </div>
          </div>

          {/* Newsletter Signup */}
          <div className="mt-12 pt-8 border-t border-slate-700/50">
            <div className="max-w-2xl mx-auto text-center">
              <h3 className="text-2xl font-bold text-white mb-4">
                Stay Updated with Latest Tech Trends
              </h3>
              <p className="text-gray-300 mb-6">
                Subscribe to our newsletter for insights on AI, 5G, cybersecurity, and emerging technologies.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-3 bg-slate-800/50 border border-cyan-500/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                />
                <FuturisticButton className="px-6 py-3">
                  Subscribe
                </FuturisticButton>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-slate-700/50 bg-slate-900/50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
            <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
              <div className="text-gray-400 text-sm">
                © {currentYear} Zion Tech Group. All rights reserved.
              </div>
              <div className="flex space-x-6 text-sm">
                <Link to="/privacy" className="text-gray-400 hover:text-cyan-400 transition-colors">
                  Privacy Policy
                </Link>
                <Link to="/terms" className="text-gray-400 hover:text-cyan-400 transition-colors">
                  Terms of Service
                </Link>
                <Link to="/cookies" className="text-gray-400 hover:text-cyan-400 transition-colors">
                  Cookie Policy
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
});

Footer.displayName = "Footer";

export default Footer;