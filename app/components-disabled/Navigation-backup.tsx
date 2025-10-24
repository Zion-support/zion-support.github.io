import React, { useState } from 'react';
import { X, Menu } from 'lucide-react';;

interface NavigationBackupProps {
  logo?: string;
  logoText?: string;
  menuItems?: Array<{
    label: string;
    href: string;
    submenu?: Array<{
      label: string;
      href: string;
    }>;
  }>;
  ctaText?: string;
  ctaHref?: string;
}

const NavigationBackup: React.FC<NavigationBackupProps> = ({
  logo,
  logoText = 'Zion Tech Group',
  menuItems = [
    { label: 'Home', href: '/' },
    { label: 'About', href: '/about' },
    { label: 'Services', href: '/services' },
    { label: 'Contact', href: '/contact' }
  ],
  ctaText = 'Get Started',
  ctaHref = '/contact',
}) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [activeSubmenu, setActiveSubmenu] = useState<string | null>(null)
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const _toggleSubmenu = (label: string) => {
    setActiveSubmenu(activeSubmenu === label ? null : label);
  };

  return (
    <nav className="...">
      <div className="...">
        <div className="...">
          {/* Logo */}
          <div className="...">
            {logo ? (
              <img src={logo} alt={logoText} className="h-8 w-auto" />
            ) : (
              <span className="text-2xl font-bold text-gray-900">{logoText}</span>
            )}
          </div>

          {/* Desktop Menu */}
          <div className="...">
            {menuItems.map((item, index) => (
              <div key={index} className="...">
                <a
                  href={item.href}
                  className="...">
                  {item.label}
                </a>
                {item.submenu && (
                  <div className="...">
                    <div className="...">
                      {item.submenu.map((subItem, subIndex) => (
                        <a
                          key={subIndex}
                          href={subItem.href}
                          className="...">
                          {subItem.label}
                        </a>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* CTA Button */}
          <div className="...">
            <a
              href={ctaHref}
              className="...">
              {ctaText}
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="...">
            <button
              onClick={toggleMenu}
              className="...">
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="...">
            <div className="...">
              {menuItems.map((item, index) => (
                <div key={index}>
                  <a
                    href={item.href}
                    className="...">
                    {item.label}
                  </a>
                  {item.submenu && (
                    <div className="...">
                      {item.submenu.map((subItem, subIndex) => (
                        <a
                          key={subIndex}
                          href={subItem.href}
                          className="...">
                          {subItem.label}
                        </a>
                      ))}
                    </div>
                  )}
                </div>
              ))}
              <div className="...">
                <a
                  href={ctaHref}
                  className="...">
                  {ctaText}
                </a>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
export default NavigationBackup