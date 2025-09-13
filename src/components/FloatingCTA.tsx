import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageCircle, X, ArrowUp, Star, Zap, Users } from 'lucide-react';
import { Link } from 'react-router-dom';
export function FloatingCTA({ variant = 'default', position = 'bottom-right' }) {
        return (<AnimatePresence>
            <ArrowUp className="w-5 h-5"/>
      </AnimatePresence>);
        <AnimatePresence>
                <Zap className="w-6 h-6"/>
                  <X className="w-5 h-5"/>
              
                <Link to="/marketplace" className="flex items-center gap-3 p-3 rounded-lg hover:bg-gray-50 transition-colors group" onClick={() => setIsExpanded(false)}>
                    <Star className="w-5 h-5 text-zion-cyan"/>
                </Link>
                
                <Link to="/contact" className="flex items-center gap-3 p-3 rounded-lg hover:bg-gray-50 transition-colors group" onClick={() => setIsExpanded(false)}>
                    <MessageCircle className="w-5 h-5 text-zion-purple"/>
                </Link>
                
                <Link to="/signup" className="flex items-center gap-3 p-3 rounded-lg hover:bg-gray-50 transition-colors group" onClick={() => setIsExpanded(false)}>
                    <Users className="w-5 h-5 text-zion-cyan-light"/>
                </Link>
              
        </AnimatePresence>
      <AnimatePresence>
              <MessageCircle className="w-6 h-6"/>
                <X className="w-5 h-5"/>
            
              <Link to="/marketplace" className="flex items-center gap-3 p-3 rounded-lg hover:bg-gray-50 transition-colors group" onClick={() => setIsExpanded(false)}>
                  <Star className="w-5 h-5 text-zion-cyan"/>
              </Link>
              
              <Link to="/contact" className="flex items-center gap-3 p-3 rounded-lg hover:bg-gray-50 transition-colors group" onClick={() => setIsExpanded(false)}>
                  <MessageCircle className="w-5 h-5 text-zion-purple"/>
              </Link>
            
      </AnimatePresence>
import { MessageCircle, X, ArrowUp, Star, Zap, Users, ChevronUp } from 'lucide-react';
import { Link } from 'react-router-dom';

import { Button } from "@/components/ui/button";
import Link from "next/link";
import { useState, useEffect } from "react";
import { X } from 'lucide-react'

export function FloatingCTA() {
  const [isVisible, setIsVisible] = useState(false);
  const [isClosed, setIsClosed] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const threshold = 600; // Show CTA after scrolling 600px

      if (scrollPosition > threshold && !isClosed) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [isClosed]);

  const handleClose = () => {
    setIsClosed(true);
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-6 left-0 right-0 mx-auto max-w-md px-4 z-50 animate-fade-in">
      <div className="bg-gradient-to-r from-zion-blue-dark to-zion-blue p-4 rounded-lg border border-zion-purple shadow-lg flex items-center justify-between">
        <div className="mr-4">
          <p className="text-white font-medium">Ready to explore Zion?</p>
          <p className="text-zion-slate-light text-sm">Register today to access all features!</p>
        </div>
        <div className="flex items-center gap-2">
          <Button 
            variant="default" 
            size="sm" 
            className="bg-gradient-to-r from-zion-purple to-zion-purple-dark hover:from-zion-purple-light hover:to-zion-purple whitespace-nowrap"
            asChild
          >
            <Link href="/signup">Register Now</Link>
          </Button>
          <button 
            onClick={handleClose}
            className="text-zion-slate hover:text-white p-1"
            aria-label="Close"
          >
            <X className="w-5 h-5" />
          </button>
        </div>
      </div>
    </div>
  );
}
