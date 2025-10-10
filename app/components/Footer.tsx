import React, { memo } from 'react';
import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, Clock, Award, Shield, Zap, ArrowRight, Brain, Cloud, Code, BarChart, Users, Globe, Facebook, Twitter, Linkedin, Instagram, Youtube, Github, MessageSquare, Star, TrendingUp, CheckCircle, DollarSign, Settings, FileText, Target, Cpu, Database, Lock, Wifi, Package, RefreshCw, Headphones, Server, Mic, Camera, Video, Music, Gamepad2, ShoppingCart, CreditCard, Building, Factory, Car, Plane, Ship, Train, Home, Heart, Stethoscope, GraduationCap, Briefcase, Wrench, Hammer, Paintbrush, Scissors, BookOpen, Calculator, Calendar, Compass, Navigation as NavIcon, PieChart, TrendingDown, Activity, Zap as Lightning, Target as Crosshair, Shield as Security, Users as People, Star as StarIcon, CheckCircle as Check, ArrowRight as Arrow, Phone as PhoneIcon, Mail as MailIcon, MapPin as Location, Truck, Smartphone, ChefHat, Rocket, Sprout, Scale } from 'lucide-react';

const Footer: React.FC = memo(() => {
  const currentYear = new Date().getFullYear();

  const serviceCategories = [
    {
      title: 'AI Services',
      icon: Brain,
      services: [
        { name: 'AI Business Intelligence Pro', href: '/ai-business-intelligence-pro' },
        { name: 'AI Content Generation Suite', href: '/ai-content-generation-suite' },
        { name: 'AI Customer Service Automation', href: '/ai-customer-service-automation' },
        { name: 'AI Marketing Automation Platform', href: '/ai-marketing-automation-platform' },
        { name: 'AI Document Processing System', href: '/ai-document-processing-system' },
        { name: 'AI Image & Video Analysis', href: '/ai-image-video-analysis' },
        { name: 'AI Financial Analysis Platform', href: '/ai-financial-analysis-platform' },
        { name: 'AI Healthcare Diagnostics', href: '/ai-healthcare-diagnostics' },
        { name: 'AI Supply Chain Optimization', href: '/ai-supply-chain-optimization' },
        { name: 'AI Voice & Speech Processing', href: '/ai-voice-speech-processing' },
        { name: 'AI Cybersecurity Platform', href: '/ai-cybersecurity-platform' },
        { name: 'AI Research & Development', href: '/ai-research-development' }
      ]
    },
    {
      title: 'IT Services',
      icon: Cloud,
      services: [
        { name: 'Cloud Migration Pro', href: '/cloud-migration-pro' },
        { name: 'IT Infrastructure Design', href: '/it-infrastructure-design' },
        { name: 'Database Management Pro', href: '/database-management-pro' },
        { name: 'Cloud Cost Optimization', href: '/cloud-cost-optimization' },
        { name: 'Enterprise Cybersecurity Suite', href: '/enterprise-cybersecurity-suite' },
        { name: 'Compliance Management Platform', href: '/compliance-management-platform' },
        { name: '24/7 IT Support & Monitoring', href: '/24-7-it-support-monitoring' },
        { name: 'System Administration Services', href: '/system-administration-services' },
        { name: 'Custom Software Development', href: '/custom-software-development' },
        { name: 'System Integration & APIs', href: '/system-integration-apis' },
        { name: 'DevOps & CI/CD Implementation', href: '/devops-cicd-implementation' },
        { name: 'Network Design & Implementation', href: '/network-design-implementation' }
      ]
    },
    {
      title: 'Micro SAAS',
      icon: Code,
      services: [
        { name: 'AI Project Manager Pro', href: '/ai-project-manager-pro' },
        { name: 'AI Social Media Manager', href: '/ai-social-media-manager' },
        { name: 'AI Analytics Dashboard', href: '/ai-analytics-dashboard' },
        { name: 'AI Email Marketing Suite', href: '/ai-email-marketing-suite' },
        { name: 'AI Customer Support Bot', href: '/ai-customer-support-bot' },
        { name: 'AI Lead Generation Engine', href: '/ai-lead-generation-engine' },
        { name: 'AI Content Studio', href: '/ai-content-studio' },
        { name: 'AI SEO Optimizer', href: '/ai-seo-optimizer' },
        { name: 'AI Invoice Generator', href: '/ai-invoice-generator' },
        { name: 'AI Expense Tracker', href: '/ai-expense-tracker' },
        { name: 'AI Financial Advisor', href: '/ai-financial-advisor' },
        { name: 'AI Workflow Automation', href: '/ai-workflow-automation' }
      ]
    },
    {
      title: 'Specialized',
      icon: Zap,
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
    { name: 'News', href: '/news' },
    { name: 'Press Kit', href: '/press' },
    { name: 'Partners', href: '/partners' }
  ];

  const supportLinks = [
    { name: 'Contact Us', href: '/contact' },
    { name: 'Support Center', href: '/support' },
    { name: 'Documentation', href: '/docs' },
    { name: 'API Reference', href: '/api-docs' },
    { name: 'Status Page', href: '/status' },
    { name: 'System Health', href: '/health' },
    { name: 'Knowledge Base', href: '/knowledge-base' },
    { name: 'Community Forum', href: '/forum' }
  ];

  const legalLinks = [
    { name: 'Privacy Policy', href: '/privacy' },
    { name: 'Terms of Service', href: '/terms' },
    { name: 'Cookie Policy', href: '/cookies' },
    { name: 'GDPR Compliance', href: '/gdpr' },
    { name: 'Security', href: '/security' },
    { name: 'Compliance', href: '/compliance' },
    { name: 'Data Processing Agreement', href: '/dpa' },
    { name: 'Service Level Agreement', href: '/sla' }
  ];

  const quickLinks = [
    { name: 'Pricing', href: '/pricing' },
    { name: 'Free Trial', href: '/trial' },
    { name: 'Demo', href: '/demo' },
    { name: 'Consultation', href: '/consultation' },
    { name: 'White Paper', href: '/whitepaper' },
    { name: 'Webinar', href: '/webinar' },
    { name: 'Events', href: '/events' },
    { name: 'Newsletter', href: '/newsletter' }
  ];

  const industrySolutions = [
    { name: 'Healthcare', href: '/industries/healthcare' },
    { name: 'Finance', href: '/industries/finance' },
    { name: 'Manufacturing', href: '/industries/manufacturing' },
    { name: 'Retail', href: '/industries/retail' },
    { name: 'Education', href: '/industries/education' },
    { name: 'Government', href: '/industries/government' },
    { name: 'Technology', href: '/industries/technology' },
    { name: 'Non-Profit', href: '/industries/nonprofit' }
  ];

  return (
    <footer className="bg-slate-900/95 backdrop-blur-sm border-t border-cyan-400/30">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-6 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-2 mb-6">
              <div className="w-8 h-8 bg-gradient-to-r from-cyan-400 to-purple-600 rounded-lg flex items-center justify-center cyber-glow">
                <Zap className="w-5 h-5 text-white" />
              </div>
              <span className="text-white font-bold text-xl neon-text">Zion Tech Group</span>
            </div>
            
            <p className="text-gray-300 mb-6 leading-relaxed">
              Leading provider of AI-powered enterprise solutions, quantum computing, 
              autonomous systems, and digital transformation services. Transform your business with our advanced AI capabilities.
            </p>

            {/* Contact Info */}
            <div className="space-y-3 mb-6">
              <div className="flex items-center space-x-3 text-gray-300">
                <Phone className="w-4 h-4 text-cyan-400" />
                <a href="tel:+13024640950" className="hover:text-cyan-400 transition-colors">
                  +1 (302) 464-0950
                </a>
              </div>
              <div className="flex items-center space-x-3 text-gray-300">
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
              <a href="https://linkedin.com/company/zion-tech-group" className="text-gray-400 hover:text-cyan-400 transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="https://twitter.com/ziontechgroup" className="text-gray-400 hover:text-cyan-400 transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="https://github.com/zion-tech-group" className="text-gray-400 hover:text-cyan-400 transition-colors">
                <Github className="w-5 h-5" />
              </a>
              <a href="https://youtube.com/@ziontechgroup" className="text-gray-400 hover:text-cyan-400 transition-colors">
                <Youtube className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Services */}
          <div className="lg:col-span-2">
            <h3 className="text-white font-semibold text-lg mb-6 neon-text">Our Services</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {serviceCategories.map((category, index) => (
                <div key={index}>
                  <div className="flex items-center space-x-2 mb-4">
                    <category.icon className="w-5 h-5 text-cyan-400" />
                    <h4 className="text-white font-medium">{category.title}</h4>
                  </div>
                  <ul className="space-y-2">
                    {category.services.slice(0, 6).map((service, serviceIndex) => (
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
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
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

              {/* Quick Links */}
              <div>
                <h4 className="text-white font-semibold mb-4">Quick Links</h4>
                <ul className="space-y-2">
                  {quickLinks.map((link, index) => (
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

        {/* Industry Solutions */}
        <div className="mt-12 pt-8 border-t border-gray-700">
          <div className="text-center mb-6">
            <h3 className="text-white font-semibold text-lg mb-4 neon-text">
              Industry Solutions
            </h3>
            <p className="text-gray-300 text-sm">
              Specialized solutions tailored to your industry needs
            </p>
          </div>
          <div className="flex flex-wrap justify-center gap-4">
            {industrySolutions.map((industry, index) => (
              <Link
                key={index}
                to={industry.href}
                className="px-4 py-2 bg-slate-800/50 text-gray-300 hover:bg-cyan-600 hover:text-white rounded-lg transition-colors text-sm"
              >
                {industry.name}
              </Link>
            ))}
          </div>
        </div>

        {/* Newsletter Signup */}
        <div className="mt-12 pt-8 border-t border-gray-700">
          <div className="max-w-2xl mx-auto text-center">
            <h3 className="text-white font-semibold text-lg mb-4 neon-text">
              Stay Updated with Our Latest Innovations
            </h3>
            <p className="text-gray-300 mb-6">
              Get the latest news about AI breakthroughs, technology updates, and industry insights.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 bg-slate-800 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20"
              />
              <button className="cyber-button px-6 py-3">
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