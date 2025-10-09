import React from 'react';
import { Phone, Mail, MapPin, Brain, Cloud, Shield, Code, BarChart, Users, Zap, ArrowRight, Globe, Database, Settings, Target, MessageSquare, Eye, Cpu, Lock, BarChart3, FileText, Search, Bot, Calculator, TrendingUp, CheckCircle, Facebook, Twitter, Linkedin, Instagram, Youtube, Github, ExternalLink } from 'lucide-react';

const Footer: React.FC = () => {
  const microSaasServices = [
    { name: 'AI Project Manager Pro', url: '/ai-project-manager', description: 'Intelligent project planning', price: '$199/mo' },
    { name: 'AI Social Media Manager', url: '/ai-social-media-manager', description: 'Automated social media', price: '$149/mo' },
    { name: 'AI Analytics Dashboard', url: '/ai-analytics-dashboard', description: 'Data insights & analytics', price: '$299/mo' },
    { name: 'AI Email Marketing Suite', url: '/ai-email-marketing', description: 'Smart email campaigns', price: '$199/mo' },
    { name: 'AI Customer Support Bot', url: '/ai-customer-support-bot', description: '24/7 AI support', price: '$249/mo' },
    { name: 'AI Code Review Assistant', url: '/ai-code-generation', description: 'Automated code analysis', price: '$179/mo' },
    { name: 'AI Video Generator Pro', url: '/ai-video-generation', description: 'AI-powered video creation', price: '$399/mo' },
    { name: 'AI Voice Cloning Studio', url: '/ai-voice-cloning', description: 'Realistic voice synthesis', price: '$299/mo' },
    { name: 'AI Workflow Automation', url: '/ai-workflow-automation', description: 'Process automation', price: '$349/mo' },
    { name: 'AI Fashion Design Studio', url: '/ai-fashion-design', description: 'AI fashion design', price: '$279/mo' },
    { name: 'AI Music Composition Suite', url: '/ai-music-composition', description: 'AI-generated music', price: '$229/mo' },
    { name: 'AI Fitness Coach Pro', url: '/ai-fitness-coach', description: 'Personalized fitness plans', price: '$179/mo' }
  ];

  const aiServices = [
    { name: 'Machine Learning Solutions', url: '/machine-learning', description: 'Custom ML models', price: '$1,500/mo' },
    { name: 'Natural Language Processing', url: '/nlp', description: 'Text analysis & understanding', price: '$1,200/mo' },
    { name: 'Computer Vision', url: '/computer-vision', description: 'Image & video analysis', price: '$1,800/mo' },
    { name: 'AI Automation Suite', url: '/ai-automation', description: 'Process automation', price: '$1,400/mo' },
    { name: 'AI Data Intelligence', url: '/ai-data-analytics', description: 'Advanced analytics', price: '$1,100/mo' },
    { name: 'AI 3D & AR Solutions', url: '/ai-3d-generation', description: '3D content creation', price: '$1,600/mo' },
    { name: 'AI Healthcare Solutions', url: '/ai-healthcare', description: 'Medical AI applications', price: '$2,000/mo' },
    { name: 'AI Fintech Solutions', url: '/ai-fintech', description: 'Financial AI services', price: '$1,700/mo' },
    { name: 'AI Mobile App Development', url: '/ai-mobile-app-development', description: 'Smart mobile apps', price: '$1,800/mo' },
    { name: 'AI CRM Solutions', url: '/ai-crm', description: 'Intelligent customer management', price: '$1,400/mo' },
    { name: 'AI Email Assistant', url: '/ai-email-assistant', description: 'Smart email management', price: '$999/mo' },
    { name: 'AI Scheduler Pro', url: '/ai-scheduler', description: 'Intelligent scheduling', price: '$1,200/mo' }
  ];

  const itServices = [
    { name: 'Cloud Services', url: '/cloud-services', description: 'AWS/Azure/GCP setup', price: '$2,000/mo' },
    { name: 'Cybersecurity Solutions', url: '/cybersecurity', description: 'Advanced security solutions', price: '$2,500/mo' },
    { name: 'DevOps & CI/CD', url: '/devops', description: 'Automated workflows', price: '$1,800/mo' },
    { name: 'Database Services', url: '/database-services', description: 'Database optimization', price: '$1,600/mo' },
    { name: 'Network Infrastructure', url: '/network-infrastructure', description: 'Enterprise networking', price: '$2,200/mo' },
    { name: 'IT Support & Helpdesk', url: '/it-support', description: '24/7 technical support', price: '$1,500/mo' },
    { name: 'IT Consulting', url: '/it-consulting', description: 'Strategic IT guidance', price: '$200/hr' },
    { name: 'Cloud Migration', url: '/cloud-migration', description: 'Seamless cloud migration', price: '$3,000/project' },
    { name: 'Compliance & Governance', url: '/compliance', description: 'Regulatory compliance', price: '$1,800/mo' },
    { name: 'Developer Tools', url: '/developer-tools', description: 'Advanced dev tools', price: '$1,200/mo' },
    { name: 'Marketing Tools', url: '/marketing-tools', description: 'Marketing automation', price: '$1,400/mo' },
    { name: 'Productivity Solutions', url: '/productivity', description: 'Enterprise productivity', price: '$1,300/mo' }
  ];

  const specializedServices = [
    { name: 'Quantum Computing', url: '/quantum-computing', description: 'Next-gen computing', price: '$5,000/mo' },
    { name: 'Autonomous Systems', url: '/autonomous-systems', description: 'Self-operating systems', price: '$3,500/mo' },
    { name: 'Blockchain & Web3', url: '/blockchain', description: 'Decentralized solutions', price: '$2,800/mo' },
    { name: 'IoT & Edge Computing', url: '/iot-edge', description: 'Connected devices', price: '$2,200/mo' },
    { name: 'Business Intelligence', url: '/business-intelligence', description: 'Data-driven insights', price: '$2,000/mo' },
    { name: 'Robotics Solutions', url: '/robotics', description: 'Automated systems', price: '$4,000/mo' },
    { name: 'Enterprise Solutions', url: '/enterprise', description: 'Custom enterprise apps', price: 'Custom' },
    { name: 'Analytics Tools', url: '/analytics-tools', description: 'Advanced analytics', price: '$1,500/mo' },
    { name: 'Business Apps', url: '/business-apps', description: 'Custom business software', price: '$1,800/mo' },
    { name: 'Smart Analytics', url: '/smart-analytics', description: 'AI-powered insights', price: '$1,600/mo' }
  ];

  const quickLinks = [
    { name: 'About Us', url: '/about' },
    { name: 'Our Services', url: '/services' },
    { name: 'Pricing Plans', url: '/pricing' },
    { name: 'Case Studies', url: '/case-studies' },
    { name: 'Blog', url: '/blog' },
    { name: 'Contact Us', url: '/contact' },
    { name: 'Privacy Policy', url: '/privacy' },
    { name: 'Terms of Service', url: '/terms' }
  ];

  const socialLinks = [
    { name: 'Facebook', url: 'https://facebook.com/ziontechgroup', icon: Facebook },
    { name: 'Twitter', url: 'https://twitter.com/ziontechgroup', icon: Twitter },
    { name: 'LinkedIn', url: 'https://linkedin.com/company/ziontechgroup', icon: Linkedin },
    { name: 'Instagram', url: 'https://instagram.com/ziontechgroup', icon: Instagram },
    { name: 'YouTube', url: 'https://youtube.com/@ziontechgroup', icon: Youtube },
    { name: 'GitHub', url: 'https://github.com/ziontechgroup', icon: Github }
  ];

  return (
    <footer className="bg-slate-900 text-white relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900"></div>
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-cyan-400/10 via-transparent to-purple-500/10"></div>
      
      {/* Grid Pattern Overlay */}
      <div className="absolute inset-0 opacity-20">
        <div className="h-full w-full bg-[linear-gradient(rgba(0,255,255,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(0,255,255,0.1)_1px,transparent_1px)] bg-[size:50px_50px] animate-pulse"></div>
      </div>

      <div className="relative z-10">
        {/* Main Footer Content */}
        <div className="container mx-auto px-4 py-16">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-12">
            {/* Company Info */}
            <div className="lg:col-span-1">
              <div className="flex items-center space-x-3 mb-6">
                <div className="relative">
                  <div className="w-12 h-12 bg-gradient-to-br from-cyan-400 via-purple-500 to-pink-500 rounded-xl flex items-center justify-center shadow-lg">
                    <Brain className="w-7 h-7 text-white" />
                  </div>
                  <div className="absolute -inset-1 bg-gradient-to-r from-cyan-400 to-purple-500 rounded-xl blur opacity-30"></div>
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-white neon-text">Zion Tech Group</h3>
                  <p className="text-cyan-400 text-sm font-medium">AI & IT Solutions</p>
                </div>
              </div>
              
              <p className="text-gray-300 mb-6 leading-relaxed">
                Leading provider of cutting-edge AI and IT solutions. We transform businesses through innovative technology, 
                intelligent automation, and futuristic digital experiences.
              </p>

              {/* Contact Information */}
              <div className="space-y-4 mb-6">
                <a 
                  href="tel:+13024640950" 
                  className="flex items-center space-x-3 text-cyan-400 hover:text-white transition-colors group"
                >
                  <div className="w-10 h-10 bg-cyan-400/20 rounded-lg flex items-center justify-center group-hover:bg-cyan-400/30 transition-colors">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="font-medium">+1 302 464 0950</div>
                    <div className="text-sm text-gray-400">Call us now</div>
                  </div>
                </a>
                
                <a 
                  href="mailto:kleber@ziontechgroup.com" 
                  className="flex items-center space-x-3 text-purple-400 hover:text-white transition-colors group"
                >
                  <div className="w-10 h-10 bg-purple-400/20 rounded-lg flex items-center justify-center group-hover:bg-purple-400/30 transition-colors">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="font-medium">kleber@ziontechgroup.com</div>
                    <div className="text-sm text-gray-400">Email us</div>
                  </div>
                </a>
                
                <div className="flex items-center space-x-3 text-pink-400">
                  <div className="w-10 h-10 bg-pink-400/20 rounded-lg flex items-center justify-center">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="font-medium">364 E Main St STE 1008</div>
                    <div className="text-sm text-gray-400">Middletown DE 19709</div>
                  </div>
                </div>
              </div>

              {/* Social Links */}
              <div className="flex space-x-4">
                {socialLinks.map((social) => (
                  <a
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 bg-slate-800/50 rounded-lg flex items-center justify-center hover:bg-cyan-400/20 hover:text-cyan-400 transition-all duration-300 group"
                  >
                    <social.icon className="w-5 h-5" />
                  </a>
                ))}
              </div>
            </div>

            {/* Micro SAAS Services */}
            <div>
              <h4 className="text-cyan-400 font-bold text-lg mb-6 flex items-center">
                <Zap className="w-5 h-5 mr-2" />
                Micro SAAS
              </h4>
              <div className="space-y-3">
                {microSaasServices.slice(0, 8).map((service) => (
                  <a
                    key={service.name}
                    href={service.url}
                    className="block group hover:bg-slate-800/50 p-3 rounded-lg transition-all duration-200"
                  >
                    <div className="flex items-center justify-between mb-1">
                      <span className="text-gray-300 group-hover:text-white transition-colors font-medium">
                        {service.name}
                      </span>
                      <span className="text-green-400 text-sm font-medium">{service.price}</span>
                    </div>
                    <p className="text-sm text-gray-400 group-hover:text-gray-300 transition-colors">
                      {service.description}
                    </p>
                  </a>
                ))}
              </div>
              <a
                href="/services"
                className="inline-flex items-center text-cyan-400 hover:text-white transition-colors mt-4 group"
              >
                View All Services
                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </a>
            </div>

            {/* AI & IT Services */}
            <div>
              <h4 className="text-purple-400 font-bold text-lg mb-6 flex items-center">
                <Brain className="w-5 h-5 mr-2" />
                AI & IT Services
              </h4>
              <div className="space-y-3">
                {aiServices.slice(0, 6).map((service) => (
                  <a
                    key={service.name}
                    href={service.url}
                    className="block group hover:bg-slate-800/50 p-3 rounded-lg transition-all duration-200"
                  >
                    <div className="flex items-center justify-between mb-1">
                      <span className="text-gray-300 group-hover:text-white transition-colors font-medium">
                        {service.name}
                      </span>
                      <span className="text-green-400 text-sm font-medium">{service.price}</span>
                    </div>
                    <p className="text-sm text-gray-400 group-hover:text-gray-300 transition-colors">
                      {service.description}
                    </p>
                  </a>
                ))}
              </div>
              <div className="mt-4 space-y-2">
                <a
                  href="/ai-services"
                  className="inline-flex items-center text-purple-400 hover:text-white transition-colors group"
                >
                  AI Services
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </a>
                <br />
                <a
                  href="/it-services"
                  className="inline-flex items-center text-blue-400 hover:text-white transition-colors group"
                >
                  IT Services
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </a>
              </div>
            </div>

            {/* Specialized Services & Quick Links */}
            <div>
              <h4 className="text-pink-400 font-bold text-lg mb-6 flex items-center">
                <Settings className="w-5 h-5 mr-2" />
                Specialized
              </h4>
              <div className="space-y-3 mb-8">
                {specializedServices.slice(0, 6).map((service) => (
                  <a
                    key={service.name}
                    href={service.url}
                    className="block group hover:bg-slate-800/50 p-3 rounded-lg transition-all duration-200"
                  >
                    <div className="flex items-center justify-between mb-1">
                      <span className="text-gray-300 group-hover:text-white transition-colors font-medium">
                        {service.name}
                      </span>
                      <span className="text-green-400 text-sm font-medium">{service.price}</span>
                    </div>
                    <p className="text-sm text-gray-400 group-hover:text-gray-300 transition-colors">
                      {service.description}
                    </p>
                  </a>
                ))}
              </div>

              <h5 className="text-cyan-400 font-semibold mb-4">Quick Links</h5>
              <div className="grid grid-cols-2 gap-2">
                {quickLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.url}
                    className="text-gray-400 hover:text-cyan-400 transition-colors text-sm py-1 group"
                  >
                    {link.name}
                    <ExternalLink className="w-3 h-3 ml-1 inline opacity-0 group-hover:opacity-100 transition-opacity" />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Newsletter Signup */}
        <div className="border-t border-gray-700">
          <div className="container mx-auto px-4 py-8">
            <div className="bg-gradient-to-r from-cyan-400/10 to-purple-500/10 rounded-2xl p-8 text-center">
              <h3 className="text-2xl font-bold text-white mb-4">Stay Updated with Latest AI & IT Trends</h3>
              <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
                Get exclusive insights, industry updates, and early access to our newest AI-powered solutions.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                <input
                  type="email"
                  placeholder="Enter your email address"
                  className="flex-1 px-4 py-3 bg-slate-800/50 border border-cyan-400/30 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-400/50 focus:border-transparent"
                />
                <button className="px-6 py-3 bg-gradient-to-r from-cyan-400 to-purple-500 text-white rounded-lg hover:from-cyan-500 hover:to-purple-600 transition-all duration-300 font-medium">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-700">
          <div className="container mx-auto px-4 py-6">
            <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
              <div className="text-gray-400 text-sm">
                © 2024 Zion Tech Group. All rights reserved. | 
                <a href="/privacy" className="hover:text-cyan-400 transition-colors ml-1">Privacy Policy</a> | 
                <a href="/terms" className="hover:text-cyan-400 transition-colors ml-1">Terms of Service</a>
              </div>
              <div className="flex items-center space-x-6 text-sm text-gray-400">
                <span>Powered by AI & Innovation</span>
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                  <span>All Systems Operational</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
