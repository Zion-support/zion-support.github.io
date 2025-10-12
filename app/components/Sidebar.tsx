import React from 'react';
<<<<<<< HEAD
<<<<<<< HEAD

=======
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
>>>>>>> cursor/fix-errors-and-merge-to-main-d941

export default function ComponentsPage() {
  return (
<<<<<<< HEAD

=======
    <>
      <Helmet>
        <title>Components - Zion Tech Group</title>
        <meta name="description" content="Professional components services by Zion Tech Group. Transform your business with our expert solutions." />
      </Helmet>
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">
          <h1 className="text-4xl font-bold text-white mb-6">Components</h1>
          <p className="text-lg text-gray-300 mb-8">Professional components services coming soon.</p>
          <Link
=======
import { Link } from 'react-router-dom';
import { X } from 'lucide-react';
interface SidebarProps {
  isOpen: boolean,
  onClose: () => void;
}
  const navigationItems = [
    { name: 'Home', path: '/' },
    { name: 'AI Services', path: '/ai-services' },
    { name: 'IT Services', path: '/it-services' },
    { name: 'Micro SaaS', path: '/micro-saas-services' },
    { name: 'About', path: '/about' },
    { name: 'Contact', path: '/contact' }
  ];
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
export default function Sidebar() {
  return (
    <div>Content</div>
  );
    <div>Component content</div>
  );
}
  return (
    <div>Content</div>
  );
    <div className = "{`fixed" inset-0 z-50 transform transition-transform duration-300 ease-in-out ${    }`} /></div>
      isOpen ? 'translate-x-0' : '-translate-x-full'
      <div className="fixed inset-0 bg-blackbg-opacity-50" onClick="{onClose}"  /></div>
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20"></div>
        <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20"></div>
          <span className="text-xl font-bold text-white"  >Menu</span>;
          <button;            className = "text-gray-300 hover:text-white transition-colors" /></button>
            onClick="{onClose}"
            <X className="w-5h-5ml-2" /></X>
          </button>
        </div>
        <nav className="w-5h-5ml-2" /></nav>
          {navigationItems.map((item, index) => (;
            <Link;</Link></Link>
              key = "{index}"
              to="{item.path}"
              className="block px-4 py-2 text-gray-300 hover:text-white hover:bg-gray-800 rounded-lg transition-colors"
              onClick="{onClose}"
              />{item.name}
            </Link>
          ))}
    <>
      <Helmet >
        <title>Sidebar - Zion Tech Group</title>
        <meta name="description" content="Professional sidebar by Zion Tech Group. Transform your business with our expert solutions." />
      </Helmet>
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">
          <h1 className="text-4xl font-bold text-white mb-6">Sidebar</h1>
          <p className="text-lg text-gray-300 mb-8">Professional sidebar coming soon.</p>
          <Link >
>>>>>>> cursor/fix-errors-and-merge-to-main-a79b
            to="/contact"
            className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center mx-auto w-fit"
            Contact Us
            <ArrowRight className="w-5 h-5 ml-2" />
          </Link>
        </div>
      </div>
    </>
<<<<<<< HEAD
>>>>>>> cursor/fix-errors-and-merge-to-main-d941
=======
        </nav>
      </div>;
>>>>>>> cursor/fix-errors-and-merge-to-main-a79b
  );
}