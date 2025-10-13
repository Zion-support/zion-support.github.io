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
  FileText as Invoice,
  Eye,
  Mail as Email,
  Package2,
  MessageSquare,
  CreditCard,
  Mic,
  GitBranch,
  Share2,
  FileCheck,
  Gauge,
  TrendingDown,
  Truck,
  Calculator,
  Shield as Moderation,
  Languages,
  Database as DataClean,
  Calendar,
  Headphones,
  Cpu,
  Network,
  Heart,
  TrendingUp,
  Sparkles,
  Smartphone,
  Monitor
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
    { name: "AI Automation", path: "/ai-automation", icon: <Cpu className="w-4 h-4" /> },
    { name: "AI Business Intelligence", path: "/ai-business-intelligence", icon: <Brain className="w-4 h-4" /> },
    { name: "AI Content Generation", path: "/ai-content-generation", icon: <Sparkles className="w-4 h-4" /> },
    { name: "AI Customer Service", path: "/ai-customer-service", icon: <Users className="w-4 h-4" /> },
    { name: "AI Data Analytics", path: "/ai-data-analytics", icon: <Database className="w-4 h-4" /> },
    { name: "AI Email Automation", path: "/ai-email-automation", icon: <Mail className="w-4 h-4" /> },
    { name: "AI Fraud Detection", path: "/ai-fraud-detection", icon: <Shield className="w-4 h-4" /> },
    { name: "AI Healthcare", path: "/ai-healthcare", icon: <Heart className="w-4 h-4" /> },
    { name: "AI Marketing", path: "/ai-marketing", icon: <TrendingUp className="w-4 h-4" /> }
  ], []);

  const itServices = useMemo(() => [
    { name: "Cloud Infrastructure", path: "/cloud-infrastructure", icon: <Cloud className="w-4 h-4" /> },
    { name: "Cybersecurity Solutions", path: "/cybersecurity-solutions", icon: <Shield className="w-4 h-4" /> },
    { name: "Web Development", path: "/web-development", icon: <Code className="w-4 h-4" /> },
    { name: "Mobile Development", path: "/mobile-development", icon: <Smartphone className="w-4 h-4" /> },
    { name: "Database Management", path: "/database-management", icon: <Database className="w-4 h-4" /> },
    { name: "Custom Software", path: "/custom-software", icon: <Monitor className="w-4 h-4" /> },
    { name: "Network Infrastructure", path: "/network-infrastructure", icon: <Network className="w-4 h-4" /> }
  ], []);

  const microSaasServices = useMemo(() => [
    { name: "Zion Analytics Pro", path: "/zion-analytics-pro", icon: <BarChart3 className="w-4 h-4" /> },
    { name: "Zion Security Shield", path: "/zion-security-shield", icon: <Shield className="w-4 h-4" /> },
    { name: "Zion Cloud Vault", path: "/zion-cloud-vault", icon: <Cloud className="w-4 h-4" /> },
    { name: "Zion Content Studio", path: "/zion-content-studio", icon: <Sparkles className="w-4 h-4" /> },
    { name: "Zion AI Video Generator", path: "/zion-ai-video-generator", icon: <Video className="w-4 h-4" /> },
    { name: "Zion AI Invoice Generator", path: "/zion-ai-invoice-generator", icon: <Invoice className="w-4 h-4" /> },
    { name: "Zion AI Customer Insights", path: "/zion-ai-customer-insights", icon: <Eye className="w-4 h-4" /> },
    { name: "Zion AI Email Analyzer", path: "/zion-ai-email-analyzer", icon: <Email className="w-4 h-4" /> },
    { name: "Zion Smart Inventory Optimizer", path: "/zion-smart-inventory-optimizer", icon: <Package2 className="w-4 h-4" /> },
    { name: "Zion AI Customer Sentiment Tracker", path: "/zion-ai-customer-sentiment-tracker", icon: <MessageSquare className="w-4 h-4" /> }
  ], []);

  const fiveGServices = useMemo(() => [
    { name: "5G Data Analytics", path: "/5g-data-analytics", icon: <BarChart3 className="w-4 h-4" /> },
    { name: "5G Edge Computing", path: "/5g-edge-computing", icon: <Cpu className="w-4 h-4" /> },
    { name: "5G Implementation", path: "/5g-implementation", icon: <Zap className="w-4 h-4" /> },
    { name: "5G Mobile Applications", path: "/5g-mobile-applications", icon: <Smartphone className="w-4 h-4" /> },
    { name: "5G Network Infrastructure", path: "/5g-network-infrastructure", icon: <Network className="w-4 h-4" /> },
    { name: "5G Private Networks", path: "/5g-private-networks", icon: <Shield className="w-4 h-4" /> },
    { name: "5G Smart City Solutions", path: "/5g-smart-city-solutions", icon: <Globe className="w-4 h-4" /> },
    { name: "5G IoT Solutions", path: "/5g-iot-solutions", icon: <Database className="w-4 h-4" /> }
  ], []);

  const companyLinks = useMemo(() => [
    { name: "About Us", path: "/about" },
    { name: "Case Studies", path: "/case-studies" },
    { name: "Careers", path: "/careers" },
    { name: "Blog", path: "/blog" },
    { name: "Press", path: "/press" },
    { name: "Partners", path: "/partners" }
  ], []);

  const supportLinks = useMemo(() => [
    { name: "Contact", path: "/contact" },
    { name: "Support", path: "/support" },
    { name: "Documentation", path: "/docs" },
    { name: "Tutorials", path: "/tutorials" },
    { name: "Demo", path: "/demo" },
    { name: "Pricing", path: "/pricing" }
  ], []);

  const legalLinks = useMemo(() => [
    { name: "Privacy Policy", path: "/privacy" },
    { name: "Terms of Service", path: "/terms" },
    { name: "Cookie Policy", path: "/cookies" },
    { name: "GDPR Compliance", path: "/gdpr" },
    { name: "Security", path: "/security" },
    { name: "Sitemap", path: "/sitemap" }
  ], []);

  const stats = useMemo(() => [
    { number: "500+", label: "Projects Completed", icon: <Award className="w-5 h-5" /> },
    { number: "10,000+", label: "Happy Clients", icon: <Users className="w-5 h-5" /> },
    { number: "99.9%", label: "Uptime SLA", icon: <Shield className="w-5 h-5" /> },
    { number: "24/7", label: "Support", icon: <Clock className="w-5 h-5" /> }
  ], []);

  return (
    <footer className="bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/5 via-purple-500/5 to-pink-500/5"></div>
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-cyan-400 to-transparent"></div>

      <div className="relative z-10">
        {/* Main Footer Content */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8 mb-12">
            {/* Company Info */}
            <div className="lg:col-span-2 space-y-6">
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-lg flex items-center justify-center">
                  <Brain className="w-5 h-5 text-white" />
                </div>
                <span className="text-xl font-bold bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                  Zion Tech Group
                </span>
              </div>

              <p className="text-gray-300 text-sm leading-relaxed max-w-md">
                Leading provider of AI-powered solutions, cybersecurity, cloud infrastructure, and digital transformation.
                Empowering businesses with cutting-edge technology and innovative micro SAAS solutions.
              </p>

              {/* Contact Information */}
              <div className="space-y-3">
                <div className="flex items-center space-x-3 text-gray-300">
                  <Mail className="w-4 h-4 text-cyan-400" />
                  <span className="text-sm">kleber@ziontechgroup.com</span>
                </div>
                <div className="flex items-center space-x-3 text-gray-300">
                  <Phone className="w-4 h-4 text-cyan-400" />
                  <span className="text-sm">+1 302 464 0950</span>
                </div>
                <div className="flex items-center space-x-3 text-gray-300">
                  <MapPin className="w-4 h-4 text-cyan-400" />
                  <span className="text-sm">364 E Main St STE 1008<br />Middletown DE 19709</span>
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
                    className="w-10 h-10 bg-white/10 backdrop-blur-sm rounded-lg flex items-center justify-center text-gray-300 hover:text-cyan-400 hover:bg-cyan-500/20 transition-all duration-300 group"
                    aria-label={social.name}
                  >
                    <div className="group-hover:scale-110 transition-transform duration-300">
                      {social.icon}
                    </div>
                  </a>
                ))}
              </div>
            </div>

            {/* AI Services */}
            <div className="space-y-4">
              <h4 className="text-lg font-semibold text-cyan-400 mb-4">AI Services</h4>
              <ul className="space-y-3">
                {aiServices.map((service) => (
                  <li key={service.name}>
                    <Link
                      to={service.path}
                      className="flex items-center text-gray-300 hover:text-cyan-400 transition-colors group text-sm"
                    >
                      <span className="mr-2 group-hover:scale-110 transition-transform duration-300">
                        {service.icon}
                      </span>
                      <span>{service.name}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* IT Services */}
            <div className="space-y-4">
              <h4 className="text-lg font-semibold text-green-400 mb-4">IT Services</h4>
              <ul className="space-y-3">
                {itServices.map((service) => (
                  <li key={service.name}>
                    <Link
                      to={service.path}
                      className="flex items-center text-gray-300 hover:text-green-400 transition-colors group text-sm"
                    >
                      <span className="mr-2 group-hover:scale-110 transition-transform duration-300">
                        {service.icon}
                      </span>
                      <span>{service.name}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Micro SAAS */}
            <div className="space-y-4">
              <h4 className="text-lg font-semibold text-purple-400 mb-4">Micro SAAS</h4>
              <ul className="space-y-3">
                {microSaasServices.map((service) => (
                  <li key={service.name}>
                    <Link
                      to={service.path}
                      className="flex items-center text-gray-300 hover:text-purple-400 transition-colors group text-sm"
                    >
                      <span className="mr-2 group-hover:scale-110 transition-transform duration-300">
                        {service.icon}
                      </span>
                      <span>{service.name}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* 5G Solutions */}
            <div className="space-y-4">
              <h4 className="text-lg font-semibold text-orange-400 mb-4">5G Solutions</h4>
              <ul className="space-y-3">
                {fiveGServices.map((service) => (
                  <li key={service.name}>
                    <Link
                      to={service.path}
                      className="flex items-center text-gray-300 hover:text-orange-400 transition-colors group text-sm"
                    >
                      <span className="mr-2 group-hover:scale-110 transition-transform duration-300">
                        {service.icon}
                      </span>
                      <span>{service.name}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Company & Support Links */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {/* Company */}
            <div className="space-y-4">
              <h4 className="text-lg font-semibold text-white mb-4">Company</h4>
              <ul className="space-y-3">
                {companyLinks.map((link) => (
                  <li key={link.name}>
                    <Link
                      to={link.path}
                      className="text-gray-300 hover:text-white transition-colors text-sm"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Support */}
            <div className="space-y-4">
              <h4 className="text-lg font-semibold text-white mb-4">Support</h4>
              <ul className="space-y-3">
                {supportLinks.map((link) => (
                  <li key={link.name}>
                    <Link
                      to={link.path}
                      className="text-gray-300 hover:text-white transition-colors text-sm"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Legal */}
            <div className="space-y-4">
              <h4 className="text-lg font-semibold text-white mb-4">Legal</h4>
              <ul className="space-y-3">
                {legalLinks.map((link) => (
                  <li key={link.name}>
                    <Link
                      to={link.path}
                      className="text-gray-300 hover:text-white transition-colors text-sm"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
            {stats.map((stat, index) => (
              <div key={index} className="text-center group">
                <div className="w-12 h-12 mx-auto mb-3 rounded-full bg-gradient-to-r from-cyan-500/20 to-purple-500/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  {stat.icon}
                </div>
                <div className="text-2xl font-bold text-white mb-1">{stat.number}</div>
                <div className="text-gray-300 text-sm">{stat.label}</div>
              </div>
            ))}
          </div>

          {/* Bottom Footer */}
          <div className="border-t border-gray-800 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <p className="text-gray-400 text-sm">
                © {currentYear} Zion Tech Group. All rights reserved.
              </p>
              <div className="flex space-x-6 mt-4 md:mt-0">
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
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
});

Footer.displayName = "Footer";

export default Footer;
