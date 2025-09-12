
      title="About Us - Zion Tech Group"
      description="Learn about Zion Tech Group's mission, vision, and team of expert technology professionals dedicated to transforming businesses through innovative solutions."
    >
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
        <main className="container mx-auto px-4 py-12">
          {/* Hero Section */}
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
              About Zion Tech Group
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">

            </p>
          </div>

          {/* Mission & Vision */}
          <div className="grid md:grid-cols-2 gap-12 mb-16">
            <div className="bg-white rounded-lg shadow-lg p-8">
              <div className="text-4xl mb-4">🎯</div>

              </p>
            </div>
            <div className="bg-white rounded-lg shadow-lg p-8">
              <div className="text-4xl mb-4">🔮</div>

              </p>
            </div>
          </div>

          {/* Our Story */}
          <div className="bg-white rounded-lg shadow-lg p-8 mb-16">

            <div className="max-w-4xl mx-auto">
              <p className="text-lg text-gray-600 mb-6">
                Founded in 2020, Zion Tech Group emerged from a simple yet powerful vision: 
                to bridge the gap between cutting-edge technology and real-world business needs. 
                What started as a small team of passionate developers has grown into a comprehensive 
                technology solutions provider serving clients across multiple industries.
              </p>
              <p className="text-lg text-gray-600 mb-6">
                Our journey began when our founders recognized that many businesses were struggling 
                to keep up with rapidly evolving technology. They saw an opportunity to create 
                solutions that not only address current challenges but also prepare organizations 
                for future growth and innovation.
              </p>
              <p className="text-lg text-gray-600">


              </p>
            </div>
          </div>

          {/* Values */}
          <div className="mb-16">

            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="text-4xl mb-4">💡</div>
                <h3 className="text-xl font-semibold text-gray-800 mb-3">Innovation</h3>
                <p className="text-gray-600">


                </p>
              </div>
              <div className="text-center">
                <div className="text-4xl mb-4">🤝</div>

                </p>
              </div>
              <div className="text-center">
                <div className="text-4xl mb-4">⭐</div>

                </p>
              </div>
            </div>
          </div>

          {/* Team Section */}
          <div className="bg-white rounded-lg shadow-lg p-8 mb-16">

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-24 h-24 bg-blue-100 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <span className="text-2xl font-bold text-blue-600">K</span>
                </div>

                </p>
              </div>
              <div className="text-center">
                <div className="w-24 h-24 bg-green-100 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <span className="text-2xl font-bold text-green-600">A</span>
                </div>

                </p>
              </div>
              <div className="text-center">
                <div className="w-24 h-24 bg-purple-100 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <span className="text-2xl font-bold text-purple-600">S</span>
                </div>

                </p>
              </div>
            </div>
          </div>

          {/* CTA Section */}
          <div className="text-center bg-gradient-to-r from-blue-600 to-indigo-600 rounded-lg shadow-lg p-8 text-white">
            <h2 className="text-3xl font-bold mb-4">Ready to Work With Us?</h2>
            <p className="text-xl mb-6">

                href="/contact"
                className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
              >
                Get in Touch
              </a>

                href="/services"
                className="bg-transparent border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors"
              >
                View Our Services
              </a>
            </div>
          </div>
        </main>
      </div>
    </MainLayout>
  );
};

export default About;
