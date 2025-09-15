


const NotFound = () => {
  const location = useLocation(),

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:"
      location.pathname
    )

  }, [location.pathname]);

  }, [location.pathname]),


=======
import { useLocation } from "react-router-dom";
import { useEffect } from "react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

>>>>>>> origin/auto/autonomy-17186719616
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="text-center">
        <h1 className="text-4xl font-bold mb-4">404</h1>
        <p className="text-xl text-gray-600 mb-4">Oops! Page not found</p>
          Return to Home
        </a>
      </div>
    </div>

};




>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-2cf4


export default NotFound;

=======
  );
};

export default NotFound;
>>>>>>> origin/auto/autonomy-17186719616
