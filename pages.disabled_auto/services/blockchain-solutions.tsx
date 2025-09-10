const BlockchainSolutions: NextPage = () => {
  return (;
    <Layout;
      title="Blockchain Solutions - Zion Tech Group";
      description="Innovative blockchain technology for secure, transparent business processes. Smart contracts, DeFi applications, and custom blockchain solutions.">;
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900 text-white py-20">;
        <div className="container mx-auto px-4 text-center">;
          <h1 className="text-5xl md:text-6xl font-bold mb-6">;
            Blockchain;
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400"> Solutions</span>;
          </h1>;
          <p className="text-xl md:text-2xl mb-8 max-w-4xl mx-auto text-gray-200">;
            Innovative blockchain technology for secure, transparent business processes. ;
            From smart contracts to DeFi applications, we build the future of decentralized systems.;
          </p>;

          <div className="flex flex-col sm:flex-row justify-center gap-4">;
            <Link href="/contact" className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-semibold transition-colors cursor-pointer inline-block text-lg">;
              Start Your Blockchain Project;
            </Link>;
            <Link href="/services" className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-blue-900 px-8 py-4 rounded-lg font-semibold transition-colors cursor-pointer inline-block text-lg">;
              View All Services;
            </Link>;
          </div>;
        </div>;
      </section>;

      {/* Blockchain Services */}
      <section className="py-20 bg-white">;
        <div className="container mx-auto px-4">;
          <div className="text-center mb-16">;
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Blockchain Solutions</h2>;
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">;
              We develop cutting-edge blockchain solutions that provide security, transparency, ;
              and efficiency for your business processes and applications.;
            </p>;
          </div>;

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">;
            <div className="bg-white rounded-lg p-8 shadow-lg hover:shadow-xl transition-shadow border border-gray-100">;
              <div className="w-16 h-16 bg-blue-100 rounded-lg flex items-center justify-center mb-6">;
                <Shield className="w-8 h-8 text-blue-600" />;
              </div>;
              <h3 className="text-xl font-semibold mb-4">Smart Contracts</h3>;
              <p className="text-gray-600 mb-4">;
                Self-executing contracts with terms directly written into code for automated, secure transactions.;
              </p>;
              <ul className="space-y-2">;
                <li className="flex items-center text-sm text-gray-600">;
                  <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />;
                  Ethereum Smart Contracts;
                </li>;
                <li className="flex items-center text-sm text-gray-600">;
                  <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />;
                  Solidity Development;
                </li>;
                <li className="flex items-center text-sm text-gray-600">;
                  <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />;
                  Contract Auditing;
                </li>;
              </ul>;
            </div>;
