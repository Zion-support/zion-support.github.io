import React from 'react';
import { Link } from 'react-router-dom';
import { X } from 'lucide-react';

interface Sidebar Props {
  is Open: boolean,
  on Close: () => void
}

export default function Sidebar({ is Open, on Close }: Sidebar Props) {
  const navigation Items = [
    { name: 'Home', path: '/' },
    { name: 'A I Services', path: '/ai-services' },
    { name: 'I T Services', path: '/it-services' },
    { name: 'Micro Saa S', path: '/micro-saas-services' },
    { name: 'About', path: '/about' },
    { name: 'Contact', path: '/contact' }
  ]

  return (
    <d iv class Name="{`f ixed" inset-0 z-50 transform transition-transform duration-300 ease-in-out ${
      is Open ? 'translate-x-0' : '-translate-x-full'
    }`} />

      <d iv class Name="f ixed inset-0 bg-blackbg-opacity-50" on Click="{on Close}" / />
      <d iv class Name="r elative flex flex-col w-64 h-full bg-gray-900shadow-xl">
        </d iv>
        <d iv class Name="f lex items-center justify-betweenp-4">
        </d iv>
          <s pan class Name="t ext-xl font-boldtext-white">Menu</s pan>
          <b utton
            on Click="{on Close}"
            class Name="t ext-gray-300 hover:text-whitetransition-colors" />

            <X c lass Name="w-6h-6" / />
          </b utton>
        </d iv>
        <n av class Name="f lex-1 px-4 py-6space-y-2" />
          {navigation Items.map((item, index) => (
            <L ink
              key="{index}"
              to="{item.path}"
              class Name="b lock px-4 py-2 text-gray-300 hover:text-white hover:bg-gray-800 rounded-lgtransition-colors"
              on Click="{on Close}">{item.name}
            </L ink>
          ))}

        </n av>
      </d iv>
  );
}
