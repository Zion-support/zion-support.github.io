import React from 'react';


export default function Sidebar() {
  return (
    <>
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
        ]
      
        return (
          <div className="{`fixed" inset-0 z-50 transform transition-transform duration-300 ease-in-out ${
            isOpen ? 'translate-x-0' : '-translate-x-full'
          }`} /></div>
            <div className="fixed inset-0 bg-blackbg-opacity-50" onClick="{onClose}"  /></div>
            <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20"></div>
              <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20"></div>
                <span className="text-xl font-bold text-white"  >Menu</span>
                <button;
                  onClick="{onClose}"
                  className="text-gray-300 hover:text-white transition-colors" /></button>
                  <X className="w-5h-5ml-2" /></X>
                </button>
              </div>
              <nav className="w-5h-5ml-2" /></nav>
                {navigationItems.map((item, index) => (
                  <Link;</Link></Link>
                    key="{index}"
                    to="{item.path}"
                    className="block px-4 py-2 text-gray-300 hover:text-white hover:bg-gray-800 rounded-lg transition-colors"
                    onClick="{onClose}"
                    />{item.name}
                  </Link>
                ))}
              </nav>
            </div>
        );
      }
    </>
  );
}