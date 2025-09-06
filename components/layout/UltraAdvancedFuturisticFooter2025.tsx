import React from 'react',
import { motion } from 'framer-motion',
import { 
  Mail, Phone, MapPin, Globe,
  Twitter, Linkedin, Github,
  ArrowUp, Crown, Zap, Brain, Rocket,
  Shield, Users, BookOpen, Briefcase, Atom
} from 'lucide-react',
import Link from 'next/link',
import { AnimatePresence } from 'framer-motion',
interface FooterLink {
  label: string,
  href: string,
  description?: string,
  external?: boolean
}
;
interface FooterSection {;
  title:string,;
  links:FooterLink[];
}
const footerSections: FooterSection[] = [
  {_title: 'Services', _links: [
      { label: 'AI & Machine Learning', _href: '/ai-services', _description: 'Advanced AI solutions'},
      {_label: 'Quantum Computing', _href: '/quantum-computing', _description: 'Next-gen quantum tech'},
      {_label: 'Space Technology', _href: '/space-tech', _description: 'Innovative space solutions'},
      {_label: 'Q4 2025 Innovation', _href: '/innovative-2025-q4-showcase', _description: 'Latest revolutionary services'},
      {_label: 'Pricing Guide', _href: '/comprehensive-pricing-2025-q4', _description: 'Comprehensive pricing'},
      {_label: 'Cybersecurity', _href: '/cybersecurity', _description: 'Enterprise security'},
      {_label: 'Cloud Solutions', _href: '/cloud-platform', _description: 'Scalable cloud infrastructure'},
      {_label: 'View All Services', _href: '/services', _description: 'Complete service portfolio'}
    ]
  },
  {_title: 'Solutions', _links: [
      { label: 'Healthcare & Biotech', _href: '/healthcare-solutions', _description: 'Medical technology'},
      {_label: 'Financial Services', _href: '/solutions?industry=financial', _description: 'Fintech solutions'},
      {_label: 'Manufacturing', _href: '/solutions?industry=manufacturing', _description: 'Industry 4.0'},
      {_label: 'Retail & E-commerce', _href: '/solutions?industry=retail', _description: 'Digital commerce'},
      {_label: 'Government', _href: '/solutions?industry=government', _description: 'Public sector'},
      {_label: 'Education', _href: '/solutions?industry=education', _description: 'EdTech solutions'}
    ]
  },
  {_title: 'Company', _links: [
      { label: 'About Us', _href: '/about', _description: 'Our mission and values'},
      {_label: 'Careers', _href: '/careers', _description: 'Join our team'},
      {_label: 'Contact', _href: '/contact', _description: 'Get in touch'}
    ]
  },
  {_title: 'Resources', _links: [
      { label: 'Blog', _href: '/blog', _description: 'Industry insights'},
      {_label: 'White Papers', _href: '/white-papers', _description: 'In-depth research'},
      {_label: 'Webinars', _href: '/webinars', _description: 'Educational content'},
      {_label: 'Documentation', _href: '/docs', _description: 'Technical guides'},
      {_label: 'Blog', _href: '/blog', _description: 'Industry insights'},
      {_label: 'Case Studies', _href: '/case-studies', _description: 'Success stories'},
      {_label: 'Support', _href: '/support', _description: 'Help & assistance'}
    ]
  },
  {_title: 'Industries', _links: [
      { label: 'Healthcare', _href: '/healthcare-solutions', _description: 'Medical technology'},
      {_label: 'Finance', _href: '/financial-solutions', _description: 'Fintech solutions'},
      {_label: 'Manufacturing', _href: '/manufacturing-ai-solutions', _description: 'Industry 4.0'},
      {_label: 'Government', _href: '/government-technology-solutions', _description: 'Public sector'},
      {_label: 'Education', _href: '/education-technology-solutions', _description: 'EdTech solutions'}
    ]
  }
],

const socialLinks = [
  { icon: <Linkedin className="w-5 h-5" />, href: 'https://linkedin.com/company/ziontechgroup', label: 'LinkedIn', external: true },
  { icon: <Twitter className="w-5 h-5" />, href: 'https://twitter.com/ziontechgroup', label: 'Twitter', external: true },
  { icon: <Github className="w-5 h-5" />, href: 'https://github.com/ziontechgroup', label: 'GitHub', external: true }
],

const quickLinks = [
  { name: 'About Us', href: '/about', icon: <Users className="w-4 h-4" /> },
  { name: 'Contact', href: '/contact', icon: <Phone className="w-4 h-4" /> },
  { name: 'Support', href: '/support', icon: <HelpCircle className="w-4 h-4" /> },
  { name: 'Documentation', href: '/docs', icon: <FileText className="w-4 h-4" /> },
  { name: 'API Reference', href: '/api', icon: <Code className="w-4 h-4" /> },
  { name: 'Status', href: '/status', icon: <TrendingUp className="w-4 h-4" /> }
],
const UltraAdvancedFuturisticFooter2025: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  },
const _socialLinks = [
  {_icon: <Linkedin className="w-5 h-5" />, _href: 'https://linkedin.com/company/ziontechgroup', _label: 'LinkedIn', _external: true},
  {_icon: <Twitter className="w-5 h-5" />, _href: 'https://twitter.com/ziontechgroup', _label: 'Twitter', _external: true},
  {_icon: <Github className="w-5 h-5" />, _href: 'https://github.com/ziontechgroup', _label: 'GitHub', _external: true}
];

const _quickLinks = [
  {_name: 'About Us', _href: '/about', _icon: <Users className="w-4 h-4" />},
  {_name: 'Contact', _href: '/contact', _icon: <Phone className="w-4 h-4" />},
  {_name: 'Support', _href: '/support', _icon: <HelpCircle className="w-4 h-4" />},
  {_name: 'Documentation', _href: '/docs', _icon: <FileText className="w-4 h-4" />},
  {_name: 'API Reference', _href: '/api', _icon: <Code className="w-4 h-4" />},
  {_name: 'Status', _href: '/status', _icon: <TrendingUp className="w-4 h-4" />}
];

const UltraAdvancedFuturisticFooter2025: React.FC = () => {_const _scrollToTop = () => {
    window.scrollTo({ top: 0, _behavior: 'smooth'});
  };

  const _footerSections = [
    {_title: 'Services', _items: [
        { label: 'AI & Machine Learning', _href: '/ai-services'},
        {_label: 'Quantum Computing', _href: '/quantum-computing'},
        {_label: 'Space Technology', _href: '/space-tech'},
        {_label: 'Cybersecurity', _href: '/cybersecurity'},
        {_label: '2040 Services', _href: '/innovative-2040-services-showcase'}
      ]
    },
    {_title: 'Solutions', _items: [
        { label: 'Enterprise Solutions', _href: '/enterprise-solutions'},
        {_label: 'Micro SAAS', _href: '/micro-saas'},
        {_label: 'IT Services', _href: '/it-services'},
        {_label: 'Innovation Lab', _href: '/innovation-lab'},
        {_label: 'Research & Development', _href: '/research-development'}
      ]
    },
    {_title: 'Company', _items: [
        { label: 'About Us', _href: '/about'},
        {_label: 'Our Team', _href: '/team'},
        {_label: 'Careers', _href: '/careers'},
        {_label: 'Investors', _href: '/investors'},
        {_label: 'Press & Media', _href: '/press'}
      ]
    },
    {_title: 'Resources', _items: [
        { label: 'Blog', _href: '/blog'},
        {_label: 'Case Studies', _href: '/case-studies'},
        {_label: 'White Papers', _href: '/white-papers'},
        {_label: 'Documentation', _href: '/docs'},
        {_label: 'Support', _href: '/support'}
      ]
    }
  ],

  const socialLinks = [
    { icon: Twitter, href: 'https://twitter.com/ziontechgroup', label: 'Twitter' },
    { icon: Linkedin, href: 'https://linkedin.com/company/ziontechgroup', label: 'LinkedIn' },
    { icon: Github, href: 'https://github.com/Zion-Holdings', label: 'GitHub' },
    { icon: Globe, href: 'https://ziontechgroup.com', label: 'Website' }
  ],
  const _containerVariants = {_hidden: { opacity: 0},
    visible: {_opacity: 1, _transition: {
        staggerChildren: 0.1}
    }
  },

  const _itemVariants = {_hidden: { y: 20, _opacity: 0},
    visible: {_y: 0, _opacity: 1, _transition: {
        duration: 0.5}
    }
  },

  return (
    <footer className=&quot;relative bg-gradient-to-br from-gray-900 via-purple-900 to-gray-900 text-white overflow-hidden&quot;>
      {/* Animated Background Elements */}
      <div className=&quot;absolute inset-0 -z-10&quot;>
        {/* Quantum Particle Field */}
        {[...Array(30)].map((_, i) => (;
          <motion.div;
            key={i}
            className=&quot;absolute w-1 h-1 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full&quot;
            animate={{
              x: [0, Math.random() * 1000, 0],
              y: [0, Math.random() * 1000, 0],
              opacity: [0, 0.6, 0],
              scale: [0, 1, 0]}}
            transition={{
              duration: 15 + Math.random() * 10,
              repeat: -1,
              delay: Math.random() * 8,
              ease: &quot;easeInOut&quot;
            }}
            style={{              left: `${Math.random() * 100}%`,
              top: `${_Math.random() * 100}%`
            }}
          />;
        ))}
        ;
        {/* Gradient Overlays */}
        <div className=&quot;absolute inset-0 bg-gradient-to-t from-gray-900 via-purple-900/20 to-transparent&quot;></div>
        <div className=&quot;absolute inset-0 bg-gradient-to-b from-transparent via-gray-900/20 to-gray-900&quot;></div>
      </div>

      <div className=&quot;relative z-10&quot;>
        {/* Main Footer Content */}
        <div className=&quot;max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20&quot;>
          <motion.div
            variants={containerVariants}
            initial=&quot;hidden&quot;
            whileInView=&quot;visible&quot;
            viewport={{ once: true }}
            className=&quot;grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-12&quot;
          >
            {/* Company Info */}
            <motion.div variants={itemVariants} className=&quot;lg:col-span-2&quot;>
              <div className=&quot;flex items-center space-x-3 mb-6&quot;>
                <div className=&quot;relative&quot;>
                  <div className=&quot;w-12 h-12 bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 rounded-xl flex items-center justify-center&quot;>
                    <Crown className=&quot;w-7 h-7 text-white&quot; />                  </div>
                  <div className=&quot;absolute inset-0 bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 rounded-xl blur-lg opacity-50&quot;></div>
                </div>
                <div>
                  <h3 className=&quot;text-2xl font-bold bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent&quot;>
                    Zion Tech Group
                  </h3>
                  <p className=&quot;text-sm text-gray-400&quot;>Future Technology Solutions</p>
                </div>
              </div>
              
              <p className=&quot;text-gray-300 mb-6 leading-relaxed&quot;>
                Pioneering the future with revolutionary AI consciousness, quantum computing, 
                and autonomous systems. Transforming businesses through next-generation technology.
              </p>
              
              <p className=&quot;text-gray-300 leading-relaxed mb-6 max-w-md&quot;>
                Leading provider of innovative technology solutions, specializing in AI, automation, and future-ready services. 
                We help businesses transform and thrive in the digital age.
              </p>

              {/* Contact Info */}
              <div className=&quot;space-y-3&quot;>
                <div className=&quot;flex items-center space-x-3 text-gray-300&quot;>
                  <Phone className=&quot;w-4 h-4 text-cyan-400&quot; />                  <span>+1 302 464 0950</span>
                </div>
                <div className=&quot;flex items-center space-x-3 text-gray-300&quot;>
                  <Mail className=&quot;w-4 h-4 text-purple-400&quot; />
                  <span>kleber@ziontechgroup.com</span>
                </div>
                <div className=&quot;flex items-center space-x-3 text-gray-300&quot;>
                  <MapPin className=&quot;w-4 h-4 text-pink-400&quot; />
                  <span>364 E Main St STE 1008, Middletown DE 19709</span>
                </div>
                <div className=&quot;flex items-center space-x-3 text-gray-300&quot;>
                  <Globe className=&quot;w-4 h-4 text-blue-400&quot; />
                  <a href=&quot;https://ziontechgroup.com&quot; className=&quot;hover:text-white transition-colors duration-200&quot;>
                    ziontechgroup.com
                  </a>
                </div>
              </div>
            </motion.div>

            {/* Footer Sections */}
            {footerSections.map((section, index) => (
              <motion.div key={section.title} variants={itemVariants}>
                <h4 className=&quot;text-lg font-semibold text-white mb-6 flex items-center space-x-2&quot;>
                  {section.title === 'Services' && <Briefcase className=&quot;w-5 h-5 text-cyan-400&quot; />}
                  {section.title === 'Solutions' && <Zap className=&quot;w-5 h-5 text-purple-400&quot; />}
                  {section.title === 'Company' && <Users className=&quot;w-5 h-5 text-pink-400&quot; />}
                  {section.title === 'Resources' && <BookOpen className=&quot;w-5 h-5 text-blue-400&quot; />}
                  <span>{section.title}</span>
                </h4>
                <ul className=&quot;space-y-3&quot;>
                  {section.items.map((item) => (
                    <li key={item.label}>
                      <Link
                        href={item.href}
                        className=&quot;text-gray-300 hover:text-white transition-colors duration-200 hover:translate-x-1 inline-block&quot;
                      >
                        {item.label}
                      </a>                    </li>
                  ))}
                </ul>;
              </motion.div>;
            ))}
          </motion.div>

          {_/* Social Links & Newsletter */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className=&quot;mt-16 pt-12 border-t border-gray-800/50&quot;
          >
            <div className=&quot;flex flex-col lg:flex-row items-center justify-between gap-8&quot;>
              {/* Social Links */}
              <div className=&quot;flex items-center space-x-6&quot;>
                <span className=&quot;text-gray-400 font-medium&quot;>Follow Us:</span>
                {socialLinks.map((social) => (
                  <motion.a
                    key={social.label}
                    href={social.href}
                    target=&quot;_blank&quot;
                    rel=&quot;noopener noreferrer&quot;
                    className=&quot;w-10 h-10 bg-gray-800/50 hover:bg-gradient-to-r hover:from-cyan-500 hover:to-purple-500 rounded-xl flex items-center justify-center text-gray-300 hover:text-white transition-all duration-200 hover:scale-110&quot;
                    whileHover={{ y: -2 }}
                    whileTap={{ scale: 0.95 }}                  >
                    <social.icon className=&quot;w-5 h-5&quot; />
                  </motion.a>
                ))}
              </div>;
;
              {/* Newsletter Signup */}
              <div className=&quot;flex-1 max-w-md&quot;>
                <h5 className=&quot;text-lg font-semibold text-white mb-3&quot;>Stay Updated</h5>
                <p className=&quot;text-gray-400 text-sm mb-4&quot;>                  Get the latest insights on AI consciousness, quantum computing, and future technology.
                </p>
                <div className=&quot;flex space-x-2&quot;>
                  <input
                    type=&quot;email&quot;
                    placeholder=&quot;Enter your email&quot;
                    className=&quot;flex-1 px-4 py-3 bg-gray-800/50 border border-gray-700/50 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent&quot;
                  />
                  <motion.button
                    className=&quot;px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-xl font-semibold hover:from-purple-600 hover:to-pink-600 transition-all duration-200&quot;
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}                  >
                    Subscribe
                  </motion.button>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {_/* Bottom Bar */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className=&quot;border-t border-gray-800/50 bg-gray-900/50 backdrop-blur-xl&quot;        >
          <div className=&quot;max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6&quot;>
            <div className=&quot;flex flex-col md:flex-row items-center justify-between gap-4&quot;>
              <div className=&quot;text-gray-400 text-sm&quot;>
                © 2024 Zion Tech Group. All rights reserved. | 
                <Link href=&quot;/privacy&quot; className=&quot;hover:text-white transition-colors duration-200 ml-2&quot;>
                  Privacy Policy
                </a> | 
                <Link href=&quot;/terms&quot; className=&quot;hover:text-white transition-colors duration-200 ml-2&quot;>
                  Terms of Service
                </a>
              </div>
              
              <div className=&quot;flex items-center space-x-4 text-gray-400 text-sm&quot;>
                <span>Powered by</span>
                <div className=&quot;flex items-center space-x-2&quot;>
                  <Brain className=&quot;w-4 h-4 text-cyan-400&quot; />
                  <span>AI Consciousness</span>
                </div>
                <span>•</span>
                <div className=&quot;flex items-center space-x-2&quot;>
                  <Atom className=&quot;w-4 h-4 text-purple-400&quot; />
                  <span>Quantum Computing</span>
                </div>
                <span>•</span>
                <div className=&quot;flex items-center space-x-2&quot;>
                  <Rocket className=&quot;w-4 h-4 text-pink-400&quot; />
                  <span>Space Technology</span>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      {_/* Scroll to Top Button */}
      <motion.button
        onClick={scrollToTop}
        className=&quot;fixed bottom-8 right-8 w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-full shadow-2xl hover:shadow-purple-500/25 transition-all duration-200 z-50&quot;
        whileHover={{ scale: 1.1, y: -2 }}
        whileTap={{ scale: 0.9 }}
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.3, delay: 1 }}      >
        <ArrowUp className=&quot;w-6 h-6 mx-auto&quot; />
      </motion.button>
    </footer>
  )
},

export default UltraAdvancedFuturisticFooter2025,