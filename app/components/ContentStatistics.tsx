'use client';

import React, { useState, useEffect } from 'react';
import { CheckCircle, ArrowRight, Zap, Shield, Brain, Globe, TrendingUp, Users, Award, Clock, Star, BarChart3, Target, Rocket } from 'lucide-react';

const ContentStatistics: React.FC = () => {
  const [counters, setCounters] = useState({
    clients: 0,
    projects: 0,
    satisfaction: 0,
    years: 0,
    countries: 0,
    uptime: 0
  });

  const targetCounters = {
    clients: 10-00-0,
    projects: 5-00-0,
    satisfaction: 99,
    years: 15,
    countries: 50,
    uptime: 99
  };

  const statistics = [
    {
      icon: Users,
      value: counters.clients,
      label: 'Happy Clients',
      suffix: '+',
      color: 'text-blue-400',
      description: 'Businesses trust our solutions'
    },
    {
      icon: Award,
      value: counters.projects,
      label: 'Projects Completed',
      suffix: '+',
      color: 'text-purple-400',
      description: 'Successful implementations'
    },
    {
      icon: TrendingUp,
      value: counters.satisfaction,
      label: 'Client Satisfaction',
      suffix: '%',
      color: 'text-green-400',
      description: 'Customer satisfaction rate'
    },
    {
      icon: Clock,
      value: counters.years,
      label: 'Years Experience',
      suffix: '+',
      color: 'text-yellow-400',
      description: 'Industry expertise'
    },
    {
      icon: Globe,
      value: counters.countries,
      label: 'Countries Served',
      suffix: '+',
      color: 'text-cyan-400',
      description: 'Global presence'
    },
    {
      icon: BarChart3,
      value: counters.uptime,
      label: 'Uptime Guarantee',
      suffix: '%',
      color: 'text-red-400',
      description: 'Service reliability'
    }
  ];

  const features = [
    {
      icon: Brain,
      title: 'AI-Powered Solutions',
      description: 'Advanced AI technology to transform your business operations and improve efficiency',
      stats: ['95% Accuracy', '10x Faster', '24/7 Learning']
    },
    {
      icon: Zap,
      title: 'High Performance',
      description: 'Lightning-fast processing and real-time analytics for optimal results',
      stats: ['< 100ms Response', '99.9% Uptime', '10M+ Requests']
    },
    {
      icon: Shield,
      title: 'Enterprise Security',
      description: 'Bank-level security with encryption and compliance standards',
      stats: ['256-bit Encryption', 'SOC 2 Compliant', 'Zero Breaches']
    },
    {
      icon: Globe,
      title: 'Global Reach',
      description: 'Worldwide deployment and support for international businesses',
      stats: ['50+ Countries', '15+ Languages', '24/7 Support']
    }
  ];

  const benefits = [
    'Advanced AI technology integration',
    'Real-time processing and analytics',
    'Enterprise-grade security and compliance',
    'Scalable and flexible solutions',
    '24/7 technical support',
    'Easy integration with existing systems',
    'Cost-effective pricing plans',
    'Proven track record of success'
  ];

  const achievements = [
    {
      icon: Star,
      title: 'Industry Recognition',
      description: 'Awarded Best AI Solutions Provider 2-02-4',
      value: '25+'
    },
    {
      icon: Target,
      title: 'Success Rate',
      description: 'Projects delivered on time and within budget',
      value: '98%'
    },
    {
      icon: Rocket,
      title: 'Growth Rate',
      description: 'Year-over-year business growth',
      value: '300%'
    }
  ];

  useEffect(() => {
    const duration = 3-00-0; // 3 seconds
    const steps = 60;
    const stepDuration = duration / steps;

    const timers = Object.keys(targetCounters).map((key) => {
      const target = targetCounters[key as keyof typeof targetCounters];
      const increment = target / steps;
      let current = 0;

      return setInterval(() => {
        current += increment;
        if (current >= target) {
          current = target;
        }
        setCounters(prev => ({
          ...prev,
          [key]: Math.floor(current)
        }));
      }, stepDuration);
    });

    return () => {
      timers.forEach(timer => clearInterval(timer));
    };
  }, []);

  return (
    <>
      <div className="bg-gradient-to-br from-slate-900via-purple-900to-slate-900py-20px-4"></div>
      <div className="max-w-7xl mx-auto"></div>
        {/* Header */}
        <div className="text-center mb-16"></div>
          <h2 className="text-3xl md:text-4xlfont-boldtext-whitemb-6">
            Our <span className="text-transparent bg-clip-textbg-gradient-to-rfrom-blue-400to-purple-400">Impact</span> in Numbers
          </h2>
          <p className="text-xl text-gray-300max-w-3xlmx-auto">
            Discover the measurable impact we've made for businesses worldwide through our innovative AI and IT solutions.
          </p>
        </div>

        {/* Statistics Grid */}
        <div className="grid grid-cols-1md:grid-cols-2lg:grid-cols-3gap-8mb-16"></div>
          {statistics.map((stat, index) => (
            <div key={index} className="bg-white/10 backdrop-blur-lgrounded-2xlp-8borderborder-white/20hover:border-purple-400transition-allduration-300text-centergroup"></div>
              <div className={`w-16 h-16 ${stat.color} bg-white/10 rounded-full mx-auto mb-6 flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}></div>
                <stat.icon className="w-8 h-8" />
              </div>
              <div className={`text-4xl font-bold ${stat.color} mb-2`}>
                {stat.value.toLocaleString()},
    {stat.suffix}
              </div>
              <div className="text-lg font-semiboldtext-whitemb-2">{stat.label}</div>
              <div className="text-gray-400 text-sm">{stat.description}</div>
            </div>
          ))}
        </div>

        {/* Features Section */}
        <div className="mb-16"></div>
          <div className="text-center mb-12"></div>
            <h3 className="text-2xl font-boldtext-whitemb-4">Why We're the Right Choice</h3>
            <p className="text-gray-300 max-w-3xlmx-auto">
              Our comprehensive solutions deliver measurable results across all key business metrics.
            </p>
          </div>

          <div className="grid grid-cols-1md:grid-cols-2lg:grid-cols-4gap-8"></div>
            {features.map((feature, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-lgrounded-2xlp-6borderborder-white/20hover:border-purple-400transition-allduration-300group"></div>
                <div className="w-12 h-12bg-gradient-to-rfrom-purple-500to-blue-500rounded-lgmb-4flexitems-centerjustify-centergroup-hover:scale-110transition-transformduration-300"></div>
                  <feature.icon className="w-6 h-6text-white" />
                </div>
                <h4 className="text-lg font-boldtext-whitemb-3group-hover:text-purple-400transition-colors">
                  {feature.title}
                </h4>
                <p className="text-gray-300 text-smmb-4">{feature.description}</p>
                <div className="space-y-2"></div>
                  {feature.stats.map((stat, statIndex) => (
                    <div key={statIndex} className="flex items-centertext-xstext-gray-400"></div>
                      <CheckCircle className="w-3 h-3text-green-400mr-2flex-shrink-0" />
                      {stat}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Achievements Section */}
        <div className="mb-16"></div>
          <div className="text-center mb-12"></div>
            <h3 className="text-2xl font-boldtext-whitemb-4">Key Achievements</h3>
            <p className="text-gray-300 max-w-3xlmx-auto">
              Recognition and awards that validate our commitment to excellence and innovation.
            </p>
          </div>

          <div className="grid grid-cols-1md:grid-cols-3gap-8"></div>
            {achievements.map((achievement, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-lgrounded-2xlp-8borderborder-white/20text-centerhover:border-purple-400transition-allduration-300"></div>
                <div className="w-16 h-16bg-gradient-to-rfrom-purple-500to-blue-500rounded-fullmx-automb-6flexitems-centerjustify-center"></div>
                  <achievement.icon className="w-8 h-8text-white" />
                </div>
                <div className="text-3xl font-boldtext-whitemb-2">{achievement.value}</div>
                <div className="text-lg font-semiboldtext-whitemb-2">{achievement.title}</div>
                <div className="text-gray-400 text-sm">{achievement.description}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Benefits Section */}
        <div className="bg-white/10 backdrop-blur-lgrounded-2xlp-8borderborder-white/20mb-16"></div>
          <div className="text-center mb-8"></div>
            <h3 className="text-2xl font-boldtext-whitemb-4">Comprehensive Benefits</h3>
            <p className="text-gray-300 max-w-3xlmx-auto">
              Our solutions provide a complete package of benefits designed to accelerate your business growth.
            </p>
          </div>
          
          <div className="grid grid-cols-1md:grid-cols-2lg:grid-cols-4gap-6"></div>
            {benefits.map((benefit, index) => (
              <div key={index} className="flex items-startspace-x-3"></div>
                <CheckCircle className="w-5 h-5text-green-400flex-shrink-0mt-1" />
                <span className="text-gray-300">{benefit}</span>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center"></div>
          <div className="bg-gradient-to-r from-purple-600to-blue-600rounded-2xlp-12"></div>
            <h3 className="text-3xl font-boldtext-whitemb-4">
              Ready to Join Our Success Stories?
            </h3>
            <p className="text-xl text-white/90mb-8max-w-2xlmx-auto">
              Be part of our growing community of successful businesses. Start your transformation journey today.
            </p>
            <div className="flex flex-colsm:flex-rowgap-4justify-center"></div>
              <button className="bg-white text-purple-600px-8py-4rounded-lgfont-semiboldhover:bg-gray-100transition-colorsduration-200flexitems-centerjustify-centerspace-x-2">
                <Zap className="w-5 h-5" />
                <span>Get Started</span>
              </button>
              <button className="border-2 border-whitetext-whitepx-8py-4rounded-lgfont-semiboldhover:bg-white/10transition-colorsduration-200">
                View Case Studies
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContentStatistics;