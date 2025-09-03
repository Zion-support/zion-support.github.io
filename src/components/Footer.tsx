<<<<<<< HEAD
import React from 'react';
import Link from 'next/link';
import { Phone, Mail, MapPin, Linkedin, Twitter, Facebook, Instagram, ArrowUp } from 'lucide-react';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const currentYear = new Date().getFullYear();

  const footerLinks = {
    services: [
      { name: 'AI Services', href: '/ai-services' },
      { name: 'IT Services', href: '/it-services' },
      { name: 'Micro SaaS', href: '/micro-saas' },
      { name: 'Cloud Solutions', href: '/services' },
      { name: 'Cybersecurity', href: '/services' },
      { name: 'Digital Transformation', href: '/services' }
    ],
    solutions: [
      { name: 'Enterprise Solutions', href: '/solutions' },
      { name: 'Startup Solutions', href: '/solutions' },
      { name: 'Healthcare Solutions', href: '/solutions' },
      { name: 'Financial Solutions', href: '/solutions' },
      { name: 'Government Solutions', href: '/solutions' }
    ],
    company: [
      { name: 'About Us', href: '/about' },
      { name: 'Our Team', href: '/about' },
      { name: 'Careers', href: '/careers' },
      { name: 'Partners', href: '/partners' },
      { name: 'Case Studies', href: '/case-studies' }
    ],
    resources: [
      { name: 'Blog', href: '/blog' },
      { name: 'Documentation', href: '/docs' },
      { name: 'API Reference', href: '/api' },
      { name: 'Developer Portal', href: '/developer' },
      { name: 'Support', href: '/support' }
    ]
  };

  const socialLinks = [
    { name: 'Facebook', icon: Facebook, href: 'https://facebook.com/ziontechgroup' },
    { name: 'Twitter', icon: Twitter, href: 'https://twitter.com/ziontechgroup' },
    { name: 'LinkedIn', icon: Linkedin, href: 'https://linkedin.com/company/ziontechgroup' },
    { name: 'Instagram', icon: Instagram, href: 'https://instagram.com/ziontechgroup' }
=======
<<<<<<< HEAD
import React from 'react';
=======
<<<<<<< HEAD
import React, { useState } from &apos;
import { motion } from &apos;framer-motion';;
import Link from &apos;next/link';react.ts';
import { Link               } from &apos;react-router-dom.ts';
import { motion               } from &apos;framer-motion.ts';
import { Twitter,
  Linkedin,
  Instagram,
  Globe,
  Linkedin,
  Twitter,
  Facebook,
  Instagram,
  Youtube,
  Github,
  Zap,
  Brain,
  Shield,
  Users,
  HardDrive,
  TrendingUp,
  Building2,
  FileText,
  HelpCircle,
  BarChart3,
  ArrowUp,
  Heart,
  Star,
  CheckCircle,
  Award,
  Lock,
  Eye,
  Atom,
  Code,
  Database,
  Network,
  Server;
  Rocket,
  Target,
  Handshake,
  Lightbulb,
  Cpu,
  Database,
  Network,
  Smartphone,
  Lock,
  Code,
  Server,
  Chip,
  Wifi,
  ShieldCheck,
  Bot,
  Workflow,
  Eye,
  Sparkles,
  Atom,
  Leaf,
  Gamepad2,
  Coins,
  Satellite,
  Activity,
  MessageCircle,
  Search,
  BarChart,
  Users2,
  Settings,
  Palette} from &apos;lucide-react';&apos;&apos;
export function Footer(...args: any[]): any {}
  const currentYear = new Date().getFullYear();
  const [activeSection, setActiveSection] = useState<;<;<any>(null);
  const footerSections = [
    {
      title: &apos;Comp&apos;,
      icon: Building,
      links: [{ nam,e: &apos;About Us&apos;, path: &apos;/about&apos;, icon: Users },
        { name: &apos;Our Story&apos;, path: &apos;/about/story&apos;, icon: FileText },
        { name: &apos;Team&apos;, path: &apos;/about/team&apos;, icon: Users },
        { name: &apos;Careers&apos;, path: &apos;/careers&apos;, icon: Briefcase },
        { name: &apos;Partners&apos;, path: &apos;/partners&apos;, icon: Network },
        { name: &apos;Press&apos;, path: &apos;/press&apos;, icon: Newspaper },
        { name: &apos;Contact&apos;, path: &apos;/contact&apos;, icon: Phone }
      ]},
    {
      title: &apos;AI & Quantum Solutions&apos;,
      icon: Brain,
      category: &apos;Core Services&apos;,
      services: [
        { nam,e: &apos;AI Customer Success Automation&apos;, href: &apos;/services/ai-customer-success-automation&apos;, badge: &apos;Popular&apos; },
        { name: &apos;AI Healthcare Analytics Platform&apos;, href: &apos;/services/ai-healthcare-analytics-platform&apos;, badge: &apos;New&apos; },
        { name: &apos;AI Financial Risk Management&apos;, href: &apos;/services/ai-financial-risk-management-enhanced&apos;, badge: &apos;Featured&apos; },
        { name: &apos;AI Supply Chain Optimization&apos;, href: &apos;/services/ai-supply-chain-optimization-enhanced&apos;, badge: &apos;Trending&apos; },
        { name: &apos;AI Legal Document Automation&apos;, href: &apos;/services/ai-legal-document-automation-platform&apos;, badge: &apos;Innovative&apos; },
        { name: &apos;AI Mental Health Support&apos;, href: &apos;/services/ai-mental-health-support-platform&apos;, badge: &apos;Healthcare&apos; },
        { name: &apos;AI Smart Home Energy Management&apos;, href: &apos;/services/ai-smart-home-energy-management-platform&apos;, badge: &apos;IoT&apos; },
        { name: &apos;AI Autonomous Logistics&apos;, href: &apos;/services/ai-autonomous-logistics-platform&apos;, badge: &apos;Logistics&apos; },
        { name: &apos;AI-Powered SEO&apos;, href: &apos;/services/ai-powered-seo&apos;, badge: &apos;Marketing&apos; },
        { name: &apos;Quantum Edge Computing&apos;, href: &apos;/services/quantum-edge-computing-solutions&apos;, badge: &apos;Quantum&apos; },
        { name: &apos;AI Space Technology&apos;, href: &apos;/services/ai-space-technology-platform&apos;, badge: &apos;Space Tech&apos; },
        { name: &apos;AI Carbon Footprint Management&apos;, href: &apos;/services/ai-carbon-footprint-management-platform&apos;, badge: &apos;Green Tech&apos; },
        { name: &apos;AI Autonomous Manufacturing&apos;, href: &apos;/services/ai-autonomous-manufacturing-platform&apos;, badge: &apos;Manufacturing&apos; },
        { name: &apos;AI Enterprise Resource Planning&apos;, href: &apos;/services/ai-enterprise-resource-planning&apos;, badge: &apos;ERP&apos; },
        { name: &apos;AI Autonomous Business Operations&apos;, href: &apos;/services/ai-autonomous-business-operations-platform&apos;, badge: &apos;Automation&apos; },
        { name: &apos;AI Customer Experience Analytics&apos;, href: &apos;/services/ai-customer-experience-analytics-platform&apos;, badge: &apos;Analytics&apos; }
      ]},
    {
      title: &apos;AI Cybersecurity & Infrastructure&apos;,
      icon: Shield,
      category: &apos;Security & Infrastructure&apos;,
      services: [
        { nam,e: &apos;AI-Powered DevOps Automation&apos;, href: &apos;/services/ai-powered-devops-automation&apos;, badge: &apos;New&apos; },
        { name: &apos;AI-Powered Cybersecurity Suite&apos;, href: &apos;/services/ai-powered-cybersecurity-suite&apos;, badge: &apos;Security&apos; },
        { name: &apos;Enterprise IT Infrastructure Management&apos;, href: &apos;/services/enterprise-it-infrastructure-management&apos;, badge: &apos;Infrastructure&apos; },
        { name: &apos;Cloud Migration & Optimization&apos;, href: &apos;/services/cloud-migration-and-optimization&apos;, badge: &apos;Cloud&apos; },
        { name: &apos;AI Data Analytics Platform&apos;, href: &apos;/services/ai-data-analytics-platform&apos;, badge: &apos;Analytics&apos; },
        { name: &apos;AI DevOps Automation&apos;, href: &apos;/services/ai-devops-automation&apos;, badge: &apos;DevOps&apos; },
        { name: &apos;Edge Computing Platform&apos;, href: &apos;/services/edge-computing-platform&apos;, badge: &apos;Edge&apos; }
      ]},
    {
      title: &apos;Micro SaaS Solutions&apos;,
      icon: Code,
      category: &apos;Micro SaaS&apos;,
      services: [
        { nam,e: &apos;AI Email Automation Suite&apos;, href: &apos;/services/ai-email-automation-suite&apos;, badge: &apos;New&apos; },
        { name: &apos;AI Social Media Scheduler&apos;, href: &apos;/services/ai-social-media-scheduler&apos;, badge: &apos;New&apos; },
        { name: &apos;AI Customer Insights Platform&apos;, href: &apos;/services/ai-customer-insights-platform&apos;, badge: &apos;New&apos; },
        { name: &apos;Micro CRM&apos;, href: &apos;/services/micro-crm&apos;, badge: &apos;Popular&apos; },
        { name: &apos;Helpdesk Platform&apos;, href: &apos;/services/helpdesk-platform&apos;, badge: &apos;Support&apos; },
        { name: &apos;Website Analytics&apos;, href: &apos;/services/website-analytics&apos;, badge: &apos;Analytics&apos; }
      ]},
    {
      title: &apos;Solutions&apos;,
      links: [
        { nam,e: &apos;Enterprise Solutions&apos;, href: &apos;/enterprise&apos; },
        { name: &apos;Healthcare Tech&apos;, href: &apos;/solutions/healthcare&apos; },
        { name: &apos;Financial Solutions&apos;, href: &apos;/financial-solutions&apos; },
        { name: &apos;Manufacturing&apos;, href: &apos;/manufacturing-solutions&apos; },
        { name: &apos;Industry Solutions&apos;, href: &apos;/industry-solutions&apos; },
        { name: &apos;Emerging Tech&apos;, href: &apos;/emerging-tech&apos; }
      ]},
    {
      title: &apos;Company&apos;,
      links: [
        { nam,e: &apos;About Us&apos;, href: &apos;/about&apos; },
        { name: &apos;Our Team&apos;, href: &apos;/about/team&apos; },
        { name: &apos;Careers&apos;, href: &apos;/careers&apos; },
        { name: &apos;Partners&apos;, href: &apos;/partners&apos; },
        { name: &apos;News & Updates&apos;, href: &apos;/news&apos; },
        { name: &apos;Case Studies&apos;, href: &apos;/case-studies&apos; }
      ]},
    {
      title: &apos;Quantum Computing & Emerging Tech&apos;,
      icon: Atom,
      services: [
        { nam,e: &apos;AI-Quantum Hybrid Computing Platform&apos;, href: &apos;/services/ai-quantum-hybrid-platform&apos; },
        { name: &apos;Quantum Computing as a Service&apos;, href: &apos;/services/quantum-computing-as-a-service&apos; },
        { name: &apos;AI Space Technology Platform&apos;, href: &apos;/services/ai-space-technology-platform&apos; },
        { name: &apos;AI IoT Edge Computing Platform&apos;, href: &apos;/services/ai-iot-edge-computing-platform&apos; }
      ]},
    {
      title: &apos;Resources&apos;,
      links: [
        { nam,e: &apos;Documentation&apos;, href: &apos;/docs&apos; },
        { name: &apos;White Papers&apos;, href: &apos;/white-papers&apos; },
        { name: &apos;Support Center&apos;, href: &apos;/help&apos; },
        { name: &apos;Training&apos;, href: &apos;/training&apos; },
        { name: &apos;Blog&apos;, href: &apos;/blog&apos; },
        { name: &apos;Research&apos;, href: &apos;/research-development&apos; }
      ]}
  ];&apos;
  const solutions = [
    { name: &apos;Enterprise Solutions&apos;, href: &apos;/solutions/enterprise&apos; },
    { name: &apos;Healthcare Solutions&apos;, href: &apos;/solutions/healthcare&apos; },
    { name: &apos;Financial Solutions&apos;, href: &apos;/solutions/financial&apos; },
    { name: &apos;Government Solutions&apos;, href: &apos;/solutions/government&apos; },
    { name: &apos;Manufacturing Solutions&apos;, href: &apos;/solutions/manufacturing&apos; },
    { name: &apos;Retail Solutions&apos;, href: &apos;/solutions/retail&apos; },
    { name: &apos;Education Solutions&apos;, href: &apos;/solutions/education&apos; },
    { name: &apos;Startup Solutions&apos;, href: &apos;/solutions/startup&apos; }
  ]
  return(&apos;
    <footer className=&apos;bg-zion-blue-dark border-t border-zion-purple/30&apos;>
      {/* Main Footer Content */}&apos;
      <div className=&apos;max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12&apos;>&apos;'
        <div className=&apos;grid grid-cols-1 md:grid-cols-2 l,g:grid-cols-5 gap-8&apos;>
          {/* Company Info */}&apos;
          <div className=&apos;space-y-4&apos;>&apos;'
            <div className=&apos;flex items-center space-x-2&apos;>&apos;'
              <div className=&apos;w-10 h-10 bg-gradient-to-r from-zion-cyan to-zion-purple rounded-lg flex items-center justify-center&apos;>&apos;'
                <Zap className=&apos;w-6 h-6 text-white&apos; />&apos;
              </div>
              <span className=&apos;text-xl font-bold text-white&apos;>Zion Tech Group&apos;</span>
            </div>
            <;<p className=&apos;text-zion-slate-light text-sm leading-relaxed&apos;>
              Leading provider of innovative AI, IT, and Micro SAAS solutions.;
              Transforming businesses through cutting-edge technology and expert consulting.&apos;
            </p>
            <div className=&apos;space-y-3&apos;>&apos;'
              <div className=&apos;flex items-center text-zion-slate-light text-sm&apos;>&apos;'
                <Phone className=&apos;w-4 h-4 mr-2 text-zion-cyan&apos; />&apos;
                <a href=&apos;tel:+13024640950&apos; className=&apos;hover:text-zion-cyan transition-colors&apos;>
                  +1 302 464 0950&apos;
                </a>
              </div>
              <div className=&apos;flex items-center text-zion-slate-light text-sm&apos;>&apos;'
                <Mail className=&apos;w-4 h-4 mr-2 text-zion-cyan&apos; />&apos;
                <a href=&apos;mailto:kleber@ziontechgroup.com&apos; className=&apos;hove,r:text-zion-cyan transition-colors&apos;>
                  kleber@ziontechgroup.com&apos;
                </a>
              </div>
              <div className=&apos;flex items-center text-zion-slate-light text-sm&apos;>&apos;'
                <MapPin className=&apos;w-4 h-4 mr-2 text-zion-cyan&apos; />&apos;
                <span>364 E Main St STE 1008<br />Middletown, DE 19709</span>
              </div>
            </div>
          </div>
          {/* Service Sections */}
          {footerSections.slice(1, 6).map((section) => (}
            <div key={section.title} className=&apos;space-y-4&apos;>&apos;'
              <div className=&apos;flex items-center space-x-2&apos;>&apos;'
                <section.icon className=&apos;w-5 h-5 text-cyan-400&apos; />&apos;
                <h3 className=&apos;font-semibold text-white&apos;>{section.title}&apos;</h3>
              </div>
              <div className=&apos;space-y-2&apos;>
                {section.links.map((link) => (&apos;}
                  <Link
                    key={link.name}
                    to={link.path}
                    className=&apos;block text-sm text-gray-300 hover:text-cyan-400 transition-colors duration-200 group';&apos;&apos;
                    <div className=&apos;flex items-center space-x-2&apos;>&apos;'
                      <link.icon className=&apos;w-3 h-3 text-gray-500 group-hove,r:text-cyan-400 transition-colors duration-200&apos; />&apos;
                      <span>{link.name}</span>
                    </div>
                  </Link>
                ))}
              </div>
    <footer className=&apos;bg-gray-900 text-white&apos;>
      {/* Main Footer Content */}&apos;
      <div className=&apos;max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16&apos;>&apos;'
        <div className=&apos;grid grid-cols-1 md: anyanyanyanyanyanyanyanyanyanyanyanyanyanygrid-cols-2 l,g:grid-cols-4 gap-8&apos;>
          {footerSections.map((section)               => (&apos;}
            <div key={section.title} className=&apos;space-y-4&apos;>&apos;'
              <motion.button;
                onClick={() => setActiveSection(activeSection === section.title ? null : section.title)}
                className=&apos;flex items-center space-x-2 text-lg font-semibold text-white hover:text-cyan-400 transition-colors focus:outline-none focus:ring-2 focus:ring-cyan-500 focu,s:ring-inset rounded p-2&apos;
                aria-expanded={activeSection === section.title}
              >&apos;
                <section.icon className=&apos;w-5 h-5&apos; />&apos;
                <span>{section.title}</span>
              </motion.button>
              <motion.div
                initial={false}
                animate={{ height: activeSection === section.title ? &apos;auto&apos; : 0, opacity: activeSection === section.title ? 1 : 0 }}
                transition={{ duration: 0.3 }}
                className=&apos;overflow-hidden&apos;>&apos;'
                <div className=&apos;space-y-2&apos;>
                  {section.links.map((link) => (&apos;}
                    <Link
                      key={link.name}
                      to={link.path}
                      className=&apos;flex items-center space-x-2 text-gray-400 hover:text-cyan-400 transition-colors p-2 rounded focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:ring-inset group&apos;>&apos;'
                      <link.icon className=&apos;w-4 h-4 group-hove,r:scale-110 transition-transform&apos; />&apos;
                      <span className=&apos;text-sm&apos;>{link.name}&apos;</span>
                    </Link>
                  ))}
                </div>
              </motion.div>
            </div>
          ))}
        </div>
        {/* Contact & Social Section */}
        <div className=&apos;mt-12 pt-8 border-t border-gray-700&apos;>&apos;'
          <div className=&apos;grid grid-cols-1 md:grid-cols-2 gap-8&apos;>
            {/* Contact Information */}&apos;
            <div className=&apos;space-y-4&apos;>&apos;'
              <h3 className=&apos;text-lg font-semibold text-white flex items-center space-x-2&apos;>&apos;'
                <Mail className=&apos;w-5 h-5 text-cyan-400&apos; />&apos;
                <span>Get in Touch</span>
              </h3>
              <div className=&apos;space-y-3&apos;>&apos;'
                <div className=&apos;flex items-center space-x-3 text-gray-400&apos;>&apos;'
                  <Mail className=&apos;w-4 h-4 text-cyan-400&apos; />&apos;
                  <span>contact@ziontechgroup.com</span>
                </div>
                <div className=&apos;flex items-center space-x-3 text-gray-400&apos;>&apos;'
                  <Phone className=&apos;w-4 h-4 text-cyan-400&apos; />&apos;
                  <span>+1 (555) 123-4567</span>
                </div>
                <div className=&apos;flex items-center space-x-3 text-gray-400&apos;>&apos;'
                  <MapPin className=&apos;w-4 h-4 text-cyan-400&apos; />&apos;
                  <span>123 Innovation Drive, Tech City, TC 12345</span>
                </div>
              <div className=&apos;flex items-center text-zion-slate-light text-sm&apos;>&apos;'
                <MapPin className=&apos;w-4 h-4 mr-2 text-zion-cyan&apos; />&apos;
                <span>364 E Main St STE 1008, Middletown DE 19709</span>
              </div>
            </div>
            <div className=&apos;flex space-x-4&apos;>&apos;'
              <a href=&apos;https://linkedin.com/company/ziontechgroup&apos; className=&apos;text-zion-slate-light hover:text-zion-cyan transition-colors&apos;>&apos;'
                <Linkedin className=&apos;w-5 h-5&apos; />&apos;
              </a>
              <a href=&apos;https://twitter.com/ziontechgroup&apos; className=&apos;text-zion-slate-light hover:text-zion-cyan transition-colors&apos;>&apos;'
                <Twitter className=&apos;w-5 h-5&apos; />&apos;
              </a>
              <a href=&apos;https://facebook.com/ziontechgroup&apos; className=&apos;text-zion-slate-light hover:text-zion-cyan transition-colors&apos;>&apos;'
                <Facebook className=&apos;w-5 h-5&apos; />&apos;
              </a>
              <a href=&apos;https://instagram.com/ziontechgroup&apos; className=&apos;text-zion-slate-light hover:text-zion-cyan transition-colors&apos;>&apos;'
                <Instagram className=&apos;w-5 h-5&apos; />&apos;
              </a>
              <a href=&apos;https://youtube.com/ziontechgroup&apos; className=&apos;text-zion-slate-light hover:text-zion-cyan transition-colors&apos;>&apos;'
                <Youtube className=&apos;w-5 h-5&apos; />&apos;
              </a>
              <a href=&apos;https://github.com/ziontechgroup&apos; className=&apos;text-zion-slate-light hove,r:text-zion-cyan transition-colors&apos;>&apos;'
                <Github className=&apos;w-5 h-5&apos; />&apos;
              </a>
            </div>
          </div>
          {/* Services */}
          <div className=&apos;space-y-4&apos;>&apos;'
            <h3 className=&apos;text-zion-cyan font-semibold text-lg flex items-center&apos;>&apos;'
              <Zap className=&apos;w-5 h-5 mr-2&apos; />
              Services&apos;
            </h3>
            <ul className=&apos;space-y-2 text-sm&apos;>&apos;'
              <li><Link to=&apos;/ai-services&apos; className=&apos;text-zion-slate-light hover:text-zion-cyan transition-colors&apos;>AI Services&apos;</Link></li>
              <li><Link to=&apos;/it-services&apos; className=&apos;text-zion-slate-light hover:text-zion-cyan transition-colors&apos;>IT Services&apos;</Link></li>
              <li><Link to=&apos;/micro-saas&apos; className=&apos;text-zion-slate-light hover:text-zion-cyan transition-colors&apos;>Micro SAAS&apos;</Link></li>
              <li><Link to=&apos;/cloud-devops&apos; className=&apos;text-zion-slate-light hover:text-zion-cyan transition-colors&apos;>Cloud & DevOps&apos;</Link></li>
              <li><Link to=&apos;/cybersecurity&apos; className=&apos;text-zion-slate-light hover:text-zion-cyan transition-colors&apos;>Cybersecurity&apos;</Link></li>
              <li><Link to=&apos;/quantum-computing&apos; className=&apos;text-zion-slate-light hover:text-zion-cyan transition-colors&apos;>Quantum Computing&apos;</Link></li>
              <li><Link to=&apos;/blockchain&apos; className=&apos;text-zion-slate-light hover:text-zion-cyan transition-colors&apos;>Blockchain Solutions&apos;</Link></li>
              <li><Link to=&apos;/digital-transformation&apos; className=&apos;text-zion-slate-light hove,r:text-zion-cyan transition-colors&apos;>Digital Transformation&apos;</Link></li>
            </ul>
          </div>
          {/* Solutions */}
          <div className=&apos;space-y-4&apos;>&apos;'
            <h3 className=&apos;text-zion-cyan font-semibold text-lg flex items-center&apos;>&apos;'
              <Brain className=&apos;w-5 h-5 mr-2&apos; />
              Solutions&apos;
            </h3>
            <ul className=&apos;space-y-2 text-sm&apos;>&apos;'
              <li><Link to=&apos;/enterprise&apos; className=&apos;text-zion-slate-light hover:text-zion-cyan transition-colors&apos;>Enterprise Solutions&apos;</Link></li>
              <li><Link to=&apos;/healthcare&apos; className=&apos;text-zion-slate-light hover:text-zion-cyan transition-colors&apos;>Healthcare Tech&apos;</Link></li>
              <li><Link to=&apos;/financial&apos; className=&apos;text-zion-slate-light hover:text-zion-cyan transition-colors&apos;>Financial Solutions&apos;</Link></li>
              <li><Link to=&apos;/manufacturing&apos; className=&apos;text-zion-slate-light hover:text-zion-cyan transition-colors&apos;>Manufacturing&apos;</Link></li>
              <li><Link to=&apos;/retail&apos; className=&apos;text-zion-slate-light hover:text-zion-cyan transition-colors&apos;>Retail Solutions&apos;</Link></li>
              <li><Link to=&apos;/government&apos; className=&apos;text-zion-slate-light hover:text-zion-cyan transition-colors&apos;>Government&apos;</Link></li>
              <li><Link to=&apos;/education&apos; className=&apos;text-zion-slate-light hover:text-zion-cyan transition-colors&apos;>Education&apos;</Link></li>
              <li><Link to=&apos;/startup&apos; className=&apos;text-zion-slate-light hove,r:text-zion-cyan transition-colors&apos;>Startup Solutions&apos;</Link></li>
            </ul>
          </div>
          {/* Company & Resources */}
          <div className=&apos;space-y-4&apos;>&apos;'
            <h3 className=&apos;text-zion-cyan font-semibold text-lg flex items-center&apos;>&apos;'
              <Building2 className=&apos;w-5 h-5 mr-2&apos; />
              Company&apos;
            </h3>
            <ul className=&apos;space-y-2 text-sm&apos;>&apos;'
              <li><Link to=&apos;/about&apos; className=&apos;text-zion-slate-light hover:text-zion-cyan transition-colors&apos;>About Us&apos;</Link></li>
              <li><Link to=&apos;/team&apos; className=&apos;text-zion-slate-light hover:text-zion-cyan transition-colors&apos;>Our Team&apos;</Link></li>
              <li><Link to=&apos;/careers&apos; className=&apos;text-zion-slate-light hover:text-zion-cyan transition-colors&apos;>Careers&apos;</Link></li>
              <li><Link to=&apos;/partners&apos; className=&apos;text-zion-slate-light hover:text-zion-cyan transition-colors&apos;>Partners&apos;</Link></li>
              <li><Link to=&apos;/news&apos; className=&apos;text-zion-slate-light hover:text-zion-cyan transition-colors&apos;>News&apos;</Link></li>
              <li><Link to=&apos;/events&apos; className=&apos;text-zion-slate-light hover:text-zion-cyan transition-colors&apos;>Events&apos;</Link></li>
              <li><Link to=&apos;/contact&apos; className=&apos;text-zion-slate-light hove,r:text-zion-cyan transition-colors&apos;>Contact&apos;</Link></li>
            </ul>
          </div>
        </div>
        {/* Contact Information */}
        <div className=&apos;mt-12 pt-8 border-t border-zion-purple/20&apos;>&apos;'
          <div className=&apos;grid grid-cols-1 md:grid-cols-3 gap-6&apos;>&apos;'
            <div className=&apos;flex items-center space-x-3&apos;>&apos;'
              <div className=&apos;w-10 h-10 bg-zion-purple/20 rounded-lg flex items-center justify-center&apos;>&apos;'
                <Phone className=&apos;w-5 h-5 text-zion-cyan&apos; />&apos;
              </div>
              <div>
                <p className=&apos;text-zion-slate-light text-sm&apos;>Phone&apos;</p>
                <p className=&apos;text-white font-medium&apos;>+1 302 464 0950&apos;</p>
              </div>
            </div>
            <div className=&apos;flex items-center space-x-3&apos;>&apos;'
              <div className=&apos;w-10 h-10 bg-zion-purple/20 rounded-lg flex items-center justify-center&apos;>&apos;'
                <Mail className=&apos;w-5 h-5 text-zion-cyan&apos; />&apos;
              </div>
              <div>
                <p className=&apos;text-zion-slate-light text-sm&apos;>Email&apos;</p>
                <p className=&apos;text-white font-medium&apos;>kleber@ziontechgroup.com&apos;</p>
              </div>
            </div>
            <div className=&apos;flex items-center space-x-3&apos;>&apos;'
              <div className=&apos;w-10 h-10 bg-zion-purple/20 rounded-lg flex items-center justify-center&apos;>&apos;'
                <MapPin className=&apos;w-5 h-5 text-zion-cyan&apos; />&apos;
              </div>
              <div>
                <p className=&apos;text-zion-slate-light text-sm&apos;>Address&apos;</p>
                <p className=&apos;text-white font-medium&apos;>364 E Main St STE 1008&apos;<br />Middletown DE 19709</p>
=======
<<<<<<< HEAD
>>>>>>> main
import Link from 'next/link';
<<<<<<< HEAD
import {Phone, Mail, MapPin, Linkedin, Twitter, Facebook, Instagram } from 'lucide-react';

<<<<<<< HEAD
export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold text-blue-400">Zion Tech Group</h3>
            <p className="text-gray-300">
              Transforming businesses through cutting-edge technology and expert consulting.
            </p>
            <div className="flex space-x-4">
              <a href="https://linkedin.com/company/ziontechgroup" className="text-gray-400 hover:text-blue-400 transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="https://twitter.com/ziontechgroup" className="text-gray-400 hover:text-blue-400 transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="https://facebook.com/ziontechgroup" className="text-gray-400 hover:text-blue-400 transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="https://instagram.com/ziontechgroup" className="text-gray-400 hover:text-blue-400 transition-colors">
=======
export function Footer() {import React, { useState } from 'react.ts';"
import {Link               } from 'react-router-dom.ts';"
import {motion               } from 'framer-motion.ts';
import {Twitter, Linkedin,
  Instagram, Globe,
  Linkedin, Twitter,
  Facebook, Instagram,
  Youtube, Github,
  Zap, Brain,
  Shield, Users,
  HardDrive, TrendingUp,
  Building2, FileText,
  HelpCircle, BarChart3,
  ArrowUp, Heart,
  Star, CheckCircle,
  Award, Lock,;
  Eye, Atom,;
  Code, Database,;
  Network, Server;
  Rocket, Target,
  Handshake, Lightbulb,
  Cpu, Database,
  Network, Smartphone,
  Lock, Code,
  Server, Chip,
  Wifi, ShieldCheck,
  Bot, Workflow,
  Eye, Sparkles,
  Atom, Leaf,
  Gamepad2, Coins,
  Satellite, Activity,
  MessageCircle, Search,
  BarChart, Users2,
  Settings, Palette} from 'lucide-react';
=======
<<<<<<< HEAD
export function Footer() {
import React, { useState } from 'react.ts';"
import { Link               } from 'react-router-dom.ts';"
import { motion               } from 'framer-motion.ts';
>>>>>>> main
export function Footer(...args: any[]): any {
=======
import { Phone, Mail, MapPin, Linkedin, Twitter, Facebook, Instagram } from 'lucide-react';
=======
import React from 'react';
import Link from 'next/link';
import { Phone, Mail, MapPin, Linkedin, Twitter, Facebook, Instagram, Globe, ArrowUp } from 'lucide-react';
>>>>>>> main

export default function Footer() {
>>>>>>> main
  const currentYear = new Date().getFullYear();

<<<<<<< HEAD
  const footerSections = [
    {
      title: 'Services', links: [
        { name: 'AI Solutions', href: '/services/ai-solutions' }, { name: 'Cloud Services', href: '/services/cloud-services' }, { name: 'Cybersecurity', href: '/services/cybersecurity' }, { name: 'Digital Transformation', href: '/services/digital-transformation' }
      ]
    }, {
      title: 'Company',
      links: [
        { name: 'About Us', href: '/about' },
        { name: 'Our Team', href: '/team' },
        { name: 'Careers', href: '/careers' },
        { name: 'Contact', href: '/contact' }
      ]
    }, {
      title: 'Resources',
      links: [
        { name: 'Blog', href: '/blog' },
        { name: 'Case Studies', href: '/case-studies' },
        { name: 'Documentation', href: '/documentation' },
        { name: 'Support', href: '/support' }
      ]
    }
  ];

  const socialLinks = [
    { name: 'LinkedIn', href: 'https://linkedin.com/company/zion-tech-group', icon: Linkedin }, { name: 'Twitter', href: 'https://twitter.com/ziontechgroup', icon: Twitter },
    { name: 'Facebook', href: 'https://facebook.com/ziontechgroup', icon: Facebook }, { name: 'Instagram', href: 'https://instagram.com/ziontechgroup', icon: Instagram }
>>>>>>> main
  ];

  return (
    <footer className="bg-gray-900 text-white">
<<<<<<< HEAD
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <div className="flex items-center mb-4">
              <h3 className="text-2xl font-bold text-blue-400">Zion Tech Group</h3>
            </div>
            <p className="text-gray-300 mb-6 max-w-md">
              Leading provider of revolutionary AI services, IT solutions, and micro SaaS development. 
              We help businesses innovate, scale, and succeed in the digital age.
            </p>
            
            {/* Contact Information */}
            <div className="space-y-3">
              <div className="flex items-center text-gray-300">
                <Phone className="w-5 h-5 mr-3 text-blue-400" />
                <a href="tel:+13024640950" className="hover:text-blue-400 transition-colors">
                  +1 302 464 0950
                </a>
              </div>
              <div className="flex items-center text-gray-300">
                <Mail className="w-5 h-5 mr-3 text-blue-400" />
                <a href="mailto:kleber@ziontechgroup.com" className="hover:text-blue-400 transition-colors">
                  kleber@ziontechgroup.com
                </a>
              </div>
              <div className="flex items-start text-gray-300">
                <MapPin className="w-5 h-5 mr-3 mt-1 text-blue-400 flex-shrink-0" />
                <span>
                  364 E Main St STE 1008<br />
                  Middletown, DE 19709
                </span>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex space-x-4 mt-6">
=======
      <div className="max-w-7xl mx-auto px-4 sm: px-6 lg:px-8 py-12">
=======
<<<<<<< HEAD
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-12">
=======
  const scrollToTop = () => {;
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-gray-900 text-white">
<<<<<<< HEAD
      <div className="max-w-7xl mx-auto px-4 sm: px-6 lg:px-8 py-12">
=======
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
>>>>>>> main
>>>>>>> main
>>>>>>> main
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
<<<<<<< HEAD
              <div className="w-10 h-10 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-xl">Z</span>
              </div>
              <div className="text-xl font-bold">Zion Tech Group</div>
            </div>
            <p className="text-gray-300 text-sm">
              Leading provider of AI-powered solutions, cloud infrastructure, and digital transformation services.
            </p>
            <div className="flex space-x-4">
              <a href="https://linkedin.com/company/ziontechgroup" className="text-gray-400 hover:text-white transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="https://twitter.com/ziontechgroup" className="text-gray-400 hover:text-white transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="https://facebook.com/ziontechgroup" className="text-gray-400 hover:text-white transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="https://instagram.com/ziontechgroup" className="text-gray-400 hover:text-white transition-colors">
=======
              <div className="w-8 h-8 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-lg flex items-center justify-center">
                <Globe className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold">Zion Tech Group</span>
            </div>
            <p className="text-gray-400 text-sm">
              Leading provider of revolutionary AI services, IT solutions, and micro SaaS development. 
              We help businesses innovate, scale, and succeed in the digital age.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover: text-cyan-400 transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-cyan-400 transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-cyan-400 transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-cyan-400 transition-colors">
>>>>>>> main
>>>>>>> main
                <Instagram className="w-5 h-5" />
              </a>
            </div>
          </div>

<<<<<<< HEAD
          {/* Services */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-blue-400">Services</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/ai-services" className="text-gray-300 hover:text-white transition-colors">
                  AI Services
                </Link>
              </li>
              <li>
                <Link href="/it-services" className="text-gray-300 hover:text-white transition-colors">
                  IT Services
                </Link>
              </li>
              <li>
                <Link href="/micro-saas" className="text-gray-300 hover:text-white transition-colors">
                  Micro SaaS
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-gray-300 hover:text-white transition-colors">
                  All Services
                </Link>
              </li>
            </ul>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-blue-400">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/about" className="text-gray-300 hover:text-white transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-300 hover:text-white transition-colors">
                  Contact
                </Link>
              </li>
              <li>
                <Link href="/solutions" className="text-gray-300 hover:text-white transition-colors">
                  Solutions
                </Link>
              </li>
              <li>
                <Link href="/blog" className="text-gray-300 hover:text-white transition-colors">
                  Blog
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-blue-400">Contact Us</h4>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-blue-400" />
                <a href="tel:+13024640950" className="text-gray-300 hover:text-white transition-colors">
=======
<<<<<<< HEAD
          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Contact Info</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Mail className="w-4 h-4 text-blue-400" />
                <span className="text-sm text-gray-300">info@ziontechgroup.com</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-4 h-4 text-blue-400" />
                <span className="text-sm text-gray-300">+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="w-4 h-4 text-blue-400" />
                <span className="text-sm text-gray-300">San Francisco, CA</span>
              </div>
            </div>
          </div>

<<<<<<< HEAD
          {/* Footer Links */}
          {footerSections.map((section) => (
            <div key={section.title}>
              <h3 className="text-lg font-semibold mb-4">{section.title}</h3>
              <ul className="space-y-2">
                {section.links.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="text-gray-400 hover: text-white transition-colors"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
=======
          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Quick Links</h3>
            <div className="space-y-2">
              <Link href="/about" className="block text-sm text-gray-300 hover:text-white transition-colors">
                About Us
              </Link>
              <Link href="/services" className="block text-sm text-gray-300 hover:text-white transition-colors">
                Services
              </Link>
              <Link href="/products" className="block text-sm text-gray-300 hover:text-white transition-colors">
                Products
              </Link>
              <Link href="/contact" className="block text-sm text-gray-300 hover:text-white transition-colors">
                Contact
              </Link>
>>>>>>> main
            </div>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Services</h3>
            <div className="space-y-2">
              <Link href="/ai-services" className="block text-sm text-gray-300 hover:text-white transition-colors">
                AI Services
              </Link>
              <Link href="/it-services" className="block text-sm text-gray-300 hover:text-white transition-colors">
                IT Services
              </Link>
              <Link href="/micro-saas" className="block text-sm text-gray-300 hover:text-white transition-colors">
                Micro SaaS
              </Link>
              <Link href="/consulting" className="block text-sm text-gray-300 hover:text-white transition-colors">
                Consulting
              </Link>
=======
          {/* Services */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Services</h3>
            <ul className="space-y-2">
              <li><Link href="/ai-services" className="text-gray-400 hover:text-cyan-400 transition-colors text-sm">AI Services</Link></li>
              <li><Link href="/it-services" className="text-gray-400 hover:text-cyan-400 transition-colors text-sm">IT Services</Link></li>
              <li><Link href="/micro-saas" className="text-gray-400 hover:text-cyan-400 transition-colors text-sm">Micro SaaS</Link></li>
              <li><Link href="/services" className="text-gray-400 hover:text-cyan-400 transition-colors text-sm">All Services</Link></li>
              <li><Link href="/solutions" className="text-gray-400 hover:text-cyan-400 transition-colors text-sm">Solutions</Link></li>
              <li><Link href="/pricing" className="text-gray-400 hover:text-cyan-400 transition-colors text-sm">Pricing</Link></li>
            </ul>
          </div>

          {/* Company */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Company</h3>
            <ul className="space-y-2">
              <li><Link href="/about" className="text-gray-400 hover:text-cyan-400 transition-colors text-sm">About Us</Link></li>
              <li><Link href="/team" className="text-gray-400 hover:text-cyan-400 transition-colors text-sm">Our Team</Link></li>
              <li><Link href="/careers" className="text-gray-400 hover:text-cyan-400 transition-colors text-sm">Careers</Link></li>
              <li><Link href="/blog" className="text-gray-400 hover:text-cyan-400 transition-colors text-sm">Blog</Link></li>
              <li><Link href="/case-studies" className="text-gray-400 hover:text-cyan-400 transition-colors text-sm">Case Studies</Link></li>
              <li><Link href="/partners" className="text-gray-400 hover:text-cyan-400 transition-colors text-sm">Partners</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Contact</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Phone className="w-4 h-4 text-cyan-400" />
                <a href="tel:+13024640950" className="text-gray-400 hover:text-cyan-400 transition-colors text-sm">
>>>>>>> main
                  +1 302 464 0950
                </a>
              </div>
              <div className="flex items-center space-x-3">
<<<<<<< HEAD
                <Mail className="w-5 h-5 text-blue-400" />
                <a href="mailto:kleber@ziontechgroup.com" className="text-gray-300 hover:text-white transition-colors">
=======
                <Mail className="w-4 h-4 text-cyan-400" />
                <a href="mailto:kleber@ziontechgroup.com" className="text-gray-400 hover:text-cyan-400 transition-colors text-sm">
>>>>>>> main
                  kleber@ziontechgroup.com
                </a>
              </div>
              <div className="flex items-start space-x-3">
<<<<<<< HEAD
                <MapPin className="w-5 h-5 text-blue-400 mt-1" />
                <div className="text-gray-300">
                  <div>364 E Main St STE 1008</div>
                  <div>Middletown, DE 19709</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © {currentYear} Zion Tech Group. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <Link href="/privacy" className="text-gray-400 hover:text-white text-sm transition-colors">
                Privacy Policy
              </Link>
              <Link href="/terms" className="text-gray-400 hover:text-white text-sm transition-colors">
                Terms of Service
              </Link>
              <Link href="/cookies" className="text-gray-400 hover:text-white text-sm transition-colors">
                Cookie Policy
              </Link>
=======
                <MapPin className="w-4 h-4 text-cyan-400 mt-0.5" />
                <span className="text-gray-400 text-sm">
                  364 E Main St STE 1008<br />
                  Middletown DE 19709
                </span>
>>>>>>> main
              </div>
>>>>>>> main
            </div>
          </div>
        </div>
<<<<<<< HEAD
        {/* Additional Links */}
        <div className=&apos;mt-8 pt-6 border-t border-zion-purple/20&apos;>&apos;'
          <div className=&apos;grid grid-cols-1 md:grid-cols-4 gap-6 text-sm&apos;>&apos;'
            <div>
              <h4 className=&apos;text-zion-cyan font-medium mb-3&apos;>Resources&apos;</h4>
              <ul className=&apos;space-y-2 text-zion-slate-light&apos;>&apos;'
                <li><Link to=&apos;/blog&apos; className=&apos;hover:text-zion-cyan transition-colors&apos;>Blog&apos;</Link></li>
                <li><Link to=&apos;/docs&apos; className=&apos;hover:text-zion-cyan transition-colors&apos;>Documentation&apos;</Link></li>
                <li><Link to=&apos;/white-papers&apos; className=&apos;hover:text-zion-cyan transition-colors&apos;>White Papers&apos;</Link></li>
                <li><Link to=&apos;/webinars&apos; className=&apos;hover:text-zion-cyan transition-colors&apos;>Webinars&apos;</Link></li>
              </ul>
            </div>
            <div>
              <h4 className=&apos;text-zion-cyan font-medium mb-3&apos;>Support&apos;</h4>
              <ul className=&apos;space-y-2 text-zion-slate-light&apos;>&apos;'
                <li><Link to=&apos;/help&apos; className=&apos;hover:text-zion-cyan transition-colors&apos;>Help Center&apos;</Link></li>
                <li><Link to=&apos;/contact&apos; className=&apos;hover:text-zion-cyan transition-colors&apos;>Contact Support&apos;</Link></li>
                <li><Link to=&apos;/training&apos; className=&apos;hover:text-zion-cyan transition-colors&apos;>Training&apos;</Link></li>
                <li><Link to=&apos;/faq&apos; className=&apos;hover:text-zion-cyan transition-colors&apos;>FAQ&apos;</Link></li>
              </ul>
            </div>
            <div>
              <h4 className=&apos;text-zion-cyan font-medium mb-3&apos;>Legal&apos;</h4>
              <ul className=&apos;space-y-2 text-zion-slate-light&apos;>&apos;'
                <li><Link to=&apos;/privacy&apos; className=&apos;hover:text-zion-cyan transition-colors&apos;>Privacy Policy&apos;</Link></li>
                <li><Link to=&apos;/terms&apos; className=&apos;hover:text-zion-cyan transition-colors&apos;>Terms of Service&apos;</Link></li>
                <li><Link to=&apos;/security&apos; className=&apos;hover:text-zion-cyan transition-colors&apos;>Security&apos;</Link></li>
                <li><Link to=&apos;/compliance&apos; className=&apos;hover:text-zion-cyan transition-colors&apos;>Compliance&apos;</Link></li>
              </ul>
            </div>
            <div>
              <h4 className=&apos;text-zion-cyan font-medium mb-3&apos;>Connect&apos;</h4>
              <ul className=&apos;space-y-2 text-zion-slate-light&apos;>&apos;'
                <li><Link to=&apos;/marketplace&apos; className=&apos;hover:text-zion-cyan transition-colors&apos;>Marketplace&apos;</Link></li>
                <li><Link to=&apos;/talent&apos; className=&apos;hover:text-zion-cyan transition-colors&apos;>Talent Network&apos;</Link></li>
                <li><Link to=&apos;/community&apos; className=&apos;hover:text-zion-cyan transition-colors&apos;>Community&apos;</Link></li>
                <li><Link to=&apos;/research-development&apos; className=&apos;hove,r:text-zion-cyan transition-colors&apos;>R&D&apos;</Link></li>
              </ul>
=======

<<<<<<< HEAD
        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-8 pt-8">
<<<<<<< HEAD
          <div className="flex flex-col md: flex-row justify-between items-center">
            <div className="flex space-x-6 mb-4 md:mb-0">
>>>>>>> main
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
<<<<<<< HEAD
                  className="text-gray-400 hover:text-blue-400 transition-colors"
                  aria-label={social.name}
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Services</h4>
            <ul className="space-y-2">
              {footerLinks.services.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="text-gray-300 hover:text-blue-400 transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Solutions */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Solutions</h4>
            <ul className="space-y-2">
              {footerLinks.solutions.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="text-gray-300 hover:text-blue-400 transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company & Resources */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Company</h4>
            <ul className="space-y-2 mb-6">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="text-gray-300 hover:text-blue-400 transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
            
            <h4 className="text-lg font-semibold mb-4">Resources</h4>
            <ul className="space-y-2">
              {footerLinks.resources.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="text-gray-300 hover:text-blue-400 transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-gray-400 text-sm mb-4 md:mb-0">
              © {currentYear} Zion Tech Group. All rights reserved.
            </div>
            <div className="flex space-x-6 text-sm">
              <Link href="/privacy" className="text-gray-400 hover:text-blue-400 transition-colors">
                Privacy Policy
              </Link>
              <Link href="/terms" className="text-gray-400 hover:text-blue-400 transition-colors">
                Terms of Service
              </Link>
              <Link href="/cookies" className="text-gray-400 hover:text-blue-400 transition-colors">
                Cookie Policy
              </Link>
=======
                  className="text-gray-400 hover: text-white transition-colors"
                >
                  <social.icon className="h-5 w-5" />
                </a>
              ))}
            </div>
=======
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
>>>>>>> main
            <div className="text-sm text-gray-400">
              © {currentYear} Zion Tech Group. All rights reserved.
            </div>
            <div className="flex space-x-6 text-sm">
              <Link href="/privacy" className="text-gray-400 hover:text-white transition-colors">
                Privacy Policy
              </Link>
              <Link href="/terms" className="text-gray-400 hover:text-white transition-colors">
                Terms of Service
              </Link>
>>>>>>> main
>>>>>>> main
>>>>>>> main
            </div>
          </div>
        </div>
      </div>
<<<<<<< HEAD

      {/* Back to Top Button */}
      <button
        onClick={scrollToTop}
        className="fixed bottom-8 right-8 bg-blue-600 hover:bg-blue-700 text-white p-3 rounded-full shadow-lg transition-all duration-300 hover:scale-110"
        aria-label="Back to top"
      >
        <ArrowUp className="w-5 h-5" />
      </button>
    </footer>
  );
}
=======
<<<<<<< HEAD
    </footer>
  );
}
=======
<<<<<<< HEAD
      {/* Bottom Footer */}
      <div className=&apos;bg-zion-blue-darker border-t border-zion-purple/20&apos;>&apos;'
        <div className=&apos;max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6&apos;>&apos;'
          <div className=&apos;flex flex-col md:flex-row justify-between items-center space-y-4 m,d:space-y-0&apos;>&apos;'
            <div className=&apos;flex items-center space-x-4 text-sm text-zion-slate-light&apos;>&apos;'
              <span>&copy {currentYear} Zion Tech Group. All rights reserved.</span>
              <span className=&apos;hidden md:inline&apos;>•&apos;</span>
              <span className=&apos;hidden md:inline&apos;>Empowering Innovation&apos;</span>
            </div>
            <div className=&apos;flex items-center space-x-6 text-sm&apos;>&apos;'
              <Link to=&apos;/sitemap&apos; className=&apos;text-zion-slate-light hover:text-zion-cyan transition-colors&apos;>Sitemap&apos;</Link>
              <Link to=&apos;/accessibility&apos; className=&apos;text-zion-slate-light hover:text-zion-cyan transition-colors&apos;>Accessibility&apos;</Link>
              <Link to=&apos;/status&apos; className=&apos;text-zion-slate-light hove,r:text-zion-cyan transition-colors&apos;>System Status&apos;</Link>
            </div>
=======
    </footer>
  );
}
=======
        {/* Bottom Section */}
        <div className="border-t border-gray-800 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <div className="text-gray-400 text-sm">
            © {currentYear} Zion Tech Group. All rights reserved.
          </div>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link href="/privacy" className="text-gray-400 hover:text-cyan-400 transition-colors text-sm">
              Privacy Policy
            </Link>
            <Link href="/terms" className="text-gray-400 hover:text-cyan-400 transition-colors text-sm">
              Terms of Service
            </Link>
            <Link href="/cookies" className="text-gray-400 hover:text-cyan-400 transition-colors text-sm">
              Cookie Policy
            </Link>
>>>>>>> main
          </div>
        </div>
      </div>

      {/* Scroll to Top Button */}
      <button
        onClick={scrollToTop}
<<<<<<< HEAD
        className=&apos;fixed bottom-6 right-6 w-12 h-12 bg-gradient-to-r from-zion-cyan to-zion-purple rounded-full shadow-lg shadow-zion-purple/25 hover:shadow-xl hover:shadow-zion-purple/40 transition-all duration-300 hove,r:-translate-y-1 flex items-center justify-center text-white';
        aria-label=&apos;Back to top&apos;>&apos;'
        <ArrowUp className=&apos;w-5 h-5&apos; />&apos;
=======
        className="fixed bottom-8 right-8 bg-gradient-to-r from-cyan-500 to-blue-600 text-white p-3 rounded-full shadow-lg hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-110"
        aria-label="Scroll to top"
      >
        <ArrowUp className="w-5 h-5" />
>>>>>>> main
      </button>
    </footer>
  );
}
>>>>>>> main
>>>>>>> main
>>>>>>> main
