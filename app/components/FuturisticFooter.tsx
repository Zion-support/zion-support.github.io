import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Phone, 
  Mail, 
  MapPin, 
  Twitter, 
  Linkedin, 
  Github, 
  ArrowRight,
  Shield,
  Clock,
  Users,
  Award
} from 'lucide-react';

const FuturisticFooter: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const serviceCategories = [
    {
      title: 'AI Solutions',
      links: [
        { name: 'Machine Learning', href: '/ai-services' },
        { name: 'Natural Language Processing', href: '/ai-services' },
        { name: 'Computer Vision', href: '/ai-services' },
        { name: 'Predictive Analytics', href: '/ai-services' }
      ]
    },
    {
      title: 'Micro SAAS',
      links: [
        { name: 'Business Automation', href: '/micro-saas' },
        { name: 'Analytics Tools', href: '/micro-saas' },
        { name: 'Marketing Automation', href: '/micro-saas' },
        { name: 'Customer Management', href: '/micro-saas' }
      ]
    },
    {
      title: 'IT Services',
      links: [
        { name: 'Cloud Migration', href: '/it-services' },
        { name: 'DevOps & CI/CD', href: '/it-services' },
        { name: 'Cybersecurity', href: '/cybersecurity' },
        { name: 'Infrastructure Management', href: '/it-services' }
      ]
    },
    {
      title: 'Emerging Tech',
      links: [
        { name: 'Quantum Computing', href: '/quantum-computing' },
        { name: 'Blockchain & Web3', href: '/blockchain-web3' },
        { name: 'IoT & Edge Computing', href: '/iot-edge-computing' },
        { name: 'Autonomous Systems', href: '/autonomous-systems' }
      ]
    }
  ];

  const companyLinks = [
    { name: 'About Us', href: '/about' },
    { name: 'Our Team', href: '/team' },
    { name: 'Case Studies', href: '/case-studies' },
    { name: 'Blog', href: '/blog' },
    { name: 'Careers', href: '/careers' },
    { name: 'Press', href: '/press' }
  ];

  const supportLinks = [
    { name: 'Documentation', href: '/docs' },
    { name: 'API Reference', href: '/api' },
    { name: 'Help Center', href: '/help' },
    { name: 'Community', href: '/community' },
    { name: 'Status', href: '/status' },
    { name: 'Contact Support', href: '/contact' }
  ];

  const legalLinks = [
    { name: 'Privacy Policy', href: '/privacy' },
    { name: 'Terms of Service', href: '/terms' },
    { name: 'Cookie Policy', href: '/cookies' },
    { name: 'GDPR Compliance', href: '/gdpr' },
    { name: 'Security', href: '/security' },
    { name: 'SLA', href: '/sla' }
  ];

  const contactInfo = {
    phone: '+1 302 464 0950',
    email: 'kleber@ziontechgroup.com',
    address: '364 E Main St STE 1008, Middletown DE 19709'
  };

  const stats = [
    { icon: Users, value: '500+', label: 'Clients Served' },
    { icon: Award, value: '99.9%', label: 'Uptime SLA' },
    { icon: Clock, value: '24/7', label: 'Support' },
    { icon: Shield, value: 'SOC 2', label: 'Compliance' }
  ];

  return (
    <footer className="relative bg-gradient-to-br from-gray-900 via-black to-gray-900 text-white overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 cyber-grid opacity-20"></div>
      
      {/* Main Footer Content */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Top Section */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 mb-12">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <Link to="/" className="flex items-center space-x-2 mb-6">
              <div className="w-12 h-12 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-2xl">Z</span>
              </div>
              <span className="text-2xl font-bold neon-glow-blue">
                Zion Tech Group
              </span>
            </Link>
            <p className="text-gray-300 mb-6 leading-relaxed">
              Leading provider of AI-powered enterprise solutions, automation, and digital transformation services. 
              Transforming businesses with cutting-edge technology since 2020.
            </p>
            
            {/* Contact Info */}
            <div className="space-y-3">
              <a 
                href={`tel:${contactInfo.phone}`} 
                className="flex items-center text-gray-300 hover:text-cyan-400 transition-colors"
              >
                <Phone className="w-5 h-5 mr-3" />
                {contactInfo.phone}
              </a>
              <a 
                href={`mailto:${contactInfo.email}`} 
                className="flex items-center text-gray-300 hover:text-cyan-400 transition-colors"
              >
                <Mail className="w-5 h-5 mr-3" />
                {contactInfo.email}
              </a>
              <span className="flex items-start text-gray-300">
                <MapPin className="w-5 h-5 mr-3 mt-1 flex-shrink-0" />
                {contactInfo.address}
              </span>
            </div>
          </div>

          {/* Service Categories */}
          {serviceCategories.map((category, index) => (
            <div key={index}>
              <h3 className="text-lg font-semibold text-white mb-4 neon-glow-blue">
                {category.title}
              </h3>
              <ul className="space-y-3">
                {category.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <Link
                      to={link.href}
                      className="text-gray-300 hover:text-cyan-400 transition-colors duration-300 flex items-center group"
                    >
                      <ArrowRight className="w-4 h-4 mr-2 opacity-0 group-hover:opacity-100 transition-opacity" />
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {stats.map((stat, index) => (
            <div key={index} className="text-center futuristic-card">
              <stat.icon className="w-8 h-8 text-cyan-400 mx-auto mb-2" />
              <div className="text-2xl font-bold text-white mb-1">{stat.value}</div>
              <div className="text-gray-300 text-sm">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Links Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Company</h3>
            <ul className="space-y-3">
              {companyLinks.map((link, index) => (
                <li key={index}>
                  <Link
                    to={link.href}
                    className="text-gray-300 hover:text-cyan-400 transition-colors duration-300"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Support</h3>
            <ul className="space-y-3">
              {supportLinks.map((link, index) => (
                <li key={index}>
                  <Link
                    to={link.href}
                    className="text-gray-300 hover:text-cyan-400 transition-colors duration-300"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Legal</h3>
            <ul className="space-y-3">
              {legalLinks.map((link, index) => (
                <li key={index}>
                  <Link
                    to={link.href}
                    className="text-gray-300 hover:text-cyan-400 transition-colors duration-300"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Newsletter Signup */}
        <div className="bg-gradient-to-r from-cyan-500/10 to-blue-500/10 border border-cyan-500/30 rounded-lg p-8 mb-12">
          <div className="text-center">
            <h3 className="text-2xl font-bold text-white mb-4">
              Stay Updated with Our Latest Innovations
            </h3>
            <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
              Get exclusive insights, product updates, and industry trends delivered to your inbox.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 bg-black/50 border border-cyan-500/30 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20"
              />
              <button className="px-6 py-3 bg-gradient-to-r from-cyan-400 to-blue-500 text-black font-semibold rounded-lg hover:from-cyan-300 hover:to-blue-400 transition-all duration-300 cyber-button">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        {/* Social Links */}
        <div className="flex flex-col sm:flex-row justify-between items-center border-t border-gray-800 pt-8">
          <div className="flex space-x-6 mb-4 sm:mb-0">
            <a
              href="https://twitter.com/ziontechgroup"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-cyan-400 transition-colors duration-300"
            >
              <Twitter className="w-6 h-6" />
            </a>
            <a
              href="https://linkedin.com/company/ziontechgroup"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-cyan-400 transition-colors duration-300"
            >
              <Linkedin className="w-6 h-6" />
            </a>
            <a
              href="https://github.com/ziontechgroup"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-cyan-400 transition-colors duration-300"
            >
              <Github className="w-6 h-6" />
            </a>
          </div>
          
          <div className="text-gray-400 text-sm">
            © {currentYear} Zion Tech Group. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
};

export default FuturisticFooter;