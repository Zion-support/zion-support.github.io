'use client';
import React from 'react';
import { Phone, Mail, MapPin, Brain, Facebook, Twitter, Linkedin, Instagram, Github, Youtube, ArrowRight } from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: 'Home', href: '/' },
    { name: 'Services', href: '/services' },
    { name: 'AI Solutions', href: '/ai-solutions' },
    { name: 'IT Services', href: '/it-services' },
    { name: 'Contact', href: '/contact' },
  ];

  const microSAASServices = [
    { name: 'AI Project Manager Pro', href: '/ai-project-manager', category: 'Productivity' },
    { name: 'AI Social Media Manager', href: '/ai-social-media-manager', category: 'Marketing' },
    { name: 'AI Analytics Dashboard', href: '/ai-analytics', category: 'Analytics' },
    { name: 'AI Email Marketing Suite', href: '/ai-email-marketing', category: 'Marketing' },
    { name: 'AI Customer Support Bot', href: '/ai-customer-support-bot', category: 'Customer Service' },
    { name: 'AI Video Generator Pro', href: '/ai-video-generation', category: 'Content Creation' },
    { name: 'AI Sales Automation', href: '/ai-sales-automation', category: 'Sales' },
    { name: 'AI Workflow Automation', href: '/ai-workflow-automation', category: 'Automation' },
  ];

  const aiServices = [
    { name: 'Machine Learning Solutions', href: '/ai-ml', category: 'AI Development' },
    { name: 'Natural Language Processing', href: '/ai-nlp', category: 'AI Development' },
    { name: 'Computer Vision', href: '/ai-vision', category: 'AI Development' },
    { name: 'AI Automation', href: '/ai-automation', category: 'Automation' },
    { name: 'AI Data Visualization', href: '/ai-data-visualization', category: 'Data Science' },
    { name: 'AI 3D Generation', href: '/ai-3d-generation', category: '3D & Graphics' },
    { name: 'AI Cybersecurity', href: '/ai-cybersecurity', category: 'Security' },
    { name: 'AI Quantum Computing', href: '/ai-quantum', category: 'Quantum Computing' },
  ];

  const itServices = [
    { name: 'Cloud Migration & Services', href: '/cloud-migration', category: 'Cloud Computing' },
    { name: 'Advanced Cybersecurity', href: '/cybersecurity', category: 'Security' },
    { name: 'DevOps & CI/CD', href: '/devops', category: 'Development' },
    { name: 'Database Services', href: '/database', category: 'Data Management' },
    { name: 'IT Consulting', href: '/it-consulting', category: 'Consulting' },
    { name: 'Network Infrastructure', href: '/network-infrastructure', category: 'Infrastructure' },
    { name: 'Managed IT Services', href: '/managed-it', category: 'Managed Services' },
    { name: 'AI-Powered IT Operations', href: '/ai-it-operations', category: 'AI Operations' },
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
    <footer className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 border-t border-cyan-400/20 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/5 to-purple-500/5"></div>
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-cyan-400 to-transparent"></div>
      
      <div className="container mx-auto px-4 py-16 relative">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-12 h-12 bg-gradient-to-r from-cyan-400 to-purple-500 rounded-xl flex items-center justify-center neon-pulse">
                <Brain className="w-7 h-7 text-white" />
              </div>
              <div>
                <span className="text-2xl font-bold text-white neon-text">Zion Tech Group</span>
                <div className="text-sm text-cyan-400">Advanced AI & IT Solutions</div>
              </div>
            </div>
            <p className="text-gray-300 mb-6 leading-relaxed text-lg">
              Leading provider of AI-powered enterprise solutions, quantum computing, autonomous systems, and digital transformation services. 
              <span className="text-cyan-400 font-semibold"> Up to 40% savings</span> on all our services.
            </p>
            
            {/* Contact Info */}
            <div className="space-y-4">
              <div className="flex items-center space-x-3 group">
                <div className="w-8 h-8 bg-cyan-400/20 rounded-lg flex items-center justify-center group-hover:bg-cyan-400/30 transition-colors">
                  <Phone className="w-4 h-4 text-cyan-400" />
                </div>
                <div>
                  <a 
                    href="tel:+13024640950" 
                    className="text-gray-300 hover:text-cyan-400 transition-colors duration-300 text-lg font-medium"
                  >
                    +1 302 464 0950
                  </a>
                  <div className="text-sm text-gray-500">24/7 Support Available</div>
                </div>
              </div>
              <div className="flex items-center space-x-3 group">
                <div className="w-8 h-8 bg-purple-400/20 rounded-lg flex items-center justify-center group-hover:bg-purple-400/30 transition-colors">
                  <Mail className="w-4 h-4 text-purple-400" />
                </div>
                <div>
                  <a 
                    href="mailto:kleber@ziontechgroup.com" 
                    className="text-gray-300 hover:text-purple-400 transition-colors duration-300 text-lg font-medium"
                  >
                    kleber@ziontechgroup.com
                  </a>
                  <div className="text-sm text-gray-500">Get Free Consultation</div>
                </div>
              </div>
              <div className="flex items-start space-x-3 group">
                <div className="w-8 h-8 bg-green-400/20 rounded-lg flex items-center justify-center group-hover:bg-green-400/30 transition-colors mt-1">
                  <MapPin className="w-4 h-4 text-green-400" />
                </div>
                <div>
                  <address className="text-gray-300 not-italic text-lg font-medium">
                    364 E Main St STE 1008<br />
                    Middletown, DE 19709
                  </address>
                  <div className="text-sm text-gray-500">United States</div>
                </div>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold text-white mb-6 neon-text flex items-center">
              <ArrowRight className="w-5 h-5 mr-2" />
              Quick Links
            </h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-gray-300 hover:text-cyan-400 transition-colors duration-300 flex items-center group text-lg"
                  >
                    <ArrowRight className="w-4 h-4 mr-3 group-hover:translate-x-1 transition-transform duration-300" />
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Micro SAAS Services */}
          <div>
            <h3 className="text-xl font-bold text-cyan-400 mb-6 flex items-center">
              <Brain className="w-5 h-5 mr-2" />
              Micro SAAS Solutions
            </h3>
            <ul className="space-y-3">
              {microSAASServices.map((service) => (
                <li key={service.name}>
                  <a
                    href={service.href}
                    className="text-gray-300 hover:text-cyan-400 transition-colors duration-300 text-sm group flex items-center"
                  >
                    <div className="w-2 h-2 bg-cyan-400 rounded-full mr-3 group-hover:scale-125 transition-transform"></div>
                    <div>
                      <div className="font-medium">{service.name}</div>
                      <div className="text-xs text-gray-500">{service.category}</div>
                    </div>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* AI & IT Services */}
          <div>
            <h3 className="text-xl font-bold text-purple-400 mb-6 flex items-center">
              <Brain className="w-5 h-5 mr-2" />
              AI & IT Services
            </h3>
            <div className="space-y-6">
              <div>
                <h4 className="text-lg font-semibold text-purple-300 mb-3">AI Services</h4>
                <ul className="space-y-2">
                  {aiServices.slice(0, 4).map((service) => (
                    <li key={service.name}>
                      <a
                        href={service.href}
                        className="text-gray-300 hover:text-purple-400 transition-colors duration-300 text-sm group flex items-center"
                      >
                        <div className="w-2 h-2 bg-purple-400 rounded-full mr-3 group-hover:scale-125 transition-transform"></div>
                        <div>
                          <div className="font-medium">{service.name}</div>
                          <div className="text-xs text-gray-500">{service.category}</div>
                        </div>
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h4 className="text-lg font-semibold text-green-300 mb-3">IT Services</h4>
                <ul className="space-y-2">
                  {itServices.slice(0, 4).map((service) => (
                    <li key={service.name}>
                      <a
                        href={service.href}
                        className="text-gray-300 hover:text-green-400 transition-colors duration-300 text-sm group flex items-center"
                      >
                        <div className="w-2 h-2 bg-green-400 rounded-full mr-3 group-hover:scale-125 transition-transform"></div>
                        <div>
                          <div className="font-medium">{service.name}</div>
                          <div className="text-xs text-gray-500">{service.category}</div>
                        </div>
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Social Links & Additional Info */}
        <div className="border-t border-gray-700 mt-12 pt-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            {/* Social Links */}
            <div>
              <h4 className="text-lg font-semibold text-white mb-4">Follow Us</h4>
              <div className="flex flex-wrap gap-3">
                {socialLinks.map((social) => (
                  <a
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-cyan-400 transition-all duration-300 p-3 rounded-lg hover:bg-slate-800 hover:scale-110 group"
                    aria-label={social.name}
                  >
                    <social.icon className="w-5 h-5 group-hover:scale-110 transition-transform" />
                  </a>
                ))}
              </div>
            </div>

            {/* Business Hours */}
            <div>
              <h4 className="text-lg font-semibold text-white mb-4">Business Hours</h4>
              <div className="space-y-2 text-gray-300">
                <div className="flex justify-between">
                  <span>Monday - Friday:</span>
                  <span className="text-cyan-400">9:00 AM - 6:00 PM EST</span>
                </div>
                <div className="flex justify-between">
                  <span>Saturday:</span>
                  <span className="text-cyan-400">10:00 AM - 4:00 PM EST</span>
                </div>
                <div className="flex justify-between">
                  <span>Sunday:</span>
                  <span className="text-gray-500">Closed</span>
                </div>
                <div className="text-sm text-green-400 font-semibold mt-2">
                  24/7 Emergency Support Available
                </div>
              </div>
            </div>

            {/* Service Areas */}
            <div>
              <h4 className="text-lg font-semibold text-white mb-4">Service Areas</h4>
              <div className="text-gray-300 space-y-1">
                <div>🇺🇸 United States</div>
                <div>🇨🇦 Canada</div>
                <div>🇬🇧 United Kingdom</div>
                <div>🇦🇺 Australia</div>
                <div>🌍 Global Remote Services</div>
                <div className="text-sm text-cyan-400 font-semibold mt-2">
                  Worldwide Coverage Available
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Section */}
          <div className="flex flex-col md:flex-row justify-between items-center pt-6 border-t border-gray-600">
            <div className="text-center md:text-left mb-4 md:mb-0">
              <p className="text-gray-400 text-sm">
                © {currentYear} Zion Tech Group. All rights reserved.
              </p>
              <p className="text-gray-500 text-xs mt-1">
                Transforming businesses with cutting-edge AI and IT solutions
              </p>
            </div>
            
            <div className="flex flex-wrap gap-4 text-xs text-gray-500">
              <a href="/privacy" className="hover:text-cyan-400 transition-colors">Privacy Policy</a>
              <a href="/terms" className="hover:text-cyan-400 transition-colors">Terms of Service</a>
              <a href="/cookies" className="hover:text-cyan-400 transition-colors">Cookie Policy</a>
              <a href="/sitemap" className="hover:text-cyan-400 transition-colors">Sitemap</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
