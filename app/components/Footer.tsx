'use client';
import React from 'react';
import { Link } from 'react-router-dom';
<<<<<<< HEAD
import { Mail, Phone, MapPin, Github, Linkedin, Twitter, ArrowRight, Brain, Cloud, Shield, Globe, Database, Smartphone, Zap, Sparkles, Star } from 'lucide-react';
=======
import { Mail, Phone, MapPin, ArrowRight, Brain, Cloud, Shield, Globe, Database, Zap, Star } from 'lucide-react';
>>>>>>> cursor/fix-errors-and-merge-to-main-ba0d

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  
  const aiServices = [
    { name: 'AI Analytics & BI', url: '/ai-analytics', description: 'Business intelligence' },
    { name: 'AI Automation', url: '/ai-automation', description: 'Process automation' },
    { name: 'AI Chatbots & NLP', url: '/ai-chatbot-builder', description: 'Conversational AI' },
    { name: 'AI Content Generation', url: '/ai-content-generation', description: 'Automated content' },
    { name: 'AI Cybersecurity', url: '/ai-cybersecurity', description: 'AI security' },
    { name: 'AI CRM', url: '/ai-crm', description: 'Smart CRM' },
    { name: 'AI Data Analytics', url: '/ai-data-analytics', description: 'Data insights' },
    { name: 'AI Healthcare', url: '/ai-healthcare', description: 'Medical AI' },
    { name: 'AI Computer Vision', url: '/ai-computer-vision', description: 'Image analysis' },
    { name: 'AI Voice Solutions', url: '/ai-voice-solutions', description: 'Speech recognition' },
    { name: 'AI Financial Services', url: '/ai-financial-services', description: 'Fintech AI' },
    { name: 'AI E-commerce Solutions', url: '/ai-ecommerce-solutions', description: 'E-commerce AI' }
  ];

  const itServices = [
<<<<<<< HEAD
    { name: 'Cloud Migration', url: '/cloud-migration', description: 'Cloud solutions' },
    { name: 'DevOps & CI/CD', url: '/devops', description: 'Development operations' },
    { name: 'Cybersecurity', url: '/cybersecurity', description: 'Security solutions' },
    { name: 'Database Management', url: '/database', description: 'Database services' },
    { name: 'API Development', url: '/api', description: 'API solutions' },
    { name: 'Mobile App Development', url: '/mobile-development', description: 'Mobile apps' },
    { name: 'Web Development', url: '/web-development', description: 'Web solutions' },
    { name: 'IT Consulting', url: '/it-consulting', description: 'IT advisory' },
    { name: 'System Integration', url: '/system-integration', description: 'System solutions' },
    { name: 'Data Management', url: '/data-management', description: 'Data solutions' },
    { name: 'Network Security', url: '/network-security', description: 'Network protection' },
    { name: 'IT Support', url: '/it-support', description: 'Technical support' }
  ];

=======
    { name: 'Cloud Migration', url: '/cloud-migration', description: 'Cloud infrastructure' },
    { name: 'Cybersecurity', url: '/cybersecurity', description: 'Security solutions' },
    { name: 'Web Development', url: '/web-development', description: 'Custom websites' },
    { name: 'Mobile Development', url: '/mobile-development', description: 'Mobile apps' },
    { name: 'DevOps', url: '/devops', description: 'Development operations' },
    { name: 'Database Management', url: '/database-management', description: 'Data solutions' },
    { name: 'API Development', url: '/api-development', description: 'API services' },
    { name: 'System Integration', url: '/system-integration', description: 'System solutions' }
  ];

  const microSaas = [
    { name: 'Zion Analytics Pro', url: '/zion-analytics-pro', description: 'Business intelligence' },
    { name: 'Zion AI Video Editor', url: '/zion-ai-video-editor', description: 'AI video editing' },
    { name: 'Zion AI Code Reviewer', url: '/zion-ai-code-reviewer', description: 'Code analysis' },
    { name: 'Zion AI Fraud Detector', url: '/zion-ai-fraud-detector', description: 'Fraud detection' },
    { name: 'Zion AI Content Writer', url: '/zion-ai-content-writer', description: 'Content creation' },
    { name: 'Zion AI Email Assistant', url: '/zion-ai-email-assistant', description: 'Email automation' }
  ];

>>>>>>> cursor/fix-errors-and-merge-to-main-ba0d
  const company = [
    { name: 'About Us', url: '/about' },
    { name: 'Our Team', url: '/team' },
    { name: 'Careers', url: '/careers' },
<<<<<<< HEAD
    { name: 'News & Blog', url: '/news' },
    { name: 'Case Studies', url: '/case-studies' },
    { name: 'Partners', url: '/partners' },
    { name: 'Investors', url: '/investors' },
    { name: 'Contact', url: '/contact' }
  ];

  const resources = [
    { name: 'Documentation', url: '/docs' },
    { name: 'API Reference', url: '/api-docs' },
    { name: 'Tutorials', url: '/tutorials' },
    { name: 'White Papers', url: '/white-papers' },
    { name: 'Webinars', url: '/webinars' },
    { name: 'Support Center', url: '/support' },
    { name: 'Community', url: '/community' },
    { name: 'Status Page', url: '/status' }
  ];

  const socialLinks = [
    { name: 'Twitter', url: 'https://twitter.com/ziontechgroup', icon: <Twitter className="w-5 h-5" /> },
    { name: 'LinkedIn', url: 'https://linkedin.com/company/ziontechgroup', icon: <Linkedin className="w-5 h-5" /> },
    { name: 'GitHub', url: 'https://github.com/ziontechgroup', icon: <Github className="w-5 h-5" /> }
=======
    { name: 'Contact', url: '/contact' },
    { name: 'Blog', url: '/blog' },
    { name: 'Case Studies', url: '/case-studies' }
  ];

  const support = [
    { name: 'Documentation', url: '/docs' },
    { name: 'API Reference', url: '/api-docs' },
    { name: 'Help Center', url: '/help' },
    { name: 'Community', url: '/community' },
    { name: 'Status', url: '/status' },
    { name: 'Support', url: '/support' }
>>>>>>> cursor/fix-errors-and-merge-to-main-ba0d
  ];

  return (
    <footer className="bg-gray-900 text-white">
<<<<<<< HEAD
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg flex items-center justify-center">
                <Brain className="w-5 h-5 text-white" />
=======
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <div className="flex items-center mb-4">
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center">
                  <Brain className="h-5 w-5 text-white" />
                </div>
                <span className="text-xl font-bold">Zion Tech Group</span>
>>>>>>> cursor/fix-errors-and-merge-to-main-ba0d
              </div>
            </div>
<<<<<<< HEAD
            <p className="text-gray-400 mb-6 max-w-sm">
              Leading provider of AI and IT solutions, helping businesses transform through innovative technology and expert consulting.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white transition-colors duration-300"
                  aria-label={social.name}
                >
                  {social.icon}
                </a>
              ))}
=======
            <p className="text-gray-300 mb-6 max-w-md">
              Leading provider of AI solutions, cloud infrastructure, and cutting-edge technology services 
              that transform businesses and drive innovation.
            </p>
            <div className="space-y-2">
              <div className="flex items-center text-gray-300">
                <Phone className="h-4 w-4 mr-2" />
                <a href="tel:+13024640950" className="hover:text-purple-400 transition-colors">
                  +1 (302) 464-0950
                </a>
              </div>
              <div className="flex items-center text-gray-300">
                <Mail className="h-4 w-4 mr-2" />
                <a href="mailto:kleber@ziontechgroup.com" className="hover:text-purple-400 transition-colors">
                  kleber@ziontechgroup.com
                </a>
              </div>
              <div className="flex items-center text-gray-300">
                <MapPin className="h-4 w-4 mr-2" />
                <span>364 E Main St STE 1008, Middletown DE 19709</span>
              </div>
>>>>>>> cursor/fix-errors-and-merge-to-main-ba0d
            </div>
          </div>

          {/* AI Services */}
          <div>
<<<<<<< HEAD
            <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
              <Sparkles className="w-5 h-5 text-blue-400" />
=======
            <h3 className="text-lg font-semibold mb-4 flex items-center">
              <Zap className="h-5 w-5 mr-2 text-purple-400" />
>>>>>>> cursor/fix-errors-and-merge-to-main-ba0d
              AI Services
            </h3>
            <ul className="space-y-3">
              {aiServices.slice(0, 6).map((service, index) => (
                <li key={index}>
                  <Link
                    to={service.url}
<<<<<<< HEAD
                    className="text-gray-400 hover:text-white transition-colors duration-300 flex items-center gap-2 group"
=======
                    className="text-gray-300 hover:text-purple-400 transition-colors text-sm"
>>>>>>> cursor/fix-errors-and-merge-to-main-ba0d
                  >
                    <ArrowRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    <span className="text-sm">{service.name}</span>
                  </Link>
                </li>
              ))}
            </ul>
            <Link
              to="/ai-services"
              className="text-blue-400 hover:text-blue-300 text-sm font-medium mt-4 inline-flex items-center gap-1"
            >
              View All AI Services <ArrowRight className="w-3 h-3" />
            </Link>
          </div>

          {/* IT Services */}
          <div>
<<<<<<< HEAD
            <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
              <Cloud className="w-5 h-5 text-green-400" />
=======
            <h3 className="text-lg font-semibold mb-4 flex items-center">
              <Cloud className="h-5 w-5 mr-2 text-cyan-400" />
>>>>>>> cursor/fix-errors-and-merge-to-main-ba0d
              IT Services
            </h3>
            <ul className="space-y-3">
              {itServices.slice(0, 6).map((service, index) => (
                <li key={index}>
                  <Link
                    to={service.url}
<<<<<<< HEAD
                    className="text-gray-400 hover:text-white transition-colors duration-300 flex items-center gap-2 group"
=======
                    className="text-gray-300 hover:text-cyan-400 transition-colors text-sm"
>>>>>>> cursor/fix-errors-and-merge-to-main-ba0d
                  >
                    <ArrowRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    <span className="text-sm">{service.name}</span>
                  </Link>
                </li>
              ))}
            </ul>
            <Link
              to="/it-services"
              className="text-green-400 hover:text-green-300 text-sm font-medium mt-4 inline-flex items-center gap-1"
            >
              View All IT Services <ArrowRight className="w-3 h-3" />
            </Link>
          </div>

          {/* Company */}
          <div>
<<<<<<< HEAD
            <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
              <Globe className="w-5 h-5 text-purple-400" />
              Company
            </h3>
            <ul className="space-y-3">
              {company.map((item, index) => (
                <li key={index}>
                  <Link
                    to={item.url}
                    className="text-gray-400 hover:text-white transition-colors duration-300 flex items-center gap-2 group"
                  >
                    <ArrowRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    <span className="text-sm">{item.name}</span>
=======
            <h3 className="text-lg font-semibold mb-4 flex items-center">
              <Star className="h-5 w-5 mr-2 text-green-400" />
              Micro SAAS
            </h3>
            <ul className="space-y-2">
              {microSaas.slice(0, 6).map((product, index) => (
                <li key={index}>
                  <Link
                    to={product.url}
                    className="text-gray-300 hover:text-green-400 transition-colors text-sm"
                  >
                    {product.name}
>>>>>>> cursor/fix-errors-and-merge-to-main-ba0d
                  </Link>
                </li>
              ))}
            </ul>
          </div>

<<<<<<< HEAD
          {/* Resources */}
          <div>
            <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
              <Database className="w-5 h-5 text-yellow-400" />
              Resources
            </h3>
            <ul className="space-y-3">
              {resources.map((item, index) => (
                <li key={index}>
                  <Link
                    to={item.url}
                    className="text-gray-400 hover:text-white transition-colors duration-300 flex items-center gap-2 group"
                  >
                    <ArrowRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    <span className="text-sm">{item.name}</span>
=======
          {/* Company & Support */}
          <div>
            <h3 className="text-lg font-semibold mb-4 flex items-center">
              <Globe className="h-5 w-5 mr-2 text-blue-400" />
              Company
            </h3>
            <ul className="space-y-2 mb-6">
              {company.map((item, index) => (
                <li key={index}>
                  <Link
                    to={item.url}
                    className="text-gray-300 hover:text-blue-400 transition-colors text-sm"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
            <h3 className="text-lg font-semibold mb-4 flex items-center">
              <Shield className="h-5 w-5 mr-2 text-red-400" />
              Support
            </h3>
            <ul className="space-y-2">
              {support.map((item, index) => (
                <li key={index}>
                  <Link
                    to={item.url}
                    className="text-gray-300 hover:text-red-400 transition-colors text-sm"
                  >
                    {item.name}
>>>>>>> cursor/fix-errors-and-merge-to-main-ba0d
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

<<<<<<< HEAD
      {/* Newsletter Signup */}
      <div className="border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="bg-gradient-to-r from-blue-600/20 to-purple-600/20 rounded-xl p-6 border border-blue-500/30">
            <div className="flex flex-col md:flex-row items-center justify-between gap-4">
              <div>
                <h3 className="text-lg font-semibold text-white mb-2">Stay Updated</h3>
                <p className="text-gray-300 text-sm">
                  Get the latest AI and IT insights delivered to your inbox.
                </p>
              </div>
              <div className="flex w-full md:w-auto gap-2">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 md:w-64 px-4 py-2 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
                <button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-2 rounded-lg font-medium hover:from-blue-700 hover:to-purple-700 transition-all duration-300 flex items-center gap-2">
                  Subscribe <ArrowRight className="w-4 h-4" />
                </button>
              </div>
=======
        {/* Newsletter Signup */}
        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="max-w-2xl mx-auto text-center">
            <h3 className="text-xl font-semibold mb-4">Stay Updated with Our Latest AI & Tech Solutions</h3>
            <p className="text-gray-300 mb-6">
              Get insights, updates, and exclusive offers delivered to your inbox.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
              />
              <button className="px-6 py-3 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold rounded-lg hover:from-purple-700 hover:to-pink-700 transition-all duration-300 transform hover:scale-105 flex items-center justify-center">
                Subscribe
                <ArrowRight className="ml-2 h-4 w-4" />
              </button>
>>>>>>> cursor/fix-errors-and-merge-to-main-ba0d
            </div>
          </div>
        </div>
      </div>

      {/* Contact Info */}
      <div className="border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="flex items-center gap-3">
              <Mail className="w-5 h-5 text-blue-400" />
              <div>
                <p className="text-sm text-gray-400">Email</p>
                <p className="text-white">info@ziontechgroup.com</p>
              </div>
            </div>
<<<<<<< HEAD
            <div className="flex items-center gap-3">
              <Phone className="w-5 h-5 text-green-400" />
              <div>
                <p className="text-sm text-gray-400">Phone</p>
                <p className="text-white">+1 (555) 123-4567</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <MapPin className="w-5 h-5 text-red-400" />
              <div>
                <p className="text-sm text-gray-400">Address</p>
                <p className="text-white">123 Tech Street, San Francisco, CA</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-6 text-sm text-gray-400">
              <p>&copy; {currentYear} Zion Tech Group. All rights reserved.</p>
              <div className="flex items-center gap-4">
                <Link to="/privacy" className="hover:text-white transition-colors duration-300">
                  Privacy Policy
                </Link>
                <Link to="/terms" className="hover:text-white transition-colors duration-300">
                  Terms of Service
                </Link>
                <Link to="/cookies" className="hover:text-white transition-colors duration-300">
                  Cookie Policy
                </Link>
              </div>
            </div>
            <div className="flex items-center gap-2 text-sm text-gray-400">
              <span>Powered by</span>
              <div className="flex items-center gap-1">
                <Star className="w-4 h-4 text-yellow-400" />
                <span className="text-white font-medium">Zion Tech Group</span>
              </div>
=======
            <div className="flex space-x-6 text-sm">
              <Link to="/privacy" className="text-gray-400 hover:text-white transition-colors">
                Privacy Policy
              </Link>
              <Link to="/terms" className="text-gray-400 hover:text-white transition-colors">
                Terms of Service
              </Link>
              <Link to="/cookies" className="text-gray-400 hover:text-white transition-colors">
                Cookie Policy
              </Link>
>>>>>>> cursor/fix-errors-and-merge-to-main-ba0d
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;