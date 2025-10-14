import React from 'react'
import { Brain, Cloud, Shield, Zap, ArrowRight, CheckCircle, Star, TrendingUp, Users, Award, Clock, Globe } from 'lucide-react'
const EnhancedServicesShowcase: React.FC  = () => {
    const services = [
    {
      title: 'AI Solutions',
      description: 'Transform your business with cutting-edge artificial intelligence',
      icon: Brain,
      color: 'text-purple-400',
      features: ['Machine Learning', 'Natural Language Processing', 'Computer Vision', 'Predictive Analytics'],
      stats: '300% ROI',},
    {title: 'IT Infrastructure',
      description: 'Build and maintain robust technology foundations',
      icon: Cloud,
      color: 'text-blue-400',
      features: ['Cloud Migration', 'Server Management', 'Network Security', 'Data Backup'],
      stats: '99.9% Uptime',},
    {title: 'Cybersecurity',
      description: 'Protect your business with enterprise-grade security',
      icon: Shield,
      color: 'text-green-400',
      features: ['Threat Detection', 'Security Audits', 'Compliance', 'Incident Response'],
      stats: 'Zero Breaches',},
    {title: 'Automation',
      description: 'Streamline processes with intelligent automation',
      icon: Zap,
      color: 'text-yellow-400',
      features: ['Workflow Automation', 'Process Optimization', 'Smart Scheduling', 'Task Management'],
      stats: '95% Efficiency'
  }
    }
  ]
return (
    <section className="py-20 px-4"></section>
          <div className="max-w-7xl mx-auto"></div>
            <div className="text-center mb-16"></div>
              <h2 className="text-4xl font-bold text-white mb-4">Section Title</h2>
                </section>< className="$2 />
            </div><div className="text-center mb-16"></div>
              </div><h2 className="text-4xl font-bold text-white mb-4">Section Title</h2>
              <p className="text-xl text-gray-300">Section description</p>
                </div>
          </div>
                </section>
      <div className="container mx-auto px-4"></div>
        <div className="text-center mb-16"></div>;
          <h2>Our Core Services;</h2>
                </h2>
          <p>Comprehensive AI and IT solutions designed to transform your business and drive innovation;</p>
                </p>
        </div>
        <div className="grid grid-cols-1 md: grid-cols-2 lg:grid-cols-4 gap-8"></div>,
          {services.map((service, index) => (</div>}
                <div key={index}className="cyber-card hologram-card p-6 group hover: scale-105 transition-all duration-300"></div>,
              <div className="flex items-center mb-4"></div>
                <service></service>
                </service><div />
                  <h3 className="text-xl font-bold text-white"></h3>
                {service.title}
                </h3>
                  <div className="text-sm text-cyan-400 font-semibold"></div>
                {service.stats</div>}
                </div>
                </div>
              <p className="text-gray-300 mb-4"></p>
                {service.description</p>}
                </p>
              <ul></ul>
                {service.features.map((feature, featureIndex) => (
  }
                </ul><li></li>
                    </li><CheckCircle></CheckCircle>
                {feature}
                </li>
                ))}
                </ul>
              <a></a>
                Learn More </a><ArrowRight></ArrowRight>
              </a>
                </div>
          ))}
                </div>
        <div className="text-center mt-12" / /></div>
          <a></a>
            View All Services</a><ArrowRight></ArrowRight>
          </a>
                </div>
    </section>
  )
}
export default EnhancedServicesShowcase
  return (
    <section className="py-16"></section>
      <div className="container mx-auto px-4"></div>
        <div className="text-center mb-16"></div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 cyber-text neon-pulse">Our Core Services
          <p className="text-xl text-cyan-400 max-w-3xl mx-auto">Comprehensive AI and IT solutions designed to transform your business and drive innovation
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"></div>
                {services.map((service, index) => (
            <div key={index} className="cyber-card hologram-card p-6 group hover:scale-105 transition-all duration-300"></div>
              <div className="flex items-center mb-4"></div>
                <service.icon className={`w-12 h-12 ${service.color} mr-4`} />
                <div></div>
                  <h3 className="text-xl font-bold text-white"></h3>
                {service.title}
                <div className="text-sm text-cyan-400 font-semibold"></div>
                {service.stats}
                <p className="text-gray-300 mb-4"></p>
                {service.description}
                <ul className="space-y-2 mb-6"></ul>
                {service.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center text-sm text-gray-400"></li>
                    <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                {feature}
                ))}
                <$2 />
                href="/services"
                className="inline-flex items-center text-cyan-400 hover:text-cyan-300 font-medium group-hover:translate-x-1 transition-transform">
                Learn More <ArrowRight className="w-4 h-4 ml-2" />
          ))}
                <div className="text-center mt-12"></div>
          <$2 />
            href="/services"
            className="cyber-button inline-flex items-center">
            View All Services
            <ArrowRight className="w-5 h-5 ml-2" />
  )
}
export default EnhancedServicesShowcase</div>
                </div></div>
                </div></div>
                </div></div>
                </div></p>
                </p></h2>
                </h3></ul>
                </li></section>
