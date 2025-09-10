export default function Custom404() {
  return (
    <Layout title="404 - Page Not Found">
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-6xl font-bold text-gray-900 mb-4">404</h1>
            <h2 className="text-2xl font-semibold text-gray-700 mb-6">Page Not Found</h2>
            <p className="text-gray-600 mb-8">The page you're looking for doesn't exist.</p>
            <div className="flex justify-center space-x-4">
              <Link href="/" className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors flex items-center">
                <Home className="w-5 h-5 mr-2" />
                Go Home
              </Link>
              <button onClick={() => window.history.back()} className="border border-gray-300 hover:bg-gray-50 text-gray-700 px-6 py-3 rounded-lg font-semibold transition-colors flex items-center">
                <ArrowLeft className="w-5 h-5 mr-2" />
                Go Back
              </button>
            </div>
          </motion.div>
        </div>
      </div>
    </Layout>
  );
}
=======
import type { NextPage } from 'next';
import Head from 'next/head';

const NotFoundPage: NextPage = () => {
  return (
    <div>
      <Head>
        <title>404 - Zion Tech Solutions</title>
        <meta name="description" content="404 page" />
      </Head>
      
      <main>
        <h1>404</h1>
        <p>This page is under construction.</p>
      </main>
    </div>
  );
};

export default NotFoundPage;