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
        { name: "Quantum Computing", href: "/services/quantum-computing-solutions" },
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
    <footer className="bg-gradient-to-br from-zinc-900 via-zinc-900 to-zinc-800 border-t border-zinc-800">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
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
              <div className="flex items-center space-x-3 text-zinc-400 hover:text-cyan-400 transition-colors">
                <Phone className="w-4 h-4 text-cyan-500" />
                <a href="tel:+13024640950" className="hover:underline">
                  +1 302 464 0950
                </a>
              </div>
              <div className="flex items-start space-x-3 text-zinc-400">
                <MapPin className="w-4 h-4 text-cyan-500 mt-0.5" />
                <span className="text-sm">364 E Main St STE 1008<br />Middletown, DE 19709</span>
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
                {section.links.map((link) => (
                  <li key={link.name}>
                    <Link 
                      to={link.href} 
                      className="text-zinc-400 hover:text-cyan-400 transition-colors text-sm hover:underline block py-1"
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
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div>
              <h4 className="text-zion-cyan font-semibold mb-3 flex items-center">
                <BookOpen className="w-4 h-4 mr-2" />
                Resources
              </h4>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link to="/white-papers" className="text-zinc-400 hover:text-white transition-colors">
                    White Papers
                  </Link>
                </li>
                <li>
                  <Link to="/webinars" className="text-zinc-400 hover:text-white transition-colors">
                    Webinars
                  </Link>
                </li>
                <li>
                  <Link to="/training" className="text-zinc-400 hover:text-white transition-colors">
                    Training
                  </Link>
                </li>
                <li>
                  <Link to="/research-development" className="text-zinc-400 hover:text-white transition-colors">
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
                  <Link to="/privacy" className="text-zinc-400 hover:text-white transition-colors">
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link to="/terms" className="text-zinc-400 hover:text-white transition-colors">
                    Terms of Service
                  </Link>
                </li>
                <li>
                  <Link to="/cookies" className="text-zinc-400 hover:text-white transition-colors">
                    Cookie Policy
                  </Link>
                </li>
                <li>
                  <Link to="/accessibility" className="text-zinc-400 hover:text-white transition-colors">
                    Accessibility
                  </Link>
                </li>
                <li>
                  <Link to="/security" className="text-zinc-400 hover:text-white transition-colors">
                    Security
                  </Link>
                </li>
                <li>
                  <Link to="/compliance" className="text-zinc-400 hover:text-white transition-colors">
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
                  <Link to="/innovative-services-showcase-2026" className="text-zinc-400 hover:text-white transition-colors">
                    Innovation Showcase 2026
                  </Link>
                </li>
                <li>
                  <Link to="/comprehensive-services-showcase-2025" className="text-zinc-400 hover:text-white transition-colors">
                    Comprehensive Showcase 2025
                  </Link>
                </li>
                <li>
                  <Link to="/innovative-ai-services-showcase-2025" className="text-zinc-400 hover:text-white transition-colors">
                    AI Services Showcase 2025
                  </Link>
                </li>
                <li>
                  <Link to="/emerging-tech" className="text-zinc-400 hover:text-white transition-colors">
                    Emerging Technology
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Quick Actions Bar */}
        <div className="bg-gradient-to-r from-zinc-800/50 to-zinc-700/50 rounded-xl p-6 mb-8 border border-zinc-700/50">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {quickLinks.map((link) => (
              <Link
                key={link.name}
                to={link.href}
                className="flex items-center space-x-3 p-3 bg-zinc-800/30 rounded-lg hover:bg-zinc-700/50 transition-all duration-300 group"
              >
                <div className="w-8 h-8 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 rounded-lg flex items-center justify-center group-hover:from-cyan-500/30 group-hover:to-purple-500/30 transition-all">
                  <link.icon className="w-4 h-4 text-cyan-400" />
                </div>
                <div>
                  <div className="text-sm font-medium text-white group-hover:text-cyan-400 transition-colors">
                    {link.name}
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="border-t border-zinc-800 pt-8">
          <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center space-y-6 lg:space-y-0">
            {/* Copyright & Legal */}
            <div className="flex flex-col space-y-2">
              <div className="text-zinc-400 text-sm">
                © {currentYear} Zion Tech Group. All rights reserved.
              </div>
              <div className="flex flex-wrap gap-4 text-xs text-zinc-500">
                <Link to="/privacy" className="hover:text-cyan-400 transition-colors">
                  Privacy Policy
                </Link>
                <span>•</span>
                <Link to="/terms" className="hover:text-cyan-400 transition-colors">
                  Terms of Service
                </Link>
                <span>•</span>
                <Link to="/cookies" className="hover:text-cyan-400 transition-colors">
                  Cookie Policy
                </Link>
                <span>•</span>
                <Link to="/accessibility" className="hover:text-cyan-400 transition-colors">
                  Accessibility
                </Link>
                <span>•</span>
                <Link to="/sitemap" className="hover:text-cyan-400 transition-colors">
                  Sitemap
                </Link>
              </div>
            </div>

            {/* Center Content - Business Hours */}
            <div className="text-center">
              <div className="text-xs text-zinc-500 mb-2">BUSINESS HOURS</div>
              <div className="text-sm text-zinc-400">
                Mon - Fri: 9:00 AM - 6:00 PM EST<br />
                24/7 Emergency Support Available
              </div>
            </div>

            {/* Social Links & Actions */}
            <div className="flex flex-col items-end space-y-4">
              {/* Social Links */}
              <div className="flex items-center space-x-3">
                <span className="text-xs text-zinc-500 mr-2">FOLLOW US</span>
                {socialLinks.map((social) => (
                  <a
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-9 h-9 bg-zinc-800 rounded-lg flex items-center justify-center text-zinc-400 hover:text-white hover:bg-gradient-to-r hover:from-cyan-500 hover:to-purple-600 transition-all duration-300 transform hover:scale-110"
                    aria-label={social.name}
                  >
                    <social.icon className="w-4 h-4" />
                  </a>
                ))}
              </div>

              {/* Status & Trust Indicators */}
              <div className="flex items-center space-x-3 text-xs text-zinc-500">
                <div className="flex items-center space-x-1">
                  <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                  <span>All Systems Operational</span>
                </div>
                <span>•</span>
                <span>99.9% Uptime</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}