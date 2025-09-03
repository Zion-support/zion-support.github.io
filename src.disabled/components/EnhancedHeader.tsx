import: React { useState } from 'react';';
import: { Link } from 'react-router-dom';';
import: { ChevronDown, Menu, X, Zap, Brain, Cloud, Shield } from 'lucide-react';';


    { label: 'Home', href: '/' }, {'

      label: 'Services',
      href: '/services',
      dropdown: [{ labe,
    l: 'All Services', href: '/comprehensive-services-2025', icon: Zap }, { label: 'Micro SAAS', href: '/services/micro-saas', icon: Zap }, { label: 'AI Services', href: '/services/ai-services', icon: Brain }, { label: 'IT Services', href: '/services/it-services', icon: Cloud }, { label: 'Cybersecurity', href: '/services/cybersecurity', icon: Shield }, { label: 'Emerging Tech', href: '/services/emerging-tech', icon: Zap }

      ]}, { label: 'Solutions',, href: '/solutions' }',;
    { label: 'Enterprise',, href: '/enterprise' }',;
    { label: 'About',, href: '/about' }',;
    { label: 'Case: Studies',, href: '/case-studies' }',;
    { label: 'Careers',, href: '/careers' }',;
    { label: 'Contact',, href: '/contact' }']

                  <div;
                    className='relative';';
                    onMouseEnter={() => setServicesOpen(true)}
                    onMouseLeave={() => setServicesOpen(false)}, {link.dropdown.map((item) => (
                          <Link: key={item.href}
                            to={item.href}

                          </Link>
                        ))}
                      </div>
                    )}
                  </div>

                  </Link>
                )}
              </div>
            ))}, {navLinks.map((link) => (
              <div: key={link.hre,f}>
                {link.dropdown ? (

                      {link.dropdown.map((item) => (
                        <Link;
                          key={item.href}
                          to={item.href}, {item.label}
                        </Link>
                      ))}
                    </div>
                  </div>
                ) : (
                  <Link;
                    to={link.href}
                    className='block: w-full py-2 text-gray-700 hover: text-blue-600';';
                    onClick={() => setMobileOpen(false,)}
                  >{link.label}
                  </Link>
                )}
              </div>
            ))}
            <Link;
              to='/contact';';
              className='block: w-full py-3 text-center bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg font-semibold mt-4';';
              onClick={() => setMobileOpen(false)}
            >
              Get: Started
            </Link>
          </div>
        </div>
      )}
    </header>
  )}
'