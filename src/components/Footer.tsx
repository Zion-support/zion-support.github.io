import React from "react";
import { Twitter, Linkedin, Facebook, Instagram, Github, Mail, Phone, MapPin, Globe, Shield, Zap, Users, Briefcase, FileText, HelpCircle } from "lucide-react";
import { Link } from "react-router-dom";

export function Footer() {
  return (
    <footer className="bg-zion-slate text-white py-16">
      <div className="relative container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mb-12">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <div className="mb-6">
              <span className="text-3xl font-bold bg-gradient-to-r from-zion-cyan via-zion-purple-light to-zion-purple bg-clip-text text-transparent">ZION</span>
            </div>
            <p className="text-zion-slate-light text-base leading-relaxed mb-6">
              Empowering businesses with cutting-edge AI solutions and innovative technology services. 
              Transform your digital future with Zion Tech Group's comprehensive suite of enterprise solutions.
            </p>
            
            {/* Contact Info */}
            <div className="space-y-3 mb-6">
              <div className="flex items-center space-x-3 text-zion-slate-light">
                <Phone className="h-5 w-5 text-zion-cyan" />
                <a href="tel:+13024640950" className="hover:text-zion-cyan transition-colors">
                  +1 (302) 464-0950
                </a>
              </div>
              <div className="flex items-center space-x-3 text-zion-slate-light">
                <Mail className="h-5 w-5 text-zion-cyan" />
                <a href="mailto:kleber@ziontechgroup.com" className="hover:text-zion-cyan transition-colors">
                  kleber@ziontechgroup.com
                </a>
              </div>
              <div className="flex items-center space-x-3 text-zion-slate-light">
                <MapPin className="h-5 w-5 text-zion-cyan" />
                <span>364 E Main St STE 1008, Middletown DE 19709</span>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex space-x-4">
              <a href="https://linkedin.com/company/ziontechgroup" target="_blank" rel="noopener noreferrer" className="text-zion-slate-light hover:text-zion-cyan transition-colors">
                <Linkedin className="h-6 w-6" />
              </a>
              <a href="https://twitter.com/ziontechgroup" target="_blank" rel="noopener noreferrer" className="text-zion-slate-light hover:text-zion-cyan transition-colors">
                <Twitter className="h-6 w-6" />
              </a>
              <a href="https://facebook.com/ziontechgroup" target="_blank" rel="noopener noreferrer" className="text-zion-slate-light hover:text-zion-cyan transition-colors">
                <Facebook className="h-6 w-6" />
              </a>
              <a href="https://instagram.com/ziontechgroup" target="_blank" rel="noopener noreferrer" className="text-zion-slate-light hover:text-zion-cyan transition-colors">
                <Instagram className="h-6 w-6" />
              </a>
              <a href="https://github.com/ziontechgroup" target="_blank" rel="noopener noreferrer" className="text-zion-slate-light hover:text-zion-cyan transition-colors">
                <Github className="h-6 w-6" />
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-white font-semibold mb-6 text-lg flex items-center">
              <Briefcase className="h-5 w-5 mr-2 text-zion-cyan" />
              Services
            </h3>
            <ul className="space-y-3">
              <li><Link to="/services/ai-autonomous-systems" className="text-zion-slate-light hover:text-zion-cyan transition-colors">AI & Autonomous Systems</Link></li>
              <li><Link to="/services/quantum-technology" className="text-zion-slate-light hover:text-zion-cyan transition-colors">Quantum Technology</Link></li>
              <li><Link to="/services/cybersecurity" className="text-zion-slate-light hover:text-zion-cyan transition-colors">Cybersecurity</Link></li>
              <li><Link to="/services/it-infrastructure" className="text-zion-slate-light hover:text-zion-cyan transition-colors">IT Infrastructure</Link></li>
              <li><Link to="/services/micro-saas-solutions" className="text-zion-slate-light hover:text-zion-cyan transition-colors">Micro SAAS Solutions</Link></li>
              <li><Link to="/ai-workflow-automation" className="text-zion-slate-light hover:text-zion-cyan transition-colors">AI Workflow Automation</Link></li>
              <li><Link to="/blockchain-enterprise-solutions" className="text-zion-slate-light hover:text-zion-cyan transition-colors">Blockchain Solutions</Link></li>
              <li><Link to="/services" className="text-zion-cyan font-medium">View All Services →</Link></li>
            </ul>
          </div>

          {/* Solutions */}
          <div>
            <h3 className="text-white font-semibold mb-6 text-lg flex items-center">
              <Zap className="h-5 w-5 mr-2 text-zion-cyan" />
              Solutions
            </h3>
            <ul className="space-y-3">
              <li><Link to="/solutions/enterprise" className="text-zion-slate-light hover:text-zion-cyan transition-colors">Enterprise Solutions</Link></li>
              <li><Link to="/solutions/healthcare" className="text-zion-slate-light hover:text-zion-cyan transition-colors">Healthcare Solutions</Link></li>
              <li><Link to="/ai-autonomous-business-platform" className="text-zion-slate-light hover:text-zion-cyan transition-colors">AI Autonomous Business</Link></li>
              <li><Link to="/quantum-neural-network-platform" className="text-zion-slate-light hover:text-zion-cyan transition-colors">Quantum Neural Networks</Link></li>
              <li><Link to="/autonomous-business-operations-platform" className="text-zion-slate-light hover:text-zion-cyan transition-colors">Autonomous Operations</Link></li>
              <li><Link to="/ai-powered-it-asset-management" className="text-zion-slate-light hover:text-zion-cyan transition-colors">AI Asset Management</Link></li>
              <li><Link to="/soc2-compliance-automation" className="text-zion-slate-light hover:text-zion-cyan transition-colors">SOC2 Compliance</Link></li>
              <li><Link to="/5g-enterprise-solutions" className="text-zion-slate-light hover:text-zion-cyan transition-colors">5G Enterprise</Link></li>
            </ul>
          </div>

          {/* Company & Support */}
          <div>
            <h3 className="text-white font-semibold mb-6 text-lg flex items-center">
              <Users className="h-5 w-5 mr-2 text-zion-cyan" />
              Company
            </h3>
            <ul className="space-y-3 mb-6">
              <li><Link to="/about" className="text-zion-slate-light hover:text-zion-cyan transition-colors">About Us</Link></li>
              <li><Link to="/team" className="text-zion-slate-light hover:text-zion-cyan transition-colors">Our Team</Link></li>
              <li><Link to="/partners" className="text-zion-slate-light hover:text-zion-cyan transition-colors">Partners</Link></li>
              <li><Link to="/mission" className="text-zion-slate-light hover:text-zion-cyan transition-colors">Mission & Vision</Link></li>
              <li><Link to="/case-studies" className="text-zion-slate-light hover:text-zion-cyan transition-colors">Case Studies</Link></li>
              <li><Link to="/news" className="text-zion-slate-light hover:text-zion-cyan transition-colors">News & Events</Link></li>
              <li><Link to="/careers" className="text-zion-slate-light hover:text-zion-cyan transition-colors">Careers</Link></li>
            </ul>

            <h3 className="text-white font-semibold mb-6 text-lg flex items-center">
              <HelpCircle className="h-5 w-5 mr-2 text-zion-cyan" />
              Support
            </h3>
            <ul className="space-y-3">
              <li><Link to="/help" className="text-zion-slate-light hover:text-zion-cyan transition-colors">Help Center</Link></li>
              <li><Link to="/docs" className="text-zion-slate-light hover:text-zion-cyan transition-colors">Documentation</Link></li>
              <li><Link to="/contact" className="text-zion-slate-light hover:text-zion-cyan transition-colors">Contact Support</Link></li>
              <li><Link to="/faq" className="text-zion-slate-light hover:text-zion-cyan transition-colors">FAQ</Link></li>
            </ul>
          </div>
        </div>

        {/* Additional Resources */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          <div className="bg-zion-slate-dark p-6 rounded-lg">
            <h4 className="text-white font-semibold mb-4 flex items-center">
              <FileText className="h-5 w-5 mr-2 text-zion-cyan" />
              Resources
            </h4>
            <ul className="space-y-2">
              <li><Link to="/webinars" className="text-zion-slate-light hover:text-zion-cyan transition-colors">Webinars</Link></li>
              <li><Link to="/white-papers" className="text-zion-slate-light hover:text-zion-cyan transition-colors">White Papers</Link></li>
              <li><Link to="/events" className="text-zion-slate-light hover:text-zion-cyan transition-colors">Events</Link></li>
              <li><Link to="/blog" className="text-zion-slate-light hover:text-zion-cyan transition-colors">Blog</Link></li>
            </ul>
          </div>

          <div className="bg-zion-slate-dark p-6 rounded-lg">
            <h4 className="text-white font-semibold mb-4 flex items-center">
              <Globe className="h-5 w-5 mr-2 text-zion-cyan" />
              Marketplace
            </h4>
            <ul className="space-y-2">
              <li><Link to="/marketplace" className="text-zion-slate-light hover:text-zion-cyan transition-colors">Digital Products</Link></li>
              <li><Link to="/pricing" className="text-zion-slate-light hover:text-zion-cyan transition-colors">Pricing Plans</Link></li>
              <li><Link to="/testimonials" className="text-zion-slate-light hover:text-zion-cyan transition-colors">Customer Stories</Link></li>
              <li><Link to="/request-quote" className="text-zion-slate-light hover:text-zion-cyan transition-colors">Request Quote</Link></li>
            </ul>
          </div>

          <div className="bg-zion-slate-dark p-6 rounded-lg">
            <h4 className="text-white font-semibold mb-4 flex items-center">
              <Shield className="h-5 w-5 mr-2 text-zion-cyan" />
              Legal
            </h4>
            <ul className="space-y-2">
              <li><Link to="/privacy" className="text-zion-slate-light hover:text-zion-cyan transition-colors">Privacy Policy</Link></li>
              <li><Link to="/terms" className="text-zion-slate-light hover:text-zion-cyan transition-colors">Terms of Service</Link></li>
              <li><Link to="/cookies" className="text-zion-slate-light hover:text-zion-cyan transition-colors">Cookie Policy</Link></li>
              <li><Link to="/dispute-management" className="text-zion-slate-light hover:text-zion-cyan transition-colors">Dispute Management</Link></li>
            </ul>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="pt-8 border-t border-zion-blue-light">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-center md:text-left mb-4 md:mb-0">
              <p className="text-zion-slate-light text-sm">
                © 2024 Zion Tech Group. All rights reserved.
              </p>
              <p className="text-zion-slate-light text-xs mt-1">
                Empowering the future through innovative technology solutions
              </p>
            </div>
            <div className="flex flex-wrap justify-center gap-6">
              <Link to="/privacy" className="text-zion-slate-light hover:text-zion-cyan text-sm transition-colors">
                Privacy Policy
              </Link>
              <Link to="/terms" className="text-zion-slate-light hover:text-zion-cyan text-sm transition-colors">
                Terms of Service
              </Link>
              <Link to="/cookies" className="text-zion-slate-light hover:text-zion-cyan text-sm transition-colors">
                Cookie Policy
              </Link>
              <Link to="/sitemap" className="text-zion-slate-light hover:text-zion-cyan text-sm transition-colors">
                Sitemap
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;