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
    { name: 'AI Project Manager', href: '/ai-project-manager' },
    { name: 'AI Social Media Manager', href: '/ai-social-media-manager' },
    { name: 'AI Analytics Dashboard', href: '/ai-analytics' },
    { name: 'AI Email Marketing', href: '/ai-email-marketing' },
    { name: 'AI Customer Support Bot', href: '/ai-customer-support-bot' },
    { name: 'AI Code Review Assistant', href: '/ai-code-generation' },
    { name: 'AI Video Generator', href: '/ai-video-generation' },
    { name: 'AI Sales Automation', href: '/ai-sales-automation' },
    { name: 'AI Content Writer', href: '/ai-content-writer' },
    { name: 'AI Financial Advisor', href: '/ai-financial-analyzer' },
    { name: 'AI Fraud Detection', href: '/ai-fraud-detection' },
    { name: 'AI Fashion Design', href: '/ai-fashion-design' },
    { name: 'AI Music Composition', href: '/ai-music-composition' },
    { name: 'AI Fitness Coach', href: '/ai-fitness-coach' },
    { name: 'AI Real Estate Assistant', href: '/ai-real-estate-assistant' },
    { name: 'AI Supply Chain Optimizer', href: '/ai-supply-chain-optimizer' },
    { name: 'AI Healthcare Assistant', href: '/ai-healthcare-assistant' },
    { name: 'AI Education Platform', href: '/ai-education-platform' },
    { name: 'AI Restaurant Manager', href: '/ai-restaurant-manager' },
    { name: 'AI Travel Assistant', href: '/ai-travel-assistant' },
    { name: 'AI Manufacturing Optimizer', href: '/ai-manufacturing-optimizer' },
    { name: 'AI Energy Manager', href: '/ai-energy-manager' },
    { name: 'AI Marketing Automation', href: '/ai-marketing-automation' },
    { name: 'AI Customer Experience Manager', href: '/ai-customer-experience-manager' },
    { name: 'AI Data Security Monitor', href: '/ai-data-security-monitor' },
    { name: 'AI Sustainability Manager', href: '/ai-sustainability-manager' },
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
    { name: 'AI Quantum Computing', href: '/ai-quantum-computing' },
    { name: 'AI Autonomous Systems', href: '/ai-autonomous-systems' },
    { name: 'AI Edge Computing', href: '/ai-edge-computing' },
    { name: 'AI Conversational Intelligence', href: '/ai-conversational-intelligence' },
    { name: 'AI Predictive Maintenance', href: '/ai-predictive-maintenance' },
    { name: 'AI Digital Twin', href: '/ai-digital-twin' },
    { name: 'AI Cognitive Computing', href: '/ai-cognitive-computing' },
    { name: 'AI Augmented Reality', href: '/ai-augmented-reality' },
    { name: 'AI Blockchain Solutions', href: '/ai-blockchain-solutions' },
    { name: 'AI Metaverse Solutions', href: '/ai-metaverse-solutions' },
    { name: 'AI Space Technology', href: '/ai-space-technology' },
    { name: 'AI Climate Solutions', href: '/ai-climate-solutions' },
    { name: 'AI Neuroscience', href: '/ai-neuroscience' },
    { name: 'AI Materials Science', href: '/ai-materials-science' },
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
    { name: 'Quantum Computing Infrastructure', href: '/quantum-computing-infrastructure' },
    { name: 'Edge Computing Solutions', href: '/edge-computing-solutions' },
    { name: '5G & Wireless Solutions', href: '/5g-wireless-solutions' },
    { name: 'AR/VR Infrastructure', href: '/ar-vr-infrastructure' },
    { name: 'Blockchain Infrastructure', href: '/blockchain-infrastructure' },
    { name: 'Metaverse Development', href: '/metaverse-development' },
    { name: 'Space Technology Solutions', href: '/space-technology-solutions' },
    { name: 'Climate Technology Solutions', href: '/climate-technology-solutions' },
    { name: 'Neuroscience Technology', href: '/neuroscience-technology' },
    { name: 'Materials Science Technology', href: '/materials-science-technology' },
    { name: 'Digital Transformation Consulting', href: '/digital-transformation-consulting' },
    { name: 'Enterprise Architecture', href: '/enterprise-architecture' },
    { name: 'IT Service Management', href: '/it-service-management' },
    { name: 'Technology Innovation Lab', href: '/technology-innovation-lab' },
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
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 lg:gap-8">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-10 h-10 bg-gradient-to-r from-cyan-400 to-purple-500 rounded-lg flex items-center justify-center">
                <Brain className="w-6 h-6 text-white" />
              </div>
              <span className="text-xl font-bold text-white neon-text">Zion Tech Group</span>
            </div>
            <p className="text-gray-300 mb-6 leading-relaxed text-sm">
              Leading provider of AI-powered enterprise solutions, quantum computing, autonomous systems, and digital transformation services.
            </p>
            
            {/* Contact Info */}
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Phone className="w-4 h-4 text-cyan-400" />
                <a 
                  href="tel:+13024640950" 
                  className="text-gray-300 hover:text-cyan-400 transition-colors duration-300 text-sm"
                >
                  +1 302 464 0950
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-4 h-4 text-cyan-400" />
                <a 
                  href="mailto:kleber@ziontechgroup.com" 
                  className="text-gray-300 hover:text-cyan-400 transition-colors duration-300 text-sm"
                >
                  kleber@ziontechgroup.com
                </a>
              </div>
              <div className="flex items-start space-x-3">
                <MapPin className="w-4 h-4 text-cyan-400 mt-1" />
                <address className="text-gray-300 not-italic text-sm">
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
                    className="text-gray-300 hover:text-cyan-400 transition-colors duration-300 flex items-center group text-sm"
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
            <ul className="space-y-1 max-h-64 overflow-y-auto">
              {microSAASServices.slice(0, 12).map((service) => (
                <li key={service.name}>
                  <a
                    href={service.href}
                    className="text-gray-300 hover:text-cyan-400 transition-colors duration-300 text-xs"
                  >
                    {service.name}
                  </a>
                </li>
              ))}
              <li>
                <a
                  href="/services"
                  className="text-cyan-400 hover:text-cyan-300 transition-colors duration-300 text-xs font-medium"
                >
                  View All Services →
                </a>
              </li>
            </ul>
          </div>

          {/* AI Services */}
          <div>
            <h3 className="text-lg font-semibold text-purple-400 mb-4">AI Services</h3>
            <ul className="space-y-1 max-h-64 overflow-y-auto">
              {aiServices.slice(0, 12).map((service) => (
                <li key={service.name}>
                  <a
                    href={service.href}
                    className="text-gray-300 hover:text-purple-400 transition-colors duration-300 text-xs"
                  >
                    {service.name}
                  </a>
                </li>
              ))}
              <li>
                <a
                  href="/ai-services"
                  className="text-purple-400 hover:text-purple-300 transition-colors duration-300 text-xs font-medium"
                >
                  View All AI Services →
                </a>
              </li>
            </ul>
          </div>

          {/* IT Services */}
          <div>
            <h3 className="text-lg font-semibold text-green-400 mb-4">IT Services</h3>
            <ul className="space-y-1 max-h-64 overflow-y-auto">
              {itServices.slice(0, 12).map((service) => (
                <li key={service.name}>
                  <a
                    href={service.href}
                    className="text-gray-300 hover:text-green-400 transition-colors duration-300 text-xs"
                  >
                    {service.name}
                  </a>
                </li>
              ))}
              <li>
                <a
                  href="/it-services"
                  className="text-green-400 hover:text-green-300 transition-colors duration-300 text-xs font-medium"
                >
                  View All IT Services →
                </a>
              </li>
            </ul>
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
