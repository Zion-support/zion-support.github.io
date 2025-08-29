import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  Phone, 
  Mail, 
  MapPin, 
  Globe, 
  Linkedin, 
  Twitter, 
  Facebook, 
  Instagram,
  Youtube,
  Github,
  ArrowRight,
  Star,
  Shield,
  Zap,
  Brain,
  Rocket,
  Heart,
  Crown,
  Sparkles,
  Flame,
  Thunder,
  Lightning,
  Sun,
  Moon,
  Planet,
  Galaxy,
  Universe,
  Infinity,
  Alpha,
  Beta,
  Gamma,
  Delta,
  Epsilon,
  Zeta,
  Eta,
  Theta,
  Iota,
  Kappa,
  Lambda,
  Mu,
  Nu,
  Xi,
  Omicron,
  Pi,
  Rho,
  Sigma,
  Tau,
  Upsilon,
  Phi,
  Chi,
  Psi,
  Omega,
  Clock,
  Award,
  Users,
  TrendingUp,
  CheckCircle,
  ChevronUp,
  MailOpen,
  Send
} from 'lucide-react';
import { AnimatePresence } from 'framer-motion';

export const EnhancedFuturisticFooter: React.FC = () => {
  const currentYear = new Date().getFullYear();
  const [email, setEmail] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);
  const [showScrollTop, setShowScrollTop] = useState(false);

  // Handle scroll to top
  React.useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 400);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email.trim()) {
      setIsSubscribed(true);
      setEmail('');
      // Reset subscription status after 3 seconds
      setTimeout(() => setIsSubscribed(false), 3000);
    }
  };

  const footerSections = [
    {
      title: 'AI & Analytics Services',
      icon: Brain,
      color: 'from-purple-600 to-pink-600',
      links: [
        { name: 'AI Business Intelligence', href: '/services/ai-business-intelligence' },
        { name: 'AI Sales Copilot', href: '/services/ai-sales-copilot' },
        { name: 'AI Compliance Assistant', href: '/services/ai-compliance-assistant' },
        { name: 'AI Auto Email Responder', href: '/services/ai-auto-email-responder' },
        { name: 'LLM Content Studio', href: '/services/llm-content-studio' },
        { name: 'AI Compliance Copilot', href: '/services/ai-compliance-copilot' }
      ]
    },
    {
      title: 'Cloud & DevOps',
      icon: Zap,
      color: 'from-blue-600 to-cyan-600',
      links: [
        { name: 'Micro SaaS Solutions', href: '/services/micro-saas-solutions' },
        { name: 'AI Business Intelligence', href: '/services/ai-business-intelligence' },
        { name: 'Customer Feedback Surveys', href: '/services/mobile-feedback-surveys' },
        { name: 'Cloud FinOps Optimizer', href: '/services/cloud-finops-optimizer' },
        { name: 'FinOps Advisor', href: '/services/finops-advisor' },
        { name: 'Digital Transformation', href: '/services/digital-transformation' }
      ]
    },
    {
      title: 'IoT & Digital Twin',
      icon: Rocket,
      color: 'from-green-600 to-emerald-600',
      links: [
        { name: 'IT Infrastructure', href: '/services/it-infrastructure' },
        { name: 'Digital Transformation', href: '/services/digital-transformation' },
        { name: 'IoT Edge Computing', href: '/services/iot-edge' },
        { name: 'Digital Twin Solutions', href: '/services/digital-twin' },
        { name: 'Blockchain Enterprise', href: '/services/blockchain-enterprise-solutions' },
        { name: 'Healthcare Technology', href: '/services/healthcare-tech' }
      ]
    },
    {
      title: 'Emerging Technologies',
      icon: Crown,
      color: 'from-orange-600 to-red-600',
      links: [
        { name: 'Quantum Computing', href: '/services/quantum-computing' },
        { name: 'Space Technology', href: '/services/space-tech' },
        { name: 'Green IT Solutions', href: '/services/green-it' },
        { name: 'Sustainability Tech', href: '/services/sustainability' },
        { name: 'Zero Trust Security', href: '/services/zero-trust-network-architecture' },
        { name: 'Edge Computing', href: '/services/edge-computing-platform' }
      ]
    }
  ];

  const companyLinks = [
    { name: 'About Us', href: '/about' },
    { name: 'Our Team', href: '/team' },
    { name: 'Careers', href: '/careers' },
    { name: 'Partners', href: '/partners' },
    { name: 'News & Events', href: '/news' },
    { name: 'Case Studies', href: '/case-studies' }
  ];

  const supportLinks = [
    { name: 'Help Center', href: '/help' },
    { name: 'Documentation', href: '/docs' },
    { name: 'Training', href: '/training' },
    { name: 'Support Portal', href: '/support' },
    { name: 'Status Page', href: '/status' },
    { name: 'Contact Us', href: '/contact' }
  ];

  const legalLinks = [
    { name: 'Privacy Policy', href: '/privacy' },
    { name: 'Terms of Service', href: '/terms' },
    { name: 'Cookie Policy', href: '/cookies' },
    { name: 'Security', href: '/security' },
    { name: 'Compliance', href: '/compliance' },
    { name: 'Accessibility', href: '/accessibility' }
  ];

  const socialLinks = [
    { name: 'LinkedIn', href: 'https://linkedin.com', icon: Linkedin, color: 'hover:text-blue-400' },
    { name: 'Twitter', href: 'https://twitter.com', icon: Twitter, color: 'hover:text-sky-400' },
    { name: 'Facebook', href: 'https://facebook.com', icon: Facebook, color: 'hover:text-blue-600' },
    { name: 'Instagram', href: 'https://instagram.com', icon: Instagram, color: 'hover:text-pink-500' },
    { name: 'YouTube', href: 'https://youtube.com', icon: Youtube, color: 'hover:text-red-500' },
    { name: 'GitHub', href: 'https://github.com', icon: Github, color: 'hover:text-gray-400' }
  ];

  return (
    <footer className="relative bg-gradient-to-br from-zion-slate via-zion-slate-dark to-black border-t border-zion-cyan/20">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(34,221,210,0.1),transparent_50%)]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(140,21,233,0.1),transparent_50%)]"></div>
      </div>

      {/* Main Footer Content */}
      <div className="relative z-10">
        {/* Newsletter Section */}
        <section className="border-b border-zion-cyan/20">
          <div className="container-responsive py-12">
            <div className="text-center max-w-3xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="mb-8"
              >
                <div className="inline-flex items-center space-x-2 mb-4">
                  <div className="p-2 bg-gradient-to-r from-zion-cyan to-zion-purple rounded-lg">
                    <MailOpen className="w-6 h-6 text-white" />
                  </div>
                  <h2 className="text-2xl font-orbitron font-bold text-white">
                    Stay Ahead with Zion Tech
                  </h2>
                </div>
                <p className="text-gray-300 text-lg leading-relaxed">
                  Get the latest insights on AI, emerging technologies, and digital transformation delivered to your inbox.
                </p>
              </motion.div>

              <motion.form
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                onSubmit={handleNewsletterSubmit}
                className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto"
              >
                <div className="flex-1 relative">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email address"
                    className="w-full px-4 py-3 bg-zion-slate/50 backdrop-blur-sm border border-zion-cyan/30 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-zion-cyan/50 focus:border-zion-cyan/50 transition-all duration-300"
                    required
                  />
                </div>
                <button
                  type="submit"
                  className="px-6 py-3 bg-gradient-to-r from-zion-cyan to-zion-purple text-white font-rajdhani font-semibold rounded-lg hover:from-zion-cyan/90 hover:to-zion-purple/90 transform hover:scale-105 transition-all duration-300 flex items-center justify-center space-x-2"
                >
                  <span>Subscribe</span>
                  <Send className="w-4 h-4" />
                </button>
              </motion.form>

              {isSubscribed && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  className="mt-4 p-3 bg-green-500/20 border border-green-500/30 rounded-lg text-green-400 flex items-center justify-center space-x-2"
                >
                  <CheckCircle className="w-5 h-5" />
                  <span>Successfully subscribed to our newsletter!</span>
                </motion.div>
              )}
            </div>
          </div>
        </section>

        {/* Main Footer Links */}
        <div className="container-responsive py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            {footerSections.map((section, index) => (
              <motion.div
                key={section.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="space-y-4"
              >
                <div className="flex items-center space-x-3 mb-4">
                  <div className={`p-2 rounded-lg bg-gradient-to-r ${section.color}`}>
                    <section.icon className="w-5 h-5 text-white" />
                  </div>
                  <h3 className="text-lg font-semibold text-white font-rajdhani">
                    {section.title}
                  </h3>
                </div>
                <ul className="space-y-2">
                  {section.links.map((link) => (
                    <li key={link.name}>
                      <Link
                        to={link.href}
                        className="text-gray-400 hover:text-zion-cyan transition-colors duration-300 text-sm font-rajdhani hover:translate-x-1 inline-block transform transition-transform duration-300"
                      >
                        {link.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>

          {/* Company Info & Quick Links */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            {/* Company Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="space-y-4"
            >
              <h3 className="text-lg font-semibold text-white font-rajdhani mb-4">Company</h3>
              <ul className="space-y-2">
                {companyLinks.map((link) => (
                  <li key={link.name}>
                    <Link
                      to={link.href}
                      className="text-gray-400 hover:text-zion-cyan transition-colors duration-300 text-sm font-rajdhani hover:translate-x-1 inline-block transform transition-transform duration-300"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Support Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="space-y-4"
            >
              <h3 className="text-lg font-semibold text-white font-rajdhani mb-4">Support</h3>
              <ul className="space-y-2">
                {supportLinks.map((link) => (
                  <li key={link.name}>
                    <Link
                      to={link.href}
                      className="text-gray-400 hover:text-zion-cyan transition-colors duration-300 text-sm font-rajdhani hover:translate-x-1 inline-block transform transition-transform duration-300"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Legal Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="space-y-4"
            >
              <h3 className="text-lg font-semibold text-white font-rajdhani mb-4">Legal</h3>
              <ul className="space-y-2">
                {legalLinks.map((link) => (
                  <li key={link.name}>
                    <Link
                      to={link.href}
                      className="text-gray-400 hover:text-zion-cyan transition-colors duration-300 text-sm font-rajdhani hover:translate-x-1 inline-block transform transition-transform duration-300"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.7 }}
              className="space-y-4"
            >
              <h3 className="text-lg font-semibold text-white font-rajdhani mb-4">Contact</h3>
              <div className="space-y-3">
                <div className="flex items-center space-x-3 text-gray-400 text-sm">
                  <Mail className="w-4 h-4 text-zion-cyan" />
                  <span>info@ziontechgroup.com</span>
                </div>
                <div className="flex items-center space-x-3 text-gray-400 text-sm">
                  <Phone className="w-4 h-4 text-zion-cyan" />
                  <span>+1 (555) 123-4567</span>
                </div>
                <div className="flex items-center space-x-3 text-gray-400 text-sm">
                  <MapPin className="w-4 h-4 text-zion-cyan" />
                  <span>Global Headquarters</span>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Social Links & Bottom Bar */}
          <div className="border-t border-zion-cyan/20 pt-8">
            <div className="flex flex-col lg:flex-row items-center justify-between space-y-4 lg:space-y-0">
              {/* Social Links */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.8 }}
                className="flex items-center space-x-4"
              >
                <span className="text-gray-400 text-sm font-rajdhani mr-2">Follow us:</span>
                {socialLinks.map((social) => (
                  <a
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`p-2 text-gray-400 ${social.color} transition-all duration-300 hover:scale-110`}
                    aria-label={`Follow us on ${social.name}`}
                  >
                    <social.icon className="w-5 h-5" />
                  </a>
                ))}
              </motion.div>

              {/* Copyright */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.9 }}
                className="text-center lg:text-right"
              >
                <p className="text-gray-400 text-sm font-rajdhani">
                  © {currentYear} Zion Tech Group. All rights reserved.
                </p>
                <p className="text-gray-500 text-xs mt-1">
                  Empowering the future through technology innovation
                </p>
              </motion.div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll to Top Button */}
      <AnimatePresence>
        {showScrollTop && (
          <motion.button
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            onClick={scrollToTop}
            className="fixed bottom-8 right-8 z-50 p-3 bg-gradient-to-r from-zion-cyan to-zion-purple text-white rounded-full shadow-lg hover:shadow-zion-cyan/25 transform hover:scale-110 transition-all duration-300"
            aria-label="Scroll to top"
          >
            <ChevronUp className="w-6 h-6" />
          </motion.button>
        )}
      </AnimatePresence>
    </footer>
  );
};