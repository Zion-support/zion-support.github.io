import React from 'react';
import Layout from '../../components/Layout';
import { GraduationCap, BookOpen, Users, Monitor, CheckCircle, Zap } from 'lucide-react';

const solutions = [
  {
    title: "Learning Management System",
    description: "Comprehensive LMS for educational institutions and corporate training",
    icon: BookOpen,
    features: ["Course Management", "Student Tracking", "Assessment Tools", "Progress Analytics"]
  },
  {
    title: "Virtual Classrooms",
    description: "Interactive online learning environments for remote education",
    icon: Monitor,
    features: ["Video Conferencing", "Screen Sharing", "Interactive Whiteboard", "Breakout Rooms"]
  },
  {
    title: "Student Information System",
    description: "Complete student data management and administrative tools",
    icon: Users,
    features: ["Student Records", "Grade Management", "Attendance Tracking", "Parent Portal"]
  },
  {
    title: "Educational Analytics",
    description: "Data-driven insights to improve learning outcomes",
    icon: GraduationCap,
    features: ["Performance Analytics", "Learning Analytics", "Predictive Modeling", "Intervention Tools"]
  }
];

const benefits = [
  "Improved Learning Outcomes",
  "Enhanced Student Engagement",
  "Streamlined Administration",
  "Data-Driven Insights",
  "Scalable Solutions",
  "Cost Effective"
];

export default function EducationSolutionsPage() {
  return (
    <Layout
      title="Education Solutions - Zion Tech Group"
      description="Comprehensive education technology solutions including LMS, virtual classrooms, student information systems, and educational analytics."
      keywords="education solutions, LMS, virtual classrooms, student information system, educational technology, edtech"
    >
      <div className="min-h-screen bg-gray-50">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-indigo-900 via-blue-900 to-cyan-900 text-white py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                Education
                <span className="block text-indigo-400">Solutions</span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 mb-8">
                Transform education with innovative technology solutions
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="px-8 py-4 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors font-semibold">
                  Get Education Consultation
                </button>
                <button className="px-8 py-4 border-2 border-white text-white rounded-lg hover:bg-white hover:text-gray-900 transition-colors font-semibold">
                  View Education Case Studies
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Solutions Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Education Technology Solutions
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Comprehensive solutions designed for educational institutions and corporate training
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {solutions.map((solution, index) => (
                <div key={index} className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow">
                  <div className="w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center mb-4">
                    <solution.icon className="w-6 h-6 text-indigo-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">{solution.title}</h3>
                  <p className="text-gray-600 mb-4">{solution.description}</p>
                  <ul className="space-y-2">
                    {solution.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-sm text-gray-600">
                        <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
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
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Why Choose Our Education Solutions?
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                We understand the unique needs of education and deliver solutions that enhance learning
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-center space-x-4">
                  <div className="w-8 h-8 bg-indigo-100 rounded-full flex items-center justify-center">
                    <CheckCircle className="w-5 h-5 text-indigo-600" />
                  </div>
                  <span className="text-lg font-medium text-gray-900">{benefit}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-indigo-600 to-blue-600 text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Transform Education with Technology
            </h2>
            <p className="text-xl text-indigo-100 mb-8 max-w-3xl mx-auto">
              Let us help you implement technology solutions that enhance learning and improve outcomes
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-4 bg-white text-indigo-600 rounded-lg hover:bg-gray-100 transition-colors font-semibold">
                Start Education Project
              </button>
              <button className="px-8 py-4 border-2 border-white text-white rounded-lg hover:bg-white hover:text-indigo-600 transition-colors font-semibold">
                Schedule Demo
              </button>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
}