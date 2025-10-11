import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900">
      <div className="text-center">
        <h2 className="text-4xl font-bold text-white mb-4">Not Found</h2>
        <p className="text-gray-300 mb-8">Could not find the requested resource.</p>
        <Link
          href="/"
          className="bg-gradient-to-r from-green-500 to-blue-600 hover:from-green-600 hover:to-blue-700 text-white font-bold py-3 px-6 rounded-lg transition-all duration-300 transform hover:scale-105"
        >
          Return Home
        </Link>
      </div>
    </div>
  );
}