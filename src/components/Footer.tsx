import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Phone, 
  Mail, 
  MapPin, 
  Linkedin, 
  Twitter, 
  Facebook, 
  Instagram,
  Github,
  Youtube,
  Brain,
  Shield,
  Cpu,
  Database,
  Network,
  Code,
  BarChart3,
  Target,
  Lightbulb,
  Rocket,
  Clock,
  Users,
  TrendingUp,
  Award,
  Globe,
  Zap,
  Cloud,
  Lock,
  Workflow,
  Eye,
  Key,
  Sparkles,
  Heart,
  ArrowUpRight,
  CheckCircle2,
  Star as StarIcon,
  Building,
  ShoppingBag,
  DollarSign
} from 'lucide-react';

function Footer() {
  const currentYear = new Date().getFullYear();
  
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const footerSections = [
    {
      title: "Services",
      links: [
        { name: "AI Solutions", href: "/ai-solutions" },
        { name: "Cybersecurity", href: "/cybersecurity" },
        { name: "Cloud & DevOps", href: "/cloud-devops" },
        { name: "Data Analytics", href: "/data-analytics" },
        { name: "Quantum Technology", href: "/quantum-technology" },
        { name: "Enterprise Solutions", href: "/enterprise-solutions" }
      ]
    },
    {
      title: "Solutions",
      links: [
        { name: "Healthcare", href: "/solutions/healthcare" },
        { name: "Finance", href: "/solutions/finance" },
        { name: "Manufacturing", href: "/solutions/manufacturing" },
        { name: "Retail", href: "/solutions/retail" },
        { name: "Education", href: "/solutions/education" },
        { name: "Government", href: "/solutions/government" }
      ]
    },
    {
      title: "Company",
      links: [
        { name: "About Us", href: "/about" },
        { name: "Our Team", href: "/team" },
        { name: "Careers", href: "/careers" },
        { name: "News & Blog", href: "/news" },
        { name: "Case Studies", href: "/case-studies" },
        { name: "Partners", href: "/partners" }
      ]
    },
    {
      title: "Resources",
      links: [
        { name: "Documentation", href: "/docs" },
        { name: "API Reference", href: "/api" },
        { name: "Help Center", href: "/help" },
        { name: "Webinars", href: "/webinars" },
        { name: "White Papers", href: "/white-papers" },
        { name: "Support", href: "/support" }
      ]
    }
  ];

  const serviceCategories = [
    {
      title: "AI & Micro SAAS",
      description: "Cutting-edge artificial intelligence and scalable software solutions",
      items: [
        { name: "AI Autonomous Systems", path: "/services/ai-autonomous-systems", icon: Brain },
        { name: "AI Business Intelligence", path: "/services/ai-business-intelligence", icon: BarChart3 },
        { name: "AI Customer Intelligence", path: "/services/ai-customer-intelligence", icon: Users },
        { name: "AI Workflow Automation", path: "/services/ai-workflow-automation", icon: Workflow },
        { name: "AI Predictive Analytics", path: "/services/ai-predictive-analytics", icon: TrendingUp },
        { name: "Micro SAAS Solutions", path: "/services/micro-saas-solutions", icon: Code }
      ]
    },
    {
      title: "Technology Solutions",
      description: "Comprehensive technology infrastructure and development services",
      items: [
        { name: "IT Infrastructure", path: "/services/it-infrastructure", icon: Cpu },
        { name: "Cloud & DevOps", path: "/services/cloud-devops", icon: Cloud },
        { name: "5G Enterprise Solutions", path: "/services/5g-enterprise-solutions", icon: Network },
        { name: "Blockchain Solutions", path: "/services/blockchain-solutions", icon: Key },
        { name: "IoT & Data Analytics", path: "/services/iot-data-analytics", icon: Database },
        { name: "Digital Transformation", path: "/solutions/digital-transformation", icon: Rocket }
      ]
    },
    {
      title: "Security & Compliance",
      description: "Enterprise-grade security and regulatory compliance solutions",
      items: [
        { name: "Cybersecurity", path: "/services/cybersecurity", icon: Shield },
        { name: "SOC2 Compliance", path: "/services/soc2-compliance", icon: CheckCircle2 },
        { name: "Quantum Secure Cloud", path: "/services/quantum-secure-cloud", icon: Lock },
        { name: "Security Assessment", path: "/services/security-assessment", icon: Eye },
        { name: "Compliance & Audit", path: "/services/compliance-audit", icon: CheckCircle2 },
        { name: "Threat Detection", path: "/services/threat-detection", icon: Shield }
      ]
    },
    {
      title: "Industry Solutions",
      description: "Specialized solutions for healthcare, finance, and manufacturing",
      items: [
        { name: "Healthcare", path: "/solutions/healthcare", icon: Heart },
        { name: "Financial Services", path: "/solutions/financial-services", icon: DollarSign },
        { name: "Manufacturing", path: "/solutions/manufacturing", icon: Target },
        { name: "Retail & E-commerce", path: "/solutions/retail-ecommerce", icon: ShoppingBag },
        { name: "Enterprise Solutions", path: "/solutions/enterprise", icon: Building },
        { name: "Government & Defense", path: "/solutions/government", icon: Shield }
      ]
    },
    {
      title: "Emerging Technologies",
      description: "Next-generation technologies for future innovation",
      items: [
        { name: "Quantum Technology", path: "/services/quantum-technology", icon: Zap },
        { name: "Quantum Neural Networks", path: "/quantum-neural-network-platform", icon: Brain },
        { name: "Autonomous Vehicles", path: "/services/autonomous-vehicles", icon: Rocket },
        { name: "AI Drug Discovery", path: "/services/ai-drug-discovery", icon: Lightbulb },
        { name: "AI Robotics", path: "/services/ai-robotics", icon: Cpu },
        { name: "AR/VR Solutions", path: "/services/ar-vr-solutions", icon: Eye }
      ]
    },
    {
      title: "Company & Support",
      description: "Learn about Zion Tech Group and get the support you need",
      items: [
        { name: "About Us", path: "/about", icon: Users },
        { name: "Our Team", path: "/team", icon: Users },
        { name: "Careers", path: "/careers", icon: Rocket },
        { name: "Contact", path: "/contact", icon: Phone },
        { name: "Help Center", path: "/help-center", icon: Lightbulb },
        { name: "Blog & News", path: "/blog", icon: Globe }
>>>>>>> ebc03b251d9cce11bab294ca3555becbe8a49128
      ]
    }
  ];

  const socialLinks = [
    { 
      name: 'LinkedIn', 
      url: 'https://www.linkedin.com/company/zion-tech-group', 
      icon: '💼',
      fallback: 'https://linkedin.com'
    },
    { 
      name: 'Twitter', 
      url: 'https://twitter.com/ziontechgroup', 
      icon: '🐦',
      fallback: 'https://twitter.com'
    },
    { 
      name: 'GitHub', 
      url: 'https://github.com/Zion-Holdings', 
      icon: '💻',
      fallback: 'https://github.com'
    },
    { 
      name: 'YouTube', 
      url: 'https://youtube.com/@ziontechgroup', 
      icon: '📺',
      fallback: 'https://youtube.com'
    },
    { 
      name: 'Facebook', 
      url: 'https://facebook.com/ziontechgroup', 
      icon: '📘',
      fallback: 'https://facebook.com'
    },
    { 
      name: 'Instagram', 
      url: 'https://instagram.com/ziontechgroup', 
      icon: '📷',
      fallback: 'https://facebook.com'
    }
  ];

  const contactInfo = {
    phone: '+1 302 464 0950',
    email: 'kleber@ziontechgroup.com',
    address: '364 E Main St STE 1008, Middletown DE 19709'
  };

  const handleSocialLinkClick = (link: typeof socialLinks[0], e: React.MouseEvent) => {
    e.preventDefault();
    
    // Try to open the primary URL first
    const newWindow = window.open(link.url, '_blank', 'noopener,noreferrer');
    
    // If the window fails to open, try the fallback
    if (!newWindow) {
      window.open(link.fallback, '_blank', 'noopener,noreferrer');
    }
  };

  const handleContactClick = (type: 'phone' | 'email') => {
    if (type === 'phone') {
      window.location.href = `tel:${contactInfo.phone.replace(/\s/g, '')}`;
    } else {
      window.location.href = `mailto:${contactInfo.email}`;
    }
  };

  return (
    <footer className="bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple text-white relative overflow-hidden">
      {/* Futuristic Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMC4wMyI+PGNpcmNsZSBjeD0iMzAiIGN5PSIzMCIgcj0iMiIvPjwvZz48L2c+PC9zdmc+')] opacity-20"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
      </div>

      <div className="relative z-10 container mx-auto px-4 py-20">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 mb-16">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-12 h-12 bg-gradient-to-br from-zion-cyan to-zion-purple rounded-xl flex items-center justify-center">
                <Rocket className="w-7 h-7 text-white" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-white">Zion Tech Group</h3>
                <p className="text-zion-slate-light">Revolutionary Technology Solutions</p>
              </div>
            </div>
            
            <p className="text-zion-slate-light mb-6 leading-relaxed">
              Leading provider of revolutionary micro SAAS services, AI solutions, cloud infrastructure, 
              and cutting-edge technology services. We transform businesses through innovative technology.
            </p>

            {/* Contact Information */}
            <div className="space-y-4">
              <div className="flex items-center space-x-3 text-zion-slate-light hover:text-zion-cyan transition-colors cursor-pointer">
                <Phone className="w-5 h-5" />
                <span>{contactInfo.phone}</span>
              </div>
              <div className="flex items-center space-x-3 text-zion-slate-light hover:text-zion-cyan transition-colors cursor-pointer">
                <Mail className="w-5 h-5" />
                <span>{contactInfo.email}</span>
              </div>
              <div className="flex items-center space-x-3 text-zion-slate-light hover:text-zion-cyan transition-colors cursor-pointer">
                <MapPin className="w-5 h-5" />
                <span>{contactInfo.address}</span>
              </div>
              <div className="flex items-center space-x-3 text-zion-slate-light hover:text-zion-cyan transition-colors cursor-pointer">
                <Globe className="w-5 h-5" />
                <span>{contactInfo.website}</span>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex space-x-4 mt-6">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`w-10 h-10 bg-white/10 border border-white/20 rounded-lg flex items-center justify-center text-zion-slate-light transition-all duration-300 hover:bg-zion-cyan hover:text-white hover:border-zion-cyan hover:scale-110 ${social.color}`}
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Footer Sections */}
          {footerSections.map((section) => (
            <div key={section.title}>
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-8 h-8 bg-gradient-to-br from-zion-cyan to-zion-purple rounded-lg flex items-center justify-center">
                  <section.icon className="w-4 h-4 text-white" />
                </div>
                <h4 className="text-lg font-semibold text-white">{section.title}</h4>
              </div>
              <p className="text-sm text-zion-slate-light mb-4">{section.description}</p>
              <ul className="space-y-2">
                {section.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <Link 
                      to={link.href} 
                      className="text-zion-slate-light hover:text-zion-cyan transition-colors text-sm"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 pt-8 border-t border-zion-blue-light">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-white font-semibold mb-4">Contact Information</h3>
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <PhoneIcon className="h-5 w-5 text-zion-cyan" />
                  <button 
                    onClick={() => handleContactClick('phone')}
                    className="text-zion-slate-light hover:text-zion-cyan transition-colors text-sm"
=======
    { name: "LinkedIn", icon: Linkedin, url: "https://linkedin.com/company/zion-tech-group", color: "hover:text-blue-400" },
    { name: "Twitter", icon: Twitter, url: "https://twitter.com/ziontechgroup", color: "hover:text-blue-400" },
    { name: "Facebook", icon: Facebook, url: "https://facebook.com/ziontechgroup", color: "hover:text-blue-600" },
    { name: "Instagram", icon: Instagram, url: "https://instagram.com/ziontechgroup", color: "hover:text-pink-400" },
    { name: "GitHub", icon: Github, url: "https://github.com/zion-tech-group", color: "hover:text-gray-400" },
    { name: "YouTube", icon: Youtube, url: "https://youtube.com/@ziontechgroup", color: "hover:text-red-400" }
  ];

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="futuristic-bg relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-10 w-2 h-2 bg-cyan-400 rounded-full animate-pulse opacity-60"></div>
        <div className="absolute top-40 right-20 w-1 h-1 bg-purple-400 rounded-full animate-pulse opacity-40"></div>
        <div className="absolute bottom-40 left-20 w-1.5 h-1.5 bg-blue-400 rounded-full animate-pulse opacity-50"></div>
        <div className="absolute bottom-20 right-10 w-2.5 h-2.5 bg-pink-400 rounded-full animate-pulse opacity-30"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Main Footer Content */}
        <div className="py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-8">
            {footerSections.map((section, idx) => (
              <div key={idx} className="space-y-4">
                <h3 className="text-lg font-semibold text-white neon-text-cyan">
                  {section.title}
                </h3>
                <p className="text-sm text-gray-400 leading-relaxed">
                  {section.description}
                </p>
                <ul className="space-y-2">
                  {section.items.map((item, itemIdx) => (
                    <li key={itemIdx}>
                      <Link
                        to={item.path}
                        className="flex items-center space-x-2 text-gray-300 hover:text-cyan-400 transition-colors duration-200 group"
                      >
                        <item.icon className="w-4 h-4 text-cyan-500/60 group-hover:text-cyan-400 transition-colors duration-200" />
                        <span className="text-sm">{item.name}</span>
                        <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Contact & Social Section */}
        <div className="border-t border-cyan-500/20 py-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Contact Information */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-white neon-text-cyan">
                Get In Touch
              </h3>
              <div className="space-y-3">
                <div className="flex items-center space-x-3 text-gray-300">
                  <Phone className="w-5 h-5 text-cyan-400" />
                  <span>+1 302 464 0950</span>
                </div>
                <div className="flex items-center space-x-3 text-gray-300">
                  <Mail className="w-5 h-5 text-cyan-400" />
                  <span>kleber@ziontechgroup.com</span>
                </div>
                <div className="flex items-start space-x-3 text-gray-300">
                  <MapPin className="w-5 h-5 text-cyan-400 mt-0.5" />
                  <span>364 E Main St STE 1008<br />Middletown DE 19709</span>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-white neon-text-cyan">
                Follow Us
              </h3>
              <div className="flex flex-wrap gap-4">
                {socialLinks.map((social, idx) => (
                  <a
                    key={idx}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`w-10 h-10 bg-black/30 border border-cyan-500/20 rounded-lg flex items-center justify-center text-gray-400 transition-all duration-200 hover:border-cyan-500/50 hover:bg-cyan-500/10 ${social.color}`}
>>>>>>> ebc03b251d9cce11bab294ca3555becbe8a49128
                  >
                    <social.icon className="w-5 h-5" />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-cyan-500/20 py-6">
          <div className="flex flex-col lg:flex-row justify-between items-center space-y-4 lg:space-y-0">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-br from-cyan-400 to-blue-600 rounded-lg flex items-center justify-center">
                <Brain className="w-5 h-5 text-white" />
              </div>
              <span className="text-white font-semibold">Zion Tech Group</span>
            </div>
            
            <div className="text-sm text-gray-400 text-center lg:text-left">
              © {currentYear} Zion Tech Group. All rights reserved. 
              <span className="hidden sm:inline"> Innovation • Intelligence • Impact</span>
            </div>

            <button
              onClick={scrollToTop}
              className="p-2 bg-cyan-500/20 border border-cyan-500/30 rounded-lg text-cyan-400 hover:bg-cyan-500/30 hover:border-cyan-500/50 transition-all duration-200"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
