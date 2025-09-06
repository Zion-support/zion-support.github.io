import React from 'react';
<<<<<<< HEAD
<<<<<<< HEAD
import Head from 'next/head';
=======
import Layout from '../components/Layout';
export default function TestPage() {
  return (
    <Layout title="Test Page">
      <div className="min-h-screen bg-gray-100 flex items-center justify-center">
        <h1 className="text-4xl font-bold text-gray-900">Test Page</h1>
      </div>
    </Layout>
  );
}
>>>>>>> cursor/fix-syntax-push-and-merge-to-main-7db5
=======
import Head from 'next/head';
}

>>>>>>> cursor/automate-test-improve-and-merge-code-107b
export default function TestPage() {
  return (
    <>
      <Head>
        <title>Test Page | Zion Tech Group</title>
      </Head>
      <div className='min-h-screen bg-black text-white flex items-center justify-center'>
        <h1 className='text-4xl font-bold text-cyan-400'>Test Page Working</h1>
      </div>
    </>
<<<<<<< HEAD
);
      <div className="min-h-screen bg-black text-white flex items-center justify-center">
        <h1 className="text-4xl font-bold text-cyan-400">Test Page Working</h1>
      </div>
    </>
  )
}
=======
  );
>>>>>>> cursor/automate-test-improve-and-merge-code-107b
