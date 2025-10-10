'use client';

const ContentStatistics: React.FC = () => {
  const [counters, setCounters] = useState({)
    clients: 0,
    projects: 0,
    satisfaction: 0,
>>>>>>> cursor/analyze-improve-and-deploy-application-8fa5
>>>>>>> cursor/fix-errors-and-merge-to-main-cd7c
>>>>>>> cursor/website-audit-and-update-with-deployment-c0e8

  const targetCounters = {clients: 500,
    projects: 1000,
    satisfaction: 99,
>>>>>>> cursor/analyze-improve-and-deploy-application-8fa5
>>>>>>> cursor/fix-errors-and-merge-to-main-cd7c
>>>>>>> cursor/website-audit-and-update-with-deployment-c0e8

  const statistics = [
    {icon: Users,
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
      description: 'Leading the industry with cutting-edge AI solutions'
>>>>>>> cursor/fix-errors-and-merge-to-main-cd7c
      description: 'Leading AI solutions for modern businesses'
>>>>>>> cursor/website-audit-and-update-with-deployment-c0e8
    },
    {
      icon: Globe,
      title: 'Global Reach',
      description: 'Serving clients across 50+ countries'
    },
    {
      icon: Zap,
      title: 'Performance',
      description: '99.9% uptime and lightning-fast response'
    }
  ];

  useEffect(() => {
>>>>>>> cursor/website-audit-and-update-with-deployment-c0e8
      const duration = 2000; // 2 seconds
      const increment = target / (duration / 16); // 60fps
      
      const timer = setInterval(() => {
        setCounters(prev => {
          const current = prev[key as keyof typeof prev];
>>>>>>> cursor/website-audit-and-update-with-deployment-c0e8
          if (current < target) {
            return {
              ...prev,
              [key]: Math.min(current + increment, target)
            };
>>>>>>> cursor/analyze-improve-and-deploy-application-8fa5
>>>>>>> cursor/fix-errors-and-merge-to-main-cd7c
>>>>>>> cursor/website-audit-and-update-with-deployment-c0e8
          }
          return prev;
        });
      }, 16);
      setTimeout(() => clearInterval(timer), duration);
    };

    // Start animations with slight delays
    Object.keys(targetCounters).forEach((key, index) => {
      setTimeout(() => {
        animateCounter(key as keyof typeof targetCounters);
      }, index * 100);
    });
  }, []);

  return (
    <div className="py-16 px-4">
    });

    return () => {
      timers.forEach(timer => clearInterval(timer));
    };
  }, []);

  return (
    <div className="py-16 px-4 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
>>>>>>> cursor/website-audit-and-update-with-deployment-c0e8
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Numbers that speak for themselves - see how we've transformed businesses worldwide.
    });

    return () => {
      timers.forEach(timer => clearInterval(timer));
    };
  }, []);

  return (
    <div className="bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Our Impact in Numbers
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            See how we've helped businesses transform with our AI-powered solutions.
>>>>>>> cursor/fix-errors-and-merge-to-main-cd7c
            Trusted by <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">Industry Leaders</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Our proven track record speaks for itself. See why thousands of companies choose Zion Tech Group for their AI and IT needs.
>>>>>>> cursor/website-audit-and-update-with-deployment-c0e8
          </p>
        </div>

        {/* Statistics Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {statistics.map((stat, index) => (
                </div>
                <div className="text-4xl font-bold text-white mb-2">
                  {Math.floor(stat.value)}{stat.suffix}
                </div>
                <div className="text-gray-300">{stat.label}</div>
>>>>>>> cursor/analyze-improve-and-deploy-application-8fa5
              </div>
            <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 text-center">
              <div className="flex justify-center mb-4">
                <stat.icon className={`w-8 h-8 ${stat.color}`} />
              </div>
              <div className="text-3xl font-bold text-white mb-2">
                {Math.floor(stat.value)}{stat.suffix}
              </div>
              <div className="text-gray-300">{stat.label}</div>
>>>>>>> cursor/fix-errors-and-merge-to-main-cd7c
            <div key={index} className="text-center bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/10">
              <div className={`w-16 h-16 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-6`}>
                <stat.icon className="w-8 h-8 text-white" />
              </div>
              <div className={`text-4xl font-bold ${stat.color} mb-2`}>
                {Math.floor(stat.value)}{stat.suffix}
              </div>
              <div className="text-gray-300 font-medium">{stat.label}</div>
>>>>>>> cursor/website-audit-and-update-with-deployment-c0e8
            </div>
          ))}
        </div>

                </div>
              </div>
            ))}
          </div>
        {/* Achievements */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {achievements.map((achievement, index) => (
            <div key={index} className="text-center">
              <div className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-2xl p-8 border border-white/10 hover:border-cyan-400/50 transition-all duration-300">
                <div className="w-16 h-16 mx-auto mb-4 rounded-2xl bg-gradient-to-br from-cyan-500 to-purple-500 flex items-center justify-center">
                  <achievement.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">{achievement.title}</h3>
                <p className="text-gray-300">{achievement.description}</p>
              </div>
            </div>
          ))}
>>>>>>> cursor/analyze-improve-and-deploy-application-8fa5
        {/* Achievements Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {achievements.map((achievement, index) => (
            <div key={index} className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 text-center">
              <div className="flex justify-center mb-4">
                <achievement.icon className="w-12 h-12 text-cyan-400" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">{achievement.title}</h3>
              <p className="text-gray-300">{achievement.description}</p>
            </div>
          ))}
>>>>>>> cursor/fix-errors-and-merge-to-main-cd7c
        {/* Achievements Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {achievements.map((achievement, index) => (
            <div key={index} className="text-center bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/10">
              <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <achievement.icon className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-4">{achievement.title}</h3>
              <p className="text-gray-300">{achievement.description}</p>
            </div>
          ))}
>>>>>>> cursor/website-audit-and-update-with-deployment-c0e8
        </div>
      </div>
    </div>
  );
};

export default ContentStatistics;