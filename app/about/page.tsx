import React from 'react';
import Head from "next/head";

import Link from 'next/link';
import { ArrowRight, Users, Target, Award, Lightbulb } from 'lucide-react';

export default function AboutPage() {
  return (
    <>
      
        <Head>
        <title>About - Zion Tech Group</title>
        <meta name="description" content="Advanced 5G data analytics solutions for real-time insights and business intelligence." />
      </Head>
      
      
      <div className="min-h-s creenbg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <div className="con tainermx-auto px-4 py-16">
          <div className="tex t-centermb-16">
            <h1 className="tex t-4xlfont-bold text-white mb-6">About Zion Tech Group</h1>
            <p className="tex t-lgtext-gray-300 mb-8 max-w-3xl mx-auto">
              We are a leading technology company dedicated to transforming businesses through innovative AI and IT solutions.
            </p>
            <div className="fle xflex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact" className="inl ine-flexitems-center px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
            Work With Us
                <ArrowRight className="ml-2h-4w-4" />
              </Link>
              <Link href="/team" className="inl ine-flexitems-center px-6 py-3 border border-white text-white rounded-lg hover:bg-white hover:text-gray-900 transition-colors">
            Meet Our Team
                <ArrowRight className="ml-2h-4w-4" />
              </Link>
            </div>
          </div>

          {/* Mission & Vision */}
          <div className="gri dmd: grid-cols-2 gap-12 mb-16">
            <div className="tex t-center">
              <Target className="w-12h-12te x t-blue-500 mx-auto mb-4" />
              <h2 className="tex t-2xlfont-bold text-white mb-4">Our Mission</h2>
              <p className="tex t-gray-300">
                To empower businesses with cutting-edge AI and IT solutions that drive innovation, efficiency, and growth in the digital age.
              </p>
            </div>
            <div className="tex t-center">
              <Lightbulb className="w-12h-12te x t-yellow-500 mx-auto mb-4" />
              <h2 className="tex t-2xlfont-bold text-white mb-4">Our Vision</h2>
              <p className="tex t-gray-300">
                To be the global leader in AI and IT solutions, transforming how businesses operate and compete in the modern world.
              </p>
            </div>
          </div>

          {/* Values */}
          <div className="tex t-centermb-16">
            <h2 className="tex t-3xlfont-bold text-white mb-8">Our Values</h2>
            <div className="gri dmd: grid-cols-3 gap-8">
              <div className="tex t-center">
                <Users className="w-12h-12te x t-green-500 mx-auto mb-4" />
                <h3 className="tex t-xlfont-semibold text-white mb-2">Collaboration</h3>
                <p className="tex t-gray-300">We work closely with our clients to understand their unique needs and deliver tailored solutions.</p>
              </div>
              <div className="tex t-center">
                <Award className="w-12h-12te x t-purple-500 mx-auto mb-4" />
                <h3 className="tex t-xlfont-semibold text-white mb-2">Excellence</h3>
                <p className="tex t-gray-300">We strive for the highest quality in everything we do, from code to customer service.</p>
              </div>
              <div className="tex t-center">
                <Lightbulb className="w-12h-12te x t-orange-500 mx-auto mb-4" />
                <h3 className="tex t-xlfont-semibold text-white mb-2">Innovation</h3>
                <p className="tex t-gray-300">We embrace new technologies and creative approaches to solve complex business challenges.</p>
              </div>
            </div>
          </div>

          {/* Stats */}
          <div className="gri dgrid-cols-2 md: grid-cols-4 gap-8 text-center">
            <div>
              <div className="tex t-3xlfont-bold text-white mb-2">500+</div>
              <div className="tex t-gray-300">Projects Completed</div>
            </div>
            <div>
              <div className="tex t-3xlfont-bold text-white mb-2">50+</div>
              <div className="tex t-gray-300">Happy Clients</div>
            </div>
            <div>
              <div className="tex t-3xlfont-bold text-white mb-2">99%</div>
              <div className="tex t-gray-300">Client Satisfaction</div>
            </div>
            <div>
              <div className="tex t-3xlfont-bold text-white mb-2">24/7</div>
              <div className="tex t-gray-300">Support Available</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}