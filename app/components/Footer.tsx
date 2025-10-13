<<<<<<< HEAD
import React from 'react';
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
import { 
  Brain, 
  Mail, 
  Phone, 
  MapPin,
  ArrowRight,
  Twitter,
  Linkedin,
  Github,
  Award,
  Users
} from "lucide-react";
import { Link } from 'react-router-dom';

const services = [
    {
      title: "Cloud Migration",
      description: "Seamless migration to cloud infrastructure",
      icon: "Cloud"
    },
    {
      title: "Security Solutions",
      description: "Advanced security and compliance",
      icon: "Shield"
    },
    {
      title: "Performance Optimization",
      description: "Optimize your cloud performance",
      icon: "Zap"
    }
  ];
const socialLinks = [
    { name: "Twitter", href: "#", icon: "Twitter" },
    { name: "LinkedIn", href: "#", icon: "Linkedin" },
    { name: "GitHub", href: "#", icon: "Github" }
  ];
const microSaasServices = [
    { name: "AI Analytics", href: "/ai-services" },
    { name: "Cloud Solutions", href: "/cloud-services" },
    { name: "DevOps", href: "/devops" }
  ];
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-214f

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
      title: "Micro SAAS",
      services: [
        { name: "Zion Analytics Pro", href: "/zion-ai-analytics-pro" },
        { name: "Zion AI CRM Pro", href: "/zion-ai-crm-pro" },
        { name: "Zion AI Video Generator", href: "/zion-ai-video-generator" },
        { name: "Zion AI Invoice Generator", href: "/zion-ai-invoice-generator" },
        { name: "Zion AI Marketing", href: "/zion-ai-marketing-automation" }
      ]
    },
    {
      title: "5G Solutions",
      services: [
        { name: "5G Network Infrastructure", href: "/5g-network-infrastructure" },
        { name: "5G Edge Computing", href: "/5g-edge-computing" },
        { name: "5G IoT Solutions", href: "/5g-iot-solutions" },
        { name: "5G Smart Cities", href: "/5g-smart-city-solutions" },
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
    { name: "Blog", path: "/blog" },
    { name: "Tutorials", path: "/tutorials" },
    { name: "Demo", path: "/demo" },
    { name: "Consultation", path: "/consultation" },
    { name: "Support", path: "/support" },
  ];

  const legalLinks = [
    { name: "Privacy Policy", path: "/privacy" },
    { name: "Terms of Service", path: "/terms" },
    { name: "Cookie Policy", path: "/cookies" },
    { name: "GDPR", path: "/gdpr" },
  ];

  const stats = [
    { number: "500+", label: "Projects Completed", icon: <Award className="w-5 h-5" /> },
    { number: "10,000+", label: "Happy Clients", icon: <Users className="w-5 h-5" /> },
    { number: "99.9%", label: "Uptime SLA", icon: <Shield className="w-5 h-5" /> },
    { number: "24/7", label: "Support", icon: <Clock className="w-5 h-5" /> }
  ];

<<<<<<< HEAD
export default function Footer({ className = '', children }: FooterProps) {
  return (
    <div className={`${className}`}>
      {children}
    </div>
  );
}
=======
=======
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-ef50
=======
import React, { useMemo } from 'react';
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-c68e
import { Link } from 'react-router-dom';
import { 
  Twitter, 
  Linkedin, 
  Github, 
  Mail, 
<<<<<<< HEAD
<<<<<<< HEAD
  Phone, 
  MapPin, 
  Shield, 
  Award, 
  Users, 
  Clock 
=======
  Phone,
  MapPin
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-ef50
=======
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
  TrendingUp 
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-c68e
} from 'lucide-react';

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

  const quickLinks = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Services", href: "/services" },
    { name: "Contact", href: "/contact" }
  ];

  const services = [
    { name: "AI Solutions", href: "/ai-services" },
    { name: "IT Services", href: "/it-services" },
    { name: "Micro SaaS", href: "/micro-saas" },
    { name: "DevOps", href: "/devops" }
  ];

<<<<<<< HEAD
  const stats = [
<<<<<<< HEAD
    { number: "500+", label: "Projects Completed", icon: <Award className="w-5 h-5" /> },
    { number: "10,000+", label: "Happy Clients", icon: <Users className="w-5 h-5" /> },
    { number: "99.9%", label: "Uptime SLA", icon: <Shield className="w-5 h-5" /> },
    { number: "24/7", label: "Support", icon: <Clock className="w-5 h-5" /> }
  ];

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Zion Tech Group</h3>
            <p className="text-gray-300 text-sm">
              Advanced AI and IT Solutions for Modern Businesses
=======
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="text-xl font-bold mb-4">Zion Tech Group</h3>
            <p className="text-gray-300 mb-4">
              Advanced AI and IT solutions for modern businesses.
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-ef50
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-gray-400 hover:text-white transition-colors"
<<<<<<< HEAD
                  aria-label={link.name}
=======
                  target="_blank"
                  rel="noopener noreferrer"
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-ef50
                >
                  {link.icon}
                </a>
              ))}
<<<<<<< HEAD
=======
            </div>
          </div>

          {/* Services */}
          {serviceCategories.map((category) => (
            <div key={category.title}>
              <h4 className="text-lg font-semibold mb-4">{category.title}</h4>
              <ul className="space-y-2">
                {category.services.map((service) => (
                  <li key={service.name}>
                    <Link
                      to={service.href}
                      className="text-gray-300 hover:text-white transition-colors"
                    >
                      {service.name}
                    </Link>
                  </li>
                ))}
              </ul>
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-ef50
            </div>
          ))}

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.path}
                    className="text-gray-300 hover:text-white transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

<<<<<<< HEAD
          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Quick Links</h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.path}
                    className="text-gray-300 hover:text-white transition-colors text-sm"
=======
          {/* Legal */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Legal</h4>
            <ul className="space-y-2">
              {legalLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.path}
                    className="text-gray-300 hover:text-white transition-colors"
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-ef50
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
<<<<<<< HEAD
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Services</h3>
            <div className="space-y-3">
              {serviceCategories.map((category) => (
                <div key={category.title}>
                  <h4 className="text-sm font-medium text-gray-300 mb-2">
                    {category.title}
                  </h4>
                  <ul className="space-y-1">
                    {category.services.map((service) => (
                      <li key={service.name}>
                        <Link
                          to={service.href}
                          className="text-gray-400 hover:text-white transition-colors text-xs"
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

          {/* Contact & Stats */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Contact</h3>
            <div className="space-y-2 text-sm text-gray-300">
              <div className="flex items-center space-x-2">
                <Mail className="w-4 h-4" />
                <span>info@ziontechgroup.com</span>
              </div>
              <div className="flex items-center space-x-2">
                <Phone className="w-4 h-4" />
                <span>+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center space-x-2">
                <MapPin className="w-4 h-4" />
                <span>San Francisco, CA</span>
              </div>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-4 pt-4">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="flex justify-center mb-1">
                    {stat.icon}
                  </div>
                  <div className="text-lg font-semibold">{stat.number}</div>
                  <div className="text-xs text-gray-400">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-800 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-sm text-gray-400">
              © {currentYear} Zion Tech Group. All rights reserved.
            </div>
            <div className="flex space-x-6">
              {legalLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  className="text-sm text-gray-400 hover:text-white transition-colors"
                >
                  {link.name}
                </Link>
              ))}
            </div>
=======
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-ef50
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-gray-400">
            © {currentYear} Zion Tech Group. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

<<<<<<< HEAD
export default Footer;
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-8b27
=======
export default Footer;
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-ef50
=======

<<<<<<< HEAD
interface FooterProps {
  className?: string;
  children?: React.ReactNode;
}

export default function Footer({ className = '', children, ...props }: FooterProps) {
    return (
        <div className="component" {...props}>
          {children}
        </div>
      );
}
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-5a44
=======
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-a9f6
=======
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
              </div>

              {/* Social Links */}
              <div className="flex space-x-4">
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
              </div>
            </div>

            {/* Service Categories */}
            {serviceCategories.map((category, index) => (
              <div key={index}>
                <h3 className="text-cyan-400 font-semibold mb-4">{category.title}</h3>
                <ul className="space-y-2">
                  {category.services.map((service) => (
                    <li key={service.name}>
                      <Link
                        to={service.href}
                        className="text-gray-300 hover:text-cyan-400 transition-colors duration-200 text-sm"
                      >
                        {service.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Additional Links */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12 pt-8 border-t border-white/10">
            <div>
              <h4 className="text-lg font-semibold text-white mb-4">Quick Links</h4>
              <ul className="space-y-2">
                {quickLinks.slice(0, 4).map((link) => (
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
            <div>
              <h4 className="text-lg font-semibold text-white mb-4">More Links</h4>
              <ul className="space-y-2">
                {quickLinks.slice(4).map((link) => (
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
            <div className="flex flex-col md:flex-row justify-between items-center">
              <div className="text-gray-400 text-sm mb-4 md:mb-0">
                © {currentYear} Zion Tech Group. All rights reserved.
              </div>
              <div className="flex items-center space-x-6 text-sm text-gray-400">
                <span>Built with ❤️ for innovation</span>
                <div className="flex items-center">
                  <Clock className="w-4 h-4 mr-1" />
                  <span>24/7 Support Available</span>
                </div>
=======
    { label: "Projects Completed", value: "500+" },
    { label: "Happy Clients", value: "200+" },
    { label: "Years Experience", value: "10+" },
    { label: "Team Members", value: "50+" }
  ];

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">Zion Tech Group</h3>
            <p className="text-gray-300 mb-4">
              Advanced AI and IT Solutions for Modern Businesses
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-gray-400 hover:text-white transition-colors"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {link.icon}
                </a>
              ))}
            </div>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link to={link.href} className="text-gray-300 hover:text-white transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Services</h4>
            <ul className="space-y-2">
              {services.map((service) => (
                <li key={service.name}>
                  <Link to={service.href} className="text-gray-300 hover:text-white transition-colors">
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Info</h4>
            <div className="space-y-2 text-gray-300">
              <div className="flex items-center">
                <Mail className="w-4 h-4 mr-2" />
                contact@ziontechgroup.com
              </div>
              <div className="flex items-center">
                <Phone className="w-4 h-4 mr-2" />
                +1 (555) 123-4567
              </div>
              <div className="flex items-center">
                <MapPin className="w-4 h-4 mr-2" />
                San Francisco, CA
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-c68e
              </div>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-700 mt-8 pt-8 text-center">
          <p className="text-gray-400">
            © {currentYear} Zion Tech Group. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

<<<<<<< HEAD
export default Footer;
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-214f
=======
export default Footer;
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-c68e
