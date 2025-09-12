import React from 'react';
import { motion } from 'framer-motion';
import { 
  Mail, Phone, MapPin, 
  Facebook, Twitter, Linkedin, Github, Youtube,
  Heart, Shield, Users, Award, TrendingUp
} from 'lucide-react';
import Link from 'next/link';
import { AnimatePresence } from 'framer-motion';

interface FooterLink {
  label: string;
  href: string;
  description?: string;
  external?: boolean;
}

interface FooterSection {
  title: string;
  links: FooterLink[];
}

const footerSections: FooterSection[] = [
  {
    title: 'Services',
    links: [
      { label: 'AI & Machine Learning', href: '/ai-services', description: 'Advanced AI solutions' },
      { label: 'Quantum Computing', href: '/quantum-computing', description: 'Next-gen quantum tech' },
      { label: 'Space Technology', href: '/space-tech', description: 'Innovative space solutions' },
      { label: 'Q4 2025 Innovation', href: '/innovative-2025-q4-showcase', description: 'Latest revolutionary services' },
      { label: 'Pricing Guide', href: '/comprehensive-pricing-2025-q4', description: 'Comprehensive pricing' },
      { label: 'Cybersecurity', href: '/cybersecurity', description: 'Enterprise security' },
      { label: 'Cloud Solutions', href: '/cloud-platform', description: 'Scalable cloud infrastructure' },
      { label: 'View All Services', href: '/services', description: 'Complete service portfolio' }
    ]
  },
  {
    title: 'Solutions',
    links: [
      { label: 'Healthcare & Biotech', href: '/healthcare-solutions', description: 'Medical technology' },
      { label: 'Financial Services', href: '/solutions?industry=financial', description: 'Fintech solutions' },
      { label: 'Manufacturing', href: '/solutions?industry=manufacturing', description: 'Industry 4.0' },
      { label: 'Retail & E-commerce', href: '/solutions?industry=retail', description: 'Digital commerce' },
      { label: 'Government', href: '/solutions?industry=government', description: 'Public sector' },
      { label: 'Education', href: '/solutions?industry=education', description: 'EdTech solutions' }
    ]
  },
  {
    title: 'Company',
    links: [
      { label: 'About Us', href: '/about', description: 'Our mission and values' },
      { label: 'Careers', href: '/careers', description: 'Join our team' },
      { label: 'Contact', href: '/contact', description: 'Get in touch' }
    ]
  },
  {
    title: 'Resources',
    links: [
      { label: 'Blog', href: '/blog', description: 'Industry insights' },
      { label: 'White Papers', href: '/white-papers', description: 'In-depth research' },
      { label: 'Webinars', href: '/webinars', description: 'Educational content' },
      { label: 'Documentation', href: '/docs', description: 'Technical guides' },
      { label: 'Blog', href: '/blog', description: 'Industry insights' },
      { label: 'Case Studies', href: '/case-studies', description: 'Success stories' },
      { label: 'Support', href: '/support', description: 'Help & assistance' }
    ]
  },
  {
    title: 'Industries',
    links: [
      { label: 'Healthcare', href: '/healthcare-solutions', description: 'Medical technology' },
      { label: 'Finance', href: '/financial-solutions', description: 'Fintech solutions' },
      { label: 'Manufacturing', href: '/manufacturing-ai-solutions', description: 'Industry 4.0' },
      { label: 'Government', href: '/government-technology-solutions', description: 'Public sector' },
      { label: 'Education', href: '/education-technology-solutions', description: 'EdTech solutions' }
    ]
  }
];

const socialLinks = [
  { icon: <Linkedin className="w-5 h-5" />, href: 'https://linkedin.com/company/ziontechgroup', label: 'LinkedIn', external: true },
  { icon: <Twitter className="w-5 h-5" />, href: 'https://twitter.com/ziontechgroup', label: 'Twitter', external: true },
  { icon: <Github className="w-5 h-5" />, href: 'https://github.com/ziontechgroup', label: 'GitHub', external: true }
];

const quickLinks = [
  { name: 'About Us', href: '/about', icon: <Users className="w-4 h-4" /> },
  { name: 'Contact', href: '/contact', icon: <Phone className="w-4 h-4" /> },
  { name: 'Support', href: '/support', icon: <HelpCircle className="w-4 h-4" /> },
  { name: 'Documentation', href: '/docs', icon: <FileText className="w-4 h-4" /> },
  { name: 'API Reference', href: '/api', icon: <Code className="w-4 h-4" /> },
  { name: 'Status', href: '/status', icon: <TrendingUp className="w-4 h-4" /> }
];

const UltraAdvancedFuturisticFooter2025: React.FC = () => {
  const [email, setEmail] = useState('');
  const [isSubscribing, setIsSubscribing] = useState(false);
  const [subscriptionStatus, setSubscriptionStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [expandedSections, setExpandedSections] = useState<Set<string>>(new Set());

  const toggleSection = (title: string) => {
    const newExpanded = new Set(expandedSections);
    if (newExpanded.has(title)) {
      newExpanded.delete(title);
    } else {
      newExpanded.add(title);
    }
    setExpandedSections(newExpanded);
  };

  const handleSubscribe = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email.trim()) return;

  const supportLinks = [
    { name: 'Documentation', href: '/docs' },
    { name: 'API Reference', href: '/api' },
    { name: 'Support Center', href: '/support' },
    { name: 'Live Chat', href: '/chat' },
    { name: 'Status Page', href: '/status' },
    { name: 'Contact Support', href: '/contact' }
  ];

    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      setSubscriptionStatus('success');
      setEmail('');
      
      // Reset success message after 3 seconds
      setTimeout(() => setSubscriptionStatus('idle'), 3000);
    } catch {
      setSubscriptionStatus('error');
    } finally {
      setIsSubscribing(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const footerSections = [
    {
      title: 'Services',
      items: [
        { label: 'AI & Machine Learning', href: '/ai-services' },
        { label: 'Quantum Computing', href: '/quantum-computing' },
        { label: 'Space Technology', href: '/space-tech' },
        { label: 'Cybersecurity', href: '/cybersecurity' },
        { label: '2040 Services', href: '/innovative-2040-services-showcase' }
      ]
    },
    {
      title: 'Solutions',
      items: [
        { label: 'Enterprise Solutions', href: '/enterprise-solutions' },
        { label: 'Micro SAAS', href: '/micro-saas' },
        { label: 'IT Services', href: '/it-services' },
        { label: 'Innovation Lab', href: '/innovation-lab' },
        { label: 'Research & Development', href: '/research-development' }
      ]
    },
    {
      title: 'Company',
      items: [
        { label: 'About Us', href: '/about' },
        { label: 'Our Team', href: '/team' },
        { label: 'Careers', href: '/careers' },
        { label: 'Investors', href: '/investors' },
        { label: 'Press & Media', href: '/press' }
      ]
    },
    {
      title: 'Resources',
      items: [
        { label: 'Blog', href: '/blog' },
        { label: 'Case Studies', href: '/case-studies' },
        { label: 'White Papers', href: '/white-papers' },
        { label: 'Documentation', href: '/docs' },
        { label: 'Support', href: '/support' }
      ]
    }
  ];

  const socialLinks = [
    { icon: Twitter, href: 'https://twitter.com/ziontechgroup', label: 'Twitter' },
    { icon: Linkedin, href: 'https://linkedin.com/company/ziontechgroup', label: 'LinkedIn' },
    { icon: Github, href: 'https://github.com/Zion-Holdings', label: 'GitHub' },
    { icon: Globe, href: 'https://ziontechgroup.com', label: 'Website' }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5
      }
    }
  };

  return (
    <footer className="relative bg-gradient-to-br from-gray-900 via-purple-900 to-gray-900 text-white overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 -z-10">
        {/* Quantum Particle Field */}
        {[...Array(30)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full"
            animate={{
              x: [0, Math.random() * 1000, 0],
              y: [0, Math.random() * 1000, 0],
              opacity: [0, 0.6, 0],
              scale: [0, 1, 0],
            }}
            transition={{
              duration: 15 + Math.random() * 10,
              repeat: -1,
              delay: Math.random() * 8,
              ease: "easeInOut"
            }}
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`
            }}
          />
        ))}
        
        {/* Gradient Overlays */}
        <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-purple-900/20 to-transparent"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-gray-900/20 to-gray-900"></div>
      </div>

      <div className="relative z-10">
        {/* Main Footer Content */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-12"
          >
            {/* Company Info */}
            <motion.div variants={itemVariants} className="lg:col-span-2">
              <div className="flex items-center space-x-3 mb-6">
                <div className="relative">
                  <div className="w-12 h-12 bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 rounded-xl flex items-center justify-center">
                    <Crown className="w-7 h-7 text-white" />
                  </div>
                  <span className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent group-hover:from-cyan-500 group-hover:to-blue-600 transition-all duration-300">
                    Zion Tech Group
                  </span>
                </Link>
                
                <p className="mt-6 text-lg text-gray-400 leading-relaxed max-w-md">
                  Pioneering the future of technology with quantum computing, autonomous AI, and revolutionary solutions that drive business transformation.
                </p>
              </div>

              {/* Newsletter Subscription */}
              <div className="mb-8">
                <h3 className="text-lg font-semibold text-white mb-4">Stay Updated</h3>
                <form onSubmit={handleSubscribe} className="space-y-3">
                  <div className="relative">
                    <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" aria-hidden="true" />
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="Enter your email"
                      className="w-full pl-10 pr-4 py-3 bg-gray-800/50 border border-gray-600/50 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:border-transparent transition-all duration-200"
                      aria-label="Email address for newsletter subscription"
                      required
                    />
                  </div>
                  <button
                    type="submit"
                    disabled={isSubscribing}
                    className="w-full px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-medium rounded-lg hover:from-cyan-600 hover:to-blue-700 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:ring-offset-2 focus:ring-offset-gray-900"
                    aria-label={isSubscribing ? 'Subscribing to newsletter...' : 'Subscribe to newsletter'}
                  >
                    {isSubscribing ? 'Subscribing...' : 'Subscribe'}
                  </button>
                  
                  {/* Subscription Status */}
                  <AnimatePresence>
                    {subscriptionStatus === 'success' && (
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 10 }}
                        className="text-green-400 text-sm text-center"
                        role="status"
                        aria-live="polite"
                      >
                        Successfully subscribed! Welcome to our community.
                      </motion.div>
                    )}
                    {subscriptionStatus === 'error' && (
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 10 }}
                        className="text-red-400 text-sm text-center"
                        role="status"
                        aria-live="polite"
                      >
                        Something went wrong. Please try again.
                      </motion.div>
                    )}
                  </AnimatePresence>
                </form>
              </div>

              {/* Contact Information */}
              <div className="space-y-4">
                <h3 className="text-lg font-semibold text-white mb-4">Contact Us</h3>
                <div className="space-y-3">
                  <div className="flex items-start space-x-3">
                    <Phone className="w-5 h-5 text-cyan-400 mt-0.5 flex-shrink-0" aria-hidden="true" />
                    <a 
                      href={`tel:${contactInfo.phone}`}
                      className="text-gray-400 hover:text-cyan-400 transition-colors duration-200"
                      aria-label={`Call us at ${contactInfo.phone}`}
                    >
                      {contactInfo.phone}
                    </a>
                  </div>
                  <div className="flex items-start space-x-3">
                    <Mail className="w-5 h-5 text-cyan-400 mt-0.5 flex-shrink-0" aria-hidden="true" />
                    <a 
                      href={`mailto:${contactInfo.email}`}
                      className="text-gray-400 hover:text-cyan-400 transition-colors duration-200"
                      aria-label={`Email us at ${contactInfo.email}`}
                    >
                      {contactInfo.email}
                    </a>
                  </div>
                  <div className="flex items-start space-x-3">
                    <MapPin className="w-5 h-5 text-cyan-400 mt-0.5 flex-shrink-0" aria-hidden="true" />
                    <address className="text-gray-400 not-italic">
                      {contactInfo.address}
                    </address>
                  </div>
                </div>
              </div>
            </motion.div>

            <form onSubmit={handleNewsletterSubmit} className="space-y-4">
              <div className="relative">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email address"
                  className="w-full px-4 py-3 bg-gray-800/50 border border-gray-700/50 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-cyan-500/50 transition-all duration-200"
                  required
                />
                <button
                  onClick={() => toggleSection(section.title)}
                  onKeyDown={(e) => handleKeyDown(e, () => toggleSection(section.title))}
                  className="flex items-center justify-between w-full text-left text-lg font-semibold text-white hover:text-cyan-400 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:ring-offset-2 focus:ring-offset-gray-900 rounded-lg lg:hidden"
                  aria-expanded={expandedSections.has(section.title)}
                  aria-controls={`footer-section-${section.title}`}
                >
                  {section.title}
                  <ChevronRight 
                    className={`w-5 h-5 transition-transform duration-200 ${
                      expandedSections.has(section.title) ? 'rotate-90' : ''
                    }`} 
                    aria-hidden="true" 
                  />
                </button>
                
                <h3 className="text-lg font-semibold text-white hidden lg:block">{section.title}</h3>
                
                <div 
                  id={`footer-section-${section.title}`}
                  className={`space-y-3 ${
                    expandedSections.has(section.title) ? 'block' : 'hidden lg:block'
                  }`}
                >
                  {section.links.map((link) => (
                    <div key={link.label}>
                      <Link
                        href={item.href}
                        className="text-gray-300 hover:text-white transition-colors duration-200 hover:translate-x-1 inline-block"
                      >
                        {item.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </motion.div>

          {/* Social Links & Newsletter */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="mt-16 pt-12 border-t border-gray-800/50"
          >
            <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
              {/* Social Links */}
              <div className="flex items-center space-x-6">
                <span className="text-gray-400 font-medium">Follow Us:</span>
                {socialLinks.map((social) => (
                  <motion.a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 bg-gray-800/50 hover:bg-gradient-to-r hover:from-cyan-500 hover:to-purple-500 rounded-xl flex items-center justify-center text-gray-300 hover:text-white transition-all duration-200 hover:scale-110"
                    whileHover={{ y: -2 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <social.icon className="w-5 h-5" />
                  </motion.a>
                ))}
              </div>

              {/* Newsletter Signup */}
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
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    Subscribe
                  </motion.button>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

      {/* Floating Contact Button */}
      <div className="fixed bottom-6 right-6 z-40">
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full shadow-2xl shadow-cyan-500/50 flex items-center justify-center text-white hover:shadow-cyan-500/75 transition-all duration-300"
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

      {/* Floating CTA */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="absolute bottom-8 right-8 z-20"
      >
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full shadow-2xl shadow-cyan-500/25 hover:shadow-cyan-500/40 transition-all duration-200 flex items-center justify-center text-white focus:outline-none focus:ring-4 focus:ring-cyan-500 focus:ring-offset-2 focus:ring-offset-gray-900"
          onClick={() => window.location.href = '/contact'}
          aria-label="Quick contact Zion Tech Group"
        >
          <Rocket className="w-6 h-6" />
        </motion.button>
      </motion.div>
    </footer>
  );
};

export default UltraAdvancedFuturisticFooter2025;