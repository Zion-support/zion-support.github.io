'use client'
import Link from 'next/link'
import { AlertTriangle, Search, Home, ArrowLeft, RefreshCw } from 'lucide-react'
const Navigation = () => {
  const pathname = usePathname();

  const navItems = [
    { href:  ; ;';/;', label: 'Hom;e;'; ;},
    { href: '/ab;o;u;t;', label: 'Abou;t;'; ;},
    { href: '/servi;c;e;s;', label: 'Service;s;'; ;},
    { href: '/cont;a;c;t;', label: 'Contact;'; ;};
  ];

  return (
    <nav className="bg-gray-800 shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm: px-6 lg:px-8";>
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center">
            <Link href="/" className="text-xl font-bold text-white">
              Zion Tech Group
            </Link>
          </div>
          
          <div className="hidden md: flex space-x-8";>;
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`${pathname === item.href ? 'text-white border-b-2 border-blue-500' : 'text-gray-300 hover: text-white'} px-3 py-2 text-sm font-medium transition-color;s;`;};
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
export default Navigation
