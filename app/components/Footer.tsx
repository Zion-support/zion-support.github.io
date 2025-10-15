import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-800 text-white">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">Zion Tech Group</h3>
            <p className="text-gray-300 text-sm">
              Advanced AI and IT Solutions for modern businesses.
            </p>
          </div>
          <div>
            <h4 className="text-md font-semibold mb-4">Services</h4>
            <ul className="space-y-2 text-sm text-gray-300">
              <li><a href="/ai-services" className="hover:text-white">AI Services</a></li>
              <li><a href="/it-services" className="hover:text-white">IT Services</a></li>
              <li><a href="/5g-solutions" className="hover:text-white">5G Solutions</a></li>
              <li><a href="/micro-saas-solutions" className="hover:text-white">Micro SaaS</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-md font-semibold mb-4">Company</h4>
            <ul className="space-y-2 text-sm text-gray-300">
              <li><a href="/about" className="hover:text-white">About</a></li>
              <li><a href="/team" className="hover:text-white">Team</a></li>
              <li><a href="/careers" className="hover:text-white">Careers</a></li>
              <li><a href="/contact" className="hover:text-white">Contact</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-md font-semibold mb-4">Contact</h4>
            <div className="text-sm text-gray-300 space-y-1">
              <p>Phone: +1-302-464-0950</p>
              <p>Email: info@ziontechgroup.com</p>
              <p>Website: ziontechgroup.com</p>
            </div>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-gray-700">
          <p className="text-center text-sm text-gray-400">
            © 2024 Zion Tech Group. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;