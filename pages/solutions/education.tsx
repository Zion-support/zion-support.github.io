import React from 'react';
import Layout from '../../components/Layout';
import { GraduationCap, Users, BookOpen, CheckCircle, ArrowRight } from 'lucide-react';

const features = [
  {
    icon: GraduationCap,
    title: 'Learning Management Systems',
    description: 'Comprehensive LMS platforms for online and blended learning'
  },
  {
    icon: Users,
    title: 'Student Information Systems',
    description: 'Complete student data management and academic tracking'
  },
  {
    icon: BookOpen,
    title: 'Digital Content Management',
    description: 'Interactive digital content creation and distribution'
  },
  {
    icon: CheckCircle,
    title: 'Assessment Tools',
    description: 'Advanced testing and evaluation platforms'
  },
  {
    icon: ArrowRight,
    title: 'Parent Portal',
    description: 'Communication and engagement tools for parents'
  },
  {
    icon: Users,
    title: 'Teacher Resources',
    description: 'Professional development and teaching support tools'
  }
];

const benefits = [
  'Improved student engagement and outcomes',
  'Streamlined administrative processes',
  'Enhanced communication between stakeholders',
  'Better data-driven decision making',
  'Reduced operational costs',
  'Accessible learning for all students'
];

export default function EducationSolutions() {
  return (
    <Layout
      title="Education Solutions - Zion Tech Group"
      description="Comprehensive education technology solutions for schools, universities, and educational institutions. LMS, SIS, and digital learning platforms."
      keywords="education solutions, learning management system, student information system, educational technology, digital learning"
    >
      <div className="min-h-screen bg-white">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-indigo-600 to-blue-700 text-white py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                Education Solutions
              </h1>
              <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
                Transform education with innovative technology solutions designed
                for schools, universities, and educational institutions.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-white text-indigo-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
                  Get Started
                </button>
                <button className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-indigo-600 transition-colors">
                  View Demo
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Education Technology Features
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Comprehensive solutions designed to enhance learning experiences
                and streamline educational operations.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <div key={index} className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
                  <div className="w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center mb-6">
                    <feature.icon className="w-6 h-6 text-indigo-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600">
                    {feature.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                  Transforming Education
                </h2>
                <p className="text-xl text-gray-600 mb-8">
                  Our education solutions help institutions improve learning outcomes,
                  streamline operations, and enhance the educational experience for all stakeholders.
                </p>
                <ul className="space-y-4">
                  {benefits.map((benefit, index) => (
                    <li key={index} className="flex items-start">
                      <CheckCircle className="w-6 h-6 text-green-500 mr-3 mt-1 flex-shrink-0" />
                      <span className="text-gray-700">{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="bg-gradient-to-r from-indigo-600 to-blue-700 p-8 rounded-xl text-white">
                <h3 className="text-2xl font-bold mb-6">Ready to Transform Education?</h3>
                <p className="text-lg mb-6">
                  Let our education technology experts help you implement solutions
                  that enhance learning and streamline operations.
                </p>
                <button className="bg-white text-indigo-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors flex items-center">
                  Schedule Demo
                  <ArrowRight className="w-5 h-5 ml-2" />
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gray-900 text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Transform Education?
            </h2>
            <p className="text-xl mb-8 max-w-3xl mx-auto">
              Contact our education solutions team to discuss your specific requirements
              and discover how we can help enhance your educational institution.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-indigo-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-indigo-700 transition-colors">
                Contact Education Team
              </button>
              <button className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-gray-900 transition-colors">
                Download Education Brochure
              </button>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
}