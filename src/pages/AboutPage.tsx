import React from 'react';
import { Helmet } from 'react-helmet-async';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

const AboutPage: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>About Us - Zion Tech Group</title>
        <meta
          name="description"
          content="Learn about Zion Tech Group's mission to transform businesses with cutting-edge AI solutions, quantum computing, and digital transformation services."
        />
        <meta
          name="keywords"
          content="about Zion Tech Group, AI company, enterprise solutions, digital transformation, technology leadership"
        />
      </Helmet>

      <div className="min-h-screen bg-white">
        <Navigation />
        
        <main className="pt-16">
          {/* Hero Section */}
          <section className="bg-gradient-to-r from-indigo-600 to-purple-700 text-white py-20">
            <div className="container mx-auto px-4 text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">About Zion Tech Group</h1>
              <p className="text-xl md:text-2xl max-w-3xl mx-auto">
                Pioneering the future of AI-powered enterprise solutions
              </p>
            </div>
          </section>

          {/* Mission Section */}
          <section className="py-16">
            <div className="container mx-auto px-4">
              <div className="max-w-4xl mx-auto text-center">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">Our Mission</h2>
                <p className="text-lg text-gray-600 leading-relaxed mb-8">
                  At Zion Tech Group, we believe that artificial intelligence has the power to transform 
                  businesses and create unprecedented value. Our mission is to democratize AI technology 
                  and make it accessible to enterprises of all sizes, helping them achieve sustainable 
                  growth and competitive advantage.
                </p>
                <p className="text-lg text-gray-600 leading-relaxed">
                  We combine cutting-edge research with practical implementation to deliver AI solutions 
                  that not only meet today's challenges but anticipate tomorrow's opportunities.
                </p>
              </div>
            </div>
          </section>

          {/* Values Section */}
          <section className="bg-gray-50 py-16">
            <div className="container mx-auto px-4">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 text-center mb-12">Our Values</h2>
              <div className="grid md:grid-cols-3 gap-8">
                <div className="text-center">
                  <div className="w-16 h-16 bg-indigo-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl">🎯</span>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">Innovation</h3>
                  <p className="text-gray-600">
                    We constantly push the boundaries of what's possible with AI and technology, 
                    staying ahead of industry trends and emerging opportunities.
                  </p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-indigo-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl">🤝</span>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">Partnership</h3>
                  <p className="text-gray-600">
                    We work closely with our clients as strategic partners, understanding their 
                    unique challenges and co-creating solutions that drive real business value.
                  </p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-indigo-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl">🔒</span>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">Integrity</h3>
                  <p className="text-gray-600">
                    We maintain the highest standards of ethical AI development and data protection, 
                    ensuring our solutions are both powerful and responsible.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Team Section */}
          <section className="py-16">
            <div className="container mx-auto px-4">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 text-center mb-12">Leadership Team</h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                <div className="text-center">
                  <div className="w-32 h-32 bg-gradient-to-r from-indigo-400 to-purple-500 rounded-full mx-auto mb-4 flex items-center justify-center">
                    <span className="text-4xl text-white font-bold">K</span>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Kleber</h3>
                  <p className="text-indigo-600 font-medium mb-2">CEO & Founder</p>
                  <p className="text-gray-600 text-sm">
                    Visionary leader with 15+ years in AI and enterprise technology, 
                    driving innovation and strategic growth.
                  </p>
                </div>
                <div className="text-center">
                  <div className="w-32 h-32 bg-gradient-to-r from-green-400 to-blue-500 rounded-full mx-auto mb-4 flex items-center justify-center">
                    <span className="text-4xl text-white font-bold">S</span>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Sarah Chen</h3>
                  <p className="text-indigo-600 font-medium mb-2">CTO</p>
                  <p className="text-gray-600 text-sm">
                    Technology expert specializing in quantum computing and advanced AI algorithms, 
                    leading our technical innovation.
                  </p>
                </div>
                <div className="text-center">
                  <div className="w-32 h-32 bg-gradient-to-r from-purple-400 to-pink-500 rounded-full mx-auto mb-4 flex items-center justify-center">
                    <span className="text-4xl text-white font-bold">M</span>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Michael Rodriguez</h3>
                  <p className="text-indigo-600 font-medium mb-2">VP of Operations</p>
                  <p className="text-gray-600 text-sm">
                    Operations leader ensuring seamless delivery of AI solutions and 
                    exceptional client experiences.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Stats Section */}
          <section className="bg-indigo-600 text-white py-16">
            <div className="container mx-auto px-4">
              <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Our Impact</h2>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
                <div>
                  <div className="text-4xl font-bold mb-2">500+</div>
                  <div className="text-indigo-200">Enterprise Clients</div>
                </div>
                <div>
                  <div className="text-4xl font-bold mb-2">$2.5B+</div>
                  <div className="text-indigo-200">Cost Savings Delivered</div>
                </div>
                <div>
                  <div className="text-4xl font-bold mb-2">99.9%</div>
                  <div className="text-indigo-200">Uptime Guarantee</div>
                </div>
                <div>
                  <div className="text-4xl font-bold mb-2">300%</div>
                  <div className="text-indigo-200">Average ROI</div>
                </div>
              </div>
            </div>
          </section>

          {/* CTA Section */}
          <section className="py-16">
            <div className="container mx-auto px-4 text-center">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Ready to Work With Us?
              </h2>
              <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
                Join the hundreds of enterprises that have transformed their operations with our AI solutions.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="/contact"
                  className="inline-block bg-indigo-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-indigo-700 transition-all duration-300 hover:scale-105 focus:outline-none focus:ring-4 focus:ring-indigo-300"
                >
                  Get Started Today
                </a>
                <a
                  href="tel:+13026009898"
                  className="inline-block bg-white text-indigo-600 px-8 py-4 rounded-lg font-semibold border-2 border-indigo-600 hover:bg-indigo-50 transition-all duration-300 hover:scale-105 focus:outline-none focus:ring-4 focus:ring-indigo-300"
                >
                  Call (302) 600-9898
                </a>
              </div>
            </div>
          </section>
        </main>
        
        <Footer />
      </div>
    </>
  );
};

export default AboutPage;