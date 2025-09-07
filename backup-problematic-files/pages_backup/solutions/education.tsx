
import Head from 'next/head';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { 
  GraduationCap, 
  Users, 
  BookOpen, 
  Laptop, 
  Globe, 
  CheckCircle, 
  ArrowRight 
} from 'lucide-react';

const features = [
  {
    icon: GraduationCap,
    title: 'Learning Management System',
    description: 'Comprehensive LMS with course management and student tracking',
    benefits: ['Course creation', 'Student management', 'Progress tracking', 'Assessments']
  },
  {
    icon: Users,
    title: 'Student Analytics',
    description: 'AI-powered analytics to improve student outcomes',
    benefits: ['Performance tracking', 'Predictive analytics', 'Intervention alerts', 'Reporting']
  },

  {
    icon: BookOpen,
    title: 'Digital Content',
    description: 'Interactive digital content and multimedia learning materials',
    benefits: ['Interactive content', 'Multimedia support', 'Accessibility', 'Mobile learning']
  },
  {
    icon: Laptop,


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
import {GraduationCap,, Users,, BookOpen,, Laptop,, Globe} from 'lucide-react';
import React from 'react';
import Layout from '../../components/Layout';';
import {GraduationCap,, Users,, BookOpen,, Laptop,, Globe,, CheckCircle,, ArrowRight} from 'lucide-react';
import {GraduationCap,, Users,, BookOpen,, CheckCircle,, ArrowRight} from 'lucide-react';
const features = [;
  {}
    icon: GraduationCap,;
    title: 'Learning Management Systems,',,
  description: 'Comprehensive LMS platforms that support online and blended learning environments.'';
    title: 'Learning Management Systems,',;
    description: 'Comprehensive LMS platforms that support online and blended learning environments.;
pr-12325
  },
    icon: Users,
    title: 'Student Information Systems,',
    description: 'Integrated SIS solutions for managing student data, enrollment, and academic records.',
  },;
    title: 'Digital Content Management',
    description: 'Interactive digital content creation and distribution
  {
    icon: CheckCircle,
    title: 'Assessment Tools',
    description: 'Advanced testing and evaluation platforms
    icon: ArrowRight,
    title: 'Parent Portal',
    description: 'Communication and engagement tools for parents
    title: 'Teacher Resources',
    description: 'Professional development and teaching support tools
  }]
;];
const solutions = [;
  'Learning Management Systems (LMS)',',
  'Student Information Systems (SIS)',',
  'Virtual Classroom Platforms',',
  'Educational Mobile Applications',',
  'Assessment & Testing Platforms',',
  'Digital Content Management',',
  'Campus Management Systems',',
  'Online Course Creation Tools',',
  'Student Analytics & Reporting',',
  'Educational Data Integration'';
;];
export default function EducationSolutionsPage() {
  return (;
    <Layout );
      title="Education Solutions - Zion Tech Group"";
      description="Transform education with our comprehensive learning management systems, virtual classrooms, student information systems, and educational technology solutions.""
    >;
      <div className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">";
        {/* Hero Section */}
        <section className="relative py-20 overflow-hidden">"
          <div className="container mx-auto px-4">";
            <div className="max-w-4xl mx-auto text-center">";
              <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">";
                Education;
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">";
                  Solutions;
                </span>;
              </h1>;
              <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">";

                From learning management systems to virtual classrooms, we help;
                educational institutions deliver exceptional learning experiences.;
              </p>;
              <div className="flex flex-col sm:flex-row gap-4 justify-center">";
                <button className="bg-blue-600 text-white px-8 py-4 rounded-lg hover:bg-blue-700 transition-colors font-medium flex items-center justify-center">";
                  Get Started;
                  <ArrowRight className="w-5 h-5 ml-2" />";
                </button>;
                <button className="border border-gray-600 text-white px-8 py-4 rounded-lg hover:bg-gray-800 transition-colors font-medium">";
                  View Case Studies;
                </button>;
              </div>;
            </div>;
          </div>;
        </section>;
        {/* Features Section */}
        <section className="py-20">"
          <div className="container mx-auto px-4">";
            <div className="text-center mb-16">";
              <h2 className="text-4xl font-bold text-white mb-4">";
                Comprehensive Educational Technology Solutions;
              </h2>;
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">";

                improve administrative efficiency, and support modern educational practices.,
              </p>;
            </div>;
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">";
              {features.map((feature, index) => (,
                <div key={index} className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-8 border border-gray-700 hover:border-blue-500 transition-colors">"
                  <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center mb-6">";
                    <feature.icon className="w-6 h-6 text-white" />";
                  </div>;
                  <h3 className="text-xl font-semibold text-white mb-4">{feature.title}</h3>"
                  <p className="text-gray-300">{feature.description}</p>"
                </div>;
const benefits = [
  'Improved student engagement and outcomes',
  'Streamlined administrative processes',
  'Enhanced communication between stakeholders',
  'Better data-driven decision making',
  'Reduced operational costs',
  'Accessible learning for all students'
];
export default function EducationSolutions() {

    title: 'Virtual Classrooms',
    description: 'Online learning platform with video conferencing and collaboration',
    benefits: ['Video conferencing', 'Screen sharing', 'Breakout rooms', 'Recording']
  }
];

export default function EducationSolutionsPage() {
  return (


    <>
      <Head>
        <title>Education Solutions - Zion Tech Group</title>
        <meta name="description" content="Comprehensive education technology solutions including LMS, student analytics, digital content, and virtual classrooms." />
      </Head>

      <div className="min-h-screen bg-gray-50">


        {/* Hero Section */}
        <section className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-20">
          <div className="max-w-7xl mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center"
            >
              <h1 className="text-4xl md:text-6xl font-bold mb-6">Education Solutions</h1>
              <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
                Transform education with our comprehensive technology solutions. 
                From learning management systems to virtual classrooms.
              </p>

          </div>
        </section>

        {/* Features Section */}

        <section className="py-16 px-4">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Education Technology Features</h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Our education solutions are designed to enhance learning and improve outcomes.

              </p>

            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            </motion.div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">

            </motion.div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">

              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow p-6"
                >
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                    <feature.icon className="w-6 h-6 text-blue-600" />
                  </div>

                  <h3 className="text-xl font-semibold text-gray-900 mb-4">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600">
                    {feature.description}
                  </p>
                </div>


          <div className="container mx-auto px-4">";
            <div className="max-w-4xl mx-auto">";
              <h2 className="text-3xl font-bold text-white text-center mb-12">";
                Our Education Solutions;
              </h2>;


            </div>;
          </div>;
        </section>;
        {/* Accessibility Section */}


          <div className="container mx-auto px-4">";
            <div className="bg-gray-800/50 rounded-2xl p-12">";
              <div className="text-center mb-12">";
                <h2 className="text-4xl font-bold text-white mb-4">";
                  Accessible & Inclusive Education;
                </h2>;
                <p className="text-xl text-gray-300 max-w-3xl mx-auto">";


                  <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-4">";
                    <Globe className="w-8 h-8 text-white" />";
                  </div>;
                  <h3 className="text-xl font-semibold text-white mb-2">ADA Compliant</h3>";
                  <p className="text-gray-300">Built to meet all ADA requirements for accessible educational technology.</p>";
                </div>;
                <div className="text-center">";
                  <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">";
                    <Users className="w-8 h-8 text-white" />";
                  </div>;
                  <h3 className="text-xl font-semibold text-white mb-2">Universal Design</h3>";
                  <p className="text-gray-300">Solutions designed for diverse learning needs and abilities.</p>";
                </div>;
                <div className="text-center">";
                  <div className="w-16 h-16 bg-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">";
                    <BookOpen className="w-8 h-8 text-white" />";
                  </div>;
                  <h3 className="text-xl font-semibold text-white mb-2">Multi-language Support</h3>";
                  <p className="text-gray-300">Support for multiple languages and cultural contexts.</p>";
                </div>;
              </div>;
            </div>;
          </div>;
        </section>;
        {/* CTA Section */}


          <div className="container mx-auto px-4">";
            <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-12 text-center">";
              <h2 className="text-4xl font-bold text-white mb-6">";
                Ready to Transform Education?;
              </h2>;
              <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">";
                Let our education technology experts help you implement solutions that;
                enhance learning outcomes and support modern educational practices.;
              </p>;


                </button>;
              </div>;
            </div>;
          </div>;
        </section>;


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

                  <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                  <p className="text-gray-600 mb-4">{feature.description}</p>
                  <div className="space-y-2">
                    {feature.benefits.map((benefit, benefitIndex) => (
                      <div key={benefitIndex} className="flex items-center text-sm text-gray-600">
                        <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                        {benefit}


            </div>
          </div>
        </section>

        {/* CTA Section */}

        <section className="py-20 bg-blue-600">
          <div className="max-w-7xl mx-auto px-4 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Ready to Transform Education?
              </h2>
              <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
                Let's discuss how our education solutions can enhance your learning environment.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Link
                  href="/contact"
                  className="inline-flex items-center px-8 py-3 bg-white text-blue-600 rounded-lg hover:bg-gray-100 transition-colors font-semibold"
                >
                  Get Started
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Link>
                <Link
                  href="/solutions"
                  className="inline-flex items-center px-8 py-3 border-2 border-white text-white rounded-lg hover:bg-white hover:text-blue-600 transition-colors font-semibold"
                >
                  View Solutions
                </Link>
              </div>
            </motion.div>

    </>

          </div>
        </section>
      </div>
    </Layout>
    </Layout>

    </>
