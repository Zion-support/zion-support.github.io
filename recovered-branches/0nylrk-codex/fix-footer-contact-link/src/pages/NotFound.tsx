<<<<<<< HEAD
=======
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b9a5


import { useLocation } from "react-router-dom",
import { useEffect } from "react",
=======
import {useLocation} from "react-router-dom";
import {useEffect} from "react";
=======
import { useLocation } from "react-router-dom",
import { useEffect } from "react",
<<<<<<< HEAD


=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b9a5
const NotFound = () => {
  const location = useLocation(),

>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:"
      location.pathname
    )


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


<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
export default NotFound,
import { useLocation } from "react-router-dom",;
import { useEffect } from "react",;
const NotFound = () => {;
  const location = useLocation(),;
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b9a5
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
<<<<<<< HEAD
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
=======
},;
<<<<<<< HEAD
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b9a5
export default NotFound;
;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
