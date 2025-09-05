import React from 'react';
import Head from 'next/head';

export default function CommunityPage() {
	return (
		<div className=&quot;min-h-screen pt-24 pb-20 px-4 sm:px-6 lg:px-8&quot;>
			<Head>
				<title>Community | Zion Tech Group</title>
				<meta name=&quot;description&quot; content=&quot;Community forum and resources for Zion Tech Group users&quot; />
				<link rel=&quot;canonical&quot; href=&quot;https://ziontechgroup.com/community&quot; />
				<meta name=&quot;description&quot; content=&quot;Join the Zion Tech Group community and stay updated.&quot; />
			</Head>
			<div className=&quot;max-w-5xl mx-auto space-y-8&quot;>
				<h1 className=&quot;text-4xl md:text-6xl font-bold bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent&quot;>Community</h1>
				<p className=&quot;text-slate-300&quot;>Join our community. Ask questions, share solutions, and learn best practices.</p>
				<div className=&quot;grid md:grid-cols-2 gap-6&quot;>
					<div className=&quot;p-6 rounded-2xl bg-white/5 border border-white/10&quot;>
						<h2 className=&quot;text-white text-xl font-semibold mb-2&quot;>Get Help</h2>
						<p className=&quot;text-slate-300&quot;>Visit the <a className=&quot;text-cyan-400 underline&quot; href=&quot;/support&quot;>Support Center</Link> or email <a className=&quot;text-purple-400&quot; href=&quot;mailto:kleber@ziontechgroup.com&quot;>kleber@ziontechgroup.com</Link>.</p>
					</div>
					<div className=&quot;p-6 rounded-2xl bg-white/5 border border-white/10&quot;>
						<h2 className=&quot;text-white text-xl font-semibold mb-2&quot;>Follow Us</h2>
						<ul className=&quot;text-slate-300 space-y-1&quot;>
							<li><a className=&quot;text-cyan-400&quot; href=&quot;https://linkedin.com/company/ziontechgroup&quot; target=&quot;_blank&quot; rel=&quot;noopener noreferrer&quot;>LinkedIn</Link></li>
							<li><a className=&quot;text-cyan-400&quot; href=&quot;https://github.com/Zion-Holdings&quot; target=&quot;_blank&quot; rel=&quot;noopener noreferrer&quot;>GitHub</Link></li>
							<li><a className=&quot;text-cyan-400&quot; href=&quot;https://instagram.com/ziontechgroup&quot; target=&quot;_blank&quot; rel=&quot;noopener noreferrer&quot;>Instagram</Link></li>
							<li><a className=&quot;text-cyan-400&quot; href=&quot;https://youtube.com/@ziontechgroup&quot; target=&quot;_blank&quot; rel=&quot;noopener noreferrer&quot;>YouTube</Link></li>
						</ul>
					</div>
				</div>
			</div>
		</div>
	);
}
