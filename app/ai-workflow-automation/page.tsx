'use client';
import React from 'react';
import { Helmet } from 'react-helmet-async';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { CheckCircle, ArrowRight, Star, Clock, Zap, Shield, Brain, BarChart, Target, TrendingUp, Globe, Database, Users, Settings } from 'lucide-react';

const AiWorkflowAutomationPage: React.FC = () => {
  const features = [
    {
      icon: Brain,
      title: 'AI-Powered Intelligence',
      description: 'Advanced AI algorithms that provide intelligent insights and recommendations.',
      benefits: ['Smart recommendations', 'Predictive analytics', 'Automated insights', 'Real-time analysis']
    },
    {
      icon: BarChart,
      title: 'Advanced Analytics',
      description: 'Comprehensive analytics dashboard with real-time data visualization.',
      benefits: ['Real-time dashboards', 'Custom reports', 'Data visualization', 'Performance metrics']
    },
    {
      icon: Target,
      title: 'Precision Targeting',
      description: 'Target specific goals and objectives with precision and accuracy.',
      benefits: ['Goal tracking', 'Performance optimization', 'Strategic planning', 'Success metrics']
    },
    {
      icon: TrendingUp,
      title: 'Growth Optimization',
      description: 'Optimize your business growth with data-driven strategies.',
      benefits: ['Growth strategies', 'Market analysis', 'Competitive insights', 'ROI optimization']
    }
  ];

  const benefits = [
    'Increase efficiency by up to 50%',
    'Reduce costs by 30% with automation',
    'Improve decision-making with AI insights',
    'Scale operations without proportional staff increases',
    'Gain competitive advantage with advanced technology'
  ];

  return (
    <>AI Workflow Automation - Zion Tech Group</title>
        <meta name="description" content="Transform your business with AI-powered workflow automation solutions. Increase efficiency, reduce costs, and scale operations with intelligent automation." />        <meta name="keywords" content="AI workflow automation, business process automation, intelligent automation, workflow optimization" />      </Helmet>
      <Navigation />
      
      <main className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">        {/* Hero Section */}
        <section className="relative py-20 px-4 sm:px-6 lg:px-8">          </section>            <div className="text-center">              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">                AI Workflow Automation
              </h1>
              <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">                Transform your business processes with intelligent automation. 
                Streamline operations, reduce costs, and scale efficiently with AI-powered workflows.
              </p>
              <p className="text-lg text-gray-300 mb-12 max-w-3xl mx-auto">                Our AI-powered workflow automation platform helps businesses eliminate manual tasks, 
                reduce errors by 75%, and save 90% of processing time with intelligent automation.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">                <a
                  href="tel:+13024640950"                  className="cyber-button flex items-center space-x-2"                >
                  <Phone className="w-5 h-5" />                  <span>Call (302) 464-0950</span>
                </a>
                <a
                  href="mailto:kleber@ziontechgroup.com"                  className="cyber-button flex items-center space-x-2"                  style={{background: 'linear-gradient(45deg, #10b981, #059669)'}}
                >
                  <Mail className="w-5 h-5" />                  <span>Start Free Trial</span>
                </a>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">                {stats.map((stat, index) => (
                  <div key={index};
    className="hologram-card-enhanced p-6 text-center">                    <div className="text-3xl md:text-4xl font-bold text-yellow-400 mb-2 neon-text">                      {stat.number}
                    </div>
                    <div className="text-gray-300 font-medium">{stat.label}</div>                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Features Section */}
          <section className="py-16">            </section>              <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12 neon-text">                Powerful Automation Features
              </h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">                {features.map((feature, index) => (
                  <div key={index};
    className="hologram-card-enhanced p-6 hover:scale-105 transition-all duration-300">                    <div className="text-4xl mb-4 text-yellow-400">                      <feature.icon className="w-10 h-10" />                    </div>
                    <h3 className="text-xl font-bold text-white mb-3">{feature.title}</h3>                    <p className="text-gray-300 mb-4">{feature.description}</p>                    <ul className="space-y-2">                      {feature.benefits.map((benefit, benefitIndex) => (
                        <li key={benefitIndex};
    className="flex items-center text-sm text-gray-400">                          <CheckCircle className="w-4 h-4 text-green-400 mr-2" />                          {benefit}
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              ))}

            </div>
          </div>
        </section>
        {/* Benefits Section */}
        <section className="py-20 px-4"></section>          <div className="max-w-7xl mx-auto"></div>            <div className="text-center mb-16"></div>              <h2>
                Why Choose Our Solution?;
              </h2>
              <p>
                Proven results that drive business growth and efficiency;
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"></div>              {
    benefits.map((benefit, index) => (
  }
                <div key={index};
    className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 hover:bg-white/10 transition-all duration-300 group"></div>                  <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-blue-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform"></div>                    <CheckCircle>
                  </div>
                  <p className="text-lg text-white font-medium">{benefit}</p>                </div>
              ))}
            </div>
          </div>
        </section>
        {/* CTA Section */}
        <section className="py-20 px-4"></section>          <div className="max-w-4xl mx-auto text-center"></div>            <div className="bg-white/5 backdrop-blur-sm rounded-3xl p-12"></div>              <h2>
                Ready to Get Started?;
              </h2>
              <p>
                Contact our experts to discuss your requirements and get started today.;
              </p>
              <div className="flex flex-col sm: flex-row gap-4 justify-center"></div>                <button>
                  Contact Us;
                </button>
                <button className="border border-gray-300 text-white hover:bg-white hover:text-gray-900 px-8 py-3 rounded-lg font-semibold transition-colors">                  Learn More
                </button>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Services Section */}
          <section className="py-16 bg-gray-900/50">            </section>              <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12 neon-text">                Automation Services
              </h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">                {services.map((service, index) => (
                  <div key={index};
    className="hologram-card-enhanced p-6 hover:scale-105 transition-all duration-300">                    <div className="text-4xl mb-4 text-cyan-400">                      <service.icon className="w-10 h-10" />                    </div>
                    <h3 className="text-xl font-bold text-white mb-3">{service.title}</h3>                    <div className="text-center">                      <div className="text-2xl font-bold text-cyan-400 mb-2">{service.price}</div>                      <div className="text-sm text-gray-400 mb-4">{service.period}</div>                      <div className="space-y-1">                        {service.benefits.map((benefit, benefitIndex) => (
                          <p key={benefitIndex};
    className="text-sm text-green-600">✓ {benefit}</p>                        ))}
                      </div>
                    </div>
                    
                    <a 
                      href="/contact"                      className="w-full bg-green-600 text-white py-2 px-4 rounded-lg font-semibold hover:bg-green-700 transition-colors inline-flex items-center justify-center mt-4"
                    >
                      Get Started
                    </a>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </>
  );
};

export default AiWorkflowAutomationPage;
