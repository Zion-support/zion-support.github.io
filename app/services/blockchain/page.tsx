export const metadata = {
  title: 'Blockchain Solutions | Zion Tech Group',
  description: 'Comprehensive blockchain development services including smart contracts, DeFi applications, NFT platforms, and enterprise blockchain solutions.',
};

export default function BlockchainPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-600 to-purple-700 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Blockchain Solutions
            </h1>
            <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
              Comprehensive blockchain development services for the decentralized future
            </p>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg shadow-lg p-8">
              <div className="text-4xl mb-4">📜</div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Smart Contracts</h3>
              <p className="text-gray-600 mb-4">Secure and efficient smart contract development and deployment.</p>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-8">
              <div className="text-4xl mb-4">💰</div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">DeFi Applications</h3>
              <p className="text-gray-600 mb-4">Decentralized finance solutions and trading platforms.</p>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-8">
              <div className="text-4xl mb-4">🎨</div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">NFT Platforms</h3>
              <p className="text-gray-600 mb-4">Non-fungible token marketplaces and digital asset management.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gray-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Build on Blockchain?
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Let's discuss how blockchain technology can transform your business.
          </p>
          <a
            href="/contact"
            className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors inline-block"
          >
            Start Building
          </a>
        </div>
      </section>
    </div>
  );
}