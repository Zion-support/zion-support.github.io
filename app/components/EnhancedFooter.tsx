import React, { useMemo } from "react";
import { Link } from "react-router-dom";
import { 
  Linkedin, Twitter, Github, Mail, Phone, MapPin, 
  ArrowRight, Shield, Cloud, Brain, BarChart3, 
  Code, Settings, Globe, Smartphone, Database,
  Zap, Users, FileText, HelpCircle, Eye, MessageSquare
} from "lucide-react";

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

  const aiServices = useMemo(() => [
    { name: 'AI Analytics', path: '/ai-analytics' },
    { name: 'AI Automation', path: '/ai-automation' },
    { name: 'AI Content Generation', path: '/ai-content-generation' },
    { name: 'AI Customer Service', path: '/ai-customer-service' },
    { name: 'AI Cybersecurity', path: '/ai-cybersecurity' },
    { name: 'AI Data Analytics', path: '/ai-data-analytics' },
    { name: 'AI Marketing', path: '/ai-marketing' },
    { name: 'AI Business Intelligence', path: '/ai-business-intelligence' }
  ], []);

  const itServices = useMemo(() => [
    { name: 'Cloud Infrastructure', path: '/cloud-infrastructure' },
    { name: 'Web Development', path: '/web-development' },
    { name: 'Mobile Development', path: '/mobile-development' },
    { name: 'Cybersecurity Solutions', path: '/cybersecurity-solutions' },
    { name: 'Database Management', path: '/database-management' },
    { name: 'Custom Software', path: '/custom-software' },
    { name: 'Network Infrastructure', path: '/network-infrastructure' },
    { name: 'Data Analytics', path: '/data-analytics' }
  ], []);

  const fiveGServices = useMemo(() => [
    { name: '5G Data Analytics', path: '/5g-data-analytics' },
    { name: '5G Edge Computing', path: '/5g-edge-computing' },
    { name: '5G Implementation', path: '/5g-implementation' },
    { name: '5G Mobile Applications', path: '/5g-mobile-applications' },
    { name: '5G Network Infrastructure', path: '/5g-network-infrastructure' },
    { name: '5G Private Networks', path: '/5g-private-networks' },
    { name: '5G Smart City Solutions', path: '/5g-smart-city-solutions' }
  ], []);

  const microSaas = useMemo(() => [
    { name: 'Zion Analytics Pro', path: '/zion-analytics-pro' },
    { name: 'Zion Security Shield', path: '/zion-security-shield' },
    { name: 'Zion Cloud Vault', path: '/zion-cloud-vault' },
    { name: 'Zion Content Studio', path: '/zion-content-studio' },
    { name: 'Zion Data Sync', path: '/zion-data-sync' },
    { name: 'Zion Lead Magnet', path: '/zion-lead-magnet' },
    { name: 'Zion Project Master', path: '/zion-project-master' },
    { name: 'Zion Email Automation', path: '/zion-email-automation' }
  ], []);

  const company = useMemo(() => [
    { name: 'About Us', path: '/about' },
    { name: 'Careers', path: '/careers' },
    { name: 'Case Studies', path: '/case-studies' },
    { name: 'Blog', path: '/blog' },
    { name: 'Press', path: '/press' },
    { name: 'Partners', path: '/partners' }
  ], []);

  const support = useMemo(() => [
    { name: 'Contact', path: '/contact' },
    { name: 'Support', path: '/support' },
    { name: 'Help Center', path: '/help-center' },
    { name: 'Documentation', path: '/documentation' },
    { name: 'Tutorials', path: '/tutorials' },
    { name: 'Demo', path: '/demo' }
  ], []);

  const resources = useMemo(() => [
    { name: 'Pricing', path: '/pricing' },
    { name: 'Consultation', path: '/consultation' },
    { name: 'Sitemap', path: '/sitemap' },
    { name: 'Privacy Policy', path: '/privacy' },
    { name: 'Terms of Service', path: '/terms' },
    { name: 'Cookie Policy', path: '/cookies' }
  ], []);

  return (
    <footer className="bg-gradient-to-br from-slate-900 via-gray-900 to-slate-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8 mb-12">
          {/* Company Info */}
          <div className="lg:col-span-2 space-y-6">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-xl flex items-center justify-center">
                <span className="text-white font-bold text-xl">Z</span>
              </div>
              <div>
                <span className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                  Zion Tech Group
                </span>
                <p className="text-sm text-gray-400">Advanced AI & IT Solutions</p>
              </div>
            </div>
            <p className="text-gray-400 text-sm max-w-md leading-relaxed">
              Leading provider of AI-powered solutions, 5G implementation, and enterprise IT services. 
              We help businesses transform with cutting-edge technology and innovative solutions.
            </p>
            <div className="space-y-3">
              <div className="flex items-center space-x-3 text-sm text-gray-400">
                <Mail className="w-4 h-4 text-cyan-400" />
                <span>contact@ziontechgroup.com</span>
              </div>
              <div className="flex items-center space-x-3 text-sm text-gray-400">
                <Phone className="w-4 h-4 text-cyan-400" />
                <span>+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center space-x-3 text-sm text-gray-400">
                <MapPin className="w-4 h-4 text-cyan-400" />
                <span>San Francisco, CA</span>
              </div>
            </div>
            <div className="flex space-x-4">
              {socialLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-cyan-400 transition-colors p-2 rounded-lg hover:bg-cyan-500/10"
                  aria-label={link.name}
                >
                  {link.icon}
                </a>
              ))}
            </div>
          </div>

          {/* AI Services */}
          <div>
            <h4 className="text-lg font-semibold mb-4 flex items-center">
              <Brain className="w-5 h-5 text-cyan-400 mr-2" />
              AI Services
            </h4>
            <ul className="space-y-2">
              {aiServices.map((service) => (
                <li key={service.name}>
                  <Link
                    to={service.path}
                    className="text-gray-400 hover:text-cyan-400 transition-colors text-sm flex items-center group"
                  >
                    <ArrowRight className="w-3 h-3 mr-2 opacity-0 group-hover:opacity-100 transition-opacity" />
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* IT Solutions */}
          <div>
            <h4 className="text-lg font-semibold mb-4 flex items-center">
              <Settings className="w-5 h-5 text-blue-400 mr-2" />
              IT Solutions
            </h4>
            <ul className="space-y-2">
              {itServices.map((service) => (
                <li key={service.name}>
                  <Link
                    to={service.path}
                    className="text-gray-400 hover:text-blue-400 transition-colors text-sm flex items-center group"
                  >
                    <ArrowRight className="w-3 h-3 mr-2 opacity-0 group-hover:opacity-100 transition-opacity" />
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* 5G Solutions */}
          <div>
            <h4 className="text-lg font-semibold mb-4 flex items-center">
              <Zap className="w-5 h-5 text-green-400 mr-2" />
              5G Solutions
            </h4>
            <ul className="space-y-2">
              {fiveGServices.map((service) => (
                <li key={service.name}>
                  <Link
                    to={service.path}
                    className="text-gray-400 hover:text-green-400 transition-colors text-sm flex items-center group"
                  >
                    <ArrowRight className="w-3 h-3 mr-2 opacity-0 group-hover:opacity-100 transition-opacity" />
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Micro SAAS */}
          <div>
            <h4 className="text-lg font-semibold mb-4 flex items-center">
              <Cloud className="w-5 h-5 text-purple-400 mr-2" />
              Micro SAAS
            </h4>
            <ul className="space-y-2">
              {microSaas.map((service) => (
                <li key={service.name}>
                  <Link
                    to={service.path}
                    className="text-gray-400 hover:text-purple-400 transition-colors text-sm flex items-center group"
                  >
                    <ArrowRight className="w-3 h-3 mr-2 opacity-0 group-hover:opacity-100 transition-opacity" />
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Secondary Footer Links */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Company */}
          <div>
            <h4 className="text-lg font-semibold mb-4 flex items-center">
              <Users className="w-5 h-5 text-gray-400 mr-2" />
              Company
            </h4>
            <ul className="space-y-2">
              {company.map((item) => (
                <li key={item.name}>
                  <Link
                    to={item.path}
                    className="text-gray-400 hover:text-white transition-colors text-sm"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4 className="text-lg font-semibold mb-4 flex items-center">
              <HelpCircle className="w-5 h-5 text-gray-400 mr-2" />
              Support
            </h4>
            <ul className="space-y-2">
              {support.map((item) => (
                <li key={item.name}>
                  <Link
                    to={item.path}
                    className="text-gray-400 hover:text-white transition-colors text-sm"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="text-lg font-semibold mb-4 flex items-center">
              <FileText className="w-5 h-5 text-gray-400 mr-2" />
              Resources
            </h4>
            <ul className="space-y-2">
              {resources.map((item) => (
                <li key={item.name}>
                  <Link
                    to={item.path}
                    className="text-gray-400 hover:text-white transition-colors text-sm"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Newsletter Signup */}
        <div className="bg-gradient-to-r from-cyan-500/10 to-purple-500/10 rounded-xl p-6 mb-8 border border-cyan-500/20">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="mb-4 md:mb-0">
              <h3 className="text-xl font-semibold mb-2">Stay Updated</h3>
              <p className="text-gray-400 text-sm">Get the latest insights on AI, 5G, and IT solutions delivered to your inbox.</p>
            </div>
            <div className="flex w-full md:w-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 md:w-64 px-4 py-3 rounded-l-lg bg-slate-800 border border-gray-600 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
              />
              <button className="px-6 py-3 bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-600 hover:to-purple-700 rounded-r-lg transition-all duration-300 flex items-center space-x-2 font-semibold">
                <span>Subscribe</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © {currentYear} Zion Tech Group. All rights reserved.
            </p>
            <div className="flex flex-wrap gap-6 mt-4 md:mt-0">
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
              <Link
                to="/sitemap"
                className="text-gray-400 hover:text-white transition-colors text-sm"
              >
                Sitemap
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