import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowUp as ArrowUpIcon } from 'lucide-react';

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
    <footer className="bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple text-white relative overflow-hidden">
      {/* Futuristic Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMC4wMyI+PGNpcmNsZSBjeD0iMzAiIGN5PSIzMCIgcj0iMiIvPjwvZz48L2c+PC9zdmc+')] opacity-20"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
      </div>

      <div className="relative z-10 container mx-auto px-4 py-20">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 mb-16">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-12 h-12 bg-gradient-to-br from-zion-cyan to-zion-purple rounded-xl flex items-center justify-center">
                <Rocket className="w-7 h-7 text-white" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-white">Zion Tech Group</h3>
                <p className="text-zion-slate-light">Revolutionary Technology Solutions</p>
              </div>
            </div>
            
            <p className="text-zion-slate-light mb-6 leading-relaxed">
              Leading provider of revolutionary micro SAAS services, AI solutions, cloud infrastructure, 
              and cutting-edge technology services. We transform businesses through innovative technology.
            </p>

            {/* Contact Information */}
            <div className="space-y-4">
              <div className="flex items-center space-x-3 text-zion-slate-light hover:text-zion-cyan transition-colors cursor-pointer">
                <Phone className="w-5 h-5" />
                <span>{contactInfo.phone}</span>
              </div>
              <div className="flex items-center space-x-3 text-zion-slate-light hover:text-zion-cyan transition-colors cursor-pointer">
                <Mail className="w-5 h-5" />
                <span>{contactInfo.email}</span>
              </div>
              <div className="flex items-center space-x-3 text-zion-slate-light hover:text-zion-cyan transition-colors cursor-pointer">
                <MapPin className="w-5 h-5" />
                <span>{contactInfo.address}</span>
              </div>
              <div className="flex items-center space-x-3 text-zion-slate-light hover:text-zion-cyan transition-colors cursor-pointer">
                <Globe className="w-5 h-5" />
                <span>{contactInfo.website}</span>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex space-x-4 mt-6">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`w-10 h-10 bg-white/10 border border-white/20 rounded-lg flex items-center justify-center text-zion-slate-light transition-all duration-300 hover:bg-zion-cyan hover:text-white hover:border-zion-cyan hover:scale-110 ${social.color}`}
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Footer Sections */}
          {footerSections.map((section) => (
            <div key={section.title}>
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-8 h-8 bg-gradient-to-br from-zion-cyan to-zion-purple rounded-lg flex items-center justify-center">
                  <section.icon className="w-4 h-4 text-white" />
                </div>
                <h4 className="text-lg font-semibold text-white">{section.title}</h4>
              </div>
              <p className="text-sm text-zion-slate-light mb-4">{section.description}</p>
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
                  <PhoneIcon className="h-5 w-5 text-zion-cyan" />
                  <button 
                    onClick={() => handleContactClick('phone')}
                    className="text-zion-slate-light hover:text-zion-cyan transition-colors text-sm"
                  >
                    {contactInfo.phone}
                  </button>
                </div>
                <div className="flex items-center space-x-3">
                  <EnvelopeIcon className="h-5 w-5 text-zion-cyan" />
                  <button 
                    onClick={() => handleContactClick('email')}
                    className="text-zion-slate-light hover:text-zion-cyan transition-colors text-sm"
                  >
                    {contactInfo.email}
                  </button>
                </div>
                <div className="flex items-start space-x-3">
                  <MapPinIcon className="h-5 w-5 text-zion-cyan mt-0.5" />
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
