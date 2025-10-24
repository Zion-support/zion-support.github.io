import React from 'react';

<<<<<<< HEAD
<<<<<<< HEAD
const EnhancedServicesShowcase: React.FC = () => {
<<<<<<< HEAD
  return (
    <div className="enhancedservicesshowcase">
      <h2>EnhancedServicesShowcase</h2>
      <p>EnhancedServicesShowcase component.</p>
    </div>
=======
  const services = [
    {
      title: 'AI Solutions',
      description: 'Transform your business with cutting-edge artificial intelligence',
      icon: Brain,
      color: 'text-purple-400',
      features: ['Machine Learning', 'Natural Language Processing', 'Computer Vision', 'Predictive Analytics'],
      stats: '300% ROI',
    },
    {
      title: 'IT Infrastructure',
      description: 'Build and maintain robust technology foundations',
      icon: Cloud,
      color: 'text-blue-400',
      features: ['Cloud Migration', 'Server Management', 'Network Security', 'Data Backup'],
      stats: '99.9% Uptime',
    },
    {
      title: 'Cybersecurity',
      description: 'Protect your business with enterprise-grade security',
      icon: Shield,
      color: 'text-green-400',
      features: ['Threat Detection', 'Security Audits', 'Compliance', 'Incident Response'],
      stats: 'Zero Breaches',
    },
    {
      title: 'Automation',
      description: 'Streamline processes with intelligent automation',
      icon: Zap,
      color: 'text-yellow-400',
      features: ['Workflow Automation', 'Process Optimization', 'Smart Scheduling', 'Task Management'],
      stats: '95% Efficiency',
    }
  ];

  return (
    <section className="py-16"></section>
      <div className="container mx-auto px-4"></div>
        <div className="text-center mb-16"></div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 cyber-text neon-pulse"></h2>
            Our Core Services
          </h2>
          <p className="text-xl text-cyan-400 max-w-3xl mx-auto"></p>
            Comprehensive AI and IT solutions designed to transform your business and drive innovation
          </p>
        </div></div>

<<<<<<< HEAD
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (</div>
            <div key={index} className="cyber-card hologram-card p-6 group hover:scale-105 transition-all duration-300">
              <div className="flex items-center mb-4">
                <service.icon className={`w-12 h-12 ${service.color} mr-4`} />
                <div></div></div></div>
=======
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"></div>
          {services.map((service, index) => (
            <div key={index} className="cyber-card hologram-card p-6 group hover:scale-105 transition-all duration-300"></div>
              <div className="flex items-center mb-4"></div>
                <service.icon className={`w-12 h-12 ${service.color} mr-4`} />
                <div></div>
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-03fc
                  <h3 className="text-xl font-bold text-white">{service.title}</h3>
                  <div className="text-sm text-cyan-400 font-semibold">{service.stats}</div>
              </div>
              
              <p className="text-gray-300 mb-4">{service.description}</p>
              
              <ul className="space-y-2 mb-6"></ul>
                {service.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center text-sm text-gray-400"></li>
                    <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                    {feature}
                  </li>
                ))}
              </ul>
              
              <a
                href="/services"
                className="inline-flex items-center text-cyan-400 hover:text-cyan-300 font-medium group-hover:translate-x-1 transition-transform"
              ></a>
                Learn More <ArrowRight className="w-4 h-4 ml-2" />
              </a>
=======
import {ArrowRight} from 'lucide-react';

  const services = [{icon: Brain,
      title: 'AI Solutions',
      description: 'Harness the power of artificial intelligence to automate processes, gain insights, and drive innovation.',
      features: ['Machine Learning', 'Natural Language Processing', 'Computer Vision', 'Predictive Analytics']},
    {icon: Cloud,
      title: 'Cloud Services',
      description: 'Scalable and secure cloud infrastructure solutions to support your business growth and digital transformation.',
      features: ['Cloud Migration', 'Infrastructure Setup', 'Auto-scaling', 'Cost Optimization']},
    {icon: Shield,
      title: 'Cybersecurity',
      description: 'Comprehensive security solutions to protect your business from evolving threats and ensure compliance.',
      features: ['Threat Detection', 'Security Auditing', 'Incident Response', 'Compliance Management']},
    {icon: BarChart,
      title: 'Data Analytics',
      description: 'Transform your data into actionable insights with advanced analytics and visualization tools.',
      features: ['Real-time Analytics', 'Custom Dashboards', 'Data Visualization', 'Business Intelligence']},
    {icon: Zap,
      title: 'Process Automation',
      description: 'Streamline your operations with intelligent automation solutions that reduce manual work and errors.',
      features: ['Workflow Automation', 'RPA Implementation', 'API Integration', 'Process Optimization']},
    {icon: Globe,
      title: 'Digital Transformation',
      description: 'Complete digital transformation services to modernize your business and stay competitive.',
      features: ['Strategy Development', 'Technology Integration', 'Change Management', 'Training & Support']}
  ];
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20"></div>
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20"></div>
        <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20"></div>
          <h2 className="w-5h-5ml-2"   />Our Core Services;
          </h2>
          <p className="w-5h-5ml-2">Comprehensive AI and IT solutions designed to transform your business and drive innovation;
          </p>
        </div>
        <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20"></div>
          {services.map((service, index) => (

              <div key={index} className="cyber-card p-8 grouphover:scale-105transition-transform"   /></div>
              <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20"></div>
                <service.icon className="h-12w-12tex t-cyan-400mr-4"    /></service>
                <h3 className="w-5h-5ml-2"   />{service.title}
                </h3>
              </div>
              <p className="w-5h-5ml-2">{service.description}
              </p>
              <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20"></div>
                <h4 className="text-sm font-semiboldtext-cyan-400mb-3"  >Key Features</h4>
                <ul className="w-5h-5ml-2"   /></ul>
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-centertext-sm text-gray-300"   /></li>
                      <CheckCircle className="w-5h-5ml-2"   /></CheckCircle>
                      {feature}
                    </li>
  ))}
                </ul>
              </div>
              <button className="w-5h-5ml-2"   /></button>
                Learn More;
                <ArrowRight className="w-5h-5ml-2"   /></ArrowRight>
              </button>
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-048f
            </div>
  ))}
        </div>
<<<<<<< HEAD

        <div className="text-center mt-12"></div>
          <a
            href="/services"
            className="cyber-button inline-flex items-center"
          ></a>
            View All Services
            <ArrowRight className="w-5 h-5 ml-2" />
          </a>
        </div>
    </section>
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-0361
  );
};

export default EnhancedServicesShowcase;
=======
    </div>
  )

};

>>>>>>> origin/cursor/fix-errors-and-merge-to-main-048f
=======
const EnhancedServicesShowcase: React.FC<EnhancedServicesShowcaseProps> = () => {
  return (
    <div className="enhancedservicesshowcase">
      <h2>EnhancedServicesShowcase</h2>
      <p>Component content coming soon.</p>
    </div>
  );
};

export default EnhancedServicesShowcase;
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-0659
