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
import Layout from '../components/Layout';
import Layout from '../components/Layout';

import Layout from '../components/Layout';
export default function TestPage() {
  return (
=======
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
import React from 'react';
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> ed23a41deefdd5db733dc5d1577e62259b173127
import Layout from '../components/Layout';
=======
=======
>>>>>>> cursor/integrate-build-improve-and-re-verify-8b20
<<<<<<< HEAD
import Layout from '../components/Layout';
=======
import Head from 'next/head';
<<<<<<< HEAD
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-c7b5
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> cursor/integrate-build-improve-and-re-verify-8f7d
=======
>>>>>>> origin/main
=======
>>>>>>> origin/automation-improvements-final
=======
>>>>>>> fd9cd2d2f8d32fcc77768547645dd1d80b314e27
>>>>>>> ed23a41deefdd5db733dc5d1577e62259b173127
=======

=======
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
import Layout from '../components/Layout';
>>>>>>> cursor/integrate-build-improve-and-re-verify-8b20



export default function TestPage() {
  return (
<<<<<<< HEAD
<<<<<<< HEAD
=======
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> cursor/integrate-build-improve-and-re-verify-8f7d
=======
>>>>>>> origin/automation-improvements-final
>>>>>>> ed23a41deefdd5db733dc5d1577e62259b173127
=======
>>>>>>> cursor/integrate-build-improve-and-re-verify-8b20
>>>>>>> cursor/merge-pull-requests-and-resolve-conflicts-52f5
    <Layout title="Test Page">
      <div className="min-h-screen bg-gray-100 flex items-center justify-center">
        <h1 className="text-4xl font-bold text-gray-900">Test Page</h1>
      </div>
<<<<<<< HEAD
    </Layout>
      <div className='min-h-screen bg-black text-white flex items-center justify-center'>
        <h1 className='text-4xl font-bold text-cyan-400'>Test Page Working</h1>
      </div>
    </>
=======
<<<<<<< HEAD
<<<<<<< HEAD
    </Layout>
<<<<<<< HEAD
<<<<<<< HEAD
=======
    </Layout>
  );
<<<<<<< HEAD
}
>>>>>>> origin/main
export default function TestPage() {
>>>>>>> cursor/integrate-build-improve-and-re-verify-8b20
=======
=======
=======
    <>
      <Head>
        <title>Test Page | Zion Tech Group</title>
      </Head>

>>>>>>> cursor/merge-pull-requests-and-resolve-conflicts-52f5
export default function TestPage() {;
  return (
    <Layout title="Test Page">;
      <div className="min-h-screen bg-gray-100 flex items-center justify-center">;
        <h1 className="text-4xl font-bold text-gray-900">Test Page</h1>;
      </div>;
    </Layout>;
  );
}

=======
    </Layout>;
  );
}
=======
import React from 'react'
import Head from 'next/head'
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
export default function TestPage() {
  return (
<<<<<<< HEAD
=======
<<<<<<< HEAD
<<<<<<< HEAD
=======

=======
>>>>>>> cursor/integrate-build-improve-and-re-verify-8f7d
=======
>>>>>>> ed23a41deefdd5db733dc5d1577e62259b173127
=======
    <Layout title="Test Page">
      <div className="min-h-screen bg-gray-100 flex items-center justify-center">
        <h1 className="text-4xl font-bold text-gray-900">Test Page</h1>
      </div>
    </Layout>
=======
>>>>>>> cursor/integrate-build-improve-and-re-verify-8b20
>>>>>>> cursor/merge-pull-requests-and-resolve-conflicts-52f5
    <>
      <Head>
        <title>Test Page | Zion Tech Group</title>
      </Head>
      <div className='min-h-screen bg-black text-white flex items-center justify-center'>
        <h1 className='text-4xl font-bold text-cyan-400'>Test Page Working</h1>
      </div>
<<<<<<< HEAD
    </>
=======
<<<<<<< HEAD
<<<<<<< HEAD
    </>
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
    </>
<<<<<<< HEAD
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-c7b5
=======
<<<<<<< HEAD
>>>>>>> origin/main
  );
      <div className="min-h-screen bg-black text-white flex items-center justify-center">
>>>>>>> cursor/integrate-build-improve-and-re-verify-8b20
=======
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-c7b5
>>>>>>> cursor/integrate-build-improve-and-re-verify-8f7d
  );
=======
=======
=======
    </>;
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> cursor/merge-pull-requests-and-resolve-conflicts-52f5
);
      <div className="min-h-screen bg-black text-white flex items-center justify-center">
        <h1 className="text-4xl font-bold text-cyan-400">Test Page Working</h1>
      </div>
    </>
  )
<<<<<<< HEAD
}
=======
<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
}
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-2156
=======
>>>>>>> cursor/merge-pull-requests-and-resolve-conflicts-52f5
import React from 'react';
import Layout from '../components / Layout';
;
export default /**
 * TestPage - Function description
 */
function TestPage() {
  return (
    <Layout title="Test Page">;
      <div className="min - h-screen bg - gray - 100 flex items - center justify - center">;
        <h1 className="text - 4xl font - bold text - gray - 900">Test Page</h1>;
      </div>;
    </Layout>);
}
<<<<<<< HEAD
export default /**
 * TestPage - Function description
 */
function TestPage() {
  return (
    <>;
      <Head>;
        <title > Test Page | Zion Tech Group</title>;
      </Head>;
      <div className='min - h-screen bg - black text - white flex items - center justify - center'>;
        <h1 className='text - 4xl font - bold text - cyan - 400'>Test Page Working</h1>;
      </div>;
    </>);
      <div className="min - h-screen bg - black text - white flex items - center justify - center">;
        <h1 className="text - 4xl font - bold text - cyan - 400">Test Page Working</h1>;
      </div>;
    </>);
}
=======
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
<<<<<<< HEAD
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
>>>>>>> origin/main
>>>>>>> cursor/integrate-build-improve-and-re-verify-8b20
>>>>>>> cursor/merge-pull-requests-and-resolve-conflicts-52f5
