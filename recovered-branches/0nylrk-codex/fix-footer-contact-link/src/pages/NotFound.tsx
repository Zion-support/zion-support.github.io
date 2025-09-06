

const NotFound = () => {
  const location = useLocation(),

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159

import {useLocation} from "react-router-dom";
import {useEffect} from "react";
const NotFound = () => {
  const location = useLocation();
import { useLocation } from "react-router-dom",
import { useEffect } from "react",
=======


import { useLocation } from "react-router-dom",
import { useEffect } from "react",
=======
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
import {useLocation} from "react-router-dom";
import {useEffect} from "react";
import { useLocation } from "react-router-dom",
import { useEffect } from "react",
=======


>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
const NotFound = () => {
  const location = useLocation(),

>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:"
      location.pathname
    )

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

export default NotFound,
import { useLocation } from "react-router-dom",;
import { useEffect } from "react",;
const NotFound = () => {;
  const location = useLocation(),;
<<<<<<< HEAD
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
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
},;

export default NotFound;
export default NotFound;
;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
export default NotFound;
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
