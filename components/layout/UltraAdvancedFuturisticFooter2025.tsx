import React from 'react';
import {_Mail, _Phone, _MapPin, _Globe, _Twitter, _Linkedin, _Github, _ArrowUp, _Crown, _Zap, _Brain, _Rocket, _Shield, _Users, _BookOpen, _Briefcase, _Atom} from 'lucide-react';
import Link from 'next/link';

interface FooterLink {_label: string;
  href: string;
  description?: string;
  external?: boolean;}

interface FooterSection {_title: string;
  links: FooterLink[];}

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
];

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
  ];

  const _socialLinks = [
    {_icon: Twitter, _href: 'https://twitter.com/ziontechgroup', _label: 'Twitter'},
    {_icon: Linkedin, _href: 'https://linkedin.com/company/ziontechgroup', _label: 'LinkedIn'},
    {_icon: Github, _href: 'https://github.com/Zion-Holdings', _label: 'GitHub'},
    {_icon: Globe, _href: 'https://ziontechgroup.com', _label: 'Website'}
  ];

  const _containerVariants = {_hidden: { opacity: 0},
    visible: {_opacity: 1, _transition: {
        staggerChildren: 0.1}
    }
  };

  const _itemVariants = {_hidden: { y: 20, _opacity: 0},
    visible: {_y: 0, _opacity: 1, _transition: {
        duration: 0.5}
    }
  };

  return (
    <footer className="relative bg-gradient-to-br from-gray-900 via-purple-900 to-gray-900 text-white overflow-hidden">
      {_/* Animated Background Elements */}
      <div className="absolute inset-0 -z-10">
        {_/* Quantum Particle Field */}
        {_[...Array(30)].map(_(_, _i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full"
            animate={_{
              x: [0, _Math.random() * 1000, _0], _y: [0, _Math.random() * 1000, _0], _opacity: [0, _0.6, _0], _scale: [0, _1, _0]}}
            transition={_{
              duration: 15 + Math.random() * 10, _repeat: -1, _delay: Math.random() * 8, _ease: "easeInOut"}}
            style={_{
              left: `${Math.random() * 100}%`,
              top: `${_Math.random() * 100}%`
            }}
          />
        ))}
        
        {_/* Gradient Overlays */}
        <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-purple-900/20 to-transparent"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-gray-900/20 to-gray-900"></div>
      </div>

      <div className="relative z-10">
        {_/* Main Footer Content */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <motion.div
            variants={_containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={_{ once: true}}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-12"
          >
            {_/* Company Info */}
            <motion.div variants={_itemVariants} className="lg:col-span-2">
              <div className="flex items-center space-x-3 mb-6">
                <div className="relative">
                  <div className="w-12 h-12 bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 rounded-xl flex items-center justify-center">
                    <Crown className="w-7 h-7 text-white" />
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 rounded-xl blur-lg opacity-50"></div>
                </div>
                <div>
                  <h3 className="text-2xl font-bold bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                    Zion Tech Group
                  </h3>
                  <p className="text-sm text-gray-400">Future Technology Solutions</p>
                </div>
              </div>
              
              <p className="text-gray-300 mb-6 leading-relaxed">
                Pioneering the future with revolutionary AI consciousness, quantum computing, 
                and autonomous systems. Transforming businesses through next-generation technology.
              </p>
              
              <p className="text-gray-300 leading-relaxed mb-6 max-w-md">
                Leading provider of innovative technology solutions, specializing in AI, automation, and future-ready services. 
                We help businesses transform and thrive in the digital age.
              </p>

              {_/* Contact Info */}
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
                  <MapPin className="w-4 h-4 text-pink-400" />
                  <span>364 E Main St STE 1008, Middletown DE 19709</span>
                </div>
                <div className="flex items-center space-x-3 text-gray-300">
                  <Globe className="w-4 h-4 text-blue-400" />
                  <a href="https://ziontechgroup.com" className="hover:text-white transition-colors duration-200">
                    ziontechgroup.com
                  </a>
                </div>
              </div>
            </motion.div>

            {_/* Footer Sections */}
            {_footerSections.map(_(section, _index) => (_<motion.div key={section.title} variants={_itemVariants}>
                <h4 className="text-lg font-semibold text-white mb-6 flex items-center space-x-2">
                  {_section.title === 'Services' && <Briefcase className="w-5 h-5 text-cyan-400" />}
                  {_section.title === 'Solutions' && <Zap className="w-5 h-5 text-purple-400" />}
                  {_section.title === 'Company' && <Users className="w-5 h-5 text-pink-400" />}
                  {_section.title === 'Resources' && <BookOpen className="w-5 h-5 text-blue-400" />}
                  <span>{_section.title}</span>
                </h4>
                <ul className="space-y-3">
                  {_section.items.map((item) => (
                    <li key={item.label}>
                      <Link
                        href={_item.href}
                        className="text-gray-300 hover:text-white transition-colors duration-200 hover:translate-x-1 inline-block"
                      >
                        {_item.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </motion.div>

          {_/* Social Links & Newsletter */}
          <motion.div
            initial={_{ opacity: 0, _y: 20}}
            whileInView={_{ opacity: 1, _y: 0}}
            transition={_{ duration: 0.6}}
            viewport={_{ once: true}}
            className="mt-16 pt-12 border-t border-gray-800/50"
          >
            <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
              {_/* Social Links */}
              <div className="flex items-center space-x-6">
                <span className="text-gray-400 font-medium">Follow Us:</span>
                {_socialLinks.map(_(social) => (
                  <motion.a
                    key={social.label}
                    href={_social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 bg-gray-800/50 hover:bg-gradient-to-r hover:from-cyan-500 hover:to-purple-500 rounded-xl flex items-center justify-center text-gray-300 hover:text-white transition-all duration-200 hover:scale-110"
                    whileHover={_{ y: -2}}
                    whileTap={_{ scale: 0.95}}
                  >
                    <social.icon className="w-5 h-5" />
                  </motion.a>
                ))}
              </div>

              {_/* Newsletter Signup */}
              <div className="flex-1 max-w-md">
                <h5 className="text-lg font-semibold text-white mb-3">Stay Updated</h5>
                <p className="text-gray-400 text-sm mb-4">
                  Get the latest insights on AI consciousness, quantum computing, and future technology.
                </p>
                <div className="flex space-x-2">
                  <input
                    type="email"
                    placeholder="Enter your email"
                    className="flex-1 px-4 py-3 bg-gray-800/50 border border-gray-700/50 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                  />
                  <motion.button
                    className="px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-xl font-semibold hover:from-purple-600 hover:to-pink-600 transition-all duration-200"
                    whileHover={_{ scale: 1.05}}
                    whileTap={_{ scale: 0.95}}
                  >
                    Subscribe
                  </motion.button>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {_/* Bottom Bar */}
        <motion.div
          initial={_{ opacity: 0}}
          whileInView={_{ opacity: 1}}
          transition={_{ duration: 0.6}}
          viewport={_{ once: true}}
          className="border-t border-gray-800/50 bg-gray-900/50 backdrop-blur-xl"
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
            <div className="flex flex-col md:flex-row items-center justify-between gap-4">
              <div className="text-gray-400 text-sm">
                © 2024 Zion Tech Group. All rights reserved. | 
                <Link href="/privacy" className="hover:text-white transition-colors duration-200 ml-2">
                  Privacy Policy
                </Link> | 
                <Link href="/terms" className="hover:text-white transition-colors duration-200 ml-2">
                  Terms of Service
                </Link>
              </div>
              
              <div className="flex items-center space-x-4 text-gray-400 text-sm">
                <span>Powered by</span>
                <div className="flex items-center space-x-2">
                  <Brain className="w-4 h-4 text-cyan-400" />
                  <span>AI Consciousness</span>
                </div>
                <span>•</span>
                <div className="flex items-center space-x-2">
                  <Atom className="w-4 h-4 text-purple-400" />
                  <span>Quantum Computing</span>
                </div>
                <span>•</span>
                <div className="flex items-center space-x-2">
                  <Rocket className="w-4 h-4 text-pink-400" />
                  <span>Space Technology</span>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      {_/* Scroll to Top Button */}
      <motion.button
        onClick={_scrollToTop}
        className="fixed bottom-8 right-8 w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-full shadow-2xl hover:shadow-purple-500/25 transition-all duration-200 z-50"
        whileHover={_{ scale: 1.1, _y: -2}}
        whileTap={_{ scale: 0.9}}
        initial={_{ opacity: 0, _scale: 0}}
        animate={_{ opacity: 1, _scale: 1}}
        transition={_{ duration: 0.3, _delay: 1}}
      >
        <ArrowUp className="w-6 h-6 mx-auto" />
      </motion.button>
    </footer>
  );
};

export default UltraAdvancedFuturisticFooter2025;