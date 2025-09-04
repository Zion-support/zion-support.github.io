<<<<<<< HEAD
import { Link  } from 'react-router-dom';
 from 'framer-motion';

 from 'lucide-react';

  const footerSections = [
    {
      title: 'Comprehensive Services 2026',
      featured: true,
      links: [
        { name: 'All Services & Pricing', href: '/comprehensive-services-showcase-2026', featured: true },
        { name: 'Pricing Guide 2026', href: '/comprehensive-pricing-guide-2026', featured: true },
        { name: 'Pricing Guide 2030', href: '/comprehensive-pricing-guide-2030', featured: true },
        { name: 'Micro SaaS Solutions', href: '/services/micro-saas', featured: true },
        { name: 'AI Solutions', href: '/services/ai-business-intelligence', featured: true },
        { name: 'IT Infrastructure', href: '/services/it-infrastructure', featured: true },
        { name: 'Cloud DevOps', href: '/services/cloud-devops', featured: true },
        { name: 'Data Analytics', href: '/services/data-analytics', featured: true },
        { name: 'Digital Twin Platform', href: '/services/digital-twin', featured: true },
        { name: 'Quantum Computing', href: '/services/quantum-computing', featured: true },
        { name: 'Blockchain Solutions', href: '/services#blockchain', featured: true },
        { name: 'IoT Edge Computing', href: '/services/iot-edge-computing', featured: true }
      ]
    },
    {
      title: 'Revolutionary 2030 Services',
      featured: true,
      links: [
        { name: 'Revolutionary Services 2030', href: '/revolutionary-services-2030', featured: true },
        { name: 'Quantum AI Trading Platform', href: '/revolutionary-services-2030#quantum-ai-trading', featured: true },
        { name: 'Neural Interface Platform', href: '/revolutionary-services-2030#neural-interface', featured: true },
        { name: 'Holographic Workspace Platform', href: '/services#holographic-workspace', featured: true },
        { name: 'BioDigital Twin Platform', href: '/services#biodigital-twin', featured: true },
        { name: 'Space Debris Tracking System', href: '/services#space-debris-tracking', featured: true },
        { name: 'AI Ethics Guardian Platform', href: '/services#ai-ethics-guardian', featured: true },
        { name: 'Metaverse Builder Platform', href: '/services#metaverse-builder', featured: true },
        { name: 'AI Autonomous Operations', href: '/revolutionary-services-2030#ai-autonomous-business-operations-2030' },
        { name: 'Quantum AI Cybersecurity', href: '/revolutionary-services-2030#quantum-ai-cybersecurity-2030' },
        { name: 'AI Content Creation Studio', href: '/revolutionary-services-2030#ai-content-creation-studio-2030' }
      ]
    },
    {
      title: 'Pricing & Resources',
      featured: true,
      links: [
        { name: 'Comprehensive Pricing Guide 2026', href: '/comprehensive-services-showcase-2026', featured: true },
        { name: 'Pricing Guide 2025', href: '/pricing-guide-2025', featured: true },
        { name: 'Pricing Guide 2030', href: '/pricing-guide-2030', featured: true },
        { name: 'Request Quote', href: '/request-quote', featured: true },
        { name: 'Schedule Demo', href: '/schedule-demo', featured: true },
        { name: 'Case Studies', href: '/case-studies', featured: true },
        { name: 'White Papers', href: '/white-papers', featured: true },
        { name: 'Webinars', href: '/webinars', featured: true },
        { name: 'Documentation', href: '/docs', featured: true },
        { name: 'FAQ & Support', href: '/faq', featured: true }
      ]
    },
    {
      title: 'AI & Analytics Services',
      featured: true,
      links: [
        { name: 'All Services', href: '/services', featured: true },
        { name: 'Innovative Services 2025', href: '/services/innovative-2025', featured: true },
        { name: 'AI Business Intelligence', href: '/services#ai-business-intelligence', featured: true },
        { name: 'AI Healthcare Diagnostics', href: '/services#ai-healthcare', featured: true },
        { name: 'AI Legal Tech Platform', href: '/services#ai-legal-tech', featured: true },
        { name: 'AI Research & Discovery', href: '/services#ai-research', featured: true },
        { name: 'AI Green Technology', href: '/services#ai-green-tech', featured: true },
        { name: 'AI Metaverse Platform', href: '/services#ai-metaverse', featured: true },
        { name: 'AI Space Technology', href: '/services#ai-space-tech', featured: true },
        { name: 'AI FinTech Platform', href: '/services#ai-fintech', featured: true },
        { name: 'AI Supply Chain', href: '/services#ai-supply-chain', featured: true },
        { name: 'AI Quality Assurance', href: '/services#ai-qa', featured: true },
        { name: 'AI Marketing Automation', href: '/services#ai-marketing-automation', featured: true },
        { name: 'AI Customer Support', href: '/services#ai-customer-support', featured: true },
        { name: 'AI HR & Recruitment', href: '/services#ai-hr', featured: true },
        { name: 'AI Content Creation', href: '/services#ai-content-creation', featured: true }
=======
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
} from 'lucide-react';
export function EnhancedFuturisticFooter() {
  const currentYear = new Date().getFullYear();
  const footerSections = [
    {
      title: 'Revolutionary 2030 Services',
      featured: true,
      links: [
        { name: 'Revolutionary Services 2030', href: '/revolutionary-services-2030', featured: true },
        { name: 'Quantum AI Trading Platform', href: '/services/quantum-ai-trading', featured: true },
        { name: 'Neural Interface Platform', href: '/services/neural-interface', featured: true },
        { name: 'Holographic Workspace Platform', href: '/services/holographic-workspace', featured: true },
        { name: 'BioDigital Twin Platform', href: '/services/biodigital-twin', featured: true },
        { name: 'Space Debris Tracking System', href: '/services/space-debris-tracking', featured: true },
        { name: 'AI Ethics Guardian Platform', href: '/services/ai-ethics-guardian', featured: true },
        { name: 'Metaverse Builder Platform', href: '/services/metaverse-builder', featured: true },
        { name: 'AI Autonomous Operations', href: '/revolutionary-services-2030#ai-autonomous-business-operations-2030' },
        { name: 'Quantum AI Cybersecurity', href: '/revolutionary-services-2030#quantum-ai-cybersecurity-2030' },
        { name: 'AI Content Creation Studio', href: '/revolutionary-services-2030#ai-content-creation-studio-2030' }
      ]
    },
    {
      title: 'AI & Analytics Services',
      featured: true,
      links: [
        { name: 'AI Enterprise Orchestrator', href: '/services/ai-enterprise-orchestrator' },
        { name: 'AI Business Intelligence', href: '/services/ai-business-intelligence' },
        { name: 'AI Sales Copilot', href: '/services/ai-sales-copilot' },
        { name: 'AI Compliance Assistant', href: '/services/ai-compliance-assistant' },
        { name: 'AI Workflow Orchestrator', href: '/services/ai-workflow-orchestrator' },
        { name: 'AI Customer Success Platform', href: '/services/ai-customer-success-platform' },
        { name: 'AI Data Governance', href: '/services/ai-data-governance' },
        { name: 'AI Healthcare Analytics', href: '/services/ai-healthcare-analytics' },
        { name: 'AI Project Management Platform', href: '/services/ai-project-management-platform' },
        { name: 'AI Cybersecurity Threat Detection', href: '/services/ai-cybersecurity-threat-detection' },
        { name: 'AI Financial Trading Platform', href: '/services/ai-financial-trading-platform' },
        { name: 'AI Healthcare Analytics Platform', href: '/services/ai-healthcare-analytics-platform' },
        { name: 'AI Auto Email Responder', href: '/services/ai-auto-email-responder' },
        { name: 'LLM Content Studio', href: '/services/llm-content-studio' }
      ]
    },
    {
      title: 'Infrastructure & Security',
      featured: true,
      links: [
        { name: 'Cloud & DevOps', href: '/services/cloud-devops', featured: true },
        { name: 'Digital Twin Solutions', href: '/services/digital-twin', featured: true },
        { name: 'IT Infrastructure', href: '/services/it-infrastructure', featured: true },
        { name: 'Data Analytics', href: '/services/data-analytics', featured: true },
        { name: 'Cybersecurity Solutions', href: '/services/ai-cybersecurity-suite', featured: true },
        { name: 'Zero Trust Security', href: '/services/zero-trust-network-architecture', featured: true },
        { name: 'AI Ethics & Governance', href: '/services/ai-cybersecurity-suite', featured: true },
        { name: 'IoT & Edge Computing', href: '/services/iot-edge', featured: true },
        { name: 'Quantum Computing', href: '/services/quantum-computing', featured: true },
        { name: 'Green IT Solutions', href: '/services/sustainability', featured: true }
      ]
    },
    {
      title: 'Industry Solutions',
      featured: false,
      links: [
        { name: 'Healthcare Solutions', href: '/solutions#healthcare', featured: false },
        { name: 'Financial Services', href: '/solutions#financial', featured: false },
        { name: 'Legal Services', href: '/solutions#legal', featured: false },
        { name: 'Research & Academia', href: '/research-development', featured: false },
        { name: 'Manufacturing', href: '/solutions#manufacturing', featured: false },
        { name: 'Retail & E-commerce', href: '/solutions#retail', featured: false },
        { name: 'Government & Public Sector', href: '/solutions#government', featured: false },
        { name: 'Energy & Sustainability', href: '/solutions#energy', featured: false },
        { name: 'Space & Aerospace', href: '/services/space-tech', featured: false },
        { name: 'Education & Training', href: '/training', featured: false }
      ]
    },
    {
      title: 'Business Solutions',
      featured: true,
      links: [
        { name: 'AI Compliance Copilot', href: '/services/ai-compliance-copilot' },
        { name: 'Zero Trust Architecture', href: '/services/zero-trust-network-architecture' },
        { name: 'AI Cybersecurity Suite', href: '/services/ai-cybersecurity-suite' },
        { name: 'AI Cybersecurity Threat Detection', href: '/services/ai-cybersecurity-threat-detection' },
        { name: 'Quantum AI Platform', href: '/services/quantum-ai-platform' },
        { name: 'AI Healthcare Analytics', href: '/services/ai-healthcare-analytics' },
        { name: 'Edge Computing Platform', href: '/services/edge-computing-platform' },
        { name: 'Blockchain Solutions', href: '/services/blockchain-enterprise-solutions' },
        { name: 'Space Technology', href: '/services/space-tech' },
        { name: 'Micro SaaS Products', href: '/services/micro-saas-solutions', featured: true },
        { name: 'Enterprise Solutions', href: '/solutions', featured: true },
        { name: 'AI Workflow Automation', href: '/services/ai-workflow-orchestrator', featured: true },
        { name: 'AI Project Management', href: '/services/ai-project-management-platform', featured: true },
        { name: 'AI Marketing Automation', href: '/services/ai-marketing-automation', featured: true },
        { name: 'AI HR & Recruitment', href: '/services/ai-hr-platform', featured: true },
        { name: 'AI Supply Chain', href: '/services/ai-supply-chain-optimization', featured: true },
        { name: 'AI Quality Assurance', href: '/services/ai-predictive-maintenance', featured: true },
        { name: 'AI Sales Intelligence', href: '/services/ai-marketing-automation', featured: true },
        { name: 'AI Innovation Management', href: '/services/ai-workflow-orchestrator', featured: true }
      ]
    },
    {
      title: 'Emerging Technologies',
      featured: true,
      links: [
        { name: 'Quantum Computing', href: '/services/quantum-computing', featured: true },
        { name: 'IoT Edge Computing', href: '/services/iot-edge-computing', featured: true },
        { name: 'Digital Twin Platform', href: '/services/digital-twin', featured: true },
        { name: 'Space Technology', href: '/services/space-tech', featured: true },
        { name: 'Sustainable Technology', href: '/services/sustainable-technology', featured: true },
        { name: 'Blockchain & Web3', href: '/services/blockchain-web3', featured: true },
        { name: 'Autonomous Systems', href: '/services/autonomous-systems', featured: true },
        { name: 'Neural Interfaces', href: '/services/neural-interface', featured: true },
        { name: 'Holographic Computing', href: '/services/holographic-workspace', featured: true },
        { name: 'BioDigital Twins', href: '/services/biodigital-twin', featured: true }
      ]
    },
    {
      title: 'Infrastructure & DevOps',
      featured: false,
      links: [
        { name: 'Comprehensive Pricing 2027', href: '/comprehensive-pricing-guide-2027', featured: true },
        { name: 'Pricing Guide 2030', href: '/comprehensive-pricing-guide-2030', featured: true },
        { name: 'Blog & Insights', href: '/blog', featured: false },
        { name: 'FAQ & Help Center', href: '/faq', featured: false },
        { name: 'Documentation', href: '/docs', featured: false },
        { name: 'Developer Portal', href: '/developers', featured: false },
        { name: 'Training & Certification', href: '/training', featured: false },
        { name: 'Community Forum', href: '/community', featured: false },
        { name: 'Success Stories', href: '/case-studies', featured: false },
        { name: 'White Papers', href: '/white-papers', featured: false }
      ]
    },
    {
      title: 'Company & Support',
      featured: false,
      links: [
        { name: 'About Zion Tech Group', href: '/about', featured: false },
        { name: 'Our Team', href: '/team', featured: false },
        { name: 'Careers', href: '/careers', featured: false },
        { name: 'Partners', href: '/partners', featured: false },
        { name: 'Request Quote', href: '/request-quote', featured: true },
        { name: 'Schedule Demo', href: '/demo', featured: false },
        { name: 'Partnerships', href: '/partners', featured: false },
        { name: 'Press & Media', href: '/press', featured: false },
        { name: 'Legal & Privacy', href: '/legal', featured: false },
        { name: 'Support Center', href: '/support', featured: false }
      ]
    }
  ];

  return ()    <footer className="relative bg-slate-950 border-t border-cyan-400/20 overflow-hidden">
      {/* Enhanced Animated Background */}"
      <div className="absolute inset-0 bg-futuristic-enhanced">"
        <div className="absolute inset-0 bg-cyber-grid animate-cyber-grid opacity-5"></div>"
        <div className="absolute top-20 left-10 animate-float">"
          <div className="w-4 h-4 bg-cyan-400 rounded-full opacity-60 neon-glow"></div>
        </div>"
        <div className="absolute top-40 right-20 animate-float-delayed">"
          <div className="w-3 h-3 bg-blue-400 rounded-full opacity-60 neon-glow"></div>
        </div>"
        <div className="absolute bottom-40 left-20 animate-float">"
          <div className="w-2 h-2 bg-purple-400 rounded-full opacity-60 neon-glow"></div>
        </div>
      </div>

    { name: 'Terms of Service', href: '/terms', description: 'Service terms' }, { name: 'Cookie Policy', href: '/cookies', description: 'Cookie usage' }, { name: 'Accessibility', href: '/accessibility', description: 'Accessibility statement' }, { name: 'Security', href: '/security', description: 'Security practices' }, { name: 'Compliance', href: '/compliance', description: 'Regulatory compliance' };  ];

  // Create missing pages for broken links
  
      </Link>;) };
  return ("
          <footer className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white relative overflow-hidden">
        {/* Background Pattern */}"
        <div className="absolute inset-0 opacity-30">"
          <div className="absolute inset-0 bg-gradient-to-br from-slate-800/20 to-slate-900/20"></div>
        </div>

      <div  className="relative">
        {/* Main Footer Content */}
        <div  className="container - responsive py-16">
          {/* Stats Section */}
          <motion.div
            className="grid grid - cols - 2 md: gri d - cols - 4 gap-8 mb-16"            initial={{ opacity: 0, y: 2 0 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: tru e }}
            transition={{ duration: 0.6, staggerChildren: 0.1 }}
          >
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}"
                className="text-center"
                initial={{ opacity: 0, y: 2 0 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: tru e }}
                transition={{ duration: 0.6, delay: inde x * 0.1 }}
              >"
                <div className="flex justify-center mb-3">"
                  <div className="w-12 h-12 bg-gradient-to-br from-cyan-400/20 to-blue-500/20 rounded-xl flex items-center justify-center border border-cyan-400/30">"
                    <stat.icon className="w-6 h-6 text-cyan-400" />
                  </div>
                </div>"
                <div className="text-3xl font-bold text-white mb-2">{stat.value}</div>"
                <div className="text-slate-400 text-sm">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>

          {/* Main Footer Grid */}
          <div  className="grid grid - cols - 1 md: gri d - cols - 2 lg: gri d - cols - 3 xl: gri d - cols - 6 gap-8 mb-12">
            {/* Company Info */}
            <div  className="lg: co l - span -2">
              <motion.div                initial={{ opacity: 0, y: 2 0 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}"
                className="flex items-center space-x-3 mb-6"
              >"
                <div className="relative">"
                  <div className="w-12 h-12 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-xl flex items-center justify-center">"
                    <Zap className="w-6 h-6 text-white"   />
                  </div>"                  <div className="absolute inset-0 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-xl blur-lg opacity-50"></div>
                </div>
                <div>"
                  <h3 className="text-xl font-bold text-white">Zion Tech Group</h3>"
                  <p className="text-slate-400 text-sm">Future Technology Solutions</p>
                </div>
              </div>
              <p className="text-slate - 300 mb-6 leading -relaxed">
                Leading provider of cutting - edge AI solutions, cloud services, cybersecurity, and digital transformation expertise.              </div>"
              <p className="text-slate-300 mb-6 leading-relaxed">
                Leading provider of cutting-edge AI solutions, cloud services, cybersecurity, and digital transformation expertise.                We help businesses innovate and thrive in the digital age.</p>"
              <div className="space-y-3">"
                <div className="flex items-center space-x-3 text-slate-300">"
                  <Phone className="w-4 h-4 text-cyan-400"   />"
                  <a href="tel:+13024640950" className="hover: tex t-cyan-400 transition-colors">
                    +1 302 464 0950
                  </a>
                </div>"
                <div className="flex items-center space-x-3 text-slate-300">"
                  <Mail className="w-4 h-4 text-cyan-400"   />"
                  <a href="mailto: klebe r@ziontechgroup.com" className="hover: tex t-cyan-400 transition-colors">
                    kleber@ziontechgroup.com
                  </a>
                </div>"
                <div className="flex items-center space-x-3 text-slate-300">"
                  <MapPin className="w-4 h-4 text-cyan-400"   />                  <span>364 E Main St STE 1008, Middletown DE 19709</span>
                </div>
              </div>
            </div>

              {/* Social Links */}"
              <div className="flex space-x-4">
                {socialLinks.map((social) => (
                  <a
                    key={social.name}
                    href={social.href}"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`w-10 h-10 bg-slate-800/50 border border-slate-700/50 rounded-lg flex items-center justify-center text-slate-400 transition-all duration-200 hover: borde r-cyan-400/50 hover: b g-cyan-400/10 ${social.color}`}
                    aria-label={social.name}
                  >"
                    <social.icon className="w-5 h-5" />
                  </a>
                ))}
              </div>
            </div>

            <p className="text-gray - 300 mb-6 max - w-md">
              Leading technology solutions provider specializing in AI, cybersecurity, cloud infrastructure,              and digital transformation services.Transforming businesses with cutting - edge technology.</p>

            {/* Footer Sections */}
            {footerSections.map((section, index) => (
              <div key={section.title}>"
                <h4 className="text-lg font-semibold text-white mb-4 flex items-center">"
                  <div className="w-2 h-2 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full mr-3"></div>
                  {section.title}
                </h4>"
                <ul className="space-y-3">
                  {section.links.map((link) => (
                    <li key={link.name}>
                      <Link
                        to={link.href}"
                        className="flex items-center text-slate-400 hover: tex t-cyan-400 transition-colors duration-200 group"
                      >"
                        <div className="w-1 h-1 bg-slate-600 rounded-full mr-3 group-hover: b g-cyan-400 transition-colors duration-200"></div>
                        {link.name}"
                        <ArrowRight className="w-3 h-3 ml-2 opacity-0 group-hover: opacit y-100 group-hover: translat e-x-1 transition-all duration-200"   />                      </Link>
                    </li>) ) }
                </ul>
              </motion.div>) ) }
          </div>

          {/* Additional Links Grid */}"
          <div className="grid grid-cols-1 md: gri d-cols-2 lg: gri d-cols-4 gap-8 mb-12">
            {/* Company */}
            <div>"
              <h4 className="text-lg font-semibold text-white mb-4">Company</h4>"
              <ul className="space-y-3">
                {companyInfo.map((link) => (
                  <li key={link.name}>
                    <Link
                      to={link.href}"
                      className="text-slate-400 hover: tex t-cyan-400 transition-colors duration-200"
                    >
                      {link.name}
                    </Link>
                  </li>) ) }
              </ul>
            </div>

            {/* Support */}
            <div>"
              <h4 className="text-lg font-semibold text-white mb-4">Support</h4>"
              <ul className="space-y-3">
                {supportResources.map((link) => (
                  <li key={link.name}>
                    <Link
                      to={link.href}"
                      className="text-slate-400 hover: tex t-cyan-400 transition-colors duration-200"
                    >
                      {link.name}
                    </Link>
                  </li>) ) }
              </ul>
            </div>

            {/* Legal */}
            <div>"
              <h4 className="text-lg font-semibold text-white mb-4">Legal</h4>"
              <ul className="space-y-3">
                {legalLinks.map((link) => (
                  <li key={link.name}>
                    <Link
                      to={link.href}"
                      className="text-slate-400 hover: tex t-cyan-400 transition-colors duration-200"
                    >
                      {link.name}
                    </Link>
                  </li>) ) }
              </ul>
            </div>

            {/* Social & Newsletter */}
            <div>"
              <h4 className="text-lg font-semibold text-white mb-4">Connect</h4>"
              <div className="flex space-x-4 mb-6">
                {socialLinks.map((social) => (
                  <a
                    key={social.name}
                    href={social.href}"
                    target="_blank"
                    rel="noopener noreferrer"`
                    className={`w-10 h-10 bg-slate-800/50 border border-slate-600/50 rounded-lg flex items-center justify-center text-slate-400 ${social.color} hover: borde r-cyan-400/50 transition-all duration-200`}
                  >"
                    <social.icon className="w-5 h-5" />
                  </a>
                ))}
              </div>"
              <div className="space-y-3">"
                <p className="text-sm text-slate-400">Subscribe to our newsletter</p>"
                <div className="flex">
                  <input"
                    type="email"
                    placeholder="Enter your email"
                    className="flex-1 px-3 py-2 bg-slate-800/50 border border-slate-600/50 rounded-l-lg text-white placeholder-slate-400 focus: outlin e-none focus: borde r-cyan-400 focus: rin g-2 focus: rin g-cyan-400/20"
                  />"
                  <button className="px-4 py-2 bg-gradient-to-r from-cyan-400 to-blue-500 text-white rounded-r-lg hover: fro m-cyan-500 hover: t o-blue-600 transition-all duration-200">"
                    <ArrowRight className="w-4 h-4"   />                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Bar */}"
          <div className="pt-8 border-t border-slate-800/50">"
            <div className="flex flex-col md: fle x-row justify-between items-center space-y-4 md: spac e-y-0">"
              <div className="text-slate-400 text-sm">
                © {currentYear} Zion Tech Group.All rights reserved.</div>"
              <div className="flex items-center space-x-6 text-sm text-slate-400">"
                <span className="flex items-center">"
                  <CheckCircle className="w-4 h-4 text-green-400 mr-2"   />
                  SOC 2 Compliant
                </span>"
                <span className="flex items-center">"
                  <Shield className="w-4 h-4 text-blue-400 mr-2"   />
                  ISO 27001 Certified
                </span>"
                <span className="flex items-center">"
                  <Award className="w-4 h-4 text-yellow-400 mr-2"   />
                  AWS Partner
                </span>      title: 'Pricing & Plans',
      icon: DollarSig n,
      color: 'from-emerald-600 to-teal-600',
      links: ['
        { name: 'Pricing Overview', href: '/pricing' }, { name: 'Pricing Guide', href: '/pricing-guide' }, { name: 'Comprehensive Pricing 2026', href: '/comprehensive-pricing-guide-2026' }, { name: 'Request Quote', href: '/request-quote' }, { name: 'Schedule Demo', href: '/schedule-demo' }, { name: 'Contact Sales', href: '/contact' }
      ]
    },
    {

      title: 'Company',;
      icon: Buildin g,
      color: 'from-green-600 to-emerald-600',
      links: ['
        { name: 'About Us', href: '/about' }, { name: 'Our Team', href: '/team' }, { name: 'Careers', href: '/careers' }, { name: 'Partners', href: '/partners' }, { name: 'News & Press', href: '/news' }, { name: 'Events', href: '/events' }, { name: 'Case Studies', href: '/case-studies' }, { name: 'Marketplace', href: '/marketplace' }
      ]
    },
    {

      title: 'Resources & Learning',;
      icon: BookOpe n,
      color: 'from-orange-600 to-red-600',
      links: ['
        { name: 'Help Center', href: '/help' }, { name: 'Documentation', href: '/documentation' }, { name: 'Training', href: '/training' }, { name: 'Blog', href: '/blog' }, { name: 'Webinars', href: '/webinars' }, { name: 'White Papers', href: '/white-papers' }, { name: 'FAQ', href: '/faq' }, { name: 'Support Center', href: '/support' }, { name: 'Community', href: '/community' }
      ]
    },
    {

      title: 'Platform & Tools',;
      icon: Setting s,
      color: 'from-slate-600 to-gray-600',
      links: ['
        { name: 'Dashboard', href: '/dashboard' }, { name: 'Login', href: '/login' }, { name: 'Sign Up', href: '/signup' }, { name: 'System Status', href: '/status' }, { name: 'API Documentation', href: '/documentation' }, { name: 'Developer Tools', href: '/documentation' }
      ]
    },
    {

      title: 'Legal & Compliance',;
      icon: Shiel d,
      color: 'from-gray-600 to-slate-600',
      links: ['
        { name: 'Privacy Policy', href: '/privacy' }, { name: 'Terms of Service', href: '/terms' }, { name: 'Cookie Policy', href: '/cookies' }, { name: 'Security', href: '/security' }, { name: 'Compliance', href: '/compliance' }, { name: 'Accessibility', href: '/accessibility' }, { name: 'Sitemap', href: '/sitemap' }
      ]
    }
  ] { name: 'Schedule Demo', href: '/schedule-demo', icon: Calenda r }, { name: 'Contact Support', href: '/support', icon: MessageCircl e }, { name: 'View Status', href: '/status', icon: Gaug e }
  ] { name: 'Twitter', href: '#', icon: Twitte r, color: 'hover: tex t-blue-400' }, { name: 'Facebook', href: '#', icon: Faceboo k, color: 'hover: tex t-blue-600' }, { name: 'Instagram', href: '#', icon: Instagra m, color: 'hover: tex t-pink-400' }, { name: 'YouTube', href: '#', icon: Youtub e, color: 'hover: tex t-red-400' }, { name: 'GitHub', href: '#', icon: Githu b, color: 'hover: tex t-gray-400' }
  ];

    email: 'info@ziontechgroup.com',
    address: '123 Innovation Drive, Tech City, TC 12345'
'
    phone: '+1(555) 123-4567',;'
    email: 'info@ziontechgroup.com','    address: '123 Innovation Drive, Tech City, TC 12345'
  };

  return ("
    <footer className="bg-slate-900 text-white relative overflow-hidden">
      {/* Background Elements */}"
      <div className="absolute inset-0">"
        <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-br from-cyan-500/10 to-blue-500/10 rounded-full blur-3xl"></div>"
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-to-br from-purple-500/10 to-pink-500/10 rounded-full blur-3xl"></div>
      </div>
"
      <div className="relative z-10">
        {/* Main Footer Content */}"
        <div className="container mx-auto px-4 py-16">
          {/* Top Section */}"
          <div className="grid grid-cols-1 lg: gri d-cols-2 xl: gri d-cols-5 gap-8 mb-12">
            {/* Company Info */}"
            <div className="lg: co l-span-2">"
              <div className="flex items-center space-x-3 mb-6">"
                <div className="w-12 h-12 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-xl flex items-center justify-center">"
                  <Crown className="w-7 h-7 text-white"   />                </div>
                <div>"
                  <h3 className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                    Zion Tech Group
                  </h3>"
                  <p className="text-sm text-slate-400">Innovating Tomorrow, Today</p>
                </div>
              </div>"
              <p className="text-slate-300 mb-6 max-w-md">
                Leading provider of innovative technology solutions, helping businesses transform and thrive in the digital age.</p>"
              <div className="flex space-x-4">
                {socialLinks.map((social) => (
                  <a
                    key={social.name}
                    href={social.href}`
                    className={`w-10 h-10 rounded-lg bg-slate-800 flex items-center justify-center text-slate-400 transition-colors ${social.color}`}
                  >"
                    <social.icon className="w-5 h-5" />
                  </a>
                ))}
              </div>
            </div>
          </div>

            {/* Newsletter Signup */}"
            <div className="space-y-4">"
              <h3 className="text-lg font-semibold text-white flex items-center space-x-2">"
                <MailIcon className="w-5 h-5 text-cyan-400"   />                <span>Stay Updated</span>
              </h3>"
              <p className="text-slate-300 text-sm">
                Get the latest insights on AI, quantum computing, and technology trends.</p>"
              <form className="space-y-3">
                <input"
                  type="email"
                  placeholder="Enter your email"
                  className="w-full px-4 py-2 bg-slate-800/50 border border-slate-700/50 rounded-lg text-white placeholder-slate-400 focus: outlin e-none focus: borde r-cyan-400 transition-colors"
                />
                <button"
                  type="submit"
                  className="w-full px-4 py-2 bg-gradient-to-r from-cyan-500 to-blue-500 text-white rounded-lg hover: fro m-cyan-600 hover: t o-blue-600 transition-all duration-200 font-medium"
                >
                  <social.icon className="w-5 h-5" />
                </motion.a>
              ))}
            </div>
          </div>

          {/* Bottom Section */}
          <motion.div
            initial={{ opacity: 0, y: 2 0 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1 }}"
            className="border-t border-slate-700/50 pt-8"
          >"
            <div className="flex flex-col md: fle x-row items-center justify-between space-y-4 md: spac e-y-0">"
              <div className="flex items-center space-x-4 text-sm text-slate-400">
                <span>&copy {currentYear} Zion Tech Group.All rights reserved.</span>
                <span>•</span>"
                <Link to="/privacy" className="hover: tex t-cyan-400 transition-colors">Privacy Policy</Link>
                <span>•</span>"
                <Link to="/terms" className="hover: tex t-cyan-400 transition-colors">Terms of Service</Link>
                <span>•</span>"
                <Link to="/sitemap" className="hover: tex t-cyan-400 transition-colors">Sitemap</Link>
              </div>"
              <div className="flex items-center space-x-2 text-sm text-slate-400">
                <span>Made with</span>"
                <Heart className="w-4 h-4 text-red-400"   />                <span>by Zion Tech Group</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </footer>

            {/* Additional Contact Methods */}
            <div  className="mt-12 pt - 8 border-t border-slate -700">
              <div  className="grid grid - cols - 1 md: gri d - cols - 2 lg: gri d - cols - 4 gap-6 text-center">
                <div>
                  <h4 className="text-sm font - semibold text-slate - 400 mb-2">Emergency Support</h4>
                  <p className="text-sm text-slate -500">Critical issues: +1 302 464 0950</p>                </div>
                <div>"
                  <h4 className="text-sm font-semibold text-slate-400 mb-2">Business Hours</h4>"
                  <p className="text-sm text-slate-500">Mon-Fri: 9A M-6PM EST</p>
                </div>
                <div>"
                  <h4 className="text-sm font-semibold text-slate-400 mb-2">Response Time</h4>"
                  <p className="text-sm text-slate-500">Urgent: 1 hour, Normal: 4 hours</p>
                </div>
                <div>"
                  <h4 className="text-sm font-semibold text-slate-400 mb-2">Global Support</h4>"
                  <p className="text-sm text-slate-500">24/7 availability worldwide</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>;
 {/* Bottom Footer */};"
      <div className="border-t border-slate-700/50">;"
        <div className="container-responsive py-6">;"
          <div className="flex flex-col md: fle x-row items-center justify-between gap-4">;"
            <div className="flex items-center space-x-6 text-sm text-gray-400">;
              <span>&copy {currentYear} Zion Tech Group.All rights reserved.</span>"
              <Link to = "/privacy" className="hover: tex t-cyan-400 transition-colors">Privacy Policy</Link>"
              <Link to="/terms" className="hover: tex t-cyan-400 transition-colors">Terms of Service</Link>"
              <Link to="/cookies" className="hover: tex t-cyan-400 transition-colors">Cookie Policy</Link>
            </div>

            <div  className="flex items - center space - x-4">
              <button     onClick={scrollToTop}
                className="p - 2 bg-slate - 700 / 50 rounded-lg text-gray - 400 hover: tex t-cyan - 400 hover: b g-slate - 600 / 50 transition - all duration - 300 transform hover: scal e -110"
                
              >
                <ArrowUpRight className="w-5 h-5 rotate -45"  />;
              </button>;            </div>;
          </div>;
        </div>;
      </div>;
    </footer>;) };
'"`
=======
        { name: 'Documentation', href: '/docs' },
        { name: 'API Reference', href: '/api' },
        { name: 'Developer Portal', href: '/developer' },
        { name: 'Community Forum', href: '/community' },
        { name: 'Help Center', href: '/help' },
        { name: 'Training & Certification', href: '/training' },
        { name: 'Blog', href: '/blog' },
        { name: 'Case Studies', href: '/case-studies' },
        { name: 'White Papers', href: '/white-papers' },
        { name: 'Webinars', href: '/webinars' }
      ]
    }
  ];
  const socialLinks = [
    { name: 'LinkedIn', href: 'https://linkedin.com/company/ziontechgroup', icon: Linkedin },
    { name: 'Twitter', href: 'https://twitter.com/ziontechgroup', icon: Twitter },
    { name: 'Facebook', href: 'https://facebook.com/ziontechgroup', icon: Facebook },
    { name: 'Instagram', href: 'https://instagram.com/ziontechgroup', icon: Instagram },
    { name: 'YouTube', href: 'https://youtube.com/ziontechgroup', icon: Youtube },
    { name: 'GitHub', href: 'https://github.com/ziontechgroup', icon: Github }
  ];
  const contactInfo = {
    phone: '+1 302 464 0950',
    email: 'kleber@ziontechgroup.com',
    address: '364 E Main St STE 1008 Middletown DE 19709',
    website: 'https://ziontechgroup.com'
  };

  const socialLinks = [
    { name: 'LinkedIn', href: 'https://linkedin.com/company/ziontechgroup', icon: Linkedin, color: 'hover:text-blue-400' },
    { name: 'Twitter', href: 'https://twitter.com/ziontechgroup', icon: Twitter, color: 'hover:text-blue-400' },
    { name: 'Facebook', href: 'https://facebook.com/ziontechgroup', icon: Facebook, color: 'hover:text-blue-400' },
    { name: 'Instagram', href: 'https://instagram.com/ziontechgroup', icon: Instagram, color: 'hover:text-pink-400' },
    { name: 'YouTube', href: 'https://youtube.com/@ziontechgroup', icon: Youtube, color: 'hover:text-red-400' },
    { name: 'GitHub', href: 'https://github.com/ziontechgroup', icon: Github, color: 'hover:text-gray-400' }
  ];

  return (
    <footer className="bg-slate-900 border-t border-slate-700/50 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 opacity-50"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(56,189,248,0.1),transparent_50%)]"></div>
      
      <div className="relative z-10">
        {/* Main Footer Content */}
        <div className="container-responsive py-16">
          {/* Top Section - Company Info & Quick Links */}
          <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-12 mb-16">
            {/* Company Information */}
            <div className="lg:col-span-1">
              <div className="flex items-center space-x-3 mb-6">
                <div className="relative">
                  <div className="w-12 h-12 bg-gradient-to-br from-cyan-400 via-blue-500 to-purple-600 rounded-xl flex items-center justify-center">
                    <Zap className="w-7 h-7 text-white" />
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-br from-cyan-400 via-blue-500 to-purple-600 rounded-xl blur-lg opacity-50"></div>
                </div>
                <h3 className="text-2xl font-bold bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">
                  Zion Tech Group
                </h3>
              </div>
              
              <p className="text-slate-300 mb-6 leading-relaxed">
                Leading provider of innovative AI-powered solutions, micro SaaS services, and cutting-edge technology services. 
                Transforming businesses with intelligent automation and future-ready solutions.
              </p>
              
              {/* Contact Information */}
              <div className="space-y-3">
                <div className="flex items-center space-x-3 text-slate-300 hover:text-cyan-400 transition-colors duration-200">
                  <Phone className="w-4 h-4 flex-shrink-0" />
                  <a href={`tel:${contactInfo.phone}`} className="hover:underline">
                    {contactInfo.phone}
                  </a>
                </div>
                <div className="flex items-center space-x-3 text-slate-300 hover:text-cyan-400 transition-colors duration-200">
                  <Mail className="w-4 h-4 flex-shrink-0" />
                  <a href={`mailto:${contactInfo.email}`} className="hover:underline">
                    {contactInfo.email}
                  </a>
                </div>
                <div className="flex items-start space-x-3 text-slate-300">
                  <MapPin className="w-4 h-4 mt-0.5 flex-shrink-0" />
                  <span className="text-sm leading-relaxed">{contactInfo.address}</span>
                </div>
              </div>
            </div>

            {/* Quick Actions */}
            <div className="lg:col-span-1">
              <h4 className="text-lg font-semibold text-white mb-6">Quick Actions</h4>
              <div className="space-y-3">
                <Link
                  to="/request-quote"
                  className="inline-flex items-center w-full px-4 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-lg hover:from-cyan-600 hover:to-blue-700 transition-all duration-200 font-medium group"
                >
                  Get Free Quote
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform duration-200" />
                </Link>
                <Link
                  to="/schedule-demo"
                  className="inline-flex items-center w-full px-4 py-3 border border-cyan-400/30 text-cyan-400 rounded-lg hover:bg-cyan-400/10 transition-all duration-200 font-medium group"
                >
                  Schedule Demo
                  <Play className="ml-2 h-4 w-4 group-hover:scale-110 transition-transform duration-200" />
                </Link>
                <Link
                  to="/marketplace"
                  className="inline-flex items-center w-full px-4 py-3 border border-slate-600 text-slate-300 rounded-lg hover:bg-slate-800/50 transition-all duration-200 font-medium group"
                >
                  Browse Services
                  <ShoppingCart className="ml-2 h-4 w-4 group-hover:scale-110 transition-transform duration-200" />
                </Link>
              </div>
            </div>

            {/* Statistics */}
            <div className="lg:col-span-1">
              <h4 className="text-lg font-semibold text-white mb-6">Our Impact</h4>
              <div className="grid grid-cols-2 gap-4">
                <div className="text-center p-4 bg-slate-800/50 rounded-lg border border-slate-700/50">
                  <div className="text-2xl font-bold text-cyan-400">500+</div>
                  <div className="text-sm text-slate-400">Services Delivered</div>
                </div>
                <div className="text-center p-4 bg-slate-800/50 rounded-lg border border-slate-700/50">
                  <div className="text-2xl font-bold text-blue-400">1000+</div>
                  <div className="text-sm text-slate-400">Happy Clients</div>
                </div>
                <div className="text-center p-4 bg-slate-800/50 rounded-lg border border-slate-700/50">
                  <div className="text-2xl font-bold text-purple-400">99.9%</div>
                  <div className="text-sm text-slate-400">Uptime</div>
                </div>
                <div className="text-center p-4 bg-slate-800/50 rounded-lg border border-slate-700/50">
                  <div className="text-2xl font-bold text-green-400">24/7</div>
                  <div className="text-sm text-slate-400">Support</div>
                </div>
              </div>
            </div>
          </div>

          {/* Services Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {footerSections.map((section, index) => (
              <div key={index} className="space-y-4">
                <h4 className="text-lg font-semibold text-white flex items-center">
                  {section.featured && <Star className="w-4 h-4 text-cyan-400 mr-2" />}
                  {section.title}
                </h4>
                <ul className="space-y-2">
                  {section.links.map((link, linkIndex) => (
                    <li key={linkIndex}>
                      <Link
                        to={link.href}
                        className={`text-slate-400 hover:text-cyan-400 transition-colors duration-200 text-sm flex items-center ${
                          link.featured ? 'font-medium' : ''
                        }`}
                      >
                        {link.featured && <Sparkles className="w-3 h-3 text-cyan-400 mr-2" />}
                        {link.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Bottom Section */}
          <div className="border-t border-slate-700/50 pt-8">
            <div className="flex flex-col lg:flex-row items-center justify-between space-y-4 lg:space-y-0">
              {/* Copyright & Legal */}
              <div className="flex flex-col sm:flex-row items-center space-y-2 sm:space-y-0 sm:space-x-6 text-sm text-slate-400">
                <span>© {currentYear} Zion Tech Group. All rights reserved.</span>
                <div className="flex items-center space-x-4">
                  <Link to="/privacy" className="hover:text-cyan-400 transition-colors duration-200">
                    Privacy Policy
                  </Link>
                  <Link to="/terms" className="hover:text-cyan-400 transition-colors duration-200">
                    Terms of Service
                  </Link>
                  <Link to="/cookies" className="hover:text-cyan-400 transition-colors duration-200">
                    Cookie Policy
                  </Link>
                </div>
              </div>

              {/* Social Links */}
              <div className="flex items-center space-x-4">
                {socialLinks.map((social) => (
                  <a
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`p-2 text-slate-400 ${social.color} transition-all duration-200 hover:scale-110`}
                    aria-label={social.name}
                  >
                    <social.icon className="w-5 h-5" />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Floating Back to Top */}
      <motion.button
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        className="fixed bottom-6 right-6 w-12 h-12 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full shadow-lg hover:shadow-xl transition-all duration-200 flex items-center justify-center text-white hover:scale-110"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        <ArrowUpRight className="w-5 h-5 rotate-45" />
      </motion.button>
    </footer>
  );
}
>>>>>>> merge-all-prs-20250904-105408
