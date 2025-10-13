<<<<<<< HEAD
<<<<<<< HEAD
import React from 'react';
import { Link } from 'react-router-dom';
import {
  Brain,
  Mail,
  Phone,
  MapPin,
  Clock,
  ArrowRight,
  Shield,
  Zap,
  Globe,
  Twitter,
  Linkedin,
  Github,
  Award,
  Users
} from "lucide-react";
=======
import React from "react";
>>>>>>> cursor/fix-errors-and-merge-to-main-b6b8

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      name: "Twitter",
      href: "https://twitter.com/ziontechgroup",
      icon: <Twitter className="w-5 h-5" />
    },
    {
      name: "LinkedIn",
      href: "https://linkedin.com/company/ziontechgroup",
      icon: <Linkedin className="w-5 h-5" />
    },
    {
      name: "GitHub",
      href: "https://github.com/ziontechgroup",
      icon: <Github className="w-5 h-5" />
    }
  ];

  const serviceCategories = [
    {
      title: "AI Solutions",
      services: [
        { name: "AI Analytics", href: "/ai-analytics" },
        { name: "AI Content Generation", href: "/ai-content-generation" },
        { name: "AI Customer Support", href: "/ai-customer-support" },
        { name: "AI Cybersecurity", href: "/ai-cybersecurity" },
        { name: "AI Data Analytics", href: "/ai-data-analytics" }
      ]
    },
    {
      title: "5G Solutions",
      services: [
        { name: "5G Network Design", href: "/5g-network-design" },
        { name: "5G Implementation", href: "/5g-implementation" },
        { name: "5G Private Networks", href: "/5g-private-networks" }
      ]
    }
  ];

  const quickLinks = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Services", path: "/services" },
    { name: "AI Services", path: "/ai-services" },
    { name: "Micro SAAS", path: "/micro-saas" },
    { name: "5G Solutions", path: "/5g-solutions" },
    { name: "Contact", path: "/contact" },
    { name: "Blog", path: "/blog" }
  ];

  const legalLinks = [
    { name: "Privacy Policy", path: "/privacy" },
    { name: "Terms of Service", path: "/terms" },
    { name: "Cookie Policy", path: "/cookies" },
    { name: "GDPR", path: "/gdpr" }
  ];

  const stats = [
=======
import React, { useMemo } from 'react';
import { Link } from 'react-router-dom';
import { 
  Twitter, 
  Linkedin, 
  Github, 
  Mail, 
  Phone, 
  MapPin, 
  Brain, 
  Shield, 
  Zap, 
  Globe, 
  Cloud, 
  Code, 
  BarChart3, 
  Award, 
  Users, 
  Clock 
} from 'lucide-react';

<<<<<<< HEAD
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
    }
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
>>>>>>> cursor/fix-errors-and-merge-to-main-eba1
    { number: "500+", label: "Projects Completed", icon: <Award className="w-5 h-5" /> },
    { number: "10,000+", label: "Happy Clients", icon: <Users className="w-5 h-5" /> },
    { number: "99.9%", label: "Uptime SLA", icon: <Shield className="w-5 h-5" /> },
    { number: "24/7", label: "Support", icon: <Clock className="w-5 h-5" /> }
<<<<<<< HEAD
  ];

export default function Footer({ className = '', children, ...props }: FooterProps) {
  return (
    <footer className="bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-cyan-500/10 to-purple-500/10 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-br from-purple-500/10 to-pink-500/10 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10">
        {/* Stats Section */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="w-12 h-12 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 rounded-lg flex items-center justify-center mx-auto mb-3">
                  {stat.icon}
                </div>
                <div className="text-2xl font-bold text-white mb-1">{stat.number}</div>
                <div className="text-gray-300 text-sm">{stat.label}</div>
              </div>
            ))}
          </div>

          {/* Main Content */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8">
            {/* Company Info */}
            <div className="lg:col-span-2">
              <div className="flex items-center space-x-2 mb-4">
                <Brain className="w-8 h-8 text-cyan-400" />
                <span className="text-2xl font-bold text-white">Zion Tech Group</span>
              </div>
              <p className="text-gray-300 mb-6 max-w-md">
                Leading provider of AI-powered enterprise solutions, quantum computing, and digital transformation services.
              </p>

              {/* Contact Info */}
              <div className="space-y-3 mb-6">
                <div className="flex items-center space-x-3">
                  <Phone className="w-5 h-5 text-cyan-400" />
                  <span>+1 302 464 0950</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Mail className="w-5 h-5 text-cyan-400" />
                  <span>kleber@ziontechgroup.com</span>
                </div>
                <div className="flex items-center space-x-3">
                  <MapPin className="w-5 h-5 text-cyan-400" />
                  <span>364 E Main St STE 1008, Middletown DE 19709</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Clock className="w-5 h-5 text-cyan-400" />
                  <span>Mon-Fri 9AM-6PM EST</span>
                </div>
              </div>

              {/* Social Links */}
              <div className="flex space-x-4">
                {socialLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 bg-gray-800 hover:bg-cyan-500 rounded-lg flex items-center justify-center transition-colors duration-200"
                    aria-label={link.name}
                  >
                    {link.icon}
                  </a>
                ))}
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="text-lg font-semibold text-white mb-4">Quick Links</h3>
              <ul className="space-y-2">
                {quickLinks.map((link, index) => (
                  <li key={index}>
                    <Link
                      to={link.path}
                      className="text-gray-300 hover:text-cyan-400 transition-colors duration-200 flex items-center group"
                    >
                      <ArrowRight className="w-4 h-4 mr-2 group-hover:translate-x-1 transition-transform duration-200" />
=======
  ], []);
=======
interface FooterProps {
  className?: string;
  children?: React.ReactNode;
}
>>>>>>> origin/main

export default function Footer({ className = '', children, ...props }: FooterProps) {
  return (
<<<<<<< HEAD
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
>>>>>>> cursor/fix-errors-and-merge-to-main-eba1
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
<<<<<<< HEAD

            {/* Service Categories */}
            {serviceCategories.map((category, index) => (
              <div key={index}>
                <h3 className="text-lg font-semibold text-white mb-4">{category.title}</h3>
                <ul className="space-y-2">
                  {category.services.map((service, serviceIndex) => (
                    <li key={serviceIndex}>
                      <Link
                        to={service.href}
                        className="text-gray-300 hover:text-cyan-400 transition-colors duration-200 flex items-center group"
                      >
                        <ArrowRight className="w-4 h-4 mr-2 group-hover:translate-x-1 transition-transform duration-200" />
                        {service.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}

            {/* Legal */}
            <div>
              <h3 className="text-lg font-semibold text-white mb-4">Legal</h3>
              <ul className="space-y-2">
                {legalLinks.map((link, index) => (
                  <li key={index}>
                    <Link
                      to={link.path}
                      className="text-gray-300 hover:text-cyan-400 transition-colors duration-200 flex items-center group"
                    >
                      <ArrowRight className="w-4 h-4 mr-2 group-hover:translate-x-1 transition-transform duration-200" />
=======
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
>>>>>>> cursor/fix-errors-and-merge-to-main-eba1
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
<<<<<<< HEAD

          {/* Bottom Bar */}
          <div className="border-t border-white/10 mt-12 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <div className="text-gray-400 text-sm mb-4 md:mb-0">
                © {currentYear} Zion Tech Group. All rights reserved.
              </div>
              <div className="flex space-x-6">
                {socialLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-cyan-400 transition-colors duration-200"
                    aria-label={link.name}
                  >
                    {link.icon}
                  </a>
                ))}
=======
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
>>>>>>> cursor/fix-errors-and-merge-to-main-eba1
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
<<<<<<< HEAD
=======
  );
};

Footer.displayName = "Footer";

export default Footer;
=======
    <div className={`footer-component ${className}`} {...props}>
      {children}
    </div>
>>>>>>> cursor/fix-errors-and-merge-to-main-eba1
  );
};

export default Footer;

}
>>>>>>> origin/main
