'use client';
""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""import React, { useState } from ""react;
import { Link    } from" "react-router-dom;
""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""import { Menu, X, ChevronDown    } from ""lucide-react;

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [isServicesOpen, setIsServicesOpen] = useState(false)
  const navigationItems = [
    { name:" "Home", href: "/" },"
    { name: "About", href: "/about" },"
    {
      name: "Services","
      href: "/services","
      submenu: [
        { name: "AI Services", href: "/ai-services" },"
        { name: "IT Services", href: "/it-services" },"
        { name: "Cloud Infrastructure", href: "/cloud-infrastructure" },"
        { name: "Digital Transformation", href: "/digital-transformation" }"
      ]
    },
    { name: "Solutions", href: "/solutions" },"
    { name: "Case Studies", href: "/case-studies" },"
    { name: "Blog", href: "/blog" },"
    { name: "Contact", href: "/contact" }"
  ]
  return (

    </>
            <span className="text-white font-bold text-xl">Zion Tech Group</span>"

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">"
            {navigationItems.map((item) => (
              <div key={item.name} className="relative group">"
                <Link
                  to={item.href}
                  className="text-gray-300 hover:text-white transition-colors flex items-center
                  onMouseEnter={() => item.submenu && setIsServicesOpen(true)}
                  onMouseLeave={() => item.submenu && setIsServicesOpen(false)}
                >
                  {item.name}
                  {item.submenu && <ChevronDown className="w-4 h-4 ml-1" />}"
                </Link>
                {item.submenu && isServicesOpen && (
                  <div className="absolute top-full left-0 mt-2 w-64 bg-slate-800 rounded-lg shadow-lg py-2 z-50">"
                    {item.submenu.map((subItem) => (
                      <Link
                        key={subItem.name}
                        to={subItem.href}
                        className="block px-4 py-2 text-gray-300 hover:text-white hover:bg-slate-700 transition-colors">"
                        {subItem.name}
                      </Link>
                    ))}</div></div></div>
                  </div>
                )}}
              </div>
            ))}
          </nav>

          {/* CTA Button */}
          <div className="hidden md:flex items-center space-x-4">"
            <Link
              to="/contact
              className="px-6 py-2 bg-purple-600 hover:bg-purple-700 text-white font-semibold rounded-lg transition-colors">"
              Get Started</div></div></div>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-gray-300 hover:text-white
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}"
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden py-4 border-t border-slate-700">"
            {navigationItems.map((item) => (
              <div key={item.name}></div></div></div></div>
                <Link
                  to={item.href}
                  className="block py-2 text-gray-300 hover:text-white transition-colors
                  onClick={() => setIsOpen(false)}
                >
                  {item.name}
                {item.submenu && (
                  <div className="ml-4">"
                    {item.submenu.map((subItem) => (
                      <Link
                        key={subItem.name}
                        to={subItem.href}
                        className="block py-1 text-gray-400 hover:text-white transition-colors
                        onClick={() => setIsOpen(false)}
                      >
                        {subItem.name}
                    ))}</div></div></div>
                  </div>
                )}
              </div>
            ))}
            <div className="pt-4">"
              <Link
                to="/contact
                className="block w-full text-center px-6 py-2 bg-purple-600 hover:bg-purple-700 text-white font-semibold rounded-lg transition-colors
                onClick={() => setIsOpen(false)}
              >
                Get Started</div></div></div>
            </div>
        )}
      </div>
  )
}
export default Header