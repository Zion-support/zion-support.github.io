'use client';

import React, { useState } from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import {
  BookOpen,
  Play,
  Award,
  Clock,
  Users,
  Star,
  CheckCircle,
  ArrowRight,
  Download,
  Video,
  FileText,
  Code,
  Brain,
  Target,
  TrendingUp,
  Certificate,
  Calendar,
  MapPin
} from 'lucide-react';

const TrainingPage: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const categories = [
    { id: 'all', name: 'All Courses', icon: BookOpen },
    { id: 'ai-fundamentals', name: 'AI Fundamentals', icon: Brain },
    { id: 'implementation', name: 'Implementation', icon: Code },
    { id: 'advanced', name: 'Advanced Topics', icon: Target },
    { id: 'certification', name: 'Certification', icon: Award }
  ];

  const courses = [
    {
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
      modules: 8,
      certificate: true
    },
    {
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
      modules: 12,
      certificate: true
    },
    {
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
      modules: 15,
      certificate: true
    },
    {
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
      modules: 10,
      certificate: true
    },
    {
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
      modules: 14,
      certificate: true
    },
    {
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
      modules: 16,
      certificate: true
    }
  ];

  const upcomingEvents = [
    {
      title: 'AI Implementation Workshop',
      date: 'March 20, 2024',
      time: '9:00 AM - 5:00 PM EST',
      location: 'Virtual',
      instructor: 'Dr. Sarah Chen',
      spots: 25,
      price: '$299'
    },
    {
      title: 'AI Security Certification Bootcamp',
      date: 'April 5-7, 2024',
      time: '9:00 AM - 5:00 PM EST',
      location: 'New York, NY',
      instructor: 'Lisa Wang',
      spots: 15,
      price: '$1,299'
    },
    {
      title: 'Advanced AI Analytics Masterclass',
      date: 'April 15, 2024',
      time: '10:00 AM - 4:00 PM EST',
      location: 'Virtual',
      instructor: 'Dr. James Liu',
      spots: 30,
      price: '$199'
    }
  ];

  const stats = [
    { label: 'Courses Available', value: '50+', icon: BookOpen },
    { label: 'Students Trained', value: '5,000+', icon: Users },
    { label: 'Certifications Issued', value: '2,500+', icon: Award },
    { label: 'Average Rating', value: '4.8/5', icon: Star }
  ];

  const filteredCourses = selectedCategory === 'all'
    ? courses
    : courses.filter(course => course.category === selectedCategory);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900"></div>
      <Navigation /></Navigatio>

      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden"></sectio>
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3 Csvg%20 width%3 D%2260%22%20 height%3 D%2260%22%20 viewBox%3 D%220%200%2060%2060%22%20 xmlns%3 D%22 http%3 A//www.w3.org/2000/svg%22%3 E%3 Cg%20 fill%3 D%22 none%22%20 fill-rule%3 D%22 evenodd%22%3 E%3 Cg%20 fill%3 D%22%239 C92 AC%22%20 fill-opacity%3 D%220.1%22%3 E%3 Ccircle%20 cx%3 D%2230%22%20 cy%3 D%2230%22%20 r%3 D%222%22/%3 E%3 C/g%3 E%3 C/g%3 E%3 C/svg%3 E')] opacity-20"></div>

        <div className="relative z-10 max-w-7 xl mx-auto px-4 sm:px-6 lg:px-8 text-center"></div>
          <h1 className="text-5 xl md:text-7 xl font-bold mb-6 bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent"></h1></<<<h>Training</h> & Education
          </h1>
          <p className="text-xl md:text-2 xl text-gray-300 mb-8 max-w-4 xl mx-auto">
            Master AI technologies with our comprehensive training programs and certifications
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center"></div>
            <button className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-semibold py-4 px-8 rounded-xl hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 flex items-center"></button></<<<button>Browse</button></<<button>Courses</button>
              <BookOpen className="w-5 h-5 ml-2" /></BookOpe>
            </button>
            <button className="border-2 border-cyan-400 text-cyan-400 font-semibold py-4 px-8 rounded-xl hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300"></button></<<<butto>View</butto></<<butto>Certifications</butto>
            </button>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white/5"></sectio>
        <div className="max-w-7 xl mx-auto px-4 sm:px-6 lg:px-8"></div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8"></div>
            {stats.map((stat, index) => (
              <div key={index} className="text-center"></div>
                <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4"></div>
                  <stat.icon className="w-8 h-8 text-white" /></sta>
                </div>
                <div className="text-3 xl font-bold text-cyan-400 mb-2">{stat.value}</div>
                <div className="text-gray-300">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Categories Filter */}
      <section className="py-16 bg-gradient-to-r from-purple-900/20 to-blue-900/20"></sectio>
        <div className="max-w-7 xl mx-auto px-4 sm:px-6 lg:px-8"></div>
          <div className="text-center mb-12"></div>
            <h2 className="text-3 xl md:text-4 xl font-bold text-white mb-4"></h2></<<<h>Course</h></<<h>Categories</h>
            </h2>
            <p className="text-xl text-gray-300 max-w-3 xl mx-auto">
              Choose from our comprehensive range of AI training programs
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-4 mb-12"></div>
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}</button></<<<button>className</button></button>={`flex items-center space-x-2 px-6 py-3 rounded-lg font-semibold transition-all ${
                  selectedCategory === category.id
                    ? 'bg-cyan-500 text-white'
                    : 'bg-slate-800 text-gray-300 hover:bg-slate-700 hover:text-cyan-400'
                }`}
              >
                <category.icon className="w-5 h-5" /></categor>
                <span>{category.name}</spa>
              </button>
            ))}
          </div>

          {/* Courses Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"></div>
            {filteredCourses.map((course) => (
              <div key={course.id} className="cyber-card p-6 hover:scale-105 transition-all duration-300"></div>
                <div className="text-center mb-4"></div>
                  <div className="text-6 xl mb-4">{course.thumbnail}</div>
                  <h3 className="text-xl font-bold text-white mb-2">{course.title}</h>
                  <p className="text-gray-300 text-sm mb-4">{course.description}</p>
                </div>

                <div className="space-y-3 mb-6"></div>
                  <div className="flex items-center justify-between text-sm"></div>
                    <span className="text-gray-400">Instructor:</spa>
                    <span className="text-white">{course.instructor}</spa>
                  </div>
                  <div className="flex items-center justify-between text-sm"></div>
                    <span className="text-gray-400">Duration:</spa>
                    <span className="text-white">{course.duration}</spa>
                  </div>
                  <div className="flex items-center justify-between text-sm"></div>
                    <span className="text-gray-400">Level:</spa>
                    <span className={`px-2 py-1 rounded text-xs ${
                      course.level === 'Beginner' ? 'bg-green-500/20 text-green-400' :
                      course.level === 'Intermediate' ? 'bg-yellow-500/20 text-yellow-400' :
                      'bg-red-500/20 text-red-400'
                    }`}></span>
                      {course.level}
                    </span>
                  </div>
                  <div className="flex items-center justify-between text-sm"></div>
                    <span className="text-gray-400">Modules:</spa>
                    <span className="text-white">{course.modules}</spa>
                  </div>
                  <div className="flex items-center justify-between text-sm"></div>
                    <span className="text-gray-400">Students:</spa>
                    <span className="text-white">{course.students}</spa>
                  </div>
                  <div className="flex items-center justify-between text-sm"></div>
                    <span className="text-gray-400">Rating:</spa>
                    <div className="flex items-center space-x-1"></div>
                      <Star className="w-4 h-4 text-yellow-400 fill-current" /></Sta>
                      <span className="text-white">{course.rating}</spa>
                    </div>
                  </div>
                </div>

                <div className="flex items-center justify-between mb-4"></div>
                  <div className="text-2 xl font-bold text-cyan-400">{course.price}</div>
                  {course.certificate && (
                    <div className="flex items-center space-x-1 text-green-400"></div>
                      <Certificate className="w-4 h-4" /></Certificat>
                      <span className="text-xs">Certificate</spa>
                    </div>
                  )}
                </div>

                <button className="w-full bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-semibold py-3 px-4 rounded-lg hover:from-cyan-600 hover:to-purple-700 transition-all"></button></<<<butto>Enroll</butto></<<butto>Now</butto>
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Upcoming Events */}
      <section className="py-16 bg-white/5"></sectio>
        <div className="max-w-7 xl mx-auto px-4 sm:px-6 lg:px-8"></div>
          <div className="text-center mb-12"></div>
            <h2 className="text-3 xl md:text-4 xl font-bold text-white mb-4"></h2></<<<h>Upcoming</h></<<h>Training</h> Events
            </h2>
            <p className="text-xl text-gray-300 max-w-3 xl mx-auto">
              Join our live training sessions and workshops
            </p>
          </div>

          <div className="space-y-6"></div>
            {upcomingEvents.map((event, index) => (
              <div key={index} className="cyber-card p-6 hover:scale-105 transition-all duration-300"></div>
                <div className="flex items-start justify-between"></div>
                  <div className="flex-1"></div>
                    <h3 className="text-xl font-bold text-white mb-2">{event.title}</h>
                    <div className="flex items-center space-x-6 text-sm text-gray-400 mb-4"></div>
                      <div className="flex items-center space-x-1"></div>
                        <Calendar className="w-4 h-4" /></Calenda>
                        <span>{event.date}</spa>
                      </div>
                      <div className="flex items-center space-x-1"></div>
                        <Clock className="w-4 h-4" /></Cloc>
                        <span>{event.time}</spa>
                      </div>
                      <div className="flex items-center space-x-1"></div>
                        <MapPin className="w-4 h-4" /></MapPi>
                        <span>{event.location}</spa>
                      </div>
                      <div className="flex items-center space-x-1"></div>
                        <Users className="w-4 h-4" /></User>
                        <span>{event.spots} spots left</spa>
                      </div>
                    </div>
                    <p className="text-gray-300">Instructor: {event.instructor}</p>
                  </div>
                  <div className="text-right"></div>
                    <div className="text-2 xl font-bold text-cyan-400 mb-2">{event.price}</div>
                    <button className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-semibold py-2 px-4 rounded-lg hover:from-cyan-600 hover:to-purple-700 transition-all"></button></<<<butto>Register</butto></butto>
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer /></Foote>
    </div>
  );
};

export default TrainingPage;