import React, { useState, useEffect } from 'react';
import { TrendingUp, Users, Award, Zap, Globe, Shield, Clock, Target } from 'lucide-react';

interface ContentStatisticsProps {
  className?: string;
}

interface StatItem {
  id: number;
  value: string;
  label: string;
  change: string;
  icon: React.ReactNode;
  color: string;
  description: string;
}

export default function ContentStatistics({ className = '' }: ContentStatisticsProps) {
  const [isVisible, setIsVisible] = useState(false);
  const [animatedValues, setAnimatedValues] = useState<{ [key: number]: number }>({});

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 300);
    return () => clearTimeout(timer);
  }, []);

  const stats: StatItem[] = [
    {
      id: 1,
      value: "500+",
      label: "Enterprise Clients",
      change: "+25% this year",
      icon: <Users className="w-8 h-8" />,
      color: "from-blue-500 to-cyan-500",
      description: "Fortune 500 companies trust our solutions"
    },
    {
      id: 2,
      value: "$50M+",
      label: "Annual Savings",
      change: "+300% ROI",
      icon: <TrendingUp className="w-8 h-8" />,
      color: "from-green-500 to-emerald-500",
      description: "Average cost savings for our clients"
    },
    {
      id: 3,
      value: "99.9%",
      label: "Uptime Guarantee",
      change: "99.99% achieved",
      icon: <Shield className="w-8 h-8" />,
      color: "from-red-500 to-orange-500",
      description: "Reliable infrastructure and support"
    },
    {
      id: 4,
      value: "95%",
      label: "Process Automation",
      change: "+15% efficiency",
      icon: <Zap className="w-8 h-8" />,
      color: "from-purple-500 to-pink-500",
      description: "Automated business processes"
    },
    {
      id: 5,
      value: "50+",
      label: "Countries Served",
      change: "Global expansion",
      icon: <Globe className="w-8 h-8" />,
      color: "from-indigo-500 to-blue-500",
      description: "Worldwide presence and support"
    },
    {
      id: 6,
      value: "24/7",
      label: "Expert Support",
      change: "Always available",
      icon: <Clock className="w-8 h-8" />,
      color: "from-yellow-500 to-orange-500",
      description: "Round-the-clock technical assistance"
    }
  ];

  // Animate numbers on scroll
  useEffect(() => {
    if (!isVisible) return;

    const animateNumbers = () => {
      stats.forEach((stat, index) => {
        const numericValue = parseInt(stat.value.replace(/[^\d]/g, ''));
        if (!isNaN(numericValue)) {
          let current = 0;
          const increment = numericValue / 50;
          const timer = setInterval(() => {
            current += increment;
            if (current >= numericValue) {
              current = numericValue;
              clearInterval(timer);
            }
            setAnimatedValues(prev => ({
              ...prev,
              [stat.id]: Math.floor(current)
            }));
          }, 30);
        }
      });
    };

    const timer = setTimeout(animateNumbers, 500);
    return () => clearTimeout(timer);
  }, [isVisible]);

  return (
    <div className={`bg-slate-900 rounded-lg p-8 ${className}`}>
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
          Proven Results & Performance
        </h2>
        <p className="text-gray-300 text-lg max-w-3xl mx-auto">
          Our AI solutions deliver measurable results and drive business growth across industries
        </p>
      </div>

      <div className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 transition-all duration-1000 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      }`}>
        {stats.map((stat, index) => (
          <div
            key={stat.id}
            className={`bg-gradient-to-br ${stat.color} p-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 group`}
            style={{ animationDelay: `${index * 100}ms` }}
          >
            <div className="flex items-start justify-between mb-4">
              <div className="text-white/90 group-hover:text-white transition-colors">
                {stat.icon}
              </div>
              <div className="text-white/60 text-sm font-medium">
                {stat.change}
              </div>
            </div>

            <div className="mb-4">
              <div className="text-4xl font-bold text-white mb-2">
                {stat.id === 1 ? (animatedValues[stat.id] || 0) + "+" :
                 stat.id === 2 ? "$" + (animatedValues[stat.id] || 0) + "M+" :
                 stat.id === 3 ? (animatedValues[stat.id] || 0) + "%" :
                 stat.id === 4 ? (animatedValues[stat.id] || 0) + "%" :
                 stat.id === 5 ? (animatedValues[stat.id] || 0) + "+" :
                 stat.value}
              </div>
              <div className="text-xl font-semibold text-white/90 mb-2">
                {stat.label}
              </div>
              <div className="text-white/80 text-sm leading-relaxed">
                {stat.description}
              </div>
            </div>

            {/* Progress bar for percentage stats */}
            {(stat.id === 3 || stat.id === 4) && (
              <div className="w-full bg-white/20 rounded-full h-2 mb-4">
                <div 
                  className="bg-white h-2 rounded-full transition-all duration-2000 ease-out"
                  style={{ 
                    width: `${animatedValues[stat.id] || 0}%`,
                    animationDelay: `${index * 200}ms`
                  }}
                />
              </div>
            )}

            {/* Hover effect */}
            <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <div className="text-white/60 text-xs">
                Click to learn more about this metric
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Additional Performance Metrics */}
      <div className="mt-12 bg-slate-800 rounded-lg p-6">
        <h3 className="text-2xl font-bold text-white mb-6 text-center">
          Real-Time Performance Metrics
        </h3>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="text-center">
            <div className="w-16 h-16 bg-gradient-to-r from-green-400 to-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
              <Target className="w-8 h-8 text-white" />
            </div>
            <div className="text-2xl font-bold text-white mb-2">2.1s</div>
            <div className="text-gray-300 text-sm">Average Response Time</div>
            <div className="text-green-400 text-xs mt-1">-45% improvement</div>
          </div>

          <div className="text-center">
            <div className="w-16 h-16 bg-gradient-to-r from-purple-400 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-4">
              <Award className="w-8 h-8 text-white" />
            </div>
            <div className="text-2xl font-bold text-white mb-2">15+</div>
            <div className="text-gray-300 text-sm">Industry Awards</div>
            <div className="text-purple-400 text-xs mt-1">Recognition & Excellence</div>
          </div>

          <div className="text-center">
            <div className="w-16 h-16 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full flex items-center justify-center mx-auto mb-4">
              <Zap className="w-8 h-8 text-white" />
            </div>
            <div className="text-2xl font-bold text-white mb-2">10x</div>
            <div className="text-gray-300 text-sm">Performance Boost</div>
            <div className="text-yellow-400 text-xs mt-1">vs Traditional Solutions</div>
          </div>

          <div className="text-center">
            <div className="w-16 h-16 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
              <Globe className="w-8 h-8 text-white" />
            </div>
            <div className="text-2xl font-bold text-white mb-2">100+</div>
            <div className="text-gray-300 text-sm">Global Partners</div>
            <div className="text-cyan-400 text-xs mt-1">Strategic Alliances</div>
          </div>
        </div>
      </div>

      {/* Call to Action */}
      <div className="mt-8 text-center">
        <p className="text-gray-300 mb-6">
          Ready to achieve similar results for your business?
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button className="cyber-button px-8 py-3">
            Start Your Journey
          </button>
          <button className="border border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-white px-8 py-3 rounded-lg transition-all duration-200">
            View Case Studies
          </button>
        </div>
      </div>
    </div>
  );
}