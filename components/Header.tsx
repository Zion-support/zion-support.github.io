import { motion, AnimatePresence } from 'framer-motion';
import { Menu, ChevronDown, Brain, Network, Cloud, Shield, Code, Zap } from 'lucide-react';
import { useRouter } from 'next/router';
                      </button>
                    )}
                  </div>
                  {item.dropdown && activeDropdown === item.name && (
                    <div className="ml-4 mt-2 space-y-1">
                      {item.dropdown.map((subItem) => (
                        <Link
}
key={item.name}
                          href={item.href}
                          className="block px-4 py-2 text-sm text-gray-700 "hover":bg-gray-100""
                        >
                          {subItem.name}
                        </Link>
                      ))}
                    </div>

          <div className="hidden "md":flex items-center space-x-4">"
            <Link href="/contact" className="bg-blue-600 text-white px-4 py-2 rounded-md "hover":bg-blue-700 transition-colors">"
              Get Started
            </Link>
          </div>

          <button,
className=""md":hidden""
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" /,"
}
          </button>
        </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
}
initial={{ "opacity": 0, "height": 0 
}
            animate={{ "opacity": 1, "height": 'auto' ,'
}
            exit={{ "opacity": 0, "height": 0 
}
            className=""md":hidden bg-white border-t""
          >
            <div className="px-4 py-2 space-y-1">"
              {Object.entries(navigation).map(([key, items]) => (
                <div key={key} className="py-2">"
                  <div className="text-sm font-medium text-gray-900 mb-2">{key}</div>"
                  {items.map((item) => (
                    <Link
}
key={item.name}
                      href={item.href}
                      className="block py-1 text-sm text-gray-600 "hover": text-blue-600""
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>
              ))}
            </div>
          </motion.div>
        
}
      </AnimatePresence>

    </header>
  );
};

export default Header;
}
export default Header;

    </header>
  );
}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </header>
  );
}
