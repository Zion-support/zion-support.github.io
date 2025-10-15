import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, Brain, Code, Cloud, Wifi, Shield, Users, Database, Smartphone, Globe } from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const serviceCategories = [
    {
      title: 'AI Services',
      icon: <Brain className="w-5 h-5 text-cyan-400" />,
      services: [
        { name: 'AI Analytics Dashboard Pro', href: '/ai-analytics-dashboard-pro' },
        { name: 'AI Code Assistant Pro', href: '/ai-code-assistant-pro' },
        { name: 'AI Cloud Infrastructure', href: '/ai-cloud-infrastructure' },
        { name: 'AI Chatbot Enterprise', href: '/ai-chatbot-enterprise' },
        { name: 'AI Database Solutions', href: '/ai-database-solutions' },
        { name: 'AI Mobile App Development', href: '/ai-mobile-app-development' },
        { name: 'AI Content Management', href: '/ai-content-management' }
      ]
    },
    {
      title: '5G Technology',
      icon: <Wifi className="w-5 h-5 text-purple-400" />,
      services: [
        { name: '5G Implementation', href: '/5g-implementation' },
        { name: '5G Network Infrastructure', href: '/5g-network-infrastructure' },
        { name: '5G IoT Solutions', href: '/5g-iot-solutions' },
        { name: '5G Smart City Solutions', href: '/5g-smart-city-solutions' },
        { name: '5G Private Networks', href: '/5g-private-networks' },
        { name: '5G Edge Computing', href: '/5g-edge-computing' }
      ]
    },
    {
      title: 'Security & Cloud',
      icon: <Shield className="w-5 h-5 text-green-400" />,
      services: [
        { name: 'Advanced Security Suite', href: '/advanced-security-suite' },
        { name: 'Cloud Infrastructure', href: '/cloud-infrastructure' },
        { name: 'Cybersecurity Solutions', href: '/cybersecurity' },
        { name: 'Network Security', href: '/network-security' },
        { name: 'Data Protection', href: '/data-protection' }
      ]
    }
  ];

  const quickLinks = [
    { name: 'About Us', href: '/about' },
    { name: 'Services', href: '/services' },
    { name: 'Contact', href: '/contact' },
    { name: 'Pricing', href: '/pricing' },
    { name: 'Team', href: '/team' },
    { name: 'Support', href: '/support' }
  ];

  const legalLinks = [
    { name: 'Privacy Policy', href: '/privacy' },
    { name: 'Terms of Service', href: '/terms' },
    { name: 'Cookie Policy', href: '/cookies' },
    { name: 'SLA', href: '/sla' }
  ];

  return (
    <footer className="bg-slate-900 text-white">
      <div className="max-w-7xl mx-auto px-4 py-16">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 mb-12">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <Link to="/" className="flex items-center space-x-3 mb-6 group">
              <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform">
                <span className="text-white font-bold text-xl">Z</span>
              </div>
              <span className="text-xl font-bold text-white group-hover:text-cyan-400 transition-colors">Zion Tech Group</span>
            </Link>
            <p className="text-gray-400 mb-6 max-w-sm">
              Leading provider of advanced AI and IT solutions, cybersecurity, cloud infrastructure, 
              and 5G technology services for businesses worldwide.
            </p>
            
            {/* Contact Info */}
            <div className="space-y-3">
              <div className="flex items-center space-x-3 text-gray-400">
                <Phone className="w-4 h-4 text-cyan-400" />
                <span>+1 302 464 0950</span>
              </div>
              <div className="flex items-center space-x-3 text-gray-400">
                <Mail className="w-4 h-4 text-cyan-400" />
                <span>kleber@ziontechgroup.com</span>
              </div>
              <div className="flex items-center space-x-3 text-gray-400">
                <MapPin className="w-4 h-4 text-cyan-400" />
                <span>364 E Main St STE 1008<br />Middletown DE 19709</span>
              </div>
            </div>
          </div>

          {/* Service Categories */}
          {serviceCategories.map((category, index) => (
            <div key={index} className="lg:col-span-1">
              <div className="flex items-center space-x-2 mb-4">
                {category.icon}
                <h3 className="text-lg font-semibold text-white">{category.title}</h3>
              </div>
              <ul className="space-y-2">
                {category.services.map((service, serviceIndex) => (
                  <li key={serviceIndex}>
                    <Link 
                      to={service.href}
                      className="text-gray-400 hover:text-cyan-400 transition-colors text-sm"
                    >
                      {service.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Quick Links */}
        <div className="border-t border-slate-800 pt-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-8">
            <div>
              <h4 className="text-white font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2">
                {quickLinks.map((link, index) => (
                  <li key={index}>
                    <Link 
                      to={link.href}
                      className="text-gray-400 hover:text-cyan-400 transition-colors text-sm"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            
            <div>
              <h4 className="text-white font-semibold mb-4">Legal</h4>
              <ul className="space-y-2">
                {legalLinks.map((link, index) => (
                  <li key={index}>
                    <Link 
                      to={link.href}
                      className="text-gray-400 hover:text-cyan-400 transition-colors text-sm"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="text-white font-semibold mb-4">Resources</h4>
              <ul className="space-y-2">
                <li><Link to="/blog" className="text-gray-400 hover:text-cyan-400 transition-colors text-sm">Blog</Link></li>
                <li><Link to="/case-studies" className="text-gray-400 hover:text-cyan-400 transition-colors text-sm">Case Studies</Link></li>
                <li><Link to="/whitepapers" className="text-gray-400 hover:text-cyan-400 transition-colors text-sm">Whitepapers</Link></li>
                <li><Link to="/webinars" className="text-gray-400 hover:text-cyan-400 transition-colors text-sm">Webinars</Link></li>
                <li><Link to="/tutorials" className="text-gray-400 hover:text-cyan-400 transition-colors text-sm">Tutorials</Link></li>
              </ul>
            </div>

            <div>
              <h4 className="text-white font-semibold mb-4">Support</h4>
              <ul className="space-y-2">
                <li><Link to="/support" className="text-gray-400 hover:text-cyan-400 transition-colors text-sm">Help Center</Link></li>
                <li><Link to="/contact" className="text-gray-400 hover:text-cyan-400 transition-colors text-sm">Contact Support</Link></li>
                <li><Link to="/status" className="text-gray-400 hover:text-cyan-400 transition-colors text-sm">System Status</Link></li>
                <li><Link to="/documentation" className="text-gray-400 hover:text-cyan-400 transition-colors text-sm">Documentation</Link></li>
              </ul>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-slate-800">
            <div className="text-gray-400 text-sm mb-4 md:mb-0">
              © {currentYear} Zion Tech Group. All rights reserved.
            </div>
            
            {/* Social Links */}
            <div className="flex space-x-4">
              <a 
                href="https://linkedin.com/company/zion-tech-group" 
                className="text-gray-400 hover:text-cyan-400 transition-colors"
                aria-label="LinkedIn"
              >
                <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-xs">in</span>
                </div>
              </a>
              <a 
                href="https://twitter.com/ziontechgroup" 
                className="text-gray-400 hover:text-cyan-400 transition-colors"
                aria-label="Twitter"
              >
                <div className="w-8 h-8 bg-blue-400 rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-xs">t</span>
                </div>
              </a>
              <a 
                href="https://github.com/ziontechgroup" 
                className="text-gray-400 hover:text-cyan-400 transition-colors"
                aria-label="GitHub"
              >
                <div className="w-8 h-8 bg-gray-800 rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-xs">gh</span>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
