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
  ShoppingCart
} from 'lucide-react';

export function Footer() {
  const currentYear = new Date().getFullYear();

  const footerSections = [
    {
      title: "AI & Automation Services",
      icon: Brain,
      links: [
        { name: "AI Enterprise Automation", href: "/services/ai-enterprise-automation-platform" },
        { name: "AI Enterprise Intelligence", href: "/services/ai-enterprise-intelligence-platform" },
        { name: "AI Data Analytics", href: "/services/ai-data-analytics-platform" },
        { name: "AI Business Intelligence", href: "/services/ai-business-intelligence" },
        { name: "AI Cybersecurity", href: "/services/ai-cybersecurity-platform" },
        { name: "AI Research Assistant", href: "/services/ai-autonomous-research-assistant" },
        { name: "AI Financial Trading", href: "/services/ai-financial-trading-platform" },
        { name: "AI Healthcare", href: "/services/ai-healthcare-platform" },
        { name: "AI Sales Copilot", href: "/services/ai-sales-copilot" },
        { name: "AI Compliance Assistant", href: "/services/ai-compliance-assistant" },
        { name: "AI Churn Predictor", href: "/services/ai-powered-customer-churn-predictor" },
        { name: "AI Invoice Automation", href: "/services/ai-powered-invoice-automation" },
        { name: "AI Legal Analyzer", href: "/services/ai-powered-legal-document-analyzer" },
        { name: "AI HR Assistant", href: "/services/ai-powered-hr-recruitment-assistant" },
        { name: "AI Marketing Automation", href: "/services/ai-powered-marketing-automation" }
      ]
    },
    {
      title: "IT & Infrastructure",
      icon: Server,
      links: [
        { name: "Infrastructure Management", href: "/services/it-infrastructure-management" },
        { name: "Cloud & DevOps", href: "/services/cloud-devops" },
        { name: "Cybersecurity", href: "/services/cybersecurity" },
        { name: "Digital Transformation", href: "/services/digital-transformation" },
        { name: "Quantum Computing", href: "/services/quantum-computing-solutions" },
        { name: "Edge Computing", href: "/services/edge-computing-solutions" },
        { name: "Blockchain Solutions", href: "/services/blockchain-enterprise-solutions" },
        { name: "IoT & Edge Computing", href: "/services/iot-edge" },
        { name: "Cloud FinOps", href: "/services/cloud-finops-optimizer" }
      ]
    },
    {
      title: "Industry Solutions",
      icon: Target,
      links: [
        { name: "Healthcare", href: "/solutions/healthcare" },
        { name: "Financial", href: "/solutions/financial" },
        { name: "Manufacturing", href: "/solutions/manufacturing" },
        { name: "Government", href: "/solutions/government" },
        { name: "Retail", href: "/solutions/retail" },
        { name: "Enterprise", href: "/enterprise" },
        { name: "Digital Transformation", href: "/digital-transformation" },
        { name: "Cloud Solutions", href: "/cloud-solutions" },
        { name: "Emerging Tech", href: "/emerging-tech" }
      ]
    },
    {
      title: "Innovative Micro SAAS 2026",
      icon: Rocket,
      links: [
        { name: "AI Customer Experience Analytics", href: "/services/ai-customer-experience-analytics-platform" },
        { name: "AI Legal Document Automation", href: "/services/ai-legal-document-automation-platform" },
        { name: "AI HR Recruitment Assistant", href: "/services/ai-powered-hr-recruitment-assistant" },
        { name: "AI Marketing Automation", href: "/services/ai-powered-marketing-automation" },
        { name: "AI Churn Predictor", href: "/services/ai-powered-customer-churn-predictor" },
        { name: "AI Invoice Automation", href: "/services/ai-powered-invoice-automation" },
        { name: "AI Legal Document Analyzer", href: "/services/ai-powered-legal-document-analyzer" },
        { name: "Quantum-Secure Password Manager", href: "/services/quantum-secure-password-manager" },
        { name: "Sustainable Carbon Tracker", href: "/services/sustainable-business-carbon-tracker" },
        { name: "Blockchain Supply Chain Verifier", href: "/services/blockchain-supply-chain-verifier" },
        { name: "Quantum-Encrypted File Storage", href: "/services/quantum-encrypted-file-storage" },
        { name: "IoT Energy Optimization", href: "/services/iot-energy-optimization-platform" }
      ]
    },
    {
      title: "Company & Resources",
      icon: Building2,
      links: [
        { name: "About Us", href: "/about" },
        { name: "Leadership", href: "/leadership" },
        { name: "Careers", href: "/careers" },
        { name: "News", href: "/news" },
        { name: "Events", href: "/events" },
        { name: "Partners", href: "/partners" },
        { name: "Contact", href: "/contact" },
        { name: "Blog", href: "/blog" },
        { name: "Documentation", href: "/docs" },
        { name: "Case Studies", href: "/case-studies" }
      ]
    }
  ];

  const quickLinks = [
    { name: "Get Started", href: "/signup", icon: Rocket },
    { name: "Request Quote", href: "/request-quote", icon: TrendingUp },
    { name: "Support", href: "/help", icon: HelpCircle },
    { name: "Pricing", href: "/pricing", icon: BarChart3 },
    { name: "Marketplace", href: "/marketplace", icon: ShoppingCart },
    { name: "Innovation Showcase", href: "/innovative-services-showcase-2026", icon: Star }
  ];

  const socialLinks = [
    { name: "LinkedIn", href: "https://linkedin.com/company/ziontechgroup", icon: Linkedin },
    { name: "Twitter", href: "https://twitter.com/ziontechgroup", icon: Twitter },
    { name: "GitHub", href: "https://github.com/ziontechgroup", icon: Github },
    { name: "Facebook", href: "https://facebook.com/ziontechgroup", icon: Facebook },
    { name: "Instagram", href: "https://instagram.com/ziontechgroup", icon: Instagram }
  ];

  return (
    <footer className="bg-zinc-900 border-t border-zinc-800">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8 mb-8">
          {/* Company Info */}
          <div className="md:col-span-2 lg:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-lg flex items-center justify-center">
                <Globe className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold text-white">Zion Tech Group</span>
            </div>
            <p className="text-zinc-400 mb-6 max-w-md">
              Transforming businesses through innovative AI, cloud, and technology solutions. 
              We help organizations of all sizes accelerate their digital transformation journey.
            </p>
            
            {/* Contact Info */}
            <div className="space-y-3">
              <div className="flex items-center space-x-3 text-zinc-400">
                <Mail className="w-4 h-4" />
                <a href="mailto:kleber@ziontechgroup.com" className="hover:text-zion-cyan transition-colors">
                  kleber@ziontechgroup.com
                </a>
              </div>
              <div className="flex items-center space-x-3 text-zinc-400">
                <Phone className="w-4 h-4" />
                <a href="tel:+13024640950" className="hover:text-zion-cyan transition-colors">
                  +1 302 464 0950
                </a>
              </div>
              <div className="flex items-center space-x-3 text-zinc-400">
                <MapPin className="w-4 h-4" />
                <span>364 E Main St STE 1008, Middletown DE 19709</span>
              </div>
            </div>

            {/* Quick Links */}
            <div className="mt-6">
              <h4 className="text-white font-semibold mb-3">Quick Actions</h4>
              <div className="grid grid-cols-2 gap-2">
                {quickLinks.slice(0, 4).map((link) => (
                  <Link
                    key={link.name}
                    to={link.href}
                    className="text-zinc-400 hover:text-zion-cyan transition-colors text-sm flex items-center p-2 rounded hover:bg-zinc-800 transition-all duration-200"
                  >
                    <link.icon className="w-3 h-3 mr-2" />
                    {link.name}
                  </Link>
                ))}
              </div>
            </div>
          </div>

          {/* Footer Sections */}
          {footerSections.map((section) => (
            <div key={section.title} className="md:col-span-1">
              <h3 className="text-white font-semibold mb-4 flex items-center">
                <section.icon className="w-4 h-4 mr-2" />
                {section.title}
              </h3>
              <ul className="space-y-2">
                {section.links.map((link) => (
                  <li key={link.name}>
                    <Link 
                      to={link.href} 
                      className="text-zinc-400 hover:text-zion-cyan transition-colors text-sm"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Additional Resources Section */}
        <div className="border-t border-zinc-800 pt-8 mb-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div>
              <h4 className="text-zion-cyan font-semibold mb-3 flex items-center">
                <BookOpen className="w-4 h-4 mr-2" />
                Resources
              </h4>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link to="/white-papers" className="text-zinc-400 hover:text-zion-cyan transition-colors">
                    White Papers
                  </Link>
                </li>
                <li>
                  <Link to="/webinars" className="text-zinc-400 hover:text-zion-cyan transition-colors">
                    Webinars
                  </Link>
                </li>
                <li>
                  <Link to="/training" className="text-zinc-400 hover:text-zion-cyan transition-colors">
                    Training
                  </Link>
                </li>
                <li>
                  <Link to="/research-development" className="text-zinc-400 hover:text-zion-cyan transition-colors">
                    Research & Development
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="text-zion-cyan font-semibold mb-3 flex items-center">
                <Shield className="w-4 h-4 mr-2" />
                Legal & Compliance
              </h4>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link to="/privacy" className="text-zinc-400 hover:text-zion-cyan transition-colors">
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link to="/terms" className="text-zinc-400 hover:text-zion-cyan transition-colors">
                    Terms of Service
                  </Link>
                </li>
                <li>
                  <Link to="/cookies" className="text-zinc-400 hover:text-zion-cyan transition-colors">
                    Cookie Policy
                  </Link>
                </li>
                <li>
                  <Link to="/accessibility" className="text-zinc-400 hover:text-zion-cyan transition-colors">
                    Accessibility
                  </Link>
                </li>
                <li>
                  <Link to="/security" className="text-zinc-400 hover:text-zion-cyan transition-colors">
                    Security
                  </Link>
                </li>
                <li>
                  <Link to="/compliance" className="text-zinc-400 hover:text-zion-cyan transition-colors">
                    Compliance
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="text-zion-cyan font-semibold mb-3 flex items-center">
                <Star className="w-4 h-4 mr-2" />
                Innovation
              </h4>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link to="/innovative-services-showcase-2026" className="text-zinc-400 hover:text-zion-cyan transition-colors">
                    Innovation Showcase 2026
                  </Link>
                </li>
                <li>
                  <Link to="/innovative-micro-saas-showcase-2026" className="text-zinc-400 hover:text-zion-cyan transition-colors">
                    Micro SAAS Showcase 2026
                  </Link>
                </li>
                <li>
                  <Link to="/comprehensive-services-showcase-2025" className="text-zinc-400 hover:text-zion-cyan transition-colors">
                    Comprehensive Showcase 2025
                  </Link>
                </li>
                <li>
                  <Link to="/innovative-ai-services-showcase-2025" className="text-zinc-400 hover:text-zion-cyan transition-colors">
                    AI Services Showcase 2025
                  </Link>
                </li>
                <li>
                  <Link to="/emerging-tech" className="text-zinc-400 hover:text-zion-cyan transition-colors">
                    Emerging Technology
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="border-t border-zinc-800 pt-8">
          <div className="flex flex-col lg:flex-row justify-between items-center space-y-4 lg:space-y-0">
            {/* Copyright */}
            <div className="text-zinc-400 text-sm text-center lg:text-left">
              © {currentYear} Zion Tech Group. All rights reserved.
            </div>

            {/* Social Links */}
            <div className="flex items-center space-x-4">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-zinc-400 hover:text-zion-cyan transition-colors p-2 hover:bg-zinc-800 rounded-lg"
                  aria-label={social.name}
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>

            {/* Additional Quick Links */}
            <div className="flex items-center space-x-4 lg:space-x-6 text-sm">
              <Link to="/sitemap" className="text-zinc-400 hover:text-zion-cyan transition-colors">
                Sitemap
              </Link>
              <Link to="/help" className="text-zinc-400 hover:text-zion-cyan transition-colors">
                Support
              </Link>
              <Link to="/contact" className="text-zinc-400 hover:text-zion-cyan transition-colors">
                Contact
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}