import React, { memo } from 'react';
import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, Clock, ArrowRight, Shield, Award, Globe, Facebook, Twitter, Linkedin, Instagram, Youtube, Github, Brain, Cloud, Code, Zap } from 'lucide-react';

const Footer: React.FC = memo(() => {
  const currentYear = new Date().getFullYear();

  const aiServices = [
    { name: 'AI Services', url: '/ai-services', description: 'Comprehensive AI solutions' },
    { name: 'AI Marketing', url: '/ai-marketing', description: 'AI-powered marketing automation' },
    { name: 'AI Automation', url: '/ai-automation', description: 'Intelligent process automation' },
    { name: 'AI Healthcare', url: '/ai-healthcare', description: 'Medical AI solutions' },
    { name: 'AI Fintech', url: '/ai-fintech', description: 'Financial AI applications' },
    { name: 'AI Content Generation', url: '/ai-content-generation', description: 'AI content creation' },
    { name: 'AI Data Analytics', url: '/ai-data-analytics', description: 'Advanced data insights' },
    { name: 'AI Cybersecurity', url: '/ai-cybersecurity', description: 'AI security solutions' },
    { name: 'AI Workflow Automation', url: '/ai-workflow-automation', description: 'Workflow optimization' },
    { name: 'AI Customer Support', url: '/ai-customer-support', description: 'AI-powered customer service' },
    { name: 'AI Sales Automation', url: '/ai-sales-automation', description: 'Intelligent sales processes' },
<<<<<<< HEAD
    { name: 'AI Project Management', url: '/ai-project-management', description: 'AI-powered project management' },
    { name: 'AI Voice Processing', url: '/ai-voice-processing', description: 'Voice AI solutions' },
    { name: 'AI Image Recognition', url: '/ai-image-recognition', description: 'Computer vision AI' }
=======
    { name: 'AI Data Visualization', url: '/ai-data-visualization', description: 'AI-powered data visualization' }
>>>>>>> cursor/fix-errors-and-merge-to-main-6669
  ];

  const itServices = [
    { name: 'IT Services', url: '/it-services', description: 'Comprehensive IT solutions' },
    { name: 'IT Infrastructure', url: '/it-infrastructure', description: 'Enterprise infrastructure' },
    { name: 'IT Support', url: '/it-support', description: '24/7 IT support' },
    { name: 'Cybersecurity', url: '/cybersecurity', description: 'Security solutions' },
    { name: 'Cloud Migration', url: '/cloud-migration', description: 'Cloud migration services' },
    { name: 'Database Management', url: '/database-management', description: 'Database management' },
    { name: 'IT Consulting', url: '/it-consulting', description: 'Strategic IT consulting' }
  ];

  const specializedSolutions = [
    { name: 'Quantum Computing', url: '/quantum-computing', description: 'Next-gen computing' },
    { name: 'Autonomous Systems', url: '/autonomous-systems', description: 'Self-managing systems' },
    { name: 'Blockchain Web3', url: '/blockchain-web3', description: 'Decentralized solutions' },
    { name: 'Business Intelligence', url: '/business-intelligence', description: 'Data-driven insights' },
    { name: 'IoT Edge Computing', url: '/iot-edge-computing', description: 'Connected devices' },
    { name: 'Robotics', url: '/robotics', description: 'Intelligent robots' },
    { name: 'AR/VR Solutions', url: '/ar-vr-solutions', description: 'Immersive experiences' }
  ];

  const company = [
    { name: 'About Us', url: '/about' },
    { name: 'Our Team', url: '/team' },
    { name: 'Careers', url: '/careers' },
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
    { name: 'News', url: '/blog' },
=======
    { name: 'News', url: '/news' },
>>>>>>> cursor/website-audit-and-update-with-deployment-73fd
=======
    { name: 'Case Studies', url: '/case-studies' },
    { name: 'Blog', url: '/blog' },
>>>>>>> cursor/website-audit-and-update-with-deployment-f409
    { name: 'Contact', url: '/contact' }
  ];

  const supportLinks = [
    { name: 'Documentation', url: '/docs' },
    { name: 'API Docs', url: '/api-docs' },
<<<<<<< HEAD
    { name: 'Support', url: '/contact' },
=======
    { name: 'Support', url: '/support' },
>>>>>>> cursor/website-audit-and-update-with-deployment-73fd
    { name: 'Status', url: '/status' },
    { name: 'Consultation', url: '/consultation' },
    { name: 'Pricing', url: '/pricing' }
  ];

  const legalLinks = [
    { name: 'Privacy Policy', url: '/privacy' },
    { name: 'Terms of Service', url: '/terms' },
    { name: 'Cookie Policy', url: '/cookies' },
    { name: 'GDPR', url: '/gdpr' },
    { name: 'Compliance', url: '/compliance' }
=======
    { name: 'Case Studies', url: '/case-studies' },
    { name: 'Blog', url: '/blog' }
  ];

  const legal = [
    { name: 'Privacy Policy', url: '/privacy' },
    { name: 'Terms of Service', url: '/terms' },
    { name: 'Cookie Policy', url: '/cookies' },
    { name: 'GDPR Compliance', url: '/gdpr' },
    { name: 'Compliance', url: '/compliance' }
  ];

  const support = [
    { name: 'Contact Us', url: '/contact' },
    { name: 'Documentation', url: '/docs' },
    { name: 'API Documentation', url: '/api-docs' },
    { name: 'Consultation', url: '/consultation' },
    { name: 'Support', url: '/support' }
  ];

  const socialLinks = [
    { name: 'Facebook', icon: Facebook, url: 'https://facebook.com/ziontechgroup' },
    { name: 'Twitter', icon: Twitter, url: 'https://twitter.com/ziontechgroup' },
    { name: 'LinkedIn', icon: Linkedin, url: 'https://linkedin.com/company/ziontechgroup' },
    { name: 'Instagram', icon: Instagram, url: 'https://instagram.com/ziontechgroup' },
    { name: 'YouTube', icon: Youtube, url: 'https://youtube.com/ziontechgroup' },
    { name: 'GitHub', icon: Github, url: 'https://github.com/ziontechgroup' }
>>>>>>> cursor/fix-errors-and-merge-to-main-6669
  ];

  return (
    <footer className="bg-slate-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-gradient-to-r from-cyan-400 to-purple-400 rounded-lg flex items-center justify-center">
                <Zap className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold">Zion Tech Group</span>
            </div>
            <p className="text-gray-300 mb-6 max-w-md">
              Leading provider of AI-powered solutions, IT consulting, and innovative technology services for businesses worldwide.
            </p>
            
            {/* Contact Info */}
            <div className="space-y-3">
              <div className="flex items-center text-cyan-400">
                <Phone className="w-4 h-4 mr-3" />
                <a href="tel:+13024640950" className="hover:text-cyan-300 transition-colors">
                  (302) 464-0950
                </a>
              </div>
              <div className="flex items-center text-cyan-400">
                <Mail className="w-4 h-4 mr-3" />
                <a href="mailto:info@ziontechgroup.com" className="hover:text-cyan-300 transition-colors">
                  info@ziontechgroup.com
                </a>
              </div>
              <div className="flex items-center text-cyan-400">
                <MapPin className="w-4 h-4 mr-3" />
                <span>Global Services</span>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex space-x-4 mt-6">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.url}
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

          {/* AI Services */}
          <div>
            <h3 className="text-lg font-semibold mb-4 flex items-center">
              <Brain className="w-5 h-5 mr-2 text-cyan-400" />
              AI Services
            </h3>
            <ul className="space-y-2">
              {aiServices.slice(0, 6).map((service) => (
                <li key={service.name}>
                  <Link
                    to={service.url}
                    className="text-gray-300 hover:text-cyan-400 transition-colors text-sm"
                  >
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* IT Services */}
          <div>
            <h3 className="text-lg font-semibold mb-4 flex items-center">
              <Code className="w-5 h-5 mr-2 text-cyan-400" />
              IT Services
            </h3>
            <ul className="space-y-2">
              {itServices.map((service) => (
                <li key={service.name}>
                  <Link
                    to={service.url}
                    className="text-gray-300 hover:text-cyan-400 transition-colors text-sm"
                  >
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Specialized Solutions */}
          <div>
            <h3 className="text-lg font-semibold mb-4 flex items-center">
              <Cloud className="w-5 h-5 mr-2 text-cyan-400" />
              Solutions
            </h3>
            <ul className="space-y-2">
              {specializedSolutions.slice(0, 6).map((solution) => (
                <li key={solution.name}>
                  <Link
                    to={solution.url}
                    className="text-gray-300 hover:text-cyan-400 transition-colors text-sm"
                  >
                    {solution.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company & Legal */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Company</h3>
            <ul className="space-y-2 mb-6">
              {company.map((item) => (
                <li key={item.name}>
                  <Link
                    to={item.url}
                    className="text-gray-300 hover:text-cyan-400 transition-colors text-sm"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
<<<<<<< HEAD
            
            <h4 className="text-lg font-semibold mb-4 text-cyan-400">Support</h4>
            <ul className="space-y-2">
              {supportLinks.map((link, index) => (
                <li key={index}>
                  <Link
                    to={link.url}
                    className="text-gray-400 hover:text-cyan-400 transition-colors text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
<<<<<<< HEAD
<<<<<<< HEAD
=======
  return (
    <footer className="bg-slate-900/50 backdrop-blur-lg border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <h3 className="text-2xl font-bold text-white mb-4">Zion Tech Group</h3>
            <p className="text-gray-300 mb-6 max-w-md">
              Leading provider of AI-powered solutions, IT consulting, and innovative technology services for businesses worldwide.
            </p>
            <div className="flex space-x-4">
              <a href="tel:+13024640950" className="text-cyan-400 hover:text-cyan-300 transition-colors">
                <Phone className="w-5 h-5" />
              </a>
              <a href="mailto:support@ziontechgroup.com" className="text-cyan-400 hover:text-cyan-300 transition-colors">
                <Mail className="w-5 h-5" />
              </a>
=======
            <h3 className="text-lg font-semibold mb-6 text-cyan-400 neon-text">IT Services</h3>
            <ul className="space-y-3">
              {itServices.slice(0, 8).map((service, index) => (
                <li key={index}>
                  <Link
                    to={service.url}
                    className="text-gray-300 hover:text-cyan-400 transition-colors duration-300 text-sm group flex items-center"
                  >
                    <ArrowRight className="w-3 h-3 mr-2 opacity-0 group-hover:opacity-100 transition-opacity" />
                    {service.name}
                  </Link>
                  <p className="text-xs text-gray-500 ml-5">{service.description}</p>
                </li>
              ))}
              <li>
                <Link
                  to="/it-services"
                  className="text-cyan-400 hover:text-cyan-300 transition-colors duration-200 text-sm font-medium"
                >
                  View All IT Services →
                </Link>
              </li>
            </ul>
          </div>
=======
>>>>>>> cursor/fix-errors-and-merge-to-main-6669

            <h3 className="text-lg font-semibold mb-4">Legal</h3>
            <ul className="space-y-2">
              {legal.map((item) => (
                <li key={item.name}>
                  <Link
                    to={item.url}
                    className="text-gray-300 hover:text-cyan-400 transition-colors text-sm"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-700 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center space-x-6 mb-4 md:mb-0">
              <div className="flex items-center text-sm text-gray-400">
                <Shield className="w-4 h-4 mr-2" />
                <span>Secure & Compliant</span>
              </div>
              <div className="flex items-center text-sm text-gray-400">
                <Award className="w-4 h-4 mr-2" />
                <span>Certified Experts</span>
              </div>
<<<<<<< HEAD
            </div>
            <div className="flex items-center space-x-3">
              <MapPin className="w-5 h-5 text-cyan-400" />
              <div>
                <div className="text-white font-medium">Middletown, DE</div>
                <div className="text-gray-400 text-sm">{contactInfo.address}</div>
              </div>
            </div>
            <div className="flex items-center space-x-3">
              <Clock className="w-5 h-5 text-cyan-400" />
              <div>
                <div className="text-white font-medium">{contactInfo.hours}</div>
                <div className="text-gray-400 text-sm">Business hours</div>
              </div>
>>>>>>> cursor/website-audit-and-update-with-deployment-73fd
            </div>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Services</h4>
            <ul className="space-y-2">
              <li><Link to="/ai-services" className="text-gray-300 hover:text-cyan-400 transition-colors">AI Services</Link></li>
              <li><Link to="/it-consulting" className="text-gray-300 hover:text-cyan-400 transition-colors">IT Consulting</Link></li>
              <li><Link to="/cloud-infrastructure" className="text-gray-300 hover:text-cyan-400 transition-colors">Cloud Infrastructure</Link></li>
              <li><Link to="/security" className="text-gray-300 hover:text-cyan-400 transition-colors">Security</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Company</h4>
            <ul className="space-y-2">
              <li><Link to="/about" className="text-gray-300 hover:text-cyan-400 transition-colors">About Us</Link></li>
              <li><Link to="/contact" className="text-gray-300 hover:text-cyan-400 transition-colors">Contact</Link></li>
              <li><Link to="/pricing" className="text-gray-300 hover:text-cyan-400 transition-colors">Pricing</Link></li>
              <li><Link to="/blog" className="text-gray-300 hover:text-cyan-400 transition-colors">Blog</Link></li>
            </ul>
          </div>
>>>>>>> cursor/analyze-improve-and-deploy-application-f5c8
=======

          {/* Legal & Compliance */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-cyan-400">Legal</h4>
            <ul className="space-y-2">
              {legalLinks.map((link, index) => (
                <li key={index}>
                  <Link
                    to={link.url}
                    className="text-gray-400 hover:text-cyan-400 transition-colors text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
>>>>>>> cursor/website-audit-and-update-with-deployment-f409
        </div>
        
        <div className="border-t border-white/10 mt-8 pt-8 text-center">
          <p className="text-gray-400">
            © {currentYear} Zion Tech Group. All rights reserved.
          </p>
<<<<<<< HEAD
<<<<<<< HEAD
=======

<<<<<<< HEAD
          <div>
            <h4 className="text-sm font-semibold text-white mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><Link to="/services" className="text-gray-400 hover:text-cyan-400 transition-colors duration-300 text-sm">All Services</Link></li>
              <li><Link to="/pricing" className="text-gray-400 hover:text-cyan-400 transition-colors duration-300 text-sm">Pricing</Link></li>
              <li><Link to="/consultation" className="text-gray-400 hover:text-cyan-400 transition-colors duration-300 text-sm">Free Consultation</Link></li>
              <li><Link to="/case-studies" className="text-gray-400 hover:text-cyan-400 transition-colors duration-300 text-sm">Case Studies</Link></li>
            </ul>
          </div>
=======
        {/* Company Links */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-8">
          <div>
            <h4 className="text-sm font-semibold text-white mb-4">Company</h4>
            <ul className="space-y-2">
              {companyLinks.map((link, index) => (
                <li key={index}>
                  <Link
                    to={link.url}
                    className="text-gray-400 hover:text-cyan-400 transition-colors duration-300 text-sm"
                  >
                    <ArrowRight className="w-3 h-3 mr-2 opacity-0 group-hover:opacity-100 transition-opacity" />
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-white mb-4">Support</h4>
            <ul className="space-y-2">
              {supportLinks.map((link, index) => (
                <li key={index}>
                  <Link
                    to={link.url}
                    className="text-gray-400 hover:text-cyan-400 transition-colors duration-300 text-sm"
                  >
                    <ArrowRight className="w-3 h-3 mr-2 opacity-0 group-hover:opacity-100 transition-opacity" />
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-white mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><Link to="/services" className="text-gray-400 hover:text-cyan-400 transition-colors duration-300 text-sm">All Services</Link></li>
              <li><Link to="/pricing" className="text-gray-400 hover:text-cyan-400 transition-colors duration-300 text-sm">Pricing</Link></li>
              <li><Link to="/demo" className="text-gray-400 hover:text-cyan-400 transition-colors duration-300 text-sm">Request Demo</Link></li>
              <li><Link to="/consultation" className="text-gray-400 hover:text-cyan-400 transition-colors duration-300 text-sm">Free Consultation</Link></li>
            </ul>
          </div>
>>>>>>> cursor/website-audit-and-update-with-deployment-73fd
          <div>
            <h4 className="text-sm font-semibold text-white mb-4">Newsletter</h4>
            <p className="text-gray-400 text-sm mb-4">Stay updated with our latest news and offers.</p>
            <div className="flex space-x-2">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-3 py-2 bg-slate-800 border border-gray-600 rounded-lg text-white text-sm focus:outline-none focus:border-cyan-400"
              />
              <button className="px-4 py-2 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-lg hover:from-cyan-600 hover:to-blue-700 transition-all text-sm">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-700/50">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-sm text-gray-400">
              © {currentYear} Zion Tech Group. All rights reserved.
            </div>
            <div className="flex space-x-6">
              <Link to="/privacy" className="text-sm text-gray-400 hover:text-cyan-400 transition-colors">
                Privacy Policy
              </Link>
              <Link to="/terms" className="text-sm text-gray-400 hover:text-cyan-400 transition-colors">
                Terms of Service
              </Link>
              <Link to="/cookies" className="text-sm text-gray-400 hover:text-cyan-400 transition-colors">
                Cookie Policy
              </Link>
            </div>
            <div className="flex items-center space-x-6 text-sm text-gray-400">
              <div className="flex items-center space-x-2">
                <Shield className="w-4 h-4 text-green-400" />
                <span>Enterprise Security</span>
              </div>
              <div className="flex items-center space-x-2">
                <Award className="w-4 h-4 text-yellow-400" />
                <span>ISO 27001 Certified</span>
              </div>
              <div className="flex items-center space-x-2">
                <Globe className="w-4 h-4 text-blue-400" />
=======
              <div className="flex items-center text-sm text-gray-400">
                <Globe className="w-4 h-4 mr-2" />
>>>>>>> cursor/fix-errors-and-merge-to-main-6669
                <span>Global Reach</span>
              </div>
            </div>
            
            <div className="text-sm text-gray-400">
              © {currentYear} Zion Tech Group. All rights reserved.
            </div>
          </div>
<<<<<<< HEAD
>>>>>>> cursor/website-audit-and-update-with-deployment-6747
=======
>>>>>>> cursor/analyze-improve-and-deploy-application-f5c8
=======
>>>>>>> cursor/website-audit-and-update-with-deployment-f409
=======
>>>>>>> cursor/fix-errors-and-merge-to-main-6669
        </div>
      </div>
    </footer>
  );
});

Footer.displayName = 'Footer';
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD

export default Footer;
=======
export default Footer;
>>>>>>> cursor/website-audit-and-update-with-deployment-6747
=======

export default Footer;
>>>>>>> cursor/analyze-improve-and-deploy-application-f5c8
=======
export default Footer;
>>>>>>> cursor/website-audit-and-update-with-deployment-73fd
=======

export default Footer;
>>>>>>> cursor/website-audit-and-update-with-deployment-f409
=======

export default Footer;
>>>>>>> cursor/fix-errors-and-merge-to-main-6669
