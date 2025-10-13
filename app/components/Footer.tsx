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
  Github
} from "lucide-react";

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
      title: "IT Services",
      services: [
        { name: "Cloud Migration", href: "/cloud-migration" },
        { name: "DevOps Services", href: "/devops" },
        { name: "IT Consulting", href: "/it-consulting" },
        { name: "Network Security", href: "/network-security" },
        { name: "Custom Software", href: "/custom-software" }
      ]
    },
    {
      title: "5G Solutions",
      services: [
        { name: "5G Network Infrastructure", href: "/5g-network-infrastructure" },
        { name: "5G Edge Computing", href: "/5g-edge-computing" },
        { name: "5G IoT Solutions", href: "/5g-iot-solutions" },
        { name: "5G Smart City Solutions", href: "/5g-smart-city-solutions" },
        { name: "5G Private Networks", href: "/5g-private-networks" }
      ]
    },
    {
      title: "Micro SAAS",
      services: [
        { name: "Zion AI Analytics Pro", href: "/zion-ai-analytics-pro" },
        { name: "Zion AI CRM Pro", href: "/zion-ai-crm-pro" },
        { name: "Zion AI Video Generator", href: "/zion-ai-video-generator" },
        { name: "Zion AI Invoice Generator", href: "/zion-ai-invoice-generator" },
        { name: "Zion AI Customer Insights", href: "/zion-ai-customer-insights" }
      ]
    }
  ];

  const quickLinks = [
    { name: "About Us", href: "/about" },
    { name: "Services", href: "/services" },
    { name: "Blog", href: "/blog" },
    { name: "Contact", href: "/contact" },
    { name: "Privacy Policy", href: "/privacy" },
    { name: "Terms of Service", href: "/terms" }
  ];

  return (
    <footer className="bg-gradient-to-r from-slate-900 via-purple-900 to-slate-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-10 h-10 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-lg flex items-center justify-center">
                <Brain className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-2xl font-bold">Zion Tech Group</h3>
            </div>
            <p className="text-gray-300 mb-6 max-w-md">
              Leading provider of AI-powered solutions, IT services, and 5G technology. 
              Transforming businesses through innovation and cutting-edge technology.
            </p>
            
            {/* Contact Info */}
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-cyan-400" />
                <span className="text-gray-300">info@ziontechgroup.com</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-cyan-400" />
                <span className="text-gray-300">+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="w-5 h-5 text-cyan-400" />
                <span className="text-gray-300">San Francisco, CA</span>
              </div>
              <div className="flex items-center space-x-3">
                <Clock className="w-5 h-5 text-cyan-400" />
                <span className="text-gray-300">Mon-Fri 9AM-6PM PST</span>
              </div>
            </div>
          </div>

          {/* Services */}
          {serviceCategories.map((category, index) => (
            <div key={index} className="lg:col-span-1">
              <h4 className="text-lg font-semibold mb-4 text-cyan-400">{category.title}</h4>
              <ul className="space-y-2">
                {category.services.map((service, serviceIndex) => (
                  <li key={serviceIndex}>
                    <Link
                      to={service.href}
                      className="text-gray-300 hover:text-cyan-400 transition-colors duration-200 flex items-center group"
                    >
                      <ArrowRight className="w-4 h-4 mr-2 opacity-0 group-hover:opacity-100 transition-opacity" />
                      {service.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Quick Links */}
          <div className="lg:col-span-1">
            <h4 className="text-lg font-semibold mb-4 text-cyan-400">Quick Links</h4>
            <ul className="space-y-2">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <Link
                    to={link.href}
                    className="text-gray-300 hover:text-cyan-400 transition-colors duration-200 flex items-center group"
                  >
                    <ArrowRight className="w-4 h-4 mr-2 opacity-0 group-hover:opacity-100 transition-opacity" />
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Features Section */}
        <div className="mt-12 pt-8 border-t border-gray-700">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Shield className="w-6 h-6 text-white" />
              </div>
              <h5 className="text-lg font-semibold mb-2">Enterprise Security</h5>
              <p className="text-gray-300 text-sm">
                Bank-level security with advanced encryption and compliance standards
              </p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Zap className="w-6 h-6 text-white" />
              </div>
              <h5 className="text-lg font-semibold mb-2">Lightning Fast</h5>
              <p className="text-gray-300 text-sm">
                Optimized performance with global CDN and edge computing
              </p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Globe className="w-6 h-6 text-white" />
              </div>
              <h5 className="text-lg font-semibold mb-2">Global Reach</h5>
              <p className="text-gray-300 text-sm">
                Serving clients worldwide with 24/7 support and monitoring
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-12 pt-8 border-t border-gray-700">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-gray-300 text-sm mb-4 md:mb-0">
              © {currentYear} Zion Tech Group. All rights reserved.
            </div>
            
            {/* Social Links */}
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center hover:bg-cyan-500 hover:scale-110 transition-all duration-200"
                  aria-label={social.name}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;