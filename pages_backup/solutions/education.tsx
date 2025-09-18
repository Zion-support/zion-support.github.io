import React from 'react';
import Layout from '../../components/Layout';';
import { GraduationCap, Users, BookOpen, Laptop, Globe, CheckCircle, ArrowRight } from 'lucide-react';
import Layout from '../../components/Layout';
import { GraduationCap, Users, BookOpen, CheckCircle, ArrowRight } from 'lucide-react';
const features = [;
  {}
    icon: GraduationCap,
    title: 'Learning Management Systems,',
    description: 'Comprehensive LMS platforms that support online and blended learning environments.'';
import React from 'react';
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
  {}
    icon: Users,
    title: 'Student Information Systems,',
    description: 'Integrated SIS solutions for managing student data, enrollment, and academic records.',
  },
  {}
    icon: BookOpen,
    title: 'Digital Content Management,',
    description: 'Platforms for creating, managing, and delivering educational content and resources.',
  },
  {}
    icon: BookOpen,;
    title: 'Digital Content Management,',;
    description: 'Platforms for creating, managing, and delivering educational content and resources.',;
  },;
  {}

    icon: Globe,
    title: 'Accessibility Solutions,',
    description: 'ADA-compliant educational technology that ensures equal access for all students.'';
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
                Transform education with our comprehensive technology solutions. 
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
                Our education solutions are designed to enhance learning outcomes, 
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
    <div className="p-6 bg-gradient-to-br from-blue-900 to-purple-900 text-white rounded-lg">
      <h3 className="text-xl font-bold mb-4">education</h3>
      <p className="text-gray-300">Revolutionary technology component</p>
    </div>
  );
};

export default education;
