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
  Star,
  Sparkles,
  Video,
  Mic,
  Eye,
  DollarSign,
  Heart,
  Receipt,
  TrendingUp,
  Package,
  Network,
  Target,
  Calendar,
  FileText,
  Layers,
  Settings,
  HelpCircle,
  BookOpen,
  PlayCircle,
  Cpu
} from "lucide-react";

const EnhancedFooter: React.FC = () => {
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

  const companyLinks = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Contact", path: "/contact" },
    { name: "Blog", path: "/blog" },
    { name: "Support", path: "/support" },
    { name: "Privacy Policy", path: "/privacy" },
    { name: "Terms of Service", path: "/terms" },
  ];

  const aiServices = [
    { name: "AI Analytics", path: "/ai-analytics" },
    { name: "AI Content Generation", path: "/ai-content-generation" },
    { name: "AI Customer Support", path: "/ai-customer-support" },
    { name: "AI Cybersecurity", path: "/ai-cybersecurity" },
    { name: "AI Data Analytics", path: "/ai-data-analytics" },
    { name: "AI 3D Generation", path: "/ai-3d-generation" },
    { name: "AI Blockchain Analytics", path: "/ai-blockchain-analytics" },
    { name: "AI Computer Vision", path: "/ai-computer-vision" },
  ];

  const microSaasServices = [
    { name: "Zion AI Video Generator", path: "/zion-ai-video-generator" },
    { name: "Zion AI Invoice Generator", path: "/zion-ai-invoice-generator" },
    { name: "Zion AI Customer Insights", path: "/zion-ai-customer-insights" },
    { name: "Zion AI Email Analyzer", path: "/zion-ai-email-analyzer" },
    { name: "Zion Smart Inventory Optimizer", path: "/zion-smart-inventory-optimizer" },
    { name: "Zion AI Customer Sentiment Tracker", path: "/zion-ai-customer-sentiment-tracker" },
    { name: "Zion Smart Expense Categorizer", path: "/zion-smart-expense-categorizer" },
    { name: "Zion AI Voice Assistant Pro", path: "/zion-ai-voice-assistant-pro" },
  ];

  const itServices = [
    { name: "Cloud Migration", path: "/cloud-migration" },
    { name: "DevOps Services", path: "/devops" },
    { name: "IT Consulting", path: "/it-consulting" },
    { name: "Network Security", path: "/network-security" },
    { name: "Custom Software", path: "/custom-software" },
    { name: "System Integration", path: "/system-integration" },
    { name: "Web Development", path: "/web-development" },
  ];

  const fiveGServices = [
    { name: "5G Network Infrastructure", path: "/5g-network-infrastructure" },
    { name: "5G Edge Computing", path: "/5g-edge-computing" },
    { name: "5G IoT Solutions", path: "/5g-iot-solutions" },
    { name: "5G Smart City Solutions", path: "/5g-smart-city-solutions" },
    { name: "5G Private Networks", path: "/5g-private-networks" },
    { name: "5G Mobile Applications", path: "/5g-mobile-applications" },
  ];

  const resources = [
    { name: "Documentation", path: "/docs" },
    { name: "API Reference", path: "/api-docs" },
    { name: "Tutorials", path: "/tutorials" },
    { name: "Case Studies", path: "/case-studies" },
    { name: "White Papers", path: "/white-papers" },
    { name: "Webinars", path: "/webinars" },
    { name: "Help Center", path: "/help" },
  ];

  return (
    <footer className="bg-slate-900/95 backdrop-blur-sm border-t border-cyan-500/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-lg flex items-center justify-center">
                <Sparkles className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold text-white">Zion Tech Group</span>
            </div>
            <p className="text-gray-300 mb-6 max-w-md">
              Leading provider of AI-powered solutions, IT services, micro SAAS, and digital transformation for modern businesses.
            </p>
            <div className="space-y-2 text-sm text-gray-300">
              <div className="flex items-center space-x-2">
                <Phone className="w-4 h-4 text-cyan-400" />
                <span>+1 302 464 0950</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="w-4 h-4 text-cyan-400" />
                <span>kleber@ziontechgroup.com</span>
              </div>
              <div className="flex items-center space-x-2">
                <MapPin className="w-4 h-4 text-cyan-400" />
                <span>364 E Main St STE 1008, Middletown DE 19709</span>
              </div>
            </div>
            <div className="flex space-x-4 mt-6">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-cyan-400 transition-colors"
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Company Links */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Company</h3>
            <ul className="space-y-2">
              {companyLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.path}
                    className="text-gray-300 hover:text-cyan-400 transition-colors text-sm"
                  >
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
              {aiServices.map((service) => (
                <li key={service.name}>
                  <Link
                    to={service.path}
                    className="text-gray-300 hover:text-cyan-400 transition-colors text-sm"
                  >
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
                    className="text-gray-300 hover:text-cyan-400 transition-colors text-sm"
                  >
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* IT Services & 5G */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">IT & 5G Services</h3>
            <ul className="space-y-2">
              {itServices.map((service) => (
                <li key={service.name}>
                  <Link
                    to={service.path}
                    className="text-gray-300 hover:text-cyan-400 transition-colors text-sm"
                  >
                    {service.name}
                  </Link>
                </li>
              ))}
              <li className="pt-2">
                <span className="text-cyan-400 font-medium text-sm">5G Solutions:</span>
              </li>
              {fiveGServices.map((service) => (
                <li key={service.name} className="ml-2">
                  <Link
                    to={service.path}
                    className="text-gray-300 hover:text-cyan-400 transition-colors text-sm"
                  >
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Newsletter Signup */}
        <div className="mt-12 pt-8 border-t border-gray-700">
          <div className="max-w-md mx-auto text-center">
            <h3 className="text-lg font-semibold text-white mb-2">Stay Updated</h3>
            <p className="text-gray-300 text-sm mb-4">
              Get the latest updates on our AI services and technology solutions.
            </p>
            <div className="flex space-x-2">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-2 bg-slate-800 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-cyan-500"
              />
              <button className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-6 py-2 rounded-lg font-medium hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center space-x-2">
                <span>Subscribe</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-8 pt-8 border-t border-gray-700">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-sm text-gray-400">
              © {currentYear} Zion Tech Group. All rights reserved.
            </div>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <Link to="/privacy" className="text-sm text-gray-400 hover:text-cyan-400 transition-colors">
                Privacy Policy
              </Link>
              <Link to="/terms" className="text-sm text-gray-400 hover:text-cyan-400 transition-colors">
                Terms of Service
              </Link>
              <Link to="/support" className="text-sm text-gray-400 hover:text-cyan-400 transition-colors">
                Support
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default EnhancedFooter;