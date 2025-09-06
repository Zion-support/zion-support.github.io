<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b9a5
>>>>>>> 6ec30c26c0294cd39ef2c2dddb0e1600b3891ed1


import Head from 'next/head';
import Layout from '../components/layout/Layout';
<<<<<<< HEAD
=======
import React, { useState } from 'react',;
import Head from 'next/head',;
import Layout from '../components/layout/Layout',;
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
=======
import React, { useState } from 'react',
import Head from 'next/head'
import Layout from '../components/layout/Layout'
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
=======
import React, { useState } from 'react',;
import Head from 'next/head',;
import Layout from '../components/layout/Layout',;
import React, { useState } from 'react',
import Head from 'next/head'
import Layout from '../components/layout/Layout'
=======


>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
>>>>>>> 6ec30c26c0294cd39ef2c2dddb0e1600b3891ed1
export default function BlogPage() {
	return (
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
}
  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
;
