import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center p-4">
      <div className="max-w-md w-full bg-gray-800 rounded-xl shadow-2xl p-8 text-center">
        <div className="flex justify-center mb-6">
          <div className="w-16 h-16 bg-red-500/20 rounded-full flex items-center justify-center">
            <span className="text-4xl">404</span>
          </div>
        </div>
        <h1 className="text-2xl font-bold text-white mb-4">
          Page Not Found
        </h1>
        <p className="text-gray-300 mb-6">
          Sorry, we couldn't find the page you're looking for. It might have been moved, deleted, or doesn't exist.
        </p>
        <div className="flex flex-col sm:flex-row gap-3">
          <Link
            href="/"
            className="flex items-center justify-center px-6 py-3 bg-cyan-600 hover:bg-cyan-700 text-white font-medium rounded-lg transition-colors"
          >
            Go Home
          </Link>
          <a
            href="javascript:history.back()"
            className="flex items-center justify-center px-6 py-3 border border-gray-600 hover:border-gray-500 text-gray-300 font-medium rounded-lg transition-colors"
          >
            Go Back
          </a>
          <a
            href="javascript:location.reload()"
            className="flex items-center justify-center px-6 py-3 border border-gray-600 hover:border-gray-500 text-gray-300 font-medium rounded-lg transition-colors"
          >
            Refresh
          </a>
        </div>
      </div>
    </div>
  );
}