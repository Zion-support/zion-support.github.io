import React from 'react'
import { Link } from 'react-router-dom'
import { Lock, BarChart3, FileText } from 'lucide-react'
import { Phone, Mail, Zap, Brain, ArrowRight } from 'lucide-react'
import { MapPin } from 'lucide-react'

const Footer: React.FC = () => {
  const microSaasServices = [
    { name: 'AI Project Manager', url: '/ai-project-manager', description: 'Intelligent project planning' },
    { name: 'AI Social Media Manager', url: '/ai-social-media-manager', description: 'Automated social media' },
    { name: 'AI Analytics Dashboard', url: '/ai-analytics-dashboard', description: 'Data insights & analytics' },
    { name: 'AI Email Marketing', url: '/ai-email-marketing', description: 'Smart email campaigns' },
    { name: 'AI Customer Support Bot', url: '/ai-customer-support-bot', description: '24/7 AI support' },
    { name: 'AI Code Review Assistant', url: '/ai-code-generation', description: 'Automated code analysis' },
    { name: 'AI Video Generator Pro', url: '/ai-video-generation', description: 'AI-powered video creation' },
    { name: 'AI Voice Cloning Studio', url: '/ai-voice-cloning', description: 'Realistic voice synthesis' },
    { name: 'AI Music Composer', url: '/ai-music-composition', description: 'AI-generated music' },
    { name: 'AI Fashion Designer', url: '/ai-fashion-design', description: 'AI fashion design' },
    { name: 'AI Fitness Coach', url: '/ai-fitness-coach', description: 'Personalized fitness plans' },
    { name: 'AI 3D Generation Studio', url: '/ai-3d-generation', description: 'AI 3D content creation' }
  ]

  const aiServices = [
    { name: 'Machine Learning', url: '/machine-learning', description: 'Custom ML models' },
    { name: 'Natural Language Processing', url: '/nlp', description: 'Text analysis & understanding' },
    { name: 'Computer Vision', url: '/computer-vision', description: 'Image & video analysis' },
    { name: 'AI Automation', url: '/ai-automation', description: 'Process automation' },
    { name: 'Quantum AI Computing', url: '/quantum-ai', description: 'Next-gen algorithms' },
    { name: 'AI Cybersecurity', url: '/ai-cybersecurity', description: 'AI-powered security' },
    { name: 'AI Healthcare Solutions', url: '/ai-healthcare', description: 'Medical AI applications' },
    { name: 'AI Fintech Solutions', url: '/ai-fintech', description: 'Financial AI services' },
    { name: 'AI Mobile App Development', url: '/ai-mobile-app-development', description: 'Smart mobile apps' },
    { name: 'AI CRM Solutions', url: '/ai-crm', description: 'Intelligent customer management' },
    { name: 'AI Email Assistant', url: '/ai-email-assistant', description: 'Smart email management' },
    { name: 'AI Scheduler Pro', url: '/ai-scheduler', description: 'Intelligent scheduling' }
  ]

  const itServices = [
    { name: 'Cloud Services', url: '/cloud-services', description: 'AWS/Azure/GCP setup' },
    { name: 'Cybersecurity', url: '/cybersecurity', description: 'Advanced security solutions' },
    { name: 'DevOps & CI/CD', url: '/devops', description: 'Automated workflows' },
    { name: 'Database Services', url: '/database-services', description: 'Database optimization' },
    { name: 'Network Infrastructure', url: '/network-infrastructure', description: 'Enterprise networking' },
    { name: 'IT Support & Helpdesk', url: '/it-support', description: '24/7 technical support' },
    { name: 'IT Consulting', url: '/it-consulting', description: 'Strategic IT guidance' },
    { name: 'Cloud Migration', url: '/cloud-migration', description: 'Seamless cloud migration' },
    { name: 'Compliance & Governance', url: '/compliance', description: 'Regulatory compliance' },
    { name: 'Developer Tools', url: '/developer-tools', description: 'Advanced dev tools' },
    { name: 'Marketing Tools', url: '/marketing-tools', description: 'Marketing automation' },
    { name: 'Productivity Solutions', url: '/productivity', description: 'Enterprise productivity' }
  ]

  const specializedServices = [
    { name: 'Quantum Computing', url: '/quantum-computing', description: 'Quantum algorithms' },
    { name: 'Autonomous Systems', url: '/autonomous-systems', description: 'Self-managing systems' },
    { name: 'Blockchain & Web3', url: '/blockchain', description: 'Decentralized solutions' },
    { name: 'IoT & Edge Computing', url: '/iot-edge', description: 'Connected devices' },
    { name: 'Business Intelligence', url: '/business-intelligence', description: 'Data-driven insights' },
    { name: 'Robotics Solutions', url: '/robotics', description: 'Intelligent automation' },
    { name: 'Enterprise Solutions', url: '/enterprise', description: 'Enterprise-grade solutions' },
    { name: 'Analytics Tools', url: '/analytics-tools', description: 'Advanced analytics' },
    { name: 'Business Apps', url: '/business-apps', description: 'Custom business apps' },
    { name: 'Expense Tracker Pro', url: '/expense-tracker', description: 'AI expense management' },
    { name: 'Task Manager Pro', url: '/task-manager-pro', description: 'AI task management' },
    { name: 'Smart Analytics', url: '/smart-analytics', description: 'Intelligent analytics' }
  ]

  const additionalServices = [
    { name: 'AI Project Manager', url: '/ai-project-manager', description: 'Intelligent project planning' },
    { name: 'AI Social Media Manager', url: '/ai-social-media-manager', description: 'Automated social media' },
    { name: 'AI Email Marketing', url: '/ai-email-marketing', description: 'Smart email campaigns' },
    { name: 'AI Customer Support Bot', url: '/ai-customer-support-bot', description: '24/7 AI support' },
    { name: 'AI SEO Optimizer', url: '/ai-seo-optimizer', description: 'SEO automation' },
    { name: 'AI Financial Analyzer', url: '/ai-financial-analyzer', description: 'Financial insights' }
  ]

  const companyLinks = [
    { name: 'About Us', url: '/about' },
    { name: 'Our Team', url: '/team' },
    { name: 'Careers', url: '/careers' },
    { name: 'Case Studies', url: '/case-studies' },
    { name: 'Blog', url: '/blog' },
    { name: 'News', url: '/news' },
    { name: 'Pricing', url: '/pricing' },
    { name: 'Demo', url: '/demo' }
  ]

  const supportLinks = [
    { name: 'Contact Us', url: '/contact' },
    { name: 'Support Center', url: '/support' },
    { name: 'Documentation', url: '/docs' },
    { name: 'API Reference', url: '/api-docs' },
    { name: 'Status Page', url: '/status' },
    { name: 'System Health', url: '/system-status' }
  ]

  const legalLinks = [
    { name: 'Privacy Policy', url: '/privacy' },
    { name: 'Terms of Service', url: '/terms' },
    { name: 'Cookie Policy', url: '/cookies' },
    { name: 'GDPR Compliance', url: '/gdpr' },
    { name: 'Security', url: '/security' },
    { name: 'Compliance', url: '/compliance' }
  ]

const Footer = () => {
  return (
    <footer className=&quot;bg-slate-900/95 backdrop-blur-md border-t border-cyan-400/20&quot;>
      <div className=&quot;container mx-auto px-4 py-12&quot;></div>
        <div className=&quot;grid grid-cols-1 lg:grid-cols-5 gap-8&quot;></div>
          {/* Company Info */}
          <div className=&quot;lg:col-span-1&quot;></div>
            <div className=&quot;flex items-center space-x-2 mb-4&quot;></div>
              <div className=&quot;w-8 h-8 bg-gradient-to-br from-cyan-400 to-purple-600 rounded-lg flex items-center justify-center&quot;></div>
                <Brain className=&quot;w-5 h-5 text-white&quot; />
              </div>
              <span className=&quot;text-xl font-bold text-white neon-text&quot;>Zion Tech Group</span>
            </div>
            <p className=&quot;text-gray-300 mb-6 leading-relaxed&quot;>
              Leading provider of AI-powered enterprise solutions, quantum computing, and digital transformation services.
            </p>
            <div className=&quot;space-y-3&quot;></div>
              <div className=&quot;flex items-center space-x-3 text-gray-300&quot;></div>
                <Phone className=&quot;w-4 h-4 text-cyan-400&quot; />
                <a href=&quot;tel:+13024640950&quot; className=&quot;hover:text-cyan-400 transition-colors&quot;>
                  +1 302 464 0950
                </a>
              </div>
              <div className=&quot;flex items-center space-x-3 text-gray-300&quot;></div>
                <Mail className=&quot;w-4 h-4 text-cyan-400&quot; />
                <a href=&quot;mailto:kleber@ziontechgroup.com&quot; className=&quot;hover:text-cyan-400 transition-colors&quot;>
                  kleber@ziontechgroup.com
                </a>
              </div>
              <div className=&quot;flex items-center space-x-3 text-gray-300&quot;></div>
                <MapPin className=&quot;w-4 h-4 text-cyan-400&quot; />
                <span>364 E Main St STE 1008, Middletown DE 19709</span>
              </div>
            </div>
          </div>
          {/* Micro SAAS Services */}
          <div></div>
            <h3 className=&quot;text-cyan-400 font-semibold mb-4 flex items-center&quot;></h3>
              <Zap className=&quot;w-4 h-4 mr-2&quot; />
              Micro SAAS
            </h3>
            <ul className=&quot;space-y-2&quot;>
              {microSaasServices.map((service) => (
                <li key={service.name}>
                  <a href={service.url}
                    className=&quot;group flex items-center text-sm text-gray-300 hover:text-cyan-400 transition-colors&quot;
                  >
                    <span>{service.name}</span>
                    <ArrowRight className=&quot;w-3 h-3 ml-1 group-hover:translate-x-1 transition-transform duration-300&quot; />
                  </a>
                </li>
              ))}
            </ul>
            <a href=&quot;/services&quot;
              className=&quot;inline-flex items-center text-cyan-400 hover:text-white transition-colors mt-4&quot;
            >
              View All Micro SAAS →
            </a>
          </div>
          {/* AI & IT Services */}
          <div></div>
            <h3 className=&quot;text-cyan-400 font-semibold mb-4 flex items-center&quot;></h3>
              <Brain className=&quot;w-4 h-4 mr-2&quot; />
              AI & IT Services
            </h3>
            <div className=&quot;space-y-4&quot;></div>
              <div></div>
                <h4 className=&quot;text-white font-medium mb-2&quot;>AI Services</h4>
                <ul className=&quot;space-y-1&quot;>
                  {aiServices.slice(0, 3).map((service) => (
                    <li key={service.name}>
                      <a href={service.url}
                        className=&quot;text-sm text-gray-300 hover:text-cyan-400 transition-colors&quot;
                      >
                        {service.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
              <div></div>
                <h4 className=&quot;text-white font-medium mb-2&quot;>IT Services</h4>
                <ul className=&quot;space-y-1&quot;>
                  {itServices.slice(0, 3).map((service) => (
                    <li key={service.name}>
                      <a href={service.url}
                        className=&quot;text-sm text-gray-300 hover:text-cyan-400 transition-colors&quot;
                      >
                        {service.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <a href=&quot;/services&quot;
              className=&quot;inline-flex items-center text-cyan-400 hover:text-white transition-colors mt-4&quot;
            >
              View All Services →
            </a>
          </div>
          {/* Additional AI Services */}
          <div></div>
            <h3 className=&quot;text-cyan-400 font-semibold mb-4 flex items-center&quot;></h3>
              <Zap className=&quot;w-4 h-4 mr-2&quot; />
              AI Tools
            </h3>
            <ul className=&quot;space-y-2&quot;>
              {additionalServices.map((service) => (
                <li key={service.name}>
                  <a;
                    href={service.url}
                    className=&quot;group flex items-center text-sm text-gray-300 hover:text-cyan-400 transition-colors&quot;
                  >
                    <span>{service.name}</span>
                    <ArrowRight className=&quot;w-3 h-3 ml-1 group-hover:translate-x-1 transition-transform duration-300&quot; />
                  </a>
                </li>
              ))}
            </ul>
          </div>
          {/* Company & Support */}
          <div></div>
            <h3 className=&quot;text-cyan-400 font-semibold mb-4&quot;>Company</h3>
            <div className=&quot;grid grid-cols-2 gap-4&quot;></div>
              <div></div>
                <h4 className=&quot;text-white font-medium mb-2&quot;>Company</h4>
                <ul className=&quot;space-y-1&quot;>
                  {companyLinks.slice(0, 4).map((link) => (
                    <li key={link.name}>
                      <a href={link.url}
                        className=&quot;text-sm text-gray-300 hover:text-cyan-400 transition-colors&quot;
                      >
                        {link.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
              <div></div>
                <h4 className=&quot;text-white font-medium mb-2&quot;>Support</h4>
                <ul className=&quot;space-y-1&quot;>
                  {supportLinks.slice(0, 4).map((link) => (
                    <li key={link.name}>
                      <a href={link.url}
                        className=&quot;text-sm text-gray-300 hover:text-cyan-400 transition-colors&quot;
                      >
                        {link.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
        {/* Bottom Section */}
        <div className=&quot;border-t border-gray-700 mt-8 pt-8&quot;></div>
          <div className=&quot;flex flex-col md:flex-row justify-between items-center&quot;></div>
            <div className=&quot;text-gray-400 text-sm mb-4 md:mb-0&quot;></div>
              © 2024 Zion Tech Group. All rights reserved.
            </div>
            <div className=&quot;flex space-x-6&quot;></div>
              {legalLinks.map((link) => (
                <a key={link.name}
                  href={link.url}
                  className=&quot;text-sm text-gray-400 hover:text-cyan-400 transition-colors&quot;
                >
                  {link.name}
                </a>
              ))}
            </div>
          </div>
>>>>>>> 33a3472fdd6542a46cedfafebd3b6b0a7cc5e02d
        </div>
      </div>
    </footer>
  )
}

export default Footer;