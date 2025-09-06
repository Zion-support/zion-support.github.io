import React from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { 
  Zap, Globe, Phone, Mail, MapPin, ArrowRight,
  Brain, Atom, Shield, Rocket, Target, BookOpen, Users,
  Star, Sparkles, Cpu, Lock, Cloud, BarChart3, Settings, Eye, Award, Clock, Heart, Lightbulb,
  Twitter, Linkedin, Facebook, Instagram, Youtube, Github, MessageCircle, MessageSquare,
  ArrowUp, ExternalLink, Building, Code, Database, Network, Server, Monitor, Smartphone, Camera, Gamepad2,
  Palette, Music, Film, BookOpenCheck, HelpCircle, FileText, Video, Headphones
} from 'lucide-react',

const contactInfo = {
  mobile: '+1 302 464 0950',
  email: 'kleber@ziontechgroup.com',
  address: '364 E Main St STE 1008 Middletown DE 19709',
  website: 'https://ziontechgroup.com'
},

const footerSections = [
  {
    title: 'Featured Services',
    description: 'Our most popular and innovative solutions',
    icon: <Star className=&quot;w-5 h-5 text-yellow-400&quot; />,
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
      { name: 'Helpdesk & Support', href: '/helpdesk-automation' },
      { name: 'Learning Management (LMS)', href: '/lms-platform' },
      { name: 'E‑commerce Returns', href: '/ecommerce-returns-management' },
      { name: 'SEO Content Optimizer', href: '/seo-content-optimizer' },
      { name: 'Keyword Research Engine', href: '/keyword-research-engine' },
      { name: 'Privacy Analytics Suite', href: '/analytics-suite' },
      { name: 'Invoice Studio', href: '/invoice-studio' },
      { name: 'IT Asset Discovery Agent', href: '/it-asset-discovery-agent' },
      { name: 'Managed Postgres HA', href: '/managed-postgres-ha' }
    ]
  },
  {
    title: 'AI & Consciousness',
    description: 'Revolutionary AI platforms and solutions',
    icon: <Brain className=&quot;w-5 h-5 text-cyan-400&quot; />,
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
    icon: <Atom className=&quot;w-5 h-5 text-blue-400&quot; />,
    links: [
      { name: 'Space Resource Mining', href: '/space-resource-mining-platform' },
      { name: 'Quantum Internet Security', href: '/quantum-internet-security-platform' },
      { name: 'Quantum-Secure Cloud Infrastructure', href: '/quantum-secure-cloud-infrastructure' },
      { name: 'Quantum Financial Trading Platform', href: '/quantum-financial-trading' },
      { name: 'AI-Powered Space Technology', href: '/ai-powered-space-technology' },
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
    icon: <Shield className=&quot;w-5 h-5 text-purple-400&quot; />,
    links: [
      { name: 'Quantum-Secure Cloud', href: '/quantum-secure-cloud-infrastructure' },
      { name: 'Autonomous IT Operations', href: '/autonomous-it-operations-center' },
      { name: 'Edge Computing Orchestration', href: '/edge-computing-orchestration' },
      { name: 'Blockchain Infrastructure', href: '/blockchain-infrastructure-platform' },
      { name: 'AI-Powered DevOps', href: '/ai-powered-devops-platform' },
      { name: 'Quantum Cloud Infrastructure', href: '/quantum-cloud-infrastructure' },
      { name: 'Zero Trust Security', href: '/zero-trust-security-platform' },
      { name: 'AI-Powered Cybersecurity', href: '/ai-powered-cybersecurity' }
    ]
  },
  {
    title: 'Micro SAAS',
    description: 'Innovative business solutions for modern enterprises',
    icon: <Rocket className=&quot;w-5 h-5 text-emerald-400&quot; />,
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
    icon: <Building className=&quot;w-5 h-5 text-orange-400&quot; />,
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
    icon: <BookOpen className=&quot;w-5 h-5 text-cyan-400&quot; />,
    links: [
      { name: 'Documentation', href: '/docs' },
      { name: 'API Reference', href: '/api-documentation' },
      { name: 'Case Studies', href: '/case-studies' },
      { name: 'Blog & News', href: '/blog' },
      { name: 'Support Center', href: '/support' },
      { name: 'Developer Portal', href: '/developer' },
      { name: 'Training & Certification', href: '/training' },
      { name: 'Community Forum', href: '/community' },
      { name: 'Market Pricing', href: '/market-pricing' },
      { name: 'Services Advertising', href: '/services-advertising' }
import React from 'react';
import Link from 'next/link';
import {_Zap, _Globe, _Phone, _Mail, _MapPin, _ArrowRight, _Brain, _Atom, _Shield, _Rocket, _Target, _BookOpen, _Users, _Star, _Sparkles, _Cpu, _Lock, _Cloud, _BarChart3, _Settings, _Eye, _Award, _Clock, _Heart, _Lightbulb, _Twitter, _Linkedin, _Facebook, _Instagram, _Youtube, _Github, _MessageCircle, _MessageSquare, _ArrowUp, _ExternalLink, _Building, _Code, _Database, _Network, _Server, _Monitor, _Smartphone, _Camera, _Gamepad2, _Palette, _Music, _Film, _BookOpenCheck, _HelpCircle, _FileText, _Video, _Headphones} from 'lucide-react';

const _contactInfo = {_mobile: '+1 302 464 0950', _email: 'kleber@ziontechgroup.com', _address: '364 E Main St STE 1008 Middletown DE 19709', _website: 'https://ziontechgroup.com'};

const _footerSections = [
  {_title: 'Featured Services', _description: 'Our most popular and innovative solutions', _icon: <Star className="w-5 h-5 text-yellow-400" />, _links: [
      { name: 'AI Customer Success Platform', _href: '/ai-customer-success-platform', _featured: true},
      {_name: 'Supply Chain Optimization', _href: '/intelligent-supply-chain-optimization', _featured: true},
      {_name: 'AI Financial Planning', _href: '/ai-financial-planning-platform', _featured: true},
      {_name: 'AI Sales Intelligence', _href: '/ai-sales-intelligence-platform', _featured: true},
      {_name: 'HR Analytics Platform', _href: '/ai-hr-analytics-platform'},
      {_name: 'AI Decision Engine', _href: '/ai-powered-decision-engine'},
      {_name: 'Content Automation', _href: '/intelligent-content-automation-platform'},
      {_name: 'CRM Intelligence Suite', _href: '/smart-crm-intelligence-suite'},
      {_name: 'AI Evaluation Orchestrator', _href: '/ai-evaluation-orchestrator', _featured: true},
      {_name: 'SEO Automation Suite', _href: '/seo-automation-suite'},
      {_name: 'Helpdesk & Support', _href: '/helpdesk-automation'},
      {_name: 'Learning Management (LMS)', _href: '/lms-platform'},
      {_name: 'E‑commerce Returns', _href: '/ecommerce-returns-management'},
      {_name: 'SEO Content Optimizer', _href: '/seo-content-optimizer'},
      {_name: 'Keyword Research Engine', _href: '/keyword-research-engine'},
      {_name: 'Privacy Analytics Suite', _href: '/analytics-suite'},
      {_name: 'Invoice Studio', _href: '/invoice-studio'},
      {_name: 'IT Asset Discovery Agent', _href: '/it-asset-discovery-agent'},
      {_name: 'Managed Postgres HA', _href: '/managed-postgres-ha'}
    ]
  },
  {_title: 'AI & Consciousness', _description: 'Revolutionary AI platforms and solutions', _icon: <Brain className="w-5 h-5 text-cyan-400" />, _links: [
      { name: 'AI Consciousness Evolution', _href: '/ai-consciousness-evolution-2029'},
      {_name: 'AI Quantum Neural Network', _href: '/ai-quantum-neural-network'},
      {_name: 'AI Autonomous Business Operations', _href: '/ai-autonomous-business-operations'},
      {_name: 'AI Autonomous Research', _href: '/ai-autonomous-research-assistant'},
      {_name: 'AI Emotional Intelligence', _href: '/ai-emotional-intelligence-training'},
      {_name: 'AI Predictive Maintenance', _href: '/ai-predictive-maintenance-platform'},
      {_name: 'AI Content Personalization', _href: '/ai-content-personalization-engine'},
      {_name: 'AI Autonomous Ecosystem', _href: '/ai-autonomous-ecosystem-manager'},
      {_name: 'AI Ethics & Governance', _href: '/ai-ethics-governance-framework'}
    ]
  },
  {_title: 'Quantum & Emerging Tech', _description: 'Breakthrough quantum and space technologies', _icon: <Atom className="w-5 h-5 text-blue-400" />, _links: [
      { name: 'Space Resource Mining', _href: '/space-resource-mining-platform'},
      {_name: 'Quantum Internet Security', _href: '/quantum-internet-security-platform'},
      {_name: 'Quantum-Secure Cloud Infrastructure', _href: '/quantum-secure-cloud-infrastructure'},
      {_name: 'Quantum Financial Trading Platform', _href: '/quantum-financial-trading'},
      {_name: 'AI-Powered Space Technology', _href: '/ai-powered-space-technology'},
      {_name: 'Brain-Computer Interface', _href: '/brain-computer-interface-platform'},
      {_name: 'Quantum Materials Discovery', _href: '/quantum-materials-discovery-platform'},
      {_name: 'Autonomous Vehicle AI', _href: '/autonomous-vehicle-ai-platform'},
      {_name: 'Quantum Bio-Computing', _href: '/quantum-bio-computing-platform'},
      {_name: 'Quantum Energy Platform', _href: '/quantum-energy-platform'},
      {_name: 'Quantum Robotics', _href: '/quantum-robotics'}
    ]
  },
  {_title: 'Enterprise IT', _description: 'Advanced enterprise infrastructure solutions', _icon: <Shield className="w-5 h-5 text-purple-400" />, _links: [
      { name: 'Quantum-Secure Cloud', _href: '/quantum-secure-cloud-infrastructure'},
      {_name: 'Autonomous IT Operations', _href: '/autonomous-it-operations-center'},
      {_name: 'Edge Computing Orchestration', _href: '/edge-computing-orchestration'},
      {_name: 'Blockchain Infrastructure', _href: '/blockchain-infrastructure-platform'},
      {_name: 'AI-Powered DevOps', _href: '/ai-powered-devops-platform'},
      {_name: 'Quantum Cloud Infrastructure', _href: '/quantum-cloud-infrastructure'},
      {_name: 'Zero Trust Security', _href: '/zero-trust-security-platform'},
      {_name: 'AI-Powered Cybersecurity', _href: '/ai-powered-cybersecurity'}
    ]
  },
  {_title: 'Micro SAAS', _description: 'Innovative business solutions for modern enterprises', _icon: <Rocket className="w-5 h-5 text-emerald-400" />, _links: [
      { name: 'AI Content Generator', _href: '/ai-content-generator'},
      {_name: 'AI Code Review', _href: '/ai-code-review'},
      {_name: 'AI Meeting Transcriber', _href: '/ai-meeting-transcriber-pro'},
      {_name: 'AI Legal Contract Analyzer', _href: '/ai-legal-contract-analyzer'},
      {_name: 'AI Market Research', _href: '/ai-market-research'},
      {_name: 'AI Sales Automation', _href: '/ai-sales-automation'},
      {_name: 'AI HR Recruitment', _href: '/ai-hr-recruitment'},
      {_name: 'AI Customer Service', _href: '/ai-customer-service'}
    ]
  },
  {_title: 'Industry Solutions', _description: 'Industry-specific technology solutions', _icon: <Building className="w-5 h-5 text-orange-400" />, _links: [
      { name: 'Healthcare Solutions', _href: '/healthcare-solutions'},
      {_name: 'Financial Services', _href: '/financial-solutions'},
      {_name: 'Manufacturing AI', _href: '/manufacturing-ai-solutions'},
      {_name: 'Retail Technology', _href: '/retail-technology-solutions'},
      {_name: 'Education Technology', _href: '/education-technology-solutions'},
      {_name: 'Government Solutions', _href: '/government-technology-solutions'},
      {_name: 'Energy & Utilities', _href: '/energy-utilities-solutions'},
      {_name: 'Biotech AI Research', _href: '/biotech-ai-research-platform'}
    ]
  },
  {_title: 'Resources', _description: 'Documentation, _support, _and learning', _icon: <BookOpen className="w-5 h-5 text-cyan-400" />, _links: [
      { name: 'Documentation', _href: '/docs'},
      {_name: 'API Reference', _href: '/api-documentation'},
      {_name: 'Case Studies', _href: '/case-studies'},
      {_name: 'Blog & News', _href: '/blog'},
      {_name: 'Support Center', _href: '/support'},
      {_name: 'Developer Portal', _href: '/developer'},
      {_name: 'Training & Certification', _href: '/training'},
      {_name: 'Community Forum', _href: '/community'},
      {_name: 'Market Pricing', _href: '/market-pricing'},
      {_name: 'Services Advertising', _href: '/services-advertising'}
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
    ]
  }
],

const socialLinks = [
>>>>>>> fe9f06f7950cff0c8d855f93e475fc9658604231

const UltraFuturisticFooter2035: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  },
        
        {_/* Animated grid */}
        <motion.div
          className=&quot;absolute inset-0 opacity-5&quot;
          style={{
            backgroundImage: `
              linear-gradient(rgba(0, 255, 255, 0.3) 1px, transparent 1px),
              linear-gradient(90deg, rgba(0, 255, 255, 0.3) 1px, transparent 1px)
            `,
            backgroundSize: '200px 200px'
          }}
          animate={{
            backgroundPosition: ['0px 0px200px 200px']}}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: 'linear'
          }}
        />
      </div>

      <div className=&quot;relative z-10&quot;>
        {/* Main Footer Content */}
        <div className=&quot;container mx-auto px-4 py-20&quot;>
          <div className=&quot;grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-8&quot;>
            {/* Company Info */}
            <div className=&quot;lg:col-span-2&quot;>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className=&quot;space-y-6&quot;
              >
                <div className=&quot;flex items-center gap-3&quot;>
                  <div className=&quot;w-12 h-12 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-xl flex items-center justify-center&quot;>
                    <Brain className=&quot;w-6 h-6 text-white&quot; />
                  </div>
                  <div>
                    <h3 className=&quot;text-2xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent&quot;>
                      Zion Tech Group
                    </h3>
                    <p className=&quot;text-sm text-gray-400&quot;>Revolutionary Technology Solutions</p>
                  </div>
                </div>
                
                <p className=&quot;text-gray-300 leading-relaxed max-w-md&quot;>
                  Leading the future with cutting-edge AI consciousness, quantum computing, and innovative micro SAAS solutions. 
                  Transform your business with our revolutionary technology.
                </p>

                {/* Contact Info */}
                <div className=&quot;space-y-3&quot;>
                  <a href={`tel:${contactInfo.mobile}`} className=&quot;flex items-center gap-3 text-gray-300 hover:text-cyan-400 transition-colors duration-200&quot;>
                    <Phone className=&quot;w-4 h-4&quot; />
                    <span>{contactInfo.mobile}</span>
                  </a>
                  <a href={`mailto:${contactInfo.email}`} className=&quot;flex items-center gap-3 text-gray-300 hover:text-purple-400 transition-colors duration-200&quot;>
                    <Mail className=&quot;w-4 h-4&quot; />
                    <span>{contactInfo.email}</span>
                  </a>
                  <div className=&quot;flex items-center gap-3 text-gray-300&quot;>
                    <MapPin className=&quot;w-4 h-4&quot; />
                    <span className=&quot;text-sm&quot;>{contactInfo.address}</span>
                  </div>
                </div>

                {/* Social Links */}
                <div className=&quot;flex items-center gap-4&quot;>
                  {socialLinks.map((social) => (
                    <a
                      key={social.name}
                      href={social.href}
                      target=&quot;_blank&quot;
                      rel=&quot;noopener noreferrer&quot;
                      className=&quot;p-2 bg-gray-800/50 hover:bg-gray-700/50 rounded-lg text-gray-400 hover:text-white transition-all duration-200 hover:scale-110&quot;
                    >
                      {_social.icon}
                    </a>
                  ))}
                </div>
              </motion.div>
            </div>

            {_/* Footer Sections */}
            {_footerSections.map(_(section, _index) => (_<motion.div
                key={section.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className=&quot;space-y-4&quot;
              >
                <div className=&quot;flex items-center gap-2&quot;>
                  {section.icon}
                  <h4 className=&quot;font-semibold text-white&quot;>{section.title}</h4>
                </div>
                <p className=&quot;text-sm text-gray-400&quot;>{section.description}</p>
                <ul className=&quot;space-y-2&quot;>
                  {section.links.map((link) => (
                    <li key={link.name}>
                      <Link
                        href={_link.href}
                        className={_`text-sm transition-colors duration-200 ${
                          link.featured 
                            ? 'text-cyan-400 hover:text-cyan-300' 
                            : 'text-gray-400 hover:text-white'}`}
                      >
                        {link.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>

          {_/* Bottom Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className=&quot;mt-16 pt-8 border-t border-gray-800/50&quot;
          >
            <div className=&quot;flex flex-col md:flex-row items-center justify-between gap-4&quot;>
              <div className=&quot;text-sm text-gray-400&quot;>
                © 2025 Zion Tech Group. All rights reserved.
              </div>
              
              <div className=&quot;flex items-center gap-6 text-sm text-gray-400&quot;>
                <Link href=&quot;/privacy&quot; className=&quot;hover:text-white transition-colors duration-200&quot;>
                  Privacy Policy
                </a>
                <Link href=&quot;/terms&quot; className=&quot;hover:text-white transition-colors duration-200&quot;>
                  Terms of Service
                </a>
                <Link href=&quot;/cookies&quot; className=&quot;hover:text-white transition-colors duration-200&quot;>
                  Cookie Policy
                </a>
              </div>

              <button
                onClick={scrollToTop}
                aria-label="Scroll to top"
                className=&quot;p-2 bg-gray-800/50 hover:bg-gray-700/50 rounded-lg text-gray-400 hover:text-white transition-all duration-200 hover:scale-110&quot;
                aria-label=&quot;Scroll to top&quot;
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7
              >
                <ArrowUp className=&quot;w-5 h-5&quot; />
              </button>
            </div>
          </motion.div>
        </div>
      </div>
    </footer>
  )
},

export default UltraFuturisticFooter2035