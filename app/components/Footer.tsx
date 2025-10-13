import React, { useMemo } from "react";
import { Link } from "react-router-dom";
import { Linkedin, Twitter, Github, Mail, Phone, MapPin, ArrowRight, Star, Shield, Zap, Brain, Globe } from "lucide-react";

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
    { name: "AI Analytics", path: "/ai-analytics", description: "Business intelligence with AI" },
    { name: "AI Automation", path: "/ai-automation", description: "Process automation solutions" },
    { name: "AI Content Generation", path: "/ai-content-generation", description: "Automated content creation" },
    { name: "AI Customer Service", path: "/ai-customer-service", description: "Intelligent customer support" },
    { name: "AI Marketing", path: "/ai-marketing", description: "AI-powered marketing tools" },
    { name: "AI Cybersecurity", path: "/ai-cybersecurity", description: "AI-driven security solutions" }
  ], []);

  const itServices = useMemo(() => [
    { name: "Cloud Infrastructure", path: "/cloud-infrastructure", description: "Scalable cloud solutions" },
    { name: "Cybersecurity Solutions", path: "/cybersecurity-solutions", description: "Comprehensive security" },
    { name: "Web Development", path: "/web-development", description: "Modern web applications" },
    { name: "Mobile Development", path: "/mobile-development", description: "iOS and Android apps" },
    { name: "Database Management", path: "/database-management", description: "Data management solutions" },
    { name: "Network Infrastructure", path: "/network-infrastructure", description: "Network design & implementation" }
  ], []);

  const solutions = useMemo(() => [
    { name: "AI Solutions", path: "/ai-services", description: "Artificial Intelligence services" },
    { name: "5G Solutions", path: "/5g-solutions", description: "Next-generation connectivity" },
    { name: "Data Analytics", path: "/data-analytics", description: "Business intelligence" },
    { name: "IoT Solutions", path: "/iot-solutions", description: "Internet of Things" },
    { name: "DevOps Solutions", path: "/devops-solutions", description: "Development & operations" },
    { name: "Machine Learning", path: "/machine-learning", description: "ML model development" }
  ], []);

  const microSaas = useMemo(() => [
    { name: "Zion Analytics Pro", path: "/zion-analytics-pro", featured: true },
    { name: "Zion Security Shield", path: "/zion-security-shield", featured: true },
    { name: "Zion Cloud Vault", path: "/zion-cloud-vault", featured: true },
    { name: "Zion Content Studio", path: "/zion-content-studio" },
    { name: "Zion Data Sync", path: "/zion-data-sync" },
    { name: "Zion Lead Magnet", path: "/zion-lead-magnet" }
  ], []);

  const company = useMemo(() => [
    { name: "About Us", path: "/about" },
    { name: "Careers", path: "/careers" },
    { name: "Case Studies", path: "/case-studies" },
    { name: "Blog", path: "/blog" },
    { name: "Press", path: "/press" },
    { name: "Partners", path: "/partners" }
  ], []);

  const resources = useMemo(() => [
    { name: "Tutorials", path: "/tutorials" },
    { name: "Demo", path: "/demo" },
    { name: "Support", path: "/support" },
    { name: "Documentation", path: "/documentation" },
    { name: "API Reference", path: "/api" },
    { name: "Sitemap", path: "/sitemap" }
  ], []);

  const legal = useMemo(() => [
    { name: "Privacy Policy", path: "/privacy" },
    { name: "Terms of Service", path: "/terms" },
    { name: "Cookie Policy", path: "/cookies" },
    { name: "GDPR Compliance", path: "/gdpr" },
    { name: "Security", path: "/security" }
  ], []);

  return (
    <footer className="bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8 mb-12">
          {/* Company Info */}
          <div className="lg:col-span-2 space-y-6">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-xl flex items-center justify-center">
                <span className="text-white font-bold text-xl">Z</span>
              </div>
              <div>
                <span className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                  Zion Tech Group
                </span>
                <p className="text-sm text-gray-400">Advanced AI & IT Solutions</p>
              </div>
            </div>
            <p className="text-gray-300 text-sm leading-relaxed max-w-md">
              Leading provider of AI-powered solutions, 5G implementation, and enterprise IT services. 
              We help businesses transform with cutting-edge technology and innovative solutions.
            </p>
            
            {/* Contact Info */}
            <div className="space-y-3">
              <div className="flex items-center space-x-3 text-sm text-gray-300">
                <Mail className="w-4 h-4 text-cyan-400" />
                <span>kleber@ziontechgroup.com</span>
              </div>
              <div className="flex items-center space-x-3 text-sm text-gray-300">
                <Phone className="w-4 h-4 text-cyan-400" />
                <span>+1 302 464 0950</span>
              </div>
              <div className="flex items-start space-x-3 text-sm text-gray-300">
                <MapPin className="w-4 h-4 text-cyan-400 mt-0.5" />
                <span>364 E Main St STE 1008<br />Middletown DE 19709</span>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex space-x-4">
              {socialLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-white/10 hover:bg-cyan-500/20 rounded-lg flex items-center justify-center transition-all duration-300 hover:scale-110"
                  aria-label={link.name}
                >
                  {link.icon}
                </a>
              ))}
            </div>
          </div>

          {/* AI Services */}
          <div>
            <h4 className="text-lg font-semibold mb-4 flex items-center">
              <Brain className="w-5 h-5 mr-2 text-cyan-400" />
              AI Services
            </h4>
            <ul className="space-y-3">
              {aiServices.map((service) => (
                <li key={service.name}>
                  <Link
                    to={service.path}
                    className="text-gray-300 hover:text-cyan-400 transition-colors text-sm group flex items-start"
                  >
                    <span className="group-hover:translate-x-1 transition-transform duration-300">
                      {service.name}
                    </span>
                  </Link>
                  <p className="text-xs text-gray-500 mt-1">{service.description}</p>
                </li>
              ))}
            </ul>
          </div>

          {/* IT Services */}
          <div>
            <h4 className="text-lg font-semibold mb-4 flex items-center">
              <Shield className="w-5 h-5 mr-2 text-green-400" />
              IT Services
            </h4>
            <ul className="space-y-3">
              {itServices.map((service) => (
                <li key={service.name}>
                  <Link
                    to={service.path}
                    className="text-gray-300 hover:text-green-400 transition-colors text-sm group flex items-start"
                  >
                    <span className="group-hover:translate-x-1 transition-transform duration-300">
                      {service.name}
                    </span>
                  </Link>
                  <p className="text-xs text-gray-500 mt-1">{service.description}</p>
                </li>
              ))}
            </ul>
          </div>

          {/* Solutions */}
          <div>
            <h4 className="text-lg font-semibold mb-4 flex items-center">
              <Zap className="w-5 h-5 mr-2 text-purple-400" />
              Solutions
            </h4>
            <ul className="space-y-3">
              {solutions.map((solution) => (
                <li key={solution.name}>
                  <Link
                    to={solution.path}
                    className="text-gray-300 hover:text-purple-400 transition-colors text-sm group flex items-start"
                  >
                    <span className="group-hover:translate-x-1 transition-transform duration-300">
                      {solution.name}
                    </span>
                  </Link>
                  <p className="text-xs text-gray-500 mt-1">{solution.description}</p>
                </li>
              ))}
            </ul>
          </div>

          {/* Micro SAAS */}
          <div>
            <h4 className="text-lg font-semibold mb-4 flex items-center">
              <Globe className="w-5 h-5 mr-2 text-orange-400" />
              Micro SAAS
            </h4>
            <ul className="space-y-3">
              {microSaas.map((saas) => (
                <li key={saas.name}>
                  <Link
                    to={saas.path}
                    className="text-gray-300 hover:text-orange-400 transition-colors text-sm group flex items-center"
                  >
                    <span className="group-hover:translate-x-1 transition-transform duration-300">
                      {saas.name}
                    </span>
                    {saas.featured && (
                      <Star className="w-3 h-3 text-yellow-400 fill-current ml-2" />
                    )}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Secondary Footer Links */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8 pt-8 border-t border-white/10">
          {/* Company */}
          <div>
            <h5 className="text-sm font-semibold text-gray-300 mb-3">Company</h5>
            <ul className="space-y-2">
              {company.map((item) => (
                <li key={item.name}>
                  <Link
                    to={item.path}
                    className="text-gray-400 hover:text-white transition-colors text-sm"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h5 className="text-sm font-semibold text-gray-300 mb-3">Resources</h5>
            <ul className="space-y-2">
              {resources.map((resource) => (
                <li key={resource.name}>
                  <Link
                    to={resource.path}
                    className="text-gray-400 hover:text-white transition-colors text-sm"
                  >
                    {resource.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h5 className="text-sm font-semibold text-gray-300 mb-3">Legal</h5>
            <ul className="space-y-2">
              {legal.map((item) => (
                <li key={item.name}>
                  <Link
                    to={item.path}
                    className="text-gray-400 hover:text-white transition-colors text-sm"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Newsletter Signup */}
        <div className="bg-gradient-to-r from-cyan-500/10 to-purple-500/10 rounded-2xl p-8 mb-8 border border-white/10">
          <div className="text-center">
            <h3 className="text-2xl font-bold text-white mb-2">Stay Updated</h3>
            <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
              Get the latest insights on AI, technology trends, and business solutions delivered to your inbox.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email address"
                className="flex-1 px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
              />
              <button className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-6 py-3 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center">
                Subscribe
                <ArrowRight className="w-4 h-4 ml-2" />
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="border-t border-white/10 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © {currentYear} Zion Tech Group. All rights reserved.
            </p>
            <div className="flex flex-wrap gap-6 mt-4 md:mt-0">
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
              <Link
                to="/contact"
                className="text-gray-400 hover:text-white transition-colors text-sm flex items-center"
              >
                Contact Us
                <ArrowRight className="w-3 h-3 ml-1" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
});

Footer.displayName = 'Footer';

export default Footer;