import { useLocation } from &quot;react-router-dom&quot;;
import { useEffect } from &quot;react&quot;;

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      &quot;404 Error: User attempted to access non-existent route:&quot;,
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className=&quot;min-h-screen flex items-center justify-center bg-gray-100&quot;>
      <div className=&quot;text-center&quot;>
        <h1 className=&quot;text-4xl font-bold mb-4&quot;>404</h1>
        <p className=&quot;text-xl text-gray-600 mb-4&quot;>Oops! Page not found</p>
        <a href=&quot;/&quot; className=&quot;text-blue-500 hover:text-blue-700 underline&quot;>
          Return to Home
        </Link>
      </div>
    </div>
  );
};

export default NotFound;