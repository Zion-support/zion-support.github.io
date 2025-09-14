"use client";
import React, { useState } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Globe, Phone, Mail, MapPin, 
  Brain, Atom, Target, 
  Star, 
  Twitter, Linkedin, Youtube, Github, 
  ArrowUp, ArrowRight, ExternalLink, Heart, Zap
} from 'lucide-react';

const footerSections = [
  {
    title: 'Featured Revolutionary Services 2043',
    description: 'Our most innovative and cutting-edge solutions',
    icon: <Star className="w-5 h-5 text-yellow-400" />,
    color: 'from-yellow-500 to-orange-500',
    badge: 'Featured',
    links: [
      { name: 'AI Consciousness Evolution 2043', href: '/ai-consciousness-evolution-2043', featured: true, description: 'Next-generation AI consciousness' },
      { name: 'Quantum AI Neural Network 2043', href: '/quantum-ai-neural-2043', featured: true, description: 'Quantum-powered AI networks' },
      { name: 'AI Business Intelligence 2043', href: '/ai-business-intelligence-2043', featured: true, description: 'AI-powered business insights' },
      { name: 'Quantum Cybersecurity 2043', href: '/quantum-cybersecurity-2043', featured: true, description: 'Quantum-resistant security' },
      { name: 'Autonomous Customer Success 2043', href: '/autonomous-customer-success-2043', featured: true, description: 'AI-powered customer success' },
      { name: 'Space Resource Intelligence 2043', href: '/space-resource-intelligence-2043', description: 'AI-powered space resource management' },
      { name: 'Autonomous DevOps Platform 2043', href: '/autonomous-devops-2043', description: 'Fully autonomous DevOps' },
      { name: 'AI Healthcare Platform 2043', href: '/ai-healthcare-platform-2043', description: 'AI-powered healthcare solutions' },
      { name: 'Quantum Financial Trading 2043', href: '/quantum-financial-trading-2043', description: 'Quantum-powered trading' },
      { name: 'Autonomous Supply Chain 2043', href: '/autonomous-supply-chain-2043', description: 'AI-powered supply chain' }
    ]
  },
  {
    title: 'AI & Consciousness',
    description: 'Revolutionary AI consciousness platforms',
    icon: <Brain className="w-5 h-5 text-cyan-400" />,
    color: 'from-purple-500 to-pink-500',
    badge: 'Hot',
    links: [
      { name: 'AI Consciousness Evolution 2043', href: '/ai-consciousness-evolution-2043', description: 'Next-generation AI consciousness' },
      { name: 'Quantum AI Neural Network 2043', href: '/quantum-ai-neural-2043', description: 'Quantum-powered AI networks' },
      { name: 'Autonomous AI Research 2043', href: '/autonomous-ai-research-2043', description: 'Fully autonomous AI research' },
      { name: 'AI Content Personalization 2043', href: '/ai-content-personalization-2043', description: 'Intelligent content personalization' },
      { name: 'AI Ethics & Governance 2043', href: '/ai-ethics-governance-2043', description: 'AI ethics and governance' },
      { name: 'AI Autonomous Ecosystem 2043', href: '/ai-autonomous-ecosystem-2043', description: 'Complete AI ecosystem' },
      { name: 'AI Predictive Maintenance 2043', href: '/ai-predictive-maintenance-2043', description: 'AI-powered maintenance' },
      { name: 'AI Customer Success 2043', href: '/ai-customer-success-2043', description: 'AI-powered customer success' },
      { name: 'AI Business Intelligence 2043', href: '/ai-business-intelligence-2043', description: 'AI-powered business insights' },
      { name: 'AI Marketing Automation 2043', href: '/ai-marketing-automation-2043', description: 'Intelligent marketing automation' }
    ]
  },
  {
    title: 'Quantum & Emerging Tech',
    description: 'Breakthrough quantum and space technologies',
    icon: <Atom className="w-5 h-5 text-blue-400" />,
    color: 'from-blue-500 to-cyan-500',
    badge: 'Trending',
    links: [
      { name: 'Quantum Cloud Infrastructure 2043', href: '/quantum-cloud-infrastructure-2043', description: 'Quantum-powered cloud infrastructure' },
      { name: 'Quantum Database Platform 2043', href: '/quantum-database-2043', description: 'Quantum-powered database' },
      { name: 'Quantum Edge Computing 2043', href: '/quantum-edge-computing-2043', description: 'Quantum-powered edge computing' },
      { name: 'Quantum API Gateway 2043', href: '/quantum-api-gateway-2043', description: 'Quantum-powered API gateway' },
      { name: 'Quantum Cybersecurity 2043', href: '/quantum-cybersecurity-2043', description: 'Quantum-resistant security' },
      { name: 'Quantum Internet Security 2043', href: '/quantum-internet-security-2043', description: 'Quantum internet security' },
      { name: 'Quantum Financial Trading 2043', href: '/quantum-financial-trading-2043', description: 'Quantum-powered trading' },
      { name: 'Quantum Neural Network 2043', href: '/quantum-ai-neural-2043', description: 'Quantum-powered AI networks' }
    ]
  },
  {
    title: 'Company & Resources',
    description: 'About Zion Tech Group and resources',
    icon: <Target className="w-5 h-5 text-purple-400" />,
    color: 'from-orange-500 to-red-500',
    badge: 'New',
    links: [
      { name: 'About Us', href: '/about', description: 'Our story and mission' },
      { name: 'Careers', href: '/careers', description: 'Join our revolutionary team' },
      { name: 'News & Updates', href: '/news', description: 'Latest insights and updates' },
      { name: 'Case Studies', href: '/case-studies', description: 'Success stories and results' },
      { name: 'Blog', href: '/blog', description: 'Industry insights and trends' },
      { name: 'Resources', href: '/resources', description: 'Helpful tools and guides' },
      { name: 'Support', href: '/support', description: '24/7 technical support' },
      { name: 'Contact', href: '/contact', description: 'Get in touch with us' }
    ]
  }
];

  const additionalLinks = useMemo(() => [
    {
      title: 'Support & Training',
      items: [
        { label: 'Help Center', href: '/help' },
        { label: 'Training Programs', href: '/training' },
        { label: 'API Documentation', href: '/api-docs' },
        { label: 'Developer Resources', href: '/developer' }
      ]
    },
    {
      title: 'Legal & Compliance',
      items: [
        { label: 'Privacy Policy', href: '/privacy' },
        { label: 'Terms of Service', href: '/terms' },
        { label: 'Security', href: '/security' },
        { label: 'Compliance', href: '/compliance' }
      ]
    },
    {
      title: 'Partnerships',
      items: [
        { label: 'Partner Program', href: '/partners' },
        { label: 'Reseller Program', href: '/resellers' },
        { label: 'Technology Partners', href: '/tech-partners' },
        { label: 'Become a Partner', href: '/become-partner' }
      ]
    }
  ], []);

  const contactInfo = useMemo(() => ({
    phone: '+1 302 464 0950',
    email: 'kleber@ziontechgroup.com',
    founded: '2024'
  },
  quickLinks: [
    { label: 'About Us', href: '/about', icon: Users },
    { label: 'Services', href: '/services', icon: Briefcase },
    { label: 'Solutions', href: '/solutions', icon: Target },
    { label: 'Case Studies', href: '/case-studies', icon: Building },
    { label: 'Blog', href: '/blog', icon: FileText },
    { label: 'Careers', href: '/careers', icon: Users }
  ],
  services: [
    { label: 'AI & Machine Learning', href: '/services?category=ai-ml', icon: Brain },
    { label: 'Quantum Computing', href: '/services?category=quantum', icon: Atom },
    { label: 'Space Technology', href: '/services?category=space-tech', icon: Rocket },
    { label: 'Cybersecurity', href: '/services?category=cybersecurity', icon: ShieldIcon },
    { label: 'Cloud Infrastructure', href: '/services?category=cloud', icon: Cloud },
    { label: 'Enterprise Solutions', href: '/solutions/enterprise', icon: Building }
  ],
  resources: [
    { label: 'Documentation', href: '/docs', icon: Code },
    { label: 'API Reference', href: '/api-documentation', icon: Code },
    { label: 'Webinars', href: '/webinars', icon: Video },
    { label: 'White Papers', href: '/white-papers', icon: FileText },
    { label: 'Support', href: '/support', icon: Zap },
    { label: 'Status', href: '/status', icon: Globe }
  ],
  social: [
    { label: 'LinkedIn', href: 'https://linkedin.com/company/ziontechgroup', icon: <Linkedin className="w-5 h-5" /> },
    { label: 'Twitter', href: 'https://twitter.com/ziontechgroup', icon: <Twitter className="w-5 h-5" /> },
    { label: 'GitHub', href: 'https://github.com/ziontechgroup', icon: <Github className="w-5 h-5" /> },
    { label: 'YouTube', href: 'https://youtube.com/ziontechgroup', icon: <Youtube className="w-5 h-5" /> }
  ],
  legal: [
    { label: 'Privacy Policy', href: '/privacy' },
    { label: 'Terms of Service', href: '/terms' },
    { label: 'Cookie Policy', href: '/cookies' },
    { label: 'Accessibility', href: '/accessibility' }
  ]
};

const socialLinks = [
  { name: 'Twitter', href: 'https://twitter.com/ziontechgroup', icon: <Twitter className="w-5 h-5" />, color: 'from-blue-400 to-blue-600' },
  { name: 'LinkedIn', href: 'https://linkedin.com/company/ziontechgroup', icon: <Linkedin className="w-5 h-5" />, color: 'from-blue-600 to-blue-800' },
  { name: 'YouTube', href: 'https://youtube.com/@ziontechgroup', icon: <Youtube className="w-5 h-5" />, color: 'from-red-500 to-red-700' },
  { name: 'GitHub', href: 'https://github.com/Zion-Holdings', icon: <Github className="w-5 h-5" />, color: 'from-gray-600 to-gray-800' }
];

const companyStats = [
  { number: '1500+', label: 'Revolutionary Services', icon: Star, color: 'from-yellow-500 to-orange-500' },
  { number: '99.99%', label: 'Uptime Guarantee', icon: Shield, color: 'from-green-500 to-emerald-500' },
  { number: '24/7', label: 'AI Support Available', icon: Brain, color: 'from-cyan-500 to-blue-500' },
  { number: '150+', label: 'Countries Served', icon: Globe, color: 'from-purple-500 to-pink-500' }
];

const UltraFuturisticFooter2040: React.FC = () => {
  const [expandedSections, setExpandedSections] = useState<Set<string>>(new Set());
  const [showBackToTop, setShowBackToTop] = useState(false);

  // Handle scroll to show/hide back to top button
  React.useEffect(() => {
    const handleScroll = () => {
      setShowBackToTop(window.scrollY > 400);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleSection = (title: string) => {
    const newExpanded = new Set(expandedSections);
    if (newExpanded.has(title)) {
      newExpanded.delete(title);
    } else {
      newExpanded.add(title);
    }
    setExpandedSections(newExpanded);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  // Enhanced visibility detection
  React.useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.scrollY > 100;
      setIsVisible(scrolled);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (newsletterEmail.trim()) {
      setIsNewsletterSubscribed(true);
      setNewsletterEmail('');
      // Here you would typically send the email to your newsletter service
      console.log('Newsletter subscription:', newsletterEmail);
    }
  };

  const toggleSection = (sectionTitle: string) => {
    setExpandedSection(expandedSection === sectionTitle ? null : sectionTitle);
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-black/90 backdrop-blur-md border-t border-gray-800/50 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-32 h-32 border border-cyan-400/10 rounded-full animate-pulse"></div>
        <div className="absolute bottom-0 right-1/4 w-24 h-24 border border-purple-400/10 rounded-full animate-pulse delay-1000"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="py-16">
          {/* Newsletter Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <div className="bg-gradient-to-r from-cyan-500/10 to-purple-500/10 border border-cyan-400/20 rounded-2xl p-8 backdrop-blur-sm">
              <h3 className="text-3xl font-bold text-white mb-4">
                Stay Ahead of the Future
              </h3>
              <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
                Get the latest insights on AI consciousness, quantum computing, and autonomous systems delivered to your inbox.
              </p>
              <form className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-3 bg-gray-800/50 border border-gray-700/50 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                  aria-label="Email address for newsletter"
                />
                <button
                  type="submit"
                  className="px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-lg hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105"
                >
                  Subscribe
                </button>
              </form>
            </div>
          </motion.div>

          {/* Footer Sections Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            {footerSections.map((section, index) => (
              <motion.div
                key={section.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="space-y-4"
              >
                {/* Section Header */}
                <div className="flex items-center space-x-2 mb-4">
                  <div className={`p-2 rounded-lg bg-gradient-to-r ${section.color} bg-opacity-20`}>
                    {section.icon}
                  </div>
                  <h3 className="text-lg font-semibold text-white">{section.title}</h3>
                </div>
                
                <p className="text-sm text-gray-400 mb-4">{section.description}</p>

                {/* Mobile Expandable Links */}
                <div className="lg:hidden">
                  <button
                    onClick={() => toggleSection(section.title)}
                    className="flex items-center justify-between w-full text-left text-gray-300 hover:text-white transition-colors duration-200"
                    aria-expanded={expandedSections.has(section.title)}
                    aria-controls={`footer-${section.title}`}
                  >
                    <span>View Links</span>
                    <ArrowRight className={`w-4 h-4 transition-transform duration-200 ${expandedSections.has(section.title) ? 'rotate-90' : ''}`} />
                  </button>
                  
                  <AnimatePresence>
                    {expandedSections.has(section.title) && (
                      <motion.div
                        id={`footer-${section.title}`}
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3 }}
                        className="mt-2 space-y-2"
                      >
                        {section.links.map((link) => (
                          <Link
                            key={link.name}
                            href={link.href}
                            className="block text-sm text-gray-400 hover:text-cyan-400 transition-colors duration-200"
                          >
                            {link.name}
                          </Link>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>

                {/* Desktop Links */}
                <div className="hidden lg:block space-y-2">
                  {section.links.slice(0, 6).map((link) => (
                    <Link
                      key={link.name}
                      href={link.href}
                      className="block text-sm text-gray-400 hover:text-cyan-400 transition-colors duration-200 group"
                    >
                      <span className="flex items-center space-x-2">
                        <span>{link.name}</span>
                        {link.featured && (
                          <span className="inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium bg-yellow-500/20 text-yellow-400">
                            Featured
                          </span>
                        )}
                      </span>
                    </Link>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>

          {/* Contact & Social Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="grid grid-cols-1 lg:grid-cols-2 gap-8 py-8 border-t border-gray-800/50"
          >
            {/* Contact Information */}
            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-white mb-4">Get in Touch</h3>
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <Phone className="w-5 h-5 text-cyan-400" />
                  <a href={`tel:${contactInfo.mobile}`} className="text-gray-300 hover:text-white transition-colors duration-200">
                    {contactInfo.mobile}
                  </a>
                </div>
                <div className="flex items-center space-x-3">
                  <Mail className="w-5 h-5 text-cyan-400" />
                  <a href={`mailto:${contactInfo.email}`} className="text-gray-300 hover:text-white transition-colors duration-200">
                    {contactInfo.email}
                  </a>
                </div>
                <div className="flex items-start space-x-3">
                  <MapPin className="w-5 h-5 text-cyan-400 mt-0.5" />
                  <address className="text-gray-300 not-italic">
                    {contactInfo.address}
                  </address>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-white mb-4">Follow Us</h3>
              <div className="flex space-x-4">
                {socialLinks.map((social) => (
                  <a
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 bg-gray-800/50 hover:bg-cyan-500/20 border border-gray-700/50 hover:border-cyan-400/50 rounded-lg transition-all duration-300 transform hover:scale-110"
                    aria-label={`Follow us on ${social.name}`}
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

        {/* Bottom Footer */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          viewport={{ once: true }}
          className="py-6 border-t border-gray-800/50"
        >
          <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
            <div className="flex items-center space-x-2 text-gray-400">
              <span>© {currentYear} Zion Tech Group. Made with</span>
              <Heart className="w-4 h-4 text-red-400 fill-current" />
              <span>and</span>
              <Zap className="w-4 h-4 text-yellow-400" />
              <span>for the future.</span>
            </div>
            
            <div className="flex items-center space-x-6 text-sm text-gray-400">
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
          </div>
        </motion.div>
      </div>

      {/* Back to Top Button */}
      <AnimatePresence>
        {showBackToTop && (
          <motion.button
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            onClick={scrollToTop}
            className="fixed bottom-6 right-6 p-3 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-full shadow-lg shadow-cyan-500/25 hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-110 focus:outline-none focus:ring-2 focus:ring-cyan-300 focus:ring-offset-2 focus:ring-offset-black z-50"
            aria-label="Back to top"
          >
            <ArrowUp className="w-5 h-5" />
          </motion.button>
        )}
      </AnimatePresence>
    </footer>
  );
};

export default UltraFuturisticFooter2040;