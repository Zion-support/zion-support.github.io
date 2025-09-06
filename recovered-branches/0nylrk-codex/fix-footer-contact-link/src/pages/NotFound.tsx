

import { useLocation } from "react-router-dom",
import { useEffect } from "react",
=======
import {useLocation} from "react-router-dom";
import {useEffect} from "react";
import { useLocation } from "react-router-dom",
import { useEffect } from "react",


const NotFound = () => {
  const location = useLocation(),

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:"
      location.pathname
    )
  }, [location.pathname]);
  }, [location.pathname]),

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="text-center">
        <h1 className="text-4xl font-bold mb-4">404</h1>
        <p className="text-xl text-gray-600 mb-4">Oops! Page not found</p>
        <a href="/" className="text-blue-500 hover: text-blue-700 underline">
          Return to Home
        </a>
      </div>
    </div>
  )
}
export default NotFound;

},

  useEffect(() => {;
    console && console.error(;
      "404 Error: User attempted to access non-existent route:",;
      location && location.pathname;
    );
  }, [location && location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">;
      <div className="text-center">;
        <h1 className="text-4xl font-bold mb-4">404</h1>;
        <p className="text-xl text-gray-600 mb-4">Oops! Page not found</p>;
        <a href="/" className="text-blue-500 hover: text-blue-700 underline">;
          Return to Home;
        </a>;
      </div>;
    </div>;
  );
};


=======
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
=======

},


>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
export default NotFound;
