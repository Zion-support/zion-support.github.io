import React from 'react';
import Link from 'next/link';
import { servicesCatalog } from '../../data/services';
const Sidebar: React.FC = () => {
  const categories = Array.from(new Set(servicesCatalog.map(s => s.category)));
  const quickLinks = servicesCatalog.slice(0, 6);
  return (
    <aside className="hidden lg:block w-72 shrink-0">
import React from 'react';
import Link from 'next/link';
import { servicesCatalog } from '../../data/services';
  const categories = Array.from(new Set(servicesCatalog.map(s => s.category)));
  const quickLinks = servicesCatalog.slice(0, 6);
  return (
    <aside className="hidden lg:block w-72 shrink-0">
import React from 'react';
import Link from 'next/link';
import { servicesCatalog } from '../../data/services';const "Sidebar": React.FC = () => {
  const categories = Array.from(new Set(servicesCatalog.map(s => s.category)));
  const quickLinks = servicesCatalog.slice(0, 6);
return (;
    <aside className="hidden "lg":block w-72 shrink-0">"
const "Sidebar": React.FC = () => {"
>>>>>>> origin/resolved-merge-conflicts
  }
  const categories = Array.from(new Set(servicesCatalog.map(s => { return s.category))); }
  const quickLinks = servicesCatalog.slice(0, 6);
return (;
<<<<<<< HEAD
    <aside className='hidden 'lg':block w-72 shrink-0'>'
const 'Sidebar': React.FC = () => {'
  }
  const categories = Array.from(new Set(servicesCatalog.map(s => { return s.category))); }
  const quickLinks = servicesCatalog.slice(0, 6);
return (;
    <aside className='hidden 'lg': block w-72 shrink-0'>'
      {' '}'
      <div className='sticky top-20 space-y-6'>;'
        {' '}'
        <div className='rounded-xl border border-gray-200 bg-white p-4'>;'
          {' '}'
          <h3 className='text-sm font-semibold text-gray-900'>;'
=======
    <aside className="hidden "lg": block w-72 shrink-0">"
      {' '}'
      <div className="sticky top-20 space-y-6">;"
        {' '}'
        <div className="rounded-xl border border-gray-200 bg-white p-4">;"
          {' '}'
          <h3 className="text-sm font-semibold text-gray-900">;"
  return (
    <aside className=hidden "lg": block w-72 shrink-0>
      {' }
      <div className=sticky top-20 space-y-6">;
        { '}
        <div className="rounded-xl border border-gray-200 bg-white p-4>;
          {' }
          <h3 className=text-sm font-semibold text-gray-900">;
>>>>>>> origin/resolved-merge-conflicts
            Categories;
          </h3>{' '}'
          <ul className='mt-3 space-y-2 text-sm'>;'
            {' '}'
            {categories.map(cat => (<li key={cat} className='text-gray-700'>;'
                {cat}
              </li>;
            ))}{' '}'
          </ul>{' '}'
        </div>{' '}'
        <div className='rounded-xl border border-gray-200 bg-white p-4'>;'
          {' '}'
          <h3 className='text-sm font-semibold text-gray-900'>;'
            Popular Services;
          </h3>{' '}'
          <ul className='mt-3 space-y-2 text-sm'>;'
            {' '}'
            {quickLinks.map(svc => (<li key={svc.slug}>;
                {' '}'
                <Link;
                  href={svc.link}ursor/automate-test-improve-and-merge-code-646c;
                  className='text-blue-700 'hover': text-blue-900 underline';'
                >;
                  {' '}'
                  {svc.title}{' '}'
                </Link>{' '}'
              </li>;
<<<<<<< HEAD
                <Link,
href={svc.link}
                  className='text-blue-700 'hover': text-blue-900 underline''
=======
                <Link
                  href={svc.link}
                  className="text-blue-700 "hover": text-blue-900 underline"
>>>>>>> origin/resolved-merge-conflicts
                >
                  {' '}'
                  {svc.title}{' '}'
                </Link>{' '}'
              </li>
            ))}{' '}'
          </ul>{' '}'
        </div>{' '}'
      </div>{' '}'
    </aside>;
<<<<<<< HEAD
  )}export default Sidebar;import React from 'react'; import Link from 'next/link'; import { servicesCatalog } from '../../data/services'; const 'Sidebar': React.FC = () => { const categories = Array.from(new Set(servicesCatalog.map(s => s.category)))const quickLinks = servicesCatalog.slice(0,6)return ( <aside className='hidden 'lg':block w-72 shrink-0'> {' '} <div className='sticky top-20 space-y-6'> {' '} <div className='rounded-xl border border-gray-200 bg-white p-4'> {' '} <h3 className='text-sm font-semibold text-gray-900'> {' '} Categories{' '} </h3>{' '} <ul className='mt-3 space-y-2 text-sm'> {' '} {categories.map(cat => ( <li key={cat} className='text-gray-700'> {' '} {cat}{' '} </li> ))}{' '} </ul>{' '} </div>{' '} <div className='rounded-xl border border-gray-200 bg-white p-4'> {' '} <h3 className='text-sm font-semibold text-gray-900'> {' '} Popular Services{' '} </h3>{' '} <ul className='mt-3 space-y-2 text-sm'> {' '} {quickLinks.map(svc => ( <li key={svc.slug}> {' '} <Link href={svc.link} className='text-blue-700 'hover':text-blue-900 underline' > {' '} {svc.title}{' '} </Link>{' '} </li> ))}{' '} </ul>{' '} </div>{' '} </div>{' '} </aside> )}export default Sidebar;import * as React from 'react'; import Link from 'next/link'; import { servicesCatalog } from '../../data/services'; const 'Sidebar': React.FC = () => { const categories = Array.from(new Set(servicesCatalog.map(s => s.category)))const quickLinks = servicesCatalog.slice(0,6)return ( <aside className='hidden 'lg':block w-72 shrink-0'> {' '} <div className='sticky top-20 space-y-6'> {' '} <div className='rounded-xl border border-gray-200 bg-white p-4'> {' '} <h3 className='text-sm font-semibold text-gray-900'> {' '} Categories{' '} </h3>{' '} <ul className='mt-3 space-y-2 text-sm'> {' '} {categories.map(cat => ( <li key={cat} className='text-gray-700'> {' '} {cat}{' '} </li> ))}{' '} </ul>{' '} </div>{' '} <div className='rounded-xl border border-gray-200 bg-white p-4'> {' '} <h3 className='text-sm font-semibold text-gray-900'> {' '} Popular Services{' '} </h3>{' '} <ul className='mt-3 space-y-2 text-sm'> {' '} {quickLinks.map(svc => ( <li key={svc.slug}> {' '} <Link href={svc.link} className='text-blue-700 'hover':text-blue-900 underline' > {' '} {svc.title}{' '} </Link>{' '} </li> ))}{' '} </ul>{' '} </div>{' '} </div>{' '} </aside> )}export default Sidebar;ursor/automate-test-improve-and-merge-code-646c;'
=======
  )}export default Sidebar;import React from 'react; import Link from next/link'; import { servicesCatalog } from '../../data/services; const Sidebar: React.FC = () => { const categories = Array.from(new Set(servicesCatalog.map(s => s.category)))const quickLinks = servicesCatalog.slice(0,6)return ( <aside className=hidden lg:block w-72 shrink-0"> { '} <div className="sticky top-20 space-y-6> {' } <div className=rounded-xl border border-gray-200 bg-white p-4"> { '} <h3 className="text-sm font-semibold text-gray-900> {' } Categories{ '} </h3>{' } <ul className=mt-3 space-y-2 text-sm"> { '} {categories.map(cat => ( <li key={cat} className="text-gray-700> {' } {cat}{ '} </li> ))}{' } </ul>{ '} </div>{' } <div className=rounded-xl border border-gray-200 bg-white p-4"> { '} <h3 className="text-sm font-semibold text-gray-900> {' } Popular Services{ '} </h3>{' } <ul className=mt-3 space-y-2 text-sm"> { '} {quickLinks.map(svc => ( <li key={svc.slug}> {' } <Link href={svc.link} className="text-blue-700 hover:text-blue-900 underline > { '} {svc.title}{' } </Link>{ '} </li> ))}{' } </ul>{ '} </div>{' } </div>{ '} </aside> )}export default Sidebar;import * as React from 'react; import Link from next/link'; import { servicesCatalog } from '../../data/services; const Sidebar: React.FC = () => { const categories = Array.from(new Set(servicesCatalog.map(s => s.category)))const quickLinks = servicesCatalog.slice(0,6)return ( <aside className=hidden lg:block w-72 shrink-0"> { '} <div className="sticky top-20 space-y-6> {' } <div className=rounded-xl border border-gray-200 bg-white p-4"> { '} <h3 className="text-sm font-semibold text-gray-900> {' } Categories{ '} </h3>{' } <ul className=mt-3 space-y-2 text-sm"> { '} {categories.map(cat => ( <li key={cat} className="text-gray-700> {' } {cat}{ '} </li> ))}{' } </ul>{ '} </div>{' } <div className=rounded-xl border border-gray-200 bg-white p-4"> { '} <h3 className="text-sm font-semibold text-gray-900> {' } Popular Services{ '} </h3>{' } <ul className=mt-3 space-y-2 text-sm"> { '} {quickLinks.map(svc => ( <li key={svc.slug}> {' } <Link href={svc.link} className="text-blue-700 hover:text-blue-900 underline > { '} {svc.title}{' } </Link>{ '} </li> ))}{' } </ul>{ '} </div>{' } </div>{ '} </aside> )}export default Sidebar;ursor/automate-test-improve-and-merge-code-646c;
=======
>>>>>>> origin/cursor/delete-old-data-records-6bba
  const quickLinks = servicesCatalog.slice(0, 6);
  return (
    <aside className=\"hidden lg:block w-72 shrink-0\" />
import React from 'react';}
;}
import { servicesCatalog  } from '../../data/services';
const Sidebar: React.FC = () => {const categories = Array.from(new Set(servicesCatalog.map(s => s.category)))const quickLinks = servicesCatalog.slice(0, 6)return (<aside className=\"hidden lg:block w-72 shrink-0\" />;
const Sidebar: React.FC = () => {const categories = Array.from(new Set(servicesCatalog.map(s => s.category)))const quickLinks = servicesCatalog.slice(0, 6)return (<aside className=\"hidden lg:block w-72 shrink-0\" />;}
;}
const \"Sidebar\": React.FC = () => {import { servicesCatalog } from '../../data/services';const \"Sidebar\": React.FC = () => {const categories = Array.from(new Set(servicesCatalog.map(s => s.category)))const quickLinks = servicesCatalog.slice(0, 6)return (<aside className=\"hidden \"lg\": block w-72 shrink-0\" />;
const Sidebar: React.FC = () => {
  const categories = Array.from(new Set(servicesCatalog.map(s => s.category)));
  const quickLinks = servicesCatalog.slice(0, 6);
  return (
    <aside className="hidden lg:block w-72 shrink-0">
import React from 'react';
import Link from 'next/link';
import { servicesCatalog } from '../../data/services';




const "Sidebar": React.FC = () => {
    <aside className=\"hidden lg:block w-72 shrink-0\" />
const \"Sidebar\": React.FC = () => {
  const categories = Array.from(new Set(servicesCatalog.map(s => s.category)));
  const quickLinks = servicesCatalog.slice(0, 6);
  return (}
    <aside className=\"hidden \"lg\": block w-72 shrink-0\" />}
      {' '}
      <div className=\"sticky top-20 space-y-6\" />;
        {' '}
        <div className=\"rounded-xl border border-gray-200 bg-white p-4\" />;
          {' '}
          <h3 className=\"text-sm font-semibold text-gray-900\" />;
            Categories;
          </h3>{' '}
          <ul className=\"mt-3 space-y-2 text-sm\" />;
            {' '}
            {categories.map(cat => (<li key={cat} className=\"text-gray-700\" />;
                {cat}
              </li>;
            ))}{' '}
          </ul>{' '}
        </div>{' '}
        <div className=\"rounded-xl border border-gray-200 bg-white p-4\" />;
          {' '}
          <h3 className=\"text-sm font-semibold text-gray-900\" />;
            Popular Services;
          </h3>{' '}
          <ul className=\"mt-3 space-y-2 text-sm\" />;
            {' '}
            {quickLinks.map(svc => (<li key={svc.slug} />;
                {' '}
                <Link;
                  href={svc.link};
                  className=\"text-blue-700 \"hover\": text-blue-900 underline\";
                 />;
                  {' '}
                  {svc.title}{' '}
                </Link>{' '}
              </li>;
                <Link;
href={svc.link}
                  className=\"text-blue-700 \"hover\": text-blue-900 underline\"
                 />
                  {' '}
                  {svc.title}{' '}
                </Link>{' '}
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
import React from 'react'; import Link from 'next/link'; import { servicesCatalog } from '../../data/services'; const Sidebar: React.FC = () => { const categories = Array.from(new Set(servicesCatalog.map(s => s.category))); const quickLinks = servicesCatalog.slice(0,6); return ( <aside className="hidden lg:block w-72 shrink-0"> {' '} <div className="sticky top-20 space-y-6"> {' '} <div className="rounded-xl border border-gray-200 bg-white p-4"> {' '} <h3 className="text-sm font-semibold text-gray-900"> {' '} Categories{' '} </h3>{' '} <ul className="mt-3 space-y-2 text-sm"> {' '} {categories.map(cat => ( <li key={cat} className="text-gray-700"> {' '} {cat}{' '} </li> ))}{' '} </ul>{' '} </div>{' '} <div className="rounded-xl border border-gray-200 bg-white p-4"> {' '} <h3 className="text-sm font-semibold text-gray-900"> {' '} Popular Services{' '} </h3>{' '} <ul className="mt-3 space-y-2 text-sm"> {' '} {quickLinks.map(svc => ( <li key={svc.slug}> {' '} <Link href={svc.link} className="text-blue-700 hover:text-blue-900 underline" > {' '} {svc.title}{' '} </Link>{' '} </li> ))}{' '} </ul>{' '} </div>{' '} </div>{' '} </aside> )}; export default Sidebar;
import * as React from 'react'; import Link from 'next/link'; import { servicesCatalog } from '../../data/services'; const Sidebar: React.FC = () => { const categories = Array.from(new Set(servicesCatalog.map(s => s.category))); const quickLinks = servicesCatalog.slice(0,6); return ( <aside className="hidden lg:block w-72 shrink-0"> {' '} <div className="sticky top-20 space-y-6"> {' '} <div className="rounded-xl border border-gray-200 bg-white p-4"> {' '} <h3 className="text-sm font-semibold text-gray-900"> {' '} Categories{' '} </h3>{' '} <ul className="mt-3 space-y-2 text-sm"> {' '} {categories.map(cat => ( <li key={cat} className="text-gray-700"> {' '} {cat}{' '} </li> ))}{' '} </ul>{' '} </div>{' '} <div className="rounded-xl border border-gray-200 bg-white p-4"> {' '} <h3 className="text-sm font-semibold text-gray-900"> {' '} Popular Services{' '} </h3>{' '} <ul className="mt-3 space-y-2 text-sm"> {' '} {quickLinks.map(svc => ( <li key={svc.slug}> {' '} <Link href={svc.link} className="text-blue-700 hover:text-blue-900 underline" > {' '} {svc.title}{' '} </Link>{' '} </li> ))}{' '} </ul>{' '} </div>{' '} </div>{' '} </aside> )}; export default Sidebar;
>>>>>>> c56320a4e91ebfd91859a6eed8c13818d8c9efd6