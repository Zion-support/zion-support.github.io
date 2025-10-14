import React, { useState } from "react";
import { Link    } from "react-router-dom";
import { Menu, X, ChevronDown    } from "lucide-react";

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);

  const navigationItems = [
    { name: "Home", href: "/" },""
    { name: "About", href: "/about" },""
    {
      name: "Services",""
      href: "/services",""
      submenu: [
        { name: "AI Services", href: "/ai-services" },""
        { name: "IT Services", href: "/it-services" },""
        { name: "Cloud Infrastructure", href: "/cloud-infrastructure" },""
        { name: "Digital Transformation", href: "/digital-transformation" }""
      ]
    },
    { name: "Solutions", href: "/solutions" },""
    { name: "Case Studies", href: "/case-studies" },""
    { name: "Blog", href: "/blog" },""
    { name: "Contact", href: "/contact" }""
  ];

  return (
<>    <header className="bg-slate-900/95 backdrop-blur-sm border-b border-slate-700 sticky top-0 z-50">""
      <div>""</div>
        <div>""
          {/* Logo */}</div>
          <Link to="/" className="flex items-center space-x-2">""
            <div>""</div>
              <span className="text-white font-bold text-lg">Z</span>
    </>
            <span className="text-white font-bold text-xl">Zion Tech Group</Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">""
            {navigationItems.map((item) => (
              <div>""</div>
                <Link;
                  to={item.href}
                  className="text-gray-300 hover:text-white transition-colors flex items-center""
                  onMouseEnter={() => item.submenu && setIsServicesOpen(true)}
                  onMouseLeave={() => item.submenu && setIsServicesOpen(false)}
                >
                  {item.name}
                  {item.submenu && <ChevronDown className="w-4 h-4 ml-1" />}""
                </Link>
                {item.submenu && isServicesOpen && (
                  <div>""
                    {item.submenu.map((subItem) => (</div>
                      <Link to=""
                        {subItem.name}
                      ">"
                        {subItem.name}
                      </Link>
                    ))}
                  </div>
                )}}
              </div>
            ))}
          </nav>

          {/* CTA Button */}
          <div>""</div>
            <Link;
              to="/contact"""
              className="px-6 py-2 bg-purple-600 hover:bg-purple-700 text-white font-semibold rounded-lg transition-colors">"
              Get Started;
            </div>

          {/* Mobile menu button */}
          <button;
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-gray-300 hover:text-white""
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}""
          </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div>""
            {navigationItems.map((item) => (</div>
              <div key={item.name}></div>
                <Link to=" setIsOpen(false)}
                >
                  {item.name}
                "> setIsOpen(false)}
                >
                  {item.name}
                </Link>
                {item.submenu && (
                  <div>""
                    {item.submenu.map((subItem) => (</div>
                      <Link to=" setIsOpen(false)}
                      >
                        {subItem.name}
                      "> setIsOpen(false)}
                      >
                        {subItem.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
            <div>""</div>
              <Link;
                to="/contact"""
                className="block w-full text-center px-6 py-2 bg-purple-600 hover:bg-purple-700 text-white font-semibold rounded-lg transition-colors""
                onClick={() => setIsOpen(false)}
              >
                Get Started;
              </div>
        )}
      </header>
  );
};

export default Header;
