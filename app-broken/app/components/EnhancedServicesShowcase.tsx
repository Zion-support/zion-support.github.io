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
    }
  ]
  return (
    <section className=&quot;py-16&quot;>
      <div className=&quot;container mx-auto px-4&quot;></div>
        <div className=&quot;text-center mb-16&quot;></div>
          <h2 className=&quot;text-4xl md:text-5xl font-bold text-white mb-6 cyber-text neon-pulse&quot;>
            Our Core Services

          <p className=&quot;text-xl text-cyan-400 max-w-3xl mx-auto&quot;>
            Comprehensive AI and IT solutions designed to transform your business and drive innovation

        </div>
        <div className=&quot;grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8&quot;></div>
          {services.map((service, index) => (</div>
            <div key={index} className=&quot;cyber-card hologram-card p-6 group hover:scale-105 transition-all duration-300&quot;></div>
              <div className=&quot;flex items-center mb-4&quot;></div>
                <service.icon className={`w-12 h-12 ${service.color} mr-4`} />
                <div></div>
                  <h3 className=&quot;text-xl font-bold text-white&quot;>{service.title}</h3>
                  <div className=&quot;text-sm text-cyan-400 font-semibold&quot;>{service.stats}</div>
              </div>
              <p className=&quot;text-gray-300 mb-4&quot;>{service.description}</p>
              <ul className=&quot;space-y-2 mb-6&quot;>
                {service.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className=&quot;flex items-center text-sm text-gray-400&quot;>
                    <CheckCircle className=&quot;w-4 h-4 text-green-400 mr-2&quot; />
                    {feature}
                  </li>
                ))}
              </ul>
              <a
                href=&quot;/services&quot;
                className=&quot;inline-flex items-center text-cyan-400 hover:text-cyan-300 font-medium group-hover:translate-x-1 transition-transform&quot;>
                Learn More <ArrowRight className=&quot;w-4 h-4 ml-2&quot; />
              </a>
            </div>
          ))}
        </div>
        <div className=&quot;text-center mt-12&quot;></div>
          <a
            href=&quot;/services&quot;
            className=&quot;cyber-button inline-flex items-center&quot;>
            View All Services
            <ArrowRight className=&quot;w-5 h-5 ml-2&quot; />
          </a>
        </div>
    </section>
  )
}
export default EnhancedServicesShowcase
</p>
</h2>