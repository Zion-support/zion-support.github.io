import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, Clock, Award, Shield, Zap, Brain, Settings, Code, Star, ArrowRight } from 'lucide-react';

const Footer: React.FC = () => {
  const aiServices = [
    { name: 'AI Services Overview', href: '/ai-services' },
    { name: 'AI Marketing', href: '/ai-marketing' },
    { name: 'AI Automation', href: '/ai-automation' },
    { name: 'AI Healthcare', href: '/ai-healthcare' },
    { name: 'AI Fintech', href: '/ai-fintech' },
    { name: 'AI Data Analytics', href: '/ai-data-analytics' },
    { name: 'AI Cybersecurity', href: '/ai-cybersecurity' },
    { name: 'AI Workflow Automation', href: '/ai-workflow-automation' },
    { name: 'AI Cloud Infrastructure', href: '/ai-cloud-infrastructure' },
    { name: 'AI E-commerce Solutions', href: '/ai-ecommerce-solutions' },
    { name: 'AI Mobile App Development', href: '/ai-mobile-app-development' }
  ];

  const itServices = [
    { name: 'IT Services Overview', href: '/it-services' },
    { name: 'Cloud Infrastructure', href: '/cloud-infrastructure' },
    { name: 'Cybersecurity', href: '/cybersecurity' },
    { name: 'DevOps & CI/CD', href: '/devops' },
    { name: 'Database Administration', href: '/database-admin' },
    { name: 'Network Infrastructure', href: '/network-infrastructure' },
    { name: 'IT Support & Helpdesk', href: '/it-support' },
    { name: 'Data Analytics & BI', href: '/data-analytics' },
    { name: 'API Development', href: '/api-development' },
    { name: 'Mobile App Development', href: '/mobile-development' },
    { name: 'Web Development', href: '/web-development' }
  ];

  const microSaasServices = [
    { name: 'Micro SAAS Overview', href: '/micro-saas' },
    { name: 'AI Code Review Assistant', href: '/ai-code-review' },
    { name: 'AI SEO Optimizer', href: '/ai-seo-optimizer' },
    { name: 'Smart Invoice Generator', href: '/smart-invoice' },
    { name: 'AI Video Content Creator', href: '/ai-video-creator' },
    { name: 'Smart Project Management', href: '/smart-project-management' },
    { name: 'AI Legal Document Analyzer', href: '/ai-legal-analyzer' },
    { name: 'Smart Real Estate Analyzer', href: '/smart-real-estate' },
    { name: 'AI Fitness Coach', href: '/ai-fitness-coach' },
    { name: 'Smart Home Automation', href: '/smart-home' },
    { name: 'AI Language Learning', href: '/ai-language-learning' }
  ];

  const solutions = [
    { name: 'Quantum Computing', href: '/quantum-computing' },
    { name: 'Autonomous Systems', href: '/autonomous-systems' },
    { name: 'Business Intelligence', href: '/business-intelligence' },
    { name: 'Blockchain & Web3', href: '/blockchain-web3' },
    { name: 'IoT & Edge Computing', href: '/iot-edge-computing' },
    { name: 'Robotics', href: '/robotics' }
  ];

  const companyLinks = [
    { name: 'About Us', href: '/about' },
    { name: 'Our Team', href: '/team' },
    { name: 'Case Studies', href: '/case-studies' },
    { name: 'Blog', href: '/blog' },
    { name: 'Careers', href: '/careers' },
    { name: 'Press', href: '/press' },
    { name: 'Partners', href: '/partners' },
    { name: 'Investors', href: '/investors' }
  ];

  const supportLinks = [
    { name: 'Contact Us', href: '/contact' },
    { name: 'Support Center', href: '/support' },
    { name: 'Documentation', href: '/docs' },
    { name: 'API Reference', href: '/api-docs' },
    { name: 'Status Page', href: '/status' },
    { name: 'System Status', href: '/system-status' },
    { name: 'Help Center', href: '/help' },
    { name: 'Community', href: '/community' }
  ];

  const legalLinks = [
    { name: 'Privacy Policy', href: '/privacy' },
    { name: 'Terms of Service', href: '/terms' },
    { name: 'Cookie Policy', href: '/cookies' },
    { name: 'Data Protection', href: '/data-protection' },
    { name: 'Security', href: '/security' },
    { name: 'Compliance', href: '/compliance' },
    { name: 'Accessibility', href: '/accessibility' },
    { name: 'Sitemap', href: '/sitemap' }
  ];

  return (
    <footer className="bg-slate-900 text-white">
      {/* Main Footer Content */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <div className="flex items-center mb-6">
              <span className="text-3xl mr-3">⚡</span>
              <h3 className="text-2xl font-bold text-cyan-400">Zion Tech Group</h3>
            </div>
            <p className="text-gray-300 mb-6 leading-relaxed">
              Leading provider of enterprise AI solutions, quantum computing, autonomous systems, 
              and digital transformation services. Transforming businesses with cutting-edge technology.
            </p>
            
            {/* Contact Info */}
            <div className="space-y-3">
              <div className="flex items-center text-gray-300">
                <Phone className="w-4 h-4 mr-3 text-cyan-400" />
                <a href="tel:+13024640950" className="hover:text-cyan-400 transition-colors">
                  +1 (302) 464-0950
                </a>
              </div>
              <div className="flex items-center text-gray-300">
                <Mail className="w-4 h-4 mr-3 text-cyan-400" />
                <a href="mailto:kleber@ziontechgroup.com" className="hover:text-cyan-400 transition-colors">
                  kleber@ziontechgroup.com
                </a>
              </div>
              <div className="flex items-start text-gray-300">
                <MapPin className="w-4 h-4 mr-3 text-cyan-400 mt-1" />
                <div>
                  <p>364 E Main St STE 1008</p>
                  <p>Middletown, DE 19709</p>
                  <p>United States</p>
                </div>
              </div>
            </div>

            {/* Trust Indicators */}
            <div className="mt-8 space-y-4">
              <div className="flex items-center text-gray-300">
                <Shield className="w-5 h-5 mr-2 text-green-400" />
                <span className="text-sm">SOC 2 Type II Certified</span>
              </div>
              <div className="flex items-center text-gray-300">
                <Award className="w-5 h-5 mr-2 text-yellow-400" />
                <span className="text-sm">ISO 27001 Compliant</span>
              </div>
              <div className="flex items-center text-gray-300">
                <Clock className="w-5 h-5 mr-2 text-blue-400" />
                <span className="text-sm">24/7 Support Available</span>
              </div>
            </div>
          </div>

          {/* AI Services */}
          <div>
            <h4 className="text-lg font-semibold mb-6 flex items-center">
              <Brain className="w-5 h-5 mr-2 text-cyan-400" />
              AI Services
            </h4>
            <ul className="space-y-3">
              {aiServices.slice(0, 8).map((service, index) => (
                <li key={index}>
                  <Link 
                    to={service.href} 
                    className="text-gray-300 hover:text-cyan-400 transition-colors text-sm flex items-center group"
                  >
                    <ArrowRight className="w-3 h-3 mr-2 opacity-0 group-hover:opacity-100 transition-opacity" />
                    {service.name}
                  </Link>
                </li>
              ))}
              <li>
                <Link 
                  to="/ai-services" 
                  className="text-cyan-400 hover:text-cyan-300 transition-colors text-sm font-medium flex items-center group"
                >
                  View All AI Services
                  <ArrowRight className="w-3 h-3 ml-2 group-hover:translate-x-1 transition-transform" />
                </Link>
              </li>
            </ul>
          </div>

          {/* IT Services */}
          <div>
            <h4 className="text-lg font-semibold mb-6 flex items-center">
              <Settings className="w-5 h-5 mr-2 text-cyan-400" />
              IT Services
            </h4>
            <ul className="space-y-3">
              {itServices.slice(0, 8).map((service, index) => (
                <li key={index}>
                  <Link 
                    to={service.href} 
                    className="text-gray-300 hover:text-cyan-400 transition-colors text-sm flex items-center group"
                  >
                    <ArrowRight className="w-3 h-3 mr-2 opacity-0 group-hover:opacity-100 transition-opacity" />
                    {service.name}
                  </Link>
                </li>
              ))}
              <li>
                <Link 
                  to="/it-services" 
                  className="text-cyan-400 hover:text-cyan-300 transition-colors text-sm font-medium flex items-center group"
                >
                  View All IT Services
                  <ArrowRight className="w-3 h-3 ml-2 group-hover:translate-x-1 transition-transform" />
                </Link>
              </li>
            </ul>
          </div>

          {/* Micro SAAS */}
          <div>
            <h4 className="text-lg font-semibold mb-6 flex items-center">
              <Zap className="w-5 h-5 mr-2 text-cyan-400" />
              Micro SAAS
            </h4>
            <ul className="space-y-3">
              {microSaasServices.slice(0, 8).map((service, index) => (
                <li key={index}>
                  <Link 
                    to={service.href} 
                    className="text-gray-300 hover:text-cyan-400 transition-colors text-sm flex items-center group"
                  >
                    <ArrowRight className="w-3 h-3 mr-2 opacity-0 group-hover:opacity-100 transition-opacity" />
                    {service.name}
                  </Link>
                </li>
              ))}
              <li>
                <Link 
                  to="/micro-saas" 
                  className="text-cyan-400 hover:text-cyan-300 transition-colors text-sm font-medium flex items-center group"
                >
                  View All Micro SAAS
                  <ArrowRight className="w-3 h-3 ml-2 group-hover:translate-x-1 transition-transform" />
                </Link>
              </li>
            </ul>
          </div>

          {/* Solutions & Company */}
          <div>
            <h4 className="text-lg font-semibold mb-6 flex items-center">
              <Code className="w-5 h-5 mr-2 text-cyan-400" />
              Solutions
            </h4>
            <ul className="space-y-3 mb-8">
              {solutions.map((solution, index) => (
                <li key={index}>
                  <Link 
                    to={solution.href} 
                    className="text-gray-300 hover:text-cyan-400 transition-colors text-sm flex items-center group"
                  >
                    <ArrowRight className="w-3 h-3 mr-2 opacity-0 group-hover:opacity-100 transition-opacity" />
                    {solution.name}
                  </Link>
                </li>
              ))}
            </ul>

            <h4 className="text-lg font-semibold mb-6 flex items-center">
              <Star className="w-5 h-5 mr-2 text-cyan-400" />
              Company
            </h4>
            <ul className="space-y-3">
              {companyLinks.slice(0, 6).map((link, index) => (
                <li key={index}>
                  <Link 
                    to={link.href} 
                    className="text-gray-300 hover:text-cyan-400 transition-colors text-sm flex items-center group"
                  >
                    <ArrowRight className="w-3 h-3 mr-2 opacity-0 group-hover:opacity-100 transition-opacity" />
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Newsletter Signup */}
        <div className="mt-16 pt-8 border-t border-gray-700">
          <div className="max-w-4xl mx-auto text-center">
            <h3 className="text-2xl font-bold mb-4">Stay Updated with Our Latest Innovations</h3>
            <p className="text-gray-300 mb-8">
              Get the latest news about AI breakthroughs, IT solutions, and technology trends delivered to your inbox.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email address"
                className="flex-1 px-4 py-3 rounded-lg bg-gray-800 border border-gray-600 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:border-transparent"
              />
              <button className="px-8 py-3 bg-cyan-600 hover:bg-cyan-700 text-white font-semibold rounded-lg transition-colors">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="bg-slate-950 border-t border-gray-700">
        <div className="container mx-auto px-4 py-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-gray-400 text-sm mb-4 md:mb-0">
              © 2024 Zion Tech Group. All rights reserved. | 
              <Link to="/privacy" className="hover:text-cyan-400 transition-colors ml-1">Privacy Policy</Link> | 
              <Link to="/terms" className="hover:text-cyan-400 transition-colors ml-1">Terms of Service</Link>
            </div>
            
            {/* Social Links */}
            <div className="flex space-x-6">
              <a href="https://linkedin.com/company/ziontechgroup" className="text-gray-400 hover:text-cyan-400 transition-colors">
                <span className="sr-only">LinkedIn</span>
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </a>
              <a href="https://twitter.com/ziontechgroup" className="text-gray-400 hover:text-cyan-400 transition-colors">
                <span className="sr-only">Twitter</span>
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                </svg>
              </a>
              <a href="https://github.com/ziontechgroup" className="text-gray-400 hover:text-cyan-400 transition-colors">
                <span className="sr-only">GitHub</span>
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;