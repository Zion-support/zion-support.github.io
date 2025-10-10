import React, { memo } from 'react';
import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, Brain, Zap, ArrowRight, Linkedin, Twitter, Facebook, Instagram, Github, Youtube } from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Services', href: '/services' },
    { name: 'AI Solutions', href: '/ai-services' },
    { name: 'IT Services', href: '/it-services' },
    { name: 'Enterprise', href: '/enterprise' },
    { name: 'Pricing', href: '/pricing' },
    { name: 'Case Studies', href: '/case-studies' },
    { name: 'Blog', href: '/blog' },
    { name: 'Contact', href: '/contact' },
  ];

  const microSaasServices = [
    { name: 'AI Project Manager Pro', url: '/ai-project-manager' },
    { name: 'AI Task Manager Pro', url: '/ai-task-manager' },
    { name: 'AI Workflow Automation', url: '/ai-workflow-automation' },
    { name: 'AI Scheduler Pro', url: '/ai-scheduler' },
    { name: 'AI Content Writer Pro', url: '/ai-content-writer' },
    { name: 'AI Social Media Manager', url: '/ai-social-media-manager' },
    { name: 'AI Email Marketing Suite', url: '/ai-email-marketing' },
    { name: 'AI SEO Optimizer', url: '/ai-seo-optimizer' },
    { name: 'AI Lead Generation', url: '/ai-lead-generation' },
    { name: 'AI CRM Intelligence', url: '/ai-crm' },
    { name: 'AI Financial Analyzer', url: '/ai-financial-analyzer' },
    { name: 'AI Customer Support Bot', url: '/ai-customer-support-bot' },
  ];

  const aiServices = [
    { name: 'Machine Learning', href: '/machine-learning' },
    { name: 'Natural Language Processing', href: '/ai-nlp' },
    { name: 'Computer Vision', href: '/ai-vision' },
    { name: 'AI Automation', href: '/ai-automation' },
    { name: 'AI Data Visualization', href: '/ai-data-visualization' },
    { name: 'AI 3D Generation', href: '/ai-3d-generation' },
    { name: 'AI Voice Cloning', href: '/ai-voice-cloning' },
    { name: 'AI Fraud Detection', href: '/ai-fraud-detection' },
    { name: 'AI Quantum Computing', href: '/ai-quantum-computing' },
    { name: 'AI Autonomous Systems', href: '/ai-autonomous-systems' },
    { name: 'AI Blockchain Solutions', href: '/ai-blockchain-solutions' },
    { name: 'AI Robotics', href: '/ai-robotics' },
  ];

  const itServices = [
    { name: 'Cloud Migration', href: '/cloud-migration' },
    { name: 'IT Consulting', href: '/it-consulting' },
    { name: 'Cybersecurity', href: '/cybersecurity' },
    { name: 'DevOps & CI/CD', href: '/devops' },
    { name: 'Database Services', href: '/database-services' },
    { name: 'Web Development', href: '/web-development' },
    { name: 'Network Infrastructure', href: '/network-infrastructure' },
    { name: 'IT Support', href: '/it-support' },
    { name: 'Business Intelligence', href: '/business-intelligence' },
    { name: 'Enterprise Solutions', href: '/enterprise' },
    { name: 'Blockchain Solutions', href: '/blockchain' },
    { name: 'Quantum Computing', href: '/quantum-computing' },
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
        <div className="grid grid-cols-1 lg:grid-cols-8 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-2">
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

          {/* Micro SAAS Services */}
          <div className="lg:col-span-2">
            <h3 className="text-cyan-400 font-semibold mb-4 flex items-center">
              <Zap className="w-4 h-4 mr-2" />
              Micro SAAS Solutions
            </h3>
            <div className="grid grid-cols-1 gap-2">
              {microSaasServices.slice(0, 8).map((service) => (
                <Link
                  key={service.name}
                  to={service.url}
                  className="text-gray-300 hover:text-cyan-400 transition-colors text-sm flex items-center group"
                >
                  <span>{service.name}</span>
                  <ArrowRight className="w-3 h-3 ml-1 group-hover:translate-x-1 transition-transform duration-300" />
                </Link>
              ))}
            </div>
            <Link to="/services"
              className="inline-flex items-center text-cyan-400 hover:text-white transition-colors mt-4"
            >
              View All Micro SAAS →
            </Link>
          </div>

          {/* AI Services */}
          <div className="lg:col-span-2">
            <h3 className="text-cyan-400 font-semibold mb-4 flex items-center">
              <Brain className="w-4 h-4 mr-2" />
              AI Services
            </h3>
            <div className="grid grid-cols-1 gap-2">
              {aiServices.slice(0, 8).map((service) => (
                <Link
                  key={service.name}
                  to={service.href}
                  className="text-gray-300 hover:text-purple-400 transition-colors text-sm"
                >
                  {service.name}
                </Link>
              ))}
            </div>
            <Link to="/ai-services"
              className="inline-flex items-center text-cyan-400 hover:text-white transition-colors mt-4"
            >
              View All AI Services →
            </Link>
          </div>

          {/* IT Services */}
          <div className="lg:col-span-2">
            <h3 className="text-cyan-400 font-semibold mb-4 flex items-center">
              <Brain className="w-4 h-4 mr-2" />
              IT Services
            </h3>
            <div className="grid grid-cols-1 gap-2">
              {itServices.slice(0, 8).map((service) => (
                <Link
                  key={service.name}
                  to={service.href}
                  className="text-gray-300 hover:text-green-400 transition-colors text-sm"
                >
                  {service.name}
                </Link>
              ))}
            </div>
            <Link to="/it-services"
              className="inline-flex items-center text-cyan-400 hover:text-white transition-colors mt-4"
            >
              View All IT Services →
            </Link>
          </div>
        </div>

        {/* Newsletter Signup */}
        <div className="mt-12 pt-8 border-t border-gray-700">
          <div className="max-w-4xl mx-auto text-center">
            <h3 className="text-2xl font-bold mb-4 text-cyan-400">Stay Updated</h3>
            <p className="text-gray-300 mb-6">
              Get the latest insights on AI, technology trends, and industry updates delivered to your inbox.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded-lg bg-slate-800 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-400 border border-gray-600"
              />
              <button className="bg-cyan-600 text-white px-6 py-3 rounded-lg hover:bg-cyan-700 transition-colors font-medium">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="mt-12 pt-8 border-t border-gray-700">
          <div className="flex flex-col lg:flex-row justify-between items-center">
            <div className="flex flex-col lg:flex-row items-center space-y-4 lg:space-y-0 lg:space-x-8 mb-4 lg:mb-0">
              <p className="text-gray-300 text-sm">
                &copy; {currentYear} Zion Tech Group. All rights reserved.
              </p>
              <div className="flex space-x-6">
                <Link to="/privacy" className="text-gray-300 hover:text-cyan-400 transition-colors text-sm">
                  Privacy Policy
                </Link>
                <Link to="/terms" className="text-gray-300 hover:text-cyan-400 transition-colors text-sm">
                  Terms of Service
                </Link>
                <Link to="/sitemap" className="text-gray-300 hover:text-cyan-400 transition-colors text-sm">
                  Sitemap
                </Link>
              </div>
            </div>
            
            {/* Social Links */}
            <div className="flex space-x-4">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  className="text-gray-400 hover:text-cyan-400 transition-colors duration-300"
                  aria-label={social.name}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
