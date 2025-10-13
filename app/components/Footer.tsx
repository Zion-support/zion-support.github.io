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
  Package,
  Cpu,
  Network,
  Smartphone,
  Monitor,
  FileText,
  Heart,
  TrendingUp
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

  const mainServices = useMemo(() => [
    { name: "AI Services", path: "/ai-services", icon: <Brain className="w-4 h-4" /> },
    { name: "IT Services", path: "/it-services", icon: <Shield className="w-4 h-4" /> },
    { name: "Micro SAAS", path: "/micro-saas", icon: <Zap className="w-4 h-4" /> },
    { name: "5G Solutions", path: "/5g-solutions", icon: <Network className="w-4 h-4" /> },
  ], []);

  const aiServices = useMemo(() => [
    { name: "AI Analytics", path: "/ai-analytics" },
    { name: "AI Automation", path: "/ai-automation" },
    { name: "AI Content Generation", path: "/ai-content-generation" },
    { name: "AI Customer Service", path: "/ai-customer-service" },
    { name: "AI Data Analytics", path: "/ai-data-analytics" },
    { name: "AI Marketing", path: "/ai-marketing" },
    { name: "AI Predictive Analytics", path: "/ai-predictive-analytics" },
    { name: "AI Workflow Automation", path: "/ai-workflow-automation" },
  ], []);

  const itServices = useMemo(() => [
    { name: "Cloud Infrastructure", path: "/cloud-infrastructure" },
    { name: "Cybersecurity Solutions", path: "/cybersecurity-solutions" },
    { name: "Web Development", path: "/web-development" },
    { name: "Mobile Development", path: "/mobile-development" },
    { name: "Database Management", path: "/database-management" },
    { name: "Custom Software", path: "/custom-software" },
    { name: "Network Infrastructure", path: "/network-infrastructure" },
  ], []);

  const microSaasServices = useMemo(() => [
    { name: "Zion Analytics Pro", path: "/zion-analytics-pro" },
    { name: "Zion Security Shield", path: "/zion-security-shield" },
    { name: "Zion Cloud Vault", path: "/zion-cloud-vault" },
    { name: "Zion AI CRM Pro", path: "/zion-ai-crm-pro" },
    { name: "Zion AI Marketing Automation Pro", path: "/zion-ai-marketing-automation-pro" },
    { name: "Zion AI Project Manager Pro", path: "/zion-ai-project-manager-pro" },
  ], []);

  const fiveGServices = useMemo(() => [
    { name: "5G Data Analytics", path: "/5g-data-analytics" },
    { name: "5G Edge Computing", path: "/5g-edge-computing" },
    { name: "5G Implementation", path: "/5g-implementation" },
    { name: "5G Mobile Applications", path: "/5g-mobile-applications" },
    { name: "5G Network Infrastructure", path: "/5g-network-infrastructure" },
    { name: "5G Private Networks", path: "/5g-private-networks" },
    { name: "5G Smart City Solutions", path: "/5g-smart-city-solutions" },
    { name: "5G IoT Solutions", path: "/5g-iot-solutions" },
  ], []);

  const companyLinks = useMemo(() => [
    { name: "About Us", path: "/about" },
    { name: "Our Team", path: "/team" },
    { name: "Careers", path: "/careers" },
    { name: "Case Studies", path: "/case-studies" },
    { name: "Blog", path: "/blog" },
    { name: "Press", path: "/press" },
  ], []);

  const supportLinks = useMemo(() => [
    { name: "Contact Us", path: "/contact" },
    { name: "Support", path: "/support" },
    { name: "Documentation", path: "/docs" },
    { name: "API Reference", path: "/api" },
    { name: "Tutorials", path: "/tutorials" },
    { name: "FAQ", path: "/faq" },
  ], []);

  const legalLinks = useMemo(() => [
    { name: "Privacy Policy", path: "/privacy" },
    { name: "Terms of Service", path: "/terms" },
    { name: "Cookie Policy", path: "/cookies" },
    { name: "GDPR Compliance", path: "/gdpr" },
  ], []);

  return (
    <footer className="bg-slate-900/95 backdrop-blur-md border-t border-cyan-500/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Company Info */}
            <div className="lg:col-span-1">
              <div className="flex items-center space-x-2 mb-6">
                <div className="w-8 h-8 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-lg flex items-center justify-center">
                  <Brain className="w-5 h-5 text-white" />
                </div>
                <span className="text-xl font-bold text-white">Zion Tech Group</span>
              </div>
              <p className="text-gray-300 mb-6 max-w-sm">
                Leading provider of AI-powered solutions and cutting-edge IT services. 
                Transforming businesses through innovation and technology excellence.
              </p>
              <div className="flex space-x-4">
                {socialLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-cyan-400 transition-colors duration-300"
                    aria-label={link.name}
                  >
                    {link.icon}
                  </a>
                ))}
              </div>
            </div>

            {/* Main Services */}
            <div>
              <h3 className="text-lg font-semibold text-white mb-6">Our Services</h3>
              <ul className="space-y-3">
                {mainServices.map((service) => (
                  <li key={service.name}>
                    <Link
                      to={service.path}
                      className="flex items-center space-x-2 text-gray-300 hover:text-cyan-400 transition-colors duration-300"
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
              <h3 className="text-lg font-semibold text-white mb-6">AI Solutions</h3>
              <ul className="space-y-3">
                {aiServices.slice(0, 6).map((service) => (
                  <li key={service.name}>
                    <Link
                      to={service.path}
                      className="text-gray-300 hover:text-cyan-400 transition-colors duration-300"
                    >
                      {service.name}
                    </Link>
                  </li>
                ))}
                <li>
                  <Link
                    to="/ai-services"
                    className="text-cyan-400 hover:text-cyan-300 transition-colors duration-300 flex items-center space-x-1"
                  >
                    <span>View All AI Services</span>
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </li>
              </ul>
            </div>

            {/* IT Services */}
            <div>
              <h3 className="text-lg font-semibold text-white mb-6">IT Solutions</h3>
              <ul className="space-y-3">
                {itServices.slice(0, 6).map((service) => (
                  <li key={service.name}>
                    <Link
                      to={service.path}
                      className="text-gray-300 hover:text-cyan-400 transition-colors duration-300"
                    >
                      {service.name}
                    </Link>
                  </li>
                ))}
                <li>
                  <Link
                    to="/it-services"
                    className="text-cyan-400 hover:text-cyan-300 transition-colors duration-300 flex items-center space-x-1"
                  >
                    <span>View All IT Services</span>
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          {/* Additional Service Categories */}
          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Micro SAAS */}
            <div>
              <h3 className="text-lg font-semibold text-white mb-6">Micro SAAS</h3>
              <ul className="space-y-3">
                {microSaasServices.slice(0, 4).map((service) => (
                  <li key={service.name}>
                    <Link
                      to={service.path}
                      className="text-gray-300 hover:text-cyan-400 transition-colors duration-300"
                    >
                      {service.name}
                    </Link>
                  </li>
                ))}
                <li>
                  <Link
                    to="/micro-saas"
                    className="text-cyan-400 hover:text-cyan-300 transition-colors duration-300 flex items-center space-x-1"
                  >
                    <span>View All Micro SAAS</span>
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </li>
              </ul>
            </div>

            {/* 5G Solutions */}
            <div>
              <h3 className="text-lg font-semibold text-white mb-6">5G Solutions</h3>
              <ul className="space-y-3">
                {fiveGServices.slice(0, 4).map((service) => (
                  <li key={service.name}>
                    <Link
                      to={service.path}
                      className="text-gray-300 hover:text-cyan-400 transition-colors duration-300"
                    >
                      {service.name}
                    </Link>
                  </li>
                ))}
                <li>
                  <Link
                    to="/5g-solutions"
                    className="text-cyan-400 hover:text-cyan-300 transition-colors duration-300 flex items-center space-x-1"
                  >
                    <span>View All 5G Solutions</span>
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </li>
              </ul>
            </div>

            {/* Company & Support */}
            <div>
              <h3 className="text-lg font-semibold text-white mb-6">Company & Support</h3>
              <ul className="space-y-3">
                {companyLinks.map((link) => (
                  <li key={link.name}>
                    <Link
                      to={link.path}
                      className="text-gray-300 hover:text-cyan-400 transition-colors duration-300"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
                <li className="pt-2">
                  <h4 className="text-sm font-semibold text-white mb-2">Support</h4>
                  <ul className="space-y-2">
                    {supportLinks.slice(0, 3).map((link) => (
                      <li key={link.name}>
                        <Link
                          to={link.path}
                          className="text-gray-300 hover:text-cyan-400 transition-colors duration-300 text-sm"
                        >
                          {link.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Newsletter Signup */}
        <div className="py-8 border-t border-slate-700/50">
          <div className="max-w-4xl mx-auto text-center">
            <h3 className="text-2xl font-bold text-white mb-4">
              Stay Updated with Our Latest Innovations
            </h3>
            <p className="text-gray-300 mb-6">
              Get the latest insights on AI, technology trends, and industry updates delivered to your inbox.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email address"
                className="flex-1 px-4 py-3 bg-slate-800/50 border border-slate-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
              />
              <FuturisticButton
                variant="primary"
                size="md"
                className="px-6 py-3"
              >
                Subscribe
              </FuturisticButton>
            </div>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="py-6 border-t border-slate-700/50">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="flex flex-col md:flex-row items-center space-y-2 md:space-y-0 md:space-x-6">
              <p className="text-gray-400 text-sm">
                © {currentYear} Zion Tech Group. All rights reserved.
              </p>
              <div className="flex space-x-6">
                {legalLinks.map((link) => (
                  <Link
                    key={link.name}
                    to={link.path}
                    className="text-gray-400 hover:text-cyan-400 transition-colors duration-300 text-sm"
                  >
                    {link.name}
                  </Link>
                ))}
              </div>
            </div>
            <div className="flex items-center space-x-2 text-gray-400 text-sm">
              <Heart className="w-4 h-4 text-red-400" />
              <span>Made with passion for innovation</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
});

Footer.displayName = 'Footer';

export default Footer;