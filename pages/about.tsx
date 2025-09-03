import type { NextPage } from 'next';
import Layout from '../components/Layout';
import Link from 'next/link';
import { Users, Award, Target, CheckCircle, ArrowRight, Globe, Heart, Zap } from 'lucide-react';

const About: NextPage = () => {
  return (
    <Layout
      title="About Us - Zion Tech Group"
      description="Learn about Zion Tech Group, a leading technology solutions provider helping businesses transform their digital presence with cutting-edge AI, cloud architecture, and innovative development services."
    >
      <section className="bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            About <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-400">Zion Tech Group</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto mb-8">
            We are a leading technology solutions provider, dedicated to transforming businesses through innovative AI, cloud architecture, and cutting-edge development services.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="inline-flex items-center px-8 py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold rounded-lg hover:shadow-lg hover:shadow-blue-500/25 transition-all duration-300"
            >
              Get Started
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
            <Link
              href="/services"
              className="inline-flex items-center px-8 py-3 border border-white/20 text-white font-semibold rounded-lg hover:bg-white/10 transition-all duration-300"
            >
              Our Services
            </Link>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Our Mission</h2>
              <p className="text-lg text-gray-600 mb-6">
                To empower businesses with cutting-edge technology solutions that drive innovation, efficiency, and growth. We believe in the transformative power of AI, cloud computing, and modern development practices.
              </p>
              <div className="flex items-center text-blue-600 font-semibold">
                <Target className="w-5 h-5 mr-2" />
                Innovation First
              </div>
            </div>
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Our Vision</h2>
              <p className="text-lg text-gray-600 mb-6">
                To be the global leader in technology solutions, helping organizations worldwide leverage the power of artificial intelligence and cloud technologies to achieve unprecedented success.
              </p>
              <div className="flex items-center text-purple-600 font-semibold">
                <Globe className="w-5 h-5 mr-2" />
                Global Impact
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Core Values</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              The principles that guide everything we do and shape our culture
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Zap className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Innovation</h3>
              <p className="text-gray-600">Pushing boundaries with cutting-edge technology and creative solutions</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <CheckCircle className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Quality</h3>
              <p className="text-gray-600">Delivering excellence in every project and maintaining the highest standards</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-purple-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Collaboration</h3>
              <p className="text-gray-600">Working closely with clients to achieve their goals and vision</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Heart className="w-8 h-8 text-red-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Passion</h3>
              <p className="text-gray-600">Driven by our love for technology and commitment to client success</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Meet Our Team</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Experienced professionals dedicated to delivering exceptional results
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-32 h-32 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full mx-auto mb-4 flex items-center justify-center">
                <Users className="w-16 h-16 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Expert Developers</h3>
              <p className="text-gray-600">Full-stack developers with expertise in modern technologies</p>
            </div>
            <div className="text-center">
              <div className="w-32 h-32 bg-gradient-to-r from-green-500 to-blue-600 rounded-full mx-auto mb-4 flex items-center justify-center">
                <Award className="w-16 h-16 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">AI Specialists</h3>
              <p className="text-gray-600">Machine learning engineers and AI solution architects</p>
            </div>
            <div className="text-center">
              <div className="w-32 h-32 bg-gradient-to-r from-purple-500 to-pink-600 rounded-full mx-auto mb-4 flex items-center justify-center">
                <Globe className="w-16 h-16 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Cloud Architects</h3>
              <p className="text-gray-600">Cloud infrastructure experts and DevOps professionals</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Transform Your Business?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Let's work together to build innovative solutions that drive your success
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center px-8 py-3 bg-white text-blue-600 font-semibold rounded-lg hover:bg-gray-100 transition-all duration-300"
          >
            Start Your Project
            <ArrowRight className="ml-2 w-5 h-5" />
          </Link>
        </div>
      </section>
    </Layout>
  );
};

export default About;