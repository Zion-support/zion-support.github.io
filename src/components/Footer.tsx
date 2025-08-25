import React from "react";
import { Twitter, Linkedin, Facebook, Instagram, Github, Mail, Phone, MapPin } from "lucide-react";
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
            <p className="text-zion-slate-light text-sm leading-relaxed mb-6">
              Empowering businesses with cutting-edge AI solutions and innovative technology services. 
              Transform your digital future with Zion Tech Group's comprehensive suite of enterprise solutions.
            </p>
            
            {/* Contact Info */}
            <div className="space-y-3 mb-6">
              <div className="flex items-center space-x-3 text-zion-slate-light">
                <Phone className="h-4 w-4 text-zion-cyan" />
                <span className="text-sm">+1 (302) 464-0950</span>
              </div>
              <div className="flex items-center space-x-3 text-zion-slate-light">
                <Mail className="h-4 w-4 text-zion-cyan" />
                <span className="text-sm">kleber@ziontechgroup.com</span>
              </div>
              <div className="flex items-center space-x-3 text-zion-slate-light">
                <MapPin className="h-4 w-4 text-zion-cyan" />
                <span className="text-sm">Delaware, United States</span>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex space-x-4">
              <a href="https://twitter.com/ziontechgroup" target="_blank" rel="noopener noreferrer" className="text-zion-slate-light hover:text-zion-cyan transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="https://linkedin.com/company/ziontechgroup" target="_blank" rel="noopener noreferrer" className="text-zion-slate-light hover:text-zion-cyan transition-colors">
                <Linkedin className="h-5 w-5" />
              </a>
              <a href="https://facebook.com/ziontechgroup" target="_blank" rel="noopener noreferrer" className="text-zion-slate-light hover:text-zion-cyan transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="https://instagram.com/ziontechgroup" target="_blank" rel="noopener noreferrer" className="text-zion-slate-light hover:text-zion-cyan transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="https://github.com/ziontechgroup" target="_blank" rel="noopener noreferrer" className="text-zion-slate-light hover:text-zion-cyan transition-colors">
                <Github className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-white font-semibold mb-4 text-lg">Services</h3>
            <ul className="space-y-2">
              <li><Link to="/ai-solutions" className="text-zion-slate-light hover:text-zion-cyan transition-colors text-sm">AI Solutions</Link></li>
              <li><Link to="/cloud-devops" className="text-zion-slate-light hover:text-zion-cyan transition-colors text-sm">Cloud & DevOps</Link></li>
              <li><Link to="/cybersecurity" className="text-zion-slate-light hover:text-zion-cyan transition-colors text-sm">Cybersecurity</Link></li>
              <li><Link to="/it-infrastructure" className="text-zion-slate-light hover:text-zion-cyan transition-colors text-sm">IT Infrastructure</Link></li>
              <li><Link to="/digital-transformation" className="text-zion-slate-light hover:text-zion-cyan transition-colors text-sm">Digital Transformation</Link></li>
              <li><Link to="/quantum-technology" className="text-zion-slate-light hover:text-zion-cyan transition-colors text-sm">Quantum Technology</Link></li>
              <li><Link to="/emerging-tech" className="text-zion-slate-light hover:text-zion-cyan transition-colors text-sm">Emerging Tech</Link></li>
            </ul>
          </div>

          {/* AI Services */}
          <div>
            <h3 className="text-white font-semibold mb-4 text-lg">AI Services</h3>
            <ul className="space-y-2">
              <li><Link to="/ai-autonomous-systems" className="text-zion-slate-light hover:text-zion-cyan transition-colors text-sm">AI Autonomous Systems</Link></li>
              <li><Link to="/ai-business-intelligence" className="text-zion-slate-light hover:text-zion-cyan transition-colors text-sm">AI Business Intelligence</Link></li>
              <li><Link to="/ai-marketing-automation" className="text-zion-slate-light hover:text-zion-cyan transition-colors text-sm">AI Marketing Automation</Link></li>
              <li><Link to="/ai-workflow-automation" className="text-zion-slate-light hover:text-zion-cyan transition-colors text-sm">AI Workflow Automation</Link></li>
              <li><Link to="/ai-content-generation-automation" className="text-zion-slate-light hover:text-zion-cyan transition-colors text-sm">AI Content Generation</Link></li>
              <li><Link to="/ai-autonomous-research-assistant" className="text-zion-slate-light hover:text-zion-cyan transition-colors text-sm">AI Research Assistant</Link></li>
            </ul>
          </div>

          {/* Company & Resources */}
          <div>
            <h3 className="text-white font-semibold mb-4 text-lg">Company</h3>
            <ul className="space-y-2 mb-6">
              <li><Link to="/about" className="text-zion-slate-light hover:text-zion-cyan transition-colors text-sm">About Us</Link></li>
              <li><Link to="/mission" className="text-zion-slate-light hover:text-zion-cyan transition-colors text-sm">Our Mission</Link></li>
              <li><Link to="/team" className="text-zion-slate-light hover:text-zion-cyan transition-colors text-sm">Our Team</Link></li>
              <li><Link to="/careers" className="text-zion-slate-light hover:text-zion-cyan transition-colors text-sm">Careers</Link></li>
              <li><Link to="/partners" className="text-zion-slate-light hover:text-zion-cyan transition-colors text-sm">Partners</Link></li>
              <li><Link to="/pricing" className="text-zion-slate-light hover:text-zion-cyan transition-colors text-sm">Pricing</Link></li>
            </ul>

            <h3 className="text-white font-semibold mb-4 text-lg">Resources</h3>
            <ul className="space-y-2">
              <li><Link to="/case-studies" className="text-zion-slate-light hover:text-zion-cyan transition-colors text-sm">Case Studies</Link></li>
              <li><Link to="/white-papers" className="text-zion-slate-light hover:text-zion-cyan transition-colors text-sm">White Papers</Link></li>
              <li><Link to="/webinars" className="text-zion-slate-light hover:text-zion-cyan transition-colors text-sm">Webinars</Link></li>
              <li><Link to="/events" className="text-zion-slate-light hover:text-zion-cyan transition-colors text-sm">Events</Link></li>
              <li><Link to="/blog" className="text-zion-slate-light hover:text-zion-cyan transition-colors text-sm">Blog</Link></li>
              <li><Link to="/news" className="text-zion-slate-light hover:text-zion-cyan transition-colors text-sm">News</Link></li>
            </ul>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="pt-8 border-t border-zion-blue-light">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-zion-slate-light text-sm">
              © 2024 Zion Tech Group. All rights reserved.
            </p>
            <div className="flex flex-wrap justify-center space-x-6 mt-4 md:mt-0">
              <Link to="/privacy" className="text-zion-slate-light hover:text-zion-cyan text-sm transition-colors">
                Privacy Policy
              </Link>
              <Link to="/terms" className="text-zion-slate-light hover:text-zion-cyan text-sm transition-colors">
                Terms of Service
              </Link>
              <Link to="/cookies" className="text-zion-slate-light hover:text-zion-cyan text-sm transition-colors">
                Cookie Policy
              </Link>
              <Link to="/accessibility" className="text-zion-slate-light hover:text-zion-cyan text-sm transition-colors">
                Accessibility
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