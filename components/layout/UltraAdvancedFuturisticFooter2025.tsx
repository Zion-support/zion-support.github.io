import React from 'react',;
import { motion } from 'framer-motion',;
import {;
  Mail, Phone, MapPin, Globe,;
  Twitter, Linkedin, Github,;
  ArrowUp, Crown, Zap, Brain, Rocket,;
  Shield, Users, BookOpen, Briefcase, Atom;
} from 'lucide-react',;
import Link from 'next/link',;
import { AnimatePresence } from 'framer-motion',;
interface FooterLink {;
  label: string,;
  href: string,;
  description?: string,;
  external?: boolean;
}
;
interface FooterSection {;
  title: string,;
  links: FooterLink[];
}
;
const footerSections: FooterSection[] = [;
  {;
    title: 'Services',;
    links: [;
      { label: 'AI & Machine Learning', href: '/ai-services', description: 'Advanced AI solutions' },;
      { label: 'Quantum Computing', href: '/quantum-computing', description: 'Next-gen quantum tech' },;
      { label: 'Space Technology', href: '/space-tech', description: 'Innovative space solutions' },;
      { label: 'Q4 2025 Innovation', href: '/innovative-2025-q4-showcase', description: 'Latest revolutionary services' },;
      { label: 'Pricing Guide', href: '/comprehensive-pricing-2025-q4', description: 'Comprehensive pricing' },;
      { label: 'Cybersecurity', href: '/cybersecurity', description: 'Enterprise security' },;
      { label: 'Cloud Solutions', href: '/cloud-platform', description: 'Scalable cloud infrastructure' },;
      { label: 'View All Services', href: '/services', description: 'Complete service portfolio' }
    ];
  },;
  {;
    title: 'Solutions',;
    links: [;
      { label: 'Healthcare & Biotech', href: '/healthcare-solutions', description: 'Medical technology' },;
      { label: 'Financial Services', href: '/solutions?industry=financial', description: 'Fintech solutions' },;
      { label: 'Manufacturing', href: '/solutions?industry=manufacturing', description: 'Industry 4.0' },;
      { label: 'Retail & E-commerce', href: '/solutions?industry=retail', description: 'Digital commerce' },;
      { label: 'Government', href: '/solutions?industry=government', description: 'Public sector' },;
      { label: 'Education', href: '/solutions?industry=education', description: 'EdTech solutions' }
    ];
  },;
  {;
    title: 'Company',;
    links: [;
      { label: 'About Us', href: '/about', description: 'Our mission and values' },;
      { label: 'Careers', href: '/careers', description: 'Join our team' },;
      { label: 'Contact', href: '/contact', description: 'Get in touch' }
    ];
  },;
  {;
    title: 'Resources',;
    links: [;
      { label: 'Blog', href: '/blog', description: 'Industry insights' },;
      { label: 'White Papers', href: '/white-papers', description: 'In-depth research' },;
      { label: 'Webinars', href: '/webinars', description: 'Educational content' },;
      { label: 'Documentation', href: '/docs', description: 'Technical guides' },;
      { label: 'Blog', href: '/blog', description: 'Industry insights' },;
      { label: 'Case Studies', href: '/case-studies', description: 'Success stories' },;
      { label: 'Support', href: '/support', description: 'Help & assistance' }
    ];
  },;
  {;
    title: 'Industries',;
    links: [;
      { label: 'Healthcare', href: '/healthcare-solutions', description: 'Medical technology' },;
      { label: 'Finance', href: '/financial-solutions', description: 'Fintech solutions' },;
      { label: 'Manufacturing', href: '/manufacturing-ai-solutions', description: 'Industry 4.0' },;
      { label: 'Government', href: '/government-technology-solutions', description: 'Public sector' },;
      { label: 'Education', href: '/education-technology-solutions', description: 'EdTech solutions' }
    ];
  }
<<<<<<< HEAD
],

const socialLinks = [
<<<<<<< HEAD
  { icon: <Linkedin className="w-5 h-5" />, href: 'https://linkedin.com/company/ziontechgroup', label: 'LinkedIn', external: true },
  { icon: <Twitter className="w-5 h-5" />, href: 'https://twitter.com/ziontechgroup', label: 'Twitter', external: true },
=======
],;
const socialLinks = [;
  { icon: <Linkedin className="w-5 h-5" />, href: 'https://linkedin.com/company/ziontechgroup', label: 'LinkedIn', external: true },;
  { icon: <Twitter className="w-5 h-5" />, href: 'https://twitter.com/ziontechgroup', label: 'Twitter', external: true },;
>>>>>>> cursor/automate-test-improve-and-merge-code-4094
  { icon: <Github className="w-5 h-5" />, href: 'https://github.com/ziontechgroup', label: 'GitHub', external: true }
],;
const quickLinks = [;
  { name: 'About Us', href: '/about', icon: <Users className="w-4 h-4" /> },;
  { name: 'Contact', href: '/contact', icon: <Phone className="w-4 h-4" /> },;
  { name: 'Support', href: '/support', icon: <HelpCircle className="w-4 h-4" /> },;
  { name: 'Documentation', href: '/docs', icon: <FileText className="w-4 h-4" /> },;
  { name: 'API Reference', href: '/api', icon: <Code className="w-4 h-4" /> },;
  { name: 'Status', href: '/status', icon: <TrendingUp className="w-4 h-4" /> }
<<<<<<< HEAD
],
=======
  { icon: <Linkedin className=&quot;w-5 h-5&quot; />, href: 'https://linkedin.com/company/ziontechgroup', label: 'LinkedIn', external: true },
  { icon: <Twitter className=&quot;w-5 h-5&quot; />, href: 'https://twitter.com/ziontechgroup', label: 'Twitter', external: true },
  { icon: <Github className=&quot;w-5 h-5&quot; />, href: 'https://github.com/ziontechgroup', label: 'GitHub', external: true }
];

const quickLinks = [
  { name: 'About Us', href: '/about', icon: <Users className=&quot;w-4 h-4&quot; /> },
  { name: 'Contact', href: '/contact', icon: <Phone className=&quot;w-4 h-4&quot; /> },
  { name: 'Support', href: '/support', icon: <HelpCircle className=&quot;w-4 h-4&quot; /> },
  { name: 'Documentation', href: '/docs', icon: <FileText className=&quot;w-4 h-4&quot; /> },
  { name: 'API Reference', href: '/api', icon: <Code className=&quot;w-4 h-4&quot; /> },
  { name: 'Status', href: '/status', icon: <TrendingUp className=&quot;w-4 h-4&quot; /> }
];
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7

const UltraAdvancedFuturisticFooter2025: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  },

  const footerSections = [
    {
      title: 'Services',
      items: [
        { label: 'AI & Machine Learning', href: '/ai-services' },
        { label: 'Quantum Computing', href: '/quantum-computing' },
        { label: 'Space Technology', href: '/space-tech' },
        { label: 'Cybersecurity', href: '/cybersecurity' },
=======
],;
const UltraAdvancedFuturisticFooter2025: React.FC = () => {;
  const scrollToTop = () => {;
    window.scrollTo({ top: 0, behavior: 'smooth' });
  },;
  const footerSections = [;
    {;
      title: 'Services',;
      items: [;
        { label: 'AI & Machine Learning', href: '/ai-services' },;
        { label: 'Quantum Computing', href: '/quantum-computing' },;
        { label: 'Space Technology', href: '/space-tech' },;
        { label: 'Cybersecurity', href: '/cybersecurity' },;
>>>>>>> cursor/automate-test-improve-and-merge-code-4094
        { label: '2040 Services', href: '/innovative-2040-services-showcase' }
      ];
    },;
    {;
      title: 'Solutions',;
      items: [;
        { label: 'Enterprise Solutions', href: '/enterprise-solutions' },;
        { label: 'Micro SAAS', href: '/micro-saas' },;
        { label: 'IT Services', href: '/it-services' },;
        { label: 'Innovation Lab', href: '/innovation-lab' },;
        { label: 'Research & Development', href: '/research-development' }
      ];
    },;
    {;
      title: 'Company',;
      items: [;
        { label: 'About Us', href: '/about' },;
        { label: 'Our Team', href: '/team' },;
        { label: 'Careers', href: '/careers' },;
        { label: 'Investors', href: '/investors' },;
        { label: 'Press & Media', href: '/press' }
      ];
    },;
    {;
      title: 'Resources',;
      items: [;
        { label: 'Blog', href: '/blog' },;
        { label: 'Case Studies', href: '/case-studies' },;
        { label: 'White Papers', href: '/white-papers' },;
        { label: 'Documentation', href: '/docs' },;
        { label: 'Support', href: '/support' }
      ];
    }
  ],;
  const socialLinks = [;
    { icon: Twitter, href: 'https://twitter.com/ziontechgroup', label: 'Twitter' },;
    { icon: Linkedin, href: 'https://linkedin.com/company/ziontechgroup', label: 'LinkedIn' },;
    { icon: Github, href: 'https://github.com/Zion-Holdings', label: 'GitHub' },;
    { icon: Globe, href: 'https://ziontechgroup.com', label: 'Website' }
  ],;
  const containerVariants = {;
    hidden: { opacity: 0 },;
    visible: {;
      opacity: 1,;
      transition: {;
        staggerChildren: 0.1;
      }
    }
  },;
  const itemVariants = {;
    hidden: { y: 20, opacity: 0 },;
    visible: {;
      y: 0,;
      opacity: 1,;
      transition: {;
        duration: 0.5;
      }
    }
<<<<<<< HEAD
  },

  return (
    <footer className=&quot;relative bg-gradient-to-br from-gray-900 via-purple-900 to-gray-900 text-white overflow-hidden&quot;>
      {/* Animated Background Elements */}
      <div className=&quot;absolute inset-0 -z-10&quot;>
=======
  },;
  return (;
    <footer className="relative bg-gradient-to-br from-gray-900 via-purple-900 to-gray-900 text-white overflow-hidden">;
      {/* Animated Background Elements */}
      <div className="absolute inset-0 -z-10">;
>>>>>>> cursor/automate-test-improve-and-merge-code-4094
        {/* Quantum Particle Field */}
        {[...Array(30)].map((_, i) => (;
          <motion.div;
            key={i}
<<<<<<< HEAD
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
=======
            className="absolute w-1 h-1 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full";
            animate={{;
              x: [0, Math.random() * 1000, 0],;
              y: [0, Math.random() * 1000, 0],;
              opacity: [0, 0.6, 0],;
              scale: [0, 1, 0]}}
            transition={{;
              duration: 15 + Math.random() * 10,;
              repeat: -1,;
              delay: Math.random() * 8,;
              ease: "easeInOut";
>>>>>>> cursor/automate-test-improve-and-merge-code-4094
            }}
            style={{;
              left: `${Math.random() * 100}%`,;
              top: `${Math.random() * 100}%`;
            }}
          />;
        ))}
;
        {/* Gradient Overlays */}
<<<<<<< HEAD
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
                    <Crown className=&quot;w-7 h-7 text-white&quot; />
                  </div>
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
                  <Phone className=&quot;w-4 h-4 text-cyan-400&quot; />
                  <span>+1 302 464 0950</span>
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
                      </a>
                    </li>
=======
        <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-purple-900/20 to-transparent"></div>;
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-gray-900/20 to-gray-900"></div>;
      </div>;
      <div className="relative z-10">;
        {/* Main Footer Content */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">;
          <motion.div;
            variants={containerVariants}
            initial="hidden";
            whileInView="visible";
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-12";
          >;
            {/* Company Info */}
            <motion.div variants={itemVariants} className="lg:col-span-2">;
              <div className="flex items-center space-x-3 mb-6">;
                <div className="relative">;
                  <div className="w-12 h-12 bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 rounded-xl flex items-center justify-center">;
                    <Crown className="w-7 h-7 text-white" />;
                  </div>;
                  <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 rounded-xl blur-lg opacity-50"></div>;
                </div>;
                <div>;
                  <h3 className="text-2xl font-bold bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">;
                    Zion Tech Group;
                  </h3>;
                  <p className="text-sm text-gray-400">Future Technology Solutions</p>;
                </div>;
              </div>;
              <p className="text-gray-300 mb-6 leading-relaxed">;
                Pioneering the future with revolutionary AI consciousness, quantum computing,;
                and autonomous systems. Transforming businesses through next-generation technology.;
              </p>;
              <p className="text-gray-300 leading-relaxed mb-6 max-w-md">;
                Leading provider of innovative technology solutions, specializing in AI, automation, and future-ready services.;
                We help businesses transform and thrive in the digital age.;
              </p>;
              {/* Contact Info */}
              <div className="space-y-3">;
                <div className="flex items-center space-x-3 text-gray-300">;
                  <Phone className="w-4 h-4 text-cyan-400" />;
                  <span>+1 302 464 0950</span>;
                </div>;
                <div className="flex items-center space-x-3 text-gray-300">;
                  <Mail className="w-4 h-4 text-purple-400" />;
                  <span>kleber@ziontechgroup.com</span>;
                </div>;
                <div className="flex items-center space-x-3 text-gray-300">;
                  <MapPin className="w-4 h-4 text-pink-400" />;
                  <span>364 E Main St STE 1008, Middletown DE 19709</span>;
                </div>;
                <div className="flex items-center space-x-3 text-gray-300">;
                  <Globe className="w-4 h-4 text-blue-400" />;
                  <a href="https://ziontechgroup.com" className="hover:text-white transition-colors duration-200">;
                    ziontechgroup.com;
                  </a>;
                </div>;
              </div>;
            </motion.div>;
            {/* Footer Sections */}
            {footerSections.map((section, index) => (;
              <motion.div key={section.title} variants={itemVariants}>;
                <h4 className="text-lg font-semibold text-white mb-6 flex items-center space-x-2">;
                  {section.title === 'Services' && <Briefcase className="w-5 h-5 text-cyan-400" />}
                  {section.title === 'Solutions' && <Zap className="w-5 h-5 text-purple-400" />}
                  {section.title === 'Company' && <Users className="w-5 h-5 text-pink-400" />}
                  {section.title === 'Resources' && <BookOpen className="w-5 h-5 text-blue-400" />}
                  <span>{section.title}</span>;
                </h4>;
                <ul className="space-y-3">;
                  {section.items.map((item) => (;
                    <li key={item.label}>;
                      <Link;
                        href={item.href}
                        className="text-gray-300 hover:text-white transition-colors duration-200 hover:translate-x-1 inline-block";
                      >;
                        {item.label}
                      </Link>;
                    </li>;
>>>>>>> cursor/automate-test-improve-and-merge-code-4094
                  ))}
                </ul>;
              </motion.div>;
            ))}
          </motion.div>;
          {/* Social Links & Newsletter */}
          <motion.div;
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
<<<<<<< HEAD
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
                    whileTap={{ scale: 0.95 }}
                  >
                    <social.icon className=&quot;w-5 h-5&quot; />
                  </motion.a>
=======
            className="mt-16 pt-12 border-t border-gray-800/50";
          >;
            <div className="flex flex-col lg:flex-row items-center justify-between gap-8">;
              {/* Social Links */}
              <div className="flex items-center space-x-6">;
                <span className="text-gray-400 font-medium">Follow Us:</span>;
                {socialLinks.map((social) => (;
                  <motion.a;
                    key={social.label}
                    href={social.href}
                    target="_blank";
                    rel="noopener noreferrer";
                    className="w-10 h-10 bg-gray-800/50 hover:bg-gradient-to-r hover:from-cyan-500 hover:to-purple-500 rounded-xl flex items-center justify-center text-gray-300 hover:text-white transition-all duration-200 hover:scale-110";
                    whileHover={{ y: -2 }}
                    whileTap={{ scale: 0.95 }}
                  >;
                    <social.icon className="w-5 h-5" />;
                  </motion.a>;
>>>>>>> cursor/automate-test-improve-and-merge-code-4094
                ))}
              </div>;
              {/* Newsletter Signup */}
<<<<<<< HEAD
              <div className=&quot;flex-1 max-w-md&quot;>
                <h5 className=&quot;text-lg font-semibold text-white mb-3&quot;>Stay Updated</h5>
                <p className=&quot;text-gray-400 text-sm mb-4&quot;>
                  Get the latest insights on AI consciousness, quantum computing, and future technology.
                </p>
                <div className=&quot;flex space-x-2&quot;>
                  <input
                    type=&quot;email&quot;
                    placeholder=&quot;Enter your email&quot;
                    className=&quot;flex-1 px-4 py-3 bg-gray-800/50 border border-gray-700/50 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent&quot;
                  />
                  <motion.button
                    className=&quot;px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-xl font-semibold hover:from-purple-600 hover:to-pink-600 transition-all duration-200&quot;
=======
              <div className="flex-1 max-w-md">;
                <h5 className="text-lg font-semibold text-white mb-3">Stay Updated</h5>;
                <p className="text-gray-400 text-sm mb-4">;
                  Get the latest insights on AI consciousness, quantum computing, and future technology.;
                </p>;
                <div className="flex space-x-2">;
                  <input;
                    type="email";
                    placeholder="Enter your email";
                    className="flex-1 px-4 py-3 bg-gray-800/50 border border-gray-700/50 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent";
                  />;
                  <motion.button;
                    className="px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-xl font-semibold hover:from-purple-600 hover:to-pink-600 transition-all duration-200";
>>>>>>> cursor/automate-test-improve-and-merge-code-4094
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >;
                    Subscribe;
                  </motion.button>;
                </div>;
              </div>;
            </div>;
          </motion.div>;
        </div>;
        {/* Bottom Bar */}
        <motion.div;
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
<<<<<<< HEAD
          className=&quot;border-t border-gray-800/50 bg-gray-900/50 backdrop-blur-xl&quot;
        >
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

=======
          className="border-t border-gray-800/50 bg-gray-900/50 backdrop-blur-xl";
        >;
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">;
            <div className="flex flex-col md:flex-row items-center justify-between gap-4">;
              <div className="text-gray-400 text-sm">;
                © 2024 Zion Tech Group. All rights reserved. |;
                <Link href="/privacy" className="hover:text-white transition-colors duration-200 ml-2">;
                  Privacy Policy;
                </Link> |;
                <Link href="/terms" className="hover:text-white transition-colors duration-200 ml-2">;
                  Terms of Service;
                </Link>;
              </div>;
              <div className="flex items-center space-x-4 text-gray-400 text-sm">;
                <span>Powered by</span>;
                <div className="flex items-center space-x-2">;
                  <Brain className="w-4 h-4 text-cyan-400" />;
                  <span>AI Consciousness</span>;
                </div>;
                <span>•</span>;
                <div className="flex items-center space-x-2">;
                  <Atom className="w-4 h-4 text-purple-400" />;
                  <span>Quantum Computing</span>;
                </div>;
                <span>•</span>;
                <div className="flex items-center space-x-2">;
                  <Rocket className="w-4 h-4 text-pink-400" />;
                  <span>Space Technology</span>;
                </div>;
              </div>;
            </div>;
          </div>;
        </motion.div>;
      </div>;
>>>>>>> cursor/automate-test-improve-and-merge-code-4094
      {/* Scroll to Top Button */}
      <motion.button;
        onClick={scrollToTop}
<<<<<<< HEAD
        className=&quot;fixed bottom-8 right-8 w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-full shadow-2xl hover:shadow-purple-500/25 transition-all duration-200 z-50&quot;
=======
        className="fixed bottom-8 right-8 w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-full shadow-2xl hover:shadow-purple-500/25 transition-all duration-200 z-50";
>>>>>>> cursor/automate-test-improve-and-merge-code-4094
        whileHover={{ scale: 1.1, y: -2 }}
        whileTap={{ scale: 0.9 }}
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.3, delay: 1 }}
<<<<<<< HEAD
      >
        <ArrowUp className=&quot;w-6 h-6 mx-auto&quot; />
      </motion.button>
    </footer>
  )
},

export default UltraAdvancedFuturisticFooter2025,
=======
      >;
        <ArrowUp className="w-6 h-6 mx-auto" />;
      </motion.button>;
    </footer>;
  );
},;
export default UltraAdvancedFuturisticFooter2025;
>>>>>>> cursor/automate-test-improve-and-merge-code-4094
