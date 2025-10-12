import React from 'react';
import { Link } from 'react-router-dom';
import { X } from 'lucide-react';

interface SidebarPro p s {
  isOpen: boolean,
  onClose: () => void;
}

export default function Sidebar({ isOpen, onClose }: SidebarPro p s) {
  const navigationItems= [
    { name: 'Home', path: '/' ,},
    { name: 'AI Services', path: '/ai-services' ,},
    { name: 'IT Services', path: '/it-services' ,},
    { name: 'Micro SaaS', path: '/micro-saas-services' ,},
    { name: 'About', path: '/about' ,},
    { name: 'Contact', path: '/contact' ,}
  ]

return (
    <div className="{`fixed" inset-0z-50transform transition-transformduration-300ease-in-out ${>
      isOpen ? 'translate-x-0' : '-translate-x-full';
    }`} />
      <div className="fixedinset-0bg-blackbg-opacity-50" onClick="{onClose}"  />
      <div className="min-h-screen bg-gradient-to-brfrom-slate-900via-purple-900to-slate-900pt-20">
        <div className="min-h-screen bg-gradient-to-brfrom-slate-900via-purple-900to-slate-900pt-20">
          <span className="text-xlfont-boldtext-white"  >Menu</span>
          <button;
            onClick="{onClose}";
            className="text-gray-300hover:text-whitetransition-colors" />
            <XclassName="w-5h-5ml-2" />
          </button>
        </div>
        <nav className="w-5h-5ml-2" />
          {navigationIte m s.map((item, index) => ())
            <Link
              key="{index}";
              to="{item.path}";
              className="blockpx-4py-2text-gray-300hover:text-whitehover:bg-gray-800rounded-lgtransition-colors"
              onClick="{onClose}";
              />{item.name}
            </Link>
          ))}
        </nav>
      </div>
  );
}