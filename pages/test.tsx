
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
<<<<<<< HEAD
<<<<<<< HEAD
import Layout from '../components/Layout';
=======
<<<<<<< HEAD
import Layout from '../components/Layout';
=======
import Head from 'next/head';
<<<<<<< HEAD
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-c7b5
>>>>>>> origin/automation-improvements-final
=======
>>>>>>> fd9cd2d2f8d32fcc77768547645dd1d80b314e27

<<<<<<< HEAD
import Layout from '../components/Layout';
export default function TestPage() {
  return (
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> origin/automation-improvements-final
    <Layout title="Test Page">
      <div className="min-h-screen bg-gray-100 flex items-center justify-center">
        <h1 className="text-4xl font-bold text-gray-900">Test Page</h1>
      </div>
    </Layout>
<<<<<<< HEAD
=======
=======
    <>
      <Head>
        <title>Test Page | Zion Tech Group</title>
      </Head>
<<<<<<< HEAD
      <div className='min-h-screen bg-black text-white flex items-center justify-center'>
        <h1 className='text-4xl font-bold text-cyan-400'>Test Page Working</h1>
      </div>
    </>
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-c7b5
>>>>>>> origin/automation-improvements-final
=======
export default function TestPage() {;
  return (
    <Layout title="Test Page">;
      <div className="min-h-screen bg-gray-100 flex items-center justify-center">;
        <h1 className="text-4xl font-bold text-gray-900">Test Page</h1>;
      </div>;
    </Layout>;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
  );
}

export default function TestPage() {;
  return (
<<<<<<< HEAD
    <>
      <Head>
        <title>Test Page | Zion Tech Group</title>
      </Head>
      <div className='min-h-screen bg-black text-white flex items-center justify-center'>
        <h1 className='text-4xl font-bold text-cyan-400'>Test Page Working</h1>
      </div>
    </>
);
      <div className="min-h-screen bg-black text-white flex items-center justify-center">
        <h1 className="text-4xl font-bold text-cyan-400">Test Page Working</h1>
      </div>
    </>
  )
}
=======
    <>;
      <Head>;
        <title>Test Page | Zion Tech Group</title>;
      </Head>;
      <div className='min-h-screen bg-black text-white flex items-center justify-center'>;
        <h1 className='text-4xl font-bold text-cyan-400'>Test Page Working</h1>;
      </div>;
    </>;
  );
      <div className="min-h-screen bg-black text-white flex items-center justify-center">;
        <h1 className="text-4xl font-bold text-cyan-400">Test Page Working</h1>;
      </div>;
    </>;
  );
}
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
