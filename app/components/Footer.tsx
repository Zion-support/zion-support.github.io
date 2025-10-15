import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Phone, 
  Mail, 
  MapPin, 
  Facebook, 
  Twitter, 
  Linkedin, 
  Github, 
  Instagram,
  ArrowRight,
  Clock,
  Shield,
  Award,
  Users
} from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const serviceCategories = [
    {
      title: 'AI Services',
      services: [
        { name: 'AI Analytics Dashboard Pro', path: '/ai-analytics-dashboard-pro' },
        { name: 'AI Content Generation Pro', path: '/ai-content-generation-pro' },
        { name: 'AI Social Media Manager', path: '/ai-social-media-manager' },
        { name: 'AI Project Manager', path: '/ai-project-manager' },
        { name: 'AI Customer Support', path: '/ai-customer-support' },
        { name: 'AI Email Marketing', path: '/ai-email-marketing' },
        { name: 'AI Code Assistant Pro', path: '/ai-code-assistant-pro' },
        { name: 'AI Business Intelligence', path: '/ai-business-intelligence-pro' }
      ]
    },
    {
      title: 'IT Services',
      services: [
        { name: 'Cloud Migration Services', path: '/cloud-migration-services' },
        { name: 'Cybersecurity Consulting', path: '/cybersecurity-consulting' },
        { name: 'Database Solutions', path: '/database-solutions' },
        { name: 'DevOps Solutions', path: '/devops-solutions' },
        { name: 'Web Development', path: '/web-development' },
        { name: 'Mobile App Development', path: '/mobile-development' },
        { name: 'API Management', path: '/ai-api-management' },
        { name: 'Performance Monitoring', path: '/performance-monitoring' }
      ]
    },
    {
      title: '5G Solutions',
      services: [
        { name: '5G Implementation', path: '/5g-implementation' },
        { name: '5G Network Infrastructure', path: '/5g-network-infrastructure' },
        { name: '5G IoT Solutions', path: '/5g-iot-solutions' },
        { name: '5G Smart City Solutions', path: '/5g-smart-city-solutions' },
        { name: '5G Edge Computing', path: '/5g-edge-computing' },
        { name: '5G Private Networks', path: '/5g-private-networks' },
        { name: '5G Mobile Applications', path: '/5g-mobile-applications' },
        { name: '5G Data Analytics', path: '/5g-data-analytics' }
      ]
    },
    {
      title: 'Micro SAAS',
      services: [
        { name: 'AI Accounting Assistant', path: '/ai-accounting-assistant' },
        { name: 'AI Content Moderation Pro', path: '/ai-content-moderation-pro' },
        { name: 'AI Climate Solutions Pro', path: '/ai-climate-solutions-pro' },
        { name: 'AI Agricultural Intelligence Pro', path: '/ai-agricultural-intelligence-pro' },
        { name: 'AI 3D Generation', path: '/ai-3d-generation' },
        { name: 'AI Blockchain Solutions', path: '/ai-blockchain-solutions' },
        { name: 'AI HR Assistant', path: '/ai-hr-assistant' },
        { name: 'AI Legal Assistant', path: '/ai-legal-assistant' }
      ]
    }
  ];

  const quickLinks = [
    { name: 'About Us', path: '/about' },
    { name: 'Portfolio', path: '/portfolio' },
    { name: 'Pricing', path: '/pricing' },
    { name: 'News', path: '/news' },
    { name: 'Contact', path: '/contact' },
    { name: 'Privacy Policy', path: '/privacy-policy' },
    { name: 'Terms of Service', path: '/terms' },
    { name: 'SLA', path: '/sla' }
  ];

  return (
    <footer className="bg-gradient-to-br from-slate-900 to-slate-800 text-white cyber-grid relative">
      {/* Main Footer Content */}
      <div className="container mx-auto px-4 py-16 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <div className="flex items-center space-x-2 mb-6">
              <div className="w-10 h-10 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-lg flex items-center justify-center cyber-glow">
                <span className="text-white font-bold text-xl neon-pulse">Z</span>
              </div>
              <span className="text-2xl font-bold cyber-text">Zion Tech Group</span>
            </div>
            <p className="text-gray-300 mb-6 leading-relaxed">
              Leading provider of AI-powered micro SAAS solutions, IT services, and innovative technology solutions. 
              We help businesses transform and scale with cutting-edge AI, IT, and 5G technologies.
            </p>
            
            {/* Contact Info */}
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-cyan-400 neon-pulse" />
                <a href="tel:+13024640950" className="text-gray-300 hover:text-cyan-400 transition-colors neon-text">
                  +1 302 464 0950
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-cyan-400 neon-pulse" />
                <a href="mailto:kleber@ziontechgroup.com" className="text-gray-300 hover:text-cyan-400 transition-colors neon-text">
                  kleber@ziontechgroup.com
                </a>
              </div>
              <div className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-cyan-400 mt-1 neon-pulse" />
                <span className="text-gray-300">
                  364 E Main St STE 1008<br />
                  Middletown DE 19709
                </span>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex space-x-4 mt-6">
              <a href="https://facebook.com/ziontechgroup" className="text-gray-400 hover:text-cyan-400 transition-colors cyber-glow rounded-lg p-2 hover:bg-cyan-500/20">
                <Facebook className="w-6 h-6" />
              </a>
              <a href="https://twitter.com/ziontechgroup" className="text-gray-400 hover:text-cyan-400 transition-colors cyber-glow rounded-lg p-2 hover:bg-cyan-500/20">
                <Twitter className="w-6 h-6" />
              </a>
              <a href="https://linkedin.com/company/ziontechgroup" className="text-gray-400 hover:text-cyan-400 transition-colors cyber-glow rounded-lg p-2 hover:bg-cyan-500/20">
                <Linkedin className="w-6 h-6" />
              </a>
              <a href="https://github.com/ziontechgroup" className="text-gray-400 hover:text-cyan-400 transition-colors cyber-glow rounded-lg p-2 hover:bg-cyan-500/20">
                <Github className="w-6 h-6" />
              </a>
              <a href="https://instagram.com/ziontechgroup" className="text-gray-400 hover:text-cyan-400 transition-colors cyber-glow rounded-lg p-2 hover:bg-cyan-500/20">
                <Instagram className="w-6 h-6" />
              </a>
            </div>
          </div>

          {/* Services */}
          <div className="lg:col-span-2">
            <h3 className="text-xl font-semibold mb-6 cyber-text">Our Services</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {serviceCategories.map((category, index) => (
                <div key={index}>
                  <h4 className="text-lg font-medium text-cyan-400 mb-4 neon-pulse">{category.title}</h4>
                  <ul className="space-y-2">
                    {category.services.map((service, serviceIndex) => (
                      <li key={serviceIndex}>
                        <Link
                          to={service.path}
                          className="text-gray-300 hover:text-cyan-400 transition-colors flex items-center group text-sm"
                        >
                          <ArrowRight className="w-3 h-3 mr-2 opacity-0 group-hover:opacity-100 transition-opacity neon-pulse" />
                          {service.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Quick Links & Newsletter */}
          <div>
            <h3 className="text-xl font-semibold mb-6 cyber-text">Quick Links</h3>
            <ul className="space-y-2 mb-8">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <Link
                    to={link.path}
                    className="text-gray-300 hover:text-cyan-400 transition-colors flex items-center group"
                  >
                    <ArrowRight className="w-3 h-3 mr-2 opacity-0 group-hover:opacity-100 transition-opacity neon-pulse" />
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>

            {/* Newsletter Signup */}
            <div className="cyber-card p-6">
              <h4 className="text-lg font-semibold mb-3 cyber-text">Stay Updated</h4>
              <p className="text-gray-300 text-sm mb-4">
                Get the latest updates on our AI, IT, and 5G services and industry insights.
              </p>
              <div className="flex">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-3 py-2 bg-slate-700 text-white rounded-l-lg focus:outline-none focus:ring-2 focus:ring-cyan-500 border border-slate-600"
                />
                <button className="cyber-button px-4 py-2 rounded-r-lg">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Trust Indicators */}
      <div className="border-t border-cyan-500/30">
        <div className="container mx-auto px-4 py-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 text-center">
            <div className="flex items-center justify-center space-x-2 cyber-card p-4">
              <Shield className="w-6 h-6 text-green-400 neon-pulse" />
              <span className="text-gray-300 neon-text">Enterprise Security</span>
            </div>
            <div className="flex items-center justify-center space-x-2 cyber-card p-4">
              <Clock className="w-6 h-6 text-cyan-400 neon-pulse" />
              <span className="text-gray-300 neon-text">24/7 Support</span>
            </div>
            <div className="flex items-center justify-center space-x-2 cyber-card p-4">
              <Award className="w-6 h-6 text-yellow-400 neon-pulse" />
              <span className="text-gray-300 neon-text">Certified Experts</span>
            </div>
            <div className="flex items-center justify-center space-x-2 cyber-card p-4">
              <Users className="w-6 h-6 text-purple-400 neon-pulse" />
              <span className="text-gray-300 neon-text">500+ Happy Clients</span>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-cyan-500/30 bg-slate-800/50">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-gray-400 text-sm mb-4 md:mb-0">
              © {currentYear} Zion Tech Group. All rights reserved. | <a href="https://ziontechgroup.com" className="text-cyan-400 hover:text-cyan-300">ziontechgroup.com</a>
            </div>
            <div className="flex space-x-6 text-sm">
              <Link to="/privacy-policy" className="text-gray-400 hover:text-cyan-400 transition-colors">
                Privacy Policy
              </Link>
              <Link to="/terms" className="text-gray-400 hover:text-cyan-400 transition-colors">
                Terms of Service
              </Link>
              <Link to="/sla" className="text-gray-400 hover:text-cyan-400 transition-colors">
                SLA
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;