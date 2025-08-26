import React from 'react';
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
  Globe,
  Shield,
  Zap,
  Brain,
  Rocket,
  Cloud,
  Users,
  Building,
  Award,
  Star
} from 'lucide-react';
import { FooterNewsletter } from './FooterNewsletter';

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const footerSections = [
    {
      title: "Marketplace",
      icon: <Globe className="w-5 h-5" />,
      links: [
        { name: "Products", path: "/marketplace/products" },
        { name: "Services", path: "/services" },
        { name: "Talent", path: "/talent" },
        { name: "Equipment", path: "/equipment" },
        { name: "Categories", path: "/categories" },
        { name: "Green IT", path: "/green-it" },
        { name: "IT Onsite Services", path: "/it-onsite-services" },
        { name: "AI Solutions", path: "/ai-solutions" },
        { name: "Blockchain Services", path: "/blockchain-services" },
        { name: "Quantum Computing", path: "/quantum-computing" }
      ]
    },
    {
      title: "Company",
      icon: <Building className="w-5 h-5" />,
      links: [
        { name: "About Us", path: "/about" },
        { name: "Our Mission", path: "/mission" },
        { name: "Leadership", path: "/leadership" },
        { name: "Blog", path: "/blog" },
        { name: "Partners", path: "/partners" },
        { name: "Careers", path: "/careers" },
        { name: "Press", path: "/press" },
        { name: "Contact", path: "/contact" },
        { name: "FAQ", path: "/faq" },
        { name: "Sitemap", path: "/sitemap" }
      ]
    },
    {
      title: "Solutions",
      icon: <Zap className="w-5 h-5" />,
      links: [
        { name: "AI & Machine Learning", path: "/solutions/ai-ml" },
        { name: "Cybersecurity", path: "/solutions/cybersecurity" },
        { name: "Cloud Infrastructure", path: "/solutions/cloud" },
        { name: "Blockchain & Web3", path: "/solutions/blockchain" },
        { name: "Quantum Computing", path: "/solutions/quantum" },
        { name: "IoT & Edge", path: "/solutions/iot" },
        { name: "Robotics & Automation", path: "/solutions/robotics" },
        { name: "AR/VR", path: "/solutions/ar-vr" },
        { name: "Sustainability", path: "/solutions/sustainability" },
        { name: "Smart Cities", path: "/solutions/smart-cities" }
      ]
    },
    {
      title: "Support & Resources",
      icon: <Users className="w-5 h-5" />,
      links: [
        { name: "Help Center", path: "/help" },
        { name: "Documentation", path: "/docs" },
        { name: "API Reference", path: "/api" },
        { name: "Developer Portal", path: "/developers" },
        { name: "Training", path: "/training" },
        { name: "Webinars", path: "/webinars" },
        { name: "Community", path: "/community" },
        { name: "Contact Support", path: "/support" },
        { name: "System Status", path: "/status" },
        { name: "Security", path: "/security" }
      ]
    }
  ];

  return (
    <footer className="bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark text-white relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 w-32 h-32 border border-zion-cyan rounded-full animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-24 h-24 border border-zion-purple rounded-full animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 w-16 h-16 border border-zion-cyan-light rounded-full animate-pulse delay-2000"></div>
        <div className="absolute top-1/4 right-1/4 w-20 h-20 border border-zion-purple rounded-full animate-pulse delay-1500"></div>
      </div>

      <div className="relative z-10 container mx-auto px-4 py-20">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-12 mb-16">
          {/* Company Info - Spans 2 columns */}
          <div className="lg:col-span-2">
            <motion.div 
              className="mb-8"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-gradient-to-r from-zion-cyan to-zion-purple rounded-xl flex items-center justify-center">
                  <span className="text-white font-bold text-xl">Z</span>
                </div>
                <div>
                  <h3 className="text-2xl font-bold bg-gradient-to-r from-zion-cyan to-zion-purple bg-clip-text text-transparent">
                    Zion Tech Group
                  </h3>
                  <p className="text-sm text-zion-slate-light">Innovation • Technology • Future</p>
                </div>
              </div>
              
              <p className="text-zion-slate-light mb-8 leading-relaxed text-lg">
                The world's first free marketplace dedicated to high-tech and artificial intelligence. 
                Connecting talented professionals with innovative companies to build the future together.
              </p>
              
              {/* Contact Info */}
              <div className="space-y-4 mb-8">
                <motion.div 
                  className="flex items-center gap-3 text-zion-slate-light hover:text-zion-cyan transition-colors duration-300"
                  whileHover={{ x: 5 }}
                >
                  <Phone className="w-5 h-5 text-zion-cyan"/>
                  <span className="text-sm">+1 302 464 0950</span>
                </motion.div>
                <motion.div 
                  className="flex items-center gap-3 text-zion-slate-light hover:text-zion-cyan transition-colors duration-300"
                  whileHover={{ x: 5 }}
                >
                  <Mail className="w-5 h-5 text-zion-cyan"/>
                  <span className="text-sm">kleber@ziontechgroup.com</span>
                </motion.div>
                <motion.div 
                  className="flex items-center gap-3 text-zion-slate-light hover:text-zion-cyan transition-colors duration-300"
                  whileHover={{ x: 5 }}
                >
                  <MapPin className="w-5 h-5 text-zion-cyan"/>
                  <span className="text-sm">364 E Main St STE 1008, Middletown DE 19709</span>
                </motion.div>
              </div>

              {/* Social media */}
              <div className="flex space-x-4">
                {[
                  { href: "https://twitter.com/ziontechgroup", icon: <Twitter className="h-5 w-5" />, label: "Twitter" },
                  { href: "https://www.linkedin.com/company/zion-tech-group", icon: <Linkedin className="h-5 w-5" />, label: "LinkedIn" },
                  { href: "https://www.facebook.com/ziontechgroup", icon: <Facebook className="h-5 w-5" />, label: "Facebook" },
                  { href: "https://instagram.com/ziontechgroup", icon: <Instagram className="h-5 w-5" />, label: "Instagram" },
                  { href: "https://github.com/ziontechgroup", icon: <Github className="h-5 w-5" />, label: "GitHub" }
                ].map((social, index) => (
                  <motion.a 
                    key={social.label}
                    href={social.href} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="text-zion-slate-light hover:text-zion-cyan transition-colors p-3 hover:bg-zion-cyan/10 rounded-xl hover:scale-110 transition-all duration-300" 
                    aria-label={social.label} 
                    title={social.label} 
                    whileHover={{ scale: 1.1, y: -2 }} 
                    whileTap={{ scale: 0.95 }}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
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
            >
              <div className="flex items-center gap-2 mb-6">
                <div className="text-zion-cyan">
                  {section.icon}
                </div>
                <h3 className="text-white font-semibold text-lg">{section.title}</h3>
              </div>
              <ul className="space-y-3">
                {section.links.map((link, linkIndex) => (
                  <motion.li
                    key={link.name}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4, delay: (sectionIndex * 0.1) + (linkIndex * 0.05) }}
                  >
                    <Link 
                      to={link.path} 
                      className="text-zion-slate-light hover:text-zion-cyan transition-colors text-sm hover:translate-x-1 inline-block duration-300 group"
                    >
                      <span className="group-hover:text-zion-cyan transition-colors duration-300">
                        {link.name}
                      </span>
                    </Link>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Newsletter Section */}
        <motion.div
          className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 mb-16 border border-white/10"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="text-center max-w-2xl mx-auto">
            <div className="flex items-center justify-center gap-3 mb-4">
              <Star className="w-8 h-8 text-zion-cyan" />
              <h3 className="text-2xl font-bold text-white">Stay Updated</h3>
              <Star className="w-8 h-8 text-zion-cyan" />
            </div>
            <p className="text-zion-slate-light mb-6 text-lg leading-relaxed">
              Get the latest news on tech, AI, blockchain, quantum computing, and marketplace opportunities delivered to your inbox.
            </p>
            <FooterNewsletter />
          </div>
        </motion.div>

        {/* Bottom section */}
        <div className="pt-8 border-t border-zion-cyan/20">
          <div className="flex flex-col lg:flex-row justify-between items-center gap-6">
            <div className="flex flex-col lg:flex-row items-center gap-6">
              <motion.p 
                className="text-zion-slate-light text-sm text-center lg:text-left"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
              >
                &copy; {new Date().getFullYear()} Zion Tech Group. All rights reserved.
              </motion.p>
              <motion.div 
                className="flex items-center gap-2 text-zion-cyan/80"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <div className="w-2 h-2 bg-zion-cyan rounded-full animate-pulse"></div>
                <span className="text-xs font-medium">Live & Secure</span>
                <div className="w-2 h-2 bg-zion-cyan rounded-full animate-pulse delay-500"></div>
              </motion.div>
            </div>
            
            <motion.div 
              className="flex items-center gap-6 text-sm"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              {[
                { name: "Privacy Policy", path: "/privacy" },
                { name: "Terms of Service", path: "/terms" },
                { name: "Cookies", path: "/cookies" },
                { name: "Accessibility", path: "/accessibility" }
              ].map((link, index) => (
                <Link 
                  key={link.name}
                  to={link.path} 
                  className="text-zion-slate-light hover:text-zion-cyan text-sm transition-colors duration-300 hover:scale-105"
                >
                  {link.name}
                </Link>
              ))}
            </motion.div>
            
            <motion.div 
              className="flex items-center space-x-2 text-zion-slate-light text-sm" 
              whileHover={{ scale: 1.05 }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <span>Made with</span>
              <Heart className="w-4 h-4 text-red-400 animate-pulse"/>
              <span>for the future of technology</span>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Scroll to top button */}
      <motion.button
        onClick={scrollToTop}
        className="fixed bottom-6 right-6 bg-gradient-to-r from-zion-cyan to-zion-purple text-white p-4 rounded-full shadow-2xl hover:shadow-zion-cyan/25 transition-all duration-300 z-40 group"
        whileHover={{ scale: 1.1, y: -5 }}
        whileTap={{ scale: 0.95 }}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1 }}
      >
        <ArrowUp className="w-5 h-5 group-hover:-translate-y-1 transition-transform duration-300"/>
      </motion.button>
    </footer>
  );
}
