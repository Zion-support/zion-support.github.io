<<<<<<< HEAD
import React, { useState } from 'react';
import Link from 'next/link';
import { Brain, Menu } from 'lucide-react';
export default function Navigation() {;
  const [open, setOpen] = useState(false);
  return (;
    <nav className="bg-white/80 backdrop-blur border-b sticky top-0 z-40">;
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">;
        <Link href="/" className="flex items-center gap-2">;
          <div className="w-8 h-8 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-lg grid place-items-center">;
            <Brain className="w-5 h-5 text-white" />;
          </div>;
          <span className="font-semibold">Zion Tech Group</span>;
        </Link>;
        <div className="hidden md:flex items-center gap-6">;
          <Link href="/services" className="text-sm text-gray-700 hover:text-blue-600">Services</Link>;
          <Link href="/about" className="text-sm text-gray-700 hover:text-blue-600">About</Link>;
          <Link href="/contact" className="text-sm text-white bg-blue-600 px-3 py-1.5 rounded hover:bg-blue-700">Contact</Link>;
        </div>;
        <button className="md:hidden" aria-label="Toggle menu" onClick={() => setOpen(v => !v)}>;
          <Menu className="w-6 h-6" />;
        </button>;
      </div>;
      {open && (;
        <div className="md:hidden border-t px-4 py-2 space-y-1">;
          <Link href="/services" className="block py-2">Services</Link>;
          <Link href="/about" className="block py-2">About</Link>;
          <Link href="/contact" className="block py-2">Contact</Link>;
        </div>;
      )}
    </nav>;
  );
}
=======
import React,{ useState,useEffect } from 'react'; import Link from 'next/link'; import { Menu,X } from 'lucide-react'; const Navigation: React.FC = () => { const [isOpen,setIsOpen] = useState(false); const [activeDropdown,setActiveDropdown] = useState<string | null>(null); useEffect(() => { const handleClickOutside = (event: MouseEvent) => { if (activeDropdown && !(event.target as Element).closest('.dropdown')) { setActiveDropdown(null)} }; document.addEventListener('mousedown',handleClickOutside); return () => { document.removeEventListener('mousedown',handleClickOutside)}},[activeDropdown]); const navigation = [ { name: 'Home',href: '/' },{ name: 'Services',href: '#',dropdown: [ { name: 'AI Services',href: '/ai-services' },{ name: 'Micro SAAS',href: '/micro-saas-services' },{ name: 'IT Services',href: '/it-services' },{ name: 'Blockchain',href: '/blockchain-solutions' } ] },{ name: 'Careers',href: '/careers' },{ name: 'Contact',href: '/contact' } ]; return ( <nav className="bg-white shadow-sm border-b"> <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"> <div className="flex justify-between items-center h-16"> {} <div className="flex-shrink-0"> <Link href="/" className="text-2xl font-bold text-blue-600"> Zion Tech Group </Link> </div> {} <div className="hidden md:flex space-x-8"> {navigation.map((item) => ( <div key={item.name} className="relative dropdown"> {item.dropdown ? ( <div className="relative" onMouseEnter={() => setActiveDropdown(item.name)} onMouseLeave={() => setActiveDropdown(null)} > <button className="text-gray-700 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium transition-colors"> {item.name} </button> {activeDropdown === item.name && ( <div className="absolute top-full left-0 mt-1 w-48 bg-white rounded-md shadow-lg border border-gray-200 z-50"> {item.dropdown.map((dropdownItem) => ( <Link key={dropdownItem.name} href={dropdownItem.href} className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-blue-600" > {dropdownItem.name} </Link> ))} </div> )} </div> ) : ( <Link href={item.href} className="text-gray-700 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium transition-colors" > {item.name} </Link> )} </div> ))} </div> {} <div className="md:hidden"> <button onClick={() => setIsOpen(!isOpen)} className="text-gray-700 hover:text-blue-600 p-2" > {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />} </button> </div> </div> {} {isOpen && ( <div className="md:hidden"> <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-gray-50"> {navigation.map((item) => ( <div key={item.name}> {item.dropdown ? ( <div> <div className="text-gray-700 px-3 py-2 text-base font-medium"> {item.name} </div> <div className="pl-4 space-y-1"> {item.dropdown.map((dropdownItem) => ( <Link key={dropdownItem.name} href={dropdownItem.href} className="block px-3 py-2 text-sm text-gray-600 hover:text-blue-600" onClick={() => setIsOpen(false)} > {dropdownItem.name} </Link> ))} </div> </div> ) : ( <Link href={item.href} className="text-gray-700 hover:text-blue-600 block px-3 py-2 rounded-md text-base font-medium" onClick={() => setIsOpen(false)} > {item.name} </Link> )} </div> ))} </div> </div> )} </div> </nav> )}; export default Navigation;
>>>>>>> origin/automation-improvements
