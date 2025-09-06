<<<<<<< HEAD
<<<<<<< HEAD

=======


=======

import React from "react";
import Head from "next/head";


>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
export default function LocationsPage() {
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
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
import React from "react";
import Head from "next/head";
export default function LocationsPage() {;
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
  return (
    <div className="min-h-screen pt-24 pb-20 px-4 sm:px-6 lg:px-8">;
      <Head>;
        <title>Locations | Zion Tech Group</title>;
        <meta
          name="description"
          content="Our office locations and contact information."
        />;
        <link rel="canonical" href="https://ziontechgroup && ziontechgroup.com/locations" />;
      </Head>;
      <div className="max-w-4xl mx-auto space-y-6">;
        <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">;
          Locations;
        </h1>;
        <div className="p-6 rounded-2xl bg-black/40 border border-cyan-500/20">;
          <h2 className="text-white text-xl font-semibold mb-2">;
            Middletown, DE (HQ);
          </h2>;
          <p className="text-slate-300">;
            364 E Main St STE 1008 Middletown DE 19709;
          </p>;
        </div>;
        <p className="text-slate-300">;
          Call{" "}
          <a className="text-cyan-400" href="tel:+13024640950">;
            +1 302 464 0950;
          </a>{" "}
          or email{" "}
          <a className="text-cyan-400" href="mailto:kleber@ziontechgroup && ziontechgroup.com">;
            kleber@ziontechgroup && ziontechgroup.com;
import React from './react';
import Head from './next / head';
export default /**
 * LocationsPage - Function description
 */
function LocationsPage() {
  return (
    <div className="min - h-screen pt - 24 pb - 20 px - 4 sm:px - 6 lg:px - 8">;
      <Head>;
        <title > Locations | Zion Tech Group</title>;
        <meta;
          name="description";
          content="Our office locations and contact information.";
        />;
        <link rel="canonical" href="https://ziontechgroup.com / locations" />;
      </Head>;
      <div className="max - w-4xl mx - auto space - y-6">;
        <h1 className="text - 4xl md:text - 6xl font - bold bg - gradient - to - r from - cyan - 400 via - purple - 400 to - pink - 400 bg - clip - text text - transparent">;
          Locations;
        </h1>;
        <div className="p - 6 rounded - 2xl bg - black / 40 border border - cyan - 500 / 20">;
          <h2 className="text - white text - xl font - semibold mb - 2">;
            Middletown, DE (HQ);
          </h2>;
          <p className="text - slate - 300">;
            364 E Main St STE 1008 Middletown DE 19709;
          </p>;
        </div>;
        <p className="text - slate - 300">;
          Call{" "}
          <a className="text - cyan - 400" href="tel:+13024640950">;
            +1 302 464 0950;
          </a>{" "}
          or email{" "}
<<<<<<< HEAD
          <a className="text-cyan-400" href="mailto:kleber@ziontechgroup.com">
            kleber@ziontechgroup.com
          </a>
          .
        </p>
      </div>
    </div>
  );

=======
          <a className="text - cyan - 400" href="mailto:kleber@ziontechgroup.com">;
            kleber@ziontechgroup.com;
          </a>;
          .;
        </p>;
      </div>;
<<<<<<< HEAD

=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
    </div>);
  return (
    <div className="min - h-screen pt - 24 pb - 20 px - 4 sm:px - 6 lg:px - 8">;
      <Head>;
        <title > Locations | Zion Tech Group</title>;
        <meta;
          name="description";
          content="Our office locations and contact information.";
        />;
        <link rel="canonical" href="https://ziontechgroup.com / locations" />;
      </Head>;
      <div className="max - w-4xl mx - auto space - y-6">;
        <h1 className="text - 4xl md:text - 6xl font - bold bg - gradient - to - r from - cyan - 400 via - purple - 400 to - pink - 400 bg - clip - text text - transparent">;
          Locations;
        </h1>;
        <div className="p - 6 rounded - 2xl bg - black / 40 border border - cyan - 500 / 20">;
          <h2 className="text - white text - xl font - semibold mb - 2">;
            Middletown, DE (HQ);
          </h2>;
          <p className="text - slate - 300">;
            364 E Main St STE 1008 Middletown DE 19709;
          </p>;
        </div>;
        <p className="text - slate - 300">;
          Call{" "}
          <a className="text - cyan - 400" href="tel: +13024640950">;
            +1 302 464 0950;
          </a>{" "}
          or email{" "}
          <a className="text - cyan - 400" href="mailto:kleber@ziontechgroup.com">;
            kleber@ziontechgroup.com;
<<<<<<< HEAD

=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
          </a>;
          .;
        </p>;
      </div>;
<<<<<<< HEAD

}
=======
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
	return (
		<div className="min-h-screen pt-24 pb-20 px-4 sm:px-6 lg:px-8">
			<Head>
				<title>Locations | Zion Tech Group</title>
				<meta name="description" content="Our office locations and contact information." />
				<link rel="canonical" href="https://ziontechgroup.com/locations" />
			</Head>
			<div className="max-w-4xl mx-auto space-y-6">
				<h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">Locations</h1>
				<div className="p-6 rounded-2xl bg-black/40 border border-cyan-500/20">
					<h2 className="text-white text-xl font-semibold mb-2">Middletown, DE (HQ)</h2>
					<p className="text-slate-300">364 E Main St STE 1008 Middletown DE 19709</p>
			<Head>
				<title>Locations | Zion Tech Group</title>
				<meta name=&quot;description&quot; content=&quot;Our office locations and contact information.&quot; />
				<link rel=&quot;canonical&quot; href=&quot;https://ziontechgroup.com/locations&quot; />
			</Head>
			<div className=&quot;max-w-4xl mx-auto space-y-6&quot;>
				<h1 className=&quot;text-4xl md:text-6xl font-bold bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent&quot;>Locations</h1>
				<div className=&quot;p-6 rounded-2xl bg-black/40 border border-cyan-500/20&quot;>
					<h2 className=&quot;text-white text-xl font-semibold mb-2&quot;>Middletown, DE (HQ)</h2>
					<p className=&quot;text-slate-300&quot;>364 E Main St STE 1008 Middletown DE 19709</p>

				</div>
				<p className="text-slate-300">Call <a className="text-cyan-400" href="tel: +13024640950">+1 302 464 0950</a> or email <a className="text-cyan-400" href="mailto:kleber@ziontechgroup.com">kleber@ziontechgroup.com</a>.</p>
			</div>
		</div>
<<<<<<< HEAD
	);

=======
);
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
}
    </div>);
}
<<<<<<< HEAD
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
=======

}

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======

=======
<<<<<<< HEAD
import React from 'react';
import Head from 'next/head';
=======
import React from "react";
import Head from "next/head";

>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
export default function LocationsPage() {
  return (
    <div className="min-h-screen pt-24 pb-20 px-4 sm:px-6 lg:px-8">
      <Head>
        <title>Locations | Zion Tech Group</title>
        <meta
          name="description"
          content="Our office locations and contact information."
        />
        <link rel="canonical" href="https://ziontechgroup.com/locations" />
      </Head>
      <div className="max-w-4xl mx-auto space-y-6">
        <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
          Locations
        </h1>
        <div className="p-6 rounded-2xl bg-black/40 border border-cyan-500/20">
          <h2 className="text-white text-xl font-semibold mb-2">
            Middletown, DE (HQ)
          </h2>
          <p className="text-slate-300">
            364 E Main St STE 1008 Middletown DE 19709
          </p>
        </div>
        <p className="text-slate-300">
          Call{" "}
          <a className="text-cyan-400" href="tel:+13024640950">
            +1 302 464 0950
          </a>{" "}
          or email{" "}
          <a className="text-cyan-400" href="mailto:kleber@ziontechgroup.com">
            kleber@ziontechgroup.com
          </a>
          .
        </p>
      </div>
    </div>;
  );
  return (
    <div className="min-h-screen pt-24 pb-20 px-4 sm:px-6 lg:px-8">
      <Head>
        <title>Locations | Zion Tech Group</title>
        <meta
          name="description"
          content="Our office locations and contact information."
        />
        <link rel="canonical" href="https://ziontechgroup.com/locations" />
      </Head>
      <div className="max-w-4xl mx-auto space-y-6">
        <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
          Locations
        </h1>
        <div className="p-6 rounded-2xl bg-black/40 border border-cyan-500/20">
          <h2 className="text-white text-xl font-semibold mb-2">
            Middletown, DE (HQ)
          </h2>
          <p className="text-slate-300">
            364 E Main St STE 1008 Middletown DE 19709
          </p>
        </div>
        <p className="text-slate-300">
          Call{" "}
          <a className="text-cyan-400" href="tel: +13024640950">
            +1 302 464 0950
          </a>{" "}
          or email{" "}
          <a className="text-cyan-400" href="mailto:kleber@ziontechgroup.com">
            kleber@ziontechgroup.com
          </a>
          .
        </p>
      </div>
    </div>
  );
<<<<<<< HEAD
}
=======
}
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
