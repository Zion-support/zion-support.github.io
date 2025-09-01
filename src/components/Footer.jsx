import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  Mail,
  Phone,
  MapPin,
  ArrowUp,
  Heart,
  CheckCircle,
  Send,
  Globe,
  Linkedin,
  Twitter,
  Github,
  Facebook,
  Instagram,
  Youtube,
  Building,
  Users,
  Shield,
  Zap,
  Target,
  FileText,
  Video,
  BookOpen,
  Calendar,
  Briefcase,
  Rocket,
  Star,
  Award,
  TrendingUp,
  Cpu,
  Cloud,
  Brain,
  Lock,
  Database,
  Network,
  Server,
  Smartphone,
  BarChart3,
  Palette,
  Settings,
  HelpCircle,
  MessageCircle,
  ShoppingCart,
  DollarSign,
  Info,
  Phone as PhoneIcon,
  Mail as MailIcon,
  MapPin as MapPinIcon
} from 'lucide-react';

export function FooterNewsletter() {
  const [email, setEmail] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubscribe = async e => {
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
    <div className="bg-zinc-900/30 p-6 rounded-xl border border-zinc-700/50">
      <h3 className="text-xl font-semibold text-white mb-4">Stay Updated</h3>
      <p className="text-zinc-400 mb-4 text-sm">
        Get the latest insights on AI, cybersecurity, and technology trends
        delivered to your inbox.
      </p>

      {isSubscribed ? (
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          className="flex items-center gap-3 p-3 bg-green-500/20 border border-green-500/30 rounded-lg"
        >
          <CheckCircle className="w-5 h-5 text-green-400" />
          <span className="text-green-400 text-sm">
            Successfully subscribed!
          </span>
        </motion.div>
      ) : (
        <form onSubmit={handleSubscribe} className="flex gap-2">
          <input
            type="email"
            value={email}
            onChange={e => setEmail(e.target.value)}
            placeholder="Enter your email"
            className="flex-1 px-3 py-2 bg-zinc-800/50 border border-zinc-600/50 rounded-lg text-white placeholder-zinc-400 focus:outline-none focus:ring-2 focus:ring-zion-cyan focus:border-transparent text-sm"
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
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      name: 'LinkedIn',
      url: 'https://www.linkedin.com/company/ziontechgroup',
      icon: Linkedin,
      color: 'hover:bg-blue-600/20'
    },
    {
      name: 'Twitter',
      url: 'https://twitter.com/ziontechgroup',
      icon: Twitter,
      color: 'hover:bg-sky-500/20'
    },
    {
      name: 'GitHub',
      url: 'https://github.com/Zion-Holdings',
      icon: Github,
      color: 'hover:bg-gray-600/20'
    },
    {
      name: 'Facebook',
      url: 'https://facebook.com/ziontechgroup',
      icon: Facebook,
      color: 'hover:bg-blue-600/20'
    },
    {
      name: 'Instagram',
      url: 'https://instagram.com/ziontechgroup',
      icon: Instagram,
      color: 'hover:bg-pink-600/20'
    },
    {
      name: 'YouTube',
      url: 'https://youtube.com/@ziontechgroup',
      icon: Youtube,
      color: 'hover:bg-red-600/20'
    }
  ];

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-zion-blue-dark border-t border-zion-purple/30 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMC4wMiI+PGNpcmNsZSBjeD0iMzAiIGN5PSIzMCIgcj0iMiIvPjwvZz48L2c+PC9zdmc+')] opacity-30" />

      <div className="container mx-auto px-4 sm:px-6 py-12 relative z-10">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-r from-zion-purple to-zion-cyan rounded-lg flex items-center justify-center">
                <Building className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold text-white">Zion Tech Group</span>
            </div>
            <p className="text-zion-slate-light text-sm leading-relaxed">
              Empowering businesses with cutting-edge technology solutions, AI innovation, and digital transformation expertise.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`p-2 rounded-lg border border-zion-purple/30 text-zion-slate-light hover:text-zion-cyan transition-all duration-300 ${social.color}`}
                >
                  <social.icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-white flex items-center">
              <Zap className="w-5 h-5 mr-2 text-zion-cyan" />
              Services
            </h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/services/ai" className="text-zion-slate-light hover:text-zion-cyan transition-colors flex items-center">
                  <Brain className="w-4 h-4 mr-2" />
                  AI & Machine Learning
                </Link>
              </li>
              <li>
                <Link to="/services/cloud" className="text-zion-slate-light hover:text-zion-cyan transition-colors flex items-center">
                  <Cloud className="w-4 h-4 mr-2" />
                  Cloud & DevOps
                </Link>
              </li>
              <li>
                <Link to="/services/cybersecurity" className="text-zion-slate-light hover:text-zion-cyan transition-colors flex items-center">
                  <Shield className="w-4 h-4 mr-2" />
                  Cybersecurity
                </Link>
              </li>
              <li>
                <Link to="/services/infrastructure" className="text-zion-slate-light hover:text-zion-cyan transition-colors flex items-center">
                  <Server className="w-4 h-4 mr-2" />
                  Infrastructure
                </Link>
              </li>
              <li>
                <Link to="/services/consulting" className="text-zion-slate-light hover:text-zion-cyan transition-colors flex items-center">
                  <Briefcase className="w-4 h-4 mr-2" />
                  Consulting
                </Link>
              </li>
            </ul>
          </div>

          {/* Solutions */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-white flex items-center">
              <Target className="w-5 h-5 mr-2 text-zion-cyan" />
              Solutions
            </h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/solutions/enterprise" className="text-zion-slate-light hover:text-zion-cyan transition-colors flex items-center">
                  <Building className="w-4 h-4 mr-2" />
                  Enterprise
                </Link>
              </li>
              <li>
                <Link to="/solutions/startup" className="text-zion-slate-light hover:text-zion-cyan transition-colors flex items-center">
                  <Rocket className="w-4 h-4 mr-2" />
                  Startup
                </Link>
              </li>
              <li>
                <Link to="/solutions/healthcare" className="text-zion-slate-light hover:text-zion-cyan transition-colors flex items-center">
                  <Heart className="w-4 h-4 mr-2" />
                  Healthcare
                </Link>
              </li>
              <li>
                <Link to="/solutions/financial" className="text-zion-slate-light hover:text-zion-cyan transition-colors flex items-center">
                  <DollarSign className="w-4 h-4 mr-2" />
                  Financial
                </Link>
              </li>
              <li>
                <Link to="/solutions/manufacturing" className="text-zion-slate-light hover:text-zion-cyan transition-colors flex items-center">
                  <Cpu className="w-4 h-4 mr-2" />
                  Manufacturing
                </Link>
              </li>
            </ul>
          </div>

          {/* Company & Resources */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-white flex items-center">
              <Building className="w-5 h-5 mr-2 text-zion-cyan" />
              Company
            </h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/about" className="text-zion-slate-light hover:text-zion-cyan transition-colors flex items-center">
                  <Info className="w-4 h-4 mr-2" />
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/team" className="text-zion-slate-light hover:text-zion-cyan transition-colors flex items-center">
                  <Users className="w-4 h-4 mr-2" />
                  Our Team
                </Link>
              </li>
              <li>
                <Link to="/careers" className="text-zion-slate-light hover:text-zion-cyan transition-colors flex items-center">
                  <Briefcase className="w-4 h-4 mr-2" />
                  Careers
                </Link>
              </li>
              <li>
                <Link to="/blog" className="text-zion-slate-light hover:text-zion-cyan transition-colors flex items-center">
                  <FileText className="w-4 h-4 mr-2" />
                  Blog
                </Link>
              </li>
              <li>
                <Link to="/events" className="text-zion-slate-light hover:text-zion-cyan transition-colors flex items-center">
                  <Calendar className="w-4 h-4 mr-2" />
                  Events
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Newsletter Section */}
        <div className="mb-8">
          <FooterNewsletter />
        </div>

        {/* Contact Info */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8 p-6 bg-zinc-900/30 rounded-xl border border-zinc-700/50">
          <div className="flex items-center space-x-3">
            <div className="p-2 bg-zion-cyan/20 rounded-lg">
              <PhoneIcon className="w-5 h-5 text-zion-cyan" />
            </div>
            <div>
              <p className="text-sm text-zion-slate-light">Phone</p>
              <p className="text-white font-medium">+1 (555) 123-4567</p>
            </div>
          </div>
          <div className="flex items-center space-x-3">
            <div className="p-2 bg-zion-cyan/20 rounded-lg">
              <MailIcon className="w-5 h-5 text-zion-cyan" />
            </div>
            <div>
              <p className="text-sm text-zion-slate-light">Email</p>
              <p className="text-white font-medium">info@ziontechgroup.com</p>
            </div>
          </div>
          <div className="flex items-center space-x-3">
            <div className="p-2 bg-zion-cyan/20 rounded-lg">
              <MapPinIcon className="w-5 h-5 text-zion-cyan" />
            </div>
            <div>
              <p className="text-sm text-zion-slate-light">Address</p>
              <p className="text-white font-medium">123 Tech Street, Innovation City, IC 12345</p>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-zion-purple/30">
          <div className="flex flex-col md:flex-row items-center space-y-2 md:space-y-0 md:space-x-6 mb-4 md:mb-0">
            <p className="text-zion-slate-light text-sm">
              © {currentYear} Zion Tech Group. All rights reserved.
            </p>
            <div className="flex space-x-4 text-sm">
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

          {/* Scroll to Top Button */}
          <button
            onClick={scrollToTop}
            className="p-3 bg-zion-cyan/20 border border-zion-cyan/30 rounded-lg text-zion-cyan hover:bg-zion-cyan/30 transition-all duration-300 hover:scale-110"
          >
            <ArrowUp className="w-5 h-5" />
          </button>
        </div>
      </div>

      {/* Glowing border effect */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-zion-cyan to-transparent opacity-60" />
    </footer>
  );
}
