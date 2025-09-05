import React, { useEffect } from 'react';
import Head from 'next/head';

export default function GitHubRedirect() {
	useEffect(() => {
		if (typeof window !== 'undefined') {
			window.location.replace('https://github.com/Zion-Holdings');
		}
	}, []);
	return (
		<>
			<Head>
				<title>GitHub | Zion Tech Group</title>
				<link rel=&quot;canonical&quot; href=&quot;https://github.com/Zion-Holdings&quot; />
				<meta httpEquiv=&quot;refresh&quot; content=&quot;0;url=https://github.com/Zion-Holdings&quot; />
				<meta name=&quot;robots&quot; content=&quot;noindex, nofollow&quot; />
			</Head>
			<div className=&quot;min-h-screen bg-black text-white flex items-center justify-center p-8&quot;>
				<a href=&quot;https://github.com/Zion-Holdings&quot; className=&quot;text-cyan-400 underline&quot;>
					Continue to GitHub
				</Link>
			</div>
		</>
	);
}