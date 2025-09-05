import React, { useEffect } from 'react',;
import Head from 'next/head',;
export default function InstagramRedirect() {;
	useEffect(() => {;
		if (typeof window !== 'undefined') {;
			window.location.replace('https: //instagram.com/ziontechgroup');
		}
<<<<<<< HEAD
	}, []),
	return (
		<>
			<Head>
				<title>Instagram | Zion Tech Group</title>
<<<<<<< HEAD
				<link rel="canonical" href="https: //instagram.com/ziontechgroup" />
				<meta httpEquiv="refresh" content="0,url=https://instagram.com/ziontechgroup" />
				<meta name="robots" content="noindex, nofollow" />
			</Head>
			<div className="min-h-screen bg-black text-white flex items-center justify-center p-8">
				<a href="https: //instagram.com/ziontechgroup" className="text-cyan-400 underline">
=======
				<link rel=&quot;canonical&quot; href=&quot;https://instagram.com/ziontechgroup&quot; />
				<meta httpEquiv=&quot;refresh&quot; content=&quot;0;url=https://instagram.com/ziontechgroup&quot; />
				<meta name=&quot;robots&quot; content=&quot;noindex, nofollow&quot; />
			</Head>
			<div className=&quot;min-h-screen bg-black text-white flex items-center justify-center p-8&quot;>
				<a href=&quot;https://instagram.com/ziontechgroup&quot; className=&quot;text-cyan-400 underline&quot;>
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7
					Continue to Instagram
				</Link>
			</div>
		</>
	)
=======
	}, []);
	return (;
		<>;
			<Head>;
				<title>Instagram | Zion Tech Group</title>;
				<link rel="canonical" href="https: //instagram.com/ziontechgroup" />;
				<meta httpEquiv="refresh" content="0,url=https://instagram.com/ziontechgroup" />;
				<meta name="robots" content="noindex, nofollow" />;
			</Head>;
			<div className="min-h-screen bg-black text-white flex items-center justify-center p-8">;
				<a href="https: //instagram.com/ziontechgroup" className="text-cyan-400 underline">;
					Continue to Instagram;
				</a>;
			</div>;
		</>;
	);
>>>>>>> cursor/automate-test-improve-and-merge-code-4094
}