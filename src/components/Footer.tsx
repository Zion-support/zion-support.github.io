import React, { memo } from 'react';
import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, ArrowRight, Facebook, Twitter, Linkedin, Instagram, Youtube, Github } from 'lucide-react';

const Footer: React.FC = memo(() => {
  const currentYear = new Date().getFullYear();

  const aiServices = [
    { name: 'Machine Learning', description: 'Custom ML models and analytics', url: '/ai-services' },
    { name: 'Natural Language Processing', description: 'Advanced text analysis and understanding', url: '/ai-services' },
    { name: 'Computer Vision', description: 'Image and video analysis solutions', url: '/ai-services' },
    { name: 'AI Automation', description: 'Intelligent process automation', url: '/ai-services' },
    { name: 'AI Healthcare', description: 'Medical AI for diagnosis and treatment', url: '/ai-services' },
    { name: 'AI Fintech', description: 'Fintech AI for fraud detection and trading', url: '/ai-services' },
    { name: 'AI Cybersecurity', description: 'AI security solutions and threat detection', url: '/ai-services' },
    { name: 'AI Content Generation', description: 'AI-powered content creation', url: '/ai-services' }
  ];

  const itServices = [
    { name: 'Cloud Services', description: 'Cloud migration, setup, and optimization', url: '/it-services' },
    { name: 'Cybersecurity', description: 'Advanced security solutions', url: '/it-services' },
    { name: 'DevOps', description: 'Streamlined development workflows', url: '/it-services' },
    { name: 'Database Management', description: 'Database design and optimization', url: '/it-services' },
    { name: 'Infrastructure', description: 'Enterprise-grade infrastructure', url: '/it-services' },
    { name: 'Network Solutions', description: 'Network design and implementation', url: '/it-services' },
    { name: 'IT Consulting', description: 'Strategic IT planning', url: '/it-services' },
    { name: 'IT Support', description: '24/7 IT support and maintenance', url: '/it-services' }
  ];

  const microSaasServices = [
    { name: 'AI Project Manager', description: 'Intelligent project planning', url: '/micro-saas' },
    { name: 'AI Social Media Manager', description: 'Automated social media management', url: '/micro-saas' },
    { name: 'AI Business Intelligence', description: 'AI-powered business intelligence', url: '/micro-saas' },
    { name: 'AI Email Marketing', description: 'Intelligent email campaigns', url: '/micro-saas' },
    { name: 'AI Customer Support Bot', description: '24/7 AI customer support', url: '/micro-saas' },
    { name: 'AI Code Generation', description: 'Automated code analysis', url: '/micro-saas' },
    { name: 'AI Invoice Generator', description: 'Automated invoice creation', url: '/micro-saas' },
    { name: 'AI Lead Generation', description: 'Intelligent lead qualification', url: '/micro-saas' }
  ];

  const emergingTech = [
    { name: 'Quantum Computing', description: 'Quantum solutions', url: '/quantum-computing' },
    { name: 'Autonomous Systems', description: 'Intelligent robotics', url: '/autonomous-systems' },
    { name: 'IoT Solutions', description: 'Connected devices', url: '/iot-solutions' },
    { name: 'Blockchain', description: 'Decentralized solutions', url: '/blockchain' },
    { name: 'Big Data Analytics', description: 'Data insights', url: '/big-data' },
    { name: 'Edge Computing', description: 'Self-managing systems', url: '/edge-computing' },
    { name: 'AR/VR Solutions', description: 'Immersive experiences', url: '/ar-vr-solutions' },
    { name: 'Smart Cities', description: 'Urban technology solutions', url: '/smart-cities' }
  ];

  const companyLinks = [
    { name: 'About Us', url: '/about' },
    { name: 'Our Team', url: '/team' },
    { name: 'Careers', url: '/careers' },
    { name: 'Case Studies', url: '/case-studies' },
    { name: 'Blog', url: '/blog' },
    { name: 'Contact', url: '/contact' }
  ];

  const supportLinks = [
    { name: 'Help Center', url: '/help' },
    { name: 'Documentation', url: '/docs' },
    { name: 'API Documentation', url: '/api-docs' },
    { name: 'Support', url: '/support' },
    { name: 'System Status', url: '/status' },
    { name: 'Requirements', url: '/requirements' },
    { name: 'Troubleshooting', url: '/troubleshooting' }
  ];

  const legalLinks = [
    { name: 'Privacy Policy', url: '/privacy' },
    { name: 'Terms of Service', url: '/terms' },
    { name: 'Cookie Policy', url: '/cookies' },
    { name: 'GDPR Compliance', url: '/gdpr' },
    { name: 'Security', url: '/security' },
    { name: 'Compliance', url: '/compliance' }
  ];

  return (
    <footer className="bg-slate-900 border-t border-cyan-400/20 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900"></div>
      <div className="absolute inset-0 cyber-grid opacity-10"></div>
      <div className="relative z-10">
        {/* Main Footer Content */}
        <div className="container mx-auto px-4 py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            {/* Company Info */}
            <div className="lg:col-span-1">
              <div className="flex items-center space-x-2 mb-6">
                <div className="w-10 h-10 bg-gradient-to-br from-cyan-400 to-purple-600 rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-lg">Z</span>
                </div>
                <div>
                  <h2 className="text-xl font-bold text-white">Zion Tech Group</h2>
                  <p className="text-xs text-cyan-400">AI & IT Solutions</p>
                </div>
              </div>
              <p className="text-gray-300 mb-6 text-sm leading-relaxed">
                Leading provider of AI-powered enterprise solutions, quantum computing, autonomous systems, and digital transformation services.
              </p>
              
              {/* Contact Info */}
              <div className="space-y-3 mb-6">
                <div className="flex items-center space-x-3 text-gray-300">
                  <Phone className="w-4 h-4 text-cyan-400" />
                  <a href="tel:+13024640950" className="hover:text-cyan-400 transition-colors">
                    +1 302 464-0950
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
                  <span>364 E Main St STE 1008<br />Middletown, DE 19709</span>
                </div>
              </div>
              
              {/* Social Links */}
              <div className="flex space-x-4">
                <a href="#" className="text-gray-400 hover:text-cyan-400 transition-colors">
                  <Facebook className="w-5 h-5" />
                </a>
                <a href="#" className="text-gray-400 hover:text-cyan-400 transition-colors">
                  <Twitter className="w-5 h-5" />
                </a>
                <a href="#" className="text-gray-400 hover:text-cyan-400 transition-colors">
                  <Linkedin className="w-5 h-5" />
                </a>
                <a href="#" className="text-gray-400 hover:text-cyan-400 transition-colors">
                  <Instagram className="w-5 h-5" />
                </a>
                <a href="#" className="text-gray-400 hover:text-cyan-400 transition-colors">
                  <Youtube className="w-5 h-5" />
                </a>
                <a href="#" className="text-gray-400 hover:text-cyan-400 transition-colors">
                  <Github className="w-5 h-5" />
                </a>
              </div>
            </div>

            {/* AI Services */}
            <div>
              <h3 className="text-lg font-semibold mb-6 text-cyan-400">AI Services</h3>
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
                    className="text-cyan-400 hover:text-cyan-300 transition-colors duration-300 text-sm font-medium flex items-center"
                  >
                    View All AI Services →
                  </Link>
                </li>
              </ul>
            </div>

            {/* IT Services */}
            <div>
              <h3 className="text-lg font-semibold mb-6 text-blue-400">IT Services</h3>
              <ul className="space-y-3">
                {itServices.slice(0, 8).map((service, index) => (
                  <li key={index}>
                    <Link 
                      to={service.url} 
                      className="text-gray-300 hover:text-blue-400 transition-colors duration-300 text-sm group flex items-center"
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
                    className="text-blue-400 hover:text-blue-300 transition-colors duration-300 text-sm font-medium flex items-center"
                  >
                    View All IT Services →
                  </Link>
                </li>
              </ul>
            </div>

            {/* Micro SAAS Solutions */}
            <div>
              <h3 className="text-lg font-semibold mb-6 text-green-400">Micro SAAS</h3>
              <ul className="space-y-3">
                {microSaasServices.slice(0, 8).map((service, index) => (
                  <li key={index}>
                    <Link 
                      to={service.url} 
                      className="text-gray-300 hover:text-green-400 transition-colors duration-300 text-sm group flex items-center"
                    >
                      <ArrowRight className="w-3 h-3 mr-2 opacity-0 group-hover:opacity-100 transition-opacity" />
                      {service.name}
                    </Link>
                    <p className="text-xs text-gray-500 ml-5">{service.description}</p>
                  </li>
                ))}
                <li>
                  <Link 
                    to="/micro-saas" 
                    className="text-green-400 hover:text-green-300 transition-colors duration-300 text-sm font-medium flex items-center"
                  >
                    View All Micro SAAS →
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          {/* Additional Services Row */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {/* Emerging Technologies */}
            <div>
              <h3 className="text-lg font-semibold mb-6 text-purple-400">Emerging Tech</h3>
              <ul className="space-y-3">
                {emergingTech.slice(0, 6).map((service, index) => (
                  <li key={index}>
                    <Link 
                      to={service.url} 
                      className="text-gray-300 hover:text-purple-400 transition-colors duration-300 text-sm group flex items-center"
                    >
                      <ArrowRight className="w-3 h-3 mr-2 opacity-0 group-hover:opacity-100 transition-opacity" />
                      {service.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Company Links */}
            <div>
              <h3 className="text-lg font-semibold mb-6 text-pink-400">Company</h3>
              <ul className="space-y-3">
                {companyLinks.map((link, index) => (
                  <li key={index}>
                    <Link 
                      to={link.url} 
                      className="text-gray-300 hover:text-pink-400 transition-colors duration-300 text-sm group flex items-center"
                    >
                      <ArrowRight className="w-3 h-3 mr-2 opacity-0 group-hover:opacity-100 transition-opacity" />
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Support Links */}
            <div>
              <h3 className="text-lg font-semibold mb-6 text-orange-400">Support</h3>
              <ul className="space-y-3">
                {supportLinks.map((link, index) => (
                  <li key={index}>
                    <Link 
                      to={link.url} 
                      className="text-gray-300 hover:text-orange-400 transition-colors duration-300 text-sm group flex items-center"
                    >
                      <ArrowRight className="w-3 h-3 mr-2 opacity-0 group-hover:opacity-100 transition-opacity" />
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Stats Section */}
          <div className="bg-slate-800/50 rounded-2xl p-8 mb-12 border border-cyan-400/20">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-cyan-400 mb-2">500+</div>
                <div className="text-gray-300 text-sm">Projects Completed</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-green-400 mb-2">99.9%</div>
                <div className="text-gray-300 text-sm">Uptime Guarantee</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-purple-400 mb-2">24/7</div>
                <div className="text-gray-300 text-sm">Support Available</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-pink-400 mb-2">50+</div>
                <div className="text-gray-300 text-sm">Countries Served</div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="border-t border-gray-700 bg-slate-800/30">
          <div className="container mx-auto px-4 py-6">
            <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
              <div className="text-gray-400 text-sm">
                © {currentYear} Zion Tech Group. All rights reserved.
              </div>
              <div className="flex flex-wrap justify-center md:justify-end space-x-6">
                {legalLinks.map((link, index) => (
                  <Link
                    key={index}
                    to={link.url} 
                    className="text-gray-400 hover:text-cyan-400 transition-colors text-sm"
                  >
                    {link.name}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
});

export default Footer;