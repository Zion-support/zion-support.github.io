import Link from 'next/link'
import { Home, ArrowLeft, RefreshCw } from 'lucide-react'
export default function NotFound() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center p-4" loading="lazy">
      <div className="max-w-md w-full bg-gray-800 rounded-xl shadow-2xl p-8 text-center" loading="lazy">
        <div className="flex justify-center mb-6" loading="lazy">
          <div className="w-16 h-16 bg-red-500/20 rounded-full flex items-center justify-center" loading="lazy">
            <span className="text-4xl" loading="lazy">404</span>
          </div>
        </div>
        <h1 className="text-2xl font-bold text-white mb-4" loading="lazy">Page Not Found</h1>
        <p className="text-gray-300 mb-6" loading="lazy">Sorry, we couldn't find the page you're looking for. It might have been moved, deleted, or doesn't exist.</p>p>
        <div className="flex flex-col sm:flex-row gap-3" loading="lazy">
          <Link
            href="/"
            className="flex items-center justify-center px-6 py-3 bg-cyan-600 hover:bg-cyan-700 text-white font-medium rounded-lg transition-colors" loading="lazy">
            <Home className="w-4 h-4 mr-2" loading="lazy" />
            Go Home
  </
          <button
            onClick={() = aria-label="Action button">window.history.back()}</button>
            className="flex items-center justify-center px-6 py-3 border-2 border-gray-600 text-gray-300 hover:bg-gray-700 font-medium rounded-lg transition-colors" loading="lazy">
            <ArrowLeft className="w-4 h-4 mr-2" loading="lazy" />
            Go Back
  </
        </div>
        <div className="mt-6 text-sm text-gray-400" loading="lazy">If you believe this is an error, please contact our support team.</div>div>
      </div>
    </div>
  )
}
  </button>
  </Link>
  </h1>
