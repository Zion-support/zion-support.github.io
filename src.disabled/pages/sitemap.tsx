:src.disabled/pages/sitemap.tsx
import React from
  'react';
import { Link } from
  'react-router-dom';

export default function Sitemap() {
  const routes = [
  '/',
  '/about',
  '/contact',
  '/services',
  '/blog',
  '/pricing',
  '/privacy',
  '/terms'];return (
    <div className="max-w-5xl mx-auto px-4 py-12 text-white">
      <h1 className="text-4xl font-bold mb-4">Sitemap</h1>
      <ul className="list-disc pl-6 text-blue-400">
        {routes.map((r) => (
          <li key={r}><Link to={r}>{r}</Link></li>
        ))}
      </ul>
    </div>
  );
}

import { Link } from 'react - router - dom';
import React from 'react';
export default React.memo(function Sitemap () {;

;
  const routes = ['/', '/about', '/contact', '/services', '/blog', '/pricing', '/privacy', '/terms'];
  return (;
    <div className="max - w-5xl mx - auto px - 4 py - 12 text - white">";
      <h1 className="text - 4xl font - bold mb - 4">Sitemap</h1>";
      <ul className="list - disc pl - 6 text - blue - 400">;
        {routes.map ( (r) => (;
          <li key={r}><Link to={r}>{r}</Link></li>;) ) };
      </ul>;
    </div>;) ;
};
";
