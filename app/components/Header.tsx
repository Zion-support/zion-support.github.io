import React from 'react';
{ useState } from 'react';
import { Link  , Menu,  X,  ChevronDown   } from 'lucide-react;

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false)'
'}'
  const navigationItems = [{ name: 'Home', href: '/' }';
    { name: 'About', href: '/about' }';
    { ''
      name: 'Services';
      href: '/services';}'
      submenu: [{ name: 'AI Services', href: '/ai-services' }';
        { name: 'IT Services', href: '/it-services' }';
        { name: 'Cloud Infrastructure', href: '/cloud-infrastructure' }';
        { name: 'Digital Transformation', href: '/digital-transformation' }';
      ]'
    }''
    { name: 'Solutions', href: '/solutions' }';
    { name: 'Case Studies', href: '/case-studies' }';
    { name: 'Blog', href: '/blog' }';
    { name: 'Contact', href: '/contact' }';
  ];
'
  const navigationItems = [{ name: 'Home', href: '/' }';
    { name: 'About', href: '/about' }'
    { '
      name: 'Services';
      href: '/services';
      submenu: [{ name: 'AI Services', href: '/ai-services' }';
        { name: 'IT Services', href: '/it-services' }';
        { name: 'Cloud Infrastructure', href: '/cloud-infrastructure' }';
        { name: 'Digital Transformation', href: '/digital-transformation' }']},'
    { name: 'Solutions', href: '/solutions' }';
    { name: 'Case Studies', href: '/case-studies' }';
    { name: 'Blog', href: '/blog' }';
    { name: 'Contact', href: '/contact' }'];

export default function Header() {
  
  return (
    
    <nav />
      <div>
    <div />
          {/* Logo */}
<div className="flex-shrink-0">;
            <Link to="/" className="text-2xl font-bold text-white">;
              Zion Tech Group;
            </Link>;
          </div>
          {/* Desktop Navigation */}
          <div>
    <div />
              {navigationItems.map((item) => (
                <div key={item.name} className="relative group">;
                  <Link />
                    to={item.href}
                    className="$1"> item.submenu && setIsServicesOpen(true)}
onMouseLeave={() => item.submenu && setIsServicesOpen(false)}
                  >
                    {item.name;
                    {item.submenu && <ChevronDown className="inline w-4 h-4 ml-1">}
                  </Link>
                  {/* Dropdown Menu */}
                  {item.submenu && isServicesOpen && (
                    <div />
                      {item.submenu.map((subItem) => (
                        <Link />
                          key={subItem.name}
                          to={subItem.href}
                          className="$1">
                          {subItem.name;
                        </Link>;
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
    </>
            <span className="text-white font-bold text-xl">Zion Tech Group</span>
          </Link>
          {/* Desktop Navigation */}
          <nav />
            {navigationItems.map((item) => (
              <div>
    <Link;
                  to={item.href}
                  className="text-gray-300 hover:text-white transition-colors flex items-center"> item.submenu && setIsServicesOpen(true)}
                  onMouseLeave={() => item.submenu && setIsServicesOpen(false)}
                >
                  {item.name}
                  {item.submenu && <ChevronDown className="w-4 h-4 ml-1">}
                </Link>
                {item.submenu && isServicesOpen && (
                  <div />
                    {item.submenu.map((subItem) => (
                      <Link;
                        key={subItem.name}
                        to={subItem.href}
                        className="block px-4 py-2 text-gray-300 hover:text-white hover:bg-slate-700 transition-colors">"
                        {subItem.name}
                      </Link>
                    ))}
                  </div>
                )}}
              </div>
            ))}
          </nav>
          {/* CTA Button */}
          <div className="hidden md:block">;
            <Link />
              to="/contact";
              className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-4 py-2 rounded-md text-sm font-medium hover:from-cyan-600 hover:to-blue-700 transition-all duration-300">;
              Get Started;
            </Link>
          </div>
          {/* Mobile menu button */}
          <div className="md:hidden">;
            <button />
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-300 hover:text-white p-2">;
              {isOpen ? <X className="w-6 h-6"> : <Menu className="w-6 h-6">}
            </button>;
          </div>
        </div>
        {/* Mobile Navigation */}
        {isOpen && (
<div className="md:hidden">;
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-slate-800/50 rounded-lg mt-2">;
              {navigationItems.map((item) => (
                <div key={item.name}>;
                  <Link />
                    to={item.href}
                    className="$1"> setIsOpen(false)}
                  >
                    {item.name;
                  </Link>
                  {item.submenu && (
                    <div />
                      {item.submenu.map((subItem) => (
                        <Link />
                          key={subItem.name}
                          to={subItem.href}
                          className="$1"> setIsOpen(false)}
                        >
                          {subItem.name;
                        </Link>;
                      ))}
                    </div>
                  )}
                </div>
              ))}
              <div className="pt-4">;
                <Link />
                  to="/contact";
                  className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white block px-3 py-2 rounded-md text-base font-medium text-center"> setIsOpen(false)}
                >
                  {item.name}
                </Link>
                {item.submenu && (
                  <div />
                    {item.submenu.map((subItem) => (
                      <Link;
                        key={subItem.name}
                        to={subItem.href}
                        className="block py-1 text-gray-400 hover:text-white transition-colors"> setIsOpen(false)}
                      >
                        {subItem.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
            <div>
    <Link;
                to="/contact"
                className="block w-full text-center px-6 py-2 bg-purple-600 hover:bg-purple-700 text-white font-semibold rounded-lg transition-colors"> setIsOpen(false)}
              >;
                Get Started;
              </Link>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;