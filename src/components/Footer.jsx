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
  Sparkles,
  Star,
  Shield,
  Zap,
  Brain,
  Lock,
  Cpu,
  Rocket,
  Users,
  Building,
  ArrowRight,
  Code
} from 'lucide-react';
import { FooterNewsletter } from './FooterNewsletter';

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-zion-slate-dark text-white relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-10 left-10 w-32 h-32 border border-zion-cyan rounded-full"></div>
        <div className="absolute bottom-20 right-20 w-24 h-24 border border-zion-purple rounded-full"></div>
        <div className="absolute top-1/2 left-1/2 w-16 h-16 border border-zion-cyan-light rounded-full"></div>
      </div>

      <div className="relative z-10 container mx-auto px-4 py-16">
        {/* Main Footer Content */}
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
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-gradient-to-r from-zion-cyan to-zion-purple rounded-xl flex items-center justify-center">
                  <Sparkles className="w-7 h-7 text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold bg-gradient-to-r from-zion-cyan to-zion-purple bg-clip-text text-transparent">
                    Zion Tech Group
                  </h3>
                  <p className="text-xs text-zion-slate-light">AI Innovation Lab</p>
                </div>
              </div>
              <p className="text-zion-slate-light mb-6 leading-relaxed">
                The world's leading AI innovation company, pioneering cutting-edge solutions in quantum computing, 
                blockchain integration, and autonomous business operations. We transform businesses through 
                intelligent technology solutions.
              </p>
              
              {/* Contact Info */}
              <div className="space-y-3 mb-6">
                <div className="flex items-center gap-3 text-zion-slate-light hover:text-zion-cyan transition-colors">
                  <Phone className="w-4 h-4 text-zion-cyan"/>
                  <span className="text-sm">+1 302 464 0950</span>
                </div>
                <div className="flex items-center gap-3 text-zion-slate-light hover:text-zion-cyan transition-colors">
                  <Mail className="w-4 h-4 text-zion-cyan"/>
                  <span className="text-sm">kleber@ziontechgroup.com</span>
                </div>
                <div className="flex items-center gap-3 text-zion-slate-light hover:text-zion-cyan transition-colors">
                  <MapPin className="w-4 h-4 text-zion-cyan"/>
                  <span className="text-sm">364 E Main St STE 1008, Middletown DE 19709</span>
                </div>
                <div className="flex items-center gap-3 text-zion-slate-light hover:text-zion-cyan transition-colors">
                  <Globe className="w-4 h-4 text-zion-cyan"/>
                  <span className="text-sm">https://ziontechgroup.com</span>
                </div>
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
                  href="https://www.instagram.com/ziontechgroup" 
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

          {/* AI & Innovation Services */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <h4 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
                <Brain className="w-5 h-5 text-zion-cyan" />
                AI & Innovation
              </h4>
              <ul className="space-y-3">
                <li>
                  <Link to="/services/ai-analytics" className="text-zion-slate-light hover:text-zion-cyan transition-colors text-sm flex items-center gap-2 group">
                    <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
                    AI Analytics Platform
                  </Link>
                </li>
                <li>
                  <Link to="/services/quantum-computing" className="text-zion-slate-light hover:text-zion-cyan transition-colors text-sm flex items-center gap-2 group">
                    <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
                    Quantum Computing
                  </Link>
                </li>
                <li>
                  <Link to="/services/autonomous-business" className="text-zion-slate-light hover:text-zion-cyan transition-colors text-sm flex items-center gap-2 group">
                    <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
                    Autonomous Operations
                  </Link>
                </li>
                <li>
                  <Link to="/services/blockchain-ai" className="text-zion-slate-light hover:text-zion-cyan transition-colors text-sm flex items-center gap-2 group">
                    <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
                    Blockchain AI Integration
                  </Link>
                </li>
                <li>
                  <Link to="/services/digital-twin" className="text-zion-slate-light hover:text-zion-cyan transition-colors text-sm flex items-center gap-2 group">
                    <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
                    Digital Twin Platform
                  </Link>
                </li>
              </ul>
            </motion.div>
          </div>

          {/* Micro SAAS Services */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <h4 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
                <Code className="w-5 h-5 text-zion-purple" />
                Micro SAAS
              </h4>
              <ul className="space-y-3">
                <li>
                  <Link to="/micro-saas/ai-business-intelligence" className="text-zion-slate-light hover:text-zion-cyan transition-colors text-sm flex items-center gap-2 group">
                    <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
                    AI Business Intelligence
                  </Link>
                </li>
                <li>
                  <Link to="/micro-saas/customer-experience" className="text-zion-slate-light hover:text-zion-cyan transition-colors text-sm flex items-center gap-2 group">
                    <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
                    Customer Experience
                  </Link>
                </li>
                <li>
                  <Link to="/micro-saas/content-creation" className="text-zion-slate-light hover:text-zion-cyan transition-colors text-sm flex items-center gap-2 group">
                    <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
                    Content Creation Suite
                  </Link>
                </li>
                <li>
                  <Link to="/micro-saas/hr-platform" className="text-zion-slate-light hover:text-zion-cyan transition-colors text-sm flex items-center gap-2 group">
                    <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
                    HR Management Platform
                  </Link>
                </li>
                <li>
                  <Link to="/micro-saas/financial-analytics" className="text-zion-slate-light hover:text-zion-cyan transition-colors text-sm flex items-center gap-2 group">
                    <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
                    Financial Analytics
                  </Link>
                </li>
              </ul>
            </motion.div>
          </div>

          {/* IT & Security Services */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <h4 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
                <Shield className="w-5 h-5 text-zion-blue" />
                IT & Security
              </h4>
              <ul className="space-y-3">
                <li>
                  <Link to="/services/cybersecurity" className="text-zion-slate-light hover:text-zion-cyan transition-colors text-sm flex items-center gap-2 group">
                    <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
                    Cybersecurity Defense
                  </Link>
                </li>
                <li>
                  <Link to="/services/cloud-devops" className="text-zion-slate-light hover:text-zion-cyan transition-colors text-sm flex items-center gap-2 group">
                    <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
                    Cloud & DevOps
                  </Link>
                </li>
                <li>
                  <Link to="/services/iot-edge" className="text-zion-slate-light hover:text-zion-cyan transition-colors text-sm flex items-center gap-2 group">
                    <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
                    IoT Edge Computing
                  </Link>
                </li>
                <li>
                  <Link to="/services/infrastructure" className="text-zion-slate-light hover:text-zion-cyan transition-colors text-sm flex items-center gap-2 group">
                    <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
                    Infrastructure
                  </Link>
                </li>
                <li>
                  <Link to="/services/consulting" className="text-zion-slate-light hover:text-zion-cyan transition-colors text-sm flex items-center gap-2 group">
                    <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
                    IT Consulting
                  </Link>
                </li>
              </ul>
            </motion.div>
          </div>

          {/* Company & Support */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <h4 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
                <Building className="w-5 h-5 text-zion-cyan" />
                Company
              </h4>
              <ul className="space-y-3">
                <li>
                  <Link to="/about" className="text-zion-slate-light hover:text-zion-cyan transition-colors text-sm flex items-center gap-2 group">
                    <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
                    About Us
                  </Link>
                </li>
                <li>
                  <Link to="/leadership" className="text-zion-slate-light hover:text-zion-cyan transition-colors text-sm flex items-center gap-2 group">
                    <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
                    Leadership
                  </Link>
                </li>
                <li>
                  <Link to="/careers" className="text-zion-slate-light hover:text-zion-cyan transition-colors text-sm flex items-center gap-2 group">
                    <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
                    Careers
                  </Link>
                </li>
                <li>
                  <Link to="/contact" className="text-zion-slate-light hover:text-zion-cyan transition-colors text-sm flex items-center gap-2 group">
                    <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
                    Contact
                  </Link>
                </li>
                <li>
                  <Link to="/support" className="text-zion-slate-light hover:text-zion-cyan transition-colors text-sm flex items-center gap-2 group">
                    <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
                    Support
                  </Link>
                </li>
              </ul>
            </motion.div>
          </div>
        </div>

        {/* Newsletter Section */}
        <motion.div 
          className="mb-12 p-8 bg-gradient-to-r from-zion-blue-dark/50 to-zion-purple-dark/50 rounded-2xl border border-zion-cyan/20"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          viewport={{ once: true }}
        >
          <div className="text-center">
            <h3 className="text-2xl font-bold text-white mb-4">
              Stay Ahead with AI Innovation
            </h3>
            <p className="text-zion-slate-light mb-6 max-w-2xl mx-auto">
              Get the latest insights on AI technology, quantum computing breakthroughs, and innovative business solutions. 
              Join thousands of professionals staying ahead of the curve.
            </p>
            <FooterNewsletter />
          </div>
        </motion.div>

        {/* Bottom Footer */}
        <div className="border-t border-zion-cyan/20 pt-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-4 text-zion-slate-light text-sm">
              <span>&copy; {currentYear} Zion Tech Group. All rights reserved.</span>
              <span className="hidden sm:inline">•</span>
              <Link to="/privacy" className="hover:text-zion-cyan transition-colors">Privacy Policy</Link>
              <span className="hidden sm:inline">•</span>
              <Link to="/terms" className="hover:text-zion-cyan transition-colors">Terms of Service</Link>
              <span className="hidden sm:inline">•</span>
              <Link to="/cookies" className="hover:text-zion-cyan transition-colors">Cookie Policy</Link>
            </div>
            
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-2 text-zion-slate-light text-sm">
                <Star className="w-4 h-4 text-yellow-400" />
                <span>Leading AI Innovation 2025</span>
              </div>
              <button
                onClick={scrollToTop}
                className="p-2 bg-zion-cyan/10 border border-zion-cyan/30 rounded-lg text-zion-cyan hover:bg-zion-cyan hover:text-white transition-all duration-200 hover:scale-110"
                aria-label="Scroll to top"
              >
                <ArrowUp className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
