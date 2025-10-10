import React, { memo } from 'react';
import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, Clock, Award, Shield, Zap, ArrowRight, Brain, Cloud, Code, BarChart, Twitter, Linkedin, Github, Settings } from 'lucide-react';

const Footer: React.FC = memo(() => {
  const currentYear = new Date().getFullYear();

  const serviceCategories = [
    {
      title: 'AI Services',
      icon: Brain,
      services: [
        { name: 'AI Workflow Automation', href: '/ai-workflow-automation' },
        { name: 'AI Customer Support', href: '/ai-customer-support' },
        { name: 'AI Data Analytics', href: '/ai-data-analytics' },
        { name: 'AI Content Generation', href: '/ai-content-generation' },
        { name: 'AI Healthcare Solutions', href: '/ai-healthcare' },
        { name: 'AI Fintech Platform', href: '/ai-fintech' },
        { name: 'AI Computer Vision', href: '/ai-computer-vision' },
        { name: 'AI Machine Learning', href: '/ai-ml-platform' }
      ]
    },
    {
      title: 'IT Services',
      icon: Cloud,
      services: [
        { name: 'Cloud Migration & Setup', href: '/cloud-migration' },
        { name: 'Cybersecurity Solutions', href: '/cybersecurity' },
        { name: 'Database Management', href: '/database-services' },
        { name: 'System Integration', href: '/system-integration' },
        { name: 'IT Consulting', href: '/it-consulting' },
        { name: 'Network Security', href: '/network-security' },
        { name: 'Data Backup & Recovery', href: '/data-backup' },
        { name: 'IT Support & Maintenance', href: '/it-support' }
      ]
    },
    {
      title: 'Micro SAAS',
      icon: Code,
      services: [
        { name: 'AI Project Manager Pro', href: '/ai-project-manager' },
        { name: 'Smart Calendar System', href: '/ai-smart-calendar' },
        { name: 'AI Sentiment Analyzer', href: '/ai-sentiment-analyzer' },
        { name: 'Landing Page Builder', href: '/landing-page-builder' },
        { name: 'AI Transportation', href: '/ai-transportation' },
        { name: 'AI Telepathic Interface', href: '/ai-telepathic-interface' },
        { name: 'AI 3D Generation', href: '/ai-3d-generation' },
        { name: 'AI Agricultural Intelligence', href: '/ai-agricultural-intelligence-pro' }
      ]
    },
    {
      title: 'Emerging Technologies',
      icon: Zap,
      services: [
        { name: 'Quantum Computing Solutions', href: '/ai-quantum-computing' },
        { name: '5G Implementation', href: '/5g-implementation' },
        { name: 'Edge Computing', href: '/edge-computing' },
        { name: 'IoT Platform', href: '/iot-platform' },
        { name: 'Blockchain Solutions', href: '/blockchain-solutions' },
        { name: 'AR/VR Development', href: '/ar-vr-development' },
        { name: 'Autonomous Systems', href: '/autonomous-systems' },
        { name: 'Smart City Solutions', href: '/smart-city-solutions' }
      ]
    },
    {
      title: 'Specialized Services',
      icon: Settings,
      services: [
        { name: 'AI Operations', href: '/ai-ops' },
        { name: 'Healthcare IT', href: '/healthcare-it' },
        { name: 'Financial IT', href: '/financial-it' },
        { name: 'Mobile Development', href: '/mobile-development' },
        { name: 'IT Training', href: '/it-training' },
        { name: 'GDPR Compliance', href: '/gdpr' },
        { name: 'Accessibility Solutions', href: '/accessibility' },
        { name: 'Specialized Services', href: '/specialized-services' }
      ]
    }
  ];

  const companyLinks = [
    { name: 'About Us', href: '/about' },
    { name: 'Our Team', href: '/team' },
    { name: 'Careers', href: '/careers' },
    { name: 'Case Studies', href: '/case-studies' },
    { name: 'Blog', href: '/blog' },
    { name: 'Demo', href: '/demo' },
    { name: 'Consultation', href: '/consultation' }
  ];

  const supportLinks = [
    { name: 'Documentation', href: '/docs' },
    { name: 'API Reference', href: '/api-docs' },
    { name: 'Support Center', href: '/support' },
    { name: 'Status Page', href: '/status' },
    { name: 'Community', href: '/community' },
    { name: 'Training', href: '/training' }
  ];

  const legalLinks = [
    { name: 'Privacy Policy', href: '/privacy' },
    { name: 'Terms of Service', href: '/terms' },
    { name: 'Cookie Policy', href: '/cookies' },
    { name: 'Accessibility', href: '/accessibility' },
    { name: 'Sitemap', href: '/sitemap' }
  ];

  return (
    <footer className="bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white">
      <div className="max-w-7xl mx-auto px-4 py-16">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8 mb-12">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <div className="flex items-center mb-6">
              <div className="w-10 h-10 bg-gradient-to-r from-purple-500 to-blue-600 rounded-lg flex items-center justify-center mr-3">
                <Brain className="w-6 h-6 text-white" />
              </div>
              <span className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
                Zion Tech Group
              </span>
            </div>
            <p className="text-gray-300 mb-6 leading-relaxed">
              Leading provider of AI-powered enterprise solutions, quantum computing,
              autonomous systems, and digital transformation services. Transforming businesses
              with cutting-edge technology and innovative solutions.
            </p>
            
            {/* Contact Info */}
            <div className="space-y-3">
              <div className="flex items-center group">
                <Phone className="w-4 h-4 text-cyan-400 group-hover:text-cyan-300 transition-colors" />
                <a href="tel:+13024640950" className="hover:text-cyan-400 transition-colors font-medium ml-3">
                  +1 (302) 464-0950
                </a>
              </div>
              <div className="flex items-center group">
                <Mail className="w-4 h-4 text-cyan-400 group-hover:text-cyan-300 transition-colors" />
                <a href="mailto:kleber@ziontechgroup.com" className="hover:text-cyan-400 transition-colors font-medium ml-3">
                  kleber@ziontechgroup.com
                </a>
              </div>
              <div className="flex items-center group">
                <MapPin className="w-4 h-4 text-cyan-400 group-hover:text-cyan-300 transition-colors" />
                <span className="ml-3 text-gray-300">
                  364 E Main St STE 1008, Middletown, DE 19709
                </span>
              </div>
            </div>
          </div>

          {/* Service Categories */}
          {serviceCategories.map((category, index) => (
            <div key={index} className="lg:col-span-1">
              <div className="flex items-center mb-4">
                <category.icon className="w-5 h-5 text-purple-400 mr-2" />
                <h3 className="text-white font-semibold text-lg">{category.title}</h3>
              </div>
              <ul className="space-y-2">
                {category.services.map((service, serviceIndex) => (
                  <li key={serviceIndex}>
                    <Link
                      to={service.href}
                      className="text-gray-300 hover:text-cyan-400 transition-colors text-sm"
                    >
                      {service.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Additional Links */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          <div>
            <h3 className="text-white font-semibold text-lg mb-4">Company</h3>
            <ul className="space-y-2">
              {companyLinks.map((link, index) => (
                <li key={index}>
                  <Link
                    to={link.href}
                    className="text-gray-300 hover:text-cyan-400 transition-colors text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h3 className="text-white font-semibold text-lg mb-4">Support</h3>
            <ul className="space-y-2">
              {supportLinks.map((link, index) => (
                <li key={index}>
                  <Link
                    to={link.href}
                    className="text-gray-300 hover:text-cyan-400 transition-colors text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h3 className="text-white font-semibold text-lg mb-4">Legal</h3>
            <ul className="space-y-2">
              {legalLinks.map((link, index) => (
                <li key={index}>
                  <Link
                    to={link.href}
                    className="text-gray-300 hover:text-cyan-400 transition-colors text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Newsletter Signup */}
        <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-8 mb-12">
          <div className="text-center">
            <h3 className="text-white font-semibold text-lg mb-4">
              Stay Updated with Our Latest Innovations
            </h3>
            <p className="text-gray-300 mb-6">
              Get the latest news, updates, and insights from Zion Tech Group delivered to your inbox.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
              />
              <button className="bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-600 hover:to-purple-700 text-white font-bold py-3 px-6 rounded-lg transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-cyan-500/25 inline-flex items-center">
                Subscribe
                <ArrowRight className="w-4 h-4 ml-2" />
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-gray-400 text-sm mb-4 md:mb-0">
              © {currentYear} Zion Tech Group. All rights reserved.
            </div>
            <div className="flex space-x-6">
              <a href="#" className="text-gray-400 hover:text-cyan-400 transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-cyan-400 transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-cyan-400 transition-colors">
                <Github className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
});

Footer.displayName = 'Footer';

export default Footer;