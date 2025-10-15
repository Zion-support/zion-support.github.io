import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin } from 'lucide-react';

const Footer: React.FC = () => {
<<<<<<< HEAD
  return (
    <footer className="bg-slate-900 text-white">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <Link to="/" className="flex items-center space-x-3 mb-6 group">
              <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform">
                <span className="text-white font-bold text-xl">Z</span>
              </div>
              <span className="text-xl font-bold text-white group-hover:text-purple-400 transition-colors">Zion Tech Group</span>
            </Link>
            <p className="text-gray-400 mb-6 max-w-sm">
              Leading provider of advanced AI and IT solutions, cybersecurity, cloud infrastructure, 
              and digital transformation services for businesses worldwide.
            </p>
            
            {/* Contact Info */}
            <div className="space-y-3 mb-6">
              <div className="flex items-center space-x-3 text-gray-300">
                <Phone className="w-5 h-5 text-purple-400" />
                <span>+1-302-464-0950</span>
              </div>
              <div className="flex items-center space-x-3 text-gray-300">
                <Mail className="w-5 h-5 text-purple-400" />
                <span>kleber@ziontechgroup.com</span>
              </div>
              <div className="flex items-center space-x-3 text-gray-300">
                <MapPin className="w-5 h-5 text-purple-400" />
                <span>Wilmington, DE, USA</span>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex space-x-4">
              <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold">f</span>
              </div>
              <div className="w-10 h-10 bg-blue-400 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold">t</span>
              </div>
              <div className="w-10 h-10 bg-blue-800 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold">in</span>
=======
  const currentYear = new Date().getFullYear();

  const serviceCategories = [
    {
      title: 'AI Services',
      icon: <Brain className="w-5 h-5 text-cyan-400" />,
      services: [
        { name: 'AI Analytics Dashboard Pro', href: '/ai-analytics-dashboard-pro' },
        { name: 'AI Code Assistant Pro', href: '/ai-code-assistant-pro' },
        { name: 'AI Voice Assistant Enterprise', href: '/ai-voice-assistant-enterprise' },
        { name: 'AI Cybersecurity Platform', href: '/ai-cybersecurity-platform' },
        { name: 'AI E-commerce Platform', href: '/ai-ecommerce-platform' },
        { name: 'AI Healthcare Platform', href: '/ai-healthcare-platform' },
        { name: 'AI Financial Platform', href: '/ai-financial-platform' },
        { name: 'AI Education Platform', href: '/ai-education-platform' },
        { name: 'AI Content Generation Pro', href: '/ai-content-generation-pro' },
        { name: 'AI Automation Suite', href: '/ai-automation-suite' },
        { name: 'AI Chatbot Enterprise', href: '/ai-chatbot-enterprise' },
        { name: 'AI Business Intelligence Pro', href: '/ai-business-intelligence-pro' }
      ]
    },
    {
      title: 'IT Services',
      icon: <Code className="w-5 h-5 text-purple-400" />,
      services: [
        { name: 'Cloud Infrastructure', href: '/ai-cloud-infrastructure' },
        { name: 'API Management', href: '/ai-api-management' },
        { name: 'Database Solutions', href: '/ai-database-solutions' },
        { name: 'Advanced Security Suite', href: '/advanced-security-suite' },
        { name: 'Performance Monitoring', href: '/performance-monitoring' },
        { name: 'DevOps Solutions', href: '/devops-solutions' }
      ]
    },
    {
      title: '5G Solutions',
      icon: <Wifi className="w-5 h-5 text-green-400" />,
      services: [
        { name: '5G Implementation', href: '/5g-implementation' },
        { name: '5G Network Infrastructure', href: '/5g-network-infrastructure' },
        { name: '5G IoT Solutions', href: '/5g-iot-solutions' },
        { name: '5G Smart City Solutions', href: '/5g-smart-city-solutions' },
        { name: '5G Edge Computing', href: '/5g-edge-computing' },
        { name: '5G Private Networks', href: '/5g-private-networks' }
      ]
    },
    {
      title: 'Micro SAAS',
      icon: <Cloud className="w-5 h-5 text-orange-400" />,
      services: [
        { name: 'AI Accounting Assistant', href: '/ai-accounting-assistant' },
        { name: 'AI Content Moderation Pro', href: '/ai-content-moderation-pro' },
        { name: 'AI Climate Solutions Pro', href: '/ai-climate-solutions-pro' },
        { name: 'AI Agricultural Intelligence Pro', href: '/ai-agricultural-intelligence-pro' },
        { name: 'AI 3D Generation', href: '/ai-3d-generation' },
        { name: 'AI Blockchain Solutions', href: '/ai-blockchain-solutions' }
      ]
    }
  ];

  const quickLinks = [
    { name: 'Home', href: '/' },
    { name: 'About Us', href: '/about' },
    { name: 'Services', href: '/services' },
    { name: 'Contact', href: '/contact' },
    { name: 'Privacy Policy', href: '/privacy' },
    { name: 'Terms of Service', href: '/terms' },
    { name: 'Blog', href: '/blog' },
    { name: 'Careers', href: '/careers' }
  ];

  const socialLinks = [
    { name: 'Facebook', icon: <Facebook className="w-5 h-5" />, href: 'https://facebook.com/ziontechgroup' },
    { name: 'Twitter', icon: <Twitter className="w-5 h-5" />, href: 'https://twitter.com/ziontechgroup' },
    { name: 'LinkedIn', icon: <Linkedin className="w-5 h-5" />, href: 'https://linkedin.com/company/ziontechgroup' },
    { name: 'Instagram', icon: <Instagram className="w-5 h-5" />, href: 'https://instagram.com/ziontechgroup' },
    { name: 'GitHub', icon: <Github className="w-5 h-5" />, href: 'https://github.com/ziontechgroup' }
  ];

  return (
    <footer className="bg-slate-900 text-white relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-purple-900/20 to-slate-900">
        <div className="absolute inset-0 bg-cyber-grid opacity-10"></div>
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-cyan-500 via-purple-500 to-cyan-500 animate-pulse"></div>
        {/* Floating particles */}
        <div className="absolute inset-0">
          {[...Array(15)].map((_, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 bg-cyan-400/20 rounded-full animate-ping"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 5}s`,
                animationDuration: `${3 + Math.random() * 2}s`
              }}
            />
          ))}
        </div>
      </div>

      <div className="relative z-10">
        {/* Main Footer Content */}
        <div className="container mx-auto px-4 py-16">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            {/* Company Info */}
            <div className="lg:col-span-1">
              <div className="flex items-center space-x-2 mb-6 group">
                <div className="w-10 h-10 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg shadow-cyan-500/25">
                  <Zap className="w-6 h-6 text-white group-hover:animate-pulse" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white group-hover:text-cyan-400 transition-colors duration-300">Zion Tech Group</h3>
                  <p className="text-sm text-cyan-400 group-hover:text-cyan-300 transition-colors duration-300">Advanced AI & IT Solutions</p>
                </div>
              </div>
              <p className="text-gray-300 mb-6 leading-relaxed group-hover:text-white transition-colors duration-300">
                Leading provider of cutting-edge AI, IT, and 5G solutions. 
                We transform businesses through innovative technology and 
                intelligent automation.
              </p>
              
              {/* Contact Info */}
              <div className="space-y-3">
                <div className="flex items-center space-x-3 text-gray-300 group hover:text-white transition-colors duration-300">
                  <Phone className="w-4 h-4 text-cyan-400 group-hover:scale-110 transition-transform duration-300" />
                  <a href="tel:+13024640950" className="hover:text-cyan-400 transition-colors duration-300">
                    +1 302 464 0950
                  </a>
                </div>
                <div className="flex items-center space-x-3 text-gray-300 group hover:text-white transition-colors duration-300">
                  <Mail className="w-4 h-4 text-cyan-400 group-hover:scale-110 transition-transform duration-300" />
                  <a href="mailto:kleber@ziontechgroup.com" className="hover:text-cyan-400 transition-colors duration-300">
                    kleber@ziontechgroup.com
                  </a>
                </div>
                <div className="flex items-center space-x-3 text-gray-300 group hover:text-white transition-colors duration-300">
                  <MapPin className="w-4 h-4 text-cyan-400 group-hover:scale-110 transition-transform duration-300" />
                  <span>364 E Main St STE 1008<br />Middletown DE 19709</span>
                </div>
              </div>

              {/* Social Links */}
              <div className="flex space-x-4 mt-6">
                {socialLinks.map((social) => (
                  <a
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 bg-slate-800 hover:bg-cyan-600 rounded-lg flex items-center justify-center transition-all duration-300 hover:scale-110 group relative overflow-hidden"
                    aria-label={social.name}
                  >
                    <div className="relative z-10 group-hover:text-white transition-colors duration-300">
                      {social.icon}
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </a>
                ))}
              </div>
            </div>

            {/* Service Categories */}
            <div className="lg:col-span-2">
              <h3 className="text-xl font-bold text-white mb-6 group hover:text-cyan-400 transition-colors duration-300">Our Services</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {serviceCategories.map((category) => (
                  <div key={category.title} className="group">
                    <div className="flex items-center space-x-2 mb-4 group-hover:translate-x-1 transition-transform duration-300">
                      <div className="group-hover:scale-110 transition-transform duration-300">
                        {category.icon}
                      </div>
                      <h4 className="text-lg font-semibold text-white group-hover:text-cyan-400 transition-colors duration-300">{category.title}</h4>
                    </div>
                    <ul className="space-y-2">
                      {category.services.map((service) => (
                        <li key={service.name}>
                          <Link
                            to={service.href}
                            className="flex items-center space-x-2 text-gray-300 hover:text-cyan-400 transition-all duration-300 group/link"
                          >
                            <ArrowRight className="w-3 h-3 opacity-0 group-hover/link:opacity-100 group-hover/link:translate-x-1 transition-all duration-300" />
                            <span className="text-sm group-hover/link:text-white transition-colors duration-300">{service.name}</span>
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>

            {/* Quick Links & Newsletter */}
            <div className="lg:col-span-1">
              <h3 className="text-xl font-bold text-white mb-6 group hover:text-cyan-400 transition-colors duration-300">Quick Links</h3>
              <ul className="space-y-2 mb-8">
                {quickLinks.map((link) => (
                  <li key={link.name}>
                    <Link
                      to={link.href}
                      className="text-gray-300 hover:text-cyan-400 transition-all duration-300 text-sm group flex items-center"
                    >
                      <ArrowRight className="w-3 h-3 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-300 mr-2" />
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>

              {/* Newsletter Signup */}
              <div className="bg-slate-800/50 rounded-lg p-6 border border-cyan-500/20 group hover:border-cyan-400/40 transition-all duration-300 relative overflow-hidden">
                {/* Animated background */}
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/5 via-purple-500/5 to-cyan-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="relative z-10">
                  <h4 className="text-lg font-semibold text-white mb-3 group-hover:text-cyan-400 transition-colors duration-300">Stay Updated</h4>
                  <p className="text-gray-300 text-sm mb-4 group-hover:text-white transition-colors duration-300">
                    Get the latest updates on AI and IT innovations.
                  </p>
                  <div className="flex space-x-2">
                    <input
                      type="email"
                      placeholder="Enter your email"
                      className="flex-1 px-3 py-2 bg-slate-700 border border-slate-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition-all duration-300"
                    />
                    <button className="px-4 py-2 bg-gradient-to-r from-cyan-600 to-purple-600 text-white rounded-lg hover:from-cyan-700 hover:to-purple-700 transition-all duration-300 font-semibold transform hover:scale-105 shadow-lg hover:shadow-cyan-500/25 relative group/btn overflow-hidden">
                      <span className="relative z-10">Subscribe</span>
                      <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 opacity-0 group-hover/btn:opacity-100 transition-opacity duration-300"></div>
                    </button>
                  </div>
                </div>
>>>>>>> e147079fabc5ed4c39aa0de061f6683aa394ec59
              </div>
            </div>
          </div>

<<<<<<< HEAD
          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Services</h3>
            <ul className="space-y-2">
              <li><Link to="/ai-solutions" className="text-gray-400 hover:text-purple-400 transition-colors">AI Solutions</Link></li>
              <li><Link to="/5g-solutions" className="text-gray-400 hover:text-purple-400 transition-colors">5G Services</Link></li>
              <li><Link to="/cloud-services" className="text-gray-400 hover:text-purple-400 transition-colors">Cloud Services</Link></li>
              <li><Link to="/cybersecurity" className="text-gray-400 hover:text-purple-400 transition-colors">Cybersecurity</Link></li>
              <li><Link to="/devops" className="text-gray-400 hover:text-purple-400 transition-colors">DevOps</Link></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Company</h3>
            <ul className="space-y-2">
              <li><Link to="/about" className="text-gray-400 hover:text-purple-400 transition-colors">About Us</Link></li>
              <li><Link to="/careers" className="text-gray-400 hover:text-purple-400 transition-colors">Careers</Link></li>
              <li><Link to="/contact" className="text-gray-400 hover:text-purple-400 transition-colors">Contact</Link></li>
              <li><Link to="/privacy" className="text-gray-400 hover:text-purple-400 transition-colors">Privacy Policy</Link></li>
              <li><Link to="/terms" className="text-gray-400 hover:text-purple-400 transition-colors">Terms of Service</Link></li>
            </ul>
=======
        {/* Stats Section */}
        <div className="border-t border-cyan-500/20 bg-slate-800/30 relative overflow-hidden">
          {/* Animated background */}
          <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/5 via-purple-500/5 to-cyan-500/5"></div>
          <div className="container mx-auto px-4 py-8 relative z-10">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              <div className="group">
                <div className="flex items-center justify-center w-16 h-16 bg-gradient-to-r from-cyan-600 to-purple-600 rounded-full mx-auto mb-3 group-hover:scale-110 transition-transform duration-300 shadow-lg shadow-cyan-500/25 group-hover:shadow-cyan-500/40">
                  <Users className="w-8 h-8 text-white group-hover:animate-pulse" />
                </div>
                <div className="text-2xl font-bold text-white mb-1 group-hover:text-cyan-400 transition-colors duration-300">500+</div>
                <div className="text-sm text-gray-400 group-hover:text-white transition-colors duration-300">Happy Clients</div>
              </div>
              <div className="group">
                <div className="flex items-center justify-center w-16 h-16 bg-gradient-to-r from-green-600 to-cyan-600 rounded-full mx-auto mb-3 group-hover:scale-110 transition-transform duration-300 shadow-lg shadow-green-500/25 group-hover:shadow-green-500/40">
                  <Award className="w-8 h-8 text-white group-hover:animate-pulse" />
                </div>
                <div className="text-2xl font-bold text-white mb-1 group-hover:text-green-400 transition-colors duration-300">1000+</div>
                <div className="text-sm text-gray-400 group-hover:text-white transition-colors duration-300">Projects Completed</div>
              </div>
              <div className="group">
                <div className="flex items-center justify-center w-16 h-16 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full mx-auto mb-3 group-hover:scale-110 transition-transform duration-300 shadow-lg shadow-purple-500/25 group-hover:shadow-purple-500/40">
                  <Clock className="w-8 h-8 text-white group-hover:animate-pulse" />
                </div>
                <div className="text-2xl font-bold text-white mb-1 group-hover:text-purple-400 transition-colors duration-300">99.9%</div>
                <div className="text-sm text-gray-400 group-hover:text-white transition-colors duration-300">Uptime Guarantee</div>
              </div>
              <div className="group">
                <div className="flex items-center justify-center w-16 h-16 bg-gradient-to-r from-orange-600 to-red-600 rounded-full mx-auto mb-3 group-hover:scale-110 transition-transform duration-300 shadow-lg shadow-orange-500/25 group-hover:shadow-orange-500/40">
                  <Shield className="w-8 h-8 text-white group-hover:animate-pulse" />
                </div>
                <div className="text-2xl font-bold text-white mb-1 group-hover:text-orange-400 transition-colors duration-300">24/7</div>
                <div className="text-sm text-gray-400 group-hover:text-white transition-colors duration-300">Support Available</div>
              </div>
            </div>
>>>>>>> e147079fabc5ed4c39aa0de061f6683aa394ec59
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-slate-700 mt-8 pt-8 text-center">
          <p className="text-gray-400">
            © 2024 Zion Tech Group. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;