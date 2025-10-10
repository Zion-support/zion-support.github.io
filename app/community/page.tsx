'use client';
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Users, MessageCircle, Calendar, Award, Globe, Heart, Star, ArrowRight } from 'lucide-react';

const CommunityPage: React.FC = () => {
  const events = [
    {
      id: '1',
      title: 'AI Innovation Summit 2024',
      date: 'March 15, 2024',
      time: '9:00 AM - 5:00 PM',
      location: 'San Francisco, CA',
      description: 'Join industry leaders for discussions on the latest AI innovations and their impact on business.',
      attendees: 250,
      type: 'Conference'
    },
    {
      id: '2',
      title: 'Cloud Migration Workshop',
      date: 'March 22, 2024',
      time: '2:00 PM - 4:00 PM',
      location: 'Online',
      description: 'Learn best practices for migrating your infrastructure to the cloud with our expert team.',
      attendees: 150,
      type: 'Workshop'
    },
    {
      id: '3',
      title: 'Cybersecurity Roundtable',
      date: 'March 29, 2024',
      time: '6:00 PM - 8:00 PM',
      location: 'New York, NY',
      description: 'Interactive discussion on emerging cybersecurity threats and defense strategies.',
      attendees: 75,
      type: 'Roundtable'
    }
  ];

  const testimonials = [
    {
      name: 'Sarah Johnson',
      role: 'CTO, TechStart Inc',
      content: 'The Zion Tech community has been invaluable for our growth. The knowledge sharing and networking opportunities are exceptional.',
      avatar: '/images/community/sarah-johnson.jpg'
    },
    {
      name: 'Michael Chen',
      role: 'Lead Developer, CloudCorp',
      content: 'I\'ve learned so much from the community events and discussions. The expertise level here is unmatched.',
      avatar: '/images/community/michael-chen.jpg'
    },
    {
      name: 'Emily Rodriguez',
      role: 'Security Analyst, FinanceFirst',
      content: 'The community support helped us implement robust security measures. Highly recommend joining!',
      avatar: '/images/community/emily-rodriguez.jpg'
    }
  ];

  const stats = [
    { label: 'Community Members', value: '10,000+', icon: <Users className="h-8 w-8" /> },
    { label: 'Events Hosted', value: '150+', icon: <Calendar className="h-8 w-8" /> },
    { label: 'Countries', value: '45+', icon: <Globe className="h-8 w-8" /> },
    { label: 'Success Stories', value: '500+', icon: <Award className="h-8 w-8" /> }
  ];

  return (
    <>
      <Helmet>
        <title>Community - Zion Tech Group</title>
        <meta name="description" content="Join our vibrant community of technology professionals. Connect, learn, and grow with industry experts and like-minded individuals." />
        <meta name="keywords" content="tech community, professional network, technology events, networking, learning, collaboration" />
      </Helmet>

      <div className="min-h-screen bg-gray-50">
        {/* Hero Section */}
        <div className="bg-gradient-to-r from-blue-600 to-purple-700 text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
            <div className="text-center">
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                Join Our Community
              </h1>
              <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
                Connect with technology professionals, share knowledge, and grow together in our vibrant community.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors inline-flex items-center">
                  Join Now
                  <ArrowRight className="ml-2 h-5 w-5" />
                </button>
                <button className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors">
                  View Events
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Stats Section */}
        <div className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Our Community Impact
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Numbers that reflect our growing community and the value we provide to our members.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="flex justify-center mb-4">
                    <div className="p-4 bg-blue-100 rounded-full text-blue-600">
                      {stat.icon}
                    </div>
                  </div>
                  <div className="text-4xl font-bold text-gray-900 mb-2">
                    {stat.value}
                  </div>
                  <div className="text-gray-600">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Upcoming Events */}
        <div className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Upcoming Events
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Join our upcoming events and connect with industry professionals.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {events.map((event) => (
                <div key={event.id} className="bg-white rounded-lg shadow-sm overflow-hidden hover:shadow-md transition-shadow">
                  <div className="p-6">
                    <div className="flex items-center justify-between mb-4">
                      <span className="px-3 py-1 bg-blue-100 text-blue-800 text-sm rounded-full">
                        {event.type}
                      </span>
                      <div className="flex items-center text-sm text-gray-500">
                        <Users className="h-4 w-4 mr-1" />
                        {event.attendees} attendees
                      </div>
                    </div>

                    <h3 className="text-xl font-semibold text-gray-900 mb-2">
                      {event.title}
                    </h3>
                    <p className="text-gray-600 mb-4">
                      {event.description}
                    </p>

                    <div className="space-y-2 mb-6">
                      <div className="flex items-center text-sm text-gray-500">
                        <Calendar className="h-4 w-4 mr-2" />
                        {event.date} at {event.time}
                      </div>
                      <div className="flex items-center text-sm text-gray-500">
                        <Globe className="h-4 w-4 mr-2" />
                        {event.location}
                      </div>
                    </div>

                    <button className="w-full bg-blue-600 text-white py-2 px-4 rounded-lg font-semibold hover:bg-blue-700 transition-colors">
                      Register Now
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Testimonials */}
        <div className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                What Our Community Says
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Hear from our community members about their experiences.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                <div key={index} className="bg-gray-50 rounded-lg p-6">
                  <div className="flex items-center mb-4">
                    <img
                      src={testimonial.avatar}
                      alt={testimonial.name}
                      className="w-12 h-12 rounded-full mr-4"
                    />
                    <div>
                      <h4 className="font-semibold text-gray-900">
                        {testimonial.name}
                      </h4>
                      <p className="text-sm text-gray-600">
                        {testimonial.role}
                      </p>
                    </div>
                  </div>
                  <p className="text-gray-700 italic">
                    "{testimonial.content}"
                  </p>
                  <div className="flex mt-4">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 text-yellow-400 fill-current" />
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Join CTA */}
        <div className="py-20 bg-blue-600 text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Ready to Join Our Community?
            </h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              Connect with thousands of technology professionals and start your journey of growth and collaboration.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors inline-flex items-center">
                <Heart className="mr-2 h-5 w-5" />
                Join Community
                <ArrowRight className="ml-2 h-5 w-5" />
              </button>
              <button className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors inline-flex items-center">
                <MessageCircle className="mr-2 h-5 w-5" />
                Start Discussion
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CommunityPage;