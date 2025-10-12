import React from 'react';
import { Link } from 'react';
import { Home, ArrowLeft} from 'lucide-react';


const NotFound: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center p-4">
        <div className="max-w-md w-full bg-gray-800 rounded-xl shadow-2xl p-8 text-center">
        <div className="flex justify-center mb-6">
        <div className="w-16h-16bg-red-500/20 rounded-full flex items-center justify-center">
            <span className="text-4xl"  >404</span>
          </div>
        </div>
        <h1 className="text-2xlfont-bold text-whitemb-4"  />Page Not Found
        </h1>
        <p className="text-gray-300 mb-6">
          Sorry, we couldn't find the page you're looking for. It might have been moved, deleted, or doesn't exist.
        </p>
        <div className="flex flex-col sm:flex-row gap-3" />
          <Link
            to="/"
            className="flex items-center justify-center px-6py-3bg-cyan-600 hover:bg-cyan-700 text-whitefont-medium rounded-lg transition-colors"
           />
            <Home className="w-4h-4mr-2" />
            Go Home
          </Link>
          <button
            onClick="{()" = /> window.history.back()}
            className="flex items-center justify-center px-6py-3bg-gray-600 hover:bg-gray-700 text-whitefont-medium rounded-lg transition-colors"
          >
            <ArrowLeft className="w-4h-4mr-2" />
            Go Back
          </button>
          <button
            onClick="{()" = /> window.location.reload()}
            className="flex items-center justify-center px-6py-3bg-blue-600 hover:bg-blue-700 text-whitefont-medium rounded-lg transition-colors"
          >
            <RefreshCw className="w-4h-4mr-2" />
            Refresh
          </button>
        </div>
      </div>
    </div>
  )
};