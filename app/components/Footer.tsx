'use client';
import React, { memo } from 'react';
import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, Clock, Zap, Brain, Cloud, Code, Users } from 'lucide-react';

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
    { name: 'AI Marketing Automation', url: '/ai-marketing', description: 'Smart marketing' }
  ];

  const itServices = [
    { name: 'Cloud Infrastructure', url: '/cloud-infrastructure', description: 'Scalable cloud solutions' },
    { name: 'Cybersecurity Solutions', url: '/cybersecurity-solutions', description: 'Advanced security' },
    { name: 'Web Development', url: '/web-development', description: 'Modern web applications' },
    { name: 'Mobile Development', url: '/mobile-development', description: 'iOS & Android apps' },
    { name: 'API Development', url: '/api-development', description: 'RESTful APIs' },
    { name: 'DevOps Services', url: '/devops-services', description: 'CI/CD pipelines' },
    { name: 'System Integration', url: '/system-integration', description: 'Seamless integration' },
    { name: 'IT Consulting', url: '/it-consulting', description: 'Strategic guidance' },
    { name: 'Software Testing', url: '/software-testing', description: 'Quality assurance' },
    { name: 'Database Management', url: '/database-management', description: 'Data optimization' },
    { name: 'AR/VR Solutions', url: '/ar-vr-solutions', description: 'Immersive experiences' },
    { name: 'IoT Integration', url: '/iot-integration', description: 'Internet of Things' }
  ];

  const companyLinks = [
    { name: 'About Us', url: '/about' },
    { name: 'Our Team', url: '/team' },
    { name: 'Careers', url: '/careers' },
    { name: 'Case Studies', url: '/case-studies' },
    { name: 'Blog', url: '/blog' },
    { name: 'Press', url: '/press' }
  ];

  const supportLinks = [
    { name: 'Help Center', url: '/support' },
    { name: 'Documentation', url: '/docs' },
    { name: 'API Reference', url: '/api-docs' },
    { name: 'Tutorials', url: '/tutorials' },
    { name: 'Community', url: '/community' },
    { name: 'Status', url: '/status' }
  ];

  const legalLinks = [
    { name: 'Privacy Policy', url: '/privacy' },
    { name: 'Terms of Service', url: '/terms' },
    { name: 'Cookie Policy', url: '/cookies' },
    { name: 'GDPR Compliance', url: '/gdpr' },
    { name: 'Security', url: '/security' },
    { name: 'Sitemap', url: '/sitemap' }
  ];

  const enterpriseLinks = [
    { name: 'Enterprise Solutions', url: '/enterprise' },
    { name: 'Digital Transformation', url: '/digital-transformation' },
    { name: 'Business Intelligence', url: '/business-intelligence' },
    { name: 'Edge Computing', url: '/edge-computing' },
    { name: 'Consultation', url: '/consultation' },
    { name: 'Custom Development', url: '/custom-software' }
  ];

  return (
    <footer className="relative bg-slate-900 text-gray-300 overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-cyan-500/10 via-transparent to-transparent" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 relative z-10">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8 mb-12">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-10 h-10 bg-gradient-to-r from-cyan-500 via-purple-600 to-pink-600 rounded-xl flex items-center justify-center">
                <Brain className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-white">Zion Tech Group</h3>
                <p className="text-sm text-cyan-400">AI & IT Solutions</p>
              </div>
            </div>
            <p className="text-gray-400 mb-6 max-w-md">
              Leading provider of AI and IT solutions that transform businesses through cutting-edge technology, 
              innovation, and exceptional service delivery.
            </p>
            <div className="space-y-4">
              <div className="flex items-center text-sm text-gray-300 group">
                <div className="w-8 h-8 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-lg flex items-center justify-center mr-3 group-hover:scale-110 transition-transform">
                  <Phone className="w-4 h-4 text-white" />
                </div>
                <a href="tel:+13024640950" className="hover:text-cyan-400 transition-colors font-medium">+1 302 464 0950</a>
              </div>
              <div className="flex items-center text-sm text-gray-300 group">
                <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-pink-600 rounded-lg flex items-center justify-center mr-3 group-hover:scale-110 transition-transform">
                  <Mail className="w-4 h-4 text-white" />
                </div>
                <a href="mailto:kleber@ziontechgroup.com" className="hover:text-cyan-400 transition-colors font-medium">kleber@ziontechgroup.com</a>
              </div>
              <div className="flex items-start text-sm text-gray-300 group">
                <div className="w-8 h-8 bg-gradient-to-r from-green-500 to-emerald-600 rounded-lg flex items-center justify-center mr-3 mt-0.5 group-hover:scale-110 transition-transform">
                  <MapPin className="w-4 h-4 text-white" />
                </div>
                <div>
                  <p className="font-medium">Delaware, USA</p>
                  <p className="text-gray-400 text-xs">Serving clients globally</p>
                </div>
              </div>
            </div>
          </div>

          {/* AI Services */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-6 flex items-center">
              <Brain className="w-5 h-5 text-cyan-400 mr-2" />
              AI Services
            </h4>
            <ul className="space-y-3">
              {aiServices.slice(0, 6).map((service) => (
                <li key={service.name}>
                  <Link
                    to={service.url}
                    className="text-gray-400 hover:text-cyan-400 transition-colors duration-300 text-sm group"
                  >
                    <span className="group-hover:translate-x-1 transition-transform inline-block">
                      {service.name}
                    </span>
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  to="/ai-services"
                  className="text-cyan-400 hover:text-cyan-300 transition-colors duration-300 text-sm font-medium"
                >
                  View All AI Services →
                </Link>
              </li>
            </ul>
          </div>

          {/* IT Services */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-6 flex items-center">
              <Cloud className="w-5 h-5 text-purple-400 mr-2" />
              IT Services
            </h4>
            <ul className="space-y-3">
              {itServices.slice(0, 6).map((service) => (
                <li key={service.name}>
                  <Link
                    to={service.url}
                    className="text-gray-400 hover:text-purple-400 transition-colors duration-300 text-sm group"
                  >
                    <span className="group-hover:translate-x-1 transition-transform inline-block">
                      {service.name}
                    </span>
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  to="/it-services"
                  className="text-purple-400 hover:text-purple-300 transition-colors duration-300 text-sm font-medium"
                >
                  View All IT Services →
                </Link>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-6 flex items-center">
              <Users className="w-5 h-5 text-green-400 mr-2" />
              Company
            </h4>
            <ul className="space-y-3">
              {companyLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.url}
                    className="text-gray-400 hover:text-green-400 transition-colors duration-300 text-sm group"
                  >
                    <span className="group-hover:translate-x-1 transition-transform inline-block">
                      {link.name}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-6 flex items-center">
              <Code className="w-5 h-5 text-orange-400 mr-2" />
              Support
            </h4>
            <ul className="space-y-3">
              {supportLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.url}
                    className="text-gray-400 hover:text-orange-400 transition-colors duration-300 text-sm group"
                  >
                    <span className="group-hover:translate-x-1 transition-transform inline-block">
                      {link.name}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Newsletter Signup */}
        <div className="bg-gradient-to-r from-slate-800/50 to-slate-700/50 rounded-2xl p-8 mb-12 border border-cyan-500/20">
          <div className="max-w-2xl mx-auto text-center">
            <h3 className="text-2xl font-bold text-white mb-4">
              Stay Updated with Our Latest Innovations
            </h3>
            <p className="text-gray-400 mb-6">
              Get insights on AI trends, IT solutions, and exclusive offers delivered to your inbox.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 bg-slate-800/50 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition-colors"
              />
              <button className="px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-lg font-medium hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 shadow-lg shadow-cyan-500/25 hover:shadow-cyan-500/40">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="border-t border-gray-700 pt-8">
          <div className="flex flex-col lg:flex-row justify-between items-center">
            <div className="text-gray-400 text-sm mb-4 lg:mb-0">
              © {currentYear} Zion Tech Group. All rights reserved.
            </div>
            <div className="flex flex-wrap gap-6">
              {legalLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.url}
                  className="text-gray-400 hover:text-cyan-400 transition-colors duration-300 text-sm"
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Animated Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-cyan-500/30 rounded-full animate-pulse" />
        <div className="absolute top-3/4 right-1/4 w-1 h-1 bg-purple-500/40 rounded-full animate-ping" />
        <div className="absolute bottom-1/4 left-1/3 w-1.5 h-1.5 bg-pink-500/30 rounded-full animate-pulse" />
      </div>
    </footer>
  );
});

Footer.displayName = 'Footer';

export default Footer;