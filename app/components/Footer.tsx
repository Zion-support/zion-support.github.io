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
    { name: "IT Services", path: "/services", icon: <Shield className="w-4 h-4" /> },
    { name: "Micro SAAS", path: "/micro-saas", icon: <Zap className="w-4 h-4" /> },
    { name: "5G Solutions", path: "/5g-solutions", icon: <Globe className="w-4 h-4" /> },
    { name: "Cloud Services", path: "/cloud-infrastructure", icon: <Cloud className="w-4 h-4" /> },
    { name: "Cybersecurity", path: "/cybersecurity-solutions", icon: <Shield className="w-4 h-4" /> },
    { name: "Web Development", path: "/web-development", icon: <Code className="w-4 h-4" /> },
    { name: "Data Analytics", path: "/ai-data-analytics", icon: <BarChart3 className="w-4 h-4" /> }
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
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-7 gap-8 mb-12">
          {/* Company Info */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">Z</span>
              </div>
              <span className="text-xl font-bold bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                Zion Tech Group
              </span>
            </div>
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
            <h4 className="text-lg font-semibold mb-4 text-cyan-400">AI Services</h4>
            <ul className="space-y-2">
              <li>
                <Link
                  to="/ai-services"
                  className="text-gray-400 hover:text-cyan-400 transition-colors"
                >
                  AI Services Overview
                </Link>
              </li>
              <li>
                <Link
                  to="/ai-analytics"
                  className="text-gray-400 hover:text-cyan-400 transition-colors"
                >
                  AI Analytics
                </Link>
              </li>
              <li>
                <Link
                  to="/ai-automation"
                  className="text-gray-400 hover:text-cyan-400 transition-colors"
                >
                  AI Automation
                </Link>
              </li>
              <li>
                <Link
                  to="/ai-content-generation"
                  className="text-gray-400 hover:text-cyan-400 transition-colors"
                >
                  AI Content Generation
                </Link>
              </li>
              <li>
                <Link
                  to="/ai-customer-service"
                  className="text-gray-400 hover:text-cyan-400 transition-colors"
                >
                  AI Customer Service
                </Link>
              </li>
              <li>
                <Link
                  to="/ai-cybersecurity"
                  className="text-gray-400 hover:text-cyan-400 transition-colors"
                >
                  AI Cybersecurity
                </Link>
              </li>
            </ul>
          </div>

          {/* IT Services */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold mb-4 text-green-400">IT Services</h4>
            <ul className="space-y-2">
              <li>
                <Link
                  to="/cloud-infrastructure"
                  className="text-gray-400 hover:text-green-400 transition-colors"
                >
                  Cloud Infrastructure
                </Link>
              </li>
              <li>
                <Link
                  to="/cybersecurity-solutions"
                  className="text-gray-400 hover:text-green-400 transition-colors"
                >
                  Cybersecurity Solutions
                </Link>
              </li>
              <li>
                <Link
                  to="/web-development"
                  className="text-gray-400 hover:text-green-400 transition-colors"
                >
                  Web Development
                </Link>
              </li>
              <li>
                <Link
                  to="/mobile-development"
                  className="text-gray-400 hover:text-green-400 transition-colors"
                >
                  Mobile Development
                </Link>
              </li>
              <li>
                <Link
                  to="/database-management"
                  className="text-gray-400 hover:text-green-400 transition-colors"
                >
                  Database Management
                </Link>
              </li>
              <li>
                <Link
                  to="/custom-software"
                  className="text-gray-400 hover:text-green-400 transition-colors"
                >
                  Custom Software
                </Link>
              </li>
            </ul>
          </div>

          {/* Micro SAAS */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold mb-4 text-purple-400">Micro SAAS</h4>
            <ul className="space-y-2">
              <li>
                <Link
                  to="/zion-analytics-pro"
                  className="text-gray-400 hover:text-purple-400 transition-colors"
                >
                  Zion Analytics Pro
                </Link>
              </li>
              <li>
                <Link
                  to="/zion-security-shield"
                  className="text-gray-400 hover:text-purple-400 transition-colors"
                >
                  Zion Security Shield
                </Link>
              </li>
              <li>
                <Link
                  to="/zion-cloud-vault"
                  className="text-gray-400 hover:text-purple-400 transition-colors"
                >
                  Zion Cloud Vault
                </Link>
              </li>
              <li>
                <Link
                  to="/zion-content-studio"
                  className="text-gray-400 hover:text-purple-400 transition-colors"
                >
                  Zion Content Studio
                </Link>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold mb-4">Company</h4>
            <ul className="space-y-2">
              <li><Link to="/about" className="text-gray-300 hover:text-white transition-colors">About</Link></li>
              <li><Link to="/contact" className="text-gray-300 hover:text-white transition-colors">Contact</Link></li>
              <li><Link to="/blog" className="text-gray-300 hover:text-white transition-colors">Blog</Link></li>
              <li><Link to="/demo" className="text-gray-300 hover:text-white transition-colors">Demo</Link></li>
            </ul>
          </div>

          {/* Support */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold mb-4">Support</h4>
            <ul className="space-y-2">
              <li>
                <Link
                  to="/contact"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Contact
                </Link>
              </li>
              <li>
                <Link
                  to="/support"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Help Center
                </Link>
              </li>
              <li>
                <Link
                  to="/pricing"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Pricing
                </Link>
              </li>
              <li>
                <Link
                  to="/consultation"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Consultation
                </Link>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold mb-4">Resources</h4>
            <ul className="space-y-2">
              <li>
                <Link
                  to="/blog"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Blog
                </Link>
              </li>
              <li>
                <Link
                  to="/tutorials"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Tutorials
                </Link>
              </li>
              <li>
                <Link
                  to="/demo"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Demo
                </Link>
              </li>
              <li>
                <Link
                  to="/sitemap"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Sitemap
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

export default Footer;
