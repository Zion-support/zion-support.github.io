export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-8">
          Zion Tech Group
        </h1>
        <p className="text-lg text-gray-600 mb-8">
          Leading AI and Technology Solutions
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-gray-50 p-6 rounded-lg">
            <h2 className="text-xl font-semibold mb-4">AI Services</h2>
            <p className="text-gray-600">
              Advanced artificial intelligence solutions for your business needs.
            </p>
          </div>
          <div className="bg-gray-50 p-6 rounded-lg">
            <h2 className="text-xl font-semibold mb-4">Automation</h2>
            <p className="text-gray-600">
              Streamline your operations with intelligent automation systems.
            </p>
          </div>
          <div className="bg-gray-50 p-6 rounded-lg">
            <h2 className="text-xl font-semibold mb-4">Consulting</h2>
            <p className="text-gray-600">
              Expert guidance on technology strategy and implementation.
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}