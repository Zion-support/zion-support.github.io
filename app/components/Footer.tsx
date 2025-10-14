import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Phone, 
  Mail, 
  MapPin, 
  Zap, 
  Facebook, 
  Twitter, 
  Linkedin, 
  Instagram,
  Github,
  ArrowRight,
  ExternalLink
} from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const serviceCategories = [
    {
      title: "AI Services",
      services: [
        { name: "AI Business Intelligence", link: "https://ziontechgroup.com/ai-business-intelligence" },
        { name: "AI Content Generation", link: "https://ziontechgroup.com/ai-content-generation" },
        { name: "AI Customer Service", link: "https://ziontechgroup.com/ai-customer-service" },
        { name: "AI Code Assistant", link: "https://ziontechgroup.com/ai-code-assistant" }
      ]
    },
    {
      title: "IT Services",
      services: [
        { name: "Cloud Infrastructure", link: "https://ziontechgroup.com/cloud-infrastructure" },
        { name: "Cybersecurity Suite", link: "https://ziontechgroup.com/cybersecurity" },
        { name: "5G Implementation", link: "https://ziontechgroup.com/5g-implementation" },
        { name: "Database Services", link: "https://ziontechgroup.com/database-services" }
      ]
    },
    {
      title: "Micro SAAS",
      services: [
        { name: "Analytics Dashboard", link: "https://ziontechgroup.com/analytics-dashboard" },
        { name: "Document Processing", link: "https://ziontechgroup.com/document-processing" },
        { name: "Social Media AI", link: "https://ziontechgroup.com/social-media-ai" },
        { name: "Email Marketing AI", link: "https://ziontechgroup.com/email-marketing-ai" }
      ]
    }
  ];

  const quickLinks = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Services", path: "/services" },
    { name: "Contact", path: "/contact" },
    { name: "Privacy Policy", path: "/privacy" },
    { name: "Terms of Service", path: "/terms" }
  ];

  const socialLinks = [
    { name: "Facebook", icon: <Facebook className="w-5 h-5" />, link: "https://facebook.com/ziontechgroup" },
    { name: "Twitter", icon: <Twitter className="w-5 h-5" />, link: "https://twitter.com/ziontechgroup" },
    { name: "LinkedIn", icon: <Linkedin className="w-5 h-5" />, link: "https://linkedin.com/company/ziontechgroup" },
    { name: "Instagram", icon: <Instagram className="w-5 h-5" />, link: "https://instagram.com/ziontechgroup" },
    { name: "GitHub", icon: <Github className="w-5 h-5" />, link: "https://github.com/ziontechgroup" }
  ];

  return (
    <footer className="bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white">
      {/* Main Footer Content */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <div className="flex items-center space-x-3 mb-6">
              <div className="relative">
                <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
                  <Zap className="w-7 h-7 text-white" />
                </div>
                <div className="absolute -inset-1 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg blur opacity-30"></div>
              </div>
              <div>
                <h3 className="text-2xl font-bold text-white">Zion Tech Group</h3>
                <p className="text-gray-300 text-sm">AI & IT Solutions</p>
              </div>
            </div>
            <p className="text-gray-300 mb-6 leading-relaxed">
              Transforming businesses with cutting-edge AI technology, comprehensive IT solutions, 
              and innovative micro SAAS platforms. Your partner in digital transformation.
            </p>
            
            {/* Contact Info */}
            <div className="space-y-3">
              <div className="flex items-center space-x-3 text-gray-300">
                <Phone className="w-5 h-5 text-blue-400" />
                <span>+1 302 464 0950</span>
              </div>
              <div className="flex items-center space-x-3 text-gray-300">
                <Mail className="w-5 h-5 text-blue-400" />
                <span>kleber@ziontechgroup.com</span>
              </div>
              <div className="flex items-start space-x-3 text-gray-300">
                <MapPin className="w-5 h-5 text-blue-400 mt-1" />
                <span>364 E Main St STE 1008<br />Middletown DE 19709</span>
              </div>
            </div>
          </div>

          {/* Services */}
          {serviceCategories.map((category, index) => (
            <div key={index}>
              <h4 className="text-xl font-bold text-white mb-6 relative">
                {category.title}
                <div className="absolute -bottom-2 left-0 w-12 h-1 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full"></div>
              </h4>
              <ul className="space-y-3">
                {category.services.map((service, serviceIndex) => (
                  <li key={serviceIndex}>
                    <a
                      href={service.link}
                      className="flex items-center text-gray-300 hover:text-white transition-colors duration-300 group"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <ArrowRight className="w-4 h-4 mr-2 group-hover:translate-x-1 transition-transform duration-300" />
                      {service.name}
                      <ExternalLink className="w-3 h-3 ml-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Quick Links */}
          <div>
            <h4 className="text-xl font-bold text-white mb-6 relative">
              Quick Links
              <div className="absolute -bottom-2 left-0 w-12 h-1 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full"></div>
            </h4>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <Link
                    to={link.path}
                    className="flex items-center text-gray-300 hover:text-white transition-colors duration-300 group"
                  >
                    <ArrowRight className="w-4 h-4 mr-2 group-hover:translate-x-1 transition-transform duration-300" />
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>

            {/* Social Links */}
            <div className="mt-8">
              <h5 className="text-lg font-semibold text-white mb-4">Follow Us</h5>
              <div className="flex space-x-4">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.link}
                    className="w-10 h-10 bg-slate-800 rounded-lg flex items-center justify-center text-gray-400 hover:text-white hover:bg-gradient-to-r hover:from-blue-500 hover:to-purple-600 transition-all duration-300 transform hover:scale-110"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.name}
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Newsletter Signup */}
      <div className="border-t border-gray-700">
        <div className="container mx-auto px-4 py-8">
          <div className="max-w-4xl mx-auto text-center">
            <h3 className="text-2xl font-bold text-white mb-4">Stay Updated with Our Latest Innovations</h3>
            <p className="text-gray-300 mb-6">
              Get the latest news about AI breakthroughs, IT solutions, and technology trends delivered to your inbox.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email address"
                className="flex-1 px-4 py-3 bg-slate-800 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
              <button className="px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold rounded-lg hover:from-blue-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-700">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-gray-400 text-sm mb-4 md:mb-0">
              © {currentYear} Zion Tech Group. All rights reserved.
            </div>
            <div className="flex space-x-6 text-sm text-gray-400">
              <a href="/privacy" className="hover:text-white transition-colors duration-300">Privacy Policy</a>
              <a href="/terms" className="hover:text-white transition-colors duration-300">Terms of Service</a>
              <a href="/cookies" className="hover:text-white transition-colors duration-300">Cookie Policy</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;