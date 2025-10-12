'use client';
import React from 'react';
import { Phone, Mail, MapPin, Clock, Zap, Brain, Cloud, Users, ArrowRight, Shield, Database, Workflow, Link as LinkIcon, Linkedin, Twitter, Github } from 'lucide-react';

const Footer: React.F C = () => {
  const current Year = new Date().get Full Year();
  
  const ai Services = [
    { name: 'A I Analytics & B I', url: '/ai-analytics', description: 'Business intelligence' },
    { name: 'A I Automation', url: '/ai-automation', description: 'Process automation' },
    { name: 'A I Chatbots & N LP', url: '/ai-chatbot-builder', description: 'Conversational A I' },
    { name: 'A I Content Generation', url: '/ai-content-generation', description: 'Automated content' },
    { name: 'A I Cybersecurity', url: '/ai-cybersecurity', description: 'A I security' },
    { name: 'A I C RM', url: '/ai-crm', description: 'Smart C RM' },
    { name: 'A I Data Analytics', url: '/ai-data-analytics', description: 'Data insights' },
    { name: 'A I Healthcare', url: '/ai-healthcare', description: 'Medical A I' },
    { name: 'A I Computer Vision', url: '/ai-computer-vision', description: 'Image analysis' },
    { name: 'A I Voice Solutions', url: '/ai-voice-solutions', description: 'Speech recognition' },
    { name: 'A I Financial Services', url: '/ai-financial-services', description: 'Fintech A I' },
    { name: 'A I E-commerce Solutions', url: '/ai-ecommerce-solutions', description: 'E-commerce A I' }
  ];

  const it Services = [
    { name: 'Cloud Migration', url: '/cloud-migration', description: 'Cloud solutions' },
    { name: 'Dev Ops & C I/C D', url: '/devops', description: 'Development operations' },
    { name: 'Cybersecurity', url: '/cybersecurity', description: 'Security solutions' },
    { name: 'Database Management', url: '/database', description: 'Database services' },
    { name: 'A PI Development', url: '/api', description: 'A PI solutions' },
    { name: 'Mobile App Development', url: '/mobile-development', description: 'Mobile apps' },
    { name: 'Web Development', url: '/web-development', description: 'Web solutions' },
    { name: 'I T Consulting', url: '/it-consulting', description: 'I T advisory' },
    { name: 'System Integration', url: '/system-integration', description: 'System solutions' },
    { name: 'Data Management', url: '/data-management', description: 'Data solutions' },
    { name: 'Network Security', url: '/network-security', description: 'Network protection' },
    { name: 'I T Support', url: '/it-support', description: 'Technical support' }
  ];

  const company = [
    { name: 'About Us', url: '/about' },
    { name: 'Our Team', url: '/team' },
    { name: 'Careers', url: '/careers' },
    { name: 'News & Blog', url: '/news' },
    { name: 'Case Studies', url: '/case-studies' },
    { name: 'Partners', url: '/partners' },
    { name: 'Investors', url: '/investors' },
    { name: 'Contact', url: '/contact' }
  ];

  const resources = [
    { name: 'Documentation', url: '/docs' },
    { name: 'A PI Reference', url: '/api-docs' },
    { name: 'Tutorials', url: '/tutorials' },
    { name: 'White Papers', url: '/white-papers' },
    { name: 'Webinars', url: '/webinars' },
    { name: 'Support Center', url: '/support' },
    { name: 'Community', url: '/community' },
    { name: 'Status Page', url: '/status' }
  ];

  const social Links = [
    { name: 'Twitter', url: 'https://twitter.com/ziontechgroup', icon: <T witter class Name="w-5 h-5" /> },
    { name: 'Linked In', url: 'https://linkedin.com/company/ziontechgroup', icon: <L inkedin class Name="w-5 h-5" /> },
    { name: 'Git Hub', url: 'https://github.com/ziontechgroup', icon: <G ithub class Name="w-5 h-5" /> }
  ];

  return (
    <f ooter class Name="b g-gray-900 text-white">
      <d iv class Name="m ax-w-7-xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <d iv class Name="t ext-center">
          <h3 c lass Name="t ext-2-xl font-bold mb-4">Zion Tech Group</h3>

const Footer: React.F C = () => {
  const current Year = new Date().get Full Year();

  return (
    <f ooter class Name="b g-gray-900 text-white">
      <d iv class Name="m ax-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <d iv class Name="t ext-center">
          <h3 c lass Name="t ext-2xl font-bold mb-4">Zion Tech Group</h3>
          <p c lass Name="t ext-gray-400 mb-4">
            Advanced A I & I T Solutions
          </p>
          <p c lass Name="t ext-gray-500 text-sm">
            © {current Year} Zion Tech Group. All rights reserved.
          </p>
        </d iv>
      </d iv>
    </f ooter>
  );
};

export default Footer;
