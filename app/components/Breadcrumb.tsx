import { ChevronRight, Home } from 'lucide-react';

const Breadcrumb: React.FC = () => {
  const location = useLocation();
  
  const pathSegments = location.pathname
    .split('/')
    .filter(segment => segment !== '')
    .map((segment, index, array) => ({
      name: segment.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase()),
      path: '/' + array.slice(0, index + 1).join('/'),
      isLast: index === array.length - 1
    }));

  if (pathSegments.length === 0) {
    return null;
  }

  return (
    <nav 
      className="bg-slate-800/50 backdrop-blur-sm border-b border-slate-700/50 py-3 px-4"
      aria-label="Breadcrumb"
    >
      <div className="max-w-7xl mx-auto">
        <ol className="flex items-center space-x-2 text-sm">
          <li>
            <Link 
              to="/" 
              className="text-gray-400 hover:text-white transition-colors duration-200 flex items-center"
              aria-label="Home"
            >
              <Home className="w-4 h-4" />
              <span className="sr-only">Home</span>
            </Link>
          </li>
          
          {pathSegments.map((segment, index) => (
            <li key={segment.path} className="flex items-center">
              <ChevronRight className="w-4 h-4 text-gray-500 mx-2" />
              {segment.isLast ? (
                <span 
                  className="text-white font-medium"
                  aria-current="page"
                >
                  {segment.name}
                </span>
              ) : (
                <Link 
                  to={segment.path}
                  className="text-gray-400 hover:text-white transition-colors duration-200"
                >
                  {segment.name}
                </Link>
              )}
            </li>
          ))}
        </ol>
      </div>
    </nav>
  );
};

export default Breadcrumb;