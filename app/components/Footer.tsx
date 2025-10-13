import React, { useMemo } from "react";
import { Link } from 'react-router-dom';
import { Clock } from 'lucide-react';
import { Users } from 'lucide-react';
import { Award } from 'lucide-react';
import { MapPin } from 'lucide-react';
import { Shield } from 'lucide-react';
import { Zap } from 'lucide-react';
import { Brain } from 'lucide-react';
import { Globe } from 'lucide-react';
import { Code } from 'lucide-react';
import { BarChart3 } from 'lucide-react';
import { Mail } from 'lucide-react';
import { Phone } from 'lucide-react';
import { Cloud } from 'lucide-react';

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

  const services = useMemo(() => [
    { name: "AI Services", path: "/ai-services", icon: <Brain className="w-4 h-4" /> },
    { name: "IT Services", path: "/services", icon: <Shield className="w-4 h-4" /> },
    { name: "Micro SAAS", path: "/micro-saas", icon: <Zap className="w-4 h-4" /> },
    { name: "5G Solutions", path: "/5g-solutions", icon: <Globe className="w-4 h-4" /> },
    { name: "Cloud Services", path: "/cloud-infrastructure", icon: <Cloud className="w-4 h-4" /> },
    { name: "Cybersecurity", path: "/cybersecurity-solutions", icon: <Shield className="w-4 h-4" /> },
    { name: "Web Development", path: "/web-development", icon: <Code className="w-4 h-4" /> },
    { name: "Data Analytics", path: "/ai-data-analytics", icon: <BarChart3 className="w-4 h-4" /> }
  ], []);

  const companyLinks = useMemo(() => [
    { name: "About Us", path: "/about" },
    { name: "Case Studies", path: "/case-studies" },
    { name: "Careers", path: "/careers" },
    { name: "Blog", path: "/blog" },
    { name: "Press", path: "/press" },
    { name: "Partners", path: "/partners" }
  ], []);

  const supportLinks = useMemo(() => [
    { name: "Contact", path: "/contact" },
    { name: "Support", path: "/support" },
    { name: "Documentation", path: "/docs" },
    { name: "Tutorials", path: "/tutorials" },
    { name: "Demo", path: "/demo" },
    { name: "Pricing", path: "/pricing" }
  ], []);

  const legalLinks = useMemo(() => [
    { name: "Privacy Policy", path: "/privacy" },
    { name: "Terms of Service", path: "/terms" },
    { name: "Cookie Policy", path: "/cookies" },
    { name: "GDPR Compliance", path: "/gdpr" },
    { name: "Security", path: "/security" },
    { name: "Sitemap", path: "/sitemap" }
  ], []);

  const stats = useMemo(() => [
    { number: "500+", label: "Projects Completed", icon: <Award className="w-5 h-5" /> },
    { number: "10,000+", label: "Happy Clients", icon: <Users className="w-5 h-5" /> },
    { number: "99.9%", label: "Uptime SLA", icon: <Shield className="w-5 h-5" /> },
    { number: "24/7", label: "Support", icon: <Clock className="w-5 h-5" /> }
  ], []);

  return (
    <footer className="bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/5 via-purple-500/5 to-pink-500/5"></div>
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-cyan-400 to-transparent"></div>
      
      <div className="relative z-10">
        {/* Main Footer Content */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-7 gap-8 mb-12">
            {/* Company Info */}
            <div className="lg:col-span-2 space-y-4">
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-lg flex items-center justify-center">
                  <Brain className="w-5 h-5 text-white" />
                </div>
                <span className="text-xl font-bold bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                  Zion Tech Group
                </span>
              </div>
              <p className="text-gray-300 mb-6 max-w-md">
                Leading provider of AI-powered solutions, IT services, micro SAAS, and digital transformation for modern businesses.
              </p>
              <div className="space-y-2">
                <div className="flex items-center space-x-2 text-gray-300">
                  <Mail className="w-4 h-4" />
                  <span>kleber@ziontechgroup.com</span>
                </div>
                <div className="flex items-center space-x-2 text-gray-300">
                  <Phone className="w-4 h-4" />
                  <span>+1 (302) 464-0950</span>
                </div>
                <div className="flex items-center space-x-2 text-gray-300">
                  <MapPin className="w-4 h-4" />
                  <span>364 E Main St STE 1008, Middletown, DE 19709</span>
                </div>
              </div>
            </div>

            {/* Services */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-white mb-4">Services</h3>
              <ul className="space-y-3">
                {services.map((service) => (
                  <li key={service.name}>
                    <Link
                      to={service.path}
                      className="flex items-center text-gray-300 hover:text-cyan-400 transition-colors group"
                    >
                      <span className="mr-2 group-hover:scale-110 transition-transform duration-300">
                        {service.icon}
                      </span>
                      <span className="text-sm">{service.name}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Company */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-white mb-4">Company</h3>
              <ul className="space-y-3">
                {companyLinks.map((link) => (
                  <li key={link.name}>
                    <Link
                      to={link.path}
                      className="text-gray-300 hover:text-cyan-400 transition-colors text-sm"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Support */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-white mb-4">Support</h3>
              <ul className="space-y-3">
                {supportLinks.map((link) => (
                  <li key={link.name}>
                    <Link
                      to={link.path}
                      className="text-gray-300 hover:text-cyan-400 transition-colors text-sm"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Legal */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-white mb-4">Legal</h3>
              <ul className="space-y-3">
                {legalLinks.map((link) => (
                  <li key={link.name}>
                    <Link
                      to={link.path}
                      className="text-gray-300 hover:text-cyan-400 transition-colors text-sm"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Stats Section */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
            {stats.map((stat, index) => (
              <div key={index} className="text-center group">
                <div className="w-12 h-12 md:w-16 md:h-16 mx-auto mb-4 rounded-full bg-gradient-to-r from-cyan-500/20 to-purple-500/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  {stat.icon}
                </div>
                <div className="text-xl md:text-2xl lg:text-3xl font-bold text-white mb-2">{stat.number}</div>
                <div className="text-gray-300 text-xs md:text-sm">{stat.label}</div>
              </div>
            ))}
          </div>

          {/* Social Links */}
          <div className="flex justify-center space-x-6 mb-8">
            {socialLinks.map((social) => (
              <a
                key={social.name}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-cyan-400 transition-colors duration-300 hover:scale-110"
                aria-label={social.name}
              >
                {social.icon}
              </a>
            ))}
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
      </div>
    </footer>
  );
});

Footer.displayName = "Footer";

export default Footer;
