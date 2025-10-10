import React, { memo } from 'react';
import { Phone, Mail, MapPin, Clock, Award, Shield, Zap, ArrowRight, ExternalLink, Brain, Facebook, Twitter, Linkedin, Instagram, Github, Youtube } from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Team', href: '/team' },
    { name: 'Careers', href: '/careers' },
    { name: 'Services', href: '/services' },
    { name: 'AI Solutions', href: '/ai-services' },
    { name: 'IT Services', href: '/it-services' },
    { name: 'Enterprise', href: '/enterprise' },
    { name: 'Pricing', href: '/pricing' },
    { name: 'Case Studies', href: '/case-studies' },
    { name: 'Blog', href: '/blog' },
    { name: 'Contact', href: '/contact' },
  ];

  const microSaasServices = {
    'Productivity': [
      { name: 'AI Project Manager Pro', url: '/ai-project-manager', description: 'Intelligent project planning' },
      { name: 'AI Task Manager Pro', url: '/ai-task-manager', description: 'Smart task management' },
      { name: 'AI Workflow Automation', url: '/ai-workflow-automation', description: 'Process automation' },
      { name: 'AI Scheduler Pro', url: '/ai-scheduler', description: 'Intelligent scheduling' }
    ],
    'Content & Marketing': [
      { name: 'AI Content Writer Pro', url: '/ai-content-writer', description: 'AI content generation' },
      { name: 'AI Social Media Manager', url: '/ai-social-media-manager', description: 'Automated social media' },
      { name: 'AI Email Marketing Suite', url: '/ai-email-marketing', description: 'Smart email campaigns' },
      { name: 'AI SEO Optimizer', url: '/ai-seo-optimizer', description: 'SEO automation' },
      { name: 'AI Lead Generation', url: '/ai-lead-generation', description: 'Automated lead generation' }
    ],
    'Business & Finance': [
      { name: 'AI CRM Intelligence', url: '/ai-crm', description: 'Smart CRM solutions' },
      { name: 'AI Financial Analyzer', url: '/ai-financial-analyzer', description: 'Advanced financial insights' },
      { name: 'AI Invoice Generator', url: '/ai-invoice-generator', description: 'Automated invoicing' },
      { name: 'AI Expense Tracker', url: '/ai-expense-tracker', description: 'Smart expense management' }
    ],
    'Customer Service': [
      { name: 'AI Customer Support Bot', url: '/ai-customer-support-bot', description: '24/7 AI support' },
      { name: 'AI Chatbot Builder', url: '/ai-chatbot-builder', description: 'Custom chatbot creation' },
      { name: 'AI Email Assistant', url: '/ai-email-assistant', description: 'Smart email management' }
    ],
    'Development': [
      { name: 'AI Code Review Assistant', url: '/ai-code-generation', description: 'Automated code analysis' },
      { name: 'AI Mobile App Builder', url: '/ai-mobile-app-development', description: 'Mobile app development' },
      { name: 'AI Document Processor', url: '/ai-document-processing', description: 'Document automation' }
    ],
    'Creative': [
      { name: 'AI Video Generator', url: '/ai-video-generation', description: 'AI video creation' },
      { name: 'AI Voice Cloning', url: '/ai-voice-cloning', description: 'Voice synthesis' },
      { name: 'AI Music Composer', url: '/ai-music-composition', description: 'AI music creation' },
      { name: 'AI Fashion Design', url: '/ai-fashion-design', description: 'Fashion design AI' }
    ]
  };

  const aiServices = [
    { name: 'Machine Learning Solutions', url: '/machine-learning' },
    { name: 'Natural Language Processing', url: '/ai-nlp' },
    { name: 'Computer Vision', url: '/computer-vision' },
    { name: 'AI Automation', url: '/ai-automation' },
    { name: 'AI Data Visualization', url: '/ai-data-visualization' },
    { name: 'AI Predictive Analytics', url: '/ai-predictive-analytics' }
  ];

  const itServices = [
    { name: 'Cloud Migration', url: '/cloud-migration' },
    { name: 'Cybersecurity', url: '/cybersecurity' },
    { name: 'DevOps & CI/CD', url: '/devops' },
    { name: 'Database Services', url: '/database-services' },
    { name: 'Web Development', url: '/web-development' },
    { name: 'Mobile App Development', url: '/mobile-app-development' }
  ];

  const specializedServices = [
    { name: 'Quantum Computing', url: '/quantum-computing' },
    { name: 'Autonomous Systems', url: '/autonomous-systems' },
    { name: 'Blockchain & Web3', url: '/blockchain' },
    { name: 'IoT & Edge Computing', url: '/iot-edge' },
    { name: 'Business Intelligence', url: '/business-intelligence' },
    { name: 'Robotics Solutions', url: '/robotics' }
  ];

  const socialLinks = [
    { name: 'Facebook', href: 'https://facebook.com/ziontechgroup', icon: Facebook },
    { name: 'Twitter', href: 'https://twitter.com/ziontechgroup', icon: Twitter },
    { name: 'LinkedIn', href: 'https://linkedin.com/company/ziontechgroup', icon: Linkedin },
    { name: 'Instagram', href: 'https://instagram.com/ziontechgroup', icon: Instagram },
    { name: 'GitHub', href: 'https://github.com/ziontechgroup', icon: Github },
    { name: 'YouTube', href: 'https://youtube.com/@ziontechgroup', icon: Youtube }
  ];

  return (
    <footer className="bg-slate-900 border-t border-cyan-400/20">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-br from-cyan-400 to-purple-600 rounded-lg flex items-center justify-center">
                <Brain className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold text-white neon-text">Zion Tech Group</span>
            </div>
            <p className="text-gray-300 text-sm leading-relaxed">
              Leading provider of AI and IT solutions, empowering businesses with cutting-edge technology and innovative micro SAAS applications.
            </p>
            <div className="space-y-2">
              <div className="flex items-center space-x-2 text-gray-300">
                <Phone className="w-4 h-4 text-cyan-400" />
                <a href="tel:+13024640950" className="hover:text-cyan-400 transition-colors">
                  +1 302 464 0950
                </a>
              </div>
              <div className="flex items-center space-x-2 text-gray-300">
                <Mail className="w-4 h-4 text-cyan-400" />
                <a href="mailto:kleber@ziontechgroup.com" className="hover:text-cyan-400 transition-colors">
                  kleber@ziontechgroup.com
                </a>
              </div>
              <div className="flex items-center space-x-2 text-gray-300">
                <MapPin className="w-4 h-4 text-cyan-400" />
                <span>364 E Main St STE 1008, Middletown, DE 19709</span>
              </div>
            </div>
            <div className="flex space-x-4">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-cyan-400 transition-colors"
                  aria-label={social.name}
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-white">Quick Links</h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-gray-300 hover:text-cyan-400 transition-colors text-sm"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Micro SAAS Services */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-white">Micro SAAS Services</h3>
            <div className="space-y-3">
              {Object.entries(microSaasServices).map(([category, services]) => (
                <div key={category}>
                  <h4 className="text-cyan-400 font-medium text-sm mb-2">{category}</h4>
                  <ul className="space-y-1">
                    {services.slice(0, 3).map((service) => (
                      <li key={service.name}>
                        <a
                          href={service.url}
                          className="text-gray-300 hover:text-cyan-400 transition-colors text-xs"
                        >
                          {service.name}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Enterprise Services */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-white">Enterprise Services</h3>
            <div className="space-y-3">
              <div>
                <h4 className="text-cyan-400 font-medium text-sm mb-2">AI Services</h4>
                <ul className="space-y-1">
                  {aiServices.slice(0, 4).map((service) => (
                    <li key={service.name}>
                      <a
                        href={service.url}
                        className="text-gray-300 hover:text-cyan-400 transition-colors text-xs"
                      >
                        {service.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h4 className="text-cyan-400 font-medium text-sm mb-2">IT Services</h4>
                <ul className="space-y-1">
                  {itServices.slice(0, 4).map((service) => (
                    <li key={service.name}>
                      <a
                        href={service.url}
                        className="text-gray-300 hover:text-cyan-400 transition-colors text-xs"
                      >
                        {service.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h4 className="text-cyan-400 font-medium text-sm mb-2">Specialized</h4>
                <ul className="space-y-1">
                  {specializedServices.slice(0, 4).map((service) => (
                    <li key={service.name}>
                      <a
                        href={service.url}
                        className="text-gray-300 hover:text-cyan-400 transition-colors text-xs"
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

        {/* Bottom Section */}
        <div className="border-t border-gray-700 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-gray-400 text-sm">
              © {currentYear} Zion Tech Group. All rights reserved.
            </div>
            <div className="flex space-x-6 text-sm">
              <a href="/privacy" className="text-gray-400 hover:text-cyan-400 transition-colors">
                Privacy Policy
              </a>
              <a href="/terms" className="text-gray-400 hover:text-cyan-400 transition-colors">
                Terms of Service
              </a>
              <a href="/sitemap" className="text-gray-400 hover:text-cyan-400 transition-colors">
                Sitemap
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default memo(Footer);
