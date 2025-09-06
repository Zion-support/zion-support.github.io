

import React from 'react';

import { Link } from 'react-router-dom';


export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };



const Footer: React.FC = () => {
  return (


    <footer className="bg-gray-900 text-white py-8">

      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">Zion Tech Group</h3>
            <p className="text-gray-300">
              Leading technology solutions provider for modern businesses.
            </p>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Services</h3>
            <ul className="space-y-2">
              <li><Link to="/services" className="text-gray-300 hover:text-white transition-colors">AI Services</Link></li>
              <li><Link to="/services" className="text-gray-300 hover:text-white transition-colors">IT Solutions</Link></li>
              <li><Link to="/services" className="text-gray-300 hover:text-white transition-colors">Cloud Services</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Company</h3>
            <ul className="space-y-2">
              <li><Link to="/about" className="text-gray-300 hover:text-white transition-colors">About</Link></li>
              <li><Link to="/contact" className="text-gray-300 hover:text-white transition-colors">Contact</Link></li>
              <li><Link to="/pricing" className="text-gray-300 hover:text-white transition-colors">Pricing</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact</h3>
            <div className="space-y-2 text-gray-300">
              <p>Email: info@ziontechgroup.com</p>
              <p>Phone: +1 (555) 123-4567</p>
              <p>Address: 123 Tech Street, Innovation City</p>
            </div>
          </div>


          {/* Services */}

          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Services</h4>
            <ul className="space-y-2">
              <li><Link to="/services" className="text-gray-400 hover:text-white transition-colors">AI Solutions</Link></li>
              <li><Link to="/services" className="text-gray-400 hover:text-white transition-colors">Cloud Services</Link></li>
              <li><Link to="/services" className="text-gray-400 hover:text-white transition-colors">Consulting</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Company</h4>
            <ul className="space-y-2">
              <li><Link to="/about" className="text-gray-400 hover:text-white transition-colors">About Us</Link></li>

              <li><Link to="/contact" className="text-gray-400 hover:text-white transition-colors">Contact</Link></li>
              <li><Link to="/pricing" className="text-gray-400 hover:text-white transition-colors">Pricing</Link></li>
            </ul>
          </div>

          
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Legal</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Terms of Service</a></li>
            </ul>
          </div>


        </div>
        
        <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-300">

          <p>&copy; 2024 Zion Tech Group. All rights reserved.</p>


        <div className='mt-12 pt-8 border-t border-primary/20'>
          <div className='flex flex-col md:flex-row justify-between items-center'>
            <p className='text-foreground/80 text-sm'>
              &copy; {new Date().getFullYear()} Zion Tech Group. All rights
              reserved.
            </p>
            <div className='flex space-x-6 mt-4 md:mt-0'>
              <Link
                href='/privacy'
                className='text-foreground/80 hover:text-primary text-sm transition-colors'
              >
                Privacy Policy
              </Link>
              <Link
                href='/terms'
                className='text-foreground/80 hover:text-primary text-sm transition-colors'
              >
                Terms of Service
              </Link>
              <Link
                href='/status'
                className='text-foreground/80 hover:text-primary text-sm transition-colors'
              >
                API Status
              </Link>
            </div>
          </div>
        </div>
        <FeedbackWidget />
      </div>
    </footer>
  );

};

export default Footer;



