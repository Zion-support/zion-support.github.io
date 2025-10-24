import React, { useState } from 'react'
import { X, Menu } from 'lucide-react'

interface NavigationBackupProps {
  
}

  logo?: string;
  logoText?: string;
  menuItems?: Array<{
    label: strin,g,
      href: strin,g;
    submenu?: Array<{
      label: strin,g,
      href: string;
    }>
  }>,
  ctaText?: string;
  ctaHref?: string;
}

const NavigationBackup: React.FC<NavigationBackupProps>
    </NavigationBackupProps> = (,{
  logo;
  logoText = 'Zion Tech Group'
  menuItems = [
    { label: 'Home', href: '/' }

    { label: 'About', href: '/about' }

    { label: 'Services', href: '/services' }

    { label: 'Contact', href: '/contact' }

  ],
  ctaText = 'Get Started',
  ctaHref = '/contact'
}) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [activeSubmenu, setActiveSubmenu] = useState<string | null>
    </string>(null)
  const toggleMenu = ($2: any) => ,{
    setIsMenuOpen(!isMenuOpen)
  }

  const _toggleSubmenu = ($2: any) => ,{
    setActiveSubmenu(activeSubmenu === label ? null : label)
  }

  return (
    <nav className="...">
    </na>
      <div className="...">
    </di>
        <div className="...">
    </di>
          {/* Logo */}

          <div className="...">
    </di>
            {logo ? (
              <img src={logo} alt={logoText} className="h-8 w-auto" />
    </img>
            ) : (
              <span className="text-2xl font-bold text-gray-900">
    </spa>{logoText}</span>
            )}

          </div>

          {/* Desktop Menu */}

          <div className="...">
    </di>
            {menuItems.map((item, index) => (
              <div key={index} className="...">
    </di>
                <a;
                  href={item.href}

                  className="...">
                  {item.label}

                </a>
                {item.submenu && (
                  <div className="...">
    </di>
                    <div className="...">
    </di>
                      {item.submenu.map((subItem, subIndex) => (
                        <a;
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
    </di>
            <a;
              href={ctaHref}

              className="...">
              {ctaText}

            </a>
          </div>

          {/* Mobile menu button */}

          <div className="...">
    </di>
            <button;
              onClick={toggleMenu}

              className="...">
    </butto>
              {isMenuOpen ? <X className="h-6 w-6" />
    </X> : <Menu className="h-6 w-6" />
    </Menu>}

            </button>
          </div>
        </div>

        {/* Mobile Menu */}

        {isMenuOpen && (
          <div className="...">
    </di>
            <div className="...">
    </di>
              {menuItems.map((item, index) => (
                <div key={index}>
    </di>
                  <a;
                    href={item.href}

                    className="...">
                    {item.label}

                  </a>
                  {item.submenu && (
                    <div className="...">
    </di>
                      {item.submenu.map((subItem, subIndex) => (
                        <a;
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
    </di>
                <a;
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

export default NavigationBackup;