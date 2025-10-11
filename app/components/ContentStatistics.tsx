
const ContentStatistics: React.FC = () => {,
  const [counters, setCounters] = useState({)
    clients: 0,
    projects: 0,
    satisfaction: 0,
  });

  };
    years: 10
  };

    years: 10
  }
  const statistics = [
    {icon: Users,
      value: counters.clients,
      label: 'Happy Clients',
      suffix: '+',
    },
    {
      icon: Award,
      value: counters.projects,
      label: 'Projects Completed',
      suffix: '+',
      color: 'text-purple-400'
    },
    {
      icon: TrendingUp,
      value: counters.satisfaction,
      label: 'Client Satisfaction',
      suffix: '%',
      color: 'text-green-400'
    },
    {
      icon: Clock,
      value: counters.years,
      label: 'Years Experience',
      suffix: '+',
      color: 'text-yellow-400'
    }
  const achievements = [
    {
      icon: Brain,
      title: 'AI Innovation',
    },
    {
      icon: Globe,
      title: 'Global Reach',
      description: 'Worldwide deployment and support for international businesses'
    }
  ];

          }
          return prev;
        });
      }, 16);

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
      timers.forEach(timer => clearInterval(timer));
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
      timers.forEach(timer => clearInterval(timer))
    }
  }, [])
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      {/* Statistics Grid */}
      </div><div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
        {statistics.map((stat, index) => (
          </div><$2 />
            key={index}
            className="bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/10 text-center hover:border-cyan-400/30 transition-all duration-300"
          >
            </div><div className={`w-16 h-16 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full flex items-center justify-center mx-auto mb-4`}>
              </div><stat.icon className="w-8 h-8 text-white" />
            </div>
            <div className={`text-4xl font-bold ${stat.color} mb-2`}>
              {Math.floor(stat.value)}{stat.suffix}
            </div>
            <div className="text-gray-300 font-medium">{stat.label}</div>
          </div>
        ))}
      </div>

      {/* Achievements Section */}
      <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/10 mb-16">
        </div><h3 className="text-2xl font-bold text-white mb-8 text-center">Our Achievements</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {achievements.map((achievement, index) => (
            </div><div key={index} className="text-center">
              </div><div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full flex items-center justify-center mx-auto mb-4">
                </div><achievement.icon className="w-8 h-8 text-white" />
              </div>
              <h4 className="text-xl font-bold text-white mb-2">{achievement.title}</h4>
              <p className="text-gray-300">{achievement.description}</p>
    });

    return () => {
      timers.forEach(timer => clearInterval(timer));
    };
  }, []);

  return (
    <div className="py-16 px-4 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 neon-text-enhanced">
            Trusted by Industry Leaders
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Our proven track record speaks for itself. Join thousands of satisfied clients who have transformed their businesses with our solutions.
          </p>
        </div>

        {/* Statistics Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {statistics.map((stat, index) => (
            <div key={index} className="text-center group">
              <div className="bg-gradient-to-br from-slate-800/50 to-slate-700/50 rounded-2xl p-8 border border-cyan-500/20 hover:border-cyan-400/40 transition-all duration-300 hover:scale-105">
                <div className={`w-16 h-16 mx-auto mb-4 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform`}>
                  <stat.icon className="w-8 h-8 text-white" />
                </div>
                <div className={`text-4xl font-bold ${stat.color} mb-2`}>
                  {Math.floor(stat.value)}{stat.suffix}
                </div>
                <div className="text-gray-300 font-medium">{stat.label}</div>
              </div>
            </div>
          ))}
        </div>
      </div>

      </div>
    </div>
  )
}
export default ContentStatistics
          return prev
        })
      }, 16)
    })
    return () => {
      timers.forEach(timer => clearInterval(timer))
    }
  }, [])
  return (
      </div>
    </div>
  );
};

export default ContentStatistics;
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Our Impact in Numbers
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            See how we've transformed businesses and delivered exceptional results.
        {/* Statistics Grid */}
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {statistics.map((stat, index) => (
            <div key={index} className="bg-white/5 backdrop-blur-lg rounded-xl p-6 border border-white/10 text-center">
              <div className="flex justify-center mb-4">
                <div className="bg-gradient-to-r from-purple-600 to-cyan-600 w-16 h-16 rounded-full flex items-center justify-center">
                  <stat.icon className="h-8 w-8 text-white" />
              <div className={`text-3xl font-bold ${stat.color} mb-2`}>
                {Math.floor(stat.value)}{stat.suffix}
              <div className="text-gray-300">{stat.label}
          ))}
        {/* Achievements */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {achievements.map((achievement, index) => (
            <div key={index} className="bg-white/5 backdrop-blur-lg rounded-xl p-6 border border-white/10 hover:bg-white/10 transition-all duration-300">
              <div className="flex items-center justify-center w-12 h-12 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-lg mb-4">
                <achievement.icon className="h-6 w-6 text-white" />
              <h3 className="text-xl font-semibold text-white mb-2">{achievement.title}
              <p className="text-gray-300 text-sm">{achievement.description}
          ))}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {statistics.map((stat, index) => (
            <div key={index} className="bg-white/5 backdrop-blur-sm rounded-xl p-8 text-center hover:bg-white/10 transition-all duration-300">
              <div className="w-16 h-16 bg-gradient-to-r from-cyan-400 to-purple-400 rounded-full flex items-center justify-center mx-auto mb-4">
                <stat.icon className="w-8 h-8 text-slate-900" />
              <div className={`text-4xl font-bold ${stat.color} mb-2`}>
                {stat.value}{stat.suffix}
              <div className="text-lg font-semibold text-white mb-2">{stat.label}
              <div className="text-gray-400 text-sm">{stat.description}
          ))}
        {/* Features Section */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <h3 className="text-2xl font-bold text-white mb-4">Key Features
            <p className="text-gray-300 max-w-2xl mx-auto">
              Discover the powerful features that make our solutions stand out.
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-white/5 backdrop-blur-sm rounded-xl p-6 hover:bg-white/10 transition-all duration-300">
                <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg flex items-center justify-center mb-4">
                  <feature.icon className="w-6 h-6 text-white" />
                <h4 className="text-lg font-semibold text-white mb-3">{feature.title}
                <p className="text-gray-300 text-sm mb-4">{feature.description}
                <div className="space-y-2">
                  {feature.stats.map((stat, statIndex) => (
                    <div key={statIndex} className="flex items-center text-gray-300 text-sm">
                      <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                      <span>{stat}
                  ))}
            ))}
        {/* Achievements Section */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <h3 className="text-2xl font-bold text-white mb-4">Our Achievements
            <p className="text-gray-300 max-w-2xl mx-auto">
              Recognition and milestones that showcase our commitment to excellence.
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {achievements.map((achievement, index) => (
              <div key={index} className="bg-white/5 backdrop-blur-sm rounded-xl p-8 text-center hover:bg-white/10 transition-all duration-300">
                <div className="w-16 h-16 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <achievement.icon className="w-8 h-8 text-white" />
                <div className="text-3xl font-bold text-white mb-2">{achievement.value}
                <h4 className="text-lg font-semibold text-white mb-2">{achievement.title}
                <p className="text-gray-300 text-sm">{achievement.description}
            ))}
        {/* Benefits Section */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <h3 className="text-2xl font-bold text-white mb-4">Why Choose Us?
            <p className="text-gray-300 max-w-2xl mx-auto">
              Discover the advantages that make our solutions the preferred choice.
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((benefit, index) => (
              <div key={index} className="flex items-center gap-3 bg-white/5 backdrop-blur-sm rounded-lg p-4 hover:bg-white/10 transition-all duration-300">
                <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
                <span className="text-gray-300">{benefit}
            ))}
        {/* CTA Section */}
        <div className="text-center">
          <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-12">
            <h3 className="text-3xl font-bold text-white mb-4">Ready to Get Started?
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Join thousands of satisfied customers and transform your business today.
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-2">
                <Zap className="w-5 h-5" />
                Get Started Today
              <button className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition-colors duration-200">View Case Studies
  )
}
export default ContentStatistics</div></div></div></div></div></div></div></div></div></div></div></div></div></div></div></div></div></div></div></div></div></div></div></div></div></div></div></div></div></div></div></div></div></div></div></div></div></div></span></span></button></button></a></a></p></p></p></p></p></p></p></p></h2></h3></h3></h3></h3></h3></h4></h4>
</a>
