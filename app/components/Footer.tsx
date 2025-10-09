'use client';
import React, { memo } from 'react';
import Link from 'next/link';
import { Phone, Mail, MapPin, Clock, Award, Shield, Zap, ArrowRight, Brain, Cloud, Code, BarChart, Users, Globe, Facebook, Twitter, Linkedin, Instagram, Youtube, Github, MessageSquare, Star, TrendingUp, CheckCircle } from 'lucide-react';

const Footer: React.FC = memo(() => {
  const currentYear = new Date().getFullYear();
  
  const aiServices = [
    { name: 'AI Services', url: '/ai-services', description: 'Comprehensive AI solutions' },
    { name: 'AI Marketing', url: '/ai-marketing', description: 'AI-powered marketing automation' },
    { name: 'AI Healthcare', url: '/ai-healthcare', description: 'Medical AI solutions' },
    { name: 'AI Fintech', url: '/ai-fintech', description: 'Financial AI applications' },
    { name: 'AI Content Generation', url: '/ai-content-generation', description: 'AI content creation' },
    { name: 'AI Data Analytics', url: '/ai-data-analytics', description: 'Advanced data insights' },
    { name: 'AI Cybersecurity', url: '/ai-cybersecurity', description: 'AI security solutions' },
    { name: 'AI Mobile App Development', url: '/ai-mobile-app-development', description: 'Mobile AI applications' },
    { name: 'AI E-commerce Solutions', url: '/ai-ecommerce-solutions', description: 'E-commerce AI platforms' },
    { name: 'AI Lead Generation', url: '/ai-lead-generation', description: 'AI-powered lead generation' },
    { name: 'AI Document Processing', url: '/ai-document-processing', description: 'Intelligent document processing' },
    { name: 'AI Video Generation', url: '/ai-video-generation', description: 'AI video creation' },
    { name: 'AI Voice Cloning', url: '/ai-voice-cloning', description: 'AI voice synthesis' },
    { name: 'AI Writing Assistant', url: '/ai-writing-assistant', description: 'AI writing tools' },
    { name: 'AI Scheduler', url: '/ai-scheduler', description: 'Smart scheduling' },
    { name: 'AI Chatbot Builder', url: '/ai-chatbot-builder', description: 'No-code chatbot creation' },
    { name: 'AI Analytics Dashboard', url: '/ai-analytics-dashboard', description: 'Real-time business intelligence' },
    { name: 'AI 3D Generation', url: '/ai-3d-generation', description: 'AI 3D content creation' },
    { name: 'AI Code Generation', url: '/ai-code-generation', description: 'AI-powered coding' },
    { name: 'AI Fashion Design', url: '/ai-fashion-design', description: 'AI fashion solutions' },
    { name: 'AI Music Composition', url: '/ai-music-composition', description: 'AI music creation' },
    { name: 'AI CRM', url: '/ai-crm', description: 'AI customer management' },
    { name: 'AI Email Assistant', url: '/ai-email-assistant', description: 'Smart email tools' }
  ];

  const itServices = [
    { name: 'IT Services', url: '/it-services', description: 'Comprehensive IT support' },
    { name: 'IT Infrastructure', url: '/it-infrastructure', description: 'Enterprise infrastructure' },
    { name: 'Cybersecurity', url: '/cybersecurity', description: 'Security solutions' },
    { name: 'Cloud Services', url: '/cloud-services', description: 'Cloud solutions' },
    { name: 'DevOps', url: '/devops', description: 'Development operations' },
    { name: 'Database', url: '/database', description: 'Database management' },
    { name: 'Networking', url: '/networking', description: 'Network infrastructure' },
    { name: 'Compliance', url: '/compliance', description: 'Regulatory compliance' },
    { name: 'Security', url: '/security', description: 'Security solutions' }
  ];

  const microSaasServices = [
    { name: 'Micro SAAS Solutions', url: '/micro-saas', description: '50+ AI-powered tools' },
    { name: 'AI Writing Assistant', url: '/ai-writing-assistant', description: 'AI writing tool' },
    { name: 'Smart Analytics', url: '/smart-analytics', description: 'Business analytics' },
    { name: 'AI Scheduler', url: '/ai-scheduler', description: 'Smart scheduling' },
    { name: 'Expense Tracker', url: '/expense-tracker', description: 'Expense management' },
    { name: 'Task Manager Pro', url: '/task-manager-pro', description: 'Task management' },
    { name: 'AI Lead Generation Engine', url: '/ai-lead-generation', description: 'AI lead generation' },
    { name: 'AI Financial Analytics', url: '/ai-financial-analytics', description: 'Financial AI tools' },
    { name: 'AI HR Management', url: '/ai-hr-management', description: 'HR AI solutions' },
    { name: 'AI Project Management', url: '/ai-project-management', description: 'Project AI tools' },
    { name: 'AI Inventory Management', url: '/ai-inventory-management', description: 'Inventory AI' },
    { name: 'AI Social Media Manager', url: '/ai-social-media-manager', description: 'Social media AI' },
    { name: 'AI Video Production', url: '/ai-video-production', description: 'Video AI tools' },
    { name: 'AI Legal Assistant', url: '/ai-legal-assistant', description: 'Legal AI tools' },
    { name: 'AI Healthcare Analytics', url: '/ai-healthcare-analytics', description: 'Healthcare AI' },
    { name: 'AI Real Estate Analyzer', url: '/ai-real-estate-analyzer', description: 'Real estate AI' }
  ];

  const emergingTech = [
    { name: 'Quantum Computing', url: '/quantum-computing', description: 'Quantum solutions' },
    { name: 'Robotics', url: '/robotics', description: 'Intelligent robotics' },
    { name: 'IoT & Edge Computing', url: '/iot-edge-computing', description: 'Connected devices' },
    { name: 'Blockchain & Web3', url: '/blockchain-web3', description: 'Decentralized solutions' },
    { name: 'Business Intelligence', url: '/business-intelligence', description: 'Data insights' },
    { name: 'Autonomous Systems', url: '/autonomous-systems', description: 'Self-managing systems' }
  ];

  const socialLinks = [
    { name: 'LinkedIn', url: 'https://linkedin.com/company/ziontechgroup', icon: Linkedin },
    { name: 'Twitter', url: 'https://twitter.com/ziontechgroup', icon: Twitter },
    { name: 'Facebook', url: 'https://facebook.com/ziontechgroup', icon: Facebook },
    { name: 'Instagram', url: 'https://instagram.com/ziontechgroup', icon: Instagram },
    { name: 'YouTube', url: 'https://youtube.com/@ziontechgroup', icon: Youtube },
    { name: 'GitHub', url: 'https://github.com/ziontechgroup', icon: Github }
  ];

  const contactInfo = {
    phone: '+1 (302) 464-0950',
    email: 'kleber@ziontechgroup.com',
    address: '364 E Main St STE 1008, Middletown, DE 19709',
    hours: 'Mon-Fri: 9AM-6PM EST'
  };

  const achievements = [
    { icon: Award, text: '50+ Successful Projects' },
    { icon: Users, text: '100+ Happy Clients' },
    { icon: TrendingUp, text: '300% Average ROI' },
    { icon: Shield, text: '99.9% Uptime Guarantee' }
  ];

  return (
    <footer className="bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 cyber-grid neural-network-bg">
      {/* Main Footer Content */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <div className="flex items-center space-x-2 mb-6">
              <div className="w-8 h-8 bg-gradient-to-r from-cyan-400 to-purple-500 rounded-lg flex items-center justify-center quantum-float">
                <Brain className="w-5 h-5 text-white" />
              </div>
              <span className="text-2xl font-bold text-white neon-text">Zion Tech Group</span>
            </div>
            <p className="text-gray-300 mb-6 leading-relaxed">
              Leading provider of AI-powered enterprise solutions, quantum computing, autonomous systems, and digital transformation services.
            </p>
            
            {/* Achievements */}
            <div className="space-y-3 mb-6">
              {achievements.map((achievement, index) => (
                <div key={index} className="flex items-center space-x-2">
                  <achievement.icon className="w-4 h-4 text-cyan-400" />
                  <span className="text-sm text-gray-300">{achievement.text}</span>
                </div>
              ))}
            </div>

            {/* Social Links */}
            <div className="flex space-x-4">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-slate-800 hover:bg-cyan-500 rounded-lg flex items-center justify-center transition-colors duration-300 cyber-glow"
                >
                  <social.icon className="w-5 h-5 text-gray-300 hover:text-white" />
                </a>
              ))}
            </div>
          </div>

          {/* AI Services */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4 electric-text">AI Services</h3>
            <ul className="space-y-2">
              {aiServices.slice(0, 8).map((service) => (
                <li key={service.name}>
                  <Link
                    href={service.url}
                    className="text-gray-300 hover:text-cyan-400 transition-colors duration-300 text-sm"
                  >
                    {service.name}
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  href="/ai-services"
                  className="text-cyan-400 hover:text-cyan-300 transition-colors duration-300 text-sm font-medium"
                >
                  View All AI Services →
                </Link>
              </li>
            </ul>
          </div>

          {/* IT Services */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4 electric-text">IT Services</h3>
            <ul className="space-y-2">
              {itServices.slice(0, 8).map((service) => (
                <li key={service.name}>
                  <Link
                    href={service.url}
                    className="text-gray-300 hover:text-cyan-400 transition-colors duration-300 text-sm"
                  >
                    {service.name}
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  href="/it-services"
                  className="text-cyan-400 hover:text-cyan-300 transition-colors duration-300 text-sm font-medium"
                >
                  View All IT Services →
                </Link>
              </li>
            </ul>
          </div>

          {/* Micro SAAS & Emerging Tech */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4 electric-text">Micro SAAS</h3>
            <ul className="space-y-2 mb-6">
              {microSaasServices.slice(0, 6).map((service) => (
                <li key={service.name}>
                  <Link
                    href={service.url}
                    className="text-gray-300 hover:text-cyan-400 transition-colors duration-300 text-sm"
                  >
                    {service.name}
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  href="/micro-saas"
                  className="text-cyan-400 hover:text-cyan-300 transition-colors duration-300 text-sm font-medium"
                >
                  View All Tools →
                </Link>
              </li>
            </ul>

            <h3 className="text-lg font-semibold text-white mb-4 electric-text">Emerging Tech</h3>
            <ul className="space-y-2">
              {emergingTech.map((tech) => (
                <li key={tech.name}>
                  <Link
                    href={tech.url}
                    className="text-gray-300 hover:text-cyan-400 transition-colors duration-300 text-sm"
                  >
                    {tech.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Contact Information */}
        <div className="border-t border-cyan-500/30 pt-8 mb-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-to-r from-green-500 to-teal-600 rounded-lg flex items-center justify-center">
                <Phone className="w-5 h-5 text-white" />
              </div>
              <div>
                <p className="text-gray-300 text-sm">Phone</p>
                <a href={`tel:${contactInfo.phone}`} className="text-white font-semibold hover:text-cyan-400 transition-colors duration-300">
                  {contactInfo.phone}
                </a>
              </div>
            </div>

            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
                <Mail className="w-5 h-5 text-white" />
              </div>
              <div>
                <p className="text-gray-300 text-sm">Email</p>
                <a href={`mailto:${contactInfo.email}`} className="text-white font-semibold hover:text-cyan-400 transition-colors duration-300">
                  {contactInfo.email}
                </a>
              </div>
            </div>

            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-to-r from-orange-500 to-red-600 rounded-lg flex items-center justify-center">
                <MapPin className="w-5 h-5 text-white" />
              </div>
              <div>
                <p className="text-gray-300 text-sm">Address</p>
                <p className="text-white font-semibold">{contactInfo.address}</p>
              </div>
            </div>

            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-to-r from-purple-500 to-pink-600 rounded-lg flex items-center justify-center">
                <Clock className="w-5 h-5 text-white" />
              </div>
              <div>
                <p className="text-gray-300 text-sm">Business Hours</p>
                <p className="text-white font-semibold">{contactInfo.hours}</p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-cyan-500/30 pt-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-gray-300 text-sm">
              © {currentYear} Zion Tech Group. All rights reserved.
            </div>
            <div className="flex space-x-6">
              <Link href="/privacy" className="text-gray-300 hover:text-cyan-400 transition-colors duration-300 text-sm">
                Privacy Policy
              </Link>
              <Link href="/terms" className="text-gray-300 hover:text-cyan-400 transition-colors duration-300 text-sm">
                Terms of Service
              </Link>
              <Link href="/cookies" className="text-gray-300 hover:text-cyan-400 transition-colors duration-300 text-sm">
                Cookie Policy
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
});

Footer.displayName = 'Footer';

export default Footer;
