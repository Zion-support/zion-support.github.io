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
  Star
} from "lucide-react";
import FuturisticButton from "./FuturisticButton";

const Footer = React.memo(() => {
  const currentYear = new Date().getFullYear();

  const socialLinks = useMemo(() => [
    { name: "LinkedIn", href: "https://linkedin.com/company/ziontechgroup", icon: Linkedin },
    { name: "Twitter", href: "https://twitter.com/ziontechgroup", icon: Twitter },
    { name: "GitHub", href: "https://github.com/ziontechgroup", icon: Github },
  ], []);

  const services = useMemo(() => [
    { name: "AI Services", path: "/ai-services" },
    { name: "IT Solutions", path: "/services" },
    { name: "Micro SAAS", path: "/micro-saas" },
    { name: "5G Solutions", path: "/5g-solutions" },
    { name: "Cloud Infrastructure", path: "/cloud-infrastructure" },
    { name: "Cybersecurity", path: "/cybersecurity-solutions" },
  ], []);

  const companyLinks = useMemo(() => [
    { name: "About Us", path: "/about" },
    { name: "Our Team", path: "/team" },
    { name: "Careers", path: "/careers" },
    { name: "Case Studies", path: "/case-studies" },
    { name: "Blog", path: "/blog" },
    { name: "Contact", path: "/contact" },
  ], []);

  const resources = useMemo(() => [
    { name: "Documentation", path: "/docs" },
    { name: "API Reference", path: "/api" },
    { name: "Support Center", path: "/support" },
    { name: "Community", path: "/community" },
    { name: "Status", path: "/status" },
    { name: "Changelog", path: "/changelog" },
  ], []);

  const legalLinks = useMemo(() => [
    { name: "Privacy Policy", path: "/privacy" },
    { name: "Terms of Service", path: "/terms" },
    { name: "Cookie Policy", path: "/cookies" },
    { name: "GDPR", path: "/gdpr" },
    { name: "Security", path: "/security" },
    { name: "Compliance", path: "/compliance" },
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
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mb-12">
            {/* Company Info */}
            <div className="lg:col-span-2 space-y-6">
              <h3 className="text-2xl font-bold text-white">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">
                  Zion Tech Group
                </span>
              </h3>
              <p className="text-gray-300 text-sm leading-relaxed max-w-md">
                Leading provider of AI-powered solutions, IT services, micro SAAS, and digital transformation for modern businesses. Transform your operations with cutting-edge technology.
              </p>
              <div className="flex space-x-4">
                <div className="w-10 h-10 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-lg flex items-center justify-center">
                  <span className="text-white text-sm font-bold">Z</span>
                </div>
                <div className="flex flex-col justify-center">
                  <span className="text-white text-sm font-semibold">Trusted by 10,000+</span>
                  <span className="text-gray-400 text-xs">Businesses Worldwide</span>
                </div>
              </div>
            </div>

            {/* AI Services */}
            <div className="space-y-4">
              <h4 className="text-lg font-semibold text-white">AI Services</h4>
              <div className="space-y-3">
                <Link to="/ai-business-intelligence" className="block text-gray-300 hover:text-cyan-400 transition-colors duration-300 text-sm">
                  Business Intelligence
                </Link>
                <Link to="/ai-customer-support" className="block text-gray-300 hover:text-cyan-400 transition-colors duration-300 text-sm">
                  Customer Support
                </Link>
                <Link to="/ai-content-generation" className="block text-gray-300 hover:text-cyan-400 transition-colors duration-300 text-sm">
                  Content Generation
                </Link>
                <Link to="/ai-cybersecurity" className="block text-gray-300 hover:text-cyan-400 transition-colors duration-300 text-sm">
                  Cybersecurity
                </Link>
                <Link to="/ai-voice-assistant-pro" className="block text-gray-300 hover:text-cyan-400 transition-colors duration-300 text-sm">
                  Voice AI Assistant
                </Link>
                <Link to="/ai-image-recognition-pro" className="block text-gray-300 hover:text-cyan-400 transition-colors duration-300 text-sm">
                  Image Recognition
                </Link>
                <Link to="/ai-fraud-detection-pro" className="block text-gray-300 hover:text-cyan-400 transition-colors duration-300 text-sm">
                  Fraud Detection
                </Link>
                <Link to="/ai-services" className="block text-cyan-400 hover:text-cyan-300 transition-colors duration-300 text-sm font-medium">
                  View All AI Services →
                </Link>
              </div>
            </div>

            {/* IT Services */}
            <div className="space-y-4">
              <h4 className="text-lg font-semibold text-white">IT Services</h4>
              <div className="space-y-2">
                <Link to="/cloud-infrastructure" className="block text-gray-300 hover:text-cyan-400 transition-colors duration-300 text-sm">
                  Cloud Infrastructure
                </Link>
                <Link to="/blockchain-development" className="block text-gray-300 hover:text-cyan-400 transition-colors duration-300 text-sm">
                  Blockchain Development
                </Link>
                <Link to="/iot-solutions" className="block text-gray-300 hover:text-cyan-400 transition-colors duration-300 text-sm">
                  IoT Solutions
                </Link>
                <Link to="/ar-vr-development" className="block text-gray-300 hover:text-cyan-400 transition-colors duration-300 text-sm">
                  AR/VR Development
                </Link>
                <Link to="/devops-solutions" className="block text-gray-300 hover:text-cyan-400 transition-colors duration-300 text-sm">
                  DevOps Solutions
                </Link>
                <Link to="/mobile-development" className="block text-gray-300 hover:text-cyan-400 transition-colors duration-300 text-sm">
                  Mobile Development
                </Link>
                <Link to="/services" className="block text-cyan-400 hover:text-cyan-300 transition-colors duration-300 text-sm font-medium">
                  View All IT Services →
                </Link>
              </div>
            </div>

            {/* Micro SAAS */}
            <div className="space-y-4">
              <h4 className="text-lg font-semibold text-white">Micro SAAS</h4>
              <div className="space-y-3">
                <Link to="/zion-analytics-pro" className="block text-gray-300 hover:text-cyan-400 transition-colors duration-300 text-sm">
                  Zion Analytics Pro
                </Link>
                <Link to="/zion-security-shield" className="block text-gray-300 hover:text-cyan-400 transition-colors duration-300 text-sm">
                  Zion Security Shield
                </Link>
                <Link to="/zion-inventory-manager-pro" className="block text-gray-300 hover:text-cyan-400 transition-colors duration-300 text-sm">
                  Inventory Manager
                </Link>
                <Link to="/zion-hr-management-suite" className="block text-gray-300 hover:text-cyan-400 transition-colors duration-300 text-sm">
                  HR Management Suite
                </Link>
                <Link to="/zion-ecommerce-optimizer" className="block text-gray-300 hover:text-cyan-400 transition-colors duration-300 text-sm">
                  E-commerce Optimizer
                </Link>
                <Link to="/zion-ai-chatbot-builder" className="block text-gray-300 hover:text-cyan-400 transition-colors duration-300 text-sm">
                  AI Chatbot Builder
                </Link>
                <Link to="/micro-saas" className="block text-cyan-400 hover:text-cyan-300 transition-colors duration-300 text-sm font-medium">
                  View All Micro SAAS →
                </Link>
              </div>
            </div>

            {/* Company & Resources */}
            <div className="space-y-4">
              <h4 className="text-lg font-semibold text-white">Company</h4>
              <div className="space-y-3">
                <Link to="/about" className="block text-gray-300 hover:text-cyan-400 transition-colors duration-300 text-sm">
                  About Us
                </Link>
                <Link to="/team" className="block text-gray-300 hover:text-cyan-400 transition-colors duration-300 text-sm">
                  Our Team
                </Link>
                <Link to="/careers" className="block text-gray-300 hover:text-cyan-400 transition-colors duration-300 text-sm">
                  Careers
                </Link>
                <Link to="/case-studies" className="block text-gray-300 hover:text-cyan-400 transition-colors duration-300 text-sm">
                  Case Studies
                </Link>
                <Link to="/blog" className="block text-gray-300 hover:text-cyan-400 transition-colors duration-300 text-sm">
                  Blog
                </Link>
                <Link to="/contact" className="block text-cyan-400 hover:text-cyan-300 transition-colors duration-300 text-sm font-medium">
                  Contact Us →
                </Link>
              </div>
            </div>
          </div>

          {/* Contact Information */}
          <div className="border-t border-white/10 pt-8 mb-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-lg flex items-center justify-center">
                  <span className="text-white text-sm">@</span>
                </div>
                <div>
                  <p className="text-white text-sm font-medium">Email</p>
                  <p className="text-gray-300 text-sm">kleber@ziontechgroup.com</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-lg flex items-center justify-center">
                  <span className="text-white text-sm">📞</span>
                </div>
                <div>
                  <p className="text-white text-sm font-medium">Phone</p>
                  <p className="text-gray-300 text-sm">+1 302 464 0950</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-8 h-8 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-lg flex items-center justify-center mt-0.5">
                  <span className="text-white text-sm">📍</span>
                </div>
                <div>
                  <p className="text-white text-sm font-medium">Address</p>
                  <p className="text-gray-300 text-sm">364 E Main St STE 1008<br />Middletown DE 19709</p>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="border-t border-white/10 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
              <p className="text-gray-300 text-sm">
                © 2024 Zion Tech Group. All rights reserved.
              </p>
              <div className="flex flex-wrap gap-6">
                <Link to="/privacy" className="text-gray-300 hover:text-cyan-400 transition-colors duration-300 text-sm">
                  Privacy Policy
                </Link>
                <Link to="/terms" className="text-gray-300 hover:text-cyan-400 transition-colors duration-300 text-sm">
                  Terms of Service
                </Link>
                <Link to="/cookies" className="text-gray-300 hover:text-cyan-400 transition-colors duration-300 text-sm">
                  Cookie Policy
                </Link>
                <Link to="/sitemap" className="text-gray-300 hover:text-cyan-400 transition-colors duration-300 text-sm">
                  Sitemap
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