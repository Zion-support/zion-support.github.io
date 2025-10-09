'use client';
import React, { memo } from 'react';
import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, Clock, Award, Shield, Zap, ArrowRight, Brain, Cloud, Code, BarChart, Users, Globe, Facebook, Twitter, Linkedin, Instagram, Youtube, Github, MessageSquare, Star, TrendingUp, CheckCircle } from 'lucide-react';

const Footer: React.FC = memo(() => {
  const currentYear = new Date().getFullYear();

  const aiServices = [
    { name: 'Comprehensive AI solutions', url: '/ai-services', description: 'End-to-end AI implementation' },
    { name: 'AI-powered marketing automation', url: '/ai-marketing', description: 'Automated marketing campaigns' },
    { name: 'Intelligent process automation', url: '/ai-automation', description: 'Smart workflow automation' },
    { name: 'Medical AI solutions', url: '/ai-healthcare', description: 'Healthcare AI applications' },
    { name: 'Financial AI applications', url: '/ai-fintech', description: 'Fintech AI solutions' },
    { name: 'AI content creation', url: '/ai-content-generation', description: 'Automated content generation' },
    { name: 'Advanced data insights', url: '/ai-analytics', description: 'AI-powered analytics' },
    { name: 'AI security solutions', url: '/ai-cybersecurity', description: 'Intelligent security systems' },
    { name: 'Workflow optimization', url: '/ai-workflow-automation', description: 'Process optimization' },
    { name: 'Mobile AI applications', url: '/ai-mobile-app-builder', description: 'AI mobile app development' },
    { name: 'E-commerce AI platforms', url: '/ai-ecommerce', description: 'AI e-commerce solutions' },
    { name: 'AI-powered customer service', url: '/ai-customer-service', description: 'Intelligent customer support' },
    { name: 'Intelligent sales processes', url: '/ai-sales-automation', description: 'AI sales automation' },
    { name: 'Advanced data visualization', url: '/ai-data-visualization', description: 'Interactive data visualization' },
    { name: 'AI-powered lead generation', url: '/ai-lead-generation', description: 'Automated lead generation' },
    { name: 'Intelligent document processing', url: '/ai-document-processor', description: 'Smart document handling' },
    { name: 'Complete ML platform', url: '/ai-ml-platform', description: 'Machine learning platform' },
    { name: 'Advanced computer vision', url: '/ai-image-recognition', description: 'Computer vision solutions' },
    { name: 'Advanced NLP solutions', url: '/ai-nlp', description: 'Natural language processing' },
    { name: 'Intelligent robotics', url: '/ai-robotics', description: 'AI-powered robotics' },
    { name: 'Custom AI R&D', url: '/ai-research', description: 'Custom AI research' },
    { name: 'AI at the edge', url: '/ai-edge-computing', description: 'Edge AI solutions' }
  ];

  const itServices = [
    { name: 'Comprehensive IT support', url: '/it-support', description: '24/7 IT support services' },
    { name: 'Enterprise infrastructure', url: '/it-infrastructure', description: 'Scalable infrastructure solutions' },
    { name: 'Security solutions', url: '/cybersecurity', description: 'Advanced security implementations' },
    { name: 'Cloud migration & setup', url: '/cloud-migration', description: 'Seamless cloud transitions' },
    { name: 'DevOps automation', url: '/devops', description: 'Automated development workflows' },
    { name: 'Database management', url: '/database-management', description: 'Optimized database solutions' },
    { name: 'Network infrastructure', url: '/network-infrastructure', description: 'Robust network systems' },
    { name: 'System management', url: '/system-management', description: 'Comprehensive system oversight' },
    { name: 'Strategic IT planning', url: '/it-consulting', description: 'Strategic technology planning' },
    { name: '24/7 IT management', url: '/managed-it', description: 'Round-the-clock IT management' },
    { name: 'Staff development', url: '/it-training', description: 'IT skills development' },
    { name: 'Custom infrastructure', url: '/custom-infrastructure', description: 'Tailored infrastructure solutions' },
    { name: 'Real-time monitoring', url: '/monitoring', description: 'Continuous system monitoring' },
    { name: 'Disaster recovery', url: '/disaster-recovery', description: 'Business continuity solutions' },
    { name: 'IT process automation', url: '/it-automation', description: 'Streamlined IT processes' },
    { name: 'Worldwide support', url: '/global-support', description: 'Global IT support coverage' }
  ];

  const emergingTech = [
    { name: 'Quantum solutions', url: '/quantum-computing', description: 'Quantum computing applications' },
    { name: 'Intelligent robotics', url: '/robotics', description: 'Advanced robotic systems' },
    { name: 'Connected devices', url: '/iot-edge-computing', description: 'IoT and edge computing' },
    { name: 'Decentralized solutions', url: '/blockchain-web3', description: 'Blockchain and Web3' },
    { name: 'Data insights', url: '/business-intelligence', description: 'Advanced business intelligence' },
    { name: 'Self-managing systems', url: '/autonomous-systems', description: 'Autonomous system solutions' },
    { name: 'Immersive experiences', url: '/ar-vr-solutions', description: 'AR/VR applications' },
    { name: 'Urban technology solutions', url: '/smart-city', description: 'Smart city technologies' },
    { name: 'Business modernization', url: '/digital-transformation', description: 'Digital transformation' },
    { name: 'R&D and prototyping', url: '/research-development', description: 'Research and development' },
    { name: 'Green technology solutions', url: '/green-tech', description: 'Sustainable technology' },
    { name: 'Emerging tech solutions', url: '/emerging-tech', description: 'Cutting-edge technologies' }
  ];

  const companyLinks = [
    { name: 'About Us', url: '/about' },
    { name: 'Our Team', url: '/team' },
    { name: 'Careers', url: '/careers' },
    { name: 'News', url: '/blog' },
    { name: 'Contact', url: '/contact' }
  ];

  const supportLinks = [
    { name: 'Documentation', url: '/docs' },
    { name: 'API Docs', url: '/api-docs' },
    { name: 'Support', url: '/support' },
    { name: 'Status', url: '/status' },
    { name: 'Privacy Policy', url: '/privacy' },
    { name: 'Terms of Service', url: '/terms' }
  ];

  const socialLinks = [
    { name: 'Facebook', icon: Facebook, url: 'https://facebook.com/ziontechgroup' },
    { name: 'Twitter', icon: Twitter, url: 'https://twitter.com/ziontechgroup' },
    { name: 'LinkedIn', icon: Linkedin, url: 'https://linkedin.com/company/ziontechgroup' },
    { name: 'Instagram', icon: Instagram, url: 'https://instagram.com/ziontechgroup' },
    { name: 'YouTube', icon: Youtube, url: 'https://youtube.com/ziontechgroup' },
    { name: 'GitHub', icon: Github, url: 'https://github.com/ziontechgroup' }
  ];

  const contactInfo = {
    phone: '+1 302 464 0950',
    email: 'kleber@ziontechgroup.com',
    address: '364 E Main St STE 1008, Middletown DE 19709',
    hours: '24/7 Support Available'
  };

  const achievements = [
    { text: '50+ Successful Projects' },
    { text: '100+ Happy Clients' },
    { text: '300% Average ROI' },
    { text: '99.9% Uptime Guarantee' }
  ];

  return (
    <footer className="bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 cyber-grid-enhanced">
      {/* Main Footer Content */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-6">
            <div>
              <Link to="/" className="flex items-center space-x-2 group">
                <div className="w-10 h-10 bg-gradient-to-br from-cyan-400 to-purple-600 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <span className="text-white font-bold text-lg">Z</span>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white cyber-text-enhanced neon-flicker-enhanced">Zion Tech Group</h3>
                  <p className="text-sm text-cyan-400">AI & IT Solutions</p>
                </div>
              </Link>
            </div>
            
            <p className="text-gray-300 text-sm leading-relaxed">
              Leading provider of AI-powered enterprise solutions, quantum computing, autonomous systems, 
              and digital transformation services. Transform your business with cutting-edge technology.
            </p>

            {/* Social Links */}
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-slate-800 rounded-lg flex items-center justify-center text-gray-400 hover:text-cyan-400 hover:bg-slate-700 transition-all duration-300 group"
                  aria-label={social.name}
                >
                  <social.icon className="w-5 h-5 group-hover:scale-110 transition-transform duration-300" />
                </a>
              ))}
            </div>
          </div>

          {/* AI Services */}
          <div>
            <h3 className="text-lg font-semibold mb-6 text-cyan-400 neon-text">AI Services</h3>
            <ul className="space-y-3">
              {aiServices.slice(0, 8).map((service, index) => (
                <li key={index}>
                  <Link
                    to={service.url}
                    className="text-gray-300 hover:text-cyan-400 transition-colors duration-300 text-sm group flex items-center"
                  >
                    <ArrowRight className="w-3 h-3 mr-2 opacity-0 group-hover:opacity-100 transition-opacity" />
                    {service.name}
                  </Link>
                  <p className="text-xs text-gray-500 ml-5">{service.description}</p>
                </li>
              ))}
              <li>
                <Link
                  to="/ai-services"
                  className="text-cyan-400 hover:text-cyan-300 transition-colors duration-200 text-sm font-medium"
                >
                  View All AI Services →
                </Link>
              </li>
            </ul>
          </div>

          {/* IT Services */}
          <div>
            <h3 className="text-lg font-semibold mb-6 text-cyan-400 neon-text">IT Services</h3>
            <ul className="space-y-3">
              {itServices.slice(0, 8).map((service, index) => (
                <li key={index}>
                  <Link
                    to={service.url}
                    className="text-gray-300 hover:text-cyan-400 transition-colors duration-300 text-sm group flex items-center"
                  >
                    <ArrowRight className="w-3 h-3 mr-2 opacity-0 group-hover:opacity-100 transition-opacity" />
                    {service.name}
                  </Link>
                  <p className="text-xs text-gray-500 ml-5">{service.description}</p>
                </li>
              ))}
              <li>
                <Link
                  to="/it-services"
                  className="text-cyan-400 hover:text-cyan-300 transition-colors duration-200 text-sm font-medium"
                >
                  View All IT Services →
                </Link>
              </li>
            </ul>
          </div>

          {/* Emerging Technologies */}
          <div>
            <h3 className="text-lg font-semibold mb-6 text-cyan-400 neon-text">Emerging Tech</h3>
            <ul className="space-y-3">
              {emergingTech.slice(0, 8).map((service, index) => (
                <li key={index}>
                  <Link
                    to={service.url}
                    className="text-gray-300 hover:text-cyan-400 transition-colors duration-300 text-sm group flex items-center"
                  >
                    <ArrowRight className="w-3 h-3 mr-2 opacity-0 group-hover:opacity-100 transition-opacity" />
                    {service.name}
                  </Link>
                  <p className="text-xs text-gray-500 ml-5">{service.description}</p>
                </li>
              ))}
              <li>
                <Link
                  to="/quantum-computing"
                  className="text-cyan-400 hover:text-cyan-300 transition-colors duration-200 text-sm font-medium"
                >
                  View All Technologies →
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Contact Information */}
        <div className="bg-gradient-to-r from-purple-600/20 to-blue-600/20 rounded-lg p-6 mb-8 cyber-card-enhanced">
          <h3 className="text-xl font-bold text-white mb-4 text-center neon-text">Get In Touch</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="flex items-center space-x-3">
              <Phone className="w-5 h-5 text-cyan-400" />
              <div>
                <div className="text-white font-medium">{contactInfo.phone}</div>
                <div className="text-gray-400 text-sm">Call us anytime</div>
              </div>
            </div>
            <div className="flex items-center space-x-3">
              <Mail className="w-5 h-5 text-cyan-400" />
              <div>
                <div className="text-white font-medium">{contactInfo.email}</div>
                <div className="text-gray-400 text-sm">Email us</div>
              </div>
            </div>
            <div className="flex items-center space-x-3">
              <MapPin className="w-5 h-5 text-cyan-400" />
              <div>
                <div className="text-white font-medium">Middletown, DE</div>
                <div className="text-gray-400 text-sm">{contactInfo.address}</div>
              </div>
            </div>
            <div className="flex items-center space-x-3">
              <Clock className="w-5 h-5 text-cyan-400" />
              <div>
                <div className="text-white font-medium">{contactInfo.hours}</div>
                <div className="text-gray-400 text-sm">Business hours</div>
              </div>
            </div>
          </div>
        </div>

        {/* Company Links */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-8">
          <div>
            <h4 className="text-sm font-semibold text-white mb-4">Company</h4>
            <ul className="space-y-2">
              {companyLinks.map((link, index) => (
                <li key={index}>
                  <Link
                    to={link.url}
                    className="text-gray-400 hover:text-cyan-400 transition-colors duration-300 text-sm group flex items-center"
                  >
                    <ArrowRight className="w-3 h-3 mr-2 opacity-0 group-hover:opacity-100 transition-opacity" />
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-white mb-4">Support</h4>
            <ul className="space-y-2">
              {supportLinks.map((link, index) => (
                <li key={index}>
                  <Link
                    to={link.url}
                    className="text-gray-400 hover:text-cyan-400 transition-colors duration-300 text-sm group flex items-center"
                  >
                    <ArrowRight className="w-3 h-3 mr-2 opacity-0 group-hover:opacity-100 transition-opacity" />
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-white mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><Link to="/services" className="text-gray-400 hover:text-cyan-400 transition-colors duration-300 text-sm">All Services</Link></li>
              <li><Link to="/pricing" className="text-gray-400 hover:text-cyan-400 transition-colors duration-300 text-sm">Pricing</Link></li>
              <li><Link to="/demo" className="text-gray-400 hover:text-cyan-400 transition-colors duration-300 text-sm">Request Demo</Link></li>
              <li><Link to="/consultation" className="text-gray-400 hover:text-cyan-400 transition-colors duration-300 text-sm">Free Consultation</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="text-sm font-semibold text-white mb-4">Newsletter</h4>
            <p className="text-gray-400 text-sm mb-4">Stay updated with our latest news and offers.</p>
            <div className="flex space-x-2">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-3 py-2 bg-slate-800 border border-gray-600 rounded-lg text-white text-sm focus:outline-none focus:border-cyan-400"
              />
              <button className="px-4 py-2 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-lg hover:from-cyan-600 hover:to-blue-700 transition-all text-sm">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-700/50">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-sm text-gray-400">
              © {currentYear} Zion Tech Group. All rights reserved.
            </div>
            <div className="flex space-x-6">
              <Link to="/privacy" className="text-sm text-gray-400 hover:text-cyan-400 transition-colors">
                Privacy Policy
              </Link>
              <Link to="/terms" className="text-sm text-gray-400 hover:text-cyan-400 transition-colors">
                Terms of Service
              </Link>
              <Link to="/cookies" className="text-sm text-gray-400 hover:text-cyan-400 transition-colors">
                Cookie Policy
              </Link>
            </div>
            <div className="flex items-center space-x-6 text-sm text-gray-400">
              <div className="flex items-center space-x-2">
                <Shield className="w-4 h-4 text-green-400" />
                <span>Enterprise Security</span>
              </div>
              <div className="flex items-center space-x-2">
                <Award className="w-4 h-4 text-yellow-400" />
                <span>ISO 27001 Certified</span>
              </div>
              <div className="flex items-center space-x-2">
                <Globe className="w-4 h-4 text-blue-400" />
                <span>Global Reach</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
});

Footer.displayName = 'Footer';
export default Footer;
