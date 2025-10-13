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
  Leaf,
  Heart,
  Truck,
  Mic,
  DollarSign,
  TrendingUp,
  Package,
  Settings,
  Target,
  Lock,
  CheckCircle,
  ExternalLink
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

  const services = useMemo(() => [
    { name: "AI Services", path: "/ai-services", icon: <Brain className="w-4 h-4" /> },
    { name: "IT Services", path: "/it-services", icon: <Shield className="w-4 h-4" /> },
    { name: "Cloud Services", path: "/cloud-services", icon: <Cloud className="w-4 h-4" /> },
    { name: "5G Solutions", path: "/5g-solutions", icon: <Zap className="w-4 h-4" /> },
    { name: "Micro SAAS", path: "/micro-saas", icon: <Package className="w-4 h-4" /> },
    { name: "Pricing", path: "/pricing", icon: <DollarSign className="w-4 h-4" /> },
  ], []);

  const aiServices = useMemo(() => [
    { name: "AI Analytics", path: "/ai-analytics", icon: <BarChart3 className="w-4 h-4" /> },
    { name: "AI Automation", path: "/ai-automation", icon: <Zap className="w-4 h-4" /> },
    { name: "AI Content Generation", path: "/ai-content-generation", icon: <Code className="w-4 h-4" /> },
    { name: "AI Customer Service", path: "/ai-customer-service", icon: <Users className="w-4 h-4" /> },
    { name: "AI Cybersecurity", path: "/ai-cybersecurity", icon: <Shield className="w-4 h-4" /> },
    { name: "AI Climate Optimizer", path: "/zion-ai-climate-optimizer", icon: <Leaf className="w-4 h-4" /> },
  ], []);

  const microSaasServices = useMemo(() => [
    { name: "Zion Analytics Pro", path: "/zion-analytics-pro", icon: <BarChart3 className="w-4 h-4" /> },
    { name: "Zion Security Shield", path: "/zion-security-shield", icon: <Shield className="w-4 h-4" /> },
    { name: "Zion AI Climate Optimizer", path: "/zion-ai-climate-optimizer", icon: <Leaf className="w-4 h-4" /> },
    { name: "Zion AI Mental Health Assistant", path: "/zion-ai-mental-health-assistant", icon: <Heart className="w-4 h-4" /> },
    { name: "Zion AI Supply Chain Predictor", path: "/zion-ai-supply-chain-predictor", icon: <Truck className="w-4 h-4" /> },
    { name: "Zion AI Voice Analytics", path: "/zion-ai-voice-analytics", icon: <Mic className="w-4 h-4" /> },
  ], []);

  const company = useMemo(() => [
    { name: "About Us", path: "/about" },
    { name: "Our Team", path: "/team" },
    { name: "Careers", path: "/careers" },
    { name: "Press", path: "/press" },
    { name: "Blog", path: "/blog" },
    { name: "Case Studies", path: "/case-studies" },
  ], []);

  const support = useMemo(() => [
    { name: "Help Center", path: "/help" },
    { name: "Documentation", path: "/docs" },
    { name: "API Reference", path: "/api" },
    { name: "Tutorials", path: "/tutorials" },
    { name: "Community", path: "/community" },
    { name: "Status", path: "/status" },
  ], []);

  const legal = useMemo(() => [
    { name: "Privacy Policy", path: "/privacy" },
    { name: "Terms of Service", path: "/terms" },
    { name: "Cookie Policy", path: "/cookies" },
    { name: "GDPR Compliance", path: "/gdpr" },
    { name: "Security", path: "/security" },
    { name: "Accessibility", path: "/accessibility" },
  ], []);

  return (
    <footer className="bg-slate-900 border-t border-slate-700">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
                <Zap className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold text-white">Zion Tech Group</span>
            </div>
            <p className="text-gray-300 mb-6 max-w-md">
              Leading provider of AI-powered solutions, IT services, and innovative micro SAAS platforms. 
              Transforming businesses with cutting-edge technology and intelligent automation.
            </p>
            
            {/* Contact Information */}
            <div className="space-y-3 mb-6">
              <div className="flex items-center space-x-3 text-gray-300">
                <Phone className="w-4 h-4 text-blue-400" />
                <a href="tel:+13024640950" className="hover:text-white transition-colors">
                  +1 302 464 0950
                </a>
              </div>
              <div className="flex items-center space-x-3 text-gray-300">
                <Mail className="w-4 h-4 text-blue-400" />
                <a href="mailto:kleber@ziontechgroup.com" className="hover:text-white transition-colors">
                  kleber@ziontechgroup.com
                </a>
              </div>
              <div className="flex items-start space-x-3 text-gray-300">
                <MapPin className="w-4 h-4 text-blue-400 mt-0.5" />
                <div>
                  <div>364 E Main St STE 1008</div>
                  <div>Middletown, DE 19709</div>
                </div>
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
                  className="text-gray-400 hover:text-white transition-colors"
                  aria-label={social.name}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-white font-semibold mb-4">Services</h3>
            <ul className="space-y-3">
              {services.map((service) => (
                <li key={service.name}>
                  <Link
                    to={service.path}
                    className="flex items-center space-x-2 text-gray-300 hover:text-white transition-colors"
                  >
                    {service.icon}
                    <span>{service.name}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* AI Services */}
          <div>
            <h3 className="text-white font-semibold mb-4">AI Services</h3>
            <ul className="space-y-3">
              {aiServices.map((service) => (
                <li key={service.name}>
                  <Link
                    to={service.path}
                    className="flex items-center space-x-2 text-gray-300 hover:text-white transition-colors"
                  >
                    {service.icon}
                    <span>{service.name}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Micro SAAS */}
          <div>
            <h3 className="text-white font-semibold mb-4">Micro SAAS</h3>
            <ul className="space-y-3">
              {microSaasServices.map((service) => (
                <li key={service.name}>
                  <Link
                    to={service.path}
                    className="flex items-center space-x-2 text-gray-300 hover:text-white transition-colors"
                  >
                    {service.icon}
                    <span>{service.name}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company & Support */}
          <div>
            <h3 className="text-white font-semibold mb-4">Company</h3>
            <ul className="space-y-3 mb-6">
              {company.map((item) => (
                <li key={item.name}>
                  <Link
                    to={item.path}
                    className="text-gray-300 hover:text-white transition-colors"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>

            <h3 className="text-white font-semibold mb-4">Support</h3>
            <ul className="space-y-3">
              {support.map((item) => (
                <li key={item.name}>
                  <Link
                    to={item.path}
                    className="text-gray-300 hover:text-white transition-colors"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Newsletter Signup */}
        <div className="mt-12 pt-8 border-t border-slate-700">
          <div className="max-w-2xl mx-auto text-center">
            <h3 className="text-xl font-semibold text-white mb-2">
              Stay Updated with Zion Tech Group
            </h3>
            <p className="text-gray-300 mb-6">
              Get the latest insights on AI, technology trends, and exclusive offers delivered to your inbox.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 bg-slate-800 border border-slate-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
              <FuturisticButton
                to="#"
                className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105"
              >
                Subscribe
                <ArrowRight className="w-4 h-4 ml-2" />
              </FuturisticButton>
            </div>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="mt-12 pt-8 border-t border-slate-700">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-gray-400 text-sm mb-4 md:mb-0">
              © {currentYear} Zion Tech Group. All rights reserved.
            </div>
            
            <div className="flex flex-wrap gap-6 text-sm">
              {legal.map((item) => (
                <Link
                  key={item.name}
                  to={item.path}
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
});

Footer.displayName = 'Footer';

export default Footer;