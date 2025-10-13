import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Brain, 
  Shield, 
  Zap, 
  Globe, 
  Mail, 
  Phone, 
  MapPin, 
  ArrowRight,
  Star,
  Users,
  Award,
  Clock,
  CheckCircle,
  DollarSign,
  Play,
  Target,
  BarChart3,
  Cloud,
  Sparkles,
  Settings,
  HelpCircle,
  ExternalLink
} from 'lucide-react';

const Footer = () => {
  const navigationLinks = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "AI Services", path: "/ai-services" },
    { name: "IT Services", path: "/services" },
    { name: "Micro SAAS", path: "/micro-saas" },
    { name: "5G Solutions", path: "/5g-solutions" },
    { name: "Contact", path: "/contact" },
    { name: "Demo", path: "/demo" },
    { name: "Consultation", path: "/consultation" },
    { name: "Support", path: "/support" }
  ];

  const aiServices = [
    { name: "AI Analytics Pro", path: "/ai-analytics-dashboard-pro" },
    { name: "AI Business Intelligence", path: "/ai-business-intelligence-pro" },
    { name: "AI Content Generation", path: "/ai-content-generation-pro" },
    { name: "AI Video Generation", path: "/ai-video-generation-pro" },
    { name: "AI Customer Support", path: "/ai-customer-support-chatbot" },
    { name: "AI Cybersecurity Suite", path: "/ai-cybersecurity-suite-pro" },
    { name: "AI Marketing Automation", path: "/ai-marketing-automation-pro" },
    { name: "AI CRM Pro", path: "/ai-crm-pro" },
    { name: "AI Voice Assistant", path: "/ai-voice-assistant-pro" },
    { name: "AI Code Assistant", path: "/ai-code-assistant-pro" }
  ];

  const itServices = [
    { name: "Cloud Infrastructure", path: "/cloud-infrastructure-pro" },
    { name: "Cloud Migration", path: "/cloud-migration-pro" },
    { name: "Cybersecurity Suite", path: "/cybersecurity-suite-pro" },
    { name: "Network Security", path: "/network-security-pro" },
    { name: "Custom Software Development", path: "/custom-software-development" },
    { name: "Web Development", path: "/web-development-pro" },
    { name: "Mobile App Development", path: "/mobile-app-development" },
    { name: "DevOps Solutions", path: "/devops-solutions-pro" },
    { name: "IT Consulting", path: "/it-consulting-pro" },
    { name: "Digital Transformation", path: "/digital-transformation" }
  ];

  const microSaasServices = [
    { name: "Zion Analytics Pro", path: "/zion-ai-analytics-pro" },
    { name: "Zion Security Shield", path: "/zion-security-shield" },
    { name: "Zion Cloud Vault", path: "/zion-cloud-vault" },
    { name: "Zion AI CRM Pro", path: "/zion-ai-crm-pro" },
    { name: "Zion AI Marketing Automation", path: "/zion-ai-marketing-automation" },
    { name: "Zion AI Video Generator", path: "/zion-ai-video-generator" },
    { name: "Zion AI Invoice Generator", path: "/zion-ai-invoice-generator" },
    { name: "Zion AI Customer Insights", path: "/zion-ai-customer-insights" },
    { name: "Zion Smart Inventory Optimizer", path: "/zion-smart-inventory-optimizer" },
    { name: "Zion AI Voice Assistant Pro", path: "/zion-ai-voice-assistant-pro" }
  ];

  const fiveGServices = [
    { name: "5G Data Analytics", path: "/5g-data-analytics" },
    { name: "5G Edge Computing", path: "/5g-edge-computing" },
    { name: "5G Implementation", path: "/5g-implementation" },
    { name: "5G Mobile Applications", path: "/5g-mobile-applications" },
    { name: "5G Network Infrastructure", path: "/5g-network-infrastructure" },
    { name: "5G Private Networks", path: "/5g-private-networks" },
    { name: "5G Smart City Solutions", path: "/5g-smart-city-solutions" },
    { name: "5G IoT Solutions", path: "/5g-iot-solutions" }
  ];

  const companyLinks = [
    { name: "About Us", path: "/about" },
    { name: "Our Team", path: "/team" },
    { name: "Careers", path: "/careers" },
    { name: "Case Studies", path: "/case-studies" },
    { name: "Blog", path: "/blog" },
    { name: "News", path: "/news" },
    { name: "Press", path: "/press" },
    { name: "Partners", path: "/partners" }
  ];

  const supportLinks = [
    { name: "Help Center", path: "/support" },
    { name: "Documentation", path: "/docs" },
    { name: "API Reference", path: "/api-docs" },
    { name: "Tutorials", path: "/tutorials" },
    { name: "Community", path: "/community" },
    { name: "Status", path: "/status" },
    { name: "Contact Support", path: "/contact" }
  ];

  const legalLinks = [
    { name: "Privacy Policy", path: "/privacy" },
    { name: "Terms of Service", path: "/terms" },
    { name: "Cookie Policy", path: "/cookies" },
    { name: "GDPR Compliance", path: "/gdpr" },
    { name: "Security", path: "/security" },
    { name: "Compliance", path: "/compliance" }
  ];

  const socialLinks = [
    { name: "LinkedIn", href: "https://linkedin.com/company/ziontechgroup", icon: "linkedin" },
    { name: "Twitter", href: "https://twitter.com/ziontechgroup", icon: "twitter" },
    { name: "GitHub", href: "https://github.com/ziontechgroup", icon: "github" },
    { name: "YouTube", href: "https://youtube.com/ziontechgroup", icon: "youtube" }
  ];

  const contactInfo = {
    phone: "+1 302 464 0950",
    email: "kleber@ziontechgroup.com",
    address: "364 E Main St STE 1008, Middletown DE 19709"
  };

  return (
    <footer className="bg-slate-900/95 backdrop-blur-sm border-t border-cyan-500/20 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/5 via-purple-500/5 to-pink-500/5"></div>
      <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_50%,rgba(120,119,198,0.1),transparent_50%)]"></div>
      
      <div className="relative z-10">
        {/* Main Footer Content */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Company Info */}
            <div className="lg:col-span-1">
              <div className="flex items-center space-x-2 mb-6">
                <div className="w-8 h-8 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-lg flex items-center justify-center">
                  <Brain className="w-5 h-5 text-white" />
                </div>
                <span className="text-xl font-bold text-white">Zion Tech Group</span>
              </div>
              <p className="text-gray-300 mb-6 leading-relaxed">
                Leading provider of AI-powered solutions, IT services, and digital transformation 
                for modern businesses. Transform your operations with cutting-edge technology.
              </p>
              
              {/* Contact Info */}
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <Phone className="w-4 h-4 text-cyan-400" />
                  <span className="text-gray-300 text-sm">{contactInfo.phone}</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Mail className="w-4 h-4 text-cyan-400" />
                  <span className="text-gray-300 text-sm">{contactInfo.email}</span>
                </div>
                <div className="flex items-start space-x-3">
                  <MapPin className="w-4 h-4 text-cyan-400 mt-0.5" />
                  <span className="text-gray-300 text-sm">{contactInfo.address}</span>
                </div>
              </div>
            </div>

            {/* AI Services */}
            <div>
              <h3 className="text-white font-semibold mb-6 flex items-center">
                <Brain className="w-5 h-5 text-cyan-400 mr-2" />
                AI Services
              </h3>
              <ul className="space-y-3">
                {aiServices.map((service, index) => (
                  <li key={index}>
                    <Link
                      to={service.path}
                      className="text-gray-300 hover:text-cyan-400 transition-colors duration-300 text-sm flex items-center group"
                    >
                      <ArrowRight className="w-3 h-3 mr-2 opacity-0 group-hover:opacity-100 transition-opacity" />
                      {service.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* IT Services */}
            <div>
              <h3 className="text-white font-semibold mb-6 flex items-center">
                <Shield className="w-5 h-5 text-cyan-400 mr-2" />
                IT Services
              </h3>
              <ul className="space-y-3">
                {itServices.map((service, index) => (
                  <li key={index}>
                    <Link
                      to={service.path}
                      className="text-gray-300 hover:text-cyan-400 transition-colors duration-300 text-sm flex items-center group"
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
              <h3 className="text-white font-semibold mb-6 flex items-center">
                <Zap className="w-5 h-5 text-cyan-400 mr-2" />
                Micro SAAS
              </h3>
              <ul className="space-y-3">
                {microSaasServices.map((service, index) => (
                  <li key={index}>
                    <Link
                      to={service.path}
                      className="text-gray-300 hover:text-cyan-400 transition-colors duration-300 text-sm flex items-center group"
                    >
                      <ArrowRight className="w-3 h-3 mr-2 opacity-0 group-hover:opacity-100 transition-opacity" />
                      {service.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Additional Services Row */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12 pt-8 border-t border-cyan-500/20">
            {/* 5G Solutions */}
            <div>
              <h3 className="text-white font-semibold mb-6 flex items-center">
                <Globe className="w-5 h-5 text-cyan-400 mr-2" />
                5G Solutions
              </h3>
              <ul className="space-y-3">
                {fiveGServices.map((service, index) => (
                  <li key={index}>
                    <Link
                      to={service.path}
                      className="text-gray-300 hover:text-cyan-400 transition-colors duration-300 text-sm flex items-center group"
                    >
                      <ArrowRight className="w-3 h-3 mr-2 opacity-0 group-hover:opacity-100 transition-opacity" />
                      {service.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Company */}
            <div>
              <h3 className="text-white font-semibold mb-6 flex items-center">
                <Users className="w-5 h-5 text-cyan-400 mr-2" />
                Company
              </h3>
              <ul className="space-y-3">
                {companyLinks.map((link, index) => (
                  <li key={index}>
                    <Link
                      to={link.path}
                      className="text-gray-300 hover:text-cyan-400 transition-colors duration-300 text-sm flex items-center group"
                    >
                      <ArrowRight className="w-3 h-3 mr-2 opacity-0 group-hover:opacity-100 transition-opacity" />
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Support */}
            <div>
              <h3 className="text-white font-semibold mb-6 flex items-center">
                <HelpCircle className="w-5 h-5 text-cyan-400 mr-2" />
                Support
              </h3>
              <ul className="space-y-3">
                {supportLinks.map((link, index) => (
                  <li key={index}>
                    <Link
                      to={link.path}
                      className="text-gray-300 hover:text-cyan-400 transition-colors duration-300 text-sm flex items-center group"
                    >
                      <ArrowRight className="w-3 h-3 mr-2 opacity-0 group-hover:opacity-100 transition-opacity" />
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Newsletter Signup */}
          <div className="mt-12 pt-8 border-t border-cyan-500/20">
            <div className="max-w-2xl mx-auto text-center">
              <h3 className="text-2xl font-bold text-white mb-4">
                Stay Updated with Our Latest Solutions
              </h3>
              <p className="text-gray-300 mb-6">
                Get the latest updates on our AI services, IT solutions, and technology insights.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                />
                <button className="px-6 py-3 bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-semibold rounded-lg hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center">
                  Subscribe
                  <ArrowRight className="w-4 h-4 ml-2" />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="border-t border-cyan-500/20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <div className="flex flex-col md:flex-row items-center space-y-2 md:space-y-0 md:space-x-6">
                <p className="text-gray-400 text-sm">
                  © 2024 Zion Tech Group. All rights reserved.
                </p>
                <div className="flex space-x-6">
                  {legalLinks.map((link, index) => (
                    <Link
                      key={index}
                      to={link.path}
                      className="text-gray-400 hover:text-cyan-400 transition-colors duration-300 text-sm"
                    >
                      {link.name}
                    </Link>
                  ))}
                </div>
              </div>
              
              <div className="flex items-center space-x-4 mt-4 md:mt-0">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-cyan-400 transition-colors duration-300"
                    aria-label={social.name}
                  >
                    <ExternalLink className="w-5 h-5" />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;