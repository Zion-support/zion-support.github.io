import React from 'react';
import { Phone, Mail, MapPin, Brain, Cloud, Shield, Code, BarChart, Users, Zap, ArrowRight, Globe, Database, Settings, Target, MessageSquare, Eye, Cpu, Lock, BarChart3, FileText, Search, Bot, Calculator, TrendingUp, CheckCircle, Star, Award, Clock, DollarSign, BarChart3 as ChartIcon, Mic, Headphones, Monitor, Laptop, Server, HardDrive, Wifi, Bluetooth, Battery, Cpu as Processor, Database as DataIcon, Cloud as CloudIcon, Code as CodeIcon, Smartphone as MobileIcon, Settings as SettingsIcon, FileText as DocumentIcon, Search as SearchIcon, Bot as BotIcon, Palette as DesignIcon, Camera as CameraIcon, Music as MusicIcon, Video as VideoIcon, Gamepad2 as GamingIcon, ShoppingCart as CartIcon, CreditCard as PaymentIcon, Building as BuildingIcon, Factory as FactoryIcon, Car as CarIcon, Plane as PlaneIcon, Ship as ShipIcon, Train as TrainIcon, Home as HomeIcon, Heart as HealthIcon, Stethoscope as MedicalIcon, GraduationCap as EducationIcon, Briefcase as BusinessIcon, Wrench as ToolIcon, Hammer as ConstructionIcon, Paintbrush as ArtIcon, Scissors as CutIcon, BookOpen as BookIcon, Calculator as CalcIcon, Calendar as CalendarIcon, Clock3 as TimeIcon, Compass as NavigationIcon, Navigation as NavIcon, PieChart as ChartIcon, TrendingDown as DownIcon, Activity as ActivityIcon, Atom as ScienceIcon, Truck, Facebook, Twitter, Linkedin, Instagram, Youtube, Github, LinkedinIcon } from 'lucide-react';

const Footer: React.FC = () => {
  const microSaasServices = [
    { name: 'AI Project Manager Pro', url: '/ai-project-manager', description: 'Intelligent project planning', icon: BarChart, category: 'AI & ML' },
    { name: 'AI Writing Assistant Pro', url: '/ai-writing-assistant', description: 'Advanced content creation', icon: FileText, category: 'AI & ML' },
    { name: 'AI CRM Intelligence', url: '/ai-crm', description: 'Smart customer management', icon: Users, category: 'AI & ML' },
    { name: 'AI Healthcare Assistant', url: '/ai-healthcare', description: 'Medical AI solutions', icon: Heart, category: 'AI & ML' },
    { name: 'AI Fintech Analyzer', url: '/ai-fintech', description: 'Financial AI insights', icon: CreditCard, category: 'AI & ML' },
    { name: 'AI Cybersecurity Shield', url: '/ai-cybersecurity', description: 'AI-powered security', icon: Shield, category: 'AI & ML' },
    { name: 'AI Marketing Automation', url: '/ai-marketing', description: 'Smart marketing campaigns', icon: Target, category: 'AI & ML' },
    { name: 'AI Chatbot Builder', url: '/ai-chatbot-builder', description: 'Intelligent chatbots', icon: Bot, category: 'AI & ML' },
    { name: 'AI Data Analytics Pro', url: '/ai-data-analytics', description: 'Advanced analytics', icon: BarChart3, category: 'AI & ML' },
    { name: 'AI Social Media Manager', url: '/ai-social-media-manager', description: 'Automated social media', icon: MessageSquare, category: 'AI & ML' },
    { name: 'AI Task Manager Pro', url: '/task-manager-pro', description: 'Smart task management', icon: CheckCircle, category: 'Productivity' },
    { name: 'AI Expense Tracker', url: '/expense-tracker', description: 'AI expense management', icon: Calculator, category: 'Productivity' },
    { name: 'AI Lead Generation', url: '/ai-lead-generation', description: 'Automated lead gen', icon: Target, category: 'Sales' },
    { name: 'AI Document Processor', url: '/ai-document-processing', description: 'Smart document analysis', icon: FileText, category: 'Automation' },
    { name: 'AI SEO Optimizer', url: '/ai-seo-optimizer', description: 'SEO automation', icon: Search, category: 'Marketing' },
    { name: 'AI E-commerce Assistant', url: '/ai-ecommerce-solutions', description: 'E-commerce optimization', icon: ShoppingCart, category: 'E-commerce' }
  ];

  const aiServices = [
    { name: 'Machine Learning Solutions', url: '/machine-learning', description: 'Custom ML models', icon: Brain, category: 'Core AI' },
    { name: 'Natural Language Processing', url: '/nlp', description: 'Text analysis & understanding', icon: MessageSquare, category: 'Core AI' },
    { name: 'Computer Vision', url: '/computer-vision', description: 'Image & video analysis', icon: Eye, category: 'Core AI' },
    { name: 'AI Automation', url: '/ai-automation', description: 'Process automation', icon: Zap, category: 'Automation' },
    { name: 'Quantum AI Computing', url: '/quantum-ai', description: 'Next-gen algorithms', icon: Cpu, category: 'Advanced' },
    { name: 'AI Cybersecurity', url: '/ai-cybersecurity', description: 'AI-powered security', icon: Shield, category: 'Security' },
    { name: 'AI Healthcare Solutions', url: '/ai-healthcare', description: 'Medical AI applications', icon: Stethoscope, category: 'Healthcare' },
    { name: 'AI Fintech Solutions', url: '/ai-fintech', description: 'Financial AI services', icon: CreditCard, category: 'Finance' },
    { name: 'AI Mobile App Development', url: '/ai-mobile-app-development', description: 'Smart mobile apps', icon: MobileIcon, category: 'Development' },
    { name: 'AI CRM Solutions', url: '/ai-crm', description: 'Intelligent customer management', icon: Users, category: 'Sales' },
    { name: 'AI Email Assistant', url: '/ai-email-assistant', description: 'Smart email management', icon: Mail, category: 'Productivity' },
    { name: 'AI Scheduler Pro', url: '/ai-scheduler', description: 'Intelligent scheduling', icon: Calendar, category: 'Productivity' }
  ];

  const itServices = [
    { name: 'Cloud Infrastructure Management', url: '/cloud-services', description: 'AWS/Azure/GCP setup', icon: Cloud, category: 'Cloud' },
    { name: 'Cybersecurity Solutions', url: '/cybersecurity', description: 'Advanced security solutions', icon: Shield, category: 'Security' },
    { name: 'DevOps & CI/CD', url: '/devops', description: 'Automated workflows', icon: Settings, category: 'Development' },
    { name: 'Database Services', url: '/database-services', description: 'Database optimization', icon: Database, category: 'Data' },
    { name: 'Network Infrastructure', url: '/network-infrastructure', description: 'Enterprise networking', icon: Wifi, category: 'Network' },
    { name: 'IT Support & Helpdesk', url: '/it-support', description: '24/7 technical support', icon: Users, category: 'Support' },
    { name: 'IT Consulting', url: '/it-consulting', description: 'Strategic IT guidance', icon: Briefcase, category: 'Consulting' },
    { name: 'Cloud Migration', url: '/cloud-migration', description: 'Seamless cloud migration', icon: Cloud, category: 'Cloud' },
    { name: 'Compliance & Governance', url: '/compliance', description: 'Regulatory compliance', icon: FileText, category: 'Compliance' },
    { name: 'Developer Tools', url: '/developer-tools', description: 'Advanced dev tools', icon: Code, category: 'Development' },
    { name: 'Marketing Tools', url: '/marketing-tools', description: 'Marketing automation', icon: Target, category: 'Marketing' },
    { name: 'Productivity Solutions', url: '/productivity', description: 'Enterprise productivity', icon: BarChart, category: 'Productivity' }
  ];

  const specializedServices = [
    { name: 'Quantum Computing', url: '/quantum-computing', description: 'Quantum algorithms', icon: Cpu, category: 'Advanced' },
    { name: 'Autonomous Systems', url: '/autonomous-systems', description: 'Self-managing systems', icon: Settings, category: 'Advanced' },
    { name: 'Blockchain & Web3', url: '/blockchain', description: 'Decentralized solutions', icon: Lock, category: 'Web3' },
    { name: 'IoT & Edge Computing', url: '/iot-edge', description: 'Connected devices', icon: Globe, category: 'IoT' },
    { name: 'Business Intelligence', url: '/business-intelligence', description: 'Data-driven insights', icon: BarChart, category: 'Analytics' },
    { name: 'Robotics Solutions', url: '/robotics', description: 'Intelligent automation', icon: Settings, category: 'Robotics' },
    { name: 'Enterprise Solutions', url: '/enterprise', description: 'Enterprise-grade solutions', icon: Building, category: 'Enterprise' },
    { name: 'Analytics Tools', url: '/analytics-tools', description: 'Advanced analytics', icon: BarChart3, category: 'Analytics' },
    { name: 'Business Apps', url: '/business-apps', description: 'Custom business apps', icon: Briefcase, category: 'Business' },
    { name: 'Smart Analytics', url: '/smart-analytics', description: 'Intelligent analytics', icon: TrendingUp, category: 'Analytics' }
  ];

  const companyLinks = [
    { name: 'About Us', url: '/about', description: 'Our story and mission' },
    { name: 'Our Team', url: '/team', description: 'Meet our experts' },
    { name: 'Careers', url: '/careers', description: 'Join our team' },
    { name: 'Case Studies', url: '/case-studies', description: 'Success stories' },
    { name: 'Blog', url: '/blog', description: 'Latest insights' },
    { name: 'News', url: '/news', description: 'Company updates' },
    { name: 'Pricing', url: '/pricing', description: 'Service plans' },
    { name: 'Demo', url: '/demo', description: 'See us in action' }
  ];

  const supportLinks = [
    { name: 'Contact Us', url: '/contact', description: 'Get in touch' },
    { name: 'Support Center', url: '/support', description: 'Help & support' },
    { name: 'Documentation', url: '/docs', description: 'Technical docs' },
    { name: 'API Reference', url: '/api-docs', description: 'API documentation' },
    { name: 'Status Page', url: '/status', description: 'System status' },
    { name: 'System Health', url: '/system-status', description: 'Health monitoring' }
  ];

  const legalLinks = [
    { name: 'Privacy Policy', url: '/privacy', description: 'Data protection' },
    { name: 'Terms of Service', url: '/terms', description: 'Service terms' },
    { name: 'Cookie Policy', url: '/cookies', description: 'Cookie usage' },
    { name: 'GDPR Compliance', url: '/gdpr', description: 'GDPR compliance' },
    { name: 'Security', url: '/security', description: 'Security measures' },
    { name: 'Compliance', url: '/compliance', description: 'Regulatory compliance' }
  ];

  const socialLinks = [
    { name: 'LinkedIn', url: 'https://linkedin.com/company/zion-tech-group', icon: Linkedin, color: 'hover:text-blue-400' },
    { name: 'Twitter', url: 'https://twitter.com/ziontechgroup', icon: Twitter, color: 'hover:text-blue-400' },
    { name: 'Facebook', url: 'https://facebook.com/ziontechgroup', icon: Facebook, color: 'hover:text-blue-600' },
    { name: 'Instagram', url: 'https://instagram.com/ziontechgroup', icon: Instagram, color: 'hover:text-pink-400' },
    { name: 'YouTube', url: 'https://youtube.com/ziontechgroup', icon: Youtube, color: 'hover:text-red-400' },
    { name: 'GitHub', url: 'https://github.com/ziontechgroup', icon: Github, color: 'hover:text-gray-400' }
  ];

  return (
    <footer className="bg-slate-900/95 backdrop-blur-md border-t border-cyan-400/20 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/5 via-purple-500/5 to-pink-500/5"></div>
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-cyan-400 to-transparent"></div>
      
      <div className="container mx-auto px-4 py-16 relative z-10">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 lg:grid-cols-6 gap-8 mb-12">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-2 mb-6">
              <div className="w-10 h-10 bg-gradient-to-br from-cyan-400 to-purple-600 rounded-lg flex items-center justify-center group hover:scale-110 transition-transform duration-300">
                <Brain className="w-6 h-6 text-white" />
              </div>
              <span className="text-2xl font-bold text-white neon-text">Zion Tech Group</span>
            </div>
            <p className="text-gray-300 mb-6 leading-relaxed text-lg">
              Leading provider of AI-powered enterprise solutions, quantum computing, and digital transformation services. 
              Transform your business with our cutting-edge technology.
            </p>
            
            {/* Contact Information */}
            <div className="space-y-4 mb-6">
              <div className="flex items-center space-x-3 text-gray-300 group">
                <div className="w-8 h-8 bg-cyan-400/20 rounded-lg flex items-center justify-center group-hover:bg-cyan-400/30 transition-colors">
                  <Phone className="w-4 h-4 text-cyan-400" />
                </div>
                <a href="tel:+13024640950" className="hover:text-cyan-400 transition-colors text-lg">
                  +1 (302) 464-0950
                </a>
              </div>
              <div className="flex items-center space-x-3 text-gray-300 group">
                <div className="w-8 h-8 bg-purple-400/20 rounded-lg flex items-center justify-center group-hover:bg-purple-400/30 transition-colors">
                  <Mail className="w-4 h-4 text-purple-400" />
                </div>
                <a href="mailto:kleber@ziontechgroup.com" className="hover:text-purple-400 transition-colors text-lg">
                  kleber@ziontechgroup.com
                </a>
              </div>
              <div className="flex items-center space-x-3 text-gray-300 group">
                <div className="w-8 h-8 bg-pink-400/20 rounded-lg flex items-center justify-center group-hover:bg-pink-400/30 transition-colors">
                  <MapPin className="w-4 h-4 text-pink-400" />
                </div>
                <span className="text-lg">364 E Main St STE 1008<br />Middletown, DE 19709</span>
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
                  className={`w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center text-gray-400 ${social.color} transition-all duration-300 hover:scale-110 hover:bg-white/20`}
                  aria-label={social.name}
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Micro SAAS Services */}
          <div>
            <h3 className="text-cyan-400 font-semibold mb-6 flex items-center text-lg">
              <Zap className="w-5 h-5 mr-2" />
              Micro SAAS
            </h3>
            <ul className="space-y-3">
              {microSaasServices.slice(0, 8).map((service) => (
                <li key={service.name}>
                  <a href={service.url}
                    className="group flex items-center text-sm text-gray-300 hover:text-cyan-400 transition-colors py-1"
                  >
                    <service.icon className="w-3 h-3 mr-2 text-cyan-400/60" />
                    <span className="group-hover:translate-x-1 transition-transform duration-300">{service.name}</span>
                  </a>
                </li>
              ))}
            </ul>
            <a href="/services"
              className="inline-flex items-center text-cyan-400 hover:text-white transition-colors mt-4 text-sm font-medium"
            >
              View All Micro SAAS
              <ArrowRight className="w-3 h-3 ml-1 group-hover:translate-x-1 transition-transform duration-300" />
            </a>
          </div>

          {/* AI Services */}
          <div>
            <h3 className="text-purple-400 font-semibold mb-6 flex items-center text-lg">
              <Brain className="w-5 h-5 mr-2" />
              AI Services
            </h3>
            <ul className="space-y-3">
              {aiServices.slice(0, 8).map((service) => (
                <li key={service.name}>
                  <a href={service.url}
                    className="group flex items-center text-sm text-gray-300 hover:text-purple-400 transition-colors py-1"
                  >
                    <service.icon className="w-3 h-3 mr-2 text-purple-400/60" />
                    <span className="group-hover:translate-x-1 transition-transform duration-300">{service.name}</span>
                  </a>
                </li>
              ))}
            </ul>
            <a href="/ai-services"
              className="inline-flex items-center text-purple-400 hover:text-white transition-colors mt-4 text-sm font-medium"
            >
              View All AI Services
              <ArrowRight className="w-3 h-3 ml-1 group-hover:translate-x-1 transition-transform duration-300" />
            </a>
          </div>

          {/* IT Services */}
          <div>
            <h3 className="text-blue-400 font-semibold mb-6 flex items-center text-lg">
              <Settings className="w-5 h-5 mr-2" />
              IT Services
            </h3>
            <ul className="space-y-3">
              {itServices.slice(0, 8).map((service) => (
                <li key={service.name}>
                  <a href={service.url}
                    className="group flex items-center text-sm text-gray-300 hover:text-blue-400 transition-colors py-1"
                  >
                    <service.icon className="w-3 h-3 mr-2 text-blue-400/60" />
                    <span className="group-hover:translate-x-1 transition-transform duration-300">{service.name}</span>
                  </a>
                </li>
              ))}
            </ul>
            <a href="/it-services"
              className="inline-flex items-center text-blue-400 hover:text-white transition-colors mt-4 text-sm font-medium"
            >
              View All IT Services
              <ArrowRight className="w-3 h-3 ml-1 group-hover:translate-x-1 transition-transform duration-300" />
            </a>
          </div>

          {/* Company & Support */}
          <div>
            <h3 className="text-pink-400 font-semibold mb-6 flex items-center text-lg">
              <Globe className="w-5 h-5 mr-2" />
              Company
            </h3>
            <div className="space-y-6">
              <div>
                <h4 className="text-white font-medium mb-3">Company</h4>
                <ul className="space-y-2">
                  {companyLinks.slice(0, 6).map((link) => (
                    <li key={link.name}>
                      <a href={link.url}
                        className="text-sm text-gray-300 hover:text-pink-400 transition-colors group flex items-center"
                      >
                        <span className="group-hover:translate-x-1 transition-transform duration-300">{link.name}</span>
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h4 className="text-white font-medium mb-3">Support</h4>
                <ul className="space-y-2">
                  {supportLinks.slice(0, 6).map((link) => (
                    <li key={link.name}>
                      <a href={link.url}
                        className="text-sm text-gray-300 hover:text-pink-400 transition-colors group flex items-center"
                      >
                        <span className="group-hover:translate-x-1 transition-transform duration-300">{link.name}</span>
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Stats Section */}
        <div className="border-t border-gray-700 pt-8 mb-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="text-3xl font-bold text-cyan-400 mb-2">50+</div>
              <div className="text-sm text-gray-300">Micro SAAS Services</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-purple-400 mb-2">300%</div>
              <div className="text-sm text-gray-300">Average ROI</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-pink-400 mb-2">24/7</div>
              <div className="text-sm text-gray-300">Support</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-green-400 mb-2">99.9%</div>
              <div className="text-sm text-gray-300">Uptime</div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-700 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-gray-400 text-sm mb-4 md:mb-0">
              © 2024 Zion Tech Group. All rights reserved. | 
              <span className="ml-2">Transforming businesses with AI and IT solutions</span>
            </div>
            <div className="flex flex-wrap gap-6">
              {legalLinks.map((link) => (
                <a key={link.name}
                  href={link.url}
                  className="text-sm text-gray-400 hover:text-cyan-400 transition-colors"
                >
                  {link.name}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;