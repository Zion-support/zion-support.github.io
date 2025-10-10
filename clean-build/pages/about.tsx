
export default function About() {
  return (
    <>
      <Head>
        <title>About Us - Zion Tech Group</title>
        <meta
          name="description"
          content="Learn about Zion Tech Group's mission, values, and commitment to delivering cutting-edge technology solutions that transform businesses."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="min-h-screen bg-gray-50">
        {/* Hero Section */}
        <section className="py-16 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                About <span className="text-yellow-300">Zion Tech Group</span>
              </h1>
              <p className="text-xl">
                We are a leading technology solutions provider dedicated to transforming businesses
                through innovative digital solutions and cutting-edge technology.
              </p>
            </div>
          </div>
        </section>

        {/* Mission Section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="mb-12">
                <h2 className="text-3xl font-bold text-gray-800 mb-4">
                  Our <span className="text-blue-600">Mission</span>
                </h2>
                <p className="text-lg text-gray-600 mb-4">
                  To empower businesses with innovative technology solutions that drive growth,
                  efficiency, and digital transformation. We believe technology should be
                  accessible, reliable, and transformative.
                </p>
                <p className="text-lg text-gray-600">
                  Our mission is to bridge the gap between complex technology and business needs,
                  delivering solutions that not only meet current requirements but also scale for
                  future growth and innovation.
                </p>
              </div>
              <div className="grid md:grid-cols-4 gap-8">
                <div className="text-center">
                  <div className="text-4xl font-bold text-blue-600 mb-2">100+</div>
                  <div className="text-gray-600">Projects Completed</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-blue-600 mb-2">50+</div>
                  <div className="text-gray-600">Happy Clients</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-blue-600 mb-2">5+</div>
                  <div className="text-gray-600">Years Experience</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-blue-600 mb-2">24/7</div>
                  <div className="text-gray-600">Support Available</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold text-gray-800 mb-4">
                  Our <span className="text-blue-600">Values</span>
                </h2>
                <p className="text-lg text-gray-600">
                  The principles that guide everything we do and shape our approach to technology
                  solutions.
                </p>
              </div>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                <div className="text-center p-6 bg-gray-50 rounded-lg">
                  <div className="text-4xl mb-4">
                    <span role="img" aria-label="target">
                      🎯
                    </span>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">Excellence</h3>
                  <p className="text-gray-600">
                    We strive for excellence in every project, delivering high-quality solutions
                    that exceed expectations.
                  </p>
                </div>
                <div className="text-center p-6 bg-gray-50 rounded-lg">
                  <div className="text-4xl mb-4">
                    <span role="img" aria-label="handshake">
                      🤝
                    </span>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">Collaboration</h3>
                  <p className="text-gray-600">
                    We work closely with our clients as partners, ensuring their vision becomes
                    reality.
                  </p>
                </div>
                <div className="text-center p-6 bg-gray-50 rounded-lg">
                  <div className="text-4xl mb-4">
                    <span role="img" aria-label="lightbulb">
                      💡
                    </span>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">Innovation</h3>
                  <p className="text-gray-600">
                    We embrace cutting-edge technologies and innovative approaches to solve complex
                    challenges.
                  </p>
                </div>
                <div className="text-center p-6 bg-gray-50 rounded-lg">
                  <div className="text-4xl mb-4">
                    <span role="img" aria-label="lock">
                      🔒
                    </span>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">Integrity</h3>
                  <p className="text-gray-600">
                    We maintain the highest standards of honesty, transparency, and ethical business
                    practices.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold text-gray-800 mb-4">
                  Our <span className="text-blue-600">Team</span>
                </h2>
                <p className="text-lg text-gray-600">
                  Meet the talented individuals who make Zion Tech Group a leader in technology
                  solutions.
                </p>
              </div>
              <div className="grid md:grid-cols-3 gap-8">
                <div className="text-center p-6 bg-white rounded-lg shadow-lg">
                  <div className="text-5xl mb-4">
                    <span role="img" aria-label="developer">
                      👨‍💻
                    </span>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">Development Team</h3>
                  <p className="text-blue-600 font-medium mb-2">Senior Full-Stack Developers</p>
                  <p className="text-gray-600">
                    Expert developers with years of experience in modern web technologies, mobile
                    development, and cloud architecture.
                  </p>
                </div>
                <div className="text-center p-6 bg-white rounded-lg shadow-lg">
                  <div className="text-5xl mb-4">
                    <span role="img" aria-label="designer">
                      🎨
                    </span>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">Design Team</h3>
                  <p className="text-blue-600 font-medium mb-2">UI/UX Designers</p>
                  <p className="text-gray-600">
                    Creative designers who craft beautiful, intuitive user experiences that engage
                    users and drive business results.
                  </p>
                </div>
                <div className="text-center p-6 bg-white rounded-lg shadow-lg">
                  <div className="text-5xl mb-4">
                    <span role="img" aria-label="robot">
                      🤖
                    </span>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">AI Specialists</h3>
                  <p className="text-blue-600 font-medium mb-2">Machine Learning Engineers</p>
                  <p className="text-gray-600">
                    AI experts who develop intelligent solutions using machine learning, natural
                    language processing, and computer vision.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-4">Ready to Work With Us?</h2>
            <p className="text-xl mb-8">
              Let&apos;s discuss how our team can help transform your business with innovative
              technology solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
              >
                Get In Touch
              </a>
              <a
                href="/services"
                className="bg-transparent border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors"
              >
                View Our Services
              </a>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
