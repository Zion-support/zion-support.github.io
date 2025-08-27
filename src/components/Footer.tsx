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
  Factory,
  Truck,
  Eye,
  TestTube,
  Dna,
  ShoppingCart,
  Target,
  Cpu,
  BarChart3,
  FileText,
  Heart as HealthIcon,
  TrendingUp as FinanceIcon,
  Building as GovernmentIcon,
  Zap as EnergyIcon,
  Truck as TransportIcon,
  Home as RealEstateIcon,
  Video as MediaIcon,
  Network,
  Handshake,
  HelpCircle,
  Server,
  Radio,
  Smartphone
} from 'lucide-react';

const footerNavigation = {
  services: {
    title: 'Core Services',
    items: [
      { name: 'AI & Analytics', href: '/services/ai-analytics', icon: Brain, description: 'Machine learning and data insights' },
      { name: 'Cybersecurity', href: '/services/cybersecurity', icon: Shield, description: 'Protect your digital assets' },
      { name: 'Cloud & DevOps', href: '/services/cloud-devops', icon: Cloud, description: 'Scalable infrastructure solutions' },
      { name: 'IoT & Edge', href: '/services/iot-edge', icon: Cpu, description: 'Connected device management' },
      { name: 'Quantum Computing', href: '/services/quantum-computing', icon: Rocket, description: 'Next-generation computing' },
      { name: 'Blockchain', href: '/services/blockchain', icon: Code, description: 'Decentralized solutions' },
      { name: 'Digital Twin', href: '/services/digital-twin', icon: Globe, description: 'Virtual replica technology' },
      { name: 'Sustainability', href: '/services/sustainability', icon: Heart, description: 'Green IT solutions' }
    ],
  },
  microSaas: {
    title: 'Micro SAAS Solutions',
    items: [
      { name: 'AI Business Intelligence', href: '/micro-saas/ai-business-intelligence', icon: Brain, description: 'Smart analytics platform' },
      { name: 'Customer Experience', href: '/micro-saas/customer-experience', icon: Users, description: 'Enhanced customer engagement' },
      { name: 'Quantum Computing', href: '/micro-saas/quantum-computing', icon: Rocket, description: 'Quantum-powered solutions' },
      { name: 'Supply Chain', href: '/micro-saas/supply-chain', icon: Truck, description: 'Optimized logistics management' },
      { name: 'Cybersecurity', href: '/micro-saas/cybersecurity', icon: Shield, description: 'Advanced security tools' },
      { name: 'IoT Edge Computing', href: '/micro-saas/iot-edge', icon: Cpu, description: 'Edge device solutions' },
      { name: 'Content Creation', href: '/micro-saas/content-creation', icon: FileText, description: 'AI-powered content tools' },
      { name: 'HR Platform', href: '/micro-saas/hr-platform', icon: Users, description: 'Human resources automation' }
    ],
  },
  enterprise: {
    title: 'Enterprise Solutions',
    items: [
      { name: 'Cloud Migration', href: '/enterprise-solutions/cloud-migration', icon: Cloud, description: 'Enterprise cloud transformation' },
      { name: 'Digital Transformation', href: '/enterprise-solutions/digital-transformation', icon: Rocket, description: 'End-to-end transformation' },
      { name: 'Cybersecurity Framework', href: '/enterprise-solutions/cybersecurity', icon: Shield, description: 'Enterprise security solutions' },
      { name: 'Data Analytics', href: '/enterprise-solutions/data-analytics', icon: BarChart3, description: 'Enterprise data insights' },
      { name: 'Process Automation', href: '/enterprise-solutions/automation', icon: Zap, description: 'Intelligent automation' },
      { name: 'System Integration', href: '/enterprise-solutions/integration', icon: Network, description: 'Seamless integration' },
      { name: 'Infrastructure Modernization', href: '/enterprise-solutions/infrastructure', icon: Server, description: 'Modern infrastructure' },
      { name: 'Strategic Consulting', href: '/enterprise-solutions/consulting', icon: Users, description: 'Technology advisory' }
    ],
  },
  nextGenAI: {
    title: 'Next-Gen AI',
    items: [
      { name: 'Autonomous AI Systems', href: '/next-gen-ai/autonomous-systems', icon: Brain, description: 'Self-learning AI systems' },
      { name: 'Advanced NLP', href: '/next-gen-ai/nlp', icon: MessageCircle, description: 'Natural language processing' },
      { name: 'Computer Vision AI', href: '/next-gen-ai/computer-vision', icon: Eye, description: 'Advanced visual AI' },
      { name: 'AI Ethics Platform', href: '/next-gen-ai/ethics', icon: Shield, description: 'Responsible AI development' },
      { name: 'Quantum-Classical AI', href: '/next-gen-ai/quantum-ai', icon: Rocket, description: 'Hybrid quantum AI' },
      { name: 'Federated Learning', href: '/next-gen-ai/federated-learning', icon: Network, description: 'Privacy-preserving AI' },
      { name: 'AI Research Platform', href: '/next-gen-ai/research', icon: TestTube, description: 'AI research tools' },
      { name: 'AI Optimization Engine', href: '/next-gen-ai/optimization', icon: Target, description: 'Advanced optimization' }
    ],
  },
  industrySolutions: {
    title: 'Industry Solutions',
    items: [
      { name: 'Healthcare AI', href: '/industry-solutions/healthcare', icon: HealthIcon, description: 'AI-powered healthcare' },
      { name: 'FinTech Solutions', href: '/industry-solutions/fintech', icon: FinanceIcon, description: 'Financial technology' },
      { name: 'Smart Manufacturing', href: '/industry-solutions/manufacturing', icon: Factory, description: 'IoT manufacturing' },
      { name: 'Retail AI Platform', href: '/industry-solutions/retail', icon: ShoppingCart, description: 'AI retail solutions' },
      { name: 'Education Technology', href: '/industry-solutions/education', icon: BookOpen, description: 'EdTech platform' },
      { name: 'Government Solutions', href: '/industry-solutions/government', icon: GovernmentIcon, description: 'Government tech' },
      { name: 'Energy Optimization', href: '/industry-solutions/energy', icon: EnergyIcon, description: 'Energy management' },
      { name: 'Transportation & Logistics', href: '/industry-solutions/transportation', icon: TransportIcon, description: 'Smart logistics' }
    ],
  },
  iotEdge: {
    title: 'IoT & Edge Computing',
    items: [
      { name: 'Smart City Platform', href: '/iot-edge/smart-city', icon: Building, description: 'Smart city solutions' },
      { name: 'Industrial IoT Suite', href: '/iot-edge/industrial-iot', icon: Factory, description: 'Industrial IoT' },
      { name: 'Edge AI Platform', href: '/iot-edge/edge-ai', icon: Cpu, description: 'Edge AI computing' },
      { name: 'Connected Device Management', href: '/iot-edge/device-management', icon: Smartphone, description: 'IoT device management' },
      { name: 'Sensor Network Platform', href: '/iot-edge/sensor-networks', icon: Radio, description: 'Sensor networks' },
      { name: 'Edge Computing Infrastructure', href: '/iot-edge/edge-infrastructure', icon: Server, description: 'Edge infrastructure' },
      { name: 'IoT Security Platform', href: '/iot-edge/iot-security', icon: Shield, description: 'IoT security' },
      { name: 'IoT Data Analytics', href: '/iot-edge/iot-analytics', icon: BarChart3, description: 'IoT analytics' }
    ],
  },
  company: {
    title: 'Company',
    items: [
      { name: 'About Us', href: '/about', icon: Users, description: 'Learn our story' },
      { name: 'Blog', href: '/blog', icon: FileText, description: 'Latest insights' },
      { name: 'Partners', href: '/partners', icon: Handshake, description: 'Strategic alliances' },
      { name: 'Careers', href: '/careers', icon: Users, description: 'Join our team' },
      { name: 'Contact', href: '/contact', icon: MessageCircle, description: 'Get in touch' },
      { name: 'FAQ', href: '/faq', icon: HelpCircle, description: 'Common questions' },
      { name: 'Sitemap', href: '/sitemap', icon: Globe, description: 'Site navigation' },
      { name: 'Green IT', href: '/green-it', icon: Heart, description: 'Sustainability initiatives' }
    ],
  },
  support: {
    title: 'Support & Resources',
    items: [
      { name: 'Help Center', href: '/help-center', icon: HelpCircle, description: 'Get help and support' },
      { name: 'Contact Support', href: '/contact', icon: MessageCircle, description: 'Reach our team' },
      { name: 'Terms of Service', href: '/terms', icon: FileText, description: 'Legal terms' },
      { name: 'Privacy Policy', href: '/privacy', icon: Shield, description: 'Data protection' },
      { name: 'Security', href: '/security', icon: SecurityIcon, description: 'Security practices' },
      { name: 'System Status', href: '/status', icon: CheckCircle, description: 'Service status' },
      { name: 'Research & Development', href: '/research-development', icon: TestTube, description: 'R&D initiatives' },
      { name: 'News', href: '/news', icon: TrendingUp, description: 'Latest updates' }
    ],
  },
};

const socialLinks = [
  { name: 'Twitter', href: 'https://twitter.com/ziontechgroup', icon: Twitter, color: 'hover:text-blue-400' },
  { name: 'LinkedIn', href: 'https://linkedin.com/company/ziontechgroup', icon: Linkedin, color: 'hover:text-blue-600' },
  { name: 'Facebook', href: 'https://facebook.com/ziontechgroup', icon: Facebook, color: 'hover:text-blue-500' },
  { name: 'Instagram', href: 'https://instagram.com/ziontechgroup', icon: Instagram, color: 'hover:text-pink-500' },
  { name: 'GitHub', href: 'https://github.com/ziontechgroup', icon: Github, color: 'hover:text-gray-400' },
];

const contactInfo = {
  phone: '+1 302 464 0950',
  email: 'kleber@ziontechgroup.com',
  address: '364 E Main St STE 1008 Middletown DE 19709',
  website: 'https://ziontechgroup.com'
};

export function Footer() {
  const [email, setEmail] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email.trim()) {
      setIsSubscribed(true);
      setEmail('');
      // Here you would typically send the email to your backend
      setTimeout(() => setIsSubscribed(false), 3000);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative bg-black text-white overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-zion-slate via-zion-purple to-zion-slate opacity-20"></div>
        <div className="absolute top-0 left-0 w-full h-full">
          <div className="absolute top-20 left-20 w-32 h-32 border border-zion-cyan/20 rounded-full animate-pulse"></div>
          <div className="absolute bottom-20 right-20 w-48 h-48 border border-zion-purple/20 rounded-full animate-pulse delay-1000"></div>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-zion-blue-light rounded-full mix-blend-multiply filter blur-xl opacity-10 animate-blob"></div>
        </div>
      </div>

      <div className="relative z-10">
        {/* Main footer content */}
        <div className="container-responsive py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 gap-8">
            {/* Company info */}
            <div className="lg:col-span-1 xl:col-span-1">
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-12 h-12 bg-gradient-to-br from-zion-cyan to-zion-blue rounded-lg flex items-center justify-center">
                  <Rocket className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white">Zion Tech Group</h3>
                  <p className="text-sm text-zion-cyan font-mono">Innovating Tomorrow</p>
                </div>
              </div>
              
              <p className="text-gray-300 mb-6 leading-relaxed">
                Leading the future of technology with cutting-edge AI, quantum computing, and innovative solutions that transform businesses and industries.
              </p>

              {/* Contact info */}
              <div className="space-y-3 mb-6">
                <div className="flex items-center space-x-3 text-gray-300">
                  <Phone className="w-4 h-4 text-zion-cyan" />
                  <span>{contactInfo.phone}</span>
                </div>
                <div className="flex items-center space-x-3 text-gray-300">
                  <Mail className="w-4 h-4 text-zion-cyan" />
                  <span>{contactInfo.email}</span>
                </div>
                <div className="flex items-start space-x-3 text-gray-300">
                  <MapPin className="w-4 h-4 text-zion-cyan mt-1" />
                  <span>{contactInfo.address}</span>
                </div>
                <div className="flex items-center space-x-3 text-gray-300">
                  <Globe className="w-4 h-4 text-zion-cyan" />
                  <a 
                    href={contactInfo.website} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="hover:text-zion-cyan transition-colors"
                  >
                    {contactInfo.website.replace('https://', '')}
                  </a>
                </div>
              </div>

              {/* Social links */}
              <div className="flex space-x-4">
                {socialLinks.map((social) => (
                  <a
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center text-gray-400 transition-all duration-300 hover:bg-zion-cyan/20 ${social.color}`}
                  >
                    <social.icon className="w-5 h-5" />
                  </a>
                ))}
              </div>
            </div>

            {/* Navigation sections */}
            {Object.entries(footerNavigation).map(([key, section]) => (
              <div key={key} className="space-y-4">
                <h3 className="text-lg font-semibold text-zion-cyan flex items-center space-x-2">
                  {section.icon ? <section.icon className="w-5 h-5" /> : <Users className="w-5 h-5" />}
                  <span>{section.title}</span>
                </h3>
                <ul className="space-y-2">
                  {section.items.map((item) => (
                    <li key={item.name}>
                      <Link
                        to={item.href}
                        className="flex items-center space-x-2 text-gray-300 hover:text-zion-cyan transition-colors duration-300 group"
                      >
                        <item.icon className="w-4 h-4 text-zion-cyan group-hover:scale-110 transition-transform duration-200" />
                        <span className="text-sm">{item.name}</span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Newsletter section */}
          <div className="mt-16 pt-8 border-t border-zion-cyan/20">
            <div className="max-w-2xl mx-auto text-center">
              <h3 className="text-2xl font-bold text-white mb-4">Stay Updated with Zion Tech</h3>
              <p className="text-gray-300 mb-6">
                Get the latest insights on AI, quantum computing, and emerging technologies delivered to your inbox.
              </p>
              
              <form onSubmit={handleNewsletterSubmit} className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                <input
                  type="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="flex-1 px-4 py-3 bg-white/10 border border-zion-cyan/30 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-zion-cyan focus:bg-white/20 transition-all duration-300"
                  required
                />
                <button
                  type="submit"
                  className="futuristic-btn whitespace-nowrap"
                >
                  Subscribe
                </button>
              </form>

              {isSubscribed && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="mt-4 text-zion-cyan flex items-center justify-center space-x-2"
                >
                  <CheckCircle className="w-5 h-5" />
                  <span>Successfully subscribed!</span>
                </motion.div>
              )}
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-zion-cyan/20 bg-black/50">
          <div className="container-responsive py-6">
            <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
              <div className="flex items-center space-x-6 text-sm text-gray-400">
                <span>&copy; 2025 Zion Tech Group. All rights reserved.</span>
                <Link to="/privacy" className="hover:text-zion-cyan transition-colors">Privacy Policy</Link>
                <Link to="/terms" className="hover:text-zion-cyan transition-colors">Terms of Service</Link>
              </div>
              
              <div className="flex items-center space-x-4">
                <div className="flex items-center space-x-2 text-sm text-gray-400">
                  <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                  <span>All systems operational</span>
                </div>
                
                <button
                  onClick={scrollToTop}
                  className="w-10 h-10 bg-zion-cyan/20 border border-zion-cyan/30 rounded-lg flex items-center justify-center text-zion-cyan hover:bg-zion-cyan/30 hover:border-zion-cyan/50 transition-all duration-300 group"
                >
                  <ArrowUp className="w-5 h-5 group-hover:-translate-y-1 transition-transform duration-300" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
