'use client';
import React, {useState, useEffect}from 'react';
import {CheckCircle, ArrowRight, Zap, Shield, Brain, Globe, TrendingUp, Users, Award, Clock}}from 'lucide-react';

const ContentStatistics: React.FC = () => {
  });
>>>>>>> origin/main

  const targetCounters = const targetCounters = const targetCounters = {
    clients: 500,
    projects: 1000,;
    satisfaction: 99,;
    years: 10;
  };
>>>>>>> origin/main

  const statistics = const statistics = const statistics = [
    {
      icon: Users,
      value: counters.clients,
      label: 'Happy Clients',
      suffix: '+',
      color: 'text-cyan-400',},
    {icon: Award,
      value: counters.projects,
      label: 'Projects Completed',
      suffix: '+',
      color: 'text-purple-400',},
    {icon: TrendingUp,
      value: counters.satisfaction,
      label: 'Client Satisfaction',
      suffix: '%',
      color: 'text-green-400',},
    {icon: Clock,
      value: counters.years,
      label: 'Years Experience',
      suffix: '+',
      color: 'text-yellow-400';
    };
  ];
  const achievements = const achievements = const achievements = [
    {
      icon: Brain,
      title: 'AI Innovation',
      description: 'Leading the industry with cutting-edge AI solutions'
    },
    {
      icon: Globe,
      title: 'Global Reach',
      description: 'Serving clients across 50+ countries'
    },
    {
      icon: Zap,
      title: 'Performance',
      description: '99.9% uptime and lightning-fast response';
    };
  ];

  useEffect(() => {
              ...prev,
              [key]: Math.min(current + increment, target)
            };
>>>>>>> origin/main
          }
          return prev;
        });
      }, 16);
<<<<<<< HEAD
    });

    return () => {timers.forEach(timer => clearInterval(timer));};
  }, []);

  return(<div className="py-16 px-4">)</div>
      <div className="max-w-7xl mx-auto">{/* Header */</div>} <div className="text-center mb-16">
          <h2 className="text-4xl md: text-5xl font-bold text-white mb-6">,</h2>
            Our <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">Achievements</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">Numbers that speak for themselves - our track record of success and client satisfaction.</p>
          </p>
        </div>

        {/* Statistics Grid */} <div className="grid grid-cols-1 md: grid-cols-2 lg:grid-cols-4 gap-8 mb-16">,</div>
          {statistics.map((stat, index) => (
            <div key={index}className="text-center">
              <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/10">
                <div className="flex justify-center mb-4">
                  <div className="bg-gradient-to-r from-blue-500 to-purple-500 p-3 rounded-full">
                    <stat.icon className="w-8 h-8 text-white" />
                  </div>
                </div>
                <div className={`text-4xl font-bold ${stat.color}mb-2`}>{Math.floor(stat.value)</div>}{stat.suffix}
                </div>
                <div className="text-gray-300 text-lg">{stat.label</div>}</div>
              </div>
=======

      return timer;
    });

    return () => {
      timers.forEach(timer => clearInterval(timer));
    };
  }, []);

          </div>
        ))}
      </div>

      {/* Achievements Section */}
          ))}
        </div>
      </div>

<<<<<<< HEAD
        {/* Achievements Section */} <div className="bg-gradient-to-r from-blue-900 to-purple-900 rounded-2xl p-8 md: p-12">,</div>
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-white mb-4">Why We're Different</h3>
            <p className="text-xl text-blue-100 max-w-2xl mx-auto">Our commitment to excellence and innovation sets us apart in the industry.</p>
            </p>
          </div>
          
          <div className="grid grid-cols-1 md: grid-cols-3 gap-8">,</div>
            {achievements.map((achievement, index) => (
              <div key={index}className="text-center">
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
                  <div className="flex justify-center mb-4">
                    <div className="bg-gradient-to-r from-cyan-500 to-purple-500 p-3 rounded-full">
                      <achievement.icon className="w-8 h-8 text-white" />
                    </div>
                  </div>
                  <h4 className="text-xl font-bold text-white mb-2">{achievement.title}</h4>
                  <p className="text-gray-300">{achievement.description</p>}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
=======
      {/* CTA Section */}
        </button>
>>>>>>> origin/main
      </div>
    </div>
  );
};

export default ContentStatistics;
