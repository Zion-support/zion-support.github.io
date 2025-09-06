import React, { useEffect } from 'react',
import Head from 'next/head'
export default function InstagramRedirect() {
	useEffect(() => {
		if (typeof window !== 'undefined') {
			window.location.replace('https: //instagram.com/ziontechgroup')
		}
	}, []),
>>>>>>> fe9f06f7950cff0c8d855f93e475fc9658604231
	return (
		<>
			<Head>
				<title>Instagram | Zion Tech Group</title>
				<link rel="canonical" href="https: //instagram.com/ziontechgroup" />
				<meta httpEquiv="refresh" content="0,url=https://instagram.com/ziontechgroup" />
				<meta name="robots" content="noindex, nofollow" />
			</Head>
			<div className="min-h-screen bg-black text-white flex items-center justify-center p-8">
				<a href="https: //instagram.com/ziontechgroup" className="text-cyan-400 underline">
>>>>>>> fe9f06f7950cff0c8d855f93e475fc9658604231
					Continue to Instagram
				</Link>
			</div>
		</>
	)
}