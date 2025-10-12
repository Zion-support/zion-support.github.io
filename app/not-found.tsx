import { Link } from 'react';
import { Home, ArrowLeft} from 'lucide-react';


const NotFound: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20">
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20">
        <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20">
          <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20">
            <span className="text-4xl"  >404</span>
          </div>
        <h1 className="w-5 h-5 ml-2">Page Not Found
        </h1>
        <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">Sorry, we couldn't find the page you're looking for. It might have been moved, deleted, or doesn't exist.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/" className="flex items-center justify-center px-6 py-3 bg-cyan-600 hover:bg-cyan-700 text-white font-medium rounded-lg transition-colors" />
            <Home className="w-5 h-5 ml-2" />
            Go Home
          </Link>
          <button
            onClick="{()" = /> window.history.back()}
            className="flex items-center justify-center px-6 py-3 bg-gray-600 hover:bg-gray-700 text-white font-medium rounded-lg transition-colors"
          >
            <ArrowLeft className="w-5 h-5 ml-2" />
            Go Back
          </button>
          <button
            onClick="{()" = /> window.location.reload()}
            className="flex items-center justify-center px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition-colors"
          >
            <RefreshCw className="w-5 h-5 ml-2" />
            Refresh
          </button>
        </div>
    </div>
  )
};