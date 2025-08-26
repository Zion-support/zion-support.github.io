import React from 'react';
import { Link } from 'react-router-dom';
import { Heart, Mail, Phone, MapPin, Globe, ArrowUp, Brain, Shield, Cloud, Cpu, Rocket, Lock, Building, Users, Zap, Code, Network, Database, MessageCircle, Eye, TrendingUp, Sparkles, Atom, Award } from 'lucide-react';

const footerNavigation = {
  services: {
    title: 'Core Services',
    items: [
      { name: 'Enhanced Services 2025', href: '/enhanced-services-2025', icon: Sparkles, description: 'Cutting-edge 2025 services' },
      { name: 'AI & Analytics', href: '/services/ai-analytics', icon: Brain, description: 'AI-powered business intelligence' },
      { name: 'Cybersecurity', href: '/services/cybersecurity', icon: Shield, description: 'Advanced threat detection' },
      { name: 'Cloud & DevOps', href: '/services/cloud-devops', icon: Cloud, description: 'Cloud infrastructure solutions' },
      { name: 'IoT & Edge', href: '/services/iot-edge', icon: Zap, description: 'Edge computing and IoT' },
      { name: 'Quantum Computing', href: '/services/quantum-computing', icon: Rocket, description: 'Quantum algorithms' },
      { name: 'Blockchain', href: '/services/blockchain', icon: Code, description: 'Distributed ledger technology' },
      { name: 'Digital Twin', href: '/services/digital-twin', icon: Building, description: 'Virtual replicas' },
      { name: 'Sustainability', href: '/services/sustainability', icon: Heart, description: 'Green IT solutions' }
    ],
  },
  microSaas: {
    title: 'Micro SAAS Solutions',
    items: [
      { name: 'AI Business Intelligence', href: '/micro-saas/ai-business-intelligence', description: 'AI analytics platform' },
      { name: 'Customer Experience', href: '/micro-saas/customer-experience', description: 'Customer journey optimization' },
      { name: 'Quantum Computing', href: '/micro-saas/quantum-computing', description: 'Quantum algorithms as service' },
      { name: 'Supply Chain', href: '/micro-saas/supply-chain', description: 'Blockchain transparency' },
      { name: 'Cybersecurity', href: '/micro-saas/cybersecurity', description: 'AI threat detection' },
      { name: 'IoT Edge Computing', href: '/micro-saas/iot-edge', description: 'Edge processing platform' },
      { name: 'Content Creation', href: '/micro-saas/content-creation', description: 'AI content generation' },
      { name: 'HR Platform', href: '/micro-saas/hr-platform', description: 'Intelligent HR management' }
    ],
  },
  solutions: {
    title: 'Solutions',
    items: [
      { name: 'Enterprise Solutions', href: '/solutions/enterprise', description: 'Large-scale deployments' },
      { name: 'SMB Solutions', href: '/solutions/smb', description: 'Small business solutions' },
      { name: 'Industry Solutions', href: '/solutions/industries', description: 'Industry-specific tech' },
      { name: 'Custom Development', href: '/solutions/custom', description: 'Bespoke software' },
      { name: 'Digital Transformation', href: '/solutions/digital-transformation', description: 'End-to-end transformation' },
      { name: 'IT Consulting', href: '/solutions/consulting', description: 'Strategic consulting' },
      { name: 'Onsite Support', href: '/solutions/onsite-support', description: 'Local IT support' },
      { name: 'Green IT', href: '/green-it', description: 'Sustainable technology' }
    ],
  },
  company: {
    title: 'Company',
    items: [
      { name: 'About Us', href: '/about', description: 'Our story and mission' },
      { name: 'Our Team', href: '/team', description: 'Meet our experts' },
      { name: 'Careers', href: '/careers', description: 'Join our team' },
      { name: 'Partners', href: '/partners', description: 'Strategic partnerships' },
      { name: 'News & Blog', href: '/blog', description: 'Latest insights' },
      { name: 'Case Studies', href: '/case-studies', description: 'Success stories' },
      { name: 'Contact Us', href: '/contact', description: 'Get in touch' },
      { name: 'Support', href: '/help', description: 'Technical support' }
    ],
  },
  resources: {
    title: 'Resources',
    items: [
      { name: 'Documentation', href: '/docs', description: 'Technical guides' },
      { name: 'API Reference', href: '/api', description: 'Developer resources' },
      { name: 'White Papers', href: '/white-papers', description: 'Industry insights' },
      { name: 'Webinars', href: '/webinars', description: 'Educational content' },
      { name: 'Training', href: '/training', description: 'Skill development' },
      { name: 'Community', href: '/community', description: 'User forums' },
      { name: 'FAQ', href: '/faq', description: 'Common questions' },
      { name: 'Status', href: '/status', description: 'Service status' }
    ],
  }
};

const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-zion-slate-dark text-white">
      {/* Main Footer Content */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <div className="flex items-center mb-6">
              <div className="w-10 h-10 bg-gradient-to-r from-zion-cyan to-zion-blue rounded-lg flex items-center justify-center mr-3">
                <span className="text-white font-bold text-xl">Z</span>
              </div>
              <h3 className="text-2xl font-bold bg-gradient-to-r from-zion-cyan to-zion-blue bg-clip-text text-transparent">
                Zion Tech Group
              </h3>
            </div>
            <p className="text-zion-slate-light mb-6 max-w-md">
              Empowering businesses with cutting-edge AI, cybersecurity, and emerging technologies. 
              Transform your digital future with Zion Tech Group.
            </p>
            <div className="flex space-x-4">
              <a href="mailto:info@ziontechgroup.com" className="text-zion-cyan hover:text-zion-blue transition-colors">
                <Mail className="w-5 h-5" />
              </a>
              <a href="tel:+1-555-0123" className="text-zion-cyan hover:text-zion-blue transition-colors">
                <Phone className="w-5 h-5" />
              </a>
              <a href="#" className="text-zion-cyan hover:text-zion-blue transition-colors">
                <MapPin className="w-5 h-5" />
              </a>
              <a href="#" className="text-zion-cyan hover:text-zion-blue transition-colors">
                <Globe className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Navigation Sections */}
          {Object.entries(footerNavigation).map(([key, section]) => (
            <div key={key}>
              <h4 className="font-semibold text-lg mb-4 text-zion-cyan">{section.title}</h4>
              <ul className="space-y-2">
                {section.items.map((item) => (
                  <li key={item.name}>
                    <Link 
                      to={item.href}
                      className="text-zion-slate-light hover:text-zion-cyan transition-colors text-sm"
                      title={item.description}
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-zion-slate border-opacity-20">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-zion-slate-light text-sm mb-4 md:mb-0">
              © {new Date().getFullYear()} Zion Tech Group. All rights reserved.
            </div>
            <div className="flex items-center space-x-6 text-sm">
              <Link to="/privacy" className="text-zion-slate-light hover:text-zion-cyan transition-colors">
                Privacy Policy
              </Link>
              <Link to="/terms" className="text-zion-slate-light hover:text-zion-cyan transition-colors">
                Terms of Service
              </Link>
              <Link to="/cookies" className="text-zion-slate-light hover:text-zion-cyan transition-colors">
                Cookie Policy
              </Link>
              <Link to="/accessibility" className="text-zion-slate-light hover:text-zion-cyan transition-colors">
                Accessibility
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll to Top Button */}
      <button
        onClick={scrollToTop}
        className="fixed bottom-8 right-8 bg-gradient-to-r from-zion-cyan to-zion-blue text-white p-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-110"
        aria-label="Scroll to top"
      >
        <ArrowUp className="w-5 h-5" />
      </button>
    </footer>
  );
};

export default Footer;
