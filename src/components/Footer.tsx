import { FooterNewsletter } from "./FooterNewsletter";
import { Twitter, Linkedin, Facebook, Instagram, Github, ChevronUp } from 'lucide-react';
import { Link } from "react-router-dom";

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
                <Github className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-foreground">Services</h3>
            <ul className="space-y-2 text-sm">
              <li><Link to="/services/ai-services" className="text-foreground/80 hover:text-primary transition-colors">AI Services</Link></li>
              <li><Link to="/services/micro-saas" className="text-foreground/80 hover:text-primary transition-colors">Micro SaaS</Link></li>
              <li><Link to="/services/it-services" className="text-foreground/80 hover:text-primary transition-colors">IT Services</Link></li>
              <li><Link to="/pricing" className="text-foreground/80 hover:text-primary transition-colors">Pricing</Link></li>
            </ul>
          </div>

          {/* Company */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-foreground">Company</h3>
            <ul className="space-y-2 text-sm">
              <li><Link to="/about" className="text-foreground/80 hover:text-primary transition-colors">About</Link></li>
              <li><Link to="/contact" className="text-foreground/80 hover:text-primary transition-colors">Contact</Link></li>
              <li><Link to="/careers" className="text-foreground/80 hover:text-primary transition-colors">Careers</Link></li>
              <li><Link to="/blog" className="text-foreground/80 hover:text-primary transition-colors">Blog</Link></li>
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
              <Link to="/privacy" className="text-sm text-foreground/60 hover:text-primary transition-colors">Privacy Policy</Link>
              <Link to="/terms" className="text-sm text-foreground/60 hover:text-primary transition-colors">Terms of Service</Link>
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
      </div>
    </footer>
  );
}