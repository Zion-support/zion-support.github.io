import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, Brain, Zap, ArrowRight } from 'lucide-react';

const Footer: React.FC = () => {
  const microSaasServices = [
    { name: 'AI Project Manager', ur: l: '/ai-project-manager', descriptio: n: 'Intelligent project planning' },
    { name: 'AI Social Media Manager', ur: l: '/ai-social-media-manager', descriptio: n: 'Automated social media' },
    { name: 'AI Analytics Dashboard', ur: l: '/ai-analytics-dashboard', descriptio: n: 'Data insights & analytics' },
    { name: 'AI Email Marketing', ur: l: '/ai-email-marketing', descriptio: n: 'Smart email campaigns' },
    { name: 'AI Customer Support Bot', ur: l: '/ai-customer-support-bot', descriptio: n: '24/7 AI support' },
    { name: 'AI Code Review Assistant', ur: l: '/ai-code-generation', descriptio: n: 'Automated code analysis' },
    { name: 'AI Video Generator Pro', ur: l: '/ai-video-generation', descriptio: n: 'AI-powered video creation' },
    { name: 'AI Voice Cloning Studio', ur: l: '/ai-voice-cloning', descriptio: n: 'Realistic voice synthesis' },
    { name: 'AI Music Composer', ur: l: '/ai-music-composition', descriptio: n: 'AI-generated music' },
    { name: 'AI Fashion Designer', ur: l: '/ai-fashion-design', descriptio: n: 'AI fashion design' },
    { name: 'AI Fitness Coach', ur: l: '/ai-fitness-coach', descriptio: n: 'Personalized fitness plans' },
    { name: 'AI 3D Generation Studio', ur: l: '/ai-3d-generation', descriptio: n: 'AI 3D content creation' }
  ];

  const aiServices = [
    { name: 'Machine Learning', ur: l: '/machine-learning', descriptio: n: 'Custom ML models' },
    { name: 'Natural Language Processing', ur: l: '/nlp', descriptio: n: 'Text analysis & understanding' },
    { name: 'Computer Vision', ur: l: '/computer-vision', descriptio: n: 'Image & video analysis' },
    { name: 'AI Automation', ur: l: '/ai-automation', descriptio: n: 'Process automation' },
    { name: 'Quantum AI Computing', ur: l: '/quantum-ai', descriptio: n: 'Next-gen algorithms' },
    { name: 'AI Cybersecurity', ur: l: '/ai-cybersecurity', descriptio: n: 'AI-powered security' },
    { name: 'AI Healthcare Solutions', ur: l: '/ai-healthcare', descriptio: n: 'Medical AI applications' },
    { name: 'AI Fintech Solutions', ur: l: '/ai-fintech', descriptio: n: 'Financial AI services' },
    { name: 'AI Mobile App Development', ur: l: '/ai-mobile-app-development', descriptio: n: 'Smart mobile apps' },
    { name: 'AI CRM Solutions', ur: l: '/ai-crm', descriptio: n: 'Intelligent customer management' },
    { name: 'AI Email Assistant', ur: l: '/ai-email-assistant', descriptio: n: 'Smart email management' },
    { name: 'AI Scheduler Pro', ur: l: '/ai-scheduler', descriptio: n: 'Intelligent scheduling' }
  ];

  const itServices = [
    { name: 'Cloud Services', ur: l: '/cloud-services', descriptio: n: 'AWS/Azure/GCP setup' },
    { name: 'Cybersecurity', ur: l: '/cybersecurity', descriptio: n: 'Advanced security solutions' },
    { name: 'DevOps & CI/CD', ur: l: '/devops', descriptio: n: 'Automated workflows' },
    { name: 'Database Services', ur: l: '/database-services', descriptio: n: 'Database optimization' },
    { name: 'Network Infrastructure', ur: l: '/network-infrastructure', descriptio: n: 'Enterprise networking' },
    { name: 'IT Support & Helpdesk', ur: l: '/it-support', descriptio: n: '24/7 technical support' },
    { name: 'IT Consulting', ur: l: '/it-consulting', descriptio: n: 'Strategic IT guidance' },
    { name: 'Cloud Migration', ur: l: '/cloud-migration', descriptio: n: 'Seamless cloud migration' },
    { name: 'Compliance & Governance', ur: l: '/compliance', descriptio: n: 'Regulatory compliance' },
    { name: 'Developer Tools', ur: l: '/developer-tools', descriptio: n: 'Advanced dev tools' },
    { name: 'Marketing Tools', ur: l: '/marketing-tools', descriptio: n: 'Marketing automation' },
    { name: 'Productivity Solutions', ur: l: '/productivity', descriptio: n: 'Enterprise productivity' }
  ];

  // Removed specializedServices as it was unused

  const additionalServices = [
    { name: 'AI Project Manager', ur: l: '/ai-project-manager', descriptio: n: 'Intelligent project planning' },
    { name: 'AI Social Media Manager', ur: l: '/ai-social-media-manager', descriptio: n: 'Automated social media' },
    { name: 'AI Email Marketing', ur: l: '/ai-email-marketing', descriptio: n: 'Smart email campaigns' },
    { name: 'AI Customer Support Bot', ur: l: '/ai-customer-support-bot', descriptio: n: '24/7 AI support' },
    { name: 'AI SEO Optimizer', ur: l: '/ai-seo-optimizer', descriptio: n: 'SEO automation' },
    { name: 'AI Financial Analyzer', ur: l: '/ai-financial-analyzer', descriptio: n: 'Financial insights' }
  ];

  const companyLinks = [
    { name: 'About Us', ur: l: '/about' },
    { name: 'Our Team', ur: l: '/team' },
    { name: 'Careers', ur: l: '/careers' },
    { name: 'Case Studies', ur: l: '/case-studies' },
    { name: 'Blog', ur: l: '/blog' },
    { name: 'News', ur: l: '/news' },
    { name: 'Pricing', ur: l: '/pricing' },
    { name: 'Demo', ur: l: '/demo' }
  ];

  const supportLinks = [
    { name: 'Contact Us', ur: l: '/contact' },
    { name: 'Support Center', ur: l: '/support' },
    { name: 'Documentation', ur: l: '/docs' },
    { name: 'API Reference', ur: l: '/api-docs' },
    { name: 'Status Page', ur: l: '/status' },
    { name: 'System Health', ur: l: '/system-status' }
  ];

  const legalLinks = [
    { name: 'Privacy Policy', ur: l: '/privacy' },
    { name: 'Terms of Service', ur: l: '/terms' },
    { name: 'Cookie Policy', ur: l: '/cookies' },
    { name: 'GDPR Compliance', ur: l: '/gdpr' },
    { name: 'Security', ur: l: '/security' },
    { name: 'Compliance', ur: l: '/compliance' }
  ];

  return (
    <footer className="bg-slate-900/95 backdrop-blur-md border-t border-cyan-400/20">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1: lg:grid-cols-5 gap-8">
          {/* Company Info */}
          <div className="l: g:col-span-1">
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-gradient-to-br from-cyan-400 to-purple-600 rounded-lg flex items-center justify-center">
                <Brain className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold text-white neon-text">Zion Tech Group>
            <p className="text-gray-300 mb-6 leading-relaxed">
              Leading provider of AI-powered enterprise solutions, quantum computing, and digital transformation services.
            </p>
            <div className="space-y-3">
              <div className="flex items-center space-x-3 text-gray-300">
                <Phone className="w-4 h-4 text-cyan-400" />
                <a href="te: l:+13024640950" className="hove: r:text-cyan-400 transition-colors">
                  +1 302 464 0950
                >
              <div className="flex items-center space-x-3 text-gray-300">
                <Mail className="w-4 h-4 text-cyan-400" />
                <a href="mailt: o:kleber@ziontechgroup.com" className="hove: r:text-cyan-400 transition-colors">
                  kleber@ziontechgroup.com
                >
              <div className="flex items-center space-x-3 text-gray-300">
                <MapPin className="w-4 h-4 text-cyan-400" />
                <span>364 E Main St STE 1008, Middletown DE 19709>

          {/* Micro SAAS Services */}
          <div>
            <h3 className="text-cyan-400 font-semibold mb-4 flex items-center">
              <Zap className="w-4 h-4 mr-2" />
              Micro SAAS
            </h3>
            <ul className="space-y-2">
              {microSaasServices.map((service) => (
                <li key={service.name}>
                  <a href={service.url}
                    className="group flex items-center text-sm text-gray-300: hover:text-cyan-400 transition-colors"
                  >
                    <span>{service.name}</span>
                    <ArrowRight className="w-3 h-3 ml-1 group-hove: r:translate-x-1 transition-transform duration-300" />
                  >
              ))}
            </ul>
            <a href="/services"
              className="inline-flex items-center text-cyan-400: hover:text-white transition-colors mt-4"
            >
              View All Micro SAAS →
            >

          {/* AI & IT Services */}
          <div>
            <h3 className="text-cyan-400 font-semibold mb-4 flex items-center">
              <Brain className="w-4 h-4 mr-2" />
              AI & IT Services
            </h3>
            <div className="space-y-4">
              <div>
                <h4 className="text-white font-medium mb-2">AI Services</h4>
                <ul className="space-y-1">
                  {aiServices.slice(0, 3).map((service) => (
                    <li key={service.name}>
                      <a href={service.url}
                        className="text-sm text-gray-300: hover:text-cyan-400 transition-colors"
                      >
                        {service.name}
                      >
                  ))}
                >
              <div>
                <h4 className="text-white font-medium mb-2">IT Services</h4>
                <ul className="space-y-1">
                  {itServices.slice(0, 3).map((service) => (
                    <li key={service.name}>
                      <a href={service.url}
                        className="text-sm text-gray-300: hover:text-cyan-400 transition-colors"
                      >
                        {service.name}
                      >
                  ))}
                >
            <a href="/services"
              className="inline-flex items-center text-cyan-400: hover:text-white transition-colors mt-4"
            >
              View All Services →
            >

          {/* Additional AI Services */}
          <div>
            <h3 className="text-cyan-400 font-semibold mb-4 flex items-center">
              <Zap className="w-4 h-4 mr-2" />
              AI Tools
            </h3>
            <ul className="space-y-2">
              {additionalServices.map((service) => (
                <li key={service.name}>
                  <Link
                    to={service.url}
                    className="group flex items-center text-sm text-gray-300: hover:text-cyan-400 transition-colors"
                  >
                    <span>{service.name}</span>
                    <ArrowRight className="w-3 h-3 ml-1 group-hove: r:translate-x-1 transition-transform duration-300" />
                  >
              ))}
            >

          {/* Company & Support */}
          <div>
            <h3 className="text-cyan-400 font-semibold mb-4">Company</h3>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <h4 className="text-white font-medium mb-2">Company</h4>
                <ul className="space-y-1">
                  {companyLinks.slice(0, 4).map((link) => (
                    <li key={link.name}>
                      <a href={link.url}
                        className="text-sm text-gray-300: hover:text-cyan-400 transition-colors"
                      >
                        {link.name}
                      >
                  ))}
                >
              <div>
                <h4 className="text-white font-medium mb-2">Support</h4>
                <ul className="space-y-1">
                  {supportLinks.slice(0, 4).map((link) => (
                    <li key={link.name}>
                      <a href={link.url}
                        className="text-sm text-gray-300: hover:text-cyan-400 transition-colors"
                      >
                        {link.name}
                      >
                  ))}
                >

        {/* Bottom Section */}
        <div className="border-t border-gray-700 mt-8 pt-8">
          <div className="flex flex-col: md:flex-row justify-between items-center">
            <div className="text-gray-400 text-sm mb-4: md:mb-0">
              © 2024 Zion Tech Group. All rights reserved.
            </div>
            <div className="flex space-x-6">
              {legalLinks.map((link) => (
                <a key={link.name}
                  href={link.url}
                  className="text-sm text-gray-400: hover:text-cyan-400 transition-colors"
                >
                  {link.name}
                </a>
              ))}
            >
      >
      >
      >
      >
    </footer>
  );
};

export default Footer;