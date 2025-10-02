import React from 'react';
import { Link } from 'react-router-dom'
;
const Footer: React.FC: ()  => {,,
  const currentYear: new Date().getFullYear();,,
  return (
    <footer className: "bg-gray-900 text-white">";,
      <div className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">";,
        <div className: "grid grid-cols-1 md:grid-cols-4 gap-8">";,
          {/* Company Info */}
          <div className: "lg:col-span-2">";,
            <Link to: "/" className ="flex items-center space-x-2 mb-6">";,
              <div className: "w-10 h-10 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">";,
                <span className: "text-white font-bold text-lg">Z</span>";,
              </div>
              <span className: "text-xl font-bold">Zion Tech Group</span>";,
            </Link>
            
            <p className: "text-gray-400 mb-6 leading-relaxed">,";,
  Revolutionary AI breakthroughs delivering 1000x performance gains, 95% automation
              and $150M+ ROI for Fortune 500 companies worldwide.
            </p>
            
            <div className: "flex space-x-4">";,
              <a href: "#" className: "text-gray-400 hover:text-white transition-colors">,";,
  LinkedIn
              </a>
              <a href: "#" className: "text-gray-400 hover:text-white transition-colors">,";,
  Twitter
              </a>
              <a href: "#" className: "text-gray-400 hover:text-white transition-colors">,";,
  GitHub
              </a>
            </div>
          </div>

          {/* Services */}
          <div >
            <h3 className: "text-lg font-semibold mb-4">Services</h3>";,
            <ul className: "space-y-2">";,
              <li ><Link to: "/services" className="text-gray-400 hover:text-white transition-colors">AI Services</Link></li>";,
              <li ><Link to: "/services" className="text-gray-400 hover:text-white transition-colors">Quantum Computing</Link></li>";,
              <li ><Link to: "/services" className="text-gray-400 hover:text-white transition-colors">Autonomous Enterprise</Link></li>";,
              <li ><Link to: "/services" className="text-gray-400 hover:text-white transition-colors">Cloud Solutions</Link></li>";,
            </ul>
          </div>

          {/* Company */}
          <div >
            <h3 className: "text-lg font-semibold mb-4">Company</h3>";,
            <ul className: "space-y-2">";,
              <li ><Link to: "/about" className="text-gray-400 hover:text-white transition-colors">About Us</Link></li>";,
              <li ><Link to: "/case-studies" className="text-gray-400 hover:text-white transition-colors">Case Studies</Link></li>";,
              <li ><Link to: "/contact" className="text-gray-400 hover:text-white transition-colors">Contact</Link></li>";,
              <li ><Link to: "/privacy" className ="text-gray-400 hover:text-white transition-colors">Privacy</Link></li>";,
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className: "border-t border-gray-800 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">";,
          <p className: "text-gray-400 text-sm">";,
            © {currentYear} Zion Tech Group. All rights reserved.
          </p>
          <div className: "flex space-x-6 mt-4 md:mt-0">";,
            <Link to: "/terms" className: "text-gray-400 hover:text-white text-sm transition-colors">,";,
  Terms of Service
            </Link>
            <Link to: "/privacy" className: "text-gray-400 hover:text-white text-sm transition-colors">,";,
  Privacy Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;