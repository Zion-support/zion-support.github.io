'use client';
import React from 'react';
import { Phone, Mail, MapPin, Brain, Facebook, Twitter, Linkedin, Instagram, Github, Youtube, ArrowRight, Star, CheckCircle, Users, Award, Sparkles, Cpu, BarChart, MessageSquare, PieChart, Mail as MailIcon, Bot, Code, Video, Mic, Zap, TrendingUp, FileText, DollarSign, Eye, Cube, Shield, Search, Target, Briefcase, Cloud, Database, Globe, Smartphone, Wrench, Lock, Home, Settings } from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: 'Home', href: '/' },
    { name: 'Services', href: '/services' },
    { name: 'AI Solutions', href: '/ai-solutions' },
    { name: 'IT Services', href: '/it-services' },
    { name: 'Contact', href: '/contact' },
  ];

  const microSAASServices = [
    { name: 'AI Project Manager', href: '/ai-project-manager', icon: BarChart, popular: true, price: '$99/mo' },
    { name: 'AI Social Media Manager', href: '/ai-social-media-manager', icon: MessageSquare, popular: true, price: '$79/mo' },
    { name: 'AI Analytics Dashboard', href: '/ai-analytics', icon: PieChart, popular: true, price: '$149/mo' },
    { name: 'AI Email Marketing', href: '/ai-email-marketing', icon: MailIcon, popular: true, price: '$99/mo' },
    { name: 'AI Customer Support Bot', href: '/ai-customer-support-bot', icon: Bot, popular: true, price: '$149/mo' },
    { name: 'AI Code Review Assistant', href: '/ai-code-generation', icon: Code, popular: false, price: '$89/mo' },
    { name: 'AI Video Generator', href: '/ai-video-generation', icon: Video, popular: true, price: '$199/mo' },
    { name: 'AI Voice Cloning', href: '/ai-voice-cloning', icon: Mic, popular: false, price: '$129/mo' },
    { name: 'AI Workflow Automation', href: '/ai-workflow-automation', icon: Zap, popular: true, price: '$179/mo' },
    { name: 'AI Sales Automation', href: '/ai-sales-automation', icon: TrendingUp, popular: true, price: '$199/mo' },
    { name: 'AI Content Writer', href: '/ai-content-writer', icon: FileText, popular: true, price: '$79/mo' },
    { name: 'AI Financial Advisor', href: '/ai-financial-advisor', icon: DollarSign, popular: false, price: '$299/mo' },
  ];

  const aiServices = [
    { name: 'Machine Learning', href: '/ai-ml', icon: Brain, price: '$1,500/mo' },
    { name: 'Natural Language Processing', href: '/ai-nlp', icon: MessageSquare, price: '$1,200/mo' },
    { name: 'Computer Vision', href: '/ai-vision', icon: Eye, price: '$1,800/mo' },
    { name: 'AI Automation', href: '/ai-automation', icon: Zap, price: '$1,400/mo' },
    { name: 'AI Data Visualization', href: '/ai-data-visualization', icon: BarChart, price: '$1,100/mo' },
    { name: 'AI 3D Generation', href: '/ai-3d-generation', icon: Cube, price: '$1,600/mo' },
    { name: 'AI Voice Synthesis', href: '/ai-voice-synthesis', icon: Mic, price: '$1,300/mo' },
    { name: 'AI Fraud Detection', href: '/ai-fraud-detection', icon: Shield, price: '$1,900/mo' },
  ];

  const itServices = [
    { name: 'Cloud Migration', href: '/cloud-migration', icon: Cloud, price: '$1,299/mo' },
    { name: 'IT Consulting', href: '/it-consulting', icon: Briefcase, price: '$1,000/mo' },
    { name: 'Cybersecurity', href: '/cybersecurity', icon: Shield, price: '$1,599/mo' },
    { name: 'DevOps & CI/CD', href: '/devops', icon: Settings, price: '$1,199/mo' },
    { name: 'Database Services', href: '/database', icon: Database, price: '$899/mo' },
    { name: 'Mobile App Development', href: '/mobile-development', icon: Smartphone, price: '$1,500/mo' },
    { name: 'Web Development', href: '/web-development', icon: Code, price: '$1,200/mo' },
    { name: 'Blockchain Solutions', href: '/blockchain', icon: Lock, price: '$2,000/mo' },
  ];

  const socialLinks = [
    { name: 'LinkedIn', href: 'https://linkedin.com/company/zion-tech-group', icon: Linkedin, color: 'hover:text-blue-400' },
    { name: 'Twitter', href: 'https://twitter.com/ziontechgroup', icon: Twitter, color: 'hover:text-cyan-400' },
    { name: 'Facebook', href: 'https://facebook.com/ziontechgroup', icon: Facebook, color: 'hover:text-blue-500' },
    { name: 'Instagram', href: 'https://instagram.com/ziontechgroup', icon: Instagram, color: 'hover:text-pink-400' },
    { name: 'YouTube', href: 'https://youtube.com/@ziontechgroup', icon: Youtube, color: 'hover:text-red-400' },
    { name: 'GitHub', href: 'https://github.com/ziontechgroup', icon: Github, color: 'hover:text-gray-400' },
  ];

  const handlePhoneClick = () => {
    if (typeof window !== 'undefined' && 'gtag' in window) {
      (window as any).gtag('event', 'phone_click', {
        event_category: 'engagement',
        event_label: 'footer_phone_number'
      });
    }
  };

  return (
    <footer className="relative bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 border-t border-cyan-500/20 overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%239C92AC" fill-opacity="0.05"%3E%3Ccircle cx="30" cy="30" r="1"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-30"></div>
      
      {/* Animated Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-10 left-10 w-64 h-64 bg-cyan-500/5 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute top-20 right-20 w-80 h-80 bg-purple-500/5 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute bottom-10 left-1/3 w-72 h-72 bg-pink-500/5 rounded-full blur-3xl animate-pulse delay-2000"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 mb-12">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <div className="flex items-center space-x-2 mb-6">
              <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-xl flex items-center justify-center">
                <Brain className="w-7 h-7 text-white" />
              </div>
              <div>
                <h3 className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                  Zion Tech Group
                </h3>
                <p className="text-sm text-gray-400">AI & IT Solutions</p>
              </div>
            </div>
            
            <p className="text-gray-300 mb-6 leading-relaxed">
              Leading provider of AI-powered enterprise solutions and digital transformation services. 
              Transform your business with cutting-edge technology.
            </p>

            {/* Contact Info */}
            <div className="space-y-3">
              <a
                href="tel:+13024640950"
                onClick={handlePhoneClick}
                className="flex items-center text-cyan-400 hover:text-cyan-300 transition-colors duration-300 group"
              >
                <Phone className="w-5 h-5 mr-3 group-hover:scale-110 transition-transform" />
                <span className="font-semibold">+1 (302) 464-0950</span>
              </a>
              <a
                href="mailto:kleber@ziontechgroup.com"
                className="flex items-center text-purple-400 hover:text-purple-300 transition-colors duration-300 group"
              >
                <Mail className="w-5 h-5 mr-3 group-hover:scale-110 transition-transform" />
                <span className="font-semibold">kleber@ziontechgroup.com</span>
              </a>
              <div className="flex items-start text-gray-300 group">
                <MapPin className="w-5 h-5 mr-3 mt-0.5 flex-shrink-0 group-hover:scale-110 transition-transform" />
                <div>
                  <div className="font-semibold">364 E Main St STE 1008</div>
                  <div>Middletown DE 19709</div>
                </div>
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
                  className={`text-gray-400 ${social.color} transition-all duration-300 transform hover:scale-110`}
                  aria-label={social.name}
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Micro SAAS Services */}
          <div className="lg:col-span-1">
            <h3 className="text-lg font-semibold text-white mb-6 flex items-center">
              <Sparkles className="w-5 h-5 mr-2 text-cyan-400" />
              Micro SAAS Services
            </h3>
            <div className="space-y-3">
              {microSAASServices.slice(0, 8).map((service) => (
                <a
                  key={service.name}
                  href={service.href}
                  className="flex items-center justify-between group hover:bg-cyan-500/10 p-2 rounded-lg transition-all duration-300"
                >
                  <div className="flex items-center">
                    <service.icon className="w-4 h-4 text-cyan-400 mr-3 group-hover:scale-110 transition-transform" />
                    <span className="text-gray-300 group-hover:text-white text-sm">{service.name}</span>
                    {service.popular && (
                      <Star className="w-3 h-3 text-yellow-400 ml-2" />
                    )}
                  </div>
                  <span className="text-cyan-400 text-xs font-semibold">{service.price}</span>
                </a>
              ))}
              <a
                href="/services"
                className="flex items-center text-cyan-400 hover:text-cyan-300 text-sm font-semibold mt-4 group"
              >
                View All Services
                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
          </div>

          {/* AI Services */}
          <div className="lg:col-span-1">
            <h3 className="text-lg font-semibold text-white mb-6 flex items-center">
              <Brain className="w-5 h-5 mr-2 text-purple-400" />
              AI Services
            </h3>
            <div className="space-y-3">
              {aiServices.slice(0, 6).map((service) => (
                <a
                  key={service.name}
                  href={service.href}
                  className="flex items-center justify-between group hover:bg-purple-500/10 p-2 rounded-lg transition-all duration-300"
                >
                  <div className="flex items-center">
                    <service.icon className="w-4 h-4 text-purple-400 mr-3 group-hover:scale-110 transition-transform" />
                    <span className="text-gray-300 group-hover:text-white text-sm">{service.name}</span>
                  </div>
                  <span className="text-purple-400 text-xs font-semibold">{service.price}</span>
                </a>
              ))}
              <a
                href="/ai-solutions"
                className="flex items-center text-purple-400 hover:text-purple-300 text-sm font-semibold mt-4 group"
              >
                View All AI Services
                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
          </div>

          {/* IT Services */}
          <div className="lg:col-span-1">
            <h3 className="text-lg font-semibold text-white mb-6 flex items-center">
              <Cpu className="w-5 h-5 mr-2 text-blue-400" />
              IT Services
            </h3>
            <div className="space-y-3">
              {itServices.slice(0, 6).map((service) => (
                <a
                  key={service.name}
                  href={service.href}
                  className="flex items-center justify-between group hover:bg-blue-500/10 p-2 rounded-lg transition-all duration-300"
                >
                  <div className="flex items-center">
                    <service.icon className="w-4 h-4 text-blue-400 mr-3 group-hover:scale-110 transition-transform" />
                    <span className="text-gray-300 group-hover:text-white text-sm">{service.name}</span>
                  </div>
                  <span className="text-blue-400 text-xs font-semibold">{service.price}</span>
                </a>
              ))}
              <a
                href="/it-services"
                className="flex items-center text-blue-400 hover:text-blue-300 text-sm font-semibold mt-4 group"
              >
                View All IT Services
                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
          </div>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12 py-8 border-t border-cyan-500/20">
          <div className="text-center">
            <div className="text-3xl font-bold text-cyan-400 mb-2">300%</div>
            <div className="text-gray-300 text-sm">Average ROI</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-purple-400 mb-2">70%</div>
            <div className="text-gray-300 text-sm">Cost Reduction</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-pink-400 mb-2">90%</div>
            <div className="text-gray-300 text-sm">Efficiency Gains</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-green-400 mb-2">24/7</div>
            <div className="text-gray-300 text-sm">Support Available</div>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="pt-8 border-t border-cyan-500/20">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-gray-400 text-sm mb-4 md:mb-0">
              © {currentYear} Zion Tech Group. All rights reserved. | 
              <a href="/privacy" className="hover:text-cyan-400 transition-colors ml-1">Privacy Policy</a> | 
              <a href="/terms" className="hover:text-cyan-400 transition-colors ml-1">Terms of Service</a>
            </div>
            
            <div className="flex items-center space-x-6">
              <div className="flex items-center text-sm text-gray-400">
                <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                <span>SSL Secured</span>
              </div>
              <div className="flex items-center text-sm text-gray-400">
                <Shield className="w-4 h-4 text-blue-400 mr-2" />
                <span>GDPR Compliant</span>
              </div>
              <div className="flex items-center text-sm text-gray-400">
                <Award className="w-4 h-4 text-yellow-400 mr-2" />
                <span>ISO Certified</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;