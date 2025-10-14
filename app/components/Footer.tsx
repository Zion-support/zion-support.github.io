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
  Shield,
  Clock,
  Award,
  Users,
  Code,
  Brain,
  Cloud,
  Wifi
} from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const serviceCategories = [
    {
      title: 'AI Solutions',
      icon: <Brain className="w-5 h-5 text-cyan-400" />,
      services: [
        { name: 'AI Analytics Dashboard Pro', href: '/ai-analytics-dashboard-pro' },
        { name: 'AI Content Generation Pro', href: '/ai-content-generation-pro' },
        { name: 'AI Automation Platform', href: '/ai-automation-platform' },
        { name: 'AI Business Intelligence Pro', href: '/ai-business-intelligence-pro' },
        { name: 'AI Code Assistant Pro', href: '/ai-code-assistant-pro' },
        { name: 'AI Chatbot Enterprise', href: '/ai-chatbot-enterprise' },
        { name: 'AI Security Suite', href: '/ai-security-suite' },
        { name: 'AI Customer Analytics Pro', href: '/ai-customer-analytics-pro' }
      ]
    },
    {
      title: 'IT Services',
      icon: <Code className="w-5 h-5 text-purple-400" />,
      services: [
        { name: 'Cloud Infrastructure', href: '/ai-cloud-infrastructure' },
        { name: 'API Management', href: '/ai-api-management' },
        { name: 'Database Solutions', href: '/ai-database-solutions' },
        { name: 'Advanced Security Suite', href: '/advanced-security-suite' },
        { name: 'Performance Monitoring', href: '/performance-monitoring' },
        { name: 'DevOps Solutions', href: '/devops-solutions' }
      ]
    },
    {
      title: '5G Technology',
      icon: <Wifi className="w-5 h-5 text-green-400" />,
      services: [
        { name: '5G Implementation', href: '/5g-implementation' },
        { name: '5G Network Infrastructure', href: '/5g-network-infrastructure' },
        { name: '5G IoT Solutions', href: '/5g-iot-solutions' },
        { name: '5G Smart City Solutions', href: '/5g-smart-city-solutions' },
        { name: '5G Edge Computing', href: '/5g-edge-computing' },
        { name: '5G Private Networks', href: '/5g-private-networks' }
      ]
    },
    {
      title: 'Micro SAAS',
      icon: <Cloud className="w-5 h-5 text-orange-400" />,
      services: [
        { name: 'AI Content Generation Pro', href: '/ai-content-generation-pro' },
        { name: 'AI Accounting Assistant', href: '/ai-accounting-assistant' },
        { name: 'AI Content Moderation Pro', href: '/ai-content-moderation-pro' },
        { name: 'AI Climate Solutions Pro', href: '/ai-climate-solutions-pro' },
        { name: 'AI Agricultural Intelligence Pro', href: '/ai-agricultural-intelligence-pro' },
        { name: 'AI 3D Generation', href: '/ai-3d-generation' },
        { name: 'AI Blockchain Solutions', href: '/ai-blockchain-solutions' },
        { name: 'AI Customer Analytics Pro', href: '/ai-customer-analytics-pro' }
      ]
    }
  ];

  const quickLinks = [
    { name: 'Home', href: '/' },
    { name: 'About Us', href: '/about' },
    { name: 'Services', href: '/services' },
    { name: 'Contact', href: '/contact' },
    { name: 'Privacy Policy', href: '/privacy' },
    { name: 'Terms of Service', href: '/terms' },
    { name: 'Blog', href: '/blog' },
    { name: 'Careers', href: '/careers' }
  ];

  const socialLinks = [
    { name: 'Facebook', icon: <Facebook className="w-5 h-5" />, href: 'https://facebook.com/ziontechgroup' },
    { name: 'Twitter', icon: <Twitter className="w-5 h-5" />, href: 'https://twitter.com/ziontechgroup' },
    { name: 'LinkedIn', icon: <Linkedin className="w-5 h-5" />, href: 'https://linkedin.com/company/ziontechgroup' },
    { name: 'Instagram', icon: <Instagram className="w-5 h-5" />, href: 'https://instagram.com/ziontechgroup' },
    { name: 'GitHub', icon: <Github className="w-5 h-5" />, href: 'https://github.com/ziontechgroup' }
  ];

  return (
    <footer className="bg-slate-900 text-white relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-purple-900/20 to-slate-900">
        <div className="absolute inset-0 bg-cyber-grid opacity-10"></div>
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-cyan-500 via-purple-500 to-cyan-500 animate-pulse"></div>
      </div>

      <div className="relative z-10">
        {/* Main Footer Content */}
        <div className="container mx-auto px-4 py-16">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            {/* Company Info */}
            <div className="lg:col-span-1">
              <div className="flex items-center space-x-2 mb-6">
                <div className="w-10 h-10 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-lg flex items-center justify-center">
                  <Zap className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white">Zion Tech Group</h3>
                  <p className="text-sm text-cyan-400">Advanced AI & IT Solutions</p>
                </div>
              </div>
              <p className="text-gray-300 mb-6 leading-relaxed">
                Leading provider of cutting-edge AI, IT, and 5G solutions. 
                We transform businesses through innovative technology and 
                intelligent automation.
              </p>
              
              {/* Contact Info */}
              <div className="space-y-3">
                <div className="flex items-center space-x-3 text-gray-300">
                  <Phone className="w-4 h-4 text-cyan-400" />
                  <a href="tel:+13024640950" className="hover:text-cyan-400 transition-colors">
                    +1 302 464 0950
                  </a>
                </div>
                <div className="flex items-center space-x-3 text-gray-300">
                  <Mail className="w-4 h-4 text-cyan-400" />
                  <a href="mailto:kleber@ziontechgroup.com" className="hover:text-cyan-400 transition-colors">
                    kleber@ziontechgroup.com
                  </a>
                </div>
                <div className="flex items-center space-x-3 text-gray-300">
                  <MapPin className="w-4 h-4 text-cyan-400" />
                  <span>364 E Main St STE 1008<br />Middletown DE 19709</span>
                </div>
              </div>

              {/* Social Links */}
              <div className="flex space-x-4 mt-6">
                {socialLinks.map((social) => (
                  <a
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 bg-slate-800 hover:bg-cyan-600 rounded-lg flex items-center justify-center transition-all duration-300 hover:scale-110"
                    aria-label={social.name}
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>

            {/* Service Categories */}
            <div className="lg:col-span-2">
              <h3 className="text-xl font-bold text-white mb-6">Our Services</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {serviceCategories.map((category) => (
                  <div key={category.title}>
                    <div className="flex items-center space-x-2 mb-4">
                      {category.icon}
                      <h4 className="text-lg font-semibold text-white">{category.title}</h4>
                    </div>
                    <ul className="space-y-2">
                      {category.services.map((service) => (
                        <li key={service.name}>
                          <Link
                            to={service.href}
                            className="flex items-center space-x-2 text-gray-300 hover:text-cyan-400 transition-colors duration-200 group"
                          >
                            <ArrowRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                            <span className="text-sm">{service.name}</span>
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>

            {/* Quick Links & Newsletter */}
            <div className="lg:col-span-1">
              <h3 className="text-xl font-bold text-white mb-6">Quick Links</h3>
              <ul className="space-y-2 mb-8">
                {quickLinks.map((link) => (
                  <li key={link.name}>
                    <Link
                      to={link.href}
                      className="text-gray-300 hover:text-cyan-400 transition-colors duration-200 text-sm"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>

              {/* Newsletter Signup */}
              <div className="bg-slate-800/50 rounded-lg p-6 border border-cyan-500/20">
                <h4 className="text-lg font-semibold text-white mb-3">Stay Updated</h4>
                <p className="text-gray-300 text-sm mb-4">
                  Get the latest updates on AI and IT innovations.
                </p>
                <div className="flex space-x-2">
                  <input
                    type="email"
                    placeholder="Enter your email"
                    className="flex-1 px-3 py-2 bg-slate-700 border border-slate-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500"
                  />
                  <button className="px-4 py-2 bg-gradient-to-r from-cyan-600 to-purple-600 text-white rounded-lg hover:from-cyan-700 hover:to-purple-700 transition-all duration-300 font-semibold">
                    Subscribe
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Stats Section */}
        <div className="border-t border-cyan-500/20 bg-slate-800/30">
          <div className="container mx-auto px-4 py-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              <div className="group">
                <div className="flex items-center justify-center w-16 h-16 bg-gradient-to-r from-cyan-600 to-purple-600 rounded-full mx-auto mb-3 group-hover:scale-110 transition-transform duration-300">
                  <Users className="w-8 h-8 text-white" />
                </div>
                <div className="text-2xl font-bold text-white mb-1">500+</div>
                <div className="text-sm text-gray-400">Happy Clients</div>
              </div>
              <div className="group">
                <div className="flex items-center justify-center w-16 h-16 bg-gradient-to-r from-green-600 to-cyan-600 rounded-full mx-auto mb-3 group-hover:scale-110 transition-transform duration-300">
                  <Award className="w-8 h-8 text-white" />
                </div>
                <div className="text-2xl font-bold text-white mb-1">1000+</div>
                <div className="text-sm text-gray-400">Projects Completed</div>
              </div>
              <div className="group">
                <div className="flex items-center justify-center w-16 h-16 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full mx-auto mb-3 group-hover:scale-110 transition-transform duration-300">
                  <Clock className="w-8 h-8 text-white" />
                </div>
                <div className="text-2xl font-bold text-white mb-1">99.9%</div>
                <div className="text-sm text-gray-400">Uptime Guarantee</div>
              </div>
              <div className="group">
                <div className="flex items-center justify-center w-16 h-16 bg-gradient-to-r from-orange-600 to-red-600 rounded-full mx-auto mb-3 group-hover:scale-110 transition-transform duration-300">
                  <Shield className="w-8 h-8 text-white" />
                </div>
                <div className="text-2xl font-bold text-white mb-1">24/7</div>
                <div className="text-sm text-gray-400">Support Available</div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-cyan-500/20 bg-slate-800/50">
          <div className="container mx-auto px-4 py-6">
            <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
              <div className="text-gray-400 text-sm">
                © {currentYear} Zion Tech Group. All rights reserved.
              </div>
              <div className="flex items-center space-x-6 text-sm text-gray-400">
                <Link to="/privacy" className="hover:text-cyan-400 transition-colors">
                  Privacy Policy
                </Link>
                <Link to="/terms" className="hover:text-cyan-400 transition-colors">
                  Terms of Service
                </Link>
                <Link to="/cookies" className="hover:text-cyan-400 transition-colors">
                  Cookie Policy
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;