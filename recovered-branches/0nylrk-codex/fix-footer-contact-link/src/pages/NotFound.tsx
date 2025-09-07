<<<<<<< HEAD
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
const NotFound = () => {
  const location = useLocation();

=======

import {useLocation} from "react-router-dom";
import {useEffect} from "react";
const NotFound = () => {
  const location = useLocation();
import { useLocation } from "react-router-dom",
import { useEffect } from "react",
>>>>>>> 54ad2b1038c082a23519987b245e26e888b5a5dc

import { useLocation } from "react-router-dom",
import { useEffect } from "react",
import {useLocation} from "react-router-dom";
import {useEffect} from "react";
import { useLocation } from "react-router-dom",
import { useEffect } from "react",
<<<<<<< HEAD


const NotFound = () => {
  const location = useLocation(),

const NotFound = () => {
=======
const NotFound = () => {
  const location = useLocation(),

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:"
      location.pathname
    )const NotFound = () => {
>>>>>>> 54ad2b1038c082a23519987b245e26e888b5a5dc
  const location = useLocation(),

const NotFound = () => {
  const location = useLocation(),

const NotFound = () => {
  const location = useLocation(),

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname,
    );
  }, [location.pathname]);

<<<<<<< HEAD
  return (
=======
  }, [location.pathname]);
  }, [location.pathname]),

>>>>>>> 54ad2b1038c082a23519987b245e26e888b5a5dc
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
  );
};


=======
        </Link>      </div>
    </div>
  )
};

>>>>>>> 54ad2b1038c082a23519987b245e26e888b5a5dc
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
<<<<<<< HEAD
    <div className="min - h-screen flex items - center justify - center bg - gray - 100">;
      <div className="text - center">;
        <h1 className="text - 4xl font - bold mb - 4">404</h1>;
        <p className="text - xl text - gray - 600 mb - 4">Oops! Page not found</p>;
        <a href="/" className="text - blue - 500 hover: text - blue - 700 underline">;
=======
    <div className="min - h-screen flex items - center justify - center bg - gray-100">;
      <div className="text-center">;
        <h1 className="text - 4xl font - bold mb-4">404</h1>;
        <p className="text - xl text - gray - 600 mb-4">Oops! Page not found</p>;
        <a href="/" className="text - blue - 500 hover: text - blue-700 underline">;
>>>>>>> 54ad2b1038c082a23519987b245e26e888b5a5dc
          Return to Home;
        </a>;
      </div>;
    </div>);
}
;
export default NotFound;
;
<<<<<<< HEAD
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
=======
>>>>>>> 54ad2b1038c082a23519987b245e26e888b5a5dc
