<<<<<<< HEAD
import React from 'react';
import Link from 'next/link';
import { Twitter, Linkedin, Facebook, Instagram, Github, ChevronUp } from 'lucide-react';

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-slate-900 border-t border-slate-700/50">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="col-span-1 md:col-span-2">
            <h3 className="text-2xl font-bold text-white mb-4">Zion Tech Group</h3>
            <p className="text-gray-400 mb-4">
              Leading provider of AI-powered technology solutions and enterprise services.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Linkedin className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
=======
import { FooterNewsletter } from "./FooterNewsletter";
import { Twitter, Linkedin, Facebook, Instagram, Github, ChevronUp } from 'lucide-react';
import Link from "next/link";

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <footer className="bg-background border-t border-border">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-foreground">Zion Tech Group</h3>
            <p className="text-sm text-foreground/80">
              Enterprise-grade AI, micro SaaS, and IT solutions that drive real business results.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-foreground/60 hover:text-primary transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-foreground/60 hover:text-primary transition-colors">
                <Linkedin className="h-5 w-5" />
              </a>
              <a href="#" className="text-foreground/60 hover:text-primary transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-foreground/60 hover:text-primary transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="text-foreground/60 hover:text-primary transition-colors">
>>>>>>> 2fc87795dcf7cb742c24a257dd9040071acce941
                <Github className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Services */}
<<<<<<< HEAD
          <div>
            <h4 className="text-white font-semibold mb-4">Services</h4>
            <ul className="space-y-2">
              <li><Link href="/ai-solutions" className="text-gray-400 hover:text-white transition-colors">AI Solutions</Link></li>
              <li><Link href="/cloud-services" className="text-gray-400 hover:text-white transition-colors">Cloud Services</Link></li>
              <li><Link href="/cybersecurity" className="text-gray-400 hover:text-white transition-colors">Cybersecurity</Link></li>
              <li><Link href="/consulting" className="text-gray-400 hover:text-white transition-colors">Consulting</Link></li>
=======
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-foreground">Services</h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="/services/ai-services" className="text-foreground/80 hover:text-primary transition-colors">AI Services</Link></li>
              <li><Link href="/services/micro-saas" className="text-foreground/80 hover:text-primary transition-colors">Micro SaaS</Link></li>
              <li><Link href="/services/it-services" className="text-foreground/80 hover:text-primary transition-colors">IT Services</Link></li>
              <li><Link href="/pricing" className="text-foreground/80 hover:text-primary transition-colors">Pricing</Link></li>
>>>>>>> 2fc87795dcf7cb742c24a257dd9040071acce941
            </ul>
          </div>

          {/* Company */}
<<<<<<< HEAD
          <div>
            <h4 className="text-white font-semibold mb-4">Company</h4>
            <ul className="space-y-2">
              <li><Link href="/about" className="text-gray-400 hover:text-white transition-colors">About</Link></li>
              <li><Link href="/careers" className="text-gray-400 hover:text-white transition-colors">Careers</Link></li>
              <li><Link href="/contact" className="text-gray-400 hover:text-white transition-colors">Contact</Link></li>
              <li><Link href="/blog" className="text-gray-400 hover:text-white transition-colors">Blog</Link></li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-slate-700/50">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              &copy; {new Date().getFullYear()} Zion Tech Group. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <Link href="/privacy" className="text-gray-400 hover:text-white text-sm transition-colors">
                Privacy Policy
              </Link>
              <Link href="/terms" className="text-gray-400 hover:text-white text-sm transition-colors">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>

        {/* Back to Top Button */}
        <button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 bg-cyan-600 hover:bg-cyan-700 text-white p-3 rounded-full shadow-lg transition-all duration-300 z-50"
        >
          <ChevronUp className="w-5 h-5" />
        </button>
=======
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-foreground">Company</h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="/about" className="text-foreground/80 hover:text-primary transition-colors">About</Link></li>
              <li><Link href="/contact" className="text-foreground/80 hover:text-primary transition-colors">Contact</Link></li>
              <li><Link href="/careers" className="text-foreground/80 hover:text-primary transition-colors">Careers</Link></li>
              <li><Link href="/blog" className="text-foreground/80 hover:text-primary transition-colors">Blog</Link></li>
            </ul>
          </div>

          {/* Newsletter */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-foreground">Stay Updated</h3>
            <FooterNewsletter />
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-border">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm text-foreground/60">
              © {new Date().getFullYear()} Zion Tech Group. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <Link href="/privacy" className="text-sm text-foreground/60 hover:text-primary transition-colors">Privacy Policy</Link>
              <Link href="/terms" className="text-sm text-foreground/60 hover:text-primary transition-colors">Terms of Service</Link>
            </div>
          </div>
        </div>

        <div className="mt-8 flex justify-center">
          <button
            onClick={scrollToTop}
            className="flex items-center space-x-1 text-foreground/80 hover:text-primary text-sm transition-colors cursor-pointer"
            aria-label="Back to top"
          >
            <ChevronUp className="h-4 w-4" aria-hidden="true" />
            <span>Back to Top</span>
          </button>
        </div>
>>>>>>> 2fc87795dcf7cb742c24a257dd9040071acce941
      </div>
    </footer>
  );
}