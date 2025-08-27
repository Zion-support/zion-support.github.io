import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  Phone, 
  Mail, 
  MapPin, 
  Globe, 
  Linkedin, 
  Twitter, 
  Facebook, 
  Instagram,
  Youtube,
  Github,
  ArrowRight,
  Star,
  Shield,
  Zap,
  Brain,
  Rocket,
  Heart,
  Crown,
  Sparkles,
  Flame,
  Sun,
  Moon,
  Infinity,
  Cloud,
  Cpu,
  Users,
  Search,
  BookOpen,
  MessageCircle,
  HelpCircle,
  DollarSign,
  Gauge,
  Workflow,
  Atom,
  Target,
  TrendingUp,
  Award,
  Code,
  Truck,
  Building,
  BarChart3,
  PenTool,
  Eye,
  Server,
  Smartphone,
  Database,
  Network,
  Clock,
  ShoppingCart,
  Lock,
  Eye,
  FileText,
  Settings,
  Key,
  Globe2,
  ShieldCheck,
  Zap,
  Brain,
  Rocket,
  Heart,
  Crown,
  Sparkles,
  Flame,
  Sun,
  Moon,
  Infinity
} from 'lucide-react';

export const EnhancedFuturisticFooter: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const footerSections = [
    {
      title: '2026 Services',
      featured: true,
      links: [
        { name: '2026 Services Overview', href: '/services2026', featured: true },
        { name: 'AI Business Intelligence', href: '/services/ai-business-intelligence' },
        { name: 'Quantum Computing', href: '/services/quantum-computing' },
        { name: 'AI Cybersecurity', href: '/services/ai-cybersecurity' },
        { name: 'IoT Edge Computing', href: '/services/iot-edge-computing' },
        { name: 'AI Content Creation', href: '/services/ai-content-creation' },
        { name: 'AI HR Platform', href: '/services/ai-hr-platform' },
        { name: 'Sustainable Technology', href: '/services/sustainable-technology' },
        { name: 'AI Predictive Maintenance', href: '/services/ai-predictive-maintenance' },
        { name: 'Quantum Machine Learning', href: '/services/quantum-machine-learning' }
      ]
    },
    {
      title: 'Core Services',
      links: [
        { name: 'AI Workflow Automation', href: '/services/ai-workflow-automation' },
        { name: 'AI Cybersecurity', href: '/services/ai-cybersecurity' },
        { name: 'Quantum Computing', href: '/services/quantum-computing' },
        { name: 'IoT Edge Computing', href: '/services/iot-edge-computing' },
        { name: 'Cloud & DevOps', href: '/services/cloud-devops' },
        { name: 'Digital Twin', href: '/services/digital-twin' },
        { name: 'Data Analytics', href: '/services/data-analytics' },
        { name: 'IT Infrastructure', href: '/services/it-infrastructure' },
        { name: 'AI Sales Copilot', href: '/services/ai-sales-copilot' },
        { name: 'AI SEO Optimizer', href: '/services/ai-seo' },
        { name: 'Interview Assessment AI', href: '/services/interview-assessment' },
        { name: 'Helpdesk Platform', href: '/services/helpdesk' },
        { name: 'Website Analytics', href: '/services/website-analytics' },
        { name: 'DSR Privacy Portal', href: '/services/dsr-portal' },
        { name: 'Security Headers & CSP', href: '/services/security-headers-csp' },
        { name: 'AI Project Manager', href: '/services/ai-project-manager' },
        { name: 'AI Content Generator', href: '/services/ai-content-generator' },
        { name: 'AI Customer Support', href: '/services/ai-customer-support' },
        { name: 'AI Data Analytics', href: '/services/ai-data-analytics' },
        { name: 'AI Marketing Automation', href: '/services/ai-marketing-automation' }
      ]
    },
    {
      title: 'AI Products',
      links: [
        { name: 'AI Compliance Assistant', href: '/services/ai-compliance-assistant' },
        { name: 'AI Auto Email Responder', href: '/services/ai-auto-email-responder' },
        { name: 'Customer Feedback Surveys', href: '/services/mobile-feedback-surveys' },
        { name: 'AI Compliance Copilot', href: '/services/ai-compliance-copilot' },
        { name: 'LLM Content Studio', href: '/services/llm-content-studio' },
        { name: 'FinOps Advisor', href: '/services/finops-advisor' },
        { name: 'Returns Management', href: '/services/returns-management' },
        { name: 'Email Sequencer', href: '/services/email-sequencer' },
        { name: 'Podcast Transcription', href: '/services/podcast-transcription' },
        { name: 'Micro CRM', href: '/services/micro-crm' }
      ]
    },
    {
      title: 'Business Solutions',
      links: [
        { name: 'Affiliate Tracking', href: '/services/affiliate-tracking' },
        { name: 'IT Helpdesk', href: '/services/it-helpdesk' },
        { name: 'Green IT Solutions', href: '/services/green-it' },
        { name: 'Marketplace', href: '/marketplace' },
        { name: 'Talent Solutions', href: '/talent' },
        { name: 'Equipment Services', href: '/equipment' },
        { name: 'Request Quote', href: '/request-quote' },
        { name: 'Case Studies', href: '/case-studies' },
        { name: 'Partners', href: '/partners' },
        { name: 'Careers', href: '/careers' }
      ]
    },
    {
      title: 'Company',
      links: [
        { name: 'About Us', href: '/about' },
        { name: 'Team', href: '/team' },
        { name: 'Leadership', href: '/leadership' },
        { name: 'News', href: '/news' },
        { name: 'Events', href: '/events' },
        { name: 'Blog', href: '/blog' },
        { name: 'FAQ', href: '/faq' },
        { name: 'Help Center', href: '/help' },
        { name: 'Contact', href: '/contact' },
        { name: 'Sitemap', href: '/sitemap' }
      ]
    },
    {
      title: 'Resources',
      links: [
        { name: 'Pricing', href: '/pricing' },
        { name: 'Security', href: '/security' },
        { name: 'Status', href: '/status' },
        { name: 'Cookies', href: '/cookies' },
        { name: 'Privacy Policy', href: '/privacy' },
        { name: 'Terms of Service', href: '/terms' },
        { name: 'Support', href: '/support' },
        { name: 'Documentation', href: '/docs' },
        { name: 'API Reference', href: '/api' },
        { name: 'Developer Portal', href: '/developers' }
      ]
    }
  ];

  const socialLinks = [
    { name: 'LinkedIn', href: 'https://linkedin.com/company/ziontechgroup', icon: Linkedin, color: 'hover:text-blue-400' },
    { name: 'Twitter', href: 'https://twitter.com/ziontechgroup', icon: Twitter, color: 'hover:text-blue-400' },
    { name: 'Facebook', href: 'https://facebook.com/ziontechgroup', icon: Facebook, color: 'hover:text-blue-600' },
    { name: 'Instagram', href: 'https://instagram.com/ziontechgroup', icon: Instagram, color: 'hover:text-pink-400' },
    { name: 'YouTube', href: 'https://youtube.com/@ziontechgroup', icon: Youtube, color: 'hover:text-red-400' },
    { name: 'GitHub', href: 'https://github.com/ziontechgroup', icon: Github, color: 'hover:text-gray-400' }
  ];

  const quickActions = [
    { name: 'Search Services', href: '/search', icon: Search },
    { name: 'Request Quote', href: '/request-quote', icon: MessageCircle },
    { name: 'Contact Support', href: '/support', icon: HelpCircle },
    { name: 'View Pricing', href: '/pricing', icon: DollarSign }
  ];

  return (
    <footer className="relative bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 text-white overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl"></div>
        <div className="absolute top-0 right-0 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-1/2 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10">
        {/* Main Footer Content */}
        <div className="container mx-auto px-4 py-16">
          <div className="grid gap-8 lg:grid-cols-7">
            {/* Company Info */}
            <div className="lg:col-span-2">
              <div className="mb-6">
                <Link to="/" className="inline-flex items-center space-x-3 group">
                  <div className="relative">
                    <div className="w-12 h-12 bg-gradient-to-br from-cyan-400 via-blue-500 to-purple-600 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <Zap className="w-7 h-7 text-white" />
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-br from-cyan-400 via-blue-500 to-purple-600 rounded-xl blur-lg opacity-50 group-hover:opacity-75 transition-opacity duration-300"></div>
                  </div>
                  <h3 className="text-2xl font-bold bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">
                    Zion Tech Group
                  </h3>
                </Link>
              </div>
              
              <p className="text-slate-300 mb-6 leading-relaxed">
                Revolutionizing the future with cutting-edge AI, Quantum Computing, and Micro SaaS solutions. 
                Transform your business with our innovative technology platforms.
              </p>

              {/* Contact Info */}
              <div className="space-y-4 mb-6">
                <div className="flex items-center space-x-3 text-slate-300 hover:text-cyan-300 transition-colors">
                  <Phone className="w-5 h-5 text-cyan-400 flex-shrink-0" />
                  <a href="tel:+13024640950" className="hover:underline">
                    +1 302 464 0950
                  </a>
                </div>
                <div className="flex items-center space-x-3 text-slate-300 hover:text-blue-300 transition-colors">
                  <Mail className="w-5 h-5 text-blue-400 flex-shrink-0" />
                  <a href="mailto:kleber@ziontechgroup.com" className="hover:underline">
                    kleber@ziontechgroup.com
                  </a>
                </div>
                <div className="flex items-start space-x-3 text-slate-300">
                  <MapPin className="w-5 h-5 text-purple-400 flex-shrink-0 mt-0.5" />
                  <span>Delaware, United States</span>
                </div>
              </div>

              {/* Quick Actions */}
              <div className="mb-6">
                <h4 className="text-sm font-semibold text-white mb-3">Quick Actions</h4>
                <div className="space-y-2">
                  {quickActions.map((action) => (
                    <Link
                      key={action.name}
                      to={action.href}
                      className="flex items-center text-sm text-slate-300 hover:text-cyan-300 transition-colors group"
                    >
                      <action.icon className="w-4 h-4 mr-2 text-cyan-400 group-hover:text-cyan-300 transition-colors" />
                      {action.name}
                    </Link>
                  ))}
                </div>
              </div>

              {/* Social Links */}
              <div>
                <h4 className="text-sm font-semibold text-white mb-3">Follow Us</h4>
                <div className="flex space-x-3">
                  {socialLinks.map((social) => (
                    <a
                      key={social.name}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`w-10 h-10 bg-slate-800/50 rounded-lg flex items-center justify-center text-slate-400 ${social.color} transition-all duration-200 hover:bg-slate-700/50 hover:scale-110`}
                      aria-label={social.name}
                    >
                      <social.icon className="w-5 h-5" />
                    </a>
                  ))}
                </div>
              </div>
            </div>

            {/* Footer Sections */}
            {footerSections.map((section) => (
              <div key={section.title} className="space-y-4">
                <h3 className={`text-sm font-semibold ${section.featured ? 'text-cyan-300' : 'text-white'} flex items-center gap-2`}>
                  {section.featured && <Star className="w-4 h-4" />}
                  {section.title}
                </h3>
                <div className="space-y-2">
                  {section.links.map((link) => (
                    <Link
                      key={link.name}
                      to={link.href}
                      className={`text-sm text-slate-300 hover:text-cyan-300 transition-colors flex items-center gap-2 group ${
                        link.featured ? 'font-medium text-cyan-200' : ''
                      }`}
                    >
                      {link.featured && <Sparkles className="w-3 h-3 text-yellow-400" />}
                      {link.name}
                      <ArrowRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
                    </Link>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Newsletter Signup */}
          <div className="mt-16 pt-8 border-t border-slate-800">
            <div className="max-w-2xl mx-auto text-center">
              <h3 className="text-xl font-semibold text-white mb-2">Stay Updated with Zion Tech</h3>
              <p className="text-slate-300 mb-6">Get the latest insights on AI, Quantum Computing, and emerging technologies</p>
              <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-3 bg-slate-800/50 border border-slate-600/50 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20 transition-all duration-200"
                />
                <button className="px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-medium rounded-lg hover:from-cyan-600 hover:to-blue-600 transition-all duration-200 hover:scale-105">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="border-t border-slate-800">
          <div className="container mx-auto px-4 py-6">
            <div className="flex flex-col md:flex-row items-center justify-between gap-4">
              <div className="text-sm text-slate-400">
                © {currentYear} Zion Tech Group. All rights reserved.
              </div>
              <div className="flex items-center space-x-6 text-sm text-slate-400">
                <Link to="/privacy" className="hover:text-cyan-300 transition-colors">Privacy Policy</Link>
                <Link to="/terms" className="hover:text-cyan-300 transition-colors">Terms of Service</Link>
                <Link to="/cookies" className="hover:text-cyan-300 transition-colors">Cookie Policy</Link>
                <Link to="/accessibility" className="hover:text-cyan-300 transition-colors">Accessibility</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}