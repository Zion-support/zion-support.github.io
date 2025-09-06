<<<<<<< HEAD
<<<<<<< HEAD
import React from 'react',
import Head from 'next/head';
import Layout from '../components/layout/Layout';
export default function APIDocumentationPage() {
=======

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

export default function APIDocumentationPage() {;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
  return (
    <Layout>;
      <Head>;
        <title>API Documentation | Zion Tech Group</title>;
        <link
          rel='canonical'
<<<<<<< HEAD
          href='https: //ziontechgroup.com/api-documentation'
        />
      </Head>
      <section className='container mx-auto px-4 py-24'>
        <h1 className='text-4xl md:text-6xl font-bold bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 bg-clip-text text-transparent mb-6'>
          API Documentation
        </h1>
        <p className='text-gray-300'>REST and SDK references. Coming soon.</p>
      </section>
    </Layout>
  );
=======
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
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
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
			</section>
		</Layout>
	)
}
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-2156
=======
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
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
