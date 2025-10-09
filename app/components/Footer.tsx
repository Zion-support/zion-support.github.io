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
  TrendingUp
} from 'lucide-react';

const Footer: React.FC = memo(() => {
  const aiServices = [
    { name: 'AI Chatbot Platform', url: '/ai-services', description: 'Advanced conversational AI' },
    { name: 'AI Content Generation', url: '/ai-content-generation', description: 'AI-powered content creation' },
    { name: 'AI Data Analytics', url: '/ai-data-analytics', description: 'Machine learning insights' },
    { name: 'AI Cybersecurity', url: '/ai-cybersecurity', description: 'Intelligent security solutions' },
    { name: 'AI Marketing', url: '/ai-marketing', description: 'AI-powered marketing automation' },
    { name: 'AI Automation', url: '/ai-automation', description: 'Business process automation' }
  ];

  const itServices = [
    { name: 'Cloud Infrastructure', url: '/it-infrastructure', description: 'Enterprise cloud solutions' },
    { name: 'DevOps Automation', url: '/devops', description: 'CI/CD and automation' },
    { name: 'Database Management', url: '/database', description: 'Database optimization' },
    { name: 'Cybersecurity', url: '/cybersecurity', description: 'Security solutions' },
    { name: 'Network Services', url: '/networking', description: 'Network infrastructure' },
    { name: 'IT Support', url: '/it-services', description: '24/7 technical support' }
  ];

  const microSaasServices = [
    { name: 'AI SEO Optimizer', url: '/micro-saas', description: 'SEO automation tool' },
    { name: 'AI Code Reviewer', url: '/micro-saas', description: 'Automated code analysis' },
    { name: 'AI Social Media Manager', url: '/micro-saas', description: 'Social media automation' },
    { name: 'AI Email Marketing', url: '/micro-saas', description: 'Email automation suite' },
    { name: 'AI Project Manager', url: '/micro-saas', description: 'Project management tool' },
    { name: 'AI Customer Support', url: '/micro-saas', description: 'Support automation' }
  ];

  const emergingTech = [
    { name: 'Quantum Computing', url: '/quantum-computing', description: 'Next-gen computing' },
    { name: 'Blockchain & Web3', url: '/blockchain-web3', description: 'Decentralized solutions' },
    { name: 'IoT & Edge Computing', url: '/iot-edge-computing', description: 'Connected devices' },
    { name: 'Autonomous Systems', url: '/autonomous-systems', description: 'Self-managing systems' },
    { name: 'Business Intelligence', url: '/business-intelligence', description: 'Data-driven insights' }
  ];

  const companyLinks = [
    { name: 'About Us', url: '/about' },
    { name: 'Our Team', url: '/team' },
    { name: 'Careers', url: '/careers' },
    { name: 'Case Studies', url: '/case-studies' },
    { name: 'Blog', url: '/blog' },
    { name: 'News', url: '/news' }
  ];

  const supportLinks = [
    { name: 'Contact Us', url: '/contact' },
    { name: 'Support Center', url: '/support' },
    { name: 'Documentation', url: '/docs' },
    { name: 'API Reference', url: '/api-docs' },
    { name: 'System Status', url: '/status' },
    { name: 'Help Center', url: '/help' }
  ];

  const legalLinks = [
    { name: 'Privacy Policy', url: '/privacy' },
    { name: 'Terms of Service', url: '/terms' },
    { name: 'Cookie Policy', url: '/cookies' },
    { name: 'GDPR Compliance', url: '/gdpr' },
    { name: 'Security', url: '/security' },
    { name: 'Compliance', url: '/compliance' }
  ];

  const socialLinks = [
    { name: 'Twitter', url: 'https://twitter.com/ziontechgroup', icon: Twitter },
    { name: 'LinkedIn', url: 'https://linkedin.com/company/ziontechgroup', icon: Linkedin },
    { name: 'GitHub', url: 'https://github.com/ziontechgroup', icon: Github },
    { name: 'Facebook', url: 'https://facebook.com/ziontechgroup', icon: Facebook },
    { name: 'Instagram', url: 'https://instagram.com/ziontechgroup', icon: Instagram },
    { name: 'YouTube', url: 'https://youtube.com/ziontechgroup', icon: Youtube }
  ];

  return (
    <footer className="bg-slate-900 border-t border-cyan-500/20">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-lg flex items-center justify-center">
                <Zap className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold text-white">Zion Tech Group</span>
            </div>
            <p className="text-gray-300 mb-6 text-sm leading-relaxed">
              Leading provider of enterprise AI solutions, quantum computing, autonomous systems, and digital transformation services. 
              Transform your business with cutting-edge technology.
            </p>
            
            {/* Contact Info */}
            <div className="space-y-3">
              <div className="flex items-center space-x-2 text-sm text-cyan-300">
                <Phone className="w-4 h-4" />
                <a href="tel:+13024640950" className="hover:text-cyan-200 transition-colors">
                  +1 302 464 0950
                </a>
              </div>
              <div className="flex items-center space-x-2 text-sm text-cyan-300">
                <Mail className="w-4 h-4" />
                <a href="mailto:kleber@ziontechgroup.com" className="hover:text-cyan-200 transition-colors">
                  kleber@ziontechgroup.com
                </a>
              </div>
              <div className="flex items-center space-x-2 text-sm text-cyan-300">
                <MapPin className="w-4 h-4" />
                <span>364 E Main St STE 1008, Middletown DE 19709</span>
              </div>
            </div>

            {/* Social Links */}
            <div className="mt-6">
              <h4 className="text-white font-semibold mb-3">Follow Us</h4>
              <div className="flex space-x-3">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-8 h-8 bg-gray-800 hover:bg-cyan-500 rounded-lg flex items-center justify-center transition-colors group"
                    aria-label={social.name}
                  >
                    <social.icon className="w-4 h-4 text-gray-400 group-hover:text-white" />
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* AI Services */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <Brain className="w-5 h-5 text-purple-400" />
              <h3 className="text-lg font-semibold text-white">AI Services</h3>
            </div>
            <ul className="space-y-2">
              {aiServices.map((service, index) => (
                <li key={index}>
                  <Link
                    to={service.url}
                    className="text-gray-300 hover:text-cyan-400 transition-colors text-sm group"
                  >
                    <div className="font-medium group-hover:text-cyan-300">{service.name}</div>
                    <div className="text-xs text-gray-400 group-hover:text-gray-300">
                      {service.description}
                    </div>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* IT Services */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <Cloud className="w-5 h-5 text-blue-400" />
              <h3 className="text-lg font-semibold text-white">IT Services</h3>
            </div>
            <ul className="space-y-2">
              {itServices.map((service, index) => (
                <li key={index}>
                  <Link
                    to={service.url}
                    className="text-gray-300 hover:text-cyan-400 transition-colors text-sm group"
                  >
                    <div className="font-medium group-hover:text-cyan-300">{service.name}</div>
                    <div className="text-xs text-gray-400 group-hover:text-gray-300">
                      {service.description}
                    </div>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Micro SAAS & Company */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <Code className="w-5 h-5 text-green-400" />
              <h3 className="text-lg font-semibold text-white">Micro SAAS</h3>
            </div>
            <ul className="space-y-2 mb-6">
              {microSaasServices.map((service, index) => (
                <li key={index}>
                  <Link
                    to={service.url}
                    className="text-gray-300 hover:text-cyan-400 transition-colors text-sm group"
                  >
                    <div className="font-medium group-hover:text-cyan-300">{service.name}</div>
                    <div className="text-xs text-gray-400 group-hover:text-gray-300">
                      {service.description}
                    </div>
                  </Link>
                </li>
              ))}
            </ul>

            <div className="flex items-center space-x-2 mb-4">
              <Globe className="w-5 h-5 text-orange-400" />
              <h3 className="text-lg font-semibold text-white">Company</h3>
            </div>
            <ul className="space-y-2">
              {companyLinks.map((link, index) => (
                <li key={index}>
                  <Link
                    to={link.url}
                    className="text-gray-300 hover:text-cyan-400 transition-colors text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Stats Section */}
        <div className="mt-12 pt-8 border-t border-gray-700">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="text-2xl font-bold text-cyan-400 neon-text mb-1">50+</div>
              <div className="text-sm text-gray-300">Services Available</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-purple-400 neon-text mb-1">99.9%</div>
              <div className="text-sm text-gray-300">Uptime Guarantee</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-green-400 neon-text mb-1">24/7</div>
              <div className="text-sm text-gray-300">Expert Support</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-orange-400 neon-text mb-1">500+</div>
              <div className="text-sm text-gray-300">Happy Clients</div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="border-t border-gray-700 bg-slate-800/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-sm text-gray-400">
              © 2024 Zion Tech Group. All rights reserved. | 
              <span className="ml-2">Delaware, USA</span>
            </div>
            
            <div className="flex flex-wrap justify-center md:justify-end space-x-6">
              {legalLinks.map((link, index) => (
                <Link
                  key={index}
                  to={link.url}
                  className="text-sm text-gray-400 hover:text-cyan-400 transition-colors"
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
});

Footer.displayName = 'Footer';

export default Footer;