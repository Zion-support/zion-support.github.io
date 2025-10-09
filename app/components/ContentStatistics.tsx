'use client';
import React, { useState, useEffect } from 'react';
import { TrendingUp, Users, Award, Clock, DollarSign, Target, Zap, Globe } from 'lucide-react';

interface StatItem {
  id: string;
  value: string;
  label: string;
  description: string;
  icon: React.ComponentType<any>;
  color: string;
  trend?: {
    value: number;
    direction: 'up' | 'down' | 'stable';
  };
}

const ContentStatistics: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [animatedStats, setAnimatedStats] = useState<Record<string, number>>({});

  const stats: StatItem[] = [
    {
      id: 'savings',
      value: '$50M+',
      label: 'Annual Savings',
      description: 'Total cost savings delivered to our clients',
      icon: DollarSign,
      color: 'text-green-500',
      trend: { value: 15, direction: 'up' }
    },
    {
      id: 'automation',
      value: '95%',
      label: 'Process Automation',
      description: 'Average automation achieved across projects',
      icon: Zap,
      color: 'text-blue-500',
      trend: { value: 8, direction: 'up' }
    },
    {
      id: 'roi',
      value: '300%',
      label: 'Average ROI',
      description: 'Return on investment for our solutions',
      icon: TrendingUp,
      color: 'text-purple-500',
      trend: { value: 12, direction: 'up' }
    },
    {
      id: 'projects',
      value: '500+',
      label: 'Projects Delivered',
      description: 'Successful projects completed worldwide',
      icon: Target,
      color: 'text-orange-500',
      trend: { value: 25, direction: 'up' }
    },
    {
      id: 'clients',
      value: '200+',
      label: 'Enterprise Clients',
      description: 'Fortune 500 and growing companies served',
      icon: Users,
      color: 'text-cyan-500',
      trend: { value: 18, direction: 'up' }
    },
    {
      id: 'uptime',
      value: '99.9%',
      label: 'System Uptime',
      description: 'Reliability of our cloud infrastructure',
      icon: Clock,
      color: 'text-red-500',
      trend: { value: 0.1, direction: 'up' }
    },
    {
      id: 'countries',
      value: '50+',
      label: 'Countries Served',
      description: 'Global presence and reach',
      icon: Globe,
      color: 'text-indigo-500',
      trend: { value: 5, direction: 'up' }
    },
    {
      id: 'awards',
      value: '25+',
      label: 'Industry Awards',
      description: 'Recognition for innovation and excellence',
      icon: Award,
      color: 'text-yellow-500',
      trend: { value: 3, direction: 'up' }
    }
  ];

  useEffect(() => {
    // Intersection Observer for animation trigger
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
          }
        });
      },
      { threshold: 0.1 }
    );

    const element = document.getElementById('stats-section');
    if (element) {
      observer.observe(element);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (isVisible) {
      // Animate numbers
      stats.forEach((stat) => {
        const numericValue = parseFloat(stat.value.replace(/[^\d.]/g, ''));
        if (!isNaN(numericValue)) {
          animateNumber(stat.id, 0, numericValue, 2000);
        }
      });
    }
  }, [isVisible]);

  const animateNumber = (id: string, start: number, end: number, duration: number) => {
    const startTime = performance.now();
    
    const animate = (currentTime: number) => {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);
      
      // Easing function for smooth animation
      const easeOutCubic = 1 - Math.pow(1 - progress, 3);
      const currentValue = start + (end - start) * easeOutCubic;
      
      setAnimatedStats(prev => ({
        ...prev,
        [id]: Math.floor(currentValue)
      }));
      
      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };
    
    requestAnimationFrame(animate);
  };

  const getTrendIcon = (direction: string) => {
    switch (direction) {
      case 'up':
        return '↗️';
      case 'down':
        return '↘️';
      default:
        return '→';
    }
  };

  const getTrendColor = (direction: string) => {
    switch (direction) {
      case 'up':
        return 'text-green-500';
      case 'down':
        return 'text-red-500';
      default:
        return 'text-gray-500';
    }
  };

  return (
    <section id="stats-section" className="py-16 bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Our Impact in Numbers
          </h2>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto">
            Measurable results that demonstrate our commitment to delivering exceptional value
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat) => {
            const IconComponent = stat.icon;
            const animatedValue = animatedStats[stat.id];
            const displayValue = animatedValue !== undefined 
              ? stat.value.replace(/\d+/, animatedValue.toString())
              : stat.value;

            return (
              <div
                key={stat.id}
                className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 text-center hover:scale-105 transition-all duration-300 border border-white/20 group"
              >
                <div className={`text-4xl mb-4 group-hover:scale-110 transition-transform duration-300 ${stat.color}`}>
                  <IconComponent className="mx-auto" />
                </div>
                
                <div className="text-3xl md:text-4xl font-bold text-white mb-2">
                  {isVisible ? displayValue : '0'}
                </div>
                
                <div className="text-lg font-semibold text-gray-300 mb-2">
                  {stat.label}
                </div>
                
                <div className="text-sm text-gray-400 mb-4">
                  {stat.description}
                </div>

                {stat.trend && (
                  <div className={`flex items-center justify-center text-sm ${getTrendColor(stat.trend.direction)}`}>
                    <span className="mr-1">{getTrendIcon(stat.trend.direction)}</span>
                    <span>+{stat.trend.value}% this year</span>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Additional Info */}
        <div className="mt-16 text-center">
          <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
            <h3 className="text-2xl font-bold text-white mb-4">
              Trusted by Industry Leaders
            </h3>
            <p className="text-gray-300 mb-6 max-w-3xl mx-auto">
              Our solutions have been implemented across various industries, from healthcare and finance 
              to manufacturing and retail, delivering consistent results and measurable value.
            </p>
            <div className="flex flex-wrap justify-center gap-8 text-gray-400">
              <div className="text-center">
                <div className="text-2xl font-bold text-white">Fortune 500</div>
                <div className="text-sm">Companies Served</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-white">24/7</div>
                <div className="text-sm">Support Available</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-white">ISO 27001</div>
                <div className="text-sm">Security Certified</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContentStatistics;