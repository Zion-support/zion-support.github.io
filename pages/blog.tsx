<<<<<<< HEAD
import React, { useState } from 'react',;
import Head from 'next/head',;
import Layout from '../components/layout/Layout',;
=======
import React, { useState } from 'react',
import Head from 'next/head'
import Layout from '../components/layout/Layout'
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
export default function BlogPage() {
	return (
>>>>>>> fe9f06f7950cff0c8d855f93e475fc9658604231
		<Layout>
			<Head>
				<title>Blog | Zion Tech Group</title>
				<link rel="canonical" href="https://ziontechgroup.com/blog" />
			</Head>
			<section className="container mx-auto px-4 py-24">
				<h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 bg-clip-text text-transparent mb-6">Blog & News</h1>
				<p className="text-gray-300">Insights, guides, and announcements. New content coming soon.</p>
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
