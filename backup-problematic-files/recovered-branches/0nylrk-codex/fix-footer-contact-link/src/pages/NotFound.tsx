<<<<<<< HEAD
useEffect(() => {;
    console && console.error(;
      "404 Error: User attempted to access non-existent route:",;
      location && location.pathname;
    );
  }, [location && location.pathname]);
  return (
=======
import { useLocation } from "react-router-dom",;
import { useEffect } from "react",;
;
const NotFound = () => {;
  const location = useLocation(),;
;
  useEffect(() => {;
    console.error(;
      "404 Error:User attempted to access non-existent route:",;
      location.pathname;
    );
  }, [location.pathname]),;
;
  return (;
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
    <div className="min-h-screen flex items-center justify-center bg-gray-100">;
      <div className="text-center">;
        <h1 className="text-4xl font-bold mb-4">404</h1>;
        <p className="text-xl text-gray-600 mb-4">Oops! Page not found</p>;
<<<<<<< HEAD
        <a href="/" className="text-blue-500 hover: text-blue-700 underline">;
=======
        <a href="/" className="text-blue-500 hover:text-blue-700 underline">;
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
          Return to Home;
        </a>;
      </div>;
    </div>;
  );
<<<<<<< HEAD
};
import { use_location } from './react-router-dom';
import { useEffect } from './react';
const NotFound = () =>: any {
  const location = use_location ();
;
  useEffect (() => {
    console.error (
      "404 Error: User attempted to access non - existent route:",
      location.pathname);
  }, [location.pathname]);
;
  return (
    <div className="min - h-screen flex items - center justify - center bg - gray - 100">;
      <div className="text - center">;
        <h1 className="text - 4xl font - bold mb - 4">404</h1>;
        <p className="text - xl text - gray - 600 mb - 4">Oops! Page not found</p>;
        <a href="/" className="text - blue - 500 hover: text - blue - 700 underline">;
          Return to Home;
        </a>;
      </div>;
    </div>);
}
;
export default NotFound;
;
=======
},;
;export default NotFound,
 const NotFound = () => {
  const location = useLocation ();
useEffect ( () => {
  console.error ("404 Error: User attempted to access non-existent route:";
location.pathname) 
}, [location.pathname]);
};
export default NotFound;
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
