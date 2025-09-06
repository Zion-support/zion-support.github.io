import React from 'react';
import { Users, Target, Award, Globe } from 'lucide-react';

const About: React.FC = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-blue-600 to-purple-700 text-white py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold mb-6">
            About Zion Tech Group
          </h1>
          <p className="text-xl sm:text-2xl mb-8 opacity-90 max-w-3xl mx-auto">
            Leading the future of technology with innovative AI, SaaS, and IT solutions 
            that empower businesses worldwide.
          </p>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Mission</h2>
              <p className="text-lg text-gray-600 mb-6">
                To democratize access to cutting-edge technology solutions by providing 
                innovative AI, SaaS, and IT services that enable businesses of all sizes 
                to compete and thrive in the digital economy.
              </p>
              <p className="text-lg text-gray-600">
                We believe that every organization deserves access to enterprise-grade 
                technology solutions, regardless of their size or budget.
              </p>
            </div>
            <div className="bg-blue-50 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Vision</h3>
              <p className="text-lg text-gray-600">
                To be the global leader in accessible technology solutions, creating a 
                world where innovation is not limited by resources, but enabled by 
                intelligent, scalable, and affordable technology.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-16 bg-gray-50 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Values</h2>
            <p className="text-xl text-gray-600">
              The principles that guide everything we do
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Target className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Innovation</h3>
              <p className="text-gray-600">
                Continuously pushing the boundaries of what's possible with technology
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-purple-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Collaboration</h3>
              <p className="text-gray-600">
                Working closely with our clients as partners in their success
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Excellence</h3>
              <p className="text-gray-600">
                Delivering exceptional quality in every project we undertake
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Globe className="w-8 h-8 text-orange-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Impact</h3>
              <p className="text-gray-600">
                Creating meaningful change that benefits businesses and society
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Leadership</h2>
            <p className="text-xl text-gray-600">
              Meet the experts driving innovation at Zion Tech Group
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-32 h-32 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold text-2xl">K</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Kleber Silva</h3>
              <p className="text-blue-600 font-medium mb-2">Founder & CEO</p>
              <p className="text-gray-600">
                Visionary leader with 15+ years in AI and enterprise technology solutions
              </p>
            </div>

            <div className="text-center">
              <div className="w-32 h-32 bg-gradient-to-r from-green-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold text-2xl">T</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Tech Team</h3>
              <p className="text-green-600 font-medium mb-2">Engineering Excellence</p>
              <p className="text-gray-600">
                World-class engineers specializing in AI, cloud, and scalable architectures
              </p>
            </div>

            <div className="text-center">
              <div className="w-32 h-32 bg-gradient-to-r from-purple-500 to-pink-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold text-2xl">S</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Strategy Team</h3>
              <p className="text-purple-600 font-medium mb-2">Business Innovation</p>
              <p className="text-gray-600">
                Strategic advisors helping clients achieve digital transformation goals
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="bg-blue-700 text-white py-16 px-4 sm:px-6 lg:px-8 text-center">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold mb-6">
            Ready to Work Together?
          </h2>
          <p className="text-lg sm:text-xl mb-8 opacity-90">
            Let's discuss how we can help transform your business with cutting-edge technology.
          </p>
          <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-6">
            <a
              href="tel:+13024640950"
              className="bg-white text-blue-700 hover:bg-gray-100 px-8 py-3 rounded-full text-lg font-semibold transition-all duration-300 transform hover:scale-105"
            >
              Call Us: +1 302 464 0950
            </a>
            <a
              href="mailto:kleber@ziontechgroup.com"
              className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-blue-700 px-8 py-3 rounded-full text-lg font-semibold transition-all duration-300 transform hover:scale-105"
            >
              Email Us
            </a>
          </div>
          <p className="text-sm mt-8 opacity-80">
            364 E Main St STE 1008, Middletown DE 19709
          </p>
        </div>
      </section>
    </div>
  );
};

export default About;