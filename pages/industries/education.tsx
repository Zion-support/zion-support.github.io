import React from 'react';
import Layout from '../../components/Layout';
import { GraduationCap, BookOpen, Users, Brain, CheckCircle, Zap } from 'lucide-react';

const solutions = [
  {
    icon: GraduationCap,
    title: 'Learning Management Systems',
    description: 'Comprehensive LMS platforms for educational institutions',
    features: ['Course Management', 'Student Tracking', 'Assessment Tools', 'Mobile Learning']
  },
  {
    icon: BookOpen,
    title: 'Digital Content Creation',
    description: 'Interactive educational content and multimedia resources',
    features: ['Interactive Lessons', 'Video Content', 'Gamification', 'AR/VR Learning']
  },
  {
    icon: Users,
    title: 'Student Information Systems',
    description: 'Complete student lifecycle management solutions',
    features: ['Enrollment Management', 'Grade Tracking', 'Communication Tools', 'Parent Portal']
  },
  {
    icon: Brain,
    title: 'AI-Powered Learning',
    description: 'Personalized learning with artificial intelligence',
    features: ['Adaptive Learning', 'Learning Analytics', 'Intelligent Tutoring', 'Performance Prediction']
  }
];

const benefits = [
  'Enhanced Learning Experience',
  'Improved Student Outcomes',
  'Streamlined Administration',
  'Personalized Education',
  'Better Engagement',
  'Data-Driven Insights'
];

export default function EducationPage() {
  return (
    <Layout
      title="Education Technology Solutions - Zion Tech Group"
      description="Transform education with our comprehensive technology solutions. LMS platforms, digital content, student management, and AI-powered learning for educational institutions."
      keywords="education technology, LMS, learning management, student information systems, educational AI, digital learning, edtech"
    >
      <div className="min-h-screen bg-gradient-to-br from-purple-50 to-pink-100">
        {/* Hero Section */}
        <section className="relative py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center">
              <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
                Education
                <span className="block text-purple-600">Technology</span>
              </h1>
              <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
                Transform education with our comprehensive technology solutions. 
                From learning management systems to AI-powered learning, we help 
                educational institutions enhance student outcomes and engagement.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-purple-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-purple-700 transition-colors">
                  Explore Education Solutions
                </button>
                <button className="border border-purple-600 text-purple-600 px-8 py-3 rounded-lg font-semibold hover:bg-purple-50 transition-colors">
                  View Education Demo
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Solutions Grid */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Education Technology Solutions
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Comprehensive technology solutions designed for educational institutions
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {solutions.map((solution, index) => (
                <div key={index} className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow">
                  <div className="flex items-center mb-4">
                    <solution.icon className="h-8 w-8 text-purple-600 mr-3" />
                    <h3 className="text-xl font-semibold text-gray-900">{solution.title}</h3>
                  </div>
                  <p className="text-gray-600 mb-4">{solution.description}</p>
                  <ul className="space-y-2">
                    {solution.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-sm text-gray-600">
                        <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Why Choose Our Education Solutions?
              </h2>
              <p className="text-xl text-gray-600">
                Proven expertise in education technology and learning innovation
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-center p-4 bg-gray-50 rounded-lg">
                  <Zap className="h-6 w-6 text-purple-600 mr-3" />
                  <span className="text-lg font-medium text-gray-900">{benefit}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-purple-600">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Transform Your Educational Institution
            </h2>
            <p className="text-xl text-purple-100 mb-8 max-w-2xl mx-auto">
              Let our education technology experts help you enhance learning outcomes and student engagement.
            </p>
            <button className="bg-white text-purple-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
              Schedule Education Consultation
            </button>
          </div>
        </section>
      </div>
    </Layout>
  );
}