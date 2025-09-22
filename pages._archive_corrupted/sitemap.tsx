<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
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
  // TODO: Implement
}
  constructor(props) {
    super(props);
    this.state = { hasError: false };

  static getDerivedStateFromError(error) {
    return { hasError: true };

  componentDidCatch(error, errorInfo) {
    console.error('Error caught by boundary:', error, errorInfo);
pr-12325

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
import React from 'react'; import Link from 'next/link'; const routes = [ { name: 'Home',href: '/' },{ name: 'Solutions',href: '/solutions' },{ name: 'Services',href: '/services' },{ name: 'Pricing',href: '/pricing' },{ name: 'About',href: '/about' },{ name: 'Careers',href: '/careers' },{ name: 'Blog',href: '/blog' },{ name: 'Contact',href: '/contact' },{ name: 'Docs',href: '/docs' },{ name: 'Privacy',href: '/privacy' },{ name: 'Terms',href: '/terms' },{ name: 'Cookies',href: '/cookies' },]; export default function SitemapPage() { return ( <main className="max-w-4xl mx-auto px-4 py-16"> <h1 className="text-3xl font-bold mb-6">Sitemap</h1> <ul className="space-y-3"> {routes.map((r) => ( <li key={r.href}> <Link href={r.href} className="text-blue-600 hover:underline">{r.name}</Link> </li> ))} </ul> </main> )}
import React from 'react'; import Link from 'next/link'; const routes = [ { name: 'Home',href: '/' },{ name: 'Solutions',href: '/solutions' },{ name: 'Services',href: '/services' },{ name: 'Pricing',href: '/pricing' },{ name: 'About',href: '/about' },{ name: 'Careers',href: '/careers' },{ name: 'Blog',href: '/blog' },{ name: 'Contact',href: '/contact' },{ name: 'Docs',href: '/docs' },{ name: 'Privacy',href: '/privacy' },{ name: 'Terms',href: '/terms' },{ name: 'Cookies',href: '/cookies' },]; export default function SitemapPage() { return ( <main className="max-w-4xl mx-auto px-4 py-16"> <h1 className="text-3xl font-bold mb-6">Sitemap</h1> <ul className="space-y-3"> {routes.map((r) => ( <li key={r.href}> <Link href={r.href} className="text-blue-600 hover:underline">{r.name}</Link> </li> ))} </ul> </main> )}
import React from 'react'; import Link from 'next/link'; const routes = [ { name: 'Home',href: '/' },{ name: 'Solutions',href: '/solutions' },{ name: 'Services',href: '/services' },{ name: 'Pricing',href: '/pricing' },{ name: 'About',href: '/about' },{ name: 'Careers',href: '/careers' },{ name: 'Blog',href: '/blog' },{ name: 'Contact',href: '/contact' },{ name: 'Docs',href: '/docs' },{ name: 'Privacy',href: '/privacy' },{ name: 'Terms',href: '/terms' },{ name: 'Cookies',href: '/cookies' },]; export default function SitemapPage() { return ( <main className="max-w-4xl mx-auto px-4 py-16"> <h1 className="text-3xl font-bold mb-6">Sitemap</h1> <ul className="space-y-3"> {routes && routes.map((r) => ( <li key={r && r.href}> <Link href={r && r.href} className="text-blue-600 hover:underline">{r && r.name}</Link> </li> ))} </ul> </main> )}
import React from 'react'; import Link from 'next/link'; const routes = [ { name: 'Home',href: '/' },{ name: 'Solutions',href: '/solutions' },{ name: 'Services',href: '/services' },{ name: 'Pricing',href: '/pricing' },{ name: 'About',href: '/about' },{ name: 'Careers',href: '/careers' },{ name: 'Blog',href: '/blog' },{ name: 'Contact',href: '/contact' },{ name: 'Docs',href: '/docs' },{ name: 'Privacy',href: '/privacy' },{ name: 'Terms',href: '/terms' },{ name: 'Cookies',href: '/cookies' },]; export default function SitemapPage() { return ( <main className="max-w-4xl mx-auto px-4 py-16"> <h1 className="text-3xl font-bold mb-6">Sitemap</h1> <ul className="space-y-3"> {routes && routes.map((r) => ( <li key={r && r.href}> <Link href={r && r.href} className="text-blue-600 hover:underline">{r && r.name}</Link> </li> ))} </ul> </main> )}

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
import React from 'react'; import Link from 'next/link'; const routes = [ { name: 'Home',href: '/' },{ name: 'Solutions',href: '/solutions' },{ name: 'Services',href: '/services' },{ name: 'Pricing',href: '/pricing' },{ name: 'About',href: '/about' },{ name: 'Careers',href: '/careers' },{ name: 'Blog',href: '/blog' },{ name: 'Contact',href: '/contact' },{ name: 'Docs',href: '/docs' },{ name: 'Privacy',href: '/privacy' },{ name: 'Terms',href: '/terms' },{ name: 'Cookies',href: '/cookies' },]; export default function SitemapPage() { return ( <main className="max-w-4xl mx-auto px-4 py-16"> <h1 className="text-3xl font-bold mb-6">Sitemap</h1> <ul className="space-y-3"> {routes.map((r) => ( <li key={r.href}> <Link href={r.href} className="text-blue-600 hover:underline">{r.name}</Link> </li> ))} </ul> </main> )}

import React from 'react'; import Link from 'next/link'; const routes = [ { name: 'Home',href: '/' },{ name: 'Solutions',href: '/solutions' },{ name: 'Services',href: '/services' },{ name: 'Pricing',href: '/pricing' },{ name: 'About',href: '/about' },{ name: 'Careers',href: '/careers' },{ name: 'Blog',href: '/blog' },{ name: 'Contact',href: '/contact' },{ name: 'Docs',href: '/docs' },{ name: 'Privacy',href: '/privacy' },{ name: 'Terms',href: '/terms' },{ name: 'Cookies',href: '/cookies' },]; export default function SitemapPage() { return ( <main className="max-w-4xl mx-auto px-4 py-16"> <h1 className="text-3xl font-bold mb-6">Sitemap</h1> <ul className="space-y-3"> {routes.map((r) => ( <li key={r.href}> <Link href={r.href} className="text-blue-600 hover:underline">{r.name}</Link> </li> ))} </ul> </main> )}

>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
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

import React from 'react'; import Link from 'next/link'; const routes = [ { name: 'Home',href: '/' },{ name: 'Solutions',href: '/solutions' },{ name: 'Services',href: '/services' },{ name: 'Pricing',href: '/pricing' },{ name: 'About',href: '/about' },{ name: 'Careers',href: '/careers' },{ name: 'Blog',href: '/blog' },{ name: 'Contact',href: '/contact' },{ name: 'Docs',href: '/docs' },{ name: 'Privacy',href: '/privacy' },{ name: 'Terms',href: '/terms' },{ name: 'Cookies',href: '/cookies' },]; export default function SitemapPage() { return ( <main className="max-w-4xl mx-auto px-4 py-16"> <h1 className="text-3xl font-bold mb-6">Sitemap</h1> <ul className="space-y-3"> {routes.map((r) => ( <li key={r.href}> <Link href={r.href} className="text-blue-600 hover:underline">{r.name}</Link> </li> ))} </ul> </main> )}
import React from 'react'; import Link from 'next/link'; const routes = [ { name: 'Home',href: '/' },{ name: 'Solutions',href: '/solutions' },{ name: 'Services',href: '/services' },{ name: 'Pricing',href: '/pricing' },{ name: 'About',href: '/about' },{ name: 'Careers',href: '/careers' },{ name: 'Blog',href: '/blog' },{ name: 'Contact',href: '/contact' },{ name: 'Docs',href: '/docs' },{ name: 'Privacy',href: '/privacy' },{ name: 'Terms',href: '/terms' },{ name: 'Cookies',href: '/cookies' },]; export default function SitemapPage() { return ( <main className="max-w-4xl mx-auto px-4 py-16"> <h1 className="text-3xl font-bold mb-6">Sitemap</h1> <ul className="space-y-3"> {routes.map((r) => ( <li key={r.href}> <Link href={r.href} className="text-blue-600 hover:underline">{r.name}</Link> </li> ))} </ul> </main> )}
import React from 'react'; import Link from 'next/link'; const routes = [ { name: 'Home',href: '/' },{ name: 'Solutions',href: '/solutions' },{ name: 'Services',href: '/services' },{ name: 'Pricing',href: '/pricing' },{ name: 'About',href: '/about' },{ name: 'Careers',href: '/careers' },{ name: 'Blog',href: '/blog' },{ name: 'Contact',href: '/contact' },{ name: 'Docs',href: '/docs' },{ name: 'Privacy',href: '/privacy' },{ name: 'Terms',href: '/terms' },{ name: 'Cookies',href: '/cookies' },]; export default function SitemapPage() { return ( <main className="max-w-4xl mx-auto px-4 py-16"> <h1 className="text-3xl font-bold mb-6">Sitemap</h1> <ul className="space-y-3"> {routes.map((r) => ( <li key={r.href}> <Link href={r.href} className="text-blue-600 hover:underline">{r.name}</Link> </li> ))} </ul> </main> )}
import React from 'react'; import Link from 'next/link'; const routes = [ { name: 'Home',href: '/' },{ name: 'Solutions',href: '/solutions' },{ name: 'Services',href: '/services' },{ name: 'Pricing',href: '/pricing' },{ name: 'About',href: '/about' },{ name: 'Careers',href: '/careers' },{ name: 'Blog',href: '/blog' },{ name: 'Contact',href: '/contact' },{ name: 'Docs',href: '/docs' },{ name: 'Privacy',href: '/privacy' },{ name: 'Terms',href: '/terms' },{ name: 'Cookies',href: '/cookies' },]; export default function SitemapPage() { return ( <main className="max-w-4xl mx-auto px-4 py-16"> <h1 className="text-3xl font-bold mb-6">Sitemap</h1> <ul className="space-y-3"> {routes.map((r) => ( <li key={r.href}> <Link href={r.href} className="text-blue-600 hover:underline">{r.name}</Link> </li> ))} </ul> </main> )}
import React from 'react'; import Link from 'next/link'; const routes = [ { name: 'Home',href: '/' },{ name: 'Solutions',href: '/solutions' },{ name: 'Services',href: '/services' },{ name: 'Pricing',href: '/pricing' },{ name: 'About',href: '/about' },{ name: 'Careers',href: '/careers' },{ name: 'Blog',href: '/blog' },{ name: 'Contact',href: '/contact' },{ name: 'Docs',href: '/docs' },{ name: 'Privacy',href: '/privacy' },{ name: 'Terms',href: '/terms' },{ name: 'Cookies',href: '/cookies' },]; export default function SitemapPage() { return ( <main className="max-w-4xl mx-auto px-4 py-16"> <h1 className="text-3xl font-bold mb-6">Sitemap</h1> <ul className="space-y-3"> {routes && routes.map((r) => ( <li key={r && r.href}> <Link href={r && r.href} className="text-blue-600 hover:underline">{r && r.name}</Link> </li> ))} </ul> </main> )}
import React from 'react'; import Link from 'next/link'; const routes = [ { name: 'Home',href: '/' },{ name: 'Solutions',href: '/solutions' },{ name: 'Services',href: '/services' },{ name: 'Pricing',href: '/pricing' },{ name: 'About',href: '/about' },{ name: 'Careers',href: '/careers' },{ name: 'Blog',href: '/blog' },{ name: 'Contact',href: '/contact' },{ name: 'Docs',href: '/docs' },{ name: 'Privacy',href: '/privacy' },{ name: 'Terms',href: '/terms' },{ name: 'Cookies',href: '/cookies' },]; export default function SitemapPage() { return ( <main className="max-w-4xl mx-auto px-4 py-16"> <h1 className="text-3xl font-bold mb-6">Sitemap</h1> <ul className="space-y-3"> {routes && routes.map((r) => ( <li key={r && r.href}> <Link href={r && r.href} className="text-blue-600 hover:underline">{r && r.name}</Link> </li> ))} </ul> </main> )}
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-646c
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> 3f460500b361cb7cf5c95e8c53ca967467908705
import React from 'react';
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======
import React from 'react';
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
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
=======
    <main className="max-w-4xl mx-auto px-4 py-16">;"
</main>"
      <h1 className="text-3xl font-bold mb-6">Sitemap</h1>;""
      <ul className="space-y-3">;"
</ul>
          <li key={r && r.href}>;
</li>"
            <Link href={r && r.href} className="text-blue-600 "hover": underline">{r && r.name};"
          </li>;
      </ul>;
    </main>;"
import React from 'react'; import Link from 'next/link'; const routes = [ { name: 'Home',href: '/' },{ name: 'Solutions',href: '/solutions' },{ name: 'Services',href: '/services' },{ name: 'Pricing',href: '/pricing' },{ name: 'About',href: '/about' },{ name: 'Careers',href: '/careers' },{ name: 'Blog',href: '/blog' },{ name: 'Contact',href: '/contact' },{ name: 'Docs',href: '/docs' },{ name: 'Privacy',href: '/privacy' },{ name: 'Terms',href: '/terms' },{ name: 'Cookies',href: '/cookies' },]; export default function SitemapPage() { return ( <main className="max-w-4xl mx-auto px-4 py-16"> <h1 className="text-3xl font-bold mb-6">Sitemap</h1> <ul className="space-y-3"> {routes.map((r) => ( <li key={r.href}> <Link href={r.href} className="text-blue-600 hover:underline">{r.name} </li> ))} </ul> </main> )}""
import React from 'react'; import Link from 'next/link'; const routes = [ { name: 'Home',href: '/' },{ name: 'Solutions',href: '/solutions' },{ name: 'Services',href: '/services' },{ name: 'Pricing',href: '/pricing' },{ name: 'About',href: '/about' },{ name: 'Careers',href: '/careers' },{ name: 'Blog',href: '/blog' },{ name: 'Contact',href: '/contact' },{ name: 'Docs',href: '/docs' },{ name: 'Privacy',href: '/privacy' },{ name: 'Terms',href: '/terms' },{ name: 'Cookies',href: '/cookies' },]; export default function SitemapPage() { return ( <main className="max-w-4xl mx-auto px-4 py-16"> <h1 className="text-3xl font-bold mb-6">Sitemap</h1> <ul className="space-y-3"> {routes && routes.map((r) => ( <li key={r && r.href}> <Link href={r && r.href} className="text-blue-600 hover:underline">{r && r.name} </li> ))} </ul> </main> )}""
    <main className="max-w-4xl mx-auto px-4 py-16">"
      <h1 className="text-3xl font-bold mb-6">Sitemap</h1>""
      <ul className="space-y-3">"
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
          <li key={r.href}>
            <Link href={r.href} className="text-blue-600 "hover": underline">{r.name}"
          </li>
))}
      </ul>
    </main>
  );
}
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
import React from 'react'; import Link from 'next/link'; const routes = [ { name: 'Home',href: '/' },{ name: 'Solutions',href: '/solutions' },{ name: 'Services',href: '/services' },{ name: 'Pricing',href: '/pricing' },{ name: 'About',href: '/about' },{ name: 'Careers',href: '/careers' },{ name: 'Blog',href: '/blog' },{ name: 'Contact',href: '/contact' },{ name: 'Docs',href: '/docs' },{ name: 'Privacy',href: '/privacy' },{ name: 'Terms',href: '/terms' },{ name: 'Cookies',href: '/cookies' },]; export default function SitemapPage() { return ( <main className="max-w-4xl mx-auto px-4 py-16"> <h1 className="text-3xl font-bold mb-6">Sitemap</h1> <ul className="space-y-3"> {routes.map((r) => ( <li key={r.href}> <Link href={r.href} className="text-blue-600 hover:underline">{r.name}</Link> </li> ))} </ul> </main> )}
import React from 'react'; import Link from 'next/link'; const routes = [ { name: 'Home',href: '/' },{ name: 'Solutions',href: '/solutions' },{ name: 'Services',href: '/services' },{ name: 'Pricing',href: '/pricing' },{ name: 'About',href: '/about' },{ name: 'Careers',href: '/careers' },{ name: 'Blog',href: '/blog' },{ name: 'Contact',href: '/contact' },{ name: 'Docs',href: '/docs' },{ name: 'Privacy',href: '/privacy' },{ name: 'Terms',href: '/terms' },{ name: 'Cookies',href: '/cookies' },]; export default function SitemapPage() { return ( <main className="max-w-4xl mx-auto px-4 py-16"> <h1 className="text-3xl font-bold mb-6">Sitemap</h1> <ul className="space-y-3"> {routes.map((r) => ( <li key={r.href}> <Link href={r.href} className="text-blue-600 hover:underline">{r.name}</Link> </li> ))} </ul> </main> )}

>>>>>>> main
=======
>>>>>>> 0aea86df97524e9f0bb14202f48b4e4eee196229
>>>>>>> d0b4cabda824e2db66cecb53192832d7e749a326
>>>>>>> f239ba8ab20235073506b800efb123c18d8bf440
=======
>>>>>>> 10f43844f89f81084ca8fdce546c59c985174e68
>>>>>>> 3f460500b361cb7cf5c95e8c53ca967467908705
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
>>>>>>> main
>>>>>>> 8e2e4d4581f20cdfc8804c591c8c2f9544e58358
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-646c
=======
import React from 'react'; import Link from 'next/link'; const routes = [ { name: 'Home',href: '/' },{ name: 'Solutions',href: '/solutions' },{ name: 'Services',href: '/services' },{ name: 'Pricing',href: '/pricing' },{ name: 'About',href: '/about' },{ name: 'Careers',href: '/careers' },{ name: 'Blog',href: '/blog' },{ name: 'Contact',href: '/contact' },{ name: 'Docs',href: '/docs' },{ name: 'Privacy',href: '/privacy' },{ name: 'Terms',href: '/terms' },{ name: 'Cookies',href: '/cookies' },]; export default function SitemapPage() { return ( <main className="max-w-4xl mx-auto px-4 py-16"> <h1 className="text-3xl font-bold mb-6">Sitemap</h1> <ul className="space-y-3"> {routes && routes.map((r) => ( <li key={r && r.href}> <Link href={r && r.href} className="text-blue-600 hover:underline">{r && r.name}</Link> </li> ))} </ul> </main> )}
import React from 'react'; import Link from 'next/link'; const routes = [ { name: 'Home',href: '/' },{ name: 'Solutions',href: '/solutions' },{ name: 'Services',href: '/services' },{ name: 'Pricing',href: '/pricing' },{ name: 'About',href: '/about' },{ name: 'Careers',href: '/careers' },{ name: 'Blog',href: '/blog' },{ name: 'Contact',href: '/contact' },{ name: 'Docs',href: '/docs' },{ name: 'Privacy',href: '/privacy' },{ name: 'Terms',href: '/terms' },{ name: 'Cookies',href: '/cookies' },]; export default function SitemapPage() { return ( <main className="max-w-4xl mx-auto px-4 py-16"> <h1 className="text-3xl font-bold mb-6">Sitemap</h1> <ul className="space-y-3"> {routes && routes.map((r) => ( <li key={r && r.href}> <Link href={r && r.href} className="text-blue-600 hover:underline">{r && r.name}</Link> </li> ))} </ul> </main> )}
>>>>>>> c56320a4e91ebfd91859a6eed8c13818d8c9efd6
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
import React from 'react'; import Link from 'next/link'; const routes = [ { name: 'Home',href: '/' },{ name: 'Solutions',href: '/solutions' },{ name: 'Services',href: '/services' },{ name: 'Pricing',href: '/pricing' },{ name: 'About',href: '/about' },{ name: 'Careers',href: '/careers' },{ name: 'Blog',href: '/blog' },{ name: 'Contact',href: '/contact' },{ name: 'Docs',href: '/docs' },{ name: 'Privacy',href: '/privacy' },{ name: 'Terms',href: '/terms' },{ name: 'Cookies',href: '/cookies' },]; export default function SitemapPage() { return ( <main className="max-w-4xl mx-auto px-4 py-16"> <h1 className="text-3xl font-bold mb-6">Sitemap</h1> <ul className="space-y-3"> {routes && routes.map((r) => ( <li key={r && r.href}> <Link href={r && r.href} className="text-blue-600 hover:underline">{r && r.name}</Link> </li> ))} </ul> </main> )}
import React from 'react'; import Link from 'next/link'; const routes = [ { name: 'Home',href: '/' },{ name: 'Solutions',href: '/solutions' },{ name: 'Services',href: '/services' },{ name: 'Pricing',href: '/pricing' },{ name: 'About',href: '/about' },{ name: 'Careers',href: '/careers' },{ name: 'Blog',href: '/blog' },{ name: 'Contact',href: '/contact' },{ name: 'Docs',href: '/docs' },{ name: 'Privacy',href: '/privacy' },{ name: 'Terms',href: '/terms' },{ name: 'Cookies',href: '/cookies' },]; export default function SitemapPage() { return ( <main className="max-w-4xl mx-auto px-4 py-16"> <h1 className="text-3xl font-bold mb-6">Sitemap</h1> <ul className="space-y-3"> {routes && routes.map((r) => ( <li key={r && r.href}> <Link href={r && r.href} className="text-blue-600 hover:underline">{r && r.name}</Link> </li> ))} </ul> </main> )}
>>>>>>> c56320a4e91ebfd91859a6eed8c13818d8c9efd6
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======
import React from 'react'; import Link from 'next/link'; const routes = [ { name: 'Home',href: '/' },{ name: 'Solutions',href: '/solutions' },{ name: 'Services',href: '/services' },{ name: 'Pricing',href: '/pricing' },{ name: 'About',href: '/about' },{ name: 'Careers',href: '/careers' },{ name: 'Blog',href: '/blog' },{ name: 'Contact',href: '/contact' },{ name: 'Docs',href: '/docs' },{ name: 'Privacy',href: '/privacy' },{ name: 'Terms',href: '/terms' },{ name: 'Cookies',href: '/cookies' },]; export default function SitemapPage() { return ( <main className="max-w-4xl mx-auto px-4 py-16"> <h1 className="text-3xl font-bold mb-6">Sitemap</h1> <ul className="space-y-3"> {routes.map((r) => ( <li key={r.href}> <Link href={r.href} className="text-blue-600 hover:underline">{r.name}</Link> </li> ))} </ul> </main> )}
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
=======
pr-12325
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
