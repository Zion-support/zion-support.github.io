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
    { name: 'AI Solutions', url: '/ai-services', icon: Brain },
    { name: 'AI Marketing', url: '/ai-marketing', icon: TrendingUp },
    { name: 'AI Automation', url: '/ai-automation', icon: Zap },
    { name: 'AI Healthcare', url: '/ai-healthcare', icon: Users },
    { name: 'AI Fintech', url: '/ai-fintech', icon: TrendingUp },
    { name: 'AI Data Analytics', url: '/ai-data-analytics', icon: BarChart },
    { name: 'AI Cybersecurity', url: '/ai-cybersecurity', icon: Shield },
    { name: 'AI Cloud Infrastructure', url: '/ai-cloud-infrastructure', icon: Cloud },
  ];

  const itServices = [
    { name: 'IT Solutions', url: '/it-services', icon: Code },
    { name: 'Micro SAAS', url: '/micro-saas', icon: Star },
    { name: 'Cybersecurity', url: '/cybersecurity', icon: Shield },
    { name: 'Cloud Infrastructure', url: '/ai-cloud-infrastructure', icon: Cloud },
    { name: 'E-commerce Solutions', url: '/ai-ecommerce-solutions', icon: Globe },
    { name: 'Mobile App Development', url: '/ai-mobile-app-development', icon: Code },
  ];

  const emergingTech = [
    { name: 'Quantum Computing', url: '/quantum-computing', icon: Zap },
    { name: 'Blockchain & Web3', url: '/blockchain', icon: Shield },
    { name: 'IoT & Edge Computing', url: '/iot-edge', icon: Globe },
    { name: 'Autonomous Systems', url: '/autonomous-systems', icon: Zap },
    { name: 'Robotics', url: '/robotics', icon: Code },
    { name: 'Business Intelligence', url: '/business-intelligence', icon: BarChart },
  ];

  const companyLinks = [
    { name: 'About Us', url: '/about' },
    { name: 'Our Team', url: '/team' },
    { name: 'Case Studies', url: '/case-studies' },
    { name: 'Blog', url: '/blog' },
    { name: 'Careers', url: '/careers' },
    { name: 'Contact', url: '/contact' },
  ];

  const supportLinks = [
    { name: 'Documentation', url: '/docs' },
    { name: 'API Reference', url: '/api-docs' },
    { name: 'Support Center', url: '/support' },
    { name: 'System Status', url: '/status' },
    { name: 'Privacy Policy', url: '/privacy' },
    { name: 'Terms of Service', url: '/terms' },
  ];

  const socialLinks = [
    { name: 'Twitter', url: 'https://twitter.com/ziontechgroup', icon: Twitter },
    { name: 'LinkedIn', url: 'https://linkedin.com/company/ziontechgroup', icon: Linkedin },
    { name: 'GitHub', url: 'https://github.com/ziontechgroup', icon: Github },
    { name: 'Facebook', url: 'https://facebook.com/ziontechgroup', icon: Facebook },
    { name: 'Instagram', url: 'https://instagram.com/ziontechgroup', icon: Instagram },
    { name: 'YouTube', url: 'https://youtube.com/@ziontechgroup', icon: Youtube },
  ];

  return (
    <footer className="bg-slate-900 text-white">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-6">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-r from-purple-600 to-blue-600 rounded-lg flex items-center justify-center">
                <Brain className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold">Zion Tech Group</span>
            </div>
            <p className="text-gray-300 leading-relaxed">
              Leading provider of AI-powered enterprise solutions, quantum computing, autonomous systems, and digital transformation services.
            </p>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Phone className="w-4 h-4 text-cyan-400" />
                <a href="tel:+13024640950" className="text-gray-300 hover:text-cyan-400 transition-colors">
                  +1 302 464 0950
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-4 h-4 text-cyan-400" />
                <a href="mailto:kleber@ziontechgroup.com" className="text-gray-300 hover:text-cyan-400 transition-colors">
                  kleber@ziontechgroup.com
                </a>
              </div>
              <div className="flex items-start space-x-3">
                <MapPin className="w-4 h-4 text-cyan-400 mt-1" />
                <span className="text-gray-300">
                  364 E Main St STE 1008<br />
                  Middletown DE 19709
                </span>
              </div>
            </div>
          </div>

          {/* AI Services */}
          <div className="space-y-6">
            <h3 className="text-lg font-semibold text-white flex items-center">
              <Brain className="w-5 h-5 mr-2 text-purple-400" />
              AI Services
            </h3>
            <ul className="space-y-3">
              {aiServices.map((service, index) => (
                <li key={index}>
                  <Link 
                    to={service.url} 
                    className="flex items-center space-x-2 text-gray-300 hover:text-cyan-400 transition-colors group"
                  >
                    <service.icon className="w-4 h-4" />
                    <span>{service.name}</span>
                    <ArrowRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* IT Services */}
          <div className="space-y-6">
            <h3 className="text-lg font-semibold text-white flex items-center">
              <Code className="w-5 h-5 mr-2 text-blue-400" />
              IT Services
            </h3>
            <ul className="space-y-3">
              {itServices.map((service, index) => (
                <li key={index}>
                  <Link 
                    to={service.url} 
                    className="flex items-center space-x-2 text-gray-300 hover:text-cyan-400 transition-colors group"
                  >
                    <service.icon className="w-4 h-4" />
                    <span>{service.name}</span>
                    <ArrowRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Emerging Tech */}
          <div className="space-y-6">
            <h3 className="text-lg font-semibold text-white flex items-center">
              <Zap className="w-5 h-5 mr-2 text-green-400" />
              Emerging Tech
            </h3>
            <ul className="space-y-3">
              {emergingTech.map((tech, index) => (
                <li key={index}>
                  <Link 
                    to={tech.url} 
                    className="flex items-center space-x-2 text-gray-300 hover:text-cyan-400 transition-colors group"
                  >
                    <tech.icon className="w-4 h-4" />
                    <span>{tech.name}</span>
                    <ArrowRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Additional Links */}
        <div className="mt-12 pt-8 border-t border-gray-700">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Company Links */}
            <div>
              <h4 className="text-sm font-semibold text-white mb-4">Company</h4>
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

            {/* Support Links */}
            <div>
              <h4 className="text-sm font-semibold text-white mb-4">Support</h4>
              <ul className="space-y-2">
                {supportLinks.map((link, index) => (
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

            {/* Social Links */}
            <div>
              <h4 className="text-sm font-semibold text-white mb-4">Follow Us</h4>
              <div className="flex space-x-4">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-300 hover:text-cyan-400 transition-colors"
                    aria-label={social.name}
                  >
                    <social.icon className="w-5 h-5" />
                  </a>
                ))}
              </div>
            </div>

            {/* Newsletter */}
            <div>
              <h4 className="text-sm font-semibold text-white mb-4">Newsletter</h4>
              <p className="text-gray-300 text-sm mb-4">
                Stay updated with our latest AI innovations and tech insights.
              </p>
              <div className="flex">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-3 py-2 bg-gray-800 border border-gray-600 rounded-l-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                />
                <button className="px-4 py-2 bg-cyan-600 text-white rounded-r-lg hover:bg-cyan-700 transition-colors">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="bg-slate-800 border-t border-gray-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-gray-300 text-sm">
              © 2024 Zion Tech Group. All rights reserved.
            </div>
            <div className="flex items-center space-x-6 text-sm text-gray-300">
              <span className="flex items-center">
                <Clock className="w-4 h-4 mr-1" />
                24/7 Support
              </span>
              <span className="flex items-center">
                <Award className="w-4 h-4 mr-1" />
                Enterprise Grade
              </span>
              <span className="flex items-center">
                <Shield className="w-4 h-4 mr-1" />
                Secure & Compliant
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