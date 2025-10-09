'use client';
import React from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { GraduationCap, BookOpen, Users, Award, CheckCircle, ArrowRight, Star, Target, BarChart, Zap } from 'lucide-react';

const ITTrainingPage: React.FC = () => {
  const features = [
    {
      icon: GraduationCap,
      title: 'Certified Instructors',
      description: 'Learn from industry-certified professionals with years of real-world experience.'
    },
    {
      icon: BookOpen,
      title: 'Comprehensive Curriculum',
      description: 'Up-to-date training programs covering the latest technologies and best practices.'
    },
    {
      icon: Users,
      title: 'Hands-on Learning',
      description: 'Practical, hands-on training with real-world projects and case studies.'
    },
    {
      icon: Award,
      title: 'Industry Certifications',
      description: 'Prepare for industry-recognized certifications and career advancement.'
    }
  ];

  const courses = [
    {
      title: 'Cloud Computing',
      description: 'AWS, Azure, and Google Cloud platform training and certification prep.',
      duration: '40 hours',
      icon: '☁️'
    },
    {
      title: 'Cybersecurity',
      description: 'Security fundamentals, ethical hacking, and incident response training.',
      duration: '60 hours',
      icon: '🔒'
    },
    {
      title: 'Data Analytics',
      description: 'Python, SQL, and data visualization tools for business intelligence.',
      duration: '50 hours',
      icon: '📊'
    },
    {
      title: 'DevOps & CI/CD',
      description: 'Docker, Kubernetes, Jenkins, and modern development practices.',
      duration: '45 hours',
      icon: '🚀'
    },
    {
      title: 'AI & Machine Learning',
      description: 'Introduction to AI, ML algorithms, and practical applications.',
      duration: '55 hours',
      icon: '🤖'
    },
    {
      title: 'Network Administration',
      description: 'Cisco, Juniper, and enterprise network design and management.',
      duration: '35 hours',
      icon: '🌐'
    }
  ];

  const benefits = [
    'Advance your IT career with in-demand skills',
    'Learn from industry experts and practitioners',
    'Get hands-on experience with real projects',
    'Earn industry-recognized certifications',
    'Stay current with latest technologies',
    'Network with peers and industry professionals'
  ];

  return (
    <>
      <Navigation />
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
        <section className="relative py-20 px-4">
          <div className="container mx-auto max-w-7xl">
            <div className="text-center mb-16">
              <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 neon-text">
                IT Training & Certification
              </h1>
              <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
                Advance your IT career with our comprehensive training programs and industry certifications. 
                Learn from experts and gain hands-on experience with cutting-edge technologies.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="cyber-button px-8 py-4 text-lg">
                  Browse Courses
                  <ArrowRight className="w-5 h-5 ml-2" />
                </button>
                <button className="border border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg hover:bg-cyan-400/10 transition-colors">
                  Free Consultation
                </button>
              </div>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
              <div className="text-center">
                <div className="text-4xl font-bold text-cyan-400 mb-2">500+</div>
                <div className="text-gray-300">Students Trained</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-cyan-400 mb-2">95%</div>
                <div className="text-gray-300">Pass Rate</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-cyan-400 mb-2">20+</div>
                <div className="text-gray-300">Certifications</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-cyan-400 mb-2">10+</div>
                <div className="text-gray-300">Years Experience</div>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 px-4">
          <div className="container mx-auto max-w-7xl">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-6">Professional IT Training</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Our comprehensive training programs are designed by industry experts 
                to provide practical, hands-on learning experiences.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {features.map((feature, index) => (
                <div key={index} className="bg-slate-800/50 rounded-xl p-6 hover:bg-slate-800/70 transition-colors">
                  <div className="w-12 h-12 bg-cyan-500/20 rounded-lg flex items-center justify-center mb-4">
                    <feature.icon className="w-6 h-6 text-cyan-400" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
                  <p className="text-gray-300">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Courses Section */}
        <section className="py-20 px-4 bg-slate-800/30">
          <div className="container mx-auto max-w-7xl">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-6">Training Courses</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Choose from our comprehensive range of IT training courses designed 
                to meet industry demands and career advancement goals.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {courses.map((course, index) => (
                <div key={index} className="bg-slate-900/50 rounded-xl p-6 hover:bg-slate-900/70 transition-colors">
                  <div className="flex items-center justify-between mb-4">
                    <div className="text-4xl">{course.icon}</div>
                    <div className="bg-cyan-500/20 text-cyan-400 px-3 py-1 rounded-full text-sm font-semibold">
                      {course.duration}
                    </div>
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3">{course.title}</h3>
                  <p className="text-gray-300">{course.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-20 px-4">
          <div className="container mx-auto max-w-7xl">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div>
                <h2 className="text-4xl font-bold text-white mb-6">Why Choose Our IT Training?</h2>
                <p className="text-xl text-gray-300 mb-8">
                  Our IT training programs are designed to provide practical, hands-on learning 
                  that prepares you for real-world challenges and career advancement.
                </p>
                <div className="space-y-4">
                  {benefits.map((benefit, index) => (
                    <div key={index} className="flex items-center space-x-3">
                      <CheckCircle className="w-6 h-6 text-cyan-400 flex-shrink-0" />
                      <span className="text-gray-300">{benefit}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="bg-gradient-to-br from-cyan-500/20 to-purple-500/20 rounded-2xl p-8">
                <h3 className="text-2xl font-bold text-white mb-6">Training Statistics</h3>
                <div className="space-y-4">
                  <div className="flex justify-between">
                    <span className="text-gray-300">Students Trained:</span>
                    <span className="text-green-400 font-semibold">500+</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-300">Certification Pass Rate:</span>
                    <span className="text-green-400 font-semibold">95%</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-300">Course Completion:</span>
                    <span className="text-green-400 font-semibold">98%</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-300">Student Satisfaction:</span>
                    <span className="text-green-400 font-semibold">4.9/5</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4 bg-gradient-to-r from-cyan-600/20 to-purple-600/20">
          <div className="container mx-auto max-w-4xl text-center">
            <h2 className="text-4xl font-bold text-white mb-6">Start Your IT Career Journey</h2>
            <p className="text-xl text-gray-300 mb-8">
              Join hundreds of professionals who have advanced their careers with our IT training programs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="cyber-button px-8 py-4 text-lg">
                Enroll Now
                <ArrowRight className="w-5 h-5 ml-2" />
              </button>
              <button className="border border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg hover:bg-cyan-400/10 transition-colors">
                Download Brochure
              </button>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </>
  );
};

export default ITTrainingPage;