import React from "react";
import { Twitter, Linkedin, Facebook, Instagram, Github, Mail, Phone, MapPin, Globe, Shield, Zap, Brain, Database, Cloud, Lock, Users, Briefcase } from "lucide-react";
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
              Transform your digital future with Zion Tech Group's comprehensive suite of autonomous systems, 
              quantum technology, and enterprise solutions.
            </p>
            <div className="flex space-x-4">
              <a href="https://linkedin.com/company/ziontechgroup" target="_blank" rel="noopener noreferrer" className="text-zion-slate-light hover:text-zion-cyan transition-colors p-2 bg-zion-slate-dark rounded-lg hover:bg-zion-slate-darker">
                <Linkedin className="h-5 w-5" />
              </a>
              <a href="https://twitter.com/ziontechgroup" target="_blank" rel="noopener noreferrer" className="text-zion-slate-light hover:text-zion-cyan transition-colors p-2 bg-zion-slate-dark rounded-lg hover:bg-zion-slate-darker">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="https://facebook.com/ziontechgroup" target="_blank" rel="noopener noreferrer" className="text-zion-slate-light hover:text-zion-cyan transition-colors p-2 bg-zion-slate-dark rounded-lg hover:bg-zion-slate-darker">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="https://instagram.com/ziontechgroup" target="_blank" rel="noopener noreferrer" className="text-zion-slate-light hover:text-zion-cyan transition-colors p-2 bg-zion-slate-dark rounded-lg hover:bg-zion-slate-darker">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="https://github.com/ziontechgroup" target="_blank" rel="noopener noreferrer" className="text-zion-slate-light hover:text-zion-cyan transition-colors p-2 bg-zion-slate-dark rounded-lg hover:bg-zion-slate-darker">
                <Github className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-white font-semibold mb-4 text-lg flex items-center">
              <Briefcase className="w-5 h-5 mr-2 text-zion-cyan" />
              Services
            </h3>
            <ul className="space-y-3">
              <li><Link to="/services/ai-autonomous-systems" className="text-zion-slate-light hover:text-zion-cyan transition-colors flex items-center"><Brain className="w-4 h-4 mr-2" />AI & Autonomous Systems</Link></li>
              <li><Link to="/services/quantum-technology" className="text-zion-slate-light hover:text-zion-cyan transition-colors flex items-center"><Zap className="w-4 h-4 mr-2" />Quantum Technology</Link></li>
              <li><Link to="/services/cybersecurity" className="text-zion-slate-light hover:text-zion-cyan transition-colors flex items-center"><Shield className="w-4 h-4 mr-2" />Cybersecurity</Link></li>
              <li><Link to="/services/it-infrastructure" className="text-zion-slate-light hover:text-zion-cyan transition-colors flex items-center"><Database className="w-4 h-4 mr-2" />IT Infrastructure</Link></li>
              <li><Link to="/cloud-devops" className="text-zion-slate-light hover:text-zion-cyan transition-colors flex items-center"><Cloud className="w-4 h-4 mr-2" />Cloud & DevOps</Link></li>
              <li><Link to="/ai-workflow-automation" className="text-zion-slate-light hover:text-zion-cyan transition-colors flex items-center"><Zap className="w-4 h-4 mr-2" />AI Workflow Automation</Link></li>
            </ul>
          </div>

          {/* Solutions */}
          <div>
            <h3 className="text-white font-semibold mb-4 text-lg flex items-center">
              <Globe className="w-5 h-5 mr-2 text-zion-cyan" />
              Solutions
            </h3>
            <ul className="space-y-3">
              <li><Link to="/solutions/enterprise" className="text-zion-slate-light hover:text-zion-cyan transition-colors flex items-center"><Briefcase className="w-4 h-4 mr-2" />Enterprise Solutions</Link></li>
              <li><Link to="/solutions/healthcare" className="text-zion-slate-light hover:text-zion-cyan transition-colors flex items-center"><Users className="w-4 h-4 mr-2" />Healthcare Solutions</Link></li>
              <li><Link to="/ai-autonomous-business-manager" className="text-zion-slate-light hover:text-zion-cyan transition-colors flex items-center"><Brain className="w-4 h-4 mr-2" />AI Business Manager</Link></li>
              <li><Link to="/quantum-neural-network-platform" className="text-zion-slate-light hover:text-zion-cyan transition-colors flex items-center"><Zap className="w-4 h-4 mr-2" />Quantum Neural Networks</Link></li>
              <li><Link to="/autonomous-business-operations-platform" className="text-zion-slate-light hover:text-zion-cyan transition-colors flex items-center"><Zap className="w-4 h-4 mr-2" />Business Operations</Link></li>
              <li><Link to="/ai-powered-it-asset-management" className="text-zion-slate-light hover:text-zion-cyan transition-colors flex items-center"><Database className="w-4 h-4 mr-2" />IT Asset Management</Link></li>
            </ul>
          </div>

          {/* Company & Support */}
          <div>
            <h3 className="text-white font-semibold mb-4 text-lg flex items-center">
              <Users className="w-5 h-5 mr-2 text-zion-cyan" />
              Company
            </h3>
            <ul className="space-y-3">
              <li><Link to="/about" className="text-zion-slate-light hover:text-zion-cyan transition-colors">About Us</Link></li>
              <li><Link to="/team" className="text-zion-slate-light hover:text-zion-cyan transition-colors">Our Team</Link></li>
              <li><Link to="/mission" className="text-zion-slate-light hover:text-zion-cyan transition-colors">Mission & Vision</Link></li>
              <li><Link to="/partners" className="text-zion-slate-light hover:text-zion-cyan transition-colors">Partners</Link></li>
              <li><Link to="/careers" className="text-zion-slate-light hover:text-zion-cyan transition-colors">Careers</Link></li>
              <li><Link to="/case-studies" className="text-zion-slate-light hover:text-zion-cyan transition-colors">Case Studies</Link></li>
            </ul>
          </div>
        </div>

        {/* Additional Links Section */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12 pt-8 border-t border-zion-blue-light">
          <div>
            <h4 className="text-white font-semibold mb-3 text-sm uppercase tracking-wider">Resources</h4>
            <ul className="space-y-2">
              <li><Link to="/help" className="text-zion-slate-light hover:text-zion-cyan transition-colors text-sm">Help Center</Link></li>
              <li><Link to="/docs" className="text-zion-slate-light hover:text-zion-cyan transition-colors text-sm">Documentation</Link></li>
              <li><Link to="/events" className="text-zion-slate-light hover:text-zion-cyan transition-colors text-sm">Events</Link></li>
              <li><Link to="/webinars" className="text-zion-slate-light hover:text-zion-cyan transition-colors text-sm">Webinars</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="text-white font-semibold mb-3 text-sm uppercase tracking-wider">Support</h4>
            <ul className="space-y-2">
              <li><Link to="/support" className="text-zion-slate-light hover:text-zion-cyan transition-colors text-sm">Contact Support</Link></li>
              <li><Link to="/faq" className="text-zion-slate-light hover:text-zion-cyan transition-colors text-sm">FAQ</Link></li>
              <li><Link to="/pricing" className="text-zion-slate-light hover:text-zion-cyan transition-colors text-sm">Pricing</Link></li>
              <li><Link to="/contact" className="text-zion-slate-light hover:text-zion-cyan transition-colors text-sm">Get Quote</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="text-white font-semibold mb-3 text-sm uppercase tracking-wider">Legal</h4>
            <ul className="space-y-2">
              <li><Link to="/privacy" className="text-zion-slate-light hover:text-zion-cyan transition-colors text-sm">Privacy Policy</Link></li>
              <li><Link to="/terms" className="text-zion-slate-light hover:text-zion-cyan transition-colors text-sm">Terms of Service</Link></li>
              <li><Link to="/cookies" className="text-zion-slate-light hover:text-zion-cyan transition-colors text-sm">Cookie Policy</Link></li>
              <li><Link to="/soc2-compliance-automation" className="text-zion-slate-light hover:text-zion-cyan transition-colors text-sm">Compliance</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="text-white font-semibold mb-3 text-sm uppercase tracking-wider">Contact Info</h4>
            <ul className="space-y-2">
              <li className="flex items-center text-zion-slate-light text-sm">
                <Phone className="w-4 h-4 mr-2 text-zion-cyan" />
                <a href="tel:+13024640950" className="hover:text-zion-cyan transition-colors">+1 (302) 464-0950</a>
              </li>
              <li className="flex items-center text-zion-slate-light text-sm">
                <Mail className="w-4 h-4 mr-2 text-zion-cyan" />
                <a href="mailto:kleber@ziontechgroup.com" className="hover:text-zion-cyan transition-colors">kleber@ziontechgroup.com</a>
              </li>
              <li className="flex items-center text-zion-slate-light text-sm">
                <MapPin className="w-4 h-4 mr-2 text-zion-cyan" />
                <span>364 E Main St STE 1008<br />Middletown DE 19709</span>
              </li>
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
                Transforming Business with AI & Technology Innovation
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