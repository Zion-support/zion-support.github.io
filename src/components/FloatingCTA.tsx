
<<<<<<< HEAD
<<<<<<< HEAD
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { MessageCircle, X, ChevronUp, Zap } from 'lucide-react';
import { useTranslation } from 'react-i18next';
=======
import React, { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { X, MessageCircle, ChevronUp, Zap } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
>>>>>>> origin/cursor/analyze-improve-and-deploy-ziontechgroup-app-099e

export function FloatingCTA() {
  const [isVisible, setIsVisible] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);
<<<<<<< HEAD
  const { t } = useTranslation();

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.pageYOffset;
      setIsVisible(scrollTop > 300);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const containerVariants = {
    hidden: { scale: 0, opacity: 0 },
    visible: { 
      scale: 1, 
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 260,
        damping: 20
      }
    },
    hover: { 
      scale: 1.1,
      transition: {
        duration: 0.2
      }
    }
  };

  const expandVariants = {
    hidden: { 
      scale: 0.8, 
      opacity: 0,
      y: 20
    },
    visible: { 
      scale: 1, 
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 25
      }
    }
=======

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  const handleClose = () => {
    setIsVisible(false);
>>>>>>> origin/cursor/analyze-improve-and-deploy-ziontechgroup-app-099e
  };

  const handleExpand = () => {
=======
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { MessageCircle, X, ChevronUp, Phone, Mail, MessageSquare } from "lucide-react";
import { Link } from "react-router-dom";

export function FloatingCTA() {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleExpanded = () => {
>>>>>>> origin/cursor/analyze-improve-and-deploy-ziontechgroup-app-fb01
    setIsExpanded(!isExpanded);
  };

  const quickActions = [
    {
      icon: <Phone className="w-5 h-5" />,
      label: "Call Support",
      action: "tel:+1-800-ZION-TECH",
      color: "bg-zion-cyan hover:bg-zion-cyan-light"
    },
    {
      icon: <Mail className="w-5 h-5" />,
      label: "Email Us",
      action: "mailto:support@ziontechgroup.com",
      color: "bg-zion-purple hover:bg-zion-purple-light"
    },
    {
      icon: <MessageSquare className="w-5 h-5" />,
      label: "Live Chat",
      action: "/contact",
      color: "bg-zion-blue hover:bg-zion-blue-light"
    }
  ];

  return (
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/analyze-improve-and-deploy-ziontechgroup-app-fb01
    <div className="fixed bottom-6 right-6 z-50">
      <AnimatePresence>
        {isExpanded && (
          <motion.div
<<<<<<< HEAD
            className="absolute bottom-20 right-0 w-80 bg-zion-blue-dark border border-zion-purple/30 rounded-2xl p-6 shadow-2xl backdrop-blur-md"
            variants={expandVariants}
            initial="hidden"
            animate="visible"
            exit="hidden"
          >
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-white font-semibold text-lg">Quick Actions</h3>
              <button
                onClick={() => setIsExpanded(false)}
                className="text-zion-slate-light hover:text-white transition-colors"
              >
                <X className="h-5 w-5" />
              </button>
            </div>
            
            <div className="space-y-3">
              <Link
                to="/match"
                className="flex items-center gap-3 p-3 rounded-lg bg-zion-purple/20 hover:bg-zion-purple/30 transition-colors group"
                onClick={() => setIsExpanded(false)}
              >
                <div className="p-2 rounded-full bg-zion-purple/30 group-hover:scale-110 transition-transform">
                  <Zap className="h-4 w-4 text-zion-cyan" />
                </div>
                <div className="flex-1">
                  <p className="text-white font-medium">AI Talent Matcher</p>
                  <p className="text-zion-slate-light text-sm">Find perfect matches instantly</p>
                </div>
              </Link>
              
              <Link
                to="/contact"
                className="flex items-center gap-3 p-3 rounded-lg bg-zion-cyan/20 hover:bg-zion-cyan/30 transition-colors group"
                onClick={() => setIsExpanded(false)}
              >
                <div className="p-2 rounded-full bg-zion-cyan/30 group-hover:scale-110 transition-transform">
                  <MessageCircle className="h-4 w-4 text-zion-purple" />
                </div>
                <div className="flex-1">
                  <p className="text-white font-medium">Get Support</p>
                  <p className="text-zion-slate-light text-sm">24/7 expert assistance</p>
                </div>
              </Link>
            </div>
            
            <div className="mt-4 pt-4 border-t border-zion-purple/20">
              <p className="text-zion-slate-light text-sm text-center">
                Need help? Our team is here for you
              </p>
=======
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 20 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="absolute bottom-16 right-0 mb-4"
          >
            <div className="bg-zion-blue-dark border border-zion-blue-light rounded-2xl p-4 shadow-2xl backdrop-blur-sm">
              <div className="text-center mb-4">
                <h3 className="text-white font-semibold mb-2">Need Help?</h3>
                <p className="text-zion-slate-light text-sm">We're here to assist you</p>
              </div>
              
              <div className="space-y-3">
                {quickActions.map((action, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    {action.action.startsWith('http') || action.action.startsWith('/') ? (
                      <Link to={action.action}>
                        <Button
                          className={`w-full ${action.color} text-white border-0 hover:shadow-lg transition-all duration-300`}
                          size="sm"
                        >
                          <span className="flex items-center gap-2">
                            {action.icon}
                            {action.label}
                          </span>
                        </Button>
                      </Link>
                    ) : (
                      <a href={action.action}>
                        <Button
                          className={`w-full ${action.color} text-white border-0 hover:shadow-lg transition-all duration-300`}
                          size="sm"
                        >
                          <span className="flex items-center gap-2">
                            {action.icon}
                            {action.label}
                          </span>
                        </Button>
                      </a>
                    )}
                  </motion.div>
                ))}
              </div>
>>>>>>> origin/cursor/analyze-improve-and-deploy-ziontechgroup-app-fb01
            </div>
          </motion.div>
        )}
      </AnimatePresence>

<<<<<<< HEAD
      <div className="flex flex-col gap-3">
        {/* Scroll to top button */}
        <motion.button
          onClick={scrollToTop}
          className="w-14 h-14 bg-zion-blue border border-zion-blue-light hover:border-zion-purple/50 rounded-full shadow-lg hover:shadow-xl flex items-center justify-center transition-all duration-300 group"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          whileHover="hover"
        >
          <ChevronUp className="h-6 w-6 text-white group-hover:text-zion-cyan transition-colors" />
        </motion.button>

        {/* Expandable CTA button */}
        <motion.button
          onClick={() => setIsExpanded(!isExpanded)}
          className="w-14 h-14 bg-gradient-to-r from-zion-purple to-zion-purple-dark border border-zion-purple/30 hover:border-zion-purple/50 rounded-full shadow-lg hover:shadow-xl flex items-center justify-center transition-all duration-300 group"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          whileHover="hover"
        >
          <MessageCircle className="h-6 w-6 text-white group-hover:text-zion-cyan transition-colors" />
        </motion.button>
      </div>
=======
      {/* Main floating button */}
      <motion.div
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        transition={{ duration: 0.2 }}
      >
        <Button
          onClick={toggleExpanded}
          className={`w-14 h-14 rounded-full shadow-2xl border-0 transition-all duration-300 ${
            isExpanded 
              ? 'bg-zion-purple hover:bg-zion-purple-light' 
              : 'bg-gradient-to-r from-zion-cyan to-zion-purple hover:from-zion-cyan-light hover:to-zion-purple-light'
          }`}
        >
          <AnimatePresence mode="wait">
            {isExpanded ? (
              <motion.div
                key="close"
                initial={{ rotate: -90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: 90, opacity: 0 }}
                transition={{ duration: 0.2 }}
              >
                <X className="w-6 h-6 text-white" />
              </motion.div>
            ) : (
              <motion.div
                key="message"
                initial={{ rotate: 90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: -90, opacity: 0 }}
                transition={{ duration: 0.2 }}
              >
                <MessageCircle className="w-6 h-6 text-white" />
              </motion.div>
            )}
          </AnimatePresence>
        </Button>
      </motion.div>

      {/* Scroll to top button */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
        className="mt-4"
      >
        <Button
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="w-14 h-14 rounded-full bg-zion-blue-dark border border-zion-blue-light hover:bg-zion-blue hover:border-zion-cyan shadow-lg transition-all duration-300"
        >
          <ChevronUp className="w-6 h-6 text-zion-cyan" />
        </Button>
      </motion.div>
>>>>>>> origin/cursor/analyze-improve-and-deploy-ziontechgroup-app-fb01
    </div>
=======
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0, scale: 0.8, y: 100 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.8, y: 100 }}
        transition={{ duration: 0.3, ease: "easeOut" }}
        className="fixed bottom-6 right-6 z-50"
      >
        <AnimatePresence mode="wait">
          {isExpanded ? (
            <motion.div
              key="expanded"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              transition={{ duration: 0.2 }}
              className="bg-gradient-to-br from-zion-purple to-zion-purple-dark border border-zion-purple-light/30 rounded-2xl p-6 shadow-2xl shadow-zion-purple/25 backdrop-blur-sm"
            >
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-white font-bold text-lg">Need Help?</h3>
                <button
                  onClick={handleClose}
                  className="text-zion-slate-light hover:text-white transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
              
              <p className="text-zion-slate-light mb-4 text-sm">
                Get instant support or explore our marketplace
              </p>
              
              <div className="space-y-3">
                <Link to="/contact">
                  <Button 
                    className="w-full bg-zion-cyan hover:bg-zion-cyan-light text-zion-blue-dark font-medium transition-all duration-300 hover:scale-105"
                    size="sm"
                  >
                    <MessageCircle className="w-4 h-4 mr-2" />
                    Contact Support
                  </Button>
                </Link>
                
                <Link to="/marketplace">
                  <Button 
                    variant="outline" 
                    className="w-full border-zion-cyan text-zion-cyan hover:bg-zion-cyan hover:text-zion-blue-dark font-medium transition-all duration-300 hover:scale-105"
                    size="sm"
                  >
                    <Zap className="w-4 h-4 mr-2" />
                    Explore Marketplace
                  </Button>
                </Link>
              </div>
              
              <button
                onClick={handleExpand}
                className="absolute -top-3 left-1/2 transform -translate-x-1/2 w-6 h-6 bg-zion-purple rounded-full flex items-center justify-center hover:bg-zion-purple-light transition-colors"
              >
                <ChevronUp className="w-3 h-3 text-white" />
              </button>
            </motion.div>
          ) : (
            <motion.div
              key="collapsed"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              transition={{ duration: 0.2 }}
              className="relative"
            >
              <button
                onClick={handleExpand}
                className="w-16 h-16 bg-gradient-to-br from-zion-purple to-zion-purple-dark rounded-full shadow-2xl shadow-zion-purple/25 hover:shadow-zion-purple/40 transition-all duration-300 hover:scale-110 flex items-center justify-center border-2 border-zion-purple-light/30"
              >
                <MessageCircle className="w-7 h-7 text-white" />
              </button>
              
              {/* Pulse animation */}
              <div className="absolute inset-0 w-16 h-16 bg-zion-purple rounded-full animate-ping opacity-20"></div>
              
              {/* Notification dot */}
              <div className="absolute -top-1 -right-1 w-4 h-4 bg-zion-cyan rounded-full border-2 border-zion-blue-dark animate-pulse"></div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </AnimatePresence>
>>>>>>> origin/cursor/analyze-improve-and-deploy-ziontechgroup-app-099e
  );
}
