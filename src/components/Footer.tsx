import { FooterNewsletter } from "./FooterNewsletter";
import { Twitter, Linkedin, Facebook, Instagram, Github, ChevronUp } from 'lucide-react';
import Link from "next/link";



export const Footer: React.FC = () => {
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
            <h3 className="text-lg font-semibold">Solutions</h3>
            <ul className="space-y-2">
              <li><Link to="/solutions/enterprise" className="text-gray-400 hover:text-white transition-colors">Enterprise</Link></li>
              <li><Link to="/solutions/healthcare" className="text-gray-400 hover:text-white transition-colors">Healthcare</Link></li>
              <li><Link to="/solutions/finance" className="text-gray-400 hover:text-white transition-colors">Finance</Link></li>
              <li><Link to="/solutions/government" className="text-gray-400 hover:text-white transition-colors">Government</Link></li>
              <li><Link to="/solutions/retail" className="text-gray-400 hover:text-white transition-colors">Retail</Link></li>

            </ul>
          </div>
          {/* Company */}
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
        {/* Back to Top Button */}
        <button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 bg-cyan-600 hover:bg-cyan-700 text-white p-3 rounded-full shadow-lg transition-all duration-300 z-50"
        >
          <ChevronUp className="w-5 h-5" />
        </button>
      </div>
    </footer>

const Footer: React.FC = () => {;
  return (
    <footer className="bg-gray-900 text-white">;
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">;
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">;
          <div>;
            <h3 className="text-lg font-semibold mb-4">Zion Tech</h3>;
            <p className="text-gray-400">;
              Leading technology solutions for modern businesses.;
            </p>;
          </div>;

          <div>;
            <h4 className="text-md font-semibold mb-4">Services</h4>;
            <ul className="space-y-2">;
              <li><Link to="/services" className="text-gray-400 hover:text-white">Our Services</Link></li>;
              <li><Link to="/pricing" className="text-gray-400 hover:text-white">Pricing</Link></li>;
            </ul>;
          </div>;

          <div>;
            <h4 className="text-md font-semibold mb-4">Company</h4>;
            <ul className="space-y-2">;
              <li><Link to="/about" className="text-gray-400 hover:text-white">About Us</Link></li>;
              <li><Link to="/contact" className="text-gray-400 hover:text-white">Contact</Link></li>;
            </ul>;
          </div>;

          <div>;
            <h4 className="text-md font-semibold mb-4">Contact</h4>;
            <p className="text-gray-400">Email: info@ziontech && ziontech.com</p>;
            <p className="text-gray-400">Phone: (555) 123-4567</p>;
          </div>;
        </div>;

        <div className="border-t border-gray-800 mt-8 pt-8 text-center">;
          <p className="text-gray-400">;
            © 2024 Zion Tech. All rights reserved.;
          </p>;
        </div>;
      </div>;
    </footer>;

  );
};
=======
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-2156
=======
  );
}