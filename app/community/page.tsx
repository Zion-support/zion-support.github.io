'use client';
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Users, MessageCircle, Calendar, Award, Star, Globe, Heart, Zap } from 'lucide-react';

const CommunityPage: React.FC = () => {
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
    { label: 'Active Members', value: '5,000+', icon: <Users className="w-6 h-6" /> },
    { label: 'Forum Posts', value: '10,000+', icon: <MessageCircle className="w-6 h-6" /> },
    { label: 'Events Hosted', value: '150+', icon: <Calendar className="w-6 h-6" /> },
    { label: 'Countries', value: '50+', icon: <Globe className="w-6 h-6" /> }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Head>
        <title>Community - Zion Tech Group</title>
        <meta name="description" content="Join our vibrant community of technology professionals. Connect, learn, and grow with like-minded individuals in AI, cybersecurity, and cloud computing." />
        </Head>

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-900 to-purple-900 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1>Join Our Community
            </h1>
            <p>Connect with thousands of technology professionals, share knowledge, and advance your career
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button>Join Now
              </button>
              <button>Learn More
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div>{stat.icon}
                  </div>
                  <div>{stat.value}</div>
                  <div>{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Forums Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2>Discussion Forums</h2>
            <div className="grid md:grid-cols-2 gap-8">
              {forums.map((forum) => (
                <div key={forum.id} className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
                  <div className="flex items-start justify-between mb-4">
                    <h3>{forum.title}</h3>
                    <div className="flex items-center gap-2 text-sm text-gray-500">
                      <Users>{forum.members}
                    </Users>div>
                  </div>
                  <p>{forum.description}</p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4 text-sm text-gray-500">
                      <span className="flex items-center gap-1">
                        <MessageCircle>{forum.posts} posts
                      </MessageCircle>span>
                    </div>
                    <button>Join Discussion →
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Events Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2>Upcoming Events</h2>
            <div className="space-y-6">
              {events.map((event) => (
                <div key={event.id} className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow">
                  <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-4">
                    <div>
                      <div className="flex items-center gap-3 mb-2">
                        <span>{event.type}
                        </span>
                        <h3>{event.title}</h3>
                      </div>
                      <p>{event.description}</p>
                      <div className="flex flex-wrap gap-4 text-sm text-gray-500">
                        <span className="flex items-center gap-1">
                          <Calendar>{new Date(event.date).toLocaleDateString()}
                        </Calendar>span>
                        <span className="flex items-center gap-1">
                          <Zap>{event.time}
                        </Zap>span>
                        <span className="flex items-center gap-1">
                          <Globe>{event.location}
                        </Globe>span>
                        <span className="flex items-center gap-1">
                          <Users>{event.attendees} attendees
                        </Users>span>
                      </div>
                    </div>
                    <div className="mt-4 lg:mt-0">
                      <button>Register
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2>What Our Members Say</h2>
            <div className="grid md:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                <div key={index} className="bg-white rounded-lg shadow-md p-6">
                  <div className="flex items-center mb-4">
                    <div>{testimonial.name.charAt(0)}
                    </div>
                    <div className="ml-4">
                      <h4>{testimonial.name}</h4>
                      <p>{testimonial.role} at {testimonial.company}</p>
                    </div>
                  </div>
                  <p>"{testimonial.content}"</p>
                  <div className="flex mt-4">
                    {[...Array(5)].map((_, i) => (
                      <Star>))}
                  </Star>div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2>Ready to Join Our Community?</h2>
            <p>Connect with thousands of professionals, share your knowledge, and advance your career in technology.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors flex items-center justify-center">
                <Heart>Join Community
              </Heart>button>
              <button>View Events
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CommunityPage;
