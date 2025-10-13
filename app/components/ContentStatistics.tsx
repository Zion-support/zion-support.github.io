import React, { useState, useEffect } from 'react';
import { CheckCircle, ArrowRight, Zap, Shield, Brain, Globe, TrendingUp, Users, Award, Clock } from 'lucide-react';

interface StatItem {
  id: string;
  value: number;
  label: string;
  icon: React.ComponentType<{ className?: string }>;
  color: string;
  bgColor: string;
}

const ContentStatistics: React.FC = () => {
  const [counters, setCounters] = useState({
    clients: 0,
    projects: 0,
    satisfaction: 0,
    years: 0
  });

  const targetCounters = {
    clients: 500,
    projects: 1000,
    satisfaction: 99,
    years: 10
  };

  const stats: StatItem[] = [
    {
      id: 'clients',
      value: counters.clients,
      label: 'Happy Clients',
      icon: Users,
      color: 'text-blue-600',
      bgColor: 'bg-blue-50'
    },
    {
      id: 'projects',
      value: counters.projects,
      label: 'Projects Completed',
      icon: Award,
      color: 'text-green-600',
      bgColor: 'bg-green-50'
    },
    {
      id: 'satisfaction',
      value: counters.satisfaction,
      label: 'Client Satisfaction %',
      icon: TrendingUp,
      color: 'text-purple-600',
      bgColor: 'bg-purple-50'
    },
    {
      id: 'years',
      value: counters.years,
      label: 'Years of Experience',
      icon: Clock,
      color: 'text-orange-600',
      bgColor: 'bg-orange-50'
    }
  ];

  useEffect(() => {
    const animateCounters = () => {
      const duration = 2000; // 2 seconds
      const steps = 60; // 60 steps
      const stepDuration = duration / steps;

      let currentStep = 0;
      const interval = setInterval(() => {
        currentStep++;
        const progress = currentStep / steps;
        
        setCounters({
          clients: Math.floor(targetCounters.clients * progress),
          projects: Math.floor(targetCounters.projects * progress),
          satisfaction: Math.floor(targetCounters.satisfaction * progress),
          years: Math.floor(targetCounters.years * progress)
        });

        if (currentStep >= steps) {
          clearInterval(interval);
          setCounters(targetCounters);
        }
      }, stepDuration);

      return () => clearInterval(interval);
    };

    // Start animation when component mounts
    const timer = setTimeout(animateCounters, 500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="bg-gray-50 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Our Impact in Numbers
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We're proud of the results we've achieved for our clients and the trust they've placed in us.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat) => (
            <div key={stat.id} className="text-center">
              <div className={`inline-flex items-center justify-center w-16 h-16 rounded-full ${stat.bgColor} mb-4`}>
                <stat.icon className={`w-8 h-8 ${stat.color}`} />
              </div>
              <div className={`text-4xl font-bold ${stat.color} mb-2`}>
                {stat.id === 'satisfaction' ? `${stat.value}%` : 
                 stat.id === 'years' ? `${stat.value}+` : 
                 stat.value.toLocaleString()}
              </div>
              <div className="text-gray-600 font-medium">{stat.label}</div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <div className="bg-white rounded-lg shadow-lg p-8 max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">
              Why Choose Zion Tech?
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="flex items-start gap-3">
                <CheckCircle className="w-6 h-6 text-green-600 mt-1" />
                <div>
                  <h4 className="font-semibold text-gray-900 mb-1">Proven Expertise</h4>
                  <p className="text-gray-600 text-sm">
                    Over 10 years of experience in AI and IT solutions
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="w-6 h-6 text-green-600 mt-1" />
                <div>
                  <h4 className="font-semibold text-gray-900 mb-1">Quality Assurance</h4>
                  <p className="text-gray-600 text-sm">
                    99% client satisfaction rate with rigorous testing
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="w-6 h-6 text-green-600 mt-1" />
                <div>
                  <h4 className="font-semibold text-gray-900 mb-1">24/7 Support</h4>
                  <p className="text-gray-600 text-sm">
                    Round-the-clock support for all our clients
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContentStatistics;