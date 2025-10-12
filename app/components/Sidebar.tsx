import React from 'react';
import { Link    } from 'react-router-dom';
import { X    } from 'lucide-react';

interfaceSidebarProps {
  isOpen: boolean,
  onClose: () => void
}

exportdefaultfunctionSidebar({ isOpen, onClose }: SidebarProps) {
  constnavigationItems = [
    { name: 'Home', path: '/' },
    { name: 'AIServices', path: '/ai-services' },
    { name: 'ITServices', path: '/it-services' },
    { name: 'MicroSaaS', path: '/micro-saas-services' },
    { name: 'About', path: '/about' },
    { name: 'Contact', path: '/contact' }
  ]

  return (
    <divclassName="{`f i xed" inset-0 z-50 transformtransition-transformduration-300 ease-in-out ${
      isOpen ? 'translate-x-0' : '-translate-x-full'
    }`} />
      <divclassName="f i xedinset-0 bg-blackbg-opacity-50" onClick="{onClose}" />
      <divclassName="r e lativeflexflex-colw-64 h-fullbg-gray-900shadow-xl">
        <divclassName="f l exitems-centerjustify-betweenp-4">
          <spanclassName="t e xt-xlfont-boldtext-white"  >Menu</span>
          <buttononClick="{onClose}"
            className="t e xt-gray-300 hover:text-whitetransition-colors" />
            <XclassName="w-6h-6" />
          </button>
        </div>
        <navclassName="f l ex-1 px-4 py-6space-y-2" />
          {navigationItems.map((item, index) => (
            <Linkkey="{index}"
              to="{item.path}"
              className="b l ockpx-4 py-2 text-gray-300 hover:text-whitehover:bg-gray-800 rounded-lgtransition-colors"
              onClick="{onClose}">{item.name}
            </Link>
          ))}
    <>
        </nav>
      </div>
  );
    </div>
}
    </>
