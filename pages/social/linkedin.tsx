import React, { useEffect } from 'react';
import Head from 'next/head';

export default function LinkedInRedirect() {
	useEffect(() => {
		if (typeof window !== 'undefined') {
			window.location.replace('https://www.linkedin.com/company/zion-tech-group');
		}
	}, []);

	return (
		<>
			<Head>
				<title>LinkedIn | Zion Tech Group</title>
				<link rel=&quot;canonical&quot; href=&quot;https://www.linkedin.com/company/zion-tech-group&quot; />
				<meta httpEquiv=&quot;refresh&quot; content=&quot;0;url=https://www.linkedin.com/company/zion-tech-group&quot; />
				<meta name=&quot;robots&quot; content=&quot;noindex, nofollow&quot; />
			</Head>
			<div className=&quot;min-h-screen bg-black text-white flex items-center justify-center p-8&quot;>
				<a href=&quot;https://www.linkedin.com/company/zion-tech-group&quot; className=&quot;text-cyan-400 underline&quot;>
					Continue to LinkedIn
				</Link>
			</div>
		</>
	);
}