import { Helmet } from 'react-helmet-async';
import { ArrowRight, Home, Search, AlertTriangle } from 'lucide-react';

<<<<<<< HEAD
export default function NotFoundPage() {
=======
export default function PagePage() {
>>>>>>> cursor/fix-errors-and-merge-to-main-b18f
  return (
    <div className="min-h-screen bg-gray-900 text-white flex items-center justify-center">
      <Helmet>
        <title>404 - Page Not Found | Zion Tech Group</title>
        <meta name="description" content="The page you are looking for could not be found." />
      </Helmet>
      
      <div className="text-center">
        <h1 className="text-6xl font-bold mb-4">404</h1>
        <h2 className="text-2xl font-semibold mb-4">Page Not Found</h2>
        <p className="text-gray-300 mb-8">The page you are looking for could not be found.</p>
        <a href="/" 
          className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded transition-colors">Go Home</a>
      </div>
    </div>
  );
}