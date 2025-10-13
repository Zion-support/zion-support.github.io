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
    { name: "AI Services", path: "/ai-services", icon: <Brain className="w-4 h-4" /> },
    { name: "IT Services", path: "/it-services", icon: <Shield className="w-4 h-4" /> },
    { name: "Micro SAAS", path: "/micro-saas", icon: <Zap className="w-4 h-4" /> },
    { name: "5G Solutions", path: "/5g-solutions", icon: <Globe className="w-4 h-4" /> },
    { name: "Cloud Services", path: "/cloud-services", icon: <Cloud className="w-4 h-4" /> },
    { name: "Cybersecurity", path: "/cybersecurity", icon: <Shield className="w-4 h-4" /> },
    { name: "Web Development", path: "/web-development", icon: <Code className="w-4 h-4" /> },
    { name: "Data Analytics", path: "/data-analytics", icon: <BarChart3 className="w-4 h-4" /> }
  ], []);

  const contactInfo = useMemo(() => [
    {
      icon: <Mail className="w-5 h-5" />,
      label: "Email",
      value: "kleber@ziontechgroup.com",
      href: "mailto:kleber@ziontechgroup.com"
    },
    {
      icon: <Phone className="w-5 h-5" />,
      label: "Phone",
      value: "+1 302 464 0950",
      href: "tel:+13024640950"
    },
    {
      icon: <MapPin className="w-5 h-5" />,
      label: "Address",
      value: "364 E Main St STE 1008\nMiddletown DE 19709",
      href: "https://maps.google.com/?q=364+E+Main+St+STE+1008+Middletown+DE+19709"
    }
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
      {/* Enhanced Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/5 via-purple-500/5 to-pink-500/5"></div>
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-cyan-400 to-transparent"></div>
      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-purple-400 to-transparent"></div>
      
      {/* Animated grid pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="h-full w-full" style={{
          backgroundImage: `
            linear-gradient(rgba(6, 182, 212, 0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(6, 182, 212, 0.1) 1px, transparent 1px)
          `,
          backgroundSize: '50px 50px'
        }}></div>
      </div>
      
      <div className="relative z-10">
        {/* Contact Information Banner */}
        <div className="bg-gradient-to-r from-cyan-900/30 to-purple-900/30 rounded-xl p-6 mb-12 border border-cyan-500/20">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {contactInfo.map((contact, index) => (
              <div key={index} className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-lg flex items-center justify-center">
                  {contact.icon}
                </div>
                <div>
                  <div className="text-sm text-gray-400">{contact.label}</div>
                  <a
                    href={contact.href}
                    className="text-white hover:text-cyan-400 transition-colors font-medium"
                  >
                    {contact.value.split('\n').map((line, i) => (
                      <div key={i}>{line}</div>
                    ))}
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8 mb-12">
          {/* Company Info */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center space-x-2 group">
              <div className="w-8 h-8 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300 relative overflow-hidden">
                <span className="text-white font-bold text-lg relative z-10">Z</span>
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-purple-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              <div>
                <h3 className="text-lg font-bold text-white group-hover:text-cyan-400 transition-colors duration-300">Zion Tech Group</h3>
                <p className="text-sm text-gray-400">Advanced AI & IT Solutions</p>
              </div>
            </div>

            {/* Services */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-white mb-4">Services</h3>
              <ul className="space-y-3">
                {services.map((service) => (
                  <li key={service.name}>
                    <Link
                      to={service.path}
                      className="group flex items-center text-gray-300 hover:text-cyan-400 transition-all duration-300 relative overflow-hidden rounded-lg px-2 py-1 -mx-2 -my-1"
                    >
                      <span className="mr-2 group-hover:scale-110 transition-transform duration-300 w-4 h-4">
                        {service.icon}
                      </span>
                      <span className="text-sm relative z-10">{service.name}</span>
                      <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg"></div>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Company */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-white mb-4">Company</h3>
              <ul className="space-y-3">
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

            {/* Support */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-white mb-4">Support</h3>
              <ul className="space-y-3">
                {supportLinks.map((link) => (
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

            {/* Legal */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-white mb-4">Legal</h3>
              <ul className="space-y-3">
                {legalLinks.map((link) => (
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
          </div>

          {/* AI Services */}
          <div>
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
                  to="/ai-quantum-optimizer"
                  className="text-gray-400 hover:text-cyan-400 transition-colors"
                >
                  AI Quantum Optimizer
                </Link>
              </li>
              <li>
                <Link
                  to="/ai-holographic-interface"
                  className="text-gray-400 hover:text-cyan-400 transition-colors"
                >
                  AI Holographic Interface
                </Link>
              </li>
              <li>
                <Link
                  to="/ai-emotional-intelligence-engine"
                  className="text-gray-400 hover:text-cyan-400 transition-colors"
                >
                  AI Emotional Intelligence
                </Link>
              </li>
              <li>
                <Link
                  to="/ai-business-intelligence-pro"
                  className="text-gray-400 hover:text-cyan-400 transition-colors"
                >
                  AI Business Intelligence Pro
                </Link>
              </li>
              <li>
                <Link
                  to="/ai-content-creation-studio"
                  className="text-gray-400 hover:text-cyan-400 transition-colors"
                >
                  AI Content Creation Studio
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
                  to="/quantum-cybersecurity-suite"
                  className="text-gray-400 hover:text-green-400 transition-colors"
                >
                  Quantum Cybersecurity Suite
                </Link>
              </li>
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
                  to="/custom-software"
                  className="text-gray-400 hover:text-green-400 transition-colors"
                >
                  Custom Software
                </Link>
              </li>
            </ul>
          </div>

          {/* Micro SAAS */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-purple-400">Micro SAAS</h4>
            <ul className="space-y-2">
              <li>
                <Link
                  to="/zion-ai-neural-interface"
                  className="text-gray-400 hover:text-purple-400 transition-colors"
                >
                  Zion AI Neural Interface
                </Link>
              </li>
              <li>
                <Link
                  to="/ai-voice-cloning-studio"
                  className="text-gray-400 hover:text-purple-400 transition-colors"
                >
                  AI Voice Cloning Studio
                </Link>
              </li>
              <li>
                <Link
                  to="/ai-quantum-financial-oracle"
                  className="text-gray-400 hover:text-purple-400 transition-colors"
                >
                  AI Quantum Financial Oracle
                </Link>
              </li>
              <li>
                <Link
                  to="/ai-space-mission-optimizer"
                  className="text-gray-400 hover:text-purple-400 transition-colors"
                >
                  AI Space Mission Optimizer
                </Link>
              </li>
              <li>
                <Link
                  to="/ai-business-intelligence-pro"
                  className="text-gray-400 hover:text-purple-400 transition-colors"
                >
                  AI Business Intelligence Pro
                </Link>
              </li>
              <li>
                <Link
                  to="/ai-content-creation-studio"
                  className="text-gray-400 hover:text-purple-400 transition-colors"
                >
                  AI Content Creation Studio
                </Link>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Company</h4>
            <ul className="space-y-2">
              <li>
                <Link
                  to="/about"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  to="/careers"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Careers
                </Link>
              </li>
              <li>
                <Link
                  to="/case-studies"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Case Studies
                </Link>
              </li>
              <li>
                <Link
                  to="/blog"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Blog
                </Link>
              </li>
            </ul>
          </div>

          {/* Support */}
          <div>
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
          <div>
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

Footer.displayName = "Footer";

export default Footer;