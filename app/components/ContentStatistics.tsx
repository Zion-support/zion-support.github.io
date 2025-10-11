'use client';

import  {  useEffect, useMemo } from 'react';
import {  TrendingUp, Award } from 'lucide-react';

const ContentStatistics: React.FC = () => {
  const [animatedValues, setAnimatedValues] = useState<{ [key: string]: number }>({});

  const statistics = useMemo(() => [
    {
      icon: 
      value: 500,
      suffix: '+',
      label: 'Happy Clients',
      description: 'Satisfied customers worldwide',
      color: 'text-blue-400'
    },
    {
      icon: TrendingUp,
      value: 99.9,
      suffix: '%',
      label: 'Uptime',
      description: 'Reliable service delivery',
      color: 'text-green-400'
    },
    {
      icon: Award,
      value: 4.9,
      suffix: '/5',
      label: 'Rating',
      description: 'Highly rated by clients',
      color: 'text-yellow-400'
    },
    {
      icon: 
      value: 300,
      suffix: '%',
      label: 'Efficiency Gain',
      description: 'Average improvement',
      color: 'text-purple-400'
    }
  ], []);

  const features = [
    {
      icon: 
      title: 'Enterprise Security',
      description: 'Bank-level security with advanced encryption and compliance standards.',
      stats: ['SOC 2 Certified', 'GDPR Compliant', 'End-to-End Encryption', '24/7 Monitoring']
    },
    {
      icon: 
      title: 'Cloud Infrastructure',
      description: 'Scalable, secure, and reliable cloud solutions that grow with your business.',
      stats: ['Auto-scaling', 'High Availability', 'Global CDN', 'Disaster Recovery']
    },
    {
      icon: 
      title: 'Analytics & Insights',
      description: 'Make data-driven decisions with comprehensive analytics and business intelligence.',
      stats: ['Real-time Dashboards', 'Custom Reports', 'Predictive Analytics', 'ROI Tracking']
    },
    {
      icon: 
      title: 'AI-Powered Solutions',
      description: 'Transform your business with cutting-edge artificial intelligence and automation.',
      stats: ['Machine Learning', 'Process Automation', 'Predictive Modeling', 'Smart Analytics']
    }
  ];

  const achievements = [
    {
      title: 'Years of Experience',
      value: '10+',
      description: 'Delivering innovative solutions'
    },
    {
      title: 'Projects Completed',
      value: '1000+',
      description: 'Successful implementations'
    },
    {
      title: 'Countries Served',
      value: '50+',
      description: 'Global presence'
    },
    {
      title: 'Team Members',
      value: '100+',
      description: 'Expert professionals'
    }
  ];

  useEffect(() => {
    const timers: NodeJS.Timeout[] = [];

    statistics.forEach((stat) => {
      const timer = setInterval(() => {
        setAnimatedValues(prev => {
          const current = prev[stat.label] || 0;
          const target = stat.value;
          const increment = (target - current) / 20;
          
          if (Math.abs(target - current) < 0.1) {
            return { ...prev, [stat.label]: target };
          }
          
          return { ...prev, [stat.label]: current + increment };
        });
      }, 50);
      
      timers.push(timer);
    });

    return () => {
      timers.forEach(timer => clearInterval(timer));
    };
  }, [statistics]);

  return (
    <div>

    <div>
  
      <div>
  
        {/* Header */}
        <div>
  
          <h2>
  
            Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">Impact</span> in Numbers
          </h2>
          <p>
  
            Discover the measurable impact we've made for businesses worldwide through our innovative AI and IT solutions.
          </p>
        </div>

        {/* Statistics Grid */}
        <div>
  
          {statistics.map((stat, index) => (
            <div>
  
              <div>
  
                <stat>
  
              </div>
              <div>
  
                {Math.round(animatedValues[stat.label] || 0)}{stat.suffix}
              </div>
              <div className="text-white font-semibold mb-2">{stat.label}</div>
              <div className="text-gray-400 text-sm">{stat.description}</div>
            </div>
          ))}
        </div>

        {/* Features Section */}
        <div>
  
          <div>
  
            <h3 className="text-2xl font-bold text-white mb-4">Why We're the Right Choice</h3>
            <p>
  
              Our comprehensive solutions deliver measurable results across all key business metrics.
            </p>
          </div>

          <div>
  
            {features.map((feature, index) => (
              <div>
  
                <div>
  
                  <feature>
  
                </div>
                <h4>
  
                  {feature.title}
                </h4>
                <p className="text-gray-300 text-sm mb-4">{feature.description}</p>
                <div>
  
                  {feature.stats.map((stat, statIndex) => (
                    <div>
  
                      <CheckCircle>
  
                      {stat}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Achievements Section */}
        <div>
  
          <div>
  
            <h3 className="text-2xl font-bold text-white mb-4">Our Achievements</h3>
            <p>
  
              A track record of excellence and innovation that speaks for itself.
            </p>
          </div>

          <div>
  
            {achievements.map((achievement, index) => (
              <div>
  
                <div>
  
                  {achievement.value}
                </div>
                <div className="text-white font-semibold mb-2">{achievement.title}</div>
                <div className="text-gray-400 text-sm">{achievement.description}</div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div>
  
          <div>
  
            <h3>
  
              Ready to Join Our Success Stories?
            </h3>
            <p>
  
              Let us help you achieve similar results with our proven AI and IT solutions.
            </p>
            <div>
  
              <button>
  
                <Zap>
  
                Get Started Today
              </button>
              <button>
  
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