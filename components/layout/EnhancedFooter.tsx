

import React from "react";
import Link from "next/link";
import { Mail, Phone, MapPin, Linkedin, Twitter, Github } from "lucide-react";




const EnhancedFooter: React.FC = () => {;
  const currentYear = new Date().getFullYear();


  const company = null;
  ];
  const resources = null;
  ];
  const socialLinks = null;
const EnhancedFooter: React.FC = () => {const currentYear = new Date().getFullYear();
import React from 'react';
import { motion } from 'framer-motion';
import {
  Phone, Mail, MapPin, Globe
  Twitter, Linkedin, Facebook, Instagram
  ArrowRight, Rocket, Brain, Cpu, Shield
  Star, Users, TrendingUp, Zap
} from 'lucide-react'
const contactInfo = {
  mobile: '+1 302 464 0950'
  email: 'kleber@ziontechgroup.com'
  address: '364 E Main St STE 1008 Middletown DE 19709'
  website: 'https://ziontechgroup.com'
}
const serviceCategories = [
  {
    title: 'Next-Generation AI'
    services: [
      { name: 'AI Multimodal Fusion', href: '/ai-multimodal-fusion-platform' }
      { name: 'AI Autonomous Decision Engine', href: '/ai-autonomous-decision-engine' }
      { name: 'AI Emotional Intelligence', href: '/ai-emotional-intelligence-platform' }
      { name: 'AI Quantum Hybrid Computing', href: '/ai-quantum-hybrid-computing' }
    ]
class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }
  
  static getDerivedStateFromError(error) {
    return { hasError: true };
  }
  {
    title: 'Innovative SaaS'
    services: [
      { name: 'AI Brand Personality', href: '/ai-brand-personality-generator' }
      { name: 'Virtual Event Holograms', href: '/virtual-event-hologram-platform' }
      { name: 'AI Meeting Transcriber', href: '/ai-meeting-transcriber-pro' }
      { name: 'AI Mental Health Companion', href: '/ai-mental-health-companion' }
    ]
  }
]
const companyLinks = [
  { name: 'About Us', href: '/about' }
  { name: 'Careers', href: '/careers' }
  { name: 'News', href: '/news' }
  { name: 'Case Studies', href: '/case-studies' }
  { name: 'Blog', href: '/blog' }
  { name: 'Resources', href: '/resources' }
]
const supportLinks = [
  { name: 'Contact Support', href: '/contact' }
  { name: 'Documentation', href: '/docs' }
  { name: 'API Reference', href: '/api' }
  { name: 'Status Page', href: '/status' }
  { name: 'Security', href: '/security' }
  { name: 'Privacy Policy', href: '/privacy' }
]
const socialLinks = [
  { name: 'LinkedIn', href: 'https://www.linkedin.com/company/zion-tech-group', icon: Linkedin }
  { name: 'Instagram', href: 'https://www.instagram.com/ziontechgroup', icon: Instagram }
  { name: 'GitHub', href: 'https://github.com/Zion-Holdings', icon: Globe }]
export default function EnhancedFooter() {
  const currentYear = new Date().getFullYear()
  const services = [
    { name: 'AI Services', href: '/ai-services' }
    { name: 'IT Services', href: '/it-services' }
    { name: 'Blockchain Solutions', href: '/blockchain-solutions' }
    { name: 'Micro SaaS', href: '/micro-saas' }
    { name: 'Security', href: '/security' }
    { name: 'Case Studies', href: '/case-studies' }
  ];
  const company = [
    { name: 'About Us', href: '/about' }
    { name: 'Our Team', href: '/team' }
    { name: 'Careers', href: '/careers' }
    { name: 'News', href: '/news' }
    { name: 'Partners', href: '/partners' }
  ];
  const resources = [
    { name: 'Blog', href: '/blog' }
    { name: 'Documentation', href: '/docs' }
    { name: 'Support', href: '/support' }
    { name: 'FAQ', href: '/faq' }
  ];
  const socialLinks = [
    { name: 'LinkedIn', href: 'https://linkedin.com/company/zion-tech-group', icon: Linkedin }
    { name: 'Twitter', href: 'https://twitter.com/ziontechgroup', icon: Twitter }
    { name: 'GitHub', href: 'https://github.com/zion-tech-group', icon: Github }
  ];


const EnhancedFooter: React.FC = () => {
  const currentYear = new Date().getFullYear();


  return (
    <div className="border-t border-gray-200 dark:border-gray-800 text-sm py-6">
      <div className="container mx-auto px-4 flex items-center justify-between">
        <p>© {new Date().getFullYear()} Zion Tech Solutions</p>
        <div className="opacity-70 flex items-center gap-4">
          <a className="underline hover:no-underline" href="/constitution">Constitution</a>
          <span>All rights reserved.</span>
        </div>
      </div>
    </div>
  );
}