'use client';
import React, { useState, useEffect } from 'react';
import { Users, CheckCircle, Award, TrendingUp } from 'lucide-react';

const ContentStatistics: React.FC = () => {
  const [counters, setCounters] = useState({
    clients: 0,
    projects: 0,
    years: 0,
    satisfaction: 0
  });

<<<<<<< HEAD
  };
    years: 10
  };

    years: 10
  }
  const statistics = [
    {icon: Users,
      value: counters.clients,
=======
  const stats = [
    {
      icon: Users,
>>>>>>> cursor/fix-errors-and-merge-to-main-9eaa
      label: 'Happy Clients',
      value: 200,
      suffix: '+'
    },
    {
      icon: CheckCircle,
      label: 'Projects Completed',
      value: 500,
      suffix: '+'
    },
    {
      icon: Award,
      label: 'Years Experience',
      value: 10,
      suffix: '+'
    },
    {
      icon: TrendingUp,
      label: 'Client Satisfaction',
      value: 99,
      suffix: '%'
    }
  ];

<<<<<<< HEAD
          }
          return prev;
        });
      }, 16);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900"></div></div>
      <Helmet>
        <title>ContentStatistics | Zion Tech Group</title>
        <meta name="description" content="Professional ContentStatistics services by Zion Tech Group. Advanced AI and IT solutions for your business." />
        <meta name="keywords" content="ContentStatistics, AI solutions, IT services, Zion Tech Group, contentstatistics" />
      </Helmet>

      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8"></section></section>
        <div className="max-w-7xl mx-auto"></div></div>
          <div className="text-center"></div></div>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6"></h1></h1>
              <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent"></span></span>
                ContentStatistics
              </span>
              <br />
              <span className="text-white"></span></span>Solutions</span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto"></p></p>
              Transform your business with our advanced contentstatistics solutions. 
              Powered by cutting-edge AI technology and industry expertise.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center"></div></div>
              <button className="bg-gradient-to-r from-purple-500 to-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-purple-600 hover:to-blue-700 transition-all duration-300 flex items-center"></button>
                Get Started
                <ArrowRight className="ml-2 h-5 w-5" />
              </button>
              <button className="border border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-gray-900 transition-all duration-300"></button>
                Learn More
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8"></section></section>
        <div className="max-w-7xl mx-auto"></div></div>
          <div className="text-center mb-16"></div></div>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4"></h2></h2>
              Why Choose Our ContentStatistics?
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto"></p></p>
              Our contentstatistics solutions deliver unmatched performance, security, and scalability.
  useEffect(() => {
    const duration = 2000; // 2 seconds
    const steps = 60;
    const stepDuration = duration / steps;

    const timers = Object.keys(targetCounters).map((key) => {
      const target = targetCounters[key as keyof typeof targetCounters];
      const increment = target / steps;
      let current = 0;

      return setInterval(() => {
        current += increment;
        if (current >= target) {
          current = target;
          clearInterval(timers[0]);
        }
        setCounters(prev => ({
          ...prev,
          [key]: Math.floor(current)
        }));
      }, stepDuration);
    });

    return () => {
      timers.forEach(timer =&gt; clearInterval(timer));
    };
  }, []);
  ]
  useEffect(() => {
    const timers = Object.keys(targetCounters).map()
      const increment = target / (duration / 16); // 60fps
      
      const timer = setInterval(() => {
        setCounters()
          if (current < target) {
            return {
              ...prev,
              [key]: Math.min(current + increment, target)
            }
          }
          return prev
        })
      }, 16)
      return timer
    })
    return () => {
      timers.forEach(timer =&gt; clearInterval(timer))
    }
  }, [])
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16"></div></div>
      {/* Statistics Grid */}
      </div><div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16"></div></div>
        {statistics.map((stat, index) => (
          </div><div></div>
            key={index}
            className="bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/10 text-center hover:border-cyan-400/30 transition-all duration-300"
          >
            </div><div className="{`w-16" h-16 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full flex items-center justify-center mx-auto mb-4`}></div></div>
              </div><stat.icon className="w-8 h-8 text-white" />
            </div>
            <div className="{`text-4xl" font-bold ${stat.color} mb-2`}></div></div>
              {Math.floor(stat.value)}{stat.suffix}
            </div>
            <div className="text-gray-300 font-medium"></div></div>{stat.label}</div>
          </div>
        ))}
      </div>

      {/* Achievements Section */}
      <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/10 mb-16"></div></div>
        </div><h3 className="text-2xl font-bold text-white mb-8 text-center"></h3></h3>Our Achievements</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8"></div></div>
          {achievements.map((achievement, index) => (
            </div><div key={index} className="text-center"></div></div>
              </div><div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full flex items-center justify-center mx-auto mb-4"></div></div>
                </div><achievement.icon className="w-8 h-8 text-white" />
              </div>
              <h4 className="text-xl font-bold text-white mb-2"></h4></h4>{achievement.title}</h4>
              <p className="text-gray-300"></p></p>{achievement.description}</p>
    });

    return () => {
      timers.forEach(timer =&gt; clearInterval(timer));
=======
  useEffect(() => {
    const animateCounters = () => {
      stats.forEach((stat, index) => {
        let current = 0;
        const increment = stat.value / 50;
        const timer = setInterval(() => {
          current += increment;
          if (current >= stat.value) {
            current = stat.value;
            clearInterval(timer);
          }
          setCounters(prev => ({
            ...prev,
            [Object.keys(prev)[index]]: Math.floor(current)
          }));
        }, 20);
      });
>>>>>>> cursor/fix-errors-and-merge-to-main-9eaa
    };

    const timer = setTimeout(animateCounters, 500);
    return () => clearTimeout(timer);
  }, []);

  return (
<<<<<<< HEAD
    <div className="py-16 px-4 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900"></div></div>
      <div className="max-w-7xl mx-auto"></div></div>
        {/* Header */}
        <div className="text-center mb-16"></div></div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 neon-text-enhanced"></h2></h2>
            Trusted by Industry Leaders
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto"></p></p>
            Our proven track record speaks for itself. Join thousands of satisfied clients who have transformed their businesses with our solutions.
          </p>
        </div>

        {/* Statistics Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16"></div></div>
          {statistics.map((stat, index) => (
            <div key={index} className="text-center group"></div></div>
              <div className="bg-gradient-to-br from-slate-800/50 to-slate-700/50 rounded-2xl p-8 border border-cyan-500/20 hover:border-cyan-400/40 transition-all duration-300 hover:scale-105"></div></div>
                <div className="{`w-16" h-16 mx-auto mb-4 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform`}></div></div>
                  <stat.icon className="w-8 h-8 text-white" />
                </div>
                <div className="{`text-4xl" font-bold ${stat.color} mb-2`}></div></div>
                  {Math.floor(stat.value)}{stat.suffix}
                </div>
                <div className="text-gray-300 font-medium"></div></div>{stat.label}</div>
=======
    <div className="py-16 px-4 sm:px-6 lg:px-8 bg-white/5">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Our Impact
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Numbers that speak to our commitment to excellence and client success.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="flex items-center justify-center w-16 h-16 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-full mx-auto mb-4">
                <stat.icon className="text-white" size={32} />
>>>>>>> cursor/fix-errors-and-merge-to-main-9eaa
              </div>
              <div className="text-4xl font-bold text-white mb-2">
                {counters[Object.keys(counters)[index] as keyof typeof counters]}{stat.suffix}
              </div>
              <div className="text-gray-300 font-medium">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
<<<<<<< HEAD

      </div>
    </div>
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"></div></div>
            {features.map((feature, index) =&gt; (
              </div&gt;
            ))}
          </div>
        </div>

        {/* Achievements Section */}
        <div className="mb-16"></div></div>
          <div className="text-center mb-12"></div></div>
            <h3 className="text-2xl font-bold text-white mb-4"></h3></h3>Recognition & Achievements</h3>
            <p className="text-gray-300 max-w-2xl mx-auto"></p></p>
              Industry recognition and awards that validate our commitment to excellence
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8"></div></div>
            {achievements.map((achievement, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-lg rounded-xl p-8 border border-white/20 text-center hover:border-purple-400 transition-all duration-300 group"></div></div>
                <div className="flex items-center justify-center w-16 h-16 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full mx-auto mb-4 group-hover:scale-110 transition-transform duration-300"></div></div>
                  <achievement.icon className="w-8 h-8 text-white" />
                </div>
                <div className="text-3xl font-bold text-white mb-2"></div></div>{achievement.value}</div>
                <h4 className="text-lg font-semibold text-white mb-2 group-hover:text-purple-400 transition-colors"></h4></h4>
                  {achievement.title}
                </h4>
                <p className="text-gray-300 text-sm"></p></p>{achievement.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
=======
>>>>>>> cursor/fix-errors-and-merge-to-main-9eaa
    </div>
  );
};

export default ContentStatistics;
