import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (

            </div>
            <span className="text-xl font-bold text-white">Zion Tech Group</span>
          </Link>

          </button>
        </div>

        {isMenuOpen && (

            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;