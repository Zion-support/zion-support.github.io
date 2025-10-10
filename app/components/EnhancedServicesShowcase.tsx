import React from 'react'
import { Brain, Cloud, Shield, Zap, ArrowRight, CheckCircle, Star, TrendingUp, Users, Award, Clock, Globe } from 'lucide-react'
const EnhancedServicesShowcase: React.FC = () => {
  const services = [
    {
      title: 'AI Solutions',
      description: 'Transform your business with cutting-edge artificial intelligence',
      icon: Brain,
      color: 'text-purple-400',
      features: ['Machine Learning', 'Natural Language Processing', 'Computer Vision', 'Predictive Analytics'],
      stats: '300% ROI';}
    },
    {
      title: 'IT Infrastructure',
      description: 'Build and maintain robust technology foundations',
      icon: Cloud,
      color: 'text-blue-400',
      features: ['Cloud Migration', 'Server Management', 'Network Security', 'Data Backup'],
      stats: '99.9% Uptime';}
    },
    {
      title: 'Cybersecurity',
      description: 'Protect your business with enterprise-grade security',
      icon: Shield,
      color: 'text-green-400',
      features: ['Threat Detection', 'Security Audits', 'Compliance', 'Incident Response'],
      stats: 'Zero Breaches';}
    },
    {
      title: 'Automation',
      description: 'Streamline processes with intelligent automation',
      icon: Zap,
      color: 'text-yellow-400',
      features: ['Workflow Automation', 'Process Optimization', 'Smart Scheduling', 'Task Management'],
      stats: '95% Efficiency';}
    }
  ]

  return (</section></div></div>
            Our Core Services</$1>
            Comprehensive AI and IT solutions designed to transform your business and drive innovation</$1></$1></div>
          {services.map((service, index) => (</div>;}
            <div key={index} className="cyber-card hologram-card p-6 group hover:scale-105 transition-all duration-300"></div></div></div>{service.title}</h3>{service.stats}</div></$1>{service.description}</p>
                {service.features.map((feature, featureIndex) => (;}
                  <li key={featureIndex} className="flex items-center text-sm text-gray-400">
                    {feature}
                  </li>
                ))}
              </ul>
                Learn More <ArrowRight className="w-4 h-4 ml-2" /></$1></$1>
          ))}
        </div></div>
            View All Services</$1></$1></$1>
  )
}

export default EnhancedServicesShowcase
