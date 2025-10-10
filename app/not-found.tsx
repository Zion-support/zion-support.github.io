import Link from 'next/link';
import { Home, ArrowLeft, RefreshCw } from 'lucide-react';

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
            <Home className="w-4 h-4 mr-2" />
            Go Home
          </Link>
          <button
            onClick={() => window.history.back()}
            className="flex items-center justify-center px-6 py-3 border-2 border-gray-600 text-gray-300 hover:bg-gray-700 font-medium rounded-lg transition-colors"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Go Back
          </button>
        </div>
        <div className="mt-6 text-sm text-gray-400">
          If you believe this is an error, please contact our support team.
        </div>
      </div>
    </div>
  );
}