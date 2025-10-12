import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
export default function Navigation() {
  return (
    <div>Content</div>
  );
    <div>Component content</div>
  );
}
  return (
    <div>Content</div>
  );
    <>
      <Helmet >
        <title>Navigation - Zion Tech Group</title>
        <meta name = "description" content="Professional navigation by Zion Tech Group. Transform your business with our expert solutions." />
      </Helmet>
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">
          <h1 className="text-4xl font-bold text-white mb-6">Navigation</h1>
          <p className="text-lg text-gray-300 mb-8">Professional navigation coming soon.</p>
          <Link >
            to="/contact"
            className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center mx-auto w-fit"
            Contact Us
            <ArrowRight className="w-5 h-5 ml-2" />
          </Link>
        </div>
      </div>
    </>;
  );
}
export default Navigation;
const Navigation: React.FC = () => {
  return (
    <div>Content</div>
  );
    <nav className="bg-gray-900  text-white"></nav>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"></div>
        <div className="flex justify-between items-center py-4"></div>
          <div className="flex  items-center"></div>
            <Link to="/" className="text-2xl font-bold"></Link>;
              Zion Tech Group;
            </Link>
          </div>
          <div className = "hidden md:block"></div>
            <div className="ml-10fl ex items-baseline  space-x-4"></div>;
              <Link;</Link></Link>
                to = "/"
                className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
              ></Link>;
                Home;
              </Link>
              <Link;</Link></Link>
                to = "/about"
                className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
              ></Link>;
                About;
              </Link>
              <Link;</Link></Link>
                to = "/contact"
                className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
              ></Link>;
                Contact;
              </Link>
            </div>
        </div>
    </nav>
  );
};