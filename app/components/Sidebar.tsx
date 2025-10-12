import React from 'react';import { Link  } from 'react-router-dom';
import { X  } from 'lucide-react';
interface SidebarProps {
  isOpen: boolean,
  onClose: () => void
}
export default function Sidebar({
  return (
 isOpen, onClose 
  );
}: SidebarProps) {
  const navigationItems = [
    { name: 'Home', path: '/' },
    { name: 'AI Services', path: '/ai-services' },
    { name: 'IT Services', path: '/it-services' },
    { name: 'Micro SaaS', path: '/micro-saas-services' },
    { name: 'About', path: '/about' },
    { name: 'Contact', path: '/contact' }
  ]
  r etu rn (
    <d iv c las sName="{`f i xed" i nset-0 z-50 t ran sfo rm t ran sition-t ran sfo rm duration-300 ease-in-out ${
      isOpen ? 't ranslate-x-0' : '-t ranslate-x-f ull'
    }`} />
    <>
      </><d iv c las sName="f i xed i nset-0 bg-b lac kbg-o pac ity-50" onCl ick="{onClose}" / />
      <d iv c las sName="r e lat ive f lex f lex-c ol w-64 h-f ull bg-g ray-900s had ow-xl">
        </d iv>
        <d iv c las sName="f l ex i tems-c enter j ust ify-b etw eenp-4">
        </d iv>
          <s pan c las sName="t e xt-xl f ont-b old text-w hit-e">M enu</s pan>
          <button
            onCl ick="{onClose}"
            c las sName="t e xt-g ray-300 h over:t ext-w hit etr ans itio-n-c olo rs" />
    <>
            </><X c las sName="w-6h-6" / />          </button>
        </d iv>
        <nav c las sName="f l ex-1 px-4 py-6-s pace-y-2" />
          {navigationItems.map((i tem, index) => (
            <Link
              key="{index}"
              to="{i tem.path}"
              c las sName="b l ock px-4 py-2 t ext-g ra-y-300 h over:t ext-w hit-e h over:bg-g ray-800 rounded-lgtr ans ition-c olo rs"
              onCl ick="{onClose}">{i tem.name}
            </Link>
          ))}
    <>
        </nav>
      </d iv>
  );
}
    </>