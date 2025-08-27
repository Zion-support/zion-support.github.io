import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  Mail, 
  Phone, 
  MapPin, 
  ArrowUp,
  Heart,
  CheckCircle,
  Send,
  Globe
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
    <div className="bg-zinc-900/30 p-6 rounded-xl border border-zinc-700/50">
      <h3 className="text-xl font-semibold text-white mb-4">Stay Updated</h3>
      <p className="text-zinc-400 mb-4 text-sm">
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
            className="flex-1 px-3 py-2 bg-zinc-800/50 border border-zinc-600/50 rounded-lg text-white placeholder-zinc-400 focus:outline-none focus:ring-2 focus:ring-zion-cyan focus:border-transparent text-sm"
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

function Footer() {
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
      { name: 'Support', href: '/support' }
    ],
    services: [
      { name: 'AI Services', href: '/services/ai' },
      { name: 'Cybersecurity', href: '/services/cybersecurity' },
      { name: 'Cloud & DevOps', href: '/services/cloud-devops' },
      { name: 'Digital Transformation', href: '/services/digital-transformation' },
      { name: 'IT Infrastructure', href: '/services/it-infrastructure' },
      { name: 'Quantum Computing', href: '/services/quantum-computing' },
      { name: 'Blockchain & Web3', href: '/services/blockchain-web3' }
    ],
    resources: [
      { name: 'Case Studies', href: '/case-studies' },
      { name: 'White Papers', href: '/white-papers' },
      { name: 'Webinars', href: '/webinars' },
      { name: 'Research & Development', href: '/research-development' },
      { name: 'Training', href: '/training' },
      { name: 'Documentation', href: '/docs' }
    ]
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-zion-slate-dark text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }} />
      </div>

      <div className="relative z-10">
        <div className="container mx-auto px-4 py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {Object.entries(footerNavigation).map(([section, links]) => (
              <div key={section}>
                <h4 className="text-lg font-semibold text-zion-cyan mb-4 capitalize">
                  {section}
                </h4>
                <ul className="space-y-2">
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

          {/* Newsletter Section */}
          <div className="mt-12">
            <FooterNewsletter />
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-zion-slate-light/20">
          <div className="container mx-auto px-4 py-6">
            <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
              <div className="flex items-center space-x-6 text-sm text-zion-slate-light">
                <span>&copy; 2025 Zion Tech Group. All rights reserved.</span>
                <span>Made with <Heart className="inline w-4 h-4 text-red-500" /> for innovation</span>
              </div>
              
              <div className="flex items-center space-x-4">
                <button
                  onClick={scrollToTop}
                  className="p-2 bg-zion-cyan/20 hover:bg-zion-cyan/30 text-zion-cyan rounded-lg transition-all duration-300 hover:scale-110"
                  aria-label="Scroll to top"
                >
                  {social.icon}
                </motion.a>
              ))}
            </div>
          </div>

          {/* Footer Sections */}
          {footerSections.map((section) => (
            <div key={section.title}>
              <h3 className="text-lg font-semibold text-white mb-6">{section.title}</h3>
              <ul className="space-y-3">
                {section.links.map((link) => (
                  <li key={link.label}>
                    <Link
                      to={link.path}
                      className="text-zinc-400 hover:text-zion-cyan transition-colors duration-300 text-sm"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Newsletter Section */}
        <div className="mt-16">
          <FooterNewsletter />
        </div>

        {/* Contact Info */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {contactInfo.map((contact) => (
            <motion.a
              key={contact.label}
              href={contact.href}
              className="flex items-center space-x-3 p-4 bg-zinc-800/30 border border-zinc-700/50 rounded-lg hover:bg-zinc-800/50 transition-all duration-300 group"
              whileHover={{ scale: 1.02 }}
            >
              <div className="p-2 bg-zion-cyan/20 rounded-lg group-hover:bg-zion-cyan/30 transition-colors">
                <contact.icon className="w-5 h-5 text-zion-cyan" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
