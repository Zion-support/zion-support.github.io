import React from 'react';''
import { motion } from 'framer-motion';''
import { MessageCircle, Calendar, Users, Award } from 'lucide-react';''
import Layout from '../components/Layout';'
export default function CommunityPage() {
  const communityFeatures = [
    {'
      title: "Developer Forums",""
      description: "Connect with developers and share knowledge","
      icon: MessageCircle,]"
      features: ["Technical Discussions", "Code Sharing", "Problem Solving"]"
    },
    {"
      title: "Events & Webinars",""
      description: "Join our regular events and learning sessions","
      icon: Calendar,"
      features: ["Monthly Webinars", "Tech Talks", "Workshops"]"
    },
    {"
      title: "User Groups",""
      description: "Connect with like-minded professionals","
      icon: Users,"
      features: ["Local Meetups", "Online Groups", "Networking"]"
    },
    {"
      title: "Recognition Program",""
      description: "Get recognized for your contributions","
      icon: Award,"
      features: ["Community Badges", "Contributor Recognition", "Special Access"]"
  ];

  return (
    <Layout;"
      title="Community - Zion Tech Group"""
      description="Join our vibrant community of developers, innovators, and technology enthusiasts."""
      keywords="community, developers, forums, events, webinars, networking""
    >
</Layout>"
      <div className="min-h-screen bg-gray-50">"
</div>"
        <section className="relative bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900 text-white py-20 overflow-hidden">"
</section>"
          <div className="absolute inset-0">"
</div>"
            <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>""
            <div className="absolute top-40 right-10 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse animation-delay-2000"></div>""
            <div className="absolute -bottom-8 left-20 w-72 h-72 bg-indigo-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse animation-delay-4000"></div>"
          </div>
          "
          <div className="container mx-auto px-4 relative z-10">"
</div>
            <motion.div;
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}"
              className="text-center""
            >
</motion>"
              <h1 className="text-4xl md:text-6xl font-bold mb-6">"
</h1>"
                Join Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">Community</span>"
              </h1>"
              <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto">"
</p>
              </p>
            </motion.div>
          </div>
        </section>"
        <section className="py-16">"
</section>"
          <div className="container mx-auto px-4">"
</div>
            <motion.div;
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}"
              className="text-center mb-12""
            >
</motion>"
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">"
</h2>
              </h2>"
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">"
</p>
              </p>
            </motion.div>
"
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">"
</div>
                <motion.div;
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}"
                  className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 p-6 text-center""
                >
</motion>"
                  <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">"
</div>"
                    <feature.icon className="w-8 h-8 text-blue-600" />"
</feature>
                  </div>"
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{feature.title}</h3>""
                  <p className="text-gray-600 mb-4">{feature.description}</p>""
                  <ul className="space-y-2">"
</ul>"
                      <li key={idx} className="text-sm text-gray-500 flex items-center">"
</li>"
                        <div className="w-2 h-2 bg-blue-500 rounded-full mr-2"></div>"
                      </li>
                  </ul>
                </motion.div>)
              ))}
            </div>
          </div>
        </section>"
        <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600 text-white">"
</section>"
          <div className="container mx-auto px-4 text-center">"
</div>
            <motion.div;
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
</motion>"
              <h2 className="text-3xl md:text-4xl font-bold mb-6">"
</h2>
              </h2>"
              <p className="text-xl mb-8 max-w-2xl mx-auto">"
</p>
              </p>"
              <div className="flex flex-col sm:flex-row gap-4 justify-center">"
</div>"
                <button className="px-8 py-4 bg-white text-blue-600 rounded-lg hover:bg-gray-100 transition-all duration-300 font-semibold">"
</button>
                </button>"
                <button className="px-8 py-4 border-2 border-white text-white rounded-lg hover:bg-white hover:text-blue-600 transition-all duration-300 font-semibold">"
</button>
                </button>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </Layout>"