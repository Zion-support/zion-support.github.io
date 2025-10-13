import { ArrowRight, Users, Zap, Shield, Globe, Mail, MapPin, Clock, CheckCircle, Star, Award } from "lucide-react";
import { Helmet } from "react-helmet-async";
import React from 'react';
import { Link } from "react-router-dom";

const CareersPage = () => {
  return (
    <>
      <Helmet>
        <title>Careers at Zion Tech Group - Join Our Team</title>
        <meta name="description" content="Join Zion Tech Group and be part of the future of AI and IT solutions. Explore exciting career opportunities in technology, innovation, and digital transformation." />
        <meta name="keywords" content="careers, jobs, AI careers, IT careers, technology jobs, Zion Tech Group" />
        <meta property="og:title" content="Careers at Zion Tech Group - Join Our Team" />
        <meta property="og:description" content="Join Zion Tech Group and be part of the future of AI and IT solutions. Explore exciting career opportunities in technology, innovation, and digital transformation." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://ziontechgroup.com/careers" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
        <section className="relative py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center">
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                Join Our
                <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                  {" "}Innovation Team
                </span>
              </h1>
              <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
                Be part of the future of AI and IT solutions. Work with cutting-edge technology 
                and help shape the digital transformation of businesses worldwide.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  to="/contact"
                  className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-500 text-white font-semibold rounded-lg hover:from-cyan-600 hover:to-purple-600 transition-all duration-300 transform hover:scale-105"
                >
                  View Open Positions
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
                <Link
                  to="/about"
                  className="inline-flex items-center px-8 py-4 border-2 border-cyan-400 text-cyan-400 font-semibold rounded-lg hover:bg-cyan-400 hover:text-white transition-all duration-300"
                >
                  Learn About Us
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Why Work With Us Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Why Choose Zion Tech Group?
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                We offer more than just a job - we provide a platform for growth, innovation, and impact.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20">
                <div className="w-12 h-12 bg-gradient-to-r from-cyan-400 to-purple-400 rounded-lg flex items-center justify-center mb-6">
                  <Zap className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-4">Cutting-Edge Technology</h3>
                <p className="text-gray-300">
                  Work with the latest AI, machine learning, and cloud technologies that shape the future.
                </p>
              </div>

              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20">
                <div className="w-12 h-12 bg-gradient-to-r from-purple-400 to-pink-400 rounded-lg flex items-center justify-center mb-6">
                  <Users className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-4">Collaborative Culture</h3>
                <p className="text-gray-300">
                  Join a diverse team of innovators who value collaboration, creativity, and continuous learning.
                </p>
              </div>

              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20">
                <div className="w-12 h-12 bg-gradient-to-r from-green-400 to-blue-400 rounded-lg flex items-center justify-center mb-6">
                  <Shield className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-4">Work-Life Balance</h3>
                <p className="text-gray-300">
                  Flexible working arrangements and comprehensive benefits that support your well-being.
                </p>
              </div>

              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20">
                <div className="w-12 h-12 bg-gradient-to-r from-yellow-400 to-orange-400 rounded-lg flex items-center justify-center mb-6">
                  <Award className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-4">Career Growth</h3>
                <p className="text-gray-300">
                  Clear career paths, mentorship programs, and opportunities for professional development.
                </p>
              </div>

              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20">
                <div className="w-12 h-12 bg-gradient-to-r from-pink-400 to-red-400 rounded-lg flex items-center justify-center mb-6">
                  <Globe className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-4">Global Impact</h3>
                <p className="text-gray-300">
                  Make a difference by helping businesses worldwide transform through technology.
                </p>
              </div>

              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20">
                <div className="w-12 h-12 bg-gradient-to-r from-indigo-400 to-purple-400 rounded-lg flex items-center justify-center mb-6">
                  <Star className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-4">Innovation Focus</h3>
                <p className="text-gray-300">
                  Be part of groundbreaking projects that push the boundaries of what's possible.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Open Positions Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white/5">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Open Positions
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Explore our current openings and find the perfect role for your skills and aspirations.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20">
                <h3 className="text-2xl font-semibold text-white mb-4">Senior AI Engineer</h3>
                <div className="flex items-center gap-4 mb-4">
                  <span className="flex items-center text-gray-300">
                    <MapPin className="h-4 w-4 mr-2" />
                    Remote / Delaware
                  </span>
                  <span className="flex items-center text-gray-300">
                    <Clock className="h-4 w-4 mr-2" />
                    Full-time
                  </span>
                </div>
                <p className="text-gray-300 mb-6">
                  Lead the development of cutting-edge AI solutions and machine learning models that power our next-generation products.
                </p>
                <div className="flex flex-wrap gap-2 mb-6">
                  <span className="px-3 py-1 bg-cyan-500/20 text-cyan-300 rounded-full text-sm">Python</span>
                  <span className="px-3 py-1 bg-purple-500/20 text-purple-300 rounded-full text-sm">TensorFlow</span>
                  <span className="px-3 py-1 bg-green-500/20 text-green-300 rounded-full text-sm">PyTorch</span>
                  <span className="px-3 py-1 bg-blue-500/20 text-blue-300 rounded-full text-sm">AWS</span>
                </div>
                <Link
                  to="/contact"
                  className="inline-flex items-center text-cyan-400 hover:text-cyan-300 font-semibold"
                >
                  Apply Now
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </div>

              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20">
                <h3 className="text-2xl font-semibold text-white mb-4">Full Stack Developer</h3>
                <div className="flex items-center gap-4 mb-4">
                  <span className="flex items-center text-gray-300">
                    <MapPin className="h-4 w-4 mr-2" />
                    Remote / Delaware
                  </span>
                  <span className="flex items-center text-gray-300">
                    <Clock className="h-4 w-4 mr-2" />
                    Full-time
                  </span>
                </div>
                <p className="text-gray-300 mb-6">
                  Build scalable web applications and APIs that integrate seamlessly with our AI-powered solutions.
                </p>
                <div className="flex flex-wrap gap-2 mb-6">
                  <span className="px-3 py-1 bg-cyan-500/20 text-cyan-300 rounded-full text-sm">React</span>
                  <span className="px-3 py-1 bg-purple-500/20 text-purple-300 rounded-full text-sm">Node.js</span>
                  <span className="px-3 py-1 bg-green-500/20 text-green-300 rounded-full text-sm">TypeScript</span>
                  <span className="px-3 py-1 bg-blue-500/20 text-blue-300 rounded-full text-sm">PostgreSQL</span>
                </div>
                <Link
                  to="/contact"
                  className="inline-flex items-center text-cyan-400 hover:text-cyan-300 font-semibold"
                >
                  Apply Now
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </div>

              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20">
                <h3 className="text-2xl font-semibold text-white mb-4">DevOps Engineer</h3>
                <div className="flex items-center gap-4 mb-4">
                  <span className="flex items-center text-gray-300">
                    <MapPin className="h-4 w-4 mr-2" />
                    Remote / Delaware
                  </span>
                  <span className="flex items-center text-gray-300">
                    <Clock className="h-4 w-4 mr-2" />
                    Full-time
                  </span>
                </div>
                <p className="text-gray-300 mb-6">
                  Design and maintain our cloud infrastructure, ensuring high availability and scalability of our services.
                </p>
                <div className="flex flex-wrap gap-2 mb-6">
                  <span className="px-3 py-1 bg-cyan-500/20 text-cyan-300 rounded-full text-sm">AWS</span>
                  <span className="px-3 py-1 bg-purple-500/20 text-purple-300 rounded-full text-sm">Docker</span>
                  <span className="px-3 py-1 bg-green-500/20 text-green-300 rounded-full text-sm">Kubernetes</span>
                  <span className="px-3 py-1 bg-blue-500/20 text-blue-300 rounded-full text-sm">Terraform</span>
                </div>
                <Link
                  to="/contact"
                  className="inline-flex items-center text-cyan-400 hover:text-cyan-300 font-semibold"
                >
                  Apply Now
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </div>

              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20">
                <h3 className="text-2xl font-semibold text-white mb-4">UX/UI Designer</h3>
                <div className="flex items-center gap-4 mb-4">
                  <span className="flex items-center text-gray-300">
                    <MapPin className="h-4 w-4 mr-2" />
                    Remote / Delaware
                  </span>
                  <span className="flex items-center text-gray-300">
                    <Clock className="h-4 w-4 mr-2" />
                    Full-time
                  </span>
                </div>
                <p className="text-gray-300 mb-6">
                  Create intuitive and engaging user experiences for our AI-powered applications and platforms.
                </p>
                <div className="flex flex-wrap gap-2 mb-6">
                  <span className="px-3 py-1 bg-cyan-500/20 text-cyan-300 rounded-full text-sm">Figma</span>
                  <span className="px-3 py-1 bg-purple-500/20 text-purple-300 rounded-full text-sm">Adobe XD</span>
                  <span className="px-3 py-1 bg-green-500/20 text-green-300 rounded-full text-sm">Sketch</span>
                  <span className="px-3 py-1 bg-blue-500/20 text-blue-300 rounded-full text-sm">Principle</span>
                </div>
                <Link
                  to="/contact"
                  className="inline-flex items-center text-cyan-400 hover:text-cyan-300 font-semibold"
                >
                  Apply Now
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Benefits & Perks
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                We believe in taking care of our team with comprehensive benefits and perks.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-cyan-400 to-purple-400 rounded-full flex items-center justify-center mx-auto mb-4">
                  <CheckCircle className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">Health Insurance</h3>
                <p className="text-gray-300">Comprehensive medical, dental, and vision coverage</p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full flex items-center justify-center mx-auto mb-4">
                  <CheckCircle className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">Flexible PTO</h3>
                <p className="text-gray-300">Unlimited paid time off and flexible working hours</p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-green-400 to-blue-400 rounded-full flex items-center justify-center mx-auto mb-4">
                  <CheckCircle className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">Learning Budget</h3>
                <p className="text-gray-300">Annual budget for courses, conferences, and certifications</p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-yellow-400 to-orange-400 rounded-full flex items-center justify-center mx-auto mb-4">
                  <CheckCircle className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">Stock Options</h3>
                <p className="text-gray-300">Equity participation in our growing company</p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-cyan-500/10 to-purple-500/10">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Join Our Team?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Don't see a position that matches your skills? We're always looking for talented individuals 
              who share our passion for innovation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-500 text-white font-semibold rounded-lg hover:from-cyan-600 hover:to-purple-600 transition-all duration-300 transform hover:scale-105"
              >
                Send Us Your Resume
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
              <Link
                to="/about"
                className="inline-flex items-center px-8 py-4 border-2 border-cyan-400 text-cyan-400 font-semibold rounded-lg hover:bg-cyan-400 hover:text-white transition-all duration-300"
              >
                Learn More About Us
              </Link>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default CareersPage;
