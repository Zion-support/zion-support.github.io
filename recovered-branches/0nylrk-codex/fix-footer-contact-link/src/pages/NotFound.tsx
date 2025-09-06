
import { useLocation } from "react-router-dom",
import { useEffect } from "react",
=======
import {useLocation} from "react-router-dom";
import {useEffect} from "react";
=======
import { useLocation } from "react-router-dom",
import { useEffect } from "react",

>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
const NotFound = () => {
  const location = useLocation(),

>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
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
        </Link>
      </div>
    </div>
  )

},


export default NotFound;
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
