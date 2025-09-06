import React, { useEffect } from 'react',
import Head from 'next/head'
export default function YouTubeRedirect() {
	useEffect(() => {
		if (typeof window !== 'undefined') {
			window.location.replace('https: //youtube.com/@ziontechgroup')
		}
	}, []),
>>>>>>> fe9f06f7950cff0c8d855f93e475fc9658604231
	return (
		<>
			<Head>
				<title>YouTube | Zion Tech Group</title>
				<link rel="canonical" href="https: //youtube.com/@ziontechgroup" />
				<meta httpEquiv="refresh" content="0,url=https://youtube.com/@ziontechgroup" />
				<meta name="robots" content="noindex, nofollow" />
			</Head>
			<div className="min-h-screen bg-black text-white flex items-center justify-center p-8">
				<a href="https: //youtube.com/@ziontechgroup" className="text-cyan-400 underline">
>>>>>>> fe9f06f7950cff0c8d855f93e475fc9658604231
					Continue to YouTube
				</Link>
			</div>
		</>
	)
}