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

  return (
    <footer className="bg-futuristic border-t border-zion-cyan/20 pt-20 pb-8 relative overflow-hidden">
      {/* Enhanced animated background elements */}
      <div className="absolute inset-0 opacity-15">
        <div className="absolute top-20 left-20 w-40 h-40 border border-zion-cyan rounded-full animate-pulse neon-glow"></div>
        <div className="absolute bottom-32 right-32 w-32 h-32 border border-zion-purple rounded-full animate-pulse delay-1000 neon-glow"></div>
        <div className="absolute top-1/2 left-1/2 w-24 h-24 border border-zion-blue rounded-full animate-pulse delay-2000 neon-glow"></div>
        <div className="absolute top-40 right-40 w-16 h-16 border border-zion-cyan rounded-full animate-pulse delay-3000 neon-glow"></div>
        <div className="absolute bottom-40 left-40 w-20 h-20 border border-zion-pink rounded-full animate-pulse delay-4000 neon-glow"></div>
      </div>
      
      {/* Matrix rain effect */}
      <div className="absolute inset-0 matrix-bg opacity-5"></div>
      
      {/* Particle field */}
      <div className="absolute inset-0 particle-field opacity-20"></div>

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
                <div className="w-12 h-12 bg-gradient-to-br from-zion-cyan via-zion-purple to-zion-blue rounded-xl flex items-center justify-center relative neon-glow">
                  <span className="text-2xl font-bold text-white">Z</span>
                  <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-white/0 via-white/20 to-white/0 opacity-0 hover:opacity-100 transition-opacity duration-300 shimmer-effect"></div>
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
              The world's first free marketplace dedicated to high-tech and artificial intelligence.
              Connecting innovators, talent, and cutting-edge technology worldwide.
            </motion.p>

            {/* Contact info */}
            <motion.div 
              className="space-y-4 mb-8"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div className="flex items-center gap-3 text-zion-slate-light hover:text-zion-cyan transition-colors">
                <Phone className="w-4 h-4 text-zion-cyan" />
                <a href={`tel:${contactInfo.phone}`} className="hover:text-zion-cyan">
                  {contactInfo.phone}
                </a>
              </div>
              <div className="flex items-center gap-3 text-zion-slate-light hover:text-zion-cyan transition-colors">
                <Mail className="w-4 h-4 text-zion-cyan" />
                <a href={`mailto:${contactInfo.email}`} className="hover:text-zion-cyan">
                  {contactInfo.email}
                </a>
              </div>
              <div className="flex items-center gap-3 text-zion-slate-light">
                <MapPin className="w-4 h-4 text-zion-cyan" />
                <span>{contactInfo.address}</span>
              </div>
              <div className="flex items-center gap-3 text-zion-slate-light hover:text-zion-cyan transition-colors">
                <Globe className="w-4 h-4 text-zion-cyan" />
                <a href={contactInfo.website} target="_blank" rel="noopener noreferrer" className="hover:text-zion-cyan">
                  {contactInfo.website}
                </a>
              </div>
            </motion.div>

            {/* Social links */}
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
                  className="p-2 text-zion-slate-light hover:text-zion-cyan hover:bg-zion-cyan/10 rounded-lg transition-all duration-300 hover:scale-110 relative group"
                >
                  <social.icon className="w-5 h-5" />
                  <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-zion-cyan/0 via-zion-cyan/10 to-zion-cyan/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </a>
              ))}
            </motion.div>

            {/* Quick contact buttons */}
            <motion.div 
              className="flex flex-col sm:flex-row gap-3 mt-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <a
                href="tel:+13024640950"
                className="inline-flex items-center justify-center px-4 py-2 bg-gradient-to-r from-zion-cyan to-zion-blue text-white rounded-lg hover:from-zion-blue hover:to-zion-cyan transition-all duration-300 hover:scale-105 text-sm font-medium"
              >
                <Phone className="w-4 h-4 mr-2" />
                Call Now
              </a>
              <a
                href="mailto:kleber@ziontechgroup.com"
                className="inline-flex items-center justify-center px-4 py-2 border border-zion-cyan text-zion-cyan rounded-lg hover:bg-zion-cyan hover:text-white transition-all duration-300 hover:scale-105 text-sm font-medium"
              >
                <Mail className="w-4 h-4 mr-2" />
                Email Us
              </a>
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
                {section.title === 'Emerging Technologies' && <Rocket className="w-5 h-5 text-zion-green" />}
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

        {/* Technology Insights Section */}
        <motion.div 
          className="py-12 border-t border-zion-cyan/20"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-white mb-4">
              <span className="text-gradient neon-text-cyan">Technology Insights & Research</span>
            </h3>
            <p className="text-zion-slate-light max-w-3xl mx-auto">
              Stay informed about the latest breakthroughs in AI, Quantum Computing, Blockchain, and emerging technologies
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {[
              { title: "AI Research", description: "Latest developments in artificial intelligence and machine learning", icon: Brain, color: "from-zion-cyan to-zion-blue" },
              { title: "Quantum Breakthroughs", description: "Advances in quantum computing and quantum algorithms", icon: Rocket, color: "from-zion-purple to-zion-pink" },
              { title: "Blockchain Innovation", description: "Emerging blockchain technologies and applications", icon: Lock, color: "from-zion-green to-zion-cyan" }
            ].map((insight, index) => (
              <motion.div
                key={insight.title}
                className="text-center group"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
                whileHover={{ y: -5 }}
              >
                <div className={`w-16 h-16 bg-gradient-to-r ${insight.color} rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  <insight.icon className="w-8 h-8 text-white" />
                </div>
                
                <h4 className="text-lg font-bold text-white mb-2 group-hover:text-zion-cyan transition-colors duration-300">
                  {insight.title}
                </h4>
                
                <p className="text-zion-slate-light text-sm leading-relaxed">
                  {insight.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Bottom section */}
        <motion.div 
          className="pt-8 border-t border-zion-cyan/20 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          <div className="flex items-center space-x-4 text-zion-slate-light text-sm">
            <span>&copy; 2025 Zion Tech Group. All rights reserved.</span>
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

        {/* Enhanced Scroll to top button */}
        <motion.button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 p-3 bg-gradient-to-r from-zion-cyan to-zion-purple text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 z-50 neon-glow hover:shadow-zion-cyan/50"
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 1 }}
          whileHover={{ y: -5 }}
        >
          <ArrowUp className="w-5 h-5" />
          <div className="absolute inset-0 rounded-full bg-gradient-to-r from-white/0 via-white/20 to-white/0 opacity-0 hover:opacity-100 transition-opacity duration-300 shimmer-effect"></div>
        </motion.button>
      </div>
    </footer>
  );
      </motion.div>

      {/* Scroll to Top Button */}
      <motion.button
        onClick={scrollToTop}
        className="fixed bottom-8 right-8 w-12 h-12 bg-zion-purple hover:bg-zion-purple/80 text-white rounded-full shadow-lg flex items-center justify-center transition-all duration-300 hover:scale-110 z-50"
        whileHover={{ y: -2 }}
        whileTap={{ scale: 0.95 }}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1 }}
      >
        <ArrowUp className="h-5 w-5" />
      </motion.button>
    </footer>
  );
};
=======
}
