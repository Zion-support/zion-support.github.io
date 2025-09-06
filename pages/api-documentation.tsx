<<<<<<< HEAD
import React from 'react',
<<<<<<< HEAD
=======
<<<<<<< HEAD
import React from 'react';
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
import Head from 'next/head';
import Layout from '../components/layout/Layout';
<<<<<<< HEAD
=======
}

>>>>>>> cursor/automate-test-improve-and-merge-code-107b
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
<<<<<<< HEAD
    </Layout>
<<<<<<< HEAD
  );
=======
  );
>>>>>>> cursor/automate-test-improve-and-merge-code-107b
=======
    </Layout>;
  );
<<<<<<< HEAD
=======
=======

}
=======
import React from 'react',
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
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
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> 13634787e684d7d55cdaba499887f35eabc95f85
