'use client'
import React, { memo } from 'react'
import { Link } from 'react-router-dom'
import { Phone, Mail, MapPin, Clock, Zap, Brain, Cloud, Code, Users } from 'lucide-react'

const Footer: React.FC = memo(() => {
  const currentYear = new Date().getFullYear()
  
  const aiServices = [
    { name: 'AI Strategy & Consulting', url: '/ai-services', description: 'Strategic AI consulting' },
    { name: 'Machine Learning Solutions', url: '/ai-services', description: 'Custom ML models' },
    { name: 'Natural Language Processing', url: '/ai-services', description: 'NLP and chatbots' },
    { name: 'Computer Vision', url: '/ai-services', description: 'Image and video analysis' },
    { name: 'AI Automation', url: '/ai-services', description: 'Process automation' },
    { name: 'AI Data Analytics', url: '/ai-services', description: 'Intelligent analytics' }
  ]
  
  const itServices = [
    { name: 'Cloud Infrastructure', url: '/it-services', description: 'AWS, Azure, GCP' },
    { name: 'DevOps & CI/CD', url: '/it-services', description: 'Automation pipelines' },
    { name: 'Cybersecurity', url: '/it-services', description: 'Security solutions' },
    { name: 'Managed IT Services', url: '/it-services', description: '24/7 IT support' },
    { name: 'Database Management', url: '/it-services', description: 'Database optimization' },
    { name: 'Network Solutions', url: '/it-services', description: 'Network infrastructure' }
  ]
  
  const microSaasServices = [
    { name: 'Business Intelligence', url: '/micro-saas', description: 'Analytics dashboard' },
    { name: 'AI Customer Support', url: '/micro-saas', description: 'Chatbot solutions' },
    { name: 'Email Marketing', url: '/micro-saas', description: 'Marketing automation' },
    { name: 'Project Management', url: '/micro-saas', description: 'Team collaboration' },
    { name: 'Lead Generation', url: '/micro-saas', description: 'Sales automation' },
    { name: 'Financial Analytics', url: '/micro-saas', description: 'Financial management' }
  ]
  
  const companyLinks = [
    { name: 'About Us', url: '/about' },
    { name: 'Case Studies', url: '/case-studies' },
    { name: 'Blog', url: '/blog' },
    { name: 'Careers', url: '/careers' },
    { name: 'Partners', url: '/partners' },
    { name: 'Support', url: '/support' }
  ]
  
  const resourcesLinks = [
    { name: 'Pricing', url: '/pricing' },
    { name: 'FAQ', url: '/faq' },
    { name: 'Documentation', url: '/docs' },
    { name: 'API Reference', url: '/api' },
    { name: 'Tutorials', url: '/tutorials' },
    { name: 'Community', url: '/community' }
  ]

  return (
    <footer className=&quot;bg-slate-900 text-white&quot;>
      <div className=&quot;max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12&quot;></div>
        <div className=&quot;grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8&quot;></div>
          {/* Company Info */}
          <div className=&quot;lg:col-span-2 space-y-4&quot;></div>
            <div className=&quot;flex items-center space-x-2&quot;></div>
              <div className=&quot;w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center&quot;></div>
                <Brain className=&quot;w-5 h-5 text-white&quot; />
              </div>
              <span className=&quot;text-xl font-bold&quot;>Zion Tech Group</span>
            </div>
            <p className=&quot;text-gray-300 text-sm&quot;>
              Leading provider of AI and IT solutions for modern businesses.
              We help companies transform their operations with cutting-edge technology.
            </p>
            <div className=&quot;space-y-2&quot;></div>
              <div className=&quot;flex items-center text-sm text-gray-300&quot;></div>
                <Phone className=&quot;w-4 h-4 mr-2&quot; />
                <span>+1 (302) 464-0950</span>
              </div>
              <div className=&quot;flex items-center text-sm text-gray-300&quot;></div>
                <Mail className=&quot;w-4 h-4 mr-2&quot; />
                <span>kleber@ziontechgroup.com</span>
              </div>
              <div className=&quot;flex items-start text-sm text-gray-300&quot;></div>
                <MapPin className=&quot;w-4 h-4 mr-2 mt-0.5&quot; />
                <span>364 E Main St STE 1008<br />Middletown DE 19709</span>
              </div>
            </div>
          </div>
          
          {/* AI Services */}
          <div></div>
            <h3 className=&quot;text-lg font-semibold mb-4 text-cyan-400 flex items-center&quot;>
              <Brain className=&quot;w-5 h-5 mr-2&quot; />
              AI Services
            </h3>
            <ul className=&quot;space-y-2&quot;>
              {aiServices.map((service, index) => (
                <li key={index}>
                  <Link
                    to={service.url}
                    className=&quot;text-gray-300 hover:text-cyan-400 transition-colors duration-200 text-sm&quot;
                  >
                    {service.name}
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  to=&quot;/ai-services&quot;
                  className=&quot;text-cyan-400 hover:text-cyan-300 transition-colors duration-200 text-sm font-medium&quot;
                >
                  View All AI Services →
                </Link>
              </li>
            </ul>
          </div>
          
          {/* IT Services */}
          <div></div>
            <h3 className=&quot;text-lg font-semibold mb-4 text-cyan-400 flex items-center&quot;>
              <Cloud className=&quot;w-5 h-5 mr-2&quot; />
              IT Services
            </h3>
            <ul className=&quot;space-y-2&quot;>
              {itServices.map((service, index) => (
                <li key={index}>
                  <Link
                    to={service.url}
                    className=&quot;text-gray-300 hover:text-cyan-400 transition-colors duration-200 text-sm&quot;
                  >
                    {service.name}
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  to=&quot;/it-services&quot;
                  className=&quot;text-cyan-400 hover:text-cyan-300 transition-colors duration-200 text-sm font-medium&quot;
                >
                  View All IT Services →
                </Link>
              </li>
            </ul>
          </div>
          
          {/* Micro SAAS */}
          <div></div>
            <h3 className=&quot;text-lg font-semibold mb-4 text-cyan-400 flex items-center&quot;>
              <Code className=&quot;w-5 h-5 mr-2&quot; />
              Micro SAAS
            </h3>
            <ul className=&quot;space-y-2&quot;>
              {microSaasServices.slice(0, 6).map((service, index) => (
                <li key={index}>
                  <Link
                    to={service.url}
                    className=&quot;text-gray-300 hover:text-cyan-400 transition-colors duration-200 text-sm&quot;
                  >
                    {service.name}
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  to=&quot;/micro-saas&quot;
                  className=&quot;text-cyan-400 hover:text-cyan-300 transition-colors duration-200 text-sm font-medium&quot;
                >
                  View All Micro SAAS →
                </Link>
              </li>
            </ul>
          </div>
        </div>
        
        {/* Additional Links Section */}
        <div className=&quot;grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-12 pt-8 border-t border-gray-700&quot;></div>
          <div></div>
            <h3 className=&quot;text-lg font-semibold mb-4&quot;>Company</h3>
            <ul className=&quot;space-y-2&quot;>
              {companyLinks.map((link, index) => (
                <li key={index}>
                  <Link
                    to={link.url}
                    className=&quot;text-gray-300 hover:text-white text-sm transition-colors&quot;
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          
          <div></div>
            <h3 className=&quot;text-lg font-semibold mb-4&quot;>Resources</h3>
            <ul className=&quot;space-y-2&quot;>
              {resourcesLinks.map((link, index) => (
                <li key={index}>
                  <Link
                    to={link.url}
                    className=&quot;text-gray-300 hover:text-white text-sm transition-colors&quot;
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          
          <div></div>
            <h3 className=&quot;text-lg font-semibold mb-4&quot;>Quick Links</h3>
            <ul className=&quot;space-y-2&quot;>
              <li>
                <Link to=&quot;/consultation&quot; className=&quot;text-gray-300 hover:text-white text-sm transition-colors&quot;>
                  Free Consultation
                </Link>
              </li>
              <li>
                <Link to=&quot;/demo&quot; className=&quot;text-gray-300 hover:text-white text-sm transition-colors&quot;>
                  Request Demo
                </Link>
              </li>
              <li>
                <Link to=&quot;/contact&quot; className=&quot;text-gray-300 hover:text-white text-sm transition-colors&quot;>
                  Contact Sales
                </Link>
              </li>
              <li>
                <Link to=&quot;/support&quot; className=&quot;text-gray-300 hover:text-white text-sm transition-colors&quot;>
                  Technical Support
                </Link>
              </li>
            </ul>
          </div>
          
          <div></div>
            <h3 className=&quot;text-lg font-semibold mb-4&quot;>Follow Us</h3>
            <div className=&quot;flex space-x-4&quot;></div>
              <a href=&quot;https://linkedin.com/company/ziontechgroup&quot; className=&quot;text-gray-300 hover:text-white transition-colors&quot;>
                LinkedIn
              </a>
              <a href=&quot;https://twitter.com/ziontechgroup&quot; className=&quot;text-gray-300 hover:text-white transition-colors&quot;>
                Twitter
              </a>
              <a href=&quot;https://github.com/ziontechgroup&quot; className=&quot;text-gray-300 hover:text-white transition-colors&quot;>
                GitHub
              </a>
            </div>
          </div>
        </div>
        
        {/* Bottom Section */}
        <div className=&quot;border-t border-gray-700 mt-8 pt-8&quot;></div>
          <div className=&quot;flex flex-col md:flex-row justify-between items-center&quot;></div>
            <div className=&quot;text-gray-400 text-sm mb-4 md:mb-0&quot;></div>
              © {currentYear} Zion Tech Group. All rights reserved.
            </div>
            <div className=&quot;flex space-x-6&quot;></div>
              <a href=&quot;/privacy&quot; className=&quot;text-sm text-gray-400 hover:text-cyan-400 transition-colors&quot;>
                Privacy Policy
              </a>
              <a href=&quot;/terms&quot; className=&quot;text-sm text-gray-400 hover:text-cyan-400 transition-colors&quot;>
                Terms of Service
              </a>
              <a href=&quot;/cookies&quot; className=&quot;text-sm text-gray-400 hover:text-cyan-400 transition-colors&quot;>
                Cookie Policy
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
})

Footer.displayName = 'Footer'
export default Footer