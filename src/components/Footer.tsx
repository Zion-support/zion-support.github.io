import React from "react";
import { Twitter, Linkedin, Facebook, Instagram, Github, Mail, Phone, MapPin, Globe, Shield, Brain, Zap } from "lucide-react";
import { Link } from "react-router-dom";

export function Footer() {
  const services = [
    { name: "AI Autonomous Systems", href: "/services/ai-autonomous-systems" },
    { name: "Quantum Technology", href: "/services/quantum-technology" },
    { name: "Cybersecurity", href: "/services/cybersecurity" },
    { name: "IT Infrastructure", href: "/services/it-infrastructure" },
    { name: "Micro SAAS Solutions", href: "/services/micro-saas-solutions" },
    { name: "AI Business Intelligence", href: "/services/ai-business-intelligence" },
    { name: "AI Marketing Automation", href: "/services/ai-marketing-automation" },
    { name: "Blockchain Solutions", href: "/blockchain-enterprise-solutions" },
  ];

  const solutions = [
    { name: "Enterprise Solutions", href: "/solutions/enterprise" },
    { name: "Healthcare Solutions", href: "/solutions/healthcare" },
    { name: "Financial Solutions", href: "/solutions/financial" },
    { name: "Government Solutions", href: "/solutions/government" },
    { name: "Manufacturing Solutions", href: "/solutions/manufacturing" },
    { name: "Retail Solutions", href: "/solutions/retail" },
  ];

  const company = [
    { name: "About Us", href: "/about" },
    { name: "Our Team", href: "/team" },
    { name: "Our Mission", href: "/mission" },
    { name: "Partners", href: "/partners" },
    { name: "Careers", href: "/careers" },
    { name: "Case Studies", href: "/case-studies" },
    { name: "News", href: "/news" },
    { name: "Blog", href: "/blog" },
  ];

  const resources = [
    { name: "Help Center", href: "/help" },
    { name: "Documentation", href: "/docs" },
    { name: "White Papers", href: "/white-papers" },
    { name: "Webinars", href: "/webinars" },
    { name: "Events", href: "/events" },
    { name: "FAQ", href: "/faq" },
    { name: "Support", href: "/support" },
    { name: "Contact", href: "/contact" },
  ];

  const socialLinks = [
    { icon: Linkedin, href: "https://linkedin.com/company/zion-tech-group", label: "LinkedIn" },
    { icon: Twitter, href: "https://twitter.com/ziontechgroup", label: "Twitter" },
    { icon: Facebook, href: "https://facebook.com/ziontechgroup", label: "Facebook" },
    { icon: Instagram, href: "https://instagram.com/ziontechgroup", label: "Instagram" },
    { icon: Github, href: "https://github.com/ziontechgroup", label: "GitHub" },
  ];

  const contactInfo = [
    { icon: Phone, text: "+1 302 464 0950", href: "tel:+13024640950" },
    { icon: Mail, text: "kleber@ziontechgroup.com", href: "mailto:kleber@ziontechgroup.com" },
    { icon: MapPin, text: "364 E Main St STE 1008 Middletown DE 19709", href: "#" },
  ];

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
              Transform your digital future with Zion Tech Group.
            </p>
            
            {/* Contact Info */}
            <div className="space-y-3 mb-6">
              {contactInfo.map((contact, index) => (
                <div key={index} className="flex items-center space-x-3">
                  <contact.icon className="w-4 h-4 text-zion-cyan flex-shrink-0" />
                  <a 
                    href={contact.href} 
                    className="text-zion-slate-light hover:text-zion-cyan transition-colors text-sm"
                  >
                    {contact.text}
                  </a>
                </div>
              ))}
            </div>

            {/* Social Links */}
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <a 
                  key={index}
                  href={social.href} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-zion-slate-light/20 hover:bg-zion-cyan/20 rounded-lg flex items-center justify-center text-zion-slate-light hover:text-zion-cyan transition-all duration-300"
                  aria-label={social.label}
                >
                  <social.icon className="h-5 w-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-white font-semibold mb-6 text-lg flex items-center">
              <Brain className="w-5 h-5 mr-2 text-zion-cyan" />
              Services
            </h3>
            <ul className="space-y-3">
              {services.map((service, index) => (
                <li key={index}>
                  <Link 
                    to={service.href} 
                    className="text-zion-slate-light hover:text-zion-cyan transition-colors text-sm hover:underline"
                  >
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Solutions */}
          <div>
            <h3 className="text-white font-semibold mb-6 text-lg flex items-center">
              <Globe className="w-5 h-5 mr-2 text-zion-cyan" />
              Solutions
            </h3>
            <ul className="space-y-3">
              {solutions.map((solution, index) => (
                <li key={index}>
                  <Link 
                    to={solution.href} 
                    className="text-zion-slate-light hover:text-zion-cyan transition-colors text-sm hover:underline"
                  >
                    {solution.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company & Resources */}
          <div>
            <h3 className="text-white font-semibold mb-6 text-lg flex items-center">
              <Shield className="w-5 h-5 mr-2 text-zion-cyan" />
              Company
            </h3>
            <ul className="space-y-3 mb-6">
              {company.map((item, index) => (
                <li key={index}>
                  <Link 
                    to={item.href} 
                    className="text-zion-slate-light hover:text-zion-cyan transition-colors text-sm hover:underline"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>

            <h3 className="text-white font-semibold mb-6 text-lg flex items-center">
              <Zap className="w-5 h-5 mr-2 text-zion-cyan" />
              Resources
            </h3>
            <ul className="space-y-3">
              {resources.map((resource, index) => (
                <li key={index}>
                  <Link 
                    to={resource.href} 
                    className="text-zion-slate-light hover:text-zion-cyan transition-colors text-sm hover:underline"
                  >
                    {resource.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Newsletter Signup */}
        <div className="bg-white/5 backdrop-blur-md rounded-2xl p-8 mb-12 border border-white/10">
          <div className="text-center">
            <h3 className="text-2xl font-bold text-white mb-4">
              Stay Updated with Zion Tech Group
            </h3>
            <p className="text-zion-slate-light mb-6 max-w-2xl mx-auto">
              Get the latest insights on AI technology, industry trends, and company updates delivered to your inbox.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-zion-slate-light focus:outline-none focus:border-zion-cyan transition-colors"
              />
              <button className="bg-gradient-to-r from-zion-purple to-zion-cyan text-white px-6 py-3 rounded-lg font-semibold hover:shadow-lg hover:shadow-zion-cyan/30 transition-all duration-300">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="pt-8 border-t border-zion-blue-light">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center space-x-4 mb-4 md:mb-0">
              <span className="text-zion-slate-light text-sm">
                © 2024 Zion Tech Group. All rights reserved.
              </span>
              <span className="text-zion-slate-light text-sm">|</span>
              <span className="text-zion-slate-light text-sm">
                Empowering the Future with AI
              </span>
            </div>
            <div className="flex space-x-6">
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