import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-800 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <h3 className="text-2xl font-bold mb-4">Zion Tech Group</h3>
            <p className="text-gray-300 mb-4">
              Leading provider of AI and IT solutions, empowering businesses to thrive in the digital age.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-300 hover:text-white transition duration-300">
                LinkedIn
              </a>
              <a href="#" className="text-gray-300 hover:text-white transition duration-300">
                Twitter
              </a>
              <a href="#" className="text-gray-300 hover:text-white transition duration-300">
                GitHub
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Services</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-300 hover:text-white transition duration-300">AI Solutions</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition duration-300">Cloud Computing</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition duration-300">Data Analytics</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition duration-300">Cybersecurity</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Company</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-300 hover:text-white transition duration-300">About Us</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition duration-300">Contact</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition duration-300">Careers</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition duration-300">Blog</a></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-700 mt-8 pt-8 text-center">
          <p className="text-gray-300">
            © 2024 Zion Tech Group. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;