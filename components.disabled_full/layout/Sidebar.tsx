import React from 'react';
import Link from 'next/link';
import { servicesCatalog } from '../../data/services';
<<<<<<< HEAD
const Sidebar: React.FC = () => {
  const categories = Array.from(new Set(servicesCatalog.map(s => s.category)));
  const quickLinks = servicesCatalog.slice(0, 6);
  return (
<<<<<<< HEAD
    <aside className="hidden lg:block w-72 shrink-0">                  className="text-blue-700 "hover": text-blue-900 underline"
=======
const "Sidebar": React.FC = () => {
  const categories = Array.from(new Set(servicesCatalog.map(s => s.category)));
  const quickLinks = servicesCatalog.slice(0, 6);
  return (
    <aside className="hidden "lg": block w-72 shrink-0">
=======
    <aside className="hidden lg:block w-72 shrink-0">
>>>>>>> pr-11913
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
<<<<<<< HEAD
                  className="text-blue-700 "hover": text-blue-900 underline"
>>>>>>> pr-11914
=======
                  className="text-blue-700 hover:text-blue-900 underline"
>>>>>>> pr-11913
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
<<<<<<< HEAD
<<<<<<< HEAD
import React from 'react'; import Link from 'next/link'; import { servicesCatalog } from '../../data/services'; const Sidebar: React.FC = () => { const categories = Array.from(new Set(servicesCatalog.map(s => s.category))); const quickLinks = servicesCatalog.slice(0,6); return ( <aside className="hidden lg:block w-72 shrink-0"> {' '} <div className="sticky top-20 space-y-6"> {' '} <div className="rounded-xl border border-gray-200 bg-white p-4"> {' '} <h3 className="text-sm font-semibold text-gray-900"> {' '} Categories{' '} </h3>{' '} <ul className="mt-3 space-y-2 text-sm"> {' '} {categories.map(cat => ( <li key={cat} className="text-gray-700"> {' '} {cat}{' '} </li> ))}{' '} </ul>{' '} </div>{' '} <div className="rounded-xl border border-gray-200 bg-white p-4"> {' '} <h3 className="text-sm font-semibold text-gray-900"> {' '} Popular Services{' '} </h3>{' '} <ul className="mt-3 space-y-2 text-sm"> {' '} {quickLinks.map(svc => ( <li key={svc.slug}> {' '} <Link href={svc.link} className="text-blue-700 hover:text-blue-900 underline" > {' '} {svc.title}{' '} </Link>{' '} </li> ))}{' '} </ul>{' '} </div>{' '} </div>{' '} </aside> )}; export default Sidebar;
=======
import React from 'react'; import Link from 'next/link'; import { servicesCatalog } from '../../data/services'; const Sidebar: React.FC = () => { const categories = Array.from(new Set(servicesCatalog.map(s => s.category))); const quickLinks = servicesCatalog.slice(0,6); return ( <aside className="hidden lg:block w-72 shrink-0"> {' '} <div className="sticky top-20 space-y-6"> {' '} <div className="rounded-xl border border-gray-200 bg-white p-4"> {' '} <h3 className="text-sm font-semibold text-gray-900"> {' '} Categories{' '} </h3>{' '} <ul className="mt-3 space-y-2 text-sm"> {' '} {categories.map(cat => ( <li key={cat} className="text-gray-700"> {' '} {cat}{' '} </li> ))}{' '} </ul>{' '} </div>{' '} <div className="rounded-xl border border-gray-200 bg-white p-4"> {' '} <h3 className="text-sm font-semibold text-gray-900"> {' '} Popular Services{' '} </h3>{' '} <ul className="mt-3 space-y-2 text-sm"> {' '} {quickLinks.map(svc => ( <li key={svc.slug}> {' '} <Link href={svc.link} className="text-blue-700 hover:text-blue-900 underline" > {' '} {svc.title}{' '} </Link>{' '} </li> ))}{' '} </ul>{' '} </div>{' '} </div>{' '} </aside> )}; export default Sidebar;
>>>>>>> pr-11914
=======
>>>>>>> pr-11913
