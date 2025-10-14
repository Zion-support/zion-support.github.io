import React, { useMemo } from "react";
import { Link } from "react-router-dom";
import { Linkedin, Twitter, Github, Mail, Phone, MapPin, Clock, ArrowRight, Brain, Shield, Zap, Globe, BarChart3, Cloud, Code, Database, Users, Award } from "lucide-react";

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
    { name: "AI Analytics", href: "/ai-analytics" },
    { name: "AI Automation", href: "/ai-automation-platform" },
    { name: "AI Content Generation", href: "/ai-content-generation" },
    { name: "AI Customer Support", href: "/ai-customer-support" },
    { name: "AI Cybersecurity", href: "/ai-cybersecurity" },
    { name: "AI Data Analytics", href: "/ai-data-analytics" },
    { name: "AI Document Processing", href: "/ai-document-processing" },
    { name: "AI Marketing Automation", href: "/ai-marketing-automation" },
    { name: "AI Predictive Analytics", href: "/ai-predictive-analytics" },
    { name: "AI Voice Assistant", href: "/ai-voice-assistant" },
    { name: "AI Workflow Automation", href: "/ai-workflow-automation" },
  ], []);

  const itServices = useMemo(() => [
    { name: "Cloud Migration", href: "/cloud-migration" },
    { name: "DevOps Services", href: "/devops-services" },
    { name: "IT Consulting", href: "/it-consulting" },
    { name: "Network Security", href: "/network-security" },
    { name: "Software Development", href: "/software-development" },
    { name: "System Integration", href: "/system-integration" },
    { name: "Web Development", href: "/web-development" },
  ], []);

  const microSaasServices = useMemo(() => [
    { name: "Project Management Pro", href: "/project-management-pro" },
    { name: "AI CRM Pro", href: "/zion-ai-crm-pro" },
    { name: "Inventory Smart", href: "/zion-inventory-smart" },
    { name: "Financial Analytics Pro", href: "/ai-financial-analytics-pro" },
    { name: "Performance Monitor", href: "/zion-performance-monitor" },
    { name: "AI Marketing Automation", href: "/zion-ai-marketing-automation" },
    { name: "Email Automation", href: "/zion-email-automation" },
    { name: "Data Analytics", href: "/data-analytics" },
  ], []);

  const companyLinks = useMemo(() => [
    { name: "About Us", href: "/about" },
    { name: "Our Team", href: "/team" },
    { name: "Careers", href: "/careers" },
    { name: "Case Studies", href: "/case-studies" },
    { name: "Partners", href: "/partners" },
    { name: "Contact", href: "/contact" },
  ], []);

  const supportLinks = useMemo(() => [
    { name: "Documentation", href: "/docs" },
    { name: "API Reference", href: "/api" },
    { name: "Tutorials", href: "/tutorials" },
    { name: "Support Center", href: "/support" },
    { name: "Status Page", href: "/status" },
    { name: "Community", href: "/community" },
  ], []);

  const legalLinks = useMemo(() => [
    { name: "Privacy Policy", href: "/privacy" },
    { name: "Terms of Service", href: "/terms" },
    { name: "Cookie Policy", href: "/cookies" },
    { name: "GDPR Compliance", href: "/gdpr" },
    { name: "Security", href: "/security" },
  ], []);

  return (
    <footer className="bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-lg flex items-center justify-center">
                <Brain className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold">Zion Tech Group</span>
            </div>
            <p className="text-gray-300 mb-6 max-w-md">
              Leading the future of AI and IT solutions. We empower businesses with cutting-edge technology, 
              intelligent automation, and innovative digital transformation services.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-cyan-400 transition-colors duration-300"
                  aria-label={link.name}
                >
                  {link.icon}
                </a>
              ))}
            </div>
          </div>

          {/* AI Services */}
          <div>
            <h3 className="text-lg font-semibold mb-4 flex items-center">
              <Zap className="w-5 h-5 mr-2 text-cyan-400" />
              AI Services
            </h3>
            <ul className="space-y-2">
              {services.slice(0, 6).map((service) => (
                <li key={service.name}>
                  <Link
                    to={service.href}
                    className="text-gray-300 hover:text-cyan-400 transition-colors duration-300 text-sm"
                  >
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* IT Services */}
          <div>
            <h3 className="text-lg font-semibold mb-4 flex items-center">
              <Shield className="w-5 h-5 mr-2 text-cyan-400" />
              IT Services
            </h3>
            <ul className="space-y-2">
              {itServices.map((service) => (
                <li key={service.name}>
                  <Link
                    to={service.href}
                    className="text-gray-300 hover:text-cyan-400 transition-colors duration-300 text-sm"
                  >
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Micro SAAS */}
          <div>
            <h3 className="text-lg font-semibold mb-4 flex items-center">
              <Cloud className="w-5 h-5 mr-2 text-cyan-400" />
              Micro SAAS
            </h3>
            <ul className="space-y-2">
              {microSaasServices.slice(0, 6).map((service) => (
                <li key={service.name}>
                  <Link
                    to={service.href}
                    className="text-gray-300 hover:text-cyan-400 transition-colors duration-300 text-sm"
                  >
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company & Support */}
          <div>
            <h3 className="text-lg font-semibold mb-4 flex items-center">
              <Users className="w-5 h-5 mr-2 text-cyan-400" />
              Company
            </h3>
            <ul className="space-y-2">
              {companyLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.href}
                    className="text-gray-300 hover:text-cyan-400 transition-colors duration-300 text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
            <h3 className="text-lg font-semibold mb-4 mt-6 flex items-center">
              <Award className="w-5 h-5 mr-2 text-cyan-400" />
              Support
            </h3>
            <ul className="space-y-2">
              {supportLinks.slice(0, 4).map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.href}
                    className="text-gray-300 hover:text-cyan-400 transition-colors duration-300 text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Contact Info */}
        <div className="border-t border-gray-700 mt-12 pt-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="flex items-center space-x-3">
              <Mail className="w-5 h-5 text-cyan-400" />
              <div>
                <p className="text-sm text-gray-400">Email</p>
                <p className="text-white">contact@ziontechgroup.com</p>
              </div>
            </div>
            <div className="flex items-center space-x-3">
              <Phone className="w-5 h-5 text-cyan-400" />
              <div>
                <p className="text-sm text-gray-400">Phone</p>
                <p className="text-white">+1 (555) 123-4567</p>
              </div>
            </div>
            <div className="flex items-center space-x-3">
              <MapPin className="w-5 h-5 text-cyan-400" />
              <div>
                <p className="text-sm text-gray-400">Address</p>
                <p className="text-white">123 Tech Street, Silicon Valley, CA 94000</p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-700 mt-8 pt-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex flex-wrap items-center space-x-6 mb-4 md:mb-0">
              {legalLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.href}
                  className="text-gray-400 hover:text-cyan-400 transition-colors duration-300 text-sm"
                >
                  {link.name}
                </Link>
              ))}
            </div>
            <div className="flex items-center space-x-2 text-gray-400 text-sm">
              <Clock className="w-4 h-4" />
              <span>© {currentYear} Zion Tech Group. All rights reserved.</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
});

Footer.displayName = "Footer";

export default Footer;