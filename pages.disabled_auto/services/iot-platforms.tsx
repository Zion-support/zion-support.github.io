const IoTPlatforms: NextPage = () => {
  return (;
    <Layout;
      title="IoT Platforms - Zion Tech Group";
      description="Connected device solutions and IoT infrastructure for smart business operations. IoT device development, data analytics, and edge computing.">;
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900 text-white py-20">;
        <div className="container mx-auto px-4 text-center">;
          <h1 className="text-5xl md:text-6xl font-bold mb-6">;
            IoT;
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400"> Platforms</span>;
          </h1>;
          <p className="text-xl md:text-2xl mb-8 max-w-4xl mx-auto text-gray-200">;
            Connected device solutions and IoT infrastructure for smart business operations. ;
            We help you harness the power of the Internet of Things to optimize your processes.;
          </p>;

          <div className="flex flex-col sm:flex-row justify-center gap-4">;
            <Link href="/contact" className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-semibold transition-colors cursor-pointer inline-block text-lg">;
              Start Your IoT Project;
            </Link>;
            <Link href="/services" className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-blue-900 px-8 py-4 rounded-lg font-semibold transition-colors cursor-pointer inline-block text-lg">;
              View All Services;
            </Link>;
          </div>;
        </div>;
      </section>;

      {/* IoT Services */}
      <section className="py-20 bg-white">;
        <div className="container mx-auto px-4">;
          <div className="text-center mb-16">;
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our IoT Solutions</h2>;
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">;
              We develop comprehensive IoT solutions that connect devices, collect data, ;
              and provide actionable insights to optimize your business operations.;
            </p>;
          </div>;

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">;
            <div className="bg-white rounded-lg p-8 shadow-lg hover:shadow-xl transition-shadow border border-gray-100">;
              <div className="w-16 h-16 bg-blue-100 rounded-lg flex items-center justify-center mb-6">;
                <Cpu className="w-8 h-8 text-blue-600" />;
              </div>;
              <h3 className="text-xl font-semibold mb-4">IoT Device Development</h3>;
              <p className="text-gray-600 mb-4">;
                Custom IoT devices and sensors designed for your specific business requirements and use cases.;
              </p>;
              <ul className="space-y-2">;
                <li className="flex items-center text-sm text-gray-600">;
                  <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />;
                  Sensor Integration;
                </li>;
                <li className="flex items-center text-sm text-gray-600">;
                  <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />;
                  Hardware Design;
                </li>;
                <li className="flex items-center text-sm text-gray-600">;
                  <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />;
                  Firmware Development;
                </li>;
              </ul>;
            </div>;
