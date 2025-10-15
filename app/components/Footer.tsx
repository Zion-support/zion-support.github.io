import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-800 text-white p-6 mt-auto">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">Zion Tech Group</h3>
            <p className="text-gray-300 text-sm">
              Advanced AI and IT Solutions for modern businesses.
            </p>
          </div>
          <div>
            <h4 className="text-md font-semibold mb-4">Services</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="/ai-solutions" className="text-gray-300 hover:text-white">AI Solutions</a></li>
              <li><a href="/it-solutions" className="text-gray-300 hover:text-white">IT Solutions</a></li>
              <li><a href="/cloud-solutions" className="text-gray-300 hover:text-white">Cloud Solutions</a></li>
              <li><a href="/cybersecurity" className="text-gray-300 hover:text-white">Cybersecurity</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-md font-semibold mb-4">Company</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="/about" className="text-gray-300 hover:text-white">About</a></li>
              <li><a href="/careers" className="text-gray-300 hover:text-white">Careers</a></li>
              <li><a href="/contact" className="text-gray-300 hover:text-white">Contact</a></li>
              <li><a href="/blog" className="text-gray-300 hover:text-white">Blog</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-md font-semibold mb-4">Legal</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="/privacy" className="text-gray-300 hover:text-white">Privacy Policy</a></li>
              <li><a href="/terms" className="text-gray-300 hover:text-white">Terms of Service</a></li>
            </ul>
          </div>
        </div>
        <div className="border-t border-gray-700 mt-8 pt-6 text-center text-sm text-gray-400">
          <p>&copy; 2024 Zion Tech Group. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;