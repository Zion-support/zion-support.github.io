import React from 'react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const serviceCategories = [
    {
      title: 'AI Services',
      icon: <Brain className="w-5 h-5 text-cyan-400" />,
      services: [
        { name: 'AI Analytics Dashboard Pro', href: '/ai-analytics-dashboard-pro' },
        { name: 'AI Content Generation Pro', href: '/ai-content-generation-pro' },
        { name: 'AI Automation Suite', href: '/ai-automation-suite' },
        { name: 'AI Business Intelligence Pro', href: '/ai-business-intelligence-pro' },
        { name: 'AI Code Assistant Pro', href: '/ai-code-assistant-pro' },
        { name: 'AI Chatbot Enterprise', href: '/ai-chatbot-enterprise' }
      ]
    },
    {
      title: 'IT Services',
      icon: <Code className="w-5 h-5 text-purple-400" />,
      services: [
        { name: 'Cloud Infrastructure', href: '/ai-cloud-infrastructure' },
        { name: 'API Management', href: '/ai-api-management' },
        { name: 'Database Solutions', href: '/database-solutions' },
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
    <footer className="bg-gray-900 text-white py-8">
      <div className="container mx-auto px-4 text-center">
        <p>&copy; 2024 Zion Tech. All rights reserved.</p>
import { Link  } from 'react-router-dom';
import { Mail, Phone, MapPin, Github, Linkedin, Twitter, ArrowRight  } from 'lucide-react';

      <div className="relative z-10">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mb-12">
          {/* Company Info */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">Z</span>
              </div>
              <span className="text-xlfont-bold">Zion Tech Group</span>
            </div>
            <p className="text-gray-400 text-sm max-w-md">
              Leading provider of AI-powered solutions, 5G implementation, and enterprise IT services. 
              We help businesses transform with cutting-edge technology and innovative solutions.
            </p>
            <div className="flex space-x-4">
              <a href="https://github.com/ziontechgroup" className ="text-gray-400 hover:text-white transition-colors" target ="_blank" re l ="noopener noreferrer">
                <Github className="w-5 h-5" />
              </a>
              <a href="https://linkedin.com/company/ziontechgroup" className ="text-gray-400 hover:text-white transition-colors" target ="_blank" re l ="noopener noreferrer">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="https://twitter.com/ziontechgroup" className ="text-gray-400 hover:text-white transition-colors" target ="_blank" re l ="noopener noreferrer">
                <Twitter className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Quick Links</h3>
            <ul className="space-y-2">
              {quickLinks.map((link, index) => (
                <li key ={index}>
                  <Link to ={link.path} className ="text-gray-400 hover:text-white transition-colors text-sm flex items-center group">
                    {link.name}
                    <ArrowRight className="w-3 h-3 ml-1 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* AI Services */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Our Services</h3>
            <ul className="space-y-2">
              {services.slice(0, 6).map((service, index) => (
                <li key ={index}>
                  <Link to ={service.path} className ="text-gray-400 hover:text-white transition-colors text-sm flex items-center group">
                    {service.name}
                    <ArrowRight className="w-3 h-3ml-1 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Resources</h3>
            <ul className="space-y-2">
              {resources.map((resource, index) => (
                <li key ={index}>
                  <Link to ={resource.path} 
                    className ="text-gray-400 hover:text-white transition-colors text-sm flex items-center group">
                    {resource.name}
                    <ArrowRight className="w-3 h-3 ml-1 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Contact Info Section */}
        <div className="bg-gray-800/50 rounded-lgp-6 mb-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="flexitems-centerspace-x-3">
              <div className="bg-blue-600/20 p-2rounded-lg">
                <Mail className="w-5 h-5text-blue-400" />
              </div>
              <div>
                <p className="text-smtext-gray-400">Email</p>
                <p className="text-whitefont-medium">kleber@ziontechgroup.com</p>
              </div>
            </div>
            <div className="flexitems-centerspace-x-3">
              <div className="bg-green-600/20 p-2rounded-lg">
                <Phone className="w-5 h-5 text-green-400" />
              </div>
              <div>
                <p className="text-smtext-gray-400">Phone</p>
                <p className="text-whitefont-medium">+1 (302) 464-0950</p>
              </div>
            </div>
            <div className="flexitems-centerspace-x-3">
              <div className="bg-red-600/20 p-2rounded-lg">
                <MapPin className="w-5 h-5text-red-400" />
              </div>
              <div>
                <p className="text-smtext-gray-400">Location</p>
                <p className="text-whitefont-medium">364 E Main St STE 1008, Middletown, DE 19709</p>
              </div>
            </div>
          </div>
        </div>

        {/* Newsletter Signup */}
        <div className="bg-gradient-to-r from-blue-600/20 to-purple-600/20 rounded-lg p-6 mb-8">
          <div className="text-center">
            <h3 className="text-xl font-semibold text-white mb-2">Stay Updated</h3>
            <p className="text-gray-300 text-sm mb-4">Get the latest insights on AI, technology trends, and industry updates.</p>
            <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <input type ="email"
                placeholde r ="Enter your email"
                className ="flex-1 px-4 py-2 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
              <button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-2 rounded-lg font-medium hover:from-blue-700 hover:to-purple-700 transition-all duration-300 flex items-center justify-center">
                Subscribe
                <ArrowRight className="w-4 h-4 ml-2" />
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex flex-col md:flex-row items-center space-y-2 md:space-y-0 md:space-x-6">
              <p className="text-gray-400 text-sm">
                © 2024 Zion Tech Group. All rights reserved.
              </p>
                <div className="flex space-x-6">
                  {legal.map((item, index) => (
                    <Link key ={index} t o ={item.path} className ="text-gray-400 hover:text-white transition-colors text-sm">
                    {item.name}
                  </Link>
                ))}
              </div>
            </div>

            {/* Service Categories */}
            <div className="lg:col-span-2">
              <h3 className="text-xl font-bold text-white mb-6">Our Services</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {serviceCategories.map((category) => (
                  <div key={category.title}>
                    <div className="flex items-center space-x-2 mb-4">
                      {category.icon}
                      <h4 className="text-lg font-semibold text-white">{category.title}</h4>
                    </div>
                    <ul className="space-y-2">
                      {category.services.map((service) => (
                        <li key={service.name}>
                          <Link
                            to={service.href}
                            className="flex items-center space-x-2 text-gray-300 hover:text-cyan-400 transition-colors duration-200 group"
                          >
                            <ArrowRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                            <span className="text-sm">{service.name}</span>
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
              <h3 className="text-xl font-bold text-white mb-6">Quick Links</h3>
              <ul className="space-y-2 mb-8">
                {quickLinks.map((link) => (
                  <li key={link.name}>
                    <Link
                      to={link.href}
                      className="text-gray-300 hover:text-cyan-400 transition-colors duration-200 text-sm"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>

              {/* Newsletter Signup */}
              <div className="bg-slate-800/50 rounded-lg p-6 border border-cyan-500/20">
                <h4 className="text-lg font-semibold text-white mb-3">Stay Updated</h4>
                <p className="text-gray-300 text-sm mb-4">
                  Get the latest updates on AI and IT innovations.
                </p>
                <div className="flex space-x-2">
                  <input
                    type="email"
                    placeholder="Enter your email"
                    className="flex-1 px-3 py-2 bg-slate-700 border border-slate-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500"
                  />
                  <button className="px-4 py-2 bg-gradient-to-r from-cyan-600 to-purple-600 text-white rounded-lg hover:from-cyan-700 hover:to-purple-700 transition-all duration-300 font-semibold">
                    Subscribe
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Stats Section */}
        <div className="border-t border-cyan-500/20 bg-slate-800/30">
          <div className="container mx-auto px-4 py-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              <div className="group">
                <div className="flex items-center justify-center w-16 h-16 bg-gradient-to-r from-cyan-600 to-purple-600 rounded-full mx-auto mb-3 group-hover:scale-110 transition-transform duration-300">
                  <Users className="w-8 h-8 text-white" />
                </div>
                <div className="text-2xl font-bold text-white mb-1">500+</div>
                <div className="text-sm text-gray-400">Happy Clients</div>
              </div>
              <div className="group">
                <div className="flex items-center justify-center w-16 h-16 bg-gradient-to-r from-green-600 to-cyan-600 rounded-full mx-auto mb-3 group-hover:scale-110 transition-transform duration-300">
                  <Award className="w-8 h-8 text-white" />
                </div>
                <div className="text-2xl font-bold text-white mb-1">1000+</div>
                <div className="text-sm text-gray-400">Projects Completed</div>
              </div>
              <div className="group">
                <div className="flex items-center justify-center w-16 h-16 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full mx-auto mb-3 group-hover:scale-110 transition-transform duration-300">
                  <Clock className="w-8 h-8 text-white" />
                </div>
                <div className="text-2xl font-bold text-white mb-1">99.9%</div>
                <div className="text-sm text-gray-400">Uptime Guarantee</div>
              </div>
              <div className="group">
                <div className="flex items-center justify-center w-16 h-16 bg-gradient-to-r from-orange-600 to-red-600 rounded-full mx-auto mb-3 group-hover:scale-110 transition-transform duration-300">
                  <Shield className="w-8 h-8 text-white" />
                </div>
                <div className="text-2xl font-bold text-white mb-1">24/7</div>
                <div className="text-sm text-gray-400">Support Available</div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-cyan-500/20 bg-slate-800/50">
          <div className="container mx-auto px-4 py-6">
            <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
              <div className="text-gray-400 text-sm">
                © {currentYear} Zion Tech Group. All rights reserved.
              </div>
              <div className="flex items-center space-x-6 text-sm text-gray-400">
                <Link to="/privacy" className="hover:text-cyan-400 transition-colors">
                  Privacy Policy
                </Link>
                <Link to="/terms" className="hover:text-cyan-400 transition-colors">
                  Terms of Service
                </Link>
                <Link to="/cookies" className="hover:text-cyan-400 transition-colors">
                  Cookie Policy
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;