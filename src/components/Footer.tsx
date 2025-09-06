


export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };


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

        {/* Bottom Section */}
        <div className="border-t border-gray-800 mt-8 pt-8 flex flex-col sm:flex-row justify-between items-center">
          <div className="text-gray-400 text-sm">
            © 2024 Zion Tech Group. All rights reserved.
          </div>
          <div className="flex space-x-6 mt-4 sm:mt-0">
            <Link to="/privacy" className="text-gray-400 hover:text-white transition-colors text-sm">Privacy Policy</Link>
            <Link to="/terms" className="text-gray-400 hover:text-white transition-colors text-sm">Terms of Service</Link>
            <Link to="/cookies" className="text-gray-400 hover:text-white transition-colors text-sm">Cookie Policy</Link>

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
};

export default Footer;

>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
