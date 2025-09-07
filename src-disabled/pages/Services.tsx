import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Code, Database, Smartphone, Shield, Cloud, Globe, Zap, Brain, Cpu, Lock, BarChart3, Users, Phone, Mail, MapPin } from 'lucide-react';
import Card from '../components/Card';
import Header from '../components/Header';
import Footer from '../components/Footer';
import SEO from '../components/SEO';

const Services: React.FC = () => {
 ;
  const services = [
    {
      icon: <Code className=\"w-12 h-12\" />,
      title: 'AI Services',
  description: 'Custom AI solutions powered by machine learning and deep learning technologies',
      features: [
        'Machine Learning Models',
        'Natural Language Processing',
        'Computer Vision',
        'Predictive Analytics',
        'AI Chatbots',
        'Process Automation'
      ],
      pricing: 'Starting at $5,000/month',
  href: '/services/ai-services'}
   ,}
},
    {
      icon: <Database className=\"w-12 h-12\" />,
      title: 'IT Services',
  description: 'Comprehensive IT infrastructure and digital transformation solutions',
      features: [
        'System Architecture',
        'Database Design',
        'API Development',
        'Legacy System Migration',
        'Performance Optimization',
        'Technical Consulting'
      ],
      pricing: 'Starting at $3,000/month',
  href: '/services/it-services'}
   ,}
},
    {
      icon: <Smartphone className=\"w-12 h-12\" />,
      title: 'Micro SaaS',
  description: 'Scalable software-as-a-service solutions for growing businesses',
      features: [
        'SaaS Architecture',
        'Multi-tenancy',
        'Subscription Management',
        'Payment Integration',
        'User Management',
        'Analytics Dashboard'
      ],
      pricing: 'Starting at $2,500/month',
  href: '/services/micro-saas'}
   ,}
},
    {
      icon: <Shield className=\"w-12 h-12\" />,
      title: 'Cybersecurity',
  description: 'Advanced security solutions to protect your digital assets',
      features: [
        'Security Audits',
        'Penetration Testing',
        'Compliance Management',
        'Threat Detection',
        'Data Encryption',
        'Security Training'
      ],
      pricing: 'Starting at $4,000/month',
  href: '/services/cybersecurity'}
   ,}
},
    {
      icon: <Cloud className=\"w-12 h-12\" />,
      title: 'Cloud Solutions',
  description: 'Scalable cloud infrastructure and migration services',
      features: [
        'Cloud Migration',
        'Infrastructure as Code',
        'Container Orchestration',
        'Auto-scaling',
        'Disaster Recovery',
        'Cost Optimization'
      ],
      pricing: 'Starting at $3,500/month',
  href: '/services/cloud-solutions'}
   ,}
},
    {
      icon: <Globe className=\"w-12 h-12\" />,
      title: 'Data Analytics',
  description: 'Transform data into actionable insights with advanced analytics',
      features: [
        'Business Intelligence',
        'Real-time Dashboards',
        'Data Visualization',
        'ETL Pipelines',
        'Machine Learning Models',
        'Custom Reports'
      ],
      pricing: 'Starting at $2,800/month',
  href: '/services/data-analytics'}
   ,}
}
  ];

const additionalServices = [
    {
      icon: <Zap className=\"w-8 h-8\" />,
      title: 'Automation Solutions',
  description: 'Streamline workflows with intelligent automation',}
      pricing: '$1,500/month'}
    },
    {
      icon: <Brain className=\"w-8 h-8\" />,
      title: 'Machine Learning Consulting',
  description: 'Expert guidance on ML implementation',
      pricing: '$200/hour'}
   ,}
},
    {
      icon: <Cpu className=\"w-8 h-8\" />,
      title: 'DevOps & CI/CD',
  description: 'Modern development and deployment practices',}
      pricing: '$2,200/month'}
    },
    {
      icon: <Lock className=\"w-8 h-8\" />,
      title: 'Compliance & Governance',
  description: 'Ensure regulatory compliance and data governance',}
      pricing: '$3,200/month'}
    },
    {
      icon: <BarChart3 className=\"w-8 h-8\" />,
      title: 'Business Intelligence',
  description: 'Transform data into strategic insights',}
      pricing: '$2,600/month'}
    },
    {
      icon: <Users className=\"w-8 h-8\" />,
      title: 'Team Augmentation',
  description: 'Scale your team with expert developers',
      pricing: '$150/hour'}
   ,}
}
  ];

  return (
    <>
      <SEO;
title=\"Our Services - Zion Tech Group\"
        description=\"Discover our comprehensive range of technology services including AI solutions, IT services, cybersecurity, cloud solutions, and more.\"
        keywords=\"AI services, IT services, cybersecurity, cloud solutions, data analytics, micro SaaS, technology consulting\"
        url=\"/services\"
      />
      
      <div className=\"min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900\" />
        <Header />
        
        <main />
        {/* Hero Section */}
        <section className=\"pt-20 pb-16 px-4\" />
          <div className=\"max-w-7xl mx-auto\" />
            <div className=\"text-center mb-16\" />
              <h1 className=\"text-5xl md: text-7xl font-bold text-white mb-6\" />
                Our <span className=\"text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500\" />Services</span>
              </h1>
              <p className=\"text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed\" />
                Comprehensive technology solutions designed to accelerate your business growth;
and digital transformation.
              </p>
            </div>
          </div>
        </section>

        {/* Services Grid *,}
}
        <section className=\"py-20\" />
          <div className=\"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8\" />
            <div className=\"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8\" />
              {services.map((service, index) => (}
                <div;}
key={index}
                  className=\"group bg-gray-800/50 backdrop-blur-sm rounded-2xl p-8 hover: bg-gray-800/70 transition-all duration-300 border border-gray-700/50 hover:border-cyan-400/50\"
                 />
                  <div className=\"text-cyan-400 mb-6 group-hover:scale-110 transition-transform duration-300\" />
                    {service.icon}
                  </div>
                  
                  <h3 className=\"text-2xl font-bold text-white mb-4 group-hover:text-cyan-400 transition-colors\" />
                    {service.title}
                  </h3>
                  
                  <p className=\"text-gray-300 mb-6 leading-relaxed\" />
                    {service.descriptio,}
}
                  </p>

                  <ul className=\"space-y-2 mb-6\" />
                    {service.features.map((feature, featureIndex) => (}
                      <li key={featureIndex} className=\"flex items-center text-gray-300\" />
                        <div className=\"w-2 h-2 bg-cyan-400 rounded-full mr-3 flex-shrink-0\" /></div>
                        <span className=\"text-sm\" />{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <div className=\"mb-6\" />
                    <div className=\"text-2xl font-bold text-cyan-400 mb-2\" />
                      {service.pricing}
                    </div>
                    <div className=\"text-sm text-gray-400\" />
                      Custom pricing available for enterprise;
                    </div>
                  </div>

                  <Link;
to={service.href}
                    className=\"inline-flex items-center text-cyan-400 hover: text-cyan-300 font-medium group-hover:translate-x-1 transition-all duration-300\"
                   />
                    Learn More;
                    <ArrowRight className=\"ml-2 w-4 h-4\" />
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Additional Services Section *,}
}
        <section className=\"py-20 bg-gray-900/50\" />
          <div className=\"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8\" />
            <div className=\"text-center mb-16\" />
              <h2 className=\"text-4xl md:text-5xl font-bold text-white mb-6\" />
                Additional <span className=\"text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500\" />Services</span>
              </h2>
              <p className=\"text-xl text-gray-300 max-w-3xl mx-auto\" />
                Specialized solutions to complement your core technology needs;
              </p>
            </div>

            <div className=\"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6\" />
              {additionalServices.map((service, index) => (}
                <div;}
key={index}
                  className=\"bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 hover: bg-gray-800/70 transition-all duration-300 border border-gray-700/50 hover:border-cyan-400/50\"
                 />
                  <div className=\"text-cyan-400 mb-4\" />
                    {service.icon}
                  </div>
                  <h3 className=\"text-xl font-semibold text-white mb-2\" />
                    {service.title}
                  </h3>
                  <p className=\"text-gray-300 mb-4 text-sm\" />
                    {service.description}
                  </p>
                  <div className=\"text-lg font-bold text-cyan-400\" />
                    {service.pricing}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Information Section */}
        <section className=\"py-20\" />
          <div className=\"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8\" />
            <div className=\"text-center mb-16\" />
              <h2 className=\"text-4xl md:text-5xl font-bold text-white mb-6\" />
                Get In <span className=\"text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500\" />Touch</span>
              </h2>
              <p className=\"text-xl text-gray-300 max-w-3xl mx-auto\" />
                Ready to transform your business? Contact our expert team for a free consultation.
              </p>
            </div>

            <div className=\"grid grid-cols-1 md:grid-cols-3 gap-8\" />
              <div className=\"text-center\" />
                <div className=\"w-16 h-16 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full flex items-center justify-center mx-auto mb-4\" />
                  <Phone className=\"w-8 h-8 text-black\" />
                </div>
                <h3 className=\"text-xl font-semibold text-white mb-2\" />Phone</h3>
                <p className=\"text-cyan-400 text-lg font-medium\" />+1 302 464 0950</p>
                <p className=\"text-gray-400 text-sm\" />Mon-Fri 9AM-6PM EST</p>
              </div>

              <div className=\"text-center\" />
                <div className=\"w-16 h-16 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full flex items-center justify-center mx-auto mb-4\" />
                  <Mail className=\"w-8 h-8 text-black\" />
                </div>
                <h3 className=\"text-xl font-semibold text-white mb-2\" />Email</h3>
                <p className=\"text-cyan-400 text-lg font-medium\" />kleber@ziontechgroup.com</p>
                <p className=\"text-gray-400 text-sm\" />24/7 Support Available</p>
              </div>

              <div className=\"text-center\" />
                <div className=\"w-16 h-16 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full flex items-center justify-center mx-auto mb-4\" />
                  <MapPin className=\"w-8 h-8 text-black\" />
                </div>
                <h3 className=\"text-xl font-semibold text-white mb-2\" />Address</h3>
                <p className=\"text-cyan-400 text-lg font-medium\" />364 E Main St STE 1008</p>
                <p className=\"text-gray-400 text-sm\" />Middletown DE 19709</p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className=\"py-20 bg-gradient-to-r from-cyan-600/20 to-blue-600/20\" />
          <div className=\"max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8\" />
            <h2 className=\"text-4xl md:text-5xl font-bold text-white mb-6\" />
              Ready to Get Started?
            </h2>
            <p className=\"text-xl text-gray-300 mb-8 max-w-2xl mx-auto\" />
              Let's discuss your project and find the perfect solution for your business needs.
            </p>
            <div className=\"flex flex-col sm:flex-row gap-4 justify-center\" />
              <Link;
to=\"/contact\"
                className=\"inline-flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-cyan-600 hover:bg-cyan-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-cyan-500\"
               />
                Get Free Consultation;
                <ArrowRight className=\"ml-2 h-5 w-5\" />
              </Link>
              <Link;
to=\"/pricing\"
                className=\"inline-flex items-center justify-center px-8 py-3 border border-white text-base font-medium rounded-md text-white hover:bg-white hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-white\"
               />
                View Pricing;
              </Link>
            </div>
          </div>
        </section>
        </main>

        <Footer />
      </div>
    </>
  ),
};


export default Services;