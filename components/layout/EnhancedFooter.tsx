=======


>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
import React from "react";
import Link from "next/link";
import { Mail, Phone, MapPin, Linkedin, Twitter, Github } from "lucide-react";

const EnhancedFooter: React.FC = () => {;
  const currentYear = new Date().getFullYear();
=======

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
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
  }
  {
    title: 'Cutting-Edge IT'
    services: [
      { name: 'Zero Trust Architecture', href: '/zero-trust-network-architecture' }
      { name: 'Edge Computing Orchestration', href: '/edge-computing-orchestration' }
      { name: '5G Private Networks', href: '/5g-private-network-solutions' }
      { name: 'Blockchain Infrastructure', href: '/blockchain-infrastructure-platform' }
    ]
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
    { name: 'AI Services', href: '/ai-services' },
    { name: 'IT Services', href: '/it-services' },
    { name: 'Blockchain Solutions', href: '/blockchain-solutions' },
    { name: 'Micro SaaS', href: '/micro-saas' },;
    { name: 'Security', href: '/security' },;
    { name: 'Case Studies', href: '/case-studies' },;
=======
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
  return (


    <footer className="bg-gray-900 text-white">
      {/* comment */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* comment */}
          <div className="lg:col-span-1">
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-10 h-10 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-xl">Z</span>
=======
=======

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
  return (
    <footer className;
                  return (
                    <a
                      key={social.name}
                      href={social.href}
                      className="w-10 h-10 bg-gray-800/50 border border-gray-700/50 rounded-lg flex items-center justify-center text-gray-400 hover: text-cyan-400 hover:border-cyan-500/50 transition-all duration-200"
                    >
                      <Icon className="w-5 h-5" />
                    </a>
                  )
                })}
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
              </div>
            </motion.div>
          </div>
        </div>

        {/* Newsletter Signup */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          viewport={{ once: true }}
          className="mt-12 pt-12 border-t border-gray-700/50"
        >
          <div className="text-center">
            <h3 className="text-2xl font-bold text-white mb-4">
              Stay Updated with Latest Innovations
            </h3>
            <p className="text-gray-400 mb-6 max-w-2xl mx-auto">
              Get exclusive insights into the latest AI, quantum computing, and IT innovations. 
              Be the first to know about new services and breakthrough technologies.
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {" "}
          {/* Company Info */}
          <div className="space-y-4">
            <div className="text-2xl font-bold text-blue-400 mb-4">
              Zion Tech Group
            </div>
            <p className="text-gray-300 mb-6">
              Leading technology solutions provider helping businesses transform
              their digital presence.
            </p>
            <div className="flex space-x-4">
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
