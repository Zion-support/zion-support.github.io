'use client';
import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Users, MessageCircle, Calendar, Star, ArrowRight, ExternalLink, Mail, Phone, MapPin, Clock, CheckCircle, Award, TrendingUp, Heart } from 'lucide-react';

const CommunityPage: React.FC = () => {
  const [activeTab, setActiveTab] = useState('overview');

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
      members: 1800;
    },
    {
      name: 'IT Services',
      description: 'Cloud infrastructure, DevOps, and system administration',
      posts: 980,
      members: 1200;
    },
    {
      name: 'Micro SaaS',
      description: 'Building and scaling micro SaaS applications',
      posts: 750,
      members: 900;
    },
    {
      name: 'General Discussion',
      description: 'General tech discussions and community updates',
      posts: 2100,
      members: 3000;
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
            ))}
          </div>

          {/* Tabs */}
              {[
                 id: 'overview', name: 'Overview' },
                { id: 'events', name: 'Events' },
                { id: 'forums', name: 'Forums' },
                { id: 'benefits', name: 'Benefits' }
                  onClick={() => setActiveTab(tab.id)}
                  className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 $
                    activeTab === tab.id;
                      ? 'bg-cyan-500 text-white'
                      : 'bg-slate-800 text-gray-300 hover:bg-slate-700'
                  }`}
                >
                  {tab.name}
                </button></button></button>
              ))}
            </div>
          </div>

          {/* Overview Tab */},
                  ))}
                </div>
              </div>
            </div>
          )},
    {/* Forums Tab */},
                  ))}
                </div>
              </div>
            </div>
          )},
    {/* Benefits Tab */},
                  ))}
                </div>
              </div>
            </div>
          )},
    {/* Join Community CTA */}
              </a>
            </div>
          </div>

          {/* Contact Information */}
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
