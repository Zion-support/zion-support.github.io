import React from "react";
import { Link } from 'react-router-dom';
import { ArrowRight, Clock, Users, Award, Star, MapPin, Shield, Database, Zap, Brain, Globe, Code, BarChart3, Mail, Phone, Mic, Cloud, Twitter, Linkedin, Github, Youtube, Instagram } from 'lucide-react';

interface FooterProps {
  className?: string;
  children?: React.ReactNode;
}

export default function Footer({ className = '', children, ...props }: FooterProps) {
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
    },
    {
      name: "YouTube",
      href: "https://youtube.com/@ziontechgroup",
      icon: <Youtube className="w-5 h-5" />
    },
    {
      name: "Instagram",
      href: "https://instagram.com/ziontechgroup",
      icon: <Instagram className="w-5 h-5" />
    }
  ];

  const serviceCategories = [
    {
      title: "AI Solutions",
      links: [
        { name: "AI Analytics", href: "/ai-analytics" },
        { name: "Machine Learning", href: "/machine-learning" },
        { name: "Natural Language Processing", href: "/ai-nlp" },
        { name: "Computer Vision", href: "/computer-vision" }
      ]
    },
    {
      title: "IT Services",
      links: [
        { name: "Cloud Migration", href: "/cloud-migration" },
        { name: "Cybersecurity", href: "/cybersecurity" },
        { name: "DevOps", href: "/devops-services" },
        { name: "Data Analytics", href: "/data-analytics" }
      ]
    },
    {
      title: "Development",
      links: [
        { name: "Web Development", href: "/web-development" },
        { name: "Mobile Apps", href: "/mobile-development" },
        { name: "API Development", href: "/api-development" },
        { name: "Custom Software", href: "/custom-software" }
      ]
    }
  ];

  const quickLinks = [
    { name: "About Us", href: "/about" },
    { name: "Services", href: "/services" },
    { name: "Contact", href: "/contact" },
    { name: "Blog", href: "/blog" },
    { name: "Careers", href: "/careers" },
    { name: "Support", href: "/support" }
  ];

  const legalLinks = [
    { name: "Privacy Policy", href: "/privacy-policy" },
    { name: "Terms of Service", href: "/terms" },
    { name: "Cookie Policy", href: "/cookies" },
    { name: "GDPR Compliance", href: "/gdpr" }
  ];

  const stats = [
    { number: "500+", label: "Projects Completed", icon: <Code className="w-5 h-5" /> },
    { number: "10,000+", label: "Happy Clients", icon: <Users className="w-5 h-5" /> },
    { number: "99.9%", label: "Uptime SLA", icon: <Shield className="w-5 h-5" /> },
    { number: "24/7", label: "Support", icon: <Clock className="w-5 h-5" /> }
  ];

  return (
    <footer className="bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-cyan-500/10 to-purple-500/10 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-br from-purple-500/10 to-pink-500/10 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10">
        {/* Main Footer Content */}
        <div className="max-w-7xl mx-auto px-4 py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Company Info */}
            <div className="lg:col-span-1">
              <div className="flex items-center mb-6">
                <div className="w-10 h-10 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-lg flex items-center justify-center mr-3">
                  <Brain className="w-6 h-6 text-white" />
                </div>
                <span className="text-2xl font-bold">Zion Tech Group</span>
              </div>
              <p className="text-gray-300 mb-6 leading-relaxed">
                Leading provider of AI and IT solutions, helping businesses transform through cutting-edge technology and innovation.
              </p>
              <div className="flex space-x-4">
                {socialLinks.map((link, index) => (
                  <a
                    key={index}
                    href={link.href}
                    className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center hover:bg-white/20 transition-colors"
                    aria-label={link.name}
                  >
                    {link.icon}
                  </a>
                ))}
              </div>
            </div>

            {/* Service Categories */}
            {serviceCategories.map((category, index) => (
              <div key={index}>
                <h3 className="text-lg font-semibold text-white mb-4">{category.title}</h3>
                <ul className="space-y-3">
                  {category.links.map((link, linkIndex) => (
                    <li key={linkIndex}>
                      <Link
                        to={link.href}
                        className="text-gray-300 hover:text-cyan-400 transition-colors"
                      >
                        {link.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Quick Links */}
          <div className="border-t border-white/10 mt-12 pt-8">
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
              {quickLinks.map((link, index) => (
                <Link
                  key={index}
                  to={link.href}
                  className="text-gray-300 hover:text-cyan-400 transition-colors text-sm"
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </div>

          {/* Stats */}
          <div className="border-t border-white/10 mt-8 pt-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-lg flex items-center justify-center mx-auto mb-3">
                    {stat.icon}
                  </div>
                  <div className="text-2xl font-bold text-white mb-1">{stat.number}</div>
                  <div className="text-gray-300 text-sm">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Legal Links */}
          <div className="border-t border-white/10 mt-8 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <div className="flex flex-wrap gap-6 mb-4 md:mb-0">
                {legalLinks.map((link, index) => (
                  <Link
                    key={index}
                    to={link.href}
                    className="text-gray-400 hover:text-cyan-400 transition-colors text-sm"
                  >
                    {link.name}
                  </Link>
                ))}
              </div>
              <p className="text-gray-400 text-sm">
                © {currentYear} Zion Tech Group. All rights reserved.
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}