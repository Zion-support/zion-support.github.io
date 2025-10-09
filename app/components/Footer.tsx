'use client';
import React, { memo } from 'react';
import Link from 'next/link';
import { Phone, Mail, MapPin, Clock, Award, Shield, Zap, ArrowRight, Brain, Cloud, Code, BarChart, Users, Globe, Facebook, Twitter, Linkedin, Instagram, Youtube, Github, MessageSquare, Star, TrendingUp, CheckCircle, Home, Settings, DollarSign, FileText, Briefcase, Building, Factory, Car, Plane, Ship, Train, Heart, Stethoscope, GraduationCap, Wrench, Hammer, Paintbrush, Scissors, BookOpen, Calculator, Calendar, Compass, Map, Navigation, PieChart, Activity, Target, Lock, Database, Smartphone, Settings as SettingsIcon } from 'lucide-react';

const Footer: React.FC = memo(() => {
  const currentYear = new Date().getFullYear();
  
  const aiServices = [
    { name: 'AI Consulting & Strategy', url: '/ai-services', description: 'AI strategy development' },
    { name: 'Machine Learning Solutions', url: '/ai-data-analytics', description: 'Custom ML models' },
    { name: 'Natural Language Processing', url: '/ai-content-generation', description: 'Advanced NLP' },
    { name: 'Computer Vision', url: '/ai-cybersecurity', description: 'Image analysis' },
    { name: 'AI Automation', url: '/ai-marketing', description: 'Process automation' },
    { name: 'AI Chatbots', url: '/ai-chatbot-builder', description: 'Conversational AI' },
    { name: 'AI Voice Cloning', url: '/ai-voice-cloning', description: 'Voice synthesis' },
    { name: 'AI 3D Generation', url: '/ai-3d-generation', description: '3D model creation' },
    { name: 'AI Music Composition', url: '/ai-music-composition', description: 'AI music creation' },
    { name: 'AI Video Generation', url: '/ai-video-generation', description: 'Video creation' }
  ];

  const itServices = [
    { name: 'IT Infrastructure', url: '/it-infrastructure', description: 'Enterprise infrastructure' },
    { name: 'Cloud Services', url: '/cloud-services', description: 'Cloud migration' },
    { name: 'Cybersecurity', url: '/cybersecurity', description: 'Security solutions' },
    { name: 'DevOps & CI/CD', url: '/devops', description: 'DevOps automation' },
    { name: 'Database Services', url: '/database', description: 'Database management' },
    { name: 'Network Services', url: '/networking', description: 'Network infrastructure' },
    { name: 'IT Support & Helpdesk', url: '/support', description: '24/7 support' },
    { name: 'Software Development', url: '/developer-tools', description: 'Custom development' },
    { name: 'Data Center Services', url: '/it-infrastructure', description: 'Data center management' },
    { name: 'IT Consulting', url: '/consultation', description: 'Strategic planning' }
  ];

  const microSaasServices = [
    { name: 'AI Code Review Assistant', url: '/micro-saas', description: 'Code analysis' },
    { name: 'AI SEO Optimizer', url: '/micro-saas', description: 'SEO optimization' },
    { name: 'AI Analytics Dashboard', url: '/ai-analytics-dashboard', description: 'Business intelligence' },
    { name: 'AI Marketing Automation', url: '/marketing-tools', description: 'Marketing automation' },
    { name: 'AI Document Processing', url: '/ai-document-processing', description: 'Document analysis' },
    { name: 'AI Customer Support Bot', url: '/ai-chatbot-builder', description: 'Automated support' },
    { name: 'AI Content Generator', url: '/ai-content-generation', description: 'Content creation' },
    { name: 'AI Data Visualization', url: '/smart-analytics', description: 'Data visualization' },
    { name: 'AI Email Assistant', url: '/ai-email-assistant', description: 'Email management' },
    { name: 'AI Lead Generation', url: '/ai-lead-generation', description: 'Lead qualification' }
  ];

  const specializedSolutions = [
    { name: 'Quantum Computing', url: '/quantum-computing', description: 'Quantum algorithms' },
    { name: 'Autonomous Systems', url: '/autonomous-systems', description: 'Self-managing systems' },
    { name: 'Blockchain & Web3', url: '/blockchain-web3', description: 'Decentralized solutions' },
    { name: 'IoT & Edge Computing', url: '/iot-edge-computing', description: 'Connected devices' },
    { name: 'Business Intelligence', url: '/business-intelligence', description: 'Data insights' },
    { name: 'Robotics Solutions', url: '/robotics', description: 'Intelligent robotics' },
    { name: 'AR/VR Solutions', url: '/micro-saas', description: 'AR/VR applications' },
    { name: 'Digital Twin Technology', url: '/micro-saas', description: 'Digital twin creation' },
    { name: 'Smart City Solutions', url: '/micro-saas', description: 'Smart city infrastructure' },
    { name: 'Autonomous Vehicles', url: '/micro-saas', description: 'Autonomous systems' }
  ];

  const emergingTech = [
    { name: 'Metaverse Solutions', url: '/micro-saas', description: 'Virtual worlds' },
    { name: 'AI-Powered Drones', url: '/micro-saas', description: 'Intelligent drones' },
    { name: 'Edge AI Computing', url: '/iot-edge-computing', description: 'Edge processing' },
    { name: '5G Network Solutions', url: '/networking', description: '5G implementation' },
    { name: 'AI-Powered Cybersecurity', url: '/cybersecurity', description: 'Next-gen security' },
    { name: 'Quantum-Safe Cryptography', url: '/security', description: 'Post-quantum security' },
    { name: 'AI-Powered Healthcare', url: '/ai-healthcare', description: 'Medical AI' },
    { name: 'Autonomous Robotics', url: '/robotics', description: 'Self-operating robots' },
    { name: 'AI-Powered Agriculture', url: '/micro-saas', description: 'Smart farming' },
    { name: 'Smart Energy Systems', url: '/micro-saas', description: 'Energy management' }
  ];

  const companyLinks = [
    { name: 'About Us', url: '/about', icon: Users },
    { name: 'Our Team', url: '/team', icon: Users },
    { name: 'Careers', url: '/careers', icon: Briefcase },
    { name: 'Case Studies', url: '/case-studies', icon: BarChart },
    { name: 'News & Updates', url: '/news', icon: FileText },
    { name: 'Blog', url: '/blog', icon: FileText },
    { name: 'Contact', url: '/contact', icon: Phone },
    { name: 'Support', url: '/support', icon: MessageSquare }
  ];

  const legalLinks = [
    { name: 'Privacy Policy', url: '/privacy', icon: Shield },
    { name: 'Terms of Service', url: '/terms', icon: FileText },
    { name: 'Cookie Policy', url: '/cookies', icon: Settings },
    { name: 'GDPR Compliance', url: '/gdpr', icon: Lock },
    { name: 'Security', url: '/security', icon: Shield },
    { name: 'Compliance', url: '/compliance', icon: CheckCircle }
  ];

  const socialLinks = [
    { name: 'Facebook', url: 'https://facebook.com/ziontechgroup', icon: Facebook },
    { name: 'Twitter', url: 'https://twitter.com/ziontechgroup', icon: Twitter },
    { name: 'LinkedIn', url: 'https://linkedin.com/company/ziontechgroup', icon: Linkedin },
    { name: 'Instagram', url: 'https://instagram.com/ziontechgroup', icon: Instagram },
    { name: 'YouTube', url: 'https://youtube.com/ziontechgroup', icon: Youtube },
    { name: 'GitHub', url: 'https://github.com/ziontechgroup', icon: Github }
  ];

  return (
    <footer className="bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-2 mb-6">
              <div className="w-10 h-10 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-lg flex items-center justify-center">
                <Brain className="w-6 h-6 text-white" />
              </div>
              <span className="text-2xl font-bold">Zion Tech Group</span>
            </div>
            <p className="text-gray-300 mb-6 leading-relaxed">
              Leading provider of AI-powered enterprise solutions, quantum computing, autonomous systems, 
              and digital transformation services. Transform your business with cutting-edge technology.
            </p>
            
            {/* Contact Info */}
            <div className="space-y-3 mb-6">
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-cyan-400" />
                <span className="text-gray-300">+1 302 464 0950</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-cyan-400" />
                <span className="text-gray-300">kleber@ziontechgroup.com</span>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="w-5 h-5 text-cyan-400" />
                <span className="text-gray-300">364 E Main St STE 1008, Middletown, DE 19709</span>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center hover:bg-cyan-500 transition-colors duration-200"
                  aria-label={social.name}
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* AI Services */}
          <div>
            <h3 className="text-lg font-semibold mb-6 flex items-center">
              <Brain className="w-5 h-5 text-purple-400 mr-2" />
              AI Services
            </h3>
            <ul className="space-y-3">
              {aiServices.map((service, index) => (
                <li key={index}>
                  <Link
                    href={service.url}
                    className="text-gray-300 hover:text-cyan-400 transition-colors duration-200 flex items-start group"
                  >
                    <ArrowRight className="w-3 h-3 mt-1 mr-2 text-gray-500 group-hover:text-cyan-400 flex-shrink-0" />
                    <div>
                      <div className="font-medium">{service.name}</div>
                      <div className="text-xs text-gray-500">{service.description}</div>
                    </div>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* IT Services */}
          <div>
            <h3 className="text-lg font-semibold mb-6 flex items-center">
              <Cloud className="w-5 h-5 text-blue-400 mr-2" />
              IT Services
            </h3>
            <ul className="space-y-3">
              {itServices.map((service, index) => (
                <li key={index}>
                  <Link
                    href={service.url}
                    className="text-gray-300 hover:text-cyan-400 transition-colors duration-200 flex items-start group"
                  >
                    <ArrowRight className="w-3 h-3 mt-1 mr-2 text-gray-500 group-hover:text-cyan-400 flex-shrink-0" />
                    <div>
                      <div className="font-medium">{service.name}</div>
                      <div className="text-xs text-gray-500">{service.description}</div>
                    </div>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Micro SAAS */}
          <div>
            <h3 className="text-lg font-semibold mb-6 flex items-center">
              <Code className="w-5 h-5 text-green-400 mr-2" />
              Micro SAAS
            </h3>
            <ul className="space-y-3">
              {microSaasServices.map((service, index) => (
                <li key={index}>
                  <Link
                    href={service.url}
                    className="text-gray-300 hover:text-cyan-400 transition-colors duration-200 flex items-start group"
                  >
                    <ArrowRight className="w-3 h-3 mt-1 mr-2 text-gray-500 group-hover:text-cyan-400 flex-shrink-0" />
                    <div>
                      <div className="font-medium">{service.name}</div>
                      <div className="text-xs text-gray-500">{service.description}</div>
                    </div>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Specialized Solutions */}
          <div>
            <h3 className="text-lg font-semibold mb-6 flex items-center">
              <Sparkles className="w-5 h-5 text-orange-400 mr-2" />
              Specialized
            </h3>
            <ul className="space-y-3">
              {specializedSolutions.slice(0, 5).map((service, index) => (
                <li key={index}>
                  <Link
                    href={service.url}
                    className="text-gray-300 hover:text-cyan-400 transition-colors duration-200 flex items-start group"
                  >
                    <ArrowRight className="w-3 h-3 mt-1 mr-2 text-gray-500 group-hover:text-cyan-400 flex-shrink-0" />
                    <div>
                      <div className="font-medium">{service.name}</div>
                      <div className="text-xs text-gray-500">{service.description}</div>
                    </div>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Company Links */}
        <div className="mt-12 pt-8 border-t border-white/20">
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-6">
            <div>
              <h4 className="font-semibold mb-4 text-cyan-400">Company</h4>
              <ul className="space-y-2">
                {companyLinks.slice(0, 4).map((link, index) => (
                  <li key={index}>
                    <Link
                      href={link.url}
                      className="text-gray-300 hover:text-cyan-400 transition-colors duration-200 flex items-center text-sm"
                    >
                      <link.icon className="w-3 h-3 mr-2" />
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4 text-cyan-400">Legal</h4>
              <ul className="space-y-2">
                {legalLinks.slice(0, 4).map((link, index) => (
                  <li key={index}>
                    <Link
                      href={link.url}
                      className="text-gray-300 hover:text-cyan-400 transition-colors duration-200 flex items-center text-sm"
                    >
                      <link.icon className="w-3 h-3 mr-2" />
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4 text-cyan-400">Services</h4>
              <ul className="space-y-2">
                <li>
                  <Link href="/services" className="text-gray-300 hover:text-cyan-400 transition-colors duration-200 text-sm">
                    All Services
                  </Link>
                </li>
                <li>
                  <Link href="/pricing" className="text-gray-300 hover:text-cyan-400 transition-colors duration-200 text-sm">
                    Pricing
                  </Link>
                </li>
                <li>
                  <Link href="/demo" className="text-gray-300 hover:text-cyan-400 transition-colors duration-200 text-sm">
                    Demo
                  </Link>
                </li>
                <li>
                  <Link href="/consultation" className="text-gray-300 hover:text-cyan-400 transition-colors duration-200 text-sm">
                    Free Consultation
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4 text-cyan-400">Resources</h4>
              <ul className="space-y-2">
                <li>
                  <Link href="/blog" className="text-gray-300 hover:text-cyan-400 transition-colors duration-200 text-sm">
                    Blog
                  </Link>
                </li>
                <li>
                  <Link href="/docs" className="text-gray-300 hover:text-cyan-400 transition-colors duration-200 text-sm">
                    Documentation
                  </Link>
                </li>
                <li>
                  <Link href="/api-docs" className="text-gray-300 hover:text-cyan-400 transition-colors duration-200 text-sm">
                    API Documentation
                  </Link>
                </li>
                <li>
                  <Link href="/status" className="text-gray-300 hover:text-cyan-400 transition-colors duration-200 text-sm">
                    System Status
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="bg-black/20 border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
            <div className="text-gray-400 text-sm">
              © {currentYear} Zion Tech Group. All rights reserved.
            </div>
            <div className="flex items-center space-x-6 text-sm text-gray-400">
              <span>ISO 27001 Certified</span>
              <span>•</span>
              <span>SOC 2 Compliant</span>
              <span>•</span>
              <span>GDPR Ready</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
});

Footer.displayName = 'Footer';

export default Footer;