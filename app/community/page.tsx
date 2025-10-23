'use client';
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Users, MessageCircle, Calendar, Award, Star, Globe, Heart, Zap } from 'lucide-react';

const events = [
    {
      id: '1',
      title: 'AI & Machine Learning Workshop',
      date: '2024-02-15',
      time: '10:00 AM - 4:00 PM',
      location: 'San Francisco, CA',
      description: 'Learn the latest AI techniques and best practices from industry experts.',
      attendees: 120,
      type: 'Workshop'
    },
    {
      id: '2',
      title: 'Cybersecurity Summit 2024',
      date: '2024-03-20',
      time: '9:00 AM - 6:00 PM',
      location: 'New York, NY',
      description: 'Join leading security experts for insights on the latest threats and defenses.',
      attendees: 300,
      type: 'Conference'
    },
    {
      id: '3',
      title: 'Cloud Computing Meetup',
      date: '2024-02-28',
      time: '6:00 PM - 9:00 PM',
      location: 'Austin, TX',
      description: 'Network with cloud professionals and discuss emerging technologies.',
      attendees: 85,
      type: 'Meetup'
    }
  ];

  const forums = [
    {
      id: '1',
      title: 'AI & Machine Learning',
      description: 'Discuss AI algorithms, models, and applications',
      posts: 1250,
      members: 890
    },
    {
      id: '2',
      title: 'Cybersecurity',
      description: 'Share security best practices and threat intelligence',
      posts: 980,
      members: 650
    },
    {
      id: '3',
      title: 'Cloud Computing',
      description: 'Cloud architecture, deployment, and optimization',
      posts: 1100,
      members: 720
    },
    {
      id: '4',
      title: 'DevOps & Automation',
      description: 'CI/CD, infrastructure, and deployment strategies',
      posts: 750,
      members: 520
    }
  ];

  const testimonials = [
    {
      name: 'Sarah Chen',
      role: 'AI Engineer',
      company: 'TechCorp',
      content: 'The community has been invaluable for my career growth. The knowledge sharing and networking opportunities are incredible.',
      avatar: '/images/community/sarah.jpg'
    },
    {
      name: 'Michael Rodriguez',
      role: 'Security Architect',
      company: 'SecureTech',
      content: 'I\'ve learned so much from the cybersecurity discussions and made connections that led to new opportunities.',
      avatar: '/images/community/michael.jpg'
    },
    {
      name: 'Jennifer Liu',
      role: 'Cloud Solutions Architect',
      company: 'CloudFirst',
      content: 'The community events and forums have helped me stay updated with the latest cloud technologies and trends.',
      avatar: '/images/community/jennifer.jpg'
    }
  ];

  const stats = [
    { label: 'Active Members', value: '5,000+', icon: <Users className="w-6 h-6" loading="lazy" /> },
    { label: 'Forum Posts', value: '10,000+', icon: <MessageCircle className="w-6 h-6" loading="lazy" /> },
    { label: 'Events Hosted', value: '150+', icon: <Calendar className="w-6 h-6" loading="lazy" /> },
    { label: 'Countries', value: '50+', icon: <Globe className="w-6 h-6" loading="lazy" /> }
  ];

  return (
    <div className="min-h-screen bg-gray-50" loading="lazy">
      <Helmet>
        <title>Community - Zion Tech Group</title>
        <meta name="description" content="Join our vibrant community of technology professionals. Connect, learn, and grow with like-minded individuals in AI, cybersecurity, and cloud computing." />
        <meta name="keywords" content="tech community, AI community, cybersecurity forum, cloud computing meetup, technology networking" />
      </Helmet>

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-900 to-purple-900 text-white py-20" loading="lazy">
        <div className="container mx-auto px-4" loading="lazy">
          <div className="max-w-4xl mx-auto text-center" loading="lazy">
            <h1 className="text-4xl md:text-6xl font-bold mb-6" loading="lazy">Join Our Community</h1>h1>
            <p className="text-xl md:text-2xl mb-8 text-blue-100" loading="lazy">Connect with thousands of technology professionals, share knowledge, and advance your career</p>p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center" loading="lazy">
              <button className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors" loading="lazy" aria-label="Action button">Join Now</button>
              <button className="border border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors" loading="lazy" aria-label="Action button">Learn More</button>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white" loading="lazy">
        <div className="container mx-auto px-4" loading="lazy">
          <div className="max-w-6xl mx-auto" loading="lazy">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8" loading="lazy">{stats.map((stat, index) => (</div>
                <div key={index} className="text-center" loading="lazy">
                  <div className="flex justify-center mb-4 text-blue-600" loading="lazy">{stat.icon}</div>div>
                  <div className="text-3xl font-bold text-gray-900 mb-2" loading="lazy">{stat.value}</div>
                  <div className="text-gray-600" loading="lazy">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Forums Section */}
      <section className="py-16 bg-gray-50" loading="lazy">
        <div className="container mx-auto px-4" loading="lazy">
          <div className="max-w-6xl mx-auto" loading="lazy">
            <h2 className="text-3xl font-bold text-center text-gray-900 mb-12" loading="lazy">Discussion Forums</h2>
            <div className="grid md:grid-cols-2 gap-8" loading="lazy">{forums.map((forum) => (</div>
                <div key={forum.id} className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow" loading="lazy">
                  <div className="flex items-start justify-between mb-4" loading="lazy">
                    <h3 className="text-xl font-semibold text-gray-900" loading="lazy">{forum.title}</h3>
                    <div className="flex items-center gap-2 text-sm text-gray-500" loading="lazy">
                      <Users className="w-4 h-4" loading="lazy" />
                      {forum.members}
                    </div>
                  </div>
                  <p className="text-gray-600 mb-4" loading="lazy">{forum.description}</p>
                  <div className="flex items-center justify-between" loading="lazy">
                    <div className="flex items-center gap-4 text-sm text-gray-500" loading="lazy">
                      <span className="flex items-center gap-1" loading="lazy">
                        <MessageCircle className="w-4 h-4" loading="lazy" />
                        {forum.posts} posts
                      </span>
                    </div>
                    <button className="text-blue-600 hover:text-blue-800 font-medium" loading="lazy" aria-label="Action button">Join Discussion →</button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Events Section */}
      <section className="py-16 bg-white" loading="lazy">
        <div className="container mx-auto px-4" loading="lazy">
          <div className="max-w-6xl mx-auto" loading="lazy">
            <h2 className="text-3xl font-bold text-center text-gray-900 mb-12" loading="lazy">Upcoming Events</h2>
            <div className="space-y-6" loading="lazy">{events.map((event) => (</div>
                <div key={event.id} className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow" loading="lazy">
                  <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-4" loading="lazy">
                    <div>
                      <div className="flex items-center gap-3 mb-2" loading="lazy">
                        <span className="px-3 py-1 bg-blue-100 text-blue-800 text-sm rounded-full" loading="lazy">{event.type}</span>
                        <h3 className="text-xl font-semibold text-gray-900" loading="lazy">{event.title}</h3>
                      </div>
                      <p className="text-gray-600 mb-3" loading="lazy">{event.description}</p>
                      <div className="flex flex-wrap gap-4 text-sm text-gray-500" loading="lazy">
                        <span className="flex items-center gap-1" loading="lazy">
                          <Calendar className="w-4 h-4" loading="lazy" />
                          {new Date(event.date).toLocaleDateString()}
                        </span>
                        <span className="flex items-center gap-1" loading="lazy">
                          <Zap className="w-4 h-4" loading="lazy" />
                          {event.time}
                        </span>
                        <span className="flex items-center gap-1" loading="lazy">
                          <Globe className="w-4 h-4" loading="lazy" />
                          {event.location}
                        </span>
                        <span className="flex items-center gap-1" loading="lazy">
                          <Users className="w-4 h-4" loading="lazy" />
                          {event.attendees} attendees
                        </span>
                      </div>
                    </div>
                    <div className="mt-4 lg:mt-0" loading="lazy">
                      <button className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors" loading="lazy" aria-label="Action button">Register</button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 bg-gray-50" loading="lazy">
        <div className="container mx-auto px-4" loading="lazy">
          <div className="max-w-6xl mx-auto" loading="lazy">
            <h2 className="text-3xl font-bold text-center text-gray-900 mb-12" loading="lazy">What Our Members Say</h2>
            <div className="grid md:grid-cols-3 gap-8" loading="lazy">{testimonials.map((testimonial, index) => (</div>
                <div key={index} className="bg-white rounded-lg shadow-md p-6" loading="lazy">
                  <div className="flex items-center mb-4" loading="lazy">
                    <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white font-semibold" loading="lazy">{testimonial.name.charAt(0)}</div>div>
                    <div className="ml-4" loading="lazy">
                      <h4 className="font-semibold text-gray-900" loading="lazy">{testimonial.name}</h4>
                      <p className="text-sm text-gray-600" loading="lazy">{testimonial.role} at {testimonial.company}</p>
                    </div>
                  </div>
                  <p className="text-gray-600 italic" loading="lazy">"{testimonial.content}"</p>
                  <div className="flex mt-4" loading="lazy">{[...Array(5)].map((_, i) => (</div>
                      <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" loading="lazy" />
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-purple-600 text-white" loading="lazy">
        <div className="container mx-auto px-4" loading="lazy">
          <div className="max-w-4xl mx-auto text-center" loading="lazy">
            <h2 className="text-3xl font-bold mb-6" loading="lazy">Ready to Join Our Community?</h2>
            <p className="text-xl mb-8 text-blue-100" loading="lazy">Connect with thousands of professionals, share your knowledge, and advance your career in technology.</p>p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center" loading="lazy">
              <button className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors flex items-center justify-center" loading="lazy" aria-label="Action button">
                <Heart className="mr-2 w-5 h-5" loading="lazy" />
                Join Community
              </button>
              <button className="border border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors" loading="lazy" aria-label="Action button">View Events</button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};


