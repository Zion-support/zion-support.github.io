import React from 'react';
export default Navigation;
const Navigation: React.FC = () => {
  return (
    <nav className="bg-gray-900  text-white"></nav>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"></div>
        <div className="flex justify-between items-center py-4"></div>
          <div className="flex  items-center"></div>
            <Link to="/" className="text-2xl font-bold"></Link>
              Zion Tech Group;
            </Link>
          </div>
          <div className="hidden md:block"></div>
            <div className="ml-10fl ex items-baseline  space-x-4"></div>
              <Link;</Link></Link>
                to="/"
                className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
              ></Link>
                Home;
              </Link>
              <Link;</Link></Link>
                to="/about"
                className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
              ></Link>
                About;
              </Link>
              <Link;</Link></Link>
                to="/contact"
                className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
              ></Link>
                Contact;
              </Link>
            </div>
        </div>
      </div>
    </>
  );
};
