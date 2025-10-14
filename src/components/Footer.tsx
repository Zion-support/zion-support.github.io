'use client'
import React, { memo } from 'react';
import { Link  } from 'react-router-dom';
import { Phone, Mail, MapPin, Clock, Award, Shield, Zap, ArrowRight, Brain, Cloud, Code, BarChart, Users, Globe, Facebook, Twitter, Linkedin, Instagram, Youtube, Github, MessageSquare, Star, TrendingUp, CheckCircle  } from 'lucide-react';const Footer: React.FC = memo(() =>
                {
  const currentYear = new Date().getFullYear();
  
  const microSaasServices = [
    { name: 'AI Project Manager', url: '/ai-project-manager', description: 'Intelligent project planning', icon: '📊', popular: true },
    { name: 'AI Social Media Manager', url: '/ai-social-media-manager', description: 'Automated social media', icon: '📱', popular: true },
    { name: 'AI Analytics Dashboard', url: '/ai-analytics-dashboard', description: 'AI-powered analytics', icon: '📈', popular: true },
    { name: 'AI Email Marketing', url: '/ai-email-marketing', description: 'Intelligent email campaigns', icon: '📧', popular: true },
    { name: 'AI Customer Support Bot', url: '/ai-customer-support-bot', description: '24/7 AI support', icon: '🤖', popular: true },
    { name: 'AI Code Review Assistant', url: '/ai-code-generation', description: 'Automated code analysis', icon: '🔍', popular: false },
    { name: 'AI Content Generator', url: '/ai-content-generation', description: 'AI content creation', icon: '✍️', popular: false },
    { name: 'AI SEO Optimizer', url: '/ai-marketing', description: 'AI-driven SEO', icon: '🎯', popular: false }
  ]
  const aiServices = [
    { name: 'AI Services', url: '/ai-services', description: 'Comprehensive AI solutions' },
    { name: 'AI Marketing', url: '/ai-marketing', description: 'AI-powered marketing automation' },
    { name: 'AI Automation', url: '/ai-automation', description: 'Intelligent process automation' },
    { name: 'AI Healthcare', url: '/ai-healthcare', description: 'Medical AI solutions' },
    { name: 'AI Fintech', url: '/ai-fintech', description: 'Financial AI applications' },
    { name: 'AI Content Generation', url: '/ai-content-generation', description: 'AI content creation' },
    { name: 'AI Data Analytics', url: '/ai-data-analytics', description: 'Advanced data insights' },
    { name: 'AI Cybersecurity', url: '/ai-cybersecurity', description: 'AI security solutions' },
    { name: 'AI Workflow Automation', url: '/ai-workflow-automation', description: 'Workflow optimization' },
    { name: 'AI Mobile App Development', url: '/ai-mobile-app-development', description: 'Mobile AI applications' },
    { name: 'AI E-commerce Solutions', url: '/ai-ecommerce-solutions', description: 'E-commerce AI platforms' },
    { name: 'AI Customer Support', url: '/ai-customer-support', description: 'AI-powered customer service' },
    { name: 'AI Sales Automation', url: '/ai-sales-automation', description: 'Intelligent sales processes' },
    { name: 'AI Data Visualization', url: '/ai-data-visualization', description: 'Advanced data visualization' },
    { name: 'AI Lead Generation', url: '/ai-lead-generation', description: 'AI-powered lead generation' },
    { name: 'AI Document Processing', url: '/ai-document-processing', description: 'Intelligent document processing' },
    { name: 'AI Machine Learning Platform', url: '/ai-ml-platform', description: 'Complete ML platform' },
    { name: 'AI Computer Vision', url: '/ai-computer-vision', description: 'Advanced computer vision' },
    { name: 'AI Natural Language Processing', url: '/ai-nlp', description: 'Advanced NLP solutions' },
    { name: 'AI Robotics Platform', url: '/ai-robotics', description: 'Intelligent robotics' },
    { name: 'AI Research & Development', url: '/ai-research-development', description: 'Custom AI R&D' },
    { name: 'AI Edge Computing', url: '/ai-edge-computing', description: 'AI at the edge' }
  ]
  const itServices = [
    { name: 'IT Services', url: '/it-services', description: 'Comprehensive IT support' },
    { name: 'IT Infrastructure', url: '/it-infrastructure', description: 'Enterprise infrastructure' },
    { name: 'Cybersecurity', url: '/cybersecurity', description: 'Security solutions' },
    { name: 'Cloud Migration', url: '/cloud-migration', description: 'Cloud migration & setup' },
    { name: 'DevOps & CI/CD', url: '/devops-cicd', description: 'DevOps automation' },
    { name: 'Database Management', url: '/database-management', description: 'Database management' },
    { name: 'Network Solutions', url: '/network-solutions', description: 'Network infrastructure' },
    { name: 'System Administration', url: '/system-administration', description: 'System management' },
    { name: 'IT Consulting', url: '/it-consulting', description: 'Strategic IT planning' },
    { name: 'IT Support & Maintenance', url: '/it-support', description: '24/7 IT management' },
    { name: 'IT Training & Certification', url: '/it-training', description: 'Staff development' },
    { name: 'IT Infrastructure Design', url: '/it-infrastructure-design', description: 'Custom infrastructure' },
    { name: 'IT Performance Monitoring', url: '/it-performance-monitoring', description: 'Real-time monitoring' },
    { name: 'IT Disaster Recovery', url: '/it-disaster-recovery', description: 'Disaster recovery' },
    { name: 'IT Automation', url: '/it-automation', description: 'IT process automation' },
    { name: 'Global IT Support', url: '/global-it-support', description: 'Worldwide support' }
  ]
  const emergingTech = [
    { name: 'Quantum Computing', url: '/quantum-computing', description: 'Quantum solutions' },
    { name: 'Robotics', url: '/robotics', description: 'Intelligent robotics' },
    { name: 'IoT & Edge Computing', url: '/iot-edge-computing', description: 'Connected devices' },
    { name: 'Blockchain & Web3', url: '/blockchain-web3', description: 'Decentralized solutions' },
    { name: 'Business Intelligence', url: '/business-intelligence', description: 'Data insights' },
    { name: 'Autonomous Systems', url: '/autonomous-systems', description: 'Self-managing systems' },
    { name: 'AR/VR Solutions', url: '/ar-vr-solutions', description: 'Immersive experiences' },
    { name: 'Smart Cities', url: '/smart-cities', description: 'Urban technology solutions' },
    { name: 'Digital Transformation', url: '/digital-transformation', description: 'Business modernization' },
    { name: 'Innovation Labs', url: '/innovation-labs', description: 'R&D and prototyping' },
    { name: 'Sustainability Tech', url: '/sustainability-tech', description: 'Green technology solutions' },
    { name: 'Future Technologies', url: '/future-technologies', description: 'Emerging tech solutions' }
  ]
  const companyLinks = [
    { name: 'About Us', url: '/about' },
    { name: 'Our Team', url: '/team' },
    { name: 'Careers', url: '/careers' },
    { name: 'News', url: '/news' },
    { name: 'Contact', url: '/contact' }
  ]
  const supportLinks = [
    { name: 'Documentation', url: '/docs' },
    { name: 'API Reference', url: '/api-docs' },
    { name: 'Support Center', url: '/support' },
    { name: 'System Status', url: '/status' },
    { name: 'Privacy Policy', url: '/privacy' },
    { name: 'Terms of Service', url: '/terms' }
  ]
  const socialLinks = [
    { name: 'Facebook', url: 'https://facebook.com/ziontechgroup', icon: Facebook },
    { name: 'Twitter', url: 'https://twitter.com/ziontechgroup', icon: Twitter },
    { name: 'LinkedIn', url: 'https://linkedin.com/company/ziontechgroup', icon: Linkedin },
    { name: 'Instagram', url: 'https://instagram.com/ziontechgroup', icon: Instagram },
    { name: 'YouTube', url: 'https://youtube.com/@ziontechgroup', icon: Youtube },
    { name: 'GitHub', url: 'https://github.com/ziontechgroup', icon: Github }
  ]
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
  ]
  return (
    <footer className="bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 cyber-grid"></footer>
                {/* Main Footer Content */}
                <div className="container mx-auto px-4 py-16"></div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"></div>
                {/* Company Info */}
                <div className="space-y-6"></div>
            <div></div>
              <Link to="/" className="flex items-center space-x-2 group"></Link>
                <div className="w-10 h-10 bg-gradient-to-br from-cyan-400 to-purple-600 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300"></div>
                  <span className="text-white font-bold text-lg">Z
                <div></div>
                  <h3 className="text-xl font-bold text-white cyber-text neon-pulse">Zion Tech Group
                  <p className="text-sm text-cyan-400">AI & IT Solutions
            <p className="text-gray-300 text-sm leading-relaxed"></p>
              Leading provider of AI-powered enterprise solutions, quantum computing, autonomous systems, 
              and digital transformation services. Transform your business with cutting-edge technology.
            {/* Social Links */}
                <div className="flex space-x-4"></div>
                {socialLinks.map((social, index) => (
                <$2 />
                  key={index}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-slate-800 rounded-lg flex items-center justify-center text-gray-400 hover:text-cyan-400 hover:bg-slate-700 transition-all duration-300 group"
                  aria-label={social.name}
                >
                  <social.icon className="w-5 h-5 group-hover:scale-110 transition-transform duration-300" />
              ))}
          {/* Micro SAAS Solutions */}
                <div></div>
            <h3 className="text-lg font-semibold mb-6 text-cyan-400 neon-text">AI Services
            <ul className="space-y-3"></ul>
                {aiServices.slice(0, 8).map((service, index) => (
                <li key={index}></li>
                  <$2 />
                    href={service.url}
                    className="text-gray-300 hover:text-cyan-400 transition-colors duration-300 text-sm group flex items-center">
                    <ArrowRight className="w-3 h-3 mr-2 opacity-0 group-hover:opacity-100 transition-opacity" />
                {service.name}
                <p className="text-xs text-gray-500 ml-5"></p>
                {service.description}
              ))}
                <li></li>
                <$2 />
                  href="/ai-services"
                  className="text-cyan-400 hover:text-cyan-300 transition-colors duration-200 text-sm font-medium">
                  View All AI Services →
          {/* IT Services */}
                <div></div>
            <h3 className="text-lg font-semibold mb-6 text-cyan-400 neon-text">IT Services
            <ul className="space-y-3"></ul>
                {itServices.slice(0, 6).map((service, index) => (
                <li key={index}></li>
                  <$2 />
                    href={service.url}
                    className="text-gray-300 hover:text-cyan-400 transition-colors duration-300 text-sm group flex items-center">
                    <ArrowRight className="w-3 h-3 mr-2 opacity-0 group-hover:opacity-100 transition-opacity" />
                {service.name}
                <p className="text-xs text-gray-500 ml-5"></p>
                {service.description}
              ))}
                <li></li>
                <$2 />
                  href="/it-services"
                  className="text-cyan-400 hover:text-cyan-300 transition-colors duration-200 text-sm font-medium">
                  View All IT Services →
              <li></li>
                <$2 />
                href="/micro-saas"
                className="text-cyan-400 hover:text-cyan-300 text-sm font-medium flex items-center group">
                View All Solutions
                <ArrowRight className="w-3 h-3 ml-1 group-hover:translate-x-1 transition-transform duration-300" />
                {/* AI & IT Services */}
                <div></div>
            <h4 className="text-lg font-semibold text-white mb-6 neon-text flex items-center"></h4>
              <Brain className="w-5 h-5 mr-2 text-purple-400" />
              AI & IT Services
            <div className="space-y-4"></div>
              <div></div>
                <h5 className="text-sm font-semibold text-purple-400 mb-2">AI Services
                <div className="space-y-2"></div>
                {aiServices.slice(0, 4).map((service, index) => (
                    <$2 />
                      key={index}
                      to={service.url}
                      className="flex items-center space-x-2 text-gray-300 hover:text-purple-400 transition-colors duration-300 text-sm"
                    >
                      <service.icon className="w-3 h-3" />
                      <span></span>
                {service.name}
                  ))}
                <div></div>
                <h5 className="text-sm font-semibold text-blue-400 mb-2">IT Services
                <div className="space-y-2"></div>
                {itServices.slice(0, 4).map((service, index) => (
                    <$2 />
                      key={index}
                      to={service.url}
                      className="flex items-center space-x-2 text-gray-300 hover:text-blue-400 transition-colors duration-300 text-sm"
                    >
                      <service.icon className="w-3 h-3" />
                      <span></span>
                {service.name}
                  ))}
        {/* Contact Information */}
                <div className="bg-gradient-to-r from-purple-600/20 to-blue-600/20 rounded-lg p-6 mb-8 cyber-card"></div>
          <h3 className="text-xl font-bold text-white mb-4 text-center neon-text">Get In Touch
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"></div>
            <div className="flex items-center space-x-3"></div>
              <Phone className="w-5 h-5 text-cyan-400" />
              <div></div>
                <div className="text-white font-medium"></div>
                {contactInfo.phone}
                <div className="text-gray-400 text-sm">Call us anytime
            <div className="flex items-center space-x-3"></div>
              <Mail className="w-5 h-5 text-cyan-400" />
              <div></div>
                <div className="text-white font-medium"></div>
                {contactInfo.email}
                <div className="text-gray-400 text-sm">Email us
            <div className="flex items-center space-x-3"></div>
              <MapPin className="w-5 h-5 text-cyan-400" />
              <div></div>
                <div className="text-white font-medium">Middletown, DE
                <div className="text-gray-400 text-sm"></div>
                {contactInfo.address}
                <div className="flex items-center space-x-3"></div>
              <Clock className="w-5 h-5 text-cyan-400" />
              <div></div>
                <div className="text-white font-medium"></div>
                {contactInfo.hours}
                <div className="text-gray-400 text-sm">Business hours
        {/* Company Links */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-8"></div>
          <div></div>
            <h4 className="text-sm font-semibold text-white mb-4">Company
            <ul className="space-y-2"></ul>
                {companyLinks.map((link, index) => (
                <li key={index}></li>
                  <$2 />
                    href={link.url}
                    className="text-gray-400 hover:text-cyan-400 transition-colors duration-300 text-sm">
                {link.name}
              ))}
                <div></div>
            <h4 className="text-sm font-semibold text-white mb-4">Support
            <ul className="space-y-2"></ul>
                {supportLinks.map((link, index) => (
                <li key={index}></li>
                  <$2 />
                    href={link.url}
                    className="text-gray-400 hover:text-cyan-400 transition-colors duration-300 text-sm">
                {link.name}
              ))}
                <div></div>
            <h4 className="text-sm font-semibold text-white mb-4">Quick Links
            <ul className="space-y-2"></ul>
              <li><Link href="/services" className="text-gray-400 hover:text-cyan-400 transition-colors duration-300 text-sm">All Services</Link>
              <li><Link href="/pricing" className="text-gray-400 hover:text-cyan-400 transition-colors duration-300 text-sm">Pricing</Link>
              <li><Link href="/demo" className="text-gray-400 hover:text-cyan-400 transition-colors duration-300 text-sm">Request Demo</Link>
              <li><Link href="/consultation" className="text-gray-400 hover:text-cyan-400 transition-colors duration-300 text-sm">Free Consultation</Link>
          <div></div>
            <h4 className="text-sm font-semibold text-white mb-4">Newsletter
            <p className="text-gray-400 text-sm mb-4">Stay updated with our latest news and offers.
            <div className="flex space-x-2"></div>
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-3 py-2 bg-slate-800 border border-gray-600 rounded-lg text-white text-sm focus:outline-none focus:border-cyan-400"
              />
              <button className="px-4 py-2 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-lg hover:from-cyan-600 hover:to-blue-700 transition-all text-sm"></button>
                Subscribe
      {/* Bottom Bar */}
                <div className="border-t border-gray-700/50"></div>
        <div className="container mx-auto px-4 py-6"></div>
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0"></div>
            <div className="text-sm text-gray-400"></div>
              © {currentYear} Zion Tech Group. All rights reserved.
            <div className="flex space-x-6"></div>
              <Link href="/privacy" className="text-sm text-gray-400 hover: text-cyan-400 transition-colors"></Link>
                Privacy Policy</span>
              <Link href="/terms" className="text-sm text-gray-400 hover:text-cyan-400 transition-colors"></Link>
                Terms of Service
              <Link href="/cookies" className="text-sm text-gray-400 hover:text-cyan-400 transition-colors"></Link>
                Cookie Policy
            <div className="flex items-center space-x-6 text-sm text-gray-400"></div>
              <div className="flex items-center space-x-2"></div>
                <Shield className="w-4 h-4 text-green-400" />
                <span>Enterprise Security
              <div className="flex items-center space-x-2"></div>
                <Award className="w-4 h-4 text-yellow-400" />
                <span>ISO 27001 Certified
              <div className="flex items-center space-x-2"></div>
                <Globe className="w-4 h-4 text-blue-400" />
                <span>Global Reach</span>
                </div>
            </div>
                </div>
        </div>
                </div>
    </footer>
  ),
})
Footer.displayName = 'Footer'
export default Footer</Link>
                </Link>
  </Link>
                </button>
  </li>
                </li>
  </li>
                </li>
  </h4>
                </div></div>
                </div></div>
                </div></div>
                </div></div>
                </div></div>
                </div></div>
                </div></div>
                </div></div>
                </div></div>
                </div></div>
                </div></div>
                </div></div>
                </div></div>
                </div></div>
                </div></div>
                </div></div>
                </div></div>
                </div></div>
                </div></div>
                </div></div>
                </div></div>
                </div></span>
                </span></span>
                </span></Link>
                </p></p>
                </p></p>
                </p></h3>
                </h3></h3>
                </h3></h4>
                </h4></h4>
                </h4></h5>
                </h5></ul>
                </ul></ul>
                </ul></ul>
                </li></li>
                </li></li>
                </li></li>
                </li>
