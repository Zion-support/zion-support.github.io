import React from "react";
import { Twitter, Linkedin, Facebook, Instagram, Github, Mail, Phone, MapPin, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

export function Footer() {
  const currentYear = new Date().getFullYear();

  const footerSections = [
    {
      title: "Services",
      links: [
        { name: "AI Solutions", href: "/ai-solutions" },
        { name: "Quantum Technology", href: "/services/quantum-technology" },
        { name: "Cybersecurity", href: "/services/cybersecurity" },
        { name: "IT Infrastructure", href: "/services/it-infrastructure" },
        { name: "Cloud & DevOps", href: "/cloud-devops" },
        { name: "Digital Transformation", href: "/digital-transformation" },
        { name: "Micro SAAS", href: "/services/micro-saas-solutions" },
        { name: "Emerging Tech", href: "/emerging-tech" }
      ]
    },
    {
      title: "AI Services",
      links: [
        { name: "AI Autonomous Systems", href: "/services/ai-autonomous-systems" },
        { name: "AI Business Intelligence", href: "/services/ai-business-intelligence" },
        { name: "AI Marketing Automation", href: "/services/ai-marketing-automation" },
        { name: "AI Workflow Automation", href: "/ai-workflow-automation" },
        { name: "AI Content Generation", href: "/ai-content-generator" },
        { name: "AI Code Review", href: "/ai-code-review" },
        { name: "AI Research Assistant", href: "/ai-autonomous-research-assistant" }
      ]
    },
    {
      title: "Company",
      links: [
        { name: "About Us", href: "/about" },
        { name: "Our Team", href: "/team" },
        { name: "Mission", href: "/mission" },
        { name: "Partners", href: "/partners" },
        { name: "Careers", href: "/careers" },
        { name: "Case Studies", href: "/case-studies" },
        { name: "News", href: "/news" },
        { name: "Blog", href: "/blog" }
      ]
    },
    {
      title: "Support",
      links: [
        { name: "Help Center", href: "/help" },
        { name: "Documentation", href: "/docs" },
        { name: "Contact Support", href: "/contact" },
        { name: "FAQ", href: "/faq" },
        { name: "Events", href: "/events" },
        { name: "Webinars", href: "/webinars" },
        { name: "White Papers", href: "/white-papers" },
        { name: "Status Page", href: "/status" }
      ]
    }
  ];

  const contactInfo = [
    { icon: Phone, text: '+1 302 464 0950', href: 'tel:+13024640950' },
    { icon: Mail, text: 'kleber@ziontechgroup.com', href: 'mailto:kleber@ziontechgroup.com' },
    { icon: MapPin, text: '364 E Main St STE 1008 Middletown DE 19709', href: '#' }
  ];

  const socialLinks = [
    { icon: Linkedin, href: 'https://linkedin.com/company/ziontechgroup', label: 'LinkedIn' },
    { icon: Twitter, href: 'https://twitter.com/ziontechgroup', label: 'Twitter' },
    { icon: Facebook, href: 'https://facebook.com/ziontechgroup', label: 'Facebook' },
    { icon: Instagram, href: 'https://instagram.com/ziontechgroup', label: 'Instagram' },
    { icon: Github, href: 'https://github.com/ziontechgroup', label: 'GitHub' }
  ];

  return (
    <footer className="bg-zion-slate text-white py-16">
      <div className="relative container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8 mb-12">
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
                  <contact.icon className="w-4 h-4 text-zion-cyan" />
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
                  className="w-10 h-10 bg-zion-slate-light/20 hover:bg-zion-cyan/20 rounded-lg flex items-center justify-center transition-all duration-300 hover:scale-110"
                  aria-label={social.label}
                >
                  <social.icon className="w-5 h-5 text-zion-slate-light hover:text-zion-cyan transition-colors" />
                </a>
              ))}
            </div>
          </div>

          {/* Footer Sections */}
          {footerSections.map((section, index) => (
            <div key={index}>
              <h3 className="text-white font-semibold mb-4 text-lg">{section.title}</h3>
              <ul className="space-y-2">
                {section.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <Link 
                      to={link.href} 
                      className="text-zion-slate-light hover:text-zion-cyan transition-colors text-sm flex items-center group"
                    >
                      <span>{link.name}</span>
                      <ArrowRight className="w-3 h-3 ml-1 opacity-0 group-hover:opacity-100 transition-opacity" />
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Newsletter Section */}
        <div className="bg-zion-slate-light/10 rounded-xl p-8 mb-12">
          <div className="text-center">
            <h3 className="text-2xl font-semibold mb-4">Stay Updated</h3>
            <p className="text-zion-slate-light mb-6 max-w-2xl mx-auto">
              Get the latest insights on AI technology, industry trends, and company updates delivered to your inbox.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded-lg bg-zion-slate-light/20 border border-zion-slate-light/30 text-white placeholder-zion-slate-light focus:outline-none focus:border-zion-cyan transition-colors"
              />
              <button className="bg-gradient-to-r from-zion-purple to-zion-cyan hover:from-zion-purple-light hover:to-zion-cyan-light text-white px-6 py-3 rounded-lg font-medium transition-all duration-300 hover:shadow-lg hover:shadow-zion-cyan/30">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="pt-8 border-t border-zion-blue-light">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-zion-slate-light text-sm">
              © {currentYear} Zion Tech Group. All rights reserved.
            </p>
            <div className="flex flex-wrap justify-center gap-6 mt-4 md:mt-0">
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
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;