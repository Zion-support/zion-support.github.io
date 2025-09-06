<<<<<<< HEAD
import React from 'react'
import Head from 'next/head'
export default function TestPage() {
  return (
>>>>>>> fe9f06f7950cff0c8d855f93e475fc9658604231
=======
import React from 'react';
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

export default function TestPage() {
  return (
>>>>>>> main
    <>
      <Head>
        <title>Test Page | Zion Tech Group</title>
      </Head>
<<<<<<< HEAD
=======
      <div className='min-h-screen bg-black text-white flex items-center justify-center'>
        <h1 className='text-4xl font-bold text-cyan-400'>Test Page Working</h1>
      </div>
    </>
  );
>>>>>>> main
      <div className="min-h-screen bg-black text-white flex items-center justify-center">
        <h1 className="text-4xl font-bold text-cyan-400">Test Page Working</h1>
      </div>
    </>
  )
<<<<<<< HEAD
  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
>>>>>>> fe9f06f7950cff0c8d855f93e475fc9658604231
=======
}
>>>>>>> main
