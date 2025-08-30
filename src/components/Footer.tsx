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
  Network,
  Leaf,
  Calendar,
  Wrench,
  Satellite,
  Orbit,
  Gem,
  Crown,
  Sparkles,
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
        { name: 'About Us', path: '/about', icon: Users, description: 'Learn about our mission' },
        { name: 'Our Story', path: '/about/story', icon: FileText, description: 'How we started' },
        { name: 'Team', path: '/about/team', icon: Users, description: 'Meet our experts' },
        { name: 'Careers', path: '/careers', icon: Briefcase, description: 'Join our team' },
        { name: 'Partners', path: '/partners', icon: Network, description: 'Strategic partnerships' },
        { name: 'Press', path: '/press', icon: Newspaper, description: 'Latest news' },
        { name: 'Awards & Recognition', path: '/about/awards', icon: Award, description: 'Industry recognition' },
        { name: 'Sustainability', path: '/about/sustainability', icon: Leaf, description: 'Our commitment' },
        { name: 'Contact', path: '/contact', icon: Phone, description: 'Get in touch' }
      ]
    },
    {
      title: 'AI & Quantum Solutions',
      icon: Brain,
      links: [
        { name: 'AI Solutions Overview', path: '/services/ai-solutions', icon: Brain, description: 'Transform with AI' },
        { name: 'AI Business Intelligence', path: '/services/ai-business-intelligence', icon: TrendingUp, description: 'Data-driven insights' },
        { name: 'AI Project Management', path: '/services/ai-project-management', icon: Target, description: 'Smart project execution' },
        { name: 'AI Marketing Automation', path: '/services/ai-marketing-automation', icon: TrendingUp, description: 'Automated marketing' },
        { name: 'AI Healthcare Analytics', path: '/services/ai-healthcare-analytics', icon: Heart, description: 'Healthcare innovation' },
        { name: 'AI Content Generation', path: '/services/ai-content-generation', icon: FileText, description: 'AI-powered content' },
        { name: 'Quantum Computing', path: '/services/quantum-computing', icon: Atom, description: 'Next-gen computing' },
        { name: 'Quantum AI Platform', path: '/services/quantum-ai-platform', icon: Brain, description: 'Quantum-enhanced AI' },
        { name: 'Quantum Security', path: '/services/quantum-enhanced-cybersecurity', icon: Lock, description: 'Unbreakable security' },
        { name: 'Quantum Trading', path: '/services/quantum-ai-trading-platform', icon: DollarSign, description: 'Advanced trading' },
        { name: 'New Services 2025', path: '/new-services-2025', icon: Star, description: 'Latest innovations' }
      ]
    },
    {
      title: 'Advanced Technology',
      icon: Cpu,
      links: [
        { name: 'Cybersecurity Platform', path: '/services/ai-cybersecurity-platform', icon: Shield, description: 'Advanced protection' },
        { name: 'Zero Trust Security', path: '/services/zero-trust-network-access', icon: Lock, description: 'Modern security' },
        { name: 'Digital Twin Solutions', path: '/services/digital-twin', icon: Eye, description: 'Virtual replicas' },
        { name: 'IoT Edge Computing', path: '/services/iot-edge-computing', icon: Activity, description: 'Connected intelligence' },
        { name: 'Space Technology', path: '/services/space-technology', icon: Rocket, description: 'Space innovations' },
        { name: 'Blockchain Solutions', path: '/services/blockchain-enterprise-solutions', icon: Code, description: 'Decentralized future' },
        { name: 'Green IT Solutions', path: '/services/green-it', icon: Leaf, description: 'Sustainable technology' },
        { name: 'Cloud & DevOps', path: '/services/cloud-devops', icon: Cloud, description: 'Modern infrastructure' },
        { name: 'Data Analytics', path: '/services/data-analytics', icon: BarChart3, description: 'Insights-driven decisions' },
        { name: 'Machine Learning', path: '/services/machine-learning', icon: Brain, description: 'AI algorithms' }
      ]
    },
    {
      title: 'Core Services',
      icon: Zap,
      links: [
        { name: 'Digital Transformation', path: '/services/digital-transformation', icon: Rocket, description: 'Modernize your business' },
        { name: 'AI Workflow Automation', path: '/services/ai-workflow-automation', icon: Zap, description: 'Streamline processes' },
        { name: 'AI Enterprise Orchestrator', path: '/services/ai-enterprise-orchestrator', icon: Building, description: 'Enterprise AI' },
        { name: 'AI DevOps Automation', path: '/services/ai-devops-automation-platform', icon: Cpu, description: 'DevOps with AI' },
        { name: 'AI Financial Trading', path: '/services/ai-financial-trading-platform', icon: DollarSign, description: 'Trading intelligence' },
        { name: 'AI Supply Chain', path: '/services/ai-supply-chain-optimization', icon: Network, description: 'Supply chain AI' },
        { name: 'AI Predictive Maintenance', path: '/services/ai-predictive-maintenance', icon: Wrench, description: 'Predictive insights' },
        { name: 'AI Customer Support', path: '/services/ai-customer-support', icon: Users, description: 'Smart support' },
        { name: 'AI Content Optimization', path: '/services/ai-content-optimizer-pro', icon: FileText, description: 'Content enhancement' }
      ]
    },
    {
      title: 'Industry Solutions',
      icon: Target,
      links: [
        { name: 'Healthcare Technology', path: '/solutions/healthcare', icon: Heart, description: 'Healthcare innovation' },
        { name: 'Financial Services', path: '/solutions/financial', icon: DollarSign, description: 'Fintech solutions' },
        { name: 'Manufacturing', path: '/solutions/manufacturing', icon: Cpu, description: 'Smart manufacturing' },
        { name: 'Retail & E-commerce', path: '/solutions/retail', icon: ShoppingCart, description: 'Retail technology' },
        { name: 'Education', path: '/solutions/education', icon: GraduationCap, description: 'Edtech solutions' },
        { name: 'Government', path: '/solutions/government', icon: Building, description: 'Public sector tech' },
        { name: 'Energy & Utilities', path: '/solutions/energy', icon: Zap, description: 'Energy optimization' },
        { name: 'Transportation', path: '/solutions/transportation', icon: Rocket, description: 'Smart mobility' },
        { name: 'Real Estate', path: '/solutions/real-estate', icon: Building, description: 'Property technology' }
      ]
    },
    {
      title: 'Resources & Support',
      icon: FileText,
      links: [
        { name: 'Blog', path: '/blog', icon: Newspaper, description: 'Latest insights' },
        { name: 'Case Studies', path: '/case-studies', icon: FileText, description: 'Success stories' },
        { name: 'Research & Development', path: '/research-development', icon: TestTube, description: 'Innovation insights' },
        { name: 'Documentation', path: '/docs', icon: FileText, description: 'Technical guides' },
        { name: 'API Reference', path: '/api', icon: Cpu, description: 'Developer resources' },
        { name: 'Webinars', path: '/webinars', icon: Video, description: 'Educational content' },
        { name: 'White Papers', path: '/white-papers', icon: FileText, description: 'In-depth research' },
        { name: 'Events', path: '/events', icon: Calendar, description: 'Upcoming events' },
        { name: 'Training', path: '/training', icon: GraduationCap, description: 'Learn with us' },
        { name: 'Support', path: '/support', icon: HelpCircle, description: 'Get help' },
        { name: 'Helpdesk', path: '/help', icon: HelpCircle, description: 'Technical support' },
        { name: 'Sitemap', path: '/sitemap', icon: FileText, description: 'Site navigation' }
      ]
    }
  ];

  const quickLinks = [
    { name: 'Pricing', path: '/pricing', icon: DollarSign },
    { name: 'Get Started', path: '/contact', icon: ArrowRight },
    { name: 'Request Quote', path: '/request-quote', icon: FileText },
    { name: 'Support', path: '/support', icon: HelpCircle },
    { name: 'Careers', path: '/careers', icon: Briefcase },
    { name: 'Partners', path: '/partners', icon: Network }
  ];

  const socialLinks = [
    { name: 'LinkedIn', icon: Linkedin, href: 'https://linkedin.com/company/ziontechgroup', color: 'hover:text-blue-400' },
    { name: 'Twitter', icon: Twitter, href: 'https://twitter.com/ziontechgroup', color: 'hover:text-blue-400' },
    { name: 'Facebook', icon: Facebook, href: 'https://facebook.com/ziontechgroup', color: 'hover:text-blue-600' },
    { name: 'Instagram', icon: Instagram, href: 'https://instagram.com/ziontechgroup', color: 'hover:text-pink-400' },
    { name: 'GitHub', icon: Github, href: 'https://github.com/ziontechgroup', color: 'hover:text-gray-400' }
  ];

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-gray-900 text-white">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-8">
          {footerSections.map((section) => (
            <div key={section.title} className="space-y-4">
              <div className="flex items-center space-x-2">
                <section.icon className="w-5 h-5 text-cyan-400" />
                <h3 className="text-lg font-semibold text-white">{section.title}</h3>
              </div>
              <div className="space-y-3">
                {section.links.map((link) => (
                  <Link
                    key={link.name}
                    to={link.path}
                    className="group flex items-start space-x-3 text-gray-300 hover:text-white transition-colors"
                    onMouseEnter={() => setActiveSection(section.title)}
                    onMouseLeave={() => setActiveSection(null)}
                  >
                    <link.icon className="w-4 h-4 mt-0.5 text-gray-500 group-hover:text-cyan-400 transition-colors flex-shrink-0" />
                    <div className="min-w-0 flex-1">
                      <div className="text-sm font-medium group-hover:text-white transition-colors">
                        {link.name}
                      </div>
                      <div className="text-xs text-gray-500 group-hover:text-gray-400 transition-colors line-clamp-2">
                        {link.description}
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Quick Links & Social */}
        <div className="mt-12 pt-8 border-t border-gray-700">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Quick Links */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-white flex items-center space-x-2">
                <Zap className="w-5 h-5 text-cyan-400" />
                <span>Quick Links</span>
              </h3>
              <div className="grid grid-cols-2 gap-3">
                {quickLinks.map((link) => (
                  <Link
                    key={link.name}
                    to={link.path}
                    className="flex items-center space-x-2 text-gray-300 hover:text-white transition-colors group"
                  >
                    <link.icon className="w-4 h-4 text-gray-500 group-hover:text-cyan-400 transition-colors" />
                    <span className="text-sm">{link.name}</span>
                  </Link>
                ))}
              </div>
            </div>

            {/* Contact Information */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-white flex items-center space-x-2">
                <Phone className="w-5 h-5 text-cyan-400" />
                <span>Contact Us</span>
              </h3>
              <div className="space-y-3 text-sm text-gray-300">
                <div className="flex items-center space-x-3">
                  <Phone className="w-4 h-4 text-gray-500" />
                  <a href="tel:+13024640950" className="hover:text-white transition-colors">
                    +1 302 464 0950
                  </a>
                </div>
                <div className="flex items-center space-x-3">
                  <Mail className="w-4 h-4 text-gray-500" />
                  <a href="mailto:kleber@ziontechgroup.com" className="hover:text-white transition-colors">
                    kleber@ziontechgroup.com
                  </a>
                </div>
                <div className="flex items-start space-x-3">
                  <MapPin className="w-4 h-4 text-gray-500 mt-0.5" />
                  <address className="not-italic hover:text-white transition-colors">
                    364 E Main St STE 1008<br />
                    Middletown DE 19709
                  </address>
                </div>
              </div>
            </div>

            {/* Social Media */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-white flex items-center space-x-2">
                <Globe className="w-5 h-5 text-cyan-400" />
                <span>Follow Us</span>
              </h3>
              <div className="flex space-x-4">
                {socialLinks.map((social) => (
                  <a
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`p-2 bg-gray-800 rounded-lg text-gray-400 transition-all duration-200 hover:bg-cyan-500/20 hover:text-cyan-400 ${social.color}`}
                    aria-label={`Follow us on ${social.name}`}
                  >
                    <social.icon className="w-5 h-5" />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Newsletter Signup */}
        <div className="mt-12 pt-8 border-t border-gray-700">
          <div className="max-w-2xl mx-auto text-center">
            <h3 className="text-xl font-semibold text-white mb-2">Stay Updated</h3>
            <p className="text-gray-400 mb-6">Get the latest insights on AI, quantum computing, and emerging technologies.</p>
            <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 bg-gray-800 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
              />
              <button className="px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-medium rounded-lg hover:from-cyan-600 hover:to-blue-700 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:ring-offset-2 focus:ring-offset-gray-900">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="bg-black/50 border-t border-gray-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
            {/* Copyright & Links */}
            <div className="flex flex-col md:flex-row items-center space-y-2 md:space-y-0 md:space-x-6 text-sm text-gray-400">
              <div className="flex items-center space-x-2">
                <Zap className="w-4 h-4 text-cyan-400" />
                <span>&copy; {currentYear} Zion Tech Group. All rights reserved.</span>
              </div>
              <div className="flex items-center space-x-4">
                <Link to="/privacy-policy" className="hover:text-white transition-colors">Privacy Policy</Link>
                <Link to="/terms-of-service" className="hover:text-white transition-colors">Terms of Service</Link>
                <Link to="/cookie-policy" className="hover:text-white transition-colors">Cookie Policy</Link>
                <Link to="/accessibility" className="hover:text-white transition-colors">Accessibility</Link>
              </div>
            </div>

            {/* Back to Top */}
            <button
              onClick={scrollToTop}
              className="flex items-center space-x-2 px-4 py-2 bg-gray-800 hover:bg-gray-700 text-gray-300 hover:text-white rounded-lg transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:ring-offset-2 focus:ring-offset-gray-900"
              aria-label="Back to top"
            >
              <ArrowUp className="w-4 h-4" />
              <span className="hidden sm:inline">Back to Top</span>
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
