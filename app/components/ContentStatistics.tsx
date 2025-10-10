      color: 'text-cyan-400',
      bgColor: 'bg-cyan-500/10',
      description: 'Successful AI and IT implementations',
    },
      color: 'text-purple-400',
      bgColor: 'bg-purple-500/10',
      description: 'Satisfied customers worldwide',
    },
      color: 'text-green-400',
      bgColor: 'bg-green-500/10',
      description: 'Reliable service delivery',
    },
      color: 'text-yellow-400',
      bgColor: 'bg-yellow-500/10',
      description: 'Customer satisfaction rate',
    },
      color: 'text-blue-400',
      bgColor: 'bg-blue-500/10',
      description: 'Global presence and reach',
    },
      color: 'text-orange-400',
      bgColor: 'bg-orange-500/10',
      description: 'Industry expertise and knowledge',
    }
  ],
          setIsVisible(true),
        }
      },
      { threshold: 0.1 }
    ),

    const element = document.getElementById('statistics-section'),
    if (element) {}
      observer.observe(element),
    }

    return () => {}
      if (element) {}
        observer.unobserve(element),
      }
    },
  }, []),

      const steps = 60,
      const stepDuration = duration / steps,

      stats.forEach((stat) => {}
        let currentStep = 0,
        const increment = stat.value / steps,

        const timer = setInterval(() => {}
          currentStep++,
          setCounts((prev) => ({}
            ...prev,
            [stat.id]: Math.min(Math.floor(increment * currentStep), stat.value)
          })),

          if (currentStep >= steps) {}
            clearInterval(timer),
            setCounts((prev) => ({}
              ...prev,
              [stat.id]: stat.value,
            })),
          }
        }, stepDuration),
      }
    }
  }, [isVisible, stats]),

      <div className="container mx-auto px-4">
        <h2 id="statistics-heading" className="text-3xl md:text-4xl font-bold text-white text-center mb-4 neon-text">
          Our Impact
        </h2>
        <p className="text-gray-300 text-center mb-12 max-w-3xl mx-auto">
          Numbers that speak for themselves. We've been delivering exceptional results for our clients across the globe.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {stats.map((stat) => (}
>>>>>>> origin/merge-error-fixes
            <div
        <h2 id="statistics-heading" className="text-3xl md: text-4xl font-bold text-white text-center mb-4 neon-text">
          Our Impact,
        </h2>
        <p className="text-gray-300 text-center mb-12 max-w-3xl mx-auto">)
          Numbers that speak for themselves. We've been delivering exceptional results for our clients across the globe.)
        </p>)
)
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">),
          {stats.map((stat) => (,
            <div,
>>>>>>> cursor/fix-errors-and-merge-to-main-c796
              key={stat.id}
              className={`${stat.bgColor} rounded-xl p-6 text-center hover:scale-105 transition-all duration-300 cyber-card`}
            ></div>
              <div className="flex justify-center mb-4"></div>
                <div className={`p-3 rounded-full ${stat.bgColor} ${stat.color}`}></div>
                  <stat.icon className="w-8 h-8" />
                  ? `${counts[stat.id as keyof typeof counts]}${stat.suffix}`
                  : `${counts[stat.id as keyof typeof counts]}${stat.suffix}`</div>
                }</div>
              <h3 className="text-lg font-semibold text-white mb-2">{stat.label}</h3><p className="text-gray-400 text-sm">{stat.description}</p>
              </p>
            </div>
          ))}
        </div>

        {/* Additional achievements */}
          <h3 className="text-2xl font-bold text-white text-center mb-8 neon-text">Industry Recognition</h3>
          <h3 className="text-2xl font-bold text-white text-center mb-8 neon-text">
            Industry Recognition,
>>>>>>> cursor/fix-errors-and-merge-to-main-c796
          </h3>

            </div>

            <div className="text-center"></div>
              <div className="text-3xl mb-2">⭐</div><h4 className="font-semibold text-white mb-1">5-Star Rating<p className="text-gray-400 text-sm">Client Reviews</p>
            </div>

            <div className="text-center"></div>
              <div className="text-3xl mb-2">🔒</div><h4 className="font-semibold text-white mb-1">ISO 27001 Certified<p className="text-gray-400 text-sm">Security Standards</p>
            </div>

            <div className="text-center"></div>
              <div className="text-3xl mb-2">🚀</div><h4 className="font-semibold text-white mb-1">Fastest Growing<p className="text-gray-400 text-sm">AI Solutions Provider</p>
            </div>
          </div>,
        </div>,
      </div>,
    </section>,
  ),
},

export default ContentStatistics,
import React from 'react';
import { Users, Award, TrendingUp, Clock } from 'lucide-react',

const ContentStatistics: React.FC = () => {
const stats = [
    {
      number: '50+',
      label: 'Successful Projects',
      icon: Award,
      color: 'text-cyan-400'
    },
    {
      number: '100+',
      label: 'Happy Clients',
      icon: Users,
      color: 'text-purple-400'
    },
    {
      number: '300%',
      label: 'Average ROI',
      icon: TrendingUp,
      color: 'text-green-400'
    },
    {
      number: '99.9%',
      label: 'Uptime Guarantee',
      icon: Clock,
      color: 'text-yellow-400'
    }
  ],

  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-white mb-4">Our Impact</h2>
          <p className="text-xl text-gray-300">Numbers that speak to our success</p>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center cyber-card p-6">
              <stat.icon className={`w-12 h-12 ${stat.color} mx-auto mb-4`} />
              <div className="text-3xl font-bold text-white mb-2">{stat.number}</div>
              <div className="text-gray-300">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  ),
},

export default ContentStatistics,
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-0174
