import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  Mail, 
  Phone, 
  MapPin, 
  ArrowUp,
  Heart,
  Send,
  CheckCircle
} from 'lucide-react';

export function FooterNewsletter() {
  const [email, setEmail] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

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
      { name: 'FAQ', href: '/faq' },
      { name: 'Sitemap', href: '/sitemap' }
    ],
    resources: [
      { name: 'Help Center', href: '/help' },
      { name: 'Documentation', href: '/docs' },
      { name: 'White Papers', href: '/white-papers' },
      { name: 'Case Studies', href: '/case-studies' },
      { name: 'Webinars', href: '/webinars' },
      { name: 'Training', href: '/training' },
      { name: 'API Reference', href: '/api' }
    ],
    legal: [
      { name: 'Privacy Policy', href: '/privacy' },
      { name: 'Terms of Service', href: '/terms' },
      { name: 'Cookie Policy', href: '/cookies' },
      { name: 'GDPR Compliance', href: '/gdpr' },
      { name: 'Accessibility', href: '/accessibility' },
      { name: 'Security', href: '/security' }
    ]
  };

  const socialLinks = [
    { name: 'LinkedIn', href: 'https://linkedin.com/company/ziontechgroup', icon: '💼' },
    { name: 'Twitter', href: 'https://twitter.com/ziontechgroup', icon: '🐦' },
    { name: 'GitHub', href: 'https://github.com/ziontechgroup', icon: '💻' },
    { name: 'YouTube', href: 'https://youtube.com/@ziontechgroup', icon: '📺' }
  ];

  return (
    <footer className="bg-gradient-to-br from-zion-slate-dark via-zion-slate to-zion-slate-light relative overflow-hidden">
      {/* Background Pattern */}
              <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMC4wMiI+PGNpcmNsZSBjeD0iMzAiIGN5PSIzMCIgcj0iMiIvPjwvZz48L2c+PC9zdmc+')] opacity-30"></div>
      
      <div className="relative z-10">
        {/* Main Footer Content */}
        <div className="container mx-auto px-4 py-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-5 gap-8">
            {/* Company Info */}
            <div className="lg:col-span-2">
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-12 h-12 bg-gradient-to-br from-zion-cyan to-zion-purple rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-2xl">Z</span>
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-white">Zion Tech Group</h3>
                  <p className="text-zion-cyan text-sm">Future-Ready Technology Solutions</p>
                </div>
              </div>
              <p className="text-zion-slate-light mb-6 max-w-md">
                Empowering businesses with cutting-edge AI, cybersecurity, and emerging technology solutions. 
                Transform your digital future with Zion Tech Group.
              </p>
              
              {/* Contact Info */}
              <div className="space-y-3">
                <div className="flex items-center space-x-3 text-zion-slate-light">
                  <Phone className="w-4 h-4 text-zion-cyan" />
                  <span>+1 302 464 0950</span>
                </div>
                <div className="flex items-center space-x-3 text-zion-slate-light">
                  <Mail className="w-4 h-4 text-zion-cyan" />
                  <span>kleber@ziontechgroup.com</span>
                </div>
                <div className="flex items-center space-x-3 text-zion-slate-light">
                  <MapPin className="w-4 h-4 text-zion-cyan" />
                  <span>364 E Main St STE 1008, Middletown DE 19709</span>
                </div>
              </div>
            </div>

            {/* Navigation Links */}
            {Object.entries(footerNavigation).map(([category, links]) => (
              <div key={category}>
                <h4 className="text-white font-semibold mb-4 capitalize">
                  {category === 'marketplace' ? 'Marketplace' : 
                   category === 'company' ? 'Company' : 
                   category === 'resources' ? 'Resources' : 'Legal'}
                </h4>
                <ul className="space-y-2">
                  {links.map((link) => (
                    <li key={link.name}>
                      <Link
                        to={link.href}
                        className="text-zion-slate-light hover:text-zion-cyan transition-colors duration-200 text-sm"
                      >
                        {link.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Newsletter Section */}
          <div className="mt-12">
            <FooterNewsletter />
          </div>

          {/* Social Links */}
          <div className="mt-8 flex flex-wrap items-center justify-between gap-4">
            <div className="flex items-center space-x-6">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-zion-slate-light hover:text-zion-cyan transition-colors duration-200 text-2xl"
                >
                  {social.icon}
                </a>
              ))}
            </div>
            
            <button
              onClick={scrollToTop}
              className="flex items-center space-x-2 text-zion-cyan hover:text-white transition-colors duration-200"
            >
              <span className="text-sm">Back to top</span>
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-zion-cyan/20">
          <div className="container mx-auto px-4 py-6">
            <div className="flex flex-col md:flex-row items-center justify-between gap-4">
              <div className="flex items-center space-x-2 text-zion-slate-light text-sm">
                <span>© 2025 Zion Tech Group. All rights reserved.</span>
                <Heart className="w-4 h-4 text-red-400" />
              </div>
              <div className="flex items-center space-x-6 text-zion-slate-light text-sm">
                <Link to="/privacy" className="hover:text-zion-cyan transition-colors duration-200">
                  Privacy Policy
                </Link>
                <Link to="/terms" className="hover:text-zion-cyan transition-colors duration-200">
                  Terms of Service
                </Link>
                <Link to="/cookies" className="hover:text-zion-cyan transition-colors duration-200">
                  Cookie Policy
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
