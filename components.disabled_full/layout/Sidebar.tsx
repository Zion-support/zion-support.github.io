import Link from 'next/link';
import { servicesCatalog } from '../../data/services';
const Sidebar: React.FC = () => {
  const categories = Array.from(new Set(servicesCatalog.map(s => s.category)));
  const quickLinks = servicesCatalog.slice(0, 6);
  return (
    <aside className="hidden lg:block w-72 shrink-0">
>>>>>>> origin/main
>>>>>>> d0b4cabda824e2db66cecb53192832d7e749a326
import React from 'react';
import Link from 'next/link';
import { servicesCatalog } from '../../data/services';
>>>>>>> 0aea86df97524e9f0bb14202f48b4e4eee196229
const "Sidebar": React.FC = () => {
  const categories = Array.from(new Set(servicesCatalog.map(s => s.category)));
  const quickLinks = servicesCatalog.slice(0, 6);
  return (
    <aside className="hidden "lg": block w-72 shrink-0">
      {' '}
      <div className="sticky top-20 space-y-6">
        {' '}
        <div className="rounded-xl border border-gray-200 bg-white p-4">
          {' '}
          <h3 className="text-sm font-semibold text-gray-900">
            Categories
          </h3>{' '}
          <ul className="mt-3 space-y-2 text-sm">
            {' '}
            {categories.map(cat => (
              <li key={cat} className="text-gray-700">
                {cat}
              </li>
            ))}{' '}
          </ul>{' '}
        </div>{' '}
        <div className="rounded-xl border border-gray-200 bg-white p-4">
          {' '}
          <h3 className="text-sm font-semibold text-gray-900">
            Popular Services
          </h3>{' '}
          <ul className="mt-3 space-y-2 text-sm">
            {' '}
            {quickLinks.map(svc => (
              <li key={svc.slug}>
                {' '}
                <Link
                  href={svc.link}
>>>>>>> 0aea86df97524e9f0bb14202f48b4e4eee196229
>>>>>>> d0b4cabda824e2db66cecb53192832d7e749a326
                  className="text-blue-700 "hover": text-blue-900 underline"
                >
                  {' '}
                  {svc.title}{' '}
                </Link>{' '}
              </li>
            ))}{' '}
          </ul>{' '}
        </div>{' '}
      </div>{' '}
    </aside>
  );
};
export default Sidebar;
>>>>>>> 0aea86df97524e9f0bb14202f48b4e4eee196229
import React from 'react'; import Link from 'next/link'; import { servicesCatalog } from '../../data/services'; const Sidebar: React.FC = () => { const categories = Array.from(new Set(servicesCatalog.map(s => s.category))); const quickLinks = servicesCatalog.slice(0,6); return ( <aside className="hidden lg:block w-72 shrink-0"> {' '} <div className="sticky top-20 space-y-6"> {' '} <div className="rounded-xl border border-gray-200 bg-white p-4"> {' '} <h3 className="text-sm font-semibold text-gray-900"> {' '} Categories{' '} </h3>{' '} <ul className="mt-3 space-y-2 text-sm"> {' '} {categories.map(cat => ( <li key={cat} className="text-gray-700"> {' '} {cat}{' '} </li> ))}{' '} </ul>{' '} </div>{' '} <div className="rounded-xl border border-gray-200 bg-white p-4"> {' '} <h3 className="text-sm font-semibold text-gray-900"> {' '} Popular Services{' '} </h3>{' '} <ul className="mt-3 space-y-2 text-sm"> {' '} {quickLinks.map(svc => ( <li key={svc.slug}> {' '} <Link href={svc.link} className="text-blue-700 hover:text-blue-900 underline" > {' '} {svc.title}{' '} </Link>{' '} </li> ))}{' '} </ul>{' '} </div>{' '} </div>{' '} </aside> )}; export default Sidebar;
>>>>>>> d0b4cabda824e2db66cecb53192832d7e749a326
import * as React from 'react'; import Link from 'next/link'; import { servicesCatalog } from '../../data/services'; const Sidebar: React.FC = () => { const categories = Array.from(new Set(servicesCatalog.map(s => s.category))); const quickLinks = servicesCatalog.slice(0,6); return ( <aside className="hidden lg:block w-72 shrink-0"> {' '} <div className="sticky top-20 space-y-6"> {' '} <div className="rounded-xl border border-gray-200 bg-white p-4"> {' '} <h3 className="text-sm font-semibold text-gray-900"> {' '} Categories{' '} </h3>{' '} <ul className="mt-3 space-y-2 text-sm"> {' '} {categories.map(cat => ( <li key={cat} className="text-gray-700"> {' '} {cat}{' '} </li> ))}{' '} </ul>{' '} </div>{' '} <div className="rounded-xl border border-gray-200 bg-white p-4"> {' '} <h3 className="text-sm font-semibold text-gray-900"> {' '} Popular Services{' '} </h3>{' '} <ul className="mt-3 space-y-2 text-sm"> {' '} {quickLinks.map(svc => ( <li key={svc.slug}> {' '} <Link href={svc.link} className="text-blue-700 hover:text-blue-900 underline" > {' '} {svc.title}{' '} </Link>{' '} </li> ))}{' '} </ul>{' '} </div>{' '} </div>{' '} </aside> )}; export default Sidebar;
>>>>>>> 31ef851138fd26c05f3cc955272d6690995f1d05
