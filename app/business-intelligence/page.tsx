import React from 'react';
import { Helmet } from 'react-helmet-async';
import { BarChart, TrendingUp, Database, Users, Target, Zap, Shield, Globe, CheckCircle, ArrowRight } from 'lucide-react';

const BusinessIntelligencePage: React.FC = () => {
  const biServices = [
    {
      title: 'Data Analytics & Visualization',
      description: 'Transform raw data into actionable insights with advanced analytics and interactive dashboards.',
      price: '$2,500/month',
      features: [
        'Interactive dashboards',
        'Real-time data processing',
        'Custom KPI tracking',
        'Predictive analytics',
        'Data visualization tools'
      ],
      icon: BarChart,
      color: 'text-blue-400'
    },
    {
      title: 'Business Intelligence Consulting',
      description: 'Strategic BI consulting to optimize your data strategy and improve decision-making processes.',
      price: '$500/hour',
      features: [
        'Data strategy development',
        'Process optimization',
        'Technology assessment',
        'Change management',
        'Training programs'
      ],
      icon: Users,
      color: 'text-green-400'
    },
    {
      title: 'Data Warehouse Solutions',
      description: 'Build scalable data warehouses to centralize and organize your business data effectively.',
      price: '$5,000/month',
      features: [
        'Data integration',
        'ETL/ELT processes',
        'Data quality management',
        'Scalable architecture',
        'Cloud migration'
      ],
      icon: Database,
      color: 'text-purple-400'
    },
    {
      title: 'Performance Dashboards',
      description: 'Create executive-level dashboards for real-time monitoring of business performance.',
      price: '$1,500/month',
      features: [
        'Executive dashboards',
        'Real-time monitoring',
        'Mobile optimization',
        'Custom reporting',
        'Alert systems'
      ],
      icon: Target,
      color: 'text-orange-400'
    }
  ];

  const technologies = [
    { name: 'Power BI', description: 'Microsoft\'s business analytics platform' },
    { name: 'Tableau', description: 'Advanced data visualization and analytics' },
    { name: 'QlikView', description: 'Self-service business intelligence' },
    { name: 'Looker', description: 'Modern BI platform for data teams' },
    { name: 'SAP Analytics', description: 'Enterprise-grade analytics solutions' },
    { name: 'AWS QuickSight', description: 'Cloud-native BI service' }
  ];

  const benefits = [
    {
      title: 'Data-Driven Decisions',
      description: 'Make informed decisions based on real-time data and insights',
      icon: TrendingUp
    },
    {
      title: 'Improved Efficiency',
      description: 'Streamline processes and identify optimization opportunities',
      icon: Zap
    },
    {
      title: 'Competitive Advantage',
      description: 'Gain insights that give you an edge over competitors',
      icon: Shield
    },
    {
      title: 'Scalable Solutions',
      description: 'Build BI solutions that grow with your business',
      icon: Globe
    }
  ];

  return (
    <>
      <Helmet>
        <title>Business Intelligence - Zion Tech Group</title>
        <meta name="description" content="Transform your data into actionable insights with our comprehensive business intelligence solutions. Advanced analytics, dashboards, and data consulting services." />
        <meta name="keywords" content="business intelligence, data analytics, dashboards, data visualization, BI consulting, data warehouse" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <div className="container mx-auto px-4 py-16 pt-24">
          {/* Hero Section */}
          <section className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              <BarChart className="w-16 h-16 text-cyan-400 mx-auto mb-4" />
              Business Intelligence
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Transform your data into actionable insights with our comprehensive business intelligence solutions. 
              Make data-driven decisions and gain a competitive advantage.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="#services"
                className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-cyan-600 hover:to-blue-700 transition-all duration-200"
              >
                Explore Solutions
              </a>
              <a
                href="/contact"
                className="border border-cyan-400 text-cyan-400 px-8 py-3 rounded-lg font-semibold hover:bg-cyan-400 hover:text-white transition-all duration-200"
              >
                Get Consultation
              </a>
            </div>
          </section>

          {/* Services Grid */}
          <section id="services" className="mb-16">
            <h2 className="text-3xl font-bold text-white text-center mb-12">
              BI Solutions & Services
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {biServices.map((service, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/15 transition-all duration-300">
                  <div className="flex items-center space-x-3 mb-4">
                    <service.icon className={`w-8 h-8 ${service.color}`} />
                    <h3 className="text-xl font-semibold text-white">{service.title}</h3>
                  </div>
                  
                  <p className="text-gray-300 mb-4">{service.description}</p>
                  
                  <div className="mb-4">
                    <div className="text-2xl font-bold text-cyan-400 mb-2">{service.price}</div>
                    <ul className="space-y-1">
                      {service.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="text-gray-300 text-sm flex items-center">
                          <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <a
                    href="/contact"
                    className="inline-flex items-center text-cyan-400 hover:text-cyan-300 font-medium text-sm"
                  >
                    Learn More
                    <ArrowRight className="w-4 h-4 ml-1" />
                  </a>
                </div>
              ))}
            </div>
          </section>

          {/* Technologies */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-white text-center mb-12">
              Technologies We Use
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {technologies.map((tech, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 text-center">
                  <h3 className="text-lg font-semibold text-white mb-2">{tech.name}</h3>
                  <p className="text-gray-300 text-sm">{tech.description}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Benefits */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-white text-center mb-12">
              Why Choose Our BI Solutions?
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {benefits.map((benefit, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 text-center">
                  <benefit.icon className="w-12 h-12 text-cyan-400 mx-auto mb-4" />
                  <h3 className="text-lg font-semibold text-white mb-3">{benefit.title}</h3>
                  <p className="text-gray-300 text-sm">{benefit.description}</p>
                </div>
              ))}
            </div>
          </section>

          {/* CTA Section */}
          <section className="text-center">
            <div className="bg-gradient-to-r from-purple-600/20 to-blue-600/20 rounded-2xl p-8 border border-purple-500/30">
              <h2 className="text-3xl font-bold text-white mb-6">
                Ready to Unlock Your Data's Potential?
              </h2>
              <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
                Transform your business with data-driven insights. Our BI experts will help you build 
                the perfect solution for your needs.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="/contact"
                  className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-cyan-600 hover:to-blue-700 transition-all duration-200"
                >
                  Start Your BI Journey
                </a>
                <a
                  href="tel:+13024640950"
                  className="border border-cyan-400 text-cyan-400 px-8 py-3 rounded-lg font-semibold hover:bg-cyan-400 hover:text-white transition-all duration-200"
                >
                  Call (302) 464-0950
                </a>
              </div>
            </div>
          </section>
        </div>
      </div>
    </>
  );
};

export default BusinessIntelligencePage;