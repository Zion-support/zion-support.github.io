'use client';
import React, { useState } from 'react';
import Link from 'next/link';
import Navigation from './Navigation';
import { ArrowRight, CheckCircle } from 'lucide-react';

const features = [
  {
    icon: "CheckCircle",
    title: "Advanced AI",
    description: "Cutting-edge artificial intelligence solutions",
    benefits: ["Machine Learning", "Natural Language Processing", "Computer Vision"]
  },
  {
    icon: "CheckCircle",
    title: "Cloud Infrastructure",
    description: "Scalable and secure cloud solutions",
    benefits: ["Auto-scaling", "High Availability", "Security"]
  },
  {
    icon: "CheckCircle",
    title: "Data Analytics",
    description: "Powerful data analysis and visualization",
    benefits: ["Real-time Analytics", "Predictive Modeling", "Business Intelligence"]
  },
  {
    icon: "CheckCircle",
    title: "Automation",
    description: "Streamline your business processes",
    benefits: ["Workflow Automation", "Process Optimization", "Efficiency Gains"]
  }
];

const benefits = [
  "Reduce operational costs by up to 40%",
  "Increase productivity with AI automation",
  "Scale your business with cloud solutions",
  "Make data-driven decisions with analytics",
  "Enhance security with advanced monitoring",
  "Improve customer experience with AI"
];

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-black/20 backdrop-blur-md border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <Link href="/" className="text-2xl font-bold text-white hover:text-cyan-400 transition-colors">
            <span className="holographic">Zion Tech</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <Link href="/" className="text-gray-300 hover:text-white transition-colors">
              Home
            </Link>
            <Link href="/about" className="text-gray-300 hover:text-white transition-colors">
              About
            </Link>
            <Link href="/ai-services" className="text-gray-300 hover:text-white transition-colors">
              AI Services
            </Link>
            <Link href="/contact" className="text-gray-300 hover:text-white transition-colors">
              Contact
            </Link>
          </nav>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden text-white hover:text-cyan-400 transition-colors"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-white/10">
            <nav className="flex flex-col space-y-4">
              <Link 
                href="/" 
                className="text-gray-300 hover:text-white transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </Link>
              <Link 
                href="/about" 
                className="text-gray-300 hover:text-white transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                About
              </Link>
              <Link 
                href="/ai-services" 
                className="text-gray-300 hover:text-white transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                AI Services
              </Link>
              <Link 
                href="/contact" 
                className="text-gray-300 hover:text-white transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Contact
              </Link>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;