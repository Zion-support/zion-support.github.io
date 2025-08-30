import React, { useState } from 'react';
import { Link } from 'react-router-dom';
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
  Shield,
  Zap,
  Brain,
  Cloud,
  Building,
  Users,
  FileText,
  Video,
  TestTube,
  TrendingUp,
  CheckCircle,
  Briefcase,
  Newspaper,
  Target,
  Rocket,
  Heart,
  DollarSign,
  HelpCircle,
  Activity,
  Cpu,
  GraduationCap,
  ShoppingCart,
  ArrowRight,
  Star,
  Award,
  Lock,
  Eye,
  Atom,
  Code,
  Database,
  Server,
  MessageCircle,
  Truck,
  Workflow,
  Leaf,
  Link as LinkIcon,
  Settings,
  Wrench,
  Smile,
  Edit,
  BarChart3
} from 'lucide-react';

export function Footer() {
  const currentYear = new Date().getFullYear();
  const [activeSection, setActiveSection] = useState<string | null>(null);

  const footerSections = [
    {
      title: 'Company',
      icon: Building,
      links: [
        { name: 'About Us', path: '/about', icon: Users },
        { name: 'Our Story', path: '/about/story', icon: FileText },
        { name: 'Team', path: '/about/team', icon: Users },
        { name: 'Careers', path: '/careers', icon: Briefcase },
        { name: 'Partners', path: '/partners', icon: Network },
        { name: 'Press', path: '/press', icon: Newspaper },
        { name: 'Contact', path: '/contact', icon: Phone }
      ]
    },
    {
      title: 'AI & Quantum Solutions',
      icon: Brain,
      links: [
        { name: 'AI Content Studio Pro', path: '/services/ai-content-studio-pro', icon: Brain, new: true },
        { name: 'AI Sales Copilot', path: '/services/ai-sales-copilot', icon: Users, new: true },
        { name: 'AI Customer Support', path: '/services/ai-customer-support-automation', icon: MessageCircle, popular: true },
        { name: 'AI Project Management', path: '/services/ai-project-management-platform', icon: Target, new: true },
        { name: 'AI Financial Trading', path: '/services/ai-financial-trading-platform', icon: TrendingUp, new: true },
        { name: 'AI Healthcare Analytics', path: '/services/ai-healthcare-analytics-platform', icon: Heart, new: true },
        { name: 'Quantum AI Hybrid', path: '/services/quantum-ai-hybrid-platform', icon: Atom, new: true, popular: true }
      ]
    },
    {
      title: 'Advanced Technology',
      icon: Cpu,
      links: [
        { name: 'AI Cybersecurity', path: '/services/ai-cybersecurity-threat-detection', icon: Shield, popular: true },
        { name: 'AI Supply Chain', path: '/services/ai-supply-chain-optimization', icon: Truck },
        { name: 'AI Workflow Orchestrator', path: '/services/ai-workflow-orchestrator', icon: Workflow, new: true },
        { name: 'Space Technology', path: '/services/space-technology-platform', icon: Rocket, new: true },
        { name: 'Digital Twin Platform', path: '/services/digital-twin-platform', icon: Eye },
        { name: 'IoT Edge Computing', path: '/services/iot-edge-computing-platform', icon: Activity },
        { name: 'Green IT Sustainability', path: '/services/green-it-sustainability-platform', icon: Leaf, new: true }
      ]
    },
    {
      title: 'Enterprise Solutions',
      icon: Building,
      links: [
        { name: 'Blockchain Solutions', path: '/services/blockchain-enterprise-solutions', icon: LinkIcon },
        { name: 'Cloud DevOps', path: '/services/cloud-devops-automation', icon: Cloud },
        { name: 'AI Marketing Automation', path: '/services/ai-marketing-automation', icon: TrendingUp },
        { name: 'AI SEO Platform', path: '/services/ai-powered-seo-platform', icon: Code },
        { name: 'AI Predictive Maintenance', path: '/services/ai-predictive-maintenance', icon: Wrench },
        { name: 'AI HR Platform', path: '/services/ai-hr-platform', icon: Users },
        { name: 'AI Business Intelligence', path: '/services/ai-business-intelligence', icon: BarChart3 }
      ]
    },
    {
      title: 'Core Services',
      icon: Zap,
      links: [
        { name: 'Digital Transformation', path: '/services/digital-transformation', icon: Rocket },
        { name: 'AI Code Review', path: '/services/ai-code-review-security', icon: Code },
        { name: 'AI Content Optimizer', path: '/services/ai-content-optimizer-pro', icon: Edit },
        { name: 'AI Customer Experience', path: '/services/ai-customer-experience-analytics', icon: Smile },
        { name: 'AI DevOps Platform', path: '/services/ai-devops-automation-platform', icon: Settings },
        { name: 'AI Email Responder', path: '/services/ai-auto-email-responder', icon: Mail },
        { name: 'Comprehensive Services', path: '/comprehensive-services', icon: Globe, featured: true }
      ]
    },
    {
      title: 'Support & Resources',
      icon: HelpCircle,
      links: [
        { name: 'Documentation', path: '/docs', icon: FileText },
        { name: 'API Reference', path: '/api', icon: Cpu },
        { name: 'Support Center', path: '/support', icon: HelpCircle },
        { name: 'Training Programs', path: '/training', icon: GraduationCap },
        { name: 'Helpdesk', path: '/help', icon: HelpCircle },
        { name: 'Blog & Insights', path: '/blog', icon: Newspaper },
        { name: 'Case Studies', path: '/case-studies', icon: FileText }
      ]
    }
  ];

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-gray-900 text-white">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-8">
          {footerSections.map((section) => (
            <div key={section.title} className="space-y-4">
              <div className="flex items-center space-x-2">
                <section.icon className="w-5 h-5 text-cyan-400" />
                <h3 className="text-lg font-semibold text-white">{section.title}</h3>
              </div>
              <ul className="space-y-2">
                {section.links.map((link) => (
                  <li key={link.name}>
                    <Link
                      to={link.path}
                      className="flex items-center space-x-2 text-gray-300 hover:text-cyan-400 transition-colors group"
                    >
                      <link.icon className="w-4 h-4 group-hover:text-cyan-400" />
                      <span className="flex items-center gap-2">
                        {link.name}
                        {link.new && <span className="px-1.5 py-0.5 bg-cyan-500 text-white text-xs font-semibold rounded-full">NEW</span>}
                        {link.popular && <Star className="w-3 h-3 text-yellow-400" />}
                        {link.featured && <span className="px-1.5 py-0.5 bg-yellow-500 text-black text-xs font-semibold rounded-full">FEATURED</span>}
                      </span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Contact & Social Section */}
        <div className="mt-16 pt-8 border-t border-gray-800">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Contact Information */}
            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-white flex items-center space-x-2">
                <Globe className="w-5 h-5 text-cyan-400" />
                <span>Contact Information</span>
              </h3>
              <div className="space-y-3">
                <div className="flex items-center space-x-3 text-gray-300">
                  <Phone className="w-5 h-5 text-cyan-400" />
                  <a href="tel:+13024640950" className="hover:text-cyan-400 transition-colors">
                    +1 302 464 0950
                  </a>
                </div>
                <div className="flex items-center space-x-3 text-gray-300">
                  <Mail className="w-5 h-5 text-cyan-400" />
                  <a href="mailto:kleber@ziontechgroup.com" className="hover:text-cyan-400 transition-colors">
                    kleber@ziontechgroup.com
                  </a>
                </div>
                <div className="flex items-start space-x-3 text-gray-300">
                  <MapPin className="w-5 h-5 text-cyan-400 mt-0.5" />
                  <span>
                    364 E Main St STE 1008<br />
                    Middletown DE 19709
                  </span>
                </div>
              </div>
            </div>

            {/* Social Links & Newsletter */}
            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-white flex items-center space-x-2">
                <Users className="w-5 h-5 text-cyan-400" />
                <span>Connect With Us</span>
              </h3>
              <div className="flex space-x-4">
                <a href="#" className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center text-gray-300 hover:bg-cyan-500 hover:text-white transition-all duration-300">
                  <Twitter className="w-5 h-5" />
                </a>
                <a href="#" className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center text-gray-300 hover:bg-cyan-500 hover:text-white transition-all duration-300">
                  <Linkedin className="w-5 h-5" />
                </a>
                <a href="#" className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center text-gray-300 hover:bg-cyan-500 hover:text-white transition-all duration-300">
                  <Facebook className="w-5 h-5" />
                </a>
                <a href="#" className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center text-gray-300 hover:bg-cyan-500 hover:text-white transition-all duration-300">
                  <Instagram className="w-5 h-5" />
                </a>
                <a href="#" className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center text-gray-300 hover:bg-cyan-500 hover:text-white transition-all duration-300">
                  <Github className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Quick Stats */}
        <div className="mt-12 pt-8 border-t border-gray-800">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { number: '50+', label: 'Innovative Services', icon: Zap },
              { number: '10+', label: 'Technology Categories', icon: Globe },
              { number: '95%', label: 'Client Satisfaction', icon: Star },
              { number: '24/7', label: 'Expert Support', icon: HelpCircle }
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                className="space-y-2"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="flex justify-center">
                  <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-lg flex items-center justify-center">
                    <stat.icon className="w-6 h-6 text-white" />
                  </div>
                </div>
                <div className="text-2xl font-bold text-cyan-400">{stat.number}</div>
                <div className="text-sm text-gray-400">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="bg-black/50 border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="flex items-center space-x-2">
              <div className="w-6 h-6 bg-gradient-to-r from-cyan-400 to-blue-500 rounded flex items-center justify-center">
                <Zap className="w-4 h-4 text-white" />
              </div>
              <span className="text-white font-semibold">Zion Tech Group</span>
            </div>
            
            <div className="flex items-center space-x-6 text-sm text-gray-400">
              <Link to="/privacy-policy" className="hover:text-cyan-400 transition-colors">
                Privacy Policy
              </Link>
              <Link to="/terms-of-service" className="hover:text-cyan-400 transition-colors">
                Terms of Service
              </Link>
              <Link to="/cookie-policy" className="hover:text-cyan-400 transition-colors">
                Cookie Policy
              </Link>
              <Link to="/sitemap" className="hover:text-cyan-400 transition-colors">
                Sitemap
              </Link>
            </div>

            <div className="text-sm text-gray-400">
              © {currentYear} Zion Tech Group. All rights reserved.
            </div>
          </div>
        </div>
      </div>

      {/* Scroll to Top Button */}
      <motion.button
        onClick={scrollToTop}
        className="fixed bottom-8 right-8 w-12 h-12 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:ring-offset-2 focus:ring-offset-gray-900"
        whileHover={{ y: -2 }}
        whileTap={{ scale: 0.95 }}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3, delay: 1 }}
      >
        <ArrowUp className="w-6 h-6 mx-auto" />
      </motion.button>
    </footer>
  );
}
