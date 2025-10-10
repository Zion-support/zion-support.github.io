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
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
    </div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900"> </div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900"> </div><Navigation />

      {/* Hero Section */}
     </Navigation /> </Navigation /><section className="relative py-20 overflow-hidden">
       </section className="relative py-20 overflow-hidden"> </section className="relative py-20 overflow-hidden"><div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20viewBox%3D%220%200%2060%2060%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%239C92AC%22%20fill-opacity%3D%220.1%22%3E%3Ccircle%20cx%3D%2230%22%20cy%3D%2230%22%20r%3D%222%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-20"></div>

       <//div> <//div><div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        </div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center"> </div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center"> </div><h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
            Training & Education
       </h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent"> </h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent"> </h1>
         <//h1> <//h1><p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
            Master AI technologies with our comprehensive training programs and certifications
        </p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto"> </p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto"> </p>

         <//p> <//p><div className="flex flex-col sm:flex-row gap-4 justify-center">
          </div className="flex flex-col sm:flex-row gap-4 justify-center"> </div className="flex flex-col sm:flex-row gap-4 justify-center"> </div><button className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-semibold py-4 px-8 rounded-xl hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 flex items-center">
              Browse Courses
             </button className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-semibold py-4 px-8 rounded-xl hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 flex items-center"> </button className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-semibold py-4 px-8 rounded-xl hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 flex items-center"><BookOpen className="w-5 h-5 ml-2" />
          </BookOpen className="w-5 h-5 ml-2" /> </BookOpen className="w-5 h-5 ml-2" /> </button>
           <//button> <//button><button className="border-2 border-cyan-400 text-cyan-400 font-semibold py-4 px-8 rounded-xl hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300">
              View Certifications
          </button className="border-2 border-cyan-400 text-cyan-400 font-semibold py-4 px-8 rounded-xl hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300"> </button className="border-2 border-cyan-400 text-cyan-400 font-semibold py-4 px-8 rounded-xl hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300"> </button>
        <//button> <//button> </div>
      <//div> <//div> </div>
    <//div> <//div> </section>

      {/* Stats Section */}
     <//section> <//section><section className="py-16 bg-white/5">
       </section className="py-16 bg-white/5"> </section className="py-16 bg-white/5"><div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
         </div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"> </div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"><div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
             </div className="grid grid-cols-2 md:grid-cols-4 gap-8"> </div className="grid grid-cols-2 md:grid-cols-4 gap-8"><div key={index} className="text-center">
               </div key={index} className="text-center"> </div key={index} className="text-center"><div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                </div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4"> </div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4"> </div><stat.icon className="w-8 h-8 text-white" />
              </stat.icon className="w-8 h-8 text-white" /> </stat.icon className="w-8 h-8 text-white" /> </div>
               <//div> <//div><div className="text-3xl font-bold text-cyan-400 mb-2">{stat.val</div className="text-3xl font-bold text-cyan-400 mb-2">u</div className="text-3xl font-bold text-cyan-400 mb-2">e</div>}</div>
               <//div> <//div><div className="text-gray-300">{stat.lab</div className="text-gray-300">e</div className="text-gray-300">l</div>}</div>
            <//div> <//div> </div>
            ))}
        <//div> <//div> </div>
      <//div> <//div> </div>
    <//div> <//div> </section>

      {/* Categories Filter */}
     <//section> <//section><section className="py-16 bg-gradient-to-r from-purple-900/20 to-blue-900/20">
       </section className="py-16 bg-gradient-to-r from-purple-900/20 to-blue-900/20"> </section className="py-16 bg-gradient-to-r from-purple-900/20 to-blue-900/20"><div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
         </div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"> </div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"><div className="text-center mb-12">
          </div className="text-center mb-12"> </div className="text-center mb-12"> </div><h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Course Categories
          </h2 className="text-3xl md:text-4xl font-bold text-white mb-4"> </h2 className="text-3xl md:text-4xl font-bold text-white mb-4"> </h2>
           <//h2> <//h2><p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Choose from our comprehensive range of AI training programs
          </p className="text-xl text-gray-300 max-w-3xl mx-auto"> </p className="text-xl text-gray-300 max-w-3xl mx-auto"> </p>
        <//p> <//p> </div>

         <//div> <//div><div className="flex flex-wrap justify-center gap-4 mb-12">
            {categories.map((category) => (
            </div className="flex flex-wrap justify-center gap-4 mb-12"> </div className="flex flex-wrap justify-center gap-4 mb-12"> </div><button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`flex items-center space-x-2 px-6 py-3 rounded-lg font-semibold transition-all ${
                  selectedCategory === category.id
                    ? 'bg-cyan-500 text-white'
                    : 'bg-slate-800 text-gray-300 hover:bg-slate-700 hover:text-cyan-400'
                }`}
              >
               </button
                key={category.id}
                onClick={() => </button
                key={category.id}
                onClick={() =><category.icon className="w-5 h-5" />
               </category.icon className="w-5 h-5" /> </category.icon className="w-5 h-5" /><span>{category.na</span>m</span>e</span>}</span>
            <//span> <//span> </button>
            ))}
        <//button> <//button> </div>

          {/* Courses Grid */}
         <//div> <//div><div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredCourses.map((course) => (
             </div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"> </div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"><div key={course.id} className="cyber-card p-6 hover:scale-105 transition-all duration-300">
               </div key={course.id} className="cyber-card p-6 hover:scale-105 transition-all duration-300"> </div key={course.id} className="cyber-card p-6 hover:scale-105 transition-all duration-300"><div className="text-center mb-4">
                 </div className="text-center mb-4"> </div className="text-center mb-4"><div className="text-6xl mb-4">{course.thumbna</div className="text-6xl mb-4">i</div className="text-6xl mb-4">l</div>}</div>
                 <//div> <//div><h3 className="text-xl font-bold text-white mb-2">{course.titl</h3 className="text-xl font-bold text-white mb-2">e</h3 className="text-xl font-bold text-white mb-2">}</h3>
                 <//h3> <//h3><p className="text-gray-300 text-sm mb-4">{course.descriptio</p className="text-gray-300 text-sm mb-4">n</p className="text-gray-300 text-sm mb-4">}</p>
              <//p> <//p> </div>

               <//div> <//div><div className="space-y-3 mb-6">
                 </div className="space-y-3 mb-6"> </div className="space-y-3 mb-6"><div className="flex items-center justify-between text-sm">
                  </div className="flex items-center justify-between text-sm"> </div className="flex items-center justify-between text-sm"> </div><span className="text-gray-400">Instruct</span className="text-gray-400">o</span className="text-gray-400">r</span>:</span>
                   <//span> <//span><span className="text-white">{course.instruct</span className="text-white">o</span className="text-white">r</span>}</span>
                <//span> <//span> </div>
                 <//div> <//div><div className="flex items-center justify-between text-sm">
                  </div className="flex items-center justify-between text-sm"> </div className="flex items-center justify-between text-sm"> </div><span className="text-gray-400">Durati</span className="text-gray-400">o</span className="text-gray-400">n</span>:</span>
                   <//span> <//span><span className="text-white">{course.durati</span className="text-white">o</span className="text-white">n</span>}</span>
                <//span> <//span> </div>
                 <//div> <//div><div className="flex items-center justify-between text-sm">
                  </div className="flex items-center justify-between text-sm"> </div className="flex items-center justify-between text-sm"> </div><span className="text-gray-400">Lev</span className="text-gray-400">e</span className="text-gray-400">l</span>:</span>
                   <//span> <//span><span className={`px-2 py-1 rounded text-xs ${
                      course.level === 'Beginner' ? 'bg-green-500/20 text-green-400' :
                      course.level === 'Intermediate' ? 'bg-yellow-500/20 text-yellow-400' :
                      'bg-red-500/20 text-red-400'
                    }`}>
                      {course.level}
                 </span className={`px-2 py-1 rounded text-xs ${
                      course.level === 'Beginner' ? 'bg-green-500/20 text-green-400' :
                      course.level === 'Intermediate' ? 'bg-yellow-500/20 text-yellow-400' :
                      'bg-red-500/20 text-red-400'
                    }`}> </span className={`px-2 py-1 rounded text-xs ${
                      course.level === 'Beginner' ? 'bg-green-500/20 text-green-400' :
                      course.level === 'Intermediate' ? 'bg-yellow-500/20 text-yellow-400' :
                      'bg-red-500/20 text-red-400'
                    }`}> </span>
                <//span> <//span> </div>
                 <//div> <//div><div className="flex items-center justify-between text-sm">
                  </div className="flex items-center justify-between text-sm"> </div className="flex items-center justify-between text-sm"> </div><span className="text-gray-400">Modul</span className="text-gray-400">e</span className="text-gray-400">s</span>:</span>
                   <//span> <//span><span className="text-white">{course.modul</span className="text-white">e</span className="text-white">s</span>}</span>
                <//span> <//span> </div>
                 <//div> <//div><div className="flex items-center justify-between text-sm">
                  </div className="flex items-center justify-between text-sm"> </div className="flex items-center justify-between text-sm"> </div><span className="text-gray-400">Studen</span className="text-gray-400">t</span className="text-gray-400">s</span>:</span>
                   <//span> <//span><span className="text-white">{course.studen</span className="text-white">t</span className="text-white">s</span>}</span>
                <//span> <//span> </div>
                 <//div> <//div><div className="flex items-center justify-between text-sm">
                  </div className="flex items-center justify-between text-sm"> </div className="flex items-center justify-between text-sm"> </div><span className="text-gray-400">Rati</span className="text-gray-400">n</span className="text-gray-400">g</span>:</span>
                   <//span> <//span><div className="flex items-center space-x-1">
                    </div className="flex items-center space-x-1"> </div className="flex items-center space-x-1"> </div><Star className="w-4 h-4 text-yellow-400 fill-current" />
                     </Star className="w-4 h-4 text-yellow-400 fill-current" /> </Star className="w-4 h-4 text-yellow-400 fill-current" /><span className="text-white">{course.rati</span className="text-white">n</span className="text-white">g</span>}</span>
                  <//span> <//span> </div>
                <//div> <//div> </div>
              <//div> <//div> </div>

               <//div> <//div><div className="flex items-center justify-between mb-4">
                 </div className="flex items-center justify-between mb-4"> </div className="flex items-center justify-between mb-4"><div className="text-2xl font-bold text-cyan-400">{course.pri</div className="text-2xl font-bold text-cyan-400">c</div className="text-2xl font-bold text-cyan-400">e</div>}</div>
                  {course.certificate && (
                   <//div> <//div><div className="flex items-center space-x-1 text-green-400">
                    </div className="flex items-center space-x-1 text-green-400"> </div className="flex items-center space-x-1 text-green-400"> </div><Certificate className="w-4 h-4" />
                     </Certificate className="w-4 h-4" /> </Certificate className="w-4 h-4" /><span className="text-xs">Certific</span className="text-xs">a</span className="text-xs">t</span>e</span>
                  <//span> <//span> </div>
                  )}
              <//div> <//div> </div>

               <//div> <//div><button className="w-full bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-semibold py-3 px-4 rounded-lg hover:from-cyan-600 hover:to-purple-700 transition-all">
                  Enroll Now
              </button className="w-full bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-semibold py-3 px-4 rounded-lg hover:from-cyan-600 hover:to-purple-700 transition-all"> </button className="w-full bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-semibold py-3 px-4 rounded-lg hover:from-cyan-600 hover:to-purple-700 transition-all"> </button>
            <//button> <//button> </div>
            ))}
        <//div> <//div> </div>
      <//div> <//div> </div>
    <//div> <//div> </section>

      {/* Upcoming Events */}
     <//section> <//section><section className="py-16 bg-white/5">
       </section className="py-16 bg-white/5"> </section className="py-16 bg-white/5"><div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
         </div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"> </div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"><div className="text-center mb-12">
          </div className="text-center mb-12"> </div className="text-center mb-12"> </div><h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Upcoming Training Events
          </h2 className="text-3xl md:text-4xl font-bold text-white mb-4"> </h2 className="text-3xl md:text-4xl font-bold text-white mb-4"> </h2>
           <//h2> <//h2><p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Join our live training sessions and workshops
          </p className="text-xl text-gray-300 max-w-3xl mx-auto"> </p className="text-xl text-gray-300 max-w-3xl mx-auto"> </p>
        <//p> <//p> </div>

         <//div> <//div><div className="space-y-6">
            {upcomingEvents.map((event, index) => (
             </div className="space-y-6"> </div className="space-y-6"><div key={index} className="cyber-card p-6 hover:scale-105 transition-all duration-300">
               </div key={index} className="cyber-card p-6 hover:scale-105 transition-all duration-300"> </div key={index} className="cyber-card p-6 hover:scale-105 transition-all duration-300"><div className="flex items-start justify-between">
                 </div className="flex items-start justify-between"> </div className="flex items-start justify-between"><div className="flex-1">
                  </div className="flex-1"> </div className="flex-1"> </div><h3 className="text-xl font-bold text-white mb-2">{event.titl</h3 className="text-xl font-bold text-white mb-2">e</h3 className="text-xl font-bold text-white mb-2">}</h3>
                   <//h3> <//h3><div className="flex items-center space-x-6 text-sm text-gray-400 mb-4">
                     </div className="flex items-center space-x-6 text-sm text-gray-400 mb-4"> </div className="flex items-center space-x-6 text-sm text-gray-400 mb-4"><div className="flex items-center space-x-1">
                      </div className="flex items-center space-x-1"> </div className="flex items-center space-x-1"> </div><Calendar className="w-4 h-4" />
                       </Calendar className="w-4 h-4" /> </Calendar className="w-4 h-4" /><span>{event.da</span>t</span>e</span>}</span>
                    <//span> <//span> </div>
                     <//div> <//div><div className="flex items-center space-x-1">
                      </div className="flex items-center space-x-1"> </div className="flex items-center space-x-1"> </div><Clock className="w-4 h-4" />
                       </Clock className="w-4 h-4" /> </Clock className="w-4 h-4" /><span>{event.ti</span>m</span>e</span>}</span>
                    <//span> <//span> </div>
                     <//div> <//div><div className="flex items-center space-x-1">
                      </div className="flex items-center space-x-1"> </div className="flex items-center space-x-1"> </div><MapPin className="w-4 h-4" />
                       </MapPin className="w-4 h-4" /> </MapPin className="w-4 h-4" /><span>{event.locati</span>o</span>n</span>}</span>
                    <//span> <//span> </div>
                     <//div> <//div><div className="flex items-center space-x-1">
                      </div className="flex items-center space-x-1"> </div className="flex items-center space-x-1"> </div><Users className="w-4 h-4" />
                       </Users className="w-4 h-4" /> </Users className="w-4 h-4" /><span>{event.spots} spots l</span>e</span>f</span>t</span>
                    <//span> <//span> </div>
                  <//div> <//div> </div>
                   <//div> <//div><p className="text-gray-300">Instructor: {event.instructo</p className="text-gray-300">r</p className="text-gray-300">}</p>
                <//p> <//p> </div>
                 <//div> <//div><div className="text-right">
                   </div className="text-right"> </div className="text-right"><div className="text-2xl font-bold text-cyan-400 mb-2">{event.pri</div className="text-2xl font-bold text-cyan-400 mb-2">c</div className="text-2xl font-bold text-cyan-400 mb-2">e</div>}</div>
                   <//div> <//div><button className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-semibold py-2 px-4 rounded-lg hover:from-cyan-600 hover:to-purple-700 transition-all">
                      Register
                  </button className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-semibold py-2 px-4 rounded-lg hover:from-cyan-600 hover:to-purple-700 transition-all"> </button className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-semibold py-2 px-4 rounded-lg hover:from-cyan-600 hover:to-purple-700 transition-all"> </button>
                <//button> <//button> </div>
              <//div> <//div> </div>
            <//div> <//div> </div>
            ))}
        <//div> <//div> </div>
      <//div> <//div> </div>
    <//div> <//div> </section>

     <//section> <//section><Footer />
  </Footer /> </Footer /> </div>
  );
};

export default TrainingPage<//div>;<//div>