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
  Settings,
  Workflow,
  TrendingUp,
  Heart,
  Cpu,
  Link as LinkIcon,
  Target
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

  const aiServices = useMemo(() => [
    { name: "AI Quantum Computing", path: "/ai-quantum-computing", icon: <Cpu className="w-4 h-4" />, featured: true },
    { name: "AI Blockchain Solutions", path: "/ai-blockchain-solutions", icon: <LinkIcon className="w-4 h-4" />, featured: true },
    { name: "AI Analytics Dashboard Pro", path: "/ai-analytics-dashboard-pro", icon: <BarChart3 className="w-4 h-4" />, featured: true },
    { name: "AI Content Generator", path: "/ai-content-generator", icon: <Brain className="w-4 h-4" /> },
    { name: "AI Cybersecurity Suite Pro", path: "/ai-cybersecurity-suite-pro", icon: <Shield className="w-4 h-4" /> },
    { name: "AI Customer Support", path: "/ai-customer-support-chatbot", icon: <Zap className="w-4 h-4" /> },
    { name: "AI Code Assistant Pro", path: "/ai-code-assistant-pro", icon: <Code className="w-4 h-4" /> },
    { name: "AI Business Intelligence Pro", path: "/ai-business-intelligence-pro", icon: <Database className="w-4 h-4" /> }
  ], []);

  const microSaasServices = useMemo(() => [
    { name: "Zion AI Sales Predictor", path: "/zion-ai-sales-predictor", icon: <TrendingUp className="w-4 h-4" />, featured: true },
    { name: "Zion AI Workflow Optimizer", path: "/zion-ai-workflow-optimizer", icon: <Workflow className="w-4 h-4" />, featured: true },
    { name: "Zion AI Customer Insights Pro", path: "/zion-ai-customer-insights-pro", icon: <Heart className="w-4 h-4" />, featured: true },
    { name: "Zion Analytics Pro", path: "/zion-analytics-pro", icon: <BarChart3 className="w-4 h-4" />, featured: true },
    { name: "Zion Security Shield", path: "/zion-security-shield", icon: <Shield className="w-4 h-4" />, featured: true },
    { name: "Zion Cloud Vault", path: "/zion-cloud-vault", icon: <Cloud className="w-4 h-4" />, featured: true },
    { name: "Zion Content Studio", path: "/zion-content-studio", icon: <Brain className="w-4 h-4" /> },
    { name: "Zion Data Sync", path: "/zion-data-sync", icon: <Database className="w-4 h-4" /> }
  ], []);

  const itServices = useMemo(() => [
    { name: "Cloud Infrastructure", path: "/cloud-infrastructure", icon: <Cloud className="w-4 h-4" /> },
    { name: "Cybersecurity Solutions", path: "/cybersecurity-solutions", icon: <Shield className="w-4 h-4" /> },
    { name: "Web Development", path: "/web-development", icon: <Code className="w-4 h-4" /> },
    { name: "Mobile Development", path: "/mobile-development", icon: <Globe className="w-4 h-4" /> },
    { name: "Database Management", path: "/database-management", icon: <Database className="w-4 h-4" /> },
    { name: "Custom Software", path: "/custom-software", icon: <Code className="w-4 h-4" /> },
    { name: "Network Infrastructure", path: "/network-infrastructure", icon: <Cloud className="w-4 h-4" /> },
    { name: "Data Analytics", path: "/data-analytics", icon: <BarChart3 className="w-4 h-4" /> }
  ], []);

  const fiveGServices = useMemo(() => [
    { name: "5G Data Analytics", path: "/5g-data-analytics", icon: <BarChart3 className="w-4 h-4" /> },
    { name: "5G Edge Computing", path: "/5g-edge-computing", icon: <Cpu className="w-4 h-4" /> },
    { name: "5G Implementation", path: "/5g-implementation", icon: <Settings className="w-4 h-4" /> },
    { name: "5G Mobile Applications", path: "/5g-mobile-applications", icon: <Globe className="w-4 h-4" /> },
    { name: "5G Network Infrastructure", path: "/5g-network-infrastructure", icon: <Cloud className="w-4 h-4" /> },
    { name: "5G Private Networks", path: "/5g-private-networks", icon: <Shield className="w-4 h-4" /> },
    { name: "5G Smart City Solutions", path: "/5g-smart-city-solutions", icon: <Globe className="w-4 h-4" /> },
    { name: "5G IoT Solutions", path: "/5g-iot-solutions", icon: <Target className="w-4 h-4" /> }
  ], []);

  const companyLinks = useMemo(() => [
    { name: "About Us", path: "/about" },
    { name: "Our Team", path: "/team" },
    { name: "Careers", path: "/careers" },
    { name: "Press", path: "/press" },
    { name: "Partners", path: "/partners" },
    { name: "Investors", path: "/investors" }
  ], []);

  const supportLinks = useMemo(() => [
    { name: "Help Center", path: "/support" },
    { name: "Documentation", path: "/docs" },
    { name: "API Reference", path: "/api" },
    { name: "Tutorials", path: "/tutorials" },
    { name: "Community", path: "/community" },
    { name: "Status", path: "/status" }
  ], []);

  const legalLinks = useMemo(() => [
    { name: "Privacy Policy", path: "/privacy" },
    { name: "Terms of Service", path: "/terms" },
    { name: "Cookie Policy", path: "/cookies" },
    { name: "GDPR", path: "/gdpr" },
    { name: "Security", path: "/security" },
    { name: "Compliance", path: "/compliance" }
  ], []);

  return (
    <footer className="bg-slate-900 border-t border-purple-500/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-2 mb-6">
              <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-blue-500 rounded-lg flex items-center justify-center">
                <Zap className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold text-white">Zion Tech Group</span>
            </div>
            <p className="text-gray-300 mb-6 max-w-md">
              Leading provider of AI-powered solutions, IT services, and innovative micro SAAS platforms. 
              Transforming businesses with cutting-edge technology and intelligent automation.
            </p>
            
            {/* Contact Info */}
            <div className="space-y-3 mb-6">
              <div className="flex items-center text-gray-300">
                <Phone className="w-4 h-4 mr-3 text-purple-400" />
                <a href="tel:+13024640950" className="hover:text-purple-300 transition-colors">
                  +1 302 464 0950
                </a>
              </div>
              <div className="flex items-center text-gray-300">
                <Mail className="w-4 h-4 mr-3 text-purple-400" />
                <a href="mailto:kleber@ziontechgroup.com" className="hover:text-purple-300 transition-colors">
                  kleber@ziontechgroup.com
                </a>
              </div>
              <div className="flex items-center text-gray-300">
                <MapPin className="w-4 h-4 mr-3 text-purple-400" />
                <span>364 E Main St STE 1008, Middletown DE 19709</span>
              </div>
              <div className="flex items-center text-gray-300">
                <Clock className="w-4 h-4 mr-3 text-purple-400" />
                <span>Mon-Fri: 9AM-6PM EST</span>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex space-x-4">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-purple-400 transition-colors duration-200"
                  aria-label={social.name}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* AI Services */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-6 flex items-center">
              <Brain className="w-5 h-5 mr-2 text-purple-400" />
              AI Services
            </h3>
            <ul className="space-y-3">
              {aiServices.map((service) => (
                <li key={service.name}>
                  <Link
                    to={service.path}
                    className="text-gray-300 hover:text-purple-300 transition-colors duration-200 flex items-center group"
                  >
                    <span className="text-purple-400 mr-2 group-hover:text-purple-300">
                      {service.icon}
                    </span>
                    <span className="text-sm">
                      {service.name}
                      {service.featured && <Star className="w-3 h-3 inline ml-1 text-yellow-400" />}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Micro SAAS */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-6 flex items-center">
              <Zap className="w-5 h-5 mr-2 text-purple-400" />
              Micro SAAS
            </h3>
            <ul className="space-y-3">
              {microSaasServices.map((service) => (
                <li key={service.name}>
                  <Link
                    to={service.path}
                    className="text-gray-300 hover:text-purple-300 transition-colors duration-200 flex items-center group"
                  >
                    <span className="text-purple-400 mr-2 group-hover:text-purple-300">
                      {service.icon}
                    </span>
                    <span className="text-sm">
                      {service.name}
                      {service.featured && <Star className="w-3 h-3 inline ml-1 text-yellow-400" />}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* IT Services */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-6 flex items-center">
              <Settings className="w-5 h-5 mr-2 text-purple-400" />
              IT Services
            </h3>
            <ul className="space-y-3">
              {itServices.map((service) => (
                <li key={service.name}>
                  <Link
                    to={service.path}
                    className="text-gray-300 hover:text-purple-300 transition-colors duration-200 flex items-center group"
                  >
                    <span className="text-purple-400 mr-2 group-hover:text-purple-300">
                      {service.icon}
                    </span>
                    <span className="text-sm">{service.name}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* 5G Solutions */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-6 flex items-center">
              <Globe className="w-5 h-5 mr-2 text-purple-400" />
              5G Solutions
            </h3>
            <ul className="space-y-3">
              {fiveGServices.map((service) => (
                <li key={service.name}>
                  <Link
                    to={service.path}
                    className="text-gray-300 hover:text-purple-300 transition-colors duration-200 flex items-center group"
                  >
                    <span className="text-purple-400 mr-2 group-hover:text-purple-300">
                      {service.icon}
                    </span>
                    <span className="text-sm">{service.name}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Additional Links */}
        <div className="mt-12 pt-8 border-t border-gray-700">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Company */}
            <div>
              <h4 className="text-sm font-semibold text-white mb-4">Company</h4>
              <ul className="space-y-2">
                {companyLinks.map((link) => (
                  <li key={link.name}>
                    <Link
                      to={link.path}
                      className="text-gray-400 hover:text-purple-300 text-sm transition-colors duration-200"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Support */}
            <div>
              <h4 className="text-sm font-semibold text-white mb-4">Support</h4>
              <ul className="space-y-2">
                {supportLinks.map((link) => (
                  <li key={link.name}>
                    <Link
                      to={link.path}
                      className="text-gray-400 hover:text-purple-300 text-sm transition-colors duration-200"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Legal */}
            <div>
              <h4 className="text-sm font-semibold text-white mb-4">Legal</h4>
              <ul className="space-y-2">
                {legalLinks.map((link) => (
                  <li key={link.name}>
                    <Link
                      to={link.path}
                      className="text-gray-400 hover:text-purple-300 text-sm transition-colors duration-200"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Newsletter Signup */}
        <div className="mt-12 pt-8 border-t border-gray-700">
          <div className="max-w-md mx-auto text-center">
            <h3 className="text-lg font-semibold text-white mb-4">Stay Updated</h3>
            <p className="text-gray-300 mb-6">
              Get the latest updates on our AI innovations and technology breakthroughs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 bg-slate-800 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500"
              />
              <FuturisticButton
                href="/contact"
                className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300 whitespace-nowrap"
              >
                Subscribe
              </FuturisticButton>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-gray-700 flex flex-col md:flex-row justify-between items-center">
          <div className="text-gray-400 text-sm">
            © {currentYear} Zion Tech Group. All rights reserved.
          </div>
          <div className="flex items-center space-x-6 mt-4 md:mt-0">
            <span className="text-gray-400 text-sm">Powered by AI</span>
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
              <span className="text-green-400 text-sm">All systems operational</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
});

Footer.displayName = 'Footer';

export default Footer;