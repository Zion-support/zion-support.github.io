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
    { name: "AI Services", path: "/services", icon: <Brain className="w-4 h-4" /> },
    { name: "IT Services", path: "/services", icon: <Shield className="w-4 h-4" /> },
    { name: "Micro SAAS", path: "/micro-saas-services", icon: <Zap className="w-4 h-4" /> },
    { name: "5G Solutions", path: "/5g-solutions", icon: <Globe className="w-4 h-4" /> },
    { name: "Cloud Services", path: "/services", icon: <Cloud className="w-4 h-4" /> },
    { name: "Cybersecurity", path: "/services", icon: <Shield className="w-4 h-4" /> },
    { name: "Web Development", path: "/services", icon: <Code className="w-4 h-4" /> },
    { name: "Data Analytics", path: "/services", icon: <BarChart3 className="w-4 h-4" /> }
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
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8 mb-12">
          {/* Company Info */}
          <div className="lg:col-span-2 space-y-6">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">Z</span>
              </div>
              <span className="text-xl font-bold text-white">Zion Tech Group</span>
            </div>
            
            <p className="text-gray-300 text-sm leading-relaxed">
              Leading provider of AI-powered solutions, IT services, micro SAAS, and digital transformation for modern businesses. 
              Transform your operations with cutting-edge technology.
            </p>

            {/* Contact Info */}
            <div className="space-y-3">
              <div className="flex items-center text-gray-300 text-sm">
                <Mail className="w-4 h-4 mr-2 text-cyan-400" />
                <span>kleber@ziontechgroup.com</span>
              </div>
              <div className="flex items-center text-gray-300 text-sm">
                <Phone className="w-4 h-4 mr-2 text-cyan-400" />
                <span>+1 302 464 0950</span>
              </div>
              <div className="flex items-start text-gray-300 text-sm">
                <MapPin className="w-4 h-4 mr-2 text-cyan-400 mt-0.5" />
                <span>364 E Main St STE 1008<br />Middletown DE 19709</span>
              </div>
            </div>
          </div>

          {/* AI Services */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-cyan-400">AI Services</h4>
            <ul className="space-y-2">
              <li>
                <Link
                  to="/ai-business-intelligence"
                  className="text-gray-400 hover:text-cyan-400 transition-colors text-sm"
                >
                  AI Business Intelligence
                </Link>
              </li>
              <li>
                <Link
                  to="/ai-analytics"
                  className="text-gray-400 hover:text-cyan-400 transition-colors text-sm"
                >
                  AI Analytics
                </Link>
              </li>
              <li>
                <Link
                  to="/ai-content-generation"
                  className="text-gray-400 hover:text-cyan-400 transition-colors text-sm"
                >
                  AI Content Generation
                </Link>
              </li>
              <li>
                <Link
                  to="/ai-customer-support"
                  className="text-gray-400 hover:text-cyan-400 transition-colors text-sm"
                >
                  AI Customer Support
                </Link>
              </li>
              <li>
                <Link
                  to="/ai-cybersecurity"
                  className="text-gray-400 hover:text-cyan-400 transition-colors text-sm"
                >
                  AI Cybersecurity
                </Link>
              </li>
              <li>
                <Link
                  to="/ai-marketing-automation"
                  className="text-gray-400 hover:text-cyan-400 transition-colors text-sm"
                >
                  AI Marketing Automation
                </Link>
              </li>
            </ul>
          </div>

          {/* Micro SAAS */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-purple-400">Featured SAAS</h4>
            <ul className="space-y-2">
              <li>
                <Link
                  to="/zion-analytics-pro"
                  className="text-gray-400 hover:text-purple-400 transition-colors text-sm"
                >
                  Zion Analytics Pro
                </Link>
              </li>
              <li>
                <Link
                  to="/zion-security-shield"
                  className="text-gray-400 hover:text-purple-400 transition-colors text-sm"
                >
                  Zion Security Shield
                </Link>
              </li>
              <li>
                <Link
                  to="/zion-cloud-vault"
                  className="text-gray-400 hover:text-purple-400 transition-colors text-sm"
                >
                  Zion Cloud Vault
                </Link>
              </li>
              <li>
                <Link
                  to="/zion-ai-crm-pro"
                  className="text-gray-400 hover:text-purple-400 transition-colors text-sm"
                >
                  Zion AI CRM Pro
                </Link>
              </li>
              <li>
                <Link
                  to="/zion-ai-content-studio"
                  className="text-gray-400 hover:text-purple-400 transition-colors text-sm"
                >
                  Zion AI Content Studio
                </Link>
              </li>
              <li>
                <Link
                  to="/micro-saas-services"
                  className="text-gray-400 hover:text-purple-400 transition-colors text-sm"
                >
                  View All SAAS Solutions
                </Link>
              </li>
            </ul>
          </div>

          {/* IT Services */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-green-400">IT Services</h4>
            <ul className="space-y-2">
              <li>
                <Link
                  to="/cloud-migration"
                  className="text-gray-400 hover:text-green-400 transition-colors text-sm"
                >
                  Cloud Migration
                </Link>
              </li>
              <li>
                <Link
                  to="/devops-services"
                  className="text-gray-400 hover:text-green-400 transition-colors text-sm"
                >
                  DevOps Services
                </Link>
              </li>
              <li>
                <Link
                  to="/web-development"
                  className="text-gray-400 hover:text-green-400 transition-colors text-sm"
                >
                  Web Development
                </Link>
              </li>
              <li>
                <Link
                  to="/network-security"
                  className="text-gray-400 hover:text-green-400 transition-colors text-sm"
                >
                  Network Security
                </Link>
              </li>
              <li>
                <Link
                  to="/it-consulting"
                  className="text-gray-400 hover:text-green-400 transition-colors text-sm"
                >
                  IT Consulting
                </Link>
              </li>
              <li>
                <Link
                  to="/services"
                  className="text-gray-400 hover:text-green-400 transition-colors text-sm"
                >
                  View All IT Services
                </Link>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-white">Company</h4>
            <ul className="space-y-2">
              <li>
                <Link
                  to="/about"
                  className="text-gray-400 hover:text-white transition-colors text-sm"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  to="/blog"
                  className="text-gray-400 hover:text-white transition-colors text-sm"
                >
                  Blog
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="text-gray-400 hover:text-white transition-colors text-sm"
                >
                  Contact
                </Link>
              </li>
              <li>
                <Link
                  to="/privacy"
                  className="text-gray-400 hover:text-white transition-colors text-sm"
                >
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link
                  to="/terms"
                  className="text-gray-400 hover:text-white transition-colors text-sm"
                >
                  Terms of Service
                </Link>
              </li>
            </ul>
          </div>
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
    </footer>
  );
});

Footer.displayName = "Footer";

export default Footer;