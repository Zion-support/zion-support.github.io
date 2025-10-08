import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, Clock, Award, Shield, Zap, Brain, Settings, Cpu, ArrowRight, Star, CheckCircle, Globe, Code, Database, Cloud, Lock, BarChart3, Smartphone, Wifi, Users, FileText, ExternalLink } from 'lucide-react';

const Footer: React.FC = () => {
  const microSaasServices = [
    { name: 'AI Content Generator', link: '/micro-saas/ai-content-generator', price: '$79/mo' },
    { name: 'Social Media Scheduler', link: '/micro-saas/social-scheduler', price: '$99/mo' },
    { name: 'Email Marketing AI', link: '/micro-saas/email-ai', price: '$149/mo' },
    { name: 'Analytics Dashboard', link: '/micro-saas/analytics', price: '$199/mo' },
    { name: 'CRM Automation', link: '/micro-saas/crm-ai', price: '$299/mo' },
    { name: 'Invoice Generator', link: '/micro-saas/invoice-ai', price: '$79/mo' }
  ];

  const aiServices = [
    { name: 'AI Data Analytics', link: '/ai-data-analytics', price: '$1,299/mo' },
    { name: 'AI Cybersecurity', link: '/ai-cybersecurity', price: '$2,499/mo' },
    { name: 'AI Workflow Automation', link: '/ai-workflow-automation', price: '$399/mo' },
    { name: 'AI Cloud Infrastructure', link: '/ai-cloud-infrastructure', price: '$2,999/mo' },
    { name: 'AI E-commerce Solutions', link: '/ai-ecommerce-solutions', price: '$1,999/mo' },
    { name: 'AI Mobile App Development', link: '/ai-mobile-app-development', price: '$4,999/project' }
  ];

  const itServices = [
    { name: 'Cloud Migration', link: '/it-services/cloud-migration', price: '$2,500/project' },
    { name: 'DevOps & CI/CD', link: '/it-services/devops', price: '$1,800/mo' },
    { name: 'Database Administration', link: '/it-services/database', price: '$1,200/mo' },
    { name: 'API Development', link: '/it-services/api-dev', price: '$1,500/project' },
    { name: 'System Integration', link: '/it-services/integration', price: '$2,200/project' },
    { name: 'IT Consulting', link: '/it-services/consulting', price: '$200/hr' }
  ];

  const specializedServices = [
    { name: 'Quantum Computing', link: '/quantum-computing', price: 'Custom' },
    { name: 'Autonomous Systems', link: '/autonomous-systems', price: '$2,500/mo' },
    { name: 'Blockchain & Web3', link: '/blockchain-web3', price: '$8,000/project' },
    { name: 'IoT & Edge Computing', link: '/iot-edge-computing', price: '$2,500/mo' },
    { name: 'Business Intelligence', link: '/business-intelligence', price: '$1,800/mo' },
    { name: 'Cybersecurity', link: '/cybersecurity', price: '$2,500/mo' }
  ];

  return (
    <footer className="relative bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white py-16 overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 cyber-grid opacity-20"></div>
      <div className="absolute inset-0 bg-gradient-to-t from-slate-900/50 to-transparent"></div>
      
      <div className="relative container mx-auto px-4">
        {/* Main Footer Content */}
        <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-8 mb-12">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <div className="flex items-center mb-6">
              <span className="text-4xl mr-3">⚡</span>
              <h3 className="text-3xl font-bold bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">
                Zion Tech Group
              </h3>
            </div>
            <p className="text-gray-300 mb-6 leading-relaxed">
              Leading provider of enterprise AI solutions, quantum computing, autonomous systems, 
              and comprehensive IT services. Transforming businesses through cutting-edge technology.
            </p>
            
            {/* Contact Info */}
            <div className="space-y-4">
              <div className="flex items-center group">
                <Phone className="w-5 h-5 mr-3 text-cyan-400 group-hover:text-cyan-300 transition-colors" />
                <a href="tel:+13024640950" className="text-gray-300 hover:text-cyan-400 transition-colors font-medium">
                  +1 302 464 0950
                </a>
              </div>
              <div className="flex items-center group">
                <Mail className="w-5 h-5 mr-3 text-cyan-400 group-hover:text-cyan-300 transition-colors" />
                <a href="mailto:kleber@ziontechgroup.com" className="text-gray-300 hover:text-cyan-400 transition-colors font-medium">
                  kleber@ziontechgroup.com
                </a>
              </div>
              <div className="flex items-center group">
                <MapPin className="w-5 h-5 mr-3 text-cyan-400 group-hover:text-cyan-300 transition-colors" />
                <span className="text-gray-300 font-medium">364 E Main St STE 1008, Middletown DE 19709</span>
              </div>
              <div className="flex items-center group">
                <Clock className="w-5 h-5 mr-3 text-cyan-400 group-hover:text-cyan-300 transition-colors" />
                <span className="text-gray-300 font-medium">24/7 Support Available</span>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex space-x-4 mt-6">
              <a 
                href="https://linkedin.com/company/ziontechgroup" 
                className="w-10 h-10 bg-slate-800/50 rounded-lg flex items-center justify-center text-gray-300 hover:text-cyan-400 hover:bg-slate-700/50 transition-all duration-300 group"
                aria-label="LinkedIn"
              >
                <svg className="w-5 h-5 group-hover:scale-110 transition-transform" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </a>
              <a 
                href="https://twitter.com/ziontechgroup" 
                className="w-10 h-10 bg-slate-800/50 rounded-lg flex items-center justify-center text-gray-300 hover:text-cyan-400 hover:bg-slate-700/50 transition-all duration-300 group"
                aria-label="Twitter"
              >
                <svg className="w-5 h-5 group-hover:scale-110 transition-transform" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                </svg>
              </a>
              <a 
                href="https://github.com/ziontechgroup" 
                className="w-10 h-10 bg-slate-800/50 rounded-lg flex items-center justify-center text-gray-300 hover:text-cyan-400 hover:bg-slate-700/50 transition-all duration-300 group"
                aria-label="GitHub"
              >
                <svg className="w-5 h-5 group-hover:scale-110 transition-transform" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Micro SAAS Services */}
          <div>
            <div className="flex items-center mb-6">
              <Zap className="w-6 h-6 text-yellow-400 mr-2" />
              <h4 className="text-xl font-bold text-cyan-400">Micro SAAS Solutions</h4>
            </div>
            <div className="space-y-3">
              {microSaasServices.map((service, index) => (
                <Link 
                  key={index}
                  to={service.link}
                  className="block p-3 rounded-lg hover:bg-slate-800/50 transition-all duration-300 group"
                >
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="text-white font-medium group-hover:text-cyan-400 transition-colors">
                        {service.name}
                      </div>
                      <div className="text-cyan-400 text-sm font-semibold">
                        {service.price}
                      </div>
                    </div>
                    <ArrowRight className="w-4 h-4 text-gray-400 group-hover:text-cyan-400 transition-colors" />
                  </div>
                </Link>
              ))}
            </div>
          </div>

          {/* AI Services */}
          <div>
            <div className="flex items-center mb-6">
              <Brain className="w-6 h-6 text-purple-400 mr-2" />
              <h4 className="text-xl font-bold text-cyan-400">AI Services</h4>
            </div>
            <div className="space-y-3">
              {aiServices.map((service, index) => (
                <Link 
                  key={index}
                  to={service.link}
                  className="block p-3 rounded-lg hover:bg-slate-800/50 transition-all duration-300 group"
                >
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="text-white font-medium group-hover:text-cyan-400 transition-colors">
                        {service.name}
                      </div>
                      <div className="text-cyan-400 text-sm font-semibold">
                        {service.price}
                      </div>
                    </div>
                    <ArrowRight className="w-4 h-4 text-gray-400 group-hover:text-cyan-400 transition-colors" />
                  </div>
                </Link>
              ))}
            </div>
          </div>

          {/* IT & Specialized Services */}
          <div>
            <div className="flex items-center mb-6">
              <Settings className="w-6 h-6 text-green-400 mr-2" />
              <h4 className="text-xl font-bold text-cyan-400">IT & Specialized</h4>
            </div>
            <div className="space-y-3">
              {itServices.map((service, index) => (
                <Link 
                  key={index}
                  to={service.link}
                  className="block p-3 rounded-lg hover:bg-slate-800/50 transition-all duration-300 group"
                >
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="text-white font-medium group-hover:text-cyan-400 transition-colors">
                        {service.name}
                      </div>
                      <div className="text-cyan-400 text-sm font-semibold">
                        {service.price}
                      </div>
                    </div>
                    <ArrowRight className="w-4 h-4 text-gray-400 group-hover:text-cyan-400 transition-colors" />
                  </div>
                </Link>
              ))}
              {specializedServices.map((service, index) => (
                <Link 
                  key={index + itServices.length}
                  to={service.link}
                  className="block p-3 rounded-lg hover:bg-slate-800/50 transition-all duration-300 group"
                >
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="text-white font-medium group-hover:text-cyan-400 transition-colors">
                        {service.name}
                      </div>
                      <div className="text-cyan-400 text-sm font-semibold">
                        {service.price}
                      </div>
                    </div>
                    <ArrowRight className="w-4 h-4 text-gray-400 group-hover:text-cyan-400 transition-colors" />
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>

        {/* Quick Links Section */}
        <div className="border-t border-slate-700 pt-8 mb-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <h5 className="text-lg font-semibold text-cyan-400 mb-4 flex items-center">
                <Globe className="w-5 h-5 mr-2" />
                Quick Links
              </h5>
              <ul className="space-y-2">
                <li><Link to="/" className="text-gray-300 hover:text-cyan-400 transition-colors">Home</Link></li>
                <li><Link to="/about" className="text-gray-300 hover:text-cyan-400 transition-colors">About</Link></li>
                <li><Link to="/services" className="text-gray-300 hover:text-cyan-400 transition-colors">All Services</Link></li>
                <li><Link to="/case-studies" className="text-gray-300 hover:text-cyan-400 transition-colors">Case Studies</Link></li>
                <li><Link to="/enterprise" className="text-gray-300 hover:text-cyan-400 transition-colors">Enterprise</Link></li>
                <li><Link to="/team" className="text-gray-300 hover:text-cyan-400 transition-colors">Team</Link></li>
              </ul>
            </div>
            
            <div>
              <h5 className="text-lg font-semibold text-cyan-400 mb-4 flex items-center">
                <Code className="w-5 h-5 mr-2" />
                Resources
              </h5>
              <ul className="space-y-2">
                <li><Link to="/blog" className="text-gray-300 hover:text-cyan-400 transition-colors">Blog & Insights</Link></li>
                <li><Link to="/guides" className="text-gray-300 hover:text-cyan-400 transition-colors">Technical Guides</Link></li>
                <li><a href="https://docs.ziontechgroup.com" className="text-gray-300 hover:text-cyan-400 transition-colors flex items-center">
                  Documentation <ExternalLink className="w-3 h-3 ml-1" />
                </a></li>
                <li><a href="https://github.com/ziontechgroup" className="text-gray-300 hover:text-cyan-400 transition-colors flex items-center">
                  GitHub <ExternalLink className="w-3 h-3 ml-1" />
                </a></li>
              </ul>
            </div>
            
            <div>
              <h5 className="text-lg font-semibold text-cyan-400 mb-4 flex items-center">
                <Shield className="w-5 h-5 mr-2" />
                Legal
              </h5>
              <ul className="space-y-2">
                <li><Link to="/privacy" className="text-gray-300 hover:text-cyan-400 transition-colors">Privacy Policy</Link></li>
                <li><Link to="/terms" className="text-gray-300 hover:text-cyan-400 transition-colors">Terms of Service</Link></li>
                <li><Link to="/sitemap" className="text-gray-300 hover:text-cyan-400 transition-colors">Sitemap</Link></li>
              </ul>
            </div>
            
            <div>
              <h5 className="text-lg font-semibold text-cyan-400 mb-4 flex items-center">
                <Star className="w-5 h-5 mr-2" />
                Why Choose Us
              </h5>
              <ul className="space-y-2 text-sm text-gray-300">
                <li className="flex items-center"><CheckCircle className="w-4 h-4 text-green-400 mr-2" />500+ Enterprise Clients</li>
                <li className="flex items-center"><CheckCircle className="w-4 h-4 text-green-400 mr-2" />$2.5B+ Cost Savings</li>
                <li className="flex items-center"><CheckCircle className="w-4 h-4 text-green-400 mr-2" />99.9% Uptime Guarantee</li>
                <li className="flex items-center"><CheckCircle className="w-4 h-4 text-green-400 mr-2" />24/7 Support</li>
                <li className="flex items-center"><CheckCircle className="w-4 h-4 text-green-400 mr-2" />300% Average ROI</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="border-t border-slate-700 pt-8">
          <div className="flex flex-col lg:flex-row justify-between items-center">
            <div className="flex flex-col lg:flex-row items-center space-y-4 lg:space-y-0 lg:space-x-8 mb-4 lg:mb-0">
              <p className="text-gray-300 text-sm">
                &copy; 2024 Zion Tech Group. All rights reserved.
              </p>
              <div className="flex space-x-6 text-sm">
                <Link to="/privacy" className="text-gray-400 hover:text-cyan-400 transition-colors">
                  Privacy Policy
                </Link>
                <Link to="/terms" className="text-gray-400 hover:text-cyan-400 transition-colors">
                  Terms of Service
                </Link>
                <Link to="/sitemap" className="text-gray-400 hover:text-cyan-400 transition-colors">
                  Sitemap
                </Link>
              </div>
            </div>
            
            <div className="text-center lg:text-right">
              <p className="text-gray-400 text-sm mb-2">
                Ready to transform your business?
              </p>
              <Link to="/contact" className="cyber-button text-sm">
                Get Started Today
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
