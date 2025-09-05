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
    ]
  }
];

const _socialLinks = [
  {_name: 'Twitter', _href: 'https://twitter.com/ziontechgroup', _icon: <Twitter className="w-5 h-5" />},
  {_name: 'LinkedIn', _href: 'https://linkedin.com/company/ziontechgroup', _icon: <Linkedin className="w-5 h-5" />},
  {_name: 'Facebook', _href: 'https://facebook.com/ziontechgroup', _icon: <Facebook className="w-5 h-5" />},
  {_name: 'Instagram', _href: 'https://instagram.com/ziontechgroup', _icon: <Instagram className="w-5 h-5" />},
  {_name: 'YouTube', _href: 'https://youtube.com/@ziontechgroup', _icon: <Youtube className="w-5 h-5" />},
  {_name: 'GitHub', _href: 'https://github.com/Zion-Holdings', _icon: <Github className="w-5 h-5" />}
];

const UltraFuturisticFooter2035: React.FC = () => {_const _scrollToTop = () => {
    window.scrollTo({ top: 0, _behavior: 'smooth'});
  };

  return (
    <footer className="relative bg-black text-white overflow-hidden">
      {_/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-b from-gray-900 via-black to-black" />
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/5 via-purple-500/5 to-pink-500/5" />
        
        {_/* Animated grid */}
        <motion.div
          className="absolute inset-0 opacity-5"
          style={_{
            backgroundImage: `
              linear-gradient(rgba(0, _255, _255, _0.3) 1px, _transparent 1px), _linear-gradient(90deg, _rgba(0, _255, _255, _0.3) 1px, _transparent 1px)
            `, _backgroundSize: '200px 200px'}}
          animate={_{
            backgroundPosition: ['0px 0px', _'200px 200px']}}
          transition={_{
            duration: 20, _repeat: Infinity, _ease: 'linear'}}
        />
      </div>

      <div className="relative z-10">
        {_/* Main Footer Content */}
        <div className="container mx-auto px-4 py-20">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-8">
            {_/* Company Info */}
            <div className="lg:col-span-2">
              <motion.div
                initial={_{ opacity: 0, _y: 20}}
                whileInView={_{ opacity: 1, _y: 0}}
                transition={_{ duration: 0.6}}
                className="space-y-6"
              >
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-xl flex items-center justify-center">
                    <Brain className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                      Zion Tech Group
                    </h3>
                    <p className="text-sm text-gray-400">Revolutionary Technology Solutions</p>
                  </div>
                </div>
                
                <p className="text-gray-300 leading-relaxed max-w-md">
                  Leading the future with cutting-edge AI consciousness, quantum computing, and innovative micro SAAS solutions. 
                  Transform your business with our revolutionary technology.
                </p>

                {_/* Contact Info */}
                <div className="space-y-3">
                  <a href={_`tel:${contactInfo.mobile}`} className="flex items-center gap-3 text-gray-300 hover:text-cyan-400 transition-colors duration-200">
                    <Phone className="w-4 h-4" />
                    <span>{_contactInfo.mobile}</span>
                  </a>
                  <a href={_`mailto:${contactInfo.email}`} className="flex items-center gap-3 text-gray-300 hover:text-purple-400 transition-colors duration-200">
                    <Mail className="w-4 h-4" />
                    <span>{_contactInfo.email}</span>
                  </a>
                  <div className="flex items-center gap-3 text-gray-300">
                    <MapPin className="w-4 h-4" />
                    <span className="text-sm">{_contactInfo.address}</span>
                  </div>
                </div>

                {_/* Social Links */}
                <div className="flex items-center gap-4">
                  {_socialLinks.map(_(social) => (
                    <a
                      key={social.name}
                      href={_social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 bg-gray-800/50 hover:bg-gray-700/50 rounded-lg text-gray-400 hover:text-white transition-all duration-200 hover:scale-110"
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
                initial={_{ opacity: 0, _y: 20}}
                whileInView={_{ opacity: 1, _y: 0}}
                transition={_{ duration: 0.6, _delay: index * 0.1}}
                className="space-y-4"
              >
                <div className="flex items-center gap-2">
                  {_section.icon}
                  <h4 className="font-semibold text-white">{_section.title}</h4>
                </div>
                <p className="text-sm text-gray-400">{_section.description}</p>
                <ul className="space-y-2">
                  {_section.links.map((link) => (
                    <li key={link.name}>
                      <Link
                        href={_link.href}
                        className={_`text-sm transition-colors duration-200 ${
                          link.featured 
                            ? 'text-cyan-400 hover:text-cyan-300' 
                            : 'text-gray-400 hover:text-white'}`}
                      >
                        {_link.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>

          {_/* Bottom Section */}
          <motion.div
            initial={_{ opacity: 0, _y: 20}}
            whileInView={_{ opacity: 1, _y: 0}}
            transition={_{ duration: 0.6, _delay: 0.3}}
            className="mt-16 pt-8 border-t border-gray-800/50"
          >
            <div className="flex flex-col md:flex-row items-center justify-between gap-4">
              <div className="text-sm text-gray-400">
                © 2025 Zion Tech Group. All rights reserved.
              </div>
              
              <div className="flex items-center gap-6 text-sm text-gray-400">
                <Link href="/privacy" className="hover:text-white transition-colors duration-200">
                  Privacy Policy
                </Link>
                <Link href="/terms" className="hover:text-white transition-colors duration-200">
                  Terms of Service
                </Link>
                <Link href="/cookies" className="hover:text-white transition-colors duration-200">
                  Cookie Policy
                </Link>
              </div>

              <button
                onClick={_scrollToTop}
                className="p-2 bg-gray-800/50 hover:bg-gray-700/50 rounded-lg text-gray-400 hover:text-white transition-all duration-200 hover:scale-110"
                aria-label="Scroll to top"
              >
                <ArrowUp className="w-5 h-5" />
              </button>
            </div>
          </motion.div>
        </div>
      </div>
    </footer>
  );
};

export default UltraFuturisticFooter2035;