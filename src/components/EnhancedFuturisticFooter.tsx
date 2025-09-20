import React from "react"
import { Link } from "react-router-dom"
import { motion } from "framer-motion"
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
  GitFork,
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
  FileText,
  Settings,
  Key,
  Globe2,
  ShieldCheck,
  Leaf,
  Scale,
  Building2,
  Car,
  Home,
  Factory,
  City,
  CheckCircle,
  ArrowUpRight,
  Play,
  MailIcon
} from "lucide-react"
export const EnhancedFuturisticFooter: React.FC = () => {
  const currentYear = new Date().getFullYear()
  const footerSections = [
    {
      title: '🚀 Revolutionary 2030 Services',featured: true,links: [
        { name: 'Revolutionary Services 2030', href: '/revolutionary-services-2030', featured: true }
        { name: 'AI Autonomous Supply Chain', href: '/services/ai-autonomous-supply-chain-orchestrator', featured: true }
        { name: 'Quantum AI Trading Platform', href: '/services/quantum-ai-trading-platform', featured: true }
        { name: 'AI Autonomous Cybersecurity', href: '/services/ai-autonomous-cybersecurity-operations', featured: true }
        { name: 'AI Autonomous Sales Intelligence', href: '/services/ai-autonomous-sales-intelligence', featured: true }
        { name: 'AI Autonomous Customer Success', href: '/services/ai-autonomous-customer-success-platform', featured: true }
        { name: 'AI Autonomous Legal Contract Analyzer', href: '/services/ai-autonomous-legal-contract-analyzer', featured: true }
        { name: 'Quantum AI Drug Discovery', href: '/services/quantum-ai-drug-discovery-platform', featured: true }
        { name: 'AI Autonomous Research Assistant', href: '/services/ai-autonomous-research-assistant', featured: true }
        { name: 'AI Autonomous Creative Studio', href: '/services/ai-autonomous-creative-studio', featured: true }
        { name: 'AI Autonomous Education Platform', href: '/services/ai-autonomous-education-platform', featured: true }
        { name: 'AI Autonomous HR Platform', href: '/services/ai-autonomous-hr-platform', featured: true }
        { name: 'AI Autonomous Entertainment Platform', href: '/services/ai-autonomous-entertainment-platform', featured: true }
        { name: 'AI Autonomous Metaverse Platform', href: '/services/ai-autonomous-metaverse-platform', featured: true }
        { name: 'AI Autonomous Space Technology', href: '/services/ai-autonomous-space-technology-platform', featured: true }
        { name: 'AI Autonomous Green Technology', href: '/services/ai-autonomous-green-technology-platform', featured: true }
        { name: 'Blockchain Autonomous Governance', href: '/services/blockchain-autonomous-governance-platform', featured: true }
      ]
    }
    {
      title: '🤖 AI & Technology Services',featured: true,links: [
        { name: 'AI Business Intelligence', href: '/services/ai-business-intelligence', featured: true }
        { name: 'AI Healthcare Platform', href: '/services/ai-healthcare-platform', featured: true }
        { name: 'AI Content Creation', href: '/services/ai-content-creation', featured: true }
        { name: 'AI Customer Support', href: '/services/ai-customer-support', featured: true }
        { name: 'AI Cybersecurity', href: '/services/ai-cybersecurity', featured: true }
        { name: 'AI Project Management', href: '/services/ai-project-management', featured: true }
        { name: 'AI Workflow Automation', href: '/services/ai-workflow-automation', featured: true }
        { name: 'AI Workflow Orchestrator', href: '/services/ai-workflow-orchestrator', featured: true }
        { name: 'AI Autonomous Research Assistant', href: '/services/ai-autonomous-research-assistant', featured: true }
        { name: 'AI Content Generator', href: '/services/ai-content-generator', featured: true }
        { name: 'AI Marketing Automation', href: '/services/ai-marketing-automation', featured: true }
        { name: 'AI-Powered SEO', href: '/services/ai-powered-seo', featured: true }
        { name: 'AI Predictive Maintenance', href: '/services/ai-predictive-maintenance', featured: true }
        { name: 'Interview Assessment AI', href: '/services/interview-assessment-ai', featured: true }
        { name: 'LLM Content Studio', href: '/services/llm-content-studio', featured: true }
        { name: 'Landing Page Generator', href: '/services/landing-page-generator', featured: true }
        { name: 'Podcast Transcription', href: '/services/podcast-transcription', featured: true }
        { name: 'Website Analytics', href: '/services/website-analytics', featured: true }
      ]
    }
    {
      title: '⚛️ Quantum & Advanced Tech',featured: true,links: [
        { name: 'Quantum Computing Solutions', href: '/services/quantum-computing-solutions', featured: true }
        { name: 'Quantum Computing', href: '/services/quantum-computing', featured: true }
        { name: 'Quantum Machine Learning', href: '/services/quantum-machine-learning', featured: true }
        { name: 'Quantum AI Trading Platform', href: '/services/quantum-ai-trading-platform', featured: true }
        { name: 'Quantum AI Drug Discovery', href: '/services/quantum-ai-drug-discovery-platform', featured: true }
        { name: 'Quantum Technology', href: '/services/quantum-technology', featured: true }
        { name: 'AI Quantum Hybrid Platform', href: '/services/ai-quantum-hybrid-platform', featured: true }
        { name: 'Quantum Computing Elite', href: '/services/quantum-computing-elite', featured: true }
      ]
    }
    {
      title: '🔗 Blockchain & Web3',featured: true,links: [
        { name: 'Blockchain Autonomous Governance', href: '/services/blockchain-autonomous-governance-platform', featured: true }
        { name: 'Blockchain Solutions', href: '/services/blockchain', featured: true }
        { name: 'Affiliate Tracking', href: '/services/affiliate-tracking', featured: true }
        { name: 'Checkout Performance Optimizer', href: '/services/checkout-performance-optimizer', featured: true }
        { name: 'Price Intelligence Service', href: '/services/price-intelligence-service', featured: true }
        { name: 'Returns Management', href: '/services/returns-management', featured: true }
      ]
    }
    {
      title: '☁️ Cloud & Infrastructure',featured: true,links: [
        { name: 'Cloud Infrastructure', href: '/services/cloud-devops', featured: true }
        { name: 'IT Infrastructure', href: '/services/it-infrastructure', featured: true }
        { name: 'IoT Edge Computing', href: '/services/iot-edge-computing', featured: true }
        { name: 'Digital Twin Platform', href: '/services/digital-twin', featured: true }
        { name: 'Data Analytics', href: '/services/data-analytics', featured: true }
        { name: 'Green IT Solutions', href: '/services/green-it', featured: true }
        { name: 'Sustainable Technology', href: '/services/sustainable-technology', featured: true }
        { name: 'Space Tech Solutions', href: '/services/space-tech', featured: true }
        { name: 'Zero Trust Network Access', href: '/services/zero-trust-network-access', featured: true }
        { name: 'Security Headers CSP', href: '/services/security-headers-csp', featured: true }
        { name: 'Incident Response Platform', href: '/services/incident-response-platform', featured: true }
        { name: 'Cybersecurity Solutions', href: '/services/cybersecurity', featured: true }
      ]
    }
    {
      title: '🛡️ Enterprise Solutions',featured: true,links: [
        { name: 'Micro SaaS Products', href: '/services/micro-saas', featured: true }
        { name: 'Micro CRM', href: '/services/micro-crm', featured: true }
        { name: 'Helpdesk Platform', href: '/services/helpdesk-platform', featured: true }
        { name: 'IT Helpdesk', href: '/services/it-helpdesk', featured: true }
        { name: 'FinOps Advisor', href: '/services/finops-advisor', featured: true }
        { name: 'GDPR DSAR Portal', href: '/services/gdpr-dsar-portal', featured: true }
        { name: 'Email Sequencer', href: '/services/email-sequencer', featured: true }
        { name: 'Mobile Survey Tool', href: '/services/mobile-first-survey-tool', featured: true }
        { name: 'SEO Auditor', href: '/services/seo-auditor', featured: true }
        { name: 'Status Incident Hub', href: '/services/status-incident-hub', featured: true }
        { name: 'IT Consulting', href: '/services/it-consulting', featured: true }
        { name: 'Transformation Solutions', href: '/services/transformation', featured: true }
      ]
    }
    {
      title: '📚 Resources & Insights',featured: false,links: [
        { name: 'Documentation', href: '/docs', featured: true }
        { name: 'Case Studies', href: '/case-studies', featured: true }
        { name: 'White Papers', href: '/white-papers', featured: true }
        { name: 'Blog', href: '/blog', featured: true }
        { name: 'Webinars', href: '/webinars', featured: true }
        { name: 'FAQ', href: '/faq', featured: true }
        { name: 'Research & Development', href: '/research', featured: true }
        { name: 'Press & News', href: '/news', featured: true }
        { name: 'Partners', href: '/partners', featured: true }
        { name: 'Pricing Guide 2027', href: '/pricing-guide-2027', featured: true }
        { name: 'Pricing Guide 2030', href: '/pricing-guide-2030', featured: true }
        { name: 'Comprehensive Services Showcase', href: '/services/showcase-2030', featured: true }
        { name: 'Enhanced Services Landing', href: '/services/enhanced', featured: true }
        { name: 'Comprehensive Services Advertising', href: '/services/comprehensive-advertising', featured: true }
      ]
    }
    {
      title: '🛠️ Tools & Utilities',featured: false,links: [
        { name: 'Request Quote', href: '/request-quote', featured: true }
        { name: 'Pricing', href: '/pricing', featured: true }
        { name: 'Marketplace', href: '/marketplace', featured: true }
        { name: 'Dashboard', href: '/dashboard', featured: true }
        { name: 'Login', href: '/login', featured: true }
        { name: 'Search', href: '/search', featured: true }
        { name: 'Solutions', href: '/solutions', featured: true }
        { name: 'Resources', href: '/resources', featured: true }
      ]
    }
  ]
  const quickLinks = [
    { name: 'About Us', href: '/about', icon: Building }
    { name: 'Contact', href: '/contact', icon: Mail }
    { name: 'Careers', href: '/careers', icon: Users }
    { name: 'Privacy Policy', href: '/privacy', icon: Shield }
    { name: 'Terms of Service', href: '/terms', icon: FileText }
    { name: 'Cookie Policy', href: '/cookies', icon: Settings }
  ]
  const contactInfo = {
    phone: '+1 302 464 0950',email: 'kleber@ziontechgroup.com',website: 'https://ziontechgroup.com',address: '364 E Main St STE 1008 Middletown DE 19709'
  }
  const socialLinks = [
    { name: 'LinkedIn', href: '#', icon: Linkedin, color: 'hover:text-blue-600' }
    { name: 'Twitter', href: '#', icon: Twitter, color: 'hover:text-blue-400' }
    { name: 'Facebook', href: '#', icon: Facebook, color: 'hover:text-blue-700' }
    { name: 'Instagram', href: '#', icon: Instagram, color: 'hover:text-pink-500' }
    { name: 'YouTube', href: '#', icon: Youtube, color: 'hover:text-red-600' }
    { name: 'GitHub', href: '#', icon: Github, color: 'hover:text-gray-700 dark:hover:text-gray-300' }
  ]
  return (
    <footer className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Top Section - Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 mb-12">
          {footerSections.map((section, sectionIndex) => (
            <motion.div
              key={section.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: sectionIndex * 0.1 }}
              className="space-y-4"
            >
              <h3 className={`text-lg font-semibold ${section.featured ? 'text-cyan-400' : 'text-gray-300'}`}>
                {section.title}
              </h3>
              <ul className="space-y-2">
                {section.links.map((link, linkIndex) => (
                  <li key={link.name}>
                    <Link
                      to={link.href}
                      className={`text-sm transition-colors duration-200 hover:text-cyan-400 ${
                        link.featured ? 'text-gray-200' : 'text-gray-400'
                      }`}
                    >
                      {link.name}
                      {link.featured && <Star className="inline-block w-3 h-3 ml-1 text-cyan-400" />}
                    </Link>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Middle Section - Contact & Quick Links */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 py-8 border-t border-slate-700">
          {/* Contact Information */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-cyan-400">Contact Information</h3>
            <div className="space-y-3">
              <a
                href={`tel:${contactInfo.phone}`}
                className="flex items-center space-x-3 text-gray-300 hover:text-cyan-400 transition-colors duration-200"
              >
                <Phone className="w-5 h-5 text-cyan-400" />
                <span>{contactInfo.phone}</span>
              </a>
              <a
                href={`mailto:${contactInfo.email}`}
                className="flex items-center space-x-3 text-gray-300 hover:text-cyan-400 transition-colors duration-200"
              >
                <Mail className="w-5 h-5 text-cyan-400" />
                <span>{contactInfo.email}</span>
              </a>
              <a
                href={contactInfo.website}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-3 text-gray-300 hover:text-cyan-400 transition-colors duration-200"
              >
                <Globe className="w-5 h-5 text-cyan-400" />
                <span>{contactInfo.website}</span>
              </a>
              <div className="flex items-start space-x-3 text-gray-300">
                <MapPin className="w-5 h-5 text-cyan-400 mt-0.5 flex-shrink-0" />
                <span className="text-sm">{contactInfo.address}</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-cyan-400">Quick Links</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              {quickLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.href}
                  className="flex items-center space-x-2 text-gray-300 hover:text-cyan-400 transition-colors duration-200 text-sm"
                >
                  <link.icon className="w-4 h-4" />
                  <span>{link.name}</span>
                </Link>
              ))}
            </div>
          </div>

          {/* Newsletter & Social */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-cyan-400">Stay Connected</h3>
            <div className="space-y-4">
              {/* Social Links */}
              <div className="flex space-x-4">
                {socialLinks.map((social) => (
                  <a
                    key={social.name}
                    href={social.href}
                    className={`p-2 rounded-lg bg-slate-800 hover:bg-slate-700 transition-colors duration-200 ${social.color}`}
                    aria-label={social.name}
                  >
                    <social.icon className="w-5 h-5" />
                  </a>
                ))}
              </div>
              
              {/* Newsletter */}
              <div className="space-y-2">
                <p className="text-sm text-gray-400">Subscribe to our newsletter for updates</p>
                <form className="flex space-x-2">
                  <input
                    type="email"
                    placeholder="Enter your email"
                    className="flex-1 px-3 py-2 bg-slate-800 border border-slate-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:border-transparent text-sm"
                  />
                  <button
                    type="submit"
                    className="px-4 py-2 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white rounded-lg transition-all duration-200 text-sm font-medium"
                  >
                    Subscribe
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section - Stats & Awards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 py-8 border-t border-slate-700">
          <div className="text-center">
            <div className="text-2xl font-bold text-cyan-400">500+</div>
            <div className="text-sm text-gray-400">Happy Clients</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-cyan-400">100+</div>
            <div className="text-sm text-gray-400">AI Services</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-cyan-400">99.9%</div>
            <div className="text-sm text-gray-400">Uptime</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-cyan-400">24/7</div>
            <div className="text-sm text-gray-400">Support</div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-slate-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            {/* Copyright */}
            <div className="flex items-center space-x-2">
              <div className="w-6 h-6 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-md flex items-center justify-center">
                <Zap className="w-4 h-4 text-white" />
              </div>
              <span className="text-sm text-gray-400">
                © {currentYear} Zion Tech Group. All rights reserved.
              </span>
            </div>

            {/* Additional Links */}
            <div className="flex items-center space-x-6 text-sm text-gray-400">
              <a href="/privacy" className="hover:text-cyan-400 transition-colors duration-200">
                Privacy Policy
              </a>
              <a href="/terms" className="hover:text-cyan-400 transition-colors duration-200">
                Terms of Service
              </a>
              <a href="/cookies" className="hover:text-cyan-400 transition-colors duration-200">
                Cookie Policy
              </a>
              <a href="/sitemap" className="hover:text-cyan-400 transition-colors duration-200">
                Sitemap
              </a>
            </div>

            {/* Back to Top */}
            <button
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className="flex items-center space-x-2 text-cyan-400 hover:text-cyan-300 transition-colors duration-200"
            >
              <ArrowUpRight className="w-4 h-4" />
              <span className="text-sm">Back to Top</span>
            </button>
          </div>
        </div>
      </div>

      {/* Floating Contact Button */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, delay: 1 }}
        className="fixed bottom-6 right-6 z-50"
      >
        <a
          href="/contact"
          className="flex items-center space-x-2 px-4 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 hover: from-cyan-600 hover:to-blue-700 text-white rounded-full shadow-lg hover:shadow-cyan-500/25 transition-all duration-300 transform hover:scale-105"
        >
          <MessageCircle className="w-5 h-5" />
          <span className="font-medium">Contact Us</span>
        </a>
      </motion.div>
    </footer>
  )
}