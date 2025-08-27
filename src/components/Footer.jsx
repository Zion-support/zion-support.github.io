import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  MapPin, 
  Phone, 
  Mail, 
  Twitter, 
  Linkedin, 
  Facebook, 
  Instagram, 
  Github, 
  Heart, 
  ArrowUp,
  Send,
  CheckCircle
} from 'lucide-react';
export function FooterNewsletter() {
  const [email, setEmail] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const handleSubscribe = async (e) => {
    e.preventDefault();
    if (!email) return;
    setIsLoading(true);
    // Simulate API call
    setTimeout(() => {
      setIsSubscribed(true);
      setIsLoading(false);
      setEmail('');
      // Reset after 5 seconds
      setTimeout(() => setIsSubscribed(false), 5000);
    }, 1000);
  };
  return (
    <div className="bg-zion-blue-dark/30 p-6 rounded-xl border border-zion-cyan/20">
      <h3 className="text-xl font-semibold text-white mb-4">Stay Updated</h3>
      <p className="text-zion-slate-light mb-4 text-sm">
        Get the latest insights on AI, cybersecurity, and technology trends delivered to your inbox.
      </p>
      
      {isSubscribed ? (
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          className="flex items-center gap-3 p-3 bg-green-500/20 border border-green-500/30 rounded-lg"
        >
          <CheckCircle className="w-5 h-5 text-green-400" />
          <span className="text-green-400 text-sm">Successfully subscribed!</span>
        </motion.div>
      ) : (
        <form onSubmit={handleSubscribe} className="flex gap-2">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
            className="flex-1 px-3 py-2 bg-zion-slate-dark/50 border border-zion-cyan/20 rounded-lg text-white placeholder-zion-slate-light focus:outline-none focus:ring-2 focus:ring-zion-cyan focus:border-transparent text-sm"
            required
          />
          <motion.button
            type="submit"
            disabled={isLoading}
            className="px-4 py-2 bg-zion-cyan text-white rounded-lg hover:bg-zion-cyan/80 transition-colors disabled:opacity-50"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            {isLoading ? (
              <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
            ) : (
              <Send className="w-4 h-4" />
            )}
          </motion.button>
        </form>
      )}
    </div>
  );
}
export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };
  const footerSections = [
    {
      title: "Company",
      links: [
        { label: "About Us", path: "/about" },
        { label: "Our Team", path: "/team" },
        { label: "Careers", path: "/careers" },
        { label: "Partners", path: "/partners" },
        { label: "Press", path: "/press" }
      ]
    },
    {
      title: "Services",
      links: [
        { label: "AI & Analytics", path: "/services/ai" },
        { label: "Cybersecurity", path: "/services/cybersecurity" },
        { label: "Cloud Solutions", path: "/services/cloud" },
        { label: "IT Consulting", path: "/services/consulting" },
        { label: "Quantum Technology", path: "/quantum-technology" },
        { label: "Blockchain", path: "/blockchain-services" },
        { label: "Digital Transformation", path: "/digital-transformation" },
        { label: "Micro SAAS", path: "/micro-saas" },
        { label: "Enterprise", path: "/enterprise" }
      ]
    },
    {
      title: "Resources",
      links: [
        { label: "Blog", path: "/blog" },
        { label: "Case Studies", path: "/case-studies" },
        { label: "Events", path: "/events" },
        { label: "Webinars", path: "/webinars" },
        { label: "White Papers", path: "/white-papers" },
        { label: "Tutorials", path: "/tutorials" },
        { label: "Documentation", path: "/docs" },
        { label: "FAQ", path: "/faq" },
        { label: "Support", path: "/support" }
      ]
    },
    {
      title: "Legal",
      links: [
        { label: "Privacy Policy", path: "/privacy" },
        { label: "Terms of Service", path: "/terms" },
        { label: "Cookie Policy", path: "/cookies" },
        { label: "GDPR", path: "/gdpr" }
      ]
    }
  ];
  const socialLinks = [
    { icon: <Twitter className="h-5 w-5" />, href: "https://twitter.com/ziontechgroup", label: "Twitter" },
    { icon: <Linkedin className="h-5 w-5" />, href: "https://www.linkedin.com/company/zion-tech-group", label: "LinkedIn" },
    { icon: <Facebook className="h-5 w-5" />, href: "https://www.facebook.com/ziontechgroup", label: "Facebook" },
    { icon: <Instagram className="h-5 w-5" />, href: "https://www.instagram.com/ziontechgroup", label: "Instagram" },
    { icon: <Github className="h-5 w-5" />, href: "https://github.com/ziontechgroup", label: "GitHub" }
  ];
  return (
    <footer className="bg-zion-blue text-white relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-10 left-10 w-32 h-32 border border-zion-cyan rounded-full"></div>
        <div className="absolute bottom-20 right-20 w-24 h-24 border border-zion-purple rounded-full"></div>
        <div className="absolute top-1/2 left-1/2 w-16 h-16 border border-zion-cyan-light rounded-full"></div>
      </div>
      <div className="relative z-10 container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8 mb-12">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <motion.div 
              className="mb-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h3 className="text-2xl font-bold mb-4 bg-gradient-to-r from-zion-cyan to-zion-purple bg-clip-text text-transparent">
                Zion Tech Group
              </h3>
              <p className="text-zion-slate-light mb-6 leading-relaxed">
                The world's first free marketplace dedicated to high-tech and artificial intelligence. 
                Connecting talented professionals with innovative companies.
              </p>
              
              {/* Contact Info */}
              <div className="space-y-3 mb-6">
                <div className="flex items-center gap-3 text-zion-slate-light">
                  <Phone className="w-4 h-4 text-zion-cyan"/>
                  <span className="text-sm">+1 302 464 0950</span>
                </div>
                <div className="flex items-center gap-3 text-zion-slate-light">
                  <Mail className="w-4 h-4 text-zion-cyan"/>
                  <span className="text-sm">kleber@ziontechgroup.com</span>
                </div>
                <div className="flex items-center gap-3 text-zion-slate-light">
                  <MapPin className="w-4 h-4 text-zion-cyan"/>
                  <span className="text-sm">364 E Main St STE 1008, Middletown DE 19709</span>
                </div>
              </div>
              {/* Social media */}
              <div className="flex space-x-4">
                {socialLinks.map((social, index) => (
                  <motion.a 
                    key={index}
                    href={social.href} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="text-zion-slate-light hover:text-zion-cyan transition-colors p-2 hover:bg-zion-cyan/10 rounded-full" 
                    aria-label={social.label} 
                    title={social.label} 
                    whileHover={{ scale: 1.1 }} 
                    whileTap={{ scale: 0.95 }}
                  >
                    {social.icon}
                  </motion.a>
                ))}
              </div>
            </motion.div>
          </div>
          {/* Footer Sections */}
          {footerSections.map((section, sectionIndex) => (
            <motion.div
              key={section.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: sectionIndex * 0.1 }}
              viewport={{ once: true }}
            >
              <h4 className="text-lg font-semibold text-white mb-4">{section.title}</h4>
              <ul className="space-y-2">
                {section.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <Link 
                      to={link.path} 
                      className="text-zion-slate-light hover:text-zion-cyan transition-colors duration-200 text-sm"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
        {/* Newsletter Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <FooterNewsletter />
        </motion.div>
        {/* Bottom Section */}
        <div className="border-t border-zion-cyan/20 pt-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-2 text-zion-slate-light text-sm">
              <span>© 2024 Zion Tech Group. All rights reserved.</span>
              <Heart className="w-4 h-4 text-red-400 animate-pulse" />
            </div>
            
            <div className="flex items-center gap-6 text-sm">
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
          </div>
        </div>
      </div>
      {/* Scroll to Top Button */}
      <motion.button
        onClick={scrollToTop}
        className="fixed bottom-6 right-6 bg-gradient-to-r from-zion-cyan to-zion-purple text-white p-3 rounded-full shadow-2xl hover:shadow-zion-cyan/25 transition-all duration-300 z-40"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 1 }}
      >
        <ArrowUp className="w-5 h-5" />
      </motion.button>
    </footer>
  );
}
