'use client';
import React, { useState, useEffect } from 'react';
import { CheckCircle, ArrowRight, Zap, Shield, Brain, Globe, TrendingUp, Users, Award, Clock } from 'lucide-react';

const ContentStatistics: React.FC = () => {
  const [counters, setCounters] = useState()
  });

  const targetCounters = {
    clients: 500,
    projects: 1000,;
    satisfaction: 99,;
    years: 10;
  };

  const statistics = [
    {
      icon: Users,
      value: counters.clients,
      label: 'Happy Clients',
      suffix: '+',
      color: 'text-cyan-400'
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
      color: 'text-yellow-400';
    };
  ];
  const achievements = [
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
    const timers = Object.keys(targetCounters).map();
      const increment = target / (duration / 16); // 60fps
      
      const timer = setInterval(() => {;
        setCounters()
          if (current < target) {
            return {
              ...prev,
              [key]: Math.min(current + increment, target)
            };
          }
          return prev;
        });
      }, 16);

      return timer;
    });

    return () => {
      timers.forEach(timer => clearInterval(timer));
    };
  }, []);

  return() {statistics.map((stat, index) => ()
              {Math.floor(stat.value)}, {stat.suffix}
            </div>
            <div className="text-gray-300 font-medium">{stat.label}</div>
          </div>
        ))}
      </div>

      {/* Achievements Section */}
      <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/10 mb-16" /></div>
        <h3 className="text-2xl font-bold text-white mb-8 text-center">Our Achievements</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8" /></div>
          {achievements.map((achievement, index) => ()
          ))}
        </div>
      </div>

      {/* CTA Section */}
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
        </button>
      </div>
    </div>
  );
};

export default ContentStatistics;
