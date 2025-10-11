'use client';

import React from 'react';
import { Helmet } from 'react-helmet-async';
import {  MessageCircle, Calendar, Award } from 'lucide-react';

const CommunityPage: React.FC = () => {
  const events = [
    {
      id: '1',
      title: 'AI Innovation Summit 2024',
      date: 'March 15, 2024',
      time: '9:00 AM - 5:00 PM',
      location: 'San Francisco, CA',
      description: 'Join industry leaders for a day of AI innovation, networking, and collaboration.',
      type: 'Conference'
    },
    {
      id: '2',
      title: 'Cloud Computing Workshop',
      date: 'March 22, 2024',
      time: '2:00 PM - 4:00 PM',
      location: 'Online',
      description: 'Learn the latest cloud computing strategies and best practices.',
      type: 'Workshop'
    },
    {
      id: '3',
      title: 'Cybersecurity Roundtable',
      date: 'March 29, 2024',
      time: '6:00 PM - 8:00 PM',
      location: 'New York, NY',
      description: 'Discuss emerging cybersecurity threats and defense strategies.',
      type: 'Roundtable'
    }
  ];

  const communityStats = [
    { number: '10,000+', label: 'Active Members' },
    { number: '50+', label: 'Countries' },
    { number: '200+', label: 'Events Hosted' },
    { number: '95%', label: 'Satisfaction Rate' }
  ];

  const features = [
    {
      icon: 
      title: 'Global Network',
      description: 'Connect with professionals from around the world in our diverse community.'
    },
    {
      icon: MessageCircle,
      title: 'Knowledge Sharing',
      description: 'Share insights, ask questions, and learn from industry experts.'
    },
    {
      icon: Calendar,
      title: 'Regular Events',
      description: 'Attend workshops, conferences, and networking events throughout the year.'
    },
    {
      icon: Award,
      title: 'Recognition',
      description: 'Get recognized for your contributions and achievements in the community.'
    }
  ];

  return (
    <div>

    <>
      <Helmet>
  
        <title>Community - Join Our Tech Community | Zion Tech Group</title>
        <meta>
  
        <meta>
  
      </Helmet>

      <div>
  
        {/* Hero Section */}
        <section>
  
  <div>
  
          <div>
  
            <div>
  
              <h1>
  
                <span>
  
                  Join Our
                </span>
                <br>
  
                <span className="text-white">Community</span>
              </h1>
              <p>
  
                Connect with like-minded professionals, share knowledge, and grow together in our vibrant tech community.
              </p>
              <div>
  
                <button>
  
                  Join Now
                  <Users>
  
                </button>
                <button>
  
                  Learn More
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section>
  
  <div>
  
          <div>
  
            <div>
  
              {communityStats.map((stat, index) => (
                <div>
  
                  <div>
  
                    {stat.number}
                  </div>
                  <div>
  
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section>
  
  <div>
  
          <div>
  
            <div>
  
              <h2>
  
                Why Join Our Community?
              </h2>
              <p>
  
                Be part of a thriving ecosystem of professionals, innovators, and thought leaders.
              </p>
            </div>
            <div>
  
              {features.map((feature, index) => (
                <div>
  
                  <div>
  
                    <feature>
  
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
                  <p className="text-gray-300">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Events Section */}
        <section>
  
  <div>
  
          <div>
  
            <div>
  
              <h2>
  
                Upcoming Events
              </h2>
              <p>
  
                Join us for exciting events, workshops, and networking opportunities.
              </p>
            </div>
            <div>
  
              {events.map((event) => (
                <div>
  
                  <div>
  
                    <span>
  
                      {event.type}
                    </span>
                    <Calendar>
  
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3">{event.title}</h3>
                  <p className="text-gray-300 mb-4">{event.description}</p>
                  <div>
  
                    <div>
  
                      <Calendar>
  
                      <span>{event.date}</span>
                    </div>
                    <div>
  
                      <Zap>
  
                      <span>{event.time}</span>
                    </div>
                    <div>
  
                      <Globe>
  
                      <span>{event.location}</span>
                    </div>
                  </div>
                  <button>
  
                    Register Now
                  </button>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section>
  
  <div>
  
          <div>
  
            <h2>
  
              Ready to Join Our Community?
            </h2>
            <p>
  
              Connect with professionals, share knowledge, and grow your network in our vibrant community.
            </p>
            <div>
  
              <button>
  
                <Users>
  
                Join Community
              </button>
              <button>
  
                <MessageCircle>
  
                Contact Us
              </button>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default CommunityPage;