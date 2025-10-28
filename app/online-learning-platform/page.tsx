import ErrorBoundary from '../components/ErrorBoundary';
import Head from 'next/head';
import Footer from '../components/Footer';

export const metadata = {
  title: 'Online Learning Platform | Zion Tech Group',
  description: 'Advanced online learning platform solutions by Zion Tech Group.',
  keywords: 'online, learning, platform, education, technology, services',
  openGraph: {
    title: 'Online Learning Platform | Zion Tech Group',
    description: 'Advanced online learning platform solutions by Zion Tech Group.',
    type: 'website',
  },
};

function Page() {
  return (
    <div>
      <Head>
        <title>Online Learning Platform - Zion Tech Group</title>
        <meta name="description" content="Advanced online learning platform solutions by Zion Tech Group." />
      </Head>
      <main className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">
          <h1 className="text-4xl font-bold text-white mb-6">
            Online Learning Platform
          </h1>
          <p className="text-xl text-gray-300 mb-8">
            Advanced online learning platform solutions.
          </p>
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-8">
            <h2 className="text-2xl font-semibold text-white mb-4">Coming Soon</h2>
            <p className="text-gray-300">
              This service is currently under development. Contact us to learn more about our upcoming online learning platform solutions.
            </p>
          </div>
        </div>
        <Footer />
      </main>
    </div>
  );
}

export default function Wrapped(props: Record<string, unknown>) {
  return (
    <ErrorBoundary>
      <Page {...props} />
    </ErrorBoundary>
  );
}