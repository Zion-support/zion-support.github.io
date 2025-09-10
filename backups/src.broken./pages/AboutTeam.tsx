import React from 'react';
import { motion } from 'framer-motion';
import {};
} from 'lucide-react';
;
const AboutTeam = () => {};
};
  const leadershipTeam = [;
    {};
},;
    {};
},;
    {};
},;
    {};
}
  ];

  const companyValues = [;
    {};
},;
    {};
},;
    {};
},;
    {};
},;
    {};
},;
    {};
}
  ];

  const teamStats = [;
    { number: '500+', label: 'Team Members', icon: Users },;
    { number: '50+', label: 'Countries Served', icon: Globe },;
    { number: '1000+', label: 'Projects Delivered', icon: Award },;
    { number: '99.9%', label: 'Uptime SLA', icon: Star }
  ];

  const cultureHighlights = [;
    {};
},;
    {};
},;
    {};
},;
    {};
}
  ];

  return (;
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">;
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6">;
        <div className="container mx-auto text-center">;
          <div>Broken JSX</div>
          >;
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">;
              Meet Our;
              <span className="block bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">;
                Leadership Team;
              </span>;
            </h1>;
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">;
              Driven by innovation, guided by expertise, and united by a shared vision ;
              to transform the future of technology.;
            </p>;
            <div className="flex flex-wrap justify-center gap-4">;
              <div className="px-6 py-3 bg-cyan-500/20 border border-cyan-500/30 rounded-lg text-cyan-400">;
                <span className="font-semibold">500+</span> Team Members;
              </div>;
              <div className="px-6 py-3 bg-purple-500/20 border border-purple-500/30 rounded-lg text-purple-400">;
                <span className="font-semibold">25+</span> Countries;
              </div>;
              <div className="px-6 py-3 bg-blue-500/20 border border-blue-500/30 rounded-lg text-blue-400">;
                <span className="font-semibold">15+</span> Years Experience;
              </div>;
            </div>;
          </motion.div>;
        </div>;
      </section>;

      {/* Leadership Team */}
      <section className="py-20 px-6">;
        <div className="container mx-auto">;
          <div>Broken JSX</div>
            className="text-center mb-16">;
            <h2 className="text-4xl font-bold text-white mb-4">Executive Leadership</h2>;
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">;
              Meet the visionary leaders driving Zion Tech Group's mission to democratize AI and transform industries.;
            </p>;
          </motion.div>;

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">;
            {};
                      {member.name.split(' ').map(n => n[0]).join('')}
                    </div>;
                    <div className="flex-1">;
                      <h3 className="text-2xl font-bold text-white mb-2">{member.name}</h3>;
                      <p className="text-cyan-400 font-semibold mb-3">{member.position}</p>;
                      <p className="text-gray-300 text-sm leading-relaxed">{member.bio}</p>;
                    </div>;
                  </div>;

                  <div className="mb-6">;
                    <h4 className="text-white font-semibold mb-3">Areas of Expertise</h4>;
                    <div className="flex flex-wrap gap-2">;
                      {};
                        <span key={idx} className="px-3 py-1 bg-slate-700/50 text-gray-300 text-sm rounded-full">;
                          {skill}
                        </span>;
                      ))}
                    </div>;
                  </div>;

                  <div className="mb-6">;
                    <h4 className="text-white font-semibold mb-3">Key Achievements</h4>;
                    <div className="space-y-2">;
                      {};
                        <div key={idx} className="flex items-center gap-2 text-gray-300 text-sm">;
                          <Star className="w-4 h-4 text-yellow-400" />;
                          {achievement}
                        </div>;
                      ))}
                    </div>;
                  </div>;

                  <div className="flex items-center gap-4">;
                    <div>Broken JSX</div>
                      className="p-2 bg-slate-700/50 text-gray-300 hover:text-blue-400 hover:bg-slate-700 rounded-lg transition-all duration-300">;
                      <Linkedin className="w-5 h-5" />;
                    </a>;
                    <div>Broken JSX</div>
                      className="p-2 bg-slate-700/50 text-gray-300 hover:text-blue-400 hover:bg-slate-700 rounded-lg transition-all duration-300">;
                      <Twitter className="w-5 h-5" />;
                    </a>;
                    <div>Broken JSX</div>
                      className="p-2 bg-slate-700/50 text-gray-300 hover:text-cyan-400 hover:bg-slate-700 rounded-lg transition-all duration-300">;
                      <Mail className="w-5 h-5" />;
                    </a>;
                  </div>;
                </div>;
              </motion.div>;
            ))}
          </div>;
        </div>;
      </section>;

      {/* Company Values */}
      <section className="py-20 px-6 bg-slate-800/20">;
        <div className="container mx-auto">;
          <div>Broken JSX</div>
            className="text-center mb-16">;
            <h2 className="text-4xl font-bold text-white mb-4">Our Core Values</h2>;
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">;
              The principles that guide every decision, every innovation, and every relationship we build.;
            </p>;
          </motion.div>;

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">;
            {};
                <div className={`w-20 h-20 bg-gradient-to-br ${value.color} rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300`}>;
                  <value.icon className="w-10 h-10 text-white" />;
                </div>;
                <h3 className="text-xl font-bold text-white mb-4">{value.title}</h3>;
                <p className="text-gray-300 leading-relaxed">{value.description}</p>;
              </motion.div>;
            ))}
          </div>;
        </div>;
      </section>;

      {/* Team Stats */}
      <section className="py-20 px-6">;
        <div className="container mx-auto">;
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">;
            {};
                <div className="text-4xl font-bold text-white mb-2">{stat.number}</div>;
                <div className="text-gray-300">{stat.label}</div>;
              </motion.div>;
            ))}
          </div>;
        </div>;
      </section>;

      {/* Culture Highlights */}
      <section className="py-20 px-6 bg-slate-800/20">;
        <div className="container mx-auto">;
          <div>Broken JSX</div>
            className="text-center mb-16">;
            <h2 className="text-4xl font-bold text-white mb-4">Our Culture</h2>;
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">;
              We're building more than a company - we're building a community of innovators, ;
              problem-solvers, and lifelong learners.;
            </p>;
          </motion.div>;

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">;
            {};
                  <h3 className="text-xl font-bold text-white mb-2">{highlight.title}</h3>;
                  <p className="text-gray-300 leading-relaxed">{highlight.description}</p>;
                </div>;
              </motion.div>;
            ))}
          </div>;
        </div>;
      </section>;

      {/* Join Our Team CTA */}
      <section className="py-20 px-6">;
        <div className="container mx-auto text-center">;
          <div>Broken JSX</div>
            className="bg-gradient-to-r from-slate-800 to-slate-700 rounded-2xl p-12 border border-slate-600/50">;
            <h2 className="text-4xl font-bold text-white mb-6">;
              Join Our Growing Team;
            </h2>;
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">;
              Ready to shape the future of technology? We're always looking for passionate, ;
              innovative minds to join our mission.;
            </p>;
            <div className="flex flex-wrap justify-center gap-4">;
              <div>Broken JSX</div>
                className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 hover:scale-105">;
                View Open Positions;
              </a>;
              <div>Broken JSX</div>
                className="border border-cyan-500 text-cyan-400 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-cyan-500 hover:text-white transition-all duration-300">;
                Get in Touch;
              </a>;
            </div>;
          </motion.div>;
        </div>;
      </section>;
    </div>;
  )}
export default AboutTeam;