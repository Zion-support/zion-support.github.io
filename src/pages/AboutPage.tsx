import React from 'react';
import { Helmet } from 'react-helmet-async';

const AboutPage: React.FC = () => {
  return (
    <React.Fragment>
      <Helmet>
        <title>About Us | Zion Tech Group</title>
        <meta
          name="description"
          content="Learn about Zion Tech Group's mission to revolutionize business through AI, quantum computing, and digital transformation."
        />
        <meta
          name="keywords"
          content="about us, company, AI experts, digital transformation, enterprise solutions"
        />
      </Helmet>
      <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-white to-purple-50">
        <div className="container mx-auto px-4 py-16">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-5xl font-bold text-gray-900 mb-8 text-center">About Zion Tech Group</h1>
            
            <div className="prose prose-lg max-w-none">
              <p className="text-xl text-gray-600 mb-8 text-center">
                Leading the future of enterprise technology through innovative AI solutions, 
                quantum computing, and digital transformation.
              </p>

              <div className="grid md:grid-cols-2 gap-12 mb-16">
                <div>
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Mission</h2>
                  <p className="text-gray-600 mb-4">
                    To revolutionize how businesses operate by harnessing the power of artificial intelligence, 
                    quantum computing, and cutting-edge technology solutions.
                  </p>
                  <p className="text-gray-600">
                    We believe in creating sustainable, scalable solutions that drive real business value 
                    and competitive advantage for our clients.
                  </p>
                </div>
                
                <div>
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Vision</h2>
                  <p className="text-gray-600 mb-4">
                    To be the world's leading provider of AI-powered enterprise solutions, 
                    enabling organizations to achieve unprecedented levels of efficiency and innovation.
                  </p>
                  <p className="text-gray-600">
                    We envision a future where every business can leverage advanced technology 
                    to solve complex challenges and unlock new opportunities.
                  </p>
                </div>
              </div>

              <div className="bg-white rounded-lg shadow-lg p-8 mb-16">
                <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">Our Expertise</h2>
                <div className="grid md:grid-cols-3 gap-8">
                  <div className="text-center">
                    <div className="text-4xl mb-4">🤖</div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">AI & Machine Learning</h3>
                    <p className="text-gray-600">
                      Advanced AI solutions including predictive analytics, natural language processing, 
                      and autonomous systems.
                    </p>
                  </div>
                  <div className="text-center">
                    <div className="text-4xl mb-4">⚛️</div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">Quantum Computing</h3>
                    <p className="text-gray-600">
                      Cutting-edge quantum algorithms and optimization solutions for complex 
                      problem-solving challenges.
                    </p>
                  </div>
                  <div className="text-center">
                    <div className="text-4xl mb-4">🔄</div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">Digital Transformation</h3>
                    <p className="text-gray-600">
                      Complete business process automation, cloud migration, and system integration services.
                    </p>
                  </div>
                </div>
              </div>

              <div className="text-center">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Ready to Transform Your Business?</h2>
                <p className="text-xl text-gray-600 mb-8">
                  Let's discuss how we can help you achieve your goals with our innovative solutions.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <a
                    href="/contact"
                    className="bg-indigo-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-indigo-700 transition-all duration-300 hover:scale-105 focus:outline-none focus:ring-4 focus:ring-indigo-300 text-lg"
                  >
                    Get in Touch
                  </a>
                  <a
                    href="/services"
                    className="border-2 border-indigo-600 text-indigo-600 px-8 py-4 rounded-lg font-semibold hover:bg-indigo-600 hover:text-white transition-all duration-300 hover:scale-105 focus:outline-none focus:ring-4 focus:ring-indigo-300 text-lg"
                  >
                    View Our Services
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default AboutPage;