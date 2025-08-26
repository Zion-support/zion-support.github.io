import React from 'react';
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
  CheckCircle
} from 'lucide-react';

const footerNavigation = {
  services: {
    title: 'Services',
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
    title: 'Micro SAAS',
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
      { name: 'Team', href: '/team', description: 'Meet our experts' },
      { name: 'Careers', href: '/careers', description: 'Join our team' },
      { name: 'Partners', href: '/partners', description: 'Strategic partnerships' },
      { name: 'News', href: '/news', description: 'Latest updates' },
      { name: 'Blog', href: '/blog', description: 'Insights and articles' },
      { name: 'Case Studies', href: '/case-studies', description: 'Success stories' },
      { name: 'Contact', href: '/contact', description: 'Get in touch' }
    ],
  },
  support: {
    title: 'Support & Resources',
    items: [
      { name: 'Help Center', href: '/help', description: 'Documentation and guides' },
      { name: 'Contact Support', href: '/contact', description: 'Technical support' },
      { name: 'API Documentation', href: '/api-docs', description: 'Developer resources' },
      { name: 'System Status', href: '/status', description: 'Service status' },
      { name: 'Terms of Service', href: '/terms', description: 'Legal terms' },
      { name: 'Privacy Policy', href: '/privacy', description: 'Data protection' },
      { name: 'Security', href: '/security', description: 'Security information' },
      { name: 'Compliance', href: '/compliance', description: 'Regulatory compliance' }
    ],
  },
};

const socialLinks = [
  { name: 'Twitter', href: 'https://twitter.com/ziontechgroup', icon: Twitter, color: 'hover:text-blue-400' },
  { name: 'LinkedIn', href: 'https://www.linkedin.com/company/zion-marketplace', icon: Linkedin, color: 'hover:text-blue-600' },
  { name: 'Facebook', href: 'https://www.facebook.com/zionmarketplace', icon: Facebook, color: 'hover:text-blue-500' },
  { name: 'Instagram', href: 'https://instagram.com/ziontechgroup', icon: Instagram, color: 'hover:text-pink-500' },
  { name: 'GitHub', href: 'https://github.com/ziontechgroup', icon: Github, color: 'hover:text-gray-400' },
];

const contactInfo = {
  phone: '+1 302 464 0950',
  email: 'kleber@ziontechgroup.com',
  address: '364 E Main St STE 1008, Middletown DE 19709',
  website: 'https://ziontechgroup.com'
};

export function Footer() {
  return (
    <footer className="bg-black/90 backdrop-blur-md border-t border-zion-cyan/20 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-20 w-40 h-40 border border-zion-cyan rounded-full animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-32 h-32 border border-zion-purple rounded-full animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 w-24 h-24 border border-zion-blue rounded-full animate-pulse delay-2000"></div>
      </div>

      <div className="container-responsive relative z-10">
        {/* Main Footer Content */}
        <div className="py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8">
            {/* Company Info */}
            <div className="lg:col-span-2">
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-12 h-12 bg-gradient-to-r from-zion-cyan to-zion-blue rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-xl">Z</span>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white font-cyber">ZION TECH GROUP</h3>
                  <p className="text-sm text-zion-cyan font-medium">INNOVATION • TECHNOLOGY • FUTURE</p>
                </div>
              </div>
              
              <p className="text-zion-slate-light mb-6 leading-relaxed">
                Pioneering the future with cutting-edge AI solutions, quantum technology, and innovative IT services. 
                Transform your business with our comprehensive technology ecosystem.
              </p>
              
              {/* Contact Information */}
              <div className="space-y-3">
                <div className="flex items-center space-x-3 text-zion-slate-light hover:text-zion-cyan transition-colors duration-300">
                  <Phone className="w-4 h-4" />
                  <a href={`tel:${contactInfo.phone}`} className="hover:underline">
                    {contactInfo.phone}
                  </a>
                </div>
                <div className="flex items-center space-x-3 text-zion-slate-light hover:text-zion-cyan transition-colors duration-300">
                  <Mail className="w-4 h-4" />
                  <a href={`mailto:${contactInfo.email}`} className="hover:underline">
                    {contactInfo.email}
                  </a>
                </div>
                <div className="flex items-center space-x-3 text-zion-slate-light hover:text-zion-cyan transition-colors duration-300">
                  <MapPin className="w-4 h-4" />
                  <span>{contactInfo.address}</span>
                </div>
                <div className="flex items-center space-x-3 text-zion-slate-light hover:text-zion-cyan transition-colors duration-300">
                  <Globe className="w-4 h-4" />
                  <a href={contactInfo.website} target="_blank" rel="noopener noreferrer" className="hover:underline">
                    {contactInfo.website}
                  </a>
                </div>
              </div>
            </div>

            {/* Navigation Sections */}
            {Object.entries(footerNavigation).map(([key, section]) => (
              <div key={key}>
                <h4 className="text-lg font-bold text-white mb-4 font-cyber">{section.title}</h4>
                <ul className="space-y-3">
                  {section.items.map((item) => (
                    <li key={item.name}>
                      <Link
                        to={item.href}
                        className="flex items-start space-x-3 text-zion-slate-light hover:text-zion-cyan transition-colors duration-300 group"
                      >
                        <div className="w-5 h-5 bg-gradient-to-r from-zion-cyan to-zion-blue rounded flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                          <item.icon className="w-3 h-3 text-white" />
                        </div>
                        <div>
                          <div className="font-medium group-hover:text-zion-cyan transition-colors duration-300">
                            {item.name}
                          </div>
                          <div className="text-xs text-zion-slate-light mt-1 opacity-75">
                            {item.description}
                          </div>
                        </div>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-zion-cyan/20"></div>

        {/* Bottom Section */}
        <div className="py-8">
          <div className="flex flex-col lg:flex-row items-center justify-between space-y-6 lg:space-y-0">
            {/* Copyright */}
            <div className="text-center lg:text-left">
              <p className="text-zion-slate-light">
                © {new Date().getFullYear()} Zion Tech Group. All rights reserved.
              </p>
              <p className="text-sm text-zion-slate-light mt-1">
                Pioneering the future of technology
              </p>
            </div>

            {/* Social Links */}
            <div className="flex items-center space-x-4">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`w-10 h-10 bg-zion-slate-dark/50 border border-zion-cyan/20 rounded-lg flex items-center justify-center text-zion-slate-light ${social.color} hover:border-zion-cyan hover:bg-zion-cyan/10 transition-all duration-300 group`}
                  aria-label={social.name}
                >
                  <social.icon className="w-5 h-5 group-hover:scale-110 transition-transform duration-300" />
                </a>
              ))}
            </div>
          </div>

          {/* Additional Links */}
          <div className="mt-8 pt-8 border-t border-zion-cyan/20">
            <div className="flex flex-wrap justify-center gap-6 text-sm">
              <Link to="/sitemap" className="text-zion-slate-light hover:text-zion-cyan transition-colors duration-300">
                Sitemap
              </Link>
              <Link to="/accessibility" className="text-zion-slate-light hover:text-zion-cyan transition-colors duration-300">
                Accessibility
              </Link>
              <Link to="/cookies" className="text-zion-slate-light hover:text-zion-cyan transition-colors duration-300">
                Cookie Policy
              </Link>
              <Link to="/disclaimer" className="text-zion-slate-light hover:text-zion-cyan transition-colors duration-300">
                Disclaimer
              </Link>
              <Link to="/sustainability" className="text-zion-slate-light hover:text-zion-cyan transition-colors duration-300">
                Sustainability
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Back to Top Button */}
      <button
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        className="fixed bottom-8 right-8 w-12 h-12 bg-gradient-to-r from-zion-cyan to-zion-blue rounded-full flex items-center justify-center text-white shadow-lg hover:shadow-zion-cyan/50 hover:scale-110 transition-all duration-300 z-40"
        aria-label="Back to top"
      >
        <ArrowUp className="w-5 h-5" />
      </button>
    </footer>
  );
}
