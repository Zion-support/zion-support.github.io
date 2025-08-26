import React from 'react';
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
import Link from 'next/link';
import { motion } from 'framer-motion';
import { 
<<<<<<< HEAD
  Zap, Globe, Phone, Mail, MapPin, ArrowRight, 
  Brain, Atom, Shield, Rocket, Target, BookOpen, Users,
  Star, Sparkles, Cpu, Lock, Cloud, BarChart3, Settings, Eye, Award, Clock, Heart, Lightbulb,
  Twitter, Linkedin, Facebook, Instagram, Youtube, Github, MessageCircle, MessageSquare
=======
import Link from 'next/link';
import { motion } from 'framer-motion';
import { 
  Rocket, Brain, Atom, Zap, Sparkles, Shield, 
  Phone, Mail, MapPin, Globe, ArrowRight,
  Linkedin, Twitter, Facebook, Instagram, Youtube, Github,
  CheckCircle, Award, Star, Crown, Gem, Infinity,
  Heart, ShieldCheck, Users, Briefcase, BookOpen,
  Target, Microscope, Cpu, Database, Cloud, Lock,
  Home, Building, DollarSign, FileText, MessageSquare, MessageCircle, Newspaper, Handshake, LifeBuoy, Activity,
  ShoppingCart, UserCheck, BarChart, Palette, Video, LockIcon, GlobeIcon, CpuIcon
>>>>>>> origin/cursor/enhance-app-with-new-services-and-futuristic-design-767b
=======
import Link from 'next/link';
import { motion } from 'framer-motion';
import { 
  Rocket, Brain, Atom, Cpu, Target, RocketIcon, 
  Phone, Mail, MapPin, Star, TrendingUp, 
  Linkedin, Github, Instagram, Youtube, Facebook, Twitter,
  ArrowRight, Globe, Shield, Zap, Sparkles
>>>>>>> origin/cursor/enhance-app-with-new-services-and-futuristic-design-d160
=======
  Zap, Mail, Phone, MapPin, Globe, 
  Twitter, Linkedin, Facebook, Instagram, 
  Youtube, Github, ArrowRight, Star,
  Shield, Rocket, Brain, Atom, DollarSign,
  Users, FileText, HelpCircle, Settings,
  TrendingUp, Award, CheckCircle, Clock,
  Globe as GlobeIcon, Cpu, Database, Lock,
  Heart, Palette, GraduationCap, Leaf, Pill,
  Coins, Building2, Code, Server, ShieldCheck
>>>>>>> origin/cursor/enhance-app-with-new-services-and-futuristic-design-df1a
} from 'lucide-react';

const contactInfo = {
  mobile: '+1 302 464 0950',
  email: 'kleber@ziontechgroup.com',
  address: '364 E Main St STE 1008 Middletown DE 19709',
  website: 'https://ziontechgroup.com'
};

<<<<<<< HEAD
<<<<<<< HEAD
const footerSections = [
  {
    title: 'AI & Consciousness',
<<<<<<< HEAD
    links: [
      { name: 'AI Consciousness Evolution', href: '/ai-consciousness-evolution-2025' },
      { name: 'AI Quantum Neural Network', href: '/ai-quantum-neural-network' },
      { name: 'AI Autonomous Research', href: '/ai-autonomous-research-assistant' },
      { name: 'AI Emotional Intelligence', href: '/ai-emotional-intelligence-training' },
      { name: 'AI Predictive Maintenance', href: '/ai-predictive-maintenance-platform' },
      { name: 'AI Content Personalization', href: '/ai-content-personalization-engine' },
      { name: 'AI Autonomous Ecosystem', href: '/ai-autonomous-ecosystem-manager' },
      { name: 'AI Ethics & Governance', href: '/ai-ethics-governance-framework' }
=======
    icon: <Brain className="w-5 h-5 text-cyan-400" />,
    services: [
      { name: 'AI Consciousness Evolution 2029', href: '/ai-consciousness-evolution-2029' },
      { name: 'Quantum AI Fusion', href: '/quantum-ai-fusion' },
      { name: 'AI Autonomous Ecosystem', href: '/ai-autonomous-ecosystem' },
      { name: 'AI Ethics & Governance', href: '/ai-ethics-governance' },
      { name: 'AI Creativity Studio', href: '/ai-creativity-studio' },
      { name: 'AI Education Platform', href: '/ai-education-platform' },
      { name: 'AI Healthcare Diagnostics', href: '/ai-healthcare-diagnostics' },
      { name: 'AI Financial Intelligence', href: '/ai-financial-intelligence' },
      { name: 'AI Sustainability Platform', href: '/ai-sustainability-platform' },
      { name: 'AI Emotional Intelligence', href: '/ai-emotional-intelligence-platform' }
>>>>>>> origin/cursor/enhance-app-with-new-services-and-futuristic-design-df1a
    ]
  },
  {
    title: 'Quantum & Emerging Tech',
    links: [
      { name: 'Space Resource Mining', href: '/space-resource-mining-platform' },
      { name: 'Quantum Internet Security', href: '/quantum-internet-security-platform' },
      { name: 'Brain-Computer Interface', href: '/brain-computer-interface-platform' },
      { name: 'Quantum Materials Discovery', href: '/quantum-materials-discovery-platform' },
      { name: 'Autonomous Vehicle AI', href: '/autonomous-vehicle-ai-platform' },
      { name: 'Quantum Bio-Computing', href: '/quantum-bio-computing-platform' },
      { name: 'Quantum Energy Platform', href: '/quantum-energy-platform' },
      { name: 'Quantum Robotics', href: '/quantum-robotics' }
    ]
  },
  {
    title: 'Enterprise IT',
    links: [
      { name: 'Quantum-Secure Cloud', href: '/quantum-secure-cloud-infrastructure' },
      { name: 'Autonomous IT Operations', href: '/autonomous-it-operations-center' },
      { name: 'Edge Computing Orchestration', href: '/edge-computing-orchestration' },
      { name: 'Blockchain Infrastructure', href: '/blockchain-infrastructure-platform' },
      { name: 'AI-Powered DevOps', href: '/ai-powered-devops-platform' },
      { name: 'Quantum Cloud Infrastructure', href: '/quantum-cloud-infrastructure' },
      { name: 'Zero Trust Security', href: '/zero-trust-security-platform' },
      { name: 'Quantum Networking', href: '/quantum-networking' }
    ]
  },
  {
    title: 'Micro SAAS',
    links: [
      { name: 'AI Customer Success', href: '/ai-customer-success-platform' },
      { name: 'Supply Chain Optimization', href: '/intelligent-supply-chain-optimization' },
      { name: 'Financial Planning AI', href: '/ai-financial-planning-platform' },
      { name: 'HR Analytics Platform', href: '/intelligent-hr-analytics-platform' },
      { name: 'Sales Intelligence AI', href: '/ai-sales-intelligence-platform' },
      { name: 'AI Decision Engine', href: '/ai-powered-decision-engine' },
      { name: 'Content Automation', href: '/intelligent-content-automation-platform' },
      { name: 'Smart CRM Suite', href: '/smart-crm-intelligence-suite' }
    ]
  },
  {
    title: 'Solutions',
    links: [
      { name: 'Healthcare Solutions', href: '/healthcare-solutions' },
      { name: 'Financial Services', href: '/financial-solutions' },
      { name: 'Manufacturing AI', href: '/manufacturing-ai-solutions' },
      { name: 'Retail Technology', href: '/retail-technology-solutions' },
      { name: 'Education Technology', href: '/education-technology-solutions' },
      { name: 'Government Solutions', href: '/government-technology-solutions' },
      { name: 'Energy & Utilities', href: '/energy-utilities-solutions' },
      { name: 'Transportation & Logistics', href: '/transportation-logistics-solutions' }
    ]
  },
  {
    title: 'Resources',
    links: [
      { name: 'Documentation', href: '/docs' },
      { name: 'API Reference', href: '/api-documentation' },
      { name: 'Case Studies', href: '/case-studies' },
      { name: 'Blog & News', href: '/blog' },
      { name: 'Support Center', href: '/support' },
      { name: 'Training & Certification', href: '/training' },
      { name: 'Community Forum', href: '/community' },
      { name: 'Developer Resources', href: '/developer-resources' }
=======
=======
>>>>>>> origin/cursor/enhance-app-with-new-services-and-futuristic-design-d160
const serviceCategories = [
  {
    title: '🧠 Revolutionary AI Services',
    icon: Brain,
<<<<<<< HEAD
    services: [
<<<<<<< HEAD
      { name: 'AI Business Intelligence Pro', href: '/ai-business-intelligence-pro', price: '$299/month' },
      { name: 'AI Video Generation Platform', href: '/ai-video-generation-platform', price: '$499/month' },
      { name: 'AI-Powered Cybersecurity', href: '/ai-cybersecurity-platform', price: '$799/month' },
      { name: 'AI Drug Discovery Platform', href: '/ai-drug-discovery-platform', price: '$3,999/month' }
=======
    color: 'from-violet-500 to-purple-600',
    services: [
      { name: 'AI Quantum Hybrid Brain Interface', href: '/ai-quantum-hybrid-brain-interface' },
      { name: 'AI Quantum Creativity Studio', href: '/ai-quantum-creativity-studio' },
      { name: 'Quantum Emotional Intelligence', href: '/quantum-emotional-intelligence' },
      { name: 'AI Autonomous Business Manager', href: '/ai-autonomous-business-manager' }
>>>>>>> origin/cursor/enhance-app-with-new-services-and-futuristic-design-d160
    ]
  },
  {
    title: '⚛️ Quantum & Emerging Tech',
    icon: Atom,
<<<<<<< HEAD
    services: [
      { name: 'Quantum Machine Learning', href: '/quantum-machine-learning-platform', price: '$1,999/month' },
      { name: 'Blockchain AI Platform', href: '/blockchain-ai-platform', price: '$899/month' },
      { name: 'Edge AI Computing', href: '/edge-ai-computing-platform', price: '$599/month' },
      { name: 'AI Climate Modeling', href: '/ai-climate-modeling-platform', price: '$1,299/month' }
=======
    color: 'from-indigo-500 to-blue-600',
    services: [
      { name: 'Quantum DNA Storage Platform', href: '/quantum-dna-storage-platform' },
      { name: 'Quantum Financial Prediction', href: '/quantum-financial-prediction' },
      { name: 'Quantum Internet Security Gateway', href: '/quantum-internet-security-gateway' },
      { name: 'Quantum Blockchain Infrastructure', href: '/quantum-blockchain-infrastructure' }
>>>>>>> origin/cursor/enhance-app-with-new-services-and-futuristic-design-d160
    ]
  },
  {
    title: '🏙️ Enterprise IT Solutions',
    icon: Cpu,
<<<<<<< HEAD
    services: [
      { name: 'API Security & Monitoring', href: '/api-security-monitoring-suite', price: '$399/month' },
      { name: 'Customer Success Automation', href: '/customer-success-automation', price: '$199/month' },
      { name: 'HR Automation Suite', href: '/hr-automation-suite', price: '$179/month' },
      { name: 'Project Management AI', href: '/project-management-ai-platform', price: '$199/month' }
    ]
  },
  {
    title: '🛒 Business Automation',
    icon: ShoppingCart,
    services: [
      { name: 'E-commerce Automation', href: '/ecommerce-automation-platform', price: '$249/month' },
      { name: 'Marketing Automation Suite', href: '/marketing-automation-suite', price: '$279/month' },
      { name: 'Financial Analytics Platform', href: '/financial-analytics-platform', price: '$349/month' },
      { name: 'Legal Document Automation', href: '/legal-document-automation', price: '$399/month' }
>>>>>>> origin/cursor/enhance-app-with-new-services-and-futuristic-design-767b
=======
    color: 'from-blue-500 to-cyan-600',
    services: [
      { name: 'Quantum Zero Trust Architecture', href: '/quantum-zero-trust-architecture' },
      { name: 'AI Autonomous DevOps Platform', href: '/ai-autonomous-devops-platform' },
      { name: 'Quantum Edge Computing Orchestrator', href: '/quantum-edge-computing-orchestrator' },
      { name: 'AI Autonomous Data Center', href: '/ai-autonomous-data-center' }
    ]
  },
  {
    title: '🌌 Space & Metaverse Tech',
    icon: RocketIcon,
    color: 'from-teal-500 to-emerald-600',
    services: [
      { name: 'Autonomous Space Colony AI', href: '/autonomous-space-colony-ai' },
      { name: 'Metaverse AI Development Platform', href: '/metaverse-ai-development-platform' },
      { name: 'AI Predictive Health Analytics', href: '/ai-predictive-health-analytics' },
      { name: 'Holographic Event Platform', href: '/holographic-event-platform' }
    ]
  },
  {
    title: '🎯 Innovative Micro SAAS',
    icon: Target,
    color: 'from-green-500 to-yellow-600',
    services: [
      { name: 'AI Quantum Sales Automation', href: '/ai-quantum-sales-automation' },
      { name: 'Quantum Content Generation Studio', href: '/quantum-content-generation-studio' },
      { name: 'AI Quantum Customer Success', href: '/ai-quantum-customer-success' },
      { name: 'Quantum Supply Chain Transparency', href: '/quantum-supply-chain-transparency' }
>>>>>>> origin/cursor/enhance-app-with-new-services-and-futuristic-design-d160
=======
      { name: 'AI Autonomous Decision Engine', href: '/ai-autonomous-decision-engine' },
      { name: 'Quantum CRM Suite', href: '/quantum-crm-suite' },
      { name: 'AI Content Factory Pro', href: '/ai-content-factory-pro' },
      { name: 'AI Legal Contract Analyzer', href: '/ai-legal-contract-analyzer' },
      { name: 'AI Financial Intelligence', href: '/ai-financial-intelligence' },
      { name: 'AI Healthcare Diagnostics', href: '/ai-healthcare-diagnostics' },
      { name: 'AI Sustainability Platform', href: '/ai-sustainability-platform' },
      { name: 'AI Education Platform', href: '/ai-education-platform' },
      { name: 'AI Emotional Intelligence', href: '/ai-emotional-intelligence-platform' },
      { name: 'AI Creativity Studio', href: '/ai-creativity-studio' }
>>>>>>> origin/cursor/enhance-app-with-new-services-and-futuristic-design-df1a
    ]
  }
];

<<<<<<< HEAD
<<<<<<< HEAD
const companyLinks = [
  { name: 'About Us', href: '/about' },
  { name: 'Leadership Team', href: '/leadership' },
  { name: 'Careers', href: '/careers' },
  { name: 'News & Press', href: '/news' },
  { name: 'Partners', href: '/partners' },
  { name: 'Investors', href: '/investors' },
  { name: 'Contact Us', href: '/contact' },
  { name: 'Locations', href: '/locations' },
  { name: 'Sustainability', href: '/sustainability' },
  { name: 'Diversity & Inclusion', href: '/diversity-inclusion' }
];

const resourceLinks = [
  { name: 'Documentation', href: '/docs' },
  { name: 'API Reference', href: '/api-documentation' },
  { name: 'Case Studies', href: '/case-studies' },
  { name: 'Blog & News', href: '/blog' },
  { name: 'Support Center', href: '/support' },
  { name: 'Training & Certification', href: '/training' },
  { name: 'Community Forum', href: '/community' },
  { name: 'Developer Resources', href: '/developer-resources' },
  { name: 'Research & Development', href: '/research-development' },
  { name: 'White Papers', href: '/white-papers' }
];

const solutionLinks = [
  { name: 'Healthcare Solutions', href: '/healthcare-solutions' },
  { name: 'Financial Services', href: '/financial-solutions' },
  { name: 'Manufacturing AI', href: '/manufacturing-ai-solutions' },
  { name: 'Retail Technology', href: '/retail-technology-solutions' },
  { name: 'Education Technology', href: '/education-technology-solutions' },
  { name: 'Government Solutions', href: '/government-technology-solutions' },
  { name: 'Energy & Utilities', href: '/energy-utilities-solutions' },
  { name: 'Transportation & Logistics', href: '/transportation-logistics-solutions' },
  { name: 'Real Estate Technology', href: '/real-estate-technology-solutions' },
  { name: 'Entertainment & Media', href: '/entertainment-media-solutions' }
];

<<<<<<< HEAD
const socialLinks = [
  { name: 'Twitter', href: 'https://twitter.com/ziontechgroup', icon: Twitter },
  { name: 'LinkedIn', href: 'https://linkedin.com/company/ziontechgroup', icon: Linkedin },
  { name: 'Facebook', href: 'https://facebook.com/ziontechgroup', icon: Facebook },
  { name: 'Instagram', href: 'https://instagram.com/ziontechgroup', icon: Instagram },
  { name: 'YouTube', href: 'https://youtube.com/@ziontechgroup', icon: Youtube },
  { name: 'GitHub', href: 'https://github.com/ziontechgroup', icon: Github },
  { name: 'Discord', href: 'https://discord.gg/ziontechgroup', icon: MessageCircle },
  { name: 'Slack', href: 'https://ziontechgroup.slack.com', icon: MessageSquare }
];
>>>>>>> origin/cursor/enhance-app-with-new-services-and-futuristic-design-757c

export default function UltraFuturisticFooter2034() {
	const year = new Date().getFullYear();
	return (
		<footer className="border-t bg-gray-50 text-gray-700">
			<div className="mx-auto max-w-6xl px-4 py-8 text-sm flex flex-col md:flex-row items-center justify-between gap-3">
				<div>© {year} Zion Tech Group</div>
				<nav className="flex gap-4">
					<a href="/privacy" className="hover:underline">Privacy</a>
					<a href="/terms" className="hover:underline">Terms</a>
				</nav>
			</div>
		</footer>
	);
=======
const quickLinks = [
  { name: 'Home', href: '/', icon: Home },
  { name: 'Services', href: '/services', icon: Briefcase },
  { name: 'Solutions', href: '/solutions', icon: Target },
  { name: 'Pricing', href: '/pricing-2034', icon: DollarSign },
  { name: 'Resources', href: '/resources', icon: BookOpen },
  { name: 'Case Studies', href: '/case-studies', icon: FileText },
  { name: 'Blog', href: '/blog', icon: MessageSquare },
  { name: 'Contact', href: '/contact', icon: MessageCircle }
];

const companyLinks = [
  { name: 'About Us', href: '/about', icon: Users },
  { name: 'Careers', href: '/careers', icon: Briefcase },
  { name: 'News', href: '/news', icon: Newspaper },
  { name: 'Partners', href: '/partners', icon: Handshake },
  { name: 'Support', href: '/support', icon: LifeBuoy },
  { name: 'Status', href: '/status', icon: Activity }
=======
const companyLinks = [
  { name: 'About Us', href: '/about' },
  { name: 'Careers', href: '/careers' },
  { name: 'News & Updates', href: '/news' },
  { name: 'Case Studies', href: '/case-studies' },
  { name: 'Blog', href: '/blog' },
  { name: 'Resources', href: '/resources' },
  { name: 'Services Advertising', href: '/services-advertising' },
  { name: 'Market Pricing', href: '/market-pricing' }
];

const supportLinks = [
  { name: 'Contact Support', href: '/contact' },
  { name: 'Documentation', href: '/docs' },
  { name: 'API Reference', href: '/api-documentation-generator' },
  { name: 'Status Page', href: '/status-pages-slo' },
  { name: 'VAPT Services', href: '/vulnerability-assessment-penetration-testing' },
  { name: 'Mobile Device Management', href: '/mobile-device-management' },
  { name: 'Security', href: '/security' },
  { name: 'Privacy Policy', href: '/privacy' }
>>>>>>> origin/cursor/enhance-app-with-new-services-and-futuristic-design-d160
];

const socialLinks = [
  { name: 'LinkedIn', href: 'https://linkedin.com/company/ziontechgroup', icon: Linkedin },
  { name: 'GitHub', href: 'https://github.com/Zion-Holdings', icon: Github },
  { name: 'Instagram', href: 'https://instagram.com/ziontechgroup', icon: Instagram },
  { name: 'YouTube', href: 'https://youtube.com/@ziontechgroup', icon: Youtube },
<<<<<<< HEAD
  { name: 'Twitter', href: 'https://twitter.com/ziontechgroup', icon: Twitter }
];

const certifications = [
  'ISO 27001 Certified',
  'SOC 2 Type II Compliant',
  'GDPR Compliant',
  'HIPAA Compliant',
  'PCI DSS Level 1',
  'FedRAMP Authorized',
  'Quantum Security Certified',
  'AI Ethics Compliant'
];

const stats = [
  { label: 'Happy Customers', value: '50K+', icon: Users },
  { label: 'Services Delivered', value: '200+', icon: Rocket },
  { label: 'Countries Served', value: '45+', icon: Globe },
  { label: 'Success Rate', value: '99.9%', icon: CheckCircle }
=======
const industrySolutions = [
  { name: 'Healthcare', href: '/healthcare-solutions', icon: Pill },
  { name: 'Financial Services', href: '/financial-solutions', icon: Coins },
  { name: 'Manufacturing', href: '/manufacturing-solutions', icon: Cpu },
  { name: 'Retail & E-commerce', href: '/retail-solutions', icon: Globe },
  { name: 'Education', href: '/education-solutions', icon: GraduationCap },
  { name: 'Government', href: '/government-solutions', icon: Building2 }
];

const socialLinks = [
  { name: 'Twitter', href: 'https://twitter.com/ziontechgroup', icon: Twitter, color: 'hover:text-blue-400' },
  { name: 'LinkedIn', href: 'https://linkedin.com/company/ziontechgroup', icon: Linkedin, color: 'hover:text-blue-600' },
  { name: 'Facebook', href: 'https://facebook.com/ziontechgroup', icon: Facebook, color: 'hover:text-blue-500' },
  { name: 'Instagram', href: 'https://instagram.com/ziontechgroup', icon: Instagram, color: 'hover:text-pink-500' },
  { name: 'YouTube', href: 'https://youtube.com/@ziontechgroup', icon: Youtube, color: 'hover:text-red-500' },
  { name: 'GitHub', href: 'https://github.com/ziontechgroup', icon: Github, color: 'hover:text-gray-400' }
];

const quickActions = [
  { name: 'Get Started', href: '/contact', icon: ArrowRight, color: 'bg-gradient-to-r from-cyan-500 to-blue-600' },
  { name: 'View Pricing', href: '/pricing', icon: DollarSign, color: 'bg-gradient-to-r from-green-500 to-emerald-600' },
  { name: 'Book Demo', href: '/demo', icon: Settings, color: 'bg-gradient-to-r from-purple-500 to-pink-600' },
  { name: 'Download Brochure', href: '/brochure', icon: FileText, color: 'bg-gradient-to-r from-orange-500 to-red-600' }
>>>>>>> origin/cursor/enhance-app-with-new-services-and-futuristic-design-df1a
];

export default function UltraFuturisticFooter2034() {
  return (
<<<<<<< HEAD
    <footer className="bg-gradient-to-br from-black via-gray-900 to-black text-white relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-cyan-500/20 to-blue-500/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-tr from-purple-500/20 to-pink-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-r from-green-500/10 to-teal-500/10 rounded-full blur-3xl animate-pulse delay-500"></div>
      </div>

      <div className="relative z-10">
        {/* Main Footer Content */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-12">
            {/* Company Info */}
            <div className="lg:col-span-1">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="space-y-6"
              >
                <div className="flex items-center space-x-3">
                  <div className="relative">
                    <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-500 rounded-xl flex items-center justify-center">
                      <Rocket className="w-7 h-7 text-white" />
                    </div>
                    <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-500 rounded-xl blur opacity-30"></div>
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">
                      Zion Tech Group
                    </h3>
                    <p className="text-sm text-gray-400">Future Technology Solutions</p>
                  </div>
                </div>
                
                <p className="text-gray-300 leading-relaxed">
                  Leading provider of cutting-edge AI, quantum computing, and emerging technology solutions. 
                  Empowering businesses with innovative tools for the future.
                </p>

                {/* Stats */}
                <div className="grid grid-cols-2 gap-4">
                  {stats.map((stat, index) => (
                    <motion.div
                      key={stat.label}
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      viewport={{ once: true }}
                      className="text-center p-3 rounded-lg bg-white/5 backdrop-blur-sm border border-white/10"
                    >
                      <stat.icon className="w-6 h-6 text-cyan-400 mx-auto mb-2" />
                      <div className="text-lg font-bold text-white">{stat.value}</div>
                      <div className="text-xs text-gray-400">{stat.label}</div>
                    </motion.div>
                  ))}
                </div>

                {/* Contact Info */}
                <div className="space-y-3">
                  <div className="flex items-center space-x-3 text-gray-300 hover:text-cyan-400 transition-colors">
                    <Phone className="w-4 h-4" />
                    <span>{contactInfo.mobile}</span>
                  </div>
                  <div className="flex items-center space-x-3 text-gray-300 hover:text-blue-400 transition-colors">
                    <Mail className="w-4 h-4" />
                    <span>{contactInfo.email}</span>
                  </div>
                  <div className="flex items-center space-x-3 text-gray-300 hover:text-purple-400 transition-colors">
                    <MapPin className="w-4 h-4" />
                    <span className="text-sm">{contactInfo.address}</span>
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Services */}
            <div className="lg:col-span-2">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
                className="space-y-8"
              >
                <h3 className="text-xl font-bold text-white mb-6">Our Services</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  {serviceCategories.map((category, index) => (
                    <motion.div
                      key={category.title}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      viewport={{ once: true }}
                      className="space-y-4"
                    >
                      <div className="flex items-center space-x-2">
                        <category.icon className="w-5 h-5 text-cyan-400" />
                        <h4 className="font-semibold text-white">{category.title}</h4>
                      </div>
                      <div className="space-y-2">
                        {category.services.map((service) => (
                          <Link
                            key={service.name}
                            href={service.href}
                            className="flex items-center justify-between group hover:bg-white/5 rounded-lg p-2 transition-all duration-200"
                          >
                            <span className="text-gray-300 group-hover:text-cyan-400 transition-colors text-sm">
                              {service.name}
                            </span>
                            <span className="text-xs text-gray-500 group-hover:text-cyan-400 transition-colors">
                              {service.price}
                            </span>
                          </Link>
                        ))}
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </div>

            {/* Quick Links & Social */}
            <div className="lg:col-span-1">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                viewport={{ once: true }}
                className="space-y-8"
              >
                {/* Quick Links */}
                <div>
                  <h4 className="text-lg font-semibold text-white mb-4">Quick Links</h4>
                  <div className="space-y-2">
                    {quickLinks.map((link) => (
                      <Link
                        key={link.name}
                        href={link.href}
                        className="flex items-center space-x-2 text-gray-300 hover:text-cyan-400 transition-colors group"
                      >
                        <link.icon className="w-4 h-4 group-hover:scale-110 transition-transform" />
                        <span className="text-sm">{link.name}</span>
                      </Link>
                    ))}
                  </div>
                </div>

                {/* Company Links */}
                <div>
                  <h4 className="text-lg font-semibold text-white mb-4">Company</h4>
                  <div className="space-y-2">
                    {companyLinks.map((link) => (
                      <Link
                        key={link.name}
                        href={link.href}
                        className="flex items-center space-x-2 text-gray-300 hover:text-cyan-400 transition-colors group"
                      >
                        <link.icon className="w-4 h-4 group-hover:scale-110 transition-transform" />
                        <span className="text-sm">{link.name}</span>
                      </Link>
                    ))}
                  </div>
                </div>

                {/* Social Links */}
                <div>
                  <h4 className="text-lg font-semibold text-white mb-4">Follow Us</h4>
                  <div className="flex space-x-4">
                    {socialLinks.map((social) => (
                      <Link
                        key={social.name}
                        href={social.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-10 h-10 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-lg flex items-center justify-center text-white hover:from-cyan-600 hover:to-blue-600 transition-all duration-200 hover:scale-110"
                      >
                        <social.icon className="w-5 h-5" />
                      </Link>
                    ))}
                  </div>
                </div>
              </motion.div>
            </div>
          </div>

          {/* Certifications */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            viewport={{ once: true }}
            className="mt-16 pt-8 border-t border-white/10"
          >
            <h4 className="text-lg font-semibold text-white mb-6 text-center">Certifications & Compliance</h4>
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-4">
              {certifications.map((cert, index) => (
                <motion.div
                  key={cert}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex items-center justify-center p-3 rounded-lg bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/10 transition-all duration-200"
                >
                  <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                  <span className="text-xs text-gray-300 text-center">{cert}</span>
                </motion.div>
              ))}
=======
  { name: 'Facebook', href: 'https://facebook.com/ziontechgroup', icon: Facebook },
  { name: 'Twitter', href: 'https://twitter.com/ziontechgroup', icon: Twitter }
];

const UltraFuturisticFooter2034: React.FC = () => {
  return (
    <footer className="bg-gradient-to-b from-gray-900 via-black to-gray-900 text-white relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-r from-cyan-900/20 via-blue-900/20 to-purple-900/20"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(6,182,212,0.1),transparent_50%)]"></div>
      
      {/* Floating Particles */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-10 w-2 h-2 bg-cyan-400 rounded-full animate-pulse"></div>
        <div className="absolute top-40 right-20 w-1 h-1 bg-blue-400 rounded-full animate-ping"></div>
        <div className="absolute bottom-40 left-20 w-1.5 h-1.5 bg-purple-400 rounded-full animate-pulse"></div>
        <div className="absolute top-60 right-40 w-1 h-1 bg-pink-400 rounded-full animate-bounce"></div>
        <div className="absolute bottom-20 right-10 w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-8">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          {/* Company Info */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <div className="flex items-center space-x-3">
              <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-500 rounded-xl flex items-center justify-center">
                <Rocket className="w-7 h-7 text-white" />
              </div>
              <div>
                <h2 className="text-2xl font-bold bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">
                  Zion Tech Group
                </h2>
                <p className="text-sm text-gray-400">Leading the Future of Technology</p>
              </div>
            </div>
            
            <p className="text-gray-300 text-lg leading-relaxed max-w-md">
              Pioneering the next generation of AI, quantum computing, and enterprise technology solutions. 
              We're building the future, one innovation at a time with 1000+ revolutionary services.
            </p>
            
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-2 text-cyan-400">
                <Star className="w-5 h-5 fill-current" />
                <span className="text-sm font-medium">4.9/5 Rating</span>
              </div>
              <div className="flex items-center space-x-2 text-green-400">
                <TrendingUp className="w-5 h-5" />
                <span className="text-sm font-medium">1000+ Services</span>
              </div>
              <div className="flex items-center space-x-2 text-blue-400">
                <Zap className="w-5 h-5" />
                <span className="text-sm font-medium">1000% Growth</span>
              </div>
            </div>
          </motion.div>

          {/* Contact Information */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-6"
          >
            <h3 className="text-xl font-semibold text-white">Get in Touch</h3>
            <div className="space-y-4">
              <a 
                href={`tel:${contactInfo.mobile}`} 
                className="flex items-center space-x-3 text-gray-300 hover:text-cyan-400 transition-colors group"
              >
                <div className="w-10 h-10 bg-cyan-500/20 rounded-lg flex items-center justify-center group-hover:bg-cyan-500/30 transition-colors">
                  <Phone className="w-5 h-5 text-cyan-400" />
                </div>
                <div>
                  <p className="text-sm text-gray-400">Phone</p>
                  <p className="font-medium">{contactInfo.mobile}</p>
                </div>
              </a>
              
              <a 
                href={`mailto:${contactInfo.email}`} 
                className="flex items-center space-x-3 text-gray-300 hover:text-cyan-400 transition-colors group"
              >
                <div className="w-10 h-10 bg-blue-500/20 rounded-lg flex items-center justify-center group-hover:bg-blue-500/30 transition-colors">
                  <Mail className="w-5 h-5 text-blue-400" />
                </div>
                <div>
                  <p className="text-sm text-gray-400">Email</p>
                  <p className="font-medium">{contactInfo.email}</p>
                </div>
              </a>
              
              <div className="flex items-center space-x-3 text-gray-300">
                <div className="w-10 h-10 bg-purple-500/20 rounded-lg flex items-center justify-center">
                  <MapPin className="w-5 h-5 text-purple-400" />
                </div>
                <div>
                  <p className="text-sm text-gray-400">Address</p>
                  <p className="font-medium">{contactInfo.address}</p>
                </div>
              </div>
>>>>>>> origin/cursor/enhance-app-with-new-services-and-futuristic-design-d160
            </div>
          </motion.div>
        </div>

<<<<<<< HEAD
        {/* Bottom Bar */}
        <div className="border-t border-white/10 bg-black/50 backdrop-blur-sm">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
            <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
              <div className="flex items-center space-x-6 text-sm text-gray-400">
                <span>&copy; 2024 Zion Tech Group. All rights reserved.</span>
                <Link href="/privacy" className="hover:text-cyan-400 transition-colors">Privacy Policy</Link>
                <Link href="/terms" className="hover:text-cyan-400 transition-colors">Terms of Service</Link>
              </div>
              
              <div className="flex items-center space-x-2 text-gray-400">
                <Heart className="w-4 h-4 text-red-400" />
                <span className="text-sm">Made with ❤️ for the future</span>
              </div>
=======
    <footer className="relative bg-black border-t border-white/10 overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-gray-900/50 to-black">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(120,119,198,0.1),transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(120,119,198,0.1),transparent_50%)]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 py-16">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-4 gap-12 mb-16">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-6">
              <div className="relative">
                <div className="w-12 h-12 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-xl flex items-center justify-center">
                  <Zap className="w-7 h-7 text-white" />
                </div>
                <div className="absolute -inset-1 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-xl opacity-20 -z-10" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-white">Zion Tech Group</h3>
                <p className="text-cyan-400 text-sm">Revolutionary Technology Solutions</p>
              </div>
            </div>
            
            <p className="text-gray-400 mb-6 leading-relaxed max-w-md">
              Transform your business with cutting-edge AI, quantum computing, and emerging technologies. 
              Enterprise-grade solutions with 99.9% uptime and 24/7 expert support.
            </p>

            {/* Contact Info */}
            <div className="space-y-3 mb-6">
              <div className="flex items-center gap-3 text-gray-300">
                <Phone className="w-4 h-4 text-cyan-400" />
                <span>{contactInfo.mobile}</span>
              </div>
              <div className="flex items-center gap-3 text-gray-300">
                <Mail className="w-4 h-4 text-cyan-400" />
                <span>{contactInfo.email}</span>
              </div>
              <div className="flex items-center gap-3 text-gray-300">
                <MapPin className="w-4 h-4 text-cyan-400" />
                <span className="text-sm">{contactInfo.address}</span>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex items-center gap-4">
              {socialLinks.map((social) => (
                <Link
                  key={social.name}
                  href={social.href}
                  className={`p-2 text-gray-400 ${social.color} transition-colors duration-200 hover:bg-white/5 rounded-lg`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <social.icon className="w-5 h-5" />
                </Link>
              ))}
            </div>
          </div>

          {/* Service Categories */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-6">Our Services</h4>
            <div className="space-y-4">
              {serviceCategories.map((category) => (
                <div key={category.title} className="mb-6">
                  <div className="flex items-center gap-2 mb-3">
                    {category.icon}
                    <h5 className="font-medium text-white">{category.title}</h5>
                  </div>
                  <div className="space-y-2">
                    {category.services.slice(0, 4).map((service) => (
                      <Link
                        key={service.name}
                        href={service.href}
                        className="block text-sm text-gray-400 hover:text-cyan-400 transition-colors duration-200"
                      >
                        {service.name}
                      </Link>
                    ))}
                    {category.services.length > 4 && (
                      <Link
                        href={`/${category.title.toLowerCase().replace(/\s+/g, '-')}`}
                        className="block text-sm text-cyan-400 hover:text-cyan-300 transition-colors duration-200 font-medium"
                      >
                        View All {category.title} →
                      </Link>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-6">Quick Links</h4>
            
            {/* Company Links */}
            <div className="mb-6">
              <h5 className="text-sm font-medium text-gray-300 mb-3">Company</h5>
              <div className="space-y-2">
                {companyLinks.slice(0, 3).map((link) => (
                  <Link
                    key={link.name}
                    href={link.href}
                    className="block text-sm text-gray-400 hover:text-cyan-400 transition-colors duration-200"
                  >
                    {link.name}
                  </Link>
                ))}
              </div>
            </div>

            {/* Support Links */}
            <div className="mb-6">
              <h5 className="text-sm font-medium text-gray-300 mb-3">Support</h5>
              <div className="space-y-2">
                {supportLinks.slice(0, 3).map((link) => (
                  <Link
                    key={link.name}
                    href={link.href}
                    className="block text-sm text-gray-400 hover:text-cyan-400 transition-colors duration-200"
                  >
                    {link.name}
                  </Link>
                ))}
              </div>
            </div>

            {/* Industry Solutions */}
            <div>
              <h5 className="text-sm font-medium text-gray-300 mb-3">Industries</h5>
              <div className="grid grid-cols-2 gap-2">
                {industrySolutions.slice(0, 4).map((solution) => (
                  <Link
                    key={solution.name}
                    href={solution.href}
                    className="flex items-center gap-2 p-2 text-xs text-gray-400 hover:text-cyan-400 hover:bg-white/5 rounded-lg transition-all duration-200"
                  >
                    <solution.icon className="w-3 h-3" />
                    <span>{solution.name}</span>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Quick Actions */}
        <div className="border-t border-white/10 pt-8 mb-8">
          <h4 className="text-lg font-semibold text-white mb-6 text-center">Ready to Get Started?</h4>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {quickActions.map((action) => (
              <Link key={action.name} href={action.href}>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className={`w-full p-4 rounded-xl ${action.color} text-white font-medium hover:shadow-lg transition-all duration-300 flex items-center justify-center gap-2`}
                >
                  <action.icon className="w-4 h-4" />
                  {action.name}
                </motion.button>
              </Link>
            ))}
          </div>
        </div>

        {/* Newsletter Signup */}
        <div className="border-t border-white/10 pt-8 mb-8">
          <div className="max-w-2xl mx-auto text-center">
            <h4 className="text-lg font-semibold text-white mb-3">Stay Updated with Latest Tech</h4>
            <p className="text-gray-400 mb-6">Get insights on AI, quantum computing, and emerging technologies</p>
            <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-cyan-400 transition-colors"
              />
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-medium rounded-lg hover:from-cyan-600 hover:to-blue-700 transition-all duration-300"
              >
                Subscribe
              </motion.button>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 pt-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="text-sm text-gray-400">
              © 2025 Zion Tech Group. All rights reserved.
            </div>
            
            <div className="flex items-center gap-6 text-sm">
              <Link href="/privacy" className="text-gray-400 hover:text-cyan-400 transition-colors">
                Privacy Policy
              </Link>
              <Link href="/terms" className="text-gray-400 hover:text-cyan-400 transition-colors">
                Terms of Service
              </Link>
              <Link href="/cookies" className="text-gray-400 hover:text-cyan-400 transition-colors">
                Cookie Policy
              </Link>
>>>>>>> origin/cursor/enhance-app-with-new-services-and-futuristic-design-df1a
            </div>
          </div>
        </div>
      </div>
<<<<<<< HEAD
=======

      {/* Floating Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(10)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-cyan-400 rounded-full opacity-20"
            animate={{
              x: [0, 50, 0],
              y: [0, -50, 0],
              opacity: [0.2, 0.5, 0.2],
            }}
            transition={{
              duration: 8 + i * 2,
              repeat: Infinity,
              delay: i * 0.5,
            }}
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
          />
        ))}
      </div>
>>>>>>> origin/cursor/enhance-app-with-new-services-and-futuristic-design-df1a
    </footer>
  );
>>>>>>> origin/cursor/enhance-app-with-new-services-and-futuristic-design-767b
}
=======
        {/* Service Categories Grid */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-8 mb-16"
        >
          {serviceCategories.map((category, index) => (
            <div key={category.title} className="space-y-4">
              <h3 className="text-lg font-semibold text-white flex items-center space-x-2">
                <div className={`w-8 h-8 bg-gradient-to-r ${category.color} rounded-lg flex items-center justify-center`}>
                  <category.icon className="w-4 h-4 text-white" />
                </div>
                <span>{category.title.split(' ').slice(1).join(' ')}</span>
              </h3>
              <ul className="space-y-2">
                {category.services.map((service) => (
                  <li key={service.name}>
                    <Link 
                      href={service.href}
                      className="text-gray-400 hover:text-cyan-400 transition-colors text-sm flex items-center group"
                    >
                      <ArrowRight className="w-3 h-3 mr-2 group-hover:translate-x-1 transition-transform" />
                      <span className="line-clamp-2">{service.name}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </motion.div>

        {/* Company & Support Links */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12"
        >
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-white">Company</h4>
            <ul className="space-y-3">
              {companyLinks.map((link) => (
                <li key={link.name}>
                  <Link 
                    href={link.href}
                    className="text-gray-400 hover:text-cyan-400 transition-colors text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-white">Support</h4>
            <ul className="space-y-3">
              {supportLinks.map((link) => (
                <li key={link.name}>
                  <Link 
                    href={link.href}
                    className="text-gray-400 hover:text-cyan-400 transition-colors text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </motion.div>

        {/* Impact Metrics */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="grid grid-cols-1 gap-8 mb-12"
        >
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-white">Our Impact</h4>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="text-center p-4 bg-gray-800/50 rounded-lg border border-gray-700/50">
                <div className="text-2xl font-bold text-cyan-400">1000+</div>
                <div className="text-xs text-gray-400">Services</div>
              </div>
              <div className="text-center p-4 bg-gray-800/50 rounded-lg border border-gray-700/50">
                <div className="text-2xl font-bold text-purple-400">1000%</div>
                <div className="text-xs text-gray-400">ROI</div>
              </div>
              <div className="text-center p-4 bg-gray-800/50 rounded-lg border border-gray-700/50">
                <div className="text-2xl font-bold text-green-400">24/7</div>
                <div className="text-xs text-gray-400">Support</div>
              </div>
              <div className="text-center p-4 bg-gray-800/50 rounded-lg border border-gray-700/50">
                <div className="text-2xl font-bold text-pink-400">99.9%</div>
                <div className="text-xs text-gray-400">Uptime</div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Social Links & Newsletter */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.0 }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12"
        >
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-white">Follow Us</h4>
            <div className="flex space-x-4">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-gray-800/50 border border-gray-700/50 rounded-lg flex items-center justify-center text-gray-400 hover:text-cyan-400 hover:border-cyan-500/50 transition-all duration-200"
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>
          
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-white">Stay Updated</h4>
            <p className="text-gray-400 text-sm">
              Get the latest insights on AI, quantum computing, and emerging technologies.
            </p>
            <div className="flex space-x-2">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-2 bg-gray-800/50 border border-gray-700/50 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-cyan-500/50 focus:ring-1 focus:ring-cyan-500/50"
              />
              <button className="px-6 py-2 bg-gradient-to-r from-cyan-500 to-blue-500 text-white rounded-lg hover:from-cyan-600 hover:to-blue-600 transition-all duration-300 transform hover:scale-105">
                Subscribe
              </button>
            </div>
          </div>
        </motion.div>

        {/* Newsletter Section */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.2 }}
          className="mt-12 pt-12 border-t border-gray-700/50"
        >
          <div className="text-center">
            <h3 className="text-2xl font-bold text-white mb-4">
              Stay Updated with Latest Innovations
            </h3>
            <p className="text-gray-400 mb-6 max-w-2xl mx-auto">
              Get exclusive insights into the latest AI, quantum computing, and IT innovations. 
              Be the first to know about new services and breakthrough technologies.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 bg-gray-800/50 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
              />
              <button className="px-6 py-3 bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-semibold rounded-lg hover:from-cyan-600 hover:to-purple-700 transition-all duration-200 shadow-lg hover:shadow-xl">
                Subscribe
              </button>
            </div>
          </div>
        </motion.div>

        {/* Bottom Footer */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.4 }}
          className="border-t border-gray-700/50"
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
            <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
              <div className="flex items-center space-x-2 text-gray-400 text-sm">
                <Globe className="w-4 h-4" />
                <span>© 2025 Zion Tech Group. All rights reserved.</span>
              </div>
              <div className="flex items-center space-x-6 text-sm text-gray-400">
                <Link href="/terms" className="hover:text-cyan-400 transition-colors duration-200">
                  Terms of Service
                </Link>
                <Link href="/privacy" className="hover:text-cyan-400 transition-colors duration-200">
                  Privacy Policy
                </Link>
                <Link href="/cookies" className="hover:text-cyan-400 transition-colors duration-200">
                  Cookie Policy
                </Link>
              </div>
            </div>
            <div className="text-center mt-4">
              <div className="flex items-center justify-center space-x-6 text-sm text-gray-400">
                <span>Made with ❤️ for the future</span>
                <span>•</span>
                <span>Powered by AI & Quantum Computing</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default UltraFuturisticFooter2034;
>>>>>>> origin/cursor/enhance-app-with-new-services-and-futuristic-design-d160
