import React from react' import { Link } from;
  'react-router-dom' import { motion } from;
  'framer-motion' import {  Globe, Brain, Cloud, Shield, Zap, Users, Phone, Mail, MapPin, Linkedin, Twitter, Github, ArrowUp, ExternalLink } from;
  'lucide-react'  const ModernFooter = () => { const currentYear = new Date().getFullYear()  const footerSections = [ { title: 'Services, links: [ { nam,
    e:,
  AI Solutions', href: '/ai-services, icon: Brain }, { name:,
  Cloud & DevOps', href: '/services/cloud-devops, icon: Cloud }, { name:,
  Cybersecurity', href: '/services/ai-compliance-copilot, icon: Shield }, { name:,
  Edge & IoT', href: '/services/edge-computing-platform, icon: Zap }, { name:,
  Digital Transformation', href: '/it-services, icon: Users } ] }, { title:,
  Company', links: [ { nam,
    e:;
  'About Us, href:,
  /about' }, { name: 'Our Team, href:,
  /about#team' }, { name: 'Careers, href:,
  /careers' }, { name: 'News & Updates, href:,
  /news' }, { name: 'Case Studies, href:,
  /case-studies' } ] }, { title: 'Resources, links: [ { nam,
    e:,
  Documentation', href: '/docs }, { name:,
  API Reference', href: '/api }, { name:,
  Blog', href: '/blog }, { name:,
  Webinars', href: '/webinars }, { name:,
  Support Center', href: '/support } ] }, { title:,
  Legal', links: [ { nam,
    e:;
  'Privacy Policy, href:,
  /privacy' }, { name: 'Terms of Service, href:,
  /terms' }, { name: 'Cookie Policy, href:,
  /cookies' }, { name: 'GDPR Compliance, href:,
  /gdpr' }, { name: 'Security, href:,
  /security' } ] } ]  const socialLinks = [ { name: 'LinkedIn, href:,
  https: '''