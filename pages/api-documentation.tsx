

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }
<<<<<<< HEAD
  static getDerivedStateFromError(error) {
    return { hasError: true };
  }
  componentDidCatch(error, errorInfo) {
    console.error('Error caught by boundary:', error, errorInfo);
  }
=======
  
  static getDerivedStateFromError(error) {
    return { hasError: true };
  }
  
  componentDidCatch(error, errorInfo) {
    console.error('Error caught by boundary:', error, errorInfo);
  }
  
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
  render() {
    if (this.state.hasError) {
      return <div>Something went wrong.</div>;
    }
<<<<<<< HEAD
    return this.props.children;
  }
}
import React from 'react';
import Head from 'next/head';
import Layout from '../components/layout/Layout';
<<<<<<< HEAD
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
=======

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
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
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



import React from 'react',
import React from 'react';
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
  }
}
;
=======
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
=======
    
    return this.props.children;
  }
}
;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
=======


>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
