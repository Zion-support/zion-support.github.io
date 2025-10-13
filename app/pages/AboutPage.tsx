import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Users, Award, Target, Lightbulb } from 'lucide-react';

export default function AboutPage() {
  return (
    <>
      <Helmet>
        <title>About Us - Zion Tech Group</title>
        <meta name="description" content="Learn about Zion Tech Group's mission, values, and team of experts delivering cutting-edge AI and IT solutions." />
      </Helmet>
      
      <div className="min-h-screen bg-slate-900 text-white">
        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-br from-slate-800 to-purple-900">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-5xl md:text-6xl font-bold mb-8 bg-gradient-to-r from-white via-cyan-400 to-purple-400 bg-clip-text text-transparent">
                About Zion Tech Group
              </h1>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                We are a leading technology company specializing in AI solutions, 
                cybersecurity, and digital transformation services.
              </p>
            </div>
          </div>
        </section>

        {/* Mission Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-4xl font-bold text-center mb-12">Our Mission</h2>
              <div className="grid md:grid-cols-2 gap-12 items-center">
                <div>
                  <h3 className="text-2xl font-bold mb-6">Transforming Businesses Through Technology</h3>
                  <p className="text-gray-300 text-lg leading-relaxed mb-6">
                    At Zion Tech Group, we believe that technology should empower businesses to achieve 
                    their full potential. Our mission is to provide cutting-edge AI and IT solutions 
                    that drive innovation, efficiency, and growth.
                  </p>
                  <p className="text-gray-300 text-lg leading-relaxed">
                    We combine deep technical expertise with industry knowledge to deliver solutions 
                    that not only meet today's challenges but also prepare our clients for tomorrow's opportunities.
                  </p>
                </div>
                <div className="bg-gradient-to-br from-slate-800 to-purple-800 p-8 rounded-xl">
                  <Target className="w-16 h-16 text-cyan-400 mb-6" />
                  <h4 className="text-xl font-bold mb-4">Our Vision</h4>
                  <p className="text-gray-300">
                    To be the world's leading provider of AI-powered solutions that transform 
                    how businesses operate and compete in the digital age.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="py-20 bg-slate-800">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-6">Our Values</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                The principles that guide everything we do
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="w-20 h-20 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Lightbulb className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-4">Innovation</h3>
                <p className="text-gray-300">
                  We constantly push the boundaries of what's possible with technology
                </p>
              </div>
              
              <div className="text-center">
                <div className="w-20 h-20 bg-gradient-to-r from-purple-500 to-pink-600 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Users className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-4">Collaboration</h3>
                <p className="text-gray-300">
                  We work closely with our clients as partners in their success
                </p>
              </div>
              
              <div className="text-center">
                <div className="w-20 h-20 bg-gradient-to-r from-green-500 to-emerald-600 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Award className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-4">Excellence</h3>
                <p className="text-gray-300">
                  We deliver the highest quality solutions and services
                </p>
              </div>
              
              <div className="text-center">
                <div className="w-20 h-20 bg-gradient-to-r from-yellow-500 to-orange-600 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Target className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-4">Results</h3>
                <p className="text-gray-300">
                  We focus on delivering measurable business outcomes
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-6">Our Team</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Meet the experts behind our innovative solutions
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              <div className="bg-gradient-to-br from-slate-800 to-purple-800 p-8 rounded-xl text-center">
                <div className="w-24 h-24 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full mx-auto mb-6 flex items-center justify-center">
                  <Users className="w-12 h-12 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-2">AI Engineers</h3>
                <p className="text-gray-300">
                  Machine learning specialists and AI researchers developing cutting-edge solutions
                </p>
              </div>
              
              <div className="bg-gradient-to-br from-slate-800 to-purple-800 p-8 rounded-xl text-center">
                <div className="w-24 h-24 bg-gradient-to-r from-purple-500 to-pink-600 rounded-full mx-auto mb-6 flex items-center justify-center">
                  <Award className="w-12 h-12 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-2">Security Experts</h3>
                <p className="text-gray-300">
                  Cybersecurity professionals protecting businesses from evolving threats
                </p>
              </div>
              
              <div className="bg-gradient-to-br from-slate-800 to-purple-800 p-8 rounded-xl text-center">
                <div className="w-24 h-24 bg-gradient-to-r from-green-500 to-emerald-600 rounded-full mx-auto mb-6 flex items-center justify-center">
                  <Lightbulb className="w-12 h-12 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-2">Solution Architects</h3>
                <p className="text-gray-300">
                  Technical architects designing scalable and efficient IT solutions
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
