import React, { memo } from 'react';
import { Link } from 'react-router-dom';
import { 
  Phone, 
  Mail, 
  MapPin, 
  Clock, 
  Award, 
  Shield, 
  Zap, 
  ArrowRight, 
  Brain, 
  Cloud, 
  Code, 
  BarChart, 
  Users, 
  Globe, 
  Facebook, 
  Twitter, 
  Linkedin, 
  Instagram, 
  Youtube, 
  Github, 
  MessageSquare, 
  Star, 
  TrendingUp, 
  CheckCircle,
  Sparkles,
  Rocket,
  Target,
  Settings,
  Database,
  Cpu,
  Lock,
  Heart,
  Award as AwardIcon,
  Shield as ShieldIcon,
  Zap as ZapIcon
} from 'lucide-react';

const EnhancedFooter: React.FC = memo(() => {
  const currentYear = new Date().getFullYear();

  const serviceCategories = [
    {
      title: 'AI Services',
      icon: Brain,
      color: 'text-purple-400',
      services: [
        { name: 'AI Workflow Automation', href: '/ai-workflow-automation' },
        { name: 'AI Customer Support', href: '/ai-customer-support' },
        { name: 'AI Data Analytics', href: '/ai-data-analytics' },
        { name: 'AI Content Generation', href: '/ai-content-generation' },
        { name: 'AI Healthcare Solutions', href: '/ai-healthcare' },
        { name: 'AI Fintech Platform', href: '/ai-fintech' },
        { name: 'AI E-commerce Optimization', href: '/ai-ecommerce-solutions' },
        { name: 'AI Computer Vision', href: '/ai-computer-vision' }
      ]
    },
    {
      title: 'IT Services',
      icon: Cloud,
      color: 'text-blue-400',
      services: [
        { name: 'Cloud Migration & Setup', href: '/cloud-migration' },
        { name: 'IT Infrastructure Design', href: '/it-infrastructure' },
        { name: 'Cybersecurity Suite', href: '/cybersecurity' },
        { name: 'Database Management', href: '/database-management' },
        { name: '24/7 IT Support', href: '/it-support' },
        { name: 'System Administration', href: '/system-administration' },
        { name: 'Custom Software Development', href: '/custom-development' },
        { name: 'DevOps & CI/CD', href: '/devops-cicd' }
      ]
    },
    {
      title: 'Micro SAAS',
      icon: Code,
      color: 'text-green-400',
      services: [
        { name: 'AI Project Manager Pro', href: '/ai-project-manager-pro' },
        { name: 'AI Social Media Manager', href: '/ai-social-media-manager' },
        { name: 'AI Analytics Dashboard', href: '/ai-analytics-dashboard' },
        { name: 'AI Customer Support Bot', href: '/ai-customer-support-bot' },
        { name: 'AI Content Studio', href: '/ai-content-studio' },
        { name: 'AI Email Marketing Suite', href: '/ai-email-marketing-suite' },
        { name: 'AI Workflow Automation', href: '/ai-workflow-automation' },
        { name: 'AI Financial Advisor', href: '/ai-financial-advisor' }
      ]
    },
    {
      title: 'Specialized',
      icon: Zap,
      color: 'text-orange-400',
      services: [
        { name: 'Quantum Computing Solutions', href: '/quantum-computing' },
        { name: 'Autonomous Systems', href: '/autonomous-systems' },
        { name: 'Blockchain & Web3', href: '/blockchain-web3' },
        { name: 'IoT & Edge Computing', href: '/iot-edge-computing' },
        { name: 'Business Intelligence', href: '/business-intelligence' },
        { name: 'Robotics Solutions', href: '/robotics' }
      ]
    }
  ];

  const companyLinks = [
    { name: 'About Us', href: '/about' },
    { name: 'Our Team', href: '/team' },
    { name: 'Careers', href: '/careers' },
    { name: 'Case Studies', href: '/case-studies' },
    { name: 'Blog', href: '/blog' },
    { name: 'News', href: '/news' }
  ];

  const supportLinks = [
    { name: 'Contact Us', href: '/contact' },
    { name: 'Support Center', href: '/support' },
    { name: 'Documentation', href: '/docs' },
    { name: 'API Reference', href: '/api-docs' },
    { name: 'Status Page', href: '/status' },
    { name: 'System Health', href: '/health' }
  ];

  const legalLinks = [
    { name: 'Privacy Policy', href: '/privacy' },
    { name: 'Terms of Service', href: '/terms' },
    { name: 'Cookie Policy', href: '/cookies' },
    { name: 'GDPR Compliance', href: '/gdpr' },
    { name: 'Security', href: '/security' },
    { name: 'Compliance', href: '/compliance' }
  ];

  const socialLinks = [
    { name: 'LinkedIn', href: 'https://linkedin.com/company/zion-tech-group', icon: Linkedin },
    { name: 'Twitter', href: 'https://twitter.com/ziontechgroup', icon: Twitter },
    { name: 'GitHub', href: 'https://github.com/zion-tech-group', icon: Github },
    { name: 'YouTube', href: 'https://youtube.com/@ziontechgroup', icon: Youtube }
  ];

  const stats = [
    { icon: Users, value: '500+', label: 'Enterprise Clients' },
    { icon: Award, value: '99.9%', label: 'Uptime SLA' },
    { icon: TrendingUp, value: '300%', label: 'Average ROI' },
    { icon: Shield, value: '24/7', label: 'Security Monitoring' }
  ];

  return (
    <footer className="bg-slate-900/95 backdrop-blur-sm border-t border-cyan-400/30 neural-network-advanced">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-12">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <div className="flex items-center space-x-3 mb-8">
              <div className="w-12 h-12 bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 rounded-lg flex items-center justify-center cyber-pulse-advanced">
                <Zap className="w-7 h-7 text-white" />
              </div>
              <span className="text-white font-bold text-2xl neon-text-advanced cyber-text-3d">
                Zion Tech Group
              </span>
            </div>
            
            <p className="text-gray-300 mb-8 leading-relaxed text-lg">
              Leading provider of AI-powered enterprise solutions, quantum computing, 
              autonomous systems, and digital transformation services. Transforming businesses 
              with cutting-edge technology and innovative solutions.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-4 mb-8">
              {stats.map((stat, index) => (
                <div key={index} className="text-center cyber-card-advanced p-4 rounded-lg">
                  <stat.icon className="w-6 h-6 text-cyan-400 mx-auto mb-2" />
                  <div className="text-2xl font-bold text-white neon-text-advanced">{stat.value}</div>
                  <div className="text-xs text-gray-400">{stat.label}</div>
                </div>
              ))}
            </div>

            {/* Contact Info */}
            <div className="space-y-4 mb-8">
              <div className="flex items-center space-x-3 text-gray-300 group">
                <Phone className="w-5 h-5 text-cyan-400 group-hover:text-cyan-300 transition-colors" />
                <a href="tel:+13024640950" className="hover:text-cyan-400 transition-colors text-lg font-medium">
                  +1 (302) 464-0950
                </a>
              </div>
              <div className="flex items-center space-x-3 text-gray-300 group">
                <Mail className="w-5 h-5 text-cyan-400 group-hover:text-cyan-300 transition-colors" />
                <a href="mailto:kleber@ziontechgroup.com" className="hover:text-cyan-400 transition-colors text-lg font-medium">
                  kleber@ziontechgroup.com
                </a>
              </div>
              <div className="flex items-start space-x-3 text-gray-300">
                <MapPin className="w-5 h-5 text-cyan-400 mt-1" />
                <div className="text-lg">
                  <div className="font-medium">364 E Main St STE 1008</div>
                  <div>Middletown, DE 19709</div>
                </div>
              </div>
              <div className="flex items-center space-x-3 text-gray-300">
                <Clock className="w-5 h-5 text-cyan-400" />
                <div className="text-lg">
                  <div className="font-medium">Mon - Fri: 9:00 AM - 6:00 PM EST</div>
                  <div className="text-sm text-gray-400">24/7 Emergency Support</div>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <a 
                  key={index}
                  href={social.href} 
                  className="w-10 h-10 bg-slate-800 rounded-lg flex items-center justify-center text-gray-400 hover:text-cyan-400 hover:bg-cyan-400/10 transition-all duration-300 group"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <social.icon className="w-5 h-5 group-hover:scale-110 transition-transform" />
                </a>
              ))}
            </div>
          </div>

          {/* Services */}
          <div className="lg:col-span-2">
            <h3 className="text-white font-bold text-2xl mb-8 neon-text-advanced cyber-text-3d">
              Our Services
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {serviceCategories.map((category, index) => (
                <div key={index} className="space-y-4">
                  <div className="flex items-center space-x-3 mb-4">
                    <category.icon className={`w-6 h-6 ${category.color}`} />
                    <h4 className="text-white font-bold text-lg">{category.title}</h4>
                  </div>
                  <ul className="space-y-3">
                    {category.services.map((service, serviceIndex) => (
                      <li key={serviceIndex}>
                        <Link 
                          to={service.href}
                          className="text-gray-300 hover:text-cyan-400 transition-colors text-sm font-medium group flex items-center"
                        >
                          <ArrowRight className="w-3 h-3 mr-2 opacity-0 group-hover:opacity-100 transition-opacity" />
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
          <div className="lg:col-span-1">
            <div className="space-y-8">
              {/* Company */}
              <div>
                <h4 className="text-white font-bold text-lg mb-6 neon-text-advanced">Company</h4>
                <ul className="space-y-3">
                  {companyLinks.map((link, index) => (
                    <li key={index}>
                      <Link 
                        to={link.href}
                        className="text-gray-300 hover:text-cyan-400 transition-colors text-sm font-medium group flex items-center"
                      >
                        <ArrowRight className="w-3 h-3 mr-2 opacity-0 group-hover:opacity-100 transition-opacity" />
                        {link.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Support */}
              <div>
                <h4 className="text-white font-bold text-lg mb-6 neon-text-advanced">Support</h4>
                <ul className="space-y-3">
                  {supportLinks.map((link, index) => (
                    <li key={index}>
                      <Link 
                        to={link.href}
                        className="text-gray-300 hover:text-cyan-400 transition-colors text-sm font-medium group flex items-center"
                      >
                        <ArrowRight className="w-3 h-3 mr-2 opacity-0 group-hover:opacity-100 transition-opacity" />
                        {link.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Legal */}
              <div>
                <h4 className="text-white font-bold text-lg mb-6 neon-text-advanced">Legal</h4>
                <ul className="space-y-3">
                  {legalLinks.map((link, index) => (
                    <li key={index}>
                      <Link 
                        to={link.href}
                        className="text-gray-300 hover:text-cyan-400 transition-colors text-sm font-medium group flex items-center"
                      >
                        <ArrowRight className="w-3 h-3 mr-2 opacity-0 group-hover:opacity-100 transition-opacity" />
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
        <div className="mt-16 pt-8 border-t border-gray-700">
          <div className="max-w-4xl mx-auto text-center">
            <div className="flex items-center justify-center space-x-3 mb-6">
              <Sparkles className="w-8 h-8 text-cyan-400" />
              <h3 className="text-white font-bold text-2xl neon-text-advanced cyber-text-3d">
                Stay Updated with Our Latest Innovations
              </h3>
            </div>
            <p className="text-gray-300 mb-8 text-lg max-w-2xl mx-auto">
              Get the latest news about AI breakthroughs, technology updates, and industry insights. 
              Join thousands of professionals who trust our expertise.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email address"
                className="flex-1 px-6 py-4 bg-slate-800/50 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20 backdrop-blur-sm text-lg"
              />
              <button className="cyber-button-advanced px-8 py-4 rounded-lg font-medium hover:scale-105 transition-transform group">
                <Rocket className="w-5 h-5 mr-2 inline group-hover:rotate-12 transition-transform" />
                Subscribe
                <ArrowRight className="w-5 h-5 ml-2 inline group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
            <div className="mt-6 text-sm text-gray-400">
              <p>✓ No spam, ever. Unsubscribe anytime.</p>
              <p>✓ Weekly insights and exclusive content.</p>
              <p>✓ Early access to new features and services.</p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-700 bg-slate-900/50 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0">
            <div className="text-gray-400 text-sm">
              © {currentYear} Zion Tech Group. All rights reserved. | 
              <span className="ml-2 text-cyan-400">Transforming the future with AI</span>
            </div>
            
            <div className="flex items-center space-x-8 text-sm text-gray-400">
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
              <div className="flex items-center space-x-2">
                <Heart className="w-4 h-4 text-red-400" />
                <span>Made with ❤️</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
});

EnhancedFooter.displayName = 'EnhancedFooter';

export default EnhancedFooter;