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
  Brain,
  Cloud,
  Shield,
  Rocket,
  Sparkles,
  Star,
  Zap,
  Cpu,
  Leaf
} from 'lucide-react';
import { CONTACT_INFO } from '@/data/enhancedServices2025';

const footerNavigation = {
  services: {
    title: 'AI & ML Services',
    icon: Brain,
    items: [
      { name: 'AI Autonomous Business Manager', href: '/services/ai-autonomous-business-manager', price: '$4,999' },
      { name: 'AI Content Factory Enterprise', href: '/services/ai-content-factory-enterprise', price: '$899' },
      { name: 'AI Cybersecurity Sentinel', href: '/services/ai-cybersecurity-sentinel', price: '$1,899' },
      { name: 'AI Biomedical Research Platform', href: '/services/ai-biomedical-research-platform', price: '$6,999' },
      { name: 'Quantum AI Financial Trading', href: '/services/quantum-ai-financial-trading', price: '$8,999' },
      { name: 'AI Legal Research Assistant', href: '/services/ai-legal-research-assistant', price: '$1,299' },
      { name: 'AI Education Professor', href: '/services/ai-education-professor', price: '$899' },
      { name: 'AI Manufacturing Optimization', href: '/services/ai-manufacturing-optimization', price: '$2,499' }
    ],
  },
  cloudDevOps: {
    title: 'Cloud & DevOps',
    icon: Cloud,
    items: [
      { name: 'Quantum Cloud Infrastructure', href: '/services/quantum-cloud-infrastructure', price: '$3,999' },
      { name: 'Autonomous DevOps Platform', href: '/services/autonomous-devops-platform', price: '$3,999' },
      { name: 'Cloud Migration Enterprise', href: '/services/cloud-migration-enterprise', price: '$15,999' },
      { name: 'IoT Edge Intelligence Platform', href: '/services/iot-edge-intelligence-platform', price: '$2,499' },
      { name: 'DevOps Automation Suite', href: '/services/devops-automation-suite', price: '$2,999' }
    ],
  },
  emergingTech: {
    title: 'Emerging Tech',
    icon: Sparkles,
    items: [
      { name: 'Quantum AI Computing Platform', href: '/services/quantum-ai-computing-platform', price: '$15,999' },
      { name: 'Space Technology AI Platform', href: '/services/space-technology-ai-platform', price: '$8,999' },
      { name: 'Advanced Robotics & Automation', href: '/services/advanced-robotics-automation-platform', price: '$6,999' },
      { name: 'Neuromorphic Computing', href: '/services/neuromorphic-computing-platform', price: '$12,999' },
      { name: 'Synthetic Biology AI', href: '/services/synthetic-biology-ai-platform', price: '$9,999' },
      { name: 'Advanced Materials AI', href: '/services/advanced-materials-ai-platform', price: '$7,999' },
      { name: 'Brain-Computer Interface', href: '/services/brain-computer-interface-ai-platform', price: '$14,999' },
      { name: 'Fusion Energy AI', href: '/services/fusion-energy-ai-platform', price: '$19,999' },
      { name: 'Quantum Internet Platform', href: '/services/quantum-internet-platform', price: '$11,999' }
    ],
  },
  solutions: {
    title: 'Industry Solutions',
    icon: Shield,
    items: [
      { name: 'AI Healthcare Diagnostic Platform', href: '/services/ai-healthcare-diagnostic-platform', price: '$8,999' },
      { name: 'AI Financial Services Platform', href: '/services/ai-financial-services-platform', price: '$5,999' },
      { name: 'AI Manufacturing Suite', href: '/services/ai-manufacturing-suite', price: '$3,999' },
      { name: 'AI Retail Intelligence Platform', href: '/services/ai-retail-intelligence-platform', price: '$2,499' },
      { name: 'AI Transportation & Logistics', href: '/services/ai-transportation-logistics-platform', price: '$3,499' },
      { name: 'AI Energy & Utilities Platform', href: '/services/ai-energy-utilities-platform', price: '$4,999' },
      { name: 'AI Real Estate Platform', href: '/services/ai-real-estate-platform', price: '$1,999' },
      { name: 'AI Agriculture Platform', href: '/services/ai-agriculture-platform', price: '$1,499' },
      { name: 'AI Government Solutions', href: '/services/ai-government-solutions', price: '$7,999' },
      { name: 'AI Education Platform', href: '/services/ai-education-platform', price: '$1,299' }
    ],
  },
  specialized: {
    title: 'Specialized Services',
    icon: Star,
    items: [
      { name: 'AI Climate Prediction Engine', href: '/services/ai-climate-prediction-engine', price: '$1,799' },
      { name: 'Blockchain Governance Platform', href: '/services/blockchain-governance-platform', price: '$1,699' },
      { name: 'DevOps Automation Suite', href: '/services/devops-automation-suite', price: '$2,999' },
      { name: 'Data Privacy & Compliance', href: '/services/data-privacy-compliance', price: '$1,999' },
      { name: 'Green Tech & Sustainability', href: '/services/green-tech-sustainability', price: '$2,499' },
      { name: 'Remote Work & Collaboration', href: '/services/remote-work-collaboration', price: '$1,299' }
    ],
  },
  company: {
    title: 'Company',
    icon: Globe,
    items: [
      { name: 'About Us', href: '/about' },
      { name: 'Leadership', href: '/leadership' },
      { name: 'Careers', href: '/careers' },
      { name: 'News & Press', href: '/news' },
      { name: 'Case Studies', href: '/case-studies' },
      { name: 'Partners', href: '/partners' },
      { name: 'Contact', href: '/contact' }
    ],
  },
  resources: {
    title: 'Resources',
    icon: Star,
    items: [
      { name: 'Blog', href: '/blog' },
      { name: 'Documentation', href: '/docs' },
      { name: 'API Reference', href: '/api' },
      { name: 'Help Center', href: '/help' },
      { name: 'Training', href: '/training' },
      { name: 'Webinars', href: '/webinars' },
      { name: 'White Papers', href: '/white-papers' },
      { name: 'Research', href: '/research' }
    ],
  },
  support: {
    title: 'Support & Contact',
    icon: Zap,
    items: [
      { name: 'Get Quote', href: '/request-quote' },
      { name: 'Contact Support', href: '/contact' },
      { name: 'Sales Inquiries', href: '/contact?type=sales' },
      { name: 'Partnerships', href: '/contact?type=partnership' },
      { name: 'Terms of Service', href: '/terms' },
      { name: 'Privacy Policy', href: '/privacy' },
      { name: 'Security', href: '/security' },
      { name: 'System Status', href: '/status' }
    ],
  },
};

const socialLinks = [
  { name: 'LinkedIn', href: CONTACT_INFO.social.linkedin, icon: Linkedin },
  { name: 'Twitter', href: CONTACT_INFO.social.twitter, icon: Twitter },
  { name: 'Facebook', href: CONTACT_INFO.social.facebook, icon: Facebook },
  { name: 'Instagram', href: 'https://instagram.com/ziontechgroup', icon: Instagram },
  { name: 'GitHub', href: 'https://github.com/ziontechgroup', icon: Github },
];

export function EnhancedFooter() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-gradient-to-br from-zion-slate-dark via-zion-slate to-zion-slate-dark border-t border-zion-cyan/20 pt-20 pb-8 relative overflow-hidden">
      {/* Futuristic background elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 w-32 h-32 border border-zion-cyan rounded-full"></div>
        <div className="absolute bottom-20 right-20 w-24 h-24 border border-zion-purple rounded-full"></div>
        <div className="absolute top-1/2 left-1/2 w-16 h-16 border border-zion-cyan-light rounded-full"></div>
        <div className="absolute top-1/3 right-1/3 w-20 h-20 border border-zion-blue rounded-full"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Main footer content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-8 gap-8 mb-16">
          {/* Company info */}
          <div className="lg:col-span-2">
            <div className="mb-6">
              <motion.div
                className="flex items-center space-x-3 mb-4"
                whileHover={{ scale: 1.05 }}
                transition={{ type: 'spring', stiffness: 400 }}
              >
                <div className="w-12 h-12 bg-gradient-to-br from-zion-cyan via-zion-purple to-zion-blue rounded-xl flex items-center justify-center">
                  <span className="text-2xl font-bold text-white">Z</span>
                </div>
                <div>
                  <span className="text-2xl font-bold bg-gradient-to-r from-zion-cyan via-zion-purple to-zion-blue bg-clip-text text-transparent">
                    ZION
                  </span>
                  <p className="text-sm text-zion-slate-light">TECH GROUP</p>
                </div>
              </motion.div>
            </div>
            
            <p className="text-zion-slate-light mb-6 max-w-sm leading-relaxed">
              Leading the future with cutting-edge AI, quantum computing, and emerging technologies. 
              Empowering businesses worldwide with innovative solutions and transformative capabilities.
            </p>

            {/* Contact info */}
            <div className="space-y-3 mb-6">
              <div className="flex items-center gap-3 text-zion-slate-light">
                <Phone className="w-4 h-4 text-zion-cyan" />
                <a href={`tel:${CONTACT_INFO.mobile}`} className="hover:text-zion-cyan transition-colors duration-200">
                  {CONTACT_INFO.mobile}
                </a>
              </div>
              <div className="flex items-center gap-3 text-zion-slate-light">
                <Mail className="w-4 h-4 text-zion-cyan" />
                <a href={`mailto:${CONTACT_INFO.email}`} className="hover:text-zion-cyan transition-colors duration-200">
                  {CONTACT_INFO.email}
                </a>
              </div>
              <div className="flex items-center gap-3 text-zion-slate-light">
                <MapPin className="w-4 h-4 text-zion-cyan" />
                <span>{CONTACT_INFO.address}</span>
              </div>
            </div>

            {/* Social links */}
            <div className="flex space-x-4">
              {socialLinks.map((social) => (
                <motion.a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-zion-slate/50 border border-zion-cyan/20 rounded-lg flex items-center justify-center text-zion-slate-light hover:text-zion-cyan hover:border-zion-cyan/50 transition-all duration-200"
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <social.icon className="w-4 h-4" />
                </motion.a>
              ))}
            </div>
          </div>

          {/* Navigation sections */}
          {Object.entries(footerNavigation).map(([key, section]) => (
            <div key={key} className="lg:col-span-1">
              <div className="flex items-center space-x-2 mb-4">
                <section.icon className="w-5 h-5 text-zion-cyan" />
                <h3 className="text-lg font-semibold text-zion-cyan">{section.title}</h3>
              </div>
              <ul className="space-y-2">
                {section.items.map((item) => (
                  <li key={item.name}>
                    <Link
                      to={item.href}
                      className="text-zion-slate-light hover:text-zion-cyan transition-colors duration-200 text-sm flex items-center justify-between group"
                    >
                      <span className="group-hover:translate-x-1 transition-transform duration-200">
                        {item.name}
                      </span>
                      {item.price && (
                        <span className="text-zion-cyan text-xs font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                          {item.price}
                        </span>
                      )}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Newsletter section */}
        <div className="border-t border-zion-cyan/20 pt-8 mb-8">
          <div className="max-w-2xl mx-auto text-center">
            <h3 className="text-xl font-semibold text-zion-cyan mb-2">
              Stay Ahead with Zion Tech Insights
            </h3>
            <p className="text-zion-slate-light mb-4">
              Get the latest updates on AI breakthroughs, emerging technologies, and industry insights.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-2 bg-zion-slate/50 border border-zion-cyan/20 rounded-lg text-zion-slate-light placeholder-zion-slate-light/50 focus:outline-none focus:ring-2 focus:ring-zion-cyan/50 focus:border-zion-cyan/50 transition-all duration-200"
              />
              <button className="px-6 py-2 bg-gradient-to-r from-zion-cyan to-zion-purple hover:from-zion-cyan-light hover:to-zion-purple-light text-white rounded-lg font-medium transition-all duration-200 hover:shadow-lg hover:shadow-zion-cyan/25">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        {/* Bottom footer */}
        <div className="border-t border-zion-cyan/20 pt-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center space-x-4 text-sm text-zion-slate-light">
              <span>&copy; 2025 Zion Tech Group. All rights reserved.</span>
              <span className="hidden sm:inline">•</span>
              <span className="hidden sm:inline">Made with <Heart className="w-4 h-4 inline text-red-400" /> for innovation</span>
            </div>
            
            <div className="flex items-center space-x-6 text-sm">
              <Link to="/privacy" className="text-zion-slate-light hover:text-zion-cyan transition-colors duration-200">
                Privacy Policy
              </Link>
              <Link to="/terms" className="text-zion-slate-light hover:text-zion-cyan transition-colors duration-200">
                Terms of Service
              </Link>
              <Link to="/cookies" className="text-zion-slate-light hover:text-zion-cyan transition-colors duration-200">
                Cookie Policy
              </Link>
              <Link to="/accessibility" className="text-zion-slate-light hover:text-zion-cyan transition-colors duration-200">
                Accessibility
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll to top button */}
      <motion.button
        onClick={scrollToTop}
        className="fixed bottom-8 right-8 w-12 h-12 bg-gradient-to-r from-zion-cyan to-zion-purple hover:from-zion-cyan-light hover:to-zion-purple-light text-white rounded-full shadow-lg shadow-zion-cyan/25 hover:shadow-xl hover:shadow-zion-cyan/40 transition-all duration-300 z-50"
        whileHover={{ scale: 1.1, y: -2 }}
        whileTap={{ scale: 0.95 }}
      >
        <ArrowUp className="w-6 h-6 mx-auto" />
      </motion.button>
    </footer>
  );
}

export default EnhancedFooter;