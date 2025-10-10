'use client'
;
const ContentStatistics: React.FC = () => {
  const [counters, setCounters] = useState({);
    clients: 0,
    projects: 0,
    satisfaction: 0,
  const targetCounters = {clients: 500,
    projects: 1000,
    satisfaction: 99,
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
    },
    {;
      icon: Globe,
      title: 'Global Reach',
      description: 'Serving clients across 50+ countries'
    },
    {;
      icon: Zap,
      title: 'Performance',
      description: '99.9% uptime and lightning-fast response'
    }
  ]
;
  useEffect(() => {;
      const duration = 2000; // 2 seconds;
      const increment = target / (duration / 16); // 60fps;
      const timer = setInterval(() => {;
        setCounters(prev => {;
          if (current < target) {;
            return {;
              ...prev,;
              [key]: Math.min(current + increment, target);
            }
;
          }
          return prev;
        });
      }, 16);
;
      setTimeout(() => clearInterval(timer), duration);
    }
;
    // Start animations with slight delays;
    Object.keys(targetCounters).forEach((key, index) => {;
      setTimeout(() => {;
        animateCounter(key as keyof typeof targetCounters);
      }, index * 100);
    });
  }, []);
;
  return (;
    <div className="py-16 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md: text-5xl font-bold text-white mb-6">
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Numbers that speak for themselves - see how we've transformed businesses worldwide.
          </p>
        </div>
        {/* Statistics Grid */}
        <div className="grid grid-cols-1 md: grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {statistics.map((stat, index) => (;
                </div>
                <div className="text-4xl font-bold text-white mb-2">
                  {Math.floor(stat.value)}{stat.suffix}
                </div>
              </div>
            </div>
          ))}
        </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
;
export default ContentStatistics;