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
  Rocket,
  Sparkles,
  Settings,
  Target,
  Cpu,
  Database,
  Lock,
  FileText,
  Calendar,
  Phone as PhoneIcon,
  Mail as MailIcon,
  MapPin as Location,
  Clock as ClockIcon,
  Award as AwardIcon,
  Shield as ShieldIcon,
  Zap as ZapIcon,
  ArrowRight as ArrowIcon,
  Brain as BrainIcon,
  Cloud as CloudIcon,
  Code as CodeIcon,
  BarChart as BarChartIcon,
  Users as UsersIcon,
  Globe as GlobeIcon,
  MessageSquare as MessageSquareIcon,
  Star as StarIcon,
  TrendingUp as TrendingUpIcon,
  CheckCircle as CheckIcon,
  Rocket as RocketIcon,
  Sparkles as SparklesIcon,
  Settings as SettingsIcon,
  Target as TargetIcon,
  Cpu as CpuIcon,
  Database as DatabaseIcon,
  Lock as LockIcon,
  FileText as FileTextIcon,
  Calendar as CalendarIcon
} from 'lucide-react';

const Footer: React.FC = memo(() => {
  const currentYear = new Date().getFullYear();

  const serviceCategories = [
    {
      title: 'AI Services',
      icon: Brain,
      color: 'text-purple-400',
      bgColor: 'bg-purple-500/10',
      services: [
        { name: 'AI Workflow Automation', href: '/ai-workflow-automation' },
        { name: 'AI Customer Support', href: '/ai-customer-support' },
        { name: 'AI Sales Automation', href: '/ai-sales-automation' },
        { name: 'AI Data Analytics', href: '/ai-data-analytics' },
        { name: 'AI Business Intelligence', href: '/ai-business-intelligence' },
        { name: 'AI Content Generation', href: '/ai-content-generation' },
        { name: 'AI Email Marketing', href: '/ai-email-marketing' },
        { name: 'AI Healthcare Solutions', href: '/ai-healthcare' },
        { name: 'AI Fintech Platform', href: '/ai-fintech' },
        { name: 'AI E-commerce Optimization', href: '/ai-ecommerce-solutions' },
        { name: 'AI Manufacturing Intelligence', href: '/ai-manufacturing' },
        { name: 'AI Computer Vision', href: '/ai-computer-vision' },
        { name: 'AI Natural Language Processing', href: '/ai-nlp' },
        { name: 'AI Machine Learning Platform', href: '/ai-ml-platform' },
        { name: 'AI Quantum Computing', href: '/ai-quantum-computing' }
      ]
    },
    {
      title: 'IT Services',
      icon: Cloud,
      color: 'text-blue-400',
      bgColor: 'bg-blue-500/10',
      services: [
        { name: 'Cloud Migration & Setup', href: '/cloud-migration' },
        { name: 'IT Infrastructure Design', href: '/it-infrastructure' },
        { name: 'Database Management', href: '/database-management' },
        { name: 'Cloud Cost Optimization', href: '/cloud-optimization' },
        { name: 'Enterprise Cybersecurity', href: '/cybersecurity' },
        { name: 'Compliance Management', href: '/compliance-management' },
        { name: 'Security Awareness Training', href: '/security-training' },
        { name: 'Zero Trust Security', href: '/zero-trust' },
        { name: '24/7 IT Support', href: '/it-support' },
        { name: 'System Administration', href: '/system-administration' },
        { name: 'IT Strategic Consulting', href: '/it-consulting' },
        { name: 'IT Asset Management', href: '/asset-management' },
        { name: 'Custom Software Development', href: '/custom-development' },
        { name: 'System Integration & APIs', href: '/system-integration' },
        { name: 'DevOps & CI/CD', href: '/devops-cicd' },
        { name: 'Legacy System Modernization', href: '/legacy-modernization' },
        { name: 'Network Design & Implementation', href: '/network-design' },
        { name: 'Disaster Recovery & Backup', href: '/disaster-recovery' },
        { name: 'IT Performance Monitoring', href: '/performance-monitoring' }
      ]
    },
    {
      title: 'Micro SAAS',
      icon: Code,
      color: 'text-green-400',
      bgColor: 'bg-green-500/10',
      services: [
        { name: 'AI Project Manager Pro', href: '/ai-project-manager' },
        { name: 'AI Smart Calendar Pro', href: '/ai-smart-calendar' },
        { name: 'AI Content Writer Pro', href: '/ai-content-writer' },
        { name: 'AI Video Generator Pro', href: '/ai-video-generator' },
        { name: 'AI Social Media Manager Pro', href: '/ai-social-media-manager' },
        { name: 'AI Email Marketing Suite', href: '/ai-email-marketing' },
        { name: 'AI CRM Assistant Pro', href: '/ai-crm-assistant' },
        { name: 'AI Financial Analyzer Pro', href: '/ai-financial-analyzer' },
        { name: 'AI Code Assistant Pro', href: '/ai-code-assistant' },
        { name: 'AI Cybersecurity Monitor Pro', href: '/ai-cybersecurity-monitor' },
        { name: 'AI Password Manager Pro', href: '/ai-password-manager' },
        { name: 'AI Voice Cloning Studio Pro', href: '/ai-voice-cloning-studio' }
      ]
    },
    {
      title: 'Specialized Solutions',
      icon: Zap,
      color: 'text-orange-400',
      bgColor: 'bg-orange-500/10',
      services: [
        { name: 'Quantum Computing Solutions', href: '/quantum-computing' },
        { name: 'Autonomous Systems', href: '/autonomous-systems' },
        { name: 'Blockchain & Web3', href: '/blockchain-web3' },
        { name: 'IoT & Edge Computing', href: '/iot-edge-computing' },
        { name: 'Business Intelligence', href: '/business-intelligence' },
        { name: 'Robotics Solutions', href: '/robotics' },
        { name: 'Space Technology', href: '/space-technology' },
        { name: 'Climate Solutions', href: '/climate-solutions' },
        { name: 'Financial Crime Detection', href: '/financial-crime-detection' },
        { name: 'Supply Chain Optimization', href: '/supply-chain-optimization' },
        { name: 'Energy Grid Management', href: '/energy-grid-management' },
        { name: 'Agricultural Intelligence', href: '/agricultural-intelligence' },
        { name: 'Legal Research AI', href: '/legal-research-ai' }
      ]
    }
  ];

  const companyLinks = [
    { name: 'About Us', href: '/about', icon: Users },
    { name: 'Our Team', href: '/team', icon: Users },
    { name: 'Careers', href: '/careers', icon: Briefcase },
    { name: 'Case Studies', href: '/case-studies', icon: BarChart },
    { name: 'Blog', href: '/blog', icon: FileText },
    { name: 'Pricing', href: '/pricing', icon: DollarSign }
  ];

  const supportLinks = [
    { name: 'Contact Us', href: '/contact', icon: MessageSquare },
    { name: 'Support Center', href: '/support', icon: Settings },
    { name: 'Documentation', href: '/docs', icon: FileText },
    { name: 'API Reference', href: '/api-docs', icon: Code },
    { name: 'Status Page', href: '/status', icon: Activity },
    { name: 'System Health', href: '/health', icon: Shield }
  ];

  const legalLinks = [
    { name: 'Privacy Policy', href: '/privacy', icon: Lock },
    { name: 'Terms of Service', href: '/terms', icon: FileText },
    { name: 'Cookie Policy', href: '/cookies', icon: Settings },
    { name: 'GDPR Compliance', href: '/gdpr', icon: Shield },
    { name: 'Security', href: '/security', icon: Lock },
    { name: 'Compliance', href: '/compliance', icon: CheckCircle }
  ];

  const socialLinks = [
    { name: 'LinkedIn', href: 'https://linkedin.com/company/zion-tech-group', icon: Linkedin },
    { name: 'Twitter', href: 'https://twitter.com/ziontechgroup', icon: Twitter },
    { name: 'GitHub', href: 'https://github.com/zion-tech-group', icon: Github },
    { name: 'YouTube', href: 'https://youtube.com/@ziontechgroup', icon: Youtube }
  ];

  return (
    <footer className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 backdrop-blur-sm border-t border-cyan-400/30 relative overflow-hidden">
      {/* Futuristic Background Effects */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(0,255,255,0.05)_0%,transparent_50%)] animate-pulse" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(139,92,246,0.05)_0%,transparent_50%)] animate-pulse" style={{ animationDelay: '1s' }} />
      <div className="absolute inset-0 bg-[linear-gradient(rgba(0,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(0,255,255,0.02)_1px,transparent_1px)] bg-[length:50px_50px]" />
      
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 relative z-10">
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
              <div className="flex items-center space-x-3 text-gray-300 hover:text-cyan-400 transition-colors">
                <Phone className="w-4 h-4 text-cyan-400" />
                <a href="tel:+13024640950" className="hover:text-cyan-400 transition-colors">
                  +1 (302) 464-0950
                </a>
              </div>
              <div className="flex items-center space-x-3 text-gray-300 hover:text-cyan-400 transition-colors">
                <Mail className="w-4 h-4 text-cyan-400" />
                <a href="mailto:kleber@ziontechgroup.com" className="hover:text-cyan-400 transition-colors">
                  kleber@ziontechgroup.com
                </a>
              </div>
              <div className="flex items-start space-x-3 text-gray-300">
                <MapPin className="w-4 h-4 text-cyan-400 mt-0.5" />
                <div>
                  <div>364 E Main St STE 1008</div>
                  <div>Middletown, DE 19709</div>
                </div>
              </div>
              <div className="flex items-center space-x-3 text-gray-300">
                <Clock className="w-4 h-4 text-cyan-400" />
                <div>
                  <div>Mon - Fri: 9:00 AM - 6:00 PM EST</div>
                  <div>24/7 Emergency Support</div>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <a 
                  key={index}
                  href={social.href} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-cyan-400 transition-colors hover:scale-110 transform duration-300"
                  aria-label={social.name}
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Services */}
          <div className="lg:col-span-2">
            <h3 className="text-white font-semibold text-lg mb-6 neon-text">Our Services</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {serviceCategories.map((category, index) => (
                <div key={index}>
                  <div className="flex items-center space-x-2 mb-4">
                    <category.icon className={`w-5 h-5 ${category.color}`} />
                    <h4 className="text-white font-medium">{category.title}</h4>
                  </div>
                  <ul className="space-y-2">
                    {category.services.slice(0, 8).map((service, serviceIndex) => (
                      <li key={serviceIndex}>
                        <Link 
                          to={service.href}
                          className="text-gray-300 hover:text-cyan-400 transition-colors text-sm hover:translate-x-1 transform duration-300"
                        >
                          {service.name}
                        </Link>
                      </li>
                    ))}
                    {category.services.length > 8 && (
                      <li>
                        <Link 
                          to={`/${category.title.toLowerCase().replace(/\s+/g, '-')}`}
                          className="text-cyan-400 hover:text-cyan-300 transition-colors text-sm font-medium"
                        >
                          View All {category.title} →
                        </Link>
                      </li>
                    )}
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
                <h4 className="text-white font-semibold mb-4 flex items-center">
                  <Users className="w-4 h-4 mr-2 text-cyan-400" />
                  Company
                </h4>
                <ul className="space-y-2">
                  {companyLinks.map((link, index) => (
                    <li key={index}>
                      <Link 
                        to={link.href}
                        className="text-gray-300 hover:text-cyan-400 transition-colors text-sm flex items-center hover:translate-x-1 transform duration-300"
                      >
                        <link.icon className="w-3 h-3 mr-2" />
                        {link.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Support */}
              <div>
                <h4 className="text-white font-semibold mb-4 flex items-center">
                  <Settings className="w-4 h-4 mr-2 text-cyan-400" />
                  Support
                </h4>
                <ul className="space-y-2">
                  {supportLinks.map((link, index) => (
                    <li key={index}>
                      <Link 
                        to={link.href}
                        className="text-gray-300 hover:text-cyan-400 transition-colors text-sm flex items-center hover:translate-x-1 transform duration-300"
                      >
                        <link.icon className="w-3 h-3 mr-2" />
                        {link.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Legal */}
              <div>
                <h4 className="text-white font-semibold mb-4 flex items-center">
                  <Shield className="w-4 h-4 mr-2 text-cyan-400" />
                  Legal
                </h4>
                <ul className="space-y-2">
                  {legalLinks.map((link, index) => (
                    <li key={index}>
                      <Link 
                        to={link.href}
                        className="text-gray-300 hover:text-cyan-400 transition-colors text-sm flex items-center hover:translate-x-1 transform duration-300"
                      >
                        <link.icon className="w-3 h-3 mr-2" />
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
            <h3 className="text-white font-semibold text-lg mb-4 neon-text flex items-center justify-center">
              <Sparkles className="w-5 h-5 mr-2 text-cyan-400" />
              Stay Updated with Our Latest Innovations
            </h3>
            <p className="text-gray-300 mb-6">
              Get the latest news about AI breakthroughs, technology updates, and industry insights delivered to your inbox.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 bg-slate-800 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20 cyber-input"
              />
              <button className="bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-600 hover:to-purple-700 text-white font-bold py-3 px-6 rounded-lg transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-cyan-500/25 inline-flex items-center glow-button">
                <Rocket className="w-4 h-4 mr-2" />
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
              <div className="flex items-center space-x-2">
                <CheckCircle className="w-4 h-4 text-cyan-400" />
                <span>GDPR Compliant</span>
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