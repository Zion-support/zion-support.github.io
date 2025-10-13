import React from "react";
import { Link } from "react-router-dom";
import { Brain, Mail, Phone, MapPin, Clock, Shield, Zap, Globe, Twitter, Linkedin, Github, Users, Award } from 'lucide-react';

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
        { name: "AI Data Analytics", href: "/ai-data-analytics" },
        { name: "AI Document Processing", href: "/ai-document-processing" },
        { name: "AI Marketing Automation", href: "/ai-marketing-automation" },
        { name: "AI Predictive Analytics", href: "/ai-predictive-analytics" },
        { name: "AI Voice Assistant", href: "/ai-voice-assistant" },
        { name: "AI Workflow Automation", href: "/ai-workflow-automation" }
      ]
    },
    {
      title: "IT Services",
      services: [
        { name: "Cloud Migration", href: "/cloud-migration" },
        { name: "DevOps Services", href: "/devops" },
        { name: "IT Consulting", href: "/it-consulting" },
        { name: "Network Security", href: "/network-security" },
        { name: "Custom Software", href: "/custom-software" },
        { name: "System Integration", href: "/system-integration" },
        { name: "Web Development", href: "/web-development" }
      ]
    },
    {
      title: "5G Solutions",
      services: [
        { name: "5G Network Infrastructure", href: "/5g-network-infrastructure" },
        { name: "5G Edge Computing", href: "/5g-edge-computing" },
        { name: "5G IoT Solutions", href: "/5g-iot-solutions" },
        { name: "5G Smart City Solutions", href: "/5g-smart-city-solutions" },
        { name: "5G Private Networks", href: "/5g-private-networks" },
        { name: "5G Mobile Applications", href: "/5g-mobile-applications" },
        { name: "5G Data Analytics", href: "/5g-data-analytics" },
        { name: "5G Implementation", href: "/5g-implementation" }
      ]
    },
    {
      title: "Micro SAAS",
      services: [
        { name: "Zion Content Studio", href: "/zion-content-studio" },
        { name: "Project Management Pro", href: "/project-management-pro" },
        { name: "Zion AI CRM Pro", href: "/zion-ai-crm-pro" },
        { name: "Zion Inventory Smart", href: "/zion-inventory-smart" },
        { name: "AI Financial Analytics Pro", href: "/ai-financial-analytics-pro" },
        { name: "Zion Performance Monitor", href: "/zion-performance-monitor" },
        { name: "Zion AI Marketing Automation", href: "/zion-ai-marketing-automation" },
        { name: "Zion Email Automation", href: "/zion-email-automation" },
        { name: "Data Analytics", href: "/data-analytics" },
        { name: "AI Workflow Automation", href: "/ai-workflow-automation" }
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

  const companyLinks = [
    { name: "About Us", href: "/about" },
    { name: "Our Team", href: "/team" },
    { name: "Careers", href: "/careers" },
    { name: "Press", href: "/press" },
    { name: "Blog", href: "/blog" }
  ];

  const supportLinks = [
    { name: "Contact Support", href: "/support" },
    { name: "Documentation", href: "/docs" },
    { name: "API Reference", href: "/api-docs" },
    { name: "Status Page", href: "/status" },
    { name: "System Status", href: "/system-status" }
  ];

  const legalLinks = [
    { name: "Privacy Policy", path: "/privacy" },
    { name: "Terms of Service", path: "/terms" },
    { name: "Cookie Policy", path: "/cookies" }
  ];

  const stats = [
    { number: "500+", label: "Projects Completed", icon: <Award className="w-5 h-5" /> },
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
        {/* Stats Section */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="flex justify-center mb-2">
                  {stat.icon}
                </div>
                <div className="text-3xl font-bold text-purple-400 mb-1">{stat.number}</div>
                <div className="text-sm text-gray-300">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Main Footer Content */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Company Info */}
            <div className="space-y-4">
              <div className="flex items-center space-x-2">
                <Brain className="w-8 h-8 text-purple-400" />
                <span className="text-xl font-bold">Zion Tech Group</span>
              </div>
              <p className="text-gray-300 text-sm leading-relaxed">
                Leading provider of AI-powered solutions, IT services, and innovative micro SAAS applications. 
                Transforming businesses through cutting-edge technology.
              </p>
              <div className="flex space-x-4">
                {socialLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-purple-400 transition-colors duration-200"
                    aria-label={link.name}
                  >
                    {link.icon}
                  </a>
                ))}
              </div>
            </div>

            {/* Services */}
            <div>
              <h4 className="font-semibold text-purple-400 mb-4">Our Services</h4>
              <div className="space-y-3">
                {serviceCategories.map((category) => (
                  <div key={category.title}>
                    <h5 className="text-white font-medium text-sm mb-2">{category.title}</h5>
                    <ul className="space-y-1">
                      {category.services.slice(0, 3).map((service) => (
                        <li key={service.name}>
                          <Link
                            to={service.href}
                            className="text-gray-300 hover:text-white transition-colors duration-200 text-sm"
                          >
                            {service.name}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="font-semibold text-purple-400 mb-4">Quick Links</h4>
              <ul className="space-y-2">
                {quickLinks.map((link) => (
                  <li key={link.name}>
                    <Link
                      to={link.path}
                      className="text-gray-300 hover:text-white transition-colors duration-200 text-sm"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h4 className="font-semibold text-purple-400 mb-4">Contact Info</h4>
              <div className="space-y-3">
                <div className="flex items-start space-x-3">
                  <Mail className="w-5 h-5 text-purple-400 mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="text-gray-300 text-sm">Email</p>
                    <a 
                      href="mailto:info@ziontechgroup.com" 
                      className="text-white hover:text-purple-400 transition-colors duration-200 text-sm"
                    >
                      info@ziontechgroup.com
                    </a>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <Phone className="w-5 h-5 text-purple-400 mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="text-gray-300 text-sm">Phone</p>
                    <a 
                      href="tel:+1-555-0123" 
                      className="text-white hover:text-purple-400 transition-colors duration-200 text-sm"
                    >
                      +1 (555) 012-3456
                    </a>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <MapPin className="w-5 h-5 text-purple-400 mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="text-gray-300 text-sm">Address</p>
                    <p className="text-white text-sm">
                      123 Tech Street<br />
                      Innovation District<br />
                      San Francisco, CA 94105
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Additional Links */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12 pt-8 border-t border-white/10">
            <div>
              <h4 className="text-lg font-semibold text-white mb-4">Company</h4>
              <ul className="space-y-2">
                {companyLinks.map((link) => (
                  <li key={link.name}>
                    <Link
                      to={link.href}
                      className="text-gray-300 hover:text-white transition-colors duration-200 text-sm"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold text-white mb-4">Support</h4>
              <ul className="space-y-2">
                {supportLinks.map((link) => (
                  <li key={link.name}>
                    <Link
                      to={link.href}
                      className="text-gray-300 hover:text-white transition-colors duration-200 text-sm"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold text-white mb-4">Legal</h4>
              <ul className="space-y-2">
                {legalLinks.map((link) => (
                  <li key={link.name}>
                    <Link
                      to={link.path}
                      className="text-gray-300 hover:text-white transition-colors duration-200 text-sm"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
            <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
              <div className="text-gray-400 text-sm">
                © {currentYear} Zion Tech Group. All rights reserved.
              </div>
              <div className="flex items-center space-x-6">
                <div className="flex items-center space-x-2 text-sm text-gray-400">
                  <Shield className="w-4 h-4" />
                  <span>Secure & Trusted</span>
                </div>
                <div className="flex items-center space-x-2 text-sm text-gray-400">
                  <Zap className="w-4 h-4" />
                  <span>Powered by AI</span>
                </div>
                <div className="flex items-center space-x-2 text-sm text-gray-400">
                  <Globe className="w-4 h-4" />
                  <span>Global Reach</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;