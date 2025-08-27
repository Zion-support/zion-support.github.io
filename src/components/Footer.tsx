import React from 'react';
import { Link } from 'react-router-dom';
import { Heart, Mail, Phone, MapPin, Globe, ArrowUp, Brain, Shield, Cloud, Cpu, Rocket, Lock, Building, Users, Zap, Code, Network, Database, MessageCircle, Eye, TrendingUp, Sparkles, Atom, Award, Facebook, Twitter, Linkedin, Instagram, Youtube, Github, Mail as MailIcon, Phone as PhoneIcon, MapPin as MapPinIcon } from 'lucide-react';

const footerNavigation = {
  services: {
    title: 'Core Services',
    items: [
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
      { name: 'Healthcare Solutions', href: '/solutions/healthcare', description: 'Medical technology solutions' },
      { name: 'Financial Solutions', href: '/solutions/financial', description: 'Fintech and banking solutions' },
      { name: 'Manufacturing Solutions', href: '/solutions/manufacturing', description: 'Smart manufacturing' },
      { name: 'Government Solutions', href: '/solutions/government', description: 'Public sector technology' },
      { name: 'Retail Solutions', href: '/solutions/retail', description: 'E-commerce and retail tech' },
      { name: 'Education Solutions', href: '/solutions/education', description: 'EdTech and learning platforms' },
      { name: 'Transportation Solutions', href: '/solutions/transportation', description: 'Smart mobility and logistics' }
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
  },
  innovation: {
    title: 'Innovation Lab',
    items: [
      { name: 'Research & Development', href: '/innovation-lab/research', description: 'Cutting-edge research' },
      { name: 'Prototype Development', href: '/innovation-lab/prototypes', description: 'Rapid prototyping' },
      { name: 'Technology Incubator', href: '/innovation-lab/incubator', description: 'Startup incubation' },
      { name: 'Future Technologies', href: '/innovation-lab/future-tech', description: 'Emerging tech exploration' },
      { name: 'Collaborative Projects', href: '/innovation-lab/collaborations', description: 'Partnership opportunities' }
    ],
  }
};

const socialLinks = [
  { name: 'Facebook', href: 'https://facebook.com/ziontechgroup', icon: Facebook, color: 'hover:text-blue-500' },
  { name: 'Twitter', href: 'https://twitter.com/ziontechgroup', icon: Twitter, color: 'hover:text-blue-400' },
  { name: 'LinkedIn', href: 'https://linkedin.com/company/ziontechgroup', icon: Linkedin, color: 'hover:text-blue-600' },
  { name: 'Instagram', href: 'https://instagram.com/ziontechgroup', icon: Instagram, color: 'hover:text-pink-500' },
  { name: 'YouTube', href: 'https://youtube.com/@ziontechgroup', icon: Youtube, color: 'hover:text-red-500' },
  { name: 'GitHub', href: 'https://github.com/ziontechgroup', icon: Github, color: 'hover:text-gray-400' }
];

const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative bg-zion-slate-dark text-white overflow-hidden">
      {/* Futuristic background elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-zion-slate-dark via-zion-slate to-zion-slate-dark opacity-50"></div>
      <div className="absolute inset-0 cyber-grid opacity-10"></div>
      
      {/* Main Footer Content */}
      <div className="relative container mx-auto px-4 py-16">
        {/* Top Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8 mb-12">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <div className="flex items-center mb-6">
              <div className="relative">
                <div className="w-12 h-12 bg-gradient-to-r from-zion-cyan to-zion-blue rounded-xl flex items-center justify-center mr-4 glow-cyan">
                  <span className="text-white font-bold text-xl font-orbitron">Z</span>
                </div>
                <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-zion-cyan to-zion-blue opacity-0 animate-pulse"></div>
              </div>
              <div>
                <h3 className="text-2xl font-bold bg-gradient-to-r from-zion-cyan to-zion-blue bg-clip-text text-transparent font-orbitron">
                  Zion Tech Group
                </h3>
                <p className="text-sm text-zion-slate-light font-rajdhani">Future Technology Solutions</p>
              </div>
            </div>
            <p className="text-zion-slate-light mb-6 max-w-md leading-relaxed">
              Empowering businesses with cutting-edge AI, cybersecurity, and emerging technologies. 
              Transform your digital future with Zion Tech Group's innovative solutions.
            </p>
            
            {/* Contact Information */}
            <div className="space-y-3 mb-6">
              <div className="flex items-center space-x-3 text-zion-slate-light hover:text-zion-cyan transition-colors duration-200">
                <PhoneIcon className="w-4 h-4 text-zion-cyan" />
                <a href="tel:+13024640950" className="text-sm">+1 302 464 0950</a>
              </div>
              <div className="flex items-center space-x-3 text-zion-slate-light hover:text-zion-cyan transition-colors duration-200">
                <MailIcon className="w-4 h-4 text-zion-cyan" />
                <a href="mailto:kleber@ziontechgroup.com" className="text-sm">kleber@ziontechgroup.com</a>
              </div>
              <div className="flex items-start space-x-3 text-zion-slate-light">
                <MapPinIcon className="w-4 h-4 text-zion-cyan mt-0.5" />
                <address className="text-sm not-italic">
                  364 E Main St STE 1008<br />
                  Middletown DE 19709
                </address>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex space-x-4">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`w-10 h-10 bg-zion-slate/50 border border-zion-cyan/20 rounded-lg flex items-center justify-center text-zion-slate-light ${social.color} hover:border-zion-cyan/50 hover:bg-zion-slate/70 transition-all duration-300`}
                  aria-label={social.name}
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Navigation Sections */}
          {Object.entries(footerNavigation).map(([key, section]) => (
            <div key={key} className="space-y-4">
              <h4 className="text-lg font-semibold text-white border-b border-zion-cyan/30 pb-2">
                {section.title}
              </h4>
              <ul className="space-y-2">
                {section.items.map((item) => (
                  <li key={item.name}>
                    <Link
                      to={item.href}
                      className="text-sm text-zion-slate-light hover:text-zion-cyan transition-colors duration-200 flex items-center space-x-2 group"
                    >
                      <span className="w-1 h-1 bg-zion-cyan/50 rounded-full group-hover:bg-zion-cyan transition-colors duration-200"></span>
                      <span>{item.name}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Middle Section - Featured Services */}
        <div className="border-t border-zion-cyan/20 pt-8 mb-8">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-white mb-2">Featured Services</h3>
            <p className="text-zion-slate-light">Discover our most innovative solutions</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: 'AI Autonomous Operations', price: '$4,999/month', icon: Brain, color: 'from-zion-cyan to-zion-blue' },
              { title: 'Quantum Cybersecurity', price: '$7,999/month', icon: Shield, color: 'from-zion-purple to-zion-pink' },
              { title: 'Neuromorphic Computing', price: '$12,999/month', icon: Cpu, color: 'from-zion-blue to-zion-cyan' },
              { title: 'Space Technology Platform', price: '$19,999/month', icon: Rocket, color: 'from-zion-pink to-zion-purple' }
            ].map((service, index) => (
              <div key={index} className="card-futuristic text-center group hover:scale-105 transition-transform duration-300">
                <div className={`w-16 h-16 bg-gradient-to-r ${service.color} rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  <service.icon className="w-8 h-8 text-white" />
                </div>
                <h4 className="text-lg font-semibold text-white mb-2">{service.title}</h4>
                <p className="text-zion-cyan font-bold text-lg">{service.price}</p>
                <Link 
                  to="/services" 
                  className="inline-block mt-3 text-zion-cyan hover:text-zion-blue transition-colors duration-200 text-sm font-medium"
                >
                  Learn More →
                </Link>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-zion-cyan/20 pt-8">
          <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
            <div className="flex items-center space-x-6 text-sm text-zion-slate-light">
              <span>&copy; 2024 Zion Tech Group. All rights reserved.</span>
              <Link to="/privacy" className="hover:text-zion-cyan transition-colors duration-200">Privacy Policy</Link>
              <Link to="/terms" className="hover:text-zion-cyan transition-colors duration-200">Terms of Service</Link>
              <Link to="/cookies" className="hover:text-zion-cyan transition-colors duration-200">Cookie Policy</Link>
            </div>
            
            <div className="flex items-center space-x-4">
              <span className="text-sm text-zion-slate-light">Follow us:</span>
              <div className="flex space-x-2">
                {socialLinks.slice(0, 4).map((social) => (
                  <a
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`w-8 h-8 bg-zion-slate/50 border border-zion-cyan/20 rounded-lg flex items-center justify-center text-zion-slate-light ${social.color} hover:border-zion-cyan/50 hover:bg-zion-slate/70 transition-all duration-300`}
                    aria-label={social.name}
                  >
                    <social.icon className="w-4 h-4" />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll to top button */}
      <button
        onClick={scrollToTop}
        className="fixed bottom-8 right-8 w-12 h-12 bg-gradient-to-r from-zion-cyan to-zion-blue text-white rounded-full shadow-lg hover:from-zion-blue hover:to-zion-purple transition-all duration-300 transform hover:scale-110 glow-cyan z-50"
        aria-label="Scroll to top"
      >
        <ArrowUp className="w-6 h-6 mx-auto" />
      </button>
    </footer>
  );
};

export default Footer;
