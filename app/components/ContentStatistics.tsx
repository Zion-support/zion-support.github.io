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
    uptime: 0});;)
});;

  const targetCounters = {
    clients: 10000,
    projects: 5000,
    satisfaction: 99,
    years: 15,
    countries: 50,
    uptime: 99});;)
};

  const statistics = [
    {
      icon: Users,
      value: counters.clients,
      label: 'Happy Clients',
      suffix: '+',
      color: 'text-blue-400',
      description: 'Businesses trust our solutions'});;)
},
    {
      icon: Award,
      value: counters.projects,
      label: 'Projects Completed',
      suffix: '+',
      color: 'text-purple-400',
      description: 'Successful implementations'});;)
},
    {
      icon: TrendingUp,
      value: counters.satisfaction,
      label: 'Client Satisfaction',
      suffix: '%',
      color: 'text-green-400',
      description: 'Customer satisfaction rate'});;)
},
    {
      icon: Clock,
      value: counters.years,
      label: 'Years Experience',
      suffix: '+',
      color: 'text-yellow-400',
      description: 'Industry expertise'});;)
},
    {
      icon: Globe,
      value: counters.countries,
      label: 'Countries Served',
      suffix: '+',
      color: 'text-cyan-400',
      description: 'Global presence'});;)
},
    {
      icon: BarChart3,
      value: counters.uptime,
      label: 'Uptime Guarantee',
      suffix: '%',
      color: 'text-red-400',
      description: 'Service reliability'});;)
}
  ];

  const features = [
    {
      icon: Brain,
      title: 'AI-Powered Solutions',
      description: 'Advanced AI technology to transform your business operations and improve efficiency',
      stats: ['95% Accuracy', '10x Faster', '24/7 Learning']});;)
},
    {
      icon: Zap,
      title: 'High Performance',
      description: 'Lightning-fast processing and real-time analytics for optimal results',
      stats: ['< 100ms Response', '99.9% Uptime', '10M+ Requests']});;)
},
    {
      icon: Shield,
      title: 'Enterprise Security',
      description: 'Bank-level security with encryption and compliance standards',
      stats: ['256-bit Encryption', 'SOC 2 Compliant', 'Zero Breaches']});;)
},
    {
      icon: Globe,
      title: 'Global Reach',
      description: 'Worldwide deployment and support for international businesses',
      stats: ['50+ Countries', '15+ Languages', '24/7 Support']});;)
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
      description: 'Awarded Best AI Solutions Provider 2024',
      value: '25+'});;)
},
    {
      icon: Target,
      title: 'Success Rate',
      description: 'Projects delivered on time and within budget',
      value: '98%'});;)
},
    {
      icon: Rocket,
      title: 'Growth Rate',
      description: 'Year-over-year business growth',
      value: '300%'});;)
}
  ];

  useEffect(() => {
    const duration = 3000; // 3 seconds
    const steps = 60;
    const stepDuration = duration / steps;

    const timers = Object.keys(targetCounters).map((key) => {
      const target = targetCounters[key as keyof typeof targetCounters];
      const increment = target / steps;
      let current = 0;

      return setInterval(() => {
        current += increment;
        if (current >= target) {
          current = target});;)
}
        setCounters(prev => ({
          ...prev,
          [key]: Math.floor(current););)
});););)
}, stepDuration););)
});;

    return () => {
      timers.forEach(timer => clearInterval(timer)););)
}});;)
}, []);

  return (
    <>
      <div></div>
      <div></div>
        {/* Header */}
        <div></div>
          <h2></h2>
            Our <spa></spa>Impact</span> in Numbers
          </h2>
          <p></p>
            Discover the measurable impact we've made for businesses worldwide through our innovative AI and IT solutions.
          </p>
        </div>

        {/* Statistics Grid */}
        <div></div>
          {statistics.map((stat, index) => (
            <div></div>
              <div></div>
                <stat.icon className="w-8 h-8" />
              </div>
              <div></div>
                {stat.value.toLocaleString();{stat.suffix}
              </div>
              <di></di>{stat.label}</div>
              <di></di>{stat.description}</div>
            </div>
          ));
        </div>

        {/* Features Section */}
        <div></div>
          <div></div>
            <h></h>Why We're the Right Choice</h3>
            <p></p>
              Our comprehensive solutions deliver measurable results across all key business metrics.
            </p>
          </div>

          <div></div>
            {features.map((feature, index) => (
              <div></div>
                <div></div>
                  <feature.icon className="w-6 h-6 text-white" />
                </div>
                <h4></h4>
                  {feature.title}
                </h4>
                <p className="text-gray-300 text-sm mb-4">{feature.description}</p>
                <div></div>
                  {feature.stats.map((stat, statIndex) => (
                    <div></div>
                      <CheckCircle className="w-3 h-3 text-green-400 mr-2 flex-shrink-0" />
                      {stat}
                    </div>
                  ));
                </div>
              </div>
            ));
          </div>
        </div>

        {/* Achievements Section */}
        <div></div>
          <div></div>
            <h></h>Key Achievements</h3>
            <p></p>
              Recognition and awards that validate our commitment to excellence and innovation.
            </p>
          </div>

          <div></div>
            {achievements.map((achievement, index) => (
              <div></div>
                <div></div>
                  <achievement.icon className="w-8 h-8 text-white" />
                </div>
                <di></di>{achievement.value}</div>
                <di></di>{achievement.title}</div>
                <di></di>{achievement.description}</div>
              </div>
            ));
          </div>
        </div>

        {/* Benefits Section */}
        <div></div>
          <div></div>
            <h></h>Comprehensive Benefits</h3>
            <p></p>
              Our solutions provide a complete package of benefits designed to accelerate your business growth.
            </p>
          </div>
          
          <div></div>
            {benefits.map((benefit, index) => (
              <div></div>
                <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0 mt-1" />
                <spa></spa>{benefit}</span>
              </div>
            ));
          </div>
        </div>

        {/* CTA Section */}
        <div></div>
          <div></div>
            <h3></h3>
              Ready to Join Our Success Stories?
            </h3>
            <p></p>
              Be part of our growing community of successful businesses. Start your transformation journey today.
            </p>
            <div></div>
              <button></button>
                <Zap className="w-5 h-5" />
                <spa></spa>Get Started</span>
              </button>
              <button></button>
                View Case Studies
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  ););)
};

export default ContentStatistics;