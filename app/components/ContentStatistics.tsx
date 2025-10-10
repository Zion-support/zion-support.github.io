'use client';

import React, { useState, useEffect } from 'react';
import { Star, Users, TrendingUp, Zap, CheckCircle, ArrowRight, Globe, Shield, Brain } from 'lucide-react';

const ContentStatistics: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [counts, setCounts] = useState({
    clients: 0,
    projects: 0,
    uptime: 0,
    satisfaction: 0
  });

  const stats = [
    {
      icon: Users,
      value: '500+',
      label: 'Happy Clients',
      description: 'Businesses transformed worldwide'
    },
    {
      icon: Zap,
      value: '1000+',
      label: 'Projects Completed',
      description: 'Successful implementations'
    },
    {
      icon: Shield,
      value: '99.9%',
      label: 'Uptime Guarantee',
      description: 'Reliable service delivery'
    },
    {
      icon: Star,
      value: '4.9/5',
      label: 'Client Satisfaction',
      description: 'Average rating from clients'
    }
  ];

  const achievements = [
    {
      icon: Brain,
      title: 'AI Innovation Award 2024',
      description: 'Recognized for breakthrough AI solutions'
    },
    {
      icon: Globe,
      title: 'Global Expansion',
      description: 'Serving clients in 50+ countries'
    },
    {
      icon: TrendingUp,
      title: '300% Growth',
      description: 'Year-over-year revenue growth'
    },
    {
      icon: CheckCircle,
      title: 'ISO 27001 Certified',
      description: 'Highest security standards'
    }
  ];

  useEffect(() => {
    setIsVisible(true);
    
    // Animate counters
    const animateCounters = () => {
      const targets = { clients: 500, projects: 1000, uptime: 99.9, satisfaction: 4.9 };
      const duration = 2000;
      const steps = 60;
      const stepDuration = duration / steps;
      
      let step = 0;
      const timer = setInterval(() => {
        step++;
        const progress = step / steps;
        const easeOut = 1 - Math.pow(1 - progress, 3);
        
        setCounts({
          clients: Math.floor(targets.clients * easeOut),
          projects: Math.floor(targets.projects * easeOut),
          uptime: Math.round(targets.uptime * easeOut * 10) / 10,
          satisfaction: Math.round(targets.satisfaction * easeOut * 10) / 10
        });
        
        if (step >= steps) {
          clearInterval(timer);
        }
      }, stepDuration);
    };

    const timer = setTimeout(animateCounters, 500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-8 mb-16 border border-white/20">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-white mb-4">
            Trusted by <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">Leading Companies</span>
          </h2>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Our proven track record speaks for itself. See why businesses worldwide choose Zion Tech Group for their AI and IT needs.
          </p>
        </div>

        {/* Statistics Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {stats.map((stat, index) => (
            <div 
              key={index} 
              className={`text-center transition-all duration-1000 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
              style={{ transitionDelay: `${index * 200}ms` }}
            >
              <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <stat.icon className="w-8 h-8 text-white" />
              </div>
              <div className="text-3xl font-bold text-white mb-2">
                {stat.value}
              </div>
              <div className="text-cyan-400 font-semibold mb-2">{stat.label}</div>
              <div className="text-gray-400 text-sm">{stat.description}</div>
            </div>
          ))}
        </div>

        {/* Achievements */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {achievements.map((achievement, index) => (
            <div 
              key={index}
              className={`bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20 hover:border-cyan-400/50 transition-all duration-300 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
              style={{ transitionDelay: `${(index + 4) * 200}ms` }}
            >
              <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-lg flex items-center justify-center mb-4">
                <achievement.icon className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-lg font-bold text-white mb-2">{achievement.title}</h3>
              <p className="text-gray-300 text-sm">{achievement.description}</p>
            </div>
          ))}
        </div>

        {/* Client Testimonials */}
        <div className="bg-gradient-to-r from-cyan-500/10 to-purple-500/10 rounded-2xl p-8 border border-cyan-500/20">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-white mb-4">What Our Clients Say</h3>
            <p className="text-gray-300">Real feedback from real businesses</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="flex justify-center mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                ))}
              </div>
              <p className="text-gray-300 mb-4 italic">
                "Zion Tech Group transformed our business with their AI solutions. The results exceeded our expectations."
              </p>
              <div className="text-white font-semibold">Sarah Johnson</div>
              <div className="text-cyan-400 text-sm">CEO, TechCorp</div>
            </div>

            <div className="text-center">
              <div className="flex justify-center mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                ))}
              </div>
              <p className="text-gray-300 mb-4 italic">
                "Outstanding support and innovative solutions. They helped us scale our operations efficiently."
              </p>
              <div className="text-white font-semibold">Michael Chen</div>
              <div className="text-cyan-400 text-sm">CTO, InnovateLabs</div>
            </div>

            <div className="text-center">
              <div className="flex justify-center mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                ))}
              </div>
              <p className="text-gray-300 mb-4 italic">
                "The best technology partner we've ever worked with. Highly recommended for any AI project."
              </p>
              <div className="text-white font-semibold">Emily Watson</div>
              <div className="text-cyan-400 text-sm">Director, DataFlow Inc</div>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <button className="inline-flex items-center gap-2 bg-gradient-to-r from-cyan-500 to-purple-500 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-600 transition-all duration-300">
            Join Our Success Stories
            <ArrowRight className="w-5 h-5" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ContentStatistics;