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
      { name: 'AI & Analytics', href: '/services/ai-analytics', icon: Brain },
      { name: 'Cybersecurity', href: '/services/cybersecurity', icon: Shield },
      { name: 'Cloud & DevOps', href: '/services/cloud-devops', icon: Cloud },
      { name: 'IoT & Edge', href: '/services/iot-edge', icon: Zap },
      { name: 'Quantum Computing', href: '/services/quantum-computing', icon: Rocket },
      { name: 'Blockchain', href: '/services/blockchain', icon: Code },
      { name: 'Digital Twin', href: '/services/digital-twin', icon: Building },
      { name: 'Sustainability', href: '/services/sustainability', icon: Heart }
    ],
  },
  microSaas: {
    title: 'Micro SAAS',
    items: [
      { name: 'AI Business Intelligence', href: '/micro-saas/ai-business-intelligence' },
      { name: 'Customer Experience', href: '/micro-saas/customer-experience' },
      { name: 'Quantum Computing', href: '/micro-saas/quantum-computing' },
      { name: 'Supply Chain', href: '/micro-saas/supply-chain' },
      { name: 'Cybersecurity', href: '/micro-saas/cybersecurity' },
      { name: 'IoT Edge Computing', href: '/micro-saas/iot-edge' },
      { name: 'Content Creation', href: '/micro-saas/content-creation' },
      { name: 'HR Platform', href: '/micro-saas/hr-platform' }
    ],
  },
  marketplace: {
    title: 'Marketplace',
    items: [
      { name: 'Products', href: '/marketplace/products' },
      { name: 'Services', href: '/services' },
      { name: 'Talent', href: '/talent' },
      { name: 'Equipment', href: '/equipment' },
      { name: 'Categories', href: '/marketplace' },
      { name: 'Green IT', href: '/green-it' },
      { name: 'IT Onsite Services', href: '/it-onsite-services' },
    ],
  },
  company: {
    title: 'Company',
    items: [
      { name: 'About Us', href: '/about' },
      { name: 'Blog', href: '/blog' },
      { name: 'Partners', href: '/partners' },
      { name: 'Careers', href: '/careers' },
      { name: 'Contact', href: '/contact' },
      { name: 'FAQ', href: '/faq' },
      { name: 'Sitemap', href: '/sitemap' },
    ],
  },
  support: {
    title: 'Support & Resources',
    items: [
      { name: 'Help Center', href: '/help' },
      { name: 'Contact Support', href: '/contact' },
      { name: 'Terms of Service', href: '/terms' },
      { name: 'Privacy Policy', href: '/privacy' },
      { name: 'Security', href: '/security' },
      { name: 'System Status', href: '/status' },
    ],
  },
};

const socialLinks = [
  { name: 'Twitter', href: 'https://twitter.com/ziontechgroup', icon: Twitter },
  { name: 'LinkedIn', href: 'https://www.linkedin.com/company/zion-marketplace', icon: Linkedin },
  { name: 'Facebook', href: 'https://www.facebook.com/zionmarketplace', icon: Facebook },
  { name: 'Instagram', href: 'https://instagram.com/ziontechgroup', icon: Instagram },
  { name: 'GitHub', href: 'https://github.com/ziontechgroup', icon: Github },
];

// Enhanced footer sections with comprehensive service links
const footerSections = [
  {
    title: "Services",
    links: [
      { label: "AI Solutions", path: "/services/ai" },
      { label: "Cloud & DevOps", path: "/services/cloud" },
      { label: "Cybersecurity", path: "/services/cybersecurity" },
      { label: "IT Infrastructure", path: "/services/infrastructure" },
      { label: "Digital Transformation", path: "/services/transformation" },
      { label: "IT Consulting", path: "/services/consulting" }
    ]
  },
  {
    title: "Company",
    links: [
      { label: "About Us", path: "/about" },
      { label: "Our Team", path: "/about" },
      { label: "Careers", path: "/careers" },
      { label: "Contact", path: "/contact" }
    ]
  },
  {
    title: "Resources",
    links: [
      { label: "Services Overview", path: "/services" },
      { label: "Contact Us", path: "/contact" },
      { label: "Careers", path: "/careers" }
    ]
  },
  {
    title: "Legal",
    links: [
      { label: "Privacy Policy", path: "/privacy" },
      { label: "Terms of Service", path: "/terms" },
      { label: "Contact Support", path: "/contact" }
    ]
  }
];

// Comprehensive contact information
const contactInfo = [
  { icon: Mail, label: "Email", value: "kleber@ziontechgroup.com", href: "mailto:kleber@ziontechgroup.com" },
  { icon: Phone, label: "Phone", value: "+1 302 464 0950", href: "tel:+13024640950" },
  { icon: MapPin, label: "Address", value: "364 E Main St STE 1008, Middletown DE 19709", href: "#" },
  { icon: Globe, label: "Website", value: "ziontechgroup.com", href: "https://ziontechgroup.com" }
];

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-futuristic border-t border-zion-cyan/20 pt-20 pb-8 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-20 w-40 h-40 border border-zion-cyan rounded-full animate-pulse"></div>
        <div className="absolute bottom-32 right-32 w-32 h-32 border border-zion-purple rounded-full animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 w-24 h-24 border border-zion-blue rounded-full animate-pulse delay-2000"></div>
        <div className="absolute top-40 right-40 w-16 h-16 border border-zion-cyan rounded-full animate-pulse delay-3000"></div>
      </div>

      <div className="container-responsive relative z-10">
        {/* Main footer content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8 mb-12">
          {/* Company info */}
          <div className="lg:col-span-2">
            <motion.div 
              className="mb-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-12 h-12 bg-gradient-to-br from-zion-cyan via-zion-purple to-zion-blue rounded-xl flex items-center justify-center">
                  <span className="text-2xl font-bold text-white">Z</span>
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gradient">ZION TECH GROUP</h3>
                  <p className="text-sm text-zion-slate-light">Innovation • Intelligence • Impact</p>
                </div>
              </div>
            </motion.div>
            
            <motion.p 
              className="text-zion-slate-light mb-8 max-w-sm leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              Empowering businesses with cutting-edge technology solutions. From AI and quantum computing to sustainable IT infrastructure.
            </motion.p>

            {/* Contact Information */}
            <motion.div 
              className="space-y-3 mb-8"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              {contactInfo.map((contact, index) => (
                <div key={index} className="flex items-center space-x-3 text-zion-slate-light">
                  <contact.icon className="w-4 h-4 text-zion-cyan" />
                  <a 
                    href={contact.href} 
                    className="hover:text-zion-cyan transition-colors duration-200"
                    target={contact.href.startsWith('http') ? '_blank' : undefined}
                    rel={contact.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                  >
                    {contact.value}
                  </a>
                </div>
              ))}
            </motion.div>

            {/* Social Links */}
            <motion.div 
              className="flex space-x-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-zion-slate-dark border border-zion-cyan/20 rounded-lg flex items-center justify-center text-zion-slate-light hover:text-zion-cyan hover:border-zion-cyan transition-all duration-300 hover:scale-110"
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </motion.div>
          </div>

          {/* Navigation sections */}
          {Object.entries(footerNavigation).map(([key, section], index) => (
            <motion.div
              key={key}
              className="space-y-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 + index * 0.1 }}
            >
              <h4 className="text-lg font-semibold text-white flex items-center gap-2">
                {section.title === 'Services' && <Zap className="w-5 h-5 text-zion-cyan" />}
                {section.title === 'Micro SAAS' && <Code className="w-5 h-5 text-zion-purple" />}
                {section.title === 'Marketplace' && <Building className="w-5 h-5 text-zion-blue" />}
                {section.title === 'Company' && <Users className="w-5 h-5 text-zion-cyan" />}
                {section.title === 'Support & Resources' && <Award className="w-5 h-5 text-zion-purple" />}
                {section.title}
              </h4>
              <ul className="space-y-2">
                {section.items.map((item) => (
                  <li key={item.name}>
                    <Link
                      to={item.href}
                      className="text-zion-slate-light hover:text-zion-cyan transition-colors duration-200 flex items-center gap-2 group"
                    >
                      {item.icon && <item.icon className="w-3 h-3 group-hover:text-zion-cyan" />}
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Bottom section */}
        <motion.div 
          className="pt-8 border-t border-zion-cyan/20 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <div className="flex items-center space-x-4 text-zion-slate-light text-sm">
            <span>&copy; {currentYear} Zion Tech Group. All rights reserved.</span>
            <span className="hidden sm:inline">•</span>
            <span className="hidden sm:inline">Made with <Heart className="w-4 h-4 inline text-zion-cyan" /> for innovation</span>
          </div>
          
          <div className="flex items-center space-x-4">
            <Link to="/privacy" className="text-zion-slate-light hover:text-zion-cyan transition-colors text-sm">
              Privacy Policy
            </Link>
            <span className="text-zion-slate-light">•</span>
            <Link to="/terms" className="text-zion-slate-light hover:text-zion-cyan transition-colors text-sm">
              Terms of Service
            </Link>
            <span className="text-zion-slate-light">•</span>
            <Link to="/cookies" className="text-zion-slate-light hover:text-zion-cyan transition-colors text-sm">
              Cookies
            </Link>
          </div>
        </motion.div>

        {/* Scroll to top button */}
        <motion.button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 p-3 bg-gradient-to-r from-zion-cyan to-zion-purple text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 z-50"
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 1 }}
          whileHover={{ y: -5 }}
        >
          <ArrowUp className="w-5 h-5" />
        </motion.button>
      </div>
    </footer>
  );
}
