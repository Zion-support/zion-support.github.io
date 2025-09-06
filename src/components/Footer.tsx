<<<<<<< HEAD

<<<<<<< HEAD
class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }
  
  static getDerivedStateFromError(error) {
    return { hasError: true };
  }
  
  componentDidCatch(error, errorInfo) {
    console.error('Error caught by boundary:', error, errorInfo);
  }
  
  render() {
    if (this.state.hasError) {
      return <div>Something went wrong.</div>;
    }
    
    return this.props.children;
  }
}
import React from 'react';
import { Link } from 'react-router-dom';
import { Twitter, Linkedin, Facebook, Instagram, Github, ChevronUp } from 'lucide-react';
=======
import React from 'react';
import { Link } from 'react-router-dom';
import {
  Twitter,
  Linkedin,
  Facebook,
  Instagram,
  Github,
  ChevronUp
} from 'lucide-react';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

<<<<<<< HEAD
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
                <Github className="h-5 w-5" />
              </a>
            </div>
          </div>
          {/* Services */}
          <div>
            <h4 className="text-white font-semibold mb-4">Services</h4>
            <ul className="space-y-2">
<<<<<<< HEAD
              <li><Link to="/services/ai-services" className="text-gray-400 hover:text-white transition-colors">AI Services</Link></li>
              <li><Link to="/services/micro-saas" className="text-gray-400 hover:text-white transition-colors">Micro SaaS</Link></li>
              <li><Link to="/services/it-services" className="text-gray-400 hover:text-white transition-colors">IT Services</Link></li>
              <li><Link to="/pricing" className="text-gray-400 hover:text-white transition-colors">Pricing</Link></li>
=======
              <li><Link to="/ai-services" className="text-gray-400 hover:text-white transition-colors">AI Services</Link></li>
              <li><Link to="/it-services" className="text-gray-400 hover:text-white transition-colors">IT Services</Link></li>
              <li><Link to="/micro-saas" className="text-gray-400 hover:text-white transition-colors">Micro SaaS</Link></li>
              <li><Link to="/cloud-solutions" className="text-gray-400 hover:text-white transition-colors">Cloud Solutions</Link></li>
              <li><Link to="/cybersecurity" className="text-gray-400 hover:text-white transition-colors">Cybersecurity</Link></li>
            </ul>
          </div>
          {/* Solutions */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Solutions</h3>
            <ul className="space-y-2">
              <li><Link to="/solutions/enterprise" className="text-gray-400 hover:text-white transition-colors">Enterprise</Link></li>
              <li><Link to="/solutions/healthcare" className="text-gray-400 hover:text-white transition-colors">Healthcare</Link></li>
              <li><Link to="/solutions/finance" className="text-gray-400 hover:text-white transition-colors">Finance</Link></li>
              <li><Link to="/solutions/government" className="text-gray-400 hover:text-white transition-colors">Government</Link></li>
              <li><Link to="/solutions/retail" className="text-gray-400 hover:text-white transition-colors">Retail</Link></li>
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
            </ul>
          </div>
          {/* Company */}
          <div>
            <h4 className="text-white font-semibold mb-4">Company</h4>
            <ul className="space-y-2">
              <li><Link to="/about" className="text-gray-400 hover:text-white transition-colors">About</Link></li>
              <li><Link to="/contact" className="text-gray-400 hover:text-white transition-colors">Contact</Link></li>
              <li><Link to="/careers" className="text-gray-400 hover:text-white transition-colors">Careers</Link></li>
              <li><Link to="/blog" className="text-gray-400 hover:text-white transition-colors">Blog</Link></li>
            </ul>
          </div>
        </div>
<<<<<<< HEAD

        <div className="mt-12 pt-8 border-t border-slate-700/50">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              &copy; {new Date().getFullYear()} Zion Tech Group. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <Link to="/privacy" className="text-gray-400 hover:text-white text-sm transition-colors">
                Privacy Policy
              </Link>
              <Link to="/terms" className="text-gray-400 hover:text-white text-sm transition-colors">
                Terms of Service
              </Link>
            </div>
=======
        {/* Bottom Section */}
        <div className="border-t border-gray-800 mt-8 pt-8 flex flex-col sm:flex-row justify-between items-center">
          <div className="text-gray-400 text-sm">
            © 2024 Zion Tech Group. All rights reserved.
          </div>
          <div className="flex space-x-6 mt-4 sm:mt-0">
            <Link to="/privacy" className="text-gray-400 hover:text-white transition-colors text-sm">Privacy Policy</Link>
            <Link to="/terms" className="text-gray-400 hover:text-white transition-colors text-sm">Terms of Service</Link>
            <Link to="/cookies" className="text-gray-400 hover:text-white transition-colors text-sm">Cookie Policy</Link>
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
          </div>
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
<<<<<<< HEAD
=======
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
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
  );
};
=======
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-2156
=======
  );
};
export default Footer;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
