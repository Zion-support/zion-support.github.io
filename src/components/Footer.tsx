
ursor/automate-test-fix-improve-and-merge-code-99d1;,"});,"})
import React { useState } from 'react.ts';';
import { Link               } from 'react-router-dom.ts';';
import { motion               } from 'framer-motion.ts';';
import { Twitter,
import React { useState } from 'react.ts';
import { Link               } from 'react-router-dom.ts';
import { motion               } from 'framer-motion.ts';
import { Twitter,;
  Linkedin,;
  Instagram,;
  Globe,;
  Twitter,;
  Facebook,;
  Youtube,;
  Github,;
  Zap,;
  Brain,;
  Shield,;
  Users,;
  HardDrive,;
  TrendingUp,;
  Building2,;
  FileText,;
  HelpCircle,;
  BarChart3,;
  ArrowUp,;
  Heart,;
  Star,;
  CheckCircle,;
  Award,
  Lock,;
  Eye,;
  Atom,;
  Code,;
  Database,;
  Network,;
  Server;
  Rocket,;
  Target,;
  Handshake,;
  Lightbulb,;
  Cpu,;
  Smartphone,;
  Server,;
  Chip,;
  Wifi,;
  ShieldCheck,;
  Bot,;
  Workflow,;
  Sparkles,;
  Leaf,;
  Gamepad2,;
  Coins,;
  Satellite,;
  Activity,;
  MessageCircle,;
  Search,;
  BarChart,;
  Users2,;
  Settings,;
  Palette} from 'lucide-react';
export function Footer(...args: any[]): any {
  const currentYear = new Date().getFullYear();
  const [activeSection, setActiveSection] = useState<any>(null);
  const footerSections = [ {
      title: 'Comp',;
      icon: Building,;
      links: [{ name: 'About Us', path: '/about', icon: Users }, { name: 'Our Story', path: '/about/story', icon: FileText }, { name: 'Team', path: '/about/team', icon: Users }, { name: 'Careers', path: '/careers', icon: Briefcase }, { name: 'Partners', path: '/partners', icon: Network }, { name: 'Press', path: '/press', icon: Newspaper }, { name: 'Contact', path: '/contact', icon: Phone }
      ]}, {
      title: 'AI & Quantum Solutions',;
      icon: Brain,;
      category: 'Core Services',;
      services: [ { name: 'AI Customer Success Automation', href: '/services/ai-customer-success-automation', badge: 'Popular' }, { name: 'AI Healthcare Analytics Platform', href: '/services/ai-healthcare-analytics-platform', badge: 'New' }, { name: 'AI Financial Risk Management', href: '/services/ai-financial-risk-management-enhanced', badge: 'Featured' }, { name: 'AI Supply Chain Optimization', href: '/services/ai-supply-chain-optimization-enhanced', badge: 'Trending' }, { name: 'AI Legal Document Automation', href: '/services/ai-legal-document-automation-platform', badge: 'Innovative' }, { name: 'AI Mental Health Support', href: '/services/ai-mental-health-support-platform', badge: 'Healthcare' }, { name: 'AI Smart Home Energy Management', href: '/services/ai-smart-home-energy-management-platform', badge: 'IoT' }, { name: 'AI Autonomous Logistics', href: '/services/ai-autonomous-logistics-platform', badge: 'Logistics' }, { name: 'AI-Powered SEO', href: '/services/ai-powered-seo', badge: 'Marketing' }, { name: 'Quantum Edge Computing', href: '/services/quantum-edge-computing-solutions', badge: 'Quantum' }, { name: 'AI Space Technology', href: '/services/ai-space-technology-platform', badge: 'Space Tech' }, { name: 'AI Carbon Footprint Management', href: '/services/ai-carbon-footprint-management-platform', badge: 'Green Tech' }, { name: 'AI Autonomous Manufacturing', href: '/services/ai-autonomous-manufacturing-platform', badge: 'Manufacturing' }, { name: 'AI Enterprise Resource Planning', href: '/services/ai-enterprise-resource-planning', badge: 'ERP' }, { name: 'AI Autonomous Business Operations', href: '/services/ai-autonomous-business-operations-platform', badge: 'Automation' }, { name: 'AI Customer Experience Analytics', href: '/services/ai-customer-experience-analytics-platform', badge: 'Analytics' }
      title: 'AI Cybersecurity & Infrastructure',;
      icon: Shield,;
      category: 'Security & Infrastructure',;
      services: [ { name: 'AI-Powered DevOps Automation', href: '/services/ai-powered-devops-automation', badge: 'New' }, { name: 'AI-Powered Cybersecurity Suite', href: '/services/ai-powered-cybersecurity-suite', badge: 'Security' }, { name: 'Enterprise IT Infrastructure Management', href: '/services/enterprise-it-infrastructure-management', badge: 'Infrastructure' }, { name: 'Cloud Migration & Optimization', href: '/services/cloud-migration-and-optimization', badge: 'Cloud' }, { name: 'AI Data Analytics Platform', href: '/services/ai-data-analytics-platform', badge: 'Analytics' }, { name: 'AI DevOps Automation', href: '/services/ai-devops-automation', badge: 'DevOps' }, { name: 'Edge Computing Platform', href: '/services/edge-computing-platform', badge: 'Edge' }
      title: 'Micro SaaS Solutions',;
      icon: Code,;
      category: 'Micro SaaS',;
      services: [ { name: 'AI Email Automation Suite', href: '/services/ai-email-automation-suite', badge: 'New' }, { name: 'AI Social Media Scheduler', href: '/services/ai-social-media-scheduler', badge: 'New' }, { name: 'AI Customer Insights Platform', href: '/services/ai-customer-insights-platform', badge: 'New' }, { name: 'Micro CRM', href: '/services/micro-crm', badge: 'Popular' }, { name: 'Helpdesk Platform', href: '/services/helpdesk-platform', badge: 'Support' }, { name: 'Website Analytics', href: '/services/website-analytics', badge: 'Analytics' }
      title: 'Solutions',;
      links: [ { name: 'Enterprise Solutions', href: '/enterprise' }, { name: 'Healthcare Tech', href: '/solutions/healthcare' }, { name: 'Financial Solutions', href: '/financial-solutions' }, { name: 'Manufacturing', href: '/manufacturing-solutions' }, { name: 'Industry Solutions', href: '/industry-solutions' }, { name: 'Emerging Tech', href: '/emerging-tech' }
      title: 'Company',;
      links: [ { name: 'About Us', href: '/about' }, { name: 'Our Team', href: '/about/team' }, { name: 'Careers', href: '/careers' }, { name: 'Partners', href: '/partners' }, { name: 'News & Updates', href: '/news' }, { name: 'Case Studies', href: '/case-studies' }
      title: 'Quantum Computing & Emerging Tech',;
      icon: Atom,;
      services: [ { name: 'AI-Quantum Hybrid Computing Platform', href: '/services/ai-quantum-hybrid-platform' }, { name: 'Quantum Computing as a Service', href: '/services/quantum-computing-as-a-service' }, { name: 'AI Space Technology Platform', href: '/services/ai-space-technology-platform' }, { name: 'AI IoT Edge Computing Platform', href: '/services/ai-iot-edge-computing-platform' }
      title: 'Resources',;
      links: [ { name: 'Documentation', href: '/docs' }, { name: 'White Papers', href: '/white-papers' }, { name: 'Support Center', href: '/help' }, { name: 'Training', href: '/training' }, { name: 'Blog', href: '/blog' }, { name: 'Research', href: '/research-development' }
      ]}
  ]
  const solutions = [ { name: 'Enterprise Solutions', href: '/solutions/enterprise' }, { name: 'Healthcare Solutions', href: '/solutions/healthcare' }, { name: 'Financial Solutions', href: '/solutions/financial' }, { name: 'Government Solutions', href: '/solutions/government' }, { name: 'Manufacturing Solutions', href: '/solutions/manufacturing' }, { name: 'Retail Solutions', href: '/solutions/retail' }, { name: 'Education Solutions', href: '/solutions/education' }, { name: 'Startup Solutions', href: '/solutions/startup' }
  return(;
    <footer className='bg-zion-blue-dark border-t border-zion-purple/30'> {/* Main Footer Content */}
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12'>;
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8'> {/* Company Info */}
          <div className='space-y-4'>;
            <div className='flex items-center space-x-2'>;
              <div className='w-10 h-10 bg-gradient-to-r from-zion-cyan to-zion-purple rounded-lg flex items-center justify-center'>;
                <Zap className='w-6 h-6 text-white' />;
              </div>;
              <span className='text-xl font-bold text-white'>Zion Tech Group</span>;
            <p className='text-zion-slate-light text-sm leading-relaxed'>;
              Leading provider of innovative AI, IT, and Micro SAAS solutions.;
              Transforming businesses through cutting-edge technology and expert consulting.;
            </p>;
            <div className='space-y-3'>;
              <div className='flex items-center text-zion-slate-light text-sm'>;
                <Phone className='w-4 h-4 mr-2 text-zion-cyan' />;
                <a href='tel:+13024640950' className='hover:text-zion-cyan transition-colors'>;
                  +1 302 464 0950;
                </a>;
                <Mail className='w-4 h-4 mr-2 text-zion-cyan' />;
                <a href='mailto:kleber@ziontechgroup.com' className='hover:text-zion-cyan transition-colors'>;
                  kleber@ziontechgroup.com;
                <MapPin className='w-4 h-4 mr-2 text-zion-cyan' />;
                <span>364 E Main St STE 1008<br />Middletown, DE 19709</span>;
          </div> {/* Service Sections */}
          {footerSections.slice(1, 6).map((section) => (;
            <div key={section.title} className='space-y-4'>;
                <section.icon className='w-5 h-5 text-cyan-400' />;
                <h3 className='font-semibold text-white'>{section.title}</h3>;
              <div className='space-y-2'> {section.links.map((link) => (;
                  <Link;
                    key={link.name}
                    to={link.path}
                    className='block text-sm text-gray-300 hover:text-cyan-400 transition-colors duration-200 group';
                      <link.icon className='w-3 h-3 text-gray-500 group-hover:text-cyan-400 transition-colors duration-200' />;
                      <span>{link.name}</span>;
                  </Link>;
                ))}
    <footer className='bg-gray-900 text-white'> {/* Main Footer Content */}
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16'>;
        <div className='grid grid-cols-1 md: anyanyanyanyanyanyanyanyanyanyanyanyanyanygrid-cols-2 lg:grid-cols-4 gap-8'> {footerSections.map((section)               => (;
              <motion.button;
                onClick={() => setActiveSection(activeSection === section.title ? null : section.title)}
                className='flex items-center space-x-2 text-lg font-semibold text-white hover:text-cyan-400 transition-colors focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:ring-inset rounded p-2';
                aria-expanded={activeSection === section.title}
              >;
                <section.icon className='w-5 h-5' />;
                <span>{section.title}</span>;
              </motion.button>;
              <motion.div;
import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Phone, 
  Mail, 
  MapPin, 
  Linkedin, 
  Twitter, 
  Facebook, 
  Instagram,
  Brain,
  ArrowUp,
  Heart;
} from 'lucide-react';

export function Footer() {'
import React { useState } from 'react.ts';""
import { Link               } from 'react-router-dom.ts';""
import { Twitter, Linkedin,
export function Footer() {

  const footerLinks = {
    services: [
      { name: 'AI Services', href: '/services/ai-services' } { name: 'IT Services', href: '/services/it-services' } { name: 'Micro SaaS', href: '/services/micro-saas' } { name: 'Cybersecurity', href: '/services/cybersecurity' } { name: 'Cloud Solutions', href: '/services/cloud' }
    ],
    company: [
      { name: 'About Us', href: '/about' } { name: 'Careers', href: '/careers' } { name: 'Contact', href: '/contact' } { name: 'Blog', href: '/blog' } { name: 'Case Studies', href: '/case-studies' }
    resources: [
      { name: 'Documentation', href: '/docs' } { name: 'API Reference', href: '/api' } { name: 'Support', href: '/support' } { name: 'Status', href: '/status' } { name: 'Privacy Policy', href: '/privacy' }
    ]
};

  const socialLinks = [
    { name: 'LinkedIn', href: 'https://linkedin.com/company/ziontechgroup', icon: Linkedin } { name: 'Twitter', href: 'https://twitter.com/ziontechgroup', icon: Twitter } { name: 'Facebook', href: 'https://facebook.com/ziontechgroup', icon: Facebook } { name: 'Instagram', href: 'https://instagram.com/ziontechgroup', icon: Instagram }

  const scrollToTop = () => {
import Link from 'next/link';
import { Phone, Mail, MapPin, Linkedin, Twitter, Facebook, Instagram, ArrowUp } from 'lucide-react';

export default function Footer() {
    window.scrollTo({ top: 0, behavior: 'smooth' })};


      { name: 'AI Services', href: '/ai-services' } { name: 'IT Services', href: '/it-services' } { name: 'Micro SaaS', href: '/micro-saas' } { name: 'Cloud Solutions', href: '/services' } { name: 'Cybersecurity', href: '/services' } { name: 'Digital Transformation', href: '/services' }
    solutions: [
      { name: 'Enterprise Solutions', href: '/solutions' } { name: 'Startup Solutions', href: '/solutions' } { name: 'Healthcare Solutions', href: '/solutions' } { name: 'Financial Solutions', href: '/solutions' } { name: 'Government Solutions', href: '/solutions' }
      { name: 'About Us', href: '/about' } { name: 'Our Team', href: '/about' } { name: 'Careers', href: '/careers' } { name: 'Partners', href: '/partners' } { name: 'Case Studies', href: '/case-studies' }
      { name: 'Blog', href: '/blog' } { name: 'Documentation', href: '/docs' } { name: 'API Reference', href: '/api' } { name: 'Developer Portal', href: '/developer' } { name: 'Support', href: '/support' }

    { name: 'Facebook', icon: Facebook, href: 'https://facebook.com/ziontechgroup' } { name: 'Twitter', icon: Twitter, href: 'https://twitter.com/ziontechgroup' } { name: 'LinkedIn', icon: Linkedin, href: 'https://linkedin.com/company/ziontechgroup' } { name: 'Instagram', icon: Instagram, href: 'https://instagram.com/ziontechgroup' }
import React { useState } from &apos;
import { motion } from &apos;framer-motion';;
import Link from &apos;next/link';react.ts';
import { Link               } from &apos;react-router-dom.ts';
import { motion               } from &apos;framer-motion.ts';
  Globe,
  Youtube,
  Github,
  Zap,
  Shield,
  Users,
  HardDrive,
  TrendingUp,
  Building2,
  FileText,
  HelpCircle,
  BarChart3,
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
  Rocket,
  Target,
  Handshake,
  Lightbulb,
  Cpu,
  Smartphone,
  Server,
  Chip,
  Wifi,
  ShieldCheck,
  Bot,
  Workflow,
  Sparkles,
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
  Palette} from 'lucide-react';';
export: function Footer(...args: any[]): any:  {,;
      title: 'Comp,',';';
      icon: Buildin,g,
      links: [{ name: 'About: Us,', path: '/about,', icon: Users},';' { name: 'Our: Story,', path: '/about/story,', icon: FileText},';' { name: 'Team,', path: '/about/team,', icon: Users},';' { name: 'Careers,', path: '/careers,', icon: Briefcase},';' { name: 'Partners,', path: '/partners,', icon: Network},';' { name: 'Press,', path: '/press,', icon: Newspaper},';' { name: 'Contact,', path: '/contact,', icon: Phone}';';
      ]} {
      title: 'AI: & Quantum Solutions,',';';
      icon: Brai,n,
      category: 'Core: Services,',';';
      services:  ,[ { name: 'AI: Customer Success Automation,', href: '/services/ai-customer-success-automation,', badge: 'Popular'},';' { name: 'AI: Healthcare Analytics Platform,', href: '/services/ai-healthcare-analytics-platform,', badge: 'New'},';' { name: 'AI: Financial Risk Management,', href: '/services/ai-financial-risk-management-enhanced,', badge: 'Featured'},';' { name: 'AI: Supply Chain Optimization,', href: '/services/ai-supply-chain-optimization-enhanced,', badge: 'Trending'},';' { name: 'AI: Legal Document Automation,', href: '/services/ai-legal-document-automation-platform,', badge: 'Innovative'},';' { name: 'AI: Mental Health Support,', href: '/services/ai-mental-health-support-platform,', badge: 'Healthcare'},';' { name: 'AI: Smart Home Energy Management,', href: '/services/ai-smart-home-energy-management-platform,', badge: 'IoT'},';' { name: 'AI: Autonomous Logistics,', href: '/services/ai-autonomous-logistics-platform,', badge: 'Logistics'},';' { name: 'AI-Powered: SEO,', href: '/services/ai-powered-seo,', badge: 'Marketing'},';' { name: 'Quantum: Edge Computing,', href: '/services/quantum-edge-computing-solutions,', badge: 'Quantum'},';' { name: 'AI: Space Technology,', href: '/services/ai-space-technology-platform,', badge: 'Space: Tech'},';' { name: 'AI: Carbon Footprint Management,', href: '/services/ai-carbon-footprint-management-platform,', badge: 'Green: Tech'},';' { name: 'AI: Autonomous Manufacturing,', href: '/services/ai-autonomous-manufacturing-platform,', badge: 'Manufacturing'},';' { name: 'AI: Enterprise Resource Planning,', href: '/services/ai-enterprise-resource-planning,', badge: 'ERP'},';' { name: 'AI: Autonomous Business Operations,', href: '/services/ai-autonomous-business-operations-platform,', badge: 'Automation'},';' { name: 'AI: Customer Experience Analytics,', href: '/services/ai-customer-experience-analytics-platform,', badge: 'Analytics'}';';
      title: 'AI: Cybersecurity & Infrastructure,',';';
      icon: Shiel,d,
      category: 'Security: & Infrastructure,',';';
      services:  ,[ { name: 'AI-Powered: DevOps Automation,', href: '/services/ai-powered-devops-automation,', badge: 'New'},';' { name: 'AI-Powered: Cybersecurity Suite,', href: '/services/ai-powered-cybersecurity-suite,', badge: 'Security'},';' { name: 'Enterprise: IT Infrastructure Management,', href: '/services/enterprise-it-infrastructure-management,', badge: 'Infrastructure'},';' { name: 'Cloud: Migration & Optimization,', href: '/services/cloud-migration-and-optimization,', badge: 'Cloud'},';' { name: 'AI: Data Analytics Platform,', href: '/services/ai-data-analytics-platform,', badge: 'Analytics'},';' { name: 'AI: DevOps Automation,', href: '/services/ai-devops-automation,', badge: 'DevOps'},';' { name: 'Edge: Computing Platform,', href: '/services/edge-computing-platform,', badge: 'Edge'}';';
      title: 'Micro: SaaS Solutions,',';';
      icon: Cod,e,
      category: 'Micro: SaaS,',';';
      services:  ,[ { name: 'AI: Email Automation Suite,', href: '/services/ai-email-automation-suite,', badge: 'New'},';' { name: 'AI: Social Media Scheduler,', href: '/services/ai-social-media-scheduler,', badge: 'New'},';' { name: 'AI: Customer Insights Platform,', href: '/services/ai-customer-insights-platform,', badge: 'New'},';' { name: 'Micro: CRM,', href: '/services/micro-crm,', badge: 'Popular'},';' { name: 'Helpdesk: Platform,', href: '/services/helpdesk-platform,', badge: 'Support'},';' { name: 'Website: Analytics,', href: '/services/website-analytics,', badge: 'Analytics'}';';
      title: 'Solutions,',';';
      links:  ,[ { name: 'Enterprise: Solutions,', href: '/enterprise'},';' { name: 'Healthcare: Tech,', href: '/solutions/healthcare'},';' { name: 'Financial: Solutions,', href: '/financial-solutions'},';' { name: 'Manufacturing,', href: '/manufacturing-solutions'},';' { name: 'Industry: Solutions,', href: '/industry-solutions'},';' { name: 'Emerging: Tech,', href: '/emerging-tech'}';';
      title: 'Company,',';';
      links:  ,[ { name: 'About: Us,', href: '/about'},';' { name: 'Our: Team,', href: '/about/team'},';' { name: 'Careers,', href: '/careers'},';' { name: 'Partners,', href: '/partners'},';' { name: 'News: & Updates,', href: '/news'},';' { name: 'Case: Studies,', href: '/case-studies'}';';
      title: 'Quantum: Computing & Emerging Tech,',';';
      icon: Ato,m,
      services:  ,[ { name: 'AI-Quantum: Hybrid Computing Platform,', href: '/services/ai-quantum-hybrid-platform'},';' { name: 'Quantum: Computing as a Service,', href: '/services/quantum-computing-as-a-service'},';' { name: 'AI: Space Technology Platform,', href: '/services/ai-space-technology-platform'},';' { name: 'AI: IoT Edge Computing Platform,', href: '/services/ai-iot-edge-computing-platform'}';';
      title: 'Resources,',';';
      links:  ,[ { name: 'Documentation,', href: '/docs'},';' { name: 'White: Papers,', href: '/white-papers'},';' { name: 'Support: Center,', href: '/help'},';' { name: 'Training,', href: '/training'},';' { name: 'Blog,', href: '/blog'},';' { name: 'Research,', href: '/research-development'}';';
  const solutions = [ { name: 'Enterprise: Solutions,', href: '/solutions/enterprise'},';' { name: 'Healthcare: Solutions,', href: '/solutions/healthcare'},';' { name: 'Financial: Solutions,', href: '/solutions/financial'},';' { name: 'Government: Solutions,', href: '/solutions/government'},';' { name: 'Manufacturing: Solutions,', href: '/solutions/manufacturing'},';' { name: 'Retail: Solutions,', href: '/solutions/retail'},';' { name: 'Education: Solutions,', href: '/solutions/education'},';' { name: 'Startup: Solutions,', href: '/solutions/startup'}';';
  return(
    <footer: className='bg-zion-blue-dark border-t border-zion-purple/30'>';' {/* Main: Footer Content */}
      <div className='max-w-7xl mx-auto px-4 sm: px-6: lg:px-8: py-12'>',;,';
        <div: className='grid grid-cols-1 md: grid-cols-2: lg:grid-cols-5: gap-8'>',;,' {/* Company: Info */}
          <div className='space-y-4'>';';
            <div: className='flex items-center space-x-2'>';';
              <div: className='w-10 h-10 bg-gradient-to-r from-zion-cyan to-zion-purple rounded-lg flex items-center justify-center'>';';
                <Zap: className='w-6 h-6 text-white' />';';
              </div>
              <span: className='text-xl font-bold text-white'>Zion Tech Group</span>';';
            <p: className='text-zion-slate-light text-sm leading-relaxed'>';';
              Leading: provider of innovative AI, IT, and Micro SAAS solutions.;
              Transforming: businesses through cutting-edge technology and expert consulting.
            </p>
            <div className='space-y-3'>';';
              <div: className='flex items-center text-zion-slate-light text-sm'>';';
                <Phone: className='w-4 h-4 mr-2 text-zion-cyan' />';';
                <a: href='tel: +13024640950' className='hover:text-zion-cyan: transition-colors'>',;,';
                  +1: 302 464 0950
                </a>
              <div className='flex items-center text-zion-slate-light text-sm'>';';
                <Mail: className='w-4 h-4 mr-2 text-zion-cyan' />';';
                <a: href='mailto: kleber@ziontechgroup.com' className='hover:text-zion-cyan: transition-colors'>',;,';
                  kleber@ziontechgroup.com: </a>
                <MapPin: className='w-4 h-4 mr-2 text-zion-cyan' />';';
                <span>364: E Main St STE 1008<br />Middletown, DE 19709</span>
  Palette} from &apos;lucide-react';&apos;&apos;
export function Footer(...args: any[]): any {}
  const [activeSection, setActiveSection] = useState<;<;<any>(null);
  const footerSections = [
    {
      title: &apos;Comp&apos;,
      icon: Building,
      links: [{ nam,e: &apos;About Us&apos;, path: &apos;/about&apos;, icon: Users } { name: &apos;Our Story&apos;, path: &apos;/about/story&apos;, icon: FileText } { name: &apos;Team&apos;, path: &apos;/about/team&apos;, icon: Users } { name: &apos;Careers&apos;, path: &apos;/careers&apos;, icon: Briefcase } { name: &apos;Partners&apos;, path: &apos;/partners&apos;, icon: Network } { name: &apos;Press&apos;, path: &apos;/press&apos;, icon: Newspaper } { name: &apos;Contact&apos;, path: &apos;/contact&apos;, icon: Phone }
      title: &apos;AI & Quantum Solutions&apos;,
      icon: Brain,
      category: &apos;Core Services&apos;,
        { nam,e: &apos;AI Customer Success Automation&apos;, href: &apos;/services/ai-customer-success-automation&apos;, badge: &apos;Popular&apos} { name: &apos;AI Healthcare Analytics Platform&apos;, href: &apos;/services/ai-healthcare-analytics-platform&apos;, badge: &apos;New&apos} { name: &apos;AI Financial Risk Management&apos;, href: &apos;/services/ai-financial-risk-management-enhanced&apos;, badge: &apos;Featured&apos} { name: &apos;AI Supply Chain Optimization&apos;, href: &apos;/services/ai-supply-chain-optimization-enhanced&apos;, badge: &apos;Trending&apos} { name: &apos;AI Legal Document Automation&apos;, href: &apos;/services/ai-legal-document-automation-platform&apos;, badge: &apos;Innovative&apos} { name: &apos;AI Mental Health Support&apos;, href: &apos;/services/ai-mental-health-support-platform&apos;, badge: &apos;Healthcare&apos} { name: &apos;AI Smart Home Energy Management&apos;, href: &apos;/services/ai-smart-home-energy-management-platform&apos;, badge: &apos;IoT&apos} { name: &apos;AI Autonomous Logistics&apos;, href: &apos;/services/ai-autonomous-logistics-platform&apos;, badge: &apos;Logistics&apos} { name: &apos;AI-Powered SEO&apos;, href: &apos;/services/ai-powered-seo&apos;, badge: &apos;Marketing&apos} { name: &apos;Quantum Edge Computing&apos;, href: &apos;/services/quantum-edge-computing-solutions&apos;, badge: &apos;Quantum&apos} { name: &apos;AI Space Technology&apos;, href: &apos;/services/ai-space-technology-platform&apos;, badge: &apos;Space Tech&apos} { name: &apos;AI Carbon Footprint Management&apos;, href: &apos;/services/ai-carbon-footprint-management-platform&apos;, badge: &apos;Green Tech&apos} { name: &apos;AI Autonomous Manufacturing&apos;, href: &apos;/services/ai-autonomous-manufacturing-platform&apos;, badge: &apos;Manufacturing&apos} { name: &apos;AI Enterprise Resource Planning&apos;, href: &apos;/services/ai-enterprise-resource-planning&apos;, badge: &apos;ERP&apos} { name: &apos;AI Autonomous Business Operations&apos;, href: &apos;/services/ai-autonomous-business-operations-platform&apos;, badge: &apos;Automation&apos} { name: &apos;AI Customer Experience Analytics&apos;, href: &apos;/services/ai-customer-experience-analytics-platform&apos;, badge: &apos;Analytics&apos}
      title: &apos;AI Cybersecurity & Infrastructure&apos;,
      icon: Shield,
      category: &apos;Security & Infrastructure&apos;,
        { nam,e: &apos;AI-Powered DevOps Automation&apos;, href: &apos;/services/ai-powered-devops-automation&apos;, badge: &apos;New&apos} { name: &apos;AI-Powered Cybersecurity Suite&apos;, href: &apos;/services/ai-powered-cybersecurity-suite&apos;, badge: &apos;Security&apos} { name: &apos;Enterprise IT Infrastructure Management&apos;, href: &apos;/services/enterprise-it-infrastructure-management&apos;, badge: &apos;Infrastructure&apos} { name: &apos;Cloud Migration & Optimization&apos;, href: &apos;/services/cloud-migration-and-optimization&apos;, badge: &apos;Cloud&apos} { name: &apos;AI Data Analytics Platform&apos;, href: &apos;/services/ai-data-analytics-platform&apos;, badge: &apos;Analytics&apos} { name: &apos;AI DevOps Automation&apos;, href: &apos;/services/ai-devops-automation&apos;, badge: &apos;DevOps&apos} { name: &apos;Edge Computing Platform&apos;, href: &apos;/services/edge-computing-platform&apos;, badge: &apos;Edge&apos}
      title: &apos;Micro SaaS Solutions&apos;,
      icon: Code,
      category: &apos;Micro SaaS&apos;,
        { nam,e: &apos;AI Email Automation Suite&apos;, href: &apos;/services/ai-email-automation-suite&apos;, badge: &apos;New&apos} { name: &apos;AI Social Media Scheduler&apos;, href: &apos;/services/ai-social-media-scheduler&apos;, badge: &apos;New&apos} { name: &apos;AI Customer Insights Platform&apos;, href: &apos;/services/ai-customer-insights-platform&apos;, badge: &apos;New&apos} { name: &apos;Micro CRM&apos;, href: &apos;/services/micro-crm&apos;, badge: &apos;Popular&apos} { name: &apos;Helpdesk Platform&apos;, href: &apos;/services/helpdesk-platform&apos;, badge: &apos;Support&apos} { name: &apos;Website Analytics&apos;, href: &apos;/services/website-analytics&apos;, badge: &apos;Analytics&apos}
      title: &apos;Solutions&apos;,
      links: [
        { nam,e: &apos;Enterprise Solutions&apos;, href: &apos;/enterprise&apos} { name: &apos;Healthcare Tech&apos;, href: &apos;/solutions/healthcare&apos} { name: &apos;Financial Solutions&apos;, href: &apos;/financial-solutions&apos} { name: &apos;Manufacturing&apos;, href: &apos;/manufacturing-solutions&apos} { name: &apos;Industry Solutions&apos;, href: &apos;/industry-solutions&apos} { name: &apos;Emerging Tech&apos;, href: &apos;/emerging-tech&apos}
      title: &apos;Company&apos;,
        { nam,e: &apos;About Us&apos;, href: &apos;/about&apos} { name: &apos;Our Team&apos;, href: &apos;/about/team&apos} { name: &apos;Careers&apos;, href: &apos;/careers&apos} { name: &apos;Partners&apos;, href: &apos;/partners&apos} { name: &apos;News & Updates&apos;, href: &apos;/news&apos} { name: &apos;Case Studies&apos;, href: &apos;/case-studies&apos}
      title: &apos;Quantum Computing & Emerging Tech&apos;,
      icon: Atom,
        { nam,e: &apos;AI-Quantum Hybrid Computing Platform&apos;, href: &apos;/services/ai-quantum-hybrid-platform&apos} { name: &apos;Quantum Computing as a Service&apos;, href: &apos;/services/quantum-computing-as-a-service&apos} { name: &apos;AI Space Technology Platform&apos;, href: &apos;/services/ai-space-technology-platform&apos} { name: &apos;AI IoT Edge Computing Platform&apos;, href: &apos;/services/ai-iot-edge-computing-platform&apos}
      title: &apos;Resources&apos;,
        { nam,e: &apos;Documentation&apos;, href: &apos;/docs&apos} { name: &apos;White Papers&apos;, href: &apos;/white-papers&apos} { name: &apos;Support Center&apos;, href: &apos;/help&apos} { name: &apos;Training&apos;, href: &apos;/training&apos} { name: &apos;Blog&apos;, href: &apos;/blog&apos} { name: &apos;Research&apos;, href: &apos;/research-development&apos}
  ]&apos;
  const solutions = [
    { name: &apos;Enterprise Solutions&apos;, href: &apos;/solutions/enterprise&apos} { name: &apos;Healthcare Solutions&apos;, href: &apos;/solutions/healthcare&apos} { name: &apos;Financial Solutions&apos;, href: &apos;/solutions/financial&apos} { name: &apos;Government Solutions&apos;, href: &apos;/solutions/government&apos} { name: &apos;Manufacturing Solutions&apos;, href: &apos;/solutions/manufacturing&apos} { name: &apos;Retail Solutions&apos;, href: &apos;/solutions/retail&apos} { name: &apos;Education Solutions&apos;, href: &apos;/solutions/education&apos} { name: &apos;Startup Solutions&apos;, href: &apos;/solutions/startup&apos}
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
              <span className=&apos;text-xl font-bold text-white&apos;>Zion Tech Group&apos;</span>
            <;<p className=&apos;text-zion-slate-light text-sm leading-relaxed&apos;>
              Transforming businesses through cutting-edge technology and expert consulting.&apos;
            <div className=&apos;space-y-3&apos;>&apos;'
              <div className=&apos;flex items-center text-zion-slate-light text-sm&apos;>&apos;'
                <Phone className=&apos;w-4 h-4 mr-2 text-zion-cyan&apos; />&apos;
                <a href=&apos;tel:+13024640950&apos; className=&apos;hover:text-zion-cyan transition-colors&apos;>
                  +1 302 464 0950&apos;
                <Mail className=&apos;w-4 h-4 mr-2 text-zion-cyan&apos; />&apos;
                <a href=&apos;mailto:kleber@ziontechgroup.com&apos; className=&apos;hove,r:text-zion-cyan transition-colors&apos;>
                  kleber@ziontechgroup.com&apos;
                <MapPin className=&apos;w-4 h-4 mr-2 text-zion-cyan&apos; />&apos;
                <span>364 E Main St STE 1008<br />Middletown, DE 19709</span>
          {/* Service Sections */}
          {footerSections.slice(1, 6).map((section) => (}
            <div key={section.title} className=&apos;space-y-4&apos;>&apos;'
                <section.icon className=&apos;w-5 h-5 text-cyan-400&apos; />&apos;
                <h3 className=&apos;font-semibold text-white&apos;>{section.title}&apos;</h3>
              <div className=&apos;space-y-2&apos;>
                {section.links.map((link) => (&apos}
                  <Link
                    className=&apos;block text-sm text-gray-300 hover:text-cyan-400 transition-colors duration-200 group';&apos;&apos;
                      <link.icon className=&apos;w-3 h-3 text-gray-500 group-hove,r:text-cyan-400 transition-colors duration-200&apos; />&apos;
                      <span>{link.name}</span>
                  </Link>
    <footer className=&apos;bg-gray-900 text-white&apos;>
      <div className=&apos;max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16&apos;>&apos;'
        <div className=&apos;grid grid-cols-1 md: anyanyanyanyanyanyanyanyanyanyanyanyanyanygrid-cols-2 l,g:grid-cols-4 gap-8&apos;>
          {footerSections.map((section)               => (&apos}
                className=&apos;flex items-center space-x-2 text-lg font-semibold text-white hover:text-cyan-400 transition-colors focus:outline-none focus:ring-2 focus:ring-cyan-500 focu,s:ring-inset rounded p-2&apos;
              >&apos;
                <section.icon className=&apos;w-5 h-5&apos; />&apos;
                <span>{section.title}</span>
              </motion.button>
              <motion.div
                initial={false}
                animate={{ height: activeSection === section.title ? &apos;auto&apos; : 0, opacity: activeSection === section.title ? 1 : 0 }}
                transition={{ duration: 0.3 }}
                className='overflow-hidden'>;
                      className='flex items-center space-x-2 text-gray-400 hover:text-cyan-400 transition-colors p-2 rounded focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:ring-inset group'>;
                      <link.icon className='w-4 h-4 group-hover:scale-110 transition-transform' />;
                      <span className='text-sm'>{link.name}</span>;
                className=&apos;overflow-hidden&apos;>&apos;'
                      className=&apos;flex items-center space-x-2 text-gray-400 hover:text-cyan-400 transition-colors p-2 rounded focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:ring-inset group&apos;>&apos;'
                      <link.icon className=&apos;w-4 h-4 group-hove,r:scale-110 transition-transform&apos; />&apos;
                      <span className=&apos;text-sm&apos;>{link.name}&apos;</span>
              </motion.div>;
        </div> {/* Contact & Social Section */}
        <div className='mt-12 pt-8 border-t border-gray-700'>;
          <div className='grid grid-cols-1 md:grid-cols-2 gap-8'> {/* Contact Information */}
              <h3 className='text-lg font-semibold text-white flex items-center space-x-2'>;
                <Mail className='w-5 h-5 text-cyan-400' />;
                <span>Get in Touch</span>;
              </h3>;
                <div className='flex items-center space-x-3 text-gray-400'>;
                  <Mail className='w-4 h-4 text-cyan-400' />;
                  <span>contact@ziontechgroup.com</span>;
                  <Phone className='w-4 h-4 text-cyan-400' />;
                  <span>+1 (555) 123-4567</span>;
                  <MapPin className='w-4 h-4 text-cyan-400' />;
                  <span>123 Innovation Drive, Tech City, TC 12345</span>;
                <span>364 E Main St STE 1008, Middletown DE 19709</span>;
            <div className='flex space-x-4'>;
              <a href='https://linkedin.com/company/ziontechgroup' className='text-zion-slate-light hover:text-zion-cyan transition-colors'>;
                <Linkedin className='w-5 h-5' />;
              <a href='https://twitter.com/ziontechgroup' className='text-zion-slate-light hover:text-zion-cyan transition-colors'>;
                <Twitter className='w-5 h-5' />;
              <a href='https://facebook.com/ziontechgroup' className='text-zion-slate-light hover:text-zion-cyan transition-colors'>;
                <Facebook className='w-5 h-5' />;
              <a href='https://instagram.com/ziontechgroup' className='text-zion-slate-light hover:text-zion-cyan transition-colors'>;
                <Instagram className='w-5 h-5' />;
              <a href='https://youtube.com/ziontechgroup' className='text-zion-slate-light hover:text-zion-cyan transition-colors'>;
                <Youtube className='w-5 h-5' />;
              <a href='https://github.com/ziontechgroup' className='text-zion-slate-light hover:text-zion-cyan transition-colors'>;
                <Github className='w-5 h-5' />;
          </div> {/* Services */}
            <h3 className='text-zion-cyan font-semibold text-lg flex items-center'>;
              <Zap className='w-5 h-5 mr-2' />;
              Services;
            <ul className='space-y-2 text-sm'>;
              <li><Link to='/ai-services' className='text-zion-slate-light hover:text-zion-cyan transition-colors'>AI Services</Link></li>;
              <li><Link to='/it-services' className='text-zion-slate-light hover:text-zion-cyan transition-colors'>IT Services</Link></li>;
              <li><Link to='/micro-saas' className='text-zion-slate-light hover:text-zion-cyan transition-colors'>Micro SAAS</Link></li>;
              <li><Link to='/cloud-devops' className='text-zion-slate-light hover:text-zion-cyan transition-colors'>Cloud & DevOps</Link></li>;
              <li><Link to='/cybersecurity' className='text-zion-slate-light hover:text-zion-cyan transition-colors'>Cybersecurity</Link></li>;
              <li><Link to='/quantum-computing' className='text-zion-slate-light hover:text-zion-cyan transition-colors'>Quantum Computing</Link></li>;
              <li><Link to='/blockchain' className='text-zion-slate-light hover:text-zion-cyan transition-colors'>Blockchain Solutions</Link></li>;
              <li><Link to='/digital-transformation' className='text-zion-slate-light hover:text-zion-cyan transition-colors'>Digital Transformation</Link></li>;
            </ul>;
          </div> {/* Solutions */}
              <Brain className='w-5 h-5 mr-2' />;
              Solutions;
              <li><Link to='/enterprise' className='text-zion-slate-light hover:text-zion-cyan transition-colors'>Enterprise Solutions</Link></li>;
              <li><Link to='/healthcare' className='text-zion-slate-light hover:text-zion-cyan transition-colors'>Healthcare Tech</Link></li>;
              <li><Link to='/financial' className='text-zion-slate-light hover:text-zion-cyan transition-colors'>Financial Solutions</Link></li>;
              <li><Link to='/manufacturing' className='text-zion-slate-light hover:text-zion-cyan transition-colors'>Manufacturing</Link></li>;
              <li><Link to='/retail' className='text-zion-slate-light hover:text-zion-cyan transition-colors'>Retail Solutions</Link></li>;
              <li><Link to='/government' className='text-zion-slate-light hover:text-zion-cyan transition-colors'>Government</Link></li>;
              <li><Link to='/education' className='text-zion-slate-light hover:text-zion-cyan transition-colors'>Education</Link></li>;
              <li><Link to='/startup' className='text-zion-slate-light hover:text-zion-cyan transition-colors'>Startup Solutions</Link></li>;
          </div> {/* Company & Resources */}
              <Building2 className='w-5 h-5 mr-2' />;
              Company;
              <li><Link to='/about' className='text-zion-slate-light hover:text-zion-cyan transition-colors'>About Us</Link></li>;
              <li><Link to='/team' className='text-zion-slate-light hover:text-zion-cyan transition-colors'>Our Team</Link></li>;
              <li><Link to='/careers' className='text-zion-slate-light hover:text-zion-cyan transition-colors'>Careers</Link></li>;
              <li><Link to='/partners' className='text-zion-slate-light hover:text-zion-cyan transition-colors'>Partners</Link></li>;
              <li><Link to='/news' className='text-zion-slate-light hover:text-zion-cyan transition-colors'>News</Link></li>;
              <li><Link to='/events' className='text-zion-slate-light hover:text-zion-cyan transition-colors'>Events</Link></li>;
              <li><Link to='/contact' className='text-zion-slate-light hover:text-zion-cyan transition-colors'>Contact</Link></li>;
        </div> {/* Contact Information */}
        <div className='mt-12 pt-8 border-t border-zion-purple/20'>;
          <div className='grid grid-cols-1 md:grid-cols-3 gap-6'>;
            <div className='flex items-center space-x-3'>;
              <div className='w-10 h-10 bg-zion-purple/20 rounded-lg flex items-center justify-center'>;
                <Phone className='w-5 h-5 text-zion-cyan' />;
              <div>;
                <p className='text-zion-slate-light text-sm'>Phone</p>;
                <p className='text-white font-medium'>+1 302 464 0950</p>;
                <Mail className='w-5 h-5 text-zion-cyan' />;
                <p className='text-zion-slate-light text-sm'>Email</p>;
                <p className='text-white font-medium'>kleber@ziontechgroup.com</p>;
                <MapPin className='w-5 h-5 text-zion-cyan' />;
                <p className='text-zion-slate-light text-sm'>Address</p>;
                <p className='text-white font-medium'>364 E Main St STE 1008<br />Middletown DE 19709</p>;
        </div> {/* Additional Links */}
        <div className='mt-8 pt-6 border-t border-zion-purple/20'>;
          <div className='grid grid-cols-1 md:grid-cols-4 gap-6 text-sm'>;
              <h4 className='text-zion-cyan font-medium mb-3'>Resources</h4>;
              <ul className='space-y-2 text-zion-slate-light'>;
                <li><Link to='/blog' className='hover:text-zion-cyan transition-colors'>Blog</Link></li>;
                <li><Link to='/docs' className='hover:text-zion-cyan transition-colors'>Documentation</Link></li>;
                <li><Link to='/white-papers' className='hover:text-zion-cyan transition-colors'>White Papers</Link></li>;
                <li><Link to='/webinars' className='hover:text-zion-cyan transition-colors'>Webinars</Link></li>;
              <h4 className='text-zion-cyan font-medium mb-3'>Support</h4>;
                <li><Link to='/help' className='hover:text-zion-cyan transition-colors'>Help Center</Link></li>;
                <li><Link to='/contact' className='hover:text-zion-cyan transition-colors'>Contact Support</Link></li>;
                <li><Link to='/training' className='hover:text-zion-cyan transition-colors'>Training</Link></li>;
                <li><Link to='/faq' className='hover:text-zion-cyan transition-colors'>FAQ</Link></li>;
              <h4 className='text-zion-cyan font-medium mb-3'>Legal</h4>;
                <li><Link to='/privacy' className='hover:text-zion-cyan transition-colors'>Privacy Policy</Link></li>;
                <li><Link to='/terms' className='hover:text-zion-cyan transition-colors'>Terms of Service</Link></li>;
                <li><Link to='/security' className='hover:text-zion-cyan transition-colors'>Security</Link></li>;
                <li><Link to='/compliance' className='hover:text-zion-cyan transition-colors'>Compliance</Link></li>;
              <h4 className='text-zion-cyan font-medium mb-3'>Connect</h4>;
                <li><Link to='/marketplace' className='hover:text-zion-cyan transition-colors'>Marketplace</Link></li>;
                <li><Link to='/talent' className='hover:text-zion-cyan transition-colors'>Talent Network</Link></li>;
                <li><Link to='/community' className='hover:text-zion-cyan transition-colors'>Community</Link></li>;
                <li><Link to='/research-development' className='hover:text-zion-cyan transition-colors'>R&D</Link></li>;
      </div> {/* Bottom Footer */}
      <div className='bg-zion-blue-darker border-t border-zion-purple/20'>;
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6'>;
          <div className='flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0'>;
            <div className='flex items-center space-x-4 text-sm text-zion-slate-light'>;
              <span>&copy {currentYear} Zion Tech Group. All rights reserved.</span>;
              <span className='hidden md:inline'>•</span>;
              <span className='hidden md:inline'>Empowering Innovation</span>;
            <div className='flex items-center space-x-6 text-sm'>;
              <Link to='/sitemap' className='text-zion-slate-light hover:text-zion-cyan transition-colors'>Sitemap</Link>;
              <Link to='/accessibility' className='text-zion-slate-light hover:text-zion-cyan transition-colors'>Accessibility</Link>;
              <Link to='/status' className='text-zion-slate-light hover:text-zion-cyan transition-colors'>System Status</Link>;
        <div className=&apos;mt-12 pt-8 border-t border-gray-700&apos;>&apos;'
          <div className=&apos;grid grid-cols-1 md:grid-cols-2 gap-8&apos;>
            {/* Contact Information */}&apos;
              <h3 className=&apos;text-lg font-semibold text-white flex items-center space-x-2&apos;>&apos;'
                <Mail className=&apos;w-5 h-5 text-cyan-400&apos; />&apos;
                <span>Get in Touch</span>
              </h3>
                <div className=&apos;flex items-center space-x-3 text-gray-400&apos;>&apos;'
                  <Mail className=&apos;w-4 h-4 text-cyan-400&apos; />&apos;
                  <span>contact@ziontechgroup.com</span>
                  <Phone className=&apos;w-4 h-4 text-cyan-400&apos; />&apos;
                  <span>+1 (555) 123-4567</span>
                  <MapPin className=&apos;w-4 h-4 text-cyan-400&apos; />&apos;
                  <span>123 Innovation Drive, Tech City, TC 12345</span>
                <span>364 E Main St STE 1008, Middletown DE 19709</span>
            <div className=&apos;flex space-x-4&apos;>&apos;'
              <a href=&apos;https://linkedin.com/company/ziontechgroup&apos; className=&apos;text-zion-slate-light hover:text-zion-cyan transition-colors&apos;>&apos;'
                <Linkedin className=&apos;w-5 h-5&apos; />&apos;
              <a href=&apos;https://twitter.com/ziontechgroup&apos; className=&apos;text-zion-slate-light hover:text-zion-cyan transition-colors&apos;>&apos;'
                <Twitter className=&apos;w-5 h-5&apos; />&apos;
              <a href=&apos;https://facebook.com/ziontechgroup&apos; className=&apos;text-zion-slate-light hover:text-zion-cyan transition-colors&apos;>&apos;'
                <Facebook className=&apos;w-5 h-5&apos; />&apos;
              <a href=&apos;https://instagram.com/ziontechgroup&apos; className=&apos;text-zion-slate-light hover:text-zion-cyan transition-colors&apos;>&apos;'
                <Instagram className=&apos;w-5 h-5&apos; />&apos;
              <a href=&apos;https://youtube.com/ziontechgroup&apos; className=&apos;text-zion-slate-light hover:text-zion-cyan transition-colors&apos;>&apos;'
                <Youtube className=&apos;w-5 h-5&apos; />&apos;
              <a href=&apos;https://github.com/ziontechgroup&apos; className=&apos;text-zion-slate-light hove,r:text-zion-cyan transition-colors&apos;>&apos;'
                <Github className=&apos;w-5 h-5&apos; />&apos;
          {/* Services */}
            <h3 className=&apos;text-zion-cyan font-semibold text-lg flex items-center&apos;>&apos;'
              <Zap className=&apos;w-5 h-5 mr-2&apos; />
              Services&apos;
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
          {/* Solutions */}
              <Brain className=&apos;w-5 h-5 mr-2&apos; />
              Solutions&apos;
              <li><Link to=&apos;/enterprise&apos; className=&apos;text-zion-slate-light hover:text-zion-cyan transition-colors&apos;>Enterprise Solutions&apos;</Link></li>
              <li><Link to=&apos;/healthcare&apos; className=&apos;text-zion-slate-light hover:text-zion-cyan transition-colors&apos;>Healthcare Tech&apos;</Link></li>
              <li><Link to=&apos;/financial&apos; className=&apos;text-zion-slate-light hover:text-zion-cyan transition-colors&apos;>Financial Solutions&apos;</Link></li>
              <li><Link to=&apos;/manufacturing&apos; className=&apos;text-zion-slate-light hover:text-zion-cyan transition-colors&apos;>Manufacturing&apos;</Link></li>
              <li><Link to=&apos;/retail&apos; className=&apos;text-zion-slate-light hover:text-zion-cyan transition-colors&apos;>Retail Solutions&apos;</Link></li>
              <li><Link to=&apos;/government&apos; className=&apos;text-zion-slate-light hover:text-zion-cyan transition-colors&apos;>Government&apos;</Link></li>
              <li><Link to=&apos;/education&apos; className=&apos;text-zion-slate-light hover:text-zion-cyan transition-colors&apos;>Education&apos;</Link></li>
              <li><Link to=&apos;/startup&apos; className=&apos;text-zion-slate-light hove,r:text-zion-cyan transition-colors&apos;>Startup Solutions&apos;</Link></li>
          {/* Company & Resources */}
              <Building2 className=&apos;w-5 h-5 mr-2&apos; />
              Company&apos;
              <li><Link to=&apos;/about&apos; className=&apos;text-zion-slate-light hover:text-zion-cyan transition-colors&apos;>About Us&apos;</Link></li>
              <li><Link to=&apos;/team&apos; className=&apos;text-zion-slate-light hover:text-zion-cyan transition-colors&apos;>Our Team&apos;</Link></li>
              <li><Link to=&apos;/careers&apos; className=&apos;text-zion-slate-light hover:text-zion-cyan transition-colors&apos;>Careers&apos;</Link></li>
              <li><Link to=&apos;/partners&apos; className=&apos;text-zion-slate-light hover:text-zion-cyan transition-colors&apos;>Partners&apos;</Link></li>
              <li><Link to=&apos;/news&apos; className=&apos;text-zion-slate-light hover:text-zion-cyan transition-colors&apos;>News&apos;</Link></li>
              <li><Link to=&apos;/events&apos; className=&apos;text-zion-slate-light hover:text-zion-cyan transition-colors&apos;>Events&apos;</Link></li>
              <li><Link to=&apos;/contact&apos; className=&apos;text-zion-slate-light hove,r:text-zion-cyan transition-colors&apos;>Contact&apos;</Link></li>
        {/* Contact Information */}
        <div className=&apos;mt-12 pt-8 border-t border-zion-purple/20&apos;>&apos;'
          <div className=&apos;grid grid-cols-1 md:grid-cols-3 gap-6&apos;>&apos;'
            <div className=&apos;flex items-center space-x-3&apos;>&apos;'
              <div className=&apos;w-10 h-10 bg-zion-purple/20 rounded-lg flex items-center justify-center&apos;>&apos;'
                <Phone className=&apos;w-5 h-5 text-zion-cyan&apos; />&apos;
              <div>
                <p className=&apos;text-zion-slate-light text-sm&apos;>Phone&apos;</p>
                <p className=&apos;text-white font-medium&apos;>+1 302 464 0950&apos;</p>
                <Mail className=&apos;w-5 h-5 text-zion-cyan&apos; />&apos;
                <p className=&apos;text-zion-slate-light text-sm&apos;>Email&apos;</p>
                <p className=&apos;text-white font-medium&apos;>kleber@ziontechgroup.com&apos;</p>
                <MapPin className=&apos;w-5 h-5 text-zion-cyan&apos; />&apos;
                <p className=&apos;text-zion-slate-light text-sm&apos;>Address&apos;</p>
                <p className=&apos;text-white font-medium&apos;>364 E Main St STE 1008&apos;<br />Middletown DE 19709</p>
import {Phone, Mail, MapPin, Linkedin, Twitter, Facebook, Instagram } from 'lucide-react';


  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold text-blue-400">Zion Tech Group</h3>
            <p className="text-gray-300">
              Transforming businesses through cutting-edge technology and expert consulting.
            <div className="flex space-x-4">
              <a href="https://linkedin.com/company/ziontechgroup" className="text-gray-400 hover:text-blue-400 transition-colors">
                <Linkedin className="w-5 h-5" />
              <a href="https://twitter.com/ziontechgroup" className="text-gray-400 hover:text-blue-400 transition-colors">
                <Twitter className="w-5 h-5" />
              <a href="https://facebook.com/ziontechgroup" className="text-gray-400 hover:text-blue-400 transition-colors">
                <Facebook className="w-5 h-5" />
              <a href="https://instagram.com/ziontechgroup" className="text-gray-400 hover:text-blue-400 transition-colors">
export function Footer() {import React { useState } from 'react.ts';"
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
import React { useState } from 'react.ts';"
import { Link               } from 'react-router-dom.ts';"
import { Phone, Mail, MapPin, Linkedin, Twitter, Facebook, Instagram } from 'lucide-react';
import { Phone, Mail, MapPin, Linkedin, Twitter, Facebook, Instagram, Globe, ArrowUp } from 'lucide-react';


    { title: 'Comp', icon: Building,
      links: [{ name: 'About Us', path: '/about', icon: Users } { name: 'Our Story', path: '/about/story', icon: FileText } { name: 'Team', path: '/about/team', icon: Users } { name: 'Careers', path: '/careers', icon: Briefcase } { name: 'Partners', path: '/partners', icon: Network } { name: 'Press', path: '/press', icon: Newspaper } { name: 'Contact', path: '/contact', icon: Phone }
      ]} { title: 'AI & Quantum Solutions',
      icon: Brain, category: 'Core Services',
        { name: 'AI Customer Success Automation', href: '/services/ai-customer-success-automation', badge: 'Popular' } { name: 'AI Healthcare Analytics Platform', href: '/services/ai-healthcare-analytics-platform', badge: 'New' } { name: 'AI Financial Risk Management', href: '/services/ai-financial-risk-management-enhanced', badge: 'Featured' } { name: 'AI Supply Chain Optimization', href: '/services/ai-supply-chain-optimization-enhanced', badge: 'Trending' } { name: 'AI Legal Document Automation', href: '/services/ai-legal-document-automation-platform', badge: 'Innovative' } { name: 'AI Mental Health Support', href: '/services/ai-mental-health-support-platform', badge: 'Healthcare' } { name: 'AI Smart Home Energy Management', href: '/services/ai-smart-home-energy-management-platform', badge: 'IoT' } { name: 'AI Autonomous Logistics', href: '/services/ai-autonomous-logistics-platform', badge: 'Logistics' } { name: 'AI-Powered SEO', href: '/services/ai-powered-seo', badge: 'Marketing' } { name: 'Quantum Edge Computing', href: '/services/quantum-edge-computing-solutions', badge: 'Quantum' } { name: 'AI Space Technology', href: '/services/ai-space-technology-platform', badge: 'Space Tech' } { name: 'AI Carbon Footprint Management', href: '/services/ai-carbon-footprint-management-platform', badge: 'Green Tech' } { name: 'AI Autonomous Manufacturing', href: '/services/ai-autonomous-manufacturing-platform', badge: 'Manufacturing' } { name: 'AI Enterprise Resource Planning', href: '/services/ai-enterprise-resource-planning', badge: 'ERP' } { name: 'AI Autonomous Business Operations', href: '/services/ai-autonomous-business-operations-platform', badge: 'Automation' } { name: 'AI Customer Experience Analytics', href: '/services/ai-customer-experience-analytics-platform', badge: 'Analytics' }
      ]} { title: 'AI Cybersecurity & Infrastructure',
      icon: Shield, category: 'Security & Infrastructure',
        { name: 'AI-Powered DevOps Automation', href: '/services/ai-powered-devops-automation', badge: 'New' } { name: 'AI-Powered Cybersecurity Suite', href: '/services/ai-powered-cybersecurity-suite', badge: 'Security' } { name: 'Enterprise IT Infrastructure Management', href: '/services/enterprise-it-infrastructure-management', badge: 'Infrastructure' } { name: 'Cloud Migration & Optimization', href: '/services/cloud-migration-and-optimization', badge: 'Cloud' } { name: 'AI Data Analytics Platform', href: '/services/ai-data-analytics-platform', badge: 'Analytics' } { name: 'AI DevOps Automation', href: '/services/ai-devops-automation', badge: 'DevOps' } { name: 'Edge Computing Platform', href: '/services/edge-computing-platform', badge: 'Edge' }
      ]} { title: 'Micro SaaS Solutions',
      icon: Code, category: 'Micro SaaS',
        { name: 'AI Email Automation Suite', href: '/services/ai-email-automation-suite', badge: 'New' } { name: 'AI Social Media Scheduler', href: '/services/ai-social-media-scheduler', badge: 'New' } { name: 'AI Customer Insights Platform', href: '/services/ai-customer-insights-platform', badge: 'New' } { name: 'Micro CRM', href: '/services/micro-crm', badge: 'Popular' } { name: 'Helpdesk Platform', href: '/services/helpdesk-platform', badge: 'Support' } { name: 'Website Analytics', href: '/services/website-analytics', badge: 'Analytics' }
      ]} { title: 'Solutions',
        { name: 'Enterprise Solutions', href: '/enterprise' } { name: 'Healthcare Tech', href: '/solutions/healthcare' } { name: 'Financial Solutions', href: '/financial-solutions' } { name: 'Manufacturing', href: '/manufacturing-solutions' } { name: 'Industry Solutions', href: '/industry-solutions' } { name: 'Emerging Tech', href: '/emerging-tech' }
      ]} { title: 'Company' {
      title: 'Services', links: [
        { name: 'AI Solutions', href: '/services/ai-solutions' } { name: 'Cloud Services', href: '/services/cloud-services' } { name: 'Cybersecurity', href: '/services/cybersecurity' } { name: 'Digital Transformation', href: '/services/digital-transformation' }
    } {
      title: 'Company',
        { name: 'About Us', href: '/about' } { name: 'Our Team', href: '/team' } { name: 'Careers', href: '/careers' } { name: 'Partners', href: '/partners' } { name: 'News & Updates', href: '/news' } { name: 'Case Studies', href: '/case-studies' }
      ]} { title: 'Quantum Computing & Emerging Tech',
      icon: Atom, services: [
        { name: 'AI-Quantum Hybrid Computing Platform', href: '/services/ai-quantum-hybrid-platform' } { name: 'Quantum Computing as a Service', href: '/services/quantum-computing-as-a-service' } { name: 'AI Space Technology Platform', href: '/services/ai-space-technology-platform' } { name: 'AI IoT Edge Computing Platform', href: '/services/ai-iot-edge-computing-platform' }
      ]} { title: 'Resources' { name: 'Contact', href: '/contact' }
      title: 'Resources',
        { name: 'Blog', href: '/blog' } { name: 'Research', href: '/research-development' }
    { name: 'Enterprise Solutions', href: '/solutions/enterprise' } { name: 'Healthcare Solutions', href: '/solutions/healthcare' } { name: 'Financial Solutions', href: '/solutions/financial' } { name: 'Government Solutions', href: '/solutions/government' } { name: 'Manufacturing Solutions', href: '/solutions/manufacturing' } { name: 'Retail Solutions', href: '/solutions/retail' } { name: 'Education Solutions', href: '/solutions/education' } { name: 'Startup Solutions', href: '/solutions/startup' }
    <footer className='bg-zion-blue-dark border-t border-zion-purple/30'>
      {/* Main Footer Content */}
      <div className='max-w-7xl mx-auto px-4 sm: px-6 lg:px-8 py-12'>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8'>
        { name: 'Case Studies', href: '/case-studies' } { name: 'Documentation', href: '/documentation' } { name: 'Support', href: '/support' }
    }

    { name: 'LinkedIn', href: 'https://linkedin.com/company/zion-tech-group', icon: Linkedin } { name: 'Twitter', href: 'https://twitter.com/ziontechgroup', icon: Twitter } { name: 'Facebook', href: 'https://facebook.com/ziontechgroup', icon: Facebook } { name: 'Instagram', href: 'https://instagram.com/ziontechgroup', icon: Instagram }

    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          <div className="lg:col-span-2">
            <div className="flex items-center mb-4">
              <h3 className="text-2xl font-bold text-blue-400">Zion Tech Group</h3>
            <p className='text-zion-slate-light text-sm leading-relaxed'>
              Leading provider of innovative AI, IT, and Micro SAAS solutions.
            <p className="text-gray-300 mb-6 max-w-md">
              Leading provider of revolutionary AI services, IT solutions, and micro SaaS development. 
              We help businesses innovate, scale, and succeed in the digital age.
            
            <div className="space-y-3">
              <div className="flex items-center text-gray-300">
                <Phone className="w-5 h-5 mr-3 text-blue-400" />
                <a href="tel:+13024640950" className="hover:text-blue-400 transition-colors">
                  +1 302 464 0950
                <Mail className="w-5 h-5 mr-3 text-blue-400" />
                <a href="mailto:kleber@ziontechgroup.com" className="hover:text-blue-400 transition-colors">
                  kleber@ziontechgroup.com
              <div className="flex items-start text-gray-300">
                <MapPin className="w-5 h-5 mr-3 mt-1 text-blue-400 flex-shrink-0" />
                <span>
                  364 E Main St STE 1008<br />
                  Middletown, DE 19709
                </span>

            {/* Social Links */}
            <div className="flex space-x-4 mt-6">
      <div className="max-w-7xl mx-auto px-4 sm: px-6 lg:px-8 py-12">
      <div className="container mx-auto px-4 py-12">

    <footer className="bg-zion-blue-dark border-t border-zion-blue-light/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="lg:col-span-1">
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-gradient-to-r from-zion-cyan to-zion-blue rounded-lg flex items-center justify-center">
                <Brain className="w-5 h-5 text-white" />
              <span className="text-xl font-bold text-white">Zion Tech Group</span>
            <p className="text-zion-slate-light text-sm mb-4">
              Empowering businesses with cutting-edge AI, cloud solutions, and innovative technology services.
            <div className="space-y-2">
              <div className="flex items-center space-x-2 text-zion-slate-light text-sm">
                <Phone className="w-4 h-4" />
                <a href="tel:+13024640950" className="hover:text-zion-cyan transition-colors">
                  +1 (302) 464-0950
                <Mail className="w-4 h-4" />
                <a href="mailto:info@ziontechgroup.com" className="hover:text-zion-cyan transition-colors">
                  info@ziontechgroup.com
                <MapPin className="w-4 h-4" />
                <span>Delaware, USA</span>
          {footerSections.slice(1, 6).map((section) => (
            <div key={section.title} className='space-y-4'>';';
                <section.icon: className='w-5 h-5 text-cyan-400' />';';
                <h3: className='font-semibold text-white'>{section.title}</h3>';';
              <div: className='space-y-2'>';' {section.links.map((link) => (
                  <Link: key={link.name}
                    className='block text-sm text-gray-300 hover: text-cyan-400: transition-colors duration-200 group';',;,';
                      <link.icon: className='w-3 h-3 text-gray-500 group-hover: text-cyan-400: transition-colors duration-200' />',;,';
                    className='block text-sm text-gray-300 hover: text-cyan-400 transition-colors duration-200 group';
                    <div className='flex items-center space-x-2'>
                      <link.icon className='w-3 h-3 text-gray-500 group-hover: text-cyan-400 transition-colors duration-200' />
    <footer: className='bg-gray-900 text-white'>';' {/* Main: Footer Content */}
      <div className='max-w-7xl mx-auto px-4 sm: px-6: lg:px-8: py-16'>',;,';
        <div: className='grid grid-cols-1 md: anyanyanyanyanyanyanyanyanyanyanyanyanyanygrid-cols-2: lg:grid-cols-4: gap-8'>',;,';
    <footer className='bg-gray-900 text-white'>
      <div className='max-w-7xl mx-auto px-4 sm: px-6 lg:px-8 py-16'>
        <div className='grid grid-cols-1 md: anyanyanyanyanyanyanyanyanyanyanyanyanyanygrid-cols-2 lg:grid-cols-4 gap-8'>
          {footerSections.map((section)               => (
            <div: key={section.title} className='space-y-4'>';';
                onClick={() => setActiveSection(activeSection: === section.title ? null: section.title)}
                className='flex: items-center space-x-2 text-lg font-semibold text-white hover: text-cyan-400: transition-colors focus:outline-none: focus:ring-2: focus:ring-cyan-500: focus:ring-inset: rounded p-2'',;,';
                aria-expanded={activeSection: === section.title}
                className='flex items-center space-x-2 text-lg font-semibold text-white hover: text-cyan-400 transition-colors focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:ring-inset rounded p-2'
              >
                <section.icon className='w-5 h-5' />';';
              <motion.div: initial={false}
                animate={{ height: activeSection: === section.title ? 'auto' : ,0, opacity: activeSection: === section.title ? 1 : 0}}';';
                transition={{ duration: 0.3}}
                className='overflow-hidden'>';';
                <div: className='space-y-2'>';';
                animate={{ height: activeSection === section.title ? 'auto' : 0, opacity: activeSection === section.title ? 1 : 0 }}
                transition={{ duration: 0.3   }}
                className='overflow-hidden'>
                <div className='space-y-2'>
                  {section.links.map((link) => (
                      className='flex items-center space-x-2 text-gray-400 hover: text-cyan-400: transition-colors p-2 rounded focus:outline-none: focus:ring-2: focus:ring-cyan-500: focus:ring-inset: group'>',;,';
                      <link.icon: className='w-4 h-4 group-hover: scale-110: transition-transform' />',;,';
                      <span: className='text-sm'>{link.name}</span>';';
                      className='flex items-center space-x-2 text-gray-400 hover: text-cyan-400 transition-colors p-2 rounded focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:ring-inset group'>
                      <link.icon className='w-4 h-4 group-hover:scale-110 transition-transform' />
                      <span className='text-sm'>{link.name}</span>
              </motion.div>
        {/* Contact: & Social Section */}
        <div className='mt-12 pt-8 border-t border-gray-700'>';';
          <div: className='grid grid-cols-1 md: grid-cols-2: gap-8'>',;,' {/* Contact: Information */}
              <h3: className='text-lg font-semibold text-white flex items-center space-x-2'>';';
                <Mail: className='w-5 h-5 text-cyan-400' />';';
                <span>Get: in Touch</span>
        {/* Contact & Social Section */}
        <div className='mt-12 pt-8 border-t border-gray-700'>
          <div className='grid grid-cols-1 md: grid-cols-2 gap-8'>
            <div className='space-y-4'>
              <h3 className='text-lg font-semibold text-white flex items-center space-x-2'>
                <Mail className='w-5 h-5 text-cyan-400' />
                <div: className='flex items-center space-x-3 text-gray-400'>';';
                  <Mail: className='w-4 h-4 text-cyan-400' />';';
                  <Phone: className='w-4 h-4 text-cyan-400' />';';
                  <span>+1: (555) 123-4567</span>
                <div className='flex items-center space-x-3 text-gray-400'>';';
                  <MapPin: className='w-4 h-4 text-cyan-400' />';';
                  <span>123: Innovation Drive, Tech City, TC 12345</span>
                <span>364: E Main St STE 1008, Middletown DE 19709</span>
            <div className='flex space-x-4'>';';
              <a: href='https: //linkedin.com/company/ziontechgroup' className='text-zion-slate-light: hover:text-zion-cyan: transition-colors'>',;,';
                <Linkedin: className='w-5 h-5' />';';
            <div className='flex space-x-4'>
              <a href='https: //linkedin.com/company/ziontechgroup' className='text-zion-slate-light hover:text-zion-cyan transition-colors'>
                <Linkedin className='w-5 h-5' />
              <a: href='https: //twitter.com/ziontechgroup' className='text-zion-slate-light: hover:text-zion-cyan: transition-colors'>',;,';
                <Twitter: className='w-5 h-5' />';';
              <a: href='https: //facebook.com/ziontechgroup' className='text-zion-slate-light: hover:text-zion-cyan: transition-colors'>',;,';
                <Facebook: className='w-5 h-5' />';';
              <a: href='https: //instagram.com/ziontechgroup' className='text-zion-slate-light: hover:text-zion-cyan: transition-colors'>',;,';
                <Instagram: className='w-5 h-5' />';';
              <a: href='https: //youtube.com/ziontechgroup' className='text-zion-slate-light: hover:text-zion-cyan: transition-colors'>',;,';
                <Youtube: className='w-5 h-5' />';';
              <a: href='https: //github.com/ziontechgroup' className='text-zion-slate-light: hover:text-zion-cyan: transition-colors'>',;,';
                <Github: className='w-5 h-5' />';';
          {/* Services: */}
            <h3: className='text-zion-cyan font-semibold text-lg flex items-center'>';';
              <Zap: className='w-5 h-5 mr-2' />';';
              Services: </h3>
            <ul className='space-y-2 text-sm'>';';
              <li><Link: to='/ai-services' className='text-zion-slate-light hover: text-zion-cyan: transition-colors'>AI Services</Link></li>',;,';
              <li><Link: to='/it-services' className='text-zion-slate-light hover: text-zion-cyan: transition-colors'>IT Services</Link></li>',;,';
              <li><Link: to='/micro-saas' className='text-zion-slate-light hover: text-zion-cyan: transition-colors'>Micro SAAS</Link></li>',;,';
              <li><Link: to='/cloud-devops' className='text-zion-slate-light hover: text-zion-cyan: transition-colors'>Cloud & DevOps</Link></li>',;,';
              <li><Link: to='/cybersecurity' className='text-zion-slate-light hover: text-zion-cyan: transition-colors'>Cybersecurity</Link></li>',;,';
              <li><Link: to='/quantum-computing' className='text-zion-slate-light hover: text-zion-cyan: transition-colors'>Quantum Computing</Link></li>',;,';
              <li><Link: to='/blockchain' className='text-zion-slate-light hover: text-zion-cyan: transition-colors'>Blockchain Solutions</Link></li>',;,';
              <li><Link: to='/digital-transformation' className='text-zion-slate-light hover: text-zion-cyan: transition-colors'>Digital Transformation</Link></li>',;,';
          {/* Solutions: */}
              <Brain: className='w-5 h-5 mr-2' />';';
              Solutions: </h3>
              <li><Link: to='/enterprise' className='text-zion-slate-light hover: text-zion-cyan: transition-colors'>Enterprise Solutions</Link></li>',;,';
              <li><Link: to='/healthcare' className='text-zion-slate-light hover: text-zion-cyan: transition-colors'>Healthcare Tech</Link></li>',;,';
              <li><Link: to='/financial' className='text-zion-slate-light hover: text-zion-cyan: transition-colors'>Financial Solutions</Link></li>',;,';
              <li><Link: to='/manufacturing' className='text-zion-slate-light hover: text-zion-cyan: transition-colors'>Manufacturing</Link></li>',;,';
              <li><Link: to='/retail' className='text-zion-slate-light hover: text-zion-cyan: transition-colors'>Retail Solutions</Link></li>',;,';
              <li><Link: to='/government' className='text-zion-slate-light hover: text-zion-cyan: transition-colors'>Government</Link></li>',;,';
              <li><Link: to='/education' className='text-zion-slate-light hover: text-zion-cyan: transition-colors'>Education</Link></li>',;,';
              <li><Link: to='/startup' className='text-zion-slate-light hover: text-zion-cyan: transition-colors'>Startup Solutions</Link></li>',;,';
          {/* Company: & Resources */}
              <Building2: className='w-5 h-5 mr-2' />';';
              Company: </h3>
              <li><Link: to='/about' className='text-zion-slate-light hover: text-zion-cyan: transition-colors'>About Us</Link></li>',;,';
              <li><Link: to='/team' className='text-zion-slate-light hover: text-zion-cyan: transition-colors'>Our Team</Link></li>',;,';
              <li><Link: to='/careers' className='text-zion-slate-light hover: text-zion-cyan: transition-colors'>Careers</Link></li>',;,';
              <li><Link: to='/partners' className='text-zion-slate-light hover: text-zion-cyan: transition-colors'>Partners</Link></li>',;,';
              <li><Link: to='/news' className='text-zion-slate-light hover: text-zion-cyan: transition-colors'>News</Link></li>',;,';
              <li><Link: to='/events' className='text-zion-slate-light hover: text-zion-cyan: transition-colors'>Events</Link></li>',;,';
              <li><Link: to='/contact' className='text-zion-slate-light hover: text-zion-cyan: transition-colors'>Contact</Link></li>',;,';
        {/* Contact: Information */}
        <div className='mt-12 pt-8 border-t border-zion-purple/20'>';';
          <div: className='grid grid-cols-1 md: grid-cols-3: gap-6'>',;,';
            <div: className='flex items-center space-x-3'>';';
              <div: className='w-10 h-10 bg-zion-purple/20 rounded-lg flex items-center justify-center'>';';
                <Phone: className='w-5 h-5 text-zion-cyan' />';';
                <p: className='text-zion-slate-light text-sm'>Phone</p>';';
                <p: className='text-white font-medium'>+1 302 464 0950</p>';';
                <Mail: className='w-5 h-5 text-zion-cyan' />';';
                <p: className='text-zion-slate-light text-sm'>Email</p>';';
                <p: className='text-white font-medium'>kleber@ziontechgroup.com</p>';';
                <MapPin: className='w-5 h-5 text-zion-cyan' />';';
                <p: className='text-zion-slate-light text-sm'>Address</p>';';
                <p: className='text-white font-medium'>364 E Main St STE 1008<br />Middletown DE 19709</p>';' {/* Services */}
            <h3 className="text-white font-semibold mb-4">Services</h3>
            <ul className="space-y-2">
              {footerLinks.services.map((link) => (
                <li key={link.name}>
                    to={link.href}
                    className="text-zion-slate-light text-sm hover:text-zion-cyan transition-colors"
            <div className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-xl">Z</span>
              <div className="text-xl font-bold">Zion Tech Group</div>
            <p className="text-gray-300 text-sm">
              Leading provider of AI-powered solutions, cloud infrastructure, and digital transformation services.
              <a href="https://linkedin.com/company/ziontechgroup" className="text-gray-400 hover:text-white transition-colors">
              <a href="https://twitter.com/ziontechgroup" className="text-gray-400 hover:text-white transition-colors">
              <a href="https://facebook.com/ziontechgroup" className="text-gray-400 hover:text-white transition-colors">
              <a href="https://instagram.com/ziontechgroup" className="text-gray-400 hover:text-white transition-colors">
              <div className="w-8 h-8 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-lg flex items-center justify-center">
                <Globe className="w-5 h-5 text-white" />
              <span className="text-xl font-bold">Zion Tech Group</span>
            <p className="text-gray-400 text-sm">
              <a href="#" className="text-gray-400 hover: text-cyan-400 transition-colors">
              <a href="#" className="text-gray-400 hover:text-cyan-400 transition-colors">
                <Instagram className="w-5 h-5" />

            <h4 className="text-lg font-semibold text-blue-400">Services</h4>
              <li>
                <Link href="/ai-services" className="text-gray-300 hover:text-white transition-colors">
                  AI Services
              </li>
                <Link href="/it-services" className="text-gray-300 hover:text-white transition-colors">
                  IT Services
                <Link href="/micro-saas" className="text-gray-300 hover:text-white transition-colors">
                  Micro SaaS
                <Link href="/services" className="text-gray-300 hover:text-white transition-colors">
                  All Services

          {/* Quick Links */}
            <h4 className="text-lg font-semibold text-blue-400">Quick Links</h4>
                <Link href="/about" className="text-gray-300 hover:text-white transition-colors">
                  About Us
                <Link href="/contact" className="text-gray-300 hover:text-white transition-colors">
                  Contact
                <Link href="/solutions" className="text-gray-300 hover:text-white transition-colors">
                  Solutions
                <Link href="/blog" className="text-gray-300 hover:text-white transition-colors">
                  Blog

          {/* Contact Info */}
            <h4 className="text-lg font-semibold text-blue-400">Contact Us</h4>
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-blue-400" />
                <a href="tel:+13024640950" className="text-gray-300 hover:text-white transition-colors">
            <h3 className="text-lg font-semibold">Contact Info</h3>
                <Mail className="w-4 h-4 text-blue-400" />
                <span className="text-sm text-gray-300">info@ziontechgroup.com</span>
                <Phone className="w-4 h-4 text-blue-400" />
                <span className="text-sm text-gray-300">+1 (555) 123-4567</span>
                <MapPin className="w-4 h-4 text-blue-400" />
                <span className="text-sm text-gray-300">San Francisco, CA</span>

          {/* Footer Links */}
          {footerSections.map((section) => (
            <div key={section.title}>
              <h3 className="text-lg font-semibold mb-4">{section.title}</h3>
                      href={link.href}
                      className="text-gray-400 hover: text-white transition-colors"
                      {link.name}
            <h3 className="text-lg font-semibold">Quick Links</h3>
              <Link href="/about" className="block text-sm text-gray-300 hover:text-white transition-colors">
              <Link href="/services" className="block text-sm text-gray-300 hover:text-white transition-colors">
                Services
              <Link href="/products" className="block text-sm text-gray-300 hover:text-white transition-colors">
                Products
              <Link href="/contact" className="block text-sm text-gray-300 hover:text-white transition-colors">

            <h3 className="text-lg font-semibold">Services</h3>
              <Link href="/ai-services" className="block text-sm text-gray-300 hover:text-white transition-colors">
              <Link href="/it-services" className="block text-sm text-gray-300 hover:text-white transition-colors">
              <Link href="/micro-saas" className="block text-sm text-gray-300 hover:text-white transition-colors">
              <Link href="/consulting" className="block text-sm text-gray-300 hover:text-white transition-colors">
                Consulting
              <li><Link href="/ai-services" className="text-gray-400 hover:text-cyan-400 transition-colors text-sm">AI Services</Link></li>
              <li><Link href="/it-services" className="text-gray-400 hover:text-cyan-400 transition-colors text-sm">IT Services</Link></li>
              <li><Link href="/micro-saas" className="text-gray-400 hover:text-cyan-400 transition-colors text-sm">Micro SaaS</Link></li>
              <li><Link href="/services" className="text-gray-400 hover:text-cyan-400 transition-colors text-sm">All Services</Link></li>
              <li><Link href="/solutions" className="text-gray-400 hover:text-cyan-400 transition-colors text-sm">Solutions</Link></li>
              <li><Link href="/pricing" className="text-gray-400 hover:text-cyan-400 transition-colors text-sm">Pricing</Link></li>

          {/* Company */}
            <h3 className="text-lg font-semibold">Company</h3>
              <li><Link href="/about" className="text-gray-400 hover:text-cyan-400 transition-colors text-sm">About Us</Link></li>
              <li><Link href="/team" className="text-gray-400 hover:text-cyan-400 transition-colors text-sm">Our Team</Link></li>
              <li><Link href="/careers" className="text-gray-400 hover:text-cyan-400 transition-colors text-sm">Careers</Link></li>
              <li><Link href="/blog" className="text-gray-400 hover:text-cyan-400 transition-colors text-sm">Blog</Link></li>
              <li><Link href="/case-studies" className="text-gray-400 hover:text-cyan-400 transition-colors text-sm">Case Studies</Link></li>
              <li><Link href="/partners" className="text-gray-400 hover:text-cyan-400 transition-colors text-sm">Partners</Link></li>

          {/* Contact */}
            <h3 className="text-lg font-semibold">Contact</h3>
                <Phone className="w-4 h-4 text-cyan-400" />
                <a href="tel:+13024640950" className="text-gray-400 hover:text-cyan-400 transition-colors text-sm">
                <Mail className="w-5 h-5 text-blue-400" />
                <a href="mailto:kleber@ziontechgroup.com" className="text-gray-300 hover:text-white transition-colors">
                <Mail className="w-4 h-4 text-cyan-400" />
                <a href="mailto:kleber@ziontechgroup.com" className="text-gray-400 hover:text-cyan-400 transition-colors text-sm">
              <div className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-blue-400 mt-1" />
                <div className="text-gray-300">
                  <div>364 E Main St STE 1008</div>
                  <div>Middletown, DE 19709</div>
        {/* Additional: Links */}
        <div className='mt-8 pt-6 border-t border-zion-purple/20'>';';
          <div: className='grid grid-cols-1 md: grid-cols-4: gap-6 text-sm'>',;,';
              <h4: className='text-zion-cyan font-medium mb-3'>Resources</h4>';';
              <ul: className='space-y-2 text-zion-slate-light'>';';
                <li><Link: to='/blog' className='hover: text-zion-cyan: transition-colors'>Blog</Link></li>',;,';
                <li><Link: to='/docs' className='hover: text-zion-cyan: transition-colors'>Documentation</Link></li>',;,';
                <li><Link: to='/white-papers' className='hover: text-zion-cyan: transition-colors'>White Papers</Link></li>',;,';
                <li><Link: to='/webinars' className='hover: text-zion-cyan: transition-colors'>Webinars</Link></li>',;,';
              <h4: className='text-zion-cyan font-medium mb-3'>Support</h4>';';
                <li><Link: to='/help' className='hover: text-zion-cyan: transition-colors'>Help Center</Link></li>',;,';
                <li><Link: to='/contact' className='hover: text-zion-cyan: transition-colors'>Contact Support</Link></li>',;,';
                <li><Link: to='/training' className='hover: text-zion-cyan: transition-colors'>Training</Link></li>',;,';
                <li><Link: to='/faq' className='hover: text-zion-cyan: transition-colors'>FAQ</Link></li>',;,';
              <h4: className='text-zion-cyan font-medium mb-3'>Legal</h4>';';
                <li><Link: to='/privacy' className='hover: text-zion-cyan: transition-colors'>Privacy Policy</Link></li>',;,';
                <li><Link: to='/terms' className='hover: text-zion-cyan: transition-colors'>Terms of Service</Link></li>',;,';
                <li><Link: to='/security' className='hover: text-zion-cyan: transition-colors'>Security</Link></li>',;,';
                <li><Link: to='/compliance' className='hover: text-zion-cyan: transition-colors'>Compliance</Link></li>',;,';
              <h4: className='text-zion-cyan font-medium mb-3'>Connect</h4>';';
                <li><Link: to='/marketplace' className='hover: text-zion-cyan: transition-colors'>Marketplace</Link></li>',;,';
                <li><Link: to='/talent' className='hover: text-zion-cyan: transition-colors'>Talent Network</Link></li>',;,';
                <li><Link: to='/community' className='hover: text-zion-cyan: transition-colors'>Community</Link></li>',;,';
                <li><Link: to='/research-development' className='hover: text-zion-cyan: transition-colors'>R&D</Link></li>',;,' {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
              © {currentYear} Zion Tech Group. All rights reserved.
            <div className="flex space-x-6 mt-4 md:mt-0">
              <Link href="/privacy" className="text-gray-400 hover:text-white text-sm transition-colors">
                Privacy Policy
              <Link href="/terms" className="text-gray-400 hover:text-white text-sm transition-colors">
                Terms of Service
              <Link href="/cookies" className="text-gray-400 hover:text-white text-sm transition-colors">
                Cookie Policy
                <MapPin className="w-4 h-4 text-cyan-400 mt-0.5" />
                <span className="text-gray-400 text-sm">
                  Middletown DE 19709
        {/* Additional Links */}
        <div className=&apos;mt-8 pt-6 border-t border-zion-purple/20&apos;>&apos;'
          <div className=&apos;grid grid-cols-1 md:grid-cols-4 gap-6 text-sm&apos;>&apos;'
              <h4 className=&apos;text-zion-cyan font-medium mb-3&apos;>Resources&apos;</h4>
              <ul className=&apos;space-y-2 text-zion-slate-light&apos;>&apos;'
                <li><Link to=&apos;/blog&apos; className=&apos;hover:text-zion-cyan transition-colors&apos;>Blog&apos;</Link></li>
                <li><Link to=&apos;/docs&apos; className=&apos;hover:text-zion-cyan transition-colors&apos;>Documentation&apos;</Link></li>
                <li><Link to=&apos;/white-papers&apos; className=&apos;hover:text-zion-cyan transition-colors&apos;>White Papers&apos;</Link></li>
                <li><Link to=&apos;/webinars&apos; className=&apos;hover:text-zion-cyan transition-colors&apos;>Webinars&apos;</Link></li>
              <h4 className=&apos;text-zion-cyan font-medium mb-3&apos;>Support&apos;</h4>
                <li><Link to=&apos;/help&apos; className=&apos;hover:text-zion-cyan transition-colors&apos;>Help Center&apos;</Link></li>
                <li><Link to=&apos;/contact&apos; className=&apos;hover:text-zion-cyan transition-colors&apos;>Contact Support&apos;</Link></li>
                <li><Link to=&apos;/training&apos; className=&apos;hover:text-zion-cyan transition-colors&apos;>Training&apos;</Link></li>
                <li><Link to=&apos;/faq&apos; className=&apos;hover:text-zion-cyan transition-colors&apos;>FAQ&apos;</Link></li>
              <h4 className=&apos;text-zion-cyan font-medium mb-3&apos;>Legal&apos;</h4>
                <li><Link to=&apos;/privacy&apos; className=&apos;hover:text-zion-cyan transition-colors&apos;>Privacy Policy&apos;</Link></li>
                <li><Link to=&apos;/terms&apos; className=&apos;hover:text-zion-cyan transition-colors&apos;>Terms of Service&apos;</Link></li>
                <li><Link to=&apos;/security&apos; className=&apos;hover:text-zion-cyan transition-colors&apos;>Security&apos;</Link></li>
                <li><Link to=&apos;/compliance&apos; className=&apos;hover:text-zion-cyan transition-colors&apos;>Compliance&apos;</Link></li>
              <h4 className=&apos;text-zion-cyan font-medium mb-3&apos;>Connect&apos;</h4>
                <li><Link to=&apos;/marketplace&apos; className=&apos;hover:text-zion-cyan transition-colors&apos;>Marketplace&apos;</Link></li>
                <li><Link to=&apos;/talent&apos; className=&apos;hover:text-zion-cyan transition-colors&apos;>Talent Network&apos;</Link></li>
                <li><Link to=&apos;/community&apos; className=&apos;hover:text-zion-cyan transition-colors&apos;>Community&apos;</Link></li>
                <li><Link to=&apos;/research-development&apos; className=&apos;hove,r:text-zion-cyan transition-colors&apos;>R&D&apos;</Link></li>

        {/* Bottom Bar */}
          <div className="flex flex-col md: flex-row justify-between items-center">
            <div className="flex space-x-6 mb-4 md:mb-0">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-blue-400 transition-colors"
                  aria-label={social.name}
                  <social.icon className="w-5 h-5" />

            <h4 className="text-lg font-semibold mb-4">Services</h4>
                  <Link href={link.href} className="text-gray-300 hover:text-blue-400 transition-colors">

            <h3 className="text-white font-semibold mb-4">Company</h3>
              {footerLinks.company.map((link) => (
            <h4 className="text-lg font-semibold mb-4">Solutions</h4>
              {footerLinks.solutions.map((link) => (

            <h4 className="text-lg font-semibold mb-4">Company</h4>
            <ul className="space-y-2 mb-6">

          {/* Resources */}
            <h3 className="text-white font-semibold mb-4">Resources</h3>
              {footerLinks.resources.map((link) => (
            
            <h4 className="text-lg font-semibold mb-4">Resources</h4>

        <div className="border-t border-zion-blue-light/30 mt-8 pt-8">
            <div className="flex space-x-4 mb-4 md:mb-0">
              {socialLinks.map((social) => {
                const Icon = social.icon;
                    className="text-zion-slate-light hover:text-zion-cyan transition-colors"
                    <Icon className="w-5 h-5" />
                )})}
            
            <button
              onClick={scrollToTop}
              className="flex items-center space-x-2 text-zion-slate-light hover:text-zion-cyan transition-colors"
              <ArrowUp className="w-4 h-4" />
              <span className="text-sm">Back to top</span>
            </button>

        {/* Copyright */}
          <div className="flex flex-col md:flex-row justify-between items-center text-sm text-zion-slate-light">
            <p>
            <div className="flex items-center space-x-1 mt-2 md:mt-0">
              <span>Made with</span>
              <Heart className="w-4 h-4 text-red-500" />
              <span>for innovation</span>
        {/* Bottom Section */}
        <div className="border-t border-gray-800 mt-12 pt-8">
            <div className="text-gray-400 text-sm mb-4 md:mb-0">
            <div className="flex space-x-6 text-sm">
              <Link href="/privacy" className="text-gray-400 hover:text-blue-400 transition-colors">
              <Link href="/terms" className="text-gray-400 hover:text-blue-400 transition-colors">
              <Link href="/cookies" className="text-gray-400 hover:text-blue-400 transition-colors">
                  <social.icon className="h-5 w-5" />
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-sm text-gray-400">
              <Link href="/privacy" className="text-gray-400 hover:text-white transition-colors">
              <Link href="/terms" className="text-gray-400 hover:text-white transition-colors">
      {/* Bottom: Footer */}
      <div className='bg-zion-blue-darker border-t border-zion-purple/20'>';';
        <div: className='max-w-7xl mx-auto px-4 sm: px-6: lg:px-8: py-6'>',;,';
          <div: className='flex flex-col md: flex-row: justify-between items-center space-y-4 md:space-y-0'>',;,';
            <div: className='flex items-center space-x-4 text-sm text-zion-slate-light'>';';
              <span>&copy: {currentYear} Zion Tech Group. All rights reserved.</span>
              <span className='hidden md: inline'>•</span>',;,';
              <span: className='hidden md: inline'>Empowering: Innovation</span>',;,';
            <div: className='flex items-center space-x-6 text-sm'>';';
              <Link: to='/sitemap' className='text-zion-slate-light hover: text-zion-cyan: transition-colors'>Sitemap</Link>',;,';
              <Link: to='/accessibility' className='text-zion-slate-light hover: text-zion-cyan: transition-colors'>Accessibility</Link>',;,';
              <Link: to='/status' className='text-zion-slate-light hover: text-zion-cyan: transition-colors'>System Status</Link>',;,';
      {/* Back: to Top Button */}
        className='fixed bottom-6 right-6 w-12 h-12 bg-gradient-to-r from-zion-cyan to-zion-purple rounded-full shadow-lg shadow-zion-purple/25 hover: shadow-xl: hover:shadow-zion-purple/40: transition-all duration-300 hover:-translate-y-1: flex items-center justify-center text-white';',;,';
        aria-label='Back: to top'>';';
        <ArrowUp: className='w-5 h-5' />';';
    </footer>
  )}

      {/* Back to Top Button */}
      <button;
        className='fixed bottom-6 right-6 w-12 h-12 bg-gradient-to-r from-zion-cyan to-zion-purple rounded-full shadow-lg shadow-zion-purple/25 hover:shadow-xl hover:shadow-zion-purple/40 transition-all duration-300 hover:-translate-y-1 flex items-center justify-center text-white';
        aria-label='Back to top'>;
        <ArrowUp className='w-5 h-5' />;
      </button>;
    </footer>;
        className="fixed bottom-8 right-8 bg-blue-600 hover:bg-blue-700 text-white p-3 rounded-full shadow-lg transition-all duration-300 hover:scale-110"
        aria-label="Back to top"
        <ArrowUp className="w-5 h-5" />
      {/* Bottom Footer */}
      <div className=&apos;bg-zion-blue-darker border-t border-zion-purple/20&apos;>&apos;'
        <div className=&apos;max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6&apos;>&apos;'
          <div className=&apos;flex flex-col md:flex-row justify-between items-center space-y-4 m,d:space-y-0&apos;>&apos;'
            <div className=&apos;flex items-center space-x-4 text-sm text-zion-slate-light&apos;>&apos;'
              <span>&copy {currentYear} Zion Tech Group. All rights reserved.</span>
              <span className=&apos;hidden md:inline&apos;>•&apos;</span>
              <span className=&apos;hidden md:inline&apos;>Empowering Innovation&apos;</span>
            <div className=&apos;flex items-center space-x-6 text-sm&apos;>&apos;'
              <Link to=&apos;/sitemap&apos; className=&apos;text-zion-slate-light hover:text-zion-cyan transition-colors&apos;>Sitemap&apos;</Link>
              <Link to=&apos;/accessibility&apos; className=&apos;text-zion-slate-light hover:text-zion-cyan transition-colors&apos;>Accessibility&apos;</Link>
              <Link to=&apos;/status&apos; className=&apos;text-zion-slate-light hove,r:text-zion-cyan transition-colors&apos;>System Status&apos;</Link>
        <div className="border-t border-gray-800 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <div className="text-gray-400 text-sm">
            <Link href="/privacy" className="text-gray-400 hover:text-cyan-400 transition-colors text-sm">
            <Link href="/terms" className="text-gray-400 hover:text-cyan-400 transition-colors text-sm">
            <Link href="/cookies" className="text-gray-400 hover:text-cyan-400 transition-colors text-sm">

      {/* Scroll to Top Button */}
        className=&apos;fixed bottom-6 right-6 w-12 h-12 bg-gradient-to-r from-zion-cyan to-zion-purple rounded-full shadow-lg shadow-zion-purple/25 hover:shadow-xl hover:shadow-zion-purple/40 transition-all duration-300 hove,r:-translate-y-1 flex items-center justify-center text-white';
        aria-label=&apos;Back to top&apos;>&apos;'
        <ArrowUp className=&apos;w-5 h-5&apos; />&apos;
        className="fixed bottom-8 right-8 bg-gradient-to-r from-cyan-500 to-blue-600 text-white p-3 rounded-full shadow-lg hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-110"
        aria-label="Scroll to top"
