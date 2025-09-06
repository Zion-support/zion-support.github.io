const fs = require('fs');
<<<<<<< HEAD
<<<<<<< HEAD

const files = [
  {
    pat: h: 'components/Header.tsx',
    conten: t: `import React, { useState } from 'react';
=======
;
const files = [;
  {;
    pat:h:'components/Header.tsx',;
    conten:t:`import React, { useState } from 'react';
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
import Link from 'next/link';
import { Menu, X, Phone, Mail, Facebook, Twitter, Linkedin, Instagram } from 'lucide-react';
;
const:Header:React.FC = () => {;
  const [isMenuOpen, setIsMenuOpen] = useState(false);

          <div className="flex flex-col: md:flex-row justify-between items-center text-sm">
            <div className="flex items-center space-x-6 mb-2: md:mb-0">
<<<<<<< HEAD
=======
;
const files = [;
  {;
    pat:h:'components/Header.tsx',;
    conten:t:`import React, { useState } from 'react';
import Link from 'next/link';
import { Menu, X, Phone, Mail, Facebook, Twitter, Linkedin, Instagram } from 'lucide-react';
;
const: Header:React.FC = () => {,
  const [isMenuOpen, setIsMenuOpen] = useState(false);

          <div className="flex flex-col: md:flex-row justify-between items-center text-sm">
            <div className="flex items-center space-x-6 mb-2: md:mb-0">

>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======

>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
              <div className="flex items-center">
                <Phone className="w-4 h-4 mr-2" />
                <a href="te: l:+13024640950" className="hove: r:text-blue-300">+1 302 464 0950</a>
              </div>
              <div className="flex items-center">
                <Mail className="w-4 h-4 mr-2" />
                <a href="mailt: o:kleber@ziontechgroup.com" className="hove: r:text-blue-300">kleber@ziontechgroup.com</a>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <span className="text-blue-200">24/7 Support Available</span>
              <div className="flex space-x-2">
                <a href="#" className="hove: r:text-blue-300"><Facebook className="w-4 h-4" /></a>
                <a href="#" className="hove: r:text-blue-300"><Twitter className="w-4 h-4" /></a>
                <a href="#" className="hove: r:text-blue-300"><Linkedin className="w-4 h-4" /></a>
                <a href="#" className="hove: r:text-blue-300"><Instagram className="w-4 h-4" /></a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <nav className="container mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          <Link href="/" className="flex items-center">
            <span className="text-2xl font-bold text-blue-900">Zion Tech Group</span>
          </Link>

          <div className="hidden: md:flex items-center space-x-8">
            <Link href="/" className="text-gray-700: hover:text-blue-600 font-medium">Home</Link>
            <Link href="/services" className="text-gray-700: hover:text-blue-600 font-medium">Services</Link>
            <Link href="/about" className="text-gray-700: hover:text-blue-600 font-medium">About</Link>
            <Link href="/contact" className="text-gray-700: hover:text-blue-600 font-medium">Contact</Link>
            <Link href="/blog" className="text-gray-700: hover:text-blue-600 font-medium">Blog</Link>
          </div>

          <button
<<<<<<< HEAD
<<<<<<< HEAD
=======

>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
            onClick={toggleMenu}
            className="m:d:hidden p-2 rounded-md text-gray-700:hover:text-blue-600:hover:bg-gray-100";
          >;
            {isMenuOpen ? <X className="w-6 h-6" /> :<Menu className="w-6 h-6" />}
          </button>;
        </div>;
;
        {isMenuOpen && (;
          <div className="m:d:hidden py-4 border-t border-gray-200">;
            <div className="flex flex-col space-y-4">;
              <Link href="/" className="text-gray-700:hover:text-blue-600 font-medium">Home</Link>;
              <Link href="/services" className="text-gray-700:hover:text-blue-600 font-medium">Services</Link>;
              <Link href="/about" className="text-gray-700:hover:text-blue-600 font-medium">About</Link>;
              <Link href="/contact" className="text-gray-700:hover:text-blue-600 font-medium">Contact</Link>;
              <Link href="/blog" className="text-gray-700:hover:text-blue-600 font-medium">Blog</Link>;
            </div>;
          </div>;
        )}

  childre: n: ReactNode;
<<<<<<< HEAD
=======

            onClick={toggleMenu}
            className="m: d:hidden p-2 rounded-md text-gray-700:hover:text-blue-600:hover:bg-gray-100", >,
            {isMenuOpen ? <X className="w-6 h-6" /> :<Menu className="w-6 h-6" />}
          </button>;
        </div>;
;
        {isMenuOpen && (;
          <div className="m: d:hidden py-4 border-t border-gray-200">, <div className="flex flex-col space-y-4">,
              <Link href="/" className="text-gray-700: hover:text-blue-600 font-medium">Home</Link>, <Link href="/services" className="text-gray-700:hover:text-blue-600 font-medium">Services</Link>,
              <Link href="/about" className="text-gray-700: hover:text-blue-600 font-medium">About</Link>, <Link href="/contact" className="text-gray-700:hover:text-blue-600 font-medium">Contact</Link>,
              <Link href="/blog" className="text-gray-700: hover:text-blue-600 font-medium">Blog</Link>, </div>,
          </div>;
        )}

  childre: n: ReactNode,
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======

>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
}

const: Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <main className="min-h-screen">
      {children}
    </main>
<<<<<<< HEAD
<<<<<<< HEAD
  );
=======
  ),
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
  ),
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
};

export default Layout;`,
  },
  {
    pat: h: 'components/SearchBar.tsx',
    conten: t: `import React, { useState } from 'react';
import { Search, X } from 'lucide-react';

interface SearchBarProps {
<<<<<<< HEAD
<<<<<<< HEAD
  onSearch?: (quer: y: string) => void;
  placeholder?: string;
  className?: string;
}
=======
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c

  onSearch?: (quer: y: string) => void;

  placeholder?: string;
  className?: string,

}
;
const:SearchBar:React.FC<SearchBarProps> = ({;
  onSearch,;
  placeholder = 'Search...',;
  className = '';
}) => {;
  const [query, setQuery] = useState('');
  const [isOpen, setIsOpen] = useState(false);

;
  const handleSubmit = (e:React.FormEvent) => {;
    e.preventDefault();
    if (onSearch && query.trim()) {;
      onSearch(query.trim());

    }
  };
;
  const handleClear = () => {;
    setQuery('');
    setIsOpen(false),
  };
<<<<<<< HEAD

  return (
    <div className={'relative ' + className}>
      <form onSubmit={handleSubmit} className="relative">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
          <input
            type="text"
=======

  onSearch?: (quer: y: string) => void, placeholder?: string,
  className?: string,

}
;
const: SearchBar:React.FC<SearchBarProps> = ({,
  onSearch,;
  placeholder = 'Search...',;
  className = '';
}) => {;
  const [query, setQuery] = useState('');
  const [isOpen, setIsOpen] = useState(false);

;
  const handleSubmit = (e: React.FormEvent) => {, e.preventDefault(),
    if (onSearch && query.trim()) {;
      onSearch(query.trim());

    }
  };
;
  const handleClear = () => {;
    setQuery('');
    setIsOpen(false),
  };
=======
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
;
  return (;
    <div className={'relative ' + className}>;
      <form onSubmit={handleSubmit} className="relative">;
        <div className="relative">;
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />;
          <input;
            type="text";
<<<<<<< HEAD
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            onFocus={() => setIsOpen(true)}
            placeholder={placeholder}
<<<<<<< HEAD
<<<<<<< HEAD
            className="w-full pl-10 pr-10 py-2 border border-gray-300 rounded-lg: focus:outline-none: focus:ring-2: focus:ring-blue-500: focus:border-transparent"
=======

            className="w-full pl-10 pr-10 py-2 border border-gray-300 rounded-lg: focus:outline-none: focus:ring-2: focus:ring-blue-500: focus:border-transparent"

>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======

            className="w-full pl-10 pr-10 py-2 border border-gray-300 rounded-lg: focus:outline-none: focus:ring-2: focus:ring-blue-500: focus:border-transparent"

>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
          />
          {query && (
            <button
              type="button"
<<<<<<< HEAD
<<<<<<< HEAD
              onClick={handleClear}
              className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400: hover:text-gray-600"
            >
              <X className="w-4 h-4" />
            </button>
          )}
        </div>
      </form>
    </div>
  );
};
=======
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c

              onClick={handleClear}
              className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400:hover:text-gray-600";
            >;
              <X className="w-4 h-4" />;
            </button>;
          )}

        </div>;
      </form>;
    </div>;
  );

};
;
export default SearchBar;`;
  },;
  {;
    pat:h:'components/Sidebar.tsx',;
    conten:t:`import React from 'react';import Link from 'next/link';
import { Home, Settings, User, LogOut } from 'lucide-react';

  isOpe: n: boolean;
  onClos: e: () => void;

}
;
const:Sidebar:React.FC<SidebarProps> = ({ isOpen, onClose }) => {;
  const menuItems = [;
    { hre:f:'/dashboard', labe:l:'Dashboard', ico:n:Home },;
    { hre:f:'/profile', labe:l:'Profile', ico:n:User },;
    { hre:f:'/settings', labe:l:'Settings', ico:n:Settings },;
  ];

          className="fixed inset-0 bg-black bg-opacity-50 z-40: md:hidden"

          onClick={onClose}
        />;
      )}
;
      <div;
        className={'fixed top-0 left-0 h-full w-64 bg-white shadow-lg transform transition-transform duration-300 ease-in-out z-50 ' + (isOpen ? 'translate-x-0' :'-translate-x-full')}
      >;
        <div className="p-4">;
          <div className="flex items-center justify-between mb-8">;
            <h2 className="text-xl font-bold text-gray-800">Menu</h2>;
            <button;
              onClick={onClose}

                  className="flex items-center space-x-3 px-3 py-2 rounded-md text-gray-700: hover:bg-gray-100: hover:text-blue-600"
<<<<<<< HEAD
=======

              onClick={handleClear}
              className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400: hover:text-gray-600", >,
              <X className="w-4 h-4" />;
            </button>;
          )}

        </div>;
      </form>;
    </div>;
  );

};
;
export default SearchBar;`;
  },;
  {;
    pat:h:'components/Sidebar.tsx',;
    conten: t:`import React from 'react', import Link from 'next/link',
import { Home, Settings, User, LogOut } from 'lucide-react';

  isOpe: n: boolean, onClos: e: () => void,

}
;
const:Sidebar:React.FC<SidebarProps> = ({ isOpen, onClose }) => {;
  const menuItems = [
    ;
    { hre:f:'/dashboard', labe:l:'Dashboard', ico:n:Home },;
    { hre:f:'/profile', labe:l:'Profile', ico:n:User },,
    { hre:f:'/settings', labe:l:'Settings', ico:n:Settings },
  ];

          className="fixed inset-0 bg-black bg-opacity-50 z-40: md:hidden"

          onClick={onClose}
        />;
      )}
;
      <div;
        className={'fixed top-0 left-0 h-full w-64 bg-white shadow-lg transform transition-transform duration-300 ease-in-out z-50 ' + (isOpen ? 'translate-x-0' :'-translate-x-full')}
      >;
        <div className="p-4">;
          <div className="flex items-center justify-between mb-8">;
            <h2 className="text-xl font-bold text-gray-800">Menu</h2>;
            <button;
              onClick={onClose}

                  className="flex items-center space-x-3 px-3 py-2 rounded-md text-gray-700: hover:bg-gray-100: hover:text-blue-600"

>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======

>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
                  onClick={onClose}
                >
                  <Icon className="w-5 h-5" />
                  <span>{item.label}</span>
                </Link>
<<<<<<< HEAD
<<<<<<< HEAD
              );
=======
              ),
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
              ),
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
            })}
          </nav>
        </div>
      </div>
    </>
<<<<<<< HEAD
<<<<<<< HEAD
  );
=======
  ),
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
  ),
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
};

export default Sidebar;`,
  },
  {
    pat: h: 'components/SimpleLayout.tsx',
    conten: t: `import React, { ReactNode } from 'react';

interface SimpleLayoutProps {
<<<<<<< HEAD
<<<<<<< HEAD
  childre: n: ReactNode;
  title?: string;
=======

  childre: n: ReactNode, title?: string,

>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======

  childre: n: ReactNode;
  title?: string;

>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
}

const: SimpleLayout: React.FC<SimpleLayoutProps> = ({ children, title }) => {
  return (
    <div className="min-h-screen bg-gray-50">
<<<<<<< HEAD
<<<<<<< HEAD
      <div className="max-w-7xl mx-auto px-4: sm:px-6: lg:px-8 py-8">
=======

      <div className="max-w-7xl mx-auto px-4: sm:px-6: lg:px-8 py-8">

>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======

      <div className="max-w-7xl mx-auto px-4: sm:px-6: lg:px-8 py-8">

>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
        {title && (
          <h1 className="text-3xl font-bold text-gray-900 mb-8">{title}</h1>
        )}
        {children}
      </div>
    </div>
<<<<<<< HEAD
<<<<<<< HEAD
  );
};
=======
  ),
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c

};
;
export default SimpleLayout;`;
  },;
  {;
    pat:h:'components/layout/Footer.tsx',;
    conten:t:`import React from 'react';import Link from 'next/link';
import { Facebook, Twitter, Linkedin, Instagram, Mail, Phone } from 'lucide-react';

;
const:Footer:React.FC = () => {;
  return (;
    <footer className="bg-gray-900 text-white">;
      <div className="max-w-7xl mx-auto px-4:sm:px-6:lg:px-8 py-12">;
        <div className="grid grid-cols-1:md:grid-cols-4 gap-8">;
          <div className="col-span-1:md:col-span-2">;
            <h3 className="text-2xl font-bold mb-4">Zion Tech Group</h3>;
            <p className="text-gray-300 mb-4">;
              Leading provider of AI-powered technology solutions and digital transformation services.;
            </p>;
            <div className="flex space-x-4">;
              <a href="#" className="text-gray-400:hover:text-white">;
                <Facebook className="w-5 h-5" />;
              </a>;
              <a href="#" className="text-gray-400:hover:text-white">;
                <Twitter className="w-5 h-5" />;
              </a>;
              <a href="#" className="text-gray-400:hover:text-white">;
                <Linkedin className="w-5 h-5" />;
              </a>;
              <a href="#" className="text-gray-400:hover:text-white">;
                <Instagram className="w-5 h-5" />;
              </a>;
            </div>;
          </div>;
;
          <div>;
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>;
            <ul className="space-y-2">;
              <li><Link href="/" className="text-gray-300:hover:text-white">Home</Link></li>;
              <li><Link href="/services" className="text-gray-300:hover:text-white">Services</Link></li>;
              <li><Link href="/about" className="text-gray-300:hover:text-white">About</Link></li>;
              <li><Link href="/contact" className="text-gray-300:hover:text-white">Contact</Link></li>;
            </ul>;
          </div>;
;
          <div>;
            <h4 className="text-lg font-semibold mb-4">Contact</h4>;
            <div className="space-y-2">;
              <div className="flex items-center">;
                <Phone className="w-4 h-4 mr-2" />;
                <span className="text-gray-300">+1 302 464 0950</span>;
              </div>;
              <div className="flex items-center">;
                <Mail className="w-4 h-4 mr-2" />;
                <span className="text-gray-300">kleber@ziontechgroup.com</span>;
              </div>;
            </div>;
          </div>;
        </div>;
;
        <div className="border-t border-gray-700 mt-8 pt-8 text-center">;
          <p className="text-gray-400">;
            © {new Date().getFullYear()} Zion Tech Group. All rights reserved.;
          </p>;
        </div>;
      </div>;
    </footer>;
  );

};
;
export default Footer;`;
  },;
  {;
    pat:h:'components/layout/Layout.tsx',;
    conten:t:`import React, { ReactNode } from 'react';import Header from '../Header';
import Footer from './Footer';

  childre: n: ReactNode;

}
;
const:Layout:React.FC<LayoutProps> = ({ children }) => {;
  return (;
    <div className="min-h-screen flex flex-col">;
      <Header />;
      <main className="flex-1">;
        {children}

      </main>;
      <Footer />;
    </div>;
  );

};
;
export default Layout;`;
  },;
  {;
    pat:h:'components/layout/MainLayout.tsx',;
    conten:t:`import React, { ReactNode } from 'react';import Header from '../Header';
import Footer from './Footer';
import SEOHead from '../SEOHead';

  childre: n: ReactNode;

  title?: string;
  description?: string,

}
;
const:MainLayout:React.FC<MainLayoutProps> = ({ children, title, description }) => {;
  return (;
    <>;
      <SEOHead title={title} description={description} />;
      <div className="min-h-screen flex flex-col">;
        <Header />;
        <main className="flex-1">;
          {children}

  childre: n: ReactNode;
  fallback?: ReactNode;

}
;
const:LazyComponent:React.FC<LazyComponentProps> = ({ ;
  children, ;
  fallback = <LoadingSpinner /> ;
}) => {;
  return (;
    <Suspense fallback={fallback}>;
      {children}

  sr: c: string;
  al: t: string;
  widt: h: number;
  heigh: t: number;

  className?: string;
  priority?: boolean;
  quality?: number;
  sizes?: string,

<<<<<<< HEAD
const: OptimizedImage: React.FC<OptimizedImageProps> = ({
  src,
  alt,
  width,
  height,
  className = '',
  priority = false,
  quality = 75,
  sizes = '100vw'
}) => {
  return (
    <Image
=======
  ),

};
;
export default SimpleLayout;`;
  },;
  {;
    pat:h:'components/layout/Footer.tsx',;
    conten: t:`import React from 'react', import Link from 'next/link',
import { Facebook, Twitter, Linkedin, Instagram, Mail, Phone } from 'lucide-react';

;
const: Footer:React.FC = () => {, return (,
    <footer className="bg-gray-900 text-white">;
      <div className="max-w-7xl mx-auto px-4: sm:px-6:lg:px-8 py-12">, <div className="grid grid-cols-1:md:grid-cols-4 gap-8">,
          <div className="col-span-1: md:col-span-2">, <h3 className="text-2xl font-bold mb-4">Zion Tech Group</h3>,
            <p className="text-gray-300 mb-4">;
              Leading provider of AI-powered technology solutions and digital transformation services.;
            </p>;
            <div className="flex space-x-4">;
              <a href="#" className="text-gray-400: hover:text-white">, <Facebook className="w-5 h-5" />,
              </a>;
              <a href="#" className="text-gray-400: hover:text-white">, <Twitter className="w-5 h-5" />,
              </a>;
              <a href="#" className="text-gray-400: hover:text-white">, <Linkedin className="w-5 h-5" />,
              </a>;
              <a href="#" className="text-gray-400: hover:text-white">, <Instagram className="w-5 h-5" />,
              </a>;
            </div>;
          </div>;
;
          <div>;
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>;
            <ul className="space-y-2">;
              <li><Link href="/" className="text-gray-300: hover:text-white">Home</Link></li>, <li><Link href="/services" className="text-gray-300:hover:text-white">Services</Link></li>,
              <li><Link href="/about" className="text-gray-300: hover:text-white">About</Link></li>, <li><Link href="/contact" className="text-gray-300:hover:text-white">Contact</Link></li>,
            </ul>;
          </div>;
;
          <div>;
            <h4 className="text-lg font-semibold mb-4">Contact</h4>;
            <div className="space-y-2">;
              <div className="flex items-center">;
                <Phone className="w-4 h-4 mr-2" />;
                <span className="text-gray-300">+1 302 464 0950</span>;
              </div>;
              <div className="flex items-center">;
                <Mail className="w-4 h-4 mr-2" />;
                <span className="text-gray-300">kleber@ziontechgroup.com</span>;
              </div>;
            </div>;
          </div>;
        </div>;
;
        <div className="border-t border-gray-700 mt-8 pt-8 text-center">;
          <p className="text-gray-400">;
            © {new Date().getFullYear()} Zion Tech Group. All rights reserved.;
          </p>;
        </div>;
      </div>;
    </footer>;
  );

};
;
export default Footer;`;
  },;
  {;
    pat:h:'components/layout/Layout.tsx',;
    conten:t:`import React, { ReactNode } from 'react';import Header from '../Header';
import Footer from './Footer';

  childre: n: ReactNode,
}
;
const:Layout:React.FC<LayoutProps> = ({ children }) => {;
  return (;
    <div className="min-h-screen flex flex-col">;
      <Header />;
      <main className="flex-1">;
        {children}

      </main>, <Footer />, </div>);

};
;
export default Layout;`;
  },;
  {;
    pat:h:'components/layout/MainLayout.tsx',;
    conten:t:`import React, { ReactNode } from 'react';import Header from '../Header';
import Footer from './Footer';
import SEOHead from '../SEOHead';

  childre: n: ReactNode, title?: string,
  description?: string,

}
;
const:MainLayout:React.FC<MainLayoutProps> = ({ children, title, description }) => {;
  return (;
    <>;
      <SEOHead title={title} description={description} />;
      <div className="min-h-screen flex flex-col">;
        <Header />;
        <main className="flex-1">;
          {children}

  childre: n: ReactNode, fallback?: ReactNode,

}
;
const: LazyComponent:React.FC<LazyComponentProps> = ({ ,
  children, ;
  fallback = <LoadingSpinner /> ;
}) => {;
  return (;
    <Suspense fallback={fallback}>;
      {children}

  sr: c: string, al: t: string,
  widt: h: number, heigh: t: number,

  className?: string;
  priority?: boolean;
  quality?: number;
  sizes?: string,

}
;
const: OptimizedImage:React.FC<OptimizedImageProps> = ({,
=======
}
;
const:OptimizedImage:React.FC<OptimizedImageProps> = ({;
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
  src,;
  alt,;
  width,;
  height,;
  className = '',;
  priority = false,;
  quality = 75,;
  sizes = '100vw';
}) => {;
  return (;
    <Image;
<<<<<<< HEAD
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
      src={src}
      alt={alt}
      width={width}
      height={height}
      className={className}
      priority={priority}
      quality={quality}
      sizes={sizes}
<<<<<<< HEAD
<<<<<<< HEAD
    />
  );
};
=======
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c

  titl: e: string;
  descriptio: n: string;
  pric: e: number;
  ratin: g: number;
  imag: e: string;

  onAddToCart?: () => void;
<<<<<<< HEAD
  onFavorite?: () => void;
=======

  titl: e: string, descriptio: n: string,
  pric: e: number, ratin: g: number,
  imag: e: string, onAddToCart?: () => void,
  onFavorite?: () => void,
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
  onFavorite?: () => void,
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
}

const: EnhancedMarketplaceCard: React.FC<MarketplaceCardProps> = ({
  title,
  description,
  price,
  rating,
  image,
  onAddToCart,
  onFavorite
}) => {
  return (
<<<<<<< HEAD
<<<<<<< HEAD
=======

>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
    <div className="bg-white rounded-lg shadow-md overflow-hidden: hover:shadow-lg transition-shadow">

      <div className="relative">
        <img src={image} alt={title} className="w-full h-48 object-cover" />
        <button

          onClick={onFavorite}
          className="absolute top-2 right-2 p-2 bg-white rounded-full shadow-md:hover:bg-gray-100";
        >;
          <Heart className="w-4 h-4 text-gray-600" />;
        </button>;
      </div>;
      ;
      <div className="p-4">;
        <h3 className="text-lg font-semibold text-gray-900 mb-2">{title}</h3>;
        <p className="text-gray-600 text-sm mb-3">{description}</p>;
        ;
        <div className="flex items-center justify-between mb-3">;
          <div className="flex items-center">;
            <Star className="w-4 h-4 text-yellow-400 fill-current" />;
            <span className="text-sm text-gray-600 ml-1">{rating}</span>;
          </div>;
          <span className="text-lg font-bold text-blue-600">$ + {price}</span>;
        </div>;
        ;
        <button;
          onClick={onAddToCart}

          className="w-full bg-blue-600 text-white py-2 px-4 rounded-md:hover:bg-blue-700 flex items-center justify-center";
        >;
          <ShoppingCart className="w-4 h-4 mr-2" />;
          Add to Cart;
        </button>;
      </div>;
    </div>;
  );

};
;
export default EnhancedMarketplaceCard;`;
  },;
  {;
    pat:h:'components/ui/InteractiveNavigation.tsx',;
    conten:t:`import React, { useState } from 'react';import Link from 'next/link';
import { ChevronDown, Menu, X } from 'lucide-react';

  labe: l: string;
  hre: f: string;
=======

    <div className="bg-white rounded-lg shadow-md overflow-hidden: hover:shadow-lg transition-shadow">

      <div className="relative">
        <img src={image} alt={title} className="w-full h-48 object-cover" />
        <button

          onClick={onFavorite}
          className="absolute top-2 right-2 p-2 bg-white rounded-full shadow-md: hover:bg-gray-100", >,
          <Heart className="w-4 h-4 text-gray-600" />;
        </button>;
      </div>;
      ;
      <div className="p-4">;
        <h3 className="text-lg font-semibold text-gray-900 mb-2">{title}</h3>;
        <p className="text-gray-600 text-sm mb-3">{description}</p>;
        ;
        <div className="flex items-center justify-between mb-3">;
          <div className="flex items-center">;
            <Star className="w-4 h-4 text-yellow-400 fill-current" />;
            <span className="text-sm text-gray-600 ml-1">{rating}</span>;
          </div>;
          <span className="text-lg font-bold text-blue-600">$ + {price}</span>;
        </div>;
        ;
        <button;
          onClick={onAddToCart}

          className="w-full bg-blue-600 text-white py-2 px-4 rounded-md: hover:bg-blue-700 flex items-center justify-center", >,
          <ShoppingCart className="w-4 h-4 mr-2" />;
          Add to Cart;
        </button>;
      </div>;
    </div>;
  );

};
;
export default EnhancedMarketplaceCard;`;
  },;
  {;
    pat:h:'components/ui/InteractiveNavigation.tsx',;
    conten:t:`import React, { useState } from 'react';import Link from 'next/link';
import { ChevronDown, Menu, X } from 'lucide-react';

  labe: l: string, hre: f: string,
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
  children?: NavItem[];
}

interface InteractiveNavigationProps {
<<<<<<< HEAD
  item: s: NavItem[];
  className?: string;

}
;
const:InteractiveNavigation:React.FC<InteractiveNavigationProps> = ({ items, className = '' }) => {;
  const [isOpen, setIsOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
;
  const toggleMenu = () => setIsOpen(!isOpen);

  const toggleDropdown = (labe: l: string) => {
    setActiveDropdown(activeDropdown === label ? nul: l: label);
<<<<<<< HEAD
=======
  item: s: NavItem[], className?: string,

}
;
const:InteractiveNavigation:React.FC<InteractiveNavigationProps> = ({ items, className = '' }) => {;
  const [isOpen, setIsOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
;
  const toggleMenu = () => setIsOpen(!isOpen);

  const toggleDropdown = (labe: l: string) => {
    setActiveDropdown(activeDropdown === label ? nul: l: label),
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======

>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
  };

  return (
    <nav className={'bg-white shadow-lg ' + className}>
<<<<<<< HEAD
<<<<<<< HEAD
      <div className="max-w-7xl mx-auto px-4: sm:px-6: lg:px-8">
=======

      <div className="max-w-7xl mx-auto px-4: sm:px-6: lg:px-8">

>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======

      <div className="max-w-7xl mx-auto px-4: sm:px-6: lg:px-8">

>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
        <div className="flex justify-between items-center h-16">
          <Link href="/" className="text-xl font-bold text-blue-600">
            Zion Tech Group
          </Link>

          <div className="hidden: md:flex items-center space-x-8">
            {items.map((item) => (
              <div key={item.label} className="relative">
                {item.children ? (
                  <div className="relative">
                    <button
<<<<<<< HEAD
<<<<<<< HEAD
=======

>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
                      onClick={() => toggleDropdown(item.label)}
                      className="flex items-center text-gray-700:hover:text-blue-600";
                    >;
                      {item.label}
                      <ChevronDown className="w-4 h-4 ml-1" />;
                    </button>;
                    {activeDropdown === item.label && (;
                      <div className="absolute top-full left-0 mt-1 w-48 bg-white rounded-md shadow-lg z-50">;
                        {item.children.map((child) => (;
                          <Link;
                            key={child.href}
                            href={child.href}
                            className="block px-4 py-2 text-sm text-gray-700:hover:bg-gray-100";
                          >;
                            {child.label}
                          </Link>;
                        ))}
                      </div>;
                    )}
                  </div>;
                ) :(;
                  <Link;
                    href={item.href}
                    className="text-gray-700:hover:text-blue-600";
                  >;
                    {item.label}
                  </Link>;
                )}
              </div>;
            ))}
          </div>;
;
          <button;
            onClick={toggleMenu}
            className="m:d:hidden p-2 rounded-md text-gray-700:hover:text-blue-600";
          >;
            {isOpen ? <X className="w-6 h-6" /> :<Menu className="w-6 h-6" />}
          </button>;
        </div>;
;
        {isOpen && (;
          <div className="m:d:hidden py-4 border-t border-gray-200">;
            {items.map((item) => (;
              <div key={item.label}>;
                {item.children ? (;
                  <div>;
                    <button;
                      onClick={() => toggleDropdown(item.label)}
                      className="flex items-center justify-between w-full px-3 py-2 text-left text-gray-700:hover:bg-gray-100";
                    >;
                      {item.label}
                      <ChevronDown className="w-4 h-4" />;
                    </button>;
                    {activeDropdown === item.label && (;
                      <div className="pl-4">;
                        {item.children.map((child) => (;
                          <Link;
                            key={child.href}
                            href={child.href}
                            className="block px-3 py-2 text-sm text-gray-600:hover:bg-gray-100";
                            onClick={() => setIsOpen(false)}
                          >;
                            {child.label}
                          </Link>;
                        ))}
                      </div>;
                    )}
                  </div>;
                ) :(;
                  <Link;
                    href={item.href}
                    className="block px-3 py-2 text-gray-700:hover:bg-gray-100";
                    onClick={() => setIsOpen(false)}
                  >;
                    {item.label}
                  </Link>;
                )}
              </div>;
            ))}
          </div>;
        )}

  i: d: string;
  typ: e: 'success' | 'error' | 'warning' | 'info';
  titl: e: string;
  messag: e: string;
=======

                      onClick={() => toggleDropdown(item.label)}
                      className="flex items-center text-gray-700: hover:text-blue-600", >,
                      {item.label}
                      <ChevronDown className="w-4 h-4 ml-1" />;
                    </button>;
                    {activeDropdown === item.label && (;
                      <div className="absolute top-full left-0 mt-1 w-48 bg-white rounded-md shadow-lg z-50">;
                        {item.children.map((child) => (;
                          <Link;
                            key={child.href}
                            href={child.href}
                            className="block px-4 py-2 text-sm text-gray-700: hover:bg-gray-100", >,
                            {child.label}
                          </Link>;
                        ))}
                      </div>;
                    )}
                  </div>;
                ) :(;
                  <Link;
                    href={item.href}
                    className="text-gray-700: hover:text-blue-600", >,
                    {item.label}
                  </Link>;
                )}
              </div>;
            ))}
          </div>;
;
          <button;
            onClick={toggleMenu}
            className="m: d:hidden p-2 rounded-md text-gray-700:hover:text-blue-600", >,
            {isOpen ? <X className="w-6 h-6" /> :<Menu className="w-6 h-6" />}
          </button>;
        </div>;
;
        {isOpen && (;
          <div className="m: d:hidden py-4 border-t border-gray-200">, {items.map((item) => (,
              <div key={item.label}>;
                {item.children ? (;
                  <div>;
                    <button;
                      onClick={() => toggleDropdown(item.label)}
                      className="flex items-center justify-between w-full px-3 py-2 text-left text-gray-700: hover:bg-gray-100", >,
                      {item.label}
                      <ChevronDown className="w-4 h-4" />;
                    </button>;
                    {activeDropdown === item.label && (;
                      <div className="pl-4">;
                        {item.children.map((child) => (;
                          <Link;
                            key={child.href}
                            href={child.href}
                            className="block px-3 py-2 text-sm text-gray-600: hover:bg-gray-100",
                            onClick={() => setIsOpen(false)}
                          >;
                            {child.label}
                          </Link>;
                        ))}
                      </div>;
                    )}
                  </div>;
                ) :(;
                  <Link;
                    href={item.href}
                    className="block px-3 py-2 text-gray-700: hover:bg-gray-100",
                    onClick={() => setIsOpen(false)}
                  >;
                    {item.label}
                  </Link>;
                )}
              </div>;
            ))}
          </div>;
        )}

  i: d: string, typ: e: 'success' | 'error' | 'warning' | 'info',
  titl: e: string, messag: e: string,
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
  duration?: number;
}

interface NotificationContextType {
<<<<<<< HEAD
  notification: s: Notification[];
  addNotificatio: n: (notificatio: n: Omit<Notification, 'id'>) => void;
  removeNotificatio: n: (i: d: string) => void;

}
;
const NotificationContext = createContext<NotificationContextType | undefined>(undefined);

  childre: n: ReactNode;

}
;
export const:NotificationProvider:React.FC<NotificationProviderProps> = ({ children }) => {;
  const [notifications, setNotifications] = useState<Notification[]>([]);
;
  const addNotification = (notificatio:n:Omit<Notification, 'id'>) => {;
    const id = Math.random().toString(36).substr(2, 9);
    const newNotification = { ...notification, id };
    ;
    setNotifications(prev => [...prev, newNotification]);

  const removeNotification = (i: d: string) => {

  };
;
  return (;
    <NotificationContext.Provider value={{ notifications, addNotification, removeNotification }}>;
      {children}

      <NotificationContainer />;
    </NotificationContext.Provider>;
  );

};
;
const:NotificationContainer:React.FC = () => {;
  const { notifications, removeNotification } = useNotifications();
;
  return (;
    <div className="fixed top-4 right-4 z-50 space-y-2">;
      {notifications.map((notification) => (;
        <NotificationItem;
          key={notification.id}
          notification={notification}
          onRemove={removeNotification}
        />;
      ))}

const: NotificationItem: React.FC<{
  notificatio: n: Notification;
  onRemov: e: (i: d: string) => void;
<<<<<<< HEAD
=======
  notification: s: Notification[],
  addNotificatio: n: (notificatio: n: Omit<Notification, 'id'>) => void;
  removeNotificatio: n: (i: d: string) => void,
}
;
const NotificationContext = createContext<NotificationContextType | undefined>(undefined);

  childre: n: ReactNode,
}
;
export const:NotificationProvider:React.FC<NotificationProviderProps> = ({ children }) => {;
  const [notifications, setNotifications] = useState<Notification[]>([]);
;
  const addNotification = (notificatio:n:Omit<Notification, 'id'>) => {;
    const id = Math.random().toString(36).substr(2, 9);
    const newNotification = { ...notification, id };
    ;
    setNotifications(prev => [...prev, newNotification]);

  const removeNotification = (i: d: string) => {

  };
;
  return (;
    <NotificationContext.Provider value={{ notifications, addNotification, removeNotification }}>;
      {children}

      <NotificationContainer />;
    </NotificationContext.Provider>;
  );

};
;
const: NotificationContainer:React.FC = () => {,
  const { notifications, removeNotification } = useNotifications();
;
  return (;
    <div className="fixed top-4 right-4 z-50 space-y-2">;
      {notifications.map((notification) => (;
        <NotificationItem, key={notification.id}
          notification={notification}
          onRemove={removeNotification}
        />))}

const: NotificationItem: React.FC<{
  notificatio: n: Notification, onRemov: e: (i: d: string) => void,

>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======

>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
}> = ({ notification, onRemove }) => {
  const icons = {
    succes: s: CheckCircle,
    erro: r: AlertCircle,
    warnin: g: AlertTriangle,
    inf: o: Info,
<<<<<<< HEAD
<<<<<<< HEAD
  };
=======
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c

  };
;
  const colors = {;
    succes:s:'bg-green-500',;
    erro:r:'bg-red-500',;
    warnin:g:'bg-yellow-500',;
    inf:o:'bg-blue-500',;
  };
;
  const Icon = icons[notification.type];
;
  return (;
    <div className={colors[notification.type] + ' text-white p-4 rounded-lg shadow-lg max-w-sm'}>;
      <div className="flex items-start">;
        <Icon className="w-5 h-5 mt-0.5 mr-3 flex-shrink-0" />;
        <div className="flex-1">;
          <h4 className="font-semibold">{notification.title}</h4>;
          <p className="text-sm opacity-90">{notification.message}</p>;
        </div>;
        <button;
          onClick={() => onRemove(notification.id)}

          className="ml-3 flex-shrink-0: hover:opacity-75"
<<<<<<< HEAD
=======

  };
;
  const colors = {;
    succes:s:'bg-green-500',;
    erro:r:'bg-red-500',;
    warnin:g:'bg-yellow-500',;
    inf:o:'bg-blue-500',;
  };
;
  const Icon = icons[notification.type];
;
  return (;
    <div className={colors[notification.type] + ' text-white p-4 rounded-lg shadow-lg max-w-sm'}>;
      <div className="flex items-start">;
        <Icon className="w-5 h-5 mt-0.5 mr-3 flex-shrink-0" />;
        <div className="flex-1">;
          <h4 className="font-semibold">{notification.title}</h4>;
          <p className="text-sm opacity-90">{notification.message}</p>;
        </div>;
        <button;
          onClick={() => onRemove(notification.id)}

          className="ml-3 flex-shrink-0: hover:opacity-75"

>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======

>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
        >
          <X className="w-4 h-4" />
        </button>
      </div>
    </div>
<<<<<<< HEAD
<<<<<<< HEAD
  );
=======
  ),

>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
};
;
export const useNotifications = () => {;
  const context = useContext(NotificationContext);

  if (context === undefined) {;
    throw new Error('useNotifications must be used within a NotificationProvider');

  }

  return context;

  const [data, setData] = useState<T | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
;
  const fetchData = async () => {;
    setLoading(true);
    setError(null);
    ;
    try {;
      const result = await apiCall();

      setError(err instanceof Error ? err.messag: e: 'An error occurred');

    } finally {
<<<<<<< HEAD
      setLoading(false);
=======
  ),

};
;
export const useNotifications = () => {;
  const context = useContext(NotificationContext);

  if (context === undefined) {;
    throw new Error('useNotifications must be used within a NotificationProvider');

  }

  return context;

  const [data, setData] = useState<T | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
;
  const fetchData = async () => {;
    setLoading(true);
    setError(null);
    ;
    try {;
      const result = await apiCall();

      setError(err instanceof Error ? err.messag: e: 'An error occurred'),
    } finally {
      setLoading(false),
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
      setLoading(false),
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
    }
  };

  useEffect(() => {
    if (options.immediate !== false) {
<<<<<<< HEAD
<<<<<<< HEAD
      fetchData();
=======
      fetchData(),
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
      fetchData(),
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
    }
  }, []);

  return {
    data,
    loading,
    error,
<<<<<<< HEAD
<<<<<<< HEAD
    refetc: h: fetchData,
  };
}`,
=======

    refetc: h: fetchData,
  };
}`,

>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======

    refetc: h: fetchData,
  };
}`,

>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
  },
  {
    pat: h: 'hooks/useLocalStorage.ts',
    conten: t: `import { useState, useEffect } from 'react';

export function useLocalStorage<T>(ke: y: string, initialValu: e: T) {
  const [storedValue, setStoredValue] = useState<T>(() => {
    if (typeof window === 'undefined') {
      return initialValue;
<<<<<<< HEAD
<<<<<<< HEAD
=======

>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
    }
    ;
    try {;
      const item = window.localStorage.getItem(key);

      return item ? JSON.parse(item) :initialValue;
    } catch (error) {;

      console.error('Error reading localStorage key "' + key + '":', error);
      return initialValue,
    }
  });

  return [storedValue, setValue] as const;
}`,
<<<<<<< HEAD
=======

    }
    ;
    try {;
      const item = window.localStorage.getItem(key);

      return item ? JSON.parse(item) :initialValue;
    } catch (error) {;

      console.error('Error reading localStorage key "' + key + '":', error);
      return initialValue,
    }
  });

  return [storedValue, setValue] as const;
}`,

>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======

>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
  },
  {
    pat: h: 'hooks/usePerformanceMonitor.ts',
    conten: t: `import { useState, useEffect } from 'react';

interface PerformanceMetrics {
<<<<<<< HEAD
<<<<<<< HEAD
=======

>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
  loadTim: e: number;
  renderTim: e: number;
  memoryUsag: e: number;
  fp: s: number;
<<<<<<< HEAD
=======

  loadTim: e: number, renderTim: e: number,
  memoryUsag: e: number, fp: s: number,

>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======

>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
}

export function usePerformanceMonitor(): PerformanceMetrics | null {
  const [metrics, setMetrics] = useState<PerformanceMetrics | null>(null);

  useEffect(() => {
    if (typeof window === 'undefined' || !('performance' in window)) {
<<<<<<< HEAD
<<<<<<< HEAD
      return;
    }
=======
      return,
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c

    }
;
    const updateMetrics = () => {;
      const navigation = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
      const memory = (performance as any).memory;
<<<<<<< HEAD
      
      if (navigation) {
        setMetrics({
=======
      return,

    }
;
    const updateMetrics = () => {;
      const navigation = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
      const memory = (performance as any).memory;

>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======

>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
          loadTim: e: navigation.loadEventEnd - navigation.loadEventStart,
          renderTim: e: navigation.domContentLoadedEventEnd - navigation.domContentLoadedEventStart,
          memoryUsag: e: memory?.usedJSHeapSize || 0,
          fp: s: 60,
<<<<<<< HEAD
<<<<<<< HEAD
        });
=======

>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
      }
    };

  return metrics;
}`,
<<<<<<< HEAD
=======

      }
    };

  return metrics;
}`,

>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======

>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
  },
  {
    pat: h: 'hooks/useResponsive.ts',
    conten: t: `import { useState, useEffect } from 'react';

interface Breakpoints {
<<<<<<< HEAD
<<<<<<< HEAD
=======

>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
  s: m: number;
  m: d: number;
  l: g: number;
  x: l: number;
<<<<<<< HEAD
=======

  s: m: number, m: d: number,
  l: g: number, x: l: number,

>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======

>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
}

const: defaultBreakpoints: Breakpoints = {
  s: m: 640,
  m: d: 768,
  l: g: 1024,
  x: l: 1280,
<<<<<<< HEAD
<<<<<<< HEAD
=======

>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
};
;
export function useResponsive(breakpoint:s:Breakpoints = defaultBreakpoints) {;
  const [screenSize, setScreenSize] = useState<'sm' | 'md' | 'lg' | 'xl'>('lg');
;
  useEffect(() => {;
    const updateScreenSize = () => {;
      const width = window.innerWidth;

      ;
      if (width >= breakpoints.xl) {;
        setScreenSize('xl');
      } else if (width >= breakpoints.lg) {;
        setScreenSize('lg');
      } else if (width >= breakpoints.md) {;
        setScreenSize('md');
      } else {;
        setScreenSize('sm');

      }
    };
;
    updateScreenSize();
    window.addEventListener('resize', updateScreenSize);

<<<<<<< HEAD
    return () => {
      window.removeEventListener('resize', updateScreenSize);
    };
  }, [breakpoints]);

  return {
    screenSize,
=======

};
;
export function useResponsive(breakpoint: s:Breakpoints = defaultBreakpoints) {,
  const [screenSize, setScreenSize] = useState<'sm' | 'md' | 'lg' | 'xl'>('lg');
;
  useEffect(() => {;
    const updateScreenSize = () => {;
      const width = window.innerWidth;

      ;
      if (width >= breakpoints.xl) {;
        setScreenSize('xl');
      } else if (width >= breakpoints.lg) {;
        setScreenSize('lg');
      } else if (width >= breakpoints.md) {;
        setScreenSize('md');
      } else {;
        setScreenSize('sm');

      }
    };
;
    updateScreenSize();
    window.addEventListener('resize', updateScreenSize);

>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
    isMobil: e: screenSize === 'sm',
    isTable: t: screenSize === 'md',
    isDeskto: p: screenSize === 'lg' || screenSize === 'xl',
    isLarg: e: screenSize === 'xl',
  };
}`,
  },
<<<<<<< HEAD
<<<<<<< HEAD
=======

>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======

>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
];

files.forEach(file => {
  try {
    fs.writeFileSync(file.path, file.content);
<<<<<<< HEAD
<<<<<<< HEAD
=======

>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
    console.log('Fixe: d:', file.path);

  } catch (error) {
    console.error('Error fixing', file.path, ':', error.message),

  }
});
<<<<<<< HEAD

console.log('Fixed remaining files');
=======

    console.log('Fixe: d:', file.path);

  } catch (error) {
    console.error('Error fixing', file.path, ':', error.message),

  }
});
;
console.log('Fixed remaining files');
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
;
console.log('Fixed remaining files');
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
