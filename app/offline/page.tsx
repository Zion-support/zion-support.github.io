<<<<<<< HEAD

function OfflinePage() {
  return (
    <div className="min-h-screen bg-slate-900 flex items-center justify-center px-4">
      <div className="max-w-md w-full text-center">
        <div className="mb-8">
          <div className="w-24 h-24 mx-auto mb-6 bg-slate-800 rounded-full flex items-center justify-center">
            <svg
              className="w-12 h-12 text-blue-500"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192L5.636 18.364M12 2.25a9.75 9.75 0 100 19.5 9.75 9.75 0 000-19.5z"
              />
            </svg>
=======
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Offline - Zion Tech Group',
  description: 'You are currently offline. Please check your internet connection.',
  keywords: 'offline, no internet, connection error',
  openGraph: {
    title: 'Offline - Zion Tech Group',
    description: 'You are currently offline. Please check your internet connection.',
    type: 'website',
  },
};

function Page() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <main className="pt-20 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              You're Offline
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
              Please check your internet connection and try again.
            </p>
>>>>>>> 9d27805b410bab1ceb410b64b65ce66c1275b73a
          </div>
          <h1 className="text-3xl font-bold text-white mb-4">
            You're Offline
          </h1>
          <p className="text-slate-400 mb-8">
            It looks like you're not connected to the internet. Please check your connection and try again.
          </p>
        </div>
<<<<<<< HEAD

        <div className="space-y-4">
          <button
            onClick={() => window.location.reload()}
            aria-label="Try again"
            className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-200"
          >
            Try Again
          </button>
          
          <Link
            href="/"
            className="block w-full bg-slate-800 hover:bg-slate-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-200"
          >
            Go to Homepage
          </Link>
        </div>

        <div className="mt-8 text-sm text-slate-500">
          <p>Some features may not be available offline.</p>
        </div>
      </div>
=======
      </main>
>>>>>>> 9d27805b410bab1ceb410b64b65ce66c1275b73a
    </div>
  );
}

<<<<<<< HEAD
  return (
    <ErrorBoundary>
      <OfflinePage {...props} />
    </ErrorBoundary>
  );
}
=======
export default Page;
>>>>>>> 9d27805b410bab1ceb410b64b65ce66c1275b73a
