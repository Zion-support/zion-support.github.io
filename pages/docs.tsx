<<<<<<< HEAD

import React from 'react';

import Head from 'next/head';
import Layout from '../components/layout/Layout';
=======
import React from 'react'
import Head from 'next/head'
import Layout from '../components/layout/Layout'
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
export default function DocsPage() {
	return (
>>>>>>> fe9f06f7950cff0c8d855f93e475fc9658604231
		<Layout>
			<Head>
				<title>Documentation | Zion Tech Group</title>
				<link rel="canonical" href="https://ziontechgroup.com/docs" />
			</Head>
			<section className="container mx-auto px-4 py-24">
				<h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 bg-clip-text text-transparent mb-6">Documentation</h1>
				<p className="text-gray-300">Guides, API docs, and best practices. Coming soon.</p>
			</section>
		</Layout>
	)
<<<<<<< HEAD
}
=======
  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
;
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
