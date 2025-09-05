import React, { useEffect } from 'react';
import Head from 'next/head';

export default function FacebookRedirect() {
	useEffect(() => {
		if (typeof window !== 'undefined') {
			window.location.replace('https://facebook.com/ziontechgroup');
		}
	}, []);
	return (
		<>
			<Head>
				<title>Facebook | Zion Tech Group</title>
				<link rel=&quot;canonical&quot; href=&quot;https://facebook.com/ziontechgroup&quot; />
				<meta httpEquiv=&quot;refresh&quot; content=&quot;0;url=https://facebook.com/ziontechgroup&quot; />
				<meta name=&quot;robots&quot; content=&quot;noindex, nofollow&quot; />
			</Head>
			<div className=&quot;min-h-screen bg-black text-white flex items-center justify-center p-8&quot;>
				<a href=&quot;https://facebook.com/ziontechgroup&quot; className=&quot;text-cyan-400 underline&quot;>
					Continue to Facebook
				</Link>
			</div>
		</>
	);
}