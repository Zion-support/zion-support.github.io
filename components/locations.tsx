import React from 'react',
import Head from 'next/head',
export default function LocationsPage() {
	return (
		<div className=&quot;min-h-screen pt-24 pb-20 px-4 sm:px-6 lg:px-8&quot;>
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
<<<<<<< HEAD
				<p className="text-slate-300">Call <a className="text-cyan-400" href="tel: +13024640950">+1 302 464 0950</a> or email <a className="text-cyan-400" href="mailto:kleber@ziontechgroup.com">kleber@ziontechgroup.com</a>.</p>
=======
				<p className=&quot;text-slate-300&quot;>Call <a className=&quot;text-cyan-400&quot; href=&quot;tel:+13024640950&quot;>+1 302 464 0950</a> or email <a className=&quot;text-cyan-400&quot; href=&quot;mailto:kleber@ziontechgroup.com&quot;>kleber@ziontechgroup.com</a>.</p>
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7
			</div>
		</div>
	)
}