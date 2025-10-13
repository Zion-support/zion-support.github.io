import React from 'react';
import { Helmet } from 'react-helmet-async';

export default function PagePage() {
  return (
    <div className="min-h-screen bg-gray-50" content="Advanced Page solutions by Zion Tech Group"min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100"description"Advanced community solutions by Zion Tech Group" />
      </Helmet>
      <div className="text-center">
          <h1 className="text-xl text-gray-600 mb-8">
            Advanced AI and IT solutions for your business needs.
          </p>
        </div>

        <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-gray-600">
              Comprehensive solution for your business requirements.
            </p>
          </div>

          <div className="text-xl font-semibold text-gray-900 mb-4">Feature 2</h3>
            <p className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-gray-600">
              Scalable and secure implementation.
            </p>
          </div>
        </div>

        <div className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors">
            Get Started
          </button>
      <div className="text-center">
          <h1 className="text-xl text-gray-600 mb-8">
            Advanced community solutions by Zion Tech Group.
          </p>
        </div>
      </div>
    </div>
  );
              </div>
            ))}
          </div>

          {/* Tabs */} <div className="
<div className="flex flex-wrap justify-center gap-4"space-y-12"
<div className="
<h2 className="text-2 xl font-bold text-white mb-6"text-gray-300 mb-6 leading-relaxed"
                  to share knowledge, collaborate on projects, and support each other's growth. Whether you're;'
                  just starting out or you're a seasoned professional, you'll find value in our diverse and;'
                  welcoming community.
                </p>
<div className="
<div>
<h3 className="text-lg font-semibold text-white mb-3"space-y-2"
<li className="
<CheckCircle className="w-5 h-5 text-green-400 mr-2"flex items-center text-gray-300"
<CheckCircle className="
                        Project showcases and feedback;
                      </li>
<li className="flex items-center text-gray-300"w-5 h-5 text-green-400 mr-2"
                        Career advice and networking;
                      </li>
<li className="
<CheckCircle className="w-5 h-5 text-green-400 mr-2"text-lg font-semibold text-white mb-3"
<ul className="
<li className="flex items-center text-gray-300"w-5 h-5 text-green-400 mr-2"
                        Be respectful and inclusive;
                      </li>
<li className="
<CheckCircle className="w-5 h-5 text-green-400 mr-2"flex items-center text-gray-300"
<CheckCircle className="
                        Help others learn and grow;
                      </li>
<li className="flex items-center text-gray-300"w-5 h-5 text-green-400 mr-2"
                        Keep discussions relevant and constructive;
                      </li></ul>
</div></div>
</div></div>
          )}

          {/* Events Tab */}{activeTab === 'events' && ('
            <div className="
<div className="cyber-card-enhanced p-8"text-2 xl font-bold text-white mb-6"
<div className="
<div key={index}className="bg-slate-800 rounded-lg p-6"flex items-start justify-between mb-4"
<div className="
<h3 className="text-xl font-semibold text-white mb-2"text-gray-300 mb-3"
<div className="
<span className="flex items-center"w-4 h-4 mr-1"
                              {event.date} </span>
<span className="
<Clock className="w-4 h-4 mr-1"flex items-center"
<Users className="
                              {event.attendees}attendees;
                            </span></div>
</div>
<div className="ml-6"px-3 py-1 bg-cyan-600 text-white text-xs font-semibold rounded"
</div>
<a;
                        href=""
                        className="
                      >
                        Register Now;
                        <ArrowRight className="w-4 h-4 ml-2"space-y-8"
<div className="
<h2 className="text-2 xl font-bold text-white mb-6"grid grid-cols-1 md: grid-cols-2 gap-6"
                  {forums.map((forum, index) => (
  // TODO: Add parameters
)
                    <div key={index}className="
<h3 className="text-lg font-semibold text-white mb-2"text-gray-300 mb-4"
<div className="
<div className="flex items-center space-x-4 text-sm text-gray-400"flex items-center"
<MessageCircle className="
                            {forum.posts}posts;
                          </span>
<span className="flex items-center"w-4 h-4 mr-1"
                            {forum.members}members;
                          </span></div>
</div>
<a;
                        href=""
                        className="
                      >
                        Visit Forum;
                        <ArrowRight className="w-4 h-4 ml-1"space-y-8"
<div className="
<h2 className="text-2 xl font-bold text-white mb-6"grid grid-cols-1 md: grid-cols-2 gap-6"
                  {benefits.map((benefit, index) => (
  // TODO: Add parameters
)
                    <div key={index}className="
<div className="flex-shrink-0"w-12 h-12 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-lg flex items-center justify-center"
<benefit.icon className="
</div>
<div>
<h3 className="text-lg font-semibold text-white mb-2"text-gray-300"
</div>
                  ))}
                </div></div>
</div>
          )}

          {/* Join Community CTA */} <div id=" className="cyber-card-enhanced p-8 mt-16 text-center"text-2 xl font-bold text-white mb-4"
<p className="
              Start connecting, learning, and growing today.
            </p>
<div className="flex flex-wrap justify-center gap-4"/contact""bg-gradient-to-r from-cyan-500 to-blue-600 hover: from-cyan-600 hover:to-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300"
              >
                Join Now;
              </a>
<a;
                href=""
                className="
              >
                Learn More;
              </a></div>
</div>

          {/* Contact Information */} <div className="cyber-card-enhanced p-8 mt-8"text-2 xl font-bold text-white mb-6 text-center"
<div className="
<div className="flex items-center space-x-3"w-6 h-6 text-cyan-400"
<div>
<div className="
<a href="mailto: community@ziontechgroup.com"text-cyan-400 hover:text-cyan-300"
                    community@ziontechgroup.com;
                  </a></div>
</div>
<div className="
<Phone className="w-6 h-6 text-cyan-400"text-white font-semibold"
<a href=" className="text-cyan-400 hover:text-cyan-300"flex items-center space-x-3"
<MapPin className="
<div></div>
<div className="text-white font-semibold"text-gray-300"
</div></div>
</div></div>
</div></>
  )
}
export default CommunityPage;
        <title>Community | Zion Tech Group
        <meta name=" content="Join the Zion Tech Group community. Connect with developers, entrepreneurs, and tech enthusiasts."
<meta name="keywords"community, developers, tech community, networking, Zion Tech Group" />"container mx-auto px-4 py-16"
<div className="
<h1 className="text-5 xl font-bold text-white mb-6"text-xl text-gray-300 mb-8 max-w-3 xl mx-auto"
            Join our vibrant community of developers, entrepreneurs, and tech enthusiasts.
            Connect, learn, and grow together.
          <p className="
            Our community provides opportunities for networking, learning, and collaboration.
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16"bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center hover:bg-white/20 transition-all duration-300"
<feature.icon className="
<h3 className="text-xl font-semibold text-white mb-3"text-gray-300"
          ))}
        <div className="
<h2 className="text-3 xl font-bold text-white text-center mb-8"grid md:grid-cols-2 gap-6"
            {benefits.map((benefit, index) => (
  // TODO: Add parameters
)
              <div key={index} className="
<CheckCircle className="h-6 w-6 text-green-400 flex-shrink-0"text-gray-300"
            ))}
        <div className="
<h2 className="text-3 xl font-bold text-white mb-6"text-xl text-purple-100 mb-8"
            Become part of our growing community and start connecting with like-minded professionals.
          <div className="
<button className="bg-white text-purple-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-300 flex items-center justify-center"mr-2 h-5 w-5"
              Join Community
              <MessageCircle className="
              Learn More
  )
}
export default CommunityPage</div></div>;
</div></div>
</div></div>
</div></div>
</div></div>
</span></button>
</p></p>
</p></p>
</h1></h2>
</h2></h3>

