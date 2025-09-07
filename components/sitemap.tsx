<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-8452
=======
>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-2a0c


;
  ];
  return (<div className="min-h-screen pt-24 pb-20 px-4 sm:px-6 lg:px-8">;
      <Head>;
        <title>Sitemap | Zion Tech Group</title>;
        <meta;
          name="description";
          content="Quick links to the main routes and pages.";
        />;
        <link rel="canonical" href="https://ziontechgroup && ziontechgroup.com/sitemap" />;
      </Head>;
      <div className="max-w-4xl mx-auto space-y-6">;
        <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">;
          Sitemap;
        </h1>;
        <ul className="grid sm:grid-cols-2 gap-3">;
          {links && links.map((l) => (<li;
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
  )import React from 'react';
import Head from 'next/head';
export default function SitemapPage() {const links = [;
    { name: "Home", href: "/" }
    { name: "Services", href: "/services" }
    {name: "All Services Showcase";
      href: "/comprehensive-services-showcase-2025";
    }
    { name: "Pricing", href: "/pricing" }
    { name: "Market Pricing", href: "/market-pricing" }
    { name: "Services Advertising", href: "/services-advertising" }
    { name: "Resources", href: "/resources" }
    { name: "Support", href: "/support" }
    { name: "Contact", href: "/contact" }class ErrorBoundary extends React.Component {constructor(props) {super(props)this.state = { hasError: false }}
  static getDerivedStateFromError(error) {return { hasError: true }}
  componentDidCatch(error, errorInfo) {console.error('Error caught by boundary:', error, errorInfo)}
  render() {if (this.state.hasError) {return <div>Something went wrong.</div>;
    }
    return this.props.children;
  }
}
export default function SitemapPage() {const links = [;
    { name: "Home", href: "/" },{ name: "Services", href: "/services" },{name: "All Services Showcase",href: "/comprehensive-services-showcase-2025"},{ name: "Pricing", href: "/pricing" },{ name: "Market Pricing", href: "/market-pricing" },{ name: "Services Advertising", href: "/services-advertising" },{ name: "Resources", href: "/resources" },{ name: "Support", href: "/support" },{ name: "Contact", href: "/contact" }];
  return (<div className="min-h-screen pt-24 pb-20 px-4 sm:px-6 lg:px-8">;
  );


import React from "react";
import Head from "next/head";


export default function SitemapPage() {


  const links = [
    { name: "Home", href: "/" }
    { name: "Services", href: "/services" }
    {

<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
=======

>>>>>>> 54ad2b1038c082a23519987b245e26e888b5a5dc
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
<<<<<<< HEAD
>>>>>>> a252feedad80e14c11ed30f5695974c343534e8d
=======
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-8452
=======

>>>>>>> 54ad2b1038c082a23519987b245e26e888b5a5dc
=======
>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-2a0c
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

  ];
  return (
    <div className="min-h-screen pt-24 pb-20 px-4 sm:px-6 lg:px-8">;
      <Head>;
        <title>Sitemap | Zion Tech Group</title>;
        <meta;
          name="description";
          content="Quick links to the main routes and pages.";
        />;
        <link rel="canonical" href="https://ziontechgroup && ziontechgroup.com/sitemap" />;
      </Head>;
      <div className="max-w-4xl mx-auto space-y-6">;
        <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">;
          Sitemap;
        </h1>;
        <ul className="grid sm:grid-cols-2 gap-3">;
          {links && links.map((l) => (<li;
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
  )}const links = [;
    { name: "Home", href: "/" },{ name: "Services", href: "/services" },{name: "All Services Showcase",href: "/comprehensive-services-showcase-2025"},{ name: "Pricing", href: "/pricing" },{ name: "Market Pricing", href: "/market-pricing" },{ name: "Services Advertising", href: "/services-advertising" },{ name: "Resources", href: "/resources" },{ name: "Support", href: "/support" },{ name: "Contact", href: "/contact" }];
  return (<div className="min-h-screen pt-24 pb-20 px-4 sm:px-6 lg:px-8">;
      <Head>;
        <title>Sitemap | Zion Tech Group</title>;
        <meta;
          name="description";
          content="Quick links to the main routes and pages.";
        />;
        <link rel="canonical" href="https://ziontechgroup && ziontechgroup.com/sitemap" />;
      </Head>;
      <div className="max-w-4xl mx-auto space-y-6">;
        <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">;
          Sitemap;
        </h1>;
        <ul className="grid sm:grid-cols-2 gap-3">;
          {links && links.map((l) => (<li;
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
  )}const links = [;
		{ name: 'Home', href: '/' },{ name: 'Services', href: '/services' },{ name: 'All Services Showcase', href: '/comprehensive-services-showcase-2025' },{ name: 'Pricing', href: '/pricing' },{ name: 'Market Pricing', href: '/market-pricing' },{ name: 'Services Advertising', href: '/services-advertising' },{ name: 'Resources', href: '/resources' },{ name: 'Support', href: '/support' },{ name: 'Contact', href: '/contact' }
	];
export default function SitemapPage() {const links  = null;return (<div className="min-h-screen pt-24 pb-20 px-4 sm:px-6 lg:px-8">;
			<Head>;
				<title>Sitemap | Zion Tech Group</title>;
				<meta name="description" content="Quick links to the main routes and pages." />;
				<link rel="canonical" href="https://ziontechgroup.com/sitemap" />;
			</Head>;
			<div className="max-w-4xl mx-auto space-y-6">;
				<h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">Sitemap</h1>;
				<ul className="grid sm:grid-cols-2 gap-3">;
					{links.map(l => (<li key={l.href} className="p-4 rounded-xl bg-black/40 border border-cyan-500/20"><a className="text-cyan-300" href={l.href}>{l.name}</a></li>;
					))}
				</ul>;
			</div>;
		</div>;
}
	))}import React from './react';
import Head from './next / head';
export default /**;
 * SitemapPage - Function description;
 */;
function SitemapPage() {const links = [;
    { name: "Home", href: "/" },{ name: "Services", href: "/services" },{name: "All Services Showcase",href: "/comprehensive - services - showcase - 2025";
      href: "/comprehensive - services - showcase - 2025";
    },{ name: "Pricing", href: "/pricing" },{ name: "Market Pricing", href: "/market - pricing" },{ name: "Services Advertising", href: "/services - advertising" },{ name: "Resources", href: "/resources" },{ name: "Support", href: "/support" },{ name: "Contact", href: "/contact" },{ name: "Contact", href: "/contact" },export default function SitemapPage() {const links = [;
  );
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======

>>>>>>> 54ad2b1038c082a23519987b245e26e888b5a5dc
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
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-8452
=======

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
>>>>>>> 54ad2b1038c082a23519987b245e26e888b5a5dc
=======
>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-2a0c

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
<<<<<<< HEAD
import React from 'react';
import Head from 'next/head';
export default function SitemapPage() {
	const links = null;
origin/cursor/automate-test-improve-and-merge-code-2533
=======
>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-2a0c
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
					))}
				</ul>
			</div>
		</div>
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-8452
=======
>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-2a0c
	);

}
=======
);

}
origin/cursor/integrate-build-improve-and-re-verify-2156
>>>>>>> 54ad2b1038c082a23519987b245e26e888b5a5dc
import React from './react';
export default /**
 * SitemapPage - Function description
 */
function SitemapPage() {
  const links = [;
    { name: "Home", href: "/" },
    { name: "Services", href: "/services" },
    {

      name: "All Services Showcase",
      href: "/comprehensive - services - showcase - 2025"
    },
    { name: "Pricing", href: "/pricing" },
    { name: "Market Pricing", href: "/market - pricing" },
    { name: "Services Advertising", href: "/services - advertising" },
    { name: "Resources", href: "/resources" },
    { name: "Support", href: "/support" },
<<<<<<< HEAD

    { name: "Contact", href: "/contact" },;
=======
    { name: "Contact", href: "/contact" },
import React from 'react';
import Head from 'next/head';
import React from "react";
import Head from "next/head";

export default function SitemapPage() {
>>>>>>> 54ad2b1038c082a23519987b245e26e888b5a5dc


  const links = [
    { name: "Home", href: "/" }
    { name: "Services", href: "/services" }
    {name: "All Services Showcase";
      href: "/comprehensive-services-showcase-2025";
    }
    { name: "Pricing", href: "/pricing" }
    { name: "Market Pricing", href: "/market-pricing" }
    { name: "Services Advertising", href: "/services-advertising" }
    { name: "Resources", href: "/resources" }
    { name: "Support", href: "/support" }
    { name: "Contact", href: "/contact" }
  const links = [;
    { name: "Home", href: "/" },{ name: "Services", href: "/services" },{name: "All Services Showcase",href: "/comprehensive-services-showcase-2025"},{ name: "Pricing", href: "/pricing" },{ name: "Market Pricing", href: "/market-pricing" },{ name: "Services Advertising", href: "/services-advertising" },{ name: "Resources", href: "/resources" },{ name: "Support", href: "/support" },{ name: "Contact", href: "/contact" }];
  return (<div className="min-h-screen pt-24 pb-20 px-4 sm:px-6 lg:px-8">;
      <Head>;
        <title>Sitemap | Zion Tech Group</title>;
        <meta;
          name="description";
          content="Quick links to the main routes and pages.";
        />;
        <link rel="canonical" href="https://ziontechgroup && ziontechgroup.com/sitemap" />;
      </Head>;
      <div className="max-w-4xl mx-auto space-y-6">;
        <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">;
          Sitemap;
        </h1>;
        <ul className="grid sm:grid-cols-2 gap-3">;
          {links && links.map((l) => (<li;
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
  )const links = [;
    { name: "Home", href: "/" },{ name: "Services", href: "/services" },{name: "All Services Showcase",href: "/comprehensive-services-showcase-2025"},{ name: "Pricing", href: "/pricing" },{ name: "Market Pricing", href: "/market-pricing" },{ name: "Services Advertising", href: "/services-advertising" },{ name: "Resources", href: "/resources" },{ name: "Support", href: "/support" },{ name: "Contact", href: "/contact" }];
  return (<div className="min-h-screen pt-24 pb-20 px-4 sm:px-6 lg:px-8">;
      <Head>;
        <title>Sitemap | Zion Tech Group</title>;
        <meta;
          name="description";
          content="Quick links to the main routes and pages.";
        />;
        <link rel="canonical" href="https://ziontechgroup && ziontechgroup.com/sitemap" />;
      </Head>;
      <div className="max-w-4xl mx-auto space-y-6">;
        <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">;
          Sitemap;
        </h1>;
        <ul className="grid sm:grid-cols-2 gap-3">;
          {links && links.map((l) => (<li;
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
  )}<div className="min-h-screen pt-24 pb-20 px-4 sm:px-6 lg:px-8">;
      <Head>;
        <title>Sitemap | Zion Tech Group</title>;
        <meta;
          name="description";
          content="Quick links to the main routes and pages.";
        />;
        <link rel="canonical" href="https://ziontechgroup.com/sitemap" />;
      </Head>;
      <div className="max-w-4xl mx-auto space-y-6">;
        <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">;
          Sitemap;
        </h1>;
        <ul className="grid sm:grid-cols-2 gap-3">;
          {links.map((l) => (<li;
              key={l.href}
              className="p-4 rounded-xl bg-black/40 border border-cyan-500/20";
            >;
              <a className="text-cyan-300" href={l.href}>;
	)}{l.name}
              </a>;
            </li>;
          ))}
        </ul>;
      </div>;
    </div>;
  )];
  return (<div className="min-h-screen pt-24 pb-20 px-4 sm:px-6 lg:px-8">;
      <Head>;
        <title>Sitemap | Zion Tech Group</title>;
        <meta;
          name="description";
          content="Quick links to the main routes and pages.";
        />;
        <link rel="canonical" href="https://ziontechgroup.com/sitemap" />;
      </Head>;
      <div className="max-w-4xl mx-auto space-y-6">;
        <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">;
          Sitemap;
        </h1>;
        <ul className="grid sm:grid-cols-2 gap-3">;
          {links.map((l) => (<li;
              key={l.href}
              className="p-4 rounded-xl bg-black/40 border border-cyan-500/20";
            >;
              <a className="text-cyan-300" href={l.href}>;
                {l.name}
              </a>;
            </li>;
          ))}
        </ul>;
      </div>;
    </div>;
  )}
export default /**;
 * SitemapPage - Function description;
 */;
function SitemapPage() {const links = [;
    { name: "Home", href: "/" },{ name: "Services", href: "/services" },{name: "All Services Showcase",href: "/comprehensive - services - showcase - 2025";
      href: "/comprehensive - services - showcase - 2025";
    },{ name: "Pricing", href: "/pricing" },{ name: "Market Pricing", href: "/market - pricing" },{ name: "Services Advertising", href: "/services - advertising" },{ name: "Resources", href: "/resources" },{ name: "Support", href: "/support" }
    { name: "Support", href: "/support" },{ name: "Contact", href: "/contact" }];
  return (<div className="min - h-screen pt - 24 pb - 20 px - 4 sm:px - 6 lg:px - 8">;
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
  ];
  return (
    <div className="min-h-screen pt-24 pb-20 px-4 sm:px-6 lg:px-8">
      <Head>
        <title>Sitemap | Zion Tech Group</title>
        <meta
          name="description"
          content="Quick links to the main routes and pages."
        />
        <link rel="canonical" href="https://ziontechgroup.com/sitemap" />
      </Head>
      <div className="max-w-4xl mx-auto space-y-6">
        <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
          Sitemap
        </h1>
        <ul className="grid sm:grid-cols-2 gap-3">
          {links.map((l) => (
            <li
              key={l.href}
              className="p-4 rounded-xl bg-black/40 border border-cyan-500/20"
            >
              <a className="text-cyan-300" href={l.href}>
<<<<<<< HEAD
	)
}
origin/cursor/automate-test-improve-and-merge-code-2533
=======
>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-2a0c
                {l.name}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> a252feedad80e14c11ed30f5695974c343534e8d
=======
>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-2a0c
  ];
  return (
    <div className="min-h-screen pt-24 pb-20 px-4 sm:px-6 lg:px-8">
      <Head>
        <title>Sitemap | Zion Tech Group</title>
        <meta
          name="description"
          content="Quick links to the main routes and pages."
        />
        <link rel="canonical" href="https://ziontechgroup.com/sitemap" />
      </Head>
      <div className="max-w-4xl mx-auto space-y-6">
        <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
          Sitemap
        </h1>
        <ul className="grid sm:grid-cols-2 gap-3">
          {links.map((l) => (
            <li
              key={l.href}
              className="p-4 rounded-xl bg-black/40 border border-cyan-500/20"
            >
              <a className="text-cyan-300" href={l.href}>
                {l.name}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
export default /**
 * SitemapPage - Function description
 */
function SitemapPage() {
  const links = [;
    { name: "Home", href: "/" },
    { name: "Services", href: "/services" },
    {
      name: "All Services Showcase",
      href: "/comprehensive - services - showcase - 2025"
    },
    { name: "Pricing", href: "/pricing" },
    { name: "Market Pricing", href: "/market - pricing" },
    { name: "Services Advertising", href: "/services - advertising" },
    { name: "Resources", href: "/resources" },
    { name: "Support", href: "/support" },
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
<<<<<<< HEAD
    { name: "Contact", href: "/contact" },;
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> a252feedad80e14c11ed30f5695974c343534e8d
=======
    { name: "Contact", href: "/contact" },;
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-8452
=======


>>>>>>> 54ad2b1038c082a23519987b245e26e888b5a5dc
=======
    { name: "Contact", href: "/contact" },;
>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-2a0c
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
          {links.map ((l) => (<li;
              key={l.href}
              className="p - 4 rounded - xl bg - black / 40 border border - cyan - 500 / 20";
            >;
              <a className="text - cyan - 300" href={l.href}>;
                {l.name}
              </a>;
            </li>))}
        </ul>;
      </div>;
    </div>)const links = [;
    { name: "Home", href: "/" },{ name: "Services", href: "/services" },{name: "All Services Showcase",href: "/comprehensive - services - showcase - 2025";
      href: "/comprehensive - services - showcase - 2025";
    },{ name: "Pricing", href: "/pricing" },{ name: "Market Pricing", href: "/market - pricing" },{ name: "Services Advertising", href: "/services - advertising" },{ name: "Resources", href: "/resources" },{ name: "Support", href: "/support" },{ name: "Contact", href: "/contact" }
    { name: "Contact", href: "/contact" }
  ];
  return (<div className="min - h-screen pt - 24 pb - 20 px - 4 sm:px - 6 lg:px - 8">;
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
          {links.map ((l) => (<li;
              key={l.href}
              className="p - 4 rounded - xl bg - black / 40 border border - cyan - 500 / 20";
            >;
              <a className="text - cyan - 300" href={l.href}>;
                {l.name}
              </a>;
            </li>))}
        </ul>;
      </div>;
    </div>)}
    </div>);
}
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
<<<<<<< HEAD

<<<<<<< HEAD



=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> a252feedad80e14c11ed30f5695974c343534e8d
=======
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-2533
=======
=======
>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-2a0c




<<<<<<< HEAD
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-8452
=======



origin/cursor/automate-test-improve-and-merge-code-2533
>>>>>>> 54ad2b1038c082a23519987b245e26e888b5a5dc
=======
>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-2a0c
