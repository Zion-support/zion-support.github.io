import React, { memo } from 'react';
import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, Clock, Award, Shield, Zap, ArrowRight, Brain, Cloud, Code, BarChart, Users, Globe, Facebook, Twitter, Linkedin, Instagram, Youtube, Github, MessageSquare, Star, TrendingUp, CheckCircle } from 'lucide-react';

const Footer: React.FC = memo(() => {
  const currentYear = new Date().getFullYear();

  const serviceCategories = [
    {
      title: 'AI Services',
      icon: Brain,
      services: [
        { name: 'AI Quantum Computing Platform', href: '/ai-quantum-computing' },
        { name: 'AI Neural Interface Platform', href: '/ai-neural-interface-platform' },
        { name: 'AI Quantum Machine Learning', href: '/ai-quantum-machine-learning' },
        { name: 'AI Autonomous Systems Platform', href: '/ai-autonomous-systems' },
        { name: 'AI Blockchain Intelligence', href: '/ai-blockchain-solutions' },
        { name: 'AI Space Technology Platform', href: '/ai-space-technology-pro' },
        { name: 'AI Climate Intelligence Platform', href: '/ai-climate-solutions-pro' },
        { name: 'AI Drug Discovery Platform', href: '/ai-drug-discovery-pro' },
        { name: 'AI Digital Twin Platform', href: '/ai-digital-twin-platform' },
        { name: 'AI Edge Intelligence Platform', href: '/ai-edge-intelligence-platform' },
        { name: 'AI Cybersecurity Intelligence', href: '/ai-cybersecurity-intelligence' },
        { name: 'AI Medical Imaging Pro', href: '/ai-medical-imaging-pro' },
        { name: 'AI Smart City Management', href: '/ai-smart-city-management' },
        { name: 'AI Conversational AI Platform', href: '/ai-conversational-ai-platform' },
        { name: 'AI Language Model Platform', href: '/ai-language-model-platform' },
        { name: 'AI Video Analytics Platform', href: '/ai-video-analytics-platform' },
        { name: 'AI Knowledge Graph Platform', href: '/ai-knowledge-graph-platform' },
        { name: 'AI Workflow Automation', href: '/ai-workflow-automation' },
        { name: 'AI Customer Support', href: '/ai-customer-support' },
        { name: 'AI Data Analytics', href: '/ai-data-analytics' }
      ]
    },
    {
      title: 'IT Services',
      icon: Cloud,
      services: [
        { name: 'AI Infrastructure Monitoring Pro', href: '/ai-infrastructure-monitoring' },
        { name: 'AI-Powered DevOps Platform', href: '/ai-powered-devops-platform' },
        { name: 'Quantum-Safe Security Solutions', href: '/quantum-safe-security-solutions' },
        { name: 'AI-Enhanced Cloud Security', href: '/ai-enhanced-cloud-security' },
        { name: 'Microservices Architecture Design', href: '/microservices-architecture-design' },
        { name: 'AI Data Pipeline Platform', href: '/ai-data-pipeline-platform' },
        { name: 'Zero-Trust Security Architecture', href: '/zero-trust-security-architecture' },
        { name: 'AI-Enhanced Monitoring Platform', href: '/ai-enhanced-monitoring-platform' },
        { name: 'Hybrid Cloud Management', href: '/hybrid-cloud-management' },
        { name: 'AI-Powered API Gateway', href: '/ai-powered-api-gateway' },
        { name: 'Container Security Platform', href: '/container-security-platform' },
        { name: 'AI-Enhanced Backup & Recovery', href: '/ai-enhanced-backup-recovery' },
        { name: 'Serverless Architecture Platform', href: '/serverless-architecture-platform' },
        { name: 'AI-Enhanced Network Management', href: '/ai-enhanced-network-management' },
        { name: 'Database Performance Optimization', href: '/database-performance-optimization' },
        { name: 'Cloud Cost Optimization Platform', href: '/cloud-cost-optimization-platform' },
        { name: 'AI-Enhanced Incident Response', href: '/ai-enhanced-incident-response' },
        { name: 'Infrastructure as Code Platform', href: '/infrastructure-as-code-platform' },
        { name: 'Cloud Migration & Setup', href: '/cloud-migration' },
        { name: 'Enterprise Cybersecurity', href: '/cybersecurity' }
      ]
    },
    {
      title: 'Micro SAAS',
      icon: Code,
      services: [
        { name: 'AI Quantum Financial Oracle', href: '/ai-quantum-financial-oracle' },
        { name: 'AI Neural Memory Assistant', href: '/ai-neural-memory-assistant' },
        { name: 'AI Holographic Workspace', href: '/ai-holographic-workspace' },
        { name: 'AI Project Manager Pro', href: '/ai-project-manager' },
        { name: 'AI Social Media Manager', href: '/ai-social-media-manager' },
        { name: 'AI Analytics Dashboard', href: '/ai-analytics-dashboard' },
        { name: 'AI Email Marketing Suite', href: '/ai-email-marketing' },
        { name: 'AI Customer Support Bot', href: '/ai-customer-support-bot' },
        { name: 'AI Voice Assistant Pro', href: '/ai-voice-assistant-pro' },
        { name: 'AI Document Scanner Pro', href: '/ai-document-scanner-pro' },
        { name: 'AI Meeting Transcriber Pro', href: '/ai-meeting-transcriber-pro' },
        { name: 'AI Website Builder Pro', href: '/ai-website-builder-pro' },
        { name: 'AI Password Manager Pro', href: '/ai-password-manager-pro' },
        { name: 'AI Time Tracking Pro', href: '/ai-time-tracking-pro' },
        { name: 'AI Translation Pro', href: '/ai-translation-pro' },
        { name: 'AI SEO Optimizer Pro', href: '/ai-seo-optimizer-pro' },
        { name: 'AI Contract Analyzer Pro', href: '/ai-contract-analyzer-pro' },
        { name: 'AI Performance Monitor Pro', href: '/ai-performance-monitor-pro' },
        { name: 'AI Compliance Manager Pro', href: '/ai-compliance-manager-pro' },
        { name: 'AI Financial Advisor', href: '/ai-financial-advisor' }
      ]
    },
    {
      title: 'Emerging Technologies',
      icon: Zap,
      services: [
        { name: 'Quantum Computing Solutions', href: '/ai-quantum-computing' },
        { name: 'AI Neural Interface Platform', href: '/ai-neural-interface-platform' },
        { name: 'AI Quantum Machine Learning', href: '/ai-quantum-machine-learning' },
        { name: 'Autonomous Systems', href: '/ai-autonomous-systems' },
        { name: 'Blockchain & Web3', href: '/ai-blockchain-solutions' },
        { name: 'IoT & Edge Computing', href: '/ai-edge-intelligence-platform' },
        { name: 'AR/VR Solutions', href: '/ai-holographic-workspace' },
        { name: 'Smart Cities', href: '/ai-smart-city-management' },
        { name: 'AI Energy Management', href: '/ai-energy-grid-management-pro' },
        { name: 'Digital Twins', href: '/ai-digital-twin-platform' },
        { name: 'AI Space Technology', href: '/ai-space-technology-pro' },
        { name: 'AI Climate Solutions', href: '/ai-climate-solutions-pro' },
        { name: 'AI Drug Discovery', href: '/ai-drug-discovery-pro' },
        { name: 'AI Agricultural Intelligence', href: '/ai-agricultural-intelligence-pro' },
        { name: 'AI Fashion Design', href: '/ai-fashion-design' },
        { name: 'AI Music Composition', href: '/ai-music-composition' },
        { name: 'Business Intelligence', href: '/ai-business-intelligence' },
        { name: 'Innovation Labs', href: '/innovation-labs' }
      ]
    },
    {
      title: 'Specialized Services',
      icon: Settings,
      services: [
        { name: 'AI Operations', href: '/ai-ops' },
        { name: 'Healthcare IT', href: '/healthcare-it' },
        { name: 'Financial IT', href: '/financial-it' },
        { name: 'Edge Computing', href: '/edge-computing' },
        { name: '5G Implementation', href: '/5g-implementation' },
        { name: 'IoT Platform', href: '/iot-platform' },
        { name: 'Cloud Migration', href: '/cloud-migration' },
        { name: 'Cybersecurity', href: '/cybersecurity' },
        { name: 'IT Infrastructure', href: '/it-infrastructure' },
        { name: 'Custom Development', href: '/custom-development' }
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
    { name: 'Investors', href: '/investors' },
    { name: 'Demo', href: '/demo' },
    { name: 'Consultation', href: '/consultation' }
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

  return (
    <footer className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 backdrop-blur-sm border-t border-cyan-400/30 relative overflow-hidden cyber-grid">
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
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-2">
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
          <div className="lg:col-span-3">
            <h3 className="text-white font-semibold text-lg mb-6 neon-glow-cyan">Our Services</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {serviceCategories.map((category, index) => (
                <div key={index}>
                  <div className="flex items-center space-x-2 mb-4">
                    <category.icon className="w-5 h-5 text-cyan-400" />
                    <h4 className="text-white font-medium">{category.title}</h4>
                  </div>
                  <ul className="space-y-2">
                    {category.services.map((service, serviceIndex) => (
                      <li key={serviceIndex}>
                        <Link 
                          to={service.href}
                          className="text-gray-300 hover:text-cyan-400 transition-colors text-sm"
                        >
                          {service.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-2">
            <div className="space-y-8">
              {/* Company */}
              <div>
                <h4 className="text-white font-semibold mb-4">Company</h4>
                <ul className="space-y-2">
                  {companyLinks.map((link, index) => (
                    <li key={index}>
                      <Link 
                        to={link.href}
                        className="text-gray-300 hover:text-cyan-400 transition-colors text-sm"
                      >
                        {link.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Support */}
              <div>
                <h4 className="text-white font-semibold mb-4">Support</h4>
                <ul className="space-y-2">
                  {supportLinks.map((link, index) => (
                    <li key={index}>
                      <Link 
                        to={link.href}
                        className="text-gray-300 hover:text-cyan-400 transition-colors text-sm"
                      >
                        {link.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Legal */}
              <div>
                <h4 className="text-white font-semibold mb-4">Legal</h4>
                <ul className="space-y-2">
                  {legalLinks.map((link, index) => (
                    <li key={index}>
                      <Link 
                        to={link.href}
                        className="text-gray-300 hover:text-cyan-400 transition-colors text-sm"
                      >
                        {link.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Newsletter Signup */}
        <div className="mt-12 pt-8 border-t border-gray-700">
          <div className="max-w-2xl mx-auto text-center">
            <h3 className="text-white font-semibold text-lg mb-4 neon-text cyber-text">
              Stay Updated with Our Latest Innovations
            </h3>
            <p className="text-gray-300 mb-6">
              Get the latest news about AI breakthroughs, quantum computing advances, 
              technology updates, and industry insights delivered to your inbox.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email address"
                className="flex-1 px-4 py-3 bg-slate-800 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20 transition-all duration-300"
              />
<button className="bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-600 hover:to-purple-700 text-white font-bold py-3 px-6 rounded-lg transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-cyan-500/25 inline-flex items-center cyber-button neon-glow">
                Subscribe
                <ArrowRight className="w-4 h-4 ml-2" />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-700 bg-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-gray-400 text-sm">
              © {currentYear} Zion Tech Group. All rights reserved.
            </div>
            
            <div className="flex items-center space-x-6 text-sm text-gray-400">
              <div className="flex items-center space-x-2">
                <Shield className="w-4 h-4 text-green-400" />
                <span>SSL Secured</span>
              </div>
              <div className="flex items-center space-x-2">
                <Award className="w-4 h-4 text-yellow-400" />
                <span>ISO 27001 Certified</span>
              </div>
              <div className="flex items-center space-x-2">
                <BarChart className="w-4 h-4 text-blue-400" />
                <span>99.9% Uptime</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
});

Footer.displayName = 'Footer';

export default Footer;
