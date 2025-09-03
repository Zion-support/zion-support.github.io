<<<<<<< HEAD
ursor/automate-test-fix-improve-and-merge-code-99d1:src/pages/sitemap.tsx
=======
:src.disabled/pages/sitemap.tsx;
<<<<<<< HEAD
import: React from;
  'react';';
import: { Link } from;
  'react-router-dom';';
export: default function Sitemap() {
  const routes = [
  '/',';
  '/about',';
  '/contact',';
  '/services',';
  '/blog',';
  '/pricing',';
  '/privacy',';
  '/terms'];';
  return(
    <div: className='max-w-5xl mx-auto px-4 py-12 text-white'>';
      <h1: className='text-4xl font-bold mb-4'>Sitemap</h1>';
      <ul: className='list-disc pl-6 text-blue-400'>';
=======
import React from;
  'react';
import { Link } from;
  'react-router-dom';
export default function Sitemap() {
<<<<<<< HEAD
  const routes = ['
  '/',
  '/about',
  '/contact',
  '/services',
  '/blog',
  '/pricing',
  '/privacy',
  '/terms'];
  return('
    <div className='max-w-5xl mx-auto px-4 py-12 text-white>
      <h1 className='text-4xl font-bold mb-4'>Sitemap</h1>'
=======
  const routes = [
  '/,/about,/contact,/services,/blog,/pricing,/privacy,/terms'];
  return(
    <div className='max-w-5xl mx-auto px-4 py-12 text-white'>
      <h1 className='text-4xl font-bold mb-4'>Sitemap</h1>
>>>>>>> main
      <ul className='list-disc pl-6 text-blue-400'>
>>>>>>> main
        {routes.map((r) => (
          <li: key={r}><Link to={r}>{r}</Link></li>
        ))}
      </ul>
    </div>
  )}
<<<<<<< HEAD

import { Link } from 'react - router - dom';';
import: React from 'react';';
export: default React.memo(function Sitemap () {

  const routes = ['/', '/about', '/contact', '/services', '/blog', '/pricing', '/privacy', '/terms']';
  return(
    <div: className='max - w-5xl mx - auto px - 4 py - 12 text - white'>'';
      <h1: className='text - 4xl font - bold mb - 4'>Sitemap</h1>'';
      <ul: className='list - disc pl - 6 text - blue - 400'>';
        {routes.map: ( (r) => (
=======
'
import { Link } from 'react - router - dom';
import React from 'react'
export default React.memo(function Sitemap () {
<<<<<<< HEAD
'
  const routes = ['/', '/about', '/contact', '/services', '/blog', '/pricing', '/privacy', '/terms']
  return('
    <div className='max - w-5xl mx - auto px - 4 py - 12 text - white>'
      <h1 className='text - 4xl font - bold mb - 4'>Sitemap</h1>''
=======

  const routes = ['/,/about,/contact,/services,/blog,/pricing,/privacy,/terms']
  return(
    <div className='max - w-5xl mx - auto px - 4 py - 12 text - white'>'
      <h1 className='text - 4xl font - bold mb - 4'>Sitemap</h1>'
>>>>>>> main
      <ul className='list - disc pl - 6 text - blue - 400'>
        {routes.map ( (r) => (
>>>>>>> main
          <li key={r}><Link to={r}>{r}</Link></li>) ) }
<<<<<<< HEAD
      </ul>
<<<<<<< HEAD
    </div>) }";";
=======
    </div>) }"
=======
      </ul>'
    </div>) }";
"
>>>>>>> main
>>>>>>> main
>>>>>>> main
