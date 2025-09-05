<<<<<<< HEAD
<<<<<<< HEAD
import { useLocation } from "react-router-dom",
import { useEffect } from "react",
=======
import { useLocation } from &quot;react-router-dom&quot;;
import { useEffect } from &quot;react&quot;;

>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7
const NotFound = () => {
  const location = useLocation(),

  useEffect(() => {
    console.error(
      &quot;404 Error: User attempted to access non-existent route:&quot;,
      location.pathname
    )
  }, [location.pathname]),
=======

const _NotFound = () => {_const _location = useLocation();

  useEffect__(() => {}, [location.pathname]);
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13

  return (
<<<<<<< HEAD
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="text-center">
        <h1 className="text-4xl font-bold mb-4">404</h1>
        <p className="text-xl text-gray-600 mb-4">Oops! Page not found</p>
        <a href="/" className="text-blue-500 hover: text-blue-700 underline">
=======
    <div className=&quot;min-h-screen flex items-center justify-center bg-gray-100&quot;>
      <div className=&quot;text-center&quot;>
        <h1 className=&quot;text-4xl font-bold mb-4&quot;>404</h1>
        <p className=&quot;text-xl text-gray-600 mb-4&quot;>Oops! Page not found</p>
        <a href=&quot;/&quot; className=&quot;text-blue-500 hover:text-blue-700 underline&quot;>
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7
          Return to Home
        </Link>
      </div>
    </div>
  )
},

export default NotFound,