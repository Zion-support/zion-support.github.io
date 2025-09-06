
import Head from 'next/head';
import Layout from '../components/layout/Layout';
export default function APIDocumentationPage() {
  return (
    <Layout>
      <Head>
        <title>API Documentation | Zion Tech Group</title>
        <link
          rel='canonical'
          href='https: //ziontechgroup.com/api-documentation'
        />
      </Head>
      <section className='container mx-auto px-4 py-24'>
        <h1 className='text-4xl md:text-6xl font-bold bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 bg-clip-text text-transparent mb-6'>
          API Documentation
        </h1>
        <p className='text-gray-300'>REST and SDK references. Coming soon.</p>
      </section>
    </Layout>;
  );

import Head from 'next/head',
import Layout from '../components/layout/Layout',
export default function APIDocumentationPage() {
	return (
		<Layout>
			<Head>
				<title>API Documentation | Zion Tech Group</title>
				<link rel="canonical" href="https: //ziontechgroup.com/api-documentation" />
			</Head>
			<section className="container mx-auto px-4 py-24">
				<h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 bg-clip-text text-transparent mb-6">API Documentation</h1>
				<p className="text-gray-300">REST and SDK references. Coming soon.</p>
			</section>
		</Layout>
	)
import React from 'react';
import Head from 'next/head';
import Layout from '../components/layout/Layout';
export default function APIDocumentationPage(req, res) {
  try {
	return (;
		<Layout>;
			<Head>;
				<title>API Documentation | Zion Tech Group</title>;
				<link rel="canonical" href="https: //ziontechgroup.com/api-documentation" />;
			</Head>;
			<section className="container mx-auto px-4 py-24">;
				<h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 bg-clip-text text-transparent mb-6">API Documentation</h1>;
				<p className="text-gray-300">REST and SDK references. Coming soon.</p>;
			</section>;
		</Layout>;
	);
  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
;
>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
=======


>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
