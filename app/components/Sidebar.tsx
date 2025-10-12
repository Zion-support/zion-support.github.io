import React from 'react';
import {Link} from 'react-router-dom';
import {X} from 'lucide-react';

interface Sidebar Props {
  isOpen: boolean,
  onClose: () => void
}

export default function Sidebar({ isOpen, onClose }: SidebarProps) {
  const navigationItems = [
    { name: 'Home', path: '/' },
    { name: 'AI Services', path: '/ai-services' },
    { name: 'IT Services', path: '/it-services' },
    { name: 'Micro SaaS', path: '/micro-saas-services' },
    { name: 'About', path: '/about' },
    { name: 'Contact', path: '/contact' }
  ]

  return (
    <div className ="{`fixed" inset-0 z-50 transformtransition-transformduration-300 ease-in-out${
      isOpen ? 'translate-x-0' : '-translate-x-full'
    }`} />
      <div className ="fixedinset-0 bg-blackbg-opacity-50" onClick ="{onClose}" / />
      <div className ="relativeflex flex-colw-64 h-fullbg-gray-900shadow-xl" />
        <div className ="flexitems-centerjustify-betweenp-4" />
          <spanclassName ="text-xlfont-boldtext-white"  >Menu</span>
          <buttononClick ="{onClose}"
            className="text-gray-300 hover:text-whitetransition-colors" />
            <Xclass Name ="w-6h-6" / />
          </button>
        </div>
        <navclassName ="flex-1 px-4 py-6space-y-2" />
          {navigationItems.map((item, index) => (
            <Linkkey ="{index}"
              to="{item.path}"
              className="blockpx-4 py-2 text-gray-300 hover:text-whitehover:bg-gray-800 rounded-lgtransition-colors"
              onClick ="{onClose}"
              />{item.name}
            </Link>
          ))}
        </nav>
      </div>
    </div>
  );
}