<<<<<<< HEAD
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Link } from 'react-router-dom';
import { FooterNewsletter } from './FooterNewsletter';
import { Logo } from './header/Logo';
import { Facebook, Twitter, Linkedin, Instagram, Mail, Phone, MapPin, ArrowRight } from 'lucide-react';
export function Footer() {
    const currentYear = new Date().getFullYear();
    const footerSections = [
        {
            title: 'Company',
            links: [
                { name: 'About Us', path: '/about' },
                { name: 'Careers', path: '/careers' },
                { name: 'Partners', path: '/partners' },
                { name: 'Pricing', path: '/pricing' },
                { name: 'Press & Media', path: '/press' },
                { name: 'Contact', path: '/contact' },
            ]
        },
        {
            title: 'Services',
            links: [
                { name: 'AI Services', path: '/services/ai' },
                { name: 'Cloud', path: '/services/cloud' },
                { name: 'Cybersecurity', path: '/services/cybersecurity' },
                { name: 'Infrastructure', path: '/services/infrastructure' },
                { name: 'Consulting', path: '/services/consulting' },
            ]
        },
        {
            title: 'Talent',
            links: [
                { name: 'Browse Talents', path: '/talents' },
                { name: 'Talent Directory', path: '/talent' },
                { name: 'AI Matcher', path: '/match' },
                { name: 'Hire Now', path: '/contact' },
                { name: 'Post a Job', path: '/post-job' },
            ]
        },
        {
            title: 'Resources',
            links: [
                { name: 'Blog', path: '/blog' },
                { name: 'Help Center', path: '/help' },
                { name: 'FAQ', path: '/faq' },
                { name: 'Documentation', path: '/docs' },
                { name: 'API Reference', path: '/api' },
            ]
        },
        {
            title: 'Legal',
            links: [
                { name: 'Privacy Policy', path: '/privacy' },
                { name: 'Terms of Service', path: '/terms' },
                { name: 'Cookie Policy', path: '/cookies' },
                { name: 'GDPR Compliance', path: '/gdpr' },
                { name: 'Accessibility', path: '/accessibility' },
            ]
        }
    ];
    const socialLinks = [
        { name: 'Facebook', icon: Facebook, href: 'https://facebook.com/ziontechgroup' },
        { name: 'Twitter', icon: Twitter, href: 'https://twitter.com/ziontechgroup' },
        { name: 'LinkedIn', icon: Linkedin, href: 'https://linkedin.com/company/ziontechgroup' },
        { name: 'Instagram', icon: Instagram, href: 'https://instagram.com/ziontechgroup' },
    ];
    return (_jsxs("footer", { className: "bg-gray-900 text-white", children: [_jsxs("div", { className: "container mx-auto px-4 py-16", children: [_jsxs("div", { className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8", children: [_jsxs("div", { className: "lg:col-span-2", children: [_jsx(Logo, {}), _jsx("p", { className: "mt-4 text-gray-300 text-sm leading-relaxed", children: "Zion Tech Group is a leading technology company providing innovative IT solutions, AI services, and connecting top tech talent with forward-thinking organizations." }), _jsxs("div", { className: "mt-6 space-y-3", children: [_jsxs("div", { className: "flex items-center text-gray-300 text-sm", children: [_jsx(MapPin, { className: "h-4 w-4 mr-3 text-zion-cyan" }), _jsx("span", { children: "123 Tech Street, Innovation City, IC 12345" })] }), _jsxs("div", { className: "flex items-center text-gray-300 text-sm", children: [_jsx(Phone, { className: "h-4 w-4 mr-3 text-zion-cyan" }), _jsx("span", { children: "+1 (555) 123-4567" })] }), _jsxs("div", { className: "flex items-center text-gray-300 text-sm", children: [_jsx(Mail, { className: "h-4 w-4 mr-3 text-zion-cyan" }), _jsx("span", { children: "info@ziontechgroup.com" })] })] }), _jsxs("div", { className: "mt-6", children: [_jsx("h4", { className: "text-sm font-semibold text-gray-200 mb-3", children: "Follow Us" }), _jsx("div", { className: "flex space-x-4", children: socialLinks.map((social) => (_jsx("a", { href: social.href, target: "_blank", rel: "noopener noreferrer", className: "w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center text-gray-300 hover:bg-zion-cyan hover:text-white transition-colors", "aria-label": social.name, children: _jsx(social.icon, { className: "h-5 w-5" }) }, social.name))) })] })] }), footerSections.map((section) => (_jsxs("div", { children: [_jsx("h3", { className: "text-lg font-semibold text-white mb-4", children: section.title }), _jsx("ul", { className: "space-y-2", children: section.links.map((link) => (_jsx("li", { children: _jsxs(Link, { to: link.path, className: "text-gray-300 hover:text-zion-cyan transition-colors text-sm flex items-center group", children: [_jsx(ArrowRight, { className: "h-3 w-3 mr-2 opacity-0 group-hover:opacity-100 transition-opacity" }), link.name] }) }, link.name))) })] }, section.title)))] }), _jsx("div", { className: "mt-16 pt-8 border-t border-gray-800", children: _jsxs("div", { className: "max-w-2xl", children: [_jsx("h3", { className: "text-xl font-semibold text-white mb-2", children: "Stay Updated with Zion Tech Group" }), _jsx("p", { className: "text-gray-300 text-sm mb-6", children: "Get the latest insights on technology trends, industry news, and exclusive updates delivered to your inbox." }), _jsx(FooterNewsletter, {})] }) })] }), _jsx("div", { className: "border-t border-gray-800", children: _jsx("div", { className: "container mx-auto px-4 py-6", children: _jsxs("div", { className: "flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0", children: [_jsxs("div", { className: "text-gray-400 text-sm", children: ["\u00A9 ", currentYear, " Zion Tech Group. All rights reserved."] }), _jsxs("div", { className: "flex items-center space-x-6 text-sm text-gray-400", children: [_jsx(Link, { to: "/sitemap", className: "hover:text-zion-cyan transition-colors", children: "Sitemap" }), _jsx(Link, { to: "/accessibility", className: "hover:text-zion-cyan transition-colors", children: "Accessibility" }), _jsx(Link, { to: "/support", className: "hover:text-zion-cyan transition-colors", children: "Support" })] })] }) }) })] }));
}
=======
import { FooterNewsletter } from "@/components/FooterNewsletter";
import { Twitter, Linkedin, Facebook, Instagram, Github, Mail, Phone, MapPin, ArrowUp } from "lucide-react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
export function Footer() {
    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };
    return (<footer className="bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-blue-dark border-t border-zion-blue-light pt-16 pb-8 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-10 left-10 w-32 h-32 border border-zion-cyan rounded-full"></div>
        <div className="absolute bottom-20 right-20 w-24 h-24 border border-zion-purple rounded-full"></div>
        <div className="absolute top-1/2 left-1/2 w-16 h-16 border border-zion-cyan-light rounded-full"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Main footer content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8 mb-12">
          {/* Company info */}
          <div className="lg:col-span-2">
            <div className="mb-6">
              <motion.span className="text-3xl font-bold bg-gradient-to-r from-zion-cyan via-zion-purple-light to-zion-purple bg-clip-text text-transparent" whileHover={{ scale: 1.05 }} transition={{ type: "spring", stiffness: 400 }}>
                ZION
              </motion.span>
            </div>
            <p className="text-zion-slate-light mb-6 max-w-sm leading-relaxed">
              The world's first free marketplace dedicated to high-tech and artificial intelligence. 
              Connecting innovators, talent, and cutting-edge technology worldwide.
            </p>
            
            {/* Contact info */}
            <div className="space-y-3 mb-6">
              <div className="flex items-center gap-3 text-zion-slate-light">
                <Mail className="w-4 h-4 text-zion-cyan"/>
                <span className="text-sm">hello@ziontechgroup.com</span>
              </div>
              <div className="flex items-center gap-3 text-zion-slate-light">
                <Phone className="w-4 h-4 text-zion-cyan"/>
                <span className="text-sm">+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center gap-3 text-zion-slate-light">
                <MapPin className="w-4 h-4 text-zion-cyan"/>
                <span className="text-sm">Global • Remote First</span>
              </div>
            </div>
          </motion.div>

            {/* Social media */}
            <div className="flex space-x-4">
              <motion.a href="https://twitter.com/lovable_dev" target="_blank" rel="noopener noreferrer" className="text-zion-slate-light hover:text-zion-cyan transition-colors p-2 hover:bg-zion-cyan/10 rounded-full" aria-label="Twitter" title="Twitter" whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
                <Twitter className="h-5 w-5" aria-label="Twitter"/>
              </motion.a>
              <motion.a href="https://www.linkedin.com/company/zion-marketplace" target="_blank" rel="noopener noreferrer" className="text-zion-slate-light hover:text-zion-cyan transition-colors p-2 hover:bg-zion-cyan/10 rounded-full" aria-label="LinkedIn" title="LinkedIn" whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
                <Linkedin className="h-5 w-5" aria-label="LinkedIn"/>
              </motion.a>
              <motion.a href="https://www.facebook.com/zionmarketplace" target="_blank" rel="noopener noreferrer" className="text-zion-slate-light hover:text-zion-cyan transition-colors p-2 hover:bg-zion-cyan/10 rounded-full" aria-label="Facebook" title="Facebook" whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
                <Facebook className="h-5 w-5" aria-label="Facebook"/>
              </motion.a>
              <motion.a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-zion-slate-light hover:text-zion-cyan transition-colors p-2 hover:bg-zion-cyan/10 rounded-full" aria-label="Instagram" title="Instagram" whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
                <Instagram className="h-5 w-5" aria-label="Instagram"/>
              </motion.a>
              <motion.a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-zion-slate-light hover:text-zion-cyan transition-colors p-2 hover:bg-zion-cyan/10 rounded-full" aria-label="GitHub" title="GitHub" whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
                <Github className="h-5 w-5" aria-label="GitHub"/>
              </motion.a>
            </div>
          </div>

          {/* Marketplace */}
          <div>
            <h3 className="text-white font-semibold mb-4 text-lg">Marketplace</h3>
            <ul className="space-y-3">
              <li><Link to="/marketplace" className="text-zion-slate-light hover:text-zion-cyan transition-colors text-sm hover:translate-x-1 inline-block">Products</Link></li>
              <li><Link to="/services" className="text-zion-slate-light hover:text-zion-cyan transition-colors text-sm hover:translate-x-1 inline-block">Services</Link></li>
              <li><Link to="/talent" className="text-zion-slate-light hover:text-zion-cyan transition-colors text-sm hover:translate-x-1 inline-block">Talent</Link></li>
              <li><Link to="/equipment" className="text-zion-slate-light hover:text-zion-cyan transition-colors text-sm hover:translate-x-1 inline-block">Equipment</Link></li>
              <li><Link to="/categories" className="text-zion-slate-light hover:text-zion-cyan transition-colors text-sm hover:translate-x-1 inline-block">Categories</Link></li>
              <li><Link to="/green-it" className="text-zion-slate-light hover:text-zion-cyan transition-colors text-sm hover:translate-x-1 inline-block">Green IT</Link></li>
              <li><Link to="/it-onsite-services" className="text-zion-slate-light hover:text-zion-cyan transition-colors text-sm hover:translate-x-1 inline-block">IT Onsite Services</Link></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-white font-semibold mb-4 text-lg">Company</h3>
            <ul className="space-y-3">
              <li><Link to="/about" className="text-zion-slate-light hover:text-zion-cyan transition-colors text-sm hover:translate-x-1 inline-block">About Us</Link></li>
              <li><Link to="/blog" className="text-zion-slate-light hover:text-zion-cyan transition-colors text-sm hover:translate-x-1 inline-block">Blog</Link></li>
              <li><Link to="/partners" className="text-zion-cyan transition-colors text-sm hover:translate-x-1 inline-block">Partners</Link></li>
              <li><Link to="/careers" className="text-zion-slate-light hover:text-zion-cyan transition-colors text-sm hover:translate-x-1 inline-block">Careers</Link></li>
              <li><Link to="/contact" className="text-zion-slate-light hover:text-zion-cyan transition-colors text-sm hover:translate-x-1 inline-block">Contact</Link></li>
              <li><Link to="/faq" className="text-zion-slate-light hover:text-zion-cyan transition-colors text-sm hover:translate-x-1 inline-block">FAQ</Link></li>
              <li><Link to="/sitemap" className="text-zion-slate-light hover:text-zion-cyan transition-colors text-sm hover:translate-x-1 inline-block">Sitemap</Link></li>
            </ul>
          </div>

          {/* Support & Resources */}
          <div>
            <h3 className="text-white font-semibold mb-4 text-lg">Support & Resources</h3>
            <ul className="space-y-3 mb-6">
              <li><Link to="/help" className="text-zion-slate-light hover:text-zion-cyan transition-colors text-sm hover:translate-x-1 inline-block">Help Center</Link></li>
              <li><Link to="/faq" className="text-zion-slate-light hover:text-zion-cyan transition-colors text-sm hover:translate-x-1 inline-block">FAQ</Link></li>
              <li><Link to="/contact" className="text-zion-slate-light hover:text-zion-cyan transition-colors text-sm hover:translate-x-1 inline-block">Contact Support</Link></li>
              <li><Link to="/terms" className="text-zion-slate-light hover:text-zion-cyan transition-colors text-sm hover:translate-x-1 inline-block">Terms of Service</Link></li>
              <li><Link to="/privacy" className="text-zion-slate-light hover:text-zion-cyan transition-colors text-sm hover:translate-x-1 inline-block">Privacy Policy</Link></li>
              <li><Link to="/security" className="text-zion-slate-light hover:text-zion-cyan transition-colors text-sm hover:translate-x-1 inline-block">Security</Link></li>
              <li><Link to="/status" className="text-zion-slate-light hover:text-zion-cyan transition-colors text-sm hover:translate-x-1 inline-block">System Status</Link></li>
            </ul>
          </div>
          
          {/* Newsletter */}
          <div>
            <h3 className="text-white font-semibold mb-4 text-lg">Stay Updated</h3>
            <p className="text-zion-slate-light mb-4 text-sm leading-relaxed">
              Get the latest news on tech, AI, and marketplace opportunities delivered to your inbox.
            </p>
            <FooterNewsletter />
          </div>
        </div>
      </motion.div>) /* Bottom section */;
    { /* Bottom section */ }
    <div className="pt-8 border-t border-zion-blue-light">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex flex-col md:flex-row items-center gap-4 mb-4 md:mb-0">
              <p className="text-zion-slate-light text-sm">
                &copy; {new Date().getFullYear()} Zion Tech Group. All rights reserved.
              </p>
              <div className="flex items-center gap-2 text-zion-slate-light/60">
                <div className="w-2 h-2 bg-zion-cyan rounded-full animate-pulse"></div>
                <span className="text-xs">Live</span>
              </div>
            </div>
            
            <div className="flex items-center gap-6">
              <Link to="/privacy" className="text-zion-slate-light hover:text-zion-cyan text-sm transition-colors">Privacy Policy</Link>
              <Link to="/terms" className="text-zion-slate-light hover:text-zion-cyan text-sm transition-colors">Terms of Service</Link>
              <Link to="/cookies" className="text-zion-slate-light hover:text-zion-cyan text-sm transition-colors">Cookies</Link>
              <Link to="/accessibility" className="text-zion-slate-light hover:text-zion-cyan text-sm transition-colors">Accessibility</Link>
            </div>
            <motion.div className="flex items-center space-x-2 text-zion-slate-light text-sm" whileHover={{ scale: 1.05 }}>
              <span>Made with</span>
              <Heart className="w-4 h-4 text-red-400 animate-pulse"/>
              <span>for the future of technology</span>
            </motion.div>
          </div>
        </div>;
    div >
        { /* Scroll to top button */}
        < motion.button;
    onClick = { scrollToTop };
    className = "fixed bottom-6 left-6 bg-gradient-to-r from-zion-cyan to-zion-purple text-white p-3 rounded-full shadow-lg hover:shadow-zion-cyan/25 transition-all duration-300 z-40";
    whileHover = {};
    {
        scale: 1.1;
    }
}
whileTap = {};
{
    scale: 0.95;
}
initial = {};
{
    opacity: 0, y;
    20;
}
animate = {};
{
    opacity: 1, y;
    0;
}
transition = {};
{
    delay: 1;
}
    >
        <ArrowUp className="w-5 h-5"/>;
motion.button >
;
footer >
;
;
>>>>>>> origin/cursor/expand-services-and-deploy-updates-f53f
