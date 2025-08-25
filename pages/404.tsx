<<<<<<< HEAD
=======
import type { NextPage } from 'next';
>>>>>>> autobot/2025-08-24T03-49-38-332Z
import Head from 'next/head';

const NotFoundPage: NextPage = () => {
  return (
    <div>
      <Head>
        <title>404 - Zion Tech Solutions</title>
        <meta name="description" content="404 page" />
      </Head>
<<<<<<< HEAD
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">404 – Page Not Found</h1>
          <p className="text-xl text-zinc-600 dark:text-zinc-400 mb-8 max-w-2xl mx-auto">
            We couldn&apos;t find the page you&apos;re looking for. It might have been moved, deleted, or you entered the wrong URL.
          </p>
          <button 
            onClick={() => router.push('/')}
            className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors"
          >
            Go Home
          </button>
        </div>
      </div>
    </>
=======
      
      <main>
        <h1>404</h1>
        <p>This page is under construction.</p>
      </main>
    </div>
>>>>>>> autobot/2025-08-24T03-49-38-332Z
  );
};

export default NotFoundPage;