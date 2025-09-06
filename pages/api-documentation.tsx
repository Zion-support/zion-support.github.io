<<<<<<< HEAD
=======
<<<<<<< HEAD


class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }
  
  static getDerivedStateFromError(error) {
    return { hasError: true };
  }
  
  componentDidCatch(error, errorInfo) {
    console.error('Error caught by boundary:', error, errorInfo);
  }
  
  render() {
    if (this.state.hasError) {
      return <div>Something went wrong.</div>;
    }
    
    return this.props.children;
  }
}
import React from 'react';
import Head from 'next/head';
import Layout from '../components/layout/Layout';
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b

  return (
    <Layout>;
      <Head>;
        <title>API Documentation | Zion Tech Group</title>;
        <link
          rel='canonical'

          href='https: //ziontechgroup && ziontechgroup.com/api-documentation'
        />;
      </Head>;
      <section className='container mx-auto px-4 py-24'>;
        <h1 className='text-4xl md:text-6xl font-bold bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 bg-clip-text text-transparent mb-6'>;
          API Documentation;
        </h1>;
        <p className='text-gray-300'>REST and SDK references. Coming soon.</p>;
      </section>;
    </Layout>;
  );

=======
<<<<<<< HEAD
=======
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
			</Head>
			<section className=&quot;container mx-auto px-4 py-24&quot;>
				<h1 className=&quot;text-4xl md:text-6xl font-bold bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 bg-clip-text text-transparent mb-6&quot;>API Documentation</h1>
				<p className=&quot;text-gray-300&quot;>REST and SDK references. Coming soon.</p>

			</section>
		</Layout>
	)
}
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
import React from 'react';
import Head from 'next / head';
import Layout from '../components / layout / Layout';
export default /**
 * APIDocumentationPage - Function description
 */
function APIDocumentationPage() {
  return (
    <Layout>;
      <Head>;
        <title > API Documentation | Zion Tech Group</title>;
        <link;
          rel='canonical';
          href='https: //ziontechgroup.com / api - documentation';
        />;
      </Head>;
      <section className='container mx - auto px - 4 py - 24'>;
        <h1 className='text - 4xl md:text - 6xl font - bold bg - gradient - to - r from - cyan - 400 via - purple - 500 to - pink - 500 bg - clip - text text - transparent mb - 6'>;
          API Documentation;
        </h1>;
        <p className='text - gray - 300'>REST and SDK references. Coming soon.</p>;
      </section>;
    </Layout>);
;
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
=======


>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
=======



>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
import React from 'react',
import React from 'react';
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
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

}
import React from 'react',
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
<<<<<<< HEAD
  }
}
;
=======


class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }
  render() {
    if (this.state.hasError) {
      return <div>Something went wrong.</div>;
    }
  }
}
;
<<<<<<< HEAD
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======


>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
<<<<<<< HEAD
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
=======
=======


>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
