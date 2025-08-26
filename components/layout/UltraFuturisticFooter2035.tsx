import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { 
  Phone, Mail, MapPin, Globe, 
  Twitter, Linkedin, Facebook, Instagram,
  ArrowRight, Zap, Shield, Rocket, Brain,
  Star, Users, TrendingUp
} from 'lucide-react';

const contactInfo = {
  mobile: '+1 302 464 0950',
  email: 'kleber@ziontechgroup.com',
  address: '364 E Main St STE 1008 Middletown DE 19709',
  website: 'https://ziontechgroup.com'
};

function normalizeHref(href: string): string {
  if (!href) return href;
  if (href.startsWith('http://') || href.startsWith('https://') || href.startsWith('mailto:') || href.startsWith('tel:')) {
    return href;
  }
  if (!href.startsWith('/')) return href;
  const hasQueryOrHash = href.includes('?') || href.includes('#');
  if (hasQueryOrHash) return href;
  return href.endsWith('/') ? href : href + '/';
}

const footerSections = [
  {
    title: 'Featured Services',
    description: 'Our most popular and innovative solutions',
    icon: <Star className="w-5 h-5 text-yellow-400" />,
    links: [
      { name: 'AI Customer Success Platform', href: '/ai-customer-success-platform', featured: true },
      { name: 'Supply Chain Optimization', href: '/intelligent-supply-chain-optimization', featured: true },
      { name: 'AI Financial Planning', href: '/ai-financial-planning-platform', featured: true },
      { name: 'AI Sales Intelligence', href: '/ai-sales-intelligence-platform', featured: true },
      { name: 'HR Analytics Platform', href: '/ai-hr-analytics-platform' },
      { name: 'AI Decision Engine', href: '/ai-powered-decision-engine' },
      { name: 'Content Automation', href: '/intelligent-content-automation-platform' },
      { name: 'CRM Intelligence Suite', href: '/smart-crm-intelligence-suite' },
      { name: 'AI Evaluation Orchestrator', href: '/ai-evaluation-orchestrator', featured: true },
      { name: 'SEO Automation Suite', href: '/seo-automation-suite' },
      { name: 'IT Asset Discovery Agent', href: '/it-asset-discovery-agent' },
      { name: 'Managed Postgres HA', href: '/managed-postgres-ha' },
      { name: 'RAG Evaluation Lab', href: '/rag-evaluation-lab/' },
      { name: 'Browser Automation Cloud', href: '/browser-automation-cloud/' },
      { name: 'Secrets Rotation Automation', href: '/secrets-rotation-automation/' },
      { name: 'API Performance Testing', href: '/api-performance-testing/' },
      { name: 'SOC 2 Compliance Automation', href: '/soc2-compliance-automation/' }
    ]
  },
  {
    title: 'AI & Consciousness',
    description: 'Revolutionary AI platforms and solutions',
    icon: <Brain className="w-5 h-5 text-cyan-400" />,
    links: [
      { name: 'AI Consciousness Evolution', href: '/ai-consciousness-evolution-2029' },
      { name: 'AI Quantum Neural Network', href: '/ai-quantum-neural-network' },
      { name: 'AI Autonomous Business Operations', href: '/ai-autonomous-business-operations' },
      { name: 'AI Autonomous Research', href: '/ai-autonomous-research-assistant' },
      { name: 'AI Emotional Intelligence', href: '/ai-emotional-intelligence-training' },
      { name: 'AI Predictive Maintenance', href: '/ai-predictive-maintenance-platform' },
      { name: 'AI Content Personalization', href: '/ai-content-personalization-engine' },
      { name: 'AI Autonomous Ecosystem', href: '/ai-autonomous-ecosystem-manager' },
      { name: 'AI Ethics & Governance', href: '/ai-ethics-governance-framework' }
    ]
  },
  {
    title: 'Quantum & Emerging Tech',
    description: 'Breakthrough quantum and space technologies',
    icon: <Atom className="w-5 h-5 text-blue-400" />,
    links: [
      { name: 'Space Resource Mining', href: '/space-resource-mining-platform' },
      { name: 'Quantum Internet Security', href: '/quantum-internet-security-platform' },
      { name: 'Quantum-Secure Cloud Infrastructure', href: '/quantum-secure-cloud-infrastructure' },
      { name: 'Quantum Financial Trading Platform', href: '/quantum-financial-trading' },
      { name: 'AI-Powered Space Technology', href: '/space-technology-ai-platform' },
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
    description: 'Advanced enterprise infrastructure solutions',
    icon: <Shield className="w-5 h-5 text-purple-400" />,
    links: [
      { name: 'Quantum-Secure Cloud', href: '/quantum-secure-cloud-infrastructure' },
      { name: 'Autonomous IT Operations', href: '/autonomous-it-operations-center' },
      { name: 'Edge Computing Orchestration', href: '/edge-computing-orchestration-platform' },
      { name: 'Blockchain Infrastructure', href: '/blockchain-infrastructure-platform' },
      { name: 'AI-Powered DevOps', href: '/ai-powered-devops-platform' },
      { name: 'Quantum Cloud Infrastructure', href: '/quantum-cloud-infrastructure-platform' },
      { name: 'Zero Trust Security', href: '/zero-trust-security-platform' },
      { name: 'AI-Powered Cybersecurity', href: '/ai-powered-cybersecurity' }
    ]
  },
  {
    title: 'Micro SAAS',
    description: 'Innovative business solutions for modern enterprises',
    icon: <Rocket className="w-5 h-5 text-emerald-400" />,
    links: [
      { name: 'AI Content Generator', href: '/ai-content-generator' },
      { name: 'AI Code Review', href: '/ai-code-review' },
      { name: 'AI Meeting Transcriber', href: '/ai-meeting-transcriber-pro' },
      { name: 'AI Legal Contract Analyzer', href: '/ai-legal-contract-analyzer' },
      { name: 'AI Market Research', href: '/ai-market-research' },
      { name: 'AI Sales Automation', href: '/ai-sales-automation' },
      { name: 'AI HR Recruitment', href: '/ai-hr-recruitment' },
      { name: 'AI Customer Service', href: '/ai-customer-service' }
    ]
  },
  {
    title: 'Industry Solutions',
    description: 'Industry-specific technology solutions',
    icon: <Building className="w-5 h-5 text-orange-400" />,
    links: [
      { name: 'Healthcare Solutions', href: '/healthcare-solutions' },
      { name: 'Financial Services', href: '/financial-solutions' },
      { name: 'Manufacturing AI', href: '/manufacturing-ai-solutions' },
      { name: 'Retail Technology', href: '/retail-technology-solutions' },
      { name: 'Education Technology', href: '/education-technology-solutions' },
      { name: 'Government Solutions', href: '/government-technology-solutions' },
      { name: 'Energy & Utilities', href: '/energy-utilities-solutions' },
      { name: 'Biotech AI Research', href: '/biotech-ai-research-platform' }
    ]
  },
  {
    title: 'Resources',
    description: 'Documentation, support, and learning',
    icon: <BookOpen className="w-5 h-5 text-cyan-400" />,
    links: [
      { name: 'Blog', href: '/blog' },
      { name: 'Case Studies', href: '/case-studies' },
      { name: 'Events', href: '/events' },
      { name: 'Webinars', href: '/webinars' },
      { name: 'Support Center', href: '/support' },
      { name: 'Training & Certification', href: '/training' },
      { name: 'Market Pricing', href: '/market-pricing' },
      { name: 'Services Advertising', href: '/services-advertising' },
      { name: 'RAG Evaluation Lab', href: '/rag-evaluation-lab' },
      { name: 'SOC 2 Compliance Automation', href: '/soc2-compliance-automation' },
      { name: 'Browser Automation Cloud', href: '/browser-automation-cloud' },
      { name: 'Secrets Rotation Automation', href: '/secrets-rotation-automation' },
      { name: 'API Performance Testing', href: '/api-performance-testing' }
    ]
  }
];

const socialLinks = [
  { name: 'X', href: '/social/twitter/', icon: <Twitter className="w-5 h-5" /> },
  { name: 'LinkedIn', href: '/social/linkedin/', icon: <Linkedin className="w-5 h-5" /> },
  { name: 'Facebook', href: 'https://www.facebook.com/ziontechgroup', icon: <Facebook className="w-5 h-5" /> },
  { name: 'Instagram', href: 'https://www.instagram.com/ziontechgroup', icon: <Instagram className="w-5 h-5" /> },
  { name: 'YouTube', href: 'https://www.youtube.com/@ziontechgroup', icon: <Youtube className="w-5 h-5" /> },
  { name: 'GitHub', href: 'https://github.com/Zion-Holdings', icon: <Github className="w-5 h-5" /> }
];

const UltraFuturisticFooter2035: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const footerSections = [
    {
      title: 'Services',
      items: [
        { name: 'AI & Consciousness', href: '/ai-services' },
        { name: 'Quantum & Emerging Tech', href: '/quantum-services' },
        { name: 'Enterprise IT', href: '/enterprise-it' },
        { name: 'Space & Metaverse', href: '/space-technology' },
        { name: 'Micro SAAS', href: '/micro-saas' },
        { name: 'Healthcare & Biotech', href: '/healthcare-biotech' }
      ]
    },
    {
      title: 'Solutions',
      items: [
        { name: 'AI Legal Document Generator', href: '/ai-legal-document-generator' },
        { name: 'Quantum Financial Forecasting', href: '/quantum-financial-forecasting' },
        { name: 'AI Healthcare Diagnostic', href: '/ai-healthcare-diagnostic-assistant' },
        { name: 'Quantum Cybersecurity Suite', href: '/quantum-cybersecurity-suite' },
        { name: 'AI Supply Chain Optimizer', href: '/ai-supply-chain-optimizer' },
        { name: 'Space Mining Platform', href: '/space-mining-platform' }
      ]
    },
    {
      title: 'Company',
      items: [
        { name: 'About Us', href: '/about' },
        { name: 'Our Team', href: '/team' },
        { name: 'Careers', href: '/careers' },
        { name: 'Case Studies', href: '/case-studies' },
        { name: 'Blog', href: '/blog' },
        { name: 'Press', href: '/press' }
      ]
    },
    {
      title: 'Resources',
      items: [
        { name: 'Documentation', href: '/docs' },
        { name: 'API Reference', href: '/api' },
        { name: 'Support Center', href: '/support' },
        { name: 'Community', href: '/community' },
        { name: 'Training', href: '/training' },
        { name: 'Research', href: '/research' }
      ]
    }
  ];

  const socialLinks = [
    { name: 'Twitter', href: '#', icon: <Twitter className="w-5 h-5" /> },
    { name: 'LinkedIn', href: '#', icon: <Linkedin className="w-5 h-5" /> },
    { name: 'Facebook', href: '#', icon: <Facebook className="w-5 h-5" /> },
    { name: 'Instagram', href: '#', icon: <Instagram className="w-5 h-5" /> }
  ];

  const stats = [
    { icon: <Users className="w-6 h-6" />, value: '50K+', label: 'Happy Customers' },
    { icon: <Star className="w-6 h-6" />, value: '4.9/5', label: 'Average Rating' },
    { icon: <TrendingUp className="w-6 h-6" />, value: '200%', label: 'ROI Improvement' },
    { icon: <Globe className="w-6 h-6" />, value: '150+', label: 'Countries Served' }
  ];

  return (
    <footer className="relative bg-black text-white overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-black to-black"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(56,189,248,0.1),transparent_50%)]"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(168,85,247,0.1),transparent_50%)]"></div>
      
      <div className="relative z-10">
        {/* Stats Section */}
        <section className="py-16 border-b border-gray-800/50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="text-center group"
                >
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 rounded-2xl mb-4 group-hover:scale-110 transition-transform duration-300">
                    <div className="text-cyan-400 group-hover:text-purple-400 transition-colors duration-300">
                      {stat.icon}
                    </div>
                  </div>
                  <div className="text-3xl font-bold text-white mb-2">{stat.value}</div>
                  <div className="text-gray-400 text-sm">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Main Footer Content */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8">
              {/* Company Info */}
              <div className="lg:col-span-2">
                <div className="mb-6">
                  <Link href="/" className="flex items-center space-x-3 group">
                    <div className="relative">
                      <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-xl flex items-center justify-center text-white font-bold text-2xl group-hover:scale-110 transition-transform duration-300">
                        Z
                      </div>
                      <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-xl blur opacity-75 group-hover:opacity-100 transition-opacity duration-300 -z-10"></div>
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-white">Zion Tech Group</div>
                      <div className="text-sm text-gray-400">Future Technology Solutions</div>
                    </div>
                  </Link>
                </div>
                
                <p className="text-gray-300 mb-6 leading-relaxed">
                  Leading the future of technology with cutting-edge AI, quantum computing, and emerging technology solutions. 
                  Transforming businesses through innovation and intelligent automation.
                </p>

                {/* Contact Info */}
                <div className="space-y-3">
                  <div className="flex items-center space-x-3 text-gray-300">
                    <Phone className="w-4 h-4 text-cyan-400" />
                    <span>+1 302 464 0950</span>
                  </div>
                  <div className="flex items-center space-x-3 text-gray-300">
                    <Mail className="w-4 h-4 text-purple-400" />
                    <span>kleber@ziontechgroup.com</span>
                  </div>
                  <div className="flex items-center space-x-3 text-gray-300">
                    <MapPin className="w-4 h-4 text-green-400" />
                    <span>364 E Main St STE 1008, Middletown DE 19709</span>
                  </div>
                </div>

                {/* Social Links */}
                <div className="flex items-center space-x-4 mt-6">
                  {socialLinks.map((social, index) => (
                    <motion.a
                      key={index}
                      href={social.href}
                      whileHover={{ scale: 1.1, y: -2 }}
                      whileTap={{ scale: 0.95 }}
                      className="w-10 h-10 bg-gray-800/50 hover:bg-gradient-to-r hover:from-cyan-500 hover:to-purple-500 rounded-lg flex items-center justify-center text-gray-400 hover:text-white transition-all duration-300 border border-gray-700/50 hover:border-transparent"
                    >
                      {social.icon}
                    </motion.a>
                  ))}
                </div>
              </div>

              {/* Footer Sections */}
              {footerSections.map((section, sectionIndex) => (
                <div key={sectionIndex}>
                  <h3 className="text-lg font-semibold text-white mb-6 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                    {section.title}
                  </h3>
                  <ul className="space-y-3">
                    {section.items.map((item, itemIndex) => (
                      <motion.li
                        key={itemIndex}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: sectionIndex * 0.1 + itemIndex * 0.05 }}
                        viewport={{ once: true }}
                      >
                        <Link
                          href={item.href}
                          className="text-gray-400 hover:text-cyan-400 transition-colors duration-200 flex items-center group"
                        >
                          <ArrowRight className="w-3 h-3 mr-2 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-200" />
                          {item.name}
                        </Link>
                      </motion.li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Newsletter Section */}
        <section className="py-16 border-t border-gray-800/50">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h3 className="text-3xl font-bold text-white mb-4">
                Stay Ahead of the Future
              </h3>
              <p className="text-gray-300 mb-8 text-lg">
                Get the latest insights on AI, quantum computing, and emerging technologies delivered to your inbox.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-6 py-3 bg-gray-800/50 border border-gray-700/50 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500/20 transition-all duration-300"
                />
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-3 bg-gradient-to-r from-cyan-500 to-purple-500 text-white font-semibold rounded-xl hover:from-cyan-600 hover:to-purple-600 transition-all duration-300 shadow-lg shadow-cyan-500/25"
                >
                  Subscribe
                </motion.button>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Bottom Bar */}
        <section className="py-8 border-t border-gray-800/50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col md:flex-row items-center justify-between">
              <div className="text-gray-400 text-sm mb-4 md:mb-0">
                © {currentYear} Zion Tech Group. All rights reserved.
              </div>
              
              <div className="flex items-center space-x-6 text-sm text-gray-400">
                <Link href="/privacy" className="hover:text-cyan-400 transition-colors duration-200">
                  Privacy Policy
                </Link>
                <Link href="/terms" className="hover:text-cyan-400 transition-colors duration-200">
                  Terms of Service
                </Link>
                <Link href="/cookies" className="hover:text-cyan-400 transition-colors duration-200">
                  Cookie Policy
                </Link>
                <Link href="/security" className="hover:text-cyan-400 transition-colors duration-200">
                  Security
                </Link>
              </div>
            </div>
          </div>
        </section>
      </div>
    </footer>
  );
};

export default UltraFuturisticFooter2035;