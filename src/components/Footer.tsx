import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  Twitter, 
  Linkedin, 
  Facebook, 
  Instagram, 
  Github, 
  Mail, 
  Phone, 
  MapPin, 
  ArrowUp, 
  Globe, 
  Heart,
  Zap,
  Shield,
  Cloud,
  Brain,
  Rocket,
  Code,
  Users,
  Building,
  Award,
  Clock,
  CheckCircle,
  Send,
  ArrowRight,
  Star,
  TrendingUp,
  Shield as SecurityIcon,
  BookOpen,
  MessageCircle,
  Sparkles,
  Target,
  Lightbulb,
  Server,
  Wifi,
  Monitor,
  Laptop,
  Handshake,
  FileImage,
  Network,
  BarChart3,
  ShoppingCart,
  CpuIcon,
  Play
} from 'lucide-react';
import { zionContactInfo } from '../data/innovativeMicroSaasServices2026';

const footerNavigation = {
  services: {
    title: 'Core Services',
    icon: Zap,
    items: [
      { name: 'AI & Analytics', href: '/services/ai-analytics', icon: Brain, description: 'Machine learning and data insights' },
      { name: 'Cybersecurity', href: '/services/cybersecurity', icon: Shield, description: 'Protect your digital assets' },
      { name: 'Cloud & DevOps', href: '/services/cloud-devops', icon: Cloud, description: 'Scalable infrastructure solutions' },
      { name: 'IoT & Edge', href: '/services/iot-edge', icon: Zap, description: 'Connected device management' },
      { name: 'Quantum Computing', href: '/services/quantum-computing', icon: Rocket, description: 'Next-generation computing' },
      { name: 'Blockchain', href: '/services/blockchain', icon: Code, description: 'Decentralized solutions' },
      { name: 'Digital Twin', href: '/services/digital-twin', icon: Building, description: 'Virtual replica technology' },
      { name: 'Sustainability', href: '/services/sustainability', icon: Heart, description: 'Green IT solutions' }
    ],
  },
  microSaas: {
    title: 'Micro SAAS Solutions',
    icon: Sparkles,
    items: [
      { name: 'AI Business Intelligence', href: '/micro-saas/ai-business-intelligence', description: 'Smart analytics platform' },
      { name: 'Customer Experience', href: '/micro-saas/customer-experience', description: 'Enhanced customer engagement' },
      { name: 'Supply Chain', href: '/micro-saas/supply-chain', description: 'Optimized logistics management' },
      { name: 'Content Creation', href: '/micro-saas/content-creation', description: 'AI-powered content tools' },
      { name: 'HR Platform', href: '/micro-saas/hr-platform', description: 'Human resources automation' },
      { name: 'Marketing Automation', href: '/micro-saas/marketing-automation', description: 'AI marketing solutions' }
    ],
  },
  itServices: {
    title: 'IT Services',
    icon: Server,
    items: [
      { name: 'Infrastructure', href: '/it-services/infrastructure', description: 'IT infrastructure management' },
      { name: 'Digital Transformation', href: '/it-services/digital-transformation', description: 'Business transformation' },
      { name: 'Consulting', href: '/it-services/consulting', description: 'Technology consulting' },
      { name: 'Onsite Support', href: '/it-services/onsite-support', description: '24/7 technical support' },
      { name: '5G Solutions', href: '/it-services/5g-solutions', description: 'Next-gen networking' },
      { name: 'Green IT', href: '/it-services/green-it', description: 'Eco-friendly solutions' }
    ],
  },
  solutions: {
    title: 'Industry Solutions',
    icon: Target,
    items: [
      { name: 'Healthcare', href: '/solutions/healthcare', description: 'Digital health solutions' },
      { name: 'Finance', href: '/solutions/finance', description: 'Fintech solutions' },
      { name: 'Manufacturing', href: '/solutions/manufacturing', description: 'Smart manufacturing' },
      { name: 'Retail', href: '/solutions/retail', description: 'E-commerce solutions' },
      { name: 'Education', href: '/solutions/education', description: 'EdTech solutions' },
      { name: 'Government', href: '/solutions/government', description: 'Public sector solutions' }
    ],
  },
  company: {
    title: 'Company',
    icon: Building,
    items: [
      { name: 'About Us', href: '/about', description: 'Learn our story' },
      { name: 'Team', href: '/team', description: 'Meet our experts' },
      { name: 'Blog', href: '/blog', description: 'Latest insights' },
      { name: 'Partners', href: '/partners', description: 'Strategic alliances' },
      { name: 'Careers', href: '/careers', description: 'Join our team' },
      { name: 'News', href: '/news', description: 'Company updates' }
    ],
  },
  support: {
    title: 'Support & Resources',
    icon: MessageCircle,
    items: [
      { name: 'Help Center', href: '/help-center', description: 'Get help and support' },
      { name: 'Contact Support', href: '/contact', description: 'Reach our team' },
      { name: 'Documentation', href: '/docs', description: 'Technical guides' },
      { name: 'API Reference', href: '/api', description: 'Developer resources' },
      { name: 'Terms of Service', href: '/terms', description: 'Legal terms' },
      { name: 'Privacy Policy', href: '/privacy', description: 'Data protection' }
    ],
  },
};

const socialLinks = [
  { name: 'LinkedIn', href: 'https://linkedin.com/company/ziontechgroup', icon: Linkedin, color: 'hover:text-blue-400' },
  { name: 'Twitter', href: 'https://twitter.com/ziontechgroup', icon: Twitter, color: 'hover:text-blue-400' },
  { name: 'Facebook', href: 'https://facebook.com/ziontechgroup', icon: Facebook, color: 'hover:text-blue-600' },
  { name: 'Instagram', href: 'https://instagram.com/ziontechgroup', icon: Instagram, color: 'hover:text-pink-500' },
  { name: 'GitHub', href: 'https://github.com/ziontechgroup', icon: Github, color: 'hover:text-gray-400' },
];

const quickActions = [
  { name: 'Get Quote', href: '/request-quote', icon: MessageCircle, description: 'Request a custom quote' },
  { name: 'Book Demo', href: '/book-demo', icon: Play, description: 'Schedule a product demo' },
  { name: 'Support', href: '/help-center', icon: HelpCircle, description: 'Get technical support' },
  { name: 'Partnership', href: '/partners', icon: Handshake, description: 'Become a partner' }
];

export function Footer() {
  const [expandedSection, setExpandedSection] = useState<string | null>(null);

  const toggleSection = (section: string) => {
    setExpandedSection(expandedSection === section ? null : section);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative bg-black/95 backdrop-blur-xl border-t border-zion-cyan/20">
      {/* Background Effects */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-1/4 w-64 h-64 bg-zion-cyan/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-zion-purple/5 rounded-full blur-3xl"></div>
      </div>

      <div className="container-responsive relative z-10">
        {/* Main Footer Content */}
        <div className="py-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-12">
            {/* Company Info & Contact */}
            <div className="lg:col-span-1 xl:col-span-1">
              <div className="mb-8">
                <Link to="/" className="flex items-center space-x-3 group">
                  <div className="relative">
                    <div className="w-16 h-16 bg-gradient-to-br from-zion-cyan via-zion-purple to-zion-blue rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <Zap className="w-8 h-8 text-white" />
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-br from-zion-cyan via-zion-purple to-zion-blue rounded-2xl blur-lg opacity-50 group-hover:opacity-75 transition-opacity duration-300"></div>
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-white group-hover:text-zion-cyan transition-colors duration-300">
                      Zion Tech Group
                    </h3>
                    <p className="text-zion-cyan/80 text-sm">Innovation • Technology • Future</p>
                  </div>
                </Link>
              </div>

              <p className="text-white/70 mb-8 leading-relaxed">
                Pioneering the future of technology with innovative AI, cybersecurity, and digital transformation solutions. 
                Empowering businesses worldwide to achieve their digital potential.
              </p>

              {/* Contact Information */}
              <div className="space-y-4 mb-8">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-zion-cyan/20 rounded-lg flex items-center justify-center">
                    <Phone className="w-5 h-5 text-zion-cyan" />
                  </div>
                  <div>
                    <div className="text-white font-semibold">Phone</div>
                    <div className="text-zion-cyan/80">{zionContactInfo.phone}</div>
                  </div>
                </div>

                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-zion-purple/20 rounded-lg flex items-center justify-center">
                    <Mail className="w-5 h-5 text-zion-purple" />
                  </div>
                  <div>
                    <div className="text-white font-semibold">Email</div>
                    <div className="text-zion-cyan/80">{zionContactInfo.email}</div>
                  </div>
                </div>

                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-zion-blue/20 rounded-lg flex items-center justify-center">
                    <MapPin className="w-5 h-5 text-zion-blue" />
                  </div>
                  <div>
                    <div className="text-white font-semibold">Address</div>
                    <div className="text-zion-cyan/80">{zionContactInfo.address}</div>
                  </div>
                </div>
              </div>

              {/* Social Links */}
              <div className="flex items-center space-x-4">
                {socialLinks.map((social) => (
                  <a
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`w-10 h-10 bg-zion-cyan/10 rounded-lg flex items-center justify-center text-zion-cyan hover:bg-zion-cyan hover:text-white transition-all duration-300 ${social.color}`}
                    title={social.name}
                  >
                    <social.icon className="w-5 h-5" />
                  </a>
                ))}
              </div>
            </div>

            {/* Navigation Sections */}
            <div className="lg:col-span-1 xl:col-span-2">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {Object.entries(footerNavigation).map(([key, section]) => (
                  <div key={key} className="space-y-4">
                    <div className="flex items-center space-x-2 mb-4">
                      <section.icon className="w-5 h-5 text-zion-cyan" />
                      <h3 className="text-lg font-semibold text-white">{section.title}</h3>
                    </div>
                    
                    <ul className="space-y-3">
                      {section.items.map((item) => (
                        <li key={item.name}>
                          <Link
                            to={item.href}
                            className="flex items-center space-x-2 text-zion-cyan/70 hover:text-zion-cyan transition-colors duration-300 group"
                          >
                            <item.icon className="w-4 h-4 opacity-60 group-hover:opacity-100 transition-opacity duration-300" />
                            <span className="text-sm">{item.name}</span>
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Quick Actions Section */}
        <div className="py-8 border-t border-zion-cyan/20">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {quickActions.map((action) => (
              <Link
                key={action.name}
                to={action.href}
                className="group p-4 bg-zion-cyan/5 border border-zion-cyan/20 rounded-xl hover:bg-zion-cyan/10 hover:border-zion-cyan/40 transition-all duration-300"
              >
                <div className="flex items-center space-x-3 mb-2">
                  <div className="w-8 h-8 bg-zion-cyan/20 rounded-lg flex items-center justify-center group-hover:bg-zion-cyan/30 transition-colors duration-300">
                    <action.icon className="w-4 h-4 text-zion-cyan" />
                  </div>
                  <span className="text-white font-semibold text-sm">{action.name}</span>
                </div>
                <p className="text-zion-cyan/70 text-xs">{action.description}</p>
              </Link>
            ))}
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="py-8 border-t border-zion-cyan/20">
          <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
            <div className="flex items-center space-x-6 text-sm text-zion-cyan/70">
              <span>&copy; 2026 Zion Tech Group. All rights reserved.</span>
              <Link to="/privacy" className="hover:text-zion-cyan transition-colors duration-300">Privacy Policy</Link>
              <Link to="/terms" className="hover:text-zion-cyan transition-colors duration-300">Terms of Service</Link>
              <Link to="/security" className="hover:text-zion-cyan transition-colors duration-300">Security</Link>
            </div>

            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-2 text-zion-cyan/70">
                <Heart className="w-4 h-4" />
                <span className="text-sm">Made with innovation</span>
              </div>
              
              <button
                onClick={scrollToTop}
                className="w-10 h-10 bg-zion-cyan/20 border border-zion-cyan/30 rounded-lg flex items-center justify-center text-zion-cyan hover:bg-zion-cyan hover:text-white transition-all duration-300 group"
                title="Back to top"
              >
                <ArrowUp className="w-5 h-5 group-hover:animate-bounce" />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Floating Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 right-20 w-32 h-32 border border-zion-cyan/10 rounded-full float-animation"></div>
        <div className="absolute bottom-20 left-20 w-48 h-48 border border-zion-purple/10 rounded-full float-animation-delayed"></div>
      </div>
    </footer>
  );
}

// Missing icon component
const HelpCircle = ({ className }: { className?: string }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
  </svg>
);
