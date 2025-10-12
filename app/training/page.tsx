'use client';

import React from 'react';
import { CheckCircle, ArrowRight, BookOpen, Users, Award, Clock, Star, Target, BarChart3, Zap, Globe, Shield } from 'lucide-react';
import { Link } from 'react-router-dom';
import SEOHead from '../components/SEOHead';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

export default function TrainingPage() {
  const features = [
    {
      icon: <BookOpen className="w-8 h-8 text-blue-500" />,
      title: 'Comprehensive Curriculum',
      description: 'Industry-leading training programs covering all aspects of technology and business.',
      benefits: ['Latest technologies', 'Industry best practices', 'Hands-on projects', 'Certification programs']
    },
    {
      icon: <Users className="w-8 h-8 text-green-500" />,
      title: 'Expert Instructors',
      description: 'Learn from industry experts with years of real-world experience.',
      benefits: ['Certified professionals', 'Industry experience', 'Personalized guidance', 'Mentorship programs']
    },
    {
      icon: <Award className="w-8 h-8 text-purple-500" />,
      title: 'Certification Programs',
      description: 'Earn recognized certifications that boost your career prospects.',
      benefits: ['Industry certifications', 'Skill validation', 'Career advancement', 'Professional recognition']
    },
    {
      icon: <Clock className="w-8 h-8 text-orange-500" />,
      title: 'Flexible Learning',
      description: 'Learn at your own pace with flexible scheduling options.',
      benefits: ['Online courses', 'Self-paced learning', 'Live sessions', 'Recorded content']
    }
  ];

  const courses = [
    {
      title: 'AI & Machine Learning',
      description: 'Comprehensive AI and ML training from basics to advanced applications.',
      icon: <Shield className="w-6 h-6 text-blue-500" />
    },
    {
      title: 'Cloud Computing',
      description: 'AWS, Azure, and GCP training for cloud professionals.',
      icon: <Globe className="w-6 h-6 text-green-500" />
    },
    {
      title: 'Cybersecurity',
      description: 'Security training and certification programs.',
      icon: <Shield className="w-6 h-6 text-purple-500" />
    },
    {
      title: 'Data Analytics',
      description: 'Data science and analytics training programs.',
      icon: <BarChart3 className="w-6 h-6 text-orange-500" />
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <SEOHead 
        title="Training Programs - Zion Tech Group"
        description="Professional training programs and certifications in AI, cloud computing, cybersecurity, and more."
        keywords="training programs, certifications, professional development, AI training, cloud training, cybersecurity training"
      />
      
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative py-20 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(147,51,234,0.3)_0%,transparent_50%)] animate-pulse" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(59,130,246,0.3)_0%,transparent_50%)] animate-pulse" style={{ animationDelay: '1s' }} />
        <div className="relative max-w-7xl mx-auto text-center">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
            Training
            <br />
            <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
              Programs
            </span>
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
            Advance your career with our comprehensive training programs and certifications. 
            Learn from industry experts and gain the skills you need to succeed.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              to="/contact" 
              className="bg-gradient-to-r from-purple-500 to-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-purple-600 hover:to-blue-700 transition-all duration-300 flex items-center"
            >
              Get Started
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
            <Link 
              to="/about" 
              className="border border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-gray-900 transition-all duration-300"
            >
              Learn More
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Why Choose Our Training Programs?
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Industry-leading training programs designed to help you advance your career and stay ahead of the curve.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300">
                <div className="flex items-center justify-center w-12 h-12 bg-gradient-to-r from-purple-500 to-blue-600 rounded-lg mb-4">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
                <p className="text-gray-300 mb-4">{feature.description}</p>
                <ul className="space-y-2">
                  {feature.benefits.map((benefit, benefitIndex) => (
                    <li key={benefitIndex} className="flex items-center text-gray-300 text-sm">
                      <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                      {benefit}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Courses Section */}
      <section className="py-20 px-4 bg-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Our Training Courses
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Comprehensive training programs covering the latest technologies and industry best practices.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {courses.map((course, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 text-center">
                <div className="flex items-center justify-center w-12 h-12 bg-gradient-to-r from-purple-500 to-blue-600 rounded-lg mb-4 mx-auto">
                  {course.icon}
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">{course.title}</h3>
                <p className="text-gray-300 text-sm">{course.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Advance Your Career Today
              </h2>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-8 h-8 bg-gradient-to-r from-purple-500 to-blue-600 rounded-lg flex items-center justify-center">
                    <CheckCircle className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-2">Industry Recognition</h3>
                    <p className="text-gray-300">Earn certifications recognized by leading technology companies.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-8 h-8 bg-gradient-to-r from-purple-500 to-blue-600 rounded-lg flex items-center justify-center">
                    <CheckCircle className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-2">Hands-on Experience</h3>
                    <p className="text-gray-300">Learn through practical projects and real-world applications.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-8 h-8 bg-gradient-to-r from-purple-500 to-blue-600 rounded-lg flex items-center justify-center">
                    <CheckCircle className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-2">Career Support</h3>
                    <p className="text-gray-300">Get job placement assistance and career guidance from our experts.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-8 h-8 bg-gradient-to-r from-purple-500 to-blue-600 rounded-lg flex items-center justify-center">
                    <CheckCircle className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-2">Lifetime Access</h3>
                    <p className="text-gray-300">Access course materials and updates for a lifetime.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
              <h3 className="text-2xl font-bold text-white mb-6">Start Your Learning Journey</h3>
              <p className="text-gray-300 mb-6">
                Ready to advance your career? Contact us to learn more about our 
                training programs and find the right course for you.
              </p>
              <Link
                to="/contact"
                className="w-full bg-gradient-to-r from-purple-500 to-blue-600 text-white py-3 px-6 rounded-lg font-semibold hover:from-purple-600 hover:to-blue-700 transition-all duration-300 flex items-center justify-center"
              >
                Enroll Now
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <div className="bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl sm:rounded-3xl p-6 sm:p-8 lg:p-12">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4">
                Ready to Advance Your Career?
              </h2>
              <p className="text-lg sm:text-xl text-white/90 mb-6 sm:mb-8 max-w-2xl mx-auto px-4">
                Join thousands of professionals who have advanced their careers with our training programs.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link 
                  to="/contact" 
                  className="bg-white text-purple-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
                >
                  Enroll Today
                </Link>
                <Link 
                  to="/pricing" 
                  className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition-colors"
                >
                  View Pricing
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}