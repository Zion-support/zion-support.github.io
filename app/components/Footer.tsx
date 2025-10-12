'use client';
import React, { memo } from 'react';
import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, Clock, Zap, Brain, Cloud, Code, Users, Cpu, ArrowRight, Github, Linkedin, Twitter, Shield, Globe, Database, Smartphone, Sparkles, Star } from 'lucide-react';

const Footer: React.FC = memo(() => {
  const currentYear = new Date().getFullYear();
  
  const aiServices = [
    { name: 'AI Chatbots & NLP', url: '/ai-chatbot-builder', description: 'Conversational AI' },
    { name: 'AI Content Generation', url: '/ai-content-generation', description: 'Automated content' },
    { name: 'AI Data Analytics', url: '/ai-data-analytics', description: 'Business intelligence' },
    { name: 'AI Computer Vision', url: '/ai-computer-vision', description: 'Image analysis' },
    { name: 'AI Voice Solutions', url: '/ai-voice-solutions', description: 'Speech recognition' },
    { name: 'AI Automation', url: '/ai-automation', description: 'Workflow automation' }
  ];

  const itServices = [
    { name: 'Cloud Infrastructure', url: '/cloud-infrastructure', description: 'Scalable solutions' },
    { name: 'Cybersecurity', url: '/cybersecurity-solutions', description: 'Security solutions' },
    { name: 'Web Development', url: '/web-development', description: 'Modern web apps' },
    { name: 'Mobile Development', url: '/mobile-development', description: 'iOS & Android' },
    { name: 'DevOps & CI/CD', url: '/devops-cicd', description: 'Automated deployment' },
    { name: 'Data Analytics', url: '/data-analytics', description: 'Business intelligence' }
  ];

  const microSaasServices = [
    { name: 'Zion Analytics Pro', url: '/zion-analytics-pro', description: 'Business intelligence' },
    { name: 'Zion Chat AI', url: '/zion-chat-ai', description: 'AI customer support' },
    { name: 'Zion Security Shield', url: '/zion-security-shield', description: 'Cybersecurity monitoring' },
    { name: 'Zion Content Studio', url: '/zion-content-studio', description: 'AI content creation' },
    { name: 'Zion Project Master', url: '/zion-project-master', description: 'Project management' },
    { name: 'Zion Email Automation', url: '/zion-email-automation', description: 'Email marketing' }
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
    { name: 'Help Center', url: '/support' },
    { name: 'Documentation', url: '/docs' },
    { name: 'API Reference', url: '/api-docs' },
    { name: 'Community', url: '/community' },
    { name: 'Status', url: '/status' },
    { name: 'Tutorials', url: '/tutorials' }
  ];

  const legalLinks = [
    { name: 'Privacy Policy', url: '/privacy' },
    { name: 'Terms of Service', url: '/terms' },
    { name: 'Cookie Policy', url: '/cookies' },
    { name: 'Compliance', url: '/compliance' }
  ];

  const socialLinks = [
    { name: 'GitHub', url: 'https://github.com/ziontechgroup', icon: Github },
    { name: 'LinkedIn', url: 'https://linkedin.com/company/ziontechgroup', icon: Linkedin },
    { name: 'Twitter', url: 'https://twitter.com/ziontechgroup', icon: Twitter }
  ];

  return (
    <footer className="bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 border-t border-cyan-500/20 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/5 via-purple-500/5 to-pink-500/5"></div>
      <div className="absolute inset-0 cyber-grid-enhanced"></div>
      
      <div className="relative z-10">
        {/* Main Footer Content */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
            {/* Company Info */}
            <div className="lg:col-span-1">
              <Link to="/" className="flex items-center space-x-3 mb-6 group">
                <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 via-purple-600 to-pink-600 rounded-xl flex items-center justify-center group-hover:scale-110 transition-all duration-300 shadow-lg shadow-cyan-500/25 glow-cyan">
                  <Brain className="w-7 h-7 text-white" />
                </div>
                <div className="flex flex-col">
                  <span className="text-2xl font-bold text-white gradient-text-animated">Zion Tech Group</span>
                  <span className="text-xs text-cyan-400 font-medium tracking-wider">AI & IT SOLUTIONS</span>
                </div>
              </Link>
              <p className="text-gray-300 mb-6 leading-relaxed">
                Pioneering the future of AI and IT solutions with cutting-edge technology and expert consulting.
              </p>
              
              {/* Contact Info */}
              <div className="space-y-3">
                <a
                  href="tel:+13024640950"
                  className="flex items-center space-x-3 text-cyan-400 hover:text-cyan-300 transition-colors duration-300 group"
                >
                  <Phone className="w-5 h-5 group-hover:scale-110 transition-transform" />
                  <span className="text-sm font-medium">+1 (302) 464-0950</span>
                </a>
                <a
                  href="mailto:kleber@ziontechgroup.com"
                  className="flex items-center space-x-3 text-cyan-400 hover:text-cyan-300 transition-colors duration-300 group"
                >
                  <Mail className="w-5 h-5 group-hover:scale-110 transition-transform" />
                  <span className="text-sm font-medium">kleber@ziontechgroup.com</span>
                </a>
                <div className="flex items-start space-x-3 text-gray-400">
                  <MapPin className="w-5 h-5 mt-0.5 flex-shrink-0" />
                  <span className="text-sm">
                    364 E Main St STE 1008<br />
                    Middletown, DE 19709
                  </span>
                </div>
                <div className="flex items-center space-x-3 text-gray-400">
                  <Clock className="w-5 h-5" />
                  <span className="text-sm">24/7 Support Available</span>
                </div>
              </div>
            </div>

            {/* AI Services */}
            <div>
              <h3 className="text-lg font-bold text-white mb-6 flex items-center">
                <Brain className="w-5 h-5 text-cyan-400 mr-2" />
                AI Services
              </h3>
              <ul className="space-y-3">
                {aiServices.map((service) => (
                  <li key={service.name}>
                    <Link
                      to={service.url}
                      className="text-gray-300 hover:text-cyan-400 transition-colors duration-300 group flex items-center"
                    >
                      <span className="group-hover:translate-x-1 transition-transform">{service.name}</span>
                      <ArrowRight className="w-3 h-3 ml-2 opacity-0 group-hover:opacity-100 transition-opacity" />
                    </Link>
                    <p className="text-xs text-gray-500 mt-1">{service.description}</p>
                  </li>
                ))}
                <li>
                  <Link
                    to="/ai-services"
                    className="text-cyan-400 hover:text-cyan-300 transition-colors duration-300 font-medium flex items-center group"
                  >
                    View All AI Services
                    <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </li>
              </ul>
            </div>

            {/* IT Services */}
            <div>
              <h3 className="text-lg font-bold text-white mb-6 flex items-center">
                <Cloud className="w-5 h-5 text-purple-400 mr-2" />
                IT Services
              </h3>
              <ul className="space-y-3">
                {itServices.map((service) => (
                  <li key={service.name}>
                    <Link
                      to={service.url}
                      className="text-gray-300 hover:text-purple-400 transition-colors duration-300 group flex items-center"
                    >
                      <span className="group-hover:translate-x-1 transition-transform">{service.name}</span>
                      <ArrowRight className="w-3 h-3 ml-2 opacity-0 group-hover:opacity-100 transition-opacity" />
                    </Link>
                    <p className="text-xs text-gray-500 mt-1">{service.description}</p>
                  </li>
                ))}
                <li>
                  <Link
                    to="/it-services"
                    className="text-purple-400 hover:text-purple-300 transition-colors duration-300 font-medium flex items-center group"
                  >
                    View All IT Services
                    <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </li>
              </ul>
            </div>

            {/* Micro SAAS */}
            <div>
              <h3 className="text-lg font-bold text-white mb-6 flex items-center">
                <Cpu className="w-5 h-5 text-green-400 mr-2" />
                Micro SAAS
              </h3>
              <ul className="space-y-3">
                {microSaasServices.map((service) => (
                  <li key={service.name}>
                    <Link
                      to={service.url}
                      className="text-gray-300 hover:text-green-400 transition-colors duration-300 group flex items-center"
                    >
                      <span className="group-hover:translate-x-1 transition-transform">{service.name}</span>
                      <ArrowRight className="w-3 h-3 ml-2 opacity-0 group-hover:opacity-100 transition-opacity" />
                    </Link>
                    <p className="text-xs text-gray-500 mt-1">{service.description}</p>
                  </li>
                ))}
                <li>
                  <Link
                    to="/micro-saas"
                    className="text-green-400 hover:text-green-300 transition-colors duration-300 font-medium flex items-center group"
                  >
                    View All Micro SAAS
                    <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </li>
              </ul>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="text-lg font-bold text-white mb-6 flex items-center">
                <Zap className="w-5 h-5 text-orange-400 mr-2" />
                Quick Links
              </h3>
              <div className="space-y-4">
                <div>
                  <h4 className="text-sm font-semibold text-gray-400 mb-2">Company</h4>
                  <ul className="space-y-2">
                    {companyLinks.map((link) => (
                      <li key={link.name}>
                        <Link
                          to={link.url}
                          className="text-gray-300 hover:text-orange-400 transition-colors duration-300 text-sm"
                        >
                          {link.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-gray-400 mb-2">Support</h4>
                  <ul className="space-y-2">
                    {supportLinks.map((link) => (
                      <li key={link.name}>
                        <Link
                          to={link.url}
                          className="text-gray-300 hover:text-orange-400 transition-colors duration-300 text-sm"
                        >
                          {link.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-gray-400 mb-2">Legal</h4>
                  <ul className="space-y-2">
                    {legalLinks.map((link) => (
                      <li key={link.name}>
                        <Link
                          to={link.url}
                          className="text-gray-300 hover:text-orange-400 transition-colors duration-300 text-sm"
                        >
                          {link.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Newsletter Signup */}
        <div className="border-t border-cyan-500/20 py-8">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-gradient-to-r from-cyan-900/50 to-purple-900/50 backdrop-blur-sm border border-cyan-500/20 rounded-2xl p-8 text-center">
              <h3 className="text-2xl font-bold text-white mb-4">
                Stay Updated with <span className="gradient-text-animated">Zion Tech Group</span>
              </h3>
              <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
                Get the latest insights on AI, technology trends, and exclusive updates delivered to your inbox.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                <input
                  type="email"
                  placeholder="Enter your email address"
                  className="flex-1 px-4 py-3 rounded-lg bg-slate-800/50 border border-gray-600 text-white placeholder-gray-400 focus:outline-none focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500/20 transition-all duration-300"
                />
                <button className="bg-gradient-to-r from-cyan-500 to-purple-500 text-white px-6 py-3 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-600 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-cyan-500/25 btn-futuristic">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-cyan-500/20 py-6">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
              <div className="text-gray-400 text-sm">
                © {currentYear} Zion Tech Group. All rights reserved.
              </div>
              
              {/* Social Links */}
              <div className="flex items-center space-x-4">
                {socialLinks.map((social) => (
                  <a
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-cyan-400 transition-colors duration-300 group"
                    aria-label={social.name}
                  >
                    <social.icon className="w-5 h-5 group-hover:scale-110 transition-transform" />
                  </a>
                ))}
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