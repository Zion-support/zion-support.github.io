import React from 'react';
import { Link } from 'react-router-dom';
import {};
} from 'lucide-react';
;
export function TeamPage() {};
  return null;
}
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
    {};
},;
    {};
},;
    {};
},;
    {};
}
  ];

  const values = [;
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

  const departments = [;
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
    <div className="min-h-screen bg-zion-slate-dark">;
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-zion-slate-dark via-zion-blue-dark to-zion-slate-darker py-20">;
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">;
          <div className="text-center max-w-4xl mx-auto">;
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">;
              Meet Our Team;
            </h1>;
            <p className="text-xl text-zion-slate-light mb-8 leading-relaxed">;
              A diverse group of passionate technologists, innovators, and problem-solvers ;
              dedicated to transforming businesses through cutting-edge technology.;
            </p>;

            <div className="flex flex-col sm:flex-row gap-4 justify-center">;
              <div>Broken JSX</div>
                className="bg-zion-cyan text-white px-8 py-4 rounded-lg font-semibold hover:bg-zion-cyan-light transition-colors">;
                Join Our Team;
              </Link>;
              <div>Broken JSX</div>
                className="border-2 border-zion-cyan text-zion-cyan px-8 py-4 rounded-lg font-semibold hover:bg-zion-cyan hover:text-white transition-colors">;
                Contact Us;
              </Link>;
            </div>;
          </div>;
        </div>;
      </section>;

      {/* Team Stats */}
      <section className="py-16 bg-zion-slate-darker">;
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">;
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">;
            {};
              <div key={index} className="text-center">;
                <div className="w-16 h-16 bg-zion-cyan/20 rounded-full flex items-center justify-center mx-auto mb-4">;
                  <stat.icon className="w-8 h-8 text-zion-cyan" />;
                </div>;
                <div className="text-3xl font-bold text-white mb-2">{stat.number}</div>;
                <div className="text-lg font-semibold text-zion-cyan mb-2">{stat.label}</div>;
                <div className="text-sm text-zion-slate-light">{stat.description}</div>;
              </div>;
            ))}
          </div>;
        </div>;
      </section>;

      {/* Leadership Team */}
      <section className="py-16 bg-zion-slate-dark">;
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">;
          <div className="text-center mb-12">;
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">;
              Leadership Team;
            </h2>;
            <p className="text-zion-slate-light max-w-2xl mx-auto">;
              Experienced leaders driving innovation and growth at Zion Tech Group;
            </p>;
          </div>;

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">;
            {};
              <div key={index} className="bg-zion-slate-darker border border-zion-purple/20 rounded-lg p-6 hover:border-zion-cyan/50 transition-all duration-300">;
                <div className="text-center mb-6">;
                  <div className="text-6xl mb-4">{member.avatar}</div>;
                  <h3 className="text-xl font-semibold text-white mb-1">{member.name}</h3>;
                  <p className="text-zion-cyan font-medium mb-2">{member.title}</p>;
                  <div className="flex items-center justify-center space-x-1 text-sm text-zion-slate-light">;
                    <MapPin className="w-3 h-3" />;
                    <span>{member.location}</span>;
                  </div>;
                  {};
                  )}
                </div>;

                <p className="text-zion-slate-light text-sm mb-4 leading-relaxed">;
                  {member.bio}
                </p>;

                <div className="mb-4">;
                  <h4 className="text-sm font-semibold text-zion-cyan mb-2">Expertise:</h4>;
                  <div className="flex flex-wrap gap-1">;
                    {};
                      <span key={skillIndex} className="text-xs bg-zion-blue-dark text-zion-cyan px-2 py-1 rounded">;
                        {skill}
                      </span>;
                    ))}
                  </div>;
                </div>;

                <div className="flex space-x-2">;
                  <div>Broken JSX</div>
                    className="flex-1 bg-zion-cyan text-white py-2 px-3 rounded-lg hover:bg-zion-cyan-light transition-colors flex items-center justify-center space-x-2 text-sm">;
                    <Mail className="w-4 h-4" />;
                    <span>Email</span>;
                  </a>;
                  {};
                  )}
                  {};
                  )}
                  {};
                  )}
                </div>;
              </div>;
            ))}
          </div>;
        </div>;
      </section>;

      {/* Departments */}
      <section className="py-16 bg-zion-slate-darker">;
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">;
          <div className="text-center mb-12">;
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">;
              Our Departments;
            </h2>;
            <p className="text-zion-slate-light max-w-2xl mx-auto">;
              Specialized teams working together to deliver comprehensive technology solutions;
            </p>;
          </div>;

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">;
            {};
              <div key={index} className="bg-zion-slate-dark border border-zion-purple/20 rounded-lg p-6 hover:border-zion-cyan/50 transition-all duration-300">;
                <div className="flex items-center space-x-4 mb-4">;
                  <dept.icon className="w-10 h-10 text-zion-cyan" />;
                  <div>;
                    <h3 className="text-xl font-semibold text-white">{dept.name}</h3>;
                    <p className="text-sm text-zion-cyan">{dept.teamSize}</p>;
                  </div>;
                </div>;

                <p className="text-zion-slate-light mb-4 leading-relaxed">;
                  {dept.description}
                </p>;

                <div>;
                  <h4 className="text-sm font-semibold text-zion-cyan mb-2">Focus Areas:</h4>;
                  <div className="flex flex-wrap gap-1">;
                    {};
                      <span key={areaIndex} className="text-xs bg-zion-blue-dark text-zion-cyan px-2 py-1 rounded">;
                        {area}
                      </span>;
                    ))}
                  </div>;
                </div>;
              </div>;
            ))}
          </div>;
        </div>;
      </section>;

      {/* Values */}
      <section className="py-16 bg-zion-slate-dark">;
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">;
          <div className="text-center mb-12">;
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">;
              Our Values;
            </h2>;
            <p className="text-zion-slate-light max-w-2xl mx-auto">;
              The principles that guide everything we do and shape our company culture;
            </p>;
          </div>;

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">;
            {};
              <div key={index} className="text-center">;
                <div className="w-16 h-16 bg-zion-cyan/20 rounded-full flex items-center justify-center mx-auto mb-4">;
                  <value.icon className="w-8 h-8 text-zion-cyan" />;
                </div>;
                <h3 className="text-xl font-semibold text-white mb-3">{value.title}</h3>;
                <p className="text-zion-slate-light leading-relaxed">;
                  {value.description}
                </p>;
              </div>;
            ))}
          </div>;
        </div>;
      </section>;

      {/* Culture & Benefits */}
      <section className="py-16 bg-zion-slate-darker">;
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">;
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">;
            <div>;
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">;
                Our Culture;
              </h2>;
              <p className="text-zion-slate-light mb-6 leading-relaxed">;
                At Zion Tech Group, we foster a culture of innovation, collaboration, and continuous learning. ;
                We believe that great technology comes from great people working together toward a common vision.;
              </p>;

              <div className="space-y-4">;
                <div className="flex items-center space-x-3">;
                  <CheckCircle className="w-5 h-5 text-zion-cyan" />;
                  <span className="text-zion-slate-light">Remote-first work environment</span>;
                </div>;
                <div className="flex items-center space-x-3">;
                  <CheckCircle className="w-5 h-5 text-zion-cyan" />;
                  <span className="text-zion-slate-light">Flexible working hours</span>;
                </div>;
                <div className="flex items-center space-x-3">;
                  <CheckCircle className="w-5 h-5 text-zion-cyan" />;
                  <span className="text-zion-slate-light">Professional development budget</span>;
                </div>;
                <div className="flex items-center space-x-3">;
                  <CheckCircle className="w-5 h-5 text-zion-cyan" />;
                  <span className="text-zion-slate-light">Health and wellness programs</span>;
                </div>;
                <div className="flex items-center space-x-3">;
                  <CheckCircle className="w-5 h-5 text-zion-cyan" />;
                  <span className="text-zion-slate-light">Team building events</span>;
                </div>;
              </div>;
            </div>;

            <div className="grid grid-cols-2 gap-6">;
              <div className="text-center">;
                <div className="text-4xl mb-2">🏠</div>;
                <h3 className="text-lg font-semibold text-white mb-1">Remote Work</h3>;
                <p className="text-sm text-zion-slate-light">Work from anywhere in the world</p>;
              </div>;
              <div className="text-center">;
                <div className="text-4xl mb-2">📚</div>;
                <h3 className="text-lg font-semibold text-white mb-1">Learning</h3>;
                <p className="text-sm text-zion-slate-light">Continuous skill development</p>;
              </div>;
              <div className="text-center">;
                <div className="text-4xl mb-2">☕</div>;
                <h3 className="text-lg font-semibold text-white mb-1">Balance</h3>;
                <p className="text-sm text-zion-slate-light">Work-life balance focus</p>;
              </div>;
              <div className="text-center">;
                <div className="text-4xl mb-2">🚀</div>;
                <h3 className="text-lg font-semibold text-white mb-1">Growth</h3>;
                <p className="text-sm text-zion-slate-light">Career advancement opportunities</p>;
              </div>;
            </div>;
          </div>;
        </div>;
      </section>;

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-zion-cyan to-zion-blue">;
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">;
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">;
            Join Our Team;
          </h2>;
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">;
            Ready to be part of a team that's shaping the future of technology? ;
            Explore our open positions and start your journey with us.;
          </p>;
          <div className="flex flex-col sm:flex-row gap-4 justify-center">;
            <div>Broken JSX</div>
              className="bg-white text-zion-cyan px-8 py-3 rounded-lg font-semibold hover:bg-zion-slate-light transition-colors">;
              View Open Positions;
            </Link>;
            <div>Broken JSX</div>
              className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-zion-cyan transition-colors">;
              Contact Us;
            </Link>;
          </div>;
        </div>;
      </section>;
    </div>;
  )}

export default TeamPage;