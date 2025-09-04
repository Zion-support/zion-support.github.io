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
  Zap,
  Brain,
  Server,
  Shield,
  Users,
  Building2,
  FileText,
  Rocket,
  Target,
  Atom,
  Network,
  Cloud,
  Lock,
  TrendingUp,
  Workflow,
  MessageCircle,
  Calendar,
  PenTool,
  Activity,
  Cpu,
  Wifi,
  Satellite,
  Handshake,
  BookOpen,
  Video,
  GraduationCap,
  Lightbulb,
  Star,
  HelpCircle,
  BarChart3,
  ShoppingCart,
  Heart,
  Factory,
  DollarSign,
  Briefcase,
  Award,
  ExternalLink,
  ArrowUp,
  Sparkles,
  CheckCircle,
  Monitor,
  Headphones,
  Truck,
  Search,
  Layers,
  Database,
  Home,
  Leaf
} from 'lucide-react';

export function Footer(props: any) {

  const currentYear = new Date().getFullYear();

  const footerSections = [
    {

      title: "Pricing & Plans",
      icon: DollarSig n,
      links: [
        { name: "Comprehensive Pricing 2025", href: "/comprehensive-pricing-guide-2025", icon: DollarSig n },
        { name: "Pricing Overview", href: "/pricing", icon: BarChart 3 },
        { name: "Get Custom Quote", href: "/contact", icon: MessageCircl e },
      ]
    },
    {
      title: "AI & Automation Services",
      icon: Brai n,
      links: [
        { name: "AI Business Intelligence", href: "/services/ai-business-intelligence-dashboard", icon: BarChart 3 },
        { name: "AI Customer Support", href: "/services/ai-customer-support-automation", icon: MessageCircl e },
        { name: "AI Project Management", href: "/services/ai-project-management-platform", icon: Workflo w },
        { name: "Enhanced Services 2025", href: "/enhanced-services-showcase-2025", icon: Sta r },
        { name: "AI Marketing Automation", href: "/services/ai-marketing-automation-platform", icon: TrendingU p },
        { name: "AI Enterprise Automation", href: "/services/ai-enterprise-automation-platform", icon: Building 2 },
        { name: "AI Workflow Orchestrator", href: "/services/ai-workflow-orchestrator", icon: Workflo w },
        { name: "AI Financial Trading", href: "/services/ai-financial-trading-platform", icon: TrendingU p },
        { name: "AI Healthcare Analytics", href: "/services/ai-healthcare-analytics-platform", icon: Hear t },
        { name: "AI Educational Content Creation", href: "/services/ai-educational-content-creation-platform", icon: BookOpe n },
        { name: "AI Legal Automation", href: "/services/ai-legal-document-automation-platform", icon: FileTex t },
        { name: "AI Legal Research Platform", href: "/services/ai-autonomous-legal-research-platform", icon: FileTex t },
        { name: "AI HR Platform", href: "/services/ai-hr-platform", icon: User s },
        { name: "AI Real Estate Investment Analytics", href: "/services/ai-real-estate-investment-analytics-platform", icon: Hom e },
        { name: "AI Autonomous Logistics", href: "/services/ai-autonomous-logistics-platform", icon: Truc k },
        { name: "AI Enterprise Resource Planning", href: "/services/ai-enterprise-resource-planning", icon: Databas e },
        { name: "AI Autonomous Manufacturing", href: "/services/ai-autonomous-manufacturing-platform", icon: Factor y },
        { name: "AI Quantum Neural Network", href: "/services/ai-quantum-neural-network-platform", icon: Ato m },
        { name: "AI Space Technology", href: "/services/ai-space-technology-platform", icon: Satellit e },
        { name: "AI Cybersecurity", href: "/services/ai-cybersecurity-threat-intelligence", icon: Shiel d }
      ]
    },
    {

      title: "Quantum Computing",
      icon: Ato m,
      links: [
        { name: "Quantum AI Platform", href: "/services/quantum-ai-platform", icon: Brai n },
        { name: "Quantum Trading Platform", href: "/services/quantum-ai-trading-platform", icon: TrendingU p },
        { name: "Quantum Computing as a Service", href: "/services/quantum-computing-as-a-service", icon: Clou d },
        { name: "Quantum Machine Learning", href: "/services/quantum-machine-learning", icon: Cp u },
        { name: "Quantum Edge Computing", href: "/services/quantum-edge-computing-solutions", icon: Networ k }
      ]
    },
    {

      title: "IT Infrastructure",
      icon: Serve r,
      links: [
        { name: "Cloud DevOps", href: "/services/cloud-devops", icon: Clou d },
        { name: "IT Infrastructure Management", href: "/services/it-infrastructure-management", icon: Serve r },
        { name: "Cybersecurity Solutions", href: "/services/cybersecurity", icon: Shiel d },
        { name: "Digital Transformation", href: "/services/digital-transformation", icon: Rocke t },
        { name: "Green IT Solutions", href: "/services/green-it", icon: Lea f },
        { name: "Space Technology", href: "/services/space-tech", icon: Satellit e }
      ]
    },
    {

      title: "Micro SAAS Solutions",
      icon: Building 2,
      links: [
        { name: "Micro CRM", href: "/services/micro-crm", icon: User s },
        { name: "Micro SAAS Platform", href: "/services/micro-saas-solutions", icon: Building 2 },
        { name: "Micro SAAS Solutions Comprehensive", href: "/services/micro-saas-solutions-comprehensive", icon: Layer s },
        { name: "Micro SAAS Innovation Hub", href: "/micro-saas-innovation-hub-2029", icon: Sparkle s }
      ]
    }
  ];

  const quickLinks = [
    { name: "About Us", href: "/about", icon: Building 2 },
    { name: "Services", href: "/services", icon: Serve r },
    { name: "Pricing", href: "/pricing", icon: DollarSig n },
    { name: "Contact", href: "/contact", icon: MessageCircl e },
    { name: "Careers", href: "/careers", icon: Briefcas e },
    { name: "Blog", href: "/blog", icon: FileTex t },
    { name: "Support", href: "/help-center", icon: HelpCircl e },
    { name: "Documentation", href: "/documentation", icon: BookOpe n }
  ];

  const contactInfo = [
    {

      icon: Phon e,
      text: "+1 302 464 0950",
      href: "tel:+13024640950"
    },
    {

      icon: Mai l,
      text: "kleber@ziontechgroup.com",
      href: "mailto: klebe r@ziontechgroup.com"
    },
    {

      icon: MapPi n,
      text: "364 E Main St STE 1008 Middletown DE 19709",
      href: "https://maps.google.com/?q=364+E+Main+St+STE+1008+Middletown+DE+19709"
    }
  ];

  const socialLinks = [
    { name: "LinkedIn", href: "https://linkedin.com/company/ziontechgroup", icon: Linkedi n },
    { name: "Twitter", href: "https://twitter.com/ziontechgroup", icon: Twitte r },
    { name: "GitHub", href: "https://github.com/ziontechgroup", icon: Githu b },
    { name: "Facebook", href: "https://facebook.com/ziontechgroup", icon: Faceboo k },
    { name: "Instagram", href: "https://instagram.com/ziontechgroup", icon: Instagra m }
  ];

  return (
    <footer className="bg-zion-slate-darker border-t border-zion-purple/20">
      {/* Main Footer Content */}
      <div className="container mx-auto px-4 sm: p x-6 lg: p x-8 py-12">
        <div className="grid grid-cols-1 md: gri d-cols-2 lg: gri d-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <Zap className="h-8 w-8 text-zion-purple"  />
              <span className="text-2xl font-bold text-white">Zion Tech Group</span>
            </div>
            <p className="text-gray-300 text-sm leading-relaxed">
              Leading the future of technology with cutting-edge AI solutions, quantum computing, and innovative micro SAAS services.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover: tex t-zion-purple transition-colors"
                >
                  <social.icon className="h-5 w-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-white flex items-center space-x-2">
              <Target className="h-5 w-5 text-zion-purple"  />
              <span>Quick Links</span>
            </h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.href}
                    className="text-gray-300 hover: tex t-zion-purple transition-colors text-sm flex items-center space-x-2 group"
                  >
                    <link .icon className="h-4 w-4 group-hover: tex t-zion-purple"  />
                    <span>{link.name}</span>
                  </Link>
                </li>
              ))
      )}
    </div>
  );
}
            </ul>
          </div>

          {/* Contact Information */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-white flex items-center space-x-2">
              <MessageCircle className="h-5 w-5 text-zion-purple"  />
              <span>Contact Us</span>
            </h3>
            <div className="space-y-3">
              {contactInfo.map((contact, index) => (
                <a
                  key={index}
                  href={contact.href}
                  target={contact.href.startsWith('http') ? '_blank' : '_self'}
                  rel={contact.href.startsWith('http') ? 'noopener noreferrer' : ''}
                  className="text-gray-300 hover: tex t-zion-purple transition-colors text-sm flex items-start space-x-2 group"
                >
                  <contact.icon className="h-4 w-4 mt-0.5 group-hover: tex t-zion-purple flex-shrink-0" />
                  <span className="leading-relaxed">{contact.text}</span>
                </a>
              ))}
            </div>
          </div>

          {/* Newsletter */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-white flex items-center space-x-2">
              <Mail className="h-5 w-5 text-zion-purple"  />
              <span>Stay Updated</span>
            </h3>
            <p className="text-gray-300 text-sm">
              Get the latest updates on our innovative services and technology solutions.
            </p>
            <div className="flex space-x-2">
              <input type="email"
                placeholder="Enter your email"
                className="flex-1 px-3 py-2 bg-zion-slate border border-zion-slate-light rounded-lg text-white placeholder-gray-400 focus: outlin e-none focus: rin g-2 focus: rin g-zion-purple focus: borde r-transparent"
                />
              <button className="px-4 py-2 bg-zion-purple hover: b g-zion-purple-dark text-white rounded-lg transition-colors">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        {/* Service Categories */}
        <div className="mt-12 pt-8 border-t border-zion-slate">
          <h3 className="text-xl font-semibold text-white text-center mb-8">
            Our Comprehensive Service Portfolio
          </h3>
          <div className="grid grid-cols-1 md: gri d-cols-2 lg: gri d-cols-4 gap-6">
            {footerSections.map((section) => (
              <div key={section.title} className="space-y-4">
                <h4 className="text-lg font-semibold text-white flex items-center space-x-2">
                  <section.icon className="h-5 w-5 text-zion-purple" />
                  <span>{section.title}</span>
                </h4>
                <ul className="space-y-2">
                  {section.links.slice(0, 5).map((link) => (
                    <li key={link.name}>
                      <Link
                        to={link.href}
                        className="text-gray-300 hover: tex t-zion-purple transition-colors text-sm flex items-center space-x-2 group"
                      >
                        <link .icon className="h-4 w-4 group-hover: tex t-zion-purple"  />
                        <span>{link.name}</span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="bg-zion-slate-darkest border-t border-zion-slate">
        <div className="container mx-auto px-4 sm: p x-6 lg: p x-8 py-6">
          <div className="flex flex-col md: fle x-row justify-between items-center space-y-4 md: spac e-y-0">
            <div className="flex items-center space-x-4 text-sm text-gray-400">
              <span>&copy {currentYear} Zion Tech Group. All rights reserved.</span>
              <span>•</span>
              <Link to="/privacy" className="hover: tex t-zion-purple transition-colors">
                Privacy Policy
              </Link>
              <span>•</span>
              <Link to="/terms" className="hover: tex t-zion-purple transition-colors">
                Terms of Service
              </Link>
            </div>
            
            <div className="flex items-center space-x-4">
              <span className="text-sm text-gray-400">Powered by</span>
              <div className="flex items-center space-x-2">
                <Brain className="h-5 w-5 text-zion-purple"  />
                <span className="text-sm font-semibold text-white">AI Technology</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Back to Top Button */}
      <button
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        className="fixed bottom-6 right-6 bg-zion-purple hover: b g-zion-purple-dark text-white p-3 rounded-full shadow-lg transition-all duration-300 hover: scal e-110"
        aria-label="Back to top"
      >
        <ArrowUp className="h-5 w-5"  />
      </button>
    </footer>
  );
}
