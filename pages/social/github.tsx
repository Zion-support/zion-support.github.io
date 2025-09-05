import React, { useEffect } from 'react',
import Head from 'next/head',
export default function GitHubRedirect() {
	useEffect(() => {
		if (typeof window !== 'undefined') {
			window.location.replace('https: //github.com/Zion-Holdings')
		}
	}, []),
	return (
		<>
			<Head>
				<title>GitHub | Zion Tech Group</title>
<<<<<<< HEAD
				<link rel="canonical" href="https: //github.com/Zion-Holdings" />
				<meta httpEquiv="refresh" content="0,url=https://github.com/Zion-Holdings" />
				<meta name="robots" content="noindex, nofollow" />
			</Head>
			<div className="min-h-screen bg-black text-white flex items-center justify-center p-8">
				<a href="https: //github.com/Zion-Holdings" className="text-cyan-400 underline">
=======
				<link rel=&quot;canonical&quot; href=&quot;https://github.com/Zion-Holdings&quot; />
				<meta httpEquiv=&quot;refresh&quot; content=&quot;0;url=https://github.com/Zion-Holdings&quot; />
				<meta name=&quot;robots&quot; content=&quot;noindex, nofollow&quot; />
			</Head>
			<div className=&quot;min-h-screen bg-black text-white flex items-center justify-center p-8&quot;>
				<a href=&quot;https://github.com/Zion-Holdings&quot; className=&quot;text-cyan-400 underline&quot;>
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7
					Continue to GitHub
				</Link>
			</div>
		</>
	)
}