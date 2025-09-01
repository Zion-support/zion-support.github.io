import React, { useState, useEffect } from 'react';'import { motion, AnimatePresence } from 'framer-motion';'import { MessageCircle, X, ArrowUp, Star, Zap, Users } from 'lucide-react';'import { Link } from 'react-router-dom';''
export function FloatingCTA({

  variant = 'default', position = 'bottom-right'}) {''  const [isExpanded, setIsExpanded] = useState(false);
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {;
      setShowScrollTop(window.scrollY > 400);
    };
    window.addEventListener('scroll', handleScroll);'    return () => window.removeEventListener('scroll', handleScroll);'  }, []);'
  const scrollToTop = () => {;

    window.scrollTo({ top: 0, behavior: 'smooth' });'  };'
  const getPositionClasses = () => {;
    switch (position) {

      case 'bottom-left': '''        return 'bottom-6 left-6';'      case 'top-right': '''        return 'top-6 right-6';'      case 'top-left': '''        return 'top-6 left-6';'      default: '''        return 'bottom-6 right-6';'    }'  };

  const getExpandedPositionClasses = () => {;
    switch (position) {

      case 'bottom-left': '''        return 'bottom-6 left-6';'      case 'top-right': '''        return 'top-6 right-6';'      case 'top-left': '''        return 'top-6 left-6';'      default: '''        return 'bottom-6 right-6';'    }'  };

  if (variant === 'minimal') {''    return();
      <AnimatePresence>
        {showScrollTop && (
          <motion.button
            onClick={scrollToTop}
            className={`fixed ${getPositionClasses()} bg-gradient-to-r from-zion-cyan to-zion-purple text-white p-4 rounded-full shadow-2xl hover: shadow-zion-cyan/25 transition-all duration-300 z-40`}`            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 20 }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            <ArrowUp className="w-5 h-5" />"          </motion.button>"        )}
      </AnimatePresence>
    );
  }

  if (variant === 'featured') {''    return()``      <div className={`fixed ${getPositionClasses()} z-40`}>`        <AnimatePresence>
          {!isExpanded ? (
            <motion.button
              onClick={() => setIsExpanded(true)}"""              className="bg-gradient-to-r from-zion-purple via-zion-cyan to-zion-purple text-white p-4 rounded-full shadow-2xl hover: shadow-zion-purple/25 transition-all duration-300 group""              initial={{ opacity: 0, scale: 0.8 }}"              animate={{ opacity: 1, scale: 1 }}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >"""              <Star className="w-5 h-5" />"            </motion.button>"          ) : (
            <motion.div"""              className="bg-white rounded-2xl shadow-2xl border border-gray-200 p-6 w-80""              initial={{ opacity: 0, scale: 0.8, y: 20 }}"              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.8, y: 20 }}
            >"""              <div className="flex items-center justify-between mb-4">"""                <h3 className="text-lg font-semibold text-gray-900">"                  Featured Services"                </h3>
                <button
                  onClick={() => setIsExpanded(false)}"""                  className="text-gray-400 hover: text-gray-600 transition-colors""                >"""                  <X className="w-5 h-5" />"                </button>"              </div>
"""              <div className="space-y-3 mb-4">"""                <div className="flex items-center gap-3 p-3 bg-gradient-to-r from-zion-cyan/10 to-zion-purple/10 rounded-lg">"""                  <Zap className="w-5 h-5 text-zion-cyan" />"""                  <span className="text-sm text-gray-700">AI Solutions</span>"                </div>"""                <div className="flex items-center gap-3 p-3 bg-gradient-to-r from-zion-purple/10 to-zion-cyan/10 rounded-lg">"""                  <Users className="w-5 h-5 text-zion-purple" />"""                  <span className="text-sm text-gray-700">Team & Talent</span>"                </div>"              </div>

              <Link"""                to="/contact""                className="block w-full bg-gradient-to-r from-zion-cyan to-zion-purple text-white text-center py-2 px-4 rounded-lg hover:from-zion-cyan-dark hover:to-zion-purple-dark transition-all duration-300""              >"                Get Started
              </Link>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    );
  }

  // Default variant
  return()``    <div className={`fixed ${getPositionClasses()} z-40`}>`      <AnimatePresence>
        {!isExpanded ? (
          <motion.button
            onClick={() => setIsExpanded(true)}"""            className="bg-gradient-to-r from-zion-cyan to-zion-purple text-white p-4 rounded-full shadow-2xl hover: shadow-zion-cyan/25 transition-all duration-300 group""            initial={{ opacity: 0, scale: 0.8 }}"            animate={{ opacity: 1, scale: 1 }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >"""            <MessageCircle className="w-5 h-5" />"          </motion.button>"        ) : (
          <motion.div"""            className="bg-white rounded-2xl shadow-2xl border border-gray-200 p-6 w-80""            initial={{ opacity: 0, scale: 0.8, y: 20 }}"            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 20 }}
          >"""            <div className="flex items-center justify-between mb-4">"""              <h3 className="text-lg font-semibold text-gray-900">"                Need Help?"              </h3>
              <button
                onClick={() => setIsExpanded(false)}"""                className="text-gray-400 hover: text-gray-600 transition-colors""              >"""                <X className="w-5 h-5" />"              </button>"            </div>
"""            <p className="text-gray-600 mb-4">"              Our team is here to help you with any questions or concerns."            </p>
"""            <div className="space-y-3 mb-4">"              <Link"""                to="/contact""                className="block w-full bg-gradient-to-r from-zion-cyan to-zion-purple text-white text-center py-2 px-4 rounded-lg hover:from-zion-cyan-dark hover:to-zion-purple-dark transition-all duration-300""              >"                Contact Us
              </Link>
              <Link"""                to="/services""                className="block w-full bg-gray-100 text-gray-700 text-center py-2 px-4 rounded-lg hover:bg-gray-200 transition-all duration-300""              >"                View Services
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
'"`'"""`