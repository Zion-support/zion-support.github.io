'use client';
import React, { memo } from 'react';
import { Link } from 'react-router-dom';
import { Right, Facebook, Twitter, Linkedin, Instagram, Youtube, Github, Star, Circle } from 'lucide-react';

const Footer: React.FC = () => {
  const footerLinks = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Services', href: '/services' },
    { name: 'Contact', href: '/contact' }
  ];

  const socialLinks = [
    { name: 'Facebook', href: '#', icon: Facebook },
    { name: 'Twitter', href: '#', icon: Twitter },
    { name: 'LinkedIn', href: '#', icon: Linkedin },
    { name: 'Instagram', href: '#', icon: Instagram },
    { name: 'YouTube', href: '#', icon: Youtube },
    { name: 'GitHub', href: '#', icon: Github }
  ];

  const serviceLinks = [
    { name: 'AI Services', href: '/ai-services' },
    { name: 'IT Solutions', href: '/it-solutions' },
    { name: 'Digital Transformation', href: '/digital-transformation' },
    { name: 'Cloud Migration', href: '/cloud-migration' }
  ];

  return (
    <footer className="bg-slate-900 text-white">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <h3 className="text-xl font-bold text-white cyber-text neon-pulse">Zion Tech Group</h3>
            <p className="text-sm text-cyan-400">AI & IT Solutions</p>
            <p className="text-gray-300 text-sm leading-relaxed mt-4">
              Leading provider of AI-powered enterprise solutions, quantum computing, autonomous systems, 
              and digital transformation services. Transform your business with cutting-edge technology.
                  <to={service.url}
                    className="text-gray-300 hover:text-cyan-400 transition-colors duration-300 text-sm group flex items-center"
                  >
                <to="/ai-services"
                  className="text-cyan-400 hover:text-cyan-300 transition-colors duration-200 text-sm font-medium"
                >
                  View All AI Services →
                  <to={service.url}
                    className="text-gray-300 hover:text-cyan-400 transition-colors duration-300 text-sm group flex items-center"
                  >
                <to="/it-services"
                  className="text-cyan-400 hover:text-cyan-300 transition-colors duration-200 text-sm font-medium"
                >
                <to="/micro-saas"
                className="text-cyan-400 hover:text-cyan-300 text-sm font-medium flex items-center group"
              >
                View All Solutions
                <Right className="w-3 h-3 ml-1 group-hover:translate-x-1 transition-transform duration-300" />
                <div className="text-white font-medium">{contactInfo.hours}
                <div className="text-gray-400 text-sm">Business hours
                  <to={link.url}
                    className="text-gray-400 hover:text-cyan-400 transition-colors duration-300 text-sm"
                  >
                  <to={link.url}
                    className="text-gray-400 hover:text-cyan-400 transition-colors duration-300 text-sm"
                  >
              <li><to="/services" className="text-gray-400 hover:text-cyan-400 transition-colors duration-300 text-sm">All Services</>
              <li><to="/pricing" className="text-gray-400 hover:text-cyan-400 transition-colors duration-300 text-sm">Pricing</>
              <li><to="/demo" className="text-gray-400 hover:text-cyan-400 transition-colors duration-300 text-sm">Request Demo</>
              <li><to="/consultation" className="text-gray-400 hover:text-cyan-400 transition-colors duration-300 text-sm">Free Consultation</>
              <to="/privacy" className="text-sm text-gray-400 hover:text-cyan-400 transition-colors">
                Privacy Policy
              <to="/terms" className="text-sm text-gray-400 hover:text-cyan-400 transition-colors">
                Terms of Service
              <to="/cookies" className="text-sm text-gray-400 hover:text-cyan-400 transition-colors">
                Cookie Policy
  );
});

Footer.displayName = 'Footer';
export default Footer;
