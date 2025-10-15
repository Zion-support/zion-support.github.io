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
      title: 'Micro SAAS Solutions',
      services: [
        { name: 'AI Content Writer Pro', path: '/ai-content-generation-pro' },
        { name: 'AI Project Manager', path: '/ai-project-manager' },
        { name: 'AI Email Marketing', path: '/ai-email-marketing' },
        { name: 'AI Analytics Dashboard Pro', path: '/ai-analytics-dashboard-pro' },
        { name: 'AI Accounting Assistant', path: '/ai-accounting-assistant' },
        { name: 'AI Healthcare Assistant', path: '/ai-healthcare-assistant' },
        { name: 'AI Smart Contracts', path: '/ai-smart-contracts' },
        { name: 'AI Voice Assistant', path: '/ai-voice-assistant' },
        { name: 'AI Predictive Maintenance', path: '/ai-predictive-maintenance' },
        { name: 'AI Personalized Learning', path: '/ai-personalized-learning' }
      ]
    },
    {
      title: 'AI Services',
      services: [
        { name: 'AI Automation', path: '/ai-automation' },
        { name: 'Machine Learning', path: '/ai-services' },
        { name: 'Computer Vision', path: '/ai-computer-vision' },
        { name: 'Natural Language Processing', path: '/ai-services' },
        { name: 'Predictive Analytics', path: '/ai-analytics' },
        { name: 'AI Security Solutions', path: '/ai-security-solutions' }
      ]
    },
    {
      title: 'IT Services',
      services: [
        { name: 'Cloud Migration', path: '/cloud-migration-services' },
        { name: 'Cybersecurity', path: '/cybersecurity-consulting' },
<<<<<<< HEAD
        { name: 'DevOps', path: '/devops-solutions' },
        { name: 'Mobile Development', path: '/mobile-development' },
        { name: 'Web Development', path: '/web-development' },
<<<<<<< HEAD
=======
        { name: 'DevOps Solutions', path: '/devops-solutions' },
        { name: 'Mobile Development', path: '/mobile-app-development' },
        { name: 'Web Development', path: '/web-application-development' },
>>>>>>> cursor/enhance-application-with-new-services-and-improvements-265e
        { name: 'Database Solutions', path: '/database-solutions' }
=======
        { name: 'Database Solutions', path: '/database-solutions' },
        { name: 'Quantum Computing', path: '/quantum-computing-solutions' },
        { name: 'Edge Computing', path: '/edge-computing-solutions' }
>>>>>>> cursor/enhance-application-with-new-services-and-improvements-06e6
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
<<<<<<< HEAD
        { name: '5G Private Networks', path: '/5g-private-networks' }
=======
        { name: '5G Security Solutions', path: '/5g-security' }
>>>>>>> cursor/enhance-application-with-new-services-and-improvements-265e
      ]
    }
  ];

  const quickLinks = [
    { name: 'About Us', path: '/about' },
    { name: 'Portfolio', path: '/portfolio' },
    { name: 'Pricing', path: '/pricing' },
    { name: 'News', path: '/news' },
    { name: 'Contact', path: '/contact' },
    { name: 'Sitemap', path: '/sitemap' }
  ];

  const legalLinks = [
    { name: 'Privacy Policy', path: '/privacy-policy' },
    { name: 'Terms of Service', path: '/terms' },
    { name: 'Service Level Agreement', path: '/sla' },
    { name: 'Cookie Policy', path: '/cookies' },
    { name: 'GDPR Compliance', path: '/gdpr' }
  ];

  const supportLinks = [
    { name: 'Help Center', path: '/help' },
    { name: 'Documentation', path: '/docs' },
    { name: 'API Reference', path: '/api-docs' },
    { name: 'System Status', path: '/status' },
    { name: 'Report Issue', path: '/support' }
  ];

  return (
    <footer className="bg-slate-900 text-white relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-20 -right-20 w-40 h-40 bg-cyan-500/5 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-20 -left-20 w-40 h-40 bg-purple-500/5 rounded-full blur-3xl"></div>
      </div>
      
      {/* Main Footer Content */}
<<<<<<< HEAD
      <div className="container mx-auto px-4 py-16 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
=======
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-6 lg:gap-8">
>>>>>>> cursor/enhance-application-with-new-services-and-improvements-265e
          {/* Company Info */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-2 mb-6 group">
              <div className="w-10 h-10 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-lg flex items-center justify-center shadow-lg shadow-cyan-500/25 group-hover:shadow-cyan-500/50 transition-all duration-300 group-hover:scale-110">
                <span className="text-white font-bold text-xl group-hover:text-cyan-200 transition-colors">Z</span>
              </div>
              <span className="text-2xl font-bold group-hover:text-cyan-300 transition-colors duration-300">Zion Tech Group</span>
            </div>
            <p className="text-gray-300 mb-6 leading-relaxed">
              Leading provider of AI-powered micro SAAS solutions, IT services, and innovative technology solutions. 
              We help businesses transform and scale with cutting-edge technology. Visit us at <a href="https://ziontechgroup.com" className="text-cyan-400 hover:text-cyan-300 transition-colors">ziontechgroup.com</a>
            </p>
            
            {/* Contact Info */}
            <div className="space-y-3">
              <div className="flex items-center space-x-3 group">
                <Phone className="w-5 h-5 text-cyan-400 group-hover:text-cyan-300 transition-colors" />
                <a href="tel:+13024640950" className="text-gray-300 hover:text-cyan-300 transition-colors">
                  +1 302 464 0950
                </a>
              </div>
              <div className="flex items-center space-x-3 group">
                <Mail className="w-5 h-5 text-cyan-400 group-hover:text-cyan-300 transition-colors" />
                <a href="mailto:kleber@ziontechgroup.com" className="text-gray-300 hover:text-cyan-300 transition-colors">
                  kleber@ziontechgroup.com
                </a>
              </div>
              <div className="flex items-start space-x-3 group">
                <MapPin className="w-5 h-5 text-cyan-400 mt-1 group-hover:text-cyan-300 transition-colors" />
                <span className="text-gray-300 group-hover:text-gray-200 transition-colors">
                  364 E Main St STE 1008<br />
                  Middletown DE 19709
                </span>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex space-x-4 mt-6">
              <a href="https://facebook.com/ziontechgroup" className="text-gray-400 hover:text-cyan-400 transition-all duration-300 hover:scale-110" target="_blank" rel="noopener noreferrer">
                <Facebook className="w-6 h-6" />
              </a>
              <a href="https://twitter.com/ziontechgroup" className="text-gray-400 hover:text-cyan-400 transition-all duration-300 hover:scale-110" target="_blank" rel="noopener noreferrer">
                <Twitter className="w-6 h-6" />
              </a>
              <a href="https://linkedin.com/company/ziontechgroup" className="text-gray-400 hover:text-cyan-400 transition-all duration-300 hover:scale-110" target="_blank" rel="noopener noreferrer">
                <Linkedin className="w-6 h-6" />
              </a>
              <a href="https://github.com/ziontechgroup" className="text-gray-400 hover:text-cyan-400 transition-all duration-300 hover:scale-110" target="_blank" rel="noopener noreferrer">
                <Github className="w-6 h-6" />
              </a>
              <a href="https://instagram.com/ziontechgroup" className="text-gray-400 hover:text-cyan-400 transition-all duration-300 hover:scale-110" target="_blank" rel="noopener noreferrer">
                <Instagram className="w-6 h-6" />
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-xl font-semibold mb-6">Our Services</h3>
            <div className="space-y-4">
              {serviceCategories.map((category, index) => (
                <div key={index}>
                  <h4 className="text-lg font-medium text-blue-400 mb-3">{category.title}</h4>
                  <ul className="space-y-2">
                    {category.services.map((service, serviceIndex) => (
                      <li key={serviceIndex}>
                        <Link
                          to={service.path}
                          className="text-gray-300 hover:text-white transition-colors flex items-center group text-sm"
                        >
                          <ArrowRight className="w-3 h-3 mr-2 opacity-0 group-hover:opacity-100 transition-opacity" />
                          {service.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-semibold mb-6">Quick Links</h3>
            <ul className="space-y-2 mb-8">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <Link
                    to={link.path}
                    className="text-gray-300 hover:text-white transition-colors text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>

            <h3 className="text-xl font-semibold mb-6">Support</h3>
            <ul className="space-y-2">
              {supportLinks.map((link, index) => (
                <li key={index}>
                  <Link
                    to={link.path}
                    className="text-gray-300 hover:text-white transition-colors text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal & Newsletter */}
          <div>
            <h3 className="text-xl font-semibold mb-6">Legal</h3>
            <ul className="space-y-2 mb-8">
              {legalLinks.map((link, index) => (
                <li key={index}>
                  <Link
                    to={link.path}
                    className="text-gray-300 hover:text-white transition-colors text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>

            {/* Newsletter Signup */}
            <div className="bg-slate-800 rounded-lg p-6">
              <h4 className="text-lg font-semibold mb-3">Stay Updated</h4>
              <p className="text-gray-300 text-sm mb-4">
                Get the latest updates on our services and industry insights.
              </p>
              <div className="flex">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-3 py-2 bg-slate-700 text-white rounded-l-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
                />
                <button className="bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded-r-lg transition-colors text-sm">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Trust Indicators */}
      <div className="border-t border-slate-700">
        <div className="container mx-auto px-4 py-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 text-center">
            <div className="flex items-center justify-center space-x-2">
              <Shield className="w-6 h-6 text-green-400" />
              <span className="text-gray-300">Enterprise Security</span>
            </div>
            <div className="flex items-center justify-center space-x-2">
              <Clock className="w-6 h-6 text-blue-400" />
              <span className="text-gray-300">24/7 Support</span>
            </div>
            <div className="flex items-center justify-center space-x-2">
              <Award className="w-6 h-6 text-yellow-400" />
              <span className="text-gray-300">Certified Experts</span>
            </div>
            <div className="flex items-center justify-center space-x-2">
              <Users className="w-6 h-6 text-purple-400" />
              <span className="text-gray-300">500+ Happy Clients</span>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-slate-700 bg-slate-800">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-gray-400 text-sm mb-4 md:mb-0">
              © {currentYear} Zion Tech Group. All rights reserved.
            </div>
            <div className="flex flex-wrap gap-4 text-sm">
              <Link to="/privacy-policy" className="text-gray-400 hover:text-white transition-colors">
                Privacy Policy
              </Link>
              <Link to="/terms" className="text-gray-400 hover:text-white transition-colors">
                Terms of Service
              </Link>
              <Link to="/sla" className="text-gray-400 hover:text-white transition-colors">
                SLA
              </Link>
              <Link to="/cookies" className="text-gray-400 hover:text-white transition-colors">
                Cookie Policy
              </Link>
              <Link to="/gdpr" className="text-gray-400 hover:text-white transition-colors">
                GDPR
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;