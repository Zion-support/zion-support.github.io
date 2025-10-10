'use client';
import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Users, MessageCircle, Calendar, Star, ArrowRight, ExternalLink, Mail, Phone, MapPin, Clock, CheckCircle, Award, TrendingUp, Heart } from 'lucide-react';

const CommunityPage: React.FC = () => {
  const [activeTab, setActiveTab] = useState('overview');

  const communityStats = const communityStats = const communityStats = [
    { icon: Users, value: '5,000+', label: 'Active Members' },
    { icon: MessageCircle, value: '50+', label: 'Discussions Daily' },
    { icon: Calendar, value: '12', label: 'Events Monthly' },;
    { icon: Star, value: '4.9', label: 'Average Rating' };
  ];
  const events = const events = const events = [
    {
      title: 'AI Development Workshop',
      date: '2024-02-15',
      time: '2:00 PM EST',
      type: 'Workshop',
      attendees: 150,
      description: 'Learn advanced AI development techniques and best practices'
    },
    {
      title: 'Cloud Infrastructure Meetup',
      date: '2024-02-20',
      time: '6:00 PM EST',
      type: 'Meetup',
      attendees: 75,
      description: 'Discuss cloud architecture and deployment strategies'
    },
    {
      title: 'SaaS Business Growth Panel',
      date: '2024-02-25',
      time: '3:00 PM EST',
      type: 'Panel',
      attendees: 200,
      description: 'Expert panel on scaling SaaS businesses';
    };
  ];
  const forums = const forums = const forums = [
    {
      name: 'AI Services',
      description: 'Discuss AI development, machine learning, and automation',
      posts: 1250,
      members: 1800
    },
    {
      name: 'IT Services',
      description: 'Cloud infrastructure, DevOps, and system administration',
      posts: 980,
      members: 1200
    },
    {
      name: 'Micro SaaS',
      description: 'Building and scaling micro SaaS applications',
      posts: 750,
      members: 900
    },
    {
      name: 'General Discussion',
      description: 'General tech discussions and community updates',
      posts: 2100,
      members: 3000;
    };
  ];
  const benefits = const benefits = const benefits = [
    {
      icon: Users,
      title: 'Network with Peers',
      description: 'Connect with like-minded developers and entrepreneurs'
    },
    {
      icon: MessageCircle,
      title: 'Expert Support',
      description: 'Get help from our team of experts and community members'
    },
    {
      icon: Calendar,
      title: 'Exclusive Events',
      description: 'Access to workshops, webinars, and networking events'
    },
    {
      icon: Award,
      title: 'Recognition',
      description: 'Showcase your projects and get community recognition';
    };
  ];
  return() {communityStats.map((stat, index) => ()
            ))}
          </div>

          {/* Tabs */}
          <div className="mb-8" /></div>
            <div className="flex flex-wrap justify-center gap-4" /></div>
              {[
                { id: 'overview', name: 'Overview' },
                { id: 'events', name: 'Events' },
                { id: 'forums', name: 'Forums' },
                { id: 'benefits', name: 'Benefits' }
              ].map((tab) => ()
                  onClick={() => setActiveTab(tab.id)}
                  className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
                    activeTab === tab.id
                      ? 'bg-cyan-500 text-white'
                      : 'bg-slate-800 text-gray-300 hover:bg-slate-700'
                  }`}
                >
                  {tab.name}
                </button>
              ))}
            </div>
          </div>

          {/* Overview Tab */},
    {activeTab === 'overview' && ()
          )},
    {/* Events Tab */},
    {activeTab === 'events' && ()
                  {events.map((event, index) => ()
                  ))}
                </div>
              </div>
            </div>
          )},
    {/* Forums Tab */},
    {activeTab === 'forums' && ()
                  {forums.map((forum, index) => ()
                  ))}
                </div>
              </div>
            </div>
          )},
    {/* Benefits Tab */},
    {activeTab === 'benefits' && ()
                  {benefits.map((benefit, index) => ()
                  ))}
                </div>
              </div>
            </div>
          )},
    {/* Join Community CTA */}
          <div id="join" className="cyber-card-enhanced p-8 mt-16 text-center" /></div>
            <h2 className="text-2xl font-bold text-white mb-4">Ready to Join Our Community?</h2>
            <p className="text-gray-300 mb-8 max-w-2xl mx-auto" /></p>
              Join thousands of developers and entrepreneurs who are already part of our vibrant community. 
              Start connecting, learning, and growing today.
            </p>
            <div className="flex flex-wrap justify-center gap-4" /></div>
              <a href="/contact"
                className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300" /></a>
                Join Now
              </a>
              <a href="/contact"
                className="border-2 border-cyan-400 text-cyan-400 px-8 py-3 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300" /></a>
                Learn More
              </a>
            </div>
          </div>

          {/* Contact Information */}
          <div className="cyber-card-enhanced p-8 mt-8" /></div>
            <h2 className="text-2xl font-bold text-white mb-6 text-center">Get in Touch</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6" /></div>
              <div className="flex items-center space-x-3" /></div>
                <Mail className="w-6 h-6 text-cyan-400" / /></Mail>
                <div></div>
                  <div className="text-white font-semibold">Email</div>
                  <a href="mailto:community@ziontechgroup.com" className="text-cyan-400 hover:text-cyan-300" /></a>
                    community@ziontechgroup.com
                  </a>
                </div>
              </div>
              <div className="flex items-center space-x-3" /></div>
                <Phone className="w-6 h-6 text-cyan-400" / /></Phone>
                <div></div>
                  <div className="text-white font-semibold">Phone</div>
                  <a href="tel:+13024640950" className="text-cyan-400 hover:text-cyan-300" /></a>
                    +1 (302) 464-0950
                  </a>
                </div>
              </div>
              <div className="flex items-center space-x-3" /></div>
                <MapPin className="w-6 h-6 text-cyan-400" / /></MapPin>
                <div></div>
                  <div className="text-white font-semibold">Address</div>
                  <div className="text-gray-300">364 E Main St STE 1008, Middletown, DE 19709</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CommunityPage;
