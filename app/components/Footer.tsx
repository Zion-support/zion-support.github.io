import React, { memo } from 'react';
import { Link } from 'react-router-dom';
import { 
  Phone, 
  Mail, 
  MapPin, 
  Clock, 
  Award, 
  Shield, 
  Zap, 
  ArrowRight, 
  Brain, 
  Cloud, 
  Code, 
  BarChart, 
  Users, 
  Globe, 
  Twitter, 
  Linkedin, 
  Github, 
  Facebook, 
  Instagram, 
  Youtube,
  Star,
  TrendingUp,
  Settings
} from 'lucide-react';

const Footer: React.FC = memo(() => {
  const aiServices = [
    { name: 'AI Solutions', url: '/ai-services', icon: Brain, description: 'Comprehensive AI solutions' },
    { name: 'AI Marketing', url: '/ai-marketing', icon: TrendingUp, description: 'AI-powered marketing automation' },
    { name: 'AI Automation', url: '/ai-automation', icon: Settings, description: 'Intelligent process automation' },
    { name: 'AI Healthcare', url: '/ai-healthcare', icon: Users, description: 'Medical AI solutions' },
    { name: 'AI Fintech', url: '/ai-fintech', icon: BarChart, description: 'Financial AI applications' },
    { name: 'AI Content Generation', url: '/ai-content-generation', icon: Code, description: 'AI content creation' },
    { name: 'AI Data Analytics', url: '/ai-data-analytics', icon: BarChart, description: 'Advanced data insights' },
    { name: 'AI Cybersecurity', url: '/ai-cybersecurity', icon: Shield, description: 'AI security solutions' },
    { name: 'AI Workflow Automation', url: '/ai-workflow-automation', icon: Settings, description: 'Workflow optimization' }
  ];

  const itServices = [
    { name: 'IT Solutions', url: '/it-services', icon: Code, description: 'Comprehensive IT support' },
    { name: 'IT Infrastructure', url: '/it-infrastructure', icon: Cloud, description: 'Enterprise infrastructure' },
    { name: 'Micro SAAS', url: '/micro-saas', icon: Star, description: '50+ ready-to-use apps' },
    { name: 'Cybersecurity', url: '/cybersecurity', icon: Shield, description: 'Security solutions' },
    { name: 'Cloud Infrastructure', url: '/ai-cloud-infrastructure', icon: Cloud, description: 'Cloud migration & setup' },
    { name: 'E-commerce Solutions', url: '/ai-ecommerce-solutions', icon: Globe, description: 'E-commerce platforms' },
    { name: 'Mobile App Development', url: '/ai-mobile-app-development', icon: Code, description: 'Mobile applications' },
    { name: 'Database Services', url: '/ai-data-analytics', icon: BarChart, description: 'Database management' }
  ];

  const emergingTech = [
    { name: 'Quantum Computing', url: '/quantum-computing', icon: Zap, description: 'Next-gen computing' },
    { name: 'Blockchain & Web3', url: '/blockchain-web3', icon: Shield, description: 'Decentralized solutions' },
    { name: 'IoT & Edge Computing', url: '/iot-edge-computing', icon: Globe, description: 'Connected devices' },
    { name: 'Autonomous Systems', url: '/autonomous-systems', icon: Settings, description: 'Self-managing systems' },
    { name: 'Robotics', url: '/robotics', icon: Code, description: 'Robotic solutions' },
    { name: 'Business Intelligence', url: '/business-intelligence', icon: BarChart, description: 'Data-driven insights' }
  ];

  const companyLinks = [
    { name: 'About Us', url: '/about' },
    { name: 'Our Team', url: '/team' },
    { name: 'Case Studies', url: '/case-studies' },
    { name: 'Blog', url: '/blog' },
    { name: 'Careers', url: '/careers' },
    { name: 'News', url: '/news' }
  ];

  const supportLinks = [
    { name: 'Contact Us', url: '/contact' },
    { name: 'Documentation', url: '/docs' },
    { name: 'API Reference', url: '/api-docs' },
    { name: 'Support Center', url: '/support' },
    { name: 'Status Page', url: '/status' },
    { name: 'System Status', url: '/system-status' }
  ];

  const legal = [
    { name: 'Privacy Policy', url: '/privacy' },
    { name: 'Terms of Service', url: '/terms' },
    { name: 'Cookie Policy', url: '/cookies' },
    { name: 'GDPR Compliance', url: '/gdpr' },
    { name: 'Security Policy', url: '/security' },
    { name: 'SLA Agreement', url: '/sla' }
  ];

  const socialLinks = [
    { name: 'Twitter', url: 'https://twitter.com/ziontechgroup', icon: Twitter },
    { name: 'LinkedIn', url: 'https://linkedin.com/company/ziontechgroup', icon: Linkedin },
    { name: 'GitHub', url: 'https://github.com/ziontechgroup', icon: Github },
    { name: 'Facebook', url: 'https://facebook.com/ziontechgroup', icon: Facebook },
    { name: 'Instagram', url: 'https://instagram.com/ziontechgroup', icon: Instagram },
    { name: 'YouTube', url: 'https://youtube.com/ziontechgroup', icon: Youtube }
  ];

  const contactInfo = {
    phone: '+1 302 464 0950',
    email: 'kleber@ziontechgroup.com',
    address: '364 E Main St STE 1008, Middletown, DE 19709',
    hours: 'Mon-Fri: 9AM-6PM EST'
  };

  return (
    <footer className="bg-gray-900 text-white">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <div className="flex items-center space-x-2 mb-6">
              <div className="w-8 h-8 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-lg flex items-center justify-center">
                <Zap className="w-5 h-5 text-white" />
              </div>
              <span className="text-2xl font-bold">Zion Tech Group</span>
            </div>
            <p className="text-gray-300 mb-6 leading-relaxed">
              Leading provider of AI-powered enterprise solutions, quantum computing, and autonomous systems. 
              Transform your business with cutting-edge technology.
            </p>
            
            {/* Contact Info */}
            <div className="space-y-3">
              <div className="flex items-center space-x-3 text-gray-300">
                <Phone className="w-4 h-4 text-cyan-400" />
                <a 
                  href={`tel:${contactInfo.phone}`}
                  className="hover:text-white transition-colors"
                >
                  {contactInfo.phone}
                </a>
              </div>
              <div className="flex items-center space-x-3 text-gray-300">
                <Mail className="w-4 h-4 text-cyan-400" />
                <a 
                  href={`mailto:${contactInfo.email}`}
                  className="hover:text-white transition-colors"
                >
                  {contactInfo.email}
                </a>
              </div>
              <div className="flex items-start space-x-3 text-gray-300">
                <MapPin className="w-4 h-4 text-cyan-400 mt-1" />
                <span className="text-sm">
                  {contactInfo.address}
                </span>
              </div>
              <div className="flex items-center space-x-3 text-gray-300">
                <Clock className="w-4 h-4 text-cyan-400" />
                <span className="text-sm">
                  {contactInfo.hours}
                </span>
              </div>
            </div>

            {/* Social Links */}
            <div className="mt-6">
              <h4 className="text-sm font-semibold text-white mb-3">Follow Us</h4>
              <div className="flex space-x-3">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-8 h-8 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-cyan-600 transition-colors"
                    aria-label={social.name}
                  >
                    <social.icon className="w-4 h-4" />
                  </a>
                ))}
              </div>
            </div>

            {/* Awards & Certifications */}
            <div className="mt-8">
              <div className="flex items-center space-x-2 mb-4">
                <Award className="w-5 h-5 text-yellow-400" />
                <span className="font-semibold text-gray-200">Certifications</span>
              </div>
              <div className="space-y-2 text-sm text-gray-400">
                <div>• ISO 27001 Certified</div>
                <div>• SOC 2 Type II Compliant</div>
                <div>• GDPR Compliant</div>
                <div>• AWS Advanced Partner</div>
              </div>
            </div>
          </div>

          {/* AI Services */}
          <div>
            <h3 className="text-lg font-semibold mb-6 flex items-center">
              <Brain className="w-5 h-5 mr-2 text-cyan-400" />
              AI Services
            </h3>
            <ul className="space-y-3">
              {aiServices.map((service, index) => (
                <li key={index}>
                  <Link
                    to={service.url}
                    className="flex items-center space-x-2 text-gray-300 hover:text-cyan-400 transition-colors duration-200 group"
                  >
                    <service.icon className="w-4 h-4 group-hover:scale-110 transition-transform" />
                    <span>{service.name}</span>
                    <ArrowRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* IT Services */}
          <div>
            <h3 className="text-lg font-semibold mb-6 flex items-center">
              <Code className="w-5 h-5 mr-2 text-cyan-400" />
              IT Services
            </h3>
            <ul className="space-y-3">
              {itServices.map((service, index) => (
                <li key={index}>
                  <Link
                    to={service.url}
                    className="flex items-center space-x-2 text-gray-300 hover:text-cyan-400 transition-colors duration-200 group"
                  >
                    <service.icon className="w-4 h-4 group-hover:scale-110 transition-transform" />
                    <span>{service.name}</span>
                    <ArrowRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </Link>
                </li>
              ))}
            </ul>

            {/* Emerging Technologies */}
            <div className="mt-8">
              <h4 className="text-md font-semibold mb-4 text-gray-200">Emerging Tech</h4>
              <ul className="space-y-2">
                {emergingTech.slice(0, 4).map((tech, index) => (
                  <li key={index}>
                    <Link
                      to={tech.url}
                      className="flex items-center space-x-2 text-sm text-gray-400 hover:text-cyan-400 transition-colors duration-200 group"
                    >
                      <tech.icon className="w-3 h-3 group-hover:scale-110 transition-transform" />
                      <span>{tech.name}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Company & Support */}
          <div>
            <h3 className="text-lg font-semibold mb-6 text-gray-200">Company</h3>
            <ul className="space-y-3 mb-8">
              {companyLinks.map((link, index) => (
                <li key={index}>
                  <Link
                    to={link.url}
                    className="text-gray-300 hover:text-cyan-400 transition-colors duration-200 group flex items-center"
                  >
                    <span>{link.name}</span>
                    <ArrowRight className="w-3 h-3 ml-2 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </Link>
                </li>
              ))}
            </ul>

            <h4 className="text-md font-semibold mb-4 text-gray-200">Support</h4>
            <ul className="space-y-2 mb-8">
              {supportLinks.map((link, index) => (
                <li key={index}>
                  <Link
                    to={link.url}
                    className="text-gray-300 hover:text-cyan-400 transition-colors duration-200 group flex items-center"
                  >
                    <span>{link.name}</span>
                    <ArrowRight className="w-3 h-3 ml-2 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </Link>
                </li>
              ))}
            </ul>

            <h4 className="text-md font-semibold mb-4 text-gray-200">Legal</h4>
            <ul className="space-y-2">
              {legal.map((link, index) => (
                <li key={index}>
                  <Link
                    to={link.url}
                    className="text-gray-300 hover:text-cyan-400 transition-colors duration-200 group flex items-center"
                  >
                    <span>{link.name}</span>
                    <ArrowRight className="w-3 h-3 ml-2 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-gray-400 text-sm">
              © 2024 Zion Tech Group. All rights reserved.
            </div>
            <div className="flex items-center space-x-6 text-sm text-gray-400">
              <span>Made with ❤️ in Delaware, USA</span>
              <span>•</span>
              <span>Proudly serving 500+ clients worldwide</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
});

Footer.displayName = 'Footer';

export default Footer;