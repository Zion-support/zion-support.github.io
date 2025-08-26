import { FooterNewsletter } from "@/components/FooterNewsletter";
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
  Brain,
  Shield,
  Cloud,
  Zap,
  Rocket,
  Users,
  Briefcase,
  Globe,
  Sparkles,
  Cpu,
  Database,
  Lock,
  TrendingUp,
  Star,
  ArrowRight,
  ExternalLink
} from "lucide-react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const footerSections = [
    {
      title: 'Company',
      links: [
        { name: 'About Us', path: '/about' },
        { name: 'Our Team', path: '/team' },
        { name: 'Careers', path: '/careers' },
        { name: 'News & Updates', path: '/blog' },
        { name: 'Case Studies', path: '/case-studies' },
        { name: 'Research & Development', path: '/research-development' }
      ]
    },
    {
      title: 'Core Services',
      links: [
        { name: 'AI & Machine Learning', path: '/services/ai', icon: Brain },
        { name: 'Cybersecurity', path: '/services/cybersecurity', icon: Shield },
        { name: 'Cloud & DevOps', path: '/services/cloud', icon: Cloud },
        { name: 'IT Infrastructure', path: '/services/infrastructure', icon: Zap },
        { name: 'Digital Transformation', path: '/services/transformation', icon: TrendingUp }
      ]
    },
    {
      title: 'Innovative Solutions',
      links: [
        { name: 'Quantum Computing', path: '/services/quantum', icon: Cpu },
        { name: 'Blockchain & Web3', path: '/services/blockchain', icon: Database },
        { name: 'IoT & Edge Computing', path: '/services/iot', icon: Globe },
        { name: 'Space Technology', path: '/services/space', icon: Rocket },
        { name: 'Green Technology', path: '/services/green', icon: Sparkles }
      ]
    },
    {
      title: 'Resources',
      links: [
        { name: 'Blog & Insights', path: '/blog' },
        { name: 'Documentation', path: '/docs' },
        { name: 'White Papers', path: '/white-papers' },
        { name: 'Webinars', path: '/webinars' },
        { name: 'Training Programs', path: '/training' },
        { name: 'Community Forum', path: '/community' }
      ]
    },
    {
      title: 'Support',
      links: [
        { name: 'Contact Us', path: '/contact' },
        { name: 'Help Center', path: '/help' },
        { name: 'Status Page', path: '/status' },
        { name: 'API Documentation', path: '/api-docs' },
        { name: 'Support Portal', path: '/support' }
      ]
    }
  ];

  const legal = [
    { name: "Privacy Policy", path: "/privacy" },
    { name: "Terms of Service", path: "/terms" },
    { name: "GDPR Compliance", path: "/gdpr" },
    { name: "Accessibility", path: "/accessibility" },
    { name: "Cookie Policy", path: "/cookies" }
  ];

  const socialLinks = [
    {
      name: "LinkedIn",
      url: "https://linkedin.com/company/zion-tech-group",
      icon: Linkedin,
      color: "hover:text-blue-400"
    },
    {
      name: "Twitter",
      url: "https://twitter.com/ziontechgroup",
      icon: Twitter,
      color: "hover:text-blue-400"
    },
    {
      name: "GitHub",
      url: "https://github.com/Zion-Holdings",
      icon: Github,
      color: "hover:text-gray-300"
    },
    {
      name: "Facebook",
      url: "https://facebook.com/ziontechgroup",
      icon: Facebook,
      color: "hover:text-blue-500"
    }
  ];

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-gradient-to-br from-zion-slate-dark via-zion-slate to-zion-slate-light border-t border-zion-cyan/20 pt-20 pb-8 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-10 left-10 w-32 h-32 border border-zion-cyan/20 rounded-full animate-pulse" />
        <div className="absolute bottom-20 right-20 w-24 h-24 border border-zion-purple/20 rounded-full animate-pulse delay-1000" />
        <div className="absolute top-1/2 left-1/2 w-16 h-16 border border-zion-cyan-light/20 rounded-full animate-pulse delay-2000" />
        <div className="absolute top-1/4 right-1/4 w-20 h-20 border border-zion-green/20 rounded-full animate-pulse delay-1500" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Main footer content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8 mb-12">
          {/* Company info */}
          <div className="lg:col-span-2">
            <div className="mb-6">
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-zion-cyan to-zion-purple p-0.5">
                  <div className="w-full h-full rounded-xl bg-zion-slate-dark flex items-center justify-center">
                    <span className="text-2xl font-bold bg-gradient-to-r from-zion-cyan to-zion-purple bg-clip-text text-transparent">
                      Z
                    </span>
                  </div>
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-white">Zion Tech Group</h3>
                  <p className="text-zion-cyan text-sm font-medium">Innovation • Technology • Future</p>
                </div>
              </div>
              <p className="text-zion-slate-light leading-relaxed mb-6">
                Leading the future of technology with cutting-edge AI, quantum computing, 
                blockchain, and innovative solutions that transform businesses worldwide.
              </p>
              
              {/* Contact Info */}
              <div className="space-y-3">
                <div className="flex items-center space-x-3 text-zion-slate-light hover:text-zion-cyan transition-colors duration-300">
                  <Phone className="w-4 h-4 text-zion-cyan" />
                  <a href="tel:+13024640950" className="hover:text-white">+1 302 464 0950</a>
                </div>
                <div className="flex items-center space-x-3 text-zion-slate-light hover:text-zion-cyan transition-colors duration-300">
                  <Mail className="w-4 h-4 text-zion-cyan" />
                  <a href="mailto:kleber@ziontechgroup.com" className="hover:text-white">kleber@ziontechgroup.com</a>
                </div>
                <div className="flex items-start space-x-3 text-zion-slate-light">
                  <MapPin className="w-4 h-4 text-zion-cyan mt-0.5" />
                  <address className="not-italic">
                    364 E Main St STE 1008<br />
                    Middletown DE 19709
                  </address>
                </div>
              </div>
            </div>
          </div>

          {/* Navigation sections */}
          {footerSections.map((section, index) => (
            <motion.div
              key={section.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <h4 className="text-lg font-semibold text-white mb-4 flex items-center space-x-2">
                {section.title === 'Core Services' && <Zap className="w-5 h-5 text-zion-cyan" />}
                {section.title === 'Innovative Solutions' && <Sparkles className="w-5 h-5 text-zion-purple" />}
                {section.title === 'Resources' && <Star className="w-5 h-5 text-zion-orange" />}
                {section.title === 'Support' && <Users className="w-5 h-5 text-zion-green" />}
                <span>{section.title}</span>
              </h4>
              <ul className="space-y-3">
                {section.links.map((link) => (
                  <li key={link.name}>
                    <Link
                      to={link.path}
                      className="flex items-center space-x-2 text-zion-slate-light hover:text-zion-cyan transition-colors duration-300 group"
                    >
                      {link.icon && (
                        <link.icon className="w-4 h-4 text-zion-cyan/60 group-hover:text-zion-cyan transition-colors duration-300" />
                      )}
                      <span className="group-hover:translate-x-1 transition-transform duration-300">
                        {link.name}
                      </span>
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
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mb-12"
        >
          <FooterNewsletter />
        </motion.div>

        {/* Bottom section */}
        <div className="border-t border-zion-cyan/20 pt-8">
          <div className="flex flex-col lg:flex-row items-center justify-between space-y-4 lg:space-y-0">
            {/* Copyright and Legal */}
            <div className="flex flex-col sm:flex-row items-center space-y-2 sm:space-y-0 sm:space-x-6">
              <p className="text-zion-slate-light text-sm">
                © {currentYear} Zion Tech Group. All rights reserved.
              </p>
              <div className="flex items-center space-x-4">
                {legal.map((item) => (
                  <Link
                    key={item.name}
                    to={item.path}
                    className="text-zion-slate-light hover:text-zion-cyan text-sm transition-colors duration-300"
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
            </div>

            {/* Social Links */}
            <div className="flex items-center space-x-4">
              {socialLinks.map((social) => (
                <motion.a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  className={`p-2 rounded-lg bg-zion-slate-dark/50 border border-zion-cyan/30 hover:border-zion-cyan/50 transition-all duration-300 text-zion-cyan ${social.color}`}
                  title={social.name}
                >
                  <social.icon className="w-5 h-5" />
                </motion.a>
              ))}
            </div>
          </div>
        </div>

        {/* Scroll to top button */}
        <motion.button
          onClick={scrollToTop}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          className="fixed bottom-8 right-8 p-3 bg-gradient-to-r from-zion-cyan to-zion-purple text-white rounded-full shadow-lg shadow-zion-cyan/25 hover:shadow-xl hover:shadow-zion-cyan/30 transition-all duration-300 z-40"
          title="Scroll to top"
        >
          <ArrowUp className="w-6 h-6" />
        </motion.button>
      </div>
    </footer>
  );
};

export default Footer;
