import React from 'react';
<<<<<<< HEAD
import MainLayout from '../components/layout/MainLayout';

export default function TestPage() {
  return (
    <MainLayout title="Test Page - Zion Tech Group">
      <div className="container mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold mb-8">Test Page</h1>
        <p className="text-lg text-gray-700">
          This is a test page.
        </p>
      </div>
    </MainLayout>
  );
}
=======
import Layout from '../components/Layout';
import Layout from '../components/Layout';
import Head from 'next/head';
origin/cursor/integrate-build-improve-and-re-verify-c7b5
ursor/integrate-build-improve-and-re-verify-8f7d
origin/main
origin/automation-improvements-final



export default function TestPage() {
  return (
ursor/integrate-build-improve-and-re-verify-8f7d
origin/automation-improvements-final
    <Layout title="Test Page">
      <div className="min-h-screen bg-gray-100 flex items-center justify-center">
        <h1 className="text-4xl font-bold text-gray-900">Test Page</h1>
      </div>
    <>
      <Head>
        <title>Test Page | Zion Tech Group</title>
      </Head>

  );
}

export default function TestPage() {;
  return (




    <>
      <Head>
        <title>Test Page | Zion Tech Group</title>
      </Head>
      <div className='min-h-screen bg-black text-white flex items-center justify-center'>
        <h1 className='text-4xl font-bold text-cyan-400'>Test Page Working</h1>
      </div>

    </Layout>;
  );
}
import React from 'react'
import Head from 'next/head'
export default function TestPage() {
  return (
ursor/integrate-build-improve-and-re-verify-8f7d
    <>
      <Head>
        <title>Test Page | Zion Tech Group</title>
      </Head>
      <div className='min-h-screen bg-black text-white flex items-center justify-center'>
        <h1 className='text-4xl font-bold text-cyan-400'>Test Page Working</h1>
      </div>
    </>
origin/cursor/integrate-build-improve-and-re-verify-c7b5
ursor/integrate-build-improve-and-re-verify-8f7d
  );
    </>;
);
origin/main
);
      <div className="min-h-screen bg-black text-white flex items-center justify-center">
        <h1 className="text-4xl font-bold text-cyan-400">Test Page Working</h1>
      </div>
    </>
  )
  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
}
>>>>>>> c56320a4e91ebfd91859a6eed8c13818d8c9efd6
