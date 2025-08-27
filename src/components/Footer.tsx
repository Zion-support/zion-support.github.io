import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
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
  BarChart3,
  Sparkles,
  Award,
  Workflow,
  Lock,
  Star,
  BookOpen,
  MessageCircle
} from 'lucide-react';

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const currentYear = new Date().getFullYear();

  const footerSections = [
    {
      title: 'Company',
      icon: Globe,
      links: [
        { name: 'About Us', path: '/about', icon: Users },
        { name: 'Partners', path: '/partners', icon: Users },
        { name: 'Careers', path: '/careers', icon: Briefcase },
        { name: 'Solutions', path: '/solutions', icon: Target },
        { name: 'AI Solutions', path: '/ai-solutions', icon: Brain },
        { name: 'Blog', path: '/blog', icon: Newspaper },
        { name: 'Contact', path: '/contact', icon: Phone },
        { name: 'Press', path: '/press', icon: Newspaper },
        { name: 'Leadership', path: '/leadership', icon: Users },
      ]
    },
    {
      title: 'AI & Research Services',
      icon: Brain,
      links: [
        { name: 'AI Autonomous Research Assistant', path: '/services/ai-autonomous-research-assistant', icon: Brain },
        { name: 'AI Content Marketing Suite', path: '/services/ai-content-marketing-suite', icon: FileText },
        { name: 'AI Supply Chain Optimization', path: '/services/ai-supply-chain-optimization', icon: TrendingUp },
        { name: 'AI Healthcare Platform', path: '/services/ai-healthcare-platform', icon: Heart },
        { name: 'AI Business Intelligence', path: '/services/ai-business-intelligence', icon: BarChart3 },
        { name: 'AI Project Management', path: '/services/ai-project-management', icon: Target },
        { name: 'AI Sales Copilot', path: '/services/ai-sales-copilot', icon: Users },
        { name: 'AI Marketing Automation', path: '/services/ai-marketing-automation', icon: TrendingUp },
        { name: 'AI Workflow Automation', path: '/services/ai-workflow-automation', icon: Workflow },
        { name: 'AI Data Analytics', path: '/services/ai-data-analytics', icon: BarChart3 },
      ]
    },
    {
      title: 'Advanced Technology',
      icon: Cpu,
      links: [
        { name: 'AI Quantum Hybrid Platform', path: '/services/ai-quantum-hybrid-platform', icon: Cpu },
        { name: 'AI Cybersecurity Platform', path: '/services/ai-cybersecurity-platform', icon: Shield },
        { name: 'Quantum Computing', path: '/services/quantum-computing', icon: Cpu },
        { name: 'IoT Edge Computing', path: '/services/iot-edge-computing', icon: Activity },
        { name: 'Digital Twin', path: '/services/digital-twin', icon: Cpu },
        { name: 'Blockchain Solutions', path: '/services/blockchain', icon: Lock },
        { name: 'Green IT Solutions', path: '/services/green-it', icon: Heart },
        { name: 'Zero Trust Network', path: '/services/zero-trust-network-access', icon: Shield },
        { name: 'Space Technology', path: '/services/space-tech', icon: Rocket },
      ]
    },
    {
      title: 'Core Services',
      icon: Zap,
      links: [
        { name: 'Cloud & DevOps', path: '/services/cloud-devops', icon: Cloud },
        { name: 'IT Infrastructure', path: '/services/it-infrastructure', icon: Building },
        { name: 'Data Analytics', path: '/services/data-analytics', icon: TrendingUp },
        { name: 'Digital Transformation', path: '/services/digital-transformation', icon: Rocket },
        { name: 'IT Services', path: '/it-services', icon: Building },
        { name: 'Micro SaaS Solutions', path: '/micro-saas-solutions', icon: Zap },
        { name: 'Enterprise Solutions', path: '/enterprise', icon: Building },
        { name: 'Healthcare Solutions', path: '/solutions/healthcare', icon: Heart },
        { name: 'All Services', path: '/services', icon: Zap }
      ]
    },
    {
      title: 'Innovation Hub',
      icon: Sparkles,
      links: [
        { name: 'Innovative Services 2028', path: '/innovative-services-showcase-2028', icon: Sparkles },
        { name: 'Comprehensive Pricing 2028', path: '/comprehensive-pricing-2028', icon: DollarSign },
        { name: 'Ultimate Services 2026', path: '/ultimate-services-showcase-2026', icon: Rocket },
        { name: 'Services 2026', path: '/services-2026', icon: Target },
        { name: 'New Services 2025', path: '/new-services-showcase-2025', icon: TrendingUp },
        { name: 'Ultimate Services 2025', path: '/ultimate-services-showcase-2025', icon: Award },
        { name: 'Comprehensive Services 2025', path: '/comprehensive-services-landing-2025', icon: Globe },
        { name: 'Revolutionary Services 2030', path: '/revolutionary-services-2030', icon: Rocket },
        { name: 'Advanced Services 2026', path: '/advanced-innovative-services-showcase-2026', icon: Star },
      ]
    },
    {
      title: 'Support & Resources',
      icon: HelpCircle,
      links: [
        { name: 'Help Center', path: '/help', icon: HelpCircle },
        { name: 'Documentation', path: '/documentation', icon: FileText },
        { name: 'Training', path: '/training', icon: GraduationCap },
        { name: 'Webinars', path: '/webinars', icon: Video },
        { name: 'Case Studies', path: '/case-studies', icon: BookOpen },
        { name: 'White Papers', path: '/white-papers', icon: FileText },
        { name: 'FAQ', path: '/faq', icon: HelpCircle },
        { name: 'Support', path: '/support', icon: MessageCircle },
        { name: 'System Status', path: '/system-status', icon: Activity },
      ]
    }
  ];

  const legal = [
    { name: "Privacy Policy", path: "/privacy" },
    { name: "Terms of Service", path: "/terms" },
    { name: "Cookie Policy", path: "/cookies" },
    { name: "Sitemap", path: "/sitemap" }
  ];

  const socialLinks = [
    {
      name: "LinkedIn",
      url: "https://linkedin.com/company/ziontechgroup",
      icon: Linkedin,
      color: "hover:text-blue-600"
    },
    {
      name: "Twitter",
      url: "https://twitter.com/ziontechgroup",
      icon: Twitter,
      color: "hover:text-blue-400"
    },
    {
      name: "Facebook",
      url: "https://facebook.com/ziontechgroup",
      icon: Facebook,
      color: "hover:text-blue-600"
    },
    {
      name: "Instagram",
      url: "https://instagram.com/ziontechgroup",
      icon: Instagram,
      color: "hover:text-pink-500"
    },
    {
      name: "GitHub",
      url: "https://github.com/ziontechgroup",
      icon: Github,
      color: "hover:text-gray-400"
    }
  ];

  const contactInfo = [
    {
      name: "Email",
      value: "kleber@ziontechgroup.com",
      url: "mailto:kleber@ziontechgroup.com",
      icon: Mail
    },
    {
      name: "Phone",
      value: "+1 302 464 0950",
      url: "tel:+13024640950",
      icon: Phone
    },
    {
      name: "Address",
      value: "364 E Main St STE 1008 Middletown DE 19709",
      url: "https://www.google.com/maps/search/?api=1&query=364+E+Main+St+STE+1008+Middletown+DE+19709",
      icon: MapPin
    }
  ];

  return (
    <footer className="bg-zion-slate-dark text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMC4wMiI+PGNpcmNsZSBjeD0iMzAiIGN5PSIzMCIgcj0iMiIvPjwvZz48L2c+PC9zdmc+')] opacity-30"/>
      
      <div className="container mx-auto px-4 py-16 relative z-10">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8 mb-12">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-10 h-10 bg-gradient-to-r from-zion-cyan to-zion-purple rounded-lg flex items-center justify-center">
                <Zap className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-white">
                  Zion Tech Group
                </h3>
                <p className="text-sm text-zion-slate-light">Innovating the future</p>
              </div>
            </div>
            <p className="text-zion-slate-light mb-6 max-w-md">
              Leading the way in AI, quantum computing, and space technology solutions. 
              Empowering businesses with cutting-edge innovations for tomorrow's challenges.
            </p>
            {/* Contact Info */}
            <div className="space-y-3">
              {contactInfo.map((contact) => (
                <a
                  key={contact.name}
                  href={contact.url}
                  className="flex items-center space-x-3 text-zion-slate-light hover:text-white transition-colors duration-200"
                >
                  <contact.icon className="w-4 h-4 text-zion-cyan" />
                  <span className="text-sm">{contact.value}</span>
                </a>
              ))}
            </div>
          </div>

          {/* Navigation Sections */}
          {footerSections.map((section) => (
            <div key={section.title}>
              <div className="flex items-center space-x-2 mb-4">
                <section.icon className="w-5 h-5 text-zion-cyan" />
                <h4 className="font-semibold text-white">{section.title}</h4>
              </div>
              <ul className="space-y-2">
                {section.links.map((link) => (
                  <li key={link.name}>
                    <Link
                      to={link.path}
                      className="text-zion-slate-light hover:text-zion-cyan transition-colors duration-200 text-sm flex items-center space-x-2 group"
                    >
                      <link.icon className="w-3 h-3 text-zion-slate-light group-hover:text-zion-cyan transition-colors duration-200" />
                      <span>{link.name}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Newsletter Section */}
        <div className="border-t border-zion-slate-light/20 pt-8 mb-8">
          <FooterNewsletter />
        </div>

        {/* Bottom Footer */}
        <div className="border-t border-zion-slate-light/20 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            {/* Copyright and Legal */}
            <div className="flex flex-col sm:flex-row items-center space-y-2 sm:space-y-0 sm:space-x-6 text-sm text-zion-slate-light">
              <span>&copy; {currentYear} Zion Tech Group. All rights reserved.</span>
              <div className="flex space-x-4">
                {legal.map((item) => (
                  <Link
                    key={item.name}
                    to={item.path}
                    className="hover:text-white transition-colors duration-200"
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
            </div>

            {/* Social Links */}
            <div className="flex space-x-4">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`text-zion-slate-light ${social.color} transition-colors duration-200 p-2 rounded-lg hover:bg-zion-slate-light/10`}
                  aria-label={social.name}
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Scroll to Top Button */}
        <motion.button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 bg-gradient-to-r from-zion-cyan to-zion-purple text-white p-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 z-50"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          <ArrowUp className="w-5 h-5" />
        </motion.button>
      </div>
    </footer>
  );
}
