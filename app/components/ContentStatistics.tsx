
const ContentStatistics: React.FC = () => {
  const [counters, setCounters] = useState({
    clients: 0,
    projects: 0,
    satisfaction: 0,
    years: 0;
  });

  const targetCounters = {
    clients: 500,
    projects: 1000,
    satisfaction: 99,
    years: 10;
  };

  const statistics = React.useMemo(() => [
    {
      icon: Users,
      value: counters.clients,
      label: 'Happy Clients',
      suffix: '+',
      color: 'text-cyan-400',
    },
    {
      icon: Award,
      value: counters.projects,
      label: 'Projects Completed',
      suffix: '+',
      color: 'text-purple-400',
    },
    {
const ContentStatistics: React.FC = () => {}
  const [isVisible, setIsVisible] = useState(false);
  const [counts, setCounts] = useState({)}
    projects: 0,
    clients: 0,
    uptime: 0,
    satisfaction: 0,
    countries: 0,
    years: 0
  });
      icon: Zap,
      value: 300,
      suffix: '%',
      label: 'Efficiency Gain',
      description: 'Average improvement',
      color: 'text-purple-400'
    }
  ], []);

  const stats = [
    {}
      id: 'projects',
      label: 'Projects Completed',
      value: 500,
      suffix: '+',
      icon: Award,
      color: 'text-cyan-400',
      bgColor: 'bg-cyan-500/10',
      description: 'Successful AI and IT implementations'},
    {}
      id: 'clients',
      label: 'Happy Clients',
      value: 200,
      suffix: '+',
      icon: Users,
      color: 'text-purple-400',
      bgColor: 'bg-purple-500/10',
      description: 'Satisfied customers worldwide'},
    {}
      id: 'uptime',
      label: 'Uptime Guarantee',
      value: 99.9,
      suffix: '%',
      icon: Shield,
      color: 'text-green-400',
      bgColor: 'bg-green-500/10',
      description: 'Reliable service delivery'},
    {}
      id: 'satisfaction',
      label: 'Client Satisfaction',
      suffix: '%',
      icon: Star,
      color: 'text-yellow-400',
      bgColor: 'bg-yellow-500/10',
      description: 'Customer satisfaction rate'},
    {}
      id: 'countries',
      label: 'Countries Served',
      value: 25,
      suffix: '+',
      icon: Globe,
      color: 'text-blue-400',
      bgColor: 'bg-blue-500/10',
      description: 'Global presence and reach'},
    {}
      id: 'years',
      label: 'Years Experience',
      value: 10,
      suffix: '+',
      icon: Clock,
      color: 'text-orange-400',
      bgColor: 'bg-orange-500/10',
      description: 'Industry expertise and knowledge'}
  ];

  useEffect(() => {}
    const observer = new IntersectionObserver()
      ([entry]) => {}
        if (entry.isIntersecting) {}
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    const element = document.getElementById('statistics-section');
    if (element) {}
      observer.observe(element);
    }
  ];

  useEffect(() => {
    const timers = Object.keys(targetCounters).map(key => {
      const target = targetCounters[key as keyof typeof targetCounters];
      const duration = 2000; // 2 seconds
      const increment = target / (duration / 16); // 60fps
      
      return setInterval(() => {
        setCounters(prev => {
          const current = prev[key as keyof typeof prev];
          if (current < target) {
            return {
              ...prev,
              [key]: Math.min(current + increment, target)
            };
          }
          return prev;
        });
      }, 16);
    });

    return () => {
      timers.forEach(timer => clearInterval(timer));
    };
  }, [statistics]);

  useEffect(() => {}
    if (isVisible) {}
      const duration = 2000; // 2 seconds
      const steps = 60;
      const stepDuration = duration / steps;

      stats.forEach((stat) => {}
        let currentStep = 0;
        const increment = stat.value / steps;

        const timer = setInterval(() => {}
          currentStep++;
          setCounts((prev) => ({}
            ...prev,
            [stat.id]: Math.min(Math.floor(increment * currentStep), stat.value)
          }));

          if (currentStep >= steps) {}
            clearInterval(timer);
            setCounts((prev) => ({}
              ...prev,
              [stat.id]: stat.value;
            }));
          }
        }, stepDuration);
      }
    }
  }, [isVisible, stats]);

  return (
    <section id="statistics-section" className="py-16" aria-labelledby="statistics-heading"></section>
      <div className="container mx-auto px-4"></div>
        <h2 id="statistics-heading" className="text-3xl md:text-4xl font-bold text-white text-center mb-4 neon-text"></h2>
          Our Impact
        </h2>
        <p className="text-gray-300 text-center mb-12 max-w-3xl mx-auto"></p>
          Numbers that speak for themselves. We've been delivering exceptional results for our clients across the globe.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto"></div>
          {stats.map((stat) => (}
            <div
        <h2 id="statistics-heading" className="text-3xl md: text-4xl font-bold text-white text-center mb-4 neon-text"></div>
          Our Impact;
        </h2>
        <p className="text-gray-300 text-center mb-12 max-w-3xl mx-auto">)
          Numbers that speak for themselves. We've been delivering exceptional results for our clients across the globe.)
        </p>)
)
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">),
          {stats.map((stat) => (,
            <div;
              key={stat.id}
              className={`${stat.bgColor} rounded-xl p-6 text-center hover:scale-105 transition-all duration-300 cyber-card`}
            ></div>
              <div className="flex justify-center mb-4"></div>
                <div className={`p-3 rounded-full ${stat.bgColor} ${stat.color}`}></div>
                  <stat.icon className="w-8 h-8" />
                </div>
              </div>

              <div className={`text-4xl md:text-5xl font-bold ${stat.color} mb-2`}></div>
                {stat.id === 'uptime' || stat.id === 'satisfaction'}
                  ? `${counts[stat.id as keyof typeof counts]}${stat.suffix}`
                  : `${counts[stat.id as keyof typeof counts]}${stat.suffix}`</div>
                }</div>
              <h3 className="text-lg font-semibold text-white mb-2">{stat.label}</h3><p className="text-gray-400 text-sm">{stat.description}</p>
              </p>
            </div>
          ))}
        </div>

        {/* Additional achievements */}
        <div className="mt-16 bg-gradient-to-r from-purple-600/20 to-blue-600/20 rounded-2xl p-8 cyber-card"></div>
          <h3 className="text-2xl font-bold text-white text-center mb-8 neon-text">Industry Recognition</h3>
          <h3 className="text-2xl font-bold text-white text-center mb-8 neon-text"></h3>
            Industry Recognition;
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"></div>
            <div className="text-center"></div>
              <div className="text-3xl mb-2">🏆</div><h4 className="font-semibold text-white mb-1">Best AI Company 2024<p className="text-gray-400 text-sm">Tech Innovation Awards</p>
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
    </section>);
};

export default ContentStatistics;
import React from 'react';
import { Users, Award, TrendingUp, Clock } from 'lucide-react';

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
  ];

  return (
    <section className="py-16"></section>
      <div className="container mx-auto px-4"></div>
        <div className="text-center mb-12"></div>
          <h2 className="text-4xl font-bold text-white mb-4">Our Impact</h2>
          <p className="text-xl text-gray-300">Numbers that speak to our success</p>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8"></div>
          {stats.map((stat, index) => (
            <div key={index} className="text-center cyber-card p-6"></div>
              <stat.icon className={`w-12 h-12 ${stat.color} mx-auto mb-4`} />
              <div className="text-3xl font-bold text-white mb-2">{stat.number}</div>
              <div className="text-gray-300">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
'use client';

interface StatItem {id: string;,
import { useState, useEffect} from 'react';
interface StatItem {
  id: string;,
  value: number;,
  label: string;,
  icon: React.ComponentType<{ className?: string}>;
  suffix?: string;
  prefix?: string;
}

interface ContentStatisticsProps {stats?: StatItem[];
  animationDuration?: number;
  className?: string;}

const ContentStatistics: React.FC<ContentStatisticsProps   /> = ({const stats = [{
      id: 'users',
      value: 1200,
      label: 'Active Users',
      icon: Users,
      suffix: '+'},
    {id: 'projects',
      value: 99.8,
      label: 'Success Rate',
      icon: Award,
      suffix: '%'},
    {id: 'uptime',
      value: 99.9,
      label: 'Uptime',
      icon: CheckCircle,
      suffix: '%'},
    {id: 'performance',
      value: 300,
      label: 'Performance Boost',
      icon: Zap,
      suffix: '%'}],
  animationDuration = 2000,
  className = ''
}) => {const [animatedValues, setAnimatedValues] = useState<{ [key: string]: number}>({});
  useEffect(() => {const animateValue = (start: number, end: number, duration: number, key: string) => {
      const startTime = performance.now();
      const animate = (currentTime: number) => {
        const elapsed = currentTime - startTime;
        const progress = Math.min(elapsed / duration, 1);
        // Easing function;
        const easeOutCubic = 1 - Math.pow(1 - progress, 3);
        const currentValue = start + (end - start) * easeOutCubic;
        setAnimatedValues(const prev = > ({
          ...prev,
          [key]: currentValue;}));
        if (progress < 1) {requestAnimationFrame(animate);}
      };

      requestAnimationFrame(animate);
    };

    stats.forEach(const stat = > {animateValue(0, stat.value, animationDuration, stat.id);});
  }, [stats, animationDuration]);

export default function ContentStatistics() {return (

        const animatedValue = animatedValues[stat.id] || 0;
        const IconComponent = stat.icon;
        return (
    <div;
            const key = {stat.id}
            className="text-center p-6 bg-white/5 backdrop-blur-lg rounded-xl border border-white/10 hover:border-white/20transition-allduration-300" />
            <div className="flexjustify-centermb-4">
              <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-full flex items-centerjustify-center">
                <IconComponent className="w-6h-6text-white" />
              </div>

            <div className="text-3 xl font-bold text-white mb-2"  />{stat.prefix}
              {stat.suffix === '%'
                ? animatedValue.toFixed(1)
                : Math.floor(animatedValue).toLocaleString()}
              {stat.suffix}
            </div>
            <div className="text-gray-300text-sm">{stat.label}
            </div>
  );
      })}
import React from 'react';

const ContentStatistics: React.FC<ContentStatisticsProps> = () => {
  return (
    <div className="contentstatistics">
      <h2>ContentStatistics</h2>
      <p>Component content coming soon.</p>
    </div>
  );
};

export default ContentStatistics;
export default ContentStatistics;

export default ContentStatistics;
