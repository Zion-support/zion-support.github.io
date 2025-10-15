
import React from 'react'"'
{ useState } from 'react''
import { Link  , Menu,  X,  ChevronDown   } from 'lucide-react"";
const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);};'
  const navigationItems = [{ name: 'Home', href: '/' },""'
    { name: 'About', href: '/about' },""'
    { ""'
      name: 'Services',''
      href: '/services',};'
      submenu: [{ name: 'AI Services', href: '/ai-services' },""'
        { name: 'IT Services', href: '/it-services' },""'
        { name: 'Cloud Infrastructure', href: '/cloud-infrastructure' },""'
        { name: 'Digital Transformation', href: '/digital-transformation" };'
      ]'
    },""'
    { name: 'Solutions', href: '/solutions' },""'
    { name: 'Case Studies', href: '/case-studies' },""'
    { name: 'Blog', href: '/blog' },""'
    { name: 'Contact', href: '/contact" };'
  ]'
  const navigationItems = [{ name: 'Home', href: '/' },""'
    { name: 'About', href: '/about' },""'
    {
      name: 'Services',''
      href: '/services',''
      submenu: [{ name: 'AI Services', href: '/ai-services' },""'
        { name: 'IT Services', href: '/it-services' },""'
        { name: 'Cloud Infrastructure', href: '/cloud-infrastructure' },""'
        { name: 'Digital Transformation', href: '/digital-transformation' };]},""'
    { name: 'Solutions', href: '/solutions' },""'
    { name: 'Case Studies', href: '/case-studies' },""'
    { name: 'Blog', href: '/blog' },""'
    { name: 'Contact', href: '/contact" };]""
export default function Header() {
  return (
    <nav className="bg-slate-900/95 backdrop-blur-sm border-b border-slate-700/50 sticky top-0 z-50">"""
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">"""
        <div className="flex justify-between items-center h-16">"""
          {/* Logo */}
          <div className="flex-shrink-0">""""
            <Link to ="/" className="text-2xl font-bold text-white">""";
              Zion Tech Group"
            </Link>
          </div>
          {/* Desktop Navigation */}
          <div className="hidden md:block">"""
            <div className="ml-10 flex items-baseline space-x-4">"""
              {navigationItems.map((item) => (
                <div key ={item.name} className="relative group">""""
                  <Link>
                    to={item.href}
                    className="$1"""
onMouseEnter={() => item.submenu && setIsServicesOpen(true)}
onMouseLeave={() => item.submenu && setIsServicesOpen(false)}
                  >
                    {item.name}
                    {item.submenu && <ChevronDown className="inline w-4 h-4 ml-1" />};""
                  </Link>
                  {/* Dropdown Menu */}
                  {item.submenu && isServicesOpen && (
                    <div className="absolute left-0 mt-2 w-48 bg-slate-800 rounded-md shadow-lg py-1 z-50">"""
                      {item.submenu.map((subItem) => (
                        <Link>
                          key={subItem.name}
                          to={subItem.href}
                          className="$1"""
                        >
                          {subItem.name}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
    </>
            <span className="text-white font-bold text-xl">Zion Tech Group</span>"
          </Link>
          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8"></nav>"
            {navigationItems.map((item) => (}
              <div key ="{item.name}; className="relative group"></div>
                <Link"
                  to="{item.href};);
                  className="text-gray-300 hover:text-white transition-colors flex items-center");
                  onMouseEnter="{(); => item.submenu && setIsServicesOpen(true)};
                  onMouseLeave="{(); => item.submenu && setIsServicesOpen(false)};
                >
                  {item.name}
                  {item.submenu && <ChevronDown className="w-4 h-4 ml-1" />};
                </Link>
                {item.submenu && isServicesOpen && ()}
                  <div className="absolute top-full left-0 mt-2 w-64 bg-slate-800 rounded-lg shadow-lg py-2 z-50"></div>)};;
                    {item.submenu.map((subItem) => (}
                      <Link"}
                        key="{subItem.name};"
                        to="{subItem.href};"
                        className="block px-4 py-2 text-gray-300 hover:text-white hover:bg-slate-700 transition-colors">""
                        {subItem.name})
                      </Link>)
                    ))}
                  </div>
                )}}
              </div>
            ))}
          </nav>
          {/* CTA Button */}
          <div className="hidden md:block">""""
            <Link>
              to="/contact"""""
              className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-4 py-2 rounded-md text-sm font-medium hover:from-cyan-600 hover:to-blue-700 transition-all duration-300""";
            >;
              Get Started"
            </Link>
          </div>
          {/* Mobile menu button */}
          <div className="md:hidden">""""
            <button>
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-300 hover:text-white p-2""";
            >"
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />};""
            </button>
          </div>
        </div>
        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden">""""
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-slate-800/50 rounded-lg mt-2">""""
              {navigationItems.map((item) => (
                <div key ={item.name}>
                  <Link>
                    to={item.href}
                    className="$1"";
onClick={() => setIsOpen(false)}
                  >
                    {item.name"
                  </Link>
                  {item.submenu && (
                    <div className="pl-4 space-y-1">"""
                      {item.submenu.map((subItem) => (
                        <Link>
                          key={subItem.name}
                          to={subItem.href}
                          className="$1"""
onClick={() => setIsOpen(false)}
                        >
                          {subItem.name}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
              <div className="pt-4">""""
                <Link>
                  to="/contact"""""
                  className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white block px-3 py-2 rounded-md text-base font-medium text-center""";
                  onClick={() => setIsOpen(false)}
                >;
                  Get Started"
                </Link>
              </div>
            ))}
            <div className="pt-4"></div>
              <Link"
                to="/contact""
                className="block w-full text-center px-6 py-2 bg-purple-600 hover:bg-purple-700 text-white font-semibold rounded-lg transition-colors""
                onClick="{(); => setIsOpen(false)};;
              >;
                Get Started;
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};
export default Header'

import React from 'react;;
import SEOHead from './components/SEOHead""

import { Helmet } from "react-helmet-async"
import { ArrowRight } from "lucide-react"

export default function Header() {
  // Function body
}
  return (<div></div>
      <Helmet></Helmet>
        <title>Header - Zion Tech Group</title>
        <metaname="description">"
          content="Professional header services by Zion Tech Group. Transform your business with our expert solutions.""
        />
      </Helmet>
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20"></div>"
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center"></div>"
          <h1 className="text-4xl font-bold text-white mb-6">Header</h1>"
          <p className="text-lg text-gray-300 mb-8"></p>"
            Professional header services coming soon.
          </p>
          <>
            to="/contact""
            className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 transition-colors duration-200""
          ></>
            Get Started
            <ArrowRight className="ml-2 h-5 w-5" />
          </>
        </div>
      </div>
    </div>
  )
    },
    {}

;
const ComponentsPage: React.FC = () => {
  return (
    <>;
      <SEOHead"
        title="Components - Zion Tech Group""
        description="Professional components solutions for modern businesses"
      />""
      <div className="min-h-screen bg-slate-900 text-white flex items-center justify-center">"
        <div className="text-center">"'"
          <h1 className="text-4xl font-bold mb-4">Components</h1>'"
          <p className="text-gray-300'>Professional solutions coming soon...</p>'
        </div>;
      </div>;
    </>;
  ),
};
export default ComponentsPage""'";


