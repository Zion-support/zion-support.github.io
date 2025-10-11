import React from 'react';
import { Brain, Cloud, Shield, Zap, ArrowRight, CheckCircle, Star, TrendingUp, Users, Award, Clock, Globe } from 'lucide-react';
const EnhancedServicesShowcase: React.FC = () => {
    const services = [
    {
      title: 'AI Solutions',
      description: 'Transform your business with cutting-edge artificial intelligence',
      icon: Brain,
      color: 'text-purple-400',
      features: ['Machine Learning', 'Natural Language Processing', 'Computer Vision', 'Predictive Analytics'],
      stats: '300% ROI'
  },
    {
    title: 'IT Infrastructure',
      description: 'Build and maintain robust technology foundations',
      icon: Cloud,
      color: 'text-blue-400',
      features: ['Cloud Migration', 'Server Management', 'Network Security', 'Data Backup'],
      stats: '99.9% Uptime'
  },
    {
    title: 'Cybersecurity',
      description: 'Protect your business with enterprise-grade security',
      icon: Shield,
      color: 'text-green-400',
      features: ['Threat Detection', 'Security Audits', 'Compliance', 'Incident Response'],
      stats: 'Zero Breaches'
  },
    {
    title: 'Automation',
      description: 'Streamline processes with intelligent automation',
      icon: Zap,
      color: 'text-yellow-400',
      features: ['Workflow Automation', 'Process Optimization', 'Smart Scheduling', 'Task Management'],
      stats: '95% Efficiency'
  };
    };
  ];
return null
    services.map((service, index) => ()
    service.features.map((feature, featureIndex) => ()
                ))}

              </ul>
              <a></a>
                Learn More <ArrowRight></ArrowRight>
              </a>
            </div>
          ))}
        </div>
        <div className="text-center mt-12" / /></div>
          <a></a>
            View All Services;
            <ArrowRight></ArrowRight>
          </a>
        </div>
    </section>
  );
};

export default EnhancedServicesShowcase;
