import React, { useMemo } from "react";
import { Link } from "react-router-dom";
import { 
  Linkedin, 
  Twitter, 
  Github, 
  Phone, 
  Mail, 
  MapPin, 
  ArrowRight,
  Zap,
  Cloud,
  Shield,
  Globe,
  BarChart3,
  FileText,
  Target,
  Settings,
  Brain,
  Cpu,
  Code,
  Smartphone,
  Database,
  Lock,
  Award,
  Users,
  Clock
} from "lucide-react";

const Footer = React.memo(() => {
  const currentYear = new Date().getFullYear();

  const socialLinks = useMemo(() => [
    {
      name: "Twitter",
      url: "https://twitter.com/ziontechgroup",
      icon: <Twitter className="w-5 h-5" />,
    },
    {
      name: "LinkedIn",
      url: "https://linkedin.com/company/ziontechgroup",
      icon: <Linkedin className="w-5 h-5" />,
    },
    {
      name: "GitHub",
      url: "https://github.com/ziontechgroup",
      icon: <Github className="w-5 h-5" />,
    },
  ], []);

  const aiServices = useMemo(() => [
    { name: 'AI Chatbots', path: '/ai-chatbot-enterprise' },
    { name: 'Machine Learning', path: '/ai-analytics' },
    { name: 'Computer Vision', path: '/ai-computer-vision' },
    { name: 'Content Generation', path: '/ai-content-generation-pro' },
    { name: 'Business Intelligence', path: '/ai-business-intelligence-pro' },
    { name: 'Cybersecurity AI', path: '/ai-cybersecurity-suite-pro' }
  ], []);

  const itServices = useMemo(() => [
    { name: 'Cloud Infrastructure', path: '/cloud-infrastructure' },
    { name: 'Cybersecurity', path: '/cybersecurity-solutions' },
    { name: 'Web Development', path: '/web-development' },
    { name: 'Mobile Development', path: '/mobile-development' },
    { name: 'Database Management', path: '/database-management' },
    { name: '5G Solutions', path: '/5g-solutions' }
  ], []);

  const microSaasServices = useMemo(() => [
    { name: 'Zion Analytics Pro', path: '/zion-analytics-pro' },
    { name: 'Zion Security Shield', path: '/zion-security-shield' },
    { name: 'Zion Cloud Vault', path: '/zion-cloud-vault' },
    { name: 'Zion Content Studio', path: '/zion-content-studio' },
    { name: 'Zion Lead Magnet', path: '/zion-lead-magnet' },
    { name: 'Zion Project Master', path: '/zion-project-master' }
  ], []);

  const companyLinks = useMemo(() => [
    { name: 'About Us', path: '/about' },
    { name: 'Careers', path: '/careers' },
    { name: 'Case Studies', path: '/case-studies' },
    { name: 'Blog', path: '/blog' },
    { name: 'Pricing', path: '/pricing' },
    { name: 'Contact', path: '/contact' }
  ], []);

  const supportLinks = useMemo(() => [
    { name: 'Help Center', path: '/support' },
    { name: 'Documentation', path: '/docs' },
    { name: 'API Reference', path: '/api' },
    { name: 'Status Page', path: '/status' },
    { name: 'Consultation', path: '/consultation' },
    { name: 'Demo', path: '/demo' }
  ], []);

  const legalLinks = useMemo(() => [
    { name: 'Privacy Policy', path: '/privacy' },
    { name: 'Terms of Service', path: '/terms' },
    { name: 'Cookie Policy', path: '/cookies' },
    { name: 'Sitemap', path: '/sitemap' }
  ], []);

  return (
    <footer className="bg-gray-900/95 backdrop-blur-md text-white border-t border-cyan-500/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8 mb-12">
          {/* Company Info */}
          <div className="lg:col-span-2 space-y-6">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-xl">Z</span>
              </div>
              <span className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                Zion Tech Group
              </span>
            </div>
            <p className="text-gray-400 text-sm max-w-md leading-relaxed">
              Leading provider of AI-powered solutions, 5G implementation, and enterprise IT services. 
              We help businesses transform with cutting-edge technology and innovative solutions.
            </p>
            
            {/* Contact Info */}
            <div className="space-y-3">
              <div className="flex items-center space-x-3 text-gray-400">
                <Phone className="w-4 h-4 text-cyan-400" />
                <span className="text-sm">+1 302 464 0950</span>
              </div>
              <div className="flex items-center space-x-3 text-gray-400">
                <Mail className="w-4 h-4 text-cyan-400" />
                <span className="text-sm">kleber@ziontechgroup.com</span>
              </div>
              <div className="flex items-start space-x-3 text-gray-400">
                <MapPin className="w-4 h-4 text-cyan-400 mt-0.5" />
                <span className="text-sm">364 E Main St STE 1008<br />Middletown DE 19709</span>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex space-x-4">
              {socialLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-cyan-400 transition-colors duration-300 p-2 hover:bg-cyan-500/10 rounded-lg"
                  aria-label={link.name}
                >
                  {link.icon}
                </a>
              ))}
            </div>
          </div>

          {/* AI Services */}
          <div>
            <h4 className="text-lg font-semibold mb-6 text-cyan-400 flex items-center">
              <Brain className="w-5 h-5 mr-2" />
              AI Services
            </h4>
            <ul className="space-y-3">
              {aiServices.map((service) => (
                <li key={service.name}>
                  <Link
                    to={service.path}
                    className="text-gray-400 hover:text-cyan-400 transition-colors duration-300 text-sm flex items-center group"
                  >
                    <ArrowRight className="w-3 h-3 mr-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* IT Services */}
          <div>
            <h4 className="text-lg font-semibold mb-6 text-cyan-400 flex items-center">
              <Code className="w-5 h-5 mr-2" />
              IT Services
            </h4>
            <ul className="space-y-3">
              {itServices.map((service) => (
                <li key={service.name}>
                  <Link
                    to={service.path}
                    className="text-gray-400 hover:text-cyan-400 transition-colors duration-300 text-sm flex items-center group"
                  >
                    <ArrowRight className="w-3 h-3 mr-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Micro SAAS */}
          <div>
            <h4 className="text-lg font-semibold mb-6 text-cyan-400 flex items-center">
              <Zap className="w-5 h-5 mr-2" />
              Micro SAAS
            </h4>
            <ul className="space-y-3">
              {microSaasServices.map((service) => (
                <li key={service.name}>
                  <Link
                    to={service.path}
                    className="text-gray-400 hover:text-cyan-400 transition-colors duration-300 text-sm flex items-center group"
                  >
                    <ArrowRight className="w-3 h-3 mr-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company & Support */}
          <div>
            <h4 className="text-lg font-semibold mb-6 text-cyan-400 flex items-center">
              <Users className="w-5 h-5 mr-2" />
              Company
            </h4>
            <ul className="space-y-3 mb-8">
              {companyLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.path}
                    className="text-gray-400 hover:text-cyan-400 transition-colors duration-300 text-sm flex items-center group"
                  >
                    <ArrowRight className="w-3 h-3 mr-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>

            <h4 className="text-lg font-semibold mb-6 text-cyan-400 flex items-center">
              <Shield className="w-5 h-5 mr-2" />
              Support
            </h4>
            <ul className="space-y-3">
              {supportLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.path}
                    className="text-gray-400 hover:text-cyan-400 transition-colors duration-300 text-sm flex items-center group"
                  >
                    <ArrowRight className="w-3 h-3 mr-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Features Highlight */}
        <div className="border-t border-gray-800 pt-8 mb-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-to-r from-green-500 to-emerald-600 rounded-lg flex items-center justify-center">
                <Clock className="w-5 h-5" />
              </div>
              <div>
                <h5 className="font-semibold text-white">24/7 Support</h5>
                <p className="text-gray-400 text-sm">Round-the-clock assistance</p>
              </div>
            </div>
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-cyan-600 rounded-lg flex items-center justify-center">
                <Lock className="w-5 h-5" />
              </div>
              <div>
                <h5 className="font-semibold text-white">Enterprise Security</h5>
                <p className="text-gray-400 text-sm">Bank-level protection</p>
              </div>
            </div>
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-to-r from-purple-500 to-pink-600 rounded-lg flex items-center justify-center">
                <Award className="w-5 h-5" />
              </div>
              <div>
                <h5 className="font-semibold text-white">Proven Results</h5>
                <p className="text-gray-400 text-sm">98% client satisfaction</p>
              </div>
            </div>
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-to-r from-orange-500 to-red-600 rounded-lg flex items-center justify-center">
                <Zap className="w-5 h-5" />
              </div>
              <div>
                <h5 className="font-semibold text-white">Fast Deployment</h5>
                <p className="text-gray-400 text-sm">Quick implementation</p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex flex-col md:flex-row items-center space-y-2 md:space-y-0 md:space-x-6">
              <p className="text-gray-400 text-sm">
                © {currentYear} Zion Tech Group. All rights reserved.
              </p>
              <div className="flex space-x-6">
                {legalLinks.map((link) => (
                  <Link
                    key={link.name}
                    to={link.path}
                    className="text-gray-400 hover:text-cyan-400 transition-colors duration-300 text-sm"
                  >
                    {link.name}
                  </Link>
                ))}
              </div>
            </div>
            <div className="mt-4 md:mt-0">
              <p className="text-gray-400 text-sm">
                Made with ❤️ by Zion Tech Group
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
});

Footer.displayName = 'Footer';

export default Footer;