import React, { memo } from 'react';
import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, Clock, Award, Shield, Zap, ArrowRight, ExternalLink, Star, Globe, Code, Brain } from 'lucide-react';

const Footer: React.FC = memo(() => {
  const currentYear = new Date().getFullYear();

  const services = [
    { name: 'Micro SAAS Solutions', url: '/micro-saas', icon: '💻', popular: true },
    { name: 'AI Services', url: '/ai-services', icon: '🤖', popular: true },
    { name: 'IT Services', url: '/it-services', icon: '⚙️', popular: true },
    { name: 'AI Marketing', url: '/ai-marketing', icon: '📢' },
    { name: 'AI Automation', url: '/ai-automation', icon: '🔄' },
    { name: 'AI Healthcare', url: '/ai-healthcare', icon: '🏥' },
    { name: 'AI Fintech', url: '/ai-fintech', icon: '💰' },
    { name: 'Quantum Computing', url: '/quantum-computing', icon: '⚛️' },
    { name: 'Autonomous Systems', url: '/autonomous-systems', icon: '🤖' },
    { name: 'Blockchain & Web3', url: '/blockchain-web3', icon: '🔗' },
    { name: 'Cybersecurity', url: '/cybersecurity', icon: '🔒' },
    { name: 'Business Intelligence', url: '/business-intelligence', icon: '📊' }
  ];

  const technologies = [
    { name: 'Machine Learning', url: '/ai-services#machine-learning' },
    { name: 'Natural Language Processing', url: '/ai-services#nlp' },
    { name: 'Computer Vision', url: '/ai-services#computer-vision' },
    { name: 'Cloud Computing', url: '/it-services#cloud' },
    { name: 'DevOps', url: '/it-services#devops' },
    { name: 'API Development', url: '/it-services#development' },
    { name: 'Data Analytics', url: '/ai-data-analytics' },
    { name: 'Mobile Development', url: '/ai-mobile-app-development' }
  ];

  const company = [
    { name: 'About Us', url: '/about' },
    { name: 'Our Team', url: '/team' },
    { name: 'Case Studies', url: '/case-studies' },
    { name: 'Enterprise', url: '/enterprise' },
    { name: 'Contact', url: '/contact' }
  ];

  const resources = [
    { name: 'Blog & Insights', url: '/blog' },
    { name: 'Technical Guides', url: '/guides' },
    { name: 'Privacy Policy', url: '/privacy' },
    { name: 'Terms of Service', url: '/terms' },
    { name: 'Documentation', url: 'https://docs.ziontechgroup.com', external: true }
  ];

  return (
    <footer className="bg-slate-900 text-white">
      {/* Main Footer Content */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <div className="flex items-center mb-6">
              <span className="text-3xl mr-2">⚡</span>
              <h3 className="text-2xl font-bold text-cyan-400 neon-text">Zion Tech Group</h3>
            </div>
            <p className="text-gray-300 mb-6 leading-relaxed">
              Leading provider of enterprise AI solutions, quantum computing, and autonomous systems. 
              Transform your business with cutting-edge technology and achieve unprecedented growth.
            </p>
            
            {/* Contact Info */}
            <div className="space-y-3">
              <div className="flex items-center">
                <Phone className="w-5 h-5 mr-3 text-cyan-400" />
                <a href="tel:+13024640950" className="text-gray-300 hover:text-cyan-400 transition-colors">
                  +1 (302) 464-0950
                </a>
              </div>
              <div className="flex items-center">
                <Mail className="w-5 h-5 mr-3 text-cyan-400" />
                <a href="mailto:kleber@ziontechgroup.com" className="text-gray-300 hover:text-cyan-400 transition-colors">
                  kleber@ziontechgroup.com
                </a>
              </div>
              <div className="flex items-center">
                <MapPin className="w-5 h-5 mr-3 text-cyan-400" />
                <span className="text-gray-300">364 E Main St STE 1008, Middletown DE 19709</span>
              </div>
              <div className="flex items-center">
                <Clock className="w-5 h-5 mr-3 text-cyan-400" />
                <span className="text-gray-300">24/7 Support Available</span>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex space-x-4 mt-6">
              <a 
                href="https://linkedin.com/company/ziontechgroup" 
                className="text-gray-300 hover:text-cyan-400 transition-colors"
                aria-label="LinkedIn"
                target="_blank"
                rel="noopener noreferrer"
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </a>
              <a 
                href="https://twitter.com/ziontechgroup" 
                className="text-gray-300 hover:text-cyan-400 transition-colors"
                aria-label="Twitter"
                target="_blank"
                rel="noopener noreferrer"
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                </svg>
              </a>
              <a 
                href="https://github.com/ziontechgroup" 
                className="text-gray-300 hover:text-cyan-400 transition-colors"
                aria-label="GitHub"
                target="_blank"
                rel="noopener noreferrer"
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-cyan-400 flex items-center">
              <Star className="w-5 h-5 mr-2" />
              Services
            </h4>
            <ul className="space-y-2">
              {services.slice(0, 6).map((service, index) => (
                <li key={index}>
                  <Link 
                    to={service.url} 
                    className="text-gray-300 hover:text-cyan-400 transition-colors flex items-center"
                  >
                    <span className="mr-2">{service.icon}</span>
                    {service.name}
                  </Link>
                </li>
              ))}
              <li>
                <Link to="/services" className="text-cyan-400 hover:text-cyan-300 transition-colors font-medium flex items-center">
                  View All Services
                  <ArrowRight className="w-4 h-4 ml-1" />
                </Link>
              </li>
            </ul>
          </div>

          {/* Technologies */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-cyan-400 flex items-center">
              <Code className="w-5 h-5 mr-2" />
              Technologies
            </h4>
            <ul className="space-y-2">
              {technologies.slice(0, 6).map((tech, index) => (
                <li key={index}>
                  <Link 
                    to={tech.url} 
                    className="text-gray-300 hover:text-cyan-400 transition-colors"
                  >
                    {tech.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-cyan-400 flex items-center">
              <Globe className="w-5 h-5 mr-2" />
              Company
            </h4>
            <ul className="space-y-2">
              {company.map((item, index) => (
                <li key={index}>
                  <Link 
                    to={item.url} 
                    className="text-gray-300 hover:text-cyan-400 transition-colors"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-cyan-400 flex items-center">
              <Brain className="w-5 h-5 mr-2" />
              Resources
            </h4>
            <ul className="space-y-2">
              {resources.map((resource, index) => (
                <li key={index}>
                  {resource.external ? (
                    <a 
                      href={resource.url} 
                      className="text-gray-300 hover:text-cyan-400 transition-colors flex items-center"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {resource.name}
                      <ExternalLink className="w-3 h-3 ml-1" />
                    </a>
                  ) : (
                    <Link 
                      to={resource.url} 
                      className="text-gray-300 hover:text-cyan-400 transition-colors"
                    >
                      {resource.name}
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Key Stats */}
        <div className="mt-16 pt-8 border-t border-cyan-500/20">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-3xl font-bold text-cyan-400 mb-2">500+</div>
              <div className="text-gray-300 text-sm">Projects Delivered</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-green-400 mb-2">$2.5B+</div>
              <div className="text-gray-300 text-sm">Cost Savings Delivered</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-purple-400 mb-2">99.9%</div>
              <div className="text-gray-300 text-sm">Uptime Guarantee</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-orange-400 mb-2">24/7</div>
              <div className="text-gray-300 text-sm">Support Available</div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="border-t border-cyan-500/20 py-8">
        <div className="container mx-auto px-4">
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
            
            {/* Contact CTA */}
            <div className="flex flex-col sm:flex-row gap-4 items-center">
              <a
                href="tel:+13024640950"
                className="bg-cyan-600 text-white px-6 py-2 rounded-lg font-semibold hover:bg-cyan-700 transition-colors inline-flex items-center"
              >
                <Phone className="w-4 h-4 mr-2" />
                Call Now: (302) 464-0950
              </a>
              <a
                href="mailto:kleber@ziontechgroup.com"
                className="border border-cyan-400 text-cyan-400 px-6 py-2 rounded-lg font-semibold hover:bg-cyan-400 hover:text-white transition-colors inline-flex items-center"
              >
                <Mail className="w-4 h-4 mr-2" />
                Get Free Consultation
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
});

Footer.displayName = 'Footer';

export default Footer;