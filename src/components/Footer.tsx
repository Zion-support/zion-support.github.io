import React from "react";
import { Twitter, Linkedin, Facebook, Instagram, Github } from "lucide-react";
import { Link } from "react-router-dom";

export function Footer() {
  return (
    <footer className="bg-zion-slate text-white py-12">
      <div className="relative container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <div className="mb-4">
              <span className="text-2xl font-bold bg-gradient-to-r from-zion-cyan via-zion-purple-light to-zion-purple bg-clip-text text-transparent">ZION</span>
            </div>
            <p className="text-zion-slate-light text-sm leading-relaxed">
              Empowering businesses with cutting-edge AI solutions and innovative technology services. 
              Transform your digital future with Zion Tech Group.
            </p>
            <div className="flex space-x-4 mt-6">
              <a href="#" className="text-zion-slate-light hover:text-zion-cyan transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-zion-slate-light hover:text-zion-cyan transition-colors">
                <Linkedin className="h-5 w-5" />
              </a>
              <a href="#" className="text-zion-slate-light hover:text-zion-cyan transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-zion-slate-light hover:text-zion-cyan transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="text-zion-slate-light hover:text-zion-cyan transition-colors">
                <Github className="h-5 w-5" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4 text-lg">Marketplace</h3>
            <ul className="space-y-2">
              <li><Link to="/services" className="text-zion-slate-light hover:text-zion-cyan transition-colors">Services</Link></li>
              <li><Link to="/about" className="text-zion-slate-light hover:text-zion-cyan transition-colors">About</Link></li>
              <li><Link to="/contact" className="text-zion-slate-light hover:text-zion-cyan transition-colors">Contact</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4 text-lg">Company</h3>
            <ul className="space-y-2">
              <li><Link to="/about" className="text-zion-slate-light hover:text-zion-cyan transition-colors">About Us</Link></li>
              <li><Link to="/contact" className="text-zion-slate-light hover:text-zion-cyan transition-colors">Contact</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4 text-lg">Support</h3>
            <ul className="space-y-2">
              <li><Link to="/contact" className="text-zion-slate-light hover:text-zion-cyan transition-colors">Help Center</Link></li>
              <li><Link to="/contact" className="text-zion-slate-light hover:text-zion-cyan transition-colors">Contact Support</Link></li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-zion-blue-light">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-zion-slate-light text-sm">
              © 2024 Zion Tech Group. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <Link to="/privacy" className="text-zion-slate-light hover:text-zion-cyan text-sm transition-colors">
                Privacy Policy
              </Link>
              <Link to="/terms" className="text-zion-slate-light hover:text-zion-cyan text-sm transition-colors">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;