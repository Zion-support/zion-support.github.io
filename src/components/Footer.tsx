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
        { label: "Industry Solutions", path: "/services/industry-solutions" },
        { label: "AI & Machine Learning", path: "/services#ai-ml" },
        { label: "Blockchain Solutions", path: "/services#blockchain" },
        { label: "IoT & Edge Computing", path: "/services#iot" }
      ]
    },
    {
      title: "5G & Network Solutions",
      icon: Network,
      color: "from-cyan-500 to-blue-500",
      links: [
        { label: "5G Enterprise Solutions", path: "/5g-enterprise-solutions" },
        { label: "5G Enterprise Network", path: "/5g-enterprise-network" },
        { label: "5G Network Optimization", path: "/5g-network-optimization" },
        { label: "5G Private Network Solutions", path: "/5g-private-network-solutions" },
        { label: "Cloud & Infrastructure", path: "/services#cloud" },
        { label: "Network Infrastructure", path: "/services/network-infrastructure" },
        { label: "Cloud DevOps", path: "/cloud-devops" },
        { label: "IT Infrastructure", path: "/services/it-infrastructure" }
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
      title: "Cybersecurity & Compliance",
      icon: Shield,
      color: "from-red-500 to-pink-500",
      links: [
        { label: "Cybersecurity Services", path: "/services/cybersecurity" },
        { label: "Advanced Cybersecurity Suite", path: "/advanced-cybersecurity-suite" },
        { label: "SOC2 Compliance Automation", path: "/soc2-compliance-automation" },
        { label: "Security Assessment", path: "/services/security-assessment" },
        { label: "Threat Detection", path: "/services/threat-detection" },
        { label: "Compliance & Audit", path: "/services/compliance-audit" },
        { label: "Accessibility Auditor", path: "/accessibility-auditor" },
        { label: "WCAG Compliance", path: "/services/wcag-compliance" }
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
    <footer className="bg-gradient-to-br from-gray-900 via-black to-blue-900 text-white relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(0,255,255,0.05),transparent_50%)]"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(59,130,246,0.05),transparent_50%)]"></div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Trust Signals Section */}
        <div className="py-12 border-b border-gray-700/50">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-white mb-2">Why Trust Zion Tech Group?</h3>
            <p className="text-gray-400">We're committed to your success</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {trustSignals.map((signal, index) => (
              <div key={index} className="text-center group">
                <div className="inline-flex items-center justify-center w-12 h-12 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 border border-cyan-500/30 rounded-lg mb-3 group-hover:scale-110 transition-transform duration-300">
                  <signal.icon className="w-6 h-6 text-cyan-400" />
                </div>
                <div className="text-sm font-semibold text-white mb-1">{signal.label}</div>
                <div className="text-xs text-gray-400">{signal.description}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Main Footer Content */}
        <div className="py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8">
            {/* Company Info */}
            <div className="lg:col-span-2">
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-2xl">Z</span>
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-white">Zion Tech Group</h3>
                  <p className="text-sm text-gray-400">The Tech & AI Marketplace</p>
                </div>
              </div>
              
              <p className="text-gray-300 mb-6 leading-relaxed">
                Empowering businesses with cutting-edge AI solutions, cybersecurity, and digital transformation services. 
                We help organizations thrive in the digital age with innovative technology solutions.
              </p>

              {/* Contact Info */}
              <div className="space-y-3">
                <button
                  onClick={() => handleContactClick('phone')}
                  className="flex items-center text-gray-300 hover:text-cyan-400 transition-colors duration-200 group"
                >
                  <Phone className="w-4 h-4 mr-3 text-cyan-400 group-hover:scale-110 transition-transform duration-200" />
                  {contactInfo.phone}
                </button>
                <button
                  onClick={() => handleContactClick('email')}
                  className="flex items-center text-gray-300 hover:text-cyan-400 transition-colors duration-200 group"
                >
                  <Mail className="w-4 h-4 mr-3 text-cyan-400 group-hover:scale-110 transition-transform duration-200" />
                  {contactInfo.email}
                </button>
                <div className="flex items-start text-gray-300">
                  <MapPin className="w-4 h-4 mr-3 mt-1 text-cyan-400 flex-shrink-0" />
                  <span className="text-sm">{contactInfo.address}</span>
                </div>
              </div>
            </div>

            {/* Footer Sections */}
            {footerSections.map((section) => (
              <div key={section.title}>
                <div className="flex items-center space-x-2 mb-4">
                  <div className={`p-2 bg-gradient-to-r ${section.color} rounded-lg`}>
                    <section.icon className="w-4 h-4 text-white" />
                  </div>
                  <h4 className="text-lg font-semibold text-white">{section.title}</h4>
                </div>
                <ul className="space-y-2">
                  {section.links.map((link) => (
                    <li key={link.label}>
                      <Link
                        to={link.path}
                        className="text-gray-400 hover:text-cyan-400 transition-colors duration-200 text-sm group flex items-center"
                      >
                        <span className="group-hover:translate-x-1 transition-transform duration-200">
                          {link.label}
                        </span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Newsletter Section */}
        <div className="py-8 border-t border-gray-700/50">
          <div className="text-center">
            <h3 className="text-xl font-semibold text-white mb-2">Stay Updated</h3>
            <p className="text-gray-400 mb-4">Get the latest insights on AI, technology, and business transformation</p>
            <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-2 bg-gray-800/50 border border-gray-700/50 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500/50 focus:border-cyan-500/50"
              />
              <button className="px-6 py-2 bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-500 hover:to-blue-500 text-white font-medium rounded-lg transition-all duration-300 transform hover:scale-105">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-700/50 py-8">
          <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
            {/* Copyright */}
            <div className="text-gray-400 text-sm">
              © {currentYear} Zion Tech Group. All rights reserved.
            </div>

            {/* Social Links */}
            <div className="flex items-center space-x-4">
              {socialLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.url}
                  onClick={(e) => handleSocialLinkClick(link, e)}
                  className={`p-3 text-gray-400 hover:text-white transition-all duration-200 rounded-lg border border-gray-700/50 hover:border-gray-600/50 ${link.color}`}
                  title={link.name}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <link.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Additional Links */}
          <div className="flex flex-wrap items-center justify-center space-x-6 mt-6 text-sm text-gray-500">
            <Link to="/privacy" className="hover:text-cyan-400 transition-colors duration-200">
              Privacy Policy
            </Link>
            <Link to="/terms" className="hover:text-cyan-400 transition-colors duration-200">
              Terms of Service
            </Link>
            <Link to="/cookies" className="hover:text-cyan-400 transition-colors duration-200">
              Cookie Policy
            </Link>
            <Link to="/accessibility" className="hover:text-cyan-400 transition-colors duration-200">
              Accessibility
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}