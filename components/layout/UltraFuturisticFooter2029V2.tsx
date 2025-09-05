import React from 'react';
import Link from 'next/link';
import {_Phone, _Mail, _MapPin, _Globe, _ArrowRight, _Brain, _Rocket, _Target, _Shield, _Cpu, _Facebook, _Twitter, _Linkedin, _Instagram, _Youtube, _Github, _MessageCircle, _Star, _Zap, _Sparkles, _Home, _Users, _Briefcase, _BookOpen, _TrendingUp, _MessageSquare, _Calendar, _GraduationCap, _ShieldCheck, _Eye, _Code, _Wrench, _Smartphone, _BarChart3, _Palette, _Camera, _Video, _Music, _Gamepad2, _Heart, _Leaf, _Sun, _Moon, _Wind, _Droplets, _Mountain, _Globe2, _Bot, _Crown, _Infinity} from 'lucide-react';

const _contactInfo = {_mobile: '+1 302 464 0950', _email: 'kleber@ziontechgroup.com', _address: '364 E Main St STE 1008 Middletown DE 19709', _website: 'https://ziontechgroup.com'};

const _serviceCategories = [
  {_title: 'AI & Consciousness', _icon: Brain, _color: 'from-violet-600 via-purple-600 to-indigo-600', _services: [
      { name: 'AI Consciousness Evolution', _href: '/services/ai-consciousness-evolution-platform'},
      {_name: 'AI Emotional Intelligence', _href: '/services/ai-emotional-intelligence-platform'},
      {_name: 'AI Creativity Orchestrator', _href: '/services/ai-creativity-orchestrator'},
      {_name: 'AI Autonomous Business Manager', _href: '/services/ai-autonomous-business-manager'}
    ]
  },
  {_title: 'Quantum Technology', _icon: Globe, _color: 'from-indigo-600 via-blue-600 to-cyan-600', _services: [
      { name: 'Quantum Internet Security', _href: '/services/quantum-internet-security-gateway'},
      {_name: 'Biotech DNA Computing', _href: '/services/biotech-dna-computing-platform'},
      {_name: 'Quantum Financial Trading', _href: '/services/quantum-financial-trading-platform'},
      {_name: 'Quantum Creativity Studio', _href: '/services/quantum-creativity-studio'}
    ]
  },
  {_title: 'Space & Metaverse', _icon: Rocket, _color: 'from-teal-600 via-emerald-600 to-green-600', _services: [
      { name: 'Space Mining Automation', _href: '/services/space-mining-automation-platform'},
      {_name: 'Metaverse Digital Reality', _href: '/services/metaverse-digital-reality-platform'},
      {_name: 'AI Predictive Health', _href: '/services/ai-predictive-health-analytics'},
      {_name: 'Virtual Event Holograms', _href: '/services/virtual-event-hologram-platform'}
    ]
  },
  {_title: 'Enterprise IT', _icon: Cpu, _color: 'from-blue-600 via-cyan-600 to-teal-600', _services: [
      { name: 'AI Business Intelligence', _href: '/services/ai-business-intelligence-suite'},
      {_name: 'Smart Supply Chain', _href: '/services/smart-supply-chain-optimization'},
      {_name: 'Intelligent HR Management', _href: '/services/intelligent-hr-management-system'},
      {_name: 'Smart Financial Management', _href: '/services/smart-financial-management-platform'}
    ]
  }
];

const _mainNavigation = [
  {_name: 'Home', _href: '/', _icon: Home},
  {_name: 'Services', _href: '/services', _icon: Briefcase},
  {_name: 'AI Solutions', _href: '/ai-solutions', _icon: Brain},
  {_name: 'Quantum Tech', _href: '/quantum-tech', _icon: Globe},
  {_name: 'Enterprise IT', _href: '/enterprise-it', _icon: Cpu},
  {_name: 'Space Tech', _href: '/space-tech', _icon: Rocket},
  {_name: 'Micro SAAS', _href: '/micro-saas', _icon: Target},
  {_name: 'Innovations', _href: '/innovations', _icon: Sparkles},
  {_name: 'About', _href: '/about', _icon: Users},
  {_name: 'Contact', _href: '/contact', _icon: MessageCircle}
];

const _quickLinks = [
  {_name: 'About Us', _href: '/about', _icon: Users},
  {_name: 'Case Studies', _href: '/case-studies', _icon: BookOpen},
  {_name: 'Blog', _href: '/blog', _icon: BookOpen},
  {_name: 'News', _href: '/news', _icon: TrendingUp},
  {_name: 'Careers', _href: '/careers', _icon: GraduationCap},
  {_name: 'Support', _href: '/support', _icon: MessageCircle}
];

const _resources = [
  {_name: 'Documentation', _href: '/docs', _icon: BookOpen},
  {_name: 'API Reference', _href: '/api', _icon: Code},
  {_name: 'Case Studies', _href: '/case-studies', _icon: BookOpen},
  {_name: 'White Papers', _href: '/white-papers', _icon: BookOpen},
  {_name: 'Blog', _href: '/blog', _icon: BookOpen},
  {_name: 'News', _href: '/news', _icon: TrendingUp},
  {_name: 'Events', _href: '/events', _icon: Calendar},
  {_name: 'Webinars', _href: '/webinars', _icon: Video}
];

const _company = [
  {_name: 'About Us', _href: '/about', _icon: Users},
  {_name: 'Our Team', _href: '/team', _icon: Users},
  {_name: 'Careers', _href: '/careers', _icon: GraduationCap},
  {_name: 'Partners', _href: '/partners', _icon: Users},
  {_name: 'Investors', _href: '/investors', _icon: Star},
  {_name: 'Press', _href: '/press', _icon: BookOpen},
  {_name: 'Legal', _href: '/legal', _icon: Shield},
  {_name: 'Privacy', _href: '/privacy', _icon: ShieldCheck}
];

const _socialLinks = [
  {_name: 'LinkedIn', _href: 'https://linkedin.com/company/ziontechgroup', _icon: Linkedin, _color: 'hover:text-blue-500'},
  {_name: 'Twitter', _href: 'https://twitter.com/ziontechgroup', _icon: Twitter, _color: 'hover:text-blue-400'},
  {_name: 'Facebook', _href: 'https://facebook.com/ziontechgroup', _icon: Facebook, _color: 'hover:text-blue-600'},
  {_name: 'Instagram', _href: 'https://instagram.com/ziontechgroup', _icon: Instagram, _color: 'hover:text-pink-500'},
  {_name: 'YouTube', _href: 'https://youtube.com/@ziontechgroup', _icon: Youtube, _color: 'hover:text-red-500'},
  {_name: 'GitHub', _href: 'https://github.com/Zion-Holdings', _icon: Github, _color: 'hover:text-gray-400'}
];

const _footerSections = [
  {_title: 'Services', _links: [
      { name: 'AI & Machine Learning', _href: '/services/ai-ml'},
      {_name: 'Quantum Computing', _href: '/services/quantum-computing'},
      {_name: 'Space Technology', _href: '/services/space-technology'},
      {_name: 'Enterprise IT', _href: '/services/enterprise-it'},
      {_name: 'Micro SAAS', _href: '/services/micro-saas'},
      {_name: 'Cybersecurity', _href: '/services/cybersecurity'}
    ]
  },
  {_title: 'Solutions', _links: [
      { name: 'AI Consciousness', _href: '/solutions/ai-consciousness'},
      {_name: 'Quantum Security', _href: '/solutions/quantum-security'},
      {_name: 'Space Mining', _href: '/solutions/space-mining'},
      {_name: 'Metaverse Platform', _href: '/solutions/metaverse'},
      {_name: 'Business Intelligence', _href: '/solutions/business-intelligence'},
      {_name: 'Supply Chain AI', _href: '/solutions/supply-chain-ai'}
    ]
  },
  {_title: 'Industries', _links: [
      { name: 'Healthcare', _href: '/industries/healthcare'},
      {_name: 'Finance', _href: '/industries/finance'},
      {_name: 'Manufacturing', _href: '/industries/manufacturing'},
      {_name: 'Retail', _href: '/industries/retail'},
      {_name: 'Education', _href: '/industries/education'},
      {_name: 'Government', _href: '/industries/government'}
    ]
  },
  {_title: 'Resources', _links: [
      { name: 'Documentation', _href: '/docs'},
      {_name: 'API Reference', _href: '/api'},
      {_name: 'Case Studies', _href: '/case-studies'},
      {_name: 'White Papers', _href: '/white-papers'},
      {_name: 'Blog', _href: '/blog'},
      {_name: 'Research', _href: '/research'}
    ]
  }
];

export default function UltraFuturisticFooter2029V2() {_return (_<footer className="relative bg-black/90 backdrop-blur-xl border-t border-cyan-500/20">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-4 gap-12">
          {_/* Company Info */}
          <div className="lg:col-span-2 xl:col-span-1">
            <motion.div
              initial={_{ opacity: 0, _y: 20}}
              whileInView={_{ opacity: 1, _y: 0}}
              transition={_{ duration: 0.6}}
              viewport={_{ once: true}}
            >
              <Link href="/" className="flex items-center space-x-3 mb-6 group">
                <div className="relative">
                  <div className="w-12 h-12 bg-gradient-to-r from-cyan-400 to-purple-500 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <Rocket className="w-7 h-7 text-white" />
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-purple-500 rounded-xl blur-lg opacity-50 group-hover:opacity-75 transition-opacity duration-300" />
                </div>
                <div>
                  <h3 className="text-xl font-bold bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                    Zion Tech Group
                  </h3>
                  <p className="text-sm text-gray-400">Future Technology Solutions</p>
                </div>
              </Link>
              
              <p className="text-gray-300 mb-6 leading-relaxed">
                Leading the future with cutting-edge AI, _quantum computing, _space technology, _and innovative micro SAAS solutions. 
                Transforming businesses through next-generation technology.
              </p>
              
              {_/* Contact Info */}
              <div className="space-y-3">
                <div className="flex items-center space-x-3 text-gray-300">
                  <Phone className="w-4 h-4 text-cyan-400" />
                  <span className="text-sm">{_contactInfo.mobile}</span>
                </div>
                <div className="flex items-center space-x-3 text-gray-300">
                  <Mail className="w-4 h-4 text-cyan-400" />
                  <span className="text-sm">{_contactInfo.email}</span>
                </div>
                <div className="flex items-center space-x-3 text-gray-300">
                  <MapPin className="w-4 h-4 text-cyan-400" />
                  <span className="text-sm">{_contactInfo.address}</span>
                </div>
                <div className="flex items-center space-x-3 text-gray-300">
                  <Globe className="w-4 h-4 text-cyan-400" />
                  <span className="text-sm">{_contactInfo.website}</span>
                </div>
              </div>
            </motion.div>
          </div>

          {_/* Service Categories */}
          {_footerSections.map((section, _index) => (_<motion.div
              key={section.title}
              initial={_{ opacity: 0, _y: 20}}
              whileInView={_{ opacity: 1, _y: 0}}
              transition={_{ duration: 0.6, _delay: index * 0.1}}
              viewport={_{ once: true}}
            >
              <h4 className="text-lg font-semibold text-white mb-6 flex items-center">
                <div className="w-2 h-2 bg-gradient-to-r from-cyan-400 to-purple-500 rounded-full mr-3" />
                {_section.title}
              </h4>
              <ul className="space-y-3">
                {_section.links.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={_link.href}
                      className="text-gray-400 hover:text-cyan-400 transition-colors duration-300 text-sm flex items-center group"
                    >
                      <ArrowRight className="w-3 h-3 mr-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                      {_link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {_/* Service Showcase */}
        <motion.div
          initial={_{ opacity: 0, _y: 20}}
          whileInView={_{ opacity: 1, _y: 0}}
          transition={_{ duration: 0.6, _delay: 0.3}}
          viewport={_{ once: true}}
          className="mt-16 pt-12 border-t border-gray-800"
        >
          <h3 className="text-2xl font-bold text-white text-center mb-8">
            Featured 2029 Services
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {_serviceCategories.map(_(category, _index) => (
              <motion.div
                key={category.title}
                initial={_{ opacity: 0, _scale: 0.9}}
                whileInView={_{ opacity: 1, _scale: 1}}
                transition={_{ duration: 0.5, _delay: index * 0.1}}
                viewport={_{ once: true}}
                className="group"
              >
                <div className={_`p-4 rounded-xl bg-gradient-to-br ${category.color} bg-opacity-10 border border-cyan-500/20 hover:border-cyan-500/40 transition-all duration-300`}>
                  <div className="flex items-center space-x-3 mb-3">
                    <div className={_`p-2 rounded-lg bg-gradient-to-r ${category.color}`}>
                      <category.icon className="w-5 h-5 text-white" />
                    </div>
                    <h4 className="font-semibold text-white text-sm">{_category.title}</h4>
                  </div>
                  <ul className="space-y-2">
                    {_category.services.slice(0, _3).map(_(service) => (
                      <li key={service.name}>
                        <Link
                          href={_service.href}
                          className="text-gray-300 hover:text-cyan-400 transition-colors duration-300 text-xs block"
                        >
                          {_service.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>

      {_/* Bottom Footer */}
      <div className="border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            {_/* Copyright */}
            <motion.div
              initial={_{ opacity: 0, _x: -20}}
              whileInView={_{ opacity: 1, _x: 0}}
              transition={_{ duration: 0.6}}
              viewport={_{ once: true}}
              className="text-gray-400 text-sm"
            >
              © 2025 Zion Tech Group. All rights reserved. | 
              <Link href="/privacy" className="hover:text-cyan-400 transition-colors duration-300 ml-2">Privacy Policy</Link> | 
              <Link href="/terms" className="hover:text-cyan-400 transition-colors duration-300 ml-2">Terms of Service</Link>
            </motion.div>

            {_/* Social Links */}
            <motion.div
              initial={_{ opacity: 0, _x: 20}}
              whileInView={_{ opacity: 1, _x: 0}}
              transition={_{ duration: 0.6}}
              viewport={_{ once: true}}
              className="flex items-center space-x-4"
            >
              {_socialLinks.map(_(social) => (
                <Link
                  key={social.name}
                  href={_social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={_`p-2 rounded-lg bg-gray-800/50 hover:bg-cyan-500/20 text-gray-400 ${social.color} transition-all duration-300 hover:scale-110`}
                >
                  <social.icon className="w-4 h-4" />
                </Link>
              ))}
            </motion.div>
          </div>
        </div>
      </div>

      {_/* Newsletter Signup */}
      <motion.div
        initial={_{ opacity: 0, _y: 20}}
        whileInView={_{ opacity: 1, _y: 0}}
        transition={_{ duration: 0.6, _delay: 0.4}}
        viewport={_{ once: true}}
        className="bg-gradient-to-r from-cyan-500/10 to-purple-500/10 border-t border-cyan-500/20"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="text-center">
            <h3 className="text-2xl font-bold text-white mb-4">
              Stay Ahead with Future Tech
            </h3>
            <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
              Get the latest updates on AI breakthroughs, quantum computing advances, space technology innovations, and cutting-edge micro SAAS solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 bg-gray-800/50 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500/50 focus:border-cyan-500/50"
              />
              <button className="px-6 py-3 bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-medium rounded-lg hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </motion.div>
    </footer>
  );
}