import React from 'react';
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
      <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
        {/* Hero Section */}
        <section className="py-20 px-4">
          <div className="max-w-6xl mx-auto text-center">
            <h1 className="text-5xl font-bold text-gray-900 mb-6">
              About <span className="text-blue-600">Zion Tech Group</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              We are a leading technology solutions provider dedicated to helping businesses 
              transform their digital presence with cutting-edge AI, cloud architecture, 
              and innovative development services.
            </p>
          </div>
        </section>

        {/* Mission & Vision */}
        <section className="py-16 px-4 bg-white">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12">
              <div className="text-center">
                <Target className="w-16 h-16 text-blue-600 mx-auto mb-6" />
                <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Mission</h2>
                <p className="text-gray-600">
                  To empower businesses with innovative technology solutions that drive growth, 
                  efficiency, and digital transformation in an ever-evolving technological landscape.
                </p>
              </div>
              <div className="text-center">
                <Globe className="w-16 h-16 text-blue-600 mx-auto mb-6" />
                <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Vision</h2>
                <p className="text-gray-600">
                  To be the global leader in AI-powered business solutions, creating a world 
                  where technology seamlessly integrates with human potential to achieve 
                  extraordinary results.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Values */}
        <section className="py-16 px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-bold text-center text-gray-900 mb-12">Our Values</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center p-6 bg-white rounded-lg shadow-md">
                <Heart className="w-12 h-12 text-red-500 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Passion</h3>
                <p className="text-gray-600">
                  We are passionate about technology and its potential to transform businesses.
                </p>
              </div>
              <div className="text-center p-6 bg-white rounded-lg shadow-md">
                <Zap className="w-12 h-12 text-yellow-500 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Innovation</h3>
                <p className="text-gray-600">
                  We constantly push boundaries to deliver cutting-edge solutions.
                </p>
              </div>
              <div className="text-center p-6 bg-white rounded-lg shadow-md">
                <Users className="w-12 h-12 text-green-500 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Collaboration</h3>
                <p className="text-gray-600">
                  We work closely with our clients to achieve their goals together.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 px-4 bg-blue-600">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-white mb-6">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl text-blue-100 mb-8">
              Let's work together to create innovative solutions that drive your success.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center px-8 py-3 bg-white text-blue-600 rounded-lg hover:bg-gray-100 transition-colors"
            >
              Get Started
              <ArrowRight className="w-5 h-5 ml-2" />
            </Link>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default About;