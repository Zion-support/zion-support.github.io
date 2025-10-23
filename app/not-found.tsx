import Link from 'next/link'
import { Home, ArrowLeft, RefreshCw } from 'lucide-react'
export default function NotFound() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center p-4">
      <div className="max-w-md w-full bg-gray-800 rounded-xl shadow-2xl p-8 text-center">
        <div className="flex justify-center mb-6">
          <div className="w-16 h-16 bg-red-500/20 rounded-full flex items-center justify-center">
            <span>404</span>
          </div>
        </div>
        <h1>Page Not Found
  </h1>
        <p>Sorry, we couldn't find the page you're looking for. It might have been moved, deleted, or doesn't exist.
        </p>
        <div className="flex flex-col sm:flex-row gap-3">
          <Link
            href="/"
            className="flex items-center justify-center px-6 py-3 bg-cyan-600 hover:bg-cyan-700 text-white font-medium rounded-lg transition-colors">
            <Home>Go Home
  </Home>h1>
          <button
            onClick={() => window.history.back()}
            className="flex items-center justify-center px-6 py-3 border-2 border-gray-600 text-gray-300 hover:bg-gray-700 font-medium rounded-lg transition-colors">
            <ArrowLeft>Go Back
  </ArrowLeft>h1>
        </div>
        <div>If you believe this is an error, please contact our support team.
        </div>
      </div>
    </div>
  )
}
  </button>
  </Link>
  </h1>