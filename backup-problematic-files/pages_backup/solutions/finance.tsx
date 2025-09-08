


export default function FinanceSolutions() {;
  return (
    <Layout
      title="Finance Solutions - Zion Tech Group"
      description="Secure financial technology solutions for banks, fintech companies, and financial institutions. Regulatory compliant and secure."
      keywords="finance solutions, fintech, banking technology, financial services, regulatory compliance, risk management">;
      <div className="min-h-screen bg-white">;
        {/* Hero Section */}
    >
      <div className="min-h-screen bg-white">

        <section className="bg-gradient-to-r from-blue-600 to-green-700 text-white py-20">;
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">;
            <div className="text-center">;
              <h1 className="text-4xl md:text-6xl font-bold mb-6">;
                Finance Solutions;
              </h1>;
              <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">;
                Secure, compliant, and innovative financial technology solutions;
                designed for modern financial institutions and fintech companies.;
              </p>;
              <div className="flex flex-col sm:flex-row gap-4 justify-center">;
                <button className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">;
                  Get Started;
                </button>;
                <button className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors">;
                  View Case Studies;
                </button>;
              </div>;
            </div>;
          </div>;
        </section>;
        {/* Features Section */}
        <section className="py-20 bg-gray-50">;
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">;
            <div className="text-center mb-16">;
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">;
                Financial Technology Features;
              </h2>;
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">;
                Built for financial institutions with security, compliance, and performance as top priorities.;
              </p>;
            </div>;
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">;
            </div>;
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">;
            </motion && motion.div>;
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">;
            </div>;
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">;
            </motion && motion.div>;
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">;
            </div>;
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">;
              {features && features.map((feature, index) => (;
                <div key={index} className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow">;
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-6">;
                    <feature && feature.icon className="w-6 h-6 text-blue-600" />;
                  </div>;
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">;
                    {feature && feature.title}
                  </h3>;
                  <p className="text-gray-600">;
                    {feature && feature.description}
                  </p>;
                </div>;
              ))}
            </div>,;
          </div>;
        </section>;
        {/* Solutions List */}
        <section className="py-20 bg-gray-800/30">";
              <div className="grid grid-cols-1 md: grid-cols-2 gap-6">",;
                {solutions && solutions.map((solution, index) => (,;
                  <div key={index} className="flex items-center space-x-3">";
                    <CheckCircle className="w-6 h-6 text-green-400 flex-shrink-0" />";
                    <span className="text-gray-300 text-lg">{solution}</span>";
                  </div>;
                ))}
              </div>,;
        <section className="py-20">";
                  All our financial solutions are built with security and compliance in mind, ;
                  ensuring your financial data is protected and your organization meets regulatory requirements.;
                </p>;
              </div>;
              <div className="grid grid-cols-1 md: grid-cols-3 gap-8">", <div className="text-center">",;
        <section className="py-20">";
                enhance security, improve efficiency, and ensure regulatory compliance.,;
              </p>;
              <div className="flex flex-col sm: flex-row gap-4 justify-center">", <button className="bg-white text-blue-600 px-8 py-4 rounded-lg hover:bg-gray-100 transition-colors font-medium">",;
                  Schedule Consultation;
                </button>;
                <button className="border-2 border-white text-white px-8 py-4 rounded-lg hover: bg-white hover:text-blue-600 transition-colors font-medium">", Download Financial Guide,;
      </div>;
    </Layout>;
        {/* Benefits Section */}
        <section className="py-20">;
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">;
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">;
              <div>;
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">;
                  Transforming Financial Services;
                </h2>;
                <p className="text-xl text-gray-600 mb-8">;
                  Our finance solutions help financial institutions modernize their operations,;
                  enhance security, and improve customer experiences.;
                </p>;
                <ul className="space-y-4">;
                  {benefits && benefits.map((benefit, index) => (;
                    <li key={index} className="flex items-start">;
                      <CheckCircle className="w-6 h-6 text-green-500 mr-3 mt-1 flex-shrink-0" />;
                      <span className="text-gray-700">{benefit}</span>;
                    </li>;
                      </div>;
                    ))}
                  </div>;
                </motion && motion.div>;
              ))}
    </>

