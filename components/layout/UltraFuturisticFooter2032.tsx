import React from 'react';
import Link from 'next/link';
import {_Phone, _Mail, _MapPin, _Globe, _Zap, _Brain, _Atom, _Rocket, _Shield, _Cpu, _Target, _Microscope, _Users, _Facebook, _Twitter, _Linkedin, _Instagram, _Youtube, _Github, _ArrowRight, _Heart, _Star, _Award, _CheckCircle, _Home, _Briefcase, _BookOpen, _MessageCircle, _DollarSign, _TrendingUp, _Target as TargetIcon, _Users as UsersIcon, _Briefcase as BriefcaseIcon, _BookOpen as BookOpenIcon, _MessageCircle as MessageCircleIcon, _Star as StarIcon} from 'lucide-react';

const _contactInfo = {_mobile: '+1 302 464 0950', _email: 'kleber@ziontechgroup.com', _address: '364 E Main St STE 1008 Middletown DE 19709', _website: 'https://ziontechgroup.com'};

const _mainNavigationRoutes = [
  {_name: 'Home', _href: '/', _icon: Home, _description: 'Welcome to Zion Tech Group'},
  {_name: 'Services', _href: '/services', _icon: Briefcase, _description: 'Our comprehensive service portfolio'},
  {_name: 'Solutions', _href: '/solutions', _icon: TargetIcon, _description: 'Tailored solutions for your business'},
  {_name: 'Pricing', _href: '/pricing', _icon: DollarSign, _description: 'Transparent pricing and packages'},
  {_name: 'Resources', _href: '/resources', _icon: BookOpen, _description: 'Knowledge base and documentation'},
  {_name: 'Case Studies', _href: '/case-studies', _icon: Users, _description: 'Success stories and implementations'},
  {_name: 'Blog', _href: '/blog', _icon: MessageCircle, _description: 'Latest insights and updates'},
  {_name: 'Contact', _href: '/contact', _icon: MessageCircle, _description: 'Get in touch with our team'}
];

const _serviceCategories = [
  {_title: '🚀 2032 Revolutionary AI Services', _services: [
      { name: 'AI Consciousness Evolution', _href: '/ai-consciousness-evolution-platform'},
      {_name: 'AI Emotional Intelligence', _href: '/ai-emotional-intelligence-platform'},
      {_name: 'AI Creativity Orchestrator', _href: '/ai-creativity-orchestrator'},
      {_name: 'AI Autonomous Business Manager', _href: '/ai-autonomous-business-manager'}
    ]
  },
  {_title: '⚛️ 2032 Quantum & Emerging Tech', _services: [
      { name: 'Quantum DNA Computing', _href: '/quantum-dna-computing-platform'},
      {_name: 'Quantum Internet Security', _href: '/quantum-internet-security-gateway'},
      {_name: 'Quantum Financial Trading', _href: '/quantum-financial-trading-platform'},
      {_name: 'Quantum Creativity Studio', _href: '/quantum-creativity-studio'}
    ]
  },
  {_title: '🏙️ 2032 Enterprise IT Solutions', _services: [
      { name: 'Autonomous DevOps', _href: '/autonomous-devops-platform'},
      {_name: 'Zero Trust Architecture', _href: '/zero-trust-network-architecture'},
      {_name: 'Edge Computing Orchestration', _href: '/edge-computing-orchestration'},
      {_name: 'AI IT Operations Center', _href: '/ai-powered-it-operations-center'}
    ]
  },
  {_title: '🌌 2032 Space & Metaverse Tech', _services: [
      { name: 'Space Mining Automation', _href: '/space-mining-automation-platform'},
      {_name: 'Metaverse Development', _href: '/metaverse-development-platform'},
      {_name: 'AI Predictive Health', _href: '/ai-predictive-health-analytics'},
      {_name: 'AI Autonomous Business', _href: '/ai-autonomous-business-manager'}
    ]
  },
  {_title: '🎯 2032 Innovative Micro SAAS', _services: [
      { name: 'AI Business Intelligence', _href: '/ai-business-intelligence-suite'},
      {_name: 'Quantum-Secure Communication', _href: '/quantum-secure-communication-platform'},
      {_name: 'AI Customer Success', _href: '/ai-customer-success-automation'},
      {_name: 'Blockchain Supply Chain', _href: '/blockchain-supply-chain-transparency'}
    ]
  },
  {_title: '🔬 2032 Research & Development', _services: [
      { name: 'Neuromorphic Computing', _href: '/neuromorphic-computing-platform'},
      {_name: 'DNA Computing Platform', _href: '/dna-computing-platform'},
      {_name: 'Photonic Computing', _href: '/photonic-computing-infrastructure'},
      {_name: 'Swarm Robotics', _href: '/swarm-robotics-orchestration'}
    ]
  }
];

const _quickLinks = [
  {_name: '2032 Services', _href: '/2032-futuristic-services-showcase', _icon: Star, _description: 'Revolutionary 2032 services'},
  {_name: 'Enhanced Pricing', _href: '/enhanced-market-pricing-2032', _icon: DollarSign, _description: 'Comprehensive pricing analysis'},
  {_name: 'Market Pricing', _href: '/market-pricing', _icon: DollarSign, _description: 'Competitive pricing references'},
  {_name: 'Enhanced Services', _href: '/enhanced-services-showcase', _icon: Star, _description: 'Premium service showcase'},
  {_name: 'Revolutionary 2026', _href: '/revolutionary-2026-services', _icon: TrendingUp, _description: '2026 breakthrough services'},
  {_name: 'Ultimate 2026', _href: '/ultimate-2026-services-showcase', _icon: Target, _description: 'Ultimate service portfolio'},
  {_name: 'News & Updates', _href: '/news', _icon: MessageCircle, _description: 'Latest company news'},
  {_name: 'Support', _href: '/support', _icon: Users, _description: 'Technical support and help'}
];

const _companyInfo = [
  {_name: 'About Us', _href: '/about'},
  {_name: 'Careers', _href: '/careers'},
  {_name: 'Press', _href: '/press'},
  {_name: 'Partners', _href: '/partners'},
  {_name: 'Support', _href: '/support'},
  {_name: 'Status', _href: '/status'}
];

const _socialLinks = [
  {_name: 'LinkedIn', _href: 'https://linkedin.com/company/ziontechgroup', _icon: Linkedin},
  {_name: 'Twitter', _href: 'https://twitter.com/ziontechgroup', _icon: Twitter},
  {_name: 'Facebook', _href: 'https://facebook.com/ziontechgroup', _icon: Facebook},
  {_name: 'Instagram', _href: 'https://instagram.com/ziontechgroup', _icon: Instagram},
  {_name: 'YouTube', _href: 'https://youtube.com/ziontechgroup', _icon: Youtube},
  {_name: 'GitHub', _href: 'https://github.com/Zion-Holdings', _icon: Github}
];

const _footerVariants = {_hidden: { opacity: 0, _y: 50},
  visible: {_opacity: 1, _y: 0, _transition: {
      duration: 0.8, _staggerChildren: 0.1}
  }
};

const _itemVariants = {_hidden: { opacity: 0, _y: 20},
  visible: {_opacity: 1, _y: 0}
};

export default function UltraFuturisticFooter2032() {_return (_<footer className="relative bg-gradient-to-b from-black via-gray-900 to-black border-t border-cyan-500/30 overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl"></div>
        <div className="absolute top-0 right-0 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-pink-500/5 rounded-full blur-3xl"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-10">
        <motion.div
          variants={_footerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={_{ once: true}}
          className="space-y-16"
        >
          {_/* Main Footer Content */}
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-12">
            {_/* Company Info */}
            <motion.div variants={_itemVariants} className="lg:col-span-1">
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-12 h-12 bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 rounded-xl flex items-center justify-center shadow-lg shadow-cyan-500/30">
                  <Rocket className="w-7 h-7 text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                    Zion Tech Group
                  </h3>
                  <p className="text-sm text-cyan-300 font-medium">2032 Future Technology</p>
                </div>
              </div>
              
              <p className="text-slate-300 mb-6 leading-relaxed">
                Leading the future of technology with revolutionary AI, _quantum computing, _space technology, _and autonomous systems. 
                Empowering businesses with cutting-edge solutions for tomorrow's challenges.
              </p>

              {_/* Contact Information */}
              <div className="space-y-3">
                <div className="flex items-center space-x-3 text-slate-300 hover:text-cyan-300 transition-colors">
                  <Phone className="w-4 h-4 text-cyan-400" />
                  <a href={_`tel:${contactInfo.mobile}`} className="hover:text-cyan-300 transition-colors">
                    {_contactInfo.mobile}
                  </a>
                </div>
                <div className="flex items-center space-x-3 text-slate-300 hover:text-cyan-300 transition-colors">
                  <Mail className="w-4 h-4 text-cyan-400" />
                  <a href={_`mailto:${contactInfo.email}`} className="hover:text-cyan-300 transition-colors">
                    {_contactInfo.email}
                  </a>
                </div>
                <div className="flex items-center space-x-3 text-slate-300">
                  <MapPin className="w-4 h-4 text-cyan-400" />
                  <span>{_contactInfo.address}</span>
                </div>
                <div className="flex items-center space-x-3 text-slate-300 hover:text-cyan-300 transition-colors">
                  <Globe className="w-4 h-4 text-cyan-400" />
                  <a href={_contactInfo.website} target="_blank" rel="noopener noreferrer" className="hover:text-cyan-300 transition-colors">
                    {_contactInfo.website}
                  </a>
                </div>
              </div>
            </motion.div>

            {_/* Service Categories */}
            <motion.div variants={_itemVariants} className="lg:col-span-2">
              <h3 className="text-xl font-semibold text-white mb-8 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                Our Revolutionary Services
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {_serviceCategories.map((category, _index) => (_<div key={index} className="space-y-4">
                    <h4 className="text-lg font-medium text-white">{_category.title}</h4>
                    <ul className="space-y-2">
                      {_category.services.map((service, _serviceIndex) => (
                        <li key={serviceIndex}>
                          <Link
                            href={_service.href}
                            className="text-slate-300 hover:text-cyan-300 transition-colors duration-200 text-sm hover:translate-x-1 inline-block transform transition-transform"
                          >
                            {_service.name}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </motion.div>

            {_/* Quick Links & Company Info */}
            <motion.div variants={_itemVariants} className="lg:col-span-1">
              <h3 className="text-xl font-semibold text-white mb-8 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                Quick Access
              </h3>
              
              {_/* Quick Links */}
              <div className="mb-8">
                <h4 className="text-lg font-medium text-white mb-4">Quick Links</h4>
                <ul className="space-y-2">
                  {_quickLinks.map(_(link, _index) => (
                    <li key={index}>
                      <Link
                        href={_link.href}
                        className="flex items-center space-x-2 text-slate-300 hover:text-purple-300 transition-colors duration-200 text-sm group"
                      >
                        <link.icon className="w-4 h-4 group-hover:scale-110 transition-transform" />
                        <span>{_link.name}</span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              {_/* Company Info */}
              <div className="mb-8">
                <h4 className="text-lg font-medium text-white mb-4">Company</h4>
                <ul className="space-y-2">
                  {_companyInfo.map(_(item, _index) => (
                    <li key={index}>
                      <Link
                        href={_item.href}
                        className="text-slate-300 hover:text-purple-300 transition-colors duration-200 text-sm"
                      >
                        {_item.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              {_/* Social Links */}
              <div>
                <h4 className="text-lg font-medium text-white mb-4">Follow Us</h4>
                <div className="flex space-x-4">
                  {_socialLinks.map(_(social, _index) => (
                    <a
                      key={index}
                      href={_social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 border border-cyan-500/30 rounded-lg flex items-center justify-center text-cyan-400 hover:text-cyan-300 hover:border-cyan-400/50 transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-cyan-500/20"
                    >
                      <social.icon className="w-5 h-5" />
                    </a>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>

          {_/* Newsletter Signup */}
          <motion.div variants={_itemVariants} className="border-t border-cyan-500/30 pt-12">
            <div className="text-center">
              <h3 className="text-2xl font-bold text-white mb-4">
                Stay Ahead with Future Technology
              </h3>
              <p className="text-slate-300 mb-8 max-w-2xl mx-auto">
                Get the latest insights on AI breakthroughs, quantum computing advances, space technology innovations, 
                and autonomous systems development. Join our community of future technology pioneers.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                <input
                  type="email"
                  placeholder="Enter your email address"
                  className="flex-1 px-4 py-3 bg-black/50 border border-cyan-500/30 rounded-lg text-white placeholder-slate-400 focus:outline-none focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20 transition-all duration-300"
                />
                <button className="px-6 py-3 bg-gradient-to-r from-cyan-500 to-purple-500 text-white font-medium rounded-lg hover:from-cyan-600 hover:to-purple-600 transition-all duration-300 shadow-lg shadow-cyan-500/30 hover:shadow-cyan-500/50 transform hover:scale-105">
                  Subscribe
                </button>
              </div>
            </div>
          </motion.div>

          {_/* Bottom Bar */}
          <motion.div variants={_itemVariants} className="border-t border-cyan-500/30 pt-8">
            <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
              <div className="flex items-center space-x-2 text-slate-400 text-sm">
                <span>© 2024 Zion Tech Group. All rights reserved.</span>
                <span className="text-cyan-400">|</span>
                <span>Leading the Future of Technology</span>
              </div>
              
              <div className="flex items-center space-x-6 text-sm">
                <Link href="/privacy" className="text-slate-400 hover:text-cyan-300 transition-colors">
                  Privacy Policy
                </Link>
                <Link href="/terms" className="text-slate-400 hover:text-cyan-300 transition-colors">
                  Terms of Service
                </Link>
                <Link href="/cookies" className="text-slate-400 hover:text-cyan-300 transition-colors">
                  Cookie Policy
                </Link>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>

      {_/* Floating Action Button */}
      <div className="fixed bottom-8 right-8 z-50">
        <motion.button
          whileHover={_{ scale: 1.1}}
          whileTap={_{ scale: 0.9}}
          className="w-14 h-14 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full shadow-2xl shadow-cyan-500/30 hover:shadow-cyan-500/50 transition-all duration-300 flex items-center justify-center text-white"
          onClick={_() => window.scrollTo({ top: 0, _behavior: 'smooth'})}
        >
          <ArrowRight className="w-6 h-6 transform rotate-[-90deg]" />
        </motion.button>
      </div>
    </footer>
  );
}