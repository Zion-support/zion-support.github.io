import React from "react";

const About: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-16">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-gray-900 mb-8">About Zion Tech Group</h1>
        <div className="prose max-w-4xl">
          <p className="text-lg text-gray-600 mb-6">
            Zion Tech is a leading technology company specializing in innovative
            solutions for businesses of all sizes. We combine cutting-edge
            technology with deep industry expertise to deliver exceptional
            results.
          </p>
          <p className="text-lg text-gray-600">
            Our team of experienced professionals is dedicated to helping our
            clients achieve their technology goals and drive business growth.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Mission</h3>
              <p className="text-gray-600">
                To empower businesses with AI-driven solutions that automate processes, enhance productivity, 
                and drive exponential growth through innovative technology.
              </p>
            </div>
            <div className="text-center">
              <div className="w-32 h-32 bg-gradient-to-r from-green-500 to-blue-600 rounded-full mx-auto mb-4 flex items-center justify-center">
                <span className="text-white text-4xl font-bold">A</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">AI Team</h3>
              <p className="text-gray-600">Machine Learning Engineers</p>
            </div>
            <div className="text-center">
              <div className="w-32 h-32 bg-gradient-to-r from-purple-500 to-pink-600 rounded-full mx-auto mb-4 flex items-center justify-center">
                <span className="text-white text-4xl font-bold">S</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Security Team</h3>
              <p className="text-gray-600">Cybersecurity Experts</p>
            </div>
          </div>
        </div>

        {/* Stats */}
        <div className="bg-blue-600 text-white rounded-lg p-8 mb-16">
          <h2 className="text-3xl font-bold text-center mb-8">Our Impact</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold mb-2">100+</div>
              <div className="text-blue-200">Projects Completed</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">50+</div>
              <div className="text-blue-200">Happy Clients</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">5+</div>
              <div className="text-blue-200">Years Experience</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">24/7</div>
              <div className="text-blue-200">Support Available</div>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Ready to Work With Us?</h2>
          <p className="text-xl text-gray-600 mb-8">
            Let's discuss how we can help transform your business with our technology solutions.
          </p>
          <a 
            href="/contact" 
            className="inline-block bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors"
          >
            Get in Touch
          </a>
        </div>
      </div>
    </div>
  );
};

export default About;
