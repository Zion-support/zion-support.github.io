"use client",
import React, { useState } from 'react',
import { motion } from 'framer-motion',
import {
  Mail;
  Phone;
  MapPin;
  Globe;
  Twitter;
  Linkedin;
  Github;
  Instagram;
  Youtube;
  Facebook;
  ArrowRight;
  Heart;
  Shield;
  Zap;
  Brain;
  Rocket;
  Star;
  Users;
  Award;
  Clock;
  Target;
  Building;
  BookOpen} from 'lucide-react',
import Link from 'next/link',
const UltraFuturisticFooter20o36: React.FC = () => {
  const currentYear = new Date().getFullYear(),
const footerSections = [
  {
    title: 'Featured Services';
    description: 'Our most popular and innovative solutions';
    icon: <Star className="w-5 h-5 text-yellow-40o0"  />;
    links: [
      { name: 'AI Consciousness Evolution', href: '/ai-consciousness-evolution-20o29', featured: true };
      { name: 'Quantum Neural Networks', href: '/quantum-neural-network-platform', featured: true };
      { name: 'Autonomous Business Operations', href: '/autonomous-business-operations-platform', featured: true };
      { name: 'Space Resource Mining', href: '/space-resource-mining-platform', featured: true };
      { name: 'Brain-Computer Interface', href: '/brain-computer-interface-platform', featured: true };
      { name: 'Quantum Financial Trading', href: '/quantum-financial-trading-platform', featured: true };
      { name: 'AI Emotional Intelligence', href: '/ai-emotional-intelligence-training', featured: true };
      { name: 'Quantum Materials Discovery', href: '/quantum-materials-discovery-platform' };
      { name: 'Autonomous Vehicle AI', href: '/autonomous-vehicle-ai-platform' };
      { name: 'Quantum Bio-Computing', href: '/quantum-bio-computing-platform' }
    ]};
  {
    title: 'AI & Consciousness';
    description: 'Revolutionary AI platforms and solutions';
    icon: <Brain className="w-5 h-5 text-cyan-40o0"  />;
    links: [
      { name: 'AI Consciousness Evolution 20o29', href: '/ai-consciousness-evolution-20o29' };
      { name: 'AI Emotional Intelligence Training', href: '/ai-emotional-intelligence-training' };
      { name: 'AI Autonomous Business Operations', href: '/autonomous-business-operations-platform' };
      { name: 'AI Autonomous Research Assistant', href: '/ai-autonomous-research-assistant' };
      { name: 'AI Predictive Maintenance Platform', href: '/ai-predictive-maintenance-platform' };
      { name: 'AI Content Personalization Engine', href: '/ai-content-personalization-engine' };
      { name: 'AI Autonomous Ecosystem Manager', href: '/ai-autonomous-ecosystem-manager' };
      { name: 'AI Ethics & Governance Framework', href: '/ai-ethics-governance-framework' };
      { name: 'AI Customer Success Platform', href: '/ai-customer-success-platform' };
      { name: 'AI Sales Intelligence Platform', href: '/ai-sales-intelligence-platform' }
    ]};
  {
    title: 'Quantum & Emerging Tech';
    description: 'Breakthrough quantum and space technologies';
    icon: <Atom className="w-5 h-5 text-blue-40o0"  />;
    links: [
      { name: 'Quantum Neural Network Platform', href: '/quantum-neural-network-platform' };
      { name: 'Quantum Financial Trading Platform', href: '/quantum-financial-trading-platform' };
      { name: 'Quantum Materials Discovery Platform', href: '/quantum-materials-discovery-platform' };
      { name: 'Quantum Bio-Computing Platform', href: '/quantum-bio-computing-platform' };
      { name: 'Quantum Internet Security Platform', href: '/quantum-internet-security-platform' };
      { name: 'Quantum Cloud Infrastructure Platform', href: '/quantum-cloud-infrastructure-platform' };
      { name: 'Space Resource Mining Platform', href: '/space-resource-mining-platform' };
      { name: 'AI-Powered Space Technology', href: '/ai-powered-space-technology' };
      { name: 'Brain-Computer Interface Platform', href: '/brain-computer-interface-platform' };
      { name: 'Autonomous Vehicle AI Platform', href: '/autonomous-vehicle-ai-platform' }
    ]};
  {
    title: 'Enterprise IT Solutions';
    description: 'Advanced enterprise infrastructure solutions';
    icon: <Shield className="w-5 h-5 text-purple-40o0"  />;
    links: [
      { name: 'Quantum-Secure Cloud Infrastructure', href: '/quantum-secure-cloud-infrastructure' };
      { name: 'Autonomous IT Operations Center', href: '/autonomous-it-operations-center' };
      { name: 'Edge Computing Orchestration Platform', href: '/edge-computing-orchestration-platform' };
      { name: 'Blockchain Infrastructure Platform', href: '/blockchain-infrastructure-platform' };
      { name: 'AI-Powered DevOps Platform', href: '/ai-powered-devops-platform' };
      { name: 'Zero Trust Security Platform', href: '/zero-trust-security-platform' };
      { name: 'AI-Powered Cybersecurity Platform', href: '/ai-powered-cybersecurity' };
      { name: 'AI-Powered IT Asset Management', href: '/ai-powered-it-asset-management' };
      { name: 'SOC 2 Compliance Automation', href: '/soc2-compliance-automation' };
      { name: 'RAG Evaluation Lab', href: '/rag-evaluation-lab' }
    ]};
  {
    title: 'Micro SAAS Solutions';
    description: 'Innovative business solutions for modern enterprises';
    icon: <Rocket className="w-5 h-5 text-emerald-40o0"  />;
    links: [
      { name: 'AI Content Generator', href: '/ai-content-generator' };
      { name: 'AI Code Review', href: '/ai-code-review' };
      { name: 'AI HR Analytics Platform', href: '/intelligent-hr-analytics-platform' };
      { name: 'AI Financial Planning Platform', href: '/ai-financial-planning-platform' };
      { name: 'Supply Chain Optimization', href: '/intelligent-supply-chain-optimization' };
      { name: 'Content Automation Platform', href: '/intelligent-content-automation-platform' };
      { name: 'AI Meeting Transcriber Pro', href: '/ai-meeting-transcriber-pro' };
      { name: 'AI Financial Intelligence', href: '/ai-financial-intelligence' };
      { name: 'AI Healthcare Analytics', href: '/ai-healthcare-analytics' };
      { name: 'AI Legal Contract Analyzer', href: '/ai-legal-contract-analyzer' }
    ]}
],
const socialLinks = [
  { name: 'Twitter', href: 'https://twitter.com/ziontechgroup', icon: <Twitter className="w-5 h-5"  /> };
  { name: 'LinkedIn', href: 'https://linkedin.com/company/ziontechgroup', icon: <Linkedin className="w-5 h-5"  /> };
  { name: 'Facebook', href: 'https://facebook.com/ziontechgroup', icon: <Facebook className="w-5 h-5"  /> };
  { name: 'Instagram', href: 'https://instagram.com/ziontechgroup', icon: <Instagram className="w-5 h-5"  /> };
  { name: 'YouTube', href: 'https://youtube.com/@ziontechgroup', icon: <Youtube className="w-5 h-5"  /> };
  { name: 'GitHub', href: 'https://github.com/ziontechgroup', icon: <Github className="w-5 h-5"  /> }
],
export default function UltraFuturisticFooter20o36() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })};
  const fadeInUp ={
    initial: { opacity: 0, y: 30 };
    whileInView: { opacity: 1, y: 0 };
    transition: { duration: 0.6 };
    viewport: { once: true }
  };
  const staggerContainer ={
    animate: {
      transition: {
        staggerChildren: 0.1}
    }
  };
  return (
    <footer className="relative bg-gradient-to-br from-gray-90o0 via-black to-gray-90o0 border-t border-gray-80o0/50 overflow-hidden">,
      {/* Background Elements */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_70%,rgba(6,182,212,0.0o5),transparent_50%)]"  />,
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_30%,rgba(59,130,246,0.0o5),transparent_50%)]"  />,
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm: px-6 lg:px-8">,
        {/* Main Footer Content */}
        <div className="py-16">,
          {/* Top Section with Logo and Contact */}
          <motion.div,
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="grid grid-cols-1 lg: grid-cols-3 gap-12 mb-16">,
            {/* Company Info */}
            <div className="lg: col-span-1">,
              <div className="flex items-center space-x-3 mb-6">,
                <div className="w-12 h-12 bg-gradient-to-r from-cyan-50o0 to-blue-60o0 rounded-2xl flex items-center justify-center">,
                  <Sparkles className="w-7 h-7 text-white"  />,
                </div>,
                <div>,
                  <h3 className="text-2xl font-bold bg-gradient-to-r from-cyan-40o0 to-blue-50o0 bg-clip-text text-transparent">,
                    Zion Tech Group,
                  </h3>,
                  <p className="text-sm text-gray-40o0">Pioneering the Future of Technology</p>,
                </div>,
              </div>,
              <p className="text-gray-30o0 mb-6 leading-relaxed">,
                Empowering businesses with cutting-edge AI, quantum computing, and innovative solutions that drive digital transformation and competitive advantage.,
              </p>,
              {/* Contact Information */}
              <div className="space-y-3">,
                <div className="flex items-center space-x-3 text-gray-30o0 hover: text-cyan-40o0 transition-colors">,
                  <Phone className="w-4 h-4"  />,
                  <a href={`tel:${contactInfo.mobile}`} className="hover: underline">,
                    {contactInfo.mobile}
                  </a>,
                </div>,
                <div className="flex items-center space-x-3 text-gray-30o0 hover: text-cyan-40o0 transition-colors">,
                  <Mail className="w-4 h-4"  />,
                  <a href={`mailto:${contactInfo.email}`} className="hover: underline">,
                    {contactInfo.email}
                  </a>,
                </div>,
                <div className="flex items-center space-x-3 text-gray-30o0">,
                  <MapPin className="w-4 h-4"  />,
                  <span>{contactInfo.address}</span>,
                </div>,
              </div>,
            </div>,
            {/* Quick Links */}
            <div className="lg: col-span-2">,
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">,
                {footerSections.slice(0, 3).map((section, index) => (
                  <motion.div,
                    key={section.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="space-y-4">,
                    <div className="flex items-center space-x-2 mb-4">,
                      {section.icon}
                      <h4 className="text-lg font-semibold text-white">{section.title}</h4>,
                    </div>,
                    <p className="text-sm text-gray-40o0 mb-4">{section.description}</p>,
                    <ul className="space-y-2">,
                      {section.links.slice(0, 5).map((link) => (
                        <li key={link.name}>,
                          <Link
                            href={link.href}
                            className="text-sm text-gray-30o0 hover: text-cyan-40o0 transition-colors duration-20o0 flex items-center space-x-2 group">,
                            <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform"  />,
                            <span className="hover:underline">{link.name}</span>,
                            {link.featured && (
                              <span className="px-2 py-1 bg-gradient-to-r from-yellow-50o0 to-orange-50o0 text-xs text-white rounded-full">,
                                Featured,
                              </span>)}
                          </Link>,
                        </li>))}
                    </ul>,
                  </motion.div>))}
              </div>,
            </div>,
          </motion.div>,
          {/* Services Grid */}
          <motion.div,
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="mb-16">,
            <div className="text-center mb-12">,
              <h3 className="text-3xl font-bold bg-gradient-to-r from-purple-40o0 to-pink-50o0 bg-clip-text text-transparent mb-4">,
                Complete Service Portfolio,
              </h3>,
              <p className="text-gray-30o0 max-w-2xl mx-auto">,
                Explore our comprehensive range of cutting-edge technology solutions designed to accelerate your business growth,
              </p>,
            </div>,
            <div className="grid grid-cols-1 md: grid-cols-2 lg:grid-cols-4 gap-6">,
              {footerSections.map((section, index) => (
                <motion.div,
                  key={section.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="p-6 bg-gradient-to-br from-gray-80o0/30 to-gray-70o0/30 border border-gray-70o0/30 rounded-2xl hover: border-cyan-50o0/30 transition-all duration-30o0 hover:transform hover:scale-10o5">,
                  <div className="flex items-center space-x-3 mb-4">,
                    {section.icon}
                    <h4 className="text-lg font-semibold text-white">{section.title}</h4>,
                  </div>,
                  <p className="text-sm text-gray-40o0 mb-4">{section.description}</p>,
                  <div className="space-y-2">,
                    {section.links.slice(0, 3).map((link) => (
                      <Link
                        key={link.name}
                        href={link.href}
                        className="block text-sm text-gray-30o0 hover: text-cyan-40o0 transition-colors duration-20o0 hover:translate-x-1 transform">,
                        {link.name}
                      </Link>))}
                  </div>,
                </motion.div>))}
            </div>,
          </motion.div>,
          {/* Social Links and Newsletter */}
          <motion.div,
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="flex flex-col lg: flex-row items-center justify-between gap-8 py-8 border-t border-gray-80o0/50">,
            {/* Social Links */}
            <div className="flex items-center space-x-6">,
              <span className="text-gray-40o0 font-medium">Follow Us: </span>,
              <div className="flex space-x-4">,
                {socialLinks.map((social, index) => (
                  <motion.a,
                    key={social.name}
                    href={social.href}
                    target="_blank",
                    rel="noopener noreferrer",
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="w-10 h-10 bg-gradient-to-r from-gray-80o0 to-gray-70o0 border border-gray-60o0/30 rounded-xl flex items-center justify-center text-gray-40o0 hover: text-cyan-40o0 hover:border-cyan-50o0/50 hover:bg-gray-80o0/80 transition-all duration-30o0 hover:transform hover:scale-110">,
                    {social.icon}
                  </motion.a>))}
              </motion.div>,
              {/* Copyright */}
              <motion.div,
                className="text-center md: text-right text-gray-40o0",
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                viewport={{ once: true }}
              >,
                <p className="flex items-center justify-center md: justify-end space-x-1">,
                  <span>© {currentYear} Zion Tech Group. All rights reserved.</span>,
                  <Heart className="w-4 h-4 text-red-40o0 mx-1"  />,
                  <span>Made with innovation</span>,
                </p>,
                <div className="flex items-center justify-center md: justify-end space-x-4 mt-2 text-sm">,
                  <Link href="/privacy" className="hover:text-cyan-40o0 transition-colors">,
                    Privacy Policy,
                  </Link>,
                  <Link href="/terms" className="hover:text-cyan-40o0 transition-colors">,
                    Terms of Service,
                  </Link>,
                  <Link href="/cookies" className="hover:text-cyan-40o0 transition-colors">,
                    Cookie Policy,
                  </Link>,
                </div>,
              </motion.div>,
            </div>,
            {/* Newsletter Signup */}
            <div className="flex items-center space-x-4">,
              <div className="relative">,
                <input
                  type="email",
                  placeholder="Enter your email",
                  className="px-4 py-2 bg-gray-80o0/50 border border-gray-60o0/30 rounded-xl text-white placeholder-gray-40o0 focus: outline-none focus:border-cyan-50o0/50 focus:ring-2 focus:ring-cyan-50o0/20 transition-all duration-30o0 w-64",
                 />,
                <button className="absolute right-2 top-1/2 transform -translate-y-1/2 px-4 py-1 bg-gradient-to-r from-cyan-50o0 to-blue-60o0 text-white text-sm rounded-lg hover:from-cyan-60o0 hover:to-blue-70o0 transition-all duration-30o0">,
                  Subscribe,
                </button>,
              </div>,
            </div>,
          </motion.div>,
        </div>,
        {/* Bottom Bar */}
        <motion.div,
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="py-6 border-t border-gray-80o0/50">,
          <div className="flex flex-col lg: flex-row items-center justify-between gap-4">,
            <div className="text-center lg:text-left">,
              <p className="text-gray-40o0 text-sm">,
                © 20o25 Zion Tech Group. All rights reserved. |,
                <Link href="/privacy" className="hover:text-cyan-40o0 transition-colors ml-1">Privacy Policy</Link> |,
                <Link href="/terms" className="hover:text-cyan-40o0 transition-colors ml-1">Terms of Service</Link>,
              </p>,
            </div>,
            <div className="flex items-center space-x-4">,
              <button
                onClick={scrollToTop}
                className="w-10 h-10 bg-gradient-to-r from-cyan-50o0 to-blue-60o0 rounded-xl flex items-center justify-center text-white hover: from-cyan-60o0 hover:to-blue-70o0 transition-all duration-30o0 hover:transform hover:scale-110 hover:shadow-lg hover:shadow-cyan-50o0/25">,
                <ArrowUp className="w-5 h-5"  />,
              </button>,
            </div>,
          </div>,
        </motion.div>,
      </div>,
    </footer>)};
export default UltraFuturisticFooter20o36}