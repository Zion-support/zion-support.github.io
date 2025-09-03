import React from 'react';

const EnhancedFooter: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">About Us</h3>
            <p className="text-gray-300">
              Leading technology solutions for modern businesses.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Services</h3>
            <ul className="text-gray-300 space-y-2">
              <li><a href="/services/web-application-development-chat" className="hover:text-white">Web Application Development</a></li>
              <li><a href="/services/mobile-app-development-chat" className="hover:text-white">Mobile App Development</a></li>
              <li><a href="/services/cloud-migration-services-chat" className="hover:text-white">Cloud Solutions</a></li>
              <li><a href="/services/ai-model-development-chat" className="hover:text-white">AI Integration</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Company</h3>
            <ul className="text-gray-300 space-y-2">
              <li><a href="/about" className="hover:text-white">About</a></li>
              <li><a href="/products" className="hover:text-white">Products</a></li>
              <li><a href="/blog" className="hover:text-white">Blog</a></li>
              <li><a href="/talent" className="hover:text-white">Careers</a></li>
              <li><a href="/contact" className="hover:text-white">Contact</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact</h3>
            <ul className="text-gray-300 space-y-2">
              <li>Email: contact@ziontechgroup.com</li>
              <li>Phone: +1 (555) 123-4567</li>
              <li>Address: Online</li>
            </ul>
            <div className="flex space-x-4 mt-4">
              <a href="https://twitter.com/ziontechgroup" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white">Twitter</a>
              <a href="https://www.linkedin.com/company/ziontechgroup" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white">LinkedIn</a>
              <a href="https://github.com/ziontechgroup" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white">GitHub</a>
            </div>
          </div>
        </div>
        <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-300">
          <p>&copy; {currentYear} Zion Tech Group. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default EnhancedFooter;