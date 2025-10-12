<<<<<<< HEAD


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
=======
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
>>>>>>> cursor/fix-errors-and-merge-to-main-b918

export default function ContentStatistics() {
  return (
<<<<<<< HEAD
        const animatedValue = animatedValues[stat.id] || 0;
        const IconComponent = stat.icon;
        return (

            <div className="text-3 xl font-boldtext-whitemb-2">{stat.prefix}

              {stat.suffix === '%'
                ? animatedValue.toFixed(1)
                : Math.floor(animatedValue).toLocaleString()
              {stat.suffix}

            <div className="text-gray-300text-sm">{stat.label}

        );

      })}
  );
};

export default ContentStatistics;

=======
    <>
      <Helmet>
        <title>Content Statistics - Zion Tech Group</title>
        <meta name="description" content="Professional content statistics by Zion Tech Group. Transform your business with our expert solutions." />
      </Helmet>
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">
          <h1 className="text-4xl font-bold text-white mb-6">Content Statistics</h1>
          <p className="text-lg text-gray-300 mb-8">Professional content statistics coming soon.</p>
          <Link
            to="/contact"
            className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center mx-auto w-fit"
          >
            Contact Us
            <ArrowRight className="w-5 h-5 ml-2" />
          </Link>
        </div>
      </div>
    </>
  );
}
>>>>>>> cursor/fix-errors-and-merge-to-main-b918
