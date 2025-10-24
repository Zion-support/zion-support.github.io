import React from 'react';
<<<<<<< HEAD
import Link from 'next/link';
import { Mail, Phone, MapPin, Github, Linkedin, Twitter, ArrowRight, Brain, Cloud, Shield, Globe, Database, Smartphone, Zap, Sparkles, Star } from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  
  const aiServices = [
    { name: 'AI Analytics & BI', url: '/ai-analytics', description: 'Business intelligence' },
    { name: 'AI Automation', url: '/ai-automation', description: 'Process automation' },
    { name: 'AI Chatbots & NLP', url: '/ai-chatbot-builder', description: 'Conversational AI' },
    { name: 'AI Content Generation', url: '/ai-content-generation', description: 'Automated content' },
    { name: 'AI Cybersecurity', url: '/ai-cybersecurity', description: 'AI security' },
    { name: 'AI Data Analytics', url: '/ai-data-analytics', description: 'Data insights' },
    { name: 'AI Development', url: '/ai-development', description: 'Custom AI solutions' },
    { name: 'AI Integration', url: '/ai-integration', description: 'System integration' },
    { name: 'AI Machine Learning', url: '/ai-machine-learning', description: 'ML models' },
    { name: 'AI Optimization', url: '/ai-optimization', description: 'Performance tuning' },
    { name: 'AI Predictive Analytics', url: '/ai-predictive-analytics', description: 'Future insights' },
    { name: 'AI Process Automation', url: '/ai-process-automation', description: 'Workflow automation' },
    { name: 'AI Quality Assurance', url: '/ai-quality-assurance', description: 'Testing & QA' },
    { name: 'AI Research & Development', url: '/ai-research-development', description: 'R&D services' },
    { name: 'AI Software Development', url: '/ai-software-development', description: 'Custom software' },
    { name: 'AI Strategy Consulting', url: '/ai-strategy-consulting', description: 'Strategic planning' },
    { name: 'AI Testing', url: '/ai-testing', description: 'Quality testing' },
    { name: 'AI Training', url: '/ai-training', description: 'Team training' },
    { name: 'AI Transformation', url: '/ai-transformation', description: 'Digital transformation' },
    { name: 'AI Virtual Assistants', url: '/ai-virtual-assistants', description: 'Virtual support' }
  ];

  const itServices = [
    { name: 'Web Development', url: '/web-development', description: 'Custom websites' },
    { name: 'Mobile App Development', url: '/mobile-app-development', description: 'iOS & Android apps' },
    { name: 'Cloud Solutions', url: '/cloud-solutions', description: 'Cloud infrastructure' },
    { name: 'Database Management', url: '/database-management', description: 'Data management' },
    { name: 'Cybersecurity', url: '/cybersecurity', description: 'Security solutions' },
    { name: 'IT Consulting', url: '/it-consulting', description: 'Technology consulting' },
    { name: 'System Integration', url: '/system-integration', description: 'System connectivity' },
    { name: 'DevOps', url: '/devops', description: 'Development operations' },
    { name: 'Quality Assurance', url: '/quality-assurance', description: 'Testing services' },
    { name: 'Maintenance & Support', url: '/maintenance-support', description: 'Ongoing support' }
  ];

  const companyLinks = [
    { name: 'About Us', url: '/about' },
    { name: 'Our Team', url: '/team' },
    { name: 'Careers', url: '/careers' },
    { name: 'Contact', url: '/contact' },
    { name: 'Blog', url: '/blog' },
    { name: 'Case Studies', url: '/case-studies' }
  ];

  const socialLinks = [
    { name: 'LinkedIn', url: 'https://linkedin.com/company/zion-tech-group', icon: Linkedin },
    { name: 'Twitter', url: 'https://twitter.com/ziontechgroup', icon: Twitter },
    { name: 'GitHub', url: 'https://github.com/zion-tech-group', icon: Github }
  ];
=======
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Footer - Zion Tech Group',
  description: 'Comprehensive footer solutions for modern businesses.',
  keywords: 'footer, AI solutions, technology services',
  openGraph: {
    title: 'Footer - Zion Tech Group',
    description: 'Comprehensive footer solutions for modern businesses.',
    type: 'website',
    url: 'https://ziontechgroup.com/components',
  },
};
>>>>>>> origin/main

const FooterPage = () => {
  return (
<<<<<<< HEAD
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <div className="flex items-center mb-4">
              <Brain className="w-8 h-8 text-blue-400 mr-2" />
              <span className="text-2xl font-bold">Zion Tech Group</span>
            </div>
            <p className="text-gray-300 mb-6 max-w-sm">
              Leading provider of AI and IT solutions, transforming businesses through innovative technology and expert consulting.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* AI Services */}
          <div>
            <h3 className="text-lg font-semibold mb-4 flex items-center">
              <Zap className="w-5 h-5 mr-2 text-cyan-400" />
              AI Services
            </h3>
            <ul className="space-y-2">
              {aiServices.slice(0, 8).map((service) => (
                <li key={service.name}>
                  <Link
                    href={service.url}
                    className="text-gray-300 hover:text-white transition-colors text-sm"
                  >
                    {service.name}
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  href="/ai-services"
                  className="text-cyan-400 hover:text-cyan-300 transition-colors text-sm font-medium inline-flex items-center"
                >
                  View All AI Services
                  <ArrowRight className="w-3 h-3 ml-1" />
                </Link>
              </li>
            </ul>
          </div>

          {/* IT Services */}
          <div>
            <h3 className="text-lg font-semibold mb-4 flex items-center">
              <Cloud className="w-5 h-5 mr-2 text-blue-400" />
              IT Services
            </h3>
            <ul className="space-y-2">
              {itServices.map((service) => (
                <li key={service.name}>
                  <Link
                    href={service.url}
                    className="text-gray-300 hover:text-white transition-colors text-sm"
                  >
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4 flex items-center">
              <Globe className="w-5 h-5 mr-2 text-purple-400" />
              Company
            </h3>
            <ul className="space-y-2">
              {companyLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.url}
                    className="text-gray-300 hover:text-white transition-colors text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Contact Info */}
        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="flex items-center">
              <Mail className="w-5 h-5 text-blue-400 mr-3" />
              <div>
                <p className="text-sm text-gray-300">Email</p>
                <a href="mailto:info@ziontechgroup.com" className="text-white hover:text-blue-400 transition-colors">
                  info@ziontechgroup.com
                </a>
              </div>
            </div>
            <div className="flex items-center">
              <Phone className="w-5 h-5 text-blue-400 mr-3" />
              <div>
                <p className="text-sm text-gray-300">Phone</p>
                <a href="tel:+1-555-0123" className="text-white hover:text-blue-400 transition-colors">
                  +1 (555) 012-3456
                </a>
              </div>
            </div>
            <div className="flex items-center">
              <MapPin className="w-5 h-5 text-blue-400 mr-3" />
              <div>
                <p className="text-sm text-gray-300">Location</p>
                <p className="text-white">San Francisco, CA</p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">
            © {currentYear} Zion Tech Group. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link href="/privacy" className="text-gray-400 hover:text-white transition-colors text-sm">
              Privacy Policy
            </Link>
            <Link href="/terms" className="text-gray-400 hover:text-white transition-colors text-sm">
              Terms of Service
            </Link>
            <Link href="/cookies" className="text-gray-400 hover:text-white transition-colors text-sm">
              Cookie Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
=======
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6">
            Footer
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Comprehensive footer solutions for modern businesses.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="/contact" className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105">
              Get Started
            </a>
            <a href="/services" className="border border-white text-white hover:bg-white hover:text-gray-900 px-8 py-3 rounded-lg font-semibold transition-colors">
              Learn More
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FooterPage;
>>>>>>> origin/main
