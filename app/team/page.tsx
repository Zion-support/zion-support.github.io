'use client';
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Users, Award, Globe, Linkedin, Mail } from 'lucide-react';

const TeamPage: React.FC = () => {
  const teamMembers = [
  ];

const stats = [
    { number: "50+", label: "Team Members", icon: <Users className="w-6 h-6" /> },
    { number: "15+", label: "Years Experience", icon: <Award className="w-6 h-6" /> },
    { number: "25+", label: "Certifications", icon: <Globe className="w-6 h-6" /> },
    { number: "100%", label: "Remote Team", icon: <Globe className="w-6 h-6" /> }
  ];
  return (
    <>
      <Helmet>
        <title>Team - Zion Tech Group</title>
        <meta name="description" content="Zion Tech Group - Team page" />
      </Helmet>
      
        <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <section className="py-20">
          
        <div className="container mx-auto px-4">
            
        <div className="text-center max-w-4xl mx-auto">
              
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
                Meet Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">Team</span>
              </h1>
              
          <p className="text-xl md:text-2xl text-gray-300 mb-8 leading-relaxed">
                The talented individuals behind our success. Our diverse team of experts is dedicated to delivering innovative solutions that transform businesses.
              </p>
            </div>
          </div>
        </section>
        <section className="py-16 bg-white/5 backdrop-blur-sm">
          
        <div className="container mx-auto px-4">
            
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  
        <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    
        <div className="text-white">{stat.icon}</div>
                  </div>
                  
        <div className="text-3xl font-bold text-cyan-400 mb-2">{stat.number}</div>
                  
        <div className="text-gray-300">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>
        <section className="py-20">
          
        <div className="container mx-auto px-4">
            
        <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-6">Our Leadership Team</h2>
              
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Meet the leaders who drive innovation and excellence at Zion Tech Group
              </p>
            </div>
            
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {teamMembers.map((member, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20 hover:bg-white/20 transition-all duration-300 group">
                  
        <div className="text-center mb-6">
                    
        <div className="w-32 h-32 bg-gradient-to-r from-cyan-400 to-purple-400 rounded-full mx-auto mb-4 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <span className="text-4xl font-bold text-white">
                        {member.name.split(' ').map(n => n[0]).join('')}
                      </span>
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-2">{member.name}</h3>
                    
        <div className="text-cyan-400 font-semibold mb-4">{member.role}</div>
                    
          <p className="text-gray-300 text-sm leading-relaxed mb-4">{member.bio}</p>
                  </div>
                  
        <div className="mb-6">
                    <h4 className="text-sm font-semibold text-cyan-400 mb-3">Expertise:</h4>
                    
        <div className="flex flex-wrap gap-2">
                      {member.expertise.map((skill, skillIndex) => (
                        <span key={skillIndex} className="px-3 py-1 bg-cyan-500/20 text-cyan-300 text-xs rounded-full">
                        </span>
                      ))}
                    </div>
                  </div>
                  
        <div className="mb-6">
                    <h4 className="text-sm font-semibold text-cyan-400 mb-3">Achievements:</h4>
                    
        <div className="space-y-1">
                      {member.achievements.map((achievement, achievementIndex) => (
                        <div key={achievementIndex} className="text-gray-300 text-sm flex items-center">
                          <Award className="w-4 h-4 text-yellow-400 mr-2 flex-shrink-0" />
                        </div>
                      ))}
                    </div>
                  </div>
                  
        <div className="flex space-x-4 justify-center">
                    <a
                      href={member.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 bg-blue-600 hover:bg-blue-700 rounded-full flex items-center justify-center transition-colors"
                    >
                      <Linkedin className="w-5 h-5 text-white" />
                    </a>
                    <a
                      href={`mailto:${member.email}`}
                      className="w-10 h-10 bg-cyan-600 hover:bg-cyan-700 rounded-full flex items-center justify-center transition-colors"
                    >
                      <Mail className="w-5 h-5 text-white" />
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
        <section className="py-20 bg-gradient-to-r from-cyan-600/20 to-purple-600/20">
          
        <div className="container mx-auto px-4">
            
        <div className="text-center max-w-4xl mx-auto">
              <h2 className="text-4xl font-bold text-white mb-6">Join Our Team</h2>
              
          <p className="text-xl text-gray-300 mb-8">
                We're always looking for talented individuals who share our passion for innovation and excellence.
              </p>
              
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="/careers"
                  className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105"
                >
                  View Open Positions
                </a>
                <a
                  href="/contact"
                  className="border-2 border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300"
                >
                  Contact Us
                </a>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};
export default TeamPage;