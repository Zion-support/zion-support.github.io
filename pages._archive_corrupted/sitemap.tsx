>>>>>>> main
>>>>>>> 10f43844f89f81084ca8fdce546c59c985174e68
>>>>>>> 3f460500b361cb7cf5c95e8c53ca967467908705
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
>>>>>>> 10f43844f89f81084ca8fdce546c59c985174e68
>>>>>>> bda99e5abd16efb90ee02549943231847392138b
import React from 'react'; import Link from 'next/link'; const routes = [ { name: 'Home',href: '/' },{ name: 'Solutions',href: '/solutions' },{ name: 'Services',href: '/services' },{ name: 'Pricing',href: '/pricing' },{ name: 'About',href: '/about' },{ name: 'Careers',href: '/careers' },{ name: 'Blog',href: '/blog' },{ name: 'Contact',href: '/contact' },{ name: 'Docs',href: '/docs' },{ name: 'Privacy',href: '/privacy' },{ name: 'Terms',href: '/terms' },{ name: 'Cookies',href: '/cookies' },]; export default function SitemapPage() { return ( <main className="max-w-4xl mx-auto px-4 py-16"> <h1 className="text-3xl font-bold mb-6">Sitemap</h1> <ul className="space-y-3"> {routes.map((r) => ( <li key={r.href}> <Link href={r.href} className="text-blue-600 hover:underline">{r.name}</Link> </li> ))} </ul> </main> )}
>>>>>>> main
>>>>>>> main
>>>>>>> 0aea86df97524e9f0bb14202f48b4e4eee196229
>>>>>>> d0b4cabda824e2db66cecb53192832d7e749a326
>>>>>>> f239ba8ab20235073506b800efb123c18d8bf440
>>>>>>> 10f43844f89f81084ca8fdce546c59c985174e68
>>>>>>> 3f460500b361cb7cf5c95e8c53ca967467908705
