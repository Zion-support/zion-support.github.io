import { Link } from 'react-router-dom';
import { 
  Linkedin, 
  Twitter, 
  Github, 
  Youtube, 
  Mail, 
  Phone, 
  MapPin,
  ArrowRight,
  Sparkles,
  Shield,
  Zap,
  Brain,
  Cloud,
  Lock,
  Cpu,
  Database,
  Network,
  Code,
  BarChart3,
  Target,
  Lightbulb,
  Rocket,
  Clock,
  Heart,
  Eye,
  Target as TargetIcon
} from 'lucide-react';

export function Footer() {
  const currentYear = new Date().getFullYear();

  const footerSections = [
    {
      title: "AI & Micro SAAS",
      icon: Brain,
      color: "from-purple-500 to-pink-500",
      links: [
        { label: "AI & Autonomous Systems", path: "/services/ai-autonomous-systems" },
        { label: "AI Research Assistant", path: "/ai-autonomous-research-assistant" },
        { label: "Quantum Neural Networks", path: "/quantum-neural-network-platform" },
        { label: "Autonomous Business Platform", path: "/autonomous-business-operations-platform" },
        { label: "AI Asset Management", path: "/ai-powered-it-asset-management" },
        { label: "Quantum Technology", path: "/services/quantum-technology" },
        { label: "IT Infrastructure", path: "/services/it-infrastructure" },
        { label: "Micro SAAS Solutions", path: "/services/micro-saas-solutions" },
        { label: "Cybersecurity", path: "/services/cybersecurity" },
        { label: "SOC2 Compliance Automation", path: "/soc2-compliance-automation" },
        { label: "Industry Solutions", path: "/services/industry-solutions" },
        { label: "AI & Machine Learning", path: "/services#ai-ml" },
        { label: "Cloud & Infrastructure", path: "/services#cloud" },
        { label: "5G Enterprise Solutions", path: "/5g-enterprise-solutions" },
        { label: "Blockchain Solutions", path: "/services#blockchain" },
        { label: "IoT & Edge Computing", path: "/services#iot" }
      ]
    },
    {
      title: "Solutions",
      icon: Target,
      color: "from-blue-500 to-cyan-500",
      links: [
        { label: "Enterprise Solutions", path: "/solutions/enterprise" },
        { label: "Healthcare Solutions", path: "/solutions/healthcare" },
        { label: "Financial Solutions", path: "/solutions/financial" },
        { label: "Manufacturing Solutions", path: "/solutions/manufacturing" },
        { label: "Retail Solutions", path: "/solutions/retail" },
        { label: "Government Solutions", path: "/solutions/government" },
        { label: "Business Intelligence", path: "/services/business-intelligence" },
        { label: "Marketing Automation", path: "/services/ai-marketing" },
        { label: "HR & Recruitment", path: "/services/ai-hr" },
        { label: "Legal Tech", path: "/services/ai-legal" }
      ]
    },
    {
      title: "Emerging Tech",
      icon: Rocket,
      color: "from-purple-500 to-violet-500",
      links: [
        { label: "Quantum Computing", path: "/emerging-tech" },
        { label: "Blockchain & DeFi", path: "/emerging-tech" },
        { label: "IoT & Edge Computing", path: "/emerging-tech" },
        { label: "Extended Reality (XR)", path: "/emerging-tech" },
        { label: "5G & Networks", path: "/emerging-tech" },
        { label: "Green Technology", path: "/emerging-tech" },
        { label: "Digital Twins", path: "/emerging-tech" }
      ]
    },
    {
      title: "Company",
      icon: Shield,
      color: "from-green-500 to-emerald-500",
      links: [
        { label: "About Us", path: "/about" },
        { label: "Our Mission", path: "/mission" },
        { label: "Team", path: "/team" },
        { label: "Pricing", path: "/pricing" },
        { label: "Careers", path: "/careers" },
        { label: "Partners", path: "/partners" },
        { label: "Contact", path: "/contact" },
        { label: "Blog", path: "/blog" }
      ]
    },
    {
      title: "Resources",
      icon: Lightbulb,
      color: "from-orange-500 to-yellow-500",
      links: [
        { label: "Blog & Articles", path: "/blog" },
        { label: "Case Studies", path: "/case-studies" },
        { label: "Help Center", path: "/help" },
        { label: "Documentation", path: "/docs" },
        { label: "Support Center", path: "/support" }
      ]
    }
  ];

  // Enhanced social media links with proper error handling and fallbacks
  const socialLinks = [
    { 
      name: 'LinkedIn', 
      url: 'https://www.linkedin.com/company/ziontechgroup', 
      icon: Linkedin,
      fallback: 'https://linkedin.com',
      color: 'hover:bg-blue-600/20 hover:text-blue-400'
    },
    { 
      name: 'Twitter', 
      url: 'https://twitter.com/ziontechgroup', 
      icon: Twitter,
      fallback: 'https://twitter.com',
      color: 'hover:bg-sky-600/20 hover:text-sky-400'
    },
    { 
      name: 'GitHub', 
      url: 'https://github.com/ziontechgroup', 
      icon: Github,
      fallback: 'https://github.com',
      color: 'hover:bg-gray-600/20 hover:text-gray-400'
    },
    { 
      name: 'YouTube', 
      url: 'https://www.youtube.com/@ziontechgroup', 
      icon: Youtube,
      fallback: 'https://youtube.com',
      color: 'hover:bg-red-600/20 hover:text-red-400'
    }
  ];

  const contactInfo = {
    phone: '+1 302 464 0950',
    email: 'kleber@ziontechgroup.com',
    address: '364 E Main St STE 1008, Middletown DE 19709'
  };

  const trustSignals = [
    { icon: Eye, label: "Transparent Pricing", description: "No hidden fees" },
    { icon: Heart, label: "Customer First", description: "Your success matters" },
    { icon: TargetIcon, label: "Results Focused", description: "Measurable outcomes" },
    { icon: Sparkles, label: "Innovation Leader", description: "Cutting-edge tech" }
  ];

  const handleSocialLinkClick = (link: typeof socialLinks[0], e: React.MouseEvent) => {
    e.preventDefault();
    
    try {
      // Try to open the primary URL first
      const newWindow = window.open(link.url, '_blank', 'noopener,noreferrer');
      
      // If the window fails to open, try the fallback
      if (!newWindow) {
        window.open(link.fallback, '_blank', 'noopener,noreferrer');
      }
    } catch (error) {
      // If both fail, try the fallback
      window.open(link.fallback, '_blank', 'noopener,noreferrer');
    }
  };

  const handleContactClick = (type: 'phone' | 'email') => {
    try {
      if (type === 'phone') {
        const phoneNumber = contactInfo.phone.replace(/\s/g, '');
        window.location.href = `tel:${phoneNumber}`;
      } else {
        window.location.href = `mailto:${contactInfo.email}`;
      }
    } catch (error) {
      // Fallback for unsupported protocols
      if (type === 'phone') {
        alert(`Please call us at ${contactInfo.phone}`);
      } else {
        alert(`Please email us at ${contactInfo.email}`);
      }
    }
  };

  return (
    <footer className="bg-black text-white relative overflow-hidden">
      {/* Enhanced Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-zion-blue-dark to-black"></div>
      <div className="absolute inset-0 bg-quantum-mesh opacity-20"></div>
      
      {/* Matrix Rain Effect */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(25)].map((_, i) => (
          <div
            key={i}
            className="absolute text-zion-cyan text-xs animate-matrix-rain"
            style={{
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 30}s`,
              animationDuration: `${25 + Math.random() * 15}s`
            }}
          >
            {Math.random() > 0.5 ? '1' : '0'}
          </div>
        ))}
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
            {/* Company Info */}
            <div className="lg:col-span-1">
              <div className="flex items-center space-x-3 mb-6">
                <div className="relative">
                  <div className="w-12 h-12 bg-gradient-to-br from-zion-cyan to-zion-blue rounded-xl flex items-center justify-center">
                    <span className="text-2xl font-bold text-white">Z</span>
                  </div>
                  <div className="absolute inset-0 w-12 h-12 bg-gradient-to-br from-zion-cyan to-zion-blue rounded-xl opacity-50 blur-xl"></div>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white">Zion Tech Group</h3>
                  <p className="text-sm text-zion-slate-light">Innovation • Technology • Future</p>
                </div>
              </div>
              
              <p className="text-zion-slate-light mb-6 leading-relaxed">
                Leading provider of AI-powered technology solutions, quantum computing, cybersecurity, and enterprise digital transformation services.
              </p>
              
              {/* Contact Information */}
              <div className="space-y-3 mb-6">
                <div className="flex items-center space-x-3 text-zion-slate-light hover:text-zion-cyan transition-colors duration-300 cursor-pointer">
                  <Phone className="w-4 h-4" />
                  <span className="text-sm">+1 302 464 0950</span>
                </div>
                <div className="flex items-center space-x-3 text-zion-slate-light hover:text-zion-cyan transition-colors duration-300 cursor-pointer">
                  <Mail className="w-4 h-4" />
                  <span className="text-sm">kleber@ziontechgroup.com</span>
                </div>
                <div className="flex items-center space-x-3 text-zion-slate-light hover:text-zion-cyan transition-colors duration-300 cursor-pointer">
                  <MapPin className="w-4 h-4" />
                  <span className="text-sm">364 E Main St STE 1008<br />Middletown DE 19709</span>
                </div>
              </div>

              {/* Social Links */}
              <div className="flex space-x-4">
                <a href="https://linkedin.com/company/ziontechgroup" target="_blank" rel="noopener noreferrer" className="p-2 bg-zion-blue-light/20 border border-zion-cyan/30 rounded-lg text-zion-cyan hover:bg-zion-cyan hover:text-black transition-all duration-300">
                  <Linkedin className="w-5 h-5" />
                </a>
                <a href="https://twitter.com/ziontechgroup" target="_blank" rel="noopener noreferrer" className="p-2 bg-zion-blue-light/20 border border-zion-cyan/30 rounded-lg text-zion-cyan hover:bg-zion-cyan hover:text-black transition-all duration-300">
                  <Twitter className="w-5 h-5" />
                </a>
                <a href="https://github.com/ziontechgroup" target="_blank" rel="noopener noreferrer" className="p-2 bg-zion-blue-light/20 border border-zion-cyan/30 rounded-lg text-zion-cyan hover:bg-zion-cyan hover:text-black transition-all duration-300">
                  <Github className="w-5 h-5" />
                </a>
                <a href="https://youtube.com/@ziontechgroup" target="_blank" rel="noopener noreferrer" className="p-2 bg-zion-blue-light/20 border border-zion-cyan/30 rounded-lg text-zion-cyan hover:bg-zion-cyan hover:text-black transition-all duration-300">
                  <Youtube className="w-5 h-5" />
                </a>
              </div>
            </div>

            {/* Footer Sections */}
            {footerSections.map((section) => (
              <div key={section.title} className="space-y-4">
                <div className="flex items-center space-x-2 mb-4">
                  <div className={`p-2 bg-gradient-to-r ${section.color} rounded-lg`}>
                    <section.icon className="w-5 h-5 text-white" />
                  </div>
                  <h3 className="font-semibold text-white text-lg">{section.title}</h3>
                </div>
                
                <ul className="space-y-2">
                  {section.links.map((link) => (
                    <li key={link.path}>
                      <Link
                        to={link.path}
                        className="text-zion-slate-light hover:text-zion-cyan transition-colors duration-300 text-sm hover:translate-x-1 transform transition-transform duration-300 inline-block"
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Enhanced CTA Section */}
        <div className="border-t border-zion-cyan/20 py-8">
          <div className="text-center">
            <h3 className="text-2xl font-bold text-white mb-4">
              Ready to Transform Your Business?
            </h3>
            <p className="text-zion-slate-light mb-6 max-w-2xl mx-auto">
              Join hundreds of companies already leveraging our cutting-edge AI and technology solutions to drive innovation and growth.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="inline-flex items-center space-x-2 bg-gradient-to-r from-zion-cyan to-zion-blue hover:from-zion-cyan/90 hover:to-zion-blue/90 text-white px-8 py-3 rounded-lg font-medium transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-zion-cyan/25"
              >
                <span>Get Started Today</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                to="/pricing"
                className="inline-flex items-center space-x-2 border border-zion-cyan/50 text-zion-cyan hover:bg-zion-cyan hover:text-black px-8 py-3 rounded-lg font-medium transition-all duration-300 hover:scale-105"
              >
                <span>View Pricing</span>
                <Eye className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="border-t border-zion-cyan/20 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="flex items-center space-x-2 text-zion-slate-light text-sm">
              <Heart className="w-4 h-4 text-red-500" />
              <span>Made with innovation by Zion Tech Group</span>
            </div>
            
            <div className="flex items-center space-x-6 text-sm text-zion-slate-light">
              <Link to="/privacy" className="hover:text-zion-cyan transition-colors duration-300">
                Privacy Policy
              </Link>
              <Link to="/terms" className="hover:text-zion-cyan transition-colors duration-300">
                Terms of Service
              </Link>
              <Link to="/cookies" className="hover:text-zion-cyan transition-colors duration-300">
                Cookie Policy
              </Link>
              <Link to="/accessibility" className="hover:text-zion-cyan transition-colors duration-300">
                Accessibility
              </Link>
            </div>
            
            <div className="text-zion-slate-light text-sm">
              © {currentYear} Zion Tech Group. All rights reserved.
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}