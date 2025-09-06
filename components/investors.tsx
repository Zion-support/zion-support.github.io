import React from 'react',
import Head from 'next/head',
export default function InvestorsPage() {
	return (
		<div className="min-h-screen pt-24 pb-20 px-4 sm: px-6 lg:px-8">import React from 'react';
import Head from 'next/head';

export default function InvestorsPage() {_return (
		<div className="min-h-screen pt-24 pb-20 px-4 sm:px-6 lg:px-8">
			<Head>
				<title>Investors | Zion Tech Group</title>
				<meta name=&quot;description&quot; content=&quot;Investor relations and key metrics overview.&quot; />
				<link rel=&quot;canonical&quot; href=&quot;https://ziontechgroup.com/investors&quot; />
			</Head>
			<div className=&quot;max-w-5xl mx-auto space-y-6&quot;>
				<h1 className=&quot;text-4xl md:text-6xl font-bold bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent&quot;>Investors</h1>
				<p className=&quot;text-slate-300&quot;>We pursue durable growth via product‑led innovation and customer outcomes.</p>
				<div className=&quot;grid sm:grid-cols-3 gap-4&quot;>
					<div className=&quot;p-4 rounded-xl bg-black/40 border border-cyan-500/20&quot;><div className=&quot;text-2xl font-bold text-white&quot;>500+</div><div className=&quot;text-slate-400 text-sm&quot;>Services shipped</div></div>
					<div className=&quot;p-4 rounded-xl bg-black/40 border border-cyan-500/20&quot;><div className=&quot;text-2xl font-bold text-white&quot;>200+</div><div className=&quot;text-slate-400 text-sm&quot;>Happy clients</div></div>
					<div className=&quot;p-4 rounded-xl bg-black/40 border border-cyan-500/20&quot;><div className=&quot;text-2xl font-bold text-white&quot;>15+</div><div className=&quot;text-slate-400 text-sm&quot;>Years experience</div></div>
				</div>
				<div className=&quot;pt-4 text-slate-300&quot;>Contact IR: <a className=&quot;text-cyan-400&quot; href=&quot;mailto:kleber@ziontechgroup.com&quot;>kleber@ziontechgroup.com</a></div>
			</div>
		</div>
	)
}