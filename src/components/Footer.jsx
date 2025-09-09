import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  MapPin, 
  Mail, 
  Phone, 
  Twitter, 
  Linkedin, 
  Facebook, 
  Instagram, 
  Github, 
  Heart, 
  ArrowUp,
  Globe,
  Shield,
  Brain,
  Cloud,
  Zap,
  Users,
  Award,
  Clock
} from 'lucide-react';

export const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const footerSections = [
    {
      title: 'Services',
      links: [
        { name: 'AI & Machine Learning', href: '/services#ai' },
        { name: 'Cybersecurity', href: '/services#security' },
        { name: 'Cloud Solutions', href: '/services#cloud' },
        { name: 'Digital Transformation', href: '/services#digital' },
        { name: 'IoT & Smart Solutions', href: '/services#iot' },
        { name: 'Blockchain & Web3', href: '/services#blockchain' }
      ]
    },
    {
      title: 'Company',
      links: [
        { label: "All Services", path: "/services" },
        { label: "Enhanced Services", path: "/enhanced-services" },
        { label: "AI & Analytics", path: "/services#ai" },
        { label: "Cybersecurity", path: "/services#cybersecurity" },
        { label: "Cloud Solutions", path: "/services#cloud" },
        { label: "IT Consulting", path: "/services#consulting" }
      ]
    },
    {
      title: 'Resources',
      links: [
        { name: 'Documentation', href: '/docs' },
        { name: 'API Reference', href: '/api' },
        { name: 'Developer Portal', href: '/developer' },
        { name: 'Blog', href: '/blog' },
        { name: 'Webinars', href: '/webinars' },
        { name: 'Support Center', href: '/support' }
      ]
    },
    {
      title: 'Legal',
      links: [
        { name: 'Privacy Policy', href: '/privacy' },
        { name: 'Terms of Service', href: '/terms' },
        { name: 'Cookie Policy', href: '/cookies' },
        { name: 'GDPR Compliance', href: '/gdpr' },
        { name: 'Security', href: '/security' },
        { name: 'Compliance', href: '/compliance' }
      ]
    }
  ];

  const stats = [
    { number: '500+', label: 'Happy Clients', icon: Users },
    { number: '15+', label: 'Years Experience', icon: Award },
    { number: '99.9%', label: 'Uptime SLA', icon: Shield },
    { number: '24/7', label: 'Support', icon: Clock }
  ];

  const socialLinks = [
    { name: 'Twitter', href: 'https://twitter.com/ziontechgroup', icon: Twitter, color: 'hover:text-blue-400' },
    { name: 'LinkedIn', href: 'https://www.linkedin.com/company/zion-tech-group', icon: Linkedin, color: 'hover:text-blue-600' },
    { name: 'Facebook', href: 'https://www.facebook.com/ziontechgroup', icon: Facebook, color: 'hover:text-blue-500' },
    { name: 'Instagram', href: 'https://www.instagram.com/ziontechgroup', icon: Instagram, color: 'hover:text-pink-500' },
    { name: 'GitHub', href: 'https://github.com/ziontechgroup', icon: Github, color: 'hover:text-gray-400' }
  ];

  return (
    <footer className="bg-zion-blue text-white relative overflow-hidden">
      {/* Enhanced Background decorative elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 w-32 h-32 border border-zion-cyan rounded-full animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-24 h-24 border border-zion-purple rounded-full animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 w-16 h-16 border border-zion-cyan-light rounded-full animate-pulse delay-2000"></div>
        <div className="absolute top-1/4 right-1/4 w-20 h-20 border border-zion-blue rounded-full animate-pulse delay-1500"></div>
        <div className="absolute bottom-1/3 left-1/3 w-28 h-28 border border-zion-purple-light rounded-full animate-pulse delay-500"></div>
      </div>
      
      {/* Grid Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(34,221,210,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(34,221,210,0.05)_1px,transparent_1px)] bg-[size:100px_100px]"></div>

      <div className="relative z-10 container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <motion.div 
              className="mb-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h3 className="text-2xl font-bold mb-4 bg-gradient-to-r from-zion-cyan to-zion-purple bg-clip-text text-transparent">
                Zion Tech Group
              </h3>
              <p className="text-zion-slate-light mb-6 leading-relaxed">
                The world's first free marketplace dedicated to high-tech and artificial intelligence. 
                Connecting talented professionals with innovative companies.
              </p>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  className="text-center"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <div className="w-16 h-16 bg-gradient-to-r from-zion-cyan to-zion-purple rounded-full flex items-center justify-center mx-auto mb-4">
                    <stat.icon className="w-8 h-8 text-white" />
                  </div>
                  <div className="text-2xl md:text-3xl font-bold text-white mb-2">{stat.number}</div>
                  <div className="text-zion-slate-light text-sm">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Newsletter Section */}
          <motion.div 
            className="mt-16 pt-16 border-t border-zion-cyan/20"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <FooterNewsletter />
          </motion.div>
        </div>

        {/* Bottom Footer */}
        <div className="border-t border-zion-cyan/20">
          <div className="container mx-auto px-4 py-8">
            <div className="flex flex-col md:flex-row items-center justify-between gap-4">
              <div className="flex items-center space-x-2 text-zion-slate-light text-sm">
                <span>© 2024 Zion Tech Group. All rights reserved.</span>
                <span className="hidden sm:inline">•</span>
                <span className="hidden sm:inline">Made with</span>
                <Heart className="w-4 h-4 text-red-400 hidden sm:inline" />
                <span className="hidden sm:inline">for innovation</span>
              </div>
              
              <div className="flex items-center space-x-6 text-sm">
                <Link to="/privacy" className="text-zion-slate-light hover:text-zion-cyan transition-colors">
                  Privacy Policy
                </Link>
                <Link to="/terms" className="text-zion-slate-light hover:text-zion-cyan transition-colors">
                  Terms of Service
                </Link>
                <Link to="/cookies" className="text-zion-slate-light hover:text-zion-cyan transition-colors">
                  Cookie Policy
                </Link>
              </div>

              {/* Social media */}
              <div className="flex space-x-4">
                <motion.a 
                  href="https://twitter.com/ziontechgroup" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-zion-slate-light hover:text-zion-cyan transition-colors p-2 hover:bg-zion-cyan/10 rounded-full" 
                  aria-label="Twitter" 
                  title="Twitter" 
                  whileHover={{ scale: 1.1 }} 
                  whileTap={{ scale: 0.95 }}
                >
                  <Twitter className="h-5 w-5" aria-label="Twitter"/>
                </motion.a>
                <motion.a 
                  href="https://www.linkedin.com/company/zion-tech-group" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-zion-slate-light hover:text-zion-cyan transition-colors p-2 hover:bg-zion-cyan/10 rounded-full" 
                  aria-label="LinkedIn" 
                  title="LinkedIn" 
                  whileHover={{ scale: 1.1 }} 
                  whileTap={{ scale: 0.95 }}
                >
                  <Linkedin className="h-5 w-5" aria-label="LinkedIn"/>
                </motion.a>
                <motion.a 
                  href="https://www.facebook.com/ziontechgroup" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-zion-slate-light hover:text-zion-cyan transition-colors p-2 hover:bg-zion-cyan/10 rounded-full" 
                  aria-label="Facebook" 
                  title="Facebook" 
                  whileHover={{ scale: 1.1 }} 
                  whileTap={{ scale: 0.95 }}
                >
                  <Facebook className="h-5 w-5" aria-label="Facebook"/>
                </motion.a>
                <motion.a 
                  href="https://instagram.com/ziontechgroup" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-zion-slate-light hover:text-zion-cyan transition-colors p-2 hover:bg-zion-cyan/10 rounded-full" 
                  aria-label="Instagram" 
                  title="Instagram" 
                  whileHover={{ scale: 1.1 }} 
                  whileTap={{ scale: 0.95 }}
                >
                  <Instagram className="h-5 w-5" aria-label="Instagram"/>
                </motion.a>
                <motion.a 
                  href="https://github.com/ziontechgroup" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-zion-slate-light hover:text-zion-cyan transition-colors p-2 hover:bg-zion-cyan/10 rounded-full" 
                  aria-label="GitHub" 
                  title="GitHub" 
                  whileHover={{ scale: 1.1 }} 
                  whileTap={{ scale: 0.95 }}
                >
                  <Github className="h-5 w-5" aria-label="GitHub"/>
                </motion.a>
              </div>
            </motion.div>
          </div>

          {/* Marketplace */}
          <div>
            <h3 className="text-white font-semibold mb-4 text-lg">Marketplace</h3>
            <ul className="space-y-3">
              <li><Link to="/marketplace" className="text-zion-slate-light hover:text-zion-cyan transition-colors text-sm hover:translate-x-1 inline-block">Products</Link></li>
              <li><Link to="/services" className="text-zion-slate-light hover:text-zion-cyan transition-colors text-sm hover:translate-x-1 inline-block">Services</Link></li>
              <li><Link to="/talent" className="text-zion-slate-light hover:text-zion-cyan transition-colors text-sm hover:translate-x-1 inline-block">Talent</Link></li>
              <li><Link to="/equipment" className="text-zion-slate-light hover:text-zion-cyan transition-colors text-sm hover:translate-x-1 inline-block">Equipment</Link></li>
              <li><Link to="/categories" className="text-zion-slate-light hover:text-zion-cyan transition-colors text-sm hover:translate-x-1 inline-block">Categories</Link></li>
              <li><Link to="/green-it" className="text-zion-slate-light hover:text-zion-cyan transition-colors text-sm hover:translate-x-1 inline-block">Green IT</Link></li>
              <li><Link to="/it-onsite-services" className="text-zion-slate-light hover:text-zion-cyan transition-colors text-sm hover:translate-x-1 inline-block">IT Onsite Services</Link></li>
            </ul>
          </div>

          {/* Technology Solutions */}
          <div>
            <h3 className="text-white font-semibold mb-4 text-lg">Technology Solutions</h3>
            <ul className="space-y-3">
              <li><Link to="/ai-solutions" className="text-zion-slate-light hover:text-zion-cyan transition-colors text-sm hover:translate-x-1 inline-block">AI & Machine Learning</Link></li>
              <li><Link to="/cybersecurity" className="text-zion-slate-light hover:text-zion-cyan transition-colors text-sm hover:translate-x-1 inline-block">Cybersecurity</Link></li>
              <li><Link to="/cloud-solutions" className="text-zion-slate-light hover:text-zion-cyan transition-colors text-sm hover:translate-x-1 inline-block">Cloud & Infrastructure</Link></li>
              <li><Link to="/blockchain" className="text-zion-slate-light hover:text-zion-cyan transition-colors text-sm hover:translate-x-1 inline-block">Blockchain & DeFi</Link></li>
              <li><Link to="/quantum-computing" className="text-zion-slate-light hover:text-zion-cyan transition-colors text-sm hover:translate-x-1 inline-block">Quantum Computing</Link></li>
              <li><Link to="/iot-solutions" className="text-zion-slate-light hover:text-zion-cyan transition-colors text-sm hover:translate-x-1 inline-block">IoT & Edge Computing</Link></li>
              <li><Link to="/digital-transformation" className="text-zion-slate-light hover:text-zion-cyan transition-colors text-sm hover:translate-x-1 inline-block">Digital Transformation</Link></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-white font-semibold mb-4 text-lg">Company</h3>
            <ul className="space-y-3">
              <li><Link to="/about" className="text-zion-slate-light hover:text-zion-cyan transition-colors text-sm hover:translate-x-1 inline-block">About Us</Link></li>
              <li><Link to="/blog" className="text-zion-slate-light hover:text-zion-cyan transition-colors text-sm hover:translate-x-1 inline-block">Blog</Link></li>
              <li><Link to="/partners" className="text-zion-slate-light hover:text-zion-cyan transition-colors text-sm hover:translate-x-1 inline-block">Partners</Link></li>
              <li><Link to="/careers" className="text-zion-slate-light hover:text-zion-cyan transition-colors text-sm hover:translate-x-1 inline-block">Careers</Link></li>
              <li><Link to="/contact" className="text-zion-slate-light hover:text-zion-cyan transition-colors text-sm hover:translate-x-1 inline-block">Contact</Link></li>
              <li><Link to="/faq" className="text-zion-slate-light hover:text-zion-cyan transition-colors text-sm hover:translate-x-1 inline-block">FAQ</Link></li>
              <li><Link to="/sitemap" className="text-zion-slate-light hover:text-zion-cyan transition-colors text-sm hover:translate-x-1 inline-block">Sitemap</Link></li>
            </ul>
          </div>

          {/* Support & Resources */}
          <div>
            <h3 className="text-white font-semibold mb-4 text-lg">Support & Resources</h3>
            <ul className="space-y-3 mb-6">
              <li><Link to="/help" className="text-zion-slate-light hover:text-zion-cyan transition-colors text-sm hover:translate-x-1 inline-block">Help Center</Link></li>
              <li><Link to="/faq" className="text-zion-slate-light hover:text-zion-cyan transition-colors text-sm hover:translate-x-1 inline-block">FAQ</Link></li>
              <li><Link to="/contact" className="text-zion-slate-light hover:text-zion-cyan transition-colors text-sm hover:translate-x-1 inline-block">Contact Support</Link></li>
              <li><Link to="/terms" className="text-zion-slate-light hover:text-zion-cyan transition-colors text-sm hover:translate-x-1 inline-block">Terms of Service</Link></li>
              <li><Link to="/privacy" className="text-zion-slate-light hover:text-zion-cyan transition-colors text-sm hover:translate-x-1 inline-block">Privacy Policy</Link></li>
              <li><Link to="/security" className="text-zion-slate-light hover:text-zion-cyan transition-colors text-sm hover:translate-x-1 inline-block">Security</Link></li>
              <li><Link to="/status" className="text-zion-slate-light hover:text-zion-cyan transition-colors text-sm hover:translate-x-1 inline-block">System Status</Link></li>
            </ul>
            
            {/* Newsletter */}
            <div>
              <h3 className="text-white font-semibold mb-4 text-lg">Stay Updated</h3>
              <p className="text-zion-slate-light mb-4 text-sm leading-relaxed">
                Get the latest news on tech, AI, and marketplace opportunities delivered to your inbox.
              </p>
              <FooterNewsletter />
            </div>
          </div>
        </div>
      </div>

      {/* Scroll to Top Button */}
      <motion.button
        onClick={scrollToTop}
        className="fixed bottom-6 right-6 lg:bottom-8 lg:right-8 bg-gradient-to-r from-zion-cyan to-zion-purple text-white p-3 rounded-full shadow-lg hover:shadow-zion-cyan/25 transition-all duration-300 z-40 group"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 1 }}
      >
        <ArrowUp className="w-5 h-5 group-hover:-translate-y-0.5 transition-transform" />
      </motion.button>
    </footer>
  );
};
