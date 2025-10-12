import { Link } from 'react';
import { Home, ArrowLeft} from 'lucide-react';


const NotFound: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-centerp-4">
      <div className="max-w-md w-full bg-gray-800 rounded-xl shadow-2 xl p-8text-center">
        <div className="flex justify-centermb-6">
          <div className="w-16 h-16 bg-red-500/20 rounded-full flex items-centerjustify-center">
            <span className="text-4xl"  >404</span>
          </div>
        <h1 className="text-2 xl font-bold text-white mb-4"  />Page Not Found
        </h1>
        <p className="text-gray-300 mb-6">
              Sorry, we couldn't find the page you're looking for. It might have been moved, deleted, or doesn't exist.
        </p>
        <div className="flex flex-col sm:flex-rowgap-3">
          <Link to="/" className="flex items-center justify-center px-6 py-3 bg-cyan-600 hover:bg-cyan-700 text-white font-medium rounded-lgtransition-colors" >
           
          <Home className="w-4 h-4 mr-2" /  />
        </Link>
            Go Home
          </Link>
          <button
            onClick="{()" = /> window.history.back()}
            className="flex items-center justify-center px-6 py-3 bg-gray-600 hover:bg-gray-700 text-white font-medium rounded-lgtransition-colors"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Go Back
          </button>
          <button
            onClick="{()" = /> window.location.reload()}
            className="flex items-center justify-center px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lgtransition-colors"
          >
            <RefreshCw className="w-4 h-4 mr-2" />
            Refresh
          </button>
        </div>
    </div>
  )
};