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
  Globe
} from "lucide-react";

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { name: "Twitter", url: "https://twitter.com/ziontechgroup", icon: "🐦" },
    { name: "LinkedIn", url: "https://linkedin.com/company/ziontechgroup", icon: "💼" },
    { name: "GitHub", url: "https://github.com/ziontechgroup", icon: "🐙" },
    { name: "YouTube", url: "https://youtube.com/@ziontechgroup", icon: "📺" }
  ];

  const quickLinks = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Services", path: "/services" },
    { name: "Contact", path: "/contact" },
    { name: "Blog", path: "/blog" },
    { name: "Privacy", path: "/privacy" },
    { name: "Terms", path: "/terms" }
  ];

  const aiServices = [
    { name: "AI Analytics", path: "/ai-analytics" },
    { name: "AI Content Generation", path: "/ai-content-generation" },
    { name: "AI Customer Support", path: "/ai-customer-support" },
    { name: "AI Cybersecurity", path: "/ai-cybersecurity" },
    { name: "AI Data Analytics", path: "/ai-data-analytics" },
    { name: "AI Document Processing", path: "/ai-document-processing" },
    { name: "AI Marketing Automation", path: "/ai-marketing-automation" },
    { name: "AI Predictive Analytics", path: "/ai-predictive-analytics" },
    { name: "AI Voice Assistant", path: "/ai-voice-assistant" },
    { name: "AI Workflow Automation", path: "/ai-workflow-automation" }
  ];

  const itServices = [
    { name: "Cloud Migration", path: "/cloud-migration" },
    { name: "DevOps Services", path: "/devops" },
    { name: "IT Consulting", path: "/it-consulting" },
    { name: "Network Security", path: "/network-security" },
    { name: "Custom Software", path: "/custom-software" },
    { name: "System Integration", path: "/system-integration" },
    { name: "Web Development", path: "/web-development" }
  ];

  const microSaasServices = [
    { name: "Zion Analytics Pro", path: "/zion-ai-analytics-pro" },
    { name: "Zion AI CRM Pro", path: "/zion-ai-crm-pro" },
    { name: "Zion AI Video Generator", path: "/zion-ai-video-generator" },
    { name: "Zion AI Invoice Generator", path: "/zion-ai-invoice-generator" },
    { name: "Zion AI Customer Insights", path: "/zion-ai-customer-insights" },
    { name: "Zion AI Email Analyzer", path: "/zion-ai-email-analyzer" },
    { name: "Zion Smart Inventory Optimizer", path: "/zion-smart-inventory-optimizer" },
    { name: "Zion AI Customer Sentiment Tracker", path: "/zion-ai-customer-sentiment-tracker" },
    { name: "Zion Smart Expense Categorizer", path: "/zion-smart-expense-categorizer" },
    { name: "Zion AI Voice Assistant Pro", path: "/zion-ai-voice-assistant-pro" }
  ];

  const fiveGServices = [
    { name: "5G Network Infrastructure", path: "/5g-network-infrastructure" },
    { name: "5G Edge Computing", path: "/5g-edge-computing" },
    { name: "5G IoT Solutions", path: "/5g-iot-solutions" },
    { name: "5G Smart City Solutions", path: "/5g-smart-city-solutions" },
    { name: "5G Private Networks", path: "/5g-private-networks" },
    { name: "5G Mobile Applications", path: "/5g-mobile-applications" },
    { name: "5G Data Analytics", path: "/5g-data-analytics" },
    { name: "5G Implementation", path: "/5g-implementation" }
  ];

  return (
    <footer className="bg-slate-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-2 mb-6">
              <div className="w-8 h-8 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-lg flex items-center justify-center">
                <Brain className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold">Zion Tech Group</span>
            </div>
            <p className="text-gray-300 mb-6 leading-relaxed">
              Leading provider of AI-powered solutions, IT services, micro SAAS, and digital transformation for modern businesses. 
              Transform your operations with cutting-edge technology.
            </p>
            <div className="space-y-3">
              <div className="flex items-center space-x-3 text-gray-300">
                <Mail className="w-4 h-4 text-cyan-400" />
                <span>kleber@ziontechgroup.com</span>
              </div>
              <div className="flex items-center space-x-3 text-gray-300">
                <Phone className="w-4 h-4 text-cyan-400" />
                <span>+1 302 464 0950</span>
              </div>
              <div className="flex items-center space-x-3 text-gray-300">
                <MapPin className="w-4 h-4 text-cyan-400" />
                <span>364 E Main St STE 1008, Middletown DE 19709</span>
              </div>
              <div className="flex items-center space-x-3 text-gray-300">
                <Clock className="w-4 h-4 text-cyan-400" />
                <span>24/7 Support Available</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-6 text-white">Quick Links</h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.path}
                    className="text-gray-300 hover:text-cyan-400 transition-colors flex items-center group"
                  >
                    <ArrowRight className="w-3 h-3 mr-2 group-hover:translate-x-1 transition-transform" />
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* AI Services */}
          <div>
            <h3 className="text-lg font-semibold mb-6 text-white flex items-center">
              <Brain className="w-5 h-5 mr-2 text-cyan-400" />
              AI Services
            </h3>
            <ul className="space-y-3">
              {aiServices.slice(0, 6).map((service) => (
                <li key={service.name}>
                  <Link
                    to={service.path}
                    className="text-gray-300 hover:text-cyan-400 transition-colors text-sm"
                  >
                    {service.name}
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  to="/ai-services"
                  className="text-cyan-400 hover:text-cyan-300 transition-colors text-sm font-medium"
                >
                  View All AI Services →
                </Link>
              </li>
            </ul>
          </div>

          {/* IT Services */}
          <div>
            <h3 className="text-lg font-semibold mb-6 text-white flex items-center">
              <Shield className="w-5 h-5 mr-2 text-cyan-400" />
              IT Services
            </h3>
            <ul className="space-y-3">
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
            </ul>
          </div>

          {/* Micro SAAS */}
          <div>
            <h3 className="text-lg font-semibold mb-6 text-white flex items-center">
              <Zap className="w-5 h-5 mr-2 text-cyan-400" />
              Micro SAAS
            </h3>
            <ul className="space-y-3">
              {microSaasServices.slice(0, 6).map((service) => (
                <li key={service.name}>
                  <Link
                    to={service.path}
                    className="text-gray-300 hover:text-cyan-400 transition-colors text-sm"
                  >
                    {service.name}
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  to="/micro-saas"
                  className="text-cyan-400 hover:text-cyan-300 transition-colors text-sm font-medium"
                >
                  View All Micro SAAS →
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* 5G Services Section */}
        <div className="mt-12 pt-8 border-t border-gray-700">
          <div className="text-center mb-8">
            <h3 className="text-lg font-semibold mb-4 text-white flex items-center justify-center">
              <Globe className="w-5 h-5 mr-2 text-cyan-400" />
              5G Solutions
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-4">
              {fiveGServices.map((service) => (
                <Link
                  key={service.name}
                  to={service.path}
                  className="text-gray-300 hover:text-cyan-400 transition-colors text-sm text-center p-2 rounded hover:bg-slate-800"
                >
                  {service.name}
                </Link>
              ))}
            </div>
          </div>
        </div>

        {/* Social Links */}
        <div className="mt-12 pt-8 border-t border-gray-700">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex space-x-6 mb-4 md:mb-0">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-cyan-400 transition-colors text-2xl"
                  aria-label={social.name}
                >
                  {social.icon}
                </a>
              ))}
            </div>
            <div className="text-gray-400 text-sm">
              © {currentYear} Zion Tech Group. All rights reserved.
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;