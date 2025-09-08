import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Mail, 
  Phone, 
  MapPin, 
  Globe, 
  Linkedin, 
  Twitter, 
  Github,
  Facebook,
  Instagram,
  Store,
  Brain,
  Zap,
  Server,
  Shield,
  Cloud,
  Users,
  Building2,
  FileText,
  HelpCircle,
  BarChart3,
  Rocket,
  Target,
  Calendar,
  Handshake,
  BookOpen,
  Video,
  GraduationCap,
  Lightbulb,
  Eye,
  Workflow,
  Atom,
  MessageCircle,
  PenTool,
  TrendingUp,
  Lock,
  Cpu,
  Network,
  Database,
  Monitor,
  Smartphone,
  Code,
  Palette,
  Settings,
  Cog,
  BarChart,
  Activity,
  Wifi,
  HardDrive
} from 'lucide-react';

    ]
  };

  const footerSections = [
    {
      title: "Core Services",
      icon: Zap,
      links: [
        { name: "AI & Machine Learning", href: "/services" },
        { name: "Cloud Solutions", href: "/services/cloud-devops" },
        { name: "Cybersecurity", href: "/services/cybersecurity" },
        { name: "Digital Transformation", href: "/services/digital-transformation" },
        { name: "IT Infrastructure", href: "/services/it-infrastructure-management" },
        { name: "Data Analytics", href: "/services/ai-data-analytics-platform" }
      ]
    },
    {
      title: "AI Solutions",
      icon: Brain,
      links: [
        { name: "Enterprise Automation", href: "/services/ai-enterprise-automation-platform" },
        { name: "Business Intelligence", href: "/services/ai-business-intelligence" },
        { name: "Supply Chain Optimization", href: "/services/ai-supply-chain-optimization" },
        { name: "Customer Support AI", href: "/services/ai-customer-support-automation" },
        { name: "Sales Copilot", href: "/services/ai-sales-copilot" },
        { name: "Compliance Assistant", href: "/services/ai-compliance-assistant" }
      ]
    },
    {
      title: "Innovation Hub",
      icon: Rocket,
      links: [
        { name: "Infrastructure Management", href: "/services/it-infrastructure-management" },
        { name: "Cloud & DevOps", href: "/services/cloud-devops" },
        { name: "Cybersecurity", href: "/services/cybersecurity" },
        { name: "Digital Transformation", href: "/services/digital-transformation" },
        { name: "Quantum Computing", href: "/services/ai-quantum-computing-solutions" },
        { name: "Edge Computing", href: "/services/edge-computing-solutions" },
        { name: "Blockchain & Web3", href: "/services/blockchain-enterprise-solutions" },
        { name: "IoT Solutions", href: "/services/iot-edge" },
        { name: "2026 Innovation Showcase", href: "/innovative-services-showcase-2026" },
        { name: "Emerging Technologies", href: "/emerging-tech" }
      ]
    },
    {
      title: "Industry Solutions",
      icon: Building2,
      links: [
        { name: "Healthcare & Biotech", href: "/solutions/healthcare" },
        { name: "Financial Services", href: "/solutions/financial" },
        { name: "Manufacturing", href: "/solutions/manufacturing" },
        { name: "Government & Public", href: "/solutions/government" },
        { name: "Retail & E-commerce", href: "/solutions/retail" },
        { name: "Enterprise Solutions", href: "/enterprise" }
      ]
    },
    {
      title: "Company",
      icon: Users,
      links: [
        { name: "About Us", href: "/about" },
        { name: "Leadership Team", href: "/leadership" },
        { name: "Careers", href: "/careers" },
        { name: "News & Updates", href: "/news" },
        { name: "Events & Webinars", href: "/events" },
        { name: "Partners", href: "/partners" }
      ]
    }
  ];

  const quickLinks = [
    { name: "Get Started", href: "/get-started", icon: Rocket },
    { name: "Request Quote", href: "/request-quote", icon: TrendingUp },
    { name: "Pricing Guide", href: "/pricing", icon: BarChart3 },
    { name: "Marketplace", href: "/marketplace", icon: ShoppingCart },
    { name: "All Services", href: "/services", icon: Zap },
    { name: "Support Center", href: "/help", icon: HelpCircle },
    { name: "Research Hub", href: "/research", icon: Lightbulb },
    { name: "Innovation Showcase", href: "/comprehensive-services-showcase-2025", icon: Star }
  ];

  const socialLinks = [
    { name: "LinkedIn", href: "https://linkedin.com/company/ziontechgroup", icon: Linkedin },
    { name: "Twitter", href: "https://twitter.com/ziontechgroup", icon: Twitter },
    { name: "GitHub", href: "https://github.com/ziontechgroup", icon: Github },
    { name: "Facebook", href: "https://facebook.com/ziontechgroup", icon: Facebook },
    { name: "Instagram", href: "https://instagram.com/ziontechgroup", icon: Instagram }
  ];

  return (
    <footer className="bg-gradient-to-br from-zion-slate-darker via-zion-blue-dark to-zion-slate-darker border-t border-zion-purple/30 relative">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(59,130,246,0.1),transparent_70%)]"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 relative">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8 mb-12">
          {/* Company Info - Spans 2 columns on large screens */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-12 h-12 bg-gradient-to-r from-zion-cyan to-zion-purple rounded-xl flex items-center justify-center shadow-lg shadow-zion-cyan/25">
                <Globe className="w-7 h-7 text-white" />
              </div>
              <div>
                <span className="text-2xl font-bold bg-gradient-to-r from-white via-zion-cyan to-zion-purple bg-clip-text text-transparent">
                  Zion Tech Group
                </span>
                <div className="text-xs text-zion-cyan font-medium">Innovation • Technology • Growth</div>
              </div>
            </div>
            
            <p className="text-zinc-300 mb-8 max-w-md leading-relaxed">
              Transforming businesses through innovative AI, cloud, and technology solutions. 
              We help organizations of all sizes accelerate their digital transformation journey 
              with cutting-edge technology and expert guidance.
            </p>
            
            {/* Contact Info */}
            <div className="space-y-4 mb-8">
              <div className="flex items-center space-x-3 text-zinc-400 hover:text-zion-cyan transition-colors group">
                <div className="p-2 bg-zion-purple/20 rounded-lg group-hover:bg-zion-cyan/20 transition-colors">
                  <Mail className="w-4 h-4" />
                </div>
                <a href="mailto:kleber@ziontechgroup.com" className="hover:underline">
                  kleber@ziontechgroup.com
                </a>
              </div>
              <div className="flex items-center space-x-3 text-zinc-400 hover:text-zion-cyan transition-colors group">
                <div className="p-2 bg-zion-purple/20 rounded-lg group-hover:bg-zion-cyan/20 transition-colors">
                  <Phone className="w-4 h-4" />
                </div>
                <a href="tel:+13024640950" className="hover:underline">
                  +1 (302) 464-0950
                </a>
              </div>
              <div className="flex items-center space-x-3 text-zinc-400">
                <div className="p-2 bg-zion-purple/20 rounded-lg">
                  <MapPin className="w-4 h-4" />
                </div>
                <span>Delaware, United States</span>
              </div>
            </div>

            {/* Social Links */}
            <div className="space-y-4">
              <h4 className="text-white font-semibold text-sm">Follow Us</h4>
              <div className="flex items-center space-x-4">
                {socialLinks.map((social) => (
                  <a
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 bg-zion-purple/20 rounded-lg text-zion-slate-light hover:bg-zion-cyan/20 hover:text-zion-cyan transition-all duration-300 hover:scale-110"
                    aria-label={social.name}
                  >
                    <social.icon className="w-4 h-4" />
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Footer Sections - Each spans 1 column */}
          {footerSections.map((section, index) => (
            <div key={section.title} className="space-y-4">
              <div className="flex items-center space-x-2 pb-2 border-b border-zion-purple/20">
                <section.icon className="w-4 h-4 text-zion-cyan" />
                <h4 className="text-white font-semibold text-sm">{section.title}</h4>
              </div>
              <ul className="space-y-2">
                {section.links.map((link) => (
                  <li key={link.name}>
                    <Link
                      to={link.href}
                      className="flex items-center space-x-2 text-zinc-400 hover:text-zion-cyan transition-colors text-sm group"
                    >
                      {link.icon && <link.icon className="w-3 h-3 opacity-60 group-hover:opacity-100 transition-opacity" />}
                      <span className="hover:underline">{link.name}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Quick Links Section */}
        <div className="border-t border-zion-purple/20 pt-8 mb-8">
          <div className="flex items-center space-x-2 mb-6">
            <Zap className="w-5 h-5 text-zion-cyan" />
            <h4 className="text-white font-semibold">Quick Access</h4>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-4">
            {quickLinks.map((link) => (
              <Link
                key={link.name}
                to={link.href}
                className="flex items-center space-x-2 p-3 bg-zion-purple/10 rounded-lg border border-zion-purple/20 hover:bg-zion-purple/20 hover:border-zion-cyan/30 transition-all duration-300 group"
              >
                <link.icon className="w-4 h-4 text-zion-cyan group-hover:scale-110 transition-transform" />
                <span className="text-zinc-300 group-hover:text-white transition-colors text-sm font-medium">
                  {link.name}
                </span>
              </Link>
            ))}
          </div>
        </div>

        {/* Newsletter Signup */}
        <div className="bg-gradient-to-r from-cyan-500/10 to-purple-500/10 rounded-xl p-8 mb-12 border border-cyan-500/20">
          <div className="text-center max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-white mb-2">Stay Updated with Zion Tech</h3>
            <p className="text-zinc-400 mb-6">
              Get the latest insights on AI, cloud technologies, and innovation trends delivered to your inbox.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 bg-zinc-800/50 border border-zinc-700 rounded-lg text-white placeholder-zinc-400 focus:outline-none focus:ring-2 focus:ring-cyan-500"
              />
              <button className="px-6 py-3 bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-medium rounded-lg hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8 mb-8">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-10 h-10 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-xl flex items-center justify-center">
                <Globe className="w-6 h-6 text-white" />
              </div>
              <div>
                <span className="text-xl font-bold text-white">Zion Tech Group</span>
                <div className="text-xs text-cyan-400">AI • Cloud • Innovation</div>
              </div>
            </div>
            <p className="text-zinc-400 mb-6 max-w-sm leading-relaxed">
              Pioneering the future of technology with cutting-edge AI solutions, cloud infrastructure, 
              and innovative digital transformation services.
            </p>
            
            {/* Contact Info */}
            <div className="space-y-3 mb-6">
              <div className="flex items-center space-x-3 text-zinc-400 hover:text-cyan-400 transition-colors">
                <Mail className="w-4 h-4 text-cyan-500" />
                <a href="mailto:kleber@ziontechgroup.com" className="hover:underline">
                  kleber@ziontechgroup.com
                </a>
              </div>
              <div className="flex items-center space-x-3 text-zinc-400">
                <Phone className="w-4 h-4" />
                <span>+1 (302) 464-0950</span>
              </div>
              <div className="flex items-center space-x-3 text-zinc-400">
                <MapPin className="w-4 h-4" />
                <span>364 E Main St STE 1008<br />Middletown DE 19709</span>
              </div>
            </div>

            {/* Certifications & Trust Badges */}
            <div className="space-y-2">
              <p className="text-xs text-zinc-500 font-semibold">CERTIFICATIONS & COMPLIANCE</p>
              <div className="flex flex-wrap gap-2">
                <span className="px-2 py-1 bg-zinc-800 text-xs text-zinc-400 rounded">SOC 2 Type II</span>
                <span className="px-2 py-1 bg-zinc-800 text-xs text-zinc-400 rounded">ISO 27001</span>
                <span className="px-2 py-1 bg-zinc-800 text-xs text-zinc-400 rounded">GDPR Ready</span>
                <span className="px-2 py-1 bg-zinc-800 text-xs text-zinc-400 rounded">HIPAA</span>
              </div>
            </div>
          </div>

          {/* Footer Sections */}
          {footerSections.map((section) => (
            <div key={section.title}>
              <h3 className="text-white font-semibold mb-4 flex items-center">
                <section.icon className="w-4 h-4 mr-2 text-cyan-400" />
                {section.title}
              </h3>
              <ul className="space-y-2">
                {section.links.slice(0, 8).map((link) => (
                  <li key={link.name}>
                    <Link 
                      to={link.href} 
                      className="text-zinc-400 hover:text-cyan-400 transition-colors text-sm hover:underline block py-1"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
                {section.links.length > 8 && (
                  <li>
                    <Link 
                      to={`/${section.title.toLowerCase().replace(/\s+/g, '-')}`}
                      className="text-zion-cyan hover:text-zion-cyan-light transition-colors text-sm font-medium"
                    >
                      View All {section.title} →
                    </Link>
                  </li>
                )}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Footer */}
        <div className="border-t border-zinc-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-zinc-400 text-sm mb-4 md:mb-0">
              © {currentYear} Zion Tech Group. All rights reserved.
            </div>
            
            {/* Social Links */}
            <div className="flex space-x-4">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-zinc-400 hover:text-zion-cyan transition-colors"
                  aria-label={social.name}
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Legal Links */}
          <div className="mt-6 pt-6 border-t border-zinc-800">
            <div className="flex flex-wrap justify-center space-x-6 text-sm">
              <Link to="/privacy" className="text-zinc-400 hover:text-white transition-colors">
                Privacy Policy
              </Link>
              <Link to="/terms" className="text-zinc-400 hover:text-white transition-colors">
                Terms of Service
              </Link>
              <Link to="/cookies" className="text-zinc-400 hover:text-white transition-colors">
                Cookie Policy
              </Link>
              <Link to="/accessibility" className="text-zinc-400 hover:text-white transition-colors">
                Accessibility
              </Link>
              <Link to="/security" className="text-zinc-400 hover:text-white transition-colors">
                Security
              </Link>
              <Link to="/compliance" className="text-zinc-400 hover:text-white transition-colors">
                Compliance
              </Link>
              <Link to="/sitemap" className="text-zinc-400 hover:text-white transition-colors">
                Sitemap
              </Link>
            </div>
          </div>
        </div>
      </div>

        <ArrowUp className="w-5 h-5" />
      </button>

    </footer>
  );


;
&apos}'









