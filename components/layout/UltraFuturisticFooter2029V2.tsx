import React from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { 
  Phone, Mail, MapPin, Globe, ArrowRight,
  Brain, Rocket, Target, Shield, Cpu,
  Facebook, Twitter, Linkedin, Instagram, Youtube,
  Github, MessageCircle, Star, Zap, Sparkles,
  Home, Users, Briefcase, BookOpen, TrendingUp,
  MessageSquare, Calendar,
  GraduationCap, ShieldCheck, Eye, Code, Wrench,
  Smartphone, BarChart3, Palette, Camera, Video,
  Music, Gamepad2, Heart, Leaf, Sun, Moon, Wind,
  Droplets, Mountain, Globe2, Bot, Crown, Infinity
} from 'lucide-react',

const contactInfo = {
  mobile: '+1 302 464 0950',
  email: 'kleber@ziontechgroup.com',
  address: '364 E Main St STE 1008 Middletown DE 19709',
  website: 'https://ziontechgroup.com'
},

const _contactInfo = {_mobile: '+1 302 464 0950', _email: 'kleber@ziontechgroup.com', _address: '364 E Main St STE 1008 Middletown DE 19709', _website: 'https://ziontechgroup.com'};
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13

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
],

const mainNavigation = [
  { name: 'Home', href: '/', icon: Home },
  { name: 'Services', href: '/services', icon: Briefcase },
  { name: 'AI Solutions', href: '/ai-solutions', icon: Brain },
  { name: 'Quantum Tech', href: '/quantum-tech', icon: Globe },
  { name: 'Enterprise IT', href: '/enterprise-it', icon: Cpu },
  { name: 'Space Tech', href: '/space-tech', icon: Rocket },
  { name: 'Micro SAAS', href: '/micro-saas', icon: Target },
  { name: 'Innovations', href: '/innovations', icon: Sparkles },
  { name: 'About', href: '/about', icon: Users },
  { name: 'Contact', href: '/contact', icon: MessageCircle }
],

const quickLinks = [
  { name: 'About Us', href: '/about', icon: Users },
  { name: 'Case Studies', href: '/case-studies', icon: BookOpen },
  { name: 'Blog', href: '/blog', icon: BookOpen },
  { name: 'News', href: '/news', icon: TrendingUp },
  { name: 'Careers', href: '/careers', icon: GraduationCap },
  { name: 'Support', href: '/support', icon: MessageCircle }
],

const resources = [
  { name: 'Documentation', href: '/docs', icon: BookOpen },
  { name: 'API Reference', href: '/api', icon: Code },
  { name: 'Case Studies', href: '/case-studies', icon: BookOpen },
  { name: 'White Papers', href: '/white-papers', icon: BookOpen },
  { name: 'Blog', href: '/blog', icon: BookOpen },
  { name: 'News', href: '/news', icon: TrendingUp },
  { name: 'Events', href: '/events', icon: Calendar },
  { name: 'Webinars', href: '/webinars', icon: Video }
],

const company = [
  { name: 'About Us', href: '/about', icon: Users },
  { name: 'Our Team', href: '/team', icon: Users },
  { name: 'Careers', href: '/careers', icon: GraduationCap },
  { name: 'Partners', href: '/partners', icon: Users },
  { name: 'Investors', href: '/investors', icon: Star },
  { name: 'Press', href: '/press', icon: BookOpen },
  { name: 'Legal', href: '/legal', icon: Shield },
  { name: 'Privacy', href: '/privacy', icon: ShieldCheck }
],

const socialLinks = [
  { name: 'LinkedIn', href: 'https://linkedin.com/company/ziontechgroup', icon: Linkedin, color: 'hover:text-blue-500' },
  { name: 'Twitter', href: 'https://twitter.com/ziontechgroup', icon: Twitter, color: 'hover:text-blue-400' },
  { name: 'Facebook', href: 'https://facebook.com/ziontechgroup', icon: Facebook, color: 'hover:text-blue-600' },
  { name: 'Instagram', href: 'https://instagram.com/ziontechgroup', icon: Instagram, color: 'hover:text-pink-500' },
  { name: 'YouTube', href: 'https://youtube.com/@ziontechgroup', icon: Youtube, color: 'hover:text-red-500' },
  { name: 'GitHub', href: 'https://github.com/Zion-Holdings', icon: Github, color: 'hover:text-gray-400' }
],

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
],

export default function UltraFuturisticFooter2029V2() {
  return (
    <footer className=&quot;relative bg-black/90 backdrop-blur-xl border-t border-cyan-500/20&quot;>
      {/* Main Footer Content */}
      <div className=&quot;max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16&quot;>
        <div className=&quot;grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-4 gap-12&quot;>
          {/* Company Info */}
          <div className=&quot;lg:col-span-2 xl:col-span-1&quot;>
            <motion.div
              initial={_{ opacity: 0, _y: 20}}
              whileInView={_{ opacity: 1, _y: 0}}
              transition={_{ duration: 0.6}}
              viewport={_{ once: true}}
            >
              <Link href=&quot;/&quot; className=&quot;flex items-center space-x-3 mb-6 group&quot;>
                <div className=&quot;relative&quot;>
                  <div className=&quot;w-12 h-12 bg-gradient-to-r from-cyan-400 to-purple-500 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300&quot;>
                    <Rocket className=&quot;w-7 h-7 text-white&quot; />
                  </div>
                  <div className=&quot;absolute inset-0 bg-gradient-to-r from-cyan-400 to-purple-500 rounded-xl blur-lg opacity-50 group-hover:opacity-75 transition-opacity duration-300&quot; />
                </div>
                <div>
                  <h3 className=&quot;text-xl font-bold bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent&quot;>
                    Zion Tech Group
                  </h3>
                  <p className=&quot;text-sm text-gray-400&quot;>Future Technology Solutions</p>
                </div>
              </a>
              
              <p className=&quot;text-gray-300 mb-6 leading-relaxed&quot;>
                Leading the future with cutting-edge AI, quantum computing, space technology, and innovative micro SAAS solutions. 
                Transforming businesses through next-generation technology.
              </p>
              
              {/* Contact Info */}
              <div className=&quot;space-y-3&quot;>
                <div className=&quot;flex items-center space-x-3 text-gray-300&quot;>
                  <Phone className=&quot;w-4 h-4 text-cyan-400&quot; />
                  <span className=&quot;text-sm&quot;>{contactInfo.mobile}</span>
                </div>
                <div className=&quot;flex items-center space-x-3 text-gray-300&quot;>
                  <Mail className=&quot;w-4 h-4 text-cyan-400&quot; />
                  <span className=&quot;text-sm&quot;>{contactInfo.email}</span>
                </div>
                <div className=&quot;flex items-center space-x-3 text-gray-300&quot;>
                  <MapPin className=&quot;w-4 h-4 text-cyan-400&quot; />
                  <span className=&quot;text-sm&quot;>{contactInfo.address}</span>
                </div>
                <div className=&quot;flex items-center space-x-3 text-gray-300&quot;>
                  <Globe className=&quot;w-4 h-4 text-cyan-400&quot; />
                  <span className=&quot;text-sm&quot;>{contactInfo.website}</span>
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
              <h4 className=&quot;text-lg font-semibold text-white mb-6 flex items-center&quot;>
                <div className=&quot;w-2 h-2 bg-gradient-to-r from-cyan-400 to-purple-500 rounded-full mr-3&quot; />
                {section.title}
              </h4>
              <ul className=&quot;space-y-3&quot;>
                {section.links.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className=&quot;text-gray-400 hover:text-cyan-400 transition-colors duration-300 text-sm flex items-center group&quot;
                    >
                      <ArrowRight className=&quot;w-3 h-3 mr-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300&quot; />
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {_/* Service Showcase */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className=&quot;mt-16 pt-12 border-t border-gray-800&quot;
        >
          <h3 className=&quot;text-2xl font-bold text-white text-center mb-8&quot;>
            Featured 2029 Services
          </h3>
          <div className=&quot;grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6&quot;>
            {serviceCategories.map((category, index) => (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className=&quot;group&quot;
              >
                <div className={`p-4 rounded-xl bg-gradient-to-br ${category.color} bg-opacity-10 border border-cyan-500/20 hover:border-cyan-500/40 transition-all duration-300`}>
                  <div className=&quot;flex items-center space-x-3 mb-3&quot;>
                    <div className={`p-2 rounded-lg bg-gradient-to-r ${category.color}`}>
                      <category.icon className=&quot;w-5 h-5 text-white&quot; />
                    </div>
                    <h4 className=&quot;font-semibold text-white text-sm&quot;>{category.title}</h4>
                  </div>
                  <ul className=&quot;space-y-2&quot;>
                    {category.services.slice(0, 3).map((service) => (
                      <li key={service.name}>
                        <Link
                          href={service.href}
                          className=&quot;text-gray-300 hover:text-cyan-400 transition-colors duration-300 text-xs block&quot;
                        >
                          {service.name}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Bottom Footer */}
      <div className=&quot;border-t border-gray-800&quot;>
        <div className=&quot;max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8&quot;>
          <div className=&quot;flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0&quot;>
            {/* Copyright */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className=&quot;text-gray-400 text-sm&quot;
            >
              © 2025 Zion Tech Group. All rights reserved. | 
              <Link href=&quot;/privacy&quot; className=&quot;hover:text-cyan-400 transition-colors duration-300 ml-2&quot;>Privacy Policy</a> | 
              <Link href=&quot;/terms&quot; className=&quot;hover:text-cyan-400 transition-colors duration-300 ml-2&quot;>Terms of Service</a>
            </motion.div>

            {_/* Social Links */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className=&quot;flex items-center space-x-4&quot;
            >
              {_socialLinks.map(_(social) => (
                <Link
                  key={social.name}
                  href={social.href}
                  target=&quot;_blank&quot;
                  rel=&quot;noopener noreferrer&quot;
                  className={`p-2 rounded-lg bg-gray-800/50 hover:bg-cyan-500/20 text-gray-400 ${social.color} transition-all duration-300 hover:scale-110`}
                >
                  <social.icon className=&quot;w-4 h-4&quot; />
                </a>
              ))}
            </motion.div>
          </div>
        </div>
      </div>

      {_/* Newsletter Signup */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.4 }}
        viewport={{ once: true }}
        className=&quot;bg-gradient-to-r from-cyan-500/10 to-purple-500/10 border-t border-cyan-500/20&quot;
      >
        <div className=&quot;max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8&quot;>
          <div className=&quot;text-center&quot;>
            <h3 className=&quot;text-2xl font-bold text-white mb-4&quot;>
              Stay Ahead with Future Tech
            </h3>
            <p className=&quot;text-gray-300 mb-6 max-w-2xl mx-auto&quot;>
              Get the latest updates on AI breakthroughs, quantum computing advances, space technology innovations, and cutting-edge micro SAAS solutions.
            </p>
            <div className="flex flex-col sm: flex-row gap-4 max-w-md mx-auto">
>>>>>>> fe9f06f7950cff0c8d855f93e475fc9658604231
              <input
                type=&quot;email&quot;
                placeholder=&quot;Enter your email&quot;
                className=&quot;flex-1 px-4 py-3 bg-gray-800/50 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500/50 focus:border-cyan-500/50&quot;
              />
              <button className=&quot;px-6 py-3 bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-medium rounded-lg hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105&quot;>
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </motion.div>
    </footer>
  )
}