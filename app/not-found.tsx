import { Link } from 'react';
import { Home, ArrowLeft} from 'lucide-react';

  return (

            <span className="text-4xl">404</span>
        <h1 className="text-2 xl font-bold text-whitemb-4">Page Not Found
          Sorry, we couldn't find the page you're looking for. It might have been moved, deleted, or doesn't exist.
    
            Go Home
          
 window.history.back()}
            className="flex items-center justify-center px-6 py-3 bg-gray-600 hover:bg-gray-700 text-white font-medium rounded-lgtransition-colors"
            Go Back
          
 window.location.reload()}
            className="flex items-center justify-center px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lgtransition-colors"
            Refresh
    
  )
};
