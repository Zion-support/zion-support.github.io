import React from 'react';
import Head from 'next/head';

export default function About() {
  return (
    <>
      <Head>
        <title>About Us - Zion Tech Group</title>
        <meta name="description" content="Learn about Zion Tech Group's mission, values, and commitment to delivering cutting-edge technology solutions that transform businesses." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900">
        {/* Hero Section */}
        <section className="relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20"></div>
          <div className="relative container mx-auto px-4 py-20 lg:py-32">
            <div className="text-center max-w-4xl mx-auto">
              <h1 className="text-5xl lg:text-7xl font-bold text-white mb-8 leading-tight">
                About <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">Zion Tech Group</span>
              </h1>
              <p className="text-xl lg:text-2xl text-gray-300 mb-12 leading-relaxed">
                We are a leading technology solutions provider dedicated to transforming businesses 
                through innovative digital solutions and cutting-edge technology.
              </p>
            </div>
          </div>
        </section>

        {/* Mission Section */}
        <section className="py-20 bg-slate-800/50">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-4xl lg:text-5xl font-bold text-white mb-8">
                  Our <span className="gradient-text">Mission</span>
                </h2>
                <p className="text-xl text-gray-300 mb-6 leading-relaxed">
                  To empower businesses with innovative technology solutions that drive growth, 
                  efficiency, and digital transformation. We believe technology should be accessible, 
                  reliable, and transformative.
                </p>
                <p className="text-lg text-gray-400 leading-relaxed">
                  Our mission is to bridge the gap between complex technology and business needs, 
                  delivering solutions that not only meet current requirements but also scale for 
                  future growth and innovation.
                </p>
              </div>
              <div className="bg-gradient-to-r from-blue-600/20 to-purple-600/20 rounded-2xl p-8 border border-slate-700">
                <div className="grid grid-cols-2 gap-6">
                  <div className="text-center">
                    <div className="text-4xl font-bold text-blue-400 mb-2">100+</div>
                    <div className="text-gray-300">Projects Completed</div>
                  </div>
                  <div className="text-center">
                    <div className="text-4xl font-bold text-purple-400 mb-2">50+</div>
                    <div className="text-gray-300">Happy Clients</div>
                  </div>
                  <div className="text-center">
                    <div className="text-4xl font-bold text-green-400 mb-2">5+</div>
                    <div className="text-gray-300">Years Experience</div>
                  </div>
                  <div className="text-center">
                    <div className="text-4xl font-bold text-orange-400 mb-2">24/7</div>
                    <div className="text-gray-300">Support Available</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
                Our <span className="gradient-text">Values</span>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                The principles that guide everything we do and shape our approach to technology solutions.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="card text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center mx-auto mb-6">
                  <span className="text-2xl">🎯</span>
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">Excellence</h3>
                <p className="text-gray-300">
                  We strive for excellence in every project, delivering high-quality solutions that exceed expectations.
                </p>
              </div>

              <div className="card text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-green-600 to-blue-600 rounded-lg flex items-center justify-center mx-auto mb-6">
                  <span className="text-2xl">🤝</span>
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">Collaboration</h3>
                <p className="text-gray-300">
                  We work closely with our clients as partners, ensuring their vision becomes reality.
                </p>
              </div>

              <div className="card text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg flex items-center justify-center mx-auto mb-6">
                  <span className="text-2xl">💡</span>
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">Innovation</h3>
                <p className="text-gray-300">
                  We embrace cutting-edge technologies and innovative approaches to solve complex challenges.
                </p>
              </div>

              <div className="card text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-orange-600 to-red-600 rounded-lg flex items-center justify-center mx-auto mb-6">
                  <span className="text-2xl">🔒</span>
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">Integrity</h3>
                <p className="text-gray-300">
                  We maintain the highest standards of honesty, transparency, and ethical business practices.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section className="py-20 bg-slate-800/50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
                Our <span className="gradient-text">Team</span>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Meet the talented individuals who make Zion Tech Group a leader in technology solutions.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="card text-center">
                <div className="w-24 h-24 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-3xl">👨‍💻</span>
                </div>
                <h3 className="text-2xl font-bold text-white mb-2">Development Team</h3>
                <p className="text-gray-400 mb-4">Senior Full-Stack Developers</p>
                <p className="text-gray-300">
                  Expert developers with years of experience in modern web technologies, 
                  mobile development, and cloud architecture.
                </p>
              </div>

              <div className="card text-center">
                <div className="w-24 h-24 bg-gradient-to-r from-green-600 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-3xl">🎨</span>
                </div>
                <h3 className="text-2xl font-bold text-white mb-2">Design Team</h3>
                <p className="text-gray-400 mb-4">UI/UX Designers</p>
                <p className="text-gray-300">
                  Creative designers who craft beautiful, intuitive user experiences 
                  that engage users and drive business results.
                </p>
              </div>

              <div className="card text-center">
                <div className="w-24 h-24 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-3xl">🤖</span>
                </div>
                <h3 className="text-2xl font-bold text-white mb-2">AI Specialists</h3>
                <p className="text-gray-400 mb-4">Machine Learning Engineers</p>
                <p className="text-gray-300">
                  AI experts who develop intelligent solutions using machine learning, 
                  natural language processing, and computer vision.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-blue-600/20 to-purple-600/20">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
              Ready to Work With Us?
            </h2>
            <p className="text-xl text-gray-300 mb-12 max-w-3xl mx-auto">
              Let's discuss how our team can help transform your business with innovative technology solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <a href="/contact" className="btn-primary">
                Get In Touch
              </a>
              <a href="/services" className="btn-secondary">
                View Our Services
              </a>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}