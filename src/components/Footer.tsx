import React from 'react';
import { Link } from 'react-router-dom';
<<<<<<< HEAD
import { motion } from 'framer-motion';
import { 
  Twitter, 
  Linkedin, 
  Facebook, 
  Instagram, 
  Github, 
  Mail, 
  Phone, 
  MapPin, 
  ArrowUp, 
  Globe, 
  Heart,
  Zap,
  Shield,
  Cloud,
  Brain,
  Rocket,
  Code,
  Users,
  Building,
  Award,
  Clock,
  CheckCircle
} from 'lucide-react';

const footerNavigation = {
  services: {
    title: 'Services',
    items: [
      { name: 'AI & Analytics', href: '/services/ai-analytics', icon: Brain },
      { name: 'Cybersecurity', href: '/services/cybersecurity', icon: Shield },
      { name: 'Cloud & DevOps', href: '/services/cloud-devops', icon: Cloud },
      { name: 'IoT & Edge', href: '/services/iot-edge', icon: Zap },
      { name: 'Quantum Computing', href: '/services/quantum-computing', icon: Rocket },
      { name: 'Blockchain', href: '/services/blockchain', icon: Code },
      { name: 'Digital Twin', href: '/services/digital-twin', icon: Building },
      { name: 'Sustainability', href: '/services/sustainability', icon: Heart }
    ],
  },
  microSaas: {
    title: 'Micro SAAS',
    items: [
      { name: 'AI Business Intelligence', href: '/micro-saas/ai-business-intelligence' },
      { name: 'Customer Experience', href: '/micro-saas/customer-experience' },
      { name: 'Quantum Computing', href: '/micro-saas/quantum-computing' },
      { name: 'Supply Chain', href: '/micro-saas/supply-chain' },
      { name: 'Cybersecurity', href: '/micro-saas/cybersecurity' },
      { name: 'IoT Edge Computing', href: '/micro-saas/iot-edge' },
      { name: 'Content Creation', href: '/micro-saas/content-creation' },
      { name: 'HR Platform', href: '/micro-saas/hr-platform' }
    ],
  },
  marketplace: {
    title: 'Marketplace',
    items: [
      { name: 'Products', href: '/marketplace' },
      { name: 'Services', href: '/services' },
      { name: 'Talent', href: '/talent' },
      { name: 'Equipment', href: '/equipment' },
      { name: 'Categories', href: '/categories' },
      { name: 'Green IT', href: '/green-it' },
      { name: 'IT Onsite Services', href: '/it-onsite-services' },
    ],
  },
  company: {
    title: 'Company',
    items: [
      { name: 'About Us', href: '/about' },
      { name: 'Blog', href: '/blog' },
      { name: 'Partners', href: '/partners' },
      { name: 'Careers', href: '/careers' },
      { name: 'Contact', href: '/contact' },
      { name: 'FAQ', href: '/faq' },
      { name: 'Sitemap', href: '/sitemap' },
    ],
  },
  support: {
    title: 'Support & Resources',
    items: [
      { name: 'Help Center', href: '/help' },
      { name: 'Contact Support', href: '/contact' },
      { name: 'Terms of Service', href: '/terms' },
      { name: 'Privacy Policy', href: '/privacy' },
      { name: 'Security', href: '/security' },
      { name: 'System Status', href: '/status' },
    ],
  },
};

const socialLinks = [
  { name: 'Twitter', href: 'https://twitter.com/ziontechgroup', icon: Twitter },
  { name: 'LinkedIn', href: 'https://www.linkedin.com/company/zion-marketplace', icon: Linkedin },
  { name: 'Facebook', href: 'https://www.facebook.com/zionmarketplace', icon: Facebook },
  { name: 'Instagram', href: 'https://instagram.com/ziontechgroup', icon: Instagram },
  { name: 'GitHub', href: 'https://github.com/ziontechgroup', icon: Github },
];

const contactInfo = {
  phone: '+1 302 464 0950',
  email: 'kleber@ziontechgroup.com',
  address: '364 E Main St STE 1008 Middletown DE 19709',
  website: 'https://ziontechgroup.com'
};

export function Footer() {
=======
import { FooterNewsletter } from './FooterNewsletter';
import { Logo } from './header/Logo';
import { Facebook, Twitter, Linkedin, Instagram, Mail, Phone, MapPin, ArrowRight, ArrowUp } from 'lucide-react';
import { motion } from 'framer-motion';

export function Footer() {
  const currentYear = new Date().getFullYear();
  
>>>>>>> cursor/expand-services-and-deploy-updates-ea0a
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

<<<<<<< HEAD
  return (
    <footer className="bg-futuristic border-t border-zion-cyan/20 pt-20 pb-8 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-20 w-40 h-40 border border-zion-cyan rounded-full animate-pulse"></div>
        <div className="absolute bottom-32 right-32 w-32 h-32 border border-zion-purple rounded-full animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 w-24 h-24 border border-zion-blue rounded-full animate-pulse delay-2000"></div>
        <div className="absolute top-40 right-40 w-16 h-16 border border-zion-cyan rounded-full animate-pulse delay-3000"></div>
      </div>

      <div className="container-responsive relative z-10">
=======
  const footerSections = [
    {
      title: 'Company',
      links: [
        { name: 'About Us', path: '/about' },
        { name: 'Careers', path: '/careers' },
        { name: 'Partners', path: '/partners' },
        { name: 'Pricing', path: '/pricing' },
        { name: 'Press & Media', path: '/press' },
        { name: 'Contact', path: '/contact' },
      ]
    },
    {
      title: 'Services',
      links: [
        { name: 'AI Services', path: '/services/ai' },
        { name: 'Cloud', path: '/services/cloud' },
        { name: 'Cybersecurity', path: '/services/cybersecurity' },
        { name: 'Infrastructure', path: '/services/infrastructure' },
        { name: 'Consulting', path: '/services/consulting' },
      ]
    },
    {
      title: 'Talent',
      links: [
        { name: 'Browse Talents', path: '/talents' },
        { name: 'Talent Directory', path: '/talent' },
        { name: 'AI Matcher', path: '/match' },
        { name: 'Hire Now', path: '/contact' },
        { name: 'Post a Job', path: '/post-job' },
      ]
    },
    {
      title: 'Resources',
      links: [
        { name: 'Blog', path: '/blog' },
        { name: 'Help Center', path: '/help' },
        { name: 'FAQ', path: '/faq' },
        { name: 'Documentation', path: '/docs' },
        { name: 'API Reference', path: '/api' },
      ]
    },
    {
      title: 'Legal',
      links: [
        { name: 'Privacy Policy', path: '/privacy' },
        { name: 'Terms of Service', path: '/terms' },
        { name: 'Cookie Policy', path: '/cookies' },
        { name: 'GDPR Compliance', path: '/gdpr' },
        { name: 'Accessibility', path: '/accessibility' },
      ]
    }
  ];

  const socialLinks = [
    { name: 'Facebook', icon: Facebook, href: 'https://facebook.com/ziontechgroup' },
    { name: 'Twitter', icon: Twitter, href: 'https://twitter.com/ziontechgroup' },
    { name: 'LinkedIn', icon: Linkedin, href: 'https://linkedin.com/company/ziontechgroup' },
    { name: 'Instagram', icon: Instagram, href: 'https://instagram.com/ziontechgroup' },
  ];

  return (
    <footer className="bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-blue-dark border-t border-zion-blue-light pt-16 pb-8 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-10 left-10 w-32 h-32 border border-zion-cyan rounded-full"></div>
        <div className="absolute bottom-20 right-20 w-24 h-24 border border-zion-purple rounded-full"></div>
        <div className="absolute top-1/2 left-1/2 w-16 h-16 border border-zion-cyan-light rounded-full"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
>>>>>>> cursor/expand-services-and-deploy-updates-ea0a
        {/* Main footer content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8 mb-12">
          {/* Company info */}
          <div className="lg:col-span-2">
<<<<<<< HEAD
            <motion.div 
              className="mb-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-12 h-12 bg-gradient-to-br from-zion-cyan via-zion-purple to-zion-blue rounded-xl flex items-center justify-center">
                  <span className="text-2xl font-bold text-white">Z</span>
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gradient">ZION TECH GROUP</h3>
                  <p className="text-sm text-zion-slate-light">Innovation • Intelligence • Impact</p>
                </div>
              </div>
            </motion.div>
            
            <motion.p 
              className="text-zion-slate-light mb-8 max-w-sm leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              The world's first free marketplace dedicated to high-tech and artificial intelligence.
              Connecting innovators, talent, and cutting-edge technology worldwide.
            </motion.p>

            {/* Contact info */}
            <motion.div 
              className="space-y-4 mb-8"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div className="flex items-center gap-3 text-zion-slate-light hover:text-zion-cyan transition-colors">
                <Phone className="w-4 h-4 text-zion-cyan" />
                <a href={`tel:${contactInfo.phone}`} className="hover:text-zion-cyan">
                  {contactInfo.phone}
                </a>
              </div>
              <div className="flex items-center gap-3 text-zion-slate-light hover:text-zion-cyan transition-colors">
                <Mail className="w-4 h-4 text-zion-cyan" />
                <a href={`mailto:${contactInfo.email}`} className="hover:text-zion-cyan">
                  {contactInfo.email}
                </a>
              </div>
              <div className="flex items-center gap-3 text-zion-slate-light">
                <MapPin className="w-4 h-4 text-zion-cyan" />
                <span>{contactInfo.address}</span>
              </div>
              <div className="flex items-center gap-3 text-zion-slate-light hover:text-zion-cyan transition-colors">
                <Globe className="w-4 h-4 text-zion-cyan" />
                <a href={contactInfo.website} target="_blank" rel="noopener noreferrer" className="hover:text-zion-cyan">
                  {contactInfo.website}
                </a>
              </div>
            </motion.div>

            {/* Social links */}
            <motion.div 
              className="flex space-x-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 text-zion-slate-light hover:text-zion-cyan hover:bg-zion-cyan/10 rounded-lg transition-all duration-300 hover:scale-110"
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </motion.div>
          </div>

          {/* Navigation sections */}
          {Object.entries(footerNavigation).map(([key, section], index) => (
            <motion.div 
              key={key}
              className="space-y-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 + index * 0.1 }}
            >
              <h4 className="text-lg font-semibold text-white flex items-center gap-2">
                {section.title === 'Services' && <Zap className="w-5 h-5 text-zion-cyan" />}
                {section.title === 'Micro SAAS' && <Code className="w-5 h-5 text-zion-purple" />}
                {section.title === 'Marketplace' && <Building className="w-5 h-5 text-zion-blue" />}
                {section.title === 'Company' && <Users className="w-5 h-5 text-zion-cyan" />}
                {section.title === 'Support & Resources' && <Award className="w-5 h-5 text-zion-purple" />}
                {section.title}
              </h4>
              <ul className="space-y-2">
                {section.items.map((item) => (
                  <li key={item.name}>
                    <Link
                      to={item.href}
                      className="text-zion-slate-light hover:text-zion-cyan transition-colors duration-200 flex items-center gap-2 group"
                    >
                      {item.icon && <item.icon className="w-3 h-3 group-hover:text-zion-cyan" />}
                      {item.name}
=======
            <div className="mb-6">
              <Logo />
            </div>
            <p className="text-zion-slate-light mb-6 max-w-sm leading-relaxed">
              Zion Tech Group is a leading technology company providing innovative IT solutions, AI services, and connecting top tech talent with forward-thinking organizations.
            </p>
            
            <div className="space-y-3 mb-6">
              <div className="flex items-center text-zion-slate-light text-sm">
                <MapPin className="h-4 w-4 mr-3 text-zion-cyan" />
                <span>364 E Main St STE 1008 Middletown DE 19709</span>
              </div>
              <div className="flex items-center text-zion-slate-light text-sm">
                <Phone className="h-4 w-4 mr-3 text-zion-cyan" />
                <span>+1 302 464 0950</span>
              </div>
              <div className="flex items-center text-zion-slate-light text-sm">
                <Mail className="h-4 w-4 mr-3 text-zion-cyan" />
                <span>kleber@ziontechgroup.com</span>
              </div>
            </div>

            <div>
              <h4 className="text-sm font-semibold text-white mb-3">Follow Us</h4>
              <div className="flex space-x-4">
                {socialLinks.map((social) => (
                  <a
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 bg-zion-blue-light rounded-lg flex items-center justify-center text-zion-slate-light hover:bg-zion-cyan hover:text-white transition-colors"
                    aria-label={social.name}
                  >
                    <social.icon className="h-5 w-5" />
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Footer sections */}
          {footerSections.map((section) => (
            <div key={section.title}>
              <h3 className="text-lg font-semibold text-white mb-4">{section.title}</h3>
              <ul className="space-y-2">
                {section.links.map((link) => (
                  <li key={link.name}>
                    <Link
                      to={link.path}
                      className="text-zion-slate-light hover:text-zion-cyan transition-colors text-sm flex items-center group"
                    >
                      <ArrowRight className="h-3 w-3 mr-2 opacity-0 group-hover:opacity-100 transition-opacity" />
                      {link.name}
>>>>>>> cursor/expand-services-and-deploy-updates-ea0a
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

<<<<<<< HEAD
        {/* Bottom section */}
        <motion.div 
          className="pt-8 border-t border-zion-cyan/20 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <div className="flex items-center space-x-4 text-zion-slate-light text-sm">
            <span>&copy; 2025 Zion Tech Group. All rights reserved.</span>
            <span className="hidden sm:inline">•</span>
            <span className="hidden sm:inline">Made with <Heart className="w-4 h-4 inline text-zion-cyan" /> for innovation</span>
          </div>
          
          <div className="flex items-center space-x-4">
            <Link to="/privacy" className="text-zion-slate-light hover:text-zion-cyan transition-colors text-sm">
              Privacy Policy
            </Link>
            <span className="text-zion-slate-light">•</span>
            <Link to="/terms" className="text-zion-slate-light hover:text-zion-cyan transition-colors text-sm">
              Terms of Service
            </Link>
            <span className="text-zion-slate-light">•</span>
            <Link to="/cookies" className="text-zion-slate-light hover:text-zion-cyan transition-colors text-sm">
              Cookies
            </Link>
          </div>
        </motion.div>

        {/* Scroll to top button */}
        <motion.button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 p-3 bg-gradient-to-r from-zion-cyan to-zion-purple text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 z-50"
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 1 }}
          whileHover={{ y: -5 }}
        >
          <ArrowUp className="w-5 h-5" />
        </motion.button>
      </div>
=======
        {/* Newsletter section */}
        <div className="mb-12 pt-8 border-t border-zion-blue-light">
          <div className="max-w-2xl">
            <h3 className="text-xl font-semibold text-white mb-2">
              Stay Updated with Zion Tech Group
            </h3>
            <p className="text-zion-slate-light text-sm mb-6">
              Get the latest insights on technology trends, industry news, and exclusive updates delivered to your inbox.
            </p>
            <FooterNewsletter />
          </div>
        </div>
      </div>

      {/* Bottom footer */}
      <div className="border-t border-zion-blue-light">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-zion-slate-light text-sm">
              © {currentYear} Zion Tech Group. All rights reserved.
            </div>
            <div className="flex items-center space-x-6 text-sm text-zion-slate-light">
              <Link to="/sitemap" className="hover:text-zion-cyan transition-colors">
                Sitemap
              </Link>
              <Link to="/accessibility" className="hover:text-zion-cyan transition-colors">
                Accessibility
              </Link>
              <Link to="/support" className="hover:text-zion-cyan transition-colors">
                Support
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll to top button */}
      <motion.button
        onClick={scrollToTop}
        className="fixed bottom-6 right-6 w-12 h-12 bg-zion-cyan text-white rounded-full shadow-lg hover:bg-zion-cyan-light transition-colors flex items-center justify-center"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        aria-label="Scroll to top"
      >
        <ArrowUp className="h-5 w-5" />
      </motion.button>
>>>>>>> cursor/expand-services-and-deploy-updates-ea0a
    </footer>
  );
}
