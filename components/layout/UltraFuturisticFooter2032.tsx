import React from 'react',
import Link from 'next/link',
import { motion } from 'framer-motion',
import { 
  Phone, Mail, MapPin, Globe, Zap, Brain, Atom, 
  Rocket, Shield, Cpu, Target, Microscope, Users,
  Facebook, Twitter, Linkedin, Instagram, Youtube,
  Github, ArrowRight, Heart, Star, Award, CheckCircle,
  Home, Briefcase, BookOpen, MessageCircle, DollarSign,
  TrendingUp, Target as TargetIcon, Users as UsersIcon,
  Briefcase as BriefcaseIcon, BookOpen as BookOpenIcon,
  MessageCircle as MessageCircleIcon, Star as StarIcon
} from 'lucide-react',

const contactInfo = {
  mobile: '+1 302 464 0950',
  email: 'kleber@ziontechgroup.com',
  address: '364 E Main St STE 1008 Middletown DE 19709',
  website: 'https://ziontechgroup.com'
},

const mainNavigationRoutes = [
  { name: 'Home', href: '/', icon: Home, description: 'Welcome to Zion Tech Group' },
  { name: 'Services', href: '/services', icon: Briefcase, description: 'Our comprehensive service portfolio' },
  { name: 'Solutions', href: '/solutions', icon: TargetIcon, description: 'Tailored solutions for your business' },
  { name: 'Pricing', href: '/pricing', icon: DollarSign, description: 'Transparent pricing and packages' },
  { name: 'Resources', href: '/resources', icon: BookOpen, description: 'Knowledge base and documentation' },
  { name: 'Case Studies', href: '/case-studies', icon: Users, description: 'Success stories and implementations' },
  { name: 'Blog', href: '/blog', icon: MessageCircle, description: 'Latest insights and updates' },
  { name: 'Contact', href: '/contact', icon: MessageCircle, description: 'Get in touch with our team' }
],

const serviceCategories = [
  {
    title: '🚀 2032 Revolutionary AI Services',
    services: [
      { name: 'AI Consciousness Evolution', href: '/ai-consciousness-evolution-platform' },
      { name: 'AI Emotional Intelligence', href: '/ai-emotional-intelligence-platform' },
      { name: 'AI Creativity Orchestrator', href: '/ai-creativity-orchestrator' },
      { name: 'AI Autonomous Business Manager', href: '/ai-autonomous-business-manager' }
    ]
  },
  {
    title: '⚛️ 2032 Quantum & Emerging Tech',
    services: [
      { name: 'Quantum DNA Computing', href: '/quantum-dna-computing-platform' },
      { name: 'Quantum Internet Security', href: '/quantum-internet-security-gateway' },
      { name: 'Quantum Financial Trading', href: '/quantum-financial-trading-platform' },
      { name: 'Quantum Creativity Studio', href: '/quantum-creativity-studio' }
    ]
  },
  {
    title: '🏙️ 2032 Enterprise IT Solutions',
    services: [
      { name: 'Autonomous DevOps', href: '/autonomous-devops-platform' },
      { name: 'Zero Trust Architecture', href: '/zero-trust-network-architecture' },
      { name: 'Edge Computing Orchestration', href: '/edge-computing-orchestration' },
      { name: 'AI IT Operations Center', href: '/ai-powered-it-operations-center' }
    ]
  },
  {
    title: '🌌 2032 Space & Metaverse Tech',
    services: [
      { name: 'Space Mining Automation', href: '/space-mining-automation-platform' },
      { name: 'Metaverse Development', href: '/metaverse-development-platform' },
      { name: 'AI Predictive Health', href: '/ai-predictive-health-analytics' },
      { name: 'AI Autonomous Business', href: '/ai-autonomous-business-manager' }
    ]
  },
  {
    title: '🎯 2032 Innovative Micro SAAS',
    services: [
      { name: 'AI Business Intelligence', href: '/ai-business-intelligence-suite' },
      { name: 'Quantum-Secure Communication', href: '/quantum-secure-communication-platform' },
      { name: 'AI Customer Success', href: '/ai-customer-success-automation' },
      { name: 'Blockchain Supply Chain', href: '/blockchain-supply-chain-transparency' }
    ]
  },
  {
    title: '🔬 2032 Research & Development',
    services: [
      { name: 'Neuromorphic Computing', href: '/neuromorphic-computing-platform' },
      { name: 'DNA Computing Platform', href: '/dna-computing-platform' },
      { name: 'Photonic Computing', href: '/photonic-computing-infrastructure' },
      { name: 'Swarm Robotics', href: '/swarm-robotics-orchestration' }
    ]
  }
],

const quickLinks = [
  { name: '2032 Services', href: '/2032-futuristic-services-showcase', icon: Star, description: 'Revolutionary 2032 services' },
  { name: 'Enhanced Pricing', href: '/enhanced-market-pricing-2032', icon: DollarSign, description: 'Comprehensive pricing analysis' },
  { name: 'Market Pricing', href: '/market-pricing', icon: DollarSign, description: 'Competitive pricing references' },
  { name: 'Enhanced Services', href: '/enhanced-services-showcase', icon: Star, description: 'Premium service showcase' },
  { name: 'Revolutionary 2026', href: '/revolutionary-2026-services', icon: TrendingUp, description: '2026 breakthrough services' },
  { name: 'Ultimate 2026', href: '/ultimate-2026-services-showcase', icon: Target, description: 'Ultimate service portfolio' },
  { name: 'News & Updates', href: '/news', icon: MessageCircle, description: 'Latest company news' },
  { name: 'Support', href: '/support', icon: Users, description: 'Technical support and help' }
],

const companyInfo = [
  { name: 'About Us', href: '/about' },
  { name: 'Careers', href: '/careers' },
  { name: 'Press', href: '/press' },
  { name: 'Partners', href: '/partners' },
  { name: 'Support', href: '/support' },
  { name: 'Status', href: '/status' }
],

const socialLinks = [
  { name: 'LinkedIn', href: 'https://linkedin.com/company/ziontechgroup', icon: Linkedin },
  { name: 'Twitter', href: 'https://twitter.com/ziontechgroup', icon: Twitter },
  { name: 'Facebook', href: 'https://facebook.com/ziontechgroup', icon: Facebook },
  { name: 'Instagram', href: 'https://instagram.com/ziontechgroup', icon: Instagram },
  { name: 'YouTube', href: 'https://youtube.com/ziontechgroup', icon: Youtube },
  { name: 'GitHub', href: 'https://github.com/Zion-Holdings', icon: Github }
],

const footerVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      staggerChildren: 0.1
    }
  }
},

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 }
},

export default function UltraFuturisticFooter2032() {
  return (
    <footer className=&quot;relative bg-gradient-to-b from-black via-gray-900 to-black border-t border-cyan-500/30 overflow-hidden&quot;>
      {/* Animated Background Elements */}
      <div className=&quot;absolute inset-0&quot;>
        <div className=&quot;absolute top-0 left-0 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl&quot;></div>
        <div className=&quot;absolute top-0 right-0 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl&quot;></div>
        <div className=&quot;absolute bottom-0 left-1/4 w-96 h-96 bg-pink-500/5 rounded-full blur-3xl&quot;></div>
      </div>

      <div className=&quot;relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-10&quot;>
        <motion.div
          variants={footerVariants}
          initial=&quot;hidden&quot;
          whileInView=&quot;visible&quot;
          viewport={{ once: true }}
          className=&quot;space-y-16&quot;
        >
          {/* Main Footer Content */}
          <div className=&quot;grid grid-cols-1 lg:grid-cols-4 gap-12&quot;>
            {/* Company Info */}
            <motion.div variants={itemVariants} className=&quot;lg:col-span-1&quot;>
              <div className=&quot;flex items-center space-x-3 mb-6&quot;>
                <div className=&quot;w-12 h-12 bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 rounded-xl flex items-center justify-center shadow-lg shadow-cyan-500/30&quot;>
                  <Rocket className=&quot;w-7 h-7 text-white&quot; />
                </div>
                <div>
                  <h3 className=&quot;text-2xl font-bold bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent&quot;>
                    Zion Tech Group
                  </h3>
                  <p className=&quot;text-sm text-cyan-300 font-medium&quot;>2032 Future Technology</p>
                </div>
              </div>
              
              <p className=&quot;text-slate-300 mb-6 leading-relaxed&quot;>
                Leading the future of technology with revolutionary AI, quantum computing, space technology, and autonomous systems. 
                Empowering businesses with cutting-edge solutions for tomorrow's challenges.
              </p>

              {/* Contact Information */}
              <div className=&quot;space-y-3&quot;>
                <div className=&quot;flex items-center space-x-3 text-slate-300 hover:text-cyan-300 transition-colors&quot;>
                  <Phone className=&quot;w-4 h-4 text-cyan-400&quot; />
                  <a href={`tel:${contactInfo.mobile}`} className=&quot;hover:text-cyan-300 transition-colors&quot;>
                    {contactInfo.mobile}
                  </a>
                </div>
                <div className=&quot;flex items-center space-x-3 text-slate-300 hover:text-cyan-300 transition-colors&quot;>
                  <Mail className=&quot;w-4 h-4 text-cyan-400&quot; />
                  <a href={`mailto:${contactInfo.email}`} className=&quot;hover:text-cyan-300 transition-colors&quot;>
                    {contactInfo.email}
                  </a>
                </div>
                <div className=&quot;flex items-center space-x-3 text-slate-300&quot;>
                  <MapPin className=&quot;w-4 h-4 text-cyan-400&quot; />
                  <span>{contactInfo.address}</span>
                </div>
                <div className=&quot;flex items-center space-x-3 text-slate-300 hover:text-cyan-300 transition-colors&quot;>
                  <Globe className=&quot;w-4 h-4 text-cyan-400&quot; />
                  <a href={contactInfo.website} target=&quot;_blank&quot; rel=&quot;noopener noreferrer&quot; className=&quot;hover:text-cyan-300 transition-colors&quot;>
                    {contactInfo.website}
                  </a>
                </div>
              </div>
            </motion.div>

            {/* Service Categories */}
            <motion.div variants={itemVariants} className=&quot;lg:col-span-2&quot;>
              <h3 className=&quot;text-xl font-semibold text-white mb-8 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent&quot;>
                Our Revolutionary Services
              </h3>
              <div className=&quot;grid grid-cols-1 md:grid-cols-2 gap-8&quot;>
                {serviceCategories.map((category, index) => (
                  <div key={index} className=&quot;space-y-4&quot;>
                    <h4 className=&quot;text-lg font-medium text-white&quot;>{category.title}</h4>
                    <ul className=&quot;space-y-2&quot;>
                      {category.services.map((service, serviceIndex) => (
                        <li key={serviceIndex}>
                          <Link
                            href={service.href}
                            className=&quot;text-slate-300 hover:text-cyan-300 transition-colors duration-200 text-sm hover:translate-x-1 inline-block transform transition-transform&quot;
                          >
                            {service.name}
                          </a>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Quick Links & Company Info */}
            <motion.div variants={itemVariants} className=&quot;lg:col-span-1&quot;>
              <h3 className=&quot;text-xl font-semibold text-white mb-8 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent&quot;>
                Quick Access
              </h3>
              
              {/* Quick Links */}
              <div className=&quot;mb-8&quot;>
                <h4 className=&quot;text-lg font-medium text-white mb-4&quot;>Quick Links</h4>
                <ul className=&quot;space-y-2&quot;>
                  {quickLinks.map((link, index) => (
                    <li key={index}>
                      <Link
                        href={link.href}
                        className=&quot;flex items-center space-x-2 text-slate-300 hover:text-purple-300 transition-colors duration-200 text-sm group&quot;
                      >
                        <link.icon className=&quot;w-4 h-4 group-hover:scale-110 transition-transform&quot; />
                        <span>{link.name}</span>
                      </a>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Company Info */}
              <div className=&quot;mb-8&quot;>
                <h4 className=&quot;text-lg font-medium text-white mb-4&quot;>Company</h4>
                <ul className=&quot;space-y-2&quot;>
                  {companyInfo.map((item, index) => (
                    <li key={index}>
                      <Link
                        href={item.href}
                        className=&quot;text-slate-300 hover:text-purple-300 transition-colors duration-200 text-sm&quot;
                      >
                        {item.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Social Links */}
              <div>
                <h4 className=&quot;text-lg font-medium text-white mb-4&quot;>Follow Us</h4>
                <div className=&quot;flex space-x-4&quot;>
                  {socialLinks.map((social, index) => (
                    <a
                      key={index}
                      href={social.href}
                      target=&quot;_blank&quot;
                      rel=&quot;noopener noreferrer&quot;
                      className=&quot;w-10 h-10 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 border border-cyan-500/30 rounded-lg flex items-center justify-center text-cyan-400 hover:text-cyan-300 hover:border-cyan-400/50 transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-cyan-500/20&quot;
                    >
                      <social.icon className=&quot;w-5 h-5&quot; />
                    </a>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>

          {/* Newsletter Signup */}
          <motion.div variants={itemVariants} className=&quot;border-t border-cyan-500/30 pt-12&quot;>
            <div className=&quot;text-center&quot;>
              <h3 className=&quot;text-2xl font-bold text-white mb-4&quot;>
                Stay Ahead with Future Technology
              </h3>
              <p className=&quot;text-slate-300 mb-8 max-w-2xl mx-auto&quot;>
                Get the latest insights on AI breakthroughs, quantum computing advances, space technology innovations, 
                and autonomous systems development. Join our community of future technology pioneers.
              </p>
              <div className=&quot;flex flex-col sm:flex-row gap-4 max-w-md mx-auto&quot;>
                <input
                  type=&quot;email&quot;
                  placeholder=&quot;Enter your email address&quot;
                  className=&quot;flex-1 px-4 py-3 bg-black/50 border border-cyan-500/30 rounded-lg text-white placeholder-slate-400 focus:outline-none focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20 transition-all duration-300&quot;
                />
                <button className=&quot;px-6 py-3 bg-gradient-to-r from-cyan-500 to-purple-500 text-white font-medium rounded-lg hover:from-cyan-600 hover:to-purple-600 transition-all duration-300 shadow-lg shadow-cyan-500/30 hover:shadow-cyan-500/50 transform hover:scale-105&quot;>
                  Subscribe
                </button>
              </div>
            </div>
          </motion.div>

          {/* Bottom Bar */}
          <motion.div variants={itemVariants} className=&quot;border-t border-cyan-500/30 pt-8&quot;>
            <div className=&quot;flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0&quot;>
              <div className=&quot;flex items-center space-x-2 text-slate-400 text-sm&quot;>
                <span>© 2024 Zion Tech Group. All rights reserved.</span>
                <span className=&quot;text-cyan-400&quot;>|</span>
                <span>Leading the Future of Technology</span>
              </div>
              
              <div className=&quot;flex items-center space-x-6 text-sm&quot;>
                <Link href=&quot;/privacy&quot; className=&quot;text-slate-400 hover:text-cyan-300 transition-colors&quot;>
                  Privacy Policy
                </a>
                <Link href=&quot;/terms&quot; className=&quot;text-slate-400 hover:text-cyan-300 transition-colors&quot;>
                  Terms of Service
                </a>
                <Link href=&quot;/cookies&quot; className=&quot;text-slate-400 hover:text-cyan-300 transition-colors&quot;>
                  Cookie Policy
                </a>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Floating Action Button */}
      <div className=&quot;fixed bottom-8 right-8 z-50&quot;>
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className=&quot;w-14 h-14 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full shadow-2xl shadow-cyan-500/30 hover:shadow-cyan-500/50 transition-all duration-300 flex items-center justify-center text-white&quot;
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        >
          <ArrowRight className=&quot;w-6 h-6 transform rotate-[-90deg]&quot; />
        </motion.button>
      </div>
    </footer>
  )
}