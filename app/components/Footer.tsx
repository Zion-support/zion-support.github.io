'use client';
import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, Github, Linkedin, Twitter, ArrowRight, Brain, Cloud, Globe, Database, Sparkles, Star } from 'lucide-react';

const Footer: React.FC = () => {
  currentYear = new Date().getFullYear();
  
  aiServices = [
    { name: 'AI Analytics & BI', url: '/ai-analytics', description: 'Business intelligence' },
    { name: 'AI Automation', url: '/ai-automation', description: 'Process automation' },
    { name: 'AI Chatbots & NLP', url: '/ai-chatbot-builder', description: 'Conversational AI' },
    { name: 'AI Content Generation', url: '/ai-content-generation', description: 'Automated content' },
    { name: 'AI Cybersecurity', url: '/ai-cybersecurity', description: 'AI security' },
    { name: 'AI CRM', url: '/ai-crm', description: 'Smart CRM' },
    { name: 'AI Data Analytics', url: '/ai-data-analytics', description: 'Data insights' },
    { name: 'AI Healthcare', url: '/ai-healthcare', description: 'Medical AI' },
    { name: 'AI Computer Vision', url: '/ai-computer-vision', description: 'Image analysis' },
    { name: 'AI Voice Solutions', url: '/ai-voice-solutions', description: 'Speech recognition' },
    { name: 'AI Financial Services', url: '/ai-financial-services', description: 'Fintech AI' },
    { name: 'AI E-commerce Solutions', url: '/ai-ecommerce-solutions', description: 'E-commerce AI' }
  ];

  itServices = [
    { name: 'Cloud Migration', url: '/cloud-migration', description: 'Cloud solutions' },
    { name: 'DevOps & CI/CD', url: '/devops', description: 'Development operations' },
    { name: 'Cybersecurity', url: '/cybersecurity', description: 'Security solutions' },
    { name: 'Database Management', url: '/database', description: 'Database services' },
    { name: 'API Development', url: '/api', description: 'API solutions' },
    { name: 'Mobile App Development', url: '/mobile-development', description: 'Mobile apps' },
    { name: 'Web Development', url: '/web-development', description: 'Web solutions' },
    { name: 'IT Consulting', url: '/it-consulting', description: 'IT advisory' },
    { name: 'System Integration', url: '/system-integration', description: 'System solutions' },
    { name: 'Data Management', url: '/data-management', description: 'Data solutions' },
    { name: 'Network Security', url: '/network-security', description: 'Network protection' },
    { name: 'IT Support', url: '/it-support', description: 'Technical support' }
  ];

  company = [
    { name: 'About Us', url: '/about' },
    { name: 'Our Team', url: '/team' },
    { name: 'Careers', url: '/careers' },
    { name: 'News & Blog', url: '/news' },
    { name: 'Case Studies', url: '/case-studies' },
    { name: 'Partners', url: '/partners' },
    { name: 'Investors', url: '/investors' },
    { name: 'Contact', url: '/contact' }
  ];

  resources = [
    { name: 'Documentation', url: '/docs' },
    { name: 'API Reference', url: '/api-docs' },
    { name: 'Tutorials', url: '/tutorials' },
    { name: 'White Papers', url: '/white-papers' },
    { name: 'Webinars', url: '/webinars' },
    { name: 'Support Center', url: '/support' },
    { name: 'Community', url: '/community' },
    { name: 'Status Page', url: '/status' }
  ];

  socialLinks = [
    { name: 'Twitter', url: 'https://twitter.com/ziontechgroup', icon: <Twitter className="w-5 h-5" /> },
    { name: 'LinkedIn', url: 'https://linkedin.com/company/ziontechgroup', icon: <Linkedin className="w-5 h-5" /> },
    { name: 'GitHub', url: 'https://github.com/ziontechgroup', icon: <Github className="w-5 h-5" /> }
  ];

  return (
    <footer className="b g-gray-900 text-white">
      {/* Main Footer Content */}
      <div className="ma x-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="gri d grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8">
          {/* Company Info */}
          <div className="l g:col-span-2">
            <div className="fle x items-center gap-2 mb-4">
              <div className="w-8 h-8 b g-gradient-to-r from-blue-500 to-purple-500 rounded-lg flex items-center justify-center">
                <Brain className="w-5 h-5 tex t-white" />
              </div>
              <span className="tex t-xl font-bold">Zion Tech Group</span>
            </div>
            <p className="tex t-gray-400 mb-6 max-w-sm">
              Leading provider of AI and IT solutions, helping businesses transform through innovative technology and expert consulting.
            </p>
            <div className="fle x space-x-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="tex t-gray-400 hover:text-white transition-colors duration-300"
                  aria-label={social.name}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* AI Services */}
          <div>
            <h3 className="tex t-lg font-semibold mb-4 flex items-center gap-2">
              <Sparkles className="w-5 h-5 tex t-blue-400" />
              AI Services
            </h3>
            <ul className="spac e-y-3">
              {aiServices.slice(0, 6).map((service, index) => (
                <li key={index}>
                  <Link
                    to={service.url}
                    className="tex t-gray-400 hover:text-white transition-colors duration-300 flex items-center gap-2 group"
                  >
                    <ArrowRight className="w-3 h-3 opacit y-0 group-hover:opacity-100 transition-opacity duration-300" />
                    <span className="tex t-sm">{service.name}</span>
                  </Link>
                </li>
              ))}
            </ul>
            <Link
              to="/ai-services"
              className="tex t-blue-400 hover:text-blue-300 text-sm font-medium mt-4 inline-flex items-center gap-1"
            >
              View All AI Services <ArrowRight className="w-3 h-3" />
            </Link>
          </div>

          {/* IT Services */}
          <div>
            <h3 className="tex t-lg font-semibold mb-4 flex items-center gap-2">
              <Cloud className="w-5 h-5 tex t-green-400" />
              IT Services
            </h3>
            <ul className="spac e-y-3">
              {itServices.slice(0, 6).map((service, index) => (
                <li key={index}>
                  <Link
                    to={service.url}
                    className="tex t-gray-400 hover:text-white transition-colors duration-300 flex items-center gap-2 group"
                  >
                    <ArrowRight className="w-3 h-3 opacit y-0 group-hover:opacity-100 transition-opacity duration-300" />
                    <span className="tex t-sm">{service.name}</span>
                  </Link>
                </li>
              ))}
            </ul>
            <Link
              to="/it-services"
              className="tex t-green-400 hover:text-green-300 text-sm font-medium mt-4 inline-flex items-center gap-1"
            >
              View All IT Services <ArrowRight className="w-3 h-3" />
            </Link>
          </div>

          {/* Company */}
          <div>
            <h3 className="tex t-lg font-semibold mb-4 flex items-center gap-2">
              <Globe className="w-5 h-5 tex t-purple-400" />
              Company
            </h3>
            <ul className="spac e-y-3">
              {company.map((item, index) => (
                <li key={index}>
                  <Link
                    to={item.url}
                    className="tex t-gray-400 hover:text-white transition-colors duration-300 flex items-center gap-2 group"
                  >
                    <ArrowRight className="w-3 h-3 opacit y-0 group-hover:opacity-100 transition-opacity duration-300" />
                    <span className="tex t-sm">{item.name}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="tex t-lg font-semibold mb-4 flex items-center gap-2">
              <Database className="w-5 h-5 tex t-yellow-400" />
              Resources
            </h3>
            <ul className="spac e-y-3">
              {resources.map((item, index) => (
                <li key={index}>
                  <Link
                    to={item.url}
                    className="tex t-gray-400 hover:text-white transition-colors duration-300 flex items-center gap-2 group"
                  >
                    <ArrowRight className="w-3 h-3 opacit y-0 group-hover:opacity-100 transition-opacity duration-300" />
                    <span className="tex t-sm">{item.name}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Newsletter Signup */}
      <div className="borde r-t border-gray-800">
        <div className="ma x-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="b g-gradient-to-r from-blue-600/20 to-purple-600/20 rounded-xl p-6 border border-blue-500/30">
            <div className="fle x flex-col md:flex-row items-center justify-between gap-4">
              <div>
                <h3 className="tex t-lg font-semibold text-white mb-2">Stay Updated</h3>
                <p className="tex t-gray-300 text-sm">
                  Get the latest AI and IT insights delivered to your inbox.
                </p>
              </div>
              <div className="fle x w-full md:w-auto gap-2">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="fle x-1 md:w-64 px-4 py-2 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
                <button className="b g-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-2 rounded-lg font-medium hover:from-blue-700 hover:to-purple-700 transition-all duration-300 flex items-center gap-2">
                  Subscribe <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Contact Info */}
      <div className="borde r-t border-gray-800">
        <div className="ma x-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="gri d grid-cols-1 md:grid-cols-3 gap-6">
            <div className="fle x items-center gap-3">
              <Mail className="w-5 h-5 tex t-blue-400" />
              <div>
                <p className="tex t-sm text-gray-400">Email</p>
                <p className="tex t-white">info@ziontechgroup.com</p>
              </div>
            </div>
            <div className="fle x items-center gap-3">
              <Phone className="w-5 h-5 tex t-green-400" />
              <div>
                <p className="tex t-sm text-gray-400">Phone</p>
                <p className="tex t-white">+1 (555) 123-4567</p>
              </div>
            </div>
            <div className="fle x items-center gap-3">
              <MapPin className="w-5 h-5 tex t-red-400" />
              <div>
                <p className="tex t-sm text-gray-400">Address</p>
                <p className="tex t-white">123 Tech Street, San Francisco, CA</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="borde r-t border-gray-800">
        <div className="ma x-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="fle x flex-col md:flex-row items-center justify-between gap-4">
            <div className="fle x items-center gap-6 text-sm text-gray-400">
              <p>&copy; {currentYear} Zion Tech Group. All rights reserved.</p>
              <div className="fle x items-center gap-4">
                <Link to="/privacy" className="hove r:text-white transition-colors duration-300">
                  Privacy Policy
                </Link>
                <Link to="/terms" className="hove r:text-white transition-colors duration-300">
                  Terms of Service
                </Link>
                <Link to="/cookies" className="hove r:text-white transition-colors duration-300">
                  Cookie Policy
                </Link>
              </div>
            </div>
            <div className="fle x items-center gap-2 text-sm text-gray-400">
              <span>Powered by</span>
              <div className="fle x items-center gap-1">
                <Star className="w-4 h-4 tex t-yellow-400" />
                <span className="tex t-white font-medium">Zion Tech Group</span>
              </div>
            </div>
          </div>
          <p className="tex t-gray-400 mb-4">
            Advanced AI & IT Solutions
          </p>
          <p className="tex t-gray-500 text-sm">
            © {currentYear} Zion Tech Group. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;