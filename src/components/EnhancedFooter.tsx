import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  Mail, 
  Phone, 
  MapPin, 
  Globe, 
  Twitter, 
  Linkedin, 
  Facebook, 
  Instagram,
  Youtube,
  Github,
  ArrowRight,
  Heart,
  Shield,
  Zap,
  Brain,
  Cloud,
  Rocket,
  Users,
  Award,
  Clock,
  CheckCircle,
  Star,
  TrendingUp,
  MessageCircle,
  FileText,
  BookOpen,
  HelpCircle,
  Settings,
  Lock,
  Eye,
  EyeOff
} from 'lucide-react';

interface FooterLink {
  name: string;
  href: string;
  description?: string;
}

interface FooterSection {
  title: string;
  links: FooterLink[];
}

export function EnhancedFooter() {
  const [email, setEmail] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);
  const [showPrivacy, setShowPrivacy] = useState(false);

  const footerSections: FooterSection[] = [
    {
      title: "AI Solutions",
      links: [
        { name: "AI Business Intelligence", href: "/services/ai-business-intelligence" },
        { name: "AI Sales Copilot", href: "/services/ai-sales-copilot" },
        { name: "AI Compliance Assistant", href: "/services/ai-compliance-assistant" },
        { name: "AI Workflow Automation", href: "/services/ai-workflow-automation" },
        { name: "AI Customer Experience", href: "/services/ai-customer-experience-platform" },
        { name: "AI Data Governance", href: "/services/ai-data-governance" }
      ]
    },
    {
      title: "IT Services",
      links: [
        { name: "Cloud & DevOps", href: "/services/cloud-devops" },
        { name: "Cybersecurity", href: "/services/ai-cybersecurity-suite" },
        { name: "IT Infrastructure", href: "/services/it-infrastructure" },
        { name: "Digital Transformation", href: "/services/digital-transformation" },
        { name: "Edge Computing", href: "/services/edge-computing-platform" },
        { name: "Green IT", href: "/services/green-it" }
      ]
    },
    {
      title: "Industries",
      links: [
        { name: "Healthcare", href: "/services/healthcare-tech" },
        { name: "Manufacturing", href: "/manufacturing-solutions" },
        { name: "Retail", href: "/retail-solutions" },
        { name: "Financial Services", href: "/financial-solutions" },
        { name: "Education", href: "/education-solutions" },
        { name: "Government", href: "/government-solutions" }
      ]
    },
    {
      title: "Company",
      links: [
        { name: "About Us", href: "/about" },
        { name: "Our Team", href: "/team" },
        { name: "Careers", href: "/careers" },
        { name: "Partners", href: "/partners" },
        { name: "News & Blog", href: "/blog" },
        { name: "Contact", href: "/contact" }
      ]
    }
  ];

  const socialLinks = [
    { name: "Twitter", href: "https://twitter.com/ziontechgroup", icon: Twitter },
    { name: "LinkedIn", href: "https://linkedin.com/company/ziontechgroup", icon: Linkedin },
    { name: "Facebook", href: "https://facebook.com/ziontechgroup", icon: Facebook },
    { name: "Instagram", href: "https://instagram.com/ziontechgroup", icon: Instagram },
    { name: "YouTube", href: "https://youtube.com/ziontechgroup", icon: Youtube },
    { name: "GitHub", href: "https://github.com/ziontechgroup", icon: Github }
  ];

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setIsSubscribed(true);
      setEmail('');
      setTimeout(() => setIsSubscribed(false), 3000);
    }
  };

  const stats = [
    { label: "Years Experience", value: "15+", icon: Clock },
    { label: "Global Clients", value: "500+", icon: Users },
    { label: "Success Rate", value: "98%", icon: CheckCircle },
    { label: "Innovation Index", value: "95%", icon: TrendingUp }
  ];

  return (
    <footer className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(120,119,198,0.3),transparent_50%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_25%,rgba(120,119,198,0.1)_25%,rgba(120,119,198,0.1)_50%,transparent_50%,transparent_75%,rgba(120,119,198,0.1)_75%)] bg-[length:20px_20px]" />
      </div>

      <div className="relative z-10">
        {/* Main Footer Content */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-6 gap-8 lg:gap-12">
            {/* Company Info */}
            <div className="lg:col-span-2">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="space-y-6"
              >
                {/* Logo */}
                <Link to="/" className="inline-flex items-center space-x-3 group">
                  <div className="w-12 h-12 bg-gradient-to-r from-zion-cyan to-zion-purple rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <Rocket className="w-7 h-7 text-white" />
                  </div>
                  <div>
                    <div className="text-2xl font-bold bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                      Zion Tech Group
                    </div>
                    <div className="text-sm text-gray-400">Innovation • Technology • Future</div>
                  </div>
                </Link>

                {/* Description */}
                <p className="text-gray-300 leading-relaxed max-w-md">
                  Transforming businesses through cutting-edge AI solutions, comprehensive IT services, 
                  and innovative technology consulting. We help organizations thrive in the digital age.
                </p>

                {/* Stats */}
                <div className="grid grid-cols-2 gap-4">
                  {stats.map((stat, index) => (
                    <motion.div
                      key={stat.label}
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.4, delay: index * 0.1 }}
                      viewport={{ once: true }}
                      className="text-center p-3 bg-white/5 rounded-lg border border-white/10"
                    >
                      <div className="flex items-center justify-center mb-2">
                        <stat.icon className="w-5 h-5 text-zion-cyan" />
                      </div>
                      <div className="text-xl font-bold text-white">{stat.value}</div>
                      <div className="text-xs text-gray-400">{stat.label}</div>
                    </motion.div>
                  ))}
                </div>

                {/* Social Links */}
                <div className="flex space-x-4">
                  {socialLinks.map((social) => (
                    <motion.a
                      key={social.name}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.1, y: -2 }}
                      whileTap={{ scale: 0.95 }}
                      className="w-10 h-10 bg-white/10 hover:bg-zion-cyan/20 rounded-lg flex items-center justify-center border border-white/20 hover:border-zion-cyan/40 transition-all duration-300 group"
                    >
                      <social.icon className="w-5 h-5 text-gray-400 group-hover:text-zion-cyan transition-colors duration-300" />
                    </motion.a>
                  ))}
                </div>
              </motion.div>
            </div>

            {/* Footer Links */}
            {footerSections.map((section, sectionIndex) => (
              <motion.div
                key={section.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: sectionIndex * 0.1 }}
                viewport={{ once: true }}
                className="space-y-4"
              >
                <h3 className="text-lg font-semibold text-white mb-4">{section.title}</h3>
                <ul className="space-y-3">
                  {section.links.map((link) => (
                    <li key={link.name}>
                      <Link
                        to={link.href}
                        className="text-gray-300 hover:text-zion-cyan transition-colors duration-200 text-sm group flex items-center"
                      >
                        <ArrowRight className="w-3 h-3 mr-2 opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
                        {link.name}
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
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
            className="mt-16 pt-8 border-t border-white/10"
          >
            <div className="max-w-2xl mx-auto text-center">
              <h3 className="text-2xl font-bold text-white mb-4">
                Stay Updated with Latest Tech Insights
              </h3>
              <p className="text-gray-300 mb-6">
                Get exclusive access to industry trends, AI breakthroughs, and technology insights 
                delivered directly to your inbox.
              </p>
              
              <form onSubmit={handleNewsletterSubmit} className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                <div className="flex-1 relative">
                  <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email"
                    className="w-full pl-10 pr-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-zion-cyan focus:border-transparent transition-all duration-300"
                    required
                  />
                </div>
                <motion.button
                  type="submit"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-6 py-3 bg-gradient-to-r from-zion-cyan to-zion-purple text-white font-medium rounded-lg hover:shadow-lg hover:shadow-zion-cyan/25 transition-all duration-300"
                >
                  Subscribe
                </motion.button>
              </form>

              {isSubscribed && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.8 }}
                  className="mt-4 text-green-400 flex items-center justify-center"
                >
                  <CheckCircle className="w-5 h-5 mr-2" />
                  Successfully subscribed!
                </motion.div>
              )}
            </div>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
            <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
              {/* Copyright */}
              <div className="text-gray-400 text-sm">
                © {new Date().getFullYear()} Zion Tech Group. All rights reserved.
              </div>

              {/* Legal Links */}
              <div className="flex items-center space-x-6 text-sm">
                <Link to="/privacy" className="text-gray-400 hover:text-white transition-colors duration-200">
                  Privacy Policy
                </Link>
                <Link to="/terms" className="text-gray-400 hover:text-white transition-colors duration-200">
                  Terms of Service
                </Link>
                <Link to="/cookies" className="text-gray-400 hover:text-white transition-colors duration-200">
                  Cookie Policy
                </Link>
                <button
                  onClick={() => setShowPrivacy(!showPrivacy)}
                  className="text-gray-400 hover:text-white transition-colors duration-200 flex items-center"
                >
                  {showPrivacy ? <EyeOff className="w-4 h-4 mr-1" /> : <Eye className="w-4 h-4 mr-1" />}
                  {showPrivacy ? 'Hide' : 'Show'} Privacy
                </button>
              </div>

              {/* Made with love */}
              <div className="text-gray-400 text-sm flex items-center">
                Made with <Heart className="w-4 h-4 mx-1 text-red-400" /> by Zion Tech Group
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}