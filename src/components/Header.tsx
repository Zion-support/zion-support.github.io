import React, { useState } from 'react';''
import { Link } from 'react-router-dom';''
import { Menu, X } from 'lucide-react';''
import Button from './Button';''
import ThemeToggle from './ThemeToggle';'
const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return ('
    <header className="bg-gray-900 text-white shadow-lg fixed w-full top-0 z-40">"
</header>"
      <div className="container mx-auto px-4">"
</div>"
        <div className="flex items-center justify-between h-16">"
</div>"
          <Link to="/" className="flex items-center space-x-2">"
</Link>"
            <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">"
</div>"
              <span className="text-white font-bold text-lg">Z</span>"
            </div>"
            <span className="text-xl font-bold">Zion Tech Group</span>"
          </Link>"
          <nav className="hidden md:flex items-center space-x-8">"
</nav>"
            <Link to="/" className="text-gray-300 hover:text-white transition-colors">"
</Link>
            </Link>"
            <Link to="/services" className="text-gray-300 hover:text-white transition-colors">"
</Link>
            </Link>"
            <Link to="/pricing" className="text-gray-300 hover:text-white transition-colors">"
</Link>
            </Link>"
            <Link to="/about" className="text-gray-300 hover:text-white transition-colors">"
</Link>
            </Link>"
            <Link to="/contact" className="text-gray-300 hover:text-white transition-colors">"
</Link>
            </Link>
            <ThemeToggle />
</ThemeToggle>"
            <Button variant="outline" size="small">"
</Button>
            </Button>
          </nav>
          <button;
            onClick={toggleMenu}"
            className="md:hidden p-2 rounded-lg hover:bg-gray-800 transition-colors"""
            aria-label="Toggle menu""
          >
</button>
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
</X>
          </button>
        </div>"
          <div className="md:hidden py-4 border-t border-slate-700">"
</div>"
            <nav className="flex flex-col space-y-4">"
</nav>"
              <Link to="/" className="text-gray-300 hover:text-white transition-colors">"
</Link>
              </Link>"
              <Link to="/services" className="text-gray-300 hover:text-white transition-colors">"
</Link>
              </Link>"
              <Link to="/pricing" className="text-gray-300 hover:text-white transition-colors">"
</Link>
              </Link>"
              <Link to="/about" className="text-gray-300 hover:text-white transition-colors">"
</Link>
              </Link>"
              <Link to="/contact" className="text-gray-300 hover:text-white transition-colors">"
</Link>
              </Link>"
              <div className="flex items-center justify-center space-x-4">"
</div>
                <ThemeToggle />
</ThemeToggle>"
                <Button variant="outline" size="small" className="flex-1">"
</Button>
                </Button>
              </div>
            </nav>
          </div>
      </div>
    </header>)"