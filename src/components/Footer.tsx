import React from 'react';
import { Link } from 'react-router-dom';
import { Twitter, Linkedin, Facebook, Instagram, Github, ChevronUp } from 'lucide-react';

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <footer className="bg-background border-t">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Company</h3>
            <ul className="space-y-2">
              <li><Link to="/about" className="text-foreground/80 hover:text-primary transition-colors">About</Link></li>
              <li><Link to="/contact" className="text-foreground/80 hover:text-primary transition-colors">Contact</Link></li>
              <li><a href="#careers" className="text-foreground/80 hover:text-primary transition-colors">Careers</a></li>
            </ul>
          </div>

          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Services</h3>
            <ul className="space-y-2">
              <li><Link to="/services" className="text-foreground/80 hover:text-primary transition-colors">Services</Link></li>
              <li><Link to="/pricing" className="text-foreground/80 hover:text-primary transition-colors">Pricing</Link></li>
            </ul>
          </div>

          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Support</h3>
            <ul className="space-y-2">
              <li><a href="#help" className="text-foreground/80 hover:text-primary transition-colors">Help Center</a></li>
              <li><a href="#docs" className="text-foreground/80 hover:text-primary transition-colors">Documentation</a></li>
            </ul>
          </div>

          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Connect</h3>
            <div className="flex space-x-4">
              <a href="https://twitter.com/ziontechgroup" className="text-foreground/80 hover:text-primary transition-colors" aria-label="Twitter">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="https://linkedin.com/company/ziontechgroup" className="text-foreground/80 hover:text-primary transition-colors" aria-label="LinkedIn">
                <Linkedin className="h-5 w-5" />
              </a>
              <a href="https://facebook.com/ziontechgroup" className="text-foreground/80 hover:text-primary transition-colors" aria-label="Facebook">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="https://instagram.com/ziontechgroup" className="text-foreground/80 hover:text-primary transition-colors" aria-label="Instagram">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="https://github.com/ziontechgroup" className="text-foreground/80 hover:text-primary transition-colors" aria-label="GitHub">
                <Github className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <div className="text-foreground/60 text-sm">
            © 2024 Zion Tech Group. All rights reserved.
          </div>

          <button
            onClick={scrollToTop}
            className="flex items-center space-x-1 text-foreground/80 hover:text-primary text-sm transition-colors cursor-pointer mt-4 md:mt-0"
            aria-label="Back to top"
          >
            <ChevronUp className="h-4 w-4" aria-hidden="true" />
            <span>Back to Top</span>
          </button>
        </div>
      </div>
    </footer>
  );
}