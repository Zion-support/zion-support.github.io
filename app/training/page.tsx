'use client',

import React, { useState } from 'react',
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import {}
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
  MapPin,
} from 'lucide-react',

const [selectedCategory, setSelectedCategory] = useState('all'),

const categories = [
    { id: 'all', name: 'All Courses', icon: BookOpen },
    { id: 'ai-fundamentals', name: 'AI Fundamentals', icon: Brain },
    { id: 'implementation', name: 'Implementation', icon: Code },
    { id: 'advanced', name: 'Advanced Topics', icon: Target },
    { id: 'certification', name: 'Certification', icon: Award }
  ],

const courses = [
      thumbnail: '🧠',
      modules: 8,
      certificate: true,
    },
      thumbnail: '⚡',
      modules: 12,
      certificate: true,
    },
      thumbnail: '📊',
      modules: 15,
      certificate: true,
    },
      thumbnail: '🛡️',
      modules: 10,
      certificate: true,
    },
      thumbnail: '✍️',
      modules: 14,
      certificate: true,
    },
      thumbnail: '⚛️',
      modules: 16,
      certificate: true,
    }
  ],

const upcomingEvents = [
    {}
      title: 'AI Implementation Workshop',
      date: 'March 20, 2024',
      time: '9:00 AM - 5:00 PM EST',
      location: 'Virtual',
      instructor: 'Dr. Sarah Chen',
      spots: 25,
      price: '$299',
    },
    {}
      title: 'AI Security Certification Bootcamp',
      date: 'April 5-7, 2024',
      time: '9:00 AM - 5:00 PM EST',
      location: 'New York, NY',
      instructor: 'Lisa Wang',
      spots: 15,
      price: '$1,299'
    },
    {}
      title: 'Advanced AI Analytics Masterclass',
      date: 'April 15, 2024',
      time: '10:00 AM - 4:00 PM EST',
      location: 'Virtual',
      instructor: 'Dr. James Liu',
      spots: 30,
      price: '$199',
    }
  ],

const stats = [
    { label: 'Courses Available', value: '50+', icon: BookOpen },
    { label: 'Students Trained', value: '5,000+', icon: Users },
    { label: 'Certifications Issued', value: '2,500+', icon: Award },
    { label: 'Average Rating', value: '4.8/5', icon: Star }
  ],

const filteredCourses = selectedCategory === 'all'
    ? courses,
    : courses.filter(course => course.category === selectedCategory),

        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20viewBox%3D%220%200%2060%2060%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%239C92AC%22%20fill-opacity%3D%220.1%22%3E%3Ccircle%20cx%3D%2230%22%20cy%3D%2230%22%20r%3D%222%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-20"></section>
>>>>>>> cursor/fix-errors-and-merge-to-main-2937

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center"></div>
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
            Training & Education,
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
            Master AI technologies with our comprehensive training programs and certifications,
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center"></div>
            <button className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-semibold py-4 px-8 rounded-xl hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 flex items-center">
              Browse Courses,
              <BookOpen className="w-5 h-5 ml-2" />
            </button>
            <button className="border-2 border-cyan-400 text-cyan-400 font-semibold py-4 px-8 rounded-xl hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300">
              View Certifications,
            </button>
          </div>
        </div>,
      </section>,
,
      {/* Stats Section */}
      <section className="py-16 bg-white/5">
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"></section>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (</div>
              <div key={index} className="text-center"></div>
                <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4"></div>
>>>>>>> cursor/fix-errors-and-merge-to-main-2937
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
      <section className="py-16 bg-gradient-to-r from-purple-900/20 to-blue-900/20">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Course Categories,
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Choose from our comprehensive range of AI training programs,
            </p>
          </div>

              <button
>>>>>>> cursor/fix-errors-and-merge-to-main-2937
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                }`}
              >
                <category.icon className="w-5 h-5" /></categor>
                <span>{category.name}</spa>
              </button>
            ))}
          </div>

          {/* Courses Grid */}
            {filteredCourses.map((course) => (}
              <div key={course.id} className="cyber-card p-6 hover:scale-105 transition-all duration-300">
                <div className="text-center mb-4">
>>>>>>> origin/merge-error-fixes
                  <div className="text-6xl mb-4">{course.thumbnail}</div>
                  <h3 className="text-xl font-bold text-white mb-2">{course.title}</h3>
                  <p className="text-gray-300 text-sm mb-4">{course.description}</p>
                </div>

                    }`}>
                      {course.level}
                    </span>
                  </div>
                      <span className="text-white">{course.rating}</span>
                    </div>
                  </div>
                </div>

                <div className="flex items-center justify-between mb-4"></div>
                  <div className="text-2xl font-bold text-cyan-400">{course.price}</div>
                      <Certificate className="w-4 h-4" />
                      <span className="text-xs">Certificate</span>
                    </div>
                  )}
                </div>

                <button className="w-full bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-semibold py-3 px-4 rounded-lg hover: from-cyan-600 hover:to-purple-700 transition-all">
                  Enroll Now,
                </button>,
              </div>,
            ))}
          </div>
        </div>
      </section>

      {/* Upcoming Events */}
      <section className="py-16 bg-white/5">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Upcoming Training Events,
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Join our live training sessions and workshops,
            </p>
            {upcomingEvents.map((event, index) => (}
              <div key={index} className="cyber-card p-6 hover:scale-105 transition-all duration-300">
                <div className="flex items-start justify-between">
                  <div className="flex-1">
>>>>>>> origin/merge-error-fixes
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
                    <button className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-semibold py-2 px-4 rounded-lg hover: from-cyan-600 hover:to-purple-700 transition-all">
                      Register,
                    </button>
                  </div>,
                </div>,
              </div>,
            ))}
          </div>
        </div>
      </section>

      <Footer /></Foote>
    </div>
  ),
},

export default TrainingPage,