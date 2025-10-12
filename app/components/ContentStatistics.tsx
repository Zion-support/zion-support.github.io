import { useState, useEffect} from 'react';
'use client';


interface StatItem {
  id: string;,
  value: number;,
  label: string;,
  icon: React.ComponentType<{ className?: string }>;
  suffix?: string;
  prefix?: string;

interface ContentStatisticsProps {
  stats?: StatItem[];
  animationDuration?: number;
  className?: string;

const ContentStatistics: React.FC<ContentStatisticsProps /> = ({
  const stats = [
      id: 'users',
      value: 1200,
      label: 'Active Users',
      icon: Users,
      suffix: '+'
    },
      id: 'projects',
      value: 99.8,
      label: 'Success Rate',
      icon: Award,
      suffix: '%'
    },
      id: 'uptime',
      value: 99.9,
      label: 'Uptime',
      icon: CheckCircle,
      suffix: '%'
    },
      id: 'performance',
      value: 300,
      label: 'Performance Boost',
      icon: Zap,
      suffix: '%'
  ],
  animationDuration = 2000,
  className = ''
  const [animatedValues, setAnimatedValues] = useState<{ [key: string]: number }>({});
      const startTime = performance.now();
        const elapsed = currentTime - startTime;
        const progress = Math.min(elapsed / duration, 1);
        // Easing function
        const easeOutCubic = 1 - Math.pow(1 - progress, 3);
        const currentValue = start + (end - start) * easeOutCubic;
 ({
          ...prev,
          [key]: currentValue
        }));
        if (progress 
          requestAnimationFrame(animate);
      };

      requestAnimationFrame(animate);
    };

      animateValue(0, stat.value, animationDuration, stat.id);
    });
  }, [stats, animationDuration]);

  return (
        const animatedValue = animatedValues[stat.id] || 0;
        const IconComponent = stat.icon;
        return (
    <div
            const key = {stat.id}
            className="text-center p-6 bg-white/5 backdrop-blur-lg rounded-xl border border-white/10 hover:border-white/20transition-allduration-300" />
            <div className="min-h-screen bg-gradient-to-brfrom-slate-900 via-purple-900 to-slate-900 pt-20">
              <div className="min-h-screen bg-gradient-to-brfrom-slate-900 via-purple-900 to-slate-900 pt-20">
                <IconComponent className="w-5 h-5ml-2" />
              </div>

            <div className="min-h-screen bg-gradient-to-brfrom-slate-900 via-purple-900 to-slate-900 pt-20">{stat.prefix}
              {stat.suffix === '%'
                ? animatedValue.toFixed(1)
                : Math.floor(animatedValue).toLocaleString()
              {stat.suffix}

            <div className="min-h-screen bg-gradient-to-brfrom-slate-900 via-purple-900 to-slate-900 pt-20">{stat.label}
            </div>
        );
      })}
  );
};

export default ContentStatistics;
