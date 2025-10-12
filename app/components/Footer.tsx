import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { Phone, Mail, MapPin, Clock, Zap, Brain, Cloud, Users, ArrowRight, Shield, Database, Workflow, Link as LinkIcon, Linkedin, Twitter, Github } from 'lucide-react';
  const currentYear = new Date().getFullYear();
  const aiServices = [
    { name: 'AI Analytics & BI', url: '/ai-analytics', description: 'Business intelligence' },
    { name: 'AI Automation', url: '/ai-automation', description: 'Process automation' },
    { name: 'AI Chatbots & NLP', url: '/ai-chatbot-builder', description: 'Conversational AI' },
    { name: 'AI Content Generation', url: '/ai-content-generation', description: 'Automated content' },
    { name: 'AI Cybersecurity', url: '/ai-cybersecurity', description: 'AI security' },
    { name: 'AI CRM', url: '/ai-crm', description: 'Smart CRM' },
    { name: 'AI Data Analytics', url: '/ai-data-analytics', description: 'Data insights' },
    { name: 'AI Healthcare', url: '/ai-healthcare', description: 'Medical AI' },
    { name: 'AI Computer Vision', url: '/ai-computer-vision', description: 'Image analysis' },
    { name: 'AI Voice Solutions', url: '/ai-voice-solutions', description: 'Speech recognition' },
    { name: 'AI Financial Services', url: '/ai-financial-services', description: 'Fintech AI' },
    { name: 'AI E-commerce Solutions', url: '/ai-ecommerce-solutions', description: 'E-commerce AI' }
  ];
  const itServices = [
    { name: 'Cloud Migration', url: '/cloud-migration', description: 'Cloud solutions' },
    { name: 'DevOps & CI/CD', url: '/devops', description: 'Development operations' },
    { name: 'Cybersecurity', url: '/cybersecurity', description: 'Security solutions' },
    { name: 'Database Management', url: '/database', description: 'Database services' },
    { name: 'API Development', url: '/api', description: 'API solutions' },
    { name: 'Mobile App Development', url: '/mobile-development', description: 'Mobile apps' },
    { name: 'Web Development', url: '/web-development', description: 'Web solutions' },
    { name: 'IT Consulting', url: '/it-consulting', description: 'IT advisory' },
    { name: 'System Integration', url: '/system-integration', description: 'System solutions' },
    { name: 'Data Management', url: '/data-management', description: 'Data solutions' },
    { name: 'Network Security', url: '/network-security', description: 'Network protection' },
    { name: 'IT Support', url: '/it-support', description: 'Technical support' }
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
    { name: 'API Reference', url: '/api-docs' },
    { name: 'Tutorials', url: '/tutorials' },
    { name: 'White Papers', url: '/white-papers' },
    { name: 'Webinars', url: '/webinars' },
    { name: 'Support Center', url: '/support' },
    { name: 'Community', url: '/community' },
    { name: 'Status Page', url: '/status' }
  ];
  const socialLinks = [
    { name: 'Twitter', url: 'https://twitter.com/ziontechgroup', icon: <Twitter className="w-5 h-5" /&gt; },</Twitter></Twitter>
    { name: 'LinkedIn', url: 'https://linkedin.com/company/ziontechgroup', icon: <Linkedin className="w-5 h-5" /&gt; },</Linkedin></Linkedin>
    { name: 'GitHub', url: 'https://github.com/ziontechgroup', icon: <Github className="w-5 h-5" /&gt; }</Github></Github>
  ];
  return (
          <h3 className="text-2-xl font-bold mb-4">Zion Tech Group</h3>
  const currentYear = new Date().getFullYear();
  return (
          <h3 className="text-2xl font-bold mb-4">Zion Tech Group</h3>
            Advanced AI & IT Solutions;
            © {currentYear} Zion Tech Group. All rights reserved.
export default function Footer() {
  return (
    <>
      <Helmet>
        <title>Footer - Zion Tech Group<div></title>
        <meta name="description" content="Professional footer by Zion Tech Group. Transform your business with our expert solutions." /></div>
      </Helmet></div>
      <div><div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20"></div></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center"></div></div></div>
          <h1 className="text-4xl font-bold text-white mb-6">Footer</h1>
          <p className="text-lg text-gray-300 mb-8">Professional footer coming soon.</p>
          <Link
            to="/contact"
            className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center mx-auto w-fit"
          >
            Contact Us
            <div><ArrowRight className="w-5 h-5 ml-2" />
          </Link></div>
        </div></div>
      </div></div>
    </>
  );
}