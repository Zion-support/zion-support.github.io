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
  Home,
  Info,
  Contact,
  MessageSquare,
  Settings,
  Star,
  CheckCircle
} from 'lucide-react';

const Footer: React.FC = memo(() => {
  const aiServices = [
    { name: 'AI Consulting & Strategy', url: '/ai-services', description: 'Strategic AI planning' },
    { name: 'Machine Learning Solutions', url: '/ai-services', description: 'Custom ML models' },
    { name: 'Natural Language Processing', url: '/ai-services', description: 'NLP & chatbots' },
    { name: 'Computer Vision', url: '/ai-services', description: 'Image & video analysis' },
    { name: 'AI Automation', url: '/ai-automation', description: 'Process automation' },
    { name: 'AI Marketing', url: '/ai-marketing', description: 'Marketing automation' },
    { name: 'AI Healthcare', url: '/ai-healthcare', description: 'Medical AI solutions' },
    { name: 'AI Fintech', url: '/ai-fintech', description: 'Financial AI' }
  ];

  const itServices = [
    { name: 'IT Infrastructure', url: '/it-infrastructure', description: 'Infrastructure management' },
    { name: 'Cloud Migration', url: '/it-services', description: 'Cloud services' },
    { name: 'Cybersecurity', url: '/cybersecurity', description: 'Security solutions' },
    { name: 'Custom Development', url: '/it-services', description: 'Software development' },
    { name: 'DevOps & CI/CD', url: '/it-services', description: 'DevOps automation' },
    { name: '24/7 IT Support', url: '/it-services', description: 'Technical support' },
    { name: 'Database Management', url: '/it-services', description: 'Database services' },
    { name: 'Network Security', url: '/it-services', description: 'Network protection' }
  ];

  const microSaasServices = [
    { name: 'AI Code Review Assistant', url: '/micro-saas', description: 'Automated code review' },
    { name: 'AI SEO Optimizer', url: '/micro-saas', description: 'SEO optimization' },
    { name: 'AI Content Generator', url: '/ai-content-generation', description: 'Content creation' },
    { name: 'AI Business Intelligence', url: '/business-intelligence', description: 'BI dashboards' },
    { name: 'AI Customer Analytics', url: '/micro-saas', description: 'Customer insights' },
    { name: 'AI Marketing Automation', url: '/ai-marketing', description: 'Marketing tools' },
    { name: 'AI Email Marketing', url: '/micro-saas', description: 'Email automation' },
    { name: 'AI Social Media Manager', url: '/micro-saas', description: 'Social media tools' }
  ];

  const companyLinks = [
    { name: 'About Us', url: '/about', icon: Info },
    { name: 'Our Team', url: '/team', icon: Users },
    { name: 'Case Studies', url: '/case-studies', icon: BarChart },
    { name: 'Blog', url: '/blog', icon: MessageSquare },
    { name: 'Careers', url: '/careers', icon: Star },
    { name: 'Privacy Policy', url: '/privacy', icon: Shield },
    { name: 'Terms of Service', url: '/terms', icon: Settings },
    { name: 'Contact Us', url: '/contact', icon: Contact }
  ];

  const socialLinks = [
    { name: 'Twitter', url: 'https://twitter.com/ziontechgroup', icon: Twitter },
    { name: 'LinkedIn', url: 'https://linkedin.com/company/ziontechgroup', icon: Linkedin },
    { name: 'GitHub', url: 'https://github.com/ziontechgroup', icon: Github },
    { name: 'Facebook', url: 'https://facebook.com/ziontechgroup', icon: Facebook },
    { name: 'Instagram', url: 'https://instagram.com/ziontechgroup', icon: Instagram },
    { name: 'YouTube', url: 'https://youtube.com/@ziontechgroup', icon: Youtube }
  ];

  return (
    <footer className="bg-slate-900/95 backdrop-blur-md border-t border-cyan-500/20">
      {/* Main Footer Content */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-6">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-r from-cyan-400 to-purple-500 rounded-lg flex items-center justify-center">
                <Brain className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold text-white neon-text-enhanced">Zion Tech Group</span>
            </div>
            <p className="text-gray-300 text-sm leading-relaxed">
              Leading provider of AI-powered enterprise solutions, quantum computing, autonomous systems, 
              and digital transformation services. Transform your business with cutting-edge technology.
            </p>
            
            {/* Contact Info */}
            <div className="space-y-3">
              <div className="flex items-center space-x-3 text-gray-300">
                <Phone className="w-4 h-4 text-cyan-400" />
                <a href="tel:+13024640950" className="hover:text-cyan-400 transition-colors duration-300">
                  +1 (302) 464-0950
                </a>
              </div>
              <div className="flex items-center space-x-3 text-gray-300">
                <Mail className="w-4 h-4 text-cyan-400" />
                <a href="mailto:kleber@ziontechgroup.com" className="hover:text-cyan-400 transition-colors duration-300">
                  kleber@ziontechgroup.com
                </a>
              </div>
              <div className="flex items-start space-x-3 text-gray-300">
                <MapPin className="w-4 h-4 text-cyan-400 mt-1" />
                <span className="text-sm">
                  364 E Main St STE 1008<br />
                  Middletown, DE 19709
                </span>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-slate-800 rounded-lg flex items-center justify-center text-gray-400 hover:text-cyan-400 hover:bg-cyan-500/10 transition-all duration-300"
                  aria-label={social.name}
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* AI Services */}
          <div className="space-y-6">
            <h3 className="text-lg font-semibold text-white flex items-center">
              <Brain className="w-5 h-5 text-cyan-400 mr-2" />
              AI Services
            </h3>
            <ul className="space-y-3">
              {aiServices.map((service, index) => (
                <li key={index}>
                  <Link
                    to={service.url}
                    className="text-gray-300 hover:text-cyan-400 transition-colors duration-300 text-sm flex items-start group"
                  >
                    <ArrowRight className="w-3 h-3 text-cyan-400 mr-2 mt-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    <div>
                      <div className="font-medium">{service.name}</div>
                      <div className="text-xs text-gray-500">{service.description}</div>
                    </div>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* IT Services */}
          <div className="space-y-6">
            <h3 className="text-lg font-semibold text-white flex items-center">
              <Cloud className="w-5 h-5 text-cyan-400 mr-2" />
              IT Services
            </h3>
            <ul className="space-y-3">
              {itServices.map((service, index) => (
                <li key={index}>
                  <Link
                    to={service.url}
                    className="text-gray-300 hover:text-cyan-400 transition-colors duration-300 text-sm flex items-start group"
                  >
                    <ArrowRight className="w-3 h-3 text-cyan-400 mr-2 mt-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    <div>
                      <div className="font-medium">{service.name}</div>
                      <div className="text-xs text-gray-500">{service.description}</div>
                    </div>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Micro SAAS & Company Links */}
          <div className="space-y-6">
            <h3 className="text-lg font-semibold text-white flex items-center">
              <Zap className="w-5 h-5 text-cyan-400 mr-2" />
              Micro SAAS
            </h3>
            <ul className="space-y-3 mb-8">
              {microSaasServices.map((service, index) => (
                <li key={index}>
                  <Link
                    to={service.url}
                    className="text-gray-300 hover:text-cyan-400 transition-colors duration-300 text-sm flex items-start group"
                  >
                    <ArrowRight className="w-3 h-3 text-cyan-400 mr-2 mt-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    <div>
                      <div className="font-medium">{service.name}</div>
                      <div className="text-xs text-gray-500">{service.description}</div>
                    </div>
                  </Link>
                </li>
              ))}
            </ul>

            <h3 className="text-lg font-semibold text-white flex items-center">
              <Globe className="w-5 h-5 text-cyan-400 mr-2" />
              Company
            </h3>
            <ul className="space-y-2">
              {companyLinks.map((link, index) => (
                <li key={index}>
                  <Link
                    to={link.url}
                    className="text-gray-300 hover:text-cyan-400 transition-colors duration-300 text-sm flex items-center group"
                  >
                    <link.icon className="w-4 h-4 mr-2" />
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Newsletter Signup */}
      <div className="border-t border-cyan-500/20 bg-slate-800/50">
        <div className="container mx-auto px-4 py-8">
          <div className="max-w-4xl mx-auto text-center">
            <h3 className="text-2xl font-bold text-white mb-4 neon-text-enhanced">
              Stay Updated with AI & Tech Trends
            </h3>
            <p className="text-gray-300 mb-6">
              Get the latest insights on AI, technology, and business transformation delivered to your inbox.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 bg-slate-700 border border-cyan-500/30 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20"
              />
              <button className="cyber-button-enhanced px-6 py-3">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-cyan-500/20 bg-slate-900/95">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-gray-400 text-sm">
              © 2024 Zion Tech Group. All rights reserved.
            </div>
            <div className="flex items-center space-x-6 text-sm text-gray-400">
              <span className="flex items-center">
                <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                Enterprise Security
              </span>
              <span className="flex items-center">
                <Award className="w-4 h-4 text-yellow-400 mr-2" />
                ISO Certified
              </span>
              <span className="flex items-center">
                <Shield className="w-4 h-4 text-blue-400 mr-2" />
                SOC 2 Compliant
              </span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
});

Footer.displayName = 'Footer';

export default Footer;