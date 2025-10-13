'use client';
import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Play, CheckCircle, ArrowRight } from 'lucide-react';

const DemoPage: React.FC = () => {
  const [selectedDemo, setSelectedDemo] = useState('ai-solutions');

  const demos = [
    {
      id: 'ai-solutions',
      title: 'AI Solutions Demo',
      description: 'See how our AI solutions can transform your business processes.',
      duration: '15 minutes'
    },
    {
      id: 'it-security',
      title: 'IT Security Demo',
      description: 'Learn about our comprehensive cybersecurity solutions.',
      duration: '20 minutes'
    },
    {
      id: 'data-analytics',
      title: 'Data Analytics Demo',
      description: 'Discover how to turn your data into actionable insights.',
      duration: '25 minutes'
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Helmet>
        <title>Request a Demo - Zion Tech Group</title>
        <meta name="description" content="Schedule a personalized demo of our AI and IT solutions. See how we can help transform your business." />
      </Helmet>

      {/* Hero Section */}
      <section className="py-20 px-4 bg-gradient-to-br from-blue-50 to-indigo-100">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
            Request a Demo
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            See our AI and IT solutions in action. Schedule a personalized demo 
            tailored to your business needs.
          </p>
        </div>
      </section>

      {/* Demo Options */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Choose Your Demo</h2>
            <p className="text-xl text-gray-600">
              Select the demo that best matches your interests and requirements.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {demos.map((demo) => (
              <div
                key={demo.id}
                className={`p-8 rounded-lg border-2 cursor-pointer transition-all ${
                  selectedDemo === demo.id
                    ? 'border-blue-500 bg-blue-50'
                    : 'border-gray-200 hover:border-gray-300'
                }`}
                onClick={() => setSelectedDemo(demo.id)}
              >
                <div className="flex items-center mb-4">
                  <div className={`w-4 h-4 rounded-full mr-3 ${
                    selectedDemo === demo.id ? 'bg-blue-500' : 'bg-gray-300'
                  }`}></div>
                  <h3 className="text-xl font-bold text-gray-900">{demo.title}</h3>
                </div>
                <p className="text-gray-600 mb-4">{demo.description}</p>
                <div className="flex items-center text-sm text-gray-500">
                  <Play className="w-4 h-4 mr-2" />
                  Duration: {demo.duration}
                </div>
              </div>
            ))}
          </div>

          {/* Demo Form */}
          <div className="max-w-2xl mx-auto">
            <div className="bg-white p-8 rounded-lg shadow-lg border border-gray-200">
              <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">
                Schedule Your Demo
              </h3>
              
              <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      First Name *
                    </label>
                    <input
                      type="text"
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Last Name *
                    </label>
                    <input
                      type="text"
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Company *
                  </label>
                  <input
                    type="text"
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Preferred Demo Time
                  </label>
                  <select className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent">
                    <option>Morning (9 AM - 12 PM)</option>
                    <option>Afternoon (12 PM - 5 PM)</option>
                    <option>Evening (5 PM - 8 PM)</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Additional Requirements
                  </label>
                  <textarea
                    rows={4}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Tell us about your specific needs or questions..."
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-blue-600 text-white py-3 px-6 rounded-lg font-semibold hover:bg-blue-700 transition-colors flex items-center justify-center"
                >
                  <Play className="w-5 h-5 mr-2" />
                  Schedule Demo
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Why Schedule a Demo?</h2>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <CheckCircle className="w-12 h-12 text-blue-600 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-gray-900 mb-2">Personalized Experience</h3>
              <p className="text-gray-600">Get a demo tailored to your specific business needs and challenges.</p>
            </div>
            
            <div className="text-center">
              <CheckCircle className="w-12 h-12 text-blue-600 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-gray-900 mb-2">Expert Guidance</h3>
              <p className="text-gray-600">Learn from our experienced team about best practices and implementation.</p>
            </div>
            
            <div className="text-center">
              <CheckCircle className="w-12 h-12 text-blue-600 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-gray-900 mb-2">No Obligation</h3>
              <p className="text-gray-600">Explore our solutions with no commitment required.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default DemoPage;