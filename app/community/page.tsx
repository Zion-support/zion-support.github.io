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
    <div className="min-h-screen bg-gray-50"></div><>
<//div>
<Helmet><>
</Helmet>
<title>Community - Zion Tech Group</title><>
<//title>
<meta name="description" content="Join our vibrant community of technology professionals. Connect, learn, and grow with like-minded individuals in AI, cybersecurity, and cloud computing." /><>
</meta name="description" content="Join our vibrant community of technology professionals. Connect, learn, and grow with like-minded individuals in AI, cybersecurity, and cloud computing." />
<meta name="keywords" content="tech community, AI community, cybersecurity forum, cloud computing meetup, technology networking" /><>
</meta name="keywords" content="tech community, AI community, cybersecurity forum, cloud computing meetup, technology networking" />
</Helmet><//Helmet>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-900 to-purple-900 text-white py-20"><>
</section className="bg-gradient-to-r from-blue-900 to-purple-900 text-white py-20">
<div className="container mx-auto px-4"></div><>
<//div>
<div className="max-w-4xl mx-auto text-center"></div><>
<//div>
<h1 className="text-4xl md:text-6xl font-bold mb-6"></h1><//h1>
              Join Our Community</h1><>
<//h1>
</h1><>
<//h1>
<p className="text-xl md:text-2xl mb-8 text-blue-100"></p><//p>
              Connect with thousands of technology professionals, share knowledge, and advance your career</p><>
<//p>
</p><>
<//p>
<div className="flex flex-col sm:flex-row gap-4 justify-center"></div><>
<//div>
<button className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"></button><//button>
                Join Now</button><>
<//button>
</button><>
<//button>
<button className="border border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors"></button><//button>
                Learn More</button><>
<//button>
</button><>
<//button>
</div><>
<//div>
</div><>
<//div>
</div><>
<//div>
</section><//section>
      {/* Stats Section */}
      <section className="py-16 bg-white"><>
</section className="py-16 bg-white">
<div className="container mx-auto px-4"></div><>
<//div>
<div className="max-w-6xl mx-auto"></div><>
<//div>
<div className="grid grid-cols-2 md:grid-cols-4 gap-8"></div><//div>
              {stats.map((stat, index) => (</div><>
<//div>
<div key={index} className="text-center"></div><>
<//div>
<div className="flex justify-center mb-4 text-blue-600"></div><//div>
                    {stat.icon}</div><>
<//div>
</div><>
<//div>
<div className="text-3xl font-bold text-gray-900 mb-2">{stat.value}</div><>
<//div>
<div className="text-gray-600">{stat.label}</div><>
<//div>
</div><//div>
              ))}
            </div><>
<//div>
</div><>
<//div>
</div><>
<//div>
</section><//section>
      {/* Forums Section */}
      <section className="py-16 bg-gray-50"><>
</section className="py-16 bg-gray-50">
<div className="container mx-auto px-4"></div><>
<//div>
<div className="max-w-6xl mx-auto"></div><>
<//div>
<h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Discussion Forums</h2><>
<//h2>
<div className="grid md:grid-cols-2 gap-8"></div><//div>
              {forums.map((forum) => (</div><>
<//div>
<div key={forum.id} className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow"></div><>
<//div>
<div className="flex items-start justify-between mb-4"></div><>
<//div>
<h3 className="text-xl font-semibold text-gray-900">{forum.title}</h3><>
<//h3>
<div className="flex items-center gap-2 text-sm text-gray-500"></div><>
<//div>
<Users className="w-4 h-4" /></Users className="w-4 h-4" />
                      {forum.members}
                    </div><>
<//div>
</div><>
<//div>
<p className="text-gray-600 mb-4">{forum.description}</p><>
<//p>
<div className="flex items-center justify-between"></div><>
<//div>
<div className="flex items-center gap-4 text-sm text-gray-500"></div><>
<//div>
<span className="flex items-center gap-1"><>
</span className="flex items-center gap-1">
<MessageCircle className="w-4 h-4" /></MessageCircle className="w-4 h-4" />
                        {forum.posts} posts
                      </span><>
<//span>
</div><>
<//div>
<button className="text-blue-600 hover:text-blue-800 font-medium"></button><//button>
                      Join Discussion →</button><>
<//button>
</button><>
<//button>
</div><>
<//div>
</div><//div>
              ))}
            </div><>
<//div>
</div><>
<//div>
</div><>
<//div>
</section><//section>
      {/* Events Section */}
      <section className="py-16 bg-white"><>
</section className="py-16 bg-white">
<div className="container mx-auto px-4"></div><>
<//div>
<div className="max-w-6xl mx-auto"></div><>
<//div>
<h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Upcoming Events</h2><>
<//h2>
<div className="space-y-6"></div><//div>
              {events.map((event) => (</div><>
<//div>
<div key={event.id} className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow"></div><>
<//div>
<div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-4"></div><>
<//div>
<div></div><>
<//div>
<div className="flex items-center gap-3 mb-2"></div><>
<//div>
<span className="px-3 py-1 bg-blue-100 text-blue-800 text-sm rounded-full"></span className="px-3 py-1 bg-blue-100 text-blue-800 text-sm rounded-full">
                          {event.type}
                        </span><>
<//span>
<h3 className="text-xl font-semibold text-gray-900">{event.title}</h3><>
<//h3>
</div><>
<//div>
<p className="text-gray-600 mb-3">{event.description}</p><>
<//p>
<div className="flex flex-wrap gap-4 text-sm text-gray-500"></div><>
<//div>
<span className="flex items-center gap-1"><>
</span className="flex items-center gap-1">
<Calendar className="w-4 h-4" /></Calendar className="w-4 h-4" />
                          {new Date(event.date).toLocaleDateString()}
                        </span><>
<//span>
<span className="flex items-center gap-1"><>
</span className="flex items-center gap-1">
<Zap className="w-4 h-4" /></Zap className="w-4 h-4" />
                          {event.time}
                        </span><>
<//span>
<span className="flex items-center gap-1"><>
</span className="flex items-center gap-1">
<Globe className="w-4 h-4" /></Globe className="w-4 h-4" />
                          {event.location}
                        </span><>
<//span>
<span className="flex items-center gap-1"><>
</span className="flex items-center gap-1">
<Users className="w-4 h-4" /></Users className="w-4 h-4" />
                          {event.attendees} attendees
                        </span><>
<//span>
</div><>
<//div>
</div><>
<//div>
<div className="mt-4 lg:mt-0"></div><>
<//div>
<button className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors"></button><//button>
                        Register</button><>
<//button>
</button><>
<//button>
</div><>
<//div>
</div><>
<//div>
</div><//div>
              ))}
            </div><>
<//div>
</div><>
<//div>
</div><>
<//div>
</section><//section>
      {/* Testimonials Section */}
      <section className="py-16 bg-gray-50"><>
</section className="py-16 bg-gray-50">
<div className="container mx-auto px-4"></div><>
<//div>
<div className="max-w-6xl mx-auto"></div><>
<//div>
<h2 className="text-3xl font-bold text-center text-gray-900 mb-12">What Our Members Say</h2><>
<//h2>
<div className="grid md:grid-cols-3 gap-8"></div><//div>
              {testimonials.map((testimonial, index) => (</div><>
<//div>
<div key={index} className="bg-white rounded-lg shadow-md p-6"></div><>
<//div>
<div className="flex items-center mb-4"></div><>
<//div>
<div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white font-semibold"></div><//div>
                      {testimonial.name.charAt(0)}</div><>
<//div>
</div><>
<//div>
<div className="ml-4"></div><>
<//div>
<h4 className="font-semibold text-gray-900">{testimonial.name}</h4><>
<//h4>
<p className="text-sm text-gray-600">{testimonial.role} at {testimonial.company}</p><>
<//p>
</div><>
<//div>
</div><>
<//div>
<p className="text-gray-600 italic">"{testimonial.content}"</p><>
<//p>
<div className="flex mt-4"></div><//div>
                    {[...Array(5)].map((_, i) => (</div><>
<//div>
<Star key={i} className="w-4 h-4 text-yellow-400 fill-current" /></Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                    ))}
                  </div><>
<//div>
</div><//div>
              ))}
            </div><>
<//div>
</div><>
<//div>
</div><>
<//div>
</section><//section>
      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-purple-600 text-white"><>
</section className="py-16 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
<div className="container mx-auto px-4"></div><>
<//div>
<div className="max-w-4xl mx-auto text-center"></div><>
<//div>
<h2 className="text-3xl font-bold mb-6">Ready to Join Our Community?</h2><>
<//h2>
<p className="text-xl mb-8 text-blue-100"></p><//p>
              Connect with thousands of professionals, share your knowledge, and advance your career in technology.</p><>
<//p>
</p><>
<//p>
<div className="flex flex-col sm:flex-row gap-4 justify-center"></div><>
<//div>
<button className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors flex items-center justify-center"></button><>
<//button>
<Heart className="mr-2 w-5 h-5" /></Heart className="mr-2 w-5 h-5" />
                Join Community
              </button><>
<//button>
<button className="border border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors"></button><//button>
                View Events</button><>
<//button>
</button><>
<//button>
</div><>
<//div>
</div><>
<//div>
</div><>
<//div>
</section><>
<//section>
</div><//div>
  );
};

export default CommunityPage;
