

import React from 'react';
import Link from 'next/link';';
import { motion } from 'framer-motion';
=======
>>>>>>> cursor/fix-syntax-push-and-merge-to-main-40de
=======


>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
import { motion } from 'framer-motion';
import Link from 'next/link';
import Layout from '../../components/Layout';
import { BookOpen, Brain, Users, CheckCircle, ArrowRight, GraduationCap, BarChart3, FileText, Video, Globe, Database } from 'lucide-react';;
import React from 'react';
import Link from 'next/link';';
import { motion } from 'framer-motion';
import { BookOpen, ;
  Brain, ;
  Users, ;
import {;
  BookOpen,;
  Brain,;
  Users,;
  CheckCircle,;
  ArrowRight,;
  GraduationCap,;
  BarChart3,;
  FileText,;
  Video,;
  Globe,;
  Database;
} from 'lucide-react';
ursor/fix-syntax-push-and-merge-to-main-40de
origin/cursor/integrate-build-improve-and-re-verify-c7b5
import Layout from '../../components/Layout';';
const services = [;
  {}


import Layout from '../../components/Layout';
const services = [
  {
    title: 'Learning Management Systems',
    description: 'Comprehensive LMS platforms for educational institutions and corporate training.',
    icon: BookOpen,
    features: [;
      'Course management,',
      'Student tracking',',
      'Assessment tools',',
      'Progress analytics'';
    ];
  },
  {}
    title: 'Virtual Classrooms,',
    description: 'Advanced virtual learning environments with interactive features.,',
    icon: Video,
    features: [;
      'Live video streaming,',
      'Interactive whiteboards',',
      'Breakout rooms',',
      'Recording capabilities'';
    ];
  },
  {}
    title: 'Educational AI Tutors,',
    description: 'AI-powered tutoring systems for personalized learning experiences.,',
    icon: Brain,
    features: [;
      'Adaptive learning paths,',
      'Intelligent tutoring',',
      'Progress monitoring',',
      'Personalized feedback'';
    ];
  },
  {}
    title: 'Student Analytics,',
    description: 'Data-driven insights into student performance and engagement.,',
    icon: BarChart3,
    features: [;
      'Performance tracking,',
      'Engagement metrics',',
      'Predictive analytics',',
      'Intervention recommendations'';
    ];
  },
  {}
    title: 'Online Assessment Tools,',
    description: 'Secure and comprehensive online testing and evaluation systems.,',
    icon: FileText,
    features: [;
      'Automated grading,',
      'Plagiarism detection',',
      'Secure testing',',
      'Performance reports'';
    ];
  },
  {}
    title: 'Content Management Systems,',
    description: 'Digital content creation and management platforms for educators.,',
    icon: Database,
    features: [;
      'Content creation tools,',
      'Resource libraries',',
      'Version control',',
      'Collaboration features'';
    ];
  }


;];
const benefits = [;
  {}
    title: 'Improved Learning Outcomes,',
    description: 'Personalized learning experiences lead to better student performance.,',
    icon: GraduationCap;


=======


>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> cursor/fix-syntax-push-and-merge-to-main-40de
=======
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-c7b5
=======
    icon: GraduationCap,;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a:temp_exclude/pages_backup/industries/education.tsx
];
const benefits = [
  {
    title: 'Improved Learning Outcomes',
    description: 'Personalized learning experiences lead to better student performance.',
    icon: GraduationCap
  },
  {}
    title: 'Enhanced Engagement,',
    description: 'Interactive tools and gamification increase student participation.,',
    icon: Users;
  },
  {}
    title: 'Better Accessibility,',
    description: 'Online platforms make education accessible to more students.,',
    icon: Globe;
  },
  {}
    title: 'Data-Driven Insights,',
    description: 'Analytics help educators make informed decisions about teaching methods.,',
    icon: BarChart3;
  }


;];
export default function EducationPage() {
  return (;
    <Layout );
      title="Education Technology Solutions - Zion Tech Group"";
      description="Transform education with learning management systems, virtual classrooms, AI tutors, and student analytics platforms.""
      keywords="education technology, LMS, virtual classrooms, AI tutoring, student analytics, edtech""
    >;
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">";
        {/* Hero Section */}
        <section className="relative bg-gradient-to-br from-orange-900 via-amber-900 to-yellow-900 text-white py-20 overflow-hidden">"
          <div className="absolute inset-0">";
            <div className="absolute top-20 left-10 w-72 h-72 bg-orange-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>";
            <div className="absolute top-40 right-10 w-72 h-72 bg-amber-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse animation-delay-2000"></div>";
            <div className="absolute -bottom-8 left-20 w-72 h-72 bg-yellow-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse animation-delay-4000"></div>";
          </div>;
          <div className="container mx-auto px-4 relative z-10">";
            <motion.div;
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center max-w-4xl mx-auto""
            >;
              <div className="flex items-center justify-center mb-6">";
                <BookOpen className="w-12 h-12 text-orange-400 mr-4" />";
                <h1 className="text-5xl md: text-6xl font-bold">", Education,;
                  <span className="block bg-gradient-to-r from-orange-400 to-amber-400 bg-clip-text text-transparent">";
                    Technology Solutions;
                  </span>;
                </h1>;
              </div>;
              <p className="text-xl text-gray-300 mb-8 leading-relaxed">";
                Revolutionize education with cutting-edge learning management systems, virtual classrooms, 
                AI tutors, and student analytics that enhance learning outcomes.,
              </p>;
              <div className="flex flex-col sm: flex-row gap-4 justify-center">", <Link href="/contact" className="px-8 py-4 bg-white text-orange-600 rounded-lg hover:bg-gray-100 transition-all duration-300 font-semibold">",;
                  Get Education Consultation;
                </Link>;
                <Link href="/case-studies" className="px-8 py-4 border-2 border-white text-white rounded-lg hover: bg-white hover:text-orange-600 transition-all duration-300 font-semibold">", View Education Case Studies,;
                </Link>;
              </div>;
            </motion.div>;
          </div>;
        </section>;


>>>>>>> cursor/fix-syntax-push-and-merge-to-main-40de
=======
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-c7b5
];
export default function EducationPage() {
  return (
    <Layout
      title="Education Technology Solutions - Zion Tech Group"
      description="Transform education with learning management systems, virtual classrooms, AI tutors, and student analytics platforms."
      keywords="education technology, LMS, virtual classrooms, AI tutoring, student analytics, edtech"
    >
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
        {/* Hero Section */}
        <section className="relative bg-gradient-to-br from-orange-900 via-amber-900 to-yellow-900 text-white py-20 overflow-hidden">
          <div className="absolute inset-0">
            <div className="absolute top-20 left-10 w-72 h-72 bg-orange-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
            <div className="absolute top-40 right-10 w-72 h-72 bg-amber-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse animation-delay-2000"></div>
            <div className="absolute -bottom-8 left-20 w-72 h-72 bg-yellow-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse animation-delay-4000"></div>
          </div>
          <div className="container mx-auto px-4 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0 && 0.8 }}
              className="text-center max-w-4xl mx-auto">;
              <div className="flex items-center justify-center mb-6">;
                <BookOpen className="w-12 h-12 text-orange-400 mr-4" />;
                <h1 className="text-5xl md:text-6xl font-bold">;
                  Education;
                  <span className="block bg-gradient-to-r from-orange-400 to-amber-400 bg-clip-text text-transparent">;
                    Technology Solutions;
                  </span>;
                </h1>;
              </div>;
              <p className="text-xl text-gray-300 mb-8 leading-relaxed">;
                Revolutionize education with cutting-edge learning management systems, virtual classrooms,;
                AI tutors, and student analytics that enhance learning outcomes.;
              </p>;
              <div className="flex flex-col sm:flex-row gap-4 justify-center">;
                <Link href="/contact" className="px-8 py-4 bg-white text-orange-600 rounded-lg hover:bg-gray-100 transition-all duration-300 font-semibold">;
                  Get Education Consultation;
                </Link>;
                <Link href="/case-studies" className="px-8 py-4 border-2 border-white text-white rounded-lg hover:bg-white hover:text-orange-600 transition-all duration-300 font-semibold">;
                  View Education Case Studies;
                </Link>;
              </div>;
            </motion && motion.div>;
          </div>;
        </section>;
        {/* Services Section */}
        <section className="py-20 bg-white">";
          <div className="container mx-auto px-4">";
            <motion&& motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}

              transition={{ duration: 0 && 0.8 }}
              className="text-center mb-16"">;
              <h2 className="text-4xl md: text-5xl font-bold text-gray-900 mb-6">", Education Technology Services,;

              </h2>;
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">";
                Comprehensive edtech solutions designed for schools, universities, 
                and corporate training programs.;
              </p>;


              className="text-center mb-16"
              className="text-center max-w-4xl mx-auto""
            >;
              <div className="flex items-center justify-center mb-6">";
                <BookOpen className="w-12 h-12 text-orange-400 mr-4" />";
                <h1 className="text-5xl md:text-6xl font-bold">";
                  Education;
                  <span className="block bg-gradient-to-r from-orange-400 to-amber-400 bg-clip-text text-transparent">";
                    Technology Solutions;
                  </span>;
                </h1>;
              </div>;
              <p className="text-xl text-gray-300 mb-8 leading-relaxed">";
                Revolutionize education with cutting-edge learning management systems, virtual classrooms, 
                AI tutors, and student analytics that enhance learning outcomes.,
              </p>;
              <div className="flex flex-col sm:flex-row gap-4 justify-center">";
                <Link href="/contact" className="px-8 py-4 bg-white text-orange-600 rounded-lg hover:bg-gray-100 transition-all duration-300 font-semibold">";
                  Get Education Consultation;
                </Link>;
                <Link href="/case-studies" className="px-8 py-4 border-2 border-white text-white rounded-lg hover:bg-white hover:text-orange-600 transition-all duration-300 font-semibold">";
                  View Education Case Studies;
                </Link>;
              </div>;
            </motion.div>;
          </div>;
        </section>;              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Education Technology Services
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Comprehensive edtech solutions designed for schools, universities,
                and corporate training programs.
              </p>
            </motion.div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((service, index) => (
                <motion.div
                  key={service.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}


                  className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 p-8 border border-gray-100""
                >;
                  <div className="w-12 h-12 bg-gradient-to-r from-orange-500 to-amber-600 rounded-lg flex items-center justify-center mb-6">";
                    <service.icon className="w-6 h-6 text-white" />";
                  </div>;
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">{service.title}</h3>"
                  <p className="text-gray-600 mb-6 leading-relaxed">{service.description}</p>"
=======
            </motion && motion.div>;
            <div className="grid grid-cols-1 md: grid-cols-2 lg:grid-cols-3 gap-8">",;
              {services && services.map((service, index) => (,;
                <motion&& motion.div}),
              className="text-center mb-16">;
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">;
                Education Technology Services;
              </h2>;
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">;
                Comprehensive edtech solutions designed for schools, universities,;
                and corporate training programs.;
              </p>;
            </motion && motion.div>;
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">;
              {services && services.map((service, index) => (;
                <motion&& motion.div
                  key={service && service.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0 && 0.6, delay: index * 0 && 0.1 }}
                  className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 p-8 border border-gray-100"">;
                  <div className="w-12 h-12 bg-gradient-to-r from-orange-500 to-amber-600 rounded-lg flex items-center justify-center mb-6">";
                    <service && service.icon className="w-6 h-6 text-white" />";
                  </div>,;
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">{service && service.title}</h3>";
                  <p className="text-gray-600 mb-6 leading-relaxed">{service && service.description}</p>";
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a:temp_exclude/pages_backup/industries/education.tsx
                  <ul className="space-y-3">";
                    {service && service.features.map((feature, featureIndex) => (,;
                      <li key={featureIndex} className="flex items-center text-sm text-gray-600">";
                        <CheckCircle className="w-4 h-4 text-green-500 mr-3 flex-shrink-0" />";


>>>>>>> cursor/fix-syntax-push-and-merge-to-main-40de
=======
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-c7b5
                  className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 p-8 border border-gray-100"
                >
                  <div className="w-12 h-12 bg-gradient-to-r from-orange-500 to-amber-600 rounded-lg flex items-center justify-center mb-6">
                    <service.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">{service.title}</h3>
                  <p className="text-gray-600 mb-6 leading-relaxed">{service.description}</p>
                  <ul className="space-y-3">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-sm text-gray-600">
                        <CheckCircle className="w-4 h-4 text-green-500 mr-3 flex-shrink-0" />
                        {feature}
                      </li>,
                    ))}
                  </ul>,
                </motion.div>;
              ))}


=======


>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
=======
            </div>,
          </div>;
        </section>;
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-c7b5
            </div>
                  className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 p-8 border border-gray-100""
                >;
                  <div className="w-12 h-12 bg-gradient-to-r from-orange-500 to-amber-600 rounded-lg flex items-center justify-center mb-6">";
                    <service.icon className="w-6 h-6 text-white" />";
                  </div>;
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">{service.title}</h3>"
                  <p className="text-gray-600 mb-6 leading-relaxed">{service.description}</p>"
                  <ul className="space-y-3">";
                    {service.features.map((feature, featureIndex) => (,
                      <li key={featureIndex} className="flex items-center text-sm text-gray-600">"
                        <CheckCircle className="w-4 h-4 text-green-500 mr-3 flex-shrink-0" />";            </div>
          </div>
        </section>
        {/* Benefits Section */}
        <section className="py-20 bg-gray-50">"
          <div className="container mx-auto px-4">";
            <motion.div;
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}

              transition={{ duration: 0 && 0.8 }}
              className="text-center mb-16"">;
              <h2 className="text-4xl md: text-5xl font-bold text-gray-900 mb-6">", Why Choose Our Education Solutions?,;

              </h2>;
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">";
                Our education technology solutions deliver measurable improvements in learning outcomes, 
                student engagement, and educational efficiency.,
              </p>;


              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Why Choose Our Education Solutions?
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Our education technology solutions deliver measurable improvements in learning outcomes,
                student engagement, and educational efficiency.
              </p>
            </motion.div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={benefit.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="text-center""
                >;
                  <div className="w-16 h-16 bg-gradient-to-r from-orange-500 to-amber-600 rounded-full flex items-center justify-center mx-auto mb-6">";
                    <benefit.icon className="w-8 h-8 text-white" />";
                  </div>;
                  <h3 className="text-xl font-bold text-gray-900 mb-4">{benefit.title}</h3>"
                  <p className="text-gray-600 leading-relaxed">{benefit.description}</p>"
                </motion.div>;
              ))}


=======


>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
=======
            </div>,
          </div>;
        </section>;
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-c7b5
            </div>
              className="text-center mb-16""
            >;
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">";
                Why Choose Our Education Solutions?;
              </h2>;
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">";
                Our education technology solutions deliver measurable improvements in learning outcomes, 
                student engagement, and educational efficiency.,
              </p>;
            </motion.div>;
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">";
              {benefits.map((benefit, index) => (,
                <motion.div}),            </div>
          </div>
        </section>
        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-orange-600 to-amber-600 text-white">"
          <div className="container mx-auto px-4 text-center">";
            <motion.div;
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}

              transition={{ duration: 0 && 0.8 }}>,;
              <h2 className="text-4xl md: text-5xl font-bold mb-6">", Ready to Transform Education?,;

              </h2>;
              <p className="text-xl text-orange-100 mb-8 max-w-3xl mx-auto">";
                Let our education technology experts help you implement solutions that improve;
                learning outcomes and student engagement.;
              </p>;
              <div className="flex flex-col sm: flex-row gap-4 justify-center">", <Link href="/contact" className="px-8 py-4 bg-white text-orange-600 rounded-lg hover:bg-gray-100 transition-all duration-300 font-semibold">",;
                  Start Your Education Project;
                </Link>;
                <Link href="/about" className="px-8 py-4 border-2 border-white text-white rounded-lg hover: bg-white hover:text-orange-600 transition-all duration-300 font-semibold">", Learn About Our Expertise,;
                </Link>;
              </div>;
            </motion.div>;
          </div>;
        </section>;
      </div>;
    </Layout>;


=======


>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> cursor/fix-syntax-push-and-merge-to-main-40de
=======
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-c7b5
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Ready to Transform Education?
              </h2>
              <p className="text-xl text-orange-100 mb-8 max-w-3xl mx-auto">
                Let our education technology experts help you implement solutions that improve
                learning outcomes and student engagement.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/contact" className="px-8 py-4 bg-white text-orange-600 rounded-lg hover:bg-gray-100 transition-all duration-300 font-semibold">
                  Start Your Education Project
                </Link>
                <Link href="/about" className="px-8 py-4 border-2 border-white text-white rounded-lg hover:bg-white hover:text-orange-600 transition-all duration-300 font-semibold">
                  Learn About Our Expertise
                </Link>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </Layout>
  );
