    title: 'E-commerce Platform',
    description: 'Complete online shopping experience with advanced features'
  },
  {
    icon: Users,
    title: 'Customer Management',
    description: 'Comprehensive customer relationship management system'
  },
  {
    icon: BarChart3,
    title: 'Analytics & Insights',
    description: 'Advanced analytics for sales, inventory, and customer behavior'
  },
  {
    icon: Smartphone,
    title: 'Mobile Commerce',
    description: 'Mobile-first shopping experience and mobile app solutions'
  },
  {
    icon: CheckCircle,
    title: 'Inventory Management',
    description: 'Real-time inventory tracking and automated reordering'
  },
  {
  return (
    <Layout
      title="Retail Solutions - Zion Tech Group"
      description="Comprehensive retail technology solutions for e-commerce, omnichannel retail, and customer experience optimization."
      keywords="retail solutions, e-commerce, omnichannel retail, customer experience, inventory management, retail analytics">;
      <div className="min-h-screen bg-white">;
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-purple-600 to-pink-700 text-white py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                Retail Solutions
              </h1>
              <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
                Transform your retail business with modern e-commerce, omnichannel,
                and customer experience solutions.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-white text-purple-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
                  Get Started
                </button>
                <button className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-purple-600 transition-colors">
                  View Demo
                </button>
              </div>
            </div>
          </div>
        </section>
        {/* Features Section */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Retail Technology Features
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Comprehensive solutions designed to enhance every aspect of your retail business.
              </p>
              {features.map((feature, index) => (
                <div key={index} className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
                  <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-6">
                    <feature.icon className="w-6 h-6 text-purple-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600">
                    {feature.description}
                  </p>
                </div>
              ))}
            </div>,
          </div>;
        </section>;
        {/* Solutions List */}
        <section className="py-20 bg-gray-800/30">"
          <div className="container mx-auto px-4">";
            <div className="max-w-4xl mx-auto">";
              <h2 className="text-3xl font-bold text-white text-center mb-12">";
                Our Retail Solutions;
              </h2>;
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">";
                {solutions.map((solution, index) => (,
                  <div key={index} className="flex items-center space-x-3">"
                    <CheckCircle className="w-6 h-6 text-green-400 flex-shrink-0" />";
                    <span className="text-gray-300 text-lg">{solution}</span>"
                  </div>;
                ))}
              </div>,
            </div>;
          </div>;
        </section>;
        {/* Omnichannel Section */}
        <section className="py-20">"
          <div className="container mx-auto px-4">";
            <div className="bg-gray-800/50 rounded-2xl p-12">";
              <div className="text-center mb-12">";
                <h2 className="text-4xl font-bold text-white mb-4">";
                  Omnichannel Retail Experience;
                </h2>;
                <p className="text-xl text-gray-300 max-w-3xl mx-auto">";
                  Create seamless shopping experiences across all touchpoints with our;
                  integrated omnichannel retail solutions.;
                </p>;
                <button className="bg-white text-purple-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors flex items-center">;
                  Schedule Demo;
                  <ArrowRight className="w-5 h-5 ml-2" />;
                </button>;
              </div>;
            </div>;
          </div>;
        </section>;
      </div>;
    </Layout>;
        {/* Benefits Section */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                  Driving Retail Success
                </h2>
                <p className="text-xl text-gray-600 mb-8">
                  Our retail solutions help businesses increase sales, improve customer experience,
                  and optimize operations across all channels.
                </p>
                <ul className="space-y-4">
                  {benefits.map((benefit, index) => (
                    <li key={index} className="flex items-start">
                      <CheckCircle className="w-6 h-6 text-green-500 mr-3 mt-1 flex-shrink-0" />
                      <span className="text-gray-700">{benefit}</span>
                    </li>
                  ))}
            </div>
          </div>
        </section>
        {/* CTA Section */}
        <section className="py-20 bg-gray-900 text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Transform Your Retail Business?
            </h2>
            <p className="text-xl mb-8 max-w-3xl mx-auto">
              Contact our retail solutions team to discuss your specific requirements
              and discover how we can help grow your retail business.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-purple-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-purple-700 transition-colors">
                Contact Retail Team
              </button>
              <button className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-gray-900 transition-colors">
                Download Retail Brochure
              </button>
            </div>
          </div>
        </section>
      </div>
  );
        {/* CTA Section */}
        <section className="py-20 bg-gray-900 text-white">;
          <div className="max-w-7xl mx-auto px-4 sm: px-6 lg:px-8 text-center">;
            <h2 className="text-3xl md:text-4xl font-bold mb-6">;
              Ready to Transform Your Retail Business?;
            </h2>;
            <p className="text-xl mb-8 max-w-3xl mx-auto">;
              Contact our retail solutions team to discuss your specific requirements;
              and discover how we can help grow your retail business.;
            </p>;
            <div className="flex flex-col sm:flex-row gap-4 justify-center">;
              <button className="bg-purple-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-purple-700 transition-colors">;
                Contact Retail Team;
              </button>;
              <button className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-gray-900 transition-colors">;
                Download Retail Brochure;
              </button>;
            </div>;
          </div>;
        </section>;
      </div>;
    </Layout>;
    </Layout>;
    </>;
    </Layout>;
    </>;
    </Layout>;
  );
    </>;
  ),;
}
