import React from 'react';
import { Link } from 'react-router-dom';
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
  Star
} from "lucide-react";

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
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
  ];

  const quickLinks = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Services", path: "/services" },
    { name: "AI Services", path: "/ai-services" },
    { name: "Micro SAAS", path: "/micro-saas" },
    { name: "5G Solutions", path: "/5g-solutions" },
    { name: "Contact", path: "/contact" },
    { name: "Demo", path: "/demo" },
    { name: "Consultation", path: "/consultation" },
  ];

  const services = [
    { name: "AI Analytics", path: "/ai-analytics" },
    { name: "AI Cybersecurity", path: "/ai-cybersecurity" },
    { name: "AI Content Generation", path: "/ai-content-generation" },
    { name: "AI Customer Support", path: "/ai-customer-support" },
    { name: "Cloud Migration", path: "/cloud-migration" },
    { name: "Web Development", path: "/web-development" },
    { name: "DevOps", path: "/devops" },
    { name: "IT Consulting", path: "/it-consulting" },
  ];

  const microSaasServices = [
    { name: "Zion AI Video Generator", path: "/zion-ai-video-generator" },
    { name: "Zion AI Invoice Generator", path: "/zion-ai-invoice-generator" },
    { name: "Zion AI Customer Insights", path: "/zion-ai-customer-insights" },
    { name: "Zion AI Email Analyzer", path: "/zion-ai-email-analyzer" },
    { name: "Zion Analytics Pro", path: "/zion-analytics-pro" },
    { name: "Zion Security Shield", path: "/zion-security-shield" },
    { name: "Zion AI CRM Pro", path: "/zion-ai-crm-pro" },
    { name: "Zion Cloud Vault", path: "/zion-cloud-vault" },
    { name: "Zion AI Marketing", path: "/zion-ai-marketing-automation" },
    { name: "Zion AI Project Manager", path: "/zion-ai-project-manager-pro" },
  ];

  const fiveGServices = [
    { name: "5G Network Infrastructure", path: "/5g-network-infrastructure" },
    { name: "5G Edge Computing", path: "/5g-edge-computing" },
    { name: "5G IoT Solutions", path: "/5g-iot-solutions" },
    { name: "5G Smart City", path: "/5g-smart-city-solutions" },
    { name: "5G Private Networks", path: "/5g-private-networks" },
    { name: "5G Mobile Apps", path: "/5g-mobile-applications" },
  ];

  const stats = [
    { number: "500+", label: "Projects Completed", icon: <Award className="w-5 h-5" /> },
    { number: "10,000+", label: "Happy Clients", icon: <Users className="w-5 h-5" /> },
    { number: "99.9%", label: "Uptime SLA", icon: <Shield className="w-5 h-5" /> },
    { number: "24/7", label: "Support", icon: <Clock className="w-5 h-5" /> }
  ];

  return (
    <footer className="bg-slate-900/95 backdrop-blur-sm border-t border-cyan-500/20 relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/5 via-purple-500/5 to-pink-500/5 opacity-50" />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-cyan-500/5 to-transparent animate-pulse" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 relative z-10">
        {/* Stats Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
          {stats.map((stat, index) => (
            <div key={index} className="text-center group">
              <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-lg flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-transform duration-300 shadow-lg group-hover:shadow-cyan-500/25">
                {stat.icon}
              </div>
              <div className="text-2xl font-bold text-white mb-1 group-hover:text-cyan-300 transition-colors duration-300">{stat.number}</div>
              <div className="text-gray-300 text-sm group-hover:text-gray-200 transition-colors duration-300">{stat.label}</div>
            </div>
          ))}
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-lg flex items-center justify-center">
                <Brain className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold text-white">Zion Tech Group</span>
            </div>
            <p className="text-gray-300 mb-4">
              Advanced AI and IT Solutions for Modern Businesses
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-300 hover:text-cyan-400 transition-colors"
                  aria-label={social.name}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.path}
                    className="text-gray-300 hover:text-cyan-400 transition-all duration-300 flex items-center group/link hover:translate-x-1"
                  >
                    <ArrowRight className="w-4 h-4 mr-2 group-hover/link:translate-x-1 transition-transform duration-300" />
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* AI Services */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">AI Services</h3>
            <ul className="space-y-2">
              {services.map((service) => (
                <li key={service.name}>
                  <Link
                    to={service.path}
                    className="text-gray-300 hover:text-cyan-400 transition-all duration-300 flex items-center group/link hover:translate-x-1"
                  >
                    <ArrowRight className="w-4 h-4 mr-2 group-hover/link:translate-x-1 transition-transform duration-300" />
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Micro SAAS */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Micro SAAS</h3>
            <ul className="space-y-2">
              {microSaasServices.map((service) => (
                <li key={service.name}>
                  <Link
                    to={service.path}
                    className="text-gray-300 hover:text-cyan-400 transition-all duration-300 flex items-center group/link hover:translate-x-1"
                  >
                    <ArrowRight className="w-4 h-4 mr-2 group-hover/link:translate-x-1 transition-transform duration-300" />
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* 5G Solutions & Contact */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">5G Solutions</h3>
            <ul className="space-y-2 mb-6">
              {fiveGServices.map((service) => (
                <li key={service.name}>
                  <Link
                    to={service.path}
                    className="text-gray-300 hover:text-cyan-400 transition-all duration-300 flex items-center group/link hover:translate-x-1"
                  >
                    <ArrowRight className="w-4 h-4 mr-2 group-hover/link:translate-x-1 transition-transform duration-300" />
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
            
            <h3 className="text-lg font-semibold text-white mb-4">Contact Info</h3>
            <div className="space-y-3">
              <div className="flex items-center text-gray-300">
                <Mail className="w-5 h-5 mr-3 text-cyan-400" />
                <span>kleber@ziontechgroup.com</span>
              </div>
              <div className="flex items-center text-gray-300">
                <Phone className="w-5 h-5 mr-3 text-cyan-400" />
                <span>+1 302 464 0950</span>
              </div>
              <div className="flex items-start text-gray-300">
                <MapPin className="w-5 h-5 mr-3 text-cyan-400 mt-0.5" />
                <span>364 E Main St STE 1008<br />Middletown, DE 19709</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-cyan-500/20 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-300 text-sm">
              © {currentYear} Zion Tech Group. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <Link to="/privacy" className="text-gray-300 hover:text-cyan-400 text-sm transition-colors">
                Privacy Policy
              </Link>
              <Link to="/terms" className="text-gray-300 hover:text-cyan-400 text-sm transition-colors">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;