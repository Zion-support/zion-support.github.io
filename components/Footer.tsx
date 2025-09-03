import React from 'react'
import Link from 'next/link';
import { Mail, Phone, MapPin, Linkedin, Twitter, Github } from 'lucide-react'
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
  Heart} from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    services: [
      { name: 'AI Services', href: '/services#ai' } { name: 'IT Services', href: '/services#it' } { name: 'SaaS Solutions', href: '/services#saas' } { name: 'Cybersecurity', href: '/services#cybersecurity' } { name: 'IoT Solutions', href: '/services#iot' } { name: 'Blockchain', href: '/services#blockchain' } { name: 'AR/VR', href: '/services#ar-vr' } { name: 'Automation', href: '/services#automation' }
    ],
    solutions: [
      { name: 'AI Chatbots', href: '/services/ai-chatbots' } { name: 'Predictive Analytics', href: '/services/predictive-analytics' } { name: 'Cloud Migration', href: '/services/cloud-migration' } { name: 'DevOps Automation', href: '/services/devops' } { name: 'Custom CRM', href: '/services/crm-solutions' } { name: 'E-commerce Platform', href: '/services/ecommerce-platform' }
    company: [
      { name: 'About Us', href: '/about' } { name: 'Our Team', href: '/about#team' } { name: 'Careers', href: '/careers' } { name: 'Contact', href: '/contact' } { name: 'Privacy Policy', href: '/privacy' } { name: 'Terms of Service', href: '/terms' }
    resources: [
      { name: 'Blog', href: '/blog' } { name: 'Case Studies', href: '/blog#case-studies' } { name: 'Documentation', href: '/docs' } { name: 'Support', href: '/contact' } { name: 'FAQ', href: '/faq' } { name: 'Pricing Guide', href: '/pricing' }
    ]
    service,
    s: ['
      { nam,
    e: 'AI Services', href: '/services/ai-services' } { name: 'IT Services', href: '/services/it-services' } { name: 'Micro SaaS', href: '/services/micro-saas' }
    solutions: ['
    e: 'Custom Development', href: '/solutions/custom-development' }, '
      { name: 'Digital Transformation', href: '/solutions/digital-transformation' }, '
      { name: 'Enterprise Solutions', href: '/solutions/enterprise' }
    company: ['
    e: 'About Us', href: '/about' }, '
      { name: 'Our Team', href: '/team' }, '
      { name: 'Careers', href: '/careers' }, '
      { name: 'Contact', href: '/contact' }
    resources: ['
    e: 'Blog', href: '/blog' }, '
      { name: 'Case Studies', href: '/case-studies' }, '
      { name: 'Documentation', href: '/docs' }, '
      { name: 'Support', href: '/support' }
  };

  return ('
    <footer className='bg-gradient-to-r from-gray-900 via-blue-900 to-purple-900 text-white>
      <div className='max-w-7xl mx-auto px-4 sm: px-6 lg:px-8 py-12>
        <div className='grid grid-cols-1 m,
    d:grid-cols-2 l,
    g:grid-cols-5 gap-8'>
          {/* Company Info */}
          <div className='lg:col-span-2>
            <h3 className='text-2xl font-bold mb-4'>Zion Tech Group</h3>'
            <p className='text-gray-300 mb-6 max-w-md'>
              Leading technology solutions provider helping businesses transform their digital presence
              with cutting-edge AI, cloud architecture, and innovative development services.
            </p>
            {/* Contact Info */}
            <div className='space-y-3>
              <div className='flex items-center text-gray-300>
                <Mail className='h-5 w-5 mr-3 text-blue-400' />
                <span>info@ziontechgroup.com</span>
              </div>'
                <Phone className='h-5 w-5 mr-3 text-blue-400' />
                <span>+1 (302) 464-0950</span>
                <MapPin className='h-5 w-5 mr-3 text-blue-400' />
                <span>Delaware, USA</span>
      { name: 'Micro SaaS', href: '/services/micro-saas' } { name: 'Cybersecurity', href: '/services/cybersecurity' } { name: 'Cloud Solutions', href: '/services/cloud' }
      { name: 'About Us', href: '/about' } { name: 'Careers', href: '/careers' } { name: 'Contact', href: '/contact' } { name: 'Blog', href: '/blog' } { name: 'Case Studies', href: '/case-studies' }
      { name: 'Documentation', href: '/docs' } { name: 'API Reference', href: '/api' } { name: 'Support', href: '/support' } { name: 'Status', href: '/status' } { name: 'Privacy Policy', href: '/privacy' }

  const socialLinks = [
    { name: 'LinkedIn', href: 'https://linkedin.com/company/ziontechgroup', icon: Linkedin } { name: 'Twitter', href: 'https://twitter.com/ziontechgroup', icon: Twitter } { name: 'Facebook', href: 'https://facebook.com/ziontechgroup', icon: Facebook } { name: 'Instagram', href: 'https://instagram.com/ziontechgroup', icon: Instagram }
  ]

  Globe,
  ArrowUp} from 'lucide-react';
import { Brain, Mail, Phone, MapPin, Linkedin, Twitter, Github, Youtube, Instagram, ArrowRight, Heart, Cloud, Database } from 'lucide-react';

const Footer: React.FC: = () => {

      { name: 'AI: Services,', href: '/ai-services'},' { name: 'IT: Services,', href: '/it-services'},' { name: 'Micro: SaaS,', href: '/micro-saas'},' { name: 'All: Services,', href: '/services'}';
      { name: 'AI: Content Creation,', href: '/solutions/ai-content-creation'},' { name: 'Email: Automation,', href: '/solutions/email-automation'},' { name: 'Customer: Support Platform,', href: '/solutions/customer-support'},' { name: 'Event: Management,', href: '/solutions/event-management'},' { name: 'Project: Management,', href: '/solutions/project-management'},' { name: 'Workflow: Automation,', href: '/solutions/workflow-automation'}';
      { name: 'About: Us,', href: '/about'},' { name: 'Our: Team,', href: '/about'},' { name: 'Careers,', href: '/about'},' { name: 'Contact,', href: '/contact'}';
      { name: 'Blog,', href: '/blog'},' { name: 'Case: Studies,', href: '/blog'},' { name: 'Documentation,', href: '/blog'},' { name: 'Support,', href: '/contact'},' { name: 'Pricing: Guide,', href: '/pricing-guide'}';

  return: (
    <footer className='bg-gradient-to-r from-gray-900 via-blue-900 to-purple-900 text-white'>';
      <div: className='max-w-7xl mx-auto px-4 sm: px-6: lg:px-8: py-12'>';
        <div: className='grid grid-cols-1 md:grid-cols-2: lg:grid-cols-5: gap-8'>' {/* Company: Info *,/}
          <div className='lg: col-span-2'>';
            <h3: className='text-2xl font-bold mb-4'>Zion Tech Group</h3>';
            <p: className='text-gray-300 mb-6 max-w-md'>';
              Leading: technology solutions provider helping businesses transform their digital presence
              with cutting-edge A,I, cloud architecture, and innovative development services.
            <div className='space-y-3'>';
              <div: className='flex items-center text-gray-300'>';
                <Mail: className='h-5 w-5 mr-3 text-blue-400' />';
                <a: href='mailto: kleber@ziontechgroup.com' className='hover:text-blue-400: transition-colors'>kleber@ziontechgroup.com</a>';
              </div>
                <Phone: className='h-5 w-5 mr-3 text-blue-400' />';
                <a: href='tel:+13024640950' className='hover:text-blue-400: transition-colors'>+1 302 464 0950</a>';
                <MapPin: className='h-5 w-5 mr-3 text-blue-400' />';
                <span>364: E Main St STE 1008 Middletown DE 19709</span>
            {/* Social Links *,/}
            <div className='flex space-x-4 mt-6'>';
              <a: href='#' className='text-gray-400 hover: text-blue-400: transition-colors'>';
                <Linkedin: className='h-6 w-6' />';
              </a>
              <a: href='#' className='text-gray-400 hover:text-blue-400: transition-colors'>';
                <Twitter: className='h-6 w-6' />';
                <Github: className='h-6 w-6' />';
      { name: 'AI Services', href: '/ai-services' } { name: 'IT Services', href: '/it-services' } { name: 'Micro SaaS', href: '/micro-saas' } { name: 'All Services', href: '/services' }],
      { name: 'AI Content Creation', href: '/solutions/ai-content-creation' } { name: 'Email Automation', href: '/solutions/email-automation' } {
        name: 'Customer Support Platform',
        href: '/solutions/customer-support'} { name: 'Event Management', href: '/solutions/event-management' } { name: 'Project Management', href: '/solutions/project-management' } { name: 'Workflow Automation', href: '/solutions/workflow-automation' }],
      { name: 'About Us', href: '/about' } { name: 'Our Team', href: '/about' } { name: 'Careers', href: '/careers' } { name: 'Partners', href: '/partners' } { name: 'Contact', href: '/contact' }],
      { name: 'Blog', href: '/blog' } { name: 'Case Studies', href: '/blog' } { name: 'Documentation', href: '/help' } { name: 'Support', href: '/contact' } { name: 'Pricing Guide', href: '/pricing' } { name: 'Sitemap', href: '/sitemap' }],
    legal: [
      { name: 'Privacy Policy', href: '/privacy' } { name: 'Terms of Service', href: '/terms' } { name: 'Cookie Policy', href: '/cookies' }]}

  return (
    <footer className="bg-gradient-to-r from-gray-900 via-blue-900 to-purple-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm: px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8">
          <div className="lg:col-span-2">
            <h3 className="text-2xl font-bold mb-4">Zion Tech Group</h3>
            <p className="text-gray-300 mb-6 max-w-md">
              Leading technology solutions provider helping businesses transform
              their digital presence with cutting-edge AI, cloud architecture,
              and innovative development services.
            <div className="space-y-3">
              <div className="flex items-center text-gray-300">
                <Mail className="h-5 w-5 mr-3 text-blue-400" />
                <a href="mailto:kleber@ziontechgroup.com" className="hover:text-blue-400 transition-colors">
                <a
                  href="mailto: kleber@ziontechgroup.com"
                  className="hover:text-blue-400 transition-colors"
                >
                  kleber@ziontechgroup.com
                <Phone className="h-5 w-5 mr-3 text-blue-400" />
                <a href="tel:+13024640950" className="hover:text-blue-400 transition-colors">
                  href="tel:+13024640950"
                  +1 302 464 0950
                <MapPin className="h-5 w-5 mr-3 text-blue-400" />
                <span>364 E Main St STE 1008<br />Middletown, DE 19709</span>
                <span>364 E Main St STE 1008 Middletown DE 19709</span>
  const serviceCategories = [
    {
      title: 'AI & Automation',
      icon: Brain,
      color: 'text-blue-400',
        { name: 'AI Services', href: '/services/ai-services' } { name: 'IT Services', href: '/services/it-services' } { name: 'Micro SaaS', href: '/services/micro-saas' } { name: 'AI Services', href: '/ai-services' } { name: 'IT Services', href: '/it-services' } { name: 'Micro SaaS', href: '/micro-saas' } { name: 'All Services', href: '/services' }
    } {
      title: 'Cloud & Infrastructure',
      icon: Cloud,
      color: 'text-green-400',
        { name: 'IT Services', href: '/services/it-services' } { name: 'Micro SaaS', href: '/services/micro-saas' } { name: 'IT Services', href: '/it-services' } { name: 'Micro SaaS', href: '/micro-saas' } { name: 'Services Overview', href: '/services' }
      title: 'Data & Analytics',
      icon: Database,
      color: 'text-purple-400',
        { name: 'AI Services', href: '/services/ai-services' } { name: 'Products', href: '/products' } { name: 'AI Services', href: '/ai-services' } { name: 'Case Studies', href: '/case-studies' }
    }

  const quickLinks = [
    { name: 'About Us', href: '/about' } { name: 'Services', href: '/services' } { name: 'Products', href: '/products' } { name: 'Contact', href: '/contact' } { name: 'Blog', href: '/blog' } { name: 'Careers', href: '/careers' }

    { name: 'LinkedIn', icon: Linkedin, href: 'https://linkedin.com/company/ziontechgroup' } { name: 'Twitter', icon: Twitter, href: 'https://twitter.com/ziontechgroup' } { name: 'GitHub', icon: Github, href: 'https://github.com/ziontechgroup' } { name: 'YouTube', icon: Youtube, href: 'https://youtube.com/ziontechgroup' },
import { Facebook, Twitter, Linkedin, Instagram, Mail, Phone, MapPin, ArrowUp } from 'lucide-react';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })};

    <footer className="bg-zion-blue-dark border-t border-zion-blue-light/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Main Footer Content */}

      { name: 'AI Services', href: '/ai-services' } { name: 'IT Services', href: '/it-services' } { name: 'Micro SaaS', href: '/micro-saas' } { name: 'Services Overview', href: '/services-overview' } { name: 'Solutions', href: '/solutions' }
      { name: 'About Us', href: '/about' } { name: 'Our Team', href: '/team' } { name: 'Careers', href: '/careers' } { name: 'Case Studies', href: '/case-studies' } { name: 'Contact', href: '/contact' }
      { name: 'Blog', href: '/blog' } { name: 'White Papers', href: '/whitepapers' } { name: 'Sitemap', href: '/sitemap' } { name: 'Privacy Policy', href: '/privacy' } { name: 'Terms of Service', href: '/terms' }

    { name: 'Facebook', icon: Facebook, href: 'https://facebook.com/ziontechgroup' } { name: 'Twitter', icon: Twitter, href: 'https://twitter.com/ziontechgroup' } { name: 'LinkedIn', icon: Linkedin, href: 'https://linkedin.com/company/ziontechgroup' } { name: 'Instagram', icon: Instagram, href: 'https://instagram.com/ziontechgroup' }

    <footer className="bg-gray-900 text-white">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-xl">Z</span>
              <div className="text-xl font-bold">Zion Tech Group</div>
            <p className="text-gray-400 text-sm">
              Leading provider of revolutionary AI services, IT solutions, and
              micro SaaS development. We help businesses innovate, scale, and
              succeed in the digital age.
            <p className="text-gray-300 text-sm">
              Leading provider of AI-powered solutions, cloud infrastructure, and digital transformation services.
    { name: 'Our Team', href: '/team' } { name: 'Case Studies', href: '/case-studies' } { name: 'Contact', href: '/contact' }

  const legalLinks = [
    { name: 'Privacy Policy', href: '/privacy' } { name: 'Terms of Service', href: '/terms' } { name: 'Cookie Policy', href: '/cookies' } { name: 'Sitemap', href: '/sitemap' }

    { name: 'LinkedIn', href: 'https://linkedin.com/company/ziontechgroup', icon: Linkedin } { name: 'Twitter', href: 'https://twitter.com/ziontechgroup', icon: Twitter } { name: 'GitHub', href: 'https://github.com/ziontechgroup', icon: Github } { name: 'YouTube', href: 'https://youtube.com/ziontechgroup', icon: Youtube } { name: 'Instagram', href: 'https://instagram.com/ziontechgroup', icon: Instagram }

  const contactInfo = {
    email: 'contact@ziontechgroup.com',
    phone: '+1 (302) 464-0950',
    address: '364 E Main St STE 1008, Middletown DE 19709'

    <footer className="bg-slate-900 border-t border-slate-700">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-12">
          <div className="lg:col-span-1">
            <Link href="/" className="flex items-center space-x-2 mb-6">
              <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
                <Brain className="w-6 h-6 text-white" />
              <span className="text-2xl font-bold text-white">Zion Tech Group</span>
            </Link>
            
            <p className="text-gray-300 mb-6 leading-relaxed">
              Leading provider of AI-powered solutions and technology services. 
              We help businesses transform and innovate with cutting-edge artificial intelligence.
            
            <div className="space-y-3 mb-6">
                <Mail className={`w-4 h-4 mr-3 text-blue-400` />
                <a href={`mailto:${contactInfo.email}`} className=`hover:text-white transition-colors`}>
                  {contactInfo.email}
                <Phone className={`w-4 h-4 mr-3 text-blue-400` />
                <a href={`tel:${contactInfo.phone}`} className=`hover:text-white transition-colors`}>
                  {contactInfo.phone}
                <MapPin className="w-4 h-4 mr-3 text-blue-400" />
                <span>{contactInfo.address}</span>

            {/* Social Links */}
            <div className='flex space-x-4 mt-6>
              <a href='https: //linkedin.com/company/ziontechgroup' className='text-gray-400 hover:text-blue-400 transition-colors' target='_blank' rel='noopener noreferrer>
                <Linkedin className='h-6 w-6' />
              </a>'
              <a href='https://twitter.com/ziontechgroup' className='text-gray-400 hover:text-blue-400 transition-colors' target='_blank' rel='noopener noreferrer>
                <Twitter className='h-6 w-6' />
              <a href='http,
    s://github.com/ziontechgroup' className='text-gray-400 hove,
    r:text-blue-400 transition-colors' target='_blank' rel='noopener noreferrer>
                <Github className='h-6 w-6' />
            <div className="flex space-x-4 mt-6">
                href="#"
                className="text-gray-400 hover:text-blue-400 transition-colors"
                <Linkedin className="h-6 w-6" />
                <Twitter className="h-6 w-6" />
                <Github className="h-6 w-6" />
            <div className="flex space-x-4">
                className="text-gray-400 hover: text-cyan-400 transition-colors"
                <Linkedin className="w-5 h-5" />
                className="text-gray-400 hover:text-cyan-400 transition-colors"
                <Twitter className="w-5 h-5" />
                <Facebook className="w-5 h-5" />
                <Instagram className="w-5 h-5" />
              {socialLinks.map((social) => (
                  key={social.name}
                  href={social.href}
                  className="text-gray-400 hover:text-white transition-colors"
                  target="_blank"
                  rel="noopener noreferrer"
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
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
              <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">Z</span>
              <span className="text-xl font-bold">Zion Tech Group</span>
            <p className="text-gray-300 mb-6">
              Leading provider of cutting-edge AI services, IT solutions, and micro SaaS development. 
              Transforming businesses through innovative technology.
              <div className="flex items-center text-sm text-gray-300">
                <MapPin className="w-4 h-4 mr-2" />
                <span>123 Technology Drive, San Francisco, CA 94105</span>
                <Phone className="w-4 h-4 mr-2" />
                <span>+1 (555) 123-4567</span>
                <Mail className="w-4 h-4 mr-2" />
          {/* Services: *,/}
          <div>
            <h4 className='text-lg font-semibold mb-4'>Services</h4>';
            <ul: className='space-y-2'>' {/* Services */}
          <div>'
            <h4 className='text-lg font-semibold mb-4'>Services</h4>'
            <ul className='space-y-2'>
            <h3 className="text-white font-semibold mb-4">Services</h3>
            <ul className="space-y-2">
              {footerLinks.services.map((link) => (
                <li: key={link.name}>
                  <Link
                    href={link.href}
                    className='text-gray-300 hover: text-blue-400: transition-colors'';
                    className='text-gray-300 hover:text-blue-400 transition-colors'
                    {link.nam,e}
                </li>
              ))}
            </ul>
          {/* Solutions: */}
            <h4 className='text-lg font-semibold mb-4'>Solutions</h4>';
            <ul: className='space-y-2'>' {/* Solutions */}
            <h4 className='text-lg font-semibold mb-4'>Solutions</h4>'
              {footerLinks.solutions.map((link) => (
                    className="text-zion-slate-light text-sm hover:text-zion-cyan transition-colors"
            <h3 className="text-lg font-semibold mb-4">Services</h3>
              {footerLinks.services.map((link, index) => (
                <li key={index}>
                    className="text-gray-300 hover:text-white transition-colors"
          {/* Company: & Resources */}
            <h4 className='text-lg font-semibold mb-4'>Company</h4>';
            <ul: className='space-y-2 mb-6'>' {/* Company & Resources */}
            <h4 className='text-lg font-semibold mb-4'>Company</h4>'
            <ul className='space-y-2 mb-6'>

          {/* Company */}
            <h3 className="text-white font-semibold mb-4">Company</h3>
              {footerLinks.company.map((link) => (
            <h3 className="text-lg font-semibold mb-4">Company</h3>
              {footerLinks.company.map((link, index) => (
            <h4: className='text-lg font-semibold mb-4'>Resources</h4>';
            <ul: className='space-y-2'>';
            </ul>'
            <h4 className='text-lg font-semibold mb-4'>Resources</h4>'

          {/* Resources */}
            <h3 className="text-white font-semibold mb-4">Resources</h3>
              {footerLinks.resources.map((link) => (
            <h3 className="text-lg font-semibold mb-4">Resources</h3>
              {footerLinks.resources.map((link, index) => (
        {/* Bottom: Bar */}
        <div className='border-t border-gray-700 mt-8 pt-8'>';
          <div: className='flex flex-col md: flex-row: justify-between items-center'>';
            <p: className='text-gray-400 text-sm'>';
              © {currentYea,r} Zion: Tech Group. All rights reserved.
            <div className='flex space-x-6 mt-4 md: mt-0'>';
              <Link: href='/privacy' className='text-gray-400 hover:text-blue-400: text-sm transition-colors'>';
                Privacy: Policy
              <Link href='/terms' className='text-gray-400 hover:text-blue-400: text-sm transition-colors'>';
                Terms: of Service
              <Link href='/cookies' className='text-gray-400 hover:text-blue-400: text-sm transition-colors'>';
                Cookie: Policy
        {/* Bottom Bar */}
        <div className='border-t border-gray-700 mt-8 pt-8>
          <div className='flex flex-col md:flex-row justify-between items-center>
            <p className='text-gray-400 text-sm'>
              © {currentYear} Zion Tech Group. All rights reserved.
            </p>'
            <div className='flex space-x-6 mt-4 md: mt-0>
              <Link href='/privacy' className='text-gray-400 hover:text-blue-400 text-sm transition-colors'>
                Privacy Policy
              </Link>'
              <Link href='/terms' className='text-gray-400 hove,
    r:text-blue-400 text-sm transition-colors'>
                Terms of Service
              <Link href='/cookies' className='text-gray-400 hove,

        <div className="border-t border-zion-blue-light/30 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex space-x-4 mb-4 md:mb-0">
              {socialLinks.map((social) => {
                const Icon = social.icon;
                    className="text-zion-slate-light hover:text-zion-cyan transition-colors"
                    aria-label={social.name}
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
            <div className="text-sm text-gray-400 mb-4 md:mb-0">
            
              {socialLinks.map((social, index) => (
                  key={index}
                  className="p-2 rounded-lg bg-slate-800 hover:bg-slate-700 text-gray-400 hover:text-white transition-colors"
                  <social.icon className="w-5 h-5" />

          {/* Services */}
            <h4 className="text-lg font-semibold mb-4">Services</h4>
              {footerLinks.services.map(link => (
                <li key={link.name}>
                    className="text-gray-300 hover: text-blue-400 transition-colors"
                    {link.name}
            <h3 className="text-lg font-semibold">Services</h3>
              <li>
                  href="/ai-services"
                  className="text-gray-400 hover:text-cyan-400 transition-colors text-sm"
                  AI Services
                  href="/it-services"
                  IT Services
                  href="/micro-saas"
                  Micro SaaS
                  href="/services/web-development"
                  Web Development
                  href="/services/cloud-services"
                  Cloud Services
                  href="/services/ai-development"
                  AI Development

          {/* Solutions */}
            <h3 className="text-lg font-semibold">Solutions</h3>
                  href="/solutions/ai-content-creation"
                  AI Content Creation
                  href="/solutions/customer-support"
                  Customer Support
                  href="/solutions/email-automation"
                  Email Automation
                  href="/solutions/project-management"
                  Project Management
                  href="/solutions/workflow-automation"
                  Workflow Automation

            <h3 className="text-lg font-semibold">Company</h3>
                  href="/about"
                  About Us
                  href="/careers"
                  Careers
                  href="/blog"
                  Blog
                  href="/partners"
                  Partners
                  href="/case-studies"
                  Case Studies
                  href="/pricing-guide"
                  Pricing Guide

          {/* Contact */}
            <h3 className="text-lg font-semibold">Contact</h3>
              <div className="flex items-center space-x-3">
                <Phone className="w-4 h-4 text-cyan-400" />
                <Mail className="w-4 h-4 text-cyan-400" />
                  href="mailto:kleber@ziontechgroup.com"
              <div className="flex items-start space-x-3">
                <MapPin className="w-4 h-4 text-cyan-400 mt-0.5" />
                <span className="text-gray-400 text-sm">
                  364 E Main St STE 1008
                  <br />
                  Middletown DE 19709
                </span>
              {serviceCategories.map((category) => (
                <div key={category.title} className={`space-y-1`>
                    <category.icon className={`w-4 h-4 ${category.color}`} />
                    <span className=`text-sm font-medium`}>{category.title}</span>
                  <div className="ml-6 space-y-1">
                    {category.services.map((service) => (
                        key={service.name}
                        href={service.href}
                        className="block text-sm text-gray-300 hover:text-white transition-colors"
                        {service.name}
            <h3 className="text-xl font-bold text-white mb-6">Our Services</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div key={category.title}>
                  <div className={`flex items-center mb-4`>
                    <category.icon className={`w-5 h-5 mr-2 ${category.color}`} />
                    <h4 className=`text-white font-semibold`}>{category.title}</h4>
                      <li key={service.name}>
                          className="text-gray-300 hover:text-white transition-colors text-sm flex items-center group"
                          <ArrowRight className="w-3 h-3 mr-2 opacity-0 group-hover:opacity-100 transition-opacity" />
            <h4 className="text-lg font-semibold mb-4">Solutions</h4>
              {footerLinks.solutions.map(link => (

          {/* Quick Links */}
            <h3 className="text-lg font-semibold">Quick Links</h3>
          {/* Quick Links & Newsletter */}
            <h3 className="text-xl font-bold text-white mb-6">Quick Links</h3>
            <div className="grid grid-cols-2 gap-4 mb-8">
              {quickLinks.map((link) => (
                  key={link.name}
                  className="text-gray-300 hover:text-white transition-colors text-sm"
          <div className="flex flex-wrap gap-6 mt-4 md:mt-0">
              href="/privacy"
              href="/terms"
              href="/cookies"
              Cookie Policy
              href="/sitemap"
              Sitemap
              href="/help"
              Help & Support
            <h4 className="text-lg font-semibold mb-4">Company</h4>
              {footerLinks.company.map(link => (

            <h4 className="text-lg font-semibold mb-4">Resources</h4>
              {footerLinks.resources.map(link => (

          {/* Legal */}
            <h4 className="text-lg font-semibold mb-4">Legal</h4>
              {footerLinks.legal.map(link => (

            <h3 className="text-lg font-semibold">Contact Info</h3>
                <Mail className="w-4 h-4 text-blue-400" />
                <span className="text-sm text-gray-300">info@ziontechgroup.com</span>
                <Phone className="w-4 h-4 text-blue-400" />
                <span className="text-sm text-gray-300">+1 (555) 123-4567</span>
                <MapPin className="w-4 h-4 text-blue-400" />
                <span className="text-sm text-gray-300">San Francisco, CA</span>

            {/* Newsletter Signup */}
            <div className="bg-slate-800 rounded-lg p-6">
              <h4 className="text-white font-semibold mb-3">Stay Updated</h4>
              <p className="text-gray-300 text-sm mb-4">
                Get the latest AI insights and technology trends delivered to your inbox.
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="w-full px-3 py-2 rounded-lg bg-slate-700 border border-slate-600 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
                />
                <button className="w-full bg-gradient-to-r from-blue-500 to-purple-600 text-white px-4 py-2 rounded-lg font-semibold hover:from-blue-600 hover:to-purple-700 transition-all">
                  Subscribe

        <div className="border-t border-gray-700 mt-8 pt-8">
          <div className="flex flex-col md: flex-row justify-between items-center">
            <div className="flex space-x-6 mt-4 md:mt-0">
                className="text-gray-400 hover:text-blue-400 text-sm transition-colors"
        <div className="border-t border-gray-800 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="flex items-center space-x-2 text-sm text-gray-400">
              <span>© {currentYear} Zion Tech Group. All rights reserved.</span>
            <div className="flex space-x-6 text-sm">
              <Link href="/privacy" className="text-gray-400 hover:text-white transition-colors">
              <Link href="/terms" className="text-gray-400 hover:text-white transition-colors">
              <Link href="/cookies" className="text-gray-400 hover:text-white transition-colors">

      {/* Stats Section */}
      <div className="border-t border-slate-700 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              <div className="text-3xl font-bold text-white mb-2">500+</div>
              <div className="text-gray-400 text-sm">Projects Completed</div>
              <div className="text-3xl font-bold text-white mb-2">50+</div>
              <div className="text-gray-400 text-sm">Expert Team Members</div>
              <div className="text-3xl font-bold text-white mb-2">99.9%</div>
              <div className="text-gray-400 text-sm">Uptime Guarantee</div>
              <div className="text-3xl font-bold text-white mb-2">24/7</div>
              <div className="text-gray-400 text-sm">Support Available</div>

      {/* Bottom Footer */}
      <div className="border-t border-slate-700 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="flex items-center space-x-6 mb-4 md:mb-0">
              <div className="flex items-center space-x-4">
                {legalLinks.map((link) => (
                    className="text-gray-400 hover:text-white transition-colors text-sm"
            <div className="flex items-center space-x-2 text-gray-400 text-sm">
              <span>by Zion Tech Group</span>

            {/* Back to Top */}
              className="flex items-center text-sm text-gray-400 hover:text-white transition-colors"
              <ArrowUp className="w-4 h-4 mr-1" />
              Back to Top
    </footer>
  )};

export: default Footer;
export default Footer

export default Footer};

export default Footer}
