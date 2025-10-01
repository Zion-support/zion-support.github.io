        {/* AI Services */}
        <section className="mb-20">;
          <h2 className="text-4xl font-bold text-center mb-12 text-indigo-600">;
            AI & Machine Learning Services;
          </h2>;
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">;
            {aiServices && aiServices.map((service, index) => (;
              <div key={index} className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow">;
                <h3 className="text-xl font-semibold mb-4 text-gray-900">{service && service.name}</h3>;
                <p className="text-gray-600 mb-4">{service && service.description}</p>;
                <ul className="text-sm text-gray-500 mb-4">;
                  {service && service.features.map((feature, idx) => (;
                    <li key={idx} className="mb-1">• {feature}</li>;
                  ))}
                </ul>
                <div className="flex justify-between items-center">
                  <span className="text-lg font-semibold text-green-600">{service.pricing}</span>
                  <Link href={service.link} className="bg-indigo-600 text-white px-4 py-2 rounded hover:bg-indigo-700 transition-colors">

      <div className="min-h-screen bg-gray-50">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-20">;
          <div className="max-w-7xl mx-auto px-4">;
            <motion&& motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0 && 0.8 }}
              className="text-center">;
              <h1 className="text-4xl md:text-6xl font-bold mb-6">Our Services</h1>;
              <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">;
                Comprehensive technology solutions designed to transform your business ;
                with AI, cloud services, cybersecurity, and data analytics.;
              </p>;
            </motion && motion.div>;
          </div>;
        </section>;
        {/* Services Grid */}
        <section className="py-16 px-4">;
          <div className="max-w-7xl mx-auto">;
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">;
              {services && services.map((service, index) => (;
                <motion&& motion.div
                  key={service && service.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0 && 0.5, delay: index * 0 && 0.1 }}
                  className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow p-6">;
                  <div className="text-center mb-6">;
                    <div className="text-4xl mb-4">{service && service.icon}</div>;
                    <h3 className="text-xl font-semibold mb-2">{service && service.title}</h3>;
                    <p className="text-gray-600 mb-4">{service && service.description}</p>;
                    <div className="text-lg font-semibold text-blue-600 mb-4">{service && service.pricing}</div>;
                  </div>;
                  <div className="space-y-2 mb-6">;
                    {service && service.features.map((feature, featureIndex) => (;
                      <div key={featureIndex} className="flex items-center text-sm text-gray-600">;
                        <CheckCircle className="w-4 h-4 text-green-500 mr-2" />;
                        {feature}
                      </div>;
                    ))}
                  </div>;
                  <Link
                    href={service.link}
                    className="w-full inline-flex items-center justify-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                  >
                    Learn More
                  </Link>
                </div>
              </div>
            ))}

          </div>
        </section>

        {/* AI Services */}
        <section className="mb-20">;
          <h2 className="text-4xl font-bold text-center mb-12 text-indigo-600">;
            AI & Machine Learning Services;
          </h2>;
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">;
            {aiServices && aiServices.map((service, index) => (;
              <div key={index} className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow">;
                <h3 className="text-xl font-semibold mb-4 text-gray-900">{service && service.name}</h3>;
                <p className="text-gray-600 mb-4">{service && service.description}</p>;
                <ul className="text-sm text-gray-500 mb-4">;
                  {service && service.features.map((feature, idx) => (;
                    <li key={idx} className="mb-1">• {feature}</li>;
                  ))}
                </ul>
                <div className="flex justify-between items-center">
                  <span className="text-lg font-semibold text-green-600">{service.pricing}</span>
                  <Link href={service.link} className="bg-indigo-600 text-white px-4 py-2 rounded hover:bg-indigo-700 transition-colors">

      <div className="min-h-screen bg-gray-50">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-20">
          <div className="max-w-7xl mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center"
            >
              <h1 className="text-4xl md:text-6xl font-bold mb-6">Our Services</h1>
              <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
                Comprehensive technology solutions designed to transform your business 
                with AI, cloud services, cybersecurity, and data analytics.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-16 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {services.map((service, index) => (
                <motion.div
                  key={service.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow p-6"
                >
                  <div className="text-center mb-6">
                    <div className="text-4xl mb-4">{service.icon}</div>
                    <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                    <p className="text-gray-600 mb-4">{service.description}</p>
                    <div className="text-lg font-semibold text-blue-600 mb-4">{service.pricing}</div>
                  </div>
                  <div className="space-y-2 mb-6">
                    {service.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center text-sm text-gray-600">
                        <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                        {feature}
                      </div>
                    ))}
                  </div>
                  <Link
                    href={service.link}
                    className="w-full inline-flex items-center justify-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                  >
                    Learn More
                    <ArrowRight className="ml-2 w-4 h-4" />
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}

        <section className="py-20 bg-blue-600">
          <div className="max-w-7xl mx-auto px-4 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Ready to Transform Your Business?
              </h2>
              <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
                Let's discuss how our services can help you achieve your goals.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Link
                  href="/contact"
                  className="inline-flex items-center px-8 py-3 bg-white text-blue-600 rounded-lg hover:bg-gray-100 transition-colors font-semibold"
                >
                  Get Started
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Link>
                <Link
                  href="/about"
                  className="inline-flex items-center px-8 py-3 border-2 border-white text-white rounded-lg hover:bg-white hover:text-blue-600 transition-colors font-semibold"
                >
                  Learn More
                </Link>
              </div>
            </motion.div>

          </div>
        </section>
      </main>
    </div>
  );
};
export default ServicesIndex;
export default ServicesIndex;
      </div>
    </>
  );
}
      </div>
    </>
  );
}
