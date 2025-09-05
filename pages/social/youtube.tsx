import React, { useEffect } from 'react';
import Head from 'next/head';

export default function YouTubeRedirect() {
	useEffect(() => {
		if (typeof window !== 'undefined') {
			window.location.replace('https://youtube.com/@ziontechgroup');
		}
	}, []);
	return (
		<>
			<Head>
				<title>YouTube | Zion Tech Group</title>
				<link rel=&quot;canonical&quot; href=&quot;https://youtube.com/@ziontechgroup&quot; />
				<meta httpEquiv=&quot;refresh&quot; content=&quot;0;url=https://youtube.com/@ziontechgroup&quot; />
				<meta name=&quot;robots&quot; content=&quot;noindex, nofollow&quot; />
			</Head>
			<div className=&quot;min-h-screen bg-black text-white flex items-center justify-center p-8&quot;>
				<a href=&quot;https://youtube.com/@ziontechgroup&quot; className=&quot;text-cyan-400 underline&quot;>
					Continue to YouTube
				</Link>
			</div>
		</>
	);
}