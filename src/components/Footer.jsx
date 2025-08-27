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

  return (
    <footer className="bg-zion-slate-dark text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <div className="flex items-center mb-6">
              <div className="w-10 h-10 bg-gradient-to-r from-zion-cyan to-zion-blue rounded-lg flex items-center justify-center mr-3">
                <span className="text-white font-bold text-xl">Z</span>
              </div>
              <h3 className="text-2xl font-bold">Zion Tech Group</h3>
            </div>
            <p className="text-zion-slate-light mb-6 max-w-md">
              Empowering businesses with cutting-edge technology solutions. From AI and cybersecurity to cloud infrastructure and digital transformation.
            </p>
            <FooterNewsletter />
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Services</h4>
            <ul className="space-y-3">
              <li><Link to="/services/ai" className="text-zion-slate-light hover:text-zion-cyan transition-colors">AI Solutions</Link></li>
              <li><Link to="/services/cybersecurity" className="text-zion-slate-light hover:text-zion-cyan transition-colors">Cybersecurity</Link></li>
              <li><Link to="/services/cloud" className="text-zion-slate-light hover:text-zion-cyan transition-colors">Cloud & DevOps</Link></li>
              <li><Link to="/services/it" className="text-zion-slate-light hover:text-zion-cyan transition-colors">IT Infrastructure</Link></li>
              <li><Link to="/services/digital-transformation" className="text-zion-slate-light hover:text-zion-cyan transition-colors">Digital Transformation</Link></li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Resources</h4>
            <ul className="space-y-3">
              <li><Link to="/blog" className="text-zion-slate-light hover:text-zion-cyan transition-colors">Blog</Link></li>
              <li><Link to="/help" className="text-zion-slate-light hover:text-zion-cyan transition-colors">Help Center</Link></li>
              <li><Link to="/faq" className="text-zion-slate-light hover:text-zion-cyan transition-colors">FAQ</Link></li>
              <li><Link to="/careers" className="text-zion-slate-light hover:text-zion-cyan transition-colors">Careers</Link></li>
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-zion-slate-light/20 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center mb-4 md:mb-0">
              <span className="text-zion-slate-light text-sm">
                © 2024 Zion Tech Group. All rights reserved.
              </span>
            </div>
            
            <div className="flex items-center space-x-6">
              <Link to="/privacy" className="text-zion-slate-light hover:text-zion-cyan transition-colors text-sm">
                Privacy Policy
              </Link>
              <Link to="/terms" className="text-zion-slate-light hover:text-zion-cyan transition-colors text-sm">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll to Top Button */}
      <button
        onClick={scrollToTop}
        className="fixed bottom-8 right-8 w-12 h-12 bg-zion-cyan text-white rounded-full shadow-lg hover:bg-zion-cyan/80 transition-all duration-300 flex items-center justify-center"
        aria-label="Scroll to top"
      >
        <ArrowUp className="w-5 h-5" />
      </button>
    </footer>
  );
}

export default Footer;
