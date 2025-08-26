import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowUp as ArrowUpIcon, Phone, Mail, MapPin } from 'lucide-react';

function Footer() {
  const currentYear = new Date().getFullYear();
  
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const footerSections = [
    {
      title: "Services",
      links: [
        { name: "AI Solutions", href: "/ai-solutions" },
        { name: "Cybersecurity", href: "/cybersecurity" },
        { name: "Cloud & DevOps", href: "/cloud-devops" },
        { name: "Data Analytics", href: "/data-analytics" },
        { name: "Quantum Technology", href: "/quantum-technology" },
        { name: "Enterprise Solutions", href: "/enterprise-solutions" }
      ]
    },
    {
      title: "Solutions",
      links: [
        { name: "Healthcare", href: "/solutions/healthcare" },
        { name: "Finance", href: "/solutions/finance" },
        { name: "Manufacturing", href: "/solutions/manufacturing" },
        { name: "Retail", href: "/solutions/retail" },
        { name: "Education", href: "/solutions/education" },
        { name: "Government", href: "/solutions/government" }
      ]
    },
    {
      title: "Company",
      links: [
        { name: "About Us", href: "/about" },
        { name: "Our Team", href: "/team" },
        { name: "Careers", href: "/careers" },
        { name: "News & Blog", href: "/news" },
        { name: "Case Studies", href: "/case-studies" },
        { name: "Partners", href: "/partners" }
      ]
    },
    {
      title: "Resources",
      links: [
        { name: "Documentation", href: "/docs" },
        { name: "API Reference", href: "/api" },
        { name: "Help Center", href: "/help" },
        { name: "Webinars", href: "/webinars" },
        { name: "White Papers", href: "/white-papers" },
        { name: "Support", href: "/support" }
      ]
    }
  ];

  const socialLinks = [
    { 
      name: 'LinkedIn', 
      url: 'https://www.linkedin.com/company/zion-tech-group', 
      icon: '💼',
      fallback: 'https://linkedin.com'
    },
    { 
      name: 'Twitter', 
      url: 'https://twitter.com/ziontechgroup', 
      icon: '🐦',
      fallback: 'https://twitter.com'
    },
    { 
      name: 'GitHub', 
      url: 'https://github.com/Zion-Holdings', 
      icon: '💻',
      fallback: 'https://github.com'
    },
    { 
      name: 'YouTube', 
      url: 'https://youtube.com/@ziontechgroup', 
      icon: '📺',
      fallback: 'https://youtube.com'
    },
    { 
      name: 'Facebook', 
      url: 'https://facebook.com/ziontechgroup', 
      icon: '📘',
      fallback: 'https://facebook.com'
    },
    { 
      name: 'Instagram', 
      url: 'https://instagram.com/ziontechgroup', 
      icon: '📷',
      fallback: 'https://facebook.com'
    }
  ];

  const contactInfo = {
    phone: '+1 302 464 0950',
    email: 'kleber@ziontechgroup.com',
    address: '364 E Main St STE 1008, Middletown DE 19709'
  };

  const handleSocialLinkClick = (link: typeof socialLinks[0], e: React.MouseEvent) => {
    e.preventDefault();
    
    // Try to open the primary URL first
    const newWindow = window.open(link.url, '_blank', 'noopener,noreferrer');
    
    // If the window fails to open, try the fallback
    if (!newWindow) {
      window.open(link.fallback, '_blank', 'noopener,noreferrer');
    }
  };

  const handleContactClick = (type: 'phone' | 'email') => {
    if (type === 'phone') {
      window.location.href = `tel:${contactInfo.phone.replace(/\s/g, '')}`;
    } else {
      window.location.href = `mailto:${contactInfo.email}`;
    }
  };

  return (
    <footer className="bg-zion-slate text-white py-12">
      <div className="relative container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {footerSections.map((section, index) => (
            <div key={index}>
              <h3 className="text-white font-semibold mb-4 text-lg">{section.title}</h3>
              <ul className="space-y-2">
                {section.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <Link 
                      to={link.href} 
                      className="text-zion-slate-light hover:text-zion-cyan transition-colors text-sm"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 pt-8 border-t border-zion-blue-light">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-white font-semibold mb-4">Contact Information</h3>
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <Phone className="h-5 w-5 text-zion-cyan" />
                  <button 
                    onClick={() => handleContactClick('phone')}
                    className="text-zion-slate-light hover:text-zion-cyan transition-colors text-sm"
                  >
                    {contactInfo.phone}
                  </button>
                </div>
                <div className="flex items-center space-x-3">
                  <Mail className="h-5 w-5 text-zion-cyan" />
                  <button 
                    onClick={() => handleContactClick('email')}
                    className="text-zion-slate-light hover:text-zion-cyan transition-colors text-sm"
                  >
                    {contactInfo.email}
                  </button>
                </div>
                <div className="flex items-start space-x-3">
                  <MapPin className="h-5 w-5 text-zion-cyan mt-0.5" />
                  <span className="text-zion-slate-light text-sm">{contactInfo.address}</span>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-white font-semibold mb-4">Follow Us</h3>
              <div className="flex flex-wrap gap-3">
                {socialLinks.map((link, index) => (
                  <button
                    key={index}
                    onClick={(e) => handleSocialLinkClick(link, e)}
                    className="w-10 h-10 bg-zion-slate-light/20 hover:bg-zion-cyan/20 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110"
                    title={link.name}
                  >
                    <span className="text-lg">{link.icon}</span>
                  </button>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-white font-semibold mb-4">Newsletter</h3>
              <p className="text-zion-slate-light text-sm mb-4">
                Stay updated with our latest insights and innovations
              </p>
              <div className="flex">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-3 py-2 bg-zion-slate-light/20 border border-zion-blue-light/30 rounded-l-lg text-white placeholder-zion-slate-light focus:outline-none focus:border-zion-cyan"
                />
                <button className="px-4 py-2 bg-zion-cyan hover:bg-zion-cyan-light text-white rounded-r-lg transition-colors">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-8 pt-6 border-t border-zion-blue-light/30">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-zion-slate-light text-sm">
              © {currentYear} Zion Tech Group. All rights reserved.
            </div>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <Link to="/privacy" className="text-zion-slate-light hover:text-zion-cyan text-sm transition-colors">
                Privacy Policy
              </Link>
              <Link to="/terms" className="text-zion-slate-light hover:text-zion-cyan text-sm transition-colors">
                Terms of Service
              </Link>
              <Link to="/cookies" className="text-zion-slate-light hover:text-zion-cyan text-sm transition-colors">
                Cookie Policy
              </Link>
            </div>
          </div>
        </div>

        <motion.button
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="absolute bottom-6 right-6 w-12 h-12 bg-zion-cyan hover:bg-zion-cyan-light rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 shadow-lg"
          whileHover={{ y: -2 }}
          whileTap={{ scale: 0.95 }}
        >
          <ArrowUpIcon className="h-6 w-6 text-white" />
        </motion.button>
      </div>
    </footer>
  );
}

export default Footer;
