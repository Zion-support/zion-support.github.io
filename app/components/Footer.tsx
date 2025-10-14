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
  Video,
  FileText,
  Eye,
  TrendingUp,
  Target,
  Settings,
  Package,
  Receipt,
  Calculator,
  DollarSign,
  Cpu,
  Network,
  Heart
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
    { name: "AI Analytics", path: "/ai-analytics", icon: <BarChart3 className="w-4 h-4" /> },
    { name: "AI Automation", path: "/ai-automation", icon: <Zap className="w-4 h-4" /> },
    { name: "AI Business Intelligence", path: "/ai-business-intelligence", icon: <TrendingUp className="w-4 h-4" /> },
    { name: "AI Content Generation", path: "/ai-content-generation", icon: <FileText className="w-4 h-4" /> },
    { name: "AI Customer Service", path: "/ai-customer-service", icon: <Users className="w-4 h-4" /> },
    { name: "AI Cybersecurity", path: "/ai-cybersecurity", icon: <Shield className="w-4 h-4" /> },
    { name: "AI Data Analytics", path: "/ai-data-analytics", icon: <Database className="w-4 h-4" /> },
    { name: "AI Marketing", path: "/ai-marketing", icon: <Target className="w-4 h-4" /> }
  ], []);

  const itServices = useMemo(() => [
    { name: "Cloud Infrastructure", path: "/cloud-infrastructure", icon: <Cloud className="w-4 h-4" /> },
    { name: "Cybersecurity Solutions", path: "/cybersecurity-solutions", icon: <Shield className="w-4 h-4" /> },
    { name: "Web Development", path: "/web-development", icon: <Code className="w-4 h-4" /> },
    { name: "Mobile Development", path: "/mobile-development", icon: <Globe className="w-4 h-4" /> },
    { name: "Database Management", path: "/database-management", icon: <Database className="w-4 h-4" /> },
    { name: "Custom Software", path: "/custom-software", icon: <Settings className="w-4 h-4" /> },
    { name: "Network Infrastructure", path: "/network-infrastructure", icon: <Network className="w-4 h-4" /> }
  ], []);

  const microSaasServices = useMemo(() => [
    { name: "Zion Analytics Pro", path: "/zion-analytics-pro", icon: <BarChart3 className="w-4 h-4" /> },
    { name: "Zion Security Shield", path: "/zion-security-shield", icon: <Shield className="w-4 h-4" /> },
    { name: "Zion Cloud Vault", path: "/zion-cloud-vault", icon: <Cloud className="w-4 h-4" /> },
    { name: "Zion AI Video Generator", path: "/zion-ai-video-generator", icon: <Video className="w-4 h-4" /> },
    { name: "Zion AI Invoice Generator", path: "/zion-ai-invoice-generator", icon: <Receipt className="w-4 h-4" /> },
    { name: "Zion AI Customer Insights", path: "/zion-ai-customer-insights", icon: <Eye className="w-4 h-4" /> },
    { name: "Zion AI Email Analyzer", path: "/zion-ai-email-analyzer", icon: <Mail className="w-4 h-4" /> },
    { name: "Zion AI CRM Pro", path: "/zion-ai-crm-pro", icon: <Users className="w-4 h-4" /> }
  ], []);

  const fiveGServices = useMemo(() => [
    { name: "5G Data Analytics", path: "/5g-data-analytics", icon: <BarChart3 className="w-4 h-4" /> },
    { name: "5G Edge Computing", path: "/5g-edge-computing", icon: <Cpu className="w-4 h-4" /> },
    { name: "5G Implementation", path: "/5g-implementation", icon: <Settings className="w-4 h-4" /> },
    { name: "5G Mobile Applications", path: "/5g-mobile-applications", icon: <Globe className="w-4 h-4" /> },
    { name: "5G Network Infrastructure", path: "/5g-network-infrastructure", icon: <Network className="w-4 h-4" /> },
    { name: "5G Private Networks", path: "/5g-private-networks", icon: <Shield className="w-4 h-4" /> },
    { name: "5G Smart City Solutions", path: "/5g-smart-city-solutions", icon: <Globe className="w-4 h-4" /> },
    { name: "5G IoT Solutions", path: "/5g-iot-solutions", icon: <Target className="w-4 h-4" /> }
  ], []);

  const companyLinks = useMemo(() => [
    { name: "About Us", path: "/about" },
    { name: "Contact", path: "/contact" },
    { name: "Blog", path: "/blog" },
    { name: "Demo", path: "/demo" },
    { name: "Support", path: "/support" },
    { name: "Privacy Policy", path: "/privacy" },
    { name: "Terms of Service", path: "/terms" }
  ], []);

  return (
    <footer className="bg-slate-900/95 backdrop-blur-md border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-lg flex items-center justify-center">
                <Brain className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold text-white">Zion Tech Group</span>
            </div>
            <p className="text-gray-300 text-sm mb-6 max-w-xs">
              Leading provider of AI-powered solutions, IT services, and micro SAAS tools for modern businesses.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-cyan-400 transition-colors duration-200"
                  aria-label={social.name}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* AI Services */}
          <div>
            <h3 className="text-white font-semibold mb-4 flex items-center">
              <Brain className="w-4 h-4 mr-2" />
              AI Services
            </h3>
            <ul className="space-y-2">
              {aiServices.map((service) => (
                <li key={service.name}>
                  <Link
                    to={service.path}
                    className="flex items-center text-gray-300 hover:text-cyan-400 transition-colors duration-200 text-sm"
                  >
                    {service.icon}
                    <span className="ml-2">{service.name}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* IT Services */}
          <div>
            <h3 className="text-white font-semibold mb-4 flex items-center">
              <Settings className="w-4 h-4 mr-2" />
              IT Services
            </h3>
            <ul className="space-y-2">
              {itServices.map((service) => (
                <li key={service.name}>
                  <Link
                    to={service.path}
                    className="flex items-center text-gray-300 hover:text-cyan-400 transition-colors duration-200 text-sm"
                  >
                    {service.icon}
                    <span className="ml-2">{service.name}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Micro SAAS */}
          <div>
            <h3 className="text-white font-semibold mb-4 flex items-center">
              <Package className="w-4 h-4 mr-2" />
              Micro SAAS
            </h3>
            <ul className="space-y-2">
              {microSaasServices.map((service) => (
                <li key={service.name}>
                  <Link
                    to={service.path}
                    className="flex items-center text-gray-300 hover:text-cyan-400 transition-colors duration-200 text-sm"
                  >
                    {service.icon}
                    <span className="ml-2">{service.name}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* 5G Solutions */}
          <div>
            <h3 className="text-white font-semibold mb-4 flex items-center">
              <Globe className="w-4 h-4 mr-2" />
              5G Solutions
            </h3>
            <ul className="space-y-2">
              {fiveGServices.map((service) => (
                <li key={service.name}>
                  <Link
                    to={service.path}
                    className="flex items-center text-gray-300 hover:text-cyan-400 transition-colors duration-200 text-sm"
                  >
                    {service.icon}
                    <span className="ml-2">{service.name}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Contact Information */}
        <div className="mt-12 pt-8 border-t border-white/10">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-lg flex items-center justify-center">
                <Mail className="w-5 h-5 text-white" />
              </div>
              <div>
                <p className="text-white font-semibold">Email</p>
                <p className="text-gray-300 text-sm">kleber@ziontechgroup.com</p>
              </div>
            </div>
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-lg flex items-center justify-center">
                <Phone className="w-5 h-5 text-white" />
              </div>
              <div>
                <p className="text-white font-semibold">Phone</p>
                <p className="text-gray-300 text-sm">+1 302 464 0950</p>
              </div>
            </div>
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-lg flex items-center justify-center">
                <MapPin className="w-5 h-5 text-white" />
              </div>
              <div>
                <p className="text-white font-semibold">Address</p>
                <p className="text-gray-300 text-sm">364 E Main St STE 1008<br />Middletown DE 19709</p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-8 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center">
          <div className="flex flex-wrap space-x-6 mb-4 md:mb-0">
            {companyLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className="text-gray-300 hover:text-cyan-400 transition-colors duration-200 text-sm"
              >
                {link.name}
              </Link>
            ))}
          </div>
          <div className="flex items-center space-x-2 text-gray-300 text-sm">
            <Clock className="w-4 h-4" />
            <span>© {currentYear} Zion Tech Group. All rights reserved.</span>
          </div>
        </div>
      </div>
    </footer>
  );
});

Footer.displayName = "Footer";

export default Footer;