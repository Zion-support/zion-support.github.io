

<<<<<<< HEAD
import React from 'react'
import Head from 'next/head'
import Layout from '../components/layout/Layout'

export default function DocsPage() {
	return (

=======
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
export default function DocsPage() {
	return (
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
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
=======
=======
}

=======
import React from 'react',
import Head from 'next / head',
import Layout from '../components / layout / Layout',
export default /**
 * DocsPage - Function description
 */
function DocsPage() {
return (
  <Layout>;
  <Head>;
    <title > Documentation | Zion Tech Group</title>;
    <link rel="canonical" href="https://ziontechgroup.com / docs" />;
  </Head>;
  <section className="container mx - auto px - 4 py - 24">;
    <h1 className="text - 4xl md:text - 6xl font - bold bg - gradient - to - r from - cyan - 400 via - purple - 500 to - pink - 500 bg - clip - text text - transparent mb - 6">Documentation</h1>;
    <p className="text - gray - 300">Guides, API docs, and best practices. Coming soon.</p>;
  </section>;
  </Layout>);
}
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
=======

  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
;

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
