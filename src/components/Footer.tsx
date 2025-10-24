<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
import React from 'react';
=======
=======
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-03fc
'use client';
import React, { memo } from 'react';

const Footer: React.FC = memo(() => {
  const _currentYear = new Date().getFullYear();
  
  const aiServices = [
    { name: 'Machine Learning Solutions', url: '/ai-ml-solutions', description: 'Custom ML models and analytics' },
    { name: 'Natural Language Processing', url: '/ai-nlp', description: 'Advanced text analysis and understanding' },
    { name: 'Computer Vision', url: '/ai-computer-vision', description: 'Image and video analysis solutions' },
    { name: 'AI Automation', url: '/ai-automation', description: 'Intelligent process automation' },
    { name: 'AI Healthcare Solutions', url: '/ai-healthcare', description: 'Medical AI for diagnosis and treatment' },
    { name: 'AI Financial Services', url: '/ai-fintech', description: 'Fintech AI for fraud detection and trading' },
    { name: 'AI Cybersecurity', url: '/ai-cybersecurity', description: 'AI security solutions and threat detection' },
    { name: 'AI Content Generation', url: '/ai-content-generation', description: 'AI-powered content creation' }
  ];

  const itServices = [
    { name: 'Cloud Services', url: '/cloud-services', description: 'Cloud migration, setup, and optimization' },
    { name: 'Cybersecurity', url: '/cybersecurity', description: 'Advanced security solutions' },
    { name: 'DevOps & CI/CD', url: '/devops-cicd', description: 'Streamlined development workflows' },
    { name: 'Database Services', url: '/database-services', description: 'Database design and optimization' },
    { name: 'IT Infrastructure', url: '/it-infrastructure', description: 'Enterprise-grade infrastructure' },
    { name: 'Network Solutions', url: '/network-solutions', description: 'Network design and implementation' },
    { name: 'IT Consulting', url: '/it-consulting', description: 'Strategic IT planning' },
    { name: 'IT Support & Maintenance', url: '/it-support', description: '24/7 IT support and maintenance' }
  ];

  const microSaasServices = [
    { name: 'AI Project Manager', url: '/ai-project-manager', description: 'Intelligent project planning' },
    { name: 'AI Social Media Manager', url: '/ai-social-media-manager', description: 'Automated social media management' },
    { name: 'AI Analytics Dashboard', url: '/ai-analytics-dashboard', description: 'AI-powered business intelligence' },
    { name: 'AI Email Marketing', url: '/ai-email-marketing', description: 'Intelligent email campaigns' },
    { name: 'AI Customer Support Bot', url: '/ai-customer-support-bot', description: '24/7 AI customer support' },
    { name: 'AI Code Review Assistant', url: '/ai-code-generation', description: 'Automated code analysis' },
    { name: 'AI Invoice Generator', url: '/ai-invoice-generator', description: 'Automated invoice creation' },
    { name: 'AI Lead Scoring', url: '/ai-lead-scoring', description: 'Intelligent lead qualification' }
  ];

  const emergingTech = [
    { name: 'Quantum Computing', url: '/quantum-computing', description: 'Quantum solutions' },
    { name: 'Robotics', url: '/robotics', description: 'Intelligent robotics' },
    { name: 'IoT & Edge Computing', url: '/iot-edge-computing', description: 'Connected devices' },
    { name: 'Blockchain & Web3', url: '/blockchain-web3', description: 'Decentralized solutions' },
    { name: 'Business Intelligence', url: '/business-intelligence', description: 'Data insights' },
    { name: 'Autonomous Systems', url: '/autonomous-systems', description: 'Self-managing systems' },
    { name: 'AR/VR Solutions', url: '/ar-vr-solutions', description: 'Immersive experiences' },
    { name: 'Smart Cities', url: '/smart-cities', description: 'Urban technology solutions' }
  ];

  const companyLinks = [
    { name: 'About Us', url: '/about' },
    { name: 'Our Team', url: '/team' },
    { name: 'Careers', url: '/careers' },
    { name: 'Case Studies', url: '/case-studies' },
    { name: 'Blog', url: '/blog' },
    { name: 'Contact', url: '/contact' }
  ];

  const supportLinks = [
    { name: 'Help Center', url: '/help' },
    { name: 'Documentation', url: '/docs' },
    { name: 'API Reference', url: '/api-docs' },
    { name: 'Help Center', url: '/support' },
    { name: 'Status Page', url: '/status' },
    { name: 'System Requirements', url: '/requirements' },
    { name: 'Troubleshooting', url: '/troubleshooting' }
  ];

  const legalLinks = [
    { name: 'Privacy Policy', url: '/privacy' },
<<<<<<< HEAD
    { name: 'Terms of Service', url: '/terms' },
    { name: 'Cookie Policy', url: '/cookies' },
    { name: 'GDPR Compliance', url: '/gdpr' },
    { name: 'Security', url: '/security' },
    { name: 'Compliance', url: '/compliance' }
  ];
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-03b1

export default function Component() {
  return (
    <div>
      <h1>Component</h1>
      <p>This component is under construction.</p>
    </div>
=======
    { name: 'Terms of Service', url: '/terms' }
  ];

  const socialLinks = [
    { name: 'Facebook', url: 'https://facebook.com/ziontechgroup', icon: Facebook },
    { name: 'Twitter', url: 'https://twitter.com/ziontechgroup', icon: Twitter },
    { name: 'LinkedIn', url: 'https://linkedin.com/company/ziontechgroup', icon: Linkedin },
    { name: 'Instagram', url: 'https://instagram.com/ziontechgroup', icon: Instagram },
    { name: 'YouTube', url: 'https://youtube.com/ziontechgroup', icon: Youtube },
    { name: 'GitHub', url: 'https://github.com/ziontechgroup', icon: Github }
  ];

  const contactInfo = {
    phone: '(302) 464-0950',
    email: 'kleber@ziontechgroup.com',
    address: '364 E Main St STE 1008, Middletown, DE 19709',
    hours: 'Mon-Fri 9AM-6PM EST'
  };

  const achievements = [
    { stat: '50+ Successful Projects' },
    { stat: '100+ Happy Clients' },
    { stat: '300% Average ROI' },
    { stat: '99.9% Uptime Guarantee' }
  ];

  return (
    <footer className="bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 cyber-grid"></footer>
      {/* Main Footer Content */}
      <div className="container mx-auto px-4 py-16"></div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"></div>
          {/* Company Info */}
<<<<<<< HEAD
          <div className="space-y-6"></div>
            <div></div>
              <Link to="/" className="flex items-center space-x-2 group"></Link>
                <div className="w-10 h-10 bg-gradient-to-br from-cyan-400 to-purple-600 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300"></div>
                  <span className="text-white font-bold text-lg">Z</span>
                </div>
                <div></div>
                  <h3 className="text-xl font-bold text-white cyber-text neon-pulse">Zion Tech Group</h3>
                  <p className="text-sm text-cyan-400">AI & IT Solutions</p>
                </div>
              </Link>
            </div>
            
            <p className="text-gray-300 text-sm leading-relaxed"></p>
              Leading provider of AI-powered enterprise solutions, quantum computing, autonomous systems, 
              and digital transformation services. Transform your business with cutting-edge technology.
            </p>

            {/* Social Links */}
            <div className="flex space-x-4"></div>
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-slate-800 rounded-lg flex items-center justify-center text-gray-400 hover:text-cyan-400 hover:bg-slate-700 transition-all duration-300 group"
                  aria-label={social.name}
                ></a>
                  <social.icon className="w-5 h-5 group-hover:scale-110 transition-transform duration-300" />
                </a>
              ))}
            </div>
          </div>
=======
              <span className="text-xl font-bold text-white neon-text">Zion Tech Group</span>
              Leading provider of AI-powered enterprise solutions, quantum computing, and digital transformation services.
                  +1 302 464 0950;
                  kleber@ziontechgroup.com;
                <span>364 E Main St STE 1008, Middletown DE 19709</span>
          {/* Micro SAAS Services */}
              Micro SAAS;
                    <span>{service.name}</span>
  ))}

              View All Micro SAAS →

          {/* AI & IT Services */}
              AI & IT Services;
                <h4 className="text-white font-medium mb-2">AI Services</h4>
                        {service.name}
                  ))}
                <h4 className="text-white font-medium mb-2">IT Services</h4>
                        {service.name}
                  ))}

              View All Services →

          {/* Additional AI Services */}
              AI Tools;
                    <span>{service.name}</span>
  ))}
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-048f

          {/* AI Services */}
          <div></div>
            <h3 className="text-lg font-semibold mb-6 text-cyan-400 neon-text">AI Services</h3>
            <ul className="space-y-3"></ul>
              {aiServices.slice(0, 8).map((service, index) => (
                <li key={index}></li>
                  <Link
                    to={service.url}
                    className="text-gray-300 hover:text-cyan-400 transition-colors duration-300 text-sm group flex items-center"
                  ></Link>
                    <ArrowRight className="w-3 h-3 mr-2 opacity-0 group-hover:opacity-100 transition-opacity" />
                    {service.name}
                  </Link>
                  <p className="text-xs text-gray-500 ml-5">{service.description}</p>
                </li>
              ))}
              <li></li>
                <Link
                  to="/ai-services"
                  className="text-cyan-400 hover:text-cyan-300 transition-colors duration-200 text-sm font-medium"
                ></Link>
                  View All AI Services →
                </Link>
              </li>
            </ul>
          </div>

          {/* IT Services */}
          <div></div>
            <h3 className="text-lg font-semibold mb-6 text-cyan-400 neon-text">IT Services</h3>
            <ul className="space-y-3"></ul>
              {itServices.slice(0, 8).map((service, index) => (
                <li key={index}></li>
                  <Link
                    to={service.url}
                    className="text-gray-300 hover:text-cyan-400 transition-colors duration-300 text-sm group flex items-center"
                  ></Link>
                    <ArrowRight className="w-3 h-3 mr-2 opacity-0 group-hover:opacity-100 transition-opacity" />
                    {service.name}
                  </Link>
                  <p className="text-xs text-gray-500 ml-5">{service.description}</p>
                </li>
              ))}
              <li></li>
                <Link
                  to="/it-services"
                  className="text-cyan-400 hover:text-cyan-300 transition-colors duration-200 text-sm font-medium"
                ></Link>
                  View All IT Services →
                </Link>
              </li>
            </ul>
          </div>

          {/* Emerging Technologies */}
          <div></div>
            <h3 className="text-lg font-semibold mb-6 text-cyan-400 neon-text">Emerging Tech</h3>
            <ul className="space-y-3"></ul>
              {emergingTech.slice(0, 8).map((service, index) => (
                <li key={index}></li>
                  <Link
                    to={service.url}
                    className="text-gray-300 hover:text-cyan-400 transition-colors duration-300 text-sm group flex items-center"
                  ></Link>
                    <ArrowRight className="w-3 h-3 mr-2 opacity-0 group-hover:opacity-100 transition-opacity" />
                    {service.name}
                  </Link>
                  <p className="text-xs text-gray-500 ml-5">{service.description}</p>
                </li>
              ))}
              <li></li>
                <Link
                  to="/quantum-computing"
                  className="text-cyan-400 hover:text-cyan-300 transition-colors duration-200 text-sm font-medium"
                ></Link>
                  View All Technologies →
                </Link>
              </li>
=======
import React from 'react';
import { Link } from 'react-router-dom';
import { Brain, Mail, Phone, MapPin, Twitter, Linkedin, Github } from 'lucide-react';

const Footer = () => {
  const services = [
    { name: 'AI Solutions', path: '/ai-services' },
    { name: 'Cloud Services', path: '/cloud-services' },
    { name: 'Cybersecurity', path: '/cybersecurity' },
    { name: '5G Solutions', path: '/5g-solutions' },
    { name: 'Micro SAAS', path: '/micro-saas' },
    { name: 'Data Analytics', path: '/data-analytics' }
  ];

  const company = [
    { name: 'About Us', path: '/about' },
    { name: 'Our Team', path: '/team' },
    { name: 'Careers', path: '/careers' },
    { name: 'Contact', path: '/contact' }
  ];

  const resources = [
    { name: 'Blog', path: '/blog' },
    { name: 'Documentation', path: '/docs' },
    { name: 'Support', path: '/support' },
    { name: 'Privacy Policy', path: '/privacy' },
    { name: 'Terms of Service', path: '/terms' }
  ];

  return (
    <footer className="bg-slate-900 border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-lg flex items-center justify-center">
                <Brain className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold text-white">Zion Tech Group</span>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">
              Leading provider of AI solutions, cybersecurity, cloud services, and 5G technology. 
              Transform your business with cutting-edge technology.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Github className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-white font-semibold mb-4">Services</h3>
            <ul className="space-y-2">
              {services.map((service) => (
                <li key={service.name}>
                  <Link
                    to={service.path}
                    className="text-gray-400 hover:text-white transition-colors text-sm"
                  >
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-white font-semibold mb-4">Company</h3>
            <ul className="space-y-2">
              {company.map((item) => (
                <li key={item.name}>
                  <Link
                    to={item.path}
                    className="text-gray-400 hover:text-white transition-colors text-sm"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="text-white font-semibold mb-4">Resources</h3>
            <ul className="space-y-2">
              {resources.map((resource) => (
                <li key={resource.name}>
                  <Link
                    to={resource.path}
                    className="text-gray-400 hover:text-white transition-colors text-sm"
                  >
                    {resource.name}
                  </Link>
                </li>
              ))}
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-04df
            </ul>
          </div>
        </div>

<<<<<<< HEAD
        {/* Contact Information */}
        <div className="bg-gradient-to-r from-purple-600/20 to-blue-600/20 rounded-lg p-6 mb-8 cyber-card"></div>
          <h3 className="text-xl font-bold text-white mb-4 text-center neon-text">Get In Touch</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"></div>
            <div className="flex items-center space-x-3"></div>
              <Phone className="w-5 h-5 text-cyan-400" />
              <div></div>
                <div className="text-white font-medium">{contactInfo.phone}</div>
                <div className="text-gray-400 text-sm">Call us anytime</div>
              </div>
            </div>
            <div className="flex items-center space-x-3"></div>
              <Mail className="w-5 h-5 text-cyan-400" />
              <div></div>
                <div className="text-white font-medium">{contactInfo.email}</div>
                <div className="text-gray-400 text-sm">Email us</div>
              </div>
            </div>
            <div className="flex items-center space-x-3"></div>
              <MapPin className="w-5 h-5 text-cyan-400" />
              <div></div>
                <div className="text-white font-medium">Middletown, DE</div>
                <div className="text-gray-400 text-sm">{contactInfo.address}</div>
              </div>
            </div>
            <div className="flex items-center space-x-3"></div>
              <Clock className="w-5 h-5 text-cyan-400" />
              <div></div>
                <div className="text-white font-medium">{contactInfo.hours}</div>
                <div className="text-gray-400 text-sm">Business hours</div>
              </div>
=======
        {/* Contact Info */}
        <div className="mt-8 pt-8 border-t border-gray-800">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm text-gray-400">
            <div className="flex items-center space-x-2">
              <Mail className="w-4 h-4" />
              <span>info@ziontechgroup.com</span>
            </div>
            <div className="flex items-center space-x-2">
              <Phone className="w-4 h-4" />
              <span>+1 (555) 123-4567</span>
            </div>
            <div className="flex items-center space-x-2">
              <MapPin className="w-4 h-4" />
              <span>San Francisco, CA</span>
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-04df
            </div>
          </div>
        </div>

<<<<<<< HEAD
        {/* Company Links */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-8"></div>
          <div></div>
            <h4 className="text-sm font-semibold text-white mb-4">Company</h4>
            <ul className="space-y-2"></ul>
              {companyLinks.map((link, index) => (
                <li key={index}></li>
                  <Link
                    to={link.url}
                    className="text-gray-400 hover:text-cyan-400 transition-colors duration-300 text-sm"
                  ></Link>
                    <ArrowRight className="w-3 h-3 mr-2 opacity-0 group-hover:opacity-100 transition-opacity" />
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div></div>
            <h4 className="text-sm font-semibold text-white mb-4">Support</h4>
            <ul className="space-y-2"></ul>
              {supportLinks.map((link, index) => (
                <li key={index}></li>
                  <Link
                    to={link.url}
                    className="text-gray-400 hover:text-cyan-400 transition-colors duration-300 text-sm"
                  ></Link>
                    <ArrowRight className="w-3 h-3 mr-2 opacity-0 group-hover:opacity-100 transition-opacity" />
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div></div>
            <h4 className="text-sm font-semibold text-white mb-4">Quick Links</h4>
            <ul className="space-y-2"></ul>
              <li><Link to="/services" className="text-gray-400 hover:text-cyan-400 transition-colors duration-300 text-sm">All Services</Link></li>
              <li><Link to="/pricing" className="text-gray-400 hover:text-cyan-400 transition-colors duration-300 text-sm">Pricing</Link></li>
              <li><Link to="/demo" className="text-gray-400 hover:text-cyan-400 transition-colors duration-300 text-sm">Request Demo</Link></li>
              <li><Link to="/consultation" className="text-gray-400 hover:text-cyan-400 transition-colors duration-300 text-sm">Free Consultation</Link></li>
            </ul>
          </div>
          <div></div>
            <h4 className="text-sm font-semibold text-white mb-4">Newsletter</h4>
            <p className="text-gray-400 text-sm mb-4">Stay updated with our latest news and offers.</p>
            <div className="flex space-x-2"></div>
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-3 py-2 bg-slate-800 border border-gray-600 rounded-lg text-white text-sm focus:outline-none focus:border-cyan-400"
              />
              <button className="px-4 py-2 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-lg hover:from-cyan-600 hover:to-blue-700 transition-all text-sm"></button>
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-700/50"></div>
        <div className="container mx-auto px-4 py-6"></div>
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0"></div>
            <div className="text-sm text-gray-400"></div>
              © {currentYear} Zion Tech Group. All rights reserved.
            </div>
            <div className="flex space-x-6"></div>
              <Link to="/privacy" className="text-sm text-gray-400 hover:text-cyan-400 transition-colors"></Link>
                Privacy Policy
              </Link>
              <Link to="/terms" className="text-sm text-gray-400 hover:text-cyan-400 transition-colors"></Link>
                Terms of Service
              </Link>
              <Link to="/cookies" className="text-sm text-gray-400 hover:text-cyan-400 transition-colors"></Link>
                Cookie Policy
              </Link>
            </div>
            <div className="flex items-center space-x-6 text-sm text-gray-400"></div>
              <div className="flex items-center space-x-2"></div>
                <Shield className="w-4 h-4 text-green-400" />
                <span>Enterprise Security</span>
              </div>
              <div className="flex items-center space-x-2"></div>
                <Award className="w-4 h-4 text-yellow-400" />
                <span>ISO 27001 Certified</span>
              </div>
              <div className="flex items-center space-x-2"></div>
                <Globe className="w-4 h-4 text-blue-400" />
                <span>Global Reach</span>
              </div>
=======
        {/* Copyright */}
        <div className="mt-8 pt-8 border-t border-gray-800">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © 2024 Zion Tech Group. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <Link to="/privacy" className="text-gray-400 hover:text-white text-sm transition-colors">
                Privacy Policy
              </Link>
              <Link to="/terms" className="text-gray-400 hover:text-white text-sm transition-colors">
                Terms of Service
              </Link>
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-04df
            </div>
          </div>
        </div>
      </div>
    </footer>
<<<<<<< HEAD
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-03fc
  );
}
=======
  );
};

export default Footer;
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-04df
