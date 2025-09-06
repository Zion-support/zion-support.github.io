
<<<<<<< HEAD

=======
import {useLocation} from "react-router-dom";
import {useEffect} from "react";
const NotFound = () => {
  const location = useLocation();
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
import { useLocation } from "react-router-dom",
import { useEffect } from "react",
import {useLocation} from "react-router-dom";
import {useEffect} from "react";
import { useLocation } from "react-router-dom",
import { useEffect } from "react",
<<<<<<< HEAD


const NotFound = () => {
  const location = useLocation(),

>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
=======
const NotFound = () => {
  const location = useLocation(),

const NotFound = () => {
  const location = useLocation(),

>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:"
      location.pathname
    )


  }, [location.pathname]),



<<<<<<< HEAD
=======
  }, [location.pathname]);
  }, [location.pathname]),

>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="text-center">
        <h1 className="text-4xl font-bold mb-4">404</h1>
        <p className="text-xl text-gray-600 mb-4">Oops! Page not found</p>
        <a href="/" className="text-blue-500 hover: text-blue-700 underline">
          Return to Home
<<<<<<< HEAD
        </a>
      </div>
    </div>
  )


  useEffect(() => {;
    console && console.error(;
      "404 Error: User attempted to access non-existent route:",;
      location && location.pathname;
    );
  }, [location && location.pathname]);

  return (
=======
        </Link>
      </div>
    </div>
  )
}
export default NotFound;

},

export default NotFound,
import { useLocation } from "react-router-dom",;
import { useEffect } from "react",;
const NotFound = () => {;
  const location = useLocation(),;

  useEffect(() => {;
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
  useEffect(() => {;
    console.error(;
      "404 Error: User attempted to access non-existent route:",;
      location.pathname;
    );
  }, [location.pathname]),;
  return (;
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
    <div className="min-h-screen flex items-center justify-center bg-gray-100">;
      <div className="text-center">;
        <h1 className="text-4xl font-bold mb-4">404</h1>;
        <p className="text-xl text-gray-600 mb-4">Oops! Page not found</p>;
<<<<<<< HEAD
=======
        <a href="/" className="text-blue-500 hover:text-blue-700 underline">;
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
        <a href="/" className="text-blue-500 hover: text-blue-700 underline">;
          Return to Home;
        </a>;
      </div>;
    </div>;
  );
};


<<<<<<< HEAD
=======
=======
};
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
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

},


export default NotFound;
;
<<<<<<< HEAD
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
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
},;
export default NotFound;
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
