<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
const Component: React.FC = () => {
'use client';
import React from 'react';
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-0361
import { Helmet } from 'react-helmet-async';
<<<<<<< HEAD
import { Link } from 'react-router-dom';
=======
import React from 'react';
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-0659
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

<<<<<<< HEAD
export default function GDataAnalyticsZionTechGroupPage() {

  return (
    <div className="min-h-screen bg-gray-900 text-white">
=======
import React  from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

export default function TrainingPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900to-slate-900pt-20">
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-0796
      <Helmet>
        <title>Training - Zion Tech Group</title>
        <meta name="description" content="Training solutions by Zion Tech Group" />
      </Helmet>
      
      <div className="container mx-auto px-4 py-20">
        <h1 className="text-4xl font-bold mb-8">Training</h1>
        <div className="prose prose-invert max-w-none">
          <p className="text-xl text-gray-300 mb-8">
            Discover our comprehensive training solutions designed to meet your business needs.
          </p>
<<<<<<< HEAD
          
<<<<<<< HEAD
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-4">Expert Solutions</h3>
              <p className="text-gray-300">
                Our team of experts delivers tailored solutions for your specific requirements.
              </p>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-4">Cutting-Edge Technology</h3>
              <p className="text-gray-300">
                We use the latest technologies and best practices to ensure optimal performance.
              </p>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-4">24/7 Support</h3>
              <p className="text-gray-300">
                Get round-the-clock support from our dedicated team of professionals.
              </p>
            </div>
          </div>
        </div>
=======
          <ArrowRight className="w-5h-5ml-2"  />
        </Link>
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-0796
      </div>
=======
          <Link
            href="/contact"
            className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 transition-colors duration-200"
          >
            Contact Us
            <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </div>
      </div>
      <Footer />
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-0210
    </div>
  );
}
<<<<<<< HEAD
=======
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { CheckCircle, ArrowRight, Star, Clock, Zap, Shield, Brain, BarChart, Target, TrendingUp, Globe, Database, Users, Settings } from 'lucide-react';

<<<<<<< HEAD
const TrainingProgramsPage: React.FC = () => {
  const features = [
    {
      icon: Brain,
      title: 'AI-Powered Intelligence',
      description: 'Advanced AI algorithms that provide intelligent insights and recommendations.',
      benefits: ['Smart recommendations', 'Predictive analytics', 'Automated insights', 'Real-time analysis']
    },
    {
      icon: BarChart,
      title: 'Advanced Analytics',
      description: 'Comprehensive analytics dashboard with real-time data visualization.',
      benefits: ['Real-time dashboards', 'Custom reports', 'Data visualization', 'Performance metrics']
    },
    {
      icon: Target,
      title: 'Precision Targeting',
      description: 'Target specific goals and objectives with precision and accuracy.',
      benefits: ['Goal tracking', 'Performance optimization', 'Strategic planning', 'Success metrics']
    },
    {
      icon: TrendingUp,
      title: 'Growth Optimization',
      description: 'Optimize your business growth with data-driven strategies.',
      benefits: ['Growth strategies', 'Market analysis', 'Competitive insights', 'ROI optimization']
    },
    {
      icon: Zap,
      title: 'Fast Processing',
      description: 'Process large datasets in seconds with our optimized AI analytics engine.',
      benefits: ['High-speed processing', 'Scalable infrastructure', 'Real-time analysis', 'Batch processing']
    },
    {
      icon: Shield,
      title: 'Secure Analytics',
      description: 'Enterprise-grade security for your sensitive data and analytics.',
      benefits: ['Data encryption', 'Access controls', 'Audit trails', 'Compliance ready']
    }
  ];

  const benefits = [
    'Increase efficiency by up to 50%',
    'Reduce costs by 30% with automation',
    'Improve decision-making with AI insights',
    'Scale operations without proportional staff increases',
    'Gain competitive advantage with advanced technology'
  ];

  return (
    <>
      <Helmet>
        <title>Training Programs - Zion Tech Group</title>
        <meta name="description" content="Professional training programs and certifications." />
        <meta name="keywords" content="training, education, certification, skills" />
      </Helmet>

      <Navigation />
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-amber-900 to-slate-900">
        {/* Hero Section */}
        <section className="relative py-20 px-4 overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(147,51,234,0.3)_0%,transparent_50%)] animate-pulse" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(59,130,246,0.3)_0%,transparent_50%)] animate-pulse" style={{ animationDelay: '1s' }} />
          <div className="relative max-w-7xl mx-auto text-center">
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
              Training Programs
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
              Professional training programs and certifications.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-amber-500 to-blue-600 hover:from-amber-600 hover:to-blue-700 text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105">
                Get Started
=======
const TrainingPage: React.FC = () => {}
  const [selectedCategory, setSelectedCategory] = useState('all');

  const categories = [
    { id: 'all', name: 'All Courses', icon: BookOpen },
    { id: 'ai-fundamentals', name: 'AI Fundamentals', icon: Brain },
    { id: 'implementation', name: 'Implementation', icon: Code },
    { id: 'advanced', name: 'Advanced Topics', icon: Target },
    { id: 'certification', name: 'Certification', icon: Award }
  ];

  const courses = [
    {}
      id: 1,
      title: 'AI Fundamentals for Business Leaders',
      description: 'Learn the basics of AI and how it can transform your business operations',
      category: 'ai-fundamentals',
      duration: '4 hours',
      level: 'Beginner',
      rating: 4.8,
      students: 1250,
      price: 'Free',
      instructor: 'Dr. Sarah Chen',
      thumbnail: '🧠',
      modules: 8;
      certificate: true;
    },
    {}
      id: 2,
      title: 'Implementing AI Workflow Automation',
      description: 'Step-by-step guide to implementing AI automation in your organization',
      category: 'implementation',
      duration: '6 hours',
      level: 'Intermediate',
      rating: 4.9,
      students: 890,
      price: '$199',
      instructor: 'Mike Rodriguez',
      thumbnail: '⚡',
      modules: 12;
      certificate: true;
    },
    {}
      id: 3,
      title: 'Advanced AI Analytics and Machine Learning',
      description: 'Deep dive into advanced analytics and ML techniques for enterprise',
      category: 'advanced',
      duration: '10 hours',
      level: 'Advanced',
      rating: 4.7,
      students: 456,
      price: '$399',
      instructor: 'Dr. James Liu',
      thumbnail: '📊',
      modules: 15;
      certificate: true;
    },
    {}
      id: 4,
      title: 'AI Security and Compliance',
      description: 'Learn about AI security best practices and regulatory compliance',
      category: 'certification',
      duration: '5 hours',
      level: 'Intermediate',
      rating: 4.6,
      students: 678,
      price: '$299',
      instructor: 'Lisa Wang',
      thumbnail: '🛡️',
      modules: 10;
      certificate: true;
    },
    {}
      id: 5,
      title: 'AI Content Generation Masterclass',
      description: 'Master the art of AI-powered content creation and optimization',
      category: 'implementation',
      duration: '7 hours',
      level: 'Intermediate',
      rating: 4.8,
      students: 734,
      price: '$249',
      instructor: 'Emily Watson',
      thumbnail: '✍️',
      modules: 14;
      certificate: true;
    },
    {}
      id: 6,
      title: 'Quantum Computing for AI Applications',
      description: 'Explore the intersection of quantum computing and artificial intelligence',
      category: 'advanced',
      duration: '8 hours',
      level: 'Advanced',
      rating: 4.5,
      students: 234,
      price: '$499',
      instructor: 'Dr. Alex Quantum',
      thumbnail: '⚛️',
      modules: 16;
      certificate: true;
    }
  ];

  const upcomingEvents = [
    {}
      title: 'AI Implementation Workshop',
      date: 'March 20, 2024',
      time: '9:00 AM - 5:00 PM EST',
      location: 'Virtual',
      instructor: 'Dr. Sarah Chen',
      spots: 25;
      price: '$299'},
    {}
      title: 'AI Security Certification Bootcamp',
      date: 'April 5-7, 2024',
      time: '9:00 AM - 5:00 PM EST',
      location: 'New York, NY',
      instructor: 'Lisa Wang',
      spots: 15;
      price: '$1,299'
    },
    {}
      title: 'Advanced AI Analytics Masterclass',
      date: 'April 15, 2024',
      time: '10:00 AM - 4:00 PM EST',
      location: 'Virtual',
      instructor: 'Dr. James Liu',
      spots: 30;
      price: '$199'}
  ];

  const stats = [
    { label: 'Courses Available', value: '50+', icon: BookOpen },
    { label: 'Students Trained', value: '5,000+', icon: Users },
    { label: 'Certifications Issued', value: '2,500+', icon: Award },
    { label: 'Average Rating', value: '4.8/5', icon: Star }
  ];

  const filteredCourses = selectedCategory === 'all'
    ? courses;
    : courses.filter(course => course.category === selectedCategory);

  return(<div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">)
      <Navigation />)
      {/* Hero Section */})
      <section className="relative py-20 overflow-hidden">)
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http: //www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%239C92AC" fill-opacity="0.1"%3E%3Ccircle cx="30" cy="30" r="2"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-20"></div>
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20viewBox%3D%220%200%2060%2060%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%239C92AC%22%20fill-opacity%3D%220.1%22%3E%3Ccircle%20cx%3D%2230%22%20cy%3D%2230%22%20r%3D%222%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-20"></section>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center"></div>
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent"></h1>
            Training & Education;
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto"></p>
            Master AI technologies with our comprehensive training programs and certifications;
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center"></div>
            <button className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-semibold py-4 px-8 rounded-xl hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 flex items-center"></button>
              Browse Courses;
              <BookOpen className="w-5 h-5 ml-2" />
            </button>
            <button className="border-2 border-cyan-400 text-cyan-400 font-semibold py-4 px-8 rounded-xl hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300"></button>
              View Certifications;
            </button>
          </div>
        </div>,
      </section>,
,
      {/* Stats Section */}
      <section className="py-16 bg-white/5"></section>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"></div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8"></div>
            {stats.map((stat, index) => (}
              <div key={index} className="text-center"></div>
                <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"></section>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8"></div>
            {stats.map((stat, index) => (</div>
              <div key={index} className="text-center"></div>
                <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4"></div>
                  <stat.icon className="w-8 h-8 text-white" />
                </div>
                <div className="text-3 xl font-bold text-cyan-400 mb-2">{stat.value}</div>
                <div className="text-gray-300">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Categories Filter */}
      <section className="py-16 bg-gradient-to-r from-purple-900/20 to-blue-900/20"></section>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"></section>
          <div className="text-center mb-12"></div>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4"></h2>
              Course Categories;
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto"></p>
              Choose from our comprehensive range of AI training programs;
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-4 mb-12"></div>
            {categories.map((category) => (}
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`flex items-center space-x-2 px-6 py-3 rounded-lg font-semibold transition-all ${}
                  selectedCategory === category.id
                    ? 'bg-cyan-500 text-white'
                    : 'bg-slate-800 text-gray-300 hover:bg-slate-700 hover:text-cyan-400'
                }`}
              >
                <category.icon className="w-5 h-5" /></categor>
                <span>{category.name}</spa>
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-03fc
              </button>
              <button className="border border-amber-400 text-amber-400 hover:bg-amber-400 hover:text-white font-bold py-4 px-8 rounded-lg transition-all duration-300">
                View Demo
              </button>
            </div>
          </div>
        </section>

<<<<<<< HEAD
        {/* Features Section */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Key Features
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Advanced AI technology that drives results
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <div key={index} className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 hover:bg-white/10 transition-all duration-300 group">
                  <div className="w-16 h-16 bg-gradient-to-br from-amber-500 to-blue-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                    <feature.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-4">{feature.title}</h3>
                  <p className="text-gray-300 mb-4">{feature.description}</p>
                  {feature.benefits && (
                    <ul className="space-y-2">
                      {feature.benefits.map((benefit, idx) => (
                        <li key={idx} className="flex items-center text-sm text-gray-400">
                          <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                          {benefit}
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              ))}
            </div>
=======
          {/* Courses Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"></div>
            {filteredCourses.map((course) => (}
              <div key={course.id} className="cyber-card p-6 hover:scale-105 transition-all duration-300"></div>
                <div className="text-center mb-4"></div>
                  <div className="text-6xl mb-4">{course.thumbnail}</div>
                  <h3 className="text-xl font-bold text-white mb-2">{course.title}</h3>
                  <p className="text-gray-300 text-sm mb-4">{course.description}</p>
                </div>

                <div className="space-y-3 mb-6"></div>
                  <div className="flex items-center justify-between text-sm"></div>
                    <span className="text-gray-400">Instructor:</span>
                    <span className="text-white">{course.instructor}</span>
                  </div>
                  <div className="flex items-center justify-between text-sm"></div>
                    <span className="text-gray-400">Duration:</span>
                    <span className="text-white">{course.duration}</span>
                  </div>
                  <div className="flex items-center justify-between text-sm"></div>
                    <span className="text-gray-400">Level:</span>
                    <span className={`px-2 py-1 rounded text-xs ${}
                      course.level === 'Beginner' ? 'bg-green-500/20 text-green-400' :
                      course.level === 'Intermediate' ? 'bg-yellow-500/20 text-yellow-400' :
                      'bg-red-500/20 text-red-400'
                    }`}></span>
                      {course.level}
                    </span>
                  </div>
                  <div className="flex items-center justify-between text-sm"></div>
                    <span className="text-gray-400">Modules:</span>
                    <span className="text-white">{course.modules}</span>
                  </div>
                  <div className="flex items-center justify-between text-sm"></div>
                    <span className="text-gray-400">Students:</span>
                    <span className="text-white">{course.students}</span>
                  </div>
                  <div className="flex items-center justify-between text-sm"></div>
                    <span className="text-gray-400">Rating:</span>
                    <div className="flex items-center space-x-1"></div>
                      <Star className="w-4 h-4 text-yellow-400 fill-current" />
                      <span className="text-white">{course.rating}</span>
                    </div>
                  </div>
                </div>

                <div className="flex items-center justify-between mb-4"></div>
                  <div className="text-2xl font-bold text-cyan-400">{course.price}</div>
                  {course.certificate && (}
                    <div className="flex items-center space-x-1 text-green-400"></div>
                      <Certificate className="w-4 h-4" />
                      <span className="text-xs">Certificate</span>
                    </div>
                  )}
                </div>

                <button className="w-full bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-semibold py-3 px-4 rounded-lg hover: from-cyan-600 hover:to-purple-700 transition-all"></button>
                  Enroll Now;
                </button>,
              </div>))}
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-03fc
          </div>
        </section>

<<<<<<< HEAD
        {/* Benefits Section */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Why Choose Our Solution?
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Proven results that drive business growth and efficiency
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {benefits.map((benefit, index) => (
                <div key={index} className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 hover:bg-white/10 transition-all duration-300 group">
                  <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-blue-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                    <CheckCircle className="w-8 h-8 text-white" />
                  </div>
                  <p className="text-lg text-white font-medium">{benefit}</p>
                </div>
              ))}
            </div>
=======
      {/* Upcoming Events */}
      <section className="py-16 bg-white/5"></section>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"></section>
          <div className="text-center mb-12"></div>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4"></h2>
              Upcoming Training Events;
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto"></p>
              Join our live training sessions and workshops;
            </p>
          </div>

          <div className="space-y-6"></div>
            {upcomingEvents.map((event, index) => (}
              <div key={index} className="cyber-card p-6 hover:scale-105 transition-all duration-300"></div>
                <div className="flex items-start justify-between"></div>
                  <div className="flex-1"></div>
                    <h3 className="text-xl font-bold text-white mb-2">{event.title}</h3>
                    <div className="flex items-center space-x-6 text-sm text-gray-400 mb-4"></div>
                      <div className="flex items-center space-x-1"></div>
                        <Calendar className="w-4 h-4" />
                        <span>{event.date}</span>
                      </div>
                      <div className="flex items-center space-x-1"></div>
                        <Clock className="w-4 h-4" />
                        <span>{event.time}</span>
                      </div>
                      <div className="flex items-center space-x-1"></div>
                        <MapPin className="w-4 h-4" />
                        <span>{event.location}</span>
                      </div>
                      <div className="flex items-center space-x-1"></div>
                        <Users className="w-4 h-4" />
                        <span>{event.spots} spots left</span>
                      </div>
                    </div>
                    <p className="text-gray-300">Instructor: {event.instructor}</p>
                  </div>
                  <div className="text-right"></div>
                    <div className="text-2xl font-bold text-cyan-400 mb-2">{event.price}</div>
                    <button className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-semibold py-2 px-4 rounded-lg hover: from-cyan-600 hover:to-purple-700 transition-all"></button>
                      Register;
                    </button>
                  </div>,
                </div>,
              </div>))}
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-03fc
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="bg-white/5 backdrop-blur-sm rounded-3xl p-12">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Ready to Get Started?
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Contact our experts to discuss your requirements and get started today.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-gradient-to-r from-amber-500 to-blue-600 hover:from-amber-600 hover:to-blue-700 text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105">
                  Contact Us
                </button>
                <button className="border border-amber-400 text-amber-400 hover:bg-amber-400 hover:text-white font-bold py-4 px-8 rounded-lg transition-all duration-300">
                  Learn More
                </button>
              </div>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </>
  );
};

<<<<<<< HEAD
export default TrainingProgramsPage;
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-02f6
=======
};

export default Component;
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-0361
=======
import React from 'react';

import {Link} from 'react-router-dom';
import {ArrowRight} from 'lucide-react';

export default function TrainingPage() {
  return (
    <>
      <title>5G Data Analytics - Zion Tech Group</title>
        <title>Training - Zion Tech Group</title>
        <h1 className="text-4 xl font-boldtext-whitemb-6">Training</h1>
        <p className="text-lgtext-gray-300mb-8">Professional training services coming soon.</p>
          Contact Us

  );

>>>>>>> origin/cursor/fix-errors-and-merge-to-main-048f
=======
export default function TrainingPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
        <title>Training - Zion Tech Group</title>
        <meta name="description" content="Professional training services by Zion Tech Group" />
      </Helmet>
      
      <div className="container mx-auto px-4 py-16">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-white mb-6">Training</h1>
          <p className="text-lg text-gray-300 mb-8">Professional training services coming soon.</p>
          
          <Link
            to="/contact"
            className="inline-flex items-center bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-6 py-3 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300"
          >
            Contact Us
            <ArrowRight className="w-4 h-4 ml-2" />
          </Link>
        </div>
      </div>
    </div>
  );
}
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-0659
=======
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-0796
