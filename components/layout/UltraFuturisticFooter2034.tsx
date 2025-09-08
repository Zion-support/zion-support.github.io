

import React from 'react';


import Link from 'next/link';
import { motion } from 'framer-motion';
<<<<<<< HEAD
import { Rocket, Brain, Atom, Zap, Sparkles, Shield;
=======
import {


class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }
  
  static getDerivedStateFromError(error) {
    return { hasError: true };
  }
  
  componentDidCatch(error, errorInfo) {
    console.error('Error caught by boundary:', error, errorInfo);
  }
  
  render() {
    if (this.state.hasError) {
      return <div>Something went wrong.</div>;
    }
    
    return this.props.children;
  }
}
import React from 'react';
import Link from 'next / link';
import { motion } from 'framer-motion';

  Rocket
  Brain
  Atom
  Zap
  Sparkles
  Shield
  Phone
  Mail
  MapPin
  Globe
  ArrowRight
  Linkedin
  Twitter
  Facebook
  Instagram
  Youtube
  Github
  CheckCircle
  Award
  Star
  Crown
  Gem
  Infinity
  Heart
  ShieldCheck
  Users
  Briefcase
  BookOpen
  Target
  Microscope
  Cpu
  Database
  Cloud
  Lock
  Home
  Building
  DollarSign
  FileText
  MessageSquare
  MessageCircle
  Newspaper
  Handshake
  LifeBuoy
  Activity
  ShoppingCart
  UserCheck
  BarChart
  Palette
  Video
  LockIcon
  GlobeIcon
  CpuIcon;} from 'lucide-react';import {
  Rocket, Brain, Atom, Zap, Sparkles, Shield

import {

import {
  Rocket,
  Brain,
  Atom,
  Zap,
  Sparkles,
  Shield,
  Phone,
  Mail,
  MapPin,
  Globe,
  ArrowRight,
  Linkedin,
  Twitter,
  Facebook,
  Instagram,
  Youtube,
  Github,
  CheckCircle,
  Award,
  Star,
  Crown,
  Gem,
  Infinity,
  Heart,
  ShieldCheck,
  Users,
  Briefcase,
  BookOpen,
  Target,
  Microscope,
  Cpu,
  Database,
  Cloud,
  Lock,
  Home,
  Building,
  DollarSign,
  FileText,
  MessageSquare,
  MessageCircle,
  Newspaper,
  Handshake,
  LifeBuoy,
  Activity,
  ShoppingCart,
  UserCheck,
  BarChart,
  Palette,
  Video,
  LockIcon,

  GlobeIcon,;
  CpuIcon,;} from 'lucide-react';import {
  Rocket, Brain, Atom, Zap, Sparkles, Shield, ;


  Phone, Mail, MapPin, Globe, ArrowRight;
  Linkedin, Twitter, Facebook, Instagram, Youtube, Github;
  CheckCircle, Award, Star, Crown, Gem, Infinity;
  Heart, ShieldCheck, Users, Briefcase, BookOpen;
  Target, Microscope, Cpu, Database, Cloud, Lock;
  Home, Building, DollarSign, FileText, MessageSquare, MessageCircle, Newspaper, Handshake, LifeBuoy, Activity;


  { name: 'Status', href: '/status', icon: Activity }
];



const quickLinks = [;
  { name: 'Home', href: '/', icon: Home },;
  { name: 'Services', href: '/services', icon: Briefcase },;
  { name: 'Solutions', href: '/solutions', icon: Target },;
  { name: 'Pricing', href: '/pricing-2034', icon: DollarSign },;
  { name: 'Resources', href: '/resources', icon: BookOpen },;
  { name: 'Case Studies', href: '/case-studies', icon: FileText },;
  { name: 'Blog', href: '/blog', icon: MessageSquare },;
  { name: 'Contact', href: '/contact', icon: MessageCircle },];  { name: 'Contact', href: '/contact', icon: MessageCircle }
  { label: 'Happy Customers', value: '50K+', icon: Users },
  { label: 'Services Delivered', value: '200+', icon: Rocket },
  { label: 'Countries Served', value: '45+', icon: Globe },
  { label: 'Success Rate', value: '99.9%', icon: CheckCircle }
];
const companyLinks = [
  { name: 'About Us', href: '/about', icon: Users }
  { name: 'Careers', href: '/careers', icon: Briefcase }
  { name: 'News', href: '/news', icon: Newspaper }
  { name: 'Partners', href: '/partners', icon: Handshake }
  { name: 'Support', href: '/support', icon: LifeBuoy }
  { name: 'Status', href: '/status', icon: Activity }
];
const socialLinks = [
  {
    name: 'LinkedIn'
    href: 'https://linkedin.com/company/ziontechgroup'
    icon: Linkedin
  }
  { name: 'GitHub', href: 'https://github.com/Zion-Holdings', icon: Github }
  {
    name: 'Instagram'
    href: 'https://instagram.com/ziontechgroup'
    icon: Instagram
  }
  {
    name: 'YouTube'
    href: 'https://youtube.com/@ziontechgroup'
    icon: Youtube
  }
  { name: 'Twitter', href: 'https://twitter.com/ziontechgroup', icon: Twitter }
];
const certifications = [
  'ISO 27001 Certified'
  'SOC 2 Type II Compliant'
  'GDPR Compliant'
  'HIPAA Compliant'
  'PCI DSS Level 1'
  'FedRAMP Authorized'
  'Quantum Security Certified'
  'AI Ethics Compliant',];];
const socialLinks = [
  { name: 'LinkedIn', href: 'https://linkedin.com/company/ziontechgroup', icon: Linkedin }
  { name: 'GitHub', href: 'https://github.com/Zion-Holdings', icon: Github }
  { name: 'Instagram', href: 'https://instagram.com/ziontechgroup', icon: Instagram }
  { name: 'YouTube', href: 'https://youtube.com/@ziontechgroup', icon: Youtube }
  { name: 'Twitter', href: 'https://twitter.com/ziontechgroup', icon: Twitter }
];

const certifications = [;
  'ISO 27001 CertifiedSOC 2 Type II CompliantGDPR CompliantHIPAA CompliantPCI DSS Level 1FedRAMP AuthorizedQuantum Security CertifiedAI Ethics Compliant';
];

const stats = [;
  { label: 'Happy Customers', value: '50K+', icon: Users },;
  { label: 'Services Delivered', value: '200+', icon: Rocket },;
  { label: 'Countries Served', value: '45+', icon: Globe },;
  { label: 'Success Rate', value: '99 && 99.9%', icon: CheckCircle },];

export default function UltraFuturisticFooter2034() {;
  return (


export default function UltraFuturisticFooter2034() {;

  return (
    <footer className='bg-gradient-to-br from-black via-gray-900 to-black text-white relative overflow-hidden'>;
      {/* Animated Background Elements */}

      <div className='absolute inset-0 overflow-hidden'>;
        <div className='absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-cyan-500/20 to-blue-500/20 rounded-full blur-3xl animate-pulse'></div>;
        <div className='absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-tr from-purple-500/20 to-pink-500/20 rounded-full blur-3xl animate-pulse delay-1000'></div>;
        <div className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-r from-green-500/10 to-teal-500/10 rounded-full blur-3xl animate-pulse delay-500'></div>;
      </div>;
      <div className='relative z-10'>;

        {/* Main Footer Content */}
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16'>;
          <div className='grid grid-cols-1 lg:grid-cols-4 gap-12'>;
            {/* Company Info */}


            <div className='lg:col-span-1'>              <motion && motion.div      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">;
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-cyan-500/20 to-blue-500/20 rounded-full blur-3xl animate-pulse"></div>;
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-tr from-purple-500/20 to-pink-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>;
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-r from-green-500/10 to-teal-500/10 rounded-full blur-3xl animate-pulse delay-500"></div>;
      </div>;

      <div className="relative z-10">;
        {/* Main Footer Content */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">;
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-12">;
            {/* Company Info */}



            <div className="lg:col-span-1">
              <motion.div



            <div className="lg:col-span-1">
              <motion.div

export default function UltraFuturisticFooter2034() {
  return (
    <footer className='bg-gradient-to-br from-black via-gray-900 to-black text-white relative overflow-hidden'>  { label: 'Success Rate', value: '99.9%', icon: CheckCircle }
];
export default function UltraFuturisticFooter2034() {
  return (
    <footer className='bg-gradient-to-br from-black via-gray-900 to-black text-white relative overflow-hidden'>
      {/* Animated Background Elements */}
      <div className='absolute inset-0 overflow-hidden'>
        <div className='absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-cyan-500/20 to-blue-500/20 rounded-full blur-3xl animate-pulse'></div>
        <div className='absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-tr from-purple-500/20 to-pink-500/20 rounded-full blur-3xl animate-pulse delay-1000'></div>
        <div className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-r from-green-500/10 to-teal-500/10 rounded-full blur-3xl animate-pulse delay-500'></div>
      </div>
      <div className='relative z-10'>
        {/* Main Footer Content */}
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16'>
          <div className='grid grid-cols-1 lg:grid-cols-4 gap-12'>
            {/* Company Info */}
            <div className='lg:col-span-1'>              <motion.div      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-cyan-500/20 to-blue-500/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-tr from-purple-500/20 to-pink-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-r from-green-500/10 to-teal-500/10 rounded-full blur-3xl animate-pulse delay-500"></div>
      </div>
      <div className="relative z-10">
        {/* Main Footer Content */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-12">
            {/* Company Info */}
            <div className="lg:col-span-1">
              <motion.div





                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}


              >
                <div className='flex items-center space-x-3'>
                  <div className='relative'>
                    <div className='w-12 h-12 bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-500 rounded-xl flex items-center justify-center'>
                      <Rocket className='w-7 h-7 text-white' />
                    </div>
                    <div className='absolute -inset-1 bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-500 rounded-xl blur opacity-30'></div>
                  </div>
                  <div>
                    <h3 className='text-2xl font-bold bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent'>
                      Zion Tech Group
                    </h3>
                    <p className='text-sm text-gray-400'>
                      Future Technology Solutions
                    </p>
                  </div>
                </div>
                <p className='text-gray-300 leading-relaxed'>
                  Leading provider of cutting-edge AI, quantum computing, and
                  emerging technology solutions. Empowering businesses with
                  innovative tools for the future.
                </p>
                {/* Stats */}
                <div className='grid grid-cols-2 gap-4'>                  {stats.map((stat, index) => (              >
                <div className="flex items-center space-x-3">
                  <div className="relative">
                    <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-500 rounded-xl flex items-center justify-center">
                      <Rocket className="w-7 h-7 text-white" />
                    </div>
                    <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-500 rounded-xl blur opacity-30"></div>
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">
                      Zion Tech Group
                    </h3>
                    <p className="text-sm text-gray-400">Future Technology Solutions</p>
                  </div>
                </div>
                <p className="text-gray-300 leading-relaxed">
                  Leading provider of cutting-edge AI, quantum computing, and emerging technology solutions.
                  Empowering businesses with innovative tools for the future.
                </p>
                className='space-y-6'>;
                <div className='flex items-center space-x-3'>;
                  <div className='relative'>;
                    <div className='w-12 h-12 bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-500 rounded-xl flex items-center justify-center'>;
                      <Rocket className='w-7 h-7 text-white' />;
                    </div>;
                    <div className='absolute -inset-1 bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-500 rounded-xl blur opacity-30'></div>;
                  </div>;
                  <div>;
                    <h3 className='text-2xl font-bold bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent'>;
                      Zion Tech Group;
                    </h3>;
                    <p className='text-sm text-gray-400'>;
                      Future Technology Solutions;
                    </p>;
                  </div>;
                </div>;

                <p className='text-gray-300 leading-relaxed'>;
                  Leading provider of cutting-edge AI, quantum computing, and;
                  emerging technology solutions. Empowering businesses with;
                  innovative tools for the future.;
                </p>;

                {/* Stats */}

                  ))}

                {/* Contact Info */}
                <div className='space-y-3'>
                  <div className='flex items-center space-x-3 text-gray-300 hover:text-cyan-400 transition-colors'>
                    <Phone className='w-4 h-4' />
                    <span>{contactInfo.mobile}</span>
                  </div>
                  <div className='flex items-center space-x-3 text-gray-300 hover:text-blue-400 transition-colors'>
                    <Mail className='w-4 h-4' />
                    <span>{contactInfo.email}</span>
                  </div>
                  <div className='flex items-center space-x-3 text-gray-300 hover:text-purple-400 transition-colors'>
                    <MapPin className='w-4 h-4' />
                    <span className='text-sm'>{contactInfo.address}</span>                  </div>                    <span>{contactInfo.mobile}</span>
                <div className="grid grid-cols-2 gap-4">
                  {stats.map((stat, index) => (
                    <motion.div
                      key={stat.label}
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      viewport={{ once: true }}
                      className="text-center p-3 rounded-lg bg-white/5 backdrop-blur-sm border border-white/10"
                    >
                      <stat.icon className="w-6 h-6 text-cyan-400 mx-auto mb-2" />
                      <div className="text-lg font-bold text-white">{stat.value}</div>
                      <div className="text-xs text-gray-400">{stat.label}</div>
                    </motion.div>
                  ))}
                </div>

                {/* Contact Info */}
                <div className="space-y-3">
                  <div className="flex items-center space-x-3 text-gray-300 hover:text-cyan-400 transition-colors">
                    <Phone className="w-4 h-4" />
                <div className='space-y-3'>
                  <div className='flex items-center space-x-3 text-gray-300 hover:text-cyan-400 transition-colors'>
                    <Phone className='w-4 h-4' />

                    <span>{contactInfo.mobile}</span>
                  </div>
                  <div className="flex items-center space-x-3 text-gray-300 hover:text-blue-400 transition-colors">
                    <Mail className="w-4 h-4" />
                    <span>{contactInfo.email}</span>
                  </div>
                  <div className="flex items-center space-x-3 text-gray-300 hover:text-purple-400 transition-colors">
                    <MapPin className="w-4 h-4" />
                    <span className="text-sm">{contactInfo.address}</span>
                  </div>
                </div>
              </motion.div>
            </div>

                </div>;

                {/* Contact Info */}
                <div className='space-y-3'>;
                  <div className='flex items-center space-x-3 text-gray-300 hover:text-cyan-400 transition-colors'>;
                    <Phone className='w-4 h-4' />;
                    <span>{contactInfo && contactInfo.mobile}</span>;
                  </div>;
                  <div className='flex items-center space-x-3 text-gray-300 hover:text-blue-400 transition-colors'>;
                    <Mail className='w-4 h-4' />;
                    <span>{contactInfo && contactInfo.email}</span>;
                  </div>;
                  <div className='flex items-center space-x-3 text-gray-300 hover:text-purple-400 transition-colors'>;
                    <MapPin className='w-4 h-4' />;
                    <span className='text-sm'>{contactInfo && contactInfo.address}</span>                  </div>                    <span>{contactInfo && contactInfo.mobile}</span>;
                  </div>;
                  <div className="flex items-center space-x-3 text-gray-300 hover:text-blue-400 transition-colors">;
                    <Mail className="w-4 h-4" />;
                    <span>{contactInfo && contactInfo.email}</span>;
                  </div>;
                  <div className="flex items-center space-x-3 text-gray-300 hover:text-purple-400 transition-colors">;
                    <MapPin className="w-4 h-4" />;
                    <span className="text-sm">{contactInfo && contactInfo.address}</span>;
                  </div>;
                </div>;
              </motion && motion.div>;
            </div>;


            {/* Services */}
            <div className='lg:col-span-2'>              <motion && motion.div            <div className="lg:col-span-2">;
              <motion&& motion.div


            {/* Services */}
            <div className="lg:col-span-2">
              <motion.div

            {/* Services */}
            <div className='lg:col-span-2'>              <motion.div            <div className="lg:col-span-2">
              <motion.div


            {/* Services */}
            <div className='lg:col-span-2'>              <motion && motion.div            <div className="lg:col-span-2">;
              <motion&& motion.div
            {/* Services */}
            <div className="lg:col-span-2">
            {/* Services */}
            <div className='lg:col-span-2'>              <motion.div            <div className="lg:col-span-2">
              <motion.div


                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}


                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      viewport={{ once: true }}


                            </span>
                          </Link>
                      className="space-y-4"
                    >
                      className='space-y-4'

                    >
                      <div className='flex items-center space-x-2'>
                        <category.icon className='w-5 h-5 text-cyan-400' />
                        <h4 className='font-semibold text-white'>
                          {category.title}
                        </h4>
                      </div>
                      <div className='space-y-2'>
                        {category.services.map(service => (
                          <Link
                            key={service.name}
                            href={service.href}
                            className='flex items-center justify-between group hover:bg-white/5 rounded-lg p-2 transition-all duration-200'
                          >
                            <span className='text-gray-300 group-hover:text-cyan-400 transition-colors text-sm'>
                              {service.name}
                            </span>
                            <span className='text-xs text-gray-500 group-hover:text-cyan-400 transition-colors'>                              {service.price}                    >
                      <div className="flex items-center space-x-2">
                        <category.icon className="w-5 h-5 text-cyan-400" />
                        <h4 className="font-semibold text-white">{category.title}</h4>
                      </div>
                      <div className="space-y-2">
                        {category.services.map((service) => (
                          <Link
                            key={service.name}
                            href={service.href}
                            className="flex items-center justify-between group hover:bg-white/5 rounded-lg p-2 transition-all duration-200"><span className="text-gray-300 group-hover:text-cyan-400 transition-colors text-sm">
                              {service.name}
                            </span>
                            <span className="text-xs text-gray-500 group-hover:text-cyan-400 transition-colors">
                              {service.price}
                            </span>
                          </Link>
                      className='space-y-4'>;
                      <div className='flex items-center space-x-2'>;
                        <category && category.icon className='w-5 h-5 text-cyan-400' />;
                        <h4 className='font-semibold text-white'>;
                          {category && category.title}
                        </h4>;
                      </div>;
                      <div className='space-y-2'>;
                        {category && category.services.map(service => (;
                          <Link
                            key={service && service.name}
                            href={service && service.href}
                            className='flex items-center justify-between group hover:bg-white/5 rounded-lg p-2 transition-all duration-200'>;
                            <span className='text-gray-300 group-hover:text-cyan-400 transition-colors text-sm'>;
                              {service && service.name}
                            </span>;
                            <span className='text-xs text-gray-500 group-hover:text-cyan-400 transition-colors'>                              {service && service.price}                    >;
                      <div className="flex items-center space-x-2">;
                        <category && category.icon className="w-5 h-5 text-cyan-400" />;
                        <h4 className="font-semibold text-white">{category && category.title}</h4>;
                      </div>;
                      <div className="space-y-2">;
                        {category && category.services.map((service) => (;
                          <Link
                            key={service && service.name}
                            href={service && service.href}
                            className="flex items-center justify-between group hover:bg-white/5 rounded-lg p-2 transition-all duration-200">;
                            <span className="text-gray-300 group-hover:text-cyan-400 transition-colors text-sm">;
                              {service && service.name}
                            </span>;
                            <span className="text-xs text-gray-500 group-hover:text-cyan-400 transition-colors">;
                              {service && service.price}
                            </span>;
                          </Link>;
                            key={service.name}
                            href={service.href}
                            className="flex items - center justify - between group hover:bg - white / 5 rounded - lg p - 2 transition-all duration-200";
                          >;
                            <span className="text - gray - 300 group - hover:text - cyan - 400 transition-colors text-sm">;
                              {service.name}
                            </span>;
                            <span className="text - xs text - gray - 500 group - hover:text - cyan-400 transition-colors">;
                              {service.price}
                        ))}
                      </div>
                    </motion.div>
                  ))}

                </div>;
              </motion && motion.div>;
            </div>;



            {/* Quick Links & Social */}


            {/* Quick Links & Social */}
            <div className="lg:col-span-1">
              <motion.div

            {/* Quick Links & Social */}
            <div className='lg:col-span-1'>              <motion.div            <div className="lg:col-span-1">
              <motion.div

            {/* Quick Links & Social */}
            <div className='lg:col-span-1'>              <motion.div

              <motion.div


            {/* Quick Links & Social */}
            <div className='lg:col-span-1'>              <motion && motion.div            <div className="lg:col-span-1">;
              <motion&& motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                viewport={{ once: true }}

              >
                className="space-y-8"
                className='space-y-8'
              >
                {/* Quick Links */}
                <div>
                  <h4 className='text-lg font-semibold text-white mb-4'>
                    Quick Links
                  </h4>
                  <div className='space-y-2'>
                    {quickLinks.map(link => (
                      <Link


                    ))}

                  </div>;
                </div>;


                {/* Company Links */}


                    ))}

                  </div>;
                </div>;


                {/* Company Links */}
                <div>
                  <h4 className='text-lg font-semibold text-white mb-4'>
                    Company
                  </h4>
                  <div className='space-y-2'>
                    {companyLinks.map(link => (
                      <Link
                        key={link.name}
                        href={link.href}
                        className='flex items-center space-x-2 text-gray-300 hover:text-cyan-400 transition-colors group'
                      >
                        <link.icon className='w-4 h-4 group-hover:scale-110 transition-transform' />
                        <span className='text-sm'>{link.name}</span>                      </Link>                      <Link
                        key={link.name}
                        href={link.href}
                        className="flex items-center space-x-2 text-gray-300 hover:text-cyan-400 transition-colors group"><link.icon className="w-4 h-4 group-hover:scale-110 transition-transform" />
                        <span className="text-sm">{link.name}</span>
                        <link.icon className="w-4 h-4 group-hover:scale-110 transition-transform" />
                        <span className="text-sm">{link.name}</span>
                      </Link>
                    ))}
                  </div>
                </div>
                {/* Social Links */}

                        className='w-10 h-10 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-lg flex items-center justify-center text-white hover:from-cyan-600 hover:to-blue-600 transition-all duration-200 hover:scale-110'
                      >
                        <social.icon className='w-5 h-5' />                      </Link>                      <Link
                        key={social.name}
                        href={social.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-10 h-10 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-lg flex items-center justify-center text-white hover:from-cyan-600 hover:to-blue-600 transition-all duration-200 hover:scale-110"
                      >
                        <social.icon className="w-5 h-5" />
                      </Link>



                {/* Company Links */}
                <div>
                  <h4 className='text-lg font-semibold text-white mb-4'>
                    Company
                  </h4>
                  <div className='space-y-2'>
                    {companyLinks.map(link => (
                      <Link
                        key={link.name}
                        href={link.href}
                        className='flex items-center space-x-2 text-gray-300 hover:text-cyan-400 transition-colors group'
                      >
                        <link.icon className='w-4 h-4 group-hover:scale-110 transition-transform' />

                        <span className='text-sm'>{link.name}</span>                      </Link>
          {/* Certifications */}
          <motion&& motion.div
          {/* Certifications */}
          <motion&& motion.div
                        <social.icon className='w-5 h-5' />                      </Link>
                      >
                        <social.icon className="w-5 h-5" />
                      </Link>
                        <social.icon className='w-5 h-5' />                      </Link>

                      </Link>

                    ))}
                  </div>
                </div>


                {/* Social Links */}


                        className='w-10 h-10 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-lg flex items-center justify-center text-white hover:from-cyan-600 hover:to-blue-600 transition-all duration-200 hover:scale-110'
                      >

                        <social.icon className='w-5 h-5' />                      </Link>

                      </Link>


                    ))}

                  </div>;
                </div>;
              </motion && motion.div>;
            </div>;
          </div>;





          {/* Certifications */}
          <motion&& motion.div
              </motion.div>
            </div>
          </div>
          {/* Certifications */}
          <motion.div
          <motion&& motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            viewport={{ once: true }}


            className='mt-16 pt-8 border-t border-white/10'
          >
            <h4 className='text-lg font-semibold text-white mb-6 text-center'>
              Certifications & Compliance
            </h4>
            <div className='grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-4'>              {certifications.map((cert, index) => (            className="mt-16 pt-8 border-t border-white/10"
          >
            <h4 className="text-lg font-semibold text-white mb-6 text-center">Certifications & Compliance</h4>
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-4">
                <motion.div
                            </span>;
                          </Link>))}
                      </div>;
                    </motion.div>))}
                </div>;
              </motion.div>;
            </div>;
            {/* Quick Links & Social */}
            <div className='lg:col - span - 1'>              <motion.div            <div className="lg:col - span - 1">;
              <motion.div;
                initial={{ opacity: 0, coordinate_y: 20 }}
                whileInView={{ opacity: 1, coordinate_y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                viewport={{ once: true }}
                className='space - y-8';
              >;
                {/* Quick Links */}
                <div>;
                  <h4 className='text - lg font - semibold text - white mb - 4'>;
                    Quick Links;
                  </h4>;
                  <div className='space - y-2'>;
                    {quick_links.map (link => (
                      <Link;
                        key={link.name}
                        href={link.href}
                        className='flex items - center space - x-2 text - gray - 300 hover:text - cyan - 400 transition - colors group';
                      >;
                        <link.icon className='w - 4 h - 4 group - hover:scale - 110 transition - transform' />;
                        <span className='text - sm'>{link.name}</span>                      </Link>              >;
                {/* Quick Links */}
                <div>;
                  <h4 className="text - lg font - semibold text - white mb - 4">Quick Links</h4>;
                  <div className="space - y-2">;
                    {quick_links.map ((link) => (
                      <Link;
                        key={link.name}
                        href={link.href}
                        className="flex items - center space - x-2 text - gray - 300 hover:text - cyan - 400 transition - colors group";
                      >;
                        <link.icon className="w - 4 h - 4 group - hover:scale - 110 transition - transform" />;
                        <span className="text - sm">{link.name}</span>;
                      </Link>))}
                  </div>;
                </div>;
                {/* Company Links */}
                <div>;
                  <h4 className='text - lg font - semibold text - white mb - 4'>;
                    Company;
                  </h4>;
                  <div className='space - y-2'>;
                    {company_links.map (link => (
                      <Link;
                        key={link.name}
                        href={link.href}
                        className='flex items - center space - x-2 text - gray - 300 hover:text - cyan - 400 transition - colors group';
                      >;
                        <link.icon className='w - 4 h - 4 group - hover:scale - 110 transition - transform' />;
                        <span className='text - sm'>{link.name}</span>                      </Link>                      <Link;
                        key={link.name}
                        href={link.href}
                        className="flex items - center space - x-2 text - gray - 300 hover:text - cyan - 400 transition - colors group";
                      >;
                        <link.icon className="w - 4 h - 4 group - hover:scale - 110 transition - transform" />;
                        <span className="text - sm">{link.name}</span>;
                      </Link>))}
                  </div>;
                </div>;
                {/* Social Links */}
                <div>;
                  <h4 className='text - lg font - semibold text - white mb - 4'>;
                    Follow Us;
                  </h4>;
                  <div className='flex space - x-4'>;
                    {social_links.map (social => (
                      <Link;
                        key={social.name}
                        href={social.href}
                        target='_blank';
                        rel='noopener noreferrer';
                        className='w - 10 h - 10 bg - gradient - to - r from - cyan - 500 to - blue - 500 rounded - lg flex items - center justify - center text - white hover:from - cyan - 600 hover:to - blue - 600 transition - all duration - 200 hover:scale - 110';
                      >;
                        <social.icon className='w - 5 h - 5' />                      </Link>                      <Link;
                        key={social.name}
                        href={social.href}
                        target="_blank";
                        rel="noopener noreferrer";
                        className="w - 10 h - 10 bg - gradient - to - r from - cyan - 500 to - blue - 500 rounded - lg flex items - center justify - center text - white hover:from - cyan - 600 hover:to - blue - 600 transition - all duration - 200 hover:scale - 110";
                      >;
                        <social.icon className="w - 5 h - 5" />;
                      </Link>))}
                  </div>;
                </div>;
              </motion.div>;
            </div>;
          </div>;
          {/* Certifications */}
          <motion.div;
            initial={{ opacity: 0, coordinate_y: 20 }}
            whileInView={{ opacity: 1, coordinate_y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            viewport={{ once: true }}
            className='mt - 16 pt - 8 border - t border - white / 10';
          >;
            <h4 className='text - lg font - semibold text - white mb - 6 text - center'>;
              Certifications & Compliance;
            </h4>;
            <div className='grid grid - cols - 2 md:grid - cols - 4 lg:grid - cols - 8 gap - 4'>              {certifications.map ((cert, index) => (            className="mt - 16 pt - 8 border - t border - white / 10";
          >;
            <h4 className="text - lg font - semibold text - white mb - 6 text - center">Certifications & Compliance</h4>;
            <div className="grid grid - cols - 2 md:grid - cols - 4 lg:grid - cols - 8 gap - 4">;
                <motion.div;
                  key={cert}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}


                  className='flex items-center justify-center p-3 rounded-lg bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/10 transition-all duration-200'
                >
                  <CheckCircle className='w-4 h-4 text-green-400 mr-2' />
                  <span className='text-xs text-gray-300 text-center'>
                    {cert}

                  </span>                </motion.div>

                </motion.div>


              ))}

            </div>;
          </motion && motion.div>;
        </div>;


        {/* Bottom Bar */}


        {/* Bottom Bar */}
        <div className='border-t border-white/10 bg-black/50 backdrop-blur-sm'>
          <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6'>
            <div className='flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0'>

              <div className='flex items-center space-x-6 text-sm text-gray-400'>

                <span>&copy; 2024 Zion Tech Group. All rights reserved.</span>
                  className='flex items-center justify-center p-3 rounded-lg bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/10 transition-all duration-200'
                >
                  <CheckCircle className='w-4 h-4 text-green-400 mr-2' />
                  <span className='text-xs text-gray-300 text-center'>
                    {cert}
                  </span>                </motion.div>                  className="flex items-center justify-center p-3 rounded-lg bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/10 transition-all duration-200"
                >
                  <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                  <span className="text-xs text-gray-300 text-center">{cert}</span>
                  </span>                </motion.div>

                </motion.div>

              ))}
            </div>
          </motion.div>
        </div>

              ))}
            </div>
          </motion.div>
        </div>

              ))}
        {/* Bottom Bar */}

        {/* Bottom Bar */}
        <div className='border-t border-white/10 bg-black/50 backdrop-blur-sm'>
          <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6'>
            <div className='flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0'>
              <div className='flex items-center space-x-6 text-sm text-gray-400'>
                <span>&copy; 2024 Zion Tech Group. All rights reserved.</span>
        <div className='border-t border-white/10 bg-black/50 backdrop-blur-sm'>;
          <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6'>;
            <div className='flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0'>;
              <div className='flex items-center space-x-6 text-sm text-gray-400'>;
                <span>&copy; 2024 Zion Tech Group. All rights reserved.</span>;
                <Link
                  href='/privacy'
                  className='hover:text-cyan-400 transition-colors'
                >
                  Privacy Policy
                </Link>
                <Link
                  href='/terms'


            </div>;
          </div>;
        </div>;
      </div>;


            </div>
          </div>
        </div>
      </div>
    </footer>
  )}
