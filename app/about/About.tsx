import React from "react";
import { Helmet } from "react-helmet-async";
import { 
  CheckCircleIcon,
  StarIcon,
  UsersIcon,
  ChartBarIcon,
  ShieldCheckIcon,
  LightBulbIcon
} from "@heroicons/react/24/outline";

const About: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>About Us - Zion Tech Group | AI & IT Solutions Experts</title>
        <meta name="description" content="Learn about Zion Tech Group, a leading provider of AI and IT solutions. Our expert team delivers innovative technology solutions to help businesses transform and grow." />
        <meta name="keywords" content="about us, AI experts, IT professionals, technology team, company history, mission" />
      </Helmet>

      <main>
        {/* Hero Section */}
        <section className="relative bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white via-purple-200 to-cyan-200 bg-clip-text text-transparent">
                About Zion Tech Group
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
                We are passionate technology experts dedicated to transforming businesses through innovative AI and IT solutions.
              </p>
            </div>
          </div>
        </section>

        {/* Mission Section */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                  Our Mission
                </h2>
                <p className="text-lg text-gray-600 mb-6">
                  At Zion Tech Group, we believe that technology should empower businesses to achieve their full potential. 
                  Our mission is to deliver cutting-edge AI and IT solutions that drive real, measurable results for our clients.
                </p>
                <p className="text-lg text-gray-600 mb-8">
                  We combine deep technical expertise with a deep understanding of business challenges to create solutions 
                  that not only work today but scale for tomorrow.
                </p>
                <div className="grid grid-cols-2 gap-6">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-purple-600 mb-2">500+</div>
                    <div className="text-gray-600">Projects Delivered</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-cyan-600 mb-2">50+</div>
                    <div className="text-gray-600">Expert Team Members</div>
                  </div>
                </div>
              </div>
              <div className="bg-gradient-to-br from-purple-100 to-cyan-100 rounded-2xl p-8">
                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-lg flex items-center justify-center flex-shrink-0">
                      <LightBulbIcon className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-gray-900 mb-2">Innovation First</h3>
                      <p className="text-gray-600">We stay at the forefront of technology to deliver the most advanced solutions.</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-lg flex items-center justify-center flex-shrink-0">
                      <UsersIcon className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-gray-900 mb-2">Client-Centric</h3>
                      <p className="text-gray-600">Every solution is tailored to meet the unique needs of our clients.</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-lg flex items-center justify-center flex-shrink-0">
                      <ShieldCheckIcon className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-gray-900 mb-2">Quality Assured</h3>
                      <p className="text-gray-600">We maintain the highest standards of quality and security in all our work.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="py-20 bg-slate-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Our Values
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                The principles that guide everything we do
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-white rounded-xl p-8 shadow-lg">
                <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-full flex items-center justify-center mx-auto mb-6">
                  <CheckCircleIcon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4 text-center">Excellence</h3>
                <p className="text-gray-600 text-center">
                  We strive for excellence in every project, delivering solutions that exceed expectations.
                </p>
              </div>

              <div className="bg-white rounded-xl p-8 shadow-lg">
                <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-full flex items-center justify-center mx-auto mb-6">
                  <StarIcon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4 text-center">Innovation</h3>
                <p className="text-gray-600 text-center">
                  We embrace new technologies and innovative approaches to solve complex business challenges.
                </p>
              </div>

              <div className="bg-white rounded-xl p-8 shadow-lg">
                <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-full flex items-center justify-center mx-auto mb-6">
                  <UsersIcon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4 text-center">Collaboration</h3>
                <p className="text-gray-600 text-center">
                  We work closely with our clients as partners, ensuring their success is our success.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Our Team
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Meet the experts behind our success
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-32 h-32 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-full mx-auto mb-6 flex items-center justify-center">
                  <span className="text-4xl font-bold text-white">K</span>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Kleber</h3>
                <p className="text-purple-600 font-semibold mb-2">CEO & Founder</p>
                <p className="text-gray-600">
                  Visionary leader with 15+ years of experience in AI and technology innovation.
                </p>
              </div>

              <div className="text-center">
                <div className="w-32 h-32 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-full mx-auto mb-6 flex items-center justify-center">
                  <span className="text-4xl font-bold text-white">A</span>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">AI Team</h3>
                <p className="text-purple-600 font-semibold mb-2">Machine Learning Experts</p>
                <p className="text-gray-600">
                  Specialists in developing and deploying cutting-edge AI solutions.
                </p>
              </div>

              <div className="text-center">
                <div className="w-32 h-32 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-full mx-auto mb-6 flex items-center justify-center">
                  <span className="text-4xl font-bold text-white">S</span>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Security Team</h3>
                <p className="text-purple-600 font-semibold mb-2">Cybersecurity Experts</p>
                <p className="text-gray-600">
                  Certified professionals ensuring your systems are secure and compliant.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Contact CTA */}
        <section className="py-20 bg-gradient-to-r from-purple-600 to-cyan-600">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Work With Us?
            </h2>
            <p className="text-xl text-purple-100 mb-8 max-w-3xl mx-auto">
              Let's discuss how our team can help transform your business with innovative technology solutions.
            </p>
            <a
              href="/contact"
              className="inline-flex items-center px-8 py-4 bg-white text-purple-600 font-semibold rounded-lg hover:bg-gray-100 transition-all duration-300 transform hover:scale-105"
            >
              Get In Touch
            </a>
          </div>
        </section>
      </main>
    </>
  );
};

export default About;
