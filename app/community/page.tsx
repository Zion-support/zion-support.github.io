
const CommunityPage: React.FC = () => {,
  const [activeTab, setActiveTab] = useState('overview');

'use client'
import React, { useState  } from 'react'
import {  Helmet  } from 'react-helmet-async'import {  Users, MessageCircle, Calendar, Star, ArrowRight, ExternalLink, Mail, Phone, MapPin, Clock, CheckCircle, Award, TrendingUp, Heart   } from 'lucide-react'
const CommunityPage: React.FC = () => {
  const [activeTab, setActiveTab] = useState('overview')
  const communityStats = [
  ]
  const events = [
    {title: 'AI Development Workshop',
      date: '2024-02-15',
      time: '2:00 PM EST',
      type: 'Workshop',
      attendees: 150,
      description: 'Learn advanced AI development techniques and best practices',},
    {title: 'Cloud Infrastructure Meetup',
      date: '2024-02-20',
      time: '6:00 PM EST',
      type: 'Meetup',
      attendees: 75,
      description: 'Discuss cloud architecture and deployment strategies',},
    {title: 'SaaS Business Growth Panel',
      date: '2024-02-25',
      time: '3:00 PM EST',
      type: 'Panel',
      attendees: 200,
  const forums = [
    {name: 'AI Services',
      description: 'Discuss AI development, machine learning, and automation',
      posts: 1250,
      members: 1800;,},
    {name: 'IT Services',
      description: 'Cloud infrastructure, DevOps, and system administration',
      posts: 980,
      members: 1200;,},
    {name: 'Micro SaaS',
      description: 'Building and scaling micro SaaS applications',
      posts: 750,
      members: 900;,},
    {name: 'General Discussion',
      description: 'General tech discussions and community updates',
      posts: 2100,
  ]
  const benefits = [
    {icon: Users,
      title: 'Network with Peers',
      description: 'Connect with like-minded developers and entrepreneurs',},
    {icon: MessageCircle,
      title: 'Expert Support',
      description: 'Get help from our team of experts and community members',},
    {icon: Calendar,
      title: 'Exclusive Events',
      description: 'Access to workshops, webinars, and networking events'},
    {icon: Award,
      title: 'Recognition',
        <title&gt;Community - Zion Tech Group</title&gt;
        </Helmet&gt;<title&gt;Community - Zion Tech Group</title&gt;
        <meta name="description" content="Join the Zion Tech Group community. Connect with developers, entrepreneurs, and tech enthusiasts. Learn, share, and grow together." /&gt;
        <meta name="keywords" content="community, developers, tech community, networking, events, forums, AI community" /&gt;
        <link rel="canonical" href="https: //ziontechgroup.com/community" /&gt;,
      </Helmet&gt;

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900"&gt;</div&gt;
              </div&gt;
              <h1 className="text-4xl md: text-5xl font-bold text-white neon-text-enhanced"&gt;</h1&gt;,</h1&gt;
                Community;
              </h1&gt;
            </div&gt;
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8"&gt;</p&gt;Join our vibrant community of developers, entrepreneurs, and tech enthusiasts.</p&gt;
              Connect, learn, and grow together.
            </p&gt;
            <div className="flex flex-wrap justify-center gap-4"&gt;</div&gt;
                href="#join"
                className="bg-gradient-to-r from-cyan-500 to-blue-600 hover: from-cyan-600 hover:to-blue-700 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300",
              &gt;
                Join Community;
              </a&gt;
                href="#events"
                className="border-2 border-cyan-400 text-cyan-400 px-6 py-3 rounded-lg font-semibold hover: bg-cyan-400 hover:text-slate-900 transition-all duration-300",
              &gt;
                View Events;
              </a&gt;
                href="#forums"
                className="border-2 border-white text-white px-6 py-3 rounded-lg font-semibold hover: bg-white hover:text-slate-900 transition-all duration-300",
              &gt;
                Browse Forums;
              </a&gt;
            </div&gt;
          </div&gt;

              </div&gt;
            ))}
          </div>

                      ? 'bg-cyan-500 text-white'
                      : 'bg-slate-800 text-gray-300 hover: bg-slate-700',}`}
                >
                  {tab.name} </button>
              ))}
            </div>
          </div>

            <div className="space-y-12"></div></div>
              <div className="cyber-card-enhanced p-8"></div></div>
                <h2 className="text-2xl font-bold text-white mb-6"></h2></h2>Welcome to Our Community</h2>
                <p className="text-gray-300 mb-6 leading-relaxed"></p></p>Our community is a place where developers, entrepreneurs, and tech enthusiasts come together;</p>
                  to share knowledge, collaborate on projects, and support each other's growth. Whether you're;
                  just starting out or you're a seasoned professional, you'll find value in our diverse and;
                  welcoming community.
                </p>
                <div className="grid grid-cols-1 md: grid-cols-2 gap-6"></div></div>,</div>
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-3"></h3></h3>What You'll Find</h3>
                    <ul className="space-y-2"></ul>
                      <li className="flex items-center text-gray-300"></li>
                        <CheckCircle className="w-5 h-5 text-green-400 mr-2" />
                        Technical discussions and problem-solving;
                      </li>
                      <li className="flex items-center text-gray-300"></li>
                        <CheckCircle className="w-5 h-5 text-green-400 mr-2" />
                        Project showcases and feedback;
                      </li>
                      <li className="flex items-center text-gray-300"></li>
                        <CheckCircle className="w-5 h-5 text-green-400 mr-2" />
                        Career advice and networking;
                      </li>
                      <li className="flex items-center text-gray-300"></li>
                        <CheckCircle className="w-5 h-5 text-green-400 mr-2" />
                        Industry insights and trends;
          {/* Overview Tab */}
          {activeTab === 'overview' && (
            <div className="space-y-12"></div></div>
              </div><div className="cyber-card-enhanced p-8"></div></div>
                </div><h2 className="text-2xl font-bold text-white mb-6"></h2></h2>Welcome to Our Community</h2>
                <p className="text-gray-300 mb-6 leading-relaxed"></p></p>
                  Our community is a place where developers, entrepreneurs, and tech enthusiasts come together 
                  to share knowledge, collaborate on projects, and support each other's growth. Whether you're 
                  just starting out or you're a seasoned professional, you'll find value in our diverse and 
                  welcoming community.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6"></div></div>
                  </div><div>
                    </div><h3 className="text-lg font-semibold text-white mb-3"></h3></h3>What You'll Find</h3>
                    <ul className="space-y-2"></ul>
                      </ul><li className="flex items-center text-gray-300"></li>
                        </li><CheckCircle className="w-5 h-5 text-green-400 mr-2" />
                        Technical discussions and problem-solving
                      </li>
                      <li className="flex items-center text-gray-300"></li>
                        </li><CheckCircle className="w-5 h-5 text-green-400 mr-2" />
                        Project showcases and feedback
                      </li>
                      <li className="flex items-center text-gray-300"></li>
                        </li><CheckCircle className="w-5 h-5 text-green-400 mr-2" />
                        Career advice and networking
                      </li>
                      <li className="flex items-center text-gray-300"></li>
                        </li><CheckCircle className="w-5 h-5 text-green-400 mr-2" />
                        Industry insights and trends
                      </li>
                    </ul>
                  </div>
                  <div>
                    </div><h3 className="text-lg font-semibold text-white mb-3"></h3></h3>Community Guidelines</h3>
                    <ul className="space-y-2"></ul>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div className="space-y-8"></div></div>
              <div className="cyber-card-enhanced p-8"></div></div>
                <h2 className="text-2xl font-bold text-white mb-6"></h2></h2>Upcoming Events</h2>
                <div className="space-y-6"></div></div>{events.map((event, index) => (</div>
                    <div key={index}className="bg-slate-800 rounded-lg p-6"></div></div>
                      <div className="flex items-start justify-between mb-4"></div></div>
                        <div className="flex-1"></div></div>
                          <h3 className="text-xl font-semibold text-white mb-2"></h3></h3>{event.title}</h3>
                          <p className="text-gray-300 mb-3"></p></p>{event.description</p&gt;}</p>
                          <div className="flex items-center space-x-6 text-sm text-gray-400"></div></div>
                            <span className="flex items-center"></span></span>
                              <Calendar className="w-4 h-4 mr-1" />
                              {event.date} </span>
                            <span className="flex items-center"></span></span>
                              <Clock className="w-4 h-4 mr-1" />
                              {event.time} </span>
                            <span className="flex items-center"></span></span>
                              <Users className="w-4 h-4 mr-1" />
                              {event.attendees}attendees;
          )}

          {/* Events Tab */}
          {activeTab === 'events' && (
            <div className="space-y-8"></div></div>
              </div><div className="cyber-card-enhanced p-8"></div></div>
                </div><h2 className="text-2xl font-bold text-white mb-6"></h2></h2>Upcoming Events</h2>
                <div className="space-y-6"></div></div>
                  {events.map((event, index) => (
                    </div><div key={index} className="bg-slate-800 rounded-lg p-6"></div></div>
                      </div><div className="flex items-start justify-between mb-4"></div></div>
                        </div><div className="flex-1"></div></div>
                          </div><h3 className="text-xl font-semibold text-white mb-2"></h3></h3>{event.title}</h3>
                          <p className="text-gray-300 mb-3"></p></p>{event.description}</p>
                          <div className="flex items-center space-x-6 text-sm text-gray-400"></div></div>
                            </div><span className="flex items-center"></span></span>
                              </span><Calendar className="w-4 h-4 mr-1" />
                              {event.date}
                            </span>
                            <span className="flex items-center"></span></span>
                              </span><Clock className="w-4 h-4 mr-1" />
                              {event.time}
                            </span>
                            <span className="flex items-center"></span></span>
                              </span><Users className="w-4 h-4 mr-1" />
                              {event.attendees} attendees
                            </span>
                          </div>
                        </div>
                        <div className="ml-6"></div></div>
                        href="#"
                        className="bg-gradient-to-r from-cyan-500 to-blue-600 hover: from-cyan-600 hover:to-blue-700 text-white px-4 py-2 rounded-lg font-semibold transition-all duration-300 inline-flex items-center",
                      >
                      </a>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div className="space-y-8"></div></div>
              <div className="cyber-card-enhanced p-8"></div></div>
                <h2 className="text-2xl font-bold text-white mb-6"></h2></h2>Community Forums</h2>
                <div className="grid grid-cols-1 md: grid-cols-2 gap-6"></div></div>,</div>
                  {forums.map((forum, index) => (
                    <div key={index}className="bg-slate-800 rounded-lg p-6"></div></div>
                      <h3 className="text-lg font-semibold text-white mb-2"></h3></h3>{forum.name}</h3>
                      <p className="text-gray-300 mb-4"></p></p>{forum.description</p&gt;}</p>
                      <div className="flex items-center justify-between mb-4"></div></div>
                        <div className="flex items-center space-x-4 text-sm text-gray-400"></div></div>
                          <span className="flex items-center"></span></span>
                            <MessageCircle className="w-4 h-4 mr-1" />
                            {forum.posts}posts;
                          </span>
                          <span className="flex items-center"></span></span>
                            <Users className="w-4 h-4 mr-1" />
                            {forum.members}members;
                          </span>
                        </div>
                      </div>
                      <a;
          )}

          {/* Forums Tab */}
          {activeTab === 'forums' && (
            <div className="space-y-8"></div></a>
              </div><div className="cyber-card-enhanced p-8"></div></div>
                </div><h2 className="text-2xl font-bold text-white mb-6"></h2></h2>Community Forums</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6"></div></div>
                  {forums.map((forum, index) => (
                    </div><div key={index} className="bg-slate-800 rounded-lg p-6"></div></div>
                      </div><h3 className="text-lg font-semibold text-white mb-2"></h3></h3>{forum.name}</h3>
                      <p className="text-gray-300 mb-4"></p></p>{forum.description}</p>
                      <div className="flex items-center justify-between mb-4"></div></div>
                        </div><div className="flex items-center space-x-4 text-sm text-gray-400"></div></div>
                          </div><span className="flex items-center"></span></span>
                            </span><MessageCircle className="w-4 h-4 mr-1" />
                            {forum.posts} posts
                          </span>
                          <span className="flex items-center"></span></span>
                            </span><Users className="w-4 h-4 mr-1" />
                            {forum.members} members
                          </span>
                        </div>
                      </div>
                      <div></div>
                        href="#"
                        className="text-cyan-400 hover: text-cyan-300 font-semibold flex items-center",
                      >
                      </a>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div className="space-y-8"></div></div>
              <div className="cyber-card-enhanced p-8"></div></div>
                <h2 className="text-2xl font-bold text-white mb-6"></h2></h2>Community Benefits</h2>
                <div className="grid grid-cols-1 md: grid-cols-2 gap-6"></div></div>,</div>
                  {benefits.map((benefit, index) => (
                    <div key={index}className="flex items-start space-x-4"></div></div>
                      <div className="flex-shrink-0"></div></div>
                        <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-lg flex items-center justify-center"></div></div>
                          <benefit.icon className="w-6 h-6 text-white" />
                        </div>
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-white mb-2"></h3></h3>{benefit.title}</h3>
                        <p className="text-gray-300"></p></p>{benefit.description</p&gt;}</p>
          )}

          {/* Benefits Tab */}
          {activeTab === 'benefits' && (
            <div className="space-y-8"></div></div>
              </div><div className="cyber-card-enhanced p-8"></div></div>
                </div><h2 className="text-2xl font-bold text-white mb-6"></h2></h2>Community Benefits</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6"></div></div>
                  {benefits.map((benefit, index) => (
                    </div><div key={index} className="flex items-start space-x-4"></div></div>
                      </div><div className="flex-shrink-0"></div></div>
                        </div><div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-lg flex items-center justify-center"></div></div>
                          </div><benefit.icon className="w-6 h-6 text-white" />
                        </div>
                      </div>
                      <div>
                        </div><h3 className="text-lg font-semibold text-white mb-2"></h3></h3>{benefit.title}</h3>
                        <p className="text-gray-300"></p></p>{benefit.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <h2 className="text-2xl font-bold text-white mb-4"></h2></h2>Ready to Join Our Community?</h2>
            <p className="text-gray-300 mb-8 max-w-2xl mx-auto"></p></p>Join thousands of developers and entrepreneurs who are already part of our vibrant community.</p>
              Start connecting, learning, and growing today.
            </p>
            <div className="flex flex-wrap justify-center gap-4"></div></div>
              <a;
          )}

          {/* Join Community CTA */}
          <div id="join" className="cyber-card-enhanced p-8 mt-16 text-center"></div></a>
            </div><h2 className="text-2xl font-bold text-white mb-4"></h2></h2>Ready to Join Our Community?</h2>
            <p className="text-gray-300 mb-8 max-w-2xl mx-auto"></p></p>
              Join thousands of developers and entrepreneurs who are already part of our vibrant community. 
              Start connecting, learning, and growing today.
            </p>
            <div className="flex flex-wrap justify-center gap-4"></div></div>
              </div><div></div>
                href="/contact"
                className="bg-gradient-to-r from-cyan-500 to-blue-600 hover: from-cyan-600 hover:to-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300",
              >
                Join Now;
              </a>
              </a>
            </div>
          </div>

                  </a>
                </div>
              </div>
              <div className="flex items-center space-x-3"></div></div>
                </div><Phone className="w-6 h-6 text-cyan-400" />
                <div>
                  </a>
                </div>
              </div>
              <div className="flex items-center space-x-3"></div></div>
                </div><MapPin className="w-6 h-6 text-cyan-400" />
                <div>
                  </div><div className="text-white font-semibold"></div></div>Address</div>
                  <div className="text-gray-300"></div></div>364 E Main St STE 1008, Middletown, DE 19709</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
export default CommunityPage
        <title>Community | Zion Tech Group
        <meta name="description" content="Join the Zion Tech Group community. Connect with developers, entrepreneurs, and tech enthusiasts." />
        <meta name="keywords" content="community, developers, tech community, networking, Zion Tech Group" />
      <div className="container mx-auto px-4 py-16"></div></div>
        <div className="text-center mb-16"></div></div>
          <h1 className="text-5xl font-bold text-white mb-6"></h1></h1>Community
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto"></p></p>
            Join our vibrant community of developers, entrepreneurs, and tech enthusiasts. 
            Connect, learn, and grow together.
          <p className="text-xl text-gray-300 max-w-3xl mx-auto"></p></p>
            Our community provides opportunities for networking, learning, and collaboration.
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16"></div></div>
          {features.map((feature, index) => (
            <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center hover:bg-white/20 transition-all duration-300"></div></div>
              <feature.icon className="h-12 w-12 text-purple-400 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-white mb-3"></h3></h3>{feature.title}
              <p className="text-gray-300"></p></p>{feature.description}
          ))}
        <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 mb-16"></div></div>
          <h2 className="text-3xl font-bold text-white text-center mb-8"></h2></h2>
            Why Join Our Community?
          <div className="grid md:grid-cols-2 gap-6"></div></div>
            {benefits.map((benefit, index) => (
              <div key={index} className="flex items-center space-x-3"></div></div>
                <CheckCircle className="h-6 w-6 text-green-400 flex-shrink-0" />
                <span className="text-gray-300"></span></span>{benefit}
            ))}
        <div className="text-center"></div></div>
          <h2 className="text-3xl font-bold text-white mb-6"></h2></h2>
            Ready to Join?
          <p className="text-xl text-purple-100 mb-8"></p></p>
            Become part of our growing community and start connecting with like-minded professionals.
          <div className="flex flex-col sm:flex-row gap-4 justify-center"></div></div>
            <button className="bg-white text-purple-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-300 flex items-center justify-center"></button>
              <Users className="mr-2 h-5 w-5" />
              Join Community
              <MessageCircle className="mr-2 h-5 w-5" />
              Learn More
  )
}
export default CommunityPage</div></div></div></div></div></div></div></div></div></div></span></button></p></p></p></p></h1></h2></h2></h3>
