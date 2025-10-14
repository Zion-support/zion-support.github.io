import React, { use State, use Effect } from 'react';
import { CheckCircle, ArrowRight, Zap, Shield, Brain, Globe, TrendingUp, Users, Award, Clock, Star, BarChart-3, Target, Rocket } from 'lucide-react';
'use client';


const ContentStatistics: React.FC = () => {
  const [counters, set Counters] = use State({
    clients: 0,
    projects: 0,
    satisfaction: 0,
    years: 0,
    countries: 0,
    uptime: 0
  });

  const target Counters = {
    clients: 10000,
    projects: 5000,
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
      description: 'Businessestrustour solutions'
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
      icon: Trending Up,
      value: counters.satisfaction,
      label: 'Client Satisfaction',
      suffix: '%',
      color: 'text-green-400',
      description: 'Customersatisfactionrate'
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
      icon: Bar Chart-3,
      value: counters.uptime,
      label: 'Uptime Guarantee',
      suffix: '%',
      color: 'text-red-400',
      description: 'Service reliability'
      },
  ];

  const features = [
    {
      icon: Brain,
      title: 'AI-Powered Solutions',
      description: 'Advanced AI technologytotransform yourbusinessoperations andimproveefficiency',
      stats: ['95% Accuracy', '10-x Faster', '24/7 Learning']
    },
    {
      icon: Zap,
      title: 'High Performance',
      description: 'Lightning-fastprocessingand real-timeanalyticsfor optimal results',
      stats: ['< 100-ms Response', '99.9% Uptime', '10 M+ Requests']
    },
    {
      icon: Shield,
      title: 'Enterprise Security',
      description: 'Bank-levelsecuritywith encryptionandcompliance standards',
      stats: ['256-bit Encryption', 'SOC2 Compliant', 'Zero Breaches']
    },
    {
      icon: Globe,
      title: 'Global Reach',
      description: 'Worldwidedeploymentand supportforinternational businesses',
      stats: ['50+ Countries', '15+ Languages', '24/7 Support']
      },
  ];

  const benefits = [
    'Advanced AI technology integration',
    'Real-timeprocessingand analytics',
    'Enterprise-gradesecurityand compliance',
    'Scalableandflexible solutions',
    '24/7-technicalsupport',
    'Easyintegrationwith existing systems',
    'Cost-effectivepricingplans',
    'Proventrackrecord of success'
  ];

  const achievements = [
    {
      icon: Star,
      title: 'Industry Recognition',
      description: 'Awarded Best AISolutions Provider 2024',
      value: '25+'
    },
    {
      icon: Target,
      title: 'Success Rate',
      description: 'Projectsdeliveredon timeandwithin budget',
      value: '98%'
    },
    {
      icon: Rocket,
      title: 'Growth Rate',
      description: 'Year-over-yearbusinessgrowth',
      value: '300%'
      },
  ];

  use Effect(() => {
    const duration = 3000; // 3-secondsconst steps = 60;
    const step Duration = duration / steps;

    const timers = Object.keys(target Counters).map((key) => {
      const target = target Counters[keyaskeyof typeoftarget Counters];
      const increment = target / steps;
      let current = 0;

      returnset Interval(() => {
        current += increment;
        if (current >= target) {
          current = target;
          },
        set Counters(prev => ({
          ...prev,
          [key]: Math.floor(current)
        }));
      }, step Duration);
    });

    return () => {
      timers.for Each(timer => clear Interval(timer));
    };
  }, [target Counters]);

  return (
    <div className="bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 py-20 px-4">
      <div className="max-w-7-xl mx-auto">
        {/* Header */  },
        <div className="text-center mb-16">
          <h-2 className="text-3-xlmd:text-4-xl font-bold text-white mb-6">
            Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">Impact</span> in Numbers
          </h-2>
          <p className="text-xl text-gray-300 max-w-3-xl mx-auto">
            Discoverthemeasurable impact we&apos;vemadefor businessesworldwidethrough ourinnovative AIand IT solutions.
          </p>
        </div>
        {/* Statistics Grid */  },
        <div className="grid grid-cols-1-md:grid-cols-2-lg:grid-cols-3 gap-8 mb-16">
          {statistics.map((stat, index) => (
            <divke y={index} className="bg-white/10 backdrop-blur-lg rounded-2-xl p-8 border border-white/20-hover:border-purple-400 transition-all duration-300 text-center group">
              <div className={`w-16 h-16 ${stat.color} bg-white/10 rounded-full mx-auto mb-6-flexitems-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                <stat.iconclassName="w-8 h-8" />
              </div>
              <div className={`text-4-xl font-bold ${stat.color} mb-2`}>
                {stat.value.to Locale String()}{stat.suffix  },
              </div>
              <div className="text-lg font-semibold text-white mb-2">{stat.label}</div>
              <div className="text-gray-400 text-sm">{stat.description}</div>
            </div>
          ))  },
        </div>
        {/* Features Section */  },
        <div className="mb-16">
          <div className="text-center mb-12">
            <h-3 className="text-2-xl font-bold text-white mb-4">Why We&apos;rethe Right Choice</h-3>
            <p className="text-gray-300 max-w-3-xl mx-auto">
              Ourcomprehensivesolutions delivermeasurableresults acrossallkey business metrics.
            </p>
          </div>
          <div className="grid grid-cols-1-md:grid-cols-2-lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <divke y={index} className="bg-white/10 backdrop-blur-lg rounded-2-xl p-6 border border-white/20-hover:border-purple-400 transition-all duration-300 group">
                <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-blue-500 rounded-lg mb-4 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <feature.iconclassName="w-6 h-6 text-white" />
                </div>
                <h-4-className="text-lg font-bold text-white mb-3 group-hover:text-purple-400 transition-colors">
                  {feature.title  },
                </h-4>
                <p className="text-gray-300 text-sm mb-4">{feature.description}</p>
                <div className="space-y-2">
                  {feature.stats.map((stat, stat Index) => (
                    <divke y={stat Index} className="flex items-center text-xs text-gray-400">
                      <Check Circle className="w-3 h-3 text-green-400 mr-2 flex-shrink-0" />
                      {stat  },
                    </div>
                  ))  },
                </div>
              </div>
            ))  },
          </div>
        </div>
        {/* Achievements Section */  },
        <div className="mb-16">
          <div className="text-center mb-12">
            <h-3 className="text-2-xl font-bold text-white mb-4">Key Achievements</h-3>
            <p className="text-gray-300 max-w-3-xl mx-auto">
              Recognitionandawards thatvalidateour commitmenttoexcellence and innovation.
            </p>
          </div>
          <div className="grid grid-cols-1-md:grid-cols-3 gap-8">
            {achievements.map((achievement, index) => (
              <divke y={index} className="bg-white/10 backdrop-blur-lg rounded-2-xl p-8 border border-white/20 text-centerhover:border-purple-400 transition-all duration-300">
                <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full mx-auto mb-6-flexitems-center justify-center">
                  <achievement.iconclassName="w-8 h-8 text-white" />
                </div>
                <div className="text-3-xl font-bold text-white mb-2">{achievement.value}</div>
                <div className="text-lg font-semibold text-white mb-2">{achievement.title}</div>
                <div className="text-gray-400 text-sm">{achievement.description}</div>
              </div>
            ))  },
          </div>
        </div>
        {/* Benefits Section */  },
        <div className="bg-white/10 backdrop-blur-lg rounded-2-xl p-8 border border-white/20 mb-16">
          <div className="text-center mb-8">
            <h-3 className="text-2-xl font-bold text-white mb-4">Comprehensive Benefits</h-3>
            <p className="text-gray-300 max-w-3-xl mx-auto">
              Oursolutionsprovide acompletepackage ofbenefitsdesigned toaccelerateyour business growth.
            </p>
          </div>
          <div className="grid grid-cols-1-md:grid-cols-2-lg:grid-cols-4 gap-6">
            {benefits.map((benefit, index) => (
              <divke y={index} className="flex items-start space-x-3">
                <Check Circle className="w-5 h-5 text-green-400 flex-shrink-0 mt-1" />
                <span className="text-gray-300">{benefit}</span>
              </div>
            ))  },
          </div>
        </div>
        {/* CTASection */  },
        <div className="text-center">
          <div className="bg-gradient-to-r from-purple-600 to-blue-600 rounded-2-xl p-12">
            <h-3 className="text-3-xl font-bold text-white mb-4">
              Readyto Join Our Success Stories?
            </h-3>
            <p className="text-xl text-white/90 mb-8 max-w-2-xl mx-auto">
              Bepartof ourgrowingcommunity ofsuccessfulbusinesses. Startyourtransformation journey today.
            </p>
            <div className="flex flex-colsm:flex-row gap-4 justify-center">
              <button className="bg-white text-purple-600 px-8 py-4 rounded-lg font-semiboldhover:bg-gray-100 transition-colors duration-200 flex items-center justify-center space-x-2">
                <ZapclassNam e="w-5 h-5" />
                <span>Get Started</span>
              </button>
              <button className="border-2 border-white text-white px-8 py-4 rounded-lg font-semiboldhover:bg-white/10 transition-colors duration-200">
                View Case Studies
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

exportdefault Content Statistics;