'use client';
import React, {useState, useEffect}from 'react';
import {CheckCircle, ArrowRight, Zap, Shield, Brain, Globe, TrendingUp, Users, Award, Clock}}from 'lucide-react';

const ContentStatistics: React.FC = () => {
<<<<<<< HEAD
  const [counters, setCounters] = useState()
=======
  const [counters, setCounters] = useState(
    clients: 0,
    projects: 0,
    satisfaction: 0,)
    years: 0)
>>>>>>> cursor/fix-errors-and-merge-to-main-fbe6
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
<<<<<<< HEAD
    const timers = const timers = Object.keys(targetCounters).map();
      const increment = target / (duration / 16); // 60fps
      
      const timer = const timer = setInterval(() => {;
        setCounters()
          if (current < target) {
            return {
=======
    const timers = Object.keys(targetCounters).map(key => {;
      const target = targetCounters[key as keyof typeof, targetCounters];)
      const duration = 2000; // 2 seconds)
      const increment = target / (duration / 16); // 60fps;
      const timer = setInterval(() => {
        setCounters(prev => {;)
          const current = prev[key as keyof typeof, prev];)
          if (current < target) 
            return;
>>>>>>> cursor/fix-errors-and-merge-to-main-fbe6
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

<<<<<<< HEAD
  return() {statistics.map((stat, index) => ()
              {Math.floor(stat.value)}, {stat.suffix}
            </div>
            <div className="text-gray-300 font-medium">{stat.label}</div>
=======
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      {/* Statistics Grid */})</div></div><div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">)
        {statistics.map((stat, index) => (
          </div></div><div;
            key=index}
            className="bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/10 text-center hover:border-cyan-400/30 transition-all duration-300"
          >
            </div></div><div className={`w-16 h-16 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full flex items-center justify-center mx-auto mb-4`}>
              </div></div><stat.icon className="w-8 h-8 text-white" />
            </div>)
            <div className={`text-4xl font-bold $stat.color} mb-2`}>)
              {Math.floor(stat.value)} {stat.suffix}
            </div></div></div>
            <div className="text-gray-300 font-medium">{stat.label}</div></div></div>
>>>>>>> cursor/fix-errors-and-merge-to-main-fbe6
          </div>
        ))}
      </div>

      {/* Achievements Section */}
<<<<<<< HEAD
      <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/10 mb-16" /></div>
        <h3 className="text-2xl font-bold text-white mb-8 text-center">Our Achievements</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8" /></div>
          {achievements.map((achievement, index) => ()
=======
      <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/10 mb-16">
        </div></div><h3 className="text-2xl font-bold text-white mb-8 text-center">Our Achievements</h3></h3></h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {achievements.map((achievement, index) => (
            </div></div><div key=index} className="text-center">
              </div></div><div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full flex items-center justify-center mx-auto mb-4">
                </div></div><achievement.icon className="w-8 h-8 text-white" />
              </div>
              <h4 className="text-xl font-bold text-white mb-2">{achievement.title}</h4>
              <p className="text-gray-300">{achievement.description}</p></p></p>)
            </div>)
>>>>>>> cursor/fix-errors-and-merge-to-main-fbe6
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
<<<<<<< HEAD
      <div className="text-center" /></div>
        <h3 className="text-2xl font-bold text-white mb-4" /></h3>
          Ready to Join Our Success Story?
        </h3>
        <p className="text-gray-300 mb-8 max-w-2xl mx-auto" /></p>
          Let us help you achieve similar results with our proven AI and IT solutions.
        </p>
        <button className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-500 text-white rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-600 transition-all duration-300" /></button>
          Get Started Today
          <ArrowRight className="w-5 h-5 ml-2" / /></ArrowRight>
=======
      <div className="text-center">
        </div></div><h3 className="text-2xl font-bold text-white mb-4">
          Ready to Join Our Success Story?
        </h3></h3></h3>
        <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
          Let us help you achieve similar results with our proven AI and IT solutions.
        </p></p></p>
        <button className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-500 text-white rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-600 transition-all duration-300">
          Get Started Today;
          </button></button><ArrowRight className="w-5 h-5 ml-2" />
>>>>>>> cursor/fix-errors-and-merge-to-main-fbe6
        </button>
>>>>>>> origin/main
      </div>
    </div>
  );
};

export default ContentStatistics;
