'use client';
import React, { memo } from 'react';
import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, Clock, Zap, Brain, Cloud, Code, Users, ArrowRight, Facebook, Twitter, Linkedin, Github, Youtube, Instagram } from 'lucide-react';

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
    { name: 'AI Predictive Analytics', url: '/ai-predictive-analytics', description: 'Business forecasting' }
  ];

  const itServices = [
    { name: 'Cloud Infrastructure', url: '/cloud-infrastructure', description: 'AWS, Azure, GCP' },
    { name: 'DevOps & CI/CD', url: '/devops-cicd', description: 'Automation pipelines' },
    { name: 'Cybersecurity Solutions', url: '/cybersecurity-solutions', description: 'Security solutions' },
    { name: 'Web Development', url: '/web-development', description: 'Modern web apps' },
    { name: 'Mobile Development', url: '/mobile-development', description: 'iOS & Android' },
    { name: 'API Development', url: '/api-development', description: 'API solutions' },
    { name: 'Database Management', url: '/database-management', description: 'Data management' },
    { name: 'IT Support', url: '/it-support', description: '24/7 support' },
    { name: 'Custom Software', url: '/custom-software', description: 'Tailored solutions' },
    { name: 'Digital Transformation', url: '/digital-transformation', description: 'Business transformation' }
  ];

  const microSaasServices = [
    { name: 'Zion Analytics Pro', url: '/zion-analytics-pro', description: 'Business intelligence' },
    { name: 'Zion Chat AI', url: '/zion-chat-ai', description: 'AI customer support' },
    { name: 'Zion Security Shield', url: '/zion-security-shield', description: 'Cybersecurity monitoring' },
    { name: 'Zion Cloud Vault', url: '/zion-cloud-vault', description: 'Cloud backup & recovery' },
    { name: 'Zion Content Studio', url: '/zion-content-studio', description: 'AI content creation' },
    { name: 'Zion CRM Intelligence', url: '/zion-crm-intelligence', description: 'AI-enhanced CRM' },
    { name: 'Zion Data Sync', url: '/zion-data-sync', description: 'Data integration' },
    { name: 'Zion Lead Magnet', url: '/zion-lead-magnet', description: 'Lead generation' },
    { name: 'Zion Project Master', url: '/zion-project-master', description: 'Project management AI' },
    { name: 'Zion Email Automation', url: '/zion-email-automation', description: 'Email marketing AI' }
  ];

  const companyLinks = [
    { name: 'About Us', url: '/about' },
    { name: 'Our Team', url: '/team' },
    { name: 'Careers', url: '/careers' },
    { name: 'Case Studies', url: '/case-studies' },
    { name: 'Blog', url: '/blog' },
    { name: 'Partners', url: '/partners' },
    { name: 'Support', url: '/support' },
    { name: 'FAQ', url: '/faq' },
    { name: 'Contact', url: '/contact' }
  ];

  const legalLinks = [
    { name: 'Privacy Policy', url: '/privacy' },
    { name: 'Terms of Service', url: '/terms' },
    { name: 'Cookie Policy', url: '/cookies' },
    { name: 'Sitemap', url: '/sitemap' }
  ];

  const socialLinks = [
    { name: 'Facebook', url: 'https://facebook.com/ziontechgroup', icon: Facebook },
    { name: 'Twitter', url: 'https://twitter.com/ziontechgroup', icon: Twitter },
    { name: 'LinkedIn', url: 'https://linkedin.com/company/ziontechgroup', icon: Linkedin },
    { name: 'GitHub', url: 'https://github.com/ziontechgroup', icon: Github },
    { name: 'YouTube', url: 'https://youtube.com/ziontechgroup', icon: Youtube },
    { name: 'Instagram', url: 'https://instagram.com/ziontechgroup', icon: Instagram }
  ];

  return (
    <footer className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white relative overflow-hidden">
      {/* Futuristic Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/5 via-purple-500/5 to-pink-500/5"></div>
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-cyan-500/10 via-transparent to-transparent"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-2 space-y-6">
            <div className="flex items-center space-x-3 group">
              <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 via-purple-600 to-pink-600 rounded-xl flex items-center justify-center group-hover:scale-110 transition-all duration-300 shadow-lg shadow-cyan-500/25">
                <Brain className="w-7 h-7 text-white" />
              </div>
              <div className="flex flex-col">
                <span className="text-2xl font-bold neon-text-enhanced group-hover:glow">Zion Tech Group</span>
                <span className="text-sm text-cyan-400 font-medium tracking-wider">AI & IT SOLUTIONS</span>
              </div>
            </div>
            <p className="text-gray-300 text-sm leading-relaxed">
              Leading provider of AI and IT solutions for modern businesses. 
              We help companies transform their operations with cutting-edge technology, 
              delivering measurable results and exceptional value.
            </p>
            <div className="space-y-4">
              <div className="flex items-center text-sm text-gray-300 group">
                <div className="w-8 h-8 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-lg flex items-center justify-center mr-3 group-hover:scale-110 transition-transform">
                  <Phone className="w-4 h-4 text-white" />
                </div>
                <span className="font-medium">(302) 464-0950</span>
              </div>
              <div className="flex items-center text-sm text-gray-300 group">
                <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-pink-600 rounded-lg flex items-center justify-center mr-3 group-hover:scale-110 transition-transform">
                  <Mail className="w-4 h-4 text-white" />
                </div>
                <span className="font-medium">kleber@ziontechgroup.com</span>
              </div>
              <div className="flex items-center text-sm text-gray-300 group">
                <div className="w-8 h-8 bg-gradient-to-r from-green-500 to-emerald-600 rounded-lg flex items-center justify-center mr-3 group-hover:scale-110 transition-transform">
                  <MapPin className="w-4 h-4 text-white" />
                </div>
                <span className="font-medium">364 E Main St STE 1008, Middletown DE 19709</span>
              </div>
              <div className="flex items-center text-sm text-gray-300 group">
                <div className="w-8 h-8 bg-gradient-to-r from-orange-500 to-red-600 rounded-lg flex items-center justify-center mr-3 group-hover:scale-110 transition-transform">
                  <Clock className="w-4 h-4 text-white" />
                </div>
                <span className="font-medium">Mon-Fri: 9AM-6PM EST | 24/7 Emergency Support</span>
              </div>
            </div>
          </div>

          {/* AI Services */}
          <div className="cyber-card-enhanced p-6 rounded-2xl">
            <h3 className="text-lg font-bold mb-6 text-cyan-400 flex items-center neon-text-enhanced">
              <div className="w-8 h-8 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-lg flex items-center justify-center mr-3">
                <Brain className="w-5 h-5 text-white" />
              </div>
              AI Services
            </h3>
            <ul className="space-y-3">
              {aiServices.map((service) => (
                <li key={service.name}>
                  <Link
                    to={service.url}
                    className="text-gray-300 hover:text-cyan-400 transition-all duration-300 text-sm group flex items-center">
                    <div className="w-1.5 h-1.5 bg-cyan-400 rounded-full mr-3 group-hover:scale-150 transition-transform"></div>
                    {service.name}
                  </Link>
                </li>
              ))}
              <li className="pt-2 border-t border-cyan-500/20">
                <Link 
                  to="/ai-services"
                  className="text-cyan-400 hover:text-cyan-300 transition-all duration-300 text-sm font-semibold flex items-center group">
                  View All AI Services
                  <Zap className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </Link>
              </li>
            </ul>
          </div>

          {/* IT Services */}
          <div className="cyber-card-enhanced p-6 rounded-2xl">
            <h3 className="text-lg font-bold mb-6 text-purple-400 flex items-center neon-text-enhanced">
              <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-pink-600 rounded-lg flex items-center justify-center mr-3">
                <Cloud className="w-5 h-5 text-white" />
              </div>
              IT Services
            </h3>
            <ul className="space-y-3">
              {itServices.map((service) => (
                <li key={service.name}>
                  <Link
                    to={service.url}
                    className="text-gray-300 hover:text-purple-400 transition-all duration-300 text-sm group flex items-center">
                    <div className="w-1.5 h-1.5 bg-purple-400 rounded-full mr-3 group-hover:scale-150 transition-transform"></div>
                    {service.name}
                  </Link>
                </li>
              ))}
              <li className="pt-2 border-t border-purple-500/20">
                <Link 
                  to="/it-services"
                  className="text-purple-400 hover:text-purple-300 transition-all duration-300 text-sm font-semibold flex items-center group">
                  View All IT Services
                  <Zap className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </Link>
              </li>
            </ul>
          </div>
          
          {/* Micro SAAS */}
          <div className="cyber-card-enhanced p-6 rounded-2xl">
            <h3 className="text-lg font-bold mb-6 text-green-400 flex items-center neon-text-enhanced">
              <div className="w-8 h-8 bg-gradient-to-r from-green-500 to-emerald-600 rounded-lg flex items-center justify-center mr-3">
                <Code className="w-5 h-5 text-white" />
              </div>
              Micro SAAS
            </h3>
            <ul className="space-y-3">
              {microSaasServices.map((service) => (
                <li key={service.name}>
                  <Link
                    to={service.url}
                    className="text-gray-300 hover:text-green-400 transition-all duration-300 text-sm group flex items-center">
                    <div className="w-1.5 h-1.5 bg-green-400 rounded-full mr-3 group-hover:scale-150 transition-transform"></div>
                    {service.name}
                  </Link>
                </li>
              ))}
              <li className="pt-2 border-t border-green-500/20">
                <Link 
                  to="/micro-saas"
                  className="text-green-400 hover:text-green-300 transition-all duration-300 text-sm font-semibold flex items-center group">
                  View All Micro SAAS
                  <Zap className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-16 pt-8 border-t border-cyan-500/20">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="flex items-center space-x-2 text-gray-400">
              <div className="w-6 h-6 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-lg flex items-center justify-center">
                <Brain className="w-4 h-4 text-white" />
              </div>
              © {currentYear} Zion Tech Group. All rights reserved.
            </div>
            <div className="flex flex-wrap justify-center md:justify-end space-x-6 gap-y-2">
              {legalLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.url}
                  className="text-sm text-gray-400 hover:text-cyan-400 transition-all duration-300 hover:scale-105">
                  {link.name}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
});

Footer.displayName = 'Footer';
export default Footer;