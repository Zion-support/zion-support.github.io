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
  CheckCircle,
  Globe,
  Shield,
  Cloud,
  Brain,
  Database,
  Zap,
  Users,
  BookOpen,
  FileText,
  HelpCircle,
  ExternalLink
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
    <div className="bg-gradient-to-r from-zion-blue-dark/50 to-zion-purple-dark/50 p-8 rounded-2xl border border-zion-cyan/20 backdrop-blur-sm">
      <div className="text-center mb-6">
        <h3 className="text-2xl font-bold text-white mb-2">Stay Ahead of the Curve</h3>
        <p className="text-zion-slate-light text-sm">
          Get exclusive insights on AI, blockchain, quantum computing, and emerging technologies delivered to your inbox.
        </p>
      </div>
      
      {isSubscribed ? (
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          className="flex items-center justify-center gap-3 p-4 bg-green-500/20 border border-green-500/30 rounded-xl"
        >
          <CheckCircle className="w-6 h-6 text-green-400" />
          <span className="text-green-400 font-medium">Successfully subscribed! Welcome to the future.</span>
        </motion.div>
      ) : (
        <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email address"
            className="flex-1 px-4 py-3 bg-white/10 border border-zion-cyan/30 rounded-lg text-white placeholder-zion-slate-light focus:outline-none focus:ring-2 focus:ring-zion-cyan focus:border-transparent text-sm backdrop-blur-sm"
            required
          />
          <motion.button
            type="submit"
            disabled={isLoading}
            className="px-6 py-3 bg-gradient-to-r from-zion-cyan to-zion-purple text-white rounded-lg hover:from-zion-cyan/80 hover:to-zion-purple/80 transition-all duration-300 disabled:opacity-50 font-medium"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            {isLoading ? (
              <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin mx-auto"></div>
            ) : (
              <span className="flex items-center gap-2">
                Subscribe
                <Send className="w-4 h-4" />
              </span>
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
      icon: <Users className="h-5 w-5 text-zion-cyan" />,
      links: [
        { label: "About Us", path: "/about" },
        { label: "Our Team", path: "/about#team" },
        { label: "Careers", path: "/careers" },
        { label: "Press & Media", path: "/press" },
        { label: "Partnerships", path: "/partnerships" },
        { label: "Investor Relations", path: "/investors" }
      ]
    },
    {
      title: "Services",
      icon: <Brain className="h-5 w-5 text-zion-cyan" />,
      links: [
        { label: "AI & Machine Learning", path: "/services#ai-ml" },
        { label: "Blockchain & Web3", path: "/services#blockchain" },
        { label: "IoT & Edge Computing", path: "/services#iot-edge" },
        { label: "Quantum Computing", path: "/services#quantum" },
        { label: "AR/VR & Metaverse", path: "/services#ar-vr" },
        { label: "Cybersecurity", path: "/services#cybersecurity" },
        { label: "Cloud & Infrastructure", path: "/services#cloud" },
        { label: "Business Intelligence", path: "/services#business-intelligence" }
      ]
    },
    {
      title: "Solutions",
      icon: <Database className="h-5 w-5 text-zion-cyan" />,
      links: [
        { label: "Enterprise Solutions", path: "/solutions/enterprise" },
        { label: "Startup Solutions", path: "/solutions/startups" },
        { label: "Government Solutions", path: "/solutions/government" },
        { label: "Healthcare Solutions", path: "/solutions/healthcare" },
        { label: "Financial Services", path: "/solutions/financial" },
        { label: "Manufacturing", path: "/solutions/manufacturing" },
        { label: "Retail & E-commerce", path: "/solutions/retail" },
        { label: "Education", path: "/solutions/education" }
      ]
    },
    {
      title: "Resources",
      icon: <BookOpen className="h-5 w-5 text-zion-cyan" />,
      links: [
        { label: "Blog & Insights", path: "/blog" },
        { label: "Case Studies", path: "/case-studies" },
        { label: "White Papers", path: "/white-papers" },
        { label: "Documentation", path: "/docs" },
        { label: "API Reference", path: "/api" },
        { label: "Developer Tools", path: "/dev-tools" },
        { label: "Research Papers", path: "/research" },
        { label: "Industry Reports", path: "/reports" }
      ]
    },
    {
      title: "Support",
      icon: <HelpCircle className="h-5 w-5 text-zion-cyan" />,
      links: [
        { label: "Help Center", path: "/help" },
        { label: "Contact Support", path: "/support" },
        { label: "Community Forum", path: "/community" },
        { label: "Training & Certification", path: "/training" },
        { label: "Status Page", path: "/status" },
        { label: "Security Center", path: "/security" },
        { label: "Compliance", path: "/compliance" },
        { label: "Disaster Recovery", path: "/disaster-recovery" }
      ]
    },
    {
      title: "Legal",
      icon: <FileText className="h-5 w-5 text-zion-cyan" />,
      links: [
        { label: "Privacy Policy", path: "/privacy" },
        { label: "Terms of Service", path: "/terms" },
        { label: "Cookie Policy", path: "/cookies" },
        { label: "GDPR Compliance", path: "/gdpr" },
        { label: "Data Processing", path: "/data-processing" },
        { label: "Intellectual Property", path: "/ip" },
        { label: "Licenses", path: "/licenses" },
        { label: "Accessibility", path: "/accessibility" }
      ]
    }
  ];

  const socialLinks = [
    { icon: <Twitter className="h-5 w-5" />, href: "https://twitter.com/ziontechgroup", label: "Twitter", color: "hover:text-blue-400" },
    { icon: <Linkedin className="h-5 w-5" />, href: "https://www.linkedin.com/company/zion-tech-group", label: "LinkedIn", color: "hover:text-blue-600" },
    { icon: <Facebook className="h-5 w-5" />, href: "https://www.facebook.com/ziontechgroup", label: "Facebook", color: "hover:text-blue-500" },
    { icon: <Instagram className="h-5 w-5" />, href: "https://www.instagram.com/ziontechgroup", label: "Instagram", color: "hover:text-pink-500" },
    { icon: <Github className="h-5 w-5" />, href: "https://github.com/ziontechgroup", label: "GitHub", color: "hover:text-gray-400" },
    { icon: <Globe className="h-5 w-5" />, href: "https://ziontechgroup.com", label: "Website", color: "hover:text-zion-cyan" }
  ];

  const quickLinks = [
    { label: "Get Started", path: "/contact", highlight: true },
    { label: "Request Demo", path: "/demo" },
    { label: "Pricing", path: "/pricing" },
    { label: "Compare Plans", path: "/compare" },
    { label: "Migration Guide", path: "/migration" },
    { label: "Integration Hub", path: "/integrations" }
  ];

  return (
    <footer className="bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark text-white relative overflow-hidden">
      {/* Enhanced background decorative elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 w-32 h-32 border border-zion-cyan rounded-full animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-24 h-24 border border-zion-purple rounded-full animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 w-16 h-16 border border-zion-cyan-light rounded-full animate-pulse delay-500"></div>
        <div className="absolute top-1/3 right-1/3 w-20 h-20 border border-zion-purple-light rounded-full animate-pulse delay-1500"></div>
        <div className="absolute bottom-1/3 left-1/3 w-12 h-12 border border-zion-cyan rounded-full animate-pulse delay-2000"></div>
      </div>

      <div className="relative z-10 container mx-auto px-4 py-20">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-7 gap-8 mb-16">
          {/* Company Info - Spans 2 columns */}
          <div className="lg:col-span-2">
            <motion.div 
              className="mb-8"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h3 className="text-3xl font-bold mb-6 bg-gradient-to-r from-zion-cyan to-zion-purple bg-clip-text text-transparent">
                Zion Tech Group
              </h3>
              <p className="text-zion-slate-light mb-8 leading-relaxed text-sm">
                Pioneering the future with cutting-edge AI, blockchain, quantum computing, and emerging technologies. 
                We transform businesses through intelligent automation and next-generation cybersecurity solutions.
              </p>
              
              {/* Enhanced Contact Info */}
              <div className="space-y-4 mb-8">
                <div className="flex items-center gap-3 text-zion-slate-light group hover:text-zion-cyan transition-colors duration-200">
                  <Phone className="w-4 h-4 text-zion-cyan group-hover:scale-110 transition-transform duration-200"/>
                  <a href="tel:+13024640950" className="text-sm hover:text-white transition-colors">
                    +1 302 464 0950
                  </a>
                </div>
                <div className="flex items-center gap-3 text-zion-slate-light group hover:text-zion-cyan transition-colors duration-200">
                  <Mail className="w-4 h-4 text-zion-cyan group-hover:scale-110 transition-transform duration-200"/>
                  <a href="mailto:kleber@ziontechgroup.com" className="text-sm hover:text-white transition-colors">
                    kleber@ziontechgroup.com
                  </a>
                </div>
                <div className="flex items-center gap-3 text-zion-slate-light group hover:text-zion-cyan transition-colors duration-200">
                  <MapPin className="w-4 h-4 text-zion-cyan group-hover:scale-110 transition-transform duration-200"/>
                  <span className="text-sm">
                    364 E Main St STE 1008<br />
                    Middletown DE 19709
                  </span>
                </div>
              </div>

              {/* Enhanced Social Media */}
              <div className="flex space-x-4">
                {socialLinks.map((social, index) => (
                  <motion.a 
                    key={index}
                    href={social.href} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className={`text-zion-slate-light ${social.color} transition-all duration-300 p-2 hover:bg-zion-cyan/10 rounded-full group`} 
                    aria-label={social.label} 
                    title={social.label} 
                    whileHover={{ scale: 1.1 }} 
                    whileTap={{ scale: 0.95 }}
                  >
                    <div className="group-hover:scale-110 transition-transform duration-200">
                      {social.icon}
                    </div>
                  </motion.a>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Footer Sections - Each spans 1 column */}
          {footerSections.map((section, sectionIndex) => (
            <motion.div
              key={section.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: sectionIndex * 0.1 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center gap-2 mb-4">
                {section.icon}
                <h4 className="text-lg font-semibold text-white">{section.title}</h4>
              </div>
              <ul className="space-y-2">
                {section.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <Link 
                      to={link.path} 
                      className="text-zion-slate-light hover:text-zion-cyan transition-colors duration-200 text-sm group flex items-center gap-2"
                    >
                      <span className="group-hover:translate-x-1 transition-transform duration-200">
                        {link.label}
                      </span>
                      {link.path.startsWith('http') && <ExternalLink className="w-3 h-3 opacity-50" />}
                    </Link>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Quick Links Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <div className="bg-white/5 backdrop-blur-sm rounded-2xl border border-zion-cyan/20 p-8">
            <h3 className="text-2xl font-bold text-white mb-6 text-center">Quick Actions</h3>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
              {quickLinks.map((link, index) => (
                <motion.div
                  key={index}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Link
                    to={link.path}
                    className={`block p-4 text-center rounded-xl transition-all duration-300 ${
                      link.highlight
                        ? 'bg-gradient-to-r from-zion-cyan to-zion-purple text-white hover:shadow-lg hover:shadow-zion-cyan/25'
                        : 'bg-white/10 text-zion-slate-light hover:bg-white/20 hover:text-white border border-zion-cyan/20'
                    }`}
                  >
                    <span className="text-sm font-medium">{link.label}</span>
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Newsletter Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <FooterNewsletter />
        </motion.div>

        {/* Bottom Section */}
        <div className="border-t border-zion-cyan/20 pt-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-2 text-zion-slate-light text-sm">
              <span>© 2024 Zion Tech Group. All rights reserved.</span>
              <Heart className="w-4 h-4 text-red-400 animate-pulse" />
              <span>Made with innovation</span>
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
              <Link to="/sitemap" className="text-zion-slate-light hover:text-zion-cyan transition-colors">
                Sitemap
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Enhanced Scroll to Top Button */}
      <motion.button
        onClick={scrollToTop}
        className="fixed bottom-6 right-6 bg-gradient-to-r from-zion-cyan to-zion-purple text-white p-4 rounded-full shadow-2xl hover:shadow-zion-cyan/25 transition-all duration-300 z-40 group"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 1 }}
      >
        <ArrowUp className="w-5 h-5 group-hover:-translate-y-1 transition-transform duration-200" />
        {/* Tooltip */}
        <div className="absolute bottom-full right-0 mb-2 px-2 py-1 bg-black text-white text-xs rounded opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none whitespace-nowrap">
          Back to Top
        </div>
      </motion.button>
    </footer>
  );
}
