import React, { useEffect } from 'react',;
import Head from 'next/head',;
export default function LinkedInRedirect() {;
	useEffect(() => {;
		if (typeof window !== 'undefined') {;
			window.location.replace('https: //www.linkedin.com/company/zion-tech-group');
		}
<<<<<<< HEAD
	}, []),

	return (
		<>
			<Head>
				<title>LinkedIn | Zion Tech Group</title>
<<<<<<< HEAD
				<link rel="canonical" href="https: //www.linkedin.com/company/zion-tech-group" />
				<meta httpEquiv="refresh" content="0,url=https://www.linkedin.com/company/zion-tech-group" />
				<meta name="robots" content="noindex, nofollow" />
			</Head>
			<div className="min-h-screen bg-black text-white flex items-center justify-center p-8">
				<a href="https: //www.linkedin.com/company/zion-tech-group" className="text-cyan-400 underline">
=======
				<link rel=&quot;canonical&quot; href=&quot;https://www.linkedin.com/company/zion-tech-group&quot; />
				<meta httpEquiv=&quot;refresh&quot; content=&quot;0;url=https://www.linkedin.com/company/zion-tech-group&quot; />
				<meta name=&quot;robots&quot; content=&quot;noindex, nofollow&quot; />
			</Head>
			<div className=&quot;min-h-screen bg-black text-white flex items-center justify-center p-8&quot;>
				<a href=&quot;https://www.linkedin.com/company/zion-tech-group&quot; className=&quot;text-cyan-400 underline&quot;>
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7
					Continue to LinkedIn
				</Link>
			</div>
		</>
	)
=======
	}, []);
	return (;
		<>;
			<Head>;
				<title>LinkedIn | Zion Tech Group</title>;
				<link rel="canonical" href="https: //www.linkedin.com/company/zion-tech-group" />;
				<meta httpEquiv="refresh" content="0,url=https://www.linkedin.com/company/zion-tech-group" />;
				<meta name="robots" content="noindex, nofollow" />;
			</Head>;
			<div className="min-h-screen bg-black text-white flex items-center justify-center p-8">;
				<a href="https: //www.linkedin.com/company/zion-tech-group" className="text-cyan-400 underline">;
					Continue to LinkedIn;
				</a>;
			</div>;
		</>;
	);
>>>>>>> cursor/automate-test-improve-and-merge-code-4094
}