import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Zap, 
  Mail, 
  Phone, 
  MapPin, 
  Twitter, 
  Linkedin, 
  Github, 
  Facebook,
  Instagram,
  Youtube,
  ArrowUp,
  Star,
  Shield,
  Award
} from 'lucide-react';

const FuturisticFooter: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const serviceCategories = [
    {
      title: 'AI Services',
      services: [
        { name: 'Machine Learning', href: '/ai-services#machine-learning' },
        { name: 'Natural Language Processing', href: '/ai-services#nlp' },
        { name: 'Computer Vision', href: '/ai-services#computer-vision' },
        { name: 'Predictive Analytics', href: '/ai-services#predictive-analytics' },
        { name: 'AI Chatbots', href: '/ai-services#chatbots' }
      ]
    },
    {
      title: 'Micro SAAS',
      services: [
        { name: 'AI Code Review', href: '/micro-saas#code-review' },
        { name: 'Document Intelligence', href: '/micro-saas#document-ai' },
        { name: 'Analytics Dashboard', href: '/micro-saas#analytics' },
        { name: 'API Testing Suite', href: '/micro-saas#api-testing' },
        { name: 'Customer Support Bot', href: '/micro-saas#support-bot' }
      ]
    },
    {
      title: 'IT Services',
      services: [
        { name: 'Cloud Infrastructure', href: '/it-services#cloud' },
        { name: 'Cybersecurity', href: '/it-services#cybersecurity' },
        { name: 'DevOps & CI/CD', href: '/it-services#devops' },
        { name: 'Database Administration', href: '/it-services#database' },
        { name: 'Network Infrastructure', href: '/it-services#networking' }
      ]
    },
    {
      title: 'Advanced Solutions',
      services: [
        { name: 'Quantum Computing', href: '/quantum-computing' },
        { name: 'Autonomous Systems', href: '/autonomous-systems' },
        { name: 'Blockchain & Web3', href: '/blockchain-web3' },
        { name: 'IoT & Edge Computing', href: '/iot-edge-computing' },
        { name: 'Business Intelligence', href: '/business-intelligence' }
      ]
    }
  ];

  const companyLinks = [
    { name: 'About Us', href: '/about' },
    { name: 'Our Team', href: '/team' },
    { name: 'Case Studies', href: '/case-studies' },
    { name: 'Blog', href: '/blog' },
    { name: 'Careers', href: '/careers' },
    { name: 'Partners', href: '/partners' }
  ];

  const legalLinks = [
    { name: 'Privacy Policy', href: '/privacy' },
    { name: 'Terms of Service', href: '/terms' },
    { name: 'Cookie Policy', href: '/cookies' },
    { name: 'GDPR Compliance', href: '/gdpr' },
    { name: 'Security', href: '/security' },
    { name: 'SLA', href: '/sla' }
  ];

  const socialLinks = [
    { name: 'Twitter', href: 'https://twitter.com/ziontechgroup', icon: Twitter },
    { name: 'LinkedIn', href: 'https://linkedin.com/company/ziontechgroup', icon: Linkedin },
    { name: 'GitHub', href: 'https://github.com/ziontechgroup', icon: Github },
    { name: 'Facebook', href: 'https://facebook.com/ziontechgroup', icon: Facebook },
    { name: 'Instagram', href: 'https://instagram.com/ziontechgroup', icon: Instagram },
    { name: 'YouTube', href: 'https://youtube.com/ziontechgroup', icon: Youtube }
  ];

  return (
    <footer className="relative bg-gradient-to-b from-gray-900 via-black to-gray-900 text-white overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0">
        <div className="cyber-grid opacity-20"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-cyan-500/5 to-transparent"></div>
      </div>

      {/* Main Footer Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Top Section */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 mb-12">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <div className="flex items-center space-x-2 mb-6">
              <div className="relative">
                <div className="w-12 h-12 bg-gradient-to-r from-cyan-400 to-purple-500 rounded-lg flex items-center justify-center">
                  <Zap className="w-7 h-7 text-white" />
                </div>
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-purple-500 rounded-lg blur opacity-75"></div>
              </div>
              <div>
                <h3 className="text-2xl font-bold neon-text">Zion Tech Group</h3>
                <p className="text-sm text-cyan-400">Advanced AI & IT Solutions</p>
              </div>
            </div>
            
            <p className="text-gray-300 mb-6 leading-relaxed">
              Leading provider of cutting-edge AI solutions, micro SAAS tools, and enterprise IT services. 
              Transforming businesses with innovative technology and expert guidance.
            </p>

            {/* Contact Info */}
            <div className="space-y-3">
              <div className="flex items-center space-x-3 text-gray-300 hover:text-cyan-400 transition-colors">
                <Phone className="w-4 h-4" />
                <a href="tel:+13024640950" className="text-sm">+1 302 464 0950</a>
              </div>
              <div className="flex items-center space-x-3 text-gray-300 hover:text-cyan-400 transition-colors">
                <Mail className="w-4 h-4" />
                <a href="mailto:kleber@ziontechgroup.com" className="text-sm">kleber@ziontechgroup.com</a>
              </div>
              <div className="flex items-center space-x-3 text-gray-300">
                <MapPin className="w-4 h-4" />
                <span className="text-sm">364 E Main St STE 1008<br />Middletown DE 19709</span>
              </div>
            </div>
          </div>

          {/* Services */}
          <div className="lg:col-span-2">
            <h4 className="text-lg font-semibold text-cyan-400 mb-6">Our Services</h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {serviceCategories.map((category, index) => (
                <div key={index}>
                  <h5 className="font-medium text-white mb-4">{category.title}</h5>
                  <ul className="space-y-2">
                    {category.services.map((service, serviceIndex) => (
                      <li key={serviceIndex}>
                        <Link
                          to={service.href}
                          className="text-sm text-gray-300 hover:text-cyan-400 transition-colors duration-300"
                        >
                          {service.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold text-cyan-400 mb-6">Quick Links</h4>
            <div className="space-y-4">
              <div>
                <h5 className="font-medium text-white mb-3">Company</h5>
                <ul className="space-y-2">
                  {companyLinks.map((link, index) => (
                    <li key={index}>
                      <Link
                        to={link.href}
                        className="text-sm text-gray-300 hover:text-cyan-400 transition-colors duration-300"
                      >
                        {link.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
              
              <div>
                <h5 className="font-medium text-white mb-3">Legal</h5>
                <ul className="space-y-2">
                  {legalLinks.map((link, index) => (
                    <li key={index}>
                      <Link
                        to={link.href}
                        className="text-sm text-gray-300 hover:text-cyan-400 transition-colors duration-300"
                      >
                        {link.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Stats Section */}
        <div className="glass-card p-8 mb-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            <div className="space-y-2">
              <div className="text-3xl font-bold neon-text">500+</div>
              <div className="text-sm text-gray-300">Projects Completed</div>
            </div>
            <div className="space-y-2">
              <div className="text-3xl font-bold neon-text-purple">200+</div>
              <div className="text-sm text-gray-300">Happy Clients</div>
            </div>
            <div className="space-y-2">
              <div className="text-3xl font-bold neon-text-pink">99.9%</div>
              <div className="text-sm text-gray-300">Uptime Guarantee</div>
            </div>
            <div className="space-y-2">
              <div className="text-3xl font-bold neon-text">24/7</div>
              <div className="text-sm text-gray-300">Support Available</div>
            </div>
          </div>
        </div>

        {/* Social Links & Newsletter */}
        <div className="flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0 mb-8">
          {/* Social Links */}
          <div className="flex items-center space-x-6">
            <span className="text-sm text-gray-300">Follow us:</span>
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 text-gray-400 hover:text-cyan-400 transition-colors duration-300 hover:scale-110 transform"
                  aria-label={social.name}
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Newsletter Signup */}
          <div className="flex items-center space-x-4">
            <div className="text-sm text-gray-300">Stay updated:</div>
            <div className="flex space-x-2">
              <input
                type="email"
                placeholder="Enter your email"
                className="px-4 py-2 bg-gray-800 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400"
              />
              <button className="cyber-button px-6 py-2 text-sm">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-gray-700">
          <div className="text-sm text-gray-400 mb-4 md:mb-0">
            © 2024 Zion Tech Group. All rights reserved. | 
            <span className="ml-2">Proudly serving businesses worldwide</span>
          </div>
          
          <div className="flex items-center space-x-6 text-sm text-gray-400">
            <div className="flex items-center space-x-2">
              <Shield className="w-4 h-4" />
              <span>SSL Secured</span>
            </div>
            <div className="flex items-center space-x-2">
              <Award className="w-4 h-4" />
              <span>ISO 27001</span>
            </div>
            <div className="flex items-center space-x-2">
              <Star className="w-4 h-4" />
              <span>5-Star Rated</span>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll to Top Button */}
      <button
        onClick={scrollToTop}
        className="fixed bottom-6 right-6 z-50 p-3 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full text-white hover:scale-110 transition-transform duration-300 shadow-lg"
        aria-label="Scroll to top"
      >
        <ArrowUp className="w-5 h-5" />
      </button>
    </footer>
  );
};

export default FuturisticFooter;