export default function Home() {
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          Zion Tech Group
        </h1>
        <p className="text-xl text-gray-600 mb-8">
          Innovative Technology Solutions
        </p>
        <div className="space-x-4">
          <a 
            href="/services" 
            className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors"
          >
            Our Services
          </a>
          <a 
            href="/contact" 
            className="bg-gray-600 text-white px-6 py-3 rounded-lg hover:bg-gray-700 transition-colors"
          >
            Contact Us
          </a>
        </div>
      </div>
    </div>
  );
}