import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  Send, 
  CheckCircle,
  Mail, 
  Phone, 
  MapPin, 
  ArrowUp,
  Heart,
  CheckCircle,
  Send
} from 'lucide-react';

export function FooterNewsletter() {
  const [email, setEmail] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
<<<<<<< HEAD

=======
  
>>>>>>> f586d65b60879d2bb8f7439b01dc83f1e4614bf1
  const handleSubscribe = async (e) => {
    e.preventDefault();
    if (!email) return;
    setIsLoading(true);
    // Simulate API call
    setTimeout(() => {
      setIsSubscribed(true);
      setIsLoading(false);
      setEmail('');
      // Reset after 5 seconds
      setTimeout(() => setIsSubscribed(false), 5000);
    }, 1000);
  };
<<<<<<< HEAD

=======
  
>>>>>>> f586d65b60879d2bb8f7439b01dc83f1e4614bf1
  return (
    <div className="bg-zion-blue-dark/30 p-6 rounded-xl border border-zion-cyan/20">
      <h3 className="text-xl font-semibold text-white mb-4">Stay Updated</h3>
      <p className="text-zion-slate-light mb-4 text-sm">
        Get the latest insights on AI, cybersecurity, and technology trends delivered to your inbox.
      </p>
      
      {isSubscribed ? (
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          className="flex items-center gap-3 p-3 bg-green-500/20 border border-green-500/30 rounded-lg"
        >
          <CheckCircle className="w-5 h-5 text-green-400" />
          <span className="text-green-400 text-sm">Successfully subscribed!</span>
        </motion.div>
      ) : (
        <form onSubmit={handleSubscribe} className="flex gap-2">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
            className="flex-1 px-3 py-2 bg-zion-slate-dark/50 border border-zion-cyan/20 rounded-lg text-white placeholder-zion-slate-light focus:outline-none focus:ring-2 focus:ring-zion-cyan focus:border-transparent text-sm"
            required
          />
          <motion.button
            type="submit"
            disabled={isLoading}
            className="px-4 py-2 bg-zion-cyan text-white rounded-lg hover:bg-zion-cyan/80 transition-colors disabled:opacity-50"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            {isLoading ? (
              <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
            ) : (
              <Send className="w-4 h-4" />
            )}
          </motion.button>
        </form>
      )}
    </div>
  );
}

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const footerNavigation = {
    marketplace: [
      { name: 'Products', href: '/marketplace' },
      { name: 'Services', href: '/services' },
      { name: 'Talent', href: '/talent' },
      { name: 'Equipment', href: '/equipment' },
      { name: 'Categories', href: '/categories' },
      { name: 'Green IT', href: '/green-it' },
      { name: 'IT Onsite Services', href: '/it-onsite-services' }
    ],
    company: [
      { name: 'About Us', href: '/about' },
      { name: 'Blog', href: '/blog' },
      { name: 'Partners', href: '/partners' },
      { name: 'Careers', href: '/careers' },
      { name: 'Contact', href: '/contact' },
      { name: 'Privacy Policy', href: '/privacy' },
      { name: 'Terms of Service', href: '/terms' }
    ],
    services: [
      { name: 'AI & Machine Learning', href: '/services/ai' },
      { name: 'Cybersecurity', href: '/services/cybersecurity' },
      { name: 'Cloud & DevOps', href: '/services/cloud-devops' },
      { name: 'IoT Solutions', href: '/services/iot' },
      { name: 'Quantum Computing', href: '/services/quantum' },
      { name: 'Blockchain & Web3', href: '/services/blockchain' },
      { name: 'Digital Transformation', href: '/services/digital-transformation' }
    ],
    support: [
      { name: 'Help Center', href: '/help-center' },
      { name: 'Documentation', href: '/docs' },
      { name: 'API Reference', href: '/api' },
      { name: 'Status Page', href: '/status' },
      { name: 'Contact Support', href: '/contact' },
      { name: 'Community', href: '/community' }
    ]
  };

<<<<<<< HEAD
  const socialLinks = [
    { name: 'Twitter', href: 'https://twitter.com/ziontechgroup', icon: Twitter },
    { name: 'LinkedIn', href: 'https://linkedin.com/company/ziontechgroup', icon: Linkedin },
    { name: 'Facebook', href: 'https://facebook.com/ziontechgroup', icon: Facebook },
    { name: 'Instagram', href: 'https://instagram.com/ziontechgroup', icon: Instagram },
    { name: 'GitHub', href: 'https://github.com/ziontechgroup', icon: Github }
  ];

  return (
    <footer className="bg-zion-slate-dark border-t border-zion-cyan/20">
      {/* Main Footer Content */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Company Info */}
=======
  return (
    <footer className="bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-blue-dark border-t border-zion-blue-light pt-16 pb-8 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-10 left-10 w-32 h-32 border border-zion-cyan rounded-full"></div>
        <div className="absolute bottom-20 right-20 w-24 h-24 border border-zion-purple rounded-full"></div>
        <div className="absolute top-1/2 left-1/2 w-16 h-16 border border-zion-cyan-light rounded-full"></div>
      </div>
      <div className="relative z-10 container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8 mb-12">
          {/* Company info */}
>>>>>>> f586d65b60879d2bb8f7439b01dc83f1e4614bf1
          <div className="lg:col-span-2">
            <Link to="/" className="inline-flex items-center space-x-3 mb-6">
              <div className="w-12 h-12 bg-gradient-to-br from-zion-cyan to-zion-blue rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-xl">Z</span>
              </div>
              <div>
                <h3 className="text-xl font-bold text-white">Zion Tech Group</h3>
                <p className="text-zion-slate-light text-sm">Future-Ready Technology Solutions</p>
              </div>
            </Link>
            <p className="text-zion-slate-light mb-6 max-w-md">
              Empowering businesses with cutting-edge AI, cybersecurity, and emerging technology solutions. 
              Transform your digital future with Zion Tech Group.
            </p>
            
<<<<<<< HEAD
            {/* Newsletter */}
            <FooterNewsletter />
          </div>

          {/* Navigation Sections */}
          {Object.entries(footerNavigation).map(([section, links]) => (
            <div key={section}>
              <h3 className="text-white font-semibold mb-4 capitalize">
                {section === 'marketplace' ? 'Marketplace' : section === 'company' ? 'Company' : section === 'services' ? 'Services' : 'Support'}
              </h3>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link.name}>
                    <Link
                      to={link.href}
                      className="text-zion-slate-light hover:text-zion-cyan transition-colors duration-300 text-sm"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
=======
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

            {/* Social media */}
            <div className="flex space-x-4">
              <motion.a 
                href="https://twitter.com/ziontechgroup" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-zion-slate-light hover:text-zion-cyan transition-colors p-2 hover:bg-zion-cyan/10 rounded-full" 
                aria-label="Twitter" 
                title="Twitter" 
                whileHover={{ scale: 1.1 }} 
                whileTap={{ scale: 0.95 }}
              >
                <Twitter className="h-5 w-5" aria-label="Twitter"/>
              </motion.a>
              <motion.a 
                href="https://www.linkedin.com/company/zion-tech-group" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-zion-slate-light hover:text-zion-cyan transition-colors p-2 hover:bg-zion-cyan/10 rounded-full" 
                aria-label="LinkedIn" 
                title="LinkedIn" 
                whileHover={{ scale: 1.1 }} 
                whileTap={{ scale: 0.95 }}
              >
                <Linkedin className="h-5 w-5" aria-label="LinkedIn"/>
              </motion.a>
              <motion.a 
                href="https://www.facebook.com/ziontechgroup" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-zion-slate-light hover:text-zion-cyan transition-colors p-2 hover:bg-zion-cyan/10 rounded-full" 
                aria-label="Facebook" 
                title="Facebook" 
                whileHover={{ scale: 1.1 }} 
                whileTap={{ scale: 0.95 }}
              >
                <Facebook className="h-5 w-5" aria-label="Facebook"/>
              </motion.a>
              <motion.a 
                href="https://instagram.com/ziontechgroup" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-zion-slate-light hover:text-zion-cyan transition-colors p-2 hover:bg-zion-cyan/10 rounded-full" 
                aria-label="Instagram" 
                title="Instagram" 
                whileHover={{ scale: 1.1 }} 
                whileTap={{ scale: 0.95 }}
              >
                <Instagram className="h-5 w-5" aria-label="Instagram"/>
              </motion.a>
              <motion.a 
                href="https://github.com/ziontechgroup" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-zion-slate-light hover:text-zion-cyan transition-colors p-2 hover:bg-zion-cyan/10 rounded-full" 
                aria-label="GitHub" 
                title="GitHub" 
                whileHover={{ scale: 1.1 }} 
                whileTap={{ scale: 0.95 }}
              >
                <Github className="h-5 w-5" aria-label="GitHub"/>
              </motion.a>
            </div>
          </div>

          {/* Marketplace */}
          <div>
            <h3 className="text-white font-semibold mb-4 text-lg">Marketplace</h3>
            <ul className="space-y-3">
              {footerNavigation.marketplace.map((item) => (
                <li key={item.name}>
                  <Link 
                    to={item.href} 
                    className="text-zion-slate-light hover:text-zion-cyan transition-colors text-sm hover:translate-x-1 inline-block"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-white font-semibold mb-4 text-lg">Company</h3>
            <ul className="space-y-3">
              {footerNavigation.company.map((item) => (
                <li key={item.name}>
                  <Link 
                    to={item.href} 
                    className="text-zion-slate-light hover:text-zion-cyan transition-colors text-sm hover:translate-x-1 inline-block"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="text-white font-semibold mb-4 text-lg">Resources</h3>
            <ul className="space-y-3">
              {footerNavigation.resources.map((item) => (
                <li key={item.name}>
                  <Link 
                    to={item.href} 
                    className="text-zion-slate-light hover:text-zion-cyan transition-colors text-sm hover:translate-x-1 inline-block"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="text-white font-semibold mb-4 text-lg">Support</h3>
            <ul className="space-y-3">
              {footerNavigation.support.map((item) => (
                <li key={item.name}>
                  <Link 
                    to={item.href} 
                    className="text-zion-slate-light hover:text-zion-cyan transition-colors text-sm hover:translate-x-1 inline-block"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Newsletter signup */}
        <div className="mb-12">
          <div className="bg-zion-blue-light/20 rounded-lg p-6 border border-zion-blue-light/30">
            <h3 className="text-white font-semibold mb-4 text-lg">Stay Updated</h3>
            <p className="text-zion-slate-light mb-4 text-sm leading-relaxed">
              Get the latest news on tech, AI, and marketplace opportunities delivered to your inbox.
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-2 bg-zion-blue-light/30 border border-zion-blue-light/50 rounded-lg text-white placeholder-zion-slate-light focus:outline-none focus:ring-2 focus:ring-zion-cyan focus:border-transparent"
              />
              <button className="px-6 py-2 bg-gradient-to-r from-zion-cyan to-zion-purple text-white rounded-lg hover:from-zion-cyan-dark hover:to-zion-purple-dark transition-all duration-300 font-medium">
                Subscribe
              </button>
            </div>
          </div>
        </div>
        {/* Bottom Section */}
        <div className="border-t border-zion-cyan/20 pt-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-2 text-zion-slate-light text-sm">
              <span>© 2024 Zion Tech Group. All rights reserved.</span>
              <Heart className="w-4 h-4 text-red-400 animate-pulse" />
            </div>
            
            <div className="flex items-center gap-6 text-sm">
              <Link to="/privacy" className="text-zion-slate-light hover:text-zion-cyan transition-colors">
                Privacy Policy
              </Link>
              <Link to="/terms" className="text-zion-slate-light hover:text-zion-cyan transition-colors">
                Terms of Service
              </Link>
              <Link to="/cookies" className="text-zion-slate-light hover:text-zion-cyan transition-colors">
                Cookie Policy
              </Link>
            </div>
          </div>
        </div>
>>>>>>> f586d65b60879d2bb8f7439b01dc83f1e4614bf1

        {/* Contact Info */}
        <div className="mt-12 pt-8 border-t border-zion-cyan/20">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="flex items-center space-x-3">
              <Mail className="w-5 h-5 text-zion-cyan" />
              <div>
                <p className="text-white font-medium">Email</p>
                <p className="text-zion-slate-light text-sm">contact@ziontechgroup.com</p>
              </div>
            </div>
            <div className="flex items-center space-x-3">
              <Phone className="w-5 h-5 text-zion-cyan" />
              <div>
                <p className="text-white font-medium">Phone</p>
                <p className="text-zion-slate-light text-sm">+1 (555) 123-4567</p>
              </div>
            </div>
            <div className="flex items-center space-x-3">
              <MapPin className="w-5 h-5 text-zion-cyan" />
              <div>
                <p className="text-white font-medium">Address</p>
                <p className="text-zion-slate-light text-sm">123 Tech Street, Innovation City, IC 12345</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="border-t border-zion-cyan/20">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
            {/* Copyright */}
            <div className="flex items-center space-x-2 text-zion-slate-light text-sm">
              <span>© 2024 Zion Tech Group. All rights reserved.</span>
              <span className="text-zion-cyan">Made with</span>
              <Heart className="w-4 h-4 text-red-500" />
              <span>for the future.</span>
            </div>

            {/* Social Links */}
            <div className="flex items-center space-x-4">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 text-zion-slate-light hover:text-zion-cyan hover:bg-zion-cyan/10 rounded-lg transition-all duration-300"
                  aria-label={social.name}
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
<<<<<<< HEAD

=======
>>>>>>> f586d65b60879d2bb8f7439b01dc83f1e4614bf1
      {/* Scroll to Top Button */}
      <motion.button
        onClick={scrollToTop}
        className="fixed bottom-8 right-8 p-3 bg-gradient-to-r from-zion-cyan to-zion-blue text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 z-40"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1 }}
      >
        <ArrowUp className="w-6 h-6" />
      </motion.button>
    </footer>
  );
}
