<<<<<<< HEAD
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
=======
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-646c

<<<<<<< HEAD
=======

=======

>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }
  
  static getDerivedStateFromError(error) {
    return { hasError: true };
  }
  
  componentDidCatch(error, errorInfo) {
    console.error('Error caught by boundary:', error, errorInfo);
  }
  
  render() {
    if (this.state.hasError) {
      return <div>Something went wrong.</div>;
    }
    
    return this.props.children;
  }
}
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a:temp_exclude/pages._archive_corrupted/sitemap.tsx
=======


>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
import React from 'react';
import Link from 'next/link';
const routes = [{ "name": 'Home', "href": '/' },;
  { "name": 'Solutions', "href": '/solutions' },;
  { "name": 'Services', "href": '/services' },;
  { "name": 'Pricing', "href": '/pricing' },;
  { "name": 'About', "href": '/about' },;
  { "name": 'Careers', "href": '/careers' },;
  { "name": 'Blog', "href": '/blog' },;
  { "name": 'Contact', "href": '/contact' },;
  { "name": 'Docs', "href": '/docs' },;
  { "name": 'Privacy', "href": '/privacy' },;
  { "name": 'Terms', "href": '/terms' },;
  { "name": 'Cookies', "href": '/cookies' },;
];
export default function SitemapPage() {;
  return (
    <main className="max-w-4xl mx-auto px-4 py-16">;
      <h1 className="text-3xl font-bold mb-6">Sitemap</h1>;
      <ul className="space-y-3">;
        {routes && routes.map((r) => (;
          <li key={r && r.href}>;
            <Link href={r && r.href} className="text-blue-600 "hover": underline">{r && r.name}</Link>;
          </li>;
        ))}
      </ul>;
    </main>;
  );

<<<<<<< HEAD
import React from 'react'; import Link from 'next/link'; const routes = [ { name: 'Home',href: '/' },{ name: 'Solutions',href: '/solutions' },{ name: 'Services',href: '/services' },{ name: 'Pricing',href: '/pricing' },{ name: 'About',href: '/about' },{ name: 'Careers',href: '/careers' },{ name: 'Blog',href: '/blog' },{ name: 'Contact',href: '/contact' },{ name: 'Docs',href: '/docs' },{ name: 'Privacy',href: '/privacy' },{ name: 'Terms',href: '/terms' },{ name: 'Cookies',href: '/cookies' },]; export default function SitemapPage() { return ( <main className="max-w-4xl mx-auto px-4 py-16"> <h1 className="text-3xl font-bold mb-6">Sitemap</h1> <ul className="space-y-3"> {routes.map((r) => ( <li key={r.href}> <Link href={r.href} className="text-blue-600 hover:underline">{r.name}</Link> </li> ))} </ul> </main> )}
import React from 'react'; import Link from 'next/link'; const routes = [ { name: 'Home',href: '/' },{ name: 'Solutions',href: '/solutions' },{ name: 'Services',href: '/services' },{ name: 'Pricing',href: '/pricing' },{ name: 'About',href: '/about' },{ name: 'Careers',href: '/careers' },{ name: 'Blog',href: '/blog' },{ name: 'Contact',href: '/contact' },{ name: 'Docs',href: '/docs' },{ name: 'Privacy',href: '/privacy' },{ name: 'Terms',href: '/terms' },{ name: 'Cookies',href: '/cookies' },]; export default function SitemapPage() { return ( <main className="max-w-4xl mx-auto px-4 py-16"> <h1 className="text-3xl font-bold mb-6">Sitemap</h1> <ul className="space-y-3"> {routes.map((r) => ( <li key={r.href}> <Link href={r.href} className="text-blue-600 hover:underline">{r.name}</Link> </li> ))} </ul> </main> )}
import React from 'react'; import Link from 'next/link'; const routes = [ { name: 'Home',href: '/' },{ name: 'Solutions',href: '/solutions' },{ name: 'Services',href: '/services' },{ name: 'Pricing',href: '/pricing' },{ name: 'About',href: '/about' },{ name: 'Careers',href: '/careers' },{ name: 'Blog',href: '/blog' },{ name: 'Contact',href: '/contact' },{ name: 'Docs',href: '/docs' },{ name: 'Privacy',href: '/privacy' },{ name: 'Terms',href: '/terms' },{ name: 'Cookies',href: '/cookies' },]; export default function SitemapPage() { return ( <main className="max-w-4xl mx-auto px-4 py-16"> <h1 className="text-3xl font-bold mb-6">Sitemap</h1> <ul className="space-y-3"> {routes && routes.map((r) => ( <li key={r && r.href}> <Link href={r && r.href} className="text-blue-600 hover:underline">{r && r.name}</Link> </li> ))} </ul> </main> )}
import React from 'react'; import Link from 'next/link'; const routes = [ { name: 'Home',href: '/' },{ name: 'Solutions',href: '/solutions' },{ name: 'Services',href: '/services' },{ name: 'Pricing',href: '/pricing' },{ name: 'About',href: '/about' },{ name: 'Careers',href: '/careers' },{ name: 'Blog',href: '/blog' },{ name: 'Contact',href: '/contact' },{ name: 'Docs',href: '/docs' },{ name: 'Privacy',href: '/privacy' },{ name: 'Terms',href: '/terms' },{ name: 'Cookies',href: '/cookies' },]; export default function SitemapPage() { return ( <main className="max-w-4xl mx-auto px-4 py-16"> <h1 className="text-3xl font-bold mb-6">Sitemap</h1> <ul className="space-y-3"> {routes && routes.map((r) => ( <li key={r && r.href}> <Link href={r && r.href} className="text-blue-600 hover:underline">{r && r.name}</Link> </li> ))} </ul> </main> )}
=======


import React from 'react'; import Link from 'next/link'; const routes = [ { name: 'Home',href: '/' },{ name: 'Solutions',href: '/solutions' },{ name: 'Services',href: '/services' },{ name: 'Pricing',href: '/pricing' },{ name: 'About',href: '/about' },{ name: 'Careers',href: '/careers' },{ name: 'Blog',href: '/blog' },{ name: 'Contact',href: '/contact' },{ name: 'Docs',href: '/docs' },{ name: 'Privacy',href: '/privacy' },{ name: 'Terms',href: '/terms' },{ name: 'Cookies',href: '/cookies' },]; export default function SitemapPage() { return ( <main className="max-w-4xl mx-auto px-4 py-16"> <h1 className="text-3xl font-bold mb-6">Sitemap</h1> <ul className="space-y-3"> {routes.map((r) => ( <li key={r.href}> <Link href={r.href} className="text-blue-600 hover:underline">{r.name}</Link> </li> ))} </ul> </main> )}

>>>>>>> cursor/fix-syntax-push-and-merge-to-main-40de
=======

import React from 'react'; import Link from 'next/link'; const routes = [ { name: 'Home',href: '/' },{ name: 'Solutions',href: '/solutions' },{ name: 'Services',href: '/services' },{ name: 'Pricing',href: '/pricing' },{ name: 'About',href: '/about' },{ name: 'Careers',href: '/careers' },{ name: 'Blog',href: '/blog' },{ name: 'Contact',href: '/contact' },{ name: 'Docs',href: '/docs' },{ name: 'Privacy',href: '/privacy' },{ name: 'Terms',href: '/terms' },{ name: 'Cookies',href: '/cookies' },]; export default function SitemapPage() { return ( <main className="max-w-4xl mx-auto px-4 py-16"> <h1 className="text-3xl font-bold mb-6">Sitemap</h1> <ul className="space-y-3"> {routes.map((r) => ( <li key={r.href}> <Link href={r.href} className="text-blue-600 hover:underline">{r.name}</Link> </li> ))} </ul> </main> )}
import React from 'react'; import Link from 'next/link'; const routes = [ { name: 'Home',href: '/' },{ name: 'Solutions',href: '/solutions' },{ name: 'Services',href: '/services' },{ name: 'Pricing',href: '/pricing' },{ name: 'About',href: '/about' },{ name: 'Careers',href: '/careers' },{ name: 'Blog',href: '/blog' },{ name: 'Contact',href: '/contact' },{ name: 'Docs',href: '/docs' },{ name: 'Privacy',href: '/privacy' },{ name: 'Terms',href: '/terms' },{ name: 'Cookies',href: '/cookies' },]; export default function SitemapPage() { return ( <main className="max-w-4xl mx-auto px-4 py-16"> <h1 className="text-3xl font-bold mb-6">Sitemap</h1> <ul className="space-y-3"> {routes.map((r) => ( <li key={r.href}> <Link href={r.href} className="text-blue-600 hover:underline">{r.name}</Link> </li> ))} </ul> </main> )}
import React from 'react'; import Link from 'next/link'; const routes = [ { name: 'Home',href: '/' },{ name: 'Solutions',href: '/solutions' },{ name: 'Services',href: '/services' },{ name: 'Pricing',href: '/pricing' },{ name: 'About',href: '/about' },{ name: 'Careers',href: '/careers' },{ name: 'Blog',href: '/blog' },{ name: 'Contact',href: '/contact' },{ name: 'Docs',href: '/docs' },{ name: 'Privacy',href: '/privacy' },{ name: 'Terms',href: '/terms' },{ name: 'Cookies',href: '/cookies' },]; export default function SitemapPage() { return ( <main className="max-w-4xl mx-auto px-4 py-16"> <h1 className="text-3xl font-bold mb-6">Sitemap</h1> <ul className="space-y-3"> {routes.map((r) => ( <li key={r.href}> <Link href={r.href} className="text-blue-600 hover:underline">{r.name}</Link> </li> ))} </ul> </main> )}
import React from 'react'; import Link from 'next/link'; const routes = [ { name: 'Home',href: '/' },{ name: 'Solutions',href: '/solutions' },{ name: 'Services',href: '/services' },{ name: 'Pricing',href: '/pricing' },{ name: 'About',href: '/about' },{ name: 'Careers',href: '/careers' },{ name: 'Blog',href: '/blog' },{ name: 'Contact',href: '/contact' },{ name: 'Docs',href: '/docs' },{ name: 'Privacy',href: '/privacy' },{ name: 'Terms',href: '/terms' },{ name: 'Cookies',href: '/cookies' },]; export default function SitemapPage() { return ( <main className="max-w-4xl mx-auto px-4 py-16"> <h1 className="text-3xl font-bold mb-6">Sitemap</h1> <ul className="space-y-3"> {routes && routes.map((r) => ( <li key={r && r.href}> <Link href={r && r.href} className="text-blue-600 hover:underline">{r && r.name}</Link> </li> ))} </ul> </main> )}
import React from 'react'; import Link from 'next/link'; const routes = [ { name: 'Home',href: '/' },{ name: 'Solutions',href: '/solutions' },{ name: 'Services',href: '/services' },{ name: 'Pricing',href: '/pricing' },{ name: 'About',href: '/about' },{ name: 'Careers',href: '/careers' },{ name: 'Blog',href: '/blog' },{ name: 'Contact',href: '/contact' },{ name: 'Docs',href: '/docs' },{ name: 'Privacy',href: '/privacy' },{ name: 'Terms',href: '/terms' },{ name: 'Cookies',href: '/cookies' },]; export default function SitemapPage() { return ( <main className="max-w-4xl mx-auto px-4 py-16"> <h1 className="text-3xl font-bold mb-6">Sitemap</h1> <ul className="space-y-3"> {routes && routes.map((r) => ( <li key={r && r.href}> <Link href={r && r.href} className="text-blue-600 hover:underline">{r && r.name}</Link> </li> ))} </ul> </main> )}
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
=======
<<<<<<< HEAD
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
>>>>>>> 8e2e4d4581f20cdfc8804c591c8c2f9544e58358
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-646c
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> main
=======
>>>>>>> 10f43844f89f81084ca8fdce546c59c985174e68
<<<<<<< HEAD
>>>>>>> 3f460500b361cb7cf5c95e8c53ca967467908705
=======
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-646c
import React from 'react';
import Link from 'next/link';
const routes = [{ "name": 'Home', "href": '/' },
  { "name": 'Solutions', "href": '/solutions' },
  { "name": 'Services', "href": '/services' },
  { "name": 'Pricing', "href": '/pricing' },
  { "name": 'About', "href": '/about' },
  { "name": 'Careers', "href": '/careers' },
  { "name": 'Blog', "href": '/blog' },
  { "name": 'Contact', "href": '/contact' },
  { "name": 'Docs', "href": '/docs' },
  { "name": 'Privacy', "href": '/privacy' },
  { "name": 'Terms', "href": '/terms' },
  { "name": 'Cookies', "href": '/cookies' },
];
export default function SitemapPage() {
  return (
    <main className="max-w-4xl mx-auto px-4 py-16">
      <h1 className="text-3xl font-bold mb-6">Sitemap</h1>
      <ul className="space-y-3">
        {routes.map((r) => (
          <li key={r.href}>
            <Link href={r.href} className="text-blue-600 "hover": underline">{r.name}</Link>
          </li>
        ))}
      </ul>
    </main>
  );
}
<<<<<<< HEAD
<<<<<<< HEAD
import React from 'react'; import Link from 'next/link'; const routes = [ { name: 'Home',href: '/' },{ name: 'Solutions',href: '/solutions' },{ name: 'Services',href: '/services' },{ name: 'Pricing',href: '/pricing' },{ name: 'About',href: '/about' },{ name: 'Careers',href: '/careers' },{ name: 'Blog',href: '/blog' },{ name: 'Contact',href: '/contact' },{ name: 'Docs',href: '/docs' },{ name: 'Privacy',href: '/privacy' },{ name: 'Terms',href: '/terms' },{ name: 'Cookies',href: '/cookies' },]; export default function SitemapPage() { return ( <main className="max-w-4xl mx-auto px-4 py-16"> <h1 className="text-3xl font-bold mb-6">Sitemap</h1> <ul className="space-y-3"> {routes.map((r) => ( <li key={r.href}> <Link href={r.href} className="text-blue-600 hover:underline">{r.name}</Link> </li> ))} </ul> </main> )}
import React from 'react'; import Link from 'next/link'; const routes = [ { name: 'Home',href: '/' },{ name: 'Solutions',href: '/solutions' },{ name: 'Services',href: '/services' },{ name: 'Pricing',href: '/pricing' },{ name: 'About',href: '/about' },{ name: 'Careers',href: '/careers' },{ name: 'Blog',href: '/blog' },{ name: 'Contact',href: '/contact' },{ name: 'Docs',href: '/docs' },{ name: 'Privacy',href: '/privacy' },{ name: 'Terms',href: '/terms' },{ name: 'Cookies',href: '/cookies' },]; export default function SitemapPage() { return ( <main className="max-w-4xl mx-auto px-4 py-16"> <h1 className="text-3xl font-bold mb-6">Sitemap</h1> <ul className="space-y-3"> {routes.map((r) => ( <li key={r.href}> <Link href={r.href} className="text-blue-600 hover:underline">{r.name}</Link> </li> ))} </ul> </main> )}
=======
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-646c
<<<<<<< HEAD
=======
import React from 'react'; import Link from 'next/link'; const routes = [ { name: 'Home',href: '/' },{ name: 'Solutions',href: '/solutions' },{ name: 'Services',href: '/services' },{ name: 'Pricing',href: '/pricing' },{ name: 'About',href: '/about' },{ name: 'Careers',href: '/careers' },{ name: 'Blog',href: '/blog' },{ name: 'Contact',href: '/contact' },{ name: 'Docs',href: '/docs' },{ name: 'Privacy',href: '/privacy' },{ name: 'Terms',href: '/terms' },{ name: 'Cookies',href: '/cookies' },]; export default function SitemapPage() { return ( <main className="max-w-4xl mx-auto px-4 py-16"> <h1 className="text-3xl font-bold mb-6">Sitemap</h1> <ul className="space-y-3"> {routes.map((r) => ( <li key={r.href}> <Link href={r.href} className="text-blue-600 hover:underline">{r.name}</Link> </li> ))} </ul> </main> )}
>>>>>>> 10f43844f89f81084ca8fdce546c59c985174e68
=======
<<<<<<< HEAD
>>>>>>> origin/main
<<<<<<< HEAD
=======
>>>>>>> bda99e5abd16efb90ee02549943231847392138b
=======
import React from 'react'; import Link from 'next/link'; const routes = [ { name: 'Home',href: '/' },{ name: 'Solutions',href: '/solutions' },{ name: 'Services',href: '/services' },{ name: 'Pricing',href: '/pricing' },{ name: 'About',href: '/about' },{ name: 'Careers',href: '/careers' },{ name: 'Blog',href: '/blog' },{ name: 'Contact',href: '/contact' },{ name: 'Docs',href: '/docs' },{ name: 'Privacy',href: '/privacy' },{ name: 'Terms',href: '/terms' },{ name: 'Cookies',href: '/cookies' },]; export default function SitemapPage() { return ( <main className="max-w-4xl mx-auto px-4 py-16"> <h1 className="text-3xl font-bold mb-6">Sitemap</h1> <ul className="space-y-3"> {routes.map((r) => ( <li key={r.href}> <Link href={r.href} className="text-blue-600 hover:underline">{r.name}</Link> </li> ))} </ul> </main> )}
>>>>>>> main
>>>>>>> main
=======
>>>>>>> 0aea86df97524e9f0bb14202f48b4e4eee196229
>>>>>>> d0b4cabda824e2db66cecb53192832d7e749a326
>>>>>>> f239ba8ab20235073506b800efb123c18d8bf440
=======
>>>>>>> 10f43844f89f81084ca8fdce546c59c985174e68
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> 3f460500b361cb7cf5c95e8c53ca967467908705
=======
>>>>>>> main
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
=======

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }
  
  static getDerivedStateFromError(error) {
    return { hasError: true };
  }
  
  componentDidCatch(error, errorInfo) {
    console.error('Error caught by boundary:', error, errorInfo);
  }
  
  render() {
    if (this.state.hasError) {
      return <div>Something went wrong.</div>;
    }
    
    return this.props.children;
  }
}
import React from 'react';
import Link from 'next/link';
const routes = [{ "name": 'Home', "href": '/' },;
  { "name": 'Solutions', "href": '/solutions' },;
  { "name": 'Services', "href": '/services' },;
  { "name": 'Pricing', "href": '/pricing' },;
  { "name": 'About', "href": '/about' },;
  { "name": 'Careers', "href": '/careers' },;
  { "name": 'Blog', "href": '/blog' },;
  { "name": 'Contact', "href": '/contact' },;
  { "name": 'Docs', "href": '/docs' },;
  { "name": 'Privacy', "href": '/privacy' },;
  { "name": 'Terms', "href": '/terms' },;
  { "name": 'Cookies', "href": '/cookies' },;
];
export default function SitemapPage() {;
  return (
    <main className="max-w-4xl mx-auto px-4 py-16">;
      <h1 className="text-3xl font-bold mb-6">Sitemap</h1>;
      <ul className="space-y-3">;
        {routes && routes.map((r) => (;
          <li key={r && r.href}>;
            <Link href={r && r.href} className="text-blue-600 "hover": underline">{r && r.name}</Link>;
          </li>;
        ))}
      </ul>;
    </main>;
  );

import React from 'react'; import Link from 'next/link'; const routes = [ { name: 'Home',href: '/' },{ name: 'Solutions',href: '/solutions' },{ name: 'Services',href: '/services' },{ name: 'Pricing',href: '/pricing' },{ name: 'About',href: '/about' },{ name: 'Careers',href: '/careers' },{ name: 'Blog',href: '/blog' },{ name: 'Contact',href: '/contact' },{ name: 'Docs',href: '/docs' },{ name: 'Privacy',href: '/privacy' },{ name: 'Terms',href: '/terms' },{ name: 'Cookies',href: '/cookies' },]; export default function SitemapPage() { return ( <main className="max-w-4xl mx-auto px-4 py-16"> <h1 className="text-3xl font-bold mb-6">Sitemap</h1> <ul className="space-y-3"> {routes.map((r) => ( <li key={r.href}> <Link href={r.href} className="text-blue-600 hover:underline">{r.name}</Link> </li> ))} </ul> </main> )}
import React from 'react'; import Link from 'next/link'; const routes = [ { name: 'Home',href: '/' },{ name: 'Solutions',href: '/solutions' },{ name: 'Services',href: '/services' },{ name: 'Pricing',href: '/pricing' },{ name: 'About',href: '/about' },{ name: 'Careers',href: '/careers' },{ name: 'Blog',href: '/blog' },{ name: 'Contact',href: '/contact' },{ name: 'Docs',href: '/docs' },{ name: 'Privacy',href: '/privacy' },{ name: 'Terms',href: '/terms' },{ name: 'Cookies',href: '/cookies' },]; export default function SitemapPage() { return ( <main className="max-w-4xl mx-auto px-4 py-16"> <h1 className="text-3xl font-bold mb-6">Sitemap</h1> <ul className="space-y-3"> {routes.map((r) => ( <li key={r.href}> <Link href={r.href} className="text-blue-600 hover:underline">{r.name}</Link> </li> ))} </ul> </main> )}
import React from 'react'; import Link from 'next/link'; const routes = [ { name: 'Home',href: '/' },{ name: 'Solutions',href: '/solutions' },{ name: 'Services',href: '/services' },{ name: 'Pricing',href: '/pricing' },{ name: 'About',href: '/about' },{ name: 'Careers',href: '/careers' },{ name: 'Blog',href: '/blog' },{ name: 'Contact',href: '/contact' },{ name: 'Docs',href: '/docs' },{ name: 'Privacy',href: '/privacy' },{ name: 'Terms',href: '/terms' },{ name: 'Cookies',href: '/cookies' },]; export default function SitemapPage() { return ( <main className="max-w-4xl mx-auto px-4 py-16"> <h1 className="text-3xl font-bold mb-6">Sitemap</h1> <ul className="space-y-3"> {routes && routes.map((r) => ( <li key={r && r.href}> <Link href={r && r.href} className="text-blue-600 hover:underline">{r && r.name}</Link> </li> ))} </ul> </main> )}
import React from 'react'; import Link from 'next/link'; const routes = [ { name: 'Home',href: '/' },{ name: 'Solutions',href: '/solutions' },{ name: 'Services',href: '/services' },{ name: 'Pricing',href: '/pricing' },{ name: 'About',href: '/about' },{ name: 'Careers',href: '/careers' },{ name: 'Blog',href: '/blog' },{ name: 'Contact',href: '/contact' },{ name: 'Docs',href: '/docs' },{ name: 'Privacy',href: '/privacy' },{ name: 'Terms',href: '/terms' },{ name: 'Cookies',href: '/cookies' },]; export default function SitemapPage() { return ( <main className="max-w-4xl mx-auto px-4 py-16"> <h1 className="text-3xl font-bold mb-6">Sitemap</h1> <ul className="space-y-3"> {routes && routes.map((r) => ( <li key={r && r.href}> <Link href={r && r.href} className="text-blue-600 hover:underline">{r && r.name}</Link> </li> ))} </ul> </main> )}
>>>>>>> c56320a4e91ebfd91859a6eed8c13818d8c9efd6
=======
>>>>>>> main
>>>>>>> 8e2e4d4581f20cdfc8804c591c8c2f9544e58358
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-646c
