'use client';
import React from 'react';
import { Phone, Mail, MapPin, Brain, Facebook, Twitter, Linkedin, Instagram, Github, Youtube, ArrowRight } from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Services', href: '/services' },
    { name: 'AI Solutions', href: '/ai-services' },
    { name: 'IT Services', href: '/it-services' },
    { name: 'Blog', href: '/blog' },
    { name: 'Contact', href: '/contact' },
  ];

  const microSAASServices = [
    { name: 'AI Project Manager Pro', href: '/ai-project-manager', category: 'Productivity' },
    { name: 'AI Social Media Manager', href: '/ai-social-media-manager', category: 'Marketing' },
    { name: 'AI Analytics Dashboard', href: '/ai-analytics', category: 'Analytics' },
    { name: 'AI Email Marketing Suite', href: '/ai-email-marketing', category: 'Marketing' },
    { name: 'AI Customer Support Bot', href: '/ai-customer-support-bot', category: 'Customer Service' },
    { name: 'AI Video Generator Pro', href: '/ai-video-generation', category: 'Content Creation' },
    { name: 'AI Sales Automation Hub', href: '/ai-sales-automation', category: 'Sales' },
    { name: 'AI Content Writer Pro', href: '/ai-content-writer', category: 'Content Creation' },
    { name: 'AI Financial Advisor Pro', href: '/ai-financial-advisor', category: 'Finance' },
    { name: 'AI Security Monitor', href: '/ai-security-monitor', category: 'Security' },
    { name: 'AI E-commerce Optimizer', href: '/ai-ecommerce-optimizer', category: 'E-commerce' },
    { name: 'AI SEO Optimizer', href: '/ai-seo-optimizer', category: 'Marketing' },
    { name: 'AI Personal Assistant', href: '/ai-personal-assistant', category: 'Productivity' },
    { name: 'AI Marketing Automation', href: '/ai-marketing-automation', category: 'Marketing' },
  ];

  const aiServices = [
    { name: 'Machine Learning', href: '/machine-learning' },
    { name: 'Natural Language Processing', href: '/nlp' },
    { name: 'Computer Vision', href: '/computer-vision' },
    { name: 'AI Automation', href: '/ai-automation' },
    { name: 'AI Data Visualization', href: '/ai-data-visualization' },
    { name: 'AI 3D Generation', href: '/ai-3d-generation' },
    { name: 'AI Voice Cloning', href: '/ai-voice-cloning' },
    { name: 'AI Fraud Detection', href: '/ai-cybersecurity' },
  ];

  const itServices = [
    { name: 'Cloud Migration', href: '/cloud-migration' },
    { name: 'IT Consulting', href: '/it-consulting' },
    { name: 'Cybersecurity', href: '/cybersecurity' },
    { name: 'DevOps & CI/CD', href: '/devops' },
    { name: 'Database Services', href: '/database' },
    { name: 'Mobile App Development', href: '/ai-mobile-app-development' },
    { name: 'Web Development', href: '/web-development' },
    { name: 'Network Infrastructure', href: '/network-infrastructure' },
    { name: 'IT Support', href: '/it-support' },
    { name: 'Business Intelligence', href: '/business-intelligence' },
    { name: 'Enterprise Solutions', href: '/enterprise' },
    { name: 'Blockchain Solutions', href: '/blockchain' },
  ];

  const socialLinks = [
    { name: 'LinkedIn', href: 'https://linkedin.com/company/zion-tech-group', icon: Linkedin },
    { name: 'Twitter', href: 'https://twitter.com/ziontechgroup', icon: Twitter },
    { name: 'Facebook', href: 'https://facebook.com/ziontechgroup', icon: Facebook },
    { name: 'Instagram', href: 'https://instagram.com/ziontechgroup', icon: Instagram },
    { name: 'GitHub', href: 'https://github.com/ziontechgroup', icon: Github },
    { name: 'YouTube', href: 'https://youtube.com/@ziontechgroup', icon: Youtube },
  ];

  return (
    <footer className="bg-slate-900 border-t border-cyan-400/20">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-10 h-10 bg-gradient-to-r from-cyan-400 to-purple-500 rounded-lg flex items-center justify-center">
                <Brain className="w-6 h-6 text-white" />
              </div>
              <span className="text-xl font-bold text-white neon-text">Zion Tech Group</span>
            </div>
            <p className="text-gray-300 mb-6 leading-relaxed">
              Leading provider of AI-powered enterprise solutions, quantum computing, autonomous systems, and digital transformation services.
            </p>
            
            {/* Contact Info */}
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Phone className="w-4 h-4 text-cyan-400" />
                <a 
                  href="tel:+13024640950" 
                  className="text-gray-300 hover:text-cyan-400 transition-colors duration-300"
                >
                  +1 302 464 0950
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-4 h-4 text-cyan-400" />
                <a 
                  href="mailto:kleber@ziontechgroup.com" 
                  className="text-gray-300 hover:text-cyan-400 transition-colors duration-300"
                >
                  kleber@ziontechgroup.com
                </a>
              </div>
              <div className="flex items-start space-x-3">
                <MapPin className="w-4 h-4 text-cyan-400 mt-1" />
                <address className="text-gray-300 not-italic">
                  364 E Main St STE 1008<br />
                  Middletown, DE 19709
                </address>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4 neon-text">Quick Links</h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-gray-300 hover:text-cyan-400 transition-colors duration-300 flex items-center group"
                  >
                    <ArrowRight className="w-3 h-3 mr-2 group-hover:translate-x-1 transition-transform duration-300" />
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Micro SAAS Services */}
          <div>
            <h3 className="text-lg font-semibold text-cyan-400 mb-4">Micro SAAS Solutions</h3>
            <div className="space-y-4">
              {['Productivity', 'Marketing', 'Content Creation', 'Analytics'].map((category) => (
                <div key={category}>
                  <h4 className="text-sm font-medium text-cyan-300 mb-2">{category}</h4>
                  <ul className="space-y-1">
                    {microSAASServices
                      .filter(service => service.category === category)
                      .slice(0, 3)
                      .map((service) => (
                      <li key={service.name}>
                        <a
                          href={service.href}
                          className="text-gray-300 hover:text-cyan-400 transition-colors duration-300 text-sm flex items-center group"
                        >
                          <ArrowRight className="w-3 h-3 mr-1 group-hover:translate-x-1 transition-transform duration-300" />
                          {service.name}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* AI & IT Services */}
          <div>
            <h3 className="text-lg font-semibold text-purple-400 mb-4">AI & IT Services</h3>
            <div className="space-y-4">
              <div>
                <h4 className="text-sm font-medium text-purple-300 mb-2">AI Services</h4>
                <ul className="space-y-1">
                  {aiServices.slice(0, 3).map((service) => (
                    <li key={service.name}>
                      <a
                        href={service.href}
                        className="text-gray-300 hover:text-purple-400 transition-colors duration-300 text-sm"
                      >
                        {service.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h4 className="text-sm font-medium text-green-300 mb-2">IT Services</h4>
                <ul className="space-y-1">
                  {itServices.slice(0, 3).map((service) => (
                    <li key={service.name}>
                      <a
                        href={service.href}
                        className="text-gray-300 hover:text-green-400 transition-colors duration-300 text-sm"
                      >
                        {service.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Social Links */}
        <div className="border-t border-gray-700 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex space-x-4 mb-4 md:mb-0">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-cyan-400 transition-colors duration-300 p-2 rounded-lg hover:bg-slate-800"
                  aria-label={social.name}
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
            
            <div className="text-center md:text-right">
              <p className="text-gray-400 text-sm">
                © {currentYear} Zion Tech Group. All rights reserved.
              </p>
              <p className="text-gray-500 text-xs mt-1">
                Transforming businesses with cutting-edge AI and IT solutions
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
