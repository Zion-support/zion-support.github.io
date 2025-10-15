import { Helmet } from 'react-helmet-async';

export default function Navigation() {
  return (
    <>
      <Helmet>
        <title>Navigation | Zion Tech Group</title>
      </Helmet>
      <nav className="bg-white shadow-lg">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center py-4">
            <div className="text-xl font-bold text-gray-800">
              Zion Tech Group
            </div>
            <div className="space-x-4">
              <a href="/" className="text-gray-600 hover:text-gray-800">Home</a>
              <a href="/about" className="text-gray-600 hover:text-gray-800">About</a>
              <a href="/services" className="text-gray-600 hover:text-gray-800">Services</a>
              <a href="/contact" className="text-gray-600 hover:text-gray-800">Contact</a>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}
