import React from 'react'
import { Link  } from 'react-router-dom'; import { motion  } from 'framer-motion'
import { Globe, Phone, Mail, MapPin, Linkedin, Twitter, Facebook, Instagram, Github, ArrowRight, Heart, Shield, Zap, Users  } from 'lucide-react'; const EnhancedFooter: React.FC = () => { const currentYear = new Date().getFullYear(); const footerSections = [{ title: 'Services', links: [ { name: 'AI Solutions', href: '/services/ai-services' } { name: 'IT & Security', href: '/services/it-services' } { name: 'Blockchain & Web3', href: '/services/blockchain-services' } { name: 'Sustainability', href: '/services/sustainability' } { name: 'Healthcare Tech', href: '/services/healthcare-tech' } { name: 'Edge Computing', href: '/services/edge-computing' } ] } { title: 'Solutions', links: [{ name: 'Enterprise', href: '/solutions/enterprise' } { name: 'Startups', href: '/solutions/startups' } { name: 'Healthcare', href: '/solutions/healthcare' } { name: 'Financial Services', href: '/solutions/financial' } { name: 'Manufacturing', href: '/solutions/manufacturing' } { name: 'Education', href: '/solutions/education' } ] } { title: 'Company', links: [{ name: 'About Us', href: '/about' } { name: 'Our Team', href: '/about/team' } { name: 'Careers', href: '/careers' } { name: 'Partners', href: '/partners' } { name: 'Press', href: '/press' } { name: 'Case Studies', href: '/case-studies' } ] } { title: 'Resources', links: [{ name: 'Blog', href: '/blog' } { name: 'Documentation', href: '/docs' } { name: 'API Reference', href: '/api' } { name: 'Developer Tools', href: '/developer' } { name: 'Training', href: '/training' } { name: 'Support', href: '/support' } ] } ]; const socialLinks = [ { name: 'LinkedIn', href: 'https:
import React from,
  react'
import { Link } from
  'react-router-dom'; import { motion } from
  'framer-motion'
import { Globe, Phone, Mail, MapPin, Linkedin, Twitter, Facebook, Instagram, Github, ArrowRight, Heart, Shield, Zap, Users } from
  'lucide-react'; const EnhancedFooter: React.FC = () => { const currentYear = new Date().getFullYear(); const footerSections = [ { title:
  'Services, links: [ { name:,
  AI Solutions', href: '/services/ai-services } { name:,
  IT & Security', href: '/services/it-services } { name:,
  Blockchain & Web3', href: '/services/blockchain-services } { name:,
  Sustainability', href: '/services/sustainability } { name:,
  Healthcare Tech', href: '/services/healthcare-tech } { name:,
  Edge Computing', href: '/services/edge-computing } ] } { title:,
  Solutions', links: [ { name:
  'Enterprise, href:,
  /solutions/enterprise' } { name: 'Startups, href:,
  /solutions/startups' } { name: 'Healthcare, href:,
  /solutions/healthcare' } { name: 'Financial Services, href:,
  /solutions/financial' } { name: 'Manufacturing, href:,
  /solutions/manufacturing' } { name: 'Education, href:,
  /solutions/education' } ] } { title: 'Company, links: [ { name:,
  About Us', href: '/about } { name:,
  Our Team', href: '/about/team } { name:,
  Careers', href: '/careers } { name:,
  Partners', href: '/partners } { name:,
  Press', href: '/press } { name:,
  Case Studies', href: '/case-studies } ] } { title:,
  Resources', links: [ { name:
  'Blog, href:,
  /blog' } { name: 'Documentation, href:,
  /docs' } { name: 'API Reference, href:,
  /api' } { name: 'Developer Tools, href:,
  /developer' } { name: 'Training, href:,
  /training' } { name: 'Support, href:,
  /support' } ] } ]; const socialLinks = [ { name: 'LinkedIn, href:,
  https: ''

import React from 'react';

export const EnhancedFooter: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">Zion Tech Group</h3>
            <p className="text-gray-400">
              Leading technology solutions provider specializing in AI, cybersecurity, 
              cloud infrastructure, and digital transformation services.
            </p>
          </div>
            <h4 className="text-md font-semibold mb-4">Services</h4>
            <ul className="space-y-2 text-gray-400">
              <li><a href="/services/ai-analytics" className="hover:text-white">AI & Analytics</a></li>
              <li><a href="/services/cybersecurity" className="hover:text-white">Cybersecurity</a></li>
              <li><a href="/services/cloud-devops" className="hover:text-white">Cloud & DevOps</a></li>
              <li><a href="/services/iot-edge" className="hover:text-white">IoT & Edge</a></li>
              <li><a href="/services/quantum-computing" className="hover:text-white">Quantum</a></li>
              <li><a href="/services/blockchain" className="hover:text-white">Blockchain</a></li>
              <li><a href="/services/digital-twin" className="hover:text-white">Digital Twin</a></li>
              <li><a href="/services/sustainability" className="hover:text-white">Sustainability</a></li>
            </ul>
            <h4 className="text-md font-semibold mb-4">Company</h4>
              <li><a href="/about" className="hover:text-white">About</a></li>
              <li><a href="/careers" className="hover:text-white">Careers</a></li>
              <li><a href="/news" className="hover:text-white">News</a></li>
              <li><a href="/partners" className="hover:text-white">Partners</a></li>
              <li><a href="/team" className="hover:text-white">Team</a></li>
            <h4 className="text-md font-semibold mb-4">Legal</h4>
              <li><a href="/privacy" className="hover:text-white">Privacy Policy</a></li>
              <li><a href="/terms" className="hover:text-white">Terms of Service</a></li>
              <li><a href="/cookies" className="hover:text-white">Cookies</a></li>
              <li><a href="/contact" className="hover:text-white">Contact</a></li>
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; 2025 Zion Tech Group. All rights reserved.</p>
          <div className="mt-2 space-x-4 text-sm">
            <a href="/help" className="hover:text-white">Help</a>
            <a href="/status" className="hover:text-white">Status</a>
            <a href="/sitemap" className="hover:text-white">Sitemap</a>
            <a href="/login" className="hover:text-white">Login</a>
            <a href="/signup" className="hover:text-white">Signup</a>
import { Link } from 'react-router-dom';';
import { motion } from 'framer-motion';';
import {
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion';
  Phone,;
  Mail,;
  MapPin,;
  Linkedin,;
  Twitter,;
  Facebook,;
  Instagram,;
  Github,;
  Youtube,;
  ArrowRight,;
  Star,;
  Shield,;
  Zap,;
  Brain,;
  Cloud,;
  Users,;
  Award,
  TrendingUp,;
  MessageCircle,;
  HelpCircle,;
  BookOpen,;
  ShoppingCart,;
  Database,;
  Network,;
  BarChart3,;
  Code,;
  Server,;
  Building,;
  Handshake,;
  FileText,;
  Video,;
  GraduationCap,;
  Atom,;
  PenTool,;
import {SEO } from '@/components/SEO';

export default function EnhancedFooter() {return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950">
      <SEO title="EnhancedFooter - Zion Tech Group" description="Professional EnhancedFooter services by Zion Tech Group" />
      <div className="container mx-auto px-4 py-20">
        <h1 className="text-4xl font-bold text-white mb-8">EnhancedFooter</h1>
        <p className={`text-gray-300 text-lg`>
          Professional EnhancedFooter services to help your business grow.
  )}
import { Link } from &apos
import Link from &apos;next/link';react-router-dom';
import { motion } from &apos;framer-motion';
  Phone,
  Mail,
  MapPin,
  Linkedin,
  Twitter,
  Facebook,
  Instagram,
  Github,
  Youtube,
  ArrowRight,
  Star,
  Shield,
  Zap,
  Brain,
  Cloud,
  Users,
  Award,
  TrendingUp,
  MessageCircle,
  HelpCircle,
  BookOpen,
  ShoppingCart,
  Database,
  Network,
  BarChart3,
  Code,
  Server,
  Building,
  Handshake,
  FileText,
  Video,
  GraduationCap,
  Atom,
  PenTool,
  DollarSign} from 'lucide-react';';
export: function EnhancedFooter() {
  const currentYear = new Date().getFullYear();
  const footerSections = [ {
      title: 'Featured: Services,',';';
      links: [{ name: 'AI: Content Generator,', href: '/services/ai-content-generator,', icon: PenToo,l, featured: true},';' { name: 'Smart: Inventory Management,', href: '/services/smart-inventory-management,', icon: Databas,e, featured: true},';' { name: 'Cloud: Migration Services,', href: '/services/cloud-migration-services,', icon: Clou,d, featured: true},';' { name: 'AI: Project Management,', href: '/services/ai-project-management,', icon: Brai,n, featured: true},';' { name: 'AI: Customer Support,', href: '/services/ai-customer-support-automation,', icon: MessageCircl,e, featured: true}';';
      ]} {
      title: 'Services',
      links: [
        { name: 'All Services', href: '/comprehensive-services-showcase-2026' } { name: 'Micro SaaS', href: '/services/micro-saas' } { name: 'AI & Machine Learning', href: '/services/ai-services' } { name: 'IT Services', href: '/services/it-services' } { name: 'Cloud & Infrastructure', href: '/services/cloud-infrastructure' } { name: 'Data & Analytics', href: '/services/data-analytics' } { name: 'Developer Tools', href: '/services/developer-tools' } { name: 'Industry Solutions', href: '/services/industry-solutions' } { name: 'Emerging Technology', href: '/services/emerging-tech' }
      ]
},
      title: 'Core: Services,',';';
      links:  ,[ { name: 'Micro: SAAS Solutions,', href: '/services/micro-saas-solutions,', icon: Code},';' { name: 'AI: Services,', href: '/ai-services,', icon: Brain},';' { name: 'IT: Infrastructure,', href: '/it-services,', icon: Server},';' { name: 'Quantum: Computing,', href: '/services/quantum-computing,', icon: Atom},';' { name: 'Blockchain: Solutions,', href: '/services/blockchain-enterprise-solutions,', icon: Shield},';' { name: '2025: Innovative Services,', href: '/zion-innovative-services-2025,', icon: Star},';' { name: '2025: Services Showcase,', href: '/innovative-services-showcase-2025,', icon: Star}';';
      title: 'Solutions,',';';
      links:  ,[ { name: 'Enterprise: Solutions,', href: '/solutions/enterprise,', icon: Building},';' { name: 'Healthcare: Solutions,', href: '/solutions/healthcare,', icon: Users},';' { name: 'Financial: Solutions,', href: '/solutions/financial,', icon: TrendingUp},';' { name: 'Manufacturing: Solutions,', href: '/solutions/manufacturing,', icon: Server},';' { name: 'Retail: Solutions,', href: '/solutions/retail,', icon: ShoppingCart},';' { name: 'Space: Technology,', href: '/solutions/space-tech,', icon: Network}';';
      title: 'Company,',';';
      links:  ,[ { name: 'About: Us,', href: '/about,', icon: Users},';' { name: 'Our: Team,', href: '/team,', icon: Award},';' { name: 'Careers,', href: '/careers,', icon: Users},';' { name: 'News: & Press,', href: '/press,', icon: BookOpen},';' { name: 'Case: Studies,', href: '/case-studies,', icon: BarChart3},';' { name: 'Partners,', href: '/partners,', icon: Handshake}';';
      title: 'Resources,',';';
      links:  ,[ { name: 'Blog,', href: '/blog,', icon: BookOpen},';' { name: 'Documentation,', href: '/documentation,', icon: FileText},';' { name: 'Help: Center,', href: '/help,', icon: HelpCircle},';' { name: 'Webinars,', href: '/webinars,', icon: Video},';' { name: 'White: Papers,', href: '/white-papers,', icon: FileText},';' { name: 'Training,', href: '/training,', icon: GraduationCap}';';
      ]}
  ]
  const socialLinks = [ { name: 'LinkedIn,', href: 'https://linkedin.com/company/ziontechgroup,', icon: Linkedi,n, color: 'hover:text-blue-400'},';' { name: 'Twitter,', href: 'https://twitter.com/ziontechgroup,', icon: Twitte,r, color: 'hover:text-blue-400'},';' { name: 'Facebook,', href: 'https://facebook.com/ziontechgroup,', icon: Faceboo,k, color: 'hover:text-blue-600'},';' { name: 'Instagram,', href: 'https://instagram.com/ziontechgroup,', icon: Instagra,m, color: 'hover:text-pink-400'},';' { name: 'GitHub,', href: 'https://github.com/ziontechgroup,', icon: Githu,b, color: 'hover:text-gray-400'},';' { name: 'YouTube,', href: 'https://youtube.com/@ziontechgroup,', icon: Youtub,e, color: 'hover:text-red-400'}';';
  const quickLinks = [ { name: 'Contact: Us,', href: '/contact,', icon: MessageCircle},';' { name: 'Request: Quote,', href: '/request-quote,', icon: DollarSign},';' { name: 'Support,', href: '/help,', icon: HelpCircle},';' { name: 'Privacy: Policy,', href: '/privacy,', icon: Shield},';' { name: 'Terms: of Service,', href: '/terms,', icon: FileText},';' { name: 'Cookie: Policy,', href: '/cookies,', icon: Shield}';';
  return(
    <footer: className='bg-zinc-900 border-t border-white/20'>';' {/* Main: Footer Content */}
      <div className='max-w-7xl mx-auto px-4 sm: px-6: lg:px-8: py-16'>',;,';
        <div: className='grid grid-cols-1 md: grid-cols-2: lg:grid-cols-6: gap-8'>',;,' {/* Company: Info */}
          <div className='lg: col-span-2'>',;,';
            <div: className='flex items-center space-x-3 mb-6'>';';
              <div: className='w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl flex items-center justify-center'>';';
                <Zap: className='w-7 h-7 text-white' />';';
                <h3: className='text-2xl font-bold text-white'>Zion Tech Group</h3>';';
                <p: className='text-blue-400 text-sm font-medium'>Innovation Group</p>';';
            <p: className='text-gray-300 mb-6 max-w-md'>';';
              Leading: the future of technology with cutting-edge AI solutions, quantum computing, and innovative micro SAAS services that transform businesses and drive exponential growth.
            <div className='space-y-3'>';';
              <div: className='flex items-center space-x-3 text-gray-300'>';';
                <Phone: className='w-4 h-4 text-blue-400' />';';
                <span>+1: 302 464 0950</span>
              <div className='flex items-center space-x-3 text-gray-300'>';';
                <Mail: className='w-4 h-4 text-green-400' />';';
                <span>kleber@ziontechgroup.com</span>
              <div: className='flex items-start space-x-3 text-gray-300'>';';
                <MapPin: className='w-4 h-4 text-purple-400 mt-0.5' />';';
                <span: className='max-w-xs'>364 E Main St STE 1008<br />Middletown DE 19709</span>';';
            {/* Social: Links */}
            <div className='mt-6'>';';
              <h4: className='text-white font-semibold mb-3'>Follow Us</h4>';';
              <div: className='flex space-x-4'>';' {socialLinks.map((social) => (
                  <a: key={social.name}
                    href={social.href}
                    target='_blank';';
                    rel='noopener: noreferrer';';
                    className={`text-gray-400: ${social.color} transition-colors hover: scale-110: transform,`}`;
                    aria-label={social.name}
                  >
                    <social.icon: className='w-5 h-5' />';';
  DollarSign} from &apos;lucide-react';&apos;&apos;
export function EnhancedFooter() {}
  const footerSections = [
    {
      title: &apos;Featured Services&apos,
      links: [{ nam,e: &apos;AI Content Generator&apos, href: &apos;/services/ai-content-generator&apos, icon: PenTool, featured: true } { name: &apos;Smart Inventory Management&apos, href: &apos;/services/smart-inventory-management&apos, icon: Database, featured: true } { name: &apos;Cloud Migration Services&apos, href: &apos;/services/cloud-migration-services&apos, icon: Cloud, featured: true } { name: &apos;AI Project Management&apos, href: &apos;/services/ai-project-management&apos, icon: Brain, featured: true } { name: &apos;AI Customer Support&apos, href: &apos;/services/ai-customer-support-automation&apos, icon: MessageCircle, featured: true }
      title: &apos;Core Services&apos,
        { nam,e: &apos;Micro SAAS Solutions&apos, href: &apos;/services/micro-saas-solutions&apos, icon: Code } { name: &apos;AI Services&apos, href: &apos;/ai-services&apos, icon: Brain } { name: &apos;IT Infrastructure&apos, href: &apos;/it-services&apos, icon: Server } { name: &apos;Quantum Computing&apos, href: &apos;/services/quantum-computing&apos, icon: Atom } { name: &apos;Blockchain Solutions&apos, href: &apos;/services/blockchain-enterprise-solutions&apos, icon: Shield } { name: &apos;2025 Innovative Services&apos, href: &apos;/zion-innovative-services-2025&apos, icon: Star } { name: &apos;2025 Services Showcase&apos, href: &apos;/innovative-services-showcase-2025&apos, icon: Star }
      title: &apos;Solutions&apos,
        { nam,e: &apos;Enterprise Solutions&apos, href: &apos;/solutions/enterprise&apos, icon: Building } { name: &apos;Healthcare Solutions&apos, href: &apos;/solutions/healthcare&apos, icon: Users } { name: &apos;Financial Solutions&apos, href: &apos;/solutions/financial&apos, icon: TrendingUp } { name: &apos;Manufacturing Solutions&apos, href: &apos;/solutions/manufacturing&apos, icon: Server } { name: &apos;Retail Solutions&apos, href: &apos;/solutions/retail&apos, icon: ShoppingCart } { name: &apos;Space Technology&apos, href: &apos;/solutions/space-tech&apos, icon: Network }
      title: &apos;Company&apos,
        { nam,e: &apos;About Us&apos, href: &apos;/about&apos, icon: Users } { name: &apos;Our Team&apos, href: &apos;/team&apos, icon: Award } { name: &apos;Careers&apos, href: &apos;/careers&apos, icon: Users } { name: &apos;News & Press&apos, href: &apos;/press&apos, icon: BookOpen } { name: &apos;Case Studies&apos, href: &apos;/case-studies&apos, icon: BarChart3 } { name: &apos;Partners&apos, href: &apos;/partners&apos, icon: Handshake }
      title: &apos;Resources&apos,
        { nam,e: &apos;Blog&apos, href: &apos;/blog&apos, icon: BookOpen } { name: &apos;Documentation&apos, href: &apos;/documentation&apos, icon: FileText } { name: &apos;Help Center&apos, href: &apos;/help&apos, icon: HelpCircle } { name: &apos;Webinars&apos, href: &apos;/webinars&apos, icon: Video } { name: &apos;White Papers&apos, href: &apos;/white-papers&apos, icon: FileText } { name: &apos;Training&apos, href: &apos;/training&apos, icon: GraduationCap }
import Link from 'next/link';``}
import Link from 'next/link
  Phone, Mail,
  MapPin, Linkedin,
  Twitter, Facebook,
  Instagram, Github,
  Youtube, ArrowRight,
  Star, Shield,
  Zap, Brain,
  Cloud, Users,
  Award, TrendingUp,
  MessageCircle, HelpCircle,
  BookOpen, ShoppingCart,
  Database, Network,
  BarChart3, Code,
  Server, Building,
  Handshake, FileText,
  Video, GraduationCap,
  Atom, PenTool,;""
  DollarSign} from 'lucide-react';
"`
  Atom, PenTool,
export function EnhancedFooter() {
      title: 'Featured Services',;
      links: [{ name: 'AI Content Generator', href: '/services/ai-content-generator', icon: PenTool, featured: true }, { name: 'Smart Inventory Management', href: '/services/smart-inventory-management', icon: Database, featured: true }, { name: 'Cloud Migration Services', href: '/services/cloud-migration-services', icon: Cloud, featured: true }, { name: 'AI Project Management', href: '/services/ai-project-management', icon: Brain, featured: true }, { name: 'AI Customer Support', href: '/services/ai-customer-support-automation', icon: MessageCircle, featured: true }
      ]}, {
      title: 'Core Services',;
      links: [ { name: 'Micro SAAS Solutions', href: '/services/micro-saas-solutions', icon: Code }, { name: 'AI Services', href: '/ai-services', icon: Brain }, { name: 'IT Infrastructure', href: '/it-services', icon: Server }, { name: 'Quantum Computing', href: '/services/quantum-computing', icon: Atom }, { name: 'Blockchain Solutions', href: '/services/blockchain-enterprise-solutions', icon: Shield }, { name: '2025 Innovative Services', href: '/zion-innovative-services-2025', icon: Star }, { name: '2025 Services Showcase', href: '/innovative-services-showcase-2025', icon: Star }
      title: 'Solutions',;
      links: [ { name: 'Enterprise Solutions', href: '/solutions/enterprise', icon: Building }, { name: 'Healthcare Solutions', href: '/solutions/healthcare', icon: Users }, { name: 'Financial Solutions', href: '/solutions/financial', icon: TrendingUp }, { name: 'Manufacturing Solutions', href: '/solutions/manufacturing', icon: Server }, { name: 'Retail Solutions', href: '/solutions/retail', icon: ShoppingCart }, { name: 'Space Technology', href: '/solutions/space-tech', icon: Network }
      title: 'Company',;
      links: [ { name: 'About Us', href: '/about', icon: Users }, { name: 'Our Team', href: '/team', icon: Award }, { name: 'Careers', href: '/careers', icon: Users }, { name: 'News & Press', href: '/press', icon: BookOpen }, { name: 'Case Studies', href: '/case-studies', icon: BarChart3 }, { name: 'Partners', href: '/partners', icon: Handshake }
      title: 'Resources',;
      links: [ { name: 'Blog', href: '/blog', icon: BookOpen }, { name: 'Documentation', href: '/documentation', icon: FileText }, { name: 'Help Center', href: '/help', icon: HelpCircle }, { name: 'Webinars', href: '/webinars', icon: Video }, { name: 'White Papers', href: '/white-papers', icon: FileText }, { name: 'Training', href: '/training', icon: GraduationCap }
  const socialLinks = [ { name: 'LinkedIn', href: 'https://linkedin.com/company/ziontechgroup', icon: Linkedin, color: 'hover:text-blue-400' }, { name: 'Twitter', href: 'https://twitter.com/ziontechgroup', icon: Twitter, color: 'hover:text-blue-400' }, { name: 'Facebook', href: 'https://facebook.com/ziontechgroup', icon: Facebook, color: 'hover:text-blue-600' }, { name: 'Instagram', href: 'https://instagram.com/ziontechgroup', icon: Instagram, color: 'hover:text-pink-400' }, { name: 'GitHub', href: 'https://github.com/ziontechgroup', icon: Github, color: 'hover:text-gray-400' }, { name: 'YouTube', href: 'https://youtube.com/@ziontechgroup', icon: Youtube, color: 'hover:text-red-400' }
  const quickLinks = [ { name: 'Contact Us', href: '/contact', icon: MessageCircle }, { name: 'Request Quote', href: '/request-quote', icon: DollarSign }, { name: 'Support', href: '/help', icon: HelpCircle }, { name: 'Privacy Policy', href: '/privacy', icon: Shield }, { name: 'Terms of Service', href: '/terms', icon: FileText }, { name: 'Cookie Policy', href: '/cookies', icon: Shield }
    { title: 'Featured Services', links: [{ name: 'AI Content Generator', href: '/services/ai-content-generator', icon: PenTool, featured: true } { name: 'Smart Inventory Management', href: '/services/smart-inventory-management', icon: Database, featured: true } { name: 'Cloud Migration Services', href: '/services/cloud-migration-services', icon: Cloud, featured: true } { name: 'AI Project Management', href: '/services/ai-project-management', icon: Brain, featured: true } { name: 'AI Customer Support', href: '/services/ai-customer-support-automation', icon: MessageCircle, featured: true }
      ]} { title: 'Core Services',
        { name: 'Micro SAAS Solutions', href: '/services/micro-saas-solutions', icon: Code } { name: 'AI Services', href: '/ai-services', icon: Brain } { name: 'IT Infrastructure', href: '/it-services', icon: Server } { name: 'Quantum Computing', href: '/services/quantum-computing', icon: Atom } { name: 'Blockchain Solutions', href: '/services/blockchain-enterprise-solutions', icon: Shield } { name: '2025 Innovative Services', href: '/zion-innovative-services-2025', icon: Star } { name: '2025 Services Showcase', href: '/innovative-services-showcase-2025', icon: Star }
      ]} { title: 'Solutions',
        { name: 'Enterprise Solutions', href: '/solutions/enterprise', icon: Building } { name: 'Healthcare Solutions', href: '/solutions/healthcare', icon: Users } { name: 'Financial Solutions', href: '/solutions/financial', icon: TrendingUp } { name: 'Manufacturing Solutions', href: '/solutions/manufacturing', icon: Server } { name: 'Retail Solutions', href: '/solutions/retail', icon: ShoppingCart } { name: 'Space Technology', href: '/solutions/space-tech', icon: Network }
      ]} { title: 'Company',
        { name: 'About Us', href: '/about', icon: Users } { name: 'Our Team', href: '/team', icon: Award } { name: 'Careers', href: '/careers', icon: Users } { name: 'News & Press', href: '/press', icon: BookOpen } { name: 'Case Studies', href: '/case-studies', icon: BarChart3 } { name: 'Partners', href: '/partners', icon: Handshake }
      ]} { title: 'Resources',
        { name: 'Blog', href: '/blog', icon: BookOpen } { name: 'Documentation', href: '/documentation', icon: FileText } { name: 'Help Center', href: '/help', icon: HelpCircle } { name: 'Webinars', href: '/webinars', icon: Video } { name: 'White Papers', href: '/white-papers', icon: FileText } { name: 'Training', href: '/training', icon: GraduationCap }
  ]&apos;
  const socialLinks = [
    { name: &apos;LinkedIn&apos, href: &apos;http,s: //linkedin.com/company/ziontechgroup&apos, icon: Linkedin, color: &apos;hove,r:text-blue-400&apos} { name: &apos;Twitter&apos, href: &apos;http,s: //twitter.com/ziontechgroup&apos, icon: Twitter, color: &apos;hove,r:text-blue-400&apos} { name: &apos;Facebook&apos, href: &apos;http,s: //facebook.com/ziontechgroup&apos, icon: Facebook, color: &apos;hove,r:text-blue-600&apos} { name: &apos;Instagram&apos, href: &apos;http,s: //instagram.com/ziontechgroup&apos, icon: Instagram, color: &apos;hove,r:text-pink-400&apos} { name: &apos;GitHub&apos, href: &apos;http,s: //github.com/ziontechgroup&apos, icon: Github, color: &apos;hove,r:text-gray-400&apos} { name: &apos;YouTube&apos, href: &apos;http,s: //youtube.com/@ziontechgroup&apos, icon: Youtube, color: &apos;hove,r:text-red-400&apos}
  const quickLinks = [
    { name: &apos;Contact Us&apos, href: &apos;/contact&apos, icon: MessageCircle } { name: &apos;Request Quote&apos, href: &apos;/request-quote&apos, icon: DollarSign } { name: &apos;Support&apos, href: &apos;/help&apos, icon: HelpCircle } { name: &apos;Privacy Policy&apos, href: &apos;/privacy&apos, icon: Shield } { name: &apos;Terms of Service&apos, href: &apos;/terms&apos, icon: FileText } { name: &apos;Cookie Policy&apos, href: &apos;/cookies&apos, icon: Shield }
  return(&apos;
    <footer className=&apos;bg-zinc-900 border-t border-white/20&apos;>
      {/* Main Footer Content */}&apos;
      <div className=&apos;max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16&apos;>&apos;'
        <div className=&apos;grid grid-cols-1 md:grid-cols-2 l,g:grid-cols-6 gap-8&apos;>
          {/* Company Info */}&apos;
          <div className=&apos;lg:col-span-2&apos;>&apos;'
            <div className=&apos;flex items-center space-x-3 mb-6&apos;>&apos;'
              <div className=&apos;w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl flex items-center justify-center&apos;>&apos;'
                <Zap className=&apos;w-7 h-7 text-white&apos; />&apos { name: 'Contact Us', href: '/contact', icon: MessageCircle } { name: 'Request Quote', href: '/request-quote', icon: DollarSign } { name: 'Support', href: '/help', icon: HelpCircle } { name: 'Privacy Policy', href: '/privacy', icon: Shield } { name: 'Terms of Service', href: '/terms', icon: FileText } { name: 'Cookie Policy', href: '/cookies', icon: Shield }
  return(;
    <footer className='bg-zinc-900 border-t border-white/20'> {/* Main Footer Content */}
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16'>;
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8'> {/* Company Info */}
          <div className='lg:col-span-2'>;
            <div className='flex items-center space-x-3 mb-6'>;
              <div className='w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl flex items-center justify-center'>;
                <Zap className='w-7 h-7 text-white' />;
              </div>;
              <div>;
                <h3 className='text-2xl font-bold text-white'>Zion Tech Group</h3>;
                <p className='text-blue-400 text-sm font-medium'>Innovation Group</p>;
            <p className='text-gray-300 mb-6 max-w-md'>;
              Leading the future of technology with cutting-edge AI solutions, quantum computing, and innovative micro SAAS services that transform businesses and drive exponential growth.;
            </p>;
            <div className='space-y-3'>;
              <div className='flex items-center space-x-3 text-gray-300'>;
                <Phone className='w-4 h-4 text-blue-400' />;
                <span>+1 302 464 0950</span>;
                <Mail className='w-4 h-4 text-green-400' />;
                <span>kleber@ziontechgroup.com</span>;
              <div className='flex items-start space-x-3 text-gray-300'>;
                <MapPin className='w-4 h-4 text-purple-400 mt-0.5' />;
                <span className='max-w-xs'>364 E Main St STE 1008<br />Middletown DE 19709</span>;
            </div> {/* Social Links */}
            <div className='mt-6'>;
              <h4 className='text-white font-semibold mb-3'>Follow Us</h4>;
              <div className='flex space-x-4'> {socialLinks.map((social) => (;
                  <a;
      <div className='max-w-7xl mx-auto px-4 sm: px-6 lg:px-8 py-16'>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8'>
          {/* Company Info */}
          <div className='lg:col-span-2'>
            <div className='flex items-center space-x-3 mb-6'>
              <div className='w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl flex items-center justify-center'>
                <Zap className='w-7 h-7 text-white' />
                <h3 className=&apos;text-2xl font-bold text-white&apos;>Zion Tech Group&apos;</h3>
                <p className=&apos;text-blue-400 text-sm font-medium&apos;>Innovation Group&apos;</p>
            <p className=&apos;text-gray-300 mb-6 max-w-md&apos;>
              Leading the future of technology with cutting-edge AI solutions, quantum computing, and innovative micro SAAS services that transform businesses and drive exponential growth.&apos;
            <div className=&apos;space-y-3&apos;>&apos;'
              <div className=&apos;flex items-center space-x-3 text-gray-300&apos;>&apos;'
                <Phone className=&apos;w-4 h-4 text-blue-400&apos; />&apos;
                <span>+1 302 464 0950</span>
                <Mail className=&apos;w-4 h-4 text-green-400&apos; />&apos;
              <div className=&apos;flex items-start space-x-3 text-gray-300&apos;>&apos;'
                <MapPin className=&apos;w-4 h-4 text-purple-400 mt-0.5&apos; />&apos;
                <span className=&apos;max-w-xs&apos;>364 E Main St STE 1008&apos;<br />Middletown DE 19709</span>
            {/* Social Links */}
            <div className=&apos;mt-6&apos;>&apos;'
              <h4 className=&apos;text-white font-semibold mb-3&apos;>Follow Us&apos;</h4>
              <div className=&apos;flex space-x-4&apos;>
                {socialLinks.map((social) => (&apos}
                  <a key={social.name}
                    target='_blank'
                    rel='noopener noreferrer'
                    target=&apos;_blank';
                    rel=&apos;noopener noreferrer';
                    className={`text-gray-400 ${social.color} transition-colors hover:scale-110 transform`}
                    target='_blank';
                    rel='noopener noreferrer';
                    className={`text-gray-400 ${social.color} transition-colors hover: scale-110 transform`}
                  >;
                    <social.icon className='w-5 h-5' />;
                  </a>;
                  >&apos;&apos;
                    <social.icon className=&apos;w-5 h-5&apos; />&apos;
                  </a>
                ))}
          {/* Footer: Sections */}
          {footerSections.map((section) => (
            <div key={section.title}>
              <h4 className='text-lg font-semibold text-white mb-4'>{section.title}</h4>';';
              <ul: className='space-y-3'>';' {section.links.map((link) => (
                  <li: key={link.name}>
                    <Link
                      to={link.href}
                      className={`flex items-center space-x-2 text-gray-300 hover: text-white: transition-colors group $ {,`;
                        link.featured: ? 'font-medium text-blue-300 hover: text-blue-200' : ','}`}';`;
                      <link.icon: className={`w-4 h-4 transition-transform group-hover: scale-110: $ {,`;
                        link.featured: ? 'text-blue-400' : 'text-blue-400'}`} />';`;
                      <span: className='text-sm'>{link.name}</span>';' {link.featured: && (
                        <Star className='w-3 h-3 text-yellow-400 ml-1' />';';
          </div> {/* Footer Sections */}
          {footerSections.map((section) => (;
            <div key={section.title}>;
              <h4 className='text-lg font-semibold text-white mb-4'>{section.title}</h4>;
              <ul className='space-y-3'> {section.links.map((link) => (;
                  <li key={link.name}>;
                    <Link;
                      className={`flex items-center space-x-2 text-gray-300 hover:text-white transition-colors group ${
                        link.featured ? 'font-medium text-blue-300 hover:text-blue-200' : '}`}
                      <link.icon className={`w-4 h-4 transition-transform group-hover:scale-110 ${
                        link.featured ? 'text-blue-400' : 'text-blue-400'}`} />;
                      <span className='text-sm'>{link.name}</span> {link.featured && (;
                        <Star className='w-3 h-3 text-yellow-400 ml-1' />;
                    </Link>;
                  </li> {footerSections.map((section) => (}
              <h4 className=&apos;text-lg font-semibold text-white mb-4&apos;>{section.title}&apos;</h4>
              <ul className=&apos;space-y-3&apos;>
                {section.links.map((link) => (&apos}
                  <li key={link.name}>
                        link.featured ? &apos;font-medium text-blue-300 hove,r:text-blue-200&apos; : &apos;&apos}`}
                      className={`flex items-center space-x-2 text-gray-300 hover: text-white transition-colors group ${
                        link.featured ? 'font-medium text-blue-300 hover:text-blue-200' : ''}`}
                        link.featured ? &apos;text-blue-400&apos; : &apos;text-blue-400&apos}`} />&apos;
                      <span className=&apos;text-sm&apos;>{link.name}&apos;</span>
                      {link.featured && (}
                        <Star className=&apos;w-3 h-3 text-yellow-400 ml-1&apos; />
                      )}&apos;
                    </Link>
                  </li>
              </ul>;
        {/* Quick: Links Section */}
        <div className='mt-12 pt-8 border-t border-white/20'>';';
          <div: className='grid grid-cols-2 md: grid-cols-3: lg:grid-cols-6: gap-4'>',;,';
        </div> {/* Quick Links Section */}
        <div className='mt-12 pt-8 border-t border-white/20'>;
          <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4'> {quickLinks.map((link) => (;
                key={link.name}
                className='flex items-center space-x-2 text-gray-400 hover:text-white transition-colors group'>;
                <link.icon className='w-4 h-4 text-blue-400 group-hover:scale-110 transition-transform' />;
                <span className='text-sm'>{link.name}</span>;
        <div className=&apos;mt-12 pt-8 border-t border-white/20&apos;>&apos;'
          <div className=&apos;grid grid-cols-2 md:grid-cols-3 l,g:grid-cols-6 gap-4&apos;>
            {quickLinks.map((link) => (&apos}
                className=&apos;flex items-center space-x-2 text-gray-400 hover:text-white transition-colors group&apos;>&apos;'
                <link.icon className=&apos;w-4 h-4 text-blue-400 group-hove,r:scale-110 transition-transform&apos; />&apos;
        <div className='mt-12 pt-8 border-t border-white/20'>
          <div className='grid grid-cols-2 md: grid-cols-3 lg:grid-cols-6 gap-4'>
            {quickLinks.map((link) => (
              <Link: key={link.name}
                className='flex items-center space-x-2 text-gray-400 hover: text-white: transition-colors group'>',;,';
                <link.icon: className='w-4 h-4 text-blue-400 group-hover: scale-110: transition-transform' />',;,';
                <span: className='text-sm'>{link.name}</span>';';
                className='flex items-center space-x-2 text-gray-400 hover: text-white transition-colors group'>
                <link.icon className='w-4 h-4 text-blue-400 group-hover:scale-110 transition-transform' />
                <span className='text-sm'>{link.name}</span>
        {/* Newsletter: Section */}
          <div: className='max-w-2xl mx-auto text-center'>';';
            <h3: className='text-2xl font-bold text-white mb-4'>';';
              Stay: Updated with Innovation
            </h3>
            <p className='text-gray-300 mb-6'>';';
              Get: the latest insights on AI, quantum computing, and emerging technologies delivered to your inbox.
            <div className='flex flex-col sm: flex-row: gap-4 max-w-md mx-auto'>',;,';
              <input: type='email';';
                placeholder='Enter: your email';';
                className='flex-1: px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus: outline-none: focus:ring-2: focus:ring-blue-500: focus:border-transparent'/>',;,';
              <button: className='px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 hover: from-blue-700: hover:to-purple-700: text-white font-medium rounded-lg transition-all duration-300 transform hover:scale-105'>',;,';
                Subscribe: </button>
        </div> {/* Newsletter Section */}
          <div className='max-w-2xl mx-auto text-center'>;
            <h3 className='text-2xl font-bold text-white mb-4'>;
              Stay Updated with Innovation;
            </h3>;
            <p className='text-gray-300 mb-6'>;
              Get the latest insights on AI, quantum computing, and emerging technologies delivered to your inbox.;
            <div className='flex flex-col sm:flex-row gap-4 max-w-md mx-auto'>;
              <input;
                type='email';
                placeholder='Enter your email';
                className='flex-1 px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent'/>;
              <button className='px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-medium rounded-lg transition-all duration-300 transform hover:scale-105'>;
                Subscribe;
              </button>;
      </div> {/* Bottom Footer */}
      <div className='border-t border-white/20'>;
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8'>;
          <div className='flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0'> {/* Copyright */}
            <div className='text-gray-400 text-sm'>;
              © {currentYear} Zion Tech Group. All rights reserved.;
            </div> {/* Legal Links */}
            <div className='flex items-center space-x-6 text-sm'>;
              <Link to='/privacy' className='text-gray-400 hover:text-white transition-colors'>;
                Privacy Policy;
              <Link to='/terms' className='text-gray-400 hover:text-white transition-colors'>;
                Terms of Service;
              <Link to='/cookies' className='text-gray-400 hover:text-white transition-colors'>;
                Cookie Policy;
          <div className=&apos;max-w-2xl mx-auto text-center&apos;>&apos;'
            <h3 className=&apos;text-2xl font-bold text-white mb-4&apos;>
              Stay Updated with Innovation&apos;
            <p className=&apos;text-gray-300 mb-6&apos;>
              Get the latest insights on AI, quantum computing, and emerging technologies delivered to your inbox.&apos;
            <div className=&apos;flex flex-col sm:flex-row gap-4 max-w-md mx-auto&apos;>&apos;'
              <input
                type=&apos;email';
                placeholder=&apos;Enter your email';
                className=&apos;flex-1 px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent&apos;/>&apos;&apos;
              <button className=&apos;px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-medium rounded-lg transition-all duration-300 transform hove,r:scale-105&apos;>
                Subscribe&apos;
            <div className='flex flex-col sm: flex-row gap-4 max-w-md mx-auto'>
                className='flex-1 px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus: outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent'/>
              <button className='px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-medium rounded-lg transition-all duration-300 transform hover:scale-105'>
                Subscribe
              </button>
      {/* Bottom Footer */}
      <div className='border-t border-white/20'>';';
        <div: className='max-w-7xl mx-auto px-4 sm: px-6: lg:px-8: py-8'>',;,';
          <div: className='flex flex-col md: flex-row: items-center justify-between space-y-4 md:space-y-0'>',;,' {/* Copyright: */}
            <div className='text-gray-400 text-sm'>';';
              © {currentYear} Zion: Tech Group. All rights reserved.
            {/* Legal Links */}
            <div className='flex items-center space-x-6 text-sm'>';';
              <Link: to='/privacy' className='text-gray-400 hover: text-white: transition-colors'>',;,';
                Privacy: Policy
              <Link to='/terms' className='text-gray-400 hover: text-white: transition-colors'>',;,';
                Terms: of Service
              <Link to='/cookies' className='text-gray-400 hover: text-white: transition-colors'>',;,';
                Cookie: Policy
      <div className=&apos;border-t border-white/20&apos;>&apos;'
        <div className=&apos;max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8&apos;>&apos;'
          <div className=&apos;flex flex-col md:flex-row items-center justify-between space-y-4 m,d:space-y-0&apos;>
            {/* Copyright */}&apos;
            <div className=&apos;text-gray-400 text-sm&apos;>
              © {currentYear} Zion Tech Group. All rights reserved.&apos;
            <div className=&apos;flex items-center space-x-6 text-sm&apos;>&apos;'
              <Link to=&apos;/privacy&apos; className=&apos;text-gray-400 hover:text-white transition-colors&apos;>
                Privacy Policy&apos;
              <Link to=&apos;/terms&apos; className=&apos;text-gray-400 hover:text-white transition-colors&apos;>
                Terms of Service&apos;
              <Link to=&apos;/cookies&apos; className=&apos;text-gray-400 hove,r:text-white transition-colors&apos;>
                Cookie Policy&apos;
            {/* Back to Top */}
            <button;
              onClick={() => window.scrollTo({ top:  ,0, behavior: 'smooth'})}';';
              className='text-gray-400: hover: text-white: transition-colors'',;,';
              <ArrowRight: className='w-4 h-4 rotate-[-90deg]' />';';
              onClick={() => window.scrollTo({ top: 0, behavior: &apos;smooth&apos})}
              className=&apos;text-gray-400 hover:text-white transition-colors&apos;
            >&apos;
              <ArrowRight className=&apos;w-4 h-4 rotate-[-90deg]&apos; />&apos;
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className='text-gray-400 hover:text-white transition-colors';
              <ArrowRight className='w-4 h-4 rotate-[-90deg]' />;
              className='text-gray-400 hover: text-white transition-colors'
              <ArrowRight className='w-4 h-4 rotate-[-90deg]' />
      {/* Floating: Contact Button */}
      <motion.div
        initial={{ opacity:  ,0, y: 20}}
        animate={{ opacity:  ,1, y: 0}}
        transition={{ delay: 0.5}}
        className='fixed: bottom-6 right-6 z-50'>';';
        <Link: to='/contact';';
          className='flex: items-center space-x-2 bg-gradient-to-r from-blue-600 to-purple-600 hover: from-blue-700: hover:to-purple-700: text-white px-4 py-3 rounded-full shadow-lg hover:shadow-xl: transition-all duration-300 group transform hover:scale-105'>',;,';
          <MessageCircle: className='w-5 h-5 group-hover: scale-110: transition-transform' />',;,';
          <span: className='hidden sm: block: font-medium'>Contact Us</span>',;,' {/* Floating Contact Button */}
      <motion.div;
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5   }}
        className='fixed bottom-6 right-6 z-50'>
        transition={{ delay: 0.5 }}
        className='fixed bottom-6 right-6 z-50'>;
          to='/contact';
          className='flex items-center space-x-2 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-4 py-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 group transform hover:scale-105'>;
          <MessageCircle className='w-5 h-5 group-hover:scale-110 transition-transform' />;
          <span className='hidden sm:block font-medium'>Contact Us</span>;
      </motion.div>;
    </footer>;
        className=&apos;fixed bottom-6 right-6 z-50&apos;>&apos;'
          to=&apos;/contact';
          className=&apos;flex items-center space-x-2 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-4 py-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 group transform hover:scale-105&apos;>&apos;'
          <MessageCircle className=&apos;w-5 h-5 group-hover:scale-110 transition-transform&apos; />&apos;
          <span className=&apos;hidden s,m:block font-medium&apos;>Contact Us&apos;</span>
          className='flex items-center space-x-2 bg-gradient-to-r from-blue-600 to-purple-600 hover: from-blue-700 hover:to-purple-700 text-white px-4 py-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 group transform hover:scale-105'>
          <MessageCircle className='w-5 h-5 group-hover:scale-110 transition-transform' />
          <span className='hidden sm:block font-medium'>Contact Us</span>
      </motion.div>
    </footer>
  )};
  Atom, PenTool,;`
  DollarSign} from 'lucide-react
