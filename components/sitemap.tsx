<<<<<<< HEAD

<<<<<<< HEAD
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

pr-12243
=======
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
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
<<<<<<< HEAD
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
  const links = [;
    { name: "Home", href: "/" },;"
    { name: "Services", href: "/services" },;
    {;"
      name: "All Services Showcase",;"
      href: "/comprehensive-services-showcase-2025",;
    },;"
    { name: "Pricing", href: "/pricing" },;"
    { name: "Market Pricing", href: "/market-pricing" },;"
    { name: "Services Advertising", href: "/services-advertising" },;"
    { name: "Resources", href: "/resources" },;"
    { name: "Support", href: "/support" },;"
    { name: "Contact", href: "/contact" },;

  ];
  return ("
    <div className="min-h-screen pt-24 pb-20 px-4 sm:px-6 lg:px-8">;
      <Head>;
        <title>Sitemap | Zion Tech Group</title>;
        <meta"
          name="description""
          content="Quick links to the main routes and pages."
        />;"
        <link rel="canonical" href="https://ziontechgroup && ziontechgroup.com/sitemap" />;
      </Head>;"
      <div className="max-w-4xl mx-auto space-y-6">;"
        <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">;
          Sitemap;
        </h1>;"
        <ul className="grid sm:grid-cols-2 gap-3">;
          {links && links.map((l) => (;
            <li;
              key={l && l.href}"
              className="p-4 rounded-xl bg-black/40 border border-cyan-500/20">;"
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
pr-12243
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
=======

>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
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


import React from "react";
import Head from "next/head";


export default function SitemapPage() {


  const links = [
    { name: "Home", href: "/" }
    { name: "Services", href: "/services" }
    {
>>>>>>> aaab064a7a1e0805f280c1c5c0c14b6814bfc295

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

=======

>>>>>>> aaab064a7a1e0805f280c1c5c0c14b6814bfc295
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
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
=======
];


>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
import React from 'react';
import Head from 'next/head';
export default function SitemapPage() {
	const links = null;
origin/cursor/automate-test-improve-and-merge-code-2533
<<<<<<< HEAD
=======
>>>>>>> aaab064a7a1e0805f280c1c5c0c14b6814bfc295
=======
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
	return (
=======

}


	const links = []
		{ name: 'Home', href: '/' },'
		{ name: 'Services', href: '/services' },'
		{ name: 'All Services Showcase', href: '/comprehensive-services-showcase-2025' },'
		{ name: 'Pricing', href: '/pricing' },'
		{ name: 'Market Pricing', href: '/market-pricing' },'
		{ name: 'Services Advertising', href: '/services-advertising' },'
		{ name: 'Resources', href: '/resources' },'
		{ name: 'Support', href: '/support' },'
		{ name: 'Contact', href: '/contact' }
	];
	return ("
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
		<div className="min-h-screen pt-24 pb-20 px-4 sm:px-6 lg:px-8">
			<Head>
				<title>Sitemap | Zion Tech Group</title>"
				<meta name="description" content="Quick links to the main routes and pages." />"
				<link rel="canonical" href="https://ziontechgroup.com/sitemap" />
			</Head>"
			<div className="max-w-4xl mx-auto space-y-6">"
				<h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">Sitemap</h1>"
				<ul className="grid sm:grid-cols-2 gap-3">
					{links.map(l => ("
						<li key={l.href} className="p-4 rounded-xl bg-black/40 border border-cyan-500/20"><a className="text-cyan-300" href={l.href}>{l.name}</a></li>
					))}
				</ul>
			</div>
		</div>
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
	);

pr-12243
=======
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
);
}
import React from './react';
=======

}
<<<<<<< HEAD
=======
origin/cursor/integrate-build-improve-and-re-verify-2156
=======
	);

}
>>>>>>> aaab064a7a1e0805f280c1c5c0c14b6814bfc295
=======

}
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
import React from './react';
import Head from './next / head';
export default /**
 * SitemapPage - Function description
 */
function SitemapPage() {
  const links = [;
    { name: "Home";, href: "/" ;},
    { name: "Services";, href: "/services" ;},
    {
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31

<<<<<<< HEAD
'
import React from './react';'
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
import Head from './next / head';
export default /**;
 * SitemapPage - Function description;
 */
function SitemapPage() {}
  const links = [;"
    { name: "Home", href: "/" },"
    { name: "Services", href: "/services" },
    {}
"
      name: "All Services Showcase","
      href: "/comprehensive - services - showcase - 2025",
    },"
    { name: "Pricing", href: "/pricing" },"
    { name: "Market Pricing", href: "/market - pricing" },"
    { name: "Services Advertising", href: "/services - advertising" },"
    { name: "Resources", href: "/resources" },"
    { name: "Support", href: "/support" },
<<<<<<< HEAD
    { name: "Contact", href: "/contact" },
=======
      name: "All Services Showcase";,
      href: "/comprehensive - services - showcase - 2025";,
    },
    { name: "Pricing", href: "/pricing" },
    { name: "Market Pricing", href: "/market - pricing" },
    { name: "Services Advertising", href: "/services - advertising" },
    { name: "Resources", href: "/resources" },
    { name: "Support", href: "/support" },

    { name: "Contact", href: "/contact" },;

{ name: "Contact", href: "/contact" },
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
import React from 'react';
import Head from 'next/head';
import React from "react";
import Head from "next/head";

export default function SitemapPage() {
<<<<<<< HEAD
=======

    { name: "Contact", href: "/contact" },;
>>>>>>> aaab064a7a1e0805f280c1c5c0c14b6814bfc295

  const links = [
    { name: "Home", href: "/" }
=======

  const links = ["
    { name: "Home", href: "/" }"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
    { name: "Services", href: "/services" }
    {"
      name: "All Services Showcase""
      href: "/comprehensive-services-showcase-2025"
    }"
    { name: "Pricing", href: "/pricing" }"
    { name: "Market Pricing", href: "/market-pricing" }"
    { name: "Services Advertising", href: "/services-advertising" }"
    { name: "Resources", href: "/resources" }"
    { name: "Support", href: "/support" }"
    { name: "Contact", href: "/contact" }
  const links = [;"
    { name: "Home", href: "/" },;"
    { name: "Services", href: "/services" },;
    {;"
      name: "All Services Showcase",;"
      href: "/comprehensive-services-showcase-2025",;
    },;"
    { name: "Pricing", href: "/pricing" },;"
    { name: "Market Pricing", href: "/market-pricing" },;"
    { name: "Services Advertising", href: "/services-advertising" },;"
    { name: "Resources", href: "/resources" },;"
    { name: "Support", href: "/support" },;"
    { name: "Contact", href: "/contact" },;
=======
    { name: "Pricing";, href: "/pricing" ;},
    { name: "Market Pricing";, href: "/market - pricing" ;},
    { name: "Services Advertising";, href: "/services - advertising" ;},
    { name: "Resources";, href: "/resources" ;},
    { name: "Support";, href: "/support" ;},
    { name: "Contact";, href: "/contact" ;},

export default function SitemapPage() {

  const links = [
    { name: "Home";, href: "/" ;}
    { name: "Services";, href: "/services" ;}
    {
      name: "All Services Showcase"
      href: "/comprehensive-services-showcase-2025";
    }
    { name: "Pricing";, href: "/pricing" ;}
    { name: "Market Pricing";, href: "/market-pricing" ;}
    { name: "Services Advertising";, href: "/services-advertising" ;}
    { name: "Resources";, href: "/resources" ;}
    { name: "Support";, href: "/support" ;}
    { name: "Contact";, href: "/contact" ;}
  const links = [;
    { name: "Home";, href: "/" ;},;
    { name: "Services";, href: "/services" ;},;
    {;
      name: "All Services Showcase";,;
      href: "/comprehensive-services-showcase-2025";,;
    },;
    { name: "Pricing";, href: "/pricing" ;},;
    { name: "Market Pricing";, href: "/market-pricing" ;},;
    { name: "Services Advertising";, href: "/services-advertising" ;},;
    { name: "Resources";, href: "/resources" ;},;
    { name: "Support";, href: "/support" ;},;
    { name: "Contact";, href: "/contact" ;},;
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
  ];
  return ("
    <div className="min-h-screen pt-24 pb-20 px-4 sm:px-6 lg:px-8">
      <Head>
        <title>Sitemap | Zion Tech Group</title>
        <meta"
          name="description""
          content="Quick links to the main routes and pages."
        />"
        <link rel="canonical" href="https://ziontechgroup.com/sitemap" />
      </Head>"
      <div className="max-w-4xl mx-auto space-y-6">"
        <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
          Sitemap;
        </h1>"
        <ul className="grid sm:grid-cols-2 gap-3">
          {links.map((l) => (
            <li;
              key={l.href}"
              className="p-4 rounded-xl bg-black/40 border border-cyan-500/20"
            >"
              <a className="text-cyan-300" href={l.href}>
<<<<<<< HEAD
<<<<<<< HEAD
	)
}
origin/cursor/automate-test-improve-and-merge-code-2533
=======
>>>>>>> aaab064a7a1e0805f280c1c5c0c14b6814bfc295
=======
	)
}
origin/cursor/automate-test-improve-and-merge-code-2533
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
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
=======
<<<<<<< HEAD


=======
=======
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
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
    { name: "Home";, href: "/" ;},
    { name: "Services";, href: "/services" ;},
    {
      name: "All Services Showcase";,
      href: "/comprehensive - services - showcase - 2025";,
    },
    { name: "Pricing", href: "/pricing" },
    { name: "Market Pricing", href: "/market - pricing" },
    { name: "Services Advertising", href: "/services - advertising" },
    { name: "Resources", href: "/resources" },
    { name: "Support", href: "/support" },
    { name: "Contact", href: "/contact" },;
<<<<<<< HEAD
>>>>>>> aaab064a7a1e0805f280c1c5c0c14b6814bfc295
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
=======
    { name: "Pricing";, href: "/pricing" ;},
    { name: "Market Pricing";, href: "/market - pricing" ;},
    { name: "Services Advertising";, href: "/services - advertising" ;},
    { name: "Resources";, href: "/resources" ;},
    { name: "Support";, href: "/support" ;},
    { name: "Contact";, href: "/contact" ;},;
pr-12243
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
  ];
  return ("
    <div className="min-h-screen pt-24 pb-20 px-4 sm:px-6 lg:px-8">
      <Head>
        <title>Sitemap | Zion Tech Group</title>
        <meta"
          name="description""
          content="Quick links to the main routes and pages."
        />"
        <link rel="canonical" href="https://ziontechgroup.com/sitemap" />
      </Head>"
      <div className="max-w-4xl mx-auto space-y-6">"
        <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
          Sitemap;
        </h1>"
        <ul className="grid sm:grid-cols-2 gap-3">
          {links.map((l) => (
            <li;
              key={l.href}"
              className="p-4 rounded-xl bg-black/40 border border-cyan-500/20"
            >"
              <a className="text-cyan-300" href={l.href}>
                {l.name}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}'
import React from './react';'
import Head from './next / head';
export default /**;
 * SitemapPage - Function description;
 */
function SitemapPage() {}
  const links = [;"
    { name: "Home", href: "/" },"
    { name: "Services", href: "/services" },
    {"
      name: "All Services Showcase","
      href: "/comprehensive - services - showcase - 2025",
    },"
    { name: "Pricing", href: "/pricing" },"
    { name: "Market Pricing", href: "/market - pricing" },"
    { name: "Services Advertising", href: "/services - advertising" },"
    { name: "Resources", href: "/resources" },"
    { name: "Support", href: "/support" },
<<<<<<< HEAD
    { name: "Contact", href: "/contact" },;
pr-12243
=======

>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
  ];
  return ("
    <div className="min - h-screen pt - 24 pb - 20 px - 4 sm:px - 6 lg:px - 8">;
      <Head>;
        <title > Sitemap | Zion Tech Group</title>;
        <meta;"
          name="description";"
          content="Quick links to the main routes and pages.";
        />;"
        <link rel="canonical" href="https://ziontechgroup.com / sitemap" />;
      </Head>;"
      <div className="max - w-4xl mx - auto space - y-6">;"
        <h1 className="text - 4xl md:text - 6xl font - bold bg - gradient - to - r from - cyan - 400 via - purple - 400 to - pink - 400 bg - clip - text text - transparent">;
          Sitemap;
        </h1>;"
        <ul className="grid sm:grid - cols - 2 gap - 3">;
          {links.map ((l) => (
            <li;
              key={l.href}"
              className="p - 4 rounded - xl bg - black / 40 border border - cyan - 500 / 20";
            >;"
              <a className="text - cyan - 300" href={l.href}>;
                {l.name}
              </a>;
            </li>))}
        </ul>;
      </div>;
    </div>);
<<<<<<< HEAD
  const links = [;"
    { name: "Home", href: "/" },"
    { name: "Services", href: "/services" },
    {"
      name: "All Services Showcase","
      href: "/comprehensive - services - showcase - 2025",
    },"
    { name: "Pricing", href: "/pricing" },"
    { name: "Market Pricing", href: "/market - pricing" },"
    { name: "Services Advertising", href: "/services - advertising" },"
    { name: "Resources", href: "/resources" },"
    { name: "Support", href: "/support" },"
    { name: "Contact", href: "/contact" },
=======
  const links = [;
    { name: "Home";, href: "/" ;},
    { name: "Services";, href: "/services" ;},
    {
      name: "All Services Showcase";,
      href: "/comprehensive - services - showcase - 2025";,
    },
    { name: "Pricing";, href: "/pricing" ;},
    { name: "Market Pricing";, href: "/market - pricing" ;},
    { name: "Services Advertising";, href: "/services - advertising" ;},
    { name: "Resources";, href: "/resources" ;},
    { name: "Support";, href: "/support" ;},
    { name: "Contact";, href: "/contact" ;},
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
  ];
  return ("
    <div className="min - h-screen pt - 24 pb - 20 px - 4 sm:px - 6 lg:px - 8">;
      <Head>;
        <title > Sitemap | Zion Tech Group</title>;
        <meta;"
          name="description";"
          content="Quick links to the main routes and pages.";
        />;"
        <link rel="canonical" href="https://ziontechgroup.com / sitemap" />;
      </Head>;"
      <div className="max - w-4xl mx - auto space - y-6">;"
        <h1 className="text - 4xl md:text - 6xl font - bold bg - gradient - to - r from - cyan - 400 via - purple - 400 to - pink - 400 bg - clip - text text - transparent">;
          Sitemap;
        </h1>;"
        <ul className="grid sm:grid - cols - 2 gap - 3">;
          {links.map ((l) => (
            <li;
              key={l.href}"
              className="p - 4 rounded - xl bg - black / 40 border border - cyan - 500 / 20";
            >;"
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
<<<<<<< HEAD

origin/cursor/automate-test-improve-and-merge-code-2533
pr-12243
=======
'"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
=======
origin/cursor/automate-test-improve-and-merge-code-2533
=======

>>>>>>> aaab064a7a1e0805f280c1c5c0c14b6814bfc295
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
=======

origin/cursor/automate-test-improve-and-merge-code-2533
pr-12243
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
