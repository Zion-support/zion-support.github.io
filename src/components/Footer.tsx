import React from 'react';
import { Link } from 'react-router-dom';

export function Footer() {
  return (
    <footer className="bg-background border-t">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
                <span className="text-primary-foreground font-bold text-lg">Z</span>
              </div>
              <span className="text-xl font-bold text-foreground">Zion Tech Group</span>
            </div>
            <p className="text-foreground/70 text-sm">
              Advanced technology solutions for the future. Empowering businesses with 
              cutting-edge innovation and digital transformation.
            </p>
          </div>

          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Company</h3>
            <ul className="space-y-2">
              <li><Link to="/about" className="text-foreground/80 hover:text-primary transition-colors">About</Link></li>
              <li><Link to="/contact" className="text-foreground/80 hover:text-primary transition-colors">Contact</Link></li>
              <li><a href="#careers" className="text-foreground/80 hover:text-primary transition-colors">Careers</a></li>
              <li><a href="#blog" className="text-foreground/80 hover:text-primary transition-colors">Blog</a></li>
            </ul>
          </div>

          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Services</h3>
            <ul className="space-y-2">
              <li><Link to="/services" className="text-foreground/80 hover:text-primary transition-colors">All Services</Link></li>
              <li><a href="#ai-solutions" className="text-foreground/80 hover:text-primary transition-colors">AI Solutions</a></li>
              <li><a href="#cloud-services" className="text-foreground/80 hover:text-primary transition-colors">Cloud Services</a></li>
              <li><a href="#web-development" className="text-foreground/80 hover:text-primary transition-colors">Web Development</a></li>
            </ul>
          </div>

          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Connect</h3>
            <div className="flex space-x-4">
              <a href="https://twitter.com/ziontechgroup" className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center hover:bg-primary/20 transition-colors" aria-label="Twitter">
                <span className="text-lg">🐦</span>
              </a>
              <a href="https://linkedin.com/company/ziontechgroup" className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center hover:bg-primary/20 transition-colors" aria-label="LinkedIn">
                <span className="text-lg">💼</span>
              </a>
              <a href="https://github.com/ziontechgroup" className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center hover:bg-primary/20 transition-colors" aria-label="GitHub">
                <span className="text-lg">🐙</span>
              </a>
              <a href="https://youtube.com/ziontechgroup" className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center hover:bg-primary/20 transition-colors" aria-label="YouTube">
                <span className="text-lg">📺</span>
              </a>
            </div>
            <div className="space-y-2">
              <p className="text-foreground/70 text-sm">Email: hello@ziontechgroup.com</p>
              <p className="text-foreground/70 text-sm">Phone: +1 (555) 123-4567</p>
            </div>
          </div>
        </div>

        <div className="border-t mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-foreground/60 text-sm">
              © 2024 Zion Tech Group. All rights reserved.
            </div>
            <div className="flex space-x-6 text-sm">
              <a href="#privacy" className="text-foreground/60 hover:text-primary transition-colors">Privacy Policy</a>
              <a href="#terms" className="text-foreground/60 hover:text-primary transition-colors">Terms of Service</a>
              <a href="#cookies" className="text-foreground/60 hover:text-primary transition-colors">Cookie Policy</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
