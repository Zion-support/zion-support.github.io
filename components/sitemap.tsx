<<<<<<< HEAD


  ];
  return (
    <div className="min-h-screen pt-24 pb-20 px-4 sm:px-6 lg:px-8">;
      <Head>;
        <title>Sitemap | Zion Tech Group</title>;
        <meta
          name="description"
          content="Quick links to the main routes and pages."
        />;
        <link rel="canonical" href="https://ziontechgroup && ziontechgroup.com/sitemap" />;
      </Head>;
      <div className="max-w-4xl mx-auto space-y-6">;
        <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">;
          Sitemap;
        </h1>;
        <ul className="grid sm:grid-cols-2 gap-3">;
          {links && links.map((l) => (;
            <li
              key={l && l.href}
              className="p-4 rounded-xl bg-black/40 border border-cyan-500/20">;
              <a className="text-cyan-300" href={l && l.href}>;
                {l && l.name}
              </a>;
            </li>;
          ))}
        </ul>;
      </div>;
    </div>;
  );


import React from "react";
import Head from "next/head";


=======
import React from 'react';
import Head from 'next/head';
import React from "react";
import Head from "next/head";

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
export default function SitemapPage() {


  const links = [
    { name: "Home", href: "/" }
    { name: "Services", href: "/services" }
    {

<<<<<<< HEAD
<<<<<<< HEAD
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
import React from "react";
import Head from "next/head";
export default function SitemapPage() {;
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
  const links = [;
    { name: "Home", href: "/" },;
    { name: "Services", href: "/services" },;
    {;
      name: "All Services Showcase",;
      href: "/comprehensive-services-showcase-2025",;
    },;
    { name: "Pricing", href: "/pricing" },;
    { name: "Market Pricing", href: "/market-pricing" },;
    { name: "Services Advertising", href: "/services-advertising" },;
    { name: "Resources", href: "/resources" },;
    { name: "Support", href: "/support" },;
    { name: "Contact", href: "/contact" },;
<<<<<<< HEAD
=======

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
  ];
  return (
    <div className="min-h-screen pt-24 pb-20 px-4 sm:px-6 lg:px-8">;
      <Head>;
        <title>Sitemap | Zion Tech Group</title>;
        <meta
          name="description"
          content="Quick links to the main routes and pages."
        />;
        <link rel="canonical" href="https://ziontechgroup && ziontechgroup.com/sitemap" />;
      </Head>;
      <div className="max-w-4xl mx-auto space-y-6">;
        <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">;
          Sitemap;
        </h1>;
        <ul className="grid sm:grid-cols-2 gap-3">;
          {links && links.map((l) => (;
            <li
              key={l && l.href}
              className="p-4 rounded-xl bg-black/40 border border-cyan-500/20">;
              <a className="text-cyan-300" href={l && l.href}>;
                {l && l.name}
              </a>;
            </li>;
          ))}
        </ul>;
      </div>;
    </div>;
  );
<<<<<<< HEAD
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
  const links = [;
    { name: "Home", href: "/" },;
    { name: "Services", href: "/services" },;
    {;
      name: "All Services Showcase",;
      href: "/comprehensive-services-showcase-2025",;
    },;
    { name: "Pricing", href: "/pricing" },;
    { name: "Market Pricing", href: "/market-pricing" },;
    { name: "Services Advertising", href: "/services-advertising" },;
    { name: "Resources", href: "/resources" },;
    { name: "Support", href: "/support" },;
    { name: "Contact", href: "/contact" },;
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
  ];
  return (
    <div className="min-h-screen pt-24 pb-20 px-4 sm:px-6 lg:px-8">;
      <Head>;
        <title>Sitemap | Zion Tech Group</title>;
        <meta
          name="description"
          content="Quick links to the main routes and pages."
        />;
        <link rel="canonical" href="https://ziontechgroup && ziontechgroup.com/sitemap" />;
      </Head>;
      <div className="max-w-4xl mx-auto space-y-6">;
        <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">;
          Sitemap;
        </h1>;
        <ul className="grid sm:grid-cols-2 gap-3">;
          {links && links.map((l) => (;
            <li
              key={l && l.href}
              className="p-4 rounded-xl bg-black/40 border border-cyan-500/20">;
              <a className="text-cyan-300" href={l && l.href}>;
                {l && l.name}
              </a>;
            </li>;
          ))}
        </ul>;
      </div>;
    </div>;
  );
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
}
	const links = [
		{ name: 'Home', href: '/' },
		{ name: 'Services', href: '/services' },
		{ name: 'All Services Showcase', href: '/comprehensive-services-showcase-2025' },
		{ name: 'Pricing', href: '/pricing' },
		{ name: 'Market Pricing', href: '/market-pricing' },
		{ name: 'Services Advertising', href: '/services-advertising' },
		{ name: 'Resources', href: '/resources' },
		{ name: 'Support', href: '/support' },
		{ name: 'Contact', href: '/contact' }
];
	return (
		<div className="min-h-screen pt-24 pb-20 px-4 sm:px-6 lg:px-8">
			<Head>
				<title>Sitemap | Zion Tech Group</title>
				<meta name="description" content="Quick links to the main routes and pages." />
				<link rel="canonical" href="https://ziontechgroup.com/sitemap" />
			</Head>
			<div className="max-w-4xl mx-auto space-y-6">
				<h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">Sitemap</h1>
				<ul className="grid sm:grid-cols-2 gap-3">
					{links.map(l => (
						<li key={l.href} className="p-4 rounded-xl bg-black/40 border border-cyan-500/20"><a className="text-cyan-300" href={l.href}>{l.name}</a></li>
	return (
		<div className=&quot;min-h-screen pt-24 pb-20 px-4 sm:px-6 lg:px-8&quot;>
			<Head>
				<title>Sitemap | Zion Tech Group</title>
				<meta name=&quot;description&quot; content=&quot;Quick links to the main routes and pages.&quot; />
				<link rel=&quot;canonical&quot; href=&quot;https://ziontechgroup.com/sitemap&quot; />
			</Head>
			<div className=&quot;max-w-4xl mx-auto space-y-6&quot;>
				<h1 className=&quot;text-4xl md:text-6xl font-bold bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent&quot;>Sitemap</h1>
				<ul className=&quot;grid sm:grid-cols-2 gap-3&quot;>
					{links.map(l => (
						<li key={l.href} className=&quot;p-4 rounded-xl bg-black/40 border border-cyan-500/20&quot;><a className=&quot;text-cyan-300&quot; href={l.href}>{l.name}</a></li>

					))}
				</ul>
			</div>
		</div>
<<<<<<< HEAD
<<<<<<< HEAD
);
=======
	);

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
	);

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
}
import React from './react';
import Head from './next / head';
export default /**
 * SitemapPage - Function description
 */
function SitemapPage() {
  const links = [;
    { name: "Home", href: "/" },
    { name: "Services", href: "/services" },
    {
<<<<<<< HEAD

=======
=======

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
      name: "All Services Showcase",
      href: "/comprehensive - services - showcase - 2025",
    },
    { name: "Pricing", href: "/pricing" },
    { name: "Market Pricing", href: "/market - pricing" },
    { name: "Services Advertising", href: "/services - advertising" },
    { name: "Resources", href: "/resources" },
    { name: "Support", href: "/support" },
<<<<<<< HEAD
<<<<<<< HEAD
    { name: "Contact", href: "/contact" },
import React from 'react';
import Head from 'next/head';
import React from "react";
import Head from "next/head";

export default function SitemapPage() {

  const links = [
    { name: "Home", href: "/" }
    { name: "Services", href: "/services" }
    {
      name: "All Services Showcase"
      href: "/comprehensive-services-showcase-2025"
    }
    { name: "Pricing", href: "/pricing" }
    { name: "Market Pricing", href: "/market-pricing" }
    { name: "Services Advertising", href: "/services-advertising" }
    { name: "Resources", href: "/resources" }
    { name: "Support", href: "/support" }
    { name: "Contact", href: "/contact" }
      name: "All Services Showcase",
      href: "/comprehensive-services-showcase-2025",
    },
    { name: "Pricing", href: "/pricing" },
    { name: "Market Pricing", href: "/market-pricing" },
    { name: "Services Advertising", href: "/services-advertising" },
    { name: "Resources", href: "/resources" },
    { name: "Support", href: "/support" },
    { name: "Contact", href: "/contact" },;
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a

    { name: "Contact", href: "/contact" },;


<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
  ];
  return (
    <div className="min - h-screen pt - 24 pb - 20 px - 4 sm:px - 6 lg:px - 8">;
      <Head>;
        <title > Sitemap | Zion Tech Group</title>;
        <meta;
          name="description";
          content="Quick links to the main routes and pages.";
        />;
        <link rel="canonical" href="https://ziontechgroup.com / sitemap" />;
      </Head>;
      <div className="max - w-4xl mx - auto space - y-6">;
        <h1 className="text - 4xl md:text - 6xl font - bold bg - gradient - to - r from - cyan - 400 via - purple - 400 to - pink - 400 bg - clip - text text - transparent">;
          Sitemap;
        </h1>;
        <ul className="grid sm:grid - cols - 2 gap - 3">;
          {links.map ((l) => (
            <li;
              key={l.href}
              className="p - 4 rounded - xl bg - black / 40 border border - cyan - 500 / 20";
            >;
              <a className="text - cyan - 300" href={l.href}>;
                {l.name}
              </a>;
            </li>))}
        </ul>;
      </div>;
    </div>);
  const links = [;
    { name: "Home", href: "/" },
    { name: "Services", href: "/services" },
    {
      name: "All Services Showcase",
      href: "/comprehensive - services - showcase - 2025",
    },
    { name: "Pricing", href: "/pricing" },
    { name: "Market Pricing", href: "/market - pricing" },
    { name: "Services Advertising", href: "/services - advertising" },
    { name: "Resources", href: "/resources" },
    { name: "Support", href: "/support" },
    { name: "Contact", href: "/contact" },
  ];
  return (
    <div className="min - h-screen pt - 24 pb - 20 px - 4 sm:px - 6 lg:px - 8">;
      <Head>;
        <title > Sitemap | Zion Tech Group</title>;
        <meta;
          name="description";
          content="Quick links to the main routes and pages.";
        />;
        <link rel="canonical" href="https://ziontechgroup.com / sitemap" />;
      </Head>;
      <div className="max - w-4xl mx - auto space - y-6">;
        <h1 className="text - 4xl md:text - 6xl font - bold bg - gradient - to - r from - cyan - 400 via - purple - 400 to - pink - 400 bg - clip - text text - transparent">;
          Sitemap;
        </h1>;
        <ul className="grid sm:grid - cols - 2 gap - 3">;
          {links.map ((l) => (
            <li;
              key={l.href}
              className="p - 4 rounded - xl bg - black / 40 border border - cyan - 500 / 20";
            >;
              <a className="text - cyan - 300" href={l.href}>;
                {l.name}
              </a>;
            </li>))}
        </ul>;
      </div>;
    </div>);
}

<<<<<<< HEAD
<<<<<<< HEAD
=======



>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======



>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
