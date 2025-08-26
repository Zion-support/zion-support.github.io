import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  Mail, 
  Phone, 
  MapPin, 
  Linkedin, 
  Twitter, 
  Facebook, 
  Instagram, 
  Youtube,
  ArrowUp,
  Heart,
  Shield,
  Zap,
  Users,
  Globe,
  Building,
  Award,
  Clock,
  CheckCircle,
  DollarSign,
  BookOpen,
  Cpu,
  ShoppingCart,
  Play,
  Brain,
  Cloud,
  Rocket,
  Code
} from 'lucide-react';

const footerNavigation = {
  services: {
    title: 'Services',
    items: [
      { name: 'AI & Analytics', href: '/services/ai-analytics', icon: Brain },
      { name: 'AI Finance', href: '/services/ai-finance', icon: DollarSign },
      { name: 'Cybersecurity', href: '/services/cybersecurity', icon: Shield },
      { name: 'Cloud & DevOps', href: '/services/cloud-devops', icon: Cloud },
      { name: 'IoT & Edge', href: '/services/iot-edge', icon: Zap },
      { name: 'Quantum Computing', href: '/services/quantum-computing', icon: Rocket },
      { name: 'Blockchain', href: '/services/blockchain', icon: Code },
      { name: 'Digital Twin', href: '/services/digital-twin', icon: Building },
      { name: 'Sustainability', href: '/services/sustainability', icon: Heart },
      { name: 'Education Tech', href: '/services/education-technology', icon: BookOpen },
      { name: 'Real Estate Tech', href: '/services/real-estate-technology', icon: Building },
      { name: 'Manufacturing Tech', href: '/services/manufacturing-technology', icon: Cpu },
      { name: 'Energy Tech', href: '/services/energy-technology', icon: Zap },
      { name: 'Retail Tech', href: '/services/retail-technology', icon: ShoppingCart },
      { name: 'Media Tech', href: '/services/media-technology', icon: Play }
    ],
  },
  microSaas: {
    title: 'Micro SAAS',
    items: [
      { name: 'AI Business Intelligence', href: '/micro-saas/ai-business-intelligence' },
      { name: 'AI Financial Advisory', href: '/micro-saas/ai-financial-advisory' },
      { name: 'Customer Experience', href: '/micro-saas/customer-experience' },
      { name: 'Quantum Computing', href: '/micro-saas/quantum-computing' },
      { name: 'Supply Chain', href: '/micro-saas/supply-chain' },
      { name: 'Cybersecurity', href: '/micro-saas/cybersecurity' },
      { name: 'IoT Edge Computing', href: '/micro-saas/iot-edge' },
      { name: 'Content Creation', href: '/micro-saas/content-creation' },
      { name: 'HR Platform', href: '/micro-saas/hr-platform' },
      { name: 'EdTech Learning', href: '/micro-saas/edtech-learning' },
      { name: 'Real Estate Analytics', href: '/micro-saas/real-estate-analytics' },
      { name: 'Manufacturing AI', href: '/micro-saas/manufacturing-ai' },
      { name: 'Smart Grid Energy', href: '/micro-saas/smart-grid-energy' },
      { name: 'Retail Intelligence', href: '/micro-saas/retail-intelligence' },
      { name: 'Media & Entertainment', href: '/micro-saas/media-entertainment' }
    ],
  },
  marketplace: {
    title: 'Marketplace',
    items: [
      { name: 'Products', href: '/marketplace' },
      { name: 'Services', href: '/services' },
      { name: 'Talent', href: '/talent' },
      { name: 'Equipment', href: '/equipment' },
      { name: 'Categories', href: '/categories' },
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

const contactInfo = {
  phone: '+1 302 464 0950',
  email: 'kleber@ziontechgroup.com',
  address: '364 E Main St STE 1008 Middletown DE 19709',
  website: 'https://ziontechgroup.com'
};

export function Footer() {
  const currentYear = new Date().getFullYear();

  const footerSections = [
    {
      title: "Services",
      links: [
        { name: "AI & Analytics", href: "/services/ai-analytics" },
        { name: "Cybersecurity", href: "/services/cybersecurity" },
        { name: "Cloud & DevOps", href: "/services/cloud-devops" },
        { name: "Digital Transformation", href: "/services/digital-transformation" },
        { name: "Consulting", href: "/services/consulting" }
      ]
    },
    {
      title: "Solutions",
      links: [
        { name: "Micro SAAS", href: "/micro-saas" },
        { name: "Enterprise Solutions", href: "/enterprise" },
        { name: "Startup Support", href: "/startups" },
        { name: "Government", href: "/government" },
        { name: "Healthcare", href: "/healthcare" }
      ]
    },
    {
      title: "Company",
      links: [
        { name: "About Us", href: "/about" },
        { name: "Our Team", href: "/team" },
        { name: "Careers", href: "/careers" },
        { name: "Partners", href: "/partners" },
        { name: "News & Blog", href: "/blog" }
      ]
    },
    {
      title: "Resources",
      links: [
        { name: "Case Studies", href: "/case-studies" },
        { name: "Research & Development", href: "/research-development" },
        { name: "Documentation", href: "/docs" },
        { name: "Support Center", href: "/support" },
        { name: "Contact Us", href: "/contact" }
      ]
    }
  ];

  const socialLinks = [
    { name: "LinkedIn", href: "https://linkedin.com/company/ziontechgroup", icon: Linkedin },
    { name: "Twitter", href: "https://twitter.com/ziontechgroup", icon: Twitter },
    { name: "Facebook", href: "https://facebook.com/ziontechgroup", icon: Facebook },
    { name: "Instagram", href: "https://instagram.com/ziontechgroup", icon: Instagram },
    { name: "YouTube", href: "https://youtube.com/@ziontechgroup", icon: Youtube }
  ];

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-zion-slate text-white relative overflow-hidden" role="contentinfo" aria-label="Site footer">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%23ffffff" fill-opacity="0.1"%3E%3Ccircle cx="30" cy="30" r="2"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')]"></div>
      </div>

      <div className="relative z-10">
        {/* Main footer content */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-12">
            {/* Company info */}
            <div className="lg:col-span-2">
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-12 h-12 bg-gradient-to-br from-zion-cyan to-zion-blue rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-xl">Z</span>
                </div>
                <div>
                  <h3 className="text-2xl font-bold bg-gradient-to-r from-zion-cyan to-zion-blue bg-clip-text text-transparent">
                    Zion Tech Group
                  </h3>
                  <p className="text-sm text-zion-cyan">Innovation • Intelligence • Impact</p>
                </div>
              </div>
              
              <p className="text-white/80 mb-6 leading-relaxed max-w-md">
                Pioneering the future with cutting-edge AI solutions, quantum technology, and innovative IT services. 
                We help businesses transform and thrive in the digital age.
              </p>

              {/* Contact info */}
              <div className="space-y-3">
                <div className="flex items-center space-x-3 text-white/70">
                  <Mail className="w-4 h-4 text-zion-cyan" />
                  <a href="mailto:info@ziontechgroup.com" className="hover:text-zion-cyan transition-colors duration-200">
                    info@ziontechgroup.com
                  </a>
                </div>
                <div className="flex items-center space-x-3 text-white/70">
                  <Phone className="w-4 h-4 text-zion-cyan" />
                  <a href="tel:+1-800-ZION-TECH" className="hover:text-zion-cyan transition-colors duration-200">
                    +1 (800) ZION-TECH
                  </a>
                </div>
                <div className="flex items-center space-x-3 text-white/70">
                  <MapPin className="w-4 h-4 text-zion-cyan" />
                  <span>Global Presence • Remote First</span>
                </div>
              </div>
            </div>

            {/* Footer sections */}
            {footerSections.map((section, index) => (
              <div key={section.title}>
                <h4 className="text-lg font-semibold text-white mb-4 flex items-center space-x-2">
                  {section.title === "Services" && <Zap className="w-4 h-4 text-zion-cyan" />}
                  {section.title === "Solutions" && <Globe className="w-4 h-4 text-zion-cyan" />}
                  {section.title === "Company" && <Users className="w-4 h-4 text-zion-cyan" />}
                  {section.title === "Resources" && <Shield className="w-4 h-4 text-zion-cyan" />}
                  <span>{section.title}</span>
                </h4>
                <ul className="space-y-2">
                  {section.links.map((link) => (
                    <li key={link.name}>
                      <Link
                        to={link.href}
                        className="text-white/70 hover:text-zion-cyan transition-colors duration-200 text-sm"
                      >
                        {link.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Newsletter signup */}
          <div className="mt-16 pt-8 border-t border-zion-cyan/20">
            <div className="max-w-2xl mx-auto text-center">
              <h4 className="text-xl font-semibold text-white mb-4">Stay Updated with Zion Tech</h4>
              <p className="text-white/70 mb-6">
                Get the latest insights on AI, technology trends, and digital transformation delivered to your inbox.
              </p>
              <form className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-3 bg-zion-slate/50 border border-zion-cyan/30 rounded-lg text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-zion-cyan/50 focus:border-zion-cyan/50"
                  aria-label="Email address for newsletter"
                />
                <button
                  type="submit"
                  className="px-6 py-3 bg-gradient-to-r from-zion-cyan to-zion-blue text-white rounded-lg hover:from-zion-cyan/90 hover:to-zion-blue/90 transition-all duration-200 font-semibold"
                >
                  Subscribe
                </button>
              </form>
            </div>
          </div>
        </div>

        {/* Bottom footer */}
        <div className="border-t border-zion-cyan/20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
            <div className="flex flex-col md:flex-row items-center justify-between gap-4">
              {/* Copyright and legal */}
              <div className="flex flex-col sm:flex-row items-center gap-4 text-sm text-white/60">
                <p>&copy; {currentYear} Zion Tech Group. All rights reserved.</p>
                <div className="flex items-center space-x-4">
                  <Link to="/privacy" className="hover:text-zion-cyan transition-colors duration-200">
                    Privacy Policy
                  </Link>
                  <Link to="/terms" className="hover:text-zion-cyan transition-colors duration-200">
                    Terms of Service
                  </Link>
                  <Link to="/cookies" className="hover:text-zion-cyan transition-colors duration-200">
                    Cookie Policy
                  </Link>
                </div>
              </div>

              {/* Social links */}
              <div className="flex items-center space-x-4">
                {socialLinks.map((social) => (
                  <a
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 bg-zion-slate/50 border border-zion-cyan/30 rounded-lg flex items-center justify-center text-white/70 hover:text-zion-cyan hover:border-zion-cyan/50 hover:bg-zion-cyan/10 transition-all duration-200"
                    aria-label={`Follow us on ${social.name}`}
                  >
                    <social.icon className="w-4 h-4" />
                  </a>
                ))}
              </div>
            </div>

            {/* Made with love */}
            <div className="mt-6 text-center text-sm text-white/50">
              <p className="flex items-center justify-center space-x-2">
                <span>Made with</span>
                <Heart className="w-4 h-4 text-red-400 fill-current" />
                <span>by Zion Tech Group</span>
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll to top button */}
      <motion.button
        onClick={scrollToTop}
        className="fixed bottom-8 right-8 w-12 h-12 bg-gradient-to-r from-zion-cyan to-zion-blue rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-110 focus:outline-none focus:ring-4 focus:ring-zion-cyan/50"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        aria-label="Scroll to top of page"
      >
        <ArrowUp className="w-6 h-6 text-white mx-auto" />
      </motion.button>
    </footer>
  );
}
