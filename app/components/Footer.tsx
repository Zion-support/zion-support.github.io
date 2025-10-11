'use client';
import React, { memo } from 'react';
import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, Clock, Zap, Brain, Cloud, Code, Users, ArrowRight } from 'lucide-react';

const Footer: React.FC = memo(() => {
  const currentYear = new Date().getFullYear();
  
  const aiServices = [
    { name: 'AI Chatbots & NLP', url: '/ai-chatbot-builder', description: 'Conversational AI' },
    { name: 'AI Content Generation', url: '/ai-content-generation', description: 'Automated content' },
    { name: 'AI Data Analytics', url: '/ai-data-analytics', description: 'Business intelligence' },
    { name: 'AI Computer Vision', url: '/ai-computer-vision', description: 'Image analysis' },
    { name: 'AI Voice Solutions', url: '/ai-voice-solutions', description: 'Speech recognition' },
    { name: 'AI Workflow Automation', url: '/ai-automation', description: 'Process automation' },
    { name: 'AI Healthcare Solutions', url: '/ai-healthcare', description: 'Medical AI' },
    { name: 'AI Financial Services', url: '/ai-financial-services', description: 'Fintech AI' },
    { name: 'AI Document Processing', url: '/ai-document-processing', description: 'Document analysis' },
    { name: 'AI Predictive Analytics', url: '/ai-predictive-analytics', description: 'Business forecasting' },
    { name: 'AI HR Solutions', url: '/ai-hr-solutions', description: 'Human resources AI' },
    { name: 'AI Marketing Automation', url: '/ai-marketing', description: 'Marketing AI' }
  ];

  const itServices = [
    { name: 'Cloud Infrastructure', url: '/cloud-infrastructure', description: 'Scalable cloud solutions' },
    { name: 'Cybersecurity Solutions', url: '/cybersecurity-solutions', description: 'Security services' },
    { name: 'Web Development', url: '/web-development', description: 'Modern web apps' },
    { name: 'Mobile Development', url: '/mobile-development', description: 'Native mobile apps' },
    { name: 'Database Management', url: '/database-management', description: 'Database optimization' },
    { name: 'DevOps & CI/CD', url: '/devops', description: 'Development operations' },
    { name: 'Network Solutions', url: '/network-solutions', description: 'Enterprise networking' },
    { name: 'IT Consulting', url: '/it-consulting', description: 'Strategic planning' },
    { name: 'System Integration', url: '/system-integration', description: 'Connect systems' },
    { name: 'API Development', url: '/api-development', description: 'RESTful APIs' },
    { name: 'Microservices', url: '/microservices', description: 'Scalable architecture' },
    { name: 'Legacy Modernization', url: '/legacy-modernization', description: 'Update old systems' }
  ];

  const companyPages = [
    { name: 'About Us', url: '/about', description: 'Our story' },
    { name: 'Our Team', url: '/team', description: 'Meet the experts' },
    { name: 'Careers', url: '/careers', description: 'Join our team' },
    { name: 'Case Studies', url: '/case-studies', description: 'Success stories' },
    { name: 'Blog', url: '/blog', description: 'Latest insights' },
    { name: 'Press', url: '/press', description: 'News & media' },
    { name: 'Partners', url: '/partners', description: 'Our partners' },
    { name: 'Investors', url: '/investors', description: 'Investment info' }
  ];

  const supportPages = [
    { name: 'Help Center', url: '/help', description: 'Get support' },
    { name: 'Documentation', url: '/docs', description: 'Technical docs' },
    { name: 'API Reference', url: '/api-docs', description: 'API documentation' },
    { name: 'Tutorials', url: '/tutorials', description: 'Learn with us' },
    { name: 'Community', url: '/community', description: 'Join discussions' },
    { name: 'Status Page', url: '/status', description: 'System status' },
    { name: 'Contact Support', url: '/support', description: 'Get help' },
    { name: 'Report Bug', url: '/bug-report', description: 'Report issues' }
  ];

  const legalPages = [
    { name: 'Privacy Policy', url: '/privacy', description: 'Data protection' },
    { name: 'Terms of Service', url: '/terms', description: 'Usage terms' },
    { name: 'Cookie Policy', url: '/cookies', description: 'Cookie usage' },
    { name: 'GDPR Compliance', url: '/gdpr', description: 'Data rights' },
    { name: 'Security', url: '/security', description: 'Security measures' },
    { name: 'Compliance', url: '/compliance', description: 'Regulatory compliance' }
  ];

  return (
    <footer className="relative bg-slate-900 text-gray-300 overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-cyan-500/10 via-transparent to-transparent" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 relative z-10">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-10 h-10 bg-gradient-to-r from-cyan-500 via-purple-600 to-pink-600 rounded-xl flex items-center justify-center">
                <Brain className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-white">Zion Tech Group</h3>
                <p className="text-sm text-cyan-400">AI & IT Solutions</p>
              </div>
            </div>
            <p className="text-gray-400 mb-6 leading-relaxed">
              Leading provider of advanced AI and IT solutions that transform businesses worldwide. 
              We deliver cutting-edge technology with proven results.
            </p>
            
            {/* Contact Info */}
            <div className="space-y-3">
              <div className="flex items-center text-sm text-gray-300 group">
                <div className="w-8 h-8 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-lg flex items-center justify-center mr-3">
                  <Phone className="w-4 h-4 text-white" />
                </div>
                <a href="tel:+13024640950" className="hover:text-cyan-400 transition-colors font-medium">+1 (302) 464-0950</a>
              </div>
              
              <div className="flex items-center text-sm text-gray-300 group">
                <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-pink-600 rounded-lg flex items-center justify-center mr-3">
                  <Mail className="w-4 h-4 text-white" />
                </div>
                <a href="mailto:kleber@ziontechgroup.com" className="hover:text-cyan-400 transition-colors font-medium">kleber@ziontechgroup.com</a>
              </div>
              
              <div className="flex items-center text-sm text-gray-300 group">
                <div className="w-8 h-8 bg-gradient-to-r from-green-500 to-teal-600 rounded-lg flex items-center justify-center mr-3">
                  <MapPin className="w-4 h-4 text-white" />
                </div>
                <span>364 E Main St STE 1008<br />Middletown, DE 19709</span>
              </div>
              
              <div className="flex items-center text-sm text-gray-300 group">
                <div className="w-8 h-8 bg-gradient-to-r from-orange-500 to-red-600 rounded-lg flex items-center justify-center mr-3">
                  <Clock className="w-4 h-4 text-white" />
                </div>
                <span>Mon-Fri: 9AM-6PM EST<br />24/7 Emergency Support</span>
              </div>
            </div>
          </div>

          {/* AI Services */}
          <div>
            <h4 className="text-lg font-bold text-white mb-6 flex items-center">
              <Brain className="w-5 h-5 text-cyan-400 mr-2" />
              AI Services
            </h4>
            <ul className="space-y-3">
              {aiServices.slice(0, 6).map((service) => (
                <li key={service.name}>
                  <Link 
                    to={service.url} 
                    className="text-gray-400 hover:text-cyan-400 transition-colors duration-300 flex items-center group"
                  >
                    <ArrowRight className="w-3 h-3 mr-2 opacity-0 group-hover:opacity-100 transition-opacity" />
                    {service.name}
                  </Link>
                </li>
              ))}
              <li>
                <Link to="/ai-services" className="text-cyan-400 hover:text-cyan-300 font-medium text-sm">
                  View All AI Services →
                </Link>
              </li>
            </ul>
          </div>

          {/* IT Services */}
          <div>
            <h4 className="text-lg font-bold text-white mb-6 flex items-center">
              <Code className="w-5 h-5 text-green-400 mr-2" />
              IT Services
            </h4>
            <ul className="space-y-3">
              {itServices.slice(0, 6).map((service) => (
                <li key={service.name}>
                  <Link 
                    to={service.url} 
                    className="text-gray-400 hover:text-cyan-400 transition-colors duration-300 flex items-center group"
                  >
                    <ArrowRight className="w-3 h-3 mr-2 opacity-0 group-hover:opacity-100 transition-opacity" />
                    {service.name}
                  </Link>
                </li>
              ))}
              <li>
                <Link to="/it-services" className="text-cyan-400 hover:text-cyan-300 font-medium text-sm">
                  View All IT Services →
                </Link>
              </li>
            </ul>
          </div>

          {/* Company & Support */}
          <div>
            <h4 className="text-lg font-bold text-white mb-6 flex items-center">
              <Users className="w-5 h-5 text-purple-400 mr-2" />
              Company
            </h4>
            <ul className="space-y-3 mb-6">
              {companyPages.slice(0, 4).map((page) => (
                <li key={page.name}>
                  <Link 
                    to={page.url} 
                    className="text-gray-400 hover:text-cyan-400 transition-colors duration-300 flex items-center group"
                  >
                    <ArrowRight className="w-3 h-3 mr-2 opacity-0 group-hover:opacity-100 transition-opacity" />
                    {page.name}
                  </Link>
                </li>
              ))}
            </ul>
            
            <h4 className="text-lg font-bold text-white mb-6 flex items-center">
              <Zap className="w-5 h-5 text-yellow-400 mr-2" />
              Support
            </h4>
            <ul className="space-y-3">
              {supportPages.slice(0, 4).map((page) => (
                <li key={page.name}>
                  <Link 
                    to={page.url} 
                    className="text-gray-400 hover:text-cyan-400 transition-colors duration-300 flex items-center group"
                  >
                    <ArrowRight className="w-3 h-3 mr-2 opacity-0 group-hover:opacity-100 transition-opacity" />
                    {page.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Newsletter Signup */}
        <div className="bg-gradient-to-r from-slate-800/50 to-purple-900/50 rounded-2xl p-8 mb-12 border border-cyan-500/20">
          <div className="max-w-4xl mx-auto text-center">
            <h3 className="text-2xl font-bold text-white mb-4">
              Stay Updated with Latest AI & IT Trends
            </h3>
            <p className="text-gray-300 mb-6">
              Get exclusive insights, industry updates, and early access to new features.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 bg-slate-800 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition-colors"
              />
              <button className="px-6 py-3 bg-gradient-to-r from-cyan-500 to-purple-500 text-white rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-600 transition-all duration-300 shadow-lg shadow-cyan-500/25 hover:shadow-xl hover:shadow-cyan-500/40">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="border-t border-gray-700 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-gray-400 text-sm mb-4 md:mb-0">
              © {currentYear} Zion Tech Group. All rights reserved.
            </div>
            
            <div className="flex flex-wrap gap-6 text-sm">
              {legalPages.map((page) => (
                <Link
                  key={page.name}
                  to={page.url}
                  className="text-gray-400 hover:text-cyan-400 transition-colors duration-300"
                >
                  {page.name}
                </Link>
              ))}
            </div>
          </div>
          
          <div className="mt-6 text-center text-gray-500 text-xs">
            <p>
              Built with ❤️ using React, TypeScript, and Tailwind CSS. 
              Powered by cutting-edge AI technology.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
});

Footer.displayName = 'Footer';

export default Footer;