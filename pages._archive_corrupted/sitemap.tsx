<<<<<<< HEAD

=======
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-8b20
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
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a:temp_exclude/pages._archive_corrupted/sitemap.tsx
=======
<<<<<<< HEAD


>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
=======
>>>>>>> cursor/fix-syntax-push-and-merge-to-main-40de
=======
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-c7b5
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-8b20
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



=======
<<<<<<< HEAD
}
<<<<<<< HEAD
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-8b20
import React from 'react'; import Link from 'next/link'; const routes = [ { name: 'Home',href: '/' },{ name: 'Solutions',href: '/solutions' },{ name: 'Services',href: '/services' },{ name: 'Pricing',href: '/pricing' },{ name: 'About',href: '/about' },{ name: 'Careers',href: '/careers' },{ name: 'Blog',href: '/blog' },{ name: 'Contact',href: '/contact' },{ name: 'Docs',href: '/docs' },{ name: 'Privacy',href: '/privacy' },{ name: 'Terms',href: '/terms' },{ name: 'Cookies',href: '/cookies' },]; export default function SitemapPage() { return ( <main className="max-w-4xl mx-auto px-4 py-16"> <h1 className="text-3xl font-bold mb-6">Sitemap</h1> <ul className="space-y-3"> {routes.map((r) => ( <li key={r.href}> <Link href={r.href} className="text-blue-600 hover:underline">{r.name}</Link> </li> ))} </ul> </main> )}


import React from 'react'; import Link from 'next/link'; const routes = [ { name: 'Home',href: '/' },{ name: 'Solutions',href: '/solutions' },{ name: 'Services',href: '/services' },{ name: 'Pricing',href: '/pricing' },{ name: 'About',href: '/about' },{ name: 'Careers',href: '/careers' },{ name: 'Blog',href: '/blog' },{ name: 'Contact',href: '/contact' },{ name: 'Docs',href: '/docs' },{ name: 'Privacy',href: '/privacy' },{ name: 'Terms',href: '/terms' },{ name: 'Cookies',href: '/cookies' },]; export default function SitemapPage() { return ( <main className="max-w-4xl mx-auto px-4 py-16"> <h1 className="text-3xl font-bold mb-6">Sitemap</h1> <ul className="space-y-3"> {routes.map((r) => ( <li key={r.href}> <Link href={r.href} className="text-blue-600 hover:underline">{r.name}</Link> </li> ))} </ul> </main> )}
import React from 'react'; import Link from 'next/link'; const routes = [ { name: 'Home',href: '/' },{ name: 'Solutions',href: '/solutions' },{ name: 'Services',href: '/services' },{ name: 'Pricing',href: '/pricing' },{ name: 'About',href: '/about' },{ name: 'Careers',href: '/careers' },{ name: 'Blog',href: '/blog' },{ name: 'Contact',href: '/contact' },{ name: 'Docs',href: '/docs' },{ name: 'Privacy',href: '/privacy' },{ name: 'Terms',href: '/terms' },{ name: 'Cookies',href: '/cookies' },]; export default function SitemapPage() { return ( <main className="max-w-4xl mx-auto px-4 py-16"> <h1 className="text-3xl font-bold mb-6">Sitemap</h1> <ul className="space-y-3"> {routes.map((r) => ( <li key={r.href}> <Link href={r.href} className="text-blue-600 hover:underline">{r.name}</Link> </li> ))} </ul> </main> )}
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-c7b5
<<<<<<< HEAD
=======
import React from 'react'; import Link from 'next/link'; const routes = [ { name: 'Home',href: '/' },{ name: 'Solutions',href: '/solutions' },{ name: 'Services',href: '/services' },{ name: 'Pricing',href: '/pricing' },{ name: 'About',href: '/about' },{ name: 'Careers',href: '/careers' },{ name: 'Blog',href: '/blog' },{ name: 'Contact',href: '/contact' },{ name: 'Docs',href: '/docs' },{ name: 'Privacy',href: '/privacy' },{ name: 'Terms',href: '/terms' },{ name: 'Cookies',href: '/cookies' },]; export default function SitemapPage() { return ( <main className="max-w-4xl mx-auto px-4 py-16"> <h1 className="text-3xl font-bold mb-6">Sitemap</h1> <ul className="space-y-3"> {routes && routes.map((r) => ( <li key={r && r.href}> <Link href={r && r.href} className="text-blue-600 hover:underline">{r && r.name}</Link> </li> ))} </ul> </main> )}
import React from 'react'; import Link from 'next/link'; const routes = [ { name: 'Home',href: '/' },{ name: 'Solutions',href: '/solutions' },{ name: 'Services',href: '/services' },{ name: 'Pricing',href: '/pricing' },{ name: 'About',href: '/about' },{ name: 'Careers',href: '/careers' },{ name: 'Blog',href: '/blog' },{ name: 'Contact',href: '/contact' },{ name: 'Docs',href: '/docs' },{ name: 'Privacy',href: '/privacy' },{ name: 'Terms',href: '/terms' },{ name: 'Cookies',href: '/cookies' },]; export default function SitemapPage() { return ( <main className="max-w-4xl mx-auto px-4 py-16"> <h1 className="text-3xl font-bold mb-6">Sitemap</h1> <ul className="space-y-3"> {routes && routes.map((r) => ( <li key={r && r.href}> <Link href={r && r.href} className="text-blue-600 hover:underline">{r && r.name}</Link> </li> ))} </ul> </main> )}
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a:temp_exclude/pages._archive_corrupted/sitemap.tsx
=======
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-8b20
