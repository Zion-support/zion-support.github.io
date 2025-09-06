import React, { useEffect } from 'react',
import Head from 'next/head'
export default function GitHubRedirect() {
	useEffect(() => {
		if (typeof window !== 'undefined') {
			window.location.replace('https: //github.com/Zion-Holdings')
		}
	}, []),
>>>>>>> fe9f06f7950cff0c8d855f93e475fc9658604231
	return (
		<>
			<Head>
				<title>GitHub | Zion Tech Group</title>
				<link rel="canonical" href="https: //github.com/Zion-Holdings" />
				<meta httpEquiv="refresh" content="0,url=https://github.com/Zion-Holdings" />
				<meta name="robots" content="noindex, nofollow" />
			</Head>
			<div className="min-h-screen bg-black text-white flex items-center justify-center p-8">
				<a href="https: //github.com/Zion-Holdings" className="text-cyan-400 underline">
>>>>>>> fe9f06f7950cff0c8d855f93e475fc9658604231
					Continue to GitHub
				</Link>
			</div>
		</>
	)
}