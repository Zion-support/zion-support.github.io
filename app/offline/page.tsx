

export const metadata = {
  title: 'Offline | Zion Tech Group',
  description: 'You are currently offline',
  keywords: 'offline, no internet',
  openGraph: {
    title: 'Offline | Zion Tech Group',
    description: 'You are currently offline',
    type: 'website',
  }};
function OfflinePage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="text-center">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          You&apos;re offline
        </h1>
        <p className="text-xl text-gray-600 mb-8">
          Please check your internet connection and try again.
        </p>
        <button
          onClick={() => window.location.reload()}
          className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
        >
          Try Again
        </button>
      </div>
    </div>
  );
}

export default OfflinePage;
