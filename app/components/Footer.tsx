import React from 'react';
import { Link } from 'react-router-dom';
<<<<<<< HEAD
=======
import { Phone, Mail, MapPin, Clock, Award, Shield, Zap, ArrowRight, Brain, Cloud, Code, BarChart, Users, Globe, Facebook, Twitter, Linkedin, Instagram, Youtube, Github, MessageSquare, Star, TrendingUp, CheckCircle } from 'lucide-react';

const Footer: React.FC = memo(() => {
  const currentYear = new Date().getFullYear();

  const serviceCategories = [
    {
      title: 'AI Services',
      icon: Brain,
      services: [
        { name: 'AI Workflow Automation', href: '/ai-workflow-automation' },
        { name: 'AI Customer Support', href: '/ai-customer-support' },
        { name: 'AI Data Analytics', href: '/ai-data-analytics' },
        { name: 'AI Content Generation', href: '/ai-content-generation' },
        { name: 'AI Healthcare Solutions', href: '/ai-healthcare' },
        { name: 'AI Fintech Platform', href: '/ai-fintech' },
        { name: 'AI Computer Vision', href: '/ai-computer-vision' },
        { name: 'AI Machine Learning', href: '/ai-ml-platform' },
        { name: 'AI Quantum Computing', href: '/ai-quantum-computing' },
        { name: 'AI Drug Discovery Pro', href: '/ai-drug-discovery-pro' },
        { name: 'AI Climate Solutions Pro', href: '/ai-climate-solutions-pro' },
        { name: 'AI Space Technology Pro', href: '/ai-space-technology-pro' },
        { name: 'AI Autonomous Systems', href: '/ai-autonomous-systems' },
        { name: 'AI Blockchain Solutions', href: '/ai-blockchain-solutions' },
        { name: 'AI Edge Computing', href: '/ai-edge-computing' },
        { name: 'AI Cybersecurity Pro', href: '/ai-cybersecurity' }
      ]
    },
    {
      title: 'IT Services',
      icon: Cloud,
      services: [
        { name: 'Cloud Migration & Setup', href: '/cloud-migration' },
        { name: 'Enterprise Cybersecurity', href: '/cybersecurity' },
        { name: 'IT Infrastructure Design', href: '/it-infrastructure' },
        { name: '24/7 IT Support', href: '/it-support' },
        { name: 'Custom Development', href: '/custom-development' },
        { name: 'DevOps & CI/CD', href: '/devops-cicd' },
        { name: 'Database Management', href: '/database-management' },
        { name: 'Network Design', href: '/network-design' },
        { name: 'AI Infrastructure Monitoring', href: '/ai-infrastructure-monitoring' },
        { name: 'Blockchain Integration', href: '/blockchain-integration-services' },
        { name: 'AI API Management', href: '/ai-api-management' },
        { name: 'Smart Contract Security', href: '/smart-contract-security-audit' },
        { name: 'Healthcare IT Solutions', href: '/healthcare-it' },
        { name: 'Financial Services IT', href: '/financial-it' },
        { name: 'Edge Computing Solutions', href: '/edge-computing' },
        { name: '5G Network Implementation', href: '/5g-implementation' }
      ]
    },
    {
      title: 'Micro SAAS',
      icon: Code,
      services: [
        { name: 'AI Project Manager Pro', href: '/ai-project-manager' },
        { name: 'AI Social Media Manager', href: '/ai-social-media-manager' },
        { name: 'AI Analytics Dashboard', href: '/ai-analytics-dashboard' },
        { name: 'AI Email Marketing Suite', href: '/ai-email-marketing' },
        { name: 'AI Customer Support Bot', href: '/ai-customer-support-bot' },
        { name: 'AI Content Studio', href: '/ai-content-studio' },
        { name: 'AI Financial Advisor', href: '/ai-financial-advisor' },
        { name: 'AI Workflow Automation', href: '/ai-workflow-automation' },
        { name: 'AI Smart Calendar', href: '/ai-smart-calendar' },
        { name: 'AI Content Writer', href: '/ai-content-writer' },
        { name: 'AI Video Generator', href: '/ai-video-generator' },
        { name: 'AI CRM Assistant', href: '/ai-crm-assistant' },
        { name: 'AI Quantum Financial Oracle', href: '/ai-quantum-financial-oracle' },
        { name: 'AI Neural Memory Assistant', href: '/ai-neural-memory-assistant' },
        { name: 'AI Holographic Workspace', href: '/ai-holographic-workspace' },
        { name: 'AI 3D Generation Studio', href: '/ai-3d-generation' }
      ]
    },
    {
      title: 'Emerging Technologies',
      icon: Zap,
      services: [
        { name: 'Quantum Computing Solutions', href: '/ai-quantum-computing' },
        { name: 'Autonomous Systems', href: '/ai-autonomous-systems' },
        { name: 'Blockchain & Web3', href: '/ai-blockchain-solutions' },
        { name: 'IoT & Edge Computing', href: '/ai-edge-computing' },
        { name: 'AR/VR Solutions', href: '/ar-vr-platform' },
        { name: 'Smart Cities', href: '/smart-city-infrastructure' },
        { name: 'Digital Transformation', href: '/digital-transformation' },
        { name: 'Innovation Labs', href: '/innovation-labs' },
        { name: 'Business Intelligence', href: '/ai-business-intelligence' },
        { name: 'Robotics Solutions', href: '/robotics-integration' },
        { name: 'Digital Twin Platform', href: '/digital-twin-platform' },
        { name: 'AI Space Technology', href: '/ai-space-technology-pro' }
      ]
    }
  ];

  const companyLinks = [
    { name: 'About Us', href: '/about' },
    { name: 'Our Team', href: '/team' },
    { name: 'Careers', href: '/careers' },
    { name: 'Case Studies', href: '/case-studies' },
    { name: 'Blog', href: '/blog' },
    { name: 'Pricing', href: '/pricing' },
    { name: 'News', href: '/news' },
    { name: 'Partners', href: '/partners' },
    { name: 'Investors', href: '/investors' }
  ];

  const supportLinks = [
    { name: 'Contact Us', href: '/contact' },
    { name: 'Support Center', href: '/support' },
    { name: 'Documentation', href: '/docs' },
    { name: 'API Reference', href: '/api-docs' },
    { name: 'Status Page', href: '/status' },
    { name: 'System Health', href: '/health' },
    { name: 'Help Center', href: '/help' },
    { name: 'Community', href: '/community' },
    { name: 'Training', href: '/training' }
  ];

  const legalLinks = [
    { name: 'Privacy Policy', href: '/privacy' },
    { name: 'Terms of Service', href: '/terms' },
    { name: 'Cookie Policy', href: '/cookies' },
    { name: 'GDPR Compliance', href: '/gdpr' },
    { name: 'Security', href: '/security' },
    { name: 'Compliance', href: '/compliance' },
    { name: 'Data Protection', href: '/data-protection' },
    { name: 'Accessibility', href: '/accessibility' },
    { name: 'Sitemap', href: '/sitemap' }
  ];
>>>>>>> 38b43e42238c1581a5624bf9b55de28a497ee69f

const Footer: React.FC = () => {
  return (
<<<<<<< HEAD
    <footer className="bg-gray-900/95 backdrop-blur-md border-t border-gray-700">
      <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
=======
    <footer className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 backdrop-blur-sm border-t border-cyan-400/30 relative overflow-hidden cyber-grid-advanced">
      {/* Futuristic Background Effects */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(0,255,255,0.05)_0%,transparent_50%)] animate-pulse" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(139,92,246,0.05)_0%,transparent_50%)] animate-pulse" style={{ animationDelay: '1s' }} />
      <div className="absolute inset-0 bg-[linear-gradient(rgba(0,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(0,255,255,0.02)_1px,transparent_1px)] bg-[length:50px_50px]" />
      
      {/* Quantum Particles */}
      <div className="absolute top-10 left-10 w-2 h-2 bg-cyan-400 rounded-full quantum-particle" style={{ animationDelay: '0s' }}></div>
      <div className="absolute top-20 right-20 w-1 h-1 bg-purple-400 rounded-full quantum-particle" style={{ animationDelay: '1s' }}></div>
      <div className="absolute bottom-20 left-1/4 w-1.5 h-1.5 bg-pink-400 rounded-full quantum-particle" style={{ animationDelay: '2s' }}></div>
      <div className="absolute bottom-10 right-1/3 w-1 h-1 bg-blue-400 rounded-full quantum-particle" style={{ animationDelay: '3s' }}></div>
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <div className="flex items-center space-x-2 mb-6 group">
<div className="w-8 h-8 bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg shadow-cyan-400/25 neon-glow">
                <Zap className="w-5 h-5 text-white" />
              </div>
              <span className="text-white font-bold text-xl bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 bg-clip-text text-transparent cyber-text">Zion Tech Group</span>
            </div>
            
            <p className="text-gray-300 mb-6 leading-relaxed">
              Leading provider of AI-powered enterprise solutions, quantum computing, 
              autonomous systems, and digital transformation services. Transforming businesses 
              with cutting-edge technology and innovative solutions.
            </p>

            {/* Contact Info */}
            <div className="space-y-3 mb-6">
              <div className="flex items-center space-x-3 text-gray-300 group">
                <Phone className="w-4 h-4 text-cyan-400 group-hover:text-cyan-300 transition-colors" />
                <a href="tel:+13024640950" className="hover:text-cyan-400 transition-colors font-medium">
                  +1 (302) 464-0950
                </a>
              </div>
              <div className="flex items-center space-x-3 text-gray-300 group">
                <Mail className="w-4 h-4 text-cyan-400 group-hover:text-cyan-300 transition-colors" />
                <a href="mailto:kleber@ziontechgroup.com" className="hover:text-cyan-400 transition-colors font-medium">
                  kleber@ziontechgroup.com
                </a>
              </div>
              <div className="flex items-start space-x-3 text-gray-300 group">
                <MapPin className="w-4 h-4 text-cyan-400 mt-0.5 group-hover:text-cyan-300 transition-colors" />
                <div>
                  <div className="font-medium">364 E Main St STE 1008</div>
                  <div>Middletown, DE 19709</div>
                </div>
              </div>
              <div className="flex items-center space-x-3 text-gray-300 group">
                <Clock className="w-4 h-4 text-cyan-400 group-hover:text-cyan-300 transition-colors" />
                <div>
                  <div className="font-medium">Mon - Fri: 9:00 AM - 6:00 PM EST</div>
                  <div className="text-sm text-cyan-400">24/7 Emergency Support</div>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex space-x-4">
              <a href="https://linkedin.com/company/zion-tech-group" className="text-gray-400 hover:text-cyan-400 transition-colors" target="_blank" rel="noopener noreferrer">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="https://twitter.com/ziontechgroup" className="text-gray-400 hover:text-cyan-400 transition-colors" target="_blank" rel="noopener noreferrer">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="https://github.com/zion-tech-group" className="text-gray-400 hover:text-cyan-400 transition-colors" target="_blank" rel="noopener noreferrer">
                <Github className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Services */}
>>>>>>> 38b43e42238c1581a5624bf9b55de28a497ee69f
          <div className="lg:col-span-2">
            <h3 className="text-2xl font-bold mb-4 neon-text cyber-font">ZION TECH GROUP</h3>
            <p className="text-gray-300 mb-6 leading-relaxed">
              Advanced AI and IT Solutions for the modern world. We help businesses transform through cutting-edge technology, 
              innovative micro SAAS solutions, and comprehensive digital transformation services.
            </p>
            <div className="space-y-2 text-sm text-gray-400">
              <p>📞 <span className="text-neon-blue">+1 302 464 0950</span></p>
              <p>✉️ <span className="text-neon-blue">kleber@ziontechgroup.com</span></p>
              <p>📍 364 E Main St STE 1008, Middletown DE 19709</p>
            </div>
            <div className="flex space-x-4 mt-6">
              <a href="https://ziontechgroup.com" className="text-gray-400 hover:text-neon-blue transition-colors duration-300">
                <span className="sr-only">Website</span>
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                </svg>
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="text-lg font-bold mb-6 neon-text-purple">AI Services</h4>
            <ul className="space-y-3">
              <li><Link to="/ai-services" className="text-gray-300 hover:text-neon-blue transition-colors duration-300">AI Development</Link></li>
              <li><Link to="/ai-content-generator" className="text-gray-300 hover:text-neon-blue transition-colors duration-300">AI Content Generator</Link></li>
              <li><Link to="/zion-ai-sales-predictor" className="text-gray-300 hover:text-neon-blue transition-colors duration-300">Sales Predictor</Link></li>
              <li><Link to="/zion-ai-workflow-automator" className="text-gray-300 hover:text-neon-blue transition-colors duration-300">Workflow Automator</Link></li>
              <li><Link to="/zion-ai-financial-forecaster" className="text-gray-300 hover:text-neon-blue transition-colors duration-300">Financial Forecaster</Link></li>
            </ul>
            
            <h4 className="text-lg font-bold mb-6 neon-text-pink mt-8">Micro SAAS</h4>
            <ul className="space-y-3">
              <li><Link to="/micro-saas-solutions" className="text-gray-300 hover:text-neon-purple transition-colors duration-300">Task Management Pro</Link></li>
              <li><Link to="/zion-smart-expense-tracker" className="text-gray-300 hover:text-neon-purple transition-colors duration-300">Smart Expense Tracker</Link></li>
              <li><Link to="/zion-ai-email-marketing-pro" className="text-gray-300 hover:text-neon-purple transition-colors duration-300">Email Marketing Pro</Link></li>
              <li><Link to="/zion-ai-social-scheduler-pro" className="text-gray-300 hover:text-neon-purple transition-colors duration-300">Social Scheduler Pro</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-bold mb-6 neon-text">IT Solutions</h4>
            <ul className="space-y-3">
              <li><Link to="/it-services" className="text-gray-300 hover:text-neon-blue transition-colors duration-300">IT Services</Link></li>
              <li><Link to="/cloud-infrastructure" className="text-gray-300 hover:text-neon-blue transition-colors duration-300">Cloud Infrastructure</Link></li>
              <li><Link to="/web-development" className="text-gray-300 hover:text-neon-blue transition-colors duration-300">Web Development</Link></li>
              <li><Link to="/mobile-development" className="text-gray-300 hover:text-neon-blue transition-colors duration-300">Mobile Development</Link></li>
              <li><Link to="/cybersecurity" className="text-gray-300 hover:text-neon-blue transition-colors duration-300">Cybersecurity</Link></li>
              <li><Link to="/data-analytics" className="text-gray-300 hover:text-neon-blue transition-colors duration-300">Data Analytics</Link></li>
              <li><Link to="/digital-transformation" className="text-gray-300 hover:text-neon-blue transition-colors duration-300">Digital Transformation</Link></li>
              <li><Link to="/5g-solutions" className="text-gray-300 hover:text-neon-blue transition-colors duration-300">5G Solutions</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-bold mb-6 neon-text-purple">Company</h4>
            <ul className="space-y-3">
              <li><Link to="/about" className="text-gray-300 hover:text-neon-purple transition-colors duration-300">About Us</Link></li>
              <li><Link to="/team" className="text-gray-300 hover:text-neon-purple transition-colors duration-300">Our Team</Link></li>
              <li><Link to="/careers" className="text-gray-300 hover:text-neon-purple transition-colors duration-300">Careers</Link></li>
              <li><Link to="/partnerships" className="text-gray-300 hover:text-neon-purple transition-colors duration-300">Partnerships</Link></li>
              <li><Link to="/case-studies" className="text-gray-300 hover:text-neon-purple transition-colors duration-300">Case Studies</Link></li>
              <li><Link to="/pricing" className="text-gray-300 hover:text-neon-purple transition-colors duration-300">Pricing</Link></li>
              <li><Link to="/blog" className="text-gray-300 hover:text-neon-purple transition-colors duration-300">Blog</Link></li>
            </ul>
            
            <h4 className="text-lg font-bold mb-6 neon-text-pink mt-8">Support</h4>
            <ul className="space-y-3">
              <li><Link to="/contact" className="text-gray-300 hover:text-neon-pink transition-colors duration-300">Contact</Link></li>
              <li><Link to="/help" className="text-gray-300 hover:text-neon-pink transition-colors duration-300">Help & Support</Link></li>
              <li><Link to="/api-docs" className="text-gray-300 hover:text-neon-pink transition-colors duration-300">API Documentation</Link></li>
              <li><Link to="/privacy" className="text-gray-300 hover:text-neon-pink transition-colors duration-300">Privacy Policy</Link></li>
              <li><Link to="/terms" className="text-gray-300 hover:text-neon-pink transition-colors duration-300">Terms of Service</Link></li>
              <li><Link to="/accessibility" className="text-gray-300 hover:text-neon-pink transition-colors duration-300">Accessibility</Link></li>
            </ul>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-gray-700">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-300">
              © 2024 Zion Tech Group. All rights reserved.
            </p>
            <div className="mt-4 md:mt-0 text-center">
              <p className="text-gray-400 text-sm mb-2">
                Built with <span className="neon-text">❤️</span> for the future of technology
              </p>
              <p className="text-xs text-gray-500">
                Transforming businesses through AI and innovation
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;